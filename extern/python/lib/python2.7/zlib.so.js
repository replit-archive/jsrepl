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



var $0___SIZE = 64; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 112; // %2
  
var $3___SIZE = 196; // %3
  
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
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyVarObject___SIZE = 12; // %struct.PyVarObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_compobject___SIZE = 76; // %struct.compobject
  var $struct_compobject___FLATTENER = [0,4,8,64,68,72];
var $struct_internal_state___SIZE = 4; // %struct.internal_state
  
var $struct_z_stream___SIZE = 56; // %struct.z_stream
  
var __str;
var __str1;
var __str2;
var _ZlibError;
var __str3;
var __str4;
var _compressobj__doc__;
var _decompressobj__doc__;
var __str5;
var _compress__doc__;
var __str6;

var __str7;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var _decompress__doc__;
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
var _comp_compress__doc__;
var __str25;
var __str26;
var _decomp_decompress__doc__;
var __str27;
var __str28;
var __str29;
var _comp_flush__doc__;
var __str30;
var __str31;
var __str32;
var _comp_copy__doc__;
var __str33;
var __str34;
var _decomp_copy__doc__;
var __str35;
var _decomp_flush__doc__;
var __str36;
var __str37;
var __str38;
var __str39;
var __str40;
var _comp_methods;
var __str41;
var _Decomp_methods;
var __str42;
var __str43;
var _adler32__doc__;
var __str44;
var _crc32__doc__;
var __str45;
var __str46;
var __str47;
var __str48;
var __str49;
var _zlib_methods;
var __str50;
var _Comptype;
var __str51;
var _Decomptype;
var _zlib_module_documentation;

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


































  function _zlib_error($zst, $err, $msg) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $err_addr;
        var $msg_addr;
        var $zmsg;
        $err_addr=$err;
        $msg_addr=$msg;
        var $0=$zst+24; //@line 75 "zlibmodule.c"
        var $1=HEAP[$0]; //@line 75 "zlibmodule.c"
        $zmsg=$1; //@line 75 "zlibmodule.c"
        var $2=$zmsg; //@line 76 "zlibmodule.c"
        var $3=($2)==0; //@line 76 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 76 "zlibmodule.c"
      case 1: // $bb
        var $4=$err_addr; //@line 77 "zlibmodule.c"
        if ($4 == -5) {
          __label__ = 2; break;
        }
        else if ($4 == -3) {
          __label__ = 4; break;
        }
        else if ($4 == -2) {
          __label__ = 3; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 2: // $bb1
        $zmsg=__str; //@line 79 "zlibmodule.c"
        __label__ = 5; break; //@line 79 "zlibmodule.c"
      case 3: // $bb2
        $zmsg=__str1; //@line 82 "zlibmodule.c"
        __label__ = 5; break; //@line 82 "zlibmodule.c"
      case 4: // $bb3
        $zmsg=__str2; //@line 85 "zlibmodule.c"
        __label__ = 5; break; //@line 85 "zlibmodule.c"
      case 5: // $bb4_thread
        var $5=HEAP[_ZlibError]; //@line 90 "zlibmodule.c"
        var $6=$err_addr; //@line 90 "zlibmodule.c"
        var $7=$msg_addr; //@line 90 "zlibmodule.c"
        __lastLabel__ = 5; __label__ = 8; break;
      case 6: // $bb4
        var $_pr=$zmsg;
        var $8=($_pr)==0; //@line 89 "zlibmodule.c"
        var $9=HEAP[_ZlibError]; //@line 90 "zlibmodule.c"
        var $10=$err_addr; //@line 90 "zlibmodule.c"
        var $11=$msg_addr; //@line 90 "zlibmodule.c"
        if ($8) { __lastLabel__ = 6; __label__ = 7; break; } else { __lastLabel__ = 6; __label__ = 8; break; } //@line 89 "zlibmodule.c"
      case 7: // $bb5
        var $12=_PyErr_Format($9, __str3, allocate([$10,0,0,0,$11,0,0,0], ["i32",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 90 "zlibmodule.c"
        __label__ = 9; break; //@line 90 "zlibmodule.c"
      case 8: // $bb6
        var $13=__lastLabel__ == 5 ? $7 : ($11);
        var $14=__lastLabel__ == 5 ? $6 : ($10);
        var $15=__lastLabel__ == 5 ? $5 : ($9);
        var $16=$zmsg; //@line 92 "zlibmodule.c"
        var $17=_PyErr_Format($15, __str4, allocate([$14,0,0,0,$13,0,0,0,$16,0,0,0], ["i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 92 "zlibmodule.c"
        __label__ = 9; break; //@line 92 "zlibmodule.c"
      case 9: // $return
        ;
        return; //@line 93 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _newcompobject($type) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $retval;
        var $0;
        var $self;
        $type_addr=$type;
        var $1=$type_addr; //@line 109 "zlibmodule.c"
        var $2=__PyObject_New($1); //@line 109 "zlibmodule.c"
        var $3=$2; //@line 109 "zlibmodule.c"
        $self=$3; //@line 109 "zlibmodule.c"
        var $4=$self; //@line 110 "zlibmodule.c"
        var $5=($4)==0; //@line 110 "zlibmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 110 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 111 "zlibmodule.c"
        __label__ = 11; break; //@line 111 "zlibmodule.c"
      case 2: // $bb1
        var $6=$self; //@line 112 "zlibmodule.c"
        var $7=$6+72; //@line 112 "zlibmodule.c"
        HEAP[$7]=0; //@line 112 "zlibmodule.c"
        var $8=_PyString_FromString(__str5); //@line 113 "zlibmodule.c"
        var $9=$self; //@line 113 "zlibmodule.c"
        var $10=$9+64; //@line 113 "zlibmodule.c"
        HEAP[$10]=$8; //@line 113 "zlibmodule.c"
        var $11=$self; //@line 114 "zlibmodule.c"
        var $12=$11+64; //@line 114 "zlibmodule.c"
        var $13=HEAP[$12]; //@line 114 "zlibmodule.c"
        var $14=($13)==0; //@line 114 "zlibmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 114 "zlibmodule.c"
      case 3: // $bb2
        var $15=$self; //@line 115 "zlibmodule.c"
        var $16=$15; //@line 115 "zlibmodule.c"
        var $17=$16; //@line 115 "zlibmodule.c"
        var $18=HEAP[$17]; //@line 115 "zlibmodule.c"
        var $19=($18) - 1; //@line 115 "zlibmodule.c"
        var $20=$16; //@line 115 "zlibmodule.c"
        HEAP[$20]=$19; //@line 115 "zlibmodule.c"
        var $21=$16; //@line 115 "zlibmodule.c"
        var $22=HEAP[$21]; //@line 115 "zlibmodule.c"
        var $23=($22)==0; //@line 115 "zlibmodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 115 "zlibmodule.c"
      case 4: // $bb3
        var $24=$self; //@line 115 "zlibmodule.c"
        var $25=$24; //@line 115 "zlibmodule.c"
        var $26=$25+4; //@line 115 "zlibmodule.c"
        var $27=HEAP[$26]; //@line 115 "zlibmodule.c"
        var $28=$27+24; //@line 115 "zlibmodule.c"
        var $29=HEAP[$28]; //@line 115 "zlibmodule.c"
        var $30=$self; //@line 115 "zlibmodule.c"
        var $31=$30; //@line 115 "zlibmodule.c"
        FUNCTION_TABLE[$29]($31); //@line 115 "zlibmodule.c"
        __label__ = 5; break; //@line 115 "zlibmodule.c"
      case 5: // $bb4
        $0=0; //@line 116 "zlibmodule.c"
        __label__ = 11; break; //@line 116 "zlibmodule.c"
      case 6: // $bb5
        var $32=_PyString_FromString(__str5); //@line 118 "zlibmodule.c"
        var $33=$self; //@line 118 "zlibmodule.c"
        var $34=$33+68; //@line 118 "zlibmodule.c"
        HEAP[$34]=$32; //@line 118 "zlibmodule.c"
        var $35=$self; //@line 119 "zlibmodule.c"
        var $36=$35+68; //@line 119 "zlibmodule.c"
        var $37=HEAP[$36]; //@line 119 "zlibmodule.c"
        var $38=($37)==0; //@line 119 "zlibmodule.c"
        var $39=$self; //@line 120 "zlibmodule.c"
        if ($38) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 119 "zlibmodule.c"
      case 7: // $bb6
        var $40=$39; //@line 120 "zlibmodule.c"
        var $41=$40; //@line 120 "zlibmodule.c"
        var $42=HEAP[$41]; //@line 120 "zlibmodule.c"
        var $43=($42) - 1; //@line 120 "zlibmodule.c"
        var $44=$40; //@line 120 "zlibmodule.c"
        HEAP[$44]=$43; //@line 120 "zlibmodule.c"
        var $45=$40; //@line 120 "zlibmodule.c"
        var $46=HEAP[$45]; //@line 120 "zlibmodule.c"
        var $47=($46)==0; //@line 120 "zlibmodule.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 120 "zlibmodule.c"
      case 8: // $bb7
        var $48=$self; //@line 120 "zlibmodule.c"
        var $49=$48; //@line 120 "zlibmodule.c"
        var $50=$49+4; //@line 120 "zlibmodule.c"
        var $51=HEAP[$50]; //@line 120 "zlibmodule.c"
        var $52=$51+24; //@line 120 "zlibmodule.c"
        var $53=HEAP[$52]; //@line 120 "zlibmodule.c"
        var $54=$self; //@line 120 "zlibmodule.c"
        var $55=$54; //@line 120 "zlibmodule.c"
        FUNCTION_TABLE[$53]($55); //@line 120 "zlibmodule.c"
        __label__ = 9; break; //@line 120 "zlibmodule.c"
      case 9: // $bb8
        $0=0; //@line 121 "zlibmodule.c"
        __label__ = 11; break; //@line 121 "zlibmodule.c"
      case 10: // $bb9
        $0=$39; //@line 123 "zlibmodule.c"
        __label__ = 11; break; //@line 123 "zlibmodule.c"
      case 11: // $bb10
        var $56=$0; //@line 111 "zlibmodule.c"
        $retval=$56; //@line 111 "zlibmodule.c"
        var $retval11=$retval; //@line 111 "zlibmodule.c"
        ;
        return $retval11; //@line 111 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_compress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 68; _memset(__stackBase__, 0, 68);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $ReturnVal;
        var $input=__stackBase__;
        var $output;
        var $length=__stackBase__+4;
        var $level=__stackBase__+8;
        var $err;
        var $zst=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        $ReturnVal=0; //@line 134 "zlibmodule.c"
        HEAP[$level]=-1; //@line 136 "zlibmodule.c"
        var $1=$args_addr; //@line 140 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, __str6, allocate([$input,0,0,0,$length,0,0,0,$level,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 140 "zlibmodule.c"
        var $3=($2)==0; //@line 140 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 140 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 141 "zlibmodule.c"
        __label__ = 14; break; //@line 141 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$length]; //@line 143 "zlibmodule.c"
        var $5=((($4)/1000)|0); //@line 143 "zlibmodule.c"
        var $6=HEAP[$length]; //@line 143 "zlibmodule.c"
        var $7=($5) + 13; //@line 143 "zlibmodule.c"
        var $8=($7) + ($6); //@line 143 "zlibmodule.c"
        var $9=$zst+16; //@line 143 "zlibmodule.c"
        HEAP[$9]=$8; //@line 143 "zlibmodule.c"
        var $10=$zst+16; //@line 145 "zlibmodule.c"
        var $11=HEAP[$10]; //@line 145 "zlibmodule.c"
        var $12=_malloc($11); //@line 145 "zlibmodule.c"
        $output=$12; //@line 145 "zlibmodule.c"
        var $13=$output; //@line 146 "zlibmodule.c"
        var $14=($13)==0; //@line 146 "zlibmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 146 "zlibmodule.c"
      case 3: // $bb2
        var $15=HEAP[_PyExc_MemoryError]; //@line 147 "zlibmodule.c"
        _PyErr_SetString($15, __str7); //@line 147 "zlibmodule.c"
        $0=0; //@line 149 "zlibmodule.c"
        __label__ = 14; break; //@line 149 "zlibmodule.c"
      case 4: // $bb3
        var $16=$zst+32; //@line 155 "zlibmodule.c"
        HEAP[$16]=0; //@line 155 "zlibmodule.c"
        var $17=$zst+36; //@line 156 "zlibmodule.c"
        HEAP[$17]=0; //@line 156 "zlibmodule.c"
        var $18=$zst+12; //@line 157 "zlibmodule.c"
        var $19=$output; //@line 157 "zlibmodule.c"
        HEAP[$18]=$19; //@line 157 "zlibmodule.c"
        var $20=HEAP[$input]; //@line 158 "zlibmodule.c"
        var $21=$zst; //@line 158 "zlibmodule.c"
        HEAP[$21]=$20; //@line 158 "zlibmodule.c"
        var $22=HEAP[$length]; //@line 159 "zlibmodule.c"
        var $23=$zst+4; //@line 159 "zlibmodule.c"
        HEAP[$23]=$22; //@line 159 "zlibmodule.c"
        var $24=HEAP[$level]; //@line 160 "zlibmodule.c"
        var $25=_deflateInit_($zst, $24, __str8, 56); //@line 160 "zlibmodule.c"
        $err=$25; //@line 160 "zlibmodule.c"
        var $26=$err; //@line 162 "zlibmodule.c"
        if ($26 == -4) {
          __label__ = 6; break;
        }
        else if ($26 == -2) {
          __label__ = 7; break;
        }
        else if ($26 == 0) {
          __label__ = 5; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 5: // $bb4
        var $27=_deflate($zst, 4); //@line 180 "zlibmodule.c"
        $err=$27; //@line 180 "zlibmodule.c"
        var $28=$err; //@line 183 "zlibmodule.c"
        var $29=($28)!=1; //@line 183 "zlibmodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 183 "zlibmodule.c"
      case 6: // $bb5
        var $30=HEAP[_PyExc_MemoryError]; //@line 166 "zlibmodule.c"
        _PyErr_SetString($30, __str9); //@line 166 "zlibmodule.c"
        __label__ = 13; break; //@line 166 "zlibmodule.c"
      case 7: // $bb6
        var $31=HEAP[_ZlibError]; //@line 170 "zlibmodule.c"
        _PyErr_SetString($31, __str10); //@line 170 "zlibmodule.c"
        __label__ = 13; break; //@line 170 "zlibmodule.c"
      case 8: // $bb7
        var $32=_deflateEnd($zst); //@line 174 "zlibmodule.c"
        var $33=$err; //@line 175 "zlibmodule.c"
        _zlib_error($zst, $33, __str11); //@line 175 "zlibmodule.c"
        __label__ = 13; break; //@line 175 "zlibmodule.c"
      case 9: // $bb8
        var $34=$err; //@line 184 "zlibmodule.c"
        _zlib_error($zst, $34, __str11); //@line 184 "zlibmodule.c"
        var $35=_deflateEnd($zst); //@line 185 "zlibmodule.c"
        __label__ = 13; break; //@line 185 "zlibmodule.c"
      case 10: // $bb9
        var $36=_deflateEnd($zst); //@line 189 "zlibmodule.c"
        $err=$36; //@line 189 "zlibmodule.c"
        var $37=$err; //@line 190 "zlibmodule.c"
        var $38=($37)==0; //@line 190 "zlibmodule.c"
        if ($38) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 190 "zlibmodule.c"
      case 11: // $bb10
        var $39=$zst+20; //@line 191 "zlibmodule.c"
        var $40=HEAP[$39]; //@line 191 "zlibmodule.c"
        var $41=$output; //@line 191 "zlibmodule.c"
        var $42=_PyString_FromStringAndSize($41, $40); //@line 191 "zlibmodule.c"
        $ReturnVal=$42; //@line 191 "zlibmodule.c"
        __label__ = 13; break; //@line 191 "zlibmodule.c"
      case 12: // $bb11
        var $43=$err; //@line 194 "zlibmodule.c"
        _zlib_error($zst, $43, __str12); //@line 194 "zlibmodule.c"
        __label__ = 13; break; //@line 196 "zlibmodule.c"
      case 13: // $error
        var $44=$output; //@line 197 "zlibmodule.c"
        _free($44); //@line 197 "zlibmodule.c"
        var $45=$ReturnVal; //@line 199 "zlibmodule.c"
        $0=$45; //@line 199 "zlibmodule.c"
        __label__ = 14; break; //@line 199 "zlibmodule.c"
      case 14: // $bb12
        var $46=$0; //@line 141 "zlibmodule.c"
        $retval=$46; //@line 141 "zlibmodule.c"
        var $retval13=$retval; //@line 141 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 141 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_decompress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 76; _memset(__stackBase__, 0, 76);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $result_str=__stackBase__;
        var $input=__stackBase__+4;
        var $length=__stackBase__+8;
        var $err;
        var $wsize=__stackBase__+12;
        var $r_strlen=__stackBase__+16;
        var $zst=__stackBase__+20;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$wsize]=15; //@line 214 "zlibmodule.c"
        HEAP[$r_strlen]=16384; //@line 215 "zlibmodule.c"
        var $1=$args_addr; //@line 218 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, __str13, allocate([$input,0,0,0,$length,0,0,0,$wsize,0,0,0,$r_strlen,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 218 "zlibmodule.c"
        var $3=($2)==0; //@line 218 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 218 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 220 "zlibmodule.c"
        __label__ = 24; break; //@line 220 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$r_strlen]; //@line 222 "zlibmodule.c"
        var $5=($4) <= 0; //@line 222 "zlibmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 222 "zlibmodule.c"
      case 3: // $bb2
        HEAP[$r_strlen]=1; //@line 223 "zlibmodule.c"
        __label__ = 4; break; //@line 223 "zlibmodule.c"
      case 4: // $bb3
        var $6=HEAP[$length]; //@line 225 "zlibmodule.c"
        var $7=$zst+4; //@line 225 "zlibmodule.c"
        HEAP[$7]=$6; //@line 225 "zlibmodule.c"
        var $8=HEAP[$r_strlen]; //@line 226 "zlibmodule.c"
        var $9=$zst+16; //@line 226 "zlibmodule.c"
        HEAP[$9]=$8; //@line 226 "zlibmodule.c"
        var $10=HEAP[$r_strlen]; //@line 228 "zlibmodule.c"
        var $11=_PyString_FromStringAndSize(0, $10); //@line 228 "zlibmodule.c"
        HEAP[$result_str]=$11; //@line 228 "zlibmodule.c"
        var $12=($11)==0; //@line 228 "zlibmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 228 "zlibmodule.c"
      case 5: // $bb4
        $0=0; //@line 229 "zlibmodule.c"
        __label__ = 24; break; //@line 229 "zlibmodule.c"
      case 6: // $bb5
        var $13=$zst+32; //@line 231 "zlibmodule.c"
        HEAP[$13]=0; //@line 231 "zlibmodule.c"
        var $14=$zst+36; //@line 232 "zlibmodule.c"
        HEAP[$14]=0; //@line 232 "zlibmodule.c"
        var $15=HEAP[$result_str]; //@line 233 "zlibmodule.c"
        var $16=$15; //@line 233 "zlibmodule.c"
        var $17=$16+20; //@line 233 "zlibmodule.c"
        var $18=$17; //@line 233 "zlibmodule.c"
        var $19=$zst+12; //@line 233 "zlibmodule.c"
        HEAP[$19]=$18; //@line 233 "zlibmodule.c"
        var $20=HEAP[$input]; //@line 234 "zlibmodule.c"
        var $21=$zst; //@line 234 "zlibmodule.c"
        HEAP[$21]=$20; //@line 234 "zlibmodule.c"
        var $22=HEAP[$wsize]; //@line 235 "zlibmodule.c"
        var $23=_inflateInit2_($zst, $22, __str8, 56); //@line 235 "zlibmodule.c"
        $err=$23; //@line 235 "zlibmodule.c"
        var $24=$err; //@line 237 "zlibmodule.c"
        if ($24 == -4) {
          __label__ = 8; break;
        }
        else if ($24 == 0) {
          __label__ = 7; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 7: // $bb9_preheader
        var $25=$zst+16; //@line 264 "zlibmodule.c"
        var $26=$zst+12; //@line 276 "zlibmodule.c"
        var $27=$zst+16; //@line 278 "zlibmodule.c"
        __label__ = 10; break;
      case 8: // $bb7
        var $28=HEAP[_PyExc_MemoryError]; //@line 241 "zlibmodule.c"
        _PyErr_SetString($28, __str14); //@line 241 "zlibmodule.c"
        __label__ = 20; break; //@line 241 "zlibmodule.c"
      case 9: // $bb8
        var $29=_inflateEnd($zst); //@line 245 "zlibmodule.c"
        var $30=$err; //@line 246 "zlibmodule.c"
        _zlib_error($zst, $30, __str15); //@line 246 "zlibmodule.c"
        __label__ = 20; break; //@line 246 "zlibmodule.c"
      case 10: // $bb9
        var $31=_inflate($zst, 4); //@line 252 "zlibmodule.c"
        $err=$31; //@line 252 "zlibmodule.c"
        if ($31 == -5) {
          __label__ = 11; break;
        }
        else if ($31 == 0) {
          __label__ = 13; break;
        }
        else if ($31 == 1) {
          __label__ = 17; break;
        }
        else {
        __label__ = 15; break;
        }
        
      case 11: // $bb11
        var $32=HEAP[$25]; //@line 264 "zlibmodule.c"
        var $33=($32)!=0; //@line 264 "zlibmodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 264 "zlibmodule.c"
      case 12: // $bb12
        var $34=$err; //@line 265 "zlibmodule.c"
        _zlib_error($zst, $34, __str16); //@line 265 "zlibmodule.c"
        var $35=_inflateEnd($zst); //@line 266 "zlibmodule.c"
        __label__ = 20; break; //@line 266 "zlibmodule.c"
      case 13: // $bb13
        var $36=HEAP[$r_strlen]; //@line 272 "zlibmodule.c"
        var $37=($36) << 1; //@line 272 "zlibmodule.c"
        var $38=__PyString_Resize($result_str, $37); //@line 272 "zlibmodule.c"
        var $39=($38) < 0; //@line 272 "zlibmodule.c"
        if ($39) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 272 "zlibmodule.c"
      case 14: // $bb14
        var $40=_inflateEnd($zst); //@line 273 "zlibmodule.c"
        __label__ = 20; break; //@line 273 "zlibmodule.c"
      case 15: // $bb16
        var $41=_inflateEnd($zst); //@line 282 "zlibmodule.c"
        var $42=$err; //@line 283 "zlibmodule.c"
        _zlib_error($zst, $42, __str16); //@line 283 "zlibmodule.c"
        __label__ = 20; break; //@line 283 "zlibmodule.c"
      case 16: // $bb17
        var $43=HEAP[$result_str]; //@line 276 "zlibmodule.c"
        var $44=$43; //@line 276 "zlibmodule.c"
        var $45=$44+20; //@line 276 "zlibmodule.c"
        var $46=$45; //@line 276 "zlibmodule.c"
        var $47=HEAP[$r_strlen]; //@line 276 "zlibmodule.c"
        var $48=$46+$47; //@line 276 "zlibmodule.c"
        HEAP[$26]=$48; //@line 276 "zlibmodule.c"
        var $49=HEAP[$r_strlen]; //@line 278 "zlibmodule.c"
        HEAP[$27]=$49; //@line 278 "zlibmodule.c"
        var $50=HEAP[$r_strlen]; //@line 279 "zlibmodule.c"
        var $51=($50) << 1; //@line 279 "zlibmodule.c"
        HEAP[$r_strlen]=$51; //@line 279 "zlibmodule.c"
        var $_pr=$err;
        var $52=($_pr)!=1; //@line 286 "zlibmodule.c"
        if ($52) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 286 "zlibmodule.c"
      case 17: // $bb18
        var $53=_inflateEnd($zst); //@line 288 "zlibmodule.c"
        $err=$53; //@line 288 "zlibmodule.c"
        var $54=($53)!=0; //@line 289 "zlibmodule.c"
        if ($54) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 289 "zlibmodule.c"
      case 18: // $bb19
        var $55=$err; //@line 290 "zlibmodule.c"
        _zlib_error($zst, $55, __str17); //@line 290 "zlibmodule.c"
        __label__ = 20; break; //@line 290 "zlibmodule.c"
      case 19: // $bb20
        var $56=$zst+20; //@line 294 "zlibmodule.c"
        var $57=HEAP[$56]; //@line 294 "zlibmodule.c"
        var $58=__PyString_Resize($result_str, $57); //@line 294 "zlibmodule.c"
        var $59=HEAP[$result_str]; //@line 295 "zlibmodule.c"
        $0=$59; //@line 295 "zlibmodule.c"
        __label__ = 24; break; //@line 295 "zlibmodule.c"
      case 20: // $error
        var $60=HEAP[$result_str]; //@line 298 "zlibmodule.c"
        var $61=($60)!=0; //@line 298 "zlibmodule.c"
        if ($61) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 298 "zlibmodule.c"
      case 21: // $bb21
        var $62=HEAP[$result_str]; //@line 298 "zlibmodule.c"
        var $63=$62; //@line 298 "zlibmodule.c"
        var $64=HEAP[$63]; //@line 298 "zlibmodule.c"
        var $65=($64) - 1; //@line 298 "zlibmodule.c"
        var $66=$62; //@line 298 "zlibmodule.c"
        HEAP[$66]=$65; //@line 298 "zlibmodule.c"
        var $67=$62; //@line 298 "zlibmodule.c"
        var $68=HEAP[$67]; //@line 298 "zlibmodule.c"
        var $69=($68)==0; //@line 298 "zlibmodule.c"
        if ($69) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 298 "zlibmodule.c"
      case 22: // $bb22
        var $70=HEAP[$result_str]; //@line 298 "zlibmodule.c"
        var $71=$70+4; //@line 298 "zlibmodule.c"
        var $72=HEAP[$71]; //@line 298 "zlibmodule.c"
        var $73=$72+24; //@line 298 "zlibmodule.c"
        var $74=HEAP[$73]; //@line 298 "zlibmodule.c"
        var $75=HEAP[$result_str]; //@line 298 "zlibmodule.c"
        FUNCTION_TABLE[$74]($75); //@line 298 "zlibmodule.c"
        __label__ = 23; break; //@line 298 "zlibmodule.c"
      case 23: // $bb23
        $0=0; //@line 299 "zlibmodule.c"
        __label__ = 24; break; //@line 299 "zlibmodule.c"
      case 24: // $bb24
        var $76=$0; //@line 220 "zlibmodule.c"
        $retval=$76; //@line 220 "zlibmodule.c"
        var $retval25=$retval; //@line 220 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 220 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_compressobj($selfptr, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $selfptr_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $self;
        var $level=__stackBase__;
        var $method=__stackBase__+4;
        var $wbits=__stackBase__+8;
        var $memLevel=__stackBase__+12;
        var $strategy=__stackBase__+16;
        var $err;
        $selfptr_addr=$selfptr;
        $args_addr=$args;
        HEAP[$level]=-1; //@line 306 "zlibmodule.c"
        HEAP[$method]=8; //@line 306 "zlibmodule.c"
        HEAP[$wbits]=15; //@line 307 "zlibmodule.c"
        HEAP[$memLevel]=8; //@line 307 "zlibmodule.c"
        HEAP[$strategy]=0; //@line 307 "zlibmodule.c"
        var $1=$args_addr; //@line 309 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, __str18, allocate([$level,0,0,0,$method,0,0,0,$wbits,0,0,0,$memLevel,0,0,0,$strategy,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 309 "zlibmodule.c"
        var $3=($2)==0; //@line 309 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 309 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 311 "zlibmodule.c"
        __label__ = 15; break; //@line 311 "zlibmodule.c"
      case 2: // $bb1
        var $4=_newcompobject(_Comptype); //@line 313 "zlibmodule.c"
        $self=$4; //@line 313 "zlibmodule.c"
        var $5=$self; //@line 314 "zlibmodule.c"
        var $6=($5)==0; //@line 314 "zlibmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 314 "zlibmodule.c"
      case 3: // $bb2
        $0=0; //@line 315 "zlibmodule.c"
        __label__ = 15; break; //@line 315 "zlibmodule.c"
      case 4: // $bb3
        var $7=$self; //@line 316 "zlibmodule.c"
        var $8=$7+8; //@line 316 "zlibmodule.c"
        var $9=$8+32; //@line 316 "zlibmodule.c"
        HEAP[$9]=0; //@line 316 "zlibmodule.c"
        var $10=$self; //@line 317 "zlibmodule.c"
        var $11=$10+8; //@line 317 "zlibmodule.c"
        var $12=$11+36; //@line 317 "zlibmodule.c"
        HEAP[$12]=0; //@line 317 "zlibmodule.c"
        var $13=$self; //@line 318 "zlibmodule.c"
        var $14=$13+8; //@line 318 "zlibmodule.c"
        var $15=$14; //@line 318 "zlibmodule.c"
        HEAP[$15]=0; //@line 318 "zlibmodule.c"
        var $16=$self; //@line 319 "zlibmodule.c"
        var $17=$16+8; //@line 319 "zlibmodule.c"
        var $18=$17+4; //@line 319 "zlibmodule.c"
        HEAP[$18]=0; //@line 319 "zlibmodule.c"
        var $19=HEAP[$strategy]; //@line 320 "zlibmodule.c"
        var $20=HEAP[$memLevel]; //@line 320 "zlibmodule.c"
        var $21=HEAP[$wbits]; //@line 320 "zlibmodule.c"
        var $22=HEAP[$method]; //@line 320 "zlibmodule.c"
        var $23=HEAP[$level]; //@line 320 "zlibmodule.c"
        var $24=$self; //@line 320 "zlibmodule.c"
        var $25=$24+8; //@line 320 "zlibmodule.c"
        var $26=_deflateInit2_($25, $23, $22, $21, $20, $19, __str8, 56); //@line 320 "zlibmodule.c"
        $err=$26; //@line 320 "zlibmodule.c"
        var $27=$err; //@line 321 "zlibmodule.c"
        if ($27 == -4) {
          __label__ = 6; break;
        }
        else if ($27 == -2) {
          __label__ = 9; break;
        }
        else if ($27 == 0) {
          __label__ = 5; break;
        }
        else {
        __label__ = 12; break;
        }
        
      case 5: // $bb4
        var $28=$self; //@line 323 "zlibmodule.c"
        var $29=$28+72; //@line 323 "zlibmodule.c"
        HEAP[$29]=1; //@line 323 "zlibmodule.c"
        var $30=$self; //@line 324 "zlibmodule.c"
        var $31=$30; //@line 324 "zlibmodule.c"
        $0=$31; //@line 324 "zlibmodule.c"
        __label__ = 15; break; //@line 324 "zlibmodule.c"
      case 6: // $bb5
        var $32=$self; //@line 326 "zlibmodule.c"
        var $33=$32; //@line 326 "zlibmodule.c"
        var $34=$33; //@line 326 "zlibmodule.c"
        var $35=HEAP[$34]; //@line 326 "zlibmodule.c"
        var $36=($35) - 1; //@line 326 "zlibmodule.c"
        var $37=$33; //@line 326 "zlibmodule.c"
        HEAP[$37]=$36; //@line 326 "zlibmodule.c"
        var $38=$33; //@line 326 "zlibmodule.c"
        var $39=HEAP[$38]; //@line 326 "zlibmodule.c"
        var $40=($39)==0; //@line 326 "zlibmodule.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 326 "zlibmodule.c"
      case 7: // $bb6
        var $41=$self; //@line 326 "zlibmodule.c"
        var $42=$41; //@line 326 "zlibmodule.c"
        var $43=$42+4; //@line 326 "zlibmodule.c"
        var $44=HEAP[$43]; //@line 326 "zlibmodule.c"
        var $45=$44+24; //@line 326 "zlibmodule.c"
        var $46=HEAP[$45]; //@line 326 "zlibmodule.c"
        var $47=$self; //@line 326 "zlibmodule.c"
        var $48=$47; //@line 326 "zlibmodule.c"
        FUNCTION_TABLE[$46]($48); //@line 326 "zlibmodule.c"
        __label__ = 8; break; //@line 326 "zlibmodule.c"
      case 8: // $bb7
        var $49=HEAP[_PyExc_MemoryError]; //@line 327 "zlibmodule.c"
        _PyErr_SetString($49, __str19); //@line 327 "zlibmodule.c"
        $0=0; //@line 329 "zlibmodule.c"
        __label__ = 15; break; //@line 329 "zlibmodule.c"
      case 9: // $bb8
        var $50=$self; //@line 331 "zlibmodule.c"
        var $51=$50; //@line 331 "zlibmodule.c"
        var $52=$51; //@line 331 "zlibmodule.c"
        var $53=HEAP[$52]; //@line 331 "zlibmodule.c"
        var $54=($53) - 1; //@line 331 "zlibmodule.c"
        var $55=$51; //@line 331 "zlibmodule.c"
        HEAP[$55]=$54; //@line 331 "zlibmodule.c"
        var $56=$51; //@line 331 "zlibmodule.c"
        var $57=HEAP[$56]; //@line 331 "zlibmodule.c"
        var $58=($57)==0; //@line 331 "zlibmodule.c"
        if ($58) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 331 "zlibmodule.c"
      case 10: // $bb9
        var $59=$self; //@line 331 "zlibmodule.c"
        var $60=$59; //@line 331 "zlibmodule.c"
        var $61=$60+4; //@line 331 "zlibmodule.c"
        var $62=HEAP[$61]; //@line 331 "zlibmodule.c"
        var $63=$62+24; //@line 331 "zlibmodule.c"
        var $64=HEAP[$63]; //@line 331 "zlibmodule.c"
        var $65=$self; //@line 331 "zlibmodule.c"
        var $66=$65; //@line 331 "zlibmodule.c"
        FUNCTION_TABLE[$64]($66); //@line 331 "zlibmodule.c"
        __label__ = 11; break; //@line 331 "zlibmodule.c"
      case 11: // $bb10
        var $67=HEAP[_PyExc_ValueError]; //@line 332 "zlibmodule.c"
        _PyErr_SetString($67, __str20); //@line 332 "zlibmodule.c"
        $0=0; //@line 333 "zlibmodule.c"
        __label__ = 15; break; //@line 333 "zlibmodule.c"
      case 12: // $bb11
        var $68=$self; //@line 335 "zlibmodule.c"
        var $69=$68+8; //@line 335 "zlibmodule.c"
        var $70=$err; //@line 335 "zlibmodule.c"
        _zlib_error($69, $70, __str21); //@line 335 "zlibmodule.c"
        var $71=$self; //@line 336 "zlibmodule.c"
        var $72=$71; //@line 336 "zlibmodule.c"
        var $73=$72; //@line 336 "zlibmodule.c"
        var $74=HEAP[$73]; //@line 336 "zlibmodule.c"
        var $75=($74) - 1; //@line 336 "zlibmodule.c"
        var $76=$72; //@line 336 "zlibmodule.c"
        HEAP[$76]=$75; //@line 336 "zlibmodule.c"
        var $77=$72; //@line 336 "zlibmodule.c"
        var $78=HEAP[$77]; //@line 336 "zlibmodule.c"
        var $79=($78)==0; //@line 336 "zlibmodule.c"
        if ($79) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 336 "zlibmodule.c"
      case 13: // $bb12
        var $80=$self; //@line 336 "zlibmodule.c"
        var $81=$80; //@line 336 "zlibmodule.c"
        var $82=$81+4; //@line 336 "zlibmodule.c"
        var $83=HEAP[$82]; //@line 336 "zlibmodule.c"
        var $84=$83+24; //@line 336 "zlibmodule.c"
        var $85=HEAP[$84]; //@line 336 "zlibmodule.c"
        var $86=$self; //@line 336 "zlibmodule.c"
        var $87=$86; //@line 336 "zlibmodule.c"
        FUNCTION_TABLE[$85]($87); //@line 336 "zlibmodule.c"
        __label__ = 14; break; //@line 336 "zlibmodule.c"
      case 14: // $bb13
        $0=0; //@line 337 "zlibmodule.c"
        __label__ = 15; break; //@line 337 "zlibmodule.c"
      case 15: // $bb14
        var $88=$0; //@line 311 "zlibmodule.c"
        $retval=$88; //@line 311 "zlibmodule.c"
        var $retval15=$retval; //@line 311 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 311 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_decompressobj($selfptr, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $selfptr_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $wbits=__stackBase__;
        var $err;
        var $self;
        $selfptr_addr=$selfptr;
        $args_addr=$args;
        HEAP[$wbits]=15; //@line 344 "zlibmodule.c"
        var $1=$args_addr; //@line 346 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, __str22, allocate([$wbits,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 346 "zlibmodule.c"
        var $3=($2)==0; //@line 346 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 346 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 347 "zlibmodule.c"
        __label__ = 15; break; //@line 347 "zlibmodule.c"
      case 2: // $bb1
        var $4=_newcompobject(_Decomptype); //@line 349 "zlibmodule.c"
        $self=$4; //@line 349 "zlibmodule.c"
        var $5=$self; //@line 350 "zlibmodule.c"
        var $6=($5)==0; //@line 350 "zlibmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 350 "zlibmodule.c"
      case 3: // $bb2
        $0=0; //@line 351 "zlibmodule.c"
        __label__ = 15; break; //@line 351 "zlibmodule.c"
      case 4: // $bb3
        var $7=$self; //@line 352 "zlibmodule.c"
        var $8=$7+8; //@line 352 "zlibmodule.c"
        var $9=$8+32; //@line 352 "zlibmodule.c"
        HEAP[$9]=0; //@line 352 "zlibmodule.c"
        var $10=$self; //@line 353 "zlibmodule.c"
        var $11=$10+8; //@line 353 "zlibmodule.c"
        var $12=$11+36; //@line 353 "zlibmodule.c"
        HEAP[$12]=0; //@line 353 "zlibmodule.c"
        var $13=$self; //@line 354 "zlibmodule.c"
        var $14=$13+8; //@line 354 "zlibmodule.c"
        var $15=$14; //@line 354 "zlibmodule.c"
        HEAP[$15]=0; //@line 354 "zlibmodule.c"
        var $16=$self; //@line 355 "zlibmodule.c"
        var $17=$16+8; //@line 355 "zlibmodule.c"
        var $18=$17+4; //@line 355 "zlibmodule.c"
        HEAP[$18]=0; //@line 355 "zlibmodule.c"
        var $19=HEAP[$wbits]; //@line 356 "zlibmodule.c"
        var $20=$self; //@line 356 "zlibmodule.c"
        var $21=$20+8; //@line 356 "zlibmodule.c"
        var $22=_inflateInit2_($21, $19, __str8, 56); //@line 356 "zlibmodule.c"
        $err=$22; //@line 356 "zlibmodule.c"
        var $23=$err; //@line 357 "zlibmodule.c"
        if ($23 == -4) {
          __label__ = 9; break;
        }
        else if ($23 == -2) {
          __label__ = 6; break;
        }
        else if ($23 == 0) {
          __label__ = 5; break;
        }
        else {
        __label__ = 12; break;
        }
        
      case 5: // $bb4
        var $24=$self; //@line 359 "zlibmodule.c"
        var $25=$24+72; //@line 359 "zlibmodule.c"
        HEAP[$25]=1; //@line 359 "zlibmodule.c"
        var $26=$self; //@line 360 "zlibmodule.c"
        var $27=$26; //@line 360 "zlibmodule.c"
        $0=$27; //@line 360 "zlibmodule.c"
        __label__ = 15; break; //@line 360 "zlibmodule.c"
      case 6: // $bb5
        var $28=$self; //@line 362 "zlibmodule.c"
        var $29=$28; //@line 362 "zlibmodule.c"
        var $30=$29; //@line 362 "zlibmodule.c"
        var $31=HEAP[$30]; //@line 362 "zlibmodule.c"
        var $32=($31) - 1; //@line 362 "zlibmodule.c"
        var $33=$29; //@line 362 "zlibmodule.c"
        HEAP[$33]=$32; //@line 362 "zlibmodule.c"
        var $34=$29; //@line 362 "zlibmodule.c"
        var $35=HEAP[$34]; //@line 362 "zlibmodule.c"
        var $36=($35)==0; //@line 362 "zlibmodule.c"
        if ($36) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 362 "zlibmodule.c"
      case 7: // $bb6
        var $37=$self; //@line 362 "zlibmodule.c"
        var $38=$37; //@line 362 "zlibmodule.c"
        var $39=$38+4; //@line 362 "zlibmodule.c"
        var $40=HEAP[$39]; //@line 362 "zlibmodule.c"
        var $41=$40+24; //@line 362 "zlibmodule.c"
        var $42=HEAP[$41]; //@line 362 "zlibmodule.c"
        var $43=$self; //@line 362 "zlibmodule.c"
        var $44=$43; //@line 362 "zlibmodule.c"
        FUNCTION_TABLE[$42]($44); //@line 362 "zlibmodule.c"
        __label__ = 8; break; //@line 362 "zlibmodule.c"
      case 8: // $bb7
        var $45=HEAP[_PyExc_ValueError]; //@line 363 "zlibmodule.c"
        _PyErr_SetString($45, __str20); //@line 363 "zlibmodule.c"
        $0=0; //@line 364 "zlibmodule.c"
        __label__ = 15; break; //@line 364 "zlibmodule.c"
      case 9: // $bb8
        var $46=$self; //@line 366 "zlibmodule.c"
        var $47=$46; //@line 366 "zlibmodule.c"
        var $48=$47; //@line 366 "zlibmodule.c"
        var $49=HEAP[$48]; //@line 366 "zlibmodule.c"
        var $50=($49) - 1; //@line 366 "zlibmodule.c"
        var $51=$47; //@line 366 "zlibmodule.c"
        HEAP[$51]=$50; //@line 366 "zlibmodule.c"
        var $52=$47; //@line 366 "zlibmodule.c"
        var $53=HEAP[$52]; //@line 366 "zlibmodule.c"
        var $54=($53)==0; //@line 366 "zlibmodule.c"
        if ($54) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 366 "zlibmodule.c"
      case 10: // $bb9
        var $55=$self; //@line 366 "zlibmodule.c"
        var $56=$55; //@line 366 "zlibmodule.c"
        var $57=$56+4; //@line 366 "zlibmodule.c"
        var $58=HEAP[$57]; //@line 366 "zlibmodule.c"
        var $59=$58+24; //@line 366 "zlibmodule.c"
        var $60=HEAP[$59]; //@line 366 "zlibmodule.c"
        var $61=$self; //@line 366 "zlibmodule.c"
        var $62=$61; //@line 366 "zlibmodule.c"
        FUNCTION_TABLE[$60]($62); //@line 366 "zlibmodule.c"
        __label__ = 11; break; //@line 366 "zlibmodule.c"
      case 11: // $bb10
        var $63=HEAP[_PyExc_MemoryError]; //@line 367 "zlibmodule.c"
        _PyErr_SetString($63, __str23); //@line 367 "zlibmodule.c"
        $0=0; //@line 369 "zlibmodule.c"
        __label__ = 15; break; //@line 369 "zlibmodule.c"
      case 12: // $bb11
        var $64=$self; //@line 371 "zlibmodule.c"
        var $65=$64+8; //@line 371 "zlibmodule.c"
        var $66=$err; //@line 371 "zlibmodule.c"
        _zlib_error($65, $66, __str24); //@line 371 "zlibmodule.c"
        var $67=$self; //@line 372 "zlibmodule.c"
        var $68=$67; //@line 372 "zlibmodule.c"
        var $69=$68; //@line 372 "zlibmodule.c"
        var $70=HEAP[$69]; //@line 372 "zlibmodule.c"
        var $71=($70) - 1; //@line 372 "zlibmodule.c"
        var $72=$68; //@line 372 "zlibmodule.c"
        HEAP[$72]=$71; //@line 372 "zlibmodule.c"
        var $73=$68; //@line 372 "zlibmodule.c"
        var $74=HEAP[$73]; //@line 372 "zlibmodule.c"
        var $75=($74)==0; //@line 372 "zlibmodule.c"
        if ($75) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 372 "zlibmodule.c"
      case 13: // $bb12
        var $76=$self; //@line 372 "zlibmodule.c"
        var $77=$76; //@line 372 "zlibmodule.c"
        var $78=$77+4; //@line 372 "zlibmodule.c"
        var $79=HEAP[$78]; //@line 372 "zlibmodule.c"
        var $80=$79+24; //@line 372 "zlibmodule.c"
        var $81=HEAP[$80]; //@line 372 "zlibmodule.c"
        var $82=$self; //@line 372 "zlibmodule.c"
        var $83=$82; //@line 372 "zlibmodule.c"
        FUNCTION_TABLE[$81]($83); //@line 372 "zlibmodule.c"
        __label__ = 14; break; //@line 372 "zlibmodule.c"
      case 14: // $bb13
        $0=0; //@line 373 "zlibmodule.c"
        __label__ = 15; break; //@line 373 "zlibmodule.c"
      case 15: // $bb14
        var $84=$0; //@line 347 "zlibmodule.c"
        $retval=$84; //@line 347 "zlibmodule.c"
        var $retval15=$retval; //@line 347 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 347 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Comp_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 380 "zlibmodule.c"
        var $1=$0+72; //@line 380 "zlibmodule.c"
        var $2=HEAP[$1]; //@line 380 "zlibmodule.c"
        var $3=($2)!=0; //@line 380 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 380 "zlibmodule.c"
      case 1: // $bb
        var $4=$self_addr; //@line 381 "zlibmodule.c"
        var $5=$4+8; //@line 381 "zlibmodule.c"
        var $6=_deflateEnd($5); //@line 381 "zlibmodule.c"
        __label__ = 2; break; //@line 381 "zlibmodule.c"
      case 2: // $bb1
        var $7=$self_addr; //@line 382 "zlibmodule.c"
        var $8=$7+64; //@line 382 "zlibmodule.c"
        var $9=HEAP[$8]; //@line 382 "zlibmodule.c"
        var $10=($9)!=0; //@line 382 "zlibmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 382 "zlibmodule.c"
      case 3: // $bb2
        var $11=$self_addr; //@line 382 "zlibmodule.c"
        var $12=$11+64; //@line 382 "zlibmodule.c"
        var $13=HEAP[$12]; //@line 382 "zlibmodule.c"
        var $14=$13; //@line 382 "zlibmodule.c"
        var $15=HEAP[$14]; //@line 382 "zlibmodule.c"
        var $16=($15) - 1; //@line 382 "zlibmodule.c"
        var $17=$13; //@line 382 "zlibmodule.c"
        HEAP[$17]=$16; //@line 382 "zlibmodule.c"
        var $18=$13; //@line 382 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 382 "zlibmodule.c"
        var $20=($19)==0; //@line 382 "zlibmodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 382 "zlibmodule.c"
      case 4: // $bb3
        var $21=$self_addr; //@line 382 "zlibmodule.c"
        var $22=$21+64; //@line 382 "zlibmodule.c"
        var $23=HEAP[$22]; //@line 382 "zlibmodule.c"
        var $24=$23+4; //@line 382 "zlibmodule.c"
        var $25=HEAP[$24]; //@line 382 "zlibmodule.c"
        var $26=$25+24; //@line 382 "zlibmodule.c"
        var $27=HEAP[$26]; //@line 382 "zlibmodule.c"
        var $28=$self_addr; //@line 382 "zlibmodule.c"
        var $29=$28+64; //@line 382 "zlibmodule.c"
        var $30=HEAP[$29]; //@line 382 "zlibmodule.c"
        FUNCTION_TABLE[$27]($30); //@line 382 "zlibmodule.c"
        __label__ = 5; break; //@line 382 "zlibmodule.c"
      case 5: // $bb4
        var $31=$self_addr; //@line 383 "zlibmodule.c"
        var $32=$31+68; //@line 383 "zlibmodule.c"
        var $33=HEAP[$32]; //@line 383 "zlibmodule.c"
        var $34=($33)!=0; //@line 383 "zlibmodule.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 383 "zlibmodule.c"
      case 6: // $bb5
        var $35=$self_addr; //@line 383 "zlibmodule.c"
        var $36=$35+68; //@line 383 "zlibmodule.c"
        var $37=HEAP[$36]; //@line 383 "zlibmodule.c"
        var $38=$37; //@line 383 "zlibmodule.c"
        var $39=HEAP[$38]; //@line 383 "zlibmodule.c"
        var $40=($39) - 1; //@line 383 "zlibmodule.c"
        var $41=$37; //@line 383 "zlibmodule.c"
        HEAP[$41]=$40; //@line 383 "zlibmodule.c"
        var $42=$37; //@line 383 "zlibmodule.c"
        var $43=HEAP[$42]; //@line 383 "zlibmodule.c"
        var $44=($43)==0; //@line 383 "zlibmodule.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 383 "zlibmodule.c"
      case 7: // $bb6
        var $45=$self_addr; //@line 383 "zlibmodule.c"
        var $46=$45+68; //@line 383 "zlibmodule.c"
        var $47=HEAP[$46]; //@line 383 "zlibmodule.c"
        var $48=$47+4; //@line 383 "zlibmodule.c"
        var $49=HEAP[$48]; //@line 383 "zlibmodule.c"
        var $50=$49+24; //@line 383 "zlibmodule.c"
        var $51=HEAP[$50]; //@line 383 "zlibmodule.c"
        var $52=$self_addr; //@line 383 "zlibmodule.c"
        var $53=$52+68; //@line 383 "zlibmodule.c"
        var $54=HEAP[$53]; //@line 383 "zlibmodule.c"
        FUNCTION_TABLE[$51]($54); //@line 383 "zlibmodule.c"
        __label__ = 8; break; //@line 383 "zlibmodule.c"
      case 8: // $bb7
        var $55=$self_addr; //@line 384 "zlibmodule.c"
        var $56=$55; //@line 384 "zlibmodule.c"
        _PyObject_Free($56); //@line 384 "zlibmodule.c"
        ;
        return; //@line 385 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Decomp_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 390 "zlibmodule.c"
        var $1=$0+72; //@line 390 "zlibmodule.c"
        var $2=HEAP[$1]; //@line 390 "zlibmodule.c"
        var $3=($2)!=0; //@line 390 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 390 "zlibmodule.c"
      case 1: // $bb
        var $4=$self_addr; //@line 391 "zlibmodule.c"
        var $5=$4+8; //@line 391 "zlibmodule.c"
        var $6=_inflateEnd($5); //@line 391 "zlibmodule.c"
        __label__ = 2; break; //@line 391 "zlibmodule.c"
      case 2: // $bb1
        var $7=$self_addr; //@line 392 "zlibmodule.c"
        var $8=$7+64; //@line 392 "zlibmodule.c"
        var $9=HEAP[$8]; //@line 392 "zlibmodule.c"
        var $10=($9)!=0; //@line 392 "zlibmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 392 "zlibmodule.c"
      case 3: // $bb2
        var $11=$self_addr; //@line 392 "zlibmodule.c"
        var $12=$11+64; //@line 392 "zlibmodule.c"
        var $13=HEAP[$12]; //@line 392 "zlibmodule.c"
        var $14=$13; //@line 392 "zlibmodule.c"
        var $15=HEAP[$14]; //@line 392 "zlibmodule.c"
        var $16=($15) - 1; //@line 392 "zlibmodule.c"
        var $17=$13; //@line 392 "zlibmodule.c"
        HEAP[$17]=$16; //@line 392 "zlibmodule.c"
        var $18=$13; //@line 392 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 392 "zlibmodule.c"
        var $20=($19)==0; //@line 392 "zlibmodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 392 "zlibmodule.c"
      case 4: // $bb3
        var $21=$self_addr; //@line 392 "zlibmodule.c"
        var $22=$21+64; //@line 392 "zlibmodule.c"
        var $23=HEAP[$22]; //@line 392 "zlibmodule.c"
        var $24=$23+4; //@line 392 "zlibmodule.c"
        var $25=HEAP[$24]; //@line 392 "zlibmodule.c"
        var $26=$25+24; //@line 392 "zlibmodule.c"
        var $27=HEAP[$26]; //@line 392 "zlibmodule.c"
        var $28=$self_addr; //@line 392 "zlibmodule.c"
        var $29=$28+64; //@line 392 "zlibmodule.c"
        var $30=HEAP[$29]; //@line 392 "zlibmodule.c"
        FUNCTION_TABLE[$27]($30); //@line 392 "zlibmodule.c"
        __label__ = 5; break; //@line 392 "zlibmodule.c"
      case 5: // $bb4
        var $31=$self_addr; //@line 393 "zlibmodule.c"
        var $32=$31+68; //@line 393 "zlibmodule.c"
        var $33=HEAP[$32]; //@line 393 "zlibmodule.c"
        var $34=($33)!=0; //@line 393 "zlibmodule.c"
        if ($34) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 393 "zlibmodule.c"
      case 6: // $bb5
        var $35=$self_addr; //@line 393 "zlibmodule.c"
        var $36=$35+68; //@line 393 "zlibmodule.c"
        var $37=HEAP[$36]; //@line 393 "zlibmodule.c"
        var $38=$37; //@line 393 "zlibmodule.c"
        var $39=HEAP[$38]; //@line 393 "zlibmodule.c"
        var $40=($39) - 1; //@line 393 "zlibmodule.c"
        var $41=$37; //@line 393 "zlibmodule.c"
        HEAP[$41]=$40; //@line 393 "zlibmodule.c"
        var $42=$37; //@line 393 "zlibmodule.c"
        var $43=HEAP[$42]; //@line 393 "zlibmodule.c"
        var $44=($43)==0; //@line 393 "zlibmodule.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 393 "zlibmodule.c"
      case 7: // $bb6
        var $45=$self_addr; //@line 393 "zlibmodule.c"
        var $46=$45+68; //@line 393 "zlibmodule.c"
        var $47=HEAP[$46]; //@line 393 "zlibmodule.c"
        var $48=$47+4; //@line 393 "zlibmodule.c"
        var $49=HEAP[$48]; //@line 393 "zlibmodule.c"
        var $50=$49+24; //@line 393 "zlibmodule.c"
        var $51=HEAP[$50]; //@line 393 "zlibmodule.c"
        var $52=$self_addr; //@line 393 "zlibmodule.c"
        var $53=$52+68; //@line 393 "zlibmodule.c"
        var $54=HEAP[$53]; //@line 393 "zlibmodule.c"
        FUNCTION_TABLE[$51]($54); //@line 393 "zlibmodule.c"
        __label__ = 8; break; //@line 393 "zlibmodule.c"
      case 8: // $bb7
        var $55=$self_addr; //@line 394 "zlibmodule.c"
        var $56=$55; //@line 394 "zlibmodule.c"
        _PyObject_Free($56); //@line 394 "zlibmodule.c"
        ;
        return; //@line 395 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_objcompress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $err;
        var $inplen=__stackBase__;
        var $length;
        var $RetVal=__stackBase__+4;
        var $input=__stackBase__+8;
        var $start_total_out;
        $self_addr=$self;
        $args_addr=$args;
        $length=16384; //@line 409 "zlibmodule.c"
        var $1=$args_addr; //@line 414 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, __str25, allocate([$input,0,0,0,$inplen,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 414 "zlibmodule.c"
        var $3=($2)==0; //@line 414 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 414 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 415 "zlibmodule.c"
        __label__ = 15; break; //@line 415 "zlibmodule.c"
      case 2: // $bb1
        var $4=$length; //@line 417 "zlibmodule.c"
        var $5=_PyString_FromStringAndSize(0, $4); //@line 417 "zlibmodule.c"
        HEAP[$RetVal]=$5; //@line 417 "zlibmodule.c"
        var $6=HEAP[$RetVal]; //@line 417 "zlibmodule.c"
        var $7=($6)==0; //@line 417 "zlibmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 417 "zlibmodule.c"
      case 3: // $bb2
        $0=0; //@line 418 "zlibmodule.c"
        __label__ = 15; break; //@line 418 "zlibmodule.c"
      case 4: // $bb3
        var $8=$self_addr; //@line 422 "zlibmodule.c"
        var $9=$8+8; //@line 422 "zlibmodule.c"
        var $10=$9+20; //@line 422 "zlibmodule.c"
        var $11=HEAP[$10]; //@line 422 "zlibmodule.c"
        $start_total_out=$11; //@line 422 "zlibmodule.c"
        var $12=HEAP[$inplen]; //@line 423 "zlibmodule.c"
        var $13=$self_addr; //@line 423 "zlibmodule.c"
        var $14=$13+8; //@line 423 "zlibmodule.c"
        var $15=$14+4; //@line 423 "zlibmodule.c"
        HEAP[$15]=$12; //@line 423 "zlibmodule.c"
        var $16=HEAP[$input]; //@line 424 "zlibmodule.c"
        var $17=$self_addr; //@line 424 "zlibmodule.c"
        var $18=$17+8; //@line 424 "zlibmodule.c"
        var $19=$18; //@line 424 "zlibmodule.c"
        HEAP[$19]=$16; //@line 424 "zlibmodule.c"
        var $20=$length; //@line 425 "zlibmodule.c"
        var $21=$self_addr; //@line 425 "zlibmodule.c"
        var $22=$21+8; //@line 425 "zlibmodule.c"
        var $23=$22+16; //@line 425 "zlibmodule.c"
        HEAP[$23]=$20; //@line 425 "zlibmodule.c"
        var $24=HEAP[$RetVal]; //@line 426 "zlibmodule.c"
        var $25=$24; //@line 426 "zlibmodule.c"
        var $26=$25+20; //@line 426 "zlibmodule.c"
        var $27=$26; //@line 426 "zlibmodule.c"
        var $28=$self_addr; //@line 426 "zlibmodule.c"
        var $29=$28+8; //@line 426 "zlibmodule.c"
        var $30=$29+12; //@line 426 "zlibmodule.c"
        HEAP[$30]=$27; //@line 426 "zlibmodule.c"
        var $31=$self_addr; //@line 429 "zlibmodule.c"
        var $32=$31+8; //@line 429 "zlibmodule.c"
        var $33=_deflate($32, 0); //@line 429 "zlibmodule.c"
        $err=$33; //@line 429 "zlibmodule.c"
        __lastLabel__ = 4; __label__ = 7; break; //@line 429 "zlibmodule.c"
      case 5: // $bb4
        var $34=$length; //@line 435 "zlibmodule.c"
        var $35=($34) << 1; //@line 435 "zlibmodule.c"
        var $36=__PyString_Resize($RetVal, $35); //@line 435 "zlibmodule.c"
        var $37=($36) < 0; //@line 435 "zlibmodule.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 6; break; } //@line 435 "zlibmodule.c"
      case 6: // $bb5
        var $38=HEAP[$RetVal]; //@line 437 "zlibmodule.c"
        var $39=$38; //@line 437 "zlibmodule.c"
        var $40=$39+20; //@line 437 "zlibmodule.c"
        var $41=$40; //@line 437 "zlibmodule.c"
        var $42=$length; //@line 437 "zlibmodule.c"
        var $43=$41+$42; //@line 437 "zlibmodule.c"
        var $44=$self_addr; //@line 437 "zlibmodule.c"
        var $45=$44+8; //@line 437 "zlibmodule.c"
        var $46=$45+12; //@line 437 "zlibmodule.c"
        HEAP[$46]=$43; //@line 437 "zlibmodule.c"
        var $47=$length; //@line 439 "zlibmodule.c"
        var $48=$self_addr; //@line 439 "zlibmodule.c"
        var $49=$48+8; //@line 439 "zlibmodule.c"
        var $50=$49+16; //@line 439 "zlibmodule.c"
        HEAP[$50]=$47; //@line 439 "zlibmodule.c"
        var $51=$length; //@line 440 "zlibmodule.c"
        var $52=($51) << 1; //@line 440 "zlibmodule.c"
        $length=$52; //@line 440 "zlibmodule.c"
        var $53=$self_addr; //@line 443 "zlibmodule.c"
        var $54=$53+8; //@line 443 "zlibmodule.c"
        var $55=_deflate($54, 0); //@line 443 "zlibmodule.c"
        $err=$55; //@line 443 "zlibmodule.c"
        __lastLabel__ = 6; __label__ = 7; break; //@line 443 "zlibmodule.c"
      case 7: // $bb6
        var $56=__lastLabel__ == 6 ? $55 : ($33);
        var $57=($56)!=0; //@line 434 "zlibmodule.c"
        if ($57) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 434 "zlibmodule.c"
      case 8: // $bb7
        var $58=$self_addr; //@line 434 "zlibmodule.c"
        var $59=$58+8; //@line 434 "zlibmodule.c"
        var $60=$59+16; //@line 434 "zlibmodule.c"
        var $61=HEAP[$60]; //@line 434 "zlibmodule.c"
        var $62=($61)==0; //@line 434 "zlibmodule.c"
        if ($62) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 434 "zlibmodule.c"
      case 9: // $bb8
        var $63=$err; //@line 451 "zlibmodule.c"
        var $64=($63)!=0; //@line 451 "zlibmodule.c"
        var $65=$err; //@line 451 "zlibmodule.c"
        var $66=($65)!=-5; //@line 451 "zlibmodule.c"
        var $or_cond=($64) & ($66);
        var $67=$self_addr; //@line 452 "zlibmodule.c"
        var $68=$67+8; //@line 452 "zlibmodule.c"
        if ($or_cond) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 451 "zlibmodule.c"
      case 10: // $bb10
        var $69=$err; //@line 452 "zlibmodule.c"
        _zlib_error($68, $69, __str26); //@line 452 "zlibmodule.c"
        var $70=HEAP[$RetVal]; //@line 453 "zlibmodule.c"
        var $71=$70; //@line 453 "zlibmodule.c"
        var $72=HEAP[$71]; //@line 453 "zlibmodule.c"
        var $73=($72) - 1; //@line 453 "zlibmodule.c"
        var $74=$70; //@line 453 "zlibmodule.c"
        HEAP[$74]=$73; //@line 453 "zlibmodule.c"
        var $75=$70; //@line 453 "zlibmodule.c"
        var $76=HEAP[$75]; //@line 453 "zlibmodule.c"
        var $77=($76)==0; //@line 453 "zlibmodule.c"
        if ($77) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 453 "zlibmodule.c"
      case 11: // $bb11
        var $78=HEAP[$RetVal]; //@line 453 "zlibmodule.c"
        var $79=$78+4; //@line 453 "zlibmodule.c"
        var $80=HEAP[$79]; //@line 453 "zlibmodule.c"
        var $81=$80+24; //@line 453 "zlibmodule.c"
        var $82=HEAP[$81]; //@line 453 "zlibmodule.c"
        var $83=HEAP[$RetVal]; //@line 453 "zlibmodule.c"
        FUNCTION_TABLE[$82]($83); //@line 453 "zlibmodule.c"
        __label__ = 12; break; //@line 453 "zlibmodule.c"
      case 12: // $bb12
        HEAP[$RetVal]=0; //@line 454 "zlibmodule.c"
        __label__ = 14; break; //@line 454 "zlibmodule.c"
      case 13: // $bb13
        var $84=$68+20; //@line 457 "zlibmodule.c"
        var $85=HEAP[$84]; //@line 457 "zlibmodule.c"
        var $86=$start_total_out; //@line 457 "zlibmodule.c"
        var $87=($85) - ($86); //@line 457 "zlibmodule.c"
        var $88=__PyString_Resize($RetVal, $87); //@line 457 "zlibmodule.c"
        __label__ = 14; break; //@line 459 "zlibmodule.c"
      case 14: // $error
        var $89=HEAP[$RetVal]; //@line 461 "zlibmodule.c"
        $0=$89; //@line 461 "zlibmodule.c"
        __label__ = 15; break; //@line 461 "zlibmodule.c"
      case 15: // $bb14
        var $90=$0; //@line 415 "zlibmodule.c"
        $retval=$90; //@line 415 "zlibmodule.c"
        var $retval15=$retval; //@line 415 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 415 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_objdecompress($self, $args) {
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
        var $err;
        var $inplen=__stackBase__;
        var $max_length=__stackBase__+4;
        var $old_length;
        var $length;
        var $RetVal=__stackBase__+8;
        var $input=__stackBase__+12;
        var $start_total_out;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$max_length]=0; //@line 478 "zlibmodule.c"
        $length=16384; //@line 479 "zlibmodule.c"
        var $1=$args_addr; //@line 484 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, __str27, allocate([$input,0,0,0,$inplen,0,0,0,$max_length,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 484 "zlibmodule.c"
        var $3=($2)==0; //@line 484 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 484 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 486 "zlibmodule.c"
        __label__ = 46; break; //@line 486 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$max_length]; //@line 487 "zlibmodule.c"
        var $5=($4) < 0; //@line 487 "zlibmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 487 "zlibmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 488 "zlibmodule.c"
        _PyErr_SetString($6, __str28); //@line 488 "zlibmodule.c"
        $0=0; //@line 490 "zlibmodule.c"
        __label__ = 46; break; //@line 490 "zlibmodule.c"
      case 4: // $bb3
        var $7=HEAP[$max_length]; //@line 494 "zlibmodule.c"
        var $8=($7)!=0; //@line 494 "zlibmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 494 "zlibmodule.c"
      case 5: // $bb4
        var $9=HEAP[$max_length]; //@line 494 "zlibmodule.c"
        var $10=$length; //@line 494 "zlibmodule.c"
        var $11=($10) > ($9); //@line 494 "zlibmodule.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 494 "zlibmodule.c"
      case 6: // $bb5
        var $12=HEAP[$max_length]; //@line 495 "zlibmodule.c"
        $length=$12; //@line 495 "zlibmodule.c"
        __label__ = 7; break; //@line 495 "zlibmodule.c"
      case 7: // $bb6
        var $13=$length; //@line 496 "zlibmodule.c"
        var $14=_PyString_FromStringAndSize(0, $13); //@line 496 "zlibmodule.c"
        HEAP[$RetVal]=$14; //@line 496 "zlibmodule.c"
        var $15=($14)==0; //@line 496 "zlibmodule.c"
        if ($15) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 496 "zlibmodule.c"
      case 8: // $bb7
        $0=0; //@line 497 "zlibmodule.c"
        __label__ = 46; break; //@line 497 "zlibmodule.c"
      case 9: // $bb8
        var $16=$self_addr; //@line 501 "zlibmodule.c"
        var $17=$16+8; //@line 501 "zlibmodule.c"
        var $18=$17+20; //@line 501 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 501 "zlibmodule.c"
        $start_total_out=$19; //@line 501 "zlibmodule.c"
        var $20=HEAP[$inplen]; //@line 502 "zlibmodule.c"
        var $21=$self_addr; //@line 502 "zlibmodule.c"
        var $22=$21+8; //@line 502 "zlibmodule.c"
        var $23=$22+4; //@line 502 "zlibmodule.c"
        HEAP[$23]=$20; //@line 502 "zlibmodule.c"
        var $24=HEAP[$input]; //@line 503 "zlibmodule.c"
        var $25=$self_addr; //@line 503 "zlibmodule.c"
        var $26=$25+8; //@line 503 "zlibmodule.c"
        var $27=$26; //@line 503 "zlibmodule.c"
        HEAP[$27]=$24; //@line 503 "zlibmodule.c"
        var $28=$length; //@line 504 "zlibmodule.c"
        var $29=$self_addr; //@line 504 "zlibmodule.c"
        var $30=$29+8; //@line 504 "zlibmodule.c"
        var $31=$30+16; //@line 504 "zlibmodule.c"
        HEAP[$31]=$28; //@line 504 "zlibmodule.c"
        var $32=HEAP[$RetVal]; //@line 505 "zlibmodule.c"
        var $33=$32; //@line 505 "zlibmodule.c"
        var $34=$33+20; //@line 505 "zlibmodule.c"
        var $35=$34; //@line 505 "zlibmodule.c"
        var $36=$self_addr; //@line 505 "zlibmodule.c"
        var $37=$36+8; //@line 505 "zlibmodule.c"
        var $38=$37+12; //@line 505 "zlibmodule.c"
        HEAP[$38]=$35; //@line 505 "zlibmodule.c"
        var $39=$self_addr; //@line 508 "zlibmodule.c"
        var $40=$39+8; //@line 508 "zlibmodule.c"
        var $41=_inflate($40, 2); //@line 508 "zlibmodule.c"
        $err=$41; //@line 508 "zlibmodule.c"
        __lastLabel__ = 9; __label__ = 18; break; //@line 508 "zlibmodule.c"
      case 10: // $bb9
        var $42=HEAP[$max_length]; //@line 518 "zlibmodule.c"
        var $43=($42)!=0; //@line 518 "zlibmodule.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 518 "zlibmodule.c"
      case 11: // $bb11_thread
        var $44=$length; //@line 522 "zlibmodule.c"
        $old_length=$44; //@line 522 "zlibmodule.c"
        var $45=$length; //@line 523 "zlibmodule.c"
        var $46=($45) << 1; //@line 523 "zlibmodule.c"
        $length=$46; //@line 523 "zlibmodule.c"
        __label__ = 16; break;
      case 12: // $bb10
        var $47=HEAP[$max_length]; //@line 518 "zlibmodule.c"
        var $48=$length; //@line 518 "zlibmodule.c"
        var $49=($48) >= ($47); //@line 518 "zlibmodule.c"
        if ($49) { __lastLabel__ = 12; __label__ = 21; break; } else { __lastLabel__ = 12; __label__ = 13; break; } //@line 518 "zlibmodule.c"
      case 13: // $bb11
        var $50=$length; //@line 522 "zlibmodule.c"
        $old_length=$50; //@line 522 "zlibmodule.c"
        var $51=$length; //@line 523 "zlibmodule.c"
        var $52=($51) << 1; //@line 523 "zlibmodule.c"
        $length=$52; //@line 523 "zlibmodule.c"
        var $53=($47)!=0; //@line 524 "zlibmodule.c"
        if ($53) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 524 "zlibmodule.c"
      case 14: // $bb12
        var $54=HEAP[$max_length]; //@line 524 "zlibmodule.c"
        var $55=$length; //@line 524 "zlibmodule.c"
        var $56=($55) > ($54); //@line 524 "zlibmodule.c"
        if ($56) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 524 "zlibmodule.c"
      case 15: // $bb13
        var $57=HEAP[$max_length]; //@line 525 "zlibmodule.c"
        $length=$57; //@line 525 "zlibmodule.c"
        __label__ = 16; break; //@line 525 "zlibmodule.c"
      case 16: // $bb14
        var $58=$length; //@line 527 "zlibmodule.c"
        var $59=__PyString_Resize($RetVal, $58); //@line 527 "zlibmodule.c"
        var $60=($59) < 0; //@line 527 "zlibmodule.c"
        if ($60) { __label__ = 45; break; } else { __label__ = 17; break; } //@line 527 "zlibmodule.c"
      case 17: // $bb15
        var $61=HEAP[$RetVal]; //@line 529 "zlibmodule.c"
        var $62=$61; //@line 529 "zlibmodule.c"
        var $63=$62+20; //@line 529 "zlibmodule.c"
        var $64=$63; //@line 529 "zlibmodule.c"
        var $65=$old_length; //@line 529 "zlibmodule.c"
        var $66=$64+$65; //@line 529 "zlibmodule.c"
        var $67=$self_addr; //@line 529 "zlibmodule.c"
        var $68=$67+8; //@line 529 "zlibmodule.c"
        var $69=$68+12; //@line 529 "zlibmodule.c"
        HEAP[$69]=$66; //@line 529 "zlibmodule.c"
        var $70=$length; //@line 531 "zlibmodule.c"
        var $71=$old_length; //@line 531 "zlibmodule.c"
        var $72=($70) - ($71); //@line 531 "zlibmodule.c"
        var $73=$self_addr; //@line 531 "zlibmodule.c"
        var $74=$73+8; //@line 531 "zlibmodule.c"
        var $75=$74+16; //@line 531 "zlibmodule.c"
        HEAP[$75]=$72; //@line 531 "zlibmodule.c"
        var $76=$self_addr; //@line 534 "zlibmodule.c"
        var $77=$76+8; //@line 534 "zlibmodule.c"
        var $78=_inflate($77, 2); //@line 534 "zlibmodule.c"
        $err=$78; //@line 534 "zlibmodule.c"
        __lastLabel__ = 17; __label__ = 18; break; //@line 534 "zlibmodule.c"
      case 18: // $bb16
        var $79=__lastLabel__ == 17 ? $78 : ($41);
        var $80=($79)!=0; //@line 514 "zlibmodule.c"
        if ($80) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 514 "zlibmodule.c"
      case 19: // $bb17
        var $81=$self_addr; //@line 514 "zlibmodule.c"
        var $82=$81+8; //@line 514 "zlibmodule.c"
        var $83=$82+16; //@line 514 "zlibmodule.c"
        var $84=HEAP[$83]; //@line 514 "zlibmodule.c"
        var $85=($84)==0; //@line 514 "zlibmodule.c"
        if ($85) { __label__ = 10; break; } else { __label__ = 20; break; } //@line 514 "zlibmodule.c"
      case 20: // $bb18thread_pre_split
        var $_pr=HEAP[$max_length];
        __lastLabel__ = 20; __label__ = 21; break;
      case 21: // $bb18
        var $86=__lastLabel__ == 20 ? $_pr : ($47);
        var $87=($86)!=0; //@line 538 "zlibmodule.c"
        var $88=$self_addr; //@line 541 "zlibmodule.c"
        var $89=$88+68; //@line 541 "zlibmodule.c"
        var $90=HEAP[$89]; //@line 541 "zlibmodule.c"
        if ($87) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 538 "zlibmodule.c"
      case 22: // $bb19
        var $91=$90; //@line 541 "zlibmodule.c"
        var $92=HEAP[$91]; //@line 541 "zlibmodule.c"
        var $93=($92) - 1; //@line 541 "zlibmodule.c"
        var $94=$90; //@line 541 "zlibmodule.c"
        HEAP[$94]=$93; //@line 541 "zlibmodule.c"
        var $95=$90; //@line 541 "zlibmodule.c"
        var $96=HEAP[$95]; //@line 541 "zlibmodule.c"
        var $97=($96)==0; //@line 541 "zlibmodule.c"
        if ($97) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 541 "zlibmodule.c"
      case 23: // $bb20
        var $98=$self_addr; //@line 541 "zlibmodule.c"
        var $99=$98+68; //@line 541 "zlibmodule.c"
        var $100=HEAP[$99]; //@line 541 "zlibmodule.c"
        var $101=$100+4; //@line 541 "zlibmodule.c"
        var $102=HEAP[$101]; //@line 541 "zlibmodule.c"
        var $103=$102+24; //@line 541 "zlibmodule.c"
        var $104=HEAP[$103]; //@line 541 "zlibmodule.c"
        var $105=$self_addr; //@line 541 "zlibmodule.c"
        var $106=$105+68; //@line 541 "zlibmodule.c"
        var $107=HEAP[$106]; //@line 541 "zlibmodule.c"
        FUNCTION_TABLE[$104]($107); //@line 541 "zlibmodule.c"
        __label__ = 24; break; //@line 541 "zlibmodule.c"
      case 24: // $bb21
        var $108=$self_addr; //@line 542 "zlibmodule.c"
        var $109=$108+8; //@line 542 "zlibmodule.c"
        var $110=$109+4; //@line 542 "zlibmodule.c"
        var $111=HEAP[$110]; //@line 542 "zlibmodule.c"
        var $112=$self_addr; //@line 542 "zlibmodule.c"
        var $113=$112+8; //@line 542 "zlibmodule.c"
        var $114=$113; //@line 542 "zlibmodule.c"
        var $115=HEAP[$114]; //@line 542 "zlibmodule.c"
        var $116=_PyString_FromStringAndSize($115, $111); //@line 542 "zlibmodule.c"
        var $117=$self_addr; //@line 542 "zlibmodule.c"
        var $118=$117+68; //@line 542 "zlibmodule.c"
        HEAP[$118]=$116; //@line 542 "zlibmodule.c"
        __label__ = 29; break; //@line 542 "zlibmodule.c"
      case 25: // $bb22
        var $119=$90; //@line 545 "zlibmodule.c"
        var $120=$119+8; //@line 545 "zlibmodule.c"
        var $121=HEAP[$120]; //@line 545 "zlibmodule.c"
        var $122=($121) > 0; //@line 545 "zlibmodule.c"
        if ($122) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 545 "zlibmodule.c"
      case 26: // $bb23
        var $123=$self_addr; //@line 547 "zlibmodule.c"
        var $124=$123+68; //@line 547 "zlibmodule.c"
        var $125=HEAP[$124]; //@line 547 "zlibmodule.c"
        var $126=$125; //@line 547 "zlibmodule.c"
        var $127=HEAP[$126]; //@line 547 "zlibmodule.c"
        var $128=($127) - 1; //@line 547 "zlibmodule.c"
        var $129=$125; //@line 547 "zlibmodule.c"
        HEAP[$129]=$128; //@line 547 "zlibmodule.c"
        var $130=$125; //@line 547 "zlibmodule.c"
        var $131=HEAP[$130]; //@line 547 "zlibmodule.c"
        var $132=($131)==0; //@line 547 "zlibmodule.c"
        if ($132) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 547 "zlibmodule.c"
      case 27: // $bb24
        var $133=$self_addr; //@line 547 "zlibmodule.c"
        var $134=$133+68; //@line 547 "zlibmodule.c"
        var $135=HEAP[$134]; //@line 547 "zlibmodule.c"
        var $136=$135+4; //@line 547 "zlibmodule.c"
        var $137=HEAP[$136]; //@line 547 "zlibmodule.c"
        var $138=$137+24; //@line 547 "zlibmodule.c"
        var $139=HEAP[$138]; //@line 547 "zlibmodule.c"
        var $140=$self_addr; //@line 547 "zlibmodule.c"
        var $141=$140+68; //@line 547 "zlibmodule.c"
        var $142=HEAP[$141]; //@line 547 "zlibmodule.c"
        FUNCTION_TABLE[$139]($142); //@line 547 "zlibmodule.c"
        __label__ = 28; break; //@line 547 "zlibmodule.c"
      case 28: // $bb25
        var $143=_PyString_FromStringAndSize(__str5, 0); //@line 548 "zlibmodule.c"
        var $144=$self_addr; //@line 548 "zlibmodule.c"
        var $145=$144+68; //@line 548 "zlibmodule.c"
        HEAP[$145]=$143; //@line 548 "zlibmodule.c"
        __label__ = 29; break; //@line 548 "zlibmodule.c"
      case 29: // $bb26
        var $146=$self_addr; //@line 550 "zlibmodule.c"
        var $147=$146+68; //@line 550 "zlibmodule.c"
        var $148=HEAP[$147]; //@line 550 "zlibmodule.c"
        var $149=($148)==0; //@line 550 "zlibmodule.c"
        if ($149) { __label__ = 30; break; } else { __label__ = 33; break; } //@line 550 "zlibmodule.c"
      case 30: // $bb27
        var $150=HEAP[$RetVal]; //@line 551 "zlibmodule.c"
        var $151=$150; //@line 551 "zlibmodule.c"
        var $152=HEAP[$151]; //@line 551 "zlibmodule.c"
        var $153=($152) - 1; //@line 551 "zlibmodule.c"
        var $154=$150; //@line 551 "zlibmodule.c"
        HEAP[$154]=$153; //@line 551 "zlibmodule.c"
        var $155=$150; //@line 551 "zlibmodule.c"
        var $156=HEAP[$155]; //@line 551 "zlibmodule.c"
        var $157=($156)==0; //@line 551 "zlibmodule.c"
        if ($157) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 551 "zlibmodule.c"
      case 31: // $bb28
        var $158=HEAP[$RetVal]; //@line 551 "zlibmodule.c"
        var $159=$158+4; //@line 551 "zlibmodule.c"
        var $160=HEAP[$159]; //@line 551 "zlibmodule.c"
        var $161=$160+24; //@line 551 "zlibmodule.c"
        var $162=HEAP[$161]; //@line 551 "zlibmodule.c"
        var $163=HEAP[$RetVal]; //@line 551 "zlibmodule.c"
        FUNCTION_TABLE[$162]($163); //@line 551 "zlibmodule.c"
        __label__ = 32; break; //@line 551 "zlibmodule.c"
      case 32: // $bb29
        HEAP[$RetVal]=0; //@line 552 "zlibmodule.c"
        __label__ = 45; break; //@line 552 "zlibmodule.c"
      case 33: // $bb30
        var $164=$err; //@line 562 "zlibmodule.c"
        var $165=($164)==1; //@line 562 "zlibmodule.c"
        if ($165) { __label__ = 34; break; } else { __label__ = 40; break; } //@line 562 "zlibmodule.c"
      case 34: // $bb31
        var $166=$self_addr; //@line 563 "zlibmodule.c"
        var $167=$166+64; //@line 563 "zlibmodule.c"
        var $168=HEAP[$167]; //@line 563 "zlibmodule.c"
        var $169=($168)!=0; //@line 563 "zlibmodule.c"
        if ($169) { __label__ = 35; break; } else { __label__ = 37; break; } //@line 563 "zlibmodule.c"
      case 35: // $bb32
        var $170=$self_addr; //@line 563 "zlibmodule.c"
        var $171=$170+64; //@line 563 "zlibmodule.c"
        var $172=HEAP[$171]; //@line 563 "zlibmodule.c"
        var $173=$172; //@line 563 "zlibmodule.c"
        var $174=HEAP[$173]; //@line 563 "zlibmodule.c"
        var $175=($174) - 1; //@line 563 "zlibmodule.c"
        var $176=$172; //@line 563 "zlibmodule.c"
        HEAP[$176]=$175; //@line 563 "zlibmodule.c"
        var $177=$172; //@line 563 "zlibmodule.c"
        var $178=HEAP[$177]; //@line 563 "zlibmodule.c"
        var $179=($178)==0; //@line 563 "zlibmodule.c"
        if ($179) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 563 "zlibmodule.c"
      case 36: // $bb33
        var $180=$self_addr; //@line 563 "zlibmodule.c"
        var $181=$180+64; //@line 563 "zlibmodule.c"
        var $182=HEAP[$181]; //@line 563 "zlibmodule.c"
        var $183=$182+4; //@line 563 "zlibmodule.c"
        var $184=HEAP[$183]; //@line 563 "zlibmodule.c"
        var $185=$184+24; //@line 563 "zlibmodule.c"
        var $186=HEAP[$185]; //@line 563 "zlibmodule.c"
        var $187=$self_addr; //@line 563 "zlibmodule.c"
        var $188=$187+64; //@line 563 "zlibmodule.c"
        var $189=HEAP[$188]; //@line 563 "zlibmodule.c"
        FUNCTION_TABLE[$186]($189); //@line 563 "zlibmodule.c"
        __label__ = 37; break; //@line 563 "zlibmodule.c"
      case 37: // $bb34
        var $190=$self_addr; //@line 564 "zlibmodule.c"
        var $191=$190+8; //@line 564 "zlibmodule.c"
        var $192=$191+4; //@line 564 "zlibmodule.c"
        var $193=HEAP[$192]; //@line 564 "zlibmodule.c"
        var $194=$self_addr; //@line 564 "zlibmodule.c"
        var $195=$194+8; //@line 564 "zlibmodule.c"
        var $196=$195; //@line 564 "zlibmodule.c"
        var $197=HEAP[$196]; //@line 564 "zlibmodule.c"
        var $198=_PyString_FromStringAndSize($197, $193); //@line 564 "zlibmodule.c"
        var $199=$self_addr; //@line 564 "zlibmodule.c"
        var $200=$199+64; //@line 564 "zlibmodule.c"
        HEAP[$200]=$198; //@line 564 "zlibmodule.c"
        var $201=$self_addr; //@line 566 "zlibmodule.c"
        var $202=$201+64; //@line 566 "zlibmodule.c"
        var $203=HEAP[$202]; //@line 566 "zlibmodule.c"
        var $204=($203)==0; //@line 566 "zlibmodule.c"
        if ($204) { __label__ = 38; break; } else { __label__ = 44; break; } //@line 566 "zlibmodule.c"
      case 38: // $bb35
        var $205=HEAP[$RetVal]; //@line 567 "zlibmodule.c"
        var $206=$205; //@line 567 "zlibmodule.c"
        var $207=HEAP[$206]; //@line 567 "zlibmodule.c"
        var $208=($207) - 1; //@line 567 "zlibmodule.c"
        var $209=$205; //@line 567 "zlibmodule.c"
        HEAP[$209]=$208; //@line 567 "zlibmodule.c"
        var $210=$205; //@line 567 "zlibmodule.c"
        var $211=HEAP[$210]; //@line 567 "zlibmodule.c"
        var $212=($211)==0; //@line 567 "zlibmodule.c"
        if ($212) { __label__ = 39; break; } else { __label__ = 45; break; } //@line 567 "zlibmodule.c"
      case 39: // $bb36
        var $213=HEAP[$RetVal]; //@line 567 "zlibmodule.c"
        var $214=$213+4; //@line 567 "zlibmodule.c"
        var $215=HEAP[$214]; //@line 567 "zlibmodule.c"
        var $216=$215+24; //@line 567 "zlibmodule.c"
        var $217=HEAP[$216]; //@line 567 "zlibmodule.c"
        var $218=HEAP[$RetVal]; //@line 567 "zlibmodule.c"
        FUNCTION_TABLE[$217]($218); //@line 567 "zlibmodule.c"
        __label__ = 45; break; //@line 567 "zlibmodule.c"
      case 40: // $bb39
        var $219=$err; //@line 574 "zlibmodule.c"
        var $220=($219)!=0; //@line 574 "zlibmodule.c"
        var $221=$err; //@line 574 "zlibmodule.c"
        var $222=($221)!=-5; //@line 574 "zlibmodule.c"
        var $or_cond=($220) & ($222);
        if ($or_cond) { __label__ = 41; break; } else { __label__ = 44; break; } //@line 574 "zlibmodule.c"
      case 41: // $bb41
        var $223=$self_addr; //@line 575 "zlibmodule.c"
        var $224=$223+8; //@line 575 "zlibmodule.c"
        var $225=$err; //@line 575 "zlibmodule.c"
        _zlib_error($224, $225, __str29); //@line 575 "zlibmodule.c"
        var $226=HEAP[$RetVal]; //@line 576 "zlibmodule.c"
        var $227=$226; //@line 576 "zlibmodule.c"
        var $228=HEAP[$227]; //@line 576 "zlibmodule.c"
        var $229=($228) - 1; //@line 576 "zlibmodule.c"
        var $230=$226; //@line 576 "zlibmodule.c"
        HEAP[$230]=$229; //@line 576 "zlibmodule.c"
        var $231=$226; //@line 576 "zlibmodule.c"
        var $232=HEAP[$231]; //@line 576 "zlibmodule.c"
        var $233=($232)==0; //@line 576 "zlibmodule.c"
        if ($233) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 576 "zlibmodule.c"
      case 42: // $bb42
        var $234=HEAP[$RetVal]; //@line 576 "zlibmodule.c"
        var $235=$234+4; //@line 576 "zlibmodule.c"
        var $236=HEAP[$235]; //@line 576 "zlibmodule.c"
        var $237=$236+24; //@line 576 "zlibmodule.c"
        var $238=HEAP[$237]; //@line 576 "zlibmodule.c"
        var $239=HEAP[$RetVal]; //@line 576 "zlibmodule.c"
        FUNCTION_TABLE[$238]($239); //@line 576 "zlibmodule.c"
        __label__ = 43; break; //@line 576 "zlibmodule.c"
      case 43: // $bb43
        HEAP[$RetVal]=0; //@line 577 "zlibmodule.c"
        __label__ = 45; break; //@line 577 "zlibmodule.c"
      case 44: // $bb44
        var $240=$self_addr; //@line 581 "zlibmodule.c"
        var $241=$240+8; //@line 581 "zlibmodule.c"
        var $242=$241+20; //@line 581 "zlibmodule.c"
        var $243=HEAP[$242]; //@line 581 "zlibmodule.c"
        var $244=$start_total_out; //@line 581 "zlibmodule.c"
        var $245=($243) - ($244); //@line 581 "zlibmodule.c"
        var $246=__PyString_Resize($RetVal, $245); //@line 581 "zlibmodule.c"
        __label__ = 45; break; //@line 583 "zlibmodule.c"
      case 45: // $error
        var $247=HEAP[$RetVal]; //@line 586 "zlibmodule.c"
        $0=$247; //@line 586 "zlibmodule.c"
        __label__ = 46; break; //@line 586 "zlibmodule.c"
      case 46: // $bb45
        var $248=$0; //@line 486 "zlibmodule.c"
        $retval=$248; //@line 486 "zlibmodule.c"
        var $retval46=$retval; //@line 486 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval46; //@line 486 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_flush($self, $args) {
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
        var $err;
        var $length;
        var $RetVal=__stackBase__;
        var $flushmode=__stackBase__+4;
        var $start_total_out;
        $self_addr=$self;
        $args_addr=$args;
        $length=16384; //@line 600 "zlibmodule.c"
        HEAP[$flushmode]=4; //@line 602 "zlibmodule.c"
        var $1=$args_addr; //@line 605 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, __str30, allocate([$flushmode,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 605 "zlibmodule.c"
        var $3=($2)==0; //@line 605 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 605 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 606 "zlibmodule.c"
        __label__ = 24; break; //@line 606 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$flushmode]; //@line 610 "zlibmodule.c"
        var $5=($4)==0; //@line 610 "zlibmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 610 "zlibmodule.c"
      case 3: // $bb2
        var $6=_PyString_FromStringAndSize(0, 0); //@line 611 "zlibmodule.c"
        $0=$6; //@line 611 "zlibmodule.c"
        __label__ = 24; break; //@line 611 "zlibmodule.c"
      case 4: // $bb3
        var $7=$length; //@line 614 "zlibmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 614 "zlibmodule.c"
        HEAP[$RetVal]=$8; //@line 614 "zlibmodule.c"
        var $9=HEAP[$RetVal]; //@line 614 "zlibmodule.c"
        var $10=($9)==0; //@line 614 "zlibmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 614 "zlibmodule.c"
      case 5: // $bb4
        $0=0; //@line 615 "zlibmodule.c"
        __label__ = 24; break; //@line 615 "zlibmodule.c"
      case 6: // $bb5
        var $11=$self_addr; //@line 619 "zlibmodule.c"
        var $12=$11+8; //@line 619 "zlibmodule.c"
        var $13=$12+20; //@line 619 "zlibmodule.c"
        var $14=HEAP[$13]; //@line 619 "zlibmodule.c"
        $start_total_out=$14; //@line 619 "zlibmodule.c"
        var $15=$self_addr; //@line 620 "zlibmodule.c"
        var $16=$15+8; //@line 620 "zlibmodule.c"
        var $17=$16+4; //@line 620 "zlibmodule.c"
        HEAP[$17]=0; //@line 620 "zlibmodule.c"
        var $18=$length; //@line 621 "zlibmodule.c"
        var $19=$self_addr; //@line 621 "zlibmodule.c"
        var $20=$19+8; //@line 621 "zlibmodule.c"
        var $21=$20+16; //@line 621 "zlibmodule.c"
        HEAP[$21]=$18; //@line 621 "zlibmodule.c"
        var $22=HEAP[$RetVal]; //@line 622 "zlibmodule.c"
        var $23=$22; //@line 622 "zlibmodule.c"
        var $24=$23+20; //@line 622 "zlibmodule.c"
        var $25=$24; //@line 622 "zlibmodule.c"
        var $26=$self_addr; //@line 622 "zlibmodule.c"
        var $27=$26+8; //@line 622 "zlibmodule.c"
        var $28=$27+12; //@line 622 "zlibmodule.c"
        HEAP[$28]=$25; //@line 622 "zlibmodule.c"
        var $29=HEAP[$flushmode]; //@line 625 "zlibmodule.c"
        var $30=$self_addr; //@line 625 "zlibmodule.c"
        var $31=$30+8; //@line 625 "zlibmodule.c"
        var $32=_deflate($31, $29); //@line 625 "zlibmodule.c"
        $err=$32; //@line 625 "zlibmodule.c"
        __lastLabel__ = 6; __label__ = 9; break; //@line 625 "zlibmodule.c"
      case 7: // $bb6
        var $33=$length; //@line 631 "zlibmodule.c"
        var $34=($33) << 1; //@line 631 "zlibmodule.c"
        var $35=__PyString_Resize($RetVal, $34); //@line 631 "zlibmodule.c"
        var $36=($35) < 0; //@line 631 "zlibmodule.c"
        if ($36) { __label__ = 23; break; } else { __label__ = 8; break; } //@line 631 "zlibmodule.c"
      case 8: // $bb7
        var $37=HEAP[$RetVal]; //@line 633 "zlibmodule.c"
        var $38=$37; //@line 633 "zlibmodule.c"
        var $39=$38+20; //@line 633 "zlibmodule.c"
        var $40=$39; //@line 633 "zlibmodule.c"
        var $41=$length; //@line 633 "zlibmodule.c"
        var $42=$40+$41; //@line 633 "zlibmodule.c"
        var $43=$self_addr; //@line 633 "zlibmodule.c"
        var $44=$43+8; //@line 633 "zlibmodule.c"
        var $45=$44+12; //@line 633 "zlibmodule.c"
        HEAP[$45]=$42; //@line 633 "zlibmodule.c"
        var $46=$length; //@line 635 "zlibmodule.c"
        var $47=$self_addr; //@line 635 "zlibmodule.c"
        var $48=$47+8; //@line 635 "zlibmodule.c"
        var $49=$48+16; //@line 635 "zlibmodule.c"
        HEAP[$49]=$46; //@line 635 "zlibmodule.c"
        var $50=$length; //@line 636 "zlibmodule.c"
        var $51=($50) << 1; //@line 636 "zlibmodule.c"
        $length=$51; //@line 636 "zlibmodule.c"
        var $52=HEAP[$flushmode]; //@line 639 "zlibmodule.c"
        var $53=$self_addr; //@line 639 "zlibmodule.c"
        var $54=$53+8; //@line 639 "zlibmodule.c"
        var $55=_deflate($54, $52); //@line 639 "zlibmodule.c"
        $err=$55; //@line 639 "zlibmodule.c"
        __lastLabel__ = 8; __label__ = 9; break; //@line 639 "zlibmodule.c"
      case 9: // $bb8
        var $56=__lastLabel__ == 8 ? $55 : ($32);
        var $57=($56)!=0; //@line 630 "zlibmodule.c"
        if ($57) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 630 "zlibmodule.c"
      case 10: // $bb9
        var $58=$self_addr; //@line 630 "zlibmodule.c"
        var $59=$58+8; //@line 630 "zlibmodule.c"
        var $60=$59+16; //@line 630 "zlibmodule.c"
        var $61=HEAP[$60]; //@line 630 "zlibmodule.c"
        var $62=($61)==0; //@line 630 "zlibmodule.c"
        if ($62) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 630 "zlibmodule.c"
      case 11: // $bb10
        var $63=$err; //@line 646 "zlibmodule.c"
        var $64=($63)!=1; //@line 646 "zlibmodule.c"
        if ($64) { __label__ = 18; break; } else { __label__ = 12; break; } //@line 646 "zlibmodule.c"
      case 12: // $bb11
        var $65=HEAP[$flushmode]; //@line 646 "zlibmodule.c"
        var $66=($65)!=4; //@line 646 "zlibmodule.c"
        if ($66) { __label__ = 18; break; } else { __label__ = 13; break; } //@line 646 "zlibmodule.c"
      case 13: // $bb12
        var $67=$self_addr; //@line 647 "zlibmodule.c"
        var $68=$67+8; //@line 647 "zlibmodule.c"
        var $69=_deflateEnd($68); //@line 647 "zlibmodule.c"
        $err=$69; //@line 647 "zlibmodule.c"
        var $70=$err; //@line 648 "zlibmodule.c"
        var $71=($70)!=0; //@line 648 "zlibmodule.c"
        var $72=$self_addr; //@line 649 "zlibmodule.c"
        if ($71) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 648 "zlibmodule.c"
      case 14: // $bb13
        var $73=$72+8; //@line 649 "zlibmodule.c"
        var $74=$err; //@line 649 "zlibmodule.c"
        _zlib_error($73, $74, __str31); //@line 649 "zlibmodule.c"
        var $75=HEAP[$RetVal]; //@line 650 "zlibmodule.c"
        var $76=$75; //@line 650 "zlibmodule.c"
        var $77=HEAP[$76]; //@line 650 "zlibmodule.c"
        var $78=($77) - 1; //@line 650 "zlibmodule.c"
        var $79=$75; //@line 650 "zlibmodule.c"
        HEAP[$79]=$78; //@line 650 "zlibmodule.c"
        var $80=$75; //@line 650 "zlibmodule.c"
        var $81=HEAP[$80]; //@line 650 "zlibmodule.c"
        var $82=($81)==0; //@line 650 "zlibmodule.c"
        if ($82) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 650 "zlibmodule.c"
      case 15: // $bb14
        var $83=HEAP[$RetVal]; //@line 650 "zlibmodule.c"
        var $84=$83+4; //@line 650 "zlibmodule.c"
        var $85=HEAP[$84]; //@line 650 "zlibmodule.c"
        var $86=$85+24; //@line 650 "zlibmodule.c"
        var $87=HEAP[$86]; //@line 650 "zlibmodule.c"
        var $88=HEAP[$RetVal]; //@line 650 "zlibmodule.c"
        FUNCTION_TABLE[$87]($88); //@line 650 "zlibmodule.c"
        __label__ = 16; break; //@line 650 "zlibmodule.c"
      case 16: // $bb15
        HEAP[$RetVal]=0; //@line 651 "zlibmodule.c"
        __label__ = 23; break; //@line 651 "zlibmodule.c"
      case 17: // $bb16
        var $89=$72+72; //@line 655 "zlibmodule.c"
        HEAP[$89]=0; //@line 655 "zlibmodule.c"
        __label__ = 22; break; //@line 655 "zlibmodule.c"
      case 18: // $bb17
        var $90=$err; //@line 661 "zlibmodule.c"
        var $91=($90)!=0; //@line 661 "zlibmodule.c"
        var $92=$err; //@line 661 "zlibmodule.c"
        var $93=($92)!=-5; //@line 661 "zlibmodule.c"
        var $or_cond=($91) & ($93);
        if ($or_cond) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 661 "zlibmodule.c"
      case 19: // $bb19
        var $94=$self_addr; //@line 662 "zlibmodule.c"
        var $95=$94+8; //@line 662 "zlibmodule.c"
        var $96=$err; //@line 662 "zlibmodule.c"
        _zlib_error($95, $96, __str32); //@line 662 "zlibmodule.c"
        var $97=HEAP[$RetVal]; //@line 663 "zlibmodule.c"
        var $98=$97; //@line 663 "zlibmodule.c"
        var $99=HEAP[$98]; //@line 663 "zlibmodule.c"
        var $100=($99) - 1; //@line 663 "zlibmodule.c"
        var $101=$97; //@line 663 "zlibmodule.c"
        HEAP[$101]=$100; //@line 663 "zlibmodule.c"
        var $102=$97; //@line 663 "zlibmodule.c"
        var $103=HEAP[$102]; //@line 663 "zlibmodule.c"
        var $104=($103)==0; //@line 663 "zlibmodule.c"
        if ($104) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 663 "zlibmodule.c"
      case 20: // $bb20
        var $105=HEAP[$RetVal]; //@line 663 "zlibmodule.c"
        var $106=$105+4; //@line 663 "zlibmodule.c"
        var $107=HEAP[$106]; //@line 663 "zlibmodule.c"
        var $108=$107+24; //@line 663 "zlibmodule.c"
        var $109=HEAP[$108]; //@line 663 "zlibmodule.c"
        var $110=HEAP[$RetVal]; //@line 663 "zlibmodule.c"
        FUNCTION_TABLE[$109]($110); //@line 663 "zlibmodule.c"
        __label__ = 21; break; //@line 663 "zlibmodule.c"
      case 21: // $bb21
        HEAP[$RetVal]=0; //@line 664 "zlibmodule.c"
        __label__ = 23; break; //@line 664 "zlibmodule.c"
      case 22: // $bb22
        var $111=$self_addr; //@line 668 "zlibmodule.c"
        var $112=$111+8; //@line 668 "zlibmodule.c"
        var $113=$112+20; //@line 668 "zlibmodule.c"
        var $114=HEAP[$113]; //@line 668 "zlibmodule.c"
        var $115=$start_total_out; //@line 668 "zlibmodule.c"
        var $116=($114) - ($115); //@line 668 "zlibmodule.c"
        var $117=__PyString_Resize($RetVal, $116); //@line 668 "zlibmodule.c"
        __label__ = 23; break; //@line 670 "zlibmodule.c"
      case 23: // $error
        var $118=HEAP[$RetVal]; //@line 673 "zlibmodule.c"
        $0=$118; //@line 673 "zlibmodule.c"
        __label__ = 24; break; //@line 673 "zlibmodule.c"
      case 24: // $bb23
        var $119=$0; //@line 606 "zlibmodule.c"
        $retval=$119; //@line 606 "zlibmodule.c"
        var $retval24=$retval; //@line 606 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval24; //@line 606 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_copy($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $retval1;
        var $err;
        $self_addr=$self;
        $retval1=0; //@line 683 "zlibmodule.c"
        var $1=_newcompobject(_Comptype); //@line 686 "zlibmodule.c"
        $retval1=$1; //@line 686 "zlibmodule.c"
        var $2=$retval1; //@line 687 "zlibmodule.c"
        var $3=($2)==0; //@line 687 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 687 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 687 "zlibmodule.c"
        __label__ = 17; break; //@line 687 "zlibmodule.c"
      case 2: // $bb2
        var $4=$self_addr; //@line 693 "zlibmodule.c"
        var $5=$4+8; //@line 693 "zlibmodule.c"
        var $6=$retval1; //@line 693 "zlibmodule.c"
        var $7=$6+8; //@line 693 "zlibmodule.c"
        var $8=_deflateCopy($7, $5); //@line 693 "zlibmodule.c"
        $err=$8; //@line 693 "zlibmodule.c"
        var $9=$err; //@line 694 "zlibmodule.c"
        if ($9 == -4) {
          __label__ = 5; break;
        }
        else if ($9 == -2) {
          __label__ = 4; break;
        }
        else if ($9 == 0) {
          __label__ = 3; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb3
        var $10=$self_addr; //@line 709 "zlibmodule.c"
        var $11=$10+64; //@line 709 "zlibmodule.c"
        var $12=HEAP[$11]; //@line 709 "zlibmodule.c"
        var $13=$12; //@line 709 "zlibmodule.c"
        var $14=HEAP[$13]; //@line 709 "zlibmodule.c"
        var $15=($14) + 1; //@line 709 "zlibmodule.c"
        var $16=$12; //@line 709 "zlibmodule.c"
        HEAP[$16]=$15; //@line 709 "zlibmodule.c"
        var $17=$self_addr; //@line 710 "zlibmodule.c"
        var $18=$17+68; //@line 710 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 710 "zlibmodule.c"
        var $20=$19; //@line 710 "zlibmodule.c"
        var $21=HEAP[$20]; //@line 710 "zlibmodule.c"
        var $22=($21) + 1; //@line 710 "zlibmodule.c"
        var $23=$19; //@line 710 "zlibmodule.c"
        HEAP[$23]=$22; //@line 710 "zlibmodule.c"
        var $24=$retval1; //@line 711 "zlibmodule.c"
        var $25=$24+64; //@line 711 "zlibmodule.c"
        var $26=HEAP[$25]; //@line 711 "zlibmodule.c"
        var $27=($26)!=0; //@line 711 "zlibmodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 711 "zlibmodule.c"
      case 4: // $bb4
        var $28=HEAP[_PyExc_ValueError]; //@line 698 "zlibmodule.c"
        _PyErr_SetString($28, __str33); //@line 698 "zlibmodule.c"
        __label__ = 13; break; //@line 698 "zlibmodule.c"
      case 5: // $bb5
        var $29=HEAP[_PyExc_MemoryError]; //@line 701 "zlibmodule.c"
        _PyErr_SetString($29, __str19); //@line 701 "zlibmodule.c"
        __label__ = 13; break; //@line 701 "zlibmodule.c"
      case 6: // $bb6
        var $30=$self_addr; //@line 705 "zlibmodule.c"
        var $31=$30+8; //@line 705 "zlibmodule.c"
        var $32=$err; //@line 705 "zlibmodule.c"
        _zlib_error($31, $32, __str34); //@line 705 "zlibmodule.c"
        __label__ = 13; break; //@line 705 "zlibmodule.c"
      case 7: // $bb7
        var $33=$retval1; //@line 711 "zlibmodule.c"
        var $34=$33+64; //@line 711 "zlibmodule.c"
        var $35=HEAP[$34]; //@line 711 "zlibmodule.c"
        var $36=$35; //@line 711 "zlibmodule.c"
        var $37=HEAP[$36]; //@line 711 "zlibmodule.c"
        var $38=($37) - 1; //@line 711 "zlibmodule.c"
        var $39=$35; //@line 711 "zlibmodule.c"
        HEAP[$39]=$38; //@line 711 "zlibmodule.c"
        var $40=$35; //@line 711 "zlibmodule.c"
        var $41=HEAP[$40]; //@line 711 "zlibmodule.c"
        var $42=($41)==0; //@line 711 "zlibmodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 711 "zlibmodule.c"
      case 8: // $bb8
        var $43=$retval1; //@line 711 "zlibmodule.c"
        var $44=$43+64; //@line 711 "zlibmodule.c"
        var $45=HEAP[$44]; //@line 711 "zlibmodule.c"
        var $46=$45+4; //@line 711 "zlibmodule.c"
        var $47=HEAP[$46]; //@line 711 "zlibmodule.c"
        var $48=$47+24; //@line 711 "zlibmodule.c"
        var $49=HEAP[$48]; //@line 711 "zlibmodule.c"
        var $50=$retval1; //@line 711 "zlibmodule.c"
        var $51=$50+64; //@line 711 "zlibmodule.c"
        var $52=HEAP[$51]; //@line 711 "zlibmodule.c"
        FUNCTION_TABLE[$49]($52); //@line 711 "zlibmodule.c"
        __label__ = 9; break; //@line 711 "zlibmodule.c"
      case 9: // $bb9
        var $53=$retval1; //@line 712 "zlibmodule.c"
        var $54=$53+68; //@line 712 "zlibmodule.c"
        var $55=HEAP[$54]; //@line 712 "zlibmodule.c"
        var $56=($55)!=0; //@line 712 "zlibmodule.c"
        if ($56) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 712 "zlibmodule.c"
      case 10: // $bb10
        var $57=$retval1; //@line 712 "zlibmodule.c"
        var $58=$57+68; //@line 712 "zlibmodule.c"
        var $59=HEAP[$58]; //@line 712 "zlibmodule.c"
        var $60=$59; //@line 712 "zlibmodule.c"
        var $61=HEAP[$60]; //@line 712 "zlibmodule.c"
        var $62=($61) - 1; //@line 712 "zlibmodule.c"
        var $63=$59; //@line 712 "zlibmodule.c"
        HEAP[$63]=$62; //@line 712 "zlibmodule.c"
        var $64=$59; //@line 712 "zlibmodule.c"
        var $65=HEAP[$64]; //@line 712 "zlibmodule.c"
        var $66=($65)==0; //@line 712 "zlibmodule.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 712 "zlibmodule.c"
      case 11: // $bb11
        var $67=$retval1; //@line 712 "zlibmodule.c"
        var $68=$67+68; //@line 712 "zlibmodule.c"
        var $69=HEAP[$68]; //@line 712 "zlibmodule.c"
        var $70=$69+4; //@line 712 "zlibmodule.c"
        var $71=HEAP[$70]; //@line 712 "zlibmodule.c"
        var $72=$71+24; //@line 712 "zlibmodule.c"
        var $73=HEAP[$72]; //@line 712 "zlibmodule.c"
        var $74=$retval1; //@line 712 "zlibmodule.c"
        var $75=$74+68; //@line 712 "zlibmodule.c"
        var $76=HEAP[$75]; //@line 712 "zlibmodule.c"
        FUNCTION_TABLE[$73]($76); //@line 712 "zlibmodule.c"
        __label__ = 12; break; //@line 712 "zlibmodule.c"
      case 12: // $bb12
        var $77=$self_addr; //@line 713 "zlibmodule.c"
        var $78=$77+64; //@line 713 "zlibmodule.c"
        var $79=HEAP[$78]; //@line 713 "zlibmodule.c"
        var $80=$retval1; //@line 713 "zlibmodule.c"
        var $81=$80+64; //@line 713 "zlibmodule.c"
        HEAP[$81]=$79; //@line 713 "zlibmodule.c"
        var $82=$self_addr; //@line 714 "zlibmodule.c"
        var $83=$82+68; //@line 714 "zlibmodule.c"
        var $84=HEAP[$83]; //@line 714 "zlibmodule.c"
        var $85=$retval1; //@line 714 "zlibmodule.c"
        var $86=$85+68; //@line 714 "zlibmodule.c"
        HEAP[$86]=$84; //@line 714 "zlibmodule.c"
        var $87=$retval1; //@line 717 "zlibmodule.c"
        var $88=$87+72; //@line 717 "zlibmodule.c"
        HEAP[$88]=1; //@line 717 "zlibmodule.c"
        var $89=$retval1; //@line 720 "zlibmodule.c"
        var $90=$89; //@line 720 "zlibmodule.c"
        $0=$90; //@line 720 "zlibmodule.c"
        __label__ = 17; break; //@line 720 "zlibmodule.c"
      case 13: // $error
        var $91=$retval1; //@line 724 "zlibmodule.c"
        var $92=($91)!=0; //@line 724 "zlibmodule.c"
        if ($92) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 724 "zlibmodule.c"
      case 14: // $bb13
        var $93=$retval1; //@line 724 "zlibmodule.c"
        var $94=$93; //@line 724 "zlibmodule.c"
        var $95=$94; //@line 724 "zlibmodule.c"
        var $96=HEAP[$95]; //@line 724 "zlibmodule.c"
        var $97=($96) - 1; //@line 724 "zlibmodule.c"
        var $98=$94; //@line 724 "zlibmodule.c"
        HEAP[$98]=$97; //@line 724 "zlibmodule.c"
        var $99=$94; //@line 724 "zlibmodule.c"
        var $100=HEAP[$99]; //@line 724 "zlibmodule.c"
        var $101=($100)==0; //@line 724 "zlibmodule.c"
        if ($101) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 724 "zlibmodule.c"
      case 15: // $bb14
        var $102=$retval1; //@line 724 "zlibmodule.c"
        var $103=$102; //@line 724 "zlibmodule.c"
        var $104=$103+4; //@line 724 "zlibmodule.c"
        var $105=HEAP[$104]; //@line 724 "zlibmodule.c"
        var $106=$105+24; //@line 724 "zlibmodule.c"
        var $107=HEAP[$106]; //@line 724 "zlibmodule.c"
        var $108=$retval1; //@line 724 "zlibmodule.c"
        var $109=$108; //@line 724 "zlibmodule.c"
        FUNCTION_TABLE[$107]($109); //@line 724 "zlibmodule.c"
        __label__ = 16; break; //@line 724 "zlibmodule.c"
      case 16: // $bb15
        $0=0; //@line 725 "zlibmodule.c"
        __label__ = 17; break; //@line 725 "zlibmodule.c"
      case 17: // $bb16
        var $110=$0; //@line 687 "zlibmodule.c"
        $retval=$110; //@line 687 "zlibmodule.c"
        var $retval17=$retval; //@line 687 "zlibmodule.c"
        ;
        return $retval17; //@line 687 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_uncopy($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $retval1;
        var $err;
        $self_addr=$self;
        $retval1=0; //@line 734 "zlibmodule.c"
        var $1=_newcompobject(_Decomptype); //@line 737 "zlibmodule.c"
        $retval1=$1; //@line 737 "zlibmodule.c"
        var $2=$retval1; //@line 738 "zlibmodule.c"
        var $3=($2)==0; //@line 738 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 738 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 738 "zlibmodule.c"
        __label__ = 17; break; //@line 738 "zlibmodule.c"
      case 2: // $bb2
        var $4=$self_addr; //@line 744 "zlibmodule.c"
        var $5=$4+8; //@line 744 "zlibmodule.c"
        var $6=$retval1; //@line 744 "zlibmodule.c"
        var $7=$6+8; //@line 744 "zlibmodule.c"
        var $8=_inflateCopy($7, $5); //@line 744 "zlibmodule.c"
        $err=$8; //@line 744 "zlibmodule.c"
        var $9=$err; //@line 745 "zlibmodule.c"
        if ($9 == -4) {
          __label__ = 5; break;
        }
        else if ($9 == -2) {
          __label__ = 4; break;
        }
        else if ($9 == 0) {
          __label__ = 3; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb3
        var $10=$self_addr; //@line 760 "zlibmodule.c"
        var $11=$10+64; //@line 760 "zlibmodule.c"
        var $12=HEAP[$11]; //@line 760 "zlibmodule.c"
        var $13=$12; //@line 760 "zlibmodule.c"
        var $14=HEAP[$13]; //@line 760 "zlibmodule.c"
        var $15=($14) + 1; //@line 760 "zlibmodule.c"
        var $16=$12; //@line 760 "zlibmodule.c"
        HEAP[$16]=$15; //@line 760 "zlibmodule.c"
        var $17=$self_addr; //@line 761 "zlibmodule.c"
        var $18=$17+68; //@line 761 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 761 "zlibmodule.c"
        var $20=$19; //@line 761 "zlibmodule.c"
        var $21=HEAP[$20]; //@line 761 "zlibmodule.c"
        var $22=($21) + 1; //@line 761 "zlibmodule.c"
        var $23=$19; //@line 761 "zlibmodule.c"
        HEAP[$23]=$22; //@line 761 "zlibmodule.c"
        var $24=$retval1; //@line 762 "zlibmodule.c"
        var $25=$24+64; //@line 762 "zlibmodule.c"
        var $26=HEAP[$25]; //@line 762 "zlibmodule.c"
        var $27=($26)!=0; //@line 762 "zlibmodule.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 762 "zlibmodule.c"
      case 4: // $bb4
        var $28=HEAP[_PyExc_ValueError]; //@line 749 "zlibmodule.c"
        _PyErr_SetString($28, __str33); //@line 749 "zlibmodule.c"
        __label__ = 13; break; //@line 749 "zlibmodule.c"
      case 5: // $bb5
        var $29=HEAP[_PyExc_MemoryError]; //@line 752 "zlibmodule.c"
        _PyErr_SetString($29, __str23); //@line 752 "zlibmodule.c"
        __label__ = 13; break; //@line 752 "zlibmodule.c"
      case 6: // $bb6
        var $30=$self_addr; //@line 756 "zlibmodule.c"
        var $31=$30+8; //@line 756 "zlibmodule.c"
        var $32=$err; //@line 756 "zlibmodule.c"
        _zlib_error($31, $32, __str35); //@line 756 "zlibmodule.c"
        __label__ = 13; break; //@line 756 "zlibmodule.c"
      case 7: // $bb7
        var $33=$retval1; //@line 762 "zlibmodule.c"
        var $34=$33+64; //@line 762 "zlibmodule.c"
        var $35=HEAP[$34]; //@line 762 "zlibmodule.c"
        var $36=$35; //@line 762 "zlibmodule.c"
        var $37=HEAP[$36]; //@line 762 "zlibmodule.c"
        var $38=($37) - 1; //@line 762 "zlibmodule.c"
        var $39=$35; //@line 762 "zlibmodule.c"
        HEAP[$39]=$38; //@line 762 "zlibmodule.c"
        var $40=$35; //@line 762 "zlibmodule.c"
        var $41=HEAP[$40]; //@line 762 "zlibmodule.c"
        var $42=($41)==0; //@line 762 "zlibmodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 762 "zlibmodule.c"
      case 8: // $bb8
        var $43=$retval1; //@line 762 "zlibmodule.c"
        var $44=$43+64; //@line 762 "zlibmodule.c"
        var $45=HEAP[$44]; //@line 762 "zlibmodule.c"
        var $46=$45+4; //@line 762 "zlibmodule.c"
        var $47=HEAP[$46]; //@line 762 "zlibmodule.c"
        var $48=$47+24; //@line 762 "zlibmodule.c"
        var $49=HEAP[$48]; //@line 762 "zlibmodule.c"
        var $50=$retval1; //@line 762 "zlibmodule.c"
        var $51=$50+64; //@line 762 "zlibmodule.c"
        var $52=HEAP[$51]; //@line 762 "zlibmodule.c"
        FUNCTION_TABLE[$49]($52); //@line 762 "zlibmodule.c"
        __label__ = 9; break; //@line 762 "zlibmodule.c"
      case 9: // $bb9
        var $53=$retval1; //@line 763 "zlibmodule.c"
        var $54=$53+68; //@line 763 "zlibmodule.c"
        var $55=HEAP[$54]; //@line 763 "zlibmodule.c"
        var $56=($55)!=0; //@line 763 "zlibmodule.c"
        if ($56) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 763 "zlibmodule.c"
      case 10: // $bb10
        var $57=$retval1; //@line 763 "zlibmodule.c"
        var $58=$57+68; //@line 763 "zlibmodule.c"
        var $59=HEAP[$58]; //@line 763 "zlibmodule.c"
        var $60=$59; //@line 763 "zlibmodule.c"
        var $61=HEAP[$60]; //@line 763 "zlibmodule.c"
        var $62=($61) - 1; //@line 763 "zlibmodule.c"
        var $63=$59; //@line 763 "zlibmodule.c"
        HEAP[$63]=$62; //@line 763 "zlibmodule.c"
        var $64=$59; //@line 763 "zlibmodule.c"
        var $65=HEAP[$64]; //@line 763 "zlibmodule.c"
        var $66=($65)==0; //@line 763 "zlibmodule.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 763 "zlibmodule.c"
      case 11: // $bb11
        var $67=$retval1; //@line 763 "zlibmodule.c"
        var $68=$67+68; //@line 763 "zlibmodule.c"
        var $69=HEAP[$68]; //@line 763 "zlibmodule.c"
        var $70=$69+4; //@line 763 "zlibmodule.c"
        var $71=HEAP[$70]; //@line 763 "zlibmodule.c"
        var $72=$71+24; //@line 763 "zlibmodule.c"
        var $73=HEAP[$72]; //@line 763 "zlibmodule.c"
        var $74=$retval1; //@line 763 "zlibmodule.c"
        var $75=$74+68; //@line 763 "zlibmodule.c"
        var $76=HEAP[$75]; //@line 763 "zlibmodule.c"
        FUNCTION_TABLE[$73]($76); //@line 763 "zlibmodule.c"
        __label__ = 12; break; //@line 763 "zlibmodule.c"
      case 12: // $bb12
        var $77=$self_addr; //@line 764 "zlibmodule.c"
        var $78=$77+64; //@line 764 "zlibmodule.c"
        var $79=HEAP[$78]; //@line 764 "zlibmodule.c"
        var $80=$retval1; //@line 764 "zlibmodule.c"
        var $81=$80+64; //@line 764 "zlibmodule.c"
        HEAP[$81]=$79; //@line 764 "zlibmodule.c"
        var $82=$self_addr; //@line 765 "zlibmodule.c"
        var $83=$82+68; //@line 765 "zlibmodule.c"
        var $84=HEAP[$83]; //@line 765 "zlibmodule.c"
        var $85=$retval1; //@line 765 "zlibmodule.c"
        var $86=$85+68; //@line 765 "zlibmodule.c"
        HEAP[$86]=$84; //@line 765 "zlibmodule.c"
        var $87=$retval1; //@line 768 "zlibmodule.c"
        var $88=$87+72; //@line 768 "zlibmodule.c"
        HEAP[$88]=1; //@line 768 "zlibmodule.c"
        var $89=$retval1; //@line 771 "zlibmodule.c"
        var $90=$89; //@line 771 "zlibmodule.c"
        $0=$90; //@line 771 "zlibmodule.c"
        __label__ = 17; break; //@line 771 "zlibmodule.c"
      case 13: // $error
        var $91=$retval1; //@line 775 "zlibmodule.c"
        var $92=($91)!=0; //@line 775 "zlibmodule.c"
        if ($92) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 775 "zlibmodule.c"
      case 14: // $bb13
        var $93=$retval1; //@line 775 "zlibmodule.c"
        var $94=$93; //@line 775 "zlibmodule.c"
        var $95=$94; //@line 775 "zlibmodule.c"
        var $96=HEAP[$95]; //@line 775 "zlibmodule.c"
        var $97=($96) - 1; //@line 775 "zlibmodule.c"
        var $98=$94; //@line 775 "zlibmodule.c"
        HEAP[$98]=$97; //@line 775 "zlibmodule.c"
        var $99=$94; //@line 775 "zlibmodule.c"
        var $100=HEAP[$99]; //@line 775 "zlibmodule.c"
        var $101=($100)==0; //@line 775 "zlibmodule.c"
        if ($101) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 775 "zlibmodule.c"
      case 15: // $bb14
        var $102=$retval1; //@line 775 "zlibmodule.c"
        var $103=$102; //@line 775 "zlibmodule.c"
        var $104=$103+4; //@line 775 "zlibmodule.c"
        var $105=HEAP[$104]; //@line 775 "zlibmodule.c"
        var $106=$105+24; //@line 775 "zlibmodule.c"
        var $107=HEAP[$106]; //@line 775 "zlibmodule.c"
        var $108=$retval1; //@line 775 "zlibmodule.c"
        var $109=$108; //@line 775 "zlibmodule.c"
        FUNCTION_TABLE[$107]($109); //@line 775 "zlibmodule.c"
        __label__ = 16; break; //@line 775 "zlibmodule.c"
      case 16: // $bb15
        $0=0; //@line 776 "zlibmodule.c"
        __label__ = 17; break; //@line 776 "zlibmodule.c"
      case 17: // $bb16
        var $110=$0; //@line 738 "zlibmodule.c"
        $retval=$110; //@line 738 "zlibmodule.c"
        var $retval17=$retval; //@line 738 "zlibmodule.c"
        ;
        return $retval17; //@line 738 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_unflush($self, $args) {
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
        var $err;
        var $length=__stackBase__;
        var $retval1=__stackBase__+4;
        var $start_total_out;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$length]=16384; //@line 790 "zlibmodule.c"
        HEAP[$retval1]=0; //@line 791 "zlibmodule.c"
        var $1=$args_addr; //@line 794 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, __str30, allocate([$length,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 794 "zlibmodule.c"
        var $3=($2)==0; //@line 794 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 794 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 795 "zlibmodule.c"
        __label__ = 19; break; //@line 795 "zlibmodule.c"
      case 2: // $bb2
        var $4=HEAP[$length]; //@line 796 "zlibmodule.c"
        var $5=($4) <= 0; //@line 796 "zlibmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 796 "zlibmodule.c"
      case 3: // $bb3
        var $6=HEAP[_PyExc_ValueError]; //@line 797 "zlibmodule.c"
        _PyErr_SetString($6, __str36); //@line 797 "zlibmodule.c"
        $0=0; //@line 798 "zlibmodule.c"
        __label__ = 19; break; //@line 798 "zlibmodule.c"
      case 4: // $bb4
        var $7=HEAP[$length]; //@line 800 "zlibmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 800 "zlibmodule.c"
        HEAP[$retval1]=$8; //@line 800 "zlibmodule.c"
        var $9=HEAP[$retval1]; //@line 800 "zlibmodule.c"
        var $10=($9)==0; //@line 800 "zlibmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 800 "zlibmodule.c"
      case 5: // $bb5
        $0=0; //@line 801 "zlibmodule.c"
        __label__ = 19; break; //@line 801 "zlibmodule.c"
      case 6: // $bb6
        var $11=$self_addr; //@line 806 "zlibmodule.c"
        var $12=$11+8; //@line 806 "zlibmodule.c"
        var $13=$12+20; //@line 806 "zlibmodule.c"
        var $14=HEAP[$13]; //@line 806 "zlibmodule.c"
        $start_total_out=$14; //@line 806 "zlibmodule.c"
        var $15=HEAP[$length]; //@line 807 "zlibmodule.c"
        var $16=$self_addr; //@line 807 "zlibmodule.c"
        var $17=$16+8; //@line 807 "zlibmodule.c"
        var $18=$17+16; //@line 807 "zlibmodule.c"
        HEAP[$18]=$15; //@line 807 "zlibmodule.c"
        var $19=HEAP[$retval1]; //@line 808 "zlibmodule.c"
        var $20=$19; //@line 808 "zlibmodule.c"
        var $21=$20+20; //@line 808 "zlibmodule.c"
        var $22=$21; //@line 808 "zlibmodule.c"
        var $23=$self_addr; //@line 808 "zlibmodule.c"
        var $24=$23+8; //@line 808 "zlibmodule.c"
        var $25=$24+12; //@line 808 "zlibmodule.c"
        HEAP[$25]=$22; //@line 808 "zlibmodule.c"
        var $26=$self_addr; //@line 811 "zlibmodule.c"
        var $27=$26+8; //@line 811 "zlibmodule.c"
        var $28=_inflate($27, 4); //@line 811 "zlibmodule.c"
        $err=$28; //@line 811 "zlibmodule.c"
        __label__ = 9; break; //@line 811 "zlibmodule.c"
      case 7: // $bb7
        var $29=HEAP[$length]; //@line 817 "zlibmodule.c"
        var $30=($29) << 1; //@line 817 "zlibmodule.c"
        var $31=__PyString_Resize($retval1, $30); //@line 817 "zlibmodule.c"
        var $32=($31) < 0; //@line 817 "zlibmodule.c"
        if ($32) { __label__ = 18; break; } else { __label__ = 8; break; } //@line 817 "zlibmodule.c"
      case 8: // $bb8
        var $33=HEAP[$retval1]; //@line 819 "zlibmodule.c"
        var $34=$33; //@line 819 "zlibmodule.c"
        var $35=$34+20; //@line 819 "zlibmodule.c"
        var $36=$35; //@line 819 "zlibmodule.c"
        var $37=HEAP[$length]; //@line 819 "zlibmodule.c"
        var $38=$36+$37; //@line 819 "zlibmodule.c"
        var $39=$self_addr; //@line 819 "zlibmodule.c"
        var $40=$39+8; //@line 819 "zlibmodule.c"
        var $41=$40+12; //@line 819 "zlibmodule.c"
        HEAP[$41]=$38; //@line 819 "zlibmodule.c"
        var $42=HEAP[$length]; //@line 820 "zlibmodule.c"
        var $43=$self_addr; //@line 820 "zlibmodule.c"
        var $44=$43+8; //@line 820 "zlibmodule.c"
        var $45=$44+16; //@line 820 "zlibmodule.c"
        HEAP[$45]=$42; //@line 820 "zlibmodule.c"
        var $46=HEAP[$length]; //@line 821 "zlibmodule.c"
        var $47=($46) << 1; //@line 821 "zlibmodule.c"
        HEAP[$length]=$47; //@line 821 "zlibmodule.c"
        var $48=$self_addr; //@line 824 "zlibmodule.c"
        var $49=$48+8; //@line 824 "zlibmodule.c"
        var $50=_inflate($49, 4); //@line 824 "zlibmodule.c"
        $err=$50; //@line 824 "zlibmodule.c"
        __label__ = 9; break; //@line 824 "zlibmodule.c"
      case 9: // $bb9
        var $51=$err; //@line 816 "zlibmodule.c"
        var $52=($51)==0; //@line 816 "zlibmodule.c"
        var $53=$err; //@line 816 "zlibmodule.c"
        var $54=($53)==-5; //@line 816 "zlibmodule.c"
        var $or_cond=($52) | ($54);
        if ($or_cond) { __lastLabel__ = 9; __label__ = 10; break; } else { __lastLabel__ = 9; __label__ = 12; break; } //@line 816 "zlibmodule.c"
      case 10: // $bb11
        var $55=$self_addr; //@line 816 "zlibmodule.c"
        var $56=$55+8; //@line 816 "zlibmodule.c"
        var $57=$56+16; //@line 816 "zlibmodule.c"
        var $58=HEAP[$57]; //@line 816 "zlibmodule.c"
        var $59=($58)==0; //@line 816 "zlibmodule.c"
        if ($59) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 816 "zlibmodule.c"
      case 11: // $bb12thread_pre_split
        var $_pr=$err;
        __lastLabel__ = 11; __label__ = 12; break;
      case 12: // $bb12
        var $60=__lastLabel__ == 11 ? $_pr : ($53);
        var $61=($60)==1; //@line 831 "zlibmodule.c"
        if ($61) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 831 "zlibmodule.c"
      case 13: // $bb13
        var $62=$self_addr; //@line 832 "zlibmodule.c"
        var $63=$62+8; //@line 832 "zlibmodule.c"
        var $64=_inflateEnd($63); //@line 832 "zlibmodule.c"
        $err=$64; //@line 832 "zlibmodule.c"
        var $65=$self_addr; //@line 833 "zlibmodule.c"
        var $66=$65+72; //@line 833 "zlibmodule.c"
        HEAP[$66]=0; //@line 833 "zlibmodule.c"
        var $67=$err; //@line 834 "zlibmodule.c"
        var $68=($67)!=0; //@line 834 "zlibmodule.c"
        if ($68) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 834 "zlibmodule.c"
      case 14: // $bb14
        var $69=$self_addr; //@line 835 "zlibmodule.c"
        var $70=$69+8; //@line 835 "zlibmodule.c"
        var $71=$err; //@line 835 "zlibmodule.c"
        _zlib_error($70, $71, __str37); //@line 835 "zlibmodule.c"
        var $72=HEAP[$retval1]; //@line 836 "zlibmodule.c"
        var $73=$72; //@line 836 "zlibmodule.c"
        var $74=HEAP[$73]; //@line 836 "zlibmodule.c"
        var $75=($74) - 1; //@line 836 "zlibmodule.c"
        var $76=$72; //@line 836 "zlibmodule.c"
        HEAP[$76]=$75; //@line 836 "zlibmodule.c"
        var $77=$72; //@line 836 "zlibmodule.c"
        var $78=HEAP[$77]; //@line 836 "zlibmodule.c"
        var $79=($78)==0; //@line 836 "zlibmodule.c"
        if ($79) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 836 "zlibmodule.c"
      case 15: // $bb15
        var $80=HEAP[$retval1]; //@line 836 "zlibmodule.c"
        var $81=$80+4; //@line 836 "zlibmodule.c"
        var $82=HEAP[$81]; //@line 836 "zlibmodule.c"
        var $83=$82+24; //@line 836 "zlibmodule.c"
        var $84=HEAP[$83]; //@line 836 "zlibmodule.c"
        var $85=HEAP[$retval1]; //@line 836 "zlibmodule.c"
        FUNCTION_TABLE[$84]($85); //@line 836 "zlibmodule.c"
        __label__ = 16; break; //@line 836 "zlibmodule.c"
      case 16: // $bb16
        HEAP[$retval1]=0; //@line 837 "zlibmodule.c"
        __label__ = 18; break; //@line 837 "zlibmodule.c"
      case 17: // $bb17
        var $86=$self_addr; //@line 841 "zlibmodule.c"
        var $87=$86+8; //@line 841 "zlibmodule.c"
        var $88=$87+20; //@line 841 "zlibmodule.c"
        var $89=HEAP[$88]; //@line 841 "zlibmodule.c"
        var $90=$start_total_out; //@line 841 "zlibmodule.c"
        var $91=($89) - ($90); //@line 841 "zlibmodule.c"
        var $92=__PyString_Resize($retval1, $91); //@line 841 "zlibmodule.c"
        __label__ = 18; break; //@line 843 "zlibmodule.c"
      case 18: // $error
        var $93=HEAP[$retval1]; //@line 847 "zlibmodule.c"
        $0=$93; //@line 847 "zlibmodule.c"
        __label__ = 19; break; //@line 847 "zlibmodule.c"
      case 19: // $bb18
        var $94=$0; //@line 795 "zlibmodule.c"
        $retval=$94; //@line 795 "zlibmodule.c"
        var $retval19=$retval; //@line 795 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 795 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Comp_getattr($self, $name) {
    ;
    var __label__;
  
    var $self_addr;
    var $name_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $name_addr=$name;
    var $1=$self_addr; //@line 882 "zlibmodule.c"
    var $2=$1; //@line 882 "zlibmodule.c"
    var $3=$name_addr; //@line 882 "zlibmodule.c"
    var $4=_Py_FindMethod(_comp_methods, $2, $3); //@line 882 "zlibmodule.c"
    $0=$4; //@line 882 "zlibmodule.c"
    var $5=$0; //@line 882 "zlibmodule.c"
    $retval=$5; //@line 882 "zlibmodule.c"
    var $retval1=$retval; //@line 882 "zlibmodule.c"
    ;
    return $retval1; //@line 882 "zlibmodule.c"
  }
  

  function _Decomp_getattr($self, $name) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $name_addr;
        var $retval;
        var $0;
        var $retval1;
        $self_addr=$self;
        $name_addr=$name;
        var $1=$name_addr; //@line 892 "zlibmodule.c"
        var $2=_strcmp($1, __str42); //@line 892 "zlibmodule.c"
        var $3=($2)==0; //@line 892 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 892 "zlibmodule.c"
      case 1: // $bb
        var $4=$self_addr; //@line 893 "zlibmodule.c"
        var $5=$4+64; //@line 893 "zlibmodule.c"
        var $6=HEAP[$5]; //@line 893 "zlibmodule.c"
        var $7=$6; //@line 893 "zlibmodule.c"
        var $8=HEAP[$7]; //@line 893 "zlibmodule.c"
        var $9=($8) + 1; //@line 893 "zlibmodule.c"
        var $10=$6; //@line 893 "zlibmodule.c"
        HEAP[$10]=$9; //@line 893 "zlibmodule.c"
        var $11=$self_addr; //@line 894 "zlibmodule.c"
        var $12=$11+64; //@line 894 "zlibmodule.c"
        var $13=HEAP[$12]; //@line 894 "zlibmodule.c"
        $retval1=$13; //@line 894 "zlibmodule.c"
        __label__ = 5; break; //@line 894 "zlibmodule.c"
      case 2: // $bb2
        var $14=$name_addr; //@line 895 "zlibmodule.c"
        var $15=_strcmp($14, __str43); //@line 895 "zlibmodule.c"
        var $16=($15)==0; //@line 895 "zlibmodule.c"
        var $17=$self_addr; //@line 896 "zlibmodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 895 "zlibmodule.c"
      case 3: // $bb3
        var $18=$17+68; //@line 896 "zlibmodule.c"
        var $19=HEAP[$18]; //@line 896 "zlibmodule.c"
        var $20=$19; //@line 896 "zlibmodule.c"
        var $21=HEAP[$20]; //@line 896 "zlibmodule.c"
        var $22=($21) + 1; //@line 896 "zlibmodule.c"
        var $23=$19; //@line 896 "zlibmodule.c"
        HEAP[$23]=$22; //@line 896 "zlibmodule.c"
        var $24=$self_addr; //@line 897 "zlibmodule.c"
        var $25=$24+68; //@line 897 "zlibmodule.c"
        var $26=HEAP[$25]; //@line 897 "zlibmodule.c"
        $retval1=$26; //@line 897 "zlibmodule.c"
        __label__ = 5; break; //@line 897 "zlibmodule.c"
      case 4: // $bb4
        var $27=$17; //@line 899 "zlibmodule.c"
        var $28=$name_addr; //@line 899 "zlibmodule.c"
        var $29=_Py_FindMethod(_Decomp_methods, $27, $28); //@line 899 "zlibmodule.c"
        $retval1=$29; //@line 899 "zlibmodule.c"
        __label__ = 5; break; //@line 899 "zlibmodule.c"
      case 5: // $bb5
        var $30=$retval1; //@line 903 "zlibmodule.c"
        $0=$30; //@line 903 "zlibmodule.c"
        var $31=$0; //@line 903 "zlibmodule.c"
        $retval=$31; //@line 903 "zlibmodule.c"
        var $retval6=$retval; //@line 903 "zlibmodule.c"
        ;
        return $retval6; //@line 903 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_adler32($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $adler32val=__stackBase__;
        var $buf=__stackBase__+4;
        var $len=__stackBase__+8;
        var $signed_val;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$adler32val]=1; //@line 915 "zlibmodule.c"
        var $1=$args_addr; //@line 919 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, __str44, allocate([$buf,0,0,0,$len,0,0,0,$adler32val,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 919 "zlibmodule.c"
        var $3=($2)==0; //@line 919 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 919 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 920 "zlibmodule.c"
        __label__ = 3; break; //@line 920 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$len]; //@line 925 "zlibmodule.c"
        var $5=HEAP[$buf]; //@line 925 "zlibmodule.c"
        var $6=HEAP[$adler32val]; //@line 925 "zlibmodule.c"
        var $7=_adler32($6, $5, $4); //@line 925 "zlibmodule.c"
        $signed_val=$7; //@line 925 "zlibmodule.c"
        var $8=$signed_val; //@line 926 "zlibmodule.c"
        var $9=_PyInt_FromLong($8); //@line 926 "zlibmodule.c"
        $0=$9; //@line 926 "zlibmodule.c"
        __label__ = 3; break; //@line 926 "zlibmodule.c"
      case 3: // $bb2
        var $10=$0; //@line 920 "zlibmodule.c"
        $retval=$10; //@line 920 "zlibmodule.c"
        var $retval3=$retval; //@line 920 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 920 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _PyZlib_crc32($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $crc32val=__stackBase__;
        var $buf=__stackBase__+4;
        var $len=__stackBase__+8;
        var $signed_val;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$crc32val]=0; //@line 938 "zlibmodule.c"
        var $1=$args_addr; //@line 942 "zlibmodule.c"
        var $2=_PyArg_ParseTuple($1, __str45, allocate([$buf,0,0,0,$len,0,0,0,$crc32val,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 942 "zlibmodule.c"
        var $3=($2)==0; //@line 942 "zlibmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 942 "zlibmodule.c"
      case 1: // $bb
        $0=0; //@line 943 "zlibmodule.c"
        __label__ = 3; break; //@line 943 "zlibmodule.c"
      case 2: // $bb1
        var $4=HEAP[$len]; //@line 948 "zlibmodule.c"
        var $5=HEAP[$buf]; //@line 948 "zlibmodule.c"
        var $6=HEAP[$crc32val]; //@line 948 "zlibmodule.c"
        var $7=_crc32($6, $5, $4); //@line 948 "zlibmodule.c"
        $signed_val=$7; //@line 948 "zlibmodule.c"
        var $8=$signed_val; //@line 949 "zlibmodule.c"
        var $9=_PyInt_FromLong($8); //@line 949 "zlibmodule.c"
        $0=$9; //@line 949 "zlibmodule.c"
        __label__ = 3; break; //@line 949 "zlibmodule.c"
      case 3: // $bb2
        var $10=$0; //@line 943 "zlibmodule.c"
        $retval=$10; //@line 943 "zlibmodule.c"
        var $retval3=$retval; //@line 943 "zlibmodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 943 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initzlib() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $ver;
        HEAP[_Comptype+4]=_PyType_Type; //@line 1021 "zlibmodule.c"
        HEAP[_Decomptype+4]=_PyType_Type; //@line 1022 "zlibmodule.c"
        var $0=_Py_InitModule4(__str52, _zlib_methods, _zlib_module_documentation, 0, 1013); //@line 1023 "zlibmodule.c"
        $m=$0; //@line 1023 "zlibmodule.c"
        var $1=$m; //@line 1026 "zlibmodule.c"
        var $2=($1)==0; //@line 1026 "zlibmodule.c"
        if ($2) { __label__ = 6; break; } else { __label__ = 1; break; } //@line 1026 "zlibmodule.c"
      case 1: // $bb
        var $3=_PyErr_NewException(__str53, 0, 0); //@line 1029 "zlibmodule.c"
        HEAP[_ZlibError]=$3; //@line 1029 "zlibmodule.c"
        var $4=HEAP[_ZlibError]; //@line 1030 "zlibmodule.c"
        var $5=($4)!=0; //@line 1030 "zlibmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1030 "zlibmodule.c"
      case 2: // $bb1
        var $6=HEAP[_ZlibError]; //@line 1031 "zlibmodule.c"
        var $7=$6; //@line 1031 "zlibmodule.c"
        var $8=HEAP[$7]; //@line 1031 "zlibmodule.c"
        var $9=($8) + 1; //@line 1031 "zlibmodule.c"
        var $10=$6; //@line 1031 "zlibmodule.c"
        HEAP[$10]=$9; //@line 1031 "zlibmodule.c"
        var $11=HEAP[_ZlibError]; //@line 1032 "zlibmodule.c"
        var $12=$m; //@line 1032 "zlibmodule.c"
        var $13=_PyModule_AddObject($12, __str54, $11); //@line 1032 "zlibmodule.c"
        __label__ = 3; break; //@line 1032 "zlibmodule.c"
      case 3: // $bb2
        var $14=$m; //@line 1034 "zlibmodule.c"
        var $15=_PyModule_AddIntConstant($14, __str55, 15); //@line 1034 "zlibmodule.c"
        var $16=$m; //@line 1035 "zlibmodule.c"
        var $17=_PyModule_AddIntConstant($16, __str56, 8); //@line 1035 "zlibmodule.c"
        var $18=$m; //@line 1036 "zlibmodule.c"
        var $19=_PyModule_AddIntConstant($18, __str57, 8); //@line 1036 "zlibmodule.c"
        var $20=$m; //@line 1037 "zlibmodule.c"
        var $21=_PyModule_AddIntConstant($20, __str58, 1); //@line 1037 "zlibmodule.c"
        var $22=$m; //@line 1038 "zlibmodule.c"
        var $23=_PyModule_AddIntConstant($22, __str59, 9); //@line 1038 "zlibmodule.c"
        var $24=$m; //@line 1039 "zlibmodule.c"
        var $25=_PyModule_AddIntConstant($24, __str60, -1); //@line 1039 "zlibmodule.c"
        var $26=$m; //@line 1040 "zlibmodule.c"
        var $27=_PyModule_AddIntConstant($26, __str61, 1); //@line 1040 "zlibmodule.c"
        var $28=$m; //@line 1041 "zlibmodule.c"
        var $29=_PyModule_AddIntConstant($28, __str62, 2); //@line 1041 "zlibmodule.c"
        var $30=$m; //@line 1042 "zlibmodule.c"
        var $31=_PyModule_AddIntConstant($30, __str63, 0); //@line 1042 "zlibmodule.c"
        var $32=$m; //@line 1044 "zlibmodule.c"
        var $33=_PyModule_AddIntConstant($32, __str64, 4); //@line 1044 "zlibmodule.c"
        var $34=$m; //@line 1045 "zlibmodule.c"
        var $35=_PyModule_AddIntConstant($34, __str65, 0); //@line 1045 "zlibmodule.c"
        var $36=$m; //@line 1046 "zlibmodule.c"
        var $37=_PyModule_AddIntConstant($36, __str66, 2); //@line 1046 "zlibmodule.c"
        var $38=$m; //@line 1047 "zlibmodule.c"
        var $39=_PyModule_AddIntConstant($38, __str67, 3); //@line 1047 "zlibmodule.c"
        var $40=_PyString_FromString(__str8); //@line 1049 "zlibmodule.c"
        $ver=$40; //@line 1049 "zlibmodule.c"
        var $41=($40)!=0; //@line 1050 "zlibmodule.c"
        if ($41) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1050 "zlibmodule.c"
      case 4: // $bb3
        var $42=$m; //@line 1051 "zlibmodule.c"
        var $43=$ver; //@line 1051 "zlibmodule.c"
        var $44=_PyModule_AddObject($42, __str68, $43); //@line 1051 "zlibmodule.c"
        __label__ = 5; break; //@line 1051 "zlibmodule.c"
      case 5: // $bb4
        var $45=$m; //@line 1053 "zlibmodule.c"
        var $46=_PyModule_AddStringConstant($45, __str69, __str70); //@line 1053 "zlibmodule.c"
        __label__ = 6; break; //@line 1053 "zlibmodule.c"
      case 6: // $return
        ;
        return; //@line 1027 "zlibmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initzlib"] = _initzlib;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_PyZlib_objcompress,0,_PyZlib_flush,0,_PyZlib_copy,0,_PyZlib_objdecompress,0,_PyZlib_unflush,0,_PyZlib_uncopy,0,_PyZlib_adler32,0,_PyZlib_compress,0,_PyZlib_compressobj,0,_PyZlib_crc32,0,_PyZlib_decompress,0,_PyZlib_decompressobj,0,_Comp_dealloc,0,_Comp_getattr,0,_Decomp_dealloc,0,_Decomp_getattr,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([105,110,99,111,109,112,108,101,116,101,32,111,114,32,116,114,117,110,99,97,116,101,100,32,115,116,114,101,97,109,0] /* incomplete or trunca */, "i8", ALLOC_NORMAL);
__str1=allocate([105,110,99,111,110,115,105,115,116,101,110,116,32,115,116,114,101,97,109,32,115,116,97,116,101,0] /* inconsistent stream  */, "i8", ALLOC_NORMAL);
__str2=allocate([105,110,118,97,108,105,100,32,105,110,112,117,116,32,100,97,116,97,0] /* invalid input data\0 */, "i8", ALLOC_NORMAL);
_ZlibError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str3=allocate([69,114,114,111,114,32,37,100,32,37,115,0] /* Error %d %s\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([69,114,114,111,114,32,37,100,32,37,115,58,32,37,46,50,48,48,115,0] /* Error %d %s: %.200s\ */, "i8", ALLOC_NORMAL);
_compressobj__doc__=allocate([99,111,109,112,114,101,115,115,111,98,106,40,91,108,101,118,101,108,93,41,32,45,45,32,82,101,116,117,114,110,32,97,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,32,108,101,118,101,108,32,105,115,32,116,104,101,32,99,111,109,112,114,101,115,115,105,111,110,32,108,101,118,101,108,44,32,105,110,32,49,45,57,46,0] /* compressobj([level]) */, "i8", ALLOC_NORMAL);
_decompressobj__doc__=allocate([100,101,99,111,109,112,114,101,115,115,111,98,106,40,91,119,98,105,116,115,93,41,32,45,45,32,82,101,116,117,114,110,32,97,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,32,119,98,105,116,115,32,105,115,32,116,104,101,32,119,105,110,100,111,119,32,98,117,102,102,101,114,32,115,105,122,101,46,0] /* decompressobj([wbits */, "i8", ALLOC_NORMAL);
__str5=allocate(1, "i8", ALLOC_NORMAL);
_compress__doc__=allocate([99,111,109,112,114,101,115,115,40,115,116,114,105,110,103,91,44,32,108,101,118,101,108,93,41,32,45,45,32,82,101,116,117,114,110,101,100,32,99,111,109,112,114,101,115,115,101,100,32,115,116,114,105,110,103,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,32,108,101,118,101,108,32,105,115,32,116,104,101,32,99,111,109,112,114,101,115,115,105,111,110,32,108,101,118,101,108,44,32,105,110,32,49,45,57,46,0] /* compress(string[, le */, "i8", ALLOC_NORMAL);
__str6=allocate([115,35,124,105,58,99,111,109,112,114,101,115,115,0] /* s#|i:compress\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([67,97,110,39,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,116,111,32,99,111,109,112,114,101,115,115,32,100,97,116,97,0] /* Can't allocate memor */, "i8", ALLOC_NORMAL);
__str8=allocate([49,46,50,46,53,0] /* 1.2.5\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([79,117,116,32,111,102,32,109,101,109,111,114,121,32,119,104,105,108,101,32,99,111,109,112,114,101,115,115,105,110,103,32,100,97,116,97,0] /* Out of memory while  */, "i8", ALLOC_NORMAL);
__str10=allocate([66,97,100,32,99,111,109,112,114,101,115,115,105,111,110,32,108,101,118,101,108,0] /* Bad compression leve */, "i8", ALLOC_NORMAL);
__str11=allocate([119,104,105,108,101,32,99,111,109,112,114,101,115,115,105,110,103,32,100,97,116,97,0] /* while compressing da */, "i8", ALLOC_NORMAL);
__str12=allocate([119,104,105,108,101,32,102,105,110,105,115,104,105,110,103,32,99,111,109,112,114,101,115,115,105,111,110,0] /* while finishing comp */, "i8", ALLOC_NORMAL);
_decompress__doc__=allocate([100,101,99,111,109,112,114,101,115,115,40,115,116,114,105,110,103,91,44,32,119,98,105,116,115,91,44,32,98,117,102,115,105,122,101,93,93,41,32,45,45,32,82,101,116,117,114,110,32,100,101,99,111,109,112,114,101,115,115,101,100,32,115,116,114,105,110,103,46,10,10,79,112,116,105,111,110,97,108,32,97,114,103,32,119,98,105,116,115,32,105,115,32,116,104,101,32,119,105,110,100,111,119,32,98,117,102,102,101,114,32,115,105,122,101,46,32,32,79,112,116,105,111,110,97,108,32,97,114,103,32,98,117,102,115,105,122,101,32,105,115,10,116,104,101,32,105,110,105,116,105,97,108,32,111,117,116,112,117,116,32,98,117,102,102,101,114,32,115,105,122,101,46,0] /* decompress(string[,  */, "i8", ALLOC_NORMAL);
__str13=allocate([115,35,124,105,110,58,100,101,99,111,109,112,114,101,115,115,0] /* s#|in:decompress\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([79,117,116,32,111,102,32,109,101,109,111,114,121,32,119,104,105,108,101,32,100,101,99,111,109,112,114,101,115,115,105,110,103,32,100,97,116,97,0] /* Out of memory while  */, "i8", ALLOC_NORMAL);
__str15=allocate([119,104,105,108,101,32,112,114,101,112,97,114,105,110,103,32,116,111,32,100,101,99,111,109,112,114,101,115,115,32,100,97,116,97,0] /* while preparing to d */, "i8", ALLOC_NORMAL);
__str16=allocate([119,104,105,108,101,32,100,101,99,111,109,112,114,101,115,115,105,110,103,32,100,97,116,97,0] /* while decompressing  */, "i8", ALLOC_NORMAL);
__str17=allocate([119,104,105,108,101,32,102,105,110,105,115,104,105,110,103,32,100,97,116,97,32,100,101,99,111,109,112,114,101,115,115,105,111,110,0] /* while finishing data */, "i8", ALLOC_NORMAL);
__str18=allocate([124,105,105,105,105,105,58,99,111,109,112,114,101,115,115,111,98,106,0] /* |iiiii:compressobj\0 */, "i8", ALLOC_NORMAL);
__str19=allocate([67,97,110,39,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* Can't allocate memor */, "i8", ALLOC_NORMAL);
__str20=allocate([73,110,118,97,108,105,100,32,105,110,105,116,105,97,108,105,122,97,116,105,111,110,32,111,112,116,105,111,110,0] /* Invalid initializati */, "i8", ALLOC_NORMAL);
__str21=allocate([119,104,105,108,101,32,99,114,101,97,116,105,110,103,32,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* while creating compr */, "i8", ALLOC_NORMAL);
__str22=allocate([124,105,58,100,101,99,111,109,112,114,101,115,115,111,98,106,0] /* |i:decompressobj\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([67,97,110,39,116,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,100,101,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* Can't allocate memor */, "i8", ALLOC_NORMAL);
__str24=allocate([119,104,105,108,101,32,99,114,101,97,116,105,110,103,32,100,101,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* while creating decom */, "i8", ALLOC_NORMAL);
_comp_compress__doc__=allocate([99,111,109,112,114,101,115,115,40,100,97,116,97,41,32,45,45,32,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,100,97,116,97,32,99,111,109,112,114,101,115,115,101,100,46,10,10,65,102,116,101,114,32,99,97,108,108,105,110,103,32,116,104,105,115,32,102,117,110,99,116,105,111,110,44,32,115,111,109,101,32,111,102,32,116,104,101,32,105,110,112,117,116,32,100,97,116,97,32,109,97,121,32,115,116,105,108,108,10,98,101,32,115,116,111,114,101,100,32,105,110,32,105,110,116,101,114,110,97,108,32,98,117,102,102,101,114,115,32,102,111,114,32,108,97,116,101,114,32,112,114,111,99,101,115,115,105,110,103,46,10,67,97,108,108,32,116,104,101,32,102,108,117,115,104,40,41,32,109,101,116,104,111,100,32,116,111,32,99,108,101,97,114,32,116,104,101,115,101,32,98,117,102,102,101,114,115,46,0] /* compress(data) -- Re */, "i8", ALLOC_NORMAL);
__str25=allocate([115,35,58,99,111,109,112,114,101,115,115,0] /* s#:compress\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([119,104,105,108,101,32,99,111,109,112,114,101,115,115,105,110,103,0] /* while compressing\00 */, "i8", ALLOC_NORMAL);
_decomp_decompress__doc__=allocate([100,101,99,111,109,112,114,101,115,115,40,100,97,116,97,44,32,109,97,120,95,108,101,110,103,116,104,41,32,45,45,32,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,100,101,99,111,109,112,114,101,115,115,101,100,10,118,101,114,115,105,111,110,32,111,102,32,116,104,101,32,100,97,116,97,46,10,10,65,102,116,101,114,32,99,97,108,108,105,110,103,32,116,104,105,115,32,102,117,110,99,116,105,111,110,44,32,115,111,109,101,32,111,102,32,116,104,101,32,105,110,112,117,116,32,100,97,116,97,32,109,97,121,32,115,116,105,108,108,32,98,101,32,115,116,111,114,101,100,32,105,110,10,105,110,116,101,114,110,97,108,32,98,117,102,102,101,114,115,32,102,111,114,32,108,97,116,101,114,32,112,114,111,99,101,115,115,105,110,103,46,10,67,97,108,108,32,116,104,101,32,102,108,117,115,104,40,41,32,109,101,116,104,111,100,32,116,111,32,99,108,101,97,114,32,116,104,101,115,101,32,98,117,102,102,101,114,115,46,10,73,102,32,116,104,101,32,109,97,120,95,108,101,110,103,116,104,32,112,97,114,97,109,101,116,101,114,32,105,115,32,115,112,101,99,105,102,105,101,100,32,116,104,101,110,32,116,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,119,105,108,108,32,98,101,10,110,111,32,108,111,110,103,101,114,32,116,104,97,110,32,109,97,120,95,108,101,110,103,116,104,46,32,32,85,110,99,111,110,115,117,109,101,100,32,105,110,112,117,116,32,100,97,116,97,32,119,105,108,108,32,98,101,32,115,116,111,114,101,100,32,105,110,10,116,104,101,32,117,110,99,111,110,115,117,109,101,100,95,116,97,105,108,32,97,116,116,114,105,98,117,116,101,46,0] /* decompress(data, max */, "i8", ALLOC_NORMAL);
__str27=allocate([115,35,124,105,58,100,101,99,111,109,112,114,101,115,115,0] /* s#|i:decompress\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([109,97,120,95,108,101,110,103,116,104,32,109,117,115,116,32,98,101,32,103,114,101,97,116,101,114,32,116,104,97,110,32,122,101,114,111,0] /* max_length must be g */, "i8", ALLOC_NORMAL);
__str29=allocate([119,104,105,108,101,32,100,101,99,111,109,112,114,101,115,115,105,110,103,0] /* while decompressing\ */, "i8", ALLOC_NORMAL);
_comp_flush__doc__=allocate([102,108,117,115,104,40,32,91,109,111,100,101,93,32,41,32,45,45,32,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,97,110,121,32,114,101,109,97,105,110,105,110,103,32,99,111,109,112,114,101,115,115,101,100,32,100,97,116,97,46,10,10,109,111,100,101,32,99,97,110,32,98,101,32,111,110,101,32,111,102,32,116,104,101,32,99,111,110,115,116,97,110,116,115,32,90,95,83,89,78,67,95,70,76,85,83,72,44,32,90,95,70,85,76,76,95,70,76,85,83,72,44,32,90,95,70,73,78,73,83,72,59,32,116,104,101,10,100,101,102,97,117,108,116,32,118,97,108,117,101,32,117,115,101,100,32,119,104,101,110,32,109,111,100,101,32,105,115,32,110,111,116,32,115,112,101,99,105,102,105,101,100,32,105,115,32,90,95,70,73,78,73,83,72,46,10,73,102,32,109,111,100,101,32,61,61,32,90,95,70,73,78,73,83,72,44,32,116,104,101,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,32,99,97,110,32,110,111,32,108,111,110,103,101,114,32,98,101,32,117,115,101,100,32,97,102,116,101,114,10,99,97,108,108,105,110,103,32,116,104,101,32,102,108,117,115,104,40,41,32,109,101,116,104,111,100,46,32,32,79,116,104,101,114,119,105,115,101,44,32,109,111,114,101,32,100,97,116,97,32,99,97,110,32,115,116,105,108,108,32,98,101,32,99,111,109,112,114,101,115,115,101,100,46,0] /* flush( [mode] ) -- R */, "i8", ALLOC_NORMAL);
__str30=allocate([124,105,58,102,108,117,115,104,0] /* |i:flush\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([102,114,111,109,32,100,101,102,108,97,116,101,69,110,100,40,41,0] /* from deflateEnd()\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([119,104,105,108,101,32,102,108,117,115,104,105,110,103,0] /* while flushing\00 */, "i8", ALLOC_NORMAL);
_comp_copy__doc__=allocate([99,111,112,121,40,41,32,45,45,32,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,46,0] /* copy() -- Return a c */, "i8", ALLOC_NORMAL);
__str33=allocate([73,110,99,111,110,115,105,115,116,101,110,116,32,115,116,114,101,97,109,32,115,116,97,116,101,0] /* Inconsistent stream  */, "i8", ALLOC_NORMAL);
__str34=allocate([119,104,105,108,101,32,99,111,112,121,105,110,103,32,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* while copying compre */, "i8", ALLOC_NORMAL);
_decomp_copy__doc__=allocate([99,111,112,121,40,41,32,45,45,32,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,100,101,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,46,0] /* copy() -- Return a c */, "i8", ALLOC_NORMAL);
__str35=allocate([119,104,105,108,101,32,99,111,112,121,105,110,103,32,100,101,99,111,109,112,114,101,115,115,105,111,110,32,111,98,106,101,99,116,0] /* while copying decomp */, "i8", ALLOC_NORMAL);
_decomp_flush__doc__=allocate([102,108,117,115,104,40,32,91,108,101,110,103,116,104,93,32,41,32,45,45,32,82,101,116,117,114,110,32,97,32,115,116,114,105,110,103,32,99,111,110,116,97,105,110,105,110,103,32,97,110,121,32,114,101,109,97,105,110,105,110,103,10,100,101,99,111,109,112,114,101,115,115,101,100,32,100,97,116,97,46,32,108,101,110,103,116,104,44,32,105,102,32,103,105,118,101,110,44,32,105,115,32,116,104,101,32,105,110,105,116,105,97,108,32,115,105,122,101,32,111,102,32,116,104,101,10,111,117,116,112,117,116,32,98,117,102,102,101,114,46,10,10,84,104,101,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,32,99,97,110,32,110,111,32,108,111,110,103,101,114,32,98,101,32,117,115,101,100,32,97,102,116,101,114,32,116,104,105,115,32,99,97,108,108,46,0] /* flush( [length] ) -- */, "i8", ALLOC_NORMAL);
__str36=allocate([108,101,110,103,116,104,32,109,117,115,116,32,98,101,32,103,114,101,97,116,101,114,32,116,104,97,110,32,122,101,114,111,0] /* length must be great */, "i8", ALLOC_NORMAL);
__str37=allocate([102,114,111,109,32,105,110,102,108,97,116,101,69,110,100,40,41,0] /* from inflateEnd()\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([99,111,109,112,114,101,115,115,0] /* compress\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([102,108,117,115,104,0] /* flush\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([99,111,112,121,0] /* copy\00 */, "i8", ALLOC_NORMAL);
_comp_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str41=allocate([100,101,99,111,109,112,114,101,115,115,0] /* decompress\00 */, "i8", ALLOC_NORMAL);
_Decomp_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str42=allocate([117,110,117,115,101,100,95,100,97,116,97,0] /* unused_data\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([117,110,99,111,110,115,117,109,101,100,95,116,97,105,108,0] /* unconsumed_tail\00 */, "i8", ALLOC_NORMAL);
_adler32__doc__=allocate([97,100,108,101,114,51,50,40,115,116,114,105,110,103,91,44,32,115,116,97,114,116,93,41,32,45,45,32,67,111,109,112,117,116,101,32,97,110,32,65,100,108,101,114,45,51,50,32,99,104,101,99,107,115,117,109,32,111,102,32,115,116,114,105,110,103,46,10,10,65,110,32,111,112,116,105,111,110,97,108,32,115,116,97,114,116,105,110,103,32,118,97,108,117,101,32,99,97,110,32,98,101,32,115,112,101,99,105,102,105,101,100,46,32,32,84,104,101,32,114,101,116,117,114,110,101,100,32,99,104,101,99,107,115,117,109,32,105,115,10,97,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,46,0] /* adler32(string[, sta */, "i8", ALLOC_NORMAL);
__str44=allocate([115,35,124,73,58,97,100,108,101,114,51,50,0] /* s#|I:adler32\00 */, "i8", ALLOC_NORMAL);
_crc32__doc__=allocate([99,114,99,51,50,40,115,116,114,105,110,103,91,44,32,115,116,97,114,116,93,41,32,45,45,32,67,111,109,112,117,116,101,32,97,32,67,82,67,45,51,50,32,99,104,101,99,107,115,117,109,32,111,102,32,115,116,114,105,110,103,46,10,10,65,110,32,111,112,116,105,111,110,97,108,32,115,116,97,114,116,105,110,103,32,118,97,108,117,101,32,99,97,110,32,98,101,32,115,112,101,99,105,102,105,101,100,46,32,32,84,104,101,32,114,101,116,117,114,110,101,100,32,99,104,101,99,107,115,117,109,32,105,115,10,97,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,46,0] /* crc32(string[, start */, "i8", ALLOC_NORMAL);
__str45=allocate([115,35,124,73,58,99,114,99,51,50,0] /* s#|I:crc32\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([97,100,108,101,114,51,50,0] /* adler32\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([99,111,109,112,114,101,115,115,111,98,106,0] /* compressobj\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([99,114,99,51,50,0] /* crc32\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([100,101,99,111,109,112,114,101,115,115,111,98,106,0] /* decompressobj\00 */, "i8", ALLOC_NORMAL);
_zlib_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str50=allocate([122,108,105,98,46,67,111,109,112,114,101,115,115,0] /* zlib.Compress\00 */, "i8", ALLOC_NORMAL);
_Comptype=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str51=allocate([122,108,105,98,46,68,101,99,111,109,112,114,101,115,115,0] /* zlib.Decompress\00 */, "i8", ALLOC_NORMAL);
_Decomptype=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_zlib_module_documentation=allocate([84,104,101,32,102,117,110,99,116,105,111,110,115,32,105,110,32,116,104,105,115,32,109,111,100,117,108,101,32,97,108,108,111,119,32,99,111,109,112,114,101,115,115,105,111,110,32,97,110,100,32,100,101,99,111,109,112,114,101,115,115,105,111,110,32,117,115,105,110,103,32,116,104,101,10,122,108,105,98,32,108,105,98,114,97,114,121,44,32,119,104,105,99,104,32,105,115,32,98,97,115,101,100,32,111,110,32,71,78,85,32,122,105,112,46,10,10,97,100,108,101,114,51,50,40,115,116,114,105,110,103,91,44,32,115,116,97,114,116,93,41,32,45,45,32,67,111,109,112,117,116,101,32,97,110,32,65,100,108,101,114,45,51,50,32,99,104,101,99,107,115,117,109,46,10,99,111,109,112,114,101,115,115,40,115,116,114,105,110,103,91,44,32,108,101,118,101,108,93,41,32,45,45,32,67,111,109,112,114,101,115,115,32,115,116,114,105,110,103,44,32,119,105,116,104,32,99,111,109,112,114,101,115,115,105,111,110,32,108,101,118,101,108,32,105,110,32,49,45,57,46,10,99,111,109,112,114,101,115,115,111,98,106,40,91,108,101,118,101,108,93,41,32,45,45,32,82,101,116,117,114,110,32,97,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,10,99,114,99,51,50,40,115,116,114,105,110,103,91,44,32,115,116,97,114,116,93,41,32,45,45,32,67,111,109,112,117,116,101,32,97,32,67,82,67,45,51,50,32,99,104,101,99,107,115,117,109,46,10,100,101,99,111,109,112,114,101,115,115,40,115,116,114,105,110,103,44,91,119,98,105,116,115,93,44,91,98,117,102,115,105,122,101,93,41,32,45,45,32,68,101,99,111,109,112,114,101,115,115,101,115,32,97,32,99,111,109,112,114,101,115,115,101,100,32,115,116,114,105,110,103,46,10,100,101,99,111,109,112,114,101,115,115,111,98,106,40,91,119,98,105,116,115,93,41,32,45,45,32,82,101,116,117,114,110,32,97,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,10,10,39,119,98,105,116,115,39,32,105,115,32,119,105,110,100,111,119,32,98,117,102,102,101,114,32,115,105,122,101,46,10,67,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,115,32,115,117,112,112,111,114,116,32,99,111,109,112,114,101,115,115,40,41,32,97,110,100,32,102,108,117,115,104,40,41,32,109,101,116,104,111,100,115,59,32,100,101,99,111,109,112,114,101,115,115,111,114,10,111,98,106,101,99,116,115,32,115,117,112,112,111,114,116,32,100,101,99,111,109,112,114,101,115,115,40,41,32,97,110,100,32,102,108,117,115,104,40,41,46,0] /* The functions in thi */, "i8", ALLOC_NORMAL);
__str52=allocate([122,108,105,98,0] /* zlib\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([122,108,105,98,46,101,114,114,111,114,0] /* zlib.error\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([77,65,88,95,87,66,73,84,83,0] /* MAX_WBITS\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([68,69,70,76,65,84,69,68,0] /* DEFLATED\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([68,69,70,95,77,69,77,95,76,69,86,69,76,0] /* DEF_MEM_LEVEL\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([90,95,66,69,83,84,95,83,80,69,69,68,0] /* Z_BEST_SPEED\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([90,95,66,69,83,84,95,67,79,77,80,82,69,83,83,73,79,78,0] /* Z_BEST_COMPRESSION\0 */, "i8", ALLOC_NORMAL);
__str60=allocate([90,95,68,69,70,65,85,76,84,95,67,79,77,80,82,69,83,83,73,79,78,0] /* Z_DEFAULT_COMPRESSIO */, "i8", ALLOC_NORMAL);
__str61=allocate([90,95,70,73,76,84,69,82,69,68,0] /* Z_FILTERED\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([90,95,72,85,70,70,77,65,78,95,79,78,76,89,0] /* Z_HUFFMAN_ONLY\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([90,95,68,69,70,65,85,76,84,95,83,84,82,65,84,69,71,89,0] /* Z_DEFAULT_STRATEGY\0 */, "i8", ALLOC_NORMAL);
__str64=allocate([90,95,70,73,78,73,83,72,0] /* Z_FINISH\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([90,95,78,79,95,70,76,85,83,72,0] /* Z_NO_FLUSH\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([90,95,83,89,78,67,95,70,76,85,83,72,0] /* Z_SYNC_FLUSH\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([90,95,70,85,76,76,95,70,76,85,83,72,0] /* Z_FULL_FLUSH\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([90,76,73,66,95,86,69,82,83,73,79,78,0] /* ZLIB_VERSION\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([95,95,118,101,114,115,105,111,110,95,95,0] /* __version__\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([49,46,48,0] /* 1.0\00 */, "i8", ALLOC_NORMAL);
HEAP[_comp_methods]=__str38;
HEAP[_comp_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_comp_methods+12]=_comp_compress__doc__;
HEAP[_comp_methods+16]=__str39;
HEAP[_comp_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_comp_methods+28]=_comp_flush__doc__;
HEAP[_comp_methods+32]=__str40;
HEAP[_comp_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_comp_methods+44]=_comp_copy__doc__;
HEAP[_Decomp_methods]=__str41;
HEAP[_Decomp_methods+4]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_Decomp_methods+12]=_decomp_decompress__doc__;
HEAP[_Decomp_methods+16]=__str39;
HEAP[_Decomp_methods+20]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_Decomp_methods+28]=_decomp_flush__doc__;
HEAP[_Decomp_methods+32]=__str40;
HEAP[_Decomp_methods+36]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_Decomp_methods+44]=_decomp_copy__doc__;
HEAP[_zlib_methods]=__str46;
HEAP[_zlib_methods+4]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_zlib_methods+12]=_adler32__doc__;
HEAP[_zlib_methods+16]=__str38;
HEAP[_zlib_methods+20]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_zlib_methods+28]=_compress__doc__;
HEAP[_zlib_methods+32]=__str47;
HEAP[_zlib_methods+36]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_zlib_methods+44]=_compressobj__doc__;
HEAP[_zlib_methods+48]=__str48;
HEAP[_zlib_methods+52]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_zlib_methods+60]=_crc32__doc__;
HEAP[_zlib_methods+64]=__str41;
HEAP[_zlib_methods+68]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_zlib_methods+76]=_decompress__doc__;
HEAP[_zlib_methods+80]=__str49;
HEAP[_zlib_methods+84]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_zlib_methods+92]=_decompressobj__doc__;
HEAP[_Comptype+12]=__str50;
HEAP[_Comptype+24]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_Comptype+32]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_Decomptype+12]=__str51;
HEAP[_Decomptype+24]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_Decomptype+32]=(FUNCTION_TABLE_OFFSET + 32);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

