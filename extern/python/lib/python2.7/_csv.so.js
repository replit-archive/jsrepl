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
  
var $1___SIZE = 8; // %1
  
var $2___SIZE = 100; // %2
  
var $3___SIZE = 20; // %3
  
var $4___SIZE = 20; // %4
  
var $5___SIZE = 100; // %5
  
var $6___SIZE = 20; // %6
  
var $7___SIZE = 196; // %7
  
var $8___SIZE = 16; // %8
  
var $9___SIZE = 60; // %9
  
var $10___SIZE = 196; // %10
  
var $11___SIZE = 48; // %11
  
var $12___SIZE = 40; // %12
  
var $13___SIZE = 128; // %13
  
var $struct_DialectObj___SIZE = 32; // %struct.DialectObj
  var $struct_DialectObj___FLATTENER = [0,4,8,12,13,14,16,20,24,28];
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct_ReaderObj___SIZE = 44; // %struct.ReaderObj
  
var $struct_StyleDesc___SIZE = 8; // %struct.StyleDesc
  
var $struct_WriterObj___SIZE = 32; // %struct.WriterObj
  
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var _field_limit;
var __str;
var __str1;
var __str2;
var __str3;
var _quote_styles;
var _dialects;
var _error_obj;
var __str4;


var __str5;
var __str6;

