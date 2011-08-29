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



var $0___SIZE = 192; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 100; // %2
  
var $3___SIZE = 20; // %3
  
var $4___SIZE = 20; // %4
  
var $5___SIZE = 40; // %5
  
var $6___SIZE = 196; // %6
  
var $7___SIZE = 48; // %7
  
var $8___SIZE = 40; // %8
  
var $9___SIZE = 20; // %9
  
var $10___SIZE = 32; // %10
  
var $struct_BZ2CompObject___SIZE = 60; // %struct.BZ2CompObject
  var $struct_BZ2CompObject___FLATTENER = [0,4,8,56];
var $struct_BZ2DecompObject___SIZE = 64; // %struct.BZ2DecompObject
  var $struct_BZ2DecompObject___FLATTENER = [0,4,8,56,60];
var $struct_BZ2FileObject___SIZE = 64; // %struct.BZ2FileObject
  var $struct_BZ2FileObject___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,56];
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyFileObject___SIZE = 84; // %struct.PyFileObject
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
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
  
var $struct_bz_stream___SIZE = 48; // %struct.bz_stream
  
var ___author__;

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
var ___PRETTY_FUNCTION___8675;
var __str10;
var __str11;
var _BZ2File_read__doc__;
var __str12;
var __str13;
var __str14;
var __str15;
var __str16;
var _BZ2File_readline__doc__;
var __str17;
var _BZ2File_readlines__doc__;
var __str18;
var _BZ2File_xreadlines__doc__;
var _BZ2File_write__doc__;
var __str19;
var __str20;

var _BZ2File_writelines__doc__;

var __str21;
var __str22;
var _BZ2File_seek__doc__;
var __str23;
var __str24;
var __str25;
var ___PRETTY_FUNCTION___9317;
var __str26;
var __str27;
var _BZ2File_tell__doc__;
var _BZ2File_close__doc__;
var __str28;
var _BZ2File_enter_doc;
var _BZ2File_exit_doc;
var __str29;
var __str30;
var __str31;
var __str32;
var __str33;
var __str34;
var __str35;
var __str36;
var __str37;
var _BZ2File_methods;
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
var _BZ2File_getset;
var __str52;
var __str53;
var _BZ2File_members;
var __str54;
var __str55;
var _kwlist_9585;
var __str56;
var __str57;
var __str58;
var __str59;
var __str60;
var __str61;
var __str62;

