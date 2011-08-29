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



var $0___SIZE = 32; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 32; // %2
  
var $3___SIZE = 16; // %3
  
var $4___SIZE = 64; // %4
  
var $5___SIZE = 80; // %5
  
var $6___SIZE = 144; // %6
  
var $7___SIZE = 96; // %7
  
var $8___SIZE = 288; // %8
  
var $9___SIZE = 36; // %9
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_MultibyteCodec___SIZE = 36; // %struct.MultibyteCodec
  
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
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_dbcs_index___SIZE = 8; // %struct.dbcs_index
  var $struct_dbcs_index___FLATTENER = [0,4,5];
var $struct_dbcs_map___SIZE = 12; // %struct.dbcs_map
  
var $struct_iso2022_config___SIZE = 8; // %struct.iso2022_config
  
var $struct_iso2022_designation___SIZE = 16; // %struct.iso2022_designation
  var $struct_iso2022_designation___FLATTENER = [0,1,2,4,8,12];
var $struct_pair_encodemap___SIZE = 8; // %struct.pair_encodemap
  
var $struct_widedbcs_index___SIZE = 8; // %struct.widedbcs_index
  var $struct_widedbcs_index___FLATTENER = [0,4,5];
var $union_MultibyteCodec_State___SIZE = 8; // %union.MultibyteCodec_State
  
var _cofunc_8453;
var __str;
var __str1;

var __str2;

var __str3;
var __str4;
var __str5;
var __str6;
var ___methods;
var __str7;

var __str8;
var __str9;
var __str10;
var ___PRETTY_FUNCTION___8716;
var __str11;
var ___PRETTY_FUNCTION___9242;
var _cp949_encmap;
var _ksx1001_decmap;
var _jisxcommon_encmap;
var _jisx0208_decmap;
var _jisx0212_decmap;
var _jisx0213_bmp_encmap;
var _jisx0213_1_bmp_decmap;
var _jisx0213_2_bmp_decmap;
var _jisx0213_emp_encmap;
var _jisx0213_1_emp_decmap;
var _jisx0213_2_emp_decmap;
var _gbcommon_encmap;
var _gb2312_decmap;
var _initialized_9477_b;
var __str12;
var __str13;
var __str14;
var __str15;
var ___PRETTY_FUNCTION___9539;
var _initialized_9598_b;
var __str16;
var __str17;
var __str18;
var ___PRETTY_FUNCTION___9665;
var _initialized_9727_b;
var __str19;
var ___PRETTY_FUNCTION___9789;
var _initialized_9849_b;
var __str20;
var __str21;
var __str22;
var __str23;
var __str24;
var __str25;
var _jisx0213_pair_decmap;
var _jisx0213_pair_encmap;
var __str26;
var _initialized_10822_b;
var __str27;
var __str28;
var __str29;
var ___PRETTY_FUNCTION___10884;
var _iso2022_kr_designations;
var _iso2022_kr_config;
var _iso2022_jp_designations;
var _iso2022_jp_config;
var _iso2022_jp_1_designations;
var _iso2022_jp_1_config;
var _iso2022_jp_2_designations;
var _iso2022_jp_2_config;
var _iso2022_jp_2004_designations;
var _iso2022_jp_2004_config;
var _iso2022_jp_3_designations;
var _iso2022_jp_3_config;
var _iso2022_jp_ext_designations;
var _iso2022_jp_ext_config;
var __mapping_list;
var __str30;
var __str31;
var __str32;
var __str33;
var __str34;
var __str35;
var __str36;
var __codec_list;
var __str37;



















  function _getmultibytecodec() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $mod;
        var $1=HEAP[_cofunc_8453]; //@line 247 "cjkcodecs.h"
        var $2=($1)==0; //@line 247 "cjkcodecs.h"
        if ($2) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 247 "cjkcodecs.h"
      case 1: // $bb
        var $3=_PyImport_ImportModuleNoBlock(__str); //@line 248 "cjkcodecs.h"
        $mod=$3; //@line 248 "cjkcodecs.h"
        var $4=$mod; //@line 249 "cjkcodecs.h"
        var $5=($4)==0; //@line 249 "cjkcodecs.h"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 249 "cjkcodecs.h"
      case 2: // $bb1
        $0=0; //@line 250 "cjkcodecs.h"
        __label__ = 6; break; //@line 250 "cjkcodecs.h"
      case 3: // $bb2
        var $6=$mod; //@line 251 "cjkcodecs.h"
        var $7=_PyObject_GetAttrString($6, __str1); //@line 251 "cjkcodecs.h"
        HEAP[_cofunc_8453]=$7; //@line 251 "cjkcodecs.h"
        var $8=$mod; //@line 252 "cjkcodecs.h"
        var $9=$8; //@line 252 "cjkcodecs.h"
        var $10=HEAP[$9]; //@line 252 "cjkcodecs.h"
        var $11=($10) - 1; //@line 252 "cjkcodecs.h"
        var $12=$mod; //@line 252 "cjkcodecs.h"
        var $13=$12; //@line 252 "cjkcodecs.h"
        HEAP[$13]=$11; //@line 252 "cjkcodecs.h"
        var $14=$mod; //@line 252 "cjkcodecs.h"
        var $15=$14; //@line 252 "cjkcodecs.h"
        var $16=HEAP[$15]; //@line 252 "cjkcodecs.h"
        var $17=($16)==0; //@line 252 "cjkcodecs.h"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 252 "cjkcodecs.h"
      case 4: // $bb3
        var $18=$mod; //@line 252 "cjkcodecs.h"
        var $19=$18+4; //@line 252 "cjkcodecs.h"
        var $20=HEAP[$19]; //@line 252 "cjkcodecs.h"
        var $21=$20+24; //@line 252 "cjkcodecs.h"
        var $22=HEAP[$21]; //@line 252 "cjkcodecs.h"
        var $23=$mod; //@line 252 "cjkcodecs.h"
        FUNCTION_TABLE[$22]($23); //@line 252 "cjkcodecs.h"
        __label__ = 5; break; //@line 252 "cjkcodecs.h"
      case 5: // $bb4
        var $24=HEAP[_cofunc_8453]; //@line 254 "cjkcodecs.h"
        $0=$24; //@line 254 "cjkcodecs.h"
        __label__ = 6; break; //@line 254 "cjkcodecs.h"
      case 6: // $bb5
        var $25=$0; //@line 250 "cjkcodecs.h"
        $retval=$25; //@line 250 "cjkcodecs.h"
        var $retval6=$retval; //@line 250 "cjkcodecs.h"
        ;
        return $retval6; //@line 250 "cjkcodecs.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getcodec($self, $encoding) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $encoding_addr;
        var $retval;
        var $0;
        var $codecobj;
        var $r;
        var $cofunc;
        var $codec;
        var $enc;
        $self_addr=$self;
        $encoding_addr=$encoding;
        var $1=$encoding_addr; //@line 264 "cjkcodecs.h"
        var $2=$1+4; //@line 264 "cjkcodecs.h"
        var $3=HEAP[$2]; //@line 264 "cjkcodecs.h"
        var $4=$3+84; //@line 264 "cjkcodecs.h"
        var $5=HEAP[$4]; //@line 264 "cjkcodecs.h"
        var $6=($5) & 134217728; //@line 264 "cjkcodecs.h"
        var $7=($6)==0; //@line 264 "cjkcodecs.h"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 264 "cjkcodecs.h"
      case 1: // $bb
        var $8=HEAP[_PyExc_TypeError]; //@line 265 "cjkcodecs.h"
        _PyErr_SetString($8, __str2); //@line 265 "cjkcodecs.h"
        $0=0; //@line 267 "cjkcodecs.h"
        __label__ = 15; break; //@line 267 "cjkcodecs.h"
      case 2: // $bb1
        var $9=_getmultibytecodec(); //@line 270 "cjkcodecs.h"
        $cofunc=$9; //@line 270 "cjkcodecs.h"
        var $10=$cofunc; //@line 271 "cjkcodecs.h"
        var $11=($10)==0; //@line 271 "cjkcodecs.h"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 271 "cjkcodecs.h"
      case 3: // $bb2
        $0=0; //@line 272 "cjkcodecs.h"
        __label__ = 15; break; //@line 272 "cjkcodecs.h"
      case 4: // $bb3
        var $12=$encoding_addr; //@line 274 "cjkcodecs.h"
        var $13=$12; //@line 274 "cjkcodecs.h"
        var $14=$13+20; //@line 274 "cjkcodecs.h"
        var $15=$14; //@line 274 "cjkcodecs.h"
        $enc=$15; //@line 274 "cjkcodecs.h"
        $codec=__codec_list; //@line 275 "cjkcodecs.h"
        __label__ = 7; break; //@line 275 "cjkcodecs.h"
      case 5: // $bb4
        var $16=$codec; //@line 276 "cjkcodecs.h"
        var $17=$16; //@line 276 "cjkcodecs.h"
        var $18=HEAP[$17]; //@line 276 "cjkcodecs.h"
        var $19=$enc; //@line 276 "cjkcodecs.h"
        var $20=_strcmp($18, $19); //@line 276 "cjkcodecs.h"
        var $21=($20)==0; //@line 276 "cjkcodecs.h"
        if ($21) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 276 "cjkcodecs.h"
      case 6: // $bb5
        var $22=$codec; //@line 275 "cjkcodecs.h"
        var $23=$22+36; //@line 275 "cjkcodecs.h"
        $codec=$23; //@line 275 "cjkcodecs.h"
        __label__ = 7; break; //@line 275 "cjkcodecs.h"
      case 7: // $bb6
        var $24=$codec; //@line 275 "cjkcodecs.h"
        var $25=$24; //@line 275 "cjkcodecs.h"
        var $26=HEAP[$25]; //@line 275 "cjkcodecs.h"
        var $27=$26; //@line 275 "cjkcodecs.h"
        var $28=HEAP[$27]; //@line 275 "cjkcodecs.h"
        var $29=($28)!=0; //@line 275 "cjkcodecs.h"
        if ($29) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 275 "cjkcodecs.h"
      case 8: // $bb7
        var $30=$codec; //@line 279 "cjkcodecs.h"
        var $31=$30; //@line 279 "cjkcodecs.h"
        var $32=HEAP[$31]; //@line 279 "cjkcodecs.h"
        var $33=$32; //@line 279 "cjkcodecs.h"
        var $34=HEAP[$33]; //@line 279 "cjkcodecs.h"
        var $35=($34)==0; //@line 279 "cjkcodecs.h"
        if ($35) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 279 "cjkcodecs.h"
      case 9: // $bb8
        var $36=HEAP[_PyExc_LookupError]; //@line 280 "cjkcodecs.h"
        _PyErr_SetString($36, __str3); //@line 280 "cjkcodecs.h"
        $0=0; //@line 282 "cjkcodecs.h"
        __label__ = 15; break; //@line 282 "cjkcodecs.h"
      case 10: // $bb9
        var $37=$codec; //@line 285 "cjkcodecs.h"
        var $38=$37; //@line 285 "cjkcodecs.h"
        var $39=_PyCapsule_New($38, __str4, 0); //@line 285 "cjkcodecs.h"
        $codecobj=$39; //@line 285 "cjkcodecs.h"
        var $40=$codecobj; //@line 286 "cjkcodecs.h"
        var $41=($40)==0; //@line 286 "cjkcodecs.h"
        if ($41) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 286 "cjkcodecs.h"
      case 11: // $bb10
        $0=0; //@line 287 "cjkcodecs.h"
        __label__ = 15; break; //@line 287 "cjkcodecs.h"
      case 12: // $bb11
        var $42=$cofunc; //@line 289 "cjkcodecs.h"
        var $43=$codecobj; //@line 289 "cjkcodecs.h"
        var $44=_PyObject_CallFunctionObjArgs($42, allocate([$43,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 289 "cjkcodecs.h"
        $r=$44; //@line 289 "cjkcodecs.h"
        var $45=$codecobj; //@line 290 "cjkcodecs.h"
        var $46=$45; //@line 290 "cjkcodecs.h"
        var $47=HEAP[$46]; //@line 290 "cjkcodecs.h"
        var $48=($47) - 1; //@line 290 "cjkcodecs.h"
        var $49=$codecobj; //@line 290 "cjkcodecs.h"
        var $50=$49; //@line 290 "cjkcodecs.h"
        HEAP[$50]=$48; //@line 290 "cjkcodecs.h"
        var $51=$codecobj; //@line 290 "cjkcodecs.h"
        var $52=$51; //@line 290 "cjkcodecs.h"
        var $53=HEAP[$52]; //@line 290 "cjkcodecs.h"
        var $54=($53)==0; //@line 290 "cjkcodecs.h"
        if ($54) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 290 "cjkcodecs.h"
      case 13: // $bb12
        var $55=$codecobj; //@line 290 "cjkcodecs.h"
        var $56=$55+4; //@line 290 "cjkcodecs.h"
        var $57=HEAP[$56]; //@line 290 "cjkcodecs.h"
        var $58=$57+24; //@line 290 "cjkcodecs.h"
        var $59=HEAP[$58]; //@line 290 "cjkcodecs.h"
        var $60=$codecobj; //@line 290 "cjkcodecs.h"
        FUNCTION_TABLE[$59]($60); //@line 290 "cjkcodecs.h"
        __label__ = 14; break; //@line 290 "cjkcodecs.h"
      case 14: // $bb13
        var $61=$r; //@line 292 "cjkcodecs.h"
        $0=$61; //@line 292 "cjkcodecs.h"
        __label__ = 15; break; //@line 292 "cjkcodecs.h"
      case 15: // $bb14
        var $62=$0; //@line 267 "cjkcodecs.h"
        $retval=$62; //@line 267 "cjkcodecs.h"
        var $retval15=$retval; //@line 267 "cjkcodecs.h"
        ;
        return $retval15; //@line 267 "cjkcodecs.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _register_maps($module) {
    var __stackBase__  = STACKTOP; STACKTOP += 256; _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr;
        var $0;
        var $h;
        var $mhname=__stackBase__;
        var $r;
        $module_addr=$module;
        $h=__mapping_list; //@line 305 "cjkcodecs.h"
        var $mhname1=$mhname; //@line 306 "cjkcodecs.h"
        var $mhname2=$mhname; //@line 308 "cjkcodecs.h"
        var $1=$mhname2+7; //@line 308 "cjkcodecs.h"
        var $2=$1+-1; //@line 308 "cjkcodecs.h"
        var $mhname3=$mhname; //@line 309 "cjkcodecs.h"
        __label__ = 4; break; //@line 305 "cjkcodecs.h"
      case 1: // $bb
        _llvm_memcpy_p0i8_p0i8_i32($mhname1, __str7, 256, 1, 0); //@line 306 "cjkcodecs.h"
        var $3=$h; //@line 308 "cjkcodecs.h"
        var $4=$3; //@line 308 "cjkcodecs.h"
        var $5=HEAP[$4]; //@line 308 "cjkcodecs.h"
        var $6=_strcpy($2, $5); //@line 308 "cjkcodecs.h"
        var $7=$h; //@line 309 "cjkcodecs.h"
        var $8=$7; //@line 309 "cjkcodecs.h"
        var $9=_PyCapsule_New($8, __str4, 0); //@line 309 "cjkcodecs.h"
        var $10=$module_addr; //@line 309 "cjkcodecs.h"
        var $11=_PyModule_AddObject($10, $mhname3, $9); //@line 309 "cjkcodecs.h"
        $r=$11; //@line 309 "cjkcodecs.h"
        var $12=$r; //@line 311 "cjkcodecs.h"
        var $13=($12)==-1; //@line 311 "cjkcodecs.h"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 311 "cjkcodecs.h"
      case 2: // $bb4
        $0=-1; //@line 312 "cjkcodecs.h"
        __label__ = 6; break; //@line 312 "cjkcodecs.h"
      case 3: // $bb5
        var $14=$h; //@line 305 "cjkcodecs.h"
        var $15=$14+12; //@line 305 "cjkcodecs.h"
        $h=$15; //@line 305 "cjkcodecs.h"
        __label__ = 4; break; //@line 305 "cjkcodecs.h"
      case 4: // $bb6
        var $16=$h; //@line 305 "cjkcodecs.h"
        var $17=$16; //@line 305 "cjkcodecs.h"
        var $18=HEAP[$17]; //@line 305 "cjkcodecs.h"
        var $19=$18; //@line 305 "cjkcodecs.h"
        var $20=HEAP[$19]; //@line 305 "cjkcodecs.h"
        var $21=($20)!=0; //@line 305 "cjkcodecs.h"
        if ($21) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 305 "cjkcodecs.h"
      case 5: // $bb7
        $0=0; //@line 314 "cjkcodecs.h"
        __label__ = 6; break; //@line 314 "cjkcodecs.h"
      case 6: // $bb8
        STACKTOP = __stackBase__;
        return;
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _find_pairencmap($body, $modifier, $haystack) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $body_addr;
        var $modifier_addr;
        var $haystack_addr;
        var $haystacksize_addr;
        var $retval;
        var $0;
        var $pos;
        var $min;
        var $max;
        var $value;
        $body_addr=$body;
        $modifier_addr=$modifier;
        $haystack_addr=$haystack;
        $haystacksize_addr=46;
        var $1=$body_addr; //@line 323 "cjkcodecs.h"
        var $2=($1); //@line 323 "cjkcodecs.h"
        var $3=($2) << 16; //@line 323 "cjkcodecs.h"
        var $4=$modifier_addr; //@line 323 "cjkcodecs.h"
        var $5=($4); //@line 323 "cjkcodecs.h"
        var $6=($3) | ($5); //@line 323 "cjkcodecs.h"
        $value=$6; //@line 323 "cjkcodecs.h"
        $min=0; //@line 325 "cjkcodecs.h"
        var $7=$haystacksize_addr; //@line 326 "cjkcodecs.h"
        $max=$7; //@line 326 "cjkcodecs.h"
        var $8=$haystacksize_addr; //@line 328 "cjkcodecs.h"
        var $9=($8) >> 1; //@line 328 "cjkcodecs.h"
        $pos=$9; //@line 328 "cjkcodecs.h"
        __label__ = 8; break; //@line 328 "cjkcodecs.h"
      case 1: // $bb
        var $10=$haystack_addr; //@line 329 "cjkcodecs.h"
        var $11=$pos; //@line 329 "cjkcodecs.h"
        var $12=$10+8*$11; //@line 329 "cjkcodecs.h"
        var $13=$12; //@line 329 "cjkcodecs.h"
        var $14=HEAP[$13]; //@line 329 "cjkcodecs.h"
        var $15=$value; //@line 329 "cjkcodecs.h"
        var $16=($14) > ($15); //@line 329 "cjkcodecs.h"
        if ($16) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 329 "cjkcodecs.h"
      case 2: // $bb1
        var $17=$max; //@line 330 "cjkcodecs.h"
        var $18=$pos; //@line 330 "cjkcodecs.h"
        var $19=($17)==($18); //@line 330 "cjkcodecs.h"
        if ($19) { __label__ = 9; break; } else { __label__ = 3; break; } //@line 330 "cjkcodecs.h"
      case 3: // $bb2
        var $20=$pos; //@line 331 "cjkcodecs.h"
        $max=$20; //@line 331 "cjkcodecs.h"
        __label__ = 7; break; //@line 331 "cjkcodecs.h"
      case 4: // $bb3
        var $21=$haystack_addr; //@line 333 "cjkcodecs.h"
        var $22=$pos; //@line 333 "cjkcodecs.h"
        var $23=$21+8*$22; //@line 333 "cjkcodecs.h"
        var $24=$23; //@line 333 "cjkcodecs.h"
        var $25=HEAP[$24]; //@line 333 "cjkcodecs.h"
        var $26=$value; //@line 333 "cjkcodecs.h"
        var $27=($25) < ($26); //@line 333 "cjkcodecs.h"
        if ($27) { __label__ = 5; break; } else { __label__ = 9; break; } //@line 333 "cjkcodecs.h"
      case 5: // $bb4
        var $28=$min; //@line 334 "cjkcodecs.h"
        var $29=$pos; //@line 334 "cjkcodecs.h"
        var $30=($28)==($29); //@line 334 "cjkcodecs.h"
        if ($30) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 334 "cjkcodecs.h"
      case 6: // $bb5
        var $31=$pos; //@line 335 "cjkcodecs.h"
        $min=$31; //@line 335 "cjkcodecs.h"
        __label__ = 7; break; //@line 335 "cjkcodecs.h"
      case 7: // $bb6
        var $32=$min; //@line 328 "cjkcodecs.h"
        var $33=$max; //@line 328 "cjkcodecs.h"
        var $34=($33) + ($32); //@line 328 "cjkcodecs.h"
        var $35=($34) >> 1; //@line 328 "cjkcodecs.h"
        $pos=$35; //@line 328 "cjkcodecs.h"
        __label__ = 8; break; //@line 328 "cjkcodecs.h"
      case 8: // $bb7
        var $36=$min; //@line 328 "cjkcodecs.h"
        var $37=$max; //@line 328 "cjkcodecs.h"
        var $38=($36)!=($37); //@line 328 "cjkcodecs.h"
        if ($38) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 328 "cjkcodecs.h"
      case 9: // $bb8
        var $39=$haystack_addr; //@line 340 "cjkcodecs.h"
        var $40=$pos; //@line 340 "cjkcodecs.h"
        var $41=$39+8*$40; //@line 340 "cjkcodecs.h"
        var $42=$41; //@line 340 "cjkcodecs.h"
        var $43=HEAP[$42]; //@line 340 "cjkcodecs.h"
        var $44=$value; //@line 340 "cjkcodecs.h"
        var $45=($43)==($44); //@line 340 "cjkcodecs.h"
        if ($45) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 340 "cjkcodecs.h"
      case 10: // $bb9
        var $46=$haystack_addr; //@line 341 "cjkcodecs.h"
        var $47=$pos; //@line 341 "cjkcodecs.h"
        var $48=$46+8*$47; //@line 341 "cjkcodecs.h"
        var $49=$48+4; //@line 341 "cjkcodecs.h"
        var $50=HEAP[$49]; //@line 341 "cjkcodecs.h"
        var $51=($50); //@line 341 "cjkcodecs.h"
        $0=$51; //@line 341 "cjkcodecs.h"
        __label__ = 12; break; //@line 341 "cjkcodecs.h"
      case 11: // $bb10
        $0=65533; //@line 343 "cjkcodecs.h"
        __label__ = 12; break; //@line 343 "cjkcodecs.h"
      case 12: // $bb11
        var $52=$0; //@line 341 "cjkcodecs.h"
        $retval=$52; //@line 341 "cjkcodecs.h"
        var $retval12=$retval; //@line 341 "cjkcodecs.h"
        var $retval1213=((($retval12)) & 65535); //@line 341 "cjkcodecs.h"
        ;
        return $retval1213; //@line 341 "cjkcodecs.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _importmap($modname, $symbol, $encmap, $decmap) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $modname_addr;
        var $symbol_addr;
        var $encmap_addr;
        var $decmap_addr;
        var $retval;
        var $0;
        var $o;
        var $mod;
        var $map;
        $modname_addr=$modname;
        $symbol_addr=$symbol;
        $encmap_addr=$encmap;
        $decmap_addr=$decmap;
        var $1=$modname_addr; //@line 358 "cjkcodecs.h"
        var $2=_PyImport_ImportModule($1); //@line 358 "cjkcodecs.h"
        $mod=$2; //@line 358 "cjkcodecs.h"
        var $3=$mod; //@line 359 "cjkcodecs.h"
        var $4=($3)==0; //@line 359 "cjkcodecs.h"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 359 "cjkcodecs.h"
      case 1: // $bb
        $0=-1; //@line 360 "cjkcodecs.h"
        __label__ = 17; break; //@line 360 "cjkcodecs.h"
      case 2: // $bb1
        var $5=$mod; //@line 362 "cjkcodecs.h"
        var $6=$symbol_addr; //@line 362 "cjkcodecs.h"
        var $7=_PyObject_GetAttrString($5, $6); //@line 362 "cjkcodecs.h"
        $o=$7; //@line 362 "cjkcodecs.h"
        var $8=$o; //@line 363 "cjkcodecs.h"
        var $9=($8)==0; //@line 363 "cjkcodecs.h"
        if ($9) { __label__ = 14; break; } else { __label__ = 3; break; } //@line 363 "cjkcodecs.h"
      case 3: // $bb2
        var $10=$o; //@line 365 "cjkcodecs.h"
        var $11=_PyCapsule_IsValid($10, __str4); //@line 365 "cjkcodecs.h"
        var $12=($11)==0; //@line 365 "cjkcodecs.h"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 365 "cjkcodecs.h"
      case 4: // $bb3
        var $13=HEAP[_PyExc_ValueError]; //@line 366 "cjkcodecs.h"
        _PyErr_SetString($13, __str8); //@line 366 "cjkcodecs.h"
        __label__ = 14; break; //@line 366 "cjkcodecs.h"
      case 5: // $bb4
        var $14=$o; //@line 372 "cjkcodecs.h"
        var $15=_PyCapsule_GetPointer($14, __str4); //@line 372 "cjkcodecs.h"
        var $16=$15; //@line 372 "cjkcodecs.h"
        $map=$16; //@line 372 "cjkcodecs.h"
        var $17=$encmap_addr; //@line 373 "cjkcodecs.h"
        var $18=($17)!=0; //@line 373 "cjkcodecs.h"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 373 "cjkcodecs.h"
      case 6: // $bb5
        var $19=$map; //@line 374 "cjkcodecs.h"
        var $20=$19+4; //@line 374 "cjkcodecs.h"
        var $21=HEAP[$20]; //@line 374 "cjkcodecs.h"
        var $22=$encmap_addr; //@line 374 "cjkcodecs.h"
        var $23=$21; //@line 374 "cjkcodecs.h"
        HEAP[$22]=$23; //@line 374 "cjkcodecs.h"
        __label__ = 7; break; //@line 374 "cjkcodecs.h"
      case 7: // $bb6
        var $24=$decmap_addr; //@line 375 "cjkcodecs.h"
        var $25=($24)!=0; //@line 375 "cjkcodecs.h"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 375 "cjkcodecs.h"
      case 8: // $bb7
        var $26=$map; //@line 376 "cjkcodecs.h"
        var $27=$26+8; //@line 376 "cjkcodecs.h"
        var $28=HEAP[$27]; //@line 376 "cjkcodecs.h"
        var $29=$decmap_addr; //@line 376 "cjkcodecs.h"
        var $30=$28; //@line 376 "cjkcodecs.h"
        HEAP[$29]=$30; //@line 376 "cjkcodecs.h"
        __label__ = 9; break; //@line 376 "cjkcodecs.h"
      case 9: // $bb8
        var $31=$o; //@line 377 "cjkcodecs.h"
        var $32=$31; //@line 377 "cjkcodecs.h"
        var $33=HEAP[$32]; //@line 377 "cjkcodecs.h"
        var $34=($33) - 1; //@line 377 "cjkcodecs.h"
        var $35=$o; //@line 377 "cjkcodecs.h"
        var $36=$35; //@line 377 "cjkcodecs.h"
        HEAP[$36]=$34; //@line 377 "cjkcodecs.h"
        var $37=$o; //@line 377 "cjkcodecs.h"
        var $38=$37; //@line 377 "cjkcodecs.h"
        var $39=HEAP[$38]; //@line 377 "cjkcodecs.h"
        var $40=($39)==0; //@line 377 "cjkcodecs.h"
        if ($40) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 377 "cjkcodecs.h"
      case 10: // $bb9
        var $41=$o; //@line 377 "cjkcodecs.h"
        var $42=$41+4; //@line 377 "cjkcodecs.h"
        var $43=HEAP[$42]; //@line 377 "cjkcodecs.h"
        var $44=$43+24; //@line 377 "cjkcodecs.h"
        var $45=HEAP[$44]; //@line 377 "cjkcodecs.h"
        var $46=$o; //@line 377 "cjkcodecs.h"
        FUNCTION_TABLE[$45]($46); //@line 377 "cjkcodecs.h"
        __label__ = 11; break; //@line 377 "cjkcodecs.h"
      case 11: // $bb10
        var $47=$mod; //@line 380 "cjkcodecs.h"
        var $48=$47; //@line 380 "cjkcodecs.h"
        var $49=HEAP[$48]; //@line 380 "cjkcodecs.h"
        var $50=($49) - 1; //@line 380 "cjkcodecs.h"
        var $51=$mod; //@line 380 "cjkcodecs.h"
        var $52=$51; //@line 380 "cjkcodecs.h"
        HEAP[$52]=$50; //@line 380 "cjkcodecs.h"
        var $53=$mod; //@line 380 "cjkcodecs.h"
        var $54=$53; //@line 380 "cjkcodecs.h"
        var $55=HEAP[$54]; //@line 380 "cjkcodecs.h"
        var $56=($55)==0; //@line 380 "cjkcodecs.h"
        if ($56) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 380 "cjkcodecs.h"
      case 12: // $bb11
        var $57=$mod; //@line 380 "cjkcodecs.h"
        var $58=$57+4; //@line 380 "cjkcodecs.h"
        var $59=HEAP[$58]; //@line 380 "cjkcodecs.h"
        var $60=$59+24; //@line 380 "cjkcodecs.h"
        var $61=HEAP[$60]; //@line 380 "cjkcodecs.h"
        var $62=$mod; //@line 380 "cjkcodecs.h"
        FUNCTION_TABLE[$61]($62); //@line 380 "cjkcodecs.h"
        __label__ = 13; break; //@line 380 "cjkcodecs.h"
      case 13: // $bb12
        $0=0; //@line 381 "cjkcodecs.h"
        __label__ = 17; break; //@line 381 "cjkcodecs.h"
      case 14: // $errorexit
        var $63=$mod; //@line 384 "cjkcodecs.h"
        var $64=$63; //@line 384 "cjkcodecs.h"
        var $65=HEAP[$64]; //@line 384 "cjkcodecs.h"
        var $66=($65) - 1; //@line 384 "cjkcodecs.h"
        var $67=$mod; //@line 384 "cjkcodecs.h"
        var $68=$67; //@line 384 "cjkcodecs.h"
        HEAP[$68]=$66; //@line 384 "cjkcodecs.h"
        var $69=$mod; //@line 384 "cjkcodecs.h"
        var $70=$69; //@line 384 "cjkcodecs.h"
        var $71=HEAP[$70]; //@line 384 "cjkcodecs.h"
        var $72=($71)==0; //@line 384 "cjkcodecs.h"
        if ($72) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 384 "cjkcodecs.h"
      case 15: // $bb13
        var $73=$mod; //@line 384 "cjkcodecs.h"
        var $74=$73+4; //@line 384 "cjkcodecs.h"
        var $75=HEAP[$74]; //@line 384 "cjkcodecs.h"
        var $76=$75+24; //@line 384 "cjkcodecs.h"
        var $77=HEAP[$76]; //@line 384 "cjkcodecs.h"
        var $78=$mod; //@line 384 "cjkcodecs.h"
        FUNCTION_TABLE[$77]($78); //@line 384 "cjkcodecs.h"
        __label__ = 16; break; //@line 384 "cjkcodecs.h"
      case 16: // $bb14
        $0=-1; //@line 385 "cjkcodecs.h"
        __label__ = 17; break; //@line 385 "cjkcodecs.h"
      case 17: // $bb15
        var $79=$0; //@line 360 "cjkcodecs.h"
        $retval=$79; //@line 360 "cjkcodecs.h"
        var $retval16=$retval; //@line 360 "cjkcodecs.h"
        ;
        return $retval16; //@line 360 "cjkcodecs.h"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_codec_init($config) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $config_addr;
        var $retval;
        var $0;
        var $desig;
        $config_addr=$config;
        var $1=$config_addr; //@line 126 "_codecs_iso2022.c"
        var $2=$1; //@line 126 "_codecs_iso2022.c"
        var $3=$2+4; //@line 126 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 126 "_codecs_iso2022.c"
        $desig=$4; //@line 126 "_codecs_iso2022.c"
        var $5=$config_addr; //@line 127 "_codecs_iso2022.c"
        var $6=$5; //@line 127 "_codecs_iso2022.c"
        var $7=$6+4; //@line 127 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 127 "_codecs_iso2022.c"
        $desig=$8; //@line 127 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 127 "_codecs_iso2022.c"
      case 1: // $bb
        var $9=$desig; //@line 128 "_codecs_iso2022.c"
        var $10=$9+4; //@line 128 "_codecs_iso2022.c"
        var $11=HEAP[$10]; //@line 128 "_codecs_iso2022.c"
        var $12=($11)!=0; //@line 128 "_codecs_iso2022.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 128 "_codecs_iso2022.c"
      case 2: // $bb1
        var $13=$desig; //@line 128 "_codecs_iso2022.c"
        var $14=$13+4; //@line 128 "_codecs_iso2022.c"
        var $15=HEAP[$14]; //@line 128 "_codecs_iso2022.c"
        var $16=FUNCTION_TABLE[$15](); //@line 128 "_codecs_iso2022.c"
        var $17=($16)!=0; //@line 128 "_codecs_iso2022.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 128 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=-1; //@line 129 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 129 "_codecs_iso2022.c"
      case 4: // $bb3
        var $18=$desig; //@line 127 "_codecs_iso2022.c"
        var $19=$18+16; //@line 127 "_codecs_iso2022.c"
        $desig=$19; //@line 127 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 127 "_codecs_iso2022.c"
      case 5: // $bb4
        var $20=$desig; //@line 127 "_codecs_iso2022.c"
        var $21=$20; //@line 127 "_codecs_iso2022.c"
        var $22=HEAP[$21]; //@line 127 "_codecs_iso2022.c"
        var $23=($22)!=0; //@line 127 "_codecs_iso2022.c"
        if ($23) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 127 "_codecs_iso2022.c"
      case 6: // $bb5
        $0=0; //@line 130 "_codecs_iso2022.c"
        __label__ = 7; break; //@line 130 "_codecs_iso2022.c"
      case 7: // $bb6
        var $24=$0; //@line 129 "_codecs_iso2022.c"
        $retval=$24; //@line 129 "_codecs_iso2022.c"
        var $retval7=$retval; //@line 129 "_codecs_iso2022.c"
        ;
        return $retval7; //@line 129 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_encode_init($state, $config) {
    ;
    var __label__;
  
    var $state_addr;
    var $retval;
    var $0;
    $state_addr=$state;
    var $1=$state_addr; //@line 135 "_codecs_iso2022.c"
    var $2=$1; //@line 135 "_codecs_iso2022.c"
    var $3=$2; //@line 135 "_codecs_iso2022.c"
    var $4=$3+4; //@line 135 "_codecs_iso2022.c"
    HEAP[$4]=0; //@line 135 "_codecs_iso2022.c"
    var $5=$state_addr; //@line 136 "_codecs_iso2022.c"
    var $6=$5; //@line 136 "_codecs_iso2022.c"
    var $7=$6; //@line 136 "_codecs_iso2022.c"
    var $8=$7; //@line 136 "_codecs_iso2022.c"
    HEAP[$8]=66; //@line 136 "_codecs_iso2022.c"
    var $9=$state_addr; //@line 137 "_codecs_iso2022.c"
    var $10=$9; //@line 137 "_codecs_iso2022.c"
    var $11=$10; //@line 137 "_codecs_iso2022.c"
    var $12=$11+1; //@line 137 "_codecs_iso2022.c"
    HEAP[$12]=66; //@line 137 "_codecs_iso2022.c"
    $0=0; //@line 138 "_codecs_iso2022.c"
    var $13=$0; //@line 138 "_codecs_iso2022.c"
    $retval=$13; //@line 138 "_codecs_iso2022.c"
    var $retval1=$retval; //@line 138 "_codecs_iso2022.c"
    ;
    return $retval1; //@line 138 "_codecs_iso2022.c"
  }
  

  function _iso2022_encode_reset($state, $config, $outbuf, $outleft) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $state_addr;
        var $config_addr;
        var $outbuf_addr;
        var $outleft_addr;
        var $retval;
        var $0;
        $state_addr=$state;
        $config_addr=$config;
        $outbuf_addr=$outbuf;
        $outleft_addr=$outleft;
        var $1=$state_addr; //@line 143 "_codecs_iso2022.c"
        var $2=$1; //@line 143 "_codecs_iso2022.c"
        var $3=$2; //@line 143 "_codecs_iso2022.c"
        var $4=$3+4; //@line 143 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 143 "_codecs_iso2022.c"
        var $6=($5); //@line 143 "_codecs_iso2022.c"
        var $7=($6) & 1; //@line 143 "_codecs_iso2022.c"
        var $8=((($7)) & 255); //@line 143 "_codecs_iso2022.c"
        var $toBool=($8)!=0; //@line 143 "_codecs_iso2022.c"
        if ($toBool) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 143 "_codecs_iso2022.c"
      case 1: // $bb
        var $9=$outleft_addr; //@line 144 "_codecs_iso2022.c"
        var $10=($9) <= 0; //@line 144 "_codecs_iso2022.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 144 "_codecs_iso2022.c"
      case 2: // $bb1
        $0=-1; //@line 144 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 144 "_codecs_iso2022.c"
      case 3: // $bb2
        var $11=$outbuf_addr; //@line 144 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 144 "_codecs_iso2022.c"
        var $13=$12; //@line 144 "_codecs_iso2022.c"
        HEAP[$13]=15; //@line 144 "_codecs_iso2022.c"
        var $14=$outbuf_addr; //@line 145 "_codecs_iso2022.c"
        var $15=HEAP[$14]; //@line 145 "_codecs_iso2022.c"
        var $16=$15+1; //@line 145 "_codecs_iso2022.c"
        var $17=$outbuf_addr; //@line 145 "_codecs_iso2022.c"
        HEAP[$17]=$16; //@line 145 "_codecs_iso2022.c"
        var $18=$outleft_addr; //@line 145 "_codecs_iso2022.c"
        var $19=($18) - 1; //@line 145 "_codecs_iso2022.c"
        $outleft_addr=$19; //@line 145 "_codecs_iso2022.c"
        var $20=$state_addr; //@line 146 "_codecs_iso2022.c"
        var $21=$20; //@line 146 "_codecs_iso2022.c"
        var $22=$21; //@line 146 "_codecs_iso2022.c"
        var $23=$22+4; //@line 146 "_codecs_iso2022.c"
        var $24=HEAP[$23]; //@line 146 "_codecs_iso2022.c"
        var $25=($24) & -2; //@line 146 "_codecs_iso2022.c"
        var $26=$state_addr; //@line 146 "_codecs_iso2022.c"
        var $27=$26; //@line 146 "_codecs_iso2022.c"
        var $28=$27; //@line 146 "_codecs_iso2022.c"
        var $29=$28+4; //@line 146 "_codecs_iso2022.c"
        HEAP[$29]=$25; //@line 146 "_codecs_iso2022.c"
        __label__ = 4; break; //@line 146 "_codecs_iso2022.c"
      case 4: // $bb3
        var $30=$state_addr; //@line 148 "_codecs_iso2022.c"
        var $31=$30; //@line 148 "_codecs_iso2022.c"
        var $32=$31; //@line 148 "_codecs_iso2022.c"
        var $33=$32; //@line 148 "_codecs_iso2022.c"
        var $34=HEAP[$33]; //@line 148 "_codecs_iso2022.c"
        var $35=($34)!=66; //@line 148 "_codecs_iso2022.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 148 "_codecs_iso2022.c"
      case 5: // $bb4
        var $36=$outleft_addr; //@line 149 "_codecs_iso2022.c"
        var $37=($36) <= 2; //@line 149 "_codecs_iso2022.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 149 "_codecs_iso2022.c"
      case 6: // $bb5
        $0=-1; //@line 149 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 149 "_codecs_iso2022.c"
      case 7: // $bb6
        var $38=$outbuf_addr; //@line 149 "_codecs_iso2022.c"
        var $39=HEAP[$38]; //@line 149 "_codecs_iso2022.c"
        var $40=$39; //@line 149 "_codecs_iso2022.c"
        HEAP[$40]=27; //@line 149 "_codecs_iso2022.c"
        var $41=$outbuf_addr; //@line 149 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 149 "_codecs_iso2022.c"
        var $43=$42+1; //@line 149 "_codecs_iso2022.c"
        HEAP[$43]=40; //@line 149 "_codecs_iso2022.c"
        var $44=$outbuf_addr; //@line 149 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 149 "_codecs_iso2022.c"
        var $46=$45+2; //@line 149 "_codecs_iso2022.c"
        HEAP[$46]=66; //@line 149 "_codecs_iso2022.c"
        var $47=$outbuf_addr; //@line 150 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 150 "_codecs_iso2022.c"
        var $49=$48+3; //@line 150 "_codecs_iso2022.c"
        var $50=$outbuf_addr; //@line 150 "_codecs_iso2022.c"
        HEAP[$50]=$49; //@line 150 "_codecs_iso2022.c"
        var $51=$outleft_addr; //@line 150 "_codecs_iso2022.c"
        var $52=($51) - 3; //@line 150 "_codecs_iso2022.c"
        $outleft_addr=$52; //@line 150 "_codecs_iso2022.c"
        var $53=$state_addr; //@line 151 "_codecs_iso2022.c"
        var $54=$53; //@line 151 "_codecs_iso2022.c"
        var $55=$54; //@line 151 "_codecs_iso2022.c"
        var $56=$55; //@line 151 "_codecs_iso2022.c"
        HEAP[$56]=66; //@line 151 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 151 "_codecs_iso2022.c"
      case 8: // $bb7
        $0=0; //@line 153 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 153 "_codecs_iso2022.c"
      case 9: // $bb8
        var $57=$0; //@line 144 "_codecs_iso2022.c"
        $retval=$57; //@line 144 "_codecs_iso2022.c"
        var $retval9=$retval; //@line 144 "_codecs_iso2022.c"
        ;
        return $retval9; //@line 144 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_encode($state, $config, $inbuf, $inleft, $outbuf, $outleft, $flags) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $state_addr;
        var $config_addr;
        var $inbuf_addr;
        var $inleft_addr;
        var $outbuf_addr;
        var $outleft_addr;
        var $flags_addr;
        var $retval;
        var $iftmp_13;
        var $0;
        var $dsg;
        var $encoded;
        var $c=__stackBase__;
        var $insize;
        var $length=__stackBase__+4;
        var $u4in=__stackBase__+8;
        $state_addr=$state;
        $config_addr=$config;
        $inbuf_addr=$inbuf;
        $inleft_addr=$inleft;
        $outbuf_addr=$outbuf;
        $outleft_addr=$outleft;
        $flags_addr=$flags;
        var $1=$u4in; //@line 200 "_codecs_iso2022.c"
        var $2=$u4in+4; //@line 201 "_codecs_iso2022.c"
        var $u4in29=$u4in; //@line 202 "_codecs_iso2022.c"
        __lastLabel__ = -1; __label__ = 77; break; //@line 158 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=$inbuf_addr; //@line 161 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 161 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 161 "_codecs_iso2022.c"
        var $6=($5); //@line 161 "_codecs_iso2022.c"
        HEAP[$c]=$6; //@line 161 "_codecs_iso2022.c"
        var $7=HEAP[$c]; //@line 164 "_codecs_iso2022.c"
        var $8=($7) <= 127; //@line 164 "_codecs_iso2022.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 13; break; } //@line 164 "_codecs_iso2022.c"
      case 2: // $bb1
        var $9=$state_addr; //@line 165 "_codecs_iso2022.c"
        var $10=$9; //@line 165 "_codecs_iso2022.c"
        var $11=$10; //@line 165 "_codecs_iso2022.c"
        var $12=$11; //@line 165 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 165 "_codecs_iso2022.c"
        var $14=($13)!=66; //@line 165 "_codecs_iso2022.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 165 "_codecs_iso2022.c"
      case 3: // $bb2
        var $15=$outleft_addr; //@line 166 "_codecs_iso2022.c"
        var $16=($15) <= 2; //@line 166 "_codecs_iso2022.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 166 "_codecs_iso2022.c"
      case 4: // $bb3
        $0=-1; //@line 166 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 166 "_codecs_iso2022.c"
      case 5: // $bb4
        var $17=$outbuf_addr; //@line 166 "_codecs_iso2022.c"
        var $18=HEAP[$17]; //@line 166 "_codecs_iso2022.c"
        var $19=$18; //@line 166 "_codecs_iso2022.c"
        HEAP[$19]=27; //@line 166 "_codecs_iso2022.c"
        var $20=$outbuf_addr; //@line 166 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 166 "_codecs_iso2022.c"
        var $22=$21+1; //@line 166 "_codecs_iso2022.c"
        HEAP[$22]=40; //@line 166 "_codecs_iso2022.c"
        var $23=$outbuf_addr; //@line 166 "_codecs_iso2022.c"
        var $24=HEAP[$23]; //@line 166 "_codecs_iso2022.c"
        var $25=$24+2; //@line 166 "_codecs_iso2022.c"
        HEAP[$25]=66; //@line 166 "_codecs_iso2022.c"
        var $26=$state_addr; //@line 167 "_codecs_iso2022.c"
        var $27=$26; //@line 167 "_codecs_iso2022.c"
        var $28=$27; //@line 167 "_codecs_iso2022.c"
        var $29=$28; //@line 167 "_codecs_iso2022.c"
        HEAP[$29]=66; //@line 167 "_codecs_iso2022.c"
        var $30=$outbuf_addr; //@line 168 "_codecs_iso2022.c"
        var $31=HEAP[$30]; //@line 168 "_codecs_iso2022.c"
        var $32=$31+3; //@line 168 "_codecs_iso2022.c"
        var $33=$outbuf_addr; //@line 168 "_codecs_iso2022.c"
        HEAP[$33]=$32; //@line 168 "_codecs_iso2022.c"
        var $34=$outleft_addr; //@line 168 "_codecs_iso2022.c"
        var $35=($34) - 3; //@line 168 "_codecs_iso2022.c"
        $outleft_addr=$35; //@line 168 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 168 "_codecs_iso2022.c"
      case 6: // $bb5
        var $36=$state_addr; //@line 170 "_codecs_iso2022.c"
        var $37=$36; //@line 170 "_codecs_iso2022.c"
        var $38=$37; //@line 170 "_codecs_iso2022.c"
        var $39=$38+4; //@line 170 "_codecs_iso2022.c"
        var $40=HEAP[$39]; //@line 170 "_codecs_iso2022.c"
        var $41=($40); //@line 170 "_codecs_iso2022.c"
        var $42=($41) & 1; //@line 170 "_codecs_iso2022.c"
        var $43=((($42)) & 255); //@line 170 "_codecs_iso2022.c"
        var $toBool=($43)!=0; //@line 170 "_codecs_iso2022.c"
        var $44=$outleft_addr; //@line 171 "_codecs_iso2022.c"
        if ($toBool) { __lastLabel__ = 6; __label__ = 7; break; } else { __lastLabel__ = 6; __label__ = 10; break; } //@line 170 "_codecs_iso2022.c"
      case 7: // $bb6
        var $45=($44) <= 0; //@line 171 "_codecs_iso2022.c"
        if ($45) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 171 "_codecs_iso2022.c"
      case 8: // $bb7
        $0=-1; //@line 171 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 171 "_codecs_iso2022.c"
      case 9: // $bb8
        var $46=$outbuf_addr; //@line 171 "_codecs_iso2022.c"
        var $47=HEAP[$46]; //@line 171 "_codecs_iso2022.c"
        var $48=$47; //@line 171 "_codecs_iso2022.c"
        HEAP[$48]=15; //@line 171 "_codecs_iso2022.c"
        var $49=$state_addr; //@line 172 "_codecs_iso2022.c"
        var $50=$49; //@line 172 "_codecs_iso2022.c"
        var $51=$50; //@line 172 "_codecs_iso2022.c"
        var $52=$51+4; //@line 172 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 172 "_codecs_iso2022.c"
        var $54=($53) & -2; //@line 172 "_codecs_iso2022.c"
        var $55=$state_addr; //@line 172 "_codecs_iso2022.c"
        var $56=$55; //@line 172 "_codecs_iso2022.c"
        var $57=$56; //@line 172 "_codecs_iso2022.c"
        var $58=$57+4; //@line 172 "_codecs_iso2022.c"
        HEAP[$58]=$54; //@line 172 "_codecs_iso2022.c"
        var $59=$outbuf_addr; //@line 173 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 173 "_codecs_iso2022.c"
        var $61=$60+1; //@line 173 "_codecs_iso2022.c"
        var $62=$outbuf_addr; //@line 173 "_codecs_iso2022.c"
        HEAP[$62]=$61; //@line 173 "_codecs_iso2022.c"
        var $63=$outleft_addr; //@line 173 "_codecs_iso2022.c"
        var $64=($63) - 1; //@line 173 "_codecs_iso2022.c"
        $outleft_addr=$64; //@line 173 "_codecs_iso2022.c"
        __lastLabel__ = 9; __label__ = 10; break; //@line 173 "_codecs_iso2022.c"
      case 10: // $bb9
        var $65=__lastLabel__ == 9 ? $64 : ($44);
        var $66=($65) <= 0; //@line 175 "_codecs_iso2022.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 175 "_codecs_iso2022.c"
      case 11: // $bb10
        $0=-1; //@line 175 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 175 "_codecs_iso2022.c"
      case 12: // $bb11
        var $67=$outbuf_addr; //@line 175 "_codecs_iso2022.c"
        var $68=HEAP[$67]; //@line 175 "_codecs_iso2022.c"
        var $69=HEAP[$c]; //@line 175 "_codecs_iso2022.c"
        var $70=((($69)) & 255); //@line 175 "_codecs_iso2022.c"
        var $71=$68; //@line 175 "_codecs_iso2022.c"
        HEAP[$71]=$70; //@line 175 "_codecs_iso2022.c"
        var $72=$inbuf_addr; //@line 176 "_codecs_iso2022.c"
        var $73=HEAP[$72]; //@line 176 "_codecs_iso2022.c"
        var $74=$73+2; //@line 176 "_codecs_iso2022.c"
        var $75=$inbuf_addr; //@line 176 "_codecs_iso2022.c"
        HEAP[$75]=$74; //@line 176 "_codecs_iso2022.c"
        var $76=$inleft_addr; //@line 176 "_codecs_iso2022.c"
        var $77=($76) - 1; //@line 176 "_codecs_iso2022.c"
        $inleft_addr=$77; //@line 176 "_codecs_iso2022.c"
        var $78=$outbuf_addr; //@line 176 "_codecs_iso2022.c"
        var $79=HEAP[$78]; //@line 176 "_codecs_iso2022.c"
        var $80=$79+1; //@line 176 "_codecs_iso2022.c"
        var $81=$outbuf_addr; //@line 176 "_codecs_iso2022.c"
        HEAP[$81]=$80; //@line 176 "_codecs_iso2022.c"
        var $82=$outleft_addr; //@line 176 "_codecs_iso2022.c"
        var $83=($82) - 1; //@line 176 "_codecs_iso2022.c"
        $outleft_addr=$83; //@line 176 "_codecs_iso2022.c"
        var $_pr3=$inleft_addr;
        __lastLabel__ = 12; __label__ = 77; break; //@line 176 "_codecs_iso2022.c"
      case 13: // $bb12
        var $84=HEAP[$c]; //@line 180 "_codecs_iso2022.c"
        var $85=($84) >>> 10; //@line 180 "_codecs_iso2022.c"
        var $86=($85)==54; //@line 180 "_codecs_iso2022.c"
        if ($86) { __lastLabel__ = 13; __label__ = 14; break; } else { __lastLabel__ = 13; __label__ = 18; break; } //@line 180 "_codecs_iso2022.c"
      case 14: // $bb13
        var $87=$inleft_addr; //@line 180 "_codecs_iso2022.c"
        var $88=($87) <= 1; //@line 180 "_codecs_iso2022.c"
        if ($88) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 180 "_codecs_iso2022.c"
      case 15: // $bb14
        $0=-2; //@line 180 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 180 "_codecs_iso2022.c"
      case 16: // $bb15
        var $89=$inbuf_addr; //@line 180 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 180 "_codecs_iso2022.c"
        var $91=$90+2; //@line 180 "_codecs_iso2022.c"
        var $92=HEAP[$91]; //@line 180 "_codecs_iso2022.c"
        var $93=($92) >>> 10; //@line 180 "_codecs_iso2022.c"
        var $94=($93)==55; //@line 180 "_codecs_iso2022.c"
        var $95=HEAP[$c]; //@line 180 "_codecs_iso2022.c"
        if ($94) { __lastLabel__ = 16; __label__ = 17; break; } else { __lastLabel__ = 16; __label__ = 18; break; } //@line 180 "_codecs_iso2022.c"
      case 17: // $bb16
        var $96=($95) - 55296; //@line 180 "_codecs_iso2022.c"
        var $97=($96) * 1024;
        var $98=$inbuf_addr; //@line 180 "_codecs_iso2022.c"
        var $99=HEAP[$98]; //@line 180 "_codecs_iso2022.c"
        var $100=$99+2; //@line 180 "_codecs_iso2022.c"
        var $101=HEAP[$100]; //@line 180 "_codecs_iso2022.c"
        var $102=($101); //@line 180 "_codecs_iso2022.c"
        var $103=($97) + 9216; //@line 180 "_codecs_iso2022.c"
        var $104=($103) + ($102); //@line 180 "_codecs_iso2022.c"
        HEAP[$c]=$104; //@line 180 "_codecs_iso2022.c"
        __lastLabel__ = 17; __label__ = 18; break; //@line 180 "_codecs_iso2022.c"
      case 18: // $bb17
        var $105=__lastLabel__ == 17 ? $104 : (__lastLabel__ == 13 ? $84 : ($95));
        var $106=($105) > 65535; //@line 181 "_codecs_iso2022.c"
        if ($106) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 181 "_codecs_iso2022.c"
      case 19: // $bb18
        $iftmp_13=2; //@line 181 "_codecs_iso2022.c"
        __label__ = 21; break; //@line 181 "_codecs_iso2022.c"
      case 20: // $bb19
        $iftmp_13=1; //@line 181 "_codecs_iso2022.c"
        __label__ = 21; break; //@line 181 "_codecs_iso2022.c"
      case 21: // $bb20
        var $107=$iftmp_13; //@line 181 "_codecs_iso2022.c"
        $insize=$107; //@line 181 "_codecs_iso2022.c"
        $encoded=-1; //@line 183 "_codecs_iso2022.c"
        var $108=$config_addr; //@line 184 "_codecs_iso2022.c"
        var $109=$108; //@line 184 "_codecs_iso2022.c"
        var $110=$109+4; //@line 184 "_codecs_iso2022.c"
        var $111=HEAP[$110]; //@line 184 "_codecs_iso2022.c"
        $dsg=$111; //@line 184 "_codecs_iso2022.c"
        __label__ = 32; break; //@line 184 "_codecs_iso2022.c"
      case 22: // $bb21
        HEAP[$length]=1; //@line 185 "_codecs_iso2022.c"
        var $112=$dsg; //@line 186 "_codecs_iso2022.c"
        var $113=$112+12; //@line 186 "_codecs_iso2022.c"
        var $114=HEAP[$113]; //@line 186 "_codecs_iso2022.c"
        var $115=FUNCTION_TABLE[$114]($c, $length); //@line 186 "_codecs_iso2022.c"
        $encoded=$115; //@line 186 "_codecs_iso2022.c"
        var $116=$encoded; //@line 187 "_codecs_iso2022.c"
        var $117=($116)==-2; //@line 187 "_codecs_iso2022.c"
        if ($117) { __label__ = 23; break; } else { __label__ = 30; break; } //@line 187 "_codecs_iso2022.c"
      case 23: // $bb22
        var $118=$inleft_addr; //@line 190 "_codecs_iso2022.c"
        var $119=($118) <= 1; //@line 190 "_codecs_iso2022.c"
        if ($119) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 190 "_codecs_iso2022.c"
      case 24: // $bb23
        var $120=$flags_addr; //@line 191 "_codecs_iso2022.c"
        var $121=($120) & 1; //@line 191 "_codecs_iso2022.c"
        var $122=($121)==0; //@line 191 "_codecs_iso2022.c"
        if ($122) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 191 "_codecs_iso2022.c"
      case 25: // $bb24
        $0=-2; //@line 192 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 192 "_codecs_iso2022.c"
      case 26: // $bb28
        HEAP[$length]=2; //@line 196 "_codecs_iso2022.c"
        var $123=$inbuf_addr; //@line 200 "_codecs_iso2022.c"
        var $124=HEAP[$123]; //@line 200 "_codecs_iso2022.c"
        var $125=$124; //@line 200 "_codecs_iso2022.c"
        var $126=HEAP[$125]; //@line 200 "_codecs_iso2022.c"
        var $127=($126); //@line 200 "_codecs_iso2022.c"
        HEAP[$1]=$127; //@line 200 "_codecs_iso2022.c"
        var $128=$inbuf_addr; //@line 201 "_codecs_iso2022.c"
        var $129=HEAP[$128]; //@line 201 "_codecs_iso2022.c"
        var $130=$129+2; //@line 201 "_codecs_iso2022.c"
        var $131=HEAP[$130]; //@line 201 "_codecs_iso2022.c"
        var $132=($131); //@line 201 "_codecs_iso2022.c"
        HEAP[$2]=$132; //@line 201 "_codecs_iso2022.c"
        var $133=$dsg; //@line 202 "_codecs_iso2022.c"
        var $134=$133+12; //@line 202 "_codecs_iso2022.c"
        var $135=HEAP[$134]; //@line 202 "_codecs_iso2022.c"
        var $136=FUNCTION_TABLE[$135]($u4in29, $length); //@line 202 "_codecs_iso2022.c"
        $encoded=$136; //@line 202 "_codecs_iso2022.c"
        __lastLabel__ = 26; __label__ = 28; break; //@line 202 "_codecs_iso2022.c"
      case 27: // $bb30
        HEAP[$length]=-1; //@line 193 "_codecs_iso2022.c"
        var $137=$dsg; //@line 204 "_codecs_iso2022.c"
        var $138=$137+12; //@line 204 "_codecs_iso2022.c"
        var $139=HEAP[$138]; //@line 204 "_codecs_iso2022.c"
        var $140=FUNCTION_TABLE[$139]($c, $length); //@line 204 "_codecs_iso2022.c"
        $encoded=$140; //@line 204 "_codecs_iso2022.c"
        __lastLabel__ = 27; __label__ = 28; break; //@line 204 "_codecs_iso2022.c"
      case 28: // $bb31
        var $141=__lastLabel__ == 27 ? $140 : ($136);
        var $142=($141)!=-1; //@line 208 "_codecs_iso2022.c"
        if ($142) { __label__ = 29; break; } else { __label__ = 31; break; } //@line 208 "_codecs_iso2022.c"
      case 29: // $bb32
        var $143=HEAP[$length]; //@line 209 "_codecs_iso2022.c"
        $insize=$143; //@line 209 "_codecs_iso2022.c"
        __label__ = 33; break; //@line 209 "_codecs_iso2022.c"
      case 30: // $bb34
        var $144=$encoded; //@line 213 "_codecs_iso2022.c"
        var $145=($144)!=-1; //@line 213 "_codecs_iso2022.c"
        if ($145) { __label__ = 33; break; } else { __label__ = 31; break; } //@line 213 "_codecs_iso2022.c"
      case 31: // $bb35
        var $146=$dsg; //@line 184 "_codecs_iso2022.c"
        var $147=$146+16; //@line 184 "_codecs_iso2022.c"
        $dsg=$147; //@line 184 "_codecs_iso2022.c"
        __label__ = 32; break; //@line 184 "_codecs_iso2022.c"
      case 32: // $bb36
        var $148=$dsg; //@line 184 "_codecs_iso2022.c"
        var $149=$148; //@line 184 "_codecs_iso2022.c"
        var $150=HEAP[$149]; //@line 184 "_codecs_iso2022.c"
        var $151=($150)!=0; //@line 184 "_codecs_iso2022.c"
        if ($151) { __label__ = 22; break; } else { __label__ = 33; break; } //@line 184 "_codecs_iso2022.c"
      case 33: // $bb37
        var $152=$dsg; //@line 217 "_codecs_iso2022.c"
        var $153=$152; //@line 217 "_codecs_iso2022.c"
        var $154=HEAP[$153]; //@line 217 "_codecs_iso2022.c"
        var $155=($154)==0; //@line 217 "_codecs_iso2022.c"
        if ($155) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 217 "_codecs_iso2022.c"
      case 34: // $bb38
        $0=1; //@line 218 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 218 "_codecs_iso2022.c"
      case 35: // $bb39
        var $156=$dsg; //@line 219 "_codecs_iso2022.c"
        var $157=$156+2; //@line 219 "_codecs_iso2022.c"
        var $158=HEAP[$157]; //@line 219 "_codecs_iso2022.c"
        var $159=($158)!=1; //@line 219 "_codecs_iso2022.c"
        if ($159) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 219 "_codecs_iso2022.c"
      case 36: // $bb40
        var $160=$dsg; //@line 219 "_codecs_iso2022.c"
        var $161=$160+2; //@line 219 "_codecs_iso2022.c"
        var $162=HEAP[$161]; //@line 219 "_codecs_iso2022.c"
        var $163=($162)!=2; //@line 219 "_codecs_iso2022.c"
        if ($163) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 219 "_codecs_iso2022.c"
      case 37: // $bb41
        ___assert_fail(__str9, __str10, 219, ___PRETTY_FUNCTION___8716); //@line 219 "_codecs_iso2022.c"
        throw "Reached an unreachable!" //@line 219 "_codecs_iso2022.c"
      case 38: // $bb42
        var $164=$dsg; //@line 221 "_codecs_iso2022.c"
        var $165=$164+1; //@line 221 "_codecs_iso2022.c"
        var $166=HEAP[$165]; //@line 221 "_codecs_iso2022.c"
        var $167=($166); //@line 221 "_codecs_iso2022.c"
        if ($167 == 0) {
          __label__ = 39; break;
        }
        else if ($167 == 1) {
          __label__ = 55; break;
        }
        else {
        __label__ = 67; break;
        }
        
      case 39: // $bb43
        var $168=$state_addr; //@line 223 "_codecs_iso2022.c"
        var $169=$168; //@line 223 "_codecs_iso2022.c"
        var $170=$169; //@line 223 "_codecs_iso2022.c"
        var $171=$170+4; //@line 223 "_codecs_iso2022.c"
        var $172=HEAP[$171]; //@line 223 "_codecs_iso2022.c"
        var $173=($172); //@line 223 "_codecs_iso2022.c"
        var $174=($173) & 1; //@line 223 "_codecs_iso2022.c"
        var $175=((($174)) & 255); //@line 223 "_codecs_iso2022.c"
        var $toBool44=($175)!=0; //@line 223 "_codecs_iso2022.c"
        if ($toBool44) { __label__ = 40; break; } else { __label__ = 43; break; } //@line 223 "_codecs_iso2022.c"
      case 40: // $bb45
        var $176=$outleft_addr; //@line 224 "_codecs_iso2022.c"
        var $177=($176) <= 0; //@line 224 "_codecs_iso2022.c"
        if ($177) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 224 "_codecs_iso2022.c"
      case 41: // $bb46
        $0=-1; //@line 224 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 224 "_codecs_iso2022.c"
      case 42: // $bb47
        var $178=$outbuf_addr; //@line 224 "_codecs_iso2022.c"
        var $179=HEAP[$178]; //@line 224 "_codecs_iso2022.c"
        var $180=$179; //@line 224 "_codecs_iso2022.c"
        HEAP[$180]=15; //@line 224 "_codecs_iso2022.c"
        var $181=$state_addr; //@line 225 "_codecs_iso2022.c"
        var $182=$181; //@line 225 "_codecs_iso2022.c"
        var $183=$182; //@line 225 "_codecs_iso2022.c"
        var $184=$183+4; //@line 225 "_codecs_iso2022.c"
        var $185=HEAP[$184]; //@line 225 "_codecs_iso2022.c"
        var $186=($185) & -2; //@line 225 "_codecs_iso2022.c"
        var $187=$state_addr; //@line 225 "_codecs_iso2022.c"
        var $188=$187; //@line 225 "_codecs_iso2022.c"
        var $189=$188; //@line 225 "_codecs_iso2022.c"
        var $190=$189+4; //@line 225 "_codecs_iso2022.c"
        HEAP[$190]=$186; //@line 225 "_codecs_iso2022.c"
        var $191=$outbuf_addr; //@line 226 "_codecs_iso2022.c"
        var $192=HEAP[$191]; //@line 226 "_codecs_iso2022.c"
        var $193=$192+1; //@line 226 "_codecs_iso2022.c"
        var $194=$outbuf_addr; //@line 226 "_codecs_iso2022.c"
        HEAP[$194]=$193; //@line 226 "_codecs_iso2022.c"
        var $195=$outleft_addr; //@line 226 "_codecs_iso2022.c"
        var $196=($195) - 1; //@line 226 "_codecs_iso2022.c"
        $outleft_addr=$196; //@line 226 "_codecs_iso2022.c"
        __label__ = 43; break; //@line 226 "_codecs_iso2022.c"
      case 43: // $bb48
        var $197=$state_addr; //@line 228 "_codecs_iso2022.c"
        var $198=$197; //@line 228 "_codecs_iso2022.c"
        var $199=$198; //@line 228 "_codecs_iso2022.c"
        var $200=$199; //@line 228 "_codecs_iso2022.c"
        var $201=HEAP[$200]; //@line 228 "_codecs_iso2022.c"
        var $202=$dsg; //@line 228 "_codecs_iso2022.c"
        var $203=$202; //@line 228 "_codecs_iso2022.c"
        var $204=HEAP[$203]; //@line 228 "_codecs_iso2022.c"
        var $205=($201)!=($204); //@line 228 "_codecs_iso2022.c"
        if ($205) { __label__ = 44; break; } else { __label__ = 68; break; } //@line 228 "_codecs_iso2022.c"
      case 44: // $bb49
        var $206=$dsg; //@line 229 "_codecs_iso2022.c"
        var $207=$206+2; //@line 229 "_codecs_iso2022.c"
        var $208=HEAP[$207]; //@line 229 "_codecs_iso2022.c"
        var $209=($208)==1; //@line 229 "_codecs_iso2022.c"
        if ($209) { __label__ = 45; break; } else { __label__ = 48; break; } //@line 229 "_codecs_iso2022.c"
      case 45: // $bb50
        var $210=$outleft_addr; //@line 230 "_codecs_iso2022.c"
        var $211=($210) <= 2; //@line 230 "_codecs_iso2022.c"
        if ($211) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 230 "_codecs_iso2022.c"
      case 46: // $bb51
        $0=-1; //@line 230 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 230 "_codecs_iso2022.c"
      case 47: // $bb52
        var $212=$outbuf_addr; //@line 230 "_codecs_iso2022.c"
        var $213=HEAP[$212]; //@line 230 "_codecs_iso2022.c"
        var $214=$213; //@line 230 "_codecs_iso2022.c"
        HEAP[$214]=27; //@line 230 "_codecs_iso2022.c"
        var $215=$outbuf_addr; //@line 230 "_codecs_iso2022.c"
        var $216=HEAP[$215]; //@line 230 "_codecs_iso2022.c"
        var $217=$216+1; //@line 230 "_codecs_iso2022.c"
        HEAP[$217]=40; //@line 230 "_codecs_iso2022.c"
        var $218=$outbuf_addr; //@line 230 "_codecs_iso2022.c"
        var $219=HEAP[$218]; //@line 230 "_codecs_iso2022.c"
        var $220=$dsg; //@line 230 "_codecs_iso2022.c"
        var $221=$220; //@line 230 "_codecs_iso2022.c"
        var $222=HEAP[$221]; //@line 230 "_codecs_iso2022.c"
        var $223=($222) & 127; //@line 230 "_codecs_iso2022.c"
        var $224=$219+2; //@line 230 "_codecs_iso2022.c"
        HEAP[$224]=$223; //@line 230 "_codecs_iso2022.c"
        var $225=$dsg; //@line 231 "_codecs_iso2022.c"
        var $226=$225; //@line 231 "_codecs_iso2022.c"
        var $227=HEAP[$226]; //@line 231 "_codecs_iso2022.c"
        var $228=$state_addr; //@line 231 "_codecs_iso2022.c"
        var $229=$228; //@line 231 "_codecs_iso2022.c"
        var $230=$229; //@line 231 "_codecs_iso2022.c"
        var $231=$230; //@line 231 "_codecs_iso2022.c"
        HEAP[$231]=$227; //@line 231 "_codecs_iso2022.c"
        var $232=$outbuf_addr; //@line 232 "_codecs_iso2022.c"
        var $233=HEAP[$232]; //@line 232 "_codecs_iso2022.c"
        var $234=$233+3; //@line 232 "_codecs_iso2022.c"
        var $235=$outbuf_addr; //@line 232 "_codecs_iso2022.c"
        HEAP[$235]=$234; //@line 232 "_codecs_iso2022.c"
        var $236=$outleft_addr; //@line 232 "_codecs_iso2022.c"
        var $237=($236) - 3; //@line 232 "_codecs_iso2022.c"
        $outleft_addr=$237; //@line 232 "_codecs_iso2022.c"
        __lastLabel__ = 47; __label__ = 69; break; //@line 232 "_codecs_iso2022.c"
      case 48: // $bb53
        var $238=$dsg; //@line 234 "_codecs_iso2022.c"
        var $239=$238; //@line 234 "_codecs_iso2022.c"
        var $240=HEAP[$239]; //@line 234 "_codecs_iso2022.c"
        var $241=($240)==-62; //@line 234 "_codecs_iso2022.c"
        var $242=$outleft_addr; //@line 235 "_codecs_iso2022.c"
        if ($241) { __label__ = 49; break; } else { __label__ = 52; break; } //@line 234 "_codecs_iso2022.c"
      case 49: // $bb54
        var $243=($242) <= 2; //@line 235 "_codecs_iso2022.c"
        if ($243) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 235 "_codecs_iso2022.c"
      case 50: // $bb55
        $0=-1; //@line 235 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 235 "_codecs_iso2022.c"
      case 51: // $bb56
        var $244=$outbuf_addr; //@line 235 "_codecs_iso2022.c"
        var $245=HEAP[$244]; //@line 235 "_codecs_iso2022.c"
        var $246=$245; //@line 235 "_codecs_iso2022.c"
        HEAP[$246]=27; //@line 235 "_codecs_iso2022.c"
        var $247=$outbuf_addr; //@line 235 "_codecs_iso2022.c"
        var $248=HEAP[$247]; //@line 235 "_codecs_iso2022.c"
        var $249=$248+1; //@line 235 "_codecs_iso2022.c"
        HEAP[$249]=36; //@line 235 "_codecs_iso2022.c"
        var $250=$outbuf_addr; //@line 235 "_codecs_iso2022.c"
        var $251=HEAP[$250]; //@line 235 "_codecs_iso2022.c"
        var $252=$dsg; //@line 235 "_codecs_iso2022.c"
        var $253=$252; //@line 235 "_codecs_iso2022.c"
        var $254=HEAP[$253]; //@line 235 "_codecs_iso2022.c"
        var $255=($254) & 127; //@line 235 "_codecs_iso2022.c"
        var $256=$251+2; //@line 235 "_codecs_iso2022.c"
        HEAP[$256]=$255; //@line 235 "_codecs_iso2022.c"
        var $257=$dsg; //@line 236 "_codecs_iso2022.c"
        var $258=$257; //@line 236 "_codecs_iso2022.c"
        var $259=HEAP[$258]; //@line 236 "_codecs_iso2022.c"
        var $260=$state_addr; //@line 236 "_codecs_iso2022.c"
        var $261=$260; //@line 236 "_codecs_iso2022.c"
        var $262=$261; //@line 236 "_codecs_iso2022.c"
        var $263=$262; //@line 236 "_codecs_iso2022.c"
        HEAP[$263]=$259; //@line 236 "_codecs_iso2022.c"
        var $264=$outbuf_addr; //@line 237 "_codecs_iso2022.c"
        var $265=HEAP[$264]; //@line 237 "_codecs_iso2022.c"
        var $266=$265+3; //@line 237 "_codecs_iso2022.c"
        var $267=$outbuf_addr; //@line 237 "_codecs_iso2022.c"
        HEAP[$267]=$266; //@line 237 "_codecs_iso2022.c"
        var $268=$outleft_addr; //@line 237 "_codecs_iso2022.c"
        var $269=($268) - 3; //@line 237 "_codecs_iso2022.c"
        $outleft_addr=$269; //@line 237 "_codecs_iso2022.c"
        __lastLabel__ = 51; __label__ = 69; break; //@line 237 "_codecs_iso2022.c"
      case 52: // $bb57
        var $270=($242) <= 3; //@line 240 "_codecs_iso2022.c"
        if ($270) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 240 "_codecs_iso2022.c"
      case 53: // $bb58
        $0=-1; //@line 240 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 240 "_codecs_iso2022.c"
      case 54: // $bb59
        var $271=$outbuf_addr; //@line 240 "_codecs_iso2022.c"
        var $272=HEAP[$271]; //@line 240 "_codecs_iso2022.c"
        var $273=$272; //@line 240 "_codecs_iso2022.c"
        HEAP[$273]=27; //@line 240 "_codecs_iso2022.c"
        var $274=$outbuf_addr; //@line 240 "_codecs_iso2022.c"
        var $275=HEAP[$274]; //@line 240 "_codecs_iso2022.c"
        var $276=$275+1; //@line 240 "_codecs_iso2022.c"
        HEAP[$276]=36; //@line 240 "_codecs_iso2022.c"
        var $277=$outbuf_addr; //@line 240 "_codecs_iso2022.c"
        var $278=HEAP[$277]; //@line 240 "_codecs_iso2022.c"
        var $279=$278+2; //@line 240 "_codecs_iso2022.c"
        HEAP[$279]=40; //@line 240 "_codecs_iso2022.c"
        var $280=$outbuf_addr; //@line 240 "_codecs_iso2022.c"
        var $281=HEAP[$280]; //@line 240 "_codecs_iso2022.c"
        var $282=$dsg; //@line 240 "_codecs_iso2022.c"
        var $283=$282; //@line 240 "_codecs_iso2022.c"
        var $284=HEAP[$283]; //@line 240 "_codecs_iso2022.c"
        var $285=($284) & 127; //@line 240 "_codecs_iso2022.c"
        var $286=$281+3; //@line 240 "_codecs_iso2022.c"
        HEAP[$286]=$285; //@line 240 "_codecs_iso2022.c"
        var $287=$dsg; //@line 242 "_codecs_iso2022.c"
        var $288=$287; //@line 242 "_codecs_iso2022.c"
        var $289=HEAP[$288]; //@line 242 "_codecs_iso2022.c"
        var $290=$state_addr; //@line 242 "_codecs_iso2022.c"
        var $291=$290; //@line 242 "_codecs_iso2022.c"
        var $292=$291; //@line 242 "_codecs_iso2022.c"
        var $293=$292; //@line 242 "_codecs_iso2022.c"
        HEAP[$293]=$289; //@line 242 "_codecs_iso2022.c"
        var $294=$outbuf_addr; //@line 243 "_codecs_iso2022.c"
        var $295=HEAP[$294]; //@line 243 "_codecs_iso2022.c"
        var $296=$295+4; //@line 243 "_codecs_iso2022.c"
        var $297=$outbuf_addr; //@line 243 "_codecs_iso2022.c"
        HEAP[$297]=$296; //@line 243 "_codecs_iso2022.c"
        var $298=$outleft_addr; //@line 243 "_codecs_iso2022.c"
        var $299=($298) - 4; //@line 243 "_codecs_iso2022.c"
        $outleft_addr=$299; //@line 243 "_codecs_iso2022.c"
        __lastLabel__ = 54; __label__ = 69; break; //@line 243 "_codecs_iso2022.c"
      case 55: // $bb61
        var $300=$state_addr; //@line 248 "_codecs_iso2022.c"
        var $301=$300; //@line 248 "_codecs_iso2022.c"
        var $302=$301; //@line 248 "_codecs_iso2022.c"
        var $303=$302+1; //@line 248 "_codecs_iso2022.c"
        var $304=HEAP[$303]; //@line 248 "_codecs_iso2022.c"
        var $305=$dsg; //@line 248 "_codecs_iso2022.c"
        var $306=$305; //@line 248 "_codecs_iso2022.c"
        var $307=HEAP[$306]; //@line 248 "_codecs_iso2022.c"
        var $308=($304)!=($307); //@line 248 "_codecs_iso2022.c"
        if ($308) { __label__ = 56; break; } else { __label__ = 63; break; } //@line 248 "_codecs_iso2022.c"
      case 56: // $bb62
        var $309=$dsg; //@line 249 "_codecs_iso2022.c"
        var $310=$309+2; //@line 249 "_codecs_iso2022.c"
        var $311=HEAP[$310]; //@line 249 "_codecs_iso2022.c"
        var $312=($311)==1; //@line 249 "_codecs_iso2022.c"
        var $313=$outleft_addr; //@line 250 "_codecs_iso2022.c"
        if ($312) { __label__ = 57; break; } else { __label__ = 60; break; } //@line 249 "_codecs_iso2022.c"
      case 57: // $bb63
        var $314=($313) <= 2; //@line 250 "_codecs_iso2022.c"
        if ($314) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 250 "_codecs_iso2022.c"
      case 58: // $bb64
        $0=-1; //@line 250 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 250 "_codecs_iso2022.c"
      case 59: // $bb65
        var $315=$outbuf_addr; //@line 250 "_codecs_iso2022.c"
        var $316=HEAP[$315]; //@line 250 "_codecs_iso2022.c"
        var $317=$316; //@line 250 "_codecs_iso2022.c"
        HEAP[$317]=27; //@line 250 "_codecs_iso2022.c"
        var $318=$outbuf_addr; //@line 250 "_codecs_iso2022.c"
        var $319=HEAP[$318]; //@line 250 "_codecs_iso2022.c"
        var $320=$319+1; //@line 250 "_codecs_iso2022.c"
        HEAP[$320]=41; //@line 250 "_codecs_iso2022.c"
        var $321=$outbuf_addr; //@line 250 "_codecs_iso2022.c"
        var $322=HEAP[$321]; //@line 250 "_codecs_iso2022.c"
        var $323=$dsg; //@line 250 "_codecs_iso2022.c"
        var $324=$323; //@line 250 "_codecs_iso2022.c"
        var $325=HEAP[$324]; //@line 250 "_codecs_iso2022.c"
        var $326=($325) & 127; //@line 250 "_codecs_iso2022.c"
        var $327=$322+2; //@line 250 "_codecs_iso2022.c"
        HEAP[$327]=$326; //@line 250 "_codecs_iso2022.c"
        var $328=$dsg; //@line 251 "_codecs_iso2022.c"
        var $329=$328; //@line 251 "_codecs_iso2022.c"
        var $330=HEAP[$329]; //@line 251 "_codecs_iso2022.c"
        var $331=$state_addr; //@line 251 "_codecs_iso2022.c"
        var $332=$331; //@line 251 "_codecs_iso2022.c"
        var $333=$332; //@line 251 "_codecs_iso2022.c"
        var $334=$333+1; //@line 251 "_codecs_iso2022.c"
        HEAP[$334]=$330; //@line 251 "_codecs_iso2022.c"
        var $335=$outbuf_addr; //@line 252 "_codecs_iso2022.c"
        var $336=HEAP[$335]; //@line 252 "_codecs_iso2022.c"
        var $337=$336+3; //@line 252 "_codecs_iso2022.c"
        var $338=$outbuf_addr; //@line 252 "_codecs_iso2022.c"
        HEAP[$338]=$337; //@line 252 "_codecs_iso2022.c"
        var $339=$outleft_addr; //@line 252 "_codecs_iso2022.c"
        var $340=($339) - 3; //@line 252 "_codecs_iso2022.c"
        $outleft_addr=$340; //@line 252 "_codecs_iso2022.c"
        __label__ = 63; break; //@line 252 "_codecs_iso2022.c"
      case 60: // $bb66
        var $341=($313) <= 3; //@line 255 "_codecs_iso2022.c"
        if ($341) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 255 "_codecs_iso2022.c"
      case 61: // $bb67
        $0=-1; //@line 255 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 255 "_codecs_iso2022.c"
      case 62: // $bb68
        var $342=$outbuf_addr; //@line 255 "_codecs_iso2022.c"
        var $343=HEAP[$342]; //@line 255 "_codecs_iso2022.c"
        var $344=$343; //@line 255 "_codecs_iso2022.c"
        HEAP[$344]=27; //@line 255 "_codecs_iso2022.c"
        var $345=$outbuf_addr; //@line 255 "_codecs_iso2022.c"
        var $346=HEAP[$345]; //@line 255 "_codecs_iso2022.c"
        var $347=$346+1; //@line 255 "_codecs_iso2022.c"
        HEAP[$347]=36; //@line 255 "_codecs_iso2022.c"
        var $348=$outbuf_addr; //@line 255 "_codecs_iso2022.c"
        var $349=HEAP[$348]; //@line 255 "_codecs_iso2022.c"
        var $350=$349+2; //@line 255 "_codecs_iso2022.c"
        HEAP[$350]=41; //@line 255 "_codecs_iso2022.c"
        var $351=$outbuf_addr; //@line 255 "_codecs_iso2022.c"
        var $352=HEAP[$351]; //@line 255 "_codecs_iso2022.c"
        var $353=$dsg; //@line 255 "_codecs_iso2022.c"
        var $354=$353; //@line 255 "_codecs_iso2022.c"
        var $355=HEAP[$354]; //@line 255 "_codecs_iso2022.c"
        var $356=($355) & 127; //@line 255 "_codecs_iso2022.c"
        var $357=$352+3; //@line 255 "_codecs_iso2022.c"
        HEAP[$357]=$356; //@line 255 "_codecs_iso2022.c"
        var $358=$dsg; //@line 257 "_codecs_iso2022.c"
        var $359=$358; //@line 257 "_codecs_iso2022.c"
        var $360=HEAP[$359]; //@line 257 "_codecs_iso2022.c"
        var $361=$state_addr; //@line 257 "_codecs_iso2022.c"
        var $362=$361; //@line 257 "_codecs_iso2022.c"
        var $363=$362; //@line 257 "_codecs_iso2022.c"
        var $364=$363+1; //@line 257 "_codecs_iso2022.c"
        HEAP[$364]=$360; //@line 257 "_codecs_iso2022.c"
        var $365=$outbuf_addr; //@line 258 "_codecs_iso2022.c"
        var $366=HEAP[$365]; //@line 258 "_codecs_iso2022.c"
        var $367=$366+4; //@line 258 "_codecs_iso2022.c"
        var $368=$outbuf_addr; //@line 258 "_codecs_iso2022.c"
        HEAP[$368]=$367; //@line 258 "_codecs_iso2022.c"
        var $369=$outleft_addr; //@line 258 "_codecs_iso2022.c"
        var $370=($369) - 4; //@line 258 "_codecs_iso2022.c"
        $outleft_addr=$370; //@line 258 "_codecs_iso2022.c"
        __label__ = 63; break; //@line 258 "_codecs_iso2022.c"
      case 63: // $bb69
        var $371=$state_addr; //@line 261 "_codecs_iso2022.c"
        var $372=$371; //@line 261 "_codecs_iso2022.c"
        var $373=$372; //@line 261 "_codecs_iso2022.c"
        var $374=$373+4; //@line 261 "_codecs_iso2022.c"
        var $375=HEAP[$374]; //@line 261 "_codecs_iso2022.c"
        var $376=($375); //@line 261 "_codecs_iso2022.c"
        var $377=($376) & 1; //@line 261 "_codecs_iso2022.c"
        var $378=($377)==0; //@line 261 "_codecs_iso2022.c"
        if ($378) { __label__ = 64; break; } else { __label__ = 68; break; } //@line 261 "_codecs_iso2022.c"
      case 64: // $bb70
        var $379=$outleft_addr; //@line 262 "_codecs_iso2022.c"
        var $380=($379) <= 0; //@line 262 "_codecs_iso2022.c"
        if ($380) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 262 "_codecs_iso2022.c"
      case 65: // $bb71
        $0=-1; //@line 262 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 262 "_codecs_iso2022.c"
      case 66: // $bb72
        var $381=$outbuf_addr; //@line 262 "_codecs_iso2022.c"
        var $382=HEAP[$381]; //@line 262 "_codecs_iso2022.c"
        var $383=$382; //@line 262 "_codecs_iso2022.c"
        HEAP[$383]=14; //@line 262 "_codecs_iso2022.c"
        var $384=$state_addr; //@line 263 "_codecs_iso2022.c"
        var $385=$384; //@line 263 "_codecs_iso2022.c"
        var $386=$385; //@line 263 "_codecs_iso2022.c"
        var $387=$386+4; //@line 263 "_codecs_iso2022.c"
        var $388=HEAP[$387]; //@line 263 "_codecs_iso2022.c"
        var $389=($388) | 1; //@line 263 "_codecs_iso2022.c"
        var $390=$state_addr; //@line 263 "_codecs_iso2022.c"
        var $391=$390; //@line 263 "_codecs_iso2022.c"
        var $392=$391; //@line 263 "_codecs_iso2022.c"
        var $393=$392+4; //@line 263 "_codecs_iso2022.c"
        HEAP[$393]=$389; //@line 263 "_codecs_iso2022.c"
        var $394=$outbuf_addr; //@line 264 "_codecs_iso2022.c"
        var $395=HEAP[$394]; //@line 264 "_codecs_iso2022.c"
        var $396=$395+1; //@line 264 "_codecs_iso2022.c"
        var $397=$outbuf_addr; //@line 264 "_codecs_iso2022.c"
        HEAP[$397]=$396; //@line 264 "_codecs_iso2022.c"
        var $398=$outleft_addr; //@line 264 "_codecs_iso2022.c"
        var $399=($398) - 1; //@line 264 "_codecs_iso2022.c"
        $outleft_addr=$399; //@line 264 "_codecs_iso2022.c"
        __lastLabel__ = 66; __label__ = 69; break; //@line 264 "_codecs_iso2022.c"
      case 67: // $bb74
        $0=-3; //@line 269 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 269 "_codecs_iso2022.c"
      case 68: // $bb75thread_pre_split
        var $_pr2=$outleft_addr;
        __lastLabel__ = 68; __label__ = 69; break;
      case 69: // $bb75
        var $400=__lastLabel__ == 68 ? $_pr2 : (__lastLabel__ == 66 ? $399 : (__lastLabel__ == 47 ? $237 : (__lastLabel__ == 51 ? $269 : ($299))));
        var $401=$dsg; //@line 272 "_codecs_iso2022.c"
        var $402=$401+2; //@line 272 "_codecs_iso2022.c"
        var $403=HEAP[$402]; //@line 272 "_codecs_iso2022.c"
        var $404=($403)==1; //@line 272 "_codecs_iso2022.c"
        if ($404) { __label__ = 70; break; } else { __label__ = 73; break; } //@line 272 "_codecs_iso2022.c"
      case 70: // $bb76
        var $405=($400) <= 0; //@line 273 "_codecs_iso2022.c"
        if ($405) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 273 "_codecs_iso2022.c"
      case 71: // $bb77
        $0=-1; //@line 273 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 273 "_codecs_iso2022.c"
      case 72: // $bb78
        var $406=$outbuf_addr; //@line 273 "_codecs_iso2022.c"
        var $407=HEAP[$406]; //@line 273 "_codecs_iso2022.c"
        var $408=$encoded; //@line 273 "_codecs_iso2022.c"
        var $409=((($408)) & 255); //@line 273 "_codecs_iso2022.c"
        var $410=$407; //@line 273 "_codecs_iso2022.c"
        HEAP[$410]=$409; //@line 273 "_codecs_iso2022.c"
        var $411=$outbuf_addr; //@line 274 "_codecs_iso2022.c"
        var $412=HEAP[$411]; //@line 274 "_codecs_iso2022.c"
        var $413=$412+1; //@line 274 "_codecs_iso2022.c"
        var $414=$outbuf_addr; //@line 274 "_codecs_iso2022.c"
        HEAP[$414]=$413; //@line 274 "_codecs_iso2022.c"
        var $415=$outleft_addr; //@line 274 "_codecs_iso2022.c"
        var $416=($415) - 1; //@line 274 "_codecs_iso2022.c"
        $outleft_addr=$416; //@line 274 "_codecs_iso2022.c"
        __label__ = 76; break; //@line 274 "_codecs_iso2022.c"
      case 73: // $bb79
        var $417=($400) <= 1; //@line 277 "_codecs_iso2022.c"
        if ($417) { __label__ = 74; break; } else { __label__ = 75; break; } //@line 277 "_codecs_iso2022.c"
      case 74: // $bb80
        $0=-1; //@line 277 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 277 "_codecs_iso2022.c"
      case 75: // $bb81
        var $418=$outbuf_addr; //@line 277 "_codecs_iso2022.c"
        var $419=HEAP[$418]; //@line 277 "_codecs_iso2022.c"
        var $420=$encoded; //@line 277 "_codecs_iso2022.c"
        var $421=($420) >>> 8; //@line 277 "_codecs_iso2022.c"
        var $422=((($421)) & 255); //@line 277 "_codecs_iso2022.c"
        var $423=$419; //@line 277 "_codecs_iso2022.c"
        HEAP[$423]=$422; //@line 277 "_codecs_iso2022.c"
        var $424=$outbuf_addr; //@line 277 "_codecs_iso2022.c"
        var $425=HEAP[$424]; //@line 277 "_codecs_iso2022.c"
        var $426=$encoded; //@line 277 "_codecs_iso2022.c"
        var $427=((($426)) & 255); //@line 277 "_codecs_iso2022.c"
        var $428=$425+1; //@line 277 "_codecs_iso2022.c"
        HEAP[$428]=$427; //@line 277 "_codecs_iso2022.c"
        var $429=$outbuf_addr; //@line 278 "_codecs_iso2022.c"
        var $430=HEAP[$429]; //@line 278 "_codecs_iso2022.c"
        var $431=$430+2; //@line 278 "_codecs_iso2022.c"
        var $432=$outbuf_addr; //@line 278 "_codecs_iso2022.c"
        HEAP[$432]=$431; //@line 278 "_codecs_iso2022.c"
        var $433=$outleft_addr; //@line 278 "_codecs_iso2022.c"
        var $434=($433) - 2; //@line 278 "_codecs_iso2022.c"
        $outleft_addr=$434; //@line 278 "_codecs_iso2022.c"
        __label__ = 76; break; //@line 278 "_codecs_iso2022.c"
      case 76: // $bb82
        var $435=$inbuf_addr; //@line 280 "_codecs_iso2022.c"
        var $436=HEAP[$435]; //@line 280 "_codecs_iso2022.c"
        var $437=$insize; //@line 280 "_codecs_iso2022.c"
        var $438=$436+2*$437; //@line 280 "_codecs_iso2022.c"
        var $439=$inbuf_addr; //@line 280 "_codecs_iso2022.c"
        HEAP[$439]=$438; //@line 280 "_codecs_iso2022.c"
        var $440=$inleft_addr; //@line 280 "_codecs_iso2022.c"
        var $441=$insize; //@line 280 "_codecs_iso2022.c"
        var $442=($440) - ($441); //@line 280 "_codecs_iso2022.c"
        $inleft_addr=$442; //@line 280 "_codecs_iso2022.c"
        __lastLabel__ = 76; __label__ = 77; break; //@line 280 "_codecs_iso2022.c"
      case 77: // $bb83
        var $443=__lastLabel__ == -1 ? $inleft : (__lastLabel__ == 76 ? $442 : ($_pr3));
        var $444=($443) > 0; //@line 158 "_codecs_iso2022.c"
        if ($444) { __label__ = 1; break; } else { __label__ = 78; break; } //@line 158 "_codecs_iso2022.c"
      case 78: // $bb84
        $0=0; //@line 283 "_codecs_iso2022.c"
        __label__ = 79; break; //@line 283 "_codecs_iso2022.c"
      case 79: // $bb85
        var $445=$0; //@line 166 "_codecs_iso2022.c"
        $retval=$445; //@line 166 "_codecs_iso2022.c"
        var $retval86=$retval; //@line 166 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval86; //@line 166 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_decode_init($state, $config) {
    ;
    var __label__;
  
    var $state_addr;
    var $retval;
    var $0;
    $state_addr=$state;
    var $1=$state_addr; //@line 288 "_codecs_iso2022.c"
    var $2=$1; //@line 288 "_codecs_iso2022.c"
    var $3=$2; //@line 288 "_codecs_iso2022.c"
    var $4=$3+4; //@line 288 "_codecs_iso2022.c"
    HEAP[$4]=0; //@line 288 "_codecs_iso2022.c"
    var $5=$state_addr; //@line 289 "_codecs_iso2022.c"
    var $6=$5; //@line 289 "_codecs_iso2022.c"
    var $7=$6; //@line 289 "_codecs_iso2022.c"
    var $8=$7; //@line 289 "_codecs_iso2022.c"
    HEAP[$8]=66; //@line 289 "_codecs_iso2022.c"
    var $9=$state_addr; //@line 290 "_codecs_iso2022.c"
    var $10=$9; //@line 290 "_codecs_iso2022.c"
    var $11=$10; //@line 290 "_codecs_iso2022.c"
    var $12=$11+1; //@line 290 "_codecs_iso2022.c"
    HEAP[$12]=66; //@line 290 "_codecs_iso2022.c"
    var $13=$state_addr; //@line 291 "_codecs_iso2022.c"
    var $14=$13; //@line 291 "_codecs_iso2022.c"
    var $15=$14; //@line 291 "_codecs_iso2022.c"
    var $16=$15+2; //@line 291 "_codecs_iso2022.c"
    HEAP[$16]=66; //@line 291 "_codecs_iso2022.c"
    $0=0; //@line 292 "_codecs_iso2022.c"
    var $17=$0; //@line 292 "_codecs_iso2022.c"
    $retval=$17; //@line 292 "_codecs_iso2022.c"
    var $retval1=$retval; //@line 292 "_codecs_iso2022.c"
    ;
    return $retval1; //@line 292 "_codecs_iso2022.c"
  }
  

  function _iso2022_decode_reset($state, $config) {
    ;
    var __label__;
  
    var $state_addr;
    var $config_addr;
    var $retval;
    var $0;
    $state_addr=$state;
    $config_addr=$config;
    var $1=$state_addr; //@line 297 "_codecs_iso2022.c"
    var $2=$1; //@line 297 "_codecs_iso2022.c"
    var $3=$2; //@line 297 "_codecs_iso2022.c"
    var $4=$3; //@line 297 "_codecs_iso2022.c"
    HEAP[$4]=66; //@line 297 "_codecs_iso2022.c"
    var $5=$state_addr; //@line 298 "_codecs_iso2022.c"
    var $6=$5; //@line 298 "_codecs_iso2022.c"
    var $7=$6; //@line 298 "_codecs_iso2022.c"
    var $8=$7+4; //@line 298 "_codecs_iso2022.c"
    var $9=HEAP[$8]; //@line 298 "_codecs_iso2022.c"
    var $10=($9) & -2; //@line 298 "_codecs_iso2022.c"
    var $11=$state_addr; //@line 298 "_codecs_iso2022.c"
    var $12=$11; //@line 298 "_codecs_iso2022.c"
    var $13=$12; //@line 298 "_codecs_iso2022.c"
    var $14=$13+4; //@line 298 "_codecs_iso2022.c"
    HEAP[$14]=$10; //@line 298 "_codecs_iso2022.c"
    $0=0; //@line 299 "_codecs_iso2022.c"
    var $15=$0; //@line 299 "_codecs_iso2022.c"
    $retval=$15; //@line 299 "_codecs_iso2022.c"
    var $retval1=$retval; //@line 299 "_codecs_iso2022.c"
    ;
    return $retval1; //@line 299 "_codecs_iso2022.c"
  }
  

  function _iso2022processesc($config, $state, $inbuf, $inleft) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $config_addr;
        var $state_addr;
        var $inbuf_addr;
        var $inleft_addr;
        var $retval;
        var $0;
        var $charset;
        var $designation;
        var $i;
        var $esclen;
        var $dsg;
        $config_addr=$config;
        $state_addr=$state;
        $inbuf_addr=$inbuf;
        $inleft_addr=$inleft;
        $i=1; //@line 309 "_codecs_iso2022.c"
        __lastLabel__ = -1; __label__ = 13; break; //@line 309 "_codecs_iso2022.c"
      case 1: // $bb
        var $1=$inleft_addr; //@line 310 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 310 "_codecs_iso2022.c"
        var $3=$i; //@line 310 "_codecs_iso2022.c"
        var $4=($2) <= ($3); //@line 310 "_codecs_iso2022.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 310 "_codecs_iso2022.c"
      case 2: // $bb1
        $0=-2; //@line 311 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 311 "_codecs_iso2022.c"
      case 3: // $bb2
        var $5=$inbuf_addr; //@line 312 "_codecs_iso2022.c"
        var $6=HEAP[$5]; //@line 312 "_codecs_iso2022.c"
        var $7=$i; //@line 312 "_codecs_iso2022.c"
        var $8=$6+$7; //@line 312 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 312 "_codecs_iso2022.c"
        var $10=($9) <= 64; //@line 312 "_codecs_iso2022.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 312 "_codecs_iso2022.c"
      case 4: // $bb3
        var $11=$inbuf_addr; //@line 312 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 312 "_codecs_iso2022.c"
        var $13=$i; //@line 312 "_codecs_iso2022.c"
        var $14=$12+$13; //@line 312 "_codecs_iso2022.c"
        var $15=HEAP[$14]; //@line 312 "_codecs_iso2022.c"
        var $16=($15) <= 90; //@line 312 "_codecs_iso2022.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 312 "_codecs_iso2022.c"
      case 5: // $bb4
        var $17=$inbuf_addr; //@line 312 "_codecs_iso2022.c"
        var $18=HEAP[$17]; //@line 312 "_codecs_iso2022.c"
        var $19=$i; //@line 312 "_codecs_iso2022.c"
        var $20=$18+$19; //@line 312 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 312 "_codecs_iso2022.c"
        var $22=($21)==64; //@line 312 "_codecs_iso2022.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 312 "_codecs_iso2022.c"
      case 6: // $bb5
        var $23=$i; //@line 313 "_codecs_iso2022.c"
        var $24=($23) + 1; //@line 313 "_codecs_iso2022.c"
        $esclen=$24; //@line 313 "_codecs_iso2022.c"
        __lastLabel__ = 6; __label__ = 15; break; //@line 313 "_codecs_iso2022.c"
      case 7: // $bb6
        var $25=$config_addr; //@line 316 "_codecs_iso2022.c"
        var $26=$25; //@line 316 "_codecs_iso2022.c"
        var $27=$26; //@line 316 "_codecs_iso2022.c"
        var $28=HEAP[$27]; //@line 316 "_codecs_iso2022.c"
        var $29=($28) & 4; //@line 316 "_codecs_iso2022.c"
        var $30=($29)!=0; //@line 316 "_codecs_iso2022.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 316 "_codecs_iso2022.c"
      case 8: // $bb7
        var $31=$i; //@line 316 "_codecs_iso2022.c"
        var $32=($31) + 1; //@line 316 "_codecs_iso2022.c"
        var $33=$inleft_addr; //@line 316 "_codecs_iso2022.c"
        var $34=HEAP[$33]; //@line 316 "_codecs_iso2022.c"
        var $35=($32) < ($34); //@line 316 "_codecs_iso2022.c"
        if ($35) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 316 "_codecs_iso2022.c"
      case 9: // $bb8
        var $36=$inbuf_addr; //@line 316 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 316 "_codecs_iso2022.c"
        var $38=$i; //@line 316 "_codecs_iso2022.c"
        var $39=$37+$38; //@line 316 "_codecs_iso2022.c"
        var $40=HEAP[$39]; //@line 316 "_codecs_iso2022.c"
        var $41=($40)==38; //@line 316 "_codecs_iso2022.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 316 "_codecs_iso2022.c"
      case 10: // $bb9
        var $42=$inbuf_addr; //@line 316 "_codecs_iso2022.c"
        var $43=HEAP[$42]; //@line 316 "_codecs_iso2022.c"
        var $44=$i; //@line 316 "_codecs_iso2022.c"
        var $45=($44) + 1; //@line 316 "_codecs_iso2022.c"
        var $46=$43+$45; //@line 316 "_codecs_iso2022.c"
        var $47=HEAP[$46]; //@line 316 "_codecs_iso2022.c"
        var $48=($47)==64; //@line 316 "_codecs_iso2022.c"
        if ($48) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 316 "_codecs_iso2022.c"
      case 11: // $bb10
        var $49=$i; //@line 318 "_codecs_iso2022.c"
        var $50=($49) + 2; //@line 318 "_codecs_iso2022.c"
        $i=$50; //@line 318 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 318 "_codecs_iso2022.c"
      case 12: // $bb11
        var $51=$i; //@line 309 "_codecs_iso2022.c"
        var $52=($51) + 1; //@line 309 "_codecs_iso2022.c"
        $i=$52; //@line 309 "_codecs_iso2022.c"
        __lastLabel__ = 12; __label__ = 13; break; //@line 309 "_codecs_iso2022.c"
      case 13: // $bb12
        var $53=__lastLabel__ == 12 ? $52 : (1);
        var $54=($53) <= 15; //@line 309 "_codecs_iso2022.c"
        if ($54) { __label__ = 1; break; } else { __label__ = 14; break; } //@line 309 "_codecs_iso2022.c"
      case 14: // $bb13thread_pre_split
        var $_pr=$i;
        __lastLabel__ = 14; __label__ = 15; break;
      case 15: // $bb13
        var $55=__lastLabel__ == 14 ? $_pr : ($23);
        var $56=($55) > 15; //@line 321 "_codecs_iso2022.c"
        if ($56) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 321 "_codecs_iso2022.c"
      case 16: // $bb14
        $0=1; //@line 322 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 322 "_codecs_iso2022.c"
      case 17: // $bb15
        var $57=$esclen; //@line 324 "_codecs_iso2022.c"
        if ($57 == 3) {
          __label__ = 18; break;
        }
        else if ($57 == 4) {
          __label__ = 28; break;
        }
        else if ($57 == 6) {
          __label__ = 35; break;
        }
        else {
        __label__ = 41; break;
        }
        
      case 18: // $bb16
        var $58=$inbuf_addr; //@line 326 "_codecs_iso2022.c"
        var $59=HEAP[$58]; //@line 326 "_codecs_iso2022.c"
        var $60=$59+1; //@line 326 "_codecs_iso2022.c"
        var $61=HEAP[$60]; //@line 326 "_codecs_iso2022.c"
        var $62=($61)==36; //@line 326 "_codecs_iso2022.c"
        var $63=$inbuf_addr; //@line 327 "_codecs_iso2022.c"
        var $64=HEAP[$63]; //@line 327 "_codecs_iso2022.c"
        var $65=$64+2; //@line 327 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 327 "_codecs_iso2022.c"
        if ($62) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 326 "_codecs_iso2022.c"
      case 19: // $bb17
        var $67=($66) | -128; //@line 327 "_codecs_iso2022.c"
        $charset=$67; //@line 327 "_codecs_iso2022.c"
        $designation=0; //@line 328 "_codecs_iso2022.c"
        __label__ = 43; break; //@line 328 "_codecs_iso2022.c"
      case 20: // $bb18
        $charset=$66; //@line 331 "_codecs_iso2022.c"
        var $68=$inbuf_addr; //@line 332 "_codecs_iso2022.c"
        var $69=HEAP[$68]; //@line 332 "_codecs_iso2022.c"
        var $70=$69+1; //@line 332 "_codecs_iso2022.c"
        var $71=HEAP[$70]; //@line 332 "_codecs_iso2022.c"
        var $72=($71)==40; //@line 332 "_codecs_iso2022.c"
        if ($72) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 332 "_codecs_iso2022.c"
      case 21: // $bb19
        $designation=0; //@line 332 "_codecs_iso2022.c"
        __label__ = 42; break; //@line 332 "_codecs_iso2022.c"
      case 22: // $bb20
        var $73=$inbuf_addr; //@line 333 "_codecs_iso2022.c"
        var $74=HEAP[$73]; //@line 333 "_codecs_iso2022.c"
        var $75=$74+1; //@line 333 "_codecs_iso2022.c"
        var $76=HEAP[$75]; //@line 333 "_codecs_iso2022.c"
        var $77=($76)==41; //@line 333 "_codecs_iso2022.c"
        if ($77) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 333 "_codecs_iso2022.c"
      case 23: // $bb21
        $designation=1; //@line 333 "_codecs_iso2022.c"
        __label__ = 42; break; //@line 333 "_codecs_iso2022.c"
      case 24: // $bb22
        var $78=$config_addr; //@line 334 "_codecs_iso2022.c"
        var $79=$78; //@line 334 "_codecs_iso2022.c"
        var $80=$79; //@line 334 "_codecs_iso2022.c"
        var $81=HEAP[$80]; //@line 334 "_codecs_iso2022.c"
        var $82=($81) & 2; //@line 334 "_codecs_iso2022.c"
        var $83=($82)==0; //@line 334 "_codecs_iso2022.c"
        if ($83) { __label__ = 27; break; } else { __label__ = 25; break; } //@line 334 "_codecs_iso2022.c"
      case 25: // $bb23
        var $84=$inbuf_addr; //@line 334 "_codecs_iso2022.c"
        var $85=HEAP[$84]; //@line 334 "_codecs_iso2022.c"
        var $86=$85+1; //@line 334 "_codecs_iso2022.c"
        var $87=HEAP[$86]; //@line 334 "_codecs_iso2022.c"
        var $88=($87)!=46; //@line 334 "_codecs_iso2022.c"
        if ($88) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 334 "_codecs_iso2022.c"
      case 26: // $bb24
        $designation=2; //@line 335 "_codecs_iso2022.c"
        __label__ = 42; break; //@line 335 "_codecs_iso2022.c"
      case 27: // $bb25
        $0=3; //@line 336 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 336 "_codecs_iso2022.c"
      case 28: // $bb27
        var $89=$inbuf_addr; //@line 340 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 340 "_codecs_iso2022.c"
        var $91=$90+1; //@line 340 "_codecs_iso2022.c"
        var $92=HEAP[$91]; //@line 340 "_codecs_iso2022.c"
        var $93=($92)!=36; //@line 340 "_codecs_iso2022.c"
        if ($93) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 340 "_codecs_iso2022.c"
      case 29: // $bb28
        $0=4; //@line 341 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 341 "_codecs_iso2022.c"
      case 30: // $bb29
        var $94=$inbuf_addr; //@line 343 "_codecs_iso2022.c"
        var $95=HEAP[$94]; //@line 343 "_codecs_iso2022.c"
        var $96=$95+3; //@line 343 "_codecs_iso2022.c"
        var $97=HEAP[$96]; //@line 343 "_codecs_iso2022.c"
        var $98=($97) | -128; //@line 343 "_codecs_iso2022.c"
        $charset=$98; //@line 343 "_codecs_iso2022.c"
        var $99=$inbuf_addr; //@line 344 "_codecs_iso2022.c"
        var $100=HEAP[$99]; //@line 344 "_codecs_iso2022.c"
        var $101=$100+2; //@line 344 "_codecs_iso2022.c"
        var $102=HEAP[$101]; //@line 344 "_codecs_iso2022.c"
        var $103=($102)==40; //@line 344 "_codecs_iso2022.c"
        if ($103) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 344 "_codecs_iso2022.c"
      case 31: // $bb30
        $designation=0; //@line 344 "_codecs_iso2022.c"
        __label__ = 42; break; //@line 344 "_codecs_iso2022.c"
      case 32: // $bb31
        var $104=$inbuf_addr; //@line 345 "_codecs_iso2022.c"
        var $105=HEAP[$104]; //@line 345 "_codecs_iso2022.c"
        var $106=$105+2; //@line 345 "_codecs_iso2022.c"
        var $107=HEAP[$106]; //@line 345 "_codecs_iso2022.c"
        var $108=($107)==41; //@line 345 "_codecs_iso2022.c"
        if ($108) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 345 "_codecs_iso2022.c"
      case 33: // $bb32
        $designation=1; //@line 345 "_codecs_iso2022.c"
        __label__ = 42; break; //@line 345 "_codecs_iso2022.c"
      case 34: // $bb33
        $0=4; //@line 346 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 346 "_codecs_iso2022.c"
      case 35: // $bb35
        var $109=$config_addr; //@line 349 "_codecs_iso2022.c"
        var $110=$109; //@line 349 "_codecs_iso2022.c"
        var $111=$110; //@line 349 "_codecs_iso2022.c"
        var $112=HEAP[$111]; //@line 349 "_codecs_iso2022.c"
        var $113=($112) & 4; //@line 349 "_codecs_iso2022.c"
        var $114=($113)==0; //@line 349 "_codecs_iso2022.c"
        if ($114) { __label__ = 40; break; } else { __label__ = 36; break; } //@line 349 "_codecs_iso2022.c"
      case 36: // $bb36
        var $115=$inbuf_addr; //@line 349 "_codecs_iso2022.c"
        var $116=HEAP[$115]; //@line 349 "_codecs_iso2022.c"
        var $117=$116+3; //@line 349 "_codecs_iso2022.c"
        var $118=HEAP[$117]; //@line 349 "_codecs_iso2022.c"
        var $119=($118)!=27; //@line 349 "_codecs_iso2022.c"
        if ($119) { __label__ = 40; break; } else { __label__ = 37; break; } //@line 349 "_codecs_iso2022.c"
      case 37: // $bb37
        var $120=$inbuf_addr; //@line 349 "_codecs_iso2022.c"
        var $121=HEAP[$120]; //@line 349 "_codecs_iso2022.c"
        var $122=$121+4; //@line 349 "_codecs_iso2022.c"
        var $123=HEAP[$122]; //@line 349 "_codecs_iso2022.c"
        var $124=($123)!=36; //@line 349 "_codecs_iso2022.c"
        if ($124) { __label__ = 40; break; } else { __label__ = 38; break; } //@line 349 "_codecs_iso2022.c"
      case 38: // $bb38
        var $125=$inbuf_addr; //@line 349 "_codecs_iso2022.c"
        var $126=HEAP[$125]; //@line 349 "_codecs_iso2022.c"
        var $127=$126+5; //@line 349 "_codecs_iso2022.c"
        var $128=HEAP[$127]; //@line 349 "_codecs_iso2022.c"
        var $129=($128)!=66; //@line 349 "_codecs_iso2022.c"
        if ($129) { __label__ = 40; break; } else { __label__ = 39; break; } //@line 349 "_codecs_iso2022.c"
      case 39: // $bb39
        $charset=-62; //@line 352 "_codecs_iso2022.c"
        $designation=0; //@line 353 "_codecs_iso2022.c"
        __label__ = 43; break; //@line 353 "_codecs_iso2022.c"
      case 40: // $bb40
        $0=6; //@line 356 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 356 "_codecs_iso2022.c"
      case 41: // $bb41
        var $130=$esclen; //@line 359 "_codecs_iso2022.c"
        $0=$130; //@line 359 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 359 "_codecs_iso2022.c"
      case 42: // $bb42
        var $_pr1=$charset;
        var $131=($_pr1)!=66; //@line 363 "_codecs_iso2022.c"
        if ($131) { __label__ = 43; break; } else { __label__ = 49; break; } //@line 363 "_codecs_iso2022.c"
      case 43: // $bb43
        var $132=$config_addr; //@line 366 "_codecs_iso2022.c"
        var $133=$132; //@line 366 "_codecs_iso2022.c"
        var $134=$133+4; //@line 366 "_codecs_iso2022.c"
        var $135=HEAP[$134]; //@line 366 "_codecs_iso2022.c"
        $dsg=$135; //@line 366 "_codecs_iso2022.c"
        __label__ = 46; break; //@line 366 "_codecs_iso2022.c"
      case 44: // $bb44
        var $136=$dsg; //@line 367 "_codecs_iso2022.c"
        var $137=$136; //@line 367 "_codecs_iso2022.c"
        var $138=HEAP[$137]; //@line 367 "_codecs_iso2022.c"
        var $139=$charset; //@line 367 "_codecs_iso2022.c"
        var $140=($138)==($139); //@line 367 "_codecs_iso2022.c"
        if ($140) { __label__ = 47; break; } else { __label__ = 45; break; } //@line 367 "_codecs_iso2022.c"
      case 45: // $bb45
        var $141=$dsg; //@line 366 "_codecs_iso2022.c"
        var $142=$141+16; //@line 366 "_codecs_iso2022.c"
        $dsg=$142; //@line 366 "_codecs_iso2022.c"
        __label__ = 46; break; //@line 366 "_codecs_iso2022.c"
      case 46: // $bb46
        var $143=$dsg; //@line 366 "_codecs_iso2022.c"
        var $144=$143; //@line 366 "_codecs_iso2022.c"
        var $145=HEAP[$144]; //@line 366 "_codecs_iso2022.c"
        var $146=($145)!=0; //@line 366 "_codecs_iso2022.c"
        if ($146) { __label__ = 44; break; } else { __label__ = 47; break; } //@line 366 "_codecs_iso2022.c"
      case 47: // $bb47
        var $147=$dsg; //@line 369 "_codecs_iso2022.c"
        var $148=$147; //@line 369 "_codecs_iso2022.c"
        var $149=HEAP[$148]; //@line 369 "_codecs_iso2022.c"
        var $150=($149)==0; //@line 369 "_codecs_iso2022.c"
        if ($150) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 369 "_codecs_iso2022.c"
      case 48: // $bb48
        var $151=$esclen; //@line 370 "_codecs_iso2022.c"
        $0=$151; //@line 370 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 370 "_codecs_iso2022.c"
      case 49: // $bb49
        var $152=$designation; //@line 373 "_codecs_iso2022.c"
        var $153=($152); //@line 373 "_codecs_iso2022.c"
        var $154=$state_addr; //@line 373 "_codecs_iso2022.c"
        var $155=$154; //@line 373 "_codecs_iso2022.c"
        var $156=$155; //@line 373 "_codecs_iso2022.c"
        var $157=$156+$153; //@line 373 "_codecs_iso2022.c"
        var $158=$charset; //@line 373 "_codecs_iso2022.c"
        HEAP[$157]=$158; //@line 373 "_codecs_iso2022.c"
        var $159=$inleft_addr; //@line 374 "_codecs_iso2022.c"
        var $160=HEAP[$159]; //@line 374 "_codecs_iso2022.c"
        var $161=$esclen; //@line 374 "_codecs_iso2022.c"
        var $162=($160) - ($161); //@line 374 "_codecs_iso2022.c"
        var $163=$inleft_addr; //@line 374 "_codecs_iso2022.c"
        HEAP[$163]=$162; //@line 374 "_codecs_iso2022.c"
        var $164=$inbuf_addr; //@line 375 "_codecs_iso2022.c"
        var $165=HEAP[$164]; //@line 375 "_codecs_iso2022.c"
        var $166=$esclen; //@line 375 "_codecs_iso2022.c"
        var $167=$165+$166; //@line 375 "_codecs_iso2022.c"
        var $168=$inbuf_addr; //@line 375 "_codecs_iso2022.c"
        HEAP[$168]=$167; //@line 375 "_codecs_iso2022.c"
        $0=0; //@line 376 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 376 "_codecs_iso2022.c"
      case 50: // $bb50
        var $169=$0; //@line 311 "_codecs_iso2022.c"
        $retval=$169; //@line 311 "_codecs_iso2022.c"
        var $retval51=$retval; //@line 311 "_codecs_iso2022.c"
        ;
        return $retval51; //@line 311 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022processg2($config, $state, $inbuf, $inleft, $outbuf, $outleft) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $config_addr;
        var $state_addr;
        var $inbuf_addr;
        var $inleft_addr;
        var $outbuf_addr;
        var $outleft_addr;
        var $retval;
        var $0;
        $config_addr=$config;
        $state_addr=$state;
        $inbuf_addr=$inbuf;
        $inleft_addr=$inleft;
        $outbuf_addr=$outbuf;
        $outleft_addr=$outleft;
        var $1=$state_addr; //@line 397 "_codecs_iso2022.c"
        var $2=$1; //@line 397 "_codecs_iso2022.c"
        var $3=$2; //@line 397 "_codecs_iso2022.c"
        var $4=$3+2; //@line 397 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 397 "_codecs_iso2022.c"
        var $6=($5)==65; //@line 397 "_codecs_iso2022.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 397 "_codecs_iso2022.c"
      case 1: // $bb
        var $7=$inbuf_addr; //@line 398 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 398 "_codecs_iso2022.c"
        var $9=$8+2; //@line 398 "_codecs_iso2022.c"
        var $10=HEAP[$9]; //@line 398 "_codecs_iso2022.c"
        var $11=($10) >= 0; //@line 398 "_codecs_iso2022.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 398 "_codecs_iso2022.c"
      case 2: // $bb1
        var $12=$outbuf_addr; //@line 399 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 399 "_codecs_iso2022.c"
        var $14=$inbuf_addr; //@line 399 "_codecs_iso2022.c"
        var $15=HEAP[$14]; //@line 399 "_codecs_iso2022.c"
        var $16=$15+2; //@line 399 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 399 "_codecs_iso2022.c"
        var $18=($17); //@line 399 "_codecs_iso2022.c"
        var $19=($18) + 128; //@line 399 "_codecs_iso2022.c"
        var $20=$13; //@line 399 "_codecs_iso2022.c"
        HEAP[$20]=$19; //@line 399 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 399 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=3; //@line 401 "_codecs_iso2022.c"
        __label__ = 28; break; //@line 401 "_codecs_iso2022.c"
      case 4: // $bb3
        var $21=$state_addr; //@line 403 "_codecs_iso2022.c"
        var $22=$21; //@line 403 "_codecs_iso2022.c"
        var $23=$22; //@line 403 "_codecs_iso2022.c"
        var $24=$23+2; //@line 403 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 403 "_codecs_iso2022.c"
        var $26=($25)==70; //@line 403 "_codecs_iso2022.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 22; break; } //@line 403 "_codecs_iso2022.c"
      case 5: // $bb4
        var $27=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $28=HEAP[$27]; //@line 404 "_codecs_iso2022.c"
        var $29=$28+2; //@line 404 "_codecs_iso2022.c"
        var $30=HEAP[$29]; //@line 404 "_codecs_iso2022.c"
        var $31=($30) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $32=($31) <= 159; //@line 404 "_codecs_iso2022.c"
        if ($32) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 404 "_codecs_iso2022.c"
      case 6: // $bb5
        var $33=$outbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $34=HEAP[$33]; //@line 404 "_codecs_iso2022.c"
        var $35=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $36=HEAP[$35]; //@line 404 "_codecs_iso2022.c"
        var $37=$36+2; //@line 404 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 404 "_codecs_iso2022.c"
        var $39=($38) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $40=($39); //@line 404 "_codecs_iso2022.c"
        HEAP[$34]=$40; //@line 404 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 404 "_codecs_iso2022.c"
      case 7: // $bb6
        var $41=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 404 "_codecs_iso2022.c"
        var $43=$42+2; //@line 404 "_codecs_iso2022.c"
        var $44=HEAP[$43]; //@line 404 "_codecs_iso2022.c"
        var $45=($44) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $46=($45) > 191; //@line 404 "_codecs_iso2022.c"
        if ($46) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 404 "_codecs_iso2022.c"
      case 8: // $bb7
        var $47=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 404 "_codecs_iso2022.c"
        var $49=$48+2; //@line 404 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 404 "_codecs_iso2022.c"
        var $51=($50) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $52=($51); //@line 404 "_codecs_iso2022.c"
        var $53=($52) - 160; //@line 404 "_codecs_iso2022.c"
        var $54=680475593 >> ($53); //@line 404 "_codecs_iso2022.c"
        var $55=($54) & 1; //@line 404 "_codecs_iso2022.c"
        var $56=((($55)) & 255); //@line 404 "_codecs_iso2022.c"
        var $toBool=($56)!=0; //@line 404 "_codecs_iso2022.c"
        var $toBoolnot=($toBool) ^ 1; //@line 404 "_codecs_iso2022.c"
        var $toBoolnot8=($toBoolnot); //@line 404 "_codecs_iso2022.c"
        var $toBool10=($toBoolnot8)!=0; //@line 404 "_codecs_iso2022.c"
        if ($toBool10) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 404 "_codecs_iso2022.c"
      case 9: // $bb11
        var $57=$outbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 404 "_codecs_iso2022.c"
        var $59=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 404 "_codecs_iso2022.c"
        var $61=$60+2; //@line 404 "_codecs_iso2022.c"
        var $62=HEAP[$61]; //@line 404 "_codecs_iso2022.c"
        var $63=($62) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $64=($63); //@line 404 "_codecs_iso2022.c"
        HEAP[$58]=$64; //@line 404 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 404 "_codecs_iso2022.c"
      case 10: // $bb12
        var $65=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 404 "_codecs_iso2022.c"
        var $67=$66+2; //@line 404 "_codecs_iso2022.c"
        var $68=HEAP[$67]; //@line 404 "_codecs_iso2022.c"
        var $69=($68) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $70=($69) <= 179; //@line 404 "_codecs_iso2022.c"
        if ($70) { __label__ = 15; break; } else { __label__ = 11; break; } //@line 404 "_codecs_iso2022.c"
      case 11: // $bb13
        var $71=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $72=HEAP[$71]; //@line 404 "_codecs_iso2022.c"
        var $73=$72+2; //@line 404 "_codecs_iso2022.c"
        var $74=HEAP[$73]; //@line 404 "_codecs_iso2022.c"
        var $75=($74)==127; //@line 404 "_codecs_iso2022.c"
        if ($75) { __label__ = 15; break; } else { __label__ = 12; break; } //@line 404 "_codecs_iso2022.c"
      case 12: // $bb14
        var $76=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $77=HEAP[$76]; //@line 404 "_codecs_iso2022.c"
        var $78=$77+2; //@line 404 "_codecs_iso2022.c"
        var $79=HEAP[$78]; //@line 404 "_codecs_iso2022.c"
        var $80=($79) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $81=($80) > 211; //@line 404 "_codecs_iso2022.c"
        if ($81) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 404 "_codecs_iso2022.c"
      case 13: // $bb15
        var $82=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $83=HEAP[$82]; //@line 404 "_codecs_iso2022.c"
        var $84=$83+2; //@line 404 "_codecs_iso2022.c"
        var $85=HEAP[$84]; //@line 404 "_codecs_iso2022.c"
        var $86=($85) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $87=($86); //@line 404 "_codecs_iso2022.c"
        var $88=($87) - 180; //@line 404 "_codecs_iso2022.c"
        var $89=1 << ($88); //@line 404 "_codecs_iso2022.c"
        var $90=($89) & -1073742473; //@line 404 "_codecs_iso2022.c"
        var $91=($90)!=0; //@line 404 "_codecs_iso2022.c"
        if ($91) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 404 "_codecs_iso2022.c"
      case 14: // $bb16
        var $92=$outbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $93=HEAP[$92]; //@line 404 "_codecs_iso2022.c"
        var $94=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $95=HEAP[$94]; //@line 404 "_codecs_iso2022.c"
        var $96=$95+2; //@line 404 "_codecs_iso2022.c"
        var $97=HEAP[$96]; //@line 404 "_codecs_iso2022.c"
        var $98=($97) ^ -128; //@line 404 "_codecs_iso2022.c"
        var $99=($98); //@line 404 "_codecs_iso2022.c"
        var $100=($99) + 720; //@line 404 "_codecs_iso2022.c"
        HEAP[$93]=$100; //@line 404 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 404 "_codecs_iso2022.c"
      case 15: // $bb17
        var $101=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $102=HEAP[$101]; //@line 404 "_codecs_iso2022.c"
        var $103=$102+2; //@line 404 "_codecs_iso2022.c"
        var $104=HEAP[$103]; //@line 404 "_codecs_iso2022.c"
        var $105=($104)==33; //@line 404 "_codecs_iso2022.c"
        if ($105) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 404 "_codecs_iso2022.c"
      case 16: // $bb18
        var $106=$outbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $107=HEAP[$106]; //@line 404 "_codecs_iso2022.c"
        HEAP[$107]=8216; //@line 404 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 404 "_codecs_iso2022.c"
      case 17: // $bb19
        var $108=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $109=HEAP[$108]; //@line 404 "_codecs_iso2022.c"
        var $110=$109+2; //@line 404 "_codecs_iso2022.c"
        var $111=HEAP[$110]; //@line 404 "_codecs_iso2022.c"
        var $112=($111)==34; //@line 404 "_codecs_iso2022.c"
        if ($112) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 404 "_codecs_iso2022.c"
      case 18: // $bb20
        var $113=$outbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $114=HEAP[$113]; //@line 404 "_codecs_iso2022.c"
        HEAP[$114]=8217; //@line 404 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 404 "_codecs_iso2022.c"
      case 19: // $bb21
        var $115=$inbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $116=HEAP[$115]; //@line 404 "_codecs_iso2022.c"
        var $117=$116+2; //@line 404 "_codecs_iso2022.c"
        var $118=HEAP[$117]; //@line 404 "_codecs_iso2022.c"
        var $119=($118)==47; //@line 404 "_codecs_iso2022.c"
        if ($119) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 404 "_codecs_iso2022.c"
      case 20: // $bb22
        var $120=$outbuf_addr; //@line 404 "_codecs_iso2022.c"
        var $121=HEAP[$120]; //@line 404 "_codecs_iso2022.c"
        HEAP[$121]=8213; //@line 404 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 404 "_codecs_iso2022.c"
      case 21: // $bb23
        $0=3; //@line 405 "_codecs_iso2022.c"
        __label__ = 28; break; //@line 405 "_codecs_iso2022.c"
      case 22: // $bb25
        var $122=$state_addr; //@line 407 "_codecs_iso2022.c"
        var $123=$122; //@line 407 "_codecs_iso2022.c"
        var $124=$123; //@line 407 "_codecs_iso2022.c"
        var $125=$124+2; //@line 407 "_codecs_iso2022.c"
        var $126=HEAP[$125]; //@line 407 "_codecs_iso2022.c"
        var $127=($126)==66; //@line 407 "_codecs_iso2022.c"
        if ($127) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 407 "_codecs_iso2022.c"
      case 23: // $bb26
        var $128=$inbuf_addr; //@line 408 "_codecs_iso2022.c"
        var $129=HEAP[$128]; //@line 408 "_codecs_iso2022.c"
        var $130=$129+2; //@line 408 "_codecs_iso2022.c"
        var $131=HEAP[$130]; //@line 408 "_codecs_iso2022.c"
        var $132=($131) < 0; //@line 408 "_codecs_iso2022.c"
        if ($132) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 408 "_codecs_iso2022.c"
      case 24: // $bb27
        $0=3; //@line 408 "_codecs_iso2022.c"
        __label__ = 28; break; //@line 408 "_codecs_iso2022.c"
      case 25: // $bb28
        var $133=$outbuf_addr; //@line 409 "_codecs_iso2022.c"
        var $134=HEAP[$133]; //@line 409 "_codecs_iso2022.c"
        var $135=$inbuf_addr; //@line 409 "_codecs_iso2022.c"
        var $136=HEAP[$135]; //@line 409 "_codecs_iso2022.c"
        var $137=$136+2; //@line 409 "_codecs_iso2022.c"
        var $138=HEAP[$137]; //@line 409 "_codecs_iso2022.c"
        var $139=($138); //@line 409 "_codecs_iso2022.c"
        HEAP[$134]=$139; //@line 409 "_codecs_iso2022.c"
        __label__ = 27; break; //@line 409 "_codecs_iso2022.c"
      case 26: // $bb29
        $0=-3; //@line 412 "_codecs_iso2022.c"
        __label__ = 28; break; //@line 412 "_codecs_iso2022.c"
      case 27: // $bb30
        var $140=$inbuf_addr; //@line 414 "_codecs_iso2022.c"
        var $141=HEAP[$140]; //@line 414 "_codecs_iso2022.c"
        var $142=$141+3; //@line 414 "_codecs_iso2022.c"
        var $143=$inbuf_addr; //@line 414 "_codecs_iso2022.c"
        HEAP[$143]=$142; //@line 414 "_codecs_iso2022.c"
        var $144=$inleft_addr; //@line 415 "_codecs_iso2022.c"
        var $145=HEAP[$144]; //@line 415 "_codecs_iso2022.c"
        var $146=($145) - 3; //@line 415 "_codecs_iso2022.c"
        var $147=$inleft_addr; //@line 415 "_codecs_iso2022.c"
        HEAP[$147]=$146; //@line 415 "_codecs_iso2022.c"
        var $148=$outbuf_addr; //@line 416 "_codecs_iso2022.c"
        var $149=HEAP[$148]; //@line 416 "_codecs_iso2022.c"
        var $150=$149+2; //@line 416 "_codecs_iso2022.c"
        var $151=$outbuf_addr; //@line 416 "_codecs_iso2022.c"
        HEAP[$151]=$150; //@line 416 "_codecs_iso2022.c"
        var $152=$outleft_addr; //@line 417 "_codecs_iso2022.c"
        var $153=HEAP[$152]; //@line 417 "_codecs_iso2022.c"
        var $154=($153) - 1; //@line 417 "_codecs_iso2022.c"
        var $155=$outleft_addr; //@line 417 "_codecs_iso2022.c"
        HEAP[$155]=$154; //@line 417 "_codecs_iso2022.c"
        $0=0; //@line 418 "_codecs_iso2022.c"
        __label__ = 28; break; //@line 418 "_codecs_iso2022.c"
      case 28: // $bb31
        var $156=$0; //@line 401 "_codecs_iso2022.c"
        $retval=$156; //@line 401 "_codecs_iso2022.c"
        var $retval32=$retval; //@line 401 "_codecs_iso2022.c"
        ;
        return $retval32; //@line 401 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _iso2022_decode($state, $config, $inbuf, $inleft, $outbuf, $outleft) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $state_addr;
        var $config_addr;
        var $inbuf_addr;
        var $inleft_addr=__stackBase__;
        var $outbuf_addr;
        var $outleft_addr=__stackBase__+4;
        var $retval;
        var $0;
        var $dsgcache;
        var $c;
        var $err;
        var $dsg;
        var $charset;
        var $decoded;
        $state_addr=$state;
        $config_addr=$config;
        $inbuf_addr=$inbuf;
        HEAP[$inleft_addr]=$inleft;
        $outbuf_addr=$outbuf;
        HEAP[$outleft_addr]=$outleft;
        $dsgcache=0; //@line 423 "_codecs_iso2022.c"
        __lastLabel__ = -1; __label__ = 67; break; //@line 423 "_codecs_iso2022.c"
      case 1: // $bb
        var $1=$inbuf_addr; //@line 426 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 426 "_codecs_iso2022.c"
        var $3=$2; //@line 426 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 426 "_codecs_iso2022.c"
        $c=$4; //@line 426 "_codecs_iso2022.c"
        var $5=$state_addr; //@line 429 "_codecs_iso2022.c"
        var $6=$5; //@line 429 "_codecs_iso2022.c"
        var $7=$6; //@line 429 "_codecs_iso2022.c"
        var $8=$7+4; //@line 429 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 429 "_codecs_iso2022.c"
        var $10=($9); //@line 429 "_codecs_iso2022.c"
        var $11=($10) & 2; //@line 429 "_codecs_iso2022.c"
        var $12=($11)!=0; //@line 429 "_codecs_iso2022.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 429 "_codecs_iso2022.c"
      case 2: // $bb1
        var $13=HEAP[$outleft_addr]; //@line 432 "_codecs_iso2022.c"
        var $14=($13) <= 0; //@line 432 "_codecs_iso2022.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 432 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=-1; //@line 432 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 432 "_codecs_iso2022.c"
      case 4: // $bb3
        var $15=$outbuf_addr; //@line 432 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 432 "_codecs_iso2022.c"
        var $17=$c; //@line 432 "_codecs_iso2022.c"
        var $18=($17); //@line 432 "_codecs_iso2022.c"
        var $19=$16; //@line 432 "_codecs_iso2022.c"
        HEAP[$19]=$18; //@line 432 "_codecs_iso2022.c"
        var $20=$inbuf_addr; //@line 433 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 433 "_codecs_iso2022.c"
        var $22=$21+1; //@line 433 "_codecs_iso2022.c"
        var $23=$inbuf_addr; //@line 433 "_codecs_iso2022.c"
        HEAP[$23]=$22; //@line 433 "_codecs_iso2022.c"
        var $24=HEAP[$inleft_addr]; //@line 433 "_codecs_iso2022.c"
        var $25=($24) - 1; //@line 433 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$25; //@line 433 "_codecs_iso2022.c"
        var $26=$outbuf_addr; //@line 433 "_codecs_iso2022.c"
        var $27=HEAP[$26]; //@line 433 "_codecs_iso2022.c"
        var $28=$27+2; //@line 433 "_codecs_iso2022.c"
        var $29=$outbuf_addr; //@line 433 "_codecs_iso2022.c"
        HEAP[$29]=$28; //@line 433 "_codecs_iso2022.c"
        var $30=HEAP[$outleft_addr]; //@line 433 "_codecs_iso2022.c"
        var $31=($30) - 1; //@line 433 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$31; //@line 433 "_codecs_iso2022.c"
        var $32=$c; //@line 434 "_codecs_iso2022.c"
        var $33=($32) > 64; //@line 434 "_codecs_iso2022.c"
        var $34=$c; //@line 434 "_codecs_iso2022.c"
        var $35=($34) <= 90; //@line 434 "_codecs_iso2022.c"
        var $or_cond=($33) & ($35);
        var $36=$c; //@line 434 "_codecs_iso2022.c"
        var $37=($36)==64; //@line 434 "_codecs_iso2022.c"
        var $or_cond3=($or_cond) | ($37);
        if ($or_cond3) { __label__ = 5; break; } else { __label__ = 66; break; } //@line 434 "_codecs_iso2022.c"
      case 5: // $bb6
        var $38=$state_addr; //@line 435 "_codecs_iso2022.c"
        var $39=$38; //@line 435 "_codecs_iso2022.c"
        var $40=$39; //@line 435 "_codecs_iso2022.c"
        var $41=$40+4; //@line 435 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 435 "_codecs_iso2022.c"
        var $43=($42) & -3; //@line 435 "_codecs_iso2022.c"
        var $44=$state_addr; //@line 435 "_codecs_iso2022.c"
        var $45=$44; //@line 435 "_codecs_iso2022.c"
        var $46=$45; //@line 435 "_codecs_iso2022.c"
        var $47=$46+4; //@line 435 "_codecs_iso2022.c"
        HEAP[$47]=$43; //@line 435 "_codecs_iso2022.c"
        __label__ = 66; break; //@line 435 "_codecs_iso2022.c"
      case 6: // $bb8
        var $48=$c; //@line 440 "_codecs_iso2022.c"
        var $49=($48); //@line 440 "_codecs_iso2022.c"
        if ($49 == 10) {
          __label__ = 29; break;
        }
        else if ($49 == 14) {
          __label__ = 27; break;
        }
        else if ($49 == 15) {
          __label__ = 25; break;
        }
        else if ($49 == 27) {
          __label__ = 7; break;
        }
        else {
        __label__ = 32; break;
        }
        
      case 7: // $bb9
        var $50=HEAP[$inleft_addr]; //@line 442 "_codecs_iso2022.c"
        var $51=($50) <= 1; //@line 442 "_codecs_iso2022.c"
        if ($51) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 442 "_codecs_iso2022.c"
      case 8: // $bb10
        $0=-2; //@line 442 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 442 "_codecs_iso2022.c"
      case 9: // $bb11
        var $52=$inbuf_addr; //@line 443 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 443 "_codecs_iso2022.c"
        var $54=$53+1; //@line 443 "_codecs_iso2022.c"
        var $55=HEAP[$54]; //@line 443 "_codecs_iso2022.c"
        var $56=($55)==40; //@line 443 "_codecs_iso2022.c"
        if ($56) { __label__ = 14; break; } else { __label__ = 10; break; } //@line 443 "_codecs_iso2022.c"
      case 10: // $bb12
        var $57=$inbuf_addr; //@line 443 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 443 "_codecs_iso2022.c"
        var $59=$58+1; //@line 443 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 443 "_codecs_iso2022.c"
        var $61=($60)==41; //@line 443 "_codecs_iso2022.c"
        if ($61) { __label__ = 14; break; } else { __label__ = 11; break; } //@line 443 "_codecs_iso2022.c"
      case 11: // $bb13
        var $62=$inbuf_addr; //@line 443 "_codecs_iso2022.c"
        var $63=HEAP[$62]; //@line 443 "_codecs_iso2022.c"
        var $64=$63+1; //@line 443 "_codecs_iso2022.c"
        var $65=HEAP[$64]; //@line 443 "_codecs_iso2022.c"
        var $66=($65)==36; //@line 443 "_codecs_iso2022.c"
        if ($66) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 443 "_codecs_iso2022.c"
      case 12: // $bb14
        var $67=$inbuf_addr; //@line 443 "_codecs_iso2022.c"
        var $68=HEAP[$67]; //@line 443 "_codecs_iso2022.c"
        var $69=$68+1; //@line 443 "_codecs_iso2022.c"
        var $70=HEAP[$69]; //@line 443 "_codecs_iso2022.c"
        var $71=($70)==46; //@line 443 "_codecs_iso2022.c"
        if ($71) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 443 "_codecs_iso2022.c"
      case 13: // $bb15
        var $72=$inbuf_addr; //@line 443 "_codecs_iso2022.c"
        var $73=HEAP[$72]; //@line 443 "_codecs_iso2022.c"
        var $74=$73+1; //@line 443 "_codecs_iso2022.c"
        var $75=HEAP[$74]; //@line 443 "_codecs_iso2022.c"
        var $76=($75)==38; //@line 443 "_codecs_iso2022.c"
        if ($76) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 443 "_codecs_iso2022.c"
      case 14: // $bb16
        var $77=$config_addr; //@line 444 "_codecs_iso2022.c"
        var $78=$state_addr; //@line 444 "_codecs_iso2022.c"
        var $79=$inbuf_addr; //@line 444 "_codecs_iso2022.c"
        var $80=_iso2022processesc($77, $78, $79, $inleft_addr); //@line 444 "_codecs_iso2022.c"
        $err=$80; //@line 444 "_codecs_iso2022.c"
        var $81=($80)!=0; //@line 446 "_codecs_iso2022.c"
        if ($81) { __label__ = 15; break; } else { __label__ = 66; break; } //@line 446 "_codecs_iso2022.c"
      case 15: // $bb17
        var $82=$err; //@line 447 "_codecs_iso2022.c"
        $0=$82; //@line 447 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 447 "_codecs_iso2022.c"
      case 16: // $bb19
        var $83=$config_addr; //@line 449 "_codecs_iso2022.c"
        var $84=$83; //@line 449 "_codecs_iso2022.c"
        var $85=$84; //@line 449 "_codecs_iso2022.c"
        var $86=HEAP[$85]; //@line 449 "_codecs_iso2022.c"
        var $87=($86) & 2; //@line 449 "_codecs_iso2022.c"
        var $88=($87)==0; //@line 449 "_codecs_iso2022.c"
        if ($88) { __label__ = 22; break; } else { __label__ = 17; break; } //@line 449 "_codecs_iso2022.c"
      case 17: // $bb20
        var $89=$inbuf_addr; //@line 449 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 449 "_codecs_iso2022.c"
        var $91=$90+1; //@line 449 "_codecs_iso2022.c"
        var $92=HEAP[$91]; //@line 449 "_codecs_iso2022.c"
        var $93=($92)!=78; //@line 449 "_codecs_iso2022.c"
        if ($93) { __label__ = 22; break; } else { __label__ = 18; break; } //@line 449 "_codecs_iso2022.c"
      case 18: // $bb21
        var $94=HEAP[$inleft_addr]; //@line 450 "_codecs_iso2022.c"
        var $95=($94) <= 2; //@line 450 "_codecs_iso2022.c"
        if ($95) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 450 "_codecs_iso2022.c"
      case 19: // $bb22
        $0=-2; //@line 450 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 450 "_codecs_iso2022.c"
      case 20: // $bb23
        var $96=$config_addr; //@line 451 "_codecs_iso2022.c"
        var $97=$state_addr; //@line 451 "_codecs_iso2022.c"
        var $98=$inbuf_addr; //@line 451 "_codecs_iso2022.c"
        var $99=$outbuf_addr; //@line 451 "_codecs_iso2022.c"
        var $100=_iso2022processg2($96, $97, $98, $inleft_addr, $99, $outleft_addr); //@line 451 "_codecs_iso2022.c"
        $err=$100; //@line 451 "_codecs_iso2022.c"
        var $101=$err; //@line 453 "_codecs_iso2022.c"
        var $102=($101)!=0; //@line 453 "_codecs_iso2022.c"
        if ($102) { __label__ = 21; break; } else { __label__ = 66; break; } //@line 453 "_codecs_iso2022.c"
      case 21: // $bb24
        var $103=$err; //@line 454 "_codecs_iso2022.c"
        $0=$103; //@line 454 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 454 "_codecs_iso2022.c"
      case 22: // $bb26
        var $104=HEAP[$outleft_addr]; //@line 457 "_codecs_iso2022.c"
        var $105=($104) <= 0; //@line 457 "_codecs_iso2022.c"
        if ($105) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 457 "_codecs_iso2022.c"
      case 23: // $bb27
        $0=-1; //@line 457 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 457 "_codecs_iso2022.c"
      case 24: // $bb28
        var $106=$outbuf_addr; //@line 457 "_codecs_iso2022.c"
        var $107=HEAP[$106]; //@line 457 "_codecs_iso2022.c"
        var $108=$107; //@line 457 "_codecs_iso2022.c"
        HEAP[$108]=27; //@line 457 "_codecs_iso2022.c"
        var $109=$state_addr; //@line 458 "_codecs_iso2022.c"
        var $110=$109; //@line 458 "_codecs_iso2022.c"
        var $111=$110; //@line 458 "_codecs_iso2022.c"
        var $112=$111+4; //@line 458 "_codecs_iso2022.c"
        var $113=HEAP[$112]; //@line 458 "_codecs_iso2022.c"
        var $114=($113) | 2; //@line 458 "_codecs_iso2022.c"
        var $115=$state_addr; //@line 458 "_codecs_iso2022.c"
        var $116=$115; //@line 458 "_codecs_iso2022.c"
        var $117=$116; //@line 458 "_codecs_iso2022.c"
        var $118=$117+4; //@line 458 "_codecs_iso2022.c"
        HEAP[$118]=$114; //@line 458 "_codecs_iso2022.c"
        var $119=$inbuf_addr; //@line 459 "_codecs_iso2022.c"
        var $120=HEAP[$119]; //@line 459 "_codecs_iso2022.c"
        var $121=$120+1; //@line 459 "_codecs_iso2022.c"
        var $122=$inbuf_addr; //@line 459 "_codecs_iso2022.c"
        HEAP[$122]=$121; //@line 459 "_codecs_iso2022.c"
        var $123=HEAP[$inleft_addr]; //@line 459 "_codecs_iso2022.c"
        var $124=($123) - 1; //@line 459 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$124; //@line 459 "_codecs_iso2022.c"
        var $125=$outbuf_addr; //@line 459 "_codecs_iso2022.c"
        var $126=HEAP[$125]; //@line 459 "_codecs_iso2022.c"
        var $127=$126+2; //@line 459 "_codecs_iso2022.c"
        var $128=$outbuf_addr; //@line 459 "_codecs_iso2022.c"
        HEAP[$128]=$127; //@line 459 "_codecs_iso2022.c"
        var $129=HEAP[$outleft_addr]; //@line 459 "_codecs_iso2022.c"
        var $130=($129) - 1; //@line 459 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$130; //@line 459 "_codecs_iso2022.c"
        __label__ = 66; break; //@line 459 "_codecs_iso2022.c"
      case 25: // $bb30
        var $131=$config_addr; //@line 463 "_codecs_iso2022.c"
        var $132=$131; //@line 463 "_codecs_iso2022.c"
        var $133=$132; //@line 463 "_codecs_iso2022.c"
        var $134=HEAP[$133]; //@line 463 "_codecs_iso2022.c"
        var $135=($134) & 1; //@line 463 "_codecs_iso2022.c"
        var $136=((($135)) & 255); //@line 463 "_codecs_iso2022.c"
        var $toBool=($136)!=0; //@line 463 "_codecs_iso2022.c"
        if ($toBool) { __label__ = 39; break; } else { __label__ = 26; break; } //@line 463 "_codecs_iso2022.c"
      case 26: // $bb31
        var $137=$state_addr; //@line 465 "_codecs_iso2022.c"
        var $138=$137; //@line 465 "_codecs_iso2022.c"
        var $139=$138; //@line 465 "_codecs_iso2022.c"
        var $140=$139+4; //@line 465 "_codecs_iso2022.c"
        var $141=HEAP[$140]; //@line 465 "_codecs_iso2022.c"
        var $142=($141) & -2; //@line 465 "_codecs_iso2022.c"
        var $143=$state_addr; //@line 465 "_codecs_iso2022.c"
        var $144=$143; //@line 465 "_codecs_iso2022.c"
        var $145=$144; //@line 465 "_codecs_iso2022.c"
        var $146=$145+4; //@line 465 "_codecs_iso2022.c"
        HEAP[$146]=$142; //@line 465 "_codecs_iso2022.c"
        var $147=$inbuf_addr; //@line 466 "_codecs_iso2022.c"
        var $148=HEAP[$147]; //@line 466 "_codecs_iso2022.c"
        var $149=$148+1; //@line 466 "_codecs_iso2022.c"
        var $150=$inbuf_addr; //@line 466 "_codecs_iso2022.c"
        HEAP[$150]=$149; //@line 466 "_codecs_iso2022.c"
        var $151=HEAP[$inleft_addr]; //@line 466 "_codecs_iso2022.c"
        var $152=($151) - 1; //@line 466 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$152; //@line 466 "_codecs_iso2022.c"
        __lastLabel__ = 26; __label__ = 67; break; //@line 466 "_codecs_iso2022.c"
      case 27: // $bb32
        var $153=$config_addr; //@line 469 "_codecs_iso2022.c"
        var $154=$153; //@line 469 "_codecs_iso2022.c"
        var $155=$154; //@line 469 "_codecs_iso2022.c"
        var $156=HEAP[$155]; //@line 469 "_codecs_iso2022.c"
        var $157=($156) & 1; //@line 469 "_codecs_iso2022.c"
        var $158=((($157)) & 255); //@line 469 "_codecs_iso2022.c"
        var $toBool33=($158)!=0; //@line 469 "_codecs_iso2022.c"
        if ($toBool33) { __label__ = 39; break; } else { __label__ = 28; break; } //@line 469 "_codecs_iso2022.c"
      case 28: // $bb34
        var $159=$state_addr; //@line 471 "_codecs_iso2022.c"
        var $160=$159; //@line 471 "_codecs_iso2022.c"
        var $161=$160; //@line 471 "_codecs_iso2022.c"
        var $162=$161+4; //@line 471 "_codecs_iso2022.c"
        var $163=HEAP[$162]; //@line 471 "_codecs_iso2022.c"
        var $164=($163) | 1; //@line 471 "_codecs_iso2022.c"
        var $165=$state_addr; //@line 471 "_codecs_iso2022.c"
        var $166=$165; //@line 471 "_codecs_iso2022.c"
        var $167=$166; //@line 471 "_codecs_iso2022.c"
        var $168=$167+4; //@line 471 "_codecs_iso2022.c"
        HEAP[$168]=$164; //@line 471 "_codecs_iso2022.c"
        var $169=$inbuf_addr; //@line 472 "_codecs_iso2022.c"
        var $170=HEAP[$169]; //@line 472 "_codecs_iso2022.c"
        var $171=$170+1; //@line 472 "_codecs_iso2022.c"
        var $172=$inbuf_addr; //@line 472 "_codecs_iso2022.c"
        HEAP[$172]=$171; //@line 472 "_codecs_iso2022.c"
        var $173=HEAP[$inleft_addr]; //@line 472 "_codecs_iso2022.c"
        var $174=($173) - 1; //@line 472 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$174; //@line 472 "_codecs_iso2022.c"
        __lastLabel__ = 28; __label__ = 67; break; //@line 472 "_codecs_iso2022.c"
      case 29: // $bb35
        var $175=$state_addr; //@line 475 "_codecs_iso2022.c"
        var $176=$175; //@line 475 "_codecs_iso2022.c"
        var $177=$176; //@line 475 "_codecs_iso2022.c"
        var $178=$177+4; //@line 475 "_codecs_iso2022.c"
        var $179=HEAP[$178]; //@line 475 "_codecs_iso2022.c"
        var $180=($179) & -2; //@line 475 "_codecs_iso2022.c"
        var $181=$state_addr; //@line 475 "_codecs_iso2022.c"
        var $182=$181; //@line 475 "_codecs_iso2022.c"
        var $183=$182; //@line 475 "_codecs_iso2022.c"
        var $184=$183+4; //@line 475 "_codecs_iso2022.c"
        HEAP[$184]=$180; //@line 475 "_codecs_iso2022.c"
        var $185=HEAP[$outleft_addr]; //@line 476 "_codecs_iso2022.c"
        var $186=($185) <= 0; //@line 476 "_codecs_iso2022.c"
        if ($186) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 476 "_codecs_iso2022.c"
      case 30: // $bb36
        $0=-1; //@line 476 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 476 "_codecs_iso2022.c"
      case 31: // $bb37
        var $187=$outbuf_addr; //@line 476 "_codecs_iso2022.c"
        var $188=HEAP[$187]; //@line 476 "_codecs_iso2022.c"
        var $189=$188; //@line 476 "_codecs_iso2022.c"
        HEAP[$189]=10; //@line 476 "_codecs_iso2022.c"
        var $190=$inbuf_addr; //@line 477 "_codecs_iso2022.c"
        var $191=HEAP[$190]; //@line 477 "_codecs_iso2022.c"
        var $192=$191+1; //@line 477 "_codecs_iso2022.c"
        var $193=$inbuf_addr; //@line 477 "_codecs_iso2022.c"
        HEAP[$193]=$192; //@line 477 "_codecs_iso2022.c"
        var $194=HEAP[$inleft_addr]; //@line 477 "_codecs_iso2022.c"
        var $195=($194) - 1; //@line 477 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$195; //@line 477 "_codecs_iso2022.c"
        var $196=$outbuf_addr; //@line 477 "_codecs_iso2022.c"
        var $197=HEAP[$196]; //@line 477 "_codecs_iso2022.c"
        var $198=$197+2; //@line 477 "_codecs_iso2022.c"
        var $199=$outbuf_addr; //@line 477 "_codecs_iso2022.c"
        HEAP[$199]=$198; //@line 477 "_codecs_iso2022.c"
        var $200=HEAP[$outleft_addr]; //@line 477 "_codecs_iso2022.c"
        var $201=($200) - 1; //@line 477 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$201; //@line 477 "_codecs_iso2022.c"
        __label__ = 66; break; //@line 477 "_codecs_iso2022.c"
      case 32: // $bb38
        var $202=$c; //@line 480 "_codecs_iso2022.c"
        var $203=($202) <= 31; //@line 480 "_codecs_iso2022.c"
        if ($203) { __label__ = 39; break; } else { __label__ = 33; break; } //@line 480 "_codecs_iso2022.c"
      case 33: // $bb39
        var $204=$c; //@line 482 "_codecs_iso2022.c"
        var $205=($204) < 0; //@line 482 "_codecs_iso2022.c"
        if ($205) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 482 "_codecs_iso2022.c"
      case 34: // $bb40
        $0=1; //@line 483 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 483 "_codecs_iso2022.c"
      case 35: // $bb41
        var $206=$state_addr; //@line 489 "_codecs_iso2022.c"
        var $207=$206; //@line 489 "_codecs_iso2022.c"
        var $208=$207; //@line 489 "_codecs_iso2022.c"
        var $209=$208+4; //@line 489 "_codecs_iso2022.c"
        var $210=HEAP[$209]; //@line 489 "_codecs_iso2022.c"
        var $211=($210); //@line 489 "_codecs_iso2022.c"
        var $212=($211) & 1; //@line 489 "_codecs_iso2022.c"
        var $213=((($212)) & 255); //@line 489 "_codecs_iso2022.c"
        var $toBool42=($213)!=0; //@line 489 "_codecs_iso2022.c"
        var $214=$state_addr; //@line 490 "_codecs_iso2022.c"
        var $215=$214; //@line 490 "_codecs_iso2022.c"
        var $216=$215; //@line 490 "_codecs_iso2022.c"
        if ($toBool42) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 489 "_codecs_iso2022.c"
      case 36: // $bb43
        var $217=$216+1; //@line 490 "_codecs_iso2022.c"
        var $218=HEAP[$217]; //@line 490 "_codecs_iso2022.c"
        $charset=$218; //@line 490 "_codecs_iso2022.c"
        __lastLabel__ = 36; __label__ = 38; break; //@line 490 "_codecs_iso2022.c"
      case 37: // $bb44
        var $219=$216; //@line 492 "_codecs_iso2022.c"
        var $220=HEAP[$219]; //@line 492 "_codecs_iso2022.c"
        $charset=$220; //@line 492 "_codecs_iso2022.c"
        __lastLabel__ = 37; __label__ = 38; break; //@line 492 "_codecs_iso2022.c"
      case 38: // $bb45
        var $221=__lastLabel__ == 37 ? $220 : ($218);
        var $222=($221)==66; //@line 494 "_codecs_iso2022.c"
        if ($222) { __label__ = 39; break; } else { __label__ = 42; break; } //@line 494 "_codecs_iso2022.c"
      case 39: // $bypass
        var $223=HEAP[$outleft_addr]; //@line 495 "_codecs_iso2022.c"
        var $224=($223) <= 0; //@line 495 "_codecs_iso2022.c"
        if ($224) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 495 "_codecs_iso2022.c"
      case 40: // $bb46
        $0=-1; //@line 495 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 495 "_codecs_iso2022.c"
      case 41: // $bb47
        var $225=$outbuf_addr; //@line 495 "_codecs_iso2022.c"
        var $226=HEAP[$225]; //@line 495 "_codecs_iso2022.c"
        var $227=$c; //@line 495 "_codecs_iso2022.c"
        var $228=($227); //@line 495 "_codecs_iso2022.c"
        var $229=$226; //@line 495 "_codecs_iso2022.c"
        HEAP[$229]=$228; //@line 495 "_codecs_iso2022.c"
        var $230=$inbuf_addr; //@line 496 "_codecs_iso2022.c"
        var $231=HEAP[$230]; //@line 496 "_codecs_iso2022.c"
        var $232=$231+1; //@line 496 "_codecs_iso2022.c"
        var $233=$inbuf_addr; //@line 496 "_codecs_iso2022.c"
        HEAP[$233]=$232; //@line 496 "_codecs_iso2022.c"
        var $234=HEAP[$inleft_addr]; //@line 496 "_codecs_iso2022.c"
        var $235=($234) - 1; //@line 496 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$235; //@line 496 "_codecs_iso2022.c"
        var $236=$outbuf_addr; //@line 496 "_codecs_iso2022.c"
        var $237=HEAP[$236]; //@line 496 "_codecs_iso2022.c"
        var $238=$237+2; //@line 496 "_codecs_iso2022.c"
        var $239=$outbuf_addr; //@line 496 "_codecs_iso2022.c"
        HEAP[$239]=$238; //@line 496 "_codecs_iso2022.c"
        var $240=HEAP[$outleft_addr]; //@line 496 "_codecs_iso2022.c"
        var $241=($240) - 1; //@line 496 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$241; //@line 496 "_codecs_iso2022.c"
        __label__ = 66; break; //@line 496 "_codecs_iso2022.c"
      case 42: // $bb48
        var $242=$dsgcache; //@line 500 "_codecs_iso2022.c"
        var $243=$242; //@line 500 "_codecs_iso2022.c"
        var $244=($243)==0; //@line 500 "_codecs_iso2022.c"
        if ($244) { __label__ = 45; break; } else { __label__ = 43; break; } //@line 500 "_codecs_iso2022.c"
      case 43: // $bb49
        var $245=$dsgcache; //@line 500 "_codecs_iso2022.c"
        var $246=$245; //@line 500 "_codecs_iso2022.c"
        var $247=HEAP[$246]; //@line 500 "_codecs_iso2022.c"
        var $248=$charset; //@line 500 "_codecs_iso2022.c"
        var $249=($247)!=($248); //@line 500 "_codecs_iso2022.c"
        if ($249) { __label__ = 45; break; } else { __label__ = 44; break; } //@line 500 "_codecs_iso2022.c"
      case 44: // $bb50
        var $250=$dsgcache; //@line 502 "_codecs_iso2022.c"
        $dsg=$250; //@line 502 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 502 "_codecs_iso2022.c"
      case 45: // $bb51
        var $251=$config_addr; //@line 504 "_codecs_iso2022.c"
        var $252=$251; //@line 504 "_codecs_iso2022.c"
        var $253=$252+4; //@line 504 "_codecs_iso2022.c"
        var $254=HEAP[$253]; //@line 504 "_codecs_iso2022.c"
        $dsg=$254; //@line 504 "_codecs_iso2022.c"
        var $255=$dsg; //@line 505 "_codecs_iso2022.c"
        var $256=$255; //@line 505 "_codecs_iso2022.c"
        var $257=HEAP[$256]; //@line 505 "_codecs_iso2022.c"
        var $258=$charset; //@line 505 "_codecs_iso2022.c"
        var $259=($257)!=($258); //@line 505 "_codecs_iso2022.c"
        var $260=$dsg; //@line 509 "_codecs_iso2022.c"
        if ($259) { __lastLabel__ = 45; __label__ = 46; break; } else { __lastLabel__ = 45; __label__ = 47; break; } //@line 505 "_codecs_iso2022.c"
      case 46: // $bb52
        var $261=__lastLabel__ == 46 ? $268 : ($260);
        var $262=$261+16; //@line 509 "_codecs_iso2022.c"
        $dsg=$262; //@line 509 "_codecs_iso2022.c"
        var $263=$dsg; //@line 505 "_codecs_iso2022.c"
        var $264=$263; //@line 505 "_codecs_iso2022.c"
        var $265=HEAP[$264]; //@line 505 "_codecs_iso2022.c"
        var $266=$charset; //@line 505 "_codecs_iso2022.c"
        var $267=($265)!=($266); //@line 505 "_codecs_iso2022.c"
        var $268=$dsg; //@line 509 "_codecs_iso2022.c"
        if ($267) { __lastLabel__ = 46; __label__ = 46; break; } else { __lastLabel__ = 46; __label__ = 47; break; } //@line 505 "_codecs_iso2022.c"
      case 47: // $bb54
        var $_lcssa=__lastLabel__ == 45 ? $260 : ($268);
        var $269=$_lcssa; //@line 511 "_codecs_iso2022.c"
        var $270=HEAP[$269]; //@line 511 "_codecs_iso2022.c"
        var $271=($270)==0; //@line 511 "_codecs_iso2022.c"
        if ($271) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 511 "_codecs_iso2022.c"
      case 48: // $bb55
        ___assert_fail(__str11, __str10, 511, ___PRETTY_FUNCTION___9242); //@line 511 "_codecs_iso2022.c"
        throw "Reached an unreachable!" //@line 511 "_codecs_iso2022.c"
      case 49: // $bb56
        var $272=$dsg; //@line 512 "_codecs_iso2022.c"
        $dsgcache=$272; //@line 512 "_codecs_iso2022.c"
        __label__ = 50; break; //@line 512 "_codecs_iso2022.c"
      case 50: // $bb57
        var $273=$dsg; //@line 515 "_codecs_iso2022.c"
        var $274=$273+2; //@line 515 "_codecs_iso2022.c"
        var $275=HEAP[$274]; //@line 515 "_codecs_iso2022.c"
        var $276=($275); //@line 515 "_codecs_iso2022.c"
        var $277=HEAP[$inleft_addr]; //@line 515 "_codecs_iso2022.c"
        var $278=($276) > ($277); //@line 515 "_codecs_iso2022.c"
        if ($278) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 515 "_codecs_iso2022.c"
      case 51: // $bb58
        $0=-2; //@line 515 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 515 "_codecs_iso2022.c"
      case 52: // $bb59
        var $279=$dsg; //@line 516 "_codecs_iso2022.c"
        var $280=$279+8; //@line 516 "_codecs_iso2022.c"
        var $281=HEAP[$280]; //@line 516 "_codecs_iso2022.c"
        var $282=$inbuf_addr; //@line 516 "_codecs_iso2022.c"
        var $283=HEAP[$282]; //@line 516 "_codecs_iso2022.c"
        var $284=FUNCTION_TABLE[$281]($283); //@line 516 "_codecs_iso2022.c"
        $decoded=$284; //@line 516 "_codecs_iso2022.c"
        var $285=$decoded; //@line 517 "_codecs_iso2022.c"
        var $286=($285)==65535; //@line 517 "_codecs_iso2022.c"
        if ($286) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 517 "_codecs_iso2022.c"
      case 53: // $bb60
        var $287=$dsg; //@line 518 "_codecs_iso2022.c"
        var $288=$287+2; //@line 518 "_codecs_iso2022.c"
        var $289=HEAP[$288]; //@line 518 "_codecs_iso2022.c"
        var $290=($289); //@line 518 "_codecs_iso2022.c"
        $0=$290; //@line 518 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 518 "_codecs_iso2022.c"
      case 54: // $bb61
        var $291=$decoded; //@line 520 "_codecs_iso2022.c"
        var $292=($291) <= 65535; //@line 520 "_codecs_iso2022.c"
        if ($292) { __label__ = 55; break; } else { __label__ = 58; break; } //@line 520 "_codecs_iso2022.c"
      case 55: // $bb62
        var $293=HEAP[$outleft_addr]; //@line 521 "_codecs_iso2022.c"
        var $294=($293) <= 0; //@line 521 "_codecs_iso2022.c"
        if ($294) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 521 "_codecs_iso2022.c"
      case 56: // $bb63
        $0=-1; //@line 521 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 521 "_codecs_iso2022.c"
      case 57: // $bb64
        var $295=$outbuf_addr; //@line 521 "_codecs_iso2022.c"
        var $296=HEAP[$295]; //@line 521 "_codecs_iso2022.c"
        var $297=$decoded; //@line 521 "_codecs_iso2022.c"
        var $298=((($297)) & 65535); //@line 521 "_codecs_iso2022.c"
        var $299=$296; //@line 521 "_codecs_iso2022.c"
        HEAP[$299]=$298; //@line 521 "_codecs_iso2022.c"
        var $300=$outbuf_addr; //@line 522 "_codecs_iso2022.c"
        var $301=HEAP[$300]; //@line 522 "_codecs_iso2022.c"
        var $302=$301+2; //@line 522 "_codecs_iso2022.c"
        var $303=$outbuf_addr; //@line 522 "_codecs_iso2022.c"
        HEAP[$303]=$302; //@line 522 "_codecs_iso2022.c"
        var $304=HEAP[$outleft_addr]; //@line 522 "_codecs_iso2022.c"
        var $305=($304) - 1; //@line 522 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$305; //@line 522 "_codecs_iso2022.c"
        __label__ = 65; break; //@line 522 "_codecs_iso2022.c"
      case 58: // $bb65
        var $306=$decoded; //@line 524 "_codecs_iso2022.c"
        var $307=($306) <= 196607; //@line 524 "_codecs_iso2022.c"
        var $308=HEAP[$outleft_addr]; //@line 525 "_codecs_iso2022.c"
        var $309=($308) <= 1; //@line 525 "_codecs_iso2022.c"
        if ($307) { __label__ = 59; break; } else { __label__ = 62; break; } //@line 524 "_codecs_iso2022.c"
      case 59: // $bb66
        if ($309) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 525 "_codecs_iso2022.c"
      case 60: // $bb67
        $0=-1; //@line 525 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 525 "_codecs_iso2022.c"
      case 61: // $bb68
        var $310=$outbuf_addr; //@line 525 "_codecs_iso2022.c"
        var $311=HEAP[$310]; //@line 525 "_codecs_iso2022.c"
        var $312=$decoded; //@line 525 "_codecs_iso2022.c"
        var $313=($312) - 65536; //@line 525 "_codecs_iso2022.c"
        var $314=($313) >>> 10; //@line 525 "_codecs_iso2022.c"
        var $315=((($314)) & 65535); //@line 525 "_codecs_iso2022.c"
        var $316=($315) + -10240; //@line 525 "_codecs_iso2022.c"
        var $317=$311; //@line 525 "_codecs_iso2022.c"
        HEAP[$317]=$316; //@line 525 "_codecs_iso2022.c"
        var $318=$outbuf_addr; //@line 525 "_codecs_iso2022.c"
        var $319=HEAP[$318]; //@line 525 "_codecs_iso2022.c"
        var $320=$decoded; //@line 525 "_codecs_iso2022.c"
        var $321=((($320)) & 65535); //@line 525 "_codecs_iso2022.c"
        var $322=($321) & 1023; //@line 525 "_codecs_iso2022.c"
        var $323=($322) + -9216; //@line 525 "_codecs_iso2022.c"
        var $324=$319+2; //@line 525 "_codecs_iso2022.c"
        HEAP[$324]=$323; //@line 525 "_codecs_iso2022.c"
        var $325=$outbuf_addr; //@line 525 "_codecs_iso2022.c"
        var $326=HEAP[$325]; //@line 525 "_codecs_iso2022.c"
        var $327=$326+4; //@line 525 "_codecs_iso2022.c"
        var $328=$outbuf_addr; //@line 525 "_codecs_iso2022.c"
        HEAP[$328]=$327; //@line 525 "_codecs_iso2022.c"
        var $329=HEAP[$outleft_addr]; //@line 525 "_codecs_iso2022.c"
        var $330=($329) - 2; //@line 525 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$330; //@line 525 "_codecs_iso2022.c"
        __label__ = 65; break; //@line 525 "_codecs_iso2022.c"
      case 62: // $bb69
        if ($309) { __label__ = 63; break; } else { __label__ = 64; break; } //@line 528 "_codecs_iso2022.c"
      case 63: // $bb70
        $0=-1; //@line 528 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 528 "_codecs_iso2022.c"
      case 64: // $bb71
        var $331=$outbuf_addr; //@line 528 "_codecs_iso2022.c"
        var $332=HEAP[$331]; //@line 528 "_codecs_iso2022.c"
        var $333=$decoded; //@line 528 "_codecs_iso2022.c"
        var $334=($333) >>> 16; //@line 528 "_codecs_iso2022.c"
        var $335=((($334)) & 65535); //@line 528 "_codecs_iso2022.c"
        var $336=$332; //@line 528 "_codecs_iso2022.c"
        HEAP[$336]=$335; //@line 528 "_codecs_iso2022.c"
        var $337=$outbuf_addr; //@line 528 "_codecs_iso2022.c"
        var $338=HEAP[$337]; //@line 528 "_codecs_iso2022.c"
        var $339=$decoded; //@line 528 "_codecs_iso2022.c"
        var $340=((($339)) & 65535); //@line 528 "_codecs_iso2022.c"
        var $341=$338+2; //@line 528 "_codecs_iso2022.c"
        HEAP[$341]=$340; //@line 528 "_codecs_iso2022.c"
        var $342=$outbuf_addr; //@line 529 "_codecs_iso2022.c"
        var $343=HEAP[$342]; //@line 529 "_codecs_iso2022.c"
        var $344=$343+4; //@line 529 "_codecs_iso2022.c"
        var $345=$outbuf_addr; //@line 529 "_codecs_iso2022.c"
        HEAP[$345]=$344; //@line 529 "_codecs_iso2022.c"
        var $346=HEAP[$outleft_addr]; //@line 529 "_codecs_iso2022.c"
        var $347=($346) - 2; //@line 529 "_codecs_iso2022.c"
        HEAP[$outleft_addr]=$347; //@line 529 "_codecs_iso2022.c"
        __label__ = 65; break; //@line 529 "_codecs_iso2022.c"
      case 65: // $bb72
        var $348=$inbuf_addr; //@line 531 "_codecs_iso2022.c"
        var $349=HEAP[$348]; //@line 531 "_codecs_iso2022.c"
        var $350=$dsg; //@line 531 "_codecs_iso2022.c"
        var $351=$350+2; //@line 531 "_codecs_iso2022.c"
        var $352=HEAP[$351]; //@line 531 "_codecs_iso2022.c"
        var $353=($352); //@line 531 "_codecs_iso2022.c"
        var $354=$349+$353; //@line 531 "_codecs_iso2022.c"
        var $355=$inbuf_addr; //@line 531 "_codecs_iso2022.c"
        HEAP[$355]=$354; //@line 531 "_codecs_iso2022.c"
        var $356=HEAP[$inleft_addr]; //@line 531 "_codecs_iso2022.c"
        var $357=$dsg; //@line 531 "_codecs_iso2022.c"
        var $358=$357+2; //@line 531 "_codecs_iso2022.c"
        var $359=HEAP[$358]; //@line 531 "_codecs_iso2022.c"
        var $360=($359); //@line 531 "_codecs_iso2022.c"
        var $361=($356) - ($360); //@line 531 "_codecs_iso2022.c"
        HEAP[$inleft_addr]=$361; //@line 531 "_codecs_iso2022.c"
        __lastLabel__ = 65; __label__ = 67; break; //@line 531 "_codecs_iso2022.c"
      case 66: // $bb73thread_pre_split
        var $_pr=HEAP[$inleft_addr];
        __lastLabel__ = 66; __label__ = 67; break;
      case 67: // $bb73
        var $362=__lastLabel__ == -1 ? $inleft : (__lastLabel__ == 66 ? $_pr : (__lastLabel__ == 65 ? $361 : (__lastLabel__ == 28 ? $174 : ($152))));
        var $363=($362) > 0; //@line 425 "_codecs_iso2022.c"
        if ($363) { __label__ = 1; break; } else { __label__ = 68; break; } //@line 425 "_codecs_iso2022.c"
      case 68: // $bb74
        $0=0; //@line 536 "_codecs_iso2022.c"
        __label__ = 69; break; //@line 536 "_codecs_iso2022.c"
      case 69: // $bb75
        var $364=$0; //@line 432 "_codecs_iso2022.c"
        $retval=$364; //@line 432 "_codecs_iso2022.c"
        var $retval76=$retval; //@line 432 "_codecs_iso2022.c"
        STACKTOP = __stackBase__;
        return $retval76; //@line 432 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ksx1001_init() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $_b=HEAP[_initialized_9477_b];
        var $1=($_b);
        var $2=($1)==0; //@line 572 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 572 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=_importmap(__str12, __str13, _cp949_encmap, 0); //@line 572 "_codecs_iso2022.c"
        var $4=($3)!=0; //@line 572 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 572 "_codecs_iso2022.c"
      case 2: // $bb1
        var $5=_importmap(__str12, __str14, 0, _ksx1001_decmap); //@line 572 "_codecs_iso2022.c"
        var $6=($5)!=0; //@line 572 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 572 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=-1; //@line 575 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 575 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[_initialized_9477_b]=1;
        $0=0; //@line 577 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 577 "_codecs_iso2022.c"
      case 5: // $bb4
        var $7=$0; //@line 575 "_codecs_iso2022.c"
        $retval=$7; //@line 575 "_codecs_iso2022.c"
        var $retval5=$retval; //@line 575 "_codecs_iso2022.c"
        ;
        return $retval5; //@line 575 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ksx1001_decoder($data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $retval;
        var $0;
        var $u;
        $data_addr=$data;
        var $1=HEAP[_ksx1001_decmap]; //@line 584 "_codecs_iso2022.c"
        var $2=$data_addr; //@line 584 "_codecs_iso2022.c"
        var $3=$2; //@line 584 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 584 "_codecs_iso2022.c"
        var $5=($4); //@line 584 "_codecs_iso2022.c"
        var $6=$1+8*$5; //@line 584 "_codecs_iso2022.c"
        var $7=$6; //@line 584 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 584 "_codecs_iso2022.c"
        var $9=$8; //@line 584 "_codecs_iso2022.c"
        var $10=($9)==0; //@line 584 "_codecs_iso2022.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 584 "_codecs_iso2022.c"
      case 1: // $bb
        var $11=$data_addr; //@line 584 "_codecs_iso2022.c"
        var $12=$11+1; //@line 584 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 584 "_codecs_iso2022.c"
        var $14=HEAP[_ksx1001_decmap]; //@line 584 "_codecs_iso2022.c"
        var $15=$data_addr; //@line 584 "_codecs_iso2022.c"
        var $16=$15; //@line 584 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 584 "_codecs_iso2022.c"
        var $18=($17); //@line 584 "_codecs_iso2022.c"
        var $19=$14+8*$18; //@line 584 "_codecs_iso2022.c"
        var $20=$19+4; //@line 584 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 584 "_codecs_iso2022.c"
        var $22=($13) < ($21); //@line 584 "_codecs_iso2022.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 584 "_codecs_iso2022.c"
      case 2: // $bb1
        var $23=$data_addr; //@line 584 "_codecs_iso2022.c"
        var $24=$23+1; //@line 584 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 584 "_codecs_iso2022.c"
        var $26=HEAP[_ksx1001_decmap]; //@line 584 "_codecs_iso2022.c"
        var $27=$data_addr; //@line 584 "_codecs_iso2022.c"
        var $28=$27; //@line 584 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 584 "_codecs_iso2022.c"
        var $30=($29); //@line 584 "_codecs_iso2022.c"
        var $31=$26+8*$30; //@line 584 "_codecs_iso2022.c"
        var $32=$31+5; //@line 584 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 584 "_codecs_iso2022.c"
        var $34=($25) > ($33); //@line 584 "_codecs_iso2022.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 584 "_codecs_iso2022.c"
      case 3: // $bb2
        var $35=HEAP[_ksx1001_decmap]; //@line 584 "_codecs_iso2022.c"
        var $36=$data_addr; //@line 584 "_codecs_iso2022.c"
        var $37=$36; //@line 584 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 584 "_codecs_iso2022.c"
        var $39=($38); //@line 584 "_codecs_iso2022.c"
        var $40=$35+8*$39; //@line 584 "_codecs_iso2022.c"
        var $41=$40; //@line 584 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 584 "_codecs_iso2022.c"
        var $43=$data_addr; //@line 584 "_codecs_iso2022.c"
        var $44=$43+1; //@line 584 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 584 "_codecs_iso2022.c"
        var $46=($45); //@line 584 "_codecs_iso2022.c"
        var $47=HEAP[_ksx1001_decmap]; //@line 584 "_codecs_iso2022.c"
        var $48=$data_addr; //@line 584 "_codecs_iso2022.c"
        var $49=$48; //@line 584 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 584 "_codecs_iso2022.c"
        var $51=($50); //@line 584 "_codecs_iso2022.c"
        var $52=$47+8*$51; //@line 584 "_codecs_iso2022.c"
        var $53=$52+4; //@line 584 "_codecs_iso2022.c"
        var $54=HEAP[$53]; //@line 584 "_codecs_iso2022.c"
        var $55=($54); //@line 584 "_codecs_iso2022.c"
        var $56=($46) - ($55); //@line 584 "_codecs_iso2022.c"
        var $57=$42+2*$56; //@line 584 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 584 "_codecs_iso2022.c"
        var $59=($58); //@line 584 "_codecs_iso2022.c"
        $u=$59; //@line 584 "_codecs_iso2022.c"
        var $60=$u; //@line 584 "_codecs_iso2022.c"
        var $61=($60)==65534; //@line 584 "_codecs_iso2022.c"
        if ($61) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 584 "_codecs_iso2022.c"
      case 4: // $bb3
        var $62=$u; //@line 585 "_codecs_iso2022.c"
        $0=$62; //@line 585 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 585 "_codecs_iso2022.c"
      case 5: // $bb4
        $0=65535; //@line 587 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 587 "_codecs_iso2022.c"
      case 6: // $bb5
        var $63=$0; //@line 585 "_codecs_iso2022.c"
        $retval=$63; //@line 585 "_codecs_iso2022.c"
        var $retval6=$retval; //@line 585 "_codecs_iso2022.c"
        ;
        return $retval6; //@line 585 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ksx1001_encoder($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$length_addr; //@line 594 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 594 "_codecs_iso2022.c"
        var $3=($2)!=1; //@line 594 "_codecs_iso2022.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 594 "_codecs_iso2022.c"
      case 1: // $bb
        ___assert_fail(__str15, __str10, 594, ___PRETTY_FUNCTION___9539); //@line 594 "_codecs_iso2022.c"
        throw "Reached an unreachable!" //@line 594 "_codecs_iso2022.c"
      case 2: // $bb1
        var $4=$data_addr; //@line 595 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 595 "_codecs_iso2022.c"
        var $6=($5) <= 65535; //@line 595 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 595 "_codecs_iso2022.c"
      case 3: // $bb2
        var $7=HEAP[_cp949_encmap]; //@line 596 "_codecs_iso2022.c"
        var $8=$data_addr; //@line 596 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 596 "_codecs_iso2022.c"
        var $10=($9) >>> 8; //@line 596 "_codecs_iso2022.c"
        var $11=$7+8*$10; //@line 596 "_codecs_iso2022.c"
        var $12=$11; //@line 596 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 596 "_codecs_iso2022.c"
        var $14=$13; //@line 596 "_codecs_iso2022.c"
        var $15=($14)!=0; //@line 596 "_codecs_iso2022.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 596 "_codecs_iso2022.c"
      case 4: // $bb3
        var $16=$data_addr; //@line 596 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 596 "_codecs_iso2022.c"
        var $18=($17) & 255; //@line 596 "_codecs_iso2022.c"
        var $19=HEAP[_cp949_encmap]; //@line 596 "_codecs_iso2022.c"
        var $20=$data_addr; //@line 596 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 596 "_codecs_iso2022.c"
        var $22=($21) >>> 8; //@line 596 "_codecs_iso2022.c"
        var $23=$19+8*$22; //@line 596 "_codecs_iso2022.c"
        var $24=$23+4; //@line 596 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 596 "_codecs_iso2022.c"
        var $26=($25); //@line 596 "_codecs_iso2022.c"
        var $27=($18) >= ($26); //@line 596 "_codecs_iso2022.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 596 "_codecs_iso2022.c"
      case 5: // $bb4
        var $28=$data_addr; //@line 596 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 596 "_codecs_iso2022.c"
        var $30=($29) & 255; //@line 596 "_codecs_iso2022.c"
        var $31=HEAP[_cp949_encmap]; //@line 596 "_codecs_iso2022.c"
        var $32=$data_addr; //@line 596 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 596 "_codecs_iso2022.c"
        var $34=($33) >>> 8; //@line 596 "_codecs_iso2022.c"
        var $35=$31+8*$34; //@line 596 "_codecs_iso2022.c"
        var $36=$35+5; //@line 596 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 596 "_codecs_iso2022.c"
        var $38=($37); //@line 596 "_codecs_iso2022.c"
        var $39=($30) <= ($38); //@line 596 "_codecs_iso2022.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 596 "_codecs_iso2022.c"
      case 6: // $bb5
        var $40=HEAP[_cp949_encmap]; //@line 596 "_codecs_iso2022.c"
        var $41=$data_addr; //@line 596 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 596 "_codecs_iso2022.c"
        var $43=($42) >>> 8; //@line 596 "_codecs_iso2022.c"
        var $44=$40+8*$43; //@line 596 "_codecs_iso2022.c"
        var $45=$44; //@line 596 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 596 "_codecs_iso2022.c"
        var $47=$data_addr; //@line 596 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 596 "_codecs_iso2022.c"
        var $49=($48) & 255; //@line 596 "_codecs_iso2022.c"
        var $50=HEAP[_cp949_encmap]; //@line 596 "_codecs_iso2022.c"
        var $51=$data_addr; //@line 596 "_codecs_iso2022.c"
        var $52=HEAP[$51]; //@line 596 "_codecs_iso2022.c"
        var $53=($52) >>> 8; //@line 596 "_codecs_iso2022.c"
        var $54=$50+8*$53; //@line 596 "_codecs_iso2022.c"
        var $55=$54+4; //@line 596 "_codecs_iso2022.c"
        var $56=HEAP[$55]; //@line 596 "_codecs_iso2022.c"
        var $57=($56); //@line 596 "_codecs_iso2022.c"
        var $58=($49) - ($57); //@line 596 "_codecs_iso2022.c"
        var $59=$46+2*$58; //@line 596 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 596 "_codecs_iso2022.c"
        $coded=$60; //@line 596 "_codecs_iso2022.c"
        var $61=$coded; //@line 596 "_codecs_iso2022.c"
        var $62=($61)!=-1; //@line 596 "_codecs_iso2022.c"
        var $63=$coded; //@line 597 "_codecs_iso2022.c"
        var $64=($63) >= 0; //@line 597 "_codecs_iso2022.c"
        var $or_cond=($62) & ($64);
        if ($or_cond) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 596 "_codecs_iso2022.c"
      case 7: // $bb7
        var $65=$coded; //@line 598 "_codecs_iso2022.c"
        var $66=($65); //@line 598 "_codecs_iso2022.c"
        $0=$66; //@line 598 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 598 "_codecs_iso2022.c"
      case 8: // $bb8
        $0=65535; //@line 600 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 600 "_codecs_iso2022.c"
      case 9: // $bb9
        var $67=$0; //@line 598 "_codecs_iso2022.c"
        $retval=$67; //@line 598 "_codecs_iso2022.c"
        var $retval10=$retval; //@line 598 "_codecs_iso2022.c"
        var $retval1011=((($retval10)) & 65535); //@line 598 "_codecs_iso2022.c"
        ;
        return $retval1011; //@line 598 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0208_init() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $_b=HEAP[_initialized_9598_b];
        var $1=($_b);
        var $2=($1)==0; //@line 608 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 608 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=_importmap(__str16, __str17, _jisxcommon_encmap, 0); //@line 608 "_codecs_iso2022.c"
        var $4=($3)!=0; //@line 608 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 608 "_codecs_iso2022.c"
      case 2: // $bb1
        var $5=_importmap(__str16, __str18, 0, _jisx0208_decmap); //@line 608 "_codecs_iso2022.c"
        var $6=($5)!=0; //@line 608 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 608 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=-1; //@line 611 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 611 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[_initialized_9598_b]=1;
        $0=0; //@line 613 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 613 "_codecs_iso2022.c"
      case 5: // $bb4
        var $7=$0; //@line 611 "_codecs_iso2022.c"
        $retval=$7; //@line 611 "_codecs_iso2022.c"
        var $retval5=$retval; //@line 611 "_codecs_iso2022.c"
        ;
        return $retval5; //@line 611 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0208_decoder($data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $retval;
        var $0;
        var $u;
        $data_addr=$data;
        var $1=$data_addr; //@line 620 "_codecs_iso2022.c"
        var $2=$1; //@line 620 "_codecs_iso2022.c"
        var $3=HEAP[$2]; //@line 620 "_codecs_iso2022.c"
        var $4=($3)!=33; //@line 620 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 620 "_codecs_iso2022.c"
      case 1: // $bb
        var $5=$data_addr; //@line 620 "_codecs_iso2022.c"
        var $6=$5+1; //@line 620 "_codecs_iso2022.c"
        var $7=HEAP[$6]; //@line 620 "_codecs_iso2022.c"
        var $8=($7)!=64; //@line 620 "_codecs_iso2022.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 620 "_codecs_iso2022.c"
      case 2: // $bb1
        $0=65340; //@line 621 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 621 "_codecs_iso2022.c"
      case 3: // $bb2
        var $9=HEAP[_jisx0208_decmap]; //@line 622 "_codecs_iso2022.c"
        var $10=$data_addr; //@line 622 "_codecs_iso2022.c"
        var $11=$10; //@line 622 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 622 "_codecs_iso2022.c"
        var $13=($12); //@line 622 "_codecs_iso2022.c"
        var $14=$9+8*$13; //@line 622 "_codecs_iso2022.c"
        var $15=$14; //@line 622 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 622 "_codecs_iso2022.c"
        var $17=$16; //@line 622 "_codecs_iso2022.c"
        var $18=($17)==0; //@line 622 "_codecs_iso2022.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 622 "_codecs_iso2022.c"
      case 4: // $bb3
        var $19=$data_addr; //@line 622 "_codecs_iso2022.c"
        var $20=$19+1; //@line 622 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 622 "_codecs_iso2022.c"
        var $22=HEAP[_jisx0208_decmap]; //@line 622 "_codecs_iso2022.c"
        var $23=$data_addr; //@line 622 "_codecs_iso2022.c"
        var $24=$23; //@line 622 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 622 "_codecs_iso2022.c"
        var $26=($25); //@line 622 "_codecs_iso2022.c"
        var $27=$22+8*$26; //@line 622 "_codecs_iso2022.c"
        var $28=$27+4; //@line 622 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 622 "_codecs_iso2022.c"
        var $30=($21) < ($29); //@line 622 "_codecs_iso2022.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 622 "_codecs_iso2022.c"
      case 5: // $bb4
        var $31=$data_addr; //@line 622 "_codecs_iso2022.c"
        var $32=$31+1; //@line 622 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 622 "_codecs_iso2022.c"
        var $34=HEAP[_jisx0208_decmap]; //@line 622 "_codecs_iso2022.c"
        var $35=$data_addr; //@line 622 "_codecs_iso2022.c"
        var $36=$35; //@line 622 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 622 "_codecs_iso2022.c"
        var $38=($37); //@line 622 "_codecs_iso2022.c"
        var $39=$34+8*$38; //@line 622 "_codecs_iso2022.c"
        var $40=$39+5; //@line 622 "_codecs_iso2022.c"
        var $41=HEAP[$40]; //@line 622 "_codecs_iso2022.c"
        var $42=($33) > ($41); //@line 622 "_codecs_iso2022.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 622 "_codecs_iso2022.c"
      case 6: // $bb5
        var $43=HEAP[_jisx0208_decmap]; //@line 622 "_codecs_iso2022.c"
        var $44=$data_addr; //@line 622 "_codecs_iso2022.c"
        var $45=$44; //@line 622 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 622 "_codecs_iso2022.c"
        var $47=($46); //@line 622 "_codecs_iso2022.c"
        var $48=$43+8*$47; //@line 622 "_codecs_iso2022.c"
        var $49=$48; //@line 622 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 622 "_codecs_iso2022.c"
        var $51=$data_addr; //@line 622 "_codecs_iso2022.c"
        var $52=$51+1; //@line 622 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 622 "_codecs_iso2022.c"
        var $54=($53); //@line 622 "_codecs_iso2022.c"
        var $55=HEAP[_jisx0208_decmap]; //@line 622 "_codecs_iso2022.c"
        var $56=$data_addr; //@line 622 "_codecs_iso2022.c"
        var $57=$56; //@line 622 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 622 "_codecs_iso2022.c"
        var $59=($58); //@line 622 "_codecs_iso2022.c"
        var $60=$55+8*$59; //@line 622 "_codecs_iso2022.c"
        var $61=$60+4; //@line 622 "_codecs_iso2022.c"
        var $62=HEAP[$61]; //@line 622 "_codecs_iso2022.c"
        var $63=($62); //@line 622 "_codecs_iso2022.c"
        var $64=($54) - ($63); //@line 622 "_codecs_iso2022.c"
        var $65=$50+2*$64; //@line 622 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 622 "_codecs_iso2022.c"
        var $67=($66); //@line 622 "_codecs_iso2022.c"
        $u=$67; //@line 622 "_codecs_iso2022.c"
        var $68=$u; //@line 622 "_codecs_iso2022.c"
        var $69=($68)==65534; //@line 622 "_codecs_iso2022.c"
        if ($69) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 622 "_codecs_iso2022.c"
      case 7: // $bb6
        var $70=$u; //@line 623 "_codecs_iso2022.c"
        $0=$70; //@line 623 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 623 "_codecs_iso2022.c"
      case 8: // $bb7
        $0=65535; //@line 625 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 625 "_codecs_iso2022.c"
      case 9: // $bb8
        var $71=$0; //@line 621 "_codecs_iso2022.c"
        $retval=$71; //@line 621 "_codecs_iso2022.c"
        var $retval9=$retval; //@line 621 "_codecs_iso2022.c"
        ;
        return $retval9; //@line 621 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0208_encoder($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$length_addr; //@line 632 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 632 "_codecs_iso2022.c"
        var $3=($2)!=1; //@line 632 "_codecs_iso2022.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 632 "_codecs_iso2022.c"
      case 1: // $bb
        ___assert_fail(__str15, __str10, 632, ___PRETTY_FUNCTION___9665); //@line 632 "_codecs_iso2022.c"
        throw "Reached an unreachable!" //@line 632 "_codecs_iso2022.c"
      case 2: // $bb1
        var $4=$data_addr; //@line 633 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 633 "_codecs_iso2022.c"
        var $6=($5) <= 65535; //@line 633 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 633 "_codecs_iso2022.c"
      case 3: // $bb2
        var $7=$data_addr; //@line 634 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 634 "_codecs_iso2022.c"
        var $9=($8)==65340; //@line 634 "_codecs_iso2022.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 634 "_codecs_iso2022.c"
      case 4: // $bb3
        $0=8512; //@line 635 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 635 "_codecs_iso2022.c"
      case 5: // $bb4
        var $10=HEAP[_jisxcommon_encmap]; //@line 636 "_codecs_iso2022.c"
        var $11=$data_addr; //@line 636 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 636 "_codecs_iso2022.c"
        var $13=($12) >>> 8; //@line 636 "_codecs_iso2022.c"
        var $14=$10+8*$13; //@line 636 "_codecs_iso2022.c"
        var $15=$14; //@line 636 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 636 "_codecs_iso2022.c"
        var $17=$16; //@line 636 "_codecs_iso2022.c"
        var $18=($17)!=0; //@line 636 "_codecs_iso2022.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 636 "_codecs_iso2022.c"
      case 6: // $bb5
        var $19=$data_addr; //@line 636 "_codecs_iso2022.c"
        var $20=HEAP[$19]; //@line 636 "_codecs_iso2022.c"
        var $21=($20) & 255; //@line 636 "_codecs_iso2022.c"
        var $22=HEAP[_jisxcommon_encmap]; //@line 636 "_codecs_iso2022.c"
        var $23=$data_addr; //@line 636 "_codecs_iso2022.c"
        var $24=HEAP[$23]; //@line 636 "_codecs_iso2022.c"
        var $25=($24) >>> 8; //@line 636 "_codecs_iso2022.c"
        var $26=$22+8*$25; //@line 636 "_codecs_iso2022.c"
        var $27=$26+4; //@line 636 "_codecs_iso2022.c"
        var $28=HEAP[$27]; //@line 636 "_codecs_iso2022.c"
        var $29=($28); //@line 636 "_codecs_iso2022.c"
        var $30=($21) >= ($29); //@line 636 "_codecs_iso2022.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 636 "_codecs_iso2022.c"
      case 7: // $bb6
        var $31=$data_addr; //@line 636 "_codecs_iso2022.c"
        var $32=HEAP[$31]; //@line 636 "_codecs_iso2022.c"
        var $33=($32) & 255; //@line 636 "_codecs_iso2022.c"
        var $34=HEAP[_jisxcommon_encmap]; //@line 636 "_codecs_iso2022.c"
        var $35=$data_addr; //@line 636 "_codecs_iso2022.c"
        var $36=HEAP[$35]; //@line 636 "_codecs_iso2022.c"
        var $37=($36) >>> 8; //@line 636 "_codecs_iso2022.c"
        var $38=$34+8*$37; //@line 636 "_codecs_iso2022.c"
        var $39=$38+5; //@line 636 "_codecs_iso2022.c"
        var $40=HEAP[$39]; //@line 636 "_codecs_iso2022.c"
        var $41=($40); //@line 636 "_codecs_iso2022.c"
        var $42=($33) <= ($41); //@line 636 "_codecs_iso2022.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 636 "_codecs_iso2022.c"
      case 8: // $bb7
        var $43=HEAP[_jisxcommon_encmap]; //@line 636 "_codecs_iso2022.c"
        var $44=$data_addr; //@line 636 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 636 "_codecs_iso2022.c"
        var $46=($45) >>> 8; //@line 636 "_codecs_iso2022.c"
        var $47=$43+8*$46; //@line 636 "_codecs_iso2022.c"
        var $48=$47; //@line 636 "_codecs_iso2022.c"
        var $49=HEAP[$48]; //@line 636 "_codecs_iso2022.c"
        var $50=$data_addr; //@line 636 "_codecs_iso2022.c"
        var $51=HEAP[$50]; //@line 636 "_codecs_iso2022.c"
        var $52=($51) & 255; //@line 636 "_codecs_iso2022.c"
        var $53=HEAP[_jisxcommon_encmap]; //@line 636 "_codecs_iso2022.c"
        var $54=$data_addr; //@line 636 "_codecs_iso2022.c"
        var $55=HEAP[$54]; //@line 636 "_codecs_iso2022.c"
        var $56=($55) >>> 8; //@line 636 "_codecs_iso2022.c"
        var $57=$53+8*$56; //@line 636 "_codecs_iso2022.c"
        var $58=$57+4; //@line 636 "_codecs_iso2022.c"
        var $59=HEAP[$58]; //@line 636 "_codecs_iso2022.c"
        var $60=($59); //@line 636 "_codecs_iso2022.c"
        var $61=($52) - ($60); //@line 636 "_codecs_iso2022.c"
        var $62=$49+2*$61; //@line 636 "_codecs_iso2022.c"
        var $63=HEAP[$62]; //@line 636 "_codecs_iso2022.c"
        $coded=$63; //@line 636 "_codecs_iso2022.c"
        var $64=$coded; //@line 636 "_codecs_iso2022.c"
        var $65=($64)!=-1; //@line 636 "_codecs_iso2022.c"
        var $66=$coded; //@line 637 "_codecs_iso2022.c"
        var $67=($66) >= 0; //@line 637 "_codecs_iso2022.c"
        var $or_cond=($65) & ($67);
        if ($or_cond) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 636 "_codecs_iso2022.c"
      case 9: // $bb9
        var $68=$coded; //@line 638 "_codecs_iso2022.c"
        var $69=($68); //@line 638 "_codecs_iso2022.c"
        $0=$69; //@line 638 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 638 "_codecs_iso2022.c"
      case 10: // $bb10
        $0=65535; //@line 641 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 641 "_codecs_iso2022.c"
      case 11: // $bb11
        var $70=$0; //@line 635 "_codecs_iso2022.c"
        $retval=$70; //@line 635 "_codecs_iso2022.c"
        var $retval12=$retval; //@line 635 "_codecs_iso2022.c"
        var $retval1213=((($retval12)) & 65535); //@line 635 "_codecs_iso2022.c"
        ;
        return $retval1213; //@line 635 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0212_init() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $_b=HEAP[_initialized_9727_b];
        var $1=($_b);
        var $2=($1)==0; //@line 649 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 649 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=_importmap(__str16, __str17, _jisxcommon_encmap, 0); //@line 649 "_codecs_iso2022.c"
        var $4=($3)!=0; //@line 649 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 649 "_codecs_iso2022.c"
      case 2: // $bb1
        var $5=_importmap(__str16, __str19, 0, _jisx0212_decmap); //@line 649 "_codecs_iso2022.c"
        var $6=($5)!=0; //@line 649 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 649 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=-1; //@line 652 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 652 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[_initialized_9727_b]=1;
        $0=0; //@line 654 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 654 "_codecs_iso2022.c"
      case 5: // $bb4
        var $7=$0; //@line 652 "_codecs_iso2022.c"
        $retval=$7; //@line 652 "_codecs_iso2022.c"
        var $retval5=$retval; //@line 652 "_codecs_iso2022.c"
        ;
        return $retval5; //@line 652 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0212_decoder($data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $retval;
        var $0;
        var $u;
        $data_addr=$data;
        var $1=HEAP[_jisx0212_decmap]; //@line 661 "_codecs_iso2022.c"
        var $2=$data_addr; //@line 661 "_codecs_iso2022.c"
        var $3=$2; //@line 661 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 661 "_codecs_iso2022.c"
        var $5=($4); //@line 661 "_codecs_iso2022.c"
        var $6=$1+8*$5; //@line 661 "_codecs_iso2022.c"
        var $7=$6; //@line 661 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 661 "_codecs_iso2022.c"
        var $9=$8; //@line 661 "_codecs_iso2022.c"
        var $10=($9)==0; //@line 661 "_codecs_iso2022.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 661 "_codecs_iso2022.c"
      case 1: // $bb
        var $11=$data_addr; //@line 661 "_codecs_iso2022.c"
        var $12=$11+1; //@line 661 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 661 "_codecs_iso2022.c"
        var $14=HEAP[_jisx0212_decmap]; //@line 661 "_codecs_iso2022.c"
        var $15=$data_addr; //@line 661 "_codecs_iso2022.c"
        var $16=$15; //@line 661 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 661 "_codecs_iso2022.c"
        var $18=($17); //@line 661 "_codecs_iso2022.c"
        var $19=$14+8*$18; //@line 661 "_codecs_iso2022.c"
        var $20=$19+4; //@line 661 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 661 "_codecs_iso2022.c"
        var $22=($13) < ($21); //@line 661 "_codecs_iso2022.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 661 "_codecs_iso2022.c"
      case 2: // $bb1
        var $23=$data_addr; //@line 661 "_codecs_iso2022.c"
        var $24=$23+1; //@line 661 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 661 "_codecs_iso2022.c"
        var $26=HEAP[_jisx0212_decmap]; //@line 661 "_codecs_iso2022.c"
        var $27=$data_addr; //@line 661 "_codecs_iso2022.c"
        var $28=$27; //@line 661 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 661 "_codecs_iso2022.c"
        var $30=($29); //@line 661 "_codecs_iso2022.c"
        var $31=$26+8*$30; //@line 661 "_codecs_iso2022.c"
        var $32=$31+5; //@line 661 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 661 "_codecs_iso2022.c"
        var $34=($25) > ($33); //@line 661 "_codecs_iso2022.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 661 "_codecs_iso2022.c"
      case 3: // $bb2
        var $35=HEAP[_jisx0212_decmap]; //@line 661 "_codecs_iso2022.c"
        var $36=$data_addr; //@line 661 "_codecs_iso2022.c"
        var $37=$36; //@line 661 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 661 "_codecs_iso2022.c"
        var $39=($38); //@line 661 "_codecs_iso2022.c"
        var $40=$35+8*$39; //@line 661 "_codecs_iso2022.c"
        var $41=$40; //@line 661 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 661 "_codecs_iso2022.c"
        var $43=$data_addr; //@line 661 "_codecs_iso2022.c"
        var $44=$43+1; //@line 661 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 661 "_codecs_iso2022.c"
        var $46=($45); //@line 661 "_codecs_iso2022.c"
        var $47=HEAP[_jisx0212_decmap]; //@line 661 "_codecs_iso2022.c"
        var $48=$data_addr; //@line 661 "_codecs_iso2022.c"
        var $49=$48; //@line 661 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 661 "_codecs_iso2022.c"
        var $51=($50); //@line 661 "_codecs_iso2022.c"
        var $52=$47+8*$51; //@line 661 "_codecs_iso2022.c"
        var $53=$52+4; //@line 661 "_codecs_iso2022.c"
        var $54=HEAP[$53]; //@line 661 "_codecs_iso2022.c"
        var $55=($54); //@line 661 "_codecs_iso2022.c"
        var $56=($46) - ($55); //@line 661 "_codecs_iso2022.c"
        var $57=$42+2*$56; //@line 661 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 661 "_codecs_iso2022.c"
        var $59=($58); //@line 661 "_codecs_iso2022.c"
        $u=$59; //@line 661 "_codecs_iso2022.c"
        var $60=$u; //@line 661 "_codecs_iso2022.c"
        var $61=($60)==65534; //@line 661 "_codecs_iso2022.c"
        if ($61) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 661 "_codecs_iso2022.c"
      case 4: // $bb3
        var $62=$u; //@line 662 "_codecs_iso2022.c"
        $0=$62; //@line 662 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 662 "_codecs_iso2022.c"
      case 5: // $bb4
        $0=65535; //@line 664 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 664 "_codecs_iso2022.c"
      case 6: // $bb5
        var $63=$0; //@line 662 "_codecs_iso2022.c"
        $retval=$63; //@line 662 "_codecs_iso2022.c"
        var $retval6=$retval; //@line 662 "_codecs_iso2022.c"
        ;
        return $retval6; //@line 662 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0212_encoder($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$length_addr; //@line 671 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 671 "_codecs_iso2022.c"
        var $3=($2)!=1; //@line 671 "_codecs_iso2022.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 671 "_codecs_iso2022.c"
      case 1: // $bb
        ___assert_fail(__str15, __str10, 671, ___PRETTY_FUNCTION___9789); //@line 671 "_codecs_iso2022.c"
        throw "Reached an unreachable!" //@line 671 "_codecs_iso2022.c"
      case 2: // $bb1
        var $4=$data_addr; //@line 672 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 672 "_codecs_iso2022.c"
        var $6=($5) <= 65535; //@line 672 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 672 "_codecs_iso2022.c"
      case 3: // $bb2
        var $7=HEAP[_jisxcommon_encmap]; //@line 673 "_codecs_iso2022.c"
        var $8=$data_addr; //@line 673 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 673 "_codecs_iso2022.c"
        var $10=($9) >>> 8; //@line 673 "_codecs_iso2022.c"
        var $11=$7+8*$10; //@line 673 "_codecs_iso2022.c"
        var $12=$11; //@line 673 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 673 "_codecs_iso2022.c"
        var $14=$13; //@line 673 "_codecs_iso2022.c"
        var $15=($14)!=0; //@line 673 "_codecs_iso2022.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 673 "_codecs_iso2022.c"
      case 4: // $bb3
        var $16=$data_addr; //@line 673 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 673 "_codecs_iso2022.c"
        var $18=($17) & 255; //@line 673 "_codecs_iso2022.c"
        var $19=HEAP[_jisxcommon_encmap]; //@line 673 "_codecs_iso2022.c"
        var $20=$data_addr; //@line 673 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 673 "_codecs_iso2022.c"
        var $22=($21) >>> 8; //@line 673 "_codecs_iso2022.c"
        var $23=$19+8*$22; //@line 673 "_codecs_iso2022.c"
        var $24=$23+4; //@line 673 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 673 "_codecs_iso2022.c"
        var $26=($25); //@line 673 "_codecs_iso2022.c"
        var $27=($18) >= ($26); //@line 673 "_codecs_iso2022.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 673 "_codecs_iso2022.c"
      case 5: // $bb4
        var $28=$data_addr; //@line 673 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 673 "_codecs_iso2022.c"
        var $30=($29) & 255; //@line 673 "_codecs_iso2022.c"
        var $31=HEAP[_jisxcommon_encmap]; //@line 673 "_codecs_iso2022.c"
        var $32=$data_addr; //@line 673 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 673 "_codecs_iso2022.c"
        var $34=($33) >>> 8; //@line 673 "_codecs_iso2022.c"
        var $35=$31+8*$34; //@line 673 "_codecs_iso2022.c"
        var $36=$35+5; //@line 673 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 673 "_codecs_iso2022.c"
        var $38=($37); //@line 673 "_codecs_iso2022.c"
        var $39=($30) <= ($38); //@line 673 "_codecs_iso2022.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 673 "_codecs_iso2022.c"
      case 6: // $bb5
        var $40=HEAP[_jisxcommon_encmap]; //@line 673 "_codecs_iso2022.c"
        var $41=$data_addr; //@line 673 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 673 "_codecs_iso2022.c"
        var $43=($42) >>> 8; //@line 673 "_codecs_iso2022.c"
        var $44=$40+8*$43; //@line 673 "_codecs_iso2022.c"
        var $45=$44; //@line 673 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 673 "_codecs_iso2022.c"
        var $47=$data_addr; //@line 673 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 673 "_codecs_iso2022.c"
        var $49=($48) & 255; //@line 673 "_codecs_iso2022.c"
        var $50=HEAP[_jisxcommon_encmap]; //@line 673 "_codecs_iso2022.c"
        var $51=$data_addr; //@line 673 "_codecs_iso2022.c"
        var $52=HEAP[$51]; //@line 673 "_codecs_iso2022.c"
        var $53=($52) >>> 8; //@line 673 "_codecs_iso2022.c"
        var $54=$50+8*$53; //@line 673 "_codecs_iso2022.c"
        var $55=$54+4; //@line 673 "_codecs_iso2022.c"
        var $56=HEAP[$55]; //@line 673 "_codecs_iso2022.c"
        var $57=($56); //@line 673 "_codecs_iso2022.c"
        var $58=($49) - ($57); //@line 673 "_codecs_iso2022.c"
        var $59=$46+2*$58; //@line 673 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 673 "_codecs_iso2022.c"
        $coded=$60; //@line 673 "_codecs_iso2022.c"
        var $61=$coded; //@line 673 "_codecs_iso2022.c"
        var $62=($61)!=-1; //@line 673 "_codecs_iso2022.c"
        var $63=$coded; //@line 674 "_codecs_iso2022.c"
        var $64=($63) < 0; //@line 674 "_codecs_iso2022.c"
        var $or_cond=($62) & ($64);
        if ($or_cond) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 673 "_codecs_iso2022.c"
      case 7: // $bb7
        var $65=$coded; //@line 675 "_codecs_iso2022.c"
        var $66=($65); //@line 675 "_codecs_iso2022.c"
        var $67=($66) & 32767; //@line 675 "_codecs_iso2022.c"
        $0=$67; //@line 675 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 675 "_codecs_iso2022.c"
      case 8: // $bb8
        $0=65535; //@line 678 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 678 "_codecs_iso2022.c"
      case 9: // $bb9
        var $68=$0; //@line 675 "_codecs_iso2022.c"
        $retval=$68; //@line 675 "_codecs_iso2022.c"
        var $retval10=$retval; //@line 675 "_codecs_iso2022.c"
        var $retval1011=((($retval10)) & 65535); //@line 675 "_codecs_iso2022.c"
        ;
        return $retval1011; //@line 675 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_init() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $_b=HEAP[_initialized_9849_b];
        var $1=($_b);
        var $2=($1)==0; //@line 686 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 10; break; } //@line 686 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=_jisx0208_init(); //@line 686 "_codecs_iso2022.c"
        var $4=($3)!=0; //@line 686 "_codecs_iso2022.c"
        if ($4) { __label__ = 9; break; } else { __label__ = 2; break; } //@line 686 "_codecs_iso2022.c"
      case 2: // $bb1
        var $5=_importmap(__str16, __str20, _jisx0213_bmp_encmap, 0); //@line 686 "_codecs_iso2022.c"
        var $6=($5)!=0; //@line 686 "_codecs_iso2022.c"
        if ($6) { __label__ = 9; break; } else { __label__ = 3; break; } //@line 686 "_codecs_iso2022.c"
      case 3: // $bb2
        var $7=_importmap(__str16, __str21, 0, _jisx0213_1_bmp_decmap); //@line 686 "_codecs_iso2022.c"
        var $8=($7)!=0; //@line 686 "_codecs_iso2022.c"
        if ($8) { __label__ = 9; break; } else { __label__ = 4; break; } //@line 686 "_codecs_iso2022.c"
      case 4: // $bb3
        var $9=_importmap(__str16, __str22, 0, _jisx0213_2_bmp_decmap); //@line 686 "_codecs_iso2022.c"
        var $10=($9)!=0; //@line 686 "_codecs_iso2022.c"
        if ($10) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 686 "_codecs_iso2022.c"
      case 5: // $bb4
        var $11=_importmap(__str16, __str23, _jisx0213_emp_encmap, 0); //@line 686 "_codecs_iso2022.c"
        var $12=($11)!=0; //@line 686 "_codecs_iso2022.c"
        if ($12) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 686 "_codecs_iso2022.c"
      case 6: // $bb5
        var $13=_importmap(__str16, __str24, 0, _jisx0213_1_emp_decmap); //@line 686 "_codecs_iso2022.c"
        var $14=($13)!=0; //@line 686 "_codecs_iso2022.c"
        if ($14) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 686 "_codecs_iso2022.c"
      case 7: // $bb6
        var $15=_importmap(__str16, __str25, 0, _jisx0213_2_emp_decmap); //@line 686 "_codecs_iso2022.c"
        var $16=($15)!=0; //@line 686 "_codecs_iso2022.c"
        if ($16) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 686 "_codecs_iso2022.c"
      case 8: // $bb7
        var $17=_importmap(__str16, __str26, _jisx0213_pair_encmap, _jisx0213_pair_decmap); //@line 686 "_codecs_iso2022.c"
        var $18=($17)!=0; //@line 686 "_codecs_iso2022.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 686 "_codecs_iso2022.c"
      case 9: // $bb8
        $0=-1; //@line 702 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 702 "_codecs_iso2022.c"
      case 10: // $bb9
        HEAP[_initialized_9849_b]=1;
        $0=0; //@line 704 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 704 "_codecs_iso2022.c"
      case 11: // $bb10
        var $19=$0; //@line 702 "_codecs_iso2022.c"
        $retval=$19; //@line 702 "_codecs_iso2022.c"
        var $retval11=$retval; //@line 702 "_codecs_iso2022.c"
        ;
        return $retval11; //@line 702 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2000_1_decoder($data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $retval;
        var $0;
        var $u;
        $data_addr=$data;
        var $1=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $2=$1; //@line 712 "_codecs_iso2022.c"
        var $3=HEAP[$2]; //@line 712 "_codecs_iso2022.c"
        var $4=($3)!=46; //@line 712 "_codecs_iso2022.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 712 "_codecs_iso2022.c"
      case 1: // $bb
        var $5=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $6=$5+1; //@line 712 "_codecs_iso2022.c"
        var $7=HEAP[$6]; //@line 712 "_codecs_iso2022.c"
        var $8=($7)==33; //@line 712 "_codecs_iso2022.c"
        if ($8) { __label__ = 20; break; } else { __label__ = 2; break; } //@line 712 "_codecs_iso2022.c"
      case 2: // $bb1
        var $9=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $10=$9; //@line 712 "_codecs_iso2022.c"
        var $11=HEAP[$10]; //@line 712 "_codecs_iso2022.c"
        var $12=($11)!=47; //@line 712 "_codecs_iso2022.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 712 "_codecs_iso2022.c"
      case 3: // $bb2
        var $13=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $14=$13+1; //@line 712 "_codecs_iso2022.c"
        var $15=HEAP[$14]; //@line 712 "_codecs_iso2022.c"
        var $16=($15)==126; //@line 712 "_codecs_iso2022.c"
        if ($16) { __label__ = 20; break; } else { __label__ = 4; break; } //@line 712 "_codecs_iso2022.c"
      case 4: // $bb3
        var $17=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $18=$17; //@line 712 "_codecs_iso2022.c"
        var $19=HEAP[$18]; //@line 712 "_codecs_iso2022.c"
        var $20=($19)!=79; //@line 712 "_codecs_iso2022.c"
        if ($20) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 712 "_codecs_iso2022.c"
      case 5: // $bb4
        var $21=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $22=$21+1; //@line 712 "_codecs_iso2022.c"
        var $23=HEAP[$22]; //@line 712 "_codecs_iso2022.c"
        var $24=($23)==84; //@line 712 "_codecs_iso2022.c"
        if ($24) { __label__ = 20; break; } else { __label__ = 6; break; } //@line 712 "_codecs_iso2022.c"
      case 6: // $bb5
        var $25=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $26=$25; //@line 712 "_codecs_iso2022.c"
        var $27=HEAP[$26]; //@line 712 "_codecs_iso2022.c"
        var $28=($27)!=79; //@line 712 "_codecs_iso2022.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 712 "_codecs_iso2022.c"
      case 7: // $bb6
        var $29=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $30=$29+1; //@line 712 "_codecs_iso2022.c"
        var $31=HEAP[$30]; //@line 712 "_codecs_iso2022.c"
        var $32=($31)==126; //@line 712 "_codecs_iso2022.c"
        if ($32) { __label__ = 20; break; } else { __label__ = 8; break; } //@line 712 "_codecs_iso2022.c"
      case 8: // $bb7
        var $33=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $34=$33; //@line 712 "_codecs_iso2022.c"
        var $35=HEAP[$34]; //@line 712 "_codecs_iso2022.c"
        var $36=($35)!=116; //@line 712 "_codecs_iso2022.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 712 "_codecs_iso2022.c"
      case 9: // $bb8
        var $37=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $38=$37+1; //@line 712 "_codecs_iso2022.c"
        var $39=HEAP[$38]; //@line 712 "_codecs_iso2022.c"
        var $40=($39)==39; //@line 712 "_codecs_iso2022.c"
        if ($40) { __label__ = 20; break; } else { __label__ = 10; break; } //@line 712 "_codecs_iso2022.c"
      case 10: // $bb9
        var $41=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $42=$41; //@line 712 "_codecs_iso2022.c"
        var $43=HEAP[$42]; //@line 712 "_codecs_iso2022.c"
        var $44=($43)!=126; //@line 712 "_codecs_iso2022.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 712 "_codecs_iso2022.c"
      case 11: // $bb10
        var $45=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $46=$45+1; //@line 712 "_codecs_iso2022.c"
        var $47=HEAP[$46]; //@line 712 "_codecs_iso2022.c"
        var $48=($47)==122; //@line 712 "_codecs_iso2022.c"
        if ($48) { __label__ = 20; break; } else { __label__ = 12; break; } //@line 712 "_codecs_iso2022.c"
      case 12: // $bb11
        var $49=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $50=$49; //@line 712 "_codecs_iso2022.c"
        var $51=HEAP[$50]; //@line 712 "_codecs_iso2022.c"
        var $52=($51)!=126; //@line 712 "_codecs_iso2022.c"
        if ($52) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 712 "_codecs_iso2022.c"
      case 13: // $bb12
        var $53=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $54=$53+1; //@line 712 "_codecs_iso2022.c"
        var $55=HEAP[$54]; //@line 712 "_codecs_iso2022.c"
        var $56=($55)==123; //@line 712 "_codecs_iso2022.c"
        if ($56) { __label__ = 20; break; } else { __label__ = 14; break; } //@line 712 "_codecs_iso2022.c"
      case 14: // $bb13
        var $57=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $58=$57; //@line 712 "_codecs_iso2022.c"
        var $59=HEAP[$58]; //@line 712 "_codecs_iso2022.c"
        var $60=($59)!=126; //@line 712 "_codecs_iso2022.c"
        if ($60) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 712 "_codecs_iso2022.c"
      case 15: // $bb14
        var $61=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $62=$61+1; //@line 712 "_codecs_iso2022.c"
        var $63=HEAP[$62]; //@line 712 "_codecs_iso2022.c"
        var $64=($63)==124; //@line 712 "_codecs_iso2022.c"
        if ($64) { __label__ = 20; break; } else { __label__ = 16; break; } //@line 712 "_codecs_iso2022.c"
      case 16: // $bb15
        var $65=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $66=$65; //@line 712 "_codecs_iso2022.c"
        var $67=HEAP[$66]; //@line 712 "_codecs_iso2022.c"
        var $68=($67)!=126; //@line 712 "_codecs_iso2022.c"
        if ($68) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 712 "_codecs_iso2022.c"
      case 17: // $bb16
        var $69=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $70=$69+1; //@line 712 "_codecs_iso2022.c"
        var $71=HEAP[$70]; //@line 712 "_codecs_iso2022.c"
        var $72=($71)==125; //@line 712 "_codecs_iso2022.c"
        if ($72) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 712 "_codecs_iso2022.c"
      case 18: // $bb17
        var $73=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $74=$73; //@line 712 "_codecs_iso2022.c"
        var $75=HEAP[$74]; //@line 712 "_codecs_iso2022.c"
        var $76=($75)!=126; //@line 712 "_codecs_iso2022.c"
        if ($76) { __label__ = 21; break; } else { __label__ = 19; break; } //@line 712 "_codecs_iso2022.c"
      case 19: // $bb18
        var $77=$data_addr; //@line 712 "_codecs_iso2022.c"
        var $78=$77+1; //@line 712 "_codecs_iso2022.c"
        var $79=HEAP[$78]; //@line 712 "_codecs_iso2022.c"
        var $80=($79)==126; //@line 712 "_codecs_iso2022.c"
        if ($80) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 712 "_codecs_iso2022.c"
      case 20: // $bb19
        $0=65535; //@line 712 "_codecs_iso2022.c"
        __label__ = 43; break; //@line 712 "_codecs_iso2022.c"
      case 21: // $bb20
        var $81=$data_addr; //@line 713 "_codecs_iso2022.c"
        var $82=$81; //@line 713 "_codecs_iso2022.c"
        var $83=HEAP[$82]; //@line 713 "_codecs_iso2022.c"
        var $84=($83)!=33; //@line 713 "_codecs_iso2022.c"
        if ($84) { __label__ = 24; break; } else { __label__ = 22; break; } //@line 713 "_codecs_iso2022.c"
      case 22: // $bb21
        var $85=$data_addr; //@line 713 "_codecs_iso2022.c"
        var $86=$85+1; //@line 713 "_codecs_iso2022.c"
        var $87=HEAP[$86]; //@line 713 "_codecs_iso2022.c"
        var $88=($87)!=64; //@line 713 "_codecs_iso2022.c"
        if ($88) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 713 "_codecs_iso2022.c"
      case 23: // $bb22
        $0=65340; //@line 714 "_codecs_iso2022.c"
        __label__ = 43; break; //@line 714 "_codecs_iso2022.c"
      case 24: // $bb23
        var $89=HEAP[_jisx0208_decmap]; //@line 715 "_codecs_iso2022.c"
        var $90=$data_addr; //@line 715 "_codecs_iso2022.c"
        var $91=$90; //@line 715 "_codecs_iso2022.c"
        var $92=HEAP[$91]; //@line 715 "_codecs_iso2022.c"
        var $93=($92); //@line 715 "_codecs_iso2022.c"
        var $94=$89+8*$93; //@line 715 "_codecs_iso2022.c"
        var $95=$94; //@line 715 "_codecs_iso2022.c"
        var $96=HEAP[$95]; //@line 715 "_codecs_iso2022.c"
        var $97=$96; //@line 715 "_codecs_iso2022.c"
        var $98=($97)==0; //@line 715 "_codecs_iso2022.c"
        if ($98) { __label__ = 28; break; } else { __label__ = 25; break; } //@line 715 "_codecs_iso2022.c"
      case 25: // $bb24
        var $99=$data_addr; //@line 715 "_codecs_iso2022.c"
        var $100=$99+1; //@line 715 "_codecs_iso2022.c"
        var $101=HEAP[$100]; //@line 715 "_codecs_iso2022.c"
        var $102=HEAP[_jisx0208_decmap]; //@line 715 "_codecs_iso2022.c"
        var $103=$data_addr; //@line 715 "_codecs_iso2022.c"
        var $104=$103; //@line 715 "_codecs_iso2022.c"
        var $105=HEAP[$104]; //@line 715 "_codecs_iso2022.c"
        var $106=($105); //@line 715 "_codecs_iso2022.c"
        var $107=$102+8*$106; //@line 715 "_codecs_iso2022.c"
        var $108=$107+4; //@line 715 "_codecs_iso2022.c"
        var $109=HEAP[$108]; //@line 715 "_codecs_iso2022.c"
        var $110=($101) < ($109); //@line 715 "_codecs_iso2022.c"
        if ($110) { __label__ = 28; break; } else { __label__ = 26; break; } //@line 715 "_codecs_iso2022.c"
      case 26: // $bb25
        var $111=$data_addr; //@line 715 "_codecs_iso2022.c"
        var $112=$111+1; //@line 715 "_codecs_iso2022.c"
        var $113=HEAP[$112]; //@line 715 "_codecs_iso2022.c"
        var $114=HEAP[_jisx0208_decmap]; //@line 715 "_codecs_iso2022.c"
        var $115=$data_addr; //@line 715 "_codecs_iso2022.c"
        var $116=$115; //@line 715 "_codecs_iso2022.c"
        var $117=HEAP[$116]; //@line 715 "_codecs_iso2022.c"
        var $118=($117); //@line 715 "_codecs_iso2022.c"
        var $119=$114+8*$118; //@line 715 "_codecs_iso2022.c"
        var $120=$119+5; //@line 715 "_codecs_iso2022.c"
        var $121=HEAP[$120]; //@line 715 "_codecs_iso2022.c"
        var $122=($113) > ($121); //@line 715 "_codecs_iso2022.c"
        if ($122) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 715 "_codecs_iso2022.c"
      case 27: // $bb26
        var $123=HEAP[_jisx0208_decmap]; //@line 715 "_codecs_iso2022.c"
        var $124=$data_addr; //@line 715 "_codecs_iso2022.c"
        var $125=$124; //@line 715 "_codecs_iso2022.c"
        var $126=HEAP[$125]; //@line 715 "_codecs_iso2022.c"
        var $127=($126); //@line 715 "_codecs_iso2022.c"
        var $128=$123+8*$127; //@line 715 "_codecs_iso2022.c"
        var $129=$128; //@line 715 "_codecs_iso2022.c"
        var $130=HEAP[$129]; //@line 715 "_codecs_iso2022.c"
        var $131=$data_addr; //@line 715 "_codecs_iso2022.c"
        var $132=$131+1; //@line 715 "_codecs_iso2022.c"
        var $133=HEAP[$132]; //@line 715 "_codecs_iso2022.c"
        var $134=($133); //@line 715 "_codecs_iso2022.c"
        var $135=HEAP[_jisx0208_decmap]; //@line 715 "_codecs_iso2022.c"
        var $136=$data_addr; //@line 715 "_codecs_iso2022.c"
        var $137=$136; //@line 715 "_codecs_iso2022.c"
        var $138=HEAP[$137]; //@line 715 "_codecs_iso2022.c"
        var $139=($138); //@line 715 "_codecs_iso2022.c"
        var $140=$135+8*$139; //@line 715 "_codecs_iso2022.c"
        var $141=$140+4; //@line 715 "_codecs_iso2022.c"
        var $142=HEAP[$141]; //@line 715 "_codecs_iso2022.c"
        var $143=($142); //@line 715 "_codecs_iso2022.c"
        var $144=($134) - ($143); //@line 715 "_codecs_iso2022.c"
        var $145=$130+2*$144; //@line 715 "_codecs_iso2022.c"
        var $146=HEAP[$145]; //@line 715 "_codecs_iso2022.c"
        var $147=($146); //@line 715 "_codecs_iso2022.c"
        $u=$147; //@line 715 "_codecs_iso2022.c"
        var $148=$u; //@line 715 "_codecs_iso2022.c"
        var $149=($148)==65534; //@line 715 "_codecs_iso2022.c"
        if ($149) { __label__ = 28; break; } else { __label__ = 42; break; } //@line 715 "_codecs_iso2022.c"
      case 28: // $bb28
        var $150=HEAP[_jisx0213_1_bmp_decmap]; //@line 716 "_codecs_iso2022.c"
        var $151=$data_addr; //@line 716 "_codecs_iso2022.c"
        var $152=$151; //@line 716 "_codecs_iso2022.c"
        var $153=HEAP[$152]; //@line 716 "_codecs_iso2022.c"
        var $154=($153); //@line 716 "_codecs_iso2022.c"
        var $155=$150+8*$154; //@line 716 "_codecs_iso2022.c"
        var $156=$155; //@line 716 "_codecs_iso2022.c"
        var $157=HEAP[$156]; //@line 716 "_codecs_iso2022.c"
        var $158=$157; //@line 716 "_codecs_iso2022.c"
        var $159=($158)==0; //@line 716 "_codecs_iso2022.c"
        if ($159) { __label__ = 32; break; } else { __label__ = 29; break; } //@line 716 "_codecs_iso2022.c"
      case 29: // $bb29
        var $160=$data_addr; //@line 716 "_codecs_iso2022.c"
        var $161=$160+1; //@line 716 "_codecs_iso2022.c"
        var $162=HEAP[$161]; //@line 716 "_codecs_iso2022.c"
        var $163=HEAP[_jisx0213_1_bmp_decmap]; //@line 716 "_codecs_iso2022.c"
        var $164=$data_addr; //@line 716 "_codecs_iso2022.c"
        var $165=$164; //@line 716 "_codecs_iso2022.c"
        var $166=HEAP[$165]; //@line 716 "_codecs_iso2022.c"
        var $167=($166); //@line 716 "_codecs_iso2022.c"
        var $168=$163+8*$167; //@line 716 "_codecs_iso2022.c"
        var $169=$168+4; //@line 716 "_codecs_iso2022.c"
        var $170=HEAP[$169]; //@line 716 "_codecs_iso2022.c"
        var $171=($162) < ($170); //@line 716 "_codecs_iso2022.c"
        if ($171) { __label__ = 32; break; } else { __label__ = 30; break; } //@line 716 "_codecs_iso2022.c"
      case 30: // $bb30
        var $172=$data_addr; //@line 716 "_codecs_iso2022.c"
        var $173=$172+1; //@line 716 "_codecs_iso2022.c"
        var $174=HEAP[$173]; //@line 716 "_codecs_iso2022.c"
        var $175=HEAP[_jisx0213_1_bmp_decmap]; //@line 716 "_codecs_iso2022.c"
        var $176=$data_addr; //@line 716 "_codecs_iso2022.c"
        var $177=$176; //@line 716 "_codecs_iso2022.c"
        var $178=HEAP[$177]; //@line 716 "_codecs_iso2022.c"
        var $179=($178); //@line 716 "_codecs_iso2022.c"
        var $180=$175+8*$179; //@line 716 "_codecs_iso2022.c"
        var $181=$180+5; //@line 716 "_codecs_iso2022.c"
        var $182=HEAP[$181]; //@line 716 "_codecs_iso2022.c"
        var $183=($174) > ($182); //@line 716 "_codecs_iso2022.c"
        if ($183) { __label__ = 32; break; } else { __label__ = 31; break; } //@line 716 "_codecs_iso2022.c"
      case 31: // $bb31
        var $184=HEAP[_jisx0213_1_bmp_decmap]; //@line 716 "_codecs_iso2022.c"
        var $185=$data_addr; //@line 716 "_codecs_iso2022.c"
        var $186=$185; //@line 716 "_codecs_iso2022.c"
        var $187=HEAP[$186]; //@line 716 "_codecs_iso2022.c"
        var $188=($187); //@line 716 "_codecs_iso2022.c"
        var $189=$184+8*$188; //@line 716 "_codecs_iso2022.c"
        var $190=$189; //@line 716 "_codecs_iso2022.c"
        var $191=HEAP[$190]; //@line 716 "_codecs_iso2022.c"
        var $192=$data_addr; //@line 716 "_codecs_iso2022.c"
        var $193=$192+1; //@line 716 "_codecs_iso2022.c"
        var $194=HEAP[$193]; //@line 716 "_codecs_iso2022.c"
        var $195=($194); //@line 716 "_codecs_iso2022.c"
        var $196=HEAP[_jisx0213_1_bmp_decmap]; //@line 716 "_codecs_iso2022.c"
        var $197=$data_addr; //@line 716 "_codecs_iso2022.c"
        var $198=$197; //@line 716 "_codecs_iso2022.c"
        var $199=HEAP[$198]; //@line 716 "_codecs_iso2022.c"
        var $200=($199); //@line 716 "_codecs_iso2022.c"
        var $201=$196+8*$200; //@line 716 "_codecs_iso2022.c"
        var $202=$201+4; //@line 716 "_codecs_iso2022.c"
        var $203=HEAP[$202]; //@line 716 "_codecs_iso2022.c"
        var $204=($203); //@line 716 "_codecs_iso2022.c"
        var $205=($195) - ($204); //@line 716 "_codecs_iso2022.c"
        var $206=$191+2*$205; //@line 716 "_codecs_iso2022.c"
        var $207=HEAP[$206]; //@line 716 "_codecs_iso2022.c"
        var $208=($207); //@line 716 "_codecs_iso2022.c"
        $u=$208; //@line 716 "_codecs_iso2022.c"
        var $209=$u; //@line 716 "_codecs_iso2022.c"
        var $210=($209)==65534; //@line 716 "_codecs_iso2022.c"
        if ($210) { __label__ = 32; break; } else { __label__ = 42; break; } //@line 716 "_codecs_iso2022.c"
      case 32: // $bb33
        var $211=HEAP[_jisx0213_1_emp_decmap]; //@line 717 "_codecs_iso2022.c"
        var $212=$data_addr; //@line 717 "_codecs_iso2022.c"
        var $213=$212; //@line 717 "_codecs_iso2022.c"
        var $214=HEAP[$213]; //@line 717 "_codecs_iso2022.c"
        var $215=($214); //@line 717 "_codecs_iso2022.c"
        var $216=$211+8*$215; //@line 717 "_codecs_iso2022.c"
        var $217=$216; //@line 717 "_codecs_iso2022.c"
        var $218=HEAP[$217]; //@line 717 "_codecs_iso2022.c"
        var $219=$218; //@line 717 "_codecs_iso2022.c"
        var $220=($219)==0; //@line 717 "_codecs_iso2022.c"
        if ($220) { __label__ = 37; break; } else { __label__ = 33; break; } //@line 717 "_codecs_iso2022.c"
      case 33: // $bb34
        var $221=$data_addr; //@line 717 "_codecs_iso2022.c"
        var $222=$221+1; //@line 717 "_codecs_iso2022.c"
        var $223=HEAP[$222]; //@line 717 "_codecs_iso2022.c"
        var $224=HEAP[_jisx0213_1_emp_decmap]; //@line 717 "_codecs_iso2022.c"
        var $225=$data_addr; //@line 717 "_codecs_iso2022.c"
        var $226=$225; //@line 717 "_codecs_iso2022.c"
        var $227=HEAP[$226]; //@line 717 "_codecs_iso2022.c"
        var $228=($227); //@line 717 "_codecs_iso2022.c"
        var $229=$224+8*$228; //@line 717 "_codecs_iso2022.c"
        var $230=$229+4; //@line 717 "_codecs_iso2022.c"
        var $231=HEAP[$230]; //@line 717 "_codecs_iso2022.c"
        var $232=($223) < ($231); //@line 717 "_codecs_iso2022.c"
        if ($232) { __label__ = 37; break; } else { __label__ = 34; break; } //@line 717 "_codecs_iso2022.c"
      case 34: // $bb35
        var $233=$data_addr; //@line 717 "_codecs_iso2022.c"
        var $234=$233+1; //@line 717 "_codecs_iso2022.c"
        var $235=HEAP[$234]; //@line 717 "_codecs_iso2022.c"
        var $236=HEAP[_jisx0213_1_emp_decmap]; //@line 717 "_codecs_iso2022.c"
        var $237=$data_addr; //@line 717 "_codecs_iso2022.c"
        var $238=$237; //@line 717 "_codecs_iso2022.c"
        var $239=HEAP[$238]; //@line 717 "_codecs_iso2022.c"
        var $240=($239); //@line 717 "_codecs_iso2022.c"
        var $241=$236+8*$240; //@line 717 "_codecs_iso2022.c"
        var $242=$241+5; //@line 717 "_codecs_iso2022.c"
        var $243=HEAP[$242]; //@line 717 "_codecs_iso2022.c"
        var $244=($235) > ($243); //@line 717 "_codecs_iso2022.c"
        if ($244) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 717 "_codecs_iso2022.c"
      case 35: // $bb36
        var $245=HEAP[_jisx0213_1_emp_decmap]; //@line 717 "_codecs_iso2022.c"
        var $246=$data_addr; //@line 717 "_codecs_iso2022.c"
        var $247=$246; //@line 717 "_codecs_iso2022.c"
        var $248=HEAP[$247]; //@line 717 "_codecs_iso2022.c"
        var $249=($248); //@line 717 "_codecs_iso2022.c"
        var $250=$245+8*$249; //@line 717 "_codecs_iso2022.c"
        var $251=$250; //@line 717 "_codecs_iso2022.c"
        var $252=HEAP[$251]; //@line 717 "_codecs_iso2022.c"
        var $253=$data_addr; //@line 717 "_codecs_iso2022.c"
        var $254=$253+1; //@line 717 "_codecs_iso2022.c"
        var $255=HEAP[$254]; //@line 717 "_codecs_iso2022.c"
        var $256=($255); //@line 717 "_codecs_iso2022.c"
        var $257=HEAP[_jisx0213_1_emp_decmap]; //@line 717 "_codecs_iso2022.c"
        var $258=$data_addr; //@line 717 "_codecs_iso2022.c"
        var $259=$258; //@line 717 "_codecs_iso2022.c"
        var $260=HEAP[$259]; //@line 717 "_codecs_iso2022.c"
        var $261=($260); //@line 717 "_codecs_iso2022.c"
        var $262=$257+8*$261; //@line 717 "_codecs_iso2022.c"
        var $263=$262+4; //@line 717 "_codecs_iso2022.c"
        var $264=HEAP[$263]; //@line 717 "_codecs_iso2022.c"
        var $265=($264); //@line 717 "_codecs_iso2022.c"
        var $266=($256) - ($265); //@line 717 "_codecs_iso2022.c"
        var $267=$252+2*$266; //@line 717 "_codecs_iso2022.c"
        var $268=HEAP[$267]; //@line 717 "_codecs_iso2022.c"
        var $269=($268); //@line 717 "_codecs_iso2022.c"
        $u=$269; //@line 717 "_codecs_iso2022.c"
        var $270=$u; //@line 717 "_codecs_iso2022.c"
        var $271=($270)==65534; //@line 717 "_codecs_iso2022.c"
        if ($271) { __label__ = 37; break; } else { __label__ = 36; break; } //@line 717 "_codecs_iso2022.c"
      case 36: // $bb37
        var $272=$u; //@line 718 "_codecs_iso2022.c"
        var $273=($272) | 131072; //@line 718 "_codecs_iso2022.c"
        $u=$273; //@line 718 "_codecs_iso2022.c"
        __label__ = 42; break; //@line 718 "_codecs_iso2022.c"
      case 37: // $bb38
        var $274=HEAP[_jisx0213_pair_decmap]; //@line 719 "_codecs_iso2022.c"
        var $275=$data_addr; //@line 719 "_codecs_iso2022.c"
        var $276=$275; //@line 719 "_codecs_iso2022.c"
        var $277=HEAP[$276]; //@line 719 "_codecs_iso2022.c"
        var $278=($277); //@line 719 "_codecs_iso2022.c"
        var $279=$274+8*$278; //@line 719 "_codecs_iso2022.c"
        var $280=$279; //@line 719 "_codecs_iso2022.c"
        var $281=HEAP[$280]; //@line 719 "_codecs_iso2022.c"
        var $282=$281; //@line 719 "_codecs_iso2022.c"
        var $283=($282)==0; //@line 719 "_codecs_iso2022.c"
        if ($283) { __label__ = 41; break; } else { __label__ = 38; break; } //@line 719 "_codecs_iso2022.c"
      case 38: // $bb39
        var $284=$data_addr; //@line 719 "_codecs_iso2022.c"
        var $285=$284+1; //@line 719 "_codecs_iso2022.c"
        var $286=HEAP[$285]; //@line 719 "_codecs_iso2022.c"
        var $287=HEAP[_jisx0213_pair_decmap]; //@line 719 "_codecs_iso2022.c"
        var $288=$data_addr; //@line 719 "_codecs_iso2022.c"
        var $289=$288; //@line 719 "_codecs_iso2022.c"
        var $290=HEAP[$289]; //@line 719 "_codecs_iso2022.c"
        var $291=($290); //@line 719 "_codecs_iso2022.c"
        var $292=$287+8*$291; //@line 719 "_codecs_iso2022.c"
        var $293=$292+4; //@line 719 "_codecs_iso2022.c"
        var $294=HEAP[$293]; //@line 719 "_codecs_iso2022.c"
        var $295=($286) < ($294); //@line 719 "_codecs_iso2022.c"
        if ($295) { __label__ = 41; break; } else { __label__ = 39; break; } //@line 719 "_codecs_iso2022.c"
      case 39: // $bb40
        var $296=$data_addr; //@line 719 "_codecs_iso2022.c"
        var $297=$296+1; //@line 719 "_codecs_iso2022.c"
        var $298=HEAP[$297]; //@line 719 "_codecs_iso2022.c"
        var $299=HEAP[_jisx0213_pair_decmap]; //@line 719 "_codecs_iso2022.c"
        var $300=$data_addr; //@line 719 "_codecs_iso2022.c"
        var $301=$300; //@line 719 "_codecs_iso2022.c"
        var $302=HEAP[$301]; //@line 719 "_codecs_iso2022.c"
        var $303=($302); //@line 719 "_codecs_iso2022.c"
        var $304=$299+8*$303; //@line 719 "_codecs_iso2022.c"
        var $305=$304+5; //@line 719 "_codecs_iso2022.c"
        var $306=HEAP[$305]; //@line 719 "_codecs_iso2022.c"
        var $307=($298) > ($306); //@line 719 "_codecs_iso2022.c"
        if ($307) { __label__ = 41; break; } else { __label__ = 40; break; } //@line 719 "_codecs_iso2022.c"
      case 40: // $bb41
        var $308=HEAP[_jisx0213_pair_decmap]; //@line 719 "_codecs_iso2022.c"
        var $309=$data_addr; //@line 719 "_codecs_iso2022.c"
        var $310=$309; //@line 719 "_codecs_iso2022.c"
        var $311=HEAP[$310]; //@line 719 "_codecs_iso2022.c"
        var $312=($311); //@line 719 "_codecs_iso2022.c"
        var $313=$308+8*$312; //@line 719 "_codecs_iso2022.c"
        var $314=$313; //@line 719 "_codecs_iso2022.c"
        var $315=HEAP[$314]; //@line 719 "_codecs_iso2022.c"
        var $316=$data_addr; //@line 719 "_codecs_iso2022.c"
        var $317=$316+1; //@line 719 "_codecs_iso2022.c"
        var $318=HEAP[$317]; //@line 719 "_codecs_iso2022.c"
        var $319=($318); //@line 719 "_codecs_iso2022.c"
        var $320=HEAP[_jisx0213_pair_decmap]; //@line 719 "_codecs_iso2022.c"
        var $321=$data_addr; //@line 719 "_codecs_iso2022.c"
        var $322=$321; //@line 719 "_codecs_iso2022.c"
        var $323=HEAP[$322]; //@line 719 "_codecs_iso2022.c"
        var $324=($323); //@line 719 "_codecs_iso2022.c"
        var $325=$320+8*$324; //@line 719 "_codecs_iso2022.c"
        var $326=$325+4; //@line 719 "_codecs_iso2022.c"
        var $327=HEAP[$326]; //@line 719 "_codecs_iso2022.c"
        var $328=($327); //@line 719 "_codecs_iso2022.c"
        var $329=($319) - ($328); //@line 719 "_codecs_iso2022.c"
        var $330=$315+4*$329; //@line 719 "_codecs_iso2022.c"
        var $331=HEAP[$330]; //@line 719 "_codecs_iso2022.c"
        $u=$331; //@line 719 "_codecs_iso2022.c"
        var $332=$u; //@line 719 "_codecs_iso2022.c"
        var $333=($332)==65534; //@line 719 "_codecs_iso2022.c"
        if ($333) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 719 "_codecs_iso2022.c"
      case 41: // $bb43
        $0=65535; //@line 721 "_codecs_iso2022.c"
        __label__ = 43; break; //@line 721 "_codecs_iso2022.c"
      case 42: // $bb44
        var $334=$u; //@line 722 "_codecs_iso2022.c"
        $0=$334; //@line 722 "_codecs_iso2022.c"
        __label__ = 43; break; //@line 722 "_codecs_iso2022.c"
      case 43: // $bb45
        var $335=$0; //@line 712 "_codecs_iso2022.c"
        $retval=$335; //@line 712 "_codecs_iso2022.c"
        var $retval46=$retval; //@line 712 "_codecs_iso2022.c"
        ;
        return $retval46; //@line 712 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2000_2_decoder($data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $retval;
        var $0;
        var $u;
        $data_addr=$data;
        var $1=$data_addr; //@line 729 "_codecs_iso2022.c"
        var $2=$1; //@line 729 "_codecs_iso2022.c"
        var $3=HEAP[$2]; //@line 729 "_codecs_iso2022.c"
        var $4=($3)==125; //@line 729 "_codecs_iso2022.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 729 "_codecs_iso2022.c"
      case 1: // $bb
        var $5=$data_addr; //@line 729 "_codecs_iso2022.c"
        var $6=$5+1; //@line 729 "_codecs_iso2022.c"
        var $7=HEAP[$6]; //@line 729 "_codecs_iso2022.c"
        var $8=($7)==59; //@line 729 "_codecs_iso2022.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 729 "_codecs_iso2022.c"
      case 2: // $bb1
        $u=39709; //@line 729 "_codecs_iso2022.c"
        __label__ = 3; break; //@line 729 "_codecs_iso2022.c"
      case 3: // $bb2
        var $9=HEAP[_jisx0213_2_bmp_decmap]; //@line 730 "_codecs_iso2022.c"
        var $10=$data_addr; //@line 730 "_codecs_iso2022.c"
        var $11=$10; //@line 730 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 730 "_codecs_iso2022.c"
        var $13=($12); //@line 730 "_codecs_iso2022.c"
        var $14=$9+8*$13; //@line 730 "_codecs_iso2022.c"
        var $15=$14; //@line 730 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 730 "_codecs_iso2022.c"
        var $17=$16; //@line 730 "_codecs_iso2022.c"
        var $18=($17)==0; //@line 730 "_codecs_iso2022.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 730 "_codecs_iso2022.c"
      case 4: // $bb3
        var $19=$data_addr; //@line 730 "_codecs_iso2022.c"
        var $20=$19+1; //@line 730 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 730 "_codecs_iso2022.c"
        var $22=HEAP[_jisx0213_2_bmp_decmap]; //@line 730 "_codecs_iso2022.c"
        var $23=$data_addr; //@line 730 "_codecs_iso2022.c"
        var $24=$23; //@line 730 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 730 "_codecs_iso2022.c"
        var $26=($25); //@line 730 "_codecs_iso2022.c"
        var $27=$22+8*$26; //@line 730 "_codecs_iso2022.c"
        var $28=$27+4; //@line 730 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 730 "_codecs_iso2022.c"
        var $30=($21) < ($29); //@line 730 "_codecs_iso2022.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 730 "_codecs_iso2022.c"
      case 5: // $bb4
        var $31=$data_addr; //@line 730 "_codecs_iso2022.c"
        var $32=$31+1; //@line 730 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 730 "_codecs_iso2022.c"
        var $34=HEAP[_jisx0213_2_bmp_decmap]; //@line 730 "_codecs_iso2022.c"
        var $35=$data_addr; //@line 730 "_codecs_iso2022.c"
        var $36=$35; //@line 730 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 730 "_codecs_iso2022.c"
        var $38=($37); //@line 730 "_codecs_iso2022.c"
        var $39=$34+8*$38; //@line 730 "_codecs_iso2022.c"
        var $40=$39+5; //@line 730 "_codecs_iso2022.c"
        var $41=HEAP[$40]; //@line 730 "_codecs_iso2022.c"
        var $42=($33) > ($41); //@line 730 "_codecs_iso2022.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 730 "_codecs_iso2022.c"
      case 6: // $bb5
        var $43=HEAP[_jisx0213_2_bmp_decmap]; //@line 730 "_codecs_iso2022.c"
        var $44=$data_addr; //@line 730 "_codecs_iso2022.c"
        var $45=$44; //@line 730 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 730 "_codecs_iso2022.c"
        var $47=($46); //@line 730 "_codecs_iso2022.c"
        var $48=$43+8*$47; //@line 730 "_codecs_iso2022.c"
        var $49=$48; //@line 730 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 730 "_codecs_iso2022.c"
        var $51=$data_addr; //@line 730 "_codecs_iso2022.c"
        var $52=$51+1; //@line 730 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 730 "_codecs_iso2022.c"
        var $54=($53); //@line 730 "_codecs_iso2022.c"
        var $55=HEAP[_jisx0213_2_bmp_decmap]; //@line 730 "_codecs_iso2022.c"
        var $56=$data_addr; //@line 730 "_codecs_iso2022.c"
        var $57=$56; //@line 730 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 730 "_codecs_iso2022.c"
        var $59=($58); //@line 730 "_codecs_iso2022.c"
        var $60=$55+8*$59; //@line 730 "_codecs_iso2022.c"
        var $61=$60+4; //@line 730 "_codecs_iso2022.c"
        var $62=HEAP[$61]; //@line 730 "_codecs_iso2022.c"
        var $63=($62); //@line 730 "_codecs_iso2022.c"
        var $64=($54) - ($63); //@line 730 "_codecs_iso2022.c"
        var $65=$50+2*$64; //@line 730 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 730 "_codecs_iso2022.c"
        var $67=($66); //@line 730 "_codecs_iso2022.c"
        $u=$67; //@line 730 "_codecs_iso2022.c"
        var $68=$u; //@line 730 "_codecs_iso2022.c"
        var $69=($68)==65534; //@line 730 "_codecs_iso2022.c"
        if ($69) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 730 "_codecs_iso2022.c"
      case 7: // $bb7
        var $70=HEAP[_jisx0213_2_emp_decmap]; //@line 731 "_codecs_iso2022.c"
        var $71=$data_addr; //@line 731 "_codecs_iso2022.c"
        var $72=$71; //@line 731 "_codecs_iso2022.c"
        var $73=HEAP[$72]; //@line 731 "_codecs_iso2022.c"
        var $74=($73); //@line 731 "_codecs_iso2022.c"
        var $75=$70+8*$74; //@line 731 "_codecs_iso2022.c"
        var $76=$75; //@line 731 "_codecs_iso2022.c"
        var $77=HEAP[$76]; //@line 731 "_codecs_iso2022.c"
        var $78=$77; //@line 731 "_codecs_iso2022.c"
        var $79=($78)==0; //@line 731 "_codecs_iso2022.c"
        if ($79) { __label__ = 12; break; } else { __label__ = 8; break; } //@line 731 "_codecs_iso2022.c"
      case 8: // $bb8
        var $80=$data_addr; //@line 731 "_codecs_iso2022.c"
        var $81=$80+1; //@line 731 "_codecs_iso2022.c"
        var $82=HEAP[$81]; //@line 731 "_codecs_iso2022.c"
        var $83=HEAP[_jisx0213_2_emp_decmap]; //@line 731 "_codecs_iso2022.c"
        var $84=$data_addr; //@line 731 "_codecs_iso2022.c"
        var $85=$84; //@line 731 "_codecs_iso2022.c"
        var $86=HEAP[$85]; //@line 731 "_codecs_iso2022.c"
        var $87=($86); //@line 731 "_codecs_iso2022.c"
        var $88=$83+8*$87; //@line 731 "_codecs_iso2022.c"
        var $89=$88+4; //@line 731 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 731 "_codecs_iso2022.c"
        var $91=($82) < ($90); //@line 731 "_codecs_iso2022.c"
        if ($91) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 731 "_codecs_iso2022.c"
      case 9: // $bb9
        var $92=$data_addr; //@line 731 "_codecs_iso2022.c"
        var $93=$92+1; //@line 731 "_codecs_iso2022.c"
        var $94=HEAP[$93]; //@line 731 "_codecs_iso2022.c"
        var $95=HEAP[_jisx0213_2_emp_decmap]; //@line 731 "_codecs_iso2022.c"
        var $96=$data_addr; //@line 731 "_codecs_iso2022.c"
        var $97=$96; //@line 731 "_codecs_iso2022.c"
        var $98=HEAP[$97]; //@line 731 "_codecs_iso2022.c"
        var $99=($98); //@line 731 "_codecs_iso2022.c"
        var $100=$95+8*$99; //@line 731 "_codecs_iso2022.c"
        var $101=$100+5; //@line 731 "_codecs_iso2022.c"
        var $102=HEAP[$101]; //@line 731 "_codecs_iso2022.c"
        var $103=($94) > ($102); //@line 731 "_codecs_iso2022.c"
        if ($103) { __label__ = 12; break; } else { __label__ = 10; break; } //@line 731 "_codecs_iso2022.c"
      case 10: // $bb10
        var $104=HEAP[_jisx0213_2_emp_decmap]; //@line 731 "_codecs_iso2022.c"
        var $105=$data_addr; //@line 731 "_codecs_iso2022.c"
        var $106=$105; //@line 731 "_codecs_iso2022.c"
        var $107=HEAP[$106]; //@line 731 "_codecs_iso2022.c"
        var $108=($107); //@line 731 "_codecs_iso2022.c"
        var $109=$104+8*$108; //@line 731 "_codecs_iso2022.c"
        var $110=$109; //@line 731 "_codecs_iso2022.c"
        var $111=HEAP[$110]; //@line 731 "_codecs_iso2022.c"
        var $112=$data_addr; //@line 731 "_codecs_iso2022.c"
        var $113=$112+1; //@line 731 "_codecs_iso2022.c"
        var $114=HEAP[$113]; //@line 731 "_codecs_iso2022.c"
        var $115=($114); //@line 731 "_codecs_iso2022.c"
        var $116=HEAP[_jisx0213_2_emp_decmap]; //@line 731 "_codecs_iso2022.c"
        var $117=$data_addr; //@line 731 "_codecs_iso2022.c"
        var $118=$117; //@line 731 "_codecs_iso2022.c"
        var $119=HEAP[$118]; //@line 731 "_codecs_iso2022.c"
        var $120=($119); //@line 731 "_codecs_iso2022.c"
        var $121=$116+8*$120; //@line 731 "_codecs_iso2022.c"
        var $122=$121+4; //@line 731 "_codecs_iso2022.c"
        var $123=HEAP[$122]; //@line 731 "_codecs_iso2022.c"
        var $124=($123); //@line 731 "_codecs_iso2022.c"
        var $125=($115) - ($124); //@line 731 "_codecs_iso2022.c"
        var $126=$111+2*$125; //@line 731 "_codecs_iso2022.c"
        var $127=HEAP[$126]; //@line 731 "_codecs_iso2022.c"
        var $128=($127); //@line 731 "_codecs_iso2022.c"
        $u=$128; //@line 731 "_codecs_iso2022.c"
        var $129=$u; //@line 731 "_codecs_iso2022.c"
        var $130=($129)==65534; //@line 731 "_codecs_iso2022.c"
        if ($130) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 731 "_codecs_iso2022.c"
      case 11: // $bb11
        var $131=$u; //@line 732 "_codecs_iso2022.c"
        var $132=($131) | 131072; //@line 732 "_codecs_iso2022.c"
        $u=$132; //@line 732 "_codecs_iso2022.c"
        __label__ = 13; break; //@line 732 "_codecs_iso2022.c"
      case 12: // $bb12
        $0=65535; //@line 734 "_codecs_iso2022.c"
        __label__ = 14; break; //@line 734 "_codecs_iso2022.c"
      case 13: // $bb13
        var $133=$u; //@line 735 "_codecs_iso2022.c"
        $0=$133; //@line 735 "_codecs_iso2022.c"
        __label__ = 14; break; //@line 735 "_codecs_iso2022.c"
      case 14: // $bb14
        var $134=$0; //@line 734 "_codecs_iso2022.c"
        $retval=$134; //@line 734 "_codecs_iso2022.c"
        var $retval15=$retval; //@line 734 "_codecs_iso2022.c"
        ;
        return $retval15; //@line 734 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2004_1_decoder($data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $retval;
        var $0;
        var $u;
        $data_addr=$data;
        var $1=$data_addr; //@line 743 "_codecs_iso2022.c"
        var $2=$1; //@line 743 "_codecs_iso2022.c"
        var $3=HEAP[$2]; //@line 743 "_codecs_iso2022.c"
        var $4=($3)!=33; //@line 743 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 743 "_codecs_iso2022.c"
      case 1: // $bb
        var $5=$data_addr; //@line 743 "_codecs_iso2022.c"
        var $6=$5+1; //@line 743 "_codecs_iso2022.c"
        var $7=HEAP[$6]; //@line 743 "_codecs_iso2022.c"
        var $8=($7)!=64; //@line 743 "_codecs_iso2022.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 743 "_codecs_iso2022.c"
      case 2: // $bb1
        $0=65340; //@line 744 "_codecs_iso2022.c"
        __label__ = 22; break; //@line 744 "_codecs_iso2022.c"
      case 3: // $bb2
        var $9=HEAP[_jisx0208_decmap]; //@line 745 "_codecs_iso2022.c"
        var $10=$data_addr; //@line 745 "_codecs_iso2022.c"
        var $11=$10; //@line 745 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 745 "_codecs_iso2022.c"
        var $13=($12); //@line 745 "_codecs_iso2022.c"
        var $14=$9+8*$13; //@line 745 "_codecs_iso2022.c"
        var $15=$14; //@line 745 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 745 "_codecs_iso2022.c"
        var $17=$16; //@line 745 "_codecs_iso2022.c"
        var $18=($17)==0; //@line 745 "_codecs_iso2022.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 4; break; } //@line 745 "_codecs_iso2022.c"
      case 4: // $bb3
        var $19=$data_addr; //@line 745 "_codecs_iso2022.c"
        var $20=$19+1; //@line 745 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 745 "_codecs_iso2022.c"
        var $22=HEAP[_jisx0208_decmap]; //@line 745 "_codecs_iso2022.c"
        var $23=$data_addr; //@line 745 "_codecs_iso2022.c"
        var $24=$23; //@line 745 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 745 "_codecs_iso2022.c"
        var $26=($25); //@line 745 "_codecs_iso2022.c"
        var $27=$22+8*$26; //@line 745 "_codecs_iso2022.c"
        var $28=$27+4; //@line 745 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 745 "_codecs_iso2022.c"
        var $30=($21) < ($29); //@line 745 "_codecs_iso2022.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 745 "_codecs_iso2022.c"
      case 5: // $bb4
        var $31=$data_addr; //@line 745 "_codecs_iso2022.c"
        var $32=$31+1; //@line 745 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 745 "_codecs_iso2022.c"
        var $34=HEAP[_jisx0208_decmap]; //@line 745 "_codecs_iso2022.c"
        var $35=$data_addr; //@line 745 "_codecs_iso2022.c"
        var $36=$35; //@line 745 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 745 "_codecs_iso2022.c"
        var $38=($37); //@line 745 "_codecs_iso2022.c"
        var $39=$34+8*$38; //@line 745 "_codecs_iso2022.c"
        var $40=$39+5; //@line 745 "_codecs_iso2022.c"
        var $41=HEAP[$40]; //@line 745 "_codecs_iso2022.c"
        var $42=($33) > ($41); //@line 745 "_codecs_iso2022.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 745 "_codecs_iso2022.c"
      case 6: // $bb5
        var $43=HEAP[_jisx0208_decmap]; //@line 745 "_codecs_iso2022.c"
        var $44=$data_addr; //@line 745 "_codecs_iso2022.c"
        var $45=$44; //@line 745 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 745 "_codecs_iso2022.c"
        var $47=($46); //@line 745 "_codecs_iso2022.c"
        var $48=$43+8*$47; //@line 745 "_codecs_iso2022.c"
        var $49=$48; //@line 745 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 745 "_codecs_iso2022.c"
        var $51=$data_addr; //@line 745 "_codecs_iso2022.c"
        var $52=$51+1; //@line 745 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 745 "_codecs_iso2022.c"
        var $54=($53); //@line 745 "_codecs_iso2022.c"
        var $55=HEAP[_jisx0208_decmap]; //@line 745 "_codecs_iso2022.c"
        var $56=$data_addr; //@line 745 "_codecs_iso2022.c"
        var $57=$56; //@line 745 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 745 "_codecs_iso2022.c"
        var $59=($58); //@line 745 "_codecs_iso2022.c"
        var $60=$55+8*$59; //@line 745 "_codecs_iso2022.c"
        var $61=$60+4; //@line 745 "_codecs_iso2022.c"
        var $62=HEAP[$61]; //@line 745 "_codecs_iso2022.c"
        var $63=($62); //@line 745 "_codecs_iso2022.c"
        var $64=($54) - ($63); //@line 745 "_codecs_iso2022.c"
        var $65=$50+2*$64; //@line 745 "_codecs_iso2022.c"
        var $66=HEAP[$65]; //@line 745 "_codecs_iso2022.c"
        var $67=($66); //@line 745 "_codecs_iso2022.c"
        $u=$67; //@line 745 "_codecs_iso2022.c"
        var $68=$u; //@line 745 "_codecs_iso2022.c"
        var $69=($68)==65534; //@line 745 "_codecs_iso2022.c"
        if ($69) { __label__ = 7; break; } else { __label__ = 21; break; } //@line 745 "_codecs_iso2022.c"
      case 7: // $bb7
        var $70=HEAP[_jisx0213_1_bmp_decmap]; //@line 746 "_codecs_iso2022.c"
        var $71=$data_addr; //@line 746 "_codecs_iso2022.c"
        var $72=$71; //@line 746 "_codecs_iso2022.c"
        var $73=HEAP[$72]; //@line 746 "_codecs_iso2022.c"
        var $74=($73); //@line 746 "_codecs_iso2022.c"
        var $75=$70+8*$74; //@line 746 "_codecs_iso2022.c"
        var $76=$75; //@line 746 "_codecs_iso2022.c"
        var $77=HEAP[$76]; //@line 746 "_codecs_iso2022.c"
        var $78=$77; //@line 746 "_codecs_iso2022.c"
        var $79=($78)==0; //@line 746 "_codecs_iso2022.c"
        if ($79) { __label__ = 11; break; } else { __label__ = 8; break; } //@line 746 "_codecs_iso2022.c"
      case 8: // $bb8
        var $80=$data_addr; //@line 746 "_codecs_iso2022.c"
        var $81=$80+1; //@line 746 "_codecs_iso2022.c"
        var $82=HEAP[$81]; //@line 746 "_codecs_iso2022.c"
        var $83=HEAP[_jisx0213_1_bmp_decmap]; //@line 746 "_codecs_iso2022.c"
        var $84=$data_addr; //@line 746 "_codecs_iso2022.c"
        var $85=$84; //@line 746 "_codecs_iso2022.c"
        var $86=HEAP[$85]; //@line 746 "_codecs_iso2022.c"
        var $87=($86); //@line 746 "_codecs_iso2022.c"
        var $88=$83+8*$87; //@line 746 "_codecs_iso2022.c"
        var $89=$88+4; //@line 746 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 746 "_codecs_iso2022.c"
        var $91=($82) < ($90); //@line 746 "_codecs_iso2022.c"
        if ($91) { __label__ = 11; break; } else { __label__ = 9; break; } //@line 746 "_codecs_iso2022.c"
      case 9: // $bb9
        var $92=$data_addr; //@line 746 "_codecs_iso2022.c"
        var $93=$92+1; //@line 746 "_codecs_iso2022.c"
        var $94=HEAP[$93]; //@line 746 "_codecs_iso2022.c"
        var $95=HEAP[_jisx0213_1_bmp_decmap]; //@line 746 "_codecs_iso2022.c"
        var $96=$data_addr; //@line 746 "_codecs_iso2022.c"
        var $97=$96; //@line 746 "_codecs_iso2022.c"
        var $98=HEAP[$97]; //@line 746 "_codecs_iso2022.c"
        var $99=($98); //@line 746 "_codecs_iso2022.c"
        var $100=$95+8*$99; //@line 746 "_codecs_iso2022.c"
        var $101=$100+5; //@line 746 "_codecs_iso2022.c"
        var $102=HEAP[$101]; //@line 746 "_codecs_iso2022.c"
        var $103=($94) > ($102); //@line 746 "_codecs_iso2022.c"
        if ($103) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 746 "_codecs_iso2022.c"
      case 10: // $bb10
        var $104=HEAP[_jisx0213_1_bmp_decmap]; //@line 746 "_codecs_iso2022.c"
        var $105=$data_addr; //@line 746 "_codecs_iso2022.c"
        var $106=$105; //@line 746 "_codecs_iso2022.c"
        var $107=HEAP[$106]; //@line 746 "_codecs_iso2022.c"
        var $108=($107); //@line 746 "_codecs_iso2022.c"
        var $109=$104+8*$108; //@line 746 "_codecs_iso2022.c"
        var $110=$109; //@line 746 "_codecs_iso2022.c"
        var $111=HEAP[$110]; //@line 746 "_codecs_iso2022.c"
        var $112=$data_addr; //@line 746 "_codecs_iso2022.c"
        var $113=$112+1; //@line 746 "_codecs_iso2022.c"
        var $114=HEAP[$113]; //@line 746 "_codecs_iso2022.c"
        var $115=($114); //@line 746 "_codecs_iso2022.c"
        var $116=HEAP[_jisx0213_1_bmp_decmap]; //@line 746 "_codecs_iso2022.c"
        var $117=$data_addr; //@line 746 "_codecs_iso2022.c"
        var $118=$117; //@line 746 "_codecs_iso2022.c"
        var $119=HEAP[$118]; //@line 746 "_codecs_iso2022.c"
        var $120=($119); //@line 746 "_codecs_iso2022.c"
        var $121=$116+8*$120; //@line 746 "_codecs_iso2022.c"
        var $122=$121+4; //@line 746 "_codecs_iso2022.c"
        var $123=HEAP[$122]; //@line 746 "_codecs_iso2022.c"
        var $124=($123); //@line 746 "_codecs_iso2022.c"
        var $125=($115) - ($124); //@line 746 "_codecs_iso2022.c"
        var $126=$111+2*$125; //@line 746 "_codecs_iso2022.c"
        var $127=HEAP[$126]; //@line 746 "_codecs_iso2022.c"
        var $128=($127); //@line 746 "_codecs_iso2022.c"
        $u=$128; //@line 746 "_codecs_iso2022.c"
        var $129=$u; //@line 746 "_codecs_iso2022.c"
        var $130=($129)==65534; //@line 746 "_codecs_iso2022.c"
        if ($130) { __label__ = 11; break; } else { __label__ = 21; break; } //@line 746 "_codecs_iso2022.c"
      case 11: // $bb12
        var $131=HEAP[_jisx0213_1_emp_decmap]; //@line 747 "_codecs_iso2022.c"
        var $132=$data_addr; //@line 747 "_codecs_iso2022.c"
        var $133=$132; //@line 747 "_codecs_iso2022.c"
        var $134=HEAP[$133]; //@line 747 "_codecs_iso2022.c"
        var $135=($134); //@line 747 "_codecs_iso2022.c"
        var $136=$131+8*$135; //@line 747 "_codecs_iso2022.c"
        var $137=$136; //@line 747 "_codecs_iso2022.c"
        var $138=HEAP[$137]; //@line 747 "_codecs_iso2022.c"
        var $139=$138; //@line 747 "_codecs_iso2022.c"
        var $140=($139)==0; //@line 747 "_codecs_iso2022.c"
        if ($140) { __label__ = 16; break; } else { __label__ = 12; break; } //@line 747 "_codecs_iso2022.c"
      case 12: // $bb13
        var $141=$data_addr; //@line 747 "_codecs_iso2022.c"
        var $142=$141+1; //@line 747 "_codecs_iso2022.c"
        var $143=HEAP[$142]; //@line 747 "_codecs_iso2022.c"
        var $144=HEAP[_jisx0213_1_emp_decmap]; //@line 747 "_codecs_iso2022.c"
        var $145=$data_addr; //@line 747 "_codecs_iso2022.c"
        var $146=$145; //@line 747 "_codecs_iso2022.c"
        var $147=HEAP[$146]; //@line 747 "_codecs_iso2022.c"
        var $148=($147); //@line 747 "_codecs_iso2022.c"
        var $149=$144+8*$148; //@line 747 "_codecs_iso2022.c"
        var $150=$149+4; //@line 747 "_codecs_iso2022.c"
        var $151=HEAP[$150]; //@line 747 "_codecs_iso2022.c"
        var $152=($143) < ($151); //@line 747 "_codecs_iso2022.c"
        if ($152) { __label__ = 16; break; } else { __label__ = 13; break; } //@line 747 "_codecs_iso2022.c"
      case 13: // $bb14
        var $153=$data_addr; //@line 747 "_codecs_iso2022.c"
        var $154=$153+1; //@line 747 "_codecs_iso2022.c"
        var $155=HEAP[$154]; //@line 747 "_codecs_iso2022.c"
        var $156=HEAP[_jisx0213_1_emp_decmap]; //@line 747 "_codecs_iso2022.c"
        var $157=$data_addr; //@line 747 "_codecs_iso2022.c"
        var $158=$157; //@line 747 "_codecs_iso2022.c"
        var $159=HEAP[$158]; //@line 747 "_codecs_iso2022.c"
        var $160=($159); //@line 747 "_codecs_iso2022.c"
        var $161=$156+8*$160; //@line 747 "_codecs_iso2022.c"
        var $162=$161+5; //@line 747 "_codecs_iso2022.c"
        var $163=HEAP[$162]; //@line 747 "_codecs_iso2022.c"
        var $164=($155) > ($163); //@line 747 "_codecs_iso2022.c"
        if ($164) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 747 "_codecs_iso2022.c"
      case 14: // $bb15
        var $165=HEAP[_jisx0213_1_emp_decmap]; //@line 747 "_codecs_iso2022.c"
        var $166=$data_addr; //@line 747 "_codecs_iso2022.c"
        var $167=$166; //@line 747 "_codecs_iso2022.c"
        var $168=HEAP[$167]; //@line 747 "_codecs_iso2022.c"
        var $169=($168); //@line 747 "_codecs_iso2022.c"
        var $170=$165+8*$169; //@line 747 "_codecs_iso2022.c"
        var $171=$170; //@line 747 "_codecs_iso2022.c"
        var $172=HEAP[$171]; //@line 747 "_codecs_iso2022.c"
        var $173=$data_addr; //@line 747 "_codecs_iso2022.c"
        var $174=$173+1; //@line 747 "_codecs_iso2022.c"
        var $175=HEAP[$174]; //@line 747 "_codecs_iso2022.c"
        var $176=($175); //@line 747 "_codecs_iso2022.c"
        var $177=HEAP[_jisx0213_1_emp_decmap]; //@line 747 "_codecs_iso2022.c"
        var $178=$data_addr; //@line 747 "_codecs_iso2022.c"
        var $179=$178; //@line 747 "_codecs_iso2022.c"
        var $180=HEAP[$179]; //@line 747 "_codecs_iso2022.c"
        var $181=($180); //@line 747 "_codecs_iso2022.c"
        var $182=$177+8*$181; //@line 747 "_codecs_iso2022.c"
        var $183=$182+4; //@line 747 "_codecs_iso2022.c"
        var $184=HEAP[$183]; //@line 747 "_codecs_iso2022.c"
        var $185=($184); //@line 747 "_codecs_iso2022.c"
        var $186=($176) - ($185); //@line 747 "_codecs_iso2022.c"
        var $187=$172+2*$186; //@line 747 "_codecs_iso2022.c"
        var $188=HEAP[$187]; //@line 747 "_codecs_iso2022.c"
        var $189=($188); //@line 747 "_codecs_iso2022.c"
        $u=$189; //@line 747 "_codecs_iso2022.c"
        var $190=$u; //@line 747 "_codecs_iso2022.c"
        var $191=($190)==65534; //@line 747 "_codecs_iso2022.c"
        if ($191) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 747 "_codecs_iso2022.c"
      case 15: // $bb16
        var $192=$u; //@line 748 "_codecs_iso2022.c"
        var $193=($192) | 131072; //@line 748 "_codecs_iso2022.c"
        $u=$193; //@line 748 "_codecs_iso2022.c"
        __label__ = 21; break; //@line 748 "_codecs_iso2022.c"
      case 16: // $bb17
        var $194=HEAP[_jisx0213_pair_decmap]; //@line 749 "_codecs_iso2022.c"
        var $195=$data_addr; //@line 749 "_codecs_iso2022.c"
        var $196=$195; //@line 749 "_codecs_iso2022.c"
        var $197=HEAP[$196]; //@line 749 "_codecs_iso2022.c"
        var $198=($197); //@line 749 "_codecs_iso2022.c"
        var $199=$194+8*$198; //@line 749 "_codecs_iso2022.c"
        var $200=$199; //@line 749 "_codecs_iso2022.c"
        var $201=HEAP[$200]; //@line 749 "_codecs_iso2022.c"
        var $202=$201; //@line 749 "_codecs_iso2022.c"
        var $203=($202)==0; //@line 749 "_codecs_iso2022.c"
        if ($203) { __label__ = 20; break; } else { __label__ = 17; break; } //@line 749 "_codecs_iso2022.c"
      case 17: // $bb18
        var $204=$data_addr; //@line 749 "_codecs_iso2022.c"
        var $205=$204+1; //@line 749 "_codecs_iso2022.c"
        var $206=HEAP[$205]; //@line 749 "_codecs_iso2022.c"
        var $207=HEAP[_jisx0213_pair_decmap]; //@line 749 "_codecs_iso2022.c"
        var $208=$data_addr; //@line 749 "_codecs_iso2022.c"
        var $209=$208; //@line 749 "_codecs_iso2022.c"
        var $210=HEAP[$209]; //@line 749 "_codecs_iso2022.c"
        var $211=($210); //@line 749 "_codecs_iso2022.c"
        var $212=$207+8*$211; //@line 749 "_codecs_iso2022.c"
        var $213=$212+4; //@line 749 "_codecs_iso2022.c"
        var $214=HEAP[$213]; //@line 749 "_codecs_iso2022.c"
        var $215=($206) < ($214); //@line 749 "_codecs_iso2022.c"
        if ($215) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 749 "_codecs_iso2022.c"
      case 18: // $bb19
        var $216=$data_addr; //@line 749 "_codecs_iso2022.c"
        var $217=$216+1; //@line 749 "_codecs_iso2022.c"
        var $218=HEAP[$217]; //@line 749 "_codecs_iso2022.c"
        var $219=HEAP[_jisx0213_pair_decmap]; //@line 749 "_codecs_iso2022.c"
        var $220=$data_addr; //@line 749 "_codecs_iso2022.c"
        var $221=$220; //@line 749 "_codecs_iso2022.c"
        var $222=HEAP[$221]; //@line 749 "_codecs_iso2022.c"
        var $223=($222); //@line 749 "_codecs_iso2022.c"
        var $224=$219+8*$223; //@line 749 "_codecs_iso2022.c"
        var $225=$224+5; //@line 749 "_codecs_iso2022.c"
        var $226=HEAP[$225]; //@line 749 "_codecs_iso2022.c"
        var $227=($218) > ($226); //@line 749 "_codecs_iso2022.c"
        if ($227) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 749 "_codecs_iso2022.c"
      case 19: // $bb20
        var $228=HEAP[_jisx0213_pair_decmap]; //@line 749 "_codecs_iso2022.c"
        var $229=$data_addr; //@line 749 "_codecs_iso2022.c"
        var $230=$229; //@line 749 "_codecs_iso2022.c"
        var $231=HEAP[$230]; //@line 749 "_codecs_iso2022.c"
        var $232=($231); //@line 749 "_codecs_iso2022.c"
        var $233=$228+8*$232; //@line 749 "_codecs_iso2022.c"
        var $234=$233; //@line 749 "_codecs_iso2022.c"
        var $235=HEAP[$234]; //@line 749 "_codecs_iso2022.c"
        var $236=$data_addr; //@line 749 "_codecs_iso2022.c"
        var $237=$236+1; //@line 749 "_codecs_iso2022.c"
        var $238=HEAP[$237]; //@line 749 "_codecs_iso2022.c"
        var $239=($238); //@line 749 "_codecs_iso2022.c"
        var $240=HEAP[_jisx0213_pair_decmap]; //@line 749 "_codecs_iso2022.c"
        var $241=$data_addr; //@line 749 "_codecs_iso2022.c"
        var $242=$241; //@line 749 "_codecs_iso2022.c"
        var $243=HEAP[$242]; //@line 749 "_codecs_iso2022.c"
        var $244=($243); //@line 749 "_codecs_iso2022.c"
        var $245=$240+8*$244; //@line 749 "_codecs_iso2022.c"
        var $246=$245+4; //@line 749 "_codecs_iso2022.c"
        var $247=HEAP[$246]; //@line 749 "_codecs_iso2022.c"
        var $248=($247); //@line 749 "_codecs_iso2022.c"
        var $249=($239) - ($248); //@line 749 "_codecs_iso2022.c"
        var $250=$235+4*$249; //@line 749 "_codecs_iso2022.c"
        var $251=HEAP[$250]; //@line 749 "_codecs_iso2022.c"
        $u=$251; //@line 749 "_codecs_iso2022.c"
        var $252=$u; //@line 749 "_codecs_iso2022.c"
        var $253=($252)==65534; //@line 749 "_codecs_iso2022.c"
        if ($253) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 749 "_codecs_iso2022.c"
      case 20: // $bb22
        $0=65535; //@line 751 "_codecs_iso2022.c"
        __label__ = 22; break; //@line 751 "_codecs_iso2022.c"
      case 21: // $bb23
        var $254=$u; //@line 752 "_codecs_iso2022.c"
        $0=$254; //@line 752 "_codecs_iso2022.c"
        __label__ = 22; break; //@line 752 "_codecs_iso2022.c"
      case 22: // $bb24
        var $255=$0; //@line 744 "_codecs_iso2022.c"
        $retval=$255; //@line 744 "_codecs_iso2022.c"
        var $retval25=$retval; //@line 744 "_codecs_iso2022.c"
        ;
        return $retval25; //@line 744 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2004_2_decoder($data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $retval;
        var $0;
        var $u;
        $data_addr=$data;
        var $1=HEAP[_jisx0213_2_bmp_decmap]; //@line 759 "_codecs_iso2022.c"
        var $2=$data_addr; //@line 759 "_codecs_iso2022.c"
        var $3=$2; //@line 759 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 759 "_codecs_iso2022.c"
        var $5=($4); //@line 759 "_codecs_iso2022.c"
        var $6=$1+8*$5; //@line 759 "_codecs_iso2022.c"
        var $7=$6; //@line 759 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 759 "_codecs_iso2022.c"
        var $9=$8; //@line 759 "_codecs_iso2022.c"
        var $10=($9)==0; //@line 759 "_codecs_iso2022.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 759 "_codecs_iso2022.c"
      case 1: // $bb
        var $11=$data_addr; //@line 759 "_codecs_iso2022.c"
        var $12=$11+1; //@line 759 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 759 "_codecs_iso2022.c"
        var $14=HEAP[_jisx0213_2_bmp_decmap]; //@line 759 "_codecs_iso2022.c"
        var $15=$data_addr; //@line 759 "_codecs_iso2022.c"
        var $16=$15; //@line 759 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 759 "_codecs_iso2022.c"
        var $18=($17); //@line 759 "_codecs_iso2022.c"
        var $19=$14+8*$18; //@line 759 "_codecs_iso2022.c"
        var $20=$19+4; //@line 759 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 759 "_codecs_iso2022.c"
        var $22=($13) < ($21); //@line 759 "_codecs_iso2022.c"
        if ($22) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 759 "_codecs_iso2022.c"
      case 2: // $bb1
        var $23=$data_addr; //@line 759 "_codecs_iso2022.c"
        var $24=$23+1; //@line 759 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 759 "_codecs_iso2022.c"
        var $26=HEAP[_jisx0213_2_bmp_decmap]; //@line 759 "_codecs_iso2022.c"
        var $27=$data_addr; //@line 759 "_codecs_iso2022.c"
        var $28=$27; //@line 759 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 759 "_codecs_iso2022.c"
        var $30=($29); //@line 759 "_codecs_iso2022.c"
        var $31=$26+8*$30; //@line 759 "_codecs_iso2022.c"
        var $32=$31+5; //@line 759 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 759 "_codecs_iso2022.c"
        var $34=($25) > ($33); //@line 759 "_codecs_iso2022.c"
        if ($34) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 759 "_codecs_iso2022.c"
      case 3: // $bb2
        var $35=HEAP[_jisx0213_2_bmp_decmap]; //@line 759 "_codecs_iso2022.c"
        var $36=$data_addr; //@line 759 "_codecs_iso2022.c"
        var $37=$36; //@line 759 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 759 "_codecs_iso2022.c"
        var $39=($38); //@line 759 "_codecs_iso2022.c"
        var $40=$35+8*$39; //@line 759 "_codecs_iso2022.c"
        var $41=$40; //@line 759 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 759 "_codecs_iso2022.c"
        var $43=$data_addr; //@line 759 "_codecs_iso2022.c"
        var $44=$43+1; //@line 759 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 759 "_codecs_iso2022.c"
        var $46=($45); //@line 759 "_codecs_iso2022.c"
        var $47=HEAP[_jisx0213_2_bmp_decmap]; //@line 759 "_codecs_iso2022.c"
        var $48=$data_addr; //@line 759 "_codecs_iso2022.c"
        var $49=$48; //@line 759 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 759 "_codecs_iso2022.c"
        var $51=($50); //@line 759 "_codecs_iso2022.c"
        var $52=$47+8*$51; //@line 759 "_codecs_iso2022.c"
        var $53=$52+4; //@line 759 "_codecs_iso2022.c"
        var $54=HEAP[$53]; //@line 759 "_codecs_iso2022.c"
        var $55=($54); //@line 759 "_codecs_iso2022.c"
        var $56=($46) - ($55); //@line 759 "_codecs_iso2022.c"
        var $57=$42+2*$56; //@line 759 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 759 "_codecs_iso2022.c"
        var $59=($58); //@line 759 "_codecs_iso2022.c"
        $u=$59; //@line 759 "_codecs_iso2022.c"
        var $60=$u; //@line 759 "_codecs_iso2022.c"
        var $61=($60)==65534; //@line 759 "_codecs_iso2022.c"
        if ($61) { __label__ = 4; break; } else { __label__ = 10; break; } //@line 759 "_codecs_iso2022.c"
      case 4: // $bb4
        var $62=HEAP[_jisx0213_2_emp_decmap]; //@line 760 "_codecs_iso2022.c"
        var $63=$data_addr; //@line 760 "_codecs_iso2022.c"
        var $64=$63; //@line 760 "_codecs_iso2022.c"
        var $65=HEAP[$64]; //@line 760 "_codecs_iso2022.c"
        var $66=($65); //@line 760 "_codecs_iso2022.c"
        var $67=$62+8*$66; //@line 760 "_codecs_iso2022.c"
        var $68=$67; //@line 760 "_codecs_iso2022.c"
        var $69=HEAP[$68]; //@line 760 "_codecs_iso2022.c"
        var $70=$69; //@line 760 "_codecs_iso2022.c"
        var $71=($70)==0; //@line 760 "_codecs_iso2022.c"
        if ($71) { __label__ = 9; break; } else { __label__ = 5; break; } //@line 760 "_codecs_iso2022.c"
      case 5: // $bb5
        var $72=$data_addr; //@line 760 "_codecs_iso2022.c"
        var $73=$72+1; //@line 760 "_codecs_iso2022.c"
        var $74=HEAP[$73]; //@line 760 "_codecs_iso2022.c"
        var $75=HEAP[_jisx0213_2_emp_decmap]; //@line 760 "_codecs_iso2022.c"
        var $76=$data_addr; //@line 760 "_codecs_iso2022.c"
        var $77=$76; //@line 760 "_codecs_iso2022.c"
        var $78=HEAP[$77]; //@line 760 "_codecs_iso2022.c"
        var $79=($78); //@line 760 "_codecs_iso2022.c"
        var $80=$75+8*$79; //@line 760 "_codecs_iso2022.c"
        var $81=$80+4; //@line 760 "_codecs_iso2022.c"
        var $82=HEAP[$81]; //@line 760 "_codecs_iso2022.c"
        var $83=($74) < ($82); //@line 760 "_codecs_iso2022.c"
        if ($83) { __label__ = 9; break; } else { __label__ = 6; break; } //@line 760 "_codecs_iso2022.c"
      case 6: // $bb6
        var $84=$data_addr; //@line 760 "_codecs_iso2022.c"
        var $85=$84+1; //@line 760 "_codecs_iso2022.c"
        var $86=HEAP[$85]; //@line 760 "_codecs_iso2022.c"
        var $87=HEAP[_jisx0213_2_emp_decmap]; //@line 760 "_codecs_iso2022.c"
        var $88=$data_addr; //@line 760 "_codecs_iso2022.c"
        var $89=$88; //@line 760 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 760 "_codecs_iso2022.c"
        var $91=($90); //@line 760 "_codecs_iso2022.c"
        var $92=$87+8*$91; //@line 760 "_codecs_iso2022.c"
        var $93=$92+5; //@line 760 "_codecs_iso2022.c"
        var $94=HEAP[$93]; //@line 760 "_codecs_iso2022.c"
        var $95=($86) > ($94); //@line 760 "_codecs_iso2022.c"
        if ($95) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 760 "_codecs_iso2022.c"
      case 7: // $bb7
        var $96=HEAP[_jisx0213_2_emp_decmap]; //@line 760 "_codecs_iso2022.c"
        var $97=$data_addr; //@line 760 "_codecs_iso2022.c"
        var $98=$97; //@line 760 "_codecs_iso2022.c"
        var $99=HEAP[$98]; //@line 760 "_codecs_iso2022.c"
        var $100=($99); //@line 760 "_codecs_iso2022.c"
        var $101=$96+8*$100; //@line 760 "_codecs_iso2022.c"
        var $102=$101; //@line 760 "_codecs_iso2022.c"
        var $103=HEAP[$102]; //@line 760 "_codecs_iso2022.c"
        var $104=$data_addr; //@line 760 "_codecs_iso2022.c"
        var $105=$104+1; //@line 760 "_codecs_iso2022.c"
        var $106=HEAP[$105]; //@line 760 "_codecs_iso2022.c"
        var $107=($106); //@line 760 "_codecs_iso2022.c"
        var $108=HEAP[_jisx0213_2_emp_decmap]; //@line 760 "_codecs_iso2022.c"
        var $109=$data_addr; //@line 760 "_codecs_iso2022.c"
        var $110=$109; //@line 760 "_codecs_iso2022.c"
        var $111=HEAP[$110]; //@line 760 "_codecs_iso2022.c"
        var $112=($111); //@line 760 "_codecs_iso2022.c"
        var $113=$108+8*$112; //@line 760 "_codecs_iso2022.c"
        var $114=$113+4; //@line 760 "_codecs_iso2022.c"
        var $115=HEAP[$114]; //@line 760 "_codecs_iso2022.c"
        var $116=($115); //@line 760 "_codecs_iso2022.c"
        var $117=($107) - ($116); //@line 760 "_codecs_iso2022.c"
        var $118=$103+2*$117; //@line 760 "_codecs_iso2022.c"
        var $119=HEAP[$118]; //@line 760 "_codecs_iso2022.c"
        var $120=($119); //@line 760 "_codecs_iso2022.c"
        $u=$120; //@line 760 "_codecs_iso2022.c"
        var $121=$u; //@line 760 "_codecs_iso2022.c"
        var $122=($121)==65534; //@line 760 "_codecs_iso2022.c"
        if ($122) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 760 "_codecs_iso2022.c"
      case 8: // $bb8
        var $123=$u; //@line 761 "_codecs_iso2022.c"
        var $124=($123) | 131072; //@line 761 "_codecs_iso2022.c"
        $u=$124; //@line 761 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 761 "_codecs_iso2022.c"
      case 9: // $bb9
        $0=65535; //@line 763 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 763 "_codecs_iso2022.c"
      case 10: // $bb10
        var $125=$u; //@line 764 "_codecs_iso2022.c"
        $0=$125; //@line 764 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 764 "_codecs_iso2022.c"
      case 11: // $bb11
        var $126=$0; //@line 763 "_codecs_iso2022.c"
        $retval=$126; //@line 763 "_codecs_iso2022.c"
        var $retval12=$retval; //@line 763 "_codecs_iso2022.c"
        ;
        return $retval12; //@line 763 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_encoder($data, $length, $config) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $config_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        $config_addr=$config;
        var $1=$length_addr; //@line 772 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 772 "_codecs_iso2022.c"
        if ($2 == -1) {
          __label__ = 45; break;
        }
        else if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 41; break;
        }
        else {
        __label__ = 48; break;
        }
        
      case 1: // $bb
        var $3=$data_addr; //@line 774 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 774 "_codecs_iso2022.c"
        var $5=($4) > 65535; //@line 774 "_codecs_iso2022.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 12; break; } //@line 774 "_codecs_iso2022.c"
      case 2: // $bb1
        var $6=$data_addr; //@line 775 "_codecs_iso2022.c"
        var $7=HEAP[$6]; //@line 775 "_codecs_iso2022.c"
        var $8=($7) >>> 16; //@line 775 "_codecs_iso2022.c"
        var $9=($8)==2; //@line 775 "_codecs_iso2022.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 11; break; } //@line 775 "_codecs_iso2022.c"
      case 3: // $bb2
        var $10=$config_addr; //@line 776 "_codecs_iso2022.c"
        var $11=($10)!=2000; //@line 776 "_codecs_iso2022.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 4; break; } //@line 776 "_codecs_iso2022.c"
      case 4: // $bb3
        var $12=$data_addr; //@line 776 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 776 "_codecs_iso2022.c"
        var $14=($13)!=134047; //@line 776 "_codecs_iso2022.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 776 "_codecs_iso2022.c"
      case 5: // $bb4
        $0=65535; //@line 776 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 776 "_codecs_iso2022.c"
      case 6: // $bb5
        var $15=HEAP[_jisx0213_emp_encmap]; //@line 777 "_codecs_iso2022.c"
        var $16=$data_addr; //@line 777 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 777 "_codecs_iso2022.c"
        var $18=($17) & 65535; //@line 777 "_codecs_iso2022.c"
        var $19=($18) >>> 8; //@line 777 "_codecs_iso2022.c"
        var $20=$15+8*$19; //@line 777 "_codecs_iso2022.c"
        var $21=$20; //@line 777 "_codecs_iso2022.c"
        var $22=HEAP[$21]; //@line 777 "_codecs_iso2022.c"
        var $23=$22; //@line 777 "_codecs_iso2022.c"
        var $24=($23)!=0; //@line 777 "_codecs_iso2022.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 777 "_codecs_iso2022.c"
      case 7: // $bb6
        var $25=$data_addr; //@line 777 "_codecs_iso2022.c"
        var $26=HEAP[$25]; //@line 777 "_codecs_iso2022.c"
        var $27=($26) & 255; //@line 777 "_codecs_iso2022.c"
        var $28=HEAP[_jisx0213_emp_encmap]; //@line 777 "_codecs_iso2022.c"
        var $29=$data_addr; //@line 777 "_codecs_iso2022.c"
        var $30=HEAP[$29]; //@line 777 "_codecs_iso2022.c"
        var $31=($30) & 65535; //@line 777 "_codecs_iso2022.c"
        var $32=($31) >>> 8; //@line 777 "_codecs_iso2022.c"
        var $33=$28+8*$32; //@line 777 "_codecs_iso2022.c"
        var $34=$33+4; //@line 777 "_codecs_iso2022.c"
        var $35=HEAP[$34]; //@line 777 "_codecs_iso2022.c"
        var $36=($35); //@line 777 "_codecs_iso2022.c"
        var $37=($27) >= ($36); //@line 777 "_codecs_iso2022.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 777 "_codecs_iso2022.c"
      case 8: // $bb7
        var $38=$data_addr; //@line 777 "_codecs_iso2022.c"
        var $39=HEAP[$38]; //@line 777 "_codecs_iso2022.c"
        var $40=($39) & 255; //@line 777 "_codecs_iso2022.c"
        var $41=HEAP[_jisx0213_emp_encmap]; //@line 777 "_codecs_iso2022.c"
        var $42=$data_addr; //@line 777 "_codecs_iso2022.c"
        var $43=HEAP[$42]; //@line 777 "_codecs_iso2022.c"
        var $44=($43) & 65535; //@line 777 "_codecs_iso2022.c"
        var $45=($44) >>> 8; //@line 777 "_codecs_iso2022.c"
        var $46=$41+8*$45; //@line 777 "_codecs_iso2022.c"
        var $47=$46+5; //@line 777 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 777 "_codecs_iso2022.c"
        var $49=($48); //@line 777 "_codecs_iso2022.c"
        var $50=($40) <= ($49); //@line 777 "_codecs_iso2022.c"
        if ($50) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 777 "_codecs_iso2022.c"
      case 9: // $bb8
        var $51=HEAP[_jisx0213_emp_encmap]; //@line 777 "_codecs_iso2022.c"
        var $52=$data_addr; //@line 777 "_codecs_iso2022.c"
        var $53=HEAP[$52]; //@line 777 "_codecs_iso2022.c"
        var $54=($53) & 65535; //@line 777 "_codecs_iso2022.c"
        var $55=($54) >>> 8; //@line 777 "_codecs_iso2022.c"
        var $56=$51+8*$55; //@line 777 "_codecs_iso2022.c"
        var $57=$56; //@line 777 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 777 "_codecs_iso2022.c"
        var $59=$data_addr; //@line 777 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 777 "_codecs_iso2022.c"
        var $61=($60) & 255; //@line 777 "_codecs_iso2022.c"
        var $62=HEAP[_jisx0213_emp_encmap]; //@line 777 "_codecs_iso2022.c"
        var $63=$data_addr; //@line 777 "_codecs_iso2022.c"
        var $64=HEAP[$63]; //@line 777 "_codecs_iso2022.c"
        var $65=($64) & 65535; //@line 777 "_codecs_iso2022.c"
        var $66=($65) >>> 8; //@line 777 "_codecs_iso2022.c"
        var $67=$62+8*$66; //@line 777 "_codecs_iso2022.c"
        var $68=$67+4; //@line 777 "_codecs_iso2022.c"
        var $69=HEAP[$68]; //@line 777 "_codecs_iso2022.c"
        var $70=($69); //@line 777 "_codecs_iso2022.c"
        var $71=($61) - ($70); //@line 777 "_codecs_iso2022.c"
        var $72=$58+2*$71; //@line 777 "_codecs_iso2022.c"
        var $73=HEAP[$72]; //@line 777 "_codecs_iso2022.c"
        $coded=$73; //@line 777 "_codecs_iso2022.c"
        var $74=$coded; //@line 777 "_codecs_iso2022.c"
        var $75=($74)!=-1; //@line 777 "_codecs_iso2022.c"
        if ($75) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 777 "_codecs_iso2022.c"
      case 10: // $bb9
        var $76=$coded; //@line 779 "_codecs_iso2022.c"
        var $77=($76); //@line 779 "_codecs_iso2022.c"
        $0=$77; //@line 779 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 779 "_codecs_iso2022.c"
      case 11: // $bb10
        $0=65535; //@line 781 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 781 "_codecs_iso2022.c"
      case 12: // $bb11
        var $78=$config_addr; //@line 784 "_codecs_iso2022.c"
        var $79=($78)!=2000; //@line 784 "_codecs_iso2022.c"
        if ($79) { __label__ = 27; break; } else { __label__ = 13; break; } //@line 784 "_codecs_iso2022.c"
      case 13: // $bb12
        var $80=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $81=HEAP[$80]; //@line 784 "_codecs_iso2022.c"
        var $82=($81)==39708; //@line 784 "_codecs_iso2022.c"
        if ($82) { __label__ = 23; break; } else { __label__ = 14; break; } //@line 784 "_codecs_iso2022.c"
      case 14: // $bb13
        var $83=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $84=HEAP[$83]; //@line 784 "_codecs_iso2022.c"
        var $85=($84)==20465; //@line 784 "_codecs_iso2022.c"
        if ($85) { __label__ = 23; break; } else { __label__ = 15; break; } //@line 784 "_codecs_iso2022.c"
      case 15: // $bb14
        var $86=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $87=HEAP[$86]; //@line 784 "_codecs_iso2022.c"
        var $88=($87)==21085; //@line 784 "_codecs_iso2022.c"
        if ($88) { __label__ = 23; break; } else { __label__ = 16; break; } //@line 784 "_codecs_iso2022.c"
      case 16: // $bb15
        var $89=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $90=HEAP[$89]; //@line 784 "_codecs_iso2022.c"
        var $91=($90)==21534; //@line 784 "_codecs_iso2022.c"
        if ($91) { __label__ = 23; break; } else { __label__ = 17; break; } //@line 784 "_codecs_iso2022.c"
      case 17: // $bb16
        var $92=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $93=HEAP[$92]; //@line 784 "_codecs_iso2022.c"
        var $94=($93)==22099; //@line 784 "_codecs_iso2022.c"
        if ($94) { __label__ = 23; break; } else { __label__ = 18; break; } //@line 784 "_codecs_iso2022.c"
      case 18: // $bb17
        var $95=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $96=HEAP[$95]; //@line 784 "_codecs_iso2022.c"
        var $97=($96)==23032; //@line 784 "_codecs_iso2022.c"
        if ($97) { __label__ = 23; break; } else { __label__ = 19; break; } //@line 784 "_codecs_iso2022.c"
      case 19: // $bb18
        var $98=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $99=HEAP[$98]; //@line 784 "_codecs_iso2022.c"
        var $100=($99)==23643; //@line 784 "_codecs_iso2022.c"
        if ($100) { __label__ = 23; break; } else { __label__ = 20; break; } //@line 784 "_codecs_iso2022.c"
      case 20: // $bb19
        var $101=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $102=HEAP[$101]; //@line 784 "_codecs_iso2022.c"
        var $103=($102)==24183; //@line 784 "_codecs_iso2022.c"
        if ($103) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 784 "_codecs_iso2022.c"
      case 21: // $bb20
        var $104=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $105=HEAP[$104]; //@line 784 "_codecs_iso2022.c"
        var $106=($105)==30246; //@line 784 "_codecs_iso2022.c"
        if ($106) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 784 "_codecs_iso2022.c"
      case 22: // $bb21
        var $107=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $108=HEAP[$107]; //@line 784 "_codecs_iso2022.c"
        var $109=($108)==32363; //@line 784 "_codecs_iso2022.c"
        if ($109) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 784 "_codecs_iso2022.c"
      case 23: // $bb22
        $0=65535; //@line 784 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 784 "_codecs_iso2022.c"
      case 24: // $bb23
        var $_pr=$config_addr;
        var $110=($_pr)!=2000; //@line 784 "_codecs_iso2022.c"
        if ($110) { __label__ = 27; break; } else { __label__ = 25; break; } //@line 784 "_codecs_iso2022.c"
      case 25: // $bb24
        var $111=$data_addr; //@line 784 "_codecs_iso2022.c"
        var $112=HEAP[$111]; //@line 784 "_codecs_iso2022.c"
        var $113=($112)!=39709; //@line 784 "_codecs_iso2022.c"
        if ($113) { __label__ = 27; break; } else { __label__ = 26; break; } //@line 784 "_codecs_iso2022.c"
      case 26: // $bb25
        $coded=-709; //@line 784 "_codecs_iso2022.c"
        __label__ = 40; break; //@line 784 "_codecs_iso2022.c"
      case 27: // $bb26
        var $114=HEAP[_jisx0213_bmp_encmap]; //@line 785 "_codecs_iso2022.c"
        var $115=$data_addr; //@line 785 "_codecs_iso2022.c"
        var $116=HEAP[$115]; //@line 785 "_codecs_iso2022.c"
        var $117=($116) >>> 8; //@line 785 "_codecs_iso2022.c"
        var $118=$114+8*$117; //@line 785 "_codecs_iso2022.c"
        var $119=$118; //@line 785 "_codecs_iso2022.c"
        var $120=HEAP[$119]; //@line 785 "_codecs_iso2022.c"
        var $121=$120; //@line 785 "_codecs_iso2022.c"
        var $122=($121)==0; //@line 785 "_codecs_iso2022.c"
        if ($122) { __label__ = 33; break; } else { __label__ = 28; break; } //@line 785 "_codecs_iso2022.c"
      case 28: // $bb27
        var $123=$data_addr; //@line 785 "_codecs_iso2022.c"
        var $124=HEAP[$123]; //@line 785 "_codecs_iso2022.c"
        var $125=($124) & 255; //@line 785 "_codecs_iso2022.c"
        var $126=HEAP[_jisx0213_bmp_encmap]; //@line 785 "_codecs_iso2022.c"
        var $127=$data_addr; //@line 785 "_codecs_iso2022.c"
        var $128=HEAP[$127]; //@line 785 "_codecs_iso2022.c"
        var $129=($128) >>> 8; //@line 785 "_codecs_iso2022.c"
        var $130=$126+8*$129; //@line 785 "_codecs_iso2022.c"
        var $131=$130+4; //@line 785 "_codecs_iso2022.c"
        var $132=HEAP[$131]; //@line 785 "_codecs_iso2022.c"
        var $133=($132); //@line 785 "_codecs_iso2022.c"
        var $134=($125) < ($133); //@line 785 "_codecs_iso2022.c"
        if ($134) { __label__ = 33; break; } else { __label__ = 29; break; } //@line 785 "_codecs_iso2022.c"
      case 29: // $bb28
        var $135=$data_addr; //@line 785 "_codecs_iso2022.c"
        var $136=HEAP[$135]; //@line 785 "_codecs_iso2022.c"
        var $137=($136) & 255; //@line 785 "_codecs_iso2022.c"
        var $138=HEAP[_jisx0213_bmp_encmap]; //@line 785 "_codecs_iso2022.c"
        var $139=$data_addr; //@line 785 "_codecs_iso2022.c"
        var $140=HEAP[$139]; //@line 785 "_codecs_iso2022.c"
        var $141=($140) >>> 8; //@line 785 "_codecs_iso2022.c"
        var $142=$138+8*$141; //@line 785 "_codecs_iso2022.c"
        var $143=$142+5; //@line 785 "_codecs_iso2022.c"
        var $144=HEAP[$143]; //@line 785 "_codecs_iso2022.c"
        var $145=($144); //@line 785 "_codecs_iso2022.c"
        var $146=($137) > ($145); //@line 785 "_codecs_iso2022.c"
        if ($146) { __label__ = 33; break; } else { __label__ = 30; break; } //@line 785 "_codecs_iso2022.c"
      case 30: // $bb29
        var $147=HEAP[_jisx0213_bmp_encmap]; //@line 785 "_codecs_iso2022.c"
        var $148=$data_addr; //@line 785 "_codecs_iso2022.c"
        var $149=HEAP[$148]; //@line 785 "_codecs_iso2022.c"
        var $150=($149) >>> 8; //@line 785 "_codecs_iso2022.c"
        var $151=$147+8*$150; //@line 785 "_codecs_iso2022.c"
        var $152=$151; //@line 785 "_codecs_iso2022.c"
        var $153=HEAP[$152]; //@line 785 "_codecs_iso2022.c"
        var $154=$data_addr; //@line 785 "_codecs_iso2022.c"
        var $155=HEAP[$154]; //@line 785 "_codecs_iso2022.c"
        var $156=($155) & 255; //@line 785 "_codecs_iso2022.c"
        var $157=HEAP[_jisx0213_bmp_encmap]; //@line 785 "_codecs_iso2022.c"
        var $158=$data_addr; //@line 785 "_codecs_iso2022.c"
        var $159=HEAP[$158]; //@line 785 "_codecs_iso2022.c"
        var $160=($159) >>> 8; //@line 785 "_codecs_iso2022.c"
        var $161=$157+8*$160; //@line 785 "_codecs_iso2022.c"
        var $162=$161+4; //@line 785 "_codecs_iso2022.c"
        var $163=HEAP[$162]; //@line 785 "_codecs_iso2022.c"
        var $164=($163); //@line 785 "_codecs_iso2022.c"
        var $165=($156) - ($164); //@line 785 "_codecs_iso2022.c"
        var $166=$153+2*$165; //@line 785 "_codecs_iso2022.c"
        var $167=HEAP[$166]; //@line 785 "_codecs_iso2022.c"
        $coded=$167; //@line 785 "_codecs_iso2022.c"
        var $168=$coded; //@line 785 "_codecs_iso2022.c"
        var $169=($168)==-1; //@line 785 "_codecs_iso2022.c"
        if ($169) { __label__ = 33; break; } else { __label__ = 31; break; } //@line 785 "_codecs_iso2022.c"
      case 31: // $bb30
        var $170=$coded; //@line 786 "_codecs_iso2022.c"
        var $171=($170)==-2; //@line 786 "_codecs_iso2022.c"
        if ($171) { __label__ = 32; break; } else { __label__ = 40; break; } //@line 786 "_codecs_iso2022.c"
      case 32: // $bb31
        $0=65534; //@line 787 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 787 "_codecs_iso2022.c"
      case 33: // $bb33
        var $172=HEAP[_jisxcommon_encmap]; //@line 789 "_codecs_iso2022.c"
        var $173=$data_addr; //@line 789 "_codecs_iso2022.c"
        var $174=HEAP[$173]; //@line 789 "_codecs_iso2022.c"
        var $175=($174) >>> 8; //@line 789 "_codecs_iso2022.c"
        var $176=$172+8*$175; //@line 789 "_codecs_iso2022.c"
        var $177=$176; //@line 789 "_codecs_iso2022.c"
        var $178=HEAP[$177]; //@line 789 "_codecs_iso2022.c"
        var $179=$178; //@line 789 "_codecs_iso2022.c"
        var $180=($179)==0; //@line 789 "_codecs_iso2022.c"
        if ($180) { __label__ = 39; break; } else { __label__ = 34; break; } //@line 789 "_codecs_iso2022.c"
      case 34: // $bb34
        var $181=$data_addr; //@line 789 "_codecs_iso2022.c"
        var $182=HEAP[$181]; //@line 789 "_codecs_iso2022.c"
        var $183=($182) & 255; //@line 789 "_codecs_iso2022.c"
        var $184=HEAP[_jisxcommon_encmap]; //@line 789 "_codecs_iso2022.c"
        var $185=$data_addr; //@line 789 "_codecs_iso2022.c"
        var $186=HEAP[$185]; //@line 789 "_codecs_iso2022.c"
        var $187=($186) >>> 8; //@line 789 "_codecs_iso2022.c"
        var $188=$184+8*$187; //@line 789 "_codecs_iso2022.c"
        var $189=$188+4; //@line 789 "_codecs_iso2022.c"
        var $190=HEAP[$189]; //@line 789 "_codecs_iso2022.c"
        var $191=($190); //@line 789 "_codecs_iso2022.c"
        var $192=($183) < ($191); //@line 789 "_codecs_iso2022.c"
        if ($192) { __label__ = 39; break; } else { __label__ = 35; break; } //@line 789 "_codecs_iso2022.c"
      case 35: // $bb35
        var $193=$data_addr; //@line 789 "_codecs_iso2022.c"
        var $194=HEAP[$193]; //@line 789 "_codecs_iso2022.c"
        var $195=($194) & 255; //@line 789 "_codecs_iso2022.c"
        var $196=HEAP[_jisxcommon_encmap]; //@line 789 "_codecs_iso2022.c"
        var $197=$data_addr; //@line 789 "_codecs_iso2022.c"
        var $198=HEAP[$197]; //@line 789 "_codecs_iso2022.c"
        var $199=($198) >>> 8; //@line 789 "_codecs_iso2022.c"
        var $200=$196+8*$199; //@line 789 "_codecs_iso2022.c"
        var $201=$200+5; //@line 789 "_codecs_iso2022.c"
        var $202=HEAP[$201]; //@line 789 "_codecs_iso2022.c"
        var $203=($202); //@line 789 "_codecs_iso2022.c"
        var $204=($195) > ($203); //@line 789 "_codecs_iso2022.c"
        if ($204) { __label__ = 39; break; } else { __label__ = 36; break; } //@line 789 "_codecs_iso2022.c"
      case 36: // $bb36
        var $205=HEAP[_jisxcommon_encmap]; //@line 789 "_codecs_iso2022.c"
        var $206=$data_addr; //@line 789 "_codecs_iso2022.c"
        var $207=HEAP[$206]; //@line 789 "_codecs_iso2022.c"
        var $208=($207) >>> 8; //@line 789 "_codecs_iso2022.c"
        var $209=$205+8*$208; //@line 789 "_codecs_iso2022.c"
        var $210=$209; //@line 789 "_codecs_iso2022.c"
        var $211=HEAP[$210]; //@line 789 "_codecs_iso2022.c"
        var $212=$data_addr; //@line 789 "_codecs_iso2022.c"
        var $213=HEAP[$212]; //@line 789 "_codecs_iso2022.c"
        var $214=($213) & 255; //@line 789 "_codecs_iso2022.c"
        var $215=HEAP[_jisxcommon_encmap]; //@line 789 "_codecs_iso2022.c"
        var $216=$data_addr; //@line 789 "_codecs_iso2022.c"
        var $217=HEAP[$216]; //@line 789 "_codecs_iso2022.c"
        var $218=($217) >>> 8; //@line 789 "_codecs_iso2022.c"
        var $219=$215+8*$218; //@line 789 "_codecs_iso2022.c"
        var $220=$219+4; //@line 789 "_codecs_iso2022.c"
        var $221=HEAP[$220]; //@line 789 "_codecs_iso2022.c"
        var $222=($221); //@line 789 "_codecs_iso2022.c"
        var $223=($214) - ($222); //@line 789 "_codecs_iso2022.c"
        var $224=$211+2*$223; //@line 789 "_codecs_iso2022.c"
        var $225=HEAP[$224]; //@line 789 "_codecs_iso2022.c"
        $coded=$225; //@line 789 "_codecs_iso2022.c"
        var $226=$coded; //@line 789 "_codecs_iso2022.c"
        var $227=($226)==-1; //@line 789 "_codecs_iso2022.c"
        if ($227) { __label__ = 39; break; } else { __label__ = 37; break; } //@line 789 "_codecs_iso2022.c"
      case 37: // $bb37
        var $228=$coded; //@line 790 "_codecs_iso2022.c"
        var $229=($228) < 0; //@line 790 "_codecs_iso2022.c"
        if ($229) { __label__ = 38; break; } else { __label__ = 40; break; } //@line 790 "_codecs_iso2022.c"
      case 38: // $bb38
        $0=65535; //@line 791 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 791 "_codecs_iso2022.c"
      case 39: // $bb40
        $0=65535; //@line 794 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 794 "_codecs_iso2022.c"
      case 40: // $bb41
        var $230=$coded; //@line 795 "_codecs_iso2022.c"
        var $231=($230); //@line 795 "_codecs_iso2022.c"
        $0=$231; //@line 795 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 795 "_codecs_iso2022.c"
      case 41: // $bb42
        var $232=HEAP[_jisx0213_pair_encmap]; //@line 797 "_codecs_iso2022.c"
        var $233=$data_addr; //@line 797 "_codecs_iso2022.c"
        var $234=$233+4; //@line 797 "_codecs_iso2022.c"
        var $235=HEAP[$234]; //@line 797 "_codecs_iso2022.c"
        var $236=((($235)) & 65535); //@line 797 "_codecs_iso2022.c"
        var $237=($236); //@line 797 "_codecs_iso2022.c"
        var $238=$data_addr; //@line 797 "_codecs_iso2022.c"
        var $239=$238; //@line 797 "_codecs_iso2022.c"
        var $240=HEAP[$239]; //@line 797 "_codecs_iso2022.c"
        var $241=((($240)) & 65535); //@line 797 "_codecs_iso2022.c"
        var $242=($241); //@line 797 "_codecs_iso2022.c"
        var $243=((($242)) & 65535); //@line 797 "_codecs_iso2022.c"
        var $244=((($237)) & 65535); //@line 797 "_codecs_iso2022.c"
        var $245=_find_pairencmap($243, $244, $232); //@line 797 "_codecs_iso2022.c"
        $coded=$245; //@line 797 "_codecs_iso2022.c"
        var $246=$coded; //@line 799 "_codecs_iso2022.c"
        var $247=($246)==-3; //@line 799 "_codecs_iso2022.c"
        if ($247) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 799 "_codecs_iso2022.c"
      case 42: // $bb43
        var $248=$length_addr; //@line 800 "_codecs_iso2022.c"
        HEAP[$248]=1; //@line 800 "_codecs_iso2022.c"
        var $249=HEAP[_jisx0213_pair_encmap]; //@line 801 "_codecs_iso2022.c"
        var $250=$data_addr; //@line 801 "_codecs_iso2022.c"
        var $251=$250; //@line 801 "_codecs_iso2022.c"
        var $252=HEAP[$251]; //@line 801 "_codecs_iso2022.c"
        var $253=((($252)) & 65535); //@line 801 "_codecs_iso2022.c"
        var $254=($253); //@line 801 "_codecs_iso2022.c"
        var $255=((($254)) & 65535); //@line 801 "_codecs_iso2022.c"
        var $256=_find_pairencmap($255, 0, $249); //@line 801 "_codecs_iso2022.c"
        $coded=$256; //@line 801 "_codecs_iso2022.c"
        var $257=$coded; //@line 803 "_codecs_iso2022.c"
        var $258=($257)==-3; //@line 803 "_codecs_iso2022.c"
        if ($258) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 803 "_codecs_iso2022.c"
      case 43: // $bb44
        $0=65535; //@line 804 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 804 "_codecs_iso2022.c"
      case 44: // $bb46
        var $259=$coded; //@line 807 "_codecs_iso2022.c"
        var $260=($259); //@line 807 "_codecs_iso2022.c"
        $0=$260; //@line 807 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 807 "_codecs_iso2022.c"
      case 45: // $bb47
        var $261=$length_addr; //@line 809 "_codecs_iso2022.c"
        HEAP[$261]=1; //@line 809 "_codecs_iso2022.c"
        var $262=HEAP[_jisx0213_pair_encmap]; //@line 810 "_codecs_iso2022.c"
        var $263=$data_addr; //@line 810 "_codecs_iso2022.c"
        var $264=$263; //@line 810 "_codecs_iso2022.c"
        var $265=HEAP[$264]; //@line 810 "_codecs_iso2022.c"
        var $266=((($265)) & 65535); //@line 810 "_codecs_iso2022.c"
        var $267=($266); //@line 810 "_codecs_iso2022.c"
        var $268=((($267)) & 65535); //@line 810 "_codecs_iso2022.c"
        var $269=_find_pairencmap($268, 0, $262); //@line 810 "_codecs_iso2022.c"
        $coded=$269; //@line 810 "_codecs_iso2022.c"
        var $270=($269)==-3; //@line 812 "_codecs_iso2022.c"
        if ($270) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 812 "_codecs_iso2022.c"
      case 46: // $bb48
        $0=65535; //@line 813 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 813 "_codecs_iso2022.c"
      case 47: // $bb49
        var $271=$coded; //@line 815 "_codecs_iso2022.c"
        var $272=($271); //@line 815 "_codecs_iso2022.c"
        $0=$272; //@line 815 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 815 "_codecs_iso2022.c"
      case 48: // $bb50
        $0=65535; //@line 817 "_codecs_iso2022.c"
        __label__ = 49; break; //@line 817 "_codecs_iso2022.c"
      case 49: // $bb51
        var $273=$0; //@line 776 "_codecs_iso2022.c"
        $retval=$273; //@line 776 "_codecs_iso2022.c"
        var $retval52=$retval; //@line 776 "_codecs_iso2022.c"
        var $retval5253=((($retval52)) & 65535); //@line 776 "_codecs_iso2022.c"
        ;
        return $retval5253; //@line 776 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2000_1_encoder($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$data_addr; //@line 824 "_codecs_iso2022.c"
        var $2=$length_addr; //@line 824 "_codecs_iso2022.c"
        var $3=_jisx0213_encoder($1, $2, 2000); //@line 824 "_codecs_iso2022.c"
        $coded=$3; //@line 824 "_codecs_iso2022.c"
        var $4=$coded; //@line 825 "_codecs_iso2022.c"
        var $5=($4)==-1; //@line 825 "_codecs_iso2022.c"
        var $6=$coded; //@line 825 "_codecs_iso2022.c"
        var $7=($6)==-2; //@line 825 "_codecs_iso2022.c"
        var $or_cond=($5) | ($7);
        var $8=$coded; //@line 826 "_codecs_iso2022.c"
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 825 "_codecs_iso2022.c"
      case 1: // $bb1
        var $9=($8); //@line 826 "_codecs_iso2022.c"
        $0=$9; //@line 826 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 826 "_codecs_iso2022.c"
      case 2: // $bb2
        var $10=($8) < 0; //@line 827 "_codecs_iso2022.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 827 "_codecs_iso2022.c"
      case 3: // $bb3
        $0=65535; //@line 828 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 828 "_codecs_iso2022.c"
      case 4: // $bb4
        var $11=$coded; //@line 830 "_codecs_iso2022.c"
        var $12=($11); //@line 830 "_codecs_iso2022.c"
        $0=$12; //@line 830 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 830 "_codecs_iso2022.c"
      case 5: // $bb5
        var $13=$0; //@line 826 "_codecs_iso2022.c"
        $retval=$13; //@line 826 "_codecs_iso2022.c"
        var $retval6=$retval; //@line 826 "_codecs_iso2022.c"
        var $retval67=((($retval6)) & 65535); //@line 826 "_codecs_iso2022.c"
        ;
        return $retval67; //@line 826 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2000_1_encoder_paironly($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        var $ilength;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$length_addr; //@line 837 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 837 "_codecs_iso2022.c"
        $ilength=$2; //@line 837 "_codecs_iso2022.c"
        var $3=$data_addr; //@line 839 "_codecs_iso2022.c"
        var $4=$length_addr; //@line 839 "_codecs_iso2022.c"
        var $5=_jisx0213_encoder($3, $4, 2000); //@line 839 "_codecs_iso2022.c"
        $coded=$5; //@line 839 "_codecs_iso2022.c"
        var $6=$ilength; //@line 840 "_codecs_iso2022.c"
        if ($6 == 1) {
          __label__ = 1; break;
        }
        else if ($6 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $7=$coded; //@line 842 "_codecs_iso2022.c"
        var $8=($7)==-2; //@line 842 "_codecs_iso2022.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 842 "_codecs_iso2022.c"
      case 2: // $bb1
        $0=65534; //@line 843 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 843 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=65535; //@line 845 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 845 "_codecs_iso2022.c"
      case 4: // $bb3
        var $9=$length_addr; //@line 847 "_codecs_iso2022.c"
        var $10=HEAP[$9]; //@line 847 "_codecs_iso2022.c"
        var $11=($10)!=2; //@line 847 "_codecs_iso2022.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 847 "_codecs_iso2022.c"
      case 5: // $bb4
        $0=65535; //@line 848 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 848 "_codecs_iso2022.c"
      case 6: // $bb5
        var $12=$coded; //@line 850 "_codecs_iso2022.c"
        var $13=($12); //@line 850 "_codecs_iso2022.c"
        $0=$13; //@line 850 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 850 "_codecs_iso2022.c"
      case 7: // $bb6
        $0=65535; //@line 852 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 852 "_codecs_iso2022.c"
      case 8: // $bb7
        var $14=$0; //@line 843 "_codecs_iso2022.c"
        $retval=$14; //@line 843 "_codecs_iso2022.c"
        var $retval8=$retval; //@line 843 "_codecs_iso2022.c"
        var $retval89=((($retval8)) & 65535); //@line 843 "_codecs_iso2022.c"
        ;
        return $retval89; //@line 843 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2000_2_encoder($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$data_addr; //@line 859 "_codecs_iso2022.c"
        var $2=$length_addr; //@line 859 "_codecs_iso2022.c"
        var $3=_jisx0213_encoder($1, $2, 2000); //@line 859 "_codecs_iso2022.c"
        $coded=$3; //@line 859 "_codecs_iso2022.c"
        var $4=$coded; //@line 860 "_codecs_iso2022.c"
        var $5=($4)==-1; //@line 860 "_codecs_iso2022.c"
        var $6=$coded; //@line 860 "_codecs_iso2022.c"
        var $7=($6)==-2; //@line 860 "_codecs_iso2022.c"
        var $or_cond=($5) | ($7);
        var $8=$coded; //@line 861 "_codecs_iso2022.c"
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 860 "_codecs_iso2022.c"
      case 1: // $bb1
        var $9=($8); //@line 861 "_codecs_iso2022.c"
        $0=$9; //@line 861 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 861 "_codecs_iso2022.c"
      case 2: // $bb2
        var $10=($8) < 0; //@line 862 "_codecs_iso2022.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 862 "_codecs_iso2022.c"
      case 3: // $bb3
        var $11=$coded; //@line 863 "_codecs_iso2022.c"
        var $12=($11); //@line 863 "_codecs_iso2022.c"
        var $13=($12) & 32767; //@line 863 "_codecs_iso2022.c"
        $0=$13; //@line 863 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 863 "_codecs_iso2022.c"
      case 4: // $bb4
        $0=65535; //@line 865 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 865 "_codecs_iso2022.c"
      case 5: // $bb5
        var $14=$0; //@line 861 "_codecs_iso2022.c"
        $retval=$14; //@line 861 "_codecs_iso2022.c"
        var $retval6=$retval; //@line 861 "_codecs_iso2022.c"
        var $retval67=((($retval6)) & 65535); //@line 861 "_codecs_iso2022.c"
        ;
        return $retval67; //@line 861 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2004_1_encoder($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$data_addr; //@line 871 "_codecs_iso2022.c"
        var $2=$length_addr; //@line 871 "_codecs_iso2022.c"
        var $3=_jisx0213_encoder($1, $2, 0); //@line 871 "_codecs_iso2022.c"
        $coded=$3; //@line 871 "_codecs_iso2022.c"
        var $4=$coded; //@line 872 "_codecs_iso2022.c"
        var $5=($4)==-1; //@line 872 "_codecs_iso2022.c"
        var $6=$coded; //@line 872 "_codecs_iso2022.c"
        var $7=($6)==-2; //@line 872 "_codecs_iso2022.c"
        var $or_cond=($5) | ($7);
        var $8=$coded; //@line 873 "_codecs_iso2022.c"
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 872 "_codecs_iso2022.c"
      case 1: // $bb1
        var $9=($8); //@line 873 "_codecs_iso2022.c"
        $0=$9; //@line 873 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 873 "_codecs_iso2022.c"
      case 2: // $bb2
        var $10=($8) < 0; //@line 874 "_codecs_iso2022.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 874 "_codecs_iso2022.c"
      case 3: // $bb3
        $0=65535; //@line 875 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 875 "_codecs_iso2022.c"
      case 4: // $bb4
        var $11=$coded; //@line 877 "_codecs_iso2022.c"
        var $12=($11); //@line 877 "_codecs_iso2022.c"
        $0=$12; //@line 877 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 877 "_codecs_iso2022.c"
      case 5: // $bb5
        var $13=$0; //@line 873 "_codecs_iso2022.c"
        $retval=$13; //@line 873 "_codecs_iso2022.c"
        var $retval6=$retval; //@line 873 "_codecs_iso2022.c"
        var $retval67=((($retval6)) & 65535); //@line 873 "_codecs_iso2022.c"
        ;
        return $retval67; //@line 873 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2004_1_encoder_paironly($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        var $ilength;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$length_addr; //@line 884 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 884 "_codecs_iso2022.c"
        $ilength=$2; //@line 884 "_codecs_iso2022.c"
        var $3=$data_addr; //@line 886 "_codecs_iso2022.c"
        var $4=$length_addr; //@line 886 "_codecs_iso2022.c"
        var $5=_jisx0213_encoder($3, $4, 0); //@line 886 "_codecs_iso2022.c"
        $coded=$5; //@line 886 "_codecs_iso2022.c"
        var $6=$ilength; //@line 887 "_codecs_iso2022.c"
        if ($6 == 1) {
          __label__ = 1; break;
        }
        else if ($6 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $7=$coded; //@line 889 "_codecs_iso2022.c"
        var $8=($7)==-2; //@line 889 "_codecs_iso2022.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 889 "_codecs_iso2022.c"
      case 2: // $bb1
        $0=65534; //@line 890 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 890 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=65535; //@line 892 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 892 "_codecs_iso2022.c"
      case 4: // $bb3
        var $9=$length_addr; //@line 894 "_codecs_iso2022.c"
        var $10=HEAP[$9]; //@line 894 "_codecs_iso2022.c"
        var $11=($10)!=2; //@line 894 "_codecs_iso2022.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 894 "_codecs_iso2022.c"
      case 5: // $bb4
        $0=65535; //@line 895 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 895 "_codecs_iso2022.c"
      case 6: // $bb5
        var $12=$coded; //@line 897 "_codecs_iso2022.c"
        var $13=($12); //@line 897 "_codecs_iso2022.c"
        $0=$13; //@line 897 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 897 "_codecs_iso2022.c"
      case 7: // $bb6
        $0=65535; //@line 899 "_codecs_iso2022.c"
        __label__ = 8; break; //@line 899 "_codecs_iso2022.c"
      case 8: // $bb7
        var $14=$0; //@line 890 "_codecs_iso2022.c"
        $retval=$14; //@line 890 "_codecs_iso2022.c"
        var $retval8=$retval; //@line 890 "_codecs_iso2022.c"
        var $retval89=((($retval8)) & 65535); //@line 890 "_codecs_iso2022.c"
        ;
        return $retval89; //@line 890 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0213_2004_2_encoder($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$data_addr; //@line 906 "_codecs_iso2022.c"
        var $2=$length_addr; //@line 906 "_codecs_iso2022.c"
        var $3=_jisx0213_encoder($1, $2, 0); //@line 906 "_codecs_iso2022.c"
        $coded=$3; //@line 906 "_codecs_iso2022.c"
        var $4=$coded; //@line 907 "_codecs_iso2022.c"
        var $5=($4)==-1; //@line 907 "_codecs_iso2022.c"
        var $6=$coded; //@line 907 "_codecs_iso2022.c"
        var $7=($6)==-2; //@line 907 "_codecs_iso2022.c"
        var $or_cond=($5) | ($7);
        var $8=$coded; //@line 908 "_codecs_iso2022.c"
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 907 "_codecs_iso2022.c"
      case 1: // $bb1
        var $9=($8); //@line 908 "_codecs_iso2022.c"
        $0=$9; //@line 908 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 908 "_codecs_iso2022.c"
      case 2: // $bb2
        var $10=($8) < 0; //@line 909 "_codecs_iso2022.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 909 "_codecs_iso2022.c"
      case 3: // $bb3
        var $11=$coded; //@line 910 "_codecs_iso2022.c"
        var $12=($11); //@line 910 "_codecs_iso2022.c"
        var $13=($12) & 32767; //@line 910 "_codecs_iso2022.c"
        $0=$13; //@line 910 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 910 "_codecs_iso2022.c"
      case 4: // $bb4
        $0=65535; //@line 912 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 912 "_codecs_iso2022.c"
      case 5: // $bb5
        var $14=$0; //@line 908 "_codecs_iso2022.c"
        $retval=$14; //@line 908 "_codecs_iso2022.c"
        var $retval6=$retval; //@line 908 "_codecs_iso2022.c"
        var $retval67=((($retval6)) & 65535); //@line 908 "_codecs_iso2022.c"
        ;
        return $retval67; //@line 908 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0201_r_decoder($data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $retval;
        var $0;
        var $u;
        $data_addr=$data;
        var $1=$data_addr; //@line 919 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 919 "_codecs_iso2022.c"
        var $3=($2) <= 91; //@line 919 "_codecs_iso2022.c"
        var $4=$data_addr; //@line 919 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 919 "_codecs_iso2022.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 919 "_codecs_iso2022.c"
      case 1: // $bb
        var $6=($5); //@line 919 "_codecs_iso2022.c"
        $u=$6; //@line 919 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 919 "_codecs_iso2022.c"
      case 2: // $bb1
        var $7=($5)==92; //@line 919 "_codecs_iso2022.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 919 "_codecs_iso2022.c"
      case 3: // $bb2
        $u=165; //@line 919 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 919 "_codecs_iso2022.c"
      case 4: // $bb3
        var $8=$data_addr; //@line 919 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 919 "_codecs_iso2022.c"
        var $10=($9) <= 125; //@line 919 "_codecs_iso2022.c"
        var $11=$data_addr; //@line 919 "_codecs_iso2022.c"
        var $12=HEAP[$11]; //@line 919 "_codecs_iso2022.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 919 "_codecs_iso2022.c"
      case 5: // $bb4
        var $13=($12); //@line 919 "_codecs_iso2022.c"
        $u=$13; //@line 919 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 919 "_codecs_iso2022.c"
      case 6: // $bb5
        var $14=($12)==126; //@line 919 "_codecs_iso2022.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 919 "_codecs_iso2022.c"
      case 7: // $bb6
        $u=8254; //@line 919 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 919 "_codecs_iso2022.c"
      case 8: // $bb7
        var $15=$data_addr; //@line 919 "_codecs_iso2022.c"
        var $16=HEAP[$15]; //@line 919 "_codecs_iso2022.c"
        var $17=($16)==127; //@line 919 "_codecs_iso2022.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 919 "_codecs_iso2022.c"
      case 9: // $bb8
        $u=127; //@line 919 "_codecs_iso2022.c"
        __label__ = 11; break; //@line 919 "_codecs_iso2022.c"
      case 10: // $bb9
        $0=65535; //@line 920 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 920 "_codecs_iso2022.c"
      case 11: // $bb10
        var $18=$u; //@line 921 "_codecs_iso2022.c"
        $0=$18; //@line 921 "_codecs_iso2022.c"
        __label__ = 12; break; //@line 921 "_codecs_iso2022.c"
      case 12: // $bb11
        var $19=$0; //@line 920 "_codecs_iso2022.c"
        $retval=$19; //@line 920 "_codecs_iso2022.c"
        var $retval12=$retval; //@line 920 "_codecs_iso2022.c"
        ;
        return $retval12; //@line 920 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0201_r_encoder($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$data_addr; //@line 928 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 928 "_codecs_iso2022.c"
        var $3=($2) > 127; //@line 928 "_codecs_iso2022.c"
        if ($3) { __label__ = 4; break; } else { __label__ = 1; break; } //@line 928 "_codecs_iso2022.c"
      case 1: // $bb
        var $4=$data_addr; //@line 928 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 928 "_codecs_iso2022.c"
        var $6=($5)==92; //@line 928 "_codecs_iso2022.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 928 "_codecs_iso2022.c"
      case 2: // $bb1
        var $7=$data_addr; //@line 928 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 928 "_codecs_iso2022.c"
        var $9=($8)==126; //@line 928 "_codecs_iso2022.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 928 "_codecs_iso2022.c"
      case 3: // $bb2
        var $10=$data_addr; //@line 928 "_codecs_iso2022.c"
        var $11=HEAP[$10]; //@line 928 "_codecs_iso2022.c"
        var $12=((($11)) & 65535); //@line 928 "_codecs_iso2022.c"
        $coded=$12; //@line 928 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 928 "_codecs_iso2022.c"
      case 4: // $bb3
        var $13=$data_addr; //@line 928 "_codecs_iso2022.c"
        var $14=HEAP[$13]; //@line 928 "_codecs_iso2022.c"
        var $15=($14)==165; //@line 928 "_codecs_iso2022.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 928 "_codecs_iso2022.c"
      case 5: // $bb4
        $coded=92; //@line 928 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 928 "_codecs_iso2022.c"
      case 6: // $bb5
        var $16=$data_addr; //@line 928 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 928 "_codecs_iso2022.c"
        var $18=($17)==8254; //@line 928 "_codecs_iso2022.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 928 "_codecs_iso2022.c"
      case 7: // $bb6
        $coded=126; //@line 928 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 928 "_codecs_iso2022.c"
      case 8: // $bb7
        $0=65535; //@line 929 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 929 "_codecs_iso2022.c"
      case 9: // $bb8
        var $19=$coded; //@line 930 "_codecs_iso2022.c"
        var $20=($19); //@line 930 "_codecs_iso2022.c"
        $0=$20; //@line 930 "_codecs_iso2022.c"
        __label__ = 10; break; //@line 930 "_codecs_iso2022.c"
      case 10: // $bb9
        var $21=$0; //@line 929 "_codecs_iso2022.c"
        $retval=$21; //@line 929 "_codecs_iso2022.c"
        var $retval10=$retval; //@line 929 "_codecs_iso2022.c"
        var $retval1011=((($retval10)) & 65535); //@line 929 "_codecs_iso2022.c"
        ;
        return $retval1011; //@line 929 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0201_k_decoder($data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $retval;
        var $0;
        var $u;
        $data_addr=$data;
        var $1=$data_addr; //@line 937 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 937 "_codecs_iso2022.c"
        var $3=($2) ^ -128; //@line 937 "_codecs_iso2022.c"
        var $4=($3) <= 160; //@line 937 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 937 "_codecs_iso2022.c"
      case 1: // $bb
        var $5=$data_addr; //@line 937 "_codecs_iso2022.c"
        var $6=HEAP[$5]; //@line 937 "_codecs_iso2022.c"
        var $7=($6) ^ -128; //@line 937 "_codecs_iso2022.c"
        var $8=($7) > 223; //@line 937 "_codecs_iso2022.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 937 "_codecs_iso2022.c"
      case 2: // $bb1
        var $9=$data_addr; //@line 937 "_codecs_iso2022.c"
        var $10=HEAP[$9]; //@line 937 "_codecs_iso2022.c"
        var $11=($10) ^ -128; //@line 937 "_codecs_iso2022.c"
        var $12=($11); //@line 937 "_codecs_iso2022.c"
        var $13=($12) + 65216; //@line 937 "_codecs_iso2022.c"
        $u=$13; //@line 937 "_codecs_iso2022.c"
        var $14=$u; //@line 939 "_codecs_iso2022.c"
        $0=$14; //@line 939 "_codecs_iso2022.c"
        __label__ = 4; break; //@line 939 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=65535; //@line 938 "_codecs_iso2022.c"
        __label__ = 4; break; //@line 938 "_codecs_iso2022.c"
      case 4: // $bb3
        var $15=$0; //@line 938 "_codecs_iso2022.c"
        $retval=$15; //@line 938 "_codecs_iso2022.c"
        var $retval4=$retval; //@line 938 "_codecs_iso2022.c"
        ;
        return $retval4; //@line 938 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _jisx0201_k_encoder($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$data_addr; //@line 946 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 946 "_codecs_iso2022.c"
        var $3=($2) <= 65376; //@line 946 "_codecs_iso2022.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 946 "_codecs_iso2022.c"
      case 1: // $bb
        var $4=$data_addr; //@line 946 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 946 "_codecs_iso2022.c"
        var $6=($5) > 65439; //@line 946 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 946 "_codecs_iso2022.c"
      case 2: // $bb1
        var $7=$data_addr; //@line 946 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 946 "_codecs_iso2022.c"
        var $9=((($8)) & 65535); //@line 946 "_codecs_iso2022.c"
        var $10=($9) - -320; //@line 946 "_codecs_iso2022.c"
        $coded=$10; //@line 946 "_codecs_iso2022.c"
        var $11=$coded; //@line 948 "_codecs_iso2022.c"
        var $12=($11) - 128; //@line 948 "_codecs_iso2022.c"
        var $13=($12); //@line 948 "_codecs_iso2022.c"
        $0=$13; //@line 948 "_codecs_iso2022.c"
        __label__ = 4; break; //@line 948 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=65535; //@line 947 "_codecs_iso2022.c"
        __label__ = 4; break; //@line 947 "_codecs_iso2022.c"
      case 4: // $bb3
        var $14=$0; //@line 947 "_codecs_iso2022.c"
        $retval=$14; //@line 947 "_codecs_iso2022.c"
        var $retval4=$retval; //@line 947 "_codecs_iso2022.c"
        var $retval45=((($retval4)) & 65535); //@line 947 "_codecs_iso2022.c"
        ;
        return $retval45; //@line 947 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gb2312_init() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $_b=HEAP[_initialized_10822_b];
        var $1=($_b);
        var $2=($1)==0; //@line 956 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 956 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=_importmap(__str27, __str28, _gbcommon_encmap, 0); //@line 956 "_codecs_iso2022.c"
        var $4=($3)!=0; //@line 956 "_codecs_iso2022.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 956 "_codecs_iso2022.c"
      case 2: // $bb1
        var $5=_importmap(__str27, __str29, 0, _gb2312_decmap); //@line 956 "_codecs_iso2022.c"
        var $6=($5)!=0; //@line 956 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 956 "_codecs_iso2022.c"
      case 3: // $bb2
        $0=-1; //@line 959 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 959 "_codecs_iso2022.c"
      case 4: // $bb3
        HEAP[_initialized_10822_b]=1;
        $0=0; //@line 961 "_codecs_iso2022.c"
        __label__ = 5; break; //@line 961 "_codecs_iso2022.c"
      case 5: // $bb4
        var $7=$0; //@line 959 "_codecs_iso2022.c"
        $retval=$7; //@line 959 "_codecs_iso2022.c"
        var $retval5=$retval; //@line 959 "_codecs_iso2022.c"
        ;
        return $retval5; //@line 959 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gb2312_decoder($data) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $retval;
        var $0;
        var $u;
        $data_addr=$data;
        var $1=HEAP[_gb2312_decmap]; //@line 968 "_codecs_iso2022.c"
        var $2=$data_addr; //@line 968 "_codecs_iso2022.c"
        var $3=$2; //@line 968 "_codecs_iso2022.c"
        var $4=HEAP[$3]; //@line 968 "_codecs_iso2022.c"
        var $5=($4); //@line 968 "_codecs_iso2022.c"
        var $6=$1+8*$5; //@line 968 "_codecs_iso2022.c"
        var $7=$6; //@line 968 "_codecs_iso2022.c"
        var $8=HEAP[$7]; //@line 968 "_codecs_iso2022.c"
        var $9=$8; //@line 968 "_codecs_iso2022.c"
        var $10=($9)==0; //@line 968 "_codecs_iso2022.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 968 "_codecs_iso2022.c"
      case 1: // $bb
        var $11=$data_addr; //@line 968 "_codecs_iso2022.c"
        var $12=$11+1; //@line 968 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 968 "_codecs_iso2022.c"
        var $14=HEAP[_gb2312_decmap]; //@line 968 "_codecs_iso2022.c"
        var $15=$data_addr; //@line 968 "_codecs_iso2022.c"
        var $16=$15; //@line 968 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 968 "_codecs_iso2022.c"
        var $18=($17); //@line 968 "_codecs_iso2022.c"
        var $19=$14+8*$18; //@line 968 "_codecs_iso2022.c"
        var $20=$19+4; //@line 968 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 968 "_codecs_iso2022.c"
        var $22=($13) < ($21); //@line 968 "_codecs_iso2022.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 968 "_codecs_iso2022.c"
      case 2: // $bb1
        var $23=$data_addr; //@line 968 "_codecs_iso2022.c"
        var $24=$23+1; //@line 968 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 968 "_codecs_iso2022.c"
        var $26=HEAP[_gb2312_decmap]; //@line 968 "_codecs_iso2022.c"
        var $27=$data_addr; //@line 968 "_codecs_iso2022.c"
        var $28=$27; //@line 968 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 968 "_codecs_iso2022.c"
        var $30=($29); //@line 968 "_codecs_iso2022.c"
        var $31=$26+8*$30; //@line 968 "_codecs_iso2022.c"
        var $32=$31+5; //@line 968 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 968 "_codecs_iso2022.c"
        var $34=($25) > ($33); //@line 968 "_codecs_iso2022.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 968 "_codecs_iso2022.c"
      case 3: // $bb2
        var $35=HEAP[_gb2312_decmap]; //@line 968 "_codecs_iso2022.c"
        var $36=$data_addr; //@line 968 "_codecs_iso2022.c"
        var $37=$36; //@line 968 "_codecs_iso2022.c"
        var $38=HEAP[$37]; //@line 968 "_codecs_iso2022.c"
        var $39=($38); //@line 968 "_codecs_iso2022.c"
        var $40=$35+8*$39; //@line 968 "_codecs_iso2022.c"
        var $41=$40; //@line 968 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 968 "_codecs_iso2022.c"
        var $43=$data_addr; //@line 968 "_codecs_iso2022.c"
        var $44=$43+1; //@line 968 "_codecs_iso2022.c"
        var $45=HEAP[$44]; //@line 968 "_codecs_iso2022.c"
        var $46=($45); //@line 968 "_codecs_iso2022.c"
        var $47=HEAP[_gb2312_decmap]; //@line 968 "_codecs_iso2022.c"
        var $48=$data_addr; //@line 968 "_codecs_iso2022.c"
        var $49=$48; //@line 968 "_codecs_iso2022.c"
        var $50=HEAP[$49]; //@line 968 "_codecs_iso2022.c"
        var $51=($50); //@line 968 "_codecs_iso2022.c"
        var $52=$47+8*$51; //@line 968 "_codecs_iso2022.c"
        var $53=$52+4; //@line 968 "_codecs_iso2022.c"
        var $54=HEAP[$53]; //@line 968 "_codecs_iso2022.c"
        var $55=($54); //@line 968 "_codecs_iso2022.c"
        var $56=($46) - ($55); //@line 968 "_codecs_iso2022.c"
        var $57=$42+2*$56; //@line 968 "_codecs_iso2022.c"
        var $58=HEAP[$57]; //@line 968 "_codecs_iso2022.c"
        var $59=($58); //@line 968 "_codecs_iso2022.c"
        $u=$59; //@line 968 "_codecs_iso2022.c"
        var $60=$u; //@line 968 "_codecs_iso2022.c"
        var $61=($60)==65534; //@line 968 "_codecs_iso2022.c"
        if ($61) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 968 "_codecs_iso2022.c"
      case 4: // $bb3
        var $62=$u; //@line 969 "_codecs_iso2022.c"
        $0=$62; //@line 969 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 969 "_codecs_iso2022.c"
      case 5: // $bb4
        $0=65535; //@line 971 "_codecs_iso2022.c"
        __label__ = 6; break; //@line 971 "_codecs_iso2022.c"
      case 6: // $bb5
        var $63=$0; //@line 969 "_codecs_iso2022.c"
        $retval=$63; //@line 969 "_codecs_iso2022.c"
        var $retval6=$retval; //@line 969 "_codecs_iso2022.c"
        ;
        return $retval6; //@line 969 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gb2312_encoder($data, $length) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $data_addr;
        var $length_addr;
        var $retval;
        var $0;
        var $coded;
        $data_addr=$data;
        $length_addr=$length;
        var $1=$length_addr; //@line 978 "_codecs_iso2022.c"
        var $2=HEAP[$1]; //@line 978 "_codecs_iso2022.c"
        var $3=($2)!=1; //@line 978 "_codecs_iso2022.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 978 "_codecs_iso2022.c"
      case 1: // $bb
        ___assert_fail(__str15, __str10, 978, ___PRETTY_FUNCTION___10884); //@line 978 "_codecs_iso2022.c"
        throw "Reached an unreachable!" //@line 978 "_codecs_iso2022.c"
      case 2: // $bb1
        var $4=$data_addr; //@line 979 "_codecs_iso2022.c"
        var $5=HEAP[$4]; //@line 979 "_codecs_iso2022.c"
        var $6=($5) <= 65535; //@line 979 "_codecs_iso2022.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 979 "_codecs_iso2022.c"
      case 3: // $bb2
        var $7=HEAP[_gbcommon_encmap]; //@line 980 "_codecs_iso2022.c"
        var $8=$data_addr; //@line 980 "_codecs_iso2022.c"
        var $9=HEAP[$8]; //@line 980 "_codecs_iso2022.c"
        var $10=($9) >>> 8; //@line 980 "_codecs_iso2022.c"
        var $11=$7+8*$10; //@line 980 "_codecs_iso2022.c"
        var $12=$11; //@line 980 "_codecs_iso2022.c"
        var $13=HEAP[$12]; //@line 980 "_codecs_iso2022.c"
        var $14=$13; //@line 980 "_codecs_iso2022.c"
        var $15=($14)!=0; //@line 980 "_codecs_iso2022.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 980 "_codecs_iso2022.c"
      case 4: // $bb3
        var $16=$data_addr; //@line 980 "_codecs_iso2022.c"
        var $17=HEAP[$16]; //@line 980 "_codecs_iso2022.c"
        var $18=($17) & 255; //@line 980 "_codecs_iso2022.c"
        var $19=HEAP[_gbcommon_encmap]; //@line 980 "_codecs_iso2022.c"
        var $20=$data_addr; //@line 980 "_codecs_iso2022.c"
        var $21=HEAP[$20]; //@line 980 "_codecs_iso2022.c"
        var $22=($21) >>> 8; //@line 980 "_codecs_iso2022.c"
        var $23=$19+8*$22; //@line 980 "_codecs_iso2022.c"
        var $24=$23+4; //@line 980 "_codecs_iso2022.c"
        var $25=HEAP[$24]; //@line 980 "_codecs_iso2022.c"
        var $26=($25); //@line 980 "_codecs_iso2022.c"
        var $27=($18) >= ($26); //@line 980 "_codecs_iso2022.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 980 "_codecs_iso2022.c"
      case 5: // $bb4
        var $28=$data_addr; //@line 980 "_codecs_iso2022.c"
        var $29=HEAP[$28]; //@line 980 "_codecs_iso2022.c"
        var $30=($29) & 255; //@line 980 "_codecs_iso2022.c"
        var $31=HEAP[_gbcommon_encmap]; //@line 980 "_codecs_iso2022.c"
        var $32=$data_addr; //@line 980 "_codecs_iso2022.c"
        var $33=HEAP[$32]; //@line 980 "_codecs_iso2022.c"
        var $34=($33) >>> 8; //@line 980 "_codecs_iso2022.c"
        var $35=$31+8*$34; //@line 980 "_codecs_iso2022.c"
        var $36=$35+5; //@line 980 "_codecs_iso2022.c"
        var $37=HEAP[$36]; //@line 980 "_codecs_iso2022.c"
        var $38=($37); //@line 980 "_codecs_iso2022.c"
        var $39=($30) <= ($38); //@line 980 "_codecs_iso2022.c"
        if ($39) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 980 "_codecs_iso2022.c"
      case 6: // $bb5
        var $40=HEAP[_gbcommon_encmap]; //@line 980 "_codecs_iso2022.c"
        var $41=$data_addr; //@line 980 "_codecs_iso2022.c"
        var $42=HEAP[$41]; //@line 980 "_codecs_iso2022.c"
        var $43=($42) >>> 8; //@line 980 "_codecs_iso2022.c"
        var $44=$40+8*$43; //@line 980 "_codecs_iso2022.c"
        var $45=$44; //@line 980 "_codecs_iso2022.c"
        var $46=HEAP[$45]; //@line 980 "_codecs_iso2022.c"
        var $47=$data_addr; //@line 980 "_codecs_iso2022.c"
        var $48=HEAP[$47]; //@line 980 "_codecs_iso2022.c"
        var $49=($48) & 255; //@line 980 "_codecs_iso2022.c"
        var $50=HEAP[_gbcommon_encmap]; //@line 980 "_codecs_iso2022.c"
        var $51=$data_addr; //@line 980 "_codecs_iso2022.c"
        var $52=HEAP[$51]; //@line 980 "_codecs_iso2022.c"
        var $53=($52) >>> 8; //@line 980 "_codecs_iso2022.c"
        var $54=$50+8*$53; //@line 980 "_codecs_iso2022.c"
        var $55=$54+4; //@line 980 "_codecs_iso2022.c"
        var $56=HEAP[$55]; //@line 980 "_codecs_iso2022.c"
        var $57=($56); //@line 980 "_codecs_iso2022.c"
        var $58=($49) - ($57); //@line 980 "_codecs_iso2022.c"
        var $59=$46+2*$58; //@line 980 "_codecs_iso2022.c"
        var $60=HEAP[$59]; //@line 980 "_codecs_iso2022.c"
        $coded=$60; //@line 980 "_codecs_iso2022.c"
        var $61=$coded; //@line 980 "_codecs_iso2022.c"
        var $62=($61)!=-1; //@line 980 "_codecs_iso2022.c"
        var $63=$coded; //@line 981 "_codecs_iso2022.c"
        var $64=($63) >= 0; //@line 981 "_codecs_iso2022.c"
        var $or_cond=($62) & ($64);
        if ($or_cond) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 980 "_codecs_iso2022.c"
      case 7: // $bb7
        var $65=$coded; //@line 982 "_codecs_iso2022.c"
        var $66=($65); //@line 982 "_codecs_iso2022.c"
        $0=$66; //@line 982 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 982 "_codecs_iso2022.c"
      case 8: // $bb8
        $0=65535; //@line 985 "_codecs_iso2022.c"
        __label__ = 9; break; //@line 985 "_codecs_iso2022.c"
      case 9: // $bb9
        var $67=$0; //@line 982 "_codecs_iso2022.c"
        $retval=$67; //@line 982 "_codecs_iso2022.c"
        var $retval10=$retval; //@line 982 "_codecs_iso2022.c"
        var $retval1011=((($retval10)) & 65535); //@line 982 "_codecs_iso2022.c"
        ;
        return $retval1011; //@line 982 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dummy_decoder($data) {
    ;
    var __label__;
  
    var $retval;
    var $0;
    $0=65535; //@line 992 "_codecs_iso2022.c"
    var $1=$0; //@line 992 "_codecs_iso2022.c"
    $retval=$1; //@line 992 "_codecs_iso2022.c"
    var $retval1=$retval; //@line 992 "_codecs_iso2022.c"
    ;
    return $retval1; //@line 992 "_codecs_iso2022.c"
  }
  

  function _dummy_encoder($data, $length) {
    ;
    var __label__;
  
    var $data_addr;
    var $retval;
    var $0;
    $data_addr=$data;
    $0=65535; //@line 998 "_codecs_iso2022.c"
    var $1=$0; //@line 998 "_codecs_iso2022.c"
    $retval=$1; //@line 998 "_codecs_iso2022.c"
    var $retval1=$retval; //@line 998 "_codecs_iso2022.c"
    var $retval12=((($retval1)) & 65535); //@line 998 "_codecs_iso2022.c"
    ;
    return $retval12; //@line 998 "_codecs_iso2022.c"
  }
  

  function _init_codecs_iso2022() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $0=_Py_InitModule4(__str37, ___methods, 0, 0, 1013); //@line 1131 "_codecs_iso2022.c"
        $m=$0; //@line 1131 "_codecs_iso2022.c"
        var $1=$m; //@line 1131 "_codecs_iso2022.c"
        var $2=($1)!=0; //@line 1131 "_codecs_iso2022.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1131 "_codecs_iso2022.c"
      case 1: // $bb
        var $3=$m; //@line 1131 "_codecs_iso2022.c"
        _register_maps($3); //@line 1131 "_codecs_iso2022.c"
        __label__ = 2; break; //@line 1131 "_codecs_iso2022.c"
      case 2: // $return
        ;
        return; //@line 1131 "_codecs_iso2022.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_codecs_iso2022"] = _init_codecs_iso2022;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_getcodec,0,_ksx1001_init,0,_ksx1001_decoder,0,_ksx1001_encoder,0,_jisx0208_init,0,_jisx0208_decoder,0,_jisx0208_encoder,0,_jisx0201_r_decoder,0,_jisx0201_r_encoder,0,_jisx0212_init,0,_jisx0212_decoder,0,_jisx0212_encoder,0,_gb2312_init,0,_gb2312_decoder,0,_gb2312_encoder,0,_dummy_decoder,0,_dummy_encoder,0,_jisx0213_init,0,_jisx0213_2004_1_decoder,0,_jisx0213_2004_1_encoder_paironly,0,_jisx0213_2004_1_encoder,0,_jisx0213_2004_2_decoder,0,_jisx0213_2004_2_encoder,0,_jisx0213_2000_1_decoder,0,_jisx0213_2000_1_encoder_paironly,0,_jisx0213_2000_1_encoder,0,_jisx0213_2000_2_decoder,0,_jisx0213_2000_2_encoder,0,_jisx0201_k_decoder,0,_jisx0201_k_encoder,0,_iso2022_codec_init,0,_iso2022_encode,0,_iso2022_encode_init,0,_iso2022_encode_reset,0,_iso2022_decode,0,_iso2022_decode_init,0,_iso2022_decode_reset,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_cofunc_8453=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str=allocate([95,109,117,108,116,105,98,121,116,101,99,111,100,101,99,0] /* _multibytecodec\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([95,95,99,114,101,97,116,101,95,99,111,100,101,99,0] /* __create_codec\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([101,110,99,111,100,105,110,103,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,46,0] /* encoding name must b */, "i8", ALLOC_NORMAL);
__str3=allocate([110,111,32,115,117,99,104,32,99,111,100,101,99,32,105,115,32,115,117,112,112,111,114,116,101,100,46,0] /* no such codec is sup */, "i8", ALLOC_NORMAL);
__str4=allocate([109,117,108,116,105,98,121,116,101,99,111,100,101,99,46,95,95,109,97,112,95,42,0] /* multibytecodec.__map */, "i8", ALLOC_NORMAL);
__str5=allocate([103,101,116,99,111,100,101,99,0] /* getcodec\00 */, "i8", ALLOC_NORMAL);
__str6=allocate(1, "i8", ALLOC_NORMAL);
___methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str7=allocate([95,95,109,97,112,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] /* __map_\00\00\00\00\0 */, "i8", ALLOC_NORMAL);
__str8=allocate([109,97,112,32,100,97,116,97,32,109,117,115,116,32,98,101,32,97,32,67,97,112,115,117,108,101,46,0] /* map data must be a C */, "i8", ALLOC_NORMAL);
__str9=allocate([100,115,103,45,62,119,105,100,116,104,32,61,61,32,49,32,124,124,32,100,115,103,45,62,119,105,100,116,104,32,61,61,32,50,0] /* dsg->width == 1 || d */, "i8", ALLOC_NORMAL);
__str10=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,99,106,107,99,111,100,101,99,115,47,95,99,111,100,101,99,115,95,105,115,111,50,48,50,50,46,99,0] /* ../cpython/Modules/c */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8716=allocate([105,115,111,50,48,50,50,95,101,110,99,111,100,101,0] /* iso2022_encode\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([100,115,103,45,62,109,97,114,107,32,33,61,32,39,92,48,39,0] /* dsg->mark != '\5C0'\ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9242=allocate([105,115,111,50,48,50,50,95,100,101,99,111,100,101,0] /* iso2022_decode\00 */, "i8", ALLOC_NORMAL);
_cp949_encmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_ksx1001_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisxcommon_encmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0208_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0212_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_bmp_encmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_1_bmp_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_2_bmp_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_emp_encmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_1_emp_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_jisx0213_2_emp_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_gbcommon_encmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_gb2312_decmap=allocate(1, "%struct.dbcs_index*", ALLOC_NORMAL);
_initialized_9477_b=allocate(1, "i1", ALLOC_NORMAL);
__str12=allocate([95,99,111,100,101,99,115,95,107,114,0] /* _codecs_kr\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([95,95,109,97,112,95,99,112,57,52,57,0] /* __map_cp949\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([95,95,109,97,112,95,107,115,120,49,48,48,49,0] /* __map_ksx1001\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([42,108,101,110,103,116,104,32,61,61,32,49,0] /* _length == 1\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9539=allocate([107,115,120,49,48,48,49,95,101,110,99,111,100,101,114,0] /* ksx1001_encoder\00 */, "i8", ALLOC_NORMAL);
_initialized_9598_b=allocate(1, "i1", ALLOC_NORMAL);
__str16=allocate([95,99,111,100,101,99,115,95,106,112,0] /* _codecs_jp\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([95,95,109,97,112,95,106,105,115,120,99,111,109,109,111,110,0] /* __map_jisxcommon\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([95,95,109,97,112,95,106,105,115,120,48,50,48,56,0] /* __map_jisx0208\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9665=allocate([106,105,115,120,48,50,48,56,95,101,110,99,111,100,101,114,0] /* jisx0208_encoder\00 */, "i8", ALLOC_NORMAL);
_initialized_9727_b=allocate(1, "i1", ALLOC_NORMAL);
__str19=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,50,0] /* __map_jisx0212\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9789=allocate([106,105,115,120,48,50,49,50,95,101,110,99,111,100,101,114,0] /* jisx0212_encoder\00 */, "i8", ALLOC_NORMAL);
_initialized_9849_b=allocate(1, "i1", ALLOC_NORMAL);
__str20=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,98,109,112,0] /* __map_jisx0213_bmp\0 */, "i8", ALLOC_NORMAL);
__str21=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,49,95,98,109,112,0] /* __map_jisx0213_1_bmp */, "i8", ALLOC_NORMAL);
__str22=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,50,95,98,109,112,0] /* __map_jisx0213_2_bmp */, "i8", ALLOC_NORMAL);
__str23=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,101,109,112,0] /* __map_jisx0213_emp\0 */, "i8", ALLOC_NORMAL);
__str24=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,49,95,101,109,112,0] /* __map_jisx0213_1_emp */, "i8", ALLOC_NORMAL);
__str25=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,50,95,101,109,112,0] /* __map_jisx0213_2_emp */, "i8", ALLOC_NORMAL);
_jisx0213_pair_decmap=allocate(1, "%struct.widedbcs_index*", ALLOC_NORMAL);
_jisx0213_pair_encmap=allocate(1, "%struct.pair_encodemap*", ALLOC_NORMAL);
__str26=allocate([95,95,109,97,112,95,106,105,115,120,48,50,49,51,95,112,97,105,114,0] /* __map_jisx0213_pair\ */, "i8", ALLOC_NORMAL);
_initialized_10822_b=allocate(1, "i1", ALLOC_NORMAL);
__str27=allocate([95,99,111,100,101,99,115,95,99,110,0] /* _codecs_cn\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([95,95,109,97,112,95,103,98,99,111,109,109,111,110,0] /* __map_gbcommon\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([95,95,109,97,112,95,103,98,50,51,49,50,0] /* __map_gb2312\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10884=allocate([103,98,50,51,49,50,95,101,110,99,111,100,101,114,0] /* gb2312_encoder\00 */, "i8", ALLOC_NORMAL);
_iso2022_kr_designations=allocate([-61, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_kr_config=allocate(8, ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_designations=allocate([-62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_config=allocate([5, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_1_designations=allocate([-62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_1_config=allocate([5, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_2_designations=allocate([-62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -61, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -63, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_2_config=allocate([7, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_2004_designations=allocate([-47, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -47, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -48, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_2004_config=allocate([5, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_3_designations=allocate([-49, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -49, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -48, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_3_config=allocate([5, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
_iso2022_jp_ext_designations=allocate([-62, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -60, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 74, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -64, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8",0,"i32 ()*",0,0,0,"i32 (i8*)*",0,0,0,"i16 (i32*, i32*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_iso2022_jp_ext_config=allocate([5, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct.iso2022_designation*",0,0,0], ALLOC_NORMAL);
__mapping_list=allocate(12, ["i8*",0,0,0,"%struct.dbcs_index*",0,0,0,"%struct.dbcs_index*",0,0,0], ALLOC_NORMAL);
__str30=allocate([105,115,111,50,48,50,50,95,107,114,0] /* iso2022_kr\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([105,115,111,50,48,50,50,95,106,112,0] /* iso2022_jp\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([105,115,111,50,48,50,50,95,106,112,95,49,0] /* iso2022_jp_1\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([105,115,111,50,48,50,50,95,106,112,95,50,0] /* iso2022_jp_2\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([105,115,111,50,48,50,50,95,106,112,95,50,48,48,52,0] /* iso2022_jp_2004\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([105,115,111,50,48,50,50,95,106,112,95,51,0] /* iso2022_jp_3\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([105,115,111,50,48,50,50,95,106,112,95,101,120,116,0] /* iso2022_jp_ext\00 */, "i8", ALLOC_NORMAL);
__codec_list=allocate(288, ["i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32 (i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i16**, i32, i8**, i32, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*, i8**, i32, i16**, i32)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i32 (%union.MultibyteCodec_State*, i8*)*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str37=allocate([95,99,111,100,101,99,115,95,105,115,111,50,48,50,50,0] /* _codecs_iso2022\00 */, "i8", ALLOC_NORMAL);
HEAP[___methods]=__str5;
HEAP[___methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[___methods+12]=__str6;
HEAP[_iso2022_kr_designations+4]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_iso2022_kr_designations+8]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_iso2022_kr_designations+12]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_iso2022_kr_config+4]=_iso2022_kr_designations;
HEAP[_iso2022_jp_designations+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_designations+8]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_designations+12]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_designations+24]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_iso2022_jp_designations+28]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_iso2022_jp_designations+36]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_designations+40]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_designations+44]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_config+4]=_iso2022_jp_designations;
HEAP[_iso2022_jp_1_designations+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_1_designations+8]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_1_designations+12]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_1_designations+20]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_iso2022_jp_1_designations+24]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_iso2022_jp_1_designations+28]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_iso2022_jp_1_designations+40]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_iso2022_jp_1_designations+44]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_iso2022_jp_1_designations+52]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_1_designations+56]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_1_designations+60]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_1_config+4]=_iso2022_jp_1_designations;
HEAP[_iso2022_jp_2_designations+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_2_designations+8]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_2_designations+12]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_2_designations+20]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_iso2022_jp_2_designations+24]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_iso2022_jp_2_designations+28]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_iso2022_jp_2_designations+36]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_iso2022_jp_2_designations+40]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_iso2022_jp_2_designations+44]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_iso2022_jp_2_designations+52]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_iso2022_jp_2_designations+56]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_iso2022_jp_2_designations+60]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_iso2022_jp_2_designations+72]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_iso2022_jp_2_designations+76]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_iso2022_jp_2_designations+84]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_2_designations+88]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_2_designations+92]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_2_designations+104]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_iso2022_jp_2_designations+108]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_iso2022_jp_2_designations+120]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_iso2022_jp_2_designations+124]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_iso2022_jp_2_config+4]=_iso2022_jp_2_designations;
HEAP[_iso2022_jp_2004_designations+4]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_2004_designations+8]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_iso2022_jp_2004_designations+12]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_iso2022_jp_2004_designations+20]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_2004_designations+24]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_2004_designations+28]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_2004_designations+36]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_2004_designations+40]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_iso2022_jp_2004_designations+44]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_iso2022_jp_2004_designations+52]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_2004_designations+56]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_iso2022_jp_2004_designations+60]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_iso2022_jp_2004_config+4]=_iso2022_jp_2004_designations;
HEAP[_iso2022_jp_3_designations+4]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_3_designations+8]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_iso2022_jp_3_designations+12]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_iso2022_jp_3_designations+20]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_3_designations+24]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_3_designations+28]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_3_designations+36]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_3_designations+40]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_iso2022_jp_3_designations+44]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_iso2022_jp_3_designations+52]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_iso2022_jp_3_designations+56]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_iso2022_jp_3_designations+60]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_iso2022_jp_3_config+4]=_iso2022_jp_3_designations;
HEAP[_iso2022_jp_ext_designations+4]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_ext_designations+8]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_ext_designations+12]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_ext_designations+20]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_iso2022_jp_ext_designations+24]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_iso2022_jp_ext_designations+28]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_iso2022_jp_ext_designations+40]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_iso2022_jp_ext_designations+44]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_iso2022_jp_ext_designations+56]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_iso2022_jp_ext_designations+60]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_iso2022_jp_ext_designations+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_iso2022_jp_ext_designations+72]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_iso2022_jp_ext_designations+76]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_iso2022_jp_ext_config+4]=_iso2022_jp_ext_designations;
HEAP[__mapping_list]=__str6;
HEAP[__codec_list]=__str30;
HEAP[__codec_list+4]=_iso2022_kr_config;
HEAP[__codec_list+8]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+12]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+16]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+20]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+24]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+28]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+32]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+36]=__str31;
HEAP[__codec_list+40]=_iso2022_jp_config;
HEAP[__codec_list+44]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+48]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+52]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+56]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+60]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+64]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+68]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+72]=__str32;
HEAP[__codec_list+76]=_iso2022_jp_1_config;
HEAP[__codec_list+80]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+84]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+88]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+92]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+96]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+100]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+104]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+108]=__str33;
HEAP[__codec_list+112]=_iso2022_jp_2_config;
HEAP[__codec_list+116]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+120]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+124]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+128]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+132]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+136]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+140]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+144]=__str34;
HEAP[__codec_list+148]=_iso2022_jp_2004_config;
HEAP[__codec_list+152]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+156]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+160]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+164]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+168]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+172]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+176]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+180]=__str35;
HEAP[__codec_list+184]=_iso2022_jp_3_config;
HEAP[__codec_list+188]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+192]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+196]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+200]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+204]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+208]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+212]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+216]=__str36;
HEAP[__codec_list+220]=_iso2022_jp_ext_config;
HEAP[__codec_list+224]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[__codec_list+228]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[__codec_list+232]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[__codec_list+236]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[__codec_list+240]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[__codec_list+244]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[__codec_list+248]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[__codec_list+252]=__str6;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