var __str7;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var _Dialect_memberlist;
var __str13;
var __str14;
var __str15;
var __str16;
var _Dialect_getsetlist;
var _dialect_kws;
var __str17;
var __str18;
var __str19;
var __str20;
var __str21;
var __str22;
var _Dialect_Type_doc;
var __str23;
var _Dialect_Type;
var __str24;
var __str25;
var __str26;
var __str27;
var __str28;
var __str29;
var __str30;
var _Reader_Type_doc;
var _Reader_methods;
var __str31;
var _Reader_memberlist;
var __str32;
var _Reader_Type;
var __str33;
var __str34;
var __str35;
var __str36;
var _csv_writerow_doc;
var __str37;
var __str38;
var _csv_writerows_doc;
var __str39;
var __str40;
var __str41;
var _Writer_methods;
var _Writer_memberlist;
var _Writer_Type_doc;
var __str42;
var _Writer_Type;
var __str43;
var __str44;
var __str45;
var __str46;
var __str47;
var _csv_module_doc;
var _csv_reader_doc;
var _csv_writer_doc;
var _csv_list_dialects_doc;
var _csv_get_dialect_doc;
var _csv_register_dialect_doc;
var _csv_unregister_dialect_doc;
var _csv_field_size_limit_doc;
var __str48;
var __str49;
var __str50;
var __str51;
var __str52;
var __str53;
var _csv_methods;
var __str54;
var __str55;
var __str56;
var __str57;
var __str58;
var __str59;
var __str60;
























































  function _get_dialect_from_registry($name_obj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_obj_addr;
        var $retval;
        var $0;
        var $dialect_obj;
        $name_obj_addr=$name_obj;
        var $1=HEAP[_dialects]; //@line 154 "_csv.c"
        var $2=$name_obj_addr; //@line 154 "_csv.c"
        var $3=_PyDict_GetItem($1, $2); //@line 154 "_csv.c"
        $dialect_obj=$3; //@line 154 "_csv.c"
        var $4=$dialect_obj; //@line 155 "_csv.c"
        var $5=($4)==0; //@line 155 "_csv.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 155 "_csv.c"
      case 1: // $bb
        var $6=_PyErr_Occurred(); //@line 156 "_csv.c"
        var $7=($6)==0; //@line 156 "_csv.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 156 "_csv.c"
      case 2: // $bb1
        var $8=HEAP[_error_obj]; //@line 157 "_csv.c"
        var $9=_PyErr_Format($8, __str4, allocate(1, "i32", ALLOC_STACK)); //@line 157 "_csv.c"
        __label__ = 4; break; //@line 157 "_csv.c"
      case 3: // $bb3
        var $10=$dialect_obj; //@line 160 "_csv.c"
        var $11=$10; //@line 160 "_csv.c"
        var $12=HEAP[$11]; //@line 160 "_csv.c"
        var $13=($12) + 1; //@line 160 "_csv.c"
        var $14=$dialect_obj; //@line 160 "_csv.c"
        var $15=$14; //@line 160 "_csv.c"
        HEAP[$15]=$13; //@line 160 "_csv.c"
        __label__ = 4; break; //@line 160 "_csv.c"
      case 4: // $bb4
        var $16=$dialect_obj; //@line 161 "_csv.c"
        $0=$16; //@line 161 "_csv.c"
        var $17=$0; //@line 161 "_csv.c"
        $retval=$17; //@line 161 "_csv.c"
        var $retval5=$retval; //@line 161 "_csv.c"
        ;
        return $retval5; //@line 161 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_string($str) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $str_addr;
        var $retval;
        var $0;
        $str_addr=$str;
        var $1=$str_addr; //@line 167 "_csv.c"
        var $2=($1)!=0; //@line 167 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 167 "_csv.c"
      case 1: // $bb
        var $3=$str_addr; //@line 167 "_csv.c"
        var $4=$3; //@line 167 "_csv.c"
        var $5=HEAP[$4]; //@line 167 "_csv.c"
        var $6=($5) + 1; //@line 167 "_csv.c"
        var $7=$str_addr; //@line 167 "_csv.c"
        var $8=$7; //@line 167 "_csv.c"
        HEAP[$8]=$6; //@line 167 "_csv.c"
        __label__ = 2; break; //@line 167 "_csv.c"
      case 2: // $bb1
        var $9=$str_addr; //@line 168 "_csv.c"
        $0=$9; //@line 168 "_csv.c"
        var $10=$0; //@line 168 "_csv.c"
        $retval=$10; //@line 168 "_csv.c"
        var $retval2=$retval; //@line 168 "_csv.c"
        ;
        return $retval2; //@line 168 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _get_nullchar_as_None($c) {
    var __stackBase__  = STACKTOP; STACKTOP += 1; _memset(__stackBase__, 0, 1);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $c_addr=__stackBase__;
        var $retval;
        var $0;
        HEAP[$c_addr]=$c;
        var $1=HEAP[$c_addr]; //@line 174 "_csv.c"
        var $2=($1)==0; //@line 174 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 174 "_csv.c"
      case 1: // $bb
        var $3=HEAP[__Py_NoneStruct]; //@line 175 "_csv.c"
        var $4=($3) + 1; //@line 175 "_csv.c"
        HEAP[__Py_NoneStruct]=$4; //@line 175 "_csv.c"
        $0=__Py_NoneStruct; //@line 176 "_csv.c"
        __label__ = 3; break; //@line 176 "_csv.c"
      case 2: // $bb1
        var $5=_PyString_FromStringAndSize($c_addr, 1); //@line 179 "_csv.c"
        $0=$5; //@line 179 "_csv.c"
        __label__ = 3; break; //@line 179 "_csv.c"
      case 3: // $bb2
        var $6=$0; //@line 176 "_csv.c"
        $retval=$6; //@line 176 "_csv.c"
        var $retval3=$retval; //@line 176 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval3; //@line 176 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Dialect_get_lineterminator($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 185 "_csv.c"
    var $2=$1+20; //@line 185 "_csv.c"
    var $3=HEAP[$2]; //@line 185 "_csv.c"
    var $4=_get_string($3); //@line 185 "_csv.c"
    $0=$4; //@line 185 "_csv.c"
    var $5=$0; //@line 185 "_csv.c"
    $retval=$5; //@line 185 "_csv.c"
    var $retval1=$retval; //@line 185 "_csv.c"
    ;
    return $retval1; //@line 185 "_csv.c"
  }
  

  function _Dialect_get_escapechar($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 191 "_csv.c"
    var $2=$1+14; //@line 191 "_csv.c"
    var $3=HEAP[$2]; //@line 191 "_csv.c"
    var $4=($3); //@line 191 "_csv.c"
    var $5=((($4)) & 255); //@line 191 "_csv.c"
    var $6=_get_nullchar_as_None($5); //@line 191 "_csv.c"
    $0=$6; //@line 191 "_csv.c"
    var $7=$0; //@line 191 "_csv.c"
    $retval=$7; //@line 191 "_csv.c"
    var $retval1=$retval; //@line 191 "_csv.c"
    ;
    return $retval1; //@line 191 "_csv.c"
  }
  

  function _Dialect_get_quotechar($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 197 "_csv.c"
    var $2=$1+13; //@line 197 "_csv.c"
    var $3=HEAP[$2]; //@line 197 "_csv.c"
    var $4=($3); //@line 197 "_csv.c"
    var $5=((($4)) & 255); //@line 197 "_csv.c"
    var $6=_get_nullchar_as_None($5); //@line 197 "_csv.c"
    $0=$6; //@line 197 "_csv.c"
    var $7=$0; //@line 197 "_csv.c"
    $retval=$7; //@line 197 "_csv.c"
    var $retval1=$retval; //@line 197 "_csv.c"
    ;
    return $retval1; //@line 197 "_csv.c"
  }
  

  function _Dialect_get_quoting($self) {
    ;
    var __label__;
  
    var $self_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    var $1=$self_addr; //@line 203 "_csv.c"
    var $2=$1+24; //@line 203 "_csv.c"
    var $3=HEAP[$2]; //@line 203 "_csv.c"
    var $4=_PyInt_FromLong($3); //@line 203 "_csv.c"
    $0=$4; //@line 203 "_csv.c"
    var $5=$0; //@line 203 "_csv.c"
    $retval=$5; //@line 203 "_csv.c"
    var $retval1=$retval; //@line 203 "_csv.c"
    ;
    return $retval1; //@line 203 "_csv.c"
  }
  

  function __set_bool($name, $target, $src, $dflt) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr;
        var $target_addr;
        var $src_addr;
        var $dflt_addr;
        var $retval;
        var $0;
        $name_addr=$name;
        $target_addr=$target;
        $src_addr=$src;
        $dflt_addr=$dflt;
        var $1=$src_addr; //@line 209 "_csv.c"
        var $2=($1)==0; //@line 209 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 209 "_csv.c"
      case 1: // $bb
        var $3=$target_addr; //@line 210 "_csv.c"
        var $4=$dflt_addr; //@line 210 "_csv.c"
        HEAP[$3]=$4; //@line 210 "_csv.c"
        __label__ = 3; break; //@line 210 "_csv.c"
      case 2: // $bb1
        var $5=$src_addr; //@line 212 "_csv.c"
        var $6=_PyObject_IsTrue($5); //@line 212 "_csv.c"
        var $7=$target_addr; //@line 212 "_csv.c"
        HEAP[$7]=$6; //@line 212 "_csv.c"
        __label__ = 3; break; //@line 212 "_csv.c"
      case 3: // $bb2
        $0=0; //@line 213 "_csv.c"
        var $8=$0; //@line 213 "_csv.c"
        $retval=$8; //@line 213 "_csv.c"
        var $retval3=$retval; //@line 213 "_csv.c"
        ;
        return $retval3; //@line 213 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __set_int($target, $src) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr;
        var $target_addr;
        var $src_addr;
        var $dflt_addr;
        var $retval;
        var $0;
        $name_addr=__str16;
        $target_addr=$target;
        $src_addr=$src;
        $dflt_addr=0;
        var $1=$src_addr; //@line 219 "_csv.c"
        var $2=($1)==0; //@line 219 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 219 "_csv.c"
      case 1: // $bb
        var $3=$target_addr; //@line 220 "_csv.c"
        var $4=$dflt_addr; //@line 220 "_csv.c"
        HEAP[$3]=$4; //@line 220 "_csv.c"
        __label__ = 5; break; //@line 220 "_csv.c"
      case 2: // $bb1
        var $5=$src_addr; //@line 222 "_csv.c"
        var $6=$5+4; //@line 222 "_csv.c"
        var $7=HEAP[$6]; //@line 222 "_csv.c"
        var $8=$7+84; //@line 222 "_csv.c"
        var $9=HEAP[$8]; //@line 222 "_csv.c"
        var $10=($9) & 8388608; //@line 222 "_csv.c"
        var $11=($10)==0; //@line 222 "_csv.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 222 "_csv.c"
      case 3: // $bb2
        var $12=HEAP[_PyExc_TypeError]; //@line 223 "_csv.c"
        var $13=$name_addr; //@line 223 "_csv.c"
        var $14=_PyErr_Format($12, __str5, allocate([$13,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 223 "_csv.c"
        $0=-1; //@line 225 "_csv.c"
        __label__ = 6; break; //@line 225 "_csv.c"
      case 4: // $bb3
        var $15=$src_addr; //@line 227 "_csv.c"
        var $16=_PyInt_AsLong($15); //@line 227 "_csv.c"
        var $17=$target_addr; //@line 227 "_csv.c"
        HEAP[$17]=$16; //@line 227 "_csv.c"
        __label__ = 5; break; //@line 227 "_csv.c"
      case 5: // $bb4
        $0=0; //@line 229 "_csv.c"
        __label__ = 6; break; //@line 229 "_csv.c"
      case 6: // $bb5
        var $18=$0; //@line 225 "_csv.c"
        $retval=$18; //@line 225 "_csv.c"
        var $retval6=$retval; //@line 225 "_csv.c"
        ;
        return $retval6; //@line 225 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __set_char($name, $target, $src, $dflt) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr;
        var $target_addr;
        var $src_addr;
        var $dflt_addr;
        var $retval;
        var $0;
        var $s;
        $name_addr=$name;
        $target_addr=$target;
        $src_addr=$src;
        $dflt_addr=$dflt;
        var $1=$src_addr; //@line 235 "_csv.c"
        var $2=($1)==0; //@line 235 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 235 "_csv.c"
      case 1: // $bb
        var $3=$target_addr; //@line 236 "_csv.c"
        var $4=$dflt_addr; //@line 236 "_csv.c"
        HEAP[$3]=$4; //@line 236 "_csv.c"
        __label__ = 11; break; //@line 236 "_csv.c"
      case 2: // $bb1
        var $5=$src_addr; //@line 238 "_csv.c"
        var $6=($5)==(__Py_NoneStruct); //@line 238 "_csv.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 238 "_csv.c"
      case 3: // $bb2
        var $7=$src_addr; //@line 238 "_csv.c"
        var $8=_PyString_Size($7); //@line 238 "_csv.c"
        var $9=($8)==0; //@line 238 "_csv.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 238 "_csv.c"
      case 4: // $bb3
        var $10=$target_addr; //@line 239 "_csv.c"
        HEAP[$10]=0; //@line 239 "_csv.c"
        __label__ = 11; break; //@line 239 "_csv.c"
      case 5: // $bb4
        var $11=$src_addr; //@line 240 "_csv.c"
        var $12=$11+4; //@line 240 "_csv.c"
        var $13=HEAP[$12]; //@line 240 "_csv.c"
        var $14=$13+84; //@line 240 "_csv.c"
        var $15=HEAP[$14]; //@line 240 "_csv.c"
        var $16=($15) & 134217728; //@line 240 "_csv.c"
        var $17=($16)==0; //@line 240 "_csv.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 240 "_csv.c"
      case 6: // $bb5
        var $18=$src_addr; //@line 240 "_csv.c"
        var $19=_PyString_Size($18); //@line 240 "_csv.c"
        var $20=($19)!=1; //@line 240 "_csv.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 240 "_csv.c"
      case 7: // $bb6
        var $21=HEAP[_PyExc_TypeError]; //@line 241 "_csv.c"
        var $22=$name_addr; //@line 241 "_csv.c"
        var $23=_PyErr_Format($21, __str6, allocate([$22,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 241 "_csv.c"
        $0=-1; //@line 244 "_csv.c"
        __label__ = 12; break; //@line 244 "_csv.c"
      case 8: // $bb7
        var $24=$src_addr; //@line 247 "_csv.c"
        var $25=_PyString_AsString($24); //@line 247 "_csv.c"
        $s=$25; //@line 247 "_csv.c"
        var $26=$s; //@line 248 "_csv.c"
        var $27=($26)==0; //@line 248 "_csv.c"
        if ($27) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 248 "_csv.c"
      case 9: // $bb8
        $0=-1; //@line 249 "_csv.c"
        __label__ = 12; break; //@line 249 "_csv.c"
      case 10: // $bb9
        var $28=$s; //@line 250 "_csv.c"
        var $29=$28; //@line 250 "_csv.c"
        var $30=HEAP[$29]; //@line 250 "_csv.c"
        var $31=$target_addr; //@line 250 "_csv.c"
        HEAP[$31]=$30; //@line 250 "_csv.c"
        __label__ = 11; break; //@line 250 "_csv.c"
      case 11: // $bb10
        $0=0; //@line 253 "_csv.c"
        __label__ = 12; break; //@line 253 "_csv.c"
      case 12: // $bb11
        var $32=$0; //@line 244 "_csv.c"
        $retval=$32; //@line 244 "_csv.c"
        var $retval12=$retval; //@line 244 "_csv.c"
        ;
        return $retval12; //@line 244 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __set_str($target, $src) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr;
        var $target_addr;
        var $src_addr;
        var $dflt_addr;
        var $retval;
        var $0;
        $name_addr=__str14;
        $target_addr=$target;
        $src_addr=$src;
        $dflt_addr=__str19;
        var $1=$src_addr; //@line 259 "_csv.c"
        var $2=($1)==0; //@line 259 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 259 "_csv.c"
      case 1: // $bb
        var $3=$dflt_addr; //@line 260 "_csv.c"
        var $4=_PyString_FromString($3); //@line 260 "_csv.c"
        var $5=$target_addr; //@line 260 "_csv.c"
        HEAP[$5]=$4; //@line 260 "_csv.c"
        __label__ = 11; break; //@line 260 "_csv.c"
      case 2: // $bb1
        var $6=$src_addr; //@line 262 "_csv.c"
        var $7=($6)==(__Py_NoneStruct); //@line 262 "_csv.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 262 "_csv.c"
      case 3: // $bb2
        var $8=$target_addr; //@line 263 "_csv.c"
        HEAP[$8]=0; //@line 263 "_csv.c"
        __label__ = 11; break; //@line 263 "_csv.c"
      case 4: // $bb3
        var $9=$src_addr; //@line 264 "_csv.c"
        var $10=$9+4; //@line 264 "_csv.c"
        var $11=HEAP[$10]; //@line 264 "_csv.c"
        var $12=($11)==(_PyBaseString_Type); //@line 264 "_csv.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 264 "_csv.c"
      case 5: // $bb4
        var $13=$src_addr; //@line 264 "_csv.c"
        var $14=$13+4; //@line 264 "_csv.c"
        var $15=HEAP[$14]; //@line 264 "_csv.c"
        var $16=_PyType_IsSubtype($15, _PyBaseString_Type); //@line 264 "_csv.c"
        var $17=($16)!=0; //@line 264 "_csv.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 264 "_csv.c"
      case 6: // $bb5
        var $18=HEAP[_PyExc_TypeError]; //@line 265 "_csv.c"
        var $19=$name_addr; //@line 265 "_csv.c"
        var $20=_PyErr_Format($18, __str7, allocate([$19,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 265 "_csv.c"
        $0=-1; //@line 267 "_csv.c"
        __label__ = 12; break; //@line 267 "_csv.c"
      case 7: // $bb6
        var $21=$target_addr; //@line 270 "_csv.c"
        var $22=HEAP[$21]; //@line 270 "_csv.c"
        var $23=($22)!=0; //@line 270 "_csv.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 270 "_csv.c"
      case 8: // $bb7
        var $24=$target_addr; //@line 270 "_csv.c"
        var $25=HEAP[$24]; //@line 270 "_csv.c"
        var $26=$25; //@line 270 "_csv.c"
        var $27=HEAP[$26]; //@line 270 "_csv.c"
        var $28=($27) - 1; //@line 270 "_csv.c"
        var $29=$25; //@line 270 "_csv.c"
        HEAP[$29]=$28; //@line 270 "_csv.c"
        var $30=$25; //@line 270 "_csv.c"
        var $31=HEAP[$30]; //@line 270 "_csv.c"
        var $32=($31)==0; //@line 270 "_csv.c"
        if ($32) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 270 "_csv.c"
      case 9: // $bb8
        var $33=$target_addr; //@line 270 "_csv.c"
        var $34=HEAP[$33]; //@line 270 "_csv.c"
        var $35=$34+4; //@line 270 "_csv.c"
        var $36=HEAP[$35]; //@line 270 "_csv.c"
        var $37=$36+24; //@line 270 "_csv.c"
        var $38=HEAP[$37]; //@line 270 "_csv.c"
        var $39=$target_addr; //@line 270 "_csv.c"
        var $40=HEAP[$39]; //@line 270 "_csv.c"
        FUNCTION_TABLE[$38]($40); //@line 270 "_csv.c"
        __label__ = 10; break; //@line 270 "_csv.c"
      case 10: // $bb9
        var $41=$src_addr; //@line 271 "_csv.c"
        var $42=$41; //@line 271 "_csv.c"
        var $43=HEAP[$42]; //@line 271 "_csv.c"
        var $44=($43) + 1; //@line 271 "_csv.c"
        var $45=$src_addr; //@line 271 "_csv.c"
        var $46=$45; //@line 271 "_csv.c"
        HEAP[$46]=$44; //@line 271 "_csv.c"
        var $47=$target_addr; //@line 272 "_csv.c"
        var $48=$src_addr; //@line 272 "_csv.c"
        HEAP[$47]=$48; //@line 272 "_csv.c"
        __label__ = 11; break; //@line 272 "_csv.c"
      case 11: // $bb10
        $0=0; //@line 275 "_csv.c"
        __label__ = 12; break; //@line 275 "_csv.c"
      case 12: // $bb11
        var $49=$0; //@line 267 "_csv.c"
        $retval=$49; //@line 267 "_csv.c"
        var $retval12=$retval; //@line 267 "_csv.c"
        ;
        return $retval12; //@line 267 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dialect_check_quoting($quoting) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $quoting_addr;
        var $retval;
        var $0;
        var $qs;
        $quoting_addr=$quoting;
        $qs=_quote_styles; //@line 283 "_csv.c"
        __label__ = 4; break; //@line 283 "_csv.c"
      case 1: // $bb
        var $1=$qs; //@line 284 "_csv.c"
        var $2=$1; //@line 284 "_csv.c"
        var $3=HEAP[$2]; //@line 284 "_csv.c"
        var $4=$quoting_addr; //@line 284 "_csv.c"
        var $5=($3)==($4); //@line 284 "_csv.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 284 "_csv.c"
      case 2: // $bb1
        $0=0; //@line 285 "_csv.c"
        __label__ = 6; break; //@line 285 "_csv.c"
      case 3: // $bb2
        var $6=$qs; //@line 283 "_csv.c"
        var $7=$6+8; //@line 283 "_csv.c"
        $qs=$7; //@line 283 "_csv.c"
        __label__ = 4; break; //@line 283 "_csv.c"
      case 4: // $bb3
        var $8=$qs; //@line 283 "_csv.c"
        var $9=$8+4; //@line 283 "_csv.c"
        var $10=HEAP[$9]; //@line 283 "_csv.c"
        var $11=($10)!=0; //@line 283 "_csv.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 283 "_csv.c"
      case 5: // $bb4
        var $12=HEAP[_PyExc_TypeError]; //@line 287 "_csv.c"
        var $13=_PyErr_Format($12, __str8, allocate(1, "i32", ALLOC_STACK)); //@line 287 "_csv.c"
        $0=-1; //@line 288 "_csv.c"
        __label__ = 6; break; //@line 288 "_csv.c"
      case 6: // $bb5
        var $14=$0; //@line 285 "_csv.c"
        $retval=$14; //@line 285 "_csv.c"
        var $retval6=$retval; //@line 285 "_csv.c"
        ;
        return $retval6; //@line 285 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Dialect_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 312 "_csv.c"
        var $1=$0+20; //@line 312 "_csv.c"
        var $2=HEAP[$1]; //@line 312 "_csv.c"
        var $3=($2)!=0; //@line 312 "_csv.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 312 "_csv.c"
      case 1: // $bb
        var $4=$self_addr; //@line 312 "_csv.c"
        var $5=$4+20; //@line 312 "_csv.c"
        var $6=HEAP[$5]; //@line 312 "_csv.c"
        var $7=$6; //@line 312 "_csv.c"
        var $8=HEAP[$7]; //@line 312 "_csv.c"
        var $9=($8) - 1; //@line 312 "_csv.c"
        var $10=$6; //@line 312 "_csv.c"
        HEAP[$10]=$9; //@line 312 "_csv.c"
        var $11=$6; //@line 312 "_csv.c"
        var $12=HEAP[$11]; //@line 312 "_csv.c"
        var $13=($12)==0; //@line 312 "_csv.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 312 "_csv.c"
      case 2: // $bb1
        var $14=$self_addr; //@line 312 "_csv.c"
        var $15=$14+20; //@line 312 "_csv.c"
        var $16=HEAP[$15]; //@line 312 "_csv.c"
        var $17=$16+4; //@line 312 "_csv.c"
        var $18=HEAP[$17]; //@line 312 "_csv.c"
        var $19=$18+24; //@line 312 "_csv.c"
        var $20=HEAP[$19]; //@line 312 "_csv.c"
        var $21=$self_addr; //@line 312 "_csv.c"
        var $22=$21+20; //@line 312 "_csv.c"
        var $23=HEAP[$22]; //@line 312 "_csv.c"
        FUNCTION_TABLE[$20]($23); //@line 312 "_csv.c"
        __label__ = 3; break; //@line 312 "_csv.c"
      case 3: // $bb2
        var $24=$self_addr; //@line 313 "_csv.c"
        var $25=$24; //@line 313 "_csv.c"
        var $26=$25+4; //@line 313 "_csv.c"
        var $27=HEAP[$26]; //@line 313 "_csv.c"
        var $28=$27+160; //@line 313 "_csv.c"
        var $29=HEAP[$28]; //@line 313 "_csv.c"
        var $30=$self_addr; //@line 313 "_csv.c"
        var $31=$30; //@line 313 "_csv.c"
        FUNCTION_TABLE[$29]($31); //@line 313 "_csv.c"
        ;
        return; //@line 314 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _dialect_new($type, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $type_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $self;
        var $ret;
        var $dialect=__stackBase__;
        var $delimiter=__stackBase__+4;
        var $doublequote=__stackBase__+8;
        var $escapechar=__stackBase__+12;
        var $lineterminator=__stackBase__+16;
        var $quotechar=__stackBase__+20;
        var $quoting=__stackBase__+24;
        var $skipinitialspace=__stackBase__+28;
        var $strict=__stackBase__+32;
        $type_addr=$type;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        $ret=0; //@line 333 "_csv.c"
        HEAP[$dialect]=0; //@line 334 "_csv.c"
        HEAP[$delimiter]=0; //@line 335 "_csv.c"
        HEAP[$doublequote]=0; //@line 336 "_csv.c"
        HEAP[$escapechar]=0; //@line 337 "_csv.c"
        HEAP[$lineterminator]=0; //@line 338 "_csv.c"
        HEAP[$quotechar]=0; //@line 339 "_csv.c"
        HEAP[$quoting]=0; //@line 340 "_csv.c"
        HEAP[$skipinitialspace]=0; //@line 341 "_csv.c"
        HEAP[$strict]=0; //@line 342 "_csv.c"
        var $1=$args_addr; //@line 344 "_csv.c"
        var $2=$kwargs_addr; //@line 344 "_csv.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str18, _dialect_kws, allocate([$dialect,0,0,0,$delimiter,0,0,0,$doublequote,0,0,0,$escapechar,0,0,0,$lineterminator,0,0,0,$quotechar,0,0,0,$quoting,0,0,0,$skipinitialspace,0,0,0,$strict,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 344 "_csv.c"
        var $4=($3)==0; //@line 344 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 344 "_csv.c"
      case 1: // $bb
        $0=0; //@line 355 "_csv.c"
        __label__ = 109; break; //@line 355 "_csv.c"
      case 2: // $bb1
        var $5=HEAP[$dialect]; //@line 357 "_csv.c"
        var $6=($5)!=0; //@line 357 "_csv.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 19; break; } //@line 357 "_csv.c"
      case 3: // $bb2
        var $7=HEAP[$dialect]; //@line 358 "_csv.c"
        var $8=$7+4; //@line 358 "_csv.c"
        var $9=HEAP[$8]; //@line 358 "_csv.c"
        var $10=($9)==(_PyBaseString_Type); //@line 358 "_csv.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 358 "_csv.c"
      case 4: // $bb3
        var $11=HEAP[$dialect]; //@line 358 "_csv.c"
        var $12=$11+4; //@line 358 "_csv.c"
        var $13=HEAP[$12]; //@line 358 "_csv.c"
        var $14=_PyType_IsSubtype($13, _PyBaseString_Type); //@line 358 "_csv.c"
        var $15=($14)!=0; //@line 358 "_csv.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 358 "_csv.c"
      case 5: // $bb4
        var $16=HEAP[$dialect]; //@line 359 "_csv.c"
        var $17=_get_dialect_from_registry($16); //@line 359 "_csv.c"
        HEAP[$dialect]=$17; //@line 359 "_csv.c"
        var $18=($17)==0; //@line 360 "_csv.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 360 "_csv.c"
      case 6: // $bb5
        $0=0; //@line 361 "_csv.c"
        __label__ = 109; break; //@line 361 "_csv.c"
      case 7: // $bb7
        var $19=HEAP[$dialect]; //@line 364 "_csv.c"
        var $20=$19; //@line 364 "_csv.c"
        var $21=HEAP[$20]; //@line 364 "_csv.c"
        var $22=($21) + 1; //@line 364 "_csv.c"
        var $23=$19; //@line 364 "_csv.c"
        HEAP[$23]=$22; //@line 364 "_csv.c"
        __label__ = 8; break; //@line 364 "_csv.c"
      case 8: // $bb8
        var $24=HEAP[$dialect]; //@line 366 "_csv.c"
        var $25=$24+4; //@line 366 "_csv.c"
        var $26=HEAP[$25]; //@line 366 "_csv.c"
        var $27=($26)==(_Dialect_Type); //@line 366 "_csv.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 366 "_csv.c"
      case 9: // $bb9
        var $28=HEAP[$dialect]; //@line 366 "_csv.c"
        var $29=$28+4; //@line 366 "_csv.c"
        var $30=HEAP[$29]; //@line 366 "_csv.c"
        var $31=_PyType_IsSubtype($30, _Dialect_Type); //@line 366 "_csv.c"
        var $32=($31)!=0; //@line 366 "_csv.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 19; break; } //@line 366 "_csv.c"
      case 10: // $bb10
        var $33=HEAP[$delimiter]; //@line 366 "_csv.c"
        var $34=($33)==0; //@line 366 "_csv.c"
        if ($34) { __label__ = 11; break; } else { __label__ = 19; break; } //@line 366 "_csv.c"
      case 11: // $bb11
        var $35=HEAP[$doublequote]; //@line 366 "_csv.c"
        var $36=($35)==0; //@line 366 "_csv.c"
        if ($36) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 366 "_csv.c"
      case 12: // $bb12
        var $37=HEAP[$escapechar]; //@line 366 "_csv.c"
        var $38=($37)==0; //@line 366 "_csv.c"
        if ($38) { __label__ = 13; break; } else { __label__ = 19; break; } //@line 366 "_csv.c"
      case 13: // $bb13
        var $39=HEAP[$lineterminator]; //@line 366 "_csv.c"
        var $40=($39)==0; //@line 366 "_csv.c"
        if ($40) { __label__ = 14; break; } else { __label__ = 19; break; } //@line 366 "_csv.c"
      case 14: // $bb14
        var $41=HEAP[$quotechar]; //@line 366 "_csv.c"
        var $42=($41)==0; //@line 366 "_csv.c"
        if ($42) { __label__ = 15; break; } else { __label__ = 19; break; } //@line 366 "_csv.c"
      case 15: // $bb15
        var $43=HEAP[$quoting]; //@line 366 "_csv.c"
        var $44=($43)==0; //@line 366 "_csv.c"
        if ($44) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 366 "_csv.c"
      case 16: // $bb16
        var $45=HEAP[$skipinitialspace]; //@line 366 "_csv.c"
        var $46=($45)==0; //@line 366 "_csv.c"
        if ($46) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 366 "_csv.c"
      case 17: // $bb17
        var $47=HEAP[$strict]; //@line 366 "_csv.c"
        var $48=($47)==0; //@line 366 "_csv.c"
        if ($48) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 366 "_csv.c"
      case 18: // $bb18
        var $49=HEAP[$dialect]; //@line 375 "_csv.c"
        $0=$49; //@line 375 "_csv.c"
        __label__ = 109; break; //@line 375 "_csv.c"
      case 19: // $bb19
        var $50=$type_addr; //@line 378 "_csv.c"
        var $51=$50+152; //@line 378 "_csv.c"
        var $52=HEAP[$51]; //@line 378 "_csv.c"
        var $53=$type_addr; //@line 378 "_csv.c"
        var $54=FUNCTION_TABLE[$52]($53, 0); //@line 378 "_csv.c"
        var $55=$54; //@line 378 "_csv.c"
        $self=$55; //@line 378 "_csv.c"
        var $56=($55)==0; //@line 379 "_csv.c"
        if ($56) { __label__ = 20; break; } else { __label__ = 24; break; } //@line 379 "_csv.c"
      case 20: // $bb20
        var $57=HEAP[$dialect]; //@line 380 "_csv.c"
        var $58=($57)!=0; //@line 380 "_csv.c"
        if ($58) { __label__ = 21; break; } else { __label__ = 23; break; } //@line 380 "_csv.c"
      case 21: // $bb21
        var $59=HEAP[$dialect]; //@line 380 "_csv.c"
        var $60=$59; //@line 380 "_csv.c"
        var $61=HEAP[$60]; //@line 380 "_csv.c"
        var $62=($61) - 1; //@line 380 "_csv.c"
        var $63=$59; //@line 380 "_csv.c"
        HEAP[$63]=$62; //@line 380 "_csv.c"
        var $64=$59; //@line 380 "_csv.c"
        var $65=HEAP[$64]; //@line 380 "_csv.c"
        var $66=($65)==0; //@line 380 "_csv.c"
        if ($66) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 380 "_csv.c"
      case 22: // $bb22
        var $67=HEAP[$dialect]; //@line 380 "_csv.c"
        var $68=$67+4; //@line 380 "_csv.c"
        var $69=HEAP[$68]; //@line 380 "_csv.c"
        var $70=$69+24; //@line 380 "_csv.c"
        var $71=HEAP[$70]; //@line 380 "_csv.c"
        var $72=HEAP[$dialect]; //@line 380 "_csv.c"
        FUNCTION_TABLE[$71]($72); //@line 380 "_csv.c"
        __label__ = 23; break; //@line 380 "_csv.c"
      case 23: // $bb23
        $0=0; //@line 381 "_csv.c"
        __label__ = 109; break; //@line 381 "_csv.c"
      case 24: // $bb24
        var $73=$self; //@line 383 "_csv.c"
        var $74=$73+20; //@line 383 "_csv.c"
        HEAP[$74]=0; //@line 383 "_csv.c"
        var $75=HEAP[$delimiter]; //@line 385 "_csv.c"
        var $76=($75)!=0; //@line 385 "_csv.c"
        if ($76) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 385 "_csv.c"
      case 25: // $bb25
        var $77=HEAP[$delimiter]; //@line 385 "_csv.c"
        var $78=$77; //@line 385 "_csv.c"
        var $79=HEAP[$78]; //@line 385 "_csv.c"
        var $80=($79) + 1; //@line 385 "_csv.c"
        var $81=$77; //@line 385 "_csv.c"
        HEAP[$81]=$80; //@line 385 "_csv.c"
        __label__ = 26; break; //@line 385 "_csv.c"
      case 26: // $bb26
        var $82=HEAP[$doublequote]; //@line 386 "_csv.c"
        var $83=($82)!=0; //@line 386 "_csv.c"
        if ($83) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 386 "_csv.c"
      case 27: // $bb27
        var $84=HEAP[$doublequote]; //@line 386 "_csv.c"
        var $85=$84; //@line 386 "_csv.c"
        var $86=HEAP[$85]; //@line 386 "_csv.c"
        var $87=($86) + 1; //@line 386 "_csv.c"
        var $88=$84; //@line 386 "_csv.c"
        HEAP[$88]=$87; //@line 386 "_csv.c"
        __label__ = 28; break; //@line 386 "_csv.c"
      case 28: // $bb28
        var $89=HEAP[$escapechar]; //@line 387 "_csv.c"
        var $90=($89)!=0; //@line 387 "_csv.c"
        if ($90) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 387 "_csv.c"
      case 29: // $bb29
        var $91=HEAP[$escapechar]; //@line 387 "_csv.c"
        var $92=$91; //@line 387 "_csv.c"
        var $93=HEAP[$92]; //@line 387 "_csv.c"
        var $94=($93) + 1; //@line 387 "_csv.c"
        var $95=$91; //@line 387 "_csv.c"
        HEAP[$95]=$94; //@line 387 "_csv.c"
        __label__ = 30; break; //@line 387 "_csv.c"
      case 30: // $bb30
        var $96=HEAP[$lineterminator]; //@line 388 "_csv.c"
        var $97=($96)!=0; //@line 388 "_csv.c"
        if ($97) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 388 "_csv.c"
      case 31: // $bb31
        var $98=HEAP[$lineterminator]; //@line 388 "_csv.c"
        var $99=$98; //@line 388 "_csv.c"
        var $100=HEAP[$99]; //@line 388 "_csv.c"
        var $101=($100) + 1; //@line 388 "_csv.c"
        var $102=$98; //@line 388 "_csv.c"
        HEAP[$102]=$101; //@line 388 "_csv.c"
        __label__ = 32; break; //@line 388 "_csv.c"
      case 32: // $bb32
        var $103=HEAP[$quotechar]; //@line 389 "_csv.c"
        var $104=($103)!=0; //@line 389 "_csv.c"
        if ($104) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 389 "_csv.c"
      case 33: // $bb33
        var $105=HEAP[$quotechar]; //@line 389 "_csv.c"
        var $106=$105; //@line 389 "_csv.c"
        var $107=HEAP[$106]; //@line 389 "_csv.c"
        var $108=($107) + 1; //@line 389 "_csv.c"
        var $109=$105; //@line 389 "_csv.c"
        HEAP[$109]=$108; //@line 389 "_csv.c"
        __label__ = 34; break; //@line 389 "_csv.c"
      case 34: // $bb34
        var $110=HEAP[$quoting]; //@line 390 "_csv.c"
        var $111=($110)!=0; //@line 390 "_csv.c"
        if ($111) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 390 "_csv.c"
      case 35: // $bb35
        var $112=HEAP[$quoting]; //@line 390 "_csv.c"
        var $113=$112; //@line 390 "_csv.c"
        var $114=HEAP[$113]; //@line 390 "_csv.c"
        var $115=($114) + 1; //@line 390 "_csv.c"
        var $116=$112; //@line 390 "_csv.c"
        HEAP[$116]=$115; //@line 390 "_csv.c"
        __label__ = 36; break; //@line 390 "_csv.c"
      case 36: // $bb36
        var $117=HEAP[$skipinitialspace]; //@line 391 "_csv.c"
        var $118=($117)!=0; //@line 391 "_csv.c"
        if ($118) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 391 "_csv.c"
      case 37: // $bb37
        var $119=HEAP[$skipinitialspace]; //@line 391 "_csv.c"
        var $120=$119; //@line 391 "_csv.c"
        var $121=HEAP[$120]; //@line 391 "_csv.c"
        var $122=($121) + 1; //@line 391 "_csv.c"
        var $123=$119; //@line 391 "_csv.c"
        HEAP[$123]=$122; //@line 391 "_csv.c"
        __label__ = 38; break; //@line 391 "_csv.c"
      case 38: // $bb38
        var $124=HEAP[$strict]; //@line 392 "_csv.c"
        var $125=($124)!=0; //@line 392 "_csv.c"
        if ($125) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 392 "_csv.c"
      case 39: // $bb39
        var $126=HEAP[$strict]; //@line 392 "_csv.c"
        var $127=$126; //@line 392 "_csv.c"
        var $128=HEAP[$127]; //@line 392 "_csv.c"
        var $129=($128) + 1; //@line 392 "_csv.c"
        var $130=$126; //@line 392 "_csv.c"
        HEAP[$130]=$129; //@line 392 "_csv.c"
        __label__ = 40; break; //@line 392 "_csv.c"
      case 40: // $bb40
        var $131=HEAP[$dialect]; //@line 393 "_csv.c"
        var $132=($131)!=0; //@line 393 "_csv.c"
        if ($132) { __label__ = 41; break; } else { __label__ = 58; break; } //@line 393 "_csv.c"
      case 41: // $bb41
        var $133=HEAP[$delimiter]; //@line 397 "_csv.c"
        var $134=($133)==0; //@line 397 "_csv.c"
        if ($134) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 397 "_csv.c"
      case 42: // $bb42
        var $135=HEAP[$dialect]; //@line 397 "_csv.c"
        var $136=_PyObject_GetAttrString($135, __str9); //@line 397 "_csv.c"
        HEAP[$delimiter]=$136; //@line 397 "_csv.c"
        __label__ = 43; break; //@line 397 "_csv.c"
      case 43: // $bb43
        var $137=HEAP[$doublequote]; //@line 398 "_csv.c"
        var $138=($137)==0; //@line 398 "_csv.c"
        if ($138) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 398 "_csv.c"
      case 44: // $bb44
        var $139=HEAP[$dialect]; //@line 398 "_csv.c"
        var $140=_PyObject_GetAttrString($139, __str11); //@line 398 "_csv.c"
        HEAP[$doublequote]=$140; //@line 398 "_csv.c"
        __label__ = 45; break; //@line 398 "_csv.c"
      case 45: // $bb45
        var $141=HEAP[$escapechar]; //@line 399 "_csv.c"
        var $142=($141)==0; //@line 399 "_csv.c"
        if ($142) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 399 "_csv.c"
      case 46: // $bb46
        var $143=HEAP[$dialect]; //@line 399 "_csv.c"
        var $144=_PyObject_GetAttrString($143, __str13); //@line 399 "_csv.c"
        HEAP[$escapechar]=$144; //@line 399 "_csv.c"
        __label__ = 47; break; //@line 399 "_csv.c"
      case 47: // $bb47
        var $145=HEAP[$lineterminator]; //@line 400 "_csv.c"
        var $146=($145)==0; //@line 400 "_csv.c"
        if ($146) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 400 "_csv.c"
      case 48: // $bb48
        var $147=HEAP[$dialect]; //@line 400 "_csv.c"
        var $148=_PyObject_GetAttrString($147, __str14); //@line 400 "_csv.c"
        HEAP[$lineterminator]=$148; //@line 400 "_csv.c"
        __label__ = 49; break; //@line 400 "_csv.c"
      case 49: // $bb49
        var $149=HEAP[$quotechar]; //@line 401 "_csv.c"
        var $150=($149)==0; //@line 401 "_csv.c"
        if ($150) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 401 "_csv.c"
      case 50: // $bb50
        var $151=HEAP[$dialect]; //@line 401 "_csv.c"
        var $152=_PyObject_GetAttrString($151, __str15); //@line 401 "_csv.c"
        HEAP[$quotechar]=$152; //@line 401 "_csv.c"
        __label__ = 51; break; //@line 401 "_csv.c"
      case 51: // $bb51
        var $153=HEAP[$quoting]; //@line 402 "_csv.c"
        var $154=($153)==0; //@line 402 "_csv.c"
        if ($154) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 402 "_csv.c"
      case 52: // $bb52
        var $155=HEAP[$dialect]; //@line 402 "_csv.c"
        var $156=_PyObject_GetAttrString($155, __str16); //@line 402 "_csv.c"
        HEAP[$quoting]=$156; //@line 402 "_csv.c"
        __label__ = 53; break; //@line 402 "_csv.c"
      case 53: // $bb53
        var $157=HEAP[$skipinitialspace]; //@line 403 "_csv.c"
        var $158=($157)==0; //@line 403 "_csv.c"
        if ($158) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 403 "_csv.c"
      case 54: // $bb54
        var $159=HEAP[$dialect]; //@line 403 "_csv.c"
        var $160=_PyObject_GetAttrString($159, __str10); //@line 403 "_csv.c"
        HEAP[$skipinitialspace]=$160; //@line 403 "_csv.c"
        __label__ = 55; break; //@line 403 "_csv.c"
      case 55: // $bb55
        var $161=HEAP[$strict]; //@line 404 "_csv.c"
        var $162=($161)==0; //@line 404 "_csv.c"
        if ($162) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 404 "_csv.c"
      case 56: // $bb56
        var $163=HEAP[$dialect]; //@line 404 "_csv.c"
        var $164=_PyObject_GetAttrString($163, __str12); //@line 404 "_csv.c"
        HEAP[$strict]=$164; //@line 404 "_csv.c"
        __label__ = 57; break; //@line 404 "_csv.c"
      case 57: // $bb57
        _PyErr_Clear(); //@line 405 "_csv.c"
        __label__ = 58; break; //@line 405 "_csv.c"
      case 58: // $bb58
        var $165=HEAP[$delimiter]; //@line 412 "_csv.c"
        var $166=$self; //@line 412 "_csv.c"
        var $167=$166+12; //@line 412 "_csv.c"
        var $168=__set_char(__str9, $167, $165, 44); //@line 412 "_csv.c"
        var $169=($168)!=0; //@line 412 "_csv.c"
        if ($169) { __label__ = 78; break; } else { __label__ = 59; break; } //@line 412 "_csv.c"
      case 59: // $bb59
        var $170=HEAP[$doublequote]; //@line 413 "_csv.c"
        var $171=$self; //@line 413 "_csv.c"
        var $172=$171+8; //@line 413 "_csv.c"
        var $173=__set_bool(__str11, $172, $170, 1); //@line 413 "_csv.c"
        var $174=($173)!=0; //@line 413 "_csv.c"
        if ($174) { __label__ = 78; break; } else { __label__ = 60; break; } //@line 413 "_csv.c"
      case 60: // $bb60
        var $175=HEAP[$escapechar]; //@line 414 "_csv.c"
        var $176=$self; //@line 414 "_csv.c"
        var $177=$176+14; //@line 414 "_csv.c"
        var $178=__set_char(__str13, $177, $175, 0); //@line 414 "_csv.c"
        var $179=($178)!=0; //@line 414 "_csv.c"
        if ($179) { __label__ = 78; break; } else { __label__ = 61; break; } //@line 414 "_csv.c"
      case 61: // $bb61
        var $180=HEAP[$lineterminator]; //@line 415 "_csv.c"
        var $181=$self; //@line 415 "_csv.c"
        var $182=$181+20; //@line 415 "_csv.c"
        var $183=__set_str($182, $180); //@line 415 "_csv.c"
        var $184=($183)!=0; //@line 415 "_csv.c"
        if ($184) { __label__ = 78; break; } else { __label__ = 62; break; } //@line 415 "_csv.c"
      case 62: // $bb62
        var $185=HEAP[$quotechar]; //@line 416 "_csv.c"
        var $186=$self; //@line 416 "_csv.c"
        var $187=$186+13; //@line 416 "_csv.c"
        var $188=__set_char(__str15, $187, $185, 34); //@line 416 "_csv.c"
        var $189=($188)!=0; //@line 416 "_csv.c"
        if ($189) { __label__ = 78; break; } else { __label__ = 63; break; } //@line 416 "_csv.c"
      case 63: // $bb63
        var $190=HEAP[$quoting]; //@line 417 "_csv.c"
        var $191=$self; //@line 417 "_csv.c"
        var $192=$191+24; //@line 417 "_csv.c"
        var $193=__set_int($192, $190); //@line 417 "_csv.c"
        var $194=($193)!=0; //@line 417 "_csv.c"
        if ($194) { __label__ = 78; break; } else { __label__ = 64; break; } //@line 417 "_csv.c"
      case 64: // $bb64
        var $195=HEAP[$skipinitialspace]; //@line 418 "_csv.c"
        var $196=$self; //@line 418 "_csv.c"
        var $197=$196+16; //@line 418 "_csv.c"
        var $198=__set_bool(__str10, $197, $195, 0); //@line 418 "_csv.c"
        var $199=($198)!=0; //@line 418 "_csv.c"
        if ($199) { __label__ = 78; break; } else { __label__ = 65; break; } //@line 418 "_csv.c"
      case 65: // $bb65
        var $200=HEAP[$strict]; //@line 419 "_csv.c"
        var $201=$self; //@line 419 "_csv.c"
        var $202=$201+28; //@line 419 "_csv.c"
        var $203=__set_bool(__str12, $202, $200, 0); //@line 419 "_csv.c"
        var $204=($203)!=0; //@line 419 "_csv.c"
        if ($204) { __label__ = 78; break; } else { __label__ = 66; break; } //@line 419 "_csv.c"
      case 66: // $bb66
        var $205=$self; //@line 422 "_csv.c"
        var $206=$205+24; //@line 422 "_csv.c"
        var $207=HEAP[$206]; //@line 422 "_csv.c"
        var $208=_dialect_check_quoting($207); //@line 422 "_csv.c"
        var $209=($208)!=0; //@line 422 "_csv.c"
        if ($209) { __label__ = 78; break; } else { __label__ = 67; break; } //@line 422 "_csv.c"
      case 67: // $bb67
        var $210=$self; //@line 424 "_csv.c"
        var $211=$210+12; //@line 424 "_csv.c"
        var $212=HEAP[$211]; //@line 424 "_csv.c"
        var $213=($212)==0; //@line 424 "_csv.c"
        if ($213) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 424 "_csv.c"
      case 68: // $bb68
        var $214=HEAP[_PyExc_TypeError]; //@line 425 "_csv.c"
        _PyErr_SetString($214, __str20); //@line 425 "_csv.c"
        __label__ = 78; break; //@line 425 "_csv.c"
      case 69: // $bb69
        var $215=HEAP[$quotechar]; //@line 428 "_csv.c"
        var $216=($215)==(__Py_NoneStruct); //@line 428 "_csv.c"
        if ($216) { __label__ = 70; break; } else { __label__ = 72; break; } //@line 428 "_csv.c"
      case 70: // $bb70
        var $217=HEAP[$quoting]; //@line 428 "_csv.c"
        var $218=($217)==0; //@line 428 "_csv.c"
        if ($218) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 428 "_csv.c"
      case 71: // $bb71
        var $219=$self; //@line 429 "_csv.c"
        var $220=$219+24; //@line 429 "_csv.c"
        HEAP[$220]=3; //@line 429 "_csv.c"
        __label__ = 72; break; //@line 429 "_csv.c"
      case 72: // $bb72
        var $221=$self; //@line 430 "_csv.c"
        var $222=$221+24; //@line 430 "_csv.c"
        var $223=HEAP[$222]; //@line 430 "_csv.c"
        var $224=($223)!=3; //@line 430 "_csv.c"
        if ($224) { __label__ = 73; break; } else { __label__ = 75; break; } //@line 430 "_csv.c"
      case 73: // $bb73
        var $225=$self; //@line 430 "_csv.c"
        var $226=$225+13; //@line 430 "_csv.c"
        var $227=HEAP[$226]; //@line 430 "_csv.c"
        var $228=($227)==0; //@line 430 "_csv.c"
        if ($228) { __label__ = 74; break; } else { __label__ = 75; break; } //@line 430 "_csv.c"
      case 74: // $bb74
        var $229=HEAP[_PyExc_TypeError]; //@line 431 "_csv.c"
        _PyErr_SetString($229, __str21); //@line 431 "_csv.c"
        __label__ = 78; break; //@line 431 "_csv.c"
      case 75: // $bb75
        var $230=$self; //@line 435 "_csv.c"
        var $231=$230+20; //@line 435 "_csv.c"
        var $232=HEAP[$231]; //@line 435 "_csv.c"
        var $233=($232)==0; //@line 435 "_csv.c"
        if ($233) { __label__ = 76; break; } else { __label__ = 77; break; } //@line 435 "_csv.c"
      case 76: // $bb76
        var $234=HEAP[_PyExc_TypeError]; //@line 436 "_csv.c"
        _PyErr_SetString($234, __str22); //@line 436 "_csv.c"
        __label__ = 78; break; //@line 436 "_csv.c"
      case 77: // $bb77
        var $235=$self; //@line 440 "_csv.c"
        var $236=$235; //@line 440 "_csv.c"
        $ret=$236; //@line 440 "_csv.c"
        var $237=$self; //@line 441 "_csv.c"
        var $238=$237; //@line 441 "_csv.c"
        var $239=$238; //@line 441 "_csv.c"
        var $240=HEAP[$239]; //@line 441 "_csv.c"
        var $241=($240) + 1; //@line 441 "_csv.c"
        var $242=$238; //@line 441 "_csv.c"
        HEAP[$242]=$241; //@line 441 "_csv.c"
        __label__ = 78; break; //@line 442 "_csv.c"
      case 78: // $err
        var $243=$self; //@line 443 "_csv.c"
        var $244=($243)!=0; //@line 443 "_csv.c"
        if ($244) { __label__ = 79; break; } else { __label__ = 81; break; } //@line 443 "_csv.c"
      case 79: // $bb78
        var $245=$self; //@line 443 "_csv.c"
        var $246=$245; //@line 443 "_csv.c"
        var $247=$246; //@line 443 "_csv.c"
        var $248=HEAP[$247]; //@line 443 "_csv.c"
        var $249=($248) - 1; //@line 443 "_csv.c"
        var $250=$246; //@line 443 "_csv.c"
        HEAP[$250]=$249; //@line 443 "_csv.c"
        var $251=$246; //@line 443 "_csv.c"
        var $252=HEAP[$251]; //@line 443 "_csv.c"
        var $253=($252)==0; //@line 443 "_csv.c"
        if ($253) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 443 "_csv.c"
      case 80: // $bb79
        var $254=$self; //@line 443 "_csv.c"
        var $255=$254; //@line 443 "_csv.c"
        var $256=$255+4; //@line 443 "_csv.c"
        var $257=HEAP[$256]; //@line 443 "_csv.c"
        var $258=$257+24; //@line 443 "_csv.c"
        var $259=HEAP[$258]; //@line 443 "_csv.c"
        var $260=$self; //@line 443 "_csv.c"
        var $261=$260; //@line 443 "_csv.c"
        FUNCTION_TABLE[$259]($261); //@line 443 "_csv.c"
        __label__ = 81; break; //@line 443 "_csv.c"
      case 81: // $bb80
        var $262=HEAP[$dialect]; //@line 444 "_csv.c"
        var $263=($262)!=0; //@line 444 "_csv.c"
        if ($263) { __label__ = 82; break; } else { __label__ = 84; break; } //@line 444 "_csv.c"
      case 82: // $bb81
        var $264=HEAP[$dialect]; //@line 444 "_csv.c"
        var $265=$264; //@line 444 "_csv.c"
        var $266=HEAP[$265]; //@line 444 "_csv.c"
        var $267=($266) - 1; //@line 444 "_csv.c"
        var $268=$264; //@line 444 "_csv.c"
        HEAP[$268]=$267; //@line 444 "_csv.c"
        var $269=$264; //@line 444 "_csv.c"
        var $270=HEAP[$269]; //@line 444 "_csv.c"
        var $271=($270)==0; //@line 444 "_csv.c"
        if ($271) { __label__ = 83; break; } else { __label__ = 84; break; } //@line 444 "_csv.c"
      case 83: // $bb82
        var $272=HEAP[$dialect]; //@line 444 "_csv.c"
        var $273=$272+4; //@line 444 "_csv.c"
        var $274=HEAP[$273]; //@line 444 "_csv.c"
        var $275=$274+24; //@line 444 "_csv.c"
        var $276=HEAP[$275]; //@line 444 "_csv.c"
        var $277=HEAP[$dialect]; //@line 444 "_csv.c"
        FUNCTION_TABLE[$276]($277); //@line 444 "_csv.c"
        __label__ = 84; break; //@line 444 "_csv.c"
      case 84: // $bb83
        var $278=HEAP[$delimiter]; //@line 445 "_csv.c"
        var $279=($278)!=0; //@line 445 "_csv.c"
        if ($279) { __label__ = 85; break; } else { __label__ = 87; break; } //@line 445 "_csv.c"
      case 85: // $bb84
        var $280=HEAP[$delimiter]; //@line 445 "_csv.c"
        var $281=$280; //@line 445 "_csv.c"
        var $282=HEAP[$281]; //@line 445 "_csv.c"
        var $283=($282) - 1; //@line 445 "_csv.c"
        var $284=$280; //@line 445 "_csv.c"
        HEAP[$284]=$283; //@line 445 "_csv.c"
        var $285=$280; //@line 445 "_csv.c"
        var $286=HEAP[$285]; //@line 445 "_csv.c"
        var $287=($286)==0; //@line 445 "_csv.c"
        if ($287) { __label__ = 86; break; } else { __label__ = 87; break; } //@line 445 "_csv.c"
      case 86: // $bb85
        var $288=HEAP[$delimiter]; //@line 445 "_csv.c"
        var $289=$288+4; //@line 445 "_csv.c"
        var $290=HEAP[$289]; //@line 445 "_csv.c"
        var $291=$290+24; //@line 445 "_csv.c"
        var $292=HEAP[$291]; //@line 445 "_csv.c"
        var $293=HEAP[$delimiter]; //@line 445 "_csv.c"
        FUNCTION_TABLE[$292]($293); //@line 445 "_csv.c"
        __label__ = 87; break; //@line 445 "_csv.c"
      case 87: // $bb86
        var $294=HEAP[$doublequote]; //@line 446 "_csv.c"
        var $295=($294)!=0; //@line 446 "_csv.c"
        if ($295) { __label__ = 88; break; } else { __label__ = 90; break; } //@line 446 "_csv.c"
      case 88: // $bb87
        var $296=HEAP[$doublequote]; //@line 446 "_csv.c"
        var $297=$296; //@line 446 "_csv.c"
        var $298=HEAP[$297]; //@line 446 "_csv.c"
        var $299=($298) - 1; //@line 446 "_csv.c"
        var $300=$296; //@line 446 "_csv.c"
        HEAP[$300]=$299; //@line 446 "_csv.c"
        var $301=$296; //@line 446 "_csv.c"
        var $302=HEAP[$301]; //@line 446 "_csv.c"
        var $303=($302)==0; //@line 446 "_csv.c"
        if ($303) { __label__ = 89; break; } else { __label__ = 90; break; } //@line 446 "_csv.c"
      case 89: // $bb88
        var $304=HEAP[$doublequote]; //@line 446 "_csv.c"
        var $305=$304+4; //@line 446 "_csv.c"
        var $306=HEAP[$305]; //@line 446 "_csv.c"
        var $307=$306+24; //@line 446 "_csv.c"
        var $308=HEAP[$307]; //@line 446 "_csv.c"
        var $309=HEAP[$doublequote]; //@line 446 "_csv.c"
        FUNCTION_TABLE[$308]($309); //@line 446 "_csv.c"
        __label__ = 90; break; //@line 446 "_csv.c"
      case 90: // $bb89
        var $310=HEAP[$escapechar]; //@line 447 "_csv.c"
        var $311=($310)!=0; //@line 447 "_csv.c"
        if ($311) { __label__ = 91; break; } else { __label__ = 93; break; } //@line 447 "_csv.c"
      case 91: // $bb90
        var $312=HEAP[$escapechar]; //@line 447 "_csv.c"
        var $313=$312; //@line 447 "_csv.c"
        var $314=HEAP[$313]; //@line 447 "_csv.c"
        var $315=($314) - 1; //@line 447 "_csv.c"
        var $316=$312; //@line 447 "_csv.c"
        HEAP[$316]=$315; //@line 447 "_csv.c"
        var $317=$312; //@line 447 "_csv.c"
        var $318=HEAP[$317]; //@line 447 "_csv.c"
        var $319=($318)==0; //@line 447 "_csv.c"
        if ($319) { __label__ = 92; break; } else { __label__ = 93; break; } //@line 447 "_csv.c"
      case 92: // $bb91
        var $320=HEAP[$escapechar]; //@line 447 "_csv.c"
        var $321=$320+4; //@line 447 "_csv.c"
        var $322=HEAP[$321]; //@line 447 "_csv.c"
        var $323=$322+24; //@line 447 "_csv.c"
        var $324=HEAP[$323]; //@line 447 "_csv.c"
        var $325=HEAP[$escapechar]; //@line 447 "_csv.c"
        FUNCTION_TABLE[$324]($325); //@line 447 "_csv.c"
        __label__ = 93; break; //@line 447 "_csv.c"
      case 93: // $bb92
        var $326=HEAP[$lineterminator]; //@line 448 "_csv.c"
        var $327=($326)!=0; //@line 448 "_csv.c"
        if ($327) { __label__ = 94; break; } else { __label__ = 96; break; } //@line 448 "_csv.c"
      case 94: // $bb93
        var $328=HEAP[$lineterminator]; //@line 448 "_csv.c"
        var $329=$328; //@line 448 "_csv.c"
        var $330=HEAP[$329]; //@line 448 "_csv.c"
        var $331=($330) - 1; //@line 448 "_csv.c"
        var $332=$328; //@line 448 "_csv.c"
        HEAP[$332]=$331; //@line 448 "_csv.c"
        var $333=$328; //@line 448 "_csv.c"
        var $334=HEAP[$333]; //@line 448 "_csv.c"
        var $335=($334)==0; //@line 448 "_csv.c"
        if ($335) { __label__ = 95; break; } else { __label__ = 96; break; } //@line 448 "_csv.c"
      case 95: // $bb94
        var $336=HEAP[$lineterminator]; //@line 448 "_csv.c"
        var $337=$336+4; //@line 448 "_csv.c"
        var $338=HEAP[$337]; //@line 448 "_csv.c"
        var $339=$338+24; //@line 448 "_csv.c"
        var $340=HEAP[$339]; //@line 448 "_csv.c"
        var $341=HEAP[$lineterminator]; //@line 448 "_csv.c"
        FUNCTION_TABLE[$340]($341); //@line 448 "_csv.c"
        __label__ = 96; break; //@line 448 "_csv.c"
      case 96: // $bb95
        var $342=HEAP[$quotechar]; //@line 449 "_csv.c"
        var $343=($342)!=0; //@line 449 "_csv.c"
        if ($343) { __label__ = 97; break; } else { __label__ = 99; break; } //@line 449 "_csv.c"
      case 97: // $bb96
        var $344=HEAP[$quotechar]; //@line 449 "_csv.c"
        var $345=$344; //@line 449 "_csv.c"
        var $346=HEAP[$345]; //@line 449 "_csv.c"
        var $347=($346) - 1; //@line 449 "_csv.c"
        var $348=$344; //@line 449 "_csv.c"
        HEAP[$348]=$347; //@line 449 "_csv.c"
        var $349=$344; //@line 449 "_csv.c"
        var $350=HEAP[$349]; //@line 449 "_csv.c"
        var $351=($350)==0; //@line 449 "_csv.c"
        if ($351) { __label__ = 98; break; } else { __label__ = 99; break; } //@line 449 "_csv.c"
      case 98: // $bb97
        var $352=HEAP[$quotechar]; //@line 449 "_csv.c"
        var $353=$352+4; //@line 449 "_csv.c"
        var $354=HEAP[$353]; //@line 449 "_csv.c"
        var $355=$354+24; //@line 449 "_csv.c"
        var $356=HEAP[$355]; //@line 449 "_csv.c"
        var $357=HEAP[$quotechar]; //@line 449 "_csv.c"
        FUNCTION_TABLE[$356]($357); //@line 449 "_csv.c"
        __label__ = 99; break; //@line 449 "_csv.c"
      case 99: // $bb98
        var $358=HEAP[$quoting]; //@line 450 "_csv.c"
        var $359=($358)!=0; //@line 450 "_csv.c"
        if ($359) { __label__ = 100; break; } else { __label__ = 102; break; } //@line 450 "_csv.c"
      case 100: // $bb99
        var $360=HEAP[$quoting]; //@line 450 "_csv.c"
        var $361=$360; //@line 450 "_csv.c"
        var $362=HEAP[$361]; //@line 450 "_csv.c"
        var $363=($362) - 1; //@line 450 "_csv.c"
        var $364=$360; //@line 450 "_csv.c"
        HEAP[$364]=$363; //@line 450 "_csv.c"
        var $365=$360; //@line 450 "_csv.c"
        var $366=HEAP[$365]; //@line 450 "_csv.c"
        var $367=($366)==0; //@line 450 "_csv.c"
        if ($367) { __label__ = 101; break; } else { __label__ = 102; break; } //@line 450 "_csv.c"
      case 101: // $bb100
        var $368=HEAP[$quoting]; //@line 450 "_csv.c"
        var $369=$368+4; //@line 450 "_csv.c"
        var $370=HEAP[$369]; //@line 450 "_csv.c"
        var $371=$370+24; //@line 450 "_csv.c"
        var $372=HEAP[$371]; //@line 450 "_csv.c"
        var $373=HEAP[$quoting]; //@line 450 "_csv.c"
        FUNCTION_TABLE[$372]($373); //@line 450 "_csv.c"
        __label__ = 102; break; //@line 450 "_csv.c"
      case 102: // $bb101
        var $374=HEAP[$skipinitialspace]; //@line 451 "_csv.c"
        var $375=($374)!=0; //@line 451 "_csv.c"
        if ($375) { __label__ = 103; break; } else { __label__ = 105; break; } //@line 451 "_csv.c"
      case 103: // $bb102
        var $376=HEAP[$skipinitialspace]; //@line 451 "_csv.c"
        var $377=$376; //@line 451 "_csv.c"
        var $378=HEAP[$377]; //@line 451 "_csv.c"
        var $379=($378) - 1; //@line 451 "_csv.c"
        var $380=$376; //@line 451 "_csv.c"
        HEAP[$380]=$379; //@line 451 "_csv.c"
        var $381=$376; //@line 451 "_csv.c"
        var $382=HEAP[$381]; //@line 451 "_csv.c"
        var $383=($382)==0; //@line 451 "_csv.c"
        if ($383) { __label__ = 104; break; } else { __label__ = 105; break; } //@line 451 "_csv.c"
      case 104: // $bb103
        var $384=HEAP[$skipinitialspace]; //@line 451 "_csv.c"
        var $385=$384+4; //@line 451 "_csv.c"
        var $386=HEAP[$385]; //@line 451 "_csv.c"
        var $387=$386+24; //@line 451 "_csv.c"
        var $388=HEAP[$387]; //@line 451 "_csv.c"
        var $389=HEAP[$skipinitialspace]; //@line 451 "_csv.c"
        FUNCTION_TABLE[$388]($389); //@line 451 "_csv.c"
        __label__ = 105; break; //@line 451 "_csv.c"
      case 105: // $bb104
        var $390=HEAP[$strict]; //@line 452 "_csv.c"
        var $391=($390)!=0; //@line 452 "_csv.c"
        if ($391) { __label__ = 106; break; } else { __label__ = 108; break; } //@line 452 "_csv.c"
      case 106: // $bb105
        var $392=HEAP[$strict]; //@line 452 "_csv.c"
        var $393=$392; //@line 452 "_csv.c"
        var $394=HEAP[$393]; //@line 452 "_csv.c"
        var $395=($394) - 1; //@line 452 "_csv.c"
        var $396=$392; //@line 452 "_csv.c"
        HEAP[$396]=$395; //@line 452 "_csv.c"
        var $397=$392; //@line 452 "_csv.c"
        var $398=HEAP[$397]; //@line 452 "_csv.c"
        var $399=($398)==0; //@line 452 "_csv.c"
        if ($399) { __label__ = 107; break; } else { __label__ = 108; break; } //@line 452 "_csv.c"
      case 107: // $bb106
        var $400=HEAP[$strict]; //@line 452 "_csv.c"
        var $401=$400+4; //@line 452 "_csv.c"
        var $402=HEAP[$401]; //@line 452 "_csv.c"
        var $403=$402+24; //@line 452 "_csv.c"
        var $404=HEAP[$403]; //@line 452 "_csv.c"
        var $405=HEAP[$strict]; //@line 452 "_csv.c"
        FUNCTION_TABLE[$404]($405); //@line 452 "_csv.c"
        __label__ = 108; break; //@line 452 "_csv.c"
      case 108: // $bb107
        var $406=$ret; //@line 453 "_csv.c"
        $0=$406; //@line 453 "_csv.c"
        __label__ = 109; break; //@line 453 "_csv.c"
      case 109: // $bb108
        var $407=$0; //@line 355 "_csv.c"
        $retval=$407; //@line 355 "_csv.c"
        var $retval109=$retval; //@line 355 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval109; //@line 355 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __call_dialect($dialect_inst, $kwargs) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $dialect_inst_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $iftmp_115;
        var $ctor_args;
        var $dialect;
        $dialect_inst_addr=$dialect_inst;
        $kwargs_addr=$kwargs;
        var $1=$dialect_inst_addr; //@line 515 "_csv.c"
        var $2=($1)!=0; //@line 515 "_csv.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 515 "_csv.c"
      case 1: // $bb
        $iftmp_115=__str24; //@line 515 "_csv.c"
        __label__ = 3; break; //@line 515 "_csv.c"
      case 2: // $bb1
        $iftmp_115=__str25; //@line 515 "_csv.c"
        __label__ = 3; break; //@line 515 "_csv.c"
      case 3: // $bb2
        var $3=$iftmp_115; //@line 515 "_csv.c"
        var $4=$dialect_inst_addr; //@line 515 "_csv.c"
        var $5=_Py_BuildValue($3, allocate([$4,0,0,0], ["%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 515 "_csv.c"
        $ctor_args=$5; //@line 515 "_csv.c"
        var $6=($5)==0; //@line 516 "_csv.c"
        if ($6) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 516 "_csv.c"
      case 4: // $bb3
        $0=0; //@line 517 "_csv.c"
        __label__ = 8; break; //@line 517 "_csv.c"
      case 5: // $bb4
        var $7=$ctor_args; //@line 518 "_csv.c"
        var $8=$kwargs_addr; //@line 518 "_csv.c"
        var $9=_PyObject_Call(_Dialect_Type, $7, $8); //@line 518 "_csv.c"
        $dialect=$9; //@line 518 "_csv.c"
        var $10=$ctor_args; //@line 519 "_csv.c"
        var $11=$10; //@line 519 "_csv.c"
        var $12=HEAP[$11]; //@line 519 "_csv.c"
        var $13=($12) - 1; //@line 519 "_csv.c"
        var $14=$ctor_args; //@line 519 "_csv.c"
        var $15=$14; //@line 519 "_csv.c"
        HEAP[$15]=$13; //@line 519 "_csv.c"
        var $16=$ctor_args; //@line 519 "_csv.c"
        var $17=$16; //@line 519 "_csv.c"
        var $18=HEAP[$17]; //@line 519 "_csv.c"
        var $19=($18)==0; //@line 519 "_csv.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 519 "_csv.c"
      case 6: // $bb5
        var $20=$ctor_args; //@line 519 "_csv.c"
        var $21=$20+4; //@line 519 "_csv.c"
        var $22=HEAP[$21]; //@line 519 "_csv.c"
        var $23=$22+24; //@line 519 "_csv.c"
        var $24=HEAP[$23]; //@line 519 "_csv.c"
        var $25=$ctor_args; //@line 519 "_csv.c"
        FUNCTION_TABLE[$24]($25); //@line 519 "_csv.c"
        __label__ = 7; break; //@line 519 "_csv.c"
      case 7: // $bb6
        var $26=$dialect; //@line 520 "_csv.c"
        $0=$26; //@line 520 "_csv.c"
        __label__ = 8; break; //@line 520 "_csv.c"
      case 8: // $bb7
        var $27=$0; //@line 517 "_csv.c"
        $retval=$27; //@line 517 "_csv.c"
        var $retval8=$retval; //@line 517 "_csv.c"
        ;
        return $retval8; //@line 517 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_save_field($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $field;
        var $tmp;
        $self_addr=$self;
        var $1=$self_addr; //@line 531 "_csv.c"
        var $2=$1+32; //@line 531 "_csv.c"
        var $3=HEAP[$2]; //@line 531 "_csv.c"
        var $4=$self_addr; //@line 531 "_csv.c"
        var $5=$4+24; //@line 531 "_csv.c"
        var $6=HEAP[$5]; //@line 531 "_csv.c"
        var $7=_PyString_FromStringAndSize($6, $3); //@line 531 "_csv.c"
        $field=$7; //@line 531 "_csv.c"
        var $8=$field; //@line 532 "_csv.c"
        var $9=($8)==0; //@line 532 "_csv.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 532 "_csv.c"
      case 1: // $bb
        $0=-1; //@line 533 "_csv.c"
        __label__ = 13; break; //@line 533 "_csv.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 534 "_csv.c"
        var $11=$10+32; //@line 534 "_csv.c"
        HEAP[$11]=0; //@line 534 "_csv.c"
        var $12=$self_addr; //@line 535 "_csv.c"
        var $13=$12+36; //@line 535 "_csv.c"
        var $14=HEAP[$13]; //@line 535 "_csv.c"
        var $15=($14)!=0; //@line 535 "_csv.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 535 "_csv.c"
      case 3: // $bb2
        var $16=$self_addr; //@line 538 "_csv.c"
        var $17=$16+36; //@line 538 "_csv.c"
        HEAP[$17]=0; //@line 538 "_csv.c"
        var $18=$field; //@line 539 "_csv.c"
        var $19=_PyNumber_Float($18); //@line 539 "_csv.c"
        $tmp=$19; //@line 539 "_csv.c"
        var $20=$tmp; //@line 540 "_csv.c"
        var $21=($20)==0; //@line 540 "_csv.c"
        var $22=$field; //@line 541 "_csv.c"
        var $23=$22; //@line 541 "_csv.c"
        var $24=HEAP[$23]; //@line 541 "_csv.c"
        var $25=($24) - 1; //@line 541 "_csv.c"
        var $26=$field; //@line 541 "_csv.c"
        var $27=$26; //@line 541 "_csv.c"
        HEAP[$27]=$25; //@line 541 "_csv.c"
        var $28=$field; //@line 541 "_csv.c"
        var $29=$28; //@line 541 "_csv.c"
        var $30=HEAP[$29]; //@line 541 "_csv.c"
        var $31=($30)==0; //@line 541 "_csv.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 540 "_csv.c"
      case 4: // $bb3
        if ($31) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 541 "_csv.c"
      case 5: // $bb4
        var $32=$field; //@line 541 "_csv.c"
        var $33=$32+4; //@line 541 "_csv.c"
        var $34=HEAP[$33]; //@line 541 "_csv.c"
        var $35=$34+24; //@line 541 "_csv.c"
        var $36=HEAP[$35]; //@line 541 "_csv.c"
        var $37=$field; //@line 541 "_csv.c"
        FUNCTION_TABLE[$36]($37); //@line 541 "_csv.c"
        __label__ = 6; break; //@line 541 "_csv.c"
      case 6: // $bb5
        $0=-1; //@line 542 "_csv.c"
        __label__ = 13; break; //@line 542 "_csv.c"
      case 7: // $bb6
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 544 "_csv.c"
      case 8: // $bb7
        var $38=$field; //@line 544 "_csv.c"
        var $39=$38+4; //@line 544 "_csv.c"
        var $40=HEAP[$39]; //@line 544 "_csv.c"
        var $41=$40+24; //@line 544 "_csv.c"
        var $42=HEAP[$41]; //@line 544 "_csv.c"
        var $43=$field; //@line 544 "_csv.c"
        FUNCTION_TABLE[$42]($43); //@line 544 "_csv.c"
        __label__ = 9; break; //@line 544 "_csv.c"
      case 9: // $bb8
        var $44=$tmp; //@line 545 "_csv.c"
        $field=$44; //@line 545 "_csv.c"
        __label__ = 10; break; //@line 545 "_csv.c"
      case 10: // $bb9
        var $45=$self_addr; //@line 547 "_csv.c"
        var $46=$45+16; //@line 547 "_csv.c"
        var $47=HEAP[$46]; //@line 547 "_csv.c"
        var $48=$field; //@line 547 "_csv.c"
        var $49=_PyList_Append($47, $48); //@line 547 "_csv.c"
        var $50=$field; //@line 548 "_csv.c"
        var $51=$50; //@line 548 "_csv.c"
        var $52=HEAP[$51]; //@line 548 "_csv.c"
        var $53=($52) - 1; //@line 548 "_csv.c"
        var $54=$field; //@line 548 "_csv.c"
        var $55=$54; //@line 548 "_csv.c"
        HEAP[$55]=$53; //@line 548 "_csv.c"
        var $56=$field; //@line 548 "_csv.c"
        var $57=$56; //@line 548 "_csv.c"
        var $58=HEAP[$57]; //@line 548 "_csv.c"
        var $59=($58)==0; //@line 548 "_csv.c"
        if ($59) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 548 "_csv.c"
      case 11: // $bb10
        var $60=$field; //@line 548 "_csv.c"
        var $61=$60+4; //@line 548 "_csv.c"
        var $62=HEAP[$61]; //@line 548 "_csv.c"
        var $63=$62+24; //@line 548 "_csv.c"
        var $64=HEAP[$63]; //@line 548 "_csv.c"
        var $65=$field; //@line 548 "_csv.c"
        FUNCTION_TABLE[$64]($65); //@line 548 "_csv.c"
        __label__ = 12; break; //@line 548 "_csv.c"
      case 12: // $bb11
        $0=0; //@line 549 "_csv.c"
        __label__ = 13; break; //@line 549 "_csv.c"
      case 13: // $bb12
        var $66=$0; //@line 533 "_csv.c"
        $retval=$66; //@line 533 "_csv.c"
        var $retval13=$retval; //@line 533 "_csv.c"
        ;
        return $retval13; //@line 533 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_grow_buff($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 555 "_csv.c"
        var $2=$1+28; //@line 555 "_csv.c"
        var $3=HEAP[$2]; //@line 555 "_csv.c"
        var $4=($3)==0; //@line 555 "_csv.c"
        var $5=$self_addr; //@line 556 "_csv.c"
        var $6=$5+28; //@line 556 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 555 "_csv.c"
      case 1: // $bb
        HEAP[$6]=4096; //@line 556 "_csv.c"
        var $7=$self_addr; //@line 557 "_csv.c"
        var $8=$7+24; //@line 557 "_csv.c"
        var $9=HEAP[$8]; //@line 557 "_csv.c"
        var $10=($9)!=0; //@line 557 "_csv.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 557 "_csv.c"
      case 2: // $bb1
        var $11=$self_addr; //@line 558 "_csv.c"
        var $12=$11+24; //@line 558 "_csv.c"
        var $13=HEAP[$12]; //@line 558 "_csv.c"
        _PyMem_Free($13); //@line 558 "_csv.c"
        __label__ = 3; break; //@line 558 "_csv.c"
      case 3: // $bb2
        var $14=$self_addr; //@line 559 "_csv.c"
        var $15=$14+28; //@line 559 "_csv.c"
        var $16=HEAP[$15]; //@line 559 "_csv.c"
        var $17=_PyMem_Malloc($16); //@line 559 "_csv.c"
        var $18=$self_addr; //@line 559 "_csv.c"
        var $19=$18+24; //@line 559 "_csv.c"
        HEAP[$19]=$17; //@line 559 "_csv.c"
        __label__ = 7; break; //@line 559 "_csv.c"
      case 4: // $bb3
        var $20=HEAP[$6]; //@line 562 "_csv.c"
        var $21=($20) > 1073741823; //@line 562 "_csv.c"
        if ($21) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 562 "_csv.c"
      case 5: // $bb4
        var $22=_PyErr_NoMemory(); //@line 563 "_csv.c"
        $0=0; //@line 564 "_csv.c"
        __label__ = 10; break; //@line 564 "_csv.c"
      case 6: // $bb5
        var $23=$self_addr; //@line 566 "_csv.c"
        var $24=$23+28; //@line 566 "_csv.c"
        var $25=HEAP[$24]; //@line 566 "_csv.c"
        var $26=($25) * 2; //@line 566 "_csv.c"
        var $27=$self_addr; //@line 566 "_csv.c"
        var $28=$27+28; //@line 566 "_csv.c"
        HEAP[$28]=$26; //@line 566 "_csv.c"
        var $29=$self_addr; //@line 567 "_csv.c"
        var $30=$29+28; //@line 567 "_csv.c"
        var $31=HEAP[$30]; //@line 567 "_csv.c"
        var $32=$self_addr; //@line 567 "_csv.c"
        var $33=$32+24; //@line 567 "_csv.c"
        var $34=HEAP[$33]; //@line 567 "_csv.c"
        var $35=_PyMem_Realloc($34, $31); //@line 567 "_csv.c"
        var $36=$self_addr; //@line 567 "_csv.c"
        var $37=$36+24; //@line 567 "_csv.c"
        HEAP[$37]=$35; //@line 567 "_csv.c"
        __label__ = 7; break; //@line 567 "_csv.c"
      case 7: // $bb6
        var $38=$self_addr; //@line 569 "_csv.c"
        var $39=$38+24; //@line 569 "_csv.c"
        var $40=HEAP[$39]; //@line 569 "_csv.c"
        var $41=($40)==0; //@line 569 "_csv.c"
        if ($41) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 569 "_csv.c"
      case 8: // $bb7
        var $42=_PyErr_NoMemory(); //@line 570 "_csv.c"
        $0=0; //@line 571 "_csv.c"
        __label__ = 10; break; //@line 571 "_csv.c"
      case 9: // $bb8
        $0=1; //@line 573 "_csv.c"
        __label__ = 10; break; //@line 573 "_csv.c"
      case 10: // $bb9
        var $43=$0; //@line 564 "_csv.c"
        $retval=$43; //@line 564 "_csv.c"
        var $retval10=$retval; //@line 564 "_csv.c"
        ;
        return $retval10; //@line 564 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_add_char($self, $c) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $c_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $c_addr=$c;
        var $1=$self_addr; //@line 579 "_csv.c"
        var $2=$1+32; //@line 579 "_csv.c"
        var $3=HEAP[$2]; //@line 579 "_csv.c"
        var $4=HEAP[_field_limit]; //@line 579 "_csv.c"
        var $5=($3) >= ($4); //@line 579 "_csv.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 579 "_csv.c"
      case 1: // $bb
        var $6=HEAP[_field_limit]; //@line 580 "_csv.c"
        var $7=HEAP[_error_obj]; //@line 580 "_csv.c"
        var $8=_PyErr_Format($7, __str26, allocate([$6,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 580 "_csv.c"
        $0=-1; //@line 582 "_csv.c"
        __label__ = 6; break; //@line 582 "_csv.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 584 "_csv.c"
        var $10=$9+32; //@line 584 "_csv.c"
        var $11=HEAP[$10]; //@line 584 "_csv.c"
        var $12=$self_addr; //@line 584 "_csv.c"
        var $13=$12+28; //@line 584 "_csv.c"
        var $14=HEAP[$13]; //@line 584 "_csv.c"
        var $15=($11)==($14); //@line 584 "_csv.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 584 "_csv.c"
      case 3: // $bb2
        var $16=$self_addr; //@line 584 "_csv.c"
        var $17=_parse_grow_buff($16); //@line 584 "_csv.c"
        var $18=($17)==0; //@line 584 "_csv.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 584 "_csv.c"
      case 4: // $bb3
        $0=-1; //@line 585 "_csv.c"
        __label__ = 6; break; //@line 585 "_csv.c"
      case 5: // $bb4
        var $19=$self_addr; //@line 586 "_csv.c"
        var $20=$19+24; //@line 586 "_csv.c"
        var $21=HEAP[$20]; //@line 586 "_csv.c"
        var $22=$self_addr; //@line 586 "_csv.c"
        var $23=$22+32; //@line 586 "_csv.c"
        var $24=HEAP[$23]; //@line 586 "_csv.c"
        var $25=$21+$24; //@line 586 "_csv.c"
        var $26=$c_addr; //@line 586 "_csv.c"
        HEAP[$25]=$26; //@line 586 "_csv.c"
        var $27=($24) + 1; //@line 586 "_csv.c"
        var $28=$self_addr; //@line 586 "_csv.c"
        var $29=$28+32; //@line 586 "_csv.c"
        HEAP[$29]=$27; //@line 586 "_csv.c"
        $0=0; //@line 587 "_csv.c"
        __label__ = 6; break; //@line 587 "_csv.c"
      case 6: // $bb5
        var $30=$0; //@line 582 "_csv.c"
        $retval=$30; //@line 582 "_csv.c"
        var $retval6=$retval; //@line 582 "_csv.c"
        ;
        return $retval6; //@line 582 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_process_char($self, $c) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $c_addr;
        var $retval;
        var $iftmp_122;
        var $iftmp_121;
        var $iftmp_120;
        var $0;
        var $dialect;
        $self_addr=$self;
        $c_addr=$c;
        var $1=$self_addr; //@line 593 "_csv.c"
        var $2=$1+12; //@line 593 "_csv.c"
        var $3=HEAP[$2]; //@line 593 "_csv.c"
        $dialect=$3; //@line 593 "_csv.c"
        var $4=$self_addr; //@line 595 "_csv.c"
        var $5=$4+20; //@line 595 "_csv.c"
        var $6=HEAP[$5]; //@line 595 "_csv.c"
        if ($6 == 0) {
          __label__ = 1; break;
        }
        else if ($6 == 1) {
          __label__ = 5; break;
        }
        else if ($6 == 2) {
          __label__ = 27; break;
        }
        else if ($6 == 3) {
          __label__ = 32; break;
        }
        else if ($6 == 4) {
          __label__ = 47; break;
        }
        else if ($6 == 5) {
          __label__ = 57; break;
        }
        else if ($6 == 6) {
          __label__ = 62; break;
        }
        else if ($6 == 7) {
          __label__ = 83; break;
        }
        else {
        __label__ = 87; break;
        }
        
      case 1: // $bb
        var $7=$c_addr; //@line 598 "_csv.c"
        var $8=($7)==0; //@line 598 "_csv.c"
        if ($8) { __label__ = 87; break; } else { __label__ = 2; break; } //@line 598 "_csv.c"
      case 2: // $bb1
        var $9=$c_addr; //@line 601 "_csv.c"
        var $10=($9)==10; //@line 601 "_csv.c"
        var $11=$c_addr; //@line 601 "_csv.c"
        var $12=($11)==13; //@line 601 "_csv.c"
        var $or_cond=($10) | ($12);
        var $13=$self_addr; //@line 602 "_csv.c"
        var $14=$13+20; //@line 602 "_csv.c"
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 601 "_csv.c"
      case 3: // $bb3
        HEAP[$14]=7; //@line 602 "_csv.c"
        __label__ = 87; break; //@line 602 "_csv.c"
      case 4: // $bb4
        HEAP[$14]=1; //@line 606 "_csv.c"
        __label__ = 5; break; //@line 606 "_csv.c"
      case 5: // $bb5
        var $15=$c_addr; //@line 610 "_csv.c"
        var $16=($15)==10; //@line 610 "_csv.c"
        var $17=$c_addr; //@line 610 "_csv.c"
        var $18=($17)==13; //@line 610 "_csv.c"
        var $or_cond3=($16) | ($18);
        var $19=$c_addr; //@line 610 "_csv.c"
        var $20=($19)==0; //@line 610 "_csv.c"
        var $or_cond5=($or_cond3) | ($20);
        if ($or_cond5) { __label__ = 6; break; } else { __label__ = 12; break; } //@line 610 "_csv.c"
      case 6: // $bb8
        var $21=$self_addr; //@line 612 "_csv.c"
        var $22=_parse_save_field($21); //@line 612 "_csv.c"
        var $23=($22) < 0; //@line 612 "_csv.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 612 "_csv.c"
      case 7: // $bb9
        $0=-1; //@line 613 "_csv.c"
        __label__ = 88; break; //@line 613 "_csv.c"
      case 8: // $bb10
        var $24=$c_addr; //@line 614 "_csv.c"
        var $25=($24)==0; //@line 614 "_csv.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 614 "_csv.c"
      case 9: // $bb11
        $iftmp_120=0; //@line 614 "_csv.c"
        __label__ = 11; break; //@line 614 "_csv.c"
      case 10: // $bb12
        $iftmp_120=7; //@line 614 "_csv.c"
        __label__ = 11; break; //@line 614 "_csv.c"
      case 11: // $bb13
        var $26=$self_addr; //@line 614 "_csv.c"
        var $27=$26+20; //@line 614 "_csv.c"
        var $28=$iftmp_120; //@line 614 "_csv.c"
        HEAP[$27]=$28; //@line 614 "_csv.c"
        __label__ = 87; break; //@line 614 "_csv.c"
      case 12: // $bb14
        var $29=$dialect; //@line 616 "_csv.c"
        var $30=$29+13; //@line 616 "_csv.c"
        var $31=HEAP[$30]; //@line 616 "_csv.c"
        var $32=$c_addr; //@line 616 "_csv.c"
        var $33=($31)!=($32); //@line 616 "_csv.c"
        if ($33) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 616 "_csv.c"
      case 13: // $bb15
        var $34=$dialect; //@line 616 "_csv.c"
        var $35=$34+24; //@line 616 "_csv.c"
        var $36=HEAP[$35]; //@line 616 "_csv.c"
        var $37=($36)==3; //@line 616 "_csv.c"
        if ($37) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 616 "_csv.c"
      case 14: // $bb16
        var $38=$self_addr; //@line 619 "_csv.c"
        var $39=$38+20; //@line 619 "_csv.c"
        HEAP[$39]=4; //@line 619 "_csv.c"
        __label__ = 87; break; //@line 619 "_csv.c"
      case 15: // $bb17
        var $40=$dialect; //@line 621 "_csv.c"
        var $41=$40+14; //@line 621 "_csv.c"
        var $42=HEAP[$41]; //@line 621 "_csv.c"
        var $43=$c_addr; //@line 621 "_csv.c"
        var $44=($42)==($43); //@line 621 "_csv.c"
        if ($44) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 621 "_csv.c"
      case 16: // $bb18
        var $45=$self_addr; //@line 623 "_csv.c"
        var $46=$45+20; //@line 623 "_csv.c"
        HEAP[$46]=2; //@line 623 "_csv.c"
        __label__ = 87; break; //@line 623 "_csv.c"
      case 17: // $bb19
        var $47=$c_addr; //@line 625 "_csv.c"
        var $48=($47)!=32; //@line 625 "_csv.c"
        if ($48) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 625 "_csv.c"
      case 18: // $bb20
        var $49=$dialect; //@line 625 "_csv.c"
        var $50=$49+16; //@line 625 "_csv.c"
        var $51=HEAP[$50]; //@line 625 "_csv.c"
        var $52=($51)==0; //@line 625 "_csv.c"
        if ($52) { __label__ = 19; break; } else { __label__ = 87; break; } //@line 625 "_csv.c"
      case 19: // $bb22
        var $53=$dialect; //@line 628 "_csv.c"
        var $54=$53+12; //@line 628 "_csv.c"
        var $55=HEAP[$54]; //@line 628 "_csv.c"
        var $56=$c_addr; //@line 628 "_csv.c"
        var $57=($55)==($56); //@line 628 "_csv.c"
        if ($57) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 628 "_csv.c"
      case 20: // $bb23
        var $58=$self_addr; //@line 630 "_csv.c"
        var $59=_parse_save_field($58); //@line 630 "_csv.c"
        var $60=($59) < 0; //@line 630 "_csv.c"
        if ($60) { __label__ = 21; break; } else { __label__ = 87; break; } //@line 630 "_csv.c"
      case 21: // $bb24
        $0=-1; //@line 631 "_csv.c"
        __label__ = 88; break; //@line 631 "_csv.c"
      case 22: // $bb26
        var $61=$dialect; //@line 635 "_csv.c"
        var $62=$61+24; //@line 635 "_csv.c"
        var $63=HEAP[$62]; //@line 635 "_csv.c"
        var $64=($63)==2; //@line 635 "_csv.c"
        if ($64) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 635 "_csv.c"
      case 23: // $bb27
        var $65=$self_addr; //@line 636 "_csv.c"
        var $66=$65+36; //@line 636 "_csv.c"
        HEAP[$66]=1; //@line 636 "_csv.c"
        __label__ = 24; break; //@line 636 "_csv.c"
      case 24: // $bb28
        var $67=$c_addr; //@line 637 "_csv.c"
        var $68=($67); //@line 637 "_csv.c"
        var $69=$self_addr; //@line 637 "_csv.c"
        var $70=((($68)) & 255); //@line 637 "_csv.c"
        var $71=_parse_add_char($69, $70); //@line 637 "_csv.c"
        var $72=($71) < 0; //@line 637 "_csv.c"
        if ($72) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 637 "_csv.c"
      case 25: // $bb29
        $0=-1; //@line 638 "_csv.c"
        __label__ = 88; break; //@line 638 "_csv.c"
      case 26: // $bb30
        var $73=$self_addr; //@line 639 "_csv.c"
        var $74=$73+20; //@line 639 "_csv.c"
        HEAP[$74]=3; //@line 639 "_csv.c"
        __label__ = 87; break; //@line 639 "_csv.c"
      case 27: // $bb32
        var $75=$c_addr; //@line 644 "_csv.c"
        var $76=($75)==0; //@line 644 "_csv.c"
        if ($76) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 644 "_csv.c"
      case 28: // $bb33
        $c_addr=10; //@line 645 "_csv.c"
        __label__ = 29; break; //@line 645 "_csv.c"
      case 29: // $bb34
        var $77=$c_addr; //@line 646 "_csv.c"
        var $78=($77); //@line 646 "_csv.c"
        var $79=$self_addr; //@line 646 "_csv.c"
        var $80=((($78)) & 255); //@line 646 "_csv.c"
        var $81=_parse_add_char($79, $80); //@line 646 "_csv.c"
        var $82=($81) < 0; //@line 646 "_csv.c"
        if ($82) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 646 "_csv.c"
      case 30: // $bb35
        $0=-1; //@line 647 "_csv.c"
        __label__ = 88; break; //@line 647 "_csv.c"
      case 31: // $bb36
        var $83=$self_addr; //@line 648 "_csv.c"
        var $84=$83+20; //@line 648 "_csv.c"
        HEAP[$84]=3; //@line 648 "_csv.c"
        __label__ = 87; break; //@line 648 "_csv.c"
      case 32: // $bb37
        var $85=$c_addr; //@line 653 "_csv.c"
        var $86=($85)==10; //@line 653 "_csv.c"
        var $87=$c_addr; //@line 653 "_csv.c"
        var $88=($87)==13; //@line 653 "_csv.c"
        var $or_cond7=($86) | ($88);
        var $89=$c_addr; //@line 653 "_csv.c"
        var $90=($89)==0; //@line 653 "_csv.c"
        var $or_cond9=($or_cond7) | ($90);
        if ($or_cond9) { __label__ = 33; break; } else { __label__ = 39; break; } //@line 653 "_csv.c"
      case 33: // $bb40
        var $91=$self_addr; //@line 655 "_csv.c"
        var $92=_parse_save_field($91); //@line 655 "_csv.c"
        var $93=($92) < 0; //@line 655 "_csv.c"
        if ($93) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 655 "_csv.c"
      case 34: // $bb41
        $0=-1; //@line 656 "_csv.c"
        __label__ = 88; break; //@line 656 "_csv.c"
      case 35: // $bb42
        var $94=$c_addr; //@line 657 "_csv.c"
        var $95=($94)==0; //@line 657 "_csv.c"
        if ($95) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 657 "_csv.c"
      case 36: // $bb43
        $iftmp_121=0; //@line 657 "_csv.c"
        __label__ = 38; break; //@line 657 "_csv.c"
      case 37: // $bb44
        $iftmp_121=7; //@line 657 "_csv.c"
        __label__ = 38; break; //@line 657 "_csv.c"
      case 38: // $bb45
        var $96=$self_addr; //@line 657 "_csv.c"
        var $97=$96+20; //@line 657 "_csv.c"
        var $98=$iftmp_121; //@line 657 "_csv.c"
        HEAP[$97]=$98; //@line 657 "_csv.c"
        __label__ = 87; break; //@line 657 "_csv.c"
      case 39: // $bb46
        var $99=$dialect; //@line 659 "_csv.c"
        var $100=$99+14; //@line 659 "_csv.c"
        var $101=HEAP[$100]; //@line 659 "_csv.c"
        var $102=$c_addr; //@line 659 "_csv.c"
        var $103=($101)==($102); //@line 659 "_csv.c"
        if ($103) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 659 "_csv.c"
      case 40: // $bb47
        var $104=$self_addr; //@line 661 "_csv.c"
        var $105=$104+20; //@line 661 "_csv.c"
        HEAP[$105]=2; //@line 661 "_csv.c"
        __label__ = 87; break; //@line 661 "_csv.c"
      case 41: // $bb48
        var $106=$dialect; //@line 663 "_csv.c"
        var $107=$106+12; //@line 663 "_csv.c"
        var $108=HEAP[$107]; //@line 663 "_csv.c"
        var $109=$c_addr; //@line 663 "_csv.c"
        var $110=($108)==($109); //@line 663 "_csv.c"
        if ($110) { __label__ = 42; break; } else { __label__ = 45; break; } //@line 663 "_csv.c"
      case 42: // $bb49
        var $111=$self_addr; //@line 665 "_csv.c"
        var $112=_parse_save_field($111); //@line 665 "_csv.c"
        var $113=($112) < 0; //@line 665 "_csv.c"
        if ($113) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 665 "_csv.c"
      case 43: // $bb50
        $0=-1; //@line 666 "_csv.c"
        __label__ = 88; break; //@line 666 "_csv.c"
      case 44: // $bb51
        var $114=$self_addr; //@line 667 "_csv.c"
        var $115=$114+20; //@line 667 "_csv.c"
        HEAP[$115]=1; //@line 667 "_csv.c"
        __label__ = 87; break; //@line 667 "_csv.c"
      case 45: // $bb52
        var $116=$c_addr; //@line 671 "_csv.c"
        var $117=($116); //@line 671 "_csv.c"
        var $118=$self_addr; //@line 671 "_csv.c"
        var $119=((($117)) & 255); //@line 671 "_csv.c"
        var $120=_parse_add_char($118, $119); //@line 671 "_csv.c"
        var $121=($120) < 0; //@line 671 "_csv.c"
        if ($121) { __label__ = 46; break; } else { __label__ = 87; break; } //@line 671 "_csv.c"
      case 46: // $bb53
        $0=-1; //@line 672 "_csv.c"
        __label__ = 88; break; //@line 672 "_csv.c"
      case 47: // $bb55
        var $122=$c_addr; //@line 678 "_csv.c"
        var $123=($122)!=0; //@line 678 "_csv.c"
        if ($123) { __label__ = 48; break; } else { __label__ = 87; break; } //@line 678 "_csv.c"
      case 48: // $bb56
        var $124=$dialect; //@line 680 "_csv.c"
        var $125=$124+14; //@line 680 "_csv.c"
        var $126=HEAP[$125]; //@line 680 "_csv.c"
        var $127=$c_addr; //@line 680 "_csv.c"
        var $128=($126)==($127); //@line 680 "_csv.c"
        if ($128) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 680 "_csv.c"
      case 49: // $bb57
        var $129=$self_addr; //@line 682 "_csv.c"
        var $130=$129+20; //@line 682 "_csv.c"
        HEAP[$130]=5; //@line 682 "_csv.c"
        __label__ = 87; break; //@line 682 "_csv.c"
      case 50: // $bb58
        var $131=$dialect; //@line 684 "_csv.c"
        var $132=$131+13; //@line 684 "_csv.c"
        var $133=HEAP[$132]; //@line 684 "_csv.c"
        var $134=$c_addr; //@line 684 "_csv.c"
        var $135=($133)!=($134); //@line 684 "_csv.c"
        if ($135) { __label__ = 55; break; } else { __label__ = 51; break; } //@line 684 "_csv.c"
      case 51: // $bb59
        var $136=$dialect; //@line 684 "_csv.c"
        var $137=$136+24; //@line 684 "_csv.c"
        var $138=HEAP[$137]; //@line 684 "_csv.c"
        var $139=($138)==3; //@line 684 "_csv.c"
        if ($139) { __label__ = 55; break; } else { __label__ = 52; break; } //@line 684 "_csv.c"
      case 52: // $bb60
        var $140=$dialect; //@line 686 "_csv.c"
        var $141=$140+8; //@line 686 "_csv.c"
        var $142=HEAP[$141]; //@line 686 "_csv.c"
        var $143=($142)!=0; //@line 686 "_csv.c"
        var $144=$self_addr; //@line 688 "_csv.c"
        var $145=$144+20; //@line 688 "_csv.c"
        if ($143) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 686 "_csv.c"
      case 53: // $bb61
        HEAP[$145]=6; //@line 688 "_csv.c"
        __label__ = 87; break; //@line 688 "_csv.c"
      case 54: // $bb62
        HEAP[$145]=3; //@line 692 "_csv.c"
        __label__ = 87; break; //@line 692 "_csv.c"
      case 55: // $bb64
        var $146=$c_addr; //@line 697 "_csv.c"
        var $147=($146); //@line 697 "_csv.c"
        var $148=$self_addr; //@line 697 "_csv.c"
        var $149=((($147)) & 255); //@line 697 "_csv.c"
        var $150=_parse_add_char($148, $149); //@line 697 "_csv.c"
        var $151=($150) < 0; //@line 697 "_csv.c"
        if ($151) { __label__ = 56; break; } else { __label__ = 87; break; } //@line 697 "_csv.c"
      case 56: // $bb65
        $0=-1; //@line 698 "_csv.c"
        __label__ = 88; break; //@line 698 "_csv.c"
      case 57: // $bb67
        var $152=$c_addr; //@line 703 "_csv.c"
        var $153=($152)==0; //@line 703 "_csv.c"
        if ($153) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 703 "_csv.c"
      case 58: // $bb68
        $c_addr=10; //@line 704 "_csv.c"
        __label__ = 59; break; //@line 704 "_csv.c"
      case 59: // $bb69
        var $154=$c_addr; //@line 705 "_csv.c"
        var $155=($154); //@line 705 "_csv.c"
        var $156=$self_addr; //@line 705 "_csv.c"
        var $157=((($155)) & 255); //@line 705 "_csv.c"
        var $158=_parse_add_char($156, $157); //@line 705 "_csv.c"
        var $159=($158) < 0; //@line 705 "_csv.c"
        if ($159) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 705 "_csv.c"
      case 60: // $bb70
        $0=-1; //@line 706 "_csv.c"
        __label__ = 88; break; //@line 706 "_csv.c"
      case 61: // $bb71
        var $160=$self_addr; //@line 707 "_csv.c"
        var $161=$160+20; //@line 707 "_csv.c"
        HEAP[$161]=4; //@line 707 "_csv.c"
        __label__ = 87; break; //@line 707 "_csv.c"
      case 62: // $bb72
        var $162=$dialect; //@line 712 "_csv.c"
        var $163=$162+24; //@line 712 "_csv.c"
        var $164=HEAP[$163]; //@line 712 "_csv.c"
        var $165=($164)==3; //@line 712 "_csv.c"
        if ($165) { __label__ = 67; break; } else { __label__ = 63; break; } //@line 712 "_csv.c"
      case 63: // $bb73
        var $166=$dialect; //@line 712 "_csv.c"
        var $167=$166+13; //@line 712 "_csv.c"
        var $168=HEAP[$167]; //@line 712 "_csv.c"
        var $169=$c_addr; //@line 712 "_csv.c"
        var $170=($168)!=($169); //@line 712 "_csv.c"
        if ($170) { __label__ = 67; break; } else { __label__ = 64; break; } //@line 712 "_csv.c"
      case 64: // $bb74
        var $171=$c_addr; //@line 715 "_csv.c"
        var $172=($171); //@line 715 "_csv.c"
        var $173=$self_addr; //@line 715 "_csv.c"
        var $174=((($172)) & 255); //@line 715 "_csv.c"
        var $175=_parse_add_char($173, $174); //@line 715 "_csv.c"
        var $176=($175) < 0; //@line 715 "_csv.c"
        if ($176) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 715 "_csv.c"
      case 65: // $bb75
        $0=-1; //@line 716 "_csv.c"
        __label__ = 88; break; //@line 716 "_csv.c"
      case 66: // $bb76
        var $177=$self_addr; //@line 717 "_csv.c"
        var $178=$177+20; //@line 717 "_csv.c"
        HEAP[$178]=4; //@line 717 "_csv.c"
        __label__ = 87; break; //@line 717 "_csv.c"
      case 67: // $bb77
        var $179=$dialect; //@line 719 "_csv.c"
        var $180=$179+12; //@line 719 "_csv.c"
        var $181=HEAP[$180]; //@line 719 "_csv.c"
        var $182=$c_addr; //@line 719 "_csv.c"
        var $183=($181)==($182); //@line 719 "_csv.c"
        if ($183) { __label__ = 68; break; } else { __label__ = 71; break; } //@line 719 "_csv.c"
      case 68: // $bb78
        var $184=$self_addr; //@line 721 "_csv.c"
        var $185=_parse_save_field($184); //@line 721 "_csv.c"
        var $186=($185) < 0; //@line 721 "_csv.c"
        if ($186) { __label__ = 69; break; } else { __label__ = 70; break; } //@line 721 "_csv.c"
      case 69: // $bb79
        $0=-1; //@line 722 "_csv.c"
        __label__ = 88; break; //@line 722 "_csv.c"
      case 70: // $bb80
        var $187=$self_addr; //@line 723 "_csv.c"
        var $188=$187+20; //@line 723 "_csv.c"
        HEAP[$188]=1; //@line 723 "_csv.c"
        __label__ = 87; break; //@line 723 "_csv.c"
      case 71: // $bb81
        var $189=$c_addr; //@line 725 "_csv.c"
        var $190=($189)==10; //@line 725 "_csv.c"
        var $191=$c_addr; //@line 725 "_csv.c"
        var $192=($191)==13; //@line 725 "_csv.c"
        var $or_cond11=($190) | ($192);
        var $193=$c_addr; //@line 725 "_csv.c"
        var $194=($193)==0; //@line 725 "_csv.c"
        var $or_cond13=($or_cond11) | ($194);
        if ($or_cond13) { __label__ = 72; break; } else { __label__ = 78; break; } //@line 725 "_csv.c"
      case 72: // $bb84
        var $195=$self_addr; //@line 727 "_csv.c"
        var $196=_parse_save_field($195); //@line 727 "_csv.c"
        var $197=($196) < 0; //@line 727 "_csv.c"
        if ($197) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 727 "_csv.c"
      case 73: // $bb85
        $0=-1; //@line 728 "_csv.c"
        __label__ = 88; break; //@line 728 "_csv.c"
      case 74: // $bb86
        var $198=$c_addr; //@line 729 "_csv.c"
        var $199=($198)==0; //@line 729 "_csv.c"
        if ($199) { __label__ = 75; break; } else { __label__ = 76; break; } //@line 729 "_csv.c"
      case 75: // $bb87
        $iftmp_122=0; //@line 729 "_csv.c"
        __label__ = 77; break; //@line 729 "_csv.c"
      case 76: // $bb88
        $iftmp_122=7; //@line 729 "_csv.c"
        __label__ = 77; break; //@line 729 "_csv.c"
      case 77: // $bb89
        var $200=$self_addr; //@line 729 "_csv.c"
        var $201=$200+20; //@line 729 "_csv.c"
        var $202=$iftmp_122; //@line 729 "_csv.c"
        HEAP[$201]=$202; //@line 729 "_csv.c"
        __label__ = 87; break; //@line 729 "_csv.c"
      case 78: // $bb90
        var $203=$dialect; //@line 731 "_csv.c"
        var $204=$203+28; //@line 731 "_csv.c"
        var $205=HEAP[$204]; //@line 731 "_csv.c"
        var $206=($205)==0; //@line 731 "_csv.c"
        if ($206) { __label__ = 79; break; } else { __label__ = 82; break; } //@line 731 "_csv.c"
      case 79: // $bb91
        var $207=$c_addr; //@line 732 "_csv.c"
        var $208=($207); //@line 732 "_csv.c"
        var $209=$self_addr; //@line 732 "_csv.c"
        var $210=((($208)) & 255); //@line 732 "_csv.c"
        var $211=_parse_add_char($209, $210); //@line 732 "_csv.c"
        var $212=($211) < 0; //@line 732 "_csv.c"
        if ($212) { __label__ = 80; break; } else { __label__ = 81; break; } //@line 732 "_csv.c"
      case 80: // $bb92
        $0=-1; //@line 733 "_csv.c"
        __label__ = 88; break; //@line 733 "_csv.c"
      case 81: // $bb93
        var $213=$self_addr; //@line 734 "_csv.c"
        var $214=$213+20; //@line 734 "_csv.c"
        HEAP[$214]=3; //@line 734 "_csv.c"
        __label__ = 87; break; //@line 734 "_csv.c"
      case 82: // $bb94
        var $215=$dialect; //@line 738 "_csv.c"
        var $216=$215+13; //@line 738 "_csv.c"
        var $217=HEAP[$216]; //@line 738 "_csv.c"
        var $218=($217); //@line 738 "_csv.c"
        var $219=$dialect; //@line 738 "_csv.c"
        var $220=$219+12; //@line 738 "_csv.c"
        var $221=HEAP[$220]; //@line 738 "_csv.c"
        var $222=($221); //@line 738 "_csv.c"
        var $223=HEAP[_error_obj]; //@line 738 "_csv.c"
        var $224=_PyErr_Format($223, __str27, allocate([$222,0,0,0,$218,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 738 "_csv.c"
        $0=-1; //@line 741 "_csv.c"
        __label__ = 88; break; //@line 741 "_csv.c"
      case 83: // $bb96
        var $225=$c_addr; //@line 746 "_csv.c"
        var $226=($225)!=10; //@line 746 "_csv.c"
        var $227=$c_addr; //@line 746 "_csv.c"
        var $228=($227)!=13; //@line 746 "_csv.c"
        var $or_cond15=($226) & ($228);
        if ($or_cond15) { __label__ = 84; break; } else { __label__ = 87; break; } //@line 746 "_csv.c"
      case 84: // $bb98
        var $229=$c_addr; //@line 748 "_csv.c"
        var $230=($229)==0; //@line 748 "_csv.c"
        if ($230) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 748 "_csv.c"
      case 85: // $bb99
        var $231=$self_addr; //@line 749 "_csv.c"
        var $232=$231+20; //@line 749 "_csv.c"
        HEAP[$232]=0; //@line 749 "_csv.c"
        __label__ = 87; break; //@line 749 "_csv.c"
      case 86: // $bb100
        var $233=HEAP[_error_obj]; //@line 751 "_csv.c"
        var $234=_PyErr_Format($233, __str28, allocate(1, "i32", ALLOC_STACK)); //@line 751 "_csv.c"
        $0=-1; //@line 752 "_csv.c"
        __label__ = 88; break; //@line 752 "_csv.c"
      case 87: // $bb101
        $0=0; //@line 757 "_csv.c"
        __label__ = 88; break; //@line 757 "_csv.c"
      case 88: // $bb102
        var $235=$0; //@line 613 "_csv.c"
        $retval=$235; //@line 613 "_csv.c"
        var $retval103=$retval; //@line 613 "_csv.c"
        ;
        return $retval103; //@line 613 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _parse_reset($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=$self_addr; //@line 763 "_csv.c"
        var $2=$1+16; //@line 763 "_csv.c"
        var $3=HEAP[$2]; //@line 763 "_csv.c"
        var $4=($3)!=0; //@line 763 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 763 "_csv.c"
      case 1: // $bb
        var $5=$self_addr; //@line 763 "_csv.c"
        var $6=$5+16; //@line 763 "_csv.c"
        var $7=HEAP[$6]; //@line 763 "_csv.c"
        var $8=$7; //@line 763 "_csv.c"
        var $9=HEAP[$8]; //@line 763 "_csv.c"
        var $10=($9) - 1; //@line 763 "_csv.c"
        var $11=$7; //@line 763 "_csv.c"
        HEAP[$11]=$10; //@line 763 "_csv.c"
        var $12=$7; //@line 763 "_csv.c"
        var $13=HEAP[$12]; //@line 763 "_csv.c"
        var $14=($13)==0; //@line 763 "_csv.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 763 "_csv.c"
      case 2: // $bb1
        var $15=$self_addr; //@line 763 "_csv.c"
        var $16=$15+16; //@line 763 "_csv.c"
        var $17=HEAP[$16]; //@line 763 "_csv.c"
        var $18=$17+4; //@line 763 "_csv.c"
        var $19=HEAP[$18]; //@line 763 "_csv.c"
        var $20=$19+24; //@line 763 "_csv.c"
        var $21=HEAP[$20]; //@line 763 "_csv.c"
        var $22=$self_addr; //@line 763 "_csv.c"
        var $23=$22+16; //@line 763 "_csv.c"
        var $24=HEAP[$23]; //@line 763 "_csv.c"
        FUNCTION_TABLE[$21]($24); //@line 763 "_csv.c"
        __label__ = 3; break; //@line 763 "_csv.c"
      case 3: // $bb2
        var $25=_PyList_New(0); //@line 764 "_csv.c"
        var $26=$self_addr; //@line 764 "_csv.c"
        var $27=$26+16; //@line 764 "_csv.c"
        HEAP[$27]=$25; //@line 764 "_csv.c"
        var $28=$self_addr; //@line 765 "_csv.c"
        var $29=$28+16; //@line 765 "_csv.c"
        var $30=HEAP[$29]; //@line 765 "_csv.c"
        var $31=($30)==0; //@line 765 "_csv.c"
        if ($31) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 765 "_csv.c"
      case 4: // $bb3
        $0=-1; //@line 766 "_csv.c"
        __label__ = 6; break; //@line 766 "_csv.c"
      case 5: // $bb4
        var $32=$self_addr; //@line 767 "_csv.c"
        var $33=$32+32; //@line 767 "_csv.c"
        HEAP[$33]=0; //@line 767 "_csv.c"
        var $34=$self_addr; //@line 768 "_csv.c"
        var $35=$34+20; //@line 768 "_csv.c"
        HEAP[$35]=0; //@line 768 "_csv.c"
        var $36=$self_addr; //@line 769 "_csv.c"
        var $37=$36+36; //@line 769 "_csv.c"
        HEAP[$37]=0; //@line 769 "_csv.c"
        $0=0; //@line 770 "_csv.c"
        __label__ = 6; break; //@line 770 "_csv.c"
      case 6: // $bb5
        var $38=$0; //@line 766 "_csv.c"
        $retval=$38; //@line 766 "_csv.c"
        var $retval6=$retval; //@line 766 "_csv.c"
        ;
        return $retval6; //@line 766 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Reader_iternext($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $lineobj;
        var $fields;
        var $line;
        var $c;
        var $linelen;
        $self_addr=$self;
        $fields=0; //@line 777 "_csv.c"
        var $1=$self_addr; //@line 781 "_csv.c"
        var $2=_parse_reset($1); //@line 781 "_csv.c"
        var $3=($2) < 0; //@line 781 "_csv.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 781 "_csv.c"
      case 1: // $bb
        $0=0; //@line 782 "_csv.c"
        __label__ = 26; break; //@line 782 "_csv.c"
      case 2: // $bb1
        var $4=$self_addr; //@line 784 "_csv.c"
        var $5=$4+8; //@line 784 "_csv.c"
        var $6=HEAP[$5]; //@line 784 "_csv.c"
        var $7=_PyIter_Next($6); //@line 784 "_csv.c"
        $lineobj=$7; //@line 784 "_csv.c"
        var $8=($7)==0; //@line 785 "_csv.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 785 "_csv.c"
      case 3: // $bb2
        var $9=_PyErr_Occurred(); //@line 787 "_csv.c"
        var $10=($9)==0; //@line 787 "_csv.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 787 "_csv.c"
      case 4: // $bb3
        var $11=$self_addr; //@line 787 "_csv.c"
        var $12=$11+32; //@line 787 "_csv.c"
        var $13=HEAP[$12]; //@line 787 "_csv.c"
        var $14=($13)!=0; //@line 787 "_csv.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 787 "_csv.c"
      case 5: // $bb4
        var $15=HEAP[_error_obj]; //@line 788 "_csv.c"
        var $16=_PyErr_Format($15, __str29, allocate(1, "i32", ALLOC_STACK)); //@line 788 "_csv.c"
        __label__ = 6; break; //@line 788 "_csv.c"
      case 6: // $bb5
        $0=0; //@line 790 "_csv.c"
        __label__ = 26; break; //@line 790 "_csv.c"
      case 7: // $bb6
        var $17=$self_addr; //@line 792 "_csv.c"
        var $18=$17+40; //@line 792 "_csv.c"
        var $19=HEAP[$18]; //@line 792 "_csv.c"
        var $20=($19) + 1; //@line 792 "_csv.c"
        var $21=$self_addr; //@line 792 "_csv.c"
        var $22=$21+40; //@line 792 "_csv.c"
        HEAP[$22]=$20; //@line 792 "_csv.c"
        var $23=$lineobj; //@line 794 "_csv.c"
        var $24=_PyString_AsString($23); //@line 794 "_csv.c"
        $line=$24; //@line 794 "_csv.c"
        var $25=$lineobj; //@line 795 "_csv.c"
        var $26=_PyString_Size($25); //@line 795 "_csv.c"
        $linelen=$26; //@line 795 "_csv.c"
        var $27=$line; //@line 797 "_csv.c"
        var $28=($27)==0; //@line 797 "_csv.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 8; break; } //@line 797 "_csv.c"
      case 8: // $bb7
        var $29=$linelen; //@line 797 "_csv.c"
        var $30=($29) < 0; //@line 797 "_csv.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 19; break; } //@line 797 "_csv.c"
      case 9: // $bb8
        var $31=$lineobj; //@line 798 "_csv.c"
        var $32=$31; //@line 798 "_csv.c"
        var $33=HEAP[$32]; //@line 798 "_csv.c"
        var $34=($33) - 1; //@line 798 "_csv.c"
        var $35=$lineobj; //@line 798 "_csv.c"
        var $36=$35; //@line 798 "_csv.c"
        HEAP[$36]=$34; //@line 798 "_csv.c"
        var $37=$lineobj; //@line 798 "_csv.c"
        var $38=$37; //@line 798 "_csv.c"
        var $39=HEAP[$38]; //@line 798 "_csv.c"
        var $40=($39)==0; //@line 798 "_csv.c"
        if ($40) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 798 "_csv.c"
      case 10: // $bb9
        var $41=$lineobj; //@line 798 "_csv.c"
        var $42=$41+4; //@line 798 "_csv.c"
        var $43=HEAP[$42]; //@line 798 "_csv.c"
        var $44=$43+24; //@line 798 "_csv.c"
        var $45=HEAP[$44]; //@line 798 "_csv.c"
        var $46=$lineobj; //@line 798 "_csv.c"
        FUNCTION_TABLE[$45]($46); //@line 798 "_csv.c"
        __label__ = 11; break; //@line 798 "_csv.c"
      case 11: // $bb10
        $0=0; //@line 799 "_csv.c"
        __label__ = 26; break; //@line 799 "_csv.c"
      case 12: // $bb12
        var $47=$line; //@line 802 "_csv.c"
        var $48=HEAP[$47]; //@line 802 "_csv.c"
        $c=$48; //@line 802 "_csv.c"
        var $49=$line; //@line 802 "_csv.c"
        var $50=$49+1; //@line 802 "_csv.c"
        $line=$50; //@line 802 "_csv.c"
        var $51=$c; //@line 803 "_csv.c"
        var $52=($51)==0; //@line 803 "_csv.c"
        if ($52) { __label__ = 13; break; } else { __label__ = 16; break; } //@line 803 "_csv.c"
      case 13: // $bb13
        var $53=$lineobj; //@line 804 "_csv.c"
        var $54=$53; //@line 804 "_csv.c"
        var $55=HEAP[$54]; //@line 804 "_csv.c"
        var $56=($55) - 1; //@line 804 "_csv.c"
        var $57=$lineobj; //@line 804 "_csv.c"
        var $58=$57; //@line 804 "_csv.c"
        HEAP[$58]=$56; //@line 804 "_csv.c"
        var $59=$lineobj; //@line 804 "_csv.c"
        var $60=$59; //@line 804 "_csv.c"
        var $61=HEAP[$60]; //@line 804 "_csv.c"
        var $62=($61)==0; //@line 804 "_csv.c"
        if ($62) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 804 "_csv.c"
      case 14: // $bb14
        var $63=$lineobj; //@line 804 "_csv.c"
        var $64=$63+4; //@line 804 "_csv.c"
        var $65=HEAP[$64]; //@line 804 "_csv.c"
        var $66=$65+24; //@line 804 "_csv.c"
        var $67=HEAP[$66]; //@line 804 "_csv.c"
        var $68=$lineobj; //@line 804 "_csv.c"
        FUNCTION_TABLE[$67]($68); //@line 804 "_csv.c"
        __label__ = 15; break; //@line 804 "_csv.c"
      case 15: // $bb15
        var $69=HEAP[_error_obj]; //@line 805 "_csv.c"
        var $70=_PyErr_Format($69, __str30, allocate(1, "i32", ALLOC_STACK)); //@line 805 "_csv.c"
        __label__ = 25; break; //@line 805 "_csv.c"
      case 16: // $bb16
        var $71=$c; //@line 809 "_csv.c"
        var $72=($71); //@line 809 "_csv.c"
        var $73=$self_addr; //@line 809 "_csv.c"
        var $74=((($72)) & 255); //@line 809 "_csv.c"
        var $75=_parse_process_char($73, $74); //@line 809 "_csv.c"
        var $76=($75) < 0; //@line 809 "_csv.c"
        if ($76) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 809 "_csv.c"
      case 17: // $bb17
        var $77=$lineobj; //@line 810 "_csv.c"
        var $78=$77; //@line 810 "_csv.c"
        var $79=HEAP[$78]; //@line 810 "_csv.c"
        var $80=($79) - 1; //@line 810 "_csv.c"
        var $81=$lineobj; //@line 810 "_csv.c"
        var $82=$81; //@line 810 "_csv.c"
        HEAP[$82]=$80; //@line 810 "_csv.c"
        var $83=$lineobj; //@line 810 "_csv.c"
        var $84=$83; //@line 810 "_csv.c"
        var $85=HEAP[$84]; //@line 810 "_csv.c"
        var $86=($85)==0; //@line 810 "_csv.c"
        if ($86) { __label__ = 18; break; } else { __label__ = 25; break; } //@line 810 "_csv.c"
      case 18: // $bb18
        var $87=$lineobj; //@line 810 "_csv.c"
        var $88=$87+4; //@line 810 "_csv.c"
        var $89=HEAP[$88]; //@line 810 "_csv.c"
        var $90=$89+24; //@line 810 "_csv.c"
        var $91=HEAP[$90]; //@line 810 "_csv.c"
        var $92=$lineobj; //@line 810 "_csv.c"
        FUNCTION_TABLE[$91]($92); //@line 810 "_csv.c"
        __label__ = 25; break; //@line 810 "_csv.c"
      case 19: // $bb20
        var $93=$linelen; //@line 801 "_csv.c"
        var $94=($93) - 1; //@line 801 "_csv.c"
        $linelen=$94; //@line 801 "_csv.c"
        var $95=($94)!=-1; //@line 801 "_csv.c"
        if ($95) { __label__ = 12; break; } else { __label__ = 20; break; } //@line 801 "_csv.c"
      case 20: // $bb21
        var $96=$lineobj; //@line 814 "_csv.c"
        var $97=$96; //@line 814 "_csv.c"
        var $98=HEAP[$97]; //@line 814 "_csv.c"
        var $99=($98) - 1; //@line 814 "_csv.c"
        var $100=$lineobj; //@line 814 "_csv.c"
        var $101=$100; //@line 814 "_csv.c"
        HEAP[$101]=$99; //@line 814 "_csv.c"
        var $102=$lineobj; //@line 814 "_csv.c"
        var $103=$102; //@line 814 "_csv.c"
        var $104=HEAP[$103]; //@line 814 "_csv.c"
        var $105=($104)==0; //@line 814 "_csv.c"
        if ($105) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 814 "_csv.c"
      case 21: // $bb22
        var $106=$lineobj; //@line 814 "_csv.c"
        var $107=$106+4; //@line 814 "_csv.c"
        var $108=HEAP[$107]; //@line 814 "_csv.c"
        var $109=$108+24; //@line 814 "_csv.c"
        var $110=HEAP[$109]; //@line 814 "_csv.c"
        var $111=$lineobj; //@line 814 "_csv.c"
        FUNCTION_TABLE[$110]($111); //@line 814 "_csv.c"
        __label__ = 22; break; //@line 814 "_csv.c"
      case 22: // $bb23
        var $112=$self_addr; //@line 815 "_csv.c"
        var $113=_parse_process_char($112, 0); //@line 815 "_csv.c"
        var $114=($113) < 0; //@line 815 "_csv.c"
        if ($114) { __label__ = 25; break; } else { __label__ = 23; break; } //@line 815 "_csv.c"
      case 23: // $bb24
        var $115=$self_addr; //@line 817 "_csv.c"
        var $116=$115+20; //@line 817 "_csv.c"
        var $117=HEAP[$116]; //@line 817 "_csv.c"
        var $118=($117)!=0; //@line 817 "_csv.c"
        if ($118) { __label__ = 2; break; } else { __label__ = 24; break; } //@line 817 "_csv.c"
      case 24: // $bb25
        var $119=$self_addr; //@line 819 "_csv.c"
        var $120=$119+16; //@line 819 "_csv.c"
        var $121=HEAP[$120]; //@line 819 "_csv.c"
        $fields=$121; //@line 819 "_csv.c"
        var $122=$self_addr; //@line 820 "_csv.c"
        var $123=$122+16; //@line 820 "_csv.c"
        HEAP[$123]=0; //@line 820 "_csv.c"
        __label__ = 25; break; //@line 821 "_csv.c"
      case 25: // $err
        var $124=$fields; //@line 822 "_csv.c"
        $0=$124; //@line 822 "_csv.c"
        __label__ = 26; break; //@line 822 "_csv.c"
      case 26: // $bb26
        var $125=$0; //@line 782 "_csv.c"
        $retval=$125; //@line 782 "_csv.c"
        var $retval27=$retval; //@line 782 "_csv.c"
        ;
        return $retval27; //@line 782 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Reader_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 828 "_csv.c"
        var $1=$0; //@line 828 "_csv.c"
        _PyObject_GC_UnTrack($1); //@line 828 "_csv.c"
        var $2=$self_addr; //@line 829 "_csv.c"
        var $3=$2+12; //@line 829 "_csv.c"
        var $4=HEAP[$3]; //@line 829 "_csv.c"
        var $5=($4)!=0; //@line 829 "_csv.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 829 "_csv.c"
      case 1: // $bb
        var $6=$self_addr; //@line 829 "_csv.c"
        var $7=$6+12; //@line 829 "_csv.c"
        var $8=HEAP[$7]; //@line 829 "_csv.c"
        var $9=$8; //@line 829 "_csv.c"
        var $10=$9; //@line 829 "_csv.c"
        var $11=HEAP[$10]; //@line 829 "_csv.c"
        var $12=($11) - 1; //@line 829 "_csv.c"
        var $13=$9; //@line 829 "_csv.c"
        HEAP[$13]=$12; //@line 829 "_csv.c"
        var $14=$9; //@line 829 "_csv.c"
        var $15=HEAP[$14]; //@line 829 "_csv.c"
        var $16=($15)==0; //@line 829 "_csv.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 829 "_csv.c"
      case 2: // $bb1
        var $17=$self_addr; //@line 829 "_csv.c"
        var $18=$17+12; //@line 829 "_csv.c"
        var $19=HEAP[$18]; //@line 829 "_csv.c"
        var $20=$19; //@line 829 "_csv.c"
        var $21=$20+4; //@line 829 "_csv.c"
        var $22=HEAP[$21]; //@line 829 "_csv.c"
        var $23=$22+24; //@line 829 "_csv.c"
        var $24=HEAP[$23]; //@line 829 "_csv.c"
        var $25=$self_addr; //@line 829 "_csv.c"
        var $26=$25+12; //@line 829 "_csv.c"
        var $27=HEAP[$26]; //@line 829 "_csv.c"
        var $28=$27; //@line 829 "_csv.c"
        FUNCTION_TABLE[$24]($28); //@line 829 "_csv.c"
        __label__ = 3; break; //@line 829 "_csv.c"
      case 3: // $bb2
        var $29=$self_addr; //@line 830 "_csv.c"
        var $30=$29+8; //@line 830 "_csv.c"
        var $31=HEAP[$30]; //@line 830 "_csv.c"
        var $32=($31)!=0; //@line 830 "_csv.c"
        if ($32) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 830 "_csv.c"
      case 4: // $bb3
        var $33=$self_addr; //@line 830 "_csv.c"
        var $34=$33+8; //@line 830 "_csv.c"
        var $35=HEAP[$34]; //@line 830 "_csv.c"
        var $36=$35; //@line 830 "_csv.c"
        var $37=HEAP[$36]; //@line 830 "_csv.c"
        var $38=($37) - 1; //@line 830 "_csv.c"
        var $39=$35; //@line 830 "_csv.c"
        HEAP[$39]=$38; //@line 830 "_csv.c"
        var $40=$35; //@line 830 "_csv.c"
        var $41=HEAP[$40]; //@line 830 "_csv.c"
        var $42=($41)==0; //@line 830 "_csv.c"
        if ($42) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 830 "_csv.c"
      case 5: // $bb4
        var $43=$self_addr; //@line 830 "_csv.c"
        var $44=$43+8; //@line 830 "_csv.c"
        var $45=HEAP[$44]; //@line 830 "_csv.c"
        var $46=$45+4; //@line 830 "_csv.c"
        var $47=HEAP[$46]; //@line 830 "_csv.c"
        var $48=$47+24; //@line 830 "_csv.c"
        var $49=HEAP[$48]; //@line 830 "_csv.c"
        var $50=$self_addr; //@line 830 "_csv.c"
        var $51=$50+8; //@line 830 "_csv.c"
        var $52=HEAP[$51]; //@line 830 "_csv.c"
        FUNCTION_TABLE[$49]($52); //@line 830 "_csv.c"
        __label__ = 6; break; //@line 830 "_csv.c"
      case 6: // $bb5
        var $53=$self_addr; //@line 831 "_csv.c"
        var $54=$53+16; //@line 831 "_csv.c"
        var $55=HEAP[$54]; //@line 831 "_csv.c"
        var $56=($55)!=0; //@line 831 "_csv.c"
        if ($56) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 831 "_csv.c"
      case 7: // $bb6
        var $57=$self_addr; //@line 831 "_csv.c"
        var $58=$57+16; //@line 831 "_csv.c"
        var $59=HEAP[$58]; //@line 831 "_csv.c"
        var $60=$59; //@line 831 "_csv.c"
        var $61=HEAP[$60]; //@line 831 "_csv.c"
        var $62=($61) - 1; //@line 831 "_csv.c"
        var $63=$59; //@line 831 "_csv.c"
        HEAP[$63]=$62; //@line 831 "_csv.c"
        var $64=$59; //@line 831 "_csv.c"
        var $65=HEAP[$64]; //@line 831 "_csv.c"
        var $66=($65)==0; //@line 831 "_csv.c"
        if ($66) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 831 "_csv.c"
      case 8: // $bb7
        var $67=$self_addr; //@line 831 "_csv.c"
        var $68=$67+16; //@line 831 "_csv.c"
        var $69=HEAP[$68]; //@line 831 "_csv.c"
        var $70=$69+4; //@line 831 "_csv.c"
        var $71=HEAP[$70]; //@line 831 "_csv.c"
        var $72=$71+24; //@line 831 "_csv.c"
        var $73=HEAP[$72]; //@line 831 "_csv.c"
        var $74=$self_addr; //@line 831 "_csv.c"
        var $75=$74+16; //@line 831 "_csv.c"
        var $76=HEAP[$75]; //@line 831 "_csv.c"
        FUNCTION_TABLE[$73]($76); //@line 831 "_csv.c"
        __label__ = 9; break; //@line 831 "_csv.c"
      case 9: // $bb8
        var $77=$self_addr; //@line 832 "_csv.c"
        var $78=$77+24; //@line 832 "_csv.c"
        var $79=HEAP[$78]; //@line 832 "_csv.c"
        var $80=($79)!=0; //@line 832 "_csv.c"
        if ($80) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 832 "_csv.c"
      case 10: // $bb9
        var $81=$self_addr; //@line 833 "_csv.c"
        var $82=$81+24; //@line 833 "_csv.c"
        var $83=HEAP[$82]; //@line 833 "_csv.c"
        _PyMem_Free($83); //@line 833 "_csv.c"
        __label__ = 11; break; //@line 833 "_csv.c"
      case 11: // $bb10
        var $84=$self_addr; //@line 834 "_csv.c"
        var $85=$84; //@line 834 "_csv.c"
        _PyObject_GC_Del($85); //@line 834 "_csv.c"
        ;
        return; //@line 835 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Reader_traverse($self, $visit, $arg) {
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
        var $vret4;
        var $vret8;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 840 "_csv.c"
        var $2=$1+12; //@line 840 "_csv.c"
        var $3=HEAP[$2]; //@line 840 "_csv.c"
        var $4=($3)!=0; //@line 840 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 840 "_csv.c"
      case 1: // $bb
        var $5=$self_addr; //@line 840 "_csv.c"
        var $6=$5+12; //@line 840 "_csv.c"
        var $7=HEAP[$6]; //@line 840 "_csv.c"
        var $8=$7; //@line 840 "_csv.c"
        var $9=$visit_addr; //@line 840 "_csv.c"
        var $10=$arg_addr; //@line 840 "_csv.c"
        var $11=FUNCTION_TABLE[$9]($8, $10); //@line 840 "_csv.c"
        $vret=$11; //@line 840 "_csv.c"
        var $12=$vret; //@line 840 "_csv.c"
        var $13=($12)!=0; //@line 840 "_csv.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 840 "_csv.c"
      case 2: // $bb1
        var $14=$vret; //@line 840 "_csv.c"
        $0=$14; //@line 840 "_csv.c"
        __label__ = 10; break; //@line 840 "_csv.c"
      case 3: // $bb2
        var $15=$self_addr; //@line 841 "_csv.c"
        var $16=$15+8; //@line 841 "_csv.c"
        var $17=HEAP[$16]; //@line 841 "_csv.c"
        var $18=($17)!=0; //@line 841 "_csv.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 841 "_csv.c"
      case 4: // $bb3
        var $19=$self_addr; //@line 841 "_csv.c"
        var $20=$19+8; //@line 841 "_csv.c"
        var $21=HEAP[$20]; //@line 841 "_csv.c"
        var $22=$visit_addr; //@line 841 "_csv.c"
        var $23=$arg_addr; //@line 841 "_csv.c"
        var $24=FUNCTION_TABLE[$22]($21, $23); //@line 841 "_csv.c"
        $vret4=$24; //@line 841 "_csv.c"
        var $25=$vret4; //@line 841 "_csv.c"
        var $26=($25)!=0; //@line 841 "_csv.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 841 "_csv.c"
      case 5: // $bb5
        var $27=$vret4; //@line 841 "_csv.c"
        $0=$27; //@line 841 "_csv.c"
        __label__ = 10; break; //@line 841 "_csv.c"
      case 6: // $bb6
        var $28=$self_addr; //@line 842 "_csv.c"
        var $29=$28+16; //@line 842 "_csv.c"
        var $30=HEAP[$29]; //@line 842 "_csv.c"
        var $31=($30)!=0; //@line 842 "_csv.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 842 "_csv.c"
      case 7: // $bb7
        var $32=$self_addr; //@line 842 "_csv.c"
        var $33=$32+16; //@line 842 "_csv.c"
        var $34=HEAP[$33]; //@line 842 "_csv.c"
        var $35=$visit_addr; //@line 842 "_csv.c"
        var $36=$arg_addr; //@line 842 "_csv.c"
        var $37=FUNCTION_TABLE[$35]($34, $36); //@line 842 "_csv.c"
        $vret8=$37; //@line 842 "_csv.c"
        var $38=$vret8; //@line 842 "_csv.c"
        var $39=($38)!=0; //@line 842 "_csv.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 842 "_csv.c"
      case 8: // $bb9
        var $40=$vret8; //@line 842 "_csv.c"
        $0=$40; //@line 842 "_csv.c"
        __label__ = 10; break; //@line 842 "_csv.c"
      case 9: // $bb10
        $0=0; //@line 843 "_csv.c"
        __label__ = 10; break; //@line 843 "_csv.c"
      case 10: // $bb11
        var $41=$0; //@line 840 "_csv.c"
        $retval=$41; //@line 840 "_csv.c"
        var $retval12=$retval; //@line 840 "_csv.c"
        ;
        return $retval12; //@line 840 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Reader_clear($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $_py_tmp;
        var $_py_tmp4;
        var $_py_tmp8;
        $self_addr=$self;
        var $1=$self_addr; //@line 849 "_csv.c"
        var $2=$1+12; //@line 849 "_csv.c"
        var $3=HEAP[$2]; //@line 849 "_csv.c"
        var $4=($3)!=0; //@line 849 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 849 "_csv.c"
      case 1: // $bb
        var $5=$self_addr; //@line 849 "_csv.c"
        var $6=$5+12; //@line 849 "_csv.c"
        var $7=HEAP[$6]; //@line 849 "_csv.c"
        var $8=$7; //@line 849 "_csv.c"
        $_py_tmp=$8; //@line 849 "_csv.c"
        var $9=$self_addr; //@line 849 "_csv.c"
        var $10=$9+12; //@line 849 "_csv.c"
        HEAP[$10]=0; //@line 849 "_csv.c"
        var $11=$_py_tmp; //@line 849 "_csv.c"
        var $12=$11; //@line 849 "_csv.c"
        var $13=HEAP[$12]; //@line 849 "_csv.c"
        var $14=($13) - 1; //@line 849 "_csv.c"
        var $15=$_py_tmp; //@line 849 "_csv.c"
        var $16=$15; //@line 849 "_csv.c"
        HEAP[$16]=$14; //@line 849 "_csv.c"
        var $17=$_py_tmp; //@line 849 "_csv.c"
        var $18=$17; //@line 849 "_csv.c"
        var $19=HEAP[$18]; //@line 849 "_csv.c"
        var $20=($19)==0; //@line 849 "_csv.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 849 "_csv.c"
      case 2: // $bb1
        var $21=$_py_tmp; //@line 849 "_csv.c"
        var $22=$21+4; //@line 849 "_csv.c"
        var $23=HEAP[$22]; //@line 849 "_csv.c"
        var $24=$23+24; //@line 849 "_csv.c"
        var $25=HEAP[$24]; //@line 849 "_csv.c"
        var $26=$_py_tmp; //@line 849 "_csv.c"
        FUNCTION_TABLE[$25]($26); //@line 849 "_csv.c"
        __label__ = 3; break; //@line 849 "_csv.c"
      case 3: // $bb2
        var $27=$self_addr; //@line 850 "_csv.c"
        var $28=$27+8; //@line 850 "_csv.c"
        var $29=HEAP[$28]; //@line 850 "_csv.c"
        var $30=($29)!=0; //@line 850 "_csv.c"
        if ($30) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 850 "_csv.c"
      case 4: // $bb3
        var $31=$self_addr; //@line 850 "_csv.c"
        var $32=$31+8; //@line 850 "_csv.c"
        var $33=HEAP[$32]; //@line 850 "_csv.c"
        $_py_tmp4=$33; //@line 850 "_csv.c"
        var $34=$self_addr; //@line 850 "_csv.c"
        var $35=$34+8; //@line 850 "_csv.c"
        HEAP[$35]=0; //@line 850 "_csv.c"
        var $36=$_py_tmp4; //@line 850 "_csv.c"
        var $37=$36; //@line 850 "_csv.c"
        var $38=HEAP[$37]; //@line 850 "_csv.c"
        var $39=($38) - 1; //@line 850 "_csv.c"
        var $40=$_py_tmp4; //@line 850 "_csv.c"
        var $41=$40; //@line 850 "_csv.c"
        HEAP[$41]=$39; //@line 850 "_csv.c"
        var $42=$_py_tmp4; //@line 850 "_csv.c"
        var $43=$42; //@line 850 "_csv.c"
        var $44=HEAP[$43]; //@line 850 "_csv.c"
        var $45=($44)==0; //@line 850 "_csv.c"
        if ($45) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 850 "_csv.c"
      case 5: // $bb5
        var $46=$_py_tmp4; //@line 850 "_csv.c"
        var $47=$46+4; //@line 850 "_csv.c"
        var $48=HEAP[$47]; //@line 850 "_csv.c"
        var $49=$48+24; //@line 850 "_csv.c"
        var $50=HEAP[$49]; //@line 850 "_csv.c"
        var $51=$_py_tmp4; //@line 850 "_csv.c"
        FUNCTION_TABLE[$50]($51); //@line 850 "_csv.c"
        __label__ = 6; break; //@line 850 "_csv.c"
      case 6: // $bb6
        var $52=$self_addr; //@line 851 "_csv.c"
        var $53=$52+16; //@line 851 "_csv.c"
        var $54=HEAP[$53]; //@line 851 "_csv.c"
        var $55=($54)!=0; //@line 851 "_csv.c"
        if ($55) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 851 "_csv.c"
      case 7: // $bb7
        var $56=$self_addr; //@line 851 "_csv.c"
        var $57=$56+16; //@line 851 "_csv.c"
        var $58=HEAP[$57]; //@line 851 "_csv.c"
        $_py_tmp8=$58; //@line 851 "_csv.c"
        var $59=$self_addr; //@line 851 "_csv.c"
        var $60=$59+16; //@line 851 "_csv.c"
        HEAP[$60]=0; //@line 851 "_csv.c"
        var $61=$_py_tmp8; //@line 851 "_csv.c"
        var $62=$61; //@line 851 "_csv.c"
        var $63=HEAP[$62]; //@line 851 "_csv.c"
        var $64=($63) - 1; //@line 851 "_csv.c"
        var $65=$_py_tmp8; //@line 851 "_csv.c"
        var $66=$65; //@line 851 "_csv.c"
        HEAP[$66]=$64; //@line 851 "_csv.c"
        var $67=$_py_tmp8; //@line 851 "_csv.c"
        var $68=$67; //@line 851 "_csv.c"
        var $69=HEAP[$68]; //@line 851 "_csv.c"
        var $70=($69)==0; //@line 851 "_csv.c"
        if ($70) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 851 "_csv.c"
      case 8: // $bb9
        var $71=$_py_tmp8; //@line 851 "_csv.c"
        var $72=$71+4; //@line 851 "_csv.c"
        var $73=HEAP[$72]; //@line 851 "_csv.c"
        var $74=$73+24; //@line 851 "_csv.c"
        var $75=HEAP[$74]; //@line 851 "_csv.c"
        var $76=$_py_tmp8; //@line 851 "_csv.c"
        FUNCTION_TABLE[$75]($76); //@line 851 "_csv.c"
        __label__ = 9; break; //@line 851 "_csv.c"
      case 9: // $bb10
        $0=0; //@line 852 "_csv.c"
        var $77=$0; //@line 852 "_csv.c"
        $retval=$77; //@line 852 "_csv.c"
        var $retval11=$retval; //@line 852 "_csv.c"
        ;
        return $retval11; //@line 852 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_reader($module, $args, $keyword_args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr;
        var $args_addr;
        var $keyword_args_addr;
        var $retval;
        var $0;
        var $iterator=__stackBase__;
        var $dialect=__stackBase__+4;
        var $self;
        $module_addr=$module;
        $args_addr=$args;
        $keyword_args_addr=$keyword_args;
        HEAP[$dialect]=0; //@line 913 "_csv.c"
        var $1=__PyObject_GC_New(_Reader_Type); //@line 914 "_csv.c"
        var $2=$1; //@line 914 "_csv.c"
        $self=$2; //@line 914 "_csv.c"
        var $3=$self; //@line 916 "_csv.c"
        var $4=($3)==0; //@line 916 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 916 "_csv.c"
      case 1: // $bb
        $0=0; //@line 917 "_csv.c"
        __label__ = 19; break; //@line 917 "_csv.c"
      case 2: // $bb1
        var $5=$self; //@line 919 "_csv.c"
        var $6=$5+12; //@line 919 "_csv.c"
        HEAP[$6]=0; //@line 919 "_csv.c"
        var $7=$self; //@line 920 "_csv.c"
        var $8=$7+16; //@line 920 "_csv.c"
        HEAP[$8]=0; //@line 920 "_csv.c"
        var $9=$self; //@line 921 "_csv.c"
        var $10=$9+8; //@line 921 "_csv.c"
        HEAP[$10]=0; //@line 921 "_csv.c"
        var $11=$self; //@line 922 "_csv.c"
        var $12=$11+24; //@line 922 "_csv.c"
        HEAP[$12]=0; //@line 922 "_csv.c"
        var $13=$self; //@line 923 "_csv.c"
        var $14=$13+28; //@line 923 "_csv.c"
        HEAP[$14]=0; //@line 923 "_csv.c"
        var $15=$self; //@line 924 "_csv.c"
        var $16=$15+40; //@line 924 "_csv.c"
        HEAP[$16]=0; //@line 924 "_csv.c"
        var $17=$self; //@line 926 "_csv.c"
        var $18=_parse_reset($17); //@line 926 "_csv.c"
        var $19=($18) < 0; //@line 926 "_csv.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 926 "_csv.c"
      case 3: // $bb2
        var $20=$self; //@line 927 "_csv.c"
        var $21=$20; //@line 927 "_csv.c"
        var $22=$21; //@line 927 "_csv.c"
        var $23=HEAP[$22]; //@line 927 "_csv.c"
        var $24=($23) - 1; //@line 927 "_csv.c"
        var $25=$21; //@line 927 "_csv.c"
        HEAP[$25]=$24; //@line 927 "_csv.c"
        var $26=$21; //@line 927 "_csv.c"
        var $27=HEAP[$26]; //@line 927 "_csv.c"
        var $28=($27)==0; //@line 927 "_csv.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 927 "_csv.c"
      case 4: // $bb3
        var $29=$self; //@line 927 "_csv.c"
        var $30=$29; //@line 927 "_csv.c"
        var $31=$30+4; //@line 927 "_csv.c"
        var $32=HEAP[$31]; //@line 927 "_csv.c"
        var $33=$32+24; //@line 927 "_csv.c"
        var $34=HEAP[$33]; //@line 927 "_csv.c"
        var $35=$self; //@line 927 "_csv.c"
        var $36=$35; //@line 927 "_csv.c"
        FUNCTION_TABLE[$34]($36); //@line 927 "_csv.c"
        __label__ = 5; break; //@line 927 "_csv.c"
      case 5: // $bb4
        $0=0; //@line 928 "_csv.c"
        __label__ = 19; break; //@line 928 "_csv.c"
      case 6: // $bb5
        var $37=$args_addr; //@line 931 "_csv.c"
        var $38=_PyArg_UnpackTuple($37, __str33, 1, 2, allocate([$iterator,0,0,0,$dialect,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 931 "_csv.c"
        var $39=($38)==0; //@line 931 "_csv.c"
        if ($39) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 931 "_csv.c"
      case 7: // $bb6
        var $40=$self; //@line 932 "_csv.c"
        var $41=$40; //@line 932 "_csv.c"
        var $42=$41; //@line 932 "_csv.c"
        var $43=HEAP[$42]; //@line 932 "_csv.c"
        var $44=($43) - 1; //@line 932 "_csv.c"
        var $45=$41; //@line 932 "_csv.c"
        HEAP[$45]=$44; //@line 932 "_csv.c"
        var $46=$41; //@line 932 "_csv.c"
        var $47=HEAP[$46]; //@line 932 "_csv.c"
        var $48=($47)==0; //@line 932 "_csv.c"
        if ($48) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 932 "_csv.c"
      case 8: // $bb7
        var $49=$self; //@line 932 "_csv.c"
        var $50=$49; //@line 932 "_csv.c"
        var $51=$50+4; //@line 932 "_csv.c"
        var $52=HEAP[$51]; //@line 932 "_csv.c"
        var $53=$52+24; //@line 932 "_csv.c"
        var $54=HEAP[$53]; //@line 932 "_csv.c"
        var $55=$self; //@line 932 "_csv.c"
        var $56=$55; //@line 932 "_csv.c"
        FUNCTION_TABLE[$54]($56); //@line 932 "_csv.c"
        __label__ = 9; break; //@line 932 "_csv.c"
      case 9: // $bb8
        $0=0; //@line 933 "_csv.c"
        __label__ = 19; break; //@line 933 "_csv.c"
      case 10: // $bb9
        var $57=HEAP[$iterator]; //@line 935 "_csv.c"
        var $58=_PyObject_GetIter($57); //@line 935 "_csv.c"
        var $59=$self; //@line 935 "_csv.c"
        var $60=$59+8; //@line 935 "_csv.c"
        HEAP[$60]=$58; //@line 935 "_csv.c"
        var $61=$self; //@line 936 "_csv.c"
        var $62=$61+8; //@line 936 "_csv.c"
        var $63=HEAP[$62]; //@line 936 "_csv.c"
        var $64=($63)==0; //@line 936 "_csv.c"
        if ($64) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 936 "_csv.c"
      case 11: // $bb10
        var $65=HEAP[_PyExc_TypeError]; //@line 937 "_csv.c"
        _PyErr_SetString($65, __str34); //@line 937 "_csv.c"
        var $66=$self; //@line 939 "_csv.c"
        var $67=$66; //@line 939 "_csv.c"
        var $68=$67; //@line 939 "_csv.c"
        var $69=HEAP[$68]; //@line 939 "_csv.c"
        var $70=($69) - 1; //@line 939 "_csv.c"
        var $71=$67; //@line 939 "_csv.c"
        HEAP[$71]=$70; //@line 939 "_csv.c"
        var $72=$67; //@line 939 "_csv.c"
        var $73=HEAP[$72]; //@line 939 "_csv.c"
        var $74=($73)==0; //@line 939 "_csv.c"
        if ($74) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 939 "_csv.c"
      case 12: // $bb11
        var $75=$self; //@line 939 "_csv.c"
        var $76=$75; //@line 939 "_csv.c"
        var $77=$76+4; //@line 939 "_csv.c"
        var $78=HEAP[$77]; //@line 939 "_csv.c"
        var $79=$78+24; //@line 939 "_csv.c"
        var $80=HEAP[$79]; //@line 939 "_csv.c"
        var $81=$self; //@line 939 "_csv.c"
        var $82=$81; //@line 939 "_csv.c"
        FUNCTION_TABLE[$80]($82); //@line 939 "_csv.c"
        __label__ = 13; break; //@line 939 "_csv.c"
      case 13: // $bb12
        $0=0; //@line 940 "_csv.c"
        __label__ = 19; break; //@line 940 "_csv.c"
      case 14: // $bb13
        var $83=HEAP[$dialect]; //@line 942 "_csv.c"
        var $84=$keyword_args_addr; //@line 942 "_csv.c"
        var $85=__call_dialect($83, $84); //@line 942 "_csv.c"
        var $86=$85; //@line 942 "_csv.c"
        var $87=$self; //@line 942 "_csv.c"
        var $88=$87+12; //@line 942 "_csv.c"
        HEAP[$88]=$86; //@line 942 "_csv.c"
        var $89=$self; //@line 943 "_csv.c"
        var $90=$89+12; //@line 943 "_csv.c"
        var $91=HEAP[$90]; //@line 943 "_csv.c"
        var $92=($91)==0; //@line 943 "_csv.c"
        var $93=$self; //@line 944 "_csv.c"
        if ($92) { __label__ = 15; break; } else { __label__ = 18; break; } //@line 943 "_csv.c"
      case 15: // $bb14
        var $94=$93; //@line 944 "_csv.c"
        var $95=$94; //@line 944 "_csv.c"
        var $96=HEAP[$95]; //@line 944 "_csv.c"
        var $97=($96) - 1; //@line 944 "_csv.c"
        var $98=$94; //@line 944 "_csv.c"
        HEAP[$98]=$97; //@line 944 "_csv.c"
        var $99=$94; //@line 944 "_csv.c"
        var $100=HEAP[$99]; //@line 944 "_csv.c"
        var $101=($100)==0; //@line 944 "_csv.c"
        if ($101) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 944 "_csv.c"
      case 16: // $bb15
        var $102=$self; //@line 944 "_csv.c"
        var $103=$102; //@line 944 "_csv.c"
        var $104=$103+4; //@line 944 "_csv.c"
        var $105=HEAP[$104]; //@line 944 "_csv.c"
        var $106=$105+24; //@line 944 "_csv.c"
        var $107=HEAP[$106]; //@line 944 "_csv.c"
        var $108=$self; //@line 944 "_csv.c"
        var $109=$108; //@line 944 "_csv.c"
        FUNCTION_TABLE[$107]($109); //@line 944 "_csv.c"
        __label__ = 17; break; //@line 944 "_csv.c"
      case 17: // $bb16
        $0=0; //@line 945 "_csv.c"
        __label__ = 19; break; //@line 945 "_csv.c"
      case 18: // $bb17
        var $110=$93; //@line 948 "_csv.c"
        _PyObject_GC_Track($110); //@line 948 "_csv.c"
        var $111=$self; //@line 949 "_csv.c"
        var $112=$111; //@line 949 "_csv.c"
        $0=$112; //@line 949 "_csv.c"
        __label__ = 19; break; //@line 949 "_csv.c"
      case 19: // $bb18
        var $113=$0; //@line 917 "_csv.c"
        $retval=$113; //@line 917 "_csv.c"
        var $retval19=$retval; //@line 917 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 917 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_reset($self) {
    ;
    var __label__;
  
    var $self_addr;
    $self_addr=$self;
    var $0=$self_addr; //@line 959 "_csv.c"
    var $1=$0+24; //@line 959 "_csv.c"
    HEAP[$1]=0; //@line 959 "_csv.c"
    var $2=$self_addr; //@line 960 "_csv.c"
    var $3=$2+28; //@line 960 "_csv.c"
    HEAP[$3]=0; //@line 960 "_csv.c"
    ;
    return; //@line 961 "_csv.c"
  }
  

  function _join_append_data($self, $field, $quote_empty, $quoted, $copy_phase) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $field_addr;
        var $quote_empty_addr;
        var $quoted_addr;
        var $copy_phase_addr;
        var $retval;
        var $0;
        var $dialect;
        var $i;
        var $rec_len;
        var $lineterm;
        var $c;
        var $want_escape;
        $self_addr=$self;
        $field_addr=$field;
        $quote_empty_addr=$quote_empty;
        $quoted_addr=$quoted;
        $copy_phase_addr=$copy_phase;
        var $1=$self_addr; //@line 972 "_csv.c"
        var $2=$1+12; //@line 972 "_csv.c"
        var $3=HEAP[$2]; //@line 972 "_csv.c"
        $dialect=$3; //@line 972 "_csv.c"
        var $4=$dialect; //@line 983 "_csv.c"
        var $5=$4+20; //@line 983 "_csv.c"
        var $6=HEAP[$5]; //@line 983 "_csv.c"
        var $7=_PyString_AsString($6); //@line 983 "_csv.c"
        $lineterm=$7; //@line 983 "_csv.c"
        var $8=$lineterm; //@line 984 "_csv.c"
        var $9=($8)==0; //@line 984 "_csv.c"
        if ($9) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 984 "_csv.c"
      case 1: // $bb
        $0=-1; //@line 985 "_csv.c"
        __label__ = 47; break; //@line 985 "_csv.c"
      case 2: // $bb1
        var $10=$self_addr; //@line 987 "_csv.c"
        var $11=$10+24; //@line 987 "_csv.c"
        var $12=HEAP[$11]; //@line 987 "_csv.c"
        $rec_len=$12; //@line 987 "_csv.c"
        var $13=$self_addr; //@line 990 "_csv.c"
        var $14=$13+28; //@line 990 "_csv.c"
        var $15=HEAP[$14]; //@line 990 "_csv.c"
        var $16=($15) > 0; //@line 990 "_csv.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 990 "_csv.c"
      case 3: // $bb2
        var $17=$copy_phase_addr; //@line 991 "_csv.c"
        var $18=($17)!=0; //@line 991 "_csv.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 991 "_csv.c"
      case 4: // $bb3
        var $19=$self_addr; //@line 991 "_csv.c"
        var $20=$19+16; //@line 991 "_csv.c"
        var $21=HEAP[$20]; //@line 991 "_csv.c"
        var $22=$dialect; //@line 991 "_csv.c"
        var $23=$22+12; //@line 991 "_csv.c"
        var $24=HEAP[$23]; //@line 991 "_csv.c"
        var $25=$rec_len; //@line 991 "_csv.c"
        var $26=$21+$25; //@line 991 "_csv.c"
        HEAP[$26]=$24; //@line 991 "_csv.c"
        __label__ = 5; break; //@line 991 "_csv.c"
      case 5: // $bb4
        var $27=$rec_len; //@line 991 "_csv.c"
        var $28=($27) + 1; //@line 991 "_csv.c"
        $rec_len=$28; //@line 991 "_csv.c"
        __label__ = 6; break; //@line 991 "_csv.c"
      case 6: // $bb5
        var $29=$copy_phase_addr; //@line 994 "_csv.c"
        var $30=($29)!=0; //@line 994 "_csv.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 994 "_csv.c"
      case 7: // $bb6
        var $31=$quoted_addr; //@line 994 "_csv.c"
        var $32=HEAP[$31]; //@line 994 "_csv.c"
        var $33=($32)!=0; //@line 994 "_csv.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 994 "_csv.c"
      case 8: // $bb7
        var $34=$copy_phase_addr; //@line 995 "_csv.c"
        var $35=($34)!=0; //@line 995 "_csv.c"
        if ($35) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 995 "_csv.c"
      case 9: // $bb8
        var $36=$self_addr; //@line 995 "_csv.c"
        var $37=$36+16; //@line 995 "_csv.c"
        var $38=HEAP[$37]; //@line 995 "_csv.c"
        var $39=$dialect; //@line 995 "_csv.c"
        var $40=$39+13; //@line 995 "_csv.c"
        var $41=HEAP[$40]; //@line 995 "_csv.c"
        var $42=$rec_len; //@line 995 "_csv.c"
        var $43=$38+$42; //@line 995 "_csv.c"
        HEAP[$43]=$41; //@line 995 "_csv.c"
        __label__ = 10; break; //@line 995 "_csv.c"
      case 10: // $bb9
        var $44=$rec_len; //@line 995 "_csv.c"
        var $45=($44) + 1; //@line 995 "_csv.c"
        $rec_len=$45; //@line 995 "_csv.c"
        __label__ = 11; break; //@line 995 "_csv.c"
      case 11: // $bb10
        $i=0; //@line 998 "_csv.c"
        __label__ = 12; break; //@line 998 "_csv.c"
      case 12: // $bb11
        var $46=$field_addr; //@line 999 "_csv.c"
        var $47=$i; //@line 999 "_csv.c"
        var $48=$46+$47; //@line 999 "_csv.c"
        var $49=HEAP[$48]; //@line 999 "_csv.c"
        $c=$49; //@line 999 "_csv.c"
        $want_escape=0; //@line 1000 "_csv.c"
        var $50=($49)==0; //@line 1002 "_csv.c"
        if ($50) { __label__ = 35; break; } else { __label__ = 13; break; } //@line 1002 "_csv.c"
      case 13: // $bb12
        var $51=$dialect; //@line 1005 "_csv.c"
        var $52=$51+12; //@line 1005 "_csv.c"
        var $53=HEAP[$52]; //@line 1005 "_csv.c"
        var $54=$c; //@line 1005 "_csv.c"
        var $55=($53)==($54); //@line 1005 "_csv.c"
        if ($55) { __label__ = 17; break; } else { __label__ = 14; break; } //@line 1005 "_csv.c"
      case 14: // $bb13
        var $56=$dialect; //@line 1005 "_csv.c"
        var $57=$56+14; //@line 1005 "_csv.c"
        var $58=HEAP[$57]; //@line 1005 "_csv.c"
        var $59=$c; //@line 1005 "_csv.c"
        var $60=($58)==($59); //@line 1005 "_csv.c"
        if ($60) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 1005 "_csv.c"
      case 15: // $bb14
        var $61=$dialect; //@line 1005 "_csv.c"
        var $62=$61+13; //@line 1005 "_csv.c"
        var $63=HEAP[$62]; //@line 1005 "_csv.c"
        var $64=$c; //@line 1005 "_csv.c"
        var $65=($63)==($64); //@line 1005 "_csv.c"
        if ($65) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 1005 "_csv.c"
      case 16: // $bb15
        var $66=$c; //@line 1005 "_csv.c"
        var $67=($66); //@line 1005 "_csv.c"
        var $68=$lineterm; //@line 1005 "_csv.c"
        var $69=_strchr($68, $67); //@line 1005 "_csv.c"
        var $70=($69)!=0; //@line 1005 "_csv.c"
        if ($70) { __label__ = 17; break; } else { __label__ = 32; break; } //@line 1005 "_csv.c"
      case 17: // $bb16
        var $71=$dialect; //@line 1009 "_csv.c"
        var $72=$71+24; //@line 1009 "_csv.c"
        var $73=HEAP[$72]; //@line 1009 "_csv.c"
        var $74=($73)==3; //@line 1009 "_csv.c"
        if ($74) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1009 "_csv.c"
      case 18: // $bb17
        $want_escape=1; //@line 1010 "_csv.c"
        __label__ = 27; break; //@line 1010 "_csv.c"
      case 19: // $bb18
        var $75=$dialect; //@line 1012 "_csv.c"
        var $76=$75+13; //@line 1012 "_csv.c"
        var $77=HEAP[$76]; //@line 1012 "_csv.c"
        var $78=$c; //@line 1012 "_csv.c"
        var $79=($77)==($78); //@line 1012 "_csv.c"
        if ($79) { __label__ = 20; break; } else { __label__ = 25; break; } //@line 1012 "_csv.c"
      case 20: // $bb19
        var $80=$dialect; //@line 1013 "_csv.c"
        var $81=$80+8; //@line 1013 "_csv.c"
        var $82=HEAP[$81]; //@line 1013 "_csv.c"
        var $83=($82)!=0; //@line 1013 "_csv.c"
        if ($83) { __label__ = 21; break; } else { __label__ = 24; break; } //@line 1013 "_csv.c"
      case 21: // $bb20
        var $84=$copy_phase_addr; //@line 1014 "_csv.c"
        var $85=($84)!=0; //@line 1014 "_csv.c"
        if ($85) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1014 "_csv.c"
      case 22: // $bb21
        var $86=$self_addr; //@line 1014 "_csv.c"
        var $87=$86+16; //@line 1014 "_csv.c"
        var $88=HEAP[$87]; //@line 1014 "_csv.c"
        var $89=$dialect; //@line 1014 "_csv.c"
        var $90=$89+13; //@line 1014 "_csv.c"
        var $91=HEAP[$90]; //@line 1014 "_csv.c"
        var $92=$rec_len; //@line 1014 "_csv.c"
        var $93=$88+$92; //@line 1014 "_csv.c"
        HEAP[$93]=$91; //@line 1014 "_csv.c"
        __label__ = 23; break; //@line 1014 "_csv.c"
      case 23: // $bb22
        var $94=$rec_len; //@line 1014 "_csv.c"
        var $95=($94) + 1; //@line 1014 "_csv.c"
        $rec_len=$95; //@line 1014 "_csv.c"
        __label__ = 25; break; //@line 1014 "_csv.c"
      case 24: // $bb26_thread
        $want_escape=1; //@line 1016 "_csv.c"
        __label__ = 27; break;
      case 25: // $bb24
        var $_pr=$want_escape;
        var $96=($_pr)==0; //@line 1018 "_csv.c"
        if ($96) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1018 "_csv.c"
      case 26: // $bb26
        var $97=$quoted_addr; //@line 1019 "_csv.c"
        HEAP[$97]=1; //@line 1019 "_csv.c"
        var $_pr1_pr=$want_escape;
        var $98=($_pr1_pr)!=0; //@line 1021 "_csv.c"
        if ($98) { __label__ = 27; break; } else { __label__ = 32; break; } //@line 1021 "_csv.c"
      case 27: // $bb27
        var $99=$dialect; //@line 1022 "_csv.c"
        var $100=$99+14; //@line 1022 "_csv.c"
        var $101=HEAP[$100]; //@line 1022 "_csv.c"
        var $102=($101)==0; //@line 1022 "_csv.c"
        if ($102) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1022 "_csv.c"
      case 28: // $bb28
        var $103=HEAP[_error_obj]; //@line 1023 "_csv.c"
        var $104=_PyErr_Format($103, __str35, allocate(1, "i32", ALLOC_STACK)); //@line 1023 "_csv.c"
        $0=-1; //@line 1025 "_csv.c"
        __label__ = 47; break; //@line 1025 "_csv.c"
      case 29: // $bb29
        var $105=$copy_phase_addr; //@line 1027 "_csv.c"
        var $106=($105)!=0; //@line 1027 "_csv.c"
        if ($106) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1027 "_csv.c"
      case 30: // $bb30
        var $107=$self_addr; //@line 1027 "_csv.c"
        var $108=$107+16; //@line 1027 "_csv.c"
        var $109=HEAP[$108]; //@line 1027 "_csv.c"
        var $110=$dialect; //@line 1027 "_csv.c"
        var $111=$110+14; //@line 1027 "_csv.c"
        var $112=HEAP[$111]; //@line 1027 "_csv.c"
        var $113=$rec_len; //@line 1027 "_csv.c"
        var $114=$109+$113; //@line 1027 "_csv.c"
        HEAP[$114]=$112; //@line 1027 "_csv.c"
        __label__ = 31; break; //@line 1027 "_csv.c"
      case 31: // $bb31
        var $115=$rec_len; //@line 1027 "_csv.c"
        var $116=($115) + 1; //@line 1027 "_csv.c"
        $rec_len=$116; //@line 1027 "_csv.c"
        __label__ = 32; break; //@line 1027 "_csv.c"
      case 32: // $bb32
        var $117=$copy_phase_addr; //@line 1032 "_csv.c"
        var $118=($117)!=0; //@line 1032 "_csv.c"
        if ($118) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1032 "_csv.c"
      case 33: // $bb33
        var $119=$self_addr; //@line 1032 "_csv.c"
        var $120=$119+16; //@line 1032 "_csv.c"
        var $121=HEAP[$120]; //@line 1032 "_csv.c"
        var $122=$rec_len; //@line 1032 "_csv.c"
        var $123=$121+$122; //@line 1032 "_csv.c"
        var $124=$c; //@line 1032 "_csv.c"
        HEAP[$123]=$124; //@line 1032 "_csv.c"
        __label__ = 34; break; //@line 1032 "_csv.c"
      case 34: // $bb34
        var $125=$rec_len; //@line 1032 "_csv.c"
        var $126=($125) + 1; //@line 1032 "_csv.c"
        $rec_len=$126; //@line 1032 "_csv.c"
        var $127=$i; //@line 998 "_csv.c"
        var $128=($127) + 1; //@line 998 "_csv.c"
        $i=$128; //@line 998 "_csv.c"
        __label__ = 12; break; //@line 998 "_csv.c"
      case 35: // $bb35
        var $129=$i; //@line 1037 "_csv.c"
        var $130=($129)==0; //@line 1037 "_csv.c"
        if ($130) { __label__ = 36; break; } else { __label__ = 40; break; } //@line 1037 "_csv.c"
      case 36: // $bb36
        var $131=$quote_empty_addr; //@line 1037 "_csv.c"
        var $132=($131)!=0; //@line 1037 "_csv.c"
        if ($132) { __label__ = 37; break; } else { __label__ = 40; break; } //@line 1037 "_csv.c"
      case 37: // $bb37
        var $133=$dialect; //@line 1038 "_csv.c"
        var $134=$133+24; //@line 1038 "_csv.c"
        var $135=HEAP[$134]; //@line 1038 "_csv.c"
        var $136=($135)==3; //@line 1038 "_csv.c"
        if ($136) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1038 "_csv.c"
      case 38: // $bb38
        var $137=HEAP[_error_obj]; //@line 1039 "_csv.c"
        var $138=_PyErr_Format($137, __str36, allocate(1, "i32", ALLOC_STACK)); //@line 1039 "_csv.c"
        $0=-1; //@line 1041 "_csv.c"
        __label__ = 47; break; //@line 1041 "_csv.c"
      case 39: // $bb39
        var $139=$quoted_addr; //@line 1044 "_csv.c"
        HEAP[$139]=1; //@line 1044 "_csv.c"
        __label__ = 40; break; //@line 1044 "_csv.c"
      case 40: // $bb40
        var $140=$quoted_addr; //@line 1047 "_csv.c"
        var $141=HEAP[$140]; //@line 1047 "_csv.c"
        var $142=($141)!=0; //@line 1047 "_csv.c"
        if ($142) { __label__ = 41; break; } else { __label__ = 46; break; } //@line 1047 "_csv.c"
      case 41: // $bb41
        var $143=$copy_phase_addr; //@line 1048 "_csv.c"
        var $144=($143)!=0; //@line 1048 "_csv.c"
        if ($144) { __label__ = 42; break; } else { __label__ = 45; break; } //@line 1048 "_csv.c"
      case 42: // $bb42
        var $145=$copy_phase_addr; //@line 1049 "_csv.c"
        var $146=($145)!=0; //@line 1049 "_csv.c"
        if ($146) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1049 "_csv.c"
      case 43: // $bb43
        var $147=$self_addr; //@line 1049 "_csv.c"
        var $148=$147+16; //@line 1049 "_csv.c"
        var $149=HEAP[$148]; //@line 1049 "_csv.c"
        var $150=$dialect; //@line 1049 "_csv.c"
        var $151=$150+13; //@line 1049 "_csv.c"
        var $152=HEAP[$151]; //@line 1049 "_csv.c"
        var $153=$rec_len; //@line 1049 "_csv.c"
        var $154=$149+$153; //@line 1049 "_csv.c"
        HEAP[$154]=$152; //@line 1049 "_csv.c"
        __label__ = 44; break; //@line 1049 "_csv.c"
      case 44: // $bb44
        var $155=$rec_len; //@line 1049 "_csv.c"
        var $156=($155) + 1; //@line 1049 "_csv.c"
        $rec_len=$156; //@line 1049 "_csv.c"
        __label__ = 46; break; //@line 1049 "_csv.c"
      case 45: // $bb45
        var $157=$rec_len; //@line 1051 "_csv.c"
        var $158=($157) + 2; //@line 1051 "_csv.c"
        $rec_len=$158; //@line 1051 "_csv.c"
        __label__ = 46; break; //@line 1051 "_csv.c"
      case 46: // $bb46
        var $159=$rec_len; //@line 1053 "_csv.c"
        $0=$159; //@line 1053 "_csv.c"
        __label__ = 47; break; //@line 1053 "_csv.c"
      case 47: // $bb47
        var $160=$0; //@line 985 "_csv.c"
        $retval=$160; //@line 985 "_csv.c"
        var $retval48=$retval; //@line 985 "_csv.c"
        ;
        return $retval48; //@line 985 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_check_rec_size($self, $rec_len) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $rec_len_addr;
        var $retval;
        var $0;
        var $old_rec;
        $self_addr=$self;
        $rec_len_addr=$rec_len;
        var $1=$rec_len_addr; //@line 1061 "_csv.c"
        var $2=($1) < 0; //@line 1061 "_csv.c"
        var $3=$rec_len_addr; //@line 1061 "_csv.c"
        var $4=($3) > 2147450879; //@line 1061 "_csv.c"
        var $or_cond=($2) | ($4);
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1061 "_csv.c"
      case 1: // $bb1
        var $5=_PyErr_NoMemory(); //@line 1062 "_csv.c"
        $0=0; //@line 1063 "_csv.c"
        __label__ = 12; break; //@line 1063 "_csv.c"
      case 2: // $bb2
        var $6=$self_addr; //@line 1066 "_csv.c"
        var $7=$6+20; //@line 1066 "_csv.c"
        var $8=HEAP[$7]; //@line 1066 "_csv.c"
        var $9=$rec_len_addr; //@line 1066 "_csv.c"
        var $10=($8) < ($9); //@line 1066 "_csv.c"
        if ($10) { __label__ = 3; break; } else { __label__ = 11; break; } //@line 1066 "_csv.c"
      case 3: // $bb3
        var $11=$self_addr; //@line 1067 "_csv.c"
        var $12=$11+20; //@line 1067 "_csv.c"
        var $13=HEAP[$12]; //@line 1067 "_csv.c"
        var $14=($13)==0; //@line 1067 "_csv.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 1067 "_csv.c"
      case 4: // $bb4
        var $15=$rec_len_addr; //@line 1068 "_csv.c"
        var $16=((($15)/32768)|0); //@line 1068 "_csv.c"
        var $17=($16) + 1; //@line 1068 "_csv.c"
        var $18=($17) * 32768; //@line 1068 "_csv.c"
        var $19=$self_addr; //@line 1068 "_csv.c"
        var $20=$19+20; //@line 1068 "_csv.c"
        HEAP[$20]=$18; //@line 1068 "_csv.c"
        var $21=$self_addr; //@line 1069 "_csv.c"
        var $22=$21+16; //@line 1069 "_csv.c"
        var $23=HEAP[$22]; //@line 1069 "_csv.c"
        var $24=($23)!=0; //@line 1069 "_csv.c"
        if ($24) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1069 "_csv.c"
      case 5: // $bb5
        var $25=$self_addr; //@line 1070 "_csv.c"
        var $26=$25+16; //@line 1070 "_csv.c"
        var $27=HEAP[$26]; //@line 1070 "_csv.c"
        _PyMem_Free($27); //@line 1070 "_csv.c"
        __label__ = 6; break; //@line 1070 "_csv.c"
      case 6: // $bb6
        var $28=$self_addr; //@line 1071 "_csv.c"
        var $29=$28+20; //@line 1071 "_csv.c"
        var $30=HEAP[$29]; //@line 1071 "_csv.c"
        var $31=_PyMem_Malloc($30); //@line 1071 "_csv.c"
        var $32=$self_addr; //@line 1071 "_csv.c"
        var $33=$32+16; //@line 1071 "_csv.c"
        HEAP[$33]=$31; //@line 1071 "_csv.c"
        __label__ = 9; break; //@line 1071 "_csv.c"
      case 7: // $bb7
        var $34=$self_addr; //@line 1074 "_csv.c"
        var $35=$34+16; //@line 1074 "_csv.c"
        var $36=HEAP[$35]; //@line 1074 "_csv.c"
        $old_rec=$36; //@line 1074 "_csv.c"
        var $37=$rec_len_addr; //@line 1076 "_csv.c"
        var $38=((($37)/32768)|0); //@line 1076 "_csv.c"
        var $39=($38) + 1; //@line 1076 "_csv.c"
        var $40=($39) * 32768; //@line 1076 "_csv.c"
        var $41=$self_addr; //@line 1076 "_csv.c"
        var $42=$41+20; //@line 1076 "_csv.c"
        HEAP[$42]=$40; //@line 1076 "_csv.c"
        var $43=$self_addr; //@line 1077 "_csv.c"
        var $44=$43+20; //@line 1077 "_csv.c"
        var $45=HEAP[$44]; //@line 1077 "_csv.c"
        var $46=$self_addr; //@line 1077 "_csv.c"
        var $47=$46+16; //@line 1077 "_csv.c"
        var $48=HEAP[$47]; //@line 1077 "_csv.c"
        var $49=_PyMem_Realloc($48, $45); //@line 1077 "_csv.c"
        var $50=$self_addr; //@line 1077 "_csv.c"
        var $51=$50+16; //@line 1077 "_csv.c"
        HEAP[$51]=$49; //@line 1077 "_csv.c"
        var $52=$self_addr; //@line 1078 "_csv.c"
        var $53=$52+16; //@line 1078 "_csv.c"
        var $54=HEAP[$53]; //@line 1078 "_csv.c"
        var $55=($54)==0; //@line 1078 "_csv.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1078 "_csv.c"
      case 8: // $bb8
        var $56=$old_rec; //@line 1079 "_csv.c"
        _PyMem_Free($56); //@line 1079 "_csv.c"
        __label__ = 9; break; //@line 1079 "_csv.c"
      case 9: // $bb9
        var $57=$self_addr; //@line 1081 "_csv.c"
        var $58=$57+16; //@line 1081 "_csv.c"
        var $59=HEAP[$58]; //@line 1081 "_csv.c"
        var $60=($59)==0; //@line 1081 "_csv.c"
        if ($60) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1081 "_csv.c"
      case 10: // $bb10
        var $61=_PyErr_NoMemory(); //@line 1082 "_csv.c"
        $0=0; //@line 1083 "_csv.c"
        __label__ = 12; break; //@line 1083 "_csv.c"
      case 11: // $bb11
        $0=1; //@line 1086 "_csv.c"
        __label__ = 12; break; //@line 1086 "_csv.c"
      case 12: // $bb12
        var $62=$0; //@line 1063 "_csv.c"
        $retval=$62; //@line 1063 "_csv.c"
        var $retval13=$retval; //@line 1063 "_csv.c"
        ;
        return $retval13; //@line 1063 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_append($self, $field, $quoted, $quote_empty) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $field_addr;
        var $quoted_addr;
        var $quote_empty_addr;
        var $retval;
        var $0;
        var $rec_len;
        $self_addr=$self;
        $field_addr=$field;
        $quoted_addr=$quoted;
        $quote_empty_addr=$quote_empty;
        var $1=$self_addr; //@line 1094 "_csv.c"
        var $2=$field_addr; //@line 1094 "_csv.c"
        var $3=$quote_empty_addr; //@line 1094 "_csv.c"
        var $4=$quoted_addr; //@line 1094 "_csv.c"
        var $5=_join_append_data($1, $2, $3, $4, 0); //@line 1094 "_csv.c"
        $rec_len=$5; //@line 1094 "_csv.c"
        var $6=$rec_len; //@line 1095 "_csv.c"
        var $7=($6) < 0; //@line 1095 "_csv.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1095 "_csv.c"
      case 1: // $bb
        $0=0; //@line 1096 "_csv.c"
        __label__ = 5; break; //@line 1096 "_csv.c"
      case 2: // $bb1
        var $8=$self_addr; //@line 1099 "_csv.c"
        var $9=$rec_len; //@line 1099 "_csv.c"
        var $10=_join_check_rec_size($8, $9); //@line 1099 "_csv.c"
        var $11=($10)==0; //@line 1099 "_csv.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1099 "_csv.c"
      case 3: // $bb2
        $0=0; //@line 1100 "_csv.c"
        __label__ = 5; break; //@line 1100 "_csv.c"
      case 4: // $bb3
        var $12=$self_addr; //@line 1102 "_csv.c"
        var $13=$field_addr; //@line 1102 "_csv.c"
        var $14=$quote_empty_addr; //@line 1102 "_csv.c"
        var $15=$quoted_addr; //@line 1102 "_csv.c"
        var $16=_join_append_data($12, $13, $14, $15, 1); //@line 1102 "_csv.c"
        var $17=$self_addr; //@line 1102 "_csv.c"
        var $18=$17+24; //@line 1102 "_csv.c"
        HEAP[$18]=$16; //@line 1102 "_csv.c"
        var $19=$self_addr; //@line 1103 "_csv.c"
        var $20=$19+28; //@line 1103 "_csv.c"
        var $21=HEAP[$20]; //@line 1103 "_csv.c"
        var $22=($21) + 1; //@line 1103 "_csv.c"
        var $23=$self_addr; //@line 1103 "_csv.c"
        var $24=$23+28; //@line 1103 "_csv.c"
        HEAP[$24]=$22; //@line 1103 "_csv.c"
        $0=1; //@line 1105 "_csv.c"
        __label__ = 5; break; //@line 1105 "_csv.c"
      case 5: // $bb4
        var $25=$0; //@line 1096 "_csv.c"
        $retval=$25; //@line 1096 "_csv.c"
        var $retval5=$retval; //@line 1096 "_csv.c"
        ;
        return $retval5; //@line 1096 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_append_lineterminator($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $terminator_len;
        var $terminator;
        $self_addr=$self;
        var $1=$self_addr; //@line 1114 "_csv.c"
        var $2=$1+12; //@line 1114 "_csv.c"
        var $3=HEAP[$2]; //@line 1114 "_csv.c"
        var $4=$3+20; //@line 1114 "_csv.c"
        var $5=HEAP[$4]; //@line 1114 "_csv.c"
        var $6=_PyString_Size($5); //@line 1114 "_csv.c"
        $terminator_len=$6; //@line 1114 "_csv.c"
        var $7=$terminator_len; //@line 1115 "_csv.c"
        var $8=($7)==-1; //@line 1115 "_csv.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1115 "_csv.c"
      case 1: // $bb
        $0=0; //@line 1116 "_csv.c"
        __label__ = 7; break; //@line 1116 "_csv.c"
      case 2: // $bb1
        var $9=$self_addr; //@line 1119 "_csv.c"
        var $10=$9+24; //@line 1119 "_csv.c"
        var $11=HEAP[$10]; //@line 1119 "_csv.c"
        var $12=$terminator_len; //@line 1119 "_csv.c"
        var $13=($12) + ($11); //@line 1119 "_csv.c"
        var $14=$self_addr; //@line 1119 "_csv.c"
        var $15=_join_check_rec_size($14, $13); //@line 1119 "_csv.c"
        var $16=($15)==0; //@line 1119 "_csv.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1119 "_csv.c"
      case 3: // $bb2
        $0=0; //@line 1120 "_csv.c"
        __label__ = 7; break; //@line 1120 "_csv.c"
      case 4: // $bb3
        var $17=$self_addr; //@line 1122 "_csv.c"
        var $18=$17+12; //@line 1122 "_csv.c"
        var $19=HEAP[$18]; //@line 1122 "_csv.c"
        var $20=$19+20; //@line 1122 "_csv.c"
        var $21=HEAP[$20]; //@line 1122 "_csv.c"
        var $22=_PyString_AsString($21); //@line 1122 "_csv.c"
        $terminator=$22; //@line 1122 "_csv.c"
        var $23=$terminator; //@line 1123 "_csv.c"
        var $24=($23)==0; //@line 1123 "_csv.c"
        if ($24) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1123 "_csv.c"
      case 5: // $bb4
        $0=0; //@line 1124 "_csv.c"
        __label__ = 7; break; //@line 1124 "_csv.c"
      case 6: // $bb5
        var $25=$terminator_len; //@line 1125 "_csv.c"
        var $26=$self_addr; //@line 1125 "_csv.c"
        var $27=$26+16; //@line 1125 "_csv.c"
        var $28=HEAP[$27]; //@line 1125 "_csv.c"
        var $29=$self_addr; //@line 1125 "_csv.c"
        var $30=$29+24; //@line 1125 "_csv.c"
        var $31=HEAP[$30]; //@line 1125 "_csv.c"
        var $32=$28+$31; //@line 1125 "_csv.c"
        var $33=$terminator; //@line 1125 "_csv.c"
        _llvm_memmove_p0i8_p0i8_i32($32, $33, $25, 1, 0); //@line 1125 "_csv.c"
        var $34=$self_addr; //@line 1126 "_csv.c"
        var $35=$34+24; //@line 1126 "_csv.c"
        var $36=HEAP[$35]; //@line 1126 "_csv.c"
        var $37=$terminator_len; //@line 1126 "_csv.c"
        var $38=($37) + ($36); //@line 1126 "_csv.c"
        var $39=$self_addr; //@line 1126 "_csv.c"
        var $40=$39+24; //@line 1126 "_csv.c"
        HEAP[$40]=$38; //@line 1126 "_csv.c"
        $0=1; //@line 1128 "_csv.c"
        __label__ = 7; break; //@line 1128 "_csv.c"
      case 7: // $bb6
        var $41=$0; //@line 1116 "_csv.c"
        $retval=$41; //@line 1116 "_csv.c"
        var $retval7=$retval; //@line 1116 "_csv.c"
        ;
        return $retval7; //@line 1116 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_writerow($self, $seq) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $seq_addr;
        var $retval;
        var $0;
        var $dialect;
        var $len;
        var $i;
        var $field;
        var $append_ok;
        var $quoted=__stackBase__;
        var $str;
        $self_addr=$self;
        $seq_addr=$seq;
        var $1=$self_addr; //@line 1140 "_csv.c"
        var $2=$1+12; //@line 1140 "_csv.c"
        var $3=HEAP[$2]; //@line 1140 "_csv.c"
        $dialect=$3; //@line 1140 "_csv.c"
        var $4=$seq_addr; //@line 1143 "_csv.c"
        var $5=_PySequence_Check($4); //@line 1143 "_csv.c"
        var $6=($5)==0; //@line 1143 "_csv.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1143 "_csv.c"
      case 1: // $bb
        var $7=HEAP[_error_obj]; //@line 1144 "_csv.c"
        var $8=_PyErr_Format($7, __str37, allocate(1, "i32", ALLOC_STACK)); //@line 1144 "_csv.c"
        $0=$8; //@line 1144 "_csv.c"
        __label__ = 30; break; //@line 1144 "_csv.c"
      case 2: // $bb1
        var $9=$seq_addr; //@line 1146 "_csv.c"
        var $10=_PySequence_Size($9); //@line 1146 "_csv.c"
        $len=$10; //@line 1146 "_csv.c"
        var $11=$len; //@line 1147 "_csv.c"
        var $12=($11) < 0; //@line 1147 "_csv.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1147 "_csv.c"
      case 3: // $bb2
        $0=0; //@line 1148 "_csv.c"
        __label__ = 30; break; //@line 1148 "_csv.c"
      case 4: // $bb3
        var $13=$self_addr; //@line 1152 "_csv.c"
        _join_reset($13); //@line 1152 "_csv.c"
        $i=0; //@line 1153 "_csv.c"
        __label__ = 26; break; //@line 1153 "_csv.c"
      case 5: // $bb4
        var $14=$seq_addr; //@line 1158 "_csv.c"
        var $15=$i; //@line 1158 "_csv.c"
        var $16=_PySequence_GetItem($14, $15); //@line 1158 "_csv.c"
        $field=$16; //@line 1158 "_csv.c"
        var $17=$field; //@line 1159 "_csv.c"
        var $18=($17)==0; //@line 1159 "_csv.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1159 "_csv.c"
      case 6: // $bb5
        $0=0; //@line 1160 "_csv.c"
        __label__ = 30; break; //@line 1160 "_csv.c"
      case 7: // $bb6
        var $19=$dialect; //@line 1162 "_csv.c"
        var $20=$19+24; //@line 1162 "_csv.c"
        var $21=HEAP[$20]; //@line 1162 "_csv.c"
        if ($21 == 1) {
          __label__ = 9; break;
        }
        else if ($21 == 2) {
          __label__ = 8; break;
        }
        else {
        __label__ = 10; break;
        }
        
      case 8: // $bb7
        var $22=$field; //@line 1164 "_csv.c"
        var $23=_PyNumber_Check($22); //@line 1164 "_csv.c"
        var $24=($23)==0; //@line 1164 "_csv.c"
        var $25=($24); //@line 1164 "_csv.c"
        HEAP[$quoted]=$25; //@line 1164 "_csv.c"
        __label__ = 11; break; //@line 1164 "_csv.c"
      case 9: // $bb8
        HEAP[$quoted]=1; //@line 1167 "_csv.c"
        __label__ = 11; break; //@line 1167 "_csv.c"
      case 10: // $bb9
        HEAP[$quoted]=0; //@line 1170 "_csv.c"
        __label__ = 11; break; //@line 1170 "_csv.c"
      case 11: // $bb10
        var $26=$field; //@line 1174 "_csv.c"
        var $27=$26+4; //@line 1174 "_csv.c"
        var $28=HEAP[$27]; //@line 1174 "_csv.c"
        var $29=$28+84; //@line 1174 "_csv.c"
        var $30=HEAP[$29]; //@line 1174 "_csv.c"
        var $31=($30) & 134217728; //@line 1174 "_csv.c"
        var $32=($31)!=0; //@line 1174 "_csv.c"
        if ($32) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1174 "_csv.c"
      case 12: // $bb11
        var $33=$len; //@line 1175 "_csv.c"
        var $34=($33)==1; //@line 1175 "_csv.c"
        var $35=($34); //@line 1175 "_csv.c"
        var $36=$field; //@line 1175 "_csv.c"
        var $37=$36; //@line 1175 "_csv.c"
        var $38=$37+20; //@line 1175 "_csv.c"
        var $39=$38; //@line 1175 "_csv.c"
        var $40=$self_addr; //@line 1175 "_csv.c"
        var $41=_join_append($40, $39, $quoted, $35); //@line 1175 "_csv.c"
        $append_ok=$41; //@line 1175 "_csv.c"
        var $42=$field; //@line 1178 "_csv.c"
        var $43=$42; //@line 1178 "_csv.c"
        var $44=HEAP[$43]; //@line 1178 "_csv.c"
        var $45=($44) - 1; //@line 1178 "_csv.c"
        var $46=$field; //@line 1178 "_csv.c"
        var $47=$46; //@line 1178 "_csv.c"
        HEAP[$47]=$45; //@line 1178 "_csv.c"
        var $48=$field; //@line 1178 "_csv.c"
        var $49=$48; //@line 1178 "_csv.c"
        var $50=HEAP[$49]; //@line 1178 "_csv.c"
        var $51=($50)==0; //@line 1178 "_csv.c"
        if ($51) { __label__ = 13; break; } else { __label__ = 23; break; } //@line 1178 "_csv.c"
      case 13: // $bb12
        var $52=$field; //@line 1178 "_csv.c"
        var $53=$52+4; //@line 1178 "_csv.c"
        var $54=HEAP[$53]; //@line 1178 "_csv.c"
        var $55=$54+24; //@line 1178 "_csv.c"
        var $56=HEAP[$55]; //@line 1178 "_csv.c"
        var $57=$field; //@line 1178 "_csv.c"
        FUNCTION_TABLE[$56]($57); //@line 1178 "_csv.c"
        __label__ = 23; break; //@line 1178 "_csv.c"
      case 14: // $bb14
        var $58=$field; //@line 1180 "_csv.c"
        var $59=($58)==(__Py_NoneStruct); //@line 1180 "_csv.c"
        if ($59) { __label__ = 15; break; } else { __label__ = 17; break; } //@line 1180 "_csv.c"
      case 15: // $bb15
        var $60=$len; //@line 1181 "_csv.c"
        var $61=($60)==1; //@line 1181 "_csv.c"
        var $62=($61); //@line 1181 "_csv.c"
        var $63=$self_addr; //@line 1181 "_csv.c"
        var $64=_join_append($63, __str33, $quoted, $62); //@line 1181 "_csv.c"
        $append_ok=$64; //@line 1181 "_csv.c"
        var $65=$field; //@line 1182 "_csv.c"
        var $66=$65; //@line 1182 "_csv.c"
        var $67=HEAP[$66]; //@line 1182 "_csv.c"
        var $68=($67) - 1; //@line 1182 "_csv.c"
        var $69=$field; //@line 1182 "_csv.c"
        var $70=$69; //@line 1182 "_csv.c"
        HEAP[$70]=$68; //@line 1182 "_csv.c"
        var $71=$field; //@line 1182 "_csv.c"
        var $72=$71; //@line 1182 "_csv.c"
        var $73=HEAP[$72]; //@line 1182 "_csv.c"
        var $74=($73)==0; //@line 1182 "_csv.c"
        if ($74) { __label__ = 16; break; } else { __label__ = 23; break; } //@line 1182 "_csv.c"
      case 16: // $bb16
        var $75=$field; //@line 1182 "_csv.c"
        var $76=$75+4; //@line 1182 "_csv.c"
        var $77=HEAP[$76]; //@line 1182 "_csv.c"
        var $78=$77+24; //@line 1182 "_csv.c"
        var $79=HEAP[$78]; //@line 1182 "_csv.c"
        var $80=$field; //@line 1182 "_csv.c"
        FUNCTION_TABLE[$79]($80); //@line 1182 "_csv.c"
        __label__ = 23; break; //@line 1182 "_csv.c"
      case 17: // $bb18
        var $81=$field; //@line 1187 "_csv.c"
        var $82=_PyObject_Str($81); //@line 1187 "_csv.c"
        $str=$82; //@line 1187 "_csv.c"
        var $83=$field; //@line 1188 "_csv.c"
        var $84=$83; //@line 1188 "_csv.c"
        var $85=HEAP[$84]; //@line 1188 "_csv.c"
        var $86=($85) - 1; //@line 1188 "_csv.c"
        var $87=$field; //@line 1188 "_csv.c"
        var $88=$87; //@line 1188 "_csv.c"
        HEAP[$88]=$86; //@line 1188 "_csv.c"
        var $89=$field; //@line 1188 "_csv.c"
        var $90=$89; //@line 1188 "_csv.c"
        var $91=HEAP[$90]; //@line 1188 "_csv.c"
        var $92=($91)==0; //@line 1188 "_csv.c"
        if ($92) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 1188 "_csv.c"
      case 18: // $bb19
        var $93=$field; //@line 1188 "_csv.c"
        var $94=$93+4; //@line 1188 "_csv.c"
        var $95=HEAP[$94]; //@line 1188 "_csv.c"
        var $96=$95+24; //@line 1188 "_csv.c"
        var $97=HEAP[$96]; //@line 1188 "_csv.c"
        var $98=$field; //@line 1188 "_csv.c"
        FUNCTION_TABLE[$97]($98); //@line 1188 "_csv.c"
        __label__ = 19; break; //@line 1188 "_csv.c"
      case 19: // $bb20
        var $99=$str; //@line 1189 "_csv.c"
        var $100=($99)==0; //@line 1189 "_csv.c"
        if ($100) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1189 "_csv.c"
      case 20: // $bb21
        $0=0; //@line 1190 "_csv.c"
        __label__ = 30; break; //@line 1190 "_csv.c"
      case 21: // $bb22
        var $101=$len; //@line 1192 "_csv.c"
        var $102=($101)==1; //@line 1192 "_csv.c"
        var $103=($102); //@line 1192 "_csv.c"
        var $104=$str; //@line 1192 "_csv.c"
        var $105=$104; //@line 1192 "_csv.c"
        var $106=$105+20; //@line 1192 "_csv.c"
        var $107=$106; //@line 1192 "_csv.c"
        var $108=$self_addr; //@line 1192 "_csv.c"
        var $109=_join_append($108, $107, $quoted, $103); //@line 1192 "_csv.c"
        $append_ok=$109; //@line 1192 "_csv.c"
        var $110=$str; //@line 1194 "_csv.c"
        var $111=$110; //@line 1194 "_csv.c"
        var $112=HEAP[$111]; //@line 1194 "_csv.c"
        var $113=($112) - 1; //@line 1194 "_csv.c"
        var $114=$str; //@line 1194 "_csv.c"
        var $115=$114; //@line 1194 "_csv.c"
        HEAP[$115]=$113; //@line 1194 "_csv.c"
        var $116=$str; //@line 1194 "_csv.c"
        var $117=$116; //@line 1194 "_csv.c"
        var $118=HEAP[$117]; //@line 1194 "_csv.c"
        var $119=($118)==0; //@line 1194 "_csv.c"
        if ($119) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1194 "_csv.c"
      case 22: // $bb23
        var $120=$str; //@line 1194 "_csv.c"
        var $121=$120+4; //@line 1194 "_csv.c"
        var $122=HEAP[$121]; //@line 1194 "_csv.c"
        var $123=$122+24; //@line 1194 "_csv.c"
        var $124=HEAP[$123]; //@line 1194 "_csv.c"
        var $125=$str; //@line 1194 "_csv.c"
        FUNCTION_TABLE[$124]($125); //@line 1194 "_csv.c"
        __label__ = 23; break; //@line 1194 "_csv.c"
      case 23: // $bb24
        var $126=$append_ok; //@line 1196 "_csv.c"
        var $127=($126)==0; //@line 1196 "_csv.c"
        if ($127) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1196 "_csv.c"
      case 24: // $bb25
        $0=0; //@line 1197 "_csv.c"
        __label__ = 30; break; //@line 1197 "_csv.c"
      case 25: // $bb26
        var $128=$i; //@line 1153 "_csv.c"
        var $129=($128) + 1; //@line 1153 "_csv.c"
        $i=$129; //@line 1153 "_csv.c"
        __label__ = 26; break; //@line 1153 "_csv.c"
      case 26: // $bb27
        var $130=$i; //@line 1153 "_csv.c"
        var $131=$len; //@line 1153 "_csv.c"
        var $132=($130) < ($131); //@line 1153 "_csv.c"
        if ($132) { __label__ = 5; break; } else { __label__ = 27; break; } //@line 1153 "_csv.c"
      case 27: // $bb28
        var $133=$self_addr; //@line 1202 "_csv.c"
        var $134=_join_append_lineterminator($133); //@line 1202 "_csv.c"
        var $135=($134)==0; //@line 1202 "_csv.c"
        if ($135) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1202 "_csv.c"
      case 28: // $bb29
        $0=0; //@line 1203 "_csv.c"
        __label__ = 30; break; //@line 1203 "_csv.c"
      case 29: // $bb30
        var $136=$self_addr; //@line 1205 "_csv.c"
        var $137=$136+24; //@line 1205 "_csv.c"
        var $138=HEAP[$137]; //@line 1205 "_csv.c"
        var $139=$self_addr; //@line 1205 "_csv.c"
        var $140=$139+16; //@line 1205 "_csv.c"
        var $141=HEAP[$140]; //@line 1205 "_csv.c"
        var $142=$self_addr; //@line 1205 "_csv.c"
        var $143=$142+8; //@line 1205 "_csv.c"
        var $144=HEAP[$143]; //@line 1205 "_csv.c"
        var $145=_PyObject_CallFunction($144, __str38, allocate([$141,0,0,0,$138,0,0,0], ["i8*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1205 "_csv.c"
        $0=$145; //@line 1205 "_csv.c"
        __label__ = 30; break; //@line 1205 "_csv.c"
      case 30: // $bb31
        var $146=$0; //@line 1144 "_csv.c"
        $retval=$146; //@line 1144 "_csv.c"
        var $retval32=$retval; //@line 1144 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval32; //@line 1144 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_writerows($self, $seqseq) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $seqseq_addr;
        var $retval;
        var $0;
        var $row_iter;
        var $row_obj;
        var $result;
        $self_addr=$self;
        $seqseq_addr=$seqseq;
        var $1=$seqseq_addr; //@line 1220 "_csv.c"
        var $2=_PyObject_GetIter($1); //@line 1220 "_csv.c"
        $row_iter=$2; //@line 1220 "_csv.c"
        var $3=$row_iter; //@line 1221 "_csv.c"
        var $4=($3)==0; //@line 1221 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 10; break; } //@line 1221 "_csv.c"
      case 1: // $bb
        var $5=HEAP[_PyExc_TypeError]; //@line 1222 "_csv.c"
        _PyErr_SetString($5, __str39); //@line 1222 "_csv.c"
        $0=0; //@line 1224 "_csv.c"
        __label__ = 16; break; //@line 1224 "_csv.c"
      case 2: // $bb2
        var $6=$self_addr; //@line 1227 "_csv.c"
        var $7=$row_obj; //@line 1227 "_csv.c"
        var $8=_csv_writerow($6, $7); //@line 1227 "_csv.c"
        $result=$8; //@line 1227 "_csv.c"
        var $9=$row_obj; //@line 1228 "_csv.c"
        var $10=$9; //@line 1228 "_csv.c"
        var $11=HEAP[$10]; //@line 1228 "_csv.c"
        var $12=($11) - 1; //@line 1228 "_csv.c"
        var $13=$row_obj; //@line 1228 "_csv.c"
        var $14=$13; //@line 1228 "_csv.c"
        HEAP[$14]=$12; //@line 1228 "_csv.c"
        var $15=$row_obj; //@line 1228 "_csv.c"
        var $16=$15; //@line 1228 "_csv.c"
        var $17=HEAP[$16]; //@line 1228 "_csv.c"
        var $18=($17)==0; //@line 1228 "_csv.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1228 "_csv.c"
      case 3: // $bb3
        var $19=$row_obj; //@line 1228 "_csv.c"
        var $20=$19+4; //@line 1228 "_csv.c"
        var $21=HEAP[$20]; //@line 1228 "_csv.c"
        var $22=$21+24; //@line 1228 "_csv.c"
        var $23=HEAP[$22]; //@line 1228 "_csv.c"
        var $24=$row_obj; //@line 1228 "_csv.c"
        FUNCTION_TABLE[$23]($24); //@line 1228 "_csv.c"
        __label__ = 4; break; //@line 1228 "_csv.c"
      case 4: // $bb4
        var $25=$result; //@line 1229 "_csv.c"
        var $26=($25)==0; //@line 1229 "_csv.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1229 "_csv.c"
      case 5: // $bb5
        var $27=$row_iter; //@line 1230 "_csv.c"
        var $28=$27; //@line 1230 "_csv.c"
        var $29=HEAP[$28]; //@line 1230 "_csv.c"
        var $30=($29) - 1; //@line 1230 "_csv.c"
        var $31=$row_iter; //@line 1230 "_csv.c"
        var $32=$31; //@line 1230 "_csv.c"
        HEAP[$32]=$30; //@line 1230 "_csv.c"
        var $33=$row_iter; //@line 1230 "_csv.c"
        var $34=$33; //@line 1230 "_csv.c"
        var $35=HEAP[$34]; //@line 1230 "_csv.c"
        var $36=($35)==0; //@line 1230 "_csv.c"
        if ($36) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1230 "_csv.c"
      case 6: // $bb6
        var $37=$row_iter; //@line 1230 "_csv.c"
        var $38=$37+4; //@line 1230 "_csv.c"
        var $39=HEAP[$38]; //@line 1230 "_csv.c"
        var $40=$39+24; //@line 1230 "_csv.c"
        var $41=HEAP[$40]; //@line 1230 "_csv.c"
        var $42=$row_iter; //@line 1230 "_csv.c"
        FUNCTION_TABLE[$41]($42); //@line 1230 "_csv.c"
        __label__ = 7; break; //@line 1230 "_csv.c"
      case 7: // $bb7
        $0=0; //@line 1231 "_csv.c"
        __label__ = 16; break; //@line 1231 "_csv.c"
      case 8: // $bb8
        var $43=$result; //@line 1234 "_csv.c"
        var $44=$43; //@line 1234 "_csv.c"
        var $45=HEAP[$44]; //@line 1234 "_csv.c"
        var $46=($45) - 1; //@line 1234 "_csv.c"
        var $47=$result; //@line 1234 "_csv.c"
        var $48=$47; //@line 1234 "_csv.c"
        HEAP[$48]=$46; //@line 1234 "_csv.c"
        var $49=$result; //@line 1234 "_csv.c"
        var $50=$49; //@line 1234 "_csv.c"
        var $51=HEAP[$50]; //@line 1234 "_csv.c"
        var $52=($51)==0; //@line 1234 "_csv.c"
        if ($52) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1234 "_csv.c"
      case 9: // $bb9
        var $53=$result; //@line 1234 "_csv.c"
        var $54=$53+4; //@line 1234 "_csv.c"
        var $55=HEAP[$54]; //@line 1234 "_csv.c"
        var $56=$55+24; //@line 1234 "_csv.c"
        var $57=HEAP[$56]; //@line 1234 "_csv.c"
        var $58=$result; //@line 1234 "_csv.c"
        FUNCTION_TABLE[$57]($58); //@line 1234 "_csv.c"
        __label__ = 10; break; //@line 1234 "_csv.c"
      case 10: // $bb10
        var $59=$row_iter; //@line 1226 "_csv.c"
        var $60=_PyIter_Next($59); //@line 1226 "_csv.c"
        $row_obj=$60; //@line 1226 "_csv.c"
        var $61=($60)!=0; //@line 1226 "_csv.c"
        if ($61) { __label__ = 2; break; } else { __label__ = 11; break; } //@line 1226 "_csv.c"
      case 11: // $bb11
        var $62=$row_iter; //@line 1236 "_csv.c"
        var $63=$62; //@line 1236 "_csv.c"
        var $64=HEAP[$63]; //@line 1236 "_csv.c"
        var $65=($64) - 1; //@line 1236 "_csv.c"
        var $66=$row_iter; //@line 1236 "_csv.c"
        var $67=$66; //@line 1236 "_csv.c"
        HEAP[$67]=$65; //@line 1236 "_csv.c"
        var $68=$row_iter; //@line 1236 "_csv.c"
        var $69=$68; //@line 1236 "_csv.c"
        var $70=HEAP[$69]; //@line 1236 "_csv.c"
        var $71=($70)==0; //@line 1236 "_csv.c"
        if ($71) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1236 "_csv.c"
      case 12: // $bb12
        var $72=$row_iter; //@line 1236 "_csv.c"
        var $73=$72+4; //@line 1236 "_csv.c"
        var $74=HEAP[$73]; //@line 1236 "_csv.c"
        var $75=$74+24; //@line 1236 "_csv.c"
        var $76=HEAP[$75]; //@line 1236 "_csv.c"
        var $77=$row_iter; //@line 1236 "_csv.c"
        FUNCTION_TABLE[$76]($77); //@line 1236 "_csv.c"
        __label__ = 13; break; //@line 1236 "_csv.c"
      case 13: // $bb13
        var $78=_PyErr_Occurred(); //@line 1237 "_csv.c"
        var $79=($78)!=0; //@line 1237 "_csv.c"
        if ($79) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1237 "_csv.c"
      case 14: // $bb14
        $0=0; //@line 1238 "_csv.c"
        __label__ = 16; break; //@line 1238 "_csv.c"
      case 15: // $bb15
        var $80=HEAP[__Py_NoneStruct]; //@line 1239 "_csv.c"
        var $81=($80) + 1; //@line 1239 "_csv.c"
        HEAP[__Py_NoneStruct]=$81; //@line 1239 "_csv.c"
        $0=__Py_NoneStruct; //@line 1240 "_csv.c"
        __label__ = 16; break; //@line 1240 "_csv.c"
      case 16: // $bb16
        var $82=$0; //@line 1224 "_csv.c"
        $retval=$82; //@line 1224 "_csv.c"
        var $retval17=$retval; //@line 1224 "_csv.c"
        ;
        return $retval17; //@line 1224 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Writer_dealloc($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        $self_addr=$self;
        var $0=$self_addr; //@line 1259 "_csv.c"
        var $1=$0; //@line 1259 "_csv.c"
        _PyObject_GC_UnTrack($1); //@line 1259 "_csv.c"
        var $2=$self_addr; //@line 1260 "_csv.c"
        var $3=$2+12; //@line 1260 "_csv.c"
        var $4=HEAP[$3]; //@line 1260 "_csv.c"
        var $5=($4)!=0; //@line 1260 "_csv.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1260 "_csv.c"
      case 1: // $bb
        var $6=$self_addr; //@line 1260 "_csv.c"
        var $7=$6+12; //@line 1260 "_csv.c"
        var $8=HEAP[$7]; //@line 1260 "_csv.c"
        var $9=$8; //@line 1260 "_csv.c"
        var $10=$9; //@line 1260 "_csv.c"
        var $11=HEAP[$10]; //@line 1260 "_csv.c"
        var $12=($11) - 1; //@line 1260 "_csv.c"
        var $13=$9; //@line 1260 "_csv.c"
        HEAP[$13]=$12; //@line 1260 "_csv.c"
        var $14=$9; //@line 1260 "_csv.c"
        var $15=HEAP[$14]; //@line 1260 "_csv.c"
        var $16=($15)==0; //@line 1260 "_csv.c"
        if ($16) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1260 "_csv.c"
      case 2: // $bb1
        var $17=$self_addr; //@line 1260 "_csv.c"
        var $18=$17+12; //@line 1260 "_csv.c"
        var $19=HEAP[$18]; //@line 1260 "_csv.c"
        var $20=$19; //@line 1260 "_csv.c"
        var $21=$20+4; //@line 1260 "_csv.c"
        var $22=HEAP[$21]; //@line 1260 "_csv.c"
        var $23=$22+24; //@line 1260 "_csv.c"
        var $24=HEAP[$23]; //@line 1260 "_csv.c"
        var $25=$self_addr; //@line 1260 "_csv.c"
        var $26=$25+12; //@line 1260 "_csv.c"
        var $27=HEAP[$26]; //@line 1260 "_csv.c"
        var $28=$27; //@line 1260 "_csv.c"
        FUNCTION_TABLE[$24]($28); //@line 1260 "_csv.c"
        __label__ = 3; break; //@line 1260 "_csv.c"
      case 3: // $bb2
        var $29=$self_addr; //@line 1261 "_csv.c"
        var $30=$29+8; //@line 1261 "_csv.c"
        var $31=HEAP[$30]; //@line 1261 "_csv.c"
        var $32=($31)!=0; //@line 1261 "_csv.c"
        if ($32) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1261 "_csv.c"
      case 4: // $bb3
        var $33=$self_addr; //@line 1261 "_csv.c"
        var $34=$33+8; //@line 1261 "_csv.c"
        var $35=HEAP[$34]; //@line 1261 "_csv.c"
        var $36=$35; //@line 1261 "_csv.c"
        var $37=HEAP[$36]; //@line 1261 "_csv.c"
        var $38=($37) - 1; //@line 1261 "_csv.c"
        var $39=$35; //@line 1261 "_csv.c"
        HEAP[$39]=$38; //@line 1261 "_csv.c"
        var $40=$35; //@line 1261 "_csv.c"
        var $41=HEAP[$40]; //@line 1261 "_csv.c"
        var $42=($41)==0; //@line 1261 "_csv.c"
        if ($42) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1261 "_csv.c"
      case 5: // $bb4
        var $43=$self_addr; //@line 1261 "_csv.c"
        var $44=$43+8; //@line 1261 "_csv.c"
        var $45=HEAP[$44]; //@line 1261 "_csv.c"
        var $46=$45+4; //@line 1261 "_csv.c"
        var $47=HEAP[$46]; //@line 1261 "_csv.c"
        var $48=$47+24; //@line 1261 "_csv.c"
        var $49=HEAP[$48]; //@line 1261 "_csv.c"
        var $50=$self_addr; //@line 1261 "_csv.c"
        var $51=$50+8; //@line 1261 "_csv.c"
        var $52=HEAP[$51]; //@line 1261 "_csv.c"
        FUNCTION_TABLE[$49]($52); //@line 1261 "_csv.c"
        __label__ = 6; break; //@line 1261 "_csv.c"
      case 6: // $bb5
        var $53=$self_addr; //@line 1262 "_csv.c"
        var $54=$53+16; //@line 1262 "_csv.c"
        var $55=HEAP[$54]; //@line 1262 "_csv.c"
        var $56=($55)!=0; //@line 1262 "_csv.c"
        if ($56) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1262 "_csv.c"
      case 7: // $bb6
        var $57=$self_addr; //@line 1263 "_csv.c"
        var $58=$57+16; //@line 1263 "_csv.c"
        var $59=HEAP[$58]; //@line 1263 "_csv.c"
        _PyMem_Free($59); //@line 1263 "_csv.c"
        __label__ = 8; break; //@line 1263 "_csv.c"
      case 8: // $bb7
        var $60=$self_addr; //@line 1264 "_csv.c"
        var $61=$60; //@line 1264 "_csv.c"
        _PyObject_GC_Del($61); //@line 1264 "_csv.c"
        ;
        return; //@line 1265 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Writer_traverse($self, $visit, $arg) {
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
        var $vret4;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 1270 "_csv.c"
        var $2=$1+12; //@line 1270 "_csv.c"
        var $3=HEAP[$2]; //@line 1270 "_csv.c"
        var $4=($3)!=0; //@line 1270 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1270 "_csv.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1270 "_csv.c"
        var $6=$5+12; //@line 1270 "_csv.c"
        var $7=HEAP[$6]; //@line 1270 "_csv.c"
        var $8=$7; //@line 1270 "_csv.c"
        var $9=$visit_addr; //@line 1270 "_csv.c"
        var $10=$arg_addr; //@line 1270 "_csv.c"
        var $11=FUNCTION_TABLE[$9]($8, $10); //@line 1270 "_csv.c"
        $vret=$11; //@line 1270 "_csv.c"
        var $12=$vret; //@line 1270 "_csv.c"
        var $13=($12)!=0; //@line 1270 "_csv.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1270 "_csv.c"
      case 2: // $bb1
        var $14=$vret; //@line 1270 "_csv.c"
        $0=$14; //@line 1270 "_csv.c"
        __label__ = 7; break; //@line 1270 "_csv.c"
      case 3: // $bb2
        var $15=$self_addr; //@line 1271 "_csv.c"
        var $16=$15+8; //@line 1271 "_csv.c"
        var $17=HEAP[$16]; //@line 1271 "_csv.c"
        var $18=($17)!=0; //@line 1271 "_csv.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1271 "_csv.c"
      case 4: // $bb3
        var $19=$self_addr; //@line 1271 "_csv.c"
        var $20=$19+8; //@line 1271 "_csv.c"
        var $21=HEAP[$20]; //@line 1271 "_csv.c"
        var $22=$visit_addr; //@line 1271 "_csv.c"
        var $23=$arg_addr; //@line 1271 "_csv.c"
        var $24=FUNCTION_TABLE[$22]($21, $23); //@line 1271 "_csv.c"
        $vret4=$24; //@line 1271 "_csv.c"
        var $25=$vret4; //@line 1271 "_csv.c"
        var $26=($25)!=0; //@line 1271 "_csv.c"
        if ($26) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1271 "_csv.c"
      case 5: // $bb5
        var $27=$vret4; //@line 1271 "_csv.c"
        $0=$27; //@line 1271 "_csv.c"
        __label__ = 7; break; //@line 1271 "_csv.c"
      case 6: // $bb6
        $0=0; //@line 1272 "_csv.c"
        __label__ = 7; break; //@line 1272 "_csv.c"
      case 7: // $bb7
        var $28=$0; //@line 1270 "_csv.c"
        $retval=$28; //@line 1270 "_csv.c"
        var $retval8=$retval; //@line 1270 "_csv.c"
        ;
        return $retval8; //@line 1270 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _Writer_clear($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $_py_tmp;
        var $_py_tmp4;
        $self_addr=$self;
        var $1=$self_addr; //@line 1278 "_csv.c"
        var $2=$1+12; //@line 1278 "_csv.c"
        var $3=HEAP[$2]; //@line 1278 "_csv.c"
        var $4=($3)!=0; //@line 1278 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1278 "_csv.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1278 "_csv.c"
        var $6=$5+12; //@line 1278 "_csv.c"
        var $7=HEAP[$6]; //@line 1278 "_csv.c"
        var $8=$7; //@line 1278 "_csv.c"
        $_py_tmp=$8; //@line 1278 "_csv.c"
        var $9=$self_addr; //@line 1278 "_csv.c"
        var $10=$9+12; //@line 1278 "_csv.c"
        HEAP[$10]=0; //@line 1278 "_csv.c"
        var $11=$_py_tmp; //@line 1278 "_csv.c"
        var $12=$11; //@line 1278 "_csv.c"
        var $13=HEAP[$12]; //@line 1278 "_csv.c"
        var $14=($13) - 1; //@line 1278 "_csv.c"
        var $15=$_py_tmp; //@line 1278 "_csv.c"
        var $16=$15; //@line 1278 "_csv.c"
        HEAP[$16]=$14; //@line 1278 "_csv.c"
        var $17=$_py_tmp; //@line 1278 "_csv.c"
        var $18=$17; //@line 1278 "_csv.c"
        var $19=HEAP[$18]; //@line 1278 "_csv.c"
        var $20=($19)==0; //@line 1278 "_csv.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1278 "_csv.c"
      case 2: // $bb1
        var $21=$_py_tmp; //@line 1278 "_csv.c"
        var $22=$21+4; //@line 1278 "_csv.c"
        var $23=HEAP[$22]; //@line 1278 "_csv.c"
        var $24=$23+24; //@line 1278 "_csv.c"
        var $25=HEAP[$24]; //@line 1278 "_csv.c"
        var $26=$_py_tmp; //@line 1278 "_csv.c"
        FUNCTION_TABLE[$25]($26); //@line 1278 "_csv.c"
        __label__ = 3; break; //@line 1278 "_csv.c"
      case 3: // $bb2
        var $27=$self_addr; //@line 1279 "_csv.c"
        var $28=$27+8; //@line 1279 "_csv.c"
        var $29=HEAP[$28]; //@line 1279 "_csv.c"
        var $30=($29)!=0; //@line 1279 "_csv.c"
        if ($30) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1279 "_csv.c"
      case 4: // $bb3
        var $31=$self_addr; //@line 1279 "_csv.c"
        var $32=$31+8; //@line 1279 "_csv.c"
        var $33=HEAP[$32]; //@line 1279 "_csv.c"
        $_py_tmp4=$33; //@line 1279 "_csv.c"
        var $34=$self_addr; //@line 1279 "_csv.c"
        var $35=$34+8; //@line 1279 "_csv.c"
        HEAP[$35]=0; //@line 1279 "_csv.c"
        var $36=$_py_tmp4; //@line 1279 "_csv.c"
        var $37=$36; //@line 1279 "_csv.c"
        var $38=HEAP[$37]; //@line 1279 "_csv.c"
        var $39=($38) - 1; //@line 1279 "_csv.c"
        var $40=$_py_tmp4; //@line 1279 "_csv.c"
        var $41=$40; //@line 1279 "_csv.c"
        HEAP[$41]=$39; //@line 1279 "_csv.c"
        var $42=$_py_tmp4; //@line 1279 "_csv.c"
        var $43=$42; //@line 1279 "_csv.c"
        var $44=HEAP[$43]; //@line 1279 "_csv.c"
        var $45=($44)==0; //@line 1279 "_csv.c"
        if ($45) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1279 "_csv.c"
      case 5: // $bb5
        var $46=$_py_tmp4; //@line 1279 "_csv.c"
        var $47=$46+4; //@line 1279 "_csv.c"
        var $48=HEAP[$47]; //@line 1279 "_csv.c"
        var $49=$48+24; //@line 1279 "_csv.c"
        var $50=HEAP[$49]; //@line 1279 "_csv.c"
        var $51=$_py_tmp4; //@line 1279 "_csv.c"
        FUNCTION_TABLE[$50]($51); //@line 1279 "_csv.c"
        __label__ = 6; break; //@line 1279 "_csv.c"
      case 6: // $bb6
        $0=0; //@line 1280 "_csv.c"
        var $52=$0; //@line 1280 "_csv.c"
        $retval=$52; //@line 1280 "_csv.c"
        var $retval7=$retval; //@line 1280 "_csv.c"
        ;
        return $retval7; //@line 1280 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_writer($module, $args, $keyword_args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr;
        var $args_addr;
        var $keyword_args_addr;
        var $retval;
        var $0;
        var $output_file=__stackBase__;
        var $dialect=__stackBase__+4;
        var $self;
        $module_addr=$module;
        $args_addr=$args;
        $keyword_args_addr=$keyword_args;
        HEAP[$dialect]=0; //@line 1328 "_csv.c"
        var $1=__PyObject_GC_New(_Writer_Type); //@line 1329 "_csv.c"
        var $2=$1; //@line 1329 "_csv.c"
        $self=$2; //@line 1329 "_csv.c"
        var $3=$self; //@line 1331 "_csv.c"
        var $4=($3)==0; //@line 1331 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1331 "_csv.c"
      case 1: // $bb
        $0=0; //@line 1332 "_csv.c"
        __label__ = 16; break; //@line 1332 "_csv.c"
      case 2: // $bb1
        var $5=$self; //@line 1334 "_csv.c"
        var $6=$5+12; //@line 1334 "_csv.c"
        HEAP[$6]=0; //@line 1334 "_csv.c"
        var $7=$self; //@line 1335 "_csv.c"
        var $8=$7+8; //@line 1335 "_csv.c"
        HEAP[$8]=0; //@line 1335 "_csv.c"
        var $9=$self; //@line 1337 "_csv.c"
        var $10=$9+16; //@line 1337 "_csv.c"
        HEAP[$10]=0; //@line 1337 "_csv.c"
        var $11=$self; //@line 1338 "_csv.c"
        var $12=$11+20; //@line 1338 "_csv.c"
        HEAP[$12]=0; //@line 1338 "_csv.c"
        var $13=$self; //@line 1339 "_csv.c"
        var $14=$13+24; //@line 1339 "_csv.c"
        HEAP[$14]=0; //@line 1339 "_csv.c"
        var $15=$self; //@line 1340 "_csv.c"
        var $16=$15+28; //@line 1340 "_csv.c"
        HEAP[$16]=0; //@line 1340 "_csv.c"
        var $17=$args_addr; //@line 1342 "_csv.c"
        var $18=_PyArg_UnpackTuple($17, __str33, 1, 2, allocate([$output_file,0,0,0,$dialect,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1342 "_csv.c"
        var $19=($18)==0; //@line 1342 "_csv.c"
        if ($19) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1342 "_csv.c"
      case 3: // $bb2
        var $20=$self; //@line 1343 "_csv.c"
        var $21=$20; //@line 1343 "_csv.c"
        var $22=$21; //@line 1343 "_csv.c"
        var $23=HEAP[$22]; //@line 1343 "_csv.c"
        var $24=($23) - 1; //@line 1343 "_csv.c"
        var $25=$21; //@line 1343 "_csv.c"
        HEAP[$25]=$24; //@line 1343 "_csv.c"
        var $26=$21; //@line 1343 "_csv.c"
        var $27=HEAP[$26]; //@line 1343 "_csv.c"
        var $28=($27)==0; //@line 1343 "_csv.c"
        if ($28) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1343 "_csv.c"
      case 4: // $bb3
        var $29=$self; //@line 1343 "_csv.c"
        var $30=$29; //@line 1343 "_csv.c"
        var $31=$30+4; //@line 1343 "_csv.c"
        var $32=HEAP[$31]; //@line 1343 "_csv.c"
        var $33=$32+24; //@line 1343 "_csv.c"
        var $34=HEAP[$33]; //@line 1343 "_csv.c"
        var $35=$self; //@line 1343 "_csv.c"
        var $36=$35; //@line 1343 "_csv.c"
        FUNCTION_TABLE[$34]($36); //@line 1343 "_csv.c"
        __label__ = 5; break; //@line 1343 "_csv.c"
      case 5: // $bb4
        $0=0; //@line 1344 "_csv.c"
        __label__ = 16; break; //@line 1344 "_csv.c"
      case 6: // $bb5
        var $37=HEAP[$output_file]; //@line 1346 "_csv.c"
        var $38=_PyObject_GetAttrString($37, __str43); //@line 1346 "_csv.c"
        var $39=$self; //@line 1346 "_csv.c"
        var $40=$39+8; //@line 1346 "_csv.c"
        HEAP[$40]=$38; //@line 1346 "_csv.c"
        var $41=$self; //@line 1347 "_csv.c"
        var $42=$41+8; //@line 1347 "_csv.c"
        var $43=HEAP[$42]; //@line 1347 "_csv.c"
        var $44=($43)==0; //@line 1347 "_csv.c"
        if ($44) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1347 "_csv.c"
      case 7: // $bb6
        var $45=$self; //@line 1347 "_csv.c"
        var $46=$45+8; //@line 1347 "_csv.c"
        var $47=HEAP[$46]; //@line 1347 "_csv.c"
        var $48=_PyCallable_Check($47); //@line 1347 "_csv.c"
        var $49=($48)==0; //@line 1347 "_csv.c"
        if ($49) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1347 "_csv.c"
      case 8: // $bb7
        var $50=HEAP[_PyExc_TypeError]; //@line 1348 "_csv.c"
        _PyErr_SetString($50, __str44); //@line 1348 "_csv.c"
        var $51=$self; //@line 1350 "_csv.c"
        var $52=$51; //@line 1350 "_csv.c"
        var $53=$52; //@line 1350 "_csv.c"
        var $54=HEAP[$53]; //@line 1350 "_csv.c"
        var $55=($54) - 1; //@line 1350 "_csv.c"
        var $56=$52; //@line 1350 "_csv.c"
        HEAP[$56]=$55; //@line 1350 "_csv.c"
        var $57=$52; //@line 1350 "_csv.c"
        var $58=HEAP[$57]; //@line 1350 "_csv.c"
        var $59=($58)==0; //@line 1350 "_csv.c"
        if ($59) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1350 "_csv.c"
      case 9: // $bb8
        var $60=$self; //@line 1350 "_csv.c"
        var $61=$60; //@line 1350 "_csv.c"
        var $62=$61+4; //@line 1350 "_csv.c"
        var $63=HEAP[$62]; //@line 1350 "_csv.c"
        var $64=$63+24; //@line 1350 "_csv.c"
        var $65=HEAP[$64]; //@line 1350 "_csv.c"
        var $66=$self; //@line 1350 "_csv.c"
        var $67=$66; //@line 1350 "_csv.c"
        FUNCTION_TABLE[$65]($67); //@line 1350 "_csv.c"
        __label__ = 10; break; //@line 1350 "_csv.c"
      case 10: // $bb9
        $0=0; //@line 1351 "_csv.c"
        __label__ = 16; break; //@line 1351 "_csv.c"
      case 11: // $bb10
        var $68=HEAP[$dialect]; //@line 1353 "_csv.c"
        var $69=$keyword_args_addr; //@line 1353 "_csv.c"
        var $70=__call_dialect($68, $69); //@line 1353 "_csv.c"
        var $71=$70; //@line 1353 "_csv.c"
        var $72=$self; //@line 1353 "_csv.c"
        var $73=$72+12; //@line 1353 "_csv.c"
        HEAP[$73]=$71; //@line 1353 "_csv.c"
        var $74=$self; //@line 1354 "_csv.c"
        var $75=$74+12; //@line 1354 "_csv.c"
        var $76=HEAP[$75]; //@line 1354 "_csv.c"
        var $77=($76)==0; //@line 1354 "_csv.c"
        var $78=$self; //@line 1355 "_csv.c"
        if ($77) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 1354 "_csv.c"
      case 12: // $bb11
        var $79=$78; //@line 1355 "_csv.c"
        var $80=$79; //@line 1355 "_csv.c"
        var $81=HEAP[$80]; //@line 1355 "_csv.c"
        var $82=($81) - 1; //@line 1355 "_csv.c"
        var $83=$79; //@line 1355 "_csv.c"
        HEAP[$83]=$82; //@line 1355 "_csv.c"
        var $84=$79; //@line 1355 "_csv.c"
        var $85=HEAP[$84]; //@line 1355 "_csv.c"
        var $86=($85)==0; //@line 1355 "_csv.c"
        if ($86) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1355 "_csv.c"
      case 13: // $bb12
        var $87=$self; //@line 1355 "_csv.c"
        var $88=$87; //@line 1355 "_csv.c"
        var $89=$88+4; //@line 1355 "_csv.c"
        var $90=HEAP[$89]; //@line 1355 "_csv.c"
        var $91=$90+24; //@line 1355 "_csv.c"
        var $92=HEAP[$91]; //@line 1355 "_csv.c"
        var $93=$self; //@line 1355 "_csv.c"
        var $94=$93; //@line 1355 "_csv.c"
        FUNCTION_TABLE[$92]($94); //@line 1355 "_csv.c"
        __label__ = 14; break; //@line 1355 "_csv.c"
      case 14: // $bb13
        $0=0; //@line 1356 "_csv.c"
        __label__ = 16; break; //@line 1356 "_csv.c"
      case 15: // $bb14
        var $95=$78; //@line 1358 "_csv.c"
        _PyObject_GC_Track($95); //@line 1358 "_csv.c"
        var $96=$self; //@line 1359 "_csv.c"
        var $97=$96; //@line 1359 "_csv.c"
        $0=$97; //@line 1359 "_csv.c"
        __label__ = 16; break; //@line 1359 "_csv.c"
      case 16: // $bb15
        var $98=$0; //@line 1332 "_csv.c"
        $retval=$98; //@line 1332 "_csv.c"
        var $retval16=$retval; //@line 1332 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 1332 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_list_dialects($module, $args) {
    ;
    var __label__;
  
    var $module_addr;
    var $args_addr;
    var $retval;
    var $0;
    $module_addr=$module;
    $args_addr=$args;
    var $1=HEAP[_dialects]; //@line 1368 "_csv.c"
    var $2=_PyDict_Keys($1); //@line 1368 "_csv.c"
    $0=$2; //@line 1368 "_csv.c"
    var $3=$0; //@line 1368 "_csv.c"
    $retval=$3; //@line 1368 "_csv.c"
    var $retval1=$retval; //@line 1368 "_csv.c"
    ;
    return $retval1; //@line 1368 "_csv.c"
  }
  

  function _csv_register_dialect($module, $args, $kwargs) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr;
        var $args_addr;
        var $kwargs_addr;
        var $retval;
        var $0;
        var $name_obj=__stackBase__;
        var $dialect_obj=__stackBase__+4;
        var $dialect;
        $module_addr=$module;
        $args_addr=$args;
        $kwargs_addr=$kwargs;
        HEAP[$dialect_obj]=0; //@line 1374 "_csv.c"
        var $1=$args_addr; //@line 1377 "_csv.c"
        var $2=_PyArg_UnpackTuple($1, __str33, 1, 2, allocate([$name_obj,0,0,0,$dialect_obj,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1377 "_csv.c"
        var $3=($2)==0; //@line 1377 "_csv.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1377 "_csv.c"
      case 1: // $bb
        $0=0; //@line 1378 "_csv.c"
        __label__ = 14; break; //@line 1378 "_csv.c"
      case 2: // $bb1
        var $4=HEAP[$name_obj]; //@line 1379 "_csv.c"
        var $5=$4+4; //@line 1379 "_csv.c"
        var $6=HEAP[$5]; //@line 1379 "_csv.c"
        var $7=($6)!=(_PyBaseString_Type); //@line 1379 "_csv.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 1379 "_csv.c"
      case 3: // $bb2
        var $8=HEAP[$name_obj]; //@line 1379 "_csv.c"
        var $9=$8+4; //@line 1379 "_csv.c"
        var $10=HEAP[$9]; //@line 1379 "_csv.c"
        var $11=_PyType_IsSubtype($10, _PyBaseString_Type); //@line 1379 "_csv.c"
        var $12=($11)==0; //@line 1379 "_csv.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1379 "_csv.c"
      case 4: // $bb3
        var $13=HEAP[_PyExc_TypeError]; //@line 1380 "_csv.c"
        _PyErr_SetString($13, __str45); //@line 1380 "_csv.c"
        $0=0; //@line 1382 "_csv.c"
        __label__ = 14; break; //@line 1382 "_csv.c"
      case 5: // $bb4
        var $14=HEAP[$dialect_obj]; //@line 1384 "_csv.c"
        var $15=$kwargs_addr; //@line 1384 "_csv.c"
        var $16=__call_dialect($14, $15); //@line 1384 "_csv.c"
        $dialect=$16; //@line 1384 "_csv.c"
        var $17=($16)==0; //@line 1385 "_csv.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1385 "_csv.c"
      case 6: // $bb5
        $0=0; //@line 1386 "_csv.c"
        __label__ = 14; break; //@line 1386 "_csv.c"
      case 7: // $bb6
        var $18=HEAP[$name_obj]; //@line 1387 "_csv.c"
        var $19=HEAP[_dialects]; //@line 1387 "_csv.c"
        var $20=$dialect; //@line 1387 "_csv.c"
        var $21=_PyDict_SetItem($19, $18, $20); //@line 1387 "_csv.c"
        var $22=($21) < 0; //@line 1387 "_csv.c"
        var $23=$dialect; //@line 1388 "_csv.c"
        var $24=$23; //@line 1388 "_csv.c"
        var $25=HEAP[$24]; //@line 1388 "_csv.c"
        var $26=($25) - 1; //@line 1388 "_csv.c"
        var $27=$dialect; //@line 1388 "_csv.c"
        var $28=$27; //@line 1388 "_csv.c"
        HEAP[$28]=$26; //@line 1388 "_csv.c"
        var $29=$dialect; //@line 1388 "_csv.c"
        var $30=$29; //@line 1388 "_csv.c"
        var $31=HEAP[$30]; //@line 1388 "_csv.c"
        var $32=($31)==0; //@line 1388 "_csv.c"
        if ($22) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1387 "_csv.c"
      case 8: // $bb7
        if ($32) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1388 "_csv.c"
      case 9: // $bb8
        var $33=$dialect; //@line 1388 "_csv.c"
        var $34=$33+4; //@line 1388 "_csv.c"
        var $35=HEAP[$34]; //@line 1388 "_csv.c"
        var $36=$35+24; //@line 1388 "_csv.c"
        var $37=HEAP[$36]; //@line 1388 "_csv.c"
        var $38=$dialect; //@line 1388 "_csv.c"
        FUNCTION_TABLE[$37]($38); //@line 1388 "_csv.c"
        __label__ = 10; break; //@line 1388 "_csv.c"
      case 10: // $bb9
        $0=0; //@line 1389 "_csv.c"
        __label__ = 14; break; //@line 1389 "_csv.c"
      case 11: // $bb10
        if ($32) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1391 "_csv.c"
      case 12: // $bb11
        var $39=$dialect; //@line 1391 "_csv.c"
        var $40=$39+4; //@line 1391 "_csv.c"
        var $41=HEAP[$40]; //@line 1391 "_csv.c"
        var $42=$41+24; //@line 1391 "_csv.c"
        var $43=HEAP[$42]; //@line 1391 "_csv.c"
        var $44=$dialect; //@line 1391 "_csv.c"
        FUNCTION_TABLE[$43]($44); //@line 1391 "_csv.c"
        __label__ = 13; break; //@line 1391 "_csv.c"
      case 13: // $bb12
        var $45=HEAP[__Py_NoneStruct]; //@line 1392 "_csv.c"
        var $46=($45) + 1; //@line 1392 "_csv.c"
        HEAP[__Py_NoneStruct]=$46; //@line 1392 "_csv.c"
        $0=__Py_NoneStruct; //@line 1393 "_csv.c"
        __label__ = 14; break; //@line 1393 "_csv.c"
      case 14: // $bb13
        var $47=$0; //@line 1378 "_csv.c"
        $retval=$47; //@line 1378 "_csv.c"
        var $retval14=$retval; //@line 1378 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 1378 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_unregister_dialect($module, $name_obj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr;
        var $name_obj_addr;
        var $retval;
        var $0;
        $module_addr=$module;
        $name_obj_addr=$name_obj;
        var $1=HEAP[_dialects]; //@line 1399 "_csv.c"
        var $2=$name_obj_addr; //@line 1399 "_csv.c"
        var $3=_PyDict_DelItem($1, $2); //@line 1399 "_csv.c"
        var $4=($3) < 0; //@line 1399 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1399 "_csv.c"
      case 1: // $bb
        var $5=HEAP[_error_obj]; //@line 1400 "_csv.c"
        var $6=_PyErr_Format($5, __str4, allocate(1, "i32", ALLOC_STACK)); //@line 1400 "_csv.c"
        $0=$6; //@line 1400 "_csv.c"
        __label__ = 3; break; //@line 1400 "_csv.c"
      case 2: // $bb1
        var $7=HEAP[__Py_NoneStruct]; //@line 1401 "_csv.c"
        var $8=($7) + 1; //@line 1401 "_csv.c"
        HEAP[__Py_NoneStruct]=$8; //@line 1401 "_csv.c"
        $0=__Py_NoneStruct; //@line 1402 "_csv.c"
        __label__ = 3; break; //@line 1402 "_csv.c"
      case 3: // $bb2
        var $9=$0; //@line 1400 "_csv.c"
        $retval=$9; //@line 1400 "_csv.c"
        var $retval3=$retval; //@line 1400 "_csv.c"
        ;
        return $retval3; //@line 1400 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _csv_get_dialect($module, $name_obj) {
    ;
    var __label__;
  
    var $module_addr;
    var $name_obj_addr;
    var $retval;
    var $0;
    $module_addr=$module;
    $name_obj_addr=$name_obj;
    var $1=$name_obj_addr; //@line 1408 "_csv.c"
    var $2=_get_dialect_from_registry($1); //@line 1408 "_csv.c"
    $0=$2; //@line 1408 "_csv.c"
    var $3=$0; //@line 1408 "_csv.c"
    $retval=$3; //@line 1408 "_csv.c"
    var $retval1=$retval; //@line 1408 "_csv.c"
    ;
    return $retval1; //@line 1408 "_csv.c"
  }
  

  function _csv_field_size_limit($module, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $new_limit=__stackBase__;
        var $old_limit;
        $module_addr=$module;
        $args_addr=$args;
        HEAP[$new_limit]=0; //@line 1414 "_csv.c"
        var $1=HEAP[_field_limit]; //@line 1415 "_csv.c"
        $old_limit=$1; //@line 1415 "_csv.c"
        var $2=$args_addr; //@line 1417 "_csv.c"
        var $3=_PyArg_UnpackTuple($2, __str46, 0, 1, allocate([$new_limit,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1417 "_csv.c"
        var $4=($3)==0; //@line 1417 "_csv.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1417 "_csv.c"
      case 1: // $bb
        $0=0; //@line 1418 "_csv.c"
        __label__ = 7; break; //@line 1418 "_csv.c"
      case 2: // $bb1
        var $5=HEAP[$new_limit]; //@line 1419 "_csv.c"
        var $6=($5)!=0; //@line 1419 "_csv.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1419 "_csv.c"
      case 3: // $bb2
        var $7=HEAP[$new_limit]; //@line 1420 "_csv.c"
        var $8=$7+4; //@line 1420 "_csv.c"
        var $9=HEAP[$8]; //@line 1420 "_csv.c"
        var $10=$9+84; //@line 1420 "_csv.c"
        var $11=HEAP[$10]; //@line 1420 "_csv.c"
        var $12=($11) & 8388608; //@line 1420 "_csv.c"
        var $13=($12)==0; //@line 1420 "_csv.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1420 "_csv.c"
      case 4: // $bb3
        var $14=HEAP[_PyExc_TypeError]; //@line 1421 "_csv.c"
        var $15=_PyErr_Format($14, __str47, allocate(1, "i32", ALLOC_STACK)); //@line 1421 "_csv.c"
        $0=0; //@line 1423 "_csv.c"
        __label__ = 7; break; //@line 1423 "_csv.c"
      case 5: // $bb4
        var $16=HEAP[$new_limit]; //@line 1425 "_csv.c"
        var $17=_PyInt_AsLong($16); //@line 1425 "_csv.c"
        HEAP[_field_limit]=$17; //@line 1425 "_csv.c"
        __label__ = 6; break; //@line 1425 "_csv.c"
      case 6: // $bb5
        var $18=$old_limit; //@line 1427 "_csv.c"
        var $19=_PyInt_FromLong($18); //@line 1427 "_csv.c"
        $0=$19; //@line 1427 "_csv.c"
        __label__ = 7; break; //@line 1427 "_csv.c"
      case 7: // $bb6
        var $20=$0; //@line 1418 "_csv.c"
        $retval=$20; //@line 1418 "_csv.c"
        var $retval7=$retval; //@line 1418 "_csv.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 1418 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_csv() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $module;
        var $style;
        var $0=_PyType_Ready(_Dialect_Type); //@line 1568 "_csv.c"
        var $1=($0) < 0; //@line 1568 "_csv.c"
        if ($1) { __label__ = 14; break; } else { __label__ = 1; break; } //@line 1568 "_csv.c"
      case 1: // $bb
        var $2=_PyType_Ready(_Reader_Type); //@line 1571 "_csv.c"
        var $3=($2) < 0; //@line 1571 "_csv.c"
        if ($3) { __label__ = 14; break; } else { __label__ = 2; break; } //@line 1571 "_csv.c"
      case 2: // $bb1
        var $4=_PyType_Ready(_Writer_Type); //@line 1574 "_csv.c"
        var $5=($4) < 0; //@line 1574 "_csv.c"
        if ($5) { __label__ = 14; break; } else { __label__ = 3; break; } //@line 1574 "_csv.c"
      case 3: // $bb2
        var $6=_Py_InitModule4(__str54, _csv_methods, _csv_module_doc, 0, 1013); //@line 1578 "_csv.c"
        $module=$6; //@line 1578 "_csv.c"
        var $7=$module; //@line 1579 "_csv.c"
        var $8=($7)==0; //@line 1579 "_csv.c"
        if ($8) { __label__ = 14; break; } else { __label__ = 4; break; } //@line 1579 "_csv.c"
      case 4: // $bb3
        var $9=$module; //@line 1583 "_csv.c"
        var $10=_PyModule_AddStringConstant($9, __str55, __str56); //@line 1583 "_csv.c"
        var $11=($10)==-1; //@line 1583 "_csv.c"
        if ($11) { __label__ = 14; break; } else { __label__ = 5; break; } //@line 1583 "_csv.c"
      case 5: // $bb4
        var $12=_PyDict_New(); //@line 1588 "_csv.c"
        HEAP[_dialects]=$12; //@line 1588 "_csv.c"
        var $13=HEAP[_dialects]; //@line 1589 "_csv.c"
        var $14=($13)==0; //@line 1589 "_csv.c"
        if ($14) { __label__ = 14; break; } else { __label__ = 6; break; } //@line 1589 "_csv.c"
      case 6: // $bb5
        var $15=HEAP[_dialects]; //@line 1591 "_csv.c"
        var $16=$module; //@line 1591 "_csv.c"
        var $17=_PyModule_AddObject($16, __str57, $15); //@line 1591 "_csv.c"
        var $18=($17)!=0; //@line 1591 "_csv.c"
        if ($18) { __label__ = 14; break; } else { __label__ = 7; break; } //@line 1591 "_csv.c"
      case 7: // $bb6
        $style=_quote_styles; //@line 1595 "_csv.c"
        __label__ = 10; break; //@line 1595 "_csv.c"
      case 8: // $bb7
        var $19=$style; //@line 1596 "_csv.c"
        var $20=$19; //@line 1596 "_csv.c"
        var $21=HEAP[$20]; //@line 1596 "_csv.c"
        var $22=$style; //@line 1596 "_csv.c"
        var $23=$22+4; //@line 1596 "_csv.c"
        var $24=HEAP[$23]; //@line 1596 "_csv.c"
        var $25=$module; //@line 1596 "_csv.c"
        var $26=_PyModule_AddIntConstant($25, $24, $21); //@line 1596 "_csv.c"
        var $27=($26)==-1; //@line 1596 "_csv.c"
        if ($27) { __label__ = 14; break; } else { __label__ = 9; break; } //@line 1596 "_csv.c"
      case 9: // $bb8
        var $28=$style; //@line 1595 "_csv.c"
        var $29=$28+8; //@line 1595 "_csv.c"
        $style=$29; //@line 1595 "_csv.c"
        __label__ = 10; break; //@line 1595 "_csv.c"
      case 10: // $bb9
        var $30=$style; //@line 1595 "_csv.c"
        var $31=$30+4; //@line 1595 "_csv.c"
        var $32=HEAP[$31]; //@line 1595 "_csv.c"
        var $33=($32)!=0; //@line 1595 "_csv.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1595 "_csv.c"
      case 11: // $bb10
        var $34=HEAP[_Dialect_Type]; //@line 1602 "_csv.c"
        var $35=($34) + 1; //@line 1602 "_csv.c"
        HEAP[_Dialect_Type]=$35; //@line 1602 "_csv.c"
        var $36=$module; //@line 1603 "_csv.c"
        var $37=_PyModule_AddObject($36, __str58, _Dialect_Type); //@line 1603 "_csv.c"
        var $38=($37)!=0; //@line 1603 "_csv.c"
        if ($38) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 1603 "_csv.c"
      case 12: // $bb11
        var $39=_PyErr_NewException(__str59, 0, 0); //@line 1607 "_csv.c"
        HEAP[_error_obj]=$39; //@line 1607 "_csv.c"
        var $40=HEAP[_error_obj]; //@line 1608 "_csv.c"
        var $41=($40)==0; //@line 1608 "_csv.c"
        if ($41) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1608 "_csv.c"
      case 13: // $bb12
        var $42=HEAP[_error_obj]; //@line 1610 "_csv.c"
        var $43=$module; //@line 1610 "_csv.c"
        var $44=_PyModule_AddObject($43, __str60, $42); //@line 1610 "_csv.c"
        __label__ = 14; break; //@line 1610 "_csv.c"
      case 14: // $return
        ;
        return; //@line 1569 "_csv.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_csv"] = _init_csv;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_Dialect_get_escapechar,0,_Dialect_get_lineterminator,0,_Dialect_get_quotechar,0,_Dialect_get_quoting,0,_Dialect_dealloc,0,_dialect_new,0,_Reader_dealloc,0,_Reader_traverse,0,_Reader_clear,0,_PyObject_SelfIter,0,_Reader_iternext,0,_csv_writerow,0,_csv_writerows,0,_Writer_dealloc,0,_Writer_traverse,0,_Writer_clear,0,_csv_reader,0,_csv_writer,0,_csv_list_dialects,0,_csv_register_dialect,0,_csv_unregister_dialect,0,_csv_get_dialect,0,_csv_field_size_limit,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_field_limit=allocate([131072], ["i32",0,0,0,0], ALLOC_NORMAL);
__str=allocate([81,85,79,84,69,95,77,73,78,73,77,65,76,0] /* QUOTE_MINIMAL\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([81,85,79,84,69,95,65,76,76,0] /* QUOTE_ALL\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([81,85,79,84,69,95,78,79,78,78,85,77,69,82,73,67,0] /* QUOTE_NONNUMERIC\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([81,85,79,84,69,95,78,79,78,69,0] /* QUOTE_NONE\00 */, "i8", ALLOC_NORMAL);
_quote_styles=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i8","i8","i8","i8"], ALLOC_NORMAL);
_dialects=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_error_obj=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str4=allocate([117,110,107,110,111,119,110,32,100,105,97,108,101,99,116,0] /* unknown dialect\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([34,37,115,34,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,0] /* \22%s\22 must be an  */, "i8", ALLOC_NORMAL);
__str6=allocate([34,37,115,34,32,109,117,115,116,32,98,101,32,97,110,32,49,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,0] /* \22%s\22 must be an  */, "i8", ALLOC_NORMAL);
__str7=allocate([34,37,115,34,32,109,117,115,116,32,98,101,32,97,110,32,115,116,114,105,110,103,0] /* \22%s\22 must be an  */, "i8", ALLOC_NORMAL);
__str8=allocate([98,97,100,32,34,113,117,111,116,105,110,103,34,32,118,97,108,117,101,0] /* bad \22quoting\22 va */, "i8", ALLOC_NORMAL);
__str9=allocate([100,101,108,105,109,105,116,101,114,0] /* delimiter\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([115,107,105,112,105,110,105,116,105,97,108,115,112,97,99,101,0] /* skipinitialspace\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([100,111,117,98,108,101,113,117,111,116,101,0] /* doublequote\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([115,116,114,105,99,116,0] /* strict\00 */, "i8", ALLOC_NORMAL);
_Dialect_memberlist=allocate([0, 0, 0, 0, 7, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str13=allocate([101,115,99,97,112,101,99,104,97,114,0] /* escapechar\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([108,105,110,101,116,101,114,109,105,110,97,116,111,114,0] /* lineterminator\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([113,117,111,116,101,99,104,97,114,0] /* quotechar\00 */, "i8", ALLOC_NORMAL);
__str16=allocate([113,117,111,116,105,110,103,0] /* quoting\00 */, "i8", ALLOC_NORMAL);
_Dialect_getsetlist=allocate(100, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_dialect_kws=allocate(40, "i8*", ALLOC_NORMAL);
__str17=allocate([100,105,97,108,101,99,116,0] /* dialect\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([124,79,79,79,79,79,79,79,79,79,0] /* |OOOOOOOOO\00 */, "i8", ALLOC_NORMAL);
__str19=allocate([13,10,0] /* \0D\0A\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([100,101,108,105,109,105,116,101,114,32,109,117,115,116,32,98,101,32,115,101,116,0] /* delimiter must be se */, "i8", ALLOC_NORMAL);
__str21=allocate([113,117,111,116,101,99,104,97,114,32,109,117,115,116,32,98,101,32,115,101,116,32,105,102,32,113,117,111,116,105,110,103,32,101,110,97,98,108,101,100,0] /* quotechar must be se */, "i8", ALLOC_NORMAL);
__str22=allocate([108,105,110,101,116,101,114,109,105,110,97,116,111,114,32,109,117,115,116,32,98,101,32,115,101,116,0] /* lineterminator must  */, "i8", ALLOC_NORMAL);
_Dialect_Type_doc=allocate([67,83,86,32,100,105,97,108,101,99,116,10,10,84,104,101,32,68,105,97,108,101,99,116,32,116,121,112,101,32,114,101,99,111,114,100,115,32,67,83,86,32,112,97,114,115,105,110,103,32,97,110,100,32,103,101,110,101,114,97,116,105,111,110,32,111,112,116,105,111,110,115,46,10,0] /* CSV dialect\0A\0AThe */, "i8", ALLOC_NORMAL);
__str23=allocate([95,99,115,118,46,68,105,97,108,101,99,116,0] /* _csv.Dialect\00 */, "i8", ALLOC_NORMAL);
_Dialect_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str24=allocate([40,79,41,0] /* (O)\00 */, "i8", ALLOC_NORMAL);
__str25=allocate([40,41,0] /* ()\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([102,105,101,108,100,32,108,97,114,103,101,114,32,116,104,97,110,32,102,105,101,108,100,32,108,105,109,105,116,32,40,37,108,100,41,0] /* field larger than fi */, "i8", ALLOC_NORMAL);
__str27=allocate([39,37,99,39,32,101,120,112,101,99,116,101,100,32,97,102,116,101,114,32,39,37,99,39,0] /* '%c' expected after  */, "i8", ALLOC_NORMAL);
__str28=allocate([110,101,119,45,108,105,110,101,32,99,104,97,114,97,99,116,101,114,32,115,101,101,110,32,105,110,32,117,110,113,117,111,116,101,100,32,102,105,101,108,100,32,45,32,100,111,32,121,111,117,32,110,101,101,100,32,116,111,32,111,112,101,110,32,116,104,101,32,102,105,108,101,32,105,110,32,117,110,105,118,101,114,115,97,108,45,110,101,119,108,105,110,101,32,109,111,100,101,63,0] /* new-line character s */, "i8", ALLOC_NORMAL);
__str29=allocate([110,101,119,108,105,110,101,32,105,110,115,105,100,101,32,115,116,114,105,110,103,0] /* newline inside strin */, "i8", ALLOC_NORMAL);
__str30=allocate([108,105,110,101,32,99,111,110,116,97,105,110,115,32,78,85,76,76,32,98,121,116,101,0] /* line contains NULL b */, "i8", ALLOC_NORMAL);
_Reader_Type_doc=allocate([67,83,86,32,114,101,97,100,101,114,10,10,82,101,97,100,101,114,32,111,98,106,101,99,116,115,32,97,114,101,32,114,101,115,112,111,110,115,105,98,108,101,32,102,111,114,32,114,101,97,100,105,110,103,32,97,110,100,32,112,97,114,115,105,110,103,32,116,97,98,117,108,97,114,32,100,97,116,97,10,105,110,32,67,83,86,32,102,111,114,109,97,116,46,10,0] /* CSV reader\0A\0ARead */, "i8", ALLOC_NORMAL);
_Reader_methods=allocate(16, ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str31=allocate([108,105,110,101,95,110,117,109,0] /* line_num\00 */, "i8", ALLOC_NORMAL);
_Reader_memberlist=allocate([0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 40, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str32=allocate([95,99,115,118,46,114,101,97,100,101,114,0] /* _csv.reader\00 */, "i8", ALLOC_NORMAL);
_Reader_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str33=allocate(1, "i8", ALLOC_NORMAL);
__str34=allocate([97,114,103,117,109,101,110,116,32,49,32,109,117,115,116,32,98,101,32,97,110,32,105,116,101,114,97,116,111,114,0] /* argument 1 must be a */, "i8", ALLOC_NORMAL);
__str35=allocate([110,101,101,100,32,116,111,32,101,115,99,97,112,101,44,32,98,117,116,32,110,111,32,101,115,99,97,112,101,99,104,97,114,32,115,101,116,0] /* need to escape, but  */, "i8", ALLOC_NORMAL);
__str36=allocate([115,105,110,103,108,101,32,101,109,112,116,121,32,102,105,101,108,100,32,114,101,99,111,114,100,32,109,117,115,116,32,98,101,32,113,117,111,116,101,100,0] /* single empty field r */, "i8", ALLOC_NORMAL);
_csv_writerow_doc=allocate([119,114,105,116,101,114,111,119,40,115,101,113,117,101,110,99,101,41,10,10,67,111,110,115,116,114,117,99,116,32,97,110,100,32,119,114,105,116,101,32,97,32,67,83,86,32,114,101,99,111,114,100,32,102,114,111,109,32,97,32,115,101,113,117,101,110,99,101,32,111,102,32,102,105,101,108,100,115,46,32,32,78,111,110,45,115,116,114,105,110,103,10,101,108,101,109,101,110,116,115,32,119,105,108,108,32,98,101,32,99,111,110,118,101,114,116,101,100,32,116,111,32,115,116,114,105,110,103,46,0] /* writerow(sequence)\0 */, "i8", ALLOC_NORMAL);
__str37=allocate([115,101,113,117,101,110,99,101,32,101,120,112,101,99,116,101,100,0] /* sequence expected\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([40,115,35,41,0] /* (s#)\00 */, "i8", ALLOC_NORMAL);
_csv_writerows_doc=allocate([119,114,105,116,101,114,111,119,115,40,115,101,113,117,101,110,99,101,32,111,102,32,115,101,113,117,101,110,99,101,115,41,10,10,67,111,110,115,116,114,117,99,116,32,97,110,100,32,119,114,105,116,101,32,97,32,115,101,114,105,101,115,32,111,102,32,115,101,113,117,101,110,99,101,115,32,116,111,32,97,32,99,115,118,32,102,105,108,101,46,32,32,78,111,110,45,115,116,114,105,110,103,10,101,108,101,109,101,110,116,115,32,119,105,108,108,32,98,101,32,99,111,110,118,101,114,116,101,100,32,116,111,32,115,116,114,105,110,103,46,0] /* writerows(sequence o */, "i8", ALLOC_NORMAL);
__str39=allocate([119,114,105,116,101,114,111,119,115,40,41,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,105,116,101,114,97,98,108,101,0] /* writerows() argument */, "i8", ALLOC_NORMAL);
__str40=allocate([119,114,105,116,101,114,111,119,0] /* writerow\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([119,114,105,116,101,114,111,119,115,0] /* writerows\00 */, "i8", ALLOC_NORMAL);
_Writer_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_Writer_memberlist=allocate([0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8","i8","i8","i8","i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_Writer_Type_doc=allocate([67,83,86,32,119,114,105,116,101,114,10,10,87,114,105,116,101,114,32,111,98,106,101,99,116,115,32,97,114,101,32,114,101,115,112,111,110,115,105,98,108,101,32,102,111,114,32,103,101,110,101,114,97,116,105,110,103,32,116,97,98,117,108,97,114,32,100,97,116,97,10,105,110,32,67,83,86,32,102,111,114,109,97,116,32,102,114,111,109,32,115,101,113,117,101,110,99,101,32,105,110,112,117,116,46,10,0] /* CSV writer\0A\0AWrit */, "i8", ALLOC_NORMAL);
__str42=allocate([95,99,115,118,46,119,114,105,116,101,114,0] /* _csv.writer\00 */, "i8", ALLOC_NORMAL);
_Writer_Type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 148971, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str43=allocate([119,114,105,116,101,0] /* write\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([97,114,103,117,109,101,110,116,32,49,32,109,117,115,116,32,104,97,118,101,32,97,32,34,119,114,105,116,101,34,32,109,101,116,104,111,100,0] /* argument 1 must have */, "i8", ALLOC_NORMAL);
__str45=allocate([100,105,97,108,101,99,116,32,110,97,109,101,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,32,111,114,32,117,110,105,99,111,100,101,0] /* dialect name must be */, "i8", ALLOC_NORMAL);
__str46=allocate([102,105,101,108,100,95,115,105,122,101,95,108,105,109,105,116,0] /* field_size_limit\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([108,105,109,105,116,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,0] /* limit must be an int */, "i8", ALLOC_NORMAL);
_csv_module_doc=allocate([67,83,86,32,112,97,114,115,105,110,103,32,97,110,100,32,119,114,105,116,105,110,103,46,10,10,84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,99,108,97,115,115,101,115,32,116,104,97,116,32,97,115,115,105,115,116,32,105,110,32,116,104,101,32,114,101,97,100,105,110,103,32,97,110,100,32,119,114,105,116,105,110,103,10,111,102,32,67,111,109,109,97,32,83,101,112,97,114,97,116,101,100,32,86,97,108,117,101,32,40,67,83,86,41,32,102,105,108,101,115,44,32,97,110,100,32,105,109,112,108,101,109,101,110,116,115,32,116,104,101,32,105,110,116,101,114,102,97,99,101,10,100,101,115,99,114,105,98,101,100,32,98,121,32,80,69,80,32,51,48,53,46,32,32,65,108,116,104,111,117,103,104,32,109,97,110,121,32,67,83,86,32,102,105,108,101,115,32,97,114,101,32,115,105,109,112,108,101,32,116,111,32,112,97,114,115,101,44,10,116,104,101,32,102,111,114,109,97,116,32,105,115,32,110,111,116,32,102,111,114,109,97,108,108,121,32,100,101,102,105,110,101,100,32,98,121,32,97,32,115,116,97,98,108,101,32,115,112,101,99,105,102,105,99,97,116,105,111,110,32,97,110,100,10,105,115,32,115,117,98,116,108,101,32,101,110,111,117,103,104,32,116,104,97,116,32,112,97,114,115,105,110,103,32,108,105,110,101,115,32,111,102,32,97,32,67,83,86,32,102,105,108,101,32,119,105,116,104,32,115,111,109,101,116,104,105,110,103,10,108,105,107,101,32,108,105,110,101,46,115,112,108,105,116,40,34,44,34,41,32,105,115,32,98,111,117,110,100,32,116,111,32,102,97,105,108,46,32,32,84,104,101,32,109,111,100,117,108,101,32,115,117,112,112,111,114,116,115,32,116,104,114,101,101,10,98,97,115,105,99,32,65,80,73,115,58,32,114,101,97,100,105,110,103,44,32,119,114,105,116,105,110,103,44,32,97,110,100,32,114,101,103,105,115,116,114,97,116,105,111,110,32,111,102,32,100,105,97,108,101,99,116,115,46,10,10,10,68,73,65,76,69,67,84,32,82,69,71,73,83,84,82,65,84,73,79,78,58,10,10,82,101,97,100,101,114,115,32,97,110,100,32,119,114,105,116,101,114,115,32,115,117,112,112,111,114,116,32,97,32,100,105,97,108,101,99,116,32,97,114,103,117,109,101,110,116,44,32,119,104,105,99,104,32,105,115,32,97,32,99,111,110,118,101,110,105,101,110,116,10,104,97,110,100,108,101,32,111,110,32,97,32,103,114,111,117,112,32,111,102,32,115,101,116,116,105,110,103,115,46,32,32,87,104,101,110,32,116,104,101,32,100,105,97,108,101,99,116,32,97,114,103,117,109,101,110,116,32,105,115,32,97,32,115,116,114,105,110,103,44,10,105,116,32,105,100,101,110,116,105,102,105,101,115,32,111,110,101,32,111,102,32,116,104,101,32,100,105,97,108,101,99,116,115,32,112,114,101,118,105,111,117,115,108,121,32,114,101,103,105,115,116,101,114,101,100,32,119,105,116,104,32,116,104,101,32,109,111,100,117,108,101,46,10,73,102,32,105,116,32,105,115,32,97,32,99,108,97,115,115,32,111,114,32,105,110,115,116,97,110,99,101,44,32,116,104,101,32,97,116,116,114,105,98,117,116,101,115,32,111,102,32,116,104,101,32,97,114,103,117,109,101,110,116,32,97,114,101,32,117,115,101,100,32,97,115,10,116,104,101,32,115,101,116,116,105,110,103,115,32,102,111,114,32,116,104,101,32,114,101,97,100,101,114,32,111,114,32,119,114,105,116,101,114,58,10,10,32,32,32,32,99,108,97,115,115,32,101,120,99,101,108,58,10,32,32,32,32,32,32,32,32,100,101,108,105,109,105,116,101,114,32,61,32,39,44,39,10,32,32,32,32,32,32,32,32,113,117,111,116,101,99,104,97,114,32,61,32,39,34,39,10,32,32,32,32,32,32,32,32,101,115,99,97,112,101,99,104,97,114,32,61,32,78,111,110,101,10,32,32,32,32,32,32,32,32,100,111,117,98,108,101,113,117,111,116,101,32,61,32,84,114,117,101,10,32,32,32,32,32,32,32,32,115,107,105,112,105,110,105,116,105,97,108,115,112,97,99,101,32,61,32,70,97,108,115,101,10,32,32,32,32,32,32,32,32,108,105,110,101,116,101,114,109,105,110,97,116,111,114,32,61,32,39,92,114,92,110,39,10,32,32,32,32,32,32,32,32,113,117,111,116,105,110,103,32,61,32,81,85,79,84,69,95,77,73,78,73,77,65,76,10,10,83,69,84,84,73,78,71,83,58,10,10,32,32,32,32,42,32,113,117,111,116,101,99,104,97,114,32,45,32,115,112,101,99,105,102,105,101,115,32,97,32,111,110,101,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,32,116,111,32,117,115,101,32,97,115,32,116,104,101,32,10,32,32,32,32,32,32,32,32,113,117,111,116,105,110,103,32,99,104,97,114,97,99,116,101,114,46,32,32,73,116,32,100,101,102,97,117,108,116,115,32,116,111,32,39,34,39,46,10,32,32,32,32,42,32,100,101,108,105,109,105,116,101,114,32,45,32,115,112,101,99,105,102,105,101,115,32,97,32,111,110,101,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,32,116,111,32,117,115,101,32,97,115,32,116,104,101,32,10,32,32,32,32,32,32,32,32,102,105,101,108,100,32,115,101,112,97,114,97,116,111,114,46,32,32,73,116,32,100,101,102,97,117,108,116,115,32,116,111,32,39,44,39,46,10,32,32,32,32,42,32,115,107,105,112,105,110,105,116,105,97,108,115,112,97,99,101,32,45,32,115,112,101,99,105,102,105,101,115,32,104,111,119,32,116,111,32,105,110,116,101,114,112,114,101,116,32,119,104,105,116,101,115,112,97,99,101,32,119,104,105,99,104,10,32,32,32,32,32,32,32,32,105,109,109,101,100,105,97,116,101,108,121,32,102,111,108,108,111,119,115,32,97,32,100,101,108,105,109,105,116,101,114,46,32,32,73,116,32,100,101,102,97,117,108,116,115,32,116,111,32,70,97,108,115,101,44,32,119,104,105,99,104,10,32,32,32,32,32,32,32,32,109,101,97,110,115,32,116,104,97,116,32,119,104,105,116,101,115,112,97,99,101,32,105,109,109,101,100,105,97,116,101,108,121,32,102,111,108,108,111,119,105,110,103,32,97,32,100,101,108,105,109,105,116,101,114,32,105,115,32,112,97,114,116,10,32,32,32,32,32,32,32,32,111,102,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,102,105,101,108,100,46,10,32,32,32,32,42,32,108,105,110,101,116,101,114,109,105,110,97,116,111,114,32,45,32,32,115,112,101,99,105,102,105,101,115,32,116,104,101,32,99,104,97,114,97,99,116,101,114,32,115,101,113,117,101,110,99,101,32,119,104,105,99,104,32,115,104,111,117,108,100,32,10,32,32,32,32,32,32,32,32,116,101,114,109,105,110,97,116,101,32,114,111,119,115,46,10,32,32,32,32,42,32,113,117,111,116,105,110,103,32,45,32,99,111,110,116,114,111,108,115,32,119,104,101,110,32,113,117,111,116,101,115,32,115,104,111,117,108,100,32,98,101,32,103,101,110,101,114,97,116,101,100,32,98,121,32,116,104,101,32,119,114,105,116,101,114,46,10,32,32,32,32,32,32,32,32,73,116,32,99,97,110,32,116,97,107,101,32,111,110,32,97,110,121,32,111,102,32,116,104,101,32,102,111,108,108,111,119,105,110,103,32,109,111,100,117,108,101,32,99,111,110,115,116,97,110,116,115,58,10,10,32,32,32,32,32,32,32,32,99,115,118,46,81,85,79,84,69,95,77,73,78,73,77,65,76,32,109,101,97,110,115,32,111,110,108,121,32,119,104,101,110,32,114,101,113,117,105,114,101,100,44,32,102,111,114,32,101,120,97,109,112,108,101,44,32,119,104,101,110,32,97,10,32,32,32,32,32,32,32,32,32,32,32,32,102,105,101,108,100,32,99,111,110,116,97,105,110,115,32,101,105,116,104,101,114,32,116,104,101,32,113,117,111,116,101,99,104,97,114,32,111,114,32,116,104,101,32,100,101,108,105,109,105,116,101,114,10,32,32,32,32,32,32,32,32,99,115,118,46,81,85,79,84,69,95,65,76,76,32,109,101,97,110,115,32,116,104,97,116,32,113,117,111,116,101,115,32,97,114,101,32,97,108,119,97,121,115,32,112,108,97,99,101,100,32,97,114,111,117,110,100,32,102,105,101,108,100,115,46,10,32,32,32,32,32,32,32,32,99,115,118,46,81,85,79,84,69,95,78,79,78,78,85,77,69,82,73,67,32,109,101,97,110,115,32,116,104,97,116,32,113,117,111,116,101,115,32,97,114,101,32,97,108,119,97,121,115,32,112,108,97,99,101,100,32,97,114,111,117,110,100,10,32,32,32,32,32,32,32,32,32,32,32,32,102,105,101,108,100,115,32,119,104,105,99,104,32,100,111,32,110,111,116,32,112,97,114,115,101,32,97,115,32,105,110,116,101,103,101,114,115,32,111,114,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,10,32,32,32,32,32,32,32,32,32,32,32,32,110,117,109,98,101,114,115,46,10,32,32,32,32,32,32,32,32,99,115,118,46,81,85,79,84,69,95,78,79,78,69,32,109,101,97,110,115,32,116,104,97,116,32,113,117,111,116,101,115,32,97,114,101,32,110,101,118,101,114,32,112,108,97,99,101,100,32,97,114,111,117,110,100,32,102,105,101,108,100,115,46,10,32,32,32,32,42,32,101,115,99,97,112,101,99,104,97,114,32,45,32,115,112,101,99,105,102,105,101,115,32,97,32,111,110,101,45,99,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,32,117,115,101,100,32,116,111,32,101,115,99,97,112,101,32,10,32,32,32,32,32,32,32,32,116,104,101,32,100,101,108,105,109,105,116,101,114,32,119,104,101,110,32,113,117,111,116,105,110,103,32,105,115,32,115,101,116,32,116,111,32,81,85,79,84,69,95,78,79,78,69,46,10,32,32,32,32,42,32,100,111,117,98,108,101,113,117,111,116,101,32,45,32,99,111,110,116,114,111,108,115,32,116,104,101,32,104,97,110,100,108,105,110,103,32,111,102,32,113,117,111,116,101,115,32,105,110,115,105,100,101,32,102,105,101,108,100,115,46,32,32,87,104,101,110,10,32,32,32,32,32,32,32,32,84,114,117,101,44,32,116,119,111,32,99,111,110,115,101,99,117,116,105,118,101,32,113,117,111,116,101,115,32,97,114,101,32,105,110,116,101,114,112,114,101,116,101,100,32,97,115,32,111,110,101,32,100,117,114,105,110,103,32,114,101,97,100,44,10,32,32,32,32,32,32,32,32,97,110,100,32,119,104,101,110,32,119,114,105,116,105,110,103,44,32,101,97,99,104,32,113,117,111,116,101,32,99,104,97,114,97,99,116,101,114,32,101,109,98,101,100,100,101,100,32,105,110,32,116,104,101,32,100,97,116,97,32,105,115,10,32,32,32,32,32,32,32,32,119,114,105,116,116,101,110,32,97,115,32,116,119,111,32,113,117,111,116,101,115,10,0] /* CSV parsing and writ */, "i8", ALLOC_NORMAL);
_csv_reader_doc=allocate([32,32,32,32,99,115,118,95,114,101,97,100,101,114,32,61,32,114,101,97,100,101,114,40,105,116,101,114,97,98,108,101,32,91,44,32,100,105,97,108,101,99,116,61,39,101,120,99,101,108,39,93,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,91,111,112,116,105,111,110,97,108,32,107,101,121,119,111,114,100,32,97,114,103,115,93,41,10,32,32,32,32,102,111,114,32,114,111,119,32,105,110,32,99,115,118,95,114,101,97,100,101,114,58,10,32,32,32,32,32,32,32,32,112,114,111,99,101,115,115,40,114,111,119,41,10,10,84,104,101,32,34,105,116,101,114,97,98,108,101,34,32,97,114,103,117,109,101,110,116,32,99,97,110,32,98,101,32,97,110,121,32,111,98,106,101,99,116,32,116,104,97,116,32,114,101,116,117,114,110,115,32,97,32,108,105,110,101,10,111,102,32,105,110,112,117,116,32,102,111,114,32,101,97,99,104,32,105,116,101,114,97,116,105,111,110,44,32,115,117,99,104,32,97,115,32,97,32,102,105,108,101,32,111,98,106,101,99,116,32,111,114,32,97,32,108,105,115,116,46,32,32,84,104,101,10,111,112,116,105,111,110,97,108,32,34,100,105,97,108,101,99,116,34,32,112,97,114,97,109,101,116,101,114,32,105,115,32,100,105,115,99,117,115,115,101,100,32,98,101,108,111,119,46,32,32,84,104,101,32,102,117,110,99,116,105,111,110,10,97,108,115,111,32,97,99,99,101,112,116,115,32,111,112,116,105,111,110,97,108,32,107,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,115,32,119,104,105,99,104,32,111,118,101,114,114,105,100,101,32,115,101,116,116,105,110,103,115,10,112,114,111,118,105,100,101,100,32,98,121,32,116,104,101,32,100,105,97,108,101,99,116,46,10,10,84,104,101,32,114,101,116,117,114,110,101,100,32,111,98,106,101,99,116,32,105,115,32,97,110,32,105,116,101,114,97,116,111,114,46,32,32,69,97,99,104,32,105,116,101,114,97,116,105,111,110,32,114,101,116,117,114,110,115,32,97,32,114,111,119,10,111,102,32,116,104,101,32,67,83,86,32,102,105,108,101,32,40,119,104,105,99,104,32,99,97,110,32,115,112,97,110,32,109,117,108,116,105,112,108,101,32,105,110,112,117,116,32,108,105,110,101,115,41,58,10,0] /*     csv_reader = rea */, "i8", ALLOC_NORMAL);
_csv_writer_doc=allocate([32,32,32,32,99,115,118,95,119,114,105,116,101,114,32,61,32,99,115,118,46,119,114,105,116,101,114,40,102,105,108,101,111,98,106,32,91,44,32,100,105,97,108,101,99,116,61,39,101,120,99,101,108,39,93,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,91,111,112,116,105,111,110,97,108,32,107,101,121,119,111,114,100,32,97,114,103,115,93,41,10,32,32,32,32,102,111,114,32,114,111,119,32,105,110,32,115,101,113,117,101,110,99,101,58,10,32,32,32,32,32,32,32,32,99,115,118,95,119,114,105,116,101,114,46,119,114,105,116,101,114,111,119,40,114,111,119,41,10,10,32,32,32,32,91,111,114,93,10,10,32,32,32,32,99,115,118,95,119,114,105,116,101,114,32,61,32,99,115,118,46,119,114,105,116,101,114,40,102,105,108,101,111,98,106,32,91,44,32,100,105,97,108,101,99,116,61,39,101,120,99,101,108,39,93,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,91,111,112,116,105,111,110,97,108,32,107,101,121,119,111,114,100,32,97,114,103,115,93,41,10,32,32,32,32,99,115,118,95,119,114,105,116,101,114,46,119,114,105,116,101,114,111,119,115,40,114,111,119,115,41,10,10,84,104,101,32,34,102,105,108,101,111,98,106,34,32,97,114,103,117,109,101,110,116,32,99,97,110,32,98,101,32,97,110,121,32,111,98,106,101,99,116,32,116,104,97,116,32,115,117,112,112,111,114,116,115,32,116,104,101,32,102,105,108,101,32,65,80,73,46,10,0] /*     csv_writer = csv */, "i8", ALLOC_NORMAL);
_csv_list_dialects_doc=allocate([82,101,116,117,114,110,32,97,32,108,105,115,116,32,111,102,32,97,108,108,32,107,110,111,119,32,100,105,97,108,101,99,116,32,110,97,109,101,115,46,10,32,32,32,32,110,97,109,101,115,32,61,32,99,115,118,46,108,105,115,116,95,100,105,97,108,101,99,116,115,40,41,0] /* Return a list of all */, "i8", ALLOC_NORMAL);
_csv_get_dialect_doc=allocate([82,101,116,117,114,110,32,116,104,101,32,100,105,97,108,101,99,116,32,105,110,115,116,97,110,99,101,32,97,115,115,111,99,105,97,116,101,100,32,119,105,116,104,32,110,97,109,101,46,10,32,32,32,32,100,105,97,108,101,99,116,32,61,32,99,115,118,46,103,101,116,95,100,105,97,108,101,99,116,40,110,97,109,101,41,0] /* Return the dialect i */, "i8", ALLOC_NORMAL);
_csv_register_dialect_doc=allocate([67,114,101,97,116,101,32,97,32,109,97,112,112,105,110,103,32,102,114,111,109,32,97,32,115,116,114,105,110,103,32,110,97,109,101,32,116,111,32,97,32,100,105,97,108,101,99,116,32,99,108,97,115,115,46,10,32,32,32,32,100,105,97,108,101,99,116,32,61,32,99,115,118,46,114,101,103,105,115,116,101,114,95,100,105,97,108,101,99,116,40,110,97,109,101,44,32,100,105,97,108,101,99,116,41,0] /* Create a mapping fro */, "i8", ALLOC_NORMAL);
_csv_unregister_dialect_doc=allocate([68,101,108,101,116,101,32,116,104,101,32,110,97,109,101,47,100,105,97,108,101,99,116,32,109,97,112,112,105,110,103,32,97,115,115,111,99,105,97,116,101,100,32,119,105,116,104,32,97,32,115,116,114,105,110,103,32,110,97,109,101,46,10,32,32,32,32,99,115,118,46,117,110,114,101,103,105,115,116,101,114,95,100,105,97,108,101,99,116,40,110,97,109,101,41,0] /* Delete the name/dial */, "i8", ALLOC_NORMAL);
_csv_field_size_limit_doc=allocate([83,101,116,115,32,97,110,32,117,112,112,101,114,32,108,105,109,105,116,32,111,110,32,112,97,114,115,101,100,32,102,105,101,108,100,115,46,10,32,32,32,32,99,115,118,46,102,105,101,108,100,95,115,105,122,101,95,108,105,109,105,116,40,91,108,105,109,105,116,93,41,10,10,82,101,116,117,114,110,115,32,111,108,100,32,108,105,109,105,116,46,32,73,102,32,108,105,109,105,116,32,105,115,32,110,111,116,32,103,105,118,101,110,44,32,110,111,32,110,101,119,32,108,105,109,105,116,32,105,115,32,115,101,116,32,97,110,100,10,116,104,101,32,111,108,100,32,108,105,109,105,116,32,105,115,32,114,101,116,117,114,110,101,100,0] /* Sets an upper limit  */, "i8", ALLOC_NORMAL);
__str48=allocate([114,101,97,100,101,114,0] /* reader\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([119,114,105,116,101,114,0] /* writer\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([108,105,115,116,95,100,105,97,108,101,99,116,115,0] /* list_dialects\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([114,101,103,105,115,116,101,114,95,100,105,97,108,101,99,116,0] /* register_dialect\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([117,110,114,101,103,105,115,116,101,114,95,100,105,97,108,101,99,116,0] /* unregister_dialect\0 */, "i8", ALLOC_NORMAL);
__str53=allocate([103,101,116,95,100,105,97,108,101,99,116,0] /* get_dialect\00 */, "i8", ALLOC_NORMAL);
_csv_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str54=allocate([95,99,115,118,0] /* _csv\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([95,95,118,101,114,115,105,111,110,95,95,0] /* __version__\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([49,46,48,0] /* 1.0\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([95,100,105,97,108,101,99,116,115,0] /* _dialects\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([68,105,97,108,101,99,116,0] /* Dialect\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([95,99,115,118,46,69,114,114,111,114,0] /* _csv.Error\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([69,114,114,111,114,0] /* Error\00 */, "i8", ALLOC_NORMAL);
HEAP[_quote_styles+4]=__str;
HEAP[_quote_styles+12]=__str1;
HEAP[_quote_styles+20]=__str2;
HEAP[_quote_styles+28]=__str3;
HEAP[_Dialect_memberlist]=__str9;
HEAP[_Dialect_memberlist+20]=__str10;
HEAP[_Dialect_memberlist+40]=__str11;
HEAP[_Dialect_memberlist+60]=__str12;
HEAP[_Dialect_getsetlist]=__str13;
HEAP[_Dialect_getsetlist+4]=(FUNCTION_TABLE_OFFSET + 2);
HEAP[_Dialect_getsetlist+20]=__str14;
HEAP[_Dialect_getsetlist+24]=(FUNCTION_TABLE_OFFSET + 4);
HEAP[_Dialect_getsetlist+40]=__str15;
HEAP[_Dialect_getsetlist+44]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_Dialect_getsetlist+60]=__str16;
HEAP[_Dialect_getsetlist+64]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_dialect_kws]=__str17;
HEAP[_dialect_kws+4]=__str9;
HEAP[_dialect_kws+8]=__str11;
HEAP[_dialect_kws+12]=__str13;
HEAP[_dialect_kws+16]=__str14;
HEAP[_dialect_kws+20]=__str15;
HEAP[_dialect_kws+24]=__str16;
HEAP[_dialect_kws+28]=__str10;
HEAP[_dialect_kws+32]=__str12;
HEAP[_Dialect_Type+12]=__str23;
HEAP[_Dialect_Type+24]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_Dialect_Type+88]=_Dialect_Type_doc;
HEAP[_Dialect_Type+120]=_Dialect_memberlist;
HEAP[_Dialect_Type+124]=_Dialect_getsetlist;
HEAP[_Dialect_Type+156]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_Reader_memberlist]=__str17;
HEAP[_Reader_memberlist+20]=__str31;
HEAP[_Reader_Type+12]=__str32;
HEAP[_Reader_Type+24]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_Reader_Type+88]=_Reader_Type_doc;
HEAP[_Reader_Type+92]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_Reader_Type+96]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_Reader_Type+108]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_Reader_Type+112]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_Reader_Type+116]=_Reader_methods;
HEAP[_Reader_Type+120]=_Reader_memberlist;
HEAP[_Writer_methods]=__str40;
HEAP[_Writer_methods+4]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_Writer_methods+12]=_csv_writerow_doc;
HEAP[_Writer_methods+16]=__str41;
HEAP[_Writer_methods+20]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_Writer_methods+28]=_csv_writerows_doc;
HEAP[_Writer_memberlist]=__str17;
HEAP[_Writer_Type+12]=__str42;
HEAP[_Writer_Type+24]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_Writer_Type+88]=_Writer_Type_doc;
HEAP[_Writer_Type+92]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_Writer_Type+96]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_Writer_Type+116]=_Writer_methods;
HEAP[_Writer_Type+120]=_Writer_memberlist;
HEAP[_csv_methods]=__str48;
HEAP[_csv_methods+4]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_csv_methods+12]=_csv_reader_doc;
HEAP[_csv_methods+16]=__str49;
HEAP[_csv_methods+20]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_csv_methods+28]=_csv_writer_doc;
HEAP[_csv_methods+32]=__str50;
HEAP[_csv_methods+36]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_csv_methods+44]=_csv_list_dialects_doc;
HEAP[_csv_methods+48]=__str51;
HEAP[_csv_methods+52]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_csv_methods+60]=_csv_register_dialect_doc;
HEAP[_csv_methods+64]=__str52;
HEAP[_csv_methods+68]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_csv_methods+76]=_csv_unregister_dialect_doc;
HEAP[_csv_methods+80]=__str53;
HEAP[_csv_methods+84]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_csv_methods+92]=_csv_get_dialect_doc;
HEAP[_csv_methods+96]=__str46;
HEAP[_csv_methods+100]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_csv_methods+108]=_csv_field_size_limit_doc;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