var __str63;
var _BZ2File__doc__;
var __str64;
var _BZ2File_Type;
var _BZ2Comp_compress__doc__;
var __str65;
var __str66;
var _BZ2Comp_flush__doc__;
var __str67;
var __str68;
var __str69;
var _BZ2Comp_methods;
var __str70;
var _kwlist_9935;
var _BZ2Comp__doc__;
var __str71;
var _BZ2Comp_Type;
var __str72;
var _BZ2Decomp_members;
var _BZ2Decomp_decompress__doc__;
var __str73;
var __str74;
var __str75;
var _BZ2Decomp_methods;
var __str76;
var _BZ2Decomp__doc__;
var __str77;
var _BZ2Decomp_Type;
var _bz2_compress__doc__;
var __str78;
var _kwlist_10147;
var __str79;
var _bz2_decompress__doc__;
var __str80;
var _bz2_methods;
var _bz2__doc__;
var __str81;
var __str82;
var __str83;
var __str84;
var __str85;





























































  function _check_iterbuffered($f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr;
        var $retval;
        var $0;
        $f_addr=$f;
        var $1=$f_addr; //@line 153 "bz2module.c"
        var $2=$1+12; //@line 153 "bz2module.c"
        var $3=HEAP[$2]; //@line 153 "bz2module.c"
        var $4=($3)!=0; //@line 153 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 153 "bz2module.c"
      case 1: // $bb
        var $5=$f_addr; //@line 153 "bz2module.c"
        var $6=$5+16; //@line 153 "bz2module.c"
        var $7=HEAP[$6]; //@line 153 "bz2module.c"
        var $8=($7); //@line 153 "bz2module.c"
        var $9=$f_addr; //@line 153 "bz2module.c"
        var $10=$9+20; //@line 153 "bz2module.c"
        var $11=HEAP[$10]; //@line 153 "bz2module.c"
        var $12=($11); //@line 153 "bz2module.c"
        var $13=($8) - ($12); //@line 153 "bz2module.c"
        var $14=($13) > 0; //@line 153 "bz2module.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 153 "bz2module.c"
      case 2: // $bb1
        var $15=$f_addr; //@line 153 "bz2module.c"
        var $16=$15+12; //@line 153 "bz2module.c"
        var $17=HEAP[$16]; //@line 153 "bz2module.c"
        var $18=$17; //@line 153 "bz2module.c"
        var $19=HEAP[$18]; //@line 153 "bz2module.c"
        var $20=($19)!=0; //@line 153 "bz2module.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 153 "bz2module.c"
      case 3: // $bb2
        var $21=HEAP[_PyExc_ValueError]; //@line 156 "bz2module.c"
        _PyErr_SetString($21, __str); //@line 156 "bz2module.c"
        $0=-1; //@line 158 "bz2module.c"
        __label__ = 5; break; //@line 158 "bz2module.c"
      case 4: // $bb3
        $0=0; //@line 160 "bz2module.c"
        __label__ = 5; break; //@line 160 "bz2module.c"
      case 5: // $bb4
        var $22=$0; //@line 158 "bz2module.c"
        $retval=$22; //@line 158 "bz2module.c"
        var $retval5=$retval; //@line 158 "bz2module.c"
        ;
        return $retval5; //@line 158 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_CatchBZ2Error($bzerror) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $bzerror_addr;
        var $ret;
        $bzerror_addr=$bzerror;
        $ret=0; //@line 166 "bz2module.c"
        var $0=$bzerror_addr; //@line 167 "bz2module.c"
        if ($0 == -9) {
          __label__ = 1; break;
        }
        else if ($0 == -7) {
          __label__ = 6; break;
        }
        else if ($0 == -6) {
          __label__ = 5; break;
        }
        else if ($0 == -5) {
          __label__ = 4; break;
        }
        else if ($0 == -4) {
          __label__ = 4; break;
        }
        else if ($0 == -3) {
          __label__ = 3; break;
        }
        else if ($0 == -2) {
          __label__ = 2; break;
        }
        else if ($0 == -1) {
          __label__ = 7; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 1: // $bb1
        var $1=HEAP[_PyExc_SystemError]; //@line 174 "bz2module.c"
        _PyErr_SetString($1, __str1); //@line 174 "bz2module.c"
        $ret=1; //@line 177 "bz2module.c"
        __label__ = 8; break; //@line 177 "bz2module.c"
      case 2: // $bb2
        var $2=HEAP[_PyExc_ValueError]; //@line 182 "bz2module.c"
        _PyErr_SetString($2, __str2); //@line 182 "bz2module.c"
        $ret=1; //@line 185 "bz2module.c"
        __label__ = 8; break; //@line 185 "bz2module.c"
      case 3: // $bb3
        var $3=_PyErr_NoMemory(); //@line 189 "bz2module.c"
        $ret=1; //@line 190 "bz2module.c"
        __label__ = 8; break; //@line 190 "bz2module.c"
      case 4: // $bb4
        var $4=HEAP[_PyExc_IOError]; //@line 195 "bz2module.c"
        _PyErr_SetString($4, __str3); //@line 195 "bz2module.c"
        $ret=1; //@line 196 "bz2module.c"
        __label__ = 8; break; //@line 196 "bz2module.c"
      case 5: // $bb5
        var $5=HEAP[_PyExc_IOError]; //@line 200 "bz2module.c"
        _PyErr_SetString($5, __str4); //@line 200 "bz2module.c"
        $ret=1; //@line 201 "bz2module.c"
        __label__ = 8; break; //@line 201 "bz2module.c"
      case 6: // $bb6
        var $6=HEAP[_PyExc_EOFError]; //@line 205 "bz2module.c"
        _PyErr_SetString($6, __str5); //@line 205 "bz2module.c"
        $ret=1; //@line 208 "bz2module.c"
        __label__ = 8; break; //@line 208 "bz2module.c"
      case 7: // $bb7
        var $7=HEAP[_PyExc_RuntimeError]; //@line 212 "bz2module.c"
        _PyErr_SetString($7, __str6); //@line 212 "bz2module.c"
        $ret=1; //@line 215 "bz2module.c"
        __label__ = 8; break; //@line 215 "bz2module.c"
      case 8: // $bb8
        ;
        return;
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_NewBufferSize($currentsize) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $currentsize_addr;
        var $retval;
        var $0;
        $currentsize_addr=$currentsize;
        var $1=$currentsize_addr; //@line 237 "bz2module.c"
        var $2=($1) > 8192; //@line 237 "bz2module.c"
        var $3=$currentsize_addr; //@line 240 "bz2module.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 237 "bz2module.c"
      case 1: // $bb
        var $4=($3) <= 524288; //@line 240 "bz2module.c"
        var $5=$currentsize_addr; //@line 241 "bz2module.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 240 "bz2module.c"
      case 2: // $bb1
        var $6=$currentsize_addr; //@line 241 "bz2module.c"
        var $7=($6) + ($5); //@line 241 "bz2module.c"
        $0=$7; //@line 241 "bz2module.c"
        __label__ = 5; break; //@line 241 "bz2module.c"
      case 3: // $bb2
        var $8=($5) + 524288; //@line 243 "bz2module.c"
        $0=$8; //@line 243 "bz2module.c"
        __label__ = 5; break; //@line 243 "bz2module.c"
      case 4: // $bb3
        var $9=($3) + 8192; //@line 245 "bz2module.c"
        $0=$9; //@line 245 "bz2module.c"
        __label__ = 5; break; //@line 245 "bz2module.c"
      case 5: // $bb4
        var $10=$0; //@line 241 "bz2module.c"
        $retval=$10; //@line 241 "bz2module.c"
        var $retval5=$retval; //@line 241 "bz2module.c"
        ;
        return $retval5; //@line 241 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_GetLine($f, $n) {
    var __stackBase__  = STACKTOP; STACKTOP += 9; _memset(__stackBase__, 0, 9);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr;
        var $n_addr;
        var $retval;
        var $0;
        var $iftmp_7;
        var $c=__stackBase__;
        var $buf;
        var $end;
        var $total_v_size;
        var $used_v_size;
        var $increment;
        var $v=__stackBase__+1;
        var $bzerror=__stackBase__+5;
        var $bytes_read;
        var $newlinetypes;
        var $skipnextlf;
        var $univ_newline;
        $f_addr=$f;
        $n_addr=$n;
        var $1=$f_addr; //@line 260 "bz2module.c"
        var $2=$1+32; //@line 260 "bz2module.c"
        var $3=HEAP[$2]; //@line 260 "bz2module.c"
        $newlinetypes=$3; //@line 260 "bz2module.c"
        var $4=$f_addr; //@line 261 "bz2module.c"
        var $5=$4+36; //@line 261 "bz2module.c"
        var $6=HEAP[$5]; //@line 261 "bz2module.c"
        $skipnextlf=$6; //@line 261 "bz2module.c"
        var $7=$f_addr; //@line 262 "bz2module.c"
        var $8=$7+28; //@line 262 "bz2module.c"
        var $9=HEAP[$8]; //@line 262 "bz2module.c"
        $univ_newline=$9; //@line 262 "bz2module.c"
        var $10=$n_addr; //@line 264 "bz2module.c"
        var $11=($10) > 0; //@line 264 "bz2module.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 264 "bz2module.c"
      case 1: // $bb
        var $12=$n_addr; //@line 264 "bz2module.c"
        $iftmp_7=$12; //@line 264 "bz2module.c"
        __label__ = 3; break; //@line 264 "bz2module.c"
      case 2: // $bb1
        $iftmp_7=100; //@line 264 "bz2module.c"
        __label__ = 3; break; //@line 264 "bz2module.c"
      case 3: // $bb2
        var $13=$iftmp_7; //@line 264 "bz2module.c"
        $total_v_size=$13; //@line 264 "bz2module.c"
        var $14=$total_v_size; //@line 265 "bz2module.c"
        var $15=_PyString_FromStringAndSize(0, $14); //@line 265 "bz2module.c"
        HEAP[$v]=$15; //@line 265 "bz2module.c"
        var $16=($15)==0; //@line 266 "bz2module.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 266 "bz2module.c"
      case 4: // $bb3
        $0=0; //@line 267 "bz2module.c"
        __label__ = 42; break; //@line 267 "bz2module.c"
      case 5: // $bb4
        var $17=HEAP[$v]; //@line 269 "bz2module.c"
        var $18=$17; //@line 269 "bz2module.c"
        var $19=$18+20; //@line 269 "bz2module.c"
        var $20=$19; //@line 269 "bz2module.c"
        $buf=$20; //@line 269 "bz2module.c"
        var $21=$buf; //@line 270 "bz2module.c"
        var $22=$total_v_size; //@line 270 "bz2module.c"
        var $23=$21+$22; //@line 270 "bz2module.c"
        $end=$23; //@line 270 "bz2module.c"
        __label__ = 19; break; //@line 270 "bz2module.c"
      case 6: // $bb6
        var $24=$f_addr; //@line 275 "bz2module.c"
        var $25=$24+40; //@line 275 "bz2module.c"
        var $26=HEAP[$25]; //@line 275 "bz2module.c"
        var $27=_BZ2_bzRead($bzerror, $26, $c, 1); //@line 275 "bz2module.c"
        $bytes_read=$27; //@line 275 "bz2module.c"
        var $28=$f_addr; //@line 276 "bz2module.c"
        var $29=$28+48; //@line 276 "bz2module.c"
        var $30=HEAP[$29]; //@line 276 "bz2module.c"
        var $31=($30) + 1; //@line 276 "bz2module.c"
        var $32=$f_addr; //@line 276 "bz2module.c"
        var $33=$32+48; //@line 276 "bz2module.c"
        HEAP[$33]=$31; //@line 276 "bz2module.c"
        var $34=$bytes_read; //@line 277 "bz2module.c"
        var $35=($34)==0; //@line 277 "bz2module.c"
        if ($35) { __label__ = 20; break; } else { __label__ = 7; break; } //@line 277 "bz2module.c"
      case 7: // $bb7
        var $36=$univ_newline; //@line 278 "bz2module.c"
        var $37=($36)!=0; //@line 278 "bz2module.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 17; break; } //@line 278 "bz2module.c"
      case 8: // $bb8
        var $38=$skipnextlf; //@line 279 "bz2module.c"
        var $39=($38)!=0; //@line 279 "bz2module.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 279 "bz2module.c"
      case 9: // $bb9
        $skipnextlf=0; //@line 280 "bz2module.c"
        var $40=HEAP[$c]; //@line 281 "bz2module.c"
        var $41=($40)==10; //@line 281 "bz2module.c"
        var $42=$newlinetypes; //@line 285 "bz2module.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 281 "bz2module.c"
      case 10: // $bb10
        var $43=($42) | 4; //@line 285 "bz2module.c"
        $newlinetypes=$43; //@line 285 "bz2module.c"
        var $44=HEAP[$bzerror]; //@line 286 "bz2module.c"
        var $45=($44)!=0; //@line 286 "bz2module.c"
        if ($45) { __label__ = 20; break; } else { __label__ = 11; break; } //@line 286 "bz2module.c"
      case 11: // $bb11
        var $46=$f_addr; //@line 287 "bz2module.c"
        var $47=$46+40; //@line 287 "bz2module.c"
        var $48=HEAP[$47]; //@line 287 "bz2module.c"
        var $49=_BZ2_bzRead($bzerror, $48, $c, 1); //@line 287 "bz2module.c"
        $bytes_read=$49; //@line 287 "bz2module.c"
        var $50=$f_addr; //@line 288 "bz2module.c"
        var $51=$50+48; //@line 288 "bz2module.c"
        var $52=HEAP[$51]; //@line 288 "bz2module.c"
        var $53=($52) + 1; //@line 288 "bz2module.c"
        var $54=$f_addr; //@line 288 "bz2module.c"
        var $55=$54+48; //@line 288 "bz2module.c"
        HEAP[$55]=$53; //@line 288 "bz2module.c"
        var $56=$bytes_read; //@line 289 "bz2module.c"
        var $57=($56)==0; //@line 289 "bz2module.c"
        if ($57) { __label__ = 20; break; } else { __label__ = 13; break; } //@line 289 "bz2module.c"
      case 12: // $bb13
        var $58=($42) | 1; //@line 291 "bz2module.c"
        $newlinetypes=$58; //@line 291 "bz2module.c"
        __label__ = 13; break; //@line 291 "bz2module.c"
      case 13: // $bb14
        var $59=HEAP[$c]; //@line 294 "bz2module.c"
        var $60=($59)==13; //@line 294 "bz2module.c"
        if ($60) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 294 "bz2module.c"
      case 14: // $bb15
        $skipnextlf=1; //@line 295 "bz2module.c"
        HEAP[$c]=10; //@line 296 "bz2module.c"
        __label__ = 17; break; //@line 296 "bz2module.c"
      case 15: // $bb16
        var $61=HEAP[$c]; //@line 297 "bz2module.c"
        var $62=($61)==10; //@line 297 "bz2module.c"
        if ($62) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 297 "bz2module.c"
      case 16: // $bb17
        var $63=$newlinetypes; //@line 298 "bz2module.c"
        var $64=($63) | 2; //@line 298 "bz2module.c"
        $newlinetypes=$64; //@line 298 "bz2module.c"
        __label__ = 17; break; //@line 298 "bz2module.c"
      case 17: // $bb18
        var $65=HEAP[$c]; //@line 300 "bz2module.c"
        var $66=$buf; //@line 300 "bz2module.c"
        HEAP[$66]=$65; //@line 300 "bz2module.c"
        var $67=$buf; //@line 300 "bz2module.c"
        var $68=$67+1; //@line 300 "bz2module.c"
        $buf=$68; //@line 300 "bz2module.c"
        var $69=HEAP[$bzerror]; //@line 301 "bz2module.c"
        var $70=($69)!=0; //@line 301 "bz2module.c"
        if ($70) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 301 "bz2module.c"
      case 18: // $bb19
        var $71=HEAP[$c]; //@line 301 "bz2module.c"
        var $72=($71)==10; //@line 301 "bz2module.c"
        if ($72) { __label__ = 20; break; } else { __label__ = 19; break; } //@line 301 "bz2module.c"
      case 19: // $bb20
        var $73=$buf; //@line 274 "bz2module.c"
        var $74=$end; //@line 274 "bz2module.c"
        var $75=($73)!=($74); //@line 274 "bz2module.c"
        if ($75) { __label__ = 6; break; } else { __label__ = 20; break; } //@line 274 "bz2module.c"
      case 20: // $bb21
        var $76=$univ_newline; //@line 303 "bz2module.c"
        var $77=($76)!=0; //@line 303 "bz2module.c"
        if ($77) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 303 "bz2module.c"
      case 21: // $bb22
        var $78=HEAP[$bzerror]; //@line 303 "bz2module.c"
        var $79=($78)==4; //@line 303 "bz2module.c"
        if ($79) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 303 "bz2module.c"
      case 22: // $bb23
        var $80=$skipnextlf; //@line 303 "bz2module.c"
        var $81=($80)!=0; //@line 303 "bz2module.c"
        if ($81) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 303 "bz2module.c"
      case 23: // $bb24
        var $82=$newlinetypes; //@line 304 "bz2module.c"
        var $83=($82) | 1; //@line 304 "bz2module.c"
        $newlinetypes=$83; //@line 304 "bz2module.c"
        __label__ = 24; break; //@line 304 "bz2module.c"
      case 24: // $bb25
        var $84=$f_addr; //@line 306 "bz2module.c"
        var $85=$84+32; //@line 306 "bz2module.c"
        var $86=$newlinetypes; //@line 306 "bz2module.c"
        HEAP[$85]=$86; //@line 306 "bz2module.c"
        var $87=$f_addr; //@line 307 "bz2module.c"
        var $88=$87+36; //@line 307 "bz2module.c"
        var $89=$skipnextlf; //@line 307 "bz2module.c"
        HEAP[$88]=$89; //@line 307 "bz2module.c"
        var $90=HEAP[$bzerror]; //@line 308 "bz2module.c"
        var $91=($90)==4; //@line 308 "bz2module.c"
        if ($91) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 308 "bz2module.c"
      case 25: // $bb26
        var $92=$f_addr; //@line 309 "bz2module.c"
        var $93=$92+48; //@line 309 "bz2module.c"
        var $94=HEAP[$93]; //@line 309 "bz2module.c"
        var $95=$f_addr; //@line 309 "bz2module.c"
        var $96=$95+56; //@line 309 "bz2module.c"
        HEAP[$96]=$94; //@line 309 "bz2module.c"
        var $97=$f_addr; //@line 310 "bz2module.c"
        var $98=$97+44; //@line 310 "bz2module.c"
        HEAP[$98]=2; //@line 310 "bz2module.c"
        __label__ = 39; break; //@line 310 "bz2module.c"
      case 26: // $bb27
        var $99=HEAP[$bzerror]; //@line 312 "bz2module.c"
        var $100=($99)!=0; //@line 312 "bz2module.c"
        if ($100) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 312 "bz2module.c"
      case 27: // $bb28
        var $101=HEAP[$bzerror]; //@line 313 "bz2module.c"
        _Util_CatchBZ2Error($101); //@line 313 "bz2module.c"
        var $102=HEAP[$v]; //@line 314 "bz2module.c"
        var $103=$102; //@line 314 "bz2module.c"
        var $104=HEAP[$103]; //@line 314 "bz2module.c"
        var $105=($104) - 1; //@line 314 "bz2module.c"
        var $106=$102; //@line 314 "bz2module.c"
        HEAP[$106]=$105; //@line 314 "bz2module.c"
        var $107=$102; //@line 314 "bz2module.c"
        var $108=HEAP[$107]; //@line 314 "bz2module.c"
        var $109=($108)==0; //@line 314 "bz2module.c"
        if ($109) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 314 "bz2module.c"
      case 28: // $bb29
        var $110=HEAP[$v]; //@line 314 "bz2module.c"
        var $111=$110+4; //@line 314 "bz2module.c"
        var $112=HEAP[$111]; //@line 314 "bz2module.c"
        var $113=$112+24; //@line 314 "bz2module.c"
        var $114=HEAP[$113]; //@line 314 "bz2module.c"
        var $115=HEAP[$v]; //@line 314 "bz2module.c"
        FUNCTION_TABLE[$114]($115); //@line 314 "bz2module.c"
        __label__ = 29; break; //@line 314 "bz2module.c"
      case 29: // $bb30
        $0=0; //@line 315 "bz2module.c"
        __label__ = 42; break; //@line 315 "bz2module.c"
      case 30: // $bb31
        var $116=HEAP[$c]; //@line 317 "bz2module.c"
        var $117=($116)==10; //@line 317 "bz2module.c"
        if ($117) { __label__ = 39; break; } else { __label__ = 31; break; } //@line 317 "bz2module.c"
      case 31: // $bb32
        var $118=$n_addr; //@line 320 "bz2module.c"
        var $119=($118) > 0; //@line 320 "bz2module.c"
        if ($119) { __label__ = 39; break; } else { __label__ = 32; break; } //@line 320 "bz2module.c"
      case 32: // $bb33
        var $120=$total_v_size; //@line 322 "bz2module.c"
        $used_v_size=$120; //@line 322 "bz2module.c"
        var $121=$total_v_size; //@line 323 "bz2module.c"
        var $122=($121) >>> 2; //@line 323 "bz2module.c"
        $increment=$122; //@line 323 "bz2module.c"
        var $123=$total_v_size; //@line 324 "bz2module.c"
        var $124=$increment; //@line 324 "bz2module.c"
        var $125=($124) + ($123); //@line 324 "bz2module.c"
        $total_v_size=$125; //@line 324 "bz2module.c"
        var $126=$total_v_size; //@line 325 "bz2module.c"
        var $127=($126) < 0; //@line 325 "bz2module.c"
        if ($127) { __label__ = 33; break; } else { __label__ = 36; break; } //@line 325 "bz2module.c"
      case 33: // $bb34
        var $128=HEAP[_PyExc_OverflowError]; //@line 326 "bz2module.c"
        _PyErr_SetString($128, __str7); //@line 326 "bz2module.c"
        var $129=HEAP[$v]; //@line 328 "bz2module.c"
        var $130=$129; //@line 328 "bz2module.c"
        var $131=HEAP[$130]; //@line 328 "bz2module.c"
        var $132=($131) - 1; //@line 328 "bz2module.c"
        var $133=$129; //@line 328 "bz2module.c"
        HEAP[$133]=$132; //@line 328 "bz2module.c"
        var $134=$129; //@line 328 "bz2module.c"
        var $135=HEAP[$134]; //@line 328 "bz2module.c"
        var $136=($135)==0; //@line 328 "bz2module.c"
        if ($136) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 328 "bz2module.c"
      case 34: // $bb35
        var $137=HEAP[$v]; //@line 328 "bz2module.c"
        var $138=$137+4; //@line 328 "bz2module.c"
        var $139=HEAP[$138]; //@line 328 "bz2module.c"
        var $140=$139+24; //@line 328 "bz2module.c"
        var $141=HEAP[$140]; //@line 328 "bz2module.c"
        var $142=HEAP[$v]; //@line 328 "bz2module.c"
        FUNCTION_TABLE[$141]($142); //@line 328 "bz2module.c"
        __label__ = 35; break; //@line 328 "bz2module.c"
      case 35: // $bb36
        $0=0; //@line 329 "bz2module.c"
        __label__ = 42; break; //@line 329 "bz2module.c"
      case 36: // $bb37
        var $143=$total_v_size; //@line 331 "bz2module.c"
        var $144=__PyString_Resize($v, $143); //@line 331 "bz2module.c"
        var $145=($144) < 0; //@line 331 "bz2module.c"
        if ($145) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 331 "bz2module.c"
      case 37: // $bb38
        $0=0; //@line 332 "bz2module.c"
        __label__ = 42; break; //@line 332 "bz2module.c"
      case 38: // $bb39
        var $146=HEAP[$v]; //@line 333 "bz2module.c"
        var $147=$146; //@line 333 "bz2module.c"
        var $148=$147+20; //@line 333 "bz2module.c"
        var $149=$148; //@line 333 "bz2module.c"
        var $150=$used_v_size; //@line 333 "bz2module.c"
        var $151=$149+$150; //@line 333 "bz2module.c"
        $buf=$151; //@line 333 "bz2module.c"
        var $152=HEAP[$v]; //@line 334 "bz2module.c"
        var $153=$152; //@line 334 "bz2module.c"
        var $154=$153+20; //@line 334 "bz2module.c"
        var $155=$154; //@line 334 "bz2module.c"
        var $156=$total_v_size; //@line 334 "bz2module.c"
        var $157=$155+$156; //@line 334 "bz2module.c"
        $end=$157; //@line 334 "bz2module.c"
        __label__ = 19; break; //@line 334 "bz2module.c"
      case 39: // $bb40
        var $158=$buf; //@line 337 "bz2module.c"
        var $159=($158); //@line 337 "bz2module.c"
        var $160=HEAP[$v]; //@line 337 "bz2module.c"
        var $161=$160; //@line 337 "bz2module.c"
        var $162=$161+20; //@line 337 "bz2module.c"
        var $163=($162); //@line 337 "bz2module.c"
        var $164=($159) - ($163); //@line 337 "bz2module.c"
        $used_v_size=$164; //@line 337 "bz2module.c"
        var $165=$used_v_size; //@line 338 "bz2module.c"
        var $166=$total_v_size; //@line 338 "bz2module.c"
        var $167=($165)!=($166); //@line 338 "bz2module.c"
        if ($167) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 338 "bz2module.c"
      case 40: // $bb41
        var $168=$used_v_size; //@line 339 "bz2module.c"
        var $169=__PyString_Resize($v, $168); //@line 339 "bz2module.c"
        __label__ = 41; break; //@line 339 "bz2module.c"
      case 41: // $bb42
        var $170=HEAP[$v]; //@line 340 "bz2module.c"
        $0=$170; //@line 340 "bz2module.c"
        __label__ = 42; break; //@line 340 "bz2module.c"
      case 42: // $bb43
        var $171=$0; //@line 267 "bz2module.c"
        $retval=$171; //@line 267 "bz2module.c"
        var $retval44=$retval; //@line 267 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval44; //@line 267 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_UnivNewlineRead($bzerror, $stream, $buf, $n, $f) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $bzerror_addr;
        var $stream_addr;
        var $buf_addr;
        var $n_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $dst;
        var $newlinetypes;
        var $skipnextlf;
        var $nread;
        var $shortread;
        var $src;
        var $c;
        $bzerror_addr=$bzerror;
        $stream_addr=$stream;
        $buf_addr=$buf;
        $n_addr=$n;
        $f_addr=$f;
        var $1=$buf_addr; //@line 349 "bz2module.c"
        $dst=$1; //@line 349 "bz2module.c"
        var $2=$buf_addr; //@line 352 "bz2module.c"
        var $3=($2)==0; //@line 352 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 352 "bz2module.c"
      case 1: // $bb
        ___assert_fail(__str8, __str9, 352, ___PRETTY_FUNCTION___8675); //@line 352 "bz2module.c"
        throw "Reached an unreachable!" //@line 352 "bz2module.c"
      case 2: // $bb1
        var $4=$stream_addr; //@line 353 "bz2module.c"
        var $5=($4)==0; //@line 353 "bz2module.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 353 "bz2module.c"
      case 3: // $bb2
        ___assert_fail(__str10, __str9, 353, ___PRETTY_FUNCTION___8675); //@line 353 "bz2module.c"
        throw "Reached an unreachable!" //@line 353 "bz2module.c"
      case 4: // $bb3
        var $6=$f_addr; //@line 355 "bz2module.c"
        var $7=$6+28; //@line 355 "bz2module.c"
        var $8=HEAP[$7]; //@line 355 "bz2module.c"
        var $9=($8)==0; //@line 355 "bz2module.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 355 "bz2module.c"
      case 5: // $bb4
        var $10=$n_addr; //@line 356 "bz2module.c"
        var $11=$bzerror_addr; //@line 356 "bz2module.c"
        var $12=$stream_addr; //@line 356 "bz2module.c"
        var $13=$buf_addr; //@line 356 "bz2module.c"
        var $14=_BZ2_bzRead($11, $12, $13, $10); //@line 356 "bz2module.c"
        $0=$14; //@line 356 "bz2module.c"
        __label__ = 28; break; //@line 356 "bz2module.c"
      case 6: // $bb5
        var $15=$f_addr; //@line 358 "bz2module.c"
        var $16=$15+32; //@line 358 "bz2module.c"
        var $17=HEAP[$16]; //@line 358 "bz2module.c"
        $newlinetypes=$17; //@line 358 "bz2module.c"
        var $18=$f_addr; //@line 359 "bz2module.c"
        var $19=$18+36; //@line 359 "bz2module.c"
        var $20=HEAP[$19]; //@line 359 "bz2module.c"
        $skipnextlf=$20; //@line 359 "bz2module.c"
        __label__ = 26; break; //@line 359 "bz2module.c"
      case 7: // $bb6
        var $21=$dst; //@line 367 "bz2module.c"
        $src=$21; //@line 367 "bz2module.c"
        var $22=$n_addr; //@line 369 "bz2module.c"
        var $23=$bzerror_addr; //@line 369 "bz2module.c"
        var $24=$stream_addr; //@line 369 "bz2module.c"
        var $25=$dst; //@line 369 "bz2module.c"
        var $26=_BZ2_bzRead($23, $24, $25, $22); //@line 369 "bz2module.c"
        $nread=$26; //@line 369 "bz2module.c"
        var $27=$nread; //@line 370 "bz2module.c"
        var $28=$n_addr; //@line 370 "bz2module.c"
        var $29=($27) > ($28); //@line 370 "bz2module.c"
        if ($29) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 370 "bz2module.c"
      case 8: // $bb7
        ___assert_fail(__str11, __str9, 370, ___PRETTY_FUNCTION___8675); //@line 370 "bz2module.c"
        throw "Reached an unreachable!" //@line 370 "bz2module.c"
      case 9: // $bb8
        var $30=$n_addr; //@line 371 "bz2module.c"
        var $31=$nread; //@line 371 "bz2module.c"
        var $32=($30) - ($31); //@line 371 "bz2module.c"
        $n_addr=$32; //@line 371 "bz2module.c"
        var $33=$n_addr; //@line 372 "bz2module.c"
        var $34=($33)!=0; //@line 372 "bz2module.c"
        var $35=($34); //@line 372 "bz2module.c"
        $shortread=$35; //@line 372 "bz2module.c"
        var $36=$nread; //@line 373 "bz2module.c"
        var $37=($36) - 1; //@line 373 "bz2module.c"
        $nread=$37; //@line 373 "bz2module.c"
        var $38=($37)!=-1; //@line 373 "bz2module.c"
        if ($38) { __lastLabel__ = 9; __label__ = 10; break; } else { __lastLabel__ = 9; __label__ = 22; break; } //@line 373 "bz2module.c"
      case 10: // $bb9
        var $39=$src; //@line 374 "bz2module.c"
        var $40=HEAP[$39]; //@line 374 "bz2module.c"
        $c=$40; //@line 374 "bz2module.c"
        var $41=$src; //@line 374 "bz2module.c"
        var $42=$41+1; //@line 374 "bz2module.c"
        $src=$42; //@line 374 "bz2module.c"
        var $43=($40)==13; //@line 375 "bz2module.c"
        if ($43) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 375 "bz2module.c"
      case 11: // $bb10
        var $44=$dst; //@line 377 "bz2module.c"
        HEAP[$44]=10; //@line 377 "bz2module.c"
        var $45=$dst; //@line 377 "bz2module.c"
        var $46=$45+1; //@line 377 "bz2module.c"
        $dst=$46; //@line 377 "bz2module.c"
        $skipnextlf=1; //@line 378 "bz2module.c"
        __label__ = 12; break; //@line 378 "bz2module.c"
      case 12: // $bb19_backedge
        var $47=$nread; //@line 373 "bz2module.c"
        var $48=($47) - 1; //@line 373 "bz2module.c"
        $nread=$48; //@line 373 "bz2module.c"
        var $49=($48)!=-1; //@line 373 "bz2module.c"
        if ($49) { __label__ = 10; break; } else { __label__ = 21; break; } //@line 373 "bz2module.c"
      case 13: // $bb11
        var $50=$skipnextlf; //@line 380 "bz2module.c"
        var $51=($50)==0; //@line 380 "bz2module.c"
        var $_pr=$c;
        if ($51) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 380 "bz2module.c"
      case 14: // $bb12
        var $52=($_pr)!=10; //@line 380 "bz2module.c"
        if ($52) { __label__ = 18; break; } else { __label__ = 15; break; } //@line 380 "bz2module.c"
      case 15: // $bb13
        $skipnextlf=0; //@line 382 "bz2module.c"
        var $53=$newlinetypes; //@line 383 "bz2module.c"
        var $54=($53) | 4; //@line 383 "bz2module.c"
        $newlinetypes=$54; //@line 383 "bz2module.c"
        var $55=$n_addr; //@line 384 "bz2module.c"
        var $56=($55) + 1; //@line 384 "bz2module.c"
        $n_addr=$56; //@line 384 "bz2module.c"
        __label__ = 12; break; //@line 384 "bz2module.c"
      case 16: // $bb14
        var $57=($_pr)==10; //@line 391 "bz2module.c"
        if ($57) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 391 "bz2module.c"
      case 17: // $bb15
        var $58=$newlinetypes; //@line 392 "bz2module.c"
        var $59=($58) | 2; //@line 392 "bz2module.c"
        $newlinetypes=$59; //@line 392 "bz2module.c"
        __label__ = 20; break; //@line 392 "bz2module.c"
      case 18: // $bb16
        var $60=$skipnextlf; //@line 393 "bz2module.c"
        var $61=($60)!=0; //@line 393 "bz2module.c"
        if ($61) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 393 "bz2module.c"
      case 19: // $bb17
        var $62=$newlinetypes; //@line 394 "bz2module.c"
        var $63=($62) | 1; //@line 394 "bz2module.c"
        $newlinetypes=$63; //@line 394 "bz2module.c"
        __label__ = 20; break; //@line 394 "bz2module.c"
      case 20: // $bb18
        var $64=$dst; //@line 395 "bz2module.c"
        var $65=$c; //@line 395 "bz2module.c"
        HEAP[$64]=$65; //@line 395 "bz2module.c"
        var $66=$dst; //@line 395 "bz2module.c"
        var $67=$66+1; //@line 395 "bz2module.c"
        $dst=$67; //@line 395 "bz2module.c"
        $skipnextlf=0; //@line 396 "bz2module.c"
        __label__ = 12; break; //@line 396 "bz2module.c"
      case 21: // $bb20thread_pre_split
        var $_pr1=$shortread;
        __lastLabel__ = 21; __label__ = 22; break;
      case 22: // $bb20
        var $68=__lastLabel__ == 21 ? $_pr1 : ($35);
        var $69=($68)!=0; //@line 399 "bz2module.c"
        if ($69) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 399 "bz2module.c"
      case 23: // $bb21
        var $70=$skipnextlf; //@line 401 "bz2module.c"
        var $71=($70)!=0; //@line 401 "bz2module.c"
        if ($71) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 401 "bz2module.c"
      case 24: // $bb22
        var $72=$bzerror_addr; //@line 401 "bz2module.c"
        var $73=HEAP[$72]; //@line 401 "bz2module.c"
        var $74=($73)==4; //@line 401 "bz2module.c"
        if ($74) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 401 "bz2module.c"
      case 25: // $bb23
        var $75=$newlinetypes; //@line 402 "bz2module.c"
        var $76=($75) | 1; //@line 402 "bz2module.c"
        $newlinetypes=$76; //@line 402 "bz2module.c"
        __label__ = 27; break; //@line 402 "bz2module.c"
      case 26: // $bb25
        var $77=$n_addr; //@line 364 "bz2module.c"
        var $78=($77)!=0; //@line 364 "bz2module.c"
        if ($78) { __label__ = 7; break; } else { __label__ = 27; break; } //@line 364 "bz2module.c"
      case 27: // $bb26
        var $79=$f_addr; //@line 406 "bz2module.c"
        var $80=$79+32; //@line 406 "bz2module.c"
        var $81=$newlinetypes; //@line 406 "bz2module.c"
        HEAP[$80]=$81; //@line 406 "bz2module.c"
        var $82=$f_addr; //@line 407 "bz2module.c"
        var $83=$82+36; //@line 407 "bz2module.c"
        var $84=$skipnextlf; //@line 407 "bz2module.c"
        HEAP[$83]=$84; //@line 407 "bz2module.c"
        var $85=$dst; //@line 408 "bz2module.c"
        var $86=($85); //@line 408 "bz2module.c"
        var $87=$buf_addr; //@line 408 "bz2module.c"
        var $88=($87); //@line 408 "bz2module.c"
        var $89=($86) - ($88); //@line 408 "bz2module.c"
        $0=$89; //@line 408 "bz2module.c"
        __label__ = 28; break; //@line 408 "bz2module.c"
      case 28: // $bb27
        var $90=$0; //@line 356 "bz2module.c"
        $retval=$90; //@line 356 "bz2module.c"
        var $retval28=$retval; //@line 356 "bz2module.c"
        ;
        return $retval28; //@line 356 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_DropReadAhead($f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr;
        $f_addr=$f;
        var $0=$f_addr; //@line 415 "bz2module.c"
        var $1=$0+12; //@line 415 "bz2module.c"
        var $2=HEAP[$1]; //@line 415 "bz2module.c"
        var $3=($2)!=0; //@line 415 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 415 "bz2module.c"
      case 1: // $bb
        var $4=$f_addr; //@line 416 "bz2module.c"
        var $5=$4+12; //@line 416 "bz2module.c"
        var $6=HEAP[$5]; //@line 416 "bz2module.c"
        _PyMem_Free($6); //@line 416 "bz2module.c"
        var $7=$f_addr; //@line 417 "bz2module.c"
        var $8=$7+12; //@line 417 "bz2module.c"
        HEAP[$8]=0; //@line 417 "bz2module.c"
        __label__ = 2; break; //@line 417 "bz2module.c"
      case 2: // $return
        ;
        return; //@line 419 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_ReadAhead($f, $bufsize) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr;
        var $bufsize_addr;
        var $retval;
        var $0;
        var $chunksize;
        var $bzerror=__stackBase__;
        $f_addr=$f;
        $bufsize_addr=$bufsize;
        var $1=$f_addr; //@line 428 "bz2module.c"
        var $2=$1+12; //@line 428 "bz2module.c"
        var $3=HEAP[$2]; //@line 428 "bz2module.c"
        var $4=($3)!=0; //@line 428 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 428 "bz2module.c"
      case 1: // $bb
        var $5=$f_addr; //@line 429 "bz2module.c"
        var $6=$5+16; //@line 429 "bz2module.c"
        var $7=HEAP[$6]; //@line 429 "bz2module.c"
        var $8=($7); //@line 429 "bz2module.c"
        var $9=$f_addr; //@line 429 "bz2module.c"
        var $10=$9+20; //@line 429 "bz2module.c"
        var $11=HEAP[$10]; //@line 429 "bz2module.c"
        var $12=($11); //@line 429 "bz2module.c"
        var $13=($8) - ($12); //@line 429 "bz2module.c"
        var $14=($13) > 0; //@line 429 "bz2module.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 429 "bz2module.c"
      case 2: // $bb1
        $0=0; //@line 430 "bz2module.c"
        __label__ = 13; break; //@line 430 "bz2module.c"
      case 3: // $bb2
        var $15=$f_addr; //@line 432 "bz2module.c"
        _Util_DropReadAhead($15); //@line 432 "bz2module.c"
        __label__ = 4; break; //@line 432 "bz2module.c"
      case 4: // $bb3
        var $16=$f_addr; //@line 434 "bz2module.c"
        var $17=$16+44; //@line 434 "bz2module.c"
        var $18=HEAP[$17]; //@line 434 "bz2module.c"
        var $19=($18)==2; //@line 434 "bz2module.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 434 "bz2module.c"
      case 5: // $bb4
        var $20=$f_addr; //@line 435 "bz2module.c"
        var $21=$20+12; //@line 435 "bz2module.c"
        var $22=HEAP[$21]; //@line 435 "bz2module.c"
        var $23=$f_addr; //@line 435 "bz2module.c"
        var $24=$23+20; //@line 435 "bz2module.c"
        HEAP[$24]=$22; //@line 435 "bz2module.c"
        var $25=$f_addr; //@line 436 "bz2module.c"
        var $26=$25+12; //@line 436 "bz2module.c"
        var $27=HEAP[$26]; //@line 436 "bz2module.c"
        var $28=$f_addr; //@line 436 "bz2module.c"
        var $29=$28+16; //@line 436 "bz2module.c"
        HEAP[$29]=$27; //@line 436 "bz2module.c"
        $0=0; //@line 437 "bz2module.c"
        __label__ = 13; break; //@line 437 "bz2module.c"
      case 6: // $bb5
        var $30=$bufsize_addr; //@line 439 "bz2module.c"
        var $31=_PyMem_Malloc($30); //@line 439 "bz2module.c"
        var $32=$f_addr; //@line 439 "bz2module.c"
        var $33=$32+12; //@line 439 "bz2module.c"
        HEAP[$33]=$31; //@line 439 "bz2module.c"
        var $34=$f_addr; //@line 439 "bz2module.c"
        var $35=$34+12; //@line 439 "bz2module.c"
        var $36=HEAP[$35]; //@line 439 "bz2module.c"
        var $37=($36)==0; //@line 439 "bz2module.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 439 "bz2module.c"
      case 7: // $bb6
        var $38=_PyErr_NoMemory(); //@line 440 "bz2module.c"
        $0=-1; //@line 441 "bz2module.c"
        __label__ = 13; break; //@line 441 "bz2module.c"
      case 8: // $bb7
        var $39=$bufsize_addr; //@line 444 "bz2module.c"
        var $40=$f_addr; //@line 444 "bz2module.c"
        var $41=$40+12; //@line 444 "bz2module.c"
        var $42=HEAP[$41]; //@line 444 "bz2module.c"
        var $43=$f_addr; //@line 444 "bz2module.c"
        var $44=$43+40; //@line 444 "bz2module.c"
        var $45=HEAP[$44]; //@line 444 "bz2module.c"
        var $46=$f_addr; //@line 444 "bz2module.c"
        var $47=_Util_UnivNewlineRead($bzerror, $45, $42, $39, $46); //@line 444 "bz2module.c"
        $chunksize=$47; //@line 444 "bz2module.c"
        var $48=$f_addr; //@line 447 "bz2module.c"
        var $49=$48+48; //@line 447 "bz2module.c"
        var $50=HEAP[$49]; //@line 447 "bz2module.c"
        var $51=$chunksize; //@line 447 "bz2module.c"
        var $52=($51); //@line 447 "bz2module.c"
        var $53=($52) + ($50); //@line 447 "bz2module.c"
        var $54=$f_addr; //@line 447 "bz2module.c"
        var $55=$54+48; //@line 447 "bz2module.c"
        HEAP[$55]=$53; //@line 447 "bz2module.c"
        var $56=HEAP[$bzerror]; //@line 448 "bz2module.c"
        var $57=($56)==4; //@line 448 "bz2module.c"
        if ($57) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 448 "bz2module.c"
      case 9: // $bb8
        var $58=$f_addr; //@line 449 "bz2module.c"
        var $59=$58+48; //@line 449 "bz2module.c"
        var $60=HEAP[$59]; //@line 449 "bz2module.c"
        var $61=$f_addr; //@line 449 "bz2module.c"
        var $62=$61+56; //@line 449 "bz2module.c"
        HEAP[$62]=$60; //@line 449 "bz2module.c"
        var $63=$f_addr; //@line 450 "bz2module.c"
        var $64=$63+44; //@line 450 "bz2module.c"
        HEAP[$64]=2; //@line 450 "bz2module.c"
        __label__ = 12; break; //@line 450 "bz2module.c"
      case 10: // $bb9
        var $65=HEAP[$bzerror]; //@line 451 "bz2module.c"
        var $66=($65)!=0; //@line 451 "bz2module.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 451 "bz2module.c"
      case 11: // $bb10
        var $67=HEAP[$bzerror]; //@line 452 "bz2module.c"
        _Util_CatchBZ2Error($67); //@line 452 "bz2module.c"
        var $68=$f_addr; //@line 453 "bz2module.c"
        _Util_DropReadAhead($68); //@line 453 "bz2module.c"
        $0=-1; //@line 454 "bz2module.c"
        __label__ = 13; break; //@line 454 "bz2module.c"
      case 12: // $bb11
        var $69=$f_addr; //@line 456 "bz2module.c"
        var $70=$69+12; //@line 456 "bz2module.c"
        var $71=HEAP[$70]; //@line 456 "bz2module.c"
        var $72=$f_addr; //@line 456 "bz2module.c"
        var $73=$72+20; //@line 456 "bz2module.c"
        HEAP[$73]=$71; //@line 456 "bz2module.c"
        var $74=$f_addr; //@line 457 "bz2module.c"
        var $75=$74+12; //@line 457 "bz2module.c"
        var $76=HEAP[$75]; //@line 457 "bz2module.c"
        var $77=$chunksize; //@line 457 "bz2module.c"
        var $78=$76+$77; //@line 457 "bz2module.c"
        var $79=$f_addr; //@line 457 "bz2module.c"
        var $80=$79+16; //@line 457 "bz2module.c"
        HEAP[$80]=$78; //@line 457 "bz2module.c"
        $0=0; //@line 458 "bz2module.c"
        __label__ = 13; break; //@line 458 "bz2module.c"
      case 13: // $bb12
        var $81=$0; //@line 430 "bz2module.c"
        $retval=$81; //@line 430 "bz2module.c"
        var $retval13=$retval; //@line 430 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 430 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Util_ReadAheadGetLineSkip($f, $skip, $bufsize) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $f_addr;
        var $skip_addr;
        var $bufsize_addr;
        var $retval;
        var $0;
        var $s;
        var $bufptr;
        var $buf;
        var $len;
        $f_addr=$f;
        $skip_addr=$skip;
        $bufsize_addr=$bufsize;
        var $1=$f_addr; //@line 471 "bz2module.c"
        var $2=$1+12; //@line 471 "bz2module.c"
        var $3=HEAP[$2]; //@line 471 "bz2module.c"
        var $4=($3)==0; //@line 471 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 471 "bz2module.c"
      case 1: // $bb
        var $5=$f_addr; //@line 472 "bz2module.c"
        var $6=$bufsize_addr; //@line 472 "bz2module.c"
        var $7=_Util_ReadAhead($5, $6); //@line 472 "bz2module.c"
        var $8=($7) < 0; //@line 472 "bz2module.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 472 "bz2module.c"
      case 2: // $bb1
        $0=0; //@line 473 "bz2module.c"
        __label__ = 14; break; //@line 473 "bz2module.c"
      case 3: // $bb2
        var $9=$f_addr; //@line 475 "bz2module.c"
        var $10=$9+16; //@line 475 "bz2module.c"
        var $11=HEAP[$10]; //@line 475 "bz2module.c"
        var $12=($11); //@line 475 "bz2module.c"
        var $13=$f_addr; //@line 475 "bz2module.c"
        var $14=$13+20; //@line 475 "bz2module.c"
        var $15=HEAP[$14]; //@line 475 "bz2module.c"
        var $16=($15); //@line 475 "bz2module.c"
        var $17=($12) - ($16); //@line 475 "bz2module.c"
        $len=$17; //@line 475 "bz2module.c"
        var $18=($17)==0; //@line 476 "bz2module.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 476 "bz2module.c"
      case 4: // $bb3
        var $19=$skip_addr; //@line 477 "bz2module.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 477 "bz2module.c"
        var $21=$20; //@line 477 "bz2module.c"
        $0=$21; //@line 477 "bz2module.c"
        __label__ = 14; break; //@line 477 "bz2module.c"
      case 5: // $bb4
        var $22=$len; //@line 479 "bz2module.c"
        var $23=$f_addr; //@line 479 "bz2module.c"
        var $24=$23+20; //@line 479 "bz2module.c"
        var $25=HEAP[$24]; //@line 479 "bz2module.c"
        var $26=_memchr($25, 10, $22); //@line 479 "bz2module.c"
        $bufptr=$26; //@line 479 "bz2module.c"
        var $27=$bufptr; //@line 480 "bz2module.c"
        var $28=($27)!=0; //@line 480 "bz2module.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 480 "bz2module.c"
      case 6: // $bb5
        var $29=$bufptr; //@line 481 "bz2module.c"
        var $30=$29+1; //@line 481 "bz2module.c"
        $bufptr=$30; //@line 481 "bz2module.c"
        var $31=$bufptr; //@line 482 "bz2module.c"
        var $32=($31); //@line 482 "bz2module.c"
        var $33=$f_addr; //@line 482 "bz2module.c"
        var $34=$33+20; //@line 482 "bz2module.c"
        var $35=HEAP[$34]; //@line 482 "bz2module.c"
        var $36=($35); //@line 482 "bz2module.c"
        var $37=($32) - ($36); //@line 482 "bz2module.c"
        $len=$37; //@line 482 "bz2module.c"
        var $38=$skip_addr; //@line 483 "bz2module.c"
        var $39=$len; //@line 483 "bz2module.c"
        var $40=($39) + ($38); //@line 483 "bz2module.c"
        var $41=_PyString_FromStringAndSize(0, $40); //@line 483 "bz2module.c"
        var $42=$41; //@line 483 "bz2module.c"
        $s=$42; //@line 483 "bz2module.c"
        var $43=$s; //@line 485 "bz2module.c"
        var $44=($43)==0; //@line 485 "bz2module.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 485 "bz2module.c"
      case 7: // $bb6
        $0=0; //@line 486 "bz2module.c"
        __label__ = 14; break; //@line 486 "bz2module.c"
      case 8: // $bb7
        var $45=$len; //@line 487 "bz2module.c"
        var $46=$f_addr; //@line 487 "bz2module.c"
        var $47=$46+20; //@line 487 "bz2module.c"
        var $48=HEAP[$47]; //@line 487 "bz2module.c"
        var $49=$s; //@line 487 "bz2module.c"
        var $50=$49+20; //@line 487 "bz2module.c"
        var $51=$50; //@line 487 "bz2module.c"
        var $52=$skip_addr; //@line 487 "bz2module.c"
        var $53=$51+$52; //@line 487 "bz2module.c"
        _llvm_memcpy_p0i8_p0i8_i32($53, $48, $45, 1, 0); //@line 487 "bz2module.c"
        var $54=$f_addr; //@line 488 "bz2module.c"
        var $55=$54+20; //@line 488 "bz2module.c"
        var $56=$bufptr; //@line 488 "bz2module.c"
        HEAP[$55]=$56; //@line 488 "bz2module.c"
        var $57=$f_addr; //@line 489 "bz2module.c"
        var $58=$57+16; //@line 489 "bz2module.c"
        var $59=HEAP[$58]; //@line 489 "bz2module.c"
        var $60=$bufptr; //@line 489 "bz2module.c"
        var $61=($59)==($60); //@line 489 "bz2module.c"
        if ($61) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 489 "bz2module.c"
      case 9: // $bb8
        var $62=$f_addr; //@line 490 "bz2module.c"
        _Util_DropReadAhead($62); //@line 490 "bz2module.c"
        __label__ = 13; break; //@line 490 "bz2module.c"
      case 10: // $bb10
        var $63=$f_addr; //@line 492 "bz2module.c"
        var $64=$63+20; //@line 492 "bz2module.c"
        var $65=HEAP[$64]; //@line 492 "bz2module.c"
        $bufptr=$65; //@line 492 "bz2module.c"
        var $66=$f_addr; //@line 493 "bz2module.c"
        var $67=$66+12; //@line 493 "bz2module.c"
        var $68=HEAP[$67]; //@line 493 "bz2module.c"
        $buf=$68; //@line 493 "bz2module.c"
        var $69=$f_addr; //@line 494 "bz2module.c"
        var $70=$69+12; //@line 494 "bz2module.c"
        HEAP[$70]=0; //@line 494 "bz2module.c"
        var $71=$bufsize_addr; //@line 495 "bz2module.c"
        var $72=($71) >> 2; //@line 495 "bz2module.c"
        var $73=$bufsize_addr; //@line 495 "bz2module.c"
        var $74=($72) + ($73); //@line 495 "bz2module.c"
        var $75=$skip_addr; //@line 495 "bz2module.c"
        var $76=$len; //@line 495 "bz2module.c"
        var $77=($76) + ($75); //@line 495 "bz2module.c"
        var $78=$f_addr; //@line 495 "bz2module.c"
        var $79=_Util_ReadAheadGetLineSkip($78, $77, $74); //@line 495 "bz2module.c"
        $s=$79; //@line 495 "bz2module.c"
        var $80=$s; //@line 497 "bz2module.c"
        var $81=($80)==0; //@line 497 "bz2module.c"
        if ($81) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 497 "bz2module.c"
      case 11: // $bb11
        var $82=$buf; //@line 498 "bz2module.c"
        _PyMem_Free($82); //@line 498 "bz2module.c"
        $0=0; //@line 499 "bz2module.c"
        __label__ = 14; break; //@line 499 "bz2module.c"
      case 12: // $bb12
        var $83=$len; //@line 501 "bz2module.c"
        var $84=$s; //@line 501 "bz2module.c"
        var $85=$84+20; //@line 501 "bz2module.c"
        var $86=$85; //@line 501 "bz2module.c"
        var $87=$skip_addr; //@line 501 "bz2module.c"
        var $88=$86+$87; //@line 501 "bz2module.c"
        var $89=$bufptr; //@line 501 "bz2module.c"
        _llvm_memcpy_p0i8_p0i8_i32($88, $89, $83, 1, 0); //@line 501 "bz2module.c"
        var $90=$buf; //@line 502 "bz2module.c"
        _PyMem_Free($90); //@line 502 "bz2module.c"
        __label__ = 13; break; //@line 502 "bz2module.c"
      case 13: // $bb13
        var $91=$s; //@line 504 "bz2module.c"
        $0=$91; //@line 504 "bz2module.c"
        __label__ = 14; break; //@line 504 "bz2module.c"
      case 14: // $bb14
        var $92=$0; //@line 473 "bz2module.c"
        $retval=$92; //@line 473 "bz2module.c"
        var $retval15=$retval; //@line 473 "bz2module.c"
        ;
        return $retval15; //@line 473 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_read($self, $args) {
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
        var $bytesrequested=__stackBase__;
        var $bytesread;
        var $buffersize;
        var $chunksize;
        var $bzerror=__stackBase__+4;
        var $ret=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$bytesrequested]=-1; //@line 521 "bz2module.c"
        HEAP[$ret]=0; //@line 524 "bz2module.c"
        var $1=$args_addr; //@line 526 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, __str12, allocate([$bytesrequested,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 526 "bz2module.c"
        var $3=($2)==0; //@line 526 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 526 "bz2module.c"
      case 1: // $bb
        $0=0; //@line 527 "bz2module.c"
        __label__ = 25; break; //@line 527 "bz2module.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 530 "bz2module.c"
        var $5=$4+44; //@line 530 "bz2module.c"
        var $6=HEAP[$5]; //@line 530 "bz2module.c"
        if ($6 == 0) {
          __label__ = 5; break;
        }
        else if ($6 == 1) {
          __label__ = 3; break;
        }
        else if ($6 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb2
        var $7=$self_addr; //@line 547 "bz2module.c"
        var $8=_check_iterbuffered($7); //@line 547 "bz2module.c"
        var $9=($8)!=0; //@line 547 "bz2module.c"
        if ($9) { __label__ = 24; break; } else { __label__ = 7; break; } //@line 547 "bz2module.c"
      case 4: // $bb3
        var $10=_PyString_FromString(__str13); //@line 534 "bz2module.c"
        HEAP[$ret]=$10; //@line 534 "bz2module.c"
        __label__ = 24; break; //@line 534 "bz2module.c"
      case 5: // $bb4
        var $11=HEAP[_PyExc_ValueError]; //@line 537 "bz2module.c"
        _PyErr_SetString($11, __str14); //@line 537 "bz2module.c"
        __label__ = 24; break; //@line 537 "bz2module.c"
      case 6: // $bb5
        var $12=HEAP[_PyExc_IOError]; //@line 541 "bz2module.c"
        _PyErr_SetString($12, __str15); //@line 541 "bz2module.c"
        __label__ = 24; break; //@line 541 "bz2module.c"
      case 7: // $bb6
        var $13=HEAP[$bytesrequested]; //@line 550 "bz2module.c"
        var $14=($13) < 0; //@line 550 "bz2module.c"
        if ($14) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 550 "bz2module.c"
      case 8: // $bb7
        var $15=_Util_NewBufferSize(0); //@line 551 "bz2module.c"
        $buffersize=$15; //@line 551 "bz2module.c"
        __lastLabel__ = 8; __label__ = 10; break; //@line 551 "bz2module.c"
      case 9: // $bb8
        var $16=HEAP[$bytesrequested]; //@line 553 "bz2module.c"
        $buffersize=$16; //@line 553 "bz2module.c"
        __lastLabel__ = 9; __label__ = 10; break; //@line 553 "bz2module.c"
      case 10: // $bb9
        var $17=__lastLabel__ == 9 ? $16 : ($15);
        var $18=($17) < 0; //@line 554 "bz2module.c"
        if ($18) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 554 "bz2module.c"
      case 11: // $bb10
        var $19=HEAP[_PyExc_OverflowError]; //@line 555 "bz2module.c"
        _PyErr_SetString($19, __str16); //@line 555 "bz2module.c"
        __label__ = 24; break; //@line 555 "bz2module.c"
      case 12: // $bb11
        var $20=$buffersize; //@line 560 "bz2module.c"
        var $21=_PyString_FromStringAndSize(0, $20); //@line 560 "bz2module.c"
        HEAP[$ret]=$21; //@line 560 "bz2module.c"
        var $22=HEAP[$ret]; //@line 561 "bz2module.c"
        var $23=($22)==0; //@line 561 "bz2module.c"
        if ($23) { __label__ = 24; break; } else { __label__ = 13; break; } //@line 561 "bz2module.c"
      case 13: // $bb12
        $bytesread=0; //@line 563 "bz2module.c"
        __label__ = 14; break; //@line 563 "bz2module.c"
      case 14: // $bb13
        var $24=$buffersize; //@line 567 "bz2module.c"
        var $25=$bytesread; //@line 567 "bz2module.c"
        var $26=($24) - ($25); //@line 567 "bz2module.c"
        var $27=HEAP[$ret]; //@line 567 "bz2module.c"
        var $28=$27; //@line 567 "bz2module.c"
        var $29=$28+20; //@line 567 "bz2module.c"
        var $30=$29; //@line 567 "bz2module.c"
        var $31=$bytesread; //@line 567 "bz2module.c"
        var $32=$30+$31; //@line 567 "bz2module.c"
        var $33=$self_addr; //@line 567 "bz2module.c"
        var $34=$33+40; //@line 567 "bz2module.c"
        var $35=HEAP[$34]; //@line 567 "bz2module.c"
        var $36=$self_addr; //@line 567 "bz2module.c"
        var $37=_Util_UnivNewlineRead($bzerror, $35, $32, $26, $36); //@line 567 "bz2module.c"
        $chunksize=$37; //@line 567 "bz2module.c"
        var $38=$self_addr; //@line 571 "bz2module.c"
        var $39=$38+48; //@line 571 "bz2module.c"
        var $40=HEAP[$39]; //@line 571 "bz2module.c"
        var $41=$chunksize; //@line 571 "bz2module.c"
        var $42=($41); //@line 571 "bz2module.c"
        var $43=($42) + ($40); //@line 571 "bz2module.c"
        var $44=$self_addr; //@line 571 "bz2module.c"
        var $45=$44+48; //@line 571 "bz2module.c"
        HEAP[$45]=$43; //@line 571 "bz2module.c"
        var $46=$bytesread; //@line 573 "bz2module.c"
        var $47=$chunksize; //@line 573 "bz2module.c"
        var $48=($47) + ($46); //@line 573 "bz2module.c"
        $bytesread=$48; //@line 573 "bz2module.c"
        var $49=HEAP[$bzerror]; //@line 574 "bz2module.c"
        var $50=($49)==4; //@line 574 "bz2module.c"
        if ($50) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 574 "bz2module.c"
      case 15: // $bb14
        var $51=$self_addr; //@line 575 "bz2module.c"
        var $52=$51+48; //@line 575 "bz2module.c"
        var $53=HEAP[$52]; //@line 575 "bz2module.c"
        var $54=$self_addr; //@line 575 "bz2module.c"
        var $55=$54+56; //@line 575 "bz2module.c"
        HEAP[$55]=$53; //@line 575 "bz2module.c"
        var $56=$self_addr; //@line 576 "bz2module.c"
        var $57=$56+44; //@line 576 "bz2module.c"
        HEAP[$57]=2; //@line 576 "bz2module.c"
        __label__ = 22; break; //@line 576 "bz2module.c"
      case 16: // $bb15
        var $58=HEAP[$bzerror]; //@line 578 "bz2module.c"
        var $59=($58)!=0; //@line 578 "bz2module.c"
        if ($59) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 578 "bz2module.c"
      case 17: // $bb16
        var $60=HEAP[$bzerror]; //@line 579 "bz2module.c"
        _Util_CatchBZ2Error($60); //@line 579 "bz2module.c"
        var $61=HEAP[$ret]; //@line 580 "bz2module.c"
        var $62=$61; //@line 580 "bz2module.c"
        var $63=HEAP[$62]; //@line 580 "bz2module.c"
        var $64=($63) - 1; //@line 580 "bz2module.c"
        var $65=$61; //@line 580 "bz2module.c"
        HEAP[$65]=$64; //@line 580 "bz2module.c"
        var $66=$61; //@line 580 "bz2module.c"
        var $67=HEAP[$66]; //@line 580 "bz2module.c"
        var $68=($67)==0; //@line 580 "bz2module.c"
        if ($68) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 580 "bz2module.c"
      case 18: // $bb17
        var $69=HEAP[$ret]; //@line 580 "bz2module.c"
        var $70=$69+4; //@line 580 "bz2module.c"
        var $71=HEAP[$70]; //@line 580 "bz2module.c"
        var $72=$71+24; //@line 580 "bz2module.c"
        var $73=HEAP[$72]; //@line 580 "bz2module.c"
        var $74=HEAP[$ret]; //@line 580 "bz2module.c"
        FUNCTION_TABLE[$73]($74); //@line 580 "bz2module.c"
        __label__ = 19; break; //@line 580 "bz2module.c"
      case 19: // $bb18
        HEAP[$ret]=0; //@line 581 "bz2module.c"
        __label__ = 24; break; //@line 581 "bz2module.c"
      case 20: // $bb19
        var $75=HEAP[$bytesrequested]; //@line 584 "bz2module.c"
        var $76=($75) < 0; //@line 584 "bz2module.c"
        if ($76) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 584 "bz2module.c"
      case 21: // $bb20
        var $77=$buffersize; //@line 585 "bz2module.c"
        var $78=_Util_NewBufferSize($77); //@line 585 "bz2module.c"
        $buffersize=$78; //@line 585 "bz2module.c"
        var $79=$buffersize; //@line 586 "bz2module.c"
        var $80=__PyString_Resize($ret, $79); //@line 586 "bz2module.c"
        var $81=($80) < 0; //@line 586 "bz2module.c"
        if ($81) { __label__ = 24; break; } else { __label__ = 14; break; } //@line 586 "bz2module.c"
      case 22: // $bb22
        var $82=$bytesread; //@line 592 "bz2module.c"
        var $83=$buffersize; //@line 592 "bz2module.c"
        var $84=($82)!=($83); //@line 592 "bz2module.c"
        if ($84) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 592 "bz2module.c"
      case 23: // $bb23
        var $85=$bytesread; //@line 593 "bz2module.c"
        var $86=__PyString_Resize($ret, $85); //@line 593 "bz2module.c"
        __label__ = 24; break; //@line 595 "bz2module.c"
      case 24: // $cleanup
        var $87=HEAP[$ret]; //@line 597 "bz2module.c"
        $0=$87; //@line 597 "bz2module.c"
        __label__ = 25; break; //@line 597 "bz2module.c"
      case 25: // $bb24
        var $88=$0; //@line 527 "bz2module.c"
        $retval=$88; //@line 527 "bz2module.c"
        var $retval25=$retval; //@line 527 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 527 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_readline($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $ret;
        var $sizehint=__stackBase__;
        $self_addr=$self;
        $args_addr=$args;
        $ret=0; //@line 612 "bz2module.c"
        HEAP[$sizehint]=-1; //@line 613 "bz2module.c"
        var $1=$args_addr; //@line 615 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, __str17, allocate([$sizehint,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 615 "bz2module.c"
        var $3=($2)==0; //@line 615 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 615 "bz2module.c"
      case 1: // $bb
        $0=0; //@line 616 "bz2module.c"
        __label__ = 11; break; //@line 616 "bz2module.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 619 "bz2module.c"
        var $5=$4+44; //@line 619 "bz2module.c"
        var $6=HEAP[$5]; //@line 619 "bz2module.c"
        if ($6 == 0) {
          __label__ = 5; break;
        }
        else if ($6 == 1) {
          __label__ = 3; break;
        }
        else if ($6 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb2
        var $7=$self_addr; //@line 636 "bz2module.c"
        var $8=_check_iterbuffered($7); //@line 636 "bz2module.c"
        var $9=($8)!=0; //@line 636 "bz2module.c"
        if ($9) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 636 "bz2module.c"
      case 4: // $bb3
        var $10=_PyString_FromString(__str13); //@line 623 "bz2module.c"
        $ret=$10; //@line 623 "bz2module.c"
        __label__ = 10; break; //@line 623 "bz2module.c"
      case 5: // $bb4
        var $11=HEAP[_PyExc_ValueError]; //@line 626 "bz2module.c"
        _PyErr_SetString($11, __str14); //@line 626 "bz2module.c"
        __label__ = 10; break; //@line 626 "bz2module.c"
      case 6: // $bb5
        var $12=HEAP[_PyExc_IOError]; //@line 630 "bz2module.c"
        _PyErr_SetString($12, __str15); //@line 630 "bz2module.c"
        __label__ = 10; break; //@line 630 "bz2module.c"
      case 7: // $bb6
        var $13=HEAP[$sizehint]; //@line 639 "bz2module.c"
        var $14=($13)==0; //@line 639 "bz2module.c"
        if ($14) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 639 "bz2module.c"
      case 8: // $bb7
        var $15=_PyString_FromString(__str13); //@line 640 "bz2module.c"
        $ret=$15; //@line 640 "bz2module.c"
        __label__ = 10; break; //@line 640 "bz2module.c"
      case 9: // $bb8
        var $16=HEAP[$sizehint]; //@line 642 "bz2module.c"
        var $17=($16) >= 0; //@line 642 "bz2module.c"
        var $max=($17) ? ($16) : 0; //@line 642 "bz2module.c"
        var $18=$self_addr; //@line 642 "bz2module.c"
        var $19=_Util_GetLine($18, $max); //@line 642 "bz2module.c"
        $ret=$19; //@line 642 "bz2module.c"
        __label__ = 10; break; //@line 644 "bz2module.c"
      case 10: // $cleanup
        var $20=$ret; //@line 646 "bz2module.c"
        $0=$20; //@line 646 "bz2module.c"
        __label__ = 11; break; //@line 646 "bz2module.c"
      case 11: // $bb10
        var $21=$0; //@line 616 "bz2module.c"
        $retval=$21; //@line 616 "bz2module.c"
        var $retval11=$retval; //@line 616 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 616 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_readlines($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8208; _memset(__stackBase__, 0, 8208);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $sizehint=__stackBase__;
        var $list;
        var $line=__stackBase__+4;
        var $small_buffer=__stackBase__+8;
        var $buffer;
        var $buffersize;
        var $big_buffer=__stackBase__+8200;
        var $nfilled;
        var $nread;
        var $totalread;
        var $p;
        var $q;
        var $end;
        var $err;
        var $shortread;
        var $bzerror=__stackBase__+8204;
        var $rest;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$sizehint]=0; //@line 661 "bz2module.c"
        $list=0; //@line 662 "bz2module.c"
        var $small_buffer1=$small_buffer; //@line 665 "bz2module.c"
        $buffer=$small_buffer1; //@line 665 "bz2module.c"
        $buffersize=8192; //@line 666 "bz2module.c"
        HEAP[$big_buffer]=0; //@line 667 "bz2module.c"
        $nfilled=0; //@line 668 "bz2module.c"
        $totalread=0; //@line 670 "bz2module.c"
        $shortread=0; //@line 673 "bz2module.c"
        var $1=$args_addr; //@line 676 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, __str18, allocate([$sizehint,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 676 "bz2module.c"
        var $3=($2)==0; //@line 676 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 676 "bz2module.c"
      case 1: // $bb
        $0=0; //@line 677 "bz2module.c"
        __label__ = 53; break; //@line 677 "bz2module.c"
      case 2: // $bb2
        var $4=$self_addr; //@line 680 "bz2module.c"
        var $5=$4+44; //@line 680 "bz2module.c"
        var $6=HEAP[$5]; //@line 680 "bz2module.c"
        if ($6 == 0) {
          __label__ = 5; break;
        }
        else if ($6 == 1) {
          __label__ = 3; break;
        }
        else if ($6 == 2) {
          __label__ = 4; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 3: // $bb3
        var $7=$self_addr; //@line 697 "bz2module.c"
        var $8=_check_iterbuffered($7); //@line 697 "bz2module.c"
        var $9=($8)!=0; //@line 697 "bz2module.c"
        if ($9) { __label__ = 49; break; } else { __label__ = 7; break; } //@line 697 "bz2module.c"
      case 4: // $bb4
        var $10=_PyList_New(0); //@line 684 "bz2module.c"
        $list=$10; //@line 684 "bz2module.c"
        __label__ = 49; break; //@line 684 "bz2module.c"
      case 5: // $bb5
        var $11=HEAP[_PyExc_ValueError]; //@line 687 "bz2module.c"
        _PyErr_SetString($11, __str14); //@line 687 "bz2module.c"
        __label__ = 49; break; //@line 687 "bz2module.c"
      case 6: // $bb6
        var $12=HEAP[_PyExc_IOError]; //@line 691 "bz2module.c"
        _PyErr_SetString($12, __str15); //@line 691 "bz2module.c"
        __label__ = 49; break; //@line 691 "bz2module.c"
      case 7: // $bb7
        var $13=_PyList_New(0); //@line 700 "bz2module.c"
        $list=$13; //@line 700 "bz2module.c"
        var $14=$list; //@line 700 "bz2module.c"
        var $15=($14)==0; //@line 700 "bz2module.c"
        if ($15) { __label__ = 49; break; } else { __label__ = 8; break; } //@line 700 "bz2module.c"
      case 8: // $bb8_preheader
        var $small_buffer23=$small_buffer; //@line 743 "bz2module.c"
        __label__ = 9; break;
      case 9: // $bb8
        var $16=$buffersize; //@line 705 "bz2module.c"
        var $17=$nfilled; //@line 705 "bz2module.c"
        var $18=($16) - ($17); //@line 705 "bz2module.c"
        var $19=$buffer; //@line 705 "bz2module.c"
        var $20=$nfilled; //@line 705 "bz2module.c"
        var $21=$19+$20; //@line 705 "bz2module.c"
        var $22=$self_addr; //@line 705 "bz2module.c"
        var $23=$22+40; //@line 705 "bz2module.c"
        var $24=HEAP[$23]; //@line 705 "bz2module.c"
        var $25=$self_addr; //@line 705 "bz2module.c"
        var $26=_Util_UnivNewlineRead($bzerror, $24, $21, $18, $25); //@line 705 "bz2module.c"
        $nread=$26; //@line 705 "bz2module.c"
        var $27=$self_addr; //@line 708 "bz2module.c"
        var $28=$27+48; //@line 708 "bz2module.c"
        var $29=HEAP[$28]; //@line 708 "bz2module.c"
        var $30=$nread; //@line 708 "bz2module.c"
        var $31=($30); //@line 708 "bz2module.c"
        var $32=($31) + ($29); //@line 708 "bz2module.c"
        var $33=$self_addr; //@line 708 "bz2module.c"
        var $34=$33+48; //@line 708 "bz2module.c"
        HEAP[$34]=$32; //@line 708 "bz2module.c"
        var $35=HEAP[$bzerror]; //@line 710 "bz2module.c"
        var $36=($35)==4; //@line 710 "bz2module.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 710 "bz2module.c"
      case 10: // $bb9
        var $37=$self_addr; //@line 711 "bz2module.c"
        var $38=$37+48; //@line 711 "bz2module.c"
        var $39=HEAP[$38]; //@line 711 "bz2module.c"
        var $40=$self_addr; //@line 711 "bz2module.c"
        var $41=$40+56; //@line 711 "bz2module.c"
        HEAP[$41]=$39; //@line 711 "bz2module.c"
        var $42=$self_addr; //@line 712 "bz2module.c"
        var $43=$42+44; //@line 712 "bz2module.c"
        HEAP[$43]=2; //@line 712 "bz2module.c"
        var $44=$nread; //@line 713 "bz2module.c"
        var $45=($44)==0; //@line 713 "bz2module.c"
        if ($45) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 713 "bz2module.c"
      case 11: // $bb10
        HEAP[$sizehint]=0; //@line 714 "bz2module.c"
        __label__ = 37; break; //@line 714 "bz2module.c"
      case 12: // $bb11
        $shortread=1; //@line 717 "bz2module.c"
        __label__ = 18; break; //@line 717 "bz2module.c"
      case 13: // $bb12
        var $46=HEAP[$bzerror]; //@line 718 "bz2module.c"
        var $47=($46)!=0; //@line 718 "bz2module.c"
        if ($47) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 718 "bz2module.c"
      case 14: // $bb13
        var $48=HEAP[$bzerror]; //@line 719 "bz2module.c"
        _Util_CatchBZ2Error($48); //@line 719 "bz2module.c"
        __label__ = 15; break; //@line 720 "bz2module.c"
      case 15: // $error
        var $49=$list; //@line 721 "bz2module.c"
        var $50=$49; //@line 721 "bz2module.c"
        var $51=HEAP[$50]; //@line 721 "bz2module.c"
        var $52=($51) - 1; //@line 721 "bz2module.c"
        var $53=$list; //@line 721 "bz2module.c"
        var $54=$53; //@line 721 "bz2module.c"
        HEAP[$54]=$52; //@line 721 "bz2module.c"
        var $55=$list; //@line 721 "bz2module.c"
        var $56=$55; //@line 721 "bz2module.c"
        var $57=HEAP[$56]; //@line 721 "bz2module.c"
        var $58=($57)==0; //@line 721 "bz2module.c"
        if ($58) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 721 "bz2module.c"
      case 16: // $bb14
        var $59=$list; //@line 721 "bz2module.c"
        var $60=$59+4; //@line 721 "bz2module.c"
        var $61=HEAP[$60]; //@line 721 "bz2module.c"
        var $62=$61+24; //@line 721 "bz2module.c"
        var $63=HEAP[$62]; //@line 721 "bz2module.c"
        var $64=$list; //@line 721 "bz2module.c"
        FUNCTION_TABLE[$63]($64); //@line 721 "bz2module.c"
        __label__ = 17; break; //@line 721 "bz2module.c"
      case 17: // $bb15
        $list=0; //@line 722 "bz2module.c"
        __label__ = 49; break; //@line 722 "bz2module.c"
      case 18: // $bb16
        var $65=$totalread; //@line 725 "bz2module.c"
        var $66=$nread; //@line 725 "bz2module.c"
        var $67=($66) + ($65); //@line 725 "bz2module.c"
        $totalread=$67; //@line 725 "bz2module.c"
        var $68=$buffer; //@line 726 "bz2module.c"
        var $69=$nfilled; //@line 726 "bz2module.c"
        var $70=$68+$69; //@line 726 "bz2module.c"
        var $71=$nread; //@line 726 "bz2module.c"
        var $72=_memchr($70, 10, $71); //@line 726 "bz2module.c"
        $p=$72; //@line 726 "bz2module.c"
        var $73=$shortread; //@line 727 "bz2module.c"
        var $74=($73)==0; //@line 727 "bz2module.c"
        if ($74) { __label__ = 19; break; } else { __label__ = 26; break; } //@line 727 "bz2module.c"
      case 19: // $bb17
        var $75=$p; //@line 727 "bz2module.c"
        var $76=($75)==0; //@line 727 "bz2module.c"
        if ($76) { __label__ = 20; break; } else { __label__ = 26; break; } //@line 727 "bz2module.c"
      case 20: // $bb18
        var $77=$nfilled; //@line 729 "bz2module.c"
        var $78=$nread; //@line 729 "bz2module.c"
        var $79=($78) + ($77); //@line 729 "bz2module.c"
        $nfilled=$79; //@line 729 "bz2module.c"
        var $80=$buffersize; //@line 730 "bz2module.c"
        var $81=($80) * 2; //@line 730 "bz2module.c"
        $buffersize=$81; //@line 730 "bz2module.c"
        var $82=$buffersize; //@line 731 "bz2module.c"
        var $83=($82) < 0; //@line 731 "bz2module.c"
        if ($83) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 731 "bz2module.c"
      case 21: // $bb19
        var $84=HEAP[_PyExc_OverflowError]; //@line 732 "bz2module.c"
        _PyErr_SetString($84, __str7); //@line 732 "bz2module.c"
        __label__ = 15; break; //@line 732 "bz2module.c"
      case 22: // $bb20
        var $85=HEAP[$big_buffer]; //@line 736 "bz2module.c"
        var $86=($85)==0; //@line 736 "bz2module.c"
        var $87=$buffersize; //@line 738 "bz2module.c"
        if ($86) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 736 "bz2module.c"
      case 23: // $bb21
        var $88=_PyString_FromStringAndSize(0, $87); //@line 738 "bz2module.c"
        HEAP[$big_buffer]=$88; //@line 738 "bz2module.c"
        var $89=HEAP[$big_buffer]; //@line 740 "bz2module.c"
        var $90=($89)==0; //@line 740 "bz2module.c"
        if ($90) { __label__ = 15; break; } else { __label__ = 24; break; } //@line 740 "bz2module.c"
      case 24: // $bb22
        var $91=HEAP[$big_buffer]; //@line 742 "bz2module.c"
        var $92=$91; //@line 742 "bz2module.c"
        var $93=$92+20; //@line 742 "bz2module.c"
        var $94=$93; //@line 742 "bz2module.c"
        $buffer=$94; //@line 742 "bz2module.c"
        var $95=$buffer; //@line 743 "bz2module.c"
        var $96=$nfilled; //@line 743 "bz2module.c"
        _llvm_memcpy_p0i8_p0i8_i32($95, $small_buffer23, $96, 1, 0); //@line 743 "bz2module.c"
        __label__ = 9; break; //@line 743 "bz2module.c"
      case 25: // $bb24
        var $97=__PyString_Resize($big_buffer, $87); //@line 747 "bz2module.c"
        var $98=HEAP[$big_buffer]; //@line 748 "bz2module.c"
        var $99=$98; //@line 748 "bz2module.c"
        var $100=$99+20; //@line 748 "bz2module.c"
        var $101=$100; //@line 748 "bz2module.c"
        $buffer=$101; //@line 748 "bz2module.c"
        __label__ = 9; break; //@line 748 "bz2module.c"
      case 26: // $bb26
        var $102=$buffer; //@line 752 "bz2module.c"
        var $103=$nfilled; //@line 752 "bz2module.c"
        var $104=$102+$103; //@line 752 "bz2module.c"
        var $105=$nread; //@line 752 "bz2module.c"
        var $106=$104+$105; //@line 752 "bz2module.c"
        $end=$106; //@line 752 "bz2module.c"
        var $107=$buffer; //@line 753 "bz2module.c"
        $q=$107; //@line 753 "bz2module.c"
        var $_pr=$p;
        __lastLabel__ = 26; __label__ = 32; break; //@line 753 "bz2module.c"
      case 27: // $bb27
        var $108=$p; //@line 756 "bz2module.c"
        var $109=$108+1; //@line 756 "bz2module.c"
        $p=$109; //@line 756 "bz2module.c"
        var $110=$p; //@line 757 "bz2module.c"
        var $111=($110); //@line 757 "bz2module.c"
        var $112=$q; //@line 757 "bz2module.c"
        var $113=($112); //@line 757 "bz2module.c"
        var $114=($111) - ($113); //@line 757 "bz2module.c"
        var $115=$q; //@line 757 "bz2module.c"
        var $116=_PyString_FromStringAndSize($115, $114); //@line 757 "bz2module.c"
        HEAP[$line]=$116; //@line 757 "bz2module.c"
        var $117=HEAP[$line]; //@line 758 "bz2module.c"
        var $118=($117)==0; //@line 758 "bz2module.c"
        if ($118) { __label__ = 15; break; } else { __label__ = 28; break; } //@line 758 "bz2module.c"
      case 28: // $bb28
        var $119=HEAP[$line]; //@line 760 "bz2module.c"
        var $120=$list; //@line 760 "bz2module.c"
        var $121=_PyList_Append($120, $119); //@line 760 "bz2module.c"
        $err=$121; //@line 760 "bz2module.c"
        var $122=HEAP[$line]; //@line 761 "bz2module.c"
        var $123=$122; //@line 761 "bz2module.c"
        var $124=HEAP[$123]; //@line 761 "bz2module.c"
        var $125=($124) - 1; //@line 761 "bz2module.c"
        var $126=$122; //@line 761 "bz2module.c"
        HEAP[$126]=$125; //@line 761 "bz2module.c"
        var $127=$122; //@line 761 "bz2module.c"
        var $128=HEAP[$127]; //@line 761 "bz2module.c"
        var $129=($128)==0; //@line 761 "bz2module.c"
        if ($129) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 761 "bz2module.c"
      case 29: // $bb29
        var $130=HEAP[$line]; //@line 761 "bz2module.c"
        var $131=$130+4; //@line 761 "bz2module.c"
        var $132=HEAP[$131]; //@line 761 "bz2module.c"
        var $133=$132+24; //@line 761 "bz2module.c"
        var $134=HEAP[$133]; //@line 761 "bz2module.c"
        var $135=HEAP[$line]; //@line 761 "bz2module.c"
        FUNCTION_TABLE[$134]($135); //@line 761 "bz2module.c"
        __label__ = 30; break; //@line 761 "bz2module.c"
      case 30: // $bb30
        var $136=$err; //@line 762 "bz2module.c"
        var $137=($136)!=0; //@line 762 "bz2module.c"
        if ($137) { __label__ = 15; break; } else { __label__ = 31; break; } //@line 762 "bz2module.c"
      case 31: // $bb31
        var $138=$p; //@line 764 "bz2module.c"
        $q=$138; //@line 764 "bz2module.c"
        var $139=$end; //@line 765 "bz2module.c"
        var $140=($139); //@line 765 "bz2module.c"
        var $141=$q; //@line 765 "bz2module.c"
        var $142=($141); //@line 765 "bz2module.c"
        var $143=($140) - ($142); //@line 765 "bz2module.c"
        var $144=$q; //@line 765 "bz2module.c"
        var $145=_memchr($144, 10, $143); //@line 765 "bz2module.c"
        $p=$145; //@line 765 "bz2module.c"
        __lastLabel__ = 31; __label__ = 32; break; //@line 765 "bz2module.c"
      case 32: // $bb32
        var $146=__lastLabel__ == 31 ? $145 : ($_pr);
        var $147=($146)!=0; //@line 754 "bz2module.c"
        if ($147) { __label__ = 27; break; } else { __label__ = 33; break; } //@line 754 "bz2module.c"
      case 33: // $bb33
        var $148=$end; //@line 768 "bz2module.c"
        var $149=($148); //@line 768 "bz2module.c"
        var $150=$q; //@line 768 "bz2module.c"
        var $151=($150); //@line 768 "bz2module.c"
        var $152=($149) - ($151); //@line 768 "bz2module.c"
        $nfilled=$152; //@line 768 "bz2module.c"
        var $153=$buffer; //@line 769 "bz2module.c"
        var $154=$q; //@line 769 "bz2module.c"
        var $155=$nfilled; //@line 769 "bz2module.c"
        _llvm_memmove_p0i8_p0i8_i32($153, $154, $155, 1, 0); //@line 769 "bz2module.c"
        var $156=HEAP[$sizehint]; //@line 770 "bz2module.c"
        var $157=($156) > 0; //@line 770 "bz2module.c"
        if ($157) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 770 "bz2module.c"
      case 34: // $bb34
        var $158=HEAP[$sizehint]; //@line 771 "bz2module.c"
        var $159=$totalread; //@line 771 "bz2module.c"
        var $160=($158) <= ($159); //@line 771 "bz2module.c"
        if ($160) { __label__ = 37; break; } else { __label__ = 35; break; } //@line 771 "bz2module.c"
      case 35: // $bb35
        var $161=$shortread; //@line 773 "bz2module.c"
        var $162=($161)!=0; //@line 773 "bz2module.c"
        if ($162) { __label__ = 36; break; } else { __label__ = 9; break; } //@line 773 "bz2module.c"
      case 36: // $bb36
        HEAP[$sizehint]=0; //@line 774 "bz2module.c"
        __label__ = 37; break; //@line 774 "bz2module.c"
      case 37: // $bb38
        var $163=$nfilled; //@line 778 "bz2module.c"
        var $164=($163)!=0; //@line 778 "bz2module.c"
        if ($164) { __label__ = 38; break; } else { __label__ = 49; break; } //@line 778 "bz2module.c"
      case 38: // $bb39
        var $165=$nfilled; //@line 780 "bz2module.c"
        var $166=$buffer; //@line 780 "bz2module.c"
        var $167=_PyString_FromStringAndSize($166, $165); //@line 780 "bz2module.c"
        HEAP[$line]=$167; //@line 780 "bz2module.c"
        var $168=HEAP[$line]; //@line 781 "bz2module.c"
        var $169=($168)==0; //@line 781 "bz2module.c"
        if ($169) { __label__ = 15; break; } else { __label__ = 39; break; } //@line 781 "bz2module.c"
      case 39: // $bb40
        var $170=HEAP[$sizehint]; //@line 783 "bz2module.c"
        var $171=($170) > 0; //@line 783 "bz2module.c"
        if ($171) { __label__ = 40; break; } else { __label__ = 46; break; } //@line 783 "bz2module.c"
      case 40: // $bb41
        var $172=$self_addr; //@line 785 "bz2module.c"
        var $173=_Util_GetLine($172, 0); //@line 785 "bz2module.c"
        $rest=$173; //@line 785 "bz2module.c"
        var $174=$rest; //@line 786 "bz2module.c"
        var $175=($174)==0; //@line 786 "bz2module.c"
        if ($175) { __label__ = 41; break; } else { __label__ = 43; break; } //@line 786 "bz2module.c"
      case 41: // $bb42
        var $176=HEAP[$line]; //@line 787 "bz2module.c"
        var $177=$176; //@line 787 "bz2module.c"
        var $178=HEAP[$177]; //@line 787 "bz2module.c"
        var $179=($178) - 1; //@line 787 "bz2module.c"
        var $180=$176; //@line 787 "bz2module.c"
        HEAP[$180]=$179; //@line 787 "bz2module.c"
        var $181=$176; //@line 787 "bz2module.c"
        var $182=HEAP[$181]; //@line 787 "bz2module.c"
        var $183=($182)==0; //@line 787 "bz2module.c"
        if ($183) { __label__ = 42; break; } else { __label__ = 15; break; } //@line 787 "bz2module.c"
      case 42: // $bb43
        var $184=HEAP[$line]; //@line 787 "bz2module.c"
        var $185=$184+4; //@line 787 "bz2module.c"
        var $186=HEAP[$185]; //@line 787 "bz2module.c"
        var $187=$186+24; //@line 787 "bz2module.c"
        var $188=HEAP[$187]; //@line 787 "bz2module.c"
        var $189=HEAP[$line]; //@line 787 "bz2module.c"
        FUNCTION_TABLE[$188]($189); //@line 787 "bz2module.c"
        __label__ = 15; break; //@line 787 "bz2module.c"
      case 43: // $bb45
        var $190=$rest; //@line 790 "bz2module.c"
        _PyString_Concat($line, $190); //@line 790 "bz2module.c"
        var $191=$rest; //@line 791 "bz2module.c"
        var $192=$191; //@line 791 "bz2module.c"
        var $193=HEAP[$192]; //@line 791 "bz2module.c"
        var $194=($193) - 1; //@line 791 "bz2module.c"
        var $195=$rest; //@line 791 "bz2module.c"
        var $196=$195; //@line 791 "bz2module.c"
        HEAP[$196]=$194; //@line 791 "bz2module.c"
        var $197=$rest; //@line 791 "bz2module.c"
        var $198=$197; //@line 791 "bz2module.c"
        var $199=HEAP[$198]; //@line 791 "bz2module.c"
        var $200=($199)==0; //@line 791 "bz2module.c"
        if ($200) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 791 "bz2module.c"
      case 44: // $bb46
        var $201=$rest; //@line 791 "bz2module.c"
        var $202=$201+4; //@line 791 "bz2module.c"
        var $203=HEAP[$202]; //@line 791 "bz2module.c"
        var $204=$203+24; //@line 791 "bz2module.c"
        var $205=HEAP[$204]; //@line 791 "bz2module.c"
        var $206=$rest; //@line 791 "bz2module.c"
        FUNCTION_TABLE[$205]($206); //@line 791 "bz2module.c"
        __label__ = 45; break; //@line 791 "bz2module.c"
      case 45: // $bb47
        var $207=HEAP[$line]; //@line 792 "bz2module.c"
        var $208=($207)==0; //@line 792 "bz2module.c"
        if ($208) { __label__ = 15; break; } else { __label__ = 46; break; } //@line 792 "bz2module.c"
      case 46: // $bb48
        var $209=HEAP[$line]; //@line 795 "bz2module.c"
        var $210=$list; //@line 795 "bz2module.c"
        var $211=_PyList_Append($210, $209); //@line 795 "bz2module.c"
        $err=$211; //@line 795 "bz2module.c"
        var $212=HEAP[$line]; //@line 796 "bz2module.c"
        var $213=$212; //@line 796 "bz2module.c"
        var $214=HEAP[$213]; //@line 796 "bz2module.c"
        var $215=($214) - 1; //@line 796 "bz2module.c"
        var $216=$212; //@line 796 "bz2module.c"
        HEAP[$216]=$215; //@line 796 "bz2module.c"
        var $217=$212; //@line 796 "bz2module.c"
        var $218=HEAP[$217]; //@line 796 "bz2module.c"
        var $219=($218)==0; //@line 796 "bz2module.c"
        if ($219) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 796 "bz2module.c"
      case 47: // $bb49
        var $220=HEAP[$line]; //@line 796 "bz2module.c"
        var $221=$220+4; //@line 796 "bz2module.c"
        var $222=HEAP[$221]; //@line 796 "bz2module.c"
        var $223=$222+24; //@line 796 "bz2module.c"
        var $224=HEAP[$223]; //@line 796 "bz2module.c"
        var $225=HEAP[$line]; //@line 796 "bz2module.c"
        FUNCTION_TABLE[$224]($225); //@line 796 "bz2module.c"
        __label__ = 48; break; //@line 796 "bz2module.c"
      case 48: // $bb50
        var $226=$err; //@line 797 "bz2module.c"
        var $227=($226)!=0; //@line 797 "bz2module.c"
        if ($227) { __label__ = 15; break; } else { __label__ = 49; break; } //@line 797 "bz2module.c"
      case 49: // $cleanup
        var $228=HEAP[$big_buffer]; //@line 803 "bz2module.c"
        var $229=($228)!=0; //@line 803 "bz2module.c"
        if ($229) { __label__ = 50; break; } else { __label__ = 52; break; } //@line 803 "bz2module.c"
      case 50: // $bb51
        var $230=HEAP[$big_buffer]; //@line 804 "bz2module.c"
        var $231=$230; //@line 804 "bz2module.c"
        var $232=HEAP[$231]; //@line 804 "bz2module.c"
        var $233=($232) - 1; //@line 804 "bz2module.c"
        var $234=$230; //@line 804 "bz2module.c"
        HEAP[$234]=$233; //@line 804 "bz2module.c"
        var $235=$230; //@line 804 "bz2module.c"
        var $236=HEAP[$235]; //@line 804 "bz2module.c"
        var $237=($236)==0; //@line 804 "bz2module.c"
        if ($237) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 804 "bz2module.c"
      case 51: // $bb52
        var $238=HEAP[$big_buffer]; //@line 804 "bz2module.c"
        var $239=$238+4; //@line 804 "bz2module.c"
        var $240=HEAP[$239]; //@line 804 "bz2module.c"
        var $241=$240+24; //@line 804 "bz2module.c"
        var $242=HEAP[$241]; //@line 804 "bz2module.c"
        var $243=HEAP[$big_buffer]; //@line 804 "bz2module.c"
        FUNCTION_TABLE[$242]($243); //@line 804 "bz2module.c"
        __label__ = 52; break; //@line 804 "bz2module.c"
      case 52: // $bb53
        var $244=$list; //@line 806 "bz2module.c"
        $0=$244; //@line 806 "bz2module.c"
        __label__ = 53; break; //@line 806 "bz2module.c"
      case 53: // $bb54
        var $245=$0; //@line 677 "bz2module.c"
        $retval=$245; //@line 677 "bz2module.c"
        var $retval55=$retval; //@line 677 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval55; //@line 677 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_write($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $ret;
        var $pbuf=__stackBase__;
        var $buf;
        var $len;
        var $bzerror=__stackBase__+52;
        $self_addr=$self;
        $args_addr=$args;
        $ret=0; //@line 827 "bz2module.c"
        var $1=$args_addr; //@line 833 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, __str19, allocate([$pbuf,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 833 "bz2module.c"
        var $3=($2)==0; //@line 833 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 833 "bz2module.c"
      case 1: // $bb
        $0=0; //@line 834 "bz2module.c"
        __label__ = 9; break; //@line 834 "bz2module.c"
      case 2: // $bb1
        var $4=$pbuf; //@line 835 "bz2module.c"
        var $5=HEAP[$4]; //@line 835 "bz2module.c"
        $buf=$5; //@line 835 "bz2module.c"
        var $6=$pbuf+8; //@line 836 "bz2module.c"
        var $7=HEAP[$6]; //@line 836 "bz2module.c"
        $len=$7; //@line 836 "bz2module.c"
        var $8=$self_addr; //@line 839 "bz2module.c"
        var $9=$8+44; //@line 839 "bz2module.c"
        var $10=HEAP[$9]; //@line 839 "bz2module.c"
        if ($10 == 0) {
          __label__ = 4; break;
        }
        else if ($10 == 3) {
          __label__ = 3; break;
        }
        else {
        __label__ = 5; break;
        }
        
      case 3: // $bb2
        var $11=$self_addr; //@line 854 "bz2module.c"
        var $12=$11+24; //@line 854 "bz2module.c"
        HEAP[$12]=0; //@line 854 "bz2module.c"
        var $13=$self_addr; //@line 857 "bz2module.c"
        var $14=$13+40; //@line 857 "bz2module.c"
        var $15=HEAP[$14]; //@line 857 "bz2module.c"
        var $16=$buf; //@line 857 "bz2module.c"
        var $17=$len; //@line 857 "bz2module.c"
        _BZ2_bzWrite($bzerror, $15, $16, $17); //@line 857 "bz2module.c"
        var $18=$self_addr; //@line 858 "bz2module.c"
        var $19=$18+48; //@line 858 "bz2module.c"
        var $20=HEAP[$19]; //@line 858 "bz2module.c"
        var $21=$len; //@line 858 "bz2module.c"
        var $22=($21); //@line 858 "bz2module.c"
        var $23=($22) + ($20); //@line 858 "bz2module.c"
        var $24=$self_addr; //@line 858 "bz2module.c"
        var $25=$24+48; //@line 858 "bz2module.c"
        HEAP[$25]=$23; //@line 858 "bz2module.c"
        var $26=HEAP[$bzerror]; //@line 861 "bz2module.c"
        var $27=($26)!=0; //@line 861 "bz2module.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 861 "bz2module.c"
      case 4: // $bb3
        var $28=HEAP[_PyExc_ValueError]; //@line 844 "bz2module.c"
        _PyErr_SetString($28, __str14); //@line 844 "bz2module.c"
        __label__ = 8; break; //@line 844 "bz2module.c"
      case 5: // $bb4
        var $29=HEAP[_PyExc_IOError]; //@line 849 "bz2module.c"
        _PyErr_SetString($29, __str20); //@line 849 "bz2module.c"
        __label__ = 8; break; //@line 849 "bz2module.c"
      case 6: // $bb5
        var $30=HEAP[$bzerror]; //@line 862 "bz2module.c"
        _Util_CatchBZ2Error($30); //@line 862 "bz2module.c"
        __label__ = 8; break; //@line 862 "bz2module.c"
      case 7: // $bb6
        var $31=HEAP[__Py_NoneStruct]; //@line 866 "bz2module.c"
        var $32=($31) + 1; //@line 866 "bz2module.c"
        HEAP[__Py_NoneStruct]=$32; //@line 866 "bz2module.c"
        $ret=__Py_NoneStruct; //@line 867 "bz2module.c"
        __label__ = 8; break; //@line 869 "bz2module.c"
      case 8: // $cleanup
        _PyBuffer_Release($pbuf); //@line 870 "bz2module.c"
        var $33=$ret; //@line 872 "bz2module.c"
        $0=$33; //@line 872 "bz2module.c"
        __label__ = 9; break; //@line 872 "bz2module.c"
      case 9: // $bb7
        var $34=$0; //@line 834 "bz2module.c"
        $retval=$34; //@line 834 "bz2module.c"
        var $retval8=$retval; //@line 834 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 834 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_writelines($self, $seq) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $seq_addr;
        var $retval;
        var $0;
        var $list;
        var $iter;
        var $ret;
        var $line;
        var $i;
        var $j;
        var $index;
        var $len;
        var $islist;
        var $bzerror=__stackBase__;
        var $v;
        var $buffer=__stackBase__+4;
        var $len23=__stackBase__+8;
        $self_addr=$self;
        $seq_addr=$seq;
        $list=0; //@line 888 "bz2module.c"
        $iter=0; //@line 889 "bz2module.c"
        $ret=0; //@line 890 "bz2module.c"
        var $1=$self_addr; //@line 896 "bz2module.c"
        var $2=$1+44; //@line 896 "bz2module.c"
        var $3=HEAP[$2]; //@line 896 "bz2module.c"
        if ($3 == 0) {
          __label__ = 2; break;
        }
        else if ($3 == 3) {
          __label__ = 1; break;
        }
        else {
        __label__ = 3; break;
        }
        
      case 1: // $bb
        var $4=$seq_addr; //@line 911 "bz2module.c"
        var $5=$4+4; //@line 911 "bz2module.c"
        var $6=HEAP[$5]; //@line 911 "bz2module.c"
        var $7=$6+84; //@line 911 "bz2module.c"
        var $8=HEAP[$7]; //@line 911 "bz2module.c"
        var $9=($8) & 33554432; //@line 911 "bz2module.c"
        var $10=($9)!=0; //@line 911 "bz2module.c"
        var $11=($10); //@line 911 "bz2module.c"
        $islist=$11; //@line 911 "bz2module.c"
        var $12=$islist; //@line 912 "bz2module.c"
        var $13=($12)==0; //@line 912 "bz2module.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 912 "bz2module.c"
      case 2: // $bb1
        var $14=HEAP[_PyExc_ValueError]; //@line 901 "bz2module.c"
        _PyErr_SetString($14, __str14); //@line 901 "bz2module.c"
        __label__ = 39; break; //@line 901 "bz2module.c"
      case 3: // $bb2
        var $15=HEAP[_PyExc_IOError]; //@line 906 "bz2module.c"
        _PyErr_SetString($15, __str20); //@line 906 "bz2module.c"
        __label__ = 39; break; //@line 906 "bz2module.c"
      case 4: // $bb3
        var $16=$seq_addr; //@line 913 "bz2module.c"
        var $17=_PyObject_GetIter($16); //@line 913 "bz2module.c"
        $iter=$17; //@line 913 "bz2module.c"
        var $18=$iter; //@line 914 "bz2module.c"
        var $19=($18)==0; //@line 914 "bz2module.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 914 "bz2module.c"
      case 5: // $bb4
        var $20=HEAP[_PyExc_TypeError]; //@line 915 "bz2module.c"
        _PyErr_SetString($20, __str21); //@line 915 "bz2module.c"
        __label__ = 39; break; //@line 915 "bz2module.c"
      case 6: // $bb5
        var $21=_PyList_New(1000); //@line 919 "bz2module.c"
        $list=$21; //@line 919 "bz2module.c"
        var $22=$list; //@line 920 "bz2module.c"
        var $23=($22)==0; //@line 920 "bz2module.c"
        if ($23) { __label__ = 42; break; } else { __label__ = 7; break; } //@line 920 "bz2module.c"
      case 7: // $bb6
        $index=0; //@line 927 "bz2module.c"
        __label__ = 8; break; //@line 927 "bz2module.c"
      case 8: // $bb7
        var $24=$islist; //@line 928 "bz2module.c"
        var $25=($24)!=0; //@line 928 "bz2module.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 928 "bz2module.c"
      case 9: // $bb8
        var $26=$list; //@line 929 "bz2module.c"
        var $27=($26)!=0; //@line 929 "bz2module.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 929 "bz2module.c"
      case 10: // $bb9
        var $28=$list; //@line 929 "bz2module.c"
        var $29=$28; //@line 929 "bz2module.c"
        var $30=HEAP[$29]; //@line 929 "bz2module.c"
        var $31=($30) - 1; //@line 929 "bz2module.c"
        var $32=$list; //@line 929 "bz2module.c"
        var $33=$32; //@line 929 "bz2module.c"
        HEAP[$33]=$31; //@line 929 "bz2module.c"
        var $34=$list; //@line 929 "bz2module.c"
        var $35=$34; //@line 929 "bz2module.c"
        var $36=HEAP[$35]; //@line 929 "bz2module.c"
        var $37=($36)==0; //@line 929 "bz2module.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 929 "bz2module.c"
      case 11: // $bb10
        var $38=$list; //@line 929 "bz2module.c"
        var $39=$38+4; //@line 929 "bz2module.c"
        var $40=HEAP[$39]; //@line 929 "bz2module.c"
        var $41=$40+24; //@line 929 "bz2module.c"
        var $42=HEAP[$41]; //@line 929 "bz2module.c"
        var $43=$list; //@line 929 "bz2module.c"
        FUNCTION_TABLE[$42]($43); //@line 929 "bz2module.c"
        __label__ = 12; break; //@line 929 "bz2module.c"
      case 12: // $bb11
        var $44=$index; //@line 930 "bz2module.c"
        var $45=($44) + 1000; //@line 930 "bz2module.c"
        var $46=$seq_addr; //@line 930 "bz2module.c"
        var $47=$index; //@line 930 "bz2module.c"
        var $48=_PyList_GetSlice($46, $47, $45); //@line 930 "bz2module.c"
        $list=$48; //@line 930 "bz2module.c"
        var $49=($48)==0; //@line 931 "bz2module.c"
        if ($49) { __label__ = 42; break; } else { __label__ = 13; break; } //@line 931 "bz2module.c"
      case 13: // $bb12
        var $50=$list; //@line 933 "bz2module.c"
        var $51=$50; //@line 933 "bz2module.c"
        var $52=$51+8; //@line 933 "bz2module.c"
        var $53=HEAP[$52]; //@line 933 "bz2module.c"
        $j=$53; //@line 933 "bz2module.c"
        __lastLabel__ = 13; __label__ = 20; break; //@line 933 "bz2module.c"
      case 14: // $bb13
        $j=0; //@line 936 "bz2module.c"
        __lastLabel__ = 14; __label__ = 18; break; //@line 936 "bz2module.c"
      case 15: // $bb14
        var $54=$iter; //@line 937 "bz2module.c"
        var $55=_PyIter_Next($54); //@line 937 "bz2module.c"
        $line=$55; //@line 937 "bz2module.c"
        var $56=$line; //@line 938 "bz2module.c"
        var $57=($56)==0; //@line 938 "bz2module.c"
        if ($57) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 938 "bz2module.c"
      case 16: // $bb15
        var $58=_PyErr_Occurred(); //@line 939 "bz2module.c"
        var $59=($58)!=0; //@line 939 "bz2module.c"
        if ($59) { __label__ = 39; break; } else { __label__ = 19; break; } //@line 939 "bz2module.c"
      case 17: // $bb17
        var $60=$list; //@line 943 "bz2module.c"
        var $61=$j; //@line 943 "bz2module.c"
        var $62=$line; //@line 943 "bz2module.c"
        var $63=_PyList_SetItem($60, $61, $62); //@line 943 "bz2module.c"
        var $64=$j; //@line 936 "bz2module.c"
        var $65=($64) + 1; //@line 936 "bz2module.c"
        $j=$65; //@line 936 "bz2module.c"
        __lastLabel__ = 17; __label__ = 18; break; //@line 936 "bz2module.c"
      case 18: // $bb18
        var $66=__lastLabel__ == 17 ? $65 : (0);
        var $67=($66) <= 999; //@line 936 "bz2module.c"
        if ($67) { __label__ = 15; break; } else { __label__ = 19; break; } //@line 936 "bz2module.c"
      case 19: // $bb19thread_pre_split
        var $_pr=$j;
        __lastLabel__ = 19; __label__ = 20; break;
      case 20: // $bb19
        var $68=__lastLabel__ == 19 ? $_pr : ($53);
        var $69=($68)==0; //@line 946 "bz2module.c"
        if ($69) { __label__ = 38; break; } else { __label__ = 21; break; } //@line 946 "bz2module.c"
      case 21: // $bb20
        $i=0; //@line 954 "bz2module.c"
        __label__ = 30; break; //@line 954 "bz2module.c"
      case 22: // $bb21
        var $70=$list; //@line 955 "bz2module.c"
        var $71=$70; //@line 955 "bz2module.c"
        var $72=$71+12; //@line 955 "bz2module.c"
        var $73=HEAP[$72]; //@line 955 "bz2module.c"
        var $74=$i; //@line 955 "bz2module.c"
        var $75=$73+4*$74; //@line 955 "bz2module.c"
        var $76=HEAP[$75]; //@line 955 "bz2module.c"
        $v=$76; //@line 955 "bz2module.c"
        var $77=$v; //@line 956 "bz2module.c"
        var $78=$77+4; //@line 956 "bz2module.c"
        var $79=HEAP[$78]; //@line 956 "bz2module.c"
        var $80=$79+84; //@line 956 "bz2module.c"
        var $81=HEAP[$80]; //@line 956 "bz2module.c"
        var $82=($81) & 134217728; //@line 956 "bz2module.c"
        var $83=($82)==0; //@line 956 "bz2module.c"
        if ($83) { __label__ = 23; break; } else { __label__ = 29; break; } //@line 956 "bz2module.c"
      case 23: // $bb22
        var $84=$v; //@line 959 "bz2module.c"
        var $85=_PyObject_AsCharBuffer($84, $buffer, $len23); //@line 959 "bz2module.c"
        var $86=($85)!=0; //@line 959 "bz2module.c"
        if ($86) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 959 "bz2module.c"
      case 24: // $bb24
        var $87=HEAP[_PyExc_TypeError]; //@line 960 "bz2module.c"
        _PyErr_SetString($87, __str22); //@line 960 "bz2module.c"
        __label__ = 39; break; //@line 960 "bz2module.c"
      case 25: // $bb25
        var $88=HEAP[$len23]; //@line 967 "bz2module.c"
        var $89=HEAP[$buffer]; //@line 967 "bz2module.c"
        var $90=_PyString_FromStringAndSize($89, $88); //@line 967 "bz2module.c"
        $line=$90; //@line 967 "bz2module.c"
        var $91=$line; //@line 969 "bz2module.c"
        var $92=($91)==0; //@line 969 "bz2module.c"
        if ($92) { __label__ = 39; break; } else { __label__ = 26; break; } //@line 969 "bz2module.c"
      case 26: // $bb26
        var $93=$v; //@line 971 "bz2module.c"
        var $94=$93; //@line 971 "bz2module.c"
        var $95=HEAP[$94]; //@line 971 "bz2module.c"
        var $96=($95) - 1; //@line 971 "bz2module.c"
        var $97=$v; //@line 971 "bz2module.c"
        var $98=$97; //@line 971 "bz2module.c"
        HEAP[$98]=$96; //@line 971 "bz2module.c"
        var $99=$v; //@line 971 "bz2module.c"
        var $100=$99; //@line 971 "bz2module.c"
        var $101=HEAP[$100]; //@line 971 "bz2module.c"
        var $102=($101)==0; //@line 971 "bz2module.c"
        if ($102) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 971 "bz2module.c"
      case 27: // $bb27
        var $103=$v; //@line 971 "bz2module.c"
        var $104=$103+4; //@line 971 "bz2module.c"
        var $105=HEAP[$104]; //@line 971 "bz2module.c"
        var $106=$105+24; //@line 971 "bz2module.c"
        var $107=HEAP[$106]; //@line 971 "bz2module.c"
        var $108=$v; //@line 971 "bz2module.c"
        FUNCTION_TABLE[$107]($108); //@line 971 "bz2module.c"
        __label__ = 28; break; //@line 971 "bz2module.c"
      case 28: // $bb28
        var $109=$list; //@line 972 "bz2module.c"
        var $110=$109; //@line 972 "bz2module.c"
        var $111=$110+12; //@line 972 "bz2module.c"
        var $112=HEAP[$111]; //@line 972 "bz2module.c"
        var $113=$i; //@line 972 "bz2module.c"
        var $114=$112+4*$113; //@line 972 "bz2module.c"
        var $115=$line; //@line 972 "bz2module.c"
        HEAP[$114]=$115; //@line 972 "bz2module.c"
        __label__ = 29; break; //@line 972 "bz2module.c"
      case 29: // $bb29
        var $116=$i; //@line 954 "bz2module.c"
        var $117=($116) + 1; //@line 954 "bz2module.c"
        $i=$117; //@line 954 "bz2module.c"
        __label__ = 30; break; //@line 954 "bz2module.c"
      case 30: // $bb30
        var $118=$i; //@line 954 "bz2module.c"
        var $119=$j; //@line 954 "bz2module.c"
        var $120=($118) < ($119); //@line 954 "bz2module.c"
        if ($120) { __label__ = 22; break; } else { __label__ = 31; break; } //@line 954 "bz2module.c"
      case 31: // $bb31
        var $121=$self_addr; //@line 976 "bz2module.c"
        var $122=$121+24; //@line 976 "bz2module.c"
        HEAP[$122]=0; //@line 976 "bz2module.c"
        $i=0; //@line 981 "bz2module.c"
        __label__ = 35; break; //@line 981 "bz2module.c"
      case 32: // $bb32
        var $123=$list; //@line 982 "bz2module.c"
        var $124=$123; //@line 982 "bz2module.c"
        var $125=$124+12; //@line 982 "bz2module.c"
        var $126=HEAP[$125]; //@line 982 "bz2module.c"
        var $127=$i; //@line 982 "bz2module.c"
        var $128=$126+4*$127; //@line 982 "bz2module.c"
        var $129=HEAP[$128]; //@line 982 "bz2module.c"
        $line=$129; //@line 982 "bz2module.c"
        var $130=$line; //@line 983 "bz2module.c"
        var $131=$130; //@line 983 "bz2module.c"
        var $132=$131+8; //@line 983 "bz2module.c"
        var $133=HEAP[$132]; //@line 983 "bz2module.c"
        $len=$133; //@line 983 "bz2module.c"
        var $134=$line; //@line 984 "bz2module.c"
        var $135=$134; //@line 984 "bz2module.c"
        var $136=$135+20; //@line 984 "bz2module.c"
        var $137=$136; //@line 984 "bz2module.c"
        var $138=$self_addr; //@line 984 "bz2module.c"
        var $139=$138+40; //@line 984 "bz2module.c"
        var $140=HEAP[$139]; //@line 984 "bz2module.c"
        var $141=$len; //@line 984 "bz2module.c"
        _BZ2_bzWrite($bzerror, $140, $137, $141); //@line 984 "bz2module.c"
        var $142=HEAP[$bzerror]; //@line 986 "bz2module.c"
        var $143=($142)!=0; //@line 986 "bz2module.c"
        if ($143) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 986 "bz2module.c"
      case 33: // $bb33
        var $144=HEAP[$bzerror]; //@line 988 "bz2module.c"
        _Util_CatchBZ2Error($144); //@line 988 "bz2module.c"
        __label__ = 39; break; //@line 988 "bz2module.c"
      case 34: // $bb34
        var $145=$i; //@line 981 "bz2module.c"
        var $146=($145) + 1; //@line 981 "bz2module.c"
        $i=$146; //@line 981 "bz2module.c"
        __label__ = 35; break; //@line 981 "bz2module.c"
      case 35: // $bb35
        var $147=$i; //@line 981 "bz2module.c"
        var $148=$j; //@line 981 "bz2module.c"
        var $149=($147) < ($148); //@line 981 "bz2module.c"
        if ($149) { __label__ = 32; break; } else { __label__ = 36; break; } //@line 981 "bz2module.c"
      case 36: // $bb36
        var $150=$j; //@line 994 "bz2module.c"
        var $151=($150) <= 999; //@line 994 "bz2module.c"
        if ($151) { __label__ = 38; break; } else { __label__ = 37; break; } //@line 994 "bz2module.c"
      case 37: // $bb37
        var $152=$index; //@line 927 "bz2module.c"
        var $153=($152) + 1000; //@line 927 "bz2module.c"
        $index=$153; //@line 927 "bz2module.c"
        __label__ = 8; break; //@line 927 "bz2module.c"
      case 38: // $bb38
        var $154=HEAP[__Py_NoneStruct]; //@line 998 "bz2module.c"
        var $155=($154) + 1; //@line 998 "bz2module.c"
        HEAP[__Py_NoneStruct]=$155; //@line 998 "bz2module.c"
        $ret=__Py_NoneStruct; //@line 999 "bz2module.c"
        __label__ = 39; break; //@line 1001 "bz2module.c"
      case 39: // $error
        var $_pr1=$list;
        var $156=($_pr1)!=0; //@line 1003 "bz2module.c"
        if ($156) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 1003 "bz2module.c"
      case 40: // $bb39
        var $157=$list; //@line 1003 "bz2module.c"
        var $158=$157; //@line 1003 "bz2module.c"
        var $159=HEAP[$158]; //@line 1003 "bz2module.c"
        var $160=($159) - 1; //@line 1003 "bz2module.c"
        var $161=$list; //@line 1003 "bz2module.c"
        var $162=$161; //@line 1003 "bz2module.c"
        HEAP[$162]=$160; //@line 1003 "bz2module.c"
        var $163=$list; //@line 1003 "bz2module.c"
        var $164=$163; //@line 1003 "bz2module.c"
        var $165=HEAP[$164]; //@line 1003 "bz2module.c"
        var $166=($165)==0; //@line 1003 "bz2module.c"
        if ($166) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1003 "bz2module.c"
      case 41: // $bb40
        var $167=$list; //@line 1003 "bz2module.c"
        var $168=$167+4; //@line 1003 "bz2module.c"
        var $169=HEAP[$168]; //@line 1003 "bz2module.c"
        var $170=$169+24; //@line 1003 "bz2module.c"
        var $171=HEAP[$170]; //@line 1003 "bz2module.c"
        var $172=$list; //@line 1003 "bz2module.c"
        FUNCTION_TABLE[$171]($172); //@line 1003 "bz2module.c"
        __label__ = 42; break; //@line 1003 "bz2module.c"
      case 42: // $bb41
        var $173=$iter; //@line 1004 "bz2module.c"
        var $174=($173)!=0; //@line 1004 "bz2module.c"
        if ($174) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 1004 "bz2module.c"
      case 43: // $bb42
        var $175=$iter; //@line 1004 "bz2module.c"
        var $176=$175; //@line 1004 "bz2module.c"
        var $177=HEAP[$176]; //@line 1004 "bz2module.c"
        var $178=($177) - 1; //@line 1004 "bz2module.c"
        var $179=$iter; //@line 1004 "bz2module.c"
        var $180=$179; //@line 1004 "bz2module.c"
        HEAP[$180]=$178; //@line 1004 "bz2module.c"
        var $181=$iter; //@line 1004 "bz2module.c"
        var $182=$181; //@line 1004 "bz2module.c"
        var $183=HEAP[$182]; //@line 1004 "bz2module.c"
        var $184=($183)==0; //@line 1004 "bz2module.c"
        if ($184) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1004 "bz2module.c"
      case 44: // $bb43
        var $185=$iter; //@line 1004 "bz2module.c"
        var $186=$185+4; //@line 1004 "bz2module.c"
        var $187=HEAP[$186]; //@line 1004 "bz2module.c"
        var $188=$187+24; //@line 1004 "bz2module.c"
        var $189=HEAP[$188]; //@line 1004 "bz2module.c"
        var $190=$iter; //@line 1004 "bz2module.c"
        FUNCTION_TABLE[$189]($190); //@line 1004 "bz2module.c"
        __label__ = 45; break; //@line 1004 "bz2module.c"
      case 45: // $bb44
        var $191=$ret; //@line 1005 "bz2module.c"
        $0=$191; //@line 1005 "bz2module.c"
        var $192=$0; //@line 1005 "bz2module.c"
        $retval=$192; //@line 1005 "bz2module.c"
        var $retval45=$retval; //@line 1005 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 1005 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_seek($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8204; _memset(__stackBase__, 0, 8204);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_139;
        var $0;
        var $where=__stackBase__;
        var $offobj=__stackBase__+4;
        var $offset;
        var $small_buffer=__stackBase__+8;
        var $buffer;
        var $buffersize;
        var $bytesread;
        var $readsize;
        var $chunksize;
        var $bzerror=__stackBase__+8200;
        var $ret;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$where]=0; //@line 1025 "bz2module.c"
        var $small_buffer1=$small_buffer; //@line 1029 "bz2module.c"
        $buffer=$small_buffer1; //@line 1029 "bz2module.c"
        $buffersize=8192; //@line 1030 "bz2module.c"
        $bytesread=0; //@line 1031 "bz2module.c"
        $ret=0; //@line 1035 "bz2module.c"
        var $1=$args_addr; //@line 1037 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, __str23, allocate([$offobj,0,0,0,$where,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1037 "bz2module.c"
        var $3=($2)==0; //@line 1037 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1037 "bz2module.c"
      case 1: // $bb
        $0=0; //@line 1038 "bz2module.c"
        __label__ = 47; break; //@line 1038 "bz2module.c"
      case 2: // $bb2
        var $4=HEAP[$offobj]; //@line 1042 "bz2module.c"
        var $5=$4+4; //@line 1042 "bz2module.c"
        var $6=HEAP[$5]; //@line 1042 "bz2module.c"
        var $7=$6+84; //@line 1042 "bz2module.c"
        var $8=HEAP[$7]; //@line 1042 "bz2module.c"
        var $9=($8) & 16777216; //@line 1042 "bz2module.c"
        var $10=($9)!=0; //@line 1042 "bz2module.c"
        var $11=HEAP[$offobj]; //@line 1042 "bz2module.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1042 "bz2module.c"
      case 3: // $bb3
        var $12=_PyLong_AsLongLong($11); //@line 1042 "bz2module.c"
        $iftmp_139=$12; //@line 1042 "bz2module.c"
        __label__ = 5; break; //@line 1042 "bz2module.c"
      case 4: // $bb4
        var $13=_PyInt_AsLong($11); //@line 1042 "bz2module.c"
        var $14=($13); //@line 1042 "bz2module.c"
        $iftmp_139=$14; //@line 1042 "bz2module.c"
        __label__ = 5; break; //@line 1042 "bz2module.c"
      case 5: // $bb5
        var $15=$iftmp_139; //@line 1042 "bz2module.c"
        $offset=$15; //@line 1042 "bz2module.c"
        var $16=_PyErr_Occurred(); //@line 1045 "bz2module.c"
        var $17=($16)!=0; //@line 1045 "bz2module.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1045 "bz2module.c"
      case 6: // $bb6
        $0=0; //@line 1046 "bz2module.c"
        __label__ = 47; break; //@line 1046 "bz2module.c"
      case 7: // $bb7
        var $18=$self_addr; //@line 1049 "bz2module.c"
        _Util_DropReadAhead($18); //@line 1049 "bz2module.c"
        var $19=$self_addr; //@line 1050 "bz2module.c"
        var $20=$19+44; //@line 1050 "bz2module.c"
        var $21=HEAP[$20]; //@line 1050 "bz2module.c"
        if ($21 == 0) {
          __label__ = 9; break;
        }
        else if ($21 == 1) {
          __label__ = 8; break;
        }
        else if ($21 == 2) {
          __label__ = 8; break;
        }
        else {
        __label__ = 10; break;
        }
        
      case 8: // $bb8
        var $22=HEAP[$where]; //@line 1066 "bz2module.c"
        var $23=($22)==2; //@line 1066 "bz2module.c"
        if ($23) { __label__ = 11; break; } else { __label__ = 19; break; } //@line 1066 "bz2module.c"
      case 9: // $bb9
        var $24=HEAP[_PyExc_ValueError]; //@line 1056 "bz2module.c"
        _PyErr_SetString($24, __str14); //@line 1056 "bz2module.c"
        __label__ = 46; break; //@line 1056 "bz2module.c"
      case 10: // $bb10
        var $25=HEAP[_PyExc_IOError]; //@line 1061 "bz2module.c"
        _PyErr_SetString($25, __str24); //@line 1061 "bz2module.c"
        __label__ = 46; break; //@line 1061 "bz2module.c"
      case 11: // $bb11
        var $26=$self_addr; //@line 1067 "bz2module.c"
        var $27=$26+56; //@line 1067 "bz2module.c"
        var $28=HEAP[$27]; //@line 1067 "bz2module.c"
        var $29=($28)==-1; //@line 1067 "bz2module.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 18; break; } //@line 1067 "bz2module.c"
      case 12: // $bb12
        var $30=$self_addr; //@line 1068 "bz2module.c"
        var $31=$30+44; //@line 1068 "bz2module.c"
        var $32=HEAP[$31]; //@line 1068 "bz2module.c"
        var $33=($32)==2; //@line 1068 "bz2module.c"
        if ($33) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1068 "bz2module.c"
      case 13: // $bb13
        ___assert_fail(__str25, __str9, 1068, ___PRETTY_FUNCTION___9317); //@line 1068 "bz2module.c"
        throw "Reached an unreachable!" //@line 1068 "bz2module.c"
      case 14: // $bb14
        var $34=$self_addr; //@line 1071 "bz2module.c"
        var $35=$34+40; //@line 1071 "bz2module.c"
        var $36=HEAP[$35]; //@line 1071 "bz2module.c"
        var $37=$buffer; //@line 1071 "bz2module.c"
        var $38=$buffersize; //@line 1071 "bz2module.c"
        var $39=$self_addr; //@line 1071 "bz2module.c"
        var $40=_Util_UnivNewlineRead($bzerror, $36, $37, $38, $39); //@line 1071 "bz2module.c"
        $chunksize=$40; //@line 1071 "bz2module.c"
        var $41=$self_addr; //@line 1075 "bz2module.c"
        var $42=$41+48; //@line 1075 "bz2module.c"
        var $43=HEAP[$42]; //@line 1075 "bz2module.c"
        var $44=$chunksize; //@line 1075 "bz2module.c"
        var $45=($44); //@line 1075 "bz2module.c"
        var $46=($45) + ($43); //@line 1075 "bz2module.c"
        var $47=$self_addr; //@line 1075 "bz2module.c"
        var $48=$47+48; //@line 1075 "bz2module.c"
        HEAP[$48]=$46; //@line 1075 "bz2module.c"
        var $49=$chunksize; //@line 1078 "bz2module.c"
        var $50=($49); //@line 1078 "bz2module.c"
        var $51=$bytesread; //@line 1078 "bz2module.c"
        var $52=($50) + ($51); //@line 1078 "bz2module.c"
        $bytesread=$52; //@line 1078 "bz2module.c"
        var $53=HEAP[$bzerror]; //@line 1079 "bz2module.c"
        var $54=($53)==4; //@line 1079 "bz2module.c"
        if ($54) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 1079 "bz2module.c"
      case 15: // $bb15
        var $55=HEAP[$bzerror]; //@line 1081 "bz2module.c"
        var $56=($55)!=0; //@line 1081 "bz2module.c"
        if ($56) { __label__ = 16; break; } else { __label__ = 14; break; } //@line 1081 "bz2module.c"
      case 16: // $bb16
        var $57=HEAP[$bzerror]; //@line 1082 "bz2module.c"
        _Util_CatchBZ2Error($57); //@line 1082 "bz2module.c"
        __label__ = 46; break; //@line 1082 "bz2module.c"
      case 17: // $bb18
        var $58=$self_addr; //@line 1086 "bz2module.c"
        var $59=$58+44; //@line 1086 "bz2module.c"
        HEAP[$59]=2; //@line 1086 "bz2module.c"
        var $60=$self_addr; //@line 1087 "bz2module.c"
        var $61=$60+48; //@line 1087 "bz2module.c"
        var $62=HEAP[$61]; //@line 1087 "bz2module.c"
        var $63=$self_addr; //@line 1087 "bz2module.c"
        var $64=$63+56; //@line 1087 "bz2module.c"
        HEAP[$64]=$62; //@line 1087 "bz2module.c"
        $bytesread=0; //@line 1088 "bz2module.c"
        __label__ = 18; break; //@line 1088 "bz2module.c"
      case 18: // $bb19
        var $65=$self_addr; //@line 1090 "bz2module.c"
        var $66=$65+56; //@line 1090 "bz2module.c"
        var $67=HEAP[$66]; //@line 1090 "bz2module.c"
        var $68=$offset; //@line 1090 "bz2module.c"
        var $69=($68) + ($67); //@line 1090 "bz2module.c"
        $offset=$69; //@line 1090 "bz2module.c"
        __label__ = 21; break; //@line 1090 "bz2module.c"
      case 19: // $bb20
        var $70=HEAP[$where]; //@line 1091 "bz2module.c"
        var $71=($70)==1; //@line 1091 "bz2module.c"
        if ($71) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1091 "bz2module.c"
      case 20: // $bb21
        var $72=$self_addr; //@line 1092 "bz2module.c"
        var $73=$72+48; //@line 1092 "bz2module.c"
        var $74=HEAP[$73]; //@line 1092 "bz2module.c"
        var $75=$offset; //@line 1092 "bz2module.c"
        var $76=($75) + ($74); //@line 1092 "bz2module.c"
        $offset=$76; //@line 1092 "bz2module.c"
        __label__ = 21; break; //@line 1092 "bz2module.c"
      case 21: // $bb22
        var $77=$self_addr; //@line 1098 "bz2module.c"
        var $78=$77+48; //@line 1098 "bz2module.c"
        var $79=HEAP[$78]; //@line 1098 "bz2module.c"
        var $80=$offset; //@line 1098 "bz2module.c"
        var $81=($79) <= ($80); //@line 1098 "bz2module.c"
        var $82=$self_addr; //@line 1100 "bz2module.c"
        if ($81) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1098 "bz2module.c"
      case 22: // $bb23
        var $83=$82+48; //@line 1100 "bz2module.c"
        var $84=HEAP[$83]; //@line 1100 "bz2module.c"
        var $85=$offset; //@line 1100 "bz2module.c"
        var $86=($85) - ($84); //@line 1100 "bz2module.c"
        $offset=$86; //@line 1100 "bz2module.c"
        __lastLabel__ = 22; __label__ = 35; break; //@line 1100 "bz2module.c"
      case 23: // $bb24
        var $87=$82+40; //@line 1103 "bz2module.c"
        var $88=HEAP[$87]; //@line 1103 "bz2module.c"
        _BZ2_bzReadClose($bzerror, $88); //@line 1103 "bz2module.c"
        var $89=$self_addr; //@line 1104 "bz2module.c"
        var $90=$89+40; //@line 1104 "bz2module.c"
        var $91=HEAP[$90]; //@line 1104 "bz2module.c"
        var $92=($91)!=0; //@line 1104 "bz2module.c"
        if ($92) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1104 "bz2module.c"
      case 24: // $bb25
        var $93=$self_addr; //@line 1105 "bz2module.c"
        var $94=$93+8; //@line 1105 "bz2module.c"
        var $95=HEAP[$94]; //@line 1105 "bz2module.c"
        var $96=$95; //@line 1105 "bz2module.c"
        _PyFile_DecUseCount($96); //@line 1105 "bz2module.c"
        var $97=$self_addr; //@line 1106 "bz2module.c"
        var $98=$97+40; //@line 1106 "bz2module.c"
        HEAP[$98]=0; //@line 1106 "bz2module.c"
        __label__ = 25; break; //@line 1106 "bz2module.c"
      case 25: // $bb26
        var $99=HEAP[$bzerror]; //@line 1108 "bz2module.c"
        var $100=($99)!=0; //@line 1108 "bz2module.c"
        if ($100) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1108 "bz2module.c"
      case 26: // $bb27
        var $101=HEAP[$bzerror]; //@line 1109 "bz2module.c"
        _Util_CatchBZ2Error($101); //@line 1109 "bz2module.c"
        __label__ = 46; break; //@line 1109 "bz2module.c"
      case 27: // $bb28
        var $102=$self_addr; //@line 1112 "bz2module.c"
        var $103=$102+8; //@line 1112 "bz2module.c"
        var $104=HEAP[$103]; //@line 1112 "bz2module.c"
        var $105=_PyObject_CallMethod($104, __str26, __str27, allocate(4, "i32", ALLOC_STACK)); //@line 1112 "bz2module.c"
        $ret=$105; //@line 1112 "bz2module.c"
        var $106=$ret; //@line 1113 "bz2module.c"
        var $107=($106)==0; //@line 1113 "bz2module.c"
        if ($107) { __label__ = 46; break; } else { __label__ = 28; break; } //@line 1113 "bz2module.c"
      case 28: // $bb29
        var $108=$ret; //@line 1115 "bz2module.c"
        var $109=$108; //@line 1115 "bz2module.c"
        var $110=HEAP[$109]; //@line 1115 "bz2module.c"
        var $111=($110) - 1; //@line 1115 "bz2module.c"
        var $112=$ret; //@line 1115 "bz2module.c"
        var $113=$112; //@line 1115 "bz2module.c"
        HEAP[$113]=$111; //@line 1115 "bz2module.c"
        var $114=$ret; //@line 1115 "bz2module.c"
        var $115=$114; //@line 1115 "bz2module.c"
        var $116=HEAP[$115]; //@line 1115 "bz2module.c"
        var $117=($116)==0; //@line 1115 "bz2module.c"
        if ($117) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1115 "bz2module.c"
      case 29: // $bb30
        var $118=$ret; //@line 1115 "bz2module.c"
        var $119=$118+4; //@line 1115 "bz2module.c"
        var $120=HEAP[$119]; //@line 1115 "bz2module.c"
        var $121=$120+24; //@line 1115 "bz2module.c"
        var $122=HEAP[$121]; //@line 1115 "bz2module.c"
        var $123=$ret; //@line 1115 "bz2module.c"
        FUNCTION_TABLE[$122]($123); //@line 1115 "bz2module.c"
        __label__ = 30; break; //@line 1115 "bz2module.c"
      case 30: // $bb31
        $ret=0; //@line 1116 "bz2module.c"
        var $124=$self_addr; //@line 1117 "bz2module.c"
        var $125=$124+48; //@line 1117 "bz2module.c"
        HEAP[$125]=0; //@line 1117 "bz2module.c"
        var $126=$self_addr; //@line 1118 "bz2module.c"
        var $127=$126+8; //@line 1118 "bz2module.c"
        var $128=HEAP[$127]; //@line 1118 "bz2module.c"
        var $129=_PyFile_AsFile($128); //@line 1118 "bz2module.c"
        var $130=_BZ2_bzReadOpen($bzerror, $129, 0, 0, 0, 0); //@line 1118 "bz2module.c"
        var $131=$self_addr; //@line 1118 "bz2module.c"
        var $132=$131+40; //@line 1118 "bz2module.c"
        HEAP[$132]=$130; //@line 1118 "bz2module.c"
        var $133=$self_addr; //@line 1120 "bz2module.c"
        var $134=$133+40; //@line 1120 "bz2module.c"
        var $135=HEAP[$134]; //@line 1120 "bz2module.c"
        var $136=($135)!=0; //@line 1120 "bz2module.c"
        if ($136) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1120 "bz2module.c"
      case 31: // $bb32
        var $137=$self_addr; //@line 1121 "bz2module.c"
        var $138=$137+8; //@line 1121 "bz2module.c"
        var $139=HEAP[$138]; //@line 1121 "bz2module.c"
        var $140=$139; //@line 1121 "bz2module.c"
        _PyFile_IncUseCount($140); //@line 1121 "bz2module.c"
        __label__ = 32; break; //@line 1121 "bz2module.c"
      case 32: // $bb33
        var $141=HEAP[$bzerror]; //@line 1122 "bz2module.c"
        var $142=($141)!=0; //@line 1122 "bz2module.c"
        if ($142) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1122 "bz2module.c"
      case 33: // $bb34
        var $143=HEAP[$bzerror]; //@line 1123 "bz2module.c"
        _Util_CatchBZ2Error($143); //@line 1123 "bz2module.c"
        __label__ = 46; break; //@line 1123 "bz2module.c"
      case 34: // $bb35
        var $144=$self_addr; //@line 1126 "bz2module.c"
        var $145=$144+44; //@line 1126 "bz2module.c"
        HEAP[$145]=1; //@line 1126 "bz2module.c"
        var $_pr=$offset;
        __lastLabel__ = 34; __label__ = 35; break; //@line 1126 "bz2module.c"
      case 35: // $bb36
        var $146=__lastLabel__ == 34 ? $_pr : ($86);
        var $147=($146) <= 0; //@line 1129 "bz2module.c"
        if ($147) { __label__ = 45; break; } else { __label__ = 36; break; } //@line 1129 "bz2module.c"
      case 36: // $bb37
        var $148=$self_addr; //@line 1129 "bz2module.c"
        var $149=$148+44; //@line 1129 "bz2module.c"
        var $150=HEAP[$149]; //@line 1129 "bz2module.c"
        var $151=($150)==2; //@line 1129 "bz2module.c"
        if ($151) { __label__ = 45; break; } else { __label__ = 37; break; } //@line 1129 "bz2module.c"
      case 37: // $bb38
        var $152=$offset; //@line 1135 "bz2module.c"
        var $153=$bytesread; //@line 1135 "bz2module.c"
        var $154=($152) - ($153); //@line 1135 "bz2module.c"
        var $155=$buffersize; //@line 1135 "bz2module.c"
        var $156=($155); //@line 1135 "bz2module.c"
        var $157=($154) > ($156); //@line 1135 "bz2module.c"
        if ($157) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1135 "bz2module.c"
      case 38: // $bb39
        var $158=$buffersize; //@line 1136 "bz2module.c"
        $readsize=$158; //@line 1136 "bz2module.c"
        __label__ = 40; break; //@line 1136 "bz2module.c"
      case 39: // $bb40
        var $159=$offset; //@line 1141 "bz2module.c"
        var $160=((($159)) & 4294967295); //@line 1141 "bz2module.c"
        var $161=$bytesread; //@line 1141 "bz2module.c"
        var $162=((($161)) & 4294967295); //@line 1141 "bz2module.c"
        var $163=($160) - ($162); //@line 1141 "bz2module.c"
        $readsize=$163; //@line 1141 "bz2module.c"
        __label__ = 40; break; //@line 1141 "bz2module.c"
      case 40: // $bb41
        var $164=$self_addr; //@line 1143 "bz2module.c"
        var $165=$164+40; //@line 1143 "bz2module.c"
        var $166=HEAP[$165]; //@line 1143 "bz2module.c"
        var $167=$buffer; //@line 1143 "bz2module.c"
        var $168=$readsize; //@line 1143 "bz2module.c"
        var $169=$self_addr; //@line 1143 "bz2module.c"
        var $170=_Util_UnivNewlineRead($bzerror, $166, $167, $168, $169); //@line 1143 "bz2module.c"
        $chunksize=$170; //@line 1143 "bz2module.c"
        var $171=$self_addr; //@line 1145 "bz2module.c"
        var $172=$171+48; //@line 1145 "bz2module.c"
        var $173=HEAP[$172]; //@line 1145 "bz2module.c"
        var $174=$chunksize; //@line 1145 "bz2module.c"
        var $175=($174); //@line 1145 "bz2module.c"
        var $176=($175) + ($173); //@line 1145 "bz2module.c"
        var $177=$self_addr; //@line 1145 "bz2module.c"
        var $178=$177+48; //@line 1145 "bz2module.c"
        HEAP[$178]=$176; //@line 1145 "bz2module.c"
        var $179=$chunksize; //@line 1147 "bz2module.c"
        var $180=($179); //@line 1147 "bz2module.c"
        var $181=$bytesread; //@line 1147 "bz2module.c"
        var $182=($180) + ($181); //@line 1147 "bz2module.c"
        $bytesread=$182; //@line 1147 "bz2module.c"
        var $183=HEAP[$bzerror]; //@line 1148 "bz2module.c"
        var $184=($183)==4; //@line 1148 "bz2module.c"
        if ($184) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1148 "bz2module.c"
      case 41: // $bb42
        var $185=$self_addr; //@line 1149 "bz2module.c"
        var $186=$185+48; //@line 1149 "bz2module.c"
        var $187=HEAP[$186]; //@line 1149 "bz2module.c"
        var $188=$self_addr; //@line 1149 "bz2module.c"
        var $189=$188+56; //@line 1149 "bz2module.c"
        HEAP[$189]=$187; //@line 1149 "bz2module.c"
        var $190=$self_addr; //@line 1150 "bz2module.c"
        var $191=$190+44; //@line 1150 "bz2module.c"
        HEAP[$191]=2; //@line 1150 "bz2module.c"
        __label__ = 45; break; //@line 1150 "bz2module.c"
      case 42: // $bb43
        var $192=HEAP[$bzerror]; //@line 1152 "bz2module.c"
        var $193=($192)!=0; //@line 1152 "bz2module.c"
        if ($193) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1152 "bz2module.c"
      case 43: // $bb44
        var $194=HEAP[$bzerror]; //@line 1153 "bz2module.c"
        _Util_CatchBZ2Error($194); //@line 1153 "bz2module.c"
        __label__ = 46; break; //@line 1153 "bz2module.c"
      case 44: // $bb45
        var $195=$bytesread; //@line 1156 "bz2module.c"
        var $196=$offset; //@line 1156 "bz2module.c"
        var $197=($195)==($196); //@line 1156 "bz2module.c"
        if ($197) { __label__ = 45; break; } else { __label__ = 37; break; } //@line 1156 "bz2module.c"
      case 45: // $exit
        var $198=HEAP[__Py_NoneStruct]; //@line 1161 "bz2module.c"
        var $199=($198) + 1; //@line 1161 "bz2module.c"
        HEAP[__Py_NoneStruct]=$199; //@line 1161 "bz2module.c"
        $ret=__Py_NoneStruct; //@line 1162 "bz2module.c"
        __label__ = 46; break; //@line 1164 "bz2module.c"
      case 46: // $cleanup
        var $200=$ret; //@line 1166 "bz2module.c"
        $0=$200; //@line 1166 "bz2module.c"
        __label__ = 47; break; //@line 1166 "bz2module.c"
      case 47: // $bb47
        var $201=$0; //@line 1038 "bz2module.c"
        $retval=$201; //@line 1038 "bz2module.c"
        var $retval48=$retval; //@line 1038 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval48; //@line 1038 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_tell($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $ret;
        $self_addr=$self;
        $args_addr=$args;
        $ret=0; //@line 1178 "bz2module.c"
        var $1=$self_addr; //@line 1180 "bz2module.c"
        var $2=$1+44; //@line 1180 "bz2module.c"
        var $3=HEAP[$2]; //@line 1180 "bz2module.c"
        var $4=($3)==0; //@line 1180 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1180 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 1181 "bz2module.c"
        _PyErr_SetString($5, __str14); //@line 1181 "bz2module.c"
        __label__ = 3; break; //@line 1181 "bz2module.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 1189 "bz2module.c"
        var $7=$6+48; //@line 1189 "bz2module.c"
        var $8=HEAP[$7]; //@line 1189 "bz2module.c"
        var $9=_PyLong_FromLongLong($8); //@line 1189 "bz2module.c"
        $ret=$9; //@line 1189 "bz2module.c"
        __label__ = 3; break; //@line 1192 "bz2module.c"
      case 3: // $cleanup
        var $10=$ret; //@line 1193 "bz2module.c"
        $0=$10; //@line 1193 "bz2module.c"
        var $11=$0; //@line 1193 "bz2module.c"
        $retval=$11; //@line 1193 "bz2module.c"
        var $retval2=$retval; //@line 1193 "bz2module.c"
        ;
        return $retval2; //@line 1193 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_close($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $ret;
        var $bzerror=__stackBase__;
        $self_addr=$self;
        $ret=0; //@line 1207 "bz2module.c"
        HEAP[$bzerror]=0; //@line 1208 "bz2module.c"
        var $1=$self_addr; //@line 1211 "bz2module.c"
        var $2=$1+44; //@line 1211 "bz2module.c"
        var $3=HEAP[$2]; //@line 1211 "bz2module.c"
        if ($3 == 1) {
          __label__ = 1; break;
        }
        else if ($3 == 2) {
          __label__ = 1; break;
        }
        else if ($3 == 3) {
          __label__ = 2; break;
        }
        else {
        __label__ = 3; break;
        }
        
      case 1: // $bb
        var $4=$self_addr; //@line 1214 "bz2module.c"
        var $5=$4+40; //@line 1214 "bz2module.c"
        var $6=HEAP[$5]; //@line 1214 "bz2module.c"
        _BZ2_bzReadClose($bzerror, $6); //@line 1214 "bz2module.c"
        __label__ = 3; break; //@line 1214 "bz2module.c"
      case 2: // $bb1
        var $7=$self_addr; //@line 1217 "bz2module.c"
        var $8=$7+40; //@line 1217 "bz2module.c"
        var $9=HEAP[$8]; //@line 1217 "bz2module.c"
        _BZ2_bzWriteClose($bzerror, $9, 0, 0, 0); //@line 1217 "bz2module.c"
        __label__ = 3; break; //@line 1217 "bz2module.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1221 "bz2module.c"
        var $11=$10+40; //@line 1221 "bz2module.c"
        var $12=HEAP[$11]; //@line 1221 "bz2module.c"
        var $13=($12)!=0; //@line 1221 "bz2module.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1221 "bz2module.c"
      case 4: // $bb3
        var $14=$self_addr; //@line 1222 "bz2module.c"
        var $15=$14+8; //@line 1222 "bz2module.c"
        var $16=HEAP[$15]; //@line 1222 "bz2module.c"
        var $17=$16; //@line 1222 "bz2module.c"
        _PyFile_DecUseCount($17); //@line 1222 "bz2module.c"
        var $18=$self_addr; //@line 1223 "bz2module.c"
        var $19=$18+40; //@line 1223 "bz2module.c"
        HEAP[$19]=0; //@line 1223 "bz2module.c"
        __label__ = 5; break; //@line 1223 "bz2module.c"
      case 5: // $bb4
        var $20=$self_addr; //@line 1225 "bz2module.c"
        var $21=$20+44; //@line 1225 "bz2module.c"
        HEAP[$21]=0; //@line 1225 "bz2module.c"
        var $22=$self_addr; //@line 1226 "bz2module.c"
        var $23=$22+8; //@line 1226 "bz2module.c"
        var $24=HEAP[$23]; //@line 1226 "bz2module.c"
        var $25=_PyObject_CallMethod($24, __str28, 0, allocate(1, "i32", ALLOC_STACK)); //@line 1226 "bz2module.c"
        $ret=$25; //@line 1226 "bz2module.c"
        var $26=HEAP[$bzerror]; //@line 1227 "bz2module.c"
        var $27=($26)!=0; //@line 1227 "bz2module.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 1227 "bz2module.c"
      case 6: // $bb5
        var $28=HEAP[$bzerror]; //@line 1228 "bz2module.c"
        _Util_CatchBZ2Error($28); //@line 1228 "bz2module.c"
        var $29=$ret; //@line 1229 "bz2module.c"
        var $30=($29)!=0; //@line 1229 "bz2module.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1229 "bz2module.c"
      case 7: // $bb6
        var $31=$ret; //@line 1229 "bz2module.c"
        var $32=$31; //@line 1229 "bz2module.c"
        var $33=HEAP[$32]; //@line 1229 "bz2module.c"
        var $34=($33) - 1; //@line 1229 "bz2module.c"
        var $35=$ret; //@line 1229 "bz2module.c"
        var $36=$35; //@line 1229 "bz2module.c"
        HEAP[$36]=$34; //@line 1229 "bz2module.c"
        var $37=$ret; //@line 1229 "bz2module.c"
        var $38=$37; //@line 1229 "bz2module.c"
        var $39=HEAP[$38]; //@line 1229 "bz2module.c"
        var $40=($39)==0; //@line 1229 "bz2module.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1229 "bz2module.c"
      case 8: // $bb7
        var $41=$ret; //@line 1229 "bz2module.c"
        var $42=$41+4; //@line 1229 "bz2module.c"
        var $43=HEAP[$42]; //@line 1229 "bz2module.c"
        var $44=$43+24; //@line 1229 "bz2module.c"
        var $45=HEAP[$44]; //@line 1229 "bz2module.c"
        var $46=$ret; //@line 1229 "bz2module.c"
        FUNCTION_TABLE[$45]($46); //@line 1229 "bz2module.c"
        __label__ = 9; break; //@line 1229 "bz2module.c"
      case 9: // $bb8
        $ret=0; //@line 1230 "bz2module.c"
        __label__ = 10; break; //@line 1230 "bz2module.c"
      case 10: // $bb9
        var $47=$ret; //@line 1234 "bz2module.c"
        $0=$47; //@line 1234 "bz2module.c"
        var $48=$0; //@line 1234 "bz2module.c"
        $retval=$48; //@line 1234 "bz2module.c"
        var $retval10=$retval; //@line 1234 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1234 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_enter($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 1243 "bz2module.c"
        var $2=$1+44; //@line 1243 "bz2module.c"
        var $3=HEAP[$2]; //@line 1243 "bz2module.c"
        var $4=($3)==0; //@line 1243 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1243 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 1244 "bz2module.c"
        _PyErr_SetString($5, __str14); //@line 1244 "bz2module.c"
        $0=0; //@line 1246 "bz2module.c"
        __label__ = 3; break; //@line 1246 "bz2module.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 1248 "bz2module.c"
        var $7=$6; //@line 1248 "bz2module.c"
        var $8=$7; //@line 1248 "bz2module.c"
        var $9=HEAP[$8]; //@line 1248 "bz2module.c"
        var $10=($9) + 1; //@line 1248 "bz2module.c"
        var $11=$7; //@line 1248 "bz2module.c"
        HEAP[$11]=$10; //@line 1248 "bz2module.c"
        var $12=$self_addr; //@line 1249 "bz2module.c"
        var $13=$12; //@line 1249 "bz2module.c"
        $0=$13; //@line 1249 "bz2module.c"
        __label__ = 3; break; //@line 1249 "bz2module.c"
      case 3: // $bb2
        var $14=$0; //@line 1246 "bz2module.c"
        $retval=$14; //@line 1246 "bz2module.c"
        var $retval3=$retval; //@line 1246 "bz2module.c"
        ;
        return $retval3; //@line 1246 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_exit($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $ret;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$self_addr; //@line 1258 "bz2module.c"
        var $2=$1; //@line 1258 "bz2module.c"
        var $3=_PyObject_CallMethod($2, __str28, 0, allocate(1, "i32", ALLOC_STACK)); //@line 1258 "bz2module.c"
        $ret=$3; //@line 1258 "bz2module.c"
        var $4=$ret; //@line 1259 "bz2module.c"
        var $5=($4)==0; //@line 1259 "bz2module.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1259 "bz2module.c"
      case 1: // $bb
        $0=0; //@line 1261 "bz2module.c"
        __label__ = 5; break; //@line 1261 "bz2module.c"
      case 2: // $bb1
        var $6=$ret; //@line 1262 "bz2module.c"
        var $7=$6; //@line 1262 "bz2module.c"
        var $8=HEAP[$7]; //@line 1262 "bz2module.c"
        var $9=($8) - 1; //@line 1262 "bz2module.c"
        var $10=$ret; //@line 1262 "bz2module.c"
        var $11=$10; //@line 1262 "bz2module.c"
        HEAP[$11]=$9; //@line 1262 "bz2module.c"
        var $12=$ret; //@line 1262 "bz2module.c"
        var $13=$12; //@line 1262 "bz2module.c"
        var $14=HEAP[$13]; //@line 1262 "bz2module.c"
        var $15=($14)==0; //@line 1262 "bz2module.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1262 "bz2module.c"
      case 3: // $bb2
        var $16=$ret; //@line 1262 "bz2module.c"
        var $17=$16+4; //@line 1262 "bz2module.c"
        var $18=HEAP[$17]; //@line 1262 "bz2module.c"
        var $19=$18+24; //@line 1262 "bz2module.c"
        var $20=HEAP[$19]; //@line 1262 "bz2module.c"
        var $21=$ret; //@line 1262 "bz2module.c"
        FUNCTION_TABLE[$20]($21); //@line 1262 "bz2module.c"
        __label__ = 4; break; //@line 1262 "bz2module.c"
      case 4: // $bb3
        var $22=HEAP[__Py_NoneStruct]; //@line 1263 "bz2module.c"
        var $23=($22) + 1; //@line 1263 "bz2module.c"
        HEAP[__Py_NoneStruct]=$23; //@line 1263 "bz2module.c"
        $0=__Py_NoneStruct; //@line 1263 "bz2module.c"
        __label__ = 5; break; //@line 1263 "bz2module.c"
      case 5: // $bb4
        var $24=$0; //@line 1261 "bz2module.c"
        $retval=$24; //@line 1261 "bz2module.c"
        var $retval5=$retval; //@line 1261 "bz2module.c"
        ;
        return $retval5; //@line 1261 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_get_newlines($self, $closure) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $closure_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $closure_addr=$closure;
        var $1=$self_addr; //@line 1292 "bz2module.c"
        var $2=$1+32; //@line 1292 "bz2module.c"
        var $3=HEAP[$2]; //@line 1292 "bz2module.c"
        if ($3 == 0) {
          __label__ = 1; break;
        }
        else if ($3 == 1) {
          __label__ = 2; break;
        }
        else if ($3 == 2) {
          __label__ = 3; break;
        }
        else if ($3 == 3) {
          __label__ = 4; break;
        }
        else if ($3 == 4) {
          __label__ = 5; break;
        }
        else if ($3 == 5) {
          __label__ = 6; break;
        }
        else if ($3 == 6) {
          __label__ = 7; break;
        }
        else if ($3 == 7) {
          __label__ = 8; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 1: // $bb
        var $4=HEAP[__Py_NoneStruct]; //@line 1294 "bz2module.c"
        var $5=($4) + 1; //@line 1294 "bz2module.c"
        HEAP[__Py_NoneStruct]=$5; //@line 1294 "bz2module.c"
        $0=__Py_NoneStruct; //@line 1295 "bz2module.c"
        __label__ = 10; break; //@line 1295 "bz2module.c"
      case 2: // $bb1
        var $6=_PyString_FromString(__str38); //@line 1297 "bz2module.c"
        $0=$6; //@line 1297 "bz2module.c"
        __label__ = 10; break; //@line 1297 "bz2module.c"
      case 3: // $bb2
        var $7=_PyString_FromString(__str39); //@line 1299 "bz2module.c"
        $0=$7; //@line 1299 "bz2module.c"
        __label__ = 10; break; //@line 1299 "bz2module.c"
      case 4: // $bb3
        var $8=_Py_BuildValue(__str40, allocate([__str38,0,0,0,__str39,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1301 "bz2module.c"
        $0=$8; //@line 1301 "bz2module.c"
        __label__ = 10; break; //@line 1301 "bz2module.c"
      case 5: // $bb4
        var $9=_PyString_FromString(__str41); //@line 1303 "bz2module.c"
        $0=$9; //@line 1303 "bz2module.c"
        __label__ = 10; break; //@line 1303 "bz2module.c"
      case 6: // $bb5
        var $10=_Py_BuildValue(__str40, allocate([__str38,0,0,0,__str41,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1305 "bz2module.c"
        $0=$10; //@line 1305 "bz2module.c"
        __label__ = 10; break; //@line 1305 "bz2module.c"
      case 7: // $bb6
        var $11=_Py_BuildValue(__str40, allocate([__str39,0,0,0,__str41,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1307 "bz2module.c"
        $0=$11; //@line 1307 "bz2module.c"
        __label__ = 10; break; //@line 1307 "bz2module.c"
      case 8: // $bb7
        var $12=_Py_BuildValue(__str42, allocate([__str38,0,0,0,__str39,0,0,0,__str41,0,0,0], ["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1309 "bz2module.c"
        $0=$12; //@line 1309 "bz2module.c"
        __label__ = 10; break; //@line 1309 "bz2module.c"
      case 9: // $bb8
        var $13=$self_addr; //@line 1311 "bz2module.c"
        var $14=$13+32; //@line 1311 "bz2module.c"
        var $15=HEAP[$14]; //@line 1311 "bz2module.c"
        var $16=HEAP[_PyExc_SystemError]; //@line 1311 "bz2module.c"
        var $17=_PyErr_Format($16, __str43, allocate([$15,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1311 "bz2module.c"
        $0=0; //@line 1314 "bz2module.c"
        __label__ = 10; break; //@line 1314 "bz2module.c"
      case 10: // $bb9
        var $18=$0; //@line 1295 "bz2module.c"
        $retval=$18; //@line 1295 "bz2module.c"
        var $retval10=$retval; //@line 1295 "bz2module.c"
        ;
        return $retval10; //@line 1295 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_get_closed($self, $closure) {
    ;
    var __label__;
  
    var $self_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $closure_addr=$closure;
    var $1=$self_addr; //@line 1321 "bz2module.c"
    var $2=$1+44; //@line 1321 "bz2module.c"
    var $3=HEAP[$2]; //@line 1321 "bz2module.c"
    var $4=($3)==0; //@line 1321 "bz2module.c"
    var $5=($4); //@line 1321 "bz2module.c"
    var $6=_PyInt_FromLong($5); //@line 1321 "bz2module.c"
    $0=$6; //@line 1321 "bz2module.c"
    var $7=$0; //@line 1321 "bz2module.c"
    $retval=$7; //@line 1321 "bz2module.c"
    var $retval1=$retval; //@line 1321 "bz2module.c"
    ;
    return $retval1; //@line 1321 "bz2module.c"
  }
  

  function _BZ2File_get_mode($self, $closure) {
    ;
    var __label__;
  
    var $self_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $closure_addr=$closure;
    var $1=$self_addr; //@line 1327 "bz2module.c"
    var $2=$1+8; //@line 1327 "bz2module.c"
    var $3=HEAP[$2]; //@line 1327 "bz2module.c"
    var $4=_PyObject_GetAttrString($3, __str44); //@line 1327 "bz2module.c"
    $0=$4; //@line 1327 "bz2module.c"
    var $5=$0; //@line 1327 "bz2module.c"
    $retval=$5; //@line 1327 "bz2module.c"
    var $retval1=$retval; //@line 1327 "bz2module.c"
    ;
    return $retval1; //@line 1327 "bz2module.c"
  }
  

  function _BZ2File_get_name($self, $closure) {
    ;
    var __label__;
  
    var $self_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $closure_addr=$closure;
    var $1=$self_addr; //@line 1333 "bz2module.c"
    var $2=$1+8; //@line 1333 "bz2module.c"
    var $3=HEAP[$2]; //@line 1333 "bz2module.c"
    var $4=_PyObject_GetAttrString($3, __str45); //@line 1333 "bz2module.c"
    $0=$4; //@line 1333 "bz2module.c"
    var $5=$0; //@line 1333 "bz2module.c"
    $retval=$5; //@line 1333 "bz2module.c"
    var $retval1=$retval; //@line 1333 "bz2module.c"
    ;
    return $retval1; //@line 1333 "bz2module.c"
  }
  

  function _BZ2File_init($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $iftmp_181;
        var $iftmp_173;
        var $0;
        var $name=__stackBase__;
        var $mode=__stackBase__+4;
        var $buffering=__stackBase__+8;
        var $compresslevel=__stackBase__+12;
        var $bzerror=__stackBase__+16;
        var $mode_char;
        var $error;
        var $_py_tmp;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        HEAP[$mode]=__str54; //@line 1370 "bz2module.c"
        HEAP[$buffering]=-1; //@line 1371 "bz2module.c"
        HEAP[$compresslevel]=9; //@line 1372 "bz2module.c"
        $mode_char=0; //@line 1374 "bz2module.c"
        var $1=$self_addr; //@line 1376 "bz2module.c"
        var $2=$1+56; //@line 1376 "bz2module.c"
        HEAP[$2]=-1; //@line 1376 "bz2module.c"
        var $3=$args_addr; //@line 1378 "bz2module.c"
        var $4=$kwargs_addr; //@line 1378 "bz2module.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str55, _kwlist_9585, allocate([$name,0,0,0,$mode,0,0,0,$buffering,0,0,0,$compresslevel,0,0,0], ["%struct.PyObject**",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1378 "bz2module.c"
        var $6=($5)==0; //@line 1378 "bz2module.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1378 "bz2module.c"
      case 1: // $bb
        $0=-1; //@line 1381 "bz2module.c"
        __label__ = 32; break; //@line 1381 "bz2module.c"
      case 2: // $bb1
        var $7=HEAP[$compresslevel]; //@line 1383 "bz2module.c"
        var $8=($7) <= 0; //@line 1383 "bz2module.c"
        var $9=HEAP[$compresslevel]; //@line 1383 "bz2module.c"
        var $10=($9) > 9; //@line 1383 "bz2module.c"
        var $or_cond=($8) | ($10);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1383 "bz2module.c"
      case 3: // $bb3
        var $11=HEAP[_PyExc_ValueError]; //@line 1384 "bz2module.c"
        _PyErr_SetString($11, __str59); //@line 1384 "bz2module.c"
        $0=-1; //@line 1386 "bz2module.c"
        __label__ = 32; break; //@line 1386 "bz2module.c"
      case 4: // $bb4
        $error=0; //@line 1390 "bz2module.c"
        var $12=HEAP[$mode]; //@line 1391 "bz2module.c"
        var $13=HEAP[$12]; //@line 1391 "bz2module.c"
        var $14=($13); //@line 1391 "bz2module.c"
        if ($14 == 85) {
          __label__ = 9; break;
        }
        else if ($14 == 98) {
          __label__ = 5; break;
        }
        else if ($14 == 114) {
          __label__ = 6; break;
        }
        else if ($14 == 119) {
          __label__ = 6; break;
        }
        else {
        __label__ = 10; break;
        }
        
      case 5: // $bb11_thread2
        var $15=HEAP[$mode]; //@line 1415 "bz2module.c"
        __lastLabel__ = 5; __label__ = 13; break;
      case 6: // $bb5
        var $16=$mode_char; //@line 1394 "bz2module.c"
        var $17=($16)!=0; //@line 1394 "bz2module.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1394 "bz2module.c"
      case 7: // $bb6
        $error=1; //@line 1395 "bz2module.c"
        __label__ = 8; break; //@line 1395 "bz2module.c"
      case 8: // $bb7
        var $18=HEAP[$mode]; //@line 1396 "bz2module.c"
        var $19=HEAP[$18]; //@line 1396 "bz2module.c"
        var $20=($19); //@line 1396 "bz2module.c"
        $mode_char=$20; //@line 1396 "bz2module.c"
        __label__ = 11; break; //@line 1396 "bz2module.c"
      case 9: // $bb9
        var $21=$self_addr; //@line 1406 "bz2module.c"
        var $22=$21+28; //@line 1406 "bz2module.c"
        HEAP[$22]=1; //@line 1406 "bz2module.c"
        __label__ = 11; break; //@line 1406 "bz2module.c"
      case 10: // $bb11_thread
        $error=1; //@line 1411 "bz2module.c"
        var $23=HEAP[$mode]; //@line 1415 "bz2module.c"
        __lastLabel__ = 10; __label__ = 12; break;
      case 11: // $bb11
        var $_pr=$error;
        var $24=($_pr)!=0; //@line 1414 "bz2module.c"
        var $25=HEAP[$mode]; //@line 1415 "bz2module.c"
        if ($24) { __lastLabel__ = 11; __label__ = 12; break; } else { __lastLabel__ = 11; __label__ = 13; break; } //@line 1414 "bz2module.c"
      case 12: // $bb12
        var $26=__lastLabel__ == 10 ? $23 : ($25);
        var $27=HEAP[$26]; //@line 1415 "bz2module.c"
        var $28=($27); //@line 1415 "bz2module.c"
        var $29=HEAP[_PyExc_ValueError]; //@line 1415 "bz2module.c"
        var $30=_PyErr_Format($29, __str60, allocate([$28,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1415 "bz2module.c"
        $0=-1; //@line 1417 "bz2module.c"
        __label__ = 32; break; //@line 1417 "bz2module.c"
      case 13: // $bb13
        var $31=__lastLabel__ == 5 ? $15 : ($25);
        var $32=$31+1; //@line 1419 "bz2module.c"
        HEAP[$mode]=$32; //@line 1419 "bz2module.c"
        var $33=HEAP[$mode]; //@line 1420 "bz2module.c"
        var $34=HEAP[$33]; //@line 1420 "bz2module.c"
        var $35=($34)==0; //@line 1420 "bz2module.c"
        if ($35) { __label__ = 14; break; } else { __label__ = 4; break; } //@line 1420 "bz2module.c"
      case 14: // $bb15
        var $36=$mode_char; //@line 1424 "bz2module.c"
        if ($36 == 0) {
          __label__ = 15; break;
        }
        else if ($36 == 114) {
          __label__ = 16; break;
        }
        else {
        __label__ = 17; break;
        }
        
      case 15: // $bb17_thread
        $mode_char=114; //@line 1425 "bz2module.c"
        __label__ = 16; break;
      case 16: // $bb18
        $iftmp_173=__str61; //@line 1428 "bz2module.c"
        __label__ = 18; break; //@line 1428 "bz2module.c"
      case 17: // $bb19
        $iftmp_173=__str62; //@line 1428 "bz2module.c"
        __label__ = 18; break; //@line 1428 "bz2module.c"
      case 18: // $bb20
        var $37=$iftmp_173; //@line 1428 "bz2module.c"
        HEAP[$mode]=$37; //@line 1428 "bz2module.c"
        var $38=HEAP[$buffering]; //@line 1430 "bz2module.c"
        var $39=HEAP[$mode]; //@line 1430 "bz2module.c"
        var $40=HEAP[$name]; //@line 1430 "bz2module.c"
        var $41=_PyObject_CallFunction(_PyFile_Type, __str63, allocate([$40,0,0,0,$39,0,0,0,$38,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1430 "bz2module.c"
        var $42=$self_addr; //@line 1430 "bz2module.c"
        var $43=$42+8; //@line 1430 "bz2module.c"
        HEAP[$43]=$41; //@line 1430 "bz2module.c"
        var $44=$self_addr; //@line 1432 "bz2module.c"
        var $45=$44+8; //@line 1432 "bz2module.c"
        var $46=HEAP[$45]; //@line 1432 "bz2module.c"
        var $47=($46)==0; //@line 1432 "bz2module.c"
        if ($47) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1432 "bz2module.c"
      case 19: // $bb21
        $0=-1; //@line 1433 "bz2module.c"
        __label__ = 32; break; //@line 1433 "bz2module.c"
      case 20: // $bb22
        var $48=$mode_char; //@line 1446 "bz2module.c"
        var $49=($48)==114; //@line 1446 "bz2module.c"
        if ($49) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1446 "bz2module.c"
      case 21: // $bb23
        var $50=$self_addr; //@line 1447 "bz2module.c"
        var $51=$50+8; //@line 1447 "bz2module.c"
        var $52=HEAP[$51]; //@line 1447 "bz2module.c"
        var $53=_PyFile_AsFile($52); //@line 1447 "bz2module.c"
        var $54=_BZ2_bzReadOpen($bzerror, $53, 0, 0, 0, 0); //@line 1447 "bz2module.c"
        var $55=$self_addr; //@line 1447 "bz2module.c"
        var $56=$55+40; //@line 1447 "bz2module.c"
        HEAP[$56]=$54; //@line 1447 "bz2module.c"
        __label__ = 23; break; //@line 1447 "bz2module.c"
      case 22: // $bb24
        var $57=HEAP[$compresslevel]; //@line 1451 "bz2module.c"
        var $58=$self_addr; //@line 1451 "bz2module.c"
        var $59=$58+8; //@line 1451 "bz2module.c"
        var $60=HEAP[$59]; //@line 1451 "bz2module.c"
        var $61=_PyFile_AsFile($60); //@line 1451 "bz2module.c"
        var $62=_BZ2_bzWriteOpen($bzerror, $61, $57, 0, 0); //@line 1451 "bz2module.c"
        var $63=$self_addr; //@line 1451 "bz2module.c"
        var $64=$63+40; //@line 1451 "bz2module.c"
        HEAP[$64]=$62; //@line 1451 "bz2module.c"
        __label__ = 23; break; //@line 1451 "bz2module.c"
      case 23: // $bb25
        var $65=HEAP[$bzerror]; //@line 1455 "bz2module.c"
        var $66=($65)!=0; //@line 1455 "bz2module.c"
        if ($66) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1455 "bz2module.c"
      case 24: // $bb26
        var $67=HEAP[$bzerror]; //@line 1456 "bz2module.c"
        _Util_CatchBZ2Error($67); //@line 1456 "bz2module.c"
        var $68=$self_addr; //@line 1466 "bz2module.c"
        var $69=$68+8; //@line 1466 "bz2module.c"
        var $70=HEAP[$69]; //@line 1466 "bz2module.c"
        var $71=($70)!=0; //@line 1466 "bz2module.c"
        if ($71) { __label__ = 29; break; } else { __label__ = 31; break; } //@line 1466 "bz2module.c"
      case 25: // $bb27
        var $72=$self_addr; //@line 1459 "bz2module.c"
        var $73=$72+8; //@line 1459 "bz2module.c"
        var $74=HEAP[$73]; //@line 1459 "bz2module.c"
        var $75=$74; //@line 1459 "bz2module.c"
        _PyFile_IncUseCount($75); //@line 1459 "bz2module.c"
        var $76=$mode_char; //@line 1461 "bz2module.c"
        var $77=($76)==114; //@line 1461 "bz2module.c"
        if ($77) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1461 "bz2module.c"
      case 26: // $bb28
        $iftmp_181=1; //@line 1461 "bz2module.c"
        __label__ = 28; break; //@line 1461 "bz2module.c"
      case 27: // $bb29
        $iftmp_181=3; //@line 1461 "bz2module.c"
        __label__ = 28; break; //@line 1461 "bz2module.c"
      case 28: // $bb30
        var $78=$self_addr; //@line 1461 "bz2module.c"
        var $79=$78+44; //@line 1461 "bz2module.c"
        var $80=$iftmp_181; //@line 1461 "bz2module.c"
        HEAP[$79]=$80; //@line 1461 "bz2module.c"
        $0=0; //@line 1463 "bz2module.c"
        __label__ = 32; break; //@line 1463 "bz2module.c"
      case 29: // $bb32
        var $81=$self_addr; //@line 1466 "bz2module.c"
        var $82=$81+8; //@line 1466 "bz2module.c"
        var $83=HEAP[$82]; //@line 1466 "bz2module.c"
        $_py_tmp=$83; //@line 1466 "bz2module.c"
        var $84=$self_addr; //@line 1466 "bz2module.c"
        var $85=$84+8; //@line 1466 "bz2module.c"
        HEAP[$85]=0; //@line 1466 "bz2module.c"
        var $86=$_py_tmp; //@line 1466 "bz2module.c"
        var $87=$86; //@line 1466 "bz2module.c"
        var $88=HEAP[$87]; //@line 1466 "bz2module.c"
        var $89=($88) - 1; //@line 1466 "bz2module.c"
        var $90=$_py_tmp; //@line 1466 "bz2module.c"
        var $91=$90; //@line 1466 "bz2module.c"
        HEAP[$91]=$89; //@line 1466 "bz2module.c"
        var $92=$_py_tmp; //@line 1466 "bz2module.c"
        var $93=$92; //@line 1466 "bz2module.c"
        var $94=HEAP[$93]; //@line 1466 "bz2module.c"
        var $95=($94)==0; //@line 1466 "bz2module.c"
        if ($95) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1466 "bz2module.c"
      case 30: // $bb33
        var $96=$_py_tmp; //@line 1466 "bz2module.c"
        var $97=$96+4; //@line 1466 "bz2module.c"
        var $98=HEAP[$97]; //@line 1466 "bz2module.c"
        var $99=$98+24; //@line 1466 "bz2module.c"
        var $100=HEAP[$99]; //@line 1466 "bz2module.c"
        var $101=$_py_tmp; //@line 1466 "bz2module.c"
        FUNCTION_TABLE[$100]($101); //@line 1466 "bz2module.c"
        __label__ = 31; break; //@line 1466 "bz2module.c"
      case 31: // $bb34
        $0=-1; //@line 1473 "bz2module.c"
        __label__ = 32; break; //@line 1473 "bz2module.c"
      case 32: // $bb35
        var $102=$0; //@line 1381 "bz2module.c"
        $retval=$102; //@line 1381 "bz2module.c"
        var $retval36=$retval; //@line 1381 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval36; //@line 1381 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_dealloc($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $bzerror=__stackBase__;
        $self_addr=$self;
        var $0=$self_addr; //@line 1484 "bz2module.c"
        var $1=$0+44; //@line 1484 "bz2module.c"
        var $2=HEAP[$1]; //@line 1484 "bz2module.c"
        if ($2 == 1) {
          __label__ = 1; break;
        }
        else if ($2 == 2) {
          __label__ = 1; break;
        }
        else if ($2 == 3) {
          __label__ = 2; break;
        }
        else {
        __label__ = 3; break;
        }
        
      case 1: // $bb
        var $3=$self_addr; //@line 1487 "bz2module.c"
        var $4=$3+40; //@line 1487 "bz2module.c"
        var $5=HEAP[$4]; //@line 1487 "bz2module.c"
        _BZ2_bzReadClose($bzerror, $5); //@line 1487 "bz2module.c"
        __label__ = 3; break; //@line 1487 "bz2module.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 1490 "bz2module.c"
        var $7=$6+40; //@line 1490 "bz2module.c"
        var $8=HEAP[$7]; //@line 1490 "bz2module.c"
        _BZ2_bzWriteClose($bzerror, $8, 0, 0, 0); //@line 1490 "bz2module.c"
        __label__ = 3; break; //@line 1490 "bz2module.c"
      case 3: // $bb2
        var $9=$self_addr; //@line 1494 "bz2module.c"
        var $10=$9+40; //@line 1494 "bz2module.c"
        var $11=HEAP[$10]; //@line 1494 "bz2module.c"
        var $12=($11)!=0; //@line 1494 "bz2module.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1494 "bz2module.c"
      case 4: // $bb3
        var $13=$self_addr; //@line 1495 "bz2module.c"
        var $14=$13+8; //@line 1495 "bz2module.c"
        var $15=HEAP[$14]; //@line 1495 "bz2module.c"
        var $16=$15; //@line 1495 "bz2module.c"
        _PyFile_DecUseCount($16); //@line 1495 "bz2module.c"
        var $17=$self_addr; //@line 1496 "bz2module.c"
        var $18=$17+40; //@line 1496 "bz2module.c"
        HEAP[$18]=0; //@line 1496 "bz2module.c"
        __label__ = 5; break; //@line 1496 "bz2module.c"
      case 5: // $bb4
        var $19=$self_addr; //@line 1498 "bz2module.c"
        _Util_DropReadAhead($19); //@line 1498 "bz2module.c"
        var $20=$self_addr; //@line 1499 "bz2module.c"
        var $21=$20+8; //@line 1499 "bz2module.c"
        var $22=HEAP[$21]; //@line 1499 "bz2module.c"
        var $23=($22)!=0; //@line 1499 "bz2module.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1499 "bz2module.c"
      case 6: // $bb5
        var $24=$self_addr; //@line 1499 "bz2module.c"
        var $25=$24+8; //@line 1499 "bz2module.c"
        var $26=HEAP[$25]; //@line 1499 "bz2module.c"
        var $27=$26; //@line 1499 "bz2module.c"
        var $28=HEAP[$27]; //@line 1499 "bz2module.c"
        var $29=($28) - 1; //@line 1499 "bz2module.c"
        var $30=$26; //@line 1499 "bz2module.c"
        HEAP[$30]=$29; //@line 1499 "bz2module.c"
        var $31=$26; //@line 1499 "bz2module.c"
        var $32=HEAP[$31]; //@line 1499 "bz2module.c"
        var $33=($32)==0; //@line 1499 "bz2module.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1499 "bz2module.c"
      case 7: // $bb6
        var $34=$self_addr; //@line 1499 "bz2module.c"
        var $35=$34+8; //@line 1499 "bz2module.c"
        var $36=HEAP[$35]; //@line 1499 "bz2module.c"
        var $37=$36+4; //@line 1499 "bz2module.c"
        var $38=HEAP[$37]; //@line 1499 "bz2module.c"
        var $39=$38+24; //@line 1499 "bz2module.c"
        var $40=HEAP[$39]; //@line 1499 "bz2module.c"
        var $41=$self_addr; //@line 1499 "bz2module.c"
        var $42=$41+8; //@line 1499 "bz2module.c"
        var $43=HEAP[$42]; //@line 1499 "bz2module.c"
        FUNCTION_TABLE[$40]($43); //@line 1499 "bz2module.c"
        __label__ = 8; break; //@line 1499 "bz2module.c"
      case 8: // $bb7
        var $44=$self_addr; //@line 1500 "bz2module.c"
        var $45=$44; //@line 1500 "bz2module.c"
        var $46=$45+4; //@line 1500 "bz2module.c"
        var $47=HEAP[$46]; //@line 1500 "bz2module.c"
        var $48=$47+160; //@line 1500 "bz2module.c"
        var $49=HEAP[$48]; //@line 1500 "bz2module.c"
        var $50=$self_addr; //@line 1500 "bz2module.c"
        var $51=$50; //@line 1500 "bz2module.c"
        FUNCTION_TABLE[$49]($51); //@line 1500 "bz2module.c"
        STACKTOP = __stackBase__;
        return; //@line 1501 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_getiter($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 1507 "bz2module.c"
        var $2=$1+44; //@line 1507 "bz2module.c"
        var $3=HEAP[$2]; //@line 1507 "bz2module.c"
        var $4=($3)==0; //@line 1507 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1507 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 1508 "bz2module.c"
        _PyErr_SetString($5, __str14); //@line 1508 "bz2module.c"
        $0=0; //@line 1510 "bz2module.c"
        __label__ = 3; break; //@line 1510 "bz2module.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 1512 "bz2module.c"
        var $7=$6; //@line 1512 "bz2module.c"
        var $8=$7; //@line 1512 "bz2module.c"
        var $9=HEAP[$8]; //@line 1512 "bz2module.c"
        var $10=($9) + 1; //@line 1512 "bz2module.c"
        var $11=$7; //@line 1512 "bz2module.c"
        HEAP[$11]=$10; //@line 1512 "bz2module.c"
        var $12=$self_addr; //@line 1513 "bz2module.c"
        var $13=$12; //@line 1513 "bz2module.c"
        $0=$13; //@line 1513 "bz2module.c"
        __label__ = 3; break; //@line 1513 "bz2module.c"
      case 3: // $bb2
        var $14=$0; //@line 1510 "bz2module.c"
        $retval=$14; //@line 1510 "bz2module.c"
        var $retval3=$retval; //@line 1510 "bz2module.c"
        ;
        return $retval3; //@line 1510 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2File_iternext($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $ret;
        $self_addr=$self;
        var $1=$self_addr; //@line 1523 "bz2module.c"
        var $2=$1+44; //@line 1523 "bz2module.c"
        var $3=HEAP[$2]; //@line 1523 "bz2module.c"
        var $4=($3)==0; //@line 1523 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1523 "bz2module.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_ValueError]; //@line 1525 "bz2module.c"
        _PyErr_SetString($5, __str14); //@line 1525 "bz2module.c"
        $0=0; //@line 1527 "bz2module.c"
        __label__ = 9; break; //@line 1527 "bz2module.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 1529 "bz2module.c"
        var $7=_Util_ReadAheadGetLineSkip($6, 0, 8192); //@line 1529 "bz2module.c"
        $ret=$7; //@line 1529 "bz2module.c"
        var $8=$ret; //@line 1531 "bz2module.c"
        var $9=($8)==0; //@line 1531 "bz2module.c"
        if ($9) { __label__ = 7; break; } else { __label__ = 3; break; } //@line 1531 "bz2module.c"
      case 3: // $bb2
        var $10=$ret; //@line 1531 "bz2module.c"
        var $11=$10; //@line 1531 "bz2module.c"
        var $12=$11+8; //@line 1531 "bz2module.c"
        var $13=HEAP[$12]; //@line 1531 "bz2module.c"
        var $14=($13)==0; //@line 1531 "bz2module.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 1531 "bz2module.c"
      case 4: // $bb3
        var $15=($10)!=0; //@line 1532 "bz2module.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1532 "bz2module.c"
      case 5: // $bb4
        var $16=$ret; //@line 1532 "bz2module.c"
        var $17=$16; //@line 1532 "bz2module.c"
        var $18=$17; //@line 1532 "bz2module.c"
        var $19=HEAP[$18]; //@line 1532 "bz2module.c"
        var $20=($19) - 1; //@line 1532 "bz2module.c"
        var $21=$17; //@line 1532 "bz2module.c"
        HEAP[$21]=$20; //@line 1532 "bz2module.c"
        var $22=$17; //@line 1532 "bz2module.c"
        var $23=HEAP[$22]; //@line 1532 "bz2module.c"
        var $24=($23)==0; //@line 1532 "bz2module.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1532 "bz2module.c"
      case 6: // $bb5
        var $25=$ret; //@line 1532 "bz2module.c"
        var $26=$25; //@line 1532 "bz2module.c"
        var $27=$26+4; //@line 1532 "bz2module.c"
        var $28=HEAP[$27]; //@line 1532 "bz2module.c"
        var $29=$28+24; //@line 1532 "bz2module.c"
        var $30=HEAP[$29]; //@line 1532 "bz2module.c"
        var $31=$ret; //@line 1532 "bz2module.c"
        var $32=$31; //@line 1532 "bz2module.c"
        FUNCTION_TABLE[$30]($32); //@line 1532 "bz2module.c"
        __label__ = 7; break; //@line 1532 "bz2module.c"
      case 7: // $bb6
        $0=0; //@line 1533 "bz2module.c"
        __label__ = 9; break; //@line 1533 "bz2module.c"
      case 8: // $bb7
        var $33=$ret; //@line 1535 "bz2module.c"
        var $34=$33; //@line 1535 "bz2module.c"
        $0=$34; //@line 1535 "bz2module.c"
        __label__ = 9; break; //@line 1535 "bz2module.c"
      case 9: // $bb8
        var $35=$0; //@line 1527 "bz2module.c"
        $retval=$35; //@line 1527 "bz2module.c"
        var $retval9=$retval; //@line 1527 "bz2module.c"
        ;
        return $retval9; //@line 1527 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Comp_compress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pdata=__stackBase__;
        var $data;
        var $datasize;
        var $bufsize;
        var $totalout;
        var $ret=__stackBase__+52;
        var $bzs;
        var $bzerror;
        $self_addr=$self;
        $args_addr=$args;
        $bufsize=8192; //@line 1624 "bz2module.c"
        HEAP[$ret]=0; //@line 1626 "bz2module.c"
        var $1=$self_addr; //@line 1627 "bz2module.c"
        var $2=$1+8; //@line 1627 "bz2module.c"
        $bzs=$2; //@line 1627 "bz2module.c"
        var $3=$args_addr; //@line 1630 "bz2module.c"
        var $4=_PyArg_ParseTuple($3, __str65, allocate([$pdata,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 1630 "bz2module.c"
        var $5=($4)==0; //@line 1630 "bz2module.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1630 "bz2module.c"
      case 1: // $bb
        $0=0; //@line 1631 "bz2module.c"
        __label__ = 20; break; //@line 1631 "bz2module.c"
      case 2: // $bb1
        var $6=$pdata; //@line 1632 "bz2module.c"
        var $7=HEAP[$6]; //@line 1632 "bz2module.c"
        $data=$7; //@line 1632 "bz2module.c"
        var $8=$pdata+8; //@line 1633 "bz2module.c"
        var $9=HEAP[$8]; //@line 1633 "bz2module.c"
        $datasize=$9; //@line 1633 "bz2module.c"
        var $10=$datasize; //@line 1635 "bz2module.c"
        var $11=($10)==0; //@line 1635 "bz2module.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1635 "bz2module.c"
      case 3: // $bb2
        _PyBuffer_Release($pdata); //@line 1636 "bz2module.c"
        var $12=_PyString_FromString(__str13); //@line 1637 "bz2module.c"
        $0=$12; //@line 1637 "bz2module.c"
        __label__ = 20; break; //@line 1637 "bz2module.c"
      case 4: // $bb3
        var $13=$self_addr; //@line 1641 "bz2module.c"
        var $14=$13+56; //@line 1641 "bz2module.c"
        var $15=HEAP[$14]; //@line 1641 "bz2module.c"
        var $16=($15)==0; //@line 1641 "bz2module.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1641 "bz2module.c"
      case 5: // $bb4
        var $17=HEAP[_PyExc_ValueError]; //@line 1642 "bz2module.c"
        _PyErr_SetString($17, __str66); //@line 1642 "bz2module.c"
        __label__ = 16; break; //@line 1642 "bz2module.c"
      case 6: // $bb5
        var $18=$bufsize; //@line 1647 "bz2module.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 1647 "bz2module.c"
        HEAP[$ret]=$19; //@line 1647 "bz2module.c"
        var $20=HEAP[$ret]; //@line 1648 "bz2module.c"
        var $21=($20)==0; //@line 1648 "bz2module.c"
        if ($21) { __label__ = 16; break; } else { __label__ = 7; break; } //@line 1648 "bz2module.c"
      case 7: // $bb6
        var $22=$bzs; //@line 1651 "bz2module.c"
        var $23=$22; //@line 1651 "bz2module.c"
        var $24=$data; //@line 1651 "bz2module.c"
        HEAP[$23]=$24; //@line 1651 "bz2module.c"
        var $25=$datasize; //@line 1652 "bz2module.c"
        var $26=$bzs; //@line 1652 "bz2module.c"
        var $27=$26+4; //@line 1652 "bz2module.c"
        HEAP[$27]=$25; //@line 1652 "bz2module.c"
        var $28=HEAP[$ret]; //@line 1653 "bz2module.c"
        var $29=$28; //@line 1653 "bz2module.c"
        var $30=$29+20; //@line 1653 "bz2module.c"
        var $31=$30; //@line 1653 "bz2module.c"
        var $32=$bzs; //@line 1653 "bz2module.c"
        var $33=$32+16; //@line 1653 "bz2module.c"
        HEAP[$33]=$31; //@line 1653 "bz2module.c"
        var $34=$bufsize; //@line 1654 "bz2module.c"
        var $35=$bzs; //@line 1654 "bz2module.c"
        var $36=$35+20; //@line 1654 "bz2module.c"
        HEAP[$36]=$34; //@line 1654 "bz2module.c"
        var $37=$bzs; //@line 1656 "bz2module.c"
        var $38=$37+28; //@line 1656 "bz2module.c"
        var $39=HEAP[$38]; //@line 1656 "bz2module.c"
        var $40=($39); //@line 1656 "bz2module.c"
        var $41=($40) * 4294967296;
        var $42=$bzs; //@line 1656 "bz2module.c"
        var $43=$42+24; //@line 1656 "bz2module.c"
        var $44=HEAP[$43]; //@line 1656 "bz2module.c"
        var $45=($44); //@line 1656 "bz2module.c"
        var $46=($45) + ($41); //@line 1656 "bz2module.c"
        $totalout=$46; //@line 1656 "bz2module.c"
        __label__ = 8; break; //@line 1656 "bz2module.c"
      case 8: // $bb7
        var $47=$bzs; //@line 1660 "bz2module.c"
        var $48=_BZ2_bzCompress($47, 0); //@line 1660 "bz2module.c"
        $bzerror=$48; //@line 1660 "bz2module.c"
        var $49=($48)!=1; //@line 1662 "bz2module.c"
        if ($49) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1662 "bz2module.c"
      case 9: // $bb8
        var $50=$bzerror; //@line 1663 "bz2module.c"
        _Util_CatchBZ2Error($50); //@line 1663 "bz2module.c"
        __label__ = 16; break; //@line 1663 "bz2module.c"
      case 10: // $bb9
        var $51=$bzs; //@line 1666 "bz2module.c"
        var $52=$51+4; //@line 1666 "bz2module.c"
        var $53=HEAP[$52]; //@line 1666 "bz2module.c"
        var $54=($53)==0; //@line 1666 "bz2module.c"
        var $55=$bzs; //@line 1680 "bz2module.c"
        if ($54) { __label__ = 15; break; } else { __label__ = 11; break; } //@line 1666 "bz2module.c"
      case 11: // $bb10
        var $56=$55+20; //@line 1668 "bz2module.c"
        var $57=HEAP[$56]; //@line 1668 "bz2module.c"
        var $58=($57)==0; //@line 1668 "bz2module.c"
        if ($58) { __label__ = 12; break; } else { __label__ = 8; break; } //@line 1668 "bz2module.c"
      case 12: // $bb11
        var $59=$bufsize; //@line 1669 "bz2module.c"
        var $60=_Util_NewBufferSize($59); //@line 1669 "bz2module.c"
        $bufsize=$60; //@line 1669 "bz2module.c"
        var $61=$bufsize; //@line 1670 "bz2module.c"
        var $62=__PyString_Resize($ret, $61); //@line 1670 "bz2module.c"
        var $63=($62) < 0; //@line 1670 "bz2module.c"
        if ($63) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1670 "bz2module.c"
      case 13: // $bb12
        var $64=$bzs; //@line 1671 "bz2module.c"
        var $65=_BZ2_bzCompressEnd($64); //@line 1671 "bz2module.c"
        __label__ = 16; break; //@line 1671 "bz2module.c"
      case 14: // $bb13
        var $66=HEAP[$ret]; //@line 1674 "bz2module.c"
        var $67=$66; //@line 1674 "bz2module.c"
        var $68=$67+20; //@line 1674 "bz2module.c"
        var $69=$68; //@line 1674 "bz2module.c"
        var $70=$bzs; //@line 1674 "bz2module.c"
        var $71=$70+28; //@line 1674 "bz2module.c"
        var $72=HEAP[$71]; //@line 1674 "bz2module.c"
        var $73=($72); //@line 1674 "bz2module.c"
        var $74=($73) * 4294967296;
        var $75=$bzs; //@line 1674 "bz2module.c"
        var $76=$75+24; //@line 1674 "bz2module.c"
        var $77=HEAP[$76]; //@line 1674 "bz2module.c"
        var $78=($77); //@line 1674 "bz2module.c"
        var $79=$totalout; //@line 1674 "bz2module.c"
        var $_neg=0 - ($79);
        var $80=($_neg) + ($74); //@line 1674 "bz2module.c"
        var $81=($80) + ($78);
        var $82=((($81)) & 4294967295); //@line 1674 "bz2module.c"
        var $83=$69+$82; //@line 1674 "bz2module.c"
        var $84=$bzs; //@line 1674 "bz2module.c"
        var $85=$84+16; //@line 1674 "bz2module.c"
        HEAP[$85]=$83; //@line 1674 "bz2module.c"
        var $86=$bzs; //@line 1676 "bz2module.c"
        var $87=$86+16; //@line 1676 "bz2module.c"
        var $88=HEAP[$87]; //@line 1676 "bz2module.c"
        var $89=($88); //@line 1676 "bz2module.c"
        var $90=HEAP[$ret]; //@line 1676 "bz2module.c"
        var $91=$90; //@line 1676 "bz2module.c"
        var $92=$91+20; //@line 1676 "bz2module.c"
        var $93=($92); //@line 1676 "bz2module.c"
        var $_neg1=0 - ($93);
        var $94=$bufsize; //@line 1676 "bz2module.c"
        var $_neg2=0 - ($89);
        var $_neg1_neg=0 - ($_neg1);
        var $_neg3=($94) + ($_neg2);
        var $95=($_neg3) + ($_neg1_neg);
        var $96=$bzs; //@line 1676 "bz2module.c"
        var $97=$96+20; //@line 1676 "bz2module.c"
        HEAP[$97]=$95; //@line 1676 "bz2module.c"
        __label__ = 8; break; //@line 1676 "bz2module.c"
      case 15: // $bb15
        var $98=$55+24; //@line 1680 "bz2module.c"
        var $99=HEAP[$98]; //@line 1680 "bz2module.c"
        var $100=$totalout; //@line 1680 "bz2module.c"
        var $101=((($100)) & 4294967295); //@line 1680 "bz2module.c"
        var $102=($99) - ($101); //@line 1680 "bz2module.c"
        var $103=__PyString_Resize($ret, $102); //@line 1680 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 1683 "bz2module.c"
        var $104=HEAP[$ret]; //@line 1684 "bz2module.c"
        $0=$104; //@line 1684 "bz2module.c"
        __label__ = 20; break; //@line 1684 "bz2module.c"
      case 16: // $error
        _PyBuffer_Release($pdata); //@line 1688 "bz2module.c"
        var $105=HEAP[$ret]; //@line 1689 "bz2module.c"
        var $106=($105)!=0; //@line 1689 "bz2module.c"
        if ($106) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 1689 "bz2module.c"
      case 17: // $bb16
        var $107=HEAP[$ret]; //@line 1689 "bz2module.c"
        var $108=$107; //@line 1689 "bz2module.c"
        var $109=HEAP[$108]; //@line 1689 "bz2module.c"
        var $110=($109) - 1; //@line 1689 "bz2module.c"
        var $111=$107; //@line 1689 "bz2module.c"
        HEAP[$111]=$110; //@line 1689 "bz2module.c"
        var $112=$107; //@line 1689 "bz2module.c"
        var $113=HEAP[$112]; //@line 1689 "bz2module.c"
        var $114=($113)==0; //@line 1689 "bz2module.c"
        if ($114) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1689 "bz2module.c"
      case 18: // $bb17
        var $115=HEAP[$ret]; //@line 1689 "bz2module.c"
        var $116=$115+4; //@line 1689 "bz2module.c"
        var $117=HEAP[$116]; //@line 1689 "bz2module.c"
        var $118=$117+24; //@line 1689 "bz2module.c"
        var $119=HEAP[$118]; //@line 1689 "bz2module.c"
        var $120=HEAP[$ret]; //@line 1689 "bz2module.c"
        FUNCTION_TABLE[$119]($120); //@line 1689 "bz2module.c"
        __label__ = 19; break; //@line 1689 "bz2module.c"
      case 19: // $bb18
        $0=0; //@line 1690 "bz2module.c"
        __label__ = 20; break; //@line 1690 "bz2module.c"
      case 20: // $bb19
        var $121=$0; //@line 1631 "bz2module.c"
        $retval=$121; //@line 1631 "bz2module.c"
        var $retval20=$retval; //@line 1631 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 1631 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Comp_flush($self) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $bufsize;
        var $ret=__stackBase__;
        var $bzs;
        var $totalout;
        var $bzerror;
        $self_addr=$self;
        $bufsize=8192; //@line 1703 "bz2module.c"
        HEAP[$ret]=0; //@line 1704 "bz2module.c"
        var $1=$self_addr; //@line 1705 "bz2module.c"
        var $2=$1+8; //@line 1705 "bz2module.c"
        $bzs=$2; //@line 1705 "bz2module.c"
        var $3=$self_addr; //@line 1710 "bz2module.c"
        var $4=$3+56; //@line 1710 "bz2module.c"
        var $5=HEAP[$4]; //@line 1710 "bz2module.c"
        var $6=($5)==0; //@line 1710 "bz2module.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1710 "bz2module.c"
      case 1: // $bb
        var $7=HEAP[_PyExc_ValueError]; //@line 1711 "bz2module.c"
        _PyErr_SetString($7, __str67); //@line 1711 "bz2module.c"
        __label__ = 13; break; //@line 1711 "bz2module.c"
      case 2: // $bb1
        var $8=$self_addr; //@line 1715 "bz2module.c"
        var $9=$8+56; //@line 1715 "bz2module.c"
        HEAP[$9]=0; //@line 1715 "bz2module.c"
        var $10=$bufsize; //@line 1717 "bz2module.c"
        var $11=_PyString_FromStringAndSize(0, $10); //@line 1717 "bz2module.c"
        HEAP[$ret]=$11; //@line 1717 "bz2module.c"
        var $12=HEAP[$ret]; //@line 1718 "bz2module.c"
        var $13=($12)==0; //@line 1718 "bz2module.c"
        if ($13) { __label__ = 16; break; } else { __label__ = 3; break; } //@line 1718 "bz2module.c"
      case 3: // $bb2
        var $14=HEAP[$ret]; //@line 1721 "bz2module.c"
        var $15=$14; //@line 1721 "bz2module.c"
        var $16=$15+20; //@line 1721 "bz2module.c"
        var $17=$16; //@line 1721 "bz2module.c"
        var $18=$bzs; //@line 1721 "bz2module.c"
        var $19=$18+16; //@line 1721 "bz2module.c"
        HEAP[$19]=$17; //@line 1721 "bz2module.c"
        var $20=$bufsize; //@line 1722 "bz2module.c"
        var $21=$bzs; //@line 1722 "bz2module.c"
        var $22=$21+20; //@line 1722 "bz2module.c"
        HEAP[$22]=$20; //@line 1722 "bz2module.c"
        var $23=$bzs; //@line 1724 "bz2module.c"
        var $24=$23+28; //@line 1724 "bz2module.c"
        var $25=HEAP[$24]; //@line 1724 "bz2module.c"
        var $26=($25); //@line 1724 "bz2module.c"
        var $27=($26) * 4294967296;
        var $28=$bzs; //@line 1724 "bz2module.c"
        var $29=$28+24; //@line 1724 "bz2module.c"
        var $30=HEAP[$29]; //@line 1724 "bz2module.c"
        var $31=($30); //@line 1724 "bz2module.c"
        var $32=($31) + ($27); //@line 1724 "bz2module.c"
        $totalout=$32; //@line 1724 "bz2module.c"
        __label__ = 4; break; //@line 1724 "bz2module.c"
      case 4: // $bb3
        var $33=$bzs; //@line 1728 "bz2module.c"
        var $34=_BZ2_bzCompress($33, 2); //@line 1728 "bz2module.c"
        $bzerror=$34; //@line 1728 "bz2module.c"
        var $35=($34)==4; //@line 1730 "bz2module.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 5; break; } //@line 1730 "bz2module.c"
      case 5: // $bb4
        var $36=$bzerror; //@line 1732 "bz2module.c"
        var $37=($36)!=3; //@line 1732 "bz2module.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1732 "bz2module.c"
      case 6: // $bb5
        var $38=$bzerror; //@line 1733 "bz2module.c"
        _Util_CatchBZ2Error($38); //@line 1733 "bz2module.c"
        __label__ = 13; break; //@line 1733 "bz2module.c"
      case 7: // $bb6
        var $39=$bzs; //@line 1736 "bz2module.c"
        var $40=$39+20; //@line 1736 "bz2module.c"
        var $41=HEAP[$40]; //@line 1736 "bz2module.c"
        var $42=($41)==0; //@line 1736 "bz2module.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 1736 "bz2module.c"
      case 8: // $bb7
        var $43=$bufsize; //@line 1737 "bz2module.c"
        var $44=_Util_NewBufferSize($43); //@line 1737 "bz2module.c"
        $bufsize=$44; //@line 1737 "bz2module.c"
        var $45=$bufsize; //@line 1738 "bz2module.c"
        var $46=__PyString_Resize($ret, $45); //@line 1738 "bz2module.c"
        var $47=($46) < 0; //@line 1738 "bz2module.c"
        if ($47) { __label__ = 13; break; } else { __label__ = 9; break; } //@line 1738 "bz2module.c"
      case 9: // $bb8
        var $48=HEAP[$ret]; //@line 1740 "bz2module.c"
        var $49=$48; //@line 1740 "bz2module.c"
        var $50=$49+20; //@line 1740 "bz2module.c"
        var $51=$50; //@line 1740 "bz2module.c"
        var $52=$bzs; //@line 1740 "bz2module.c"
        var $53=$52+16; //@line 1740 "bz2module.c"
        HEAP[$53]=$51; //@line 1740 "bz2module.c"
        var $54=HEAP[$ret]; //@line 1741 "bz2module.c"
        var $55=$54; //@line 1741 "bz2module.c"
        var $56=$55+20; //@line 1741 "bz2module.c"
        var $57=$56; //@line 1741 "bz2module.c"
        var $58=$bzs; //@line 1741 "bz2module.c"
        var $59=$58+28; //@line 1741 "bz2module.c"
        var $60=HEAP[$59]; //@line 1741 "bz2module.c"
        var $61=($60); //@line 1741 "bz2module.c"
        var $62=($61) * 4294967296;
        var $63=$bzs; //@line 1741 "bz2module.c"
        var $64=$63+24; //@line 1741 "bz2module.c"
        var $65=HEAP[$64]; //@line 1741 "bz2module.c"
        var $66=($65); //@line 1741 "bz2module.c"
        var $67=$totalout; //@line 1741 "bz2module.c"
        var $_neg=0 - ($67);
        var $68=($_neg) + ($62); //@line 1741 "bz2module.c"
        var $69=($68) + ($66);
        var $70=((($69)) & 4294967295); //@line 1741 "bz2module.c"
        var $71=$57+$70; //@line 1741 "bz2module.c"
        var $72=$bzs; //@line 1741 "bz2module.c"
        var $73=$72+16; //@line 1741 "bz2module.c"
        HEAP[$73]=$71; //@line 1741 "bz2module.c"
        var $74=$bzs; //@line 1743 "bz2module.c"
        var $75=$74+16; //@line 1743 "bz2module.c"
        var $76=HEAP[$75]; //@line 1743 "bz2module.c"
        var $77=($76); //@line 1743 "bz2module.c"
        var $78=HEAP[$ret]; //@line 1743 "bz2module.c"
        var $79=$78; //@line 1743 "bz2module.c"
        var $80=$79+20; //@line 1743 "bz2module.c"
        var $81=($80); //@line 1743 "bz2module.c"
        var $_neg1=0 - ($81);
        var $82=$bufsize; //@line 1743 "bz2module.c"
        var $_neg2=0 - ($77);
        var $_neg1_neg=0 - ($_neg1);
        var $_neg3=($82) + ($_neg2);
        var $83=($_neg3) + ($_neg1_neg);
        var $84=$bzs; //@line 1743 "bz2module.c"
        var $85=$84+20; //@line 1743 "bz2module.c"
        HEAP[$85]=$83; //@line 1743 "bz2module.c"
        __label__ = 4; break; //@line 1743 "bz2module.c"
      case 10: // $bb10
        var $86=$bzs; //@line 1747 "bz2module.c"
        var $87=$86+20; //@line 1747 "bz2module.c"
        var $88=HEAP[$87]; //@line 1747 "bz2module.c"
        var $89=($88)!=0; //@line 1747 "bz2module.c"
        if ($89) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1747 "bz2module.c"
      case 11: // $bb11
        var $90=$bzs; //@line 1748 "bz2module.c"
        var $91=$90+24; //@line 1748 "bz2module.c"
        var $92=HEAP[$91]; //@line 1748 "bz2module.c"
        var $93=$totalout; //@line 1748 "bz2module.c"
        var $94=((($93)) & 4294967295); //@line 1748 "bz2module.c"
        var $95=($92) - ($94); //@line 1748 "bz2module.c"
        var $96=__PyString_Resize($ret, $95); //@line 1748 "bz2module.c"
        __label__ = 12; break; //@line 1748 "bz2module.c"
      case 12: // $bb12
        var $97=HEAP[$ret]; //@line 1751 "bz2module.c"
        $0=$97; //@line 1751 "bz2module.c"
        __label__ = 17; break; //@line 1751 "bz2module.c"
      case 13: // $error
        var $_pr=HEAP[$ret];
        var $98=($_pr)!=0; //@line 1755 "bz2module.c"
        if ($98) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 1755 "bz2module.c"
      case 14: // $bb13
        var $99=HEAP[$ret]; //@line 1755 "bz2module.c"
        var $100=$99; //@line 1755 "bz2module.c"
        var $101=HEAP[$100]; //@line 1755 "bz2module.c"
        var $102=($101) - 1; //@line 1755 "bz2module.c"
        var $103=$99; //@line 1755 "bz2module.c"
        HEAP[$103]=$102; //@line 1755 "bz2module.c"
        var $104=$99; //@line 1755 "bz2module.c"
        var $105=HEAP[$104]; //@line 1755 "bz2module.c"
        var $106=($105)==0; //@line 1755 "bz2module.c"
        if ($106) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1755 "bz2module.c"
      case 15: // $bb14
        var $107=HEAP[$ret]; //@line 1755 "bz2module.c"
        var $108=$107+4; //@line 1755 "bz2module.c"
        var $109=HEAP[$108]; //@line 1755 "bz2module.c"
        var $110=$109+24; //@line 1755 "bz2module.c"
        var $111=HEAP[$110]; //@line 1755 "bz2module.c"
        var $112=HEAP[$ret]; //@line 1755 "bz2module.c"
        FUNCTION_TABLE[$111]($112); //@line 1755 "bz2module.c"
        __label__ = 16; break; //@line 1755 "bz2module.c"
      case 16: // $bb15
        $0=0; //@line 1756 "bz2module.c"
        __label__ = 17; break; //@line 1756 "bz2module.c"
      case 17: // $bb16
        var $113=$0; //@line 1751 "bz2module.c"
        $retval=$113; //@line 1751 "bz2module.c"
        var $retval17=$retval; //@line 1751 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 1751 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Comp_init($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $compresslevel=__stackBase__;
        var $bzerror;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        HEAP[$compresslevel]=9; //@line 1774 "bz2module.c"
        var $1=$args_addr; //@line 1778 "bz2module.c"
        var $2=$kwargs_addr; //@line 1778 "bz2module.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str70, _kwlist_9935, allocate([$compresslevel,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 1778 "bz2module.c"
        var $4=($3)==0; //@line 1778 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1778 "bz2module.c"
      case 1: // $bb
        $0=-1; //@line 1780 "bz2module.c"
        __label__ = 8; break; //@line 1780 "bz2module.c"
      case 2: // $bb1
        var $5=HEAP[$compresslevel]; //@line 1782 "bz2module.c"
        var $6=($5) <= 0; //@line 1782 "bz2module.c"
        var $7=HEAP[$compresslevel]; //@line 1782 "bz2module.c"
        var $8=($7) > 9; //@line 1782 "bz2module.c"
        var $or_cond=($6) | ($8);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1782 "bz2module.c"
      case 3: // $bb3
        var $9=HEAP[_PyExc_ValueError]; //@line 1783 "bz2module.c"
        _PyErr_SetString($9, __str59); //@line 1783 "bz2module.c"
        __label__ = 7; break; //@line 1783 "bz2module.c"
      case 4: // $bb4
        var $10=$self_addr; //@line 1796 "bz2module.c"
        var $11=$10+8; //@line 1796 "bz2module.c"
        var $12=$11; //@line 1796 "bz2module.c"
        _llvm_memset_p0i8_i32($12, 0, 48, 1, 0); //@line 1796 "bz2module.c"
        var $13=HEAP[$compresslevel]; //@line 1797 "bz2module.c"
        var $14=$self_addr; //@line 1797 "bz2module.c"
        var $15=$14+8; //@line 1797 "bz2module.c"
        var $16=_BZ2_bzCompressInit($15, $13, 0, 0); //@line 1797 "bz2module.c"
        $bzerror=$16; //@line 1797 "bz2module.c"
        var $17=$bzerror; //@line 1798 "bz2module.c"
        var $18=($17)!=0; //@line 1798 "bz2module.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1798 "bz2module.c"
      case 5: // $bb5
        var $19=$bzerror; //@line 1799 "bz2module.c"
        _Util_CatchBZ2Error($19); //@line 1799 "bz2module.c"
        __label__ = 7; break; //@line 1799 "bz2module.c"
      case 6: // $bb6
        var $20=$self_addr; //@line 1803 "bz2module.c"
        var $21=$20+56; //@line 1803 "bz2module.c"
        HEAP[$21]=1; //@line 1803 "bz2module.c"
        $0=0; //@line 1805 "bz2module.c"
        __label__ = 8; break; //@line 1805 "bz2module.c"
      case 7: // $error
        $0=-1; //@line 1813 "bz2module.c"
        __label__ = 8; break; //@line 1813 "bz2module.c"
      case 8: // $bb7
        var $22=$0; //@line 1780 "bz2module.c"
        $retval=$22; //@line 1780 "bz2module.c"
        var $retval8=$retval; //@line 1780 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1780 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Comp_dealloc($self) {
    ;
    var __label__;
  
    var $self_addr;
    $self_addr=$self;
    var $0=$self_addr; //@line 1823 "bz2module.c"
    var $1=$0+8; //@line 1823 "bz2module.c"
    var $2=_BZ2_bzCompressEnd($1); //@line 1823 "bz2module.c"
    var $3=$self_addr; //@line 1824 "bz2module.c"
    var $4=$3; //@line 1824 "bz2module.c"
    var $5=$4+4; //@line 1824 "bz2module.c"
    var $6=HEAP[$5]; //@line 1824 "bz2module.c"
    var $7=$6+160; //@line 1824 "bz2module.c"
    var $8=HEAP[$7]; //@line 1824 "bz2module.c"
    var $9=$self_addr; //@line 1824 "bz2module.c"
    var $10=$9; //@line 1824 "bz2module.c"
    FUNCTION_TABLE[$8]($10); //@line 1824 "bz2module.c"
    ;
    return; //@line 1825 "bz2module.c"
  }
  

  function _BZ2Decomp_decompress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pdata=__stackBase__;
        var $data;
        var $datasize;
        var $bufsize;
        var $totalout;
        var $ret=__stackBase__+52;
        var $bzs;
        var $bzerror;
        $self_addr=$self;
        $args_addr=$args;
        $bufsize=8192; //@line 1915 "bz2module.c"
        HEAP[$ret]=0; //@line 1917 "bz2module.c"
        var $1=$self_addr; //@line 1918 "bz2module.c"
        var $2=$1+8; //@line 1918 "bz2module.c"
        $bzs=$2; //@line 1918 "bz2module.c"
        var $3=$args_addr; //@line 1921 "bz2module.c"
        var $4=_PyArg_ParseTuple($3, __str73, allocate([$pdata,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 1921 "bz2module.c"
        var $5=($4)==0; //@line 1921 "bz2module.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1921 "bz2module.c"
      case 1: // $bb
        $0=0; //@line 1922 "bz2module.c"
        __label__ = 26; break; //@line 1922 "bz2module.c"
      case 2: // $bb1
        var $6=$pdata; //@line 1923 "bz2module.c"
        var $7=HEAP[$6]; //@line 1923 "bz2module.c"
        $data=$7; //@line 1923 "bz2module.c"
        var $8=$pdata+8; //@line 1924 "bz2module.c"
        var $9=HEAP[$8]; //@line 1924 "bz2module.c"
        $datasize=$9; //@line 1924 "bz2module.c"
        var $10=$self_addr; //@line 1927 "bz2module.c"
        var $11=$10+56; //@line 1927 "bz2module.c"
        var $12=HEAP[$11]; //@line 1927 "bz2module.c"
        var $13=($12)==0; //@line 1927 "bz2module.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1927 "bz2module.c"
      case 3: // $bb2
        var $14=HEAP[_PyExc_EOFError]; //@line 1928 "bz2module.c"
        _PyErr_SetString($14, __str74); //@line 1928 "bz2module.c"
        __label__ = 22; break; //@line 1928 "bz2module.c"
      case 4: // $bb3
        var $15=$bufsize; //@line 1933 "bz2module.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 1933 "bz2module.c"
        HEAP[$ret]=$16; //@line 1933 "bz2module.c"
        var $17=HEAP[$ret]; //@line 1934 "bz2module.c"
        var $18=($17)==0; //@line 1934 "bz2module.c"
        if ($18) { __label__ = 22; break; } else { __label__ = 5; break; } //@line 1934 "bz2module.c"
      case 5: // $bb4
        var $19=$bzs; //@line 1937 "bz2module.c"
        var $20=$19; //@line 1937 "bz2module.c"
        var $21=$data; //@line 1937 "bz2module.c"
        HEAP[$20]=$21; //@line 1937 "bz2module.c"
        var $22=$datasize; //@line 1938 "bz2module.c"
        var $23=$bzs; //@line 1938 "bz2module.c"
        var $24=$23+4; //@line 1938 "bz2module.c"
        HEAP[$24]=$22; //@line 1938 "bz2module.c"
        var $25=HEAP[$ret]; //@line 1939 "bz2module.c"
        var $26=$25; //@line 1939 "bz2module.c"
        var $27=$26+20; //@line 1939 "bz2module.c"
        var $28=$27; //@line 1939 "bz2module.c"
        var $29=$bzs; //@line 1939 "bz2module.c"
        var $30=$29+16; //@line 1939 "bz2module.c"
        HEAP[$30]=$28; //@line 1939 "bz2module.c"
        var $31=$bufsize; //@line 1940 "bz2module.c"
        var $32=$bzs; //@line 1940 "bz2module.c"
        var $33=$32+20; //@line 1940 "bz2module.c"
        HEAP[$33]=$31; //@line 1940 "bz2module.c"
        var $34=$bzs; //@line 1942 "bz2module.c"
        var $35=$34+28; //@line 1942 "bz2module.c"
        var $36=HEAP[$35]; //@line 1942 "bz2module.c"
        var $37=($36); //@line 1942 "bz2module.c"
        var $38=($37) * 4294967296;
        var $39=$bzs; //@line 1942 "bz2module.c"
        var $40=$39+24; //@line 1942 "bz2module.c"
        var $41=HEAP[$40]; //@line 1942 "bz2module.c"
        var $42=($41); //@line 1942 "bz2module.c"
        var $43=($42) + ($38); //@line 1942 "bz2module.c"
        $totalout=$43; //@line 1942 "bz2module.c"
        __label__ = 6; break; //@line 1942 "bz2module.c"
      case 6: // $bb5
        var $44=$bzs; //@line 1946 "bz2module.c"
        var $45=_BZ2_bzDecompress($44); //@line 1946 "bz2module.c"
        $bzerror=$45; //@line 1946 "bz2module.c"
        var $46=($45)==4; //@line 1948 "bz2module.c"
        if ($46) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 1948 "bz2module.c"
      case 7: // $bb6
        var $47=$bzs; //@line 1949 "bz2module.c"
        var $48=$47+4; //@line 1949 "bz2module.c"
        var $49=HEAP[$48]; //@line 1949 "bz2module.c"
        var $50=($49)!=0; //@line 1949 "bz2module.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1949 "bz2module.c"
      case 8: // $bb7
        var $51=$self_addr; //@line 1950 "bz2module.c"
        var $52=$51+60; //@line 1950 "bz2module.c"
        var $53=HEAP[$52]; //@line 1950 "bz2module.c"
        var $54=$53; //@line 1950 "bz2module.c"
        var $55=HEAP[$54]; //@line 1950 "bz2module.c"
        var $56=($55) - 1; //@line 1950 "bz2module.c"
        var $57=$53; //@line 1950 "bz2module.c"
        HEAP[$57]=$56; //@line 1950 "bz2module.c"
        var $58=$53; //@line 1950 "bz2module.c"
        var $59=HEAP[$58]; //@line 1950 "bz2module.c"
        var $60=($59)==0; //@line 1950 "bz2module.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1950 "bz2module.c"
      case 9: // $bb8
        var $61=$self_addr; //@line 1950 "bz2module.c"
        var $62=$61+60; //@line 1950 "bz2module.c"
        var $63=HEAP[$62]; //@line 1950 "bz2module.c"
        var $64=$63+4; //@line 1950 "bz2module.c"
        var $65=HEAP[$64]; //@line 1950 "bz2module.c"
        var $66=$65+24; //@line 1950 "bz2module.c"
        var $67=HEAP[$66]; //@line 1950 "bz2module.c"
        var $68=$self_addr; //@line 1950 "bz2module.c"
        var $69=$68+60; //@line 1950 "bz2module.c"
        var $70=HEAP[$69]; //@line 1950 "bz2module.c"
        FUNCTION_TABLE[$67]($70); //@line 1950 "bz2module.c"
        __label__ = 10; break; //@line 1950 "bz2module.c"
      case 10: // $bb9
        var $71=$bzs; //@line 1951 "bz2module.c"
        var $72=$71+4; //@line 1951 "bz2module.c"
        var $73=HEAP[$72]; //@line 1951 "bz2module.c"
        var $74=$bzs; //@line 1951 "bz2module.c"
        var $75=$74; //@line 1951 "bz2module.c"
        var $76=HEAP[$75]; //@line 1951 "bz2module.c"
        var $77=_PyString_FromStringAndSize($76, $73); //@line 1951 "bz2module.c"
        var $78=$self_addr; //@line 1951 "bz2module.c"
        var $79=$78+60; //@line 1951 "bz2module.c"
        HEAP[$79]=$77; //@line 1951 "bz2module.c"
        __label__ = 11; break; //@line 1951 "bz2module.c"
      case 11: // $bb10
        var $80=$self_addr; //@line 1955 "bz2module.c"
        var $81=$80+56; //@line 1955 "bz2module.c"
        HEAP[$81]=0; //@line 1955 "bz2module.c"
        __label__ = 19; break; //@line 1955 "bz2module.c"
      case 12: // $bb11
        var $82=$bzerror; //@line 1958 "bz2module.c"
        var $83=($82)!=0; //@line 1958 "bz2module.c"
        if ($83) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1958 "bz2module.c"
      case 13: // $bb12
        var $84=$bzerror; //@line 1959 "bz2module.c"
        _Util_CatchBZ2Error($84); //@line 1959 "bz2module.c"
        __label__ = 22; break; //@line 1959 "bz2module.c"
      case 14: // $bb13
        var $85=$bzs; //@line 1962 "bz2module.c"
        var $86=$85+4; //@line 1962 "bz2module.c"
        var $87=HEAP[$86]; //@line 1962 "bz2module.c"
        var $88=($87)==0; //@line 1962 "bz2module.c"
        if ($88) { __label__ = 19; break; } else { __label__ = 15; break; } //@line 1962 "bz2module.c"
      case 15: // $bb14
        var $89=$bzs; //@line 1964 "bz2module.c"
        var $90=$89+20; //@line 1964 "bz2module.c"
        var $91=HEAP[$90]; //@line 1964 "bz2module.c"
        var $92=($91)==0; //@line 1964 "bz2module.c"
        if ($92) { __label__ = 16; break; } else { __label__ = 6; break; } //@line 1964 "bz2module.c"
      case 16: // $bb15
        var $93=$bufsize; //@line 1965 "bz2module.c"
        var $94=_Util_NewBufferSize($93); //@line 1965 "bz2module.c"
        $bufsize=$94; //@line 1965 "bz2module.c"
        var $95=$bufsize; //@line 1966 "bz2module.c"
        var $96=__PyString_Resize($ret, $95); //@line 1966 "bz2module.c"
        var $97=($96) < 0; //@line 1966 "bz2module.c"
        if ($97) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1966 "bz2module.c"
      case 17: // $bb16
        var $98=$bzs; //@line 1967 "bz2module.c"
        var $99=_BZ2_bzDecompressEnd($98); //@line 1967 "bz2module.c"
        __label__ = 22; break; //@line 1967 "bz2module.c"
      case 18: // $bb17
        var $100=HEAP[$ret]; //@line 1970 "bz2module.c"
        var $101=$100; //@line 1970 "bz2module.c"
        var $102=$101+20; //@line 1970 "bz2module.c"
        var $103=$102; //@line 1970 "bz2module.c"
        var $104=$bzs; //@line 1970 "bz2module.c"
        var $105=$104+16; //@line 1970 "bz2module.c"
        HEAP[$105]=$103; //@line 1970 "bz2module.c"
        var $106=HEAP[$ret]; //@line 1971 "bz2module.c"
        var $107=$106; //@line 1971 "bz2module.c"
        var $108=$107+20; //@line 1971 "bz2module.c"
        var $109=$108; //@line 1971 "bz2module.c"
        var $110=$bzs; //@line 1971 "bz2module.c"
        var $111=$110+28; //@line 1971 "bz2module.c"
        var $112=HEAP[$111]; //@line 1971 "bz2module.c"
        var $113=($112); //@line 1971 "bz2module.c"
        var $114=($113) * 4294967296;
        var $115=$bzs; //@line 1971 "bz2module.c"
        var $116=$115+24; //@line 1971 "bz2module.c"
        var $117=HEAP[$116]; //@line 1971 "bz2module.c"
        var $118=($117); //@line 1971 "bz2module.c"
        var $119=$totalout; //@line 1971 "bz2module.c"
        var $_neg=0 - ($119);
        var $120=($_neg) + ($114); //@line 1971 "bz2module.c"
        var $121=($120) + ($118);
        var $122=((($121)) & 4294967295); //@line 1971 "bz2module.c"
        var $123=$109+$122; //@line 1971 "bz2module.c"
        var $124=$bzs; //@line 1971 "bz2module.c"
        var $125=$124+16; //@line 1971 "bz2module.c"
        HEAP[$125]=$123; //@line 1971 "bz2module.c"
        var $126=$bzs; //@line 1973 "bz2module.c"
        var $127=$126+16; //@line 1973 "bz2module.c"
        var $128=HEAP[$127]; //@line 1973 "bz2module.c"
        var $129=($128); //@line 1973 "bz2module.c"
        var $130=HEAP[$ret]; //@line 1973 "bz2module.c"
        var $131=$130; //@line 1973 "bz2module.c"
        var $132=$131+20; //@line 1973 "bz2module.c"
        var $133=($132); //@line 1973 "bz2module.c"
        var $_neg1=0 - ($133);
        var $134=$bufsize; //@line 1973 "bz2module.c"
        var $_neg2=0 - ($129);
        var $_neg1_neg=0 - ($_neg1);
        var $_neg3=($134) + ($_neg2);
        var $135=($_neg3) + ($_neg1_neg);
        var $136=$bzs; //@line 1973 "bz2module.c"
        var $137=$136+20; //@line 1973 "bz2module.c"
        HEAP[$137]=$135; //@line 1973 "bz2module.c"
        __label__ = 6; break; //@line 1973 "bz2module.c"
      case 19: // $bb19
        var $138=$bzs; //@line 1977 "bz2module.c"
        var $139=$138+20; //@line 1977 "bz2module.c"
        var $140=HEAP[$139]; //@line 1977 "bz2module.c"
        var $141=($140)!=0; //@line 1977 "bz2module.c"
        if ($141) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1977 "bz2module.c"
      case 20: // $bb20
        var $142=$bzs; //@line 1978 "bz2module.c"
        var $143=$142+24; //@line 1978 "bz2module.c"
        var $144=HEAP[$143]; //@line 1978 "bz2module.c"
        var $145=$totalout; //@line 1978 "bz2module.c"
        var $146=((($145)) & 4294967295); //@line 1978 "bz2module.c"
        var $147=($144) - ($146); //@line 1978 "bz2module.c"
        var $148=__PyString_Resize($ret, $147); //@line 1978 "bz2module.c"
        __label__ = 21; break; //@line 1978 "bz2module.c"
      case 21: // $bb21
        _PyBuffer_Release($pdata); //@line 1981 "bz2module.c"
        var $149=HEAP[$ret]; //@line 1982 "bz2module.c"
        $0=$149; //@line 1982 "bz2module.c"
        __label__ = 26; break; //@line 1982 "bz2module.c"
      case 22: // $error
        _PyBuffer_Release($pdata); //@line 1986 "bz2module.c"
        var $150=HEAP[$ret]; //@line 1987 "bz2module.c"
        var $151=($150)!=0; //@line 1987 "bz2module.c"
        if ($151) { __label__ = 23; break; } else { __label__ = 25; break; } //@line 1987 "bz2module.c"
      case 23: // $bb22
        var $152=HEAP[$ret]; //@line 1987 "bz2module.c"
        var $153=$152; //@line 1987 "bz2module.c"
        var $154=HEAP[$153]; //@line 1987 "bz2module.c"
        var $155=($154) - 1; //@line 1987 "bz2module.c"
        var $156=$152; //@line 1987 "bz2module.c"
        HEAP[$156]=$155; //@line 1987 "bz2module.c"
        var $157=$152; //@line 1987 "bz2module.c"
        var $158=HEAP[$157]; //@line 1987 "bz2module.c"
        var $159=($158)==0; //@line 1987 "bz2module.c"
        if ($159) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1987 "bz2module.c"
      case 24: // $bb23
        var $160=HEAP[$ret]; //@line 1987 "bz2module.c"
        var $161=$160+4; //@line 1987 "bz2module.c"
        var $162=HEAP[$161]; //@line 1987 "bz2module.c"
        var $163=$162+24; //@line 1987 "bz2module.c"
        var $164=HEAP[$163]; //@line 1987 "bz2module.c"
        var $165=HEAP[$ret]; //@line 1987 "bz2module.c"
        FUNCTION_TABLE[$164]($165); //@line 1987 "bz2module.c"
        __label__ = 25; break; //@line 1987 "bz2module.c"
      case 25: // $bb24
        $0=0; //@line 1988 "bz2module.c"
        __label__ = 26; break; //@line 1988 "bz2module.c"
      case 26: // $bb25
        var $166=$0; //@line 1922 "bz2module.c"
        $retval=$166; //@line 1922 "bz2module.c"
        var $retval26=$retval; //@line 1922 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 1922 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Decomp_init($self, $args, $kwargs) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $bzerror;
        var $_py_tmp;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        var $1=$args_addr; //@line 2005 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, __str76, allocate(1, "i32", ALLOC_STACK)); //@line 2005 "bz2module.c"
        var $3=($2)==0; //@line 2005 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2005 "bz2module.c"
      case 1: // $bb
        $0=-1; //@line 2006 "bz2module.c"
        __label__ = 10; break; //@line 2006 "bz2module.c"
      case 2: // $bb1
        var $4=_PyString_FromString(__str13); //@line 2016 "bz2module.c"
        var $5=$self_addr; //@line 2016 "bz2module.c"
        var $6=$5+60; //@line 2016 "bz2module.c"
        HEAP[$6]=$4; //@line 2016 "bz2module.c"
        var $7=$self_addr; //@line 2017 "bz2module.c"
        var $8=$7+60; //@line 2017 "bz2module.c"
        var $9=HEAP[$8]; //@line 2017 "bz2module.c"
        var $10=($9)==0; //@line 2017 "bz2module.c"
        if ($10) { __label__ = 6; break; } else { __label__ = 3; break; } //@line 2017 "bz2module.c"
      case 3: // $bb2
        var $11=$self_addr; //@line 2020 "bz2module.c"
        var $12=$11+8; //@line 2020 "bz2module.c"
        var $13=$12; //@line 2020 "bz2module.c"
        _llvm_memset_p0i8_i32($13, 0, 48, 1, 0); //@line 2020 "bz2module.c"
        var $14=$self_addr; //@line 2021 "bz2module.c"
        var $15=$14+8; //@line 2021 "bz2module.c"
        var $16=_BZ2_bzDecompressInit($15, 0, 0); //@line 2021 "bz2module.c"
        $bzerror=$16; //@line 2021 "bz2module.c"
        var $17=$bzerror; //@line 2022 "bz2module.c"
        var $18=($17)!=0; //@line 2022 "bz2module.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2022 "bz2module.c"
      case 4: // $bb3
        var $19=$bzerror; //@line 2023 "bz2module.c"
        _Util_CatchBZ2Error($19); //@line 2023 "bz2module.c"
        __label__ = 6; break; //@line 2023 "bz2module.c"
      case 5: // $bb4
        var $20=$self_addr; //@line 2027 "bz2module.c"
        var $21=$20+56; //@line 2027 "bz2module.c"
        HEAP[$21]=1; //@line 2027 "bz2module.c"
        $0=0; //@line 2029 "bz2module.c"
        __label__ = 10; break; //@line 2029 "bz2module.c"
      case 6: // $error
        var $22=$self_addr; //@line 2038 "bz2module.c"
        var $23=$22+60; //@line 2038 "bz2module.c"
        var $24=HEAP[$23]; //@line 2038 "bz2module.c"
        var $25=($24)!=0; //@line 2038 "bz2module.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2038 "bz2module.c"
      case 7: // $bb5
        var $26=$self_addr; //@line 2038 "bz2module.c"
        var $27=$26+60; //@line 2038 "bz2module.c"
        var $28=HEAP[$27]; //@line 2038 "bz2module.c"
        $_py_tmp=$28; //@line 2038 "bz2module.c"
        var $29=$self_addr; //@line 2038 "bz2module.c"
        var $30=$29+60; //@line 2038 "bz2module.c"
        HEAP[$30]=0; //@line 2038 "bz2module.c"
        var $31=$_py_tmp; //@line 2038 "bz2module.c"
        var $32=$31; //@line 2038 "bz2module.c"
        var $33=HEAP[$32]; //@line 2038 "bz2module.c"
        var $34=($33) - 1; //@line 2038 "bz2module.c"
        var $35=$_py_tmp; //@line 2038 "bz2module.c"
        var $36=$35; //@line 2038 "bz2module.c"
        HEAP[$36]=$34; //@line 2038 "bz2module.c"
        var $37=$_py_tmp; //@line 2038 "bz2module.c"
        var $38=$37; //@line 2038 "bz2module.c"
        var $39=HEAP[$38]; //@line 2038 "bz2module.c"
        var $40=($39)==0; //@line 2038 "bz2module.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2038 "bz2module.c"
      case 8: // $bb6
        var $41=$_py_tmp; //@line 2038 "bz2module.c"
        var $42=$41+4; //@line 2038 "bz2module.c"
        var $43=HEAP[$42]; //@line 2038 "bz2module.c"
        var $44=$43+24; //@line 2038 "bz2module.c"
        var $45=HEAP[$44]; //@line 2038 "bz2module.c"
        var $46=$_py_tmp; //@line 2038 "bz2module.c"
        FUNCTION_TABLE[$45]($46); //@line 2038 "bz2module.c"
        __label__ = 9; break; //@line 2038 "bz2module.c"
      case 9: // $bb7
        $0=-1; //@line 2039 "bz2module.c"
        __label__ = 10; break; //@line 2039 "bz2module.c"
      case 10: // $bb8
        var $47=$0; //@line 2006 "bz2module.c"
        $retval=$47; //@line 2006 "bz2module.c"
        var $retval9=$retval; //@line 2006 "bz2module.c"
        ;
        return $retval9; //@line 2006 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BZ2Decomp_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 2049 "bz2module.c"
        var $1=$0+60; //@line 2049 "bz2module.c"
        var $2=HEAP[$1]; //@line 2049 "bz2module.c"
        var $3=($2)!=0; //@line 2049 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2049 "bz2module.c"
      case 1: // $bb
        var $4=$self_addr; //@line 2049 "bz2module.c"
        var $5=$4+60; //@line 2049 "bz2module.c"
        var $6=HEAP[$5]; //@line 2049 "bz2module.c"
        var $7=$6; //@line 2049 "bz2module.c"
        var $8=HEAP[$7]; //@line 2049 "bz2module.c"
        var $9=($8) - 1; //@line 2049 "bz2module.c"
        var $10=$6; //@line 2049 "bz2module.c"
        HEAP[$10]=$9; //@line 2049 "bz2module.c"
        var $11=$6; //@line 2049 "bz2module.c"
        var $12=HEAP[$11]; //@line 2049 "bz2module.c"
        var $13=($12)==0; //@line 2049 "bz2module.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2049 "bz2module.c"
      case 2: // $bb1
        var $14=$self_addr; //@line 2049 "bz2module.c"
        var $15=$14+60; //@line 2049 "bz2module.c"
        var $16=HEAP[$15]; //@line 2049 "bz2module.c"
        var $17=$16+4; //@line 2049 "bz2module.c"
        var $18=HEAP[$17]; //@line 2049 "bz2module.c"
        var $19=$18+24; //@line 2049 "bz2module.c"
        var $20=HEAP[$19]; //@line 2049 "bz2module.c"
        var $21=$self_addr; //@line 2049 "bz2module.c"
        var $22=$21+60; //@line 2049 "bz2module.c"
        var $23=HEAP[$22]; //@line 2049 "bz2module.c"
        FUNCTION_TABLE[$20]($23); //@line 2049 "bz2module.c"
        __label__ = 3; break; //@line 2049 "bz2module.c"
      case 3: // $bb2
        var $24=$self_addr; //@line 2050 "bz2module.c"
        var $25=$24+8; //@line 2050 "bz2module.c"
        var $26=_BZ2_bzDecompressEnd($25); //@line 2050 "bz2module.c"
        var $27=$self_addr; //@line 2051 "bz2module.c"
        var $28=$27; //@line 2051 "bz2module.c"
        var $29=$28+4; //@line 2051 "bz2module.c"
        var $30=HEAP[$29]; //@line 2051 "bz2module.c"
        var $31=$30+160; //@line 2051 "bz2module.c"
        var $32=HEAP[$31]; //@line 2051 "bz2module.c"
        var $33=$self_addr; //@line 2051 "bz2module.c"
        var $34=$33; //@line 2051 "bz2module.c"
        FUNCTION_TABLE[$32]($34); //@line 2051 "bz2module.c"
        ;
        return; //@line 2052 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bz2_compress($self, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 108; _memset(__stackBase__, 0, 108);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $compresslevel=__stackBase__;
        var $pdata=__stackBase__+4;
        var $data;
        var $datasize;
        var $bufsize;
        var $ret=__stackBase__+56;
        var $_bzs=__stackBase__+60;
        var $bzs;
        var $bzerror;
        $self_addr=$self;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        HEAP[$compresslevel]=9; //@line 2124 "bz2module.c"
        HEAP[$ret]=0; //@line 2129 "bz2module.c"
        $bzs=$_bzs; //@line 2131 "bz2module.c"
        var $1=$args_addr; //@line 2135 "bz2module.c"
        var $2=$kwargs_addr; //@line 2135 "bz2module.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str78, _kwlist_10147, allocate([$pdata,0,0,0,$compresslevel,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2135 "bz2module.c"
        var $4=($3)==0; //@line 2135 "bz2module.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2135 "bz2module.c"
      case 1: // $bb
        $0=0; //@line 2138 "bz2module.c"
        __label__ = 24; break; //@line 2138 "bz2module.c"
      case 2: // $bb1
        var $5=$pdata; //@line 2139 "bz2module.c"
        var $6=HEAP[$5]; //@line 2139 "bz2module.c"
        $data=$6; //@line 2139 "bz2module.c"
        var $7=$pdata+8; //@line 2140 "bz2module.c"
        var $8=HEAP[$7]; //@line 2140 "bz2module.c"
        $datasize=$8; //@line 2140 "bz2module.c"
        var $9=HEAP[$compresslevel]; //@line 2142 "bz2module.c"
        var $10=($9) <= 0; //@line 2142 "bz2module.c"
        var $11=HEAP[$compresslevel]; //@line 2142 "bz2module.c"
        var $12=($11) > 9; //@line 2142 "bz2module.c"
        var $or_cond=($10) | ($12);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2142 "bz2module.c"
      case 3: // $bb3
        var $13=HEAP[_PyExc_ValueError]; //@line 2143 "bz2module.c"
        _PyErr_SetString($13, __str59); //@line 2143 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2145 "bz2module.c"
        $0=0; //@line 2146 "bz2module.c"
        __label__ = 24; break; //@line 2146 "bz2module.c"
      case 4: // $bb4
        var $14=$datasize; //@line 2151 "bz2module.c"
        var $15=((($14)/100)|0); //@line 2151 "bz2module.c"
        var $16=$datasize; //@line 2151 "bz2module.c"
        var $17=($15) + 601; //@line 2151 "bz2module.c"
        var $18=($17) + ($16); //@line 2151 "bz2module.c"
        $bufsize=$18; //@line 2151 "bz2module.c"
        var $19=$bufsize; //@line 2153 "bz2module.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 2153 "bz2module.c"
        HEAP[$ret]=$20; //@line 2153 "bz2module.c"
        var $21=HEAP[$ret]; //@line 2154 "bz2module.c"
        var $22=($21)==0; //@line 2154 "bz2module.c"
        if ($22) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2154 "bz2module.c"
      case 5: // $bb5
        _PyBuffer_Release($pdata); //@line 2155 "bz2module.c"
        $0=0; //@line 2156 "bz2module.c"
        __label__ = 24; break; //@line 2156 "bz2module.c"
      case 6: // $bb6
        var $23=$bzs; //@line 2159 "bz2module.c"
        var $24=$23; //@line 2159 "bz2module.c"
        _llvm_memset_p0i8_i32($24, 0, 48, 1, 0); //@line 2159 "bz2module.c"
        var $25=$bzs; //@line 2161 "bz2module.c"
        var $26=$25; //@line 2161 "bz2module.c"
        var $27=$data; //@line 2161 "bz2module.c"
        HEAP[$26]=$27; //@line 2161 "bz2module.c"
        var $28=$datasize; //@line 2162 "bz2module.c"
        var $29=$bzs; //@line 2162 "bz2module.c"
        var $30=$29+4; //@line 2162 "bz2module.c"
        HEAP[$30]=$28; //@line 2162 "bz2module.c"
        var $31=HEAP[$ret]; //@line 2163 "bz2module.c"
        var $32=$31; //@line 2163 "bz2module.c"
        var $33=$32+20; //@line 2163 "bz2module.c"
        var $34=$33; //@line 2163 "bz2module.c"
        var $35=$bzs; //@line 2163 "bz2module.c"
        var $36=$35+16; //@line 2163 "bz2module.c"
        HEAP[$36]=$34; //@line 2163 "bz2module.c"
        var $37=$bufsize; //@line 2164 "bz2module.c"
        var $38=$bzs; //@line 2164 "bz2module.c"
        var $39=$38+20; //@line 2164 "bz2module.c"
        HEAP[$39]=$37; //@line 2164 "bz2module.c"
        var $40=HEAP[$compresslevel]; //@line 2166 "bz2module.c"
        var $41=$bzs; //@line 2166 "bz2module.c"
        var $42=_BZ2_bzCompressInit($41, $40, 0, 0); //@line 2166 "bz2module.c"
        $bzerror=$42; //@line 2166 "bz2module.c"
        var $43=$bzerror; //@line 2167 "bz2module.c"
        var $44=($43)!=0; //@line 2167 "bz2module.c"
        if ($44) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 2167 "bz2module.c"
      case 7: // $bb7
        var $45=$bzerror; //@line 2168 "bz2module.c"
        _Util_CatchBZ2Error($45); //@line 2168 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2169 "bz2module.c"
        var $46=HEAP[$ret]; //@line 2170 "bz2module.c"
        var $47=$46; //@line 2170 "bz2module.c"
        var $48=HEAP[$47]; //@line 2170 "bz2module.c"
        var $49=($48) - 1; //@line 2170 "bz2module.c"
        var $50=$46; //@line 2170 "bz2module.c"
        HEAP[$50]=$49; //@line 2170 "bz2module.c"
        var $51=$46; //@line 2170 "bz2module.c"
        var $52=HEAP[$51]; //@line 2170 "bz2module.c"
        var $53=($52)==0; //@line 2170 "bz2module.c"
        if ($53) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2170 "bz2module.c"
      case 8: // $bb8
        var $54=HEAP[$ret]; //@line 2170 "bz2module.c"
        var $55=$54+4; //@line 2170 "bz2module.c"
        var $56=HEAP[$55]; //@line 2170 "bz2module.c"
        var $57=$56+24; //@line 2170 "bz2module.c"
        var $58=HEAP[$57]; //@line 2170 "bz2module.c"
        var $59=HEAP[$ret]; //@line 2170 "bz2module.c"
        FUNCTION_TABLE[$58]($59); //@line 2170 "bz2module.c"
        __label__ = 9; break; //@line 2170 "bz2module.c"
      case 9: // $bb9
        $0=0; //@line 2171 "bz2module.c"
        __label__ = 24; break; //@line 2171 "bz2module.c"
      case 10: // $bb10
        var $60=$bzs; //@line 2176 "bz2module.c"
        var $61=_BZ2_bzCompress($60, 2); //@line 2176 "bz2module.c"
        $bzerror=$61; //@line 2176 "bz2module.c"
        var $62=($61)==4; //@line 2178 "bz2module.c"
        if ($62) { __label__ = 21; break; } else { __label__ = 11; break; } //@line 2178 "bz2module.c"
      case 11: // $bb11
        var $63=$bzerror; //@line 2180 "bz2module.c"
        var $64=($63)!=3; //@line 2180 "bz2module.c"
        var $65=$bzs; //@line 2181 "bz2module.c"
        if ($64) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 2180 "bz2module.c"
      case 12: // $bb12
        var $66=_BZ2_bzCompressEnd($65); //@line 2181 "bz2module.c"
        var $67=$bzerror; //@line 2182 "bz2module.c"
        _Util_CatchBZ2Error($67); //@line 2182 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2183 "bz2module.c"
        var $68=HEAP[$ret]; //@line 2184 "bz2module.c"
        var $69=$68; //@line 2184 "bz2module.c"
        var $70=HEAP[$69]; //@line 2184 "bz2module.c"
        var $71=($70) - 1; //@line 2184 "bz2module.c"
        var $72=$68; //@line 2184 "bz2module.c"
        HEAP[$72]=$71; //@line 2184 "bz2module.c"
        var $73=$68; //@line 2184 "bz2module.c"
        var $74=HEAP[$73]; //@line 2184 "bz2module.c"
        var $75=($74)==0; //@line 2184 "bz2module.c"
        if ($75) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2184 "bz2module.c"
      case 13: // $bb13
        var $76=HEAP[$ret]; //@line 2184 "bz2module.c"
        var $77=$76+4; //@line 2184 "bz2module.c"
        var $78=HEAP[$77]; //@line 2184 "bz2module.c"
        var $79=$78+24; //@line 2184 "bz2module.c"
        var $80=HEAP[$79]; //@line 2184 "bz2module.c"
        var $81=HEAP[$ret]; //@line 2184 "bz2module.c"
        FUNCTION_TABLE[$80]($81); //@line 2184 "bz2module.c"
        __label__ = 14; break; //@line 2184 "bz2module.c"
      case 14: // $bb14
        $0=0; //@line 2185 "bz2module.c"
        __label__ = 24; break; //@line 2185 "bz2module.c"
      case 15: // $bb15
        var $82=$65+20; //@line 2187 "bz2module.c"
        var $83=HEAP[$82]; //@line 2187 "bz2module.c"
        var $84=($83)==0; //@line 2187 "bz2module.c"
        if ($84) { __label__ = 16; break; } else { __label__ = 10; break; } //@line 2187 "bz2module.c"
      case 16: // $bb16
        var $85=$bufsize; //@line 2188 "bz2module.c"
        var $86=_Util_NewBufferSize($85); //@line 2188 "bz2module.c"
        $bufsize=$86; //@line 2188 "bz2module.c"
        var $87=$bufsize; //@line 2189 "bz2module.c"
        var $88=__PyString_Resize($ret, $87); //@line 2189 "bz2module.c"
        var $89=($88) < 0; //@line 2189 "bz2module.c"
        if ($89) { __label__ = 17; break; } else { __label__ = 20; break; } //@line 2189 "bz2module.c"
      case 17: // $bb17
        var $90=$bzs; //@line 2190 "bz2module.c"
        var $91=_BZ2_bzCompressEnd($90); //@line 2190 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2191 "bz2module.c"
        var $92=HEAP[$ret]; //@line 2192 "bz2module.c"
        var $93=$92; //@line 2192 "bz2module.c"
        var $94=HEAP[$93]; //@line 2192 "bz2module.c"
        var $95=($94) - 1; //@line 2192 "bz2module.c"
        var $96=$92; //@line 2192 "bz2module.c"
        HEAP[$96]=$95; //@line 2192 "bz2module.c"
        var $97=$92; //@line 2192 "bz2module.c"
        var $98=HEAP[$97]; //@line 2192 "bz2module.c"
        var $99=($98)==0; //@line 2192 "bz2module.c"
        if ($99) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2192 "bz2module.c"
      case 18: // $bb18
        var $100=HEAP[$ret]; //@line 2192 "bz2module.c"
        var $101=$100+4; //@line 2192 "bz2module.c"
        var $102=HEAP[$101]; //@line 2192 "bz2module.c"
        var $103=$102+24; //@line 2192 "bz2module.c"
        var $104=HEAP[$103]; //@line 2192 "bz2module.c"
        var $105=HEAP[$ret]; //@line 2192 "bz2module.c"
        FUNCTION_TABLE[$104]($105); //@line 2192 "bz2module.c"
        __label__ = 19; break; //@line 2192 "bz2module.c"
      case 19: // $bb19
        $0=0; //@line 2193 "bz2module.c"
        __label__ = 24; break; //@line 2193 "bz2module.c"
      case 20: // $bb20
        var $106=HEAP[$ret]; //@line 2195 "bz2module.c"
        var $107=$106; //@line 2195 "bz2module.c"
        var $108=$107+20; //@line 2195 "bz2module.c"
        var $109=$108; //@line 2195 "bz2module.c"
        var $110=$bzs; //@line 2195 "bz2module.c"
        var $111=$110+28; //@line 2195 "bz2module.c"
        var $112=HEAP[$111]; //@line 2195 "bz2module.c"
        var $113=($112); //@line 2195 "bz2module.c"
        var $114=($113) * 4294967296;
        var $115=$bzs; //@line 2195 "bz2module.c"
        var $116=$115+24; //@line 2195 "bz2module.c"
        var $117=HEAP[$116]; //@line 2195 "bz2module.c"
        var $118=($117); //@line 2195 "bz2module.c"
        var $119=($118) + ($114); //@line 2195 "bz2module.c"
        var $120=((($119)) & 4294967295); //@line 2195 "bz2module.c"
        var $121=$109+$120; //@line 2195 "bz2module.c"
        var $122=$bzs; //@line 2195 "bz2module.c"
        var $123=$122+16; //@line 2195 "bz2module.c"
        HEAP[$123]=$121; //@line 2195 "bz2module.c"
        var $124=$bzs; //@line 2196 "bz2module.c"
        var $125=$124+16; //@line 2196 "bz2module.c"
        var $126=HEAP[$125]; //@line 2196 "bz2module.c"
        var $127=($126); //@line 2196 "bz2module.c"
        var $128=HEAP[$ret]; //@line 2196 "bz2module.c"
        var $129=$128; //@line 2196 "bz2module.c"
        var $130=$129+20; //@line 2196 "bz2module.c"
        var $131=($130); //@line 2196 "bz2module.c"
        var $_neg=0 - ($131);
        var $132=$bufsize; //@line 2196 "bz2module.c"
        var $_neg2=0 - ($127);
        var $_neg_neg=0 - ($_neg);
        var $_neg3=($132) + ($_neg2);
        var $133=($_neg3) + ($_neg_neg);
        var $134=$bzs; //@line 2196 "bz2module.c"
        var $135=$134+20; //@line 2196 "bz2module.c"
        HEAP[$135]=$133; //@line 2196 "bz2module.c"
        __label__ = 10; break; //@line 2196 "bz2module.c"
      case 21: // $bb22
        var $136=$bzs; //@line 2200 "bz2module.c"
        var $137=$136+20; //@line 2200 "bz2module.c"
        var $138=HEAP[$137]; //@line 2200 "bz2module.c"
        var $139=($138)!=0; //@line 2200 "bz2module.c"
        if ($139) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2200 "bz2module.c"
      case 22: // $bb23
        var $140=$bzs; //@line 2201 "bz2module.c"
        var $141=$140+24; //@line 2201 "bz2module.c"
        var $142=HEAP[$141]; //@line 2201 "bz2module.c"
        var $143=__PyString_Resize($ret, $142); //@line 2201 "bz2module.c"
        __label__ = 23; break; //@line 2201 "bz2module.c"
      case 23: // $bb24
        var $144=$bzs; //@line 2202 "bz2module.c"
        var $145=_BZ2_bzCompressEnd($144); //@line 2202 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2204 "bz2module.c"
        var $146=HEAP[$ret]; //@line 2205 "bz2module.c"
        $0=$146; //@line 2205 "bz2module.c"
        __label__ = 24; break; //@line 2205 "bz2module.c"
      case 24: // $bb25
        var $147=$0; //@line 2138 "bz2module.c"
        $retval=$147; //@line 2138 "bz2module.c"
        var $retval26=$retval; //@line 2138 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval26; //@line 2138 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _bz2_decompress($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 104; _memset(__stackBase__, 0, 104);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pdata=__stackBase__;
        var $data;
        var $datasize;
        var $bufsize;
        var $ret=__stackBase__+52;
        var $_bzs=__stackBase__+56;
        var $bzs;
        var $bzerror;
        $self_addr=$self;
        $args_addr=$args;
        $bufsize=8192; //@line 2221 "bz2module.c"
        $bzs=$_bzs; //@line 2224 "bz2module.c"
        var $1=$args_addr; //@line 2227 "bz2module.c"
        var $2=_PyArg_ParseTuple($1, __str73, allocate([$pdata,0,0,0], ["%struct.Py_buffer*",0,0,0], ALLOC_STACK)); //@line 2227 "bz2module.c"
        var $3=($2)==0; //@line 2227 "bz2module.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2227 "bz2module.c"
      case 1: // $bb
        $0=0; //@line 2228 "bz2module.c"
        __label__ = 28; break; //@line 2228 "bz2module.c"
      case 2: // $bb1
        var $4=$pdata; //@line 2229 "bz2module.c"
        var $5=HEAP[$4]; //@line 2229 "bz2module.c"
        $data=$5; //@line 2229 "bz2module.c"
        var $6=$pdata+8; //@line 2230 "bz2module.c"
        var $7=HEAP[$6]; //@line 2230 "bz2module.c"
        $datasize=$7; //@line 2230 "bz2module.c"
        var $8=$datasize; //@line 2232 "bz2module.c"
        var $9=($8)==0; //@line 2232 "bz2module.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2232 "bz2module.c"
      case 3: // $bb2
        _PyBuffer_Release($pdata); //@line 2233 "bz2module.c"
        var $10=_PyString_FromString(__str13); //@line 2234 "bz2module.c"
        $0=$10; //@line 2234 "bz2module.c"
        __label__ = 28; break; //@line 2234 "bz2module.c"
      case 4: // $bb3
        var $11=$bufsize; //@line 2237 "bz2module.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 2237 "bz2module.c"
        HEAP[$ret]=$12; //@line 2237 "bz2module.c"
        var $13=HEAP[$ret]; //@line 2238 "bz2module.c"
        var $14=($13)==0; //@line 2238 "bz2module.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2238 "bz2module.c"
      case 5: // $bb4
        _PyBuffer_Release($pdata); //@line 2239 "bz2module.c"
        $0=0; //@line 2240 "bz2module.c"
        __label__ = 28; break; //@line 2240 "bz2module.c"
      case 6: // $bb5
        var $15=$bzs; //@line 2243 "bz2module.c"
        var $16=$15; //@line 2243 "bz2module.c"
        _llvm_memset_p0i8_i32($16, 0, 48, 1, 0); //@line 2243 "bz2module.c"
        var $17=$bzs; //@line 2245 "bz2module.c"
        var $18=$17; //@line 2245 "bz2module.c"
        var $19=$data; //@line 2245 "bz2module.c"
        HEAP[$18]=$19; //@line 2245 "bz2module.c"
        var $20=$datasize; //@line 2246 "bz2module.c"
        var $21=$bzs; //@line 2246 "bz2module.c"
        var $22=$21+4; //@line 2246 "bz2module.c"
        HEAP[$22]=$20; //@line 2246 "bz2module.c"
        var $23=HEAP[$ret]; //@line 2247 "bz2module.c"
        var $24=$23; //@line 2247 "bz2module.c"
        var $25=$24+20; //@line 2247 "bz2module.c"
        var $26=$25; //@line 2247 "bz2module.c"
        var $27=$bzs; //@line 2247 "bz2module.c"
        var $28=$27+16; //@line 2247 "bz2module.c"
        HEAP[$28]=$26; //@line 2247 "bz2module.c"
        var $29=$bufsize; //@line 2248 "bz2module.c"
        var $30=$bzs; //@line 2248 "bz2module.c"
        var $31=$30+20; //@line 2248 "bz2module.c"
        HEAP[$31]=$29; //@line 2248 "bz2module.c"
        var $32=$bzs; //@line 2250 "bz2module.c"
        var $33=_BZ2_bzDecompressInit($32, 0, 0); //@line 2250 "bz2module.c"
        $bzerror=$33; //@line 2250 "bz2module.c"
        var $34=$bzerror; //@line 2251 "bz2module.c"
        var $35=($34)!=0; //@line 2251 "bz2module.c"
        if ($35) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 2251 "bz2module.c"
      case 7: // $bb6
        var $36=$bzerror; //@line 2252 "bz2module.c"
        _Util_CatchBZ2Error($36); //@line 2252 "bz2module.c"
        var $37=HEAP[$ret]; //@line 2253 "bz2module.c"
        var $38=$37; //@line 2253 "bz2module.c"
        var $39=HEAP[$38]; //@line 2253 "bz2module.c"
        var $40=($39) - 1; //@line 2253 "bz2module.c"
        var $41=$37; //@line 2253 "bz2module.c"
        HEAP[$41]=$40; //@line 2253 "bz2module.c"
        var $42=$37; //@line 2253 "bz2module.c"
        var $43=HEAP[$42]; //@line 2253 "bz2module.c"
        var $44=($43)==0; //@line 2253 "bz2module.c"
        if ($44) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2253 "bz2module.c"
      case 8: // $bb7
        var $45=HEAP[$ret]; //@line 2253 "bz2module.c"
        var $46=$45+4; //@line 2253 "bz2module.c"
        var $47=HEAP[$46]; //@line 2253 "bz2module.c"
        var $48=$47+24; //@line 2253 "bz2module.c"
        var $49=HEAP[$48]; //@line 2253 "bz2module.c"
        var $50=HEAP[$ret]; //@line 2253 "bz2module.c"
        FUNCTION_TABLE[$49]($50); //@line 2253 "bz2module.c"
        __label__ = 9; break; //@line 2253 "bz2module.c"
      case 9: // $bb8
        _PyBuffer_Release($pdata); //@line 2254 "bz2module.c"
        $0=0; //@line 2255 "bz2module.c"
        __label__ = 28; break; //@line 2255 "bz2module.c"
      case 10: // $bb9
        var $51=$bzs; //@line 2260 "bz2module.c"
        var $52=_BZ2_bzDecompress($51); //@line 2260 "bz2module.c"
        $bzerror=$52; //@line 2260 "bz2module.c"
        var $53=($52)==4; //@line 2262 "bz2module.c"
        if ($53) { __label__ = 25; break; } else { __label__ = 11; break; } //@line 2262 "bz2module.c"
      case 11: // $bb10
        var $54=$bzerror; //@line 2264 "bz2module.c"
        var $55=($54)!=0; //@line 2264 "bz2module.c"
        var $56=$bzs; //@line 2265 "bz2module.c"
        if ($55) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 2264 "bz2module.c"
      case 12: // $bb11
        var $57=_BZ2_bzDecompressEnd($56); //@line 2265 "bz2module.c"
        var $58=$bzerror; //@line 2266 "bz2module.c"
        _Util_CatchBZ2Error($58); //@line 2266 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2267 "bz2module.c"
        var $59=HEAP[$ret]; //@line 2268 "bz2module.c"
        var $60=$59; //@line 2268 "bz2module.c"
        var $61=HEAP[$60]; //@line 2268 "bz2module.c"
        var $62=($61) - 1; //@line 2268 "bz2module.c"
        var $63=$59; //@line 2268 "bz2module.c"
        HEAP[$63]=$62; //@line 2268 "bz2module.c"
        var $64=$59; //@line 2268 "bz2module.c"
        var $65=HEAP[$64]; //@line 2268 "bz2module.c"
        var $66=($65)==0; //@line 2268 "bz2module.c"
        if ($66) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2268 "bz2module.c"
      case 13: // $bb12
        var $67=HEAP[$ret]; //@line 2268 "bz2module.c"
        var $68=$67+4; //@line 2268 "bz2module.c"
        var $69=HEAP[$68]; //@line 2268 "bz2module.c"
        var $70=$69+24; //@line 2268 "bz2module.c"
        var $71=HEAP[$70]; //@line 2268 "bz2module.c"
        var $72=HEAP[$ret]; //@line 2268 "bz2module.c"
        FUNCTION_TABLE[$71]($72); //@line 2268 "bz2module.c"
        __label__ = 14; break; //@line 2268 "bz2module.c"
      case 14: // $bb13
        $0=0; //@line 2269 "bz2module.c"
        __label__ = 28; break; //@line 2269 "bz2module.c"
      case 15: // $bb14
        var $73=$56+4; //@line 2271 "bz2module.c"
        var $74=HEAP[$73]; //@line 2271 "bz2module.c"
        var $75=($74)==0; //@line 2271 "bz2module.c"
        var $76=$bzs; //@line 2272 "bz2module.c"
        if ($75) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 2271 "bz2module.c"
      case 16: // $bb15
        var $77=_BZ2_bzDecompressEnd($76); //@line 2272 "bz2module.c"
        var $78=HEAP[_PyExc_ValueError]; //@line 2273 "bz2module.c"
        _PyErr_SetString($78, __str80); //@line 2273 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2275 "bz2module.c"
        var $79=HEAP[$ret]; //@line 2276 "bz2module.c"
        var $80=$79; //@line 2276 "bz2module.c"
        var $81=HEAP[$80]; //@line 2276 "bz2module.c"
        var $82=($81) - 1; //@line 2276 "bz2module.c"
        var $83=$79; //@line 2276 "bz2module.c"
        HEAP[$83]=$82; //@line 2276 "bz2module.c"
        var $84=$79; //@line 2276 "bz2module.c"
        var $85=HEAP[$84]; //@line 2276 "bz2module.c"
        var $86=($85)==0; //@line 2276 "bz2module.c"
        if ($86) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2276 "bz2module.c"
      case 17: // $bb16
        var $87=HEAP[$ret]; //@line 2276 "bz2module.c"
        var $88=$87+4; //@line 2276 "bz2module.c"
        var $89=HEAP[$88]; //@line 2276 "bz2module.c"
        var $90=$89+24; //@line 2276 "bz2module.c"
        var $91=HEAP[$90]; //@line 2276 "bz2module.c"
        var $92=HEAP[$ret]; //@line 2276 "bz2module.c"
        FUNCTION_TABLE[$91]($92); //@line 2276 "bz2module.c"
        __label__ = 18; break; //@line 2276 "bz2module.c"
      case 18: // $bb17
        $0=0; //@line 2277 "bz2module.c"
        __label__ = 28; break; //@line 2277 "bz2module.c"
      case 19: // $bb18
        var $93=$76+20; //@line 2279 "bz2module.c"
        var $94=HEAP[$93]; //@line 2279 "bz2module.c"
        var $95=($94)==0; //@line 2279 "bz2module.c"
        if ($95) { __label__ = 20; break; } else { __label__ = 10; break; } //@line 2279 "bz2module.c"
      case 20: // $bb19
        var $96=$bufsize; //@line 2280 "bz2module.c"
        var $97=_Util_NewBufferSize($96); //@line 2280 "bz2module.c"
        $bufsize=$97; //@line 2280 "bz2module.c"
        var $98=$bufsize; //@line 2281 "bz2module.c"
        var $99=__PyString_Resize($ret, $98); //@line 2281 "bz2module.c"
        var $100=($99) < 0; //@line 2281 "bz2module.c"
        if ($100) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 2281 "bz2module.c"
      case 21: // $bb20
        var $101=$bzs; //@line 2282 "bz2module.c"
        var $102=_BZ2_bzDecompressEnd($101); //@line 2282 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2283 "bz2module.c"
        var $103=HEAP[$ret]; //@line 2284 "bz2module.c"
        var $104=$103; //@line 2284 "bz2module.c"
        var $105=HEAP[$104]; //@line 2284 "bz2module.c"
        var $106=($105) - 1; //@line 2284 "bz2module.c"
        var $107=$103; //@line 2284 "bz2module.c"
        HEAP[$107]=$106; //@line 2284 "bz2module.c"
        var $108=$103; //@line 2284 "bz2module.c"
        var $109=HEAP[$108]; //@line 2284 "bz2module.c"
        var $110=($109)==0; //@line 2284 "bz2module.c"
        if ($110) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 2284 "bz2module.c"
      case 22: // $bb21
        var $111=HEAP[$ret]; //@line 2284 "bz2module.c"
        var $112=$111+4; //@line 2284 "bz2module.c"
        var $113=HEAP[$112]; //@line 2284 "bz2module.c"
        var $114=$113+24; //@line 2284 "bz2module.c"
        var $115=HEAP[$114]; //@line 2284 "bz2module.c"
        var $116=HEAP[$ret]; //@line 2284 "bz2module.c"
        FUNCTION_TABLE[$115]($116); //@line 2284 "bz2module.c"
        __label__ = 23; break; //@line 2284 "bz2module.c"
      case 23: // $bb22
        $0=0; //@line 2285 "bz2module.c"
        __label__ = 28; break; //@line 2285 "bz2module.c"
      case 24: // $bb23
        var $117=HEAP[$ret]; //@line 2287 "bz2module.c"
        var $118=$117; //@line 2287 "bz2module.c"
        var $119=$118+20; //@line 2287 "bz2module.c"
        var $120=$119; //@line 2287 "bz2module.c"
        var $121=$bzs; //@line 2287 "bz2module.c"
        var $122=$121+28; //@line 2287 "bz2module.c"
        var $123=HEAP[$122]; //@line 2287 "bz2module.c"
        var $124=($123); //@line 2287 "bz2module.c"
        var $125=($124) * 4294967296;
        var $126=$bzs; //@line 2287 "bz2module.c"
        var $127=$126+24; //@line 2287 "bz2module.c"
        var $128=HEAP[$127]; //@line 2287 "bz2module.c"
        var $129=($128); //@line 2287 "bz2module.c"
        var $130=($129) + ($125); //@line 2287 "bz2module.c"
        var $131=((($130)) & 4294967295); //@line 2287 "bz2module.c"
        var $132=$120+$131; //@line 2287 "bz2module.c"
        var $133=$bzs; //@line 2287 "bz2module.c"
        var $134=$133+16; //@line 2287 "bz2module.c"
        HEAP[$134]=$132; //@line 2287 "bz2module.c"
        var $135=$bzs; //@line 2288 "bz2module.c"
        var $136=$135+16; //@line 2288 "bz2module.c"
        var $137=HEAP[$136]; //@line 2288 "bz2module.c"
        var $138=($137); //@line 2288 "bz2module.c"
        var $139=HEAP[$ret]; //@line 2288 "bz2module.c"
        var $140=$139; //@line 2288 "bz2module.c"
        var $141=$140+20; //@line 2288 "bz2module.c"
        var $142=($141); //@line 2288 "bz2module.c"
        var $_neg=0 - ($142);
        var $143=$bufsize; //@line 2288 "bz2module.c"
        var $_neg1=0 - ($138);
        var $_neg_neg=0 - ($_neg);
        var $_neg2=($143) + ($_neg1);
        var $144=($_neg2) + ($_neg_neg);
        var $145=$bzs; //@line 2288 "bz2module.c"
        var $146=$145+20; //@line 2288 "bz2module.c"
        HEAP[$146]=$144; //@line 2288 "bz2module.c"
        __label__ = 10; break; //@line 2288 "bz2module.c"
      case 25: // $bb25
        var $147=$bzs; //@line 2292 "bz2module.c"
        var $148=$147+20; //@line 2292 "bz2module.c"
        var $149=HEAP[$148]; //@line 2292 "bz2module.c"
        var $150=($149)!=0; //@line 2292 "bz2module.c"
        if ($150) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2292 "bz2module.c"
      case 26: // $bb26
        var $151=$bzs; //@line 2293 "bz2module.c"
        var $152=$151+24; //@line 2293 "bz2module.c"
        var $153=HEAP[$152]; //@line 2293 "bz2module.c"
        var $154=__PyString_Resize($ret, $153); //@line 2293 "bz2module.c"
        __label__ = 27; break; //@line 2293 "bz2module.c"
      case 27: // $bb27
        var $155=$bzs; //@line 2294 "bz2module.c"
        var $156=_BZ2_bzDecompressEnd($155); //@line 2294 "bz2module.c"
        _PyBuffer_Release($pdata); //@line 2295 "bz2module.c"
        var $157=HEAP[$ret]; //@line 2297 "bz2module.c"
        $0=$157; //@line 2297 "bz2module.c"
        __label__ = 28; break; //@line 2297 "bz2module.c"
      case 28: // $bb28
        var $158=$0; //@line 2228 "bz2module.c"
        $retval=$158; //@line 2228 "bz2module.c"
        var $retval29=$retval; //@line 2228 "bz2module.c"
        STACKTOP = __stackBase__;
        return $retval29; //@line 2228 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initbz2() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $0=_PyType_Ready(_BZ2File_Type); //@line 2323 "bz2module.c"
        var $1=($0) < 0; //@line 2323 "bz2module.c"
        if ($1) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 2323 "bz2module.c"
      case 1: // $bb
        var $2=_PyType_Ready(_BZ2Comp_Type); //@line 2325 "bz2module.c"
        var $3=($2) < 0; //@line 2325 "bz2module.c"
        if ($3) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 2325 "bz2module.c"
      case 2: // $bb1
        var $4=_PyType_Ready(_BZ2Decomp_Type); //@line 2327 "bz2module.c"
        var $5=($4) < 0; //@line 2327 "bz2module.c"
        if ($5) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 2327 "bz2module.c"
      case 3: // $bb2
        var $6=_Py_InitModule4(__str81, _bz2_methods, _bz2__doc__, 0, 1013); //@line 2330 "bz2module.c"
        $m=$6; //@line 2330 "bz2module.c"
        var $7=$m; //@line 2331 "bz2module.c"
        var $8=($7)==0; //@line 2331 "bz2module.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 2331 "bz2module.c"
      case 4: // $bb3
        var $9=_PyString_FromString(___author__); //@line 2334 "bz2module.c"
        var $10=$m; //@line 2334 "bz2module.c"
        var $11=_PyModule_AddObject($10, __str82, $9); //@line 2334 "bz2module.c"
        var $12=HEAP[_BZ2File_Type]; //@line 2336 "bz2module.c"
        var $13=($12) + 1; //@line 2336 "bz2module.c"
        HEAP[_BZ2File_Type]=$13; //@line 2336 "bz2module.c"
        var $14=$m; //@line 2337 "bz2module.c"
        var $15=_PyModule_AddObject($14, __str83, _BZ2File_Type); //@line 2337 "bz2module.c"
        var $16=HEAP[_BZ2Comp_Type]; //@line 2339 "bz2module.c"
        var $17=($16) + 1; //@line 2339 "bz2module.c"
        HEAP[_BZ2Comp_Type]=$17; //@line 2339 "bz2module.c"
        var $18=$m; //@line 2340 "bz2module.c"
        var $19=_PyModule_AddObject($18, __str84, _BZ2Comp_Type); //@line 2340 "bz2module.c"
        var $20=HEAP[_BZ2Decomp_Type]; //@line 2342 "bz2module.c"
        var $21=($20) + 1; //@line 2342 "bz2module.c"
        HEAP[_BZ2Decomp_Type]=$21; //@line 2342 "bz2module.c"
        var $22=$m; //@line 2343 "bz2module.c"
        var $23=_PyModule_AddObject($22, __str85, _BZ2Decomp_Type); //@line 2343 "bz2module.c"
        __label__ = 5; break; //@line 2343 "bz2module.c"
      case 5: // $return
        ;
        return; //@line 2324 "bz2module.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initbz2"] = _initbz2;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_BZ2File_read,0,_BZ2File_readline,0,_BZ2File_readlines,0,_BZ2File_getiter,0,_BZ2File_write,0,_BZ2File_writelines,0,_BZ2File_seek,0,_BZ2File_tell,0,_BZ2File_close,0,_BZ2File_enter,0,_BZ2File_exit,0,_BZ2File_get_closed,0,_BZ2File_get_newlines,0,_BZ2File_get_mode,0,_BZ2File_get_name,0,_BZ2File_dealloc,0,_PyObject_GenericGetAttr,0,_PyObject_GenericSetAttr,0,_BZ2File_iternext,0,_BZ2File_init,0,_PyType_GenericAlloc,0,_PyType_GenericNew,0,_PyObject_Free,0,_BZ2Comp_compress,0,_BZ2Comp_flush,0,_BZ2Comp_dealloc,0,_BZ2Comp_init,0,_BZ2Decomp_decompress,0,_BZ2Decomp_dealloc,0,_BZ2Decomp_init,0,_bz2_compress,0,_bz2_decompress,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
___author__=allocate([84,104,101,32,98,122,50,32,112,121,116,104,111,110,32,109,111,100,117,108,101,32,119,97,115,32,119,114,105,116,116,101,110,32,98,121,58,10,10,32,32,32,32,71,117,115,116,97,118,111,32,78,105,101,109,101,121,101,114,32,60,110,105,101,109,101,121,101,114,64,99,111,110,101,99,116,105,118,97,46,99,111,109,62,10,0] /* The bz2 python modul */, "i8", ALLOC_NORMAL);
__str=allocate([77,105,120,105,110,103,32,105,116,101,114,97,116,105,111,110,32,97,110,100,32,114,101,97,100,32,109,101,116,104,111,100,115,32,119,111,117,108,100,32,108,111,115,101,32,100,97,116,97,0] /* Mixing iteration and */, "i8", ALLOC_NORMAL);
__str1=allocate([116,104,101,32,98,122,50,32,108,105,98,114,97,114,121,32,119,97,115,32,110,111,116,32,99,111,109,112,105,108,101,100,32,99,111,114,114,101,99,116,108,121,0] /* the bz2 library was  */, "i8", ALLOC_NORMAL);
__str2=allocate([116,104,101,32,98,122,50,32,108,105,98,114,97,114,121,32,104,97,115,32,114,101,99,101,105,118,101,100,32,119,114,111,110,103,32,112,97,114,97,109,101,116,101,114,115,0] /* the bz2 library has  */, "i8", ALLOC_NORMAL);
__str3=allocate([105,110,118,97,108,105,100,32,100,97,116,97,32,115,116,114,101,97,109,0] /* invalid data stream\ */, "i8", ALLOC_NORMAL);
__str4=allocate([117,110,107,110,111,119,110,32,73,79,32,101,114,114,111,114,0] /* unknown IO error\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([99,111,109,112,114,101,115,115,101,100,32,102,105,108,101,32,101,110,100,101,100,32,98,101,102,111,114,101,32,116,104,101,32,108,111,103,105,99,97,108,32,101,110,100,45,111,102,45,115,116,114,101,97,109,32,119,97,115,32,100,101,116,101,99,116,101,100,0] /* compressed file ende */, "i8", ALLOC_NORMAL);
__str6=allocate([119,114,111,110,103,32,115,101,113,117,101,110,99,101,32,111,102,32,98,122,50,32,108,105,98,114,97,114,121,32,99,111,109,109,97,110,100,115,32,117,115,101,100,0] /* wrong sequence of bz */, "i8", ALLOC_NORMAL);
__str7=allocate([108,105,110,101,32,105,115,32,108,111,110,103,101,114,32,116,104,97,110,32,97,32,80,121,116,104,111,110,32,115,116,114,105,110,103,32,99,97,110,32,104,111,108,100,0] /* line is longer than  */, "i8", ALLOC_NORMAL);
__str8=allocate([98,117,102,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* buf != ((void _)0)\0 */, "i8", ALLOC_NORMAL);
__str9=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,98,122,50,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/b */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8675=allocate([85,116,105,108,95,85,110,105,118,78,101,119,108,105,110,101,82,101,97,100,0] /* Util_UnivNewlineRead */, "i8", ALLOC_NORMAL);
__str10=allocate([115,116,114,101,97,109,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* stream != ((void _)0 */, "i8", ALLOC_NORMAL);
__str11=allocate([110,114,101,97,100,32,60,61,32,110,0] /* nread <= n\00 */, "i8", ALLOC_NORMAL);
_BZ2File_read__doc__=allocate([114,101,97,100,40,91,115,105,122,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,97,100,32,97,116,32,109,111,115,116,32,115,105,122,101,32,117,110,99,111,109,112,114,101,115,115,101,100,32,98,121,116,101,115,44,32,114,101,116,117,114,110,101,100,32,97,115,32,97,32,115,116,114,105,110,103,46,32,73,102,32,116,104,101,32,115,105,122,101,10,97,114,103,117,109,101,110,116,32,105,115,32,110,101,103,97,116,105,118,101,32,111,114,32,111,109,105,116,116,101,100,44,32,114,101,97,100,32,117,110,116,105,108,32,69,79,70,32,105,115,32,114,101,97,99,104,101,100,46,10,0] /* read([size]) -> stri */, "i8", ALLOC_NORMAL);
__str12=allocate([124,108,58,114,101,97,100,0] /* |l:read\00 */, "i8", ALLOC_NORMAL);
__str13=allocate(1, "i8", ALLOC_NORMAL);
__str14=allocate([73,47,79,32,111,112,101,114,97,116,105,111,110,32,111,110,32,99,108,111,115,101,100,32,102,105,108,101,0] /* I/O operation on clo */, "i8", ALLOC_NORMAL);
__str15=allocate([102,105,108,101,32,105,115,32,110,111,116,32,114,101,97,100,121,32,102,111,114,32,114,101,97,100,105,110,103,0] /* file is not ready fo */, "i8", ALLOC_NORMAL);
__str16=allocate([114,101,113,117,101,115,116,101,100,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,32,105,115,32,109,111,114,101,32,116,104,97,110,32,97,32,80,121,116,104,111,110,32,115,116,114,105,110,103,32,99,97,110,32,104,111,108,100,0] /* requested number of  */, "i8", ALLOC_NORMAL);
_BZ2File_readline__doc__=allocate([114,101,97,100,108,105,110,101,40,91,115,105,122,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,110,101,120,116,32,108,105,110,101,32,102,114,111,109,32,116,104,101,32,102,105,108,101,44,32,97,115,32,97,32,115,116,114,105,110,103,44,32,114,101,116,97,105,110,105,110,103,32,110,101,119,108,105,110,101,46,10,65,32,110,111,110,45,110,101,103,97,116,105,118,101,32,115,105,122,101,32,97,114,103,117,109,101,110,116,32,119,105,108,108,32,108,105,109,105,116,32,116,104,101,32,109,97,120,105,109,117,109,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,32,116,111,10,114,101,116,117,114,110,32,40,97,110,32,105,110,99,111,109,112,108,101,116,101,32,108,105,110,101,32,109,97,121,32,98,101,32,114,101,116,117,114,110,101,100,32,116,104,101,110,41,46,32,82,101,116,117,114,110,32,97,110,32,101,109,112,116,121,10,115,116,114,105,110,103,32,97,116,32,69,79,70,46,10,0] /* readline([size]) ->  */, "i8", ALLOC_NORMAL);
__str17=allocate([124,105,58,114,101,97,100,108,105,110,101,0] /* |i:readline\00 */, "i8", ALLOC_NORMAL);
_BZ2File_readlines__doc__=allocate([114,101,97,100,108,105,110,101,115,40,91,115,105,122,101,93,41,32,45,62,32,108,105,115,116,10,10,67,97,108,108,32,114,101,97,100,108,105,110,101,40,41,32,114,101,112,101,97,116,101,100,108,121,32,97,110,100,32,114,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,108,105,110,101,115,32,114,101,97,100,46,10,84,104,101,32,111,112,116,105,111,110,97,108,32,115,105,122,101,32,97,114,103,117,109,101,110,116,44,32,105,102,32,103,105,118,101,110,44,32,105,115,32,97,110,32,97,112,112,114,111,120,105,109,97,116,101,32,98,111,117,110,100,32,111,110,32,116,104,101,10,116,111,116,97,108,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,32,105,110,32,116,104,101,32,108,105,110,101,115,32,114,101,116,117,114,110,101,100,46,10,0] /* readlines([size]) -> */, "i8", ALLOC_NORMAL);
__str18=allocate([124,108,58,114,101,97,100,108,105,110,101,115,0] /* |l:readlines\00 */, "i8", ALLOC_NORMAL);
_BZ2File_xreadlines__doc__=allocate([120,114,101,97,100,108,105,110,101,115,40,41,32,45,62,32,115,101,108,102,10,10,70,111,114,32,98,97,99,107,119,97,114,100,32,99,111,109,112,97,116,105,98,105,108,105,116,121,46,32,66,90,50,70,105,108,101,32,111,98,106,101,99,116,115,32,110,111,119,32,105,110,99,108,117,100,101,32,116,104,101,32,112,101,114,102,111,114,109,97,110,99,101,10,111,112,116,105,109,105,122,97,116,105,111,110,115,32,112,114,101,118,105,111,117,115,108,121,32,105,109,112,108,101,109,101,110,116,101,100,32,105,110,32,116,104,101,32,120,114,101,97,100,108,105,110,101,115,32,109,111,100,117,108,101,46,10,0] /* xreadlines() -> self */, "i8", ALLOC_NORMAL);
_BZ2File_write__doc__=allocate([119,114,105,116,101,40,100,97,116,97,41,32,45,62,32,78,111,110,101,10,10,87,114,105,116,101,32,116,104,101,32,39,100,97,116,97,39,32,115,116,114,105,110,103,32,116,111,32,102,105,108,101,46,32,78,111,116,101,32,116,104,97,116,32,100,117,101,32,116,111,32,98,117,102,102,101,114,105,110,103,44,32,99,108,111,115,101,40,41,32,109,97,121,10,98,101,32,110,101,101,100,101,100,32,98,101,102,111,114,101,32,116,104,101,32,102,105,108,101,32,111,110,32,100,105,115,107,32,114,101,102,108,101,99,116,115,32,116,104,101,32,100,97,116,97,32,119,114,105,116,116,101,110,46,10,0] /* write(data) -> None\ */, "i8", ALLOC_NORMAL);
__str19=allocate([115,42,58,119,114,105,116,101,0] /* s_:write\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([102,105,108,101,32,105,115,32,110,111,116,32,114,101,97,100,121,32,102,111,114,32,119,114,105,116,105,110,103,0] /* file is not ready fo */, "i8", ALLOC_NORMAL);
_BZ2File_writelines__doc__=allocate([119,114,105,116,101,108,105,110,101,115,40,115,101,113,117,101,110,99,101,95,111,102,95,115,116,114,105,110,103,115,41,32,45,62,32,78,111,110,101,10,10,87,114,105,116,101,32,116,104,101,32,115,101,113,117,101,110,99,101,32,111,102,32,115,116,114,105,110,103,115,32,116,111,32,116,104,101,32,102,105,108,101,46,32,78,111,116,101,32,116,104,97,116,32,110,101,119,108,105,110,101,115,32,97,114,101,32,110,111,116,10,97,100,100,101,100,46,32,84,104,101,32,115,101,113,117,101,110,99,101,32,99,97,110,32,98,101,32,97,110,121,32,105,116,101,114,97,98,108,101,32,111,98,106,101,99,116,32,112,114,111,100,117,99,105,110,103,32,115,116,114,105,110,103,115,46,32,84,104,105,115,32,105,115,10,101,113,117,105,118,97,108,101,110,116,32,116,111,32,99,97,108,108,105,110,103,32,119,114,105,116,101,40,41,32,102,111,114,32,101,97,99,104,32,115,116,114,105,110,103,46,10,0] /* writelines(sequence_ */, "i8", ALLOC_NORMAL);
__str21=allocate([119,114,105,116,101,108,105,110,101,115,40,41,32,114,101,113,117,105,114,101,115,32,97,110,32,105,116,101,114,97,98,108,101,32,97,114,103,117,109,101,110,116,0] /* writelines() require */, "i8", ALLOC_NORMAL);
__str22=allocate([119,114,105,116,101,108,105,110,101,115,40,41,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,115,101,113,117,101,110,99,101,32,111,102,32,115,116,114,105,110,103,115,0] /* writelines() argumen */, "i8", ALLOC_NORMAL);
_BZ2File_seek__doc__=allocate([115,101,101,107,40,111,102,102,115,101,116,32,91,44,32,119,104,101,110,99,101,93,41,32,45,62,32,78,111,110,101,10,10,77,111,118,101,32,116,111,32,110,101,119,32,102,105,108,101,32,112,111,115,105,116,105,111,110,46,32,65,114,103,117,109,101,110,116,32,111,102,102,115,101,116,32,105,115,32,97,32,98,121,116,101,32,99,111,117,110,116,46,32,79,112,116,105,111,110,97,108,10,97,114,103,117,109,101,110,116,32,119,104,101,110,99,101,32,100,101,102,97,117,108,116,115,32,116,111,32,48,32,40,111,102,102,115,101,116,32,102,114,111,109,32,115,116,97,114,116,32,111,102,32,102,105,108,101,44,32,111,102,102,115,101,116,10,115,104,111,117,108,100,32,98,101,32,62,61,32,48,41,59,32,111,116,104,101,114,32,118,97,108,117,101,115,32,97,114,101,32,49,32,40,109,111,118,101,32,114,101,108,97,116,105,118,101,32,116,111,32,99,117,114,114,101,110,116,32,112,111,115,105,116,105,111,110,44,10,112,111,115,105,116,105,118,101,32,111,114,32,110,101,103,97,116,105,118,101,41,44,32,97,110,100,32,50,32,40,109,111,118,101,32,114,101,108,97,116,105,118,101,32,116,111,32,101,110,100,32,111,102,32,102,105,108,101,44,32,117,115,117,97,108,108,121,10,110,101,103,97,116,105,118,101,44,32,97,108,116,104,111,117,103,104,32,109,97,110,121,32,112,108,97,116,102,111,114,109,115,32,97,108,108,111,119,32,115,101,101,107,105,110,103,32,98,101,121,111,110,100,32,116,104,101,32,101,110,100,32,111,102,32,97,32,102,105,108,101,41,46,10,10,78,111,116,101,32,116,104,97,116,32,115,101,101,107,105,110,103,32,111,102,32,98,122,50,32,102,105,108,101,115,32,105,115,32,101,109,117,108,97,116,101,100,44,32,97,110,100,32,100,101,112,101,110,100,105,110,103,32,111,110,32,116,104,101,32,112,97,114,97,109,101,116,101,114,115,10,116,104,101,32,111,112,101,114,97,116,105,111,110,32,109,97,121,32,98,101,32,101,120,116,114,101,109,101,108,121,32,115,108,111,119,46,10,0] /* seek(offset [, whenc */, "i8", ALLOC_NORMAL);
__str23=allocate([79,124,105,58,115,101,101,107,0] /* O|i:seek\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([115,101,101,107,32,119,111,114,107,115,32,111,110,108,121,32,119,104,105,108,101,32,114,101,97,100,105,110,103,0] /* seek works only whil */, "i8", ALLOC_NORMAL);
__str25=allocate([115,101,108,102,45,62,109,111,100,101,32,33,61,32,50,0] /* self->mode != 2\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9317=allocate([66,90,50,70,105,108,101,95,115,101,101,107,0] /* BZ2File_seek\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([115,101,101,107,0] /* seek\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([40,105,41,0] /* (i)\00 */, "i8", ALLOC_NORMAL);
_BZ2File_tell__doc__=allocate([116,101,108,108,40,41,32,45,62,32,105,110,116,10,10,82,101,116,117,114,110,32,116,104,101,32,99,117,114,114,101,110,116,32,102,105,108,101,32,112,111,115,105,116,105,111,110,44,32,97,110,32,105,110,116,101,103,101,114,32,40,109,97,121,32,98,101,32,97,32,108,111,110,103,32,105,110,116,101,103,101,114,41,46,10,0] /* tell() -> int\0A\0AR */, "i8", ALLOC_NORMAL);
_BZ2File_close__doc__=allocate([99,108,111,115,101,40,41,32,45,62,32,78,111,110,101,32,111,114,32,40,112,101,114,104,97,112,115,41,32,97,110,32,105,110,116,101,103,101,114,10,10,67,108,111,115,101,32,116,104,101,32,102,105,108,101,46,32,83,101,116,115,32,100,97,116,97,32,97,116,116,114,105,98,117,116,101,32,46,99,108,111,115,101,100,32,116,111,32,116,114,117,101,46,32,65,32,99,108,111,115,101,100,32,102,105,108,101,10,99,97,110,110,111,116,32,98,101,32,117,115,101,100,32,102,111,114,32,102,117,114,116,104,101,114,32,73,47,79,32,111,112,101,114,97,116,105,111,110,115,46,32,99,108,111,115,101,40,41,32,109,97,121,32,98,101,32,99,97,108,108,101,100,32,109,111,114,101,10,116,104,97,110,32,111,110,99,101,32,119,105,116,104,111,117,116,32,101,114,114,111,114,46,10,0] /* close() -> None or ( */, "i8", ALLOC_NORMAL);
__str28=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
_BZ2File_enter_doc=allocate([95,95,101,110,116,101,114,95,95,40,41,32,45,62,32,115,101,108,102,46,0] /* __enter__() -> self. */, "i8", ALLOC_NORMAL);
_BZ2File_exit_doc=allocate([95,95,101,120,105,116,95,95,40,42,101,120,99,105,110,102,111,41,32,45,62,32,78,111,110,101,46,32,32,67,108,111,115,101,115,32,116,104,101,32,102,105,108,101,46,0] /* __exit__(_excinfo) - */, "i8", ALLOC_NORMAL);
__str29=allocate([114,101,97,100,0] /* read\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([114,101,97,100,108,105,110,101,0] /* readline\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([114,101,97,100,108,105,110,101,115,0] /* readlines\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([120,114,101,97,100,108,105,110,101,115,0] /* xreadlines\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([119,114,105,116,101,0] /* write\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([119,114,105,116,101,108,105,110,101,115,0] /* writelines\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([116,101,108,108,0] /* tell\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([95,95,101,110,116,101,114,95,95,0] /* __enter__\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([95,95,101,120,105,116,95,95,0] /* __exit__\00 */, "i8", ALLOC_NORMAL);
_BZ2File_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str38=allocate([13,0] /* \0D\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([10,0] /* \0A\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([40,115,115,41,0] /* (ss)\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([13,10,0] /* \0D\0A\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([40,115,115,115,41,0] /* (sss)\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([85,110,107,110,111,119,110,32,110,101,119,108,105,110,101,115,32,118,97,108,117,101,32,48,120,37,120,10,0] /* Unknown newlines val */, "i8", ALLOC_NORMAL);
__str44=allocate([109,111,100,101,0] /* mode\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([110,97,109,101,0] /* name\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([99,108,111,115,101,100,0] /* closed\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([84,114,117,101,32,105,102,32,116,104,101,32,102,105,108,101,32,105,115,32,99,108,111,115,101,100,0] /* True if the file is  */, "i8", ALLOC_NORMAL);
__str48=allocate([110,101,119,108,105,110,101,115,0] /* newlines\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([101,110,100,45,111,102,45,108,105,110,101,32,99,111,110,118,101,110,116,105,111,110,32,117,115,101,100,32,105,110,32,116,104,105,115,32,102,105,108,101,0] /* end-of-line conventi */, "i8", ALLOC_NORMAL);
__str50=allocate([102,105,108,101,32,109,111,100,101,32,40,39,114,39,44,32,39,119,39,44,32,111,114,32,39,85,39,41,0] /* file mode ('r', 'w', */, "i8", ALLOC_NORMAL);
__str51=allocate([102,105,108,101,32,110,97,109,101,0] /* file name\00 */, "i8", ALLOC_NORMAL);
_BZ2File_getset=allocate(100, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str52=allocate([115,111,102,116,115,112,97,99,101,0] /* softspace\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([102,108,97,103,32,105,110,100,105,99,97,116,105,110,103,32,116,104,97,116,32,97,32,115,112,97,99,101,32,110,101,101,100,115,32,116,111,32,98,101,32,112,114,105,110,116,101,100,59,32,117,115,101,100,32,98,121,32,112,114,105,110,116,0] /* flag indicating that */, "i8", ALLOC_NORMAL);
_BZ2File_members=allocate([0, 0, 0, 0, 1, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str54=allocate([114,0] /* r\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([79,124,115,105,105,58,66,90,50,70,105,108,101,0] /* O|sii:BZ2File\00 */, "i8", ALLOC_NORMAL);
_kwlist_9585=allocate(20, "i8*", ALLOC_NORMAL);
__str56=allocate([102,105,108,101,110,97,109,101,0] /* filename\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([98,117,102,102,101,114,105,110,103,0] /* buffering\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([99,111,109,112,114,101,115,115,108,101,118,101,108,0] /* compresslevel\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([99,111,109,112,114,101,115,115,108,101,118,101,108,32,109,117,115,116,32,98,101,32,98,101,116,119,101,101,110,32,49,32,97,110,100,32,57,0] /* compresslevel must b */, "i8", ALLOC_NORMAL);
__str60=allocate([105,110,118,97,108,105,100,32,109,111,100,101,32,99,104,97,114,32,37,99,0] /* invalid mode char %c */, "i8", ALLOC_NORMAL);
__str61=allocate([114,98,0] /* rb\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([119,98,0] /* wb\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([40,79,115,105,41,0] /* (Osi)\00 */, "i8", ALLOC_NORMAL);
_BZ2File__doc__=allocate([66,90,50,70,105,108,101,40,110,97,109,101,32,91,44,32,109,111,100,101,61,39,114,39,44,32,98,117,102,102,101,114,105,110,103,61,48,44,32,99,111,109,112,114,101,115,115,108,101,118,101,108,61,57,93,41,32,45,62,32,102,105,108,101,32,111,98,106,101,99,116,10,10,79,112,101,110,32,97,32,98,122,50,32,102,105,108,101,46,32,84,104,101,32,109,111,100,101,32,99,97,110,32,98,101,32,39,114,39,32,111,114,32,39,119,39,44,32,102,111,114,32,114,101,97,100,105,110,103,32,40,100,101,102,97,117,108,116,41,32,111,114,10,119,114,105,116,105,110,103,46,32,87,104,101,110,32,111,112,101,110,101,100,32,102,111,114,32,119,114,105,116,105,110,103,44,32,116,104,101,32,102,105,108,101,32,119,105,108,108,32,98,101,32,99,114,101,97,116,101,100,32,105,102,32,105,116,32,100,111,101,115,110,39,116,10,101,120,105,115,116,44,32,97,110,100,32,116,114,117,110,99,97,116,101,100,32,111,116,104,101,114,119,105,115,101,46,32,73,102,32,116,104,101,32,98,117,102,102,101,114,105,110,103,32,97,114,103,117,109,101,110,116,32,105,115,32,103,105,118,101,110,44,32,48,32,109,101,97,110,115,10,117,110,98,117,102,102,101,114,101,100,44,32,97,110,100,32,108,97,114,103,101,114,32,110,117,109,98,101,114,115,32,115,112,101,99,105,102,121,32,116,104,101,32,98,117,102,102,101,114,32,115,105,122,101,46,32,73,102,32,99,111,109,112,114,101,115,115,108,101,118,101,108,10,105,115,32,103,105,118,101,110,44,32,109,117,115,116,32,98,101,32,97,32,110,117,109,98,101,114,32,98,101,116,119,101,101,110,32,49,32,97,110,100,32,57,46,10,10,65,100,100,32,97,32,39,85,39,32,116,111,32,109,111,100,101,32,116,111,32,111,112,101,110,32,116,104,101,32,102,105,108,101,32,102,111,114,32,105,110,112,117,116,32,119,105,116,104,32,117,110,105,118,101,114,115,97,108,32,110,101,119,108,105,110,101,10,115,117,112,112,111,114,116,46,32,65,110,121,32,108,105,110,101,32,101,110,100,105,110,103,32,105,110,32,116,104,101,32,105,110,112,117,116,32,102,105,108,101,32,119,105,108,108,32,98,101,32,115,101,101,110,32,97,115,32,97,32,39,92,110,39,32,105,110,10,80,121,116,104,111,110,46,32,65,108,115,111,44,32,97,32,102,105,108,101,32,115,111,32,111,112,101,110,101,100,32,103,97,105,110,115,32,116,104,101,32,97,116,116,114,105,98,117,116,101,32,39,110,101,119,108,105,110,101,115,39,59,32,116,104,101,32,118,97,108,117,101,10,102,111,114,32,116,104,105,115,32,97,116,116,114,105,98,117,116,101,32,105,115,32,111,110,101,32,111,102,32,78,111,110,101,32,40,110,111,32,110,101,119,108,105,110,101,32,114,101,97,100,32,121,101,116,41,44,32,39,92,114,39,44,32,39,92,110,39,44,10,39,92,114,92,110,39,32,111,114,32,97,32,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,97,108,108,32,116,104,101,32,110,101,119,108,105,110,101,32,116,121,112,101,115,32,115,101,101,110,46,32,85,110,105,118,101,114,115,97,108,10,110,101,119,108,105,110,101,115,32,97,114,101,32,97,118,97,105,108,97,98,108,101,32,111,110,108,121,32,119,104,101,110,32,114,101,97,100,105,110,103,46,10,0] /* BZ2File(name [, mode */, "i8", ALLOC_NORMAL);
__str64=allocate([98,122,50,46,66,90,50,70,105,108,101,0] /* bz2.BZ2File\00 */, "i8", ALLOC_NORMAL);
_BZ2File_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_BZ2Comp_compress__doc__=allocate([99,111,109,112,114,101,115,115,40,100,97,116,97,41,32,45,62,32,115,116,114,105,110,103,10,10,80,114,111,118,105,100,101,32,109,111,114,101,32,100,97,116,97,32,116,111,32,116,104,101,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,32,73,116,32,119,105,108,108,32,114,101,116,117,114,110,32,99,104,117,110,107,115,32,111,102,10,99,111,109,112,114,101,115,115,101,100,32,100,97,116,97,32,119,104,101,110,101,118,101,114,32,112,111,115,115,105,98,108,101,46,32,87,104,101,110,32,121,111,117,39,118,101,32,102,105,110,105,115,104,101,100,32,112,114,111,118,105,100,105,110,103,32,100,97,116,97,10,116,111,32,99,111,109,112,114,101,115,115,44,32,99,97,108,108,32,116,104,101,32,102,108,117,115,104,40,41,32,109,101,116,104,111,100,32,116,111,32,102,105,110,105,115,104,32,116,104,101,32,99,111,109,112,114,101,115,115,105,111,110,32,112,114,111,99,101,115,115,44,10,97,110,100,32,114,101,116,117,114,110,32,119,104,97,116,32,105,115,32,108,101,102,116,32,105,110,32,116,104,101,32,105,110,116,101,114,110,97,108,32,98,117,102,102,101,114,115,46,10,0] /* compress(data) -> st */, "i8", ALLOC_NORMAL);
__str65=allocate([115,42,58,99,111,109,112,114,101,115,115,0] /* s_:compress\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([116,104,105,115,32,111,98,106,101,99,116,32,119,97,115,32,97,108,114,101,97,100,121,32,102,108,117,115,104,101,100,0] /* this object was alre */, "i8", ALLOC_NORMAL);
_BZ2Comp_flush__doc__=allocate([102,108,117,115,104,40,41,32,45,62,32,115,116,114,105,110,103,10,10,70,105,110,105,115,104,32,116,104,101,32,99,111,109,112,114,101,115,115,105,111,110,32,112,114,111,99,101,115,115,32,97,110,100,32,114,101,116,117,114,110,32,119,104,97,116,32,105,115,32,108,101,102,116,32,105,110,32,105,110,116,101,114,110,97,108,32,98,117,102,102,101,114,115,46,10,89,111,117,32,109,117,115,116,32,110,111,116,32,117,115,101,32,116,104,101,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,32,97,102,116,101,114,32,99,97,108,108,105,110,103,32,116,104,105,115,32,109,101,116,104,111,100,46,10,0] /* flush() -> string\0A */, "i8", ALLOC_NORMAL);
__str67=allocate([111,98,106,101,99,116,32,119,97,115,32,97,108,114,101,97,100,121,32,102,108,117,115,104,101,100,0] /* object was already f */, "i8", ALLOC_NORMAL);
__str68=allocate([99,111,109,112,114,101,115,115,0] /* compress\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([102,108,117,115,104,0] /* flush\00 */, "i8", ALLOC_NORMAL);
_BZ2Comp_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str70=allocate([124,105,58,66,90,50,67,111,109,112,114,101,115,115,111,114,0] /* |i:BZ2Compressor\00 */, "i8", ALLOC_NORMAL);
_kwlist_9935=allocate(8, "i8*", ALLOC_NORMAL);
_BZ2Comp__doc__=allocate([66,90,50,67,111,109,112,114,101,115,115,111,114,40,91,99,111,109,112,114,101,115,115,108,101,118,101,108,61,57,93,41,32,45,62,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,10,10,67,114,101,97,116,101,32,97,32,110,101,119,32,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,32,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,117,115,101,100,32,116,111,32,99,111,109,112,114,101,115,115,10,100,97,116,97,32,115,101,113,117,101,110,116,105,97,108,108,121,46,32,73,102,32,121,111,117,32,119,97,110,116,32,116,111,32,99,111,109,112,114,101,115,115,32,100,97,116,97,32,105,110,32,111,110,101,32,115,104,111,116,44,32,117,115,101,32,116,104,101,10,99,111,109,112,114,101,115,115,40,41,32,102,117,110,99,116,105,111,110,32,105,110,115,116,101,97,100,46,32,84,104,101,32,99,111,109,112,114,101,115,115,108,101,118,101,108,32,112,97,114,97,109,101,116,101,114,44,32,105,102,32,103,105,118,101,110,44,10,109,117,115,116,32,98,101,32,97,32,110,117,109,98,101,114,32,98,101,116,119,101,101,110,32,49,32,97,110,100,32,57,46,10,0] /* BZ2Compressor([compr */, "i8", ALLOC_NORMAL);
__str71=allocate([98,122,50,46,66,90,50,67,111,109,112,114,101,115,115,111,114,0] /* bz2.BZ2Compressor\00 */, "i8", ALLOC_NORMAL);
_BZ2Comp_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str72=allocate([117,110,117,115,101,100,95,100,97,116,97,0] /* unused_data\00 */, "i8", ALLOC_NORMAL);
_BZ2Decomp_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 60, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_BZ2Decomp_decompress__doc__=allocate([100,101,99,111,109,112,114,101,115,115,40,100,97,116,97,41,32,45,62,32,115,116,114,105,110,103,10,10,80,114,111,118,105,100,101,32,109,111,114,101,32,100,97,116,97,32,116,111,32,116,104,101,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,32,73,116,32,119,105,108,108,32,114,101,116,117,114,110,32,99,104,117,110,107,115,10,111,102,32,100,101,99,111,109,112,114,101,115,115,101,100,32,100,97,116,97,32,119,104,101,110,101,118,101,114,32,112,111,115,115,105,98,108,101,46,32,73,102,32,121,111,117,32,116,114,121,32,116,111,32,100,101,99,111,109,112,114,101,115,115,32,100,97,116,97,10,97,102,116,101,114,32,116,104,101,32,101,110,100,32,111,102,32,115,116,114,101,97,109,32,105,115,32,102,111,117,110,100,44,32,69,79,70,69,114,114,111,114,32,119,105,108,108,32,98,101,32,114,97,105,115,101,100,46,32,73,102,32,97,110,121,32,100,97,116,97,10,119,97,115,32,102,111,117,110,100,32,97,102,116,101,114,32,116,104,101,32,101,110,100,32,111,102,32,115,116,114,101,97,109,44,32,105,116,39,108,108,32,98,101,32,105,103,110,111,114,101,100,32,97,110,100,32,115,97,118,101,100,32,105,110,10,117,110,117,115,101,100,95,100,97,116,97,32,97,116,116,114,105,98,117,116,101,46,10,0] /* decompress(data) ->  */, "i8", ALLOC_NORMAL);
__str73=allocate([115,42,58,100,101,99,111,109,112,114,101,115,115,0] /* s_:decompress\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([101,110,100,32,111,102,32,115,116,114,101,97,109,32,119,97,115,32,97,108,114,101,97,100,121,32,102,111,117,110,100,0] /* end of stream was al */, "i8", ALLOC_NORMAL);
__str75=allocate([100,101,99,111,109,112,114,101,115,115,0] /* decompress\00 */, "i8", ALLOC_NORMAL);
_BZ2Decomp_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str76=allocate([58,66,90,50,68,101,99,111,109,112,114,101,115,115,111,114,0] /* :BZ2Decompressor\00 */, "i8", ALLOC_NORMAL);
_BZ2Decomp__doc__=allocate([66,90,50,68,101,99,111,109,112,114,101,115,115,111,114,40,41,32,45,62,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,10,10,67,114,101,97,116,101,32,97,32,110,101,119,32,100,101,99,111,109,112,114,101,115,115,111,114,32,111,98,106,101,99,116,46,32,84,104,105,115,32,111,98,106,101,99,116,32,109,97,121,32,98,101,32,117,115,101,100,32,116,111,32,100,101,99,111,109,112,114,101,115,115,10,100,97,116,97,32,115,101,113,117,101,110,116,105,97,108,108,121,46,32,73,102,32,121,111,117,32,119,97,110,116,32,116,111,32,100,101,99,111,109,112,114,101,115,115,32,100,97,116,97,32,105,110,32,111,110,101,32,115,104,111,116,44,32,117,115,101,32,116,104,101,10,100,101,99,111,109,112,114,101,115,115,40,41,32,102,117,110,99,116,105,111,110,32,105,110,115,116,101,97,100,46,10,0] /* BZ2Decompressor() -> */, "i8", ALLOC_NORMAL);
__str77=allocate([98,122,50,46,66,90,50,68,101,99,111,109,112,114,101,115,115,111,114,0] /* bz2.BZ2Decompressor\ */, "i8", ALLOC_NORMAL);
_BZ2Decomp_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_bz2_compress__doc__=allocate([99,111,109,112,114,101,115,115,40,100,97,116,97,32,91,44,32,99,111,109,112,114,101,115,115,108,101,118,101,108,61,57,93,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,109,112,114,101,115,115,32,100,97,116,97,32,105,110,32,111,110,101,32,115,104,111,116,46,32,73,102,32,121,111,117,32,119,97,110,116,32,116,111,32,99,111,109,112,114,101,115,115,32,100,97,116,97,32,115,101,113,117,101,110,116,105,97,108,108,121,44,10,117,115,101,32,97,110,32,105,110,115,116,97,110,99,101,32,111,102,32,66,90,50,67,111,109,112,114,101,115,115,111,114,32,105,110,115,116,101,97,100,46,32,84,104,101,32,99,111,109,112,114,101,115,115,108,101,118,101,108,32,112,97,114,97,109,101,116,101,114,44,32,105,102,10,103,105,118,101,110,44,32,109,117,115,116,32,98,101,32,97,32,110,117,109,98,101,114,32,98,101,116,119,101,101,110,32,49,32,97,110,100,32,57,46,10,0] /* compress(data [, com */, "i8", ALLOC_NORMAL);
__str78=allocate([115,42,124,105,0] /* s_|i\00 */, "i8", ALLOC_NORMAL);
_kwlist_10147=allocate(12, "i8*", ALLOC_NORMAL);
__str79=allocate([100,97,116,97,0] /* data\00 */, "i8", ALLOC_NORMAL);
_bz2_decompress__doc__=allocate([100,101,99,111,109,112,114,101,115,115,40,100,97,116,97,41,32,45,62,32,100,101,99,111,109,112,114,101,115,115,101,100,32,100,97,116,97,10,10,68,101,99,111,109,112,114,101,115,115,32,100,97,116,97,32,105,110,32,111,110,101,32,115,104,111,116,46,32,73,102,32,121,111,117,32,119,97,110,116,32,116,111,32,100,101,99,111,109,112,114,101,115,115,32,100,97,116,97,32,115,101,113,117,101,110,116,105,97,108,108,121,44,10,117,115,101,32,97,110,32,105,110,115,116,97,110,99,101,32,111,102,32,66,90,50,68,101,99,111,109,112,114,101,115,115,111,114,32,105,110,115,116,101,97,100,46,10,0] /* decompress(data) ->  */, "i8", ALLOC_NORMAL);
__str80=allocate([99,111,117,108,100,110,39,116,32,102,105,110,100,32,101,110,100,32,111,102,32,115,116,114,101,97,109,0] /* couldn't find end of */, "i8", ALLOC_NORMAL);
_bz2_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_bz2__doc__=allocate([84,104,101,32,112,121,116,104,111,110,32,98,122,50,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,97,32,99,111,109,112,114,101,104,101,110,115,105,118,101,32,105,110,116,101,114,102,97,99,101,32,102,111,114,10,116,104,101,32,98,122,50,32,99,111,109,112,114,101,115,115,105,111,110,32,108,105,98,114,97,114,121,46,32,73,116,32,105,109,112,108,101,109,101,110,116,115,32,97,32,99,111,109,112,108,101,116,101,32,102,105,108,101,10,105,110,116,101,114,102,97,99,101,44,32,111,110,101,32,115,104,111,116,32,40,100,101,41,99,111,109,112,114,101,115,115,105,111,110,32,102,117,110,99,116,105,111,110,115,44,32,97,110,100,32,116,121,112,101,115,32,102,111,114,10,115,101,113,117,101,110,116,105,97,108,32,40,100,101,41,99,111,109,112,114,101,115,115,105,111,110,46,10,0] /* The python bz2 modul */, "i8", ALLOC_NORMAL);
__str81=allocate([98,122,50,0] /* bz2\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([95,95,97,117,116,104,111,114,95,95,0] /* __author__\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([66,90,50,70,105,108,101,0] /* BZ2File\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([66,90,50,67,111,109,112,114,101,115,115,111,114,0] /* BZ2Compressor\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([66,90,50,68,101,99,111,109,112,114,101,115,115,111,114,0] /* BZ2Decompressor\00 */, "i8", ALLOC_NORMAL);
HEAP[_BZ2File_methods]=__str29;
HEAP[_BZ2File_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_BZ2File_methods+12]=_BZ2File_read__doc__;
HEAP[_BZ2File_methods+16]=__str30;
HEAP[_BZ2File_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_BZ2File_methods+28]=_BZ2File_readline__doc__;
HEAP[_BZ2File_methods+32]=__str31;
HEAP[_BZ2File_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_BZ2File_methods+44]=_BZ2File_readlines__doc__;
HEAP[_BZ2File_methods+48]=__str32;
HEAP[_BZ2File_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_BZ2File_methods+60]=_BZ2File_xreadlines__doc__;
HEAP[_BZ2File_methods+64]=__str33;
HEAP[_BZ2File_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_BZ2File_methods+76]=_BZ2File_write__doc__;
HEAP[_BZ2File_methods+80]=__str34;
HEAP[_BZ2File_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_BZ2File_methods+92]=_BZ2File_writelines__doc__;
HEAP[_BZ2File_methods+96]=__str26;
HEAP[_BZ2File_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_BZ2File_methods+108]=_BZ2File_seek__doc__;
HEAP[_BZ2File_methods+112]=__str35;
HEAP[_BZ2File_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_BZ2File_methods+124]=_BZ2File_tell__doc__;
HEAP[_BZ2File_methods+128]=__str28;
HEAP[_BZ2File_methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_BZ2File_methods+140]=_BZ2File_close__doc__;
HEAP[_BZ2File_methods+144]=__str36;
HEAP[_BZ2File_methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_BZ2File_methods+156]=_BZ2File_enter_doc;
HEAP[_BZ2File_methods+160]=__str37;
HEAP[_BZ2File_methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_BZ2File_methods+172]=_BZ2File_exit_doc;
HEAP[_BZ2File_getset]=__str46;
HEAP[_BZ2File_getset+4]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_BZ2File_getset+12]=__str47;
HEAP[_BZ2File_getset+20]=__str48;
HEAP[_BZ2File_getset+24]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_BZ2File_getset+32]=__str49;
HEAP[_BZ2File_getset+40]=__str44;
HEAP[_BZ2File_getset+44]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_BZ2File_getset+52]=__str50;
HEAP[_BZ2File_getset+60]=__str45;
HEAP[_BZ2File_getset+64]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_BZ2File_getset+72]=__str51;
HEAP[_BZ2File_members]=__str52;
HEAP[_BZ2File_members+16]=__str53;
HEAP[_kwlist_9585]=__str56;
HEAP[_kwlist_9585+4]=__str44;
HEAP[_kwlist_9585+8]=__str57;
HEAP[_kwlist_9585+12]=__str58;
HEAP[_BZ2File_Type+12]=__str64;
HEAP[_BZ2File_Type+24]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_BZ2File_Type+72]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_BZ2File_Type+76]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_BZ2File_Type+88]=_BZ2File__doc__;
HEAP[_BZ2File_Type+108]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_BZ2File_Type+112]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_BZ2File_Type+116]=_BZ2File_methods;
HEAP[_BZ2File_Type+120]=_BZ2File_members;
HEAP[_BZ2File_Type+124]=_BZ2File_getset;
HEAP[_BZ2File_Type+148]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_BZ2File_Type+152]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_BZ2File_Type+156]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_BZ2File_Type+160]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_BZ2Comp_methods]=__str68;
HEAP[_BZ2Comp_methods+4]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_BZ2Comp_methods+12]=_BZ2Comp_compress__doc__;
HEAP[_BZ2Comp_methods+16]=__str69;
HEAP[_BZ2Comp_methods+20]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_BZ2Comp_methods+28]=_BZ2Comp_flush__doc__;
HEAP[_kwlist_9935]=__str58;
HEAP[_BZ2Comp_Type+12]=__str71;
HEAP[_BZ2Comp_Type+24]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_BZ2Comp_Type+72]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_BZ2Comp_Type+76]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_BZ2Comp_Type+88]=_BZ2Comp__doc__;
HEAP[_BZ2Comp_Type+116]=_BZ2Comp_methods;
HEAP[_BZ2Comp_Type+148]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_BZ2Comp_Type+152]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_BZ2Comp_Type+156]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_BZ2Comp_Type+160]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_BZ2Decomp_members]=__str72;
HEAP[_BZ2Decomp_methods]=__str75;
HEAP[_BZ2Decomp_methods+4]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_BZ2Decomp_methods+12]=_BZ2Decomp_decompress__doc__;
HEAP[_BZ2Decomp_Type+12]=__str77;
HEAP[_BZ2Decomp_Type+24]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_BZ2Decomp_Type+72]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_BZ2Decomp_Type+76]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_BZ2Decomp_Type+88]=_BZ2Decomp__doc__;
HEAP[_BZ2Decomp_Type+116]=_BZ2Decomp_methods;
HEAP[_BZ2Decomp_Type+120]=_BZ2Decomp_members;
HEAP[_BZ2Decomp_Type+148]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_BZ2Decomp_Type+152]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_BZ2Decomp_Type+156]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_BZ2Decomp_Type+160]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_kwlist_10147]=__str79;
HEAP[_kwlist_10147+4]=__str58;
HEAP[_bz2_methods]=__str68;
HEAP[_bz2_methods+4]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_bz2_methods+12]=_bz2_compress__doc__;
HEAP[_bz2_methods+16]=__str75;
HEAP[_bz2_methods+20]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_bz2_methods+28]=_bz2_decompress__doc__;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

