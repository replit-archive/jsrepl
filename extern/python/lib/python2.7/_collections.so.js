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
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 20; // %2
  
var $3___SIZE = 240; // %3
  
var $4___SIZE = 16; // %4
  
var $5___SIZE = 196; // %5
  
var $6___SIZE = 32; // %6
  
var $7___SIZE = 196; // %7
  
var $8___SIZE = 80; // %8
  
var $9___SIZE = 16; // %9
  
var $10___SIZE = 40; // %10
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyDictEntry___SIZE = 12; // %struct.PyDictEntry
  
var $struct_PyDictObject___SIZE = 124; // %struct.PyDictObject
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
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
  
var $struct_block___SIZE = 256; // %struct.block
  
var $struct_defdictobject___SIZE = 128; // %struct.defdictobject
  
var $struct_dequeiterobject___SIZE = 28; // %struct.dequeiterobject
  
var $struct_dequeobject___SIZE = 40; // %struct.dequeobject
  
var _numfreeblocks;

var __str;
var _freeblocks;

var __str1;
var __str2;
var __str3;
var ___PRETTY_FUNCTION___8417;
var __str4;
var __str5;
var _pop_doc;
var __str6;
var ___PRETTY_FUNCTION___8461;
var __str7;
var _popleft_doc;
var __str8;
var ___PRETTY_FUNCTION___8509;
var __str9;

var _append_doc;
var __str10;
var ___PRETTY_FUNCTION___8564;
var _appendleft_doc;
var ___PRETTY_FUNCTION___8652;
var _extend_doc;
var ___PRETTY_FUNCTION___8758;
var _extendleft_doc;
var __str11;
var ___PRETTY_FUNCTION___8884;
var __str12;
var _rotate_doc;
var __str13;
var ___PRETTY_FUNCTION___8974;
var _reverse_doc;

var __str14;
var _count_doc;
var __str15;
var __str16;
var ___PRETTY_FUNCTION___9049;

var __str17;
var _remove_doc;
var ___PRETTY_FUNCTION___9087;
var __str18;
var __str19;
var __str20;
var ___PRETTY_FUNCTION___9162;
var __str21;
var ___PRETTY_FUNCTION___9234;
var _clear_doc;
var ___PRETTY_FUNCTION___9246;
var __str22;
var __str23;
var _copy_doc;
var __str24;
var __str25;
var __str26;
var __str27;
var __str28;
var _reduce_doc;
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
var _deque_getset;
var _deque_as_sequence;
var _reversed_doc;
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
var _deque_methods;
var _deque_doc;
var __str56;
var _deque_type;
var __str57;
var ___PRETTY_FUNCTION___9783;
var __str58;
var _length_hint_doc;
var __str59;
var _dequeiter_methods;
var __str60;
var _dequeiter_type;
var __str61;
var ___PRETTY_FUNCTION___9856;
var __str62;
var __str63;
var _dequereviter_type;
var _defdict_missing_doc;

var _defdict_copy_doc;
var __str64;
var __str65;
var __str66;
var __str67;
var _defdict_methods;
var __str68;
var __str69;
var _defdict_members;

var __str70;
var __str71;
var __str72;
var __str73;

var __str74;
var _defdict_doc;
var __str75;
var _defdict_type;
var _module_doc;
var __str76;
var __str77;
var __str78;

























































  function _newblock($leftlink, $rightlink, $len) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $leftlink_addr;
        var $rightlink_addr;
        var $len_addr;
        var $retval;
        var $0;
        var $b;
        $leftlink_addr=$leftlink;
        $rightlink_addr=$rightlink;
        $len_addr=$len;
        var $1=$len_addr; //@line 68 "_collectionsmodule.c"
        var $2=($1) > 2147483522; //@line 68 "_collectionsmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 68 "_collectionsmodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_OverflowError]; //@line 69 "_collectionsmodule.c"
        _PyErr_SetString($3, __str); //@line 69 "_collectionsmodule.c"
        $0=0; //@line 71 "_collectionsmodule.c"
        __label__ = 7; break; //@line 71 "_collectionsmodule.c"
      case 2: // $bb1
        var $4=HEAP[_numfreeblocks]; //@line 73 "_collectionsmodule.c"
        var $5=($4)!=0; //@line 73 "_collectionsmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 73 "_collectionsmodule.c"
      case 3: // $bb2
        var $6=HEAP[_numfreeblocks]; //@line 74 "_collectionsmodule.c"
        var $7=($6) - 1; //@line 74 "_collectionsmodule.c"
        HEAP[_numfreeblocks]=$7; //@line 74 "_collectionsmodule.c"
        var $8=HEAP[_numfreeblocks]; //@line 75 "_collectionsmodule.c"
        var $9=_freeblocks+$8*4; //@line 75 "_collectionsmodule.c"
        var $10=HEAP[$9]; //@line 75 "_collectionsmodule.c"
        $b=$10; //@line 75 "_collectionsmodule.c"
        __label__ = 6; break; //@line 75 "_collectionsmodule.c"
      case 4: // $bb3
        var $11=_PyMem_Malloc(256); //@line 77 "_collectionsmodule.c"
        var $12=$11; //@line 77 "_collectionsmodule.c"
        $b=$12; //@line 77 "_collectionsmodule.c"
        var $13=$b; //@line 78 "_collectionsmodule.c"
        var $14=($13)==0; //@line 78 "_collectionsmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 78 "_collectionsmodule.c"
      case 5: // $bb4
        var $15=_PyErr_NoMemory(); //@line 79 "_collectionsmodule.c"
        $0=0; //@line 80 "_collectionsmodule.c"
        __label__ = 7; break; //@line 80 "_collectionsmodule.c"
      case 6: // $bb5
        var $16=$b; //@line 83 "_collectionsmodule.c"
        var $17=$16; //@line 83 "_collectionsmodule.c"
        var $18=$leftlink_addr; //@line 83 "_collectionsmodule.c"
        HEAP[$17]=$18; //@line 83 "_collectionsmodule.c"
        var $19=$b; //@line 84 "_collectionsmodule.c"
        var $20=$19+4; //@line 84 "_collectionsmodule.c"
        var $21=$rightlink_addr; //@line 84 "_collectionsmodule.c"
        HEAP[$20]=$21; //@line 84 "_collectionsmodule.c"
        var $22=$b; //@line 85 "_collectionsmodule.c"
        $0=$22; //@line 85 "_collectionsmodule.c"
        __label__ = 7; break; //@line 85 "_collectionsmodule.c"
      case 7: // $bb6
        var $23=$0; //@line 71 "_collectionsmodule.c"
        $retval=$23; //@line 71 "_collectionsmodule.c"
        var $retval7=$retval; //@line 71 "_collectionsmodule.c"
        ;
        return $retval7; //@line 71 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _freeblock($b) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $b_addr;
        $b_addr=$b;
        var $0=HEAP[_numfreeblocks]; //@line 91 "_collectionsmodule.c"
        var $1=($0) <= 9; //@line 91 "_collectionsmodule.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 91 "_collectionsmodule.c"
      case 1: // $bb
        var $2=HEAP[_numfreeblocks]; //@line 92 "_collectionsmodule.c"
        var $3=_freeblocks+$2*4; //@line 92 "_collectionsmodule.c"
        var $4=$b_addr; //@line 92 "_collectionsmodule.c"
        HEAP[$3]=$4; //@line 92 "_collectionsmodule.c"
        var $5=HEAP[_numfreeblocks]; //@line 93 "_collectionsmodule.c"
        var $6=($5) + 1; //@line 93 "_collectionsmodule.c"
        HEAP[_numfreeblocks]=$6; //@line 93 "_collectionsmodule.c"
        __label__ = 3; break; //@line 93 "_collectionsmodule.c"
      case 2: // $bb1
        var $7=$b_addr; //@line 95 "_collectionsmodule.c"
        var $8=$7; //@line 95 "_collectionsmodule.c"
        _PyMem_Free($8); //@line 95 "_collectionsmodule.c"
        __label__ = 3; break; //@line 95 "_collectionsmodule.c"
      case 3: // $return
        ;
        return; //@line 97 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_new($type, $args, $kwds) {
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
        var $deque;
        var $b;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 136 "_collectionsmodule.c"
        var $2=$1+152; //@line 136 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 136 "_collectionsmodule.c"
        var $4=$type_addr; //@line 136 "_collectionsmodule.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 136 "_collectionsmodule.c"
        var $6=$5; //@line 136 "_collectionsmodule.c"
        $deque=$6; //@line 136 "_collectionsmodule.c"
        var $7=$deque; //@line 137 "_collectionsmodule.c"
        var $8=($7)==0; //@line 137 "_collectionsmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 137 "_collectionsmodule.c"
      case 1: // $bb
        $0=0; //@line 138 "_collectionsmodule.c"
        __label__ = 7; break; //@line 138 "_collectionsmodule.c"
      case 2: // $bb1
        var $9=_newblock(0, 0, 0); //@line 140 "_collectionsmodule.c"
        $b=$9; //@line 140 "_collectionsmodule.c"
        var $10=$b; //@line 141 "_collectionsmodule.c"
        var $11=($10)==0; //@line 141 "_collectionsmodule.c"
        var $12=$deque; //@line 142 "_collectionsmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 141 "_collectionsmodule.c"
      case 3: // $bb2
        var $13=$12; //@line 142 "_collectionsmodule.c"
        var $14=$13; //@line 142 "_collectionsmodule.c"
        var $15=HEAP[$14]; //@line 142 "_collectionsmodule.c"
        var $16=($15) - 1; //@line 142 "_collectionsmodule.c"
        var $17=$13; //@line 142 "_collectionsmodule.c"
        HEAP[$17]=$16; //@line 142 "_collectionsmodule.c"
        var $18=$13; //@line 142 "_collectionsmodule.c"
        var $19=HEAP[$18]; //@line 142 "_collectionsmodule.c"
        var $20=($19)==0; //@line 142 "_collectionsmodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 142 "_collectionsmodule.c"
      case 4: // $bb3
        var $21=$deque; //@line 142 "_collectionsmodule.c"
        var $22=$21; //@line 142 "_collectionsmodule.c"
        var $23=$22+4; //@line 142 "_collectionsmodule.c"
        var $24=HEAP[$23]; //@line 142 "_collectionsmodule.c"
        var $25=$24+24; //@line 142 "_collectionsmodule.c"
        var $26=HEAP[$25]; //@line 142 "_collectionsmodule.c"
        var $27=$deque; //@line 142 "_collectionsmodule.c"
        var $28=$27; //@line 142 "_collectionsmodule.c"
        FUNCTION_TABLE[$26]($28); //@line 142 "_collectionsmodule.c"
        __label__ = 5; break; //@line 142 "_collectionsmodule.c"
      case 5: // $bb4
        $0=0; //@line 143 "_collectionsmodule.c"
        __label__ = 7; break; //@line 143 "_collectionsmodule.c"
      case 6: // $bb5
        var $29=$12+8; //@line 147 "_collectionsmodule.c"
        var $30=$b; //@line 147 "_collectionsmodule.c"
        HEAP[$29]=$30; //@line 147 "_collectionsmodule.c"
        var $31=$deque; //@line 148 "_collectionsmodule.c"
        var $32=$31+12; //@line 148 "_collectionsmodule.c"
        var $33=$b; //@line 148 "_collectionsmodule.c"
        HEAP[$32]=$33; //@line 148 "_collectionsmodule.c"
        var $34=$deque; //@line 149 "_collectionsmodule.c"
        var $35=$34+16; //@line 149 "_collectionsmodule.c"
        HEAP[$35]=31; //@line 149 "_collectionsmodule.c"
        var $36=$deque; //@line 150 "_collectionsmodule.c"
        var $37=$36+20; //@line 150 "_collectionsmodule.c"
        HEAP[$37]=30; //@line 150 "_collectionsmodule.c"
        var $38=$deque; //@line 151 "_collectionsmodule.c"
        var $39=$38+24; //@line 151 "_collectionsmodule.c"
        HEAP[$39]=0; //@line 151 "_collectionsmodule.c"
        var $40=$deque; //@line 152 "_collectionsmodule.c"
        var $41=$40+32; //@line 152 "_collectionsmodule.c"
        HEAP[$41]=0; //@line 152 "_collectionsmodule.c"
        var $42=$deque; //@line 153 "_collectionsmodule.c"
        var $43=$42+36; //@line 153 "_collectionsmodule.c"
        HEAP[$43]=0; //@line 153 "_collectionsmodule.c"
        var $44=$deque; //@line 154 "_collectionsmodule.c"
        var $45=$44+28; //@line 154 "_collectionsmodule.c"
        HEAP[$45]=-1; //@line 154 "_collectionsmodule.c"
        var $46=$deque; //@line 156 "_collectionsmodule.c"
        var $47=$46; //@line 156 "_collectionsmodule.c"
        $0=$47; //@line 156 "_collectionsmodule.c"
        __label__ = 7; break; //@line 156 "_collectionsmodule.c"
      case 7: // $bb6
        var $48=$0; //@line 138 "_collectionsmodule.c"
        $retval=$48; //@line 138 "_collectionsmodule.c"
        var $retval7=$retval; //@line 138 "_collectionsmodule.c"
        ;
        return $retval7; //@line 138 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_pop($deque, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $item;
        var $prevblock;
        $deque_addr=$deque;
        $unused_addr=$unused;
        var $1=$deque_addr; //@line 165 "_collectionsmodule.c"
        var $2=$1+24; //@line 165 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 165 "_collectionsmodule.c"
        var $4=($3)==0; //@line 165 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 165 "_collectionsmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_IndexError]; //@line 166 "_collectionsmodule.c"
        _PyErr_SetString($5, __str1); //@line 166 "_collectionsmodule.c"
        $0=0; //@line 167 "_collectionsmodule.c"
        __label__ = 13; break; //@line 167 "_collectionsmodule.c"
      case 2: // $bb1
        var $6=$deque_addr; //@line 169 "_collectionsmodule.c"
        var $7=$6+12; //@line 169 "_collectionsmodule.c"
        var $8=HEAP[$7]; //@line 169 "_collectionsmodule.c"
        var $9=$deque_addr; //@line 169 "_collectionsmodule.c"
        var $10=$9+20; //@line 169 "_collectionsmodule.c"
        var $11=HEAP[$10]; //@line 169 "_collectionsmodule.c"
        var $12=$8+8; //@line 169 "_collectionsmodule.c"
        var $13=$12+$11*4; //@line 169 "_collectionsmodule.c"
        var $14=HEAP[$13]; //@line 169 "_collectionsmodule.c"
        $item=$14; //@line 169 "_collectionsmodule.c"
        var $15=$deque_addr; //@line 170 "_collectionsmodule.c"
        var $16=$15+20; //@line 170 "_collectionsmodule.c"
        var $17=HEAP[$16]; //@line 170 "_collectionsmodule.c"
        var $18=($17) - 1; //@line 170 "_collectionsmodule.c"
        var $19=$deque_addr; //@line 170 "_collectionsmodule.c"
        var $20=$19+20; //@line 170 "_collectionsmodule.c"
        HEAP[$20]=$18; //@line 170 "_collectionsmodule.c"
        var $21=$deque_addr; //@line 171 "_collectionsmodule.c"
        var $22=$21+24; //@line 171 "_collectionsmodule.c"
        var $23=HEAP[$22]; //@line 171 "_collectionsmodule.c"
        var $24=($23) - 1; //@line 171 "_collectionsmodule.c"
        var $25=$deque_addr; //@line 171 "_collectionsmodule.c"
        var $26=$25+24; //@line 171 "_collectionsmodule.c"
        HEAP[$26]=$24; //@line 171 "_collectionsmodule.c"
        var $27=$deque_addr; //@line 172 "_collectionsmodule.c"
        var $28=$27+32; //@line 172 "_collectionsmodule.c"
        var $29=HEAP[$28]; //@line 172 "_collectionsmodule.c"
        var $30=($29) + 1; //@line 172 "_collectionsmodule.c"
        var $31=$deque_addr; //@line 172 "_collectionsmodule.c"
        var $32=$31+32; //@line 172 "_collectionsmodule.c"
        HEAP[$32]=$30; //@line 172 "_collectionsmodule.c"
        var $33=$deque_addr; //@line 174 "_collectionsmodule.c"
        var $34=$33+20; //@line 174 "_collectionsmodule.c"
        var $35=HEAP[$34]; //@line 174 "_collectionsmodule.c"
        var $36=($35)==-1; //@line 174 "_collectionsmodule.c"
        if ($36) { __label__ = 3; break; } else { __label__ = 12; break; } //@line 174 "_collectionsmodule.c"
      case 3: // $bb2
        var $37=$deque_addr; //@line 175 "_collectionsmodule.c"
        var $38=$37+24; //@line 175 "_collectionsmodule.c"
        var $39=HEAP[$38]; //@line 175 "_collectionsmodule.c"
        var $40=($39)==0; //@line 175 "_collectionsmodule.c"
        var $41=$deque_addr; //@line 176 "_collectionsmodule.c"
        if ($40) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 175 "_collectionsmodule.c"
      case 4: // $bb3
        var $42=$41+8; //@line 176 "_collectionsmodule.c"
        var $43=HEAP[$42]; //@line 176 "_collectionsmodule.c"
        var $44=$deque_addr; //@line 176 "_collectionsmodule.c"
        var $45=$44+12; //@line 176 "_collectionsmodule.c"
        var $46=HEAP[$45]; //@line 176 "_collectionsmodule.c"
        var $47=($43)!=($46); //@line 176 "_collectionsmodule.c"
        if ($47) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 176 "_collectionsmodule.c"
      case 5: // $bb4
        ___assert_fail(__str2, __str3, 176, ___PRETTY_FUNCTION___8417); //@line 176 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 176 "_collectionsmodule.c"
      case 6: // $bb5
        var $48=$deque_addr; //@line 177 "_collectionsmodule.c"
        var $49=$48+16; //@line 177 "_collectionsmodule.c"
        var $50=HEAP[$49]; //@line 177 "_collectionsmodule.c"
        var $51=$deque_addr; //@line 177 "_collectionsmodule.c"
        var $52=$51+20; //@line 177 "_collectionsmodule.c"
        var $53=HEAP[$52]; //@line 177 "_collectionsmodule.c"
        var $54=($53) + 1; //@line 177 "_collectionsmodule.c"
        var $55=($50)!=($54); //@line 177 "_collectionsmodule.c"
        if ($55) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 177 "_collectionsmodule.c"
      case 7: // $bb6
        ___assert_fail(__str4, __str3, 177, ___PRETTY_FUNCTION___8417); //@line 177 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 177 "_collectionsmodule.c"
      case 8: // $bb7
        var $56=$deque_addr; //@line 179 "_collectionsmodule.c"
        var $57=$56+16; //@line 179 "_collectionsmodule.c"
        HEAP[$57]=31; //@line 179 "_collectionsmodule.c"
        var $58=$deque_addr; //@line 180 "_collectionsmodule.c"
        var $59=$58+20; //@line 180 "_collectionsmodule.c"
        HEAP[$59]=30; //@line 180 "_collectionsmodule.c"
        __label__ = 12; break; //@line 180 "_collectionsmodule.c"
      case 9: // $bb8
        var $60=$41+12; //@line 182 "_collectionsmodule.c"
        var $61=HEAP[$60]; //@line 182 "_collectionsmodule.c"
        var $62=$61; //@line 182 "_collectionsmodule.c"
        var $63=HEAP[$62]; //@line 182 "_collectionsmodule.c"
        $prevblock=$63; //@line 182 "_collectionsmodule.c"
        var $64=$deque_addr; //@line 183 "_collectionsmodule.c"
        var $65=$64+8; //@line 183 "_collectionsmodule.c"
        var $66=HEAP[$65]; //@line 183 "_collectionsmodule.c"
        var $67=$deque_addr; //@line 183 "_collectionsmodule.c"
        var $68=$67+12; //@line 183 "_collectionsmodule.c"
        var $69=HEAP[$68]; //@line 183 "_collectionsmodule.c"
        var $70=($66)==($69); //@line 183 "_collectionsmodule.c"
        if ($70) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 183 "_collectionsmodule.c"
      case 10: // $bb9
        ___assert_fail(__str5, __str3, 183, ___PRETTY_FUNCTION___8417); //@line 183 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 183 "_collectionsmodule.c"
      case 11: // $bb10
        var $71=$deque_addr; //@line 184 "_collectionsmodule.c"
        var $72=$71+12; //@line 184 "_collectionsmodule.c"
        var $73=HEAP[$72]; //@line 184 "_collectionsmodule.c"
        _freeblock($73); //@line 184 "_collectionsmodule.c"
        var $74=$prevblock; //@line 185 "_collectionsmodule.c"
        var $75=$74+4; //@line 185 "_collectionsmodule.c"
        HEAP[$75]=0; //@line 185 "_collectionsmodule.c"
        var $76=$deque_addr; //@line 186 "_collectionsmodule.c"
        var $77=$76+12; //@line 186 "_collectionsmodule.c"
        var $78=$prevblock; //@line 186 "_collectionsmodule.c"
        HEAP[$77]=$78; //@line 186 "_collectionsmodule.c"
        var $79=$deque_addr; //@line 187 "_collectionsmodule.c"
        var $80=$79+20; //@line 187 "_collectionsmodule.c"
        HEAP[$80]=61; //@line 187 "_collectionsmodule.c"
        __label__ = 12; break; //@line 187 "_collectionsmodule.c"
      case 12: // $bb11
        var $81=$item; //@line 190 "_collectionsmodule.c"
        $0=$81; //@line 190 "_collectionsmodule.c"
        __label__ = 13; break; //@line 190 "_collectionsmodule.c"
      case 13: // $bb12
        var $82=$0; //@line 167 "_collectionsmodule.c"
        $retval=$82; //@line 167 "_collectionsmodule.c"
        var $retval13=$retval; //@line 167 "_collectionsmodule.c"
        ;
        return $retval13; //@line 167 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_popleft($deque, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $item;
        var $prevblock;
        $deque_addr=$deque;
        $unused_addr=$unused;
        var $1=$deque_addr; //@line 201 "_collectionsmodule.c"
        var $2=$1+24; //@line 201 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 201 "_collectionsmodule.c"
        var $4=($3)==0; //@line 201 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 201 "_collectionsmodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_IndexError]; //@line 202 "_collectionsmodule.c"
        _PyErr_SetString($5, __str1); //@line 202 "_collectionsmodule.c"
        $0=0; //@line 203 "_collectionsmodule.c"
        __label__ = 17; break; //@line 203 "_collectionsmodule.c"
      case 2: // $bb1
        var $6=$deque_addr; //@line 205 "_collectionsmodule.c"
        var $7=$6+8; //@line 205 "_collectionsmodule.c"
        var $8=HEAP[$7]; //@line 205 "_collectionsmodule.c"
        var $9=($8)==0; //@line 205 "_collectionsmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 205 "_collectionsmodule.c"
      case 3: // $bb2
        ___assert_fail(__str6, __str3, 205, ___PRETTY_FUNCTION___8461); //@line 205 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 205 "_collectionsmodule.c"
      case 4: // $bb3
        var $10=$deque_addr; //@line 206 "_collectionsmodule.c"
        var $11=$10+8; //@line 206 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 206 "_collectionsmodule.c"
        var $13=$deque_addr; //@line 206 "_collectionsmodule.c"
        var $14=$13+16; //@line 206 "_collectionsmodule.c"
        var $15=HEAP[$14]; //@line 206 "_collectionsmodule.c"
        var $16=$12+8; //@line 206 "_collectionsmodule.c"
        var $17=$16+$15*4; //@line 206 "_collectionsmodule.c"
        var $18=HEAP[$17]; //@line 206 "_collectionsmodule.c"
        $item=$18; //@line 206 "_collectionsmodule.c"
        var $19=$deque_addr; //@line 207 "_collectionsmodule.c"
        var $20=$19+16; //@line 207 "_collectionsmodule.c"
        var $21=HEAP[$20]; //@line 207 "_collectionsmodule.c"
        var $22=($21) + 1; //@line 207 "_collectionsmodule.c"
        var $23=$deque_addr; //@line 207 "_collectionsmodule.c"
        var $24=$23+16; //@line 207 "_collectionsmodule.c"
        HEAP[$24]=$22; //@line 207 "_collectionsmodule.c"
        var $25=$deque_addr; //@line 208 "_collectionsmodule.c"
        var $26=$25+24; //@line 208 "_collectionsmodule.c"
        var $27=HEAP[$26]; //@line 208 "_collectionsmodule.c"
        var $28=($27) - 1; //@line 208 "_collectionsmodule.c"
        var $29=$deque_addr; //@line 208 "_collectionsmodule.c"
        var $30=$29+24; //@line 208 "_collectionsmodule.c"
        HEAP[$30]=$28; //@line 208 "_collectionsmodule.c"
        var $31=$deque_addr; //@line 209 "_collectionsmodule.c"
        var $32=$31+32; //@line 209 "_collectionsmodule.c"
        var $33=HEAP[$32]; //@line 209 "_collectionsmodule.c"
        var $34=($33) + 1; //@line 209 "_collectionsmodule.c"
        var $35=$deque_addr; //@line 209 "_collectionsmodule.c"
        var $36=$35+32; //@line 209 "_collectionsmodule.c"
        HEAP[$36]=$34; //@line 209 "_collectionsmodule.c"
        var $37=$deque_addr; //@line 211 "_collectionsmodule.c"
        var $38=$37+16; //@line 211 "_collectionsmodule.c"
        var $39=HEAP[$38]; //@line 211 "_collectionsmodule.c"
        var $40=($39)==62; //@line 211 "_collectionsmodule.c"
        if ($40) { __label__ = 5; break; } else { __label__ = 16; break; } //@line 211 "_collectionsmodule.c"
      case 5: // $bb4
        var $41=$deque_addr; //@line 212 "_collectionsmodule.c"
        var $42=$41+24; //@line 212 "_collectionsmodule.c"
        var $43=HEAP[$42]; //@line 212 "_collectionsmodule.c"
        var $44=($43)==0; //@line 212 "_collectionsmodule.c"
        var $45=$deque_addr; //@line 213 "_collectionsmodule.c"
        var $46=$45+8; //@line 213 "_collectionsmodule.c"
        var $47=HEAP[$46]; //@line 213 "_collectionsmodule.c"
        var $48=$deque_addr; //@line 213 "_collectionsmodule.c"
        var $49=$48+12; //@line 213 "_collectionsmodule.c"
        var $50=HEAP[$49]; //@line 213 "_collectionsmodule.c"
        if ($44) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 212 "_collectionsmodule.c"
      case 6: // $bb5
        var $51=($47)!=($50); //@line 213 "_collectionsmodule.c"
        if ($51) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 213 "_collectionsmodule.c"
      case 7: // $bb6
        ___assert_fail(__str2, __str3, 213, ___PRETTY_FUNCTION___8461); //@line 213 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 213 "_collectionsmodule.c"
      case 8: // $bb7
        var $52=$deque_addr; //@line 214 "_collectionsmodule.c"
        var $53=$52+16; //@line 214 "_collectionsmodule.c"
        var $54=HEAP[$53]; //@line 214 "_collectionsmodule.c"
        var $55=$deque_addr; //@line 214 "_collectionsmodule.c"
        var $56=$55+20; //@line 214 "_collectionsmodule.c"
        var $57=HEAP[$56]; //@line 214 "_collectionsmodule.c"
        var $58=($57) + 1; //@line 214 "_collectionsmodule.c"
        var $59=($54)!=($58); //@line 214 "_collectionsmodule.c"
        if ($59) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 214 "_collectionsmodule.c"
      case 9: // $bb8
        ___assert_fail(__str4, __str3, 214, ___PRETTY_FUNCTION___8461); //@line 214 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 214 "_collectionsmodule.c"
      case 10: // $bb9
        var $60=$deque_addr; //@line 216 "_collectionsmodule.c"
        var $61=$60+16; //@line 216 "_collectionsmodule.c"
        HEAP[$61]=31; //@line 216 "_collectionsmodule.c"
        var $62=$deque_addr; //@line 217 "_collectionsmodule.c"
        var $63=$62+20; //@line 217 "_collectionsmodule.c"
        HEAP[$63]=30; //@line 217 "_collectionsmodule.c"
        __label__ = 16; break; //@line 217 "_collectionsmodule.c"
      case 11: // $bb10
        var $64=($47)==($50); //@line 219 "_collectionsmodule.c"
        if ($64) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 219 "_collectionsmodule.c"
      case 12: // $bb11
        ___assert_fail(__str5, __str3, 219, ___PRETTY_FUNCTION___8461); //@line 219 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 219 "_collectionsmodule.c"
      case 13: // $bb12
        var $65=$deque_addr; //@line 220 "_collectionsmodule.c"
        var $66=$65+8; //@line 220 "_collectionsmodule.c"
        var $67=HEAP[$66]; //@line 220 "_collectionsmodule.c"
        var $68=$67+4; //@line 220 "_collectionsmodule.c"
        var $69=HEAP[$68]; //@line 220 "_collectionsmodule.c"
        $prevblock=$69; //@line 220 "_collectionsmodule.c"
        var $70=$deque_addr; //@line 221 "_collectionsmodule.c"
        var $71=$70+8; //@line 221 "_collectionsmodule.c"
        var $72=HEAP[$71]; //@line 221 "_collectionsmodule.c"
        _freeblock($72); //@line 221 "_collectionsmodule.c"
        var $73=$prevblock; //@line 222 "_collectionsmodule.c"
        var $74=($73)==0; //@line 222 "_collectionsmodule.c"
        if ($74) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 222 "_collectionsmodule.c"
      case 14: // $bb13
        ___assert_fail(__str7, __str3, 222, ___PRETTY_FUNCTION___8461); //@line 222 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 222 "_collectionsmodule.c"
      case 15: // $bb14
        var $75=$prevblock; //@line 223 "_collectionsmodule.c"
        var $76=$75; //@line 223 "_collectionsmodule.c"
        HEAP[$76]=0; //@line 223 "_collectionsmodule.c"
        var $77=$deque_addr; //@line 224 "_collectionsmodule.c"
        var $78=$77+8; //@line 224 "_collectionsmodule.c"
        var $79=$prevblock; //@line 224 "_collectionsmodule.c"
        HEAP[$78]=$79; //@line 224 "_collectionsmodule.c"
        var $80=$deque_addr; //@line 225 "_collectionsmodule.c"
        var $81=$80+16; //@line 225 "_collectionsmodule.c"
        HEAP[$81]=0; //@line 225 "_collectionsmodule.c"
        __label__ = 16; break; //@line 225 "_collectionsmodule.c"
      case 16: // $bb15
        var $82=$item; //@line 228 "_collectionsmodule.c"
        $0=$82; //@line 228 "_collectionsmodule.c"
        __label__ = 17; break; //@line 228 "_collectionsmodule.c"
      case 17: // $bb16
        var $83=$0; //@line 203 "_collectionsmodule.c"
        $retval=$83; //@line 203 "_collectionsmodule.c"
        var $retval17=$retval; //@line 203 "_collectionsmodule.c"
        ;
        return $retval17; //@line 203 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_append($deque, $item) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $item_addr;
        var $retval;
        var $0;
        var $b;
        var $rv;
        $deque_addr=$deque;
        $item_addr=$item;
        var $1=$deque_addr; //@line 236 "_collectionsmodule.c"
        var $2=$1+32; //@line 236 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 236 "_collectionsmodule.c"
        var $4=($3) + 1; //@line 236 "_collectionsmodule.c"
        var $5=$deque_addr; //@line 236 "_collectionsmodule.c"
        var $6=$5+32; //@line 236 "_collectionsmodule.c"
        HEAP[$6]=$4; //@line 236 "_collectionsmodule.c"
        var $7=$deque_addr; //@line 237 "_collectionsmodule.c"
        var $8=$7+20; //@line 237 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 237 "_collectionsmodule.c"
        var $10=($9)==61; //@line 237 "_collectionsmodule.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 237 "_collectionsmodule.c"
      case 1: // $bb
        var $11=$deque_addr; //@line 238 "_collectionsmodule.c"
        var $12=$11+24; //@line 238 "_collectionsmodule.c"
        var $13=HEAP[$12]; //@line 238 "_collectionsmodule.c"
        var $14=$deque_addr; //@line 238 "_collectionsmodule.c"
        var $15=$14+12; //@line 238 "_collectionsmodule.c"
        var $16=HEAP[$15]; //@line 238 "_collectionsmodule.c"
        var $17=_newblock($16, 0, $13); //@line 238 "_collectionsmodule.c"
        $b=$17; //@line 238 "_collectionsmodule.c"
        var $18=$b; //@line 239 "_collectionsmodule.c"
        var $19=($18)==0; //@line 239 "_collectionsmodule.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 239 "_collectionsmodule.c"
      case 2: // $bb1
        $0=0; //@line 240 "_collectionsmodule.c"
        __label__ = 14; break; //@line 240 "_collectionsmodule.c"
      case 3: // $bb2
        var $20=$deque_addr; //@line 241 "_collectionsmodule.c"
        var $21=$20+12; //@line 241 "_collectionsmodule.c"
        var $22=HEAP[$21]; //@line 241 "_collectionsmodule.c"
        var $23=$22+4; //@line 241 "_collectionsmodule.c"
        var $24=HEAP[$23]; //@line 241 "_collectionsmodule.c"
        var $25=($24)!=0; //@line 241 "_collectionsmodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 241 "_collectionsmodule.c"
      case 4: // $bb3
        ___assert_fail(__str8, __str3, 241, ___PRETTY_FUNCTION___8509); //@line 241 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 241 "_collectionsmodule.c"
      case 5: // $bb4
        var $26=$deque_addr; //@line 242 "_collectionsmodule.c"
        var $27=$26+12; //@line 242 "_collectionsmodule.c"
        var $28=HEAP[$27]; //@line 242 "_collectionsmodule.c"
        var $29=$28+4; //@line 242 "_collectionsmodule.c"
        var $30=$b; //@line 242 "_collectionsmodule.c"
        HEAP[$29]=$30; //@line 242 "_collectionsmodule.c"
        var $31=$deque_addr; //@line 243 "_collectionsmodule.c"
        var $32=$31+12; //@line 243 "_collectionsmodule.c"
        var $33=$b; //@line 243 "_collectionsmodule.c"
        HEAP[$32]=$33; //@line 243 "_collectionsmodule.c"
        var $34=$deque_addr; //@line 244 "_collectionsmodule.c"
        var $35=$34+20; //@line 244 "_collectionsmodule.c"
        HEAP[$35]=-1; //@line 244 "_collectionsmodule.c"
        __label__ = 6; break; //@line 244 "_collectionsmodule.c"
      case 6: // $bb5
        var $36=$item_addr; //@line 246 "_collectionsmodule.c"
        var $37=$36; //@line 246 "_collectionsmodule.c"
        var $38=HEAP[$37]; //@line 246 "_collectionsmodule.c"
        var $39=($38) + 1; //@line 246 "_collectionsmodule.c"
        var $40=$item_addr; //@line 246 "_collectionsmodule.c"
        var $41=$40; //@line 246 "_collectionsmodule.c"
        HEAP[$41]=$39; //@line 246 "_collectionsmodule.c"
        var $42=$deque_addr; //@line 247 "_collectionsmodule.c"
        var $43=$42+24; //@line 247 "_collectionsmodule.c"
        var $44=HEAP[$43]; //@line 247 "_collectionsmodule.c"
        var $45=($44) + 1; //@line 247 "_collectionsmodule.c"
        var $46=$deque_addr; //@line 247 "_collectionsmodule.c"
        var $47=$46+24; //@line 247 "_collectionsmodule.c"
        HEAP[$47]=$45; //@line 247 "_collectionsmodule.c"
        var $48=$deque_addr; //@line 248 "_collectionsmodule.c"
        var $49=$48+20; //@line 248 "_collectionsmodule.c"
        var $50=HEAP[$49]; //@line 248 "_collectionsmodule.c"
        var $51=($50) + 1; //@line 248 "_collectionsmodule.c"
        var $52=$deque_addr; //@line 248 "_collectionsmodule.c"
        var $53=$52+20; //@line 248 "_collectionsmodule.c"
        HEAP[$53]=$51; //@line 248 "_collectionsmodule.c"
        var $54=$deque_addr; //@line 249 "_collectionsmodule.c"
        var $55=$54+12; //@line 249 "_collectionsmodule.c"
        var $56=HEAP[$55]; //@line 249 "_collectionsmodule.c"
        var $57=$deque_addr; //@line 249 "_collectionsmodule.c"
        var $58=$57+20; //@line 249 "_collectionsmodule.c"
        var $59=HEAP[$58]; //@line 249 "_collectionsmodule.c"
        var $60=$56+8; //@line 249 "_collectionsmodule.c"
        var $61=$60+$59*4; //@line 249 "_collectionsmodule.c"
        var $62=$item_addr; //@line 249 "_collectionsmodule.c"
        HEAP[$61]=$62; //@line 249 "_collectionsmodule.c"
        var $63=$deque_addr; //@line 250 "_collectionsmodule.c"
        var $64=$63+28; //@line 250 "_collectionsmodule.c"
        var $65=HEAP[$64]; //@line 250 "_collectionsmodule.c"
        var $66=($65)!=-1; //@line 250 "_collectionsmodule.c"
        if ($66) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 250 "_collectionsmodule.c"
      case 7: // $bb6
        var $67=$deque_addr; //@line 250 "_collectionsmodule.c"
        var $68=$67+24; //@line 250 "_collectionsmodule.c"
        var $69=HEAP[$68]; //@line 250 "_collectionsmodule.c"
        var $70=$deque_addr; //@line 250 "_collectionsmodule.c"
        var $71=$70+28; //@line 250 "_collectionsmodule.c"
        var $72=HEAP[$71]; //@line 250 "_collectionsmodule.c"
        var $73=($69) > ($72); //@line 250 "_collectionsmodule.c"
        if ($73) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 250 "_collectionsmodule.c"
      case 8: // $bb7
        var $74=$deque_addr; //@line 250 "_collectionsmodule.c"
        var $75=_deque_popleft($74, 0); //@line 250 "_collectionsmodule.c"
        $rv=$75; //@line 250 "_collectionsmodule.c"
        var $76=$rv; //@line 250 "_collectionsmodule.c"
        var $77=($76)==0; //@line 250 "_collectionsmodule.c"
        if ($77) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 250 "_collectionsmodule.c"
      case 9: // $bb8
        var $78=$deque_addr; //@line 250 "_collectionsmodule.c"
        var $79=$78+24; //@line 250 "_collectionsmodule.c"
        var $80=HEAP[$79]; //@line 250 "_collectionsmodule.c"
        var $81=$deque_addr; //@line 250 "_collectionsmodule.c"
        var $82=$81+28; //@line 250 "_collectionsmodule.c"
        var $83=HEAP[$82]; //@line 250 "_collectionsmodule.c"
        var $84=($80) > ($83); //@line 250 "_collectionsmodule.c"
        if ($84) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 250 "_collectionsmodule.c"
      case 10: // $bb9
        ___assert_fail(__str9, __str3, 250, ___PRETTY_FUNCTION___8509); //@line 250 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 250 "_collectionsmodule.c"
      case 11: // $bb10
        var $85=$rv; //@line 250 "_collectionsmodule.c"
        var $86=$85; //@line 250 "_collectionsmodule.c"
        var $87=HEAP[$86]; //@line 250 "_collectionsmodule.c"
        var $88=($87) - 1; //@line 250 "_collectionsmodule.c"
        var $89=$rv; //@line 250 "_collectionsmodule.c"
        var $90=$89; //@line 250 "_collectionsmodule.c"
        HEAP[$90]=$88; //@line 250 "_collectionsmodule.c"
        var $91=$rv; //@line 250 "_collectionsmodule.c"
        var $92=$91; //@line 250 "_collectionsmodule.c"
        var $93=HEAP[$92]; //@line 250 "_collectionsmodule.c"
        var $94=($93)==0; //@line 250 "_collectionsmodule.c"
        if ($94) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 250 "_collectionsmodule.c"
      case 12: // $bb11
        var $95=$rv; //@line 250 "_collectionsmodule.c"
        var $96=$95+4; //@line 250 "_collectionsmodule.c"
        var $97=HEAP[$96]; //@line 250 "_collectionsmodule.c"
        var $98=$97+24; //@line 250 "_collectionsmodule.c"
        var $99=HEAP[$98]; //@line 250 "_collectionsmodule.c"
        var $100=$rv; //@line 250 "_collectionsmodule.c"
        FUNCTION_TABLE[$99]($100); //@line 250 "_collectionsmodule.c"
        __label__ = 13; break; //@line 250 "_collectionsmodule.c"
      case 13: // $bb12
        var $101=HEAP[__Py_NoneStruct]; //@line 251 "_collectionsmodule.c"
        var $102=($101) + 1; //@line 251 "_collectionsmodule.c"
        HEAP[__Py_NoneStruct]=$102; //@line 251 "_collectionsmodule.c"
        $0=__Py_NoneStruct; //@line 251 "_collectionsmodule.c"
        __label__ = 14; break; //@line 251 "_collectionsmodule.c"
      case 14: // $bb13
        var $103=$0; //@line 240 "_collectionsmodule.c"
        $retval=$103; //@line 240 "_collectionsmodule.c"
        var $retval14=$retval; //@line 240 "_collectionsmodule.c"
        ;
        return $retval14; //@line 240 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_appendleft($deque, $item) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $item_addr;
        var $retval;
        var $0;
        var $b;
        var $rv;
        $deque_addr=$deque;
        $item_addr=$item;
        var $1=$deque_addr; //@line 259 "_collectionsmodule.c"
        var $2=$1+32; //@line 259 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 259 "_collectionsmodule.c"
        var $4=($3) + 1; //@line 259 "_collectionsmodule.c"
        var $5=$deque_addr; //@line 259 "_collectionsmodule.c"
        var $6=$5+32; //@line 259 "_collectionsmodule.c"
        HEAP[$6]=$4; //@line 259 "_collectionsmodule.c"
        var $7=$deque_addr; //@line 260 "_collectionsmodule.c"
        var $8=$7+16; //@line 260 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 260 "_collectionsmodule.c"
        var $10=($9)==0; //@line 260 "_collectionsmodule.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 260 "_collectionsmodule.c"
      case 1: // $bb
        var $11=$deque_addr; //@line 261 "_collectionsmodule.c"
        var $12=$11+24; //@line 261 "_collectionsmodule.c"
        var $13=HEAP[$12]; //@line 261 "_collectionsmodule.c"
        var $14=$deque_addr; //@line 261 "_collectionsmodule.c"
        var $15=$14+8; //@line 261 "_collectionsmodule.c"
        var $16=HEAP[$15]; //@line 261 "_collectionsmodule.c"
        var $17=_newblock(0, $16, $13); //@line 261 "_collectionsmodule.c"
        $b=$17; //@line 261 "_collectionsmodule.c"
        var $18=$b; //@line 262 "_collectionsmodule.c"
        var $19=($18)==0; //@line 262 "_collectionsmodule.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 262 "_collectionsmodule.c"
      case 2: // $bb1
        $0=0; //@line 263 "_collectionsmodule.c"
        __label__ = 14; break; //@line 263 "_collectionsmodule.c"
      case 3: // $bb2
        var $20=$deque_addr; //@line 264 "_collectionsmodule.c"
        var $21=$20+8; //@line 264 "_collectionsmodule.c"
        var $22=HEAP[$21]; //@line 264 "_collectionsmodule.c"
        var $23=$22; //@line 264 "_collectionsmodule.c"
        var $24=HEAP[$23]; //@line 264 "_collectionsmodule.c"
        var $25=($24)!=0; //@line 264 "_collectionsmodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 264 "_collectionsmodule.c"
      case 4: // $bb3
        ___assert_fail(__str10, __str3, 264, ___PRETTY_FUNCTION___8564); //@line 264 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 264 "_collectionsmodule.c"
      case 5: // $bb4
        var $26=$deque_addr; //@line 265 "_collectionsmodule.c"
        var $27=$26+8; //@line 265 "_collectionsmodule.c"
        var $28=HEAP[$27]; //@line 265 "_collectionsmodule.c"
        var $29=$28; //@line 265 "_collectionsmodule.c"
        var $30=$b; //@line 265 "_collectionsmodule.c"
        HEAP[$29]=$30; //@line 265 "_collectionsmodule.c"
        var $31=$deque_addr; //@line 266 "_collectionsmodule.c"
        var $32=$31+8; //@line 266 "_collectionsmodule.c"
        var $33=$b; //@line 266 "_collectionsmodule.c"
        HEAP[$32]=$33; //@line 266 "_collectionsmodule.c"
        var $34=$deque_addr; //@line 267 "_collectionsmodule.c"
        var $35=$34+16; //@line 267 "_collectionsmodule.c"
        HEAP[$35]=62; //@line 267 "_collectionsmodule.c"
        __label__ = 6; break; //@line 267 "_collectionsmodule.c"
      case 6: // $bb5
        var $36=$item_addr; //@line 269 "_collectionsmodule.c"
        var $37=$36; //@line 269 "_collectionsmodule.c"
        var $38=HEAP[$37]; //@line 269 "_collectionsmodule.c"
        var $39=($38) + 1; //@line 269 "_collectionsmodule.c"
        var $40=$item_addr; //@line 269 "_collectionsmodule.c"
        var $41=$40; //@line 269 "_collectionsmodule.c"
        HEAP[$41]=$39; //@line 269 "_collectionsmodule.c"
        var $42=$deque_addr; //@line 270 "_collectionsmodule.c"
        var $43=$42+24; //@line 270 "_collectionsmodule.c"
        var $44=HEAP[$43]; //@line 270 "_collectionsmodule.c"
        var $45=($44) + 1; //@line 270 "_collectionsmodule.c"
        var $46=$deque_addr; //@line 270 "_collectionsmodule.c"
        var $47=$46+24; //@line 270 "_collectionsmodule.c"
        HEAP[$47]=$45; //@line 270 "_collectionsmodule.c"
        var $48=$deque_addr; //@line 271 "_collectionsmodule.c"
        var $49=$48+16; //@line 271 "_collectionsmodule.c"
        var $50=HEAP[$49]; //@line 271 "_collectionsmodule.c"
        var $51=($50) - 1; //@line 271 "_collectionsmodule.c"
        var $52=$deque_addr; //@line 271 "_collectionsmodule.c"
        var $53=$52+16; //@line 271 "_collectionsmodule.c"
        HEAP[$53]=$51; //@line 271 "_collectionsmodule.c"
        var $54=$deque_addr; //@line 272 "_collectionsmodule.c"
        var $55=$54+8; //@line 272 "_collectionsmodule.c"
        var $56=HEAP[$55]; //@line 272 "_collectionsmodule.c"
        var $57=$deque_addr; //@line 272 "_collectionsmodule.c"
        var $58=$57+16; //@line 272 "_collectionsmodule.c"
        var $59=HEAP[$58]; //@line 272 "_collectionsmodule.c"
        var $60=$56+8; //@line 272 "_collectionsmodule.c"
        var $61=$60+$59*4; //@line 272 "_collectionsmodule.c"
        var $62=$item_addr; //@line 272 "_collectionsmodule.c"
        HEAP[$61]=$62; //@line 272 "_collectionsmodule.c"
        var $63=$deque_addr; //@line 273 "_collectionsmodule.c"
        var $64=$63+28; //@line 273 "_collectionsmodule.c"
        var $65=HEAP[$64]; //@line 273 "_collectionsmodule.c"
        var $66=($65)!=-1; //@line 273 "_collectionsmodule.c"
        if ($66) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 273 "_collectionsmodule.c"
      case 7: // $bb6
        var $67=$deque_addr; //@line 273 "_collectionsmodule.c"
        var $68=$67+24; //@line 273 "_collectionsmodule.c"
        var $69=HEAP[$68]; //@line 273 "_collectionsmodule.c"
        var $70=$deque_addr; //@line 273 "_collectionsmodule.c"
        var $71=$70+28; //@line 273 "_collectionsmodule.c"
        var $72=HEAP[$71]; //@line 273 "_collectionsmodule.c"
        var $73=($69) > ($72); //@line 273 "_collectionsmodule.c"
        if ($73) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 273 "_collectionsmodule.c"
      case 8: // $bb7
        var $74=$deque_addr; //@line 273 "_collectionsmodule.c"
        var $75=_deque_pop($74, 0); //@line 273 "_collectionsmodule.c"
        $rv=$75; //@line 273 "_collectionsmodule.c"
        var $76=$rv; //@line 273 "_collectionsmodule.c"
        var $77=($76)==0; //@line 273 "_collectionsmodule.c"
        if ($77) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 273 "_collectionsmodule.c"
      case 9: // $bb8
        var $78=$deque_addr; //@line 273 "_collectionsmodule.c"
        var $79=$78+24; //@line 273 "_collectionsmodule.c"
        var $80=HEAP[$79]; //@line 273 "_collectionsmodule.c"
        var $81=$deque_addr; //@line 273 "_collectionsmodule.c"
        var $82=$81+28; //@line 273 "_collectionsmodule.c"
        var $83=HEAP[$82]; //@line 273 "_collectionsmodule.c"
        var $84=($80) > ($83); //@line 273 "_collectionsmodule.c"
        if ($84) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 273 "_collectionsmodule.c"
      case 10: // $bb9
        ___assert_fail(__str9, __str3, 273, ___PRETTY_FUNCTION___8564); //@line 273 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 273 "_collectionsmodule.c"
      case 11: // $bb10
        var $85=$rv; //@line 273 "_collectionsmodule.c"
        var $86=$85; //@line 273 "_collectionsmodule.c"
        var $87=HEAP[$86]; //@line 273 "_collectionsmodule.c"
        var $88=($87) - 1; //@line 273 "_collectionsmodule.c"
        var $89=$rv; //@line 273 "_collectionsmodule.c"
        var $90=$89; //@line 273 "_collectionsmodule.c"
        HEAP[$90]=$88; //@line 273 "_collectionsmodule.c"
        var $91=$rv; //@line 273 "_collectionsmodule.c"
        var $92=$91; //@line 273 "_collectionsmodule.c"
        var $93=HEAP[$92]; //@line 273 "_collectionsmodule.c"
        var $94=($93)==0; //@line 273 "_collectionsmodule.c"
        if ($94) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 273 "_collectionsmodule.c"
      case 12: // $bb11
        var $95=$rv; //@line 273 "_collectionsmodule.c"
        var $96=$95+4; //@line 273 "_collectionsmodule.c"
        var $97=HEAP[$96]; //@line 273 "_collectionsmodule.c"
        var $98=$97+24; //@line 273 "_collectionsmodule.c"
        var $99=HEAP[$98]; //@line 273 "_collectionsmodule.c"
        var $100=$rv; //@line 273 "_collectionsmodule.c"
        FUNCTION_TABLE[$99]($100); //@line 273 "_collectionsmodule.c"
        __label__ = 13; break; //@line 273 "_collectionsmodule.c"
      case 13: // $bb12
        var $101=HEAP[__Py_NoneStruct]; //@line 274 "_collectionsmodule.c"
        var $102=($101) + 1; //@line 274 "_collectionsmodule.c"
        HEAP[__Py_NoneStruct]=$102; //@line 274 "_collectionsmodule.c"
        $0=__Py_NoneStruct; //@line 274 "_collectionsmodule.c"
        __label__ = 14; break; //@line 274 "_collectionsmodule.c"
      case 14: // $bb13
        var $103=$0; //@line 263 "_collectionsmodule.c"
        $retval=$103; //@line 263 "_collectionsmodule.c"
        var $retval14=$retval; //@line 263 "_collectionsmodule.c"
        ;
        return $retval14; //@line 263 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _consume_iterator($it) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $it_addr;
        var $retval;
        var $0;
        var $item;
        $it_addr=$it;
        var $1=$it_addr; //@line 287 "_collectionsmodule.c"
        var $2=_PyIter_Next($1); //@line 287 "_collectionsmodule.c"
        $item=$2; //@line 287 "_collectionsmodule.c"
        var $3=($2)!=0; //@line 287 "_collectionsmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 287 "_collectionsmodule.c"
      case 1: // $bb
        var $4=$item; //@line 288 "_collectionsmodule.c"
        var $5=$4; //@line 288 "_collectionsmodule.c"
        var $6=HEAP[$5]; //@line 288 "_collectionsmodule.c"
        var $7=($6) - 1; //@line 288 "_collectionsmodule.c"
        var $8=$item; //@line 288 "_collectionsmodule.c"
        var $9=$8; //@line 288 "_collectionsmodule.c"
        HEAP[$9]=$7; //@line 288 "_collectionsmodule.c"
        var $10=$item; //@line 288 "_collectionsmodule.c"
        var $11=$10; //@line 288 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 288 "_collectionsmodule.c"
        var $13=($12)==0; //@line 288 "_collectionsmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 288 "_collectionsmodule.c"
      case 2: // $bb2_backedge
        var $14=$it_addr; //@line 287 "_collectionsmodule.c"
        var $15=_PyIter_Next($14); //@line 287 "_collectionsmodule.c"
        $item=$15; //@line 287 "_collectionsmodule.c"
        var $16=($15)!=0; //@line 287 "_collectionsmodule.c"
        if ($16) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 287 "_collectionsmodule.c"
      case 3: // $bb1
        var $17=$item; //@line 288 "_collectionsmodule.c"
        var $18=$17+4; //@line 288 "_collectionsmodule.c"
        var $19=HEAP[$18]; //@line 288 "_collectionsmodule.c"
        var $20=$19+24; //@line 288 "_collectionsmodule.c"
        var $21=HEAP[$20]; //@line 288 "_collectionsmodule.c"
        var $22=$item; //@line 288 "_collectionsmodule.c"
        FUNCTION_TABLE[$21]($22); //@line 288 "_collectionsmodule.c"
        __label__ = 2; break; //@line 288 "_collectionsmodule.c"
      case 4: // $bb3
        var $23=$it_addr; //@line 290 "_collectionsmodule.c"
        var $24=$23; //@line 290 "_collectionsmodule.c"
        var $25=HEAP[$24]; //@line 290 "_collectionsmodule.c"
        var $26=($25) - 1; //@line 290 "_collectionsmodule.c"
        var $27=$it_addr; //@line 290 "_collectionsmodule.c"
        var $28=$27; //@line 290 "_collectionsmodule.c"
        HEAP[$28]=$26; //@line 290 "_collectionsmodule.c"
        var $29=$it_addr; //@line 290 "_collectionsmodule.c"
        var $30=$29; //@line 290 "_collectionsmodule.c"
        var $31=HEAP[$30]; //@line 290 "_collectionsmodule.c"
        var $32=($31)==0; //@line 290 "_collectionsmodule.c"
        if ($32) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 290 "_collectionsmodule.c"
      case 5: // $bb4
        var $33=$it_addr; //@line 290 "_collectionsmodule.c"
        var $34=$33+4; //@line 290 "_collectionsmodule.c"
        var $35=HEAP[$34]; //@line 290 "_collectionsmodule.c"
        var $36=$35+24; //@line 290 "_collectionsmodule.c"
        var $37=HEAP[$36]; //@line 290 "_collectionsmodule.c"
        var $38=$it_addr; //@line 290 "_collectionsmodule.c"
        FUNCTION_TABLE[$37]($38); //@line 290 "_collectionsmodule.c"
        __label__ = 6; break; //@line 290 "_collectionsmodule.c"
      case 6: // $bb5
        var $39=_PyErr_Occurred(); //@line 291 "_collectionsmodule.c"
        var $40=($39)!=0; //@line 291 "_collectionsmodule.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 291 "_collectionsmodule.c"
      case 7: // $bb6
        $0=0; //@line 292 "_collectionsmodule.c"
        __label__ = 9; break; //@line 292 "_collectionsmodule.c"
      case 8: // $bb7
        var $41=HEAP[__Py_NoneStruct]; //@line 293 "_collectionsmodule.c"
        var $42=($41) + 1; //@line 293 "_collectionsmodule.c"
        HEAP[__Py_NoneStruct]=$42; //@line 293 "_collectionsmodule.c"
        $0=__Py_NoneStruct; //@line 293 "_collectionsmodule.c"
        __label__ = 9; break; //@line 293 "_collectionsmodule.c"
      case 9: // $bb8
        var $43=$0; //@line 292 "_collectionsmodule.c"
        $retval=$43; //@line 292 "_collectionsmodule.c"
        var $retval9=$retval; //@line 292 "_collectionsmodule.c"
        ;
        return $retval9; //@line 292 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_extend($deque, $iterable) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $iterable_addr;
        var $retval;
        var $0;
        var $it;
        var $item;
        var $result;
        var $s;
        var $b;
        var $rv;
        $deque_addr=$deque;
        $iterable_addr=$iterable;
        var $1=$deque_addr; //@line 302 "_collectionsmodule.c"
        var $2=$1; //@line 302 "_collectionsmodule.c"
        var $3=$iterable_addr; //@line 302 "_collectionsmodule.c"
        var $4=($2)==($3); //@line 302 "_collectionsmodule.c"
        var $5=$iterable_addr; //@line 304 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 302 "_collectionsmodule.c"
      case 1: // $bb
        var $6=_PySequence_List($5); //@line 304 "_collectionsmodule.c"
        $s=$6; //@line 304 "_collectionsmodule.c"
        var $7=$s; //@line 305 "_collectionsmodule.c"
        var $8=($7)==0; //@line 305 "_collectionsmodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 305 "_collectionsmodule.c"
      case 2: // $bb1
        $0=0; //@line 306 "_collectionsmodule.c"
        __label__ = 33; break; //@line 306 "_collectionsmodule.c"
      case 3: // $bb2
        var $9=$deque_addr; //@line 307 "_collectionsmodule.c"
        var $10=$s; //@line 307 "_collectionsmodule.c"
        var $11=_deque_extend($9, $10); //@line 307 "_collectionsmodule.c"
        $result=$11; //@line 307 "_collectionsmodule.c"
        var $12=$s; //@line 308 "_collectionsmodule.c"
        var $13=$12; //@line 308 "_collectionsmodule.c"
        var $14=HEAP[$13]; //@line 308 "_collectionsmodule.c"
        var $15=($14) - 1; //@line 308 "_collectionsmodule.c"
        var $16=$s; //@line 308 "_collectionsmodule.c"
        var $17=$16; //@line 308 "_collectionsmodule.c"
        HEAP[$17]=$15; //@line 308 "_collectionsmodule.c"
        var $18=$s; //@line 308 "_collectionsmodule.c"
        var $19=$18; //@line 308 "_collectionsmodule.c"
        var $20=HEAP[$19]; //@line 308 "_collectionsmodule.c"
        var $21=($20)==0; //@line 308 "_collectionsmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 308 "_collectionsmodule.c"
      case 4: // $bb3
        var $22=$s; //@line 308 "_collectionsmodule.c"
        var $23=$22+4; //@line 308 "_collectionsmodule.c"
        var $24=HEAP[$23]; //@line 308 "_collectionsmodule.c"
        var $25=$24+24; //@line 308 "_collectionsmodule.c"
        var $26=HEAP[$25]; //@line 308 "_collectionsmodule.c"
        var $27=$s; //@line 308 "_collectionsmodule.c"
        FUNCTION_TABLE[$26]($27); //@line 308 "_collectionsmodule.c"
        __label__ = 5; break; //@line 308 "_collectionsmodule.c"
      case 5: // $bb4
        var $28=$result; //@line 309 "_collectionsmodule.c"
        $0=$28; //@line 309 "_collectionsmodule.c"
        __label__ = 33; break; //@line 309 "_collectionsmodule.c"
      case 6: // $bb5
        var $29=_PyObject_GetIter($5); //@line 312 "_collectionsmodule.c"
        $it=$29; //@line 312 "_collectionsmodule.c"
        var $30=$it; //@line 313 "_collectionsmodule.c"
        var $31=($30)==0; //@line 313 "_collectionsmodule.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 313 "_collectionsmodule.c"
      case 7: // $bb6
        $0=0; //@line 314 "_collectionsmodule.c"
        __label__ = 33; break; //@line 314 "_collectionsmodule.c"
      case 8: // $bb7
        var $32=$deque_addr; //@line 316 "_collectionsmodule.c"
        var $33=$32+28; //@line 316 "_collectionsmodule.c"
        var $34=HEAP[$33]; //@line 316 "_collectionsmodule.c"
        var $35=($34)==0; //@line 316 "_collectionsmodule.c"
        if ($35) { __label__ = 9; break; } else { __label__ = 27; break; } //@line 316 "_collectionsmodule.c"
      case 9: // $bb8
        var $36=$it; //@line 317 "_collectionsmodule.c"
        var $37=_consume_iterator($36); //@line 317 "_collectionsmodule.c"
        $0=$37; //@line 317 "_collectionsmodule.c"
        __label__ = 33; break; //@line 317 "_collectionsmodule.c"
      case 10: // $bb10
        var $38=$deque_addr; //@line 320 "_collectionsmodule.c"
        var $39=$38+32; //@line 320 "_collectionsmodule.c"
        var $40=HEAP[$39]; //@line 320 "_collectionsmodule.c"
        var $41=($40) + 1; //@line 320 "_collectionsmodule.c"
        var $42=$deque_addr; //@line 320 "_collectionsmodule.c"
        var $43=$42+32; //@line 320 "_collectionsmodule.c"
        HEAP[$43]=$41; //@line 320 "_collectionsmodule.c"
        var $44=$deque_addr; //@line 321 "_collectionsmodule.c"
        var $45=$44+20; //@line 321 "_collectionsmodule.c"
        var $46=HEAP[$45]; //@line 321 "_collectionsmodule.c"
        var $47=($46)==61; //@line 321 "_collectionsmodule.c"
        if ($47) { __label__ = 11; break; } else { __label__ = 20; break; } //@line 321 "_collectionsmodule.c"
      case 11: // $bb11
        var $48=$deque_addr; //@line 323 "_collectionsmodule.c"
        var $49=$48+24; //@line 323 "_collectionsmodule.c"
        var $50=HEAP[$49]; //@line 323 "_collectionsmodule.c"
        var $51=$deque_addr; //@line 323 "_collectionsmodule.c"
        var $52=$51+12; //@line 323 "_collectionsmodule.c"
        var $53=HEAP[$52]; //@line 323 "_collectionsmodule.c"
        var $54=_newblock($53, 0, $50); //@line 323 "_collectionsmodule.c"
        $b=$54; //@line 323 "_collectionsmodule.c"
        var $55=$b; //@line 324 "_collectionsmodule.c"
        var $56=($55)==0; //@line 324 "_collectionsmodule.c"
        if ($56) { __label__ = 12; break; } else { __label__ = 17; break; } //@line 324 "_collectionsmodule.c"
      case 12: // $bb12
        var $57=$item; //@line 325 "_collectionsmodule.c"
        var $58=$57; //@line 325 "_collectionsmodule.c"
        var $59=HEAP[$58]; //@line 325 "_collectionsmodule.c"
        var $60=($59) - 1; //@line 325 "_collectionsmodule.c"
        var $61=$item; //@line 325 "_collectionsmodule.c"
        var $62=$61; //@line 325 "_collectionsmodule.c"
        HEAP[$62]=$60; //@line 325 "_collectionsmodule.c"
        var $63=$item; //@line 325 "_collectionsmodule.c"
        var $64=$63; //@line 325 "_collectionsmodule.c"
        var $65=HEAP[$64]; //@line 325 "_collectionsmodule.c"
        var $66=($65)==0; //@line 325 "_collectionsmodule.c"
        if ($66) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 325 "_collectionsmodule.c"
      case 13: // $bb13
        var $67=$item; //@line 325 "_collectionsmodule.c"
        var $68=$67+4; //@line 325 "_collectionsmodule.c"
        var $69=HEAP[$68]; //@line 325 "_collectionsmodule.c"
        var $70=$69+24; //@line 325 "_collectionsmodule.c"
        var $71=HEAP[$70]; //@line 325 "_collectionsmodule.c"
        var $72=$item; //@line 325 "_collectionsmodule.c"
        FUNCTION_TABLE[$71]($72); //@line 325 "_collectionsmodule.c"
        __label__ = 14; break; //@line 325 "_collectionsmodule.c"
      case 14: // $bb14
        var $73=$it; //@line 326 "_collectionsmodule.c"
        var $74=$73; //@line 326 "_collectionsmodule.c"
        var $75=HEAP[$74]; //@line 326 "_collectionsmodule.c"
        var $76=($75) - 1; //@line 326 "_collectionsmodule.c"
        var $77=$it; //@line 326 "_collectionsmodule.c"
        var $78=$77; //@line 326 "_collectionsmodule.c"
        HEAP[$78]=$76; //@line 326 "_collectionsmodule.c"
        var $79=$it; //@line 326 "_collectionsmodule.c"
        var $80=$79; //@line 326 "_collectionsmodule.c"
        var $81=HEAP[$80]; //@line 326 "_collectionsmodule.c"
        var $82=($81)==0; //@line 326 "_collectionsmodule.c"
        if ($82) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 326 "_collectionsmodule.c"
      case 15: // $bb15
        var $83=$it; //@line 326 "_collectionsmodule.c"
        var $84=$83+4; //@line 326 "_collectionsmodule.c"
        var $85=HEAP[$84]; //@line 326 "_collectionsmodule.c"
        var $86=$85+24; //@line 326 "_collectionsmodule.c"
        var $87=HEAP[$86]; //@line 326 "_collectionsmodule.c"
        var $88=$it; //@line 326 "_collectionsmodule.c"
        FUNCTION_TABLE[$87]($88); //@line 326 "_collectionsmodule.c"
        __label__ = 16; break; //@line 326 "_collectionsmodule.c"
      case 16: // $bb16
        $0=0; //@line 327 "_collectionsmodule.c"
        __label__ = 33; break; //@line 327 "_collectionsmodule.c"
      case 17: // $bb17
        var $89=$deque_addr; //@line 329 "_collectionsmodule.c"
        var $90=$89+12; //@line 329 "_collectionsmodule.c"
        var $91=HEAP[$90]; //@line 329 "_collectionsmodule.c"
        var $92=$91+4; //@line 329 "_collectionsmodule.c"
        var $93=HEAP[$92]; //@line 329 "_collectionsmodule.c"
        var $94=($93)!=0; //@line 329 "_collectionsmodule.c"
        if ($94) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 329 "_collectionsmodule.c"
      case 18: // $bb18
        ___assert_fail(__str8, __str3, 329, ___PRETTY_FUNCTION___8652); //@line 329 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 329 "_collectionsmodule.c"
      case 19: // $bb19
        var $95=$deque_addr; //@line 330 "_collectionsmodule.c"
        var $96=$95+12; //@line 330 "_collectionsmodule.c"
        var $97=HEAP[$96]; //@line 330 "_collectionsmodule.c"
        var $98=$97+4; //@line 330 "_collectionsmodule.c"
        var $99=$b; //@line 330 "_collectionsmodule.c"
        HEAP[$98]=$99; //@line 330 "_collectionsmodule.c"
        var $100=$deque_addr; //@line 331 "_collectionsmodule.c"
        var $101=$100+12; //@line 331 "_collectionsmodule.c"
        var $102=$b; //@line 331 "_collectionsmodule.c"
        HEAP[$101]=$102; //@line 331 "_collectionsmodule.c"
        var $103=$deque_addr; //@line 332 "_collectionsmodule.c"
        var $104=$103+20; //@line 332 "_collectionsmodule.c"
        HEAP[$104]=-1; //@line 332 "_collectionsmodule.c"
        __label__ = 20; break; //@line 332 "_collectionsmodule.c"
      case 20: // $bb20
        var $105=$deque_addr; //@line 334 "_collectionsmodule.c"
        var $106=$105+24; //@line 334 "_collectionsmodule.c"
        var $107=HEAP[$106]; //@line 334 "_collectionsmodule.c"
        var $108=($107) + 1; //@line 334 "_collectionsmodule.c"
        var $109=$deque_addr; //@line 334 "_collectionsmodule.c"
        var $110=$109+24; //@line 334 "_collectionsmodule.c"
        HEAP[$110]=$108; //@line 334 "_collectionsmodule.c"
        var $111=$deque_addr; //@line 335 "_collectionsmodule.c"
        var $112=$111+20; //@line 335 "_collectionsmodule.c"
        var $113=HEAP[$112]; //@line 335 "_collectionsmodule.c"
        var $114=($113) + 1; //@line 335 "_collectionsmodule.c"
        var $115=$deque_addr; //@line 335 "_collectionsmodule.c"
        var $116=$115+20; //@line 335 "_collectionsmodule.c"
        HEAP[$116]=$114; //@line 335 "_collectionsmodule.c"
        var $117=$deque_addr; //@line 336 "_collectionsmodule.c"
        var $118=$117+12; //@line 336 "_collectionsmodule.c"
        var $119=HEAP[$118]; //@line 336 "_collectionsmodule.c"
        var $120=$deque_addr; //@line 336 "_collectionsmodule.c"
        var $121=$120+20; //@line 336 "_collectionsmodule.c"
        var $122=HEAP[$121]; //@line 336 "_collectionsmodule.c"
        var $123=$119+8; //@line 336 "_collectionsmodule.c"
        var $124=$123+$122*4; //@line 336 "_collectionsmodule.c"
        var $125=$item; //@line 336 "_collectionsmodule.c"
        HEAP[$124]=$125; //@line 336 "_collectionsmodule.c"
        var $126=$deque_addr; //@line 337 "_collectionsmodule.c"
        var $127=$126+28; //@line 337 "_collectionsmodule.c"
        var $128=HEAP[$127]; //@line 337 "_collectionsmodule.c"
        var $129=($128)!=-1; //@line 337 "_collectionsmodule.c"
        if ($129) { __label__ = 21; break; } else { __label__ = 27; break; } //@line 337 "_collectionsmodule.c"
      case 21: // $bb21
        var $130=$deque_addr; //@line 337 "_collectionsmodule.c"
        var $131=$130+24; //@line 337 "_collectionsmodule.c"
        var $132=HEAP[$131]; //@line 337 "_collectionsmodule.c"
        var $133=$deque_addr; //@line 337 "_collectionsmodule.c"
        var $134=$133+28; //@line 337 "_collectionsmodule.c"
        var $135=HEAP[$134]; //@line 337 "_collectionsmodule.c"
        var $136=($132) > ($135); //@line 337 "_collectionsmodule.c"
        if ($136) { __label__ = 22; break; } else { __label__ = 27; break; } //@line 337 "_collectionsmodule.c"
      case 22: // $bb22
        var $137=$deque_addr; //@line 337 "_collectionsmodule.c"
        var $138=_deque_popleft($137, 0); //@line 337 "_collectionsmodule.c"
        $rv=$138; //@line 337 "_collectionsmodule.c"
        var $139=$rv; //@line 337 "_collectionsmodule.c"
        var $140=($139)==0; //@line 337 "_collectionsmodule.c"
        if ($140) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 337 "_collectionsmodule.c"
      case 23: // $bb23
        var $141=$deque_addr; //@line 337 "_collectionsmodule.c"
        var $142=$141+24; //@line 337 "_collectionsmodule.c"
        var $143=HEAP[$142]; //@line 337 "_collectionsmodule.c"
        var $144=$deque_addr; //@line 337 "_collectionsmodule.c"
        var $145=$144+28; //@line 337 "_collectionsmodule.c"
        var $146=HEAP[$145]; //@line 337 "_collectionsmodule.c"
        var $147=($143) > ($146); //@line 337 "_collectionsmodule.c"
        if ($147) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 337 "_collectionsmodule.c"
      case 24: // $bb24
        ___assert_fail(__str9, __str3, 337, ___PRETTY_FUNCTION___8652); //@line 337 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 337 "_collectionsmodule.c"
      case 25: // $bb25
        var $148=$rv; //@line 337 "_collectionsmodule.c"
        var $149=$148; //@line 337 "_collectionsmodule.c"
        var $150=HEAP[$149]; //@line 337 "_collectionsmodule.c"
        var $151=($150) - 1; //@line 337 "_collectionsmodule.c"
        var $152=$rv; //@line 337 "_collectionsmodule.c"
        var $153=$152; //@line 337 "_collectionsmodule.c"
        HEAP[$153]=$151; //@line 337 "_collectionsmodule.c"
        var $154=$rv; //@line 337 "_collectionsmodule.c"
        var $155=$154; //@line 337 "_collectionsmodule.c"
        var $156=HEAP[$155]; //@line 337 "_collectionsmodule.c"
        var $157=($156)==0; //@line 337 "_collectionsmodule.c"
        if ($157) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 337 "_collectionsmodule.c"
      case 26: // $bb26
        var $158=$rv; //@line 337 "_collectionsmodule.c"
        var $159=$158+4; //@line 337 "_collectionsmodule.c"
        var $160=HEAP[$159]; //@line 337 "_collectionsmodule.c"
        var $161=$160+24; //@line 337 "_collectionsmodule.c"
        var $162=HEAP[$161]; //@line 337 "_collectionsmodule.c"
        var $163=$rv; //@line 337 "_collectionsmodule.c"
        FUNCTION_TABLE[$162]($163); //@line 337 "_collectionsmodule.c"
        __label__ = 27; break; //@line 337 "_collectionsmodule.c"
      case 27: // $bb27
        var $164=$it; //@line 319 "_collectionsmodule.c"
        var $165=_PyIter_Next($164); //@line 319 "_collectionsmodule.c"
        $item=$165; //@line 319 "_collectionsmodule.c"
        var $166=($165)!=0; //@line 319 "_collectionsmodule.c"
        if ($166) { __label__ = 10; break; } else { __label__ = 28; break; } //@line 319 "_collectionsmodule.c"
      case 28: // $bb28
        var $167=$it; //@line 339 "_collectionsmodule.c"
        var $168=$167; //@line 339 "_collectionsmodule.c"
        var $169=HEAP[$168]; //@line 339 "_collectionsmodule.c"
        var $170=($169) - 1; //@line 339 "_collectionsmodule.c"
        var $171=$it; //@line 339 "_collectionsmodule.c"
        var $172=$171; //@line 339 "_collectionsmodule.c"
        HEAP[$172]=$170; //@line 339 "_collectionsmodule.c"
        var $173=$it; //@line 339 "_collectionsmodule.c"
        var $174=$173; //@line 339 "_collectionsmodule.c"
        var $175=HEAP[$174]; //@line 339 "_collectionsmodule.c"
        var $176=($175)==0; //@line 339 "_collectionsmodule.c"
        if ($176) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 339 "_collectionsmodule.c"
      case 29: // $bb29
        var $177=$it; //@line 339 "_collectionsmodule.c"
        var $178=$177+4; //@line 339 "_collectionsmodule.c"
        var $179=HEAP[$178]; //@line 339 "_collectionsmodule.c"
        var $180=$179+24; //@line 339 "_collectionsmodule.c"
        var $181=HEAP[$180]; //@line 339 "_collectionsmodule.c"
        var $182=$it; //@line 339 "_collectionsmodule.c"
        FUNCTION_TABLE[$181]($182); //@line 339 "_collectionsmodule.c"
        __label__ = 30; break; //@line 339 "_collectionsmodule.c"
      case 30: // $bb30
        var $183=_PyErr_Occurred(); //@line 340 "_collectionsmodule.c"
        var $184=($183)!=0; //@line 340 "_collectionsmodule.c"
        if ($184) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 340 "_collectionsmodule.c"
      case 31: // $bb31
        $0=0; //@line 341 "_collectionsmodule.c"
        __label__ = 33; break; //@line 341 "_collectionsmodule.c"
      case 32: // $bb32
        var $185=HEAP[__Py_NoneStruct]; //@line 342 "_collectionsmodule.c"
        var $186=($185) + 1; //@line 342 "_collectionsmodule.c"
        HEAP[__Py_NoneStruct]=$186; //@line 342 "_collectionsmodule.c"
        $0=__Py_NoneStruct; //@line 342 "_collectionsmodule.c"
        __label__ = 33; break; //@line 342 "_collectionsmodule.c"
      case 33: // $bb33
        var $187=$0; //@line 306 "_collectionsmodule.c"
        $retval=$187; //@line 306 "_collectionsmodule.c"
        var $retval34=$retval; //@line 306 "_collectionsmodule.c"
        ;
        return $retval34; //@line 306 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_extendleft($deque, $iterable) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $iterable_addr;
        var $retval;
        var $0;
        var $it;
        var $item;
        var $result;
        var $s;
        var $b;
        var $rv;
        $deque_addr=$deque;
        $iterable_addr=$iterable;
        var $1=$deque_addr; //@line 354 "_collectionsmodule.c"
        var $2=$1; //@line 354 "_collectionsmodule.c"
        var $3=$iterable_addr; //@line 354 "_collectionsmodule.c"
        var $4=($2)==($3); //@line 354 "_collectionsmodule.c"
        var $5=$iterable_addr; //@line 356 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 354 "_collectionsmodule.c"
      case 1: // $bb
        var $6=_PySequence_List($5); //@line 356 "_collectionsmodule.c"
        $s=$6; //@line 356 "_collectionsmodule.c"
        var $7=$s; //@line 357 "_collectionsmodule.c"
        var $8=($7)==0; //@line 357 "_collectionsmodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 357 "_collectionsmodule.c"
      case 2: // $bb1
        $0=0; //@line 358 "_collectionsmodule.c"
        __label__ = 33; break; //@line 358 "_collectionsmodule.c"
      case 3: // $bb2
        var $9=$deque_addr; //@line 359 "_collectionsmodule.c"
        var $10=$s; //@line 359 "_collectionsmodule.c"
        var $11=_deque_extendleft($9, $10); //@line 359 "_collectionsmodule.c"
        $result=$11; //@line 359 "_collectionsmodule.c"
        var $12=$s; //@line 360 "_collectionsmodule.c"
        var $13=$12; //@line 360 "_collectionsmodule.c"
        var $14=HEAP[$13]; //@line 360 "_collectionsmodule.c"
        var $15=($14) - 1; //@line 360 "_collectionsmodule.c"
        var $16=$s; //@line 360 "_collectionsmodule.c"
        var $17=$16; //@line 360 "_collectionsmodule.c"
        HEAP[$17]=$15; //@line 360 "_collectionsmodule.c"
        var $18=$s; //@line 360 "_collectionsmodule.c"
        var $19=$18; //@line 360 "_collectionsmodule.c"
        var $20=HEAP[$19]; //@line 360 "_collectionsmodule.c"
        var $21=($20)==0; //@line 360 "_collectionsmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 360 "_collectionsmodule.c"
      case 4: // $bb3
        var $22=$s; //@line 360 "_collectionsmodule.c"
        var $23=$22+4; //@line 360 "_collectionsmodule.c"
        var $24=HEAP[$23]; //@line 360 "_collectionsmodule.c"
        var $25=$24+24; //@line 360 "_collectionsmodule.c"
        var $26=HEAP[$25]; //@line 360 "_collectionsmodule.c"
        var $27=$s; //@line 360 "_collectionsmodule.c"
        FUNCTION_TABLE[$26]($27); //@line 360 "_collectionsmodule.c"
        __label__ = 5; break; //@line 360 "_collectionsmodule.c"
      case 5: // $bb4
        var $28=$result; //@line 361 "_collectionsmodule.c"
        $0=$28; //@line 361 "_collectionsmodule.c"
        __label__ = 33; break; //@line 361 "_collectionsmodule.c"
      case 6: // $bb5
        var $29=_PyObject_GetIter($5); //@line 364 "_collectionsmodule.c"
        $it=$29; //@line 364 "_collectionsmodule.c"
        var $30=$it; //@line 365 "_collectionsmodule.c"
        var $31=($30)==0; //@line 365 "_collectionsmodule.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 365 "_collectionsmodule.c"
      case 7: // $bb6
        $0=0; //@line 366 "_collectionsmodule.c"
        __label__ = 33; break; //@line 366 "_collectionsmodule.c"
      case 8: // $bb7
        var $32=$deque_addr; //@line 368 "_collectionsmodule.c"
        var $33=$32+28; //@line 368 "_collectionsmodule.c"
        var $34=HEAP[$33]; //@line 368 "_collectionsmodule.c"
        var $35=($34)==0; //@line 368 "_collectionsmodule.c"
        if ($35) { __label__ = 9; break; } else { __label__ = 27; break; } //@line 368 "_collectionsmodule.c"
      case 9: // $bb8
        var $36=$it; //@line 369 "_collectionsmodule.c"
        var $37=_consume_iterator($36); //@line 369 "_collectionsmodule.c"
        $0=$37; //@line 369 "_collectionsmodule.c"
        __label__ = 33; break; //@line 369 "_collectionsmodule.c"
      case 10: // $bb10
        var $38=$deque_addr; //@line 372 "_collectionsmodule.c"
        var $39=$38+32; //@line 372 "_collectionsmodule.c"
        var $40=HEAP[$39]; //@line 372 "_collectionsmodule.c"
        var $41=($40) + 1; //@line 372 "_collectionsmodule.c"
        var $42=$deque_addr; //@line 372 "_collectionsmodule.c"
        var $43=$42+32; //@line 372 "_collectionsmodule.c"
        HEAP[$43]=$41; //@line 372 "_collectionsmodule.c"
        var $44=$deque_addr; //@line 373 "_collectionsmodule.c"
        var $45=$44+16; //@line 373 "_collectionsmodule.c"
        var $46=HEAP[$45]; //@line 373 "_collectionsmodule.c"
        var $47=($46)==0; //@line 373 "_collectionsmodule.c"
        if ($47) { __label__ = 11; break; } else { __label__ = 20; break; } //@line 373 "_collectionsmodule.c"
      case 11: // $bb11
        var $48=$deque_addr; //@line 375 "_collectionsmodule.c"
        var $49=$48+24; //@line 375 "_collectionsmodule.c"
        var $50=HEAP[$49]; //@line 375 "_collectionsmodule.c"
        var $51=$deque_addr; //@line 375 "_collectionsmodule.c"
        var $52=$51+8; //@line 375 "_collectionsmodule.c"
        var $53=HEAP[$52]; //@line 375 "_collectionsmodule.c"
        var $54=_newblock(0, $53, $50); //@line 375 "_collectionsmodule.c"
        $b=$54; //@line 375 "_collectionsmodule.c"
        var $55=$b; //@line 376 "_collectionsmodule.c"
        var $56=($55)==0; //@line 376 "_collectionsmodule.c"
        if ($56) { __label__ = 12; break; } else { __label__ = 17; break; } //@line 376 "_collectionsmodule.c"
      case 12: // $bb12
        var $57=$item; //@line 377 "_collectionsmodule.c"
        var $58=$57; //@line 377 "_collectionsmodule.c"
        var $59=HEAP[$58]; //@line 377 "_collectionsmodule.c"
        var $60=($59) - 1; //@line 377 "_collectionsmodule.c"
        var $61=$item; //@line 377 "_collectionsmodule.c"
        var $62=$61; //@line 377 "_collectionsmodule.c"
        HEAP[$62]=$60; //@line 377 "_collectionsmodule.c"
        var $63=$item; //@line 377 "_collectionsmodule.c"
        var $64=$63; //@line 377 "_collectionsmodule.c"
        var $65=HEAP[$64]; //@line 377 "_collectionsmodule.c"
        var $66=($65)==0; //@line 377 "_collectionsmodule.c"
        if ($66) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 377 "_collectionsmodule.c"
      case 13: // $bb13
        var $67=$item; //@line 377 "_collectionsmodule.c"
        var $68=$67+4; //@line 377 "_collectionsmodule.c"
        var $69=HEAP[$68]; //@line 377 "_collectionsmodule.c"
        var $70=$69+24; //@line 377 "_collectionsmodule.c"
        var $71=HEAP[$70]; //@line 377 "_collectionsmodule.c"
        var $72=$item; //@line 377 "_collectionsmodule.c"
        FUNCTION_TABLE[$71]($72); //@line 377 "_collectionsmodule.c"
        __label__ = 14; break; //@line 377 "_collectionsmodule.c"
      case 14: // $bb14
        var $73=$it; //@line 378 "_collectionsmodule.c"
        var $74=$73; //@line 378 "_collectionsmodule.c"
        var $75=HEAP[$74]; //@line 378 "_collectionsmodule.c"
        var $76=($75) - 1; //@line 378 "_collectionsmodule.c"
        var $77=$it; //@line 378 "_collectionsmodule.c"
        var $78=$77; //@line 378 "_collectionsmodule.c"
        HEAP[$78]=$76; //@line 378 "_collectionsmodule.c"
        var $79=$it; //@line 378 "_collectionsmodule.c"
        var $80=$79; //@line 378 "_collectionsmodule.c"
        var $81=HEAP[$80]; //@line 378 "_collectionsmodule.c"
        var $82=($81)==0; //@line 378 "_collectionsmodule.c"
        if ($82) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 378 "_collectionsmodule.c"
      case 15: // $bb15
        var $83=$it; //@line 378 "_collectionsmodule.c"
        var $84=$83+4; //@line 378 "_collectionsmodule.c"
        var $85=HEAP[$84]; //@line 378 "_collectionsmodule.c"
        var $86=$85+24; //@line 378 "_collectionsmodule.c"
        var $87=HEAP[$86]; //@line 378 "_collectionsmodule.c"
        var $88=$it; //@line 378 "_collectionsmodule.c"
        FUNCTION_TABLE[$87]($88); //@line 378 "_collectionsmodule.c"
        __label__ = 16; break; //@line 378 "_collectionsmodule.c"
      case 16: // $bb16
        $0=0; //@line 379 "_collectionsmodule.c"
        __label__ = 33; break; //@line 379 "_collectionsmodule.c"
      case 17: // $bb17
        var $89=$deque_addr; //@line 381 "_collectionsmodule.c"
        var $90=$89+8; //@line 381 "_collectionsmodule.c"
        var $91=HEAP[$90]; //@line 381 "_collectionsmodule.c"
        var $92=$91; //@line 381 "_collectionsmodule.c"
        var $93=HEAP[$92]; //@line 381 "_collectionsmodule.c"
        var $94=($93)!=0; //@line 381 "_collectionsmodule.c"
        if ($94) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 381 "_collectionsmodule.c"
      case 18: // $bb18
        ___assert_fail(__str10, __str3, 381, ___PRETTY_FUNCTION___8758); //@line 381 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 381 "_collectionsmodule.c"
      case 19: // $bb19
        var $95=$deque_addr; //@line 382 "_collectionsmodule.c"
        var $96=$95+8; //@line 382 "_collectionsmodule.c"
        var $97=HEAP[$96]; //@line 382 "_collectionsmodule.c"
        var $98=$97; //@line 382 "_collectionsmodule.c"
        var $99=$b; //@line 382 "_collectionsmodule.c"
        HEAP[$98]=$99; //@line 382 "_collectionsmodule.c"
        var $100=$deque_addr; //@line 383 "_collectionsmodule.c"
        var $101=$100+8; //@line 383 "_collectionsmodule.c"
        var $102=$b; //@line 383 "_collectionsmodule.c"
        HEAP[$101]=$102; //@line 383 "_collectionsmodule.c"
        var $103=$deque_addr; //@line 384 "_collectionsmodule.c"
        var $104=$103+16; //@line 384 "_collectionsmodule.c"
        HEAP[$104]=62; //@line 384 "_collectionsmodule.c"
        __label__ = 20; break; //@line 384 "_collectionsmodule.c"
      case 20: // $bb20
        var $105=$deque_addr; //@line 386 "_collectionsmodule.c"
        var $106=$105+24; //@line 386 "_collectionsmodule.c"
        var $107=HEAP[$106]; //@line 386 "_collectionsmodule.c"
        var $108=($107) + 1; //@line 386 "_collectionsmodule.c"
        var $109=$deque_addr; //@line 386 "_collectionsmodule.c"
        var $110=$109+24; //@line 386 "_collectionsmodule.c"
        HEAP[$110]=$108; //@line 386 "_collectionsmodule.c"
        var $111=$deque_addr; //@line 387 "_collectionsmodule.c"
        var $112=$111+16; //@line 387 "_collectionsmodule.c"
        var $113=HEAP[$112]; //@line 387 "_collectionsmodule.c"
        var $114=($113) - 1; //@line 387 "_collectionsmodule.c"
        var $115=$deque_addr; //@line 387 "_collectionsmodule.c"
        var $116=$115+16; //@line 387 "_collectionsmodule.c"
        HEAP[$116]=$114; //@line 387 "_collectionsmodule.c"
        var $117=$deque_addr; //@line 388 "_collectionsmodule.c"
        var $118=$117+8; //@line 388 "_collectionsmodule.c"
        var $119=HEAP[$118]; //@line 388 "_collectionsmodule.c"
        var $120=$deque_addr; //@line 388 "_collectionsmodule.c"
        var $121=$120+16; //@line 388 "_collectionsmodule.c"
        var $122=HEAP[$121]; //@line 388 "_collectionsmodule.c"
        var $123=$119+8; //@line 388 "_collectionsmodule.c"
        var $124=$123+$122*4; //@line 388 "_collectionsmodule.c"
        var $125=$item; //@line 388 "_collectionsmodule.c"
        HEAP[$124]=$125; //@line 388 "_collectionsmodule.c"
        var $126=$deque_addr; //@line 389 "_collectionsmodule.c"
        var $127=$126+28; //@line 389 "_collectionsmodule.c"
        var $128=HEAP[$127]; //@line 389 "_collectionsmodule.c"
        var $129=($128)!=-1; //@line 389 "_collectionsmodule.c"
        if ($129) { __label__ = 21; break; } else { __label__ = 27; break; } //@line 389 "_collectionsmodule.c"
      case 21: // $bb21
        var $130=$deque_addr; //@line 389 "_collectionsmodule.c"
        var $131=$130+24; //@line 389 "_collectionsmodule.c"
        var $132=HEAP[$131]; //@line 389 "_collectionsmodule.c"
        var $133=$deque_addr; //@line 389 "_collectionsmodule.c"
        var $134=$133+28; //@line 389 "_collectionsmodule.c"
        var $135=HEAP[$134]; //@line 389 "_collectionsmodule.c"
        var $136=($132) > ($135); //@line 389 "_collectionsmodule.c"
        if ($136) { __label__ = 22; break; } else { __label__ = 27; break; } //@line 389 "_collectionsmodule.c"
      case 22: // $bb22
        var $137=$deque_addr; //@line 389 "_collectionsmodule.c"
        var $138=_deque_pop($137, 0); //@line 389 "_collectionsmodule.c"
        $rv=$138; //@line 389 "_collectionsmodule.c"
        var $139=$rv; //@line 389 "_collectionsmodule.c"
        var $140=($139)==0; //@line 389 "_collectionsmodule.c"
        if ($140) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 389 "_collectionsmodule.c"
      case 23: // $bb23
        var $141=$deque_addr; //@line 389 "_collectionsmodule.c"
        var $142=$141+24; //@line 389 "_collectionsmodule.c"
        var $143=HEAP[$142]; //@line 389 "_collectionsmodule.c"
        var $144=$deque_addr; //@line 389 "_collectionsmodule.c"
        var $145=$144+28; //@line 389 "_collectionsmodule.c"
        var $146=HEAP[$145]; //@line 389 "_collectionsmodule.c"
        var $147=($143) > ($146); //@line 389 "_collectionsmodule.c"
        if ($147) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 389 "_collectionsmodule.c"
      case 24: // $bb24
        ___assert_fail(__str9, __str3, 389, ___PRETTY_FUNCTION___8758); //@line 389 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 389 "_collectionsmodule.c"
      case 25: // $bb25
        var $148=$rv; //@line 389 "_collectionsmodule.c"
        var $149=$148; //@line 389 "_collectionsmodule.c"
        var $150=HEAP[$149]; //@line 389 "_collectionsmodule.c"
        var $151=($150) - 1; //@line 389 "_collectionsmodule.c"
        var $152=$rv; //@line 389 "_collectionsmodule.c"
        var $153=$152; //@line 389 "_collectionsmodule.c"
        HEAP[$153]=$151; //@line 389 "_collectionsmodule.c"
        var $154=$rv; //@line 389 "_collectionsmodule.c"
        var $155=$154; //@line 389 "_collectionsmodule.c"
        var $156=HEAP[$155]; //@line 389 "_collectionsmodule.c"
        var $157=($156)==0; //@line 389 "_collectionsmodule.c"
        if ($157) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 389 "_collectionsmodule.c"
      case 26: // $bb26
        var $158=$rv; //@line 389 "_collectionsmodule.c"
        var $159=$158+4; //@line 389 "_collectionsmodule.c"
        var $160=HEAP[$159]; //@line 389 "_collectionsmodule.c"
        var $161=$160+24; //@line 389 "_collectionsmodule.c"
        var $162=HEAP[$161]; //@line 389 "_collectionsmodule.c"
        var $163=$rv; //@line 389 "_collectionsmodule.c"
        FUNCTION_TABLE[$162]($163); //@line 389 "_collectionsmodule.c"
        __label__ = 27; break; //@line 389 "_collectionsmodule.c"
      case 27: // $bb27
        var $164=$it; //@line 371 "_collectionsmodule.c"
        var $165=_PyIter_Next($164); //@line 371 "_collectionsmodule.c"
        $item=$165; //@line 371 "_collectionsmodule.c"
        var $166=($165)!=0; //@line 371 "_collectionsmodule.c"
        if ($166) { __label__ = 10; break; } else { __label__ = 28; break; } //@line 371 "_collectionsmodule.c"
      case 28: // $bb28
        var $167=$it; //@line 391 "_collectionsmodule.c"
        var $168=$167; //@line 391 "_collectionsmodule.c"
        var $169=HEAP[$168]; //@line 391 "_collectionsmodule.c"
        var $170=($169) - 1; //@line 391 "_collectionsmodule.c"
        var $171=$it; //@line 391 "_collectionsmodule.c"
        var $172=$171; //@line 391 "_collectionsmodule.c"
        HEAP[$172]=$170; //@line 391 "_collectionsmodule.c"
        var $173=$it; //@line 391 "_collectionsmodule.c"
        var $174=$173; //@line 391 "_collectionsmodule.c"
        var $175=HEAP[$174]; //@line 391 "_collectionsmodule.c"
        var $176=($175)==0; //@line 391 "_collectionsmodule.c"
        if ($176) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 391 "_collectionsmodule.c"
      case 29: // $bb29
        var $177=$it; //@line 391 "_collectionsmodule.c"
        var $178=$177+4; //@line 391 "_collectionsmodule.c"
        var $179=HEAP[$178]; //@line 391 "_collectionsmodule.c"
        var $180=$179+24; //@line 391 "_collectionsmodule.c"
        var $181=HEAP[$180]; //@line 391 "_collectionsmodule.c"
        var $182=$it; //@line 391 "_collectionsmodule.c"
        FUNCTION_TABLE[$181]($182); //@line 391 "_collectionsmodule.c"
        __label__ = 30; break; //@line 391 "_collectionsmodule.c"
      case 30: // $bb30
        var $183=_PyErr_Occurred(); //@line 392 "_collectionsmodule.c"
        var $184=($183)!=0; //@line 392 "_collectionsmodule.c"
        if ($184) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 392 "_collectionsmodule.c"
      case 31: // $bb31
        $0=0; //@line 393 "_collectionsmodule.c"
        __label__ = 33; break; //@line 393 "_collectionsmodule.c"
      case 32: // $bb32
        var $185=HEAP[__Py_NoneStruct]; //@line 394 "_collectionsmodule.c"
        var $186=($185) + 1; //@line 394 "_collectionsmodule.c"
        HEAP[__Py_NoneStruct]=$186; //@line 394 "_collectionsmodule.c"
        $0=__Py_NoneStruct; //@line 394 "_collectionsmodule.c"
        __label__ = 33; break; //@line 394 "_collectionsmodule.c"
      case 33: // $bb33
        var $187=$0; //@line 358 "_collectionsmodule.c"
        $retval=$187; //@line 358 "_collectionsmodule.c"
        var $retval34=$retval; //@line 358 "_collectionsmodule.c"
        ;
        return $retval34; //@line 358 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_inplace_concat($deque, $other) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $other_addr;
        var $retval;
        var $0;
        var $result;
        $deque_addr=$deque;
        $other_addr=$other;
        var $1=$deque_addr; //@line 405 "_collectionsmodule.c"
        var $2=$other_addr; //@line 405 "_collectionsmodule.c"
        var $3=_deque_extend($1, $2); //@line 405 "_collectionsmodule.c"
        $result=$3; //@line 405 "_collectionsmodule.c"
        var $4=$result; //@line 406 "_collectionsmodule.c"
        var $5=($4)==0; //@line 406 "_collectionsmodule.c"
        var $6=$result; //@line 407 "_collectionsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 406 "_collectionsmodule.c"
      case 1: // $bb
        $0=$6; //@line 407 "_collectionsmodule.c"
        __label__ = 5; break; //@line 407 "_collectionsmodule.c"
      case 2: // $bb1
        var $7=$6; //@line 408 "_collectionsmodule.c"
        var $8=HEAP[$7]; //@line 408 "_collectionsmodule.c"
        var $9=($8) - 1; //@line 408 "_collectionsmodule.c"
        var $10=$result; //@line 408 "_collectionsmodule.c"
        var $11=$10; //@line 408 "_collectionsmodule.c"
        HEAP[$11]=$9; //@line 408 "_collectionsmodule.c"
        var $12=$result; //@line 408 "_collectionsmodule.c"
        var $13=$12; //@line 408 "_collectionsmodule.c"
        var $14=HEAP[$13]; //@line 408 "_collectionsmodule.c"
        var $15=($14)==0; //@line 408 "_collectionsmodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 408 "_collectionsmodule.c"
      case 3: // $bb2
        var $16=$result; //@line 408 "_collectionsmodule.c"
        var $17=$16+4; //@line 408 "_collectionsmodule.c"
        var $18=HEAP[$17]; //@line 408 "_collectionsmodule.c"
        var $19=$18+24; //@line 408 "_collectionsmodule.c"
        var $20=HEAP[$19]; //@line 408 "_collectionsmodule.c"
        var $21=$result; //@line 408 "_collectionsmodule.c"
        FUNCTION_TABLE[$20]($21); //@line 408 "_collectionsmodule.c"
        __label__ = 4; break; //@line 408 "_collectionsmodule.c"
      case 4: // $bb3
        var $22=$deque_addr; //@line 409 "_collectionsmodule.c"
        var $23=$22; //@line 409 "_collectionsmodule.c"
        var $24=$23; //@line 409 "_collectionsmodule.c"
        var $25=HEAP[$24]; //@line 409 "_collectionsmodule.c"
        var $26=($25) + 1; //@line 409 "_collectionsmodule.c"
        var $27=$23; //@line 409 "_collectionsmodule.c"
        HEAP[$27]=$26; //@line 409 "_collectionsmodule.c"
        var $28=$deque_addr; //@line 410 "_collectionsmodule.c"
        var $29=$28; //@line 410 "_collectionsmodule.c"
        $0=$29; //@line 410 "_collectionsmodule.c"
        __label__ = 5; break; //@line 410 "_collectionsmodule.c"
      case 5: // $bb4
        var $30=$0; //@line 407 "_collectionsmodule.c"
        $retval=$30; //@line 407 "_collectionsmodule.c"
        var $retval5=$retval; //@line 407 "_collectionsmodule.c"
        ;
        return $retval5; //@line 407 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __deque_rotate($deque, $n) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $n_addr;
        var $retval;
        var $0;
        var $i;
        var $len;
        var $halflen;
        var $item;
        var $rv;
        $deque_addr=$deque;
        $n_addr=$n;
        var $1=$deque_addr; //@line 416 "_collectionsmodule.c"
        var $2=$1+24; //@line 416 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 416 "_collectionsmodule.c"
        $len=$3; //@line 416 "_collectionsmodule.c"
        var $4=$len; //@line 416 "_collectionsmodule.c"
        var $5=($4) + 1; //@line 416 "_collectionsmodule.c"
        var $6=($5) >> 1; //@line 416 "_collectionsmodule.c"
        $halflen=$6; //@line 416 "_collectionsmodule.c"
        var $7=$len; //@line 419 "_collectionsmodule.c"
        var $8=($7)==0; //@line 419 "_collectionsmodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 419 "_collectionsmodule.c"
      case 1: // $bb
        $0=0; //@line 420 "_collectionsmodule.c"
        __label__ = 31; break; //@line 420 "_collectionsmodule.c"
      case 2: // $bb1
        var $9=$n_addr; //@line 421 "_collectionsmodule.c"
        var $10=$halflen; //@line 421 "_collectionsmodule.c"
        var $11=($9) > ($10); //@line 421 "_collectionsmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 421 "_collectionsmodule.c"
      case 3: // $bb2
        var $12=$halflen; //@line 421 "_collectionsmodule.c"
        var $13=0 - ($12); //@line 421 "_collectionsmodule.c"
        var $14=$n_addr; //@line 421 "_collectionsmodule.c"
        var $15=($13) > ($14); //@line 421 "_collectionsmodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 421 "_collectionsmodule.c"
      case 4: // $bb3
        var $16=$n_addr; //@line 422 "_collectionsmodule.c"
        var $17=$len; //@line 422 "_collectionsmodule.c"
        var $18=($16) % ($17); //@line 422 "_collectionsmodule.c"
        $n_addr=$18; //@line 422 "_collectionsmodule.c"
        var $19=$n_addr; //@line 423 "_collectionsmodule.c"
        var $20=$halflen; //@line 423 "_collectionsmodule.c"
        var $21=($19) > ($20); //@line 423 "_collectionsmodule.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 423 "_collectionsmodule.c"
      case 5: // $bb4
        var $22=$n_addr; //@line 424 "_collectionsmodule.c"
        var $23=$len; //@line 424 "_collectionsmodule.c"
        var $24=($22) - ($23); //@line 424 "_collectionsmodule.c"
        $n_addr=$24; //@line 424 "_collectionsmodule.c"
        __label__ = 8; break; //@line 424 "_collectionsmodule.c"
      case 6: // $bb5
        var $25=$halflen; //@line 425 "_collectionsmodule.c"
        var $26=0 - ($25); //@line 425 "_collectionsmodule.c"
        var $27=$n_addr; //@line 425 "_collectionsmodule.c"
        var $28=($26) > ($27); //@line 425 "_collectionsmodule.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 425 "_collectionsmodule.c"
      case 7: // $bb6
        var $29=$n_addr; //@line 426 "_collectionsmodule.c"
        var $30=$len; //@line 426 "_collectionsmodule.c"
        var $31=($30) + ($29); //@line 426 "_collectionsmodule.c"
        $n_addr=$31; //@line 426 "_collectionsmodule.c"
        __label__ = 8; break; //@line 426 "_collectionsmodule.c"
      case 8: // $bb7
        $i=0; //@line 429 "_collectionsmodule.c"
        __label__ = 18; break; //@line 429 "_collectionsmodule.c"
      case 9: // $bb8
        var $32=$deque_addr; //@line 430 "_collectionsmodule.c"
        var $33=_deque_pop($32, 0); //@line 430 "_collectionsmodule.c"
        $item=$33; //@line 430 "_collectionsmodule.c"
        var $34=$item; //@line 431 "_collectionsmodule.c"
        var $35=($34)==0; //@line 431 "_collectionsmodule.c"
        if ($35) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 431 "_collectionsmodule.c"
      case 10: // $bb9
        ___assert_fail(__str11, __str3, 431, ___PRETTY_FUNCTION___8884); //@line 431 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 431 "_collectionsmodule.c"
      case 11: // $bb10
        var $36=$deque_addr; //@line 432 "_collectionsmodule.c"
        var $37=$item; //@line 432 "_collectionsmodule.c"
        var $38=_deque_appendleft($36, $37); //@line 432 "_collectionsmodule.c"
        $rv=$38; //@line 432 "_collectionsmodule.c"
        var $39=$item; //@line 433 "_collectionsmodule.c"
        var $40=$39; //@line 433 "_collectionsmodule.c"
        var $41=HEAP[$40]; //@line 433 "_collectionsmodule.c"
        var $42=($41) - 1; //@line 433 "_collectionsmodule.c"
        var $43=$item; //@line 433 "_collectionsmodule.c"
        var $44=$43; //@line 433 "_collectionsmodule.c"
        HEAP[$44]=$42; //@line 433 "_collectionsmodule.c"
        var $45=$item; //@line 433 "_collectionsmodule.c"
        var $46=$45; //@line 433 "_collectionsmodule.c"
        var $47=HEAP[$46]; //@line 433 "_collectionsmodule.c"
        var $48=($47)==0; //@line 433 "_collectionsmodule.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 433 "_collectionsmodule.c"
      case 12: // $bb11
        var $49=$item; //@line 433 "_collectionsmodule.c"
        var $50=$49+4; //@line 433 "_collectionsmodule.c"
        var $51=HEAP[$50]; //@line 433 "_collectionsmodule.c"
        var $52=$51+24; //@line 433 "_collectionsmodule.c"
        var $53=HEAP[$52]; //@line 433 "_collectionsmodule.c"
        var $54=$item; //@line 433 "_collectionsmodule.c"
        FUNCTION_TABLE[$53]($54); //@line 433 "_collectionsmodule.c"
        __label__ = 13; break; //@line 433 "_collectionsmodule.c"
      case 13: // $bb12
        var $55=$rv; //@line 434 "_collectionsmodule.c"
        var $56=($55)==0; //@line 434 "_collectionsmodule.c"
        if ($56) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 434 "_collectionsmodule.c"
      case 14: // $bb13
        $0=-1; //@line 435 "_collectionsmodule.c"
        __label__ = 31; break; //@line 435 "_collectionsmodule.c"
      case 15: // $bb14
        var $57=$rv; //@line 436 "_collectionsmodule.c"
        var $58=$57; //@line 436 "_collectionsmodule.c"
        var $59=HEAP[$58]; //@line 436 "_collectionsmodule.c"
        var $60=($59) - 1; //@line 436 "_collectionsmodule.c"
        var $61=$rv; //@line 436 "_collectionsmodule.c"
        var $62=$61; //@line 436 "_collectionsmodule.c"
        HEAP[$62]=$60; //@line 436 "_collectionsmodule.c"
        var $63=$rv; //@line 436 "_collectionsmodule.c"
        var $64=$63; //@line 436 "_collectionsmodule.c"
        var $65=HEAP[$64]; //@line 436 "_collectionsmodule.c"
        var $66=($65)==0; //@line 436 "_collectionsmodule.c"
        if ($66) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 436 "_collectionsmodule.c"
      case 16: // $bb15
        var $67=$rv; //@line 436 "_collectionsmodule.c"
        var $68=$67+4; //@line 436 "_collectionsmodule.c"
        var $69=HEAP[$68]; //@line 436 "_collectionsmodule.c"
        var $70=$69+24; //@line 436 "_collectionsmodule.c"
        var $71=HEAP[$70]; //@line 436 "_collectionsmodule.c"
        var $72=$rv; //@line 436 "_collectionsmodule.c"
        FUNCTION_TABLE[$71]($72); //@line 436 "_collectionsmodule.c"
        __label__ = 17; break; //@line 436 "_collectionsmodule.c"
      case 17: // $bb16
        var $73=$i; //@line 429 "_collectionsmodule.c"
        var $74=($73) + 1; //@line 429 "_collectionsmodule.c"
        $i=$74; //@line 429 "_collectionsmodule.c"
        __label__ = 18; break; //@line 429 "_collectionsmodule.c"
      case 18: // $bb17
        var $75=$i; //@line 429 "_collectionsmodule.c"
        var $76=$n_addr; //@line 429 "_collectionsmodule.c"
        var $77=($75) < ($76); //@line 429 "_collectionsmodule.c"
        if ($77) { __label__ = 9; break; } else { __label__ = 19; break; } //@line 429 "_collectionsmodule.c"
      case 19: // $bb18
        $i=0; //@line 438 "_collectionsmodule.c"
        __label__ = 29; break; //@line 438 "_collectionsmodule.c"
      case 20: // $bb19
        var $78=$deque_addr; //@line 439 "_collectionsmodule.c"
        var $79=_deque_popleft($78, 0); //@line 439 "_collectionsmodule.c"
        $item=$79; //@line 439 "_collectionsmodule.c"
        var $80=$item; //@line 440 "_collectionsmodule.c"
        var $81=($80)==0; //@line 440 "_collectionsmodule.c"
        if ($81) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 440 "_collectionsmodule.c"
      case 21: // $bb20
        ___assert_fail(__str11, __str3, 440, ___PRETTY_FUNCTION___8884); //@line 440 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 440 "_collectionsmodule.c"
      case 22: // $bb21
        var $82=$deque_addr; //@line 441 "_collectionsmodule.c"
        var $83=$item; //@line 441 "_collectionsmodule.c"
        var $84=_deque_append($82, $83); //@line 441 "_collectionsmodule.c"
        $rv=$84; //@line 441 "_collectionsmodule.c"
        var $85=$item; //@line 442 "_collectionsmodule.c"
        var $86=$85; //@line 442 "_collectionsmodule.c"
        var $87=HEAP[$86]; //@line 442 "_collectionsmodule.c"
        var $88=($87) - 1; //@line 442 "_collectionsmodule.c"
        var $89=$item; //@line 442 "_collectionsmodule.c"
        var $90=$89; //@line 442 "_collectionsmodule.c"
        HEAP[$90]=$88; //@line 442 "_collectionsmodule.c"
        var $91=$item; //@line 442 "_collectionsmodule.c"
        var $92=$91; //@line 442 "_collectionsmodule.c"
        var $93=HEAP[$92]; //@line 442 "_collectionsmodule.c"
        var $94=($93)==0; //@line 442 "_collectionsmodule.c"
        if ($94) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 442 "_collectionsmodule.c"
      case 23: // $bb22
        var $95=$item; //@line 442 "_collectionsmodule.c"
        var $96=$95+4; //@line 442 "_collectionsmodule.c"
        var $97=HEAP[$96]; //@line 442 "_collectionsmodule.c"
        var $98=$97+24; //@line 442 "_collectionsmodule.c"
        var $99=HEAP[$98]; //@line 442 "_collectionsmodule.c"
        var $100=$item; //@line 442 "_collectionsmodule.c"
        FUNCTION_TABLE[$99]($100); //@line 442 "_collectionsmodule.c"
        __label__ = 24; break; //@line 442 "_collectionsmodule.c"
      case 24: // $bb23
        var $101=$rv; //@line 443 "_collectionsmodule.c"
        var $102=($101)==0; //@line 443 "_collectionsmodule.c"
        if ($102) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 443 "_collectionsmodule.c"
      case 25: // $bb24
        $0=-1; //@line 444 "_collectionsmodule.c"
        __label__ = 31; break; //@line 444 "_collectionsmodule.c"
      case 26: // $bb25
        var $103=$rv; //@line 445 "_collectionsmodule.c"
        var $104=$103; //@line 445 "_collectionsmodule.c"
        var $105=HEAP[$104]; //@line 445 "_collectionsmodule.c"
        var $106=($105) - 1; //@line 445 "_collectionsmodule.c"
        var $107=$rv; //@line 445 "_collectionsmodule.c"
        var $108=$107; //@line 445 "_collectionsmodule.c"
        HEAP[$108]=$106; //@line 445 "_collectionsmodule.c"
        var $109=$rv; //@line 445 "_collectionsmodule.c"
        var $110=$109; //@line 445 "_collectionsmodule.c"
        var $111=HEAP[$110]; //@line 445 "_collectionsmodule.c"
        var $112=($111)==0; //@line 445 "_collectionsmodule.c"
        if ($112) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 445 "_collectionsmodule.c"
      case 27: // $bb26
        var $113=$rv; //@line 445 "_collectionsmodule.c"
        var $114=$113+4; //@line 445 "_collectionsmodule.c"
        var $115=HEAP[$114]; //@line 445 "_collectionsmodule.c"
        var $116=$115+24; //@line 445 "_collectionsmodule.c"
        var $117=HEAP[$116]; //@line 445 "_collectionsmodule.c"
        var $118=$rv; //@line 445 "_collectionsmodule.c"
        FUNCTION_TABLE[$117]($118); //@line 445 "_collectionsmodule.c"
        __label__ = 28; break; //@line 445 "_collectionsmodule.c"
      case 28: // $bb27
        var $119=$i; //@line 438 "_collectionsmodule.c"
        var $120=($119) - 1; //@line 438 "_collectionsmodule.c"
        $i=$120; //@line 438 "_collectionsmodule.c"
        __label__ = 29; break; //@line 438 "_collectionsmodule.c"
      case 29: // $bb28
        var $121=$i; //@line 438 "_collectionsmodule.c"
        var $122=$n_addr; //@line 438 "_collectionsmodule.c"
        var $123=($121) > ($122); //@line 438 "_collectionsmodule.c"
        if ($123) { __label__ = 20; break; } else { __label__ = 30; break; } //@line 438 "_collectionsmodule.c"
      case 30: // $bb29
        $0=0; //@line 447 "_collectionsmodule.c"
        __label__ = 31; break; //@line 447 "_collectionsmodule.c"
      case 31: // $bb30
        var $124=$0; //@line 420 "_collectionsmodule.c"
        $retval=$124; //@line 420 "_collectionsmodule.c"
        var $retval31=$retval; //@line 420 "_collectionsmodule.c"
        ;
        return $retval31; //@line 420 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_rotate($deque, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $n=__stackBase__;
        $deque_addr=$deque;
        $args_addr=$args;
        HEAP[$n]=1; //@line 453 "_collectionsmodule.c"
        var $1=$args_addr; //@line 455 "_collectionsmodule.c"
        var $2=_PyArg_ParseTuple($1, __str12, allocate([$n,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 455 "_collectionsmodule.c"
        var $3=($2)==0; //@line 455 "_collectionsmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 455 "_collectionsmodule.c"
      case 1: // $bb
        $0=0; //@line 456 "_collectionsmodule.c"
        __label__ = 5; break; //@line 456 "_collectionsmodule.c"
      case 2: // $bb1
        var $4=HEAP[$n]; //@line 457 "_collectionsmodule.c"
        var $5=$deque_addr; //@line 457 "_collectionsmodule.c"
        var $6=__deque_rotate($5, $4); //@line 457 "_collectionsmodule.c"
        var $7=($6)==0; //@line 457 "_collectionsmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 457 "_collectionsmodule.c"
      case 3: // $bb2
        var $8=HEAP[__Py_NoneStruct]; //@line 458 "_collectionsmodule.c"
        var $9=($8) + 1; //@line 458 "_collectionsmodule.c"
        HEAP[__Py_NoneStruct]=$9; //@line 458 "_collectionsmodule.c"
        $0=__Py_NoneStruct; //@line 458 "_collectionsmodule.c"
        __label__ = 5; break; //@line 458 "_collectionsmodule.c"
      case 4: // $bb3
        $0=0; //@line 459 "_collectionsmodule.c"
        __label__ = 5; break; //@line 459 "_collectionsmodule.c"
      case 5: // $bb4
        var $10=$0; //@line 456 "_collectionsmodule.c"
        $retval=$10; //@line 456 "_collectionsmodule.c"
        var $retval5=$retval; //@line 456 "_collectionsmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 456 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_reverse($deque, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $leftblock;
        var $rightblock;
        var $leftindex;
        var $rightindex;
        var $n;
        var $i;
        var $tmp;
        $deque_addr=$deque;
        $unused_addr=$unused;
        var $1=$deque_addr; //@line 468 "_collectionsmodule.c"
        var $2=$1+8; //@line 468 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 468 "_collectionsmodule.c"
        $leftblock=$3; //@line 468 "_collectionsmodule.c"
        var $4=$deque_addr; //@line 469 "_collectionsmodule.c"
        var $5=$4+12; //@line 469 "_collectionsmodule.c"
        var $6=HEAP[$5]; //@line 469 "_collectionsmodule.c"
        $rightblock=$6; //@line 469 "_collectionsmodule.c"
        var $7=$deque_addr; //@line 470 "_collectionsmodule.c"
        var $8=$7+16; //@line 470 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 470 "_collectionsmodule.c"
        $leftindex=$9; //@line 470 "_collectionsmodule.c"
        var $10=$deque_addr; //@line 471 "_collectionsmodule.c"
        var $11=$10+20; //@line 471 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 471 "_collectionsmodule.c"
        $rightindex=$12; //@line 471 "_collectionsmodule.c"
        var $13=$deque_addr; //@line 472 "_collectionsmodule.c"
        var $14=$13+24; //@line 472 "_collectionsmodule.c"
        var $15=HEAP[$14]; //@line 472 "_collectionsmodule.c"
        var $16=((($15)/2)|0); //@line 472 "_collectionsmodule.c"
        $n=$16; //@line 472 "_collectionsmodule.c"
        $i=0; //@line 476 "_collectionsmodule.c"
        __label__ = 11; break; //@line 476 "_collectionsmodule.c"
      case 1: // $bb
        var $17=$leftblock; //@line 478 "_collectionsmodule.c"
        var $18=$rightblock; //@line 478 "_collectionsmodule.c"
        var $19=($17)==($18); //@line 478 "_collectionsmodule.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 478 "_collectionsmodule.c"
      case 2: // $bb1
        var $20=$leftindex; //@line 478 "_collectionsmodule.c"
        var $21=$rightindex; //@line 478 "_collectionsmodule.c"
        var $22=($20) >= ($21); //@line 478 "_collectionsmodule.c"
        if ($22) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 478 "_collectionsmodule.c"
      case 3: // $bb2
        ___assert_fail(__str13, __str3, 478, ___PRETTY_FUNCTION___8974); //@line 478 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 478 "_collectionsmodule.c"
      case 4: // $bb3
        var $23=$leftindex; //@line 481 "_collectionsmodule.c"
        var $24=$leftblock; //@line 481 "_collectionsmodule.c"
        var $25=$24+8; //@line 481 "_collectionsmodule.c"
        var $26=$25+$23*4; //@line 481 "_collectionsmodule.c"
        var $27=HEAP[$26]; //@line 481 "_collectionsmodule.c"
        $tmp=$27; //@line 481 "_collectionsmodule.c"
        var $28=$leftindex; //@line 482 "_collectionsmodule.c"
        var $29=$rightindex; //@line 482 "_collectionsmodule.c"
        var $30=$rightblock; //@line 482 "_collectionsmodule.c"
        var $31=$30+8; //@line 482 "_collectionsmodule.c"
        var $32=$31+$29*4; //@line 482 "_collectionsmodule.c"
        var $33=HEAP[$32]; //@line 482 "_collectionsmodule.c"
        var $34=$leftblock; //@line 482 "_collectionsmodule.c"
        var $35=$34+8; //@line 482 "_collectionsmodule.c"
        var $36=$35+$28*4; //@line 482 "_collectionsmodule.c"
        HEAP[$36]=$33; //@line 482 "_collectionsmodule.c"
        var $37=$rightindex; //@line 483 "_collectionsmodule.c"
        var $38=$rightblock; //@line 483 "_collectionsmodule.c"
        var $39=$38+8; //@line 483 "_collectionsmodule.c"
        var $40=$39+$37*4; //@line 483 "_collectionsmodule.c"
        var $41=$tmp; //@line 483 "_collectionsmodule.c"
        HEAP[$40]=$41; //@line 483 "_collectionsmodule.c"
        var $42=$leftindex; //@line 486 "_collectionsmodule.c"
        var $43=($42) + 1; //@line 486 "_collectionsmodule.c"
        $leftindex=$43; //@line 486 "_collectionsmodule.c"
        var $44=($43)==62; //@line 487 "_collectionsmodule.c"
        if ($44) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 487 "_collectionsmodule.c"
      case 5: // $bb4
        var $45=$leftblock; //@line 488 "_collectionsmodule.c"
        var $46=$45+4; //@line 488 "_collectionsmodule.c"
        var $47=HEAP[$46]; //@line 488 "_collectionsmodule.c"
        var $48=($47)==0; //@line 488 "_collectionsmodule.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 6; break; } //@line 488 "_collectionsmodule.c"
      case 6: // $bb5
        var $49=$leftblock; //@line 490 "_collectionsmodule.c"
        var $50=$49+4; //@line 490 "_collectionsmodule.c"
        var $51=HEAP[$50]; //@line 490 "_collectionsmodule.c"
        $leftblock=$51; //@line 490 "_collectionsmodule.c"
        $leftindex=0; //@line 491 "_collectionsmodule.c"
        __label__ = 7; break; //@line 491 "_collectionsmodule.c"
      case 7: // $bb6
        var $52=$rightindex; //@line 495 "_collectionsmodule.c"
        var $53=($52) - 1; //@line 495 "_collectionsmodule.c"
        $rightindex=$53; //@line 495 "_collectionsmodule.c"
        var $54=($53)==-1; //@line 496 "_collectionsmodule.c"
        if ($54) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 496 "_collectionsmodule.c"
      case 8: // $bb7
        var $55=$rightblock; //@line 497 "_collectionsmodule.c"
        var $56=$55; //@line 497 "_collectionsmodule.c"
        var $57=HEAP[$56]; //@line 497 "_collectionsmodule.c"
        var $58=($57)==0; //@line 497 "_collectionsmodule.c"
        if ($58) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 497 "_collectionsmodule.c"
      case 9: // $bb8
        var $59=$rightblock; //@line 499 "_collectionsmodule.c"
        var $60=$59; //@line 499 "_collectionsmodule.c"
        var $61=HEAP[$60]; //@line 499 "_collectionsmodule.c"
        $rightblock=$61; //@line 499 "_collectionsmodule.c"
        $rightindex=61; //@line 500 "_collectionsmodule.c"
        __label__ = 10; break; //@line 500 "_collectionsmodule.c"
      case 10: // $bb9
        var $62=$i; //@line 476 "_collectionsmodule.c"
        var $63=($62) + 1; //@line 476 "_collectionsmodule.c"
        $i=$63; //@line 476 "_collectionsmodule.c"
        __label__ = 11; break; //@line 476 "_collectionsmodule.c"
      case 11: // $bb10
        var $64=$i; //@line 476 "_collectionsmodule.c"
        var $65=$n; //@line 476 "_collectionsmodule.c"
        var $66=($64) < ($65); //@line 476 "_collectionsmodule.c"
        if ($66) { __label__ = 1; break; } else { __label__ = 12; break; } //@line 476 "_collectionsmodule.c"
      case 12: // $bb11
        var $67=HEAP[__Py_NoneStruct]; //@line 503 "_collectionsmodule.c"
        var $68=($67) + 1; //@line 503 "_collectionsmodule.c"
        HEAP[__Py_NoneStruct]=$68; //@line 503 "_collectionsmodule.c"
        $0=__Py_NoneStruct; //@line 503 "_collectionsmodule.c"
        var $69=$0; //@line 503 "_collectionsmodule.c"
        $retval=$69; //@line 503 "_collectionsmodule.c"
        var $retval12=$retval; //@line 503 "_collectionsmodule.c"
        ;
        return $retval12; //@line 503 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_count($deque, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $leftblock;
        var $leftindex;
        var $n;
        var $i;
        var $count;
        var $item;
        var $start_state;
        var $cmp;
        $deque_addr=$deque;
        $v_addr=$v;
        var $1=$deque_addr; //@line 512 "_collectionsmodule.c"
        var $2=$1+8; //@line 512 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 512 "_collectionsmodule.c"
        $leftblock=$3; //@line 512 "_collectionsmodule.c"
        var $4=$deque_addr; //@line 513 "_collectionsmodule.c"
        var $5=$4+16; //@line 513 "_collectionsmodule.c"
        var $6=HEAP[$5]; //@line 513 "_collectionsmodule.c"
        $leftindex=$6; //@line 513 "_collectionsmodule.c"
        var $7=$deque_addr; //@line 514 "_collectionsmodule.c"
        var $8=$7+24; //@line 514 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 514 "_collectionsmodule.c"
        $n=$9; //@line 514 "_collectionsmodule.c"
        $count=0; //@line 516 "_collectionsmodule.c"
        var $10=$deque_addr; //@line 518 "_collectionsmodule.c"
        var $11=$10+32; //@line 518 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 518 "_collectionsmodule.c"
        $start_state=$12; //@line 518 "_collectionsmodule.c"
        $i=0; //@line 521 "_collectionsmodule.c"
        __label__ = 11; break; //@line 521 "_collectionsmodule.c"
      case 1: // $bb
        var $13=$leftindex; //@line 522 "_collectionsmodule.c"
        var $14=$leftblock; //@line 522 "_collectionsmodule.c"
        var $15=$14+8; //@line 522 "_collectionsmodule.c"
        var $16=$15+$13*4; //@line 522 "_collectionsmodule.c"
        var $17=HEAP[$16]; //@line 522 "_collectionsmodule.c"
        $item=$17; //@line 522 "_collectionsmodule.c"
        var $18=$item; //@line 523 "_collectionsmodule.c"
        var $19=$v_addr; //@line 523 "_collectionsmodule.c"
        var $20=_PyObject_RichCompareBool($18, $19, 2); //@line 523 "_collectionsmodule.c"
        $cmp=$20; //@line 523 "_collectionsmodule.c"
        var $21=$cmp; //@line 524 "_collectionsmodule.c"
        var $22=($21) > 0; //@line 524 "_collectionsmodule.c"
        if ($22) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 524 "_collectionsmodule.c"
      case 2: // $bb1
        var $23=$count; //@line 525 "_collectionsmodule.c"
        var $24=($23) + 1; //@line 525 "_collectionsmodule.c"
        $count=$24; //@line 525 "_collectionsmodule.c"
        __label__ = 5; break; //@line 525 "_collectionsmodule.c"
      case 3: // $bb2
        var $25=$cmp; //@line 526 "_collectionsmodule.c"
        var $26=($25) < 0; //@line 526 "_collectionsmodule.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 526 "_collectionsmodule.c"
      case 4: // $bb3
        $0=0; //@line 527 "_collectionsmodule.c"
        __label__ = 13; break; //@line 527 "_collectionsmodule.c"
      case 5: // $bb4
        var $27=$deque_addr; //@line 529 "_collectionsmodule.c"
        var $28=$27+32; //@line 529 "_collectionsmodule.c"
        var $29=HEAP[$28]; //@line 529 "_collectionsmodule.c"
        var $30=$start_state; //@line 529 "_collectionsmodule.c"
        var $31=($29)!=($30); //@line 529 "_collectionsmodule.c"
        if ($31) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 529 "_collectionsmodule.c"
      case 6: // $bb5
        var $32=HEAP[_PyExc_RuntimeError]; //@line 530 "_collectionsmodule.c"
        _PyErr_SetString($32, __str14); //@line 530 "_collectionsmodule.c"
        $0=0; //@line 532 "_collectionsmodule.c"
        __label__ = 13; break; //@line 532 "_collectionsmodule.c"
      case 7: // $bb6
        var $33=$leftindex; //@line 536 "_collectionsmodule.c"
        var $34=($33) + 1; //@line 536 "_collectionsmodule.c"
        $leftindex=$34; //@line 536 "_collectionsmodule.c"
        var $35=$leftindex; //@line 537 "_collectionsmodule.c"
        var $36=($35)==62; //@line 537 "_collectionsmodule.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 537 "_collectionsmodule.c"
      case 8: // $bb7
        var $37=$leftblock; //@line 538 "_collectionsmodule.c"
        var $38=$37+4; //@line 538 "_collectionsmodule.c"
        var $39=HEAP[$38]; //@line 538 "_collectionsmodule.c"
        var $40=($39)==0; //@line 538 "_collectionsmodule.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 9; break; } //@line 538 "_collectionsmodule.c"
      case 9: // $bb8
        var $41=$leftblock; //@line 540 "_collectionsmodule.c"
        var $42=$41+4; //@line 540 "_collectionsmodule.c"
        var $43=HEAP[$42]; //@line 540 "_collectionsmodule.c"
        $leftblock=$43; //@line 540 "_collectionsmodule.c"
        $leftindex=0; //@line 541 "_collectionsmodule.c"
        __label__ = 10; break; //@line 541 "_collectionsmodule.c"
      case 10: // $bb9
        var $44=$i; //@line 521 "_collectionsmodule.c"
        var $45=($44) + 1; //@line 521 "_collectionsmodule.c"
        $i=$45; //@line 521 "_collectionsmodule.c"
        __label__ = 11; break; //@line 521 "_collectionsmodule.c"
      case 11: // $bb10
        var $46=$i; //@line 521 "_collectionsmodule.c"
        var $47=$n; //@line 521 "_collectionsmodule.c"
        var $48=($46) < ($47); //@line 521 "_collectionsmodule.c"
        if ($48) { __label__ = 1; break; } else { __label__ = 12; break; } //@line 521 "_collectionsmodule.c"
      case 12: // $bb11
        var $49=$count; //@line 544 "_collectionsmodule.c"
        var $50=_PyInt_FromSsize_t($49); //@line 544 "_collectionsmodule.c"
        $0=$50; //@line 544 "_collectionsmodule.c"
        __label__ = 13; break; //@line 544 "_collectionsmodule.c"
      case 13: // $bb12
        var $51=$0; //@line 527 "_collectionsmodule.c"
        $retval=$51; //@line 527 "_collectionsmodule.c"
        var $retval13=$retval; //@line 527 "_collectionsmodule.c"
        ;
        return $retval13; //@line 527 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_len($deque) {
    ;
    var __label__;
  
    var $deque_addr;
    var $retval;
    var $0;
    $deque_addr=$deque;
    var $1=$deque_addr; //@line 553 "_collectionsmodule.c"
    var $2=$1+24; //@line 553 "_collectionsmodule.c"
    var $3=HEAP[$2]; //@line 553 "_collectionsmodule.c"
    $0=$3; //@line 553 "_collectionsmodule.c"
    var $4=$0; //@line 553 "_collectionsmodule.c"
    $retval=$4; //@line 553 "_collectionsmodule.c"
    var $retval1=$retval; //@line 553 "_collectionsmodule.c"
    ;
    return $retval1; //@line 553 "_collectionsmodule.c"
  }
  

  function _deque_remove($deque, $value) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $value_addr;
        var $retval;
        var $0;
        var $i;
        var $n;
        var $item;
        var $cmp;
        var $tgt;
        $deque_addr=$deque;
        $value_addr=$value;
        var $1=$deque_addr; //@line 559 "_collectionsmodule.c"
        var $2=$1+24; //@line 559 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 559 "_collectionsmodule.c"
        $n=$3; //@line 559 "_collectionsmodule.c"
        $i=0; //@line 561 "_collectionsmodule.c"
        __label__ = 14; break; //@line 561 "_collectionsmodule.c"
      case 1: // $bb
        var $4=$deque_addr; //@line 562 "_collectionsmodule.c"
        var $5=$4+8; //@line 562 "_collectionsmodule.c"
        var $6=HEAP[$5]; //@line 562 "_collectionsmodule.c"
        var $7=$deque_addr; //@line 562 "_collectionsmodule.c"
        var $8=$7+16; //@line 562 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 562 "_collectionsmodule.c"
        var $10=$6+8; //@line 562 "_collectionsmodule.c"
        var $11=$10+$9*4; //@line 562 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 562 "_collectionsmodule.c"
        $item=$12; //@line 562 "_collectionsmodule.c"
        var $13=$item; //@line 563 "_collectionsmodule.c"
        var $14=$value_addr; //@line 563 "_collectionsmodule.c"
        var $15=_PyObject_RichCompareBool($13, $14, 2); //@line 563 "_collectionsmodule.c"
        $cmp=$15; //@line 563 "_collectionsmodule.c"
        var $16=$deque_addr; //@line 565 "_collectionsmodule.c"
        var $17=$16+24; //@line 565 "_collectionsmodule.c"
        var $18=HEAP[$17]; //@line 565 "_collectionsmodule.c"
        var $19=$n; //@line 565 "_collectionsmodule.c"
        var $20=($18)!=($19); //@line 565 "_collectionsmodule.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 565 "_collectionsmodule.c"
      case 2: // $bb1
        var $21=HEAP[_PyExc_IndexError]; //@line 566 "_collectionsmodule.c"
        _PyErr_SetString($21, __str15); //@line 566 "_collectionsmodule.c"
        $0=0; //@line 568 "_collectionsmodule.c"
        __label__ = 16; break; //@line 568 "_collectionsmodule.c"
      case 3: // $bb2
        var $22=$cmp; //@line 570 "_collectionsmodule.c"
        var $23=($22) > 0; //@line 570 "_collectionsmodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 11; break; } //@line 570 "_collectionsmodule.c"
      case 4: // $bb3
        var $24=$deque_addr; //@line 571 "_collectionsmodule.c"
        var $25=_deque_popleft($24, 0); //@line 571 "_collectionsmodule.c"
        $tgt=$25; //@line 571 "_collectionsmodule.c"
        var $26=$tgt; //@line 572 "_collectionsmodule.c"
        var $27=($26)==0; //@line 572 "_collectionsmodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 572 "_collectionsmodule.c"
      case 5: // $bb4
        ___assert_fail(__str16, __str3, 572, ___PRETTY_FUNCTION___9049); //@line 572 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 572 "_collectionsmodule.c"
      case 6: // $bb5
        var $28=$tgt; //@line 573 "_collectionsmodule.c"
        var $29=$28; //@line 573 "_collectionsmodule.c"
        var $30=HEAP[$29]; //@line 573 "_collectionsmodule.c"
        var $31=($30) - 1; //@line 573 "_collectionsmodule.c"
        var $32=$tgt; //@line 573 "_collectionsmodule.c"
        var $33=$32; //@line 573 "_collectionsmodule.c"
        HEAP[$33]=$31; //@line 573 "_collectionsmodule.c"
        var $34=$tgt; //@line 573 "_collectionsmodule.c"
        var $35=$34; //@line 573 "_collectionsmodule.c"
        var $36=HEAP[$35]; //@line 573 "_collectionsmodule.c"
        var $37=($36)==0; //@line 573 "_collectionsmodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 573 "_collectionsmodule.c"
      case 7: // $bb6
        var $38=$tgt; //@line 573 "_collectionsmodule.c"
        var $39=$38+4; //@line 573 "_collectionsmodule.c"
        var $40=HEAP[$39]; //@line 573 "_collectionsmodule.c"
        var $41=$40+24; //@line 573 "_collectionsmodule.c"
        var $42=HEAP[$41]; //@line 573 "_collectionsmodule.c"
        var $43=$tgt; //@line 573 "_collectionsmodule.c"
        FUNCTION_TABLE[$42]($43); //@line 573 "_collectionsmodule.c"
        __label__ = 8; break; //@line 573 "_collectionsmodule.c"
      case 8: // $bb7
        var $44=$deque_addr; //@line 574 "_collectionsmodule.c"
        var $45=$i; //@line 574 "_collectionsmodule.c"
        var $46=__deque_rotate($44, $45); //@line 574 "_collectionsmodule.c"
        var $47=($46)==-1; //@line 574 "_collectionsmodule.c"
        if ($47) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 574 "_collectionsmodule.c"
      case 9: // $bb8
        $0=0; //@line 575 "_collectionsmodule.c"
        __label__ = 16; break; //@line 575 "_collectionsmodule.c"
      case 10: // $bb9
        var $48=HEAP[__Py_NoneStruct]; //@line 576 "_collectionsmodule.c"
        var $49=($48) + 1; //@line 576 "_collectionsmodule.c"
        HEAP[__Py_NoneStruct]=$49; //@line 576 "_collectionsmodule.c"
        $0=__Py_NoneStruct; //@line 576 "_collectionsmodule.c"
        __label__ = 16; break; //@line 576 "_collectionsmodule.c"
      case 11: // $bb10
        var $50=$cmp; //@line 578 "_collectionsmodule.c"
        var $51=($50) < 0; //@line 578 "_collectionsmodule.c"
        var $52=$deque_addr; //@line 579 "_collectionsmodule.c"
        if ($51) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 578 "_collectionsmodule.c"
      case 12: // $bb11
        var $53=$i; //@line 579 "_collectionsmodule.c"
        var $54=__deque_rotate($52, $53); //@line 579 "_collectionsmodule.c"
        $0=0; //@line 580 "_collectionsmodule.c"
        __label__ = 16; break; //@line 580 "_collectionsmodule.c"
      case 13: // $bb12
        var $55=__deque_rotate($52, -1); //@line 582 "_collectionsmodule.c"
        var $56=$i; //@line 561 "_collectionsmodule.c"
        var $57=($56) + 1; //@line 561 "_collectionsmodule.c"
        $i=$57; //@line 561 "_collectionsmodule.c"
        __label__ = 14; break; //@line 561 "_collectionsmodule.c"
      case 14: // $bb13
        var $58=$i; //@line 561 "_collectionsmodule.c"
        var $59=$n; //@line 561 "_collectionsmodule.c"
        var $60=($58) < ($59); //@line 561 "_collectionsmodule.c"
        if ($60) { __label__ = 1; break; } else { __label__ = 15; break; } //@line 561 "_collectionsmodule.c"
      case 15: // $bb14
        var $61=HEAP[_PyExc_ValueError]; //@line 584 "_collectionsmodule.c"
        _PyErr_SetString($61, __str17); //@line 584 "_collectionsmodule.c"
        $0=0; //@line 585 "_collectionsmodule.c"
        __label__ = 16; break; //@line 585 "_collectionsmodule.c"
      case 16: // $bb15
        var $62=$0; //@line 568 "_collectionsmodule.c"
        $retval=$62; //@line 568 "_collectionsmodule.c"
        var $retval16=$retval; //@line 568 "_collectionsmodule.c"
        ;
        return $retval16; //@line 568 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_clear($deque) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $retval;
        var $0;
        var $item;
        $deque_addr=$deque;
        __label__ = 5; break; //@line 596 "_collectionsmodule.c"
      case 1: // $bb
        var $1=_deque_pop($24, 0); //@line 597 "_collectionsmodule.c"
        $item=$1; //@line 597 "_collectionsmodule.c"
        var $2=$item; //@line 598 "_collectionsmodule.c"
        var $3=($2)==0; //@line 598 "_collectionsmodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 598 "_collectionsmodule.c"
      case 2: // $bb1
        ___assert_fail(__str11, __str3, 598, ___PRETTY_FUNCTION___9087); //@line 598 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 598 "_collectionsmodule.c"
      case 3: // $bb2
        var $4=$item; //@line 599 "_collectionsmodule.c"
        var $5=$4; //@line 599 "_collectionsmodule.c"
        var $6=HEAP[$5]; //@line 599 "_collectionsmodule.c"
        var $7=($6) - 1; //@line 599 "_collectionsmodule.c"
        var $8=$item; //@line 599 "_collectionsmodule.c"
        var $9=$8; //@line 599 "_collectionsmodule.c"
        HEAP[$9]=$7; //@line 599 "_collectionsmodule.c"
        var $10=$item; //@line 599 "_collectionsmodule.c"
        var $11=$10; //@line 599 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 599 "_collectionsmodule.c"
        var $13=($12)==0; //@line 599 "_collectionsmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 599 "_collectionsmodule.c"
      case 4: // $bb3
        var $14=$item; //@line 599 "_collectionsmodule.c"
        var $15=$14+4; //@line 599 "_collectionsmodule.c"
        var $16=HEAP[$15]; //@line 599 "_collectionsmodule.c"
        var $17=$16+24; //@line 599 "_collectionsmodule.c"
        var $18=HEAP[$17]; //@line 599 "_collectionsmodule.c"
        var $19=$item; //@line 599 "_collectionsmodule.c"
        FUNCTION_TABLE[$18]($19); //@line 599 "_collectionsmodule.c"
        __label__ = 5; break; //@line 599 "_collectionsmodule.c"
      case 5: // $bb4
        var $20=$deque_addr; //@line 596 "_collectionsmodule.c"
        var $21=$20+24; //@line 596 "_collectionsmodule.c"
        var $22=HEAP[$21]; //@line 596 "_collectionsmodule.c"
        var $23=($22)!=0; //@line 596 "_collectionsmodule.c"
        var $24=$deque_addr; //@line 597 "_collectionsmodule.c"
        if ($23) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 596 "_collectionsmodule.c"
      case 6: // $bb5
        var $25=$24+8; //@line 601 "_collectionsmodule.c"
        var $26=HEAP[$25]; //@line 601 "_collectionsmodule.c"
        var $27=$deque_addr; //@line 601 "_collectionsmodule.c"
        var $28=$27+12; //@line 601 "_collectionsmodule.c"
        var $29=HEAP[$28]; //@line 601 "_collectionsmodule.c"
        var $30=($26)!=($29); //@line 601 "_collectionsmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 7; break; } //@line 601 "_collectionsmodule.c"
      case 7: // $bb6
        var $31=$deque_addr; //@line 601 "_collectionsmodule.c"
        var $32=$31+16; //@line 601 "_collectionsmodule.c"
        var $33=HEAP[$32]; //@line 601 "_collectionsmodule.c"
        var $34=($33) - 1; //@line 601 "_collectionsmodule.c"
        var $35=$deque_addr; //@line 601 "_collectionsmodule.c"
        var $36=$35+20; //@line 601 "_collectionsmodule.c"
        var $37=HEAP[$36]; //@line 601 "_collectionsmodule.c"
        var $38=($34)!=($37); //@line 601 "_collectionsmodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 601 "_collectionsmodule.c"
      case 8: // $bb7
        var $39=$deque_addr; //@line 601 "_collectionsmodule.c"
        var $40=$39+24; //@line 601 "_collectionsmodule.c"
        var $41=HEAP[$40]; //@line 601 "_collectionsmodule.c"
        var $42=($41)!=0; //@line 601 "_collectionsmodule.c"
        if ($42) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 601 "_collectionsmodule.c"
      case 9: // $bb8
        ___assert_fail(__str18, __str3, 603, ___PRETTY_FUNCTION___9087); //@line 601 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 601 "_collectionsmodule.c"
      case 10: // $bb9
        $0=0; //@line 604 "_collectionsmodule.c"
        var $43=$0; //@line 604 "_collectionsmodule.c"
        $retval=$43; //@line 604 "_collectionsmodule.c"
        var $retval10=$retval; //@line 604 "_collectionsmodule.c"
        ;
        return $retval10; //@line 604 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_item($deque, $i) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $i_addr;
        var $retval;
        var $0;
        var $b;
        var $item;
        var $n;
        var $index;
        $deque_addr=$deque;
        $i_addr=$i;
        var $1=$i_addr; //@line 612 "_collectionsmodule.c"
        $index=$1; //@line 612 "_collectionsmodule.c"
        var $2=$i_addr; //@line 614 "_collectionsmodule.c"
        var $3=($2) < 0; //@line 614 "_collectionsmodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 614 "_collectionsmodule.c"
      case 1: // $bb
        var $4=$deque_addr; //@line 614 "_collectionsmodule.c"
        var $5=$4+24; //@line 614 "_collectionsmodule.c"
        var $6=HEAP[$5]; //@line 614 "_collectionsmodule.c"
        var $7=$i_addr; //@line 614 "_collectionsmodule.c"
        var $8=($6) <= ($7); //@line 614 "_collectionsmodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 614 "_collectionsmodule.c"
      case 2: // $bb1
        var $9=HEAP[_PyExc_IndexError]; //@line 615 "_collectionsmodule.c"
        _PyErr_SetString($9, __str19); //@line 615 "_collectionsmodule.c"
        $0=0; //@line 617 "_collectionsmodule.c"
        __label__ = 13; break; //@line 617 "_collectionsmodule.c"
      case 3: // $bb2
        var $10=$i_addr; //@line 620 "_collectionsmodule.c"
        var $11=($10)==0; //@line 620 "_collectionsmodule.c"
        var $12=$deque_addr; //@line 621 "_collectionsmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 620 "_collectionsmodule.c"
      case 4: // $bb3
        var $13=$12+16; //@line 621 "_collectionsmodule.c"
        var $14=HEAP[$13]; //@line 621 "_collectionsmodule.c"
        $i_addr=$14; //@line 621 "_collectionsmodule.c"
        var $15=$deque_addr; //@line 622 "_collectionsmodule.c"
        var $16=$15+8; //@line 622 "_collectionsmodule.c"
        var $17=HEAP[$16]; //@line 622 "_collectionsmodule.c"
        $b=$17; //@line 622 "_collectionsmodule.c"
        __label__ = 12; break; //@line 622 "_collectionsmodule.c"
      case 5: // $bb4
        var $18=$12+24; //@line 623 "_collectionsmodule.c"
        var $19=HEAP[$18]; //@line 623 "_collectionsmodule.c"
        var $20=($19) - 1; //@line 623 "_collectionsmodule.c"
        var $21=$i_addr; //@line 623 "_collectionsmodule.c"
        var $22=($20)==($21); //@line 623 "_collectionsmodule.c"
        var $23=$deque_addr; //@line 624 "_collectionsmodule.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 623 "_collectionsmodule.c"
      case 6: // $bb5
        var $24=$23+20; //@line 624 "_collectionsmodule.c"
        var $25=HEAP[$24]; //@line 624 "_collectionsmodule.c"
        $i_addr=$25; //@line 624 "_collectionsmodule.c"
        var $26=$deque_addr; //@line 625 "_collectionsmodule.c"
        var $27=$26+12; //@line 625 "_collectionsmodule.c"
        var $28=HEAP[$27]; //@line 625 "_collectionsmodule.c"
        $b=$28; //@line 625 "_collectionsmodule.c"
        __label__ = 12; break; //@line 625 "_collectionsmodule.c"
      case 7: // $bb6
        var $29=$23+16; //@line 627 "_collectionsmodule.c"
        var $30=HEAP[$29]; //@line 627 "_collectionsmodule.c"
        var $31=$i_addr; //@line 627 "_collectionsmodule.c"
        var $32=($31) + ($30); //@line 627 "_collectionsmodule.c"
        $i_addr=$32; //@line 627 "_collectionsmodule.c"
        var $33=$i_addr; //@line 628 "_collectionsmodule.c"
        var $34=((($33)/62)|0); //@line 628 "_collectionsmodule.c"
        $n=$34; //@line 628 "_collectionsmodule.c"
        var $35=$i_addr; //@line 629 "_collectionsmodule.c"
        var $36=($35) % 62; //@line 629 "_collectionsmodule.c"
        $i_addr=$36; //@line 629 "_collectionsmodule.c"
        var $37=$deque_addr; //@line 630 "_collectionsmodule.c"
        var $38=$37+24; //@line 630 "_collectionsmodule.c"
        var $39=HEAP[$38]; //@line 630 "_collectionsmodule.c"
        var $40=($39) >> 1; //@line 630 "_collectionsmodule.c"
        var $41=$index; //@line 630 "_collectionsmodule.c"
        var $42=($40) > ($41); //@line 630 "_collectionsmodule.c"
        var $43=$deque_addr; //@line 631 "_collectionsmodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 630 "_collectionsmodule.c"
      case 8: // $bb7
        var $44=$43+8; //@line 631 "_collectionsmodule.c"
        var $45=HEAP[$44]; //@line 631 "_collectionsmodule.c"
        $b=$45; //@line 631 "_collectionsmodule.c"
        var $46=$n; //@line 632 "_collectionsmodule.c"
        var $47=($46) - 1; //@line 632 "_collectionsmodule.c"
        $n=$47; //@line 632 "_collectionsmodule.c"
        var $48=($47)!=-1; //@line 632 "_collectionsmodule.c"
        if ($48) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 632 "_collectionsmodule.c"
      case 9: // $bb8
        var $49=$b; //@line 633 "_collectionsmodule.c"
        var $50=$49+4; //@line 633 "_collectionsmodule.c"
        var $51=HEAP[$50]; //@line 633 "_collectionsmodule.c"
        $b=$51; //@line 633 "_collectionsmodule.c"
        var $52=$n; //@line 632 "_collectionsmodule.c"
        var $53=($52) - 1; //@line 632 "_collectionsmodule.c"
        $n=$53; //@line 632 "_collectionsmodule.c"
        var $54=($53)!=-1; //@line 632 "_collectionsmodule.c"
        if ($54) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 632 "_collectionsmodule.c"
      case 10: // $bb11
        var $55=$43+16; //@line 635 "_collectionsmodule.c"
        var $56=HEAP[$55]; //@line 635 "_collectionsmodule.c"
        var $57=$deque_addr; //@line 635 "_collectionsmodule.c"
        var $58=$57+24; //@line 635 "_collectionsmodule.c"
        var $59=HEAP[$58]; //@line 635 "_collectionsmodule.c"
        var $60=($56) + -1; //@line 635 "_collectionsmodule.c"
        var $61=($60) + ($59);
        var $62=((($61)/62)|0); //@line 635 "_collectionsmodule.c"
        var $63=$n; //@line 635 "_collectionsmodule.c"
        var $64=($62) - ($63); //@line 635 "_collectionsmodule.c"
        $n=$64; //@line 635 "_collectionsmodule.c"
        var $65=$deque_addr; //@line 636 "_collectionsmodule.c"
        var $66=$65+12; //@line 636 "_collectionsmodule.c"
        var $67=HEAP[$66]; //@line 636 "_collectionsmodule.c"
        $b=$67; //@line 636 "_collectionsmodule.c"
        var $68=$n; //@line 637 "_collectionsmodule.c"
        var $69=($68) - 1; //@line 637 "_collectionsmodule.c"
        $n=$69; //@line 637 "_collectionsmodule.c"
        var $70=($69)!=-1; //@line 637 "_collectionsmodule.c"
        if ($70) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 637 "_collectionsmodule.c"
      case 11: // $bb12
        var $71=$b; //@line 638 "_collectionsmodule.c"
        var $72=$71; //@line 638 "_collectionsmodule.c"
        var $73=HEAP[$72]; //@line 638 "_collectionsmodule.c"
        $b=$73; //@line 638 "_collectionsmodule.c"
        var $74=$n; //@line 637 "_collectionsmodule.c"
        var $75=($74) - 1; //@line 637 "_collectionsmodule.c"
        $n=$75; //@line 637 "_collectionsmodule.c"
        var $76=($75)!=-1; //@line 637 "_collectionsmodule.c"
        if ($76) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 637 "_collectionsmodule.c"
      case 12: // $bb14
        var $77=$i_addr; //@line 641 "_collectionsmodule.c"
        var $78=$b; //@line 641 "_collectionsmodule.c"
        var $79=$78+8; //@line 641 "_collectionsmodule.c"
        var $80=$79+$77*4; //@line 641 "_collectionsmodule.c"
        var $81=HEAP[$80]; //@line 641 "_collectionsmodule.c"
        $item=$81; //@line 641 "_collectionsmodule.c"
        var $82=$item; //@line 642 "_collectionsmodule.c"
        var $83=$82; //@line 642 "_collectionsmodule.c"
        var $84=HEAP[$83]; //@line 642 "_collectionsmodule.c"
        var $85=($84) + 1; //@line 642 "_collectionsmodule.c"
        var $86=$item; //@line 642 "_collectionsmodule.c"
        var $87=$86; //@line 642 "_collectionsmodule.c"
        HEAP[$87]=$85; //@line 642 "_collectionsmodule.c"
        var $88=$item; //@line 643 "_collectionsmodule.c"
        $0=$88; //@line 643 "_collectionsmodule.c"
        __label__ = 13; break; //@line 643 "_collectionsmodule.c"
      case 13: // $bb15
        var $89=$0; //@line 617 "_collectionsmodule.c"
        $retval=$89; //@line 617 "_collectionsmodule.c"
        var $retval16=$retval; //@line 617 "_collectionsmodule.c"
        ;
        return $retval16; //@line 617 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_del_item($deque, $i) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $i_addr;
        var $retval;
        var $0;
        var $item;
        $deque_addr=$deque;
        $i_addr=$i;
        var $1=$i_addr; //@line 658 "_collectionsmodule.c"
        var $2=($1) < 0; //@line 658 "_collectionsmodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 658 "_collectionsmodule.c"
      case 1: // $bb
        var $3=$deque_addr; //@line 658 "_collectionsmodule.c"
        var $4=$3+24; //@line 658 "_collectionsmodule.c"
        var $5=HEAP[$4]; //@line 658 "_collectionsmodule.c"
        var $6=$i_addr; //@line 658 "_collectionsmodule.c"
        var $7=($5) <= ($6); //@line 658 "_collectionsmodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 658 "_collectionsmodule.c"
      case 2: // $bb1
        ___assert_fail(__str20, __str3, 658, ___PRETTY_FUNCTION___9162); //@line 658 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 658 "_collectionsmodule.c"
      case 3: // $bb2
        var $8=$i_addr; //@line 659 "_collectionsmodule.c"
        var $9=0 - ($8); //@line 659 "_collectionsmodule.c"
        var $10=$deque_addr; //@line 659 "_collectionsmodule.c"
        var $11=__deque_rotate($10, $9); //@line 659 "_collectionsmodule.c"
        var $12=($11)==-1; //@line 659 "_collectionsmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 659 "_collectionsmodule.c"
      case 4: // $bb3
        $0=-1; //@line 660 "_collectionsmodule.c"
        __label__ = 10; break; //@line 660 "_collectionsmodule.c"
      case 5: // $bb4
        var $13=$deque_addr; //@line 662 "_collectionsmodule.c"
        var $14=_deque_popleft($13, 0); //@line 662 "_collectionsmodule.c"
        $item=$14; //@line 662 "_collectionsmodule.c"
        var $15=$item; //@line 663 "_collectionsmodule.c"
        var $16=($15)==0; //@line 663 "_collectionsmodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 663 "_collectionsmodule.c"
      case 6: // $bb5
        ___assert_fail(__str11, __str3, 663, ___PRETTY_FUNCTION___9162); //@line 663 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 663 "_collectionsmodule.c"
      case 7: // $bb6
        var $17=$item; //@line 664 "_collectionsmodule.c"
        var $18=$17; //@line 664 "_collectionsmodule.c"
        var $19=HEAP[$18]; //@line 664 "_collectionsmodule.c"
        var $20=($19) - 1; //@line 664 "_collectionsmodule.c"
        var $21=$item; //@line 664 "_collectionsmodule.c"
        var $22=$21; //@line 664 "_collectionsmodule.c"
        HEAP[$22]=$20; //@line 664 "_collectionsmodule.c"
        var $23=$item; //@line 664 "_collectionsmodule.c"
        var $24=$23; //@line 664 "_collectionsmodule.c"
        var $25=HEAP[$24]; //@line 664 "_collectionsmodule.c"
        var $26=($25)==0; //@line 664 "_collectionsmodule.c"
        if ($26) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 664 "_collectionsmodule.c"
      case 8: // $bb7
        var $27=$item; //@line 664 "_collectionsmodule.c"
        var $28=$27+4; //@line 664 "_collectionsmodule.c"
        var $29=HEAP[$28]; //@line 664 "_collectionsmodule.c"
        var $30=$29+24; //@line 664 "_collectionsmodule.c"
        var $31=HEAP[$30]; //@line 664 "_collectionsmodule.c"
        var $32=$item; //@line 664 "_collectionsmodule.c"
        FUNCTION_TABLE[$31]($32); //@line 664 "_collectionsmodule.c"
        __label__ = 9; break; //@line 664 "_collectionsmodule.c"
      case 9: // $bb8
        var $33=$deque_addr; //@line 666 "_collectionsmodule.c"
        var $34=$i_addr; //@line 666 "_collectionsmodule.c"
        var $35=__deque_rotate($33, $34); //@line 666 "_collectionsmodule.c"
        $0=$35; //@line 666 "_collectionsmodule.c"
        __label__ = 10; break; //@line 666 "_collectionsmodule.c"
      case 10: // $bb9
        var $36=$0; //@line 660 "_collectionsmodule.c"
        $retval=$36; //@line 660 "_collectionsmodule.c"
        var $retval10=$retval; //@line 660 "_collectionsmodule.c"
        ;
        return $retval10; //@line 660 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_ass_item($deque, $i, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $old_value;
        var $b;
        var $n;
        var $len;
        var $halflen;
        var $index;
        $deque_addr=$deque;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$deque_addr; //@line 674 "_collectionsmodule.c"
        var $2=$1+24; //@line 674 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 674 "_collectionsmodule.c"
        $len=$3; //@line 674 "_collectionsmodule.c"
        var $4=$len; //@line 674 "_collectionsmodule.c"
        var $5=($4) + 1; //@line 674 "_collectionsmodule.c"
        var $6=($5) >> 1; //@line 674 "_collectionsmodule.c"
        $halflen=$6; //@line 674 "_collectionsmodule.c"
        var $7=$i_addr; //@line 674 "_collectionsmodule.c"
        $index=$7; //@line 674 "_collectionsmodule.c"
        var $8=$i_addr; //@line 676 "_collectionsmodule.c"
        var $9=($8) < 0; //@line 676 "_collectionsmodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 676 "_collectionsmodule.c"
      case 1: // $bb
        var $10=$i_addr; //@line 676 "_collectionsmodule.c"
        var $11=$len; //@line 676 "_collectionsmodule.c"
        var $12=($10) >= ($11); //@line 676 "_collectionsmodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 676 "_collectionsmodule.c"
      case 2: // $bb1
        var $13=HEAP[_PyExc_IndexError]; //@line 677 "_collectionsmodule.c"
        _PyErr_SetString($13, __str19); //@line 677 "_collectionsmodule.c"
        $0=-1; //@line 679 "_collectionsmodule.c"
        __label__ = 13; break; //@line 679 "_collectionsmodule.c"
      case 3: // $bb2
        var $14=$v_addr; //@line 681 "_collectionsmodule.c"
        var $15=($14)==0; //@line 681 "_collectionsmodule.c"
        var $16=$deque_addr; //@line 682 "_collectionsmodule.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 681 "_collectionsmodule.c"
      case 4: // $bb3
        var $17=$i_addr; //@line 682 "_collectionsmodule.c"
        var $18=_deque_del_item($16, $17); //@line 682 "_collectionsmodule.c"
        $0=$18; //@line 682 "_collectionsmodule.c"
        __label__ = 13; break; //@line 682 "_collectionsmodule.c"
      case 5: // $bb4
        var $19=$16+16; //@line 684 "_collectionsmodule.c"
        var $20=HEAP[$19]; //@line 684 "_collectionsmodule.c"
        var $21=$i_addr; //@line 684 "_collectionsmodule.c"
        var $22=($21) + ($20); //@line 684 "_collectionsmodule.c"
        $i_addr=$22; //@line 684 "_collectionsmodule.c"
        var $23=$i_addr; //@line 685 "_collectionsmodule.c"
        var $24=((($23)/62)|0); //@line 685 "_collectionsmodule.c"
        $n=$24; //@line 685 "_collectionsmodule.c"
        var $25=$i_addr; //@line 686 "_collectionsmodule.c"
        var $26=($25) % 62; //@line 686 "_collectionsmodule.c"
        $i_addr=$26; //@line 686 "_collectionsmodule.c"
        var $27=$index; //@line 687 "_collectionsmodule.c"
        var $28=$halflen; //@line 687 "_collectionsmodule.c"
        var $29=($27) <= ($28); //@line 687 "_collectionsmodule.c"
        var $30=$deque_addr; //@line 688 "_collectionsmodule.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 687 "_collectionsmodule.c"
      case 6: // $bb5
        var $31=$30+8; //@line 688 "_collectionsmodule.c"
        var $32=HEAP[$31]; //@line 688 "_collectionsmodule.c"
        $b=$32; //@line 688 "_collectionsmodule.c"
        var $33=$n; //@line 689 "_collectionsmodule.c"
        var $34=($33) - 1; //@line 689 "_collectionsmodule.c"
        $n=$34; //@line 689 "_collectionsmodule.c"
        var $35=($34)!=-1; //@line 689 "_collectionsmodule.c"
        if ($35) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 689 "_collectionsmodule.c"
      case 7: // $bb6
        var $36=$b; //@line 690 "_collectionsmodule.c"
        var $37=$36+4; //@line 690 "_collectionsmodule.c"
        var $38=HEAP[$37]; //@line 690 "_collectionsmodule.c"
        $b=$38; //@line 690 "_collectionsmodule.c"
        var $39=$n; //@line 689 "_collectionsmodule.c"
        var $40=($39) - 1; //@line 689 "_collectionsmodule.c"
        $n=$40; //@line 689 "_collectionsmodule.c"
        var $41=($40)!=-1; //@line 689 "_collectionsmodule.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 689 "_collectionsmodule.c"
      case 8: // $bb9
        var $42=$30+16; //@line 692 "_collectionsmodule.c"
        var $43=HEAP[$42]; //@line 692 "_collectionsmodule.c"
        var $44=$len; //@line 692 "_collectionsmodule.c"
        var $45=($43) + -1; //@line 692 "_collectionsmodule.c"
        var $46=($45) + ($44);
        var $47=((($46)/62)|0); //@line 692 "_collectionsmodule.c"
        var $48=$n; //@line 692 "_collectionsmodule.c"
        var $49=($47) - ($48); //@line 692 "_collectionsmodule.c"
        $n=$49; //@line 692 "_collectionsmodule.c"
        var $50=$deque_addr; //@line 693 "_collectionsmodule.c"
        var $51=$50+12; //@line 693 "_collectionsmodule.c"
        var $52=HEAP[$51]; //@line 693 "_collectionsmodule.c"
        $b=$52; //@line 693 "_collectionsmodule.c"
        var $53=$n; //@line 694 "_collectionsmodule.c"
        var $54=($53) - 1; //@line 694 "_collectionsmodule.c"
        $n=$54; //@line 694 "_collectionsmodule.c"
        var $55=($54)!=-1; //@line 694 "_collectionsmodule.c"
        if ($55) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 694 "_collectionsmodule.c"
      case 9: // $bb10
        var $56=$b; //@line 695 "_collectionsmodule.c"
        var $57=$56; //@line 695 "_collectionsmodule.c"
        var $58=HEAP[$57]; //@line 695 "_collectionsmodule.c"
        $b=$58; //@line 695 "_collectionsmodule.c"
        var $59=$n; //@line 694 "_collectionsmodule.c"
        var $60=($59) - 1; //@line 694 "_collectionsmodule.c"
        $n=$60; //@line 694 "_collectionsmodule.c"
        var $61=($60)!=-1; //@line 694 "_collectionsmodule.c"
        if ($61) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 694 "_collectionsmodule.c"
      case 10: // $bb12
        var $62=$v_addr; //@line 697 "_collectionsmodule.c"
        var $63=$62; //@line 697 "_collectionsmodule.c"
        var $64=HEAP[$63]; //@line 697 "_collectionsmodule.c"
        var $65=($64) + 1; //@line 697 "_collectionsmodule.c"
        var $66=$v_addr; //@line 697 "_collectionsmodule.c"
        var $67=$66; //@line 697 "_collectionsmodule.c"
        HEAP[$67]=$65; //@line 697 "_collectionsmodule.c"
        var $68=$i_addr; //@line 698 "_collectionsmodule.c"
        var $69=$b; //@line 698 "_collectionsmodule.c"
        var $70=$69+8; //@line 698 "_collectionsmodule.c"
        var $71=$70+$68*4; //@line 698 "_collectionsmodule.c"
        var $72=HEAP[$71]; //@line 698 "_collectionsmodule.c"
        $old_value=$72; //@line 698 "_collectionsmodule.c"
        var $73=$i_addr; //@line 699 "_collectionsmodule.c"
        var $74=$b; //@line 699 "_collectionsmodule.c"
        var $75=$74+8; //@line 699 "_collectionsmodule.c"
        var $76=$75+$73*4; //@line 699 "_collectionsmodule.c"
        var $77=$v_addr; //@line 699 "_collectionsmodule.c"
        HEAP[$76]=$77; //@line 699 "_collectionsmodule.c"
        var $78=$old_value; //@line 700 "_collectionsmodule.c"
        var $79=$78; //@line 700 "_collectionsmodule.c"
        var $80=HEAP[$79]; //@line 700 "_collectionsmodule.c"
        var $81=($80) - 1; //@line 700 "_collectionsmodule.c"
        var $82=$old_value; //@line 700 "_collectionsmodule.c"
        var $83=$82; //@line 700 "_collectionsmodule.c"
        HEAP[$83]=$81; //@line 700 "_collectionsmodule.c"
        var $84=$old_value; //@line 700 "_collectionsmodule.c"
        var $85=$84; //@line 700 "_collectionsmodule.c"
        var $86=HEAP[$85]; //@line 700 "_collectionsmodule.c"
        var $87=($86)==0; //@line 700 "_collectionsmodule.c"
        if ($87) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 700 "_collectionsmodule.c"
      case 11: // $bb13
        var $88=$old_value; //@line 700 "_collectionsmodule.c"
        var $89=$88+4; //@line 700 "_collectionsmodule.c"
        var $90=HEAP[$89]; //@line 700 "_collectionsmodule.c"
        var $91=$90+24; //@line 700 "_collectionsmodule.c"
        var $92=HEAP[$91]; //@line 700 "_collectionsmodule.c"
        var $93=$old_value; //@line 700 "_collectionsmodule.c"
        FUNCTION_TABLE[$92]($93); //@line 700 "_collectionsmodule.c"
        __label__ = 12; break; //@line 700 "_collectionsmodule.c"
      case 12: // $bb14
        $0=0; //@line 701 "_collectionsmodule.c"
        __label__ = 13; break; //@line 701 "_collectionsmodule.c"
      case 13: // $bb15
        var $94=$0; //@line 679 "_collectionsmodule.c"
        $retval=$94; //@line 679 "_collectionsmodule.c"
        var $retval16=$retval; //@line 679 "_collectionsmodule.c"
        ;
        return $retval16; //@line 679 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_clearmethod($deque) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $retval;
        var $0;
        var $rv;
        $deque_addr=$deque;
        var $1=$deque_addr; //@line 709 "_collectionsmodule.c"
        var $2=_deque_clear($1); //@line 709 "_collectionsmodule.c"
        $rv=$2; //@line 709 "_collectionsmodule.c"
        var $3=$rv; //@line 710 "_collectionsmodule.c"
        var $4=($3)==-1; //@line 710 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 710 "_collectionsmodule.c"
      case 1: // $bb
        ___assert_fail(__str21, __str3, 710, ___PRETTY_FUNCTION___9234); //@line 710 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 710 "_collectionsmodule.c"
      case 2: // $bb1
        var $5=HEAP[__Py_NoneStruct]; //@line 711 "_collectionsmodule.c"
        var $6=($5) + 1; //@line 711 "_collectionsmodule.c"
        HEAP[__Py_NoneStruct]=$6; //@line 711 "_collectionsmodule.c"
        $0=__Py_NoneStruct; //@line 711 "_collectionsmodule.c"
        var $7=$0; //@line 711 "_collectionsmodule.c"
        $retval=$7; //@line 711 "_collectionsmodule.c"
        var $retval2=$retval; //@line 711 "_collectionsmodule.c"
        ;
        return $retval2; //@line 711 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_dealloc($deque) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        $deque_addr=$deque;
        var $0=$deque_addr; //@line 719 "_collectionsmodule.c"
        var $1=$0; //@line 719 "_collectionsmodule.c"
        _PyObject_GC_UnTrack($1); //@line 719 "_collectionsmodule.c"
        var $2=$deque_addr; //@line 720 "_collectionsmodule.c"
        var $3=$2+36; //@line 720 "_collectionsmodule.c"
        var $4=HEAP[$3]; //@line 720 "_collectionsmodule.c"
        var $5=($4)!=0; //@line 720 "_collectionsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 720 "_collectionsmodule.c"
      case 1: // $bb
        var $6=$deque_addr; //@line 721 "_collectionsmodule.c"
        var $7=$6; //@line 721 "_collectionsmodule.c"
        _PyObject_ClearWeakRefs($7); //@line 721 "_collectionsmodule.c"
        __label__ = 2; break; //@line 721 "_collectionsmodule.c"
      case 2: // $bb1
        var $8=$deque_addr; //@line 722 "_collectionsmodule.c"
        var $9=$8+8; //@line 722 "_collectionsmodule.c"
        var $10=HEAP[$9]; //@line 722 "_collectionsmodule.c"
        var $11=($10)!=0; //@line 722 "_collectionsmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 722 "_collectionsmodule.c"
      case 3: // $bb2
        var $12=$deque_addr; //@line 723 "_collectionsmodule.c"
        var $13=_deque_clear($12); //@line 723 "_collectionsmodule.c"
        var $14=$deque_addr; //@line 724 "_collectionsmodule.c"
        var $15=$14+8; //@line 724 "_collectionsmodule.c"
        var $16=HEAP[$15]; //@line 724 "_collectionsmodule.c"
        var $17=($16)==0; //@line 724 "_collectionsmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 724 "_collectionsmodule.c"
      case 4: // $bb3
        ___assert_fail(__str6, __str3, 724, ___PRETTY_FUNCTION___9246); //@line 724 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 724 "_collectionsmodule.c"
      case 5: // $bb4
        var $18=$deque_addr; //@line 725 "_collectionsmodule.c"
        var $19=$18+8; //@line 725 "_collectionsmodule.c"
        var $20=HEAP[$19]; //@line 725 "_collectionsmodule.c"
        _freeblock($20); //@line 725 "_collectionsmodule.c"
        __label__ = 6; break; //@line 725 "_collectionsmodule.c"
      case 6: // $bb5
        var $21=$deque_addr; //@line 727 "_collectionsmodule.c"
        var $22=$21+8; //@line 727 "_collectionsmodule.c"
        HEAP[$22]=0; //@line 727 "_collectionsmodule.c"
        var $23=$deque_addr; //@line 728 "_collectionsmodule.c"
        var $24=$23+12; //@line 728 "_collectionsmodule.c"
        HEAP[$24]=0; //@line 728 "_collectionsmodule.c"
        var $25=$deque_addr; //@line 729 "_collectionsmodule.c"
        var $26=$25; //@line 729 "_collectionsmodule.c"
        var $27=$26+4; //@line 729 "_collectionsmodule.c"
        var $28=HEAP[$27]; //@line 729 "_collectionsmodule.c"
        var $29=$28+160; //@line 729 "_collectionsmodule.c"
        var $30=HEAP[$29]; //@line 729 "_collectionsmodule.c"
        var $31=$deque_addr; //@line 729 "_collectionsmodule.c"
        var $32=$31; //@line 729 "_collectionsmodule.c"
        FUNCTION_TABLE[$30]($32); //@line 729 "_collectionsmodule.c"
        ;
        return; //@line 730 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_traverse($deque, $visit, $arg) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $iftmp_31;
        var $b;
        var $item;
        var $index;
        var $indexlo;
        var $indexhi;
        var $vret;
        $deque_addr=$deque;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$deque_addr; //@line 738 "_collectionsmodule.c"
        var $2=$1+16; //@line 738 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 738 "_collectionsmodule.c"
        $indexlo=$3; //@line 738 "_collectionsmodule.c"
        var $4=$deque_addr; //@line 740 "_collectionsmodule.c"
        var $5=$4+8; //@line 740 "_collectionsmodule.c"
        var $6=HEAP[$5]; //@line 740 "_collectionsmodule.c"
        $b=$6; //@line 740 "_collectionsmodule.c"
        __lastLabel__ = -1; __label__ = 11; break; //@line 740 "_collectionsmodule.c"
      case 1: // $bb
        var $7=$deque_addr; //@line 743 "_collectionsmodule.c"
        var $8=$7+12; //@line 743 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 743 "_collectionsmodule.c"
        var $10=$b; //@line 743 "_collectionsmodule.c"
        var $11=($9)==($10); //@line 743 "_collectionsmodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 743 "_collectionsmodule.c"
      case 2: // $bb1
        var $12=$deque_addr; //@line 743 "_collectionsmodule.c"
        var $13=$12+20; //@line 743 "_collectionsmodule.c"
        var $14=HEAP[$13]; //@line 743 "_collectionsmodule.c"
        $iftmp_31=$14; //@line 743 "_collectionsmodule.c"
        __label__ = 4; break; //@line 743 "_collectionsmodule.c"
      case 3: // $bb2
        $iftmp_31=61; //@line 743 "_collectionsmodule.c"
        __label__ = 4; break; //@line 743 "_collectionsmodule.c"
      case 4: // $bb3
        var $15=$iftmp_31; //@line 743 "_collectionsmodule.c"
        $indexhi=$15; //@line 743 "_collectionsmodule.c"
        var $16=$indexlo; //@line 745 "_collectionsmodule.c"
        $index=$16; //@line 745 "_collectionsmodule.c"
        __label__ = 9; break; //@line 745 "_collectionsmodule.c"
      case 5: // $bb4
        var $17=$index; //@line 746 "_collectionsmodule.c"
        var $18=$b; //@line 746 "_collectionsmodule.c"
        var $19=$18+8; //@line 746 "_collectionsmodule.c"
        var $20=$19+$17*4; //@line 746 "_collectionsmodule.c"
        var $21=HEAP[$20]; //@line 746 "_collectionsmodule.c"
        $item=$21; //@line 746 "_collectionsmodule.c"
        var $22=$item; //@line 747 "_collectionsmodule.c"
        var $23=($22)!=0; //@line 747 "_collectionsmodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 747 "_collectionsmodule.c"
      case 6: // $bb5
        var $24=$visit_addr; //@line 747 "_collectionsmodule.c"
        var $25=$item; //@line 747 "_collectionsmodule.c"
        var $26=$arg_addr; //@line 747 "_collectionsmodule.c"
        var $27=FUNCTION_TABLE[$24]($25, $26); //@line 747 "_collectionsmodule.c"
        $vret=$27; //@line 747 "_collectionsmodule.c"
        var $28=$vret; //@line 747 "_collectionsmodule.c"
        var $29=($28)!=0; //@line 747 "_collectionsmodule.c"
        if ($29) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 747 "_collectionsmodule.c"
      case 7: // $bb6
        var $30=$vret; //@line 747 "_collectionsmodule.c"
        $0=$30; //@line 747 "_collectionsmodule.c"
        __label__ = 13; break; //@line 747 "_collectionsmodule.c"
      case 8: // $bb7
        var $31=$index; //@line 745 "_collectionsmodule.c"
        var $32=($31) + 1; //@line 745 "_collectionsmodule.c"
        $index=$32; //@line 745 "_collectionsmodule.c"
        __label__ = 9; break; //@line 745 "_collectionsmodule.c"
      case 9: // $bb8
        var $33=$index; //@line 745 "_collectionsmodule.c"
        var $34=$indexhi; //@line 745 "_collectionsmodule.c"
        var $35=($33) <= ($34); //@line 745 "_collectionsmodule.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 745 "_collectionsmodule.c"
      case 10: // $bb9
        $indexlo=0; //@line 749 "_collectionsmodule.c"
        var $36=$b; //@line 740 "_collectionsmodule.c"
        var $37=$36+4; //@line 740 "_collectionsmodule.c"
        var $38=HEAP[$37]; //@line 740 "_collectionsmodule.c"
        $b=$38; //@line 740 "_collectionsmodule.c"
        __lastLabel__ = 10; __label__ = 11; break; //@line 740 "_collectionsmodule.c"
      case 11: // $bb10
        var $39=__lastLabel__ == 10 ? $38 : ($6);
        var $40=($39)!=0; //@line 740 "_collectionsmodule.c"
        if ($40) { __label__ = 1; break; } else { __label__ = 12; break; } //@line 740 "_collectionsmodule.c"
      case 12: // $bb11
        $0=0; //@line 751 "_collectionsmodule.c"
        __label__ = 13; break; //@line 751 "_collectionsmodule.c"
      case 13: // $bb12
        var $41=$0; //@line 747 "_collectionsmodule.c"
        $retval=$41; //@line 747 "_collectionsmodule.c"
        var $retval13=$retval; //@line 747 "_collectionsmodule.c"
        ;
        return $retval13; //@line 747 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_copy($deque) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $retval;
        var $0;
        $deque_addr=$deque;
        var $1=$deque_addr; //@line 757 "_collectionsmodule.c"
        var $2=$1; //@line 757 "_collectionsmodule.c"
        var $3=$2+28; //@line 757 "_collectionsmodule.c"
        var $4=HEAP[$3]; //@line 757 "_collectionsmodule.c"
        var $5=($4)==-1; //@line 757 "_collectionsmodule.c"
        var $6=$deque_addr; //@line 758 "_collectionsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 757 "_collectionsmodule.c"
      case 1: // $bb
        var $7=$6+4; //@line 758 "_collectionsmodule.c"
        var $8=HEAP[$7]; //@line 758 "_collectionsmodule.c"
        var $9=$8; //@line 758 "_collectionsmodule.c"
        var $10=$deque_addr; //@line 758 "_collectionsmodule.c"
        var $11=_PyObject_CallFunction($9, __str22, allocate([$10,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 758 "_collectionsmodule.c"
        $0=$11; //@line 758 "_collectionsmodule.c"
        __label__ = 3; break; //@line 758 "_collectionsmodule.c"
      case 2: // $bb1
        var $12=$6; //@line 760 "_collectionsmodule.c"
        var $13=$12+28; //@line 760 "_collectionsmodule.c"
        var $14=HEAP[$13]; //@line 760 "_collectionsmodule.c"
        var $15=$deque_addr; //@line 760 "_collectionsmodule.c"
        var $16=$15+4; //@line 760 "_collectionsmodule.c"
        var $17=HEAP[$16]; //@line 760 "_collectionsmodule.c"
        var $18=$17; //@line 760 "_collectionsmodule.c"
        var $19=$deque_addr; //@line 760 "_collectionsmodule.c"
        var $20=_PyObject_CallFunction($18, __str23, allocate([$19,0,0,0,$14,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i32",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 760 "_collectionsmodule.c"
        $0=$20; //@line 760 "_collectionsmodule.c"
        __label__ = 3; break; //@line 760 "_collectionsmodule.c"
      case 3: // $bb2
        var $21=$0; //@line 758 "_collectionsmodule.c"
        $retval=$21; //@line 758 "_collectionsmodule.c"
        var $retval3=$retval; //@line 758 "_collectionsmodule.c"
        ;
        return $retval3; //@line 758 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_reduce($deque) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $retval;
        var $0;
        var $dict;
        var $result;
        var $aslist;
        $deque_addr=$deque;
        var $1=$deque_addr; //@line 771 "_collectionsmodule.c"
        var $2=$1; //@line 771 "_collectionsmodule.c"
        var $3=_PyObject_GetAttrString($2, __str24); //@line 771 "_collectionsmodule.c"
        $dict=$3; //@line 771 "_collectionsmodule.c"
        var $4=$dict; //@line 772 "_collectionsmodule.c"
        var $5=($4)==0; //@line 772 "_collectionsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 772 "_collectionsmodule.c"
      case 1: // $bb
        _PyErr_Clear(); //@line 773 "_collectionsmodule.c"
        __label__ = 2; break; //@line 773 "_collectionsmodule.c"
      case 2: // $bb1
        var $6=$deque_addr; //@line 774 "_collectionsmodule.c"
        var $7=$6; //@line 774 "_collectionsmodule.c"
        var $8=_PySequence_List($7); //@line 774 "_collectionsmodule.c"
        $aslist=$8; //@line 774 "_collectionsmodule.c"
        var $9=($8)==0; //@line 775 "_collectionsmodule.c"
        var $10=$dict; //@line 776 "_collectionsmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 775 "_collectionsmodule.c"
      case 3: // $bb2
        var $11=($10)!=0; //@line 776 "_collectionsmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 776 "_collectionsmodule.c"
      case 4: // $bb3
        var $12=$dict; //@line 776 "_collectionsmodule.c"
        var $13=$12; //@line 776 "_collectionsmodule.c"
        var $14=HEAP[$13]; //@line 776 "_collectionsmodule.c"
        var $15=($14) - 1; //@line 776 "_collectionsmodule.c"
        var $16=$dict; //@line 776 "_collectionsmodule.c"
        var $17=$16; //@line 776 "_collectionsmodule.c"
        HEAP[$17]=$15; //@line 776 "_collectionsmodule.c"
        var $18=$dict; //@line 776 "_collectionsmodule.c"
        var $19=$18; //@line 776 "_collectionsmodule.c"
        var $20=HEAP[$19]; //@line 776 "_collectionsmodule.c"
        var $21=($20)==0; //@line 776 "_collectionsmodule.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 776 "_collectionsmodule.c"
      case 5: // $bb4
        var $22=$dict; //@line 776 "_collectionsmodule.c"
        var $23=$22+4; //@line 776 "_collectionsmodule.c"
        var $24=HEAP[$23]; //@line 776 "_collectionsmodule.c"
        var $25=$24+24; //@line 776 "_collectionsmodule.c"
        var $26=HEAP[$25]; //@line 776 "_collectionsmodule.c"
        var $27=$dict; //@line 776 "_collectionsmodule.c"
        FUNCTION_TABLE[$26]($27); //@line 776 "_collectionsmodule.c"
        __label__ = 6; break; //@line 776 "_collectionsmodule.c"
      case 6: // $bb5
        $0=0; //@line 777 "_collectionsmodule.c"
        __label__ = 20; break; //@line 777 "_collectionsmodule.c"
      case 7: // $bb6
        var $28=($10)==0; //@line 779 "_collectionsmodule.c"
        var $29=$deque_addr; //@line 780 "_collectionsmodule.c"
        var $30=$29+28; //@line 780 "_collectionsmodule.c"
        var $31=HEAP[$30]; //@line 780 "_collectionsmodule.c"
        var $32=($31)==-1; //@line 780 "_collectionsmodule.c"
        var $33=$deque_addr; //@line 781 "_collectionsmodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 779 "_collectionsmodule.c"
      case 8: // $bb7
        if ($32) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 780 "_collectionsmodule.c"
      case 9: // $bb8
        var $34=$33; //@line 781 "_collectionsmodule.c"
        var $35=$34+4; //@line 781 "_collectionsmodule.c"
        var $36=HEAP[$35]; //@line 781 "_collectionsmodule.c"
        var $37=$aslist; //@line 781 "_collectionsmodule.c"
        var $38=_Py_BuildValue(__str25, allocate([$36,0,0,0,$37,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 781 "_collectionsmodule.c"
        $result=$38; //@line 781 "_collectionsmodule.c"
        __label__ = 14; break; //@line 781 "_collectionsmodule.c"
      case 10: // $bb9
        var $39=$33+28; //@line 783 "_collectionsmodule.c"
        var $40=HEAP[$39]; //@line 783 "_collectionsmodule.c"
        var $41=$deque_addr; //@line 783 "_collectionsmodule.c"
        var $42=$41; //@line 783 "_collectionsmodule.c"
        var $43=$42+4; //@line 783 "_collectionsmodule.c"
        var $44=HEAP[$43]; //@line 783 "_collectionsmodule.c"
        var $45=$aslist; //@line 783 "_collectionsmodule.c"
        var $46=_Py_BuildValue(__str26, allocate([$44,0,0,0,$45,0,0,0,$40,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 783 "_collectionsmodule.c"
        $result=$46; //@line 783 "_collectionsmodule.c"
        __label__ = 14; break; //@line 783 "_collectionsmodule.c"
      case 11: // $bb11
        if ($32) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 785 "_collectionsmodule.c"
      case 12: // $bb12
        var $47=$33; //@line 786 "_collectionsmodule.c"
        var $48=$47+4; //@line 786 "_collectionsmodule.c"
        var $49=HEAP[$48]; //@line 786 "_collectionsmodule.c"
        var $50=$aslist; //@line 786 "_collectionsmodule.c"
        var $51=$dict; //@line 786 "_collectionsmodule.c"
        var $52=_Py_BuildValue(__str27, allocate([$49,0,0,0,$50,0,0,0,__Py_NoneStruct,0,0,0,$51,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 786 "_collectionsmodule.c"
        $result=$52; //@line 786 "_collectionsmodule.c"
        __label__ = 14; break; //@line 786 "_collectionsmodule.c"
      case 13: // $bb13
        var $53=$33+28; //@line 788 "_collectionsmodule.c"
        var $54=HEAP[$53]; //@line 788 "_collectionsmodule.c"
        var $55=$deque_addr; //@line 788 "_collectionsmodule.c"
        var $56=$55; //@line 788 "_collectionsmodule.c"
        var $57=$56+4; //@line 788 "_collectionsmodule.c"
        var $58=HEAP[$57]; //@line 788 "_collectionsmodule.c"
        var $59=$aslist; //@line 788 "_collectionsmodule.c"
        var $60=$dict; //@line 788 "_collectionsmodule.c"
        var $61=_Py_BuildValue(__str28, allocate([$58,0,0,0,$59,0,0,0,$54,0,0,0,$60,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"i32",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 788 "_collectionsmodule.c"
        $result=$61; //@line 788 "_collectionsmodule.c"
        __label__ = 14; break; //@line 788 "_collectionsmodule.c"
      case 14: // $bb14
        var $62=$dict; //@line 790 "_collectionsmodule.c"
        var $63=($62)!=0; //@line 790 "_collectionsmodule.c"
        if ($63) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 790 "_collectionsmodule.c"
      case 15: // $bb15
        var $64=$dict; //@line 790 "_collectionsmodule.c"
        var $65=$64; //@line 790 "_collectionsmodule.c"
        var $66=HEAP[$65]; //@line 790 "_collectionsmodule.c"
        var $67=($66) - 1; //@line 790 "_collectionsmodule.c"
        var $68=$dict; //@line 790 "_collectionsmodule.c"
        var $69=$68; //@line 790 "_collectionsmodule.c"
        HEAP[$69]=$67; //@line 790 "_collectionsmodule.c"
        var $70=$dict; //@line 790 "_collectionsmodule.c"
        var $71=$70; //@line 790 "_collectionsmodule.c"
        var $72=HEAP[$71]; //@line 790 "_collectionsmodule.c"
        var $73=($72)==0; //@line 790 "_collectionsmodule.c"
        if ($73) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 790 "_collectionsmodule.c"
      case 16: // $bb16
        var $74=$dict; //@line 790 "_collectionsmodule.c"
        var $75=$74+4; //@line 790 "_collectionsmodule.c"
        var $76=HEAP[$75]; //@line 790 "_collectionsmodule.c"
        var $77=$76+24; //@line 790 "_collectionsmodule.c"
        var $78=HEAP[$77]; //@line 790 "_collectionsmodule.c"
        var $79=$dict; //@line 790 "_collectionsmodule.c"
        FUNCTION_TABLE[$78]($79); //@line 790 "_collectionsmodule.c"
        __label__ = 17; break; //@line 790 "_collectionsmodule.c"
      case 17: // $bb17
        var $80=$aslist; //@line 791 "_collectionsmodule.c"
        var $81=$80; //@line 791 "_collectionsmodule.c"
        var $82=HEAP[$81]; //@line 791 "_collectionsmodule.c"
        var $83=($82) - 1; //@line 791 "_collectionsmodule.c"
        var $84=$aslist; //@line 791 "_collectionsmodule.c"
        var $85=$84; //@line 791 "_collectionsmodule.c"
        HEAP[$85]=$83; //@line 791 "_collectionsmodule.c"
        var $86=$aslist; //@line 791 "_collectionsmodule.c"
        var $87=$86; //@line 791 "_collectionsmodule.c"
        var $88=HEAP[$87]; //@line 791 "_collectionsmodule.c"
        var $89=($88)==0; //@line 791 "_collectionsmodule.c"
        if ($89) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 791 "_collectionsmodule.c"
      case 18: // $bb18
        var $90=$aslist; //@line 791 "_collectionsmodule.c"
        var $91=$90+4; //@line 791 "_collectionsmodule.c"
        var $92=HEAP[$91]; //@line 791 "_collectionsmodule.c"
        var $93=$92+24; //@line 791 "_collectionsmodule.c"
        var $94=HEAP[$93]; //@line 791 "_collectionsmodule.c"
        var $95=$aslist; //@line 791 "_collectionsmodule.c"
        FUNCTION_TABLE[$94]($95); //@line 791 "_collectionsmodule.c"
        __label__ = 19; break; //@line 791 "_collectionsmodule.c"
      case 19: // $bb19
        var $96=$result; //@line 792 "_collectionsmodule.c"
        $0=$96; //@line 792 "_collectionsmodule.c"
        __label__ = 20; break; //@line 792 "_collectionsmodule.c"
      case 20: // $bb20
        var $97=$0; //@line 777 "_collectionsmodule.c"
        $retval=$97; //@line 777 "_collectionsmodule.c"
        var $retval21=$retval; //@line 777 "_collectionsmodule.c"
        ;
        return $retval21; //@line 777 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_repr($deque) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $retval;
        var $0;
        var $aslist;
        var $result;
        var $fmt;
        var $i;
        $deque_addr=$deque;
        var $1=$deque_addr; //@line 803 "_collectionsmodule.c"
        var $2=_Py_ReprEnter($1); //@line 803 "_collectionsmodule.c"
        $i=$2; //@line 803 "_collectionsmodule.c"
        var $3=$i; //@line 804 "_collectionsmodule.c"
        var $4=($3)!=0; //@line 804 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 804 "_collectionsmodule.c"
      case 1: // $bb
        var $5=$i; //@line 805 "_collectionsmodule.c"
        var $6=($5) < 0; //@line 805 "_collectionsmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 805 "_collectionsmodule.c"
      case 2: // $bb1
        $0=0; //@line 806 "_collectionsmodule.c"
        __label__ = 18; break; //@line 806 "_collectionsmodule.c"
      case 3: // $bb2
        var $7=_PyString_FromString(__str29); //@line 807 "_collectionsmodule.c"
        $0=$7; //@line 807 "_collectionsmodule.c"
        __label__ = 18; break; //@line 807 "_collectionsmodule.c"
      case 4: // $bb3
        var $8=$deque_addr; //@line 810 "_collectionsmodule.c"
        var $9=_PySequence_List($8); //@line 810 "_collectionsmodule.c"
        $aslist=$9; //@line 810 "_collectionsmodule.c"
        var $10=$aslist; //@line 811 "_collectionsmodule.c"
        var $11=($10)==0; //@line 811 "_collectionsmodule.c"
        var $12=$deque_addr; //@line 812 "_collectionsmodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 811 "_collectionsmodule.c"
      case 5: // $bb4
        _Py_ReprLeave($12); //@line 812 "_collectionsmodule.c"
        $0=0; //@line 813 "_collectionsmodule.c"
        __label__ = 18; break; //@line 813 "_collectionsmodule.c"
      case 6: // $bb5
        var $13=$12; //@line 815 "_collectionsmodule.c"
        var $14=$13+28; //@line 815 "_collectionsmodule.c"
        var $15=HEAP[$14]; //@line 815 "_collectionsmodule.c"
        var $16=($15)!=-1; //@line 815 "_collectionsmodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 815 "_collectionsmodule.c"
      case 7: // $bb6
        var $17=$deque_addr; //@line 816 "_collectionsmodule.c"
        var $18=$17; //@line 816 "_collectionsmodule.c"
        var $19=$18+28; //@line 816 "_collectionsmodule.c"
        var $20=HEAP[$19]; //@line 816 "_collectionsmodule.c"
        var $21=_PyString_FromFormat(__str30, allocate([$20,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 816 "_collectionsmodule.c"
        $fmt=$21; //@line 816 "_collectionsmodule.c"
        __lastLabel__ = 7; __label__ = 9; break; //@line 816 "_collectionsmodule.c"
      case 8: // $bb7
        var $22=_PyString_FromString(__str31); //@line 819 "_collectionsmodule.c"
        $fmt=$22; //@line 819 "_collectionsmodule.c"
        __lastLabel__ = 8; __label__ = 9; break; //@line 819 "_collectionsmodule.c"
      case 9: // $bb8
        var $23=__lastLabel__ == 8 ? $22 : ($21);
        var $24=($23)==0; //@line 820 "_collectionsmodule.c"
        if ($24) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 820 "_collectionsmodule.c"
      case 10: // $bb9
        var $25=$aslist; //@line 821 "_collectionsmodule.c"
        var $26=$25; //@line 821 "_collectionsmodule.c"
        var $27=HEAP[$26]; //@line 821 "_collectionsmodule.c"
        var $28=($27) - 1; //@line 821 "_collectionsmodule.c"
        var $29=$aslist; //@line 821 "_collectionsmodule.c"
        var $30=$29; //@line 821 "_collectionsmodule.c"
        HEAP[$30]=$28; //@line 821 "_collectionsmodule.c"
        var $31=$aslist; //@line 821 "_collectionsmodule.c"
        var $32=$31; //@line 821 "_collectionsmodule.c"
        var $33=HEAP[$32]; //@line 821 "_collectionsmodule.c"
        var $34=($33)==0; //@line 821 "_collectionsmodule.c"
        if ($34) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 821 "_collectionsmodule.c"
      case 11: // $bb10
        var $35=$aslist; //@line 821 "_collectionsmodule.c"
        var $36=$35+4; //@line 821 "_collectionsmodule.c"
        var $37=HEAP[$36]; //@line 821 "_collectionsmodule.c"
        var $38=$37+24; //@line 821 "_collectionsmodule.c"
        var $39=HEAP[$38]; //@line 821 "_collectionsmodule.c"
        var $40=$aslist; //@line 821 "_collectionsmodule.c"
        FUNCTION_TABLE[$39]($40); //@line 821 "_collectionsmodule.c"
        __label__ = 12; break; //@line 821 "_collectionsmodule.c"
      case 12: // $bb11
        var $41=$deque_addr; //@line 822 "_collectionsmodule.c"
        _Py_ReprLeave($41); //@line 822 "_collectionsmodule.c"
        $0=0; //@line 823 "_collectionsmodule.c"
        __label__ = 18; break; //@line 823 "_collectionsmodule.c"
      case 13: // $bb12
        var $42=$fmt; //@line 825 "_collectionsmodule.c"
        var $43=$aslist; //@line 825 "_collectionsmodule.c"
        var $44=_PyString_Format($42, $43); //@line 825 "_collectionsmodule.c"
        $result=$44; //@line 825 "_collectionsmodule.c"
        var $45=$fmt; //@line 826 "_collectionsmodule.c"
        var $46=$45; //@line 826 "_collectionsmodule.c"
        var $47=HEAP[$46]; //@line 826 "_collectionsmodule.c"
        var $48=($47) - 1; //@line 826 "_collectionsmodule.c"
        var $49=$fmt; //@line 826 "_collectionsmodule.c"
        var $50=$49; //@line 826 "_collectionsmodule.c"
        HEAP[$50]=$48; //@line 826 "_collectionsmodule.c"
        var $51=$fmt; //@line 826 "_collectionsmodule.c"
        var $52=$51; //@line 826 "_collectionsmodule.c"
        var $53=HEAP[$52]; //@line 826 "_collectionsmodule.c"
        var $54=($53)==0; //@line 826 "_collectionsmodule.c"
        if ($54) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 826 "_collectionsmodule.c"
      case 14: // $bb13
        var $55=$fmt; //@line 826 "_collectionsmodule.c"
        var $56=$55+4; //@line 826 "_collectionsmodule.c"
        var $57=HEAP[$56]; //@line 826 "_collectionsmodule.c"
        var $58=$57+24; //@line 826 "_collectionsmodule.c"
        var $59=HEAP[$58]; //@line 826 "_collectionsmodule.c"
        var $60=$fmt; //@line 826 "_collectionsmodule.c"
        FUNCTION_TABLE[$59]($60); //@line 826 "_collectionsmodule.c"
        __label__ = 15; break; //@line 826 "_collectionsmodule.c"
      case 15: // $bb14
        var $61=$aslist; //@line 827 "_collectionsmodule.c"
        var $62=$61; //@line 827 "_collectionsmodule.c"
        var $63=HEAP[$62]; //@line 827 "_collectionsmodule.c"
        var $64=($63) - 1; //@line 827 "_collectionsmodule.c"
        var $65=$aslist; //@line 827 "_collectionsmodule.c"
        var $66=$65; //@line 827 "_collectionsmodule.c"
        HEAP[$66]=$64; //@line 827 "_collectionsmodule.c"
        var $67=$aslist; //@line 827 "_collectionsmodule.c"
        var $68=$67; //@line 827 "_collectionsmodule.c"
        var $69=HEAP[$68]; //@line 827 "_collectionsmodule.c"
        var $70=($69)==0; //@line 827 "_collectionsmodule.c"
        if ($70) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 827 "_collectionsmodule.c"
      case 16: // $bb15
        var $71=$aslist; //@line 827 "_collectionsmodule.c"
        var $72=$71+4; //@line 827 "_collectionsmodule.c"
        var $73=HEAP[$72]; //@line 827 "_collectionsmodule.c"
        var $74=$73+24; //@line 827 "_collectionsmodule.c"
        var $75=HEAP[$74]; //@line 827 "_collectionsmodule.c"
        var $76=$aslist; //@line 827 "_collectionsmodule.c"
        FUNCTION_TABLE[$75]($76); //@line 827 "_collectionsmodule.c"
        __label__ = 17; break; //@line 827 "_collectionsmodule.c"
      case 17: // $bb16
        var $77=$deque_addr; //@line 828 "_collectionsmodule.c"
        _Py_ReprLeave($77); //@line 828 "_collectionsmodule.c"
        var $78=$result; //@line 829 "_collectionsmodule.c"
        $0=$78; //@line 829 "_collectionsmodule.c"
        __label__ = 18; break; //@line 829 "_collectionsmodule.c"
      case 18: // $bb17
        var $79=$0; //@line 806 "_collectionsmodule.c"
        $retval=$79; //@line 806 "_collectionsmodule.c"
        var $retval18=$retval; //@line 806 "_collectionsmodule.c"
        ;
        return $retval18; //@line 806 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_tp_print($deque, $fp, $flags) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $fp_addr;
        var $flags_addr;
        var $retval;
        var $0;
        var $it;
        var $item;
        var $emit;
        var $separator;
        var $i;
        $deque_addr=$deque;
        $fp_addr=$fp;
        $flags_addr=$flags;
        $emit=__str32; //@line 836 "_collectionsmodule.c"
        $separator=__str33; //@line 837 "_collectionsmodule.c"
        var $1=$deque_addr; //@line 840 "_collectionsmodule.c"
        var $2=_Py_ReprEnter($1); //@line 840 "_collectionsmodule.c"
        $i=$2; //@line 840 "_collectionsmodule.c"
        var $3=$i; //@line 841 "_collectionsmodule.c"
        var $4=($3)!=0; //@line 841 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 841 "_collectionsmodule.c"
      case 1: // $bb
        var $5=$i; //@line 842 "_collectionsmodule.c"
        var $6=($5) < 0; //@line 842 "_collectionsmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 842 "_collectionsmodule.c"
      case 2: // $bb1
        var $7=$i; //@line 843 "_collectionsmodule.c"
        $0=$7; //@line 843 "_collectionsmodule.c"
        __label__ = 24; break; //@line 843 "_collectionsmodule.c"
      case 3: // $bb2
        var $8=$fp_addr; //@line 845 "_collectionsmodule.c"
        var $9=$8; //@line 845 "_collectionsmodule.c"
        var $10=_fwrite(__str29, 1, 5, $9); //@line 845 "_collectionsmodule.c"
        $0=0; //@line 847 "_collectionsmodule.c"
        __label__ = 24; break; //@line 847 "_collectionsmodule.c"
      case 4: // $bb3
        var $11=$deque_addr; //@line 850 "_collectionsmodule.c"
        var $12=_PyObject_GetIter($11); //@line 850 "_collectionsmodule.c"
        $it=$12; //@line 850 "_collectionsmodule.c"
        var $13=$it; //@line 851 "_collectionsmodule.c"
        var $14=($13)==0; //@line 851 "_collectionsmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 851 "_collectionsmodule.c"
      case 5: // $bb4
        $0=-1; //@line 852 "_collectionsmodule.c"
        __label__ = 24; break; //@line 852 "_collectionsmodule.c"
      case 6: // $bb5
        var $15=$fp_addr; //@line 855 "_collectionsmodule.c"
        var $16=$15; //@line 855 "_collectionsmodule.c"
        var $17=_fwrite(__str34, 1, 7, $16); //@line 855 "_collectionsmodule.c"
        __label__ = 15; break; //@line 855 "_collectionsmodule.c"
      case 7: // $bb6
        var $18=$emit; //@line 859 "_collectionsmodule.c"
        var $19=$fp_addr; //@line 859 "_collectionsmodule.c"
        var $20=_fputs($18, $19); //@line 859 "_collectionsmodule.c"
        var $21=$separator; //@line 861 "_collectionsmodule.c"
        $emit=$21; //@line 861 "_collectionsmodule.c"
        var $22=$item; //@line 862 "_collectionsmodule.c"
        var $23=$fp_addr; //@line 862 "_collectionsmodule.c"
        var $24=_PyObject_Print($22, $23, 0); //@line 862 "_collectionsmodule.c"
        var $25=($24)!=0; //@line 862 "_collectionsmodule.c"
        var $26=$item; //@line 863 "_collectionsmodule.c"
        var $27=$26; //@line 863 "_collectionsmodule.c"
        var $28=HEAP[$27]; //@line 863 "_collectionsmodule.c"
        var $29=($28) - 1; //@line 863 "_collectionsmodule.c"
        var $30=$item; //@line 863 "_collectionsmodule.c"
        var $31=$30; //@line 863 "_collectionsmodule.c"
        HEAP[$31]=$29; //@line 863 "_collectionsmodule.c"
        var $32=$item; //@line 863 "_collectionsmodule.c"
        var $33=$32; //@line 863 "_collectionsmodule.c"
        var $34=HEAP[$33]; //@line 863 "_collectionsmodule.c"
        var $35=($34)==0; //@line 863 "_collectionsmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 862 "_collectionsmodule.c"
      case 8: // $bb7
        if ($35) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 863 "_collectionsmodule.c"
      case 9: // $bb8
        var $36=$item; //@line 863 "_collectionsmodule.c"
        var $37=$36+4; //@line 863 "_collectionsmodule.c"
        var $38=HEAP[$37]; //@line 863 "_collectionsmodule.c"
        var $39=$38+24; //@line 863 "_collectionsmodule.c"
        var $40=HEAP[$39]; //@line 863 "_collectionsmodule.c"
        var $41=$item; //@line 863 "_collectionsmodule.c"
        FUNCTION_TABLE[$40]($41); //@line 863 "_collectionsmodule.c"
        __label__ = 10; break; //@line 863 "_collectionsmodule.c"
      case 10: // $bb9
        var $42=$it; //@line 864 "_collectionsmodule.c"
        var $43=$42; //@line 864 "_collectionsmodule.c"
        var $44=HEAP[$43]; //@line 864 "_collectionsmodule.c"
        var $45=($44) - 1; //@line 864 "_collectionsmodule.c"
        var $46=$it; //@line 864 "_collectionsmodule.c"
        var $47=$46; //@line 864 "_collectionsmodule.c"
        HEAP[$47]=$45; //@line 864 "_collectionsmodule.c"
        var $48=$it; //@line 864 "_collectionsmodule.c"
        var $49=$48; //@line 864 "_collectionsmodule.c"
        var $50=HEAP[$49]; //@line 864 "_collectionsmodule.c"
        var $51=($50)==0; //@line 864 "_collectionsmodule.c"
        if ($51) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 864 "_collectionsmodule.c"
      case 11: // $bb10
        var $52=$it; //@line 864 "_collectionsmodule.c"
        var $53=$52+4; //@line 864 "_collectionsmodule.c"
        var $54=HEAP[$53]; //@line 864 "_collectionsmodule.c"
        var $55=$54+24; //@line 864 "_collectionsmodule.c"
        var $56=HEAP[$55]; //@line 864 "_collectionsmodule.c"
        var $57=$it; //@line 864 "_collectionsmodule.c"
        FUNCTION_TABLE[$56]($57); //@line 864 "_collectionsmodule.c"
        __label__ = 12; break; //@line 864 "_collectionsmodule.c"
      case 12: // $bb11
        var $58=$deque_addr; //@line 865 "_collectionsmodule.c"
        _Py_ReprLeave($58); //@line 865 "_collectionsmodule.c"
        $0=-1; //@line 866 "_collectionsmodule.c"
        __label__ = 24; break; //@line 866 "_collectionsmodule.c"
      case 13: // $bb12
        if ($35) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 868 "_collectionsmodule.c"
      case 14: // $bb13
        var $59=$item; //@line 868 "_collectionsmodule.c"
        var $60=$59+4; //@line 868 "_collectionsmodule.c"
        var $61=HEAP[$60]; //@line 868 "_collectionsmodule.c"
        var $62=$61+24; //@line 868 "_collectionsmodule.c"
        var $63=HEAP[$62]; //@line 868 "_collectionsmodule.c"
        var $64=$item; //@line 868 "_collectionsmodule.c"
        FUNCTION_TABLE[$63]($64); //@line 868 "_collectionsmodule.c"
        __label__ = 15; break; //@line 868 "_collectionsmodule.c"
      case 15: // $bb14
        var $65=$it; //@line 857 "_collectionsmodule.c"
        var $66=_PyIter_Next($65); //@line 857 "_collectionsmodule.c"
        $item=$66; //@line 857 "_collectionsmodule.c"
        var $67=($66)!=0; //@line 857 "_collectionsmodule.c"
        if ($67) { __label__ = 7; break; } else { __label__ = 16; break; } //@line 857 "_collectionsmodule.c"
      case 16: // $bb15
        var $68=$deque_addr; //@line 870 "_collectionsmodule.c"
        _Py_ReprLeave($68); //@line 870 "_collectionsmodule.c"
        var $69=$it; //@line 871 "_collectionsmodule.c"
        var $70=$69; //@line 871 "_collectionsmodule.c"
        var $71=HEAP[$70]; //@line 871 "_collectionsmodule.c"
        var $72=($71) - 1; //@line 871 "_collectionsmodule.c"
        var $73=$it; //@line 871 "_collectionsmodule.c"
        var $74=$73; //@line 871 "_collectionsmodule.c"
        HEAP[$74]=$72; //@line 871 "_collectionsmodule.c"
        var $75=$it; //@line 871 "_collectionsmodule.c"
        var $76=$75; //@line 871 "_collectionsmodule.c"
        var $77=HEAP[$76]; //@line 871 "_collectionsmodule.c"
        var $78=($77)==0; //@line 871 "_collectionsmodule.c"
        if ($78) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 871 "_collectionsmodule.c"
      case 17: // $bb16
        var $79=$it; //@line 871 "_collectionsmodule.c"
        var $80=$79+4; //@line 871 "_collectionsmodule.c"
        var $81=HEAP[$80]; //@line 871 "_collectionsmodule.c"
        var $82=$81+24; //@line 871 "_collectionsmodule.c"
        var $83=HEAP[$82]; //@line 871 "_collectionsmodule.c"
        var $84=$it; //@line 871 "_collectionsmodule.c"
        FUNCTION_TABLE[$83]($84); //@line 871 "_collectionsmodule.c"
        __label__ = 18; break; //@line 871 "_collectionsmodule.c"
      case 18: // $bb17
        var $85=_PyErr_Occurred(); //@line 872 "_collectionsmodule.c"
        var $86=($85)!=0; //@line 872 "_collectionsmodule.c"
        if ($86) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 872 "_collectionsmodule.c"
      case 19: // $bb18
        $0=-1; //@line 873 "_collectionsmodule.c"
        __label__ = 24; break; //@line 873 "_collectionsmodule.c"
      case 20: // $bb19
        var $87=$deque_addr; //@line 876 "_collectionsmodule.c"
        var $88=$87; //@line 876 "_collectionsmodule.c"
        var $89=$88+28; //@line 876 "_collectionsmodule.c"
        var $90=HEAP[$89]; //@line 876 "_collectionsmodule.c"
        var $91=($90)==-1; //@line 876 "_collectionsmodule.c"
        if ($91) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 876 "_collectionsmodule.c"
      case 21: // $bb20
        var $92=$fp_addr; //@line 877 "_collectionsmodule.c"
        var $93=$92; //@line 877 "_collectionsmodule.c"
        var $94=_fwrite(__str35, 1, 2, $93); //@line 877 "_collectionsmodule.c"
        __label__ = 23; break; //@line 877 "_collectionsmodule.c"
      case 22: // $bb21
        var $95=$deque_addr; //@line 879 "_collectionsmodule.c"
        var $96=$95; //@line 879 "_collectionsmodule.c"
        var $97=$96+28; //@line 879 "_collectionsmodule.c"
        var $98=HEAP[$97]; //@line 879 "_collectionsmodule.c"
        var $99=$fp_addr; //@line 879 "_collectionsmodule.c"
        var $100=_fprintf($99, __str36, allocate([$98,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 879 "_collectionsmodule.c"
        __label__ = 23; break; //@line 879 "_collectionsmodule.c"
      case 23: // $bb22
        $0=0; //@line 881 "_collectionsmodule.c"
        __label__ = 24; break; //@line 881 "_collectionsmodule.c"
      case 24: // $bb23
        var $101=$0; //@line 843 "_collectionsmodule.c"
        $retval=$101; //@line 843 "_collectionsmodule.c"
        var $retval24=$retval; //@line 843 "_collectionsmodule.c"
        ;
        return $retval24; //@line 843 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_richcompare($v, $w, $op) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $v_addr;
        var $w_addr;
        var $op_addr;
        var $retval;
        var $0;
        var $it1;
        var $it2;
        var $x;
        var $y;
        var $vs;
        var $ws;
        var $b;
        var $cmp;
        $v_addr=$v;
        $w_addr=$w;
        $op_addr=$op;
        $it1=0; //@line 887 "_collectionsmodule.c"
        $it2=0; //@line 887 "_collectionsmodule.c"
        $cmp=-1; //@line 889 "_collectionsmodule.c"
        var $1=$v_addr; //@line 891 "_collectionsmodule.c"
        var $2=$1+4; //@line 891 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 891 "_collectionsmodule.c"
        var $4=($3)==(_deque_type); //@line 891 "_collectionsmodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 891 "_collectionsmodule.c"
      case 1: // $bb
        var $5=$v_addr; //@line 891 "_collectionsmodule.c"
        var $6=$5+4; //@line 891 "_collectionsmodule.c"
        var $7=HEAP[$6]; //@line 891 "_collectionsmodule.c"
        var $8=_PyType_IsSubtype($7, _deque_type); //@line 891 "_collectionsmodule.c"
        var $9=($8)==0; //@line 891 "_collectionsmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 891 "_collectionsmodule.c"
      case 2: // $bb1
        var $10=$w_addr; //@line 891 "_collectionsmodule.c"
        var $11=$10+4; //@line 891 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 891 "_collectionsmodule.c"
        var $13=($12)==(_deque_type); //@line 891 "_collectionsmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 891 "_collectionsmodule.c"
      case 3: // $bb2
        var $14=$w_addr; //@line 891 "_collectionsmodule.c"
        var $15=$14+4; //@line 891 "_collectionsmodule.c"
        var $16=HEAP[$15]; //@line 891 "_collectionsmodule.c"
        var $17=_PyType_IsSubtype($16, _deque_type); //@line 891 "_collectionsmodule.c"
        var $18=($17)==0; //@line 891 "_collectionsmodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 891 "_collectionsmodule.c"
      case 4: // $bb3
        var $19=HEAP[__Py_NotImplementedStruct]; //@line 893 "_collectionsmodule.c"
        var $20=($19) + 1; //@line 893 "_collectionsmodule.c"
        HEAP[__Py_NotImplementedStruct]=$20; //@line 893 "_collectionsmodule.c"
        $0=__Py_NotImplementedStruct; //@line 894 "_collectionsmodule.c"
        __label__ = 58; break; //@line 894 "_collectionsmodule.c"
      case 5: // $bb4
        var $21=$v_addr; //@line 898 "_collectionsmodule.c"
        var $22=$21; //@line 898 "_collectionsmodule.c"
        var $23=$22+24; //@line 898 "_collectionsmodule.c"
        var $24=HEAP[$23]; //@line 898 "_collectionsmodule.c"
        $vs=$24; //@line 898 "_collectionsmodule.c"
        var $25=$w_addr; //@line 899 "_collectionsmodule.c"
        var $26=$25; //@line 899 "_collectionsmodule.c"
        var $27=$26+24; //@line 899 "_collectionsmodule.c"
        var $28=HEAP[$27]; //@line 899 "_collectionsmodule.c"
        $ws=$28; //@line 899 "_collectionsmodule.c"
        var $29=$op_addr; //@line 900 "_collectionsmodule.c"
        var $30=($29)==2; //@line 900 "_collectionsmodule.c"
        if ($30) { __lastLabel__ = 5; __label__ = 6; break; } else { __lastLabel__ = 5; __label__ = 11; break; } //@line 900 "_collectionsmodule.c"
      case 6: // $bb5
        var $31=$v_addr; //@line 901 "_collectionsmodule.c"
        var $32=$w_addr; //@line 901 "_collectionsmodule.c"
        var $33=($31)==($32); //@line 901 "_collectionsmodule.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 901 "_collectionsmodule.c"
      case 7: // $bb6
        var $34=HEAP[__Py_TrueStruct]; //@line 902 "_collectionsmodule.c"
        var $35=($34) + 1; //@line 902 "_collectionsmodule.c"
        HEAP[__Py_TrueStruct]=$35; //@line 902 "_collectionsmodule.c"
        $0=__Py_TrueStruct; //@line 902 "_collectionsmodule.c"
        __label__ = 58; break; //@line 902 "_collectionsmodule.c"
      case 8: // $bb7
        var $36=$vs; //@line 903 "_collectionsmodule.c"
        var $37=$ws; //@line 903 "_collectionsmodule.c"
        var $38=($36)!=($37); //@line 903 "_collectionsmodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 903 "_collectionsmodule.c"
      case 9: // $bb8
        var $39=HEAP[__Py_ZeroStruct]; //@line 904 "_collectionsmodule.c"
        var $40=($39) + 1; //@line 904 "_collectionsmodule.c"
        HEAP[__Py_ZeroStruct]=$40; //@line 904 "_collectionsmodule.c"
        $0=__Py_ZeroStruct; //@line 904 "_collectionsmodule.c"
        __label__ = 58; break; //@line 904 "_collectionsmodule.c"
      case 10: // $bb9thread_pre_split
        var $_pr=$op_addr;
        __lastLabel__ = 10; __label__ = 11; break;
      case 11: // $bb9
        var $41=__lastLabel__ == 10 ? $_pr : ($29);
        var $42=($41)==3; //@line 906 "_collectionsmodule.c"
        if ($42) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 906 "_collectionsmodule.c"
      case 12: // $bb10
        var $43=$v_addr; //@line 907 "_collectionsmodule.c"
        var $44=$w_addr; //@line 907 "_collectionsmodule.c"
        var $45=($43)==($44); //@line 907 "_collectionsmodule.c"
        if ($45) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 907 "_collectionsmodule.c"
      case 13: // $bb11
        var $46=HEAP[__Py_ZeroStruct]; //@line 908 "_collectionsmodule.c"
        var $47=($46) + 1; //@line 908 "_collectionsmodule.c"
        HEAP[__Py_ZeroStruct]=$47; //@line 908 "_collectionsmodule.c"
        $0=__Py_ZeroStruct; //@line 908 "_collectionsmodule.c"
        __label__ = 58; break; //@line 908 "_collectionsmodule.c"
      case 14: // $bb12
        var $48=$vs; //@line 909 "_collectionsmodule.c"
        var $49=$ws; //@line 909 "_collectionsmodule.c"
        var $50=($48)!=($49); //@line 909 "_collectionsmodule.c"
        if ($50) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 909 "_collectionsmodule.c"
      case 15: // $bb13
        var $51=HEAP[__Py_TrueStruct]; //@line 910 "_collectionsmodule.c"
        var $52=($51) + 1; //@line 910 "_collectionsmodule.c"
        HEAP[__Py_TrueStruct]=$52; //@line 910 "_collectionsmodule.c"
        $0=__Py_TrueStruct; //@line 910 "_collectionsmodule.c"
        __label__ = 58; break; //@line 910 "_collectionsmodule.c"
      case 16: // $bb14
        var $53=$v_addr; //@line 914 "_collectionsmodule.c"
        var $54=_PyObject_GetIter($53); //@line 914 "_collectionsmodule.c"
        $it1=$54; //@line 914 "_collectionsmodule.c"
        var $55=($54)==0; //@line 915 "_collectionsmodule.c"
        if ($55) { __label__ = 50; break; } else { __label__ = 17; break; } //@line 915 "_collectionsmodule.c"
      case 17: // $bb15
        var $56=$w_addr; //@line 917 "_collectionsmodule.c"
        var $57=_PyObject_GetIter($56); //@line 917 "_collectionsmodule.c"
        $it2=$57; //@line 917 "_collectionsmodule.c"
        var $58=$it2; //@line 918 "_collectionsmodule.c"
        var $59=($58)==0; //@line 918 "_collectionsmodule.c"
        if ($59) { __label__ = 47; break; } else { __label__ = 18; break; } //@line 918 "_collectionsmodule.c"
      case 18: // $bb16
        var $60=$it1; //@line 921 "_collectionsmodule.c"
        var $61=_PyIter_Next($60); //@line 921 "_collectionsmodule.c"
        $x=$61; //@line 921 "_collectionsmodule.c"
        var $62=($61)==0; //@line 922 "_collectionsmodule.c"
        if ($62) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 922 "_collectionsmodule.c"
      case 19: // $bb17
        var $63=_PyErr_Occurred(); //@line 922 "_collectionsmodule.c"
        var $64=($63)!=0; //@line 922 "_collectionsmodule.c"
        if ($64) { __label__ = 47; break; } else { __label__ = 20; break; } //@line 922 "_collectionsmodule.c"
      case 20: // $bb18
        var $65=$it2; //@line 924 "_collectionsmodule.c"
        var $66=_PyIter_Next($65); //@line 924 "_collectionsmodule.c"
        $y=$66; //@line 924 "_collectionsmodule.c"
        var $67=$x; //@line 925 "_collectionsmodule.c"
        var $68=($67)==0; //@line 925 "_collectionsmodule.c"
        if ($68) { __lastLabel__ = 20; __label__ = 36; break; } else { __lastLabel__ = 20; __label__ = 21; break; } //@line 925 "_collectionsmodule.c"
      case 21: // $bb19
        var $69=$y; //@line 925 "_collectionsmodule.c"
        var $70=($69)==0; //@line 925 "_collectionsmodule.c"
        var $_pr1=$x;
        if ($70) { __label__ = 32; break; } else { __label__ = 22; break; } //@line 925 "_collectionsmodule.c"
      case 22: // $bb20
        var $71=$y; //@line 927 "_collectionsmodule.c"
        var $72=_PyObject_RichCompareBool($_pr1, $71, 2); //@line 927 "_collectionsmodule.c"
        $b=$72; //@line 927 "_collectionsmodule.c"
        var $73=$b; //@line 928 "_collectionsmodule.c"
        var $74=($73)==0; //@line 928 "_collectionsmodule.c"
        var $75=$x; //@line 929 "_collectionsmodule.c"
        if ($74) { __label__ = 23; break; } else { __label__ = 27; break; } //@line 928 "_collectionsmodule.c"
      case 23: // $bb21
        var $76=$y; //@line 929 "_collectionsmodule.c"
        var $77=$op_addr; //@line 929 "_collectionsmodule.c"
        var $78=_PyObject_RichCompareBool($75, $76, $77); //@line 929 "_collectionsmodule.c"
        $cmp=$78; //@line 929 "_collectionsmodule.c"
        var $79=$x; //@line 930 "_collectionsmodule.c"
        var $80=$79; //@line 930 "_collectionsmodule.c"
        var $81=HEAP[$80]; //@line 930 "_collectionsmodule.c"
        var $82=($81) - 1; //@line 930 "_collectionsmodule.c"
        var $83=$x; //@line 930 "_collectionsmodule.c"
        var $84=$83; //@line 930 "_collectionsmodule.c"
        HEAP[$84]=$82; //@line 930 "_collectionsmodule.c"
        var $85=$x; //@line 930 "_collectionsmodule.c"
        var $86=$85; //@line 930 "_collectionsmodule.c"
        var $87=HEAP[$86]; //@line 930 "_collectionsmodule.c"
        var $88=($87)==0; //@line 930 "_collectionsmodule.c"
        if ($88) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 930 "_collectionsmodule.c"
      case 24: // $bb22
        var $89=$x; //@line 930 "_collectionsmodule.c"
        var $90=$89+4; //@line 930 "_collectionsmodule.c"
        var $91=HEAP[$90]; //@line 930 "_collectionsmodule.c"
        var $92=$91+24; //@line 930 "_collectionsmodule.c"
        var $93=HEAP[$92]; //@line 930 "_collectionsmodule.c"
        var $94=$x; //@line 930 "_collectionsmodule.c"
        FUNCTION_TABLE[$93]($94); //@line 930 "_collectionsmodule.c"
        __label__ = 25; break; //@line 930 "_collectionsmodule.c"
      case 25: // $bb23
        var $95=$y; //@line 931 "_collectionsmodule.c"
        var $96=$95; //@line 931 "_collectionsmodule.c"
        var $97=HEAP[$96]; //@line 931 "_collectionsmodule.c"
        var $98=($97) - 1; //@line 931 "_collectionsmodule.c"
        var $99=$y; //@line 931 "_collectionsmodule.c"
        var $100=$99; //@line 931 "_collectionsmodule.c"
        HEAP[$100]=$98; //@line 931 "_collectionsmodule.c"
        var $101=$y; //@line 931 "_collectionsmodule.c"
        var $102=$101; //@line 931 "_collectionsmodule.c"
        var $103=HEAP[$102]; //@line 931 "_collectionsmodule.c"
        var $104=($103)==0; //@line 931 "_collectionsmodule.c"
        if ($104) { __label__ = 26; break; } else { __label__ = 47; break; } //@line 931 "_collectionsmodule.c"
      case 26: // $bb24
        var $105=$y; //@line 931 "_collectionsmodule.c"
        var $106=$105+4; //@line 931 "_collectionsmodule.c"
        var $107=HEAP[$106]; //@line 931 "_collectionsmodule.c"
        var $108=$107+24; //@line 931 "_collectionsmodule.c"
        var $109=HEAP[$108]; //@line 931 "_collectionsmodule.c"
        var $110=$y; //@line 931 "_collectionsmodule.c"
        FUNCTION_TABLE[$109]($110); //@line 931 "_collectionsmodule.c"
        __label__ = 47; break; //@line 931 "_collectionsmodule.c"
      case 27: // $bb26
        var $111=$75; //@line 934 "_collectionsmodule.c"
        var $112=HEAP[$111]; //@line 934 "_collectionsmodule.c"
        var $113=($112) - 1; //@line 934 "_collectionsmodule.c"
        var $114=$x; //@line 934 "_collectionsmodule.c"
        var $115=$114; //@line 934 "_collectionsmodule.c"
        HEAP[$115]=$113; //@line 934 "_collectionsmodule.c"
        var $116=$x; //@line 934 "_collectionsmodule.c"
        var $117=$116; //@line 934 "_collectionsmodule.c"
        var $118=HEAP[$117]; //@line 934 "_collectionsmodule.c"
        var $119=($118)==0; //@line 934 "_collectionsmodule.c"
        if ($119) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 934 "_collectionsmodule.c"
      case 28: // $bb27
        var $120=$x; //@line 934 "_collectionsmodule.c"
        var $121=$120+4; //@line 934 "_collectionsmodule.c"
        var $122=HEAP[$121]; //@line 934 "_collectionsmodule.c"
        var $123=$122+24; //@line 934 "_collectionsmodule.c"
        var $124=HEAP[$123]; //@line 934 "_collectionsmodule.c"
        var $125=$x; //@line 934 "_collectionsmodule.c"
        FUNCTION_TABLE[$124]($125); //@line 934 "_collectionsmodule.c"
        __label__ = 29; break; //@line 934 "_collectionsmodule.c"
      case 29: // $bb28
        var $126=$y; //@line 935 "_collectionsmodule.c"
        var $127=$126; //@line 935 "_collectionsmodule.c"
        var $128=HEAP[$127]; //@line 935 "_collectionsmodule.c"
        var $129=($128) - 1; //@line 935 "_collectionsmodule.c"
        var $130=$y; //@line 935 "_collectionsmodule.c"
        var $131=$130; //@line 935 "_collectionsmodule.c"
        HEAP[$131]=$129; //@line 935 "_collectionsmodule.c"
        var $132=$y; //@line 935 "_collectionsmodule.c"
        var $133=$132; //@line 935 "_collectionsmodule.c"
        var $134=HEAP[$133]; //@line 935 "_collectionsmodule.c"
        var $135=($134)==0; //@line 935 "_collectionsmodule.c"
        if ($135) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 935 "_collectionsmodule.c"
      case 30: // $bb29
        var $136=$y; //@line 935 "_collectionsmodule.c"
        var $137=$136+4; //@line 935 "_collectionsmodule.c"
        var $138=HEAP[$137]; //@line 935 "_collectionsmodule.c"
        var $139=$138+24; //@line 935 "_collectionsmodule.c"
        var $140=HEAP[$139]; //@line 935 "_collectionsmodule.c"
        var $141=$y; //@line 935 "_collectionsmodule.c"
        FUNCTION_TABLE[$140]($141); //@line 935 "_collectionsmodule.c"
        __label__ = 31; break; //@line 935 "_collectionsmodule.c"
      case 31: // $bb30
        var $142=$b; //@line 936 "_collectionsmodule.c"
        var $143=($142)==-1; //@line 936 "_collectionsmodule.c"
        if ($143) { __label__ = 47; break; } else { __label__ = 18; break; } //@line 936 "_collectionsmodule.c"
      case 32: // $bb32
        var $144=($_pr1)!=0; //@line 940 "_collectionsmodule.c"
        if ($144) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 940 "_collectionsmodule.c"
      case 33: // $bb33
        var $145=$x; //@line 940 "_collectionsmodule.c"
        var $146=$145; //@line 940 "_collectionsmodule.c"
        var $147=HEAP[$146]; //@line 940 "_collectionsmodule.c"
        var $148=($147) - 1; //@line 940 "_collectionsmodule.c"
        var $149=$x; //@line 940 "_collectionsmodule.c"
        var $150=$149; //@line 940 "_collectionsmodule.c"
        HEAP[$150]=$148; //@line 940 "_collectionsmodule.c"
        var $151=$x; //@line 940 "_collectionsmodule.c"
        var $152=$151; //@line 940 "_collectionsmodule.c"
        var $153=HEAP[$152]; //@line 940 "_collectionsmodule.c"
        var $154=($153)==0; //@line 940 "_collectionsmodule.c"
        if ($154) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 940 "_collectionsmodule.c"
      case 34: // $bb34
        var $155=$x; //@line 940 "_collectionsmodule.c"
        var $156=$155+4; //@line 940 "_collectionsmodule.c"
        var $157=HEAP[$156]; //@line 940 "_collectionsmodule.c"
        var $158=$157+24; //@line 940 "_collectionsmodule.c"
        var $159=HEAP[$158]; //@line 940 "_collectionsmodule.c"
        var $160=$x; //@line 940 "_collectionsmodule.c"
        FUNCTION_TABLE[$159]($160); //@line 940 "_collectionsmodule.c"
        __label__ = 35; break; //@line 940 "_collectionsmodule.c"
      case 35: // $bb35thread_pre_split
        var $_pr3=$y;
        __lastLabel__ = 35; __label__ = 36; break;
      case 36: // $bb35
        var $161=__lastLabel__ == 35 ? $_pr3 : ($66);
        var $162=($161)!=0; //@line 941 "_collectionsmodule.c"
        if ($162) { __label__ = 37; break; } else { __label__ = 39; break; } //@line 941 "_collectionsmodule.c"
      case 37: // $bb36
        var $163=$y; //@line 941 "_collectionsmodule.c"
        var $164=$163; //@line 941 "_collectionsmodule.c"
        var $165=HEAP[$164]; //@line 941 "_collectionsmodule.c"
        var $166=($165) - 1; //@line 941 "_collectionsmodule.c"
        var $167=$y; //@line 941 "_collectionsmodule.c"
        var $168=$167; //@line 941 "_collectionsmodule.c"
        HEAP[$168]=$166; //@line 941 "_collectionsmodule.c"
        var $169=$y; //@line 941 "_collectionsmodule.c"
        var $170=$169; //@line 941 "_collectionsmodule.c"
        var $171=HEAP[$170]; //@line 941 "_collectionsmodule.c"
        var $172=($171)==0; //@line 941 "_collectionsmodule.c"
        if ($172) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 941 "_collectionsmodule.c"
      case 38: // $bb37
        var $173=$y; //@line 941 "_collectionsmodule.c"
        var $174=$173+4; //@line 941 "_collectionsmodule.c"
        var $175=HEAP[$174]; //@line 941 "_collectionsmodule.c"
        var $176=$175+24; //@line 941 "_collectionsmodule.c"
        var $177=HEAP[$176]; //@line 941 "_collectionsmodule.c"
        var $178=$y; //@line 941 "_collectionsmodule.c"
        FUNCTION_TABLE[$177]($178); //@line 941 "_collectionsmodule.c"
        __label__ = 39; break; //@line 941 "_collectionsmodule.c"
      case 39: // $bb38
        var $179=_PyErr_Occurred(); //@line 942 "_collectionsmodule.c"
        var $180=($179)!=0; //@line 942 "_collectionsmodule.c"
        if ($180) { __label__ = 47; break; } else { __label__ = 40; break; } //@line 942 "_collectionsmodule.c"
      case 40: // $bb39
        var $181=$op_addr; //@line 944 "_collectionsmodule.c"
        if ($181 == 0) {
          __label__ = 41; break;
        }
        else if ($181 == 1) {
          __label__ = 42; break;
        }
        else if ($181 == 2) {
          __label__ = 43; break;
        }
        else if ($181 == 3) {
          __label__ = 44; break;
        }
        else if ($181 == 4) {
          __label__ = 45; break;
        }
        else if ($181 == 5) {
          __label__ = 46; break;
        }
        else {
        __label__ = 47; break;
        }
        
      case 41: // $bb40
        var $182=$y; //@line 945 "_collectionsmodule.c"
        var $183=($182)!=0; //@line 945 "_collectionsmodule.c"
        var $184=($183); //@line 945 "_collectionsmodule.c"
        $cmp=$184; //@line 945 "_collectionsmodule.c"
        __label__ = 47; break; //@line 945 "_collectionsmodule.c"
      case 42: // $bb41
        var $185=$x; //@line 946 "_collectionsmodule.c"
        var $186=($185)==0; //@line 946 "_collectionsmodule.c"
        var $187=($186); //@line 946 "_collectionsmodule.c"
        $cmp=$187; //@line 946 "_collectionsmodule.c"
        __label__ = 47; break; //@line 946 "_collectionsmodule.c"
      case 43: // $bb42
        var $188=$x; //@line 947 "_collectionsmodule.c"
        var $189=$y; //@line 947 "_collectionsmodule.c"
        var $190=($188)==($189); //@line 947 "_collectionsmodule.c"
        var $191=($190); //@line 947 "_collectionsmodule.c"
        $cmp=$191; //@line 947 "_collectionsmodule.c"
        __label__ = 47; break; //@line 947 "_collectionsmodule.c"
      case 44: // $bb43
        var $192=$x; //@line 948 "_collectionsmodule.c"
        var $193=$y; //@line 948 "_collectionsmodule.c"
        var $194=($192)!=($193); //@line 948 "_collectionsmodule.c"
        var $195=($194); //@line 948 "_collectionsmodule.c"
        $cmp=$195; //@line 948 "_collectionsmodule.c"
        __label__ = 47; break; //@line 948 "_collectionsmodule.c"
      case 45: // $bb44
        var $196=$x; //@line 949 "_collectionsmodule.c"
        var $197=($196)!=0; //@line 949 "_collectionsmodule.c"
        var $198=($197); //@line 949 "_collectionsmodule.c"
        $cmp=$198; //@line 949 "_collectionsmodule.c"
        __label__ = 47; break; //@line 949 "_collectionsmodule.c"
      case 46: // $bb45
        var $199=$y; //@line 950 "_collectionsmodule.c"
        var $200=($199)==0; //@line 950 "_collectionsmodule.c"
        var $201=($200); //@line 950 "_collectionsmodule.c"
        $cmp=$201; //@line 950 "_collectionsmodule.c"
        __label__ = 47; break; //@line 953 "_collectionsmodule.c"
      case 47: // $done
        var $_pr2=$it1;
        var $202=($_pr2)!=0; //@line 954 "_collectionsmodule.c"
        if ($202) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 954 "_collectionsmodule.c"
      case 48: // $bb46
        var $203=$it1; //@line 954 "_collectionsmodule.c"
        var $204=$203; //@line 954 "_collectionsmodule.c"
        var $205=HEAP[$204]; //@line 954 "_collectionsmodule.c"
        var $206=($205) - 1; //@line 954 "_collectionsmodule.c"
        var $207=$it1; //@line 954 "_collectionsmodule.c"
        var $208=$207; //@line 954 "_collectionsmodule.c"
        HEAP[$208]=$206; //@line 954 "_collectionsmodule.c"
        var $209=$it1; //@line 954 "_collectionsmodule.c"
        var $210=$209; //@line 954 "_collectionsmodule.c"
        var $211=HEAP[$210]; //@line 954 "_collectionsmodule.c"
        var $212=($211)==0; //@line 954 "_collectionsmodule.c"
        if ($212) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 954 "_collectionsmodule.c"
      case 49: // $bb47
        var $213=$it1; //@line 954 "_collectionsmodule.c"
        var $214=$213+4; //@line 954 "_collectionsmodule.c"
        var $215=HEAP[$214]; //@line 954 "_collectionsmodule.c"
        var $216=$215+24; //@line 954 "_collectionsmodule.c"
        var $217=HEAP[$216]; //@line 954 "_collectionsmodule.c"
        var $218=$it1; //@line 954 "_collectionsmodule.c"
        FUNCTION_TABLE[$217]($218); //@line 954 "_collectionsmodule.c"
        __label__ = 50; break; //@line 954 "_collectionsmodule.c"
      case 50: // $bb48
        var $219=$it2; //@line 955 "_collectionsmodule.c"
        var $220=($219)!=0; //@line 955 "_collectionsmodule.c"
        if ($220) { __label__ = 51; break; } else { __label__ = 53; break; } //@line 955 "_collectionsmodule.c"
      case 51: // $bb49
        var $221=$it2; //@line 955 "_collectionsmodule.c"
        var $222=$221; //@line 955 "_collectionsmodule.c"
        var $223=HEAP[$222]; //@line 955 "_collectionsmodule.c"
        var $224=($223) - 1; //@line 955 "_collectionsmodule.c"
        var $225=$it2; //@line 955 "_collectionsmodule.c"
        var $226=$225; //@line 955 "_collectionsmodule.c"
        HEAP[$226]=$224; //@line 955 "_collectionsmodule.c"
        var $227=$it2; //@line 955 "_collectionsmodule.c"
        var $228=$227; //@line 955 "_collectionsmodule.c"
        var $229=HEAP[$228]; //@line 955 "_collectionsmodule.c"
        var $230=($229)==0; //@line 955 "_collectionsmodule.c"
        if ($230) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 955 "_collectionsmodule.c"
      case 52: // $bb50
        var $231=$it2; //@line 955 "_collectionsmodule.c"
        var $232=$231+4; //@line 955 "_collectionsmodule.c"
        var $233=HEAP[$232]; //@line 955 "_collectionsmodule.c"
        var $234=$233+24; //@line 955 "_collectionsmodule.c"
        var $235=HEAP[$234]; //@line 955 "_collectionsmodule.c"
        var $236=$it2; //@line 955 "_collectionsmodule.c"
        FUNCTION_TABLE[$235]($236); //@line 955 "_collectionsmodule.c"
        __label__ = 53; break; //@line 955 "_collectionsmodule.c"
      case 53: // $bb51
        var $237=$cmp; //@line 956 "_collectionsmodule.c"
        var $238=($237)==1; //@line 956 "_collectionsmodule.c"
        if ($238) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 956 "_collectionsmodule.c"
      case 54: // $bb52
        var $239=HEAP[__Py_TrueStruct]; //@line 957 "_collectionsmodule.c"
        var $240=($239) + 1; //@line 957 "_collectionsmodule.c"
        HEAP[__Py_TrueStruct]=$240; //@line 957 "_collectionsmodule.c"
        $0=__Py_TrueStruct; //@line 957 "_collectionsmodule.c"
        __label__ = 58; break; //@line 957 "_collectionsmodule.c"
      case 55: // $bb53
        var $241=$cmp; //@line 958 "_collectionsmodule.c"
        var $242=($241)==0; //@line 958 "_collectionsmodule.c"
        if ($242) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 958 "_collectionsmodule.c"
      case 56: // $bb54
        var $243=HEAP[__Py_ZeroStruct]; //@line 959 "_collectionsmodule.c"
        var $244=($243) + 1; //@line 959 "_collectionsmodule.c"
        HEAP[__Py_ZeroStruct]=$244; //@line 959 "_collectionsmodule.c"
        $0=__Py_ZeroStruct; //@line 959 "_collectionsmodule.c"
        __label__ = 58; break; //@line 959 "_collectionsmodule.c"
      case 57: // $bb55
        $0=0; //@line 960 "_collectionsmodule.c"
        __label__ = 58; break; //@line 960 "_collectionsmodule.c"
      case 58: // $bb56
        var $245=$0; //@line 894 "_collectionsmodule.c"
        $retval=$245; //@line 894 "_collectionsmodule.c"
        var $retval57=$retval; //@line 894 "_collectionsmodule.c"
        ;
        return $retval57; //@line 894 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_init($deque, $args, $kwdargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $args_addr;
        var $kwdargs_addr;
        var $retval;
        var $0;
        var $iterable=__stackBase__;
        var $maxlenobj=__stackBase__+4;
        var $maxlen;
        var $kwlist=__stackBase__+8;
        var $rv;
        $deque_addr=$deque;
        $args_addr=$args;
        $kwdargs_addr=$kwdargs;
        HEAP[$iterable]=0; //@line 966 "_collectionsmodule.c"
        HEAP[$maxlenobj]=0; //@line 967 "_collectionsmodule.c"
        $maxlen=-1; //@line 968 "_collectionsmodule.c"
        var $1=$kwlist; //@line 969 "_collectionsmodule.c"
        HEAP[$1]=__str37; //@line 969 "_collectionsmodule.c"
        var $2=$kwlist+4; //@line 969 "_collectionsmodule.c"
        HEAP[$2]=__str38; //@line 969 "_collectionsmodule.c"
        var $3=$kwlist+8; //@line 969 "_collectionsmodule.c"
        HEAP[$3]=0; //@line 969 "_collectionsmodule.c"
        var $4=$args_addr; //@line 971 "_collectionsmodule.c"
        var $5=$kwdargs_addr; //@line 971 "_collectionsmodule.c"
        var $kwlist1=$kwlist; //@line 971 "_collectionsmodule.c"
        var $6=_PyArg_ParseTupleAndKeywords($4, $5, __str39, $kwlist1, allocate([$iterable,0,0,0,$maxlenobj,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 971 "_collectionsmodule.c"
        var $7=($6)==0; //@line 971 "_collectionsmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 971 "_collectionsmodule.c"
      case 1: // $bb
        $0=-1; //@line 972 "_collectionsmodule.c"
        __label__ = 15; break; //@line 972 "_collectionsmodule.c"
      case 2: // $bb2
        var $8=HEAP[$maxlenobj]; //@line 973 "_collectionsmodule.c"
        var $9=($8)!=0; //@line 973 "_collectionsmodule.c"
        var $10=HEAP[$maxlenobj]; //@line 973 "_collectionsmodule.c"
        var $11=($10)!=(__Py_NoneStruct); //@line 973 "_collectionsmodule.c"
        var $or_cond=($9) & ($11);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 973 "_collectionsmodule.c"
      case 3: // $bb4
        var $12=HEAP[$maxlenobj]; //@line 974 "_collectionsmodule.c"
        var $13=_PyInt_AsSsize_t($12); //@line 974 "_collectionsmodule.c"
        $maxlen=$13; //@line 974 "_collectionsmodule.c"
        var $14=$maxlen; //@line 975 "_collectionsmodule.c"
        var $15=($14)==-1; //@line 975 "_collectionsmodule.c"
        if ($15) { __lastLabel__ = 3; __label__ = 4; break; } else { __lastLabel__ = 3; __label__ = 7; break; } //@line 975 "_collectionsmodule.c"
      case 4: // $bb5
        var $16=_PyErr_Occurred(); //@line 975 "_collectionsmodule.c"
        var $17=($16)!=0; //@line 975 "_collectionsmodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 975 "_collectionsmodule.c"
      case 5: // $bb6
        $0=-1; //@line 976 "_collectionsmodule.c"
        __label__ = 15; break; //@line 976 "_collectionsmodule.c"
      case 6: // $bb7thread_pre_split
        var $_pr=$maxlen;
        __lastLabel__ = 6; __label__ = 7; break;
      case 7: // $bb7
        var $18=__lastLabel__ == 6 ? $_pr : ($14);
        var $19=($18) < 0; //@line 977 "_collectionsmodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 977 "_collectionsmodule.c"
      case 8: // $bb8
        var $20=HEAP[_PyExc_ValueError]; //@line 978 "_collectionsmodule.c"
        _PyErr_SetString($20, __str40); //@line 978 "_collectionsmodule.c"
        $0=-1; //@line 979 "_collectionsmodule.c"
        __label__ = 15; break; //@line 979 "_collectionsmodule.c"
      case 9: // $bb9
        var $21=$deque_addr; //@line 982 "_collectionsmodule.c"
        var $22=$21+28; //@line 982 "_collectionsmodule.c"
        var $23=$maxlen; //@line 982 "_collectionsmodule.c"
        HEAP[$22]=$23; //@line 982 "_collectionsmodule.c"
        var $24=$deque_addr; //@line 983 "_collectionsmodule.c"
        var $25=_deque_clear($24); //@line 983 "_collectionsmodule.c"
        var $26=HEAP[$iterable]; //@line 984 "_collectionsmodule.c"
        var $27=($26)!=0; //@line 984 "_collectionsmodule.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 984 "_collectionsmodule.c"
      case 10: // $bb10
        var $28=HEAP[$iterable]; //@line 985 "_collectionsmodule.c"
        var $29=$deque_addr; //@line 985 "_collectionsmodule.c"
        var $30=_deque_extend($29, $28); //@line 985 "_collectionsmodule.c"
        $rv=$30; //@line 985 "_collectionsmodule.c"
        var $31=$rv; //@line 986 "_collectionsmodule.c"
        var $32=($31)==0; //@line 986 "_collectionsmodule.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 986 "_collectionsmodule.c"
      case 11: // $bb11
        $0=-1; //@line 987 "_collectionsmodule.c"
        __label__ = 15; break; //@line 987 "_collectionsmodule.c"
      case 12: // $bb12
        var $33=$rv; //@line 988 "_collectionsmodule.c"
        var $34=$33; //@line 988 "_collectionsmodule.c"
        var $35=HEAP[$34]; //@line 988 "_collectionsmodule.c"
        var $36=($35) - 1; //@line 988 "_collectionsmodule.c"
        var $37=$rv; //@line 988 "_collectionsmodule.c"
        var $38=$37; //@line 988 "_collectionsmodule.c"
        HEAP[$38]=$36; //@line 988 "_collectionsmodule.c"
        var $39=$rv; //@line 988 "_collectionsmodule.c"
        var $40=$39; //@line 988 "_collectionsmodule.c"
        var $41=HEAP[$40]; //@line 988 "_collectionsmodule.c"
        var $42=($41)==0; //@line 988 "_collectionsmodule.c"
        if ($42) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 988 "_collectionsmodule.c"
      case 13: // $bb13
        var $43=$rv; //@line 988 "_collectionsmodule.c"
        var $44=$43+4; //@line 988 "_collectionsmodule.c"
        var $45=HEAP[$44]; //@line 988 "_collectionsmodule.c"
        var $46=$45+24; //@line 988 "_collectionsmodule.c"
        var $47=HEAP[$46]; //@line 988 "_collectionsmodule.c"
        var $48=$rv; //@line 988 "_collectionsmodule.c"
        FUNCTION_TABLE[$47]($48); //@line 988 "_collectionsmodule.c"
        __label__ = 14; break; //@line 988 "_collectionsmodule.c"
      case 14: // $bb14
        $0=0; //@line 990 "_collectionsmodule.c"
        __label__ = 15; break; //@line 990 "_collectionsmodule.c"
      case 15: // $bb15
        var $49=$0; //@line 972 "_collectionsmodule.c"
        $retval=$49; //@line 972 "_collectionsmodule.c"
        var $retval16=$retval; //@line 972 "_collectionsmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 972 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_get_maxlen($deque) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $retval;
        var $0;
        $deque_addr=$deque;
        var $1=$deque_addr; //@line 996 "_collectionsmodule.c"
        var $2=$1+28; //@line 996 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 996 "_collectionsmodule.c"
        var $4=($3)==-1; //@line 996 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 996 "_collectionsmodule.c"
      case 1: // $bb
        var $5=HEAP[__Py_NoneStruct]; //@line 997 "_collectionsmodule.c"
        var $6=($5) + 1; //@line 997 "_collectionsmodule.c"
        HEAP[__Py_NoneStruct]=$6; //@line 997 "_collectionsmodule.c"
        $0=__Py_NoneStruct; //@line 997 "_collectionsmodule.c"
        __label__ = 3; break; //@line 997 "_collectionsmodule.c"
      case 2: // $bb1
        var $7=$deque_addr; //@line 998 "_collectionsmodule.c"
        var $8=$7+28; //@line 998 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 998 "_collectionsmodule.c"
        var $10=_PyInt_FromSsize_t($9); //@line 998 "_collectionsmodule.c"
        $0=$10; //@line 998 "_collectionsmodule.c"
        __label__ = 3; break; //@line 998 "_collectionsmodule.c"
      case 3: // $bb2
        var $11=$0; //@line 997 "_collectionsmodule.c"
        $retval=$11; //@line 997 "_collectionsmodule.c"
        var $retval3=$retval; //@line 997 "_collectionsmodule.c"
        ;
        return $retval3; //@line 997 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _deque_iter($deque) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $retval;
        var $0;
        var $it;
        $deque_addr=$deque;
        var $1=__PyObject_GC_New(_dequeiter_type); //@line 1127 "_collectionsmodule.c"
        var $2=$1; //@line 1127 "_collectionsmodule.c"
        $it=$2; //@line 1127 "_collectionsmodule.c"
        var $3=$it; //@line 1128 "_collectionsmodule.c"
        var $4=($3)==0; //@line 1128 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1128 "_collectionsmodule.c"
      case 1: // $bb
        $0=0; //@line 1129 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1129 "_collectionsmodule.c"
      case 2: // $bb1
        var $5=$deque_addr; //@line 1130 "_collectionsmodule.c"
        var $6=$5+8; //@line 1130 "_collectionsmodule.c"
        var $7=HEAP[$6]; //@line 1130 "_collectionsmodule.c"
        var $8=$it; //@line 1130 "_collectionsmodule.c"
        var $9=$8+12; //@line 1130 "_collectionsmodule.c"
        HEAP[$9]=$7; //@line 1130 "_collectionsmodule.c"
        var $10=$deque_addr; //@line 1131 "_collectionsmodule.c"
        var $11=$10+16; //@line 1131 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 1131 "_collectionsmodule.c"
        var $13=$it; //@line 1131 "_collectionsmodule.c"
        var $14=$13+8; //@line 1131 "_collectionsmodule.c"
        HEAP[$14]=$12; //@line 1131 "_collectionsmodule.c"
        var $15=$deque_addr; //@line 1132 "_collectionsmodule.c"
        var $16=$15; //@line 1132 "_collectionsmodule.c"
        var $17=$16; //@line 1132 "_collectionsmodule.c"
        var $18=HEAP[$17]; //@line 1132 "_collectionsmodule.c"
        var $19=($18) + 1; //@line 1132 "_collectionsmodule.c"
        var $20=$16; //@line 1132 "_collectionsmodule.c"
        HEAP[$20]=$19; //@line 1132 "_collectionsmodule.c"
        var $21=$it; //@line 1133 "_collectionsmodule.c"
        var $22=$21+16; //@line 1133 "_collectionsmodule.c"
        var $23=$deque_addr; //@line 1133 "_collectionsmodule.c"
        HEAP[$22]=$23; //@line 1133 "_collectionsmodule.c"
        var $24=$deque_addr; //@line 1134 "_collectionsmodule.c"
        var $25=$24+32; //@line 1134 "_collectionsmodule.c"
        var $26=HEAP[$25]; //@line 1134 "_collectionsmodule.c"
        var $27=$it; //@line 1134 "_collectionsmodule.c"
        var $28=$27+20; //@line 1134 "_collectionsmodule.c"
        HEAP[$28]=$26; //@line 1134 "_collectionsmodule.c"
        var $29=$deque_addr; //@line 1135 "_collectionsmodule.c"
        var $30=$29+24; //@line 1135 "_collectionsmodule.c"
        var $31=HEAP[$30]; //@line 1135 "_collectionsmodule.c"
        var $32=$it; //@line 1135 "_collectionsmodule.c"
        var $33=$32+24; //@line 1135 "_collectionsmodule.c"
        HEAP[$33]=$31; //@line 1135 "_collectionsmodule.c"
        var $34=$it; //@line 1136 "_collectionsmodule.c"
        var $35=$34; //@line 1136 "_collectionsmodule.c"
        _PyObject_GC_Track($35); //@line 1136 "_collectionsmodule.c"
        var $36=$it; //@line 1137 "_collectionsmodule.c"
        var $37=$36; //@line 1137 "_collectionsmodule.c"
        $0=$37; //@line 1137 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1137 "_collectionsmodule.c"
      case 3: // $bb2
        var $38=$0; //@line 1129 "_collectionsmodule.c"
        $retval=$38; //@line 1129 "_collectionsmodule.c"
        var $retval3=$retval; //@line 1129 "_collectionsmodule.c"
        ;
        return $retval3; //@line 1129 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dequeiter_traverse($dio, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dio_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        $dio_addr=$dio;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$dio_addr; //@line 1143 "_collectionsmodule.c"
        var $2=$1+16; //@line 1143 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 1143 "_collectionsmodule.c"
        var $4=($3)!=0; //@line 1143 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1143 "_collectionsmodule.c"
      case 1: // $bb
        var $5=$dio_addr; //@line 1143 "_collectionsmodule.c"
        var $6=$5+16; //@line 1143 "_collectionsmodule.c"
        var $7=HEAP[$6]; //@line 1143 "_collectionsmodule.c"
        var $8=$7; //@line 1143 "_collectionsmodule.c"
        var $9=$visit_addr; //@line 1143 "_collectionsmodule.c"
        var $10=$arg_addr; //@line 1143 "_collectionsmodule.c"
        var $11=FUNCTION_TABLE[$9]($8, $10); //@line 1143 "_collectionsmodule.c"
        $vret=$11; //@line 1143 "_collectionsmodule.c"
        var $12=$vret; //@line 1143 "_collectionsmodule.c"
        var $13=($12)!=0; //@line 1143 "_collectionsmodule.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1143 "_collectionsmodule.c"
      case 2: // $bb1
        var $14=$vret; //@line 1143 "_collectionsmodule.c"
        $0=$14; //@line 1143 "_collectionsmodule.c"
        __label__ = 4; break; //@line 1143 "_collectionsmodule.c"
      case 3: // $bb2
        $0=0; //@line 1144 "_collectionsmodule.c"
        __label__ = 4; break; //@line 1144 "_collectionsmodule.c"
      case 4: // $bb3
        var $15=$0; //@line 1143 "_collectionsmodule.c"
        $retval=$15; //@line 1143 "_collectionsmodule.c"
        var $retval4=$retval; //@line 1143 "_collectionsmodule.c"
        ;
        return $retval4; //@line 1143 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dequeiter_dealloc($dio) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dio_addr;
        $dio_addr=$dio;
        var $0=$dio_addr; //@line 1150 "_collectionsmodule.c"
        var $1=$0+16; //@line 1150 "_collectionsmodule.c"
        var $2=HEAP[$1]; //@line 1150 "_collectionsmodule.c"
        var $3=($2)!=0; //@line 1150 "_collectionsmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1150 "_collectionsmodule.c"
      case 1: // $bb
        var $4=$dio_addr; //@line 1150 "_collectionsmodule.c"
        var $5=$4+16; //@line 1150 "_collectionsmodule.c"
        var $6=HEAP[$5]; //@line 1150 "_collectionsmodule.c"
        var $7=$6; //@line 1150 "_collectionsmodule.c"
        var $8=$7; //@line 1150 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 1150 "_collectionsmodule.c"
        var $10=($9) - 1; //@line 1150 "_collectionsmodule.c"
        var $11=$7; //@line 1150 "_collectionsmodule.c"
        HEAP[$11]=$10; //@line 1150 "_collectionsmodule.c"
        var $12=$7; //@line 1150 "_collectionsmodule.c"
        var $13=HEAP[$12]; //@line 1150 "_collectionsmodule.c"
        var $14=($13)==0; //@line 1150 "_collectionsmodule.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1150 "_collectionsmodule.c"
      case 2: // $bb1
        var $15=$dio_addr; //@line 1150 "_collectionsmodule.c"
        var $16=$15+16; //@line 1150 "_collectionsmodule.c"
        var $17=HEAP[$16]; //@line 1150 "_collectionsmodule.c"
        var $18=$17; //@line 1150 "_collectionsmodule.c"
        var $19=$18+4; //@line 1150 "_collectionsmodule.c"
        var $20=HEAP[$19]; //@line 1150 "_collectionsmodule.c"
        var $21=$20+24; //@line 1150 "_collectionsmodule.c"
        var $22=HEAP[$21]; //@line 1150 "_collectionsmodule.c"
        var $23=$dio_addr; //@line 1150 "_collectionsmodule.c"
        var $24=$23+16; //@line 1150 "_collectionsmodule.c"
        var $25=HEAP[$24]; //@line 1150 "_collectionsmodule.c"
        var $26=$25; //@line 1150 "_collectionsmodule.c"
        FUNCTION_TABLE[$22]($26); //@line 1150 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1150 "_collectionsmodule.c"
      case 3: // $bb2
        var $27=$dio_addr; //@line 1151 "_collectionsmodule.c"
        var $28=$27; //@line 1151 "_collectionsmodule.c"
        _PyObject_GC_Del($28); //@line 1151 "_collectionsmodule.c"
        ;
        return; //@line 1152 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dequeiter_next($it) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $it_addr;
        var $retval;
        var $0;
        var $item;
        $it_addr=$it;
        var $1=$it_addr; //@line 1159 "_collectionsmodule.c"
        var $2=$1+16; //@line 1159 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 1159 "_collectionsmodule.c"
        var $4=$3+32; //@line 1159 "_collectionsmodule.c"
        var $5=HEAP[$4]; //@line 1159 "_collectionsmodule.c"
        var $6=$it_addr; //@line 1159 "_collectionsmodule.c"
        var $7=$6+20; //@line 1159 "_collectionsmodule.c"
        var $8=HEAP[$7]; //@line 1159 "_collectionsmodule.c"
        var $9=($5)!=($8); //@line 1159 "_collectionsmodule.c"
        var $10=$it_addr; //@line 1160 "_collectionsmodule.c"
        var $11=$10+24; //@line 1160 "_collectionsmodule.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1159 "_collectionsmodule.c"
      case 1: // $bb
        HEAP[$11]=0; //@line 1160 "_collectionsmodule.c"
        var $12=HEAP[_PyExc_RuntimeError]; //@line 1161 "_collectionsmodule.c"
        _PyErr_SetString($12, __str14); //@line 1161 "_collectionsmodule.c"
        $0=0; //@line 1163 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1163 "_collectionsmodule.c"
      case 2: // $bb1
        var $13=HEAP[$11]; //@line 1165 "_collectionsmodule.c"
        var $14=($13)==0; //@line 1165 "_collectionsmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1165 "_collectionsmodule.c"
      case 3: // $bb2
        $0=0; //@line 1166 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1166 "_collectionsmodule.c"
      case 4: // $bb3
        var $15=$it_addr; //@line 1167 "_collectionsmodule.c"
        var $16=$15+12; //@line 1167 "_collectionsmodule.c"
        var $17=HEAP[$16]; //@line 1167 "_collectionsmodule.c"
        var $18=$it_addr; //@line 1167 "_collectionsmodule.c"
        var $19=$18+16; //@line 1167 "_collectionsmodule.c"
        var $20=HEAP[$19]; //@line 1167 "_collectionsmodule.c"
        var $21=$20+12; //@line 1167 "_collectionsmodule.c"
        var $22=HEAP[$21]; //@line 1167 "_collectionsmodule.c"
        var $23=($17)==($22); //@line 1167 "_collectionsmodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1167 "_collectionsmodule.c"
      case 5: // $bb4
        var $24=$it_addr; //@line 1167 "_collectionsmodule.c"
        var $25=$24+8; //@line 1167 "_collectionsmodule.c"
        var $26=HEAP[$25]; //@line 1167 "_collectionsmodule.c"
        var $27=$it_addr; //@line 1167 "_collectionsmodule.c"
        var $28=$27+16; //@line 1167 "_collectionsmodule.c"
        var $29=HEAP[$28]; //@line 1167 "_collectionsmodule.c"
        var $30=$29+20; //@line 1167 "_collectionsmodule.c"
        var $31=HEAP[$30]; //@line 1167 "_collectionsmodule.c"
        var $32=($26) > ($31); //@line 1167 "_collectionsmodule.c"
        if ($32) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1167 "_collectionsmodule.c"
      case 6: // $bb5
        ___assert_fail(__str57, __str3, 1168, ___PRETTY_FUNCTION___9783); //@line 1167 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 1167 "_collectionsmodule.c"
      case 7: // $bb6
        var $33=$it_addr; //@line 1170 "_collectionsmodule.c"
        var $34=$33+12; //@line 1170 "_collectionsmodule.c"
        var $35=HEAP[$34]; //@line 1170 "_collectionsmodule.c"
        var $36=$it_addr; //@line 1170 "_collectionsmodule.c"
        var $37=$36+8; //@line 1170 "_collectionsmodule.c"
        var $38=HEAP[$37]; //@line 1170 "_collectionsmodule.c"
        var $39=$35+8; //@line 1170 "_collectionsmodule.c"
        var $40=$39+$38*4; //@line 1170 "_collectionsmodule.c"
        var $41=HEAP[$40]; //@line 1170 "_collectionsmodule.c"
        $item=$41; //@line 1170 "_collectionsmodule.c"
        var $42=$it_addr; //@line 1171 "_collectionsmodule.c"
        var $43=$42+8; //@line 1171 "_collectionsmodule.c"
        var $44=HEAP[$43]; //@line 1171 "_collectionsmodule.c"
        var $45=($44) + 1; //@line 1171 "_collectionsmodule.c"
        var $46=$it_addr; //@line 1171 "_collectionsmodule.c"
        var $47=$46+8; //@line 1171 "_collectionsmodule.c"
        HEAP[$47]=$45; //@line 1171 "_collectionsmodule.c"
        var $48=$it_addr; //@line 1172 "_collectionsmodule.c"
        var $49=$48+24; //@line 1172 "_collectionsmodule.c"
        var $50=HEAP[$49]; //@line 1172 "_collectionsmodule.c"
        var $51=($50) - 1; //@line 1172 "_collectionsmodule.c"
        var $52=$it_addr; //@line 1172 "_collectionsmodule.c"
        var $53=$52+24; //@line 1172 "_collectionsmodule.c"
        HEAP[$53]=$51; //@line 1172 "_collectionsmodule.c"
        var $54=$it_addr; //@line 1173 "_collectionsmodule.c"
        var $55=$54+8; //@line 1173 "_collectionsmodule.c"
        var $56=HEAP[$55]; //@line 1173 "_collectionsmodule.c"
        var $57=($56)==62; //@line 1173 "_collectionsmodule.c"
        if ($57) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 1173 "_collectionsmodule.c"
      case 8: // $bb7
        var $58=$it_addr; //@line 1173 "_collectionsmodule.c"
        var $59=$58+24; //@line 1173 "_collectionsmodule.c"
        var $60=HEAP[$59]; //@line 1173 "_collectionsmodule.c"
        var $61=($60) > 0; //@line 1173 "_collectionsmodule.c"
        if ($61) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1173 "_collectionsmodule.c"
      case 9: // $bb8
        var $62=$it_addr; //@line 1174 "_collectionsmodule.c"
        var $63=$62+12; //@line 1174 "_collectionsmodule.c"
        var $64=HEAP[$63]; //@line 1174 "_collectionsmodule.c"
        var $65=$64+4; //@line 1174 "_collectionsmodule.c"
        var $66=HEAP[$65]; //@line 1174 "_collectionsmodule.c"
        var $67=($66)==0; //@line 1174 "_collectionsmodule.c"
        if ($67) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1174 "_collectionsmodule.c"
      case 10: // $bb9
        ___assert_fail(__str58, __str3, 1174, ___PRETTY_FUNCTION___9783); //@line 1174 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 1174 "_collectionsmodule.c"
      case 11: // $bb10
        var $68=$it_addr; //@line 1175 "_collectionsmodule.c"
        var $69=$68+12; //@line 1175 "_collectionsmodule.c"
        var $70=HEAP[$69]; //@line 1175 "_collectionsmodule.c"
        var $71=$70+4; //@line 1175 "_collectionsmodule.c"
        var $72=HEAP[$71]; //@line 1175 "_collectionsmodule.c"
        var $73=$it_addr; //@line 1175 "_collectionsmodule.c"
        var $74=$73+12; //@line 1175 "_collectionsmodule.c"
        HEAP[$74]=$72; //@line 1175 "_collectionsmodule.c"
        var $75=$it_addr; //@line 1176 "_collectionsmodule.c"
        var $76=$75+8; //@line 1176 "_collectionsmodule.c"
        HEAP[$76]=0; //@line 1176 "_collectionsmodule.c"
        __label__ = 12; break; //@line 1176 "_collectionsmodule.c"
      case 12: // $bb11
        var $77=$item; //@line 1178 "_collectionsmodule.c"
        var $78=$77; //@line 1178 "_collectionsmodule.c"
        var $79=HEAP[$78]; //@line 1178 "_collectionsmodule.c"
        var $80=($79) + 1; //@line 1178 "_collectionsmodule.c"
        var $81=$item; //@line 1178 "_collectionsmodule.c"
        var $82=$81; //@line 1178 "_collectionsmodule.c"
        HEAP[$82]=$80; //@line 1178 "_collectionsmodule.c"
        var $83=$item; //@line 1179 "_collectionsmodule.c"
        $0=$83; //@line 1179 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1179 "_collectionsmodule.c"
      case 13: // $bb12
        var $84=$0; //@line 1163 "_collectionsmodule.c"
        $retval=$84; //@line 1163 "_collectionsmodule.c"
        var $retval13=$retval; //@line 1163 "_collectionsmodule.c"
        ;
        return $retval13; //@line 1163 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dequeiter_len($it) {
    ;
    var __label__;
  
    var $it_addr;
    var $retval;
    var $0;
    $it_addr=$it;
    var $1=$it_addr; //@line 1185 "_collectionsmodule.c"
    var $2=$1+24; //@line 1185 "_collectionsmodule.c"
    var $3=HEAP[$2]; //@line 1185 "_collectionsmodule.c"
    var $4=_PyInt_FromLong($3); //@line 1185 "_collectionsmodule.c"
    $0=$4; //@line 1185 "_collectionsmodule.c"
    var $5=$0; //@line 1185 "_collectionsmodule.c"
    $retval=$5; //@line 1185 "_collectionsmodule.c"
    var $retval1=$retval; //@line 1185 "_collectionsmodule.c"
    ;
    return $retval1; //@line 1185 "_collectionsmodule.c"
  }
  

  function _deque_reviter($deque) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $deque_addr;
        var $retval;
        var $0;
        var $it;
        $deque_addr=$deque;
        var $1=__PyObject_GC_New(_dequereviter_type); //@line 1237 "_collectionsmodule.c"
        var $2=$1; //@line 1237 "_collectionsmodule.c"
        $it=$2; //@line 1237 "_collectionsmodule.c"
        var $3=$it; //@line 1238 "_collectionsmodule.c"
        var $4=($3)==0; //@line 1238 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1238 "_collectionsmodule.c"
      case 1: // $bb
        $0=0; //@line 1239 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1239 "_collectionsmodule.c"
      case 2: // $bb1
        var $5=$deque_addr; //@line 1240 "_collectionsmodule.c"
        var $6=$5+12; //@line 1240 "_collectionsmodule.c"
        var $7=HEAP[$6]; //@line 1240 "_collectionsmodule.c"
        var $8=$it; //@line 1240 "_collectionsmodule.c"
        var $9=$8+12; //@line 1240 "_collectionsmodule.c"
        HEAP[$9]=$7; //@line 1240 "_collectionsmodule.c"
        var $10=$deque_addr; //@line 1241 "_collectionsmodule.c"
        var $11=$10+20; //@line 1241 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 1241 "_collectionsmodule.c"
        var $13=$it; //@line 1241 "_collectionsmodule.c"
        var $14=$13+8; //@line 1241 "_collectionsmodule.c"
        HEAP[$14]=$12; //@line 1241 "_collectionsmodule.c"
        var $15=$deque_addr; //@line 1242 "_collectionsmodule.c"
        var $16=$15; //@line 1242 "_collectionsmodule.c"
        var $17=$16; //@line 1242 "_collectionsmodule.c"
        var $18=HEAP[$17]; //@line 1242 "_collectionsmodule.c"
        var $19=($18) + 1; //@line 1242 "_collectionsmodule.c"
        var $20=$16; //@line 1242 "_collectionsmodule.c"
        HEAP[$20]=$19; //@line 1242 "_collectionsmodule.c"
        var $21=$it; //@line 1243 "_collectionsmodule.c"
        var $22=$21+16; //@line 1243 "_collectionsmodule.c"
        var $23=$deque_addr; //@line 1243 "_collectionsmodule.c"
        HEAP[$22]=$23; //@line 1243 "_collectionsmodule.c"
        var $24=$deque_addr; //@line 1244 "_collectionsmodule.c"
        var $25=$24+32; //@line 1244 "_collectionsmodule.c"
        var $26=HEAP[$25]; //@line 1244 "_collectionsmodule.c"
        var $27=$it; //@line 1244 "_collectionsmodule.c"
        var $28=$27+20; //@line 1244 "_collectionsmodule.c"
        HEAP[$28]=$26; //@line 1244 "_collectionsmodule.c"
        var $29=$deque_addr; //@line 1245 "_collectionsmodule.c"
        var $30=$29+24; //@line 1245 "_collectionsmodule.c"
        var $31=HEAP[$30]; //@line 1245 "_collectionsmodule.c"
        var $32=$it; //@line 1245 "_collectionsmodule.c"
        var $33=$32+24; //@line 1245 "_collectionsmodule.c"
        HEAP[$33]=$31; //@line 1245 "_collectionsmodule.c"
        var $34=$it; //@line 1246 "_collectionsmodule.c"
        var $35=$34; //@line 1246 "_collectionsmodule.c"
        _PyObject_GC_Track($35); //@line 1246 "_collectionsmodule.c"
        var $36=$it; //@line 1247 "_collectionsmodule.c"
        var $37=$36; //@line 1247 "_collectionsmodule.c"
        $0=$37; //@line 1247 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1247 "_collectionsmodule.c"
      case 3: // $bb2
        var $38=$0; //@line 1239 "_collectionsmodule.c"
        $retval=$38; //@line 1239 "_collectionsmodule.c"
        var $retval3=$retval; //@line 1239 "_collectionsmodule.c"
        ;
        return $retval3; //@line 1239 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dequereviter_next($it) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $it_addr;
        var $retval;
        var $0;
        var $item;
        $it_addr=$it;
        var $1=$it_addr; //@line 1254 "_collectionsmodule.c"
        var $2=$1+24; //@line 1254 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 1254 "_collectionsmodule.c"
        var $4=($3)==0; //@line 1254 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1254 "_collectionsmodule.c"
      case 1: // $bb
        $0=0; //@line 1255 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1255 "_collectionsmodule.c"
      case 2: // $bb1
        var $5=$it_addr; //@line 1257 "_collectionsmodule.c"
        var $6=$5+16; //@line 1257 "_collectionsmodule.c"
        var $7=HEAP[$6]; //@line 1257 "_collectionsmodule.c"
        var $8=$7+32; //@line 1257 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 1257 "_collectionsmodule.c"
        var $10=$it_addr; //@line 1257 "_collectionsmodule.c"
        var $11=$10+20; //@line 1257 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 1257 "_collectionsmodule.c"
        var $13=($9)!=($12); //@line 1257 "_collectionsmodule.c"
        var $14=$it_addr; //@line 1258 "_collectionsmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1257 "_collectionsmodule.c"
      case 3: // $bb2
        var $15=$14+24; //@line 1258 "_collectionsmodule.c"
        HEAP[$15]=0; //@line 1258 "_collectionsmodule.c"
        var $16=HEAP[_PyExc_RuntimeError]; //@line 1259 "_collectionsmodule.c"
        _PyErr_SetString($16, __str14); //@line 1259 "_collectionsmodule.c"
        $0=0; //@line 1261 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1261 "_collectionsmodule.c"
      case 4: // $bb3
        var $17=$14+12; //@line 1263 "_collectionsmodule.c"
        var $18=HEAP[$17]; //@line 1263 "_collectionsmodule.c"
        var $19=$it_addr; //@line 1263 "_collectionsmodule.c"
        var $20=$19+16; //@line 1263 "_collectionsmodule.c"
        var $21=HEAP[$20]; //@line 1263 "_collectionsmodule.c"
        var $22=$21+8; //@line 1263 "_collectionsmodule.c"
        var $23=HEAP[$22]; //@line 1263 "_collectionsmodule.c"
        var $24=($18)==($23); //@line 1263 "_collectionsmodule.c"
        if ($24) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1263 "_collectionsmodule.c"
      case 5: // $bb4
        var $25=$it_addr; //@line 1263 "_collectionsmodule.c"
        var $26=$25+8; //@line 1263 "_collectionsmodule.c"
        var $27=HEAP[$26]; //@line 1263 "_collectionsmodule.c"
        var $28=$it_addr; //@line 1263 "_collectionsmodule.c"
        var $29=$28+16; //@line 1263 "_collectionsmodule.c"
        var $30=HEAP[$29]; //@line 1263 "_collectionsmodule.c"
        var $31=$30+16; //@line 1263 "_collectionsmodule.c"
        var $32=HEAP[$31]; //@line 1263 "_collectionsmodule.c"
        var $33=($27) < ($32); //@line 1263 "_collectionsmodule.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1263 "_collectionsmodule.c"
      case 6: // $bb5
        ___assert_fail(__str61, __str3, 1264, ___PRETTY_FUNCTION___9856); //@line 1263 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 1263 "_collectionsmodule.c"
      case 7: // $bb6
        var $34=$it_addr; //@line 1266 "_collectionsmodule.c"
        var $35=$34+12; //@line 1266 "_collectionsmodule.c"
        var $36=HEAP[$35]; //@line 1266 "_collectionsmodule.c"
        var $37=$it_addr; //@line 1266 "_collectionsmodule.c"
        var $38=$37+8; //@line 1266 "_collectionsmodule.c"
        var $39=HEAP[$38]; //@line 1266 "_collectionsmodule.c"
        var $40=$36+8; //@line 1266 "_collectionsmodule.c"
        var $41=$40+$39*4; //@line 1266 "_collectionsmodule.c"
        var $42=HEAP[$41]; //@line 1266 "_collectionsmodule.c"
        $item=$42; //@line 1266 "_collectionsmodule.c"
        var $43=$it_addr; //@line 1267 "_collectionsmodule.c"
        var $44=$43+8; //@line 1267 "_collectionsmodule.c"
        var $45=HEAP[$44]; //@line 1267 "_collectionsmodule.c"
        var $46=($45) - 1; //@line 1267 "_collectionsmodule.c"
        var $47=$it_addr; //@line 1267 "_collectionsmodule.c"
        var $48=$47+8; //@line 1267 "_collectionsmodule.c"
        HEAP[$48]=$46; //@line 1267 "_collectionsmodule.c"
        var $49=$it_addr; //@line 1268 "_collectionsmodule.c"
        var $50=$49+24; //@line 1268 "_collectionsmodule.c"
        var $51=HEAP[$50]; //@line 1268 "_collectionsmodule.c"
        var $52=($51) - 1; //@line 1268 "_collectionsmodule.c"
        var $53=$it_addr; //@line 1268 "_collectionsmodule.c"
        var $54=$53+24; //@line 1268 "_collectionsmodule.c"
        HEAP[$54]=$52; //@line 1268 "_collectionsmodule.c"
        var $55=$it_addr; //@line 1269 "_collectionsmodule.c"
        var $56=$55+8; //@line 1269 "_collectionsmodule.c"
        var $57=HEAP[$56]; //@line 1269 "_collectionsmodule.c"
        var $58=($57)==-1; //@line 1269 "_collectionsmodule.c"
        if ($58) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 1269 "_collectionsmodule.c"
      case 8: // $bb7
        var $59=$it_addr; //@line 1269 "_collectionsmodule.c"
        var $60=$59+24; //@line 1269 "_collectionsmodule.c"
        var $61=HEAP[$60]; //@line 1269 "_collectionsmodule.c"
        var $62=($61) > 0; //@line 1269 "_collectionsmodule.c"
        if ($62) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1269 "_collectionsmodule.c"
      case 9: // $bb8
        var $63=$it_addr; //@line 1270 "_collectionsmodule.c"
        var $64=$63+12; //@line 1270 "_collectionsmodule.c"
        var $65=HEAP[$64]; //@line 1270 "_collectionsmodule.c"
        var $66=$65; //@line 1270 "_collectionsmodule.c"
        var $67=HEAP[$66]; //@line 1270 "_collectionsmodule.c"
        var $68=($67)==0; //@line 1270 "_collectionsmodule.c"
        if ($68) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1270 "_collectionsmodule.c"
      case 10: // $bb9
        ___assert_fail(__str62, __str3, 1270, ___PRETTY_FUNCTION___9856); //@line 1270 "_collectionsmodule.c"
        throw "Reached an unreachable!" //@line 1270 "_collectionsmodule.c"
      case 11: // $bb10
        var $69=$it_addr; //@line 1271 "_collectionsmodule.c"
        var $70=$69+12; //@line 1271 "_collectionsmodule.c"
        var $71=HEAP[$70]; //@line 1271 "_collectionsmodule.c"
        var $72=$71; //@line 1271 "_collectionsmodule.c"
        var $73=HEAP[$72]; //@line 1271 "_collectionsmodule.c"
        var $74=$it_addr; //@line 1271 "_collectionsmodule.c"
        var $75=$74+12; //@line 1271 "_collectionsmodule.c"
        HEAP[$75]=$73; //@line 1271 "_collectionsmodule.c"
        var $76=$it_addr; //@line 1272 "_collectionsmodule.c"
        var $77=$76+8; //@line 1272 "_collectionsmodule.c"
        HEAP[$77]=61; //@line 1272 "_collectionsmodule.c"
        __label__ = 12; break; //@line 1272 "_collectionsmodule.c"
      case 12: // $bb11
        var $78=$item; //@line 1274 "_collectionsmodule.c"
        var $79=$78; //@line 1274 "_collectionsmodule.c"
        var $80=HEAP[$79]; //@line 1274 "_collectionsmodule.c"
        var $81=($80) + 1; //@line 1274 "_collectionsmodule.c"
        var $82=$item; //@line 1274 "_collectionsmodule.c"
        var $83=$82; //@line 1274 "_collectionsmodule.c"
        HEAP[$83]=$81; //@line 1274 "_collectionsmodule.c"
        var $84=$item; //@line 1275 "_collectionsmodule.c"
        $0=$84; //@line 1275 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1275 "_collectionsmodule.c"
      case 13: // $bb12
        var $85=$0; //@line 1255 "_collectionsmodule.c"
        $retval=$85; //@line 1255 "_collectionsmodule.c"
        var $retval13=$retval; //@line 1255 "_collectionsmodule.c"
        ;
        return $retval13; //@line 1255 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _defdict_missing($dd, $key) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dd_addr;
        var $key_addr;
        var $retval;
        var $0;
        var $factory;
        var $value;
        var $tup;
        $dd_addr=$dd;
        $key_addr=$key;
        var $1=$dd_addr; //@line 1330 "_collectionsmodule.c"
        var $2=$1+124; //@line 1330 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 1330 "_collectionsmodule.c"
        $factory=$3; //@line 1330 "_collectionsmodule.c"
        var $4=$factory; //@line 1332 "_collectionsmodule.c"
        var $5=($4)==0; //@line 1332 "_collectionsmodule.c"
        var $6=$factory; //@line 1332 "_collectionsmodule.c"
        var $7=($6)==(__Py_NoneStruct); //@line 1332 "_collectionsmodule.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 1332 "_collectionsmodule.c"
      case 1: // $bb1
        var $8=$key_addr; //@line 1335 "_collectionsmodule.c"
        var $9=_PyTuple_Pack(1, allocate([$8,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1335 "_collectionsmodule.c"
        $tup=$9; //@line 1335 "_collectionsmodule.c"
        var $10=$tup; //@line 1336 "_collectionsmodule.c"
        var $11=($10)==0; //@line 1336 "_collectionsmodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1336 "_collectionsmodule.c"
      case 2: // $bb2
        $0=0; //@line 1336 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1336 "_collectionsmodule.c"
      case 3: // $bb3
        var $12=HEAP[_PyExc_KeyError]; //@line 1337 "_collectionsmodule.c"
        var $13=$tup; //@line 1337 "_collectionsmodule.c"
        _PyErr_SetObject($12, $13); //@line 1337 "_collectionsmodule.c"
        var $14=$tup; //@line 1338 "_collectionsmodule.c"
        var $15=$14; //@line 1338 "_collectionsmodule.c"
        var $16=HEAP[$15]; //@line 1338 "_collectionsmodule.c"
        var $17=($16) - 1; //@line 1338 "_collectionsmodule.c"
        var $18=$tup; //@line 1338 "_collectionsmodule.c"
        var $19=$18; //@line 1338 "_collectionsmodule.c"
        HEAP[$19]=$17; //@line 1338 "_collectionsmodule.c"
        var $20=$tup; //@line 1338 "_collectionsmodule.c"
        var $21=$20; //@line 1338 "_collectionsmodule.c"
        var $22=HEAP[$21]; //@line 1338 "_collectionsmodule.c"
        var $23=($22)==0; //@line 1338 "_collectionsmodule.c"
        if ($23) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1338 "_collectionsmodule.c"
      case 4: // $bb4
        var $24=$tup; //@line 1338 "_collectionsmodule.c"
        var $25=$24+4; //@line 1338 "_collectionsmodule.c"
        var $26=HEAP[$25]; //@line 1338 "_collectionsmodule.c"
        var $27=$26+24; //@line 1338 "_collectionsmodule.c"
        var $28=HEAP[$27]; //@line 1338 "_collectionsmodule.c"
        var $29=$tup; //@line 1338 "_collectionsmodule.c"
        FUNCTION_TABLE[$28]($29); //@line 1338 "_collectionsmodule.c"
        __label__ = 5; break; //@line 1338 "_collectionsmodule.c"
      case 5: // $bb5
        $0=0; //@line 1339 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1339 "_collectionsmodule.c"
      case 6: // $bb6
        var $30=$factory; //@line 1341 "_collectionsmodule.c"
        var $31=_PyEval_CallObjectWithKeywords($30, 0, 0); //@line 1341 "_collectionsmodule.c"
        $value=$31; //@line 1341 "_collectionsmodule.c"
        var $32=$value; //@line 1342 "_collectionsmodule.c"
        var $33=($32)==0; //@line 1342 "_collectionsmodule.c"
        if ($33) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1342 "_collectionsmodule.c"
      case 7: // $bb7
        var $34=$value; //@line 1343 "_collectionsmodule.c"
        $0=$34; //@line 1343 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1343 "_collectionsmodule.c"
      case 8: // $bb8
        var $35=$dd_addr; //@line 1344 "_collectionsmodule.c"
        var $36=$35; //@line 1344 "_collectionsmodule.c"
        var $37=$key_addr; //@line 1344 "_collectionsmodule.c"
        var $38=$value; //@line 1344 "_collectionsmodule.c"
        var $39=_PyObject_SetItem($36, $37, $38); //@line 1344 "_collectionsmodule.c"
        var $40=($39) < 0; //@line 1344 "_collectionsmodule.c"
        var $41=$value; //@line 1345 "_collectionsmodule.c"
        if ($40) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1344 "_collectionsmodule.c"
      case 9: // $bb9
        var $42=$41; //@line 1345 "_collectionsmodule.c"
        var $43=HEAP[$42]; //@line 1345 "_collectionsmodule.c"
        var $44=($43) - 1; //@line 1345 "_collectionsmodule.c"
        var $45=$value; //@line 1345 "_collectionsmodule.c"
        var $46=$45; //@line 1345 "_collectionsmodule.c"
        HEAP[$46]=$44; //@line 1345 "_collectionsmodule.c"
        var $47=$value; //@line 1345 "_collectionsmodule.c"
        var $48=$47; //@line 1345 "_collectionsmodule.c"
        var $49=HEAP[$48]; //@line 1345 "_collectionsmodule.c"
        var $50=($49)==0; //@line 1345 "_collectionsmodule.c"
        if ($50) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1345 "_collectionsmodule.c"
      case 10: // $bb10
        var $51=$value; //@line 1345 "_collectionsmodule.c"
        var $52=$51+4; //@line 1345 "_collectionsmodule.c"
        var $53=HEAP[$52]; //@line 1345 "_collectionsmodule.c"
        var $54=$53+24; //@line 1345 "_collectionsmodule.c"
        var $55=HEAP[$54]; //@line 1345 "_collectionsmodule.c"
        var $56=$value; //@line 1345 "_collectionsmodule.c"
        FUNCTION_TABLE[$55]($56); //@line 1345 "_collectionsmodule.c"
        __label__ = 11; break; //@line 1345 "_collectionsmodule.c"
      case 11: // $bb11
        $0=0; //@line 1346 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1346 "_collectionsmodule.c"
      case 12: // $bb12
        $0=$41; //@line 1348 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1348 "_collectionsmodule.c"
      case 13: // $bb13
        var $57=$0; //@line 1336 "_collectionsmodule.c"
        $retval=$57; //@line 1336 "_collectionsmodule.c"
        var $retval14=$retval; //@line 1336 "_collectionsmodule.c"
        ;
        return $retval14; //@line 1336 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _defdict_copy($dd) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dd_addr;
        var $retval;
        var $0;
        $dd_addr=$dd;
        var $1=$dd_addr; //@line 1361 "_collectionsmodule.c"
        var $2=$1+124; //@line 1361 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 1361 "_collectionsmodule.c"
        var $4=($3)==0; //@line 1361 "_collectionsmodule.c"
        var $5=$dd_addr; //@line 1362 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1361 "_collectionsmodule.c"
      case 1: // $bb
        var $6=$5; //@line 1362 "_collectionsmodule.c"
        var $7=$6+4; //@line 1362 "_collectionsmodule.c"
        var $8=HEAP[$7]; //@line 1362 "_collectionsmodule.c"
        var $9=$8; //@line 1362 "_collectionsmodule.c"
        var $10=$dd_addr; //@line 1362 "_collectionsmodule.c"
        var $11=_PyObject_CallFunctionObjArgs($9, allocate([__Py_NoneStruct,0,0,0,$10,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.defdictobject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1362 "_collectionsmodule.c"
        $0=$11; //@line 1362 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1362 "_collectionsmodule.c"
      case 2: // $bb1
        var $12=$5+124; //@line 1363 "_collectionsmodule.c"
        var $13=HEAP[$12]; //@line 1363 "_collectionsmodule.c"
        var $14=$dd_addr; //@line 1363 "_collectionsmodule.c"
        var $15=$14; //@line 1363 "_collectionsmodule.c"
        var $16=$15+4; //@line 1363 "_collectionsmodule.c"
        var $17=HEAP[$16]; //@line 1363 "_collectionsmodule.c"
        var $18=$17; //@line 1363 "_collectionsmodule.c"
        var $19=$dd_addr; //@line 1363 "_collectionsmodule.c"
        var $20=_PyObject_CallFunctionObjArgs($18, allocate([$13,0,0,0,$19,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.defdictobject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1363 "_collectionsmodule.c"
        $0=$20; //@line 1363 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1363 "_collectionsmodule.c"
      case 3: // $bb2
        var $21=$0; //@line 1362 "_collectionsmodule.c"
        $retval=$21; //@line 1362 "_collectionsmodule.c"
        var $retval3=$retval; //@line 1362 "_collectionsmodule.c"
        ;
        return $retval3; //@line 1362 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _defdict_reduce($dd) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dd_addr;
        var $retval;
        var $0;
        var $args;
        var $items;
        var $result;
        $dd_addr=$dd;
        var $1=$dd_addr; //@line 1395 "_collectionsmodule.c"
        var $2=$1+124; //@line 1395 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 1395 "_collectionsmodule.c"
        var $4=($3)==0; //@line 1395 "_collectionsmodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1395 "_collectionsmodule.c"
      case 1: // $bb
        var $5=$dd_addr; //@line 1395 "_collectionsmodule.c"
        var $6=$5+124; //@line 1395 "_collectionsmodule.c"
        var $7=HEAP[$6]; //@line 1395 "_collectionsmodule.c"
        var $8=($7)==(__Py_NoneStruct); //@line 1395 "_collectionsmodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1395 "_collectionsmodule.c"
      case 2: // $bb1
        var $9=_PyTuple_New(0); //@line 1396 "_collectionsmodule.c"
        $args=$9; //@line 1396 "_collectionsmodule.c"
        __lastLabel__ = 2; __label__ = 4; break; //@line 1396 "_collectionsmodule.c"
      case 3: // $bb2
        var $10=$dd_addr; //@line 1398 "_collectionsmodule.c"
        var $11=$10+124; //@line 1398 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 1398 "_collectionsmodule.c"
        var $13=_PyTuple_Pack(1, allocate([$12,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1398 "_collectionsmodule.c"
        $args=$13; //@line 1398 "_collectionsmodule.c"
        __lastLabel__ = 3; __label__ = 4; break; //@line 1398 "_collectionsmodule.c"
      case 4: // $bb3
        var $14=__lastLabel__ == 3 ? $13 : ($9);
        var $15=($14)==0; //@line 1399 "_collectionsmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1399 "_collectionsmodule.c"
      case 5: // $bb4
        $0=0; //@line 1400 "_collectionsmodule.c"
        __label__ = 15; break; //@line 1400 "_collectionsmodule.c"
      case 6: // $bb5
        var $16=$dd_addr; //@line 1401 "_collectionsmodule.c"
        var $17=$16; //@line 1401 "_collectionsmodule.c"
        var $18=_PyObject_CallMethod($17, __str64, __str65, allocate(1, "i32", ALLOC_STACK)); //@line 1401 "_collectionsmodule.c"
        $items=$18; //@line 1401 "_collectionsmodule.c"
        var $19=$items; //@line 1402 "_collectionsmodule.c"
        var $20=($19)==0; //@line 1402 "_collectionsmodule.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 1402 "_collectionsmodule.c"
      case 7: // $bb6
        var $21=$args; //@line 1403 "_collectionsmodule.c"
        var $22=$21; //@line 1403 "_collectionsmodule.c"
        var $23=HEAP[$22]; //@line 1403 "_collectionsmodule.c"
        var $24=($23) - 1; //@line 1403 "_collectionsmodule.c"
        var $25=$args; //@line 1403 "_collectionsmodule.c"
        var $26=$25; //@line 1403 "_collectionsmodule.c"
        HEAP[$26]=$24; //@line 1403 "_collectionsmodule.c"
        var $27=$args; //@line 1403 "_collectionsmodule.c"
        var $28=$27; //@line 1403 "_collectionsmodule.c"
        var $29=HEAP[$28]; //@line 1403 "_collectionsmodule.c"
        var $30=($29)==0; //@line 1403 "_collectionsmodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1403 "_collectionsmodule.c"
      case 8: // $bb7
        var $31=$args; //@line 1403 "_collectionsmodule.c"
        var $32=$31+4; //@line 1403 "_collectionsmodule.c"
        var $33=HEAP[$32]; //@line 1403 "_collectionsmodule.c"
        var $34=$33+24; //@line 1403 "_collectionsmodule.c"
        var $35=HEAP[$34]; //@line 1403 "_collectionsmodule.c"
        var $36=$args; //@line 1403 "_collectionsmodule.c"
        FUNCTION_TABLE[$35]($36); //@line 1403 "_collectionsmodule.c"
        __label__ = 9; break; //@line 1403 "_collectionsmodule.c"
      case 9: // $bb8
        $0=0; //@line 1404 "_collectionsmodule.c"
        __label__ = 15; break; //@line 1404 "_collectionsmodule.c"
      case 10: // $bb9
        var $37=$dd_addr; //@line 1406 "_collectionsmodule.c"
        var $38=$37; //@line 1406 "_collectionsmodule.c"
        var $39=$38+4; //@line 1406 "_collectionsmodule.c"
        var $40=HEAP[$39]; //@line 1406 "_collectionsmodule.c"
        var $41=$args; //@line 1406 "_collectionsmodule.c"
        var $42=$items; //@line 1406 "_collectionsmodule.c"
        var $43=_PyTuple_Pack(5, allocate([$40,0,0,0,$41,0,0,0,__Py_NoneStruct,0,0,0,__Py_NoneStruct,0,0,0,$42,0,0,0], ["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1406 "_collectionsmodule.c"
        $result=$43; //@line 1406 "_collectionsmodule.c"
        var $44=$items; //@line 1408 "_collectionsmodule.c"
        var $45=$44; //@line 1408 "_collectionsmodule.c"
        var $46=HEAP[$45]; //@line 1408 "_collectionsmodule.c"
        var $47=($46) - 1; //@line 1408 "_collectionsmodule.c"
        var $48=$items; //@line 1408 "_collectionsmodule.c"
        var $49=$48; //@line 1408 "_collectionsmodule.c"
        HEAP[$49]=$47; //@line 1408 "_collectionsmodule.c"
        var $50=$items; //@line 1408 "_collectionsmodule.c"
        var $51=$50; //@line 1408 "_collectionsmodule.c"
        var $52=HEAP[$51]; //@line 1408 "_collectionsmodule.c"
        var $53=($52)==0; //@line 1408 "_collectionsmodule.c"
        if ($53) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1408 "_collectionsmodule.c"
      case 11: // $bb10
        var $54=$items; //@line 1408 "_collectionsmodule.c"
        var $55=$54+4; //@line 1408 "_collectionsmodule.c"
        var $56=HEAP[$55]; //@line 1408 "_collectionsmodule.c"
        var $57=$56+24; //@line 1408 "_collectionsmodule.c"
        var $58=HEAP[$57]; //@line 1408 "_collectionsmodule.c"
        var $59=$items; //@line 1408 "_collectionsmodule.c"
        FUNCTION_TABLE[$58]($59); //@line 1408 "_collectionsmodule.c"
        __label__ = 12; break; //@line 1408 "_collectionsmodule.c"
      case 12: // $bb11
        var $60=$args; //@line 1409 "_collectionsmodule.c"
        var $61=$60; //@line 1409 "_collectionsmodule.c"
        var $62=HEAP[$61]; //@line 1409 "_collectionsmodule.c"
        var $63=($62) - 1; //@line 1409 "_collectionsmodule.c"
        var $64=$args; //@line 1409 "_collectionsmodule.c"
        var $65=$64; //@line 1409 "_collectionsmodule.c"
        HEAP[$65]=$63; //@line 1409 "_collectionsmodule.c"
        var $66=$args; //@line 1409 "_collectionsmodule.c"
        var $67=$66; //@line 1409 "_collectionsmodule.c"
        var $68=HEAP[$67]; //@line 1409 "_collectionsmodule.c"
        var $69=($68)==0; //@line 1409 "_collectionsmodule.c"
        if ($69) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1409 "_collectionsmodule.c"
      case 13: // $bb12
        var $70=$args; //@line 1409 "_collectionsmodule.c"
        var $71=$70+4; //@line 1409 "_collectionsmodule.c"
        var $72=HEAP[$71]; //@line 1409 "_collectionsmodule.c"
        var $73=$72+24; //@line 1409 "_collectionsmodule.c"
        var $74=HEAP[$73]; //@line 1409 "_collectionsmodule.c"
        var $75=$args; //@line 1409 "_collectionsmodule.c"
        FUNCTION_TABLE[$74]($75); //@line 1409 "_collectionsmodule.c"
        __label__ = 14; break; //@line 1409 "_collectionsmodule.c"
      case 14: // $bb13
        var $76=$result; //@line 1410 "_collectionsmodule.c"
        $0=$76; //@line 1410 "_collectionsmodule.c"
        __label__ = 15; break; //@line 1410 "_collectionsmodule.c"
      case 15: // $bb14
        var $77=$0; //@line 1400 "_collectionsmodule.c"
        $retval=$77; //@line 1400 "_collectionsmodule.c"
        var $retval15=$retval; //@line 1400 "_collectionsmodule.c"
        ;
        return $retval15; //@line 1400 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _defdict_dealloc($dd) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dd_addr;
        var $_py_tmp;
        $dd_addr=$dd;
        var $0=$dd_addr; //@line 1435 "_collectionsmodule.c"
        var $1=$0+124; //@line 1435 "_collectionsmodule.c"
        var $2=HEAP[$1]; //@line 1435 "_collectionsmodule.c"
        var $3=($2)!=0; //@line 1435 "_collectionsmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1435 "_collectionsmodule.c"
      case 1: // $bb
        var $4=$dd_addr; //@line 1435 "_collectionsmodule.c"
        var $5=$4+124; //@line 1435 "_collectionsmodule.c"
        var $6=HEAP[$5]; //@line 1435 "_collectionsmodule.c"
        $_py_tmp=$6; //@line 1435 "_collectionsmodule.c"
        var $7=$dd_addr; //@line 1435 "_collectionsmodule.c"
        var $8=$7+124; //@line 1435 "_collectionsmodule.c"
        HEAP[$8]=0; //@line 1435 "_collectionsmodule.c"
        var $9=$_py_tmp; //@line 1435 "_collectionsmodule.c"
        var $10=$9; //@line 1435 "_collectionsmodule.c"
        var $11=HEAP[$10]; //@line 1435 "_collectionsmodule.c"
        var $12=($11) - 1; //@line 1435 "_collectionsmodule.c"
        var $13=$_py_tmp; //@line 1435 "_collectionsmodule.c"
        var $14=$13; //@line 1435 "_collectionsmodule.c"
        HEAP[$14]=$12; //@line 1435 "_collectionsmodule.c"
        var $15=$_py_tmp; //@line 1435 "_collectionsmodule.c"
        var $16=$15; //@line 1435 "_collectionsmodule.c"
        var $17=HEAP[$16]; //@line 1435 "_collectionsmodule.c"
        var $18=($17)==0; //@line 1435 "_collectionsmodule.c"
        if ($18) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1435 "_collectionsmodule.c"
      case 2: // $bb1
        var $19=$_py_tmp; //@line 1435 "_collectionsmodule.c"
        var $20=$19+4; //@line 1435 "_collectionsmodule.c"
        var $21=HEAP[$20]; //@line 1435 "_collectionsmodule.c"
        var $22=$21+24; //@line 1435 "_collectionsmodule.c"
        var $23=HEAP[$22]; //@line 1435 "_collectionsmodule.c"
        var $24=$_py_tmp; //@line 1435 "_collectionsmodule.c"
        FUNCTION_TABLE[$23]($24); //@line 1435 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1435 "_collectionsmodule.c"
      case 3: // $bb2
        var $25=HEAP[_PyDict_Type+24]; //@line 1436 "_collectionsmodule.c"
        var $26=$dd_addr; //@line 1436 "_collectionsmodule.c"
        var $27=$26; //@line 1436 "_collectionsmodule.c"
        FUNCTION_TABLE[$25]($27); //@line 1436 "_collectionsmodule.c"
        ;
        return; //@line 1437 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _defdict_print($dd, $fp, $flags) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dd_addr;
        var $fp_addr;
        var $flags_addr;
        var $retval;
        var $0;
        var $sts;
        $dd_addr=$dd;
        $fp_addr=$fp;
        $flags_addr=$flags;
        var $1=$fp_addr; //@line 1444 "_collectionsmodule.c"
        var $2=$1; //@line 1444 "_collectionsmodule.c"
        var $3=_fwrite(__str70, 1, 12, $2); //@line 1444 "_collectionsmodule.c"
        var $4=$dd_addr; //@line 1446 "_collectionsmodule.c"
        var $5=$4+124; //@line 1446 "_collectionsmodule.c"
        var $6=HEAP[$5]; //@line 1446 "_collectionsmodule.c"
        var $7=($6)==0; //@line 1446 "_collectionsmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1446 "_collectionsmodule.c"
      case 1: // $bb
        var $8=$fp_addr; //@line 1448 "_collectionsmodule.c"
        var $9=$8; //@line 1448 "_collectionsmodule.c"
        var $10=_fwrite(__str71, 1, 4, $9); //@line 1448 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1448 "_collectionsmodule.c"
      case 2: // $bb1
        var $11=$dd_addr; //@line 1451 "_collectionsmodule.c"
        var $12=$11+124; //@line 1451 "_collectionsmodule.c"
        var $13=HEAP[$12]; //@line 1451 "_collectionsmodule.c"
        var $14=$fp_addr; //@line 1451 "_collectionsmodule.c"
        var $15=_PyObject_Print($13, $14, 0); //@line 1451 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1451 "_collectionsmodule.c"
      case 3: // $bb2
        var $16=$fp_addr; //@line 1454 "_collectionsmodule.c"
        var $17=$16; //@line 1454 "_collectionsmodule.c"
        var $18=_fwrite(__str33, 1, 2, $17); //@line 1454 "_collectionsmodule.c"
        var $19=HEAP[_PyDict_Type+28]; //@line 1456 "_collectionsmodule.c"
        var $20=$dd_addr; //@line 1456 "_collectionsmodule.c"
        var $21=$20; //@line 1456 "_collectionsmodule.c"
        var $22=$fp_addr; //@line 1456 "_collectionsmodule.c"
        var $23=FUNCTION_TABLE[$19]($21, $22, 0); //@line 1456 "_collectionsmodule.c"
        $sts=$23; //@line 1456 "_collectionsmodule.c"
        var $24=$fp_addr; //@line 1458 "_collectionsmodule.c"
        var $25=$24; //@line 1458 "_collectionsmodule.c"
        var $26=_fputc(41, $25); //@line 1458 "_collectionsmodule.c"
        var $27=$sts; //@line 1460 "_collectionsmodule.c"
        $0=$27; //@line 1460 "_collectionsmodule.c"
        var $28=$0; //@line 1460 "_collectionsmodule.c"
        $retval=$28; //@line 1460 "_collectionsmodule.c"
        var $retval3=$retval; //@line 1460 "_collectionsmodule.c"
        ;
        return $retval3; //@line 1460 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _defdict_repr($dd) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dd_addr;
        var $retval;
        var $0;
        var $defrepr;
        var $baserepr;
        var $result;
        var $status;
        $dd_addr=$dd;
        var $1=HEAP[_PyDict_Type+44]; //@line 1469 "_collectionsmodule.c"
        var $2=$dd_addr; //@line 1469 "_collectionsmodule.c"
        var $3=$2; //@line 1469 "_collectionsmodule.c"
        var $4=FUNCTION_TABLE[$1]($3); //@line 1469 "_collectionsmodule.c"
        $baserepr=$4; //@line 1469 "_collectionsmodule.c"
        var $5=$baserepr; //@line 1470 "_collectionsmodule.c"
        var $6=($5)==0; //@line 1470 "_collectionsmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1470 "_collectionsmodule.c"
      case 1: // $bb
        $0=0; //@line 1471 "_collectionsmodule.c"
        __label__ = 19; break; //@line 1471 "_collectionsmodule.c"
      case 2: // $bb1
        var $7=$dd_addr; //@line 1472 "_collectionsmodule.c"
        var $8=$7+124; //@line 1472 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 1472 "_collectionsmodule.c"
        var $10=($9)==0; //@line 1472 "_collectionsmodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1472 "_collectionsmodule.c"
      case 3: // $bb2
        var $11=_PyString_FromString(__str71); //@line 1473 "_collectionsmodule.c"
        $defrepr=$11; //@line 1473 "_collectionsmodule.c"
        __lastLabel__ = 3; __label__ = 10; break; //@line 1473 "_collectionsmodule.c"
      case 4: // $bb3
        var $12=$dd_addr; //@line 1476 "_collectionsmodule.c"
        var $13=$12+124; //@line 1476 "_collectionsmodule.c"
        var $14=HEAP[$13]; //@line 1476 "_collectionsmodule.c"
        var $15=_Py_ReprEnter($14); //@line 1476 "_collectionsmodule.c"
        $status=$15; //@line 1476 "_collectionsmodule.c"
        var $16=$status; //@line 1477 "_collectionsmodule.c"
        var $17=($16)!=0; //@line 1477 "_collectionsmodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1477 "_collectionsmodule.c"
      case 5: // $bb4
        var $18=$status; //@line 1478 "_collectionsmodule.c"
        var $19=($18) < 0; //@line 1478 "_collectionsmodule.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1478 "_collectionsmodule.c"
      case 6: // $bb5
        $0=0; //@line 1479 "_collectionsmodule.c"
        __label__ = 19; break; //@line 1479 "_collectionsmodule.c"
      case 7: // $bb6
        var $20=_PyString_FromString(__str72); //@line 1480 "_collectionsmodule.c"
        $defrepr=$20; //@line 1480 "_collectionsmodule.c"
        __label__ = 9; break; //@line 1480 "_collectionsmodule.c"
      case 8: // $bb7
        var $21=$dd_addr; //@line 1483 "_collectionsmodule.c"
        var $22=$21+124; //@line 1483 "_collectionsmodule.c"
        var $23=HEAP[$22]; //@line 1483 "_collectionsmodule.c"
        var $24=_PyObject_Repr($23); //@line 1483 "_collectionsmodule.c"
        $defrepr=$24; //@line 1483 "_collectionsmodule.c"
        __label__ = 9; break; //@line 1483 "_collectionsmodule.c"
      case 9: // $bb8
        var $25=$dd_addr; //@line 1484 "_collectionsmodule.c"
        var $26=$25+124; //@line 1484 "_collectionsmodule.c"
        var $27=HEAP[$26]; //@line 1484 "_collectionsmodule.c"
        _Py_ReprLeave($27); //@line 1484 "_collectionsmodule.c"
        var $_pr=$defrepr;
        __lastLabel__ = 9; __label__ = 10; break; //@line 1484 "_collectionsmodule.c"
      case 10: // $bb9
        var $28=__lastLabel__ == 9 ? $_pr : ($11);
        var $29=($28)==0; //@line 1486 "_collectionsmodule.c"
        var $30=$baserepr; //@line 1487 "_collectionsmodule.c"
        if ($29) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1486 "_collectionsmodule.c"
      case 11: // $bb10
        var $31=$30; //@line 1487 "_collectionsmodule.c"
        var $32=HEAP[$31]; //@line 1487 "_collectionsmodule.c"
        var $33=($32) - 1; //@line 1487 "_collectionsmodule.c"
        var $34=$baserepr; //@line 1487 "_collectionsmodule.c"
        var $35=$34; //@line 1487 "_collectionsmodule.c"
        HEAP[$35]=$33; //@line 1487 "_collectionsmodule.c"
        var $36=$baserepr; //@line 1487 "_collectionsmodule.c"
        var $37=$36; //@line 1487 "_collectionsmodule.c"
        var $38=HEAP[$37]; //@line 1487 "_collectionsmodule.c"
        var $39=($38)==0; //@line 1487 "_collectionsmodule.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1487 "_collectionsmodule.c"
      case 12: // $bb11
        var $40=$baserepr; //@line 1487 "_collectionsmodule.c"
        var $41=$40+4; //@line 1487 "_collectionsmodule.c"
        var $42=HEAP[$41]; //@line 1487 "_collectionsmodule.c"
        var $43=$42+24; //@line 1487 "_collectionsmodule.c"
        var $44=HEAP[$43]; //@line 1487 "_collectionsmodule.c"
        var $45=$baserepr; //@line 1487 "_collectionsmodule.c"
        FUNCTION_TABLE[$44]($45); //@line 1487 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1487 "_collectionsmodule.c"
      case 13: // $bb12
        $0=0; //@line 1488 "_collectionsmodule.c"
        __label__ = 19; break; //@line 1488 "_collectionsmodule.c"
      case 14: // $bb13
        var $46=$30; //@line 1490 "_collectionsmodule.c"
        var $47=$46+20; //@line 1490 "_collectionsmodule.c"
        var $48=$47; //@line 1490 "_collectionsmodule.c"
        var $49=$defrepr; //@line 1490 "_collectionsmodule.c"
        var $50=$49; //@line 1490 "_collectionsmodule.c"
        var $51=$50+20; //@line 1490 "_collectionsmodule.c"
        var $52=$51; //@line 1490 "_collectionsmodule.c"
        var $53=_PyString_FromFormat(__str73, allocate([$52,0,0,0,$48,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1490 "_collectionsmodule.c"
        $result=$53; //@line 1490 "_collectionsmodule.c"
        var $54=$defrepr; //@line 1493 "_collectionsmodule.c"
        var $55=$54; //@line 1493 "_collectionsmodule.c"
        var $56=HEAP[$55]; //@line 1493 "_collectionsmodule.c"
        var $57=($56) - 1; //@line 1493 "_collectionsmodule.c"
        var $58=$defrepr; //@line 1493 "_collectionsmodule.c"
        var $59=$58; //@line 1493 "_collectionsmodule.c"
        HEAP[$59]=$57; //@line 1493 "_collectionsmodule.c"
        var $60=$defrepr; //@line 1493 "_collectionsmodule.c"
        var $61=$60; //@line 1493 "_collectionsmodule.c"
        var $62=HEAP[$61]; //@line 1493 "_collectionsmodule.c"
        var $63=($62)==0; //@line 1493 "_collectionsmodule.c"
        if ($63) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1493 "_collectionsmodule.c"
      case 15: // $bb14
        var $64=$defrepr; //@line 1493 "_collectionsmodule.c"
        var $65=$64+4; //@line 1493 "_collectionsmodule.c"
        var $66=HEAP[$65]; //@line 1493 "_collectionsmodule.c"
        var $67=$66+24; //@line 1493 "_collectionsmodule.c"
        var $68=HEAP[$67]; //@line 1493 "_collectionsmodule.c"
        var $69=$defrepr; //@line 1493 "_collectionsmodule.c"
        FUNCTION_TABLE[$68]($69); //@line 1493 "_collectionsmodule.c"
        __label__ = 16; break; //@line 1493 "_collectionsmodule.c"
      case 16: // $bb15
        var $70=$baserepr; //@line 1494 "_collectionsmodule.c"
        var $71=$70; //@line 1494 "_collectionsmodule.c"
        var $72=HEAP[$71]; //@line 1494 "_collectionsmodule.c"
        var $73=($72) - 1; //@line 1494 "_collectionsmodule.c"
        var $74=$baserepr; //@line 1494 "_collectionsmodule.c"
        var $75=$74; //@line 1494 "_collectionsmodule.c"
        HEAP[$75]=$73; //@line 1494 "_collectionsmodule.c"
        var $76=$baserepr; //@line 1494 "_collectionsmodule.c"
        var $77=$76; //@line 1494 "_collectionsmodule.c"
        var $78=HEAP[$77]; //@line 1494 "_collectionsmodule.c"
        var $79=($78)==0; //@line 1494 "_collectionsmodule.c"
        if ($79) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1494 "_collectionsmodule.c"
      case 17: // $bb16
        var $80=$baserepr; //@line 1494 "_collectionsmodule.c"
        var $81=$80+4; //@line 1494 "_collectionsmodule.c"
        var $82=HEAP[$81]; //@line 1494 "_collectionsmodule.c"
        var $83=$82+24; //@line 1494 "_collectionsmodule.c"
        var $84=HEAP[$83]; //@line 1494 "_collectionsmodule.c"
        var $85=$baserepr; //@line 1494 "_collectionsmodule.c"
        FUNCTION_TABLE[$84]($85); //@line 1494 "_collectionsmodule.c"
        __label__ = 18; break; //@line 1494 "_collectionsmodule.c"
      case 18: // $bb17
        var $86=$result; //@line 1495 "_collectionsmodule.c"
        $0=$86; //@line 1495 "_collectionsmodule.c"
        __label__ = 19; break; //@line 1495 "_collectionsmodule.c"
      case 19: // $bb18
        var $87=$0; //@line 1471 "_collectionsmodule.c"
        $retval=$87; //@line 1471 "_collectionsmodule.c"
        var $retval19=$retval; //@line 1471 "_collectionsmodule.c"
        ;
        return $retval19; //@line 1471 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _defdict_traverse($self, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 1501 "_collectionsmodule.c"
        var $2=$1; //@line 1501 "_collectionsmodule.c"
        var $3=$2+124; //@line 1501 "_collectionsmodule.c"
        var $4=HEAP[$3]; //@line 1501 "_collectionsmodule.c"
        var $5=($4)!=0; //@line 1501 "_collectionsmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1501 "_collectionsmodule.c"
      case 1: // $bb
        var $6=$self_addr; //@line 1501 "_collectionsmodule.c"
        var $7=$6; //@line 1501 "_collectionsmodule.c"
        var $8=$7+124; //@line 1501 "_collectionsmodule.c"
        var $9=HEAP[$8]; //@line 1501 "_collectionsmodule.c"
        var $10=$visit_addr; //@line 1501 "_collectionsmodule.c"
        var $11=$arg_addr; //@line 1501 "_collectionsmodule.c"
        var $12=FUNCTION_TABLE[$10]($9, $11); //@line 1501 "_collectionsmodule.c"
        $vret=$12; //@line 1501 "_collectionsmodule.c"
        var $13=$vret; //@line 1501 "_collectionsmodule.c"
        var $14=($13)!=0; //@line 1501 "_collectionsmodule.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1501 "_collectionsmodule.c"
      case 2: // $bb1
        var $15=$vret; //@line 1501 "_collectionsmodule.c"
        $0=$15; //@line 1501 "_collectionsmodule.c"
        __label__ = 4; break; //@line 1501 "_collectionsmodule.c"
      case 3: // $bb2
        var $16=HEAP[_PyDict_Type+92]; //@line 1502 "_collectionsmodule.c"
        var $17=$self_addr; //@line 1502 "_collectionsmodule.c"
        var $18=$visit_addr; //@line 1502 "_collectionsmodule.c"
        var $19=$arg_addr; //@line 1502 "_collectionsmodule.c"
        var $20=FUNCTION_TABLE[$16]($17, $18, $19); //@line 1502 "_collectionsmodule.c"
        $0=$20; //@line 1502 "_collectionsmodule.c"
        __label__ = 4; break; //@line 1502 "_collectionsmodule.c"
      case 4: // $bb3
        var $21=$0; //@line 1501 "_collectionsmodule.c"
        $retval=$21; //@line 1501 "_collectionsmodule.c"
        var $retval4=$retval; //@line 1501 "_collectionsmodule.c"
        ;
        return $retval4; //@line 1501 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _defdict_tp_clear($dd) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dd_addr;
        var $retval;
        var $0;
        var $_py_tmp;
        $dd_addr=$dd;
        var $1=$dd_addr; //@line 1508 "_collectionsmodule.c"
        var $2=$1+124; //@line 1508 "_collectionsmodule.c"
        var $3=HEAP[$2]; //@line 1508 "_collectionsmodule.c"
        var $4=($3)!=0; //@line 1508 "_collectionsmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1508 "_collectionsmodule.c"
      case 1: // $bb
        var $5=$dd_addr; //@line 1508 "_collectionsmodule.c"
        var $6=$5+124; //@line 1508 "_collectionsmodule.c"
        var $7=HEAP[$6]; //@line 1508 "_collectionsmodule.c"
        $_py_tmp=$7; //@line 1508 "_collectionsmodule.c"
        var $8=$dd_addr; //@line 1508 "_collectionsmodule.c"
        var $9=$8+124; //@line 1508 "_collectionsmodule.c"
        HEAP[$9]=0; //@line 1508 "_collectionsmodule.c"
        var $10=$_py_tmp; //@line 1508 "_collectionsmodule.c"
        var $11=$10; //@line 1508 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 1508 "_collectionsmodule.c"
        var $13=($12) - 1; //@line 1508 "_collectionsmodule.c"
        var $14=$_py_tmp; //@line 1508 "_collectionsmodule.c"
        var $15=$14; //@line 1508 "_collectionsmodule.c"
        HEAP[$15]=$13; //@line 1508 "_collectionsmodule.c"
        var $16=$_py_tmp; //@line 1508 "_collectionsmodule.c"
        var $17=$16; //@line 1508 "_collectionsmodule.c"
        var $18=HEAP[$17]; //@line 1508 "_collectionsmodule.c"
        var $19=($18)==0; //@line 1508 "_collectionsmodule.c"
        if ($19) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1508 "_collectionsmodule.c"
      case 2: // $bb1
        var $20=$_py_tmp; //@line 1508 "_collectionsmodule.c"
        var $21=$20+4; //@line 1508 "_collectionsmodule.c"
        var $22=HEAP[$21]; //@line 1508 "_collectionsmodule.c"
        var $23=$22+24; //@line 1508 "_collectionsmodule.c"
        var $24=HEAP[$23]; //@line 1508 "_collectionsmodule.c"
        var $25=$_py_tmp; //@line 1508 "_collectionsmodule.c"
        FUNCTION_TABLE[$24]($25); //@line 1508 "_collectionsmodule.c"
        __label__ = 3; break; //@line 1508 "_collectionsmodule.c"
      case 3: // $bb2
        var $26=HEAP[_PyDict_Type+96]; //@line 1509 "_collectionsmodule.c"
        var $27=$dd_addr; //@line 1509 "_collectionsmodule.c"
        var $28=$27; //@line 1509 "_collectionsmodule.c"
        var $29=FUNCTION_TABLE[$26]($28); //@line 1509 "_collectionsmodule.c"
        $0=$29; //@line 1509 "_collectionsmodule.c"
        var $30=$0; //@line 1509 "_collectionsmodule.c"
        $retval=$30; //@line 1509 "_collectionsmodule.c"
        var $retval3=$retval; //@line 1509 "_collectionsmodule.c"
        ;
        return $retval3; //@line 1509 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _defdict_init($self, $args, $kwds) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $dd;
        var $olddefault;
        var $newdefault;
        var $newargs;
        var $result;
        var $n;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$self_addr; //@line 1515 "_collectionsmodule.c"
        var $2=$1; //@line 1515 "_collectionsmodule.c"
        $dd=$2; //@line 1515 "_collectionsmodule.c"
        var $3=$dd; //@line 1516 "_collectionsmodule.c"
        var $4=$3+124; //@line 1516 "_collectionsmodule.c"
        var $5=HEAP[$4]; //@line 1516 "_collectionsmodule.c"
        $olddefault=$5; //@line 1516 "_collectionsmodule.c"
        $newdefault=0; //@line 1517 "_collectionsmodule.c"
        var $6=$args_addr; //@line 1520 "_collectionsmodule.c"
        var $7=($6)==0; //@line 1520 "_collectionsmodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1520 "_collectionsmodule.c"
      case 1: // $bb
        var $8=$args_addr; //@line 1520 "_collectionsmodule.c"
        var $9=$8+4; //@line 1520 "_collectionsmodule.c"
        var $10=HEAP[$9]; //@line 1520 "_collectionsmodule.c"
        var $11=$10+84; //@line 1520 "_collectionsmodule.c"
        var $12=HEAP[$11]; //@line 1520 "_collectionsmodule.c"
        var $13=($12) & 67108864; //@line 1520 "_collectionsmodule.c"
        var $14=($13)==0; //@line 1520 "_collectionsmodule.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1520 "_collectionsmodule.c"
      case 2: // $bb1
        var $15=_PyTuple_New(0); //@line 1521 "_collectionsmodule.c"
        $newargs=$15; //@line 1521 "_collectionsmodule.c"
        __lastLabel__ = 2; __label__ = 7; break; //@line 1521 "_collectionsmodule.c"
      case 3: // $bb2
        var $16=$args_addr; //@line 1523 "_collectionsmodule.c"
        var $17=$16; //@line 1523 "_collectionsmodule.c"
        var $18=$17+8; //@line 1523 "_collectionsmodule.c"
        var $19=HEAP[$18]; //@line 1523 "_collectionsmodule.c"
        $n=$19; //@line 1523 "_collectionsmodule.c"
        var $20=$n; //@line 1524 "_collectionsmodule.c"
        var $21=($20) > 0; //@line 1524 "_collectionsmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1524 "_collectionsmodule.c"
      case 4: // $bb3
        var $22=$args_addr; //@line 1525 "_collectionsmodule.c"
        var $23=$22; //@line 1525 "_collectionsmodule.c"
        var $24=$23+12; //@line 1525 "_collectionsmodule.c"
        var $25=$24; //@line 1525 "_collectionsmodule.c"
        var $26=HEAP[$25]; //@line 1525 "_collectionsmodule.c"
        $newdefault=$26; //@line 1525 "_collectionsmodule.c"
        var $27=$newdefault; //@line 1526 "_collectionsmodule.c"
        var $28=_PyCallable_Check($27); //@line 1526 "_collectionsmodule.c"
        var $29=($28)==0; //@line 1526 "_collectionsmodule.c"
        var $30=$newdefault; //@line 1526 "_collectionsmodule.c"
        var $31=($30)!=(__Py_NoneStruct); //@line 1526 "_collectionsmodule.c"
        var $or_cond=($29) & ($31);
        if ($or_cond) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1526 "_collectionsmodule.c"
      case 5: // $bb5
        var $32=HEAP[_PyExc_TypeError]; //@line 1527 "_collectionsmodule.c"
        _PyErr_SetString($32, __str74); //@line 1527 "_collectionsmodule.c"
        $0=-1; //@line 1529 "_collectionsmodule.c"
        __label__ = 17; break; //@line 1529 "_collectionsmodule.c"
      case 6: // $bb6
        var $33=$args_addr; //@line 1532 "_collectionsmodule.c"
        var $34=$n; //@line 1532 "_collectionsmodule.c"
        var $35=_PySequence_GetSlice($33, 1, $34); //@line 1532 "_collectionsmodule.c"
        $newargs=$35; //@line 1532 "_collectionsmodule.c"
        __lastLabel__ = 6; __label__ = 7; break; //@line 1532 "_collectionsmodule.c"
      case 7: // $bb7
        var $36=__lastLabel__ == 6 ? $35 : ($15);
        var $37=($36)==0; //@line 1534 "_collectionsmodule.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1534 "_collectionsmodule.c"
      case 8: // $bb8
        $0=-1; //@line 1535 "_collectionsmodule.c"
        __label__ = 17; break; //@line 1535 "_collectionsmodule.c"
      case 9: // $bb9
        var $38=$newdefault; //@line 1536 "_collectionsmodule.c"
        var $39=($38)!=0; //@line 1536 "_collectionsmodule.c"
        if ($39) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1536 "_collectionsmodule.c"
      case 10: // $bb10
        var $40=$newdefault; //@line 1536 "_collectionsmodule.c"
        var $41=$40; //@line 1536 "_collectionsmodule.c"
        var $42=HEAP[$41]; //@line 1536 "_collectionsmodule.c"
        var $43=($42) + 1; //@line 1536 "_collectionsmodule.c"
        var $44=$newdefault; //@line 1536 "_collectionsmodule.c"
        var $45=$44; //@line 1536 "_collectionsmodule.c"
        HEAP[$45]=$43; //@line 1536 "_collectionsmodule.c"
        __label__ = 11; break; //@line 1536 "_collectionsmodule.c"
      case 11: // $bb11
        var $46=$dd; //@line 1537 "_collectionsmodule.c"
        var $47=$46+124; //@line 1537 "_collectionsmodule.c"
        var $48=$newdefault; //@line 1537 "_collectionsmodule.c"
        HEAP[$47]=$48; //@line 1537 "_collectionsmodule.c"
        var $49=HEAP[_PyDict_Type+148]; //@line 1538 "_collectionsmodule.c"
        var $50=$self_addr; //@line 1538 "_collectionsmodule.c"
        var $51=$newargs; //@line 1538 "_collectionsmodule.c"
        var $52=$kwds_addr; //@line 1538 "_collectionsmodule.c"
        var $53=FUNCTION_TABLE[$49]($50, $51, $52); //@line 1538 "_collectionsmodule.c"
        $result=$53; //@line 1538 "_collectionsmodule.c"
        var $54=$newargs; //@line 1539 "_collectionsmodule.c"
        var $55=$54; //@line 1539 "_collectionsmodule.c"
        var $56=HEAP[$55]; //@line 1539 "_collectionsmodule.c"
        var $57=($56) - 1; //@line 1539 "_collectionsmodule.c"
        var $58=$newargs; //@line 1539 "_collectionsmodule.c"
        var $59=$58; //@line 1539 "_collectionsmodule.c"
        HEAP[$59]=$57; //@line 1539 "_collectionsmodule.c"
        var $60=$newargs; //@line 1539 "_collectionsmodule.c"
        var $61=$60; //@line 1539 "_collectionsmodule.c"
        var $62=HEAP[$61]; //@line 1539 "_collectionsmodule.c"
        var $63=($62)==0; //@line 1539 "_collectionsmodule.c"
        if ($63) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1539 "_collectionsmodule.c"
      case 12: // $bb12
        var $64=$newargs; //@line 1539 "_collectionsmodule.c"
        var $65=$64+4; //@line 1539 "_collectionsmodule.c"
        var $66=HEAP[$65]; //@line 1539 "_collectionsmodule.c"
        var $67=$66+24; //@line 1539 "_collectionsmodule.c"
        var $68=HEAP[$67]; //@line 1539 "_collectionsmodule.c"
        var $69=$newargs; //@line 1539 "_collectionsmodule.c"
        FUNCTION_TABLE[$68]($69); //@line 1539 "_collectionsmodule.c"
        __label__ = 13; break; //@line 1539 "_collectionsmodule.c"
      case 13: // $bb13
        var $70=$olddefault; //@line 1540 "_collectionsmodule.c"
        var $71=($70)!=0; //@line 1540 "_collectionsmodule.c"
        if ($71) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 1540 "_collectionsmodule.c"
      case 14: // $bb14
        var $72=$olddefault; //@line 1540 "_collectionsmodule.c"
        var $73=$72; //@line 1540 "_collectionsmodule.c"
        var $74=HEAP[$73]; //@line 1540 "_collectionsmodule.c"
        var $75=($74) - 1; //@line 1540 "_collectionsmodule.c"
        var $76=$olddefault; //@line 1540 "_collectionsmodule.c"
        var $77=$76; //@line 1540 "_collectionsmodule.c"
        HEAP[$77]=$75; //@line 1540 "_collectionsmodule.c"
        var $78=$olddefault; //@line 1540 "_collectionsmodule.c"
        var $79=$78; //@line 1540 "_collectionsmodule.c"
        var $80=HEAP[$79]; //@line 1540 "_collectionsmodule.c"
        var $81=($80)==0; //@line 1540 "_collectionsmodule.c"
        if ($81) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1540 "_collectionsmodule.c"
      case 15: // $bb15
        var $82=$olddefault; //@line 1540 "_collectionsmodule.c"
        var $83=$82+4; //@line 1540 "_collectionsmodule.c"
        var $84=HEAP[$83]; //@line 1540 "_collectionsmodule.c"
        var $85=$84+24; //@line 1540 "_collectionsmodule.c"
        var $86=HEAP[$85]; //@line 1540 "_collectionsmodule.c"
        var $87=$olddefault; //@line 1540 "_collectionsmodule.c"
        FUNCTION_TABLE[$86]($87); //@line 1540 "_collectionsmodule.c"
        __label__ = 16; break; //@line 1540 "_collectionsmodule.c"
      case 16: // $bb16
        var $88=$result; //@line 1541 "_collectionsmodule.c"
        $0=$88; //@line 1541 "_collectionsmodule.c"
        __label__ = 17; break; //@line 1541 "_collectionsmodule.c"
      case 17: // $bb17
        var $89=$0; //@line 1529 "_collectionsmodule.c"
        $retval=$89; //@line 1529 "_collectionsmodule.c"
        var $retval18=$retval; //@line 1529 "_collectionsmodule.c"
        ;
        return $retval18; //@line 1529 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_collections() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $0=_Py_InitModule4(__str76, 0, _module_doc, 0, 1013); //@line 1612 "_collectionsmodule.c"
        $m=$0; //@line 1612 "_collectionsmodule.c"
        var $1=$m; //@line 1613 "_collectionsmodule.c"
        var $2=($1)==0; //@line 1613 "_collectionsmodule.c"
        if ($2) { __label__ = 5; break; } else { __label__ = 1; break; } //@line 1613 "_collectionsmodule.c"
      case 1: // $bb
        var $3=_PyType_Ready(_deque_type); //@line 1616 "_collectionsmodule.c"
        var $4=($3) < 0; //@line 1616 "_collectionsmodule.c"
        if ($4) { __label__ = 5; break; } else { __label__ = 2; break; } //@line 1616 "_collectionsmodule.c"
      case 2: // $bb1
        var $5=HEAP[_deque_type]; //@line 1618 "_collectionsmodule.c"
        var $6=($5) + 1; //@line 1618 "_collectionsmodule.c"
        HEAP[_deque_type]=$6; //@line 1618 "_collectionsmodule.c"
        var $7=$m; //@line 1619 "_collectionsmodule.c"
        var $8=_PyModule_AddObject($7, __str77, _deque_type); //@line 1619 "_collectionsmodule.c"
        HEAP[_defdict_type+128]=_PyDict_Type; //@line 1621 "_collectionsmodule.c"
        var $9=_PyType_Ready(_defdict_type); //@line 1622 "_collectionsmodule.c"
        var $10=($9) < 0; //@line 1622 "_collectionsmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 1622 "_collectionsmodule.c"
      case 3: // $bb2
        var $11=HEAP[_defdict_type]; //@line 1624 "_collectionsmodule.c"
        var $12=($11) + 1; //@line 1624 "_collectionsmodule.c"
        HEAP[_defdict_type]=$12; //@line 1624 "_collectionsmodule.c"
        var $13=$m; //@line 1625 "_collectionsmodule.c"
        var $14=_PyModule_AddObject($13, __str78, _defdict_type); //@line 1625 "_collectionsmodule.c"
        var $15=_PyType_Ready(_dequeiter_type); //@line 1627 "_collectionsmodule.c"
        var $16=($15) < 0; //@line 1627 "_collectionsmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1627 "_collectionsmodule.c"
      case 4: // $bb3
        var $17=_PyType_Ready(_dequereviter_type); //@line 1630 "_collectionsmodule.c"
        ;
        return;
      case 5: // $return
        ;
        return; //@line 1614 "_collectionsmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_collections"] = _init_collections;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_deque_get_maxlen,0,_deque_len,0,_deque_item,0,_deque_ass_item,0,_deque_inplace_concat,0,_deque_append,0,_deque_appendleft,0,_deque_clearmethod,0,_deque_copy,0,_deque_count,0,_deque_extend,0,_deque_extendleft,0,_deque_pop,0,_deque_popleft,0,_deque_reduce,0,_deque_remove,0,_deque_reviter,0,_deque_reverse,0,_deque_rotate,0,_deque_dealloc,0,_deque_tp_print,0,_deque_repr,0,_PyObject_HashNotImplemented,0,_PyObject_GenericGetAttr,0,_deque_traverse,0,_deque_clear,0,_deque_richcompare,0,_deque_iter,0,_deque_init,0,_PyType_GenericAlloc,0,_deque_new,0,_PyObject_GC_Del,0,_dequeiter_len,0,_dequeiter_dealloc,0,_dequeiter_traverse,0,_PyObject_SelfIter,0,_dequeiter_next,0,_dequereviter_next,0,_defdict_missing,0,_defdict_copy,0,_defdict_reduce,0,_defdict_dealloc,0,_defdict_print,0,_defdict_repr,0,_defdict_traverse,0,_defdict_tp_clear,0,_defdict_init,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_numfreeblocks=allocate(1, "i32", ALLOC_NORMAL);
__str=allocate([99,97,110,110,111,116,32,97,100,100,32,109,111,114,101,32,98,108,111,99,107,115,32,116,111,32,116,104,101,32,100,101,113,117,101,0] /* cannot add more bloc */, "i8", ALLOC_NORMAL);
_freeblocks=allocate(40, "%struct.block*", ALLOC_NORMAL);
__str1=allocate([112,111,112,32,102,114,111,109,32,97,110,32,101,109,112,116,121,32,100,101,113,117,101,0] /* pop from an empty de */, "i8", ALLOC_NORMAL);
__str2=allocate([100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,32,61,61,32,100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,0] /* deque->leftblock ==  */, "i8", ALLOC_NORMAL);
__str3=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,99,111,108,108,101,99,116,105,111,110,115,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/_ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8417=allocate([100,101,113,117,101,95,112,111,112,0] /* deque_pop\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([100,101,113,117,101,45,62,108,101,102,116,105,110,100,101,120,32,61,61,32,100,101,113,117,101,45,62,114,105,103,104,116,105,110,100,101,120,43,49,0] /* deque->leftindex ==  */, "i8", ALLOC_NORMAL);
__str5=allocate([100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,32,33,61,32,100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,0] /* deque->leftblock !=  */, "i8", ALLOC_NORMAL);
_pop_doc=allocate([82,101,109,111,118,101,32,97,110,100,32,114,101,116,117,114,110,32,116,104,101,32,114,105,103,104,116,109,111,115,116,32,101,108,101,109,101,110,116,46,0] /* Remove and return th */, "i8", ALLOC_NORMAL);
__str6=allocate([100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* deque->leftblock !=  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8461=allocate([100,101,113,117,101,95,112,111,112,108,101,102,116,0] /* deque_popleft\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([112,114,101,118,98,108,111,99,107,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* prevblock != ((void  */, "i8", ALLOC_NORMAL);
_popleft_doc=allocate([82,101,109,111,118,101,32,97,110,100,32,114,101,116,117,114,110,32,116,104,101,32,108,101,102,116,109,111,115,116,32,101,108,101,109,101,110,116,46,0] /* Remove and return th */, "i8", ALLOC_NORMAL);
__str8=allocate([100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,45,62,114,105,103,104,116,108,105,110,107,32,61,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* deque->rightblock->r */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8509=allocate([100,101,113,117,101,95,97,112,112,101,110,100,0] /* deque_append\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([114,118,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,32,38,38,32,100,101,113,117,101,45,62,108,101,110,32,60,61,32,100,101,113,117,101,45,62,109,97,120,108,101,110,0] /* rv != ((void _)0) && */, "i8", ALLOC_NORMAL);
_append_doc=allocate([65,100,100,32,97,110,32,101,108,101,109,101,110,116,32,116,111,32,116,104,101,32,114,105,103,104,116,32,115,105,100,101,32,111,102,32,116,104,101,32,100,101,113,117,101,46,0] /* Add an element to th */, "i8", ALLOC_NORMAL);
__str10=allocate([100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,45,62,108,101,102,116,108,105,110,107,32,61,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* deque->leftblock->le */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8564=allocate([100,101,113,117,101,95,97,112,112,101,110,100,108,101,102,116,0] /* deque_appendleft\00 */, "i8", ALLOC_NORMAL);
_appendleft_doc=allocate([65,100,100,32,97,110,32,101,108,101,109,101,110,116,32,116,111,32,116,104,101,32,108,101,102,116,32,115,105,100,101,32,111,102,32,116,104,101,32,100,101,113,117,101,46,0] /* Add an element to th */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8652=allocate([100,101,113,117,101,95,101,120,116,101,110,100,0] /* deque_extend\00 */, "i8", ALLOC_NORMAL);
_extend_doc=allocate([69,120,116,101,110,100,32,116,104,101,32,114,105,103,104,116,32,115,105,100,101,32,111,102,32,116,104,101,32,100,101,113,117,101,32,119,105,116,104,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,116,104,101,32,105,116,101,114,97,98,108,101,0] /* Extend the right sid */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8758=allocate([100,101,113,117,101,95,101,120,116,101,110,100,108,101,102,116,0] /* deque_extendleft\00 */, "i8", ALLOC_NORMAL);
_extendleft_doc=allocate([69,120,116,101,110,100,32,116,104,101,32,108,101,102,116,32,115,105,100,101,32,111,102,32,116,104,101,32,100,101,113,117,101,32,119,105,116,104,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,116,104,101,32,105,116,101,114,97,98,108,101,0] /* Extend the left side */, "i8", ALLOC_NORMAL);
__str11=allocate([105,116,101,109,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* item != ((void _)0)\ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8884=allocate([95,100,101,113,117,101,95,114,111,116,97,116,101,0] /* _deque_rotate\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([124,110,58,114,111,116,97,116,101,0] /* |n:rotate\00 */, "i8", ALLOC_NORMAL);
_rotate_doc=allocate([82,111,116,97,116,101,32,116,104,101,32,100,101,113,117,101,32,110,32,115,116,101,112,115,32,116,111,32,116,104,101,32,114,105,103,104,116,32,40,100,101,102,97,117,108,116,32,110,61,49,41,46,32,32,73,102,32,110,32,105,115,32,110,101,103,97,116,105,118,101,44,32,114,111,116,97,116,101,115,32,108,101,102,116,46,0] /* Rotate the deque n s */, "i8", ALLOC_NORMAL);
__str13=allocate([108,101,102,116,98,108,111,99,107,32,33,61,32,114,105,103,104,116,98,108,111,99,107,32,124,124,32,108,101,102,116,105,110,100,101,120,32,60,32,114,105,103,104,116,105,110,100,101,120,0] /* leftblock != rightbl */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8974=allocate([100,101,113,117,101,95,114,101,118,101,114,115,101,0] /* deque_reverse\00 */, "i8", ALLOC_NORMAL);
_reverse_doc=allocate([68,46,114,101,118,101,114,115,101,40,41,32,45,45,32,114,101,118,101,114,115,101,32,42,73,78,32,80,76,65,67,69,42,0] /* D.reverse() -- rever */, "i8", ALLOC_NORMAL);
__str14=allocate([100,101,113,117,101,32,109,117,116,97,116,101,100,32,100,117,114,105,110,103,32,105,116,101,114,97,116,105,111,110,0] /* deque mutated during */, "i8", ALLOC_NORMAL);
_count_doc=allocate([68,46,99,111,117,110,116,40,118,97,108,117,101,41,32,45,62,32,105,110,116,101,103,101,114,32,45,45,32,114,101,116,117,114,110,32,110,117,109,98,101,114,32,111,102,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,118,97,108,117,101,0] /* D.count(value) -> in */, "i8", ALLOC_NORMAL);
__str15=allocate([100,101,113,117,101,32,109,117,116,97,116,101,100,32,100,117,114,105,110,103,32,114,101,109,111,118,101,40,41,46,0] /* deque mutated during */, "i8", ALLOC_NORMAL);
__str16=allocate([116,103,116,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* tgt != ((void _)0)\0 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9049=allocate([100,101,113,117,101,95,114,101,109,111,118,101,0] /* deque_remove\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([100,101,113,117,101,46,114,101,109,111,118,101,40,120,41,58,32,120,32,110,111,116,32,105,110,32,100,101,113,117,101,0] /* deque.remove(x): x n */, "i8", ALLOC_NORMAL);
_remove_doc=allocate([68,46,114,101,109,111,118,101,40,118,97,108,117,101,41,32,45,45,32,114,101,109,111,118,101,32,102,105,114,115,116,32,111,99,99,117,114,114,101,110,99,101,32,111,102,32,118,97,108,117,101,46,0] /* D.remove(value) -- r */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9087=allocate([100,101,113,117,101,95,99,108,101,97,114,0] /* deque_clear\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,32,61,61,32,100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,32,38,38,32,100,101,113,117,101,45,62,108,101,102,116,105,110,100,101,120,32,45,32,49,32,61,61,32,100,101,113,117,101,45,62,114,105,103,104,116,105,110,100,101,120,32,38,38,32,100,101,113,117,101,45,62,108,101,110,32,61,61,32,48,0] /* deque->leftblock ==  */, "i8", ALLOC_NORMAL);
__str19=allocate([100,101,113,117,101,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* deque index out of r */, "i8", ALLOC_NORMAL);
__str20=allocate([105,32,62,61,32,48,32,38,38,32,105,32,60,32,100,101,113,117,101,45,62,108,101,110,0] /* i >= 0 && i < deque- */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9162=allocate([100,101,113,117,101,95,100,101,108,95,105,116,101,109,0] /* deque_del_item\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([114,118,32,33,61,32,45,49,0] /* rv != -1\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9234=allocate([100,101,113,117,101,95,99,108,101,97,114,109,101,116,104,111,100,0] /* deque_clearmethod\00 */, "i8", ALLOC_NORMAL);
_clear_doc=allocate([82,101,109,111,118,101,32,97,108,108,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,116,104,101,32,100,101,113,117,101,46,0] /* Remove all elements  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9246=allocate([100,101,113,117,101,95,100,101,97,108,108,111,99,0] /* deque_dealloc\00 */, "i8", ALLOC_NORMAL);
__str22=allocate([79,0] /* O\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([79,105,0] /* Oi\00 */, "i8", ALLOC_NORMAL);
_copy_doc=allocate([82,101,116,117,114,110,32,97,32,115,104,97,108,108,111,119,32,99,111,112,121,32,111,102,32,97,32,100,101,113,117,101,46,0] /* Return a shallow cop */, "i8", ALLOC_NORMAL);
__str24=allocate([95,95,100,105,99,116,95,95,0] /* __dict__\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([79,40,79,41,0] /* O(O)\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([79,40,79,110,41,0] /* O(On)\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([79,40,79,79,41,79,0] /* O(OO)O\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([79,40,79,110,41,79,0] /* O(On)O\00 */, "i8", ALLOC_NORMAL);
_reduce_doc=allocate([82,101,116,117,114,110,32,115,116,97,116,101,32,105,110,102,111,114,109,97,116,105,111,110,32,102,111,114,32,112,105,99,107,108,105,110,103,46,0] /* Return state informa */, "i8", ALLOC_NORMAL);
__str29=allocate([91,46,46,46,93,0] /* [...]\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([100,101,113,117,101,40,37,37,114,44,32,109,97,120,108,101,110,61,37,122,100,41,0] /* deque(%%r, maxlen=%z */, "i8", ALLOC_NORMAL);
__str31=allocate([100,101,113,117,101,40,37,114,41,0] /* deque(%r)\00 */, "i8", ALLOC_NORMAL);
__str32=allocate(1, "i8", ALLOC_NORMAL);
__str33=allocate([44,32,0] /* , \00 */, "i8", ALLOC_NORMAL);
__str34=allocate([100,101,113,117,101,40,91,0] /* deque([\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([93,41,0] /* ])\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([93,44,32,109,97,120,108,101,110,61,37,122,100,41,0] /* ], maxlen=%zd)\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([105,116,101,114,97,98,108,101,0] /* iterable\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([109,97,120,108,101,110,0] /* maxlen\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([124,79,79,58,100,101,113,117,101,0] /* |OO:deque\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([109,97,120,108,101,110,32,109,117,115,116,32,98,101,32,110,111,110,45,110,101,103,97,116,105,118,101,0] /* maxlen must be non-n */, "i8", ALLOC_NORMAL);
__str41=allocate([109,97,120,105,109,117,109,32,115,105,122,101,32,111,102,32,97,32,100,101,113,117,101,32,111,114,32,78,111,110,101,32,105,102,32,117,110,98,111,117,110,100,101,100,0] /* maximum size of a de */, "i8", ALLOC_NORMAL);
_deque_getset=allocate(40, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_deque_as_sequence=allocate(40, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32, i32)*",0,0,0,"i32 (%struct.PyObject*, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0], ALLOC_NORMAL);
_reversed_doc=allocate([68,46,95,95,114,101,118,101,114,115,101,100,95,95,40,41,32,45,45,32,114,101,116,117,114,110,32,97,32,114,101,118,101,114,115,101,32,105,116,101,114,97,116,111,114,32,111,118,101,114,32,116,104,101,32,100,101,113,117,101,0] /* D.__reversed__() --  */, "i8", ALLOC_NORMAL);
__str42=allocate([97,112,112,101,110,100,0] /* append\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([97,112,112,101,110,100,108,101,102,116,0] /* appendleft\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([99,108,101,97,114,0] /* clear\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([95,95,99,111,112,121,95,95,0] /* __copy__\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([99,111,117,110,116,0] /* count\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([101,120,116,101,110,100,0] /* extend\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([101,120,116,101,110,100,108,101,102,116,0] /* extendleft\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([112,111,112,0] /* pop\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([112,111,112,108,101,102,116,0] /* popleft\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([95,95,114,101,100,117,99,101,95,95,0] /* __reduce__\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([114,101,109,111,118,101,0] /* remove\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([95,95,114,101,118,101,114,115,101,100,95,95,0] /* __reversed__\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([114,101,118,101,114,115,101,0] /* reverse\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([114,111,116,97,116,101,0] /* rotate\00 */, "i8", ALLOC_NORMAL);
_deque_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_deque_doc=allocate([100,101,113,117,101,40,105,116,101,114,97,98,108,101,91,44,32,109,97,120,108,101,110,93,41,32,45,45,62,32,100,101,113,117,101,32,111,98,106,101,99,116,10,10,66,117,105,108,100,32,97,110,32,111,114,100,101,114,101,100,32,99,111,108,108,101,99,116,105,111,110,32,119,105,116,104,32,111,112,116,105,109,105,122,101,100,32,97,99,99,101,115,115,32,102,114,111,109,32,105,116,115,32,101,110,100,112,111,105,110,116,115,46,0] /* deque(iterable[, max */, "i8", ALLOC_NORMAL);
__str56=allocate([99,111,108,108,101,99,116,105,111,110,115,46,100,101,113,117,101,0] /* collections.deque\00 */, "i8", ALLOC_NORMAL);
_deque_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str57=allocate([33,40,105,116,45,62,98,32,61,61,32,105,116,45,62,100,101,113,117,101,45,62,114,105,103,104,116,98,108,111,99,107,32,38,38,32,105,116,45,62,105,110,100,101,120,32,62,32,105,116,45,62,100,101,113,117,101,45,62,114,105,103,104,116,105,110,100,101,120,41,0] /* !(it->b == it->deque */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9783=allocate([100,101,113,117,101,105,116,101,114,95,110,101,120,116,0] /* dequeiter_next\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([105,116,45,62,98,45,62,114,105,103,104,116,108,105,110,107,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* it->b->rightlink !=  */, "i8", ALLOC_NORMAL);
_length_hint_doc=allocate([80,114,105,118,97,116,101,32,109,101,116,104,111,100,32,114,101,116,117,114,110,105,110,103,32,97,110,32,101,115,116,105,109,97,116,101,32,111,102,32,108,101,110,40,108,105,115,116,40,105,116,41,41,46,0] /* Private method retur */, "i8", ALLOC_NORMAL);
__str59=allocate([95,95,108,101,110,103,116,104,95,104,105,110,116,95,95,0] /* __length_hint__\00 */, "i8", ALLOC_NORMAL);
_dequeiter_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str60=allocate([100,101,113,117,101,95,105,116,101,114,97,116,111,114,0] /* deque_iterator\00 */, "i8", ALLOC_NORMAL);
_dequeiter_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str61=allocate([33,40,105,116,45,62,98,32,61,61,32,105,116,45,62,100,101,113,117,101,45,62,108,101,102,116,98,108,111,99,107,32,38,38,32,105,116,45,62,105,110,100,101,120,32,60,32,105,116,45,62,100,101,113,117,101,45,62,108,101,102,116,105,110,100,101,120,41,0] /* !(it->b == it->deque */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9856=allocate([100,101,113,117,101,114,101,118,105,116,101,114,95,110,101,120,116,0] /* dequereviter_next\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([105,116,45,62,98,45,62,108,101,102,116,108,105,110,107,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,0] /* it->b->leftlink != ( */, "i8", ALLOC_NORMAL);
__str63=allocate([100,101,113,117,101,95,114,101,118,101,114,115,101,95,105,116,101,114,97,116,111,114,0] /* deque_reverse_iterat */, "i8", ALLOC_NORMAL);
_dequereviter_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_defdict_missing_doc=allocate([95,95,109,105,115,115,105,110,103,95,95,40,107,101,121,41,32,35,32,67,97,108,108,101,100,32,98,121,32,95,95,103,101,116,105,116,101,109,95,95,32,102,111,114,32,109,105,115,115,105,110,103,32,107,101,121,59,32,112,115,101,117,100,111,45,99,111,100,101,58,10,32,32,105,102,32,115,101,108,102,46,100,101,102,97,117,108,116,95,102,97,99,116,111,114,121,32,105,115,32,78,111,110,101,58,32,114,97,105,115,101,32,75,101,121,69,114,114,111,114,40,40,107,101,121,44,41,41,10,32,32,115,101,108,102,91,107,101,121,93,32,61,32,118,97,108,117,101,32,61,32,115,101,108,102,46,100,101,102,97,117,108,116,95,102,97,99,116,111,114,121,40,41,10,32,32,114,101,116,117,114,110,32,118,97,108,117,101,10,0] /* __missing__(key) # C */, "i8", ALLOC_NORMAL);
_defdict_copy_doc=allocate([68,46,99,111,112,121,40,41,32,45,62,32,97,32,115,104,97,108,108,111,119,32,99,111,112,121,32,111,102,32,68,46,0] /* D.copy() -> a shallo */, "i8", ALLOC_NORMAL);
__str64=allocate([105,116,101,114,105,116,101,109,115,0] /* iteritems\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([40,41,0] /* ()\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([95,95,109,105,115,115,105,110,103,95,95,0] /* __missing__\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([99,111,112,121,0] /* copy\00 */, "i8", ALLOC_NORMAL);
_defdict_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str68=allocate([100,101,102,97,117,108,116,95,102,97,99,116,111,114,121,0] /* default_factory\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([70,97,99,116,111,114,121,32,102,111,114,32,100,101,102,97,117,108,116,32,118,97,108,117,101,32,99,97,108,108,101,100,32,98,121,32,95,95,109,105,115,115,105,110,103,95,95,40,41,46,0] /* Factory for default  */, "i8", ALLOC_NORMAL);
_defdict_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str70=allocate([100,101,102,97,117,108,116,100,105,99,116,40,0] /* defaultdict(\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([78,111,110,101,0] /* None\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([46,46,46,0] /* ...\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([100,101,102,97,117,108,116,100,105,99,116,40,37,115,44,32,37,115,41,0] /* defaultdict(%s, %s)\ */, "i8", ALLOC_NORMAL);
__str74=allocate([102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,99,97,108,108,97,98,108,101,0] /* first argument must  */, "i8", ALLOC_NORMAL);
_defdict_doc=allocate([100,101,102,97,117,108,116,100,105,99,116,40,100,101,102,97,117,108,116,95,102,97,99,116,111,114,121,41,32,45,45,62,32,100,105,99,116,32,119,105,116,104,32,100,101,102,97,117,108,116,32,102,97,99,116,111,114,121,10,10,84,104,101,32,100,101,102,97,117,108,116,32,102,97,99,116,111,114,121,32,105,115,32,99,97,108,108,101,100,32,119,105,116,104,111,117,116,32,97,114,103,117,109,101,110,116,115,32,116,111,32,112,114,111,100,117,99,101,10,97,32,110,101,119,32,118,97,108,117,101,32,119,104,101,110,32,97,32,107,101,121,32,105,115,32,110,111,116,32,112,114,101,115,101,110,116,44,32,105,110,32,95,95,103,101,116,105,116,101,109,95,95,32,111,110,108,121,46,10,65,32,100,101,102,97,117,108,116,100,105,99,116,32,99,111,109,112,97,114,101,115,32,101,113,117,97,108,32,116,111,32,97,32,100,105,99,116,32,119,105,116,104,32,116,104,101,32,115,97,109,101,32,105,116,101,109,115,46,10,0] /* defaultdict(default_ */, "i8", ALLOC_NORMAL);
__str75=allocate([99,111,108,108,101,99,116,105,111,110,115,46,100,101,102,97,117,108,116,100,105,99,116,0] /* collections.defaultd */, "i8", ALLOC_NORMAL);
_defdict_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([72,105,103,104,32,112,101,114,102,111,114,109,97,110,99,101,32,100,97,116,97,32,115,116,114,117,99,116,117,114,101,115,46,10,45,32,100,101,113,117,101,58,32,32,32,32,32,32,32,32,111,114,100,101,114,101,100,32,99,111,108,108,101,99,116,105,111,110,32,97,99,99,101,115,115,105,98,108,101,32,102,114,111,109,32,101,110,100,112,111,105,110,116,115,32,111,110,108,121,10,45,32,100,101,102,97,117,108,116,100,105,99,116,58,32,32,100,105,99,116,32,115,117,98,99,108,97,115,115,32,119,105,116,104,32,97,32,100,101,102,97,117,108,116,32,118,97,108,117,101,32,102,97,99,116,111,114,121,10,0] /* High performance dat */, "i8", ALLOC_NORMAL);
__str76=allocate([95,99,111,108,108,101,99,116,105,111,110,115,0] /* _collections\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([100,101,113,117,101,0] /* deque\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([100,101,102,97,117,108,116,100,105,99,116,0] /* defaultdict\00 */, "i8", ALLOC_NORMAL);
HEAP[_deque_getset]=__str38;
HEAP[_deque_getset+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_deque_getset+12]=__str41;
HEAP[_deque_as_sequence]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_deque_as_sequence+12]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_deque_as_sequence+20]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_deque_as_sequence+32]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_deque_methods]=__str42;
HEAP[_deque_methods+4]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_deque_methods+12]=_append_doc;
HEAP[_deque_methods+16]=__str43;
HEAP[_deque_methods+20]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_deque_methods+28]=_appendleft_doc;
HEAP[_deque_methods+32]=__str44;
HEAP[_deque_methods+36]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_deque_methods+44]=_clear_doc;
HEAP[_deque_methods+48]=__str45;
HEAP[_deque_methods+52]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_deque_methods+60]=_copy_doc;
HEAP[_deque_methods+64]=__str46;
HEAP[_deque_methods+68]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_deque_methods+76]=_count_doc;
HEAP[_deque_methods+80]=__str47;
HEAP[_deque_methods+84]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_deque_methods+92]=_extend_doc;
HEAP[_deque_methods+96]=__str48;
HEAP[_deque_methods+100]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_deque_methods+108]=_extendleft_doc;
HEAP[_deque_methods+112]=__str49;
HEAP[_deque_methods+116]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_deque_methods+124]=_pop_doc;
HEAP[_deque_methods+128]=__str50;
HEAP[_deque_methods+132]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_deque_methods+140]=_popleft_doc;
HEAP[_deque_methods+144]=__str51;
HEAP[_deque_methods+148]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_deque_methods+156]=_reduce_doc;
HEAP[_deque_methods+160]=__str52;
HEAP[_deque_methods+164]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_deque_methods+172]=_remove_doc;
HEAP[_deque_methods+176]=__str53;
HEAP[_deque_methods+180]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_deque_methods+188]=_reversed_doc;
HEAP[_deque_methods+192]=__str54;
HEAP[_deque_methods+196]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_deque_methods+204]=_reverse_doc;
HEAP[_deque_methods+208]=__str55;
HEAP[_deque_methods+212]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_deque_methods+220]=_rotate_doc;
HEAP[_deque_type+12]=__str56;
HEAP[_deque_type+24]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_deque_type+28]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_deque_type+44]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_deque_type+52]=_deque_as_sequence;
HEAP[_deque_type+60]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_deque_type+72]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_deque_type+88]=_deque_doc;
HEAP[_deque_type+92]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_deque_type+96]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_deque_type+100]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_deque_type+108]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_deque_type+116]=_deque_methods;
HEAP[_deque_type+124]=_deque_getset;
HEAP[_deque_type+148]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_deque_type+152]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_deque_type+156]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_deque_type+160]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_dequeiter_methods]=__str59;
HEAP[_dequeiter_methods+4]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_dequeiter_methods+12]=_length_hint_doc;
HEAP[_dequeiter_type+12]=__str60;
HEAP[_dequeiter_type+24]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_dequeiter_type+72]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_dequeiter_type+92]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_dequeiter_type+108]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_dequeiter_type+112]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_dequeiter_type+116]=_dequeiter_methods;
HEAP[_dequereviter_type+12]=__str63;
HEAP[_dequereviter_type+24]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_dequereviter_type+72]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_dequereviter_type+92]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_dequereviter_type+108]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_dequereviter_type+112]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_dequereviter_type+116]=_dequeiter_methods;
HEAP[_defdict_methods]=__str66;
HEAP[_defdict_methods+4]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_defdict_methods+12]=_defdict_missing_doc;
HEAP[_defdict_methods+16]=__str67;
HEAP[_defdict_methods+20]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_defdict_methods+28]=_defdict_copy_doc;
HEAP[_defdict_methods+32]=__str45;
HEAP[_defdict_methods+36]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_defdict_methods+44]=_defdict_copy_doc;
HEAP[_defdict_methods+48]=__str51;
HEAP[_defdict_methods+52]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_defdict_methods+60]=_reduce_doc;
HEAP[_defdict_members]=__str68;
HEAP[_defdict_members+16]=__str69;
HEAP[_defdict_type+12]=__str75;
HEAP[_defdict_type+24]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_defdict_type+28]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_defdict_type+44]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_defdict_type+72]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_defdict_type+88]=_defdict_doc;
HEAP[_defdict_type+92]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_defdict_type+96]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_defdict_type+116]=_defdict_methods;
HEAP[_defdict_type+120]=_defdict_members;
HEAP[_defdict_type+148]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_defdict_type+152]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_defdict_type+160]=(FUNCTION_TABLE_OFFSET + 64);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

