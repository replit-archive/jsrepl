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



var $0___SIZE = 60; // %0
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 20; // %2
  
var $3___SIZE = 384; // %3
  
var $4___SIZE = 16; // %4
  
var $5___SIZE = 24; // %5
  
var $6___SIZE = 196; // %6
  
var $7___SIZE = 196; // %7
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PySliceObject___SIZE = 20; // %struct.PySliceObject
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_arraydescr___SIZE = 16; // %struct.arraydescr
  
var $struct_arrayiterobject___SIZE = 20; // %struct.arrayiterobject
  
var $struct_arrayobject___SIZE = 28; // %struct.arrayobject
  
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
var _descriptors;
var __str15;
var __str16;
var ___PRETTY_FUNCTION___8858;
var __str17;




var __str18;
var _copy_doc;
var __str19;
var __str20;
var __str21;
var __str22;
var ___PRETTY_FUNCTION___9470;
var __str23;
var __str24;

var _count_doc;

var __str25;
var _index_doc;
var __str26;
var _remove_doc;
var __str27;
var __str28;
var __str29;
var _pop_doc;
var _extend_doc;
var __str30;
var _insert_doc;
var _buffer_info_doc;
var _append_doc;

var __str31;
var _byteswap_doc;
var __str32;
var ___PRETTY_FUNCTION___10009;
var _reverse_doc;
var __str33;
var __str34;


var __str35;
var _fromfile_doc;


var __str36;
var __str37;
var _tofile_doc;
var __str38;
var __str39;
var _fromlist_doc;
var _tolist_doc;
var __str40;
var __str41;
var _fromstring_doc;
var _tostring_doc;
var __str42;
var __str43;
var _fromunicode_doc;
var __str44;
var _tounicode_doc;
var __str45;

var __str46;
var _reduce_doc;
var __str47;
var __str48;
var __str49;
var __str50;
var _array_getsets;
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
var _array_methods;
var __str74;
var __str75;
var __str76;

var __str77;
var __str78;
var __str79;
var _array_as_mapping;
var __str80;

var __str81;
var _array_as_sequence;
var _array_as_buffer;
var __str82;
var __str83;
var __str84;
var _module_doc;
var _arraytype_doc;
var __str85;
var _Arraytype;
var __str86;
var ___PRETTY_FUNCTION___11388;
var __str87;
var _PyArrayIter_Type;
var _a_methods;

var __str88;
var __str89;






































































  function _array_resize($self, $newsize) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $newsize_addr;
        var $retval;
        var $iftmp_6;
        var $iftmp_5;
        var $iftmp_4;
        var $iftmp_2;
        var $0;
        var $items;
        var $_new_size;
        $self_addr=$self;
        $newsize_addr=$newsize;
        var $1=$self_addr; //@line 55 "arraymodule.c"
        var $2=$1+16; //@line 55 "arraymodule.c"
        var $3=HEAP[$2]; //@line 55 "arraymodule.c"
        var $4=$newsize_addr; //@line 55 "arraymodule.c"
        var $5=($3) >= ($4); //@line 55 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 55 "arraymodule.c"
      case 1: // $bb
        var $6=$self_addr; //@line 55 "arraymodule.c"
        var $7=$6; //@line 55 "arraymodule.c"
        var $8=$7+8; //@line 55 "arraymodule.c"
        var $9=HEAP[$8]; //@line 55 "arraymodule.c"
        var $10=$newsize_addr; //@line 55 "arraymodule.c"
        var $11=($10) + 16; //@line 55 "arraymodule.c"
        var $12=($9) < ($11); //@line 55 "arraymodule.c"
        if ($12) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 55 "arraymodule.c"
      case 2: // $bb1
        var $13=$self_addr; //@line 55 "arraymodule.c"
        var $14=$13+12; //@line 55 "arraymodule.c"
        var $15=HEAP[$14]; //@line 55 "arraymodule.c"
        var $16=($15)!=0; //@line 55 "arraymodule.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 55 "arraymodule.c"
      case 3: // $bb2
        var $17=$self_addr; //@line 58 "arraymodule.c"
        var $18=$17; //@line 58 "arraymodule.c"
        var $19=$18+8; //@line 58 "arraymodule.c"
        var $20=$newsize_addr; //@line 58 "arraymodule.c"
        HEAP[$19]=$20; //@line 58 "arraymodule.c"
        $0=0; //@line 59 "arraymodule.c"
        __label__ = 19; break; //@line 59 "arraymodule.c"
      case 4: // $bb3
        var $21=$newsize_addr; //@line 74 "arraymodule.c"
        var $22=($21) >> 4; //@line 74 "arraymodule.c"
        var $23=$self_addr; //@line 74 "arraymodule.c"
        var $24=$23; //@line 74 "arraymodule.c"
        var $25=$24+8; //@line 74 "arraymodule.c"
        var $26=HEAP[$25]; //@line 74 "arraymodule.c"
        var $27=($26) <= 7; //@line 74 "arraymodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 74 "arraymodule.c"
      case 5: // $bb4
        $iftmp_2=3; //@line 74 "arraymodule.c"
        __label__ = 7; break; //@line 74 "arraymodule.c"
      case 6: // $bb5
        $iftmp_2=7; //@line 74 "arraymodule.c"
        __label__ = 7; break; //@line 74 "arraymodule.c"
      case 7: // $bb6
        var $28=$iftmp_2; //@line 74 "arraymodule.c"
        var $29=$newsize_addr; //@line 74 "arraymodule.c"
        var $30=($28) + ($22); //@line 74 "arraymodule.c"
        var $31=($30) + ($29); //@line 74 "arraymodule.c"
        $_new_size=$31; //@line 74 "arraymodule.c"
        var $32=$self_addr; //@line 75 "arraymodule.c"
        var $33=$32+12; //@line 75 "arraymodule.c"
        var $34=HEAP[$33]; //@line 75 "arraymodule.c"
        $items=$34; //@line 75 "arraymodule.c"
        var $35=$self_addr; //@line 78 "arraymodule.c"
        var $36=$35+20; //@line 78 "arraymodule.c"
        var $37=HEAP[$36]; //@line 78 "arraymodule.c"
        var $38=$37+4; //@line 78 "arraymodule.c"
        var $39=HEAP[$38]; //@line 78 "arraymodule.c"
        var $40=Math.floor(4294967295/($39)); //@line 78 "arraymodule.c"
        var $41=$_new_size; //@line 78 "arraymodule.c"
        var $42=($40) >= ($41); //@line 78 "arraymodule.c"
        if ($42) { __label__ = 8; break; } else { __label__ = 15; break; } //@line 78 "arraymodule.c"
      case 8: // $bb7
        var $43=$self_addr; //@line 79 "arraymodule.c"
        var $44=$43+20; //@line 79 "arraymodule.c"
        var $45=HEAP[$44]; //@line 79 "arraymodule.c"
        var $46=$45+4; //@line 79 "arraymodule.c"
        var $47=HEAP[$46]; //@line 79 "arraymodule.c"
        var $48=$_new_size; //@line 79 "arraymodule.c"
        var $49=($48) * ($47); //@line 79 "arraymodule.c"
        var $50=($49) >= 0; //@line 79 "arraymodule.c"
        if ($50) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 79 "arraymodule.c"
      case 9: // $bb8
        var $51=$self_addr; //@line 79 "arraymodule.c"
        var $52=$51+20; //@line 79 "arraymodule.c"
        var $53=HEAP[$52]; //@line 79 "arraymodule.c"
        var $54=$53+4; //@line 79 "arraymodule.c"
        var $55=HEAP[$54]; //@line 79 "arraymodule.c"
        var $56=$_new_size; //@line 79 "arraymodule.c"
        var $57=($56) * ($55); //@line 79 "arraymodule.c"
        var $58=($57) >= 0; //@line 79 "arraymodule.c"
        if ($58) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 79 "arraymodule.c"
      case 10: // $bb9
        var $59=$self_addr; //@line 79 "arraymodule.c"
        var $60=$59+20; //@line 79 "arraymodule.c"
        var $61=HEAP[$60]; //@line 79 "arraymodule.c"
        var $62=$61+4; //@line 79 "arraymodule.c"
        var $63=HEAP[$62]; //@line 79 "arraymodule.c"
        var $64=$_new_size; //@line 79 "arraymodule.c"
        var $65=($64) * ($63); //@line 79 "arraymodule.c"
        var $66=($65)!=0; //@line 79 "arraymodule.c"
        if ($66) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 79 "arraymodule.c"
      case 11: // $bb10
        var $67=$self_addr; //@line 79 "arraymodule.c"
        var $68=$67+20; //@line 79 "arraymodule.c"
        var $69=HEAP[$68]; //@line 79 "arraymodule.c"
        var $70=$69+4; //@line 79 "arraymodule.c"
        var $71=HEAP[$70]; //@line 79 "arraymodule.c"
        var $72=$_new_size; //@line 79 "arraymodule.c"
        var $73=($72) * ($71); //@line 79 "arraymodule.c"
        $iftmp_6=$73; //@line 79 "arraymodule.c"
        __label__ = 16; break; //@line 79 "arraymodule.c"
      case 12: // $bb11
        $iftmp_6=1; //@line 79 "arraymodule.c"
        __label__ = 16; break; //@line 79 "arraymodule.c"
      case 13: // $bb18_thread2
        $iftmp_5=0; //@line 79 "arraymodule.c"
        $iftmp_4=0; //@line 79 "arraymodule.c"
        $items=0; //@line 79 "arraymodule.c"
        __label__ = 17; break;
      case 14: // $bb18_thread1
        $iftmp_4=0; //@line 79 "arraymodule.c"
        $items=0; //@line 79 "arraymodule.c"
        __label__ = 17; break;
      case 15: // $bb18_thread
        $items=0; //@line 81 "arraymodule.c"
        __label__ = 17; break;
      case 16: // $bb18
        var $74=$items; //@line 79 "arraymodule.c"
        var $75=$iftmp_6; //@line 79 "arraymodule.c"
        var $76=_realloc($74, $75); //@line 79 "arraymodule.c"
        $iftmp_5=$76; //@line 79 "arraymodule.c"
        $iftmp_4=$76; //@line 79 "arraymodule.c"
        $items=$76; //@line 79 "arraymodule.c"
        var $77=($76)==0; //@line 82 "arraymodule.c"
        if ($77) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 82 "arraymodule.c"
      case 17: // $bb19
        var $78=_PyErr_NoMemory(); //@line 83 "arraymodule.c"
        $0=-1; //@line 84 "arraymodule.c"
        __label__ = 19; break; //@line 84 "arraymodule.c"
      case 18: // $bb20
        var $79=$self_addr; //@line 86 "arraymodule.c"
        var $80=$79+12; //@line 86 "arraymodule.c"
        var $81=$items; //@line 86 "arraymodule.c"
        HEAP[$80]=$81; //@line 86 "arraymodule.c"
        var $82=$self_addr; //@line 87 "arraymodule.c"
        var $83=$82; //@line 87 "arraymodule.c"
        var $84=$83+8; //@line 87 "arraymodule.c"
        var $85=$newsize_addr; //@line 87 "arraymodule.c"
        HEAP[$84]=$85; //@line 87 "arraymodule.c"
        var $86=$_new_size; //@line 88 "arraymodule.c"
        var $87=$self_addr; //@line 88 "arraymodule.c"
        var $88=$87+16; //@line 88 "arraymodule.c"
        HEAP[$88]=$86; //@line 88 "arraymodule.c"
        $0=0; //@line 89 "arraymodule.c"
        __label__ = 19; break; //@line 89 "arraymodule.c"
      case 19: // $bb21
        var $89=$0; //@line 59 "arraymodule.c"
        $retval=$89; //@line 59 "arraymodule.c"
        var $retval22=$retval; //@line 59 "arraymodule.c"
        ;
        return $retval22; //@line 59 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _c_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 107 "arraymodule.c"
    var $2=$1+12; //@line 107 "arraymodule.c"
    var $3=HEAP[$2]; //@line 107 "arraymodule.c"
    var $4=$i_addr; //@line 107 "arraymodule.c"
    var $5=$3+$4; //@line 107 "arraymodule.c"
    var $6=_PyString_FromStringAndSize($5, 1); //@line 107 "arraymodule.c"
    $0=$6; //@line 107 "arraymodule.c"
    var $7=$0; //@line 107 "arraymodule.c"
    $retval=$7; //@line 107 "arraymodule.c"
    var $retval1=$retval; //@line 107 "arraymodule.c"
    ;
    return $retval1; //@line 107 "arraymodule.c"
  }
  

  function _c_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 1; _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 114 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, __str, allocate([$x,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 114 "arraymodule.c"
        var $3=($2)==0; //@line 114 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 114 "arraymodule.c"
      case 1: // $bb
        $0=-1; //@line 115 "arraymodule.c"
        __label__ = 5; break; //@line 115 "arraymodule.c"
      case 2: // $bb1
        var $4=$i_addr; //@line 116 "arraymodule.c"
        var $5=($4) >= 0; //@line 116 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 116 "arraymodule.c"
      case 3: // $bb2
        var $6=$ap_addr; //@line 117 "arraymodule.c"
        var $7=$6+12; //@line 117 "arraymodule.c"
        var $8=HEAP[$7]; //@line 117 "arraymodule.c"
        var $9=HEAP[$x]; //@line 117 "arraymodule.c"
        var $10=$i_addr; //@line 117 "arraymodule.c"
        var $11=$8+$10; //@line 117 "arraymodule.c"
        HEAP[$11]=$9; //@line 117 "arraymodule.c"
        __label__ = 4; break; //@line 117 "arraymodule.c"
      case 4: // $bb3
        $0=0; //@line 118 "arraymodule.c"
        __label__ = 5; break; //@line 118 "arraymodule.c"
      case 5: // $bb4
        var $12=$0; //@line 115 "arraymodule.c"
        $retval=$12; //@line 115 "arraymodule.c"
        var $retval5=$retval; //@line 115 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 115 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _b_getitem($ap, $i) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $retval;
        var $0;
        var $x;
        $ap_addr=$ap;
        $i_addr=$i;
        var $1=$ap_addr; //@line 124 "arraymodule.c"
        var $2=$1+12; //@line 124 "arraymodule.c"
        var $3=HEAP[$2]; //@line 124 "arraymodule.c"
        var $4=$i_addr; //@line 124 "arraymodule.c"
        var $5=$3+$4; //@line 124 "arraymodule.c"
        var $6=HEAP[$5]; //@line 124 "arraymodule.c"
        var $7=($6); //@line 124 "arraymodule.c"
        $x=$7; //@line 124 "arraymodule.c"
        var $8=$x; //@line 125 "arraymodule.c"
        var $9=($8) > 127; //@line 125 "arraymodule.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 125 "arraymodule.c"
      case 1: // $bb
        var $10=$x; //@line 126 "arraymodule.c"
        var $11=($10) - 256; //@line 126 "arraymodule.c"
        $x=$11; //@line 126 "arraymodule.c"
        __label__ = 2; break; //@line 126 "arraymodule.c"
      case 2: // $bb1
        var $12=$x; //@line 127 "arraymodule.c"
        var $13=_PyInt_FromLong($12); //@line 127 "arraymodule.c"
        $0=$13; //@line 127 "arraymodule.c"
        var $14=$0; //@line 127 "arraymodule.c"
        $retval=$14; //@line 127 "arraymodule.c"
        var $retval2=$retval; //@line 127 "arraymodule.c"
        ;
        return $retval2; //@line 127 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _b_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 2; _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 137 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, __str1, allocate([$x,0,0,0], ["i16*",0,0,0], ALLOC_STACK)); //@line 137 "arraymodule.c"
        var $3=($2)==0; //@line 137 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 137 "arraymodule.c"
      case 1: // $bb
        $0=-1; //@line 138 "arraymodule.c"
        __label__ = 9; break; //@line 138 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 139 "arraymodule.c"
        var $5=($4) < -128; //@line 139 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 139 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_OverflowError]; //@line 140 "arraymodule.c"
        _PyErr_SetString($6, __str2); //@line 140 "arraymodule.c"
        $0=-1; //@line 142 "arraymodule.c"
        __label__ = 9; break; //@line 142 "arraymodule.c"
      case 4: // $bb3
        var $7=HEAP[$x]; //@line 144 "arraymodule.c"
        var $8=($7) > 127; //@line 144 "arraymodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 144 "arraymodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_OverflowError]; //@line 145 "arraymodule.c"
        _PyErr_SetString($9, __str3); //@line 145 "arraymodule.c"
        $0=-1; //@line 147 "arraymodule.c"
        __label__ = 9; break; //@line 147 "arraymodule.c"
      case 6: // $bb5
        var $10=$i_addr; //@line 149 "arraymodule.c"
        var $11=($10) >= 0; //@line 149 "arraymodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 149 "arraymodule.c"
      case 7: // $bb6
        var $12=$ap_addr; //@line 150 "arraymodule.c"
        var $13=$12+12; //@line 150 "arraymodule.c"
        var $14=HEAP[$13]; //@line 150 "arraymodule.c"
        var $15=HEAP[$x]; //@line 150 "arraymodule.c"
        var $16=((($15)) & 255); //@line 150 "arraymodule.c"
        var $17=$i_addr; //@line 150 "arraymodule.c"
        var $18=$14+$17; //@line 150 "arraymodule.c"
        HEAP[$18]=$16; //@line 150 "arraymodule.c"
        __label__ = 8; break; //@line 150 "arraymodule.c"
      case 8: // $bb7
        $0=0; //@line 151 "arraymodule.c"
        __label__ = 9; break; //@line 151 "arraymodule.c"
      case 9: // $bb8
        var $19=$0; //@line 138 "arraymodule.c"
        $retval=$19; //@line 138 "arraymodule.c"
        var $retval9=$retval; //@line 138 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 138 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _BB_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    var $x;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 157 "arraymodule.c"
    var $2=$1+12; //@line 157 "arraymodule.c"
    var $3=HEAP[$2]; //@line 157 "arraymodule.c"
    var $4=$i_addr; //@line 157 "arraymodule.c"
    var $5=$3+$4; //@line 157 "arraymodule.c"
    var $6=HEAP[$5]; //@line 157 "arraymodule.c"
    var $7=($6); //@line 157 "arraymodule.c"
    $x=$7; //@line 157 "arraymodule.c"
    var $8=$x; //@line 158 "arraymodule.c"
    var $9=_PyInt_FromLong($8); //@line 158 "arraymodule.c"
    $0=$9; //@line 158 "arraymodule.c"
    var $10=$0; //@line 158 "arraymodule.c"
    $retval=$10; //@line 158 "arraymodule.c"
    var $retval1=$retval; //@line 158 "arraymodule.c"
    ;
    return $retval1; //@line 158 "arraymodule.c"
  }
  

  function _BB_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 1; _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 166 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, __str4, allocate([$x,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 166 "arraymodule.c"
        var $3=($2)==0; //@line 166 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 166 "arraymodule.c"
      case 1: // $bb
        $0=-1; //@line 167 "arraymodule.c"
        __label__ = 5; break; //@line 167 "arraymodule.c"
      case 2: // $bb1
        var $4=$i_addr; //@line 168 "arraymodule.c"
        var $5=($4) >= 0; //@line 168 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 168 "arraymodule.c"
      case 3: // $bb2
        var $6=$ap_addr; //@line 169 "arraymodule.c"
        var $7=$6+12; //@line 169 "arraymodule.c"
        var $8=HEAP[$7]; //@line 169 "arraymodule.c"
        var $9=HEAP[$x]; //@line 169 "arraymodule.c"
        var $10=$i_addr; //@line 169 "arraymodule.c"
        var $11=$8+$10; //@line 169 "arraymodule.c"
        HEAP[$11]=$9; //@line 169 "arraymodule.c"
        __label__ = 4; break; //@line 169 "arraymodule.c"
      case 4: // $bb3
        $0=0; //@line 170 "arraymodule.c"
        __label__ = 5; break; //@line 170 "arraymodule.c"
      case 5: // $bb4
        var $12=$0; //@line 167 "arraymodule.c"
        $retval=$12; //@line 167 "arraymodule.c"
        var $retval5=$retval; //@line 167 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 167 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _u_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 177 "arraymodule.c"
    var $2=$1+12; //@line 177 "arraymodule.c"
    var $3=HEAP[$2]; //@line 177 "arraymodule.c"
    var $4=$3; //@line 177 "arraymodule.c"
    var $5=$i_addr; //@line 177 "arraymodule.c"
    var $6=$4+2*$5; //@line 177 "arraymodule.c"
    var $7=_PyUnicodeUCS2_FromUnicode($6, 1); //@line 177 "arraymodule.c"
    $0=$7; //@line 177 "arraymodule.c"
    var $8=$0; //@line 177 "arraymodule.c"
    $retval=$8; //@line 177 "arraymodule.c"
    var $retval1=$retval; //@line 177 "arraymodule.c"
    ;
    return $retval1; //@line 177 "arraymodule.c"
  }
  

  function _u_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $p=__stackBase__;
        var $len=__stackBase__+4;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 186 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, __str5, allocate([$p,0,0,0,$len,0,0,0], ["i16**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 186 "arraymodule.c"
        var $3=($2)==0; //@line 186 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 186 "arraymodule.c"
      case 1: // $bb
        $0=-1; //@line 187 "arraymodule.c"
        __label__ = 7; break; //@line 187 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$len]; //@line 188 "arraymodule.c"
        var $5=($4)!=1; //@line 188 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 188 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_TypeError]; //@line 189 "arraymodule.c"
        _PyErr_SetString($6, __str6); //@line 189 "arraymodule.c"
        $0=-1; //@line 191 "arraymodule.c"
        __label__ = 7; break; //@line 191 "arraymodule.c"
      case 4: // $bb3
        var $7=$i_addr; //@line 193 "arraymodule.c"
        var $8=($7) >= 0; //@line 193 "arraymodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 193 "arraymodule.c"
      case 5: // $bb4
        var $9=$ap_addr; //@line 194 "arraymodule.c"
        var $10=$9+12; //@line 194 "arraymodule.c"
        var $11=HEAP[$10]; //@line 194 "arraymodule.c"
        var $12=$11; //@line 194 "arraymodule.c"
        var $13=HEAP[$p]; //@line 194 "arraymodule.c"
        var $14=$13; //@line 194 "arraymodule.c"
        var $15=HEAP[$14]; //@line 194 "arraymodule.c"
        var $16=$i_addr; //@line 194 "arraymodule.c"
        var $17=$12+2*$16; //@line 194 "arraymodule.c"
        HEAP[$17]=$15; //@line 194 "arraymodule.c"
        __label__ = 6; break; //@line 194 "arraymodule.c"
      case 6: // $bb5
        $0=0; //@line 195 "arraymodule.c"
        __label__ = 7; break; //@line 195 "arraymodule.c"
      case 7: // $bb6
        var $18=$0; //@line 187 "arraymodule.c"
        $retval=$18; //@line 187 "arraymodule.c"
        var $retval7=$retval; //@line 187 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 187 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _h_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 202 "arraymodule.c"
    var $2=$1+12; //@line 202 "arraymodule.c"
    var $3=HEAP[$2]; //@line 202 "arraymodule.c"
    var $4=$3; //@line 202 "arraymodule.c"
    var $5=$i_addr; //@line 202 "arraymodule.c"
    var $6=$4+2*$5; //@line 202 "arraymodule.c"
    var $7=HEAP[$6]; //@line 202 "arraymodule.c"
    var $8=($7); //@line 202 "arraymodule.c"
    var $9=_PyInt_FromLong($8); //@line 202 "arraymodule.c"
    $0=$9; //@line 202 "arraymodule.c"
    var $10=$0; //@line 202 "arraymodule.c"
    $retval=$10; //@line 202 "arraymodule.c"
    var $retval1=$retval; //@line 202 "arraymodule.c"
    ;
    return $retval1; //@line 202 "arraymodule.c"
  }
  

  function _h_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 2; _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 210 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, __str1, allocate([$x,0,0,0], ["i16*",0,0,0], ALLOC_STACK)); //@line 210 "arraymodule.c"
        var $3=($2)==0; //@line 210 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 210 "arraymodule.c"
      case 1: // $bb
        $0=-1; //@line 211 "arraymodule.c"
        __label__ = 5; break; //@line 211 "arraymodule.c"
      case 2: // $bb1
        var $4=$i_addr; //@line 212 "arraymodule.c"
        var $5=($4) >= 0; //@line 212 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 212 "arraymodule.c"
      case 3: // $bb2
        var $6=$ap_addr; //@line 213 "arraymodule.c"
        var $7=$6+12; //@line 213 "arraymodule.c"
        var $8=HEAP[$7]; //@line 213 "arraymodule.c"
        var $9=$8; //@line 213 "arraymodule.c"
        var $10=HEAP[$x]; //@line 213 "arraymodule.c"
        var $11=$i_addr; //@line 213 "arraymodule.c"
        var $12=$9+2*$11; //@line 213 "arraymodule.c"
        HEAP[$12]=$10; //@line 213 "arraymodule.c"
        __label__ = 4; break; //@line 213 "arraymodule.c"
      case 4: // $bb3
        $0=0; //@line 214 "arraymodule.c"
        __label__ = 5; break; //@line 214 "arraymodule.c"
      case 5: // $bb4
        var $13=$0; //@line 211 "arraymodule.c"
        $retval=$13; //@line 211 "arraymodule.c"
        var $retval5=$retval; //@line 211 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 211 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _HH_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 220 "arraymodule.c"
    var $2=$1+12; //@line 220 "arraymodule.c"
    var $3=HEAP[$2]; //@line 220 "arraymodule.c"
    var $4=$3; //@line 220 "arraymodule.c"
    var $5=$i_addr; //@line 220 "arraymodule.c"
    var $6=$4+2*$5; //@line 220 "arraymodule.c"
    var $7=HEAP[$6]; //@line 220 "arraymodule.c"
    var $8=($7); //@line 220 "arraymodule.c"
    var $9=_PyInt_FromLong($8); //@line 220 "arraymodule.c"
    $0=$9; //@line 220 "arraymodule.c"
    var $10=$0; //@line 220 "arraymodule.c"
    $retval=$10; //@line 220 "arraymodule.c"
    var $retval1=$retval; //@line 220 "arraymodule.c"
    ;
    return $retval1; //@line 220 "arraymodule.c"
  }
  

  function _HH_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 229 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, __str7, allocate([$x,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 229 "arraymodule.c"
        var $3=($2)==0; //@line 229 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 229 "arraymodule.c"
      case 1: // $bb
        $0=-1; //@line 230 "arraymodule.c"
        __label__ = 9; break; //@line 230 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$x]; //@line 231 "arraymodule.c"
        var $5=($4) < 0; //@line 231 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 231 "arraymodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_OverflowError]; //@line 232 "arraymodule.c"
        _PyErr_SetString($6, __str8); //@line 232 "arraymodule.c"
        $0=-1; //@line 234 "arraymodule.c"
        __label__ = 9; break; //@line 234 "arraymodule.c"
      case 4: // $bb3
        var $7=HEAP[$x]; //@line 236 "arraymodule.c"
        var $8=($7) > 65535; //@line 236 "arraymodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 236 "arraymodule.c"
      case 5: // $bb4
        var $9=HEAP[_PyExc_OverflowError]; //@line 237 "arraymodule.c"
        _PyErr_SetString($9, __str9); //@line 237 "arraymodule.c"
        $0=-1; //@line 239 "arraymodule.c"
        __label__ = 9; break; //@line 239 "arraymodule.c"
      case 6: // $bb5
        var $10=$i_addr; //@line 241 "arraymodule.c"
        var $11=($10) >= 0; //@line 241 "arraymodule.c"
        if ($11) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 241 "arraymodule.c"
      case 7: // $bb6
        var $12=$ap_addr; //@line 242 "arraymodule.c"
        var $13=$12+12; //@line 242 "arraymodule.c"
        var $14=HEAP[$13]; //@line 242 "arraymodule.c"
        var $15=$14; //@line 242 "arraymodule.c"
        var $16=HEAP[$x]; //@line 242 "arraymodule.c"
        var $17=((($16)) & 65535); //@line 242 "arraymodule.c"
        var $18=$i_addr; //@line 242 "arraymodule.c"
        var $19=$15+2*$18; //@line 242 "arraymodule.c"
        HEAP[$19]=$17; //@line 242 "arraymodule.c"
        __label__ = 8; break; //@line 242 "arraymodule.c"
      case 8: // $bb7
        $0=0; //@line 243 "arraymodule.c"
        __label__ = 9; break; //@line 243 "arraymodule.c"
      case 9: // $bb8
        var $20=$0; //@line 230 "arraymodule.c"
        $retval=$20; //@line 230 "arraymodule.c"
        var $retval9=$retval; //@line 230 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 230 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _i_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 249 "arraymodule.c"
    var $2=$1+12; //@line 249 "arraymodule.c"
    var $3=HEAP[$2]; //@line 249 "arraymodule.c"
    var $4=$3; //@line 249 "arraymodule.c"
    var $5=$i_addr; //@line 249 "arraymodule.c"
    var $6=$4+4*$5; //@line 249 "arraymodule.c"
    var $7=HEAP[$6]; //@line 249 "arraymodule.c"
    var $8=_PyInt_FromLong($7); //@line 249 "arraymodule.c"
    $0=$8; //@line 249 "arraymodule.c"
    var $9=$0; //@line 249 "arraymodule.c"
    $retval=$9; //@line 249 "arraymodule.c"
    var $retval1=$retval; //@line 249 "arraymodule.c"
    ;
    return $retval1; //@line 249 "arraymodule.c"
  }
  

  function _i_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 257 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, __str7, allocate([$x,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 257 "arraymodule.c"
        var $3=($2)==0; //@line 257 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 257 "arraymodule.c"
      case 1: // $bb
        $0=-1; //@line 258 "arraymodule.c"
        __label__ = 5; break; //@line 258 "arraymodule.c"
      case 2: // $bb1
        var $4=$i_addr; //@line 259 "arraymodule.c"
        var $5=($4) >= 0; //@line 259 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 259 "arraymodule.c"
      case 3: // $bb2
        var $6=$ap_addr; //@line 260 "arraymodule.c"
        var $7=$6+12; //@line 260 "arraymodule.c"
        var $8=HEAP[$7]; //@line 260 "arraymodule.c"
        var $9=$8; //@line 260 "arraymodule.c"
        var $10=HEAP[$x]; //@line 260 "arraymodule.c"
        var $11=$i_addr; //@line 260 "arraymodule.c"
        var $12=$9+4*$11; //@line 260 "arraymodule.c"
        HEAP[$12]=$10; //@line 260 "arraymodule.c"
        __label__ = 4; break; //@line 260 "arraymodule.c"
      case 4: // $bb3
        $0=0; //@line 261 "arraymodule.c"
        __label__ = 5; break; //@line 261 "arraymodule.c"
      case 5: // $bb4
        var $13=$0; //@line 258 "arraymodule.c"
        $retval=$13; //@line 258 "arraymodule.c"
        var $retval5=$retval; //@line 258 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 258 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _II_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 267 "arraymodule.c"
    var $2=$1+12; //@line 267 "arraymodule.c"
    var $3=HEAP[$2]; //@line 267 "arraymodule.c"
    var $4=$3; //@line 267 "arraymodule.c"
    var $5=$i_addr; //@line 267 "arraymodule.c"
    var $6=$4+4*$5; //@line 267 "arraymodule.c"
    var $7=HEAP[$6]; //@line 267 "arraymodule.c"
    var $8=_PyLong_FromUnsignedLong($7); //@line 267 "arraymodule.c"
    $0=$8; //@line 267 "arraymodule.c"
    var $9=$0; //@line 267 "arraymodule.c"
    $retval=$9; //@line 267 "arraymodule.c"
    var $retval1=$retval; //@line 267 "arraymodule.c"
    ;
    return $retval1; //@line 267 "arraymodule.c"
  }
  

  function _II_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x;
        var $y=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 275 "arraymodule.c"
        var $2=$1+4; //@line 275 "arraymodule.c"
        var $3=HEAP[$2]; //@line 275 "arraymodule.c"
        var $4=$3+84; //@line 275 "arraymodule.c"
        var $5=HEAP[$4]; //@line 275 "arraymodule.c"
        var $6=($5) & 16777216; //@line 275 "arraymodule.c"
        var $7=($6)!=0; //@line 275 "arraymodule.c"
        var $8=$v_addr; //@line 276 "arraymodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 275 "arraymodule.c"
      case 1: // $bb
        var $9=_PyLong_AsUnsignedLong($8); //@line 276 "arraymodule.c"
        $x=$9; //@line 276 "arraymodule.c"
        var $10=$x; //@line 277 "arraymodule.c"
        var $11=($10)==-1; //@line 277 "arraymodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 9; break; } //@line 277 "arraymodule.c"
      case 2: // $bb1
        var $12=_PyErr_Occurred(); //@line 277 "arraymodule.c"
        var $13=($12)!=0; //@line 277 "arraymodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 277 "arraymodule.c"
      case 3: // $bb2
        $0=-1; //@line 278 "arraymodule.c"
        __label__ = 12; break; //@line 278 "arraymodule.c"
      case 4: // $bb4
        var $14=__PyArg_Parse_SizeT($8, __str10, allocate([$y,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 282 "arraymodule.c"
        var $15=($14)==0; //@line 282 "arraymodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 282 "arraymodule.c"
      case 5: // $bb5
        $0=-1; //@line 283 "arraymodule.c"
        __label__ = 12; break; //@line 283 "arraymodule.c"
      case 6: // $bb6
        var $16=HEAP[$y]; //@line 284 "arraymodule.c"
        var $17=($16) < 0; //@line 284 "arraymodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 284 "arraymodule.c"
      case 7: // $bb7
        var $18=HEAP[_PyExc_OverflowError]; //@line 285 "arraymodule.c"
        _PyErr_SetString($18, __str11); //@line 285 "arraymodule.c"
        $0=-1; //@line 287 "arraymodule.c"
        __label__ = 12; break; //@line 287 "arraymodule.c"
      case 8: // $bb8
        var $19=HEAP[$y]; //@line 289 "arraymodule.c"
        $x=$19; //@line 289 "arraymodule.c"
        __label__ = 9; break; //@line 289 "arraymodule.c"
      case 9: // $bb9
        var $20=$i_addr; //@line 298 "arraymodule.c"
        var $21=($20) >= 0; //@line 298 "arraymodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 298 "arraymodule.c"
      case 10: // $bb10
        var $22=$ap_addr; //@line 299 "arraymodule.c"
        var $23=$22+12; //@line 299 "arraymodule.c"
        var $24=HEAP[$23]; //@line 299 "arraymodule.c"
        var $25=$24; //@line 299 "arraymodule.c"
        var $26=$i_addr; //@line 299 "arraymodule.c"
        var $27=$25+4*$26; //@line 299 "arraymodule.c"
        var $28=$x; //@line 299 "arraymodule.c"
        HEAP[$27]=$28; //@line 299 "arraymodule.c"
        __label__ = 11; break; //@line 299 "arraymodule.c"
      case 11: // $bb11
        $0=0; //@line 300 "arraymodule.c"
        __label__ = 12; break; //@line 300 "arraymodule.c"
      case 12: // $bb12
        var $29=$0; //@line 278 "arraymodule.c"
        $retval=$29; //@line 278 "arraymodule.c"
        var $retval13=$retval; //@line 278 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 278 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _l_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 306 "arraymodule.c"
    var $2=$1+12; //@line 306 "arraymodule.c"
    var $3=HEAP[$2]; //@line 306 "arraymodule.c"
    var $4=$3; //@line 306 "arraymodule.c"
    var $5=$i_addr; //@line 306 "arraymodule.c"
    var $6=$4+4*$5; //@line 306 "arraymodule.c"
    var $7=HEAP[$6]; //@line 306 "arraymodule.c"
    var $8=_PyInt_FromLong($7); //@line 306 "arraymodule.c"
    $0=$8; //@line 306 "arraymodule.c"
    var $9=$0; //@line 306 "arraymodule.c"
    $retval=$9; //@line 306 "arraymodule.c"
    var $retval1=$retval; //@line 306 "arraymodule.c"
    ;
    return $retval1; //@line 306 "arraymodule.c"
  }
  

  function _l_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 313 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, __str10, allocate([$x,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 313 "arraymodule.c"
        var $3=($2)==0; //@line 313 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 313 "arraymodule.c"
      case 1: // $bb
        $0=-1; //@line 314 "arraymodule.c"
        __label__ = 5; break; //@line 314 "arraymodule.c"
      case 2: // $bb1
        var $4=$i_addr; //@line 315 "arraymodule.c"
        var $5=($4) >= 0; //@line 315 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 315 "arraymodule.c"
      case 3: // $bb2
        var $6=$ap_addr; //@line 316 "arraymodule.c"
        var $7=$6+12; //@line 316 "arraymodule.c"
        var $8=HEAP[$7]; //@line 316 "arraymodule.c"
        var $9=$8; //@line 316 "arraymodule.c"
        var $10=HEAP[$x]; //@line 316 "arraymodule.c"
        var $11=$i_addr; //@line 316 "arraymodule.c"
        var $12=$9+4*$11; //@line 316 "arraymodule.c"
        HEAP[$12]=$10; //@line 316 "arraymodule.c"
        __label__ = 4; break; //@line 316 "arraymodule.c"
      case 4: // $bb3
        $0=0; //@line 317 "arraymodule.c"
        __label__ = 5; break; //@line 317 "arraymodule.c"
      case 5: // $bb4
        var $13=$0; //@line 314 "arraymodule.c"
        $retval=$13; //@line 314 "arraymodule.c"
        var $retval5=$retval; //@line 314 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 314 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _LL_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 323 "arraymodule.c"
    var $2=$1+12; //@line 323 "arraymodule.c"
    var $3=HEAP[$2]; //@line 323 "arraymodule.c"
    var $4=$3; //@line 323 "arraymodule.c"
    var $5=$i_addr; //@line 323 "arraymodule.c"
    var $6=$4+4*$5; //@line 323 "arraymodule.c"
    var $7=HEAP[$6]; //@line 323 "arraymodule.c"
    var $8=_PyLong_FromUnsignedLong($7); //@line 323 "arraymodule.c"
    $0=$8; //@line 323 "arraymodule.c"
    var $9=$0; //@line 323 "arraymodule.c"
    $retval=$9; //@line 323 "arraymodule.c"
    var $retval1=$retval; //@line 323 "arraymodule.c"
    ;
    return $retval1; //@line 323 "arraymodule.c"
  }
  

  function _LL_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x;
        var $y=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 330 "arraymodule.c"
        var $2=$1+4; //@line 330 "arraymodule.c"
        var $3=HEAP[$2]; //@line 330 "arraymodule.c"
        var $4=$3+84; //@line 330 "arraymodule.c"
        var $5=HEAP[$4]; //@line 330 "arraymodule.c"
        var $6=($5) & 16777216; //@line 330 "arraymodule.c"
        var $7=($6)!=0; //@line 330 "arraymodule.c"
        var $8=$v_addr; //@line 331 "arraymodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 330 "arraymodule.c"
      case 1: // $bb
        var $9=_PyLong_AsUnsignedLong($8); //@line 331 "arraymodule.c"
        $x=$9; //@line 331 "arraymodule.c"
        var $10=$x; //@line 332 "arraymodule.c"
        var $11=($10)==-1; //@line 332 "arraymodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 9; break; } //@line 332 "arraymodule.c"
      case 2: // $bb1
        var $12=_PyErr_Occurred(); //@line 332 "arraymodule.c"
        var $13=($12)!=0; //@line 332 "arraymodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 332 "arraymodule.c"
      case 3: // $bb2
        $0=-1; //@line 333 "arraymodule.c"
        __label__ = 12; break; //@line 333 "arraymodule.c"
      case 4: // $bb4
        var $14=__PyArg_Parse_SizeT($8, __str10, allocate([$y,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 337 "arraymodule.c"
        var $15=($14)==0; //@line 337 "arraymodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 337 "arraymodule.c"
      case 5: // $bb5
        $0=-1; //@line 338 "arraymodule.c"
        __label__ = 12; break; //@line 338 "arraymodule.c"
      case 6: // $bb6
        var $16=HEAP[$y]; //@line 339 "arraymodule.c"
        var $17=($16) < 0; //@line 339 "arraymodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 339 "arraymodule.c"
      case 7: // $bb7
        var $18=HEAP[_PyExc_OverflowError]; //@line 340 "arraymodule.c"
        _PyErr_SetString($18, __str12); //@line 340 "arraymodule.c"
        $0=-1; //@line 342 "arraymodule.c"
        __label__ = 12; break; //@line 342 "arraymodule.c"
      case 8: // $bb8
        var $19=HEAP[$y]; //@line 344 "arraymodule.c"
        $x=$19; //@line 344 "arraymodule.c"
        __label__ = 9; break; //@line 344 "arraymodule.c"
      case 9: // $bb9
        var $20=$i_addr; //@line 353 "arraymodule.c"
        var $21=($20) >= 0; //@line 353 "arraymodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 353 "arraymodule.c"
      case 10: // $bb10
        var $22=$ap_addr; //@line 354 "arraymodule.c"
        var $23=$22+12; //@line 354 "arraymodule.c"
        var $24=HEAP[$23]; //@line 354 "arraymodule.c"
        var $25=$24; //@line 354 "arraymodule.c"
        var $26=$i_addr; //@line 354 "arraymodule.c"
        var $27=$25+4*$26; //@line 354 "arraymodule.c"
        var $28=$x; //@line 354 "arraymodule.c"
        HEAP[$27]=$28; //@line 354 "arraymodule.c"
        __label__ = 11; break; //@line 354 "arraymodule.c"
      case 11: // $bb11
        $0=0; //@line 355 "arraymodule.c"
        __label__ = 12; break; //@line 355 "arraymodule.c"
      case 12: // $bb12
        var $29=$0; //@line 333 "arraymodule.c"
        $retval=$29; //@line 333 "arraymodule.c"
        var $retval13=$retval; //@line 333 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 333 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _f_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 361 "arraymodule.c"
    var $2=$1+12; //@line 361 "arraymodule.c"
    var $3=HEAP[$2]; //@line 361 "arraymodule.c"
    var $4=$3; //@line 361 "arraymodule.c"
    var $5=$i_addr; //@line 361 "arraymodule.c"
    var $6=$4+4*$5; //@line 361 "arraymodule.c"
    var $7=HEAP[$6]; //@line 361 "arraymodule.c"
    var $8=($7); //@line 361 "arraymodule.c"
    var $9=_PyFloat_FromDouble($8); //@line 361 "arraymodule.c"
    $0=$9; //@line 361 "arraymodule.c"
    var $10=$0; //@line 361 "arraymodule.c"
    $retval=$10; //@line 361 "arraymodule.c"
    var $retval1=$retval; //@line 361 "arraymodule.c"
    ;
    return $retval1; //@line 361 "arraymodule.c"
  }
  

  function _f_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 368 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, __str13, allocate([$x,0,0,0], ["float*",0,0,0], ALLOC_STACK)); //@line 368 "arraymodule.c"
        var $3=($2)==0; //@line 368 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 368 "arraymodule.c"
      case 1: // $bb
        $0=-1; //@line 369 "arraymodule.c"
        __label__ = 5; break; //@line 369 "arraymodule.c"
      case 2: // $bb1
        var $4=$i_addr; //@line 370 "arraymodule.c"
        var $5=($4) >= 0; //@line 370 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 370 "arraymodule.c"
      case 3: // $bb2
        var $6=$ap_addr; //@line 371 "arraymodule.c"
        var $7=$6+12; //@line 371 "arraymodule.c"
        var $8=HEAP[$7]; //@line 371 "arraymodule.c"
        var $9=$8; //@line 371 "arraymodule.c"
        var $10=HEAP[$x]; //@line 371 "arraymodule.c"
        var $11=$i_addr; //@line 371 "arraymodule.c"
        var $12=$9+4*$11; //@line 371 "arraymodule.c"
        HEAP[$12]=$10; //@line 371 "arraymodule.c"
        __label__ = 4; break; //@line 371 "arraymodule.c"
      case 4: // $bb3
        $0=0; //@line 372 "arraymodule.c"
        __label__ = 5; break; //@line 372 "arraymodule.c"
      case 5: // $bb4
        var $13=$0; //@line 369 "arraymodule.c"
        $retval=$13; //@line 369 "arraymodule.c"
        var $retval5=$retval; //@line 369 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 369 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _d_getitem($ap, $i) {
    ;
    var __label__;
  
    var $ap_addr;
    var $i_addr;
    var $retval;
    var $0;
    $ap_addr=$ap;
    $i_addr=$i;
    var $1=$ap_addr; //@line 378 "arraymodule.c"
    var $2=$1+12; //@line 378 "arraymodule.c"
    var $3=HEAP[$2]; //@line 378 "arraymodule.c"
    var $4=$3; //@line 378 "arraymodule.c"
    var $5=$i_addr; //@line 378 "arraymodule.c"
    var $6=$4+8*$5; //@line 378 "arraymodule.c"
    var $7=HEAP[$6]; //@line 378 "arraymodule.c"
    var $8=_PyFloat_FromDouble($7); //@line 378 "arraymodule.c"
    $0=$8; //@line 378 "arraymodule.c"
    var $9=$0; //@line 378 "arraymodule.c"
    $retval=$9; //@line 378 "arraymodule.c"
    var $retval1=$retval; //@line 378 "arraymodule.c"
    ;
    return $retval1; //@line 378 "arraymodule.c"
  }
  

  function _d_setitem($ap, $i, $v) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ap_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $x=__stackBase__;
        $ap_addr=$ap;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$v_addr; //@line 385 "arraymodule.c"
        var $2=__PyArg_Parse_SizeT($1, __str14, allocate([$x,0,0,0], ["double*",0,0,0], ALLOC_STACK)); //@line 385 "arraymodule.c"
        var $3=($2)==0; //@line 385 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 385 "arraymodule.c"
      case 1: // $bb
        $0=-1; //@line 386 "arraymodule.c"
        __label__ = 5; break; //@line 386 "arraymodule.c"
      case 2: // $bb1
        var $4=$i_addr; //@line 387 "arraymodule.c"
        var $5=($4) >= 0; //@line 387 "arraymodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 387 "arraymodule.c"
      case 3: // $bb2
        var $6=$ap_addr; //@line 388 "arraymodule.c"
        var $7=$6+12; //@line 388 "arraymodule.c"
        var $8=HEAP[$7]; //@line 388 "arraymodule.c"
        var $9=$8; //@line 388 "arraymodule.c"
        var $10=HEAP[$x]; //@line 388 "arraymodule.c"
        var $11=$i_addr; //@line 388 "arraymodule.c"
        var $12=$9+8*$11; //@line 388 "arraymodule.c"
        HEAP[$12]=$10; //@line 388 "arraymodule.c"
        __label__ = 4; break; //@line 388 "arraymodule.c"
      case 4: // $bb3
        $0=0; //@line 389 "arraymodule.c"
        __label__ = 5; break; //@line 389 "arraymodule.c"
      case 5: // $bb4
        var $13=$0; //@line 386 "arraymodule.c"
        $retval=$13; //@line 386 "arraymodule.c"
        var $retval5=$retval; //@line 386 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 386 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _newarrayobject($type, $size, $descr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $size_addr;
        var $descr_addr;
        var $retval;
        var $iftmp_44;
        var $iftmp_42;
        var $iftmp_40;
        var $0;
        var $op;
        var $nbytes;
        $type_addr=$type;
        $size_addr=$size;
        $descr_addr=$descr;
        var $1=$size_addr; //@line 421 "arraymodule.c"
        var $2=($1) < 0; //@line 421 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 421 "arraymodule.c"
      case 1: // $bb
        __PyErr_BadInternalCall(__str15, 422); //@line 422 "arraymodule.c"
        $0=0; //@line 423 "arraymodule.c"
        __label__ = 22; break; //@line 423 "arraymodule.c"
      case 2: // $bb1
        var $3=$descr_addr; //@line 426 "arraymodule.c"
        var $4=$3+4; //@line 426 "arraymodule.c"
        var $5=HEAP[$4]; //@line 426 "arraymodule.c"
        var $6=$size_addr; //@line 426 "arraymodule.c"
        var $7=($6) * ($5); //@line 426 "arraymodule.c"
        $nbytes=$7; //@line 426 "arraymodule.c"
        var $8=$descr_addr; //@line 428 "arraymodule.c"
        var $9=$8+4; //@line 428 "arraymodule.c"
        var $10=HEAP[$9]; //@line 428 "arraymodule.c"
        var $11=$nbytes; //@line 428 "arraymodule.c"
        var $12=Math.floor(($11)/($10)); //@line 428 "arraymodule.c"
        var $13=$size_addr; //@line 428 "arraymodule.c"
        var $14=($12)!=($13); //@line 428 "arraymodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 428 "arraymodule.c"
      case 3: // $bb2
        var $15=_PyErr_NoMemory(); //@line 429 "arraymodule.c"
        $0=$15; //@line 429 "arraymodule.c"
        __label__ = 22; break; //@line 429 "arraymodule.c"
      case 4: // $bb3
        var $16=$type_addr; //@line 431 "arraymodule.c"
        var $17=$16+152; //@line 431 "arraymodule.c"
        var $18=HEAP[$17]; //@line 431 "arraymodule.c"
        var $19=$type_addr; //@line 431 "arraymodule.c"
        var $20=FUNCTION_TABLE[$18]($19, 0); //@line 431 "arraymodule.c"
        var $21=$20; //@line 431 "arraymodule.c"
        $op=$21; //@line 431 "arraymodule.c"
        var $22=$op; //@line 432 "arraymodule.c"
        var $23=($22)==0; //@line 432 "arraymodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 432 "arraymodule.c"
      case 5: // $bb4
        $0=0; //@line 433 "arraymodule.c"
        __label__ = 22; break; //@line 433 "arraymodule.c"
      case 6: // $bb5
        var $24=$op; //@line 435 "arraymodule.c"
        var $25=$24+20; //@line 435 "arraymodule.c"
        var $26=$descr_addr; //@line 435 "arraymodule.c"
        HEAP[$25]=$26; //@line 435 "arraymodule.c"
        var $27=$op; //@line 436 "arraymodule.c"
        var $28=$27+16; //@line 436 "arraymodule.c"
        var $29=$size_addr; //@line 436 "arraymodule.c"
        HEAP[$28]=$29; //@line 436 "arraymodule.c"
        var $30=$op; //@line 437 "arraymodule.c"
        var $31=$30+24; //@line 437 "arraymodule.c"
        HEAP[$31]=0; //@line 437 "arraymodule.c"
        var $32=$op; //@line 438 "arraymodule.c"
        var $33=$32; //@line 438 "arraymodule.c"
        var $34=$33+8; //@line 438 "arraymodule.c"
        var $35=$size_addr; //@line 438 "arraymodule.c"
        HEAP[$34]=$35; //@line 438 "arraymodule.c"
        var $36=$size_addr; //@line 439 "arraymodule.c"
        var $37=($36) <= 0; //@line 439 "arraymodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 439 "arraymodule.c"
      case 7: // $bb6
        var $38=$op; //@line 440 "arraymodule.c"
        var $39=$38+12; //@line 440 "arraymodule.c"
        HEAP[$39]=0; //@line 440 "arraymodule.c"
        __label__ = 21; break; //@line 440 "arraymodule.c"
      case 8: // $bb7
        var $40=$nbytes; //@line 443 "arraymodule.c"
        var $41=($40) >= 0; //@line 443 "arraymodule.c"
        if ($41) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 443 "arraymodule.c"
      case 9: // $bb8
        var $42=$nbytes; //@line 443 "arraymodule.c"
        var $43=($42) >= 0; //@line 443 "arraymodule.c"
        if ($43) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 443 "arraymodule.c"
      case 10: // $bb9
        var $44=$nbytes; //@line 443 "arraymodule.c"
        var $45=($44)!=0; //@line 443 "arraymodule.c"
        if ($45) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 443 "arraymodule.c"
      case 11: // $bb10
        var $46=$nbytes; //@line 443 "arraymodule.c"
        $iftmp_44=$46; //@line 443 "arraymodule.c"
        __label__ = 13; break; //@line 443 "arraymodule.c"
      case 12: // $bb11
        $iftmp_44=1; //@line 443 "arraymodule.c"
        __label__ = 13; break; //@line 443 "arraymodule.c"
      case 13: // $bb12
        var $47=$iftmp_44; //@line 443 "arraymodule.c"
        var $48=_malloc($47); //@line 443 "arraymodule.c"
        $iftmp_42=$48; //@line 443 "arraymodule.c"
        __label__ = 15; break; //@line 443 "arraymodule.c"
      case 14: // $bb13
        $iftmp_42=0; //@line 443 "arraymodule.c"
        __label__ = 15; break; //@line 443 "arraymodule.c"
      case 15: // $bb14
        var $49=$iftmp_42; //@line 443 "arraymodule.c"
        $iftmp_40=$49; //@line 443 "arraymodule.c"
        __label__ = 17; break; //@line 443 "arraymodule.c"
      case 16: // $bb15
        $iftmp_40=0; //@line 443 "arraymodule.c"
        __label__ = 17; break; //@line 443 "arraymodule.c"
      case 17: // $bb16
        var $50=$op; //@line 443 "arraymodule.c"
        var $51=$50+12; //@line 443 "arraymodule.c"
        var $52=$iftmp_40; //@line 443 "arraymodule.c"
        HEAP[$51]=$52; //@line 443 "arraymodule.c"
        var $53=$op; //@line 444 "arraymodule.c"
        var $54=$53+12; //@line 444 "arraymodule.c"
        var $55=HEAP[$54]; //@line 444 "arraymodule.c"
        var $56=($55)==0; //@line 444 "arraymodule.c"
        if ($56) { __label__ = 18; break; } else { __label__ = 21; break; } //@line 444 "arraymodule.c"
      case 18: // $bb17
        var $57=$op; //@line 445 "arraymodule.c"
        var $58=$57; //@line 445 "arraymodule.c"
        var $59=$58; //@line 445 "arraymodule.c"
        var $60=HEAP[$59]; //@line 445 "arraymodule.c"
        var $61=($60) - 1; //@line 445 "arraymodule.c"
        var $62=$58; //@line 445 "arraymodule.c"
        HEAP[$62]=$61; //@line 445 "arraymodule.c"
        var $63=$58; //@line 445 "arraymodule.c"
        var $64=HEAP[$63]; //@line 445 "arraymodule.c"
        var $65=($64)==0; //@line 445 "arraymodule.c"
        if ($65) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 445 "arraymodule.c"
      case 19: // $bb18
        var $66=$op; //@line 445 "arraymodule.c"
        var $67=$66; //@line 445 "arraymodule.c"
        var $68=$67+4; //@line 445 "arraymodule.c"
        var $69=HEAP[$68]; //@line 445 "arraymodule.c"
        var $70=$69+24; //@line 445 "arraymodule.c"
        var $71=HEAP[$70]; //@line 445 "arraymodule.c"
        var $72=$op; //@line 445 "arraymodule.c"
        var $73=$72; //@line 445 "arraymodule.c"
        FUNCTION_TABLE[$71]($73); //@line 445 "arraymodule.c"
        __label__ = 20; break; //@line 445 "arraymodule.c"
      case 20: // $bb19
        var $74=_PyErr_NoMemory(); //@line 446 "arraymodule.c"
        $0=$74; //@line 446 "arraymodule.c"
        __label__ = 22; break; //@line 446 "arraymodule.c"
      case 21: // $bb20
        var $75=$op; //@line 449 "arraymodule.c"
        var $76=$75; //@line 449 "arraymodule.c"
        $0=$76; //@line 449 "arraymodule.c"
        __label__ = 22; break; //@line 449 "arraymodule.c"
      case 22: // $bb21
        var $77=$0; //@line 423 "arraymodule.c"
        $retval=$77; //@line 423 "arraymodule.c"
        var $retval22=$retval; //@line 423 "arraymodule.c"
        ;
        return $retval22; //@line 423 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getarrayitem($op, $i) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $op_addr;
        var $i_addr;
        var $retval;
        var $0;
        var $ap;
        $op_addr=$op;
        $i_addr=$i;
        var $1=$op_addr; //@line 456 "arraymodule.c"
        var $2=$1+4; //@line 456 "arraymodule.c"
        var $3=HEAP[$2]; //@line 456 "arraymodule.c"
        var $4=($3)!=(_Arraytype); //@line 456 "arraymodule.c"
        if ($4) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 4; break; } //@line 456 "arraymodule.c"
      case 1: // $bb
        var $5=$op_addr; //@line 456 "arraymodule.c"
        var $6=$5+4; //@line 456 "arraymodule.c"
        var $7=HEAP[$6]; //@line 456 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 456 "arraymodule.c"
        var $9=($8)==0; //@line 456 "arraymodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 456 "arraymodule.c"
      case 2: // $bb1
        ___assert_fail(__str16, __str15, 456, ___PRETTY_FUNCTION___8858); //@line 456 "arraymodule.c"
        throw "Reached an unreachable!" //@line 456 "arraymodule.c"
      case 3: // $bb2thread_pre_split
        var $_pr=$i_addr;
        __lastLabel__ = 3; __label__ = 4; break;
      case 4: // $bb2
        var $10=__lastLabel__ == 3 ? $_pr : ($i);
        var $11=$op_addr; //@line 457 "arraymodule.c"
        var $12=$11; //@line 457 "arraymodule.c"
        $ap=$12; //@line 457 "arraymodule.c"
        var $13=($10) < 0; //@line 458 "arraymodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 458 "arraymodule.c"
      case 5: // $bb3
        var $14=$ap; //@line 458 "arraymodule.c"
        var $15=$14; //@line 458 "arraymodule.c"
        var $16=$15+8; //@line 458 "arraymodule.c"
        var $17=HEAP[$16]; //@line 458 "arraymodule.c"
        var $18=$i_addr; //@line 458 "arraymodule.c"
        var $19=($17) <= ($18); //@line 458 "arraymodule.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 458 "arraymodule.c"
      case 6: // $bb4
        ___assert_fail(__str17, __str15, 458, ___PRETTY_FUNCTION___8858); //@line 458 "arraymodule.c"
        throw "Reached an unreachable!" //@line 458 "arraymodule.c"
      case 7: // $bb5
        var $20=$ap; //@line 459 "arraymodule.c"
        var $21=$20+20; //@line 459 "arraymodule.c"
        var $22=HEAP[$21]; //@line 459 "arraymodule.c"
        var $23=$22+8; //@line 459 "arraymodule.c"
        var $24=HEAP[$23]; //@line 459 "arraymodule.c"
        var $25=$ap; //@line 459 "arraymodule.c"
        var $26=$i_addr; //@line 459 "arraymodule.c"
        var $27=FUNCTION_TABLE[$24]($25, $26); //@line 459 "arraymodule.c"
        $0=$27; //@line 459 "arraymodule.c"
        var $28=$0; //@line 459 "arraymodule.c"
        $retval=$28; //@line 459 "arraymodule.c"
        var $retval6=$retval; //@line 459 "arraymodule.c"
        ;
        return $retval6; //@line 459 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ins1($self, $where, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $where_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $items;
        var $n;
        $self_addr=$self;
        $where_addr=$where;
        $v_addr=$v;
        var $1=$self_addr; //@line 466 "arraymodule.c"
        var $2=$1; //@line 466 "arraymodule.c"
        var $3=$2+8; //@line 466 "arraymodule.c"
        var $4=HEAP[$3]; //@line 466 "arraymodule.c"
        $n=$4; //@line 466 "arraymodule.c"
        var $5=$v_addr; //@line 467 "arraymodule.c"
        var $6=($5)==0; //@line 467 "arraymodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 467 "arraymodule.c"
      case 1: // $bb
        __PyErr_BadInternalCall(__str15, 468); //@line 468 "arraymodule.c"
        $0=-1; //@line 469 "arraymodule.c"
        __label__ = 14; break; //@line 469 "arraymodule.c"
      case 2: // $bb1
        var $7=$self_addr; //@line 471 "arraymodule.c"
        var $8=$7+20; //@line 471 "arraymodule.c"
        var $9=HEAP[$8]; //@line 471 "arraymodule.c"
        var $10=$9+12; //@line 471 "arraymodule.c"
        var $11=HEAP[$10]; //@line 471 "arraymodule.c"
        var $12=$self_addr; //@line 471 "arraymodule.c"
        var $13=$v_addr; //@line 471 "arraymodule.c"
        var $14=FUNCTION_TABLE[$11]($12, -1, $13); //@line 471 "arraymodule.c"
        var $15=($14) < 0; //@line 471 "arraymodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 471 "arraymodule.c"
      case 3: // $bb2
        $0=-1; //@line 472 "arraymodule.c"
        __label__ = 14; break; //@line 472 "arraymodule.c"
      case 4: // $bb3
        var $16=$n; //@line 474 "arraymodule.c"
        var $17=($16) + 1; //@line 474 "arraymodule.c"
        var $18=$self_addr; //@line 474 "arraymodule.c"
        var $19=_array_resize($18, $17); //@line 474 "arraymodule.c"
        var $20=($19)==-1; //@line 474 "arraymodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 474 "arraymodule.c"
      case 5: // $bb4
        $0=-1; //@line 475 "arraymodule.c"
        __label__ = 14; break; //@line 475 "arraymodule.c"
      case 6: // $bb5
        var $21=$self_addr; //@line 476 "arraymodule.c"
        var $22=$21+12; //@line 476 "arraymodule.c"
        var $23=HEAP[$22]; //@line 476 "arraymodule.c"
        $items=$23; //@line 476 "arraymodule.c"
        var $24=$where_addr; //@line 477 "arraymodule.c"
        var $25=($24) < 0; //@line 477 "arraymodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 477 "arraymodule.c"
      case 7: // $bb6
        var $26=$where_addr; //@line 478 "arraymodule.c"
        var $27=$n; //@line 478 "arraymodule.c"
        var $28=($27) + ($26); //@line 478 "arraymodule.c"
        $where_addr=$28; //@line 478 "arraymodule.c"
        var $29=$where_addr; //@line 479 "arraymodule.c"
        var $30=($29) < 0; //@line 479 "arraymodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 479 "arraymodule.c"
      case 8: // $bb7
        $where_addr=0; //@line 480 "arraymodule.c"
        __label__ = 9; break; //@line 480 "arraymodule.c"
      case 9: // $bb8
        var $31=$where_addr; //@line 482 "arraymodule.c"
        var $32=$n; //@line 482 "arraymodule.c"
        var $33=($31) > ($32); //@line 482 "arraymodule.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 482 "arraymodule.c"
      case 10: // $bb9
        var $34=$n; //@line 483 "arraymodule.c"
        $where_addr=$34; //@line 483 "arraymodule.c"
        __label__ = 11; break; //@line 483 "arraymodule.c"
      case 11: // $bb10
        var $35=$where_addr; //@line 485 "arraymodule.c"
        var $36=$n; //@line 485 "arraymodule.c"
        var $37=($35)!=($36); //@line 485 "arraymodule.c"
        if ($37) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 485 "arraymodule.c"
      case 12: // $bb11
        var $38=$n; //@line 486 "arraymodule.c"
        var $39=$where_addr; //@line 486 "arraymodule.c"
        var $40=($38) - ($39); //@line 486 "arraymodule.c"
        var $41=$self_addr; //@line 486 "arraymodule.c"
        var $42=$41+20; //@line 486 "arraymodule.c"
        var $43=HEAP[$42]; //@line 486 "arraymodule.c"
        var $44=$43+4; //@line 486 "arraymodule.c"
        var $45=HEAP[$44]; //@line 486 "arraymodule.c"
        var $46=($45) * ($40); //@line 486 "arraymodule.c"
        var $47=$self_addr; //@line 486 "arraymodule.c"
        var $48=$47+20; //@line 486 "arraymodule.c"
        var $49=HEAP[$48]; //@line 486 "arraymodule.c"
        var $50=$49+4; //@line 486 "arraymodule.c"
        var $51=HEAP[$50]; //@line 486 "arraymodule.c"
        var $52=$where_addr; //@line 486 "arraymodule.c"
        var $53=($52) * ($51); //@line 486 "arraymodule.c"
        var $54=$items; //@line 486 "arraymodule.c"
        var $55=$54+$53; //@line 486 "arraymodule.c"
        var $56=$where_addr; //@line 486 "arraymodule.c"
        var $57=($56) + 1; //@line 486 "arraymodule.c"
        var $58=$self_addr; //@line 486 "arraymodule.c"
        var $59=$58+20; //@line 486 "arraymodule.c"
        var $60=HEAP[$59]; //@line 486 "arraymodule.c"
        var $61=$60+4; //@line 486 "arraymodule.c"
        var $62=HEAP[$61]; //@line 486 "arraymodule.c"
        var $63=($62) * ($57); //@line 486 "arraymodule.c"
        var $64=$items; //@line 486 "arraymodule.c"
        var $65=$64+$63; //@line 486 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($65, $55, $46, 1, 0); //@line 486 "arraymodule.c"
        __label__ = 13; break; //@line 486 "arraymodule.c"
      case 13: // $bb12
        var $66=$self_addr; //@line 489 "arraymodule.c"
        var $67=$66+20; //@line 489 "arraymodule.c"
        var $68=HEAP[$67]; //@line 489 "arraymodule.c"
        var $69=$68+12; //@line 489 "arraymodule.c"
        var $70=HEAP[$69]; //@line 489 "arraymodule.c"
        var $71=$self_addr; //@line 489 "arraymodule.c"
        var $72=$where_addr; //@line 489 "arraymodule.c"
        var $73=$v_addr; //@line 489 "arraymodule.c"
        var $74=FUNCTION_TABLE[$70]($71, $72, $73); //@line 489 "arraymodule.c"
        $0=$74; //@line 489 "arraymodule.c"
        __label__ = 14; break; //@line 489 "arraymodule.c"
      case 14: // $bb13
        var $75=$0; //@line 469 "arraymodule.c"
        $retval=$75; //@line 469 "arraymodule.c"
        var $retval14=$retval; //@line 469 "arraymodule.c"
        ;
        return $retval14; //@line 469 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_dealloc($op) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $op_addr;
        $op_addr=$op;
        var $0=$op_addr; //@line 497 "arraymodule.c"
        var $1=$0+24; //@line 497 "arraymodule.c"
        var $2=HEAP[$1]; //@line 497 "arraymodule.c"
        var $3=($2)!=0; //@line 497 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 497 "arraymodule.c"
      case 1: // $bb
        var $4=$op_addr; //@line 498 "arraymodule.c"
        var $5=$4; //@line 498 "arraymodule.c"
        _PyObject_ClearWeakRefs($5); //@line 498 "arraymodule.c"
        __label__ = 2; break; //@line 498 "arraymodule.c"
      case 2: // $bb1
        var $6=$op_addr; //@line 499 "arraymodule.c"
        var $7=$6+12; //@line 499 "arraymodule.c"
        var $8=HEAP[$7]; //@line 499 "arraymodule.c"
        var $9=($8)!=0; //@line 499 "arraymodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 499 "arraymodule.c"
      case 3: // $bb2
        var $10=$op_addr; //@line 500 "arraymodule.c"
        var $11=$10+12; //@line 500 "arraymodule.c"
        var $12=HEAP[$11]; //@line 500 "arraymodule.c"
        _free($12); //@line 500 "arraymodule.c"
        __label__ = 4; break; //@line 500 "arraymodule.c"
      case 4: // $bb3
        var $13=$op_addr; //@line 501 "arraymodule.c"
        var $14=$13; //@line 501 "arraymodule.c"
        var $15=$14+4; //@line 501 "arraymodule.c"
        var $16=HEAP[$15]; //@line 501 "arraymodule.c"
        var $17=$16+160; //@line 501 "arraymodule.c"
        var $18=HEAP[$17]; //@line 501 "arraymodule.c"
        var $19=$op_addr; //@line 501 "arraymodule.c"
        var $20=$19; //@line 501 "arraymodule.c"
        FUNCTION_TABLE[$18]($20); //@line 501 "arraymodule.c"
        ;
        return; //@line 502 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_richcompare($v, $w, $op) {
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
        var $va;
        var $wa;
        var $vi;
        var $wi;
        var $i;
        var $k;
        var $res;
        var $vs;
        var $ws;
        var $cmp;
        $v_addr=$v;
        $w_addr=$w;
        $op_addr=$op;
        $vi=0; //@line 508 "arraymodule.c"
        $wi=0; //@line 509 "arraymodule.c"
        var $1=$v_addr; //@line 513 "arraymodule.c"
        var $2=$1+4; //@line 513 "arraymodule.c"
        var $3=HEAP[$2]; //@line 513 "arraymodule.c"
        var $4=($3)==(_Arraytype); //@line 513 "arraymodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 513 "arraymodule.c"
      case 1: // $bb
        var $5=$v_addr; //@line 513 "arraymodule.c"
        var $6=$5+4; //@line 513 "arraymodule.c"
        var $7=HEAP[$6]; //@line 513 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 513 "arraymodule.c"
        var $9=($8)==0; //@line 513 "arraymodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 2; break; } //@line 513 "arraymodule.c"
      case 2: // $bb1
        var $10=$w_addr; //@line 513 "arraymodule.c"
        var $11=$10+4; //@line 513 "arraymodule.c"
        var $12=HEAP[$11]; //@line 513 "arraymodule.c"
        var $13=($12)==(_Arraytype); //@line 513 "arraymodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 3; break; } //@line 513 "arraymodule.c"
      case 3: // $bb2
        var $14=$w_addr; //@line 513 "arraymodule.c"
        var $15=$14+4; //@line 513 "arraymodule.c"
        var $16=HEAP[$15]; //@line 513 "arraymodule.c"
        var $17=_PyType_IsSubtype($16, _Arraytype); //@line 513 "arraymodule.c"
        var $18=($17)==0; //@line 513 "arraymodule.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 513 "arraymodule.c"
      case 4: // $bb3
        var $19=HEAP[__Py_NotImplementedStruct]; //@line 514 "arraymodule.c"
        var $20=($19) + 1; //@line 514 "arraymodule.c"
        HEAP[__Py_NotImplementedStruct]=$20; //@line 514 "arraymodule.c"
        $0=__Py_NotImplementedStruct; //@line 515 "arraymodule.c"
        __label__ = 55; break; //@line 515 "arraymodule.c"
      case 5: // $bb4
        var $21=$v_addr; //@line 518 "arraymodule.c"
        var $22=$21; //@line 518 "arraymodule.c"
        $va=$22; //@line 518 "arraymodule.c"
        var $23=$w_addr; //@line 519 "arraymodule.c"
        var $24=$23; //@line 519 "arraymodule.c"
        $wa=$24; //@line 519 "arraymodule.c"
        var $25=$va; //@line 521 "arraymodule.c"
        var $26=$25; //@line 521 "arraymodule.c"
        var $27=$26+8; //@line 521 "arraymodule.c"
        var $28=HEAP[$27]; //@line 521 "arraymodule.c"
        var $29=$wa; //@line 521 "arraymodule.c"
        var $30=$29; //@line 521 "arraymodule.c"
        var $31=$30+8; //@line 521 "arraymodule.c"
        var $32=HEAP[$31]; //@line 521 "arraymodule.c"
        var $33=($28)!=($32); //@line 521 "arraymodule.c"
        if ($33) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 521 "arraymodule.c"
      case 6: // $bb5
        var $34=$op_addr; //@line 521 "arraymodule.c"
        var $35=($34)==2; //@line 521 "arraymodule.c"
        var $36=$op_addr; //@line 521 "arraymodule.c"
        var $37=($36)==3; //@line 521 "arraymodule.c"
        var $or_cond=($35) | ($37);
        if ($or_cond) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 521 "arraymodule.c"
      case 7: // $bb7
        var $38=$op_addr; //@line 523 "arraymodule.c"
        var $39=($38)==2; //@line 523 "arraymodule.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 523 "arraymodule.c"
      case 8: // $bb8
        $res=__Py_ZeroStruct; //@line 524 "arraymodule.c"
        __label__ = 10; break; //@line 524 "arraymodule.c"
      case 9: // $bb9
        $res=__Py_TrueStruct; //@line 526 "arraymodule.c"
        __label__ = 10; break; //@line 526 "arraymodule.c"
      case 10: // $bb10
        var $40=$res; //@line 527 "arraymodule.c"
        var $41=$40; //@line 527 "arraymodule.c"
        var $42=HEAP[$41]; //@line 527 "arraymodule.c"
        var $43=($42) + 1; //@line 527 "arraymodule.c"
        var $44=$res; //@line 527 "arraymodule.c"
        var $45=$44; //@line 527 "arraymodule.c"
        HEAP[$45]=$43; //@line 527 "arraymodule.c"
        var $46=$res; //@line 528 "arraymodule.c"
        $0=$46; //@line 528 "arraymodule.c"
        __label__ = 55; break; //@line 528 "arraymodule.c"
      case 11: // $bb11
        $k=1; //@line 532 "arraymodule.c"
        $i=0; //@line 533 "arraymodule.c"
        __label__ = 30; break; //@line 533 "arraymodule.c"
      case 12: // $bb12
        var $47=$v_addr; //@line 534 "arraymodule.c"
        var $48=$i; //@line 534 "arraymodule.c"
        var $49=_getarrayitem($47, $48); //@line 534 "arraymodule.c"
        $vi=$49; //@line 534 "arraymodule.c"
        var $50=$w_addr; //@line 535 "arraymodule.c"
        var $51=$i; //@line 535 "arraymodule.c"
        var $52=_getarrayitem($50, $51); //@line 535 "arraymodule.c"
        $wi=$52; //@line 535 "arraymodule.c"
        var $53=$vi; //@line 536 "arraymodule.c"
        var $54=($53)==0; //@line 536 "arraymodule.c"
        if ($54) { __lastLabel__ = 12; __label__ = 18; break; } else { __lastLabel__ = 12; __label__ = 13; break; } //@line 536 "arraymodule.c"
      case 13: // $bb13
        var $55=$wi; //@line 536 "arraymodule.c"
        var $56=($55)==0; //@line 536 "arraymodule.c"
        var $_pr=$vi;
        if ($56) { __label__ = 14; break; } else { __label__ = 22; break; } //@line 536 "arraymodule.c"
      case 14: // $bb14
        var $57=($_pr)!=0; //@line 537 "arraymodule.c"
        if ($57) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 537 "arraymodule.c"
      case 15: // $bb15
        var $58=$vi; //@line 537 "arraymodule.c"
        var $59=$58; //@line 537 "arraymodule.c"
        var $60=HEAP[$59]; //@line 537 "arraymodule.c"
        var $61=($60) - 1; //@line 537 "arraymodule.c"
        var $62=$vi; //@line 537 "arraymodule.c"
        var $63=$62; //@line 537 "arraymodule.c"
        HEAP[$63]=$61; //@line 537 "arraymodule.c"
        var $64=$vi; //@line 537 "arraymodule.c"
        var $65=$64; //@line 537 "arraymodule.c"
        var $66=HEAP[$65]; //@line 537 "arraymodule.c"
        var $67=($66)==0; //@line 537 "arraymodule.c"
        if ($67) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 537 "arraymodule.c"
      case 16: // $bb16
        var $68=$vi; //@line 537 "arraymodule.c"
        var $69=$68+4; //@line 537 "arraymodule.c"
        var $70=HEAP[$69]; //@line 537 "arraymodule.c"
        var $71=$70+24; //@line 537 "arraymodule.c"
        var $72=HEAP[$71]; //@line 537 "arraymodule.c"
        var $73=$vi; //@line 537 "arraymodule.c"
        FUNCTION_TABLE[$72]($73); //@line 537 "arraymodule.c"
        __label__ = 17; break; //@line 537 "arraymodule.c"
      case 17: // $bb17thread_pre_split
        var $_pr3=$wi;
        __lastLabel__ = 17; __label__ = 18; break;
      case 18: // $bb17
        var $74=__lastLabel__ == 17 ? $_pr3 : ($52);
        var $75=($74)!=0; //@line 538 "arraymodule.c"
        if ($75) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 538 "arraymodule.c"
      case 19: // $bb18
        var $76=$wi; //@line 538 "arraymodule.c"
        var $77=$76; //@line 538 "arraymodule.c"
        var $78=HEAP[$77]; //@line 538 "arraymodule.c"
        var $79=($78) - 1; //@line 538 "arraymodule.c"
        var $80=$wi; //@line 538 "arraymodule.c"
        var $81=$80; //@line 538 "arraymodule.c"
        HEAP[$81]=$79; //@line 538 "arraymodule.c"
        var $82=$wi; //@line 538 "arraymodule.c"
        var $83=$82; //@line 538 "arraymodule.c"
        var $84=HEAP[$83]; //@line 538 "arraymodule.c"
        var $85=($84)==0; //@line 538 "arraymodule.c"
        if ($85) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 538 "arraymodule.c"
      case 20: // $bb19
        var $86=$wi; //@line 538 "arraymodule.c"
        var $87=$86+4; //@line 538 "arraymodule.c"
        var $88=HEAP[$87]; //@line 538 "arraymodule.c"
        var $89=$88+24; //@line 538 "arraymodule.c"
        var $90=HEAP[$89]; //@line 538 "arraymodule.c"
        var $91=$wi; //@line 538 "arraymodule.c"
        FUNCTION_TABLE[$90]($91); //@line 538 "arraymodule.c"
        __label__ = 21; break; //@line 538 "arraymodule.c"
      case 21: // $bb20
        $0=0; //@line 539 "arraymodule.c"
        __label__ = 55; break; //@line 539 "arraymodule.c"
      case 22: // $bb21
        var $92=$wi; //@line 541 "arraymodule.c"
        var $93=_PyObject_RichCompareBool($_pr, $92, 2); //@line 541 "arraymodule.c"
        $k=$93; //@line 541 "arraymodule.c"
        var $94=$k; //@line 542 "arraymodule.c"
        var $95=($94)==0; //@line 542 "arraymodule.c"
        if ($95) { __label__ = 45; break; } else { __label__ = 23; break; } //@line 542 "arraymodule.c"
      case 23: // $bb22
        var $96=$vi; //@line 544 "arraymodule.c"
        var $97=$96; //@line 544 "arraymodule.c"
        var $98=HEAP[$97]; //@line 544 "arraymodule.c"
        var $99=($98) - 1; //@line 544 "arraymodule.c"
        var $100=$vi; //@line 544 "arraymodule.c"
        var $101=$100; //@line 544 "arraymodule.c"
        HEAP[$101]=$99; //@line 544 "arraymodule.c"
        var $102=$vi; //@line 544 "arraymodule.c"
        var $103=$102; //@line 544 "arraymodule.c"
        var $104=HEAP[$103]; //@line 544 "arraymodule.c"
        var $105=($104)==0; //@line 544 "arraymodule.c"
        if ($105) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 544 "arraymodule.c"
      case 24: // $bb23
        var $106=$vi; //@line 544 "arraymodule.c"
        var $107=$106+4; //@line 544 "arraymodule.c"
        var $108=HEAP[$107]; //@line 544 "arraymodule.c"
        var $109=$108+24; //@line 544 "arraymodule.c"
        var $110=HEAP[$109]; //@line 544 "arraymodule.c"
        var $111=$vi; //@line 544 "arraymodule.c"
        FUNCTION_TABLE[$110]($111); //@line 544 "arraymodule.c"
        __label__ = 25; break; //@line 544 "arraymodule.c"
      case 25: // $bb24
        var $112=$wi; //@line 545 "arraymodule.c"
        var $113=$112; //@line 545 "arraymodule.c"
        var $114=HEAP[$113]; //@line 545 "arraymodule.c"
        var $115=($114) - 1; //@line 545 "arraymodule.c"
        var $116=$wi; //@line 545 "arraymodule.c"
        var $117=$116; //@line 545 "arraymodule.c"
        HEAP[$117]=$115; //@line 545 "arraymodule.c"
        var $118=$wi; //@line 545 "arraymodule.c"
        var $119=$118; //@line 545 "arraymodule.c"
        var $120=HEAP[$119]; //@line 545 "arraymodule.c"
        var $121=($120)==0; //@line 545 "arraymodule.c"
        if ($121) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 545 "arraymodule.c"
      case 26: // $bb25
        var $122=$wi; //@line 545 "arraymodule.c"
        var $123=$122+4; //@line 545 "arraymodule.c"
        var $124=HEAP[$123]; //@line 545 "arraymodule.c"
        var $125=$124+24; //@line 545 "arraymodule.c"
        var $126=HEAP[$125]; //@line 545 "arraymodule.c"
        var $127=$wi; //@line 545 "arraymodule.c"
        FUNCTION_TABLE[$126]($127); //@line 545 "arraymodule.c"
        __label__ = 27; break; //@line 545 "arraymodule.c"
      case 27: // $bb26
        var $128=$k; //@line 546 "arraymodule.c"
        var $129=($128) < 0; //@line 546 "arraymodule.c"
        if ($129) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 546 "arraymodule.c"
      case 28: // $bb27
        $0=0; //@line 547 "arraymodule.c"
        __label__ = 55; break; //@line 547 "arraymodule.c"
      case 29: // $bb28
        var $130=$i; //@line 533 "arraymodule.c"
        var $131=($130) + 1; //@line 533 "arraymodule.c"
        $i=$131; //@line 533 "arraymodule.c"
        __label__ = 30; break; //@line 533 "arraymodule.c"
      case 30: // $bb29
        var $132=$va; //@line 533 "arraymodule.c"
        var $133=$132; //@line 533 "arraymodule.c"
        var $134=$133+8; //@line 533 "arraymodule.c"
        var $135=HEAP[$134]; //@line 533 "arraymodule.c"
        var $136=$i; //@line 533 "arraymodule.c"
        var $137=($135) <= ($136); //@line 533 "arraymodule.c"
        if ($137) { __label__ = 32; break; } else { __label__ = 31; break; } //@line 533 "arraymodule.c"
      case 31: // $bb30
        var $138=$wa; //@line 533 "arraymodule.c"
        var $139=$138; //@line 533 "arraymodule.c"
        var $140=$139+8; //@line 533 "arraymodule.c"
        var $141=HEAP[$140]; //@line 533 "arraymodule.c"
        var $142=$i; //@line 533 "arraymodule.c"
        var $143=($141) > ($142); //@line 533 "arraymodule.c"
        if ($143) { __label__ = 12; break; } else { __label__ = 32; break; } //@line 533 "arraymodule.c"
      case 32: // $bb31
        var $_pr2=$k;
        var $144=($_pr2)!=0; //@line 550 "arraymodule.c"
        if ($144) { __label__ = 33; break; } else { __label__ = 45; break; } //@line 550 "arraymodule.c"
      case 33: // $bb32
        var $145=$va; //@line 552 "arraymodule.c"
        var $146=$145; //@line 552 "arraymodule.c"
        var $147=$146+8; //@line 552 "arraymodule.c"
        var $148=HEAP[$147]; //@line 552 "arraymodule.c"
        $vs=$148; //@line 552 "arraymodule.c"
        var $149=$wa; //@line 553 "arraymodule.c"
        var $150=$149; //@line 553 "arraymodule.c"
        var $151=$150+8; //@line 553 "arraymodule.c"
        var $152=HEAP[$151]; //@line 553 "arraymodule.c"
        $ws=$152; //@line 553 "arraymodule.c"
        var $153=$op_addr; //@line 555 "arraymodule.c"
        if ($153 == 0) {
          __label__ = 34; break;
        }
        else if ($153 == 1) {
          __label__ = 35; break;
        }
        else if ($153 == 2) {
          __label__ = 36; break;
        }
        else if ($153 == 3) {
          __label__ = 37; break;
        }
        else if ($153 == 4) {
          __label__ = 38; break;
        }
        else if ($153 == 5) {
          __label__ = 39; break;
        }
        else {
        __label__ = 40; break;
        }
        
      case 34: // $bb33
        var $154=$vs; //@line 556 "arraymodule.c"
        var $155=$ws; //@line 556 "arraymodule.c"
        var $156=($154) < ($155); //@line 556 "arraymodule.c"
        var $157=($156); //@line 556 "arraymodule.c"
        $cmp=$157; //@line 556 "arraymodule.c"
        __lastLabel__ = 34; __label__ = 41; break; //@line 556 "arraymodule.c"
      case 35: // $bb34
        var $158=$vs; //@line 557 "arraymodule.c"
        var $159=$ws; //@line 557 "arraymodule.c"
        var $160=($158) <= ($159); //@line 557 "arraymodule.c"
        var $161=($160); //@line 557 "arraymodule.c"
        $cmp=$161; //@line 557 "arraymodule.c"
        __lastLabel__ = 35; __label__ = 41; break; //@line 557 "arraymodule.c"
      case 36: // $bb35
        var $162=$vs; //@line 558 "arraymodule.c"
        var $163=$ws; //@line 558 "arraymodule.c"
        var $164=($162)==($163); //@line 558 "arraymodule.c"
        var $165=($164); //@line 558 "arraymodule.c"
        $cmp=$165; //@line 558 "arraymodule.c"
        __lastLabel__ = 36; __label__ = 41; break; //@line 558 "arraymodule.c"
      case 37: // $bb36
        var $166=$vs; //@line 559 "arraymodule.c"
        var $167=$ws; //@line 559 "arraymodule.c"
        var $168=($166)!=($167); //@line 559 "arraymodule.c"
        var $169=($168); //@line 559 "arraymodule.c"
        $cmp=$169; //@line 559 "arraymodule.c"
        __lastLabel__ = 37; __label__ = 41; break; //@line 559 "arraymodule.c"
      case 38: // $bb37
        var $170=$vs; //@line 560 "arraymodule.c"
        var $171=$ws; //@line 560 "arraymodule.c"
        var $172=($170) > ($171); //@line 560 "arraymodule.c"
        var $173=($172); //@line 560 "arraymodule.c"
        $cmp=$173; //@line 560 "arraymodule.c"
        __lastLabel__ = 38; __label__ = 41; break; //@line 560 "arraymodule.c"
      case 39: // $bb38
        var $174=$vs; //@line 561 "arraymodule.c"
        var $175=$ws; //@line 561 "arraymodule.c"
        var $176=($174) >= ($175); //@line 561 "arraymodule.c"
        var $177=($176); //@line 561 "arraymodule.c"
        $cmp=$177; //@line 561 "arraymodule.c"
        __lastLabel__ = 39; __label__ = 41; break; //@line 561 "arraymodule.c"
      case 40: // $bb39
        $0=0; //@line 562 "arraymodule.c"
        __label__ = 55; break; //@line 562 "arraymodule.c"
      case 41: // $bb40
        var $178=__lastLabel__ == 39 ? $177 : (__lastLabel__ == 38 ? $173 : (__lastLabel__ == 37 ? $169 : (__lastLabel__ == 36 ? $165 : (__lastLabel__ == 35 ? $161 : ($157)))));
        var $179=($178)!=0; //@line 564 "arraymodule.c"
        if ($179) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 564 "arraymodule.c"
      case 42: // $bb41
        $res=__Py_TrueStruct; //@line 565 "arraymodule.c"
        __label__ = 44; break; //@line 565 "arraymodule.c"
      case 43: // $bb42
        $res=__Py_ZeroStruct; //@line 567 "arraymodule.c"
        __label__ = 44; break; //@line 567 "arraymodule.c"
      case 44: // $bb43
        var $180=$res; //@line 568 "arraymodule.c"
        var $181=$180; //@line 568 "arraymodule.c"
        var $182=HEAP[$181]; //@line 568 "arraymodule.c"
        var $183=($182) + 1; //@line 568 "arraymodule.c"
        var $184=$res; //@line 568 "arraymodule.c"
        var $185=$184; //@line 568 "arraymodule.c"
        HEAP[$185]=$183; //@line 568 "arraymodule.c"
        var $186=$res; //@line 569 "arraymodule.c"
        $0=$186; //@line 569 "arraymodule.c"
        __label__ = 55; break; //@line 569 "arraymodule.c"
      case 45: // $bb44
        var $187=$op_addr; //@line 573 "arraymodule.c"
        var $188=($187)==2; //@line 573 "arraymodule.c"
        if ($188) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 573 "arraymodule.c"
      case 46: // $bb45
        var $189=HEAP[__Py_ZeroStruct]; //@line 574 "arraymodule.c"
        var $190=($189) + 1; //@line 574 "arraymodule.c"
        HEAP[__Py_ZeroStruct]=$190; //@line 574 "arraymodule.c"
        $res=__Py_ZeroStruct; //@line 575 "arraymodule.c"
        __label__ = 50; break; //@line 575 "arraymodule.c"
      case 47: // $bb46
        var $191=$op_addr; //@line 577 "arraymodule.c"
        var $192=($191)==3; //@line 577 "arraymodule.c"
        if ($192) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 577 "arraymodule.c"
      case 48: // $bb47
        var $193=HEAP[__Py_TrueStruct]; //@line 578 "arraymodule.c"
        var $194=($193) + 1; //@line 578 "arraymodule.c"
        HEAP[__Py_TrueStruct]=$194; //@line 578 "arraymodule.c"
        $res=__Py_TrueStruct; //@line 579 "arraymodule.c"
        __label__ = 50; break; //@line 579 "arraymodule.c"
      case 49: // $bb48
        var $195=$vi; //@line 583 "arraymodule.c"
        var $196=$wi; //@line 583 "arraymodule.c"
        var $197=$op_addr; //@line 583 "arraymodule.c"
        var $198=_PyObject_RichCompare($195, $196, $197); //@line 583 "arraymodule.c"
        $res=$198; //@line 583 "arraymodule.c"
        __label__ = 50; break; //@line 583 "arraymodule.c"
      case 50: // $bb49
        var $199=$vi; //@line 585 "arraymodule.c"
        var $200=$199; //@line 585 "arraymodule.c"
        var $201=HEAP[$200]; //@line 585 "arraymodule.c"
        var $202=($201) - 1; //@line 585 "arraymodule.c"
        var $203=$vi; //@line 585 "arraymodule.c"
        var $204=$203; //@line 585 "arraymodule.c"
        HEAP[$204]=$202; //@line 585 "arraymodule.c"
        var $205=$vi; //@line 585 "arraymodule.c"
        var $206=$205; //@line 585 "arraymodule.c"
        var $207=HEAP[$206]; //@line 585 "arraymodule.c"
        var $208=($207)==0; //@line 585 "arraymodule.c"
        if ($208) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 585 "arraymodule.c"
      case 51: // $bb50
        var $209=$vi; //@line 585 "arraymodule.c"
        var $210=$209+4; //@line 585 "arraymodule.c"
        var $211=HEAP[$210]; //@line 585 "arraymodule.c"
        var $212=$211+24; //@line 585 "arraymodule.c"
        var $213=HEAP[$212]; //@line 585 "arraymodule.c"
        var $214=$vi; //@line 585 "arraymodule.c"
        FUNCTION_TABLE[$213]($214); //@line 585 "arraymodule.c"
        __label__ = 52; break; //@line 585 "arraymodule.c"
      case 52: // $bb51
        var $215=$wi; //@line 586 "arraymodule.c"
        var $216=$215; //@line 586 "arraymodule.c"
        var $217=HEAP[$216]; //@line 586 "arraymodule.c"
        var $218=($217) - 1; //@line 586 "arraymodule.c"
        var $219=$wi; //@line 586 "arraymodule.c"
        var $220=$219; //@line 586 "arraymodule.c"
        HEAP[$220]=$218; //@line 586 "arraymodule.c"
        var $221=$wi; //@line 586 "arraymodule.c"
        var $222=$221; //@line 586 "arraymodule.c"
        var $223=HEAP[$222]; //@line 586 "arraymodule.c"
        var $224=($223)==0; //@line 586 "arraymodule.c"
        if ($224) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 586 "arraymodule.c"
      case 53: // $bb52
        var $225=$wi; //@line 586 "arraymodule.c"
        var $226=$225+4; //@line 586 "arraymodule.c"
        var $227=HEAP[$226]; //@line 586 "arraymodule.c"
        var $228=$227+24; //@line 586 "arraymodule.c"
        var $229=HEAP[$228]; //@line 586 "arraymodule.c"
        var $230=$wi; //@line 586 "arraymodule.c"
        FUNCTION_TABLE[$229]($230); //@line 586 "arraymodule.c"
        __label__ = 54; break; //@line 586 "arraymodule.c"
      case 54: // $bb53
        var $231=$res; //@line 587 "arraymodule.c"
        $0=$231; //@line 587 "arraymodule.c"
        __label__ = 55; break; //@line 587 "arraymodule.c"
      case 55: // $bb54
        var $232=$0; //@line 515 "arraymodule.c"
        $retval=$232; //@line 515 "arraymodule.c"
        var $retval55=$retval; //@line 515 "arraymodule.c"
        ;
        return $retval55; //@line 515 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_length($a) {
    ;
    var __label__;
  
    var $a_addr;
    var $retval;
    var $0;
    $a_addr=$a;
    var $1=$a_addr; //@line 593 "arraymodule.c"
    var $2=$1; //@line 593 "arraymodule.c"
    var $3=$2+8; //@line 593 "arraymodule.c"
    var $4=HEAP[$3]; //@line 593 "arraymodule.c"
    $0=$4; //@line 593 "arraymodule.c"
    var $5=$0; //@line 593 "arraymodule.c"
    $retval=$5; //@line 593 "arraymodule.c"
    var $retval1=$retval; //@line 593 "arraymodule.c"
    ;
    return $retval1; //@line 593 "arraymodule.c"
  }
  

  function _array_item($a, $i) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr;
        var $i_addr;
        var $retval;
        var $0;
        $a_addr=$a;
        $i_addr=$i;
        var $1=$i_addr; //@line 599 "arraymodule.c"
        var $2=($1) < 0; //@line 599 "arraymodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 599 "arraymodule.c"
      case 1: // $bb
        var $3=$a_addr; //@line 599 "arraymodule.c"
        var $4=$3; //@line 599 "arraymodule.c"
        var $5=$4+8; //@line 599 "arraymodule.c"
        var $6=HEAP[$5]; //@line 599 "arraymodule.c"
        var $7=$i_addr; //@line 599 "arraymodule.c"
        var $8=($6) <= ($7); //@line 599 "arraymodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 599 "arraymodule.c"
      case 2: // $bb1
        var $9=HEAP[_PyExc_IndexError]; //@line 600 "arraymodule.c"
        _PyErr_SetString($9, __str18); //@line 600 "arraymodule.c"
        $0=0; //@line 601 "arraymodule.c"
        __label__ = 4; break; //@line 601 "arraymodule.c"
      case 3: // $bb2
        var $10=$a_addr; //@line 603 "arraymodule.c"
        var $11=$10; //@line 603 "arraymodule.c"
        var $12=$i_addr; //@line 603 "arraymodule.c"
        var $13=_getarrayitem($11, $12); //@line 603 "arraymodule.c"
        $0=$13; //@line 603 "arraymodule.c"
        __label__ = 4; break; //@line 603 "arraymodule.c"
      case 4: // $bb3
        var $14=$0; //@line 601 "arraymodule.c"
        $retval=$14; //@line 601 "arraymodule.c"
        var $retval4=$retval; //@line 601 "arraymodule.c"
        ;
        return $retval4; //@line 601 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_slice($a, $ilow, $ihigh) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr;
        var $ilow_addr;
        var $ihigh_addr;
        var $retval;
        var $0;
        var $np;
        $a_addr=$a;
        $ilow_addr=$ilow;
        $ihigh_addr=$ihigh;
        var $1=$ilow_addr; //@line 610 "arraymodule.c"
        var $2=($1) < 0; //@line 610 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 610 "arraymodule.c"
      case 1: // $bb
        $ilow_addr=0; //@line 611 "arraymodule.c"
        __label__ = 4; break; //@line 611 "arraymodule.c"
      case 2: // $bb1
        var $3=$a_addr; //@line 612 "arraymodule.c"
        var $4=$3; //@line 612 "arraymodule.c"
        var $5=$4+8; //@line 612 "arraymodule.c"
        var $6=HEAP[$5]; //@line 612 "arraymodule.c"
        var $7=$ilow_addr; //@line 612 "arraymodule.c"
        var $8=($6) < ($7); //@line 612 "arraymodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 612 "arraymodule.c"
      case 3: // $bb2
        var $9=$a_addr; //@line 613 "arraymodule.c"
        var $10=$9; //@line 613 "arraymodule.c"
        var $11=$10+8; //@line 613 "arraymodule.c"
        var $12=HEAP[$11]; //@line 613 "arraymodule.c"
        $ilow_addr=$12; //@line 613 "arraymodule.c"
        __label__ = 4; break; //@line 613 "arraymodule.c"
      case 4: // $bb3
        var $13=$ihigh_addr; //@line 614 "arraymodule.c"
        var $14=($13) < 0; //@line 614 "arraymodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 614 "arraymodule.c"
      case 5: // $bb4
        $ihigh_addr=0; //@line 615 "arraymodule.c"
        __label__ = 6; break; //@line 615 "arraymodule.c"
      case 6: // $bb5
        var $15=$ihigh_addr; //@line 616 "arraymodule.c"
        var $16=$ilow_addr; //@line 616 "arraymodule.c"
        var $17=($15) < ($16); //@line 616 "arraymodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 616 "arraymodule.c"
      case 7: // $bb6
        var $18=$ilow_addr; //@line 617 "arraymodule.c"
        $ihigh_addr=$18; //@line 617 "arraymodule.c"
        __label__ = 10; break; //@line 617 "arraymodule.c"
      case 8: // $bb7
        var $19=$a_addr; //@line 618 "arraymodule.c"
        var $20=$19; //@line 618 "arraymodule.c"
        var $21=$20+8; //@line 618 "arraymodule.c"
        var $22=HEAP[$21]; //@line 618 "arraymodule.c"
        var $23=$ihigh_addr; //@line 618 "arraymodule.c"
        var $24=($22) < ($23); //@line 618 "arraymodule.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 618 "arraymodule.c"
      case 9: // $bb8
        var $25=$a_addr; //@line 619 "arraymodule.c"
        var $26=$25; //@line 619 "arraymodule.c"
        var $27=$26+8; //@line 619 "arraymodule.c"
        var $28=HEAP[$27]; //@line 619 "arraymodule.c"
        $ihigh_addr=$28; //@line 619 "arraymodule.c"
        __label__ = 10; break; //@line 619 "arraymodule.c"
      case 10: // $bb9
        var $29=$a_addr; //@line 620 "arraymodule.c"
        var $30=$29+20; //@line 620 "arraymodule.c"
        var $31=HEAP[$30]; //@line 620 "arraymodule.c"
        var $32=$ihigh_addr; //@line 620 "arraymodule.c"
        var $33=$ilow_addr; //@line 620 "arraymodule.c"
        var $34=($32) - ($33); //@line 620 "arraymodule.c"
        var $35=_newarrayobject(_Arraytype, $34, $31); //@line 620 "arraymodule.c"
        var $36=$35; //@line 620 "arraymodule.c"
        $np=$36; //@line 620 "arraymodule.c"
        var $37=($36)==0; //@line 621 "arraymodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 621 "arraymodule.c"
      case 11: // $bb10
        $0=0; //@line 622 "arraymodule.c"
        __label__ = 13; break; //@line 622 "arraymodule.c"
      case 12: // $bb11
        var $38=$ihigh_addr; //@line 623 "arraymodule.c"
        var $39=$ilow_addr; //@line 623 "arraymodule.c"
        var $40=($38) - ($39); //@line 623 "arraymodule.c"
        var $41=$a_addr; //@line 623 "arraymodule.c"
        var $42=$41+20; //@line 623 "arraymodule.c"
        var $43=HEAP[$42]; //@line 623 "arraymodule.c"
        var $44=$43+4; //@line 623 "arraymodule.c"
        var $45=HEAP[$44]; //@line 623 "arraymodule.c"
        var $46=($45) * ($40); //@line 623 "arraymodule.c"
        var $47=$a_addr; //@line 623 "arraymodule.c"
        var $48=$47+12; //@line 623 "arraymodule.c"
        var $49=HEAP[$48]; //@line 623 "arraymodule.c"
        var $50=$a_addr; //@line 623 "arraymodule.c"
        var $51=$50+20; //@line 623 "arraymodule.c"
        var $52=HEAP[$51]; //@line 623 "arraymodule.c"
        var $53=$52+4; //@line 623 "arraymodule.c"
        var $54=HEAP[$53]; //@line 623 "arraymodule.c"
        var $55=$ilow_addr; //@line 623 "arraymodule.c"
        var $56=($55) * ($54); //@line 623 "arraymodule.c"
        var $57=$49+$56; //@line 623 "arraymodule.c"
        var $58=$np; //@line 623 "arraymodule.c"
        var $59=$58+12; //@line 623 "arraymodule.c"
        var $60=HEAP[$59]; //@line 623 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($60, $57, $46, 1, 0); //@line 623 "arraymodule.c"
        var $61=$np; //@line 625 "arraymodule.c"
        var $62=$61; //@line 625 "arraymodule.c"
        $0=$62; //@line 625 "arraymodule.c"
        __label__ = 13; break; //@line 625 "arraymodule.c"
      case 13: // $bb12
        var $63=$0; //@line 622 "arraymodule.c"
        $retval=$63; //@line 622 "arraymodule.c"
        var $retval13=$retval; //@line 622 "arraymodule.c"
        ;
        return $retval13; //@line 622 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_copy($a, $unused) {
    ;
    var __label__;
  
    var $a_addr;
    var $unused_addr;
    var $retval;
    var $0;
    $a_addr=$a;
    $unused_addr=$unused;
    var $1=$a_addr; //@line 631 "arraymodule.c"
    var $2=$1; //@line 631 "arraymodule.c"
    var $3=$2+8; //@line 631 "arraymodule.c"
    var $4=HEAP[$3]; //@line 631 "arraymodule.c"
    var $5=$a_addr; //@line 631 "arraymodule.c"
    var $6=_array_slice($5, 0, $4); //@line 631 "arraymodule.c"
    $0=$6; //@line 631 "arraymodule.c"
    var $7=$0; //@line 631 "arraymodule.c"
    $retval=$7; //@line 631 "arraymodule.c"
    var $retval1=$retval; //@line 631 "arraymodule.c"
    ;
    return $retval1; //@line 631 "arraymodule.c"
  }
  

  function _array_concat($a, $bb) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr;
        var $bb_addr;
        var $retval;
        var $0;
        var $size;
        var $np;
        $a_addr=$a;
        $bb_addr=$bb;
        var $1=$bb_addr; //@line 644 "arraymodule.c"
        var $2=$1+4; //@line 644 "arraymodule.c"
        var $3=HEAP[$2]; //@line 644 "arraymodule.c"
        var $4=($3)!=(_Arraytype); //@line 644 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 644 "arraymodule.c"
      case 1: // $bb1
        var $5=$bb_addr; //@line 644 "arraymodule.c"
        var $6=$5+4; //@line 644 "arraymodule.c"
        var $7=HEAP[$6]; //@line 644 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 644 "arraymodule.c"
        var $9=($8)==0; //@line 644 "arraymodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 644 "arraymodule.c"
      case 2: // $bb2
        var $10=$bb_addr; //@line 645 "arraymodule.c"
        var $11=$10+4; //@line 645 "arraymodule.c"
        var $12=HEAP[$11]; //@line 645 "arraymodule.c"
        var $13=$12+12; //@line 645 "arraymodule.c"
        var $14=HEAP[$13]; //@line 645 "arraymodule.c"
        var $15=HEAP[_PyExc_TypeError]; //@line 645 "arraymodule.c"
        var $16=_PyErr_Format($15, __str19, allocate([$14,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 645 "arraymodule.c"
        $0=0; //@line 648 "arraymodule.c"
        __label__ = 10; break; //@line 648 "arraymodule.c"
      case 3: // $bb3
        var $17=$a_addr; //@line 651 "arraymodule.c"
        var $18=$17+20; //@line 651 "arraymodule.c"
        var $19=HEAP[$18]; //@line 651 "arraymodule.c"
        var $20=$bb_addr; //@line 651 "arraymodule.c"
        var $21=$20; //@line 651 "arraymodule.c"
        var $22=$21+20; //@line 651 "arraymodule.c"
        var $23=HEAP[$22]; //@line 651 "arraymodule.c"
        var $24=($19)!=($23); //@line 651 "arraymodule.c"
        if ($24) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 651 "arraymodule.c"
      case 4: // $bb4
        var $25=_PyErr_BadArgument(); //@line 652 "arraymodule.c"
        $0=0; //@line 653 "arraymodule.c"
        __label__ = 10; break; //@line 653 "arraymodule.c"
      case 5: // $bb5
        var $26=$a_addr; //@line 655 "arraymodule.c"
        var $27=$26; //@line 655 "arraymodule.c"
        var $28=$27+8; //@line 655 "arraymodule.c"
        var $29=HEAP[$28]; //@line 655 "arraymodule.c"
        var $30=$bb_addr; //@line 655 "arraymodule.c"
        var $31=$30; //@line 655 "arraymodule.c"
        var $32=$31+8; //@line 655 "arraymodule.c"
        var $33=HEAP[$32]; //@line 655 "arraymodule.c"
        var $34=2147483647 - ($33); //@line 655 "arraymodule.c"
        var $35=($29) > ($34); //@line 655 "arraymodule.c"
        if ($35) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 655 "arraymodule.c"
      case 6: // $bb6
        var $36=_PyErr_NoMemory(); //@line 656 "arraymodule.c"
        $0=$36; //@line 656 "arraymodule.c"
        __label__ = 10; break; //@line 656 "arraymodule.c"
      case 7: // $bb7
        var $37=$a_addr; //@line 658 "arraymodule.c"
        var $38=$37; //@line 658 "arraymodule.c"
        var $39=$38+8; //@line 658 "arraymodule.c"
        var $40=HEAP[$39]; //@line 658 "arraymodule.c"
        var $41=$bb_addr; //@line 658 "arraymodule.c"
        var $42=$41; //@line 658 "arraymodule.c"
        var $43=$42+8; //@line 658 "arraymodule.c"
        var $44=HEAP[$43]; //@line 658 "arraymodule.c"
        var $45=($44) + ($40); //@line 658 "arraymodule.c"
        $size=$45; //@line 658 "arraymodule.c"
        var $46=$a_addr; //@line 659 "arraymodule.c"
        var $47=$46+20; //@line 659 "arraymodule.c"
        var $48=HEAP[$47]; //@line 659 "arraymodule.c"
        var $49=$size; //@line 659 "arraymodule.c"
        var $50=_newarrayobject(_Arraytype, $49, $48); //@line 659 "arraymodule.c"
        var $51=$50; //@line 659 "arraymodule.c"
        $np=$51; //@line 659 "arraymodule.c"
        var $52=$np; //@line 660 "arraymodule.c"
        var $53=($52)==0; //@line 660 "arraymodule.c"
        if ($53) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 660 "arraymodule.c"
      case 8: // $bb8
        $0=0; //@line 661 "arraymodule.c"
        __label__ = 10; break; //@line 661 "arraymodule.c"
      case 9: // $bb9
        var $54=$a_addr; //@line 663 "arraymodule.c"
        var $55=$54; //@line 663 "arraymodule.c"
        var $56=$55+8; //@line 663 "arraymodule.c"
        var $57=HEAP[$56]; //@line 663 "arraymodule.c"
        var $58=$a_addr; //@line 663 "arraymodule.c"
        var $59=$58+20; //@line 663 "arraymodule.c"
        var $60=HEAP[$59]; //@line 663 "arraymodule.c"
        var $61=$60+4; //@line 663 "arraymodule.c"
        var $62=HEAP[$61]; //@line 663 "arraymodule.c"
        var $63=($62) * ($57); //@line 663 "arraymodule.c"
        var $64=$a_addr; //@line 663 "arraymodule.c"
        var $65=$64+12; //@line 663 "arraymodule.c"
        var $66=HEAP[$65]; //@line 663 "arraymodule.c"
        var $67=$np; //@line 663 "arraymodule.c"
        var $68=$67+12; //@line 663 "arraymodule.c"
        var $69=HEAP[$68]; //@line 663 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($69, $66, $63, 1, 0); //@line 663 "arraymodule.c"
        var $70=$bb_addr; //@line 664 "arraymodule.c"
        var $71=$70; //@line 664 "arraymodule.c"
        var $72=$71+8; //@line 664 "arraymodule.c"
        var $73=HEAP[$72]; //@line 664 "arraymodule.c"
        var $74=$bb_addr; //@line 664 "arraymodule.c"
        var $75=$74; //@line 664 "arraymodule.c"
        var $76=$75+20; //@line 664 "arraymodule.c"
        var $77=HEAP[$76]; //@line 664 "arraymodule.c"
        var $78=$77+4; //@line 664 "arraymodule.c"
        var $79=HEAP[$78]; //@line 664 "arraymodule.c"
        var $80=($79) * ($73); //@line 664 "arraymodule.c"
        var $81=$bb_addr; //@line 664 "arraymodule.c"
        var $82=$81; //@line 664 "arraymodule.c"
        var $83=$82+12; //@line 664 "arraymodule.c"
        var $84=HEAP[$83]; //@line 664 "arraymodule.c"
        var $85=$np; //@line 664 "arraymodule.c"
        var $86=$85+12; //@line 664 "arraymodule.c"
        var $87=HEAP[$86]; //@line 664 "arraymodule.c"
        var $88=$a_addr; //@line 664 "arraymodule.c"
        var $89=$88; //@line 664 "arraymodule.c"
        var $90=$89+8; //@line 664 "arraymodule.c"
        var $91=HEAP[$90]; //@line 664 "arraymodule.c"
        var $92=$a_addr; //@line 664 "arraymodule.c"
        var $93=$92+20; //@line 664 "arraymodule.c"
        var $94=HEAP[$93]; //@line 664 "arraymodule.c"
        var $95=$94+4; //@line 664 "arraymodule.c"
        var $96=HEAP[$95]; //@line 664 "arraymodule.c"
        var $97=($96) * ($91); //@line 664 "arraymodule.c"
        var $98=$87+$97; //@line 664 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($98, $84, $80, 1, 0); //@line 664 "arraymodule.c"
        var $99=$np; //@line 666 "arraymodule.c"
        var $100=$99; //@line 666 "arraymodule.c"
        $0=$100; //@line 666 "arraymodule.c"
        __label__ = 10; break; //@line 666 "arraymodule.c"
      case 10: // $bb10
        var $101=$0; //@line 648 "arraymodule.c"
        $retval=$101; //@line 648 "arraymodule.c"
        var $retval11=$retval; //@line 648 "arraymodule.c"
        ;
        return $retval11; //@line 648 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_repeat($a, $n) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr;
        var $n_addr;
        var $retval;
        var $0;
        var $i;
        var $size;
        var $np;
        var $p;
        var $nbytes;
        $a_addr=$a;
        $n_addr=$n;
        var $1=$n_addr; //@line 678 "arraymodule.c"
        var $2=($1) < 0; //@line 678 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 678 "arraymodule.c"
      case 1: // $bb
        $n_addr=0; //@line 679 "arraymodule.c"
        __label__ = 2; break; //@line 679 "arraymodule.c"
      case 2: // $bb1
        var $3=$a_addr; //@line 680 "arraymodule.c"
        var $4=$3; //@line 680 "arraymodule.c"
        var $5=$4+8; //@line 680 "arraymodule.c"
        var $6=HEAP[$5]; //@line 680 "arraymodule.c"
        var $7=($6)!=0; //@line 680 "arraymodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 680 "arraymodule.c"
      case 3: // $bb2
        var $8=$a_addr; //@line 680 "arraymodule.c"
        var $9=$8; //@line 680 "arraymodule.c"
        var $10=$9+8; //@line 680 "arraymodule.c"
        var $11=HEAP[$10]; //@line 680 "arraymodule.c"
        var $12=((2147483647/($11))|0); //@line 680 "arraymodule.c"
        var $13=$n_addr; //@line 680 "arraymodule.c"
        var $14=($12) < ($13); //@line 680 "arraymodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 680 "arraymodule.c"
      case 4: // $bb3
        var $15=_PyErr_NoMemory(); //@line 681 "arraymodule.c"
        $0=$15; //@line 681 "arraymodule.c"
        __label__ = 10; break; //@line 681 "arraymodule.c"
      case 5: // $bb4
        var $16=$a_addr; //@line 683 "arraymodule.c"
        var $17=$16; //@line 683 "arraymodule.c"
        var $18=$17+8; //@line 683 "arraymodule.c"
        var $19=HEAP[$18]; //@line 683 "arraymodule.c"
        var $20=$n_addr; //@line 683 "arraymodule.c"
        var $21=($20) * ($19); //@line 683 "arraymodule.c"
        $size=$21; //@line 683 "arraymodule.c"
        var $22=$a_addr; //@line 684 "arraymodule.c"
        var $23=$22+20; //@line 684 "arraymodule.c"
        var $24=HEAP[$23]; //@line 684 "arraymodule.c"
        var $25=$size; //@line 684 "arraymodule.c"
        var $26=_newarrayobject(_Arraytype, $25, $24); //@line 684 "arraymodule.c"
        var $27=$26; //@line 684 "arraymodule.c"
        $np=$27; //@line 684 "arraymodule.c"
        var $28=($27)==0; //@line 685 "arraymodule.c"
        if ($28) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 685 "arraymodule.c"
      case 6: // $bb5
        $0=0; //@line 686 "arraymodule.c"
        __label__ = 10; break; //@line 686 "arraymodule.c"
      case 7: // $bb6
        var $29=$np; //@line 687 "arraymodule.c"
        var $30=$29+12; //@line 687 "arraymodule.c"
        var $31=HEAP[$30]; //@line 687 "arraymodule.c"
        $p=$31; //@line 687 "arraymodule.c"
        var $32=$a_addr; //@line 688 "arraymodule.c"
        var $33=$32; //@line 688 "arraymodule.c"
        var $34=$33+8; //@line 688 "arraymodule.c"
        var $35=HEAP[$34]; //@line 688 "arraymodule.c"
        var $36=$a_addr; //@line 688 "arraymodule.c"
        var $37=$36+20; //@line 688 "arraymodule.c"
        var $38=HEAP[$37]; //@line 688 "arraymodule.c"
        var $39=$38+4; //@line 688 "arraymodule.c"
        var $40=HEAP[$39]; //@line 688 "arraymodule.c"
        var $41=($40) * ($35); //@line 688 "arraymodule.c"
        $nbytes=$41; //@line 688 "arraymodule.c"
        $i=0; //@line 689 "arraymodule.c"
        var $42=$i; //@line 689 "arraymodule.c"
        var $43=$n_addr; //@line 689 "arraymodule.c"
        var $44=($42) < ($43); //@line 689 "arraymodule.c"
        if ($44) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 689 "arraymodule.c"
      case 8: // $bb7
        var $45=$nbytes; //@line 690 "arraymodule.c"
        var $46=$a_addr; //@line 690 "arraymodule.c"
        var $47=$46+12; //@line 690 "arraymodule.c"
        var $48=HEAP[$47]; //@line 690 "arraymodule.c"
        var $49=$p; //@line 690 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($49, $48, $45, 1, 0); //@line 690 "arraymodule.c"
        var $50=$p; //@line 691 "arraymodule.c"
        var $51=$nbytes; //@line 691 "arraymodule.c"
        var $52=$50+$51; //@line 691 "arraymodule.c"
        $p=$52; //@line 691 "arraymodule.c"
        var $53=$i; //@line 689 "arraymodule.c"
        var $54=($53) + 1; //@line 689 "arraymodule.c"
        $i=$54; //@line 689 "arraymodule.c"
        var $55=$i; //@line 689 "arraymodule.c"
        var $56=$n_addr; //@line 689 "arraymodule.c"
        var $57=($55) < ($56); //@line 689 "arraymodule.c"
        if ($57) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 689 "arraymodule.c"
      case 9: // $bb9
        var $58=$np; //@line 693 "arraymodule.c"
        var $59=$58; //@line 693 "arraymodule.c"
        $0=$59; //@line 693 "arraymodule.c"
        __label__ = 10; break; //@line 693 "arraymodule.c"
      case 10: // $bb10
        var $60=$0; //@line 681 "arraymodule.c"
        $retval=$60; //@line 681 "arraymodule.c"
        var $retval11=$retval; //@line 681 "arraymodule.c"
        ;
        return $retval11; //@line 681 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_ass_slice($a, $ilow, $ihigh, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr;
        var $ilow_addr;
        var $ihigh_addr;
        var $v_addr;
        var $retval;
        var $iftmp_109;
        var $iftmp_107;
        var $iftmp_105;
        var $iftmp_101;
        var $iftmp_99;
        var $iftmp_97;
        var $0;
        var $item;
        var $n;
        var $d;
        var $ret;
        $a_addr=$a;
        $ilow_addr=$ilow;
        $ihigh_addr=$ihigh;
        $v_addr=$v;
        var $1=$v_addr; //@line 703 "arraymodule.c"
        var $2=($1)==0; //@line 703 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 703 "arraymodule.c"
      case 1: // $bb
        $n=0; //@line 704 "arraymodule.c"
        __label__ = 13; break; //@line 704 "arraymodule.c"
      case 2: // $bb1
        var $3=$v_addr; //@line 705 "arraymodule.c"
        var $4=$3+4; //@line 705 "arraymodule.c"
        var $5=HEAP[$4]; //@line 705 "arraymodule.c"
        var $6=($5)==(_Arraytype); //@line 705 "arraymodule.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 705 "arraymodule.c"
      case 3: // $bb2
        var $7=$v_addr; //@line 705 "arraymodule.c"
        var $8=$7+4; //@line 705 "arraymodule.c"
        var $9=HEAP[$8]; //@line 705 "arraymodule.c"
        var $10=_PyType_IsSubtype($9, _Arraytype); //@line 705 "arraymodule.c"
        var $11=($10)!=0; //@line 705 "arraymodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 12; break; } //@line 705 "arraymodule.c"
      case 4: // $bb3
        var $12=$v_addr; //@line 706 "arraymodule.c"
        var $13=$12; //@line 706 "arraymodule.c"
        var $14=$13+8; //@line 706 "arraymodule.c"
        var $15=HEAP[$14]; //@line 706 "arraymodule.c"
        $n=$15; //@line 706 "arraymodule.c"
        var $16=$v_addr; //@line 707 "arraymodule.c"
        var $17=$16; //@line 707 "arraymodule.c"
        var $18=$a_addr; //@line 707 "arraymodule.c"
        var $19=($18)==($17); //@line 707 "arraymodule.c"
        var $20=$v_addr; //@line 710 "arraymodule.c"
        var $21=$20; //@line 710 "arraymodule.c"
        if ($19) { __label__ = 5; break; } else { __label__ = 10; break; } //@line 707 "arraymodule.c"
      case 5: // $bb4
        var $22=$n; //@line 710 "arraymodule.c"
        var $23=_array_slice($21, 0, $22); //@line 710 "arraymodule.c"
        $v_addr=$23; //@line 710 "arraymodule.c"
        var $24=$v_addr; //@line 711 "arraymodule.c"
        var $25=($24)==0; //@line 711 "arraymodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 711 "arraymodule.c"
      case 6: // $bb5
        $0=-1; //@line 712 "arraymodule.c"
        __label__ = 48; break; //@line 712 "arraymodule.c"
      case 7: // $bb6
        var $26=$a_addr; //@line 713 "arraymodule.c"
        var $27=$ilow_addr; //@line 713 "arraymodule.c"
        var $28=$ihigh_addr; //@line 713 "arraymodule.c"
        var $29=$v_addr; //@line 713 "arraymodule.c"
        var $30=_array_ass_slice($26, $27, $28, $29); //@line 713 "arraymodule.c"
        $ret=$30; //@line 713 "arraymodule.c"
        var $31=$v_addr; //@line 714 "arraymodule.c"
        var $32=$31; //@line 714 "arraymodule.c"
        var $33=HEAP[$32]; //@line 714 "arraymodule.c"
        var $34=($33) - 1; //@line 714 "arraymodule.c"
        var $35=$v_addr; //@line 714 "arraymodule.c"
        var $36=$35; //@line 714 "arraymodule.c"
        HEAP[$36]=$34; //@line 714 "arraymodule.c"
        var $37=$v_addr; //@line 714 "arraymodule.c"
        var $38=$37; //@line 714 "arraymodule.c"
        var $39=HEAP[$38]; //@line 714 "arraymodule.c"
        var $40=($39)==0; //@line 714 "arraymodule.c"
        if ($40) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 714 "arraymodule.c"
      case 8: // $bb7
        var $41=$v_addr; //@line 714 "arraymodule.c"
        var $42=$41+4; //@line 714 "arraymodule.c"
        var $43=HEAP[$42]; //@line 714 "arraymodule.c"
        var $44=$43+24; //@line 714 "arraymodule.c"
        var $45=HEAP[$44]; //@line 714 "arraymodule.c"
        var $46=$v_addr; //@line 714 "arraymodule.c"
        FUNCTION_TABLE[$45]($46); //@line 714 "arraymodule.c"
        __label__ = 9; break; //@line 714 "arraymodule.c"
      case 9: // $bb8
        var $47=$ret; //@line 715 "arraymodule.c"
        $0=$47; //@line 715 "arraymodule.c"
        __label__ = 48; break; //@line 715 "arraymodule.c"
      case 10: // $bb9
        var $48=$21+20; //@line 717 "arraymodule.c"
        var $49=HEAP[$48]; //@line 717 "arraymodule.c"
        var $50=$a_addr; //@line 717 "arraymodule.c"
        var $51=$50+20; //@line 717 "arraymodule.c"
        var $52=HEAP[$51]; //@line 717 "arraymodule.c"
        var $53=($49)!=($52); //@line 717 "arraymodule.c"
        if ($53) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 717 "arraymodule.c"
      case 11: // $bb10
        var $54=_PyErr_BadArgument(); //@line 718 "arraymodule.c"
        $0=-1; //@line 719 "arraymodule.c"
        __label__ = 48; break; //@line 719 "arraymodule.c"
      case 12: // $bb12
        var $55=$v_addr; //@line 723 "arraymodule.c"
        var $56=$55+4; //@line 723 "arraymodule.c"
        var $57=HEAP[$56]; //@line 723 "arraymodule.c"
        var $58=$57+12; //@line 723 "arraymodule.c"
        var $59=HEAP[$58]; //@line 723 "arraymodule.c"
        var $60=HEAP[_PyExc_TypeError]; //@line 723 "arraymodule.c"
        var $61=_PyErr_Format($60, __str20, allocate([$59,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 723 "arraymodule.c"
        $0=-1; //@line 726 "arraymodule.c"
        __label__ = 48; break; //@line 726 "arraymodule.c"
      case 13: // $bb13
        var $62=$ilow_addr; //@line 728 "arraymodule.c"
        var $63=($62) < 0; //@line 728 "arraymodule.c"
        if ($63) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 728 "arraymodule.c"
      case 14: // $bb14
        $ilow_addr=0; //@line 729 "arraymodule.c"
        __label__ = 17; break; //@line 729 "arraymodule.c"
      case 15: // $bb15
        var $64=$a_addr; //@line 730 "arraymodule.c"
        var $65=$64; //@line 730 "arraymodule.c"
        var $66=$65+8; //@line 730 "arraymodule.c"
        var $67=HEAP[$66]; //@line 730 "arraymodule.c"
        var $68=$ilow_addr; //@line 730 "arraymodule.c"
        var $69=($67) < ($68); //@line 730 "arraymodule.c"
        if ($69) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 730 "arraymodule.c"
      case 16: // $bb16
        var $70=$a_addr; //@line 731 "arraymodule.c"
        var $71=$70; //@line 731 "arraymodule.c"
        var $72=$71+8; //@line 731 "arraymodule.c"
        var $73=HEAP[$72]; //@line 731 "arraymodule.c"
        $ilow_addr=$73; //@line 731 "arraymodule.c"
        __label__ = 17; break; //@line 731 "arraymodule.c"
      case 17: // $bb17
        var $74=$ihigh_addr; //@line 732 "arraymodule.c"
        var $75=($74) < 0; //@line 732 "arraymodule.c"
        if ($75) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 732 "arraymodule.c"
      case 18: // $bb18
        $ihigh_addr=0; //@line 733 "arraymodule.c"
        __label__ = 19; break; //@line 733 "arraymodule.c"
      case 19: // $bb19
        var $76=$ihigh_addr; //@line 734 "arraymodule.c"
        var $77=$ilow_addr; //@line 734 "arraymodule.c"
        var $78=($76) < ($77); //@line 734 "arraymodule.c"
        if ($78) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 734 "arraymodule.c"
      case 20: // $bb20
        var $79=$ilow_addr; //@line 735 "arraymodule.c"
        $ihigh_addr=$79; //@line 735 "arraymodule.c"
        __label__ = 23; break; //@line 735 "arraymodule.c"
      case 21: // $bb21
        var $80=$a_addr; //@line 736 "arraymodule.c"
        var $81=$80; //@line 736 "arraymodule.c"
        var $82=$81+8; //@line 736 "arraymodule.c"
        var $83=HEAP[$82]; //@line 736 "arraymodule.c"
        var $84=$ihigh_addr; //@line 736 "arraymodule.c"
        var $85=($83) < ($84); //@line 736 "arraymodule.c"
        if ($85) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 736 "arraymodule.c"
      case 22: // $bb22
        var $86=$a_addr; //@line 737 "arraymodule.c"
        var $87=$86; //@line 737 "arraymodule.c"
        var $88=$87+8; //@line 737 "arraymodule.c"
        var $89=HEAP[$88]; //@line 737 "arraymodule.c"
        $ihigh_addr=$89; //@line 737 "arraymodule.c"
        __label__ = 23; break; //@line 737 "arraymodule.c"
      case 23: // $bb23
        var $90=$a_addr; //@line 738 "arraymodule.c"
        var $91=$90+12; //@line 738 "arraymodule.c"
        var $92=HEAP[$91]; //@line 738 "arraymodule.c"
        $item=$92; //@line 738 "arraymodule.c"
        var $93=$ihigh_addr; //@line 739 "arraymodule.c"
        var $94=$ilow_addr; //@line 739 "arraymodule.c"
        var $95=($93) - ($94); //@line 739 "arraymodule.c"
        var $96=$n; //@line 739 "arraymodule.c"
        var $_neg=0 - ($95);
        var $97=($96) + ($_neg);
        $d=$97; //@line 739 "arraymodule.c"
        var $98=($97) < 0; //@line 740 "arraymodule.c"
        if ($98) { __label__ = 24; break; } else { __label__ = 34; break; } //@line 740 "arraymodule.c"
      case 24: // $bb24
        var $99=$a_addr; //@line 741 "arraymodule.c"
        var $100=$99; //@line 741 "arraymodule.c"
        var $101=$100+8; //@line 741 "arraymodule.c"
        var $102=HEAP[$101]; //@line 741 "arraymodule.c"
        var $103=$ihigh_addr; //@line 741 "arraymodule.c"
        var $104=($102) - ($103); //@line 741 "arraymodule.c"
        var $105=$a_addr; //@line 741 "arraymodule.c"
        var $106=$105+20; //@line 741 "arraymodule.c"
        var $107=HEAP[$106]; //@line 741 "arraymodule.c"
        var $108=$107+4; //@line 741 "arraymodule.c"
        var $109=HEAP[$108]; //@line 741 "arraymodule.c"
        var $110=($109) * ($104); //@line 741 "arraymodule.c"
        var $111=$a_addr; //@line 741 "arraymodule.c"
        var $112=$111+20; //@line 741 "arraymodule.c"
        var $113=HEAP[$112]; //@line 741 "arraymodule.c"
        var $114=$113+4; //@line 741 "arraymodule.c"
        var $115=HEAP[$114]; //@line 741 "arraymodule.c"
        var $116=$ihigh_addr; //@line 741 "arraymodule.c"
        var $117=($116) * ($115); //@line 741 "arraymodule.c"
        var $118=$item; //@line 741 "arraymodule.c"
        var $119=$118+$117; //@line 741 "arraymodule.c"
        var $120=$ihigh_addr; //@line 741 "arraymodule.c"
        var $121=$d; //@line 741 "arraymodule.c"
        var $122=($121) + ($120); //@line 741 "arraymodule.c"
        var $123=$a_addr; //@line 741 "arraymodule.c"
        var $124=$123+20; //@line 741 "arraymodule.c"
        var $125=HEAP[$124]; //@line 741 "arraymodule.c"
        var $126=$125+4; //@line 741 "arraymodule.c"
        var $127=HEAP[$126]; //@line 741 "arraymodule.c"
        var $128=($127) * ($122); //@line 741 "arraymodule.c"
        var $129=$item; //@line 741 "arraymodule.c"
        var $130=$129+$128; //@line 741 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($130, $119, $110, 1, 0); //@line 741 "arraymodule.c"
        var $131=$a_addr; //@line 744 "arraymodule.c"
        var $132=$131; //@line 744 "arraymodule.c"
        var $133=$a_addr; //@line 744 "arraymodule.c"
        var $134=$133; //@line 744 "arraymodule.c"
        var $135=$134+8; //@line 744 "arraymodule.c"
        var $136=HEAP[$135]; //@line 744 "arraymodule.c"
        var $137=$d; //@line 744 "arraymodule.c"
        var $138=($137) + ($136); //@line 744 "arraymodule.c"
        var $139=$132+8; //@line 744 "arraymodule.c"
        HEAP[$139]=$138; //@line 744 "arraymodule.c"
        var $140=$a_addr; //@line 745 "arraymodule.c"
        var $141=$140; //@line 745 "arraymodule.c"
        var $142=$141+8; //@line 745 "arraymodule.c"
        var $143=HEAP[$142]; //@line 745 "arraymodule.c"
        var $144=$a_addr; //@line 745 "arraymodule.c"
        var $145=$144+20; //@line 745 "arraymodule.c"
        var $146=HEAP[$145]; //@line 745 "arraymodule.c"
        var $147=$146+4; //@line 745 "arraymodule.c"
        var $148=HEAP[$147]; //@line 745 "arraymodule.c"
        var $149=($148) * ($143); //@line 745 "arraymodule.c"
        var $150=($149) >= 0; //@line 745 "arraymodule.c"
        if ($150) { __label__ = 25; break; } else { __label__ = 32; break; } //@line 745 "arraymodule.c"
      case 25: // $bb25
        var $151=$a_addr; //@line 745 "arraymodule.c"
        var $152=$151; //@line 745 "arraymodule.c"
        var $153=$152+8; //@line 745 "arraymodule.c"
        var $154=HEAP[$153]; //@line 745 "arraymodule.c"
        var $155=$a_addr; //@line 745 "arraymodule.c"
        var $156=$155+20; //@line 745 "arraymodule.c"
        var $157=HEAP[$156]; //@line 745 "arraymodule.c"
        var $158=$157+4; //@line 745 "arraymodule.c"
        var $159=HEAP[$158]; //@line 745 "arraymodule.c"
        var $160=($159) * ($154); //@line 745 "arraymodule.c"
        var $161=($160) >= 0; //@line 745 "arraymodule.c"
        if ($161) { __label__ = 26; break; } else { __label__ = 30; break; } //@line 745 "arraymodule.c"
      case 26: // $bb26
        var $162=$a_addr; //@line 745 "arraymodule.c"
        var $163=$162; //@line 745 "arraymodule.c"
        var $164=$163+8; //@line 745 "arraymodule.c"
        var $165=HEAP[$164]; //@line 745 "arraymodule.c"
        var $166=$a_addr; //@line 745 "arraymodule.c"
        var $167=$166+20; //@line 745 "arraymodule.c"
        var $168=HEAP[$167]; //@line 745 "arraymodule.c"
        var $169=$168+4; //@line 745 "arraymodule.c"
        var $170=HEAP[$169]; //@line 745 "arraymodule.c"
        var $171=($170) * ($165); //@line 745 "arraymodule.c"
        var $172=($171)!=0; //@line 745 "arraymodule.c"
        if ($172) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 745 "arraymodule.c"
      case 27: // $bb27
        var $173=$a_addr; //@line 745 "arraymodule.c"
        var $174=$173; //@line 745 "arraymodule.c"
        var $175=$174+8; //@line 745 "arraymodule.c"
        var $176=HEAP[$175]; //@line 745 "arraymodule.c"
        var $177=$a_addr; //@line 745 "arraymodule.c"
        var $178=$177+20; //@line 745 "arraymodule.c"
        var $179=HEAP[$178]; //@line 745 "arraymodule.c"
        var $180=$179+4; //@line 745 "arraymodule.c"
        var $181=HEAP[$180]; //@line 745 "arraymodule.c"
        var $182=($181) * ($176); //@line 745 "arraymodule.c"
        $iftmp_101=$182; //@line 745 "arraymodule.c"
        __label__ = 29; break; //@line 745 "arraymodule.c"
      case 28: // $bb28
        $iftmp_101=1; //@line 745 "arraymodule.c"
        __label__ = 29; break; //@line 745 "arraymodule.c"
      case 29: // $bb29
        var $183=$item; //@line 745 "arraymodule.c"
        var $184=$iftmp_101; //@line 745 "arraymodule.c"
        var $185=_realloc($183, $184); //@line 745 "arraymodule.c"
        $iftmp_99=$185; //@line 745 "arraymodule.c"
        __label__ = 31; break; //@line 745 "arraymodule.c"
      case 30: // $bb30
        $iftmp_99=0; //@line 745 "arraymodule.c"
        __label__ = 31; break; //@line 745 "arraymodule.c"
      case 31: // $bb31
        var $186=$iftmp_99; //@line 745 "arraymodule.c"
        $iftmp_97=$186; //@line 745 "arraymodule.c"
        __label__ = 33; break; //@line 745 "arraymodule.c"
      case 32: // $bb32
        $iftmp_97=0; //@line 745 "arraymodule.c"
        __label__ = 33; break; //@line 745 "arraymodule.c"
      case 33: // $bb33
        var $187=$iftmp_97; //@line 745 "arraymodule.c"
        $item=$187; //@line 745 "arraymodule.c"
        var $188=$a_addr; //@line 747 "arraymodule.c"
        var $189=$188+12; //@line 747 "arraymodule.c"
        var $190=$item; //@line 747 "arraymodule.c"
        HEAP[$189]=$190; //@line 747 "arraymodule.c"
        var $191=$a_addr; //@line 748 "arraymodule.c"
        var $192=$191; //@line 748 "arraymodule.c"
        var $193=$192+8; //@line 748 "arraymodule.c"
        var $194=HEAP[$193]; //@line 748 "arraymodule.c"
        var $195=$a_addr; //@line 748 "arraymodule.c"
        var $196=$195+16; //@line 748 "arraymodule.c"
        HEAP[$196]=$194; //@line 748 "arraymodule.c"
        __label__ = 45; break; //@line 748 "arraymodule.c"
      case 34: // $bb34
        var $197=$d; //@line 750 "arraymodule.c"
        var $198=($197) > 0; //@line 750 "arraymodule.c"
        if ($198) { __label__ = 35; break; } else { __label__ = 45; break; } //@line 750 "arraymodule.c"
      case 35: // $bb35
        var $199=$a_addr; //@line 751 "arraymodule.c"
        var $200=$199; //@line 751 "arraymodule.c"
        var $201=$200+8; //@line 751 "arraymodule.c"
        var $202=HEAP[$201]; //@line 751 "arraymodule.c"
        var $203=$d; //@line 751 "arraymodule.c"
        var $204=($203) + ($202); //@line 751 "arraymodule.c"
        var $205=$a_addr; //@line 751 "arraymodule.c"
        var $206=$205+20; //@line 751 "arraymodule.c"
        var $207=HEAP[$206]; //@line 751 "arraymodule.c"
        var $208=$207+4; //@line 751 "arraymodule.c"
        var $209=HEAP[$208]; //@line 751 "arraymodule.c"
        var $210=($209) * ($204); //@line 751 "arraymodule.c"
        var $211=($210) >= 0; //@line 751 "arraymodule.c"
        if ($211) { __label__ = 36; break; } else { __label__ = 41; break; } //@line 751 "arraymodule.c"
      case 36: // $bb36
        var $212=$a_addr; //@line 751 "arraymodule.c"
        var $213=$212; //@line 751 "arraymodule.c"
        var $214=$213+8; //@line 751 "arraymodule.c"
        var $215=HEAP[$214]; //@line 751 "arraymodule.c"
        var $216=$d; //@line 751 "arraymodule.c"
        var $217=($216) + ($215); //@line 751 "arraymodule.c"
        var $218=$a_addr; //@line 751 "arraymodule.c"
        var $219=$218+20; //@line 751 "arraymodule.c"
        var $220=HEAP[$219]; //@line 751 "arraymodule.c"
        var $221=$220+4; //@line 751 "arraymodule.c"
        var $222=HEAP[$221]; //@line 751 "arraymodule.c"
        var $223=($222) * ($217); //@line 751 "arraymodule.c"
        var $224=($223) >= 0; //@line 751 "arraymodule.c"
        if ($224) { __label__ = 37; break; } else { __label__ = 40; break; } //@line 751 "arraymodule.c"
      case 37: // $bb37
        var $225=$a_addr; //@line 751 "arraymodule.c"
        var $226=$225; //@line 751 "arraymodule.c"
        var $227=$226+8; //@line 751 "arraymodule.c"
        var $228=HEAP[$227]; //@line 751 "arraymodule.c"
        var $229=$d; //@line 751 "arraymodule.c"
        var $230=($229) + ($228); //@line 751 "arraymodule.c"
        var $231=$a_addr; //@line 751 "arraymodule.c"
        var $232=$231+20; //@line 751 "arraymodule.c"
        var $233=HEAP[$232]; //@line 751 "arraymodule.c"
        var $234=$233+4; //@line 751 "arraymodule.c"
        var $235=HEAP[$234]; //@line 751 "arraymodule.c"
        var $236=($235) * ($230); //@line 751 "arraymodule.c"
        var $237=($236)!=0; //@line 751 "arraymodule.c"
        if ($237) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 751 "arraymodule.c"
      case 38: // $bb38
        var $238=$a_addr; //@line 751 "arraymodule.c"
        var $239=$238; //@line 751 "arraymodule.c"
        var $240=$239+8; //@line 751 "arraymodule.c"
        var $241=HEAP[$240]; //@line 751 "arraymodule.c"
        var $242=$d; //@line 751 "arraymodule.c"
        var $243=($242) + ($241); //@line 751 "arraymodule.c"
        var $244=$a_addr; //@line 751 "arraymodule.c"
        var $245=$244+20; //@line 751 "arraymodule.c"
        var $246=HEAP[$245]; //@line 751 "arraymodule.c"
        var $247=$246+4; //@line 751 "arraymodule.c"
        var $248=HEAP[$247]; //@line 751 "arraymodule.c"
        var $249=($248) * ($243); //@line 751 "arraymodule.c"
        $iftmp_109=$249; //@line 751 "arraymodule.c"
        __label__ = 42; break; //@line 751 "arraymodule.c"
      case 39: // $bb39
        $iftmp_109=1; //@line 751 "arraymodule.c"
        __label__ = 42; break; //@line 751 "arraymodule.c"
      case 40: // $bb44_thread1
        $iftmp_107=0; //@line 751 "arraymodule.c"
        $iftmp_105=0; //@line 751 "arraymodule.c"
        $item=0; //@line 751 "arraymodule.c"
        __label__ = 43; break;
      case 41: // $bb44_thread
        $iftmp_105=0; //@line 751 "arraymodule.c"
        $item=0; //@line 751 "arraymodule.c"
        __label__ = 43; break;
      case 42: // $bb44
        var $250=$item; //@line 751 "arraymodule.c"
        var $251=$iftmp_109; //@line 751 "arraymodule.c"
        var $252=_realloc($250, $251); //@line 751 "arraymodule.c"
        $iftmp_107=$252; //@line 751 "arraymodule.c"
        $iftmp_105=$252; //@line 751 "arraymodule.c"
        $item=$252; //@line 751 "arraymodule.c"
        var $253=($252)==0; //@line 753 "arraymodule.c"
        if ($253) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 753 "arraymodule.c"
      case 43: // $bb45
        var $254=_PyErr_NoMemory(); //@line 754 "arraymodule.c"
        $0=-1; //@line 755 "arraymodule.c"
        __label__ = 48; break; //@line 755 "arraymodule.c"
      case 44: // $bb46
        var $255=$a_addr; //@line 757 "arraymodule.c"
        var $256=$255; //@line 757 "arraymodule.c"
        var $257=$256+8; //@line 757 "arraymodule.c"
        var $258=HEAP[$257]; //@line 757 "arraymodule.c"
        var $259=$ihigh_addr; //@line 757 "arraymodule.c"
        var $260=($258) - ($259); //@line 757 "arraymodule.c"
        var $261=$a_addr; //@line 757 "arraymodule.c"
        var $262=$261+20; //@line 757 "arraymodule.c"
        var $263=HEAP[$262]; //@line 757 "arraymodule.c"
        var $264=$263+4; //@line 757 "arraymodule.c"
        var $265=HEAP[$264]; //@line 757 "arraymodule.c"
        var $266=($265) * ($260); //@line 757 "arraymodule.c"
        var $267=$a_addr; //@line 757 "arraymodule.c"
        var $268=$267+20; //@line 757 "arraymodule.c"
        var $269=HEAP[$268]; //@line 757 "arraymodule.c"
        var $270=$269+4; //@line 757 "arraymodule.c"
        var $271=HEAP[$270]; //@line 757 "arraymodule.c"
        var $272=$ihigh_addr; //@line 757 "arraymodule.c"
        var $273=($272) * ($271); //@line 757 "arraymodule.c"
        var $274=$item; //@line 757 "arraymodule.c"
        var $275=$274+$273; //@line 757 "arraymodule.c"
        var $276=$ihigh_addr; //@line 757 "arraymodule.c"
        var $277=$d; //@line 757 "arraymodule.c"
        var $278=($277) + ($276); //@line 757 "arraymodule.c"
        var $279=$a_addr; //@line 757 "arraymodule.c"
        var $280=$279+20; //@line 757 "arraymodule.c"
        var $281=HEAP[$280]; //@line 757 "arraymodule.c"
        var $282=$281+4; //@line 757 "arraymodule.c"
        var $283=HEAP[$282]; //@line 757 "arraymodule.c"
        var $284=($283) * ($278); //@line 757 "arraymodule.c"
        var $285=$item; //@line 757 "arraymodule.c"
        var $286=$285+$284; //@line 757 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($286, $275, $266, 1, 0); //@line 757 "arraymodule.c"
        var $287=$a_addr; //@line 760 "arraymodule.c"
        var $288=$287+12; //@line 760 "arraymodule.c"
        var $289=$item; //@line 760 "arraymodule.c"
        HEAP[$288]=$289; //@line 760 "arraymodule.c"
        var $290=$a_addr; //@line 761 "arraymodule.c"
        var $291=$290; //@line 761 "arraymodule.c"
        var $292=$a_addr; //@line 761 "arraymodule.c"
        var $293=$292; //@line 761 "arraymodule.c"
        var $294=$293+8; //@line 761 "arraymodule.c"
        var $295=HEAP[$294]; //@line 761 "arraymodule.c"
        var $296=$d; //@line 761 "arraymodule.c"
        var $297=($296) + ($295); //@line 761 "arraymodule.c"
        var $298=$291+8; //@line 761 "arraymodule.c"
        HEAP[$298]=$297; //@line 761 "arraymodule.c"
        var $299=$a_addr; //@line 762 "arraymodule.c"
        var $300=$299; //@line 762 "arraymodule.c"
        var $301=$300+8; //@line 762 "arraymodule.c"
        var $302=HEAP[$301]; //@line 762 "arraymodule.c"
        var $303=$a_addr; //@line 762 "arraymodule.c"
        var $304=$303+16; //@line 762 "arraymodule.c"
        HEAP[$304]=$302; //@line 762 "arraymodule.c"
        __label__ = 45; break; //@line 762 "arraymodule.c"
      case 45: // $bb47
        var $305=$n; //@line 764 "arraymodule.c"
        var $306=($305) > 0; //@line 764 "arraymodule.c"
        if ($306) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 764 "arraymodule.c"
      case 46: // $bb48
        var $307=$v_addr; //@line 765 "arraymodule.c"
        var $308=$307; //@line 765 "arraymodule.c"
        var $309=$308+20; //@line 765 "arraymodule.c"
        var $310=HEAP[$309]; //@line 765 "arraymodule.c"
        var $311=$310+4; //@line 765 "arraymodule.c"
        var $312=HEAP[$311]; //@line 765 "arraymodule.c"
        var $313=$n; //@line 765 "arraymodule.c"
        var $314=($313) * ($312); //@line 765 "arraymodule.c"
        var $315=$v_addr; //@line 765 "arraymodule.c"
        var $316=$315; //@line 765 "arraymodule.c"
        var $317=$316+12; //@line 765 "arraymodule.c"
        var $318=HEAP[$317]; //@line 765 "arraymodule.c"
        var $319=$a_addr; //@line 765 "arraymodule.c"
        var $320=$319+20; //@line 765 "arraymodule.c"
        var $321=HEAP[$320]; //@line 765 "arraymodule.c"
        var $322=$321+4; //@line 765 "arraymodule.c"
        var $323=HEAP[$322]; //@line 765 "arraymodule.c"
        var $324=$ilow_addr; //@line 765 "arraymodule.c"
        var $325=($324) * ($323); //@line 765 "arraymodule.c"
        var $326=$item; //@line 765 "arraymodule.c"
        var $327=$326+$325; //@line 765 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($327, $318, $314, 1, 0); //@line 765 "arraymodule.c"
        __label__ = 47; break; //@line 765 "arraymodule.c"
      case 47: // $bb49
        $0=0; //@line 767 "arraymodule.c"
        __label__ = 48; break; //@line 767 "arraymodule.c"
      case 48: // $bb50
        var $328=$0; //@line 712 "arraymodule.c"
        $retval=$328; //@line 712 "arraymodule.c"
        var $retval51=$retval; //@line 712 "arraymodule.c"
        ;
        return $retval51; //@line 712 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_ass_item($a, $i, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        $a_addr=$a;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$i_addr; //@line 774 "arraymodule.c"
        var $2=($1) < 0; //@line 774 "arraymodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 774 "arraymodule.c"
      case 1: // $bb
        var $3=$a_addr; //@line 774 "arraymodule.c"
        var $4=$3; //@line 774 "arraymodule.c"
        var $5=$4+8; //@line 774 "arraymodule.c"
        var $6=HEAP[$5]; //@line 774 "arraymodule.c"
        var $7=$i_addr; //@line 774 "arraymodule.c"
        var $8=($6) <= ($7); //@line 774 "arraymodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 774 "arraymodule.c"
      case 2: // $bb1
        var $9=HEAP[_PyExc_IndexError]; //@line 775 "arraymodule.c"
        _PyErr_SetString($9, __str21); //@line 775 "arraymodule.c"
        $0=-1; //@line 777 "arraymodule.c"
        __label__ = 6; break; //@line 777 "arraymodule.c"
      case 3: // $bb2
        var $10=$v_addr; //@line 779 "arraymodule.c"
        var $11=($10)==0; //@line 779 "arraymodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 779 "arraymodule.c"
      case 4: // $bb3
        var $12=$i_addr; //@line 780 "arraymodule.c"
        var $13=($12) + 1; //@line 780 "arraymodule.c"
        var $14=$a_addr; //@line 780 "arraymodule.c"
        var $15=$i_addr; //@line 780 "arraymodule.c"
        var $16=$v_addr; //@line 780 "arraymodule.c"
        var $17=_array_ass_slice($14, $15, $13, $16); //@line 780 "arraymodule.c"
        $0=$17; //@line 780 "arraymodule.c"
        __label__ = 6; break; //@line 780 "arraymodule.c"
      case 5: // $bb4
        var $18=$a_addr; //@line 781 "arraymodule.c"
        var $19=$18+20; //@line 781 "arraymodule.c"
        var $20=HEAP[$19]; //@line 781 "arraymodule.c"
        var $21=$20+12; //@line 781 "arraymodule.c"
        var $22=HEAP[$21]; //@line 781 "arraymodule.c"
        var $23=$a_addr; //@line 781 "arraymodule.c"
        var $24=$i_addr; //@line 781 "arraymodule.c"
        var $25=$v_addr; //@line 781 "arraymodule.c"
        var $26=FUNCTION_TABLE[$22]($23, $24, $25); //@line 781 "arraymodule.c"
        $0=$26; //@line 781 "arraymodule.c"
        __label__ = 6; break; //@line 781 "arraymodule.c"
      case 6: // $bb5
        var $27=$0; //@line 777 "arraymodule.c"
        $retval=$27; //@line 777 "arraymodule.c"
        var $retval6=$retval; //@line 777 "arraymodule.c"
        ;
        return $retval6; //@line 777 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _setarrayitem($a, $i, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr;
        var $i_addr;
        var $v_addr;
        var $retval;
        var $0;
        $a_addr=$a;
        $i_addr=$i;
        $v_addr=$v;
        var $1=$a_addr; //@line 787 "arraymodule.c"
        var $2=$1+4; //@line 787 "arraymodule.c"
        var $3=HEAP[$2]; //@line 787 "arraymodule.c"
        var $4=($3)!=(_Arraytype); //@line 787 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 787 "arraymodule.c"
      case 1: // $bb
        var $5=$a_addr; //@line 787 "arraymodule.c"
        var $6=$5+4; //@line 787 "arraymodule.c"
        var $7=HEAP[$6]; //@line 787 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 787 "arraymodule.c"
        var $9=($8)==0; //@line 787 "arraymodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 787 "arraymodule.c"
      case 2: // $bb1
        ___assert_fail(__str22, __str15, 787, ___PRETTY_FUNCTION___9470); //@line 787 "arraymodule.c"
        throw "Reached an unreachable!" //@line 787 "arraymodule.c"
      case 3: // $bb2
        var $10=$a_addr; //@line 788 "arraymodule.c"
        var $11=$10; //@line 788 "arraymodule.c"
        var $12=$i_addr; //@line 788 "arraymodule.c"
        var $13=$v_addr; //@line 788 "arraymodule.c"
        var $14=_array_ass_item($11, $12, $13); //@line 788 "arraymodule.c"
        $0=$14; //@line 788 "arraymodule.c"
        var $15=$0; //@line 788 "arraymodule.c"
        $retval=$15; //@line 788 "arraymodule.c"
        var $retval3=$retval; //@line 788 "arraymodule.c"
        ;
        return $retval3; //@line 788 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_iter_extend($self, $bb) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $bb_addr;
        var $retval;
        var $0;
        var $it;
        var $v;
        $self_addr=$self;
        $bb_addr=$bb;
        var $1=$bb_addr; //@line 796 "arraymodule.c"
        var $2=_PyObject_GetIter($1); //@line 796 "arraymodule.c"
        $it=$2; //@line 796 "arraymodule.c"
        var $3=$it; //@line 797 "arraymodule.c"
        var $4=($3)==0; //@line 797 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 10; break; } //@line 797 "arraymodule.c"
      case 1: // $bb1
        $0=-1; //@line 798 "arraymodule.c"
        __label__ = 16; break; //@line 798 "arraymodule.c"
      case 2: // $bb3
        var $5=$self_addr; //@line 801 "arraymodule.c"
        var $6=$5; //@line 801 "arraymodule.c"
        var $7=$6+8; //@line 801 "arraymodule.c"
        var $8=HEAP[$7]; //@line 801 "arraymodule.c"
        var $9=$self_addr; //@line 801 "arraymodule.c"
        var $10=$v; //@line 801 "arraymodule.c"
        var $11=_ins1($9, $8, $10); //@line 801 "arraymodule.c"
        var $12=($11)!=0; //@line 801 "arraymodule.c"
        var $13=$v; //@line 802 "arraymodule.c"
        var $14=$13; //@line 802 "arraymodule.c"
        var $15=HEAP[$14]; //@line 802 "arraymodule.c"
        var $16=($15) - 1; //@line 802 "arraymodule.c"
        var $17=$v; //@line 802 "arraymodule.c"
        var $18=$17; //@line 802 "arraymodule.c"
        HEAP[$18]=$16; //@line 802 "arraymodule.c"
        var $19=$v; //@line 802 "arraymodule.c"
        var $20=$19; //@line 802 "arraymodule.c"
        var $21=HEAP[$20]; //@line 802 "arraymodule.c"
        var $22=($21)==0; //@line 802 "arraymodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 8; break; } //@line 801 "arraymodule.c"
      case 3: // $bb4
        if ($22) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 802 "arraymodule.c"
      case 4: // $bb5
        var $23=$v; //@line 802 "arraymodule.c"
        var $24=$23+4; //@line 802 "arraymodule.c"
        var $25=HEAP[$24]; //@line 802 "arraymodule.c"
        var $26=$25+24; //@line 802 "arraymodule.c"
        var $27=HEAP[$26]; //@line 802 "arraymodule.c"
        var $28=$v; //@line 802 "arraymodule.c"
        FUNCTION_TABLE[$27]($28); //@line 802 "arraymodule.c"
        __label__ = 5; break; //@line 802 "arraymodule.c"
      case 5: // $bb6
        var $29=$it; //@line 803 "arraymodule.c"
        var $30=$29; //@line 803 "arraymodule.c"
        var $31=HEAP[$30]; //@line 803 "arraymodule.c"
        var $32=($31) - 1; //@line 803 "arraymodule.c"
        var $33=$it; //@line 803 "arraymodule.c"
        var $34=$33; //@line 803 "arraymodule.c"
        HEAP[$34]=$32; //@line 803 "arraymodule.c"
        var $35=$it; //@line 803 "arraymodule.c"
        var $36=$35; //@line 803 "arraymodule.c"
        var $37=HEAP[$36]; //@line 803 "arraymodule.c"
        var $38=($37)==0; //@line 803 "arraymodule.c"
        if ($38) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 803 "arraymodule.c"
      case 6: // $bb7
        var $39=$it; //@line 803 "arraymodule.c"
        var $40=$39+4; //@line 803 "arraymodule.c"
        var $41=HEAP[$40]; //@line 803 "arraymodule.c"
        var $42=$41+24; //@line 803 "arraymodule.c"
        var $43=HEAP[$42]; //@line 803 "arraymodule.c"
        var $44=$it; //@line 803 "arraymodule.c"
        FUNCTION_TABLE[$43]($44); //@line 803 "arraymodule.c"
        __label__ = 7; break; //@line 803 "arraymodule.c"
      case 7: // $bb8
        $0=-1; //@line 804 "arraymodule.c"
        __label__ = 16; break; //@line 804 "arraymodule.c"
      case 8: // $bb9
        if ($22) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 806 "arraymodule.c"
      case 9: // $bb10
        var $45=$v; //@line 806 "arraymodule.c"
        var $46=$45+4; //@line 806 "arraymodule.c"
        var $47=HEAP[$46]; //@line 806 "arraymodule.c"
        var $48=$47+24; //@line 806 "arraymodule.c"
        var $49=HEAP[$48]; //@line 806 "arraymodule.c"
        var $50=$v; //@line 806 "arraymodule.c"
        FUNCTION_TABLE[$49]($50); //@line 806 "arraymodule.c"
        __label__ = 10; break; //@line 806 "arraymodule.c"
      case 10: // $bb11
        var $51=$it; //@line 800 "arraymodule.c"
        var $52=_PyIter_Next($51); //@line 800 "arraymodule.c"
        $v=$52; //@line 800 "arraymodule.c"
        var $53=($52)!=0; //@line 800 "arraymodule.c"
        if ($53) { __label__ = 2; break; } else { __label__ = 11; break; } //@line 800 "arraymodule.c"
      case 11: // $bb12
        var $54=$it; //@line 808 "arraymodule.c"
        var $55=$54; //@line 808 "arraymodule.c"
        var $56=HEAP[$55]; //@line 808 "arraymodule.c"
        var $57=($56) - 1; //@line 808 "arraymodule.c"
        var $58=$it; //@line 808 "arraymodule.c"
        var $59=$58; //@line 808 "arraymodule.c"
        HEAP[$59]=$57; //@line 808 "arraymodule.c"
        var $60=$it; //@line 808 "arraymodule.c"
        var $61=$60; //@line 808 "arraymodule.c"
        var $62=HEAP[$61]; //@line 808 "arraymodule.c"
        var $63=($62)==0; //@line 808 "arraymodule.c"
        if ($63) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 808 "arraymodule.c"
      case 12: // $bb13
        var $64=$it; //@line 808 "arraymodule.c"
        var $65=$64+4; //@line 808 "arraymodule.c"
        var $66=HEAP[$65]; //@line 808 "arraymodule.c"
        var $67=$66+24; //@line 808 "arraymodule.c"
        var $68=HEAP[$67]; //@line 808 "arraymodule.c"
        var $69=$it; //@line 808 "arraymodule.c"
        FUNCTION_TABLE[$68]($69); //@line 808 "arraymodule.c"
        __label__ = 13; break; //@line 808 "arraymodule.c"
      case 13: // $bb14
        var $70=_PyErr_Occurred(); //@line 809 "arraymodule.c"
        var $71=($70)!=0; //@line 809 "arraymodule.c"
        if ($71) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 809 "arraymodule.c"
      case 14: // $bb15
        $0=-1; //@line 810 "arraymodule.c"
        __label__ = 16; break; //@line 810 "arraymodule.c"
      case 15: // $bb16
        $0=0; //@line 811 "arraymodule.c"
        __label__ = 16; break; //@line 811 "arraymodule.c"
      case 16: // $bb17
        var $72=$0; //@line 798 "arraymodule.c"
        $retval=$72; //@line 798 "arraymodule.c"
        var $retval18=$retval; //@line 798 "arraymodule.c"
        ;
        return $retval18; //@line 798 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_do_extend($self, $bb) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $bb_addr;
        var $retval;
        var $iftmp_132;
        var $iftmp_131;
        var $iftmp_130;
        var $0;
        var $size;
        var $old_item;
        $self_addr=$self;
        $bb_addr=$bb;
        var $1=$bb_addr; //@line 820 "arraymodule.c"
        var $2=$1+4; //@line 820 "arraymodule.c"
        var $3=HEAP[$2]; //@line 820 "arraymodule.c"
        var $4=($3)!=(_Arraytype); //@line 820 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 820 "arraymodule.c"
      case 1: // $bb1
        var $5=$bb_addr; //@line 820 "arraymodule.c"
        var $6=$5+4; //@line 820 "arraymodule.c"
        var $7=HEAP[$6]; //@line 820 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 820 "arraymodule.c"
        var $9=($8)==0; //@line 820 "arraymodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 820 "arraymodule.c"
      case 2: // $bb2
        var $10=$self_addr; //@line 821 "arraymodule.c"
        var $11=$bb_addr; //@line 821 "arraymodule.c"
        var $12=_array_iter_extend($10, $11); //@line 821 "arraymodule.c"
        $0=$12; //@line 821 "arraymodule.c"
        __label__ = 20; break; //@line 821 "arraymodule.c"
      case 3: // $bb3
        var $13=$self_addr; //@line 823 "arraymodule.c"
        var $14=$13+20; //@line 823 "arraymodule.c"
        var $15=HEAP[$14]; //@line 823 "arraymodule.c"
        var $16=$bb_addr; //@line 823 "arraymodule.c"
        var $17=$16; //@line 823 "arraymodule.c"
        var $18=$17+20; //@line 823 "arraymodule.c"
        var $19=HEAP[$18]; //@line 823 "arraymodule.c"
        var $20=($15)!=($19); //@line 823 "arraymodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 823 "arraymodule.c"
      case 4: // $bb4
        var $21=HEAP[_PyExc_TypeError]; //@line 824 "arraymodule.c"
        _PyErr_SetString($21, __str23); //@line 824 "arraymodule.c"
        $0=-1; //@line 826 "arraymodule.c"
        __label__ = 20; break; //@line 826 "arraymodule.c"
      case 5: // $bb5
        var $22=$self_addr; //@line 828 "arraymodule.c"
        var $23=$22; //@line 828 "arraymodule.c"
        var $24=$23+8; //@line 828 "arraymodule.c"
        var $25=HEAP[$24]; //@line 828 "arraymodule.c"
        var $26=$bb_addr; //@line 828 "arraymodule.c"
        var $27=$26; //@line 828 "arraymodule.c"
        var $28=$27+8; //@line 828 "arraymodule.c"
        var $29=HEAP[$28]; //@line 828 "arraymodule.c"
        var $30=2147483647 - ($29); //@line 828 "arraymodule.c"
        var $31=($25) > ($30); //@line 828 "arraymodule.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 828 "arraymodule.c"
      case 6: // $bb6
        var $32=$self_addr; //@line 828 "arraymodule.c"
        var $33=$32; //@line 828 "arraymodule.c"
        var $34=$33+8; //@line 828 "arraymodule.c"
        var $35=HEAP[$34]; //@line 828 "arraymodule.c"
        var $36=$bb_addr; //@line 828 "arraymodule.c"
        var $37=$36; //@line 828 "arraymodule.c"
        var $38=$37+8; //@line 828 "arraymodule.c"
        var $39=HEAP[$38]; //@line 828 "arraymodule.c"
        var $40=($39) + ($35); //@line 828 "arraymodule.c"
        var $41=$self_addr; //@line 828 "arraymodule.c"
        var $42=$41+20; //@line 828 "arraymodule.c"
        var $43=HEAP[$42]; //@line 828 "arraymodule.c"
        var $44=$43+4; //@line 828 "arraymodule.c"
        var $45=HEAP[$44]; //@line 828 "arraymodule.c"
        var $46=((2147483647/($45))|0); //@line 828 "arraymodule.c"
        var $47=($40) > ($46); //@line 828 "arraymodule.c"
        if ($47) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 828 "arraymodule.c"
      case 7: // $bb7
        var $48=_PyErr_NoMemory(); //@line 830 "arraymodule.c"
        $0=-1; //@line 831 "arraymodule.c"
        __label__ = 20; break; //@line 831 "arraymodule.c"
      case 8: // $bb8
        var $49=$self_addr; //@line 833 "arraymodule.c"
        var $50=$49; //@line 833 "arraymodule.c"
        var $51=$50+8; //@line 833 "arraymodule.c"
        var $52=HEAP[$51]; //@line 833 "arraymodule.c"
        var $53=$bb_addr; //@line 833 "arraymodule.c"
        var $54=$53; //@line 833 "arraymodule.c"
        var $55=$54+8; //@line 833 "arraymodule.c"
        var $56=HEAP[$55]; //@line 833 "arraymodule.c"
        var $57=($56) + ($52); //@line 833 "arraymodule.c"
        $size=$57; //@line 833 "arraymodule.c"
        var $58=$self_addr; //@line 834 "arraymodule.c"
        var $59=$58+12; //@line 834 "arraymodule.c"
        var $60=HEAP[$59]; //@line 834 "arraymodule.c"
        $old_item=$60; //@line 834 "arraymodule.c"
        var $61=$self_addr; //@line 835 "arraymodule.c"
        var $62=$61+20; //@line 835 "arraymodule.c"
        var $63=HEAP[$62]; //@line 835 "arraymodule.c"
        var $64=$63+4; //@line 835 "arraymodule.c"
        var $65=HEAP[$64]; //@line 835 "arraymodule.c"
        var $66=$size; //@line 835 "arraymodule.c"
        var $67=($66) * ($65); //@line 835 "arraymodule.c"
        var $68=($67) >= 0; //@line 835 "arraymodule.c"
        if ($68) { __label__ = 9; break; } else { __label__ = 16; break; } //@line 835 "arraymodule.c"
      case 9: // $bb9
        var $69=$self_addr; //@line 835 "arraymodule.c"
        var $70=$69+20; //@line 835 "arraymodule.c"
        var $71=HEAP[$70]; //@line 835 "arraymodule.c"
        var $72=$71+4; //@line 835 "arraymodule.c"
        var $73=HEAP[$72]; //@line 835 "arraymodule.c"
        var $74=$size; //@line 835 "arraymodule.c"
        var $75=($74) * ($73); //@line 835 "arraymodule.c"
        var $76=($75) >= 0; //@line 835 "arraymodule.c"
        if ($76) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 835 "arraymodule.c"
      case 10: // $bb10
        var $77=$self_addr; //@line 835 "arraymodule.c"
        var $78=$77+20; //@line 835 "arraymodule.c"
        var $79=HEAP[$78]; //@line 835 "arraymodule.c"
        var $80=$79+4; //@line 835 "arraymodule.c"
        var $81=HEAP[$80]; //@line 835 "arraymodule.c"
        var $82=$size; //@line 835 "arraymodule.c"
        var $83=($82) * ($81); //@line 835 "arraymodule.c"
        var $84=($83)!=0; //@line 835 "arraymodule.c"
        if ($84) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 835 "arraymodule.c"
      case 11: // $bb11
        var $85=$self_addr; //@line 835 "arraymodule.c"
        var $86=$85+20; //@line 835 "arraymodule.c"
        var $87=HEAP[$86]; //@line 835 "arraymodule.c"
        var $88=$87+4; //@line 835 "arraymodule.c"
        var $89=HEAP[$88]; //@line 835 "arraymodule.c"
        var $90=$size; //@line 835 "arraymodule.c"
        var $91=($90) * ($89); //@line 835 "arraymodule.c"
        $iftmp_132=$91; //@line 835 "arraymodule.c"
        __label__ = 13; break; //@line 835 "arraymodule.c"
      case 12: // $bb12
        $iftmp_132=1; //@line 835 "arraymodule.c"
        __label__ = 13; break; //@line 835 "arraymodule.c"
      case 13: // $bb13
        var $92=$self_addr; //@line 835 "arraymodule.c"
        var $93=$92+12; //@line 835 "arraymodule.c"
        var $94=HEAP[$93]; //@line 835 "arraymodule.c"
        var $95=$iftmp_132; //@line 835 "arraymodule.c"
        var $96=_realloc($94, $95); //@line 835 "arraymodule.c"
        $iftmp_131=$96; //@line 835 "arraymodule.c"
        __label__ = 15; break; //@line 835 "arraymodule.c"
      case 14: // $bb14
        $iftmp_131=0; //@line 835 "arraymodule.c"
        __label__ = 15; break; //@line 835 "arraymodule.c"
      case 15: // $bb15
        var $97=$iftmp_131; //@line 835 "arraymodule.c"
        $iftmp_130=$97; //@line 835 "arraymodule.c"
        __label__ = 17; break; //@line 835 "arraymodule.c"
      case 16: // $bb16
        $iftmp_130=0; //@line 835 "arraymodule.c"
        __label__ = 17; break; //@line 835 "arraymodule.c"
      case 17: // $bb17
        var $98=$self_addr; //@line 835 "arraymodule.c"
        var $99=$98+12; //@line 835 "arraymodule.c"
        var $100=$iftmp_130; //@line 835 "arraymodule.c"
        HEAP[$99]=$100; //@line 835 "arraymodule.c"
        var $101=$self_addr; //@line 836 "arraymodule.c"
        var $102=$101+12; //@line 836 "arraymodule.c"
        var $103=HEAP[$102]; //@line 836 "arraymodule.c"
        var $104=($103)==0; //@line 836 "arraymodule.c"
        if ($104) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 836 "arraymodule.c"
      case 18: // $bb18
        var $105=$self_addr; //@line 837 "arraymodule.c"
        var $106=$105+12; //@line 837 "arraymodule.c"
        var $107=$old_item; //@line 837 "arraymodule.c"
        HEAP[$106]=$107; //@line 837 "arraymodule.c"
        var $108=_PyErr_NoMemory(); //@line 838 "arraymodule.c"
        $0=-1; //@line 839 "arraymodule.c"
        __label__ = 20; break; //@line 839 "arraymodule.c"
      case 19: // $bb19
        var $109=$bb_addr; //@line 841 "arraymodule.c"
        var $110=$109; //@line 841 "arraymodule.c"
        var $111=$110+8; //@line 841 "arraymodule.c"
        var $112=HEAP[$111]; //@line 841 "arraymodule.c"
        var $113=$bb_addr; //@line 841 "arraymodule.c"
        var $114=$113; //@line 841 "arraymodule.c"
        var $115=$114+20; //@line 841 "arraymodule.c"
        var $116=HEAP[$115]; //@line 841 "arraymodule.c"
        var $117=$116+4; //@line 841 "arraymodule.c"
        var $118=HEAP[$117]; //@line 841 "arraymodule.c"
        var $119=($118) * ($112); //@line 841 "arraymodule.c"
        var $120=$bb_addr; //@line 841 "arraymodule.c"
        var $121=$120; //@line 841 "arraymodule.c"
        var $122=$121+12; //@line 841 "arraymodule.c"
        var $123=HEAP[$122]; //@line 841 "arraymodule.c"
        var $124=$self_addr; //@line 841 "arraymodule.c"
        var $125=$124+12; //@line 841 "arraymodule.c"
        var $126=HEAP[$125]; //@line 841 "arraymodule.c"
        var $127=$self_addr; //@line 841 "arraymodule.c"
        var $128=$127; //@line 841 "arraymodule.c"
        var $129=$128+8; //@line 841 "arraymodule.c"
        var $130=HEAP[$129]; //@line 841 "arraymodule.c"
        var $131=$self_addr; //@line 841 "arraymodule.c"
        var $132=$131+20; //@line 841 "arraymodule.c"
        var $133=HEAP[$132]; //@line 841 "arraymodule.c"
        var $134=$133+4; //@line 841 "arraymodule.c"
        var $135=HEAP[$134]; //@line 841 "arraymodule.c"
        var $136=($135) * ($130); //@line 841 "arraymodule.c"
        var $137=$126+$136; //@line 841 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($137, $123, $119, 1, 0); //@line 841 "arraymodule.c"
        var $138=$self_addr; //@line 843 "arraymodule.c"
        var $139=$138; //@line 843 "arraymodule.c"
        var $140=$139+8; //@line 843 "arraymodule.c"
        var $141=$size; //@line 843 "arraymodule.c"
        HEAP[$140]=$141; //@line 843 "arraymodule.c"
        var $142=$self_addr; //@line 844 "arraymodule.c"
        var $143=$142+16; //@line 844 "arraymodule.c"
        var $144=$size; //@line 844 "arraymodule.c"
        HEAP[$143]=$144; //@line 844 "arraymodule.c"
        $0=0; //@line 846 "arraymodule.c"
        __label__ = 20; break; //@line 846 "arraymodule.c"
      case 20: // $bb20
        var $145=$0; //@line 821 "arraymodule.c"
        $retval=$145; //@line 821 "arraymodule.c"
        var $retval21=$retval; //@line 821 "arraymodule.c"
        ;
        return $retval21; //@line 821 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_inplace_concat($self, $bb) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $bb_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $bb_addr=$bb;
        var $1=$bb_addr; //@line 853 "arraymodule.c"
        var $2=$1+4; //@line 853 "arraymodule.c"
        var $3=HEAP[$2]; //@line 853 "arraymodule.c"
        var $4=($3)!=(_Arraytype); //@line 853 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 853 "arraymodule.c"
      case 1: // $bb1
        var $5=$bb_addr; //@line 853 "arraymodule.c"
        var $6=$5+4; //@line 853 "arraymodule.c"
        var $7=HEAP[$6]; //@line 853 "arraymodule.c"
        var $8=_PyType_IsSubtype($7, _Arraytype); //@line 853 "arraymodule.c"
        var $9=($8)==0; //@line 853 "arraymodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 853 "arraymodule.c"
      case 2: // $bb2
        var $10=$bb_addr; //@line 854 "arraymodule.c"
        var $11=$10+4; //@line 854 "arraymodule.c"
        var $12=HEAP[$11]; //@line 854 "arraymodule.c"
        var $13=$12+12; //@line 854 "arraymodule.c"
        var $14=HEAP[$13]; //@line 854 "arraymodule.c"
        var $15=HEAP[_PyExc_TypeError]; //@line 854 "arraymodule.c"
        var $16=_PyErr_Format($15, __str24, allocate([$14,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 854 "arraymodule.c"
        $0=0; //@line 857 "arraymodule.c"
        __label__ = 6; break; //@line 857 "arraymodule.c"
      case 3: // $bb3
        var $17=$self_addr; //@line 859 "arraymodule.c"
        var $18=$bb_addr; //@line 859 "arraymodule.c"
        var $19=_array_do_extend($17, $18); //@line 859 "arraymodule.c"
        var $20=($19)==-1; //@line 859 "arraymodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 859 "arraymodule.c"
      case 4: // $bb4
        $0=0; //@line 860 "arraymodule.c"
        __label__ = 6; break; //@line 860 "arraymodule.c"
      case 5: // $bb5
        var $21=$self_addr; //@line 861 "arraymodule.c"
        var $22=$21; //@line 861 "arraymodule.c"
        var $23=$22; //@line 861 "arraymodule.c"
        var $24=HEAP[$23]; //@line 861 "arraymodule.c"
        var $25=($24) + 1; //@line 861 "arraymodule.c"
        var $26=$22; //@line 861 "arraymodule.c"
        HEAP[$26]=$25; //@line 861 "arraymodule.c"
        var $27=$self_addr; //@line 862 "arraymodule.c"
        var $28=$27; //@line 862 "arraymodule.c"
        $0=$28; //@line 862 "arraymodule.c"
        __label__ = 6; break; //@line 862 "arraymodule.c"
      case 6: // $bb6
        var $29=$0; //@line 857 "arraymodule.c"
        $retval=$29; //@line 857 "arraymodule.c"
        var $retval7=$retval; //@line 857 "arraymodule.c"
        ;
        return $retval7; //@line 857 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_inplace_repeat($self, $n) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $n_addr;
        var $retval;
        var $iftmp_146;
        var $iftmp_145;
        var $iftmp_144;
        var $0;
        var $items;
        var $p;
        var $size;
        var $i;
        $self_addr=$self;
        $n_addr=$n;
        var $1=$self_addr; //@line 871 "arraymodule.c"
        var $2=$1; //@line 871 "arraymodule.c"
        var $3=$2+8; //@line 871 "arraymodule.c"
        var $4=HEAP[$3]; //@line 871 "arraymodule.c"
        var $5=($4) > 0; //@line 871 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 22; break; } //@line 871 "arraymodule.c"
      case 1: // $bb
        var $6=$n_addr; //@line 872 "arraymodule.c"
        var $7=($6) < 0; //@line 872 "arraymodule.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 872 "arraymodule.c"
      case 2: // $bb1
        $n_addr=0; //@line 873 "arraymodule.c"
        __label__ = 3; break; //@line 873 "arraymodule.c"
      case 3: // $bb2
        var $8=$self_addr; //@line 874 "arraymodule.c"
        var $9=$8+12; //@line 874 "arraymodule.c"
        var $10=HEAP[$9]; //@line 874 "arraymodule.c"
        $items=$10; //@line 874 "arraymodule.c"
        var $11=$self_addr; //@line 875 "arraymodule.c"
        var $12=$11+20; //@line 875 "arraymodule.c"
        var $13=HEAP[$12]; //@line 875 "arraymodule.c"
        var $14=$13+4; //@line 875 "arraymodule.c"
        var $15=HEAP[$14]; //@line 875 "arraymodule.c"
        var $16=($15)!=0; //@line 875 "arraymodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 875 "arraymodule.c"
      case 4: // $bb3
        var $17=$self_addr; //@line 875 "arraymodule.c"
        var $18=$17; //@line 875 "arraymodule.c"
        var $19=$18+8; //@line 875 "arraymodule.c"
        var $20=HEAP[$19]; //@line 875 "arraymodule.c"
        var $21=$self_addr; //@line 875 "arraymodule.c"
        var $22=$21+20; //@line 875 "arraymodule.c"
        var $23=HEAP[$22]; //@line 875 "arraymodule.c"
        var $24=$23+4; //@line 875 "arraymodule.c"
        var $25=HEAP[$24]; //@line 875 "arraymodule.c"
        var $26=((2147483647/($25))|0); //@line 875 "arraymodule.c"
        var $27=($20) > ($26); //@line 875 "arraymodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 875 "arraymodule.c"
      case 5: // $bb4
        var $28=_PyErr_NoMemory(); //@line 877 "arraymodule.c"
        $0=$28; //@line 877 "arraymodule.c"
        __label__ = 23; break; //@line 877 "arraymodule.c"
      case 6: // $bb5
        var $29=$self_addr; //@line 879 "arraymodule.c"
        var $30=$29; //@line 879 "arraymodule.c"
        var $31=$30+8; //@line 879 "arraymodule.c"
        var $32=HEAP[$31]; //@line 879 "arraymodule.c"
        var $33=$self_addr; //@line 879 "arraymodule.c"
        var $34=$33+20; //@line 879 "arraymodule.c"
        var $35=HEAP[$34]; //@line 879 "arraymodule.c"
        var $36=$35+4; //@line 879 "arraymodule.c"
        var $37=HEAP[$36]; //@line 879 "arraymodule.c"
        var $38=($37) * ($32); //@line 879 "arraymodule.c"
        $size=$38; //@line 879 "arraymodule.c"
        var $39=$n_addr; //@line 880 "arraymodule.c"
        var $40=($39)==0; //@line 880 "arraymodule.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 880 "arraymodule.c"
      case 7: // $bb6
        var $41=$items; //@line 881 "arraymodule.c"
        _free($41); //@line 881 "arraymodule.c"
        var $42=$self_addr; //@line 882 "arraymodule.c"
        var $43=$42+12; //@line 882 "arraymodule.c"
        HEAP[$43]=0; //@line 882 "arraymodule.c"
        var $44=$self_addr; //@line 883 "arraymodule.c"
        var $45=$44; //@line 883 "arraymodule.c"
        var $46=$45+8; //@line 883 "arraymodule.c"
        HEAP[$46]=0; //@line 883 "arraymodule.c"
        var $47=$self_addr; //@line 884 "arraymodule.c"
        var $48=$47+16; //@line 884 "arraymodule.c"
        HEAP[$48]=0; //@line 884 "arraymodule.c"
        __label__ = 22; break; //@line 884 "arraymodule.c"
      case 8: // $bb7
        var $49=$n_addr; //@line 887 "arraymodule.c"
        var $50=((2147483647/($49))|0); //@line 887 "arraymodule.c"
        var $51=$size; //@line 887 "arraymodule.c"
        var $52=($50) < ($51); //@line 887 "arraymodule.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 887 "arraymodule.c"
      case 9: // $bb8
        var $53=_PyErr_NoMemory(); //@line 888 "arraymodule.c"
        $0=$53; //@line 888 "arraymodule.c"
        __label__ = 23; break; //@line 888 "arraymodule.c"
      case 10: // $bb9
        var $54=$n_addr; //@line 890 "arraymodule.c"
        var $55=$size; //@line 890 "arraymodule.c"
        var $56=($55) * ($54); //@line 890 "arraymodule.c"
        var $57=($56) >= 0; //@line 890 "arraymodule.c"
        if ($57) { __label__ = 11; break; } else { __label__ = 16; break; } //@line 890 "arraymodule.c"
      case 11: // $bb10
        var $58=$n_addr; //@line 890 "arraymodule.c"
        var $59=$size; //@line 890 "arraymodule.c"
        var $60=($59) * ($58); //@line 890 "arraymodule.c"
        var $61=($60) >= 0; //@line 890 "arraymodule.c"
        if ($61) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 890 "arraymodule.c"
      case 12: // $bb11
        var $62=$n_addr; //@line 890 "arraymodule.c"
        var $63=$size; //@line 890 "arraymodule.c"
        var $64=($63) * ($62); //@line 890 "arraymodule.c"
        var $65=($64)!=0; //@line 890 "arraymodule.c"
        if ($65) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 890 "arraymodule.c"
      case 13: // $bb12
        var $66=$n_addr; //@line 890 "arraymodule.c"
        var $67=$size; //@line 890 "arraymodule.c"
        var $68=($67) * ($66); //@line 890 "arraymodule.c"
        $iftmp_146=$68; //@line 890 "arraymodule.c"
        __label__ = 17; break; //@line 890 "arraymodule.c"
      case 14: // $bb13
        $iftmp_146=1; //@line 890 "arraymodule.c"
        __label__ = 17; break; //@line 890 "arraymodule.c"
      case 15: // $bb18_thread1
        $iftmp_145=0; //@line 890 "arraymodule.c"
        $iftmp_144=0; //@line 890 "arraymodule.c"
        $items=0; //@line 890 "arraymodule.c"
        __label__ = 18; break;
      case 16: // $bb18_thread
        $iftmp_144=0; //@line 890 "arraymodule.c"
        $items=0; //@line 890 "arraymodule.c"
        __label__ = 18; break;
      case 17: // $bb18
        var $69=$items; //@line 890 "arraymodule.c"
        var $70=$iftmp_146; //@line 890 "arraymodule.c"
        var $71=_realloc($69, $70); //@line 890 "arraymodule.c"
        $iftmp_145=$71; //@line 890 "arraymodule.c"
        $iftmp_144=$71; //@line 890 "arraymodule.c"
        $items=$71; //@line 890 "arraymodule.c"
        var $72=($71)==0; //@line 891 "arraymodule.c"
        if ($72) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 891 "arraymodule.c"
      case 18: // $bb19
        var $73=_PyErr_NoMemory(); //@line 892 "arraymodule.c"
        $0=$73; //@line 892 "arraymodule.c"
        __label__ = 23; break; //@line 892 "arraymodule.c"
      case 19: // $bb20
        var $74=$items; //@line 893 "arraymodule.c"
        $p=$74; //@line 893 "arraymodule.c"
        $i=1; //@line 894 "arraymodule.c"
        var $75=$i; //@line 894 "arraymodule.c"
        var $76=$n_addr; //@line 894 "arraymodule.c"
        var $77=($75) < ($76); //@line 894 "arraymodule.c"
        if ($77) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 894 "arraymodule.c"
      case 20: // $bb21
        var $78=$p; //@line 895 "arraymodule.c"
        var $79=$size; //@line 895 "arraymodule.c"
        var $80=$78+$79; //@line 895 "arraymodule.c"
        $p=$80; //@line 895 "arraymodule.c"
        var $81=$size; //@line 896 "arraymodule.c"
        var $82=$p; //@line 896 "arraymodule.c"
        var $83=$items; //@line 896 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($82, $83, $81, 1, 0); //@line 896 "arraymodule.c"
        var $84=$i; //@line 894 "arraymodule.c"
        var $85=($84) + 1; //@line 894 "arraymodule.c"
        $i=$85; //@line 894 "arraymodule.c"
        var $86=$i; //@line 894 "arraymodule.c"
        var $87=$n_addr; //@line 894 "arraymodule.c"
        var $88=($86) < ($87); //@line 894 "arraymodule.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 894 "arraymodule.c"
      case 21: // $bb23
        var $89=$self_addr; //@line 898 "arraymodule.c"
        var $90=$89+12; //@line 898 "arraymodule.c"
        var $91=$items; //@line 898 "arraymodule.c"
        HEAP[$90]=$91; //@line 898 "arraymodule.c"
        var $92=$self_addr; //@line 899 "arraymodule.c"
        var $93=$92; //@line 899 "arraymodule.c"
        var $94=$self_addr; //@line 899 "arraymodule.c"
        var $95=$94; //@line 899 "arraymodule.c"
        var $96=$95+8; //@line 899 "arraymodule.c"
        var $97=HEAP[$96]; //@line 899 "arraymodule.c"
        var $98=$n_addr; //@line 899 "arraymodule.c"
        var $99=($98) * ($97); //@line 899 "arraymodule.c"
        var $100=$93+8; //@line 899 "arraymodule.c"
        HEAP[$100]=$99; //@line 899 "arraymodule.c"
        var $101=$self_addr; //@line 900 "arraymodule.c"
        var $102=$101; //@line 900 "arraymodule.c"
        var $103=$102+8; //@line 900 "arraymodule.c"
        var $104=HEAP[$103]; //@line 900 "arraymodule.c"
        var $105=$self_addr; //@line 900 "arraymodule.c"
        var $106=$105+16; //@line 900 "arraymodule.c"
        HEAP[$106]=$104; //@line 900 "arraymodule.c"
        __label__ = 22; break; //@line 900 "arraymodule.c"
      case 22: // $bb24
        var $107=$self_addr; //@line 903 "arraymodule.c"
        var $108=$107; //@line 903 "arraymodule.c"
        var $109=$108; //@line 903 "arraymodule.c"
        var $110=HEAP[$109]; //@line 903 "arraymodule.c"
        var $111=($110) + 1; //@line 903 "arraymodule.c"
        var $112=$108; //@line 903 "arraymodule.c"
        HEAP[$112]=$111; //@line 903 "arraymodule.c"
        var $113=$self_addr; //@line 904 "arraymodule.c"
        var $114=$113; //@line 904 "arraymodule.c"
        $0=$114; //@line 904 "arraymodule.c"
        __label__ = 23; break; //@line 904 "arraymodule.c"
      case 23: // $bb25
        var $115=$0; //@line 877 "arraymodule.c"
        $retval=$115; //@line 877 "arraymodule.c"
        var $retval26=$retval; //@line 877 "arraymodule.c"
        ;
        return $retval26; //@line 877 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ins($self, $where, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $where_addr;
        var $v_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $where_addr=$where;
        $v_addr=$v;
        var $1=$self_addr; //@line 911 "arraymodule.c"
        var $2=$where_addr; //@line 911 "arraymodule.c"
        var $3=$v_addr; //@line 911 "arraymodule.c"
        var $4=_ins1($1, $2, $3); //@line 911 "arraymodule.c"
        var $5=($4)!=0; //@line 911 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 911 "arraymodule.c"
      case 1: // $bb
        $0=0; //@line 912 "arraymodule.c"
        __label__ = 3; break; //@line 912 "arraymodule.c"
      case 2: // $bb1
        var $6=HEAP[__Py_NoneStruct]; //@line 913 "arraymodule.c"
        var $7=($6) + 1; //@line 913 "arraymodule.c"
        HEAP[__Py_NoneStruct]=$7; //@line 913 "arraymodule.c"
        $0=__Py_NoneStruct; //@line 914 "arraymodule.c"
        __label__ = 3; break; //@line 914 "arraymodule.c"
      case 3: // $bb2
        var $8=$0; //@line 912 "arraymodule.c"
        $retval=$8; //@line 912 "arraymodule.c"
        var $retval3=$retval; //@line 912 "arraymodule.c"
        ;
        return $retval3; //@line 912 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_count($self, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $count;
        var $i;
        var $selfi;
        var $cmp;
        $self_addr=$self;
        $v_addr=$v;
        $count=0; //@line 920 "arraymodule.c"
        $i=0; //@line 923 "arraymodule.c"
        __label__ = 8; break; //@line 923 "arraymodule.c"
      case 1: // $bb
        var $1=$self_addr; //@line 924 "arraymodule.c"
        var $2=$1; //@line 924 "arraymodule.c"
        var $3=$i; //@line 924 "arraymodule.c"
        var $4=_getarrayitem($2, $3); //@line 924 "arraymodule.c"
        $selfi=$4; //@line 924 "arraymodule.c"
        var $5=$selfi; //@line 925 "arraymodule.c"
        var $6=$v_addr; //@line 925 "arraymodule.c"
        var $7=_PyObject_RichCompareBool($5, $6, 2); //@line 925 "arraymodule.c"
        $cmp=$7; //@line 925 "arraymodule.c"
        var $8=$selfi; //@line 926 "arraymodule.c"
        var $9=$8; //@line 926 "arraymodule.c"
        var $10=HEAP[$9]; //@line 926 "arraymodule.c"
        var $11=($10) - 1; //@line 926 "arraymodule.c"
        var $12=$selfi; //@line 926 "arraymodule.c"
        var $13=$12; //@line 926 "arraymodule.c"
        HEAP[$13]=$11; //@line 926 "arraymodule.c"
        var $14=$selfi; //@line 926 "arraymodule.c"
        var $15=$14; //@line 926 "arraymodule.c"
        var $16=HEAP[$15]; //@line 926 "arraymodule.c"
        var $17=($16)==0; //@line 926 "arraymodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 926 "arraymodule.c"
      case 2: // $bb1
        var $18=$selfi; //@line 926 "arraymodule.c"
        var $19=$18+4; //@line 926 "arraymodule.c"
        var $20=HEAP[$19]; //@line 926 "arraymodule.c"
        var $21=$20+24; //@line 926 "arraymodule.c"
        var $22=HEAP[$21]; //@line 926 "arraymodule.c"
        var $23=$selfi; //@line 926 "arraymodule.c"
        FUNCTION_TABLE[$22]($23); //@line 926 "arraymodule.c"
        __label__ = 3; break; //@line 926 "arraymodule.c"
      case 3: // $bb2
        var $24=$cmp; //@line 927 "arraymodule.c"
        var $25=($24) > 0; //@line 927 "arraymodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 927 "arraymodule.c"
      case 4: // $bb3
        var $26=$count; //@line 928 "arraymodule.c"
        var $27=($26) + 1; //@line 928 "arraymodule.c"
        $count=$27; //@line 928 "arraymodule.c"
        __label__ = 7; break; //@line 928 "arraymodule.c"
      case 5: // $bb4
        var $28=$cmp; //@line 929 "arraymodule.c"
        var $29=($28) < 0; //@line 929 "arraymodule.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 929 "arraymodule.c"
      case 6: // $bb5
        $0=0; //@line 930 "arraymodule.c"
        __label__ = 10; break; //@line 930 "arraymodule.c"
      case 7: // $bb6
        var $30=$i; //@line 923 "arraymodule.c"
        var $31=($30) + 1; //@line 923 "arraymodule.c"
        $i=$31; //@line 923 "arraymodule.c"
        __label__ = 8; break; //@line 923 "arraymodule.c"
      case 8: // $bb7
        var $32=$self_addr; //@line 923 "arraymodule.c"
        var $33=$32; //@line 923 "arraymodule.c"
        var $34=$33+8; //@line 923 "arraymodule.c"
        var $35=HEAP[$34]; //@line 923 "arraymodule.c"
        var $36=$i; //@line 923 "arraymodule.c"
        var $37=($35) > ($36); //@line 923 "arraymodule.c"
        if ($37) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 923 "arraymodule.c"
      case 9: // $bb8
        var $38=$count; //@line 932 "arraymodule.c"
        var $39=_PyInt_FromSsize_t($38); //@line 932 "arraymodule.c"
        $0=$39; //@line 932 "arraymodule.c"
        __label__ = 10; break; //@line 932 "arraymodule.c"
      case 10: // $bb9
        var $40=$0; //@line 930 "arraymodule.c"
        $retval=$40; //@line 930 "arraymodule.c"
        var $retval10=$retval; //@line 930 "arraymodule.c"
        ;
        return $retval10; //@line 930 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_index($self, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $i;
        var $selfi;
        var $cmp;
        $self_addr=$self;
        $v_addr=$v;
        $i=0; //@line 945 "arraymodule.c"
        __label__ = 8; break; //@line 945 "arraymodule.c"
      case 1: // $bb
        var $1=$self_addr; //@line 946 "arraymodule.c"
        var $2=$1; //@line 946 "arraymodule.c"
        var $3=$i; //@line 946 "arraymodule.c"
        var $4=_getarrayitem($2, $3); //@line 946 "arraymodule.c"
        $selfi=$4; //@line 946 "arraymodule.c"
        var $5=$selfi; //@line 947 "arraymodule.c"
        var $6=$v_addr; //@line 947 "arraymodule.c"
        var $7=_PyObject_RichCompareBool($5, $6, 2); //@line 947 "arraymodule.c"
        $cmp=$7; //@line 947 "arraymodule.c"
        var $8=$selfi; //@line 948 "arraymodule.c"
        var $9=$8; //@line 948 "arraymodule.c"
        var $10=HEAP[$9]; //@line 948 "arraymodule.c"
        var $11=($10) - 1; //@line 948 "arraymodule.c"
        var $12=$selfi; //@line 948 "arraymodule.c"
        var $13=$12; //@line 948 "arraymodule.c"
        HEAP[$13]=$11; //@line 948 "arraymodule.c"
        var $14=$selfi; //@line 948 "arraymodule.c"
        var $15=$14; //@line 948 "arraymodule.c"
        var $16=HEAP[$15]; //@line 948 "arraymodule.c"
        var $17=($16)==0; //@line 948 "arraymodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 948 "arraymodule.c"
      case 2: // $bb1
        var $18=$selfi; //@line 948 "arraymodule.c"
        var $19=$18+4; //@line 948 "arraymodule.c"
        var $20=HEAP[$19]; //@line 948 "arraymodule.c"
        var $21=$20+24; //@line 948 "arraymodule.c"
        var $22=HEAP[$21]; //@line 948 "arraymodule.c"
        var $23=$selfi; //@line 948 "arraymodule.c"
        FUNCTION_TABLE[$22]($23); //@line 948 "arraymodule.c"
        __label__ = 3; break; //@line 948 "arraymodule.c"
      case 3: // $bb2
        var $24=$cmp; //@line 949 "arraymodule.c"
        var $25=($24) > 0; //@line 949 "arraymodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 949 "arraymodule.c"
      case 4: // $bb3
        var $26=$i; //@line 950 "arraymodule.c"
        var $27=_PyInt_FromLong($26); //@line 950 "arraymodule.c"
        $0=$27; //@line 950 "arraymodule.c"
        __label__ = 10; break; //@line 950 "arraymodule.c"
      case 5: // $bb4
        var $28=$cmp; //@line 952 "arraymodule.c"
        var $29=($28) < 0; //@line 952 "arraymodule.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 952 "arraymodule.c"
      case 6: // $bb5
        $0=0; //@line 953 "arraymodule.c"
        __label__ = 10; break; //@line 953 "arraymodule.c"
      case 7: // $bb6
        var $30=$i; //@line 945 "arraymodule.c"
        var $31=($30) + 1; //@line 945 "arraymodule.c"
        $i=$31; //@line 945 "arraymodule.c"
        __label__ = 8; break; //@line 945 "arraymodule.c"
      case 8: // $bb7
        var $32=$self_addr; //@line 945 "arraymodule.c"
        var $33=$32; //@line 945 "arraymodule.c"
        var $34=$33+8; //@line 945 "arraymodule.c"
        var $35=HEAP[$34]; //@line 945 "arraymodule.c"
        var $36=$i; //@line 945 "arraymodule.c"
        var $37=($35) > ($36); //@line 945 "arraymodule.c"
        if ($37) { __label__ = 1; break; } else { __label__ = 9; break; } //@line 945 "arraymodule.c"
      case 9: // $bb8
        var $38=HEAP[_PyExc_ValueError]; //@line 955 "arraymodule.c"
        _PyErr_SetString($38, __str25); //@line 955 "arraymodule.c"
        $0=0; //@line 956 "arraymodule.c"
        __label__ = 10; break; //@line 956 "arraymodule.c"
      case 10: // $bb9
        var $39=$0; //@line 950 "arraymodule.c"
        $retval=$39; //@line 950 "arraymodule.c"
        var $retval10=$retval; //@line 950 "arraymodule.c"
        ;
        return $retval10; //@line 950 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_contains($self, $v) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $i;
        var $cmp;
        var $selfi;
        $self_addr=$self;
        $v_addr=$v;
        $i=0; //@line 970 "arraymodule.c"
        $cmp=0; //@line 970 "arraymodule.c"
        __lastLabel__ = -1; __label__ = 4; break; //@line 970 "arraymodule.c"
      case 1: // $bb
        var $1=$self_addr; //@line 971 "arraymodule.c"
        var $2=$1; //@line 971 "arraymodule.c"
        var $3=$i; //@line 971 "arraymodule.c"
        var $4=_getarrayitem($2, $3); //@line 971 "arraymodule.c"
        $selfi=$4; //@line 971 "arraymodule.c"
        var $5=$selfi; //@line 972 "arraymodule.c"
        var $6=$v_addr; //@line 972 "arraymodule.c"
        var $7=_PyObject_RichCompareBool($5, $6, 2); //@line 972 "arraymodule.c"
        $cmp=$7; //@line 972 "arraymodule.c"
        var $8=$selfi; //@line 973 "arraymodule.c"
        var $9=$8; //@line 973 "arraymodule.c"
        var $10=HEAP[$9]; //@line 973 "arraymodule.c"
        var $11=($10) - 1; //@line 973 "arraymodule.c"
        var $12=$selfi; //@line 973 "arraymodule.c"
        var $13=$12; //@line 973 "arraymodule.c"
        HEAP[$13]=$11; //@line 973 "arraymodule.c"
        var $14=$selfi; //@line 973 "arraymodule.c"
        var $15=$14; //@line 973 "arraymodule.c"
        var $16=HEAP[$15]; //@line 973 "arraymodule.c"
        var $17=($16)==0; //@line 973 "arraymodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 973 "arraymodule.c"
      case 2: // $bb1
        var $18=$selfi; //@line 973 "arraymodule.c"
        var $19=$18+4; //@line 973 "arraymodule.c"
        var $20=HEAP[$19]; //@line 973 "arraymodule.c"
        var $21=$20+24; //@line 973 "arraymodule.c"
        var $22=HEAP[$21]; //@line 973 "arraymodule.c"
        var $23=$selfi; //@line 973 "arraymodule.c"
        FUNCTION_TABLE[$22]($23); //@line 973 "arraymodule.c"
        __label__ = 3; break; //@line 973 "arraymodule.c"
      case 3: // $bb2
        var $24=$i; //@line 970 "arraymodule.c"
        var $25=($24) + 1; //@line 970 "arraymodule.c"
        $i=$25; //@line 970 "arraymodule.c"
        var $_pr=$cmp;
        __lastLabel__ = 3; __label__ = 4; break; //@line 970 "arraymodule.c"
      case 4: // $bb3
        var $26=__lastLabel__ == 3 ? $_pr : (0);
        var $27=($26)!=0; //@line 970 "arraymodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 970 "arraymodule.c"
      case 5: // $bb4
        var $28=$self_addr; //@line 970 "arraymodule.c"
        var $29=$28; //@line 970 "arraymodule.c"
        var $30=$29+8; //@line 970 "arraymodule.c"
        var $31=HEAP[$30]; //@line 970 "arraymodule.c"
        var $32=$i; //@line 970 "arraymodule.c"
        var $33=($31) > ($32); //@line 970 "arraymodule.c"
        if ($33) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 970 "arraymodule.c"
      case 6: // $bb5
        var $34=$cmp; //@line 975 "arraymodule.c"
        $0=$34; //@line 975 "arraymodule.c"
        var $35=$0; //@line 975 "arraymodule.c"
        $retval=$35; //@line 975 "arraymodule.c"
        var $retval6=$retval; //@line 975 "arraymodule.c"
        ;
        return $retval6; //@line 975 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_remove($self, $v) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $v_addr;
        var $retval;
        var $0;
        var $i;
        var $selfi;
        var $cmp;
        $self_addr=$self;
        $v_addr=$v;
        $i=0; //@line 983 "arraymodule.c"
        __label__ = 10; break; //@line 983 "arraymodule.c"
      case 1: // $bb
        var $1=$self_addr; //@line 984 "arraymodule.c"
        var $2=$1; //@line 984 "arraymodule.c"
        var $3=$i; //@line 984 "arraymodule.c"
        var $4=_getarrayitem($2, $3); //@line 984 "arraymodule.c"
        $selfi=$4; //@line 984 "arraymodule.c"
        var $5=$selfi; //@line 985 "arraymodule.c"
        var $6=$v_addr; //@line 985 "arraymodule.c"
        var $7=_PyObject_RichCompareBool($5, $6, 2); //@line 985 "arraymodule.c"
        $cmp=$7; //@line 985 "arraymodule.c"
        var $8=$selfi; //@line 986 "arraymodule.c"
        var $9=$8; //@line 986 "arraymodule.c"
        var $10=HEAP[$9]; //@line 986 "arraymodule.c"
        var $11=($10) - 1; //@line 986 "arraymodule.c"
        var $12=$selfi; //@line 986 "arraymodule.c"
        var $13=$12; //@line 986 "arraymodule.c"
        HEAP[$13]=$11; //@line 986 "arraymodule.c"
        var $14=$selfi; //@line 986 "arraymodule.c"
        var $15=$14; //@line 986 "arraymodule.c"
        var $16=HEAP[$15]; //@line 986 "arraymodule.c"
        var $17=($16)==0; //@line 986 "arraymodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 986 "arraymodule.c"
      case 2: // $bb1
        var $18=$selfi; //@line 986 "arraymodule.c"
        var $19=$18+4; //@line 986 "arraymodule.c"
        var $20=HEAP[$19]; //@line 986 "arraymodule.c"
        var $21=$20+24; //@line 986 "arraymodule.c"
        var $22=HEAP[$21]; //@line 986 "arraymodule.c"
        var $23=$selfi; //@line 986 "arraymodule.c"
        FUNCTION_TABLE[$22]($23); //@line 986 "arraymodule.c"
        __label__ = 3; break; //@line 986 "arraymodule.c"
      case 3: // $bb2
        var $24=$cmp; //@line 987 "arraymodule.c"
        var $25=($24) > 0; //@line 987 "arraymodule.c"
        if ($25) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 987 "arraymodule.c"
      case 4: // $bb3
        var $26=$i; //@line 988 "arraymodule.c"
        var $27=($26) + 1; //@line 988 "arraymodule.c"
        var $28=$self_addr; //@line 988 "arraymodule.c"
        var $29=$i; //@line 988 "arraymodule.c"
        var $30=_array_ass_slice($28, $29, $27, 0); //@line 988 "arraymodule.c"
        var $31=($30)!=0; //@line 988 "arraymodule.c"
        if ($31) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 988 "arraymodule.c"
      case 5: // $bb4
        $0=0; //@line 990 "arraymodule.c"
        __label__ = 12; break; //@line 990 "arraymodule.c"
      case 6: // $bb5
        var $32=HEAP[__Py_NoneStruct]; //@line 991 "arraymodule.c"
        var $33=($32) + 1; //@line 991 "arraymodule.c"
        HEAP[__Py_NoneStruct]=$33; //@line 991 "arraymodule.c"
        $0=__Py_NoneStruct; //@line 992 "arraymodule.c"
        __label__ = 12; break; //@line 992 "arraymodule.c"
      case 7: // $bb6
        var $34=$cmp; //@line 994 "arraymodule.c"
        var $35=($34) < 0; //@line 994 "arraymodule.c"
        if ($35) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 994 "arraymodule.c"
      case 8: // $bb7
        $0=0; //@line 995 "arraymodule.c"
        __label__ = 12; break; //@line 995 "arraymodule.c"
      case 9: // $bb8
        var $36=$i; //@line 983 "arraymodule.c"
        var $37=($36) + 1; //@line 983 "arraymodule.c"
        $i=$37; //@line 983 "arraymodule.c"
        __label__ = 10; break; //@line 983 "arraymodule.c"
      case 10: // $bb9
        var $38=$self_addr; //@line 983 "arraymodule.c"
        var $39=$38; //@line 983 "arraymodule.c"
        var $40=$39+8; //@line 983 "arraymodule.c"
        var $41=HEAP[$40]; //@line 983 "arraymodule.c"
        var $42=$i; //@line 983 "arraymodule.c"
        var $43=($41) > ($42); //@line 983 "arraymodule.c"
        if ($43) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 983 "arraymodule.c"
      case 11: // $bb10
        var $44=HEAP[_PyExc_ValueError]; //@line 997 "arraymodule.c"
        _PyErr_SetString($44, __str26); //@line 997 "arraymodule.c"
        $0=0; //@line 998 "arraymodule.c"
        __label__ = 12; break; //@line 998 "arraymodule.c"
      case 12: // $bb11
        var $45=$0; //@line 990 "arraymodule.c"
        $retval=$45; //@line 990 "arraymodule.c"
        var $retval12=$retval; //@line 990 "arraymodule.c"
        ;
        return $retval12; //@line 990 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_pop($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $i=__stackBase__;
        var $v;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$i]=-1; //@line 1009 "arraymodule.c"
        var $1=$args_addr; //@line 1011 "arraymodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str27, allocate([$i,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 1011 "arraymodule.c"
        var $3=($2)==0; //@line 1011 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1011 "arraymodule.c"
      case 1: // $bb
        $0=0; //@line 1012 "arraymodule.c"
        __label__ = 13; break; //@line 1012 "arraymodule.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 1013 "arraymodule.c"
        var $5=$4; //@line 1013 "arraymodule.c"
        var $6=$5+8; //@line 1013 "arraymodule.c"
        var $7=HEAP[$6]; //@line 1013 "arraymodule.c"
        var $8=($7)==0; //@line 1013 "arraymodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1013 "arraymodule.c"
      case 3: // $bb2
        var $9=HEAP[_PyExc_IndexError]; //@line 1015 "arraymodule.c"
        _PyErr_SetString($9, __str28); //@line 1015 "arraymodule.c"
        $0=0; //@line 1016 "arraymodule.c"
        __label__ = 13; break; //@line 1016 "arraymodule.c"
      case 4: // $bb3
        var $10=HEAP[$i]; //@line 1018 "arraymodule.c"
        var $11=($10) < 0; //@line 1018 "arraymodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1018 "arraymodule.c"
      case 5: // $bb5
        var $12=$self_addr; //@line 1019 "arraymodule.c"
        var $13=$12; //@line 1019 "arraymodule.c"
        var $14=$13+8; //@line 1019 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1019 "arraymodule.c"
        var $16=HEAP[$i]; //@line 1019 "arraymodule.c"
        var $17=($16) + ($15); //@line 1019 "arraymodule.c"
        HEAP[$i]=$17; //@line 1019 "arraymodule.c"
        var $18=($17) < 0; //@line 1020 "arraymodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1020 "arraymodule.c"
      case 6: // $bb6
        var $19=$self_addr; //@line 1020 "arraymodule.c"
        var $20=$19; //@line 1020 "arraymodule.c"
        var $21=$20+8; //@line 1020 "arraymodule.c"
        var $22=HEAP[$21]; //@line 1020 "arraymodule.c"
        var $23=HEAP[$i]; //@line 1020 "arraymodule.c"
        var $24=($22) <= ($23); //@line 1020 "arraymodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1020 "arraymodule.c"
      case 7: // $bb7
        var $25=HEAP[_PyExc_IndexError]; //@line 1021 "arraymodule.c"
        _PyErr_SetString($25, __str29); //@line 1021 "arraymodule.c"
        $0=0; //@line 1022 "arraymodule.c"
        __label__ = 13; break; //@line 1022 "arraymodule.c"
      case 8: // $bb8
        var $26=HEAP[$i]; //@line 1024 "arraymodule.c"
        var $27=$self_addr; //@line 1024 "arraymodule.c"
        var $28=$27; //@line 1024 "arraymodule.c"
        var $29=_getarrayitem($28, $26); //@line 1024 "arraymodule.c"
        $v=$29; //@line 1024 "arraymodule.c"
        var $30=HEAP[$i]; //@line 1025 "arraymodule.c"
        var $31=($30) + 1; //@line 1025 "arraymodule.c"
        var $32=HEAP[$i]; //@line 1025 "arraymodule.c"
        var $33=$self_addr; //@line 1025 "arraymodule.c"
        var $34=_array_ass_slice($33, $32, $31, 0); //@line 1025 "arraymodule.c"
        var $35=($34)!=0; //@line 1025 "arraymodule.c"
        var $36=$v; //@line 1026 "arraymodule.c"
        if ($35) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1025 "arraymodule.c"
      case 9: // $bb9
        var $37=$36; //@line 1026 "arraymodule.c"
        var $38=HEAP[$37]; //@line 1026 "arraymodule.c"
        var $39=($38) - 1; //@line 1026 "arraymodule.c"
        var $40=$v; //@line 1026 "arraymodule.c"
        var $41=$40; //@line 1026 "arraymodule.c"
        HEAP[$41]=$39; //@line 1026 "arraymodule.c"
        var $42=$v; //@line 1026 "arraymodule.c"
        var $43=$42; //@line 1026 "arraymodule.c"
        var $44=HEAP[$43]; //@line 1026 "arraymodule.c"
        var $45=($44)==0; //@line 1026 "arraymodule.c"
        if ($45) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1026 "arraymodule.c"
      case 10: // $bb10
        var $46=$v; //@line 1026 "arraymodule.c"
        var $47=$46+4; //@line 1026 "arraymodule.c"
        var $48=HEAP[$47]; //@line 1026 "arraymodule.c"
        var $49=$48+24; //@line 1026 "arraymodule.c"
        var $50=HEAP[$49]; //@line 1026 "arraymodule.c"
        var $51=$v; //@line 1026 "arraymodule.c"
        FUNCTION_TABLE[$50]($51); //@line 1026 "arraymodule.c"
        __label__ = 11; break; //@line 1026 "arraymodule.c"
      case 11: // $bb11
        $0=0; //@line 1027 "arraymodule.c"
        __label__ = 13; break; //@line 1027 "arraymodule.c"
      case 12: // $bb12
        $0=$36; //@line 1029 "arraymodule.c"
        __label__ = 13; break; //@line 1029 "arraymodule.c"
      case 13: // $bb13
        var $52=$0; //@line 1012 "arraymodule.c"
        $retval=$52; //@line 1012 "arraymodule.c"
        var $retval14=$retval; //@line 1012 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 1012 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_extend($self, $bb) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $bb_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $bb_addr=$bb;
        var $1=$self_addr; //@line 1040 "arraymodule.c"
        var $2=$bb_addr; //@line 1040 "arraymodule.c"
        var $3=_array_do_extend($1, $2); //@line 1040 "arraymodule.c"
        var $4=($3)==-1; //@line 1040 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1040 "arraymodule.c"
      case 1: // $bb1
        $0=0; //@line 1041 "arraymodule.c"
        __label__ = 3; break; //@line 1041 "arraymodule.c"
      case 2: // $bb2
        var $5=HEAP[__Py_NoneStruct]; //@line 1042 "arraymodule.c"
        var $6=($5) + 1; //@line 1042 "arraymodule.c"
        HEAP[__Py_NoneStruct]=$6; //@line 1042 "arraymodule.c"
        $0=__Py_NoneStruct; //@line 1043 "arraymodule.c"
        __label__ = 3; break; //@line 1043 "arraymodule.c"
      case 3: // $bb3
        var $7=$0; //@line 1041 "arraymodule.c"
        $retval=$7; //@line 1041 "arraymodule.c"
        var $retval4=$retval; //@line 1041 "arraymodule.c"
        ;
        return $retval4; //@line 1041 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_insert($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $i=__stackBase__;
        var $v=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1056 "arraymodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str30, allocate([$i,0,0,0,$v,0,0,0], ["i32*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1056 "arraymodule.c"
        var $3=($2)==0; //@line 1056 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1056 "arraymodule.c"
      case 1: // $bb
        $0=0; //@line 1057 "arraymodule.c"
        __label__ = 3; break; //@line 1057 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$v]; //@line 1058 "arraymodule.c"
        var $5=HEAP[$i]; //@line 1058 "arraymodule.c"
        var $6=$self_addr; //@line 1058 "arraymodule.c"
        var $7=_ins($6, $5, $4); //@line 1058 "arraymodule.c"
        $0=$7; //@line 1058 "arraymodule.c"
        __label__ = 3; break; //@line 1058 "arraymodule.c"
      case 3: // $bb2
        var $8=$0; //@line 1057 "arraymodule.c"
        $retval=$8; //@line 1057 "arraymodule.c"
        var $retval3=$retval; //@line 1057 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 1057 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_buffer_info($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $retval1;
        $self_addr=$self;
        $unused_addr=$unused;
        $retval1=0; //@line 1070 "arraymodule.c"
        var $1=_PyTuple_New(2); //@line 1071 "arraymodule.c"
        $retval1=$1; //@line 1071 "arraymodule.c"
        var $2=$retval1; //@line 1072 "arraymodule.c"
        var $3=($2)==0; //@line 1072 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1072 "arraymodule.c"
      case 1: // $bb
        $0=0; //@line 1073 "arraymodule.c"
        __label__ = 3; break; //@line 1073 "arraymodule.c"
      case 2: // $bb2
        var $4=$retval1; //@line 1075 "arraymodule.c"
        var $5=$4; //@line 1075 "arraymodule.c"
        var $6=$self_addr; //@line 1075 "arraymodule.c"
        var $7=$6+12; //@line 1075 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1075 "arraymodule.c"
        var $9=_PyLong_FromVoidPtr($8); //@line 1075 "arraymodule.c"
        var $10=$5+12; //@line 1075 "arraymodule.c"
        var $11=$10; //@line 1075 "arraymodule.c"
        HEAP[$11]=$9; //@line 1075 "arraymodule.c"
        var $12=$retval1; //@line 1076 "arraymodule.c"
        var $13=$12; //@line 1076 "arraymodule.c"
        var $14=$self_addr; //@line 1076 "arraymodule.c"
        var $15=$14; //@line 1076 "arraymodule.c"
        var $16=$15+8; //@line 1076 "arraymodule.c"
        var $17=HEAP[$16]; //@line 1076 "arraymodule.c"
        var $18=_PyInt_FromLong($17); //@line 1076 "arraymodule.c"
        var $19=$13+12; //@line 1076 "arraymodule.c"
        var $20=$19+4; //@line 1076 "arraymodule.c"
        HEAP[$20]=$18; //@line 1076 "arraymodule.c"
        var $21=$retval1; //@line 1078 "arraymodule.c"
        $0=$21; //@line 1078 "arraymodule.c"
        __label__ = 3; break; //@line 1078 "arraymodule.c"
      case 3: // $bb3
        var $22=$0; //@line 1073 "arraymodule.c"
        $retval=$22; //@line 1073 "arraymodule.c"
        var $retval4=$retval; //@line 1073 "arraymodule.c"
        ;
        return $retval4; //@line 1073 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_append($self, $v) {
    ;
    var __label__;
  
    var $self_addr;
    var $v_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $v_addr=$v;
    var $1=$self_addr; //@line 1093 "arraymodule.c"
    var $2=$1; //@line 1093 "arraymodule.c"
    var $3=$2+8; //@line 1093 "arraymodule.c"
    var $4=HEAP[$3]; //@line 1093 "arraymodule.c"
    var $5=$self_addr; //@line 1093 "arraymodule.c"
    var $6=$v_addr; //@line 1093 "arraymodule.c"
    var $7=_ins($5, $4, $6); //@line 1093 "arraymodule.c"
    $0=$7; //@line 1093 "arraymodule.c"
    var $8=$0; //@line 1093 "arraymodule.c"
    $retval=$8; //@line 1093 "arraymodule.c"
    var $retval1=$retval; //@line 1093 "arraymodule.c"
    ;
    return $retval1; //@line 1093 "arraymodule.c"
  }
  

  function _array_byteswap($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $p;
        var $i;
        var $p0;
        var $p07;
        var $p1;
        var $p012;
        var $p113;
        var $p2;
        var $p3;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 1108 "arraymodule.c"
        var $2=$1+20; //@line 1108 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1108 "arraymodule.c"
        var $4=$3+4; //@line 1108 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1108 "arraymodule.c"
        if ($5 == 1) {
          __label__ = 8; break;
        }
        else if ($5 == 2) {
          __label__ = 1; break;
        }
        else if ($5 == 4) {
          __label__ = 3; break;
        }
        else if ($5 == 8) {
          __label__ = 5; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb1
        var $6=$self_addr; //@line 1112 "arraymodule.c"
        var $7=$6+12; //@line 1112 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1112 "arraymodule.c"
        $p=$8; //@line 1112 "arraymodule.c"
        var $9=$self_addr; //@line 1112 "arraymodule.c"
        var $10=$9; //@line 1112 "arraymodule.c"
        var $11=$10+8; //@line 1112 "arraymodule.c"
        var $12=HEAP[$11]; //@line 1112 "arraymodule.c"
        $i=$12; //@line 1112 "arraymodule.c"
        var $13=$i; //@line 1112 "arraymodule.c"
        var $14=($13) - 1; //@line 1112 "arraymodule.c"
        $i=$14; //@line 1112 "arraymodule.c"
        var $15=($14) >= 0; //@line 1112 "arraymodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 1112 "arraymodule.c"
      case 2: // $bb2
        var $16=$p; //@line 1113 "arraymodule.c"
        var $17=$16; //@line 1113 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1113 "arraymodule.c"
        $p0=$18; //@line 1113 "arraymodule.c"
        var $19=$p; //@line 1114 "arraymodule.c"
        var $20=$19+1; //@line 1114 "arraymodule.c"
        var $21=HEAP[$20]; //@line 1114 "arraymodule.c"
        var $22=$p; //@line 1114 "arraymodule.c"
        var $23=$22; //@line 1114 "arraymodule.c"
        HEAP[$23]=$21; //@line 1114 "arraymodule.c"
        var $24=$p; //@line 1115 "arraymodule.c"
        var $25=$24+1; //@line 1115 "arraymodule.c"
        var $26=$p0; //@line 1115 "arraymodule.c"
        HEAP[$25]=$26; //@line 1115 "arraymodule.c"
        var $27=$p; //@line 1112 "arraymodule.c"
        var $28=$27+2; //@line 1112 "arraymodule.c"
        $p=$28; //@line 1112 "arraymodule.c"
        var $29=$i; //@line 1112 "arraymodule.c"
        var $30=($29) - 1; //@line 1112 "arraymodule.c"
        $i=$30; //@line 1112 "arraymodule.c"
        var $31=($30) >= 0; //@line 1112 "arraymodule.c"
        if ($31) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 1112 "arraymodule.c"
      case 3: // $bb5
        var $32=$self_addr; //@line 1119 "arraymodule.c"
        var $33=$32+12; //@line 1119 "arraymodule.c"
        var $34=HEAP[$33]; //@line 1119 "arraymodule.c"
        $p=$34; //@line 1119 "arraymodule.c"
        var $35=$self_addr; //@line 1119 "arraymodule.c"
        var $36=$35; //@line 1119 "arraymodule.c"
        var $37=$36+8; //@line 1119 "arraymodule.c"
        var $38=HEAP[$37]; //@line 1119 "arraymodule.c"
        $i=$38; //@line 1119 "arraymodule.c"
        var $39=$i; //@line 1119 "arraymodule.c"
        var $40=($39) - 1; //@line 1119 "arraymodule.c"
        $i=$40; //@line 1119 "arraymodule.c"
        var $41=($40) >= 0; //@line 1119 "arraymodule.c"
        if ($41) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 1119 "arraymodule.c"
      case 4: // $bb6
        var $42=$p; //@line 1120 "arraymodule.c"
        var $43=$42; //@line 1120 "arraymodule.c"
        var $44=HEAP[$43]; //@line 1120 "arraymodule.c"
        $p07=$44; //@line 1120 "arraymodule.c"
        var $45=$p; //@line 1121 "arraymodule.c"
        var $46=$45+1; //@line 1121 "arraymodule.c"
        var $47=HEAP[$46]; //@line 1121 "arraymodule.c"
        $p1=$47; //@line 1121 "arraymodule.c"
        var $48=$p; //@line 1122 "arraymodule.c"
        var $49=$48+3; //@line 1122 "arraymodule.c"
        var $50=HEAP[$49]; //@line 1122 "arraymodule.c"
        var $51=$p; //@line 1122 "arraymodule.c"
        var $52=$51; //@line 1122 "arraymodule.c"
        HEAP[$52]=$50; //@line 1122 "arraymodule.c"
        var $53=$p; //@line 1123 "arraymodule.c"
        var $54=$53+2; //@line 1123 "arraymodule.c"
        var $55=HEAP[$54]; //@line 1123 "arraymodule.c"
        var $56=$p; //@line 1123 "arraymodule.c"
        var $57=$56+1; //@line 1123 "arraymodule.c"
        HEAP[$57]=$55; //@line 1123 "arraymodule.c"
        var $58=$p; //@line 1124 "arraymodule.c"
        var $59=$58+2; //@line 1124 "arraymodule.c"
        var $60=$p1; //@line 1124 "arraymodule.c"
        HEAP[$59]=$60; //@line 1124 "arraymodule.c"
        var $61=$p; //@line 1125 "arraymodule.c"
        var $62=$61+3; //@line 1125 "arraymodule.c"
        var $63=$p07; //@line 1125 "arraymodule.c"
        HEAP[$62]=$63; //@line 1125 "arraymodule.c"
        var $64=$p; //@line 1119 "arraymodule.c"
        var $65=$64+4; //@line 1119 "arraymodule.c"
        $p=$65; //@line 1119 "arraymodule.c"
        var $66=$i; //@line 1119 "arraymodule.c"
        var $67=($66) - 1; //@line 1119 "arraymodule.c"
        $i=$67; //@line 1119 "arraymodule.c"
        var $68=($67) >= 0; //@line 1119 "arraymodule.c"
        if ($68) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 1119 "arraymodule.c"
      case 5: // $bb10
        var $69=$self_addr; //@line 1129 "arraymodule.c"
        var $70=$69+12; //@line 1129 "arraymodule.c"
        var $71=HEAP[$70]; //@line 1129 "arraymodule.c"
        $p=$71; //@line 1129 "arraymodule.c"
        var $72=$self_addr; //@line 1129 "arraymodule.c"
        var $73=$72; //@line 1129 "arraymodule.c"
        var $74=$73+8; //@line 1129 "arraymodule.c"
        var $75=HEAP[$74]; //@line 1129 "arraymodule.c"
        $i=$75; //@line 1129 "arraymodule.c"
        var $76=$i; //@line 1129 "arraymodule.c"
        var $77=($76) - 1; //@line 1129 "arraymodule.c"
        $i=$77; //@line 1129 "arraymodule.c"
        var $78=($77) >= 0; //@line 1129 "arraymodule.c"
        if ($78) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1129 "arraymodule.c"
      case 6: // $bb11
        var $79=$p; //@line 1130 "arraymodule.c"
        var $80=$79; //@line 1130 "arraymodule.c"
        var $81=HEAP[$80]; //@line 1130 "arraymodule.c"
        $p012=$81; //@line 1130 "arraymodule.c"
        var $82=$p; //@line 1131 "arraymodule.c"
        var $83=$82+1; //@line 1131 "arraymodule.c"
        var $84=HEAP[$83]; //@line 1131 "arraymodule.c"
        $p113=$84; //@line 1131 "arraymodule.c"
        var $85=$p; //@line 1132 "arraymodule.c"
        var $86=$85+2; //@line 1132 "arraymodule.c"
        var $87=HEAP[$86]; //@line 1132 "arraymodule.c"
        $p2=$87; //@line 1132 "arraymodule.c"
        var $88=$p; //@line 1133 "arraymodule.c"
        var $89=$88+3; //@line 1133 "arraymodule.c"
        var $90=HEAP[$89]; //@line 1133 "arraymodule.c"
        $p3=$90; //@line 1133 "arraymodule.c"
        var $91=$p; //@line 1134 "arraymodule.c"
        var $92=$91+7; //@line 1134 "arraymodule.c"
        var $93=HEAP[$92]; //@line 1134 "arraymodule.c"
        var $94=$p; //@line 1134 "arraymodule.c"
        var $95=$94; //@line 1134 "arraymodule.c"
        HEAP[$95]=$93; //@line 1134 "arraymodule.c"
        var $96=$p; //@line 1135 "arraymodule.c"
        var $97=$96+6; //@line 1135 "arraymodule.c"
        var $98=HEAP[$97]; //@line 1135 "arraymodule.c"
        var $99=$p; //@line 1135 "arraymodule.c"
        var $100=$99+1; //@line 1135 "arraymodule.c"
        HEAP[$100]=$98; //@line 1135 "arraymodule.c"
        var $101=$p; //@line 1136 "arraymodule.c"
        var $102=$101+5; //@line 1136 "arraymodule.c"
        var $103=HEAP[$102]; //@line 1136 "arraymodule.c"
        var $104=$p; //@line 1136 "arraymodule.c"
        var $105=$104+2; //@line 1136 "arraymodule.c"
        HEAP[$105]=$103; //@line 1136 "arraymodule.c"
        var $106=$p; //@line 1137 "arraymodule.c"
        var $107=$106+4; //@line 1137 "arraymodule.c"
        var $108=HEAP[$107]; //@line 1137 "arraymodule.c"
        var $109=$p; //@line 1137 "arraymodule.c"
        var $110=$109+3; //@line 1137 "arraymodule.c"
        HEAP[$110]=$108; //@line 1137 "arraymodule.c"
        var $111=$p; //@line 1138 "arraymodule.c"
        var $112=$111+4; //@line 1138 "arraymodule.c"
        var $113=$p3; //@line 1138 "arraymodule.c"
        HEAP[$112]=$113; //@line 1138 "arraymodule.c"
        var $114=$p; //@line 1139 "arraymodule.c"
        var $115=$114+5; //@line 1139 "arraymodule.c"
        var $116=$p2; //@line 1139 "arraymodule.c"
        HEAP[$115]=$116; //@line 1139 "arraymodule.c"
        var $117=$p; //@line 1140 "arraymodule.c"
        var $118=$117+6; //@line 1140 "arraymodule.c"
        var $119=$p113; //@line 1140 "arraymodule.c"
        HEAP[$118]=$119; //@line 1140 "arraymodule.c"
        var $120=$p; //@line 1141 "arraymodule.c"
        var $121=$120+7; //@line 1141 "arraymodule.c"
        var $122=$p012; //@line 1141 "arraymodule.c"
        HEAP[$121]=$122; //@line 1141 "arraymodule.c"
        var $123=$p; //@line 1129 "arraymodule.c"
        var $124=$123+8; //@line 1129 "arraymodule.c"
        $p=$124; //@line 1129 "arraymodule.c"
        var $125=$i; //@line 1129 "arraymodule.c"
        var $126=($125) - 1; //@line 1129 "arraymodule.c"
        $i=$126; //@line 1129 "arraymodule.c"
        var $127=($126) >= 0; //@line 1129 "arraymodule.c"
        if ($127) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 1129 "arraymodule.c"
      case 7: // $bb16
        var $128=HEAP[_PyExc_RuntimeError]; //@line 1145 "arraymodule.c"
        _PyErr_SetString($128, __str31); //@line 1145 "arraymodule.c"
        $0=0; //@line 1147 "arraymodule.c"
        __label__ = 9; break; //@line 1147 "arraymodule.c"
      case 8: // $bb17
        var $129=HEAP[__Py_NoneStruct]; //@line 1149 "arraymodule.c"
        var $130=($129) + 1; //@line 1149 "arraymodule.c"
        HEAP[__Py_NoneStruct]=$130; //@line 1149 "arraymodule.c"
        $0=__Py_NoneStruct; //@line 1150 "arraymodule.c"
        __label__ = 9; break; //@line 1150 "arraymodule.c"
      case 9: // $bb18
        var $131=$0; //@line 1147 "arraymodule.c"
        $retval=$131; //@line 1147 "arraymodule.c"
        var $retval19=$retval; //@line 1147 "arraymodule.c"
        ;
        return $retval19; //@line 1147 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_reverse($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 256; _memset(__stackBase__, 0, 256);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $itemsize;
        var $p;
        var $q;
        var $tmp=__stackBase__;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 1162 "arraymodule.c"
        var $2=$1+20; //@line 1162 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1162 "arraymodule.c"
        var $4=$3+4; //@line 1162 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1162 "arraymodule.c"
        $itemsize=$5; //@line 1162 "arraymodule.c"
        var $6=$itemsize; //@line 1166 "arraymodule.c"
        var $7=($6) > 256; //@line 1166 "arraymodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1166 "arraymodule.c"
      case 1: // $bb
        ___assert_fail(__str32, __str15, 1166, ___PRETTY_FUNCTION___10009); //@line 1166 "arraymodule.c"
        throw "Reached an unreachable!" //@line 1166 "arraymodule.c"
      case 2: // $bb1
        var $8=$self_addr; //@line 1168 "arraymodule.c"
        var $9=$8; //@line 1168 "arraymodule.c"
        var $10=$9+8; //@line 1168 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1168 "arraymodule.c"
        var $12=($11) > 1; //@line 1168 "arraymodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1168 "arraymodule.c"
      case 3: // $bb2
        var $13=$self_addr; //@line 1170 "arraymodule.c"
        var $14=$13+12; //@line 1170 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1170 "arraymodule.c"
        $p=$15; //@line 1170 "arraymodule.c"
        var $16=$self_addr; //@line 1170 "arraymodule.c"
        var $17=$16+12; //@line 1170 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1170 "arraymodule.c"
        var $19=$self_addr; //@line 1170 "arraymodule.c"
        var $20=$19; //@line 1170 "arraymodule.c"
        var $21=$20+8; //@line 1170 "arraymodule.c"
        var $22=HEAP[$21]; //@line 1170 "arraymodule.c"
        var $23=($22) - 1; //@line 1170 "arraymodule.c"
        var $24=$itemsize; //@line 1170 "arraymodule.c"
        var $25=($23) * ($24); //@line 1170 "arraymodule.c"
        var $26=$18+$25; //@line 1170 "arraymodule.c"
        $q=$26; //@line 1170 "arraymodule.c"
        var $27=$p; //@line 1171 "arraymodule.c"
        var $28=$q; //@line 1171 "arraymodule.c"
        var $29=($27) < ($28); //@line 1171 "arraymodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1171 "arraymodule.c"
      case 4: // $bb3_lr_ph
        var $tmp4=$tmp; //@line 1176 "arraymodule.c"
        var $tmp5=$tmp; //@line 1178 "arraymodule.c"
        __label__ = 5; break;
      case 5: // $bb3
        var $30=$itemsize; //@line 1176 "arraymodule.c"
        var $31=$p; //@line 1176 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($tmp4, $31, $30, 1, 0); //@line 1176 "arraymodule.c"
        var $32=$itemsize; //@line 1177 "arraymodule.c"
        var $33=$p; //@line 1177 "arraymodule.c"
        var $34=$q; //@line 1177 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($33, $34, $32, 1, 0); //@line 1177 "arraymodule.c"
        var $35=$itemsize; //@line 1178 "arraymodule.c"
        var $36=$q; //@line 1178 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($36, $tmp5, $35, 1, 0); //@line 1178 "arraymodule.c"
        var $37=$p; //@line 1172 "arraymodule.c"
        var $38=$itemsize; //@line 1172 "arraymodule.c"
        var $39=$37+$38; //@line 1172 "arraymodule.c"
        $p=$39; //@line 1172 "arraymodule.c"
        var $40=$itemsize; //@line 1172 "arraymodule.c"
        var $41=0 - ($40); //@line 1172 "arraymodule.c"
        var $42=$q; //@line 1172 "arraymodule.c"
        var $43=$42+$41; //@line 1172 "arraymodule.c"
        $q=$43; //@line 1172 "arraymodule.c"
        var $44=$p; //@line 1171 "arraymodule.c"
        var $45=$q; //@line 1171 "arraymodule.c"
        var $46=($44) < ($45); //@line 1171 "arraymodule.c"
        if ($46) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1171 "arraymodule.c"
      case 6: // $bb7
        var $47=HEAP[__Py_NoneStruct]; //@line 1182 "arraymodule.c"
        var $48=($47) + 1; //@line 1182 "arraymodule.c"
        HEAP[__Py_NoneStruct]=$48; //@line 1182 "arraymodule.c"
        $0=__Py_NoneStruct; //@line 1183 "arraymodule.c"
        var $49=$0; //@line 1183 "arraymodule.c"
        $retval=$49; //@line 1183 "arraymodule.c"
        var $retval8=$retval; //@line 1183 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 1183 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_fromfile($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_222;
        var $iftmp_220;
        var $iftmp_218;
        var $iftmp_202;
        var $iftmp_200;
        var $iftmp_198;
        var $0;
        var $f=__stackBase__;
        var $n=__stackBase__+4;
        var $fp;
        var $item;
        var $itemsize;
        var $nread;
        var $newlength;
        var $newbytes;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1197 "arraymodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str33, allocate([$f,0,0,0,$n,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1197 "arraymodule.c"
        var $3=($2)==0; //@line 1197 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1197 "arraymodule.c"
      case 1: // $bb
        $0=0; //@line 1198 "arraymodule.c"
        __label__ = 31; break; //@line 1198 "arraymodule.c"
      case 2: // $bb1
        var $4=HEAP[$f]; //@line 1199 "arraymodule.c"
        var $5=_PyFile_AsFile($4); //@line 1199 "arraymodule.c"
        $fp=$5; //@line 1199 "arraymodule.c"
        var $6=$fp; //@line 1200 "arraymodule.c"
        var $7=($6)==0; //@line 1200 "arraymodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1200 "arraymodule.c"
      case 3: // $bb2
        var $8=HEAP[_PyExc_TypeError]; //@line 1201 "arraymodule.c"
        _PyErr_SetString($8, __str34); //@line 1201 "arraymodule.c"
        $0=0; //@line 1202 "arraymodule.c"
        __label__ = 31; break; //@line 1202 "arraymodule.c"
      case 4: // $bb3
        var $9=HEAP[$n]; //@line 1204 "arraymodule.c"
        var $10=($9) > 0; //@line 1204 "arraymodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 30; break; } //@line 1204 "arraymodule.c"
      case 5: // $bb4
        var $11=$self_addr; //@line 1205 "arraymodule.c"
        var $12=$11+12; //@line 1205 "arraymodule.c"
        var $13=HEAP[$12]; //@line 1205 "arraymodule.c"
        $item=$13; //@line 1205 "arraymodule.c"
        var $14=$self_addr; //@line 1206 "arraymodule.c"
        var $15=$14+20; //@line 1206 "arraymodule.c"
        var $16=HEAP[$15]; //@line 1206 "arraymodule.c"
        var $17=$16+4; //@line 1206 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1206 "arraymodule.c"
        $itemsize=$18; //@line 1206 "arraymodule.c"
        var $19=$self_addr; //@line 1211 "arraymodule.c"
        var $20=$19; //@line 1211 "arraymodule.c"
        var $21=$20+8; //@line 1211 "arraymodule.c"
        var $22=HEAP[$21]; //@line 1211 "arraymodule.c"
        var $23=HEAP[$n]; //@line 1211 "arraymodule.c"
        var $24=($23) + ($22); //@line 1211 "arraymodule.c"
        $newlength=$24; //@line 1211 "arraymodule.c"
        var $25=$newlength; //@line 1211 "arraymodule.c"
        var $26=($25) <= 0; //@line 1211 "arraymodule.c"
        if ($26) { __label__ = 15; break; } else { __label__ = 6; break; } //@line 1211 "arraymodule.c"
      case 6: // $bb5
        var $27=$newlength; //@line 1211 "arraymodule.c"
        var $28=$itemsize; //@line 1211 "arraymodule.c"
        var $29=($28) * ($27); //@line 1211 "arraymodule.c"
        $newbytes=$29; //@line 1211 "arraymodule.c"
        var $30=$itemsize; //@line 1211 "arraymodule.c"
        var $31=$newbytes; //@line 1211 "arraymodule.c"
        var $32=Math.floor(($31)/($30)); //@line 1211 "arraymodule.c"
        var $33=$newlength; //@line 1211 "arraymodule.c"
        var $34=($32)!=($33); //@line 1211 "arraymodule.c"
        if ($34) { __label__ = 15; break; } else { __label__ = 7; break; } //@line 1211 "arraymodule.c"
      case 7: // $bb6
        var $35=$newbytes; //@line 1215 "arraymodule.c"
        var $36=($35) >= 0; //@line 1215 "arraymodule.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 1215 "arraymodule.c"
      case 8: // $bb7
        var $37=$newbytes; //@line 1215 "arraymodule.c"
        var $38=($37) >= 0; //@line 1215 "arraymodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1215 "arraymodule.c"
      case 9: // $bb8
        var $39=$newbytes; //@line 1215 "arraymodule.c"
        var $40=($39)!=0; //@line 1215 "arraymodule.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1215 "arraymodule.c"
      case 10: // $bb9
        var $41=$newbytes; //@line 1215 "arraymodule.c"
        $iftmp_202=$41; //@line 1215 "arraymodule.c"
        __label__ = 14; break; //@line 1215 "arraymodule.c"
      case 11: // $bb10
        $iftmp_202=1; //@line 1215 "arraymodule.c"
        __label__ = 14; break; //@line 1215 "arraymodule.c"
      case 12: // $bb15_thread1
        $iftmp_200=0; //@line 1215 "arraymodule.c"
        $iftmp_198=0; //@line 1215 "arraymodule.c"
        $item=0; //@line 1215 "arraymodule.c"
        __label__ = 15; break;
      case 13: // $bb15_thread
        $iftmp_198=0; //@line 1215 "arraymodule.c"
        $item=0; //@line 1215 "arraymodule.c"
        __label__ = 15; break;
      case 14: // $bb15
        var $42=$item; //@line 1215 "arraymodule.c"
        var $43=$iftmp_202; //@line 1215 "arraymodule.c"
        var $44=_realloc($42, $43); //@line 1215 "arraymodule.c"
        $iftmp_200=$44; //@line 1215 "arraymodule.c"
        $iftmp_198=$44; //@line 1215 "arraymodule.c"
        $item=$44; //@line 1215 "arraymodule.c"
        var $45=($44)==0; //@line 1216 "arraymodule.c"
        if ($45) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1216 "arraymodule.c"
      case 15: // $nomem
        var $46=_PyErr_NoMemory(); //@line 1218 "arraymodule.c"
        $0=0; //@line 1219 "arraymodule.c"
        __label__ = 31; break; //@line 1219 "arraymodule.c"
      case 16: // $bb16
        var $47=$self_addr; //@line 1221 "arraymodule.c"
        var $48=$47+12; //@line 1221 "arraymodule.c"
        var $49=$item; //@line 1221 "arraymodule.c"
        HEAP[$48]=$49; //@line 1221 "arraymodule.c"
        var $50=$self_addr; //@line 1222 "arraymodule.c"
        var $51=$50; //@line 1222 "arraymodule.c"
        var $52=$self_addr; //@line 1222 "arraymodule.c"
        var $53=$52; //@line 1222 "arraymodule.c"
        var $54=$53+8; //@line 1222 "arraymodule.c"
        var $55=HEAP[$54]; //@line 1222 "arraymodule.c"
        var $56=HEAP[$n]; //@line 1222 "arraymodule.c"
        var $57=($56) + ($55); //@line 1222 "arraymodule.c"
        var $58=$51+8; //@line 1222 "arraymodule.c"
        HEAP[$58]=$57; //@line 1222 "arraymodule.c"
        var $59=$self_addr; //@line 1223 "arraymodule.c"
        var $60=$59; //@line 1223 "arraymodule.c"
        var $61=$60+8; //@line 1223 "arraymodule.c"
        var $62=HEAP[$61]; //@line 1223 "arraymodule.c"
        var $63=$self_addr; //@line 1223 "arraymodule.c"
        var $64=$63+16; //@line 1223 "arraymodule.c"
        HEAP[$64]=$62; //@line 1223 "arraymodule.c"
        var $65=HEAP[$n]; //@line 1224 "arraymodule.c"
        var $66=$itemsize; //@line 1224 "arraymodule.c"
        var $67=$self_addr; //@line 1224 "arraymodule.c"
        var $68=$67; //@line 1224 "arraymodule.c"
        var $69=$68+8; //@line 1224 "arraymodule.c"
        var $70=HEAP[$69]; //@line 1224 "arraymodule.c"
        var $71=HEAP[$n]; //@line 1224 "arraymodule.c"
        var $72=($70) - ($71); //@line 1224 "arraymodule.c"
        var $73=$itemsize; //@line 1224 "arraymodule.c"
        var $74=($72) * ($73); //@line 1224 "arraymodule.c"
        var $75=$item; //@line 1224 "arraymodule.c"
        var $76=$75+$74; //@line 1224 "arraymodule.c"
        var $77=$fp; //@line 1224 "arraymodule.c"
        var $78=_fread($76, $66, $65, $77); //@line 1224 "arraymodule.c"
        $nread=$78; //@line 1224 "arraymodule.c"
        var $79=HEAP[$n]; //@line 1226 "arraymodule.c"
        var $80=$nread; //@line 1226 "arraymodule.c"
        var $81=($79) > ($80); //@line 1226 "arraymodule.c"
        if ($81) { __label__ = 17; break; } else { __label__ = 30; break; } //@line 1226 "arraymodule.c"
      case 17: // $bb17
        var $82=$self_addr; //@line 1227 "arraymodule.c"
        var $83=$82; //@line 1227 "arraymodule.c"
        var $84=$self_addr; //@line 1227 "arraymodule.c"
        var $85=$84; //@line 1227 "arraymodule.c"
        var $86=$85+8; //@line 1227 "arraymodule.c"
        var $87=HEAP[$86]; //@line 1227 "arraymodule.c"
        var $88=HEAP[$n]; //@line 1227 "arraymodule.c"
        var $89=$nread; //@line 1227 "arraymodule.c"
        var $_neg=0 - ($89);
        var $_neg2=0 - ($88);
        var $_neg_neg=0 - ($_neg);
        var $_neg3=($_neg2) + ($87);
        var $90=($_neg3) + ($_neg_neg);
        var $91=$83+8; //@line 1227 "arraymodule.c"
        HEAP[$91]=$90; //@line 1227 "arraymodule.c"
        var $92=$self_addr; //@line 1228 "arraymodule.c"
        var $93=$92; //@line 1228 "arraymodule.c"
        var $94=$93+8; //@line 1228 "arraymodule.c"
        var $95=HEAP[$94]; //@line 1228 "arraymodule.c"
        var $96=$itemsize; //@line 1228 "arraymodule.c"
        var $97=($96) * ($95); //@line 1228 "arraymodule.c"
        var $98=($97) >= 0; //@line 1228 "arraymodule.c"
        if ($98) { __label__ = 18; break; } else { __label__ = 25; break; } //@line 1228 "arraymodule.c"
      case 18: // $bb18
        var $99=$self_addr; //@line 1228 "arraymodule.c"
        var $100=$99; //@line 1228 "arraymodule.c"
        var $101=$100+8; //@line 1228 "arraymodule.c"
        var $102=HEAP[$101]; //@line 1228 "arraymodule.c"
        var $103=$itemsize; //@line 1228 "arraymodule.c"
        var $104=($103) * ($102); //@line 1228 "arraymodule.c"
        var $105=($104) >= 0; //@line 1228 "arraymodule.c"
        if ($105) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 1228 "arraymodule.c"
      case 19: // $bb19
        var $106=$self_addr; //@line 1228 "arraymodule.c"
        var $107=$106; //@line 1228 "arraymodule.c"
        var $108=$107+8; //@line 1228 "arraymodule.c"
        var $109=HEAP[$108]; //@line 1228 "arraymodule.c"
        var $110=$itemsize; //@line 1228 "arraymodule.c"
        var $111=($110) * ($109); //@line 1228 "arraymodule.c"
        var $112=($111)!=0; //@line 1228 "arraymodule.c"
        if ($112) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1228 "arraymodule.c"
      case 20: // $bb20
        var $113=$self_addr; //@line 1228 "arraymodule.c"
        var $114=$113; //@line 1228 "arraymodule.c"
        var $115=$114+8; //@line 1228 "arraymodule.c"
        var $116=HEAP[$115]; //@line 1228 "arraymodule.c"
        var $117=$itemsize; //@line 1228 "arraymodule.c"
        var $118=($117) * ($116); //@line 1228 "arraymodule.c"
        $iftmp_222=$118; //@line 1228 "arraymodule.c"
        __label__ = 22; break; //@line 1228 "arraymodule.c"
      case 21: // $bb21
        $iftmp_222=1; //@line 1228 "arraymodule.c"
        __label__ = 22; break; //@line 1228 "arraymodule.c"
      case 22: // $bb22
        var $119=$item; //@line 1228 "arraymodule.c"
        var $120=$iftmp_222; //@line 1228 "arraymodule.c"
        var $121=_realloc($119, $120); //@line 1228 "arraymodule.c"
        $iftmp_220=$121; //@line 1228 "arraymodule.c"
        __label__ = 24; break; //@line 1228 "arraymodule.c"
      case 23: // $bb23
        $iftmp_220=0; //@line 1228 "arraymodule.c"
        __label__ = 24; break; //@line 1228 "arraymodule.c"
      case 24: // $bb24
        var $122=$iftmp_220; //@line 1228 "arraymodule.c"
        $iftmp_218=$122; //@line 1228 "arraymodule.c"
        __label__ = 26; break; //@line 1228 "arraymodule.c"
      case 25: // $bb25
        $iftmp_218=0; //@line 1228 "arraymodule.c"
        __label__ = 26; break; //@line 1228 "arraymodule.c"
      case 26: // $bb26
        var $123=$iftmp_218; //@line 1228 "arraymodule.c"
        $item=$123; //@line 1228 "arraymodule.c"
        var $124=$self_addr; //@line 1229 "arraymodule.c"
        var $125=$124+12; //@line 1229 "arraymodule.c"
        var $126=$item; //@line 1229 "arraymodule.c"
        HEAP[$125]=$126; //@line 1229 "arraymodule.c"
        var $127=$self_addr; //@line 1230 "arraymodule.c"
        var $128=$127; //@line 1230 "arraymodule.c"
        var $129=$128+8; //@line 1230 "arraymodule.c"
        var $130=HEAP[$129]; //@line 1230 "arraymodule.c"
        var $131=$self_addr; //@line 1230 "arraymodule.c"
        var $132=$131+16; //@line 1230 "arraymodule.c"
        HEAP[$132]=$130; //@line 1230 "arraymodule.c"
        var $133=$fp; //@line 1231 "arraymodule.c"
        var $134=_ferror($133); //@line 1231 "arraymodule.c"
        var $135=($134)!=0; //@line 1231 "arraymodule.c"
        if ($135) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1231 "arraymodule.c"
      case 27: // $bb27
        var $136=HEAP[_PyExc_IOError]; //@line 1232 "arraymodule.c"
        var $137=_PyErr_SetFromErrno($136); //@line 1232 "arraymodule.c"
        var $138=$fp; //@line 1233 "arraymodule.c"
        _clearerr($138); //@line 1233 "arraymodule.c"
        __label__ = 29; break; //@line 1233 "arraymodule.c"
      case 28: // $bb28
        var $139=HEAP[_PyExc_EOFError]; //@line 1236 "arraymodule.c"
        _PyErr_SetString($139, __str35); //@line 1236 "arraymodule.c"
        __label__ = 29; break; //@line 1236 "arraymodule.c"
      case 29: // $bb29
        $0=0; //@line 1239 "arraymodule.c"
        __label__ = 31; break; //@line 1239 "arraymodule.c"
      case 30: // $bb30
        var $140=HEAP[__Py_NoneStruct]; //@line 1242 "arraymodule.c"
        var $141=($140) + 1; //@line 1242 "arraymodule.c"
        HEAP[__Py_NoneStruct]=$141; //@line 1242 "arraymodule.c"
        $0=__Py_NoneStruct; //@line 1243 "arraymodule.c"
        __label__ = 31; break; //@line 1243 "arraymodule.c"
      case 31: // $bb31
        var $142=$0; //@line 1198 "arraymodule.c"
        $retval=$142; //@line 1198 "arraymodule.c"
        var $retval32=$retval; //@line 1198 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 1198 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_fromfile_as_read($self, $args) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $args_addr=$args;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 1256 "arraymodule.c"
        var $2=($1)!=0; //@line 1256 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1256 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 1256 "arraymodule.c"
        var $4=_PyErr_WarnEx($3, __str36, 1); //@line 1256 "arraymodule.c"
        var $5=($4) < 0; //@line 1256 "arraymodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1256 "arraymodule.c"
      case 2: // $bb1
        $0=0; //@line 1258 "arraymodule.c"
        __label__ = 4; break; //@line 1258 "arraymodule.c"
      case 3: // $bb2
        var $6=$self_addr; //@line 1259 "arraymodule.c"
        var $7=$args_addr; //@line 1259 "arraymodule.c"
        var $8=_array_fromfile($6, $7); //@line 1259 "arraymodule.c"
        $0=$8; //@line 1259 "arraymodule.c"
        __label__ = 4; break; //@line 1259 "arraymodule.c"
      case 4: // $bb3
        var $9=$0; //@line 1258 "arraymodule.c"
        $retval=$9; //@line 1258 "arraymodule.c"
        var $retval4=$retval; //@line 1258 "arraymodule.c"
        ;
        return $retval4; //@line 1258 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_tofile($self, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $f_addr;
        var $retval;
        var $0;
        var $fp;
        $self_addr=$self;
        $f_addr=$f;
        var $1=$f_addr; //@line 1268 "arraymodule.c"
        var $2=_PyFile_AsFile($1); //@line 1268 "arraymodule.c"
        $fp=$2; //@line 1268 "arraymodule.c"
        var $3=$fp; //@line 1269 "arraymodule.c"
        var $4=($3)==0; //@line 1269 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1269 "arraymodule.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_TypeError]; //@line 1270 "arraymodule.c"
        _PyErr_SetString($5, __str37); //@line 1270 "arraymodule.c"
        $0=0; //@line 1271 "arraymodule.c"
        __label__ = 6; break; //@line 1271 "arraymodule.c"
      case 2: // $bb1
        var $6=$self_addr; //@line 1273 "arraymodule.c"
        var $7=$6+8; //@line 1273 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1273 "arraymodule.c"
        var $9=($8) > 0; //@line 1273 "arraymodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1273 "arraymodule.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1274 "arraymodule.c"
        var $11=$10+8; //@line 1274 "arraymodule.c"
        var $12=HEAP[$11]; //@line 1274 "arraymodule.c"
        var $13=$self_addr; //@line 1274 "arraymodule.c"
        var $14=$13+20; //@line 1274 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1274 "arraymodule.c"
        var $16=$15+4; //@line 1274 "arraymodule.c"
        var $17=HEAP[$16]; //@line 1274 "arraymodule.c"
        var $18=$self_addr; //@line 1274 "arraymodule.c"
        var $19=$18+12; //@line 1274 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1274 "arraymodule.c"
        var $21=$fp; //@line 1274 "arraymodule.c"
        var $22=_fwrite($20, $17, $12, $21); //@line 1274 "arraymodule.c"
        var $23=$self_addr; //@line 1274 "arraymodule.c"
        var $24=$23+8; //@line 1274 "arraymodule.c"
        var $25=HEAP[$24]; //@line 1274 "arraymodule.c"
        var $26=($22)!=($25); //@line 1274 "arraymodule.c"
        if ($26) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1274 "arraymodule.c"
      case 4: // $bb3
        var $27=HEAP[_PyExc_IOError]; //@line 1276 "arraymodule.c"
        var $28=_PyErr_SetFromErrno($27); //@line 1276 "arraymodule.c"
        var $29=$fp; //@line 1277 "arraymodule.c"
        _clearerr($29); //@line 1277 "arraymodule.c"
        $0=0; //@line 1278 "arraymodule.c"
        __label__ = 6; break; //@line 1278 "arraymodule.c"
      case 5: // $bb4
        var $30=HEAP[__Py_NoneStruct]; //@line 1281 "arraymodule.c"
        var $31=($30) + 1; //@line 1281 "arraymodule.c"
        HEAP[__Py_NoneStruct]=$31; //@line 1281 "arraymodule.c"
        $0=__Py_NoneStruct; //@line 1282 "arraymodule.c"
        __label__ = 6; break; //@line 1282 "arraymodule.c"
      case 6: // $bb5
        var $32=$0; //@line 1271 "arraymodule.c"
        $retval=$32; //@line 1271 "arraymodule.c"
        var $retval6=$retval; //@line 1271 "arraymodule.c"
        ;
        return $retval6; //@line 1271 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_tofile_as_write($self, $f) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $f_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $f_addr=$f;
        var $1=HEAP[_Py_Py3kWarningFlag]; //@line 1295 "arraymodule.c"
        var $2=($1)!=0; //@line 1295 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1295 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_DeprecationWarning]; //@line 1295 "arraymodule.c"
        var $4=_PyErr_WarnEx($3, __str38, 1); //@line 1295 "arraymodule.c"
        var $5=($4) < 0; //@line 1295 "arraymodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1295 "arraymodule.c"
      case 2: // $bb1
        $0=0; //@line 1297 "arraymodule.c"
        __label__ = 4; break; //@line 1297 "arraymodule.c"
      case 3: // $bb2
        var $6=$self_addr; //@line 1298 "arraymodule.c"
        var $7=$f_addr; //@line 1298 "arraymodule.c"
        var $8=_array_tofile($6, $7); //@line 1298 "arraymodule.c"
        $0=$8; //@line 1298 "arraymodule.c"
        __label__ = 4; break; //@line 1298 "arraymodule.c"
      case 4: // $bb3
        var $9=$0; //@line 1297 "arraymodule.c"
        $retval=$9; //@line 1297 "arraymodule.c"
        var $retval4=$retval; //@line 1297 "arraymodule.c"
        ;
        return $retval4; //@line 1297 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_fromlist($self, $list) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $list_addr;
        var $retval;
        var $iftmp_252;
        var $iftmp_250;
        var $iftmp_248;
        var $iftmp_239;
        var $iftmp_237;
        var $iftmp_235;
        var $0;
        var $n;
        var $itemsize;
        var $item;
        var $i;
        var $v;
        $self_addr=$self;
        $list_addr=$list;
        var $1=$self_addr; //@line 1306 "arraymodule.c"
        var $2=$1+20; //@line 1306 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1306 "arraymodule.c"
        var $4=$3+4; //@line 1306 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1306 "arraymodule.c"
        $itemsize=$5; //@line 1306 "arraymodule.c"
        var $6=$list_addr; //@line 1308 "arraymodule.c"
        var $7=$6+4; //@line 1308 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1308 "arraymodule.c"
        var $9=$8+84; //@line 1308 "arraymodule.c"
        var $10=HEAP[$9]; //@line 1308 "arraymodule.c"
        var $11=($10) & 33554432; //@line 1308 "arraymodule.c"
        var $12=($11)==0; //@line 1308 "arraymodule.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1308 "arraymodule.c"
      case 1: // $bb
        var $13=HEAP[_PyExc_TypeError]; //@line 1309 "arraymodule.c"
        _PyErr_SetString($13, __str39); //@line 1309 "arraymodule.c"
        $0=0; //@line 1310 "arraymodule.c"
        __label__ = 30; break; //@line 1310 "arraymodule.c"
      case 2: // $bb1
        var $14=$list_addr; //@line 1312 "arraymodule.c"
        var $15=_PyList_Size($14); //@line 1312 "arraymodule.c"
        $n=$15; //@line 1312 "arraymodule.c"
        var $16=$n; //@line 1313 "arraymodule.c"
        var $17=($16) > 0; //@line 1313 "arraymodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 29; break; } //@line 1313 "arraymodule.c"
      case 3: // $bb2
        var $18=$self_addr; //@line 1314 "arraymodule.c"
        var $19=$18+12; //@line 1314 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1314 "arraymodule.c"
        $item=$20; //@line 1314 "arraymodule.c"
        var $21=$self_addr; //@line 1316 "arraymodule.c"
        var $22=$21; //@line 1316 "arraymodule.c"
        var $23=$22+8; //@line 1316 "arraymodule.c"
        var $24=HEAP[$23]; //@line 1316 "arraymodule.c"
        var $25=$n; //@line 1316 "arraymodule.c"
        var $26=($25) + ($24); //@line 1316 "arraymodule.c"
        var $27=$itemsize; //@line 1316 "arraymodule.c"
        var $28=($26) * ($27); //@line 1316 "arraymodule.c"
        var $29=($28) >= 0; //@line 1316 "arraymodule.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 1316 "arraymodule.c"
      case 4: // $bb3
        var $30=$self_addr; //@line 1316 "arraymodule.c"
        var $31=$30; //@line 1316 "arraymodule.c"
        var $32=$31+8; //@line 1316 "arraymodule.c"
        var $33=HEAP[$32]; //@line 1316 "arraymodule.c"
        var $34=$n; //@line 1316 "arraymodule.c"
        var $35=($34) + ($33); //@line 1316 "arraymodule.c"
        var $36=$itemsize; //@line 1316 "arraymodule.c"
        var $37=($35) * ($36); //@line 1316 "arraymodule.c"
        var $38=($37) >= 0; //@line 1316 "arraymodule.c"
        if ($38) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1316 "arraymodule.c"
      case 5: // $bb4
        var $39=$self_addr; //@line 1316 "arraymodule.c"
        var $40=$39; //@line 1316 "arraymodule.c"
        var $41=$40+8; //@line 1316 "arraymodule.c"
        var $42=HEAP[$41]; //@line 1316 "arraymodule.c"
        var $43=$n; //@line 1316 "arraymodule.c"
        var $44=($43) + ($42); //@line 1316 "arraymodule.c"
        var $45=$itemsize; //@line 1316 "arraymodule.c"
        var $46=($44) * ($45); //@line 1316 "arraymodule.c"
        var $47=($46)!=0; //@line 1316 "arraymodule.c"
        if ($47) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1316 "arraymodule.c"
      case 6: // $bb5
        var $48=$self_addr; //@line 1316 "arraymodule.c"
        var $49=$48; //@line 1316 "arraymodule.c"
        var $50=$49+8; //@line 1316 "arraymodule.c"
        var $51=HEAP[$50]; //@line 1316 "arraymodule.c"
        var $52=$n; //@line 1316 "arraymodule.c"
        var $53=($52) + ($51); //@line 1316 "arraymodule.c"
        var $54=$itemsize; //@line 1316 "arraymodule.c"
        var $55=($53) * ($54); //@line 1316 "arraymodule.c"
        $iftmp_239=$55; //@line 1316 "arraymodule.c"
        __label__ = 10; break; //@line 1316 "arraymodule.c"
      case 7: // $bb6
        $iftmp_239=1; //@line 1316 "arraymodule.c"
        __label__ = 10; break; //@line 1316 "arraymodule.c"
      case 8: // $bb11_thread1
        $iftmp_237=0; //@line 1316 "arraymodule.c"
        $iftmp_235=0; //@line 1316 "arraymodule.c"
        $item=0; //@line 1316 "arraymodule.c"
        __label__ = 11; break;
      case 9: // $bb11_thread
        $iftmp_235=0; //@line 1316 "arraymodule.c"
        $item=0; //@line 1316 "arraymodule.c"
        __label__ = 11; break;
      case 10: // $bb11
        var $56=$item; //@line 1316 "arraymodule.c"
        var $57=$iftmp_239; //@line 1316 "arraymodule.c"
        var $58=_realloc($56, $57); //@line 1316 "arraymodule.c"
        $iftmp_237=$58; //@line 1316 "arraymodule.c"
        $iftmp_235=$58; //@line 1316 "arraymodule.c"
        $item=$58; //@line 1316 "arraymodule.c"
        var $59=($58)==0; //@line 1317 "arraymodule.c"
        if ($59) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1317 "arraymodule.c"
      case 11: // $bb12
        var $60=_PyErr_NoMemory(); //@line 1318 "arraymodule.c"
        $0=0; //@line 1319 "arraymodule.c"
        __label__ = 30; break; //@line 1319 "arraymodule.c"
      case 12: // $bb13
        var $61=$self_addr; //@line 1321 "arraymodule.c"
        var $62=$61+12; //@line 1321 "arraymodule.c"
        var $63=$item; //@line 1321 "arraymodule.c"
        HEAP[$62]=$63; //@line 1321 "arraymodule.c"
        var $64=$self_addr; //@line 1322 "arraymodule.c"
        var $65=$64; //@line 1322 "arraymodule.c"
        var $66=$self_addr; //@line 1322 "arraymodule.c"
        var $67=$66; //@line 1322 "arraymodule.c"
        var $68=$67+8; //@line 1322 "arraymodule.c"
        var $69=HEAP[$68]; //@line 1322 "arraymodule.c"
        var $70=$n; //@line 1322 "arraymodule.c"
        var $71=($70) + ($69); //@line 1322 "arraymodule.c"
        var $72=$65+8; //@line 1322 "arraymodule.c"
        HEAP[$72]=$71; //@line 1322 "arraymodule.c"
        var $73=$self_addr; //@line 1323 "arraymodule.c"
        var $74=$73; //@line 1323 "arraymodule.c"
        var $75=$74+8; //@line 1323 "arraymodule.c"
        var $76=HEAP[$75]; //@line 1323 "arraymodule.c"
        var $77=$self_addr; //@line 1323 "arraymodule.c"
        var $78=$77+16; //@line 1323 "arraymodule.c"
        HEAP[$78]=$76; //@line 1323 "arraymodule.c"
        $i=0; //@line 1324 "arraymodule.c"
        __label__ = 28; break; //@line 1324 "arraymodule.c"
      case 13: // $bb14
        var $79=$list_addr; //@line 1325 "arraymodule.c"
        var $80=$i; //@line 1325 "arraymodule.c"
        var $81=_PyList_GetItem($79, $80); //@line 1325 "arraymodule.c"
        $v=$81; //@line 1325 "arraymodule.c"
        var $82=$self_addr; //@line 1326 "arraymodule.c"
        var $83=$82+20; //@line 1326 "arraymodule.c"
        var $84=HEAP[$83]; //@line 1326 "arraymodule.c"
        var $85=$84+12; //@line 1326 "arraymodule.c"
        var $86=HEAP[$85]; //@line 1326 "arraymodule.c"
        var $87=$self_addr; //@line 1326 "arraymodule.c"
        var $88=$87; //@line 1326 "arraymodule.c"
        var $89=$88+8; //@line 1326 "arraymodule.c"
        var $90=HEAP[$89]; //@line 1326 "arraymodule.c"
        var $91=$n; //@line 1326 "arraymodule.c"
        var $_neg=0 - ($91);
        var $92=$i; //@line 1326 "arraymodule.c"
        var $93=($_neg) + ($90);
        var $94=($93) + ($92); //@line 1326 "arraymodule.c"
        var $95=$self_addr; //@line 1326 "arraymodule.c"
        var $96=$v; //@line 1326 "arraymodule.c"
        var $97=FUNCTION_TABLE[$86]($95, $94, $96); //@line 1326 "arraymodule.c"
        var $98=($97)!=0; //@line 1326 "arraymodule.c"
        if ($98) { __label__ = 14; break; } else { __label__ = 27; break; } //@line 1326 "arraymodule.c"
      case 14: // $bb15
        var $99=$self_addr; //@line 1328 "arraymodule.c"
        var $100=$99; //@line 1328 "arraymodule.c"
        var $101=$self_addr; //@line 1328 "arraymodule.c"
        var $102=$101; //@line 1328 "arraymodule.c"
        var $103=$102+8; //@line 1328 "arraymodule.c"
        var $104=HEAP[$103]; //@line 1328 "arraymodule.c"
        var $105=$n; //@line 1328 "arraymodule.c"
        var $106=($104) - ($105); //@line 1328 "arraymodule.c"
        var $107=$100+8; //@line 1328 "arraymodule.c"
        HEAP[$107]=$106; //@line 1328 "arraymodule.c"
        var $108=$itemsize; //@line 1329 "arraymodule.c"
        var $109=($108)!=0; //@line 1329 "arraymodule.c"
        if ($109) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1329 "arraymodule.c"
      case 15: // $bb16
        var $110=$self_addr; //@line 1329 "arraymodule.c"
        var $111=$110+8; //@line 1329 "arraymodule.c"
        var $112=HEAP[$111]; //@line 1329 "arraymodule.c"
        var $113=$itemsize; //@line 1329 "arraymodule.c"
        var $114=((2147483647/($113))|0); //@line 1329 "arraymodule.c"
        var $115=($112) > ($114); //@line 1329 "arraymodule.c"
        if ($115) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1329 "arraymodule.c"
      case 16: // $bb17
        var $116=_PyErr_NoMemory(); //@line 1330 "arraymodule.c"
        $0=$116; //@line 1330 "arraymodule.c"
        __label__ = 30; break; //@line 1330 "arraymodule.c"
      case 17: // $bb18
        var $117=$self_addr; //@line 1332 "arraymodule.c"
        var $118=$117; //@line 1332 "arraymodule.c"
        var $119=$118+8; //@line 1332 "arraymodule.c"
        var $120=HEAP[$119]; //@line 1332 "arraymodule.c"
        var $121=$itemsize; //@line 1332 "arraymodule.c"
        var $122=($121) * ($120); //@line 1332 "arraymodule.c"
        var $123=($122) >= 0; //@line 1332 "arraymodule.c"
        if ($123) { __label__ = 18; break; } else { __label__ = 25; break; } //@line 1332 "arraymodule.c"
      case 18: // $bb19
        var $124=$self_addr; //@line 1332 "arraymodule.c"
        var $125=$124; //@line 1332 "arraymodule.c"
        var $126=$125+8; //@line 1332 "arraymodule.c"
        var $127=HEAP[$126]; //@line 1332 "arraymodule.c"
        var $128=$itemsize; //@line 1332 "arraymodule.c"
        var $129=($128) * ($127); //@line 1332 "arraymodule.c"
        var $130=($129) >= 0; //@line 1332 "arraymodule.c"
        if ($130) { __label__ = 19; break; } else { __label__ = 23; break; } //@line 1332 "arraymodule.c"
      case 19: // $bb20
        var $131=$self_addr; //@line 1332 "arraymodule.c"
        var $132=$131; //@line 1332 "arraymodule.c"
        var $133=$132+8; //@line 1332 "arraymodule.c"
        var $134=HEAP[$133]; //@line 1332 "arraymodule.c"
        var $135=$itemsize; //@line 1332 "arraymodule.c"
        var $136=($135) * ($134); //@line 1332 "arraymodule.c"
        var $137=($136)!=0; //@line 1332 "arraymodule.c"
        if ($137) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1332 "arraymodule.c"
      case 20: // $bb21
        var $138=$self_addr; //@line 1332 "arraymodule.c"
        var $139=$138; //@line 1332 "arraymodule.c"
        var $140=$139+8; //@line 1332 "arraymodule.c"
        var $141=HEAP[$140]; //@line 1332 "arraymodule.c"
        var $142=$itemsize; //@line 1332 "arraymodule.c"
        var $143=($142) * ($141); //@line 1332 "arraymodule.c"
        $iftmp_252=$143; //@line 1332 "arraymodule.c"
        __label__ = 22; break; //@line 1332 "arraymodule.c"
      case 21: // $bb22
        $iftmp_252=1; //@line 1332 "arraymodule.c"
        __label__ = 22; break; //@line 1332 "arraymodule.c"
      case 22: // $bb23
        var $144=$item; //@line 1332 "arraymodule.c"
        var $145=$iftmp_252; //@line 1332 "arraymodule.c"
        var $146=_realloc($144, $145); //@line 1332 "arraymodule.c"
        $iftmp_250=$146; //@line 1332 "arraymodule.c"
        __label__ = 24; break; //@line 1332 "arraymodule.c"
      case 23: // $bb24
        $iftmp_250=0; //@line 1332 "arraymodule.c"
        __label__ = 24; break; //@line 1332 "arraymodule.c"
      case 24: // $bb25
        var $147=$iftmp_250; //@line 1332 "arraymodule.c"
        $iftmp_248=$147; //@line 1332 "arraymodule.c"
        __label__ = 26; break; //@line 1332 "arraymodule.c"
      case 25: // $bb26
        $iftmp_248=0; //@line 1332 "arraymodule.c"
        __label__ = 26; break; //@line 1332 "arraymodule.c"
      case 26: // $bb27
        var $148=$iftmp_248; //@line 1332 "arraymodule.c"
        $item=$148; //@line 1332 "arraymodule.c"
        var $149=$self_addr; //@line 1334 "arraymodule.c"
        var $150=$149+12; //@line 1334 "arraymodule.c"
        var $151=$item; //@line 1334 "arraymodule.c"
        HEAP[$150]=$151; //@line 1334 "arraymodule.c"
        var $152=$self_addr; //@line 1335 "arraymodule.c"
        var $153=$152; //@line 1335 "arraymodule.c"
        var $154=$153+8; //@line 1335 "arraymodule.c"
        var $155=HEAP[$154]; //@line 1335 "arraymodule.c"
        var $156=$self_addr; //@line 1335 "arraymodule.c"
        var $157=$156+16; //@line 1335 "arraymodule.c"
        HEAP[$157]=$155; //@line 1335 "arraymodule.c"
        $0=0; //@line 1336 "arraymodule.c"
        __label__ = 30; break; //@line 1336 "arraymodule.c"
      case 27: // $bb28
        var $158=$i; //@line 1324 "arraymodule.c"
        var $159=($158) + 1; //@line 1324 "arraymodule.c"
        $i=$159; //@line 1324 "arraymodule.c"
        __label__ = 28; break; //@line 1324 "arraymodule.c"
      case 28: // $bb29
        var $160=$i; //@line 1324 "arraymodule.c"
        var $161=$n; //@line 1324 "arraymodule.c"
        var $162=($160) < ($161); //@line 1324 "arraymodule.c"
        if ($162) { __label__ = 13; break; } else { __label__ = 29; break; } //@line 1324 "arraymodule.c"
      case 29: // $bb30
        var $163=HEAP[__Py_NoneStruct]; //@line 1340 "arraymodule.c"
        var $164=($163) + 1; //@line 1340 "arraymodule.c"
        HEAP[__Py_NoneStruct]=$164; //@line 1340 "arraymodule.c"
        $0=__Py_NoneStruct; //@line 1341 "arraymodule.c"
        __label__ = 30; break; //@line 1341 "arraymodule.c"
      case 30: // $bb31
        var $165=$0; //@line 1310 "arraymodule.c"
        $retval=$165; //@line 1310 "arraymodule.c"
        var $retval32=$retval; //@line 1310 "arraymodule.c"
        ;
        return $retval32; //@line 1310 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_tolist($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $list;
        var $i;
        var $v;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 1353 "arraymodule.c"
        var $2=$1; //@line 1353 "arraymodule.c"
        var $3=$2+8; //@line 1353 "arraymodule.c"
        var $4=HEAP[$3]; //@line 1353 "arraymodule.c"
        var $5=_PyList_New($4); //@line 1353 "arraymodule.c"
        $list=$5; //@line 1353 "arraymodule.c"
        var $6=$list; //@line 1356 "arraymodule.c"
        var $7=($6)==0; //@line 1356 "arraymodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1356 "arraymodule.c"
      case 1: // $bb
        $0=0; //@line 1357 "arraymodule.c"
        __label__ = 10; break; //@line 1357 "arraymodule.c"
      case 2: // $bb1
        $i=0; //@line 1358 "arraymodule.c"
        __label__ = 8; break; //@line 1358 "arraymodule.c"
      case 3: // $bb2
        var $8=$self_addr; //@line 1359 "arraymodule.c"
        var $9=$8; //@line 1359 "arraymodule.c"
        var $10=$i; //@line 1359 "arraymodule.c"
        var $11=_getarrayitem($9, $10); //@line 1359 "arraymodule.c"
        $v=$11; //@line 1359 "arraymodule.c"
        var $12=$v; //@line 1360 "arraymodule.c"
        var $13=($12)==0; //@line 1360 "arraymodule.c"
        var $14=$list; //@line 1361 "arraymodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 1360 "arraymodule.c"
      case 4: // $bb3
        var $15=$14; //@line 1361 "arraymodule.c"
        var $16=HEAP[$15]; //@line 1361 "arraymodule.c"
        var $17=($16) - 1; //@line 1361 "arraymodule.c"
        var $18=$list; //@line 1361 "arraymodule.c"
        var $19=$18; //@line 1361 "arraymodule.c"
        HEAP[$19]=$17; //@line 1361 "arraymodule.c"
        var $20=$list; //@line 1361 "arraymodule.c"
        var $21=$20; //@line 1361 "arraymodule.c"
        var $22=HEAP[$21]; //@line 1361 "arraymodule.c"
        var $23=($22)==0; //@line 1361 "arraymodule.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1361 "arraymodule.c"
      case 5: // $bb4
        var $24=$list; //@line 1361 "arraymodule.c"
        var $25=$24+4; //@line 1361 "arraymodule.c"
        var $26=HEAP[$25]; //@line 1361 "arraymodule.c"
        var $27=$26+24; //@line 1361 "arraymodule.c"
        var $28=HEAP[$27]; //@line 1361 "arraymodule.c"
        var $29=$list; //@line 1361 "arraymodule.c"
        FUNCTION_TABLE[$28]($29); //@line 1361 "arraymodule.c"
        __label__ = 6; break; //@line 1361 "arraymodule.c"
      case 6: // $bb5
        $0=0; //@line 1362 "arraymodule.c"
        __label__ = 10; break; //@line 1362 "arraymodule.c"
      case 7: // $bb6
        var $30=$i; //@line 1364 "arraymodule.c"
        var $31=$v; //@line 1364 "arraymodule.c"
        var $32=_PyList_SetItem($14, $30, $31); //@line 1364 "arraymodule.c"
        var $33=$i; //@line 1358 "arraymodule.c"
        var $34=($33) + 1; //@line 1358 "arraymodule.c"
        $i=$34; //@line 1358 "arraymodule.c"
        __label__ = 8; break; //@line 1358 "arraymodule.c"
      case 8: // $bb7
        var $35=$self_addr; //@line 1358 "arraymodule.c"
        var $36=$35; //@line 1358 "arraymodule.c"
        var $37=$36+8; //@line 1358 "arraymodule.c"
        var $38=HEAP[$37]; //@line 1358 "arraymodule.c"
        var $39=$i; //@line 1358 "arraymodule.c"
        var $40=($38) > ($39); //@line 1358 "arraymodule.c"
        if ($40) { __label__ = 3; break; } else { __label__ = 9; break; } //@line 1358 "arraymodule.c"
      case 9: // $bb8
        var $41=$list; //@line 1366 "arraymodule.c"
        $0=$41; //@line 1366 "arraymodule.c"
        __label__ = 10; break; //@line 1366 "arraymodule.c"
      case 10: // $bb9
        var $42=$0; //@line 1357 "arraymodule.c"
        $retval=$42; //@line 1357 "arraymodule.c"
        var $retval10=$retval; //@line 1357 "arraymodule.c"
        ;
        return $retval10; //@line 1357 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_fromstring($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_273;
        var $iftmp_270;
        var $iftmp_267;
        var $0;
        var $str=__stackBase__;
        var $n=__stackBase__+4;
        var $itemsize;
        var $item;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$self_addr; //@line 1380 "arraymodule.c"
        var $2=$1+20; //@line 1380 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1380 "arraymodule.c"
        var $4=$3+4; //@line 1380 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1380 "arraymodule.c"
        $itemsize=$5; //@line 1380 "arraymodule.c"
        var $6=$args_addr; //@line 1381 "arraymodule.c"
        var $7=__PyArg_ParseTuple_SizeT($6, __str40, allocate([$str,0,0,0,$n,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1381 "arraymodule.c"
        var $8=($7)==0; //@line 1381 "arraymodule.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1381 "arraymodule.c"
      case 1: // $bb
        $0=0; //@line 1382 "arraymodule.c"
        __label__ = 19; break; //@line 1382 "arraymodule.c"
      case 2: // $bb1
        var $9=HEAP[$n]; //@line 1383 "arraymodule.c"
        var $10=$itemsize; //@line 1383 "arraymodule.c"
        var $11=($9) % ($10); //@line 1383 "arraymodule.c"
        var $12=($11)!=0; //@line 1383 "arraymodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1383 "arraymodule.c"
      case 3: // $bb2
        var $13=HEAP[_PyExc_ValueError]; //@line 1384 "arraymodule.c"
        _PyErr_SetString($13, __str41); //@line 1384 "arraymodule.c"
        $0=0; //@line 1386 "arraymodule.c"
        __label__ = 19; break; //@line 1386 "arraymodule.c"
      case 4: // $bb3
        var $14=HEAP[$n]; //@line 1388 "arraymodule.c"
        var $15=$itemsize; //@line 1388 "arraymodule.c"
        var $16=((($14)/($15))|0); //@line 1388 "arraymodule.c"
        HEAP[$n]=$16; //@line 1388 "arraymodule.c"
        var $17=HEAP[$n]; //@line 1389 "arraymodule.c"
        var $18=($17) > 0; //@line 1389 "arraymodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 18; break; } //@line 1389 "arraymodule.c"
      case 5: // $bb4
        var $19=$self_addr; //@line 1390 "arraymodule.c"
        var $20=$19+12; //@line 1390 "arraymodule.c"
        var $21=HEAP[$20]; //@line 1390 "arraymodule.c"
        $item=$21; //@line 1390 "arraymodule.c"
        var $22=$self_addr; //@line 1391 "arraymodule.c"
        var $23=$22; //@line 1391 "arraymodule.c"
        var $24=$23+8; //@line 1391 "arraymodule.c"
        var $25=HEAP[$24]; //@line 1391 "arraymodule.c"
        var $26=2147483647 - ($25); //@line 1391 "arraymodule.c"
        var $27=HEAP[$n]; //@line 1391 "arraymodule.c"
        var $28=($26) < ($27); //@line 1391 "arraymodule.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 1391 "arraymodule.c"
      case 6: // $bb5
        var $29=$self_addr; //@line 1391 "arraymodule.c"
        var $30=$29; //@line 1391 "arraymodule.c"
        var $31=$30+8; //@line 1391 "arraymodule.c"
        var $32=HEAP[$31]; //@line 1391 "arraymodule.c"
        var $33=HEAP[$n]; //@line 1391 "arraymodule.c"
        var $34=($33) + ($32); //@line 1391 "arraymodule.c"
        var $35=$itemsize; //@line 1391 "arraymodule.c"
        var $36=((2147483647/($35))|0); //@line 1391 "arraymodule.c"
        var $37=($34) > ($36); //@line 1391 "arraymodule.c"
        if ($37) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1391 "arraymodule.c"
      case 7: // $bb6
        var $38=_PyErr_NoMemory(); //@line 1393 "arraymodule.c"
        $0=$38; //@line 1393 "arraymodule.c"
        __label__ = 19; break; //@line 1393 "arraymodule.c"
      case 8: // $bb7
        var $39=$self_addr; //@line 1395 "arraymodule.c"
        var $40=$39; //@line 1395 "arraymodule.c"
        var $41=$40+8; //@line 1395 "arraymodule.c"
        var $42=HEAP[$41]; //@line 1395 "arraymodule.c"
        var $43=HEAP[$n]; //@line 1395 "arraymodule.c"
        var $44=($43) + ($42); //@line 1395 "arraymodule.c"
        var $45=$itemsize; //@line 1395 "arraymodule.c"
        var $46=($44) * ($45); //@line 1395 "arraymodule.c"
        var $47=($46) >= 0; //@line 1395 "arraymodule.c"
        if ($47) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 1395 "arraymodule.c"
      case 9: // $bb8
        var $48=$self_addr; //@line 1395 "arraymodule.c"
        var $49=$48; //@line 1395 "arraymodule.c"
        var $50=$49+8; //@line 1395 "arraymodule.c"
        var $51=HEAP[$50]; //@line 1395 "arraymodule.c"
        var $52=HEAP[$n]; //@line 1395 "arraymodule.c"
        var $53=($52) + ($51); //@line 1395 "arraymodule.c"
        var $54=$itemsize; //@line 1395 "arraymodule.c"
        var $55=($53) * ($54); //@line 1395 "arraymodule.c"
        var $56=($55) >= 0; //@line 1395 "arraymodule.c"
        if ($56) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 1395 "arraymodule.c"
      case 10: // $bb9
        var $57=$self_addr; //@line 1395 "arraymodule.c"
        var $58=$57; //@line 1395 "arraymodule.c"
        var $59=$58+8; //@line 1395 "arraymodule.c"
        var $60=HEAP[$59]; //@line 1395 "arraymodule.c"
        var $61=HEAP[$n]; //@line 1395 "arraymodule.c"
        var $62=($61) + ($60); //@line 1395 "arraymodule.c"
        var $63=$itemsize; //@line 1395 "arraymodule.c"
        var $64=($62) * ($63); //@line 1395 "arraymodule.c"
        var $65=($64)!=0; //@line 1395 "arraymodule.c"
        if ($65) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1395 "arraymodule.c"
      case 11: // $bb10
        var $66=$self_addr; //@line 1395 "arraymodule.c"
        var $67=$66; //@line 1395 "arraymodule.c"
        var $68=$67+8; //@line 1395 "arraymodule.c"
        var $69=HEAP[$68]; //@line 1395 "arraymodule.c"
        var $70=HEAP[$n]; //@line 1395 "arraymodule.c"
        var $71=($70) + ($69); //@line 1395 "arraymodule.c"
        var $72=$itemsize; //@line 1395 "arraymodule.c"
        var $73=($71) * ($72); //@line 1395 "arraymodule.c"
        $iftmp_273=$73; //@line 1395 "arraymodule.c"
        __label__ = 15; break; //@line 1395 "arraymodule.c"
      case 12: // $bb11
        $iftmp_273=1; //@line 1395 "arraymodule.c"
        __label__ = 15; break; //@line 1395 "arraymodule.c"
      case 13: // $bb16_thread1
        $iftmp_270=0; //@line 1395 "arraymodule.c"
        $iftmp_267=0; //@line 1395 "arraymodule.c"
        $item=0; //@line 1395 "arraymodule.c"
        __label__ = 16; break;
      case 14: // $bb16_thread
        $iftmp_267=0; //@line 1395 "arraymodule.c"
        $item=0; //@line 1395 "arraymodule.c"
        __label__ = 16; break;
      case 15: // $bb16
        var $74=$item; //@line 1395 "arraymodule.c"
        var $75=$iftmp_273; //@line 1395 "arraymodule.c"
        var $76=_realloc($74, $75); //@line 1395 "arraymodule.c"
        $iftmp_270=$76; //@line 1395 "arraymodule.c"
        $iftmp_267=$76; //@line 1395 "arraymodule.c"
        $item=$76; //@line 1395 "arraymodule.c"
        var $77=($76)==0; //@line 1396 "arraymodule.c"
        if ($77) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 1396 "arraymodule.c"
      case 16: // $bb17
        var $78=_PyErr_NoMemory(); //@line 1397 "arraymodule.c"
        $0=0; //@line 1398 "arraymodule.c"
        __label__ = 19; break; //@line 1398 "arraymodule.c"
      case 17: // $bb18
        var $79=$self_addr; //@line 1400 "arraymodule.c"
        var $80=$79+12; //@line 1400 "arraymodule.c"
        var $81=$item; //@line 1400 "arraymodule.c"
        HEAP[$80]=$81; //@line 1400 "arraymodule.c"
        var $82=$self_addr; //@line 1401 "arraymodule.c"
        var $83=$82; //@line 1401 "arraymodule.c"
        var $84=$self_addr; //@line 1401 "arraymodule.c"
        var $85=$84; //@line 1401 "arraymodule.c"
        var $86=$85+8; //@line 1401 "arraymodule.c"
        var $87=HEAP[$86]; //@line 1401 "arraymodule.c"
        var $88=HEAP[$n]; //@line 1401 "arraymodule.c"
        var $89=($88) + ($87); //@line 1401 "arraymodule.c"
        var $90=$83+8; //@line 1401 "arraymodule.c"
        HEAP[$90]=$89; //@line 1401 "arraymodule.c"
        var $91=$self_addr; //@line 1402 "arraymodule.c"
        var $92=$91; //@line 1402 "arraymodule.c"
        var $93=$92+8; //@line 1402 "arraymodule.c"
        var $94=HEAP[$93]; //@line 1402 "arraymodule.c"
        var $95=$self_addr; //@line 1402 "arraymodule.c"
        var $96=$95+16; //@line 1402 "arraymodule.c"
        HEAP[$96]=$94; //@line 1402 "arraymodule.c"
        var $97=HEAP[$n]; //@line 1403 "arraymodule.c"
        var $98=$itemsize; //@line 1403 "arraymodule.c"
        var $99=($98) * ($97); //@line 1403 "arraymodule.c"
        var $100=HEAP[$str]; //@line 1403 "arraymodule.c"
        var $101=$self_addr; //@line 1403 "arraymodule.c"
        var $102=$101; //@line 1403 "arraymodule.c"
        var $103=$102+8; //@line 1403 "arraymodule.c"
        var $104=HEAP[$103]; //@line 1403 "arraymodule.c"
        var $105=HEAP[$n]; //@line 1403 "arraymodule.c"
        var $106=($104) - ($105); //@line 1403 "arraymodule.c"
        var $107=$itemsize; //@line 1403 "arraymodule.c"
        var $108=($106) * ($107); //@line 1403 "arraymodule.c"
        var $109=$item; //@line 1403 "arraymodule.c"
        var $110=$109+$108; //@line 1403 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($110, $100, $99, 1, 0); //@line 1403 "arraymodule.c"
        __label__ = 18; break; //@line 1403 "arraymodule.c"
      case 18: // $bb19
        var $111=HEAP[__Py_NoneStruct]; //@line 1406 "arraymodule.c"
        var $112=($111) + 1; //@line 1406 "arraymodule.c"
        HEAP[__Py_NoneStruct]=$112; //@line 1406 "arraymodule.c"
        $0=__Py_NoneStruct; //@line 1407 "arraymodule.c"
        __label__ = 19; break; //@line 1407 "arraymodule.c"
      case 19: // $bb20
        var $113=$0; //@line 1382 "arraymodule.c"
        $retval=$113; //@line 1382 "arraymodule.c"
        var $retval21=$retval; //@line 1382 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 1382 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_tostring($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 1420 "arraymodule.c"
        var $2=$1+8; //@line 1420 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1420 "arraymodule.c"
        var $4=$self_addr; //@line 1420 "arraymodule.c"
        var $5=$4+20; //@line 1420 "arraymodule.c"
        var $6=HEAP[$5]; //@line 1420 "arraymodule.c"
        var $7=$6+4; //@line 1420 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1420 "arraymodule.c"
        var $9=((2147483647/($8))|0); //@line 1420 "arraymodule.c"
        var $10=($3) <= ($9); //@line 1420 "arraymodule.c"
        if ($10) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1420 "arraymodule.c"
      case 1: // $bb
        var $11=$self_addr; //@line 1421 "arraymodule.c"
        var $12=$11; //@line 1421 "arraymodule.c"
        var $13=$12+8; //@line 1421 "arraymodule.c"
        var $14=HEAP[$13]; //@line 1421 "arraymodule.c"
        var $15=$self_addr; //@line 1421 "arraymodule.c"
        var $16=$15+20; //@line 1421 "arraymodule.c"
        var $17=HEAP[$16]; //@line 1421 "arraymodule.c"
        var $18=$17+4; //@line 1421 "arraymodule.c"
        var $19=HEAP[$18]; //@line 1421 "arraymodule.c"
        var $20=($19) * ($14); //@line 1421 "arraymodule.c"
        var $21=$self_addr; //@line 1421 "arraymodule.c"
        var $22=$21+12; //@line 1421 "arraymodule.c"
        var $23=HEAP[$22]; //@line 1421 "arraymodule.c"
        var $24=_PyString_FromStringAndSize($23, $20); //@line 1421 "arraymodule.c"
        $0=$24; //@line 1421 "arraymodule.c"
        __label__ = 3; break; //@line 1421 "arraymodule.c"
      case 2: // $bb1
        var $25=_PyErr_NoMemory(); //@line 1424 "arraymodule.c"
        $0=$25; //@line 1424 "arraymodule.c"
        __label__ = 3; break; //@line 1424 "arraymodule.c"
      case 3: // $bb2
        var $26=$0; //@line 1421 "arraymodule.c"
        $retval=$26; //@line 1421 "arraymodule.c"
        var $retval3=$retval; //@line 1421 "arraymodule.c"
        ;
        return $retval3; //@line 1421 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_fromunicode($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_297;
        var $iftmp_294;
        var $iftmp_291;
        var $0;
        var $ustr=__stackBase__;
        var $n=__stackBase__+4;
        var $item;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1443 "arraymodule.c"
        var $2=__PyArg_ParseTuple_SizeT($1, __str42, allocate([$ustr,0,0,0,$n,0,0,0], ["i16**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1443 "arraymodule.c"
        var $3=($2)==0; //@line 1443 "arraymodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1443 "arraymodule.c"
      case 1: // $bb
        $0=0; //@line 1444 "arraymodule.c"
        __label__ = 18; break; //@line 1444 "arraymodule.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 1445 "arraymodule.c"
        var $5=$4+20; //@line 1445 "arraymodule.c"
        var $6=HEAP[$5]; //@line 1445 "arraymodule.c"
        var $7=$6; //@line 1445 "arraymodule.c"
        var $8=HEAP[$7]; //@line 1445 "arraymodule.c"
        var $9=($8)!=117; //@line 1445 "arraymodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1445 "arraymodule.c"
      case 3: // $bb2
        var $10=HEAP[_PyExc_ValueError]; //@line 1446 "arraymodule.c"
        _PyErr_SetString($10, __str43); //@line 1446 "arraymodule.c"
        $0=0; //@line 1449 "arraymodule.c"
        __label__ = 18; break; //@line 1449 "arraymodule.c"
      case 4: // $bb3
        var $11=HEAP[$n]; //@line 1451 "arraymodule.c"
        var $12=($11) > 0; //@line 1451 "arraymodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 17; break; } //@line 1451 "arraymodule.c"
      case 5: // $bb4
        var $13=$self_addr; //@line 1452 "arraymodule.c"
        var $14=$13+12; //@line 1452 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1452 "arraymodule.c"
        var $16=$15; //@line 1452 "arraymodule.c"
        $item=$16; //@line 1452 "arraymodule.c"
        var $17=$self_addr; //@line 1453 "arraymodule.c"
        var $18=$17; //@line 1453 "arraymodule.c"
        var $19=$18+8; //@line 1453 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1453 "arraymodule.c"
        var $21=HEAP[$n]; //@line 1453 "arraymodule.c"
        var $22=2147483647 - ($21); //@line 1453 "arraymodule.c"
        var $23=($20) > ($22); //@line 1453 "arraymodule.c"
        if ($23) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1453 "arraymodule.c"
      case 6: // $bb5
        var $24=_PyErr_NoMemory(); //@line 1454 "arraymodule.c"
        $0=$24; //@line 1454 "arraymodule.c"
        __label__ = 18; break; //@line 1454 "arraymodule.c"
      case 7: // $bb6
        var $25=$self_addr; //@line 1456 "arraymodule.c"
        var $26=$25; //@line 1456 "arraymodule.c"
        var $27=$26+8; //@line 1456 "arraymodule.c"
        var $28=HEAP[$27]; //@line 1456 "arraymodule.c"
        var $29=HEAP[$n]; //@line 1456 "arraymodule.c"
        var $30=($29) + ($28); //@line 1456 "arraymodule.c"
        var $31=($30) <= 1073741823; //@line 1456 "arraymodule.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 13; break; } //@line 1456 "arraymodule.c"
      case 8: // $bb7
        var $32=$self_addr; //@line 1456 "arraymodule.c"
        var $33=$32; //@line 1456 "arraymodule.c"
        var $34=$33+8; //@line 1456 "arraymodule.c"
        var $35=HEAP[$34]; //@line 1456 "arraymodule.c"
        var $36=HEAP[$n]; //@line 1456 "arraymodule.c"
        var $37=($36) + ($35); //@line 1456 "arraymodule.c"
        var $38=($37) * 2; //@line 1456 "arraymodule.c"
        var $39=($38) >= 0; //@line 1456 "arraymodule.c"
        if ($39) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1456 "arraymodule.c"
      case 9: // $bb8
        var $40=$self_addr; //@line 1456 "arraymodule.c"
        var $41=$40; //@line 1456 "arraymodule.c"
        var $42=$41+8; //@line 1456 "arraymodule.c"
        var $43=HEAP[$42]; //@line 1456 "arraymodule.c"
        var $44=HEAP[$n]; //@line 1456 "arraymodule.c"
        var $45=($44) + ($43); //@line 1456 "arraymodule.c"
        var $46=($45) * 2; //@line 1456 "arraymodule.c"
        var $47=($46)!=0; //@line 1456 "arraymodule.c"
        if ($47) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1456 "arraymodule.c"
      case 10: // $bb9
        var $48=$self_addr; //@line 1456 "arraymodule.c"
        var $49=$48; //@line 1456 "arraymodule.c"
        var $50=$49+8; //@line 1456 "arraymodule.c"
        var $51=HEAP[$50]; //@line 1456 "arraymodule.c"
        var $52=HEAP[$n]; //@line 1456 "arraymodule.c"
        var $53=($52) + ($51); //@line 1456 "arraymodule.c"
        var $54=($53) * 2; //@line 1456 "arraymodule.c"
        $iftmp_297=$54; //@line 1456 "arraymodule.c"
        __label__ = 14; break; //@line 1456 "arraymodule.c"
      case 11: // $bb10
        $iftmp_297=1; //@line 1456 "arraymodule.c"
        __label__ = 14; break; //@line 1456 "arraymodule.c"
      case 12: // $bb15_thread1
        $iftmp_294=0; //@line 1456 "arraymodule.c"
        $iftmp_291=0; //@line 1456 "arraymodule.c"
        $item=0; //@line 1456 "arraymodule.c"
        __label__ = 15; break;
      case 13: // $bb15_thread
        $iftmp_291=0; //@line 1456 "arraymodule.c"
        $item=0; //@line 1456 "arraymodule.c"
        __label__ = 15; break;
      case 14: // $bb15
        var $55=$item; //@line 1456 "arraymodule.c"
        var $56=$55; //@line 1456 "arraymodule.c"
        var $57=$iftmp_297; //@line 1456 "arraymodule.c"
        var $58=_realloc($56, $57); //@line 1456 "arraymodule.c"
        var $59=$58; //@line 1456 "arraymodule.c"
        $iftmp_294=$59; //@line 1456 "arraymodule.c"
        $iftmp_291=$59; //@line 1456 "arraymodule.c"
        $item=$59; //@line 1456 "arraymodule.c"
        var $60=($59)==0; //@line 1457 "arraymodule.c"
        if ($60) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1457 "arraymodule.c"
      case 15: // $bb16
        var $61=_PyErr_NoMemory(); //@line 1458 "arraymodule.c"
        $0=0; //@line 1459 "arraymodule.c"
        __label__ = 18; break; //@line 1459 "arraymodule.c"
      case 16: // $bb17
        var $62=$item; //@line 1461 "arraymodule.c"
        var $63=$62; //@line 1461 "arraymodule.c"
        var $64=$self_addr; //@line 1461 "arraymodule.c"
        var $65=$64+12; //@line 1461 "arraymodule.c"
        HEAP[$65]=$63; //@line 1461 "arraymodule.c"
        var $66=$self_addr; //@line 1462 "arraymodule.c"
        var $67=$66; //@line 1462 "arraymodule.c"
        var $68=$self_addr; //@line 1462 "arraymodule.c"
        var $69=$68; //@line 1462 "arraymodule.c"
        var $70=$69+8; //@line 1462 "arraymodule.c"
        var $71=HEAP[$70]; //@line 1462 "arraymodule.c"
        var $72=HEAP[$n]; //@line 1462 "arraymodule.c"
        var $73=($72) + ($71); //@line 1462 "arraymodule.c"
        var $74=$67+8; //@line 1462 "arraymodule.c"
        HEAP[$74]=$73; //@line 1462 "arraymodule.c"
        var $75=$self_addr; //@line 1463 "arraymodule.c"
        var $76=$75; //@line 1463 "arraymodule.c"
        var $77=$76+8; //@line 1463 "arraymodule.c"
        var $78=HEAP[$77]; //@line 1463 "arraymodule.c"
        var $79=$self_addr; //@line 1463 "arraymodule.c"
        var $80=$79+16; //@line 1463 "arraymodule.c"
        HEAP[$80]=$78; //@line 1463 "arraymodule.c"
        var $81=HEAP[$n]; //@line 1464 "arraymodule.c"
        var $82=($81) * 2; //@line 1464 "arraymodule.c"
        var $83=HEAP[$ustr]; //@line 1464 "arraymodule.c"
        var $84=$self_addr; //@line 1464 "arraymodule.c"
        var $85=$84; //@line 1464 "arraymodule.c"
        var $86=$85+8; //@line 1464 "arraymodule.c"
        var $87=HEAP[$86]; //@line 1464 "arraymodule.c"
        var $88=$item; //@line 1464 "arraymodule.c"
        var $89=$88+2*$87; //@line 1464 "arraymodule.c"
        var $90=HEAP[$n]; //@line 1464 "arraymodule.c"
        var $91=0 - ($90); //@line 1464 "arraymodule.c"
        var $92=$89+2*$91; //@line 1464 "arraymodule.c"
        var $93=$92; //@line 1464 "arraymodule.c"
        var $94=$83; //@line 1464 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($93, $94, $82, 1, 0); //@line 1464 "arraymodule.c"
        __label__ = 17; break; //@line 1464 "arraymodule.c"
      case 17: // $bb18
        var $95=HEAP[__Py_NoneStruct]; //@line 1468 "arraymodule.c"
        var $96=($95) + 1; //@line 1468 "arraymodule.c"
        HEAP[__Py_NoneStruct]=$96; //@line 1468 "arraymodule.c"
        $0=__Py_NoneStruct; //@line 1469 "arraymodule.c"
        __label__ = 18; break; //@line 1469 "arraymodule.c"
      case 18: // $bb19
        var $97=$0; //@line 1444 "arraymodule.c"
        $retval=$97; //@line 1444 "arraymodule.c"
        var $retval20=$retval; //@line 1444 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval20; //@line 1444 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_tounicode($self, $unused) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $unused_addr=$unused;
        var $1=$self_addr; //@line 1484 "arraymodule.c"
        var $2=$1+20; //@line 1484 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1484 "arraymodule.c"
        var $4=$3; //@line 1484 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1484 "arraymodule.c"
        var $6=($5)!=117; //@line 1484 "arraymodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1484 "arraymodule.c"
      case 1: // $bb
        var $7=HEAP[_PyExc_ValueError]; //@line 1485 "arraymodule.c"
        _PyErr_SetString($7, __str44); //@line 1485 "arraymodule.c"
        $0=0; //@line 1487 "arraymodule.c"
        __label__ = 3; break; //@line 1487 "arraymodule.c"
      case 2: // $bb1
        var $8=$self_addr; //@line 1489 "arraymodule.c"
        var $9=$8; //@line 1489 "arraymodule.c"
        var $10=$9+8; //@line 1489 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1489 "arraymodule.c"
        var $12=$self_addr; //@line 1489 "arraymodule.c"
        var $13=$12+12; //@line 1489 "arraymodule.c"
        var $14=HEAP[$13]; //@line 1489 "arraymodule.c"
        var $15=$14; //@line 1489 "arraymodule.c"
        var $16=_PyUnicodeUCS2_FromUnicode($15, $11); //@line 1489 "arraymodule.c"
        $0=$16; //@line 1489 "arraymodule.c"
        __label__ = 3; break; //@line 1489 "arraymodule.c"
      case 3: // $bb2
        var $17=$0; //@line 1487 "arraymodule.c"
        $retval=$17; //@line 1487 "arraymodule.c"
        var $retval3=$retval; //@line 1487 "arraymodule.c"
        ;
        return $retval3; //@line 1487 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_reduce($array) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $array_addr;
        var $retval;
        var $0;
        var $dict;
        var $result;
        var $list;
        $array_addr=$array;
        var $1=$array_addr; //@line 1507 "arraymodule.c"
        var $2=$1; //@line 1507 "arraymodule.c"
        var $3=_PyObject_GetAttrString($2, __str45); //@line 1507 "arraymodule.c"
        $dict=$3; //@line 1507 "arraymodule.c"
        var $4=$dict; //@line 1508 "arraymodule.c"
        var $5=($4)==0; //@line 1508 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1508 "arraymodule.c"
      case 1: // $bb
        var $6=HEAP[_PyExc_AttributeError]; //@line 1509 "arraymodule.c"
        var $7=_PyErr_ExceptionMatches($6); //@line 1509 "arraymodule.c"
        var $8=($7)==0; //@line 1509 "arraymodule.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1509 "arraymodule.c"
      case 2: // $bb1
        $0=0; //@line 1510 "arraymodule.c"
        __label__ = 13; break; //@line 1510 "arraymodule.c"
      case 3: // $bb2
        _PyErr_Clear(); //@line 1511 "arraymodule.c"
        $dict=__Py_NoneStruct; //@line 1512 "arraymodule.c"
        var $9=$dict; //@line 1513 "arraymodule.c"
        var $10=$9; //@line 1513 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1513 "arraymodule.c"
        var $12=($11) + 1; //@line 1513 "arraymodule.c"
        var $13=$dict; //@line 1513 "arraymodule.c"
        var $14=$13; //@line 1513 "arraymodule.c"
        HEAP[$14]=$12; //@line 1513 "arraymodule.c"
        __label__ = 4; break; //@line 1513 "arraymodule.c"
      case 4: // $bb3
        var $15=$array_addr; //@line 1521 "arraymodule.c"
        var $16=_array_tolist($15, 0); //@line 1521 "arraymodule.c"
        $list=$16; //@line 1521 "arraymodule.c"
        var $17=($16)==0; //@line 1522 "arraymodule.c"
        if ($17) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1522 "arraymodule.c"
      case 5: // $bb4
        var $18=$dict; //@line 1523 "arraymodule.c"
        var $19=$18; //@line 1523 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1523 "arraymodule.c"
        var $21=($20) - 1; //@line 1523 "arraymodule.c"
        var $22=$dict; //@line 1523 "arraymodule.c"
        var $23=$22; //@line 1523 "arraymodule.c"
        HEAP[$23]=$21; //@line 1523 "arraymodule.c"
        var $24=$dict; //@line 1523 "arraymodule.c"
        var $25=$24; //@line 1523 "arraymodule.c"
        var $26=HEAP[$25]; //@line 1523 "arraymodule.c"
        var $27=($26)==0; //@line 1523 "arraymodule.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1523 "arraymodule.c"
      case 6: // $bb5
        var $28=$dict; //@line 1523 "arraymodule.c"
        var $29=$28+4; //@line 1523 "arraymodule.c"
        var $30=HEAP[$29]; //@line 1523 "arraymodule.c"
        var $31=$30+24; //@line 1523 "arraymodule.c"
        var $32=HEAP[$31]; //@line 1523 "arraymodule.c"
        var $33=$dict; //@line 1523 "arraymodule.c"
        FUNCTION_TABLE[$32]($33); //@line 1523 "arraymodule.c"
        __label__ = 7; break; //@line 1523 "arraymodule.c"
      case 7: // $bb6
        $0=0; //@line 1524 "arraymodule.c"
        __label__ = 13; break; //@line 1524 "arraymodule.c"
      case 8: // $bb7
        var $34=$array_addr; //@line 1526 "arraymodule.c"
        var $35=$34+20; //@line 1526 "arraymodule.c"
        var $36=HEAP[$35]; //@line 1526 "arraymodule.c"
        var $37=$36; //@line 1526 "arraymodule.c"
        var $38=HEAP[$37]; //@line 1526 "arraymodule.c"
        var $39=$array_addr; //@line 1526 "arraymodule.c"
        var $40=$39; //@line 1526 "arraymodule.c"
        var $41=$40+4; //@line 1526 "arraymodule.c"
        var $42=HEAP[$41]; //@line 1526 "arraymodule.c"
        var $43=$list; //@line 1526 "arraymodule.c"
        var $44=$dict; //@line 1526 "arraymodule.c"
        var $45=__Py_BuildValue_SizeT(__str46, allocate([$42,0,0,0,$38,0,0,0,$43,0,0,0,$44,0,0,0], ["%struct._typeobject*",0,0,0,"i32",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1526 "arraymodule.c"
        $result=$45; //@line 1526 "arraymodule.c"
        var $46=$list; //@line 1528 "arraymodule.c"
        var $47=$46; //@line 1528 "arraymodule.c"
        var $48=HEAP[$47]; //@line 1528 "arraymodule.c"
        var $49=($48) - 1; //@line 1528 "arraymodule.c"
        var $50=$list; //@line 1528 "arraymodule.c"
        var $51=$50; //@line 1528 "arraymodule.c"
        HEAP[$51]=$49; //@line 1528 "arraymodule.c"
        var $52=$list; //@line 1528 "arraymodule.c"
        var $53=$52; //@line 1528 "arraymodule.c"
        var $54=HEAP[$53]; //@line 1528 "arraymodule.c"
        var $55=($54)==0; //@line 1528 "arraymodule.c"
        if ($55) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1528 "arraymodule.c"
      case 9: // $bb8
        var $56=$list; //@line 1528 "arraymodule.c"
        var $57=$56+4; //@line 1528 "arraymodule.c"
        var $58=HEAP[$57]; //@line 1528 "arraymodule.c"
        var $59=$58+24; //@line 1528 "arraymodule.c"
        var $60=HEAP[$59]; //@line 1528 "arraymodule.c"
        var $61=$list; //@line 1528 "arraymodule.c"
        FUNCTION_TABLE[$60]($61); //@line 1528 "arraymodule.c"
        __label__ = 10; break; //@line 1528 "arraymodule.c"
      case 10: // $bb9
        var $62=$dict; //@line 1529 "arraymodule.c"
        var $63=$62; //@line 1529 "arraymodule.c"
        var $64=HEAP[$63]; //@line 1529 "arraymodule.c"
        var $65=($64) - 1; //@line 1529 "arraymodule.c"
        var $66=$dict; //@line 1529 "arraymodule.c"
        var $67=$66; //@line 1529 "arraymodule.c"
        HEAP[$67]=$65; //@line 1529 "arraymodule.c"
        var $68=$dict; //@line 1529 "arraymodule.c"
        var $69=$68; //@line 1529 "arraymodule.c"
        var $70=HEAP[$69]; //@line 1529 "arraymodule.c"
        var $71=($70)==0; //@line 1529 "arraymodule.c"
        if ($71) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1529 "arraymodule.c"
      case 11: // $bb10
        var $72=$dict; //@line 1529 "arraymodule.c"
        var $73=$72+4; //@line 1529 "arraymodule.c"
        var $74=HEAP[$73]; //@line 1529 "arraymodule.c"
        var $75=$74+24; //@line 1529 "arraymodule.c"
        var $76=HEAP[$75]; //@line 1529 "arraymodule.c"
        var $77=$dict; //@line 1529 "arraymodule.c"
        FUNCTION_TABLE[$76]($77); //@line 1529 "arraymodule.c"
        __label__ = 12; break; //@line 1529 "arraymodule.c"
      case 12: // $bb11
        var $78=$result; //@line 1530 "arraymodule.c"
        $0=$78; //@line 1530 "arraymodule.c"
        __label__ = 13; break; //@line 1530 "arraymodule.c"
      case 13: // $bb12
        var $79=$0; //@line 1510 "arraymodule.c"
        $retval=$79; //@line 1510 "arraymodule.c"
        var $retval13=$retval; //@line 1510 "arraymodule.c"
        ;
        return $retval13; //@line 1510 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_get_typecode($a, $closure) {
    var __stackBase__  = STACKTOP; STACKTOP += 1; _memset(__stackBase__, 0, 1);
    var __label__;
  
    var $a_addr;
    var $closure_addr;
    var $retval;
    var $0;
    var $tc=__stackBase__;
    $a_addr=$a;
    $closure_addr=$closure;
    var $1=$a_addr; //@line 1538 "arraymodule.c"
    var $2=$1+20; //@line 1538 "arraymodule.c"
    var $3=HEAP[$2]; //@line 1538 "arraymodule.c"
    var $4=$3; //@line 1538 "arraymodule.c"
    var $5=HEAP[$4]; //@line 1538 "arraymodule.c"
    var $6=((($5)) & 255); //@line 1538 "arraymodule.c"
    HEAP[$tc]=$6; //@line 1538 "arraymodule.c"
    var $7=_PyString_FromStringAndSize($tc, 1); //@line 1539 "arraymodule.c"
    $0=$7; //@line 1539 "arraymodule.c"
    var $8=$0; //@line 1539 "arraymodule.c"
    $retval=$8; //@line 1539 "arraymodule.c"
    var $retval1=$retval; //@line 1539 "arraymodule.c"
    STACKTOP = __stackBase__;
    return $retval1; //@line 1539 "arraymodule.c"
  }
  

  function _array_get_itemsize($a, $closure) {
    ;
    var __label__;
  
    var $a_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $a_addr=$a;
    $closure_addr=$closure;
    var $1=$a_addr; //@line 1545 "arraymodule.c"
    var $2=$1+20; //@line 1545 "arraymodule.c"
    var $3=HEAP[$2]; //@line 1545 "arraymodule.c"
    var $4=$3+4; //@line 1545 "arraymodule.c"
    var $5=HEAP[$4]; //@line 1545 "arraymodule.c"
    var $6=_PyInt_FromLong($5); //@line 1545 "arraymodule.c"
    $0=$6; //@line 1545 "arraymodule.c"
    var $7=$0; //@line 1545 "arraymodule.c"
    $retval=$7; //@line 1545 "arraymodule.c"
    var $retval1=$retval; //@line 1545 "arraymodule.c"
    ;
    return $retval1; //@line 1545 "arraymodule.c"
  }
  

  function _array_repr($a) {
    var __stackBase__  = STACKTOP; STACKTOP += 260; _memset(__stackBase__, 0, 260);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $a_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $typecode;
        var $s=__stackBase__+256;
        var $t;
        var $v;
        var $len;
        $a_addr=$a;
        $v=0; //@line 1616 "arraymodule.c"
        var $1=$a_addr; //@line 1619 "arraymodule.c"
        var $2=$1; //@line 1619 "arraymodule.c"
        var $3=$2+8; //@line 1619 "arraymodule.c"
        var $4=HEAP[$3]; //@line 1619 "arraymodule.c"
        $len=$4; //@line 1619 "arraymodule.c"
        var $5=$a_addr; //@line 1620 "arraymodule.c"
        var $6=$5+20; //@line 1620 "arraymodule.c"
        var $7=HEAP[$6]; //@line 1620 "arraymodule.c"
        var $8=$7; //@line 1620 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1620 "arraymodule.c"
        var $10=((($9)) & 255); //@line 1620 "arraymodule.c"
        $typecode=$10; //@line 1620 "arraymodule.c"
        var $11=$len; //@line 1621 "arraymodule.c"
        var $12=($11)==0; //@line 1621 "arraymodule.c"
        var $13=$typecode; //@line 1622 "arraymodule.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1621 "arraymodule.c"
      case 1: // $bb
        var $14=($13); //@line 1622 "arraymodule.c"
        var $buf1=$buf; //@line 1622 "arraymodule.c"
        var $15=_PyOS_snprintf($buf1, 256, __str74, allocate([$14,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1622 "arraymodule.c"
        var $buf2=$buf; //@line 1623 "arraymodule.c"
        var $16=_PyString_FromString($buf2); //@line 1623 "arraymodule.c"
        $0=$16; //@line 1623 "arraymodule.c"
        __label__ = 11; break; //@line 1623 "arraymodule.c"
      case 2: // $bb3
        var $17=($13)==99; //@line 1626 "arraymodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1626 "arraymodule.c"
      case 3: // $bb4
        var $18=$a_addr; //@line 1627 "arraymodule.c"
        var $19=_array_tostring($18, 0); //@line 1627 "arraymodule.c"
        $v=$19; //@line 1627 "arraymodule.c"
        __label__ = 7; break; //@line 1627 "arraymodule.c"
      case 4: // $bb5
        var $20=$typecode; //@line 1629 "arraymodule.c"
        var $21=($20)==117; //@line 1629 "arraymodule.c"
        var $22=$a_addr; //@line 1630 "arraymodule.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1629 "arraymodule.c"
      case 5: // $bb6
        var $23=_array_tounicode($22, 0); //@line 1630 "arraymodule.c"
        $v=$23; //@line 1630 "arraymodule.c"
        __label__ = 7; break; //@line 1630 "arraymodule.c"
      case 6: // $bb7
        var $24=_array_tolist($22, 0); //@line 1633 "arraymodule.c"
        $v=$24; //@line 1633 "arraymodule.c"
        __label__ = 7; break; //@line 1633 "arraymodule.c"
      case 7: // $bb8
        var $25=$v; //@line 1634 "arraymodule.c"
        var $26=_PyObject_Repr($25); //@line 1634 "arraymodule.c"
        $t=$26; //@line 1634 "arraymodule.c"
        var $27=$v; //@line 1635 "arraymodule.c"
        var $28=($27)!=0; //@line 1635 "arraymodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1635 "arraymodule.c"
      case 8: // $bb9
        var $29=$v; //@line 1635 "arraymodule.c"
        var $30=$29; //@line 1635 "arraymodule.c"
        var $31=HEAP[$30]; //@line 1635 "arraymodule.c"
        var $32=($31) - 1; //@line 1635 "arraymodule.c"
        var $33=$v; //@line 1635 "arraymodule.c"
        var $34=$33; //@line 1635 "arraymodule.c"
        HEAP[$34]=$32; //@line 1635 "arraymodule.c"
        var $35=$v; //@line 1635 "arraymodule.c"
        var $36=$35; //@line 1635 "arraymodule.c"
        var $37=HEAP[$36]; //@line 1635 "arraymodule.c"
        var $38=($37)==0; //@line 1635 "arraymodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1635 "arraymodule.c"
      case 9: // $bb10
        var $39=$v; //@line 1635 "arraymodule.c"
        var $40=$39+4; //@line 1635 "arraymodule.c"
        var $41=HEAP[$40]; //@line 1635 "arraymodule.c"
        var $42=$41+24; //@line 1635 "arraymodule.c"
        var $43=HEAP[$42]; //@line 1635 "arraymodule.c"
        var $44=$v; //@line 1635 "arraymodule.c"
        FUNCTION_TABLE[$43]($44); //@line 1635 "arraymodule.c"
        __label__ = 10; break; //@line 1635 "arraymodule.c"
      case 10: // $bb11
        var $45=$typecode; //@line 1637 "arraymodule.c"
        var $46=($45); //@line 1637 "arraymodule.c"
        var $buf12=$buf; //@line 1637 "arraymodule.c"
        var $47=_PyOS_snprintf($buf12, 256, __str75, allocate([$46,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 1637 "arraymodule.c"
        var $buf13=$buf; //@line 1638 "arraymodule.c"
        var $48=_PyString_FromString($buf13); //@line 1638 "arraymodule.c"
        HEAP[$s]=$48; //@line 1638 "arraymodule.c"
        var $49=$t; //@line 1639 "arraymodule.c"
        _PyString_ConcatAndDel($s, $49); //@line 1639 "arraymodule.c"
        var $50=_PyString_FromString(__str76); //@line 1640 "arraymodule.c"
        _PyString_ConcatAndDel($s, $50); //@line 1640 "arraymodule.c"
        var $51=HEAP[$s]; //@line 1641 "arraymodule.c"
        $0=$51; //@line 1641 "arraymodule.c"
        __label__ = 11; break; //@line 1641 "arraymodule.c"
      case 11: // $bb14
        var $52=$0; //@line 1623 "arraymodule.c"
        $retval=$52; //@line 1623 "arraymodule.c"
        var $retval15=$retval; //@line 1623 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 1623 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_subscr($self, $item) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $item_addr;
        var $retval;
        var $0;
        var $i;
        var $start=__stackBase__;
        var $stop=__stackBase__+4;
        var $step=__stackBase__+8;
        var $slicelength=__stackBase__+12;
        var $cur;
        var $i10;
        var $result;
        var $ar;
        var $itemsize;
        var $result16;
        $self_addr=$self;
        $item_addr=$item;
        var $1=$item_addr; //@line 1647 "arraymodule.c"
        var $2=$1+4; //@line 1647 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1647 "arraymodule.c"
        var $4=$3+48; //@line 1647 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1647 "arraymodule.c"
        var $6=($5)==0; //@line 1647 "arraymodule.c"
        if ($6) { __label__ = 10; break; } else { __label__ = 1; break; } //@line 1647 "arraymodule.c"
      case 1: // $bb
        var $7=$item_addr; //@line 1647 "arraymodule.c"
        var $8=$7+4; //@line 1647 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1647 "arraymodule.c"
        var $10=$9+84; //@line 1647 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1647 "arraymodule.c"
        var $12=($11) & 131072; //@line 1647 "arraymodule.c"
        var $13=($12)==0; //@line 1647 "arraymodule.c"
        if ($13) { __label__ = 10; break; } else { __label__ = 2; break; } //@line 1647 "arraymodule.c"
      case 2: // $bb1
        var $14=$item_addr; //@line 1647 "arraymodule.c"
        var $15=$14+4; //@line 1647 "arraymodule.c"
        var $16=HEAP[$15]; //@line 1647 "arraymodule.c"
        var $17=$16+48; //@line 1647 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1647 "arraymodule.c"
        var $19=$18+152; //@line 1647 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1647 "arraymodule.c"
        var $21=($20)==0; //@line 1647 "arraymodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 1647 "arraymodule.c"
      case 3: // $bb2
        var $22=HEAP[_PyExc_IndexError]; //@line 1648 "arraymodule.c"
        var $23=$item_addr; //@line 1648 "arraymodule.c"
        var $24=_PyNumber_AsSsize_t($23, $22); //@line 1648 "arraymodule.c"
        $i=$24; //@line 1648 "arraymodule.c"
        var $25=$i; //@line 1649 "arraymodule.c"
        var $26=($25)==-1; //@line 1649 "arraymodule.c"
        if ($26) { __lastLabel__ = 3; __label__ = 4; break; } else { __lastLabel__ = 3; __label__ = 7; break; } //@line 1649 "arraymodule.c"
      case 4: // $bb3
        var $27=_PyErr_Occurred(); //@line 1649 "arraymodule.c"
        var $28=($27)!=0; //@line 1649 "arraymodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1649 "arraymodule.c"
      case 5: // $bb4
        $0=0; //@line 1650 "arraymodule.c"
        __label__ = 25; break; //@line 1650 "arraymodule.c"
      case 6: // $bb5thread_pre_split
        var $_pr=$i;
        __lastLabel__ = 6; __label__ = 7; break;
      case 7: // $bb5
        var $29=__lastLabel__ == 6 ? $_pr : ($25);
        var $30=($29) < 0; //@line 1652 "arraymodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1652 "arraymodule.c"
      case 8: // $bb6
        var $31=$self_addr; //@line 1653 "arraymodule.c"
        var $32=$31; //@line 1653 "arraymodule.c"
        var $33=$32+8; //@line 1653 "arraymodule.c"
        var $34=HEAP[$33]; //@line 1653 "arraymodule.c"
        var $35=$i; //@line 1653 "arraymodule.c"
        var $36=($35) + ($34); //@line 1653 "arraymodule.c"
        $i=$36; //@line 1653 "arraymodule.c"
        __label__ = 9; break; //@line 1653 "arraymodule.c"
      case 9: // $bb7
        var $37=$self_addr; //@line 1654 "arraymodule.c"
        var $38=$i; //@line 1654 "arraymodule.c"
        var $39=_array_item($37, $38); //@line 1654 "arraymodule.c"
        $0=$39; //@line 1654 "arraymodule.c"
        __label__ = 25; break; //@line 1654 "arraymodule.c"
      case 10: // $bb8
        var $40=$item_addr; //@line 1656 "arraymodule.c"
        var $41=$40+4; //@line 1656 "arraymodule.c"
        var $42=HEAP[$41]; //@line 1656 "arraymodule.c"
        var $43=($42)==(_PySlice_Type); //@line 1656 "arraymodule.c"
        if ($43) { __label__ = 11; break; } else { __label__ = 24; break; } //@line 1656 "arraymodule.c"
      case 11: // $bb9
        var $44=$self_addr; //@line 1660 "arraymodule.c"
        var $45=$44+20; //@line 1660 "arraymodule.c"
        var $46=HEAP[$45]; //@line 1660 "arraymodule.c"
        var $47=$46+4; //@line 1660 "arraymodule.c"
        var $48=HEAP[$47]; //@line 1660 "arraymodule.c"
        $itemsize=$48; //@line 1660 "arraymodule.c"
        var $49=$self_addr; //@line 1662 "arraymodule.c"
        var $50=$49; //@line 1662 "arraymodule.c"
        var $51=$50+8; //@line 1662 "arraymodule.c"
        var $52=HEAP[$51]; //@line 1662 "arraymodule.c"
        var $53=$item_addr; //@line 1662 "arraymodule.c"
        var $54=$53; //@line 1662 "arraymodule.c"
        var $55=_PySlice_GetIndicesEx($54, $52, $start, $stop, $step, $slicelength); //@line 1662 "arraymodule.c"
        var $56=($55) < 0; //@line 1662 "arraymodule.c"
        if ($56) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1662 "arraymodule.c"
      case 12: // $bb11
        $0=0; //@line 1664 "arraymodule.c"
        __label__ = 25; break; //@line 1664 "arraymodule.c"
      case 13: // $bb12
        var $57=HEAP[$slicelength]; //@line 1667 "arraymodule.c"
        var $58=($57) <= 0; //@line 1667 "arraymodule.c"
        if ($58) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1667 "arraymodule.c"
      case 14: // $bb13
        var $59=$self_addr; //@line 1668 "arraymodule.c"
        var $60=$59+20; //@line 1668 "arraymodule.c"
        var $61=HEAP[$60]; //@line 1668 "arraymodule.c"
        var $62=_newarrayobject(_Arraytype, 0, $61); //@line 1668 "arraymodule.c"
        $0=$62; //@line 1668 "arraymodule.c"
        __label__ = 25; break; //@line 1668 "arraymodule.c"
      case 15: // $bb14
        var $63=HEAP[$step]; //@line 1670 "arraymodule.c"
        var $64=($63)==1; //@line 1670 "arraymodule.c"
        var $65=$self_addr; //@line 1672 "arraymodule.c"
        var $66=$65+20; //@line 1672 "arraymodule.c"
        var $67=HEAP[$66]; //@line 1672 "arraymodule.c"
        var $68=HEAP[$slicelength]; //@line 1672 "arraymodule.c"
        var $69=_newarrayobject(_Arraytype, $68, $67); //@line 1672 "arraymodule.c"
        if ($64) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 1670 "arraymodule.c"
      case 16: // $bb15
        $result16=$69; //@line 1672 "arraymodule.c"
        var $70=$result16; //@line 1673 "arraymodule.c"
        var $71=($70)==0; //@line 1673 "arraymodule.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1673 "arraymodule.c"
      case 17: // $bb17
        $0=0; //@line 1674 "arraymodule.c"
        __label__ = 25; break; //@line 1674 "arraymodule.c"
      case 18: // $bb18
        var $72=HEAP[$slicelength]; //@line 1675 "arraymodule.c"
        var $73=$itemsize; //@line 1675 "arraymodule.c"
        var $74=($73) * ($72); //@line 1675 "arraymodule.c"
        var $75=$self_addr; //@line 1675 "arraymodule.c"
        var $76=$75+12; //@line 1675 "arraymodule.c"
        var $77=HEAP[$76]; //@line 1675 "arraymodule.c"
        var $78=HEAP[$start]; //@line 1675 "arraymodule.c"
        var $79=$itemsize; //@line 1675 "arraymodule.c"
        var $80=($79) * ($78); //@line 1675 "arraymodule.c"
        var $81=$77+$80; //@line 1675 "arraymodule.c"
        var $82=$result16; //@line 1675 "arraymodule.c"
        var $83=$82; //@line 1675 "arraymodule.c"
        var $84=$83+12; //@line 1675 "arraymodule.c"
        var $85=HEAP[$84]; //@line 1675 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($85, $81, $74, 1, 0); //@line 1675 "arraymodule.c"
        var $86=$result16; //@line 1678 "arraymodule.c"
        $0=$86; //@line 1678 "arraymodule.c"
        __label__ = 25; break; //@line 1678 "arraymodule.c"
      case 19: // $bb19
        $result=$69; //@line 1681 "arraymodule.c"
        var $87=$result; //@line 1682 "arraymodule.c"
        var $88=($87)==0; //@line 1682 "arraymodule.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1682 "arraymodule.c"
      case 20: // $bb20
        $0=0; //@line 1682 "arraymodule.c"
        __label__ = 25; break; //@line 1682 "arraymodule.c"
      case 21: // $bb21
        var $89=$result; //@line 1684 "arraymodule.c"
        var $90=$89; //@line 1684 "arraymodule.c"
        $ar=$90; //@line 1684 "arraymodule.c"
        var $91=HEAP[$start]; //@line 1686 "arraymodule.c"
        $cur=$91; //@line 1686 "arraymodule.c"
        $i10=0; //@line 1686 "arraymodule.c"
        var $92=HEAP[$slicelength]; //@line 1686 "arraymodule.c"
        var $93=$i10; //@line 1686 "arraymodule.c"
        var $94=($93) < ($92); //@line 1686 "arraymodule.c"
        if ($94) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1686 "arraymodule.c"
      case 22: // $bb22
        var $95=$itemsize; //@line 1688 "arraymodule.c"
        var $96=$self_addr; //@line 1688 "arraymodule.c"
        var $97=$96+12; //@line 1688 "arraymodule.c"
        var $98=HEAP[$97]; //@line 1688 "arraymodule.c"
        var $99=$cur; //@line 1688 "arraymodule.c"
        var $100=$itemsize; //@line 1688 "arraymodule.c"
        var $101=($100) * ($99); //@line 1688 "arraymodule.c"
        var $102=$98+$101; //@line 1688 "arraymodule.c"
        var $103=$ar; //@line 1688 "arraymodule.c"
        var $104=$103+12; //@line 1688 "arraymodule.c"
        var $105=HEAP[$104]; //@line 1688 "arraymodule.c"
        var $106=$i10; //@line 1688 "arraymodule.c"
        var $107=$itemsize; //@line 1688 "arraymodule.c"
        var $108=($107) * ($106); //@line 1688 "arraymodule.c"
        var $109=$105+$108; //@line 1688 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($109, $102, $95, 1, 0); //@line 1688 "arraymodule.c"
        var $110=HEAP[$step]; //@line 1687 "arraymodule.c"
        var $111=$cur; //@line 1687 "arraymodule.c"
        var $112=($111) + ($110); //@line 1687 "arraymodule.c"
        $cur=$112; //@line 1687 "arraymodule.c"
        var $113=$i10; //@line 1687 "arraymodule.c"
        var $114=($113) + 1; //@line 1687 "arraymodule.c"
        $i10=$114; //@line 1687 "arraymodule.c"
        var $115=HEAP[$slicelength]; //@line 1686 "arraymodule.c"
        var $116=$i10; //@line 1686 "arraymodule.c"
        var $117=($116) < ($115); //@line 1686 "arraymodule.c"
        if ($117) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1686 "arraymodule.c"
      case 23: // $bb24
        var $118=$result; //@line 1693 "arraymodule.c"
        $0=$118; //@line 1693 "arraymodule.c"
        __label__ = 25; break; //@line 1693 "arraymodule.c"
      case 24: // $bb25
        var $119=HEAP[_PyExc_TypeError]; //@line 1697 "arraymodule.c"
        _PyErr_SetString($119, __str77); //@line 1697 "arraymodule.c"
        $0=0; //@line 1699 "arraymodule.c"
        __label__ = 25; break; //@line 1699 "arraymodule.c"
      case 25: // $bb26
        var $120=$0; //@line 1650 "arraymodule.c"
        $retval=$120; //@line 1650 "arraymodule.c"
        var $retval27=$retval; //@line 1650 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 1650 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_ass_subscr($self, $item, $value) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $item_addr;
        var $value_addr;
        var $retval;
        var $0;
        var $start=__stackBase__;
        var $stop=__stackBase__+4;
        var $step=__stackBase__+8;
        var $slicelength=__stackBase__+12;
        var $needed;
        var $other;
        var $itemsize;
        var $i;
        var $ret;
        var $cur;
        var $i51;
        var $lim;
        var $cur64;
        var $i65;
        $self_addr=$self;
        $item_addr=$item;
        $value_addr=$value;
        var $1=$item_addr; //@line 1710 "arraymodule.c"
        var $2=$1+4; //@line 1710 "arraymodule.c"
        var $3=HEAP[$2]; //@line 1710 "arraymodule.c"
        var $4=$3+48; //@line 1710 "arraymodule.c"
        var $5=HEAP[$4]; //@line 1710 "arraymodule.c"
        var $6=($5)==0; //@line 1710 "arraymodule.c"
        if ($6) { __label__ = 16; break; } else { __label__ = 1; break; } //@line 1710 "arraymodule.c"
      case 1: // $bb
        var $7=$item_addr; //@line 1710 "arraymodule.c"
        var $8=$7+4; //@line 1710 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1710 "arraymodule.c"
        var $10=$9+84; //@line 1710 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1710 "arraymodule.c"
        var $12=($11) & 131072; //@line 1710 "arraymodule.c"
        var $13=($12)==0; //@line 1710 "arraymodule.c"
        if ($13) { __label__ = 16; break; } else { __label__ = 2; break; } //@line 1710 "arraymodule.c"
      case 2: // $bb1
        var $14=$item_addr; //@line 1710 "arraymodule.c"
        var $15=$14+4; //@line 1710 "arraymodule.c"
        var $16=HEAP[$15]; //@line 1710 "arraymodule.c"
        var $17=$16+48; //@line 1710 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1710 "arraymodule.c"
        var $19=$18+152; //@line 1710 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1710 "arraymodule.c"
        var $21=($20)==0; //@line 1710 "arraymodule.c"
        if ($21) { __label__ = 16; break; } else { __label__ = 3; break; } //@line 1710 "arraymodule.c"
      case 3: // $bb2
        var $22=HEAP[_PyExc_IndexError]; //@line 1711 "arraymodule.c"
        var $23=$item_addr; //@line 1711 "arraymodule.c"
        var $24=_PyNumber_AsSsize_t($23, $22); //@line 1711 "arraymodule.c"
        $i=$24; //@line 1711 "arraymodule.c"
        var $25=$i; //@line 1713 "arraymodule.c"
        var $26=($25)==-1; //@line 1713 "arraymodule.c"
        if ($26) { __lastLabel__ = 3; __label__ = 4; break; } else { __lastLabel__ = 3; __label__ = 7; break; } //@line 1713 "arraymodule.c"
      case 4: // $bb3
        var $27=_PyErr_Occurred(); //@line 1713 "arraymodule.c"
        var $28=($27)!=0; //@line 1713 "arraymodule.c"
        if ($28) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1713 "arraymodule.c"
      case 5: // $bb4
        $0=-1; //@line 1714 "arraymodule.c"
        __label__ = 68; break; //@line 1714 "arraymodule.c"
      case 6: // $bb5thread_pre_split
        var $_pr=$i;
        __lastLabel__ = 6; __label__ = 7; break;
      case 7: // $bb5
        var $29=__lastLabel__ == 6 ? $_pr : ($25);
        var $30=($29) < 0; //@line 1715 "arraymodule.c"
        if ($30) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1715 "arraymodule.c"
      case 8: // $bb6
        var $31=$self_addr; //@line 1716 "arraymodule.c"
        var $32=$31; //@line 1716 "arraymodule.c"
        var $33=$32+8; //@line 1716 "arraymodule.c"
        var $34=HEAP[$33]; //@line 1716 "arraymodule.c"
        var $35=$i; //@line 1716 "arraymodule.c"
        var $36=($35) + ($34); //@line 1716 "arraymodule.c"
        $i=$36; //@line 1716 "arraymodule.c"
        __lastLabel__ = 8; __label__ = 10; break; //@line 1716 "arraymodule.c"
      case 9: // $bb7thread_pre_split
        var $_pr1=$i;
        __lastLabel__ = 9; __label__ = 10; break;
      case 10: // $bb7
        var $37=__lastLabel__ == 9 ? $_pr1 : ($36);
        var $38=($37) < 0; //@line 1717 "arraymodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1717 "arraymodule.c"
      case 11: // $bb8
        var $39=$self_addr; //@line 1717 "arraymodule.c"
        var $40=$39; //@line 1717 "arraymodule.c"
        var $41=$40+8; //@line 1717 "arraymodule.c"
        var $42=HEAP[$41]; //@line 1717 "arraymodule.c"
        var $43=$i; //@line 1717 "arraymodule.c"
        var $44=($42) <= ($43); //@line 1717 "arraymodule.c"
        if ($44) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1717 "arraymodule.c"
      case 12: // $bb9
        var $45=HEAP[_PyExc_IndexError]; //@line 1718 "arraymodule.c"
        _PyErr_SetString($45, __str21); //@line 1718 "arraymodule.c"
        $0=-1; //@line 1720 "arraymodule.c"
        __label__ = 68; break; //@line 1720 "arraymodule.c"
      case 13: // $bb10
        var $46=$value_addr; //@line 1722 "arraymodule.c"
        var $47=($46)==0; //@line 1722 "arraymodule.c"
        if ($47) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1722 "arraymodule.c"
      case 14: // $bb11
        var $48=$i; //@line 1724 "arraymodule.c"
        HEAP[$start]=$48; //@line 1724 "arraymodule.c"
        var $49=$i; //@line 1725 "arraymodule.c"
        var $50=($49) + 1; //@line 1725 "arraymodule.c"
        HEAP[$stop]=$50; //@line 1725 "arraymodule.c"
        HEAP[$step]=1; //@line 1726 "arraymodule.c"
        HEAP[$slicelength]=1; //@line 1727 "arraymodule.c"
        __label__ = 20; break; //@line 1727 "arraymodule.c"
      case 15: // $bb12
        var $51=$self_addr; //@line 1730 "arraymodule.c"
        var $52=$51+20; //@line 1730 "arraymodule.c"
        var $53=HEAP[$52]; //@line 1730 "arraymodule.c"
        var $54=$53+12; //@line 1730 "arraymodule.c"
        var $55=HEAP[$54]; //@line 1730 "arraymodule.c"
        var $56=$self_addr; //@line 1730 "arraymodule.c"
        var $57=$i; //@line 1730 "arraymodule.c"
        var $58=$value_addr; //@line 1730 "arraymodule.c"
        var $59=FUNCTION_TABLE[$55]($56, $57, $58); //@line 1730 "arraymodule.c"
        $0=$59; //@line 1730 "arraymodule.c"
        __label__ = 68; break; //@line 1730 "arraymodule.c"
      case 16: // $bb13
        var $60=$item_addr; //@line 1732 "arraymodule.c"
        var $61=$60+4; //@line 1732 "arraymodule.c"
        var $62=HEAP[$61]; //@line 1732 "arraymodule.c"
        var $63=($62)==(_PySlice_Type); //@line 1732 "arraymodule.c"
        if ($63) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 1732 "arraymodule.c"
      case 17: // $bb14
        var $64=$self_addr; //@line 1733 "arraymodule.c"
        var $65=$64; //@line 1733 "arraymodule.c"
        var $66=$65+8; //@line 1733 "arraymodule.c"
        var $67=HEAP[$66]; //@line 1733 "arraymodule.c"
        var $68=$item_addr; //@line 1733 "arraymodule.c"
        var $69=$68; //@line 1733 "arraymodule.c"
        var $70=_PySlice_GetIndicesEx($69, $67, $start, $stop, $step, $slicelength); //@line 1733 "arraymodule.c"
        var $71=($70) < 0; //@line 1733 "arraymodule.c"
        if ($71) { __label__ = 18; break; } else { __label__ = 20; break; } //@line 1733 "arraymodule.c"
      case 18: // $bb15
        $0=-1; //@line 1736 "arraymodule.c"
        __label__ = 68; break; //@line 1736 "arraymodule.c"
      case 19: // $bb17
        var $72=HEAP[_PyExc_TypeError]; //@line 1740 "arraymodule.c"
        _PyErr_SetString($72, __str78); //@line 1740 "arraymodule.c"
        $0=-1; //@line 1742 "arraymodule.c"
        __label__ = 68; break; //@line 1742 "arraymodule.c"
      case 20: // $bb18
        var $73=$value_addr; //@line 1744 "arraymodule.c"
        var $74=($73)==0; //@line 1744 "arraymodule.c"
        if ($74) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1744 "arraymodule.c"
      case 21: // $bb19
        $other=0; //@line 1745 "arraymodule.c"
        $needed=0; //@line 1746 "arraymodule.c"
        __label__ = 33; break; //@line 1746 "arraymodule.c"
      case 22: // $bb20
        var $75=$value_addr; //@line 1748 "arraymodule.c"
        var $76=$75+4; //@line 1748 "arraymodule.c"
        var $77=HEAP[$76]; //@line 1748 "arraymodule.c"
        var $78=($77)==(_Arraytype); //@line 1748 "arraymodule.c"
        if ($78) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 1748 "arraymodule.c"
      case 23: // $bb21
        var $79=$value_addr; //@line 1748 "arraymodule.c"
        var $80=$79+4; //@line 1748 "arraymodule.c"
        var $81=HEAP[$80]; //@line 1748 "arraymodule.c"
        var $82=_PyType_IsSubtype($81, _Arraytype); //@line 1748 "arraymodule.c"
        var $83=($82)!=0; //@line 1748 "arraymodule.c"
        if ($83) { __label__ = 24; break; } else { __label__ = 32; break; } //@line 1748 "arraymodule.c"
      case 24: // $bb22
        var $84=$value_addr; //@line 1749 "arraymodule.c"
        var $85=$84; //@line 1749 "arraymodule.c"
        $other=$85; //@line 1749 "arraymodule.c"
        var $86=$other; //@line 1750 "arraymodule.c"
        var $87=$86; //@line 1750 "arraymodule.c"
        var $88=$87+8; //@line 1750 "arraymodule.c"
        var $89=HEAP[$88]; //@line 1750 "arraymodule.c"
        $needed=$89; //@line 1750 "arraymodule.c"
        var $90=$self_addr; //@line 1751 "arraymodule.c"
        var $91=$other; //@line 1751 "arraymodule.c"
        var $92=($90)==($91); //@line 1751 "arraymodule.c"
        var $93=$other; //@line 1754 "arraymodule.c"
        if ($92) { __label__ = 25; break; } else { __label__ = 30; break; } //@line 1751 "arraymodule.c"
      case 25: // $bb23
        var $94=$needed; //@line 1754 "arraymodule.c"
        var $95=_array_slice($93, 0, $94); //@line 1754 "arraymodule.c"
        $value_addr=$95; //@line 1754 "arraymodule.c"
        var $96=$value_addr; //@line 1755 "arraymodule.c"
        var $97=($96)==0; //@line 1755 "arraymodule.c"
        if ($97) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1755 "arraymodule.c"
      case 26: // $bb24
        $0=-1; //@line 1756 "arraymodule.c"
        __label__ = 68; break; //@line 1756 "arraymodule.c"
      case 27: // $bb25
        var $98=$self_addr; //@line 1757 "arraymodule.c"
        var $99=$item_addr; //@line 1757 "arraymodule.c"
        var $100=$value_addr; //@line 1757 "arraymodule.c"
        var $101=_array_ass_subscr($98, $99, $100); //@line 1757 "arraymodule.c"
        $ret=$101; //@line 1757 "arraymodule.c"
        var $102=$value_addr; //@line 1758 "arraymodule.c"
        var $103=$102; //@line 1758 "arraymodule.c"
        var $104=HEAP[$103]; //@line 1758 "arraymodule.c"
        var $105=($104) - 1; //@line 1758 "arraymodule.c"
        var $106=$value_addr; //@line 1758 "arraymodule.c"
        var $107=$106; //@line 1758 "arraymodule.c"
        HEAP[$107]=$105; //@line 1758 "arraymodule.c"
        var $108=$value_addr; //@line 1758 "arraymodule.c"
        var $109=$108; //@line 1758 "arraymodule.c"
        var $110=HEAP[$109]; //@line 1758 "arraymodule.c"
        var $111=($110)==0; //@line 1758 "arraymodule.c"
        if ($111) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1758 "arraymodule.c"
      case 28: // $bb26
        var $112=$value_addr; //@line 1758 "arraymodule.c"
        var $113=$112+4; //@line 1758 "arraymodule.c"
        var $114=HEAP[$113]; //@line 1758 "arraymodule.c"
        var $115=$114+24; //@line 1758 "arraymodule.c"
        var $116=HEAP[$115]; //@line 1758 "arraymodule.c"
        var $117=$value_addr; //@line 1758 "arraymodule.c"
        FUNCTION_TABLE[$116]($117); //@line 1758 "arraymodule.c"
        __label__ = 29; break; //@line 1758 "arraymodule.c"
      case 29: // $bb27
        var $118=$ret; //@line 1759 "arraymodule.c"
        $0=$118; //@line 1759 "arraymodule.c"
        __label__ = 68; break; //@line 1759 "arraymodule.c"
      case 30: // $bb28
        var $119=$93+20; //@line 1761 "arraymodule.c"
        var $120=HEAP[$119]; //@line 1761 "arraymodule.c"
        var $121=$self_addr; //@line 1761 "arraymodule.c"
        var $122=$121+20; //@line 1761 "arraymodule.c"
        var $123=HEAP[$122]; //@line 1761 "arraymodule.c"
        var $124=($120)!=($123); //@line 1761 "arraymodule.c"
        if ($124) { __label__ = 31; break; } else { __label__ = 33; break; } //@line 1761 "arraymodule.c"
      case 31: // $bb29
        var $125=_PyErr_BadArgument(); //@line 1762 "arraymodule.c"
        $0=-1; //@line 1763 "arraymodule.c"
        __label__ = 68; break; //@line 1763 "arraymodule.c"
      case 32: // $bb31
        var $126=$value_addr; //@line 1767 "arraymodule.c"
        var $127=$126+4; //@line 1767 "arraymodule.c"
        var $128=HEAP[$127]; //@line 1767 "arraymodule.c"
        var $129=$128+12; //@line 1767 "arraymodule.c"
        var $130=HEAP[$129]; //@line 1767 "arraymodule.c"
        var $131=HEAP[_PyExc_TypeError]; //@line 1767 "arraymodule.c"
        var $132=_PyErr_Format($131, __str20, allocate([$130,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 1767 "arraymodule.c"
        $0=-1; //@line 1770 "arraymodule.c"
        __label__ = 68; break; //@line 1770 "arraymodule.c"
      case 33: // $bb32
        var $133=$self_addr; //@line 1772 "arraymodule.c"
        var $134=$133+20; //@line 1772 "arraymodule.c"
        var $135=HEAP[$134]; //@line 1772 "arraymodule.c"
        var $136=$135+4; //@line 1772 "arraymodule.c"
        var $137=HEAP[$136]; //@line 1772 "arraymodule.c"
        $itemsize=$137; //@line 1772 "arraymodule.c"
        var $138=HEAP[$step]; //@line 1774 "arraymodule.c"
        var $139=($138) <= 0; //@line 1774 "arraymodule.c"
        if ($139) { __lastLabel__ = 33; __label__ = 36; break; } else { __lastLabel__ = 33; __label__ = 34; break; } //@line 1774 "arraymodule.c"
      case 34: // $bb33
        var $140=HEAP[$stop]; //@line 1774 "arraymodule.c"
        var $141=HEAP[$start]; //@line 1774 "arraymodule.c"
        var $142=($140) < ($141); //@line 1774 "arraymodule.c"
        if ($142) { __label__ = 38; break; } else { __label__ = 35; break; } //@line 1774 "arraymodule.c"
      case 35: // $bb34thread_pre_split
        var $_pr2=HEAP[$step];
        __lastLabel__ = 35; __label__ = 36; break;
      case 36: // $bb34
        var $143=__lastLabel__ == 35 ? $_pr2 : ($138);
        var $144=($143) >= 0; //@line 1774 "arraymodule.c"
        if ($144) { __label__ = 39; break; } else { __label__ = 37; break; } //@line 1774 "arraymodule.c"
      case 37: // $bb35
        var $145=HEAP[$stop]; //@line 1774 "arraymodule.c"
        var $146=HEAP[$start]; //@line 1774 "arraymodule.c"
        var $147=($145) > ($146); //@line 1774 "arraymodule.c"
        if ($147) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1774 "arraymodule.c"
      case 38: // $bb36
        var $148=HEAP[$start]; //@line 1776 "arraymodule.c"
        HEAP[$stop]=$148; //@line 1776 "arraymodule.c"
        __label__ = 39; break; //@line 1776 "arraymodule.c"
      case 39: // $bb37
        var $149=HEAP[$step]; //@line 1777 "arraymodule.c"
        var $150=($149)==1; //@line 1777 "arraymodule.c"
        if ($150) { __label__ = 40; break; } else { __label__ = 51; break; } //@line 1777 "arraymodule.c"
      case 40: // $bb38
        var $151=HEAP[$slicelength]; //@line 1778 "arraymodule.c"
        var $152=$needed; //@line 1778 "arraymodule.c"
        var $153=($151) > ($152); //@line 1778 "arraymodule.c"
        if ($153) { __label__ = 41; break; } else { __label__ = 43; break; } //@line 1778 "arraymodule.c"
      case 41: // $bb39
        var $154=$self_addr; //@line 1779 "arraymodule.c"
        var $155=$154; //@line 1779 "arraymodule.c"
        var $156=$155+8; //@line 1779 "arraymodule.c"
        var $157=HEAP[$156]; //@line 1779 "arraymodule.c"
        var $158=HEAP[$stop]; //@line 1779 "arraymodule.c"
        var $159=($157) - ($158); //@line 1779 "arraymodule.c"
        var $160=$itemsize; //@line 1779 "arraymodule.c"
        var $161=($159) * ($160); //@line 1779 "arraymodule.c"
        var $162=$self_addr; //@line 1779 "arraymodule.c"
        var $163=$162+12; //@line 1779 "arraymodule.c"
        var $164=HEAP[$163]; //@line 1779 "arraymodule.c"
        var $165=HEAP[$stop]; //@line 1779 "arraymodule.c"
        var $166=$itemsize; //@line 1779 "arraymodule.c"
        var $167=($166) * ($165); //@line 1779 "arraymodule.c"
        var $168=$164+$167; //@line 1779 "arraymodule.c"
        var $169=$self_addr; //@line 1779 "arraymodule.c"
        var $170=$169+12; //@line 1779 "arraymodule.c"
        var $171=HEAP[$170]; //@line 1779 "arraymodule.c"
        var $172=HEAP[$start]; //@line 1779 "arraymodule.c"
        var $173=$needed; //@line 1779 "arraymodule.c"
        var $174=($173) + ($172); //@line 1779 "arraymodule.c"
        var $175=$itemsize; //@line 1779 "arraymodule.c"
        var $176=($174) * ($175); //@line 1779 "arraymodule.c"
        var $177=$171+$176; //@line 1779 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($177, $168, $161, 1, 0); //@line 1779 "arraymodule.c"
        var $178=$self_addr; //@line 1782 "arraymodule.c"
        var $179=$178; //@line 1782 "arraymodule.c"
        var $180=$179+8; //@line 1782 "arraymodule.c"
        var $181=HEAP[$180]; //@line 1782 "arraymodule.c"
        var $182=$needed; //@line 1782 "arraymodule.c"
        var $183=HEAP[$slicelength]; //@line 1782 "arraymodule.c"
        var $_neg=0 - ($183);
        var $184=($182) + ($181); //@line 1782 "arraymodule.c"
        var $185=($184) + ($_neg);
        var $186=$self_addr; //@line 1782 "arraymodule.c"
        var $187=_array_resize($186, $185); //@line 1782 "arraymodule.c"
        var $188=($187) < 0; //@line 1782 "arraymodule.c"
        if ($188) { __label__ = 42; break; } else { __label__ = 47; break; } //@line 1782 "arraymodule.c"
      case 42: // $bb40
        $0=-1; //@line 1784 "arraymodule.c"
        __label__ = 68; break; //@line 1784 "arraymodule.c"
      case 43: // $bb42
        var $189=HEAP[$slicelength]; //@line 1786 "arraymodule.c"
        var $190=$needed; //@line 1786 "arraymodule.c"
        var $191=($189) < ($190); //@line 1786 "arraymodule.c"
        if ($191) { __lastLabel__ = 43; __label__ = 44; break; } else { __lastLabel__ = 43; __label__ = 48; break; } //@line 1786 "arraymodule.c"
      case 44: // $bb43
        var $192=$self_addr; //@line 1787 "arraymodule.c"
        var $193=$192; //@line 1787 "arraymodule.c"
        var $194=$193+8; //@line 1787 "arraymodule.c"
        var $195=HEAP[$194]; //@line 1787 "arraymodule.c"
        var $196=$needed; //@line 1787 "arraymodule.c"
        var $197=HEAP[$slicelength]; //@line 1787 "arraymodule.c"
        var $_neg4=0 - ($197);
        var $198=($196) + ($195); //@line 1787 "arraymodule.c"
        var $199=($198) + ($_neg4);
        var $200=$self_addr; //@line 1787 "arraymodule.c"
        var $201=_array_resize($200, $199); //@line 1787 "arraymodule.c"
        var $202=($201) < 0; //@line 1787 "arraymodule.c"
        if ($202) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1787 "arraymodule.c"
      case 45: // $bb44
        $0=-1; //@line 1789 "arraymodule.c"
        __label__ = 68; break; //@line 1789 "arraymodule.c"
      case 46: // $bb45
        var $203=$self_addr; //@line 1790 "arraymodule.c"
        var $204=$203; //@line 1790 "arraymodule.c"
        var $205=$204+8; //@line 1790 "arraymodule.c"
        var $206=HEAP[$205]; //@line 1790 "arraymodule.c"
        var $207=HEAP[$start]; //@line 1790 "arraymodule.c"
        var $_neg5=0 - ($207);
        var $208=$needed; //@line 1790 "arraymodule.c"
        var $_neg6=0 - ($208);
        var $209=($_neg5) + ($206);
        var $210=($209) + ($_neg6);
        var $211=$itemsize; //@line 1790 "arraymodule.c"
        var $212=($210) * ($211); //@line 1790 "arraymodule.c"
        var $213=$self_addr; //@line 1790 "arraymodule.c"
        var $214=$213+12; //@line 1790 "arraymodule.c"
        var $215=HEAP[$214]; //@line 1790 "arraymodule.c"
        var $216=HEAP[$stop]; //@line 1790 "arraymodule.c"
        var $217=$itemsize; //@line 1790 "arraymodule.c"
        var $218=($217) * ($216); //@line 1790 "arraymodule.c"
        var $219=$215+$218; //@line 1790 "arraymodule.c"
        var $220=$self_addr; //@line 1790 "arraymodule.c"
        var $221=$220+12; //@line 1790 "arraymodule.c"
        var $222=HEAP[$221]; //@line 1790 "arraymodule.c"
        var $223=HEAP[$start]; //@line 1790 "arraymodule.c"
        var $224=$needed; //@line 1790 "arraymodule.c"
        var $225=($224) + ($223); //@line 1790 "arraymodule.c"
        var $226=$itemsize; //@line 1790 "arraymodule.c"
        var $227=($225) * ($226); //@line 1790 "arraymodule.c"
        var $228=$222+$227; //@line 1790 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($228, $219, $212, 1, 0); //@line 1790 "arraymodule.c"
        __label__ = 47; break; //@line 1790 "arraymodule.c"
      case 47: // $bb46thread_pre_split
        var $_pr3=$needed;
        __lastLabel__ = 47; __label__ = 48; break;
      case 48: // $bb46
        var $229=__lastLabel__ == 47 ? $_pr3 : ($190);
        var $230=($229) > 0; //@line 1794 "arraymodule.c"
        if ($230) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 1794 "arraymodule.c"
      case 49: // $bb47
        var $231=$needed; //@line 1795 "arraymodule.c"
        var $232=$itemsize; //@line 1795 "arraymodule.c"
        var $233=($232) * ($231); //@line 1795 "arraymodule.c"
        var $234=$other; //@line 1795 "arraymodule.c"
        var $235=$234+12; //@line 1795 "arraymodule.c"
        var $236=HEAP[$235]; //@line 1795 "arraymodule.c"
        var $237=$self_addr; //@line 1795 "arraymodule.c"
        var $238=$237+12; //@line 1795 "arraymodule.c"
        var $239=HEAP[$238]; //@line 1795 "arraymodule.c"
        var $240=HEAP[$start]; //@line 1795 "arraymodule.c"
        var $241=$itemsize; //@line 1795 "arraymodule.c"
        var $242=($241) * ($240); //@line 1795 "arraymodule.c"
        var $243=$239+$242; //@line 1795 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($243, $236, $233, 1, 0); //@line 1795 "arraymodule.c"
        __label__ = 50; break; //@line 1795 "arraymodule.c"
      case 50: // $bb48
        $0=0; //@line 1797 "arraymodule.c"
        __label__ = 68; break; //@line 1797 "arraymodule.c"
      case 51: // $bb49
        var $244=$needed; //@line 1799 "arraymodule.c"
        var $245=($244)==0; //@line 1799 "arraymodule.c"
        if ($245) { __label__ = 52; break; } else { __label__ = 63; break; } //@line 1799 "arraymodule.c"
      case 52: // $bb50
        var $246=HEAP[$step]; //@line 1804 "arraymodule.c"
        var $247=($246) < 0; //@line 1804 "arraymodule.c"
        if ($247) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 1804 "arraymodule.c"
      case 53: // $bb52
        var $248=HEAP[$start]; //@line 1805 "arraymodule.c"
        var $249=($248) + 1; //@line 1805 "arraymodule.c"
        HEAP[$stop]=$249; //@line 1805 "arraymodule.c"
        var $250=HEAP[$slicelength]; //@line 1806 "arraymodule.c"
        var $251=($250) - 1; //@line 1806 "arraymodule.c"
        var $252=HEAP[$step]; //@line 1806 "arraymodule.c"
        var $253=($251) * ($252); //@line 1806 "arraymodule.c"
        var $254=HEAP[$stop]; //@line 1806 "arraymodule.c"
        var $255=($254) + -1; //@line 1806 "arraymodule.c"
        var $256=($255) + ($253);
        HEAP[$start]=$256; //@line 1806 "arraymodule.c"
        var $257=HEAP[$step]; //@line 1807 "arraymodule.c"
        var $258=0 - ($257); //@line 1807 "arraymodule.c"
        HEAP[$step]=$258; //@line 1807 "arraymodule.c"
        __label__ = 54; break; //@line 1807 "arraymodule.c"
      case 54: // $bb53
        var $259=HEAP[$start]; //@line 1809 "arraymodule.c"
        $cur=$259; //@line 1809 "arraymodule.c"
        $i51=0; //@line 1809 "arraymodule.c"
        var $260=HEAP[$slicelength]; //@line 1809 "arraymodule.c"
        var $261=$i51; //@line 1809 "arraymodule.c"
        var $262=($261) < ($260); //@line 1809 "arraymodule.c"
        if ($262) { __label__ = 55; break; } else { __label__ = 58; break; } //@line 1809 "arraymodule.c"
      case 55: // $bb54
        var $263=HEAP[$step]; //@line 1811 "arraymodule.c"
        var $264=($263) - 1; //@line 1811 "arraymodule.c"
        $lim=$264; //@line 1811 "arraymodule.c"
        var $265=HEAP[$step]; //@line 1813 "arraymodule.c"
        var $266=$cur; //@line 1813 "arraymodule.c"
        var $267=($266) + ($265); //@line 1813 "arraymodule.c"
        var $268=$self_addr; //@line 1813 "arraymodule.c"
        var $269=$268; //@line 1813 "arraymodule.c"
        var $270=$269+8; //@line 1813 "arraymodule.c"
        var $271=HEAP[$270]; //@line 1813 "arraymodule.c"
        var $272=($267) >= ($271); //@line 1813 "arraymodule.c"
        if ($272) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 1813 "arraymodule.c"
      case 56: // $bb55
        var $273=$self_addr; //@line 1814 "arraymodule.c"
        var $274=$273; //@line 1814 "arraymodule.c"
        var $275=$274+8; //@line 1814 "arraymodule.c"
        var $276=HEAP[$275]; //@line 1814 "arraymodule.c"
        var $277=$cur; //@line 1814 "arraymodule.c"
        var $_neg7=0 - ($277);
        var $278=($276) + -1;
        var $279=($278) + ($_neg7);
        $lim=$279; //@line 1814 "arraymodule.c"
        __label__ = 57; break; //@line 1814 "arraymodule.c"
      case 57: // $bb56
        var $280=$lim; //@line 1815 "arraymodule.c"
        var $281=$itemsize; //@line 1815 "arraymodule.c"
        var $282=($281) * ($280); //@line 1815 "arraymodule.c"
        var $283=$self_addr; //@line 1815 "arraymodule.c"
        var $284=$283+12; //@line 1815 "arraymodule.c"
        var $285=HEAP[$284]; //@line 1815 "arraymodule.c"
        var $286=$cur; //@line 1815 "arraymodule.c"
        var $287=($286) + 1; //@line 1815 "arraymodule.c"
        var $288=$itemsize; //@line 1815 "arraymodule.c"
        var $289=($287) * ($288); //@line 1815 "arraymodule.c"
        var $290=$285+$289; //@line 1815 "arraymodule.c"
        var $291=$self_addr; //@line 1815 "arraymodule.c"
        var $292=$291+12; //@line 1815 "arraymodule.c"
        var $293=HEAP[$292]; //@line 1815 "arraymodule.c"
        var $294=$i51; //@line 1815 "arraymodule.c"
        var $295=$cur; //@line 1815 "arraymodule.c"
        var $296=($295) - ($294); //@line 1815 "arraymodule.c"
        var $297=$itemsize; //@line 1815 "arraymodule.c"
        var $298=($296) * ($297); //@line 1815 "arraymodule.c"
        var $299=$293+$298; //@line 1815 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($299, $290, $282, 1, 0); //@line 1815 "arraymodule.c"
        var $300=HEAP[$step]; //@line 1810 "arraymodule.c"
        var $301=$cur; //@line 1810 "arraymodule.c"
        var $302=($301) + ($300); //@line 1810 "arraymodule.c"
        $cur=$302; //@line 1810 "arraymodule.c"
        var $303=$i51; //@line 1810 "arraymodule.c"
        var $304=($303) + 1; //@line 1810 "arraymodule.c"
        $i51=$304; //@line 1810 "arraymodule.c"
        var $305=HEAP[$slicelength]; //@line 1809 "arraymodule.c"
        var $306=$i51; //@line 1809 "arraymodule.c"
        var $307=($306) < ($305); //@line 1809 "arraymodule.c"
        if ($307) { __label__ = 55; break; } else { __label__ = 58; break; } //@line 1809 "arraymodule.c"
      case 58: // $bb58
        var $308=HEAP[$slicelength]; //@line 1819 "arraymodule.c"
        var $309=HEAP[$step]; //@line 1819 "arraymodule.c"
        var $310=($309) * ($308); //@line 1819 "arraymodule.c"
        var $311=HEAP[$start]; //@line 1819 "arraymodule.c"
        var $312=($310) + ($311); //@line 1819 "arraymodule.c"
        $cur=$312; //@line 1819 "arraymodule.c"
        var $313=$self_addr; //@line 1820 "arraymodule.c"
        var $314=$313; //@line 1820 "arraymodule.c"
        var $315=$314+8; //@line 1820 "arraymodule.c"
        var $316=HEAP[$315]; //@line 1820 "arraymodule.c"
        var $317=$cur; //@line 1820 "arraymodule.c"
        var $318=($316) > ($317); //@line 1820 "arraymodule.c"
        if ($318) { __label__ = 59; break; } else { __label__ = 60; break; } //@line 1820 "arraymodule.c"
      case 59: // $bb59
        var $319=$self_addr; //@line 1821 "arraymodule.c"
        var $320=$319; //@line 1821 "arraymodule.c"
        var $321=$320+8; //@line 1821 "arraymodule.c"
        var $322=HEAP[$321]; //@line 1821 "arraymodule.c"
        var $323=$cur; //@line 1821 "arraymodule.c"
        var $324=($322) - ($323); //@line 1821 "arraymodule.c"
        var $325=$itemsize; //@line 1821 "arraymodule.c"
        var $326=($324) * ($325); //@line 1821 "arraymodule.c"
        var $327=$self_addr; //@line 1821 "arraymodule.c"
        var $328=$327+12; //@line 1821 "arraymodule.c"
        var $329=HEAP[$328]; //@line 1821 "arraymodule.c"
        var $330=$itemsize; //@line 1821 "arraymodule.c"
        var $331=$cur; //@line 1821 "arraymodule.c"
        var $332=($331) * ($330); //@line 1821 "arraymodule.c"
        var $333=$329+$332; //@line 1821 "arraymodule.c"
        var $334=$self_addr; //@line 1821 "arraymodule.c"
        var $335=$334+12; //@line 1821 "arraymodule.c"
        var $336=HEAP[$335]; //@line 1821 "arraymodule.c"
        var $337=HEAP[$slicelength]; //@line 1821 "arraymodule.c"
        var $338=$cur; //@line 1821 "arraymodule.c"
        var $339=($338) - ($337); //@line 1821 "arraymodule.c"
        var $340=$itemsize; //@line 1821 "arraymodule.c"
        var $341=($339) * ($340); //@line 1821 "arraymodule.c"
        var $342=$336+$341; //@line 1821 "arraymodule.c"
        _llvm_memmove_p0i8_p0i8_i32($342, $333, $326, 1, 0); //@line 1821 "arraymodule.c"
        __label__ = 60; break; //@line 1821 "arraymodule.c"
      case 60: // $bb60
        var $343=$self_addr; //@line 1825 "arraymodule.c"
        var $344=$343; //@line 1825 "arraymodule.c"
        var $345=$344+8; //@line 1825 "arraymodule.c"
        var $346=HEAP[$345]; //@line 1825 "arraymodule.c"
        var $347=HEAP[$slicelength]; //@line 1825 "arraymodule.c"
        var $348=($346) - ($347); //@line 1825 "arraymodule.c"
        var $349=$self_addr; //@line 1825 "arraymodule.c"
        var $350=_array_resize($349, $348); //@line 1825 "arraymodule.c"
        var $351=($350) < 0; //@line 1825 "arraymodule.c"
        if ($351) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 1825 "arraymodule.c"
      case 61: // $bb61
        $0=-1; //@line 1826 "arraymodule.c"
        __label__ = 68; break; //@line 1826 "arraymodule.c"
      case 62: // $bb62
        $0=0; //@line 1827 "arraymodule.c"
        __label__ = 68; break; //@line 1827 "arraymodule.c"
      case 63: // $bb63
        var $352=HEAP[$slicelength]; //@line 1832 "arraymodule.c"
        var $353=$needed; //@line 1832 "arraymodule.c"
        var $354=($353)!=($352); //@line 1832 "arraymodule.c"
        if ($354) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 1832 "arraymodule.c"
      case 64: // $bb66
        var $355=HEAP[$slicelength]; //@line 1833 "arraymodule.c"
        var $356=HEAP[_PyExc_ValueError]; //@line 1833 "arraymodule.c"
        var $357=$needed; //@line 1833 "arraymodule.c"
        var $358=_PyErr_Format($356, __str79, allocate([$357,0,0,0,$355,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1833 "arraymodule.c"
        $0=-1; //@line 1837 "arraymodule.c"
        __label__ = 68; break; //@line 1837 "arraymodule.c"
      case 65: // $bb67
        var $359=HEAP[$start]; //@line 1839 "arraymodule.c"
        $cur64=$359; //@line 1839 "arraymodule.c"
        $i65=0; //@line 1839 "arraymodule.c"
        var $360=HEAP[$slicelength]; //@line 1839 "arraymodule.c"
        var $361=$i65; //@line 1839 "arraymodule.c"
        var $362=($361) < ($360); //@line 1839 "arraymodule.c"
        if ($362) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 1839 "arraymodule.c"
      case 66: // $bb68
        var $363=$itemsize; //@line 1841 "arraymodule.c"
        var $364=$other; //@line 1841 "arraymodule.c"
        var $365=$364+12; //@line 1841 "arraymodule.c"
        var $366=HEAP[$365]; //@line 1841 "arraymodule.c"
        var $367=$i65; //@line 1841 "arraymodule.c"
        var $368=$itemsize; //@line 1841 "arraymodule.c"
        var $369=($368) * ($367); //@line 1841 "arraymodule.c"
        var $370=$366+$369; //@line 1841 "arraymodule.c"
        var $371=$self_addr; //@line 1841 "arraymodule.c"
        var $372=$371+12; //@line 1841 "arraymodule.c"
        var $373=HEAP[$372]; //@line 1841 "arraymodule.c"
        var $374=$cur64; //@line 1841 "arraymodule.c"
        var $375=$itemsize; //@line 1841 "arraymodule.c"
        var $376=($375) * ($374); //@line 1841 "arraymodule.c"
        var $377=$373+$376; //@line 1841 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($377, $370, $363, 1, 0); //@line 1841 "arraymodule.c"
        var $378=HEAP[$step]; //@line 1840 "arraymodule.c"
        var $379=$cur64; //@line 1840 "arraymodule.c"
        var $380=($379) + ($378); //@line 1840 "arraymodule.c"
        $cur64=$380; //@line 1840 "arraymodule.c"
        var $381=$i65; //@line 1840 "arraymodule.c"
        var $382=($381) + 1; //@line 1840 "arraymodule.c"
        $i65=$382; //@line 1840 "arraymodule.c"
        var $383=HEAP[$slicelength]; //@line 1839 "arraymodule.c"
        var $384=$i65; //@line 1839 "arraymodule.c"
        var $385=($384) < ($383); //@line 1839 "arraymodule.c"
        if ($385) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 1839 "arraymodule.c"
      case 67: // $bb70
        $0=0; //@line 1845 "arraymodule.c"
        __label__ = 68; break; //@line 1845 "arraymodule.c"
      case 68: // $bb71
        var $386=$0; //@line 1714 "arraymodule.c"
        $retval=$386; //@line 1714 "arraymodule.c"
        var $retval72=$retval; //@line 1714 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval72; //@line 1714 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_buffer_getreadbuf($self, $index, $ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $index_addr;
        var $ptr_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $index_addr=$index;
        $ptr_addr=$ptr;
        var $1=$index_addr; //@line 1860 "arraymodule.c"
        var $2=($1)!=0; //@line 1860 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1860 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_SystemError]; //@line 1861 "arraymodule.c"
        _PyErr_SetString($3, __str81); //@line 1861 "arraymodule.c"
        $0=-1; //@line 1863 "arraymodule.c"
        __label__ = 5; break; //@line 1863 "arraymodule.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 1865 "arraymodule.c"
        var $5=$4+12; //@line 1865 "arraymodule.c"
        var $6=HEAP[$5]; //@line 1865 "arraymodule.c"
        var $7=$ptr_addr; //@line 1865 "arraymodule.c"
        HEAP[$7]=$6; //@line 1865 "arraymodule.c"
        var $8=$ptr_addr; //@line 1866 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1866 "arraymodule.c"
        var $10=($9)==0; //@line 1866 "arraymodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1866 "arraymodule.c"
      case 3: // $bb2
        var $11=$ptr_addr; //@line 1867 "arraymodule.c"
        HEAP[$11]=__str80; //@line 1867 "arraymodule.c"
        __label__ = 4; break; //@line 1867 "arraymodule.c"
      case 4: // $bb3
        var $12=$self_addr; //@line 1868 "arraymodule.c"
        var $13=$12; //@line 1868 "arraymodule.c"
        var $14=$13+8; //@line 1868 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1868 "arraymodule.c"
        var $16=$self_addr; //@line 1868 "arraymodule.c"
        var $17=$16+20; //@line 1868 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1868 "arraymodule.c"
        var $19=$18+4; //@line 1868 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1868 "arraymodule.c"
        var $21=($20) * ($15); //@line 1868 "arraymodule.c"
        $0=$21; //@line 1868 "arraymodule.c"
        __label__ = 5; break; //@line 1868 "arraymodule.c"
      case 5: // $bb4
        var $22=$0; //@line 1863 "arraymodule.c"
        $retval=$22; //@line 1863 "arraymodule.c"
        var $retval5=$retval; //@line 1863 "arraymodule.c"
        ;
        return $retval5; //@line 1863 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_buffer_getwritebuf($self, $index, $ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $index_addr;
        var $ptr_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $index_addr=$index;
        $ptr_addr=$ptr;
        var $1=$index_addr; //@line 1874 "arraymodule.c"
        var $2=($1)!=0; //@line 1874 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1874 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[_PyExc_SystemError]; //@line 1875 "arraymodule.c"
        _PyErr_SetString($3, __str81); //@line 1875 "arraymodule.c"
        $0=-1; //@line 1877 "arraymodule.c"
        __label__ = 5; break; //@line 1877 "arraymodule.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 1879 "arraymodule.c"
        var $5=$4+12; //@line 1879 "arraymodule.c"
        var $6=HEAP[$5]; //@line 1879 "arraymodule.c"
        var $7=$ptr_addr; //@line 1879 "arraymodule.c"
        HEAP[$7]=$6; //@line 1879 "arraymodule.c"
        var $8=$ptr_addr; //@line 1880 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1880 "arraymodule.c"
        var $10=($9)==0; //@line 1880 "arraymodule.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1880 "arraymodule.c"
      case 3: // $bb2
        var $11=$ptr_addr; //@line 1881 "arraymodule.c"
        HEAP[$11]=__str80; //@line 1881 "arraymodule.c"
        __label__ = 4; break; //@line 1881 "arraymodule.c"
      case 4: // $bb3
        var $12=$self_addr; //@line 1882 "arraymodule.c"
        var $13=$12; //@line 1882 "arraymodule.c"
        var $14=$13+8; //@line 1882 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1882 "arraymodule.c"
        var $16=$self_addr; //@line 1882 "arraymodule.c"
        var $17=$16+20; //@line 1882 "arraymodule.c"
        var $18=HEAP[$17]; //@line 1882 "arraymodule.c"
        var $19=$18+4; //@line 1882 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1882 "arraymodule.c"
        var $21=($20) * ($15); //@line 1882 "arraymodule.c"
        $0=$21; //@line 1882 "arraymodule.c"
        __label__ = 5; break; //@line 1882 "arraymodule.c"
      case 5: // $bb4
        var $22=$0; //@line 1877 "arraymodule.c"
        $retval=$22; //@line 1877 "arraymodule.c"
        var $retval5=$retval; //@line 1877 "arraymodule.c"
        ;
        return $retval5; //@line 1877 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_buffer_getsegcount($self, $lenp) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $lenp_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $lenp_addr=$lenp;
        var $1=$lenp_addr; //@line 1888 "arraymodule.c"
        var $2=($1)!=0; //@line 1888 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1888 "arraymodule.c"
      case 1: // $bb
        var $3=$self_addr; //@line 1889 "arraymodule.c"
        var $4=$3; //@line 1889 "arraymodule.c"
        var $5=$4+8; //@line 1889 "arraymodule.c"
        var $6=HEAP[$5]; //@line 1889 "arraymodule.c"
        var $7=$self_addr; //@line 1889 "arraymodule.c"
        var $8=$7+20; //@line 1889 "arraymodule.c"
        var $9=HEAP[$8]; //@line 1889 "arraymodule.c"
        var $10=$9+4; //@line 1889 "arraymodule.c"
        var $11=HEAP[$10]; //@line 1889 "arraymodule.c"
        var $12=($11) * ($6); //@line 1889 "arraymodule.c"
        var $13=$lenp_addr; //@line 1889 "arraymodule.c"
        HEAP[$13]=$12; //@line 1889 "arraymodule.c"
        __label__ = 2; break; //@line 1889 "arraymodule.c"
      case 2: // $bb1
        $0=1; //@line 1890 "arraymodule.c"
        var $14=$0; //@line 1890 "arraymodule.c"
        $retval=$14; //@line 1890 "arraymodule.c"
        var $retval2=$retval; //@line 1890 "arraymodule.c"
        ;
        return $retval2; //@line 1890 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_new($type, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 5; _memset(__stackBase__, 0, 5);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $c=__stackBase__;
        var $initial=__stackBase__+1;
        var $it;
        var $descr;
        var $a;
        var $len;
        var $i;
        var $v;
        var $t_initial;
        var $v42;
        var $n;
        var $self;
        var $item;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$initial]=0; //@line 1917 "arraymodule.c"
        $it=0; //@line 1917 "arraymodule.c"
        var $1=$type_addr; //@line 1920 "arraymodule.c"
        var $2=($1)==(_Arraytype); //@line 1920 "arraymodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1920 "arraymodule.c"
      case 1: // $bb
        var $3=$kwds_addr; //@line 1920 "arraymodule.c"
        var $4=__PyArg_NoKeywords(__str82, $3); //@line 1920 "arraymodule.c"
        var $5=($4)==0; //@line 1920 "arraymodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1920 "arraymodule.c"
      case 2: // $bb1
        $0=0; //@line 1921 "arraymodule.c"
        __label__ = 74; break; //@line 1921 "arraymodule.c"
      case 3: // $bb2
        var $6=$args_addr; //@line 1923 "arraymodule.c"
        var $7=__PyArg_ParseTuple_SizeT($6, __str83, allocate([$c,0,0,0,$initial,0,0,0], ["i8*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1923 "arraymodule.c"
        var $8=($7)==0; //@line 1923 "arraymodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1923 "arraymodule.c"
      case 4: // $bb3
        $0=0; //@line 1924 "arraymodule.c"
        __label__ = 74; break; //@line 1924 "arraymodule.c"
      case 5: // $bb4
        var $9=HEAP[$initial]; //@line 1926 "arraymodule.c"
        var $10=($9)!=0; //@line 1926 "arraymodule.c"
        if ($10) { __label__ = 6; break; } else { __label__ = 14; break; } //@line 1926 "arraymodule.c"
      case 6: // $bb5
        var $11=HEAP[$initial]; //@line 1926 "arraymodule.c"
        var $12=$11+4; //@line 1926 "arraymodule.c"
        var $13=HEAP[$12]; //@line 1926 "arraymodule.c"
        var $14=$13+84; //@line 1926 "arraymodule.c"
        var $15=HEAP[$14]; //@line 1926 "arraymodule.c"
        var $16=($15) & 33554432; //@line 1926 "arraymodule.c"
        var $17=($16)==0; //@line 1926 "arraymodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 14; break; } //@line 1926 "arraymodule.c"
      case 7: // $bb6
        var $18=HEAP[$initial]; //@line 1926 "arraymodule.c"
        var $19=$18+4; //@line 1926 "arraymodule.c"
        var $20=HEAP[$19]; //@line 1926 "arraymodule.c"
        var $21=$20+84; //@line 1926 "arraymodule.c"
        var $22=HEAP[$21]; //@line 1926 "arraymodule.c"
        var $23=($22) & 134217728; //@line 1926 "arraymodule.c"
        var $24=($23)==0; //@line 1926 "arraymodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 14; break; } //@line 1926 "arraymodule.c"
      case 8: // $bb7
        var $25=HEAP[$initial]; //@line 1926 "arraymodule.c"
        var $26=$25+4; //@line 1926 "arraymodule.c"
        var $27=HEAP[$26]; //@line 1926 "arraymodule.c"
        var $28=$27+84; //@line 1926 "arraymodule.c"
        var $29=HEAP[$28]; //@line 1926 "arraymodule.c"
        var $30=($29) & 67108864; //@line 1926 "arraymodule.c"
        var $31=($30)==0; //@line 1926 "arraymodule.c"
        if ($31) { __label__ = 9; break; } else { __label__ = 14; break; } //@line 1926 "arraymodule.c"
      case 9: // $bb8
        var $32=HEAP[$c]; //@line 1926 "arraymodule.c"
        var $33=($32)!=117; //@line 1926 "arraymodule.c"
        if ($33) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1926 "arraymodule.c"
      case 10: // $bb9
        var $34=HEAP[$initial]; //@line 1926 "arraymodule.c"
        var $35=$34+4; //@line 1926 "arraymodule.c"
        var $36=HEAP[$35]; //@line 1926 "arraymodule.c"
        var $37=$36+84; //@line 1926 "arraymodule.c"
        var $38=HEAP[$37]; //@line 1926 "arraymodule.c"
        var $39=($38) & 268435456; //@line 1926 "arraymodule.c"
        var $40=($39)==0; //@line 1926 "arraymodule.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1926 "arraymodule.c"
      case 11: // $bb10
        var $41=HEAP[$initial]; //@line 1929 "arraymodule.c"
        var $42=_PyObject_GetIter($41); //@line 1929 "arraymodule.c"
        $it=$42; //@line 1929 "arraymodule.c"
        var $43=($42)==0; //@line 1930 "arraymodule.c"
        if ($43) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1930 "arraymodule.c"
      case 12: // $bb11
        $0=0; //@line 1931 "arraymodule.c"
        __label__ = 74; break; //@line 1931 "arraymodule.c"
      case 13: // $bb12
        HEAP[$initial]=0; //@line 1937 "arraymodule.c"
        __label__ = 14; break; //@line 1937 "arraymodule.c"
      case 14: // $bb13
        $descr=_descriptors; //@line 1939 "arraymodule.c"
        __label__ = 72; break; //@line 1939 "arraymodule.c"
      case 15: // $bb14
        var $44=$descr; //@line 1940 "arraymodule.c"
        var $45=$44; //@line 1940 "arraymodule.c"
        var $46=HEAP[$45]; //@line 1940 "arraymodule.c"
        var $47=HEAP[$c]; //@line 1940 "arraymodule.c"
        var $48=($47); //@line 1940 "arraymodule.c"
        var $49=($46)==($48); //@line 1940 "arraymodule.c"
        if ($49) { __label__ = 16; break; } else { __label__ = 71; break; } //@line 1940 "arraymodule.c"
      case 16: // $bb15
        var $50=HEAP[$initial]; //@line 1944 "arraymodule.c"
        var $51=($50)==0; //@line 1944 "arraymodule.c"
        if ($51) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 1944 "arraymodule.c"
      case 17: // $bb16
        var $52=HEAP[$initial]; //@line 1944 "arraymodule.c"
        var $53=$52+4; //@line 1944 "arraymodule.c"
        var $54=HEAP[$53]; //@line 1944 "arraymodule.c"
        var $55=$54+84; //@line 1944 "arraymodule.c"
        var $56=HEAP[$55]; //@line 1944 "arraymodule.c"
        var $57=($56) & 33554432; //@line 1944 "arraymodule.c"
        var $58=($57)!=0; //@line 1944 "arraymodule.c"
        if ($58) { __label__ = 20; break; } else { __label__ = 18; break; } //@line 1944 "arraymodule.c"
      case 18: // $bb17
        var $59=HEAP[$initial]; //@line 1944 "arraymodule.c"
        var $60=$59+4; //@line 1944 "arraymodule.c"
        var $61=HEAP[$60]; //@line 1944 "arraymodule.c"
        var $62=$61+84; //@line 1944 "arraymodule.c"
        var $63=HEAP[$62]; //@line 1944 "arraymodule.c"
        var $64=($63) & 67108864; //@line 1944 "arraymodule.c"
        var $65=($64)==0; //@line 1944 "arraymodule.c"
        if ($65) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1944 "arraymodule.c"
      case 19: // $bb18
        $len=0; //@line 1946 "arraymodule.c"
        __label__ = 21; break; //@line 1946 "arraymodule.c"
      case 20: // $bb19
        var $66=HEAP[$initial]; //@line 1948 "arraymodule.c"
        var $67=_PySequence_Size($66); //@line 1948 "arraymodule.c"
        $len=$67; //@line 1948 "arraymodule.c"
        __label__ = 21; break; //@line 1948 "arraymodule.c"
      case 21: // $bb20
        var $68=$type_addr; //@line 1950 "arraymodule.c"
        var $69=$len; //@line 1950 "arraymodule.c"
        var $70=$descr; //@line 1950 "arraymodule.c"
        var $71=_newarrayobject($68, $69, $70); //@line 1950 "arraymodule.c"
        $a=$71; //@line 1950 "arraymodule.c"
        var $72=($71)==0; //@line 1951 "arraymodule.c"
        if ($72) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1951 "arraymodule.c"
      case 22: // $bb21
        $0=0; //@line 1952 "arraymodule.c"
        __label__ = 74; break; //@line 1952 "arraymodule.c"
      case 23: // $bb22
        var $73=$len; //@line 1954 "arraymodule.c"
        var $74=($73) > 0; //@line 1954 "arraymodule.c"
        if ($74) { __label__ = 24; break; } else { __label__ = 39; break; } //@line 1954 "arraymodule.c"
      case 24: // $bb23
        $i=0; //@line 1956 "arraymodule.c"
        __label__ = 38; break; //@line 1956 "arraymodule.c"
      case 25: // $bb24
        var $75=HEAP[$initial]; //@line 1958 "arraymodule.c"
        var $76=$i; //@line 1958 "arraymodule.c"
        var $77=_PySequence_GetItem($75, $76); //@line 1958 "arraymodule.c"
        $v=$77; //@line 1958 "arraymodule.c"
        var $78=$v; //@line 1959 "arraymodule.c"
        var $79=($78)==0; //@line 1959 "arraymodule.c"
        var $80=$a; //@line 1960 "arraymodule.c"
        if ($79) { __label__ = 26; break; } else { __label__ = 29; break; } //@line 1959 "arraymodule.c"
      case 26: // $bb25
        var $81=$80; //@line 1960 "arraymodule.c"
        var $82=HEAP[$81]; //@line 1960 "arraymodule.c"
        var $83=($82) - 1; //@line 1960 "arraymodule.c"
        var $84=$a; //@line 1960 "arraymodule.c"
        var $85=$84; //@line 1960 "arraymodule.c"
        HEAP[$85]=$83; //@line 1960 "arraymodule.c"
        var $86=$a; //@line 1960 "arraymodule.c"
        var $87=$86; //@line 1960 "arraymodule.c"
        var $88=HEAP[$87]; //@line 1960 "arraymodule.c"
        var $89=($88)==0; //@line 1960 "arraymodule.c"
        if ($89) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1960 "arraymodule.c"
      case 27: // $bb26
        var $90=$a; //@line 1960 "arraymodule.c"
        var $91=$90+4; //@line 1960 "arraymodule.c"
        var $92=HEAP[$91]; //@line 1960 "arraymodule.c"
        var $93=$92+24; //@line 1960 "arraymodule.c"
        var $94=HEAP[$93]; //@line 1960 "arraymodule.c"
        var $95=$a; //@line 1960 "arraymodule.c"
        FUNCTION_TABLE[$94]($95); //@line 1960 "arraymodule.c"
        __label__ = 28; break; //@line 1960 "arraymodule.c"
      case 28: // $bb27
        $0=0; //@line 1961 "arraymodule.c"
        __label__ = 74; break; //@line 1961 "arraymodule.c"
      case 29: // $bb28
        var $96=$i; //@line 1963 "arraymodule.c"
        var $97=$v; //@line 1963 "arraymodule.c"
        var $98=_setarrayitem($80, $96, $97); //@line 1963 "arraymodule.c"
        var $99=($98)!=0; //@line 1963 "arraymodule.c"
        var $100=$v; //@line 1964 "arraymodule.c"
        var $101=$100; //@line 1964 "arraymodule.c"
        var $102=HEAP[$101]; //@line 1964 "arraymodule.c"
        var $103=($102) - 1; //@line 1964 "arraymodule.c"
        var $104=$v; //@line 1964 "arraymodule.c"
        var $105=$104; //@line 1964 "arraymodule.c"
        HEAP[$105]=$103; //@line 1964 "arraymodule.c"
        var $106=$v; //@line 1964 "arraymodule.c"
        var $107=$106; //@line 1964 "arraymodule.c"
        var $108=HEAP[$107]; //@line 1964 "arraymodule.c"
        var $109=($108)==0; //@line 1964 "arraymodule.c"
        if ($99) { __label__ = 30; break; } else { __label__ = 35; break; } //@line 1963 "arraymodule.c"
      case 30: // $bb29
        if ($109) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1964 "arraymodule.c"
      case 31: // $bb30
        var $110=$v; //@line 1964 "arraymodule.c"
        var $111=$110+4; //@line 1964 "arraymodule.c"
        var $112=HEAP[$111]; //@line 1964 "arraymodule.c"
        var $113=$112+24; //@line 1964 "arraymodule.c"
        var $114=HEAP[$113]; //@line 1964 "arraymodule.c"
        var $115=$v; //@line 1964 "arraymodule.c"
        FUNCTION_TABLE[$114]($115); //@line 1964 "arraymodule.c"
        __label__ = 32; break; //@line 1964 "arraymodule.c"
      case 32: // $bb31
        var $116=$a; //@line 1965 "arraymodule.c"
        var $117=$116; //@line 1965 "arraymodule.c"
        var $118=HEAP[$117]; //@line 1965 "arraymodule.c"
        var $119=($118) - 1; //@line 1965 "arraymodule.c"
        var $120=$a; //@line 1965 "arraymodule.c"
        var $121=$120; //@line 1965 "arraymodule.c"
        HEAP[$121]=$119; //@line 1965 "arraymodule.c"
        var $122=$a; //@line 1965 "arraymodule.c"
        var $123=$122; //@line 1965 "arraymodule.c"
        var $124=HEAP[$123]; //@line 1965 "arraymodule.c"
        var $125=($124)==0; //@line 1965 "arraymodule.c"
        if ($125) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1965 "arraymodule.c"
      case 33: // $bb32
        var $126=$a; //@line 1965 "arraymodule.c"
        var $127=$126+4; //@line 1965 "arraymodule.c"
        var $128=HEAP[$127]; //@line 1965 "arraymodule.c"
        var $129=$128+24; //@line 1965 "arraymodule.c"
        var $130=HEAP[$129]; //@line 1965 "arraymodule.c"
        var $131=$a; //@line 1965 "arraymodule.c"
        FUNCTION_TABLE[$130]($131); //@line 1965 "arraymodule.c"
        __label__ = 34; break; //@line 1965 "arraymodule.c"
      case 34: // $bb33
        $0=0; //@line 1966 "arraymodule.c"
        __label__ = 74; break; //@line 1966 "arraymodule.c"
      case 35: // $bb34
        if ($109) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1968 "arraymodule.c"
      case 36: // $bb35
        var $132=$v; //@line 1968 "arraymodule.c"
        var $133=$132+4; //@line 1968 "arraymodule.c"
        var $134=HEAP[$133]; //@line 1968 "arraymodule.c"
        var $135=$134+24; //@line 1968 "arraymodule.c"
        var $136=HEAP[$135]; //@line 1968 "arraymodule.c"
        var $137=$v; //@line 1968 "arraymodule.c"
        FUNCTION_TABLE[$136]($137); //@line 1968 "arraymodule.c"
        __label__ = 37; break; //@line 1968 "arraymodule.c"
      case 37: // $bb36
        var $138=$i; //@line 1956 "arraymodule.c"
        var $139=($138) + 1; //@line 1956 "arraymodule.c"
        $i=$139; //@line 1956 "arraymodule.c"
        __label__ = 38; break; //@line 1956 "arraymodule.c"
      case 38: // $bb37
        var $140=$i; //@line 1956 "arraymodule.c"
        var $141=$len; //@line 1956 "arraymodule.c"
        var $142=($140) < ($141); //@line 1956 "arraymodule.c"
        if ($142) { __label__ = 25; break; } else { __label__ = 61; break; } //@line 1956 "arraymodule.c"
      case 39: // $bb39
        var $143=HEAP[$initial]; //@line 1970 "arraymodule.c"
        var $144=($143)==0; //@line 1970 "arraymodule.c"
        if ($144) { __label__ = 61; break; } else { __label__ = 40; break; } //@line 1970 "arraymodule.c"
      case 40: // $bb40
        var $145=HEAP[$initial]; //@line 1970 "arraymodule.c"
        var $146=$145+4; //@line 1970 "arraymodule.c"
        var $147=HEAP[$146]; //@line 1970 "arraymodule.c"
        var $148=$147+84; //@line 1970 "arraymodule.c"
        var $149=HEAP[$148]; //@line 1970 "arraymodule.c"
        var $150=($149) & 134217728; //@line 1970 "arraymodule.c"
        var $151=($150)==0; //@line 1970 "arraymodule.c"
        var $_pr=HEAP[$initial];
        if ($151) { __label__ = 53; break; } else { __label__ = 41; break; } //@line 1970 "arraymodule.c"
      case 41: // $bb41
        var $152=_PyTuple_Pack(1, allocate([$_pr,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1972 "arraymodule.c"
        $t_initial=$152; //@line 1972 "arraymodule.c"
        var $153=$t_initial; //@line 1973 "arraymodule.c"
        var $154=($153)==0; //@line 1973 "arraymodule.c"
        var $155=$a; //@line 1974 "arraymodule.c"
        if ($154) { __label__ = 42; break; } else { __label__ = 45; break; } //@line 1973 "arraymodule.c"
      case 42: // $bb43
        var $156=$155; //@line 1974 "arraymodule.c"
        var $157=HEAP[$156]; //@line 1974 "arraymodule.c"
        var $158=($157) - 1; //@line 1974 "arraymodule.c"
        var $159=$a; //@line 1974 "arraymodule.c"
        var $160=$159; //@line 1974 "arraymodule.c"
        HEAP[$160]=$158; //@line 1974 "arraymodule.c"
        var $161=$a; //@line 1974 "arraymodule.c"
        var $162=$161; //@line 1974 "arraymodule.c"
        var $163=HEAP[$162]; //@line 1974 "arraymodule.c"
        var $164=($163)==0; //@line 1974 "arraymodule.c"
        if ($164) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1974 "arraymodule.c"
      case 43: // $bb44
        var $165=$a; //@line 1974 "arraymodule.c"
        var $166=$165+4; //@line 1974 "arraymodule.c"
        var $167=HEAP[$166]; //@line 1974 "arraymodule.c"
        var $168=$167+24; //@line 1974 "arraymodule.c"
        var $169=HEAP[$168]; //@line 1974 "arraymodule.c"
        var $170=$a; //@line 1974 "arraymodule.c"
        FUNCTION_TABLE[$169]($170); //@line 1974 "arraymodule.c"
        __label__ = 44; break; //@line 1974 "arraymodule.c"
      case 44: // $bb45
        $0=0; //@line 1975 "arraymodule.c"
        __label__ = 74; break; //@line 1975 "arraymodule.c"
      case 45: // $bb46
        var $171=$155; //@line 1977 "arraymodule.c"
        var $172=$t_initial; //@line 1977 "arraymodule.c"
        var $173=_array_fromstring($171, $172); //@line 1977 "arraymodule.c"
        $v42=$173; //@line 1977 "arraymodule.c"
        var $174=$t_initial; //@line 1979 "arraymodule.c"
        var $175=$174; //@line 1979 "arraymodule.c"
        var $176=HEAP[$175]; //@line 1979 "arraymodule.c"
        var $177=($176) - 1; //@line 1979 "arraymodule.c"
        var $178=$t_initial; //@line 1979 "arraymodule.c"
        var $179=$178; //@line 1979 "arraymodule.c"
        HEAP[$179]=$177; //@line 1979 "arraymodule.c"
        var $180=$t_initial; //@line 1979 "arraymodule.c"
        var $181=$180; //@line 1979 "arraymodule.c"
        var $182=HEAP[$181]; //@line 1979 "arraymodule.c"
        var $183=($182)==0; //@line 1979 "arraymodule.c"
        if ($183) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 1979 "arraymodule.c"
      case 46: // $bb47
        var $184=$t_initial; //@line 1979 "arraymodule.c"
        var $185=$184+4; //@line 1979 "arraymodule.c"
        var $186=HEAP[$185]; //@line 1979 "arraymodule.c"
        var $187=$186+24; //@line 1979 "arraymodule.c"
        var $188=HEAP[$187]; //@line 1979 "arraymodule.c"
        var $189=$t_initial; //@line 1979 "arraymodule.c"
        FUNCTION_TABLE[$188]($189); //@line 1979 "arraymodule.c"
        __label__ = 47; break; //@line 1979 "arraymodule.c"
      case 47: // $bb48
        var $190=$v42; //@line 1980 "arraymodule.c"
        var $191=($190)==0; //@line 1980 "arraymodule.c"
        if ($191) { __label__ = 48; break; } else { __label__ = 51; break; } //@line 1980 "arraymodule.c"
      case 48: // $bb49
        var $192=$a; //@line 1981 "arraymodule.c"
        var $193=$192; //@line 1981 "arraymodule.c"
        var $194=HEAP[$193]; //@line 1981 "arraymodule.c"
        var $195=($194) - 1; //@line 1981 "arraymodule.c"
        var $196=$a; //@line 1981 "arraymodule.c"
        var $197=$196; //@line 1981 "arraymodule.c"
        HEAP[$197]=$195; //@line 1981 "arraymodule.c"
        var $198=$a; //@line 1981 "arraymodule.c"
        var $199=$198; //@line 1981 "arraymodule.c"
        var $200=HEAP[$199]; //@line 1981 "arraymodule.c"
        var $201=($200)==0; //@line 1981 "arraymodule.c"
        if ($201) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 1981 "arraymodule.c"
      case 49: // $bb50
        var $202=$a; //@line 1981 "arraymodule.c"
        var $203=$202+4; //@line 1981 "arraymodule.c"
        var $204=HEAP[$203]; //@line 1981 "arraymodule.c"
        var $205=$204+24; //@line 1981 "arraymodule.c"
        var $206=HEAP[$205]; //@line 1981 "arraymodule.c"
        var $207=$a; //@line 1981 "arraymodule.c"
        FUNCTION_TABLE[$206]($207); //@line 1981 "arraymodule.c"
        __label__ = 50; break; //@line 1981 "arraymodule.c"
      case 50: // $bb51
        $0=0; //@line 1982 "arraymodule.c"
        __label__ = 74; break; //@line 1982 "arraymodule.c"
      case 51: // $bb52
        var $208=$v42; //@line 1984 "arraymodule.c"
        var $209=$208; //@line 1984 "arraymodule.c"
        var $210=HEAP[$209]; //@line 1984 "arraymodule.c"
        var $211=($210) - 1; //@line 1984 "arraymodule.c"
        var $212=$v42; //@line 1984 "arraymodule.c"
        var $213=$212; //@line 1984 "arraymodule.c"
        HEAP[$213]=$211; //@line 1984 "arraymodule.c"
        var $214=$v42; //@line 1984 "arraymodule.c"
        var $215=$214; //@line 1984 "arraymodule.c"
        var $216=HEAP[$215]; //@line 1984 "arraymodule.c"
        var $217=($216)==0; //@line 1984 "arraymodule.c"
        if ($217) { __label__ = 52; break; } else { __label__ = 61; break; } //@line 1984 "arraymodule.c"
      case 52: // $bb53
        var $218=$v42; //@line 1984 "arraymodule.c"
        var $219=$218+4; //@line 1984 "arraymodule.c"
        var $220=HEAP[$219]; //@line 1984 "arraymodule.c"
        var $221=$220+24; //@line 1984 "arraymodule.c"
        var $222=HEAP[$221]; //@line 1984 "arraymodule.c"
        var $223=$v42; //@line 1984 "arraymodule.c"
        FUNCTION_TABLE[$222]($223); //@line 1984 "arraymodule.c"
        __label__ = 61; break; //@line 1984 "arraymodule.c"
      case 53: // $bb55
        var $224=($_pr)!=0; //@line 1986 "arraymodule.c"
        if ($224) { __label__ = 54; break; } else { __label__ = 61; break; } //@line 1986 "arraymodule.c"
      case 54: // $bb56
        var $225=HEAP[$initial]; //@line 1986 "arraymodule.c"
        var $226=$225+4; //@line 1986 "arraymodule.c"
        var $227=HEAP[$226]; //@line 1986 "arraymodule.c"
        var $228=$227+84; //@line 1986 "arraymodule.c"
        var $229=HEAP[$228]; //@line 1986 "arraymodule.c"
        var $230=($229) & 268435456; //@line 1986 "arraymodule.c"
        var $231=($230)!=0; //@line 1986 "arraymodule.c"
        if ($231) { __label__ = 55; break; } else { __label__ = 61; break; } //@line 1986 "arraymodule.c"
      case 55: // $bb57
        var $232=HEAP[$initial]; //@line 1987 "arraymodule.c"
        var $233=$232; //@line 1987 "arraymodule.c"
        var $234=$233+8; //@line 1987 "arraymodule.c"
        var $235=HEAP[$234]; //@line 1987 "arraymodule.c"
        var $236=($235) * 2; //@line 1987 "arraymodule.c"
        $n=$236; //@line 1987 "arraymodule.c"
        var $237=$n; //@line 1988 "arraymodule.c"
        var $238=($237) > 0; //@line 1988 "arraymodule.c"
        if ($238) { __label__ = 56; break; } else { __label__ = 61; break; } //@line 1988 "arraymodule.c"
      case 56: // $bb58
        var $239=$a; //@line 1989 "arraymodule.c"
        var $240=$239; //@line 1989 "arraymodule.c"
        $self=$240; //@line 1989 "arraymodule.c"
        var $241=$self; //@line 1990 "arraymodule.c"
        var $242=$241+12; //@line 1990 "arraymodule.c"
        var $243=HEAP[$242]; //@line 1990 "arraymodule.c"
        $item=$243; //@line 1990 "arraymodule.c"
        var $244=$n; //@line 1991 "arraymodule.c"
        var $245=$item; //@line 1991 "arraymodule.c"
        var $246=_PyMem_Realloc($245, $244); //@line 1991 "arraymodule.c"
        $item=$246; //@line 1991 "arraymodule.c"
        var $247=$item; //@line 1992 "arraymodule.c"
        var $248=($247)==0; //@line 1992 "arraymodule.c"
        if ($248) { __label__ = 57; break; } else { __label__ = 60; break; } //@line 1992 "arraymodule.c"
      case 57: // $bb59
        var $249=_PyErr_NoMemory(); //@line 1993 "arraymodule.c"
        var $250=$a; //@line 1994 "arraymodule.c"
        var $251=$250; //@line 1994 "arraymodule.c"
        var $252=HEAP[$251]; //@line 1994 "arraymodule.c"
        var $253=($252) - 1; //@line 1994 "arraymodule.c"
        var $254=$a; //@line 1994 "arraymodule.c"
        var $255=$254; //@line 1994 "arraymodule.c"
        HEAP[$255]=$253; //@line 1994 "arraymodule.c"
        var $256=$a; //@line 1994 "arraymodule.c"
        var $257=$256; //@line 1994 "arraymodule.c"
        var $258=HEAP[$257]; //@line 1994 "arraymodule.c"
        var $259=($258)==0; //@line 1994 "arraymodule.c"
        if ($259) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 1994 "arraymodule.c"
      case 58: // $bb60
        var $260=$a; //@line 1994 "arraymodule.c"
        var $261=$260+4; //@line 1994 "arraymodule.c"
        var $262=HEAP[$261]; //@line 1994 "arraymodule.c"
        var $263=$262+24; //@line 1994 "arraymodule.c"
        var $264=HEAP[$263]; //@line 1994 "arraymodule.c"
        var $265=$a; //@line 1994 "arraymodule.c"
        FUNCTION_TABLE[$264]($265); //@line 1994 "arraymodule.c"
        __label__ = 59; break; //@line 1994 "arraymodule.c"
      case 59: // $bb61
        $0=0; //@line 1995 "arraymodule.c"
        __label__ = 74; break; //@line 1995 "arraymodule.c"
      case 60: // $bb62
        var $266=$self; //@line 1997 "arraymodule.c"
        var $267=$266+12; //@line 1997 "arraymodule.c"
        var $268=$item; //@line 1997 "arraymodule.c"
        HEAP[$267]=$268; //@line 1997 "arraymodule.c"
        var $269=$self; //@line 1998 "arraymodule.c"
        var $270=$269; //@line 1998 "arraymodule.c"
        var $271=$n; //@line 1998 "arraymodule.c"
        var $272=Math.floor(($271)/2); //@line 1998 "arraymodule.c"
        var $273=$270+8; //@line 1998 "arraymodule.c"
        HEAP[$273]=$272; //@line 1998 "arraymodule.c"
        var $274=$n; //@line 1999 "arraymodule.c"
        var $275=HEAP[$initial]; //@line 1999 "arraymodule.c"
        var $276=$275; //@line 1999 "arraymodule.c"
        var $277=$276+12; //@line 1999 "arraymodule.c"
        var $278=HEAP[$277]; //@line 1999 "arraymodule.c"
        var $279=$item; //@line 1999 "arraymodule.c"
        var $280=$278; //@line 1999 "arraymodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($279, $280, $274, 1, 0); //@line 1999 "arraymodule.c"
        var $281=$self; //@line 2000 "arraymodule.c"
        var $282=$281; //@line 2000 "arraymodule.c"
        var $283=$282+8; //@line 2000 "arraymodule.c"
        var $284=HEAP[$283]; //@line 2000 "arraymodule.c"
        var $285=$self; //@line 2000 "arraymodule.c"
        var $286=$285+16; //@line 2000 "arraymodule.c"
        HEAP[$286]=$284; //@line 2000 "arraymodule.c"
        __label__ = 61; break; //@line 2000 "arraymodule.c"
      case 61: // $bb63
        var $287=$it; //@line 2004 "arraymodule.c"
        var $288=($287)!=0; //@line 2004 "arraymodule.c"
        if ($288) { __label__ = 62; break; } else { __label__ = 70; break; } //@line 2004 "arraymodule.c"
      case 62: // $bb64
        var $289=$a; //@line 2005 "arraymodule.c"
        var $290=$289; //@line 2005 "arraymodule.c"
        var $291=$it; //@line 2005 "arraymodule.c"
        var $292=_array_iter_extend($290, $291); //@line 2005 "arraymodule.c"
        var $293=($292)==-1; //@line 2005 "arraymodule.c"
        var $294=$it; //@line 2006 "arraymodule.c"
        var $295=$294; //@line 2006 "arraymodule.c"
        var $296=HEAP[$295]; //@line 2006 "arraymodule.c"
        var $297=($296) - 1; //@line 2006 "arraymodule.c"
        var $298=$it; //@line 2006 "arraymodule.c"
        var $299=$298; //@line 2006 "arraymodule.c"
        HEAP[$299]=$297; //@line 2006 "arraymodule.c"
        var $300=$it; //@line 2006 "arraymodule.c"
        var $301=$300; //@line 2006 "arraymodule.c"
        var $302=HEAP[$301]; //@line 2006 "arraymodule.c"
        var $303=($302)==0; //@line 2006 "arraymodule.c"
        if ($293) { __label__ = 63; break; } else { __label__ = 68; break; } //@line 2005 "arraymodule.c"
      case 63: // $bb65
        if ($303) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 2006 "arraymodule.c"
      case 64: // $bb66
        var $304=$it; //@line 2006 "arraymodule.c"
        var $305=$304+4; //@line 2006 "arraymodule.c"
        var $306=HEAP[$305]; //@line 2006 "arraymodule.c"
        var $307=$306+24; //@line 2006 "arraymodule.c"
        var $308=HEAP[$307]; //@line 2006 "arraymodule.c"
        var $309=$it; //@line 2006 "arraymodule.c"
        FUNCTION_TABLE[$308]($309); //@line 2006 "arraymodule.c"
        __label__ = 65; break; //@line 2006 "arraymodule.c"
      case 65: // $bb67
        var $310=$a; //@line 2007 "arraymodule.c"
        var $311=$310; //@line 2007 "arraymodule.c"
        var $312=HEAP[$311]; //@line 2007 "arraymodule.c"
        var $313=($312) - 1; //@line 2007 "arraymodule.c"
        var $314=$a; //@line 2007 "arraymodule.c"
        var $315=$314; //@line 2007 "arraymodule.c"
        HEAP[$315]=$313; //@line 2007 "arraymodule.c"
        var $316=$a; //@line 2007 "arraymodule.c"
        var $317=$316; //@line 2007 "arraymodule.c"
        var $318=HEAP[$317]; //@line 2007 "arraymodule.c"
        var $319=($318)==0; //@line 2007 "arraymodule.c"
        if ($319) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 2007 "arraymodule.c"
      case 66: // $bb68
        var $320=$a; //@line 2007 "arraymodule.c"
        var $321=$320+4; //@line 2007 "arraymodule.c"
        var $322=HEAP[$321]; //@line 2007 "arraymodule.c"
        var $323=$322+24; //@line 2007 "arraymodule.c"
        var $324=HEAP[$323]; //@line 2007 "arraymodule.c"
        var $325=$a; //@line 2007 "arraymodule.c"
        FUNCTION_TABLE[$324]($325); //@line 2007 "arraymodule.c"
        __label__ = 67; break; //@line 2007 "arraymodule.c"
      case 67: // $bb69
        $0=0; //@line 2008 "arraymodule.c"
        __label__ = 74; break; //@line 2008 "arraymodule.c"
      case 68: // $bb70
        if ($303) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 2010 "arraymodule.c"
      case 69: // $bb71
        var $326=$it; //@line 2010 "arraymodule.c"
        var $327=$326+4; //@line 2010 "arraymodule.c"
        var $328=HEAP[$327]; //@line 2010 "arraymodule.c"
        var $329=$328+24; //@line 2010 "arraymodule.c"
        var $330=HEAP[$329]; //@line 2010 "arraymodule.c"
        var $331=$it; //@line 2010 "arraymodule.c"
        FUNCTION_TABLE[$330]($331); //@line 2010 "arraymodule.c"
        __label__ = 70; break; //@line 2010 "arraymodule.c"
      case 70: // $bb72
        var $332=$a; //@line 2012 "arraymodule.c"
        $0=$332; //@line 2012 "arraymodule.c"
        __label__ = 74; break; //@line 2012 "arraymodule.c"
      case 71: // $bb73
        var $333=$descr; //@line 1939 "arraymodule.c"
        var $334=$333+16; //@line 1939 "arraymodule.c"
        $descr=$334; //@line 1939 "arraymodule.c"
        __label__ = 72; break; //@line 1939 "arraymodule.c"
      case 72: // $bb74
        var $335=$descr; //@line 1939 "arraymodule.c"
        var $336=$335; //@line 1939 "arraymodule.c"
        var $337=HEAP[$336]; //@line 1939 "arraymodule.c"
        var $338=($337)!=0; //@line 1939 "arraymodule.c"
        if ($338) { __label__ = 15; break; } else { __label__ = 73; break; } //@line 1939 "arraymodule.c"
      case 73: // $bb75
        var $339=HEAP[_PyExc_ValueError]; //@line 2015 "arraymodule.c"
        _PyErr_SetString($339, __str84); //@line 2015 "arraymodule.c"
        $0=0; //@line 2017 "arraymodule.c"
        __label__ = 74; break; //@line 2017 "arraymodule.c"
      case 74: // $bb76
        var $340=$0; //@line 1921 "arraymodule.c"
        $retval=$340; //@line 1921 "arraymodule.c"
        var $retval77=$retval; //@line 1921 "arraymodule.c"
        STACKTOP = __stackBase__;
        return $retval77; //@line 1921 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _array_iter($ao) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $ao_addr;
        var $retval;
        var $0;
        var $it;
        $ao_addr=$ao;
        var $1=$ao_addr; //@line 2148 "arraymodule.c"
        var $2=$1; //@line 2148 "arraymodule.c"
        var $3=$2+4; //@line 2148 "arraymodule.c"
        var $4=HEAP[$3]; //@line 2148 "arraymodule.c"
        var $5=($4)!=(_Arraytype); //@line 2148 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2148 "arraymodule.c"
      case 1: // $bb
        var $6=$ao_addr; //@line 2148 "arraymodule.c"
        var $7=$6; //@line 2148 "arraymodule.c"
        var $8=$7+4; //@line 2148 "arraymodule.c"
        var $9=HEAP[$8]; //@line 2148 "arraymodule.c"
        var $10=_PyType_IsSubtype($9, _Arraytype); //@line 2148 "arraymodule.c"
        var $11=($10)==0; //@line 2148 "arraymodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2148 "arraymodule.c"
      case 2: // $bb1
        __PyErr_BadInternalCall(__str15, 2149); //@line 2149 "arraymodule.c"
        $0=0; //@line 2150 "arraymodule.c"
        __label__ = 6; break; //@line 2150 "arraymodule.c"
      case 3: // $bb2
        var $12=__PyObject_GC_New(_PyArrayIter_Type); //@line 2153 "arraymodule.c"
        var $13=$12; //@line 2153 "arraymodule.c"
        $it=$13; //@line 2153 "arraymodule.c"
        var $14=($13)==0; //@line 2154 "arraymodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2154 "arraymodule.c"
      case 4: // $bb3
        $0=0; //@line 2155 "arraymodule.c"
        __label__ = 6; break; //@line 2155 "arraymodule.c"
      case 5: // $bb4
        var $15=$ao_addr; //@line 2157 "arraymodule.c"
        var $16=$15; //@line 2157 "arraymodule.c"
        var $17=$16; //@line 2157 "arraymodule.c"
        var $18=HEAP[$17]; //@line 2157 "arraymodule.c"
        var $19=($18) + 1; //@line 2157 "arraymodule.c"
        var $20=$16; //@line 2157 "arraymodule.c"
        HEAP[$20]=$19; //@line 2157 "arraymodule.c"
        var $21=$it; //@line 2158 "arraymodule.c"
        var $22=$21+12; //@line 2158 "arraymodule.c"
        var $23=$ao_addr; //@line 2158 "arraymodule.c"
        HEAP[$22]=$23; //@line 2158 "arraymodule.c"
        var $24=$it; //@line 2159 "arraymodule.c"
        var $25=$24+8; //@line 2159 "arraymodule.c"
        HEAP[$25]=0; //@line 2159 "arraymodule.c"
        var $26=$ao_addr; //@line 2160 "arraymodule.c"
        var $27=$26+20; //@line 2160 "arraymodule.c"
        var $28=HEAP[$27]; //@line 2160 "arraymodule.c"
        var $29=$28+8; //@line 2160 "arraymodule.c"
        var $30=HEAP[$29]; //@line 2160 "arraymodule.c"
        var $31=$it; //@line 2160 "arraymodule.c"
        var $32=$31+16; //@line 2160 "arraymodule.c"
        HEAP[$32]=$30; //@line 2160 "arraymodule.c"
        var $33=$it; //@line 2161 "arraymodule.c"
        var $34=$33; //@line 2161 "arraymodule.c"
        _PyObject_GC_Track($34); //@line 2161 "arraymodule.c"
        var $35=$it; //@line 2162 "arraymodule.c"
        var $36=$35; //@line 2162 "arraymodule.c"
        $0=$36; //@line 2162 "arraymodule.c"
        __label__ = 6; break; //@line 2162 "arraymodule.c"
      case 6: // $bb5
        var $37=$0; //@line 2150 "arraymodule.c"
        $retval=$37; //@line 2150 "arraymodule.c"
        var $retval6=$retval; //@line 2150 "arraymodule.c"
        ;
        return $retval6; //@line 2150 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _arrayiter_next($it) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $it_addr;
        var $retval;
        var $0;
        $it_addr=$it;
        var $1=$it_addr; //@line 2168 "arraymodule.c"
        var $2=$1; //@line 2168 "arraymodule.c"
        var $3=$2+4; //@line 2168 "arraymodule.c"
        var $4=HEAP[$3]; //@line 2168 "arraymodule.c"
        var $5=($4)!=(_PyArrayIter_Type); //@line 2168 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2168 "arraymodule.c"
      case 1: // $bb
        var $6=$it_addr; //@line 2168 "arraymodule.c"
        var $7=$6; //@line 2168 "arraymodule.c"
        var $8=$7+4; //@line 2168 "arraymodule.c"
        var $9=HEAP[$8]; //@line 2168 "arraymodule.c"
        var $10=_PyType_IsSubtype($9, _PyArrayIter_Type); //@line 2168 "arraymodule.c"
        var $11=($10)==0; //@line 2168 "arraymodule.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2168 "arraymodule.c"
      case 2: // $bb1
        ___assert_fail(__str86, __str15, 2168, ___PRETTY_FUNCTION___11388); //@line 2168 "arraymodule.c"
        throw "Reached an unreachable!" //@line 2168 "arraymodule.c"
      case 3: // $bb2
        var $12=$it_addr; //@line 2169 "arraymodule.c"
        var $13=$12+8; //@line 2169 "arraymodule.c"
        var $14=HEAP[$13]; //@line 2169 "arraymodule.c"
        var $15=$it_addr; //@line 2169 "arraymodule.c"
        var $16=$15+12; //@line 2169 "arraymodule.c"
        var $17=HEAP[$16]; //@line 2169 "arraymodule.c"
        var $18=$17; //@line 2169 "arraymodule.c"
        var $19=$18+8; //@line 2169 "arraymodule.c"
        var $20=HEAP[$19]; //@line 2169 "arraymodule.c"
        var $21=($14) < ($20); //@line 2169 "arraymodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2169 "arraymodule.c"
      case 4: // $bb3
        var $22=$it_addr; //@line 2170 "arraymodule.c"
        var $23=$22+16; //@line 2170 "arraymodule.c"
        var $24=HEAP[$23]; //@line 2170 "arraymodule.c"
        var $25=$it_addr; //@line 2170 "arraymodule.c"
        var $26=$25+8; //@line 2170 "arraymodule.c"
        var $27=HEAP[$26]; //@line 2170 "arraymodule.c"
        var $28=($27) + 1; //@line 2170 "arraymodule.c"
        var $29=$it_addr; //@line 2170 "arraymodule.c"
        var $30=$29+8; //@line 2170 "arraymodule.c"
        HEAP[$30]=$28; //@line 2170 "arraymodule.c"
        var $31=$it_addr; //@line 2170 "arraymodule.c"
        var $32=$31+12; //@line 2170 "arraymodule.c"
        var $33=HEAP[$32]; //@line 2170 "arraymodule.c"
        var $34=FUNCTION_TABLE[$24]($33, $27); //@line 2170 "arraymodule.c"
        $0=$34; //@line 2170 "arraymodule.c"
        __label__ = 6; break; //@line 2170 "arraymodule.c"
      case 5: // $bb4
        $0=0; //@line 2171 "arraymodule.c"
        __label__ = 6; break; //@line 2171 "arraymodule.c"
      case 6: // $bb5
        var $35=$0; //@line 2170 "arraymodule.c"
        $retval=$35; //@line 2170 "arraymodule.c"
        var $retval6=$retval; //@line 2170 "arraymodule.c"
        ;
        return $retval6; //@line 2170 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _arrayiter_dealloc($it) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $it_addr;
        $it_addr=$it;
        var $0=$it_addr; //@line 2177 "arraymodule.c"
        var $1=$0; //@line 2177 "arraymodule.c"
        _PyObject_GC_UnTrack($1); //@line 2177 "arraymodule.c"
        var $2=$it_addr; //@line 2178 "arraymodule.c"
        var $3=$2+12; //@line 2178 "arraymodule.c"
        var $4=HEAP[$3]; //@line 2178 "arraymodule.c"
        var $5=($4)!=0; //@line 2178 "arraymodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2178 "arraymodule.c"
      case 1: // $bb
        var $6=$it_addr; //@line 2178 "arraymodule.c"
        var $7=$6+12; //@line 2178 "arraymodule.c"
        var $8=HEAP[$7]; //@line 2178 "arraymodule.c"
        var $9=$8; //@line 2178 "arraymodule.c"
        var $10=$9; //@line 2178 "arraymodule.c"
        var $11=HEAP[$10]; //@line 2178 "arraymodule.c"
        var $12=($11) - 1; //@line 2178 "arraymodule.c"
        var $13=$9; //@line 2178 "arraymodule.c"
        HEAP[$13]=$12; //@line 2178 "arraymodule.c"
        var $14=$9; //@line 2178 "arraymodule.c"
        var $15=HEAP[$14]; //@line 2178 "arraymodule.c"
        var $16=($15)==0; //@line 2178 "arraymodule.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2178 "arraymodule.c"
      case 2: // $bb1
        var $17=$it_addr; //@line 2178 "arraymodule.c"
        var $18=$17+12; //@line 2178 "arraymodule.c"
        var $19=HEAP[$18]; //@line 2178 "arraymodule.c"
        var $20=$19; //@line 2178 "arraymodule.c"
        var $21=$20+4; //@line 2178 "arraymodule.c"
        var $22=HEAP[$21]; //@line 2178 "arraymodule.c"
        var $23=$22+24; //@line 2178 "arraymodule.c"
        var $24=HEAP[$23]; //@line 2178 "arraymodule.c"
        var $25=$it_addr; //@line 2178 "arraymodule.c"
        var $26=$25+12; //@line 2178 "arraymodule.c"
        var $27=HEAP[$26]; //@line 2178 "arraymodule.c"
        var $28=$27; //@line 2178 "arraymodule.c"
        FUNCTION_TABLE[$24]($28); //@line 2178 "arraymodule.c"
        __label__ = 3; break; //@line 2178 "arraymodule.c"
      case 3: // $bb2
        var $29=$it_addr; //@line 2179 "arraymodule.c"
        var $30=$29; //@line 2179 "arraymodule.c"
        _PyObject_GC_Del($30); //@line 2179 "arraymodule.c"
        ;
        return; //@line 2180 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _arrayiter_traverse($it, $visit, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $it_addr;
        var $visit_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $vret;
        $it_addr=$it;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$it_addr; //@line 2185 "arraymodule.c"
        var $2=$1+12; //@line 2185 "arraymodule.c"
        var $3=HEAP[$2]; //@line 2185 "arraymodule.c"
        var $4=($3)!=0; //@line 2185 "arraymodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2185 "arraymodule.c"
      case 1: // $bb
        var $5=$it_addr; //@line 2185 "arraymodule.c"
        var $6=$5+12; //@line 2185 "arraymodule.c"
        var $7=HEAP[$6]; //@line 2185 "arraymodule.c"
        var $8=$7; //@line 2185 "arraymodule.c"
        var $9=$visit_addr; //@line 2185 "arraymodule.c"
        var $10=$arg_addr; //@line 2185 "arraymodule.c"
        var $11=FUNCTION_TABLE[$9]($8, $10); //@line 2185 "arraymodule.c"
        $vret=$11; //@line 2185 "arraymodule.c"
        var $12=$vret; //@line 2185 "arraymodule.c"
        var $13=($12)!=0; //@line 2185 "arraymodule.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2185 "arraymodule.c"
      case 2: // $bb1
        var $14=$vret; //@line 2185 "arraymodule.c"
        $0=$14; //@line 2185 "arraymodule.c"
        __label__ = 4; break; //@line 2185 "arraymodule.c"
      case 3: // $bb2
        $0=0; //@line 2186 "arraymodule.c"
        __label__ = 4; break; //@line 2186 "arraymodule.c"
      case 4: // $bb3
        var $15=$0; //@line 2185 "arraymodule.c"
        $retval=$15; //@line 2185 "arraymodule.c"
        var $retval4=$retval; //@line 2185 "arraymodule.c"
        ;
        return $retval4; //@line 2185 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initarray() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        HEAP[_Arraytype+4]=_PyType_Type; //@line 2235 "arraymodule.c"
        HEAP[_PyArrayIter_Type+4]=_PyType_Type; //@line 2236 "arraymodule.c"
        var $0=_Py_InitModule4(__str88, _a_methods, _module_doc, 0, 1013); //@line 2237 "arraymodule.c"
        $m=$0; //@line 2237 "arraymodule.c"
        var $1=$m; //@line 2238 "arraymodule.c"
        var $2=($1)==0; //@line 2238 "arraymodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 2238 "arraymodule.c"
      case 1: // $bb
        var $3=HEAP[_Arraytype]; //@line 2241 "arraymodule.c"
        var $4=($3) + 1; //@line 2241 "arraymodule.c"
        HEAP[_Arraytype]=$4; //@line 2241 "arraymodule.c"
        var $5=$m; //@line 2242 "arraymodule.c"
        var $6=_PyModule_AddObject($5, __str89, _Arraytype); //@line 2242 "arraymodule.c"
        var $7=HEAP[_Arraytype]; //@line 2243 "arraymodule.c"
        var $8=($7) + 1; //@line 2243 "arraymodule.c"
        HEAP[_Arraytype]=$8; //@line 2243 "arraymodule.c"
        var $9=$m; //@line 2244 "arraymodule.c"
        var $10=_PyModule_AddObject($9, __str88, _Arraytype); //@line 2244 "arraymodule.c"
        __label__ = 2; break; //@line 2244 "arraymodule.c"
      case 2: // $return
        ;
        return; //@line 2239 "arraymodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initarray"] = _initarray;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_c_getitem,0,_c_setitem,0,_b_getitem,0,_b_setitem,0,_BB_getitem,0,_BB_setitem,0,_u_getitem,0,_u_setitem,0,_h_getitem,0,_h_setitem,0,_HH_getitem,0,_HH_setitem,0,_i_getitem,0,_i_setitem,0,_II_getitem,0,_II_setitem,0,_l_getitem,0,_l_setitem,0,_LL_getitem,0,_LL_setitem,0,_f_getitem,0,_f_setitem,0,_d_getitem,0,_d_setitem,0,_array_get_typecode,0,_array_get_itemsize,0,_array_append,0,_array_buffer_info,0,_array_byteswap,0,_array_copy,0,_array_count,0,_array_extend,0,_array_fromfile,0,_array_fromlist,0,_array_fromstring,0,_array_fromunicode,0,_array_index,0,_array_insert,0,_array_pop,0,_array_fromfile_as_read,0,_array_reduce,0,_array_remove,0,_array_reverse,0,_array_tofile,0,_array_tolist,0,_array_tostring,0,_array_tounicode,0,_array_tofile_as_write,0,_array_length,0,_array_subscr,0,_array_ass_subscr,0,_array_concat,0,_array_repeat,0,_array_item,0,_array_slice,0,_array_ass_item,0,_array_ass_slice,0,_array_contains,0,_array_inplace_concat,0,_array_inplace_repeat,0,_array_buffer_getreadbuf,0,_array_buffer_getwritebuf,0,_array_buffer_getsegcount,0,_array_dealloc,0,_array_repr,0,_PyObject_GenericGetAttr,0,_array_richcompare,0,_array_iter,0,_PyType_GenericAlloc,0,_array_new,0,_PyObject_Free,0,_arrayiter_dealloc,0,_arrayiter_traverse,0,_PyObject_SelfIter,0,_arrayiter_next,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([99,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,99,104,97,114,0] /* c;array item must be */, "i8", ALLOC_NORMAL);
__str1=allocate([104,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* h;array item must be */, "i8", ALLOC_NORMAL);
__str2=allocate([115,105,103,110,101,100,32,99,104,97,114,32,105,115,32,108,101,115,115,32,116,104,97,110,32,109,105,110,105,109,117,109,0] /* signed char is less  */, "i8", ALLOC_NORMAL);
__str3=allocate([115,105,103,110,101,100,32,99,104,97,114,32,105,115,32,103,114,101,97,116,101,114,32,116,104,97,110,32,109,97,120,105,109,117,109,0] /* signed char is great */, "i8", ALLOC_NORMAL);
__str4=allocate([98,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* b;array item must be */, "i8", ALLOC_NORMAL);
__str5=allocate([117,35,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,117,110,105,99,111,100,101,32,99,104,97,114,97,99,116,101,114,0] /* u#;array item must b */, "i8", ALLOC_NORMAL);
__str6=allocate([97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,117,110,105,99,111,100,101,32,99,104,97,114,97,99,116,101,114,0] /* array item must be u */, "i8", ALLOC_NORMAL);
__str7=allocate([105,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* i;array item must be */, "i8", ALLOC_NORMAL);
__str8=allocate([117,110,115,105,103,110,101,100,32,115,104,111,114,116,32,105,115,32,108,101,115,115,32,116,104,97,110,32,109,105,110,105,109,117,109,0] /* unsigned short is le */, "i8", ALLOC_NORMAL);
__str9=allocate([117,110,115,105,103,110,101,100,32,115,104,111,114,116,32,105,115,32,103,114,101,97,116,101,114,32,116,104,97,110,32,109,97,120,105,109,117,109,0] /* unsigned short is gr */, "i8", ALLOC_NORMAL);
__str10=allocate([108,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* l;array item must be */, "i8", ALLOC_NORMAL);
__str11=allocate([117,110,115,105,103,110,101,100,32,105,110,116,32,105,115,32,108,101,115,115,32,116,104,97,110,32,109,105,110,105,109,117,109,0] /* unsigned int is less */, "i8", ALLOC_NORMAL);
__str12=allocate([117,110,115,105,103,110,101,100,32,108,111,110,103,32,105,115,32,108,101,115,115,32,116,104,97,110,32,109,105,110,105,109,117,109,0] /* unsigned long is les */, "i8", ALLOC_NORMAL);
__str13=allocate([102,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,102,108,111,97,116,0] /* f;array item must be */, "i8", ALLOC_NORMAL);
__str14=allocate([100,59,97,114,114,97,121,32,105,116,101,109,32,109,117,115,116,32,98,101,32,102,108,111,97,116,0] /* d;array item must be */, "i8", ALLOC_NORMAL);
_descriptors=allocate([99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 117, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 104, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 72, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 102, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.arrayobject*, i32)*",0,0,0,"i32 (%struct.arrayobject*, i32, %struct.PyObject*)*",0,0,0], ALLOC_NORMAL);
__str15=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,97,114,114,97,121,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/a */, "i8", ALLOC_NORMAL);
__str16=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,111,112,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,65,114,114,97,121,116,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,111,112,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,65,114,114,97,121,116,121,112,101,41,41,41,0] /* ((((PyObject_)(op))- */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8858=allocate([103,101,116,97,114,114,97,121,105,116,101,109,0] /* getarrayitem\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([105,62,61,48,32,38,38,32,105,60,40,40,40,80,121,86,97,114,79,98,106,101,99,116,42,41,40,97,112,41,41,45,62,111,98,95,115,105,122,101,41,0] /* i>=0 && i<(((PyVarOb */, "i8", ALLOC_NORMAL);
__str18=allocate([97,114,114,97,121,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* array index out of r */, "i8", ALLOC_NORMAL);
_copy_doc=allocate([99,111,112,121,40,97,114,114,97,121,41,10,10,32,82,101,116,117,114,110,32,97,32,99,111,112,121,32,111,102,32,116,104,101,32,97,114,114,97,121,46,0] /* copy(array)\0A\0A Re */, "i8", ALLOC_NORMAL);
__str19=allocate([99,97,110,32,111,110,108,121,32,97,112,112,101,110,100,32,97,114,114,97,121,32,40,110,111,116,32,34,37,46,50,48,48,115,34,41,32,116,111,32,97,114,114,97,121,0] /* can only append arra */, "i8", ALLOC_NORMAL);
__str20=allocate([99,97,110,32,111,110,108,121,32,97,115,115,105,103,110,32,97,114,114,97,121,32,40,110,111,116,32,34,37,46,50,48,48,115,34,41,32,116,111,32,97,114,114,97,121,32,115,108,105,99,101,0] /* can only assign arra */, "i8", ALLOC_NORMAL);
__str21=allocate([97,114,114,97,121,32,97,115,115,105,103,110,109,101,110,116,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* array assignment ind */, "i8", ALLOC_NORMAL);
__str22=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,97,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,65,114,114,97,121,116,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,97,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,65,114,114,97,121,116,121,112,101,41,41,41,0] /* ((((PyObject_)(a))-> */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9470=allocate([115,101,116,97,114,114,97,121,105,116,101,109,0] /* setarrayitem\00 */, "i8", ALLOC_NORMAL);
__str23=allocate([99,97,110,32,111,110,108,121,32,101,120,116,101,110,100,32,119,105,116,104,32,97,114,114,97,121,32,111,102,32,115,97,109,101,32,107,105,110,100,0] /* can only extend with */, "i8", ALLOC_NORMAL);
__str24=allocate([99,97,110,32,111,110,108,121,32,101,120,116,101,110,100,32,97,114,114,97,121,32,119,105,116,104,32,97,114,114,97,121,32,40,110,111,116,32,34,37,46,50,48,48,115,34,41,0] /* can only extend arra */, "i8", ALLOC_NORMAL);
_count_doc=allocate([99,111,117,110,116,40,120,41,10,10,82,101,116,117,114,110,32,110,117,109,98,101,114,32,111,102,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,120,32,105,110,32,116,104,101,32,97,114,114,97,121,46,0] /* count(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
__str25=allocate([97,114,114,97,121,46,105,110,100,101,120,40,120,41,58,32,120,32,110,111,116,32,105,110,32,108,105,115,116,0] /* array.index(x): x no */, "i8", ALLOC_NORMAL);
_index_doc=allocate([105,110,100,101,120,40,120,41,10,10,82,101,116,117,114,110,32,105,110,100,101,120,32,111,102,32,102,105,114,115,116,32,111,99,99,117,114,114,101,110,99,101,32,111,102,32,120,32,105,110,32,116,104,101,32,97,114,114,97,121,46,0] /* index(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
__str26=allocate([97,114,114,97,121,46,114,101,109,111,118,101,40,120,41,58,32,120,32,110,111,116,32,105,110,32,108,105,115,116,0] /* array.remove(x): x n */, "i8", ALLOC_NORMAL);
_remove_doc=allocate([114,101,109,111,118,101,40,120,41,10,10,82,101,109,111,118,101,32,116,104,101,32,102,105,114,115,116,32,111,99,99,117,114,114,101,110,99,101,32,111,102,32,120,32,105,110,32,116,104,101,32,97,114,114,97,121,46,0] /* remove(x)\0A\0ARemov */, "i8", ALLOC_NORMAL);
__str27=allocate([124,110,58,112,111,112,0] /* |n:pop\00 */, "i8", ALLOC_NORMAL);
__str28=allocate([112,111,112,32,102,114,111,109,32,101,109,112,116,121,32,97,114,114,97,121,0] /* pop from empty array */, "i8", ALLOC_NORMAL);
__str29=allocate([112,111,112,32,105,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* pop index out of ran */, "i8", ALLOC_NORMAL);
_pop_doc=allocate([112,111,112,40,91,105,93,41,10,10,82,101,116,117,114,110,32,116,104,101,32,105,45,116,104,32,101,108,101,109,101,110,116,32,97,110,100,32,100,101,108,101,116,101,32,105,116,32,102,114,111,109,32,116,104,101,32,97,114,114,97,121,46,32,105,32,100,101,102,97,117,108,116,115,32,116,111,32,45,49,46,0] /* pop([i])\0A\0AReturn */, "i8", ALLOC_NORMAL);
_extend_doc=allocate([101,120,116,101,110,100,40,97,114,114,97,121,32,111,114,32,105,116,101,114,97,98,108,101,41,10,10,32,65,112,112,101,110,100,32,105,116,101,109,115,32,116,111,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,32,97,114,114,97,121,46,0] /* extend(array or iter */, "i8", ALLOC_NORMAL);
__str30=allocate([110,79,58,105,110,115,101,114,116,0] /* nO:insert\00 */, "i8", ALLOC_NORMAL);
_insert_doc=allocate([105,110,115,101,114,116,40,105,44,120,41,10,10,73,110,115,101,114,116,32,97,32,110,101,119,32,105,116,101,109,32,120,32,105,110,116,111,32,116,104,101,32,97,114,114,97,121,32,98,101,102,111,114,101,32,112,111,115,105,116,105,111,110,32,105,46,0] /* insert(i,x)\0A\0AIns */, "i8", ALLOC_NORMAL);
_buffer_info_doc=allocate([98,117,102,102,101,114,95,105,110,102,111,40,41,32,45,62,32,40,97,100,100,114,101,115,115,44,32,108,101,110,103,116,104,41,10,10,82,101,116,117,114,110,32,97,32,116,117,112,108,101,32,40,97,100,100,114,101,115,115,44,32,108,101,110,103,116,104,41,32,103,105,118,105,110,103,32,116,104,101,32,99,117,114,114,101,110,116,32,109,101,109,111,114,121,32,97,100,100,114,101,115,115,32,97,110,100,10,116,104,101,32,108,101,110,103,116,104,32,105,110,32,105,116,101,109,115,32,111,102,32,116,104,101,32,98,117,102,102,101,114,32,117,115,101,100,32,116,111,32,104,111,108,100,32,97,114,114,97,121,39,115,32,99,111,110,116,101,110,116,115,10,84,104,101,32,108,101,110,103,116,104,32,115,104,111,117,108,100,32,98,101,32,109,117,108,116,105,112,108,105,101,100,32,98,121,32,116,104,101,32,105,116,101,109,115,105,122,101,32,97,116,116,114,105,98,117,116,101,32,116,111,32,99,97,108,99,117,108,97,116,101,10,116,104,101,32,98,117,102,102,101,114,32,108,101,110,103,116,104,32,105,110,32,98,121,116,101,115,46,0] /* buffer_info() -> (ad */, "i8", ALLOC_NORMAL);
_append_doc=allocate([97,112,112,101,110,100,40,120,41,10,10,65,112,112,101,110,100,32,110,101,119,32,118,97,108,117,101,32,120,32,116,111,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,32,97,114,114,97,121,46,0] /* append(x)\0A\0AAppen */, "i8", ALLOC_NORMAL);
__str31=allocate([100,111,110,39,116,32,107,110,111,119,32,104,111,119,32,116,111,32,98,121,116,101,115,119,97,112,32,116,104,105,115,32,97,114,114,97,121,32,116,121,112,101,0] /* don't know how to by */, "i8", ALLOC_NORMAL);
_byteswap_doc=allocate([98,121,116,101,115,119,97,112,40,41,10,10,66,121,116,101,115,119,97,112,32,97,108,108,32,105,116,101,109,115,32,111,102,32,116,104,101,32,97,114,114,97,121,46,32,32,73,102,32,116,104,101,32,105,116,101,109,115,32,105,110,32,116,104,101,32,97,114,114,97,121,32,97,114,101,32,110,111,116,32,49,44,32,50,44,10,52,44,32,111,114,32,56,32,98,121,116,101,115,32,105,110,32,115,105,122,101,44,32,82,117,110,116,105,109,101,69,114,114,111,114,32,105,115,32,114,97,105,115,101,100,46,0] /* byteswap()\0A\0AByte */, "i8", ALLOC_NORMAL);
__str32=allocate([40,115,105,122,101,95,116,41,105,116,101,109,115,105,122,101,32,60,61,32,115,105,122,101,111,102,40,116,109,112,41,0] /* (size_t)itemsize <=  */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10009=allocate([97,114,114,97,121,95,114,101,118,101,114,115,101,0] /* array_reverse\00 */, "i8", ALLOC_NORMAL);
_reverse_doc=allocate([114,101,118,101,114,115,101,40,41,10,10,82,101,118,101,114,115,101,32,116,104,101,32,111,114,100,101,114,32,111,102,32,116,104,101,32,105,116,101,109,115,32,105,110,32,116,104,101,32,97,114,114,97,121,46,0] /* reverse()\0A\0ARever */, "i8", ALLOC_NORMAL);
__str33=allocate([79,110,58,102,114,111,109,102,105,108,101,0] /* On:fromfile\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([97,114,103,49,32,109,117,115,116,32,98,101,32,111,112,101,110,32,102,105,108,101,0] /* arg1 must be open fi */, "i8", ALLOC_NORMAL);
__str35=allocate([110,111,116,32,101,110,111,117,103,104,32,105,116,101,109,115,32,105,110,32,102,105,108,101,0] /* not enough items in  */, "i8", ALLOC_NORMAL);
_fromfile_doc=allocate([102,114,111,109,102,105,108,101,40,102,44,32,110,41,10,10,82,101,97,100,32,110,32,111,98,106,101,99,116,115,32,102,114,111,109,32,116,104,101,32,102,105,108,101,32,111,98,106,101,99,116,32,102,32,97,110,100,32,97,112,112,101,110,100,32,116,104,101,109,32,116,111,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,10,97,114,114,97,121,46,32,32,65,108,115,111,32,99,97,108,108,101,100,32,97,115,32,114,101,97,100,46,0] /* fromfile(f, n)\0A\0A */, "i8", ALLOC_NORMAL);
__str36=allocate([97,114,114,97,121,46,114,101,97,100,40,41,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,97,114,114,97,121,46,102,114,111,109,102,105,108,101,40,41,0] /* array.read() not sup */, "i8", ALLOC_NORMAL);
__str37=allocate([97,114,103,32,109,117,115,116,32,98,101,32,111,112,101,110,32,102,105,108,101,0] /* arg must be open fil */, "i8", ALLOC_NORMAL);
_tofile_doc=allocate([116,111,102,105,108,101,40,102,41,10,10,87,114,105,116,101,32,97,108,108,32,105,116,101,109,115,32,40,97,115,32,109,97,99,104,105,110,101,32,118,97,108,117,101,115,41,32,116,111,32,116,104,101,32,102,105,108,101,32,111,98,106,101,99,116,32,102,46,32,32,65,108,115,111,32,99,97,108,108,101,100,32,97,115,10,119,114,105,116,101,46,0] /* tofile(f)\0A\0AWrite */, "i8", ALLOC_NORMAL);
__str38=allocate([97,114,114,97,121,46,119,114,105,116,101,40,41,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,105,110,32,51,46,120,59,32,117,115,101,32,97,114,114,97,121,46,116,111,102,105,108,101,40,41,0] /* array.write() not su */, "i8", ALLOC_NORMAL);
__str39=allocate([97,114,103,32,109,117,115,116,32,98,101,32,108,105,115,116,0] /* arg must be list\00 */, "i8", ALLOC_NORMAL);
_fromlist_doc=allocate([102,114,111,109,108,105,115,116,40,108,105,115,116,41,10,10,65,112,112,101,110,100,32,105,116,101,109,115,32,116,111,32,97,114,114,97,121,32,102,114,111,109,32,108,105,115,116,46,0] /* fromlist(list)\0A\0A */, "i8", ALLOC_NORMAL);
_tolist_doc=allocate([116,111,108,105,115,116,40,41,32,45,62,32,108,105,115,116,10,10,67,111,110,118,101,114,116,32,97,114,114,97,121,32,116,111,32,97,110,32,111,114,100,105,110,97,114,121,32,108,105,115,116,32,119,105,116,104,32,116,104,101,32,115,97,109,101,32,105,116,101,109,115,46,0] /* tolist() -> list\0A\ */, "i8", ALLOC_NORMAL);
__str40=allocate([115,35,58,102,114,111,109,115,116,114,105,110,103,0] /* s#:fromstring\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([115,116,114,105,110,103,32,108,101,110,103,116,104,32,110,111,116,32,97,32,109,117,108,116,105,112,108,101,32,111,102,32,105,116,101,109,32,115,105,122,101,0] /* string length not a  */, "i8", ALLOC_NORMAL);
_fromstring_doc=allocate([102,114,111,109,115,116,114,105,110,103,40,115,116,114,105,110,103,41,10,10,65,112,112,101,110,100,115,32,105,116,101,109,115,32,102,114,111,109,32,116,104,101,32,115,116,114,105,110,103,44,32,105,110,116,101,114,112,114,101,116,105,110,103,32,105,116,32,97,115,32,97,110,32,97,114,114,97,121,32,111,102,32,109,97,99,104,105,110,101,10,118,97,108,117,101,115,44,97,115,32,105,102,32,105,116,32,104,97,100,32,98,101,101,110,32,114,101,97,100,32,102,114,111,109,32,97,32,102,105,108,101,32,117,115,105,110,103,32,116,104,101,32,102,114,111,109,102,105,108,101,40,41,32,109,101,116,104,111,100,41,46,0] /* fromstring(string)\0 */, "i8", ALLOC_NORMAL);
_tostring_doc=allocate([116,111,115,116,114,105,110,103,40,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,116,104,101,32,97,114,114,97,121,32,116,111,32,97,110,32,97,114,114,97,121,32,111,102,32,109,97,99,104,105,110,101,32,118,97,108,117,101,115,32,97,110,100,32,114,101,116,117,114,110,32,116,104,101,32,115,116,114,105,110,103,10,114,101,112,114,101,115,101,110,116,97,116,105,111,110,46,0] /* tostring() -> string */, "i8", ALLOC_NORMAL);
__str42=allocate([117,35,58,102,114,111,109,117,110,105,99,111,100,101,0] /* u#:fromunicode\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([102,114,111,109,117,110,105,99,111,100,101,40,41,32,109,97,121,32,111,110,108,121,32,98,101,32,99,97,108,108,101,100,32,111,110,32,116,121,112,101,32,39,117,39,32,97,114,114,97,121,115,0] /* fromunicode() may on */, "i8", ALLOC_NORMAL);
_fromunicode_doc=allocate([102,114,111,109,117,110,105,99,111,100,101,40,117,115,116,114,41,10,10,69,120,116,101,110,100,115,32,116,104,105,115,32,97,114,114,97,121,32,119,105,116,104,32,100,97,116,97,32,102,114,111,109,32,116,104,101,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,32,117,115,116,114,46,10,84,104,101,32,97,114,114,97,121,32,109,117,115,116,32,98,101,32,97,32,116,121,112,101,32,39,117,39,32,97,114,114,97,121,59,32,111,116,104,101,114,119,105,115,101,32,97,32,86,97,108,117,101,69,114,114,111,114,10,105,115,32,114,97,105,115,101,100,46,32,32,85,115,101,32,97,114,114,97,121,46,102,114,111,109,115,116,114,105,110,103,40,117,115,116,114,46,100,101,99,111,100,101,40,46,46,46,41,41,32,116,111,10,97,112,112,101,110,100,32,85,110,105,99,111,100,101,32,100,97,116,97,32,116,111,32,97,110,32,97,114,114,97,121,32,111,102,32,115,111,109,101,32,111,116,104,101,114,32,116,121,112,101,46,0] /* fromunicode(ustr)\0A */, "i8", ALLOC_NORMAL);
__str44=allocate([116,111,117,110,105,99,111,100,101,40,41,32,109,97,121,32,111,110,108,121,32,98,101,32,99,97,108,108,101,100,32,111,110,32,116,121,112,101,32,39,117,39,32,97,114,114,97,121,115,0] /* tounicode() may only */, "i8", ALLOC_NORMAL);
_tounicode_doc=allocate([116,111,117,110,105,99,111,100,101,40,41,32,45,62,32,117,110,105,99,111,100,101,10,10,67,111,110,118,101,114,116,32,116,104,101,32,97,114,114,97,121,32,116,111,32,97,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,46,32,32,84,104,101,32,97,114,114,97,121,32,109,117,115,116,32,98,101,10,97,32,116,121,112,101,32,39,117,39,32,97,114,114,97,121,59,32,111,116,104,101,114,119,105,115,101,32,97,32,86,97,108,117,101,69,114,114,111,114,32,105,115,32,114,97,105,115,101,100,46,32,32,85,115,101,10,97,114,114,97,121,46,116,111,115,116,114,105,110,103,40,41,46,100,101,99,111,100,101,40,41,32,116,111,32,111,98,116,97,105,110,32,97,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,32,102,114,111,109,10,97,110,32,97,114,114,97,121,32,111,102,32,115,111,109,101,32,111,116,104,101,114,32,116,121,112,101,46,0] /* tounicode() -> unico */, "i8", ALLOC_NORMAL);
__str45=allocate([95,95,100,105,99,116,95,95,0] /* __dict__\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([79,40,99,79,41,79,0] /* O(cO)O\00 */, "i8", ALLOC_NORMAL);
_reduce_doc=allocate([82,101,116,117,114,110,32,115,116,97,116,101,32,105,110,102,111,114,109,97,116,105,111,110,32,102,111,114,32,112,105,99,107,108,105,110,103,46,0] /* Return state informa */, "i8", ALLOC_NORMAL);
__str47=allocate([116,121,112,101,99,111,100,101,0] /* typecode\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([116,104,101,32,116,121,112,101,99,111,100,101,32,99,104,97,114,97,99,116,101,114,32,117,115,101,100,32,116,111,32,99,114,101,97,116,101,32,116,104,101,32,97,114,114,97,121,0] /* the typecode charact */, "i8", ALLOC_NORMAL);
__str49=allocate([105,116,101,109,115,105,122,101,0] /* itemsize\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([116,104,101,32,115,105,122,101,44,32,105,110,32,98,121,116,101,115,44,32,111,102,32,111,110,101,32,97,114,114,97,121,32,105,116,101,109,0] /* the size, in bytes,  */, "i8", ALLOC_NORMAL);
_array_getsets=allocate(60, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, i8*)*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str51=allocate([97,112,112,101,110,100,0] /* append\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([98,117,102,102,101,114,95,105,110,102,111,0] /* buffer_info\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([98,121,116,101,115,119,97,112,0] /* byteswap\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([95,95,99,111,112,121,95,95,0] /* __copy__\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([99,111,117,110,116,0] /* count\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([95,95,100,101,101,112,99,111,112,121,95,95,0] /* __deepcopy__\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([101,120,116,101,110,100,0] /* extend\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([102,114,111,109,102,105,108,101,0] /* fromfile\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([102,114,111,109,108,105,115,116,0] /* fromlist\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([102,114,111,109,115,116,114,105,110,103,0] /* fromstring\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([102,114,111,109,117,110,105,99,111,100,101,0] /* fromunicode\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([105,110,100,101,120,0] /* index\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([105,110,115,101,114,116,0] /* insert\00 */, "i8", ALLOC_NORMAL);
__str64=allocate([112,111,112,0] /* pop\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([114,101,97,100,0] /* read\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([95,95,114,101,100,117,99,101,95,95,0] /* __reduce__\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([114,101,109,111,118,101,0] /* remove\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([114,101,118,101,114,115,101,0] /* reverse\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([116,111,102,105,108,101,0] /* tofile\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([116,111,108,105,115,116,0] /* tolist\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([116,111,115,116,114,105,110,103,0] /* tostring\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([116,111,117,110,105,99,111,100,101,0] /* tounicode\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([119,114,105,116,101,0] /* write\00 */, "i8", ALLOC_NORMAL);
_array_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str74=allocate([97,114,114,97,121,40,39,37,99,39,41,0] /* array('%c')\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([97,114,114,97,121,40,39,37,99,39,44,32,0] /* array('%c', \00 */, "i8", ALLOC_NORMAL);
__str76=allocate([41,0] /* )\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([97,114,114,97,121,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,115,0] /* array indices must b */, "i8", ALLOC_NORMAL);
__str78=allocate([97,114,114,97,121,32,105,110,100,105,99,101,115,32,109,117,115,116,32,98,101,32,105,110,116,101,103,101,114,0] /* array indices must b */, "i8", ALLOC_NORMAL);
__str79=allocate([97,116,116,101,109,112,116,32,116,111,32,97,115,115,105,103,110,32,97,114,114,97,121,32,111,102,32,115,105,122,101,32,37,122,100,32,116,111,32,101,120,116,101,110,100,101,100,32,115,108,105,99,101,32,111,102,32,115,105,122,101,32,37,122,100,0] /* attempt to assign ar */, "i8", ALLOC_NORMAL);
_array_as_mapping=allocate(12, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0], ALLOC_NORMAL);
__str80=allocate(1, "i8", ALLOC_NORMAL);
__str81=allocate([65,99,99,101,115,115,105,110,103,32,110,111,110,45,101,120,105,115,116,101,110,116,32,97,114,114,97,121,32,115,101,103,109,101,110,116,0] /* Accessing non-existe */, "i8", ALLOC_NORMAL);
_array_as_sequence=allocate(40, ["i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32, i32)*",0,0,0,"i32 (%struct.PyObject*, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, i32, i32, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i32)*",0,0,0], ALLOC_NORMAL);
_array_as_buffer=allocate(24, ["i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i32 (%struct.PyObject*, i32*)*",0,0,0,"i32 (%struct.PyObject*, i32, i8**)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str82=allocate([97,114,114,97,121,46,97,114,114,97,121,40,41,0] /* array.array()\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([99,124,79,58,97,114,114,97,121,0] /* c|O:array\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([98,97,100,32,116,121,112,101,99,111,100,101,32,40,109,117,115,116,32,98,101,32,99,44,32,98,44,32,66,44,32,117,44,32,104,44,32,72,44,32,105,44,32,73,44,32,108,44,32,76,44,32,102,32,111,114,32,100,41,0] /* bad typecode (must b */, "i8", ALLOC_NORMAL);
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,100,101,102,105,110,101,115,32,97,110,32,111,98,106,101,99,116,32,116,121,112,101,32,119,104,105,99,104,32,99,97,110,32,101,102,102,105,99,105,101,110,116,108,121,32,114,101,112,114,101,115,101,110,116,10,97,110,32,97,114,114,97,121,32,111,102,32,98,97,115,105,99,32,118,97,108,117,101,115,58,32,99,104,97,114,97,99,116,101,114,115,44,32,105,110,116,101,103,101,114,115,44,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,10,110,117,109,98,101,114,115,46,32,32,65,114,114,97,121,115,32,97,114,101,32,115,101,113,117,101,110,99,101,32,116,121,112,101,115,32,97,110,100,32,98,101,104,97,118,101,32,118,101,114,121,32,109,117,99,104,32,108,105,107,101,32,108,105,115,116,115,44,10,101,120,99,101,112,116,32,116,104,97,116,32,116,104,101,32,116,121,112,101,32,111,102,32,111,98,106,101,99,116,115,32,115,116,111,114,101,100,32,105,110,32,116,104,101,109,32,105,115,32,99,111,110,115,116,114,97,105,110,101,100,46,32,32,84,104,101,10,116,121,112,101,32,105,115,32,115,112,101,99,105,102,105,101,100,32,97,116,32,111,98,106,101,99,116,32,99,114,101,97,116,105,111,110,32,116,105,109,101,32,98,121,32,117,115,105,110,103,32,97,32,116,121,112,101,32,99,111,100,101,44,32,119,104,105,99,104,10,105,115,32,97,32,115,105,110,103,108,101,32,99,104,97,114,97,99,116,101,114,46,32,32,84,104,101,32,102,111,108,108,111,119,105,110,103,32,116,121,112,101,32,99,111,100,101,115,32,97,114,101,32,100,101,102,105,110,101,100,58,10,10,32,32,32,32,84,121,112,101,32,99,111,100,101,32,32,32,67,32,84,121,112,101,32,32,32,32,32,32,32,32,32,32,32,32,32,77,105,110,105,109,117,109,32,115,105,122,101,32,105,110,32,98,121,116,101,115,32,10,32,32,32,32,39,99,39,32,32,32,32,32,32,32,32,32,99,104,97,114,97,99,116,101,114,32,32,32,32,32,32,32,32,32,32,49,32,10,32,32,32,32,39,98,39,32,32,32,32,32,32,32,32,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,32,32,49,32,10,32,32,32,32,39,66,39,32,32,32,32,32,32,32,32,32,117,110,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,49,32,10,32,32,32,32,39,117,39,32,32,32,32,32,32,32,32,32,85,110,105,99,111,100,101,32,99,104,97,114,97,99,116,101,114,32,32,50,32,10,32,32,32,32,39,104,39,32,32,32,32,32,32,32,32,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,32,32,50,32,10,32,32,32,32,39,72,39,32,32,32,32,32,32,32,32,32,117,110,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,50,32,10,32,32,32,32,39,105,39,32,32,32,32,32,32,32,32,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,32,32,50,32,10,32,32,32,32,39,73,39,32,32,32,32,32,32,32,32,32,117,110,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,50,32,10,32,32,32,32,39,108,39,32,32,32,32,32,32,32,32,32,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,32,32,52,32,10,32,32,32,32,39,76,39,32,32,32,32,32,32,32,32,32,117,110,115,105,103,110,101,100,32,105,110,116,101,103,101,114,32,32,32,52,32,10,32,32,32,32,39,102,39,32,32,32,32,32,32,32,32,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,32,32,32,32,52,32,10,32,32,32,32,39,100,39,32,32,32,32,32,32,32,32,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,32,32,32,32,56,32,10,10,84,104,101,32,99,111,110,115,116,114,117,99,116,111,114,32,105,115,58,10,10,97,114,114,97,121,40,116,121,112,101,99,111,100,101,32,91,44,32,105,110,105,116,105,97,108,105,122,101,114,93,41,32,45,45,32,99,114,101,97,116,101,32,97,32,110,101,119,32,97,114,114,97,121,10,0] /* This module defines  */, "i8", ALLOC_NORMAL);
_arraytype_doc=allocate([97,114,114,97,121,40,116,121,112,101,99,111,100,101,32,91,44,32,105,110,105,116,105,97,108,105,122,101,114,93,41,32,45,62,32,97,114,114,97,121,10,10,82,101,116,117,114,110,32,97,32,110,101,119,32,97,114,114,97,121,32,119,104,111,115,101,32,105,116,101,109,115,32,97,114,101,32,114,101,115,116,114,105,99,116,101,100,32,98,121,32,116,121,112,101,99,111,100,101,44,32,97,110,100,10,105,110,105,116,105,97,108,105,122,101,100,32,102,114,111,109,32,116,104,101,32,111,112,116,105,111,110,97,108,32,105,110,105,116,105,97,108,105,122,101,114,32,118,97,108,117,101,44,32,119,104,105,99,104,32,109,117,115,116,32,98,101,32,97,32,108,105,115,116,44,10,115,116,114,105,110,103,46,32,111,114,32,105,116,101,114,97,98,108,101,32,111,118,101,114,32,101,108,101,109,101,110,116,115,32,111,102,32,116,104,101,32,97,112,112,114,111,112,114,105,97,116,101,32,116,121,112,101,46,10,10,65,114,114,97,121,115,32,114,101,112,114,101,115,101,110,116,32,98,97,115,105,99,32,118,97,108,117,101,115,32,97,110,100,32,98,101,104,97,118,101,32,118,101,114,121,32,109,117,99,104,32,108,105,107,101,32,108,105,115,116,115,44,32,101,120,99,101,112,116,10,116,104,101,32,116,121,112,101,32,111,102,32,111,98,106,101,99,116,115,32,115,116,111,114,101,100,32,105,110,32,116,104,101,109,32,105,115,32,99,111,110,115,116,114,97,105,110,101,100,46,10,10,77,101,116,104,111,100,115,58,10,10,97,112,112,101,110,100,40,41,32,45,45,32,97,112,112,101,110,100,32,97,32,110,101,119,32,105,116,101,109,32,116,111,32,116,104,101,32,101,110,100,32,111,102,32,116,104,101,32,97,114,114,97,121,10,98,117,102,102,101,114,95,105,110,102,111,40,41,32,45,45,32,114,101,116,117,114,110,32,105,110,102,111,114,109,97,116,105,111,110,32,103,105,118,105,110,103,32,116,104,101,32,99,117,114,114,101,110,116,32,109,101,109,111,114,121,32,105,110,102,111,10,98,121,116,101,115,119,97,112,40,41,32,45,45,32,98,121,116,101,115,119,97,112,32,97,108,108,32,116,104,101,32,105,116,101,109,115,32,111,102,32,116,104,101,32,97,114,114,97,121,10,99,111,117,110,116,40,41,32,45,45,32,114,101,116,117,114,110,32,110,117,109,98,101,114,32,111,102,32,111,99,99,117,114,114,101,110,99,101,115,32,111,102,32,97,110,32,111,98,106,101,99,116,10,101,120,116,101,110,100,40,41,32,45,45,32,101,120,116,101,110,100,32,97,114,114,97,121,32,98,121,32,97,112,112,101,110,100,105,110,103,32,109,117,108,116,105,112,108,101,32,101,108,101,109,101,110,116,115,32,102,114,111,109,32,97,110,32,105,116,101,114,97,98,108,101,10,102,114,111,109,102,105,108,101,40,41,32,45,45,32,114,101,97,100,32,105,116,101,109,115,32,102,114,111,109,32,97,32,102,105,108,101,32,111,98,106,101,99,116,10,102,114,111,109,108,105,115,116,40,41,32,45,45,32,97,112,112,101,110,100,32,105,116,101,109,115,32,102,114,111,109,32,116,104,101,32,108,105,115,116,10,102,114,111,109,115,116,114,105,110,103,40,41,32,45,45,32,97,112,112,101,110,100,32,105,116,101,109,115,32,102,114,111,109,32,116,104,101,32,115,116,114,105,110,103,10,105,110,100,101,120,40,41,32,45,45,32,114,101,116,117,114,110,32,105,110,100,101,120,32,111,102,32,102,105,114,115,116,32,111,99,99,117,114,114,101,110,99,101,32,111,102,32,97,110,32,111,98,106,101,99,116,10,105,110,115,101,114,116,40,41,32,45,45,32,105,110,115,101,114,116,32,97,32,110,101,119,32,105,116,101,109,32,105,110,116,111,32,116,104,101,32,97,114,114,97,121,32,97,116,32,97,32,112,114,111,118,105,100,101,100,32,112,111,115,105,116,105,111,110,10,112,111,112,40,41,32,45,45,32,114,101,109,111,118,101,32,97,110,100,32,114,101,116,117,114,110,32,105,116,101,109,32,40,100,101,102,97,117,108,116,32,108,97,115,116,41,10,114,101,97,100,40,41,32,45,45,32,68,69,80,82,69,67,65,84,69,68,44,32,117,115,101,32,102,114,111,109,102,105,108,101,40,41,10,114,101,109,111,118,101,40,41,32,45,45,32,114,101,109,111,118,101,32,102,105,114,115,116,32,111,99,99,117,114,114,101,110,99,101,32,111,102,32,97,110,32,111,98,106,101,99,116,10,114,101,118,101,114,115,101,40,41,32,45,45,32,114,101,118,101,114,115,101,32,116,104,101,32,111,114,100,101,114,32,111,102,32,116,104,101,32,105,116,101,109,115,32,105,110,32,116,104,101,32,97,114,114,97,121,10,116,111,102,105,108,101,40,41,32,45,45,32,119,114,105,116,101,32,97,108,108,32,105,116,101,109,115,32,116,111,32,97,32,102,105,108,101,32,111,98,106,101,99,116,10,116,111,108,105,115,116,40,41,32,45,45,32,114,101,116,117,114,110,32,116,104,101,32,97,114,114,97,121,32,99,111,110,118,101,114,116,101,100,32,116,111,32,97,110,32,111,114,100,105,110,97,114,121,32,108,105,115,116,10,116,111,115,116,114,105,110,103,40,41,32,45,45,32,114,101,116,117,114,110,32,116,104,101,32,97,114,114,97,121,32,99,111,110,118,101,114,116,101,100,32,116,111,32,97,32,115,116,114,105,110,103,10,119,114,105,116,101,40,41,32,45,45,32,68,69,80,82,69,67,65,84,69,68,44,32,117,115,101,32,116,111,102,105,108,101,40,41,10,10,65,116,116,114,105,98,117,116,101,115,58,10,10,116,121,112,101,99,111,100,101,32,45,45,32,116,104,101,32,116,121,112,101,99,111,100,101,32,99,104,97,114,97,99,116,101,114,32,117,115,101,100,32,116,111,32,99,114,101,97,116,101,32,116,104,101,32,97,114,114,97,121,10,105,116,101,109,115,105,122,101,32,45,45,32,116,104,101,32,108,101,110,103,116,104,32,105,110,32,98,121,116,101,115,32,111,102,32,111,110,101,32,97,114,114,97,121,32,105,116,101,109,10,0] /* array(typecode [, in */, "i8", ALLOC_NORMAL);
__str85=allocate([97,114,114,97,121,46,97,114,114,97,121,0] /* array.array\00 */, "i8", ALLOC_NORMAL);
_Arraytype=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str86=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,105,116,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,80,121,65,114,114,97,121,73,116,101,114,95,84,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,105,116,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,80,121,65,114,114,97,121,73,116,101,114,95,84,121,112,101,41,41,41,0] /* ((((PyObject_)(it))- */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___11388=allocate([97,114,114,97,121,105,116,101,114,95,110,101,120,116,0] /* arrayiter_next\00 */, "i8", ALLOC_NORMAL);
__str87=allocate([97,114,114,97,121,105,116,101,114,97,116,111,114,0] /* arrayiterator\00 */, "i8", ALLOC_NORMAL);
_PyArrayIter_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_a_methods=allocate(16, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0], ALLOC_NORMAL);
__str88=allocate([97,114,114,97,121,0] /* array\00 */, "i8", ALLOC_NORMAL);
__str89=allocate([65,114,114,97,121,84,121,112,101,0] /* ArrayType\00 */, "i8", ALLOC_NORMAL);
HEAP[_descriptors+8]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_descriptors+12]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_descriptors+24]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_descriptors+28]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_descriptors+40]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_descriptors+44]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_descriptors+56]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_descriptors+60]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_descriptors+72]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_descriptors+76]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_descriptors+88]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_descriptors+92]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_descriptors+104]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_descriptors+108]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_descriptors+120]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_descriptors+124]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_descriptors+136]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_descriptors+140]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_descriptors+152]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_descriptors+156]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_descriptors+168]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_descriptors+172]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_descriptors+184]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_descriptors+188]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_array_getsets]=__str47;
HEAP[_array_getsets+4]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_array_getsets+12]=__str48;
HEAP[_array_getsets+20]=__str49;
HEAP[_array_getsets+24]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_array_getsets+32]=__str50;
HEAP[_array_methods]=__str51;
HEAP[_array_methods+4]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_array_methods+12]=_append_doc;
HEAP[_array_methods+16]=__str52;
HEAP[_array_methods+20]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_array_methods+28]=_buffer_info_doc;
HEAP[_array_methods+32]=__str53;
HEAP[_array_methods+36]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_array_methods+44]=_byteswap_doc;
HEAP[_array_methods+48]=__str54;
HEAP[_array_methods+52]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_array_methods+60]=_copy_doc;
HEAP[_array_methods+64]=__str55;
HEAP[_array_methods+68]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_array_methods+76]=_count_doc;
HEAP[_array_methods+80]=__str56;
HEAP[_array_methods+84]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_array_methods+92]=_copy_doc;
HEAP[_array_methods+96]=__str57;
HEAP[_array_methods+100]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_array_methods+108]=_extend_doc;
HEAP[_array_methods+112]=__str58;
HEAP[_array_methods+116]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_array_methods+124]=_fromfile_doc;
HEAP[_array_methods+128]=__str59;
HEAP[_array_methods+132]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_array_methods+140]=_fromlist_doc;
HEAP[_array_methods+144]=__str60;
HEAP[_array_methods+148]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_array_methods+156]=_fromstring_doc;
HEAP[_array_methods+160]=__str61;
HEAP[_array_methods+164]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_array_methods+172]=_fromunicode_doc;
HEAP[_array_methods+176]=__str62;
HEAP[_array_methods+180]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_array_methods+188]=_index_doc;
HEAP[_array_methods+192]=__str63;
HEAP[_array_methods+196]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_array_methods+204]=_insert_doc;
HEAP[_array_methods+208]=__str64;
HEAP[_array_methods+212]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_array_methods+220]=_pop_doc;
HEAP[_array_methods+224]=__str65;
HEAP[_array_methods+228]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_array_methods+236]=_fromfile_doc;
HEAP[_array_methods+240]=__str66;
HEAP[_array_methods+244]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_array_methods+252]=_reduce_doc;
HEAP[_array_methods+256]=__str67;
HEAP[_array_methods+260]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_array_methods+268]=_remove_doc;
HEAP[_array_methods+272]=__str68;
HEAP[_array_methods+276]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_array_methods+284]=_reverse_doc;
HEAP[_array_methods+288]=__str69;
HEAP[_array_methods+292]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_array_methods+300]=_tofile_doc;
HEAP[_array_methods+304]=__str70;
HEAP[_array_methods+308]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_array_methods+316]=_tolist_doc;
HEAP[_array_methods+320]=__str71;
HEAP[_array_methods+324]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_array_methods+332]=_tostring_doc;
HEAP[_array_methods+336]=__str72;
HEAP[_array_methods+340]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_array_methods+348]=_tounicode_doc;
HEAP[_array_methods+352]=__str73;
HEAP[_array_methods+356]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_array_methods+364]=_tofile_doc;
HEAP[_array_as_mapping]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_array_as_mapping+4]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_array_as_mapping+8]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_array_as_sequence]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_array_as_sequence+4]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_array_as_sequence+8]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_array_as_sequence+12]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_array_as_sequence+16]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[_array_as_sequence+20]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[_array_as_sequence+24]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[_array_as_sequence+28]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[_array_as_sequence+32]=(FUNCTION_TABLE_OFFSET + 118);
HEAP[_array_as_sequence+36]=(FUNCTION_TABLE_OFFSET + 120);
HEAP[_array_as_buffer]=(FUNCTION_TABLE_OFFSET + 122);
HEAP[_array_as_buffer+4]=(FUNCTION_TABLE_OFFSET + 124);
HEAP[_array_as_buffer+8]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_Arraytype+12]=__str85;
HEAP[_Arraytype+24]=(FUNCTION_TABLE_OFFSET + 128);
HEAP[_Arraytype+44]=(FUNCTION_TABLE_OFFSET + 130);
HEAP[_Arraytype+52]=_array_as_sequence;
HEAP[_Arraytype+56]=_array_as_mapping;
HEAP[_Arraytype+72]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_Arraytype+80]=_array_as_buffer;
HEAP[_Arraytype+88]=_arraytype_doc;
HEAP[_Arraytype+100]=(FUNCTION_TABLE_OFFSET + 134);
HEAP[_Arraytype+108]=(FUNCTION_TABLE_OFFSET + 136);
HEAP[_Arraytype+116]=_array_methods;
HEAP[_Arraytype+124]=_array_getsets;
HEAP[_Arraytype+152]=(FUNCTION_TABLE_OFFSET + 138);
HEAP[_Arraytype+156]=(FUNCTION_TABLE_OFFSET + 140);
HEAP[_Arraytype+160]=(FUNCTION_TABLE_OFFSET + 142);
HEAP[_PyArrayIter_Type+12]=__str87;
HEAP[_PyArrayIter_Type+24]=(FUNCTION_TABLE_OFFSET + 144);
HEAP[_PyArrayIter_Type+72]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_PyArrayIter_Type+92]=(FUNCTION_TABLE_OFFSET + 146);
HEAP[_PyArrayIter_Type+108]=(FUNCTION_TABLE_OFFSET + 148);
HEAP[_PyArrayIter_Type+112]=(FUNCTION_TABLE_OFFSET + 150);

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

