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



var $0___SIZE = 416; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 16; // %2
  
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
  
var _seg_aend;
var _seg_uend;
var __st_ulaw2linear16;
var __st_alaw2linear16;
var _indexTable;
var _stepsizeTable;
var _AudioopError;
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
var _audioop_methods;
var __str72;
var __str73;
var __str74;


























  function _search($val, $table) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $val_addr;
        var $table_addr;
        var $size_addr;
        var $retval;
        var $0;
        var $i;
        $val_addr=$val;
        $table_addr=$table;
        $size_addr=8;
        $i=0; //@line 58 "audioop.c"
        __label__ = 4; break; //@line 58 "audioop.c"
      case 1: // $bb
        var $1=$table_addr; //@line 59 "audioop.c"
        var $2=HEAP[$1]; //@line 59 "audioop.c"
        var $3=$val_addr; //@line 59 "audioop.c"
        var $4=($2) >= ($3); //@line 59 "audioop.c"
        var $5=($4); //@line 59 "audioop.c"
        var $6=$table_addr; //@line 59 "audioop.c"
        var $7=$6+2; //@line 59 "audioop.c"
        $table_addr=$7; //@line 59 "audioop.c"
        var $toBool=($5)!=0; //@line 59 "audioop.c"
        var $8=$i; //@line 60 "audioop.c"
        if ($toBool) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 59 "audioop.c"
      case 2: // $bb1
        var $9=((($8)) & 65535); //@line 60 "audioop.c"
        var $10=($9); //@line 60 "audioop.c"
        $0=$10; //@line 60 "audioop.c"
        __label__ = 6; break; //@line 60 "audioop.c"
      case 3: // $bb2
        var $11=($8) + 1; //@line 58 "audioop.c"
        $i=$11; //@line 58 "audioop.c"
        __label__ = 4; break; //@line 58 "audioop.c"
      case 4: // $bb3
        var $12=$i; //@line 58 "audioop.c"
        var $13=$size_addr; //@line 58 "audioop.c"
        var $14=($12) < ($13); //@line 58 "audioop.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 58 "audioop.c"
      case 5: // $bb4
        var $15=$size_addr; //@line 62 "audioop.c"
        var $16=((($15)) & 65535); //@line 62 "audioop.c"
        var $17=($16); //@line 62 "audioop.c"
        $0=$17; //@line 62 "audioop.c"
        __label__ = 6; break; //@line 62 "audioop.c"
      case 6: // $bb5
        var $18=$0; //@line 60 "audioop.c"
        $retval=$18; //@line 60 "audioop.c"
        var $retval6=$retval; //@line 60 "audioop.c"
        var $retval67=((($retval6)) & 65535); //@line 60 "audioop.c"
        ;
        return $retval67; //@line 60 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _st_14linear2ulaw($pcm_val) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pcm_val_addr;
        var $retval;
        var $0;
        var $mask;
        var $seg;
        var $uval;
        $pcm_val_addr=$pcm_val;
        var $1=$pcm_val_addr; //@line 147 "audioop.c"
        var $2=($1) >> 2; //@line 147 "audioop.c"
        $pcm_val_addr=$2; //@line 147 "audioop.c"
        var $3=$pcm_val_addr; //@line 151 "audioop.c"
        var $4=($3) < 0; //@line 151 "audioop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 151 "audioop.c"
      case 1: // $bb
        var $5=$pcm_val_addr; //@line 152 "audioop.c"
        var $6=0 - ($5); //@line 152 "audioop.c"
        $pcm_val_addr=$6; //@line 152 "audioop.c"
        $mask=127; //@line 153 "audioop.c"
        __lastLabel__ = 1; __label__ = 3; break; //@line 153 "audioop.c"
      case 2: // $bb1
        $mask=255; //@line 155 "audioop.c"
        var $_pr=$pcm_val_addr;
        __lastLabel__ = 2; __label__ = 3; break; //@line 155 "audioop.c"
      case 3: // $bb2
        var $7=__lastLabel__ == 2 ? $_pr : ($6);
        var $8=($7) > 32635; //@line 157 "audioop.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 157 "audioop.c"
      case 4: // $bb3
        $pcm_val_addr=32635; //@line 157 "audioop.c"
        __label__ = 5; break; //@line 157 "audioop.c"
      case 5: // $bb4
        var $9=$pcm_val_addr; //@line 158 "audioop.c"
        var $10=($9) + 33; //@line 158 "audioop.c"
        $pcm_val_addr=$10; //@line 158 "audioop.c"
        var $11=$pcm_val_addr; //@line 161 "audioop.c"
        var $12=($11); //@line 161 "audioop.c"
        var $13=((($12)) & 65535); //@line 161 "audioop.c"
        var $14=_search($13, _seg_uend); //@line 161 "audioop.c"
        $seg=$14; //@line 161 "audioop.c"
        var $15=($14) > 7; //@line 167 "audioop.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 167 "audioop.c"
      case 6: // $bb5
        var $16=$mask; //@line 168 "audioop.c"
        var $17=((($16)) & 255); //@line 168 "audioop.c"
        var $18=($17) ^ 127; //@line 168 "audioop.c"
        var $19=($18); //@line 168 "audioop.c"
        $0=$19; //@line 168 "audioop.c"
        __label__ = 8; break; //@line 168 "audioop.c"
      case 7: // $bb6
        var $20=$seg; //@line 170 "audioop.c"
        var $21=((($20)) & 255); //@line 170 "audioop.c"
        var $22=($21) << 4; //@line 170 "audioop.c"
        var $23=$pcm_val_addr; //@line 170 "audioop.c"
        var $24=($23); //@line 170 "audioop.c"
        var $25=$seg; //@line 170 "audioop.c"
        var $26=($25); //@line 170 "audioop.c"
        var $27=($26) + 1; //@line 170 "audioop.c"
        var $28=($24) >> ($27); //@line 170 "audioop.c"
        var $29=((($28)) & 255); //@line 170 "audioop.c"
        var $30=($29) & 15; //@line 170 "audioop.c"
        var $31=($30) | ($22); //@line 170 "audioop.c"
        $uval=$31; //@line 170 "audioop.c"
        var $32=$mask; //@line 171 "audioop.c"
        var $33=((($32)) & 255); //@line 171 "audioop.c"
        var $34=$uval; //@line 171 "audioop.c"
        var $35=($33) ^ ($34); //@line 171 "audioop.c"
        var $36=($35); //@line 171 "audioop.c"
        $0=$36; //@line 171 "audioop.c"
        __label__ = 8; break; //@line 171 "audioop.c"
      case 8: // $bb7
        var $37=$0; //@line 168 "audioop.c"
        $retval=$37; //@line 168 "audioop.c"
        var $retval8=$retval; //@line 168 "audioop.c"
        var $retval89=((($retval8)) & 255); //@line 168 "audioop.c"
        ;
        return $retval89; //@line 168 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _st_linear2alaw($pcm_val) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pcm_val_addr;
        var $retval;
        var $0;
        var $mask;
        var $seg;
        var $aval;
        $pcm_val_addr=$pcm_val;
        var $1=$pcm_val_addr; //@line 244 "audioop.c"
        var $2=($1) >> 3; //@line 244 "audioop.c"
        $pcm_val_addr=$2; //@line 244 "audioop.c"
        var $3=$pcm_val_addr; //@line 247 "audioop.c"
        var $4=($3) >= 0; //@line 247 "audioop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 247 "audioop.c"
      case 1: // $bb
        $mask=213; //@line 248 "audioop.c"
        __label__ = 3; break; //@line 248 "audioop.c"
      case 2: // $bb1
        $mask=85; //@line 250 "audioop.c"
        var $5=$pcm_val_addr; //@line 251 "audioop.c"
        var $not=($5) ^ -1; //@line 251 "audioop.c"
        $pcm_val_addr=$not; //@line 251 "audioop.c"
        __label__ = 3; break; //@line 251 "audioop.c"
      case 3: // $bb2
        var $6=$pcm_val_addr; //@line 255 "audioop.c"
        var $7=($6); //@line 255 "audioop.c"
        var $8=((($7)) & 65535); //@line 255 "audioop.c"
        var $9=_search($8, _seg_aend); //@line 255 "audioop.c"
        $seg=$9; //@line 255 "audioop.c"
        var $10=($9) > 7; //@line 259 "audioop.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 259 "audioop.c"
      case 4: // $bb3
        var $11=$mask; //@line 260 "audioop.c"
        var $12=((($11)) & 255); //@line 260 "audioop.c"
        var $13=($12) ^ 127; //@line 260 "audioop.c"
        var $14=($13); //@line 260 "audioop.c"
        $0=$14; //@line 260 "audioop.c"
        __label__ = 9; break; //@line 260 "audioop.c"
      case 5: // $bb4
        var $15=$seg; //@line 262 "audioop.c"
        var $16=((($15)) & 255); //@line 262 "audioop.c"
        var $17=($16) << 4; //@line 262 "audioop.c"
        $aval=$17; //@line 262 "audioop.c"
        var $18=$seg; //@line 263 "audioop.c"
        var $19=($18) <= 1; //@line 263 "audioop.c"
        var $20=$pcm_val_addr; //@line 264 "audioop.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 263 "audioop.c"
      case 6: // $bb5
        var $21=($20) >> 1; //@line 264 "audioop.c"
        var $22=((($21)) & 255); //@line 264 "audioop.c"
        var $23=($22) & 15; //@line 264 "audioop.c"
        var $24=$aval; //@line 264 "audioop.c"
        var $25=($24) | ($23); //@line 264 "audioop.c"
        $aval=$25; //@line 264 "audioop.c"
        __label__ = 8; break; //@line 264 "audioop.c"
      case 7: // $bb6
        var $26=($20); //@line 266 "audioop.c"
        var $27=$seg; //@line 266 "audioop.c"
        var $28=($27); //@line 266 "audioop.c"
        var $29=($26) >> ($28); //@line 266 "audioop.c"
        var $30=((($29)) & 255); //@line 266 "audioop.c"
        var $31=($30) & 15; //@line 266 "audioop.c"
        var $32=$aval; //@line 266 "audioop.c"
        var $33=($31) | ($32); //@line 266 "audioop.c"
        $aval=$33; //@line 266 "audioop.c"
        __label__ = 8; break; //@line 266 "audioop.c"
      case 8: // $bb7
        var $34=$mask; //@line 267 "audioop.c"
        var $35=((($34)) & 255); //@line 267 "audioop.c"
        var $36=$aval; //@line 267 "audioop.c"
        var $37=($35) ^ ($36); //@line 267 "audioop.c"
        var $38=($37); //@line 267 "audioop.c"
        $0=$38; //@line 267 "audioop.c"
        __label__ = 9; break; //@line 267 "audioop.c"
      case 9: // $bb8
        var $39=$0; //@line 260 "audioop.c"
        $retval=$39; //@line 260 "audioop.c"
        var $retval9=$retval; //@line 260 "audioop.c"
        var $retval910=((($retval9)) & 255); //@line 260 "audioop.c"
        ;
        return $retval910; //@line 260 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_check_size($size) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $size_addr;
        var $retval;
        var $0;
        $size_addr=$size;
        var $1=$size_addr; //@line 301 "audioop.c"
        var $2=($1)==1; //@line 301 "audioop.c"
        var $3=$size_addr; //@line 301 "audioop.c"
        var $4=($3)==2; //@line 301 "audioop.c"
        var $or_cond=($2) | ($4);
        var $5=$size_addr; //@line 301 "audioop.c"
        var $6=($5)==4; //@line 301 "audioop.c"
        var $or_cond3=($or_cond) | ($6);
        if ($or_cond3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 301 "audioop.c"
      case 1: // $bb2
        var $7=HEAP[_AudioopError]; //@line 302 "audioop.c"
        _PyErr_SetString($7, __str); //@line 302 "audioop.c"
        $0=0; //@line 303 "audioop.c"
        __label__ = 3; break; //@line 303 "audioop.c"
      case 2: // $bb3
        $0=1; //@line 306 "audioop.c"
        __label__ = 3; break; //@line 306 "audioop.c"
      case 3: // $bb4
        var $8=$0; //@line 303 "audioop.c"
        $retval=$8; //@line 303 "audioop.c"
        var $retval5=$retval; //@line 303 "audioop.c"
        ;
        return $retval5; //@line 303 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_check_parameters($len, $size) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $len_addr;
        var $size_addr;
        var $retval;
        var $0;
        $len_addr=$len;
        $size_addr=$size;
        var $1=$size_addr; //@line 312 "audioop.c"
        var $2=_audioop_check_size($1); //@line 312 "audioop.c"
        var $3=($2)==0; //@line 312 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 312 "audioop.c"
      case 1: // $bb
        $0=0; //@line 313 "audioop.c"
        __label__ = 5; break; //@line 313 "audioop.c"
      case 2: // $bb1
        var $4=$len_addr; //@line 314 "audioop.c"
        var $5=$size_addr; //@line 314 "audioop.c"
        var $6=($4) % ($5); //@line 314 "audioop.c"
        var $7=($6)!=0; //@line 314 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 314 "audioop.c"
      case 3: // $bb2
        var $8=HEAP[_AudioopError]; //@line 315 "audioop.c"
        _PyErr_SetString($8, __str1); //@line 315 "audioop.c"
        $0=0; //@line 316 "audioop.c"
        __label__ = 5; break; //@line 316 "audioop.c"
      case 4: // $bb3
        $0=1; //@line 318 "audioop.c"
        __label__ = 5; break; //@line 318 "audioop.c"
      case 5: // $bb4
        var $9=$0; //@line 313 "audioop.c"
        $retval=$9; //@line 313 "audioop.c"
        var $retval5=$retval; //@line 313 "audioop.c"
        ;
        return $retval5; //@line 313 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_getsample($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 325 "audioop.c"
        var $1=$args_addr; //@line 328 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str2, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$i,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 328 "audioop.c"
        var $3=($2)==0; //@line 328 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 328 "audioop.c"
      case 1: // $bb
        $0=0; //@line 329 "audioop.c"
        __label__ = 14; break; //@line 329 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 330 "audioop.c"
        var $5=HEAP[$len]; //@line 330 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 330 "audioop.c"
        var $7=($6)==0; //@line 330 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 330 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 331 "audioop.c"
        __label__ = 14; break; //@line 331 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$i]; //@line 332 "audioop.c"
        var $9=($8) < 0; //@line 332 "audioop.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 332 "audioop.c"
      case 5: // $bb4
        var $10=HEAP[$len]; //@line 332 "audioop.c"
        var $11=HEAP[$size]; //@line 332 "audioop.c"
        var $12=((($10)/($11))|0); //@line 332 "audioop.c"
        var $13=HEAP[$i]; //@line 332 "audioop.c"
        var $14=($12) <= ($13); //@line 332 "audioop.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 332 "audioop.c"
      case 6: // $bb5
        var $15=HEAP[_AudioopError]; //@line 333 "audioop.c"
        _PyErr_SetString($15, __str3); //@line 333 "audioop.c"
        $0=0; //@line 334 "audioop.c"
        __label__ = 14; break; //@line 334 "audioop.c"
      case 7: // $bb6
        var $16=HEAP[$size]; //@line 336 "audioop.c"
        var $17=($16)==1; //@line 336 "audioop.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 336 "audioop.c"
      case 8: // $bb7
        var $18=HEAP[$cp]; //@line 336 "audioop.c"
        var $19=HEAP[$i]; //@line 336 "audioop.c"
        var $20=$18+$19; //@line 336 "audioop.c"
        var $21=HEAP[$20]; //@line 336 "audioop.c"
        var $22=($21); //@line 336 "audioop.c"
        $val=$22; //@line 336 "audioop.c"
        __label__ = 13; break; //@line 336 "audioop.c"
      case 9: // $bb8
        var $23=HEAP[$size]; //@line 337 "audioop.c"
        var $24=($23)==2; //@line 337 "audioop.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 337 "audioop.c"
      case 10: // $bb9
        var $25=HEAP[$cp]; //@line 337 "audioop.c"
        var $26=HEAP[$i]; //@line 337 "audioop.c"
        var $27=($26) * 2; //@line 337 "audioop.c"
        var $28=$25+$27; //@line 337 "audioop.c"
        var $29=$28; //@line 337 "audioop.c"
        var $30=HEAP[$29]; //@line 337 "audioop.c"
        var $31=($30); //@line 337 "audioop.c"
        $val=$31; //@line 337 "audioop.c"
        __label__ = 13; break; //@line 337 "audioop.c"
      case 11: // $bb10
        var $32=HEAP[$size]; //@line 338 "audioop.c"
        var $33=($32)==4; //@line 338 "audioop.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 338 "audioop.c"
      case 12: // $bb11
        var $34=HEAP[$cp]; //@line 338 "audioop.c"
        var $35=HEAP[$i]; //@line 338 "audioop.c"
        var $36=($35) * 4; //@line 338 "audioop.c"
        var $37=$34+$36; //@line 338 "audioop.c"
        var $38=$37; //@line 338 "audioop.c"
        var $39=HEAP[$38]; //@line 338 "audioop.c"
        $val=$39; //@line 338 "audioop.c"
        __label__ = 13; break; //@line 338 "audioop.c"
      case 13: // $bb12
        var $40=$val; //@line 339 "audioop.c"
        var $41=_PyInt_FromLong($40); //@line 339 "audioop.c"
        $0=$41; //@line 339 "audioop.c"
        __label__ = 14; break; //@line 339 "audioop.c"
      case 14: // $bb13
        var $42=$0; //@line 329 "audioop.c"
        $retval=$42; //@line 329 "audioop.c"
        var $retval14=$retval; //@line 329 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 329 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_max($self, $args) {
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
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i;
        var $max;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 346 "audioop.c"
        $max=0; //@line 348 "audioop.c"
        var $1=$args_addr; //@line 350 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str4, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 350 "audioop.c"
        var $3=($2)==0; //@line 350 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 350 "audioop.c"
      case 1: // $bb
        $0=0; //@line 351 "audioop.c"
        __label__ = 18; break; //@line 351 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 352 "audioop.c"
        var $5=HEAP[$len]; //@line 352 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 352 "audioop.c"
        var $7=($6)==0; //@line 352 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 352 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 353 "audioop.c"
        __label__ = 18; break; //@line 353 "audioop.c"
      case 4: // $bb3
        $i=0; //@line 354 "audioop.c"
        var $8=HEAP[$len]; //@line 354 "audioop.c"
        var $9=$i; //@line 354 "audioop.c"
        var $10=($9) < ($8); //@line 354 "audioop.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 17; break; } //@line 354 "audioop.c"
      case 5: // $bb4
        var $11=HEAP[$size]; //@line 355 "audioop.c"
        var $12=($11)==1; //@line 355 "audioop.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 355 "audioop.c"
      case 6: // $bb5
        var $13=HEAP[$cp]; //@line 355 "audioop.c"
        var $14=$i; //@line 355 "audioop.c"
        var $15=$13+$14; //@line 355 "audioop.c"
        var $16=HEAP[$15]; //@line 355 "audioop.c"
        var $17=($16); //@line 355 "audioop.c"
        $val=$17; //@line 355 "audioop.c"
        __lastLabel__ = 6; __label__ = 12; break; //@line 355 "audioop.c"
      case 7: // $bb6
        var $18=HEAP[$size]; //@line 356 "audioop.c"
        var $19=($18)==2; //@line 356 "audioop.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 356 "audioop.c"
      case 8: // $bb7
        var $20=HEAP[$cp]; //@line 356 "audioop.c"
        var $21=$i; //@line 356 "audioop.c"
        var $22=$20+$21; //@line 356 "audioop.c"
        var $23=$22; //@line 356 "audioop.c"
        var $24=HEAP[$23]; //@line 356 "audioop.c"
        var $25=($24); //@line 356 "audioop.c"
        $val=$25; //@line 356 "audioop.c"
        __lastLabel__ = 8; __label__ = 12; break; //@line 356 "audioop.c"
      case 9: // $bb8
        var $26=HEAP[$size]; //@line 357 "audioop.c"
        var $27=($26)==4; //@line 357 "audioop.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 357 "audioop.c"
      case 10: // $bb9
        var $28=HEAP[$cp]; //@line 357 "audioop.c"
        var $29=$i; //@line 357 "audioop.c"
        var $30=$28+$29; //@line 357 "audioop.c"
        var $31=$30; //@line 357 "audioop.c"
        var $32=HEAP[$31]; //@line 357 "audioop.c"
        $val=$32; //@line 357 "audioop.c"
        __lastLabel__ = 10; __label__ = 12; break; //@line 357 "audioop.c"
      case 11: // $bb10thread_pre_split
        var $_pr=$val;
        __lastLabel__ = 11; __label__ = 12; break;
      case 12: // $bb10
        var $33=__lastLabel__ == 11 ? $_pr : (__lastLabel__ == 10 ? $32 : (__lastLabel__ == 8 ? $25 : ($17)));
        var $34=($33) < 0; //@line 358 "audioop.c"
        if ($34) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 358 "audioop.c"
      case 13: // $bb11
        var $35=$val; //@line 358 "audioop.c"
        var $36=0 - ($35); //@line 358 "audioop.c"
        $val=$36; //@line 358 "audioop.c"
        __label__ = 14; break; //@line 358 "audioop.c"
      case 14: // $bb12
        var $37=$val; //@line 359 "audioop.c"
        var $38=$max; //@line 359 "audioop.c"
        var $39=($37) > ($38); //@line 359 "audioop.c"
        if ($39) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 359 "audioop.c"
      case 15: // $bb13
        var $40=$val; //@line 359 "audioop.c"
        $max=$40; //@line 359 "audioop.c"
        __label__ = 16; break; //@line 359 "audioop.c"
      case 16: // $bb14
        var $41=HEAP[$size]; //@line 354 "audioop.c"
        var $42=$i; //@line 354 "audioop.c"
        var $43=($42) + ($41); //@line 354 "audioop.c"
        $i=$43; //@line 354 "audioop.c"
        var $44=HEAP[$len]; //@line 354 "audioop.c"
        var $45=$i; //@line 354 "audioop.c"
        var $46=($45) < ($44); //@line 354 "audioop.c"
        if ($46) { __label__ = 5; break; } else { __label__ = 17; break; } //@line 354 "audioop.c"
      case 17: // $bb16
        var $47=$max; //@line 361 "audioop.c"
        var $48=_PyInt_FromLong($47); //@line 361 "audioop.c"
        $0=$48; //@line 361 "audioop.c"
        __label__ = 18; break; //@line 361 "audioop.c"
      case 18: // $bb17
        var $49=$0; //@line 351 "audioop.c"
        $retval=$49; //@line 351 "audioop.c"
        var $retval18=$retval; //@line 351 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 351 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_minmax($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i;
        var $min;
        var $max;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 368 "audioop.c"
        $min=2147483647; //@line 370 "audioop.c"
        $max=-2147483647; //@line 370 "audioop.c"
        var $1=$args_addr; //@line 372 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str5, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 372 "audioop.c"
        var $3=($2)==0; //@line 372 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 372 "audioop.c"
      case 1: // $bb
        $0=0; //@line 373 "audioop.c"
        __label__ = 17; break; //@line 373 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 374 "audioop.c"
        var $5=HEAP[$len]; //@line 374 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 374 "audioop.c"
        var $7=($6)==0; //@line 374 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 374 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 375 "audioop.c"
        __label__ = 17; break; //@line 375 "audioop.c"
      case 4: // $bb3
        $i=0; //@line 376 "audioop.c"
        var $8=HEAP[$len]; //@line 376 "audioop.c"
        var $9=$i; //@line 376 "audioop.c"
        var $10=($9) < ($8); //@line 376 "audioop.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 16; break; } //@line 376 "audioop.c"
      case 5: // $bb4
        var $11=HEAP[$size]; //@line 377 "audioop.c"
        var $12=($11)==1; //@line 377 "audioop.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 377 "audioop.c"
      case 6: // $bb5
        var $13=HEAP[$cp]; //@line 377 "audioop.c"
        var $14=$i; //@line 377 "audioop.c"
        var $15=$13+$14; //@line 377 "audioop.c"
        var $16=HEAP[$15]; //@line 377 "audioop.c"
        var $17=($16); //@line 377 "audioop.c"
        $val=$17; //@line 377 "audioop.c"
        __label__ = 11; break; //@line 377 "audioop.c"
      case 7: // $bb6
        var $18=HEAP[$size]; //@line 378 "audioop.c"
        var $19=($18)==2; //@line 378 "audioop.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 378 "audioop.c"
      case 8: // $bb7
        var $20=HEAP[$cp]; //@line 378 "audioop.c"
        var $21=$i; //@line 378 "audioop.c"
        var $22=$20+$21; //@line 378 "audioop.c"
        var $23=$22; //@line 378 "audioop.c"
        var $24=HEAP[$23]; //@line 378 "audioop.c"
        var $25=($24); //@line 378 "audioop.c"
        $val=$25; //@line 378 "audioop.c"
        __label__ = 11; break; //@line 378 "audioop.c"
      case 9: // $bb8
        var $26=HEAP[$size]; //@line 379 "audioop.c"
        var $27=($26)==4; //@line 379 "audioop.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 379 "audioop.c"
      case 10: // $bb9
        var $28=HEAP[$cp]; //@line 379 "audioop.c"
        var $29=$i; //@line 379 "audioop.c"
        var $30=$28+$29; //@line 379 "audioop.c"
        var $31=$30; //@line 379 "audioop.c"
        var $32=HEAP[$31]; //@line 379 "audioop.c"
        $val=$32; //@line 379 "audioop.c"
        __label__ = 11; break; //@line 379 "audioop.c"
      case 11: // $bb10
        var $33=$val; //@line 380 "audioop.c"
        var $34=$max; //@line 380 "audioop.c"
        var $35=($33) > ($34); //@line 380 "audioop.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 380 "audioop.c"
      case 12: // $bb11
        var $36=$val; //@line 380 "audioop.c"
        $max=$36; //@line 380 "audioop.c"
        __label__ = 13; break; //@line 380 "audioop.c"
      case 13: // $bb12
        var $37=$val; //@line 381 "audioop.c"
        var $38=$min; //@line 381 "audioop.c"
        var $39=($37) < ($38); //@line 381 "audioop.c"
        if ($39) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 381 "audioop.c"
      case 14: // $bb13
        var $40=$val; //@line 381 "audioop.c"
        $min=$40; //@line 381 "audioop.c"
        __label__ = 15; break; //@line 381 "audioop.c"
      case 15: // $bb14
        var $41=HEAP[$size]; //@line 376 "audioop.c"
        var $42=$i; //@line 376 "audioop.c"
        var $43=($42) + ($41); //@line 376 "audioop.c"
        $i=$43; //@line 376 "audioop.c"
        var $44=HEAP[$len]; //@line 376 "audioop.c"
        var $45=$i; //@line 376 "audioop.c"
        var $46=($45) < ($44); //@line 376 "audioop.c"
        if ($46) { __label__ = 5; break; } else { __label__ = 16; break; } //@line 376 "audioop.c"
      case 16: // $bb16
        var $47=$min; //@line 383 "audioop.c"
        var $48=$max; //@line 383 "audioop.c"
        var $49=_Py_BuildValue(__str6, allocate([$47,0,0,0,$48,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 383 "audioop.c"
        $0=$49; //@line 383 "audioop.c"
        __label__ = 17; break; //@line 383 "audioop.c"
      case 17: // $bb17
        var $50=$0; //@line 373 "audioop.c"
        $retval=$50; //@line 373 "audioop.c"
        var $retval18=$retval; //@line 373 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 373 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_avg($self, $args) {
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
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i;
        var $avg;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 390 "audioop.c"
        $avg=0; //@line 392 "audioop.c"
        var $1=$args_addr; //@line 394 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str7, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 394 "audioop.c"
        var $3=($2)==0; //@line 394 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 394 "audioop.c"
      case 1: // $bb
        $0=0; //@line 395 "audioop.c"
        __label__ = 16; break; //@line 395 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 396 "audioop.c"
        var $5=HEAP[$len]; //@line 396 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 396 "audioop.c"
        var $7=($6)==0; //@line 396 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 396 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 397 "audioop.c"
        __label__ = 16; break; //@line 397 "audioop.c"
      case 4: // $bb3
        $i=0; //@line 398 "audioop.c"
        var $8=HEAP[$len]; //@line 398 "audioop.c"
        var $9=$i; //@line 398 "audioop.c"
        var $10=($9) < ($8); //@line 398 "audioop.c"
        if ($10) { __lastLabel__ = 4; __label__ = 5; break; } else { __lastLabel__ = 4; __label__ = 12; break; } //@line 398 "audioop.c"
      case 5: // $bb4
        var $11=HEAP[$size]; //@line 399 "audioop.c"
        var $12=($11)==1; //@line 399 "audioop.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 399 "audioop.c"
      case 6: // $bb5
        var $13=HEAP[$cp]; //@line 399 "audioop.c"
        var $14=$i; //@line 399 "audioop.c"
        var $15=$13+$14; //@line 399 "audioop.c"
        var $16=HEAP[$15]; //@line 399 "audioop.c"
        var $17=($16); //@line 399 "audioop.c"
        $val=$17; //@line 399 "audioop.c"
        __label__ = 11; break; //@line 399 "audioop.c"
      case 7: // $bb6
        var $18=HEAP[$size]; //@line 400 "audioop.c"
        var $19=($18)==2; //@line 400 "audioop.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 400 "audioop.c"
      case 8: // $bb7
        var $20=HEAP[$cp]; //@line 400 "audioop.c"
        var $21=$i; //@line 400 "audioop.c"
        var $22=$20+$21; //@line 400 "audioop.c"
        var $23=$22; //@line 400 "audioop.c"
        var $24=HEAP[$23]; //@line 400 "audioop.c"
        var $25=($24); //@line 400 "audioop.c"
        $val=$25; //@line 400 "audioop.c"
        __label__ = 11; break; //@line 400 "audioop.c"
      case 9: // $bb8
        var $26=HEAP[$size]; //@line 401 "audioop.c"
        var $27=($26)==4; //@line 401 "audioop.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 401 "audioop.c"
      case 10: // $bb9
        var $28=HEAP[$cp]; //@line 401 "audioop.c"
        var $29=$i; //@line 401 "audioop.c"
        var $30=$28+$29; //@line 401 "audioop.c"
        var $31=$30; //@line 401 "audioop.c"
        var $32=HEAP[$31]; //@line 401 "audioop.c"
        $val=$32; //@line 401 "audioop.c"
        __label__ = 11; break; //@line 401 "audioop.c"
      case 11: // $bb10
        var $33=$val; //@line 402 "audioop.c"
        var $34=($33); //@line 402 "audioop.c"
        var $35=$avg; //@line 402 "audioop.c"
        var $36=($34) + ($35); //@line 402 "audioop.c"
        $avg=$36; //@line 402 "audioop.c"
        var $37=HEAP[$size]; //@line 398 "audioop.c"
        var $38=$i; //@line 398 "audioop.c"
        var $39=($38) + ($37); //@line 398 "audioop.c"
        $i=$39; //@line 398 "audioop.c"
        var $40=HEAP[$len]; //@line 398 "audioop.c"
        var $41=$i; //@line 398 "audioop.c"
        var $42=($41) < ($40); //@line 398 "audioop.c"
        if ($42) { __lastLabel__ = 11; __label__ = 5; break; } else { __lastLabel__ = 11; __label__ = 12; break; } //@line 398 "audioop.c"
      case 12: // $bb12
        var $43=__lastLabel__ == 11 ? $40 : ($8);
        var $44=($43)==0; //@line 404 "audioop.c"
        if ($44) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 404 "audioop.c"
      case 13: // $bb13
        $val=0; //@line 405 "audioop.c"
        __label__ = 15; break; //@line 405 "audioop.c"
      case 14: // $bb14
        var $45=HEAP[$len]; //@line 407 "audioop.c"
        var $46=HEAP[$size]; //@line 407 "audioop.c"
        var $47=((($45)/($46))|0); //@line 407 "audioop.c"
        var $48=($47); //@line 407 "audioop.c"
        var $49=$avg; //@line 407 "audioop.c"
        var $50=($49) / ($48); //@line 407 "audioop.c"
        var $51=((($50))|0); //@line 407 "audioop.c"
        $val=$51; //@line 407 "audioop.c"
        __label__ = 15; break; //@line 407 "audioop.c"
      case 15: // $bb15
        var $52=$val; //@line 408 "audioop.c"
        var $53=_PyInt_FromLong($52); //@line 408 "audioop.c"
        $0=$53; //@line 408 "audioop.c"
        __label__ = 16; break; //@line 408 "audioop.c"
      case 16: // $bb16
        var $54=$0; //@line 395 "audioop.c"
        $retval=$54; //@line 395 "audioop.c"
        var $retval17=$retval; //@line 395 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 395 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_rms($self, $args) {
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
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i;
        var $sum_squares;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 415 "audioop.c"
        $sum_squares=0; //@line 417 "audioop.c"
        var $1=$args_addr; //@line 419 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str8, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 419 "audioop.c"
        var $3=($2)==0; //@line 419 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 419 "audioop.c"
      case 1: // $bb
        $0=0; //@line 420 "audioop.c"
        __label__ = 16; break; //@line 420 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 421 "audioop.c"
        var $5=HEAP[$len]; //@line 421 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 421 "audioop.c"
        var $7=($6)==0; //@line 421 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 421 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 422 "audioop.c"
        __label__ = 16; break; //@line 422 "audioop.c"
      case 4: // $bb3
        $i=0; //@line 423 "audioop.c"
        var $8=HEAP[$len]; //@line 423 "audioop.c"
        var $9=$i; //@line 423 "audioop.c"
        var $10=($9) < ($8); //@line 423 "audioop.c"
        if ($10) { __lastLabel__ = 4; __label__ = 5; break; } else { __lastLabel__ = 4; __label__ = 12; break; } //@line 423 "audioop.c"
      case 5: // $bb4
        var $11=HEAP[$size]; //@line 424 "audioop.c"
        var $12=($11)==1; //@line 424 "audioop.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 424 "audioop.c"
      case 6: // $bb5
        var $13=HEAP[$cp]; //@line 424 "audioop.c"
        var $14=$i; //@line 424 "audioop.c"
        var $15=$13+$14; //@line 424 "audioop.c"
        var $16=HEAP[$15]; //@line 424 "audioop.c"
        var $17=($16); //@line 424 "audioop.c"
        $val=$17; //@line 424 "audioop.c"
        __label__ = 11; break; //@line 424 "audioop.c"
      case 7: // $bb6
        var $18=HEAP[$size]; //@line 425 "audioop.c"
        var $19=($18)==2; //@line 425 "audioop.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 425 "audioop.c"
      case 8: // $bb7
        var $20=HEAP[$cp]; //@line 425 "audioop.c"
        var $21=$i; //@line 425 "audioop.c"
        var $22=$20+$21; //@line 425 "audioop.c"
        var $23=$22; //@line 425 "audioop.c"
        var $24=HEAP[$23]; //@line 425 "audioop.c"
        var $25=($24); //@line 425 "audioop.c"
        $val=$25; //@line 425 "audioop.c"
        __label__ = 11; break; //@line 425 "audioop.c"
      case 9: // $bb8
        var $26=HEAP[$size]; //@line 426 "audioop.c"
        var $27=($26)==4; //@line 426 "audioop.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 426 "audioop.c"
      case 10: // $bb9
        var $28=HEAP[$cp]; //@line 426 "audioop.c"
        var $29=$i; //@line 426 "audioop.c"
        var $30=$28+$29; //@line 426 "audioop.c"
        var $31=$30; //@line 426 "audioop.c"
        var $32=HEAP[$31]; //@line 426 "audioop.c"
        $val=$32; //@line 426 "audioop.c"
        __label__ = 11; break; //@line 426 "audioop.c"
      case 11: // $bb10
        var $33=$val; //@line 427 "audioop.c"
        var $34=($33); //@line 427 "audioop.c"
        var $35=$val; //@line 427 "audioop.c"
        var $36=($35); //@line 427 "audioop.c"
        var $37=($34) * ($36); //@line 427 "audioop.c"
        var $38=$sum_squares; //@line 427 "audioop.c"
        var $39=($37) + ($38); //@line 427 "audioop.c"
        $sum_squares=$39; //@line 427 "audioop.c"
        var $40=HEAP[$size]; //@line 423 "audioop.c"
        var $41=$i; //@line 423 "audioop.c"
        var $42=($41) + ($40); //@line 423 "audioop.c"
        $i=$42; //@line 423 "audioop.c"
        var $43=HEAP[$len]; //@line 423 "audioop.c"
        var $44=$i; //@line 423 "audioop.c"
        var $45=($44) < ($43); //@line 423 "audioop.c"
        if ($45) { __lastLabel__ = 11; __label__ = 5; break; } else { __lastLabel__ = 11; __label__ = 12; break; } //@line 423 "audioop.c"
      case 12: // $bb12
        var $46=__lastLabel__ == 11 ? $43 : ($8);
        var $47=($46)==0; //@line 429 "audioop.c"
        if ($47) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 429 "audioop.c"
      case 13: // $bb13
        $val=0; //@line 430 "audioop.c"
        __label__ = 15; break; //@line 430 "audioop.c"
      case 14: // $bb14
        var $48=HEAP[$len]; //@line 432 "audioop.c"
        var $49=HEAP[$size]; //@line 432 "audioop.c"
        var $50=((($48)/($49))|0); //@line 432 "audioop.c"
        var $51=($50); //@line 432 "audioop.c"
        var $52=$sum_squares; //@line 432 "audioop.c"
        var $53=($52) / ($51); //@line 432 "audioop.c"
        var $54=_sqrt($53); //@line 432 "audioop.c"
        var $55=((($54))|0); //@line 432 "audioop.c"
        $val=$55; //@line 432 "audioop.c"
        __label__ = 15; break; //@line 432 "audioop.c"
      case 15: // $bb15
        var $56=$val; //@line 433 "audioop.c"
        var $57=_PyInt_FromLong($56); //@line 433 "audioop.c"
        $0=$57; //@line 433 "audioop.c"
        __label__ = 16; break; //@line 433 "audioop.c"
      case 16: // $bb16
        var $58=$0; //@line 420 "audioop.c"
        $retval=$58; //@line 420 "audioop.c"
        var $retval17=$retval; //@line 420 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 420 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __sum2($a, $b, $len) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr;
        var $b_addr;
        var $len_addr;
        var $retval;
        var $0;
        var $i;
        var $sum;
        $a_addr=$a;
        $b_addr=$b;
        $len_addr=$len;
        $sum=0; //@line 439 "audioop.c"
        $i=0; //@line 441 "audioop.c"
        var $1=$i; //@line 441 "audioop.c"
        var $2=$len_addr; //@line 441 "audioop.c"
        var $3=($1) < ($2); //@line 441 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 441 "audioop.c"
      case 1: // $bb
        var $4=$a_addr; //@line 442 "audioop.c"
        var $5=$i; //@line 442 "audioop.c"
        var $6=$4+2*$5; //@line 442 "audioop.c"
        var $7=HEAP[$6]; //@line 442 "audioop.c"
        var $8=($7); //@line 442 "audioop.c"
        var $9=$b_addr; //@line 442 "audioop.c"
        var $10=$i; //@line 442 "audioop.c"
        var $11=$9+2*$10; //@line 442 "audioop.c"
        var $12=HEAP[$11]; //@line 442 "audioop.c"
        var $13=($12); //@line 442 "audioop.c"
        var $14=($8) * ($13); //@line 442 "audioop.c"
        var $15=$sum; //@line 442 "audioop.c"
        var $16=($14) + ($15); //@line 442 "audioop.c"
        $sum=$16; //@line 442 "audioop.c"
        var $17=$i; //@line 441 "audioop.c"
        var $18=($17) + 1; //@line 441 "audioop.c"
        $i=$18; //@line 441 "audioop.c"
        var $19=$i; //@line 441 "audioop.c"
        var $20=$len_addr; //@line 441 "audioop.c"
        var $21=($19) < ($20); //@line 441 "audioop.c"
        if ($21) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 441 "audioop.c"
      case 2: // $bb2
        var $22=$sum; //@line 444 "audioop.c"
        $0=$22; //@line 444 "audioop.c"
        var $23=$0; //@line 444 "audioop.c"
        $retval=$23; //@line 444 "audioop.c"
        var $retval3=$retval; //@line 444 "audioop.c"
        ;
        return $retval3; //@line 444 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_findfit($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp1=__stackBase__;
        var $cp2=__stackBase__+4;
        var $len1=__stackBase__+8;
        var $len2=__stackBase__+12;
        var $j;
        var $best_j;
        var $aj_m1;
        var $aj_lm1;
        var $sum_ri_2;
        var $sum_aij_2;
        var $sum_aij_ri;
        var $result;
        var $best_result;
        var $factor;
        $self_addr=$self;
        $args_addr=$args;
        var $cp21=$cp2; //@line 492 "audioop.c"
        var $cp13=$cp1; //@line 492 "audioop.c"
        var $1=$args_addr; //@line 492 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str9, allocate([$cp13,0,0,0,$len1,0,0,0,$cp21,0,0,0,$len2,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 492 "audioop.c"
        var $3=($2)==0; //@line 492 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 492 "audioop.c"
      case 1: // $bb
        $0=0; //@line 494 "audioop.c"
        __label__ = 12; break; //@line 494 "audioop.c"
      case 2: // $bb5
        var $4=HEAP[$len1]; //@line 495 "audioop.c"
        var $5=($4) & 1; //@line 495 "audioop.c"
        var $6=((($5)) & 255); //@line 495 "audioop.c"
        var $toBool=($6)!=0; //@line 495 "audioop.c"
        if ($toBool) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 495 "audioop.c"
      case 3: // $bb6
        var $7=HEAP[$len2]; //@line 495 "audioop.c"
        var $8=($7) & 1; //@line 495 "audioop.c"
        var $9=((($8)) & 255); //@line 495 "audioop.c"
        var $toBool7=($9)!=0; //@line 495 "audioop.c"
        if ($toBool7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 495 "audioop.c"
      case 4: // $bb8
        var $10=HEAP[_AudioopError]; //@line 496 "audioop.c"
        _PyErr_SetString($10, __str10); //@line 496 "audioop.c"
        $0=0; //@line 497 "audioop.c"
        __label__ = 12; break; //@line 497 "audioop.c"
      case 5: // $bb9
        var $11=HEAP[$len1]; //@line 499 "audioop.c"
        var $12=($11) >> 1; //@line 499 "audioop.c"
        HEAP[$len1]=$12; //@line 499 "audioop.c"
        var $13=HEAP[$len2]; //@line 500 "audioop.c"
        var $14=($13) >> 1; //@line 500 "audioop.c"
        HEAP[$len2]=$14; //@line 500 "audioop.c"
        var $15=HEAP[$len1]; //@line 502 "audioop.c"
        var $16=HEAP[$len2]; //@line 502 "audioop.c"
        var $17=($15) < ($16); //@line 502 "audioop.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 502 "audioop.c"
      case 6: // $bb10
        var $18=HEAP[_AudioopError]; //@line 503 "audioop.c"
        _PyErr_SetString($18, __str11); //@line 503 "audioop.c"
        $0=0; //@line 504 "audioop.c"
        __label__ = 12; break; //@line 504 "audioop.c"
      case 7: // $bb11
        var $19=HEAP[$len2]; //@line 506 "audioop.c"
        var $20=HEAP[$cp2]; //@line 506 "audioop.c"
        var $21=HEAP[$cp2]; //@line 506 "audioop.c"
        var $22=__sum2($21, $20, $19); //@line 506 "audioop.c"
        $sum_ri_2=$22; //@line 506 "audioop.c"
        var $23=HEAP[$len2]; //@line 507 "audioop.c"
        var $24=HEAP[$cp1]; //@line 507 "audioop.c"
        var $25=HEAP[$cp1]; //@line 507 "audioop.c"
        var $26=__sum2($25, $24, $23); //@line 507 "audioop.c"
        $sum_aij_2=$26; //@line 507 "audioop.c"
        var $27=HEAP[$len2]; //@line 508 "audioop.c"
        var $28=HEAP[$cp2]; //@line 508 "audioop.c"
        var $29=HEAP[$cp1]; //@line 508 "audioop.c"
        var $30=__sum2($29, $28, $27); //@line 508 "audioop.c"
        $sum_aij_ri=$30; //@line 508 "audioop.c"
        var $31=$sum_ri_2; //@line 510 "audioop.c"
        var $32=$sum_aij_2; //@line 510 "audioop.c"
        var $33=($31) * ($32); //@line 510 "audioop.c"
        var $34=$sum_aij_ri; //@line 510 "audioop.c"
        var $35=$sum_aij_ri; //@line 510 "audioop.c"
        var $36=($34) * ($35); //@line 510 "audioop.c"
        var $37=($33) - ($36); //@line 510 "audioop.c"
        var $38=$sum_aij_2; //@line 510 "audioop.c"
        var $39=($37) / ($38); //@line 510 "audioop.c"
        $result=$39; //@line 510 "audioop.c"
        var $40=$result; //@line 512 "audioop.c"
        $best_result=$40; //@line 512 "audioop.c"
        $best_j=0; //@line 513 "audioop.c"
        $j=1; //@line 515 "audioop.c"
        var $41=HEAP[$len1]; //@line 515 "audioop.c"
        var $42=HEAP[$len2]; //@line 515 "audioop.c"
        var $43=($41) - ($42); //@line 515 "audioop.c"
        var $44=$j; //@line 515 "audioop.c"
        var $45=($43) >= ($44); //@line 515 "audioop.c"
        if ($45) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 515 "audioop.c"
      case 8: // $bb12
        var $46=HEAP[$cp1]; //@line 516 "audioop.c"
        var $47=$j; //@line 516 "audioop.c"
        var $48=($47) - 1; //@line 516 "audioop.c"
        var $49=$46+2*$48; //@line 516 "audioop.c"
        var $50=HEAP[$49]; //@line 516 "audioop.c"
        var $51=($50); //@line 516 "audioop.c"
        $aj_m1=$51; //@line 516 "audioop.c"
        var $52=HEAP[$cp1]; //@line 517 "audioop.c"
        var $53=HEAP[$len2]; //@line 517 "audioop.c"
        var $54=$j; //@line 517 "audioop.c"
        var $55=($53) + -1; //@line 517 "audioop.c"
        var $56=($55) + ($54);
        var $57=$52+2*$56; //@line 517 "audioop.c"
        var $58=HEAP[$57]; //@line 517 "audioop.c"
        var $59=($58); //@line 517 "audioop.c"
        $aj_lm1=$59; //@line 517 "audioop.c"
        var $60=$aj_lm1; //@line 519 "audioop.c"
        var $61=$aj_lm1; //@line 519 "audioop.c"
        var $62=($60) * ($61); //@line 519 "audioop.c"
        var $63=$sum_aij_2; //@line 519 "audioop.c"
        var $64=($62) + ($63); //@line 519 "audioop.c"
        var $65=$aj_m1; //@line 519 "audioop.c"
        var $66=$aj_m1; //@line 519 "audioop.c"
        var $67=($65) * ($66); //@line 519 "audioop.c"
        var $68=($64) - ($67); //@line 519 "audioop.c"
        $sum_aij_2=$68; //@line 519 "audioop.c"
        var $69=HEAP[$len2]; //@line 520 "audioop.c"
        var $70=HEAP[$cp2]; //@line 520 "audioop.c"
        var $71=HEAP[$cp1]; //@line 520 "audioop.c"
        var $72=$j; //@line 520 "audioop.c"
        var $73=$71+2*$72; //@line 520 "audioop.c"
        var $74=__sum2($73, $70, $69); //@line 520 "audioop.c"
        $sum_aij_ri=$74; //@line 520 "audioop.c"
        var $75=$sum_ri_2; //@line 522 "audioop.c"
        var $76=$sum_aij_2; //@line 522 "audioop.c"
        var $77=($75) * ($76); //@line 522 "audioop.c"
        var $78=$sum_aij_ri; //@line 522 "audioop.c"
        var $79=$sum_aij_ri; //@line 522 "audioop.c"
        var $80=($78) * ($79); //@line 522 "audioop.c"
        var $81=($77) - ($80); //@line 522 "audioop.c"
        var $82=$sum_aij_2; //@line 522 "audioop.c"
        var $83=($81) / ($82); //@line 522 "audioop.c"
        $result=$83; //@line 522 "audioop.c"
        var $84=$result; //@line 525 "audioop.c"
        var $85=$best_result; //@line 525 "audioop.c"
        var $86=($84) < ($85); //@line 525 "audioop.c"
        if ($86) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 525 "audioop.c"
      case 9: // $bb13
        var $87=$result; //@line 526 "audioop.c"
        $best_result=$87; //@line 526 "audioop.c"
        var $88=$j; //@line 527 "audioop.c"
        $best_j=$88; //@line 527 "audioop.c"
        __label__ = 10; break; //@line 527 "audioop.c"
      case 10: // $bb14
        var $89=$j; //@line 515 "audioop.c"
        var $90=($89) + 1; //@line 515 "audioop.c"
        $j=$90; //@line 515 "audioop.c"
        var $91=HEAP[$len1]; //@line 515 "audioop.c"
        var $92=HEAP[$len2]; //@line 515 "audioop.c"
        var $93=($91) - ($92); //@line 515 "audioop.c"
        var $94=$j; //@line 515 "audioop.c"
        var $95=($93) >= ($94); //@line 515 "audioop.c"
        if ($95) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 515 "audioop.c"
      case 11: // $bb16
        var $96=HEAP[$len2]; //@line 532 "audioop.c"
        var $97=HEAP[$cp2]; //@line 532 "audioop.c"
        var $98=HEAP[$cp1]; //@line 532 "audioop.c"
        var $99=$best_j; //@line 532 "audioop.c"
        var $100=$98+2*$99; //@line 532 "audioop.c"
        var $101=__sum2($100, $97, $96); //@line 532 "audioop.c"
        var $102=$sum_ri_2; //@line 532 "audioop.c"
        var $103=($101) / ($102); //@line 532 "audioop.c"
        $factor=$103; //@line 532 "audioop.c"
        var $104=$best_j; //@line 534 "audioop.c"
        var $105=$factor; //@line 534 "audioop.c"
        var $106=_Py_BuildValue(__str12, allocate([$104,0,0,0,$105,0,0,0,0,0,0,0], ["i32",0,0,0,"double",0,0,0,0,0,0,0], ALLOC_STACK)); //@line 534 "audioop.c"
        $0=$106; //@line 534 "audioop.c"
        __label__ = 12; break; //@line 534 "audioop.c"
      case 12: // $bb17
        var $107=$0; //@line 494 "audioop.c"
        $retval=$107; //@line 494 "audioop.c"
        var $retval18=$retval; //@line 494 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 494 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_findfactor($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp1=__stackBase__;
        var $cp2=__stackBase__+4;
        var $len1=__stackBase__+8;
        var $len2=__stackBase__+12;
        var $sum_ri_2;
        var $sum_aij_ri;
        var $result;
        $self_addr=$self;
        $args_addr=$args;
        var $cp21=$cp2; //@line 548 "audioop.c"
        var $cp13=$cp1; //@line 548 "audioop.c"
        var $1=$args_addr; //@line 548 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str13, allocate([$cp13,0,0,0,$len1,0,0,0,$cp21,0,0,0,$len2,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 548 "audioop.c"
        var $3=($2)==0; //@line 548 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 548 "audioop.c"
      case 1: // $bb
        $0=0; //@line 550 "audioop.c"
        __label__ = 8; break; //@line 550 "audioop.c"
      case 2: // $bb5
        var $4=HEAP[$len1]; //@line 551 "audioop.c"
        var $5=($4) & 1; //@line 551 "audioop.c"
        var $6=((($5)) & 255); //@line 551 "audioop.c"
        var $toBool=($6)!=0; //@line 551 "audioop.c"
        if ($toBool) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 551 "audioop.c"
      case 3: // $bb6
        var $7=HEAP[$len2]; //@line 551 "audioop.c"
        var $8=($7) & 1; //@line 551 "audioop.c"
        var $9=((($8)) & 255); //@line 551 "audioop.c"
        var $toBool7=($9)!=0; //@line 551 "audioop.c"
        if ($toBool7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 551 "audioop.c"
      case 4: // $bb8
        var $10=HEAP[_AudioopError]; //@line 552 "audioop.c"
        _PyErr_SetString($10, __str10); //@line 552 "audioop.c"
        $0=0; //@line 553 "audioop.c"
        __label__ = 8; break; //@line 553 "audioop.c"
      case 5: // $bb9
        var $11=HEAP[$len1]; //@line 555 "audioop.c"
        var $12=HEAP[$len2]; //@line 555 "audioop.c"
        var $13=($11)!=($12); //@line 555 "audioop.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 555 "audioop.c"
      case 6: // $bb10
        var $14=HEAP[_AudioopError]; //@line 556 "audioop.c"
        _PyErr_SetString($14, __str14); //@line 556 "audioop.c"
        $0=0; //@line 557 "audioop.c"
        __label__ = 8; break; //@line 557 "audioop.c"
      case 7: // $bb11
        var $15=HEAP[$len2]; //@line 559 "audioop.c"
        var $16=($15) >> 1; //@line 559 "audioop.c"
        HEAP[$len2]=$16; //@line 559 "audioop.c"
        var $17=HEAP[$len2]; //@line 560 "audioop.c"
        var $18=HEAP[$cp2]; //@line 560 "audioop.c"
        var $19=HEAP[$cp2]; //@line 560 "audioop.c"
        var $20=__sum2($19, $18, $17); //@line 560 "audioop.c"
        $sum_ri_2=$20; //@line 560 "audioop.c"
        var $21=HEAP[$len2]; //@line 561 "audioop.c"
        var $22=HEAP[$cp2]; //@line 561 "audioop.c"
        var $23=HEAP[$cp1]; //@line 561 "audioop.c"
        var $24=__sum2($23, $22, $21); //@line 561 "audioop.c"
        $sum_aij_ri=$24; //@line 561 "audioop.c"
        var $25=$sum_aij_ri; //@line 563 "audioop.c"
        var $26=$sum_ri_2; //@line 563 "audioop.c"
        var $27=($25) / ($26); //@line 563 "audioop.c"
        $result=$27; //@line 563 "audioop.c"
        var $28=$result; //@line 565 "audioop.c"
        var $29=_PyFloat_FromDouble($28); //@line 565 "audioop.c"
        $0=$29; //@line 565 "audioop.c"
        __label__ = 8; break; //@line 565 "audioop.c"
      case 8: // $bb12
        var $30=$0; //@line 550 "audioop.c"
        $retval=$30; //@line 550 "audioop.c"
        var $retval13=$retval; //@line 550 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 550 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_findmax($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp1=__stackBase__;
        var $len1=__stackBase__+4;
        var $len2=__stackBase__+8;
        var $j;
        var $best_j;
        var $aj_m1;
        var $aj_lm1;
        var $result;
        var $best_result;
        $self_addr=$self;
        $args_addr=$args;
        var $cp11=$cp1; //@line 581 "audioop.c"
        var $1=$args_addr; //@line 581 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str15, allocate([$cp11,0,0,0,$len1,0,0,0,$len2,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 581 "audioop.c"
        var $3=($2)==0; //@line 581 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 581 "audioop.c"
      case 1: // $bb
        $0=0; //@line 583 "audioop.c"
        __label__ = 12; break; //@line 583 "audioop.c"
      case 2: // $bb3
        var $4=HEAP[$len1]; //@line 584 "audioop.c"
        var $5=($4) & 1; //@line 584 "audioop.c"
        var $6=((($5)) & 255); //@line 584 "audioop.c"
        var $toBool=($6)!=0; //@line 584 "audioop.c"
        if ($toBool) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 584 "audioop.c"
      case 3: // $bb4
        var $7=HEAP[_AudioopError]; //@line 585 "audioop.c"
        _PyErr_SetString($7, __str10); //@line 585 "audioop.c"
        $0=0; //@line 586 "audioop.c"
        __label__ = 12; break; //@line 586 "audioop.c"
      case 4: // $bb5
        var $8=HEAP[$len1]; //@line 588 "audioop.c"
        var $9=($8) >> 1; //@line 588 "audioop.c"
        HEAP[$len1]=$9; //@line 588 "audioop.c"
        var $10=HEAP[$len2]; //@line 590 "audioop.c"
        var $11=($10) < 0; //@line 590 "audioop.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 590 "audioop.c"
      case 5: // $bb6
        var $12=HEAP[$len1]; //@line 590 "audioop.c"
        var $13=HEAP[$len2]; //@line 590 "audioop.c"
        var $14=($12) < ($13); //@line 590 "audioop.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 590 "audioop.c"
      case 6: // $bb7
        var $15=HEAP[_AudioopError]; //@line 591 "audioop.c"
        _PyErr_SetString($15, __str16); //@line 591 "audioop.c"
        $0=0; //@line 592 "audioop.c"
        __label__ = 12; break; //@line 592 "audioop.c"
      case 7: // $bb8
        var $16=HEAP[$len2]; //@line 595 "audioop.c"
        var $17=HEAP[$cp1]; //@line 595 "audioop.c"
        var $18=HEAP[$cp1]; //@line 595 "audioop.c"
        var $19=__sum2($18, $17, $16); //@line 595 "audioop.c"
        $result=$19; //@line 595 "audioop.c"
        var $20=$result; //@line 597 "audioop.c"
        $best_result=$20; //@line 597 "audioop.c"
        $best_j=0; //@line 598 "audioop.c"
        $j=1; //@line 600 "audioop.c"
        var $21=HEAP[$len1]; //@line 600 "audioop.c"
        var $22=HEAP[$len2]; //@line 600 "audioop.c"
        var $23=($21) - ($22); //@line 600 "audioop.c"
        var $24=$j; //@line 600 "audioop.c"
        var $25=($23) >= ($24); //@line 600 "audioop.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 600 "audioop.c"
      case 8: // $bb9
        var $26=HEAP[$cp1]; //@line 601 "audioop.c"
        var $27=$j; //@line 601 "audioop.c"
        var $28=($27) - 1; //@line 601 "audioop.c"
        var $29=$26+2*$28; //@line 601 "audioop.c"
        var $30=HEAP[$29]; //@line 601 "audioop.c"
        var $31=($30); //@line 601 "audioop.c"
        $aj_m1=$31; //@line 601 "audioop.c"
        var $32=HEAP[$cp1]; //@line 602 "audioop.c"
        var $33=HEAP[$len2]; //@line 602 "audioop.c"
        var $34=$j; //@line 602 "audioop.c"
        var $35=($33) + -1; //@line 602 "audioop.c"
        var $36=($35) + ($34);
        var $37=$32+2*$36; //@line 602 "audioop.c"
        var $38=HEAP[$37]; //@line 602 "audioop.c"
        var $39=($38); //@line 602 "audioop.c"
        $aj_lm1=$39; //@line 602 "audioop.c"
        var $40=$aj_lm1; //@line 604 "audioop.c"
        var $41=$aj_lm1; //@line 604 "audioop.c"
        var $42=($40) * ($41); //@line 604 "audioop.c"
        var $43=$result; //@line 604 "audioop.c"
        var $44=($42) + ($43); //@line 604 "audioop.c"
        var $45=$aj_m1; //@line 604 "audioop.c"
        var $46=$aj_m1; //@line 604 "audioop.c"
        var $47=($45) * ($46); //@line 604 "audioop.c"
        var $48=($44) - ($47); //@line 604 "audioop.c"
        $result=$48; //@line 604 "audioop.c"
        var $49=$result; //@line 606 "audioop.c"
        var $50=$best_result; //@line 606 "audioop.c"
        var $51=($49) > ($50); //@line 606 "audioop.c"
        if ($51) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 606 "audioop.c"
      case 9: // $bb10
        var $52=$result; //@line 607 "audioop.c"
        $best_result=$52; //@line 607 "audioop.c"
        var $53=$j; //@line 608 "audioop.c"
        $best_j=$53; //@line 608 "audioop.c"
        __label__ = 10; break; //@line 608 "audioop.c"
      case 10: // $bb11
        var $54=$j; //@line 600 "audioop.c"
        var $55=($54) + 1; //@line 600 "audioop.c"
        $j=$55; //@line 600 "audioop.c"
        var $56=HEAP[$len1]; //@line 600 "audioop.c"
        var $57=HEAP[$len2]; //@line 600 "audioop.c"
        var $58=($56) - ($57); //@line 600 "audioop.c"
        var $59=$j; //@line 600 "audioop.c"
        var $60=($58) >= ($59); //@line 600 "audioop.c"
        if ($60) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 600 "audioop.c"
      case 11: // $bb13
        var $61=$best_j; //@line 613 "audioop.c"
        var $62=_PyInt_FromLong($61); //@line 613 "audioop.c"
        $0=$62; //@line 613 "audioop.c"
        __label__ = 12; break; //@line 613 "audioop.c"
      case 12: // $bb14
        var $63=$0; //@line 583 "audioop.c"
        $retval=$63; //@line 583 "audioop.c"
        var $retval15=$retval; //@line 583 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 583 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_avgpp($self, $args) {
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
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $prevval;
        var $prevextremevalid;
        var $prevextreme;
        var $i;
        var $avg;
        var $diff;
        var $prevdiff;
        var $extremediff;
        var $nextreme;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 620 "audioop.c"
        $prevval=0; //@line 620 "audioop.c"
        $prevextremevalid=0; //@line 620 "audioop.c"
        $prevextreme=0; //@line 621 "audioop.c"
        $avg=0; //@line 623 "audioop.c"
        $nextreme=0; //@line 624 "audioop.c"
        var $1=$args_addr; //@line 626 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str17, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 626 "audioop.c"
        var $3=($2)==0; //@line 626 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 626 "audioop.c"
      case 1: // $bb
        $0=0; //@line 627 "audioop.c"
        __label__ = 38; break; //@line 627 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 628 "audioop.c"
        var $5=HEAP[$len]; //@line 628 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 628 "audioop.c"
        var $7=($6)==0; //@line 628 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 628 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 629 "audioop.c"
        __label__ = 38; break; //@line 629 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 633 "audioop.c"
        var $9=($8)==1; //@line 633 "audioop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 633 "audioop.c"
      case 5: // $bb4
        var $10=HEAP[$cp]; //@line 633 "audioop.c"
        var $11=$10; //@line 633 "audioop.c"
        var $12=HEAP[$11]; //@line 633 "audioop.c"
        var $13=($12); //@line 633 "audioop.c"
        $prevval=$13; //@line 633 "audioop.c"
        __label__ = 10; break; //@line 633 "audioop.c"
      case 6: // $bb5
        var $14=HEAP[$size]; //@line 634 "audioop.c"
        var $15=($14)==2; //@line 634 "audioop.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 634 "audioop.c"
      case 7: // $bb6
        var $16=HEAP[$cp]; //@line 634 "audioop.c"
        var $17=$16; //@line 634 "audioop.c"
        var $18=$17; //@line 634 "audioop.c"
        var $19=HEAP[$18]; //@line 634 "audioop.c"
        var $20=($19); //@line 634 "audioop.c"
        $prevval=$20; //@line 634 "audioop.c"
        __label__ = 10; break; //@line 634 "audioop.c"
      case 8: // $bb7
        var $21=HEAP[$size]; //@line 635 "audioop.c"
        var $22=($21)==4; //@line 635 "audioop.c"
        if ($22) { __lastLabel__ = 8; __label__ = 9; break; } else { __lastLabel__ = 8; __label__ = 11; break; } //@line 635 "audioop.c"
      case 9: // $bb8
        var $23=HEAP[$cp]; //@line 635 "audioop.c"
        var $24=$23; //@line 635 "audioop.c"
        var $25=$24; //@line 635 "audioop.c"
        var $26=HEAP[$25]; //@line 635 "audioop.c"
        $prevval=$26; //@line 635 "audioop.c"
        __label__ = 10; break; //@line 635 "audioop.c"
      case 10: // $bb9thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 10; __label__ = 11; break;
      case 11: // $bb9
        var $27=__lastLabel__ == 10 ? $_pr : ($21);
        var $28=($27)==1; //@line 636 "audioop.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 636 "audioop.c"
      case 12: // $bb10
        var $29=HEAP[$cp]; //@line 636 "audioop.c"
        var $30=HEAP[$size]; //@line 636 "audioop.c"
        var $31=$29+$30; //@line 636 "audioop.c"
        var $32=HEAP[$31]; //@line 636 "audioop.c"
        var $33=($32); //@line 636 "audioop.c"
        $val=$33; //@line 636 "audioop.c"
        __label__ = 17; break; //@line 636 "audioop.c"
      case 13: // $bb11
        var $34=HEAP[$size]; //@line 637 "audioop.c"
        var $35=($34)==2; //@line 637 "audioop.c"
        if ($35) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 637 "audioop.c"
      case 14: // $bb12
        var $36=HEAP[$cp]; //@line 637 "audioop.c"
        var $37=HEAP[$size]; //@line 637 "audioop.c"
        var $38=$36+$37; //@line 637 "audioop.c"
        var $39=$38; //@line 637 "audioop.c"
        var $40=HEAP[$39]; //@line 637 "audioop.c"
        var $41=($40); //@line 637 "audioop.c"
        $val=$41; //@line 637 "audioop.c"
        __label__ = 17; break; //@line 637 "audioop.c"
      case 15: // $bb13
        var $42=HEAP[$size]; //@line 638 "audioop.c"
        var $43=($42)==4; //@line 638 "audioop.c"
        if ($43) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 638 "audioop.c"
      case 16: // $bb14
        var $44=HEAP[$cp]; //@line 638 "audioop.c"
        var $45=HEAP[$size]; //@line 638 "audioop.c"
        var $46=$44+$45; //@line 638 "audioop.c"
        var $47=$46; //@line 638 "audioop.c"
        var $48=HEAP[$47]; //@line 638 "audioop.c"
        $val=$48; //@line 638 "audioop.c"
        __label__ = 17; break; //@line 638 "audioop.c"
      case 17: // $bb15
        var $49=$val; //@line 639 "audioop.c"
        var $50=$prevval; //@line 639 "audioop.c"
        var $51=($49) - ($50); //@line 639 "audioop.c"
        $prevdiff=$51; //@line 639 "audioop.c"
        var $52=HEAP[$size]; //@line 641 "audioop.c"
        $i=$52; //@line 641 "audioop.c"
        var $53=HEAP[$len]; //@line 641 "audioop.c"
        var $54=$i; //@line 641 "audioop.c"
        var $55=($54) < ($53); //@line 641 "audioop.c"
        if ($55) { __lastLabel__ = 17; __label__ = 19; break; } else { __lastLabel__ = 17; __label__ = 34; break; } //@line 641 "audioop.c"
      case 18: // $bb16thread_pre_split
        var $_pr2=HEAP[$size];
        __lastLabel__ = 18; __label__ = 19; break;
      case 19: // $bb16
        var $56=__lastLabel__ == 18 ? $_pr2 : ($52);
        var $57=($56)==1; //@line 642 "audioop.c"
        if ($57) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 642 "audioop.c"
      case 20: // $bb17
        var $58=HEAP[$cp]; //@line 642 "audioop.c"
        var $59=$i; //@line 642 "audioop.c"
        var $60=$58+$59; //@line 642 "audioop.c"
        var $61=HEAP[$60]; //@line 642 "audioop.c"
        var $62=($61); //@line 642 "audioop.c"
        $val=$62; //@line 642 "audioop.c"
        __label__ = 25; break; //@line 642 "audioop.c"
      case 21: // $bb18
        var $63=HEAP[$size]; //@line 643 "audioop.c"
        var $64=($63)==2; //@line 643 "audioop.c"
        if ($64) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 643 "audioop.c"
      case 22: // $bb19
        var $65=HEAP[$cp]; //@line 643 "audioop.c"
        var $66=$i; //@line 643 "audioop.c"
        var $67=$65+$66; //@line 643 "audioop.c"
        var $68=$67; //@line 643 "audioop.c"
        var $69=HEAP[$68]; //@line 643 "audioop.c"
        var $70=($69); //@line 643 "audioop.c"
        $val=$70; //@line 643 "audioop.c"
        __label__ = 25; break; //@line 643 "audioop.c"
      case 23: // $bb20
        var $71=HEAP[$size]; //@line 644 "audioop.c"
        var $72=($71)==4; //@line 644 "audioop.c"
        if ($72) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 644 "audioop.c"
      case 24: // $bb21
        var $73=HEAP[$cp]; //@line 644 "audioop.c"
        var $74=$i; //@line 644 "audioop.c"
        var $75=$73+$74; //@line 644 "audioop.c"
        var $76=$75; //@line 644 "audioop.c"
        var $77=HEAP[$76]; //@line 644 "audioop.c"
        $val=$77; //@line 644 "audioop.c"
        __label__ = 25; break; //@line 644 "audioop.c"
      case 25: // $bb22
        var $78=$val; //@line 645 "audioop.c"
        var $79=$prevval; //@line 645 "audioop.c"
        var $80=($78) - ($79); //@line 645 "audioop.c"
        $diff=$80; //@line 645 "audioop.c"
        var $81=$diff; //@line 646 "audioop.c"
        var $82=$prevdiff; //@line 646 "audioop.c"
        var $83=($82) * ($81); //@line 646 "audioop.c"
        var $84=($83) < 0; //@line 646 "audioop.c"
        if ($84) { __lastLabel__ = 25; __label__ = 26; break; } else { __lastLabel__ = 25; __label__ = 31; break; } //@line 646 "audioop.c"
      case 26: // $bb23
        var $85=$prevextremevalid; //@line 650 "audioop.c"
        var $86=($85)!=0; //@line 650 "audioop.c"
        if ($86) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 650 "audioop.c"
      case 27: // $bb24
        var $87=$prevval; //@line 651 "audioop.c"
        var $88=$prevextreme; //@line 651 "audioop.c"
        var $89=($87) - ($88); //@line 651 "audioop.c"
        $extremediff=$89; //@line 651 "audioop.c"
        var $90=$extremediff; //@line 652 "audioop.c"
        var $91=($90) < 0; //@line 652 "audioop.c"
        if ($91) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 652 "audioop.c"
      case 28: // $bb25
        var $92=$extremediff; //@line 653 "audioop.c"
        var $93=0 - ($92); //@line 653 "audioop.c"
        $extremediff=$93; //@line 653 "audioop.c"
        __label__ = 29; break; //@line 653 "audioop.c"
      case 29: // $bb26
        var $94=$extremediff; //@line 654 "audioop.c"
        var $95=($94); //@line 654 "audioop.c"
        var $96=$avg; //@line 654 "audioop.c"
        var $97=($95) + ($96); //@line 654 "audioop.c"
        $avg=$97; //@line 654 "audioop.c"
        var $98=$nextreme; //@line 655 "audioop.c"
        var $99=($98) + 1; //@line 655 "audioop.c"
        $nextreme=$99; //@line 655 "audioop.c"
        __label__ = 30; break; //@line 655 "audioop.c"
      case 30: // $bb27
        $prevextremevalid=1; //@line 657 "audioop.c"
        var $100=$prevval; //@line 658 "audioop.c"
        $prevextreme=$100; //@line 658 "audioop.c"
        var $_pr1=$diff;
        __lastLabel__ = 30; __label__ = 31; break; //@line 658 "audioop.c"
      case 31: // $bb28
        var $101=__lastLabel__ == 30 ? $_pr1 : ($81);
        var $102=$val; //@line 660 "audioop.c"
        $prevval=$102; //@line 660 "audioop.c"
        var $103=($101)!=0; //@line 661 "audioop.c"
        if ($103) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 661 "audioop.c"
      case 32: // $bb29
        var $104=$diff; //@line 662 "audioop.c"
        $prevdiff=$104; //@line 662 "audioop.c"
        __label__ = 33; break; //@line 662 "audioop.c"
      case 33: // $bb30
        var $105=HEAP[$size]; //@line 641 "audioop.c"
        var $106=$i; //@line 641 "audioop.c"
        var $107=($106) + ($105); //@line 641 "audioop.c"
        $i=$107; //@line 641 "audioop.c"
        var $108=HEAP[$len]; //@line 641 "audioop.c"
        var $109=$i; //@line 641 "audioop.c"
        var $110=($109) < ($108); //@line 641 "audioop.c"
        if ($110) { __label__ = 18; break; } else { __label__ = 34; break; } //@line 641 "audioop.c"
      case 34: // $bb32
        var $111=$nextreme; //@line 664 "audioop.c"
        var $112=($111)==0; //@line 664 "audioop.c"
        if ($112) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 664 "audioop.c"
      case 35: // $bb33
        $val=0; //@line 665 "audioop.c"
        __label__ = 37; break; //@line 665 "audioop.c"
      case 36: // $bb34
        var $113=$nextreme; //@line 667 "audioop.c"
        var $114=($113); //@line 667 "audioop.c"
        var $115=$avg; //@line 667 "audioop.c"
        var $116=($115) / ($114); //@line 667 "audioop.c"
        var $117=((($116))|0); //@line 667 "audioop.c"
        $val=$117; //@line 667 "audioop.c"
        __label__ = 37; break; //@line 667 "audioop.c"
      case 37: // $bb35
        var $118=$val; //@line 668 "audioop.c"
        var $119=_PyInt_FromLong($118); //@line 668 "audioop.c"
        $0=$119; //@line 668 "audioop.c"
        __label__ = 38; break; //@line 668 "audioop.c"
      case 38: // $bb36
        var $120=$0; //@line 627 "audioop.c"
        $retval=$120; //@line 627 "audioop.c"
        var $retval37=$retval; //@line 627 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval37; //@line 627 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_maxpp($self, $args) {
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
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $prevval;
        var $prevextremevalid;
        var $prevextreme;
        var $i;
        var $max;
        var $diff;
        var $prevdiff;
        var $extremediff;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 675 "audioop.c"
        $prevval=0; //@line 675 "audioop.c"
        $prevextremevalid=0; //@line 675 "audioop.c"
        $prevextreme=0; //@line 676 "audioop.c"
        $max=0; //@line 678 "audioop.c"
        var $1=$args_addr; //@line 681 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str18, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 681 "audioop.c"
        var $3=($2)==0; //@line 681 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 681 "audioop.c"
      case 1: // $bb
        $0=0; //@line 682 "audioop.c"
        __label__ = 36; break; //@line 682 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 683 "audioop.c"
        var $5=HEAP[$len]; //@line 683 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 683 "audioop.c"
        var $7=($6)==0; //@line 683 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 683 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 684 "audioop.c"
        __label__ = 36; break; //@line 684 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 688 "audioop.c"
        var $9=($8)==1; //@line 688 "audioop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 688 "audioop.c"
      case 5: // $bb4
        var $10=HEAP[$cp]; //@line 688 "audioop.c"
        var $11=$10; //@line 688 "audioop.c"
        var $12=HEAP[$11]; //@line 688 "audioop.c"
        var $13=($12); //@line 688 "audioop.c"
        $prevval=$13; //@line 688 "audioop.c"
        __label__ = 10; break; //@line 688 "audioop.c"
      case 6: // $bb5
        var $14=HEAP[$size]; //@line 689 "audioop.c"
        var $15=($14)==2; //@line 689 "audioop.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 689 "audioop.c"
      case 7: // $bb6
        var $16=HEAP[$cp]; //@line 689 "audioop.c"
        var $17=$16; //@line 689 "audioop.c"
        var $18=$17; //@line 689 "audioop.c"
        var $19=HEAP[$18]; //@line 689 "audioop.c"
        var $20=($19); //@line 689 "audioop.c"
        $prevval=$20; //@line 689 "audioop.c"
        __label__ = 10; break; //@line 689 "audioop.c"
      case 8: // $bb7
        var $21=HEAP[$size]; //@line 690 "audioop.c"
        var $22=($21)==4; //@line 690 "audioop.c"
        if ($22) { __lastLabel__ = 8; __label__ = 9; break; } else { __lastLabel__ = 8; __label__ = 11; break; } //@line 690 "audioop.c"
      case 9: // $bb8
        var $23=HEAP[$cp]; //@line 690 "audioop.c"
        var $24=$23; //@line 690 "audioop.c"
        var $25=$24; //@line 690 "audioop.c"
        var $26=HEAP[$25]; //@line 690 "audioop.c"
        $prevval=$26; //@line 690 "audioop.c"
        __label__ = 10; break; //@line 690 "audioop.c"
      case 10: // $bb9thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 10; __label__ = 11; break;
      case 11: // $bb9
        var $27=__lastLabel__ == 10 ? $_pr : ($21);
        var $28=($27)==1; //@line 691 "audioop.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 691 "audioop.c"
      case 12: // $bb10
        var $29=HEAP[$cp]; //@line 691 "audioop.c"
        var $30=HEAP[$size]; //@line 691 "audioop.c"
        var $31=$29+$30; //@line 691 "audioop.c"
        var $32=HEAP[$31]; //@line 691 "audioop.c"
        var $33=($32); //@line 691 "audioop.c"
        $val=$33; //@line 691 "audioop.c"
        __label__ = 17; break; //@line 691 "audioop.c"
      case 13: // $bb11
        var $34=HEAP[$size]; //@line 692 "audioop.c"
        var $35=($34)==2; //@line 692 "audioop.c"
        if ($35) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 692 "audioop.c"
      case 14: // $bb12
        var $36=HEAP[$cp]; //@line 692 "audioop.c"
        var $37=HEAP[$size]; //@line 692 "audioop.c"
        var $38=$36+$37; //@line 692 "audioop.c"
        var $39=$38; //@line 692 "audioop.c"
        var $40=HEAP[$39]; //@line 692 "audioop.c"
        var $41=($40); //@line 692 "audioop.c"
        $val=$41; //@line 692 "audioop.c"
        __label__ = 17; break; //@line 692 "audioop.c"
      case 15: // $bb13
        var $42=HEAP[$size]; //@line 693 "audioop.c"
        var $43=($42)==4; //@line 693 "audioop.c"
        if ($43) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 693 "audioop.c"
      case 16: // $bb14
        var $44=HEAP[$cp]; //@line 693 "audioop.c"
        var $45=HEAP[$size]; //@line 693 "audioop.c"
        var $46=$44+$45; //@line 693 "audioop.c"
        var $47=$46; //@line 693 "audioop.c"
        var $48=HEAP[$47]; //@line 693 "audioop.c"
        $val=$48; //@line 693 "audioop.c"
        __label__ = 17; break; //@line 693 "audioop.c"
      case 17: // $bb15
        var $49=$val; //@line 694 "audioop.c"
        var $50=$prevval; //@line 694 "audioop.c"
        var $51=($49) - ($50); //@line 694 "audioop.c"
        $prevdiff=$51; //@line 694 "audioop.c"
        var $52=HEAP[$size]; //@line 696 "audioop.c"
        $i=$52; //@line 696 "audioop.c"
        var $53=HEAP[$len]; //@line 696 "audioop.c"
        var $54=$i; //@line 696 "audioop.c"
        var $55=($54) < ($53); //@line 696 "audioop.c"
        if ($55) { __lastLabel__ = 17; __label__ = 19; break; } else { __lastLabel__ = 17; __label__ = 35; break; } //@line 696 "audioop.c"
      case 18: // $bb16thread_pre_split
        var $_pr2=HEAP[$size];
        __lastLabel__ = 18; __label__ = 19; break;
      case 19: // $bb16
        var $56=__lastLabel__ == 18 ? $_pr2 : ($52);
        var $57=($56)==1; //@line 697 "audioop.c"
        if ($57) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 697 "audioop.c"
      case 20: // $bb17
        var $58=HEAP[$cp]; //@line 697 "audioop.c"
        var $59=$i; //@line 697 "audioop.c"
        var $60=$58+$59; //@line 697 "audioop.c"
        var $61=HEAP[$60]; //@line 697 "audioop.c"
        var $62=($61); //@line 697 "audioop.c"
        $val=$62; //@line 697 "audioop.c"
        __label__ = 25; break; //@line 697 "audioop.c"
      case 21: // $bb18
        var $63=HEAP[$size]; //@line 698 "audioop.c"
        var $64=($63)==2; //@line 698 "audioop.c"
        if ($64) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 698 "audioop.c"
      case 22: // $bb19
        var $65=HEAP[$cp]; //@line 698 "audioop.c"
        var $66=$i; //@line 698 "audioop.c"
        var $67=$65+$66; //@line 698 "audioop.c"
        var $68=$67; //@line 698 "audioop.c"
        var $69=HEAP[$68]; //@line 698 "audioop.c"
        var $70=($69); //@line 698 "audioop.c"
        $val=$70; //@line 698 "audioop.c"
        __label__ = 25; break; //@line 698 "audioop.c"
      case 23: // $bb20
        var $71=HEAP[$size]; //@line 699 "audioop.c"
        var $72=($71)==4; //@line 699 "audioop.c"
        if ($72) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 699 "audioop.c"
      case 24: // $bb21
        var $73=HEAP[$cp]; //@line 699 "audioop.c"
        var $74=$i; //@line 699 "audioop.c"
        var $75=$73+$74; //@line 699 "audioop.c"
        var $76=$75; //@line 699 "audioop.c"
        var $77=HEAP[$76]; //@line 699 "audioop.c"
        $val=$77; //@line 699 "audioop.c"
        __label__ = 25; break; //@line 699 "audioop.c"
      case 25: // $bb22
        var $78=$val; //@line 700 "audioop.c"
        var $79=$prevval; //@line 700 "audioop.c"
        var $80=($78) - ($79); //@line 700 "audioop.c"
        $diff=$80; //@line 700 "audioop.c"
        var $81=$diff; //@line 701 "audioop.c"
        var $82=$prevdiff; //@line 701 "audioop.c"
        var $83=($82) * ($81); //@line 701 "audioop.c"
        var $84=($83) < 0; //@line 701 "audioop.c"
        if ($84) { __lastLabel__ = 25; __label__ = 26; break; } else { __lastLabel__ = 25; __label__ = 32; break; } //@line 701 "audioop.c"
      case 26: // $bb23
        var $85=$prevextremevalid; //@line 705 "audioop.c"
        var $86=($85)!=0; //@line 705 "audioop.c"
        if ($86) { __label__ = 27; break; } else { __label__ = 31; break; } //@line 705 "audioop.c"
      case 27: // $bb24
        var $87=$prevval; //@line 706 "audioop.c"
        var $88=$prevextreme; //@line 706 "audioop.c"
        var $89=($87) - ($88); //@line 706 "audioop.c"
        $extremediff=$89; //@line 706 "audioop.c"
        var $90=$extremediff; //@line 707 "audioop.c"
        var $91=($90) < 0; //@line 707 "audioop.c"
        if ($91) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 707 "audioop.c"
      case 28: // $bb25
        var $92=$extremediff; //@line 708 "audioop.c"
        var $93=0 - ($92); //@line 708 "audioop.c"
        $extremediff=$93; //@line 708 "audioop.c"
        __label__ = 29; break; //@line 708 "audioop.c"
      case 29: // $bb26
        var $94=$extremediff; //@line 709 "audioop.c"
        var $95=$max; //@line 709 "audioop.c"
        var $96=($94) > ($95); //@line 709 "audioop.c"
        if ($96) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 709 "audioop.c"
      case 30: // $bb27
        var $97=$extremediff; //@line 710 "audioop.c"
        $max=$97; //@line 710 "audioop.c"
        __label__ = 31; break; //@line 710 "audioop.c"
      case 31: // $bb28
        $prevextremevalid=1; //@line 712 "audioop.c"
        var $98=$prevval; //@line 713 "audioop.c"
        $prevextreme=$98; //@line 713 "audioop.c"
        var $_pr1=$diff;
        __lastLabel__ = 31; __label__ = 32; break; //@line 713 "audioop.c"
      case 32: // $bb29
        var $99=__lastLabel__ == 31 ? $_pr1 : ($81);
        var $100=$val; //@line 715 "audioop.c"
        $prevval=$100; //@line 715 "audioop.c"
        var $101=($99)!=0; //@line 716 "audioop.c"
        if ($101) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 716 "audioop.c"
      case 33: // $bb30
        var $102=$diff; //@line 717 "audioop.c"
        $prevdiff=$102; //@line 717 "audioop.c"
        __label__ = 34; break; //@line 717 "audioop.c"
      case 34: // $bb31
        var $103=HEAP[$size]; //@line 696 "audioop.c"
        var $104=$i; //@line 696 "audioop.c"
        var $105=($104) + ($103); //@line 696 "audioop.c"
        $i=$105; //@line 696 "audioop.c"
        var $106=HEAP[$len]; //@line 696 "audioop.c"
        var $107=$i; //@line 696 "audioop.c"
        var $108=($107) < ($106); //@line 696 "audioop.c"
        if ($108) { __label__ = 18; break; } else { __label__ = 35; break; } //@line 696 "audioop.c"
      case 35: // $bb33
        var $109=$max; //@line 719 "audioop.c"
        var $110=_PyInt_FromLong($109); //@line 719 "audioop.c"
        $0=$110; //@line 719 "audioop.c"
        __label__ = 36; break; //@line 719 "audioop.c"
      case 36: // $bb34
        var $111=$0; //@line 682 "audioop.c"
        $retval=$111; //@line 682 "audioop.c"
        var $retval35=$retval; //@line 682 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval35; //@line 682 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_cross($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $i;
        var $prevval;
        var $ncross;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 726 "audioop.c"
        var $1=$args_addr; //@line 730 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str19, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 730 "audioop.c"
        var $3=($2)==0; //@line 730 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 730 "audioop.c"
      case 1: // $bb
        $0=0; //@line 731 "audioop.c"
        __label__ = 15; break; //@line 731 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 732 "audioop.c"
        var $5=HEAP[$len]; //@line 732 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 732 "audioop.c"
        var $7=($6)==0; //@line 732 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 732 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 733 "audioop.c"
        __label__ = 15; break; //@line 733 "audioop.c"
      case 4: // $bb3
        $ncross=-1; //@line 734 "audioop.c"
        $prevval=17; //@line 735 "audioop.c"
        $i=0; //@line 736 "audioop.c"
        var $8=HEAP[$len]; //@line 736 "audioop.c"
        var $9=$i; //@line 736 "audioop.c"
        var $10=($9) < ($8); //@line 736 "audioop.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 14; break; } //@line 736 "audioop.c"
      case 5: // $bb4
        var $11=HEAP[$size]; //@line 737 "audioop.c"
        var $12=($11)==1; //@line 737 "audioop.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 737 "audioop.c"
      case 6: // $bb5
        var $13=HEAP[$cp]; //@line 737 "audioop.c"
        var $14=$i; //@line 737 "audioop.c"
        var $15=$13+$14; //@line 737 "audioop.c"
        var $16=HEAP[$15]; //@line 737 "audioop.c"
        var $17=($16) >> 7; //@line 737 "audioop.c"
        var $18=($17); //@line 737 "audioop.c"
        $val=$18; //@line 737 "audioop.c"
        __label__ = 11; break; //@line 737 "audioop.c"
      case 7: // $bb6
        var $19=HEAP[$size]; //@line 738 "audioop.c"
        var $20=($19)==2; //@line 738 "audioop.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 738 "audioop.c"
      case 8: // $bb7
        var $21=HEAP[$cp]; //@line 738 "audioop.c"
        var $22=$i; //@line 738 "audioop.c"
        var $23=$21+$22; //@line 738 "audioop.c"
        var $24=$23; //@line 738 "audioop.c"
        var $25=HEAP[$24]; //@line 738 "audioop.c"
        var $26=($25) >> 15; //@line 738 "audioop.c"
        var $27=($26); //@line 738 "audioop.c"
        $val=$27; //@line 738 "audioop.c"
        __label__ = 11; break; //@line 738 "audioop.c"
      case 9: // $bb8
        var $28=HEAP[$size]; //@line 739 "audioop.c"
        var $29=($28)==4; //@line 739 "audioop.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 739 "audioop.c"
      case 10: // $bb9
        var $30=HEAP[$cp]; //@line 739 "audioop.c"
        var $31=$i; //@line 739 "audioop.c"
        var $32=$30+$31; //@line 739 "audioop.c"
        var $33=$32; //@line 739 "audioop.c"
        var $34=HEAP[$33]; //@line 739 "audioop.c"
        var $35=($34) >> 31; //@line 739 "audioop.c"
        $val=$35; //@line 739 "audioop.c"
        __label__ = 11; break; //@line 739 "audioop.c"
      case 11: // $bb10
        var $36=$val; //@line 740 "audioop.c"
        var $37=($36) & 1; //@line 740 "audioop.c"
        $val=$37; //@line 740 "audioop.c"
        var $38=$val; //@line 741 "audioop.c"
        var $39=$prevval; //@line 741 "audioop.c"
        var $40=($38)!=($39); //@line 741 "audioop.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 741 "audioop.c"
      case 12: // $bb11
        var $41=$ncross; //@line 741 "audioop.c"
        var $42=($41) + 1; //@line 741 "audioop.c"
        $ncross=$42; //@line 741 "audioop.c"
        __label__ = 13; break; //@line 741 "audioop.c"
      case 13: // $bb12
        var $43=$val; //@line 742 "audioop.c"
        $prevval=$43; //@line 742 "audioop.c"
        var $44=HEAP[$size]; //@line 736 "audioop.c"
        var $45=$i; //@line 736 "audioop.c"
        var $46=($45) + ($44); //@line 736 "audioop.c"
        $i=$46; //@line 736 "audioop.c"
        var $47=HEAP[$len]; //@line 736 "audioop.c"
        var $48=$i; //@line 736 "audioop.c"
        var $49=($48) < ($47); //@line 736 "audioop.c"
        if ($49) { __label__ = 5; break; } else { __label__ = 14; break; } //@line 736 "audioop.c"
      case 14: // $bb14
        var $50=$ncross; //@line 744 "audioop.c"
        var $51=_PyInt_FromLong($50); //@line 744 "audioop.c"
        $0=$51; //@line 744 "audioop.c"
        __label__ = 15; break; //@line 744 "audioop.c"
      case 15: // $bb15
        var $52=$0; //@line 731 "audioop.c"
        $retval=$52; //@line 731 "audioop.c"
        var $retval16=$retval; //@line 731 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 731 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_mul($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $factor=__stackBase__+12;
        var $fval;
        var $maxval;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 751 "audioop.c"
        var $1=$args_addr; //@line 756 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str20, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$factor,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"double*",0,0,0], ALLOC_STACK)); //@line 756 "audioop.c"
        var $3=($2)==0; //@line 756 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 756 "audioop.c"
      case 1: // $bb
        $0=0; //@line 757 "audioop.c"
        __label__ = 32; break; //@line 757 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 758 "audioop.c"
        var $5=HEAP[$len]; //@line 758 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 758 "audioop.c"
        var $7=($6)==0; //@line 758 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 758 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 759 "audioop.c"
        __label__ = 32; break; //@line 759 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 761 "audioop.c"
        var $9=($8)==1; //@line 761 "audioop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 761 "audioop.c"
      case 5: // $bb4
        $maxval=127; //@line 761 "audioop.c"
        __label__ = 11; break; //@line 761 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$size]; //@line 762 "audioop.c"
        var $11=($10)==2; //@line 762 "audioop.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 762 "audioop.c"
      case 7: // $bb6
        $maxval=32767; //@line 762 "audioop.c"
        __label__ = 11; break; //@line 762 "audioop.c"
      case 8: // $bb7
        var $12=HEAP[$size]; //@line 763 "audioop.c"
        var $13=($12)==4; //@line 763 "audioop.c"
        if ($13) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 763 "audioop.c"
      case 9: // $bb8
        $maxval=2147483647; //@line 763 "audioop.c"
        __label__ = 11; break; //@line 763 "audioop.c"
      case 10: // $bb9
        var $14=HEAP[_AudioopError]; //@line 765 "audioop.c"
        _PyErr_SetString($14, __str); //@line 765 "audioop.c"
        $0=0; //@line 766 "audioop.c"
        __label__ = 32; break; //@line 766 "audioop.c"
      case 11: // $bb10
        var $15=HEAP[$len]; //@line 769 "audioop.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 769 "audioop.c"
        $rv=$16; //@line 769 "audioop.c"
        var $17=($16)==0; //@line 770 "audioop.c"
        if ($17) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 770 "audioop.c"
      case 12: // $bb11
        $0=0; //@line 771 "audioop.c"
        __label__ = 32; break; //@line 771 "audioop.c"
      case 13: // $bb12
        var $18=$rv; //@line 772 "audioop.c"
        var $19=_PyString_AsString($18); //@line 772 "audioop.c"
        $ncp=$19; //@line 772 "audioop.c"
        $i=0; //@line 775 "audioop.c"
        var $20=HEAP[$len]; //@line 775 "audioop.c"
        var $21=$i; //@line 775 "audioop.c"
        var $22=($21) < ($20); //@line 775 "audioop.c"
        if ($22) { __label__ = 14; break; } else { __label__ = 31; break; } //@line 775 "audioop.c"
      case 14: // $bb13
        var $23=HEAP[$size]; //@line 776 "audioop.c"
        var $24=($23)==1; //@line 776 "audioop.c"
        if ($24) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 776 "audioop.c"
      case 15: // $bb14
        var $25=HEAP[$cp]; //@line 776 "audioop.c"
        var $26=$i; //@line 776 "audioop.c"
        var $27=$25+$26; //@line 776 "audioop.c"
        var $28=HEAP[$27]; //@line 776 "audioop.c"
        var $29=($28); //@line 776 "audioop.c"
        $val=$29; //@line 776 "audioop.c"
        __label__ = 20; break; //@line 776 "audioop.c"
      case 16: // $bb15
        var $30=HEAP[$size]; //@line 777 "audioop.c"
        var $31=($30)==2; //@line 777 "audioop.c"
        if ($31) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 777 "audioop.c"
      case 17: // $bb16
        var $32=HEAP[$cp]; //@line 777 "audioop.c"
        var $33=$i; //@line 777 "audioop.c"
        var $34=$32+$33; //@line 777 "audioop.c"
        var $35=$34; //@line 777 "audioop.c"
        var $36=HEAP[$35]; //@line 777 "audioop.c"
        var $37=($36); //@line 777 "audioop.c"
        $val=$37; //@line 777 "audioop.c"
        __label__ = 20; break; //@line 777 "audioop.c"
      case 18: // $bb17
        var $38=HEAP[$size]; //@line 778 "audioop.c"
        var $39=($38)==4; //@line 778 "audioop.c"
        if ($39) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 778 "audioop.c"
      case 19: // $bb18
        var $40=HEAP[$cp]; //@line 778 "audioop.c"
        var $41=$i; //@line 778 "audioop.c"
        var $42=$40+$41; //@line 778 "audioop.c"
        var $43=$42; //@line 778 "audioop.c"
        var $44=HEAP[$43]; //@line 778 "audioop.c"
        $val=$44; //@line 778 "audioop.c"
        __label__ = 20; break; //@line 778 "audioop.c"
      case 20: // $bb19
        var $45=$val; //@line 779 "audioop.c"
        var $46=($45); //@line 779 "audioop.c"
        var $47=HEAP[$factor]; //@line 779 "audioop.c"
        var $48=($46) * ($47); //@line 779 "audioop.c"
        $fval=$48; //@line 779 "audioop.c"
        var $49=$fval; //@line 780 "audioop.c"
        var $50=$maxval; //@line 780 "audioop.c"
        var $51=($49) > ($50); //@line 780 "audioop.c"
        var $52=$maxval; //@line 780 "audioop.c"
        if ($51) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 780 "audioop.c"
      case 21: // $bb20
        $fval=$52; //@line 780 "audioop.c"
        __label__ = 24; break; //@line 780 "audioop.c"
      case 22: // $bb21
        var $53=0 - ($52); //@line 781 "audioop.c"
        var $54=$fval; //@line 781 "audioop.c"
        var $55=($53) > ($54); //@line 781 "audioop.c"
        if ($55) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 781 "audioop.c"
      case 23: // $bb22
        var $56=$maxval; //@line 781 "audioop.c"
        var $57=0 - ($56); //@line 781 "audioop.c"
        $fval=$57; //@line 781 "audioop.c"
        __label__ = 24; break; //@line 781 "audioop.c"
      case 24: // $bb23
        var $58=$fval; //@line 782 "audioop.c"
        var $59=((($58))|0); //@line 782 "audioop.c"
        $val=$59; //@line 782 "audioop.c"
        var $60=HEAP[$size]; //@line 783 "audioop.c"
        var $61=($60)==1; //@line 783 "audioop.c"
        if ($61) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 783 "audioop.c"
      case 25: // $bb24
        var $62=$val; //@line 783 "audioop.c"
        var $63=((($62)) & 255); //@line 783 "audioop.c"
        var $64=$ncp; //@line 783 "audioop.c"
        var $65=$i; //@line 783 "audioop.c"
        var $66=$64+$65; //@line 783 "audioop.c"
        HEAP[$66]=$63; //@line 783 "audioop.c"
        __label__ = 30; break; //@line 783 "audioop.c"
      case 26: // $bb25
        var $67=HEAP[$size]; //@line 784 "audioop.c"
        var $68=($67)==2; //@line 784 "audioop.c"
        if ($68) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 784 "audioop.c"
      case 27: // $bb26
        var $69=$ncp; //@line 784 "audioop.c"
        var $70=$i; //@line 784 "audioop.c"
        var $71=$69+$70; //@line 784 "audioop.c"
        var $72=$71; //@line 784 "audioop.c"
        var $73=$val; //@line 784 "audioop.c"
        var $74=((($73)) & 65535); //@line 784 "audioop.c"
        HEAP[$72]=$74; //@line 784 "audioop.c"
        __label__ = 30; break; //@line 784 "audioop.c"
      case 28: // $bb27
        var $75=HEAP[$size]; //@line 785 "audioop.c"
        var $76=($75)==4; //@line 785 "audioop.c"
        if ($76) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 785 "audioop.c"
      case 29: // $bb28
        var $77=$ncp; //@line 785 "audioop.c"
        var $78=$i; //@line 785 "audioop.c"
        var $79=$77+$78; //@line 785 "audioop.c"
        var $80=$79; //@line 785 "audioop.c"
        var $81=$val; //@line 785 "audioop.c"
        HEAP[$80]=$81; //@line 785 "audioop.c"
        __label__ = 30; break; //@line 785 "audioop.c"
      case 30: // $bb29
        var $82=HEAP[$size]; //@line 775 "audioop.c"
        var $83=$i; //@line 775 "audioop.c"
        var $84=($83) + ($82); //@line 775 "audioop.c"
        $i=$84; //@line 775 "audioop.c"
        var $85=HEAP[$len]; //@line 775 "audioop.c"
        var $86=$i; //@line 775 "audioop.c"
        var $87=($86) < ($85); //@line 775 "audioop.c"
        if ($87) { __label__ = 14; break; } else { __label__ = 31; break; } //@line 775 "audioop.c"
      case 31: // $bb31
        var $88=$rv; //@line 787 "audioop.c"
        $0=$88; //@line 787 "audioop.c"
        __label__ = 32; break; //@line 787 "audioop.c"
      case 32: // $bb32
        var $89=$0; //@line 757 "audioop.c"
        $retval=$89; //@line 757 "audioop.c"
        var $retval33=$retval; //@line 757 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval33; //@line 757 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_tomono($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val1;
        var $val2;
        var $fac1=__stackBase__+12;
        var $fac2=__stackBase__+20;
        var $fval;
        var $maxval;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val1=0; //@line 794 "audioop.c"
        $val2=0; //@line 794 "audioop.c"
        var $1=$args_addr; //@line 799 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str21, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$fac1,0,0,0,$fac2,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"double*",0,0,0,"double*",0,0,0], ALLOC_STACK)); //@line 799 "audioop.c"
        var $3=($2)==0; //@line 799 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 799 "audioop.c"
      case 1: // $bb
        $0=0; //@line 801 "audioop.c"
        __label__ = 41; break; //@line 801 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 802 "audioop.c"
        var $5=HEAP[$len]; //@line 802 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 802 "audioop.c"
        var $7=($6)==0; //@line 802 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 802 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 803 "audioop.c"
        __label__ = 41; break; //@line 803 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 804 "audioop.c"
        var $9=HEAP[$size]; //@line 804 "audioop.c"
        var $10=((($8)/($9))|0); //@line 804 "audioop.c"
        var $11=($10) & 1; //@line 804 "audioop.c"
        var $12=((($11)) & 255); //@line 804 "audioop.c"
        var $toBool=($12)!=0; //@line 804 "audioop.c"
        if ($toBool) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 804 "audioop.c"
      case 5: // $bb4
        var $13=HEAP[_AudioopError]; //@line 805 "audioop.c"
        _PyErr_SetString($13, __str1); //@line 805 "audioop.c"
        $0=0; //@line 806 "audioop.c"
        __label__ = 41; break; //@line 806 "audioop.c"
      case 6: // $bb5
        var $14=HEAP[$size]; //@line 809 "audioop.c"
        var $15=($14)==1; //@line 809 "audioop.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 809 "audioop.c"
      case 7: // $bb6
        $maxval=127; //@line 809 "audioop.c"
        __label__ = 13; break; //@line 809 "audioop.c"
      case 8: // $bb7
        var $16=HEAP[$size]; //@line 810 "audioop.c"
        var $17=($16)==2; //@line 810 "audioop.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 810 "audioop.c"
      case 9: // $bb8
        $maxval=32767; //@line 810 "audioop.c"
        __label__ = 13; break; //@line 810 "audioop.c"
      case 10: // $bb9
        var $18=HEAP[$size]; //@line 811 "audioop.c"
        var $19=($18)==4; //@line 811 "audioop.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 811 "audioop.c"
      case 11: // $bb10
        $maxval=2147483647; //@line 811 "audioop.c"
        __label__ = 13; break; //@line 811 "audioop.c"
      case 12: // $bb11
        var $20=HEAP[_AudioopError]; //@line 813 "audioop.c"
        _PyErr_SetString($20, __str); //@line 813 "audioop.c"
        $0=0; //@line 814 "audioop.c"
        __label__ = 41; break; //@line 814 "audioop.c"
      case 13: // $bb12
        var $21=HEAP[$len]; //@line 817 "audioop.c"
        var $22=((($21)/2)|0); //@line 817 "audioop.c"
        var $23=_PyString_FromStringAndSize(0, $22); //@line 817 "audioop.c"
        $rv=$23; //@line 817 "audioop.c"
        var $24=($23)==0; //@line 818 "audioop.c"
        if ($24) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 818 "audioop.c"
      case 14: // $bb13
        $0=0; //@line 819 "audioop.c"
        __label__ = 41; break; //@line 819 "audioop.c"
      case 15: // $bb14
        var $25=$rv; //@line 820 "audioop.c"
        var $26=_PyString_AsString($25); //@line 820 "audioop.c"
        $ncp=$26; //@line 820 "audioop.c"
        $i=0; //@line 823 "audioop.c"
        var $27=HEAP[$len]; //@line 823 "audioop.c"
        var $28=$i; //@line 823 "audioop.c"
        var $29=($28) < ($27); //@line 823 "audioop.c"
        if ($29) { __label__ = 16; break; } else { __label__ = 40; break; } //@line 823 "audioop.c"
      case 16: // $bb15
        var $30=HEAP[$size]; //@line 824 "audioop.c"
        var $31=($30)==1; //@line 824 "audioop.c"
        if ($31) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 824 "audioop.c"
      case 17: // $bb16
        var $32=HEAP[$cp]; //@line 824 "audioop.c"
        var $33=$i; //@line 824 "audioop.c"
        var $34=$32+$33; //@line 824 "audioop.c"
        var $35=HEAP[$34]; //@line 824 "audioop.c"
        var $36=($35); //@line 824 "audioop.c"
        $val1=$36; //@line 824 "audioop.c"
        __label__ = 22; break; //@line 824 "audioop.c"
      case 18: // $bb17
        var $37=HEAP[$size]; //@line 825 "audioop.c"
        var $38=($37)==2; //@line 825 "audioop.c"
        if ($38) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 825 "audioop.c"
      case 19: // $bb18
        var $39=HEAP[$cp]; //@line 825 "audioop.c"
        var $40=$i; //@line 825 "audioop.c"
        var $41=$39+$40; //@line 825 "audioop.c"
        var $42=$41; //@line 825 "audioop.c"
        var $43=HEAP[$42]; //@line 825 "audioop.c"
        var $44=($43); //@line 825 "audioop.c"
        $val1=$44; //@line 825 "audioop.c"
        __label__ = 22; break; //@line 825 "audioop.c"
      case 20: // $bb19
        var $45=HEAP[$size]; //@line 826 "audioop.c"
        var $46=($45)==4; //@line 826 "audioop.c"
        if ($46) { __lastLabel__ = 20; __label__ = 21; break; } else { __lastLabel__ = 20; __label__ = 23; break; } //@line 826 "audioop.c"
      case 21: // $bb20
        var $47=HEAP[$cp]; //@line 826 "audioop.c"
        var $48=$i; //@line 826 "audioop.c"
        var $49=$47+$48; //@line 826 "audioop.c"
        var $50=$49; //@line 826 "audioop.c"
        var $51=HEAP[$50]; //@line 826 "audioop.c"
        $val1=$51; //@line 826 "audioop.c"
        __label__ = 22; break; //@line 826 "audioop.c"
      case 22: // $bb21thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 22; __label__ = 23; break;
      case 23: // $bb21
        var $52=__lastLabel__ == 22 ? $_pr : ($45);
        var $53=($52)==1; //@line 827 "audioop.c"
        if ($53) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 827 "audioop.c"
      case 24: // $bb22
        var $54=HEAP[$cp]; //@line 827 "audioop.c"
        var $55=$i; //@line 827 "audioop.c"
        var $56=$54+$55; //@line 827 "audioop.c"
        var $57=$56+1; //@line 827 "audioop.c"
        var $58=HEAP[$57]; //@line 827 "audioop.c"
        var $59=($58); //@line 827 "audioop.c"
        $val2=$59; //@line 827 "audioop.c"
        __label__ = 29; break; //@line 827 "audioop.c"
      case 25: // $bb23
        var $60=HEAP[$size]; //@line 828 "audioop.c"
        var $61=($60)==2; //@line 828 "audioop.c"
        if ($61) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 828 "audioop.c"
      case 26: // $bb24
        var $62=HEAP[$cp]; //@line 828 "audioop.c"
        var $63=$i; //@line 828 "audioop.c"
        var $64=$62+$63; //@line 828 "audioop.c"
        var $65=$64+2; //@line 828 "audioop.c"
        var $66=$65; //@line 828 "audioop.c"
        var $67=HEAP[$66]; //@line 828 "audioop.c"
        var $68=($67); //@line 828 "audioop.c"
        $val2=$68; //@line 828 "audioop.c"
        __label__ = 29; break; //@line 828 "audioop.c"
      case 27: // $bb25
        var $69=HEAP[$size]; //@line 829 "audioop.c"
        var $70=($69)==4; //@line 829 "audioop.c"
        if ($70) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 829 "audioop.c"
      case 28: // $bb26
        var $71=HEAP[$cp]; //@line 829 "audioop.c"
        var $72=$i; //@line 829 "audioop.c"
        var $73=$71+$72; //@line 829 "audioop.c"
        var $74=$73+4; //@line 829 "audioop.c"
        var $75=$74; //@line 829 "audioop.c"
        var $76=HEAP[$75]; //@line 829 "audioop.c"
        $val2=$76; //@line 829 "audioop.c"
        __label__ = 29; break; //@line 829 "audioop.c"
      case 29: // $bb27
        var $77=$val1; //@line 830 "audioop.c"
        var $78=($77); //@line 830 "audioop.c"
        var $79=HEAP[$fac1]; //@line 830 "audioop.c"
        var $80=($78) * ($79); //@line 830 "audioop.c"
        var $81=$val2; //@line 830 "audioop.c"
        var $82=($81); //@line 830 "audioop.c"
        var $83=HEAP[$fac2]; //@line 830 "audioop.c"
        var $84=($82) * ($83); //@line 830 "audioop.c"
        var $85=($80) + ($84); //@line 830 "audioop.c"
        $fval=$85; //@line 830 "audioop.c"
        var $86=$fval; //@line 831 "audioop.c"
        var $87=$maxval; //@line 831 "audioop.c"
        var $88=($86) > ($87); //@line 831 "audioop.c"
        var $89=$maxval; //@line 831 "audioop.c"
        if ($88) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 831 "audioop.c"
      case 30: // $bb28
        $fval=$89; //@line 831 "audioop.c"
        __label__ = 33; break; //@line 831 "audioop.c"
      case 31: // $bb29
        var $90=0 - ($89); //@line 832 "audioop.c"
        var $91=$fval; //@line 832 "audioop.c"
        var $92=($90) > ($91); //@line 832 "audioop.c"
        if ($92) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 832 "audioop.c"
      case 32: // $bb30
        var $93=$maxval; //@line 832 "audioop.c"
        var $94=0 - ($93); //@line 832 "audioop.c"
        $fval=$94; //@line 832 "audioop.c"
        __label__ = 33; break; //@line 832 "audioop.c"
      case 33: // $bb31
        var $95=$fval; //@line 833 "audioop.c"
        var $96=((($95))|0); //@line 833 "audioop.c"
        $val1=$96; //@line 833 "audioop.c"
        var $97=HEAP[$size]; //@line 834 "audioop.c"
        var $98=($97)==1; //@line 834 "audioop.c"
        if ($98) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 834 "audioop.c"
      case 34: // $bb32
        var $99=$i; //@line 834 "audioop.c"
        var $100=((($99)/2)|0); //@line 834 "audioop.c"
        var $101=$val1; //@line 834 "audioop.c"
        var $102=((($101)) & 255); //@line 834 "audioop.c"
        var $103=$ncp; //@line 834 "audioop.c"
        var $104=$103+$100; //@line 834 "audioop.c"
        HEAP[$104]=$102; //@line 834 "audioop.c"
        __label__ = 39; break; //@line 834 "audioop.c"
      case 35: // $bb33
        var $105=HEAP[$size]; //@line 835 "audioop.c"
        var $106=($105)==2; //@line 835 "audioop.c"
        if ($106) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 835 "audioop.c"
      case 36: // $bb34
        var $107=$i; //@line 835 "audioop.c"
        var $108=((($107)/2)|0); //@line 835 "audioop.c"
        var $109=$ncp; //@line 835 "audioop.c"
        var $110=$109+$108; //@line 835 "audioop.c"
        var $111=$110; //@line 835 "audioop.c"
        var $112=$val1; //@line 835 "audioop.c"
        var $113=((($112)) & 65535); //@line 835 "audioop.c"
        HEAP[$111]=$113; //@line 835 "audioop.c"
        __label__ = 39; break; //@line 835 "audioop.c"
      case 37: // $bb35
        var $114=HEAP[$size]; //@line 836 "audioop.c"
        var $115=($114)==4; //@line 836 "audioop.c"
        if ($115) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 836 "audioop.c"
      case 38: // $bb36
        var $116=$i; //@line 836 "audioop.c"
        var $117=((($116)/2)|0); //@line 836 "audioop.c"
        var $118=$ncp; //@line 836 "audioop.c"
        var $119=$118+$117; //@line 836 "audioop.c"
        var $120=$119; //@line 836 "audioop.c"
        var $121=$val1; //@line 836 "audioop.c"
        HEAP[$120]=$121; //@line 836 "audioop.c"
        __label__ = 39; break; //@line 836 "audioop.c"
      case 39: // $bb37
        var $122=HEAP[$size]; //@line 823 "audioop.c"
        var $123=($122) * 2; //@line 823 "audioop.c"
        var $124=$i; //@line 823 "audioop.c"
        var $125=($123) + ($124); //@line 823 "audioop.c"
        $i=$125; //@line 823 "audioop.c"
        var $126=HEAP[$len]; //@line 823 "audioop.c"
        var $127=$i; //@line 823 "audioop.c"
        var $128=($127) < ($126); //@line 823 "audioop.c"
        if ($128) { __label__ = 16; break; } else { __label__ = 40; break; } //@line 823 "audioop.c"
      case 40: // $bb39
        var $129=$rv; //@line 838 "audioop.c"
        $0=$129; //@line 838 "audioop.c"
        __label__ = 41; break; //@line 838 "audioop.c"
      case 41: // $bb40
        var $130=$0; //@line 801 "audioop.c"
        $retval=$130; //@line 801 "audioop.c"
        var $retval41=$retval; //@line 801 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval41; //@line 801 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_tostereo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val1;
        var $val2;
        var $val;
        var $fac1=__stackBase__+12;
        var $fac2=__stackBase__+20;
        var $fval;
        var $maxval;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 845 "audioop.c"
        var $1=$args_addr; //@line 850 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str22, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$fac1,0,0,0,$fac2,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"double*",0,0,0,"double*",0,0,0], ALLOC_STACK)); //@line 850 "audioop.c"
        var $3=($2)==0; //@line 850 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 850 "audioop.c"
      case 1: // $bb
        $0=0; //@line 852 "audioop.c"
        __label__ = 45; break; //@line 852 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 853 "audioop.c"
        var $5=HEAP[$len]; //@line 853 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 853 "audioop.c"
        var $7=($6)==0; //@line 853 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 853 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 854 "audioop.c"
        __label__ = 45; break; //@line 854 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 856 "audioop.c"
        var $9=($8)==1; //@line 856 "audioop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 856 "audioop.c"
      case 5: // $bb4
        $maxval=127; //@line 856 "audioop.c"
        __label__ = 11; break; //@line 856 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$size]; //@line 857 "audioop.c"
        var $11=($10)==2; //@line 857 "audioop.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 857 "audioop.c"
      case 7: // $bb6
        $maxval=32767; //@line 857 "audioop.c"
        __label__ = 11; break; //@line 857 "audioop.c"
      case 8: // $bb7
        var $12=HEAP[$size]; //@line 858 "audioop.c"
        var $13=($12)==4; //@line 858 "audioop.c"
        if ($13) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 858 "audioop.c"
      case 9: // $bb8
        $maxval=2147483647; //@line 858 "audioop.c"
        __label__ = 11; break; //@line 858 "audioop.c"
      case 10: // $bb9
        var $14=HEAP[_AudioopError]; //@line 860 "audioop.c"
        _PyErr_SetString($14, __str); //@line 860 "audioop.c"
        $0=0; //@line 861 "audioop.c"
        __label__ = 45; break; //@line 861 "audioop.c"
      case 11: // $bb10
        var $15=HEAP[$len]; //@line 864 "audioop.c"
        var $16=($15) > 1073741823; //@line 864 "audioop.c"
        if ($16) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 864 "audioop.c"
      case 12: // $bb11
        var $17=HEAP[_PyExc_MemoryError]; //@line 865 "audioop.c"
        _PyErr_SetString($17, __str23); //@line 865 "audioop.c"
        $0=0; //@line 867 "audioop.c"
        __label__ = 45; break; //@line 867 "audioop.c"
      case 13: // $bb12
        var $18=HEAP[$len]; //@line 870 "audioop.c"
        var $19=($18) * 2; //@line 870 "audioop.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 870 "audioop.c"
        $rv=$20; //@line 870 "audioop.c"
        var $21=$rv; //@line 871 "audioop.c"
        var $22=($21)==0; //@line 871 "audioop.c"
        if ($22) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 871 "audioop.c"
      case 14: // $bb13
        $0=0; //@line 872 "audioop.c"
        __label__ = 45; break; //@line 872 "audioop.c"
      case 15: // $bb14
        var $23=$rv; //@line 873 "audioop.c"
        var $24=_PyString_AsString($23); //@line 873 "audioop.c"
        $ncp=$24; //@line 873 "audioop.c"
        $i=0; //@line 876 "audioop.c"
        var $25=HEAP[$len]; //@line 876 "audioop.c"
        var $26=$i; //@line 876 "audioop.c"
        var $27=($26) < ($25); //@line 876 "audioop.c"
        if ($27) { __label__ = 16; break; } else { __label__ = 44; break; } //@line 876 "audioop.c"
      case 16: // $bb15
        var $28=HEAP[$size]; //@line 877 "audioop.c"
        var $29=($28)==1; //@line 877 "audioop.c"
        if ($29) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 877 "audioop.c"
      case 17: // $bb16
        var $30=HEAP[$cp]; //@line 877 "audioop.c"
        var $31=$i; //@line 877 "audioop.c"
        var $32=$30+$31; //@line 877 "audioop.c"
        var $33=HEAP[$32]; //@line 877 "audioop.c"
        var $34=($33); //@line 877 "audioop.c"
        $val=$34; //@line 877 "audioop.c"
        __label__ = 22; break; //@line 877 "audioop.c"
      case 18: // $bb17
        var $35=HEAP[$size]; //@line 878 "audioop.c"
        var $36=($35)==2; //@line 878 "audioop.c"
        if ($36) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 878 "audioop.c"
      case 19: // $bb18
        var $37=HEAP[$cp]; //@line 878 "audioop.c"
        var $38=$i; //@line 878 "audioop.c"
        var $39=$37+$38; //@line 878 "audioop.c"
        var $40=$39; //@line 878 "audioop.c"
        var $41=HEAP[$40]; //@line 878 "audioop.c"
        var $42=($41); //@line 878 "audioop.c"
        $val=$42; //@line 878 "audioop.c"
        __label__ = 22; break; //@line 878 "audioop.c"
      case 20: // $bb19
        var $43=HEAP[$size]; //@line 879 "audioop.c"
        var $44=($43)==4; //@line 879 "audioop.c"
        if ($44) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 879 "audioop.c"
      case 21: // $bb20
        var $45=HEAP[$cp]; //@line 879 "audioop.c"
        var $46=$i; //@line 879 "audioop.c"
        var $47=$45+$46; //@line 879 "audioop.c"
        var $48=$47; //@line 879 "audioop.c"
        var $49=HEAP[$48]; //@line 879 "audioop.c"
        $val=$49; //@line 879 "audioop.c"
        __label__ = 22; break; //@line 879 "audioop.c"
      case 22: // $bb21
        var $50=$val; //@line 881 "audioop.c"
        var $51=($50); //@line 881 "audioop.c"
        var $52=HEAP[$fac1]; //@line 881 "audioop.c"
        var $53=($51) * ($52); //@line 881 "audioop.c"
        $fval=$53; //@line 881 "audioop.c"
        var $54=$fval; //@line 882 "audioop.c"
        var $55=$maxval; //@line 882 "audioop.c"
        var $56=($54) > ($55); //@line 882 "audioop.c"
        var $57=$maxval; //@line 882 "audioop.c"
        if ($56) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 882 "audioop.c"
      case 23: // $bb22
        $fval=$57; //@line 882 "audioop.c"
        __label__ = 26; break; //@line 882 "audioop.c"
      case 24: // $bb23
        var $58=0 - ($57); //@line 883 "audioop.c"
        var $59=$fval; //@line 883 "audioop.c"
        var $60=($58) > ($59); //@line 883 "audioop.c"
        if ($60) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 883 "audioop.c"
      case 25: // $bb24
        var $61=$maxval; //@line 883 "audioop.c"
        var $62=0 - ($61); //@line 883 "audioop.c"
        $fval=$62; //@line 883 "audioop.c"
        __label__ = 26; break; //@line 883 "audioop.c"
      case 26: // $bb25
        var $63=$fval; //@line 884 "audioop.c"
        var $64=((($63))|0); //@line 884 "audioop.c"
        $val1=$64; //@line 884 "audioop.c"
        var $65=$val; //@line 886 "audioop.c"
        var $66=($65); //@line 886 "audioop.c"
        var $67=HEAP[$fac2]; //@line 886 "audioop.c"
        var $68=($66) * ($67); //@line 886 "audioop.c"
        $fval=$68; //@line 886 "audioop.c"
        var $69=$fval; //@line 887 "audioop.c"
        var $70=$maxval; //@line 887 "audioop.c"
        var $71=($69) > ($70); //@line 887 "audioop.c"
        var $72=$maxval; //@line 887 "audioop.c"
        if ($71) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 887 "audioop.c"
      case 27: // $bb26
        $fval=$72; //@line 887 "audioop.c"
        __label__ = 30; break; //@line 887 "audioop.c"
      case 28: // $bb27
        var $73=0 - ($72); //@line 888 "audioop.c"
        var $74=$fval; //@line 888 "audioop.c"
        var $75=($73) > ($74); //@line 888 "audioop.c"
        if ($75) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 888 "audioop.c"
      case 29: // $bb28
        var $76=$maxval; //@line 888 "audioop.c"
        var $77=0 - ($76); //@line 888 "audioop.c"
        $fval=$77; //@line 888 "audioop.c"
        __label__ = 30; break; //@line 888 "audioop.c"
      case 30: // $bb29
        var $78=$fval; //@line 889 "audioop.c"
        var $79=((($78))|0); //@line 889 "audioop.c"
        $val2=$79; //@line 889 "audioop.c"
        var $80=HEAP[$size]; //@line 891 "audioop.c"
        var $81=($80)==1; //@line 891 "audioop.c"
        if ($81) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 891 "audioop.c"
      case 31: // $bb30
        var $82=$i; //@line 891 "audioop.c"
        var $83=($82) * 2; //@line 891 "audioop.c"
        var $84=$val1; //@line 891 "audioop.c"
        var $85=((($84)) & 255); //@line 891 "audioop.c"
        var $86=$ncp; //@line 891 "audioop.c"
        var $87=$86+$83; //@line 891 "audioop.c"
        HEAP[$87]=$85; //@line 891 "audioop.c"
        __label__ = 36; break; //@line 891 "audioop.c"
      case 32: // $bb31
        var $88=HEAP[$size]; //@line 892 "audioop.c"
        var $89=($88)==2; //@line 892 "audioop.c"
        if ($89) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 892 "audioop.c"
      case 33: // $bb32
        var $90=$i; //@line 892 "audioop.c"
        var $91=($90) * 2; //@line 892 "audioop.c"
        var $92=$ncp; //@line 892 "audioop.c"
        var $93=$92+$91; //@line 892 "audioop.c"
        var $94=$93; //@line 892 "audioop.c"
        var $95=$val1; //@line 892 "audioop.c"
        var $96=((($95)) & 65535); //@line 892 "audioop.c"
        HEAP[$94]=$96; //@line 892 "audioop.c"
        __label__ = 36; break; //@line 892 "audioop.c"
      case 34: // $bb33
        var $97=HEAP[$size]; //@line 893 "audioop.c"
        var $98=($97)==4; //@line 893 "audioop.c"
        if ($98) { __lastLabel__ = 34; __label__ = 35; break; } else { __lastLabel__ = 34; __label__ = 37; break; } //@line 893 "audioop.c"
      case 35: // $bb34
        var $99=$i; //@line 893 "audioop.c"
        var $100=($99) * 2; //@line 893 "audioop.c"
        var $101=$ncp; //@line 893 "audioop.c"
        var $102=$101+$100; //@line 893 "audioop.c"
        var $103=$102; //@line 893 "audioop.c"
        var $104=$val1; //@line 893 "audioop.c"
        HEAP[$103]=$104; //@line 893 "audioop.c"
        __label__ = 36; break; //@line 893 "audioop.c"
      case 36: // $bb35thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 36; __label__ = 37; break;
      case 37: // $bb35
        var $105=__lastLabel__ == 36 ? $_pr : ($97);
        var $106=($105)==1; //@line 895 "audioop.c"
        if ($106) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 895 "audioop.c"
      case 38: // $bb36
        var $107=$i; //@line 895 "audioop.c"
        var $108=($107) * 2; //@line 895 "audioop.c"
        var $109=$ncp; //@line 895 "audioop.c"
        var $110=$109+$108; //@line 895 "audioop.c"
        var $111=$val2; //@line 895 "audioop.c"
        var $112=((($111)) & 255); //@line 895 "audioop.c"
        var $113=$110+1; //@line 895 "audioop.c"
        HEAP[$113]=$112; //@line 895 "audioop.c"
        __label__ = 43; break; //@line 895 "audioop.c"
      case 39: // $bb37
        var $114=HEAP[$size]; //@line 896 "audioop.c"
        var $115=($114)==2; //@line 896 "audioop.c"
        if ($115) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 896 "audioop.c"
      case 40: // $bb38
        var $116=$i; //@line 896 "audioop.c"
        var $117=($116) * 2; //@line 896 "audioop.c"
        var $118=$ncp; //@line 896 "audioop.c"
        var $119=$118+$117; //@line 896 "audioop.c"
        var $120=$119+2; //@line 896 "audioop.c"
        var $121=$120; //@line 896 "audioop.c"
        var $122=$val2; //@line 896 "audioop.c"
        var $123=((($122)) & 65535); //@line 896 "audioop.c"
        HEAP[$121]=$123; //@line 896 "audioop.c"
        __label__ = 43; break; //@line 896 "audioop.c"
      case 41: // $bb39
        var $124=HEAP[$size]; //@line 897 "audioop.c"
        var $125=($124)==4; //@line 897 "audioop.c"
        if ($125) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 897 "audioop.c"
      case 42: // $bb40
        var $126=$i; //@line 897 "audioop.c"
        var $127=($126) * 2; //@line 897 "audioop.c"
        var $128=$ncp; //@line 897 "audioop.c"
        var $129=$128+$127; //@line 897 "audioop.c"
        var $130=$129+4; //@line 897 "audioop.c"
        var $131=$130; //@line 897 "audioop.c"
        var $132=$val2; //@line 897 "audioop.c"
        HEAP[$131]=$132; //@line 897 "audioop.c"
        __label__ = 43; break; //@line 897 "audioop.c"
      case 43: // $bb41
        var $133=HEAP[$size]; //@line 876 "audioop.c"
        var $134=$i; //@line 876 "audioop.c"
        var $135=($134) + ($133); //@line 876 "audioop.c"
        $i=$135; //@line 876 "audioop.c"
        var $136=HEAP[$len]; //@line 876 "audioop.c"
        var $137=$i; //@line 876 "audioop.c"
        var $138=($137) < ($136); //@line 876 "audioop.c"
        if ($138) { __label__ = 16; break; } else { __label__ = 44; break; } //@line 876 "audioop.c"
      case 44: // $bb43
        var $139=$rv; //@line 899 "audioop.c"
        $0=$139; //@line 899 "audioop.c"
        __label__ = 45; break; //@line 899 "audioop.c"
      case 45: // $bb44
        var $140=$0; //@line 852 "audioop.c"
        $retval=$140; //@line 852 "audioop.c"
        var $retval45=$retval; //@line 852 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 852 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_add($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_286;
        var $0;
        var $cp1=__stackBase__;
        var $cp2=__stackBase__+4;
        var $ncp;
        var $len1=__stackBase__+8;
        var $len2=__stackBase__+12;
        var $size=__stackBase__+16;
        var $val1;
        var $val2;
        var $maxval;
        var $newval;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val1=0; //@line 906 "audioop.c"
        $val2=0; //@line 906 "audioop.c"
        var $1=$args_addr; //@line 910 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str24, allocate([$cp1,0,0,0,$len1,0,0,0,$cp2,0,0,0,$len2,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 910 "audioop.c"
        var $3=($2)==0; //@line 910 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 910 "audioop.c"
      case 1: // $bb
        $0=0; //@line 912 "audioop.c"
        __label__ = 49; break; //@line 912 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 913 "audioop.c"
        var $5=HEAP[$len1]; //@line 913 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 913 "audioop.c"
        var $7=($6)==0; //@line 913 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 913 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 914 "audioop.c"
        __label__ = 49; break; //@line 914 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len1]; //@line 915 "audioop.c"
        var $9=HEAP[$len2]; //@line 915 "audioop.c"
        var $10=($8)!=($9); //@line 915 "audioop.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 915 "audioop.c"
      case 5: // $bb4
        var $11=HEAP[_AudioopError]; //@line 916 "audioop.c"
        _PyErr_SetString($11, __str25); //@line 916 "audioop.c"
        $0=0; //@line 917 "audioop.c"
        __label__ = 49; break; //@line 917 "audioop.c"
      case 6: // $bb5
        var $12=HEAP[$size]; //@line 920 "audioop.c"
        var $13=($12)==1; //@line 920 "audioop.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 920 "audioop.c"
      case 7: // $bb6
        $maxval=127; //@line 920 "audioop.c"
        __label__ = 13; break; //@line 920 "audioop.c"
      case 8: // $bb7
        var $14=HEAP[$size]; //@line 921 "audioop.c"
        var $15=($14)==2; //@line 921 "audioop.c"
        if ($15) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 921 "audioop.c"
      case 9: // $bb8
        $maxval=32767; //@line 921 "audioop.c"
        __label__ = 13; break; //@line 921 "audioop.c"
      case 10: // $bb9
        var $16=HEAP[$size]; //@line 922 "audioop.c"
        var $17=($16)==4; //@line 922 "audioop.c"
        if ($17) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 922 "audioop.c"
      case 11: // $bb10
        $maxval=2147483647; //@line 922 "audioop.c"
        __label__ = 13; break; //@line 922 "audioop.c"
      case 12: // $bb11
        var $18=HEAP[_AudioopError]; //@line 924 "audioop.c"
        _PyErr_SetString($18, __str); //@line 924 "audioop.c"
        $0=0; //@line 925 "audioop.c"
        __label__ = 49; break; //@line 925 "audioop.c"
      case 13: // $bb12
        var $19=HEAP[$len1]; //@line 928 "audioop.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 928 "audioop.c"
        $rv=$20; //@line 928 "audioop.c"
        var $21=($20)==0; //@line 929 "audioop.c"
        if ($21) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 929 "audioop.c"
      case 14: // $bb13
        $0=0; //@line 930 "audioop.c"
        __label__ = 49; break; //@line 930 "audioop.c"
      case 15: // $bb14
        var $22=$rv; //@line 931 "audioop.c"
        var $23=_PyString_AsString($22); //@line 931 "audioop.c"
        $ncp=$23; //@line 931 "audioop.c"
        $i=0; //@line 933 "audioop.c"
        var $24=HEAP[$len1]; //@line 933 "audioop.c"
        var $25=$i; //@line 933 "audioop.c"
        var $26=($25) < ($24); //@line 933 "audioop.c"
        if ($26) { __label__ = 16; break; } else { __label__ = 48; break; } //@line 933 "audioop.c"
      case 16: // $bb15
        var $27=HEAP[$size]; //@line 934 "audioop.c"
        var $28=($27)==1; //@line 934 "audioop.c"
        if ($28) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 934 "audioop.c"
      case 17: // $bb16
        var $29=HEAP[$cp1]; //@line 934 "audioop.c"
        var $30=$i; //@line 934 "audioop.c"
        var $31=$29+$30; //@line 934 "audioop.c"
        var $32=HEAP[$31]; //@line 934 "audioop.c"
        var $33=($32); //@line 934 "audioop.c"
        $val1=$33; //@line 934 "audioop.c"
        __label__ = 22; break; //@line 934 "audioop.c"
      case 18: // $bb17
        var $34=HEAP[$size]; //@line 935 "audioop.c"
        var $35=($34)==2; //@line 935 "audioop.c"
        if ($35) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 935 "audioop.c"
      case 19: // $bb18
        var $36=HEAP[$cp1]; //@line 935 "audioop.c"
        var $37=$i; //@line 935 "audioop.c"
        var $38=$36+$37; //@line 935 "audioop.c"
        var $39=$38; //@line 935 "audioop.c"
        var $40=HEAP[$39]; //@line 935 "audioop.c"
        var $41=($40); //@line 935 "audioop.c"
        $val1=$41; //@line 935 "audioop.c"
        __label__ = 22; break; //@line 935 "audioop.c"
      case 20: // $bb19
        var $42=HEAP[$size]; //@line 936 "audioop.c"
        var $43=($42)==4; //@line 936 "audioop.c"
        if ($43) { __lastLabel__ = 20; __label__ = 21; break; } else { __lastLabel__ = 20; __label__ = 23; break; } //@line 936 "audioop.c"
      case 21: // $bb20
        var $44=HEAP[$cp1]; //@line 936 "audioop.c"
        var $45=$i; //@line 936 "audioop.c"
        var $46=$44+$45; //@line 936 "audioop.c"
        var $47=$46; //@line 936 "audioop.c"
        var $48=HEAP[$47]; //@line 936 "audioop.c"
        $val1=$48; //@line 936 "audioop.c"
        __label__ = 22; break; //@line 936 "audioop.c"
      case 22: // $bb21thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 22; __label__ = 23; break;
      case 23: // $bb21
        var $49=__lastLabel__ == 22 ? $_pr : ($42);
        var $50=($49)==1; //@line 938 "audioop.c"
        if ($50) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 938 "audioop.c"
      case 24: // $bb22
        var $51=HEAP[$cp2]; //@line 938 "audioop.c"
        var $52=$i; //@line 938 "audioop.c"
        var $53=$51+$52; //@line 938 "audioop.c"
        var $54=HEAP[$53]; //@line 938 "audioop.c"
        var $55=($54); //@line 938 "audioop.c"
        $val2=$55; //@line 938 "audioop.c"
        __label__ = 29; break; //@line 938 "audioop.c"
      case 25: // $bb23
        var $56=HEAP[$size]; //@line 939 "audioop.c"
        var $57=($56)==2; //@line 939 "audioop.c"
        if ($57) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 939 "audioop.c"
      case 26: // $bb24
        var $58=HEAP[$cp2]; //@line 939 "audioop.c"
        var $59=$i; //@line 939 "audioop.c"
        var $60=$58+$59; //@line 939 "audioop.c"
        var $61=$60; //@line 939 "audioop.c"
        var $62=HEAP[$61]; //@line 939 "audioop.c"
        var $63=($62); //@line 939 "audioop.c"
        $val2=$63; //@line 939 "audioop.c"
        __label__ = 29; break; //@line 939 "audioop.c"
      case 27: // $bb25
        var $64=HEAP[$size]; //@line 940 "audioop.c"
        var $65=($64)==4; //@line 940 "audioop.c"
        if ($65) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 940 "audioop.c"
      case 28: // $bb26
        var $66=HEAP[$cp2]; //@line 940 "audioop.c"
        var $67=$i; //@line 940 "audioop.c"
        var $68=$66+$67; //@line 940 "audioop.c"
        var $69=$68; //@line 940 "audioop.c"
        var $70=HEAP[$69]; //@line 940 "audioop.c"
        $val2=$70; //@line 940 "audioop.c"
        __label__ = 29; break; //@line 940 "audioop.c"
      case 29: // $bb27
        var $71=$val1; //@line 942 "audioop.c"
        var $72=$val2; //@line 942 "audioop.c"
        var $73=($72) + ($71); //@line 942 "audioop.c"
        $newval=$73; //@line 942 "audioop.c"
        var $74=$newval; //@line 944 "audioop.c"
        var $75=$maxval; //@line 944 "audioop.c"
        var $76=($74) > ($75); //@line 944 "audioop.c"
        var $77=$maxval; //@line 944 "audioop.c"
        if ($76) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 944 "audioop.c"
      case 30: // $bb28
        $newval=$77; //@line 944 "audioop.c"
        __label__ = 40; break; //@line 944 "audioop.c"
      case 31: // $bb29
        var $78=0 - ($77); //@line 945 "audioop.c"
        var $79=$newval; //@line 945 "audioop.c"
        var $80=($78) > ($79); //@line 945 "audioop.c"
        if ($80) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 945 "audioop.c"
      case 32: // $bb30
        var $81=$maxval; //@line 945 "audioop.c"
        var $82=0 - ($81); //@line 945 "audioop.c"
        $newval=$82; //@line 945 "audioop.c"
        __label__ = 40; break; //@line 945 "audioop.c"
      case 33: // $bb31
        var $83=HEAP[$size]; //@line 946 "audioop.c"
        var $84=($83)==4; //@line 946 "audioop.c"
        if ($84) { __lastLabel__ = 33; __label__ = 34; break; } else { __lastLabel__ = 33; __label__ = 41; break; } //@line 946 "audioop.c"
      case 34: // $bb32
        var $85=$newval; //@line 946 "audioop.c"
        var $86=$val1; //@line 946 "audioop.c"
        var $87=($86) ^ ($85); //@line 946 "audioop.c"
        var $88=($87) < 0; //@line 946 "audioop.c"
        if ($88) { __label__ = 35; break; } else { __label__ = 40; break; } //@line 946 "audioop.c"
      case 35: // $bb33
        var $89=$newval; //@line 946 "audioop.c"
        var $90=$val2; //@line 946 "audioop.c"
        var $91=($90) ^ ($89); //@line 946 "audioop.c"
        var $92=($91) < 0; //@line 946 "audioop.c"
        if ($92) { __label__ = 36; break; } else { __label__ = 40; break; } //@line 946 "audioop.c"
      case 36: // $bb34
        var $93=$val1; //@line 947 "audioop.c"
        var $94=($93) <= 0; //@line 947 "audioop.c"
        var $95=$maxval; //@line 947 "audioop.c"
        if ($94) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 947 "audioop.c"
      case 37: // $bb35
        var $96=0 - ($95); //@line 947 "audioop.c"
        $iftmp_286=$96; //@line 947 "audioop.c"
        __label__ = 39; break; //@line 947 "audioop.c"
      case 38: // $bb36
        $iftmp_286=$95; //@line 947 "audioop.c"
        __label__ = 39; break; //@line 947 "audioop.c"
      case 39: // $bb37
        var $97=$iftmp_286; //@line 947 "audioop.c"
        $newval=$97; //@line 947 "audioop.c"
        __label__ = 40; break; //@line 947 "audioop.c"
      case 40: // $bb38thread_pre_split
        var $_pr1=HEAP[$size];
        __lastLabel__ = 40; __label__ = 41; break;
      case 41: // $bb38
        var $98=__lastLabel__ == 40 ? $_pr1 : ($83);
        var $99=($98)==1; //@line 949 "audioop.c"
        if ($99) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 949 "audioop.c"
      case 42: // $bb39
        var $100=$newval; //@line 949 "audioop.c"
        var $101=((($100)) & 255); //@line 949 "audioop.c"
        var $102=$ncp; //@line 949 "audioop.c"
        var $103=$i; //@line 949 "audioop.c"
        var $104=$102+$103; //@line 949 "audioop.c"
        HEAP[$104]=$101; //@line 949 "audioop.c"
        __label__ = 47; break; //@line 949 "audioop.c"
      case 43: // $bb40
        var $105=HEAP[$size]; //@line 950 "audioop.c"
        var $106=($105)==2; //@line 950 "audioop.c"
        if ($106) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 950 "audioop.c"
      case 44: // $bb41
        var $107=$ncp; //@line 950 "audioop.c"
        var $108=$i; //@line 950 "audioop.c"
        var $109=$107+$108; //@line 950 "audioop.c"
        var $110=$109; //@line 950 "audioop.c"
        var $111=$newval; //@line 950 "audioop.c"
        var $112=((($111)) & 65535); //@line 950 "audioop.c"
        HEAP[$110]=$112; //@line 950 "audioop.c"
        __label__ = 47; break; //@line 950 "audioop.c"
      case 45: // $bb42
        var $113=HEAP[$size]; //@line 951 "audioop.c"
        var $114=($113)==4; //@line 951 "audioop.c"
        if ($114) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 951 "audioop.c"
      case 46: // $bb43
        var $115=$ncp; //@line 951 "audioop.c"
        var $116=$i; //@line 951 "audioop.c"
        var $117=$115+$116; //@line 951 "audioop.c"
        var $118=$117; //@line 951 "audioop.c"
        var $119=$newval; //@line 951 "audioop.c"
        HEAP[$118]=$119; //@line 951 "audioop.c"
        __label__ = 47; break; //@line 951 "audioop.c"
      case 47: // $bb44
        var $120=HEAP[$size]; //@line 933 "audioop.c"
        var $121=$i; //@line 933 "audioop.c"
        var $122=($121) + ($120); //@line 933 "audioop.c"
        $i=$122; //@line 933 "audioop.c"
        var $123=HEAP[$len1]; //@line 933 "audioop.c"
        var $124=$i; //@line 933 "audioop.c"
        var $125=($124) < ($123); //@line 933 "audioop.c"
        if ($125) { __label__ = 16; break; } else { __label__ = 48; break; } //@line 933 "audioop.c"
      case 48: // $bb46
        var $126=$rv; //@line 953 "audioop.c"
        $0=$126; //@line 953 "audioop.c"
        __label__ = 49; break; //@line 953 "audioop.c"
      case 49: // $bb47
        var $127=$0; //@line 912 "audioop.c"
        $retval=$127; //@line 912 "audioop.c"
        var $retval48=$retval; //@line 912 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval48; //@line 912 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_bias($self, $args) {
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
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        var $bias=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 960 "audioop.c"
        var $1=$args_addr; //@line 965 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str26, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$bias,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 965 "audioop.c"
        var $3=($2)==0; //@line 965 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 965 "audioop.c"
      case 1: // $bb
        $0=0; //@line 967 "audioop.c"
        __label__ = 22; break; //@line 967 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 969 "audioop.c"
        var $5=HEAP[$len]; //@line 969 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 969 "audioop.c"
        var $7=($6)==0; //@line 969 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 969 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 970 "audioop.c"
        __label__ = 22; break; //@line 970 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 972 "audioop.c"
        var $9=_PyString_FromStringAndSize(0, $8); //@line 972 "audioop.c"
        $rv=$9; //@line 972 "audioop.c"
        var $10=$rv; //@line 973 "audioop.c"
        var $11=($10)==0; //@line 973 "audioop.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 973 "audioop.c"
      case 5: // $bb4
        $0=0; //@line 974 "audioop.c"
        __label__ = 22; break; //@line 974 "audioop.c"
      case 6: // $bb5
        var $12=$rv; //@line 975 "audioop.c"
        var $13=_PyString_AsString($12); //@line 975 "audioop.c"
        $ncp=$13; //@line 975 "audioop.c"
        $i=0; //@line 978 "audioop.c"
        var $14=HEAP[$len]; //@line 978 "audioop.c"
        var $15=$i; //@line 978 "audioop.c"
        var $16=($15) < ($14); //@line 978 "audioop.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 21; break; } //@line 978 "audioop.c"
      case 7: // $bb6
        var $17=HEAP[$size]; //@line 979 "audioop.c"
        var $18=($17)==1; //@line 979 "audioop.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 979 "audioop.c"
      case 8: // $bb7
        var $19=HEAP[$cp]; //@line 979 "audioop.c"
        var $20=$i; //@line 979 "audioop.c"
        var $21=$19+$20; //@line 979 "audioop.c"
        var $22=HEAP[$21]; //@line 979 "audioop.c"
        var $23=($22); //@line 979 "audioop.c"
        $val=$23; //@line 979 "audioop.c"
        __label__ = 13; break; //@line 979 "audioop.c"
      case 9: // $bb8
        var $24=HEAP[$size]; //@line 980 "audioop.c"
        var $25=($24)==2; //@line 980 "audioop.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 980 "audioop.c"
      case 10: // $bb9
        var $26=HEAP[$cp]; //@line 980 "audioop.c"
        var $27=$i; //@line 980 "audioop.c"
        var $28=$26+$27; //@line 980 "audioop.c"
        var $29=$28; //@line 980 "audioop.c"
        var $30=HEAP[$29]; //@line 980 "audioop.c"
        var $31=($30); //@line 980 "audioop.c"
        $val=$31; //@line 980 "audioop.c"
        __label__ = 13; break; //@line 980 "audioop.c"
      case 11: // $bb10
        var $32=HEAP[$size]; //@line 981 "audioop.c"
        var $33=($32)==4; //@line 981 "audioop.c"
        if ($33) { __lastLabel__ = 11; __label__ = 12; break; } else { __lastLabel__ = 11; __label__ = 14; break; } //@line 981 "audioop.c"
      case 12: // $bb11
        var $34=HEAP[$cp]; //@line 981 "audioop.c"
        var $35=$i; //@line 981 "audioop.c"
        var $36=$34+$35; //@line 981 "audioop.c"
        var $37=$36; //@line 981 "audioop.c"
        var $38=HEAP[$37]; //@line 981 "audioop.c"
        $val=$38; //@line 981 "audioop.c"
        __label__ = 13; break; //@line 981 "audioop.c"
      case 13: // $bb12thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 13; __label__ = 14; break;
      case 14: // $bb12
        var $39=__lastLabel__ == 13 ? $_pr : ($32);
        var $40=($39)==1; //@line 983 "audioop.c"
        if ($40) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 983 "audioop.c"
      case 15: // $bb13
        var $41=$val; //@line 983 "audioop.c"
        var $42=((($41)) & 255); //@line 983 "audioop.c"
        var $43=HEAP[$bias]; //@line 983 "audioop.c"
        var $44=((($43)) & 255); //@line 983 "audioop.c"
        var $45=($44) + ($42); //@line 983 "audioop.c"
        var $46=$ncp; //@line 983 "audioop.c"
        var $47=$i; //@line 983 "audioop.c"
        var $48=$46+$47; //@line 983 "audioop.c"
        HEAP[$48]=$45; //@line 983 "audioop.c"
        __label__ = 20; break; //@line 983 "audioop.c"
      case 16: // $bb14
        var $49=HEAP[$size]; //@line 984 "audioop.c"
        var $50=($49)==2; //@line 984 "audioop.c"
        if ($50) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 984 "audioop.c"
      case 17: // $bb15
        var $51=$ncp; //@line 984 "audioop.c"
        var $52=$i; //@line 984 "audioop.c"
        var $53=$51+$52; //@line 984 "audioop.c"
        var $54=$53; //@line 984 "audioop.c"
        var $55=$val; //@line 984 "audioop.c"
        var $56=((($55)) & 65535); //@line 984 "audioop.c"
        var $57=HEAP[$bias]; //@line 984 "audioop.c"
        var $58=((($57)) & 65535); //@line 984 "audioop.c"
        var $59=($58) + ($56); //@line 984 "audioop.c"
        HEAP[$54]=$59; //@line 984 "audioop.c"
        __label__ = 20; break; //@line 984 "audioop.c"
      case 18: // $bb16
        var $60=HEAP[$size]; //@line 985 "audioop.c"
        var $61=($60)==4; //@line 985 "audioop.c"
        if ($61) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 985 "audioop.c"
      case 19: // $bb17
        var $62=$ncp; //@line 985 "audioop.c"
        var $63=$i; //@line 985 "audioop.c"
        var $64=$62+$63; //@line 985 "audioop.c"
        var $65=$64; //@line 985 "audioop.c"
        var $66=HEAP[$bias]; //@line 985 "audioop.c"
        var $67=$val; //@line 985 "audioop.c"
        var $68=($67) + ($66); //@line 985 "audioop.c"
        HEAP[$65]=$68; //@line 985 "audioop.c"
        __label__ = 20; break; //@line 985 "audioop.c"
      case 20: // $bb18
        var $69=HEAP[$size]; //@line 978 "audioop.c"
        var $70=$i; //@line 978 "audioop.c"
        var $71=($70) + ($69); //@line 978 "audioop.c"
        $i=$71; //@line 978 "audioop.c"
        var $72=HEAP[$len]; //@line 978 "audioop.c"
        var $73=$i; //@line 978 "audioop.c"
        var $74=($73) < ($72); //@line 978 "audioop.c"
        if ($74) { __label__ = 7; break; } else { __label__ = 21; break; } //@line 978 "audioop.c"
      case 21: // $bb20
        var $75=$rv; //@line 987 "audioop.c"
        $0=$75; //@line 987 "audioop.c"
        __label__ = 22; break; //@line 987 "audioop.c"
      case 22: // $bb21
        var $76=$0; //@line 967 "audioop.c"
        $retval=$76; //@line 967 "audioop.c"
        var $retval22=$retval; //@line 967 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 967 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_reverse($self, $args) {
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
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        var $j;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 995 "audioop.c"
        var $1=$args_addr; //@line 999 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str27, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 999 "audioop.c"
        var $3=($2)==0; //@line 999 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 999 "audioop.c"
      case 1: // $bb
        $0=0; //@line 1001 "audioop.c"
        __label__ = 22; break; //@line 1001 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1003 "audioop.c"
        var $5=HEAP[$len]; //@line 1003 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1003 "audioop.c"
        var $7=($6)==0; //@line 1003 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1003 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 1004 "audioop.c"
        __label__ = 22; break; //@line 1004 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 1006 "audioop.c"
        var $9=_PyString_FromStringAndSize(0, $8); //@line 1006 "audioop.c"
        $rv=$9; //@line 1006 "audioop.c"
        var $10=$rv; //@line 1007 "audioop.c"
        var $11=($10)==0; //@line 1007 "audioop.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1007 "audioop.c"
      case 5: // $bb4
        $0=0; //@line 1008 "audioop.c"
        __label__ = 22; break; //@line 1008 "audioop.c"
      case 6: // $bb5
        var $12=$rv; //@line 1009 "audioop.c"
        var $13=_PyString_AsString($12); //@line 1009 "audioop.c"
        $ncp=$13; //@line 1009 "audioop.c"
        $i=0; //@line 1011 "audioop.c"
        var $14=HEAP[$len]; //@line 1011 "audioop.c"
        var $15=$i; //@line 1011 "audioop.c"
        var $16=($15) < ($14); //@line 1011 "audioop.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 21; break; } //@line 1011 "audioop.c"
      case 7: // $bb6
        var $17=HEAP[$size]; //@line 1012 "audioop.c"
        var $18=($17)==1; //@line 1012 "audioop.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1012 "audioop.c"
      case 8: // $bb7
        var $19=HEAP[$cp]; //@line 1012 "audioop.c"
        var $20=$i; //@line 1012 "audioop.c"
        var $21=$19+$20; //@line 1012 "audioop.c"
        var $22=HEAP[$21]; //@line 1012 "audioop.c"
        var $23=($22); //@line 1012 "audioop.c"
        var $24=($23) << 8; //@line 1012 "audioop.c"
        $val=$24; //@line 1012 "audioop.c"
        __label__ = 13; break; //@line 1012 "audioop.c"
      case 9: // $bb8
        var $25=HEAP[$size]; //@line 1013 "audioop.c"
        var $26=($25)==2; //@line 1013 "audioop.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1013 "audioop.c"
      case 10: // $bb9
        var $27=HEAP[$cp]; //@line 1013 "audioop.c"
        var $28=$i; //@line 1013 "audioop.c"
        var $29=$27+$28; //@line 1013 "audioop.c"
        var $30=$29; //@line 1013 "audioop.c"
        var $31=HEAP[$30]; //@line 1013 "audioop.c"
        var $32=($31); //@line 1013 "audioop.c"
        $val=$32; //@line 1013 "audioop.c"
        __label__ = 13; break; //@line 1013 "audioop.c"
      case 11: // $bb10
        var $33=HEAP[$size]; //@line 1014 "audioop.c"
        var $34=($33)==4; //@line 1014 "audioop.c"
        if ($34) { __lastLabel__ = 11; __label__ = 12; break; } else { __lastLabel__ = 11; __label__ = 14; break; } //@line 1014 "audioop.c"
      case 12: // $bb11
        var $35=HEAP[$cp]; //@line 1014 "audioop.c"
        var $36=$i; //@line 1014 "audioop.c"
        var $37=$35+$36; //@line 1014 "audioop.c"
        var $38=$37; //@line 1014 "audioop.c"
        var $39=HEAP[$38]; //@line 1014 "audioop.c"
        var $40=($39) >> 16; //@line 1014 "audioop.c"
        $val=$40; //@line 1014 "audioop.c"
        __label__ = 13; break; //@line 1014 "audioop.c"
      case 13: // $bb12thread_pre_split
        var $_pr=HEAP[$size];
        __lastLabel__ = 13; __label__ = 14; break;
      case 14: // $bb12
        var $41=__lastLabel__ == 13 ? $_pr : ($33);
        var $42=HEAP[$len]; //@line 1016 "audioop.c"
        var $43=$i; //@line 1016 "audioop.c"
        var $_neg=0 - ($43);
        var $_neg1=0 - ($41);
        var $44=($42) + ($_neg1);
        var $45=($44) + ($_neg);
        $j=$45; //@line 1016 "audioop.c"
        var $46=($41)==1; //@line 1018 "audioop.c"
        if ($46) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1018 "audioop.c"
      case 15: // $bb13
        var $47=$ncp; //@line 1018 "audioop.c"
        var $48=$j; //@line 1018 "audioop.c"
        var $49=$47+$48; //@line 1018 "audioop.c"
        var $50=$val; //@line 1018 "audioop.c"
        var $51=($50) >> 8; //@line 1018 "audioop.c"
        var $52=((($51)) & 255); //@line 1018 "audioop.c"
        HEAP[$49]=$52; //@line 1018 "audioop.c"
        __label__ = 20; break; //@line 1018 "audioop.c"
      case 16: // $bb14
        var $53=HEAP[$size]; //@line 1019 "audioop.c"
        var $54=($53)==2; //@line 1019 "audioop.c"
        if ($54) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1019 "audioop.c"
      case 17: // $bb15
        var $55=$ncp; //@line 1019 "audioop.c"
        var $56=$j; //@line 1019 "audioop.c"
        var $57=$55+$56; //@line 1019 "audioop.c"
        var $58=$57; //@line 1019 "audioop.c"
        var $59=$val; //@line 1019 "audioop.c"
        var $60=((($59)) & 65535); //@line 1019 "audioop.c"
        HEAP[$58]=$60; //@line 1019 "audioop.c"
        __label__ = 20; break; //@line 1019 "audioop.c"
      case 18: // $bb16
        var $61=HEAP[$size]; //@line 1020 "audioop.c"
        var $62=($61)==4; //@line 1020 "audioop.c"
        if ($62) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1020 "audioop.c"
      case 19: // $bb17
        var $63=$ncp; //@line 1020 "audioop.c"
        var $64=$j; //@line 1020 "audioop.c"
        var $65=$63+$64; //@line 1020 "audioop.c"
        var $66=$65; //@line 1020 "audioop.c"
        var $67=$val; //@line 1020 "audioop.c"
        var $68=($67) << 16; //@line 1020 "audioop.c"
        HEAP[$66]=$68; //@line 1020 "audioop.c"
        __label__ = 20; break; //@line 1020 "audioop.c"
      case 20: // $bb18
        var $69=HEAP[$size]; //@line 1011 "audioop.c"
        var $70=$i; //@line 1011 "audioop.c"
        var $71=($70) + ($69); //@line 1011 "audioop.c"
        $i=$71; //@line 1011 "audioop.c"
        var $72=HEAP[$len]; //@line 1011 "audioop.c"
        var $73=$i; //@line 1011 "audioop.c"
        var $74=($73) < ($72); //@line 1011 "audioop.c"
        if ($74) { __label__ = 7; break; } else { __label__ = 21; break; } //@line 1011 "audioop.c"
      case 21: // $bb20
        var $75=$rv; //@line 1022 "audioop.c"
        $0=$75; //@line 1022 "audioop.c"
        __label__ = 22; break; //@line 1022 "audioop.c"
      case 22: // $bb21
        var $76=$0; //@line 1001 "audioop.c"
        $retval=$76; //@line 1001 "audioop.c"
        var $retval22=$retval; //@line 1001 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 1001 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $size2=__stackBase__+12;
        var $val;
        var $rv;
        var $i;
        var $j;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 1030 "audioop.c"
        var $1=$args_addr; //@line 1034 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str28, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$size2,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1034 "audioop.c"
        var $3=($2)==0; //@line 1034 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1034 "audioop.c"
      case 1: // $bb
        $0=0; //@line 1036 "audioop.c"
        __label__ = 25; break; //@line 1036 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1038 "audioop.c"
        var $5=HEAP[$len]; //@line 1038 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1038 "audioop.c"
        var $7=($6)==0; //@line 1038 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1038 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 1039 "audioop.c"
        __label__ = 25; break; //@line 1039 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size2]; //@line 1040 "audioop.c"
        var $9=_audioop_check_size($8); //@line 1040 "audioop.c"
        var $10=($9)==0; //@line 1040 "audioop.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1040 "audioop.c"
      case 5: // $bb4
        $0=0; //@line 1041 "audioop.c"
        __label__ = 25; break; //@line 1041 "audioop.c"
      case 6: // $bb5
        var $11=HEAP[$len]; //@line 1043 "audioop.c"
        var $12=HEAP[$size]; //@line 1043 "audioop.c"
        var $13=((($11)/($12))|0); //@line 1043 "audioop.c"
        var $14=HEAP[$size2]; //@line 1043 "audioop.c"
        var $15=((2147483647/($14))|0); //@line 1043 "audioop.c"
        var $16=($13) > ($15); //@line 1043 "audioop.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1043 "audioop.c"
      case 7: // $bb6
        var $17=HEAP[_PyExc_MemoryError]; //@line 1044 "audioop.c"
        _PyErr_SetString($17, __str23); //@line 1044 "audioop.c"
        $0=0; //@line 1046 "audioop.c"
        __label__ = 25; break; //@line 1046 "audioop.c"
      case 8: // $bb7
        var $18=HEAP[$len]; //@line 1048 "audioop.c"
        var $19=HEAP[$size]; //@line 1048 "audioop.c"
        var $20=((($18)/($19))|0); //@line 1048 "audioop.c"
        var $21=HEAP[$size2]; //@line 1048 "audioop.c"
        var $22=($21) * ($20); //@line 1048 "audioop.c"
        var $23=_PyString_FromStringAndSize(0, $22); //@line 1048 "audioop.c"
        $rv=$23; //@line 1048 "audioop.c"
        var $24=$rv; //@line 1049 "audioop.c"
        var $25=($24)==0; //@line 1049 "audioop.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1049 "audioop.c"
      case 9: // $bb8
        $0=0; //@line 1050 "audioop.c"
        __label__ = 25; break; //@line 1050 "audioop.c"
      case 10: // $bb9
        var $26=$rv; //@line 1051 "audioop.c"
        var $27=_PyString_AsString($26); //@line 1051 "audioop.c"
        $ncp=$27; //@line 1051 "audioop.c"
        $i=0; //@line 1053 "audioop.c"
        $j=0; //@line 1053 "audioop.c"
        var $28=HEAP[$len]; //@line 1053 "audioop.c"
        var $29=$i; //@line 1053 "audioop.c"
        var $30=($29) < ($28); //@line 1053 "audioop.c"
        if ($30) { __label__ = 11; break; } else { __label__ = 24; break; } //@line 1053 "audioop.c"
      case 11: // $bb10
        var $31=HEAP[$size]; //@line 1054 "audioop.c"
        var $32=($31)==1; //@line 1054 "audioop.c"
        if ($32) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1054 "audioop.c"
      case 12: // $bb11
        var $33=HEAP[$cp]; //@line 1054 "audioop.c"
        var $34=$i; //@line 1054 "audioop.c"
        var $35=$33+$34; //@line 1054 "audioop.c"
        var $36=HEAP[$35]; //@line 1054 "audioop.c"
        var $37=($36); //@line 1054 "audioop.c"
        var $38=($37) << 8; //@line 1054 "audioop.c"
        $val=$38; //@line 1054 "audioop.c"
        __label__ = 17; break; //@line 1054 "audioop.c"
      case 13: // $bb12
        var $39=HEAP[$size]; //@line 1055 "audioop.c"
        var $40=($39)==2; //@line 1055 "audioop.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1055 "audioop.c"
      case 14: // $bb13
        var $41=HEAP[$cp]; //@line 1055 "audioop.c"
        var $42=$i; //@line 1055 "audioop.c"
        var $43=$41+$42; //@line 1055 "audioop.c"
        var $44=$43; //@line 1055 "audioop.c"
        var $45=HEAP[$44]; //@line 1055 "audioop.c"
        var $46=($45); //@line 1055 "audioop.c"
        $val=$46; //@line 1055 "audioop.c"
        __label__ = 17; break; //@line 1055 "audioop.c"
      case 15: // $bb14
        var $47=HEAP[$size]; //@line 1056 "audioop.c"
        var $48=($47)==4; //@line 1056 "audioop.c"
        if ($48) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1056 "audioop.c"
      case 16: // $bb15
        var $49=HEAP[$cp]; //@line 1056 "audioop.c"
        var $50=$i; //@line 1056 "audioop.c"
        var $51=$49+$50; //@line 1056 "audioop.c"
        var $52=$51; //@line 1056 "audioop.c"
        var $53=HEAP[$52]; //@line 1056 "audioop.c"
        var $54=($53) >> 16; //@line 1056 "audioop.c"
        $val=$54; //@line 1056 "audioop.c"
        __label__ = 17; break; //@line 1056 "audioop.c"
      case 17: // $bb16
        var $55=HEAP[$size2]; //@line 1058 "audioop.c"
        var $56=($55)==1; //@line 1058 "audioop.c"
        if ($56) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1058 "audioop.c"
      case 18: // $bb17
        var $57=$ncp; //@line 1058 "audioop.c"
        var $58=$j; //@line 1058 "audioop.c"
        var $59=$57+$58; //@line 1058 "audioop.c"
        var $60=$val; //@line 1058 "audioop.c"
        var $61=($60) >> 8; //@line 1058 "audioop.c"
        var $62=((($61)) & 255); //@line 1058 "audioop.c"
        HEAP[$59]=$62; //@line 1058 "audioop.c"
        __label__ = 23; break; //@line 1058 "audioop.c"
      case 19: // $bb18
        var $63=HEAP[$size2]; //@line 1059 "audioop.c"
        var $64=($63)==2; //@line 1059 "audioop.c"
        if ($64) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1059 "audioop.c"
      case 20: // $bb19
        var $65=$ncp; //@line 1059 "audioop.c"
        var $66=$j; //@line 1059 "audioop.c"
        var $67=$65+$66; //@line 1059 "audioop.c"
        var $68=$67; //@line 1059 "audioop.c"
        var $69=$val; //@line 1059 "audioop.c"
        var $70=((($69)) & 65535); //@line 1059 "audioop.c"
        HEAP[$68]=$70; //@line 1059 "audioop.c"
        __label__ = 23; break; //@line 1059 "audioop.c"
      case 21: // $bb20
        var $71=HEAP[$size2]; //@line 1060 "audioop.c"
        var $72=($71)==4; //@line 1060 "audioop.c"
        if ($72) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1060 "audioop.c"
      case 22: // $bb21
        var $73=$ncp; //@line 1060 "audioop.c"
        var $74=$j; //@line 1060 "audioop.c"
        var $75=$73+$74; //@line 1060 "audioop.c"
        var $76=$75; //@line 1060 "audioop.c"
        var $77=$val; //@line 1060 "audioop.c"
        var $78=($77) << 16; //@line 1060 "audioop.c"
        HEAP[$76]=$78; //@line 1060 "audioop.c"
        __label__ = 23; break; //@line 1060 "audioop.c"
      case 23: // $bb22
        var $79=HEAP[$size]; //@line 1053 "audioop.c"
        var $80=$i; //@line 1053 "audioop.c"
        var $81=($80) + ($79); //@line 1053 "audioop.c"
        $i=$81; //@line 1053 "audioop.c"
        var $82=HEAP[$size2]; //@line 1053 "audioop.c"
        var $83=$j; //@line 1053 "audioop.c"
        var $84=($83) + ($82); //@line 1053 "audioop.c"
        $j=$84; //@line 1053 "audioop.c"
        var $85=HEAP[$len]; //@line 1053 "audioop.c"
        var $86=$i; //@line 1053 "audioop.c"
        var $87=($86) < ($85); //@line 1053 "audioop.c"
        if ($87) { __label__ = 11; break; } else { __label__ = 24; break; } //@line 1053 "audioop.c"
      case 24: // $bb24
        var $88=$rv; //@line 1062 "audioop.c"
        $0=$88; //@line 1062 "audioop.c"
        __label__ = 25; break; //@line 1062 "audioop.c"
      case 25: // $bb25
        var $89=$0; //@line 1036 "audioop.c"
        $retval=$89; //@line 1036 "audioop.c"
        var $retval26=$retval; //@line 1036 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 1036 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gcd($a, $b) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr;
        var $b_addr;
        var $retval;
        var $0;
        var $tmp;
        $a_addr=$a;
        $b_addr=$b;
        var $1=($b) > 0; //@line 1068 "audioop.c"
        var $2=$a_addr; //@line 1069 "audioop.c"
        if ($1) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 2; break; } //@line 1068 "audioop.c"
      case 1: // $bb
        var $3=__lastLabel__ == 1 ? $8 : ($2);
        var $4=$b_addr; //@line 1069 "audioop.c"
        var $5=($3) % ($4); //@line 1069 "audioop.c"
        $tmp=$5; //@line 1069 "audioop.c"
        var $6=$b_addr; //@line 1070 "audioop.c"
        $a_addr=$6; //@line 1070 "audioop.c"
        $b_addr=$5; //@line 1071 "audioop.c"
        var $7=($5) > 0; //@line 1068 "audioop.c"
        var $8=$a_addr; //@line 1069 "audioop.c"
        if ($7) { __lastLabel__ = 1; __label__ = 1; break; } else { __lastLabel__ = 1; __label__ = 2; break; } //@line 1068 "audioop.c"
      case 2: // $bb2
        var $_lcssa=__lastLabel__ == -1 ? $2 : ($8);
        $0=$_lcssa; //@line 1073 "audioop.c"
        var $9=$0; //@line 1073 "audioop.c"
        $retval=$9; //@line 1073 "audioop.c"
        var $retval3=$retval; //@line 1073 "audioop.c"
        ;
        return $retval3; //@line 1073 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_ratecv($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 48; _memset(__stackBase__, 0, 48);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_386;
        var $0;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $nchannels=__stackBase__+12;
        var $inrate=__stackBase__+16;
        var $outrate=__stackBase__+20;
        var $weightA=__stackBase__+24;
        var $weightB=__stackBase__+28;
        var $chan;
        var $d=__stackBase__+32;
        var $prev_i;
        var $cur_i;
        var $cur_o;
        var $state=__stackBase__+36;
        var $samps=__stackBase__+40;
        var $str=__stackBase__+44;
        var $rv;
        var $bytes_per_frame;
        var $q;
        $self_addr=$self;
        $args_addr=$args;
        $rv=0; //@line 1082 "audioop.c"
        HEAP[$weightA]=1; //@line 1085 "audioop.c"
        HEAP[$weightB]=0; //@line 1086 "audioop.c"
        var $1=$args_addr; //@line 1087 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str29, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$nchannels,0,0,0,$inrate,0,0,0,$outrate,0,0,0,$state,0,0,0,$weightA,0,0,0,$weightB,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1087 "audioop.c"
        var $3=($2)==0; //@line 1087 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1087 "audioop.c"
      case 1: // $bb
        $0=0; //@line 1090 "audioop.c"
        __label__ = 78; break; //@line 1090 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1091 "audioop.c"
        var $5=_audioop_check_size($4); //@line 1091 "audioop.c"
        var $6=($5)==0; //@line 1091 "audioop.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1091 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 1092 "audioop.c"
        __label__ = 78; break; //@line 1092 "audioop.c"
      case 4: // $bb3
        var $7=HEAP[$nchannels]; //@line 1093 "audioop.c"
        var $8=($7) <= 0; //@line 1093 "audioop.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1093 "audioop.c"
      case 5: // $bb4
        var $9=HEAP[_AudioopError]; //@line 1094 "audioop.c"
        _PyErr_SetString($9, __str30); //@line 1094 "audioop.c"
        $0=0; //@line 1095 "audioop.c"
        __label__ = 78; break; //@line 1095 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$size]; //@line 1097 "audioop.c"
        var $11=HEAP[$nchannels]; //@line 1097 "audioop.c"
        var $12=($11) * ($10); //@line 1097 "audioop.c"
        $bytes_per_frame=$12; //@line 1097 "audioop.c"
        var $13=HEAP[$nchannels]; //@line 1098 "audioop.c"
        var $14=$bytes_per_frame; //@line 1098 "audioop.c"
        var $15=((($14)/($13))|0); //@line 1098 "audioop.c"
        var $16=HEAP[$size]; //@line 1098 "audioop.c"
        var $17=($15)!=($16); //@line 1098 "audioop.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1098 "audioop.c"
      case 7: // $bb6
        var $18=HEAP[_PyExc_OverflowError]; //@line 1102 "audioop.c"
        _PyErr_SetString($18, __str31); //@line 1102 "audioop.c"
        $0=0; //@line 1104 "audioop.c"
        __label__ = 78; break; //@line 1104 "audioop.c"
      case 8: // $bb7
        var $19=HEAP[$weightA]; //@line 1106 "audioop.c"
        var $20=($19) <= 0; //@line 1106 "audioop.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 1106 "audioop.c"
      case 9: // $bb8
        var $21=HEAP[$weightB]; //@line 1106 "audioop.c"
        var $22=($21) < 0; //@line 1106 "audioop.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1106 "audioop.c"
      case 10: // $bb9
        var $23=HEAP[_AudioopError]; //@line 1107 "audioop.c"
        _PyErr_SetString($23, __str32); //@line 1107 "audioop.c"
        $0=0; //@line 1109 "audioop.c"
        __label__ = 78; break; //@line 1109 "audioop.c"
      case 11: // $bb10
        var $24=HEAP[$len]; //@line 1111 "audioop.c"
        var $25=$bytes_per_frame; //@line 1111 "audioop.c"
        var $26=($24) % ($25); //@line 1111 "audioop.c"
        var $27=($26)!=0; //@line 1111 "audioop.c"
        if ($27) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1111 "audioop.c"
      case 12: // $bb11
        var $28=HEAP[_AudioopError]; //@line 1112 "audioop.c"
        _PyErr_SetString($28, __str1); //@line 1112 "audioop.c"
        $0=0; //@line 1113 "audioop.c"
        __label__ = 78; break; //@line 1113 "audioop.c"
      case 13: // $bb12
        var $29=HEAP[$inrate]; //@line 1115 "audioop.c"
        var $30=($29) <= 0; //@line 1115 "audioop.c"
        if ($30) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1115 "audioop.c"
      case 14: // $bb13
        var $31=HEAP[$outrate]; //@line 1115 "audioop.c"
        var $32=($31) <= 0; //@line 1115 "audioop.c"
        if ($32) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1115 "audioop.c"
      case 15: // $bb14
        var $33=HEAP[_AudioopError]; //@line 1116 "audioop.c"
        _PyErr_SetString($33, __str33); //@line 1116 "audioop.c"
        $0=0; //@line 1117 "audioop.c"
        __label__ = 78; break; //@line 1117 "audioop.c"
      case 16: // $bb15
        var $34=HEAP[$outrate]; //@line 1120 "audioop.c"
        var $35=HEAP[$inrate]; //@line 1120 "audioop.c"
        var $36=_gcd($35, $34); //@line 1120 "audioop.c"
        HEAP[$d]=$36; //@line 1120 "audioop.c"
        var $37=HEAP[$inrate]; //@line 1121 "audioop.c"
        var $38=HEAP[$d]; //@line 1121 "audioop.c"
        var $39=((($37)/($38))|0); //@line 1121 "audioop.c"
        HEAP[$inrate]=$39; //@line 1121 "audioop.c"
        var $40=HEAP[$outrate]; //@line 1122 "audioop.c"
        var $41=HEAP[$d]; //@line 1122 "audioop.c"
        var $42=((($40)/($41))|0); //@line 1122 "audioop.c"
        HEAP[$outrate]=$42; //@line 1122 "audioop.c"
        var $43=HEAP[$nchannels]; //@line 1124 "audioop.c"
        var $44=($43) > 1073741823; //@line 1124 "audioop.c"
        if ($44) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1124 "audioop.c"
      case 17: // $bb16
        var $45=HEAP[_PyExc_MemoryError]; //@line 1125 "audioop.c"
        _PyErr_SetString($45, __str23); //@line 1125 "audioop.c"
        $0=0; //@line 1127 "audioop.c"
        __label__ = 78; break; //@line 1127 "audioop.c"
      case 18: // $bb17
        var $46=HEAP[$nchannels]; //@line 1129 "audioop.c"
        var $47=($46) * 4; //@line 1129 "audioop.c"
        var $48=_malloc($47); //@line 1129 "audioop.c"
        var $49=$48; //@line 1129 "audioop.c"
        $prev_i=$49; //@line 1129 "audioop.c"
        var $50=HEAP[$nchannels]; //@line 1130 "audioop.c"
        var $51=($50) * 4; //@line 1130 "audioop.c"
        var $52=_malloc($51); //@line 1130 "audioop.c"
        var $53=$52; //@line 1130 "audioop.c"
        $cur_i=$53; //@line 1130 "audioop.c"
        var $54=$prev_i; //@line 1131 "audioop.c"
        var $55=($54)==0; //@line 1131 "audioop.c"
        if ($55) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 1131 "audioop.c"
      case 19: // $bb18
        var $56=$cur_i; //@line 1131 "audioop.c"
        var $57=($56)==0; //@line 1131 "audioop.c"
        if ($57) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1131 "audioop.c"
      case 20: // $bb19
        var $58=_PyErr_NoMemory(); //@line 1132 "audioop.c"
        __label__ = 73; break; //@line 1132 "audioop.c"
      case 21: // $bb20
        var $59=HEAP[$len]; //@line 1136 "audioop.c"
        var $60=$bytes_per_frame; //@line 1136 "audioop.c"
        var $61=((($59)/($60))|0); //@line 1136 "audioop.c"
        HEAP[$len]=$61; //@line 1136 "audioop.c"
        var $62=HEAP[$state]; //@line 1138 "audioop.c"
        var $63=($62)==(__Py_NoneStruct); //@line 1138 "audioop.c"
        if ($63) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 1138 "audioop.c"
      case 22: // $bb21
        var $64=HEAP[$outrate]; //@line 1139 "audioop.c"
        var $65=0 - ($64); //@line 1139 "audioop.c"
        HEAP[$d]=$65; //@line 1139 "audioop.c"
        $chan=0; //@line 1140 "audioop.c"
        var $66=HEAP[$nchannels]; //@line 1140 "audioop.c"
        var $67=$chan; //@line 1140 "audioop.c"
        var $68=($67) < ($66); //@line 1140 "audioop.c"
        if ($68) { __label__ = 23; break; } else { __label__ = 31; break; } //@line 1140 "audioop.c"
      case 23: // $bb22
        var $69=$cur_i; //@line 1141 "audioop.c"
        var $70=$chan; //@line 1141 "audioop.c"
        var $71=$69+4*$70; //@line 1141 "audioop.c"
        HEAP[$71]=0; //@line 1141 "audioop.c"
        var $72=$cur_i; //@line 1141 "audioop.c"
        var $73=$chan; //@line 1141 "audioop.c"
        var $74=$72+4*$73; //@line 1141 "audioop.c"
        var $75=HEAP[$74]; //@line 1141 "audioop.c"
        var $76=$prev_i; //@line 1141 "audioop.c"
        var $77=$chan; //@line 1141 "audioop.c"
        var $78=$76+4*$77; //@line 1141 "audioop.c"
        HEAP[$78]=$75; //@line 1141 "audioop.c"
        var $79=$chan; //@line 1140 "audioop.c"
        var $80=($79) + 1; //@line 1140 "audioop.c"
        $chan=$80; //@line 1140 "audioop.c"
        var $81=HEAP[$nchannels]; //@line 1140 "audioop.c"
        var $82=$chan; //@line 1140 "audioop.c"
        var $83=($82) < ($81); //@line 1140 "audioop.c"
        if ($83) { __label__ = 23; break; } else { __label__ = 31; break; } //@line 1140 "audioop.c"
      case 24: // $bb25
        var $84=HEAP[$state]; //@line 1144 "audioop.c"
        var $85=_PyArg_ParseTuple($84, __str34, allocate([$d,0,0,0,_PyTuple_Type,0,0,0,$samps,0,0,0], ["i32*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1144 "audioop.c"
        var $86=($85)==0; //@line 1144 "audioop.c"
        if ($86) { __label__ = 73; break; } else { __label__ = 25; break; } //@line 1144 "audioop.c"
      case 25: // $bb26
        var $87=HEAP[$samps]; //@line 1148 "audioop.c"
        var $88=_PyTuple_Size($87); //@line 1148 "audioop.c"
        var $89=HEAP[$nchannels]; //@line 1148 "audioop.c"
        var $90=($88)!=($89); //@line 1148 "audioop.c"
        if ($90) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1148 "audioop.c"
      case 26: // $bb27
        var $91=HEAP[_AudioopError]; //@line 1149 "audioop.c"
        _PyErr_SetString($91, __str35); //@line 1149 "audioop.c"
        __label__ = 73; break; //@line 1149 "audioop.c"
      case 27: // $bb28
        $chan=0; //@line 1153 "audioop.c"
        __label__ = 30; break; //@line 1153 "audioop.c"
      case 28: // $bb29
        var $92=$cur_i; //@line 1154 "audioop.c"
        var $93=$chan; //@line 1154 "audioop.c"
        var $94=$92+4*$93; //@line 1154 "audioop.c"
        var $95=$prev_i; //@line 1154 "audioop.c"
        var $96=$chan; //@line 1154 "audioop.c"
        var $97=$95+4*$96; //@line 1154 "audioop.c"
        var $98=HEAP[$samps]; //@line 1154 "audioop.c"
        var $99=$chan; //@line 1154 "audioop.c"
        var $100=_PyTuple_GetItem($98, $99); //@line 1154 "audioop.c"
        var $101=_PyArg_ParseTuple($100, __str36, allocate([$97,0,0,0,$94,0,0,0], ["i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1154 "audioop.c"
        var $102=($101)==0; //@line 1154 "audioop.c"
        if ($102) { __label__ = 73; break; } else { __label__ = 29; break; } //@line 1154 "audioop.c"
      case 29: // $bb30
        var $103=$chan; //@line 1153 "audioop.c"
        var $104=($103) + 1; //@line 1153 "audioop.c"
        $chan=$104; //@line 1153 "audioop.c"
        __label__ = 30; break; //@line 1153 "audioop.c"
      case 30: // $bb31
        var $105=HEAP[$nchannels]; //@line 1153 "audioop.c"
        var $106=$chan; //@line 1153 "audioop.c"
        var $107=($106) < ($105); //@line 1153 "audioop.c"
        if ($107) { __label__ = 28; break; } else { __label__ = 31; break; } //@line 1153 "audioop.c"
      case 31: // $bb32
        var $108=HEAP[$len]; //@line 1171 "audioop.c"
        var $109=($108) > 0; //@line 1171 "audioop.c"
        if ($109) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1171 "audioop.c"
      case 32: // $bb33
        var $110=HEAP[$len]; //@line 1171 "audioop.c"
        var $111=($110) - 1; //@line 1171 "audioop.c"
        var $112=HEAP[$inrate]; //@line 1171 "audioop.c"
        var $113=((($111)/($112))|0); //@line 1171 "audioop.c"
        var $114=($113) + 1; //@line 1171 "audioop.c"
        $iftmp_386=$114; //@line 1171 "audioop.c"
        __label__ = 34; break; //@line 1171 "audioop.c"
      case 33: // $bb34
        $iftmp_386=0; //@line 1171 "audioop.c"
        __label__ = 34; break; //@line 1171 "audioop.c"
      case 34: // $bb35
        var $115=$iftmp_386; //@line 1171 "audioop.c"
        $q=$115; //@line 1171 "audioop.c"
        var $116=$q; //@line 1172 "audioop.c"
        var $117=((2147483647/($116))|0); //@line 1172 "audioop.c"
        var $118=$bytes_per_frame; //@line 1172 "audioop.c"
        var $119=((($117)/($118))|0); //@line 1172 "audioop.c"
        var $120=HEAP[$outrate]; //@line 1172 "audioop.c"
        var $121=($119) < ($120); //@line 1172 "audioop.c"
        if ($121) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1172 "audioop.c"
      case 35: // $bb38_thread
        HEAP[$str]=0; //@line 1173 "audioop.c"
        __label__ = 37; break;
      case 36: // $bb38
        var $122=HEAP[$outrate]; //@line 1175 "audioop.c"
        var $123=$q; //@line 1175 "audioop.c"
        var $124=$bytes_per_frame; //@line 1175 "audioop.c"
        var $125=($123) * ($122); //@line 1175 "audioop.c"
        var $126=($125) * ($124); //@line 1175 "audioop.c"
        var $127=_PyString_FromStringAndSize(0, $126); //@line 1175 "audioop.c"
        HEAP[$str]=$127; //@line 1175 "audioop.c"
        var $128=($127)==0; //@line 1178 "audioop.c"
        if ($128) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1178 "audioop.c"
      case 37: // $bb39
        var $129=HEAP[_PyExc_MemoryError]; //@line 1179 "audioop.c"
        _PyErr_SetString($129, __str23); //@line 1179 "audioop.c"
        __label__ = 73; break; //@line 1179 "audioop.c"
      case 38: // $bb40
        var $130=HEAP[$str]; //@line 1184 "audioop.c"
        var $131=_PyString_AsString($130); //@line 1184 "audioop.c"
        $ncp=$131; //@line 1184 "audioop.c"
        var $_pr=HEAP[$d];
        __lastLabel__ = 38; __label__ = 62; break; //@line 1184 "audioop.c"
      case 39: // $bb42
        var $132=HEAP[$len]; //@line 1188 "audioop.c"
        var $133=($132)==0; //@line 1188 "audioop.c"
        if ($133) { __label__ = 40; break; } else { __label__ = 53; break; } //@line 1188 "audioop.c"
      case 40: // $bb43
        var $134=HEAP[$nchannels]; //@line 1189 "audioop.c"
        var $135=_PyTuple_New($134); //@line 1189 "audioop.c"
        HEAP[$samps]=$135; //@line 1189 "audioop.c"
        var $136=HEAP[$samps]; //@line 1190 "audioop.c"
        var $137=($136)==0; //@line 1190 "audioop.c"
        if ($137) { __label__ = 73; break; } else { __label__ = 41; break; } //@line 1190 "audioop.c"
      case 41: // $bb44
        $chan=0; //@line 1192 "audioop.c"
        var $138=HEAP[$nchannels]; //@line 1192 "audioop.c"
        var $139=$chan; //@line 1192 "audioop.c"
        var $140=($139) < ($138); //@line 1192 "audioop.c"
        if ($140) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1192 "audioop.c"
      case 42: // $bb45
        var $141=$cur_i; //@line 1193 "audioop.c"
        var $142=$chan; //@line 1193 "audioop.c"
        var $143=$141+4*$142; //@line 1193 "audioop.c"
        var $144=HEAP[$143]; //@line 1193 "audioop.c"
        var $145=$prev_i; //@line 1193 "audioop.c"
        var $146=$chan; //@line 1193 "audioop.c"
        var $147=$145+4*$146; //@line 1193 "audioop.c"
        var $148=HEAP[$147]; //@line 1193 "audioop.c"
        var $149=_Py_BuildValue(__str6, allocate([$148,0,0,0,$144,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1193 "audioop.c"
        var $150=HEAP[$samps]; //@line 1193 "audioop.c"
        var $151=$chan; //@line 1193 "audioop.c"
        var $152=_PyTuple_SetItem($150, $151, $149); //@line 1193 "audioop.c"
        var $153=$chan; //@line 1192 "audioop.c"
        var $154=($153) + 1; //@line 1192 "audioop.c"
        $chan=$154; //@line 1192 "audioop.c"
        var $155=HEAP[$nchannels]; //@line 1192 "audioop.c"
        var $156=$chan; //@line 1192 "audioop.c"
        var $157=($156) < ($155); //@line 1192 "audioop.c"
        if ($157) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1192 "audioop.c"
      case 43: // $bb47
        var $158=_PyErr_Occurred(); //@line 1197 "audioop.c"
        var $159=($158)!=0; //@line 1197 "audioop.c"
        if ($159) { __label__ = 73; break; } else { __label__ = 44; break; } //@line 1197 "audioop.c"
      case 44: // $bb48
        var $160=$ncp; //@line 1201 "audioop.c"
        var $161=($160); //@line 1201 "audioop.c"
        var $162=HEAP[$str]; //@line 1201 "audioop.c"
        var $163=_PyString_AsString($162); //@line 1201 "audioop.c"
        var $164=($163); //@line 1201 "audioop.c"
        var $165=($161) - ($164); //@line 1201 "audioop.c"
        HEAP[$len]=$165; //@line 1201 "audioop.c"
        var $166=HEAP[$len]; //@line 1202 "audioop.c"
        var $167=($166)==0; //@line 1202 "audioop.c"
        if ($167) { __label__ = 45; break; } else { __label__ = 48; break; } //@line 1202 "audioop.c"
      case 45: // $bb49
        var $168=_PyString_FromStringAndSize(__str37, 0); //@line 1204 "audioop.c"
        $rv=$168; //@line 1204 "audioop.c"
        var $169=HEAP[$str]; //@line 1205 "audioop.c"
        var $170=$169; //@line 1205 "audioop.c"
        var $171=HEAP[$170]; //@line 1205 "audioop.c"
        var $172=($171) - 1; //@line 1205 "audioop.c"
        var $173=$169; //@line 1205 "audioop.c"
        HEAP[$173]=$172; //@line 1205 "audioop.c"
        var $174=$169; //@line 1205 "audioop.c"
        var $175=HEAP[$174]; //@line 1205 "audioop.c"
        var $176=($175)==0; //@line 1205 "audioop.c"
        if ($176) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 1205 "audioop.c"
      case 46: // $bb50
        var $177=HEAP[$str]; //@line 1205 "audioop.c"
        var $178=$177+4; //@line 1205 "audioop.c"
        var $179=HEAP[$178]; //@line 1205 "audioop.c"
        var $180=$179+24; //@line 1205 "audioop.c"
        var $181=HEAP[$180]; //@line 1205 "audioop.c"
        var $182=HEAP[$str]; //@line 1205 "audioop.c"
        FUNCTION_TABLE[$181]($182); //@line 1205 "audioop.c"
        __label__ = 47; break; //@line 1205 "audioop.c"
      case 47: // $bb51
        var $183=$rv; //@line 1206 "audioop.c"
        HEAP[$str]=$183; //@line 1206 "audioop.c"
        __label__ = 49; break; //@line 1206 "audioop.c"
      case 48: // $bb52
        var $184=HEAP[$len]; //@line 1207 "audioop.c"
        var $185=__PyString_Resize($str, $184); //@line 1207 "audioop.c"
        var $186=($185) < 0; //@line 1207 "audioop.c"
        if ($186) { __label__ = 73; break; } else { __label__ = 49; break; } //@line 1207 "audioop.c"
      case 49: // $bb53
        var $187=HEAP[$samps]; //@line 1209 "audioop.c"
        var $188=HEAP[$d]; //@line 1209 "audioop.c"
        var $189=HEAP[$str]; //@line 1209 "audioop.c"
        var $190=_Py_BuildValue(__str38, allocate([$189,0,0,0,$188,0,0,0,$187,0,0,0], ["%struct.PyObject*",0,0,0,"i32",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1209 "audioop.c"
        $rv=$190; //@line 1209 "audioop.c"
        var $191=HEAP[$samps]; //@line 1210 "audioop.c"
        var $192=$191; //@line 1210 "audioop.c"
        var $193=HEAP[$192]; //@line 1210 "audioop.c"
        var $194=($193) - 1; //@line 1210 "audioop.c"
        var $195=$191; //@line 1210 "audioop.c"
        HEAP[$195]=$194; //@line 1210 "audioop.c"
        var $196=$191; //@line 1210 "audioop.c"
        var $197=HEAP[$196]; //@line 1210 "audioop.c"
        var $198=($197)==0; //@line 1210 "audioop.c"
        if ($198) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1210 "audioop.c"
      case 50: // $bb54
        var $199=HEAP[$samps]; //@line 1210 "audioop.c"
        var $200=$199+4; //@line 1210 "audioop.c"
        var $201=HEAP[$200]; //@line 1210 "audioop.c"
        var $202=$201+24; //@line 1210 "audioop.c"
        var $203=HEAP[$202]; //@line 1210 "audioop.c"
        var $204=HEAP[$samps]; //@line 1210 "audioop.c"
        FUNCTION_TABLE[$203]($204); //@line 1210 "audioop.c"
        __label__ = 51; break; //@line 1210 "audioop.c"
      case 51: // $bb55
        var $205=HEAP[$str]; //@line 1211 "audioop.c"
        var $206=$205; //@line 1211 "audioop.c"
        var $207=HEAP[$206]; //@line 1211 "audioop.c"
        var $208=($207) - 1; //@line 1211 "audioop.c"
        var $209=$205; //@line 1211 "audioop.c"
        HEAP[$209]=$208; //@line 1211 "audioop.c"
        var $210=$205; //@line 1211 "audioop.c"
        var $211=HEAP[$210]; //@line 1211 "audioop.c"
        var $212=($211)==0; //@line 1211 "audioop.c"
        if ($212) { __label__ = 52; break; } else { __label__ = 73; break; } //@line 1211 "audioop.c"
      case 52: // $bb56
        var $213=HEAP[$str]; //@line 1211 "audioop.c"
        var $214=$213+4; //@line 1211 "audioop.c"
        var $215=HEAP[$214]; //@line 1211 "audioop.c"
        var $216=$215+24; //@line 1211 "audioop.c"
        var $217=HEAP[$216]; //@line 1211 "audioop.c"
        var $218=HEAP[$str]; //@line 1211 "audioop.c"
        FUNCTION_TABLE[$217]($218); //@line 1211 "audioop.c"
        __label__ = 73; break; //@line 1211 "audioop.c"
      case 53: // $bb58
        $chan=0; //@line 1214 "audioop.c"
        var $219=HEAP[$nchannels]; //@line 1214 "audioop.c"
        var $220=$chan; //@line 1214 "audioop.c"
        var $221=($220) < ($219); //@line 1214 "audioop.c"
        if ($221) { __label__ = 54; break; } else { __label__ = 61; break; } //@line 1214 "audioop.c"
      case 54: // $bb59
        var $222=$cur_i; //@line 1215 "audioop.c"
        var $223=$chan; //@line 1215 "audioop.c"
        var $224=$222+4*$223; //@line 1215 "audioop.c"
        var $225=HEAP[$224]; //@line 1215 "audioop.c"
        var $226=$prev_i; //@line 1215 "audioop.c"
        var $227=$chan; //@line 1215 "audioop.c"
        var $228=$226+4*$227; //@line 1215 "audioop.c"
        HEAP[$228]=$225; //@line 1215 "audioop.c"
        var $229=HEAP[$size]; //@line 1216 "audioop.c"
        var $230=($229)==1; //@line 1216 "audioop.c"
        if ($230) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1216 "audioop.c"
      case 55: // $bb60
        var $231=HEAP[$cp]; //@line 1217 "audioop.c"
        var $232=$231; //@line 1217 "audioop.c"
        var $233=HEAP[$232]; //@line 1217 "audioop.c"
        var $234=($233); //@line 1217 "audioop.c"
        var $235=($234) << 8; //@line 1217 "audioop.c"
        var $236=$cur_i; //@line 1217 "audioop.c"
        var $237=$chan; //@line 1217 "audioop.c"
        var $238=$236+4*$237; //@line 1217 "audioop.c"
        HEAP[$238]=$235; //@line 1217 "audioop.c"
        __label__ = 60; break; //@line 1217 "audioop.c"
      case 56: // $bb61
        var $239=HEAP[$size]; //@line 1218 "audioop.c"
        var $240=($239)==2; //@line 1218 "audioop.c"
        if ($240) { __label__ = 57; break; } else { __label__ = 58; break; } //@line 1218 "audioop.c"
      case 57: // $bb62
        var $241=HEAP[$cp]; //@line 1219 "audioop.c"
        var $242=$241; //@line 1219 "audioop.c"
        var $243=$242; //@line 1219 "audioop.c"
        var $244=HEAP[$243]; //@line 1219 "audioop.c"
        var $245=($244); //@line 1219 "audioop.c"
        var $246=$cur_i; //@line 1219 "audioop.c"
        var $247=$chan; //@line 1219 "audioop.c"
        var $248=$246+4*$247; //@line 1219 "audioop.c"
        HEAP[$248]=$245; //@line 1219 "audioop.c"
        __label__ = 60; break; //@line 1219 "audioop.c"
      case 58: // $bb63
        var $249=HEAP[$size]; //@line 1220 "audioop.c"
        var $250=($249)==4; //@line 1220 "audioop.c"
        if ($250) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 1220 "audioop.c"
      case 59: // $bb64
        var $251=HEAP[$cp]; //@line 1221 "audioop.c"
        var $252=$251; //@line 1221 "audioop.c"
        var $253=$252; //@line 1221 "audioop.c"
        var $254=HEAP[$253]; //@line 1221 "audioop.c"
        var $255=($254) >> 16; //@line 1221 "audioop.c"
        var $256=$cur_i; //@line 1221 "audioop.c"
        var $257=$chan; //@line 1221 "audioop.c"
        var $258=$256+4*$257; //@line 1221 "audioop.c"
        HEAP[$258]=$255; //@line 1221 "audioop.c"
        __label__ = 60; break; //@line 1221 "audioop.c"
      case 60: // $bb65
        var $259=HEAP[$cp]; //@line 1222 "audioop.c"
        var $260=HEAP[$size]; //@line 1222 "audioop.c"
        var $261=$259+$260; //@line 1222 "audioop.c"
        HEAP[$cp]=$261; //@line 1222 "audioop.c"
        var $262=$cur_i; //@line 1224 "audioop.c"
        var $263=$chan; //@line 1224 "audioop.c"
        var $264=$262+4*$263; //@line 1224 "audioop.c"
        var $265=HEAP[$264]; //@line 1224 "audioop.c"
        var $266=HEAP[$weightA]; //@line 1224 "audioop.c"
        var $267=($266) * ($265); //@line 1224 "audioop.c"
        var $268=$prev_i; //@line 1224 "audioop.c"
        var $269=$chan; //@line 1224 "audioop.c"
        var $270=$268+4*$269; //@line 1224 "audioop.c"
        var $271=HEAP[$270]; //@line 1224 "audioop.c"
        var $272=HEAP[$weightB]; //@line 1224 "audioop.c"
        var $273=($272) * ($271); //@line 1224 "audioop.c"
        var $274=($273) + ($267); //@line 1224 "audioop.c"
        var $275=HEAP[$weightA]; //@line 1224 "audioop.c"
        var $276=HEAP[$weightB]; //@line 1224 "audioop.c"
        var $277=($276) + ($275); //@line 1224 "audioop.c"
        var $278=((($274)/($277))|0); //@line 1224 "audioop.c"
        var $279=$cur_i; //@line 1224 "audioop.c"
        var $280=$chan; //@line 1224 "audioop.c"
        var $281=$279+4*$280; //@line 1224 "audioop.c"
        HEAP[$281]=$278; //@line 1224 "audioop.c"
        var $282=$chan; //@line 1214 "audioop.c"
        var $283=($282) + 1; //@line 1214 "audioop.c"
        $chan=$283; //@line 1214 "audioop.c"
        var $284=HEAP[$nchannels]; //@line 1214 "audioop.c"
        var $285=$chan; //@line 1214 "audioop.c"
        var $286=($285) < ($284); //@line 1214 "audioop.c"
        if ($286) { __label__ = 54; break; } else { __label__ = 61; break; } //@line 1214 "audioop.c"
      case 61: // $bb67
        var $287=HEAP[$len]; //@line 1229 "audioop.c"
        var $288=($287) - 1; //@line 1229 "audioop.c"
        HEAP[$len]=$288; //@line 1229 "audioop.c"
        var $289=HEAP[$d]; //@line 1230 "audioop.c"
        var $290=HEAP[$outrate]; //@line 1230 "audioop.c"
        var $291=($290) + ($289); //@line 1230 "audioop.c"
        HEAP[$d]=$291; //@line 1230 "audioop.c"
        __lastLabel__ = 61; __label__ = 62; break; //@line 1230 "audioop.c"
      case 62: // $bb68
        var $292=__lastLabel__ == 38 ? $_pr : (__lastLabel__ == 61 ? $291 : (__lastLabel__ == 72 ? $_pr1 : ($345)));
        var $293=($292) < 0; //@line 1187 "audioop.c"
        if ($293) { __label__ = 39; break; } else { __label__ = 72; break; } //@line 1187 "audioop.c"
      case 63: // $bb70
        $chan=0; //@line 1233 "audioop.c"
        var $294=HEAP[$nchannels]; //@line 1233 "audioop.c"
        var $295=$chan; //@line 1233 "audioop.c"
        var $296=($295) < ($294); //@line 1233 "audioop.c"
        if ($296) { __label__ = 64; break; } else { __label__ = 71; break; } //@line 1233 "audioop.c"
      case 64: // $bb71
        var $297=$prev_i; //@line 1234 "audioop.c"
        var $298=$chan; //@line 1234 "audioop.c"
        var $299=$297+4*$298; //@line 1234 "audioop.c"
        var $300=HEAP[$299]; //@line 1234 "audioop.c"
        var $301=HEAP[$d]; //@line 1234 "audioop.c"
        var $302=($301) * ($300); //@line 1234 "audioop.c"
        var $303=$cur_i; //@line 1234 "audioop.c"
        var $304=$chan; //@line 1234 "audioop.c"
        var $305=$303+4*$304; //@line 1234 "audioop.c"
        var $306=HEAP[$305]; //@line 1234 "audioop.c"
        var $307=HEAP[$outrate]; //@line 1234 "audioop.c"
        var $308=HEAP[$d]; //@line 1234 "audioop.c"
        var $309=($307) - ($308); //@line 1234 "audioop.c"
        var $310=($309) * ($306); //@line 1234 "audioop.c"
        var $311=($310) + ($302); //@line 1234 "audioop.c"
        var $312=HEAP[$outrate]; //@line 1234 "audioop.c"
        var $313=((($311)/($312))|0); //@line 1234 "audioop.c"
        $cur_o=$313; //@line 1234 "audioop.c"
        var $314=HEAP[$size]; //@line 1237 "audioop.c"
        var $315=($314)==1; //@line 1237 "audioop.c"
        if ($315) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 1237 "audioop.c"
      case 65: // $bb72
        var $316=$ncp; //@line 1238 "audioop.c"
        var $317=$316; //@line 1238 "audioop.c"
        var $318=$cur_o; //@line 1238 "audioop.c"
        var $319=($318) >> 8; //@line 1238 "audioop.c"
        var $320=((($319)) & 255); //@line 1238 "audioop.c"
        HEAP[$317]=$320; //@line 1238 "audioop.c"
        __label__ = 70; break; //@line 1238 "audioop.c"
      case 66: // $bb73
        var $321=HEAP[$size]; //@line 1239 "audioop.c"
        var $322=($321)==2; //@line 1239 "audioop.c"
        if ($322) { __label__ = 67; break; } else { __label__ = 68; break; } //@line 1239 "audioop.c"
      case 67: // $bb74
        var $323=$ncp; //@line 1240 "audioop.c"
        var $324=$323; //@line 1240 "audioop.c"
        var $325=$324; //@line 1240 "audioop.c"
        var $326=$cur_o; //@line 1240 "audioop.c"
        var $327=((($326)) & 65535); //@line 1240 "audioop.c"
        HEAP[$325]=$327; //@line 1240 "audioop.c"
        __label__ = 70; break; //@line 1240 "audioop.c"
      case 68: // $bb75
        var $328=HEAP[$size]; //@line 1241 "audioop.c"
        var $329=($328)==4; //@line 1241 "audioop.c"
        if ($329) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 1241 "audioop.c"
      case 69: // $bb76
        var $330=$ncp; //@line 1242 "audioop.c"
        var $331=$330; //@line 1242 "audioop.c"
        var $332=$331; //@line 1242 "audioop.c"
        var $333=$cur_o; //@line 1242 "audioop.c"
        var $334=($333) << 16; //@line 1242 "audioop.c"
        HEAP[$332]=$334; //@line 1242 "audioop.c"
        __label__ = 70; break; //@line 1242 "audioop.c"
      case 70: // $bb77
        var $335=HEAP[$size]; //@line 1243 "audioop.c"
        var $336=$ncp; //@line 1243 "audioop.c"
        var $337=$336+$335; //@line 1243 "audioop.c"
        $ncp=$337; //@line 1243 "audioop.c"
        var $338=$chan; //@line 1233 "audioop.c"
        var $339=($338) + 1; //@line 1233 "audioop.c"
        $chan=$339; //@line 1233 "audioop.c"
        var $340=HEAP[$nchannels]; //@line 1233 "audioop.c"
        var $341=$chan; //@line 1233 "audioop.c"
        var $342=($341) < ($340); //@line 1233 "audioop.c"
        if ($342) { __label__ = 64; break; } else { __label__ = 71; break; } //@line 1233 "audioop.c"
      case 71: // $bb79
        var $343=HEAP[$d]; //@line 1245 "audioop.c"
        var $344=HEAP[$inrate]; //@line 1245 "audioop.c"
        var $345=($343) - ($344); //@line 1245 "audioop.c"
        HEAP[$d]=$345; //@line 1245 "audioop.c"
        var $346=($345) >= 0; //@line 1232 "audioop.c"
        if ($346) { __lastLabel__ = 71; __label__ = 63; break; } else { __lastLabel__ = 71; __label__ = 62; break; } //@line 1232 "audioop.c"
      case 72: // $bb80thread_pre_split
        var $_pr1=HEAP[$d];
        var $347=($_pr1) >= 0; //@line 1232 "audioop.c"
        if ($347) { __lastLabel__ = 72; __label__ = 63; break; } else { __lastLabel__ = 72; __label__ = 62; break; } //@line 1232 "audioop.c"
      case 73: // $exit
        var $348=$prev_i; //@line 1249 "audioop.c"
        var $349=($348)!=0; //@line 1249 "audioop.c"
        if ($349) { __label__ = 74; break; } else { __label__ = 75; break; } //@line 1249 "audioop.c"
      case 74: // $bb82
        var $350=$prev_i; //@line 1250 "audioop.c"
        var $351=$350; //@line 1250 "audioop.c"
        _free($351); //@line 1250 "audioop.c"
        __label__ = 75; break; //@line 1250 "audioop.c"
      case 75: // $bb83
        var $352=$cur_i; //@line 1251 "audioop.c"
        var $353=($352)!=0; //@line 1251 "audioop.c"
        if ($353) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 1251 "audioop.c"
      case 76: // $bb84
        var $354=$cur_i; //@line 1252 "audioop.c"
        var $355=$354; //@line 1252 "audioop.c"
        _free($355); //@line 1252 "audioop.c"
        __label__ = 77; break; //@line 1252 "audioop.c"
      case 77: // $bb85
        var $356=$rv; //@line 1253 "audioop.c"
        $0=$356; //@line 1253 "audioop.c"
        __label__ = 78; break; //@line 1253 "audioop.c"
      case 78: // $bb86
        var $357=$0; //@line 1090 "audioop.c"
        $retval=$357; //@line 1090 "audioop.c"
        var $retval87=$retval; //@line 1090 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval87; //@line 1090 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2ulaw($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 1261 "audioop.c"
        var $1=$args_addr; //@line 1265 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str39, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1265 "audioop.c"
        var $3=($2)==0; //@line 1265 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1265 "audioop.c"
      case 1: // $bb
        $0=0; //@line 1267 "audioop.c"
        __label__ = 15; break; //@line 1267 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1269 "audioop.c"
        var $5=HEAP[$len]; //@line 1269 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1269 "audioop.c"
        var $7=($6)==0; //@line 1269 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1269 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 1270 "audioop.c"
        __label__ = 15; break; //@line 1270 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 1272 "audioop.c"
        var $9=HEAP[$size]; //@line 1272 "audioop.c"
        var $10=((($8)/($9))|0); //@line 1272 "audioop.c"
        var $11=_PyString_FromStringAndSize(0, $10); //@line 1272 "audioop.c"
        $rv=$11; //@line 1272 "audioop.c"
        var $12=$rv; //@line 1273 "audioop.c"
        var $13=($12)==0; //@line 1273 "audioop.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1273 "audioop.c"
      case 5: // $bb4
        $0=0; //@line 1274 "audioop.c"
        __label__ = 15; break; //@line 1274 "audioop.c"
      case 6: // $bb5
        var $14=$rv; //@line 1275 "audioop.c"
        var $15=_PyString_AsString($14); //@line 1275 "audioop.c"
        $ncp=$15; //@line 1275 "audioop.c"
        $i=0; //@line 1277 "audioop.c"
        var $16=HEAP[$len]; //@line 1277 "audioop.c"
        var $17=$i; //@line 1277 "audioop.c"
        var $18=($17) < ($16); //@line 1277 "audioop.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 1277 "audioop.c"
      case 7: // $bb6
        var $19=HEAP[$size]; //@line 1278 "audioop.c"
        var $20=($19)==1; //@line 1278 "audioop.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1278 "audioop.c"
      case 8: // $bb7
        var $21=HEAP[$cp]; //@line 1278 "audioop.c"
        var $22=$i; //@line 1278 "audioop.c"
        var $23=$21+$22; //@line 1278 "audioop.c"
        var $24=HEAP[$23]; //@line 1278 "audioop.c"
        var $25=($24); //@line 1278 "audioop.c"
        var $26=($25) << 8; //@line 1278 "audioop.c"
        $val=$26; //@line 1278 "audioop.c"
        __label__ = 13; break; //@line 1278 "audioop.c"
      case 9: // $bb8
        var $27=HEAP[$size]; //@line 1279 "audioop.c"
        var $28=($27)==2; //@line 1279 "audioop.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1279 "audioop.c"
      case 10: // $bb9
        var $29=HEAP[$cp]; //@line 1279 "audioop.c"
        var $30=$i; //@line 1279 "audioop.c"
        var $31=$29+$30; //@line 1279 "audioop.c"
        var $32=$31; //@line 1279 "audioop.c"
        var $33=HEAP[$32]; //@line 1279 "audioop.c"
        var $34=($33); //@line 1279 "audioop.c"
        $val=$34; //@line 1279 "audioop.c"
        __label__ = 13; break; //@line 1279 "audioop.c"
      case 11: // $bb10
        var $35=HEAP[$size]; //@line 1280 "audioop.c"
        var $36=($35)==4; //@line 1280 "audioop.c"
        if ($36) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1280 "audioop.c"
      case 12: // $bb11
        var $37=HEAP[$cp]; //@line 1280 "audioop.c"
        var $38=$i; //@line 1280 "audioop.c"
        var $39=$37+$38; //@line 1280 "audioop.c"
        var $40=$39; //@line 1280 "audioop.c"
        var $41=HEAP[$40]; //@line 1280 "audioop.c"
        var $42=($41) >> 16; //@line 1280 "audioop.c"
        $val=$42; //@line 1280 "audioop.c"
        __label__ = 13; break; //@line 1280 "audioop.c"
      case 13: // $bb12
        var $43=$val; //@line 1282 "audioop.c"
        var $44=((($43)) & 65535); //@line 1282 "audioop.c"
        var $45=($44); //@line 1282 "audioop.c"
        var $46=((($45)) & 65535); //@line 1282 "audioop.c"
        var $47=_st_14linear2ulaw($46); //@line 1282 "audioop.c"
        var $48=$ncp; //@line 1282 "audioop.c"
        HEAP[$48]=$47; //@line 1282 "audioop.c"
        var $49=$ncp; //@line 1282 "audioop.c"
        var $50=$49+1; //@line 1282 "audioop.c"
        $ncp=$50; //@line 1282 "audioop.c"
        var $51=HEAP[$size]; //@line 1277 "audioop.c"
        var $52=$i; //@line 1277 "audioop.c"
        var $53=($52) + ($51); //@line 1277 "audioop.c"
        $i=$53; //@line 1277 "audioop.c"
        var $54=HEAP[$len]; //@line 1277 "audioop.c"
        var $55=$i; //@line 1277 "audioop.c"
        var $56=($55) < ($54); //@line 1277 "audioop.c"
        if ($56) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 1277 "audioop.c"
      case 14: // $bb14
        var $57=$rv; //@line 1284 "audioop.c"
        $0=$57; //@line 1284 "audioop.c"
        __label__ = 15; break; //@line 1284 "audioop.c"
      case 15: // $bb15
        var $58=$0; //@line 1267 "audioop.c"
        $retval=$58; //@line 1267 "audioop.c"
        var $retval16=$retval; //@line 1267 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1267 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_ulaw2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $cval;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1297 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str40, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1297 "audioop.c"
        var $3=($2)==0; //@line 1297 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1297 "audioop.c"
      case 1: // $bb
        $0=0; //@line 1299 "audioop.c"
        __label__ = 17; break; //@line 1299 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1301 "audioop.c"
        var $5=HEAP[$len]; //@line 1301 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1301 "audioop.c"
        var $7=($6)==0; //@line 1301 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1301 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 1302 "audioop.c"
        __label__ = 17; break; //@line 1302 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 1304 "audioop.c"
        var $9=((2147483647/($8))|0); //@line 1304 "audioop.c"
        var $10=HEAP[$len]; //@line 1304 "audioop.c"
        var $11=($9) < ($10); //@line 1304 "audioop.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1304 "audioop.c"
      case 5: // $bb4
        var $12=HEAP[_PyExc_MemoryError]; //@line 1305 "audioop.c"
        _PyErr_SetString($12, __str23); //@line 1305 "audioop.c"
        $0=0; //@line 1307 "audioop.c"
        __label__ = 17; break; //@line 1307 "audioop.c"
      case 6: // $bb5
        var $13=HEAP[$len]; //@line 1309 "audioop.c"
        var $14=HEAP[$size]; //@line 1309 "audioop.c"
        var $15=($14) * ($13); //@line 1309 "audioop.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 1309 "audioop.c"
        $rv=$16; //@line 1309 "audioop.c"
        var $17=$rv; //@line 1310 "audioop.c"
        var $18=($17)==0; //@line 1310 "audioop.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1310 "audioop.c"
      case 7: // $bb6
        $0=0; //@line 1311 "audioop.c"
        __label__ = 17; break; //@line 1311 "audioop.c"
      case 8: // $bb7
        var $19=$rv; //@line 1312 "audioop.c"
        var $20=_PyString_AsString($19); //@line 1312 "audioop.c"
        $ncp=$20; //@line 1312 "audioop.c"
        $i=0; //@line 1314 "audioop.c"
        var $21=HEAP[$len]; //@line 1314 "audioop.c"
        var $22=HEAP[$size]; //@line 1314 "audioop.c"
        var $23=($22) * ($21); //@line 1314 "audioop.c"
        var $24=$i; //@line 1314 "audioop.c"
        var $25=($23) > ($24); //@line 1314 "audioop.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 1314 "audioop.c"
      case 9: // $bb8
        var $26=HEAP[$cp]; //@line 1315 "audioop.c"
        var $27=HEAP[$26]; //@line 1315 "audioop.c"
        $cval=$27; //@line 1315 "audioop.c"
        var $28=$26+1; //@line 1315 "audioop.c"
        HEAP[$cp]=$28; //@line 1315 "audioop.c"
        var $29=$cval; //@line 1316 "audioop.c"
        var $30=($29); //@line 1316 "audioop.c"
        var $31=__st_ulaw2linear16+$30*2; //@line 1316 "audioop.c"
        var $32=HEAP[$31]; //@line 1316 "audioop.c"
        var $33=($32); //@line 1316 "audioop.c"
        $val=$33; //@line 1316 "audioop.c"
        var $34=HEAP[$size]; //@line 1318 "audioop.c"
        var $35=($34)==1; //@line 1318 "audioop.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1318 "audioop.c"
      case 10: // $bb9
        var $36=$val; //@line 1318 "audioop.c"
        var $37=($36) >> 8; //@line 1318 "audioop.c"
        var $38=((($37)) & 255); //@line 1318 "audioop.c"
        var $39=$ncp; //@line 1318 "audioop.c"
        var $40=$i; //@line 1318 "audioop.c"
        var $41=$39+$40; //@line 1318 "audioop.c"
        HEAP[$41]=$38; //@line 1318 "audioop.c"
        __label__ = 15; break; //@line 1318 "audioop.c"
      case 11: // $bb10
        var $42=HEAP[$size]; //@line 1319 "audioop.c"
        var $43=($42)==2; //@line 1319 "audioop.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1319 "audioop.c"
      case 12: // $bb11
        var $44=$ncp; //@line 1319 "audioop.c"
        var $45=$i; //@line 1319 "audioop.c"
        var $46=$44+$45; //@line 1319 "audioop.c"
        var $47=$46; //@line 1319 "audioop.c"
        var $48=$val; //@line 1319 "audioop.c"
        var $49=((($48)) & 65535); //@line 1319 "audioop.c"
        HEAP[$47]=$49; //@line 1319 "audioop.c"
        __label__ = 15; break; //@line 1319 "audioop.c"
      case 13: // $bb12
        var $50=HEAP[$size]; //@line 1320 "audioop.c"
        var $51=($50)==4; //@line 1320 "audioop.c"
        if ($51) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1320 "audioop.c"
      case 14: // $bb13
        var $52=$ncp; //@line 1320 "audioop.c"
        var $53=$i; //@line 1320 "audioop.c"
        var $54=$52+$53; //@line 1320 "audioop.c"
        var $55=$54; //@line 1320 "audioop.c"
        var $56=$val; //@line 1320 "audioop.c"
        var $57=($56) << 16; //@line 1320 "audioop.c"
        HEAP[$55]=$57; //@line 1320 "audioop.c"
        __label__ = 15; break; //@line 1320 "audioop.c"
      case 15: // $bb14
        var $58=HEAP[$size]; //@line 1314 "audioop.c"
        var $59=$i; //@line 1314 "audioop.c"
        var $60=($59) + ($58); //@line 1314 "audioop.c"
        $i=$60; //@line 1314 "audioop.c"
        var $61=HEAP[$len]; //@line 1314 "audioop.c"
        var $62=HEAP[$size]; //@line 1314 "audioop.c"
        var $63=($62) * ($61); //@line 1314 "audioop.c"
        var $64=$i; //@line 1314 "audioop.c"
        var $65=($63) > ($64); //@line 1314 "audioop.c"
        if ($65) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 1314 "audioop.c"
      case 16: // $bb16
        var $66=$rv; //@line 1322 "audioop.c"
        $0=$66; //@line 1322 "audioop.c"
        __label__ = 17; break; //@line 1322 "audioop.c"
      case 17: // $bb17
        var $67=$0; //@line 1299 "audioop.c"
        $retval=$67; //@line 1299 "audioop.c"
        var $retval18=$retval; //@line 1299 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1299 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2alaw($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 1330 "audioop.c"
        var $1=$args_addr; //@line 1334 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str41, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1334 "audioop.c"
        var $3=($2)==0; //@line 1334 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1334 "audioop.c"
      case 1: // $bb
        $0=0; //@line 1336 "audioop.c"
        __label__ = 15; break; //@line 1336 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1338 "audioop.c"
        var $5=HEAP[$len]; //@line 1338 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1338 "audioop.c"
        var $7=($6)==0; //@line 1338 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1338 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 1339 "audioop.c"
        __label__ = 15; break; //@line 1339 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 1341 "audioop.c"
        var $9=HEAP[$size]; //@line 1341 "audioop.c"
        var $10=((($8)/($9))|0); //@line 1341 "audioop.c"
        var $11=_PyString_FromStringAndSize(0, $10); //@line 1341 "audioop.c"
        $rv=$11; //@line 1341 "audioop.c"
        var $12=$rv; //@line 1342 "audioop.c"
        var $13=($12)==0; //@line 1342 "audioop.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1342 "audioop.c"
      case 5: // $bb4
        $0=0; //@line 1343 "audioop.c"
        __label__ = 15; break; //@line 1343 "audioop.c"
      case 6: // $bb5
        var $14=$rv; //@line 1344 "audioop.c"
        var $15=_PyString_AsString($14); //@line 1344 "audioop.c"
        $ncp=$15; //@line 1344 "audioop.c"
        $i=0; //@line 1346 "audioop.c"
        var $16=HEAP[$len]; //@line 1346 "audioop.c"
        var $17=$i; //@line 1346 "audioop.c"
        var $18=($17) < ($16); //@line 1346 "audioop.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 1346 "audioop.c"
      case 7: // $bb6
        var $19=HEAP[$size]; //@line 1347 "audioop.c"
        var $20=($19)==1; //@line 1347 "audioop.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1347 "audioop.c"
      case 8: // $bb7
        var $21=HEAP[$cp]; //@line 1347 "audioop.c"
        var $22=$i; //@line 1347 "audioop.c"
        var $23=$21+$22; //@line 1347 "audioop.c"
        var $24=HEAP[$23]; //@line 1347 "audioop.c"
        var $25=($24); //@line 1347 "audioop.c"
        var $26=($25) << 8; //@line 1347 "audioop.c"
        $val=$26; //@line 1347 "audioop.c"
        __label__ = 13; break; //@line 1347 "audioop.c"
      case 9: // $bb8
        var $27=HEAP[$size]; //@line 1348 "audioop.c"
        var $28=($27)==2; //@line 1348 "audioop.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1348 "audioop.c"
      case 10: // $bb9
        var $29=HEAP[$cp]; //@line 1348 "audioop.c"
        var $30=$i; //@line 1348 "audioop.c"
        var $31=$29+$30; //@line 1348 "audioop.c"
        var $32=$31; //@line 1348 "audioop.c"
        var $33=HEAP[$32]; //@line 1348 "audioop.c"
        var $34=($33); //@line 1348 "audioop.c"
        $val=$34; //@line 1348 "audioop.c"
        __label__ = 13; break; //@line 1348 "audioop.c"
      case 11: // $bb10
        var $35=HEAP[$size]; //@line 1349 "audioop.c"
        var $36=($35)==4; //@line 1349 "audioop.c"
        if ($36) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1349 "audioop.c"
      case 12: // $bb11
        var $37=HEAP[$cp]; //@line 1349 "audioop.c"
        var $38=$i; //@line 1349 "audioop.c"
        var $39=$37+$38; //@line 1349 "audioop.c"
        var $40=$39; //@line 1349 "audioop.c"
        var $41=HEAP[$40]; //@line 1349 "audioop.c"
        var $42=($41) >> 16; //@line 1349 "audioop.c"
        $val=$42; //@line 1349 "audioop.c"
        __label__ = 13; break; //@line 1349 "audioop.c"
      case 13: // $bb12
        var $43=$val; //@line 1351 "audioop.c"
        var $44=((($43)) & 65535); //@line 1351 "audioop.c"
        var $45=($44); //@line 1351 "audioop.c"
        var $46=((($45)) & 65535); //@line 1351 "audioop.c"
        var $47=_st_linear2alaw($46); //@line 1351 "audioop.c"
        var $48=$ncp; //@line 1351 "audioop.c"
        HEAP[$48]=$47; //@line 1351 "audioop.c"
        var $49=$ncp; //@line 1351 "audioop.c"
        var $50=$49+1; //@line 1351 "audioop.c"
        $ncp=$50; //@line 1351 "audioop.c"
        var $51=HEAP[$size]; //@line 1346 "audioop.c"
        var $52=$i; //@line 1346 "audioop.c"
        var $53=($52) + ($51); //@line 1346 "audioop.c"
        $i=$53; //@line 1346 "audioop.c"
        var $54=HEAP[$len]; //@line 1346 "audioop.c"
        var $55=$i; //@line 1346 "audioop.c"
        var $56=($55) < ($54); //@line 1346 "audioop.c"
        if ($56) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 1346 "audioop.c"
      case 14: // $bb14
        var $57=$rv; //@line 1353 "audioop.c"
        $0=$57; //@line 1353 "audioop.c"
        __label__ = 15; break; //@line 1353 "audioop.c"
      case 15: // $bb15
        var $58=$0; //@line 1336 "audioop.c"
        $retval=$58; //@line 1336 "audioop.c"
        var $retval16=$retval; //@line 1336 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1336 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_alaw2lin($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $cp=__stackBase__;
        var $cval;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $rv;
        var $i;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1366 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str42, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1366 "audioop.c"
        var $3=($2)==0; //@line 1366 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1366 "audioop.c"
      case 1: // $bb
        $0=0; //@line 1368 "audioop.c"
        __label__ = 17; break; //@line 1368 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1370 "audioop.c"
        var $5=HEAP[$len]; //@line 1370 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1370 "audioop.c"
        var $7=($6)==0; //@line 1370 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1370 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 1371 "audioop.c"
        __label__ = 17; break; //@line 1371 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$size]; //@line 1373 "audioop.c"
        var $9=((2147483647/($8))|0); //@line 1373 "audioop.c"
        var $10=HEAP[$len]; //@line 1373 "audioop.c"
        var $11=($9) < ($10); //@line 1373 "audioop.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1373 "audioop.c"
      case 5: // $bb4
        var $12=HEAP[_PyExc_MemoryError]; //@line 1374 "audioop.c"
        _PyErr_SetString($12, __str23); //@line 1374 "audioop.c"
        $0=0; //@line 1376 "audioop.c"
        __label__ = 17; break; //@line 1376 "audioop.c"
      case 6: // $bb5
        var $13=HEAP[$len]; //@line 1378 "audioop.c"
        var $14=HEAP[$size]; //@line 1378 "audioop.c"
        var $15=($14) * ($13); //@line 1378 "audioop.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 1378 "audioop.c"
        $rv=$16; //@line 1378 "audioop.c"
        var $17=$rv; //@line 1379 "audioop.c"
        var $18=($17)==0; //@line 1379 "audioop.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1379 "audioop.c"
      case 7: // $bb6
        $0=0; //@line 1380 "audioop.c"
        __label__ = 17; break; //@line 1380 "audioop.c"
      case 8: // $bb7
        var $19=$rv; //@line 1381 "audioop.c"
        var $20=_PyString_AsString($19); //@line 1381 "audioop.c"
        $ncp=$20; //@line 1381 "audioop.c"
        $i=0; //@line 1383 "audioop.c"
        var $21=HEAP[$len]; //@line 1383 "audioop.c"
        var $22=HEAP[$size]; //@line 1383 "audioop.c"
        var $23=($22) * ($21); //@line 1383 "audioop.c"
        var $24=$i; //@line 1383 "audioop.c"
        var $25=($23) > ($24); //@line 1383 "audioop.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 1383 "audioop.c"
      case 9: // $bb8
        var $26=HEAP[$cp]; //@line 1384 "audioop.c"
        var $27=HEAP[$26]; //@line 1384 "audioop.c"
        $cval=$27; //@line 1384 "audioop.c"
        var $28=$26+1; //@line 1384 "audioop.c"
        HEAP[$cp]=$28; //@line 1384 "audioop.c"
        var $29=$cval; //@line 1385 "audioop.c"
        var $30=($29); //@line 1385 "audioop.c"
        var $31=__st_alaw2linear16+$30*2; //@line 1385 "audioop.c"
        var $32=HEAP[$31]; //@line 1385 "audioop.c"
        var $33=($32); //@line 1385 "audioop.c"
        $val=$33; //@line 1385 "audioop.c"
        var $34=HEAP[$size]; //@line 1387 "audioop.c"
        var $35=($34)==1; //@line 1387 "audioop.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1387 "audioop.c"
      case 10: // $bb9
        var $36=$val; //@line 1387 "audioop.c"
        var $37=($36) >> 8; //@line 1387 "audioop.c"
        var $38=((($37)) & 255); //@line 1387 "audioop.c"
        var $39=$ncp; //@line 1387 "audioop.c"
        var $40=$i; //@line 1387 "audioop.c"
        var $41=$39+$40; //@line 1387 "audioop.c"
        HEAP[$41]=$38; //@line 1387 "audioop.c"
        __label__ = 15; break; //@line 1387 "audioop.c"
      case 11: // $bb10
        var $42=HEAP[$size]; //@line 1388 "audioop.c"
        var $43=($42)==2; //@line 1388 "audioop.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1388 "audioop.c"
      case 12: // $bb11
        var $44=$ncp; //@line 1388 "audioop.c"
        var $45=$i; //@line 1388 "audioop.c"
        var $46=$44+$45; //@line 1388 "audioop.c"
        var $47=$46; //@line 1388 "audioop.c"
        var $48=$val; //@line 1388 "audioop.c"
        var $49=((($48)) & 65535); //@line 1388 "audioop.c"
        HEAP[$47]=$49; //@line 1388 "audioop.c"
        __label__ = 15; break; //@line 1388 "audioop.c"
      case 13: // $bb12
        var $50=HEAP[$size]; //@line 1389 "audioop.c"
        var $51=($50)==4; //@line 1389 "audioop.c"
        if ($51) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1389 "audioop.c"
      case 14: // $bb13
        var $52=$ncp; //@line 1389 "audioop.c"
        var $53=$i; //@line 1389 "audioop.c"
        var $54=$52+$53; //@line 1389 "audioop.c"
        var $55=$54; //@line 1389 "audioop.c"
        var $56=$val; //@line 1389 "audioop.c"
        var $57=($56) << 16; //@line 1389 "audioop.c"
        HEAP[$55]=$57; //@line 1389 "audioop.c"
        __label__ = 15; break; //@line 1389 "audioop.c"
      case 15: // $bb14
        var $58=HEAP[$size]; //@line 1383 "audioop.c"
        var $59=$i; //@line 1383 "audioop.c"
        var $60=($59) + ($58); //@line 1383 "audioop.c"
        $i=$60; //@line 1383 "audioop.c"
        var $61=HEAP[$len]; //@line 1383 "audioop.c"
        var $62=HEAP[$size]; //@line 1383 "audioop.c"
        var $63=($62) * ($61); //@line 1383 "audioop.c"
        var $64=$i; //@line 1383 "audioop.c"
        var $65=($63) > ($64); //@line 1383 "audioop.c"
        if ($65) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 1383 "audioop.c"
      case 16: // $bb16
        var $66=$rv; //@line 1391 "audioop.c"
        $0=$66; //@line 1391 "audioop.c"
        __label__ = 17; break; //@line 1391 "audioop.c"
      case 17: // $bb17
        var $67=$0; //@line 1368 "audioop.c"
        $retval=$67; //@line 1368 "audioop.c"
        var $retval18=$retval; //@line 1368 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1368 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_lin2adpcm($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_511;
        var $0;
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $val;
        var $step;
        var $valpred=__stackBase__+12;
        var $delta;
        var $index=__stackBase__+16;
        var $sign;
        var $vpdiff;
        var $diff;
        var $rv;
        var $state=__stackBase__+20;
        var $str;
        var $i;
        var $outputbuffer;
        var $bufferstep;
        $self_addr=$self;
        $args_addr=$args;
        $val=0; //@line 1399 "audioop.c"
        $outputbuffer=0; //@line 1402 "audioop.c"
        var $1=$args_addr; //@line 1404 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str43, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$state,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1404 "audioop.c"
        var $3=($2)==0; //@line 1404 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1404 "audioop.c"
      case 1: // $bb
        $0=0; //@line 1406 "audioop.c"
        __label__ = 44; break; //@line 1406 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1408 "audioop.c"
        var $5=HEAP[$len]; //@line 1408 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1408 "audioop.c"
        var $7=($6)==0; //@line 1408 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1408 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 1409 "audioop.c"
        __label__ = 44; break; //@line 1409 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$len]; //@line 1411 "audioop.c"
        var $9=HEAP[$size]; //@line 1411 "audioop.c"
        var $10=($9) * 2; //@line 1411 "audioop.c"
        var $11=((($8)/($10))|0); //@line 1411 "audioop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 1411 "audioop.c"
        $str=$12; //@line 1411 "audioop.c"
        var $13=$str; //@line 1412 "audioop.c"
        var $14=($13)==0; //@line 1412 "audioop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1412 "audioop.c"
      case 5: // $bb4
        $0=0; //@line 1413 "audioop.c"
        __label__ = 44; break; //@line 1413 "audioop.c"
      case 6: // $bb5
        var $15=$str; //@line 1414 "audioop.c"
        var $16=_PyString_AsString($15); //@line 1414 "audioop.c"
        $ncp=$16; //@line 1414 "audioop.c"
        var $17=HEAP[$state]; //@line 1417 "audioop.c"
        var $18=($17)==(__Py_NoneStruct); //@line 1417 "audioop.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1417 "audioop.c"
      case 7: // $bb6
        HEAP[$valpred]=0; //@line 1419 "audioop.c"
        HEAP[$index]=0; //@line 1420 "audioop.c"
        __label__ = 10; break; //@line 1420 "audioop.c"
      case 8: // $bb7
        var $19=HEAP[$state]; //@line 1421 "audioop.c"
        var $20=_PyArg_ParseTuple($19, __str44, allocate([$valpred,0,0,0,$index,0,0,0], ["i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1421 "audioop.c"
        var $21=($20)==0; //@line 1421 "audioop.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1421 "audioop.c"
      case 9: // $bb8
        $0=0; //@line 1422 "audioop.c"
        __label__ = 44; break; //@line 1422 "audioop.c"
      case 10: // $bb9
        var $22=HEAP[$index]; //@line 1424 "audioop.c"
        var $23=_stepsizeTable+$22*4; //@line 1424 "audioop.c"
        var $24=HEAP[$23]; //@line 1424 "audioop.c"
        $step=$24; //@line 1424 "audioop.c"
        $bufferstep=1; //@line 1425 "audioop.c"
        $i=0; //@line 1427 "audioop.c"
        var $25=HEAP[$len]; //@line 1427 "audioop.c"
        var $26=$i; //@line 1427 "audioop.c"
        var $27=($26) < ($25); //@line 1427 "audioop.c"
        if ($27) { __label__ = 11; break; } else { __label__ = 41; break; } //@line 1427 "audioop.c"
      case 11: // $bb10
        var $28=HEAP[$size]; //@line 1428 "audioop.c"
        var $29=($28)==1; //@line 1428 "audioop.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1428 "audioop.c"
      case 12: // $bb11
        var $30=HEAP[$cp]; //@line 1428 "audioop.c"
        var $31=$i; //@line 1428 "audioop.c"
        var $32=$30+$31; //@line 1428 "audioop.c"
        var $33=HEAP[$32]; //@line 1428 "audioop.c"
        var $34=($33); //@line 1428 "audioop.c"
        var $35=($34) << 8; //@line 1428 "audioop.c"
        $val=$35; //@line 1428 "audioop.c"
        __label__ = 17; break; //@line 1428 "audioop.c"
      case 13: // $bb12
        var $36=HEAP[$size]; //@line 1429 "audioop.c"
        var $37=($36)==2; //@line 1429 "audioop.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1429 "audioop.c"
      case 14: // $bb13
        var $38=HEAP[$cp]; //@line 1429 "audioop.c"
        var $39=$i; //@line 1429 "audioop.c"
        var $40=$38+$39; //@line 1429 "audioop.c"
        var $41=$40; //@line 1429 "audioop.c"
        var $42=HEAP[$41]; //@line 1429 "audioop.c"
        var $43=($42); //@line 1429 "audioop.c"
        $val=$43; //@line 1429 "audioop.c"
        __label__ = 17; break; //@line 1429 "audioop.c"
      case 15: // $bb14
        var $44=HEAP[$size]; //@line 1430 "audioop.c"
        var $45=($44)==4; //@line 1430 "audioop.c"
        if ($45) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1430 "audioop.c"
      case 16: // $bb15
        var $46=HEAP[$cp]; //@line 1430 "audioop.c"
        var $47=$i; //@line 1430 "audioop.c"
        var $48=$46+$47; //@line 1430 "audioop.c"
        var $49=$48; //@line 1430 "audioop.c"
        var $50=HEAP[$49]; //@line 1430 "audioop.c"
        var $51=($50) >> 16; //@line 1430 "audioop.c"
        $val=$51; //@line 1430 "audioop.c"
        __label__ = 17; break; //@line 1430 "audioop.c"
      case 17: // $bb16
        var $52=HEAP[$valpred]; //@line 1433 "audioop.c"
        var $53=$val; //@line 1433 "audioop.c"
        var $54=($53) - ($52); //@line 1433 "audioop.c"
        $diff=$54; //@line 1433 "audioop.c"
        var $55=($54) < 0; //@line 1434 "audioop.c"
        if ($55) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 1434 "audioop.c"
      case 18: // $bb19
        $iftmp_511=0; //@line 1434 "audioop.c"
        $sign=0; //@line 1434 "audioop.c"
        __label__ = 20; break;
      case 19: // $bb20
        $iftmp_511=8; //@line 1434 "audioop.c"
        $sign=8; //@line 1434 "audioop.c"
        var $56=$diff; //@line 1435 "audioop.c"
        var $57=0 - ($56); //@line 1435 "audioop.c"
        $diff=$57; //@line 1435 "audioop.c"
        __label__ = 20; break; //@line 1435 "audioop.c"
      case 20: // $bb21
        $delta=0; //@line 1446 "audioop.c"
        var $58=$step; //@line 1447 "audioop.c"
        var $59=($58) >> 3; //@line 1447 "audioop.c"
        $vpdiff=$59; //@line 1447 "audioop.c"
        var $60=$diff; //@line 1449 "audioop.c"
        var $61=$step; //@line 1449 "audioop.c"
        var $62=($60) >= ($61); //@line 1449 "audioop.c"
        if ($62) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1449 "audioop.c"
      case 21: // $bb22
        $delta=4; //@line 1450 "audioop.c"
        var $63=$diff; //@line 1451 "audioop.c"
        var $64=$step; //@line 1451 "audioop.c"
        var $65=($63) - ($64); //@line 1451 "audioop.c"
        $diff=$65; //@line 1451 "audioop.c"
        var $66=$vpdiff; //@line 1452 "audioop.c"
        var $67=$step; //@line 1452 "audioop.c"
        var $68=($67) + ($66); //@line 1452 "audioop.c"
        $vpdiff=$68; //@line 1452 "audioop.c"
        __label__ = 22; break; //@line 1452 "audioop.c"
      case 22: // $bb23
        var $69=$step; //@line 1454 "audioop.c"
        var $70=($69) >> 1; //@line 1454 "audioop.c"
        $step=$70; //@line 1454 "audioop.c"
        var $71=$diff; //@line 1455 "audioop.c"
        var $72=$step; //@line 1455 "audioop.c"
        var $73=($71) >= ($72); //@line 1455 "audioop.c"
        if ($73) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1455 "audioop.c"
      case 23: // $bb24
        var $74=$delta; //@line 1456 "audioop.c"
        var $75=($74) | 2; //@line 1456 "audioop.c"
        $delta=$75; //@line 1456 "audioop.c"
        var $76=$diff; //@line 1457 "audioop.c"
        var $77=$step; //@line 1457 "audioop.c"
        var $78=($76) - ($77); //@line 1457 "audioop.c"
        $diff=$78; //@line 1457 "audioop.c"
        var $79=$vpdiff; //@line 1458 "audioop.c"
        var $80=$step; //@line 1458 "audioop.c"
        var $81=($80) + ($79); //@line 1458 "audioop.c"
        $vpdiff=$81; //@line 1458 "audioop.c"
        __label__ = 24; break; //@line 1458 "audioop.c"
      case 24: // $bb25
        var $82=$step; //@line 1460 "audioop.c"
        var $83=($82) >> 1; //@line 1460 "audioop.c"
        $step=$83; //@line 1460 "audioop.c"
        var $84=$diff; //@line 1461 "audioop.c"
        var $85=$step; //@line 1461 "audioop.c"
        var $86=($84) >= ($85); //@line 1461 "audioop.c"
        if ($86) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1461 "audioop.c"
      case 25: // $bb26
        var $87=$delta; //@line 1462 "audioop.c"
        var $88=($87) | 1; //@line 1462 "audioop.c"
        $delta=$88; //@line 1462 "audioop.c"
        var $89=$vpdiff; //@line 1463 "audioop.c"
        var $90=$step; //@line 1463 "audioop.c"
        var $91=($90) + ($89); //@line 1463 "audioop.c"
        $vpdiff=$91; //@line 1463 "audioop.c"
        __label__ = 26; break; //@line 1463 "audioop.c"
      case 26: // $bb27
        var $92=$sign; //@line 1467 "audioop.c"
        var $93=($92)!=0; //@line 1467 "audioop.c"
        var $94=HEAP[$valpred]; //@line 1468 "audioop.c"
        var $95=$vpdiff; //@line 1468 "audioop.c"
        if ($93) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1467 "audioop.c"
      case 27: // $bb28
        var $96=($94) - ($95); //@line 1468 "audioop.c"
        HEAP[$valpred]=$96; //@line 1468 "audioop.c"
        __lastLabel__ = 27; __label__ = 29; break; //@line 1468 "audioop.c"
      case 28: // $bb29
        var $97=($95) + ($94); //@line 1470 "audioop.c"
        HEAP[$valpred]=$97; //@line 1470 "audioop.c"
        __lastLabel__ = 28; __label__ = 29; break; //@line 1470 "audioop.c"
      case 29: // $bb30
        var $98=__lastLabel__ == 28 ? $97 : ($96);
        var $99=($98) > 32767; //@line 1473 "audioop.c"
        if ($99) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1473 "audioop.c"
      case 30: // $bb31
        HEAP[$valpred]=32767; //@line 1474 "audioop.c"
        __label__ = 33; break; //@line 1474 "audioop.c"
      case 31: // $bb32
        var $100=HEAP[$valpred]; //@line 1475 "audioop.c"
        var $101=($100) < -32768; //@line 1475 "audioop.c"
        if ($101) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1475 "audioop.c"
      case 32: // $bb33
        HEAP[$valpred]=-32768; //@line 1476 "audioop.c"
        __label__ = 33; break; //@line 1476 "audioop.c"
      case 33: // $bb34
        var $102=$delta; //@line 1479 "audioop.c"
        var $103=$sign; //@line 1479 "audioop.c"
        var $104=($103) | ($102); //@line 1479 "audioop.c"
        $delta=$104; //@line 1479 "audioop.c"
        var $105=$delta; //@line 1481 "audioop.c"
        var $106=_indexTable+$105*4; //@line 1481 "audioop.c"
        var $107=HEAP[$106]; //@line 1481 "audioop.c"
        var $108=HEAP[$index]; //@line 1481 "audioop.c"
        var $109=($108) + ($107); //@line 1481 "audioop.c"
        HEAP[$index]=$109; //@line 1481 "audioop.c"
        var $110=($109) < 0; //@line 1482 "audioop.c"
        if ($110) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1482 "audioop.c"
      case 34: // $bb36_thread
        HEAP[$index]=0; //@line 1482 "audioop.c"
        __label__ = 37; break;
      case 35: // $bb36
        var $111=($109) > 88; //@line 1483 "audioop.c"
        if ($111) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1483 "audioop.c"
      case 36: // $bb37
        HEAP[$index]=88; //@line 1483 "audioop.c"
        __label__ = 37; break; //@line 1483 "audioop.c"
      case 37: // $bb38
        var $112=HEAP[$index]; //@line 1484 "audioop.c"
        var $113=_stepsizeTable+$112*4; //@line 1484 "audioop.c"
        var $114=HEAP[$113]; //@line 1484 "audioop.c"
        $step=$114; //@line 1484 "audioop.c"
        var $115=$bufferstep; //@line 1487 "audioop.c"
        var $116=($115)!=0; //@line 1487 "audioop.c"
        var $117=$delta; //@line 1488 "audioop.c"
        if ($116) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1487 "audioop.c"
      case 38: // $bb39
        var $118=($117) << 4; //@line 1488 "audioop.c"
        var $119=($118) & 240; //@line 1488 "audioop.c"
        $outputbuffer=$119; //@line 1488 "audioop.c"
        __label__ = 40; break; //@line 1488 "audioop.c"
      case 39: // $bb40
        var $120=((($117)) & 255); //@line 1490 "audioop.c"
        var $121=($120) & 15; //@line 1490 "audioop.c"
        var $122=$outputbuffer; //@line 1490 "audioop.c"
        var $123=((($122)) & 255); //@line 1490 "audioop.c"
        var $124=($123) | ($121); //@line 1490 "audioop.c"
        var $125=$ncp; //@line 1490 "audioop.c"
        HEAP[$125]=$124; //@line 1490 "audioop.c"
        var $126=$ncp; //@line 1490 "audioop.c"
        var $127=$126+1; //@line 1490 "audioop.c"
        $ncp=$127; //@line 1490 "audioop.c"
        __label__ = 40; break; //@line 1490 "audioop.c"
      case 40: // $bb41
        var $128=$bufferstep; //@line 1492 "audioop.c"
        var $129=($128)==0; //@line 1492 "audioop.c"
        var $130=($129); //@line 1492 "audioop.c"
        $bufferstep=$130; //@line 1492 "audioop.c"
        var $131=HEAP[$size]; //@line 1427 "audioop.c"
        var $132=$i; //@line 1427 "audioop.c"
        var $133=($132) + ($131); //@line 1427 "audioop.c"
        $i=$133; //@line 1427 "audioop.c"
        var $134=HEAP[$len]; //@line 1427 "audioop.c"
        var $135=$i; //@line 1427 "audioop.c"
        var $136=($135) < ($134); //@line 1427 "audioop.c"
        if ($136) { __label__ = 11; break; } else { __label__ = 41; break; } //@line 1427 "audioop.c"
      case 41: // $bb43
        var $137=HEAP[$index]; //@line 1494 "audioop.c"
        var $138=HEAP[$valpred]; //@line 1494 "audioop.c"
        var $139=$str; //@line 1494 "audioop.c"
        var $140=_Py_BuildValue(__str45, allocate([$139,0,0,0,$138,0,0,0,$137,0,0,0], ["%struct.PyObject*",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1494 "audioop.c"
        $rv=$140; //@line 1494 "audioop.c"
        var $141=$str; //@line 1495 "audioop.c"
        var $142=$141; //@line 1495 "audioop.c"
        var $143=HEAP[$142]; //@line 1495 "audioop.c"
        var $144=($143) - 1; //@line 1495 "audioop.c"
        var $145=$str; //@line 1495 "audioop.c"
        var $146=$145; //@line 1495 "audioop.c"
        HEAP[$146]=$144; //@line 1495 "audioop.c"
        var $147=$str; //@line 1495 "audioop.c"
        var $148=$147; //@line 1495 "audioop.c"
        var $149=HEAP[$148]; //@line 1495 "audioop.c"
        var $150=($149)==0; //@line 1495 "audioop.c"
        if ($150) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1495 "audioop.c"
      case 42: // $bb44
        var $151=$str; //@line 1495 "audioop.c"
        var $152=$151+4; //@line 1495 "audioop.c"
        var $153=HEAP[$152]; //@line 1495 "audioop.c"
        var $154=$153+24; //@line 1495 "audioop.c"
        var $155=HEAP[$154]; //@line 1495 "audioop.c"
        var $156=$str; //@line 1495 "audioop.c"
        FUNCTION_TABLE[$155]($156); //@line 1495 "audioop.c"
        __label__ = 43; break; //@line 1495 "audioop.c"
      case 43: // $bb45
        var $157=$rv; //@line 1496 "audioop.c"
        $0=$157; //@line 1496 "audioop.c"
        __label__ = 44; break; //@line 1496 "audioop.c"
      case 44: // $bb46
        var $158=$0; //@line 1406 "audioop.c"
        $retval=$158; //@line 1406 "audioop.c"
        var $retval47=$retval; //@line 1406 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval47; //@line 1406 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _audioop_adpcm2lin($self, $args) {
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
        var $cp=__stackBase__;
        var $ncp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $valpred=__stackBase__+12;
        var $step;
        var $delta;
        var $index=__stackBase__+16;
        var $sign;
        var $vpdiff;
        var $rv;
        var $str;
        var $state=__stackBase__+20;
        var $i;
        var $inputbuffer;
        var $bufferstep;
        $self_addr=$self;
        $args_addr=$args;
        $inputbuffer=0; //@line 1506 "audioop.c"
        var $1=$args_addr; //@line 1508 "audioop.c"
        var $2=_PyArg_ParseTuple($1, __str46, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$state,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1508 "audioop.c"
        var $3=($2)==0; //@line 1508 "audioop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1508 "audioop.c"
      case 1: // $bb
        $0=0; //@line 1510 "audioop.c"
        __label__ = 43; break; //@line 1510 "audioop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 1512 "audioop.c"
        var $5=HEAP[$len]; //@line 1512 "audioop.c"
        var $6=_audioop_check_parameters($5, $4); //@line 1512 "audioop.c"
        var $7=($6)==0; //@line 1512 "audioop.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1512 "audioop.c"
      case 3: // $bb2
        $0=0; //@line 1513 "audioop.c"
        __label__ = 43; break; //@line 1513 "audioop.c"
      case 4: // $bb3
        var $8=HEAP[$state]; //@line 1516 "audioop.c"
        var $9=($8)==(__Py_NoneStruct); //@line 1516 "audioop.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1516 "audioop.c"
      case 5: // $bb4
        HEAP[$valpred]=0; //@line 1518 "audioop.c"
        HEAP[$index]=0; //@line 1519 "audioop.c"
        __label__ = 8; break; //@line 1519 "audioop.c"
      case 6: // $bb5
        var $10=HEAP[$state]; //@line 1520 "audioop.c"
        var $11=_PyArg_ParseTuple($10, __str44, allocate([$valpred,0,0,0,$index,0,0,0], ["i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1520 "audioop.c"
        var $12=($11)==0; //@line 1520 "audioop.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1520 "audioop.c"
      case 7: // $bb6
        $0=0; //@line 1521 "audioop.c"
        __label__ = 43; break; //@line 1521 "audioop.c"
      case 8: // $bb7
        var $13=HEAP[$size]; //@line 1523 "audioop.c"
        var $14=((1073741823/($13))|0); //@line 1523 "audioop.c"
        var $15=HEAP[$len]; //@line 1523 "audioop.c"
        var $16=($14) < ($15); //@line 1523 "audioop.c"
        if ($16) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1523 "audioop.c"
      case 9: // $bb8
        var $17=HEAP[_PyExc_MemoryError]; //@line 1524 "audioop.c"
        _PyErr_SetString($17, __str23); //@line 1524 "audioop.c"
        $0=0; //@line 1526 "audioop.c"
        __label__ = 43; break; //@line 1526 "audioop.c"
      case 10: // $bb9
        var $18=HEAP[$len]; //@line 1528 "audioop.c"
        var $19=HEAP[$size]; //@line 1528 "audioop.c"
        var $20=($18) * 2; //@line 1528 "audioop.c"
        var $21=($20) * ($19); //@line 1528 "audioop.c"
        var $22=_PyString_FromStringAndSize(0, $21); //@line 1528 "audioop.c"
        $str=$22; //@line 1528 "audioop.c"
        var $23=$str; //@line 1529 "audioop.c"
        var $24=($23)==0; //@line 1529 "audioop.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1529 "audioop.c"
      case 11: // $bb10
        $0=0; //@line 1530 "audioop.c"
        __label__ = 43; break; //@line 1530 "audioop.c"
      case 12: // $bb11
        var $25=$str; //@line 1531 "audioop.c"
        var $26=_PyString_AsString($25); //@line 1531 "audioop.c"
        $ncp=$26; //@line 1531 "audioop.c"
        var $27=HEAP[$index]; //@line 1533 "audioop.c"
        var $28=_stepsizeTable+$27*4; //@line 1533 "audioop.c"
        var $29=HEAP[$28]; //@line 1533 "audioop.c"
        $step=$29; //@line 1533 "audioop.c"
        $bufferstep=0; //@line 1534 "audioop.c"
        $i=0; //@line 1536 "audioop.c"
        var $30=HEAP[$len]; //@line 1536 "audioop.c"
        var $31=HEAP[$size]; //@line 1536 "audioop.c"
        var $32=($30) * 2; //@line 1536 "audioop.c"
        var $33=($32) * ($31); //@line 1536 "audioop.c"
        var $34=$i; //@line 1536 "audioop.c"
        var $35=($33) > ($34); //@line 1536 "audioop.c"
        if ($35) { __label__ = 13; break; } else { __label__ = 40; break; } //@line 1536 "audioop.c"
      case 13: // $bb12
        var $36=$bufferstep; //@line 1538 "audioop.c"
        var $37=($36)!=0; //@line 1538 "audioop.c"
        if ($37) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1538 "audioop.c"
      case 14: // $bb13
        var $38=$inputbuffer; //@line 1539 "audioop.c"
        var $39=($38) & 15; //@line 1539 "audioop.c"
        $delta=$39; //@line 1539 "audioop.c"
        __label__ = 16; break; //@line 1539 "audioop.c"
      case 15: // $bb14
        var $40=HEAP[$cp]; //@line 1541 "audioop.c"
        var $41=HEAP[$40]; //@line 1541 "audioop.c"
        var $42=($41); //@line 1541 "audioop.c"
        $inputbuffer=$42; //@line 1541 "audioop.c"
        var $43=$40+1; //@line 1541 "audioop.c"
        HEAP[$cp]=$43; //@line 1541 "audioop.c"
        var $44=$inputbuffer; //@line 1542 "audioop.c"
        var $45=($44) >> 4; //@line 1542 "audioop.c"
        var $46=($45) & 15; //@line 1542 "audioop.c"
        $delta=$46; //@line 1542 "audioop.c"
        __label__ = 16; break; //@line 1542 "audioop.c"
      case 16: // $bb15
        var $47=$bufferstep; //@line 1545 "audioop.c"
        var $48=($47)==0; //@line 1545 "audioop.c"
        var $49=($48); //@line 1545 "audioop.c"
        $bufferstep=$49; //@line 1545 "audioop.c"
        var $50=$delta; //@line 1548 "audioop.c"
        var $51=_indexTable+$50*4; //@line 1548 "audioop.c"
        var $52=HEAP[$51]; //@line 1548 "audioop.c"
        var $53=HEAP[$index]; //@line 1548 "audioop.c"
        var $54=($53) + ($52); //@line 1548 "audioop.c"
        HEAP[$index]=$54; //@line 1548 "audioop.c"
        var $55=($54) < 0; //@line 1549 "audioop.c"
        if ($55) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1549 "audioop.c"
      case 17: // $bb17_thread
        HEAP[$index]=0; //@line 1549 "audioop.c"
        __label__ = 20; break;
      case 18: // $bb17
        var $56=($54) > 88; //@line 1550 "audioop.c"
        if ($56) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1550 "audioop.c"
      case 19: // $bb18
        HEAP[$index]=88; //@line 1550 "audioop.c"
        __label__ = 20; break; //@line 1550 "audioop.c"
      case 20: // $bb19
        var $57=$delta; //@line 1553 "audioop.c"
        var $58=($57) & 8; //@line 1553 "audioop.c"
        $sign=$58; //@line 1553 "audioop.c"
        var $59=$delta; //@line 1554 "audioop.c"
        var $60=($59) & 7; //@line 1554 "audioop.c"
        $delta=$60; //@line 1554 "audioop.c"
        var $61=$step; //@line 1561 "audioop.c"
        var $62=($61) >> 3; //@line 1561 "audioop.c"
        $vpdiff=$62; //@line 1561 "audioop.c"
        var $63=$delta; //@line 1562 "audioop.c"
        var $64=($63) & 4; //@line 1562 "audioop.c"
        var $65=($64)!=0; //@line 1562 "audioop.c"
        if ($65) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1562 "audioop.c"
      case 21: // $bb20
        var $66=$vpdiff; //@line 1562 "audioop.c"
        var $67=$step; //@line 1562 "audioop.c"
        var $68=($67) + ($66); //@line 1562 "audioop.c"
        $vpdiff=$68; //@line 1562 "audioop.c"
        __label__ = 22; break; //@line 1562 "audioop.c"
      case 22: // $bb21
        var $69=$delta; //@line 1563 "audioop.c"
        var $70=($69) & 2; //@line 1563 "audioop.c"
        var $71=($70)!=0; //@line 1563 "audioop.c"
        if ($71) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1563 "audioop.c"
      case 23: // $bb22
        var $72=$step; //@line 1563 "audioop.c"
        var $73=($72) >> 1; //@line 1563 "audioop.c"
        var $74=$vpdiff; //@line 1563 "audioop.c"
        var $75=($73) + ($74); //@line 1563 "audioop.c"
        $vpdiff=$75; //@line 1563 "audioop.c"
        __label__ = 24; break; //@line 1563 "audioop.c"
      case 24: // $bb23
        var $76=$delta; //@line 1564 "audioop.c"
        var $77=($76) & 1; //@line 1564 "audioop.c"
        var $78=((($77)) & 255); //@line 1564 "audioop.c"
        var $toBool=($78)!=0; //@line 1564 "audioop.c"
        if ($toBool) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1564 "audioop.c"
      case 25: // $bb24
        var $79=$step; //@line 1564 "audioop.c"
        var $80=($79) >> 2; //@line 1564 "audioop.c"
        var $81=$vpdiff; //@line 1564 "audioop.c"
        var $82=($80) + ($81); //@line 1564 "audioop.c"
        $vpdiff=$82; //@line 1564 "audioop.c"
        __label__ = 26; break; //@line 1564 "audioop.c"
      case 26: // $bb25
        var $83=$sign; //@line 1566 "audioop.c"
        var $84=($83)!=0; //@line 1566 "audioop.c"
        var $85=HEAP[$valpred]; //@line 1567 "audioop.c"
        var $86=$vpdiff; //@line 1567 "audioop.c"
        if ($84) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1566 "audioop.c"
      case 27: // $bb26
        var $87=($85) - ($86); //@line 1567 "audioop.c"
        HEAP[$valpred]=$87; //@line 1567 "audioop.c"
        __lastLabel__ = 27; __label__ = 29; break; //@line 1567 "audioop.c"
      case 28: // $bb27
        var $88=($86) + ($85); //@line 1569 "audioop.c"
        HEAP[$valpred]=$88; //@line 1569 "audioop.c"
        __lastLabel__ = 28; __label__ = 29; break; //@line 1569 "audioop.c"
      case 29: // $bb28
        var $89=__lastLabel__ == 28 ? $88 : ($87);
        var $90=($89) > 32767; //@line 1572 "audioop.c"
        if ($90) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1572 "audioop.c"
      case 30: // $bb29
        HEAP[$valpred]=32767; //@line 1573 "audioop.c"
        __label__ = 33; break; //@line 1573 "audioop.c"
      case 31: // $bb30
        var $91=HEAP[$valpred]; //@line 1574 "audioop.c"
        var $92=($91) < -32768; //@line 1574 "audioop.c"
        if ($92) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1574 "audioop.c"
      case 32: // $bb31
        HEAP[$valpred]=-32768; //@line 1575 "audioop.c"
        __label__ = 33; break; //@line 1575 "audioop.c"
      case 33: // $bb32
        var $93=HEAP[$index]; //@line 1578 "audioop.c"
        var $94=_stepsizeTable+$93*4; //@line 1578 "audioop.c"
        var $95=HEAP[$94]; //@line 1578 "audioop.c"
        $step=$95; //@line 1578 "audioop.c"
        var $96=HEAP[$size]; //@line 1581 "audioop.c"
        var $97=($96)==1; //@line 1581 "audioop.c"
        if ($97) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1581 "audioop.c"
      case 34: // $bb33
        var $98=HEAP[$valpred]; //@line 1581 "audioop.c"
        var $99=($98) >> 8; //@line 1581 "audioop.c"
        var $100=((($99)) & 255); //@line 1581 "audioop.c"
        var $101=$ncp; //@line 1581 "audioop.c"
        var $102=$i; //@line 1581 "audioop.c"
        var $103=$101+$102; //@line 1581 "audioop.c"
        HEAP[$103]=$100; //@line 1581 "audioop.c"
        __label__ = 39; break; //@line 1581 "audioop.c"
      case 35: // $bb34
        var $104=HEAP[$size]; //@line 1582 "audioop.c"
        var $105=($104)==2; //@line 1582 "audioop.c"
        if ($105) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1582 "audioop.c"
      case 36: // $bb35
        var $106=$ncp; //@line 1582 "audioop.c"
        var $107=$i; //@line 1582 "audioop.c"
        var $108=$106+$107; //@line 1582 "audioop.c"
        var $109=$108; //@line 1582 "audioop.c"
        var $110=HEAP[$valpred]; //@line 1582 "audioop.c"
        var $111=((($110)) & 65535); //@line 1582 "audioop.c"
        HEAP[$109]=$111; //@line 1582 "audioop.c"
        __label__ = 39; break; //@line 1582 "audioop.c"
      case 37: // $bb36
        var $112=HEAP[$size]; //@line 1583 "audioop.c"
        var $113=($112)==4; //@line 1583 "audioop.c"
        if ($113) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1583 "audioop.c"
      case 38: // $bb37
        var $114=$ncp; //@line 1583 "audioop.c"
        var $115=$i; //@line 1583 "audioop.c"
        var $116=$114+$115; //@line 1583 "audioop.c"
        var $117=$116; //@line 1583 "audioop.c"
        var $118=HEAP[$valpred]; //@line 1583 "audioop.c"
        var $119=($118) << 16; //@line 1583 "audioop.c"
        HEAP[$117]=$119; //@line 1583 "audioop.c"
        __label__ = 39; break; //@line 1583 "audioop.c"
      case 39: // $bb38
        var $120=HEAP[$size]; //@line 1536 "audioop.c"
        var $121=$i; //@line 1536 "audioop.c"
        var $122=($121) + ($120); //@line 1536 "audioop.c"
        $i=$122; //@line 1536 "audioop.c"
        var $123=HEAP[$len]; //@line 1536 "audioop.c"
        var $124=HEAP[$size]; //@line 1536 "audioop.c"
        var $125=($123) * 2; //@line 1536 "audioop.c"
        var $126=($125) * ($124); //@line 1536 "audioop.c"
        var $127=$i; //@line 1536 "audioop.c"
        var $128=($126) > ($127); //@line 1536 "audioop.c"
        if ($128) { __label__ = 13; break; } else { __label__ = 40; break; } //@line 1536 "audioop.c"
      case 40: // $bb40
        var $129=HEAP[$index]; //@line 1586 "audioop.c"
        var $130=HEAP[$valpred]; //@line 1586 "audioop.c"
        var $131=$str; //@line 1586 "audioop.c"
        var $132=_Py_BuildValue(__str45, allocate([$131,0,0,0,$130,0,0,0,$129,0,0,0], ["%struct.PyObject*",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1586 "audioop.c"
        $rv=$132; //@line 1586 "audioop.c"
        var $133=$str; //@line 1587 "audioop.c"
        var $134=$133; //@line 1587 "audioop.c"
        var $135=HEAP[$134]; //@line 1587 "audioop.c"
        var $136=($135) - 1; //@line 1587 "audioop.c"
        var $137=$str; //@line 1587 "audioop.c"
        var $138=$137; //@line 1587 "audioop.c"
        HEAP[$138]=$136; //@line 1587 "audioop.c"
        var $139=$str; //@line 1587 "audioop.c"
        var $140=$139; //@line 1587 "audioop.c"
        var $141=HEAP[$140]; //@line 1587 "audioop.c"
        var $142=($141)==0; //@line 1587 "audioop.c"
        if ($142) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1587 "audioop.c"
      case 41: // $bb41
        var $143=$str; //@line 1587 "audioop.c"
        var $144=$143+4; //@line 1587 "audioop.c"
        var $145=HEAP[$144]; //@line 1587 "audioop.c"
        var $146=$145+24; //@line 1587 "audioop.c"
        var $147=HEAP[$146]; //@line 1587 "audioop.c"
        var $148=$str; //@line 1587 "audioop.c"
        FUNCTION_TABLE[$147]($148); //@line 1587 "audioop.c"
        __label__ = 42; break; //@line 1587 "audioop.c"
      case 42: // $bb42
        var $149=$rv; //@line 1588 "audioop.c"
        $0=$149; //@line 1588 "audioop.c"
        __label__ = 43; break; //@line 1588 "audioop.c"
      case 43: // $bb43
        var $150=$0; //@line 1510 "audioop.c"
        $retval=$150; //@line 1510 "audioop.c"
        var $retval44=$retval; //@line 1510 "audioop.c"
        STACKTOP = __stackBase__;
        return $retval44; //@line 1510 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initaudioop() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $d;
        var $0=_Py_InitModule4(__str72, _audioop_methods, 0, 0, 1013); //@line 1624 "audioop.c"
        $m=$0; //@line 1624 "audioop.c"
        var $1=$m; //@line 1625 "audioop.c"
        var $2=($1)==0; //@line 1625 "audioop.c"
        if ($2) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 1625 "audioop.c"
      case 1: // $bb
        var $3=$m; //@line 1627 "audioop.c"
        var $4=_PyModule_GetDict($3); //@line 1627 "audioop.c"
        $d=$4; //@line 1627 "audioop.c"
        var $5=$d; //@line 1628 "audioop.c"
        var $6=($5)==0; //@line 1628 "audioop.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 1628 "audioop.c"
      case 2: // $bb1
        var $7=_PyErr_NewException(__str73, 0, 0); //@line 1630 "audioop.c"
        HEAP[_AudioopError]=$7; //@line 1630 "audioop.c"
        var $8=HEAP[_AudioopError]; //@line 1631 "audioop.c"
        var $9=($8)!=0; //@line 1631 "audioop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1631 "audioop.c"
      case 3: // $bb2
        var $10=HEAP[_AudioopError]; //@line 1632 "audioop.c"
        var $11=$d; //@line 1632 "audioop.c"
        var $12=_PyDict_SetItemString($11, __str74, $10); //@line 1632 "audioop.c"
        __label__ = 4; break; //@line 1632 "audioop.c"
      case 4: // $return
        ;
        return; //@line 1626 "audioop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initaudioop"] = _initaudioop;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_audioop_max,0,_audioop_minmax,0,_audioop_avg,0,_audioop_maxpp,0,_audioop_avgpp,0,_audioop_rms,0,_audioop_findfit,0,_audioop_findmax,0,_audioop_findfactor,0,_audioop_cross,0,_audioop_mul,0,_audioop_add,0,_audioop_bias,0,_audioop_ulaw2lin,0,_audioop_lin2ulaw,0,_audioop_alaw2lin,0,_audioop_lin2alaw,0,_audioop_lin2lin,0,_audioop_adpcm2lin,0,_audioop_lin2adpcm,0,_audioop_tomono,0,_audioop_tostereo,0,_audioop_getsample,0,_audioop_reverse,0,_audioop_ratecv,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_seg_aend=allocate([31, 0, 63, 0, 127, 0, 255, 0, 511, 0, 1023, 0, 2047, 0, 4095, 0], ["i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0], ALLOC_NORMAL);
_seg_uend=allocate([63, 0, 127, 0, 255, 0, 511, 0, 1023, 0, 2047, 0, 4095, 0, 8191, 0], ["i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0], ALLOC_NORMAL);
__st_ulaw2linear16=allocate([-32124, 0, -31100, 0, -30076, 0, -29052, 0, -28028, 0, -27004, 0, -25980, 0, -24956, 0, -23932, 0, -22908, 0, -21884, 0, -20860, 0, -19836, 0, -18812, 0, -17788, 0, -16764, 0, -15996, 0, -15484, 0, -14972, 0, -14460, 0, -13948, 0, -13436, 0, -12924, 0, -12412, 0, -11900, 0, -11388, 0, -10876, 0, -10364, 0, -9852, 0, -9340, 0, -8828, 0, -8316, 0, -7932, 0, -7676, 0, -7420, 0, -7164, 0, -6908, 0, -6652, 0, -6396, 0, -6140, 0, -5884, 0, -5628, 0, -5372, 0, -5116, 0, -4860, 0, -4604, 0, -4348, 0, -4092, 0, -3900, 0, -3772, 0, -3644, 0, -3516, 0, -3388, 0, -3260, 0, -3132, 0, -3004, 0, -2876, 0, -2748, 0, -2620, 0, -2492, 0, -2364, 0, -2236, 0, -2108, 0, -1980, 0, -1884, 0, -1820, 0, -1756, 0, -1692, 0, -1628, 0, -1564, 0, -1500, 0, -1436, 0, -1372, 0, -1308, 0, -1244, 0, -1180, 0, -1116, 0, -1052, 0, -988, 0, -924, 0, -876, 0, -844, 0, -812, 0, -780, 0, -748, 0, -716, 0, -684, 0, -652, 0, -620, 0, -588, 0, -556, 0, -524, 0, -492, 0, -460, 0, -428, 0, -396, 0, -372, 0, -356, 0, -340, 0, -324, 0, -308, 0, -292, 0, -276, 0, -260, 0, -244, 0, -228, 0, -212, 0, -196, 0, -180, 0, -164, 0, -148, 0, -132, 0, -120, 0, -112, 0, -104, 0, -96, 0, -88, 0, -80, 0, -72, 0, -64, 0, -56, 0, -48, 0, -40, 0, -32, 0, -24, 0, -16, 0, -8, 0, 0, 0, 32124, 0, 31100, 0, 30076, 0, 29052, 0, 28028, 0, 27004, 0, 25980, 0, 24956, 0, 23932, 0, 22908, 0, 21884, 0, 20860, 0, 19836, 0, 18812, 0, 17788, 0, 16764, 0, 15996, 0, 15484, 0, 14972, 0, 14460, 0, 13948, 0, 13436, 0, 12924, 0, 12412, 0, 11900, 0, 11388, 0, 10876, 0, 10364, 0, 9852, 0, 9340, 0, 8828, 0, 8316, 0, 7932, 0, 7676, 0, 7420, 0, 7164, 0, 6908, 0, 6652, 0, 6396, 0, 6140, 0, 5884, 0, 5628, 0, 5372, 0, 5116, 0, 4860, 0, 4604, 0, 4348, 0, 4092, 0, 3900, 0, 3772, 0, 3644, 0, 3516, 0, 3388, 0, 3260, 0, 3132, 0, 3004, 0, 2876, 0, 2748, 0, 2620, 0, 2492, 0, 2364, 0, 2236, 0, 2108, 0, 1980, 0, 1884, 0, 1820, 0, 1756, 0, 1692, 0, 1628, 0, 1564, 0, 1500, 0, 1436, 0, 1372, 0, 1308, 0, 1244, 0, 1180, 0, 1116, 0, 1052, 0, 988, 0, 924, 0, 876, 0, 844, 0, 812, 0, 780, 0, 748, 0, 716, 0, 684, 0, 652, 0, 620, 0, 588, 0, 556, 0, 524, 0, 492, 0, 460, 0, 428, 0, 396, 0, 372, 0, 356, 0, 340, 0, 324, 0, 308, 0, 292, 0, 276, 0, 260, 0, 244, 0, 228, 0, 212, 0, 196, 0, 180, 0, 164, 0, 148, 0, 132, 0, 120, 0, 112, 0, 104, 0, 96, 0, 88, 0, 80, 0, 72, 0, 64, 0, 56, 0, 48, 0, 40, 0, 32, 0, 24, 0, 16, 0, 8, 0, 0, 0], ["i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0], ALLOC_NORMAL);
__st_alaw2linear16=allocate([-5504, 0, -5248, 0, -6016, 0, -5760, 0, -4480, 0, -4224, 0, -4992, 0, -4736, 0, -7552, 0, -7296, 0, -8064, 0, -7808, 0, -6528, 0, -6272, 0, -7040, 0, -6784, 0, -2752, 0, -2624, 0, -3008, 0, -2880, 0, -2240, 0, -2112, 0, -2496, 0, -2368, 0, -3776, 0, -3648, 0, -4032, 0, -3904, 0, -3264, 0, -3136, 0, -3520, 0, -3392, 0, -22016, 0, -20992, 0, -24064, 0, -23040, 0, -17920, 0, -16896, 0, -19968, 0, -18944, 0, -30208, 0, -29184, 0, -32256, 0, -31232, 0, -26112, 0, -25088, 0, -28160, 0, -27136, 0, -11008, 0, -10496, 0, -12032, 0, -11520, 0, -8960, 0, -8448, 0, -9984, 0, -9472, 0, -15104, 0, -14592, 0, -16128, 0, -15616, 0, -13056, 0, -12544, 0, -14080, 0, -13568, 0, -344, 0, -328, 0, -376, 0, -360, 0, -280, 0, -264, 0, -312, 0, -296, 0, -472, 0, -456, 0, -504, 0, -488, 0, -408, 0, -392, 0, -440, 0, -424, 0, -88, 0, -72, 0, -120, 0, -104, 0, -24, 0, -8, 0, -56, 0, -40, 0, -216, 0, -200, 0, -248, 0, -232, 0, -152, 0, -136, 0, -184, 0, -168, 0, -1376, 0, -1312, 0, -1504, 0, -1440, 0, -1120, 0, -1056, 0, -1248, 0, -1184, 0, -1888, 0, -1824, 0, -2016, 0, -1952, 0, -1632, 0, -1568, 0, -1760, 0, -1696, 0, -688, 0, -656, 0, -752, 0, -720, 0, -560, 0, -528, 0, -624, 0, -592, 0, -944, 0, -912, 0, -1008, 0, -976, 0, -816, 0, -784, 0, -880, 0, -848, 0, 5504, 0, 5248, 0, 6016, 0, 5760, 0, 4480, 0, 4224, 0, 4992, 0, 4736, 0, 7552, 0, 7296, 0, 8064, 0, 7808, 0, 6528, 0, 6272, 0, 7040, 0, 6784, 0, 2752, 0, 2624, 0, 3008, 0, 2880, 0, 2240, 0, 2112, 0, 2496, 0, 2368, 0, 3776, 0, 3648, 0, 4032, 0, 3904, 0, 3264, 0, 3136, 0, 3520, 0, 3392, 0, 22016, 0, 20992, 0, 24064, 0, 23040, 0, 17920, 0, 16896, 0, 19968, 0, 18944, 0, 30208, 0, 29184, 0, 32256, 0, 31232, 0, 26112, 0, 25088, 0, 28160, 0, 27136, 0, 11008, 0, 10496, 0, 12032, 0, 11520, 0, 8960, 0, 8448, 0, 9984, 0, 9472, 0, 15104, 0, 14592, 0, 16128, 0, 15616, 0, 13056, 0, 12544, 0, 14080, 0, 13568, 0, 344, 0, 328, 0, 376, 0, 360, 0, 280, 0, 264, 0, 312, 0, 296, 0, 472, 0, 456, 0, 504, 0, 488, 0, 408, 0, 392, 0, 440, 0, 424, 0, 88, 0, 72, 0, 120, 0, 104, 0, 24, 0, 8, 0, 56, 0, 40, 0, 216, 0, 200, 0, 248, 0, 232, 0, 152, 0, 136, 0, 184, 0, 168, 0, 1376, 0, 1312, 0, 1504, 0, 1440, 0, 1120, 0, 1056, 0, 1248, 0, 1184, 0, 1888, 0, 1824, 0, 2016, 0, 1952, 0, 1632, 0, 1568, 0, 1760, 0, 1696, 0, 688, 0, 656, 0, 752, 0, 720, 0, 560, 0, 528, 0, 624, 0, 592, 0, 944, 0, 912, 0, 1008, 0, 976, 0, 816, 0, 784, 0, 880, 0, 848, 0], ["i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0,"i16",0], ALLOC_NORMAL);
_indexTable=allocate([-1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, -1, 0, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
_stepsizeTable=allocate([7, 0, 0, 0, 8, 0, 0, 0, 9, 0, 0, 0, 10, 0, 0, 0, 11, 0, 0, 0, 12, 0, 0, 0, 13, 0, 0, 0, 14, 0, 0, 0, 16, 0, 0, 0, 17, 0, 0, 0, 19, 0, 0, 0, 21, 0, 0, 0, 23, 0, 0, 0, 25, 0, 0, 0, 28, 0, 0, 0, 31, 0, 0, 0, 34, 0, 0, 0, 37, 0, 0, 0, 41, 0, 0, 0, 45, 0, 0, 0, 50, 0, 0, 0, 55, 0, 0, 0, 60, 0, 0, 0, 66, 0, 0, 0, 73, 0, 0, 0, 80, 0, 0, 0, 88, 0, 0, 0, 97, 0, 0, 0, 107, 0, 0, 0, 118, 0, 0, 0, 130, 0, 0, 0, 143, 0, 0, 0, 157, 0, 0, 0, 173, 0, 0, 0, 190, 0, 0, 0, 209, 0, 0, 0, 230, 0, 0, 0, 253, 0, 0, 0, 279, 0, 0, 0, 307, 0, 0, 0, 337, 0, 0, 0, 371, 0, 0, 0, 408, 0, 0, 0, 449, 0, 0, 0, 494, 0, 0, 0, 544, 0, 0, 0, 598, 0, 0, 0, 658, 0, 0, 0, 724, 0, 0, 0, 796, 0, 0, 0, 876, 0, 0, 0, 963, 0, 0, 0, 1060, 0, 0, 0, 1166, 0, 0, 0, 1282, 0, 0, 0, 1411, 0, 0, 0, 1552, 0, 0, 0, 1707, 0, 0, 0, 1878, 0, 0, 0, 2066, 0, 0, 0, 2272, 0, 0, 0, 2499, 0, 0, 0, 2749, 0, 0, 0, 3024, 0, 0, 0, 3327, 0, 0, 0, 3660, 0, 0, 0, 4026, 0, 0, 0, 4428, 0, 0, 0, 4871, 0, 0, 0, 5358, 0, 0, 0, 5894, 0, 0, 0, 6484, 0, 0, 0, 7132, 0, 0, 0, 7845, 0, 0, 0, 8630, 0, 0, 0, 9493, 0, 0, 0, 10442, 0, 0, 0, 11487, 0, 0, 0, 12635, 0, 0, 0, 13899, 0, 0, 0, 15289, 0, 0, 0, 16818, 0, 0, 0, 18500, 0, 0, 0, 20350, 0, 0, 0, 22385, 0, 0, 0, 24623, 0, 0, 0, 27086, 0, 0, 0, 29794, 0, 0, 0, 32767, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_NORMAL);
_AudioopError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([83,105,122,101,32,115,104,111,117,108,100,32,98,101,32,49,44,32,50,32,111,114,32,52,0] /* Size should be 1, 2  */, "i8", ALLOC_NORMAL);
__str1=allocate([110,111,116,32,97,32,119,104,111,108,101,32,110,117,109,98,101,114,32,111,102,32,102,114,97,109,101,115,0] /* not a whole number o */, "i8", ALLOC_NORMAL);
__str2=allocate([115,35,105,105,58,103,101,116,115,97,109,112,108,101,0] /* s#ii:getsample\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([73,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* Index out of range\0 */, "i8", ALLOC_NORMAL);
__str4=allocate([115,35,105,58,109,97,120,0] /* s#i:max\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([115,35,105,58,109,105,110,109,97,120,0] /* s#i:minmax\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([40,105,105,41,0] /* (ii)\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([115,35,105,58,97,118,103,0] /* s#i:avg\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([115,35,105,58,114,109,115,0] /* s#i:rms\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([115,35,115,35,58,102,105,110,100,102,105,116,0] /* s#s#:findfit\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([83,116,114,105,110,103,115,32,115,104,111,117,108,100,32,98,101,32,101,118,101,110,45,115,105,122,101,100,0] /* Strings should be ev */, "i8", ALLOC_NORMAL);
__str11=allocate([70,105,114,115,116,32,115,97,109,112,108,101,32,115,104,111,117,108,100,32,98,101,32,108,111,110,103,101,114,0] /* First sample should  */, "i8", ALLOC_NORMAL);
__str12=allocate([40,105,102,41,0] /* (if)\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([115,35,115,35,58,102,105,110,100,102,97,99,116,111,114,0] /* s#s#:findfactor\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([83,97,109,112,108,101,115,32,115,104,111,117,108,100,32,98,101,32,115,97,109,101,32,115,105,122,101,0] /* Samples should be sa */, "i8", ALLOC_NORMAL);
__str15=allocate([115,35,105,58,102,105,110,100,109,97,120,0] /* s#i:findmax\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([73,110,112,117,116,32,115,97,109,112,108,101,32,115,104,111,117,108,100,32,98,101,32,108,111,110,103,101,114,0] /* Input sample should  */, "i8", ALLOC_NORMAL);
__str17=allocate([115,35,105,58,97,118,103,112,112,0] /* s#i:avgpp\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([115,35,105,58,109,97,120,112,112,0] /* s#i:maxpp\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([115,35,105,58,99,114,111,115,115,0] /* s#i:cross\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([115,35,105,100,58,109,117,108,0] /* s#id:mul\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([115,35,105,100,100,58,116,111,109,111,110,111,0] /* s#idd:tomono\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([115,35,105,100,100,58,116,111,115,116,101,114,101,111,0] /* s#idd:tostereo\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([110,111,116,32,101,110,111,117,103,104,32,109,101,109,111,114,121,32,102,111,114,32,111,117,116,112,117,116,32,98,117,102,102,101,114,0] /* not enough memory fo */, "i8", ALLOC_NORMAL);
__str24=allocate([115,35,115,35,105,58,97,100,100,0] /* s#s#i:add\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([76,101,110,103,116,104,115,32,115,104,111,117,108,100,32,98,101,32,116,104,101,32,115,97,109,101,0] /* Lengths should be th */, "i8", ALLOC_NORMAL);
__str26=allocate([115,35,105,105,58,98,105,97,115,0] /* s#ii:bias\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([115,35,105,58,114,101,118,101,114,115,101,0] /* s#i:reverse\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([115,35,105,105,58,108,105,110,50,108,105,110,0] /* s#ii:lin2lin\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([115,35,105,105,105,105,79,124,105,105,58,114,97,116,101,99,118,0] /* s#iiiiO|ii:ratecv\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([35,32,111,102,32,99,104,97,110,110,101,108,115,32,115,104,111,117,108,100,32,98,101,32,62,61,32,49,0] /* # of channels should */, "i8", ALLOC_NORMAL);
__str31=allocate([119,105,100,116,104,32,42,32,110,99,104,97,110,110,101,108,115,32,116,111,111,32,98,105,103,32,102,111,114,32,97,32,67,32,105,110,116,0] /* width _ nchannels to */, "i8", ALLOC_NORMAL);
__str32=allocate([119,101,105,103,104,116,65,32,115,104,111,117,108,100,32,98,101,32,62,61,32,49,44,32,119,101,105,103,104,116,66,32,115,104,111,117,108,100,32,98,101,32,62,61,32,48,0] /* weightA should be >= */, "i8", ALLOC_NORMAL);
__str33=allocate([115,97,109,112,108,105,110,103,32,114,97,116,101,32,110,111,116,32,62,32,48,0] /* sampling rate not >  */, "i8", ALLOC_NORMAL);
__str34=allocate([105,79,33,59,97,117,100,105,111,111,112,46,114,97,116,101,99,118,58,32,105,108,108,101,103,97,108,32,115,116,97,116,101,32,97,114,103,117,109,101,110,116,0] /* iO!;audioop.ratecv:  */, "i8", ALLOC_NORMAL);
__str35=allocate([105,108,108,101,103,97,108,32,115,116,97,116,101,32,97,114,103,117,109,101,110,116,0] /* illegal state argume */, "i8", ALLOC_NORMAL);
__str36=allocate([105,105,58,114,97,116,101,99,118,0] /* ii:ratecv\00 */, "i8", ALLOC_NORMAL);
__str37=allocate(1, "i8", ALLOC_NORMAL);
__str38=allocate([40,79,40,105,79,41,41,0] /* (O(iO))\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([115,35,105,58,108,105,110,50,117,108,97,119,0] /* s#i:lin2ulaw\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([115,35,105,58,117,108,97,119,50,108,105,110,0] /* s#i:ulaw2lin\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([115,35,105,58,108,105,110,50,97,108,97,119,0] /* s#i:lin2alaw\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([115,35,105,58,97,108,97,119,50,108,105,110,0] /* s#i:alaw2lin\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([115,35,105,79,58,108,105,110,50,97,100,112,99,109,0] /* s#iO:lin2adpcm\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([105,105,0] /* ii\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([40,79,40,105,105,41,41,0] /* (O(ii))\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([115,35,105,79,58,97,100,112,99,109,50,108,105,110,0] /* s#iO:adpcm2lin\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([109,97,120,0] /* max\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([109,105,110,109,97,120,0] /* minmax\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([97,118,103,0] /* avg\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([109,97,120,112,112,0] /* maxpp\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([97,118,103,112,112,0] /* avgpp\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([114,109,115,0] /* rms\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([102,105,110,100,102,105,116,0] /* findfit\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([102,105,110,100,109,97,120,0] /* findmax\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([102,105,110,100,102,97,99,116,111,114,0] /* findfactor\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([99,114,111,115,115,0] /* cross\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([109,117,108,0] /* mul\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([97,100,100,0] /* add\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([98,105,97,115,0] /* bias\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([117,108,97,119,50,108,105,110,0] /* ulaw2lin\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([108,105,110,50,117,108,97,119,0] /* lin2ulaw\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([97,108,97,119,50,108,105,110,0] /* alaw2lin\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([108,105,110,50,97,108,97,119,0] /* lin2alaw\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([108,105,110,50,108,105,110,0] /* lin2lin\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([97,100,112,99,109,50,108,105,110,0] /* adpcm2lin\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([108,105,110,50,97,100,112,99,109,0] /* lin2adpcm\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([116,111,109,111,110,111,0] /* tomono\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([116,111,115,116,101,114,101,111,0] /* tostereo\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([103,101,116,115,97,109,112,108,101,0] /* getsample\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([114,101,118,101,114,115,101,0] /* reverse\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([114,97,116,101,99,118,0] /* ratecv\00 */, "i8", ALLOC_NORMAL);
_audioop_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str72=allocate([97,117,100,105,111,111,112,0] /* audioop\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([97,117,100,105,111,111,112,46,101,114,114,111,114,0] /* audioop.error\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
HEAP[_audioop_methods]=__str47;
HEAP[_audioop_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_audioop_methods+16]=__str48;
HEAP[_audioop_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_audioop_methods+32]=__str49;
HEAP[_audioop_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_audioop_methods+48]=__str50;
HEAP[_audioop_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_audioop_methods+64]=__str51;
HEAP[_audioop_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_audioop_methods+80]=__str52;
HEAP[_audioop_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_audioop_methods+96]=__str53;
HEAP[_audioop_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_audioop_methods+112]=__str54;
HEAP[_audioop_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_audioop_methods+128]=__str55;
HEAP[_audioop_methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_audioop_methods+144]=__str56;
HEAP[_audioop_methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_audioop_methods+160]=__str57;
HEAP[_audioop_methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_audioop_methods+176]=__str58;
HEAP[_audioop_methods+180]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_audioop_methods+192]=__str59;
HEAP[_audioop_methods+196]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_audioop_methods+208]=__str60;
HEAP[_audioop_methods+212]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_audioop_methods+224]=__str61;
HEAP[_audioop_methods+228]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_audioop_methods+240]=__str62;
HEAP[_audioop_methods+244]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_audioop_methods+256]=__str63;
HEAP[_audioop_methods+260]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_audioop_methods+272]=__str64;
HEAP[_audioop_methods+276]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_audioop_methods+288]=__str65;
HEAP[_audioop_methods+292]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_audioop_methods+304]=__str66;
HEAP[_audioop_methods+308]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_audioop_methods+320]=__str67;
HEAP[_audioop_methods+324]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_audioop_methods+336]=__str68;
HEAP[_audioop_methods+340]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_audioop_methods+352]=__str69;
HEAP[_audioop_methods+356]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_audioop_methods+368]=__str70;
HEAP[_audioop_methods+372]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_audioop_methods+384]=__str71;
HEAP[_audioop_methods+388]=(FUNCTION_TABLE_OFFSET + 50);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

