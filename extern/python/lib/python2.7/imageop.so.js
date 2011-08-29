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



var $0___SIZE = 256; // %0
  
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
  

var __str;
var _ImageopError;
var __str1;
var __str2;
var __str3;
var _ImageopDict;
var _bcos_8350;
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
var _imageop_methods;


var __str33;
var __str34;
var __str35;
var __str36;





















  function _check_coordonnate($value, $name) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $value_addr;
        var $name_addr;
        var $retval;
        var $0;
        $value_addr=$value;
        $name_addr=$name;
        var $1=$value_addr; //@line 36 "imageop.c"
        var $2=($1) > 0; //@line 36 "imageop.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 36 "imageop.c"
      case 1: // $bb
        $0=1; //@line 37 "imageop.c"
        __label__ = 3; break; //@line 37 "imageop.c"
      case 2: // $bb1
        var $3=HEAP[_PyExc_ValueError]; //@line 38 "imageop.c"
        var $4=$name_addr; //@line 38 "imageop.c"
        var $5=_PyErr_Format($3, __str, allocate([$4,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 38 "imageop.c"
        $0=0; //@line 39 "imageop.c"
        __label__ = 3; break; //@line 39 "imageop.c"
      case 3: // $bb2
        var $6=$0; //@line 37 "imageop.c"
        $retval=$6; //@line 37 "imageop.c"
        var $retval3=$retval; //@line 37 "imageop.c"
        ;
        return $retval3; //@line 37 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _check_multiply_size($product, $x, $xname, $y, $yname, $size) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $product_addr;
        var $x_addr;
        var $xname_addr;
        var $y_addr;
        var $yname_addr;
        var $size_addr;
        var $retval;
        var $0;
        $product_addr=$product;
        $x_addr=$x;
        $xname_addr=$xname;
        $y_addr=$y;
        $yname_addr=$yname;
        $size_addr=$size;
        var $1=$x_addr; //@line 49 "imageop.c"
        var $2=$xname_addr; //@line 49 "imageop.c"
        var $3=_check_coordonnate($1, $2); //@line 49 "imageop.c"
        var $4=($3)==0; //@line 49 "imageop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 49 "imageop.c"
      case 1: // $bb
        $0=0; //@line 50 "imageop.c"
        __label__ = 7; break; //@line 50 "imageop.c"
      case 2: // $bb1
        var $5=$y_addr; //@line 51 "imageop.c"
        var $6=$yname_addr; //@line 51 "imageop.c"
        var $7=_check_coordonnate($5, $6); //@line 51 "imageop.c"
        var $8=($7)==0; //@line 51 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 51 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 52 "imageop.c"
        __label__ = 7; break; //@line 52 "imageop.c"
      case 4: // $bb3
        var $9=$product_addr; //@line 53 "imageop.c"
        var $10=$y_addr; //@line 53 "imageop.c"
        var $11=((($9)/($10))|0); //@line 53 "imageop.c"
        var $12=$x_addr; //@line 53 "imageop.c"
        var $13=((($11)/($12))|0); //@line 53 "imageop.c"
        var $14=$size_addr; //@line 53 "imageop.c"
        var $15=($13)==($14); //@line 53 "imageop.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 53 "imageop.c"
      case 5: // $bb4
        $0=1; //@line 54 "imageop.c"
        __label__ = 7; break; //@line 54 "imageop.c"
      case 6: // $bb5
        var $16=HEAP[_ImageopError]; //@line 55 "imageop.c"
        _PyErr_SetString($16, __str1); //@line 55 "imageop.c"
        $0=0; //@line 56 "imageop.c"
        __label__ = 7; break; //@line 56 "imageop.c"
      case 7: // $bb6
        var $17=$0; //@line 50 "imageop.c"
        $retval=$17; //@line 50 "imageop.c"
        var $retval7=$retval; //@line 50 "imageop.c"
        ;
        return $retval7; //@line 50 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _check_multiply($product, $x, $y) {
    ;
    var __label__;
  
    var $product_addr;
    var $x_addr;
    var $y_addr;
    var $retval;
    var $0;
    $product_addr=$product;
    $x_addr=$x;
    $y_addr=$y;
    var $1=$product_addr; //@line 66 "imageop.c"
    var $2=$x_addr; //@line 66 "imageop.c"
    var $3=$y_addr; //@line 66 "imageop.c"
    var $4=_check_multiply_size($1, $2, __str2, $3, __str3, 1); //@line 66 "imageop.c"
    $0=$4; //@line 66 "imageop.c"
    var $5=$0; //@line 66 "imageop.c"
    $retval=$5; //@line 66 "imageop.c"
    var $retval1=$retval; //@line 66 "imageop.c"
    ;
    return $retval1; //@line 66 "imageop.c"
  }
  

  function _imageop_backward_compatible() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $retval;
        var $0;
        var $bco;
        var $rc;
        var $1=HEAP[_ImageopDict]; //@line 93 "imageop.c"
        var $2=($1)==0; //@line 93 "imageop.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 93 "imageop.c"
      case 1: // $bb
        $0=1; //@line 94 "imageop.c"
        __label__ = 12; break; //@line 94 "imageop.c"
      case 2: // $bb1
        var $3=HEAP[_bcos_8350]; //@line 95 "imageop.c"
        var $4=($3)==0; //@line 95 "imageop.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 95 "imageop.c"
      case 3: // $bb2
        var $5=_PyString_FromString(__str4); //@line 97 "imageop.c"
        HEAP[_bcos_8350]=$5; //@line 97 "imageop.c"
        var $6=HEAP[_bcos_8350]; //@line 98 "imageop.c"
        var $7=($6)==0; //@line 98 "imageop.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 98 "imageop.c"
      case 4: // $bb3
        $0=1; //@line 99 "imageop.c"
        __label__ = 12; break; //@line 99 "imageop.c"
      case 5: // $bb4
        var $8=HEAP[_bcos_8350]; //@line 101 "imageop.c"
        var $9=HEAP[_ImageopDict]; //@line 101 "imageop.c"
        var $10=_PyDict_GetItem($9, $8); //@line 101 "imageop.c"
        $bco=$10; //@line 101 "imageop.c"
        var $11=($10)==0; //@line 102 "imageop.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 102 "imageop.c"
      case 6: // $bb5
        $0=1; //@line 103 "imageop.c"
        __label__ = 12; break; //@line 103 "imageop.c"
      case 7: // $bb6
        var $12=$bco; //@line 104 "imageop.c"
        var $13=$12+4; //@line 104 "imageop.c"
        var $14=HEAP[$13]; //@line 104 "imageop.c"
        var $15=$14+84; //@line 104 "imageop.c"
        var $16=HEAP[$15]; //@line 104 "imageop.c"
        var $17=($16) & 8388608; //@line 104 "imageop.c"
        var $18=($17)==0; //@line 104 "imageop.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 104 "imageop.c"
      case 8: // $bb7
        $0=1; //@line 105 "imageop.c"
        __label__ = 12; break; //@line 105 "imageop.c"
      case 9: // $bb8
        var $19=$bco; //@line 106 "imageop.c"
        var $20=_PyInt_AsLong($19); //@line 106 "imageop.c"
        $rc=$20; //@line 106 "imageop.c"
        var $21=_PyErr_Occurred(); //@line 107 "imageop.c"
        var $22=($21)!=0; //@line 107 "imageop.c"
        if ($22) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 107 "imageop.c"
      case 10: // $bb9
        _PyErr_Clear(); //@line 109 "imageop.c"
        $rc=1; //@line 110 "imageop.c"
        __label__ = 11; break; //@line 110 "imageop.c"
      case 11: // $bb10
        var $23=$rc; //@line 112 "imageop.c"
        var $24=($23)!=0; //@line 112 "imageop.c"
        var $25=($24); //@line 112 "imageop.c"
        $0=$25; //@line 112 "imageop.c"
        __label__ = 12; break; //@line 112 "imageop.c"
      case 12: // $bb11
        var $26=$0; //@line 94 "imageop.c"
        $retval=$26; //@line 94 "imageop.c"
        var $retval12=$retval; //@line 94 "imageop.c"
        ;
        return $retval12; //@line 94 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_crop($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; _memset(__stackBase__, 0, 36);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_18;
        var $iftmp_15;
        var $0;
        var $cp=__stackBase__;
        var $ncp;
        var $nsp;
        var $nlp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $x=__stackBase__+12;
        var $y=__stackBase__+16;
        var $newx1=__stackBase__+20;
        var $newx2=__stackBase__+24;
        var $newy1=__stackBase__+28;
        var $newy2=__stackBase__+32;
        var $nlen;
        var $ix;
        var $iy;
        var $xstep;
        var $ystep;
        var $rv;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 125 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str5, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$x,0,0,0,$y,0,0,0,$newx1,0,0,0,$newy1,0,0,0,$newx2,0,0,0,$newy2,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 125 "imageop.c"
        var $3=($2)==0; //@line 125 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 125 "imageop.c"
      case 1: // $bb
        $0=0; //@line 127 "imageop.c"
        __label__ = 33; break; //@line 127 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 129 "imageop.c"
        var $5=($4)!=1; //@line 129 "imageop.c"
        var $6=HEAP[$size]; //@line 129 "imageop.c"
        var $7=($6)!=2; //@line 129 "imageop.c"
        var $or_cond=($5) & ($7);
        var $8=HEAP[$size]; //@line 129 "imageop.c"
        var $9=($8)!=4; //@line 129 "imageop.c"
        var $or_cond3=($or_cond) & ($9);
        if ($or_cond3) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 129 "imageop.c"
      case 3: // $bb4
        var $10=HEAP[_ImageopError]; //@line 130 "imageop.c"
        _PyErr_SetString($10, __str6); //@line 130 "imageop.c"
        $0=0; //@line 131 "imageop.c"
        __label__ = 33; break; //@line 131 "imageop.c"
      case 4: // $bb5
        var $11=HEAP[$size]; //@line 133 "imageop.c"
        var $12=HEAP[$y]; //@line 133 "imageop.c"
        var $13=HEAP[$x]; //@line 133 "imageop.c"
        var $14=HEAP[$len]; //@line 133 "imageop.c"
        var $15=_check_multiply_size($14, $13, __str2, $12, __str3, $11); //@line 133 "imageop.c"
        var $16=($15)==0; //@line 133 "imageop.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 133 "imageop.c"
      case 5: // $bb6
        $0=0; //@line 134 "imageop.c"
        __label__ = 33; break; //@line 134 "imageop.c"
      case 6: // $bb7
        var $17=HEAP[$newx1]; //@line 136 "imageop.c"
        var $18=HEAP[$newx2]; //@line 136 "imageop.c"
        var $19=($17) < ($18); //@line 136 "imageop.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 136 "imageop.c"
      case 7: // $bb8
        $iftmp_15=1; //@line 136 "imageop.c"
        __label__ = 9; break; //@line 136 "imageop.c"
      case 8: // $bb9
        $iftmp_15=-1; //@line 136 "imageop.c"
        __label__ = 9; break; //@line 136 "imageop.c"
      case 9: // $bb10
        var $20=$iftmp_15; //@line 136 "imageop.c"
        $xstep=$20; //@line 136 "imageop.c"
        var $21=HEAP[$newy1]; //@line 137 "imageop.c"
        var $22=HEAP[$newy2]; //@line 137 "imageop.c"
        var $23=($21) < ($22); //@line 137 "imageop.c"
        if ($23) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 137 "imageop.c"
      case 10: // $bb11
        $iftmp_18=1; //@line 137 "imageop.c"
        __label__ = 12; break; //@line 137 "imageop.c"
      case 11: // $bb12
        $iftmp_18=-1; //@line 137 "imageop.c"
        __label__ = 12; break; //@line 137 "imageop.c"
      case 12: // $bb13
        var $24=$iftmp_18; //@line 137 "imageop.c"
        $ystep=$24; //@line 137 "imageop.c"
        var $25=HEAP[$newx2]; //@line 139 "imageop.c"
        var $26=HEAP[$newx1]; //@line 139 "imageop.c"
        var $27=($25) - ($26); //@line 139 "imageop.c"
        var $neg=0 - ($27); //@line 139 "imageop.c"
        var $abscond=($27) >= 0; //@line 139 "imageop.c"
        var $abs=($abscond) ? ($27) : ($neg); //@line 139 "imageop.c"
        var $28=($abs) + 1; //@line 139 "imageop.c"
        var $29=HEAP[$newy2]; //@line 139 "imageop.c"
        var $30=HEAP[$newy1]; //@line 139 "imageop.c"
        var $31=($29) - ($30); //@line 139 "imageop.c"
        var $neg15=0 - ($31); //@line 139 "imageop.c"
        var $abscond16=($31) >= 0; //@line 139 "imageop.c"
        var $abs17=($abscond16) ? ($31) : ($neg15); //@line 139 "imageop.c"
        var $32=($abs17) + 1; //@line 139 "imageop.c"
        var $33=HEAP[$size]; //@line 139 "imageop.c"
        var $34=($28) * ($33); //@line 139 "imageop.c"
        var $35=($34) * ($32); //@line 139 "imageop.c"
        $nlen=$35; //@line 139 "imageop.c"
        var $36=HEAP[$size]; //@line 140 "imageop.c"
        var $37=HEAP[$newy2]; //@line 140 "imageop.c"
        var $38=HEAP[$newy1]; //@line 140 "imageop.c"
        var $39=($37) - ($38); //@line 140 "imageop.c"
        var $neg19=0 - ($39); //@line 140 "imageop.c"
        var $abscond20=($39) >= 0; //@line 140 "imageop.c"
        var $abs21=($abscond20) ? ($39) : ($neg19); //@line 140 "imageop.c"
        var $40=($abs21) + 1; //@line 140 "imageop.c"
        var $41=HEAP[$newx2]; //@line 140 "imageop.c"
        var $42=HEAP[$newx1]; //@line 140 "imageop.c"
        var $43=($41) - ($42); //@line 140 "imageop.c"
        var $neg23=0 - ($43); //@line 140 "imageop.c"
        var $abscond24=($43) >= 0; //@line 140 "imageop.c"
        var $abs25=($abscond24) ? ($43) : ($neg23); //@line 140 "imageop.c"
        var $44=($abs25) + 1; //@line 140 "imageop.c"
        var $45=$nlen; //@line 140 "imageop.c"
        var $46=_check_multiply_size($45, $44, __str7, $40, __str8, $36); //@line 140 "imageop.c"
        var $47=($46)==0; //@line 140 "imageop.c"
        if ($47) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 140 "imageop.c"
      case 13: // $bb27
        $0=0; //@line 141 "imageop.c"
        __label__ = 33; break; //@line 141 "imageop.c"
      case 14: // $bb28
        var $48=$nlen; //@line 142 "imageop.c"
        var $49=_PyString_FromStringAndSize(0, $48); //@line 142 "imageop.c"
        $rv=$49; //@line 142 "imageop.c"
        var $50=$rv; //@line 143 "imageop.c"
        var $51=($50)==0; //@line 143 "imageop.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 143 "imageop.c"
      case 15: // $bb29
        $0=0; //@line 144 "imageop.c"
        __label__ = 33; break; //@line 144 "imageop.c"
      case 16: // $bb30
        var $52=$rv; //@line 145 "imageop.c"
        var $53=_PyString_AsString($52); //@line 145 "imageop.c"
        $ncp=$53; //@line 145 "imageop.c"
        var $54=$ncp; //@line 146 "imageop.c"
        var $55=$54; //@line 146 "imageop.c"
        $nsp=$55; //@line 146 "imageop.c"
        var $56=$ncp; //@line 147 "imageop.c"
        var $57=$56; //@line 147 "imageop.c"
        $nlp=$57; //@line 147 "imageop.c"
        var $58=HEAP[$newy2]; //@line 148 "imageop.c"
        var $59=$ystep; //@line 148 "imageop.c"
        var $60=($59) + ($58); //@line 148 "imageop.c"
        HEAP[$newy2]=$60; //@line 148 "imageop.c"
        var $61=HEAP[$newx2]; //@line 149 "imageop.c"
        var $62=$xstep; //@line 149 "imageop.c"
        var $63=($62) + ($61); //@line 149 "imageop.c"
        HEAP[$newx2]=$63; //@line 149 "imageop.c"
        var $64=HEAP[$newy1]; //@line 150 "imageop.c"
        $iy=$64; //@line 150 "imageop.c"
        var $65=HEAP[$newy2]; //@line 150 "imageop.c"
        var $66=$iy; //@line 150 "imageop.c"
        var $67=($66)!=($65); //@line 150 "imageop.c"
        if ($67) { __label__ = 17; break; } else { __label__ = 32; break; } //@line 150 "imageop.c"
      case 17: // $bb31
        var $68=HEAP[$newx1]; //@line 151 "imageop.c"
        $ix=$68; //@line 151 "imageop.c"
        var $69=HEAP[$newx2]; //@line 151 "imageop.c"
        var $70=$ix; //@line 151 "imageop.c"
        var $71=($70)!=($69); //@line 151 "imageop.c"
        var $72=$iy; //@line 152 "imageop.c"
        if ($71) { __lastLabel__ = 17; __label__ = 18; break; } else { __lastLabel__ = 17; __label__ = 31; break; } //@line 151 "imageop.c"
      case 18: // $bb32
        var $73=__lastLabel__ == 30 ? $132 : ($72);
        var $74=($73) < 0; //@line 152 "imageop.c"
        if ($74) { __label__ = 22; break; } else { __label__ = 19; break; } //@line 152 "imageop.c"
      case 19: // $bb33
        var $75=HEAP[$y]; //@line 152 "imageop.c"
        var $76=$iy; //@line 152 "imageop.c"
        var $77=($76) >= ($75); //@line 152 "imageop.c"
        if ($77) { __label__ = 22; break; } else { __label__ = 20; break; } //@line 152 "imageop.c"
      case 20: // $bb34
        var $78=$ix; //@line 152 "imageop.c"
        var $79=($78) < 0; //@line 152 "imageop.c"
        if ($79) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 152 "imageop.c"
      case 21: // $bb35
        var $80=HEAP[$x]; //@line 152 "imageop.c"
        var $81=$ix; //@line 152 "imageop.c"
        var $82=($81) >= ($80); //@line 152 "imageop.c"
        if ($82) { __label__ = 22; break; } else { __label__ = 25; break; } //@line 152 "imageop.c"
      case 22: // $bb36
        var $83=HEAP[$size]; //@line 153 "imageop.c"
        var $84=($83)==1; //@line 153 "imageop.c"
        if ($84) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 153 "imageop.c"
      case 23: // $bb37
        var $85=$ncp; //@line 154 "imageop.c"
        HEAP[$85]=0; //@line 154 "imageop.c"
        var $86=$ncp; //@line 154 "imageop.c"
        var $87=$86+1; //@line 154 "imageop.c"
        $ncp=$87; //@line 154 "imageop.c"
        __label__ = 30; break; //@line 154 "imageop.c"
      case 24: // $bb38
        var $88=$nlp; //@line 156 "imageop.c"
        HEAP[$88]=0; //@line 156 "imageop.c"
        var $89=$nlp; //@line 156 "imageop.c"
        var $90=$89+4; //@line 156 "imageop.c"
        $nlp=$90; //@line 156 "imageop.c"
        __label__ = 30; break; //@line 156 "imageop.c"
      case 25: // $bb40
        var $91=HEAP[$size]; //@line 158 "imageop.c"
        var $92=($91)==1; //@line 158 "imageop.c"
        if ($92) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 158 "imageop.c"
      case 26: // $bb41
        var $93=HEAP[$cp]; //@line 159 "imageop.c"
        var $94=HEAP[$x]; //@line 159 "imageop.c"
        var $95=$iy; //@line 159 "imageop.c"
        var $96=($95) * ($94); //@line 159 "imageop.c"
        var $97=$93+$96; //@line 159 "imageop.c"
        var $98=$ix; //@line 159 "imageop.c"
        var $99=$97+$98; //@line 159 "imageop.c"
        var $100=HEAP[$99]; //@line 159 "imageop.c"
        var $101=$ncp; //@line 159 "imageop.c"
        HEAP[$101]=$100; //@line 159 "imageop.c"
        var $102=$ncp; //@line 159 "imageop.c"
        var $103=$102+1; //@line 159 "imageop.c"
        $ncp=$103; //@line 159 "imageop.c"
        __label__ = 30; break; //@line 159 "imageop.c"
      case 27: // $bb42
        var $104=HEAP[$size]; //@line 160 "imageop.c"
        var $105=($104)==2; //@line 160 "imageop.c"
        var $106=HEAP[$cp]; //@line 161 "imageop.c"
        var $107=HEAP[$x]; //@line 161 "imageop.c"
        var $108=$iy; //@line 161 "imageop.c"
        var $109=($108) * ($107); //@line 161 "imageop.c"
        var $110=$ix; //@line 161 "imageop.c"
        var $111=($109) + ($110); //@line 161 "imageop.c"
        if ($105) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 160 "imageop.c"
      case 28: // $bb43
        var $112=($111) * 2; //@line 161 "imageop.c"
        var $113=$106+$112; //@line 161 "imageop.c"
        var $114=$113; //@line 161 "imageop.c"
        var $115=HEAP[$114]; //@line 161 "imageop.c"
        var $116=$nsp; //@line 161 "imageop.c"
        HEAP[$116]=$115; //@line 161 "imageop.c"
        var $117=$nsp; //@line 161 "imageop.c"
        var $118=$117+2; //@line 161 "imageop.c"
        $nsp=$118; //@line 161 "imageop.c"
        __label__ = 30; break; //@line 161 "imageop.c"
      case 29: // $bb44
        var $119=($111) * 4; //@line 163 "imageop.c"
        var $120=$106+$119; //@line 163 "imageop.c"
        var $121=$120; //@line 163 "imageop.c"
        var $122=HEAP[$121]; //@line 163 "imageop.c"
        var $123=$nlp; //@line 163 "imageop.c"
        HEAP[$123]=$122; //@line 163 "imageop.c"
        var $124=$nlp; //@line 163 "imageop.c"
        var $125=$124+4; //@line 163 "imageop.c"
        $nlp=$125; //@line 163 "imageop.c"
        __label__ = 30; break; //@line 163 "imageop.c"
      case 30: // $bb45
        var $126=$ix; //@line 151 "imageop.c"
        var $127=$xstep; //@line 151 "imageop.c"
        var $128=($127) + ($126); //@line 151 "imageop.c"
        $ix=$128; //@line 151 "imageop.c"
        var $129=HEAP[$newx2]; //@line 151 "imageop.c"
        var $130=$ix; //@line 151 "imageop.c"
        var $131=($130)!=($129); //@line 151 "imageop.c"
        var $132=$iy; //@line 152 "imageop.c"
        if ($131) { __lastLabel__ = 30; __label__ = 18; break; } else { __lastLabel__ = 30; __label__ = 31; break; } //@line 151 "imageop.c"
      case 31: // $bb47
        var $_lcssa=__lastLabel__ == 17 ? $72 : ($132);
        var $133=$ystep; //@line 150 "imageop.c"
        var $134=($133) + ($_lcssa); //@line 150 "imageop.c"
        $iy=$134; //@line 150 "imageop.c"
        var $135=HEAP[$newy2]; //@line 150 "imageop.c"
        var $136=$iy; //@line 150 "imageop.c"
        var $137=($136)!=($135); //@line 150 "imageop.c"
        if ($137) { __label__ = 17; break; } else { __label__ = 32; break; } //@line 150 "imageop.c"
      case 32: // $bb49
        var $138=$rv; //@line 167 "imageop.c"
        $0=$138; //@line 167 "imageop.c"
        __label__ = 33; break; //@line 167 "imageop.c"
      case 33: // $bb50
        var $139=$0; //@line 127 "imageop.c"
        $retval=$139; //@line 127 "imageop.c"
        var $retval51=$retval; //@line 127 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval51; //@line 127 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_scale($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 28; _memset(__stackBase__, 0, 28);
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
        var $nsp;
        var $nlp;
        var $len=__stackBase__+4;
        var $size=__stackBase__+8;
        var $x=__stackBase__+12;
        var $y=__stackBase__+16;
        var $newx=__stackBase__+20;
        var $newy=__stackBase__+24;
        var $nlen;
        var $ix;
        var $iy;
        var $oix;
        var $oiy;
        var $rv;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 181 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str9, allocate([$cp,0,0,0,$len,0,0,0,$size,0,0,0,$x,0,0,0,$y,0,0,0,$newx,0,0,0,$newy,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 181 "imageop.c"
        var $3=($2)==0; //@line 181 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 181 "imageop.c"
      case 1: // $bb
        $0=0; //@line 183 "imageop.c"
        __label__ = 20; break; //@line 183 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$size]; //@line 185 "imageop.c"
        var $5=($4)!=1; //@line 185 "imageop.c"
        var $6=HEAP[$size]; //@line 185 "imageop.c"
        var $7=($6)!=2; //@line 185 "imageop.c"
        var $or_cond=($5) & ($7);
        var $8=HEAP[$size]; //@line 185 "imageop.c"
        var $9=($8)!=4; //@line 185 "imageop.c"
        var $or_cond3=($or_cond) & ($9);
        if ($or_cond3) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 185 "imageop.c"
      case 3: // $bb4
        var $10=HEAP[_ImageopError]; //@line 186 "imageop.c"
        _PyErr_SetString($10, __str6); //@line 186 "imageop.c"
        $0=0; //@line 187 "imageop.c"
        __label__ = 20; break; //@line 187 "imageop.c"
      case 4: // $bb5
        var $11=HEAP[$size]; //@line 189 "imageop.c"
        var $12=HEAP[$y]; //@line 189 "imageop.c"
        var $13=HEAP[$x]; //@line 189 "imageop.c"
        var $14=HEAP[$len]; //@line 189 "imageop.c"
        var $15=_check_multiply_size($14, $13, __str2, $12, __str3, $11); //@line 189 "imageop.c"
        var $16=($15)==0; //@line 189 "imageop.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 189 "imageop.c"
      case 5: // $bb6
        $0=0; //@line 190 "imageop.c"
        __label__ = 20; break; //@line 190 "imageop.c"
      case 6: // $bb7
        var $17=HEAP[$newx]; //@line 191 "imageop.c"
        var $18=HEAP[$newy]; //@line 191 "imageop.c"
        var $19=HEAP[$size]; //@line 191 "imageop.c"
        var $20=($18) * ($17); //@line 191 "imageop.c"
        var $21=($20) * ($19); //@line 191 "imageop.c"
        $nlen=$21; //@line 191 "imageop.c"
        var $22=HEAP[$size]; //@line 192 "imageop.c"
        var $23=HEAP[$newy]; //@line 192 "imageop.c"
        var $24=HEAP[$newx]; //@line 192 "imageop.c"
        var $25=$nlen; //@line 192 "imageop.c"
        var $26=_check_multiply_size($25, $24, __str10, $23, __str11, $22); //@line 192 "imageop.c"
        var $27=($26)==0; //@line 192 "imageop.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 192 "imageop.c"
      case 7: // $bb8
        $0=0; //@line 193 "imageop.c"
        __label__ = 20; break; //@line 193 "imageop.c"
      case 8: // $bb9
        var $28=$nlen; //@line 195 "imageop.c"
        var $29=_PyString_FromStringAndSize(0, $28); //@line 195 "imageop.c"
        $rv=$29; //@line 195 "imageop.c"
        var $30=$rv; //@line 196 "imageop.c"
        var $31=($30)==0; //@line 196 "imageop.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 196 "imageop.c"
      case 9: // $bb10
        $0=0; //@line 197 "imageop.c"
        __label__ = 20; break; //@line 197 "imageop.c"
      case 10: // $bb11
        var $32=$rv; //@line 198 "imageop.c"
        var $33=_PyString_AsString($32); //@line 198 "imageop.c"
        $ncp=$33; //@line 198 "imageop.c"
        var $34=$ncp; //@line 199 "imageop.c"
        var $35=$34; //@line 199 "imageop.c"
        $nsp=$35; //@line 199 "imageop.c"
        var $36=$ncp; //@line 200 "imageop.c"
        var $37=$36; //@line 200 "imageop.c"
        $nlp=$37; //@line 200 "imageop.c"
        $iy=0; //@line 201 "imageop.c"
        var $38=HEAP[$newy]; //@line 201 "imageop.c"
        var $39=$iy; //@line 201 "imageop.c"
        var $40=($39) < ($38); //@line 201 "imageop.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 19; break; } //@line 201 "imageop.c"
      case 11: // $bb12
        $ix=0; //@line 202 "imageop.c"
        var $41=HEAP[$newx]; //@line 202 "imageop.c"
        var $42=$ix; //@line 202 "imageop.c"
        var $43=($42) < ($41); //@line 202 "imageop.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 18; break; } //@line 202 "imageop.c"
      case 12: // $bb13
        var $44=HEAP[$x]; //@line 203 "imageop.c"
        var $45=$ix; //@line 203 "imageop.c"
        var $46=($45) * ($44); //@line 203 "imageop.c"
        var $47=HEAP[$newx]; //@line 203 "imageop.c"
        var $48=((($46)/($47))|0); //@line 203 "imageop.c"
        $oix=$48; //@line 203 "imageop.c"
        var $49=HEAP[$y]; //@line 204 "imageop.c"
        var $50=$iy; //@line 204 "imageop.c"
        var $51=($50) * ($49); //@line 204 "imageop.c"
        var $52=HEAP[$newy]; //@line 204 "imageop.c"
        var $53=((($51)/($52))|0); //@line 204 "imageop.c"
        $oiy=$53; //@line 204 "imageop.c"
        var $54=HEAP[$size]; //@line 205 "imageop.c"
        var $55=($54)==1; //@line 205 "imageop.c"
        if ($55) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 205 "imageop.c"
      case 13: // $bb14
        var $56=HEAP[$cp]; //@line 206 "imageop.c"
        var $57=HEAP[$x]; //@line 206 "imageop.c"
        var $58=$oiy; //@line 206 "imageop.c"
        var $59=($58) * ($57); //@line 206 "imageop.c"
        var $60=$56+$59; //@line 206 "imageop.c"
        var $61=$oix; //@line 206 "imageop.c"
        var $62=$60+$61; //@line 206 "imageop.c"
        var $63=HEAP[$62]; //@line 206 "imageop.c"
        var $64=$ncp; //@line 206 "imageop.c"
        HEAP[$64]=$63; //@line 206 "imageop.c"
        var $65=$ncp; //@line 206 "imageop.c"
        var $66=$65+1; //@line 206 "imageop.c"
        $ncp=$66; //@line 206 "imageop.c"
        __label__ = 17; break; //@line 206 "imageop.c"
      case 14: // $bb15
        var $67=HEAP[$size]; //@line 207 "imageop.c"
        var $68=($67)==2; //@line 207 "imageop.c"
        var $69=HEAP[$cp]; //@line 208 "imageop.c"
        var $70=HEAP[$x]; //@line 208 "imageop.c"
        var $71=$oiy; //@line 208 "imageop.c"
        var $72=($71) * ($70); //@line 208 "imageop.c"
        var $73=$oix; //@line 208 "imageop.c"
        var $74=($72) + ($73); //@line 208 "imageop.c"
        if ($68) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 207 "imageop.c"
      case 15: // $bb16
        var $75=($74) * 2; //@line 208 "imageop.c"
        var $76=$69+$75; //@line 208 "imageop.c"
        var $77=$76; //@line 208 "imageop.c"
        var $78=HEAP[$77]; //@line 208 "imageop.c"
        var $79=$nsp; //@line 208 "imageop.c"
        HEAP[$79]=$78; //@line 208 "imageop.c"
        var $80=$nsp; //@line 208 "imageop.c"
        var $81=$80+2; //@line 208 "imageop.c"
        $nsp=$81; //@line 208 "imageop.c"
        __label__ = 17; break; //@line 208 "imageop.c"
      case 16: // $bb17
        var $82=($74) * 4; //@line 210 "imageop.c"
        var $83=$69+$82; //@line 210 "imageop.c"
        var $84=$83; //@line 210 "imageop.c"
        var $85=HEAP[$84]; //@line 210 "imageop.c"
        var $86=$nlp; //@line 210 "imageop.c"
        HEAP[$86]=$85; //@line 210 "imageop.c"
        var $87=$nlp; //@line 210 "imageop.c"
        var $88=$87+4; //@line 210 "imageop.c"
        $nlp=$88; //@line 210 "imageop.c"
        __label__ = 17; break; //@line 210 "imageop.c"
      case 17: // $bb18
        var $89=$ix; //@line 202 "imageop.c"
        var $90=($89) + 1; //@line 202 "imageop.c"
        $ix=$90; //@line 202 "imageop.c"
        var $91=HEAP[$newx]; //@line 202 "imageop.c"
        var $92=$ix; //@line 202 "imageop.c"
        var $93=($92) < ($91); //@line 202 "imageop.c"
        if ($93) { __label__ = 12; break; } else { __label__ = 18; break; } //@line 202 "imageop.c"
      case 18: // $bb20
        var $94=$iy; //@line 201 "imageop.c"
        var $95=($94) + 1; //@line 201 "imageop.c"
        $iy=$95; //@line 201 "imageop.c"
        var $96=HEAP[$newy]; //@line 201 "imageop.c"
        var $97=$iy; //@line 201 "imageop.c"
        var $98=($97) < ($96); //@line 201 "imageop.c"
        if ($98) { __label__ = 11; break; } else { __label__ = 19; break; } //@line 201 "imageop.c"
      case 19: // $bb22
        var $99=$rv; //@line 213 "imageop.c"
        $0=$99; //@line 213 "imageop.c"
        __label__ = 20; break; //@line 213 "imageop.c"
      case 20: // $bb23
        var $100=$0; //@line 183 "imageop.c"
        $retval=$100; //@line 183 "imageop.c"
        var $retval24=$retval; //@line 183 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval24; //@line 183 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_tovideo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $maxx=__stackBase__;
        var $maxy=__stackBase__+4;
        var $x;
        var $y;
        var $len=__stackBase__+8;
        var $i;
        var $cp=__stackBase__+12;
        var $ncp;
        var $width=__stackBase__+16;
        var $rv;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 228 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str12, allocate([$cp,0,0,0,$len,0,0,0,$width,0,0,0,$maxx,0,0,0,$maxy,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 228 "imageop.c"
        var $3=($2)==0; //@line 228 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 228 "imageop.c"
      case 1: // $bb
        $0=0; //@line 229 "imageop.c"
        __label__ = 18; break; //@line 229 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$width]; //@line 231 "imageop.c"
        var $5=($4)!=1; //@line 231 "imageop.c"
        var $6=HEAP[$width]; //@line 231 "imageop.c"
        var $7=($6)!=4; //@line 231 "imageop.c"
        var $or_cond=($5) & ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 231 "imageop.c"
      case 3: // $bb3
        var $8=HEAP[_ImageopError]; //@line 232 "imageop.c"
        _PyErr_SetString($8, __str13); //@line 232 "imageop.c"
        $0=0; //@line 233 "imageop.c"
        __label__ = 18; break; //@line 233 "imageop.c"
      case 4: // $bb4
        var $9=HEAP[$width]; //@line 235 "imageop.c"
        var $10=HEAP[$maxy]; //@line 235 "imageop.c"
        var $11=HEAP[$maxx]; //@line 235 "imageop.c"
        var $12=HEAP[$len]; //@line 235 "imageop.c"
        var $13=_check_multiply_size($12, $11, __str14, $10, __str15, $9); //@line 235 "imageop.c"
        var $14=($13)==0; //@line 235 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 235 "imageop.c"
      case 5: // $bb5
        $0=0; //@line 236 "imageop.c"
        __label__ = 18; break; //@line 236 "imageop.c"
      case 6: // $bb6
        var $15=HEAP[$len]; //@line 238 "imageop.c"
        var $16=_PyString_FromStringAndSize(0, $15); //@line 238 "imageop.c"
        $rv=$16; //@line 238 "imageop.c"
        var $17=$rv; //@line 239 "imageop.c"
        var $18=($17)==0; //@line 239 "imageop.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 239 "imageop.c"
      case 7: // $bb7
        $0=0; //@line 240 "imageop.c"
        __label__ = 18; break; //@line 240 "imageop.c"
      case 8: // $bb8
        var $19=$rv; //@line 241 "imageop.c"
        var $20=_PyString_AsString($19); //@line 241 "imageop.c"
        $ncp=$20; //@line 241 "imageop.c"
        var $21=HEAP[$width]; //@line 243 "imageop.c"
        var $22=($21)==1; //@line 243 "imageop.c"
        var $23=HEAP[$maxx]; //@line 244 "imageop.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 243 "imageop.c"
      case 9: // $bb9
        var $24=HEAP[$cp]; //@line 244 "imageop.c"
        var $25=$ncp; //@line 244 "imageop.c"
        _llvm_memcpy_p0i8_p0i8_i32($25, $24, $23, 1, 0); //@line 244 "imageop.c"
        var $26=HEAP[$maxx]; //@line 245 "imageop.c"
        var $27=$ncp; //@line 245 "imageop.c"
        var $28=$27+$26; //@line 245 "imageop.c"
        $ncp=$28; //@line 245 "imageop.c"
        $y=1; //@line 246 "imageop.c"
        var $29=HEAP[$maxy]; //@line 246 "imageop.c"
        var $30=$y; //@line 246 "imageop.c"
        var $31=($30) < ($29); //@line 246 "imageop.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 246 "imageop.c"
      case 10: // $bb10
        $x=0; //@line 247 "imageop.c"
        var $32=HEAP[$maxx]; //@line 247 "imageop.c"
        var $33=$x; //@line 247 "imageop.c"
        var $34=($33) < ($32); //@line 247 "imageop.c"
        if ($34) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 247 "imageop.c"
      case 11: // $bb11
        var $35=HEAP[$maxx]; //@line 248 "imageop.c"
        var $36=$y; //@line 248 "imageop.c"
        var $37=($36) * ($35); //@line 248 "imageop.c"
        var $38=$x; //@line 248 "imageop.c"
        var $39=($37) + ($38); //@line 248 "imageop.c"
        $i=$39; //@line 248 "imageop.c"
        var $40=HEAP[$cp]; //@line 249 "imageop.c"
        var $41=$i; //@line 249 "imageop.c"
        var $42=$40+$41; //@line 249 "imageop.c"
        var $43=HEAP[$42]; //@line 249 "imageop.c"
        var $44=($43); //@line 249 "imageop.c"
        var $45=HEAP[$cp]; //@line 249 "imageop.c"
        var $46=HEAP[$maxx]; //@line 249 "imageop.c"
        var $47=$i; //@line 249 "imageop.c"
        var $48=($47) - ($46); //@line 249 "imageop.c"
        var $49=$45+$48; //@line 249 "imageop.c"
        var $50=HEAP[$49]; //@line 249 "imageop.c"
        var $51=($50); //@line 249 "imageop.c"
        var $52=($51) + ($44); //@line 249 "imageop.c"
        var $53=($52) >> 1; //@line 249 "imageop.c"
        var $54=((($53)) & 255); //@line 249 "imageop.c"
        var $55=$ncp; //@line 249 "imageop.c"
        HEAP[$55]=$54; //@line 249 "imageop.c"
        var $56=$ncp; //@line 249 "imageop.c"
        var $57=$56+1; //@line 249 "imageop.c"
        $ncp=$57; //@line 249 "imageop.c"
        var $58=$x; //@line 247 "imageop.c"
        var $59=($58) + 1; //@line 247 "imageop.c"
        $x=$59; //@line 247 "imageop.c"
        var $60=HEAP[$maxx]; //@line 247 "imageop.c"
        var $61=$x; //@line 247 "imageop.c"
        var $62=($61) < ($60); //@line 247 "imageop.c"
        if ($62) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 247 "imageop.c"
      case 12: // $bb13
        var $63=$y; //@line 246 "imageop.c"
        var $64=($63) + 1; //@line 246 "imageop.c"
        $y=$64; //@line 246 "imageop.c"
        var $65=HEAP[$maxy]; //@line 246 "imageop.c"
        var $66=$y; //@line 246 "imageop.c"
        var $67=($66) < ($65); //@line 246 "imageop.c"
        if ($67) { __label__ = 10; break; } else { __label__ = 17; break; } //@line 246 "imageop.c"
      case 13: // $bb16
        var $68=($23) * 4; //@line 253 "imageop.c"
        var $69=HEAP[$cp]; //@line 253 "imageop.c"
        var $70=$ncp; //@line 253 "imageop.c"
        _llvm_memcpy_p0i8_p0i8_i32($70, $69, $68, 1, 0); //@line 253 "imageop.c"
        var $71=HEAP[$maxx]; //@line 254 "imageop.c"
        var $72=($71) * 4; //@line 254 "imageop.c"
        var $73=$ncp; //@line 254 "imageop.c"
        var $74=$73+$72; //@line 254 "imageop.c"
        $ncp=$74; //@line 254 "imageop.c"
        $y=1; //@line 255 "imageop.c"
        var $75=HEAP[$maxy]; //@line 255 "imageop.c"
        var $76=$y; //@line 255 "imageop.c"
        var $77=($76) < ($75); //@line 255 "imageop.c"
        if ($77) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 255 "imageop.c"
      case 14: // $bb17
        $x=0; //@line 256 "imageop.c"
        var $78=HEAP[$maxx]; //@line 256 "imageop.c"
        var $79=$x; //@line 256 "imageop.c"
        var $80=($79) < ($78); //@line 256 "imageop.c"
        if ($80) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 256 "imageop.c"
      case 15: // $bb18
        var $81=HEAP[$maxx]; //@line 257 "imageop.c"
        var $82=$y; //@line 257 "imageop.c"
        var $83=($82) * ($81); //@line 257 "imageop.c"
        var $84=$x; //@line 257 "imageop.c"
        var $85=($83) + ($84); //@line 257 "imageop.c"
        var $86=($85) * 4; //@line 257 "imageop.c"
        var $87=($86) + 1; //@line 257 "imageop.c"
        $i=$87; //@line 257 "imageop.c"
        var $88=$ncp; //@line 258 "imageop.c"
        HEAP[$88]=0; //@line 258 "imageop.c"
        var $89=$ncp; //@line 258 "imageop.c"
        var $90=$89+1; //@line 258 "imageop.c"
        $ncp=$90; //@line 258 "imageop.c"
        var $91=HEAP[$cp]; //@line 259 "imageop.c"
        var $92=$i; //@line 259 "imageop.c"
        var $93=$91+$92; //@line 259 "imageop.c"
        var $94=HEAP[$93]; //@line 259 "imageop.c"
        var $95=($94); //@line 259 "imageop.c"
        var $96=HEAP[$cp]; //@line 259 "imageop.c"
        var $97=HEAP[$maxx]; //@line 259 "imageop.c"
        var $98=($97) * 4; //@line 259 "imageop.c"
        var $99=$i; //@line 259 "imageop.c"
        var $100=($99) - ($98); //@line 259 "imageop.c"
        var $101=$96+$100; //@line 259 "imageop.c"
        var $102=HEAP[$101]; //@line 259 "imageop.c"
        var $103=($102); //@line 259 "imageop.c"
        var $104=($103) + ($95); //@line 259 "imageop.c"
        var $105=($104) >> 1; //@line 259 "imageop.c"
        var $106=((($105)) & 255); //@line 259 "imageop.c"
        var $107=$ncp; //@line 259 "imageop.c"
        HEAP[$107]=$106; //@line 259 "imageop.c"
        var $108=$ncp; //@line 259 "imageop.c"
        var $109=$108+1; //@line 259 "imageop.c"
        $ncp=$109; //@line 259 "imageop.c"
        var $110=$i; //@line 260 "imageop.c"
        var $111=($110) + 1; //@line 260 "imageop.c"
        $i=$111; //@line 260 "imageop.c"
        var $112=HEAP[$cp]; //@line 261 "imageop.c"
        var $113=$i; //@line 261 "imageop.c"
        var $114=$112+$113; //@line 261 "imageop.c"
        var $115=HEAP[$114]; //@line 261 "imageop.c"
        var $116=($115); //@line 261 "imageop.c"
        var $117=HEAP[$cp]; //@line 261 "imageop.c"
        var $118=HEAP[$maxx]; //@line 261 "imageop.c"
        var $119=($118) * 4; //@line 261 "imageop.c"
        var $120=$i; //@line 261 "imageop.c"
        var $121=($120) - ($119); //@line 261 "imageop.c"
        var $122=$117+$121; //@line 261 "imageop.c"
        var $123=HEAP[$122]; //@line 261 "imageop.c"
        var $124=($123); //@line 261 "imageop.c"
        var $125=($124) + ($116); //@line 261 "imageop.c"
        var $126=($125) >> 1; //@line 261 "imageop.c"
        var $127=((($126)) & 255); //@line 261 "imageop.c"
        var $128=$ncp; //@line 261 "imageop.c"
        HEAP[$128]=$127; //@line 261 "imageop.c"
        var $129=$ncp; //@line 261 "imageop.c"
        var $130=$129+1; //@line 261 "imageop.c"
        $ncp=$130; //@line 261 "imageop.c"
        var $131=$i; //@line 262 "imageop.c"
        var $132=($131) + 1; //@line 262 "imageop.c"
        $i=$132; //@line 262 "imageop.c"
        var $133=HEAP[$cp]; //@line 263 "imageop.c"
        var $134=$i; //@line 263 "imageop.c"
        var $135=$133+$134; //@line 263 "imageop.c"
        var $136=HEAP[$135]; //@line 263 "imageop.c"
        var $137=($136); //@line 263 "imageop.c"
        var $138=HEAP[$cp]; //@line 263 "imageop.c"
        var $139=HEAP[$maxx]; //@line 263 "imageop.c"
        var $140=($139) * 4; //@line 263 "imageop.c"
        var $141=$i; //@line 263 "imageop.c"
        var $142=($141) - ($140); //@line 263 "imageop.c"
        var $143=$138+$142; //@line 263 "imageop.c"
        var $144=HEAP[$143]; //@line 263 "imageop.c"
        var $145=($144); //@line 263 "imageop.c"
        var $146=($145) + ($137); //@line 263 "imageop.c"
        var $147=($146) >> 1; //@line 263 "imageop.c"
        var $148=((($147)) & 255); //@line 263 "imageop.c"
        var $149=$ncp; //@line 263 "imageop.c"
        HEAP[$149]=$148; //@line 263 "imageop.c"
        var $150=$ncp; //@line 263 "imageop.c"
        var $151=$150+1; //@line 263 "imageop.c"
        $ncp=$151; //@line 263 "imageop.c"
        var $152=$x; //@line 256 "imageop.c"
        var $153=($152) + 1; //@line 256 "imageop.c"
        $x=$153; //@line 256 "imageop.c"
        var $154=HEAP[$maxx]; //@line 256 "imageop.c"
        var $155=$x; //@line 256 "imageop.c"
        var $156=($155) < ($154); //@line 256 "imageop.c"
        if ($156) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 256 "imageop.c"
      case 16: // $bb20
        var $157=$y; //@line 255 "imageop.c"
        var $158=($157) + 1; //@line 255 "imageop.c"
        $y=$158; //@line 255 "imageop.c"
        var $159=HEAP[$maxy]; //@line 255 "imageop.c"
        var $160=$y; //@line 255 "imageop.c"
        var $161=($160) < ($159); //@line 255 "imageop.c"
        if ($161) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 255 "imageop.c"
      case 17: // $bb22
        var $162=$rv; //@line 267 "imageop.c"
        $0=$162; //@line 267 "imageop.c"
        __label__ = 18; break; //@line 267 "imageop.c"
      case 18: // $bb23
        var $163=$0; //@line 229 "imageop.c"
        $retval=$163; //@line 229 "imageop.c"
        var $retval24=$retval; //@line 229 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval24; //@line 229 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey2mono($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $tres=__stackBase__;
        var $x=__stackBase__+4;
        var $y=__stackBase__+8;
        var $len=__stackBase__+12;
        var $cp=__stackBase__+16;
        var $ncp;
        var $ovalue;
        var $rv;
        var $i;
        var $bit;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 280 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str12, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0,$tres,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 280 "imageop.c"
        var $3=($2)==0; //@line 280 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 280 "imageop.c"
      case 1: // $bb
        $0=0; //@line 281 "imageop.c"
        __label__ = 15; break; //@line 281 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$y]; //@line 283 "imageop.c"
        var $5=HEAP[$x]; //@line 283 "imageop.c"
        var $6=HEAP[$len]; //@line 283 "imageop.c"
        var $7=_check_multiply($6, $5, $4); //@line 283 "imageop.c"
        var $8=($7)==0; //@line 283 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 283 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 284 "imageop.c"
        __label__ = 15; break; //@line 284 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$len]; //@line 286 "imageop.c"
        var $10=($9) + 7; //@line 286 "imageop.c"
        var $11=((($10)/8)|0); //@line 286 "imageop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 286 "imageop.c"
        $rv=$12; //@line 286 "imageop.c"
        var $13=$rv; //@line 287 "imageop.c"
        var $14=($13)==0; //@line 287 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 287 "imageop.c"
      case 5: // $bb4
        $0=0; //@line 288 "imageop.c"
        __label__ = 15; break; //@line 288 "imageop.c"
      case 6: // $bb5
        var $15=$rv; //@line 289 "imageop.c"
        var $16=_PyString_AsString($15); //@line 289 "imageop.c"
        $ncp=$16; //@line 289 "imageop.c"
        $bit=128; //@line 291 "imageop.c"
        $ovalue=0; //@line 292 "imageop.c"
        $i=0; //@line 293 "imageop.c"
        var $17=HEAP[$len]; //@line 293 "imageop.c"
        var $18=$i; //@line 293 "imageop.c"
        var $19=($18) < ($17); //@line 293 "imageop.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 293 "imageop.c"
      case 7: // $bb6
        var $20=HEAP[$cp]; //@line 294 "imageop.c"
        var $21=$i; //@line 294 "imageop.c"
        var $22=$20+$21; //@line 294 "imageop.c"
        var $23=HEAP[$22]; //@line 294 "imageop.c"
        var $24=($23); //@line 294 "imageop.c"
        var $25=HEAP[$tres]; //@line 294 "imageop.c"
        var $26=($24) > ($25); //@line 294 "imageop.c"
        if ($26) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 294 "imageop.c"
      case 8: // $bb7
        var $27=$bit; //@line 295 "imageop.c"
        var $28=((($27)) & 255); //@line 295 "imageop.c"
        var $29=$ovalue; //@line 295 "imageop.c"
        var $30=($28) | ($29); //@line 295 "imageop.c"
        $ovalue=$30; //@line 295 "imageop.c"
        __label__ = 9; break; //@line 295 "imageop.c"
      case 9: // $bb8
        var $31=$bit; //@line 296 "imageop.c"
        var $32=($31) >> 1; //@line 296 "imageop.c"
        $bit=$32; //@line 296 "imageop.c"
        var $33=($32)==0; //@line 297 "imageop.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 297 "imageop.c"
      case 10: // $bb9
        var $34=$ncp; //@line 298 "imageop.c"
        var $35=$ovalue; //@line 298 "imageop.c"
        HEAP[$34]=$35; //@line 298 "imageop.c"
        var $36=$ncp; //@line 298 "imageop.c"
        var $37=$36+1; //@line 298 "imageop.c"
        $ncp=$37; //@line 298 "imageop.c"
        $bit=128; //@line 299 "imageop.c"
        $ovalue=0; //@line 300 "imageop.c"
        __label__ = 11; break; //@line 300 "imageop.c"
      case 11: // $bb10
        var $38=$i; //@line 293 "imageop.c"
        var $39=($38) + 1; //@line 293 "imageop.c"
        $i=$39; //@line 293 "imageop.c"
        var $40=HEAP[$len]; //@line 293 "imageop.c"
        var $41=$i; //@line 293 "imageop.c"
        var $42=($41) < ($40); //@line 293 "imageop.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 293 "imageop.c"
      case 12: // $bb12
        var $43=$bit; //@line 303 "imageop.c"
        var $44=($43)!=128; //@line 303 "imageop.c"
        if ($44) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 303 "imageop.c"
      case 13: // $bb13
        var $45=$ncp; //@line 304 "imageop.c"
        var $46=$ovalue; //@line 304 "imageop.c"
        HEAP[$45]=$46; //@line 304 "imageop.c"
        var $47=$ncp; //@line 304 "imageop.c"
        var $48=$47+1; //@line 304 "imageop.c"
        $ncp=$48; //@line 304 "imageop.c"
        __label__ = 14; break; //@line 304 "imageop.c"
      case 14: // $bb14
        var $49=$rv; //@line 305 "imageop.c"
        $0=$49; //@line 305 "imageop.c"
        __label__ = 15; break; //@line 305 "imageop.c"
      case 15: // $bb15
        var $50=$0; //@line 281 "imageop.c"
        $retval=$50; //@line 281 "imageop.c"
        var $retval16=$retval; //@line 281 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 281 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey2grey4($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        var $len=__stackBase__+8;
        var $cp=__stackBase__+12;
        var $ncp;
        var $ovalue;
        var $rv;
        var $i;
        var $pos;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 319 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str16, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 319 "imageop.c"
        var $3=($2)==0; //@line 319 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 319 "imageop.c"
      case 1: // $bb
        $0=0; //@line 320 "imageop.c"
        __label__ = 13; break; //@line 320 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$y]; //@line 322 "imageop.c"
        var $5=HEAP[$x]; //@line 322 "imageop.c"
        var $6=HEAP[$len]; //@line 322 "imageop.c"
        var $7=_check_multiply($6, $5, $4); //@line 322 "imageop.c"
        var $8=($7)==0; //@line 322 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 322 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 323 "imageop.c"
        __label__ = 13; break; //@line 323 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$len]; //@line 325 "imageop.c"
        var $10=($9) + 1; //@line 325 "imageop.c"
        var $11=((($10)/2)|0); //@line 325 "imageop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 325 "imageop.c"
        $rv=$12; //@line 325 "imageop.c"
        var $13=$rv; //@line 326 "imageop.c"
        var $14=($13)==0; //@line 326 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 326 "imageop.c"
      case 5: // $bb4
        $0=0; //@line 327 "imageop.c"
        __label__ = 13; break; //@line 327 "imageop.c"
      case 6: // $bb5
        var $15=$rv; //@line 328 "imageop.c"
        var $16=_PyString_AsString($15); //@line 328 "imageop.c"
        $ncp=$16; //@line 328 "imageop.c"
        $pos=0; //@line 329 "imageop.c"
        $ovalue=0; //@line 330 "imageop.c"
        $i=0; //@line 331 "imageop.c"
        var $17=HEAP[$len]; //@line 331 "imageop.c"
        var $18=$i; //@line 331 "imageop.c"
        var $19=($18) < ($17); //@line 331 "imageop.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 331 "imageop.c"
      case 7: // $bb6
        var $20=HEAP[$cp]; //@line 332 "imageop.c"
        var $21=$i; //@line 332 "imageop.c"
        var $22=$20+$21; //@line 332 "imageop.c"
        var $23=HEAP[$22]; //@line 332 "imageop.c"
        var $24=($23); //@line 332 "imageop.c"
        var $25=($24) & 240; //@line 332 "imageop.c"
        var $26=$pos; //@line 332 "imageop.c"
        var $27=($25) >> ($26); //@line 332 "imageop.c"
        var $28=((($27)) & 255); //@line 332 "imageop.c"
        var $29=$ovalue; //@line 332 "imageop.c"
        var $30=($28) | ($29); //@line 332 "imageop.c"
        $ovalue=$30; //@line 332 "imageop.c"
        var $31=$pos; //@line 333 "imageop.c"
        var $32=($31) + 4; //@line 333 "imageop.c"
        $pos=$32; //@line 333 "imageop.c"
        var $33=($32)==8; //@line 334 "imageop.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 334 "imageop.c"
      case 8: // $bb7
        var $34=$ncp; //@line 335 "imageop.c"
        var $35=$ovalue; //@line 335 "imageop.c"
        HEAP[$34]=$35; //@line 335 "imageop.c"
        var $36=$ncp; //@line 335 "imageop.c"
        var $37=$36+1; //@line 335 "imageop.c"
        $ncp=$37; //@line 335 "imageop.c"
        $ovalue=0; //@line 336 "imageop.c"
        $pos=0; //@line 337 "imageop.c"
        __label__ = 9; break; //@line 337 "imageop.c"
      case 9: // $bb8
        var $38=$i; //@line 331 "imageop.c"
        var $39=($38) + 1; //@line 331 "imageop.c"
        $i=$39; //@line 331 "imageop.c"
        var $40=HEAP[$len]; //@line 331 "imageop.c"
        var $41=$i; //@line 331 "imageop.c"
        var $42=($41) < ($40); //@line 331 "imageop.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 331 "imageop.c"
      case 10: // $bb10
        var $43=$pos; //@line 340 "imageop.c"
        var $44=($43)!=0; //@line 340 "imageop.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 340 "imageop.c"
      case 11: // $bb11
        var $45=$ncp; //@line 341 "imageop.c"
        var $46=$ovalue; //@line 341 "imageop.c"
        HEAP[$45]=$46; //@line 341 "imageop.c"
        var $47=$ncp; //@line 341 "imageop.c"
        var $48=$47+1; //@line 341 "imageop.c"
        $ncp=$48; //@line 341 "imageop.c"
        __label__ = 12; break; //@line 341 "imageop.c"
      case 12: // $bb12
        var $49=$rv; //@line 342 "imageop.c"
        $0=$49; //@line 342 "imageop.c"
        __label__ = 13; break; //@line 342 "imageop.c"
      case 13: // $bb13
        var $50=$0; //@line 320 "imageop.c"
        $retval=$50; //@line 320 "imageop.c"
        var $retval14=$retval; //@line 320 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 320 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey2grey2($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        var $len=__stackBase__+8;
        var $cp=__stackBase__+12;
        var $ncp;
        var $ovalue;
        var $rv;
        var $i;
        var $pos;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 356 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str16, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 356 "imageop.c"
        var $3=($2)==0; //@line 356 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 356 "imageop.c"
      case 1: // $bb
        $0=0; //@line 357 "imageop.c"
        __label__ = 13; break; //@line 357 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$y]; //@line 359 "imageop.c"
        var $5=HEAP[$x]; //@line 359 "imageop.c"
        var $6=HEAP[$len]; //@line 359 "imageop.c"
        var $7=_check_multiply($6, $5, $4); //@line 359 "imageop.c"
        var $8=($7)==0; //@line 359 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 359 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 360 "imageop.c"
        __label__ = 13; break; //@line 360 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$len]; //@line 362 "imageop.c"
        var $10=($9) + 3; //@line 362 "imageop.c"
        var $11=((($10)/4)|0); //@line 362 "imageop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 362 "imageop.c"
        $rv=$12; //@line 362 "imageop.c"
        var $13=$rv; //@line 363 "imageop.c"
        var $14=($13)==0; //@line 363 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 363 "imageop.c"
      case 5: // $bb4
        $0=0; //@line 364 "imageop.c"
        __label__ = 13; break; //@line 364 "imageop.c"
      case 6: // $bb5
        var $15=$rv; //@line 365 "imageop.c"
        var $16=_PyString_AsString($15); //@line 365 "imageop.c"
        $ncp=$16; //@line 365 "imageop.c"
        $pos=0; //@line 366 "imageop.c"
        $ovalue=0; //@line 367 "imageop.c"
        $i=0; //@line 368 "imageop.c"
        var $17=HEAP[$len]; //@line 368 "imageop.c"
        var $18=$i; //@line 368 "imageop.c"
        var $19=($18) < ($17); //@line 368 "imageop.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 368 "imageop.c"
      case 7: // $bb6
        var $20=HEAP[$cp]; //@line 369 "imageop.c"
        var $21=$i; //@line 369 "imageop.c"
        var $22=$20+$21; //@line 369 "imageop.c"
        var $23=HEAP[$22]; //@line 369 "imageop.c"
        var $24=($23); //@line 369 "imageop.c"
        var $25=($24) & 192; //@line 369 "imageop.c"
        var $26=$pos; //@line 369 "imageop.c"
        var $27=($25) >> ($26); //@line 369 "imageop.c"
        var $28=((($27)) & 255); //@line 369 "imageop.c"
        var $29=$ovalue; //@line 369 "imageop.c"
        var $30=($28) | ($29); //@line 369 "imageop.c"
        $ovalue=$30; //@line 369 "imageop.c"
        var $31=$pos; //@line 370 "imageop.c"
        var $32=($31) + 2; //@line 370 "imageop.c"
        $pos=$32; //@line 370 "imageop.c"
        var $33=($32)==8; //@line 371 "imageop.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 371 "imageop.c"
      case 8: // $bb7
        var $34=$ncp; //@line 372 "imageop.c"
        var $35=$ovalue; //@line 372 "imageop.c"
        HEAP[$34]=$35; //@line 372 "imageop.c"
        var $36=$ncp; //@line 372 "imageop.c"
        var $37=$36+1; //@line 372 "imageop.c"
        $ncp=$37; //@line 372 "imageop.c"
        $ovalue=0; //@line 373 "imageop.c"
        $pos=0; //@line 374 "imageop.c"
        __label__ = 9; break; //@line 374 "imageop.c"
      case 9: // $bb8
        var $38=$i; //@line 368 "imageop.c"
        var $39=($38) + 1; //@line 368 "imageop.c"
        $i=$39; //@line 368 "imageop.c"
        var $40=HEAP[$len]; //@line 368 "imageop.c"
        var $41=$i; //@line 368 "imageop.c"
        var $42=($41) < ($40); //@line 368 "imageop.c"
        if ($42) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 368 "imageop.c"
      case 10: // $bb10
        var $43=$pos; //@line 377 "imageop.c"
        var $44=($43)!=0; //@line 377 "imageop.c"
        if ($44) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 377 "imageop.c"
      case 11: // $bb11
        var $45=$ncp; //@line 378 "imageop.c"
        var $46=$ovalue; //@line 378 "imageop.c"
        HEAP[$45]=$46; //@line 378 "imageop.c"
        var $47=$ncp; //@line 378 "imageop.c"
        var $48=$47+1; //@line 378 "imageop.c"
        $ncp=$48; //@line 378 "imageop.c"
        __label__ = 12; break; //@line 378 "imageop.c"
      case 12: // $bb12
        var $49=$rv; //@line 379 "imageop.c"
        $0=$49; //@line 379 "imageop.c"
        __label__ = 13; break; //@line 379 "imageop.c"
      case 13: // $bb13
        var $50=$0; //@line 357 "imageop.c"
        $retval=$50; //@line 357 "imageop.c"
        var $retval14=$retval; //@line 357 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 357 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_dither2mono($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $sum;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        var $len=__stackBase__+8;
        var $cp=__stackBase__+12;
        var $ncp;
        var $ovalue;
        var $rv;
        var $i;
        var $bit;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 392 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str16, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 392 "imageop.c"
        var $3=($2)==0; //@line 392 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 392 "imageop.c"
      case 1: // $bb
        $0=0; //@line 393 "imageop.c"
        __label__ = 15; break; //@line 393 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$y]; //@line 395 "imageop.c"
        var $5=HEAP[$x]; //@line 395 "imageop.c"
        var $6=HEAP[$len]; //@line 395 "imageop.c"
        var $7=_check_multiply($6, $5, $4); //@line 395 "imageop.c"
        var $8=($7)==0; //@line 395 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 395 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 396 "imageop.c"
        __label__ = 15; break; //@line 396 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$len]; //@line 398 "imageop.c"
        var $10=($9) + 7; //@line 398 "imageop.c"
        var $11=((($10)/8)|0); //@line 398 "imageop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 398 "imageop.c"
        $rv=$12; //@line 398 "imageop.c"
        var $13=$rv; //@line 399 "imageop.c"
        var $14=($13)==0; //@line 399 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 399 "imageop.c"
      case 5: // $bb4
        $0=0; //@line 400 "imageop.c"
        __label__ = 15; break; //@line 400 "imageop.c"
      case 6: // $bb5
        var $15=$rv; //@line 401 "imageop.c"
        var $16=_PyString_AsString($15); //@line 401 "imageop.c"
        $ncp=$16; //@line 401 "imageop.c"
        $bit=128; //@line 403 "imageop.c"
        $ovalue=0; //@line 404 "imageop.c"
        $sum=0; //@line 405 "imageop.c"
        $i=0; //@line 406 "imageop.c"
        var $17=HEAP[$len]; //@line 406 "imageop.c"
        var $18=$i; //@line 406 "imageop.c"
        var $19=($18) < ($17); //@line 406 "imageop.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 406 "imageop.c"
      case 7: // $bb6
        var $20=HEAP[$cp]; //@line 407 "imageop.c"
        var $21=$i; //@line 407 "imageop.c"
        var $22=$20+$21; //@line 407 "imageop.c"
        var $23=HEAP[$22]; //@line 407 "imageop.c"
        var $24=($23); //@line 407 "imageop.c"
        var $25=$sum; //@line 407 "imageop.c"
        var $26=($24) + ($25); //@line 407 "imageop.c"
        $sum=$26; //@line 407 "imageop.c"
        var $27=($26) > 255; //@line 408 "imageop.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 408 "imageop.c"
      case 8: // $bb7
        var $28=$sum; //@line 409 "imageop.c"
        var $29=($28) - 256; //@line 409 "imageop.c"
        $sum=$29; //@line 409 "imageop.c"
        var $30=$bit; //@line 410 "imageop.c"
        var $31=((($30)) & 255); //@line 410 "imageop.c"
        var $32=$ovalue; //@line 410 "imageop.c"
        var $33=($31) | ($32); //@line 410 "imageop.c"
        $ovalue=$33; //@line 410 "imageop.c"
        __label__ = 9; break; //@line 410 "imageop.c"
      case 9: // $bb8
        var $34=$bit; //@line 412 "imageop.c"
        var $35=($34) >> 1; //@line 412 "imageop.c"
        $bit=$35; //@line 412 "imageop.c"
        var $36=($35)==0; //@line 413 "imageop.c"
        if ($36) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 413 "imageop.c"
      case 10: // $bb9
        var $37=$ncp; //@line 414 "imageop.c"
        var $38=$ovalue; //@line 414 "imageop.c"
        HEAP[$37]=$38; //@line 414 "imageop.c"
        var $39=$ncp; //@line 414 "imageop.c"
        var $40=$39+1; //@line 414 "imageop.c"
        $ncp=$40; //@line 414 "imageop.c"
        $bit=128; //@line 415 "imageop.c"
        $ovalue=0; //@line 416 "imageop.c"
        __label__ = 11; break; //@line 416 "imageop.c"
      case 11: // $bb10
        var $41=$i; //@line 406 "imageop.c"
        var $42=($41) + 1; //@line 406 "imageop.c"
        $i=$42; //@line 406 "imageop.c"
        var $43=HEAP[$len]; //@line 406 "imageop.c"
        var $44=$i; //@line 406 "imageop.c"
        var $45=($44) < ($43); //@line 406 "imageop.c"
        if ($45) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 406 "imageop.c"
      case 12: // $bb12
        var $46=$bit; //@line 419 "imageop.c"
        var $47=($46)!=128; //@line 419 "imageop.c"
        if ($47) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 419 "imageop.c"
      case 13: // $bb13
        var $48=$ncp; //@line 420 "imageop.c"
        var $49=$ovalue; //@line 420 "imageop.c"
        HEAP[$48]=$49; //@line 420 "imageop.c"
        var $50=$ncp; //@line 420 "imageop.c"
        var $51=$50+1; //@line 420 "imageop.c"
        $ncp=$51; //@line 420 "imageop.c"
        __label__ = 14; break; //@line 420 "imageop.c"
      case 14: // $bb14
        var $52=$rv; //@line 421 "imageop.c"
        $0=$52; //@line 421 "imageop.c"
        __label__ = 15; break; //@line 421 "imageop.c"
      case 15: // $bb15
        var $53=$0; //@line 393 "imageop.c"
        $retval=$53; //@line 393 "imageop.c"
        var $retval16=$retval; //@line 393 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 393 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_dither2grey2($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        var $len=__stackBase__+8;
        var $cp=__stackBase__+12;
        var $ncp;
        var $ovalue;
        var $rv;
        var $i;
        var $pos;
        var $sum;
        var $nvalue;
        $self_addr=$self;
        $args_addr=$args;
        $sum=0; //@line 433 "imageop.c"
        var $1=$args_addr; //@line 436 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str16, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 436 "imageop.c"
        var $3=($2)==0; //@line 436 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 436 "imageop.c"
      case 1: // $bb
        $0=0; //@line 437 "imageop.c"
        __label__ = 13; break; //@line 437 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$y]; //@line 439 "imageop.c"
        var $5=HEAP[$x]; //@line 439 "imageop.c"
        var $6=HEAP[$len]; //@line 439 "imageop.c"
        var $7=_check_multiply($6, $5, $4); //@line 439 "imageop.c"
        var $8=($7)==0; //@line 439 "imageop.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 439 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 440 "imageop.c"
        __label__ = 13; break; //@line 440 "imageop.c"
      case 4: // $bb3
        var $9=HEAP[$len]; //@line 442 "imageop.c"
        var $10=($9) + 3; //@line 442 "imageop.c"
        var $11=((($10)/4)|0); //@line 442 "imageop.c"
        var $12=_PyString_FromStringAndSize(0, $11); //@line 442 "imageop.c"
        $rv=$12; //@line 442 "imageop.c"
        var $13=$rv; //@line 443 "imageop.c"
        var $14=($13)==0; //@line 443 "imageop.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 443 "imageop.c"
      case 5: // $bb4
        $0=0; //@line 444 "imageop.c"
        __label__ = 13; break; //@line 444 "imageop.c"
      case 6: // $bb5
        var $15=$rv; //@line 445 "imageop.c"
        var $16=_PyString_AsString($15); //@line 445 "imageop.c"
        $ncp=$16; //@line 445 "imageop.c"
        $pos=1; //@line 446 "imageop.c"
        $ovalue=0; //@line 447 "imageop.c"
        $i=0; //@line 448 "imageop.c"
        var $17=HEAP[$len]; //@line 448 "imageop.c"
        var $18=$i; //@line 448 "imageop.c"
        var $19=($18) < ($17); //@line 448 "imageop.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 448 "imageop.c"
      case 7: // $bb6
        var $20=HEAP[$cp]; //@line 449 "imageop.c"
        var $21=$i; //@line 449 "imageop.c"
        var $22=$20+$21; //@line 449 "imageop.c"
        var $23=HEAP[$22]; //@line 449 "imageop.c"
        var $24=($23); //@line 449 "imageop.c"
        var $25=$sum; //@line 449 "imageop.c"
        var $26=($24) + ($25); //@line 449 "imageop.c"
        $sum=$26; //@line 449 "imageop.c"
        var $27=$sum; //@line 450 "imageop.c"
        var $28=($27) & 384; //@line 450 "imageop.c"
        $nvalue=$28; //@line 450 "imageop.c"
        var $29=$sum; //@line 451 "imageop.c"
        var $30=$nvalue; //@line 451 "imageop.c"
        var $31=($29) - ($30); //@line 451 "imageop.c"
        $sum=$31; //@line 451 "imageop.c"
        var $32=$nvalue; //@line 452 "imageop.c"
        var $33=$pos; //@line 452 "imageop.c"
        var $34=($32) >> ($33); //@line 452 "imageop.c"
        var $35=((($34)) & 255); //@line 452 "imageop.c"
        var $36=$ovalue; //@line 452 "imageop.c"
        var $37=($35) | ($36); //@line 452 "imageop.c"
        $ovalue=$37; //@line 452 "imageop.c"
        var $38=$pos; //@line 453 "imageop.c"
        var $39=($38) + 2; //@line 453 "imageop.c"
        $pos=$39; //@line 453 "imageop.c"
        var $40=($39)==9; //@line 454 "imageop.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 454 "imageop.c"
      case 8: // $bb7
        var $41=$ncp; //@line 455 "imageop.c"
        var $42=$ovalue; //@line 455 "imageop.c"
        HEAP[$41]=$42; //@line 455 "imageop.c"
        var $43=$ncp; //@line 455 "imageop.c"
        var $44=$43+1; //@line 455 "imageop.c"
        $ncp=$44; //@line 455 "imageop.c"
        $ovalue=0; //@line 456 "imageop.c"
        $pos=1; //@line 457 "imageop.c"
        __label__ = 9; break; //@line 457 "imageop.c"
      case 9: // $bb8
        var $45=$i; //@line 448 "imageop.c"
        var $46=($45) + 1; //@line 448 "imageop.c"
        $i=$46; //@line 448 "imageop.c"
        var $47=HEAP[$len]; //@line 448 "imageop.c"
        var $48=$i; //@line 448 "imageop.c"
        var $49=($48) < ($47); //@line 448 "imageop.c"
        if ($49) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 448 "imageop.c"
      case 10: // $bb10
        var $50=$pos; //@line 460 "imageop.c"
        var $51=($50)!=0; //@line 460 "imageop.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 460 "imageop.c"
      case 11: // $bb11
        var $52=$ncp; //@line 461 "imageop.c"
        var $53=$ovalue; //@line 461 "imageop.c"
        HEAP[$52]=$53; //@line 461 "imageop.c"
        var $54=$ncp; //@line 461 "imageop.c"
        var $55=$54+1; //@line 461 "imageop.c"
        $ncp=$55; //@line 461 "imageop.c"
        __label__ = 12; break; //@line 461 "imageop.c"
      case 12: // $bb12
        var $56=$rv; //@line 462 "imageop.c"
        $0=$56; //@line 462 "imageop.c"
        __label__ = 13; break; //@line 462 "imageop.c"
      case 13: // $bb13
        var $57=$0; //@line 437 "imageop.c"
        $retval=$57; //@line 437 "imageop.c"
        var $retval14=$retval; //@line 437 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 437 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_mono2grey($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $v0=__stackBase__;
        var $v1=__stackBase__+4;
        var $x=__stackBase__+8;
        var $y=__stackBase__+12;
        var $len=__stackBase__+16;
        var $nlen;
        var $cp=__stackBase__+20;
        var $ncp;
        var $rv;
        var $i;
        var $bit;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 473 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str17, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0,$v0,0,0,0,$v1,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 473 "imageop.c"
        var $3=($2)==0; //@line 473 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 473 "imageop.c"
      case 1: // $bb
        $0=0; //@line 474 "imageop.c"
        __label__ = 16; break; //@line 474 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 476 "imageop.c"
        var $5=HEAP[$y]; //@line 476 "imageop.c"
        var $6=($5) * ($4); //@line 476 "imageop.c"
        $nlen=$6; //@line 476 "imageop.c"
        var $7=HEAP[$y]; //@line 477 "imageop.c"
        var $8=HEAP[$x]; //@line 477 "imageop.c"
        var $9=$nlen; //@line 477 "imageop.c"
        var $10=_check_multiply($9, $8, $7); //@line 477 "imageop.c"
        var $11=($10)==0; //@line 477 "imageop.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 477 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 478 "imageop.c"
        __label__ = 16; break; //@line 478 "imageop.c"
      case 4: // $bb3
        var $12=$nlen; //@line 479 "imageop.c"
        var $13=($12) + 7; //@line 479 "imageop.c"
        var $14=((($13)/8)|0); //@line 479 "imageop.c"
        var $15=HEAP[$len]; //@line 479 "imageop.c"
        var $16=($14)!=($15); //@line 479 "imageop.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 479 "imageop.c"
      case 5: // $bb4
        var $17=HEAP[_ImageopError]; //@line 480 "imageop.c"
        _PyErr_SetString($17, __str1); //@line 480 "imageop.c"
        $0=0; //@line 481 "imageop.c"
        __label__ = 16; break; //@line 481 "imageop.c"
      case 6: // $bb5
        var $18=$nlen; //@line 484 "imageop.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 484 "imageop.c"
        $rv=$19; //@line 484 "imageop.c"
        var $20=$rv; //@line 485 "imageop.c"
        var $21=($20)==0; //@line 485 "imageop.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 485 "imageop.c"
      case 7: // $bb6
        $0=0; //@line 486 "imageop.c"
        __label__ = 16; break; //@line 486 "imageop.c"
      case 8: // $bb7
        var $22=$rv; //@line 487 "imageop.c"
        var $23=_PyString_AsString($22); //@line 487 "imageop.c"
        $ncp=$23; //@line 487 "imageop.c"
        $bit=128; //@line 489 "imageop.c"
        $i=0; //@line 490 "imageop.c"
        var $24=$i; //@line 490 "imageop.c"
        var $25=$nlen; //@line 490 "imageop.c"
        var $26=($24) < ($25); //@line 490 "imageop.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 490 "imageop.c"
      case 9: // $bb8
        var $27=HEAP[$cp]; //@line 491 "imageop.c"
        var $28=HEAP[$27]; //@line 491 "imageop.c"
        var $29=($28); //@line 491 "imageop.c"
        var $30=$bit; //@line 491 "imageop.c"
        var $31=($29) & ($30); //@line 491 "imageop.c"
        var $32=($31)!=0; //@line 491 "imageop.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 491 "imageop.c"
      case 10: // $bb9
        var $33=HEAP[$v1]; //@line 492 "imageop.c"
        var $34=((($33)) & 255); //@line 492 "imageop.c"
        var $35=$ncp; //@line 492 "imageop.c"
        HEAP[$35]=$34; //@line 492 "imageop.c"
        var $36=$ncp; //@line 492 "imageop.c"
        var $37=$36+1; //@line 492 "imageop.c"
        $ncp=$37; //@line 492 "imageop.c"
        __label__ = 12; break; //@line 492 "imageop.c"
      case 11: // $bb10
        var $38=HEAP[$v0]; //@line 494 "imageop.c"
        var $39=((($38)) & 255); //@line 494 "imageop.c"
        var $40=$ncp; //@line 494 "imageop.c"
        HEAP[$40]=$39; //@line 494 "imageop.c"
        var $41=$ncp; //@line 494 "imageop.c"
        var $42=$41+1; //@line 494 "imageop.c"
        $ncp=$42; //@line 494 "imageop.c"
        __label__ = 12; break; //@line 494 "imageop.c"
      case 12: // $bb11
        var $43=$bit; //@line 495 "imageop.c"
        var $44=($43) >> 1; //@line 495 "imageop.c"
        $bit=$44; //@line 495 "imageop.c"
        var $45=($44)==0; //@line 496 "imageop.c"
        if ($45) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 496 "imageop.c"
      case 13: // $bb12
        $bit=128; //@line 497 "imageop.c"
        var $46=HEAP[$cp]; //@line 498 "imageop.c"
        var $47=$46+1; //@line 498 "imageop.c"
        HEAP[$cp]=$47; //@line 498 "imageop.c"
        __label__ = 14; break; //@line 498 "imageop.c"
      case 14: // $bb13
        var $48=$i; //@line 490 "imageop.c"
        var $49=($48) + 1; //@line 490 "imageop.c"
        $i=$49; //@line 490 "imageop.c"
        var $50=$i; //@line 490 "imageop.c"
        var $51=$nlen; //@line 490 "imageop.c"
        var $52=($50) < ($51); //@line 490 "imageop.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 490 "imageop.c"
      case 15: // $bb15
        var $53=$rv; //@line 501 "imageop.c"
        $0=$53; //@line 501 "imageop.c"
        __label__ = 16; break; //@line 501 "imageop.c"
      case 16: // $bb16
        var $54=$0; //@line 474 "imageop.c"
        $retval=$54; //@line 474 "imageop.c"
        var $retval17=$retval; //@line 474 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 474 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey22grey($self, $args) {
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
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        var $len=__stackBase__+8;
        var $nlen;
        var $cp=__stackBase__+12;
        var $ncp;
        var $rv;
        var $i;
        var $pos;
        var $value;
        var $nvalue;
        $self_addr=$self;
        $args_addr=$args;
        $value=0; //@line 510 "imageop.c"
        var $1=$args_addr; //@line 512 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str16, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 512 "imageop.c"
        var $3=($2)==0; //@line 512 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 512 "imageop.c"
      case 1: // $bb
        $0=0; //@line 513 "imageop.c"
        __label__ = 14; break; //@line 513 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 515 "imageop.c"
        var $5=HEAP[$y]; //@line 515 "imageop.c"
        var $6=($5) * ($4); //@line 515 "imageop.c"
        $nlen=$6; //@line 515 "imageop.c"
        var $7=HEAP[$y]; //@line 516 "imageop.c"
        var $8=HEAP[$x]; //@line 516 "imageop.c"
        var $9=$nlen; //@line 516 "imageop.c"
        var $10=_check_multiply($9, $8, $7); //@line 516 "imageop.c"
        var $11=($10)==0; //@line 516 "imageop.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 516 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 517 "imageop.c"
        __label__ = 14; break; //@line 517 "imageop.c"
      case 4: // $bb3
        var $12=$nlen; //@line 519 "imageop.c"
        var $13=($12) + 3; //@line 519 "imageop.c"
        var $14=((($13)/4)|0); //@line 519 "imageop.c"
        var $15=HEAP[$len]; //@line 519 "imageop.c"
        var $16=($14)!=($15); //@line 519 "imageop.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 519 "imageop.c"
      case 5: // $bb4
        var $17=HEAP[_ImageopError]; //@line 520 "imageop.c"
        _PyErr_SetString($17, __str1); //@line 520 "imageop.c"
        $0=0; //@line 521 "imageop.c"
        __label__ = 14; break; //@line 521 "imageop.c"
      case 6: // $bb5
        var $18=$nlen; //@line 524 "imageop.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 524 "imageop.c"
        $rv=$19; //@line 524 "imageop.c"
        var $20=$rv; //@line 525 "imageop.c"
        var $21=($20)==0; //@line 525 "imageop.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 525 "imageop.c"
      case 7: // $bb6
        $0=0; //@line 526 "imageop.c"
        __label__ = 14; break; //@line 526 "imageop.c"
      case 8: // $bb7
        var $22=$rv; //@line 527 "imageop.c"
        var $23=_PyString_AsString($22); //@line 527 "imageop.c"
        $ncp=$23; //@line 527 "imageop.c"
        $pos=0; //@line 529 "imageop.c"
        $i=0; //@line 530 "imageop.c"
        var $24=$i; //@line 530 "imageop.c"
        var $25=$nlen; //@line 530 "imageop.c"
        var $26=($24) < ($25); //@line 530 "imageop.c"
        if ($26) { __lastLabel__ = 8; __label__ = 10; break; } else { __lastLabel__ = 8; __label__ = 13; break; } //@line 530 "imageop.c"
      case 9: // $bb8thread_pre_split
        var $_pr=$pos;
        __lastLabel__ = 9; __label__ = 10; break;
      case 10: // $bb8
        var $27=__lastLabel__ == 9 ? $_pr : (0);
        var $28=($27)==0; //@line 531 "imageop.c"
        if ($28) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 531 "imageop.c"
      case 11: // $bb9
        var $29=HEAP[$cp]; //@line 532 "imageop.c"
        var $30=HEAP[$29]; //@line 532 "imageop.c"
        var $31=($30); //@line 532 "imageop.c"
        $value=$31; //@line 532 "imageop.c"
        var $32=$29+1; //@line 532 "imageop.c"
        HEAP[$cp]=$32; //@line 532 "imageop.c"
        $pos=8; //@line 533 "imageop.c"
        __label__ = 12; break; //@line 533 "imageop.c"
      case 12: // $bb10
        var $33=$pos; //@line 535 "imageop.c"
        var $34=($33) - 2; //@line 535 "imageop.c"
        $pos=$34; //@line 535 "imageop.c"
        var $35=$value; //@line 536 "imageop.c"
        var $36=$pos; //@line 536 "imageop.c"
        var $37=($35) >> ($36); //@line 536 "imageop.c"
        var $38=($37) & 3; //@line 536 "imageop.c"
        $nvalue=$38; //@line 536 "imageop.c"
        var $39=$nvalue; //@line 537 "imageop.c"
        var $40=($39) << 2; //@line 537 "imageop.c"
        var $41=((($40)) & 255); //@line 537 "imageop.c"
        var $42=$nvalue; //@line 537 "imageop.c"
        var $43=((($42)) & 255); //@line 537 "imageop.c"
        var $44=$nvalue; //@line 537 "imageop.c"
        var $45=($44) << 4; //@line 537 "imageop.c"
        var $46=((($45)) & 255); //@line 537 "imageop.c"
        var $47=$nvalue; //@line 537 "imageop.c"
        var $48=($47) << 6; //@line 537 "imageop.c"
        var $49=((($48)) & 255); //@line 537 "imageop.c"
        var $50=($41) | ($43); //@line 537 "imageop.c"
        var $51=($50) | ($46); //@line 537 "imageop.c"
        var $52=($51) | ($49); //@line 537 "imageop.c"
        var $53=$ncp; //@line 537 "imageop.c"
        HEAP[$53]=$52; //@line 537 "imageop.c"
        var $54=$ncp; //@line 537 "imageop.c"
        var $55=$54+1; //@line 537 "imageop.c"
        $ncp=$55; //@line 537 "imageop.c"
        var $56=$i; //@line 530 "imageop.c"
        var $57=($56) + 1; //@line 530 "imageop.c"
        $i=$57; //@line 530 "imageop.c"
        var $58=$i; //@line 530 "imageop.c"
        var $59=$nlen; //@line 530 "imageop.c"
        var $60=($58) < ($59); //@line 530 "imageop.c"
        if ($60) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 530 "imageop.c"
      case 13: // $bb12
        var $61=$rv; //@line 540 "imageop.c"
        $0=$61; //@line 540 "imageop.c"
        __label__ = 14; break; //@line 540 "imageop.c"
      case 14: // $bb13
        var $62=$0; //@line 513 "imageop.c"
        $retval=$62; //@line 513 "imageop.c"
        var $retval14=$retval; //@line 513 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 513 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey42grey($self, $args) {
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
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        var $len=__stackBase__+8;
        var $nlen;
        var $cp=__stackBase__+12;
        var $ncp;
        var $rv;
        var $i;
        var $pos;
        var $value;
        var $nvalue;
        $self_addr=$self;
        $args_addr=$args;
        $value=0; //@line 549 "imageop.c"
        var $1=$args_addr; //@line 551 "imageop.c"
        var $2=_PyArg_ParseTuple($1, __str16, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 551 "imageop.c"
        var $3=($2)==0; //@line 551 "imageop.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 551 "imageop.c"
      case 1: // $bb
        $0=0; //@line 552 "imageop.c"
        __label__ = 14; break; //@line 552 "imageop.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 554 "imageop.c"
        var $5=HEAP[$y]; //@line 554 "imageop.c"
        var $6=($5) * ($4); //@line 554 "imageop.c"
        $nlen=$6; //@line 554 "imageop.c"
        var $7=HEAP[$y]; //@line 555 "imageop.c"
        var $8=HEAP[$x]; //@line 555 "imageop.c"
        var $9=$nlen; //@line 555 "imageop.c"
        var $10=_check_multiply($9, $8, $7); //@line 555 "imageop.c"
        var $11=($10)==0; //@line 555 "imageop.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 555 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 556 "imageop.c"
        __label__ = 14; break; //@line 556 "imageop.c"
      case 4: // $bb3
        var $12=$nlen; //@line 557 "imageop.c"
        var $13=($12) + 1; //@line 557 "imageop.c"
        var $14=((($13)/2)|0); //@line 557 "imageop.c"
        var $15=HEAP[$len]; //@line 557 "imageop.c"
        var $16=($14)!=($15); //@line 557 "imageop.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 557 "imageop.c"
      case 5: // $bb4
        var $17=HEAP[_ImageopError]; //@line 558 "imageop.c"
        _PyErr_SetString($17, __str1); //@line 558 "imageop.c"
        $0=0; //@line 559 "imageop.c"
        __label__ = 14; break; //@line 559 "imageop.c"
      case 6: // $bb5
        var $18=$nlen; //@line 562 "imageop.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 562 "imageop.c"
        $rv=$19; //@line 562 "imageop.c"
        var $20=$rv; //@line 563 "imageop.c"
        var $21=($20)==0; //@line 563 "imageop.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 563 "imageop.c"
      case 7: // $bb6
        $0=0; //@line 564 "imageop.c"
        __label__ = 14; break; //@line 564 "imageop.c"
      case 8: // $bb7
        var $22=$rv; //@line 565 "imageop.c"
        var $23=_PyString_AsString($22); //@line 565 "imageop.c"
        $ncp=$23; //@line 565 "imageop.c"
        $pos=0; //@line 567 "imageop.c"
        $i=0; //@line 568 "imageop.c"
        var $24=$i; //@line 568 "imageop.c"
        var $25=$nlen; //@line 568 "imageop.c"
        var $26=($24) < ($25); //@line 568 "imageop.c"
        if ($26) { __lastLabel__ = 8; __label__ = 10; break; } else { __lastLabel__ = 8; __label__ = 13; break; } //@line 568 "imageop.c"
      case 9: // $bb8thread_pre_split
        var $_pr=$pos;
        __lastLabel__ = 9; __label__ = 10; break;
      case 10: // $bb8
        var $27=__lastLabel__ == 9 ? $_pr : (0);
        var $28=($27)==0; //@line 569 "imageop.c"
        if ($28) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 569 "imageop.c"
      case 11: // $bb9
        var $29=HEAP[$cp]; //@line 570 "imageop.c"
        var $30=HEAP[$29]; //@line 570 "imageop.c"
        var $31=($30); //@line 570 "imageop.c"
        $value=$31; //@line 570 "imageop.c"
        var $32=$29+1; //@line 570 "imageop.c"
        HEAP[$cp]=$32; //@line 570 "imageop.c"
        $pos=8; //@line 571 "imageop.c"
        __label__ = 12; break; //@line 571 "imageop.c"
      case 12: // $bb10
        var $33=$pos; //@line 573 "imageop.c"
        var $34=($33) - 4; //@line 573 "imageop.c"
        $pos=$34; //@line 573 "imageop.c"
        var $35=$value; //@line 574 "imageop.c"
        var $36=$pos; //@line 574 "imageop.c"
        var $37=($35) >> ($36); //@line 574 "imageop.c"
        var $38=($37) & 15; //@line 574 "imageop.c"
        $nvalue=$38; //@line 574 "imageop.c"
        var $39=$nvalue; //@line 575 "imageop.c"
        var $40=($39) << 4; //@line 575 "imageop.c"
        var $41=((($40)) & 255); //@line 575 "imageop.c"
        var $42=$nvalue; //@line 575 "imageop.c"
        var $43=((($42)) & 255); //@line 575 "imageop.c"
        var $44=($41) | ($43); //@line 575 "imageop.c"
        var $45=$ncp; //@line 575 "imageop.c"
        HEAP[$45]=$44; //@line 575 "imageop.c"
        var $46=$ncp; //@line 575 "imageop.c"
        var $47=$46+1; //@line 575 "imageop.c"
        $ncp=$47; //@line 575 "imageop.c"
        var $48=$i; //@line 568 "imageop.c"
        var $49=($48) + 1; //@line 568 "imageop.c"
        $i=$49; //@line 568 "imageop.c"
        var $50=$i; //@line 568 "imageop.c"
        var $51=$nlen; //@line 568 "imageop.c"
        var $52=($50) < ($51); //@line 568 "imageop.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 568 "imageop.c"
      case 13: // $bb12
        var $53=$rv; //@line 577 "imageop.c"
        $0=$53; //@line 577 "imageop.c"
        __label__ = 14; break; //@line 577 "imageop.c"
      case 14: // $bb13
        var $54=$0; //@line 552 "imageop.c"
        $retval=$54; //@line 552 "imageop.c"
        var $retval14=$retval; //@line 552 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 552 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_rgb2rgb8($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        var $len=__stackBase__+8;
        var $nlen;
        var $cp=__stackBase__+12;
        var $ncp;
        var $rv;
        var $i;
        var $r;
        var $g;
        var $b;
        var $backward_compatible;
        var $value;
        $self_addr=$self;
        $args_addr=$args;
        var $1=_imageop_backward_compatible(); //@line 588 "imageop.c"
        $backward_compatible=$1; //@line 588 "imageop.c"
        var $2=$args_addr; //@line 590 "imageop.c"
        var $3=_PyArg_ParseTuple($2, __str16, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 590 "imageop.c"
        var $4=($3)==0; //@line 590 "imageop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 590 "imageop.c"
      case 1: // $bb
        $0=0; //@line 591 "imageop.c"
        __label__ = 14; break; //@line 591 "imageop.c"
      case 2: // $bb1
        var $5=HEAP[$y]; //@line 593 "imageop.c"
        var $6=HEAP[$x]; //@line 593 "imageop.c"
        var $7=HEAP[$len]; //@line 593 "imageop.c"
        var $8=_check_multiply_size($7, $6, __str2, $5, __str3, 4); //@line 593 "imageop.c"
        var $9=($8)==0; //@line 593 "imageop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 593 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 594 "imageop.c"
        __label__ = 14; break; //@line 594 "imageop.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 595 "imageop.c"
        var $11=HEAP[$y]; //@line 595 "imageop.c"
        var $12=($11) * ($10); //@line 595 "imageop.c"
        $nlen=$12; //@line 595 "imageop.c"
        var $13=HEAP[$y]; //@line 596 "imageop.c"
        var $14=HEAP[$x]; //@line 596 "imageop.c"
        var $15=$nlen; //@line 596 "imageop.c"
        var $16=_check_multiply($15, $14, $13); //@line 596 "imageop.c"
        var $17=($16)==0; //@line 596 "imageop.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 596 "imageop.c"
      case 5: // $bb4
        $0=0; //@line 597 "imageop.c"
        __label__ = 14; break; //@line 597 "imageop.c"
      case 6: // $bb5
        var $18=$nlen; //@line 599 "imageop.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 599 "imageop.c"
        $rv=$19; //@line 599 "imageop.c"
        var $20=$rv; //@line 600 "imageop.c"
        var $21=($20)==0; //@line 600 "imageop.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 600 "imageop.c"
      case 7: // $bb6
        $0=0; //@line 601 "imageop.c"
        __label__ = 14; break; //@line 601 "imageop.c"
      case 8: // $bb7
        var $22=$rv; //@line 602 "imageop.c"
        var $23=_PyString_AsString($22); //@line 602 "imageop.c"
        $ncp=$23; //@line 602 "imageop.c"
        $i=0; //@line 604 "imageop.c"
        var $24=$i; //@line 604 "imageop.c"
        var $25=$nlen; //@line 604 "imageop.c"
        var $26=($24) < ($25); //@line 604 "imageop.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 604 "imageop.c"
      case 9: // $bb8
        var $27=$backward_compatible; //@line 606 "imageop.c"
        var $28=($27)!=0; //@line 606 "imageop.c"
        var $29=HEAP[$cp]; //@line 607 "imageop.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 606 "imageop.c"
      case 10: // $bb9
        var $30=$29; //@line 607 "imageop.c"
        var $31=HEAP[$30]; //@line 607 "imageop.c"
        $value=$31; //@line 607 "imageop.c"
        var $32=HEAP[$cp]; //@line 608 "imageop.c"
        var $33=$32+4; //@line 608 "imageop.c"
        HEAP[$cp]=$33; //@line 608 "imageop.c"
        var $34=$value; //@line 609 "imageop.c"
        var $35=($34) & 255; //@line 609 "imageop.c"
        var $36=($35); //@line 609 "imageop.c"
        var $37=($36) / 255; //@line 609 "imageop.c"
        var $38=($37) * 7; //@line 609 "imageop.c"
        var $39=($38) + 0.5; //@line 609 "imageop.c"
        var $40=((($39))|0); //@line 609 "imageop.c"
        $r=$40; //@line 609 "imageop.c"
        var $41=$value; //@line 610 "imageop.c"
        var $42=($41) >>> 8; //@line 610 "imageop.c"
        var $43=($42) & 255; //@line 610 "imageop.c"
        var $44=($43); //@line 610 "imageop.c"
        var $45=($44) / 255; //@line 610 "imageop.c"
        var $46=($45) * 7; //@line 610 "imageop.c"
        var $47=($46) + 0.5; //@line 610 "imageop.c"
        var $48=((($47))|0); //@line 610 "imageop.c"
        $g=$48; //@line 610 "imageop.c"
        var $49=$value; //@line 611 "imageop.c"
        var $50=($49) >>> 16; //@line 611 "imageop.c"
        var $51=($50) & 255; //@line 611 "imageop.c"
        var $52=($51); //@line 611 "imageop.c"
        var $53=($52) / 255; //@line 611 "imageop.c"
        var $54=($53) * 3; //@line 611 "imageop.c"
        var $55=($54) + 0.5; //@line 611 "imageop.c"
        var $56=((($55))|0); //@line 611 "imageop.c"
        $b=$56; //@line 611 "imageop.c"
        __label__ = 12; break; //@line 611 "imageop.c"
      case 11: // $bb10
        var $57=$29+1; //@line 613 "imageop.c"
        HEAP[$cp]=$57; //@line 613 "imageop.c"
        var $58=HEAP[$cp]; //@line 614 "imageop.c"
        var $59=HEAP[$58]; //@line 614 "imageop.c"
        var $60=($59); //@line 614 "imageop.c"
        var $61=($60); //@line 614 "imageop.c"
        var $62=($61) / 255; //@line 614 "imageop.c"
        var $63=($62) * 3; //@line 614 "imageop.c"
        var $64=($63) + 0.5; //@line 614 "imageop.c"
        var $65=((($64))|0); //@line 614 "imageop.c"
        $b=$65; //@line 614 "imageop.c"
        var $66=$58+1; //@line 614 "imageop.c"
        HEAP[$cp]=$66; //@line 614 "imageop.c"
        var $67=HEAP[$cp]; //@line 615 "imageop.c"
        var $68=HEAP[$67]; //@line 615 "imageop.c"
        var $69=($68); //@line 615 "imageop.c"
        var $70=($69); //@line 615 "imageop.c"
        var $71=($70) / 255; //@line 615 "imageop.c"
        var $72=($71) * 7; //@line 615 "imageop.c"
        var $73=($72) + 0.5; //@line 615 "imageop.c"
        var $74=((($73))|0); //@line 615 "imageop.c"
        $g=$74; //@line 615 "imageop.c"
        var $75=$67+1; //@line 615 "imageop.c"
        HEAP[$cp]=$75; //@line 615 "imageop.c"
        var $76=HEAP[$cp]; //@line 616 "imageop.c"
        var $77=HEAP[$76]; //@line 616 "imageop.c"
        var $78=($77); //@line 616 "imageop.c"
        var $79=($78); //@line 616 "imageop.c"
        var $80=($79) / 255; //@line 616 "imageop.c"
        var $81=($80) * 7; //@line 616 "imageop.c"
        var $82=($81) + 0.5; //@line 616 "imageop.c"
        var $83=((($82))|0); //@line 616 "imageop.c"
        $r=$83; //@line 616 "imageop.c"
        var $84=$76+1; //@line 616 "imageop.c"
        HEAP[$cp]=$84; //@line 616 "imageop.c"
        __label__ = 12; break; //@line 616 "imageop.c"
      case 12: // $bb11
        var $85=$r; //@line 618 "imageop.c"
        var $86=($85) << 5; //@line 618 "imageop.c"
        var $87=((($86)) & 255); //@line 618 "imageop.c"
        var $88=$b; //@line 618 "imageop.c"
        var $89=($88) << 3; //@line 618 "imageop.c"
        var $90=((($89)) & 255); //@line 618 "imageop.c"
        var $91=$g; //@line 618 "imageop.c"
        var $92=((($91)) & 255); //@line 618 "imageop.c"
        var $93=($92) | ($87); //@line 618 "imageop.c"
        var $94=($93) | ($90); //@line 618 "imageop.c"
        var $95=$ncp; //@line 618 "imageop.c"
        HEAP[$95]=$94; //@line 618 "imageop.c"
        var $96=$ncp; //@line 618 "imageop.c"
        var $97=$96+1; //@line 618 "imageop.c"
        $ncp=$97; //@line 618 "imageop.c"
        var $98=$i; //@line 604 "imageop.c"
        var $99=($98) + 1; //@line 604 "imageop.c"
        $i=$99; //@line 604 "imageop.c"
        var $100=$i; //@line 604 "imageop.c"
        var $101=$nlen; //@line 604 "imageop.c"
        var $102=($100) < ($101); //@line 604 "imageop.c"
        if ($102) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 604 "imageop.c"
      case 13: // $bb13
        var $103=$rv; //@line 620 "imageop.c"
        $0=$103; //@line 620 "imageop.c"
        __label__ = 14; break; //@line 620 "imageop.c"
      case 14: // $bb14
        var $104=$0; //@line 591 "imageop.c"
        $retval=$104; //@line 591 "imageop.c"
        var $retval15=$retval; //@line 591 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 591 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_rgb82rgb($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        var $len=__stackBase__+8;
        var $nlen;
        var $cp=__stackBase__+12;
        var $ncp;
        var $rv;
        var $i;
        var $r;
        var $g;
        var $b;
        var $value;
        var $backward_compatible;
        var $nvalue;
        $self_addr=$self;
        $args_addr=$args;
        var $1=_imageop_backward_compatible(); //@line 632 "imageop.c"
        $backward_compatible=$1; //@line 632 "imageop.c"
        var $2=$args_addr; //@line 634 "imageop.c"
        var $3=_PyArg_ParseTuple($2, __str16, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 634 "imageop.c"
        var $4=($3)==0; //@line 634 "imageop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 634 "imageop.c"
      case 1: // $bb
        $0=0; //@line 635 "imageop.c"
        __label__ = 14; break; //@line 635 "imageop.c"
      case 2: // $bb1
        var $5=HEAP[$y]; //@line 637 "imageop.c"
        var $6=HEAP[$x]; //@line 637 "imageop.c"
        var $7=HEAP[$len]; //@line 637 "imageop.c"
        var $8=_check_multiply($7, $6, $5); //@line 637 "imageop.c"
        var $9=($8)==0; //@line 637 "imageop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 637 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 638 "imageop.c"
        __label__ = 14; break; //@line 638 "imageop.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 639 "imageop.c"
        var $11=HEAP[$y]; //@line 639 "imageop.c"
        var $12=($10) * 4; //@line 639 "imageop.c"
        var $13=($12) * ($11); //@line 639 "imageop.c"
        $nlen=$13; //@line 639 "imageop.c"
        var $14=HEAP[$y]; //@line 640 "imageop.c"
        var $15=HEAP[$x]; //@line 640 "imageop.c"
        var $16=$nlen; //@line 640 "imageop.c"
        var $17=_check_multiply_size($16, $15, __str2, $14, __str3, 4); //@line 640 "imageop.c"
        var $18=($17)==0; //@line 640 "imageop.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 640 "imageop.c"
      case 5: // $bb4
        $0=0; //@line 641 "imageop.c"
        __label__ = 14; break; //@line 641 "imageop.c"
      case 6: // $bb5
        var $19=$nlen; //@line 643 "imageop.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 643 "imageop.c"
        $rv=$20; //@line 643 "imageop.c"
        var $21=$rv; //@line 644 "imageop.c"
        var $22=($21)==0; //@line 644 "imageop.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 644 "imageop.c"
      case 7: // $bb6
        $0=0; //@line 645 "imageop.c"
        __label__ = 14; break; //@line 645 "imageop.c"
      case 8: // $bb7
        var $23=$rv; //@line 646 "imageop.c"
        var $24=_PyString_AsString($23); //@line 646 "imageop.c"
        $ncp=$24; //@line 646 "imageop.c"
        $i=0; //@line 648 "imageop.c"
        var $25=HEAP[$len]; //@line 648 "imageop.c"
        var $26=$i; //@line 648 "imageop.c"
        var $27=($26) < ($25); //@line 648 "imageop.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 648 "imageop.c"
      case 9: // $bb8
        var $28=HEAP[$cp]; //@line 652 "imageop.c"
        var $29=HEAP[$28]; //@line 652 "imageop.c"
        $value=$29; //@line 652 "imageop.c"
        var $30=$28+1; //@line 652 "imageop.c"
        HEAP[$cp]=$30; //@line 652 "imageop.c"
        var $31=$value; //@line 653 "imageop.c"
        var $32=($31) >>> 5; //@line 653 "imageop.c"
        var $33=($32); //@line 653 "imageop.c"
        var $34=($33) & 7; //@line 653 "imageop.c"
        $r=$34; //@line 653 "imageop.c"
        var $35=$value; //@line 654 "imageop.c"
        var $36=($35); //@line 654 "imageop.c"
        var $37=($36) & 7; //@line 654 "imageop.c"
        $g=$37; //@line 654 "imageop.c"
        var $38=$value; //@line 655 "imageop.c"
        var $39=($38) >>> 3; //@line 655 "imageop.c"
        var $40=($39); //@line 655 "imageop.c"
        var $41=($40) & 3; //@line 655 "imageop.c"
        $b=$41; //@line 655 "imageop.c"
        var $42=$r; //@line 656 "imageop.c"
        var $43=($42) << 5; //@line 656 "imageop.c"
        var $44=$r; //@line 656 "imageop.c"
        var $45=($44) << 3; //@line 656 "imageop.c"
        var $46=$r; //@line 656 "imageop.c"
        var $47=($46) >> 1; //@line 656 "imageop.c"
        var $48=($45) | ($43); //@line 656 "imageop.c"
        var $49=($48) | ($47); //@line 656 "imageop.c"
        $r=$49; //@line 656 "imageop.c"
        var $50=$g; //@line 657 "imageop.c"
        var $51=($50) << 5; //@line 657 "imageop.c"
        var $52=$g; //@line 657 "imageop.c"
        var $53=($52) << 3; //@line 657 "imageop.c"
        var $54=$g; //@line 657 "imageop.c"
        var $55=($54) >> 1; //@line 657 "imageop.c"
        var $56=($53) | ($51); //@line 657 "imageop.c"
        var $57=($56) | ($55); //@line 657 "imageop.c"
        $g=$57; //@line 657 "imageop.c"
        var $58=$b; //@line 658 "imageop.c"
        var $59=($58) << 6; //@line 658 "imageop.c"
        var $60=$b; //@line 658 "imageop.c"
        var $61=($60) << 4; //@line 658 "imageop.c"
        var $62=$b; //@line 658 "imageop.c"
        var $63=($62) << 2; //@line 658 "imageop.c"
        var $64=$b; //@line 658 "imageop.c"
        var $65=($61) | ($59); //@line 658 "imageop.c"
        var $66=($65) | ($64); //@line 658 "imageop.c"
        var $67=($66) | ($63); //@line 658 "imageop.c"
        $b=$67; //@line 658 "imageop.c"
        var $68=$backward_compatible; //@line 659 "imageop.c"
        var $69=($68)!=0; //@line 659 "imageop.c"
        if ($69) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 659 "imageop.c"
      case 10: // $bb9
        var $70=$g; //@line 660 "imageop.c"
        var $71=($70) << 8; //@line 660 "imageop.c"
        var $72=$r; //@line 660 "imageop.c"
        var $73=$b; //@line 660 "imageop.c"
        var $74=($73) << 16; //@line 660 "imageop.c"
        var $75=($71) | ($72); //@line 660 "imageop.c"
        var $76=($75) | ($74); //@line 660 "imageop.c"
        $nvalue=$76; //@line 660 "imageop.c"
        var $77=$ncp; //@line 661 "imageop.c"
        var $78=$77; //@line 661 "imageop.c"
        var $79=$nvalue; //@line 661 "imageop.c"
        HEAP[$78]=$79; //@line 661 "imageop.c"
        var $80=$ncp; //@line 662 "imageop.c"
        var $81=$80+4; //@line 662 "imageop.c"
        $ncp=$81; //@line 662 "imageop.c"
        __label__ = 12; break; //@line 662 "imageop.c"
      case 11: // $bb10
        var $82=$ncp; //@line 664 "imageop.c"
        HEAP[$82]=0; //@line 664 "imageop.c"
        var $83=$ncp; //@line 664 "imageop.c"
        var $84=$83+1; //@line 664 "imageop.c"
        $ncp=$84; //@line 664 "imageop.c"
        var $85=$b; //@line 665 "imageop.c"
        var $86=((($85)) & 255); //@line 665 "imageop.c"
        var $87=$ncp; //@line 665 "imageop.c"
        HEAP[$87]=$86; //@line 665 "imageop.c"
        var $88=$ncp; //@line 665 "imageop.c"
        var $89=$88+1; //@line 665 "imageop.c"
        $ncp=$89; //@line 665 "imageop.c"
        var $90=$g; //@line 666 "imageop.c"
        var $91=((($90)) & 255); //@line 666 "imageop.c"
        var $92=$ncp; //@line 666 "imageop.c"
        HEAP[$92]=$91; //@line 666 "imageop.c"
        var $93=$ncp; //@line 666 "imageop.c"
        var $94=$93+1; //@line 666 "imageop.c"
        $ncp=$94; //@line 666 "imageop.c"
        var $95=$r; //@line 667 "imageop.c"
        var $96=((($95)) & 255); //@line 667 "imageop.c"
        var $97=$ncp; //@line 667 "imageop.c"
        HEAP[$97]=$96; //@line 667 "imageop.c"
        var $98=$ncp; //@line 667 "imageop.c"
        var $99=$98+1; //@line 667 "imageop.c"
        $ncp=$99; //@line 667 "imageop.c"
        __label__ = 12; break; //@line 667 "imageop.c"
      case 12: // $bb11
        var $100=$i; //@line 648 "imageop.c"
        var $101=($100) + 1; //@line 648 "imageop.c"
        $i=$101; //@line 648 "imageop.c"
        var $102=HEAP[$len]; //@line 648 "imageop.c"
        var $103=$i; //@line 648 "imageop.c"
        var $104=($103) < ($102); //@line 648 "imageop.c"
        if ($104) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 648 "imageop.c"
      case 13: // $bb13
        var $105=$rv; //@line 670 "imageop.c"
        $0=$105; //@line 670 "imageop.c"
        __label__ = 14; break; //@line 670 "imageop.c"
      case 14: // $bb14
        var $106=$0; //@line 635 "imageop.c"
        $retval=$106; //@line 635 "imageop.c"
        var $retval15=$retval; //@line 635 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 635 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_rgb2grey($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        var $len=__stackBase__+8;
        var $nlen;
        var $cp=__stackBase__+12;
        var $ncp;
        var $rv;
        var $i;
        var $r;
        var $g;
        var $b;
        var $nvalue;
        var $backward_compatible;
        var $value;
        $self_addr=$self;
        $args_addr=$args;
        var $1=_imageop_backward_compatible(); //@line 682 "imageop.c"
        $backward_compatible=$1; //@line 682 "imageop.c"
        var $2=$args_addr; //@line 684 "imageop.c"
        var $3=_PyArg_ParseTuple($2, __str16, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 684 "imageop.c"
        var $4=($3)==0; //@line 684 "imageop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 684 "imageop.c"
      case 1: // $bb
        $0=0; //@line 685 "imageop.c"
        __label__ = 16; break; //@line 685 "imageop.c"
      case 2: // $bb1
        var $5=HEAP[$y]; //@line 687 "imageop.c"
        var $6=HEAP[$x]; //@line 687 "imageop.c"
        var $7=HEAP[$len]; //@line 687 "imageop.c"
        var $8=_check_multiply_size($7, $6, __str2, $5, __str3, 4); //@line 687 "imageop.c"
        var $9=($8)==0; //@line 687 "imageop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 687 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 688 "imageop.c"
        __label__ = 16; break; //@line 688 "imageop.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 689 "imageop.c"
        var $11=HEAP[$y]; //@line 689 "imageop.c"
        var $12=($11) * ($10); //@line 689 "imageop.c"
        $nlen=$12; //@line 689 "imageop.c"
        var $13=HEAP[$y]; //@line 690 "imageop.c"
        var $14=HEAP[$x]; //@line 690 "imageop.c"
        var $15=$nlen; //@line 690 "imageop.c"
        var $16=_check_multiply($15, $14, $13); //@line 690 "imageop.c"
        var $17=($16)==0; //@line 690 "imageop.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 690 "imageop.c"
      case 5: // $bb4
        $0=0; //@line 691 "imageop.c"
        __label__ = 16; break; //@line 691 "imageop.c"
      case 6: // $bb5
        var $18=$nlen; //@line 693 "imageop.c"
        var $19=_PyString_FromStringAndSize(0, $18); //@line 693 "imageop.c"
        $rv=$19; //@line 693 "imageop.c"
        var $20=$rv; //@line 694 "imageop.c"
        var $21=($20)==0; //@line 694 "imageop.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 694 "imageop.c"
      case 7: // $bb6
        $0=0; //@line 695 "imageop.c"
        __label__ = 16; break; //@line 695 "imageop.c"
      case 8: // $bb7
        var $22=$rv; //@line 696 "imageop.c"
        var $23=_PyString_AsString($22); //@line 696 "imageop.c"
        $ncp=$23; //@line 696 "imageop.c"
        $i=0; //@line 698 "imageop.c"
        var $24=$i; //@line 698 "imageop.c"
        var $25=$nlen; //@line 698 "imageop.c"
        var $26=($24) < ($25); //@line 698 "imageop.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 698 "imageop.c"
      case 9: // $bb8
        var $27=$backward_compatible; //@line 699 "imageop.c"
        var $28=($27)!=0; //@line 699 "imageop.c"
        var $29=HEAP[$cp]; //@line 700 "imageop.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 699 "imageop.c"
      case 10: // $bb9
        var $30=$29; //@line 700 "imageop.c"
        var $31=HEAP[$30]; //@line 700 "imageop.c"
        $value=$31; //@line 700 "imageop.c"
        var $32=HEAP[$cp]; //@line 701 "imageop.c"
        var $33=$32+4; //@line 701 "imageop.c"
        HEAP[$cp]=$33; //@line 701 "imageop.c"
        var $34=$value; //@line 702 "imageop.c"
        var $35=($34) & 255; //@line 702 "imageop.c"
        var $36=($35); //@line 702 "imageop.c"
        var $37=($36) / 255; //@line 702 "imageop.c"
        var $38=($37) * 7; //@line 702 "imageop.c"
        var $39=($38) + 0.5; //@line 702 "imageop.c"
        var $40=((($39))|0); //@line 702 "imageop.c"
        $r=$40; //@line 702 "imageop.c"
        var $41=$value; //@line 703 "imageop.c"
        var $42=($41) >>> 8; //@line 703 "imageop.c"
        var $43=($42) & 255; //@line 703 "imageop.c"
        var $44=($43); //@line 703 "imageop.c"
        var $45=($44) / 255; //@line 703 "imageop.c"
        var $46=($45) * 7; //@line 703 "imageop.c"
        var $47=($46) + 0.5; //@line 703 "imageop.c"
        var $48=((($47))|0); //@line 703 "imageop.c"
        $g=$48; //@line 703 "imageop.c"
        var $49=$value; //@line 704 "imageop.c"
        var $50=($49) >>> 16; //@line 704 "imageop.c"
        var $51=($50) & 255; //@line 704 "imageop.c"
        var $52=($51); //@line 704 "imageop.c"
        var $53=($52) / 255; //@line 704 "imageop.c"
        var $54=($53) * 3; //@line 704 "imageop.c"
        var $55=($54) + 0.5; //@line 704 "imageop.c"
        var $56=((($55))|0); //@line 704 "imageop.c"
        $b=$56; //@line 704 "imageop.c"
        __label__ = 12; break; //@line 704 "imageop.c"
      case 11: // $bb10
        var $57=$29+1; //@line 706 "imageop.c"
        HEAP[$cp]=$57; //@line 706 "imageop.c"
        var $58=HEAP[$cp]; //@line 707 "imageop.c"
        var $59=HEAP[$58]; //@line 707 "imageop.c"
        var $60=($59); //@line 707 "imageop.c"
        $b=$60; //@line 707 "imageop.c"
        var $61=$58+1; //@line 707 "imageop.c"
        HEAP[$cp]=$61; //@line 707 "imageop.c"
        var $62=HEAP[$cp]; //@line 708 "imageop.c"
        var $63=HEAP[$62]; //@line 708 "imageop.c"
        var $64=($63); //@line 708 "imageop.c"
        $g=$64; //@line 708 "imageop.c"
        var $65=$62+1; //@line 708 "imageop.c"
        HEAP[$cp]=$65; //@line 708 "imageop.c"
        var $66=HEAP[$cp]; //@line 709 "imageop.c"
        var $67=HEAP[$66]; //@line 709 "imageop.c"
        var $68=($67); //@line 709 "imageop.c"
        $r=$68; //@line 709 "imageop.c"
        var $69=$66+1; //@line 709 "imageop.c"
        HEAP[$cp]=$69; //@line 709 "imageop.c"
        __label__ = 12; break; //@line 709 "imageop.c"
      case 12: // $bb11
        var $70=$r; //@line 711 "imageop.c"
        var $71=($70); //@line 711 "imageop.c"
        var $72=($71) * 0.3; //@line 711 "imageop.c"
        var $73=$g; //@line 711 "imageop.c"
        var $74=($73); //@line 711 "imageop.c"
        var $75=($74) * 0.59; //@line 711 "imageop.c"
        var $76=($72) + ($75); //@line 711 "imageop.c"
        var $77=$b; //@line 711 "imageop.c"
        var $78=($77); //@line 711 "imageop.c"
        var $79=($78) * 0.11; //@line 711 "imageop.c"
        var $80=($76) + ($79); //@line 711 "imageop.c"
        var $81=((($80))|0); //@line 711 "imageop.c"
        $nvalue=$81; //@line 711 "imageop.c"
        var $82=($81) > 255; //@line 712 "imageop.c"
        if ($82) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 712 "imageop.c"
      case 13: // $bb12
        $nvalue=255; //@line 712 "imageop.c"
        __label__ = 14; break; //@line 712 "imageop.c"
      case 14: // $bb13
        var $83=$nvalue; //@line 713 "imageop.c"
        var $84=((($83)) & 255); //@line 713 "imageop.c"
        var $85=$ncp; //@line 713 "imageop.c"
        HEAP[$85]=$84; //@line 713 "imageop.c"
        var $86=$ncp; //@line 713 "imageop.c"
        var $87=$86+1; //@line 713 "imageop.c"
        $ncp=$87; //@line 713 "imageop.c"
        var $88=$i; //@line 698 "imageop.c"
        var $89=($88) + 1; //@line 698 "imageop.c"
        $i=$89; //@line 698 "imageop.c"
        var $90=$i; //@line 698 "imageop.c"
        var $91=$nlen; //@line 698 "imageop.c"
        var $92=($90) < ($91); //@line 698 "imageop.c"
        if ($92) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 698 "imageop.c"
      case 15: // $bb15
        var $93=$rv; //@line 715 "imageop.c"
        $0=$93; //@line 715 "imageop.c"
        __label__ = 16; break; //@line 715 "imageop.c"
      case 16: // $bb16
        var $94=$0; //@line 685 "imageop.c"
        $retval=$94; //@line 685 "imageop.c"
        var $retval17=$retval; //@line 685 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 685 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _imageop_grey2rgb($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        var $y=__stackBase__+4;
        var $len=__stackBase__+8;
        var $nlen;
        var $cp=__stackBase__+12;
        var $ncp;
        var $rv;
        var $i;
        var $value;
        var $backward_compatible;
        $self_addr=$self;
        $args_addr=$args;
        var $1=_imageop_backward_compatible(); //@line 727 "imageop.c"
        $backward_compatible=$1; //@line 727 "imageop.c"
        var $2=$args_addr; //@line 729 "imageop.c"
        var $3=_PyArg_ParseTuple($2, __str16, allocate([$cp,0,0,0,$len,0,0,0,$x,0,0,0,$y,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 729 "imageop.c"
        var $4=($3)==0; //@line 729 "imageop.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 729 "imageop.c"
      case 1: // $bb
        $0=0; //@line 730 "imageop.c"
        __label__ = 14; break; //@line 730 "imageop.c"
      case 2: // $bb1
        var $5=HEAP[$y]; //@line 732 "imageop.c"
        var $6=HEAP[$x]; //@line 732 "imageop.c"
        var $7=HEAP[$len]; //@line 732 "imageop.c"
        var $8=_check_multiply($7, $6, $5); //@line 732 "imageop.c"
        var $9=($8)==0; //@line 732 "imageop.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 732 "imageop.c"
      case 3: // $bb2
        $0=0; //@line 733 "imageop.c"
        __label__ = 14; break; //@line 733 "imageop.c"
      case 4: // $bb3
        var $10=HEAP[$x]; //@line 734 "imageop.c"
        var $11=HEAP[$y]; //@line 734 "imageop.c"
        var $12=($10) * 4; //@line 734 "imageop.c"
        var $13=($12) * ($11); //@line 734 "imageop.c"
        $nlen=$13; //@line 734 "imageop.c"
        var $14=HEAP[$y]; //@line 735 "imageop.c"
        var $15=HEAP[$x]; //@line 735 "imageop.c"
        var $16=$nlen; //@line 735 "imageop.c"
        var $17=_check_multiply_size($16, $15, __str2, $14, __str3, 4); //@line 735 "imageop.c"
        var $18=($17)==0; //@line 735 "imageop.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 735 "imageop.c"
      case 5: // $bb4
        $0=0; //@line 736 "imageop.c"
        __label__ = 14; break; //@line 736 "imageop.c"
      case 6: // $bb5
        var $19=$nlen; //@line 738 "imageop.c"
        var $20=_PyString_FromStringAndSize(0, $19); //@line 738 "imageop.c"
        $rv=$20; //@line 738 "imageop.c"
        var $21=$rv; //@line 739 "imageop.c"
        var $22=($21)==0; //@line 739 "imageop.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 739 "imageop.c"
      case 7: // $bb6
        $0=0; //@line 740 "imageop.c"
        __label__ = 14; break; //@line 740 "imageop.c"
      case 8: // $bb7
        var $23=$rv; //@line 741 "imageop.c"
        var $24=_PyString_AsString($23); //@line 741 "imageop.c"
        $ncp=$24; //@line 741 "imageop.c"
        $i=0; //@line 743 "imageop.c"
        var $25=HEAP[$len]; //@line 743 "imageop.c"
        var $26=$i; //@line 743 "imageop.c"
        var $27=($26) < ($25); //@line 743 "imageop.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 743 "imageop.c"
      case 9: // $bb8
        var $28=HEAP[$cp]; //@line 744 "imageop.c"
        var $29=HEAP[$28]; //@line 744 "imageop.c"
        $value=$29; //@line 744 "imageop.c"
        var $30=$28+1; //@line 744 "imageop.c"
        HEAP[$cp]=$30; //@line 744 "imageop.c"
        var $31=$backward_compatible; //@line 745 "imageop.c"
        var $32=($31)!=0; //@line 745 "imageop.c"
        var $33=$ncp; //@line 746 "imageop.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 745 "imageop.c"
      case 10: // $bb9
        var $34=$33; //@line 746 "imageop.c"
        var $35=$value; //@line 746 "imageop.c"
        var $36=($35); //@line 746 "imageop.c"
        var $37=$value; //@line 746 "imageop.c"
        var $38=($37); //@line 746 "imageop.c"
        var $39=($38) << 8; //@line 746 "imageop.c"
        var $40=$value; //@line 746 "imageop.c"
        var $41=($40); //@line 746 "imageop.c"
        var $42=($41) << 16; //@line 746 "imageop.c"
        var $43=($39) | ($36); //@line 746 "imageop.c"
        var $44=($43) | ($42); //@line 746 "imageop.c"
        HEAP[$34]=$44; //@line 746 "imageop.c"
        var $45=$ncp; //@line 747 "imageop.c"
        var $46=$45+4; //@line 747 "imageop.c"
        $ncp=$46; //@line 747 "imageop.c"
        __label__ = 12; break; //@line 747 "imageop.c"
      case 11: // $bb10
        HEAP[$33]=0; //@line 749 "imageop.c"
        var $47=$ncp; //@line 749 "imageop.c"
        var $48=$47+1; //@line 749 "imageop.c"
        $ncp=$48; //@line 749 "imageop.c"
        var $49=$ncp; //@line 750 "imageop.c"
        var $50=$value; //@line 750 "imageop.c"
        HEAP[$49]=$50; //@line 750 "imageop.c"
        var $51=$ncp; //@line 750 "imageop.c"
        var $52=$51+1; //@line 750 "imageop.c"
        $ncp=$52; //@line 750 "imageop.c"
        var $53=$ncp; //@line 751 "imageop.c"
        var $54=$value; //@line 751 "imageop.c"
        HEAP[$53]=$54; //@line 751 "imageop.c"
        var $55=$ncp; //@line 751 "imageop.c"
        var $56=$55+1; //@line 751 "imageop.c"
        $ncp=$56; //@line 751 "imageop.c"
        var $57=$ncp; //@line 752 "imageop.c"
        var $58=$value; //@line 752 "imageop.c"
        HEAP[$57]=$58; //@line 752 "imageop.c"
        var $59=$ncp; //@line 752 "imageop.c"
        var $60=$59+1; //@line 752 "imageop.c"
        $ncp=$60; //@line 752 "imageop.c"
        __label__ = 12; break; //@line 752 "imageop.c"
      case 12: // $bb11
        var $61=$i; //@line 743 "imageop.c"
        var $62=($61) + 1; //@line 743 "imageop.c"
        $i=$62; //@line 743 "imageop.c"
        var $63=HEAP[$len]; //@line 743 "imageop.c"
        var $64=$i; //@line 743 "imageop.c"
        var $65=($64) < ($63); //@line 743 "imageop.c"
        if ($65) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 743 "imageop.c"
      case 13: // $bb13
        var $66=$rv; //@line 755 "imageop.c"
        $0=$66; //@line 755 "imageop.c"
        __label__ = 14; break; //@line 755 "imageop.c"
      case 14: // $bb14
        var $67=$0; //@line 730 "imageop.c"
        $retval=$67; //@line 730 "imageop.c"
        var $retval15=$retval; //@line 730 "imageop.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 730 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initimageop() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $0=HEAP[_Py_Py3kWarningFlag]; //@line 783 "imageop.c"
        var $1=($0)!=0; //@line 783 "imageop.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 783 "imageop.c"
      case 1: // $bb
        var $2=HEAP[_PyExc_DeprecationWarning]; //@line 783 "imageop.c"
        var $3=_PyErr_WarnEx($2, __str33, 2); //@line 783 "imageop.c"
        var $4=($3) < 0; //@line 783 "imageop.c"
        if ($4) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 783 "imageop.c"
      case 2: // $bb1
        var $5=_Py_InitModule4(__str34, _imageop_methods, 0, 0, 1013); //@line 787 "imageop.c"
        $m=$5; //@line 787 "imageop.c"
        var $6=($5)==0; //@line 788 "imageop.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 788 "imageop.c"
      case 3: // $bb2
        var $7=$m; //@line 790 "imageop.c"
        var $8=_PyModule_GetDict($7); //@line 790 "imageop.c"
        HEAP[_ImageopDict]=$8; //@line 790 "imageop.c"
        var $9=_PyErr_NewException(__str35, 0, 0); //@line 791 "imageop.c"
        HEAP[_ImageopError]=$9; //@line 791 "imageop.c"
        var $10=HEAP[_ImageopError]; //@line 792 "imageop.c"
        var $11=($10)!=0; //@line 792 "imageop.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 792 "imageop.c"
      case 4: // $bb3
        var $12=HEAP[_ImageopError]; //@line 793 "imageop.c"
        var $13=HEAP[_ImageopDict]; //@line 793 "imageop.c"
        var $14=_PyDict_SetItemString($13, __str36, $12); //@line 793 "imageop.c"
        __label__ = 5; break; //@line 793 "imageop.c"
      case 5: // $return
        ;
        return; //@line 785 "imageop.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initimageop"] = _initimageop;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_imageop_crop,0,_imageop_scale,0,_imageop_grey2mono,0,_imageop_grey2grey2,0,_imageop_grey2grey4,0,_imageop_dither2mono,0,_imageop_dither2grey2,0,_imageop_mono2grey,0,_imageop_grey22grey,0,_imageop_grey42grey,0,_imageop_tovideo,0,_imageop_rgb2rgb8,0,_imageop_rgb82rgb,0,_imageop_rgb2grey,0,_imageop_grey2rgb,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([37,115,32,118,97,108,117,101,32,105,115,32,110,101,103,97,116,105,118,101,32,111,114,32,110,117,108,0] /* %s value is negative */, "i8", ALLOC_NORMAL);
_ImageopError=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str1=allocate([83,116,114,105,110,103,32,104,97,115,32,105,110,99,111,114,114,101,99,116,32,108,101,110,103,116,104,0] /* String has incorrect */, "i8", ALLOC_NORMAL);
__str2=allocate([120,0] /* x\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([121,0] /* y\00 */, "i8", ALLOC_NORMAL);
_ImageopDict=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_bcos_8350=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str4=allocate([98,97,99,107,119,97,114,100,95,99,111,109,112,97,116,105,98,108,101,0] /* backward_compatible\ */, "i8", ALLOC_NORMAL);
__str5=allocate([115,35,105,105,105,105,105,105,105,0] /* s#iiiiiii\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([83,105,122,101,32,115,104,111,117,108,100,32,98,101,32,49,44,32,50,32,111,114,32,52,0] /* Size should be 1, 2  */, "i8", ALLOC_NORMAL);
__str7=allocate([97,98,115,40,110,101,119,120,50,45,110,101,119,120,49,41,43,49,0] /* abs(newx2-newx1)+1\0 */, "i8", ALLOC_NORMAL);
__str8=allocate([97,98,115,40,110,101,119,121,50,45,110,101,119,121,49,41,43,49,0] /* abs(newy2-newy1)+1\0 */, "i8", ALLOC_NORMAL);
__str9=allocate([115,35,105,105,105,105,105,0] /* s#iiiii\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([110,101,119,120,0] /* newx\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([110,101,119,121,0] /* newy\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([115,35,105,105,105,0] /* s#iii\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([83,105,122,101,32,115,104,111,117,108,100,32,98,101,32,49,32,111,114,32,52,0] /* Size should be 1 or  */, "i8", ALLOC_NORMAL);
__str14=allocate([109,97,120,0] /* max\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([109,97,120,121,0] /* maxy\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([115,35,105,105,0] /* s#ii\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([115,35,105,105,105,105,0] /* s#iiii\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([99,114,111,112,0] /* crop\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([115,99,97,108,101,0] /* scale\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([103,114,101,121,50,109,111,110,111,0] /* grey2mono\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([103,114,101,121,50,103,114,101,121,50,0] /* grey2grey2\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([103,114,101,121,50,103,114,101,121,52,0] /* grey2grey4\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([100,105,116,104,101,114,50,109,111,110,111,0] /* dither2mono\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([100,105,116,104,101,114,50,103,114,101,121,50,0] /* dither2grey2\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([109,111,110,111,50,103,114,101,121,0] /* mono2grey\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([103,114,101,121,50,50,103,114,101,121,0] /* grey22grey\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([103,114,101,121,52,50,103,114,101,121,0] /* grey42grey\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([116,111,118,105,100,101,111,0] /* tovideo\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([114,103,98,50,114,103,98,56,0] /* rgb2rgb8\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([114,103,98,56,50,114,103,98,0] /* rgb82rgb\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([114,103,98,50,103,114,101,121,0] /* rgb2grey\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([103,114,101,121,50,114,103,98,0] /* grey2rgb\00 */, "i8", ALLOC_NORMAL);
_imageop_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str33=allocate([116,104,101,32,105,109,97,103,101,111,112,32,109,111,100,117,108,101,32,104,97,115,32,98,101,101,110,32,114,101,109,111,118,101,100,32,105,110,32,80,121,116,104,111,110,32,51,46,48,0] /* the imageop module h */, "i8", ALLOC_NORMAL);
__str34=allocate([105,109,97,103,101,111,112,0] /* imageop\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([105,109,97,103,101,111,112,46,101,114,114,111,114,0] /* imageop.error\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
HEAP[_imageop_methods]=__str18;
HEAP[_imageop_methods+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_imageop_methods+16]=__str19;
HEAP[_imageop_methods+20]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_imageop_methods+32]=__str20;
HEAP[_imageop_methods+36]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_imageop_methods+48]=__str21;
HEAP[_imageop_methods+52]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_imageop_methods+64]=__str22;
HEAP[_imageop_methods+68]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_imageop_methods+80]=__str23;
HEAP[_imageop_methods+84]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_imageop_methods+96]=__str24;
HEAP[_imageop_methods+100]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_imageop_methods+112]=__str25;
HEAP[_imageop_methods+116]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_imageop_methods+128]=__str26;
HEAP[_imageop_methods+132]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_imageop_methods+144]=__str27;
HEAP[_imageop_methods+148]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_imageop_methods+160]=__str28;
HEAP[_imageop_methods+164]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_imageop_methods+176]=__str29;
HEAP[_imageop_methods+180]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_imageop_methods+192]=__str30;
HEAP[_imageop_methods+196]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_imageop_methods+208]=__str31;
HEAP[_imageop_methods+212]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_imageop_methods+224]=__str32;
HEAP[_imageop_methods+228]=(FUNCTION_TABLE_OFFSET + 30);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

