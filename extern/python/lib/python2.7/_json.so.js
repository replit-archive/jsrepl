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



var $0___SIZE = 160; // %0
  
var $1___SIZE = 20; // %1
  
var $2___SIZE = 180; // %2
  
var $3___SIZE = 196; // %3
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyEncoderObject___SIZE = 48; // %struct.PyEncoderObject
  
var $struct_PyFloatObject___SIZE = 16; // %struct.PyFloatObject
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyInterpreterState___SIZE = 40; // %struct.PyInterpreterState
  
var $struct_PyListObject___SIZE = 20; // %struct.PyListObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PyScannerObject___SIZE = 36; // %struct.PyScannerObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_PyThreadState___SIZE = 84; // %struct.PyThreadState
  
var $struct_PyTupleObject___SIZE = 16; // %struct.PyTupleObject
  
var $struct_PyUnicodeObject___SIZE = 24; // %struct.PyUnicodeObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__frame___SIZE = 0; // %struct._frame
  var $struct__frame___FLATTENER = [];
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var __str;
var __str1;
var __str2;
var __str3;
var __str4;
var __str5;
var __str6;
var _scanner_members;
var __str7;
var __str8;
var __str9;
var __str10;
var __str11;
var __str12;
var __str13;
var __str14;
var _encoder_members;
var __str15;
var _errmsg_fn_8641;
var __str16;
var __str17;
var __str18;

var _joinfn_8675;
var __str19;
var __str20;
var __str21;
var __str22;
var __str23;
var __str24;
var _pydoc_scanstring;
var __str25;
var __str26;

var __str27;
var _pydoc_encode_basestring_ascii;
var __str28;
var __str29;
var ___PRETTY_FUNCTION___9208;
var ___PRETTY_FUNCTION___9278;
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
var ___PRETTY_FUNCTION___10703;
var __str41;
var _kwlist_10701;
var __str42;
var __str43;
var ___PRETTY_FUNCTION___10762;
var __str44;
var _kwlist_10760;
var __str45;
var _scanner_doc;
var __str46;
var _PyScannerType;
var __str47;
var ___PRETTY_FUNCTION___10949;
var __str48;
var _kwlist_10938;
var __str49;

var ___PRETTY_FUNCTION___11015;
var __str50;
var _kwlist_11010;
var __str51;
var __str52;
var _s_null_11046;
var __str53;
var _s_true_11047;
var __str54;
var _s_false_11048;
var __str55;
var __str56;
var __str57;
var __str58;
var __str59;
var _open_dict_11341;
var _close_dict_11342;
var _empty_dict_11343;
var __str60;
var __str61;
var __str62;
var __str63;
var _open_array_11600;
var _close_array_11601;
var _empty_array_11602;
var __str64;
var __str65;
var __str66;
var __str67;
var ___PRETTY_FUNCTION___11738;
var ___PRETTY_FUNCTION___11816;
var _encoder_doc;
var __str68;
var _PyEncoderType;
var _speedups_methods;
var __str69;
var __str70;
var _module_doc;
var __str71;
var __str72;
var __str73;























































  function __convertPyInt_AsSsize_t($o, $size_ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $o_addr;
        var $size_ptr_addr;
        var $retval;
        var $0;
        $o_addr=$o;
        $size_ptr_addr=$size_ptr;
        var $1=$o_addr; //@line 145 "_json.c"
        var $2=_PyInt_AsSsize_t($1); //@line 145 "_json.c"
        var $3=$size_ptr_addr; //@line 145 "_json.c"
        HEAP[$3]=$2; //@line 145 "_json.c"
        var $4=$size_ptr_addr; //@line 146 "_json.c"
        var $5=HEAP[$4]; //@line 146 "_json.c"
        var $6=($5)==-1; //@line 146 "_json.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 146 "_json.c"
      case 1: // $bb
        var $7=_PyErr_Occurred(); //@line 146 "_json.c"
        var $8=($7)!=0; //@line 146 "_json.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 146 "_json.c"
      case 2: // $bb1
        $0=0; //@line 147 "_json.c"
        __label__ = 4; break; //@line 147 "_json.c"
      case 3: // $bb2
        $0=1; //@line 148 "_json.c"
        __label__ = 4; break; //@line 148 "_json.c"
      case 4: // $bb3
        var $9=$0; //@line 147 "_json.c"
        $retval=$9; //@line 147 "_json.c"
        var $retval4=$retval; //@line 147 "_json.c"
        ;
        return $retval4; //@line 147 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __convertPyInt_FromSsize_t($size_ptr) {
    ;
    var __label__;
  
    var $size_ptr_addr;
    var $retval;
    var $0;
    $size_ptr_addr=$size_ptr;
    var $1=$size_ptr_addr; //@line 155 "_json.c"
    var $2=HEAP[$1]; //@line 155 "_json.c"
    var $3=_PyInt_FromSsize_t($2); //@line 155 "_json.c"
    $0=$3; //@line 155 "_json.c"
    var $4=$0; //@line 155 "_json.c"
    $retval=$4; //@line 155 "_json.c"
    var $retval1=$retval; //@line 155 "_json.c"
    ;
    return $retval1; //@line 155 "_json.c"
  }
  

  function _ascii_escape_char($c, $output, $chars) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $c_addr;
        var $output_addr;
        var $chars_addr;
        var $retval;
        var $0;
        $c_addr=$c;
        $output_addr=$output;
        $chars_addr=$chars;
        var $1=$output_addr; //@line 164 "_json.c"
        var $2=$chars_addr; //@line 164 "_json.c"
        var $3=$1+$2; //@line 164 "_json.c"
        HEAP[$3]=92; //@line 164 "_json.c"
        var $4=$chars_addr; //@line 164 "_json.c"
        var $5=($4) + 1; //@line 164 "_json.c"
        $chars_addr=$5; //@line 164 "_json.c"
        var $6=$c_addr; //@line 165 "_json.c"
        var $7=($6); //@line 165 "_json.c"
        if ($7 == 8) {
          __label__ = 3; break;
        }
        else if ($7 == 9) {
          __label__ = 7; break;
        }
        else if ($7 == 10) {
          __label__ = 5; break;
        }
        else if ($7 == 12) {
          __label__ = 4; break;
        }
        else if ($7 == 13) {
          __label__ = 6; break;
        }
        else if ($7 == 34) {
          __label__ = 2; break;
        }
        else if ($7 == 92) {
          __label__ = 1; break;
        }
        else {
        __label__ = 8; break;
        }
        
      case 1: // $bb
        var $8=$c_addr; //@line 166 "_json.c"
        var $9=((($8)) & 255); //@line 166 "_json.c"
        var $10=$output_addr; //@line 166 "_json.c"
        var $11=$chars_addr; //@line 166 "_json.c"
        var $12=$10+$11; //@line 166 "_json.c"
        HEAP[$12]=$9; //@line 166 "_json.c"
        var $13=$chars_addr; //@line 166 "_json.c"
        var $14=($13) + 1; //@line 166 "_json.c"
        $chars_addr=$14; //@line 166 "_json.c"
        __label__ = 9; break; //@line 166 "_json.c"
      case 2: // $bb1
        var $15=$c_addr; //@line 167 "_json.c"
        var $16=((($15)) & 255); //@line 167 "_json.c"
        var $17=$output_addr; //@line 167 "_json.c"
        var $18=$chars_addr; //@line 167 "_json.c"
        var $19=$17+$18; //@line 167 "_json.c"
        HEAP[$19]=$16; //@line 167 "_json.c"
        var $20=$chars_addr; //@line 167 "_json.c"
        var $21=($20) + 1; //@line 167 "_json.c"
        $chars_addr=$21; //@line 167 "_json.c"
        __label__ = 9; break; //@line 167 "_json.c"
      case 3: // $bb2
        var $22=$output_addr; //@line 168 "_json.c"
        var $23=$chars_addr; //@line 168 "_json.c"
        var $24=$22+$23; //@line 168 "_json.c"
        HEAP[$24]=98; //@line 168 "_json.c"
        var $25=$chars_addr; //@line 168 "_json.c"
        var $26=($25) + 1; //@line 168 "_json.c"
        $chars_addr=$26; //@line 168 "_json.c"
        __label__ = 9; break; //@line 168 "_json.c"
      case 4: // $bb3
        var $27=$output_addr; //@line 169 "_json.c"
        var $28=$chars_addr; //@line 169 "_json.c"
        var $29=$27+$28; //@line 169 "_json.c"
        HEAP[$29]=102; //@line 169 "_json.c"
        var $30=$chars_addr; //@line 169 "_json.c"
        var $31=($30) + 1; //@line 169 "_json.c"
        $chars_addr=$31; //@line 169 "_json.c"
        __label__ = 9; break; //@line 169 "_json.c"
      case 5: // $bb4
        var $32=$output_addr; //@line 170 "_json.c"
        var $33=$chars_addr; //@line 170 "_json.c"
        var $34=$32+$33; //@line 170 "_json.c"
        HEAP[$34]=110; //@line 170 "_json.c"
        var $35=$chars_addr; //@line 170 "_json.c"
        var $36=($35) + 1; //@line 170 "_json.c"
        $chars_addr=$36; //@line 170 "_json.c"
        __label__ = 9; break; //@line 170 "_json.c"
      case 6: // $bb5
        var $37=$output_addr; //@line 171 "_json.c"
        var $38=$chars_addr; //@line 171 "_json.c"
        var $39=$37+$38; //@line 171 "_json.c"
        HEAP[$39]=114; //@line 171 "_json.c"
        var $40=$chars_addr; //@line 171 "_json.c"
        var $41=($40) + 1; //@line 171 "_json.c"
        $chars_addr=$41; //@line 171 "_json.c"
        __label__ = 9; break; //@line 171 "_json.c"
      case 7: // $bb6
        var $42=$output_addr; //@line 172 "_json.c"
        var $43=$chars_addr; //@line 172 "_json.c"
        var $44=$42+$43; //@line 172 "_json.c"
        HEAP[$44]=116; //@line 172 "_json.c"
        var $45=$chars_addr; //@line 172 "_json.c"
        var $46=($45) + 1; //@line 172 "_json.c"
        $chars_addr=$46; //@line 172 "_json.c"
        __label__ = 9; break; //@line 172 "_json.c"
      case 8: // $bb7
        var $47=$output_addr; //@line 188 "_json.c"
        var $48=$chars_addr; //@line 188 "_json.c"
        var $49=$47+$48; //@line 188 "_json.c"
        HEAP[$49]=117; //@line 188 "_json.c"
        var $50=$chars_addr; //@line 188 "_json.c"
        var $51=($50) + 1; //@line 188 "_json.c"
        $chars_addr=$51; //@line 188 "_json.c"
        var $52=$c_addr; //@line 189 "_json.c"
        var $53=($52) >>> 12; //@line 189 "_json.c"
        var $54=($53); //@line 189 "_json.c"
        var $55=($54) & 15; //@line 189 "_json.c"
        var $56=__str15+$55; //@line 189 "_json.c"
        var $57=HEAP[$56]; //@line 189 "_json.c"
        var $58=$output_addr; //@line 189 "_json.c"
        var $59=$chars_addr; //@line 189 "_json.c"
        var $60=$58+$59; //@line 189 "_json.c"
        HEAP[$60]=$57; //@line 189 "_json.c"
        var $61=$chars_addr; //@line 189 "_json.c"
        var $62=($61) + 1; //@line 189 "_json.c"
        $chars_addr=$62; //@line 189 "_json.c"
        var $63=$c_addr; //@line 190 "_json.c"
        var $64=($63) >>> 8; //@line 190 "_json.c"
        var $65=($64); //@line 190 "_json.c"
        var $66=($65) & 15; //@line 190 "_json.c"
        var $67=__str15+$66; //@line 190 "_json.c"
        var $68=HEAP[$67]; //@line 190 "_json.c"
        var $69=$output_addr; //@line 190 "_json.c"
        var $70=$chars_addr; //@line 190 "_json.c"
        var $71=$69+$70; //@line 190 "_json.c"
        HEAP[$71]=$68; //@line 190 "_json.c"
        var $72=$chars_addr; //@line 190 "_json.c"
        var $73=($72) + 1; //@line 190 "_json.c"
        $chars_addr=$73; //@line 190 "_json.c"
        var $74=$c_addr; //@line 191 "_json.c"
        var $75=($74) >>> 4; //@line 191 "_json.c"
        var $76=($75); //@line 191 "_json.c"
        var $77=($76) & 15; //@line 191 "_json.c"
        var $78=__str15+$77; //@line 191 "_json.c"
        var $79=HEAP[$78]; //@line 191 "_json.c"
        var $80=$output_addr; //@line 191 "_json.c"
        var $81=$chars_addr; //@line 191 "_json.c"
        var $82=$80+$81; //@line 191 "_json.c"
        HEAP[$82]=$79; //@line 191 "_json.c"
        var $83=$chars_addr; //@line 191 "_json.c"
        var $84=($83) + 1; //@line 191 "_json.c"
        $chars_addr=$84; //@line 191 "_json.c"
        var $85=$c_addr; //@line 192 "_json.c"
        var $86=($85); //@line 192 "_json.c"
        var $87=($86) & 15; //@line 192 "_json.c"
        var $88=__str15+$87; //@line 192 "_json.c"
        var $89=HEAP[$88]; //@line 192 "_json.c"
        var $90=$output_addr; //@line 192 "_json.c"
        var $91=$chars_addr; //@line 192 "_json.c"
        var $92=$90+$91; //@line 192 "_json.c"
        HEAP[$92]=$89; //@line 192 "_json.c"
        var $93=$chars_addr; //@line 192 "_json.c"
        var $94=($93) + 1; //@line 192 "_json.c"
        $chars_addr=$94; //@line 192 "_json.c"
        __label__ = 9; break; //@line 192 "_json.c"
      case 9: // $bb8
        var $95=$chars_addr; //@line 194 "_json.c"
        $0=$95; //@line 194 "_json.c"
        var $96=$0; //@line 194 "_json.c"
        $retval=$96; //@line 194 "_json.c"
        var $retval9=$retval; //@line 194 "_json.c"
        ;
        return $retval9; //@line 194 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ascii_escape_unicode($pystr) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr;
        var $retval;
        var $0;
        var $i;
        var $input_chars;
        var $output_size;
        var $max_output_size;
        var $chars;
        var $rval=__stackBase__;
        var $output;
        var $input_unicode;
        var $c;
        var $new_output_size;
        $pystr_addr=$pystr;
        var $1=$pystr_addr; //@line 210 "_json.c"
        var $2=$1; //@line 210 "_json.c"
        var $3=$2+8; //@line 210 "_json.c"
        var $4=HEAP[$3]; //@line 210 "_json.c"
        $input_chars=$4; //@line 210 "_json.c"
        var $5=$pystr_addr; //@line 211 "_json.c"
        var $6=$5; //@line 211 "_json.c"
        var $7=$6+12; //@line 211 "_json.c"
        var $8=HEAP[$7]; //@line 211 "_json.c"
        $input_unicode=$8; //@line 211 "_json.c"
        var $9=$input_chars; //@line 214 "_json.c"
        var $10=($9) + 26; //@line 214 "_json.c"
        $output_size=$10; //@line 214 "_json.c"
        var $11=$input_chars; //@line 215 "_json.c"
        var $12=($11) * 6; //@line 215 "_json.c"
        var $13=($12) + 2; //@line 215 "_json.c"
        $max_output_size=$13; //@line 215 "_json.c"
        var $14=$output_size; //@line 216 "_json.c"
        var $15=_PyString_FromStringAndSize(0, $14); //@line 216 "_json.c"
        HEAP[$rval]=$15; //@line 216 "_json.c"
        var $16=HEAP[$rval]; //@line 217 "_json.c"
        var $17=($16)==0; //@line 217 "_json.c"
        if ($17) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 217 "_json.c"
      case 1: // $bb
        $0=0; //@line 218 "_json.c"
        __label__ = 18; break; //@line 218 "_json.c"
      case 2: // $bb1
        var $18=HEAP[$rval]; //@line 220 "_json.c"
        var $19=$18; //@line 220 "_json.c"
        var $20=$19+20; //@line 220 "_json.c"
        var $21=$20; //@line 220 "_json.c"
        $output=$21; //@line 220 "_json.c"
        $chars=0; //@line 221 "_json.c"
        var $22=$output; //@line 222 "_json.c"
        var $23=$chars; //@line 222 "_json.c"
        var $24=$22+$23; //@line 222 "_json.c"
        HEAP[$24]=34; //@line 222 "_json.c"
        var $25=$chars; //@line 222 "_json.c"
        var $26=($25) + 1; //@line 222 "_json.c"
        $chars=$26; //@line 222 "_json.c"
        $i=0; //@line 223 "_json.c"
        __label__ = 14; break; //@line 223 "_json.c"
      case 3: // $bb2
        var $27=$input_unicode; //@line 224 "_json.c"
        var $28=$i; //@line 224 "_json.c"
        var $29=$27+2*$28; //@line 224 "_json.c"
        var $30=HEAP[$29]; //@line 224 "_json.c"
        $c=$30; //@line 224 "_json.c"
        var $31=$c; //@line 225 "_json.c"
        var $32=($31) <= 31; //@line 225 "_json.c"
        var $33=$c; //@line 225 "_json.c"
        var $34=($33) > 126; //@line 225 "_json.c"
        var $or_cond=($32) | ($34);
        var $35=$c; //@line 225 "_json.c"
        var $36=($35)==92; //@line 225 "_json.c"
        var $or_cond3=($or_cond) | ($36);
        var $37=$c; //@line 225 "_json.c"
        var $38=($37)==34; //@line 225 "_json.c"
        var $or_cond5=($or_cond3) | ($38);
        var $39=$c; //@line 229 "_json.c"
        if ($or_cond5) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 225 "_json.c"
      case 4: // $bb6
        var $40=((($39)) & 255); //@line 226 "_json.c"
        var $41=$output; //@line 226 "_json.c"
        var $42=$chars; //@line 226 "_json.c"
        var $43=$41+$42; //@line 226 "_json.c"
        HEAP[$43]=$40; //@line 226 "_json.c"
        var $44=$chars; //@line 226 "_json.c"
        var $45=($44) + 1; //@line 226 "_json.c"
        $chars=$45; //@line 226 "_json.c"
        __label__ = 6; break; //@line 226 "_json.c"
      case 5: // $bb7
        var $46=($39); //@line 229 "_json.c"
        var $47=((($46)) & 65535); //@line 229 "_json.c"
        var $48=$output; //@line 229 "_json.c"
        var $49=$chars; //@line 229 "_json.c"
        var $50=_ascii_escape_char($47, $48, $49); //@line 229 "_json.c"
        $chars=$50; //@line 229 "_json.c"
        __label__ = 6; break; //@line 229 "_json.c"
      case 6: // $bb8
        var $51=$output_size; //@line 231 "_json.c"
        var $52=$chars; //@line 231 "_json.c"
        var $53=($51) - ($52); //@line 231 "_json.c"
        var $54=($53) <= 6; //@line 231 "_json.c"
        if ($54) { __label__ = 7; break; } else { __label__ = 13; break; } //@line 231 "_json.c"
      case 7: // $bb9
        var $55=$output_size; //@line 233 "_json.c"
        var $56=($55) * 2; //@line 233 "_json.c"
        $new_output_size=$56; //@line 233 "_json.c"
        var $57=$new_output_size; //@line 235 "_json.c"
        var $58=$max_output_size; //@line 235 "_json.c"
        var $59=($57) > ($58); //@line 235 "_json.c"
        if ($59) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 235 "_json.c"
      case 8: // $bb10
        var $60=$max_output_size; //@line 236 "_json.c"
        $new_output_size=$60; //@line 236 "_json.c"
        __label__ = 9; break; //@line 236 "_json.c"
      case 9: // $bb11
        var $61=$new_output_size; //@line 239 "_json.c"
        var $62=$output_size; //@line 239 "_json.c"
        var $63=($61)!=($62); //@line 239 "_json.c"
        if ($63) { __label__ = 10; break; } else { __label__ = 13; break; } //@line 239 "_json.c"
      case 10: // $bb12
        var $64=$new_output_size; //@line 240 "_json.c"
        $output_size=$64; //@line 240 "_json.c"
        var $65=$output_size; //@line 241 "_json.c"
        var $66=__PyString_Resize($rval, $65); //@line 241 "_json.c"
        var $67=($66)==-1; //@line 241 "_json.c"
        if ($67) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 241 "_json.c"
      case 11: // $bb13
        $0=0; //@line 242 "_json.c"
        __label__ = 18; break; //@line 242 "_json.c"
      case 12: // $bb14
        var $68=HEAP[$rval]; //@line 244 "_json.c"
        var $69=$68; //@line 244 "_json.c"
        var $70=$69+20; //@line 244 "_json.c"
        var $71=$70; //@line 244 "_json.c"
        $output=$71; //@line 244 "_json.c"
        __label__ = 13; break; //@line 244 "_json.c"
      case 13: // $bb15
        var $72=$i; //@line 223 "_json.c"
        var $73=($72) + 1; //@line 223 "_json.c"
        $i=$73; //@line 223 "_json.c"
        __label__ = 14; break; //@line 223 "_json.c"
      case 14: // $bb16
        var $74=$i; //@line 223 "_json.c"
        var $75=$input_chars; //@line 223 "_json.c"
        var $76=($74) < ($75); //@line 223 "_json.c"
        if ($76) { __label__ = 3; break; } else { __label__ = 15; break; } //@line 223 "_json.c"
      case 15: // $bb17
        var $77=$output; //@line 248 "_json.c"
        var $78=$chars; //@line 248 "_json.c"
        var $79=$77+$78; //@line 248 "_json.c"
        HEAP[$79]=34; //@line 248 "_json.c"
        var $80=$chars; //@line 248 "_json.c"
        var $81=($80) + 1; //@line 248 "_json.c"
        $chars=$81; //@line 248 "_json.c"
        var $82=$chars; //@line 249 "_json.c"
        var $83=__PyString_Resize($rval, $82); //@line 249 "_json.c"
        var $84=($83)==-1; //@line 249 "_json.c"
        if ($84) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 249 "_json.c"
      case 16: // $bb18
        $0=0; //@line 250 "_json.c"
        __label__ = 18; break; //@line 250 "_json.c"
      case 17: // $bb19
        var $85=HEAP[$rval]; //@line 252 "_json.c"
        $0=$85; //@line 252 "_json.c"
        __label__ = 18; break; //@line 252 "_json.c"
      case 18: // $bb20
        var $86=$0; //@line 218 "_json.c"
        $retval=$86; //@line 218 "_json.c"
        var $retval21=$retval; //@line 218 "_json.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 218 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _ascii_escape_str($pystr) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr;
        var $retval;
        var $0;
        var $i;
        var $input_chars;
        var $output_size;
        var $chars;
        var $rval=__stackBase__;
        var $output;
        var $input_str;
        var $c;
        var $j;
        var $uni;
        var $c23;
        $pystr_addr=$pystr;
        var $1=$pystr_addr; //@line 267 "_json.c"
        var $2=$1; //@line 267 "_json.c"
        var $3=$2+8; //@line 267 "_json.c"
        var $4=HEAP[$3]; //@line 267 "_json.c"
        $input_chars=$4; //@line 267 "_json.c"
        var $5=$pystr_addr; //@line 268 "_json.c"
        var $6=$5; //@line 268 "_json.c"
        var $7=$6+20; //@line 268 "_json.c"
        var $8=$7; //@line 268 "_json.c"
        $input_str=$8; //@line 268 "_json.c"
        $i=0; //@line 271 "_json.c"
        __label__ = 12; break; //@line 271 "_json.c"
      case 1: // $bb
        var $9=$input_str; //@line 272 "_json.c"
        var $10=$i; //@line 272 "_json.c"
        var $11=$9+$10; //@line 272 "_json.c"
        var $12=HEAP[$11]; //@line 272 "_json.c"
        var $13=($12); //@line 272 "_json.c"
        $c=$13; //@line 272 "_json.c"
        var $14=$c; //@line 273 "_json.c"
        var $15=($14) <= 31; //@line 273 "_json.c"
        var $16=$c; //@line 273 "_json.c"
        var $17=($16) > 126; //@line 273 "_json.c"
        var $or_cond=($15) | ($17);
        var $18=$c; //@line 273 "_json.c"
        var $19=($18)==92; //@line 273 "_json.c"
        var $or_cond3=($or_cond) | ($19);
        var $20=$c; //@line 273 "_json.c"
        var $21=($20)==34; //@line 273 "_json.c"
        var $or_cond5=($or_cond3) | ($21);
        var $22=$i; //@line 276 "_json.c"
        if ($or_cond5) { __label__ = 2; break; } else { __label__ = 11; break; } //@line 273 "_json.c"
      case 2: // $bb4
        $j=$22; //@line 276 "_json.c"
        __label__ = 10; break; //@line 276 "_json.c"
      case 3: // $bb5
        var $23=$input_str; //@line 277 "_json.c"
        var $24=$j; //@line 277 "_json.c"
        var $25=$23+$24; //@line 277 "_json.c"
        var $26=HEAP[$25]; //@line 277 "_json.c"
        var $27=($26); //@line 277 "_json.c"
        $c=$27; //@line 277 "_json.c"
        var $28=$c; //@line 278 "_json.c"
        var $29=($28) > 127; //@line 278 "_json.c"
        if ($29) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 278 "_json.c"
      case 4: // $bb6
        var $30=$input_str; //@line 281 "_json.c"
        var $31=$input_chars; //@line 281 "_json.c"
        var $32=_PyUnicodeUCS2_DecodeUTF8($30, $31, __str1); //@line 281 "_json.c"
        $uni=$32; //@line 281 "_json.c"
        var $33=$uni; //@line 282 "_json.c"
        var $34=($33)==0; //@line 282 "_json.c"
        if ($34) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 282 "_json.c"
      case 5: // $bb7
        $0=0; //@line 283 "_json.c"
        __label__ = 33; break; //@line 283 "_json.c"
      case 6: // $bb8
        var $35=$uni; //@line 285 "_json.c"
        var $36=_ascii_escape_unicode($35); //@line 285 "_json.c"
        HEAP[$rval]=$36; //@line 285 "_json.c"
        var $37=$uni; //@line 286 "_json.c"
        var $38=$37; //@line 286 "_json.c"
        var $39=HEAP[$38]; //@line 286 "_json.c"
        var $40=($39) - 1; //@line 286 "_json.c"
        var $41=$uni; //@line 286 "_json.c"
        var $42=$41; //@line 286 "_json.c"
        HEAP[$42]=$40; //@line 286 "_json.c"
        var $43=$uni; //@line 286 "_json.c"
        var $44=$43; //@line 286 "_json.c"
        var $45=HEAP[$44]; //@line 286 "_json.c"
        var $46=($45)==0; //@line 286 "_json.c"
        if ($46) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 286 "_json.c"
      case 7: // $bb9
        var $47=$uni; //@line 286 "_json.c"
        var $48=$47+4; //@line 286 "_json.c"
        var $49=HEAP[$48]; //@line 286 "_json.c"
        var $50=$49+24; //@line 286 "_json.c"
        var $51=HEAP[$50]; //@line 286 "_json.c"
        var $52=$uni; //@line 286 "_json.c"
        FUNCTION_TABLE[$51]($52); //@line 286 "_json.c"
        __label__ = 8; break; //@line 286 "_json.c"
      case 8: // $bb10
        var $53=HEAP[$rval]; //@line 287 "_json.c"
        $0=$53; //@line 287 "_json.c"
        __label__ = 33; break; //@line 287 "_json.c"
      case 9: // $bb11
        var $54=$j; //@line 276 "_json.c"
        var $55=($54) + 1; //@line 276 "_json.c"
        $j=$55; //@line 276 "_json.c"
        __label__ = 10; break; //@line 276 "_json.c"
      case 10: // $bb12
        var $56=$j; //@line 276 "_json.c"
        var $57=$input_chars; //@line 276 "_json.c"
        var $58=($56) < ($57); //@line 276 "_json.c"
        if ($58) { __label__ = 3; break; } else { __label__ = 13; break; } //@line 276 "_json.c"
      case 11: // $bb14
        var $59=($22) + 1; //@line 271 "_json.c"
        $i=$59; //@line 271 "_json.c"
        __label__ = 12; break; //@line 271 "_json.c"
      case 12: // $bb15
        var $60=$i; //@line 271 "_json.c"
        var $61=$input_chars; //@line 271 "_json.c"
        var $62=($60) < ($61); //@line 271 "_json.c"
        if ($62) { __label__ = 1; break; } else { __label__ = 13; break; } //@line 271 "_json.c"
      case 13: // $bb16
        var $63=$i; //@line 294 "_json.c"
        var $64=$input_chars; //@line 294 "_json.c"
        var $65=($63)==($64); //@line 294 "_json.c"
        var $66=$input_chars; //@line 296 "_json.c"
        if ($65) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 294 "_json.c"
      case 14: // $bb17
        var $67=($66) + 2; //@line 296 "_json.c"
        $output_size=$67; //@line 296 "_json.c"
        __label__ = 16; break; //@line 296 "_json.c"
      case 15: // $bb18
        var $68=($66) + 26; //@line 300 "_json.c"
        $output_size=$68; //@line 300 "_json.c"
        __label__ = 16; break; //@line 300 "_json.c"
      case 16: // $bb19
        var $69=$output_size; //@line 302 "_json.c"
        var $70=_PyString_FromStringAndSize(0, $69); //@line 302 "_json.c"
        HEAP[$rval]=$70; //@line 302 "_json.c"
        var $71=($70)==0; //@line 303 "_json.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 303 "_json.c"
      case 17: // $bb20
        $0=0; //@line 304 "_json.c"
        __label__ = 33; break; //@line 304 "_json.c"
      case 18: // $bb21
        var $72=HEAP[$rval]; //@line 306 "_json.c"
        var $73=$72; //@line 306 "_json.c"
        var $74=$73+20; //@line 306 "_json.c"
        var $75=$74; //@line 306 "_json.c"
        $output=$75; //@line 306 "_json.c"
        var $76=$output; //@line 307 "_json.c"
        var $77=$76; //@line 307 "_json.c"
        HEAP[$77]=34; //@line 307 "_json.c"
        var $78=$i; //@line 310 "_json.c"
        var $79=($78) + 1; //@line 310 "_json.c"
        $chars=$79; //@line 310 "_json.c"
        var $80=$i; //@line 311 "_json.c"
        var $81=$output; //@line 311 "_json.c"
        var $82=$81+1; //@line 311 "_json.c"
        var $83=$input_str; //@line 311 "_json.c"
        _llvm_memcpy_p0i8_p0i8_i32($82, $83, $80, 1, 0); //@line 311 "_json.c"
        __label__ = 29; break; //@line 311 "_json.c"
      case 19: // $bb22
        var $84=$input_str; //@line 314 "_json.c"
        var $85=$i; //@line 314 "_json.c"
        var $86=$84+$85; //@line 314 "_json.c"
        var $87=HEAP[$86]; //@line 314 "_json.c"
        var $88=($87); //@line 314 "_json.c"
        $c23=$88; //@line 314 "_json.c"
        var $89=$c23; //@line 315 "_json.c"
        var $90=($89) <= 31; //@line 315 "_json.c"
        var $91=$c23; //@line 315 "_json.c"
        var $92=($91) > 126; //@line 315 "_json.c"
        var $or_cond7=($90) | ($92);
        var $93=$c23; //@line 315 "_json.c"
        var $94=($93)==92; //@line 315 "_json.c"
        var $or_cond9=($or_cond7) | ($94);
        var $95=$c23; //@line 315 "_json.c"
        var $96=($95)==34; //@line 315 "_json.c"
        var $or_cond11=($or_cond9) | ($96);
        var $97=$c23; //@line 319 "_json.c"
        if ($or_cond11) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 315 "_json.c"
      case 20: // $bb27
        var $98=((($97)) & 255); //@line 316 "_json.c"
        var $99=$output; //@line 316 "_json.c"
        var $100=$chars; //@line 316 "_json.c"
        var $101=$99+$100; //@line 316 "_json.c"
        HEAP[$101]=$98; //@line 316 "_json.c"
        var $102=$chars; //@line 316 "_json.c"
        var $103=($102) + 1; //@line 316 "_json.c"
        $chars=$103; //@line 316 "_json.c"
        __label__ = 22; break; //@line 316 "_json.c"
      case 21: // $bb28
        var $104=($97); //@line 319 "_json.c"
        var $105=((($104)) & 65535); //@line 319 "_json.c"
        var $106=$output; //@line 319 "_json.c"
        var $107=$chars; //@line 319 "_json.c"
        var $108=_ascii_escape_char($105, $106, $107); //@line 319 "_json.c"
        $chars=$108; //@line 319 "_json.c"
        __label__ = 22; break; //@line 319 "_json.c"
      case 22: // $bb29
        var $109=$output_size; //@line 322 "_json.c"
        var $110=$chars; //@line 322 "_json.c"
        var $111=($109) - ($110); //@line 322 "_json.c"
        var $112=($111) <= 6; //@line 322 "_json.c"
        if ($112) { __label__ = 23; break; } else { __label__ = 28; break; } //@line 322 "_json.c"
      case 23: // $bb30
        var $113=$output_size; //@line 324 "_json.c"
        var $114=($113) * 2; //@line 324 "_json.c"
        $output_size=$114; //@line 324 "_json.c"
        var $115=$input_chars; //@line 325 "_json.c"
        var $116=($115) * 6; //@line 325 "_json.c"
        var $117=($116) + 2; //@line 325 "_json.c"
        var $118=$output_size; //@line 325 "_json.c"
        var $119=($117) < ($118); //@line 325 "_json.c"
        if ($119) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 325 "_json.c"
      case 24: // $bb31
        var $120=$input_chars; //@line 326 "_json.c"
        var $121=($120) * 6; //@line 326 "_json.c"
        var $122=($121) + 2; //@line 326 "_json.c"
        $output_size=$122; //@line 326 "_json.c"
        __label__ = 25; break; //@line 326 "_json.c"
      case 25: // $bb32
        var $123=$output_size; //@line 328 "_json.c"
        var $124=__PyString_Resize($rval, $123); //@line 328 "_json.c"
        var $125=($124)==-1; //@line 328 "_json.c"
        if ($125) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 328 "_json.c"
      case 26: // $bb33
        $0=0; //@line 329 "_json.c"
        __label__ = 33; break; //@line 329 "_json.c"
      case 27: // $bb34
        var $126=HEAP[$rval]; //@line 331 "_json.c"
        var $127=$126; //@line 331 "_json.c"
        var $128=$127+20; //@line 331 "_json.c"
        var $129=$128; //@line 331 "_json.c"
        $output=$129; //@line 331 "_json.c"
        __label__ = 28; break; //@line 331 "_json.c"
      case 28: // $bb35
        var $130=$i; //@line 313 "_json.c"
        var $131=($130) + 1; //@line 313 "_json.c"
        $i=$131; //@line 313 "_json.c"
        __label__ = 29; break; //@line 313 "_json.c"
      case 29: // $bb36
        var $132=$i; //@line 313 "_json.c"
        var $133=$input_chars; //@line 313 "_json.c"
        var $134=($132) < ($133); //@line 313 "_json.c"
        if ($134) { __label__ = 19; break; } else { __label__ = 30; break; } //@line 313 "_json.c"
      case 30: // $bb37
        var $135=$output; //@line 334 "_json.c"
        var $136=$chars; //@line 334 "_json.c"
        var $137=$135+$136; //@line 334 "_json.c"
        HEAP[$137]=34; //@line 334 "_json.c"
        var $138=$chars; //@line 334 "_json.c"
        var $139=($138) + 1; //@line 334 "_json.c"
        $chars=$139; //@line 334 "_json.c"
        var $140=$chars; //@line 335 "_json.c"
        var $141=__PyString_Resize($rval, $140); //@line 335 "_json.c"
        var $142=($141)==-1; //@line 335 "_json.c"
        if ($142) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 335 "_json.c"
      case 31: // $bb38
        $0=0; //@line 336 "_json.c"
        __label__ = 33; break; //@line 336 "_json.c"
      case 32: // $bb39
        var $143=HEAP[$rval]; //@line 338 "_json.c"
        $0=$143; //@line 338 "_json.c"
        __label__ = 33; break; //@line 338 "_json.c"
      case 33: // $bb40
        var $144=$0; //@line 283 "_json.c"
        $retval=$144; //@line 283 "_json.c"
        var $retval41=$retval; //@line 283 "_json.c"
        STACKTOP = __stackBase__;
        return $retval41; //@line 283 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _raise_errmsg($msg, $s, $end) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $msg_addr;
        var $s_addr;
        var $end_addr=__stackBase__;
        var $pymsg;
        var $decoder;
        $msg_addr=$msg;
        $s_addr=$s;
        HEAP[$end_addr]=$end;
        var $0=HEAP[_errmsg_fn_8641]; //@line 348 "_json.c"
        var $1=($0)==0; //@line 348 "_json.c"
        if ($1) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 348 "_json.c"
      case 1: // $bb
        var $2=_PyImport_ImportModule(__str16); //@line 349 "_json.c"
        $decoder=$2; //@line 349 "_json.c"
        var $3=$decoder; //@line 350 "_json.c"
        var $4=($3)==0; //@line 350 "_json.c"
        if ($4) { __label__ = 8; break; } else { __label__ = 2; break; } //@line 350 "_json.c"
      case 2: // $bb1
        var $5=$decoder; //@line 352 "_json.c"
        var $6=_PyObject_GetAttrString($5, __str17); //@line 352 "_json.c"
        HEAP[_errmsg_fn_8641]=$6; //@line 352 "_json.c"
        var $7=$decoder; //@line 353 "_json.c"
        var $8=$7; //@line 353 "_json.c"
        var $9=HEAP[$8]; //@line 353 "_json.c"
        var $10=($9) - 1; //@line 353 "_json.c"
        var $11=$decoder; //@line 353 "_json.c"
        var $12=$11; //@line 353 "_json.c"
        HEAP[$12]=$10; //@line 353 "_json.c"
        var $13=$decoder; //@line 353 "_json.c"
        var $14=$13; //@line 353 "_json.c"
        var $15=HEAP[$14]; //@line 353 "_json.c"
        var $16=($15)==0; //@line 353 "_json.c"
        if ($16) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 353 "_json.c"
      case 3: // $bb2
        var $17=$decoder; //@line 353 "_json.c"
        var $18=$17+4; //@line 353 "_json.c"
        var $19=HEAP[$18]; //@line 353 "_json.c"
        var $20=$19+24; //@line 353 "_json.c"
        var $21=HEAP[$20]; //@line 353 "_json.c"
        var $22=$decoder; //@line 353 "_json.c"
        FUNCTION_TABLE[$21]($22); //@line 353 "_json.c"
        __label__ = 4; break; //@line 353 "_json.c"
      case 4: // $bb3
        var $23=HEAP[_errmsg_fn_8641]; //@line 354 "_json.c"
        var $24=($23)==0; //@line 354 "_json.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 5; break; } //@line 354 "_json.c"
      case 5: // $bb4
        var $25=HEAP[_errmsg_fn_8641]; //@line 357 "_json.c"
        var $26=$msg_addr; //@line 357 "_json.c"
        var $27=$s_addr; //@line 357 "_json.c"
        var $28=_PyObject_CallFunction($25, __str18, allocate([$26,0,0,0,$27,0,0,0,(FUNCTION_TABLE_OFFSET + 2),0,0,0,$end_addr,0,0,0], ["i8*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (i32*)*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 357 "_json.c"
        $pymsg=$28; //@line 357 "_json.c"
        var $29=($28)!=0; //@line 358 "_json.c"
        if ($29) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 358 "_json.c"
      case 6: // $bb5
        var $30=HEAP[_PyExc_ValueError]; //@line 359 "_json.c"
        var $31=$pymsg; //@line 359 "_json.c"
        _PyErr_SetObject($30, $31); //@line 359 "_json.c"
        var $32=$pymsg; //@line 360 "_json.c"
        var $33=$32; //@line 360 "_json.c"
        var $34=HEAP[$33]; //@line 360 "_json.c"
        var $35=($34) - 1; //@line 360 "_json.c"
        var $36=$pymsg; //@line 360 "_json.c"
        var $37=$36; //@line 360 "_json.c"
        HEAP[$37]=$35; //@line 360 "_json.c"
        var $38=$pymsg; //@line 360 "_json.c"
        var $39=$38; //@line 360 "_json.c"
        var $40=HEAP[$39]; //@line 360 "_json.c"
        var $41=($40)==0; //@line 360 "_json.c"
        if ($41) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 360 "_json.c"
      case 7: // $bb6
        var $42=$pymsg; //@line 360 "_json.c"
        var $43=$42+4; //@line 360 "_json.c"
        var $44=HEAP[$43]; //@line 360 "_json.c"
        var $45=$44+24; //@line 360 "_json.c"
        var $46=HEAP[$45]; //@line 360 "_json.c"
        var $47=$pymsg; //@line 360 "_json.c"
        FUNCTION_TABLE[$46]($47); //@line 360 "_json.c"
        __label__ = 8; break; //@line 360 "_json.c"
      case 8: // $return
        STACKTOP = __stackBase__;
        return; //@line 351 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _join_list_unicode($lst) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lst_addr;
        var $retval;
        var $0;
        var $ustr;
        $lst_addr=$lst;
        var $1=HEAP[_joinfn_8675]; //@line 369 "_json.c"
        var $2=($1)==0; //@line 369 "_json.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 369 "_json.c"
      case 1: // $bb
        var $3=_PyUnicodeUCS2_FromUnicode(0, 0); //@line 370 "_json.c"
        $ustr=$3; //@line 370 "_json.c"
        var $4=$ustr; //@line 371 "_json.c"
        var $5=($4)==0; //@line 371 "_json.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 371 "_json.c"
      case 2: // $bb1
        $0=0; //@line 372 "_json.c"
        __label__ = 8; break; //@line 372 "_json.c"
      case 3: // $bb2
        var $6=$ustr; //@line 374 "_json.c"
        var $7=_PyObject_GetAttrString($6, __str19); //@line 374 "_json.c"
        HEAP[_joinfn_8675]=$7; //@line 374 "_json.c"
        var $8=$ustr; //@line 375 "_json.c"
        var $9=$8; //@line 375 "_json.c"
        var $10=HEAP[$9]; //@line 375 "_json.c"
        var $11=($10) - 1; //@line 375 "_json.c"
        var $12=$ustr; //@line 375 "_json.c"
        var $13=$12; //@line 375 "_json.c"
        HEAP[$13]=$11; //@line 375 "_json.c"
        var $14=$ustr; //@line 375 "_json.c"
        var $15=$14; //@line 375 "_json.c"
        var $16=HEAP[$15]; //@line 375 "_json.c"
        var $17=($16)==0; //@line 375 "_json.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 375 "_json.c"
      case 4: // $bb3
        var $18=$ustr; //@line 375 "_json.c"
        var $19=$18+4; //@line 375 "_json.c"
        var $20=HEAP[$19]; //@line 375 "_json.c"
        var $21=$20+24; //@line 375 "_json.c"
        var $22=HEAP[$21]; //@line 375 "_json.c"
        var $23=$ustr; //@line 375 "_json.c"
        FUNCTION_TABLE[$22]($23); //@line 375 "_json.c"
        __label__ = 5; break; //@line 375 "_json.c"
      case 5: // $bb4
        var $24=HEAP[_joinfn_8675]; //@line 376 "_json.c"
        var $25=($24)==0; //@line 376 "_json.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 376 "_json.c"
      case 6: // $bb5
        $0=0; //@line 377 "_json.c"
        __label__ = 8; break; //@line 377 "_json.c"
      case 7: // $bb6
        var $26=HEAP[_joinfn_8675]; //@line 379 "_json.c"
        var $27=$lst_addr; //@line 379 "_json.c"
        var $28=_PyObject_CallFunctionObjArgs($26, allocate([$27,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 379 "_json.c"
        $0=$28; //@line 379 "_json.c"
        __label__ = 8; break; //@line 379 "_json.c"
      case 8: // $bb7
        var $29=$0; //@line 372 "_json.c"
        $retval=$29; //@line 372 "_json.c"
        var $retval8=$retval; //@line 372 "_json.c"
        ;
        return $retval8; //@line 372 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __build_rval_index_tuple($rval, $idx) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $rval_addr;
        var $idx_addr;
        var $retval;
        var $0;
        var $tpl;
        var $pyidx;
        $rval_addr=$rval;
        $idx_addr=$idx;
        var $1=$rval_addr; //@line 390 "_json.c"
        var $2=($1)==0; //@line 390 "_json.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 390 "_json.c"
      case 1: // $bb
        $0=0; //@line 391 "_json.c"
        __label__ = 13; break; //@line 391 "_json.c"
      case 2: // $bb1
        var $3=$idx_addr; //@line 393 "_json.c"
        var $4=_PyInt_FromSsize_t($3); //@line 393 "_json.c"
        $pyidx=$4; //@line 393 "_json.c"
        var $5=$pyidx; //@line 394 "_json.c"
        var $6=($5)==0; //@line 394 "_json.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 394 "_json.c"
      case 3: // $bb2
        var $7=$rval_addr; //@line 395 "_json.c"
        var $8=$7; //@line 395 "_json.c"
        var $9=HEAP[$8]; //@line 395 "_json.c"
        var $10=($9) - 1; //@line 395 "_json.c"
        var $11=$rval_addr; //@line 395 "_json.c"
        var $12=$11; //@line 395 "_json.c"
        HEAP[$12]=$10; //@line 395 "_json.c"
        var $13=$rval_addr; //@line 395 "_json.c"
        var $14=$13; //@line 395 "_json.c"
        var $15=HEAP[$14]; //@line 395 "_json.c"
        var $16=($15)==0; //@line 395 "_json.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 395 "_json.c"
      case 4: // $bb3
        var $17=$rval_addr; //@line 395 "_json.c"
        var $18=$17+4; //@line 395 "_json.c"
        var $19=HEAP[$18]; //@line 395 "_json.c"
        var $20=$19+24; //@line 395 "_json.c"
        var $21=HEAP[$20]; //@line 395 "_json.c"
        var $22=$rval_addr; //@line 395 "_json.c"
        FUNCTION_TABLE[$21]($22); //@line 395 "_json.c"
        __label__ = 5; break; //@line 395 "_json.c"
      case 5: // $bb4
        $0=0; //@line 396 "_json.c"
        __label__ = 13; break; //@line 396 "_json.c"
      case 6: // $bb5
        var $23=_PyTuple_New(2); //@line 398 "_json.c"
        $tpl=$23; //@line 398 "_json.c"
        var $24=$tpl; //@line 399 "_json.c"
        var $25=($24)==0; //@line 399 "_json.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 12; break; } //@line 399 "_json.c"
      case 7: // $bb6
        var $26=$pyidx; //@line 400 "_json.c"
        var $27=$26; //@line 400 "_json.c"
        var $28=HEAP[$27]; //@line 400 "_json.c"
        var $29=($28) - 1; //@line 400 "_json.c"
        var $30=$pyidx; //@line 400 "_json.c"
        var $31=$30; //@line 400 "_json.c"
        HEAP[$31]=$29; //@line 400 "_json.c"
        var $32=$pyidx; //@line 400 "_json.c"
        var $33=$32; //@line 400 "_json.c"
        var $34=HEAP[$33]; //@line 400 "_json.c"
        var $35=($34)==0; //@line 400 "_json.c"
        if ($35) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 400 "_json.c"
      case 8: // $bb7
        var $36=$pyidx; //@line 400 "_json.c"
        var $37=$36+4; //@line 400 "_json.c"
        var $38=HEAP[$37]; //@line 400 "_json.c"
        var $39=$38+24; //@line 400 "_json.c"
        var $40=HEAP[$39]; //@line 400 "_json.c"
        var $41=$pyidx; //@line 400 "_json.c"
        FUNCTION_TABLE[$40]($41); //@line 400 "_json.c"
        __label__ = 9; break; //@line 400 "_json.c"
      case 9: // $bb8
        var $42=$rval_addr; //@line 401 "_json.c"
        var $43=$42; //@line 401 "_json.c"
        var $44=HEAP[$43]; //@line 401 "_json.c"
        var $45=($44) - 1; //@line 401 "_json.c"
        var $46=$rval_addr; //@line 401 "_json.c"
        var $47=$46; //@line 401 "_json.c"
        HEAP[$47]=$45; //@line 401 "_json.c"
        var $48=$rval_addr; //@line 401 "_json.c"
        var $49=$48; //@line 401 "_json.c"
        var $50=HEAP[$49]; //@line 401 "_json.c"
        var $51=($50)==0; //@line 401 "_json.c"
        if ($51) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 401 "_json.c"
      case 10: // $bb9
        var $52=$rval_addr; //@line 401 "_json.c"
        var $53=$52+4; //@line 401 "_json.c"
        var $54=HEAP[$53]; //@line 401 "_json.c"
        var $55=$54+24; //@line 401 "_json.c"
        var $56=HEAP[$55]; //@line 401 "_json.c"
        var $57=$rval_addr; //@line 401 "_json.c"
        FUNCTION_TABLE[$56]($57); //@line 401 "_json.c"
        __label__ = 11; break; //@line 401 "_json.c"
      case 11: // $bb10
        $0=0; //@line 402 "_json.c"
        __label__ = 13; break; //@line 402 "_json.c"
      case 12: // $bb11
        var $58=$tpl; //@line 404 "_json.c"
        var $59=$58; //@line 404 "_json.c"
        var $60=$59+12; //@line 404 "_json.c"
        var $61=$60; //@line 404 "_json.c"
        var $62=$rval_addr; //@line 404 "_json.c"
        HEAP[$61]=$62; //@line 404 "_json.c"
        var $63=$tpl; //@line 405 "_json.c"
        var $64=$63; //@line 405 "_json.c"
        var $65=$64+12; //@line 405 "_json.c"
        var $66=$65+4; //@line 405 "_json.c"
        var $67=$pyidx; //@line 405 "_json.c"
        HEAP[$66]=$67; //@line 405 "_json.c"
        var $68=$tpl; //@line 406 "_json.c"
        $0=$68; //@line 406 "_json.c"
        __label__ = 13; break; //@line 406 "_json.c"
      case 13: // $bb12
        var $69=$0; //@line 391 "_json.c"
        $retval=$69; //@line 391 "_json.c"
        var $retval13=$retval; //@line 391 "_json.c"
        ;
        return $retval13; //@line 391 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanstring_str($pystr, $end, $encoding, $strict, $next_end_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 2; _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr;
        var $end_addr;
        var $encoding_addr;
        var $strict_addr;
        var $next_end_ptr_addr;
        var $retval;
        var $0;
        var $rval;
        var $len;
        var $begin;
        var $next;
        var $buf;
        var $chunks;
        var $c=__stackBase__;
        var $chunk;
        var $strchunk;
        var $digit;
        var $_py_tmp;
        $pystr_addr=$pystr;
        $end_addr=$end;
        $encoding_addr=$encoding;
        $strict_addr=$strict;
        $next_end_ptr_addr=$next_end_ptr;
        var $1=$pystr_addr; //@line 422 "_json.c"
        var $2=$1; //@line 422 "_json.c"
        var $3=$2+8; //@line 422 "_json.c"
        var $4=HEAP[$3]; //@line 422 "_json.c"
        $len=$4; //@line 422 "_json.c"
        var $5=$end_addr; //@line 423 "_json.c"
        var $6=($5) - 1; //@line 423 "_json.c"
        $begin=$6; //@line 423 "_json.c"
        var $7=$pystr_addr; //@line 425 "_json.c"
        var $8=$7; //@line 425 "_json.c"
        var $9=$8+20; //@line 425 "_json.c"
        var $10=$9; //@line 425 "_json.c"
        $buf=$10; //@line 425 "_json.c"
        var $11=_PyList_New(0); //@line 426 "_json.c"
        $chunks=$11; //@line 426 "_json.c"
        var $12=$chunks; //@line 427 "_json.c"
        var $13=($12)==0; //@line 427 "_json.c"
        if ($13) { __label__ = 56; break; } else { __label__ = 1; break; } //@line 427 "_json.c"
      case 1: // $bb
        var $14=$end_addr; //@line 430 "_json.c"
        var $15=($14) < 0; //@line 430 "_json.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 430 "_json.c"
      case 2: // $bb1
        var $16=$len; //@line 430 "_json.c"
        var $17=$end_addr; //@line 430 "_json.c"
        var $18=($16) <= ($17); //@line 430 "_json.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 430 "_json.c"
      case 3: // $bb2
        var $19=HEAP[_PyExc_ValueError]; //@line 431 "_json.c"
        _PyErr_SetString($19, __str20); //@line 431 "_json.c"
        __label__ = 56; break; //@line 431 "_json.c"
      case 4: // $bb3
        HEAP[$c]=0; //@line 436 "_json.c"
        $chunk=0; //@line 437 "_json.c"
        var $20=$end_addr; //@line 438 "_json.c"
        $next=$20; //@line 438 "_json.c"
        __label__ = 10; break; //@line 438 "_json.c"
      case 5: // $bb4
        var $21=$buf; //@line 439 "_json.c"
        var $22=$next; //@line 439 "_json.c"
        var $23=$21+$22; //@line 439 "_json.c"
        var $24=HEAP[$23]; //@line 439 "_json.c"
        var $25=($24); //@line 439 "_json.c"
        HEAP[$c]=$25; //@line 439 "_json.c"
        var $26=HEAP[$c]; //@line 440 "_json.c"
        var $27=($26)==34; //@line 440 "_json.c"
        var $28=HEAP[$c]; //@line 440 "_json.c"
        var $29=($28)==92; //@line 440 "_json.c"
        var $or_cond=($27) | ($29);
        if ($or_cond) { __label__ = 11; break; } else { __label__ = 6; break; } //@line 440 "_json.c"
      case 6: // $bb6
        var $30=$strict_addr; //@line 443 "_json.c"
        var $31=($30)!=0; //@line 443 "_json.c"
        if ($31) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 443 "_json.c"
      case 7: // $bb7
        var $32=HEAP[$c]; //@line 443 "_json.c"
        var $33=($32) <= 31; //@line 443 "_json.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 443 "_json.c"
      case 8: // $bb8
        var $34=$pystr_addr; //@line 444 "_json.c"
        var $35=$next; //@line 444 "_json.c"
        _raise_errmsg(__str21, $34, $35); //@line 444 "_json.c"
        __label__ = 56; break; //@line 444 "_json.c"
      case 9: // $bb9
        var $36=$next; //@line 438 "_json.c"
        var $37=($36) + 1; //@line 438 "_json.c"
        $next=$37; //@line 438 "_json.c"
        __label__ = 10; break; //@line 438 "_json.c"
      case 10: // $bb10
        var $38=$next; //@line 438 "_json.c"
        var $39=$len; //@line 438 "_json.c"
        var $40=($38) < ($39); //@line 438 "_json.c"
        if ($40) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 438 "_json.c"
      case 11: // $bb11
        var $41=HEAP[$c]; //@line 448 "_json.c"
        var $42=($41)!=34; //@line 448 "_json.c"
        var $43=HEAP[$c]; //@line 448 "_json.c"
        var $44=($43)!=92; //@line 448 "_json.c"
        var $or_cond3=($42) & ($44);
        if ($or_cond3) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 448 "_json.c"
      case 12: // $bb13
        var $45=$pystr_addr; //@line 449 "_json.c"
        var $46=$begin; //@line 449 "_json.c"
        _raise_errmsg(__str22, $45, $46); //@line 449 "_json.c"
        __label__ = 56; break; //@line 449 "_json.c"
      case 13: // $bb14
        var $47=$next; //@line 453 "_json.c"
        var $48=$end_addr; //@line 453 "_json.c"
        var $49=($47)!=($48); //@line 453 "_json.c"
        if ($49) { __label__ = 14; break; } else { __label__ = 23; break; } //@line 453 "_json.c"
      case 14: // $bb15
        var $50=$next; //@line 454 "_json.c"
        var $51=$end_addr; //@line 454 "_json.c"
        var $52=($50) - ($51); //@line 454 "_json.c"
        var $53=$buf; //@line 454 "_json.c"
        var $54=$end_addr; //@line 454 "_json.c"
        var $55=$53+$54; //@line 454 "_json.c"
        var $56=_PyString_FromStringAndSize($55, $52); //@line 454 "_json.c"
        $strchunk=$56; //@line 454 "_json.c"
        var $57=$strchunk; //@line 455 "_json.c"
        var $58=($57)==0; //@line 455 "_json.c"
        if ($58) { __label__ = 56; break; } else { __label__ = 15; break; } //@line 455 "_json.c"
      case 15: // $bb16
        var $59=$strchunk; //@line 458 "_json.c"
        var $60=$encoding_addr; //@line 458 "_json.c"
        var $61=_PyUnicodeUCS2_FromEncodedObject($59, $60, 0); //@line 458 "_json.c"
        $chunk=$61; //@line 458 "_json.c"
        var $62=$strchunk; //@line 459 "_json.c"
        var $63=$62; //@line 459 "_json.c"
        var $64=HEAP[$63]; //@line 459 "_json.c"
        var $65=($64) - 1; //@line 459 "_json.c"
        var $66=$strchunk; //@line 459 "_json.c"
        var $67=$66; //@line 459 "_json.c"
        HEAP[$67]=$65; //@line 459 "_json.c"
        var $68=$strchunk; //@line 459 "_json.c"
        var $69=$68; //@line 459 "_json.c"
        var $70=HEAP[$69]; //@line 459 "_json.c"
        var $71=($70)==0; //@line 459 "_json.c"
        if ($71) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 459 "_json.c"
      case 16: // $bb17
        var $72=$strchunk; //@line 459 "_json.c"
        var $73=$72+4; //@line 459 "_json.c"
        var $74=HEAP[$73]; //@line 459 "_json.c"
        var $75=$74+24; //@line 459 "_json.c"
        var $76=HEAP[$75]; //@line 459 "_json.c"
        var $77=$strchunk; //@line 459 "_json.c"
        FUNCTION_TABLE[$76]($77); //@line 459 "_json.c"
        __label__ = 17; break; //@line 459 "_json.c"
      case 17: // $bb18
        var $78=$chunk; //@line 460 "_json.c"
        var $79=($78)==0; //@line 460 "_json.c"
        if ($79) { __label__ = 56; break; } else { __label__ = 18; break; } //@line 460 "_json.c"
      case 18: // $bb19
        var $80=$chunks; //@line 463 "_json.c"
        var $81=$chunk; //@line 463 "_json.c"
        var $82=_PyList_Append($80, $81); //@line 463 "_json.c"
        var $83=($82)!=0; //@line 463 "_json.c"
        var $84=$chunk; //@line 464 "_json.c"
        var $85=$84; //@line 464 "_json.c"
        var $86=HEAP[$85]; //@line 464 "_json.c"
        var $87=($86) - 1; //@line 464 "_json.c"
        var $88=$chunk; //@line 464 "_json.c"
        var $89=$88; //@line 464 "_json.c"
        HEAP[$89]=$87; //@line 464 "_json.c"
        var $90=$chunk; //@line 464 "_json.c"
        var $91=$90; //@line 464 "_json.c"
        var $92=HEAP[$91]; //@line 464 "_json.c"
        var $93=($92)==0; //@line 464 "_json.c"
        if ($83) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 463 "_json.c"
      case 19: // $bb20
        if ($93) { __label__ = 20; break; } else { __label__ = 56; break; } //@line 464 "_json.c"
      case 20: // $bb21
        var $94=$chunk; //@line 464 "_json.c"
        var $95=$94+4; //@line 464 "_json.c"
        var $96=HEAP[$95]; //@line 464 "_json.c"
        var $97=$96+24; //@line 464 "_json.c"
        var $98=HEAP[$97]; //@line 464 "_json.c"
        var $99=$chunk; //@line 464 "_json.c"
        FUNCTION_TABLE[$98]($99); //@line 464 "_json.c"
        __label__ = 56; break; //@line 464 "_json.c"
      case 21: // $bb23
        if ($93) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 467 "_json.c"
      case 22: // $bb24
        var $100=$chunk; //@line 467 "_json.c"
        var $101=$100+4; //@line 467 "_json.c"
        var $102=HEAP[$101]; //@line 467 "_json.c"
        var $103=$102+24; //@line 467 "_json.c"
        var $104=HEAP[$103]; //@line 467 "_json.c"
        var $105=$chunk; //@line 467 "_json.c"
        FUNCTION_TABLE[$104]($105); //@line 467 "_json.c"
        __label__ = 23; break; //@line 467 "_json.c"
      case 23: // $bb25
        var $106=$next; //@line 469 "_json.c"
        var $107=($106) + 1; //@line 469 "_json.c"
        $next=$107; //@line 469 "_json.c"
        var $108=HEAP[$c]; //@line 470 "_json.c"
        var $109=($108)==34; //@line 470 "_json.c"
        var $110=$next; //@line 471 "_json.c"
        if ($109) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 470 "_json.c"
      case 24: // $bb26
        $end_addr=$110; //@line 471 "_json.c"
        var $111=$chunks; //@line 580 "_json.c"
        var $112=_join_list_unicode($111); //@line 580 "_json.c"
        $rval=$112; //@line 580 "_json.c"
        var $113=$rval; //@line 581 "_json.c"
        var $114=($113)==0; //@line 581 "_json.c"
        if ($114) { __label__ = 56; break; } else { __label__ = 52; break; } //@line 581 "_json.c"
      case 25: // $bb27
        var $115=$len; //@line 474 "_json.c"
        var $116=($110)==($115); //@line 474 "_json.c"
        if ($116) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 474 "_json.c"
      case 26: // $bb28
        var $117=$pystr_addr; //@line 475 "_json.c"
        var $118=$begin; //@line 475 "_json.c"
        _raise_errmsg(__str22, $117, $118); //@line 475 "_json.c"
        __label__ = 56; break; //@line 475 "_json.c"
      case 27: // $bb29
        var $119=$buf; //@line 478 "_json.c"
        var $120=$next; //@line 478 "_json.c"
        var $121=$119+$120; //@line 478 "_json.c"
        var $122=HEAP[$121]; //@line 478 "_json.c"
        var $123=($122); //@line 478 "_json.c"
        HEAP[$c]=$123; //@line 478 "_json.c"
        var $124=HEAP[$c]; //@line 479 "_json.c"
        var $125=($124)!=117; //@line 479 "_json.c"
        if ($125) { __label__ = 28; break; } else { __label__ = 37; break; } //@line 479 "_json.c"
      case 28: // $bb30
        var $126=$next; //@line 481 "_json.c"
        var $127=($126) + 1; //@line 481 "_json.c"
        $end_addr=$127; //@line 481 "_json.c"
        var $128=HEAP[$c]; //@line 482 "_json.c"
        var $129=($128); //@line 482 "_json.c"
        if ($129 == 34) {
          __label__ = 35; break;
        }
        else if ($129 == 47) {
          __label__ = 35; break;
        }
        else if ($129 == 92) {
          __label__ = 35; break;
        }
        else if ($129 == 98) {
          __label__ = 29; break;
        }
        else if ($129 == 102) {
          __label__ = 30; break;
        }
        else if ($129 == 110) {
          __label__ = 31; break;
        }
        else if ($129 == 114) {
          __label__ = 32; break;
        }
        else if ($129 == 116) {
          __label__ = 33; break;
        }
        else {
        __label__ = 34; break;
        }
        
      case 29: // $bb34
        HEAP[$c]=8; //@line 486 "_json.c"
        __label__ = 46; break; //@line 486 "_json.c"
      case 30: // $bb35
        HEAP[$c]=12; //@line 487 "_json.c"
        __label__ = 46; break; //@line 487 "_json.c"
      case 31: // $bb36
        HEAP[$c]=10; //@line 488 "_json.c"
        __label__ = 46; break; //@line 488 "_json.c"
      case 32: // $bb37
        HEAP[$c]=13; //@line 489 "_json.c"
        __label__ = 46; break; //@line 489 "_json.c"
      case 33: // $bb38
        HEAP[$c]=9; //@line 490 "_json.c"
        __label__ = 46; break; //@line 490 "_json.c"
      case 34: // $bb40_thread4
        HEAP[$c]=0; //@line 491 "_json.c"
        __label__ = 36; break;
      case 35: // $bb40
        var $130=($128)==0; //@line 493 "_json.c"
        if ($130) { __label__ = 36; break; } else { __label__ = 46; break; } //@line 493 "_json.c"
      case 36: // $bb41
        var $131=$end_addr; //@line 494 "_json.c"
        var $132=($131) - 2; //@line 494 "_json.c"
        var $133=$pystr_addr; //@line 494 "_json.c"
        _raise_errmsg(__str23, $133, $132); //@line 494 "_json.c"
        __label__ = 56; break; //@line 494 "_json.c"
      case 37: // $bb43
        HEAP[$c]=0; //@line 499 "_json.c"
        var $134=$next; //@line 500 "_json.c"
        var $135=($134) + 1; //@line 500 "_json.c"
        $next=$135; //@line 500 "_json.c"
        var $136=$next; //@line 501 "_json.c"
        var $137=($136) + 4; //@line 501 "_json.c"
        $end_addr=$137; //@line 501 "_json.c"
        var $138=$end_addr; //@line 502 "_json.c"
        var $139=$len; //@line 502 "_json.c"
        var $140=($138) >= ($139); //@line 502 "_json.c"
        if ($140) { __label__ = 38; break; } else { __label__ = 45; break; } //@line 502 "_json.c"
      case 38: // $bb44
        var $141=$next; //@line 503 "_json.c"
        var $142=($141) - 1; //@line 503 "_json.c"
        var $143=$pystr_addr; //@line 503 "_json.c"
        _raise_errmsg(__str24, $143, $142); //@line 503 "_json.c"
        __label__ = 56; break; //@line 503 "_json.c"
      case 39: // $bb46
        var $144=$buf; //@line 508 "_json.c"
        var $145=$next; //@line 508 "_json.c"
        var $146=$144+$145; //@line 508 "_json.c"
        var $147=HEAP[$146]; //@line 508 "_json.c"
        var $148=($147); //@line 508 "_json.c"
        $digit=$148; //@line 508 "_json.c"
        var $149=HEAP[$c]; //@line 509 "_json.c"
        var $150=($149) << 4; //@line 509 "_json.c"
        HEAP[$c]=$150; //@line 509 "_json.c"
        var $151=$digit; //@line 510 "_json.c"
        var $152=($151); //@line 510 "_json.c"
        if ($152 == 48) {
          __label__ = 40; break;
        }
        else if ($152 == 49) {
          __label__ = 40; break;
        }
        else if ($152 == 50) {
          __label__ = 40; break;
        }
        else if ($152 == 51) {
          __label__ = 40; break;
        }
        else if ($152 == 52) {
          __label__ = 40; break;
        }
        else if ($152 == 53) {
          __label__ = 40; break;
        }
        else if ($152 == 54) {
          __label__ = 40; break;
        }
        else if ($152 == 55) {
          __label__ = 40; break;
        }
        else if ($152 == 56) {
          __label__ = 40; break;
        }
        else if ($152 == 57) {
          __label__ = 40; break;
        }
        else if ($152 == 65) {
          __label__ = 42; break;
        }
        else if ($152 == 66) {
          __label__ = 42; break;
        }
        else if ($152 == 67) {
          __label__ = 42; break;
        }
        else if ($152 == 68) {
          __label__ = 42; break;
        }
        else if ($152 == 69) {
          __label__ = 42; break;
        }
        else if ($152 == 70) {
          __label__ = 42; break;
        }
        else if ($152 == 97) {
          __label__ = 41; break;
        }
        else if ($152 == 98) {
          __label__ = 41; break;
        }
        else if ($152 == 99) {
          __label__ = 41; break;
        }
        else if ($152 == 100) {
          __label__ = 41; break;
        }
        else if ($152 == 101) {
          __label__ = 41; break;
        }
        else if ($152 == 102) {
          __label__ = 41; break;
        }
        else {
        __label__ = 43; break;
        }
        
      case 40: // $bb47
        var $153=$digit; //@line 513 "_json.c"
        var $154=($153) - 48; //@line 513 "_json.c"
        var $155=HEAP[$c]; //@line 513 "_json.c"
        var $156=($154) | ($155); //@line 513 "_json.c"
        HEAP[$c]=$156; //@line 513 "_json.c"
        __label__ = 44; break; //@line 513 "_json.c"
      case 41: // $bb48
        var $157=$digit; //@line 516 "_json.c"
        var $158=($157) - 87; //@line 516 "_json.c"
        var $159=HEAP[$c]; //@line 516 "_json.c"
        var $160=($158) | ($159); //@line 516 "_json.c"
        HEAP[$c]=$160; //@line 516 "_json.c"
        __label__ = 44; break; //@line 516 "_json.c"
      case 42: // $bb49
        var $161=$digit; //@line 519 "_json.c"
        var $162=($161) - 55; //@line 519 "_json.c"
        var $163=HEAP[$c]; //@line 519 "_json.c"
        var $164=($162) | ($163); //@line 519 "_json.c"
        HEAP[$c]=$164; //@line 519 "_json.c"
        __label__ = 44; break; //@line 519 "_json.c"
      case 43: // $bb50
        var $165=$end_addr; //@line 521 "_json.c"
        var $166=($165) - 5; //@line 521 "_json.c"
        var $167=$pystr_addr; //@line 521 "_json.c"
        _raise_errmsg(__str24, $167, $166); //@line 521 "_json.c"
        __label__ = 56; break; //@line 521 "_json.c"
      case 44: // $bb51
        var $168=$next; //@line 507 "_json.c"
        var $169=($168) + 1; //@line 507 "_json.c"
        $next=$169; //@line 507 "_json.c"
        __label__ = 45; break; //@line 507 "_json.c"
      case 45: // $bb52
        var $170=$next; //@line 507 "_json.c"
        var $171=$end_addr; //@line 507 "_json.c"
        var $172=($170) < ($171); //@line 507 "_json.c"
        if ($172) { __label__ = 39; break; } else { __label__ = 46; break; } //@line 507 "_json.c"
      case 46: // $bb53
        var $173=_PyUnicodeUCS2_FromUnicode($c, 1); //@line 569 "_json.c"
        $chunk=$173; //@line 569 "_json.c"
        var $174=($173)==0; //@line 570 "_json.c"
        if ($174) { __label__ = 56; break; } else { __label__ = 47; break; } //@line 570 "_json.c"
      case 47: // $bb54
        var $175=$chunks; //@line 573 "_json.c"
        var $176=$chunk; //@line 573 "_json.c"
        var $177=_PyList_Append($175, $176); //@line 573 "_json.c"
        var $178=($177)!=0; //@line 573 "_json.c"
        var $179=$chunk; //@line 574 "_json.c"
        var $180=$179; //@line 574 "_json.c"
        var $181=HEAP[$180]; //@line 574 "_json.c"
        var $182=($181) - 1; //@line 574 "_json.c"
        var $183=$chunk; //@line 574 "_json.c"
        var $184=$183; //@line 574 "_json.c"
        HEAP[$184]=$182; //@line 574 "_json.c"
        var $185=$chunk; //@line 574 "_json.c"
        var $186=$185; //@line 574 "_json.c"
        var $187=HEAP[$186]; //@line 574 "_json.c"
        var $188=($187)==0; //@line 574 "_json.c"
        if ($178) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 573 "_json.c"
      case 48: // $bb55
        if ($188) { __label__ = 49; break; } else { __label__ = 56; break; } //@line 574 "_json.c"
      case 49: // $bb56
        var $189=$chunk; //@line 574 "_json.c"
        var $190=$189+4; //@line 574 "_json.c"
        var $191=HEAP[$190]; //@line 574 "_json.c"
        var $192=$191+24; //@line 574 "_json.c"
        var $193=HEAP[$192]; //@line 574 "_json.c"
        var $194=$chunk; //@line 574 "_json.c"
        FUNCTION_TABLE[$193]($194); //@line 574 "_json.c"
        __label__ = 56; break; //@line 574 "_json.c"
      case 50: // $bb58
        if ($188) { __label__ = 51; break; } else { __label__ = 4; break; } //@line 577 "_json.c"
      case 51: // $bb59
        var $195=$chunk; //@line 577 "_json.c"
        var $196=$195+4; //@line 577 "_json.c"
        var $197=HEAP[$196]; //@line 577 "_json.c"
        var $198=$197+24; //@line 577 "_json.c"
        var $199=HEAP[$198]; //@line 577 "_json.c"
        var $200=$chunk; //@line 577 "_json.c"
        FUNCTION_TABLE[$199]($200); //@line 577 "_json.c"
        __label__ = 4; break; //@line 577 "_json.c"
      case 52: // $bb61
        var $201=$chunks; //@line 584 "_json.c"
        var $202=($201)!=0; //@line 584 "_json.c"
        if ($202) { __label__ = 53; break; } else { __label__ = 55; break; } //@line 584 "_json.c"
      case 53: // $bb62
        var $203=$chunks; //@line 584 "_json.c"
        $_py_tmp=$203; //@line 584 "_json.c"
        $chunks=0; //@line 584 "_json.c"
        var $204=$_py_tmp; //@line 584 "_json.c"
        var $205=$204; //@line 584 "_json.c"
        var $206=HEAP[$205]; //@line 584 "_json.c"
        var $207=($206) - 1; //@line 584 "_json.c"
        var $208=$_py_tmp; //@line 584 "_json.c"
        var $209=$208; //@line 584 "_json.c"
        HEAP[$209]=$207; //@line 584 "_json.c"
        var $210=$_py_tmp; //@line 584 "_json.c"
        var $211=$210; //@line 584 "_json.c"
        var $212=HEAP[$211]; //@line 584 "_json.c"
        var $213=($212)==0; //@line 584 "_json.c"
        if ($213) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 584 "_json.c"
      case 54: // $bb63
        var $214=$_py_tmp; //@line 584 "_json.c"
        var $215=$214+4; //@line 584 "_json.c"
        var $216=HEAP[$215]; //@line 584 "_json.c"
        var $217=$216+24; //@line 584 "_json.c"
        var $218=HEAP[$217]; //@line 584 "_json.c"
        var $219=$_py_tmp; //@line 584 "_json.c"
        FUNCTION_TABLE[$218]($219); //@line 584 "_json.c"
        __label__ = 55; break; //@line 584 "_json.c"
      case 55: // $bb64
        var $220=$next_end_ptr_addr; //@line 585 "_json.c"
        var $221=$end_addr; //@line 585 "_json.c"
        HEAP[$220]=$221; //@line 585 "_json.c"
        var $222=$rval; //@line 586 "_json.c"
        $0=$222; //@line 586 "_json.c"
        __label__ = 60; break; //@line 586 "_json.c"
      case 56: // $bail
        var $223=$next_end_ptr_addr; //@line 588 "_json.c"
        HEAP[$223]=-1; //@line 588 "_json.c"
        var $224=$chunks; //@line 589 "_json.c"
        var $225=($224)!=0; //@line 589 "_json.c"
        if ($225) { __label__ = 57; break; } else { __label__ = 59; break; } //@line 589 "_json.c"
      case 57: // $bb65
        var $226=$chunks; //@line 589 "_json.c"
        var $227=$226; //@line 589 "_json.c"
        var $228=HEAP[$227]; //@line 589 "_json.c"
        var $229=($228) - 1; //@line 589 "_json.c"
        var $230=$chunks; //@line 589 "_json.c"
        var $231=$230; //@line 589 "_json.c"
        HEAP[$231]=$229; //@line 589 "_json.c"
        var $232=$chunks; //@line 589 "_json.c"
        var $233=$232; //@line 589 "_json.c"
        var $234=HEAP[$233]; //@line 589 "_json.c"
        var $235=($234)==0; //@line 589 "_json.c"
        if ($235) { __label__ = 58; break; } else { __label__ = 59; break; } //@line 589 "_json.c"
      case 58: // $bb66
        var $236=$chunks; //@line 589 "_json.c"
        var $237=$236+4; //@line 589 "_json.c"
        var $238=HEAP[$237]; //@line 589 "_json.c"
        var $239=$238+24; //@line 589 "_json.c"
        var $240=HEAP[$239]; //@line 589 "_json.c"
        var $241=$chunks; //@line 589 "_json.c"
        FUNCTION_TABLE[$240]($241); //@line 589 "_json.c"
        __label__ = 59; break; //@line 589 "_json.c"
      case 59: // $bb67
        $0=0; //@line 590 "_json.c"
        __label__ = 60; break; //@line 590 "_json.c"
      case 60: // $bb68
        var $242=$0; //@line 586 "_json.c"
        $retval=$242; //@line 586 "_json.c"
        var $retval69=$retval; //@line 586 "_json.c"
        STACKTOP = __stackBase__;
        return $retval69; //@line 586 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanstring_unicode($pystr, $end, $strict, $next_end_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 2; _memset(__stackBase__, 0, 2);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $pystr_addr;
        var $end_addr;
        var $strict_addr;
        var $next_end_ptr_addr;
        var $retval;
        var $0;
        var $rval;
        var $len;
        var $begin;
        var $next;
        var $buf;
        var $chunks;
        var $c=__stackBase__;
        var $chunk;
        var $digit;
        $pystr_addr=$pystr;
        $end_addr=$end;
        $strict_addr=$strict;
        $next_end_ptr_addr=$next_end_ptr;
        var $1=$pystr_addr; //@line 606 "_json.c"
        var $2=$1; //@line 606 "_json.c"
        var $3=$2+8; //@line 606 "_json.c"
        var $4=HEAP[$3]; //@line 606 "_json.c"
        $len=$4; //@line 606 "_json.c"
        var $5=$end_addr; //@line 607 "_json.c"
        var $6=($5) - 1; //@line 607 "_json.c"
        $begin=$6; //@line 607 "_json.c"
        var $7=$pystr_addr; //@line 609 "_json.c"
        var $8=$7; //@line 609 "_json.c"
        var $9=$8+12; //@line 609 "_json.c"
        var $10=HEAP[$9]; //@line 609 "_json.c"
        $buf=$10; //@line 609 "_json.c"
        var $11=_PyList_New(0); //@line 610 "_json.c"
        $chunks=$11; //@line 610 "_json.c"
        var $12=$chunks; //@line 611 "_json.c"
        var $13=($12)==0; //@line 611 "_json.c"
        if ($13) { __label__ = 52; break; } else { __label__ = 1; break; } //@line 611 "_json.c"
      case 1: // $bb
        var $14=$end_addr; //@line 614 "_json.c"
        var $15=($14) < 0; //@line 614 "_json.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 614 "_json.c"
      case 2: // $bb1
        var $16=$len; //@line 614 "_json.c"
        var $17=$end_addr; //@line 614 "_json.c"
        var $18=($16) <= ($17); //@line 614 "_json.c"
        if ($18) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 614 "_json.c"
      case 3: // $bb2
        var $19=HEAP[_PyExc_ValueError]; //@line 615 "_json.c"
        _PyErr_SetString($19, __str20); //@line 615 "_json.c"
        __label__ = 52; break; //@line 615 "_json.c"
      case 4: // $bb3
        HEAP[$c]=0; //@line 620 "_json.c"
        $chunk=0; //@line 621 "_json.c"
        var $20=$end_addr; //@line 622 "_json.c"
        $next=$20; //@line 622 "_json.c"
        __label__ = 10; break; //@line 622 "_json.c"
      case 5: // $bb4
        var $21=$buf; //@line 623 "_json.c"
        var $22=$next; //@line 623 "_json.c"
        var $23=$21+2*$22; //@line 623 "_json.c"
        var $24=HEAP[$23]; //@line 623 "_json.c"
        HEAP[$c]=$24; //@line 623 "_json.c"
        var $25=HEAP[$c]; //@line 624 "_json.c"
        var $26=($25)==34; //@line 624 "_json.c"
        var $27=HEAP[$c]; //@line 624 "_json.c"
        var $28=($27)==92; //@line 624 "_json.c"
        var $or_cond=($26) | ($28);
        if ($or_cond) { __label__ = 11; break; } else { __label__ = 6; break; } //@line 624 "_json.c"
      case 6: // $bb6
        var $29=$strict_addr; //@line 627 "_json.c"
        var $30=($29)!=0; //@line 627 "_json.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 627 "_json.c"
      case 7: // $bb7
        var $31=HEAP[$c]; //@line 627 "_json.c"
        var $32=($31) <= 31; //@line 627 "_json.c"
        if ($32) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 627 "_json.c"
      case 8: // $bb8
        var $33=$pystr_addr; //@line 628 "_json.c"
        var $34=$next; //@line 628 "_json.c"
        _raise_errmsg(__str21, $33, $34); //@line 628 "_json.c"
        __label__ = 52; break; //@line 628 "_json.c"
      case 9: // $bb9
        var $35=$next; //@line 622 "_json.c"
        var $36=($35) + 1; //@line 622 "_json.c"
        $next=$36; //@line 622 "_json.c"
        __label__ = 10; break; //@line 622 "_json.c"
      case 10: // $bb10
        var $37=$next; //@line 622 "_json.c"
        var $38=$len; //@line 622 "_json.c"
        var $39=($37) < ($38); //@line 622 "_json.c"
        if ($39) { __label__ = 5; break; } else { __label__ = 11; break; } //@line 622 "_json.c"
      case 11: // $bb11
        var $40=HEAP[$c]; //@line 632 "_json.c"
        var $41=($40)!=34; //@line 632 "_json.c"
        var $42=HEAP[$c]; //@line 632 "_json.c"
        var $43=($42)!=92; //@line 632 "_json.c"
        var $or_cond3=($41) & ($43);
        if ($or_cond3) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 632 "_json.c"
      case 12: // $bb13
        var $44=$pystr_addr; //@line 633 "_json.c"
        var $45=$begin; //@line 633 "_json.c"
        _raise_errmsg(__str22, $44, $45); //@line 633 "_json.c"
        __label__ = 52; break; //@line 633 "_json.c"
      case 13: // $bb14
        var $46=$next; //@line 637 "_json.c"
        var $47=$end_addr; //@line 637 "_json.c"
        var $48=($46)!=($47); //@line 637 "_json.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 637 "_json.c"
      case 14: // $bb15
        var $49=$next; //@line 638 "_json.c"
        var $50=$end_addr; //@line 638 "_json.c"
        var $51=($49) - ($50); //@line 638 "_json.c"
        var $52=$buf; //@line 638 "_json.c"
        var $53=$end_addr; //@line 638 "_json.c"
        var $54=$52+2*$53; //@line 638 "_json.c"
        var $55=_PyUnicodeUCS2_FromUnicode($54, $51); //@line 638 "_json.c"
        $chunk=$55; //@line 638 "_json.c"
        var $56=$chunk; //@line 639 "_json.c"
        var $57=($56)==0; //@line 639 "_json.c"
        if ($57) { __label__ = 52; break; } else { __label__ = 15; break; } //@line 639 "_json.c"
      case 15: // $bb16
        var $58=$chunks; //@line 642 "_json.c"
        var $59=$chunk; //@line 642 "_json.c"
        var $60=_PyList_Append($58, $59); //@line 642 "_json.c"
        var $61=($60)!=0; //@line 642 "_json.c"
        var $62=$chunk; //@line 643 "_json.c"
        var $63=$62; //@line 643 "_json.c"
        var $64=HEAP[$63]; //@line 643 "_json.c"
        var $65=($64) - 1; //@line 643 "_json.c"
        var $66=$chunk; //@line 643 "_json.c"
        var $67=$66; //@line 643 "_json.c"
        HEAP[$67]=$65; //@line 643 "_json.c"
        var $68=$chunk; //@line 643 "_json.c"
        var $69=$68; //@line 643 "_json.c"
        var $70=HEAP[$69]; //@line 643 "_json.c"
        var $71=($70)==0; //@line 643 "_json.c"
        if ($61) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 642 "_json.c"
      case 16: // $bb17
        if ($71) { __label__ = 17; break; } else { __label__ = 52; break; } //@line 643 "_json.c"
      case 17: // $bb18
        var $72=$chunk; //@line 643 "_json.c"
        var $73=$72+4; //@line 643 "_json.c"
        var $74=HEAP[$73]; //@line 643 "_json.c"
        var $75=$74+24; //@line 643 "_json.c"
        var $76=HEAP[$75]; //@line 643 "_json.c"
        var $77=$chunk; //@line 643 "_json.c"
        FUNCTION_TABLE[$76]($77); //@line 643 "_json.c"
        __label__ = 52; break; //@line 643 "_json.c"
      case 18: // $bb20
        if ($71) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 646 "_json.c"
      case 19: // $bb21
        var $78=$chunk; //@line 646 "_json.c"
        var $79=$78+4; //@line 646 "_json.c"
        var $80=HEAP[$79]; //@line 646 "_json.c"
        var $81=$80+24; //@line 646 "_json.c"
        var $82=HEAP[$81]; //@line 646 "_json.c"
        var $83=$chunk; //@line 646 "_json.c"
        FUNCTION_TABLE[$82]($83); //@line 646 "_json.c"
        __label__ = 20; break; //@line 646 "_json.c"
      case 20: // $bb22
        var $84=$next; //@line 648 "_json.c"
        var $85=($84) + 1; //@line 648 "_json.c"
        $next=$85; //@line 648 "_json.c"
        var $86=HEAP[$c]; //@line 649 "_json.c"
        var $87=($86)==34; //@line 649 "_json.c"
        var $88=$next; //@line 650 "_json.c"
        if ($87) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 649 "_json.c"
      case 21: // $bb23
        $end_addr=$88; //@line 650 "_json.c"
        var $89=$chunks; //@line 759 "_json.c"
        var $90=_join_list_unicode($89); //@line 759 "_json.c"
        $rval=$90; //@line 759 "_json.c"
        var $91=$rval; //@line 760 "_json.c"
        var $92=($91)==0; //@line 760 "_json.c"
        if ($92) { __label__ = 52; break; } else { __label__ = 49; break; } //@line 760 "_json.c"
      case 22: // $bb24
        var $93=$len; //@line 653 "_json.c"
        var $94=($88)==($93); //@line 653 "_json.c"
        if ($94) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 653 "_json.c"
      case 23: // $bb25
        var $95=$pystr_addr; //@line 654 "_json.c"
        var $96=$begin; //@line 654 "_json.c"
        _raise_errmsg(__str22, $95, $96); //@line 654 "_json.c"
        __label__ = 52; break; //@line 654 "_json.c"
      case 24: // $bb26
        var $97=$buf; //@line 657 "_json.c"
        var $98=$next; //@line 657 "_json.c"
        var $99=$97+2*$98; //@line 657 "_json.c"
        var $100=HEAP[$99]; //@line 657 "_json.c"
        HEAP[$c]=$100; //@line 657 "_json.c"
        var $101=HEAP[$c]; //@line 658 "_json.c"
        var $102=($101)!=117; //@line 658 "_json.c"
        if ($102) { __label__ = 25; break; } else { __label__ = 34; break; } //@line 658 "_json.c"
      case 25: // $bb27
        var $103=$next; //@line 660 "_json.c"
        var $104=($103) + 1; //@line 660 "_json.c"
        $end_addr=$104; //@line 660 "_json.c"
        var $105=HEAP[$c]; //@line 661 "_json.c"
        var $106=($105); //@line 661 "_json.c"
        if ($106 == 34) {
          __label__ = 32; break;
        }
        else if ($106 == 47) {
          __label__ = 32; break;
        }
        else if ($106 == 92) {
          __label__ = 32; break;
        }
        else if ($106 == 98) {
          __label__ = 26; break;
        }
        else if ($106 == 102) {
          __label__ = 27; break;
        }
        else if ($106 == 110) {
          __label__ = 28; break;
        }
        else if ($106 == 114) {
          __label__ = 29; break;
        }
        else if ($106 == 116) {
          __label__ = 30; break;
        }
        else {
        __label__ = 31; break;
        }
        
      case 26: // $bb31
        HEAP[$c]=8; //@line 665 "_json.c"
        __label__ = 43; break; //@line 665 "_json.c"
      case 27: // $bb32
        HEAP[$c]=12; //@line 666 "_json.c"
        __label__ = 43; break; //@line 666 "_json.c"
      case 28: // $bb33
        HEAP[$c]=10; //@line 667 "_json.c"
        __label__ = 43; break; //@line 667 "_json.c"
      case 29: // $bb34
        HEAP[$c]=13; //@line 668 "_json.c"
        __label__ = 43; break; //@line 668 "_json.c"
      case 30: // $bb35
        HEAP[$c]=9; //@line 669 "_json.c"
        __label__ = 43; break; //@line 669 "_json.c"
      case 31: // $bb37_thread4
        HEAP[$c]=0; //@line 670 "_json.c"
        __label__ = 33; break;
      case 32: // $bb37
        var $107=($105)==0; //@line 672 "_json.c"
        if ($107) { __label__ = 33; break; } else { __label__ = 43; break; } //@line 672 "_json.c"
      case 33: // $bb38
        var $108=$end_addr; //@line 673 "_json.c"
        var $109=($108) - 2; //@line 673 "_json.c"
        var $110=$pystr_addr; //@line 673 "_json.c"
        _raise_errmsg(__str23, $110, $109); //@line 673 "_json.c"
        __label__ = 52; break; //@line 673 "_json.c"
      case 34: // $bb40
        HEAP[$c]=0; //@line 678 "_json.c"
        var $111=$next; //@line 679 "_json.c"
        var $112=($111) + 1; //@line 679 "_json.c"
        $next=$112; //@line 679 "_json.c"
        var $113=$next; //@line 680 "_json.c"
        var $114=($113) + 4; //@line 680 "_json.c"
        $end_addr=$114; //@line 680 "_json.c"
        var $115=$end_addr; //@line 681 "_json.c"
        var $116=$len; //@line 681 "_json.c"
        var $117=($115) >= ($116); //@line 681 "_json.c"
        if ($117) { __label__ = 35; break; } else { __label__ = 42; break; } //@line 681 "_json.c"
      case 35: // $bb41
        var $118=$next; //@line 682 "_json.c"
        var $119=($118) - 1; //@line 682 "_json.c"
        var $120=$pystr_addr; //@line 682 "_json.c"
        _raise_errmsg(__str24, $120, $119); //@line 682 "_json.c"
        __label__ = 52; break; //@line 682 "_json.c"
      case 36: // $bb43
        var $121=$buf; //@line 687 "_json.c"
        var $122=$next; //@line 687 "_json.c"
        var $123=$121+2*$122; //@line 687 "_json.c"
        var $124=HEAP[$123]; //@line 687 "_json.c"
        $digit=$124; //@line 687 "_json.c"
        var $125=HEAP[$c]; //@line 688 "_json.c"
        var $126=($125) << 4; //@line 688 "_json.c"
        HEAP[$c]=$126; //@line 688 "_json.c"
        var $127=$digit; //@line 689 "_json.c"
        var $128=($127); //@line 689 "_json.c"
        if ($128 == 48) {
          __label__ = 37; break;
        }
        else if ($128 == 49) {
          __label__ = 37; break;
        }
        else if ($128 == 50) {
          __label__ = 37; break;
        }
        else if ($128 == 51) {
          __label__ = 37; break;
        }
        else if ($128 == 52) {
          __label__ = 37; break;
        }
        else if ($128 == 53) {
          __label__ = 37; break;
        }
        else if ($128 == 54) {
          __label__ = 37; break;
        }
        else if ($128 == 55) {
          __label__ = 37; break;
        }
        else if ($128 == 56) {
          __label__ = 37; break;
        }
        else if ($128 == 57) {
          __label__ = 37; break;
        }
        else if ($128 == 65) {
          __label__ = 39; break;
        }
        else if ($128 == 66) {
          __label__ = 39; break;
        }
        else if ($128 == 67) {
          __label__ = 39; break;
        }
        else if ($128 == 68) {
          __label__ = 39; break;
        }
        else if ($128 == 69) {
          __label__ = 39; break;
        }
        else if ($128 == 70) {
          __label__ = 39; break;
        }
        else if ($128 == 97) {
          __label__ = 38; break;
        }
        else if ($128 == 98) {
          __label__ = 38; break;
        }
        else if ($128 == 99) {
          __label__ = 38; break;
        }
        else if ($128 == 100) {
          __label__ = 38; break;
        }
        else if ($128 == 101) {
          __label__ = 38; break;
        }
        else if ($128 == 102) {
          __label__ = 38; break;
        }
        else {
        __label__ = 40; break;
        }
        
      case 37: // $bb44
        var $129=$digit; //@line 692 "_json.c"
        var $130=($129) - 48; //@line 692 "_json.c"
        var $131=HEAP[$c]; //@line 692 "_json.c"
        var $132=($130) | ($131); //@line 692 "_json.c"
        HEAP[$c]=$132; //@line 692 "_json.c"
        __label__ = 41; break; //@line 692 "_json.c"
      case 38: // $bb45
        var $133=$digit; //@line 695 "_json.c"
        var $134=($133) - 87; //@line 695 "_json.c"
        var $135=HEAP[$c]; //@line 695 "_json.c"
        var $136=($134) | ($135); //@line 695 "_json.c"
        HEAP[$c]=$136; //@line 695 "_json.c"
        __label__ = 41; break; //@line 695 "_json.c"
      case 39: // $bb46
        var $137=$digit; //@line 698 "_json.c"
        var $138=($137) - 55; //@line 698 "_json.c"
        var $139=HEAP[$c]; //@line 698 "_json.c"
        var $140=($138) | ($139); //@line 698 "_json.c"
        HEAP[$c]=$140; //@line 698 "_json.c"
        __label__ = 41; break; //@line 698 "_json.c"
      case 40: // $bb47
        var $141=$end_addr; //@line 700 "_json.c"
        var $142=($141) - 5; //@line 700 "_json.c"
        var $143=$pystr_addr; //@line 700 "_json.c"
        _raise_errmsg(__str24, $143, $142); //@line 700 "_json.c"
        __label__ = 52; break; //@line 700 "_json.c"
      case 41: // $bb48
        var $144=$next; //@line 686 "_json.c"
        var $145=($144) + 1; //@line 686 "_json.c"
        $next=$145; //@line 686 "_json.c"
        __label__ = 42; break; //@line 686 "_json.c"
      case 42: // $bb49
        var $146=$next; //@line 686 "_json.c"
        var $147=$end_addr; //@line 686 "_json.c"
        var $148=($146) < ($147); //@line 686 "_json.c"
        if ($148) { __label__ = 36; break; } else { __label__ = 43; break; } //@line 686 "_json.c"
      case 43: // $bb50
        var $149=_PyUnicodeUCS2_FromUnicode($c, 1); //@line 748 "_json.c"
        $chunk=$149; //@line 748 "_json.c"
        var $150=($149)==0; //@line 749 "_json.c"
        if ($150) { __label__ = 52; break; } else { __label__ = 44; break; } //@line 749 "_json.c"
      case 44: // $bb51
        var $151=$chunks; //@line 752 "_json.c"
        var $152=$chunk; //@line 752 "_json.c"
        var $153=_PyList_Append($151, $152); //@line 752 "_json.c"
        var $154=($153)!=0; //@line 752 "_json.c"
        var $155=$chunk; //@line 753 "_json.c"
        var $156=$155; //@line 753 "_json.c"
        var $157=HEAP[$156]; //@line 753 "_json.c"
        var $158=($157) - 1; //@line 753 "_json.c"
        var $159=$chunk; //@line 753 "_json.c"
        var $160=$159; //@line 753 "_json.c"
        HEAP[$160]=$158; //@line 753 "_json.c"
        var $161=$chunk; //@line 753 "_json.c"
        var $162=$161; //@line 753 "_json.c"
        var $163=HEAP[$162]; //@line 753 "_json.c"
        var $164=($163)==0; //@line 753 "_json.c"
        if ($154) { __label__ = 45; break; } else { __label__ = 47; break; } //@line 752 "_json.c"
      case 45: // $bb52
        if ($164) { __label__ = 46; break; } else { __label__ = 52; break; } //@line 753 "_json.c"
      case 46: // $bb53
        var $165=$chunk; //@line 753 "_json.c"
        var $166=$165+4; //@line 753 "_json.c"
        var $167=HEAP[$166]; //@line 753 "_json.c"
        var $168=$167+24; //@line 753 "_json.c"
        var $169=HEAP[$168]; //@line 753 "_json.c"
        var $170=$chunk; //@line 753 "_json.c"
        FUNCTION_TABLE[$169]($170); //@line 753 "_json.c"
        __label__ = 52; break; //@line 753 "_json.c"
      case 47: // $bb55
        if ($164) { __label__ = 48; break; } else { __label__ = 4; break; } //@line 756 "_json.c"
      case 48: // $bb56
        var $171=$chunk; //@line 756 "_json.c"
        var $172=$171+4; //@line 756 "_json.c"
        var $173=HEAP[$172]; //@line 756 "_json.c"
        var $174=$173+24; //@line 756 "_json.c"
        var $175=HEAP[$174]; //@line 756 "_json.c"
        var $176=$chunk; //@line 756 "_json.c"
        FUNCTION_TABLE[$175]($176); //@line 756 "_json.c"
        __label__ = 4; break; //@line 756 "_json.c"
      case 49: // $bb58
        var $177=$chunks; //@line 763 "_json.c"
        var $178=$177; //@line 763 "_json.c"
        var $179=HEAP[$178]; //@line 763 "_json.c"
        var $180=($179) - 1; //@line 763 "_json.c"
        var $181=$chunks; //@line 763 "_json.c"
        var $182=$181; //@line 763 "_json.c"
        HEAP[$182]=$180; //@line 763 "_json.c"
        var $183=$chunks; //@line 763 "_json.c"
        var $184=$183; //@line 763 "_json.c"
        var $185=HEAP[$184]; //@line 763 "_json.c"
        var $186=($185)==0; //@line 763 "_json.c"
        if ($186) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 763 "_json.c"
      case 50: // $bb59
        var $187=$chunks; //@line 763 "_json.c"
        var $188=$187+4; //@line 763 "_json.c"
        var $189=HEAP[$188]; //@line 763 "_json.c"
        var $190=$189+24; //@line 763 "_json.c"
        var $191=HEAP[$190]; //@line 763 "_json.c"
        var $192=$chunks; //@line 763 "_json.c"
        FUNCTION_TABLE[$191]($192); //@line 763 "_json.c"
        __label__ = 51; break; //@line 763 "_json.c"
      case 51: // $bb60
        var $193=$next_end_ptr_addr; //@line 764 "_json.c"
        var $194=$end_addr; //@line 764 "_json.c"
        HEAP[$193]=$194; //@line 764 "_json.c"
        var $195=$rval; //@line 765 "_json.c"
        $0=$195; //@line 765 "_json.c"
        __label__ = 56; break; //@line 765 "_json.c"
      case 52: // $bail
        var $196=$next_end_ptr_addr; //@line 767 "_json.c"
        HEAP[$196]=-1; //@line 767 "_json.c"
        var $197=$chunks; //@line 768 "_json.c"
        var $198=($197)!=0; //@line 768 "_json.c"
        if ($198) { __label__ = 53; break; } else { __label__ = 55; break; } //@line 768 "_json.c"
      case 53: // $bb61
        var $199=$chunks; //@line 768 "_json.c"
        var $200=$199; //@line 768 "_json.c"
        var $201=HEAP[$200]; //@line 768 "_json.c"
        var $202=($201) - 1; //@line 768 "_json.c"
        var $203=$chunks; //@line 768 "_json.c"
        var $204=$203; //@line 768 "_json.c"
        HEAP[$204]=$202; //@line 768 "_json.c"
        var $205=$chunks; //@line 768 "_json.c"
        var $206=$205; //@line 768 "_json.c"
        var $207=HEAP[$206]; //@line 768 "_json.c"
        var $208=($207)==0; //@line 768 "_json.c"
        if ($208) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 768 "_json.c"
      case 54: // $bb62
        var $209=$chunks; //@line 768 "_json.c"
        var $210=$209+4; //@line 768 "_json.c"
        var $211=HEAP[$210]; //@line 768 "_json.c"
        var $212=$211+24; //@line 768 "_json.c"
        var $213=HEAP[$212]; //@line 768 "_json.c"
        var $214=$chunks; //@line 768 "_json.c"
        FUNCTION_TABLE[$213]($214); //@line 768 "_json.c"
        __label__ = 55; break; //@line 768 "_json.c"
      case 55: // $bb63
        $0=0; //@line 769 "_json.c"
        __label__ = 56; break; //@line 769 "_json.c"
      case 56: // $bb64
        var $215=$0; //@line 765 "_json.c"
        $retval=$215; //@line 765 "_json.c"
        var $retval65=$retval; //@line 765 "_json.c"
        STACKTOP = __stackBase__;
        return $retval65; //@line 765 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _py_scanstring($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $pystr=__stackBase__;
        var $rval;
        var $end=__stackBase__+4;
        var $next_end=__stackBase__+8;
        var $encoding=__stackBase__+12;
        var $strict=__stackBase__+16;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$next_end]=-1; //@line 791 "_json.c"
        HEAP[$encoding]=0; //@line 792 "_json.c"
        HEAP[$strict]=1; //@line 793 "_json.c"
        var $1=$args_addr; //@line 794 "_json.c"
        var $2=_PyArg_ParseTuple($1, __str25, allocate([$pystr,0,0,0,(FUNCTION_TABLE_OFFSET + 4),0,0,0,$end,0,0,0,$encoding,0,0,0,$strict,0,0,0], ["%struct.PyObject**",0,0,0,"i32 (%struct.PyObject*, i32*)*",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 794 "_json.c"
        var $3=($2)==0; //@line 794 "_json.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 794 "_json.c"
      case 1: // $bb
        $0=0; //@line 795 "_json.c"
        __label__ = 10; break; //@line 795 "_json.c"
      case 2: // $bb1
        var $4=HEAP[$encoding]; //@line 797 "_json.c"
        var $5=($4)==0; //@line 797 "_json.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 797 "_json.c"
      case 3: // $bb2
        HEAP[$encoding]=__str26; //@line 798 "_json.c"
        __label__ = 4; break; //@line 798 "_json.c"
      case 4: // $bb3
        var $6=HEAP[$pystr]; //@line 800 "_json.c"
        var $7=$6+4; //@line 800 "_json.c"
        var $8=HEAP[$7]; //@line 800 "_json.c"
        var $9=$8+84; //@line 800 "_json.c"
        var $10=HEAP[$9]; //@line 800 "_json.c"
        var $11=($10) & 134217728; //@line 800 "_json.c"
        var $12=($11)!=0; //@line 800 "_json.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 800 "_json.c"
      case 5: // $bb4
        var $13=HEAP[$strict]; //@line 801 "_json.c"
        var $14=HEAP[$encoding]; //@line 801 "_json.c"
        var $15=HEAP[$end]; //@line 801 "_json.c"
        var $16=HEAP[$pystr]; //@line 801 "_json.c"
        var $17=_scanstring_str($16, $15, $14, $13, $next_end); //@line 801 "_json.c"
        $rval=$17; //@line 801 "_json.c"
        __label__ = 9; break; //@line 801 "_json.c"
      case 6: // $bb5
        var $18=HEAP[$pystr]; //@line 803 "_json.c"
        var $19=$18+4; //@line 803 "_json.c"
        var $20=HEAP[$19]; //@line 803 "_json.c"
        var $21=$20+84; //@line 803 "_json.c"
        var $22=HEAP[$21]; //@line 803 "_json.c"
        var $23=($22) & 268435456; //@line 803 "_json.c"
        var $24=($23)!=0; //@line 803 "_json.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 803 "_json.c"
      case 7: // $bb6
        var $25=HEAP[$strict]; //@line 804 "_json.c"
        var $26=HEAP[$end]; //@line 804 "_json.c"
        var $27=HEAP[$pystr]; //@line 804 "_json.c"
        var $28=_scanstring_unicode($27, $26, $25, $next_end); //@line 804 "_json.c"
        $rval=$28; //@line 804 "_json.c"
        __label__ = 9; break; //@line 804 "_json.c"
      case 8: // $bb7
        var $29=HEAP[$pystr]; //@line 807 "_json.c"
        var $30=$29+4; //@line 807 "_json.c"
        var $31=HEAP[$30]; //@line 807 "_json.c"
        var $32=$31+12; //@line 807 "_json.c"
        var $33=HEAP[$32]; //@line 807 "_json.c"
        var $34=HEAP[_PyExc_TypeError]; //@line 807 "_json.c"
        var $35=_PyErr_Format($34, __str27, allocate([$33,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 807 "_json.c"
        $0=0; //@line 810 "_json.c"
        __label__ = 10; break; //@line 810 "_json.c"
      case 9: // $bb8
        var $36=HEAP[$next_end]; //@line 812 "_json.c"
        var $37=$rval; //@line 812 "_json.c"
        var $38=__build_rval_index_tuple($37, $36); //@line 812 "_json.c"
        $0=$38; //@line 812 "_json.c"
        __label__ = 10; break; //@line 812 "_json.c"
      case 10: // $bb9
        var $39=$0; //@line 795 "_json.c"
        $retval=$39; //@line 795 "_json.c"
        var $retval10=$retval; //@line 795 "_json.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 795 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _py_encode_basestring_ascii($self, $pystr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $pystr_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        $pystr_addr=$pystr;
        var $1=$pystr_addr; //@line 826 "_json.c"
        var $2=$1+4; //@line 826 "_json.c"
        var $3=HEAP[$2]; //@line 826 "_json.c"
        var $4=$3+84; //@line 826 "_json.c"
        var $5=HEAP[$4]; //@line 826 "_json.c"
        var $6=($5) & 134217728; //@line 826 "_json.c"
        var $7=($6)!=0; //@line 826 "_json.c"
        var $8=$pystr_addr; //@line 827 "_json.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 826 "_json.c"
      case 1: // $bb
        var $9=_ascii_escape_str($8); //@line 827 "_json.c"
        $0=$9; //@line 827 "_json.c"
        __label__ = 5; break; //@line 827 "_json.c"
      case 2: // $bb1
        var $10=$8+4; //@line 829 "_json.c"
        var $11=HEAP[$10]; //@line 829 "_json.c"
        var $12=$11+84; //@line 829 "_json.c"
        var $13=HEAP[$12]; //@line 829 "_json.c"
        var $14=($13) & 268435456; //@line 829 "_json.c"
        var $15=($14)!=0; //@line 829 "_json.c"
        var $16=$pystr_addr; //@line 830 "_json.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 829 "_json.c"
      case 3: // $bb2
        var $17=_ascii_escape_unicode($16); //@line 830 "_json.c"
        $0=$17; //@line 830 "_json.c"
        __label__ = 5; break; //@line 830 "_json.c"
      case 4: // $bb3
        var $18=$16+4; //@line 833 "_json.c"
        var $19=HEAP[$18]; //@line 833 "_json.c"
        var $20=$19+12; //@line 833 "_json.c"
        var $21=HEAP[$20]; //@line 833 "_json.c"
        var $22=HEAP[_PyExc_TypeError]; //@line 833 "_json.c"
        var $23=_PyErr_Format($22, __str27, allocate([$21,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 833 "_json.c"
        $0=0; //@line 836 "_json.c"
        __label__ = 5; break; //@line 836 "_json.c"
      case 5: // $bb4
        var $24=$0; //@line 827 "_json.c"
        $retval=$24; //@line 827 "_json.c"
        var $retval5=$retval; //@line 827 "_json.c"
        ;
        return $retval5; //@line 827 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_dealloc($self) {
    ;
    var __label__;
  
    var $self_addr;
    $self_addr=$self;
    var $0=$self_addr; //@line 844 "_json.c"
    var $1=_scanner_clear($0); //@line 844 "_json.c"
    var $2=$self_addr; //@line 845 "_json.c"
    var $3=$2+4; //@line 845 "_json.c"
    var $4=HEAP[$3]; //@line 845 "_json.c"
    var $5=$4+160; //@line 845 "_json.c"
    var $6=HEAP[$5]; //@line 845 "_json.c"
    var $7=$self_addr; //@line 845 "_json.c"
    var $8=$7; //@line 845 "_json.c"
    FUNCTION_TABLE[$6]($8); //@line 845 "_json.c"
    ;
    return; //@line 846 "_json.c"
  }
  

  function _scanner_traverse($self, $visit, $arg) {
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
        var $s;
        var $vret;
        var $vret7;
        var $vret11;
        var $vret15;
        var $vret19;
        var $vret23;
        var $vret27;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 852 "_json.c"
        var $2=$1+4; //@line 852 "_json.c"
        var $3=HEAP[$2]; //@line 852 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 852 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 852 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 852 "_json.c"
        var $6=$5+4; //@line 852 "_json.c"
        var $7=HEAP[$6]; //@line 852 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 852 "_json.c"
        var $9=($8)==0; //@line 852 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 852 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str28, __str29, 852, ___PRETTY_FUNCTION___9208); //@line 852 "_json.c"
        throw "Reached an unreachable!" //@line 852 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 853 "_json.c"
        var $11=$10; //@line 853 "_json.c"
        $s=$11; //@line 853 "_json.c"
        var $12=$s; //@line 854 "_json.c"
        var $13=$12+8; //@line 854 "_json.c"
        var $14=HEAP[$13]; //@line 854 "_json.c"
        var $15=($14)!=0; //@line 854 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 854 "_json.c"
      case 4: // $bb3
        var $16=$s; //@line 854 "_json.c"
        var $17=$16+8; //@line 854 "_json.c"
        var $18=HEAP[$17]; //@line 854 "_json.c"
        var $19=$visit_addr; //@line 854 "_json.c"
        var $20=$arg_addr; //@line 854 "_json.c"
        var $21=FUNCTION_TABLE[$19]($18, $20); //@line 854 "_json.c"
        $vret=$21; //@line 854 "_json.c"
        var $22=$vret; //@line 854 "_json.c"
        var $23=($22)!=0; //@line 854 "_json.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 854 "_json.c"
      case 5: // $bb4
        var $24=$vret; //@line 854 "_json.c"
        $0=$24; //@line 854 "_json.c"
        __label__ = 25; break; //@line 854 "_json.c"
      case 6: // $bb5
        var $25=$s; //@line 855 "_json.c"
        var $26=$25+12; //@line 855 "_json.c"
        var $27=HEAP[$26]; //@line 855 "_json.c"
        var $28=($27)!=0; //@line 855 "_json.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 855 "_json.c"
      case 7: // $bb6
        var $29=$s; //@line 855 "_json.c"
        var $30=$29+12; //@line 855 "_json.c"
        var $31=HEAP[$30]; //@line 855 "_json.c"
        var $32=$visit_addr; //@line 855 "_json.c"
        var $33=$arg_addr; //@line 855 "_json.c"
        var $34=FUNCTION_TABLE[$32]($31, $33); //@line 855 "_json.c"
        $vret7=$34; //@line 855 "_json.c"
        var $35=$vret7; //@line 855 "_json.c"
        var $36=($35)!=0; //@line 855 "_json.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 855 "_json.c"
      case 8: // $bb8
        var $37=$vret7; //@line 855 "_json.c"
        $0=$37; //@line 855 "_json.c"
        __label__ = 25; break; //@line 855 "_json.c"
      case 9: // $bb9
        var $38=$s; //@line 856 "_json.c"
        var $39=$38+16; //@line 856 "_json.c"
        var $40=HEAP[$39]; //@line 856 "_json.c"
        var $41=($40)!=0; //@line 856 "_json.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 856 "_json.c"
      case 10: // $bb10
        var $42=$s; //@line 856 "_json.c"
        var $43=$42+16; //@line 856 "_json.c"
        var $44=HEAP[$43]; //@line 856 "_json.c"
        var $45=$visit_addr; //@line 856 "_json.c"
        var $46=$arg_addr; //@line 856 "_json.c"
        var $47=FUNCTION_TABLE[$45]($44, $46); //@line 856 "_json.c"
        $vret11=$47; //@line 856 "_json.c"
        var $48=$vret11; //@line 856 "_json.c"
        var $49=($48)!=0; //@line 856 "_json.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 856 "_json.c"
      case 11: // $bb12
        var $50=$vret11; //@line 856 "_json.c"
        $0=$50; //@line 856 "_json.c"
        __label__ = 25; break; //@line 856 "_json.c"
      case 12: // $bb13
        var $51=$s; //@line 857 "_json.c"
        var $52=$51+20; //@line 857 "_json.c"
        var $53=HEAP[$52]; //@line 857 "_json.c"
        var $54=($53)!=0; //@line 857 "_json.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 857 "_json.c"
      case 13: // $bb14
        var $55=$s; //@line 857 "_json.c"
        var $56=$55+20; //@line 857 "_json.c"
        var $57=HEAP[$56]; //@line 857 "_json.c"
        var $58=$visit_addr; //@line 857 "_json.c"
        var $59=$arg_addr; //@line 857 "_json.c"
        var $60=FUNCTION_TABLE[$58]($57, $59); //@line 857 "_json.c"
        $vret15=$60; //@line 857 "_json.c"
        var $61=$vret15; //@line 857 "_json.c"
        var $62=($61)!=0; //@line 857 "_json.c"
        if ($62) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 857 "_json.c"
      case 14: // $bb16
        var $63=$vret15; //@line 857 "_json.c"
        $0=$63; //@line 857 "_json.c"
        __label__ = 25; break; //@line 857 "_json.c"
      case 15: // $bb17
        var $64=$s; //@line 858 "_json.c"
        var $65=$64+24; //@line 858 "_json.c"
        var $66=HEAP[$65]; //@line 858 "_json.c"
        var $67=($66)!=0; //@line 858 "_json.c"
        if ($67) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 858 "_json.c"
      case 16: // $bb18
        var $68=$s; //@line 858 "_json.c"
        var $69=$68+24; //@line 858 "_json.c"
        var $70=HEAP[$69]; //@line 858 "_json.c"
        var $71=$visit_addr; //@line 858 "_json.c"
        var $72=$arg_addr; //@line 858 "_json.c"
        var $73=FUNCTION_TABLE[$71]($70, $72); //@line 858 "_json.c"
        $vret19=$73; //@line 858 "_json.c"
        var $74=$vret19; //@line 858 "_json.c"
        var $75=($74)!=0; //@line 858 "_json.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 858 "_json.c"
      case 17: // $bb20
        var $76=$vret19; //@line 858 "_json.c"
        $0=$76; //@line 858 "_json.c"
        __label__ = 25; break; //@line 858 "_json.c"
      case 18: // $bb21
        var $77=$s; //@line 859 "_json.c"
        var $78=$77+28; //@line 859 "_json.c"
        var $79=HEAP[$78]; //@line 859 "_json.c"
        var $80=($79)!=0; //@line 859 "_json.c"
        if ($80) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 859 "_json.c"
      case 19: // $bb22
        var $81=$s; //@line 859 "_json.c"
        var $82=$81+28; //@line 859 "_json.c"
        var $83=HEAP[$82]; //@line 859 "_json.c"
        var $84=$visit_addr; //@line 859 "_json.c"
        var $85=$arg_addr; //@line 859 "_json.c"
        var $86=FUNCTION_TABLE[$84]($83, $85); //@line 859 "_json.c"
        $vret23=$86; //@line 859 "_json.c"
        var $87=$vret23; //@line 859 "_json.c"
        var $88=($87)!=0; //@line 859 "_json.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 859 "_json.c"
      case 20: // $bb24
        var $89=$vret23; //@line 859 "_json.c"
        $0=$89; //@line 859 "_json.c"
        __label__ = 25; break; //@line 859 "_json.c"
      case 21: // $bb25
        var $90=$s; //@line 860 "_json.c"
        var $91=$90+32; //@line 860 "_json.c"
        var $92=HEAP[$91]; //@line 860 "_json.c"
        var $93=($92)!=0; //@line 860 "_json.c"
        if ($93) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 860 "_json.c"
      case 22: // $bb26
        var $94=$s; //@line 860 "_json.c"
        var $95=$94+32; //@line 860 "_json.c"
        var $96=HEAP[$95]; //@line 860 "_json.c"
        var $97=$visit_addr; //@line 860 "_json.c"
        var $98=$arg_addr; //@line 860 "_json.c"
        var $99=FUNCTION_TABLE[$97]($96, $98); //@line 860 "_json.c"
        $vret27=$99; //@line 860 "_json.c"
        var $100=$vret27; //@line 860 "_json.c"
        var $101=($100)!=0; //@line 860 "_json.c"
        if ($101) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 860 "_json.c"
      case 23: // $bb28
        var $102=$vret27; //@line 860 "_json.c"
        $0=$102; //@line 860 "_json.c"
        __label__ = 25; break; //@line 860 "_json.c"
      case 24: // $bb29
        $0=0; //@line 861 "_json.c"
        __label__ = 25; break; //@line 861 "_json.c"
      case 25: // $bb30
        var $103=$0; //@line 854 "_json.c"
        $retval=$103; //@line 854 "_json.c"
        var $retval31=$retval; //@line 854 "_json.c"
        ;
        return $retval31; //@line 854 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_clear($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $s;
        var $_py_tmp;
        var $_py_tmp7;
        var $_py_tmp11;
        var $_py_tmp15;
        var $_py_tmp19;
        var $_py_tmp23;
        var $_py_tmp27;
        $self_addr=$self;
        var $1=$self_addr; //@line 868 "_json.c"
        var $2=$1+4; //@line 868 "_json.c"
        var $3=HEAP[$2]; //@line 868 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 868 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 868 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 868 "_json.c"
        var $6=$5+4; //@line 868 "_json.c"
        var $7=HEAP[$6]; //@line 868 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 868 "_json.c"
        var $9=($8)==0; //@line 868 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 868 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str28, __str29, 868, ___PRETTY_FUNCTION___9278); //@line 868 "_json.c"
        throw "Reached an unreachable!" //@line 868 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 869 "_json.c"
        var $11=$10; //@line 869 "_json.c"
        $s=$11; //@line 869 "_json.c"
        var $12=$s; //@line 870 "_json.c"
        var $13=$12+8; //@line 870 "_json.c"
        var $14=HEAP[$13]; //@line 870 "_json.c"
        var $15=($14)!=0; //@line 870 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 870 "_json.c"
      case 4: // $bb3
        var $16=$s; //@line 870 "_json.c"
        var $17=$16+8; //@line 870 "_json.c"
        var $18=HEAP[$17]; //@line 870 "_json.c"
        $_py_tmp=$18; //@line 870 "_json.c"
        var $19=$s; //@line 870 "_json.c"
        var $20=$19+8; //@line 870 "_json.c"
        HEAP[$20]=0; //@line 870 "_json.c"
        var $21=$_py_tmp; //@line 870 "_json.c"
        var $22=$21; //@line 870 "_json.c"
        var $23=HEAP[$22]; //@line 870 "_json.c"
        var $24=($23) - 1; //@line 870 "_json.c"
        var $25=$_py_tmp; //@line 870 "_json.c"
        var $26=$25; //@line 870 "_json.c"
        HEAP[$26]=$24; //@line 870 "_json.c"
        var $27=$_py_tmp; //@line 870 "_json.c"
        var $28=$27; //@line 870 "_json.c"
        var $29=HEAP[$28]; //@line 870 "_json.c"
        var $30=($29)==0; //@line 870 "_json.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 870 "_json.c"
      case 5: // $bb4
        var $31=$_py_tmp; //@line 870 "_json.c"
        var $32=$31+4; //@line 870 "_json.c"
        var $33=HEAP[$32]; //@line 870 "_json.c"
        var $34=$33+24; //@line 870 "_json.c"
        var $35=HEAP[$34]; //@line 870 "_json.c"
        var $36=$_py_tmp; //@line 870 "_json.c"
        FUNCTION_TABLE[$35]($36); //@line 870 "_json.c"
        __label__ = 6; break; //@line 870 "_json.c"
      case 6: // $bb5
        var $37=$s; //@line 871 "_json.c"
        var $38=$37+12; //@line 871 "_json.c"
        var $39=HEAP[$38]; //@line 871 "_json.c"
        var $40=($39)!=0; //@line 871 "_json.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 871 "_json.c"
      case 7: // $bb6
        var $41=$s; //@line 871 "_json.c"
        var $42=$41+12; //@line 871 "_json.c"
        var $43=HEAP[$42]; //@line 871 "_json.c"
        $_py_tmp7=$43; //@line 871 "_json.c"
        var $44=$s; //@line 871 "_json.c"
        var $45=$44+12; //@line 871 "_json.c"
        HEAP[$45]=0; //@line 871 "_json.c"
        var $46=$_py_tmp7; //@line 871 "_json.c"
        var $47=$46; //@line 871 "_json.c"
        var $48=HEAP[$47]; //@line 871 "_json.c"
        var $49=($48) - 1; //@line 871 "_json.c"
        var $50=$_py_tmp7; //@line 871 "_json.c"
        var $51=$50; //@line 871 "_json.c"
        HEAP[$51]=$49; //@line 871 "_json.c"
        var $52=$_py_tmp7; //@line 871 "_json.c"
        var $53=$52; //@line 871 "_json.c"
        var $54=HEAP[$53]; //@line 871 "_json.c"
        var $55=($54)==0; //@line 871 "_json.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 871 "_json.c"
      case 8: // $bb8
        var $56=$_py_tmp7; //@line 871 "_json.c"
        var $57=$56+4; //@line 871 "_json.c"
        var $58=HEAP[$57]; //@line 871 "_json.c"
        var $59=$58+24; //@line 871 "_json.c"
        var $60=HEAP[$59]; //@line 871 "_json.c"
        var $61=$_py_tmp7; //@line 871 "_json.c"
        FUNCTION_TABLE[$60]($61); //@line 871 "_json.c"
        __label__ = 9; break; //@line 871 "_json.c"
      case 9: // $bb9
        var $62=$s; //@line 872 "_json.c"
        var $63=$62+16; //@line 872 "_json.c"
        var $64=HEAP[$63]; //@line 872 "_json.c"
        var $65=($64)!=0; //@line 872 "_json.c"
        if ($65) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 872 "_json.c"
      case 10: // $bb10
        var $66=$s; //@line 872 "_json.c"
        var $67=$66+16; //@line 872 "_json.c"
        var $68=HEAP[$67]; //@line 872 "_json.c"
        $_py_tmp11=$68; //@line 872 "_json.c"
        var $69=$s; //@line 872 "_json.c"
        var $70=$69+16; //@line 872 "_json.c"
        HEAP[$70]=0; //@line 872 "_json.c"
        var $71=$_py_tmp11; //@line 872 "_json.c"
        var $72=$71; //@line 872 "_json.c"
        var $73=HEAP[$72]; //@line 872 "_json.c"
        var $74=($73) - 1; //@line 872 "_json.c"
        var $75=$_py_tmp11; //@line 872 "_json.c"
        var $76=$75; //@line 872 "_json.c"
        HEAP[$76]=$74; //@line 872 "_json.c"
        var $77=$_py_tmp11; //@line 872 "_json.c"
        var $78=$77; //@line 872 "_json.c"
        var $79=HEAP[$78]; //@line 872 "_json.c"
        var $80=($79)==0; //@line 872 "_json.c"
        if ($80) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 872 "_json.c"
      case 11: // $bb12
        var $81=$_py_tmp11; //@line 872 "_json.c"
        var $82=$81+4; //@line 872 "_json.c"
        var $83=HEAP[$82]; //@line 872 "_json.c"
        var $84=$83+24; //@line 872 "_json.c"
        var $85=HEAP[$84]; //@line 872 "_json.c"
        var $86=$_py_tmp11; //@line 872 "_json.c"
        FUNCTION_TABLE[$85]($86); //@line 872 "_json.c"
        __label__ = 12; break; //@line 872 "_json.c"
      case 12: // $bb13
        var $87=$s; //@line 873 "_json.c"
        var $88=$87+20; //@line 873 "_json.c"
        var $89=HEAP[$88]; //@line 873 "_json.c"
        var $90=($89)!=0; //@line 873 "_json.c"
        if ($90) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 873 "_json.c"
      case 13: // $bb14
        var $91=$s; //@line 873 "_json.c"
        var $92=$91+20; //@line 873 "_json.c"
        var $93=HEAP[$92]; //@line 873 "_json.c"
        $_py_tmp15=$93; //@line 873 "_json.c"
        var $94=$s; //@line 873 "_json.c"
        var $95=$94+20; //@line 873 "_json.c"
        HEAP[$95]=0; //@line 873 "_json.c"
        var $96=$_py_tmp15; //@line 873 "_json.c"
        var $97=$96; //@line 873 "_json.c"
        var $98=HEAP[$97]; //@line 873 "_json.c"
        var $99=($98) - 1; //@line 873 "_json.c"
        var $100=$_py_tmp15; //@line 873 "_json.c"
        var $101=$100; //@line 873 "_json.c"
        HEAP[$101]=$99; //@line 873 "_json.c"
        var $102=$_py_tmp15; //@line 873 "_json.c"
        var $103=$102; //@line 873 "_json.c"
        var $104=HEAP[$103]; //@line 873 "_json.c"
        var $105=($104)==0; //@line 873 "_json.c"
        if ($105) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 873 "_json.c"
      case 14: // $bb16
        var $106=$_py_tmp15; //@line 873 "_json.c"
        var $107=$106+4; //@line 873 "_json.c"
        var $108=HEAP[$107]; //@line 873 "_json.c"
        var $109=$108+24; //@line 873 "_json.c"
        var $110=HEAP[$109]; //@line 873 "_json.c"
        var $111=$_py_tmp15; //@line 873 "_json.c"
        FUNCTION_TABLE[$110]($111); //@line 873 "_json.c"
        __label__ = 15; break; //@line 873 "_json.c"
      case 15: // $bb17
        var $112=$s; //@line 874 "_json.c"
        var $113=$112+24; //@line 874 "_json.c"
        var $114=HEAP[$113]; //@line 874 "_json.c"
        var $115=($114)!=0; //@line 874 "_json.c"
        if ($115) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 874 "_json.c"
      case 16: // $bb18
        var $116=$s; //@line 874 "_json.c"
        var $117=$116+24; //@line 874 "_json.c"
        var $118=HEAP[$117]; //@line 874 "_json.c"
        $_py_tmp19=$118; //@line 874 "_json.c"
        var $119=$s; //@line 874 "_json.c"
        var $120=$119+24; //@line 874 "_json.c"
        HEAP[$120]=0; //@line 874 "_json.c"
        var $121=$_py_tmp19; //@line 874 "_json.c"
        var $122=$121; //@line 874 "_json.c"
        var $123=HEAP[$122]; //@line 874 "_json.c"
        var $124=($123) - 1; //@line 874 "_json.c"
        var $125=$_py_tmp19; //@line 874 "_json.c"
        var $126=$125; //@line 874 "_json.c"
        HEAP[$126]=$124; //@line 874 "_json.c"
        var $127=$_py_tmp19; //@line 874 "_json.c"
        var $128=$127; //@line 874 "_json.c"
        var $129=HEAP[$128]; //@line 874 "_json.c"
        var $130=($129)==0; //@line 874 "_json.c"
        if ($130) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 874 "_json.c"
      case 17: // $bb20
        var $131=$_py_tmp19; //@line 874 "_json.c"
        var $132=$131+4; //@line 874 "_json.c"
        var $133=HEAP[$132]; //@line 874 "_json.c"
        var $134=$133+24; //@line 874 "_json.c"
        var $135=HEAP[$134]; //@line 874 "_json.c"
        var $136=$_py_tmp19; //@line 874 "_json.c"
        FUNCTION_TABLE[$135]($136); //@line 874 "_json.c"
        __label__ = 18; break; //@line 874 "_json.c"
      case 18: // $bb21
        var $137=$s; //@line 875 "_json.c"
        var $138=$137+28; //@line 875 "_json.c"
        var $139=HEAP[$138]; //@line 875 "_json.c"
        var $140=($139)!=0; //@line 875 "_json.c"
        if ($140) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 875 "_json.c"
      case 19: // $bb22
        var $141=$s; //@line 875 "_json.c"
        var $142=$141+28; //@line 875 "_json.c"
        var $143=HEAP[$142]; //@line 875 "_json.c"
        $_py_tmp23=$143; //@line 875 "_json.c"
        var $144=$s; //@line 875 "_json.c"
        var $145=$144+28; //@line 875 "_json.c"
        HEAP[$145]=0; //@line 875 "_json.c"
        var $146=$_py_tmp23; //@line 875 "_json.c"
        var $147=$146; //@line 875 "_json.c"
        var $148=HEAP[$147]; //@line 875 "_json.c"
        var $149=($148) - 1; //@line 875 "_json.c"
        var $150=$_py_tmp23; //@line 875 "_json.c"
        var $151=$150; //@line 875 "_json.c"
        HEAP[$151]=$149; //@line 875 "_json.c"
        var $152=$_py_tmp23; //@line 875 "_json.c"
        var $153=$152; //@line 875 "_json.c"
        var $154=HEAP[$153]; //@line 875 "_json.c"
        var $155=($154)==0; //@line 875 "_json.c"
        if ($155) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 875 "_json.c"
      case 20: // $bb24
        var $156=$_py_tmp23; //@line 875 "_json.c"
        var $157=$156+4; //@line 875 "_json.c"
        var $158=HEAP[$157]; //@line 875 "_json.c"
        var $159=$158+24; //@line 875 "_json.c"
        var $160=HEAP[$159]; //@line 875 "_json.c"
        var $161=$_py_tmp23; //@line 875 "_json.c"
        FUNCTION_TABLE[$160]($161); //@line 875 "_json.c"
        __label__ = 21; break; //@line 875 "_json.c"
      case 21: // $bb25
        var $162=$s; //@line 876 "_json.c"
        var $163=$162+32; //@line 876 "_json.c"
        var $164=HEAP[$163]; //@line 876 "_json.c"
        var $165=($164)!=0; //@line 876 "_json.c"
        if ($165) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 876 "_json.c"
      case 22: // $bb26
        var $166=$s; //@line 876 "_json.c"
        var $167=$166+32; //@line 876 "_json.c"
        var $168=HEAP[$167]; //@line 876 "_json.c"
        $_py_tmp27=$168; //@line 876 "_json.c"
        var $169=$s; //@line 876 "_json.c"
        var $170=$169+32; //@line 876 "_json.c"
        HEAP[$170]=0; //@line 876 "_json.c"
        var $171=$_py_tmp27; //@line 876 "_json.c"
        var $172=$171; //@line 876 "_json.c"
        var $173=HEAP[$172]; //@line 876 "_json.c"
        var $174=($173) - 1; //@line 876 "_json.c"
        var $175=$_py_tmp27; //@line 876 "_json.c"
        var $176=$175; //@line 876 "_json.c"
        HEAP[$176]=$174; //@line 876 "_json.c"
        var $177=$_py_tmp27; //@line 876 "_json.c"
        var $178=$177; //@line 876 "_json.c"
        var $179=HEAP[$178]; //@line 876 "_json.c"
        var $180=($179)==0; //@line 876 "_json.c"
        if ($180) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 876 "_json.c"
      case 23: // $bb28
        var $181=$_py_tmp27; //@line 876 "_json.c"
        var $182=$181+4; //@line 876 "_json.c"
        var $183=HEAP[$182]; //@line 876 "_json.c"
        var $184=$183+24; //@line 876 "_json.c"
        var $185=HEAP[$184]; //@line 876 "_json.c"
        var $186=$_py_tmp27; //@line 876 "_json.c"
        FUNCTION_TABLE[$185]($186); //@line 876 "_json.c"
        __label__ = 24; break; //@line 876 "_json.c"
      case 24: // $bb29
        $0=0; //@line 877 "_json.c"
        var $187=$0; //@line 877 "_json.c"
        $retval=$187; //@line 877 "_json.c"
        var $retval30=$retval; //@line 877 "_json.c"
        ;
        return $retval30; //@line 877 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_object_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $pystr_addr;
        var $idx_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $0;
        var $str;
        var $end_idx;
        var $rval;
        var $pairs;
        var $item;
        var $key;
        var $val;
        var $encoding;
        var $strict;
        var $next_idx=__stackBase__;
        var $_py_tmp;
        var $_py_tmp38;
        var $_py_tmp76;
        $s_addr=$s;
        $pystr_addr=$pystr;
        $idx_addr=$idx;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $1=$pystr_addr; //@line 889 "_json.c"
        var $2=$1; //@line 889 "_json.c"
        var $3=$2+20; //@line 889 "_json.c"
        var $4=$3; //@line 889 "_json.c"
        $str=$4; //@line 889 "_json.c"
        var $5=$pystr_addr; //@line 890 "_json.c"
        var $6=$5; //@line 890 "_json.c"
        var $7=$6+8; //@line 890 "_json.c"
        var $8=HEAP[$7]; //@line 890 "_json.c"
        var $9=($8) - 1; //@line 890 "_json.c"
        $end_idx=$9; //@line 890 "_json.c"
        $key=0; //@line 894 "_json.c"
        $val=0; //@line 895 "_json.c"
        var $10=$s_addr; //@line 896 "_json.c"
        var $11=$10+8; //@line 896 "_json.c"
        var $12=HEAP[$11]; //@line 896 "_json.c"
        var $13=$12; //@line 896 "_json.c"
        var $14=$13+20; //@line 896 "_json.c"
        var $15=$14; //@line 896 "_json.c"
        $encoding=$15; //@line 896 "_json.c"
        var $16=$s_addr; //@line 897 "_json.c"
        var $17=$16+12; //@line 897 "_json.c"
        var $18=HEAP[$17]; //@line 897 "_json.c"
        var $19=_PyObject_IsTrue($18); //@line 897 "_json.c"
        $strict=$19; //@line 897 "_json.c"
        var $20=_PyList_New(0); //@line 900 "_json.c"
        $pairs=$20; //@line 900 "_json.c"
        var $21=$pairs; //@line 901 "_json.c"
        var $22=($21)==0; //@line 901 "_json.c"
        if ($22) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 901 "_json.c"
      case 1: // $bb
        $0=0; //@line 902 "_json.c"
        __label__ = 90; break; //@line 902 "_json.c"
      case 2: // $bb2
        var $23=$idx_addr; //@line 905 "_json.c"
        var $24=($23) + 1; //@line 905 "_json.c"
        $idx_addr=$24; //@line 905 "_json.c"
        __label__ = 3; break; //@line 905 "_json.c"
      case 3: // $bb3
        var $25=$idx_addr; //@line 905 "_json.c"
        var $26=$end_idx; //@line 905 "_json.c"
        var $27=($25) > ($26); //@line 905 "_json.c"
        if ($27) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 905 "_json.c"
      case 4: // $bb4
        var $28=$str; //@line 905 "_json.c"
        var $29=$idx_addr; //@line 905 "_json.c"
        var $30=$28+$29; //@line 905 "_json.c"
        var $31=HEAP[$30]; //@line 905 "_json.c"
        var $32=($31)==32; //@line 905 "_json.c"
        if ($32) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 905 "_json.c"
      case 5: // $bb5
        var $33=$str; //@line 905 "_json.c"
        var $34=$idx_addr; //@line 905 "_json.c"
        var $35=$33+$34; //@line 905 "_json.c"
        var $36=HEAP[$35]; //@line 905 "_json.c"
        var $37=($36)==9; //@line 905 "_json.c"
        if ($37) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 905 "_json.c"
      case 6: // $bb6
        var $38=$str; //@line 905 "_json.c"
        var $39=$idx_addr; //@line 905 "_json.c"
        var $40=$38+$39; //@line 905 "_json.c"
        var $41=HEAP[$40]; //@line 905 "_json.c"
        var $42=($41)==10; //@line 905 "_json.c"
        if ($42) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 905 "_json.c"
      case 7: // $bb7
        var $43=$str; //@line 905 "_json.c"
        var $44=$idx_addr; //@line 905 "_json.c"
        var $45=$43+$44; //@line 905 "_json.c"
        var $46=HEAP[$45]; //@line 905 "_json.c"
        var $47=($46)==13; //@line 905 "_json.c"
        if ($47) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 905 "_json.c"
      case 8: // $bb8
        var $48=$idx_addr; //@line 908 "_json.c"
        var $49=$end_idx; //@line 908 "_json.c"
        var $50=($48) <= ($49); //@line 908 "_json.c"
        if ($50) { __label__ = 9; break; } else { __label__ = 62; break; } //@line 908 "_json.c"
      case 9: // $bb9
        var $51=$str; //@line 908 "_json.c"
        var $52=$idx_addr; //@line 908 "_json.c"
        var $53=$51+$52; //@line 908 "_json.c"
        var $54=HEAP[$53]; //@line 908 "_json.c"
        var $55=($54)!=125; //@line 908 "_json.c"
        if ($55) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 908 "_json.c"
      case 10: // $bb11
        var $56=$str; //@line 911 "_json.c"
        var $57=$idx_addr; //@line 911 "_json.c"
        var $58=$56+$57; //@line 911 "_json.c"
        var $59=HEAP[$58]; //@line 911 "_json.c"
        var $60=($59)!=34; //@line 911 "_json.c"
        if ($60) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 911 "_json.c"
      case 11: // $bb12
        var $61=$pystr_addr; //@line 912 "_json.c"
        var $62=$idx_addr; //@line 912 "_json.c"
        _raise_errmsg(__str30, $61, $62); //@line 912 "_json.c"
        __label__ = 80; break; //@line 912 "_json.c"
      case 12: // $bb13
        var $63=$idx_addr; //@line 915 "_json.c"
        var $64=($63) + 1; //@line 915 "_json.c"
        var $65=$pystr_addr; //@line 915 "_json.c"
        var $66=$encoding; //@line 915 "_json.c"
        var $67=$strict; //@line 915 "_json.c"
        var $68=_scanstring_str($65, $64, $66, $67, $next_idx); //@line 915 "_json.c"
        $key=$68; //@line 915 "_json.c"
        var $69=$key; //@line 916 "_json.c"
        var $70=($69)==0; //@line 916 "_json.c"
        if ($70) { __label__ = 83; break; } else { __label__ = 13; break; } //@line 916 "_json.c"
      case 13: // $bb14
        var $71=HEAP[$next_idx]; //@line 918 "_json.c"
        $idx_addr=$71; //@line 918 "_json.c"
        __label__ = 15; break; //@line 918 "_json.c"
      case 14: // $bb15
        var $72=$idx_addr; //@line 921 "_json.c"
        var $73=($72) + 1; //@line 921 "_json.c"
        $idx_addr=$73; //@line 921 "_json.c"
        __label__ = 15; break; //@line 921 "_json.c"
      case 15: // $bb16
        var $74=$idx_addr; //@line 921 "_json.c"
        var $75=$end_idx; //@line 921 "_json.c"
        var $76=($74) > ($75); //@line 921 "_json.c"
        if ($76) { __label__ = 20; break; } else { __label__ = 16; break; } //@line 921 "_json.c"
      case 16: // $bb17
        var $77=$str; //@line 921 "_json.c"
        var $78=$idx_addr; //@line 921 "_json.c"
        var $79=$77+$78; //@line 921 "_json.c"
        var $80=HEAP[$79]; //@line 921 "_json.c"
        var $81=($80)==32; //@line 921 "_json.c"
        if ($81) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 921 "_json.c"
      case 17: // $bb18
        var $82=$str; //@line 921 "_json.c"
        var $83=$idx_addr; //@line 921 "_json.c"
        var $84=$82+$83; //@line 921 "_json.c"
        var $85=HEAP[$84]; //@line 921 "_json.c"
        var $86=($85)==9; //@line 921 "_json.c"
        if ($86) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 921 "_json.c"
      case 18: // $bb19
        var $87=$str; //@line 921 "_json.c"
        var $88=$idx_addr; //@line 921 "_json.c"
        var $89=$87+$88; //@line 921 "_json.c"
        var $90=HEAP[$89]; //@line 921 "_json.c"
        var $91=($90)==10; //@line 921 "_json.c"
        if ($91) { __label__ = 14; break; } else { __label__ = 19; break; } //@line 921 "_json.c"
      case 19: // $bb20
        var $92=$str; //@line 921 "_json.c"
        var $93=$idx_addr; //@line 921 "_json.c"
        var $94=$92+$93; //@line 921 "_json.c"
        var $95=HEAP[$94]; //@line 921 "_json.c"
        var $96=($95)==13; //@line 921 "_json.c"
        if ($96) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 921 "_json.c"
      case 20: // $bb21
        var $97=$idx_addr; //@line 922 "_json.c"
        var $98=$end_idx; //@line 922 "_json.c"
        var $99=($97) > ($98); //@line 922 "_json.c"
        if ($99) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 922 "_json.c"
      case 21: // $bb22
        var $100=$str; //@line 922 "_json.c"
        var $101=$idx_addr; //@line 922 "_json.c"
        var $102=$100+$101; //@line 922 "_json.c"
        var $103=HEAP[$102]; //@line 922 "_json.c"
        var $104=($103)!=58; //@line 922 "_json.c"
        if ($104) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 922 "_json.c"
      case 22: // $bb23
        var $105=$pystr_addr; //@line 923 "_json.c"
        var $106=$idx_addr; //@line 923 "_json.c"
        _raise_errmsg(__str31, $105, $106); //@line 923 "_json.c"
        __label__ = 80; break; //@line 923 "_json.c"
      case 23: // $bb24
        var $107=$idx_addr; //@line 926 "_json.c"
        var $108=($107) + 1; //@line 926 "_json.c"
        $idx_addr=$108; //@line 926 "_json.c"
        __label__ = 25; break; //@line 926 "_json.c"
      case 24: // $bb25
        var $109=$idx_addr; //@line 927 "_json.c"
        var $110=($109) + 1; //@line 927 "_json.c"
        $idx_addr=$110; //@line 927 "_json.c"
        __label__ = 25; break; //@line 927 "_json.c"
      case 25: // $bb26
        var $111=$idx_addr; //@line 927 "_json.c"
        var $112=$end_idx; //@line 927 "_json.c"
        var $113=($111) > ($112); //@line 927 "_json.c"
        if ($113) { __label__ = 30; break; } else { __label__ = 26; break; } //@line 927 "_json.c"
      case 26: // $bb27
        var $114=$str; //@line 927 "_json.c"
        var $115=$idx_addr; //@line 927 "_json.c"
        var $116=$114+$115; //@line 927 "_json.c"
        var $117=HEAP[$116]; //@line 927 "_json.c"
        var $118=($117)==32; //@line 927 "_json.c"
        if ($118) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 927 "_json.c"
      case 27: // $bb28
        var $119=$str; //@line 927 "_json.c"
        var $120=$idx_addr; //@line 927 "_json.c"
        var $121=$119+$120; //@line 927 "_json.c"
        var $122=HEAP[$121]; //@line 927 "_json.c"
        var $123=($122)==9; //@line 927 "_json.c"
        if ($123) { __label__ = 24; break; } else { __label__ = 28; break; } //@line 927 "_json.c"
      case 28: // $bb29
        var $124=$str; //@line 927 "_json.c"
        var $125=$idx_addr; //@line 927 "_json.c"
        var $126=$124+$125; //@line 927 "_json.c"
        var $127=HEAP[$126]; //@line 927 "_json.c"
        var $128=($127)==10; //@line 927 "_json.c"
        if ($128) { __label__ = 24; break; } else { __label__ = 29; break; } //@line 927 "_json.c"
      case 29: // $bb30
        var $129=$str; //@line 927 "_json.c"
        var $130=$idx_addr; //@line 927 "_json.c"
        var $131=$129+$130; //@line 927 "_json.c"
        var $132=HEAP[$131]; //@line 927 "_json.c"
        var $133=($132)==13; //@line 927 "_json.c"
        if ($133) { __label__ = 24; break; } else { __label__ = 30; break; } //@line 927 "_json.c"
      case 30: // $bb31
        var $134=$s_addr; //@line 930 "_json.c"
        var $135=$pystr_addr; //@line 930 "_json.c"
        var $136=$idx_addr; //@line 930 "_json.c"
        var $137=_scan_once_str($134, $135, $136, $next_idx); //@line 930 "_json.c"
        $val=$137; //@line 930 "_json.c"
        var $138=($137)==0; //@line 931 "_json.c"
        if ($138) { __label__ = 80; break; } else { __label__ = 31; break; } //@line 931 "_json.c"
      case 31: // $bb32
        var $139=$key; //@line 934 "_json.c"
        var $140=$val; //@line 934 "_json.c"
        var $141=_PyTuple_Pack(2, allocate([$139,0,0,0,$140,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 934 "_json.c"
        $item=$141; //@line 934 "_json.c"
        var $142=$item; //@line 935 "_json.c"
        var $143=($142)==0; //@line 935 "_json.c"
        if ($143) { __label__ = 80; break; } else { __label__ = 32; break; } //@line 935 "_json.c"
      case 32: // $bb33
        var $144=$key; //@line 937 "_json.c"
        var $145=($144)!=0; //@line 937 "_json.c"
        if ($145) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 937 "_json.c"
      case 33: // $bb34
        var $146=$key; //@line 937 "_json.c"
        $_py_tmp=$146; //@line 937 "_json.c"
        $key=0; //@line 937 "_json.c"
        var $147=$_py_tmp; //@line 937 "_json.c"
        var $148=$147; //@line 937 "_json.c"
        var $149=HEAP[$148]; //@line 937 "_json.c"
        var $150=($149) - 1; //@line 937 "_json.c"
        var $151=$_py_tmp; //@line 937 "_json.c"
        var $152=$151; //@line 937 "_json.c"
        HEAP[$152]=$150; //@line 937 "_json.c"
        var $153=$_py_tmp; //@line 937 "_json.c"
        var $154=$153; //@line 937 "_json.c"
        var $155=HEAP[$154]; //@line 937 "_json.c"
        var $156=($155)==0; //@line 937 "_json.c"
        if ($156) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 937 "_json.c"
      case 34: // $bb35
        var $157=$_py_tmp; //@line 937 "_json.c"
        var $158=$157+4; //@line 937 "_json.c"
        var $159=HEAP[$158]; //@line 937 "_json.c"
        var $160=$159+24; //@line 937 "_json.c"
        var $161=HEAP[$160]; //@line 937 "_json.c"
        var $162=$_py_tmp; //@line 937 "_json.c"
        FUNCTION_TABLE[$161]($162); //@line 937 "_json.c"
        __label__ = 35; break; //@line 937 "_json.c"
      case 35: // $bb36
        var $163=$val; //@line 938 "_json.c"
        var $164=($163)!=0; //@line 938 "_json.c"
        if ($164) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 938 "_json.c"
      case 36: // $bb37
        var $165=$val; //@line 938 "_json.c"
        $_py_tmp38=$165; //@line 938 "_json.c"
        $val=0; //@line 938 "_json.c"
        var $166=$_py_tmp38; //@line 938 "_json.c"
        var $167=$166; //@line 938 "_json.c"
        var $168=HEAP[$167]; //@line 938 "_json.c"
        var $169=($168) - 1; //@line 938 "_json.c"
        var $170=$_py_tmp38; //@line 938 "_json.c"
        var $171=$170; //@line 938 "_json.c"
        HEAP[$171]=$169; //@line 938 "_json.c"
        var $172=$_py_tmp38; //@line 938 "_json.c"
        var $173=$172; //@line 938 "_json.c"
        var $174=HEAP[$173]; //@line 938 "_json.c"
        var $175=($174)==0; //@line 938 "_json.c"
        if ($175) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 938 "_json.c"
      case 37: // $bb39
        var $176=$_py_tmp38; //@line 938 "_json.c"
        var $177=$176+4; //@line 938 "_json.c"
        var $178=HEAP[$177]; //@line 938 "_json.c"
        var $179=$178+24; //@line 938 "_json.c"
        var $180=HEAP[$179]; //@line 938 "_json.c"
        var $181=$_py_tmp38; //@line 938 "_json.c"
        FUNCTION_TABLE[$180]($181); //@line 938 "_json.c"
        __label__ = 38; break; //@line 938 "_json.c"
      case 38: // $bb40
        var $182=$pairs; //@line 939 "_json.c"
        var $183=$item; //@line 939 "_json.c"
        var $184=_PyList_Append($182, $183); //@line 939 "_json.c"
        var $185=($184)==-1; //@line 939 "_json.c"
        var $186=$item; //@line 940 "_json.c"
        var $187=$186; //@line 940 "_json.c"
        var $188=HEAP[$187]; //@line 940 "_json.c"
        var $189=($188) - 1; //@line 940 "_json.c"
        var $190=$item; //@line 940 "_json.c"
        var $191=$190; //@line 940 "_json.c"
        HEAP[$191]=$189; //@line 940 "_json.c"
        var $192=$item; //@line 940 "_json.c"
        var $193=$192; //@line 940 "_json.c"
        var $194=HEAP[$193]; //@line 940 "_json.c"
        var $195=($194)==0; //@line 940 "_json.c"
        if ($185) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 939 "_json.c"
      case 39: // $bb41
        if ($195) { __label__ = 40; break; } else { __label__ = 80; break; } //@line 940 "_json.c"
      case 40: // $bb42
        var $196=$item; //@line 940 "_json.c"
        var $197=$196+4; //@line 940 "_json.c"
        var $198=HEAP[$197]; //@line 940 "_json.c"
        var $199=$198+24; //@line 940 "_json.c"
        var $200=HEAP[$199]; //@line 940 "_json.c"
        var $201=$item; //@line 940 "_json.c"
        FUNCTION_TABLE[$200]($201); //@line 940 "_json.c"
        __label__ = 80; break; //@line 940 "_json.c"
      case 41: // $bb44
        if ($195) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 943 "_json.c"
      case 42: // $bb45
        var $202=$item; //@line 943 "_json.c"
        var $203=$202+4; //@line 943 "_json.c"
        var $204=HEAP[$203]; //@line 943 "_json.c"
        var $205=$204+24; //@line 943 "_json.c"
        var $206=HEAP[$205]; //@line 943 "_json.c"
        var $207=$item; //@line 943 "_json.c"
        FUNCTION_TABLE[$206]($207); //@line 943 "_json.c"
        __label__ = 43; break; //@line 943 "_json.c"
      case 43: // $bb46
        var $208=HEAP[$next_idx]; //@line 944 "_json.c"
        $idx_addr=$208; //@line 944 "_json.c"
        __label__ = 45; break; //@line 944 "_json.c"
      case 44: // $bb47
        var $209=$idx_addr; //@line 947 "_json.c"
        var $210=($209) + 1; //@line 947 "_json.c"
        $idx_addr=$210; //@line 947 "_json.c"
        __label__ = 45; break; //@line 947 "_json.c"
      case 45: // $bb48
        var $211=$idx_addr; //@line 947 "_json.c"
        var $212=$end_idx; //@line 947 "_json.c"
        var $213=($211) > ($212); //@line 947 "_json.c"
        if ($213) { __label__ = 50; break; } else { __label__ = 46; break; } //@line 947 "_json.c"
      case 46: // $bb49
        var $214=$str; //@line 947 "_json.c"
        var $215=$idx_addr; //@line 947 "_json.c"
        var $216=$214+$215; //@line 947 "_json.c"
        var $217=HEAP[$216]; //@line 947 "_json.c"
        var $218=($217)==32; //@line 947 "_json.c"
        if ($218) { __label__ = 44; break; } else { __label__ = 47; break; } //@line 947 "_json.c"
      case 47: // $bb50
        var $219=$str; //@line 947 "_json.c"
        var $220=$idx_addr; //@line 947 "_json.c"
        var $221=$219+$220; //@line 947 "_json.c"
        var $222=HEAP[$221]; //@line 947 "_json.c"
        var $223=($222)==9; //@line 947 "_json.c"
        if ($223) { __label__ = 44; break; } else { __label__ = 48; break; } //@line 947 "_json.c"
      case 48: // $bb51
        var $224=$str; //@line 947 "_json.c"
        var $225=$idx_addr; //@line 947 "_json.c"
        var $226=$224+$225; //@line 947 "_json.c"
        var $227=HEAP[$226]; //@line 947 "_json.c"
        var $228=($227)==10; //@line 947 "_json.c"
        if ($228) { __label__ = 44; break; } else { __label__ = 49; break; } //@line 947 "_json.c"
      case 49: // $bb52
        var $229=$str; //@line 947 "_json.c"
        var $230=$idx_addr; //@line 947 "_json.c"
        var $231=$229+$230; //@line 947 "_json.c"
        var $232=HEAP[$231]; //@line 947 "_json.c"
        var $233=($232)==13; //@line 947 "_json.c"
        if ($233) { __label__ = 44; break; } else { __label__ = 50; break; } //@line 947 "_json.c"
      case 50: // $bb53
        var $234=$idx_addr; //@line 950 "_json.c"
        var $235=$end_idx; //@line 950 "_json.c"
        var $236=($234) > ($235); //@line 950 "_json.c"
        if ($236) { __label__ = 62; break; } else { __label__ = 51; break; } //@line 950 "_json.c"
      case 51: // $bb54
        var $237=$str; //@line 951 "_json.c"
        var $238=$idx_addr; //@line 951 "_json.c"
        var $239=$237+$238; //@line 951 "_json.c"
        var $240=HEAP[$239]; //@line 951 "_json.c"
        var $241=($240)==125; //@line 951 "_json.c"
        if ($241) { __label__ = 62; break; } else { __label__ = 52; break; } //@line 951 "_json.c"
      case 52: // $bb55
        var $242=$str; //@line 954 "_json.c"
        var $243=$idx_addr; //@line 954 "_json.c"
        var $244=$242+$243; //@line 954 "_json.c"
        var $245=HEAP[$244]; //@line 954 "_json.c"
        var $246=($245)!=44; //@line 954 "_json.c"
        if ($246) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 954 "_json.c"
      case 53: // $bb56
        var $247=$pystr_addr; //@line 955 "_json.c"
        var $248=$idx_addr; //@line 955 "_json.c"
        _raise_errmsg(__str32, $247, $248); //@line 955 "_json.c"
        __label__ = 80; break; //@line 955 "_json.c"
      case 54: // $bb57
        var $249=$idx_addr; //@line 958 "_json.c"
        var $250=($249) + 1; //@line 958 "_json.c"
        $idx_addr=$250; //@line 958 "_json.c"
        __label__ = 56; break; //@line 958 "_json.c"
      case 55: // $bb58
        var $251=$idx_addr; //@line 961 "_json.c"
        var $252=($251) + 1; //@line 961 "_json.c"
        $idx_addr=$252; //@line 961 "_json.c"
        __label__ = 56; break; //@line 961 "_json.c"
      case 56: // $bb59
        var $253=$idx_addr; //@line 961 "_json.c"
        var $254=$end_idx; //@line 961 "_json.c"
        var $255=($253) > ($254); //@line 961 "_json.c"
        if ($255) { __label__ = 61; break; } else { __label__ = 57; break; } //@line 961 "_json.c"
      case 57: // $bb60
        var $256=$str; //@line 961 "_json.c"
        var $257=$idx_addr; //@line 961 "_json.c"
        var $258=$256+$257; //@line 961 "_json.c"
        var $259=HEAP[$258]; //@line 961 "_json.c"
        var $260=($259)==32; //@line 961 "_json.c"
        if ($260) { __label__ = 55; break; } else { __label__ = 58; break; } //@line 961 "_json.c"
      case 58: // $bb61
        var $261=$str; //@line 961 "_json.c"
        var $262=$idx_addr; //@line 961 "_json.c"
        var $263=$261+$262; //@line 961 "_json.c"
        var $264=HEAP[$263]; //@line 961 "_json.c"
        var $265=($264)==9; //@line 961 "_json.c"
        if ($265) { __label__ = 55; break; } else { __label__ = 59; break; } //@line 961 "_json.c"
      case 59: // $bb62
        var $266=$str; //@line 961 "_json.c"
        var $267=$idx_addr; //@line 961 "_json.c"
        var $268=$266+$267; //@line 961 "_json.c"
        var $269=HEAP[$268]; //@line 961 "_json.c"
        var $270=($269)==10; //@line 961 "_json.c"
        if ($270) { __label__ = 55; break; } else { __label__ = 60; break; } //@line 961 "_json.c"
      case 60: // $bb63
        var $271=$str; //@line 961 "_json.c"
        var $272=$idx_addr; //@line 961 "_json.c"
        var $273=$271+$272; //@line 961 "_json.c"
        var $274=HEAP[$273]; //@line 961 "_json.c"
        var $275=($274)==13; //@line 961 "_json.c"
        if ($275) { __label__ = 55; break; } else { __label__ = 61; break; } //@line 961 "_json.c"
      case 61: // $bb64
        var $276=$idx_addr; //@line 909 "_json.c"
        var $277=$end_idx; //@line 909 "_json.c"
        var $278=($276) <= ($277); //@line 909 "_json.c"
        if ($278) { __label__ = 10; break; } else { __label__ = 62; break; } //@line 909 "_json.c"
      case 62: // $bb65
        var $279=$idx_addr; //@line 965 "_json.c"
        var $280=$end_idx; //@line 965 "_json.c"
        var $281=($279) > ($280); //@line 965 "_json.c"
        if ($281) { __label__ = 64; break; } else { __label__ = 63; break; } //@line 965 "_json.c"
      case 63: // $bb66
        var $282=$str; //@line 965 "_json.c"
        var $283=$idx_addr; //@line 965 "_json.c"
        var $284=$282+$283; //@line 965 "_json.c"
        var $285=HEAP[$284]; //@line 965 "_json.c"
        var $286=($285)!=125; //@line 965 "_json.c"
        if ($286) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 965 "_json.c"
      case 64: // $bb67
        var $287=$pystr_addr; //@line 966 "_json.c"
        var $288=$end_idx; //@line 966 "_json.c"
        _raise_errmsg(__str33, $287, $288); //@line 966 "_json.c"
        __label__ = 80; break; //@line 966 "_json.c"
      case 65: // $bb68
        var $289=$s_addr; //@line 971 "_json.c"
        var $290=$289+20; //@line 971 "_json.c"
        var $291=HEAP[$290]; //@line 971 "_json.c"
        var $292=($291)!=(__Py_NoneStruct); //@line 971 "_json.c"
        if ($292) { __label__ = 66; break; } else { __label__ = 70; break; } //@line 971 "_json.c"
      case 66: // $bb69
        var $293=$s_addr; //@line 972 "_json.c"
        var $294=$293+20; //@line 972 "_json.c"
        var $295=HEAP[$294]; //@line 972 "_json.c"
        var $296=$pairs; //@line 972 "_json.c"
        var $297=_PyObject_CallFunctionObjArgs($295, allocate([$296,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 972 "_json.c"
        $val=$297; //@line 972 "_json.c"
        var $298=$val; //@line 973 "_json.c"
        var $299=($298)==0; //@line 973 "_json.c"
        if ($299) { __label__ = 80; break; } else { __label__ = 67; break; } //@line 973 "_json.c"
      case 67: // $bb70
        var $300=$pairs; //@line 975 "_json.c"
        var $301=$300; //@line 975 "_json.c"
        var $302=HEAP[$301]; //@line 975 "_json.c"
        var $303=($302) - 1; //@line 975 "_json.c"
        var $304=$pairs; //@line 975 "_json.c"
        var $305=$304; //@line 975 "_json.c"
        HEAP[$305]=$303; //@line 975 "_json.c"
        var $306=$pairs; //@line 975 "_json.c"
        var $307=$306; //@line 975 "_json.c"
        var $308=HEAP[$307]; //@line 975 "_json.c"
        var $309=($308)==0; //@line 975 "_json.c"
        if ($309) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 975 "_json.c"
      case 68: // $bb71
        var $310=$pairs; //@line 975 "_json.c"
        var $311=$310+4; //@line 975 "_json.c"
        var $312=HEAP[$311]; //@line 975 "_json.c"
        var $313=$312+24; //@line 975 "_json.c"
        var $314=HEAP[$313]; //@line 975 "_json.c"
        var $315=$pairs; //@line 975 "_json.c"
        FUNCTION_TABLE[$314]($315); //@line 975 "_json.c"
        __label__ = 69; break; //@line 975 "_json.c"
      case 69: // $bb72
        var $316=$idx_addr; //@line 976 "_json.c"
        var $317=($316) + 1; //@line 976 "_json.c"
        var $318=$next_idx_ptr_addr; //@line 976 "_json.c"
        HEAP[$318]=$317; //@line 976 "_json.c"
        var $319=$val; //@line 977 "_json.c"
        $0=$319; //@line 977 "_json.c"
        __label__ = 90; break; //@line 977 "_json.c"
      case 70: // $bb73
        var $320=$pairs; //@line 980 "_json.c"
        var $321=_PyObject_CallFunctionObjArgs(_PyDict_Type, allocate([$320,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 980 "_json.c"
        $rval=$321; //@line 980 "_json.c"
        var $322=$rval; //@line 982 "_json.c"
        var $323=($322)==0; //@line 982 "_json.c"
        if ($323) { __label__ = 80; break; } else { __label__ = 71; break; } //@line 982 "_json.c"
      case 71: // $bb74
        var $324=$pairs; //@line 984 "_json.c"
        var $325=($324)!=0; //@line 984 "_json.c"
        if ($325) { __label__ = 72; break; } else { __label__ = 74; break; } //@line 984 "_json.c"
      case 72: // $bb75
        var $326=$pairs; //@line 984 "_json.c"
        $_py_tmp76=$326; //@line 984 "_json.c"
        $pairs=0; //@line 984 "_json.c"
        var $327=$_py_tmp76; //@line 984 "_json.c"
        var $328=$327; //@line 984 "_json.c"
        var $329=HEAP[$328]; //@line 984 "_json.c"
        var $330=($329) - 1; //@line 984 "_json.c"
        var $331=$_py_tmp76; //@line 984 "_json.c"
        var $332=$331; //@line 984 "_json.c"
        HEAP[$332]=$330; //@line 984 "_json.c"
        var $333=$_py_tmp76; //@line 984 "_json.c"
        var $334=$333; //@line 984 "_json.c"
        var $335=HEAP[$334]; //@line 984 "_json.c"
        var $336=($335)==0; //@line 984 "_json.c"
        if ($336) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 984 "_json.c"
      case 73: // $bb77
        var $337=$_py_tmp76; //@line 984 "_json.c"
        var $338=$337+4; //@line 984 "_json.c"
        var $339=HEAP[$338]; //@line 984 "_json.c"
        var $340=$339+24; //@line 984 "_json.c"
        var $341=HEAP[$340]; //@line 984 "_json.c"
        var $342=$_py_tmp76; //@line 984 "_json.c"
        FUNCTION_TABLE[$341]($342); //@line 984 "_json.c"
        __label__ = 74; break; //@line 984 "_json.c"
      case 74: // $bb78
        var $343=$s_addr; //@line 987 "_json.c"
        var $344=$343+16; //@line 987 "_json.c"
        var $345=HEAP[$344]; //@line 987 "_json.c"
        var $346=($345)!=(__Py_NoneStruct); //@line 987 "_json.c"
        if ($346) { __label__ = 75; break; } else { __label__ = 79; break; } //@line 987 "_json.c"
      case 75: // $bb79
        var $347=$s_addr; //@line 988 "_json.c"
        var $348=$347+16; //@line 988 "_json.c"
        var $349=HEAP[$348]; //@line 988 "_json.c"
        var $350=$rval; //@line 988 "_json.c"
        var $351=_PyObject_CallFunctionObjArgs($349, allocate([$350,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 988 "_json.c"
        $val=$351; //@line 988 "_json.c"
        var $352=$val; //@line 989 "_json.c"
        var $353=($352)==0; //@line 989 "_json.c"
        if ($353) { __label__ = 80; break; } else { __label__ = 76; break; } //@line 989 "_json.c"
      case 76: // $bb80
        var $354=$rval; //@line 991 "_json.c"
        var $355=$354; //@line 991 "_json.c"
        var $356=HEAP[$355]; //@line 991 "_json.c"
        var $357=($356) - 1; //@line 991 "_json.c"
        var $358=$rval; //@line 991 "_json.c"
        var $359=$358; //@line 991 "_json.c"
        HEAP[$359]=$357; //@line 991 "_json.c"
        var $360=$rval; //@line 991 "_json.c"
        var $361=$360; //@line 991 "_json.c"
        var $362=HEAP[$361]; //@line 991 "_json.c"
        var $363=($362)==0; //@line 991 "_json.c"
        if ($363) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 991 "_json.c"
      case 77: // $bb81
        var $364=$rval; //@line 991 "_json.c"
        var $365=$364+4; //@line 991 "_json.c"
        var $366=HEAP[$365]; //@line 991 "_json.c"
        var $367=$366+24; //@line 991 "_json.c"
        var $368=HEAP[$367]; //@line 991 "_json.c"
        var $369=$rval; //@line 991 "_json.c"
        FUNCTION_TABLE[$368]($369); //@line 991 "_json.c"
        __label__ = 78; break; //@line 991 "_json.c"
      case 78: // $bb82
        var $370=$val; //@line 992 "_json.c"
        $rval=$370; //@line 992 "_json.c"
        $val=0; //@line 993 "_json.c"
        __label__ = 79; break; //@line 993 "_json.c"
      case 79: // $bb83
        var $371=$idx_addr; //@line 995 "_json.c"
        var $372=($371) + 1; //@line 995 "_json.c"
        var $373=$next_idx_ptr_addr; //@line 995 "_json.c"
        HEAP[$373]=$372; //@line 995 "_json.c"
        var $374=$rval; //@line 996 "_json.c"
        $0=$374; //@line 996 "_json.c"
        __label__ = 90; break; //@line 996 "_json.c"
      case 80: // $bail
        var $_pr=$key;
        var $375=($_pr)!=0; //@line 998 "_json.c"
        if ($375) { __label__ = 81; break; } else { __label__ = 83; break; } //@line 998 "_json.c"
      case 81: // $bb84
        var $376=$key; //@line 998 "_json.c"
        var $377=$376; //@line 998 "_json.c"
        var $378=HEAP[$377]; //@line 998 "_json.c"
        var $379=($378) - 1; //@line 998 "_json.c"
        var $380=$key; //@line 998 "_json.c"
        var $381=$380; //@line 998 "_json.c"
        HEAP[$381]=$379; //@line 998 "_json.c"
        var $382=$key; //@line 998 "_json.c"
        var $383=$382; //@line 998 "_json.c"
        var $384=HEAP[$383]; //@line 998 "_json.c"
        var $385=($384)==0; //@line 998 "_json.c"
        if ($385) { __label__ = 82; break; } else { __label__ = 83; break; } //@line 998 "_json.c"
      case 82: // $bb85
        var $386=$key; //@line 998 "_json.c"
        var $387=$386+4; //@line 998 "_json.c"
        var $388=HEAP[$387]; //@line 998 "_json.c"
        var $389=$388+24; //@line 998 "_json.c"
        var $390=HEAP[$389]; //@line 998 "_json.c"
        var $391=$key; //@line 998 "_json.c"
        FUNCTION_TABLE[$390]($391); //@line 998 "_json.c"
        __label__ = 83; break; //@line 998 "_json.c"
      case 83: // $bb86
        var $392=$val; //@line 999 "_json.c"
        var $393=($392)!=0; //@line 999 "_json.c"
        if ($393) { __label__ = 84; break; } else { __label__ = 86; break; } //@line 999 "_json.c"
      case 84: // $bb87
        var $394=$val; //@line 999 "_json.c"
        var $395=$394; //@line 999 "_json.c"
        var $396=HEAP[$395]; //@line 999 "_json.c"
        var $397=($396) - 1; //@line 999 "_json.c"
        var $398=$val; //@line 999 "_json.c"
        var $399=$398; //@line 999 "_json.c"
        HEAP[$399]=$397; //@line 999 "_json.c"
        var $400=$val; //@line 999 "_json.c"
        var $401=$400; //@line 999 "_json.c"
        var $402=HEAP[$401]; //@line 999 "_json.c"
        var $403=($402)==0; //@line 999 "_json.c"
        if ($403) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 999 "_json.c"
      case 85: // $bb88
        var $404=$val; //@line 999 "_json.c"
        var $405=$404+4; //@line 999 "_json.c"
        var $406=HEAP[$405]; //@line 999 "_json.c"
        var $407=$406+24; //@line 999 "_json.c"
        var $408=HEAP[$407]; //@line 999 "_json.c"
        var $409=$val; //@line 999 "_json.c"
        FUNCTION_TABLE[$408]($409); //@line 999 "_json.c"
        __label__ = 86; break; //@line 999 "_json.c"
      case 86: // $bb89
        var $410=$pairs; //@line 1000 "_json.c"
        var $411=($410)!=0; //@line 1000 "_json.c"
        if ($411) { __label__ = 87; break; } else { __label__ = 89; break; } //@line 1000 "_json.c"
      case 87: // $bb90
        var $412=$pairs; //@line 1000 "_json.c"
        var $413=$412; //@line 1000 "_json.c"
        var $414=HEAP[$413]; //@line 1000 "_json.c"
        var $415=($414) - 1; //@line 1000 "_json.c"
        var $416=$pairs; //@line 1000 "_json.c"
        var $417=$416; //@line 1000 "_json.c"
        HEAP[$417]=$415; //@line 1000 "_json.c"
        var $418=$pairs; //@line 1000 "_json.c"
        var $419=$418; //@line 1000 "_json.c"
        var $420=HEAP[$419]; //@line 1000 "_json.c"
        var $421=($420)==0; //@line 1000 "_json.c"
        if ($421) { __label__ = 88; break; } else { __label__ = 89; break; } //@line 1000 "_json.c"
      case 88: // $bb91
        var $422=$pairs; //@line 1000 "_json.c"
        var $423=$422+4; //@line 1000 "_json.c"
        var $424=HEAP[$423]; //@line 1000 "_json.c"
        var $425=$424+24; //@line 1000 "_json.c"
        var $426=HEAP[$425]; //@line 1000 "_json.c"
        var $427=$pairs; //@line 1000 "_json.c"
        FUNCTION_TABLE[$426]($427); //@line 1000 "_json.c"
        __label__ = 89; break; //@line 1000 "_json.c"
      case 89: // $bb92
        $0=0; //@line 1001 "_json.c"
        __label__ = 90; break; //@line 1001 "_json.c"
      case 90: // $bb93
        var $428=$0; //@line 902 "_json.c"
        $retval=$428; //@line 902 "_json.c"
        var $retval94=$retval; //@line 902 "_json.c"
        STACKTOP = __stackBase__;
        return $retval94; //@line 902 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_object_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $pystr_addr;
        var $idx_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $0;
        var $str;
        var $end_idx;
        var $rval;
        var $pairs;
        var $item;
        var $key;
        var $val;
        var $strict;
        var $next_idx=__stackBase__;
        var $_py_tmp;
        var $_py_tmp38;
        var $_py_tmp76;
        $s_addr=$s;
        $pystr_addr=$pystr;
        $idx_addr=$idx;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $1=$pystr_addr; //@line 1013 "_json.c"
        var $2=$1; //@line 1013 "_json.c"
        var $3=$2+12; //@line 1013 "_json.c"
        var $4=HEAP[$3]; //@line 1013 "_json.c"
        $str=$4; //@line 1013 "_json.c"
        var $5=$pystr_addr; //@line 1014 "_json.c"
        var $6=$5; //@line 1014 "_json.c"
        var $7=$6+8; //@line 1014 "_json.c"
        var $8=HEAP[$7]; //@line 1014 "_json.c"
        var $9=($8) - 1; //@line 1014 "_json.c"
        $end_idx=$9; //@line 1014 "_json.c"
        $key=0; //@line 1018 "_json.c"
        $val=0; //@line 1019 "_json.c"
        var $10=$s_addr; //@line 1020 "_json.c"
        var $11=$10+12; //@line 1020 "_json.c"
        var $12=HEAP[$11]; //@line 1020 "_json.c"
        var $13=_PyObject_IsTrue($12); //@line 1020 "_json.c"
        $strict=$13; //@line 1020 "_json.c"
        var $14=_PyList_New(0); //@line 1023 "_json.c"
        $pairs=$14; //@line 1023 "_json.c"
        var $15=$pairs; //@line 1024 "_json.c"
        var $16=($15)==0; //@line 1024 "_json.c"
        if ($16) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1024 "_json.c"
      case 1: // $bb
        $0=0; //@line 1025 "_json.c"
        __label__ = 90; break; //@line 1025 "_json.c"
      case 2: // $bb2
        var $17=$idx_addr; //@line 1028 "_json.c"
        var $18=($17) + 1; //@line 1028 "_json.c"
        $idx_addr=$18; //@line 1028 "_json.c"
        __label__ = 3; break; //@line 1028 "_json.c"
      case 3: // $bb3
        var $19=$idx_addr; //@line 1028 "_json.c"
        var $20=$end_idx; //@line 1028 "_json.c"
        var $21=($19) > ($20); //@line 1028 "_json.c"
        if ($21) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 1028 "_json.c"
      case 4: // $bb4
        var $22=$str; //@line 1028 "_json.c"
        var $23=$idx_addr; //@line 1028 "_json.c"
        var $24=$22+2*$23; //@line 1028 "_json.c"
        var $25=HEAP[$24]; //@line 1028 "_json.c"
        var $26=($25)==32; //@line 1028 "_json.c"
        if ($26) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1028 "_json.c"
      case 5: // $bb5
        var $27=$str; //@line 1028 "_json.c"
        var $28=$idx_addr; //@line 1028 "_json.c"
        var $29=$27+2*$28; //@line 1028 "_json.c"
        var $30=HEAP[$29]; //@line 1028 "_json.c"
        var $31=($30)==9; //@line 1028 "_json.c"
        if ($31) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 1028 "_json.c"
      case 6: // $bb6
        var $32=$str; //@line 1028 "_json.c"
        var $33=$idx_addr; //@line 1028 "_json.c"
        var $34=$32+2*$33; //@line 1028 "_json.c"
        var $35=HEAP[$34]; //@line 1028 "_json.c"
        var $36=($35)==10; //@line 1028 "_json.c"
        if ($36) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 1028 "_json.c"
      case 7: // $bb7
        var $37=$str; //@line 1028 "_json.c"
        var $38=$idx_addr; //@line 1028 "_json.c"
        var $39=$37+2*$38; //@line 1028 "_json.c"
        var $40=HEAP[$39]; //@line 1028 "_json.c"
        var $41=($40)==13; //@line 1028 "_json.c"
        if ($41) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 1028 "_json.c"
      case 8: // $bb8
        var $42=$idx_addr; //@line 1031 "_json.c"
        var $43=$end_idx; //@line 1031 "_json.c"
        var $44=($42) <= ($43); //@line 1031 "_json.c"
        if ($44) { __label__ = 9; break; } else { __label__ = 62; break; } //@line 1031 "_json.c"
      case 9: // $bb9
        var $45=$str; //@line 1031 "_json.c"
        var $46=$idx_addr; //@line 1031 "_json.c"
        var $47=$45+2*$46; //@line 1031 "_json.c"
        var $48=HEAP[$47]; //@line 1031 "_json.c"
        var $49=($48)!=125; //@line 1031 "_json.c"
        if ($49) { __label__ = 61; break; } else { __label__ = 62; break; } //@line 1031 "_json.c"
      case 10: // $bb11
        var $50=$str; //@line 1034 "_json.c"
        var $51=$idx_addr; //@line 1034 "_json.c"
        var $52=$50+2*$51; //@line 1034 "_json.c"
        var $53=HEAP[$52]; //@line 1034 "_json.c"
        var $54=($53)!=34; //@line 1034 "_json.c"
        if ($54) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1034 "_json.c"
      case 11: // $bb12
        var $55=$pystr_addr; //@line 1035 "_json.c"
        var $56=$idx_addr; //@line 1035 "_json.c"
        _raise_errmsg(__str30, $55, $56); //@line 1035 "_json.c"
        __label__ = 80; break; //@line 1035 "_json.c"
      case 12: // $bb13
        var $57=$idx_addr; //@line 1038 "_json.c"
        var $58=($57) + 1; //@line 1038 "_json.c"
        var $59=$pystr_addr; //@line 1038 "_json.c"
        var $60=$strict; //@line 1038 "_json.c"
        var $61=_scanstring_unicode($59, $58, $60, $next_idx); //@line 1038 "_json.c"
        $key=$61; //@line 1038 "_json.c"
        var $62=$key; //@line 1039 "_json.c"
        var $63=($62)==0; //@line 1039 "_json.c"
        if ($63) { __label__ = 83; break; } else { __label__ = 13; break; } //@line 1039 "_json.c"
      case 13: // $bb14
        var $64=HEAP[$next_idx]; //@line 1041 "_json.c"
        $idx_addr=$64; //@line 1041 "_json.c"
        __label__ = 15; break; //@line 1041 "_json.c"
      case 14: // $bb15
        var $65=$idx_addr; //@line 1044 "_json.c"
        var $66=($65) + 1; //@line 1044 "_json.c"
        $idx_addr=$66; //@line 1044 "_json.c"
        __label__ = 15; break; //@line 1044 "_json.c"
      case 15: // $bb16
        var $67=$idx_addr; //@line 1044 "_json.c"
        var $68=$end_idx; //@line 1044 "_json.c"
        var $69=($67) > ($68); //@line 1044 "_json.c"
        if ($69) { __label__ = 20; break; } else { __label__ = 16; break; } //@line 1044 "_json.c"
      case 16: // $bb17
        var $70=$str; //@line 1044 "_json.c"
        var $71=$idx_addr; //@line 1044 "_json.c"
        var $72=$70+2*$71; //@line 1044 "_json.c"
        var $73=HEAP[$72]; //@line 1044 "_json.c"
        var $74=($73)==32; //@line 1044 "_json.c"
        if ($74) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 1044 "_json.c"
      case 17: // $bb18
        var $75=$str; //@line 1044 "_json.c"
        var $76=$idx_addr; //@line 1044 "_json.c"
        var $77=$75+2*$76; //@line 1044 "_json.c"
        var $78=HEAP[$77]; //@line 1044 "_json.c"
        var $79=($78)==9; //@line 1044 "_json.c"
        if ($79) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 1044 "_json.c"
      case 18: // $bb19
        var $80=$str; //@line 1044 "_json.c"
        var $81=$idx_addr; //@line 1044 "_json.c"
        var $82=$80+2*$81; //@line 1044 "_json.c"
        var $83=HEAP[$82]; //@line 1044 "_json.c"
        var $84=($83)==10; //@line 1044 "_json.c"
        if ($84) { __label__ = 14; break; } else { __label__ = 19; break; } //@line 1044 "_json.c"
      case 19: // $bb20
        var $85=$str; //@line 1044 "_json.c"
        var $86=$idx_addr; //@line 1044 "_json.c"
        var $87=$85+2*$86; //@line 1044 "_json.c"
        var $88=HEAP[$87]; //@line 1044 "_json.c"
        var $89=($88)==13; //@line 1044 "_json.c"
        if ($89) { __label__ = 14; break; } else { __label__ = 20; break; } //@line 1044 "_json.c"
      case 20: // $bb21
        var $90=$idx_addr; //@line 1045 "_json.c"
        var $91=$end_idx; //@line 1045 "_json.c"
        var $92=($90) > ($91); //@line 1045 "_json.c"
        if ($92) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1045 "_json.c"
      case 21: // $bb22
        var $93=$str; //@line 1045 "_json.c"
        var $94=$idx_addr; //@line 1045 "_json.c"
        var $95=$93+2*$94; //@line 1045 "_json.c"
        var $96=HEAP[$95]; //@line 1045 "_json.c"
        var $97=($96)!=58; //@line 1045 "_json.c"
        if ($97) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1045 "_json.c"
      case 22: // $bb23
        var $98=$pystr_addr; //@line 1046 "_json.c"
        var $99=$idx_addr; //@line 1046 "_json.c"
        _raise_errmsg(__str31, $98, $99); //@line 1046 "_json.c"
        __label__ = 80; break; //@line 1046 "_json.c"
      case 23: // $bb24
        var $100=$idx_addr; //@line 1049 "_json.c"
        var $101=($100) + 1; //@line 1049 "_json.c"
        $idx_addr=$101; //@line 1049 "_json.c"
        __label__ = 25; break; //@line 1049 "_json.c"
      case 24: // $bb25
        var $102=$idx_addr; //@line 1050 "_json.c"
        var $103=($102) + 1; //@line 1050 "_json.c"
        $idx_addr=$103; //@line 1050 "_json.c"
        __label__ = 25; break; //@line 1050 "_json.c"
      case 25: // $bb26
        var $104=$idx_addr; //@line 1050 "_json.c"
        var $105=$end_idx; //@line 1050 "_json.c"
        var $106=($104) > ($105); //@line 1050 "_json.c"
        if ($106) { __label__ = 30; break; } else { __label__ = 26; break; } //@line 1050 "_json.c"
      case 26: // $bb27
        var $107=$str; //@line 1050 "_json.c"
        var $108=$idx_addr; //@line 1050 "_json.c"
        var $109=$107+2*$108; //@line 1050 "_json.c"
        var $110=HEAP[$109]; //@line 1050 "_json.c"
        var $111=($110)==32; //@line 1050 "_json.c"
        if ($111) { __label__ = 24; break; } else { __label__ = 27; break; } //@line 1050 "_json.c"
      case 27: // $bb28
        var $112=$str; //@line 1050 "_json.c"
        var $113=$idx_addr; //@line 1050 "_json.c"
        var $114=$112+2*$113; //@line 1050 "_json.c"
        var $115=HEAP[$114]; //@line 1050 "_json.c"
        var $116=($115)==9; //@line 1050 "_json.c"
        if ($116) { __label__ = 24; break; } else { __label__ = 28; break; } //@line 1050 "_json.c"
      case 28: // $bb29
        var $117=$str; //@line 1050 "_json.c"
        var $118=$idx_addr; //@line 1050 "_json.c"
        var $119=$117+2*$118; //@line 1050 "_json.c"
        var $120=HEAP[$119]; //@line 1050 "_json.c"
        var $121=($120)==10; //@line 1050 "_json.c"
        if ($121) { __label__ = 24; break; } else { __label__ = 29; break; } //@line 1050 "_json.c"
      case 29: // $bb30
        var $122=$str; //@line 1050 "_json.c"
        var $123=$idx_addr; //@line 1050 "_json.c"
        var $124=$122+2*$123; //@line 1050 "_json.c"
        var $125=HEAP[$124]; //@line 1050 "_json.c"
        var $126=($125)==13; //@line 1050 "_json.c"
        if ($126) { __label__ = 24; break; } else { __label__ = 30; break; } //@line 1050 "_json.c"
      case 30: // $bb31
        var $127=$s_addr; //@line 1053 "_json.c"
        var $128=$pystr_addr; //@line 1053 "_json.c"
        var $129=$idx_addr; //@line 1053 "_json.c"
        var $130=_scan_once_unicode($127, $128, $129, $next_idx); //@line 1053 "_json.c"
        $val=$130; //@line 1053 "_json.c"
        var $131=($130)==0; //@line 1054 "_json.c"
        if ($131) { __label__ = 80; break; } else { __label__ = 31; break; } //@line 1054 "_json.c"
      case 31: // $bb32
        var $132=$key; //@line 1057 "_json.c"
        var $133=$val; //@line 1057 "_json.c"
        var $134=_PyTuple_Pack(2, allocate([$132,0,0,0,$133,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1057 "_json.c"
        $item=$134; //@line 1057 "_json.c"
        var $135=$item; //@line 1058 "_json.c"
        var $136=($135)==0; //@line 1058 "_json.c"
        if ($136) { __label__ = 80; break; } else { __label__ = 32; break; } //@line 1058 "_json.c"
      case 32: // $bb33
        var $137=$key; //@line 1060 "_json.c"
        var $138=($137)!=0; //@line 1060 "_json.c"
        if ($138) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 1060 "_json.c"
      case 33: // $bb34
        var $139=$key; //@line 1060 "_json.c"
        $_py_tmp=$139; //@line 1060 "_json.c"
        $key=0; //@line 1060 "_json.c"
        var $140=$_py_tmp; //@line 1060 "_json.c"
        var $141=$140; //@line 1060 "_json.c"
        var $142=HEAP[$141]; //@line 1060 "_json.c"
        var $143=($142) - 1; //@line 1060 "_json.c"
        var $144=$_py_tmp; //@line 1060 "_json.c"
        var $145=$144; //@line 1060 "_json.c"
        HEAP[$145]=$143; //@line 1060 "_json.c"
        var $146=$_py_tmp; //@line 1060 "_json.c"
        var $147=$146; //@line 1060 "_json.c"
        var $148=HEAP[$147]; //@line 1060 "_json.c"
        var $149=($148)==0; //@line 1060 "_json.c"
        if ($149) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1060 "_json.c"
      case 34: // $bb35
        var $150=$_py_tmp; //@line 1060 "_json.c"
        var $151=$150+4; //@line 1060 "_json.c"
        var $152=HEAP[$151]; //@line 1060 "_json.c"
        var $153=$152+24; //@line 1060 "_json.c"
        var $154=HEAP[$153]; //@line 1060 "_json.c"
        var $155=$_py_tmp; //@line 1060 "_json.c"
        FUNCTION_TABLE[$154]($155); //@line 1060 "_json.c"
        __label__ = 35; break; //@line 1060 "_json.c"
      case 35: // $bb36
        var $156=$val; //@line 1061 "_json.c"
        var $157=($156)!=0; //@line 1061 "_json.c"
        if ($157) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 1061 "_json.c"
      case 36: // $bb37
        var $158=$val; //@line 1061 "_json.c"
        $_py_tmp38=$158; //@line 1061 "_json.c"
        $val=0; //@line 1061 "_json.c"
        var $159=$_py_tmp38; //@line 1061 "_json.c"
        var $160=$159; //@line 1061 "_json.c"
        var $161=HEAP[$160]; //@line 1061 "_json.c"
        var $162=($161) - 1; //@line 1061 "_json.c"
        var $163=$_py_tmp38; //@line 1061 "_json.c"
        var $164=$163; //@line 1061 "_json.c"
        HEAP[$164]=$162; //@line 1061 "_json.c"
        var $165=$_py_tmp38; //@line 1061 "_json.c"
        var $166=$165; //@line 1061 "_json.c"
        var $167=HEAP[$166]; //@line 1061 "_json.c"
        var $168=($167)==0; //@line 1061 "_json.c"
        if ($168) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1061 "_json.c"
      case 37: // $bb39
        var $169=$_py_tmp38; //@line 1061 "_json.c"
        var $170=$169+4; //@line 1061 "_json.c"
        var $171=HEAP[$170]; //@line 1061 "_json.c"
        var $172=$171+24; //@line 1061 "_json.c"
        var $173=HEAP[$172]; //@line 1061 "_json.c"
        var $174=$_py_tmp38; //@line 1061 "_json.c"
        FUNCTION_TABLE[$173]($174); //@line 1061 "_json.c"
        __label__ = 38; break; //@line 1061 "_json.c"
      case 38: // $bb40
        var $175=$pairs; //@line 1062 "_json.c"
        var $176=$item; //@line 1062 "_json.c"
        var $177=_PyList_Append($175, $176); //@line 1062 "_json.c"
        var $178=($177)==-1; //@line 1062 "_json.c"
        var $179=$item; //@line 1063 "_json.c"
        var $180=$179; //@line 1063 "_json.c"
        var $181=HEAP[$180]; //@line 1063 "_json.c"
        var $182=($181) - 1; //@line 1063 "_json.c"
        var $183=$item; //@line 1063 "_json.c"
        var $184=$183; //@line 1063 "_json.c"
        HEAP[$184]=$182; //@line 1063 "_json.c"
        var $185=$item; //@line 1063 "_json.c"
        var $186=$185; //@line 1063 "_json.c"
        var $187=HEAP[$186]; //@line 1063 "_json.c"
        var $188=($187)==0; //@line 1063 "_json.c"
        if ($178) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 1062 "_json.c"
      case 39: // $bb41
        if ($188) { __label__ = 40; break; } else { __label__ = 80; break; } //@line 1063 "_json.c"
      case 40: // $bb42
        var $189=$item; //@line 1063 "_json.c"
        var $190=$189+4; //@line 1063 "_json.c"
        var $191=HEAP[$190]; //@line 1063 "_json.c"
        var $192=$191+24; //@line 1063 "_json.c"
        var $193=HEAP[$192]; //@line 1063 "_json.c"
        var $194=$item; //@line 1063 "_json.c"
        FUNCTION_TABLE[$193]($194); //@line 1063 "_json.c"
        __label__ = 80; break; //@line 1063 "_json.c"
      case 41: // $bb44
        if ($188) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1066 "_json.c"
      case 42: // $bb45
        var $195=$item; //@line 1066 "_json.c"
        var $196=$195+4; //@line 1066 "_json.c"
        var $197=HEAP[$196]; //@line 1066 "_json.c"
        var $198=$197+24; //@line 1066 "_json.c"
        var $199=HEAP[$198]; //@line 1066 "_json.c"
        var $200=$item; //@line 1066 "_json.c"
        FUNCTION_TABLE[$199]($200); //@line 1066 "_json.c"
        __label__ = 43; break; //@line 1066 "_json.c"
      case 43: // $bb46
        var $201=HEAP[$next_idx]; //@line 1067 "_json.c"
        $idx_addr=$201; //@line 1067 "_json.c"
        __label__ = 45; break; //@line 1067 "_json.c"
      case 44: // $bb47
        var $202=$idx_addr; //@line 1070 "_json.c"
        var $203=($202) + 1; //@line 1070 "_json.c"
        $idx_addr=$203; //@line 1070 "_json.c"
        __label__ = 45; break; //@line 1070 "_json.c"
      case 45: // $bb48
        var $204=$idx_addr; //@line 1070 "_json.c"
        var $205=$end_idx; //@line 1070 "_json.c"
        var $206=($204) > ($205); //@line 1070 "_json.c"
        if ($206) { __label__ = 50; break; } else { __label__ = 46; break; } //@line 1070 "_json.c"
      case 46: // $bb49
        var $207=$str; //@line 1070 "_json.c"
        var $208=$idx_addr; //@line 1070 "_json.c"
        var $209=$207+2*$208; //@line 1070 "_json.c"
        var $210=HEAP[$209]; //@line 1070 "_json.c"
        var $211=($210)==32; //@line 1070 "_json.c"
        if ($211) { __label__ = 44; break; } else { __label__ = 47; break; } //@line 1070 "_json.c"
      case 47: // $bb50
        var $212=$str; //@line 1070 "_json.c"
        var $213=$idx_addr; //@line 1070 "_json.c"
        var $214=$212+2*$213; //@line 1070 "_json.c"
        var $215=HEAP[$214]; //@line 1070 "_json.c"
        var $216=($215)==9; //@line 1070 "_json.c"
        if ($216) { __label__ = 44; break; } else { __label__ = 48; break; } //@line 1070 "_json.c"
      case 48: // $bb51
        var $217=$str; //@line 1070 "_json.c"
        var $218=$idx_addr; //@line 1070 "_json.c"
        var $219=$217+2*$218; //@line 1070 "_json.c"
        var $220=HEAP[$219]; //@line 1070 "_json.c"
        var $221=($220)==10; //@line 1070 "_json.c"
        if ($221) { __label__ = 44; break; } else { __label__ = 49; break; } //@line 1070 "_json.c"
      case 49: // $bb52
        var $222=$str; //@line 1070 "_json.c"
        var $223=$idx_addr; //@line 1070 "_json.c"
        var $224=$222+2*$223; //@line 1070 "_json.c"
        var $225=HEAP[$224]; //@line 1070 "_json.c"
        var $226=($225)==13; //@line 1070 "_json.c"
        if ($226) { __label__ = 44; break; } else { __label__ = 50; break; } //@line 1070 "_json.c"
      case 50: // $bb53
        var $227=$idx_addr; //@line 1073 "_json.c"
        var $228=$end_idx; //@line 1073 "_json.c"
        var $229=($227) > ($228); //@line 1073 "_json.c"
        if ($229) { __label__ = 62; break; } else { __label__ = 51; break; } //@line 1073 "_json.c"
      case 51: // $bb54
        var $230=$str; //@line 1074 "_json.c"
        var $231=$idx_addr; //@line 1074 "_json.c"
        var $232=$230+2*$231; //@line 1074 "_json.c"
        var $233=HEAP[$232]; //@line 1074 "_json.c"
        var $234=($233)==125; //@line 1074 "_json.c"
        if ($234) { __label__ = 62; break; } else { __label__ = 52; break; } //@line 1074 "_json.c"
      case 52: // $bb55
        var $235=$str; //@line 1077 "_json.c"
        var $236=$idx_addr; //@line 1077 "_json.c"
        var $237=$235+2*$236; //@line 1077 "_json.c"
        var $238=HEAP[$237]; //@line 1077 "_json.c"
        var $239=($238)!=44; //@line 1077 "_json.c"
        if ($239) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 1077 "_json.c"
      case 53: // $bb56
        var $240=$pystr_addr; //@line 1078 "_json.c"
        var $241=$idx_addr; //@line 1078 "_json.c"
        _raise_errmsg(__str32, $240, $241); //@line 1078 "_json.c"
        __label__ = 80; break; //@line 1078 "_json.c"
      case 54: // $bb57
        var $242=$idx_addr; //@line 1081 "_json.c"
        var $243=($242) + 1; //@line 1081 "_json.c"
        $idx_addr=$243; //@line 1081 "_json.c"
        __label__ = 56; break; //@line 1081 "_json.c"
      case 55: // $bb58
        var $244=$idx_addr; //@line 1084 "_json.c"
        var $245=($244) + 1; //@line 1084 "_json.c"
        $idx_addr=$245; //@line 1084 "_json.c"
        __label__ = 56; break; //@line 1084 "_json.c"
      case 56: // $bb59
        var $246=$idx_addr; //@line 1084 "_json.c"
        var $247=$end_idx; //@line 1084 "_json.c"
        var $248=($246) > ($247); //@line 1084 "_json.c"
        if ($248) { __label__ = 61; break; } else { __label__ = 57; break; } //@line 1084 "_json.c"
      case 57: // $bb60
        var $249=$str; //@line 1084 "_json.c"
        var $250=$idx_addr; //@line 1084 "_json.c"
        var $251=$249+2*$250; //@line 1084 "_json.c"
        var $252=HEAP[$251]; //@line 1084 "_json.c"
        var $253=($252)==32; //@line 1084 "_json.c"
        if ($253) { __label__ = 55; break; } else { __label__ = 58; break; } //@line 1084 "_json.c"
      case 58: // $bb61
        var $254=$str; //@line 1084 "_json.c"
        var $255=$idx_addr; //@line 1084 "_json.c"
        var $256=$254+2*$255; //@line 1084 "_json.c"
        var $257=HEAP[$256]; //@line 1084 "_json.c"
        var $258=($257)==9; //@line 1084 "_json.c"
        if ($258) { __label__ = 55; break; } else { __label__ = 59; break; } //@line 1084 "_json.c"
      case 59: // $bb62
        var $259=$str; //@line 1084 "_json.c"
        var $260=$idx_addr; //@line 1084 "_json.c"
        var $261=$259+2*$260; //@line 1084 "_json.c"
        var $262=HEAP[$261]; //@line 1084 "_json.c"
        var $263=($262)==10; //@line 1084 "_json.c"
        if ($263) { __label__ = 55; break; } else { __label__ = 60; break; } //@line 1084 "_json.c"
      case 60: // $bb63
        var $264=$str; //@line 1084 "_json.c"
        var $265=$idx_addr; //@line 1084 "_json.c"
        var $266=$264+2*$265; //@line 1084 "_json.c"
        var $267=HEAP[$266]; //@line 1084 "_json.c"
        var $268=($267)==13; //@line 1084 "_json.c"
        if ($268) { __label__ = 55; break; } else { __label__ = 61; break; } //@line 1084 "_json.c"
      case 61: // $bb64
        var $269=$idx_addr; //@line 1032 "_json.c"
        var $270=$end_idx; //@line 1032 "_json.c"
        var $271=($269) <= ($270); //@line 1032 "_json.c"
        if ($271) { __label__ = 10; break; } else { __label__ = 62; break; } //@line 1032 "_json.c"
      case 62: // $bb65
        var $272=$idx_addr; //@line 1089 "_json.c"
        var $273=$end_idx; //@line 1089 "_json.c"
        var $274=($272) > ($273); //@line 1089 "_json.c"
        if ($274) { __label__ = 64; break; } else { __label__ = 63; break; } //@line 1089 "_json.c"
      case 63: // $bb66
        var $275=$str; //@line 1089 "_json.c"
        var $276=$idx_addr; //@line 1089 "_json.c"
        var $277=$275+2*$276; //@line 1089 "_json.c"
        var $278=HEAP[$277]; //@line 1089 "_json.c"
        var $279=($278)!=125; //@line 1089 "_json.c"
        if ($279) { __label__ = 64; break; } else { __label__ = 65; break; } //@line 1089 "_json.c"
      case 64: // $bb67
        var $280=$pystr_addr; //@line 1090 "_json.c"
        var $281=$end_idx; //@line 1090 "_json.c"
        _raise_errmsg(__str33, $280, $281); //@line 1090 "_json.c"
        __label__ = 80; break; //@line 1090 "_json.c"
      case 65: // $bb68
        var $282=$s_addr; //@line 1095 "_json.c"
        var $283=$282+20; //@line 1095 "_json.c"
        var $284=HEAP[$283]; //@line 1095 "_json.c"
        var $285=($284)!=(__Py_NoneStruct); //@line 1095 "_json.c"
        if ($285) { __label__ = 66; break; } else { __label__ = 70; break; } //@line 1095 "_json.c"
      case 66: // $bb69
        var $286=$s_addr; //@line 1096 "_json.c"
        var $287=$286+20; //@line 1096 "_json.c"
        var $288=HEAP[$287]; //@line 1096 "_json.c"
        var $289=$pairs; //@line 1096 "_json.c"
        var $290=_PyObject_CallFunctionObjArgs($288, allocate([$289,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1096 "_json.c"
        $val=$290; //@line 1096 "_json.c"
        var $291=$val; //@line 1097 "_json.c"
        var $292=($291)==0; //@line 1097 "_json.c"
        if ($292) { __label__ = 80; break; } else { __label__ = 67; break; } //@line 1097 "_json.c"
      case 67: // $bb70
        var $293=$pairs; //@line 1099 "_json.c"
        var $294=$293; //@line 1099 "_json.c"
        var $295=HEAP[$294]; //@line 1099 "_json.c"
        var $296=($295) - 1; //@line 1099 "_json.c"
        var $297=$pairs; //@line 1099 "_json.c"
        var $298=$297; //@line 1099 "_json.c"
        HEAP[$298]=$296; //@line 1099 "_json.c"
        var $299=$pairs; //@line 1099 "_json.c"
        var $300=$299; //@line 1099 "_json.c"
        var $301=HEAP[$300]; //@line 1099 "_json.c"
        var $302=($301)==0; //@line 1099 "_json.c"
        if ($302) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 1099 "_json.c"
      case 68: // $bb71
        var $303=$pairs; //@line 1099 "_json.c"
        var $304=$303+4; //@line 1099 "_json.c"
        var $305=HEAP[$304]; //@line 1099 "_json.c"
        var $306=$305+24; //@line 1099 "_json.c"
        var $307=HEAP[$306]; //@line 1099 "_json.c"
        var $308=$pairs; //@line 1099 "_json.c"
        FUNCTION_TABLE[$307]($308); //@line 1099 "_json.c"
        __label__ = 69; break; //@line 1099 "_json.c"
      case 69: // $bb72
        var $309=$idx_addr; //@line 1100 "_json.c"
        var $310=($309) + 1; //@line 1100 "_json.c"
        var $311=$next_idx_ptr_addr; //@line 1100 "_json.c"
        HEAP[$311]=$310; //@line 1100 "_json.c"
        var $312=$val; //@line 1101 "_json.c"
        $0=$312; //@line 1101 "_json.c"
        __label__ = 90; break; //@line 1101 "_json.c"
      case 70: // $bb73
        var $313=$pairs; //@line 1104 "_json.c"
        var $314=_PyObject_CallFunctionObjArgs(_PyDict_Type, allocate([$313,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1104 "_json.c"
        $rval=$314; //@line 1104 "_json.c"
        var $315=$rval; //@line 1106 "_json.c"
        var $316=($315)==0; //@line 1106 "_json.c"
        if ($316) { __label__ = 80; break; } else { __label__ = 71; break; } //@line 1106 "_json.c"
      case 71: // $bb74
        var $317=$pairs; //@line 1108 "_json.c"
        var $318=($317)!=0; //@line 1108 "_json.c"
        if ($318) { __label__ = 72; break; } else { __label__ = 74; break; } //@line 1108 "_json.c"
      case 72: // $bb75
        var $319=$pairs; //@line 1108 "_json.c"
        $_py_tmp76=$319; //@line 1108 "_json.c"
        $pairs=0; //@line 1108 "_json.c"
        var $320=$_py_tmp76; //@line 1108 "_json.c"
        var $321=$320; //@line 1108 "_json.c"
        var $322=HEAP[$321]; //@line 1108 "_json.c"
        var $323=($322) - 1; //@line 1108 "_json.c"
        var $324=$_py_tmp76; //@line 1108 "_json.c"
        var $325=$324; //@line 1108 "_json.c"
        HEAP[$325]=$323; //@line 1108 "_json.c"
        var $326=$_py_tmp76; //@line 1108 "_json.c"
        var $327=$326; //@line 1108 "_json.c"
        var $328=HEAP[$327]; //@line 1108 "_json.c"
        var $329=($328)==0; //@line 1108 "_json.c"
        if ($329) { __label__ = 73; break; } else { __label__ = 74; break; } //@line 1108 "_json.c"
      case 73: // $bb77
        var $330=$_py_tmp76; //@line 1108 "_json.c"
        var $331=$330+4; //@line 1108 "_json.c"
        var $332=HEAP[$331]; //@line 1108 "_json.c"
        var $333=$332+24; //@line 1108 "_json.c"
        var $334=HEAP[$333]; //@line 1108 "_json.c"
        var $335=$_py_tmp76; //@line 1108 "_json.c"
        FUNCTION_TABLE[$334]($335); //@line 1108 "_json.c"
        __label__ = 74; break; //@line 1108 "_json.c"
      case 74: // $bb78
        var $336=$s_addr; //@line 1111 "_json.c"
        var $337=$336+16; //@line 1111 "_json.c"
        var $338=HEAP[$337]; //@line 1111 "_json.c"
        var $339=($338)!=(__Py_NoneStruct); //@line 1111 "_json.c"
        if ($339) { __label__ = 75; break; } else { __label__ = 79; break; } //@line 1111 "_json.c"
      case 75: // $bb79
        var $340=$s_addr; //@line 1112 "_json.c"
        var $341=$340+16; //@line 1112 "_json.c"
        var $342=HEAP[$341]; //@line 1112 "_json.c"
        var $343=$rval; //@line 1112 "_json.c"
        var $344=_PyObject_CallFunctionObjArgs($342, allocate([$343,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1112 "_json.c"
        $val=$344; //@line 1112 "_json.c"
        var $345=$val; //@line 1113 "_json.c"
        var $346=($345)==0; //@line 1113 "_json.c"
        if ($346) { __label__ = 80; break; } else { __label__ = 76; break; } //@line 1113 "_json.c"
      case 76: // $bb80
        var $347=$rval; //@line 1115 "_json.c"
        var $348=$347; //@line 1115 "_json.c"
        var $349=HEAP[$348]; //@line 1115 "_json.c"
        var $350=($349) - 1; //@line 1115 "_json.c"
        var $351=$rval; //@line 1115 "_json.c"
        var $352=$351; //@line 1115 "_json.c"
        HEAP[$352]=$350; //@line 1115 "_json.c"
        var $353=$rval; //@line 1115 "_json.c"
        var $354=$353; //@line 1115 "_json.c"
        var $355=HEAP[$354]; //@line 1115 "_json.c"
        var $356=($355)==0; //@line 1115 "_json.c"
        if ($356) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 1115 "_json.c"
      case 77: // $bb81
        var $357=$rval; //@line 1115 "_json.c"
        var $358=$357+4; //@line 1115 "_json.c"
        var $359=HEAP[$358]; //@line 1115 "_json.c"
        var $360=$359+24; //@line 1115 "_json.c"
        var $361=HEAP[$360]; //@line 1115 "_json.c"
        var $362=$rval; //@line 1115 "_json.c"
        FUNCTION_TABLE[$361]($362); //@line 1115 "_json.c"
        __label__ = 78; break; //@line 1115 "_json.c"
      case 78: // $bb82
        var $363=$val; //@line 1116 "_json.c"
        $rval=$363; //@line 1116 "_json.c"
        $val=0; //@line 1117 "_json.c"
        __label__ = 79; break; //@line 1117 "_json.c"
      case 79: // $bb83
        var $364=$idx_addr; //@line 1119 "_json.c"
        var $365=($364) + 1; //@line 1119 "_json.c"
        var $366=$next_idx_ptr_addr; //@line 1119 "_json.c"
        HEAP[$366]=$365; //@line 1119 "_json.c"
        var $367=$rval; //@line 1120 "_json.c"
        $0=$367; //@line 1120 "_json.c"
        __label__ = 90; break; //@line 1120 "_json.c"
      case 80: // $bail
        var $_pr=$key;
        var $368=($_pr)!=0; //@line 1122 "_json.c"
        if ($368) { __label__ = 81; break; } else { __label__ = 83; break; } //@line 1122 "_json.c"
      case 81: // $bb84
        var $369=$key; //@line 1122 "_json.c"
        var $370=$369; //@line 1122 "_json.c"
        var $371=HEAP[$370]; //@line 1122 "_json.c"
        var $372=($371) - 1; //@line 1122 "_json.c"
        var $373=$key; //@line 1122 "_json.c"
        var $374=$373; //@line 1122 "_json.c"
        HEAP[$374]=$372; //@line 1122 "_json.c"
        var $375=$key; //@line 1122 "_json.c"
        var $376=$375; //@line 1122 "_json.c"
        var $377=HEAP[$376]; //@line 1122 "_json.c"
        var $378=($377)==0; //@line 1122 "_json.c"
        if ($378) { __label__ = 82; break; } else { __label__ = 83; break; } //@line 1122 "_json.c"
      case 82: // $bb85
        var $379=$key; //@line 1122 "_json.c"
        var $380=$379+4; //@line 1122 "_json.c"
        var $381=HEAP[$380]; //@line 1122 "_json.c"
        var $382=$381+24; //@line 1122 "_json.c"
        var $383=HEAP[$382]; //@line 1122 "_json.c"
        var $384=$key; //@line 1122 "_json.c"
        FUNCTION_TABLE[$383]($384); //@line 1122 "_json.c"
        __label__ = 83; break; //@line 1122 "_json.c"
      case 83: // $bb86
        var $385=$val; //@line 1123 "_json.c"
        var $386=($385)!=0; //@line 1123 "_json.c"
        if ($386) { __label__ = 84; break; } else { __label__ = 86; break; } //@line 1123 "_json.c"
      case 84: // $bb87
        var $387=$val; //@line 1123 "_json.c"
        var $388=$387; //@line 1123 "_json.c"
        var $389=HEAP[$388]; //@line 1123 "_json.c"
        var $390=($389) - 1; //@line 1123 "_json.c"
        var $391=$val; //@line 1123 "_json.c"
        var $392=$391; //@line 1123 "_json.c"
        HEAP[$392]=$390; //@line 1123 "_json.c"
        var $393=$val; //@line 1123 "_json.c"
        var $394=$393; //@line 1123 "_json.c"
        var $395=HEAP[$394]; //@line 1123 "_json.c"
        var $396=($395)==0; //@line 1123 "_json.c"
        if ($396) { __label__ = 85; break; } else { __label__ = 86; break; } //@line 1123 "_json.c"
      case 85: // $bb88
        var $397=$val; //@line 1123 "_json.c"
        var $398=$397+4; //@line 1123 "_json.c"
        var $399=HEAP[$398]; //@line 1123 "_json.c"
        var $400=$399+24; //@line 1123 "_json.c"
        var $401=HEAP[$400]; //@line 1123 "_json.c"
        var $402=$val; //@line 1123 "_json.c"
        FUNCTION_TABLE[$401]($402); //@line 1123 "_json.c"
        __label__ = 86; break; //@line 1123 "_json.c"
      case 86: // $bb89
        var $403=$pairs; //@line 1124 "_json.c"
        var $404=($403)!=0; //@line 1124 "_json.c"
        if ($404) { __label__ = 87; break; } else { __label__ = 89; break; } //@line 1124 "_json.c"
      case 87: // $bb90
        var $405=$pairs; //@line 1124 "_json.c"
        var $406=$405; //@line 1124 "_json.c"
        var $407=HEAP[$406]; //@line 1124 "_json.c"
        var $408=($407) - 1; //@line 1124 "_json.c"
        var $409=$pairs; //@line 1124 "_json.c"
        var $410=$409; //@line 1124 "_json.c"
        HEAP[$410]=$408; //@line 1124 "_json.c"
        var $411=$pairs; //@line 1124 "_json.c"
        var $412=$411; //@line 1124 "_json.c"
        var $413=HEAP[$412]; //@line 1124 "_json.c"
        var $414=($413)==0; //@line 1124 "_json.c"
        if ($414) { __label__ = 88; break; } else { __label__ = 89; break; } //@line 1124 "_json.c"
      case 88: // $bb91
        var $415=$pairs; //@line 1124 "_json.c"
        var $416=$415+4; //@line 1124 "_json.c"
        var $417=HEAP[$416]; //@line 1124 "_json.c"
        var $418=$417+24; //@line 1124 "_json.c"
        var $419=HEAP[$418]; //@line 1124 "_json.c"
        var $420=$pairs; //@line 1124 "_json.c"
        FUNCTION_TABLE[$419]($420); //@line 1124 "_json.c"
        __label__ = 89; break; //@line 1124 "_json.c"
      case 89: // $bb92
        $0=0; //@line 1125 "_json.c"
        __label__ = 90; break; //@line 1125 "_json.c"
      case 90: // $bb93
        var $421=$0; //@line 1025 "_json.c"
        $retval=$421; //@line 1025 "_json.c"
        var $retval94=$retval; //@line 1025 "_json.c"
        STACKTOP = __stackBase__;
        return $retval94; //@line 1025 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_array_str($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $pystr_addr;
        var $idx_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $0;
        var $str;
        var $end_idx;
        var $val;
        var $rval;
        var $next_idx=__stackBase__;
        var $_py_tmp;
        $s_addr=$s;
        $pystr_addr=$pystr;
        $idx_addr=$idx;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $1=$pystr_addr; //@line 1137 "_json.c"
        var $2=$1; //@line 1137 "_json.c"
        var $3=$2+20; //@line 1137 "_json.c"
        var $4=$3; //@line 1137 "_json.c"
        $str=$4; //@line 1137 "_json.c"
        var $5=$pystr_addr; //@line 1138 "_json.c"
        var $6=$5; //@line 1138 "_json.c"
        var $7=$6+8; //@line 1138 "_json.c"
        var $8=HEAP[$7]; //@line 1138 "_json.c"
        var $9=($8) - 1; //@line 1138 "_json.c"
        $end_idx=$9; //@line 1138 "_json.c"
        $val=0; //@line 1139 "_json.c"
        var $10=_PyList_New(0); //@line 1140 "_json.c"
        $rval=$10; //@line 1140 "_json.c"
        var $11=$rval; //@line 1142 "_json.c"
        var $12=($11)==0; //@line 1142 "_json.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1142 "_json.c"
      case 1: // $bb
        $0=0; //@line 1143 "_json.c"
        __label__ = 44; break; //@line 1143 "_json.c"
      case 2: // $bb2
        var $13=$idx_addr; //@line 1146 "_json.c"
        var $14=($13) + 1; //@line 1146 "_json.c"
        $idx_addr=$14; //@line 1146 "_json.c"
        __label__ = 3; break; //@line 1146 "_json.c"
      case 3: // $bb3
        var $15=$idx_addr; //@line 1146 "_json.c"
        var $16=$end_idx; //@line 1146 "_json.c"
        var $17=($15) > ($16); //@line 1146 "_json.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 1146 "_json.c"
      case 4: // $bb4
        var $18=$str; //@line 1146 "_json.c"
        var $19=$idx_addr; //@line 1146 "_json.c"
        var $20=$18+$19; //@line 1146 "_json.c"
        var $21=HEAP[$20]; //@line 1146 "_json.c"
        var $22=($21)==32; //@line 1146 "_json.c"
        if ($22) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1146 "_json.c"
      case 5: // $bb5
        var $23=$str; //@line 1146 "_json.c"
        var $24=$idx_addr; //@line 1146 "_json.c"
        var $25=$23+$24; //@line 1146 "_json.c"
        var $26=HEAP[$25]; //@line 1146 "_json.c"
        var $27=($26)==9; //@line 1146 "_json.c"
        if ($27) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 1146 "_json.c"
      case 6: // $bb6
        var $28=$str; //@line 1146 "_json.c"
        var $29=$idx_addr; //@line 1146 "_json.c"
        var $30=$28+$29; //@line 1146 "_json.c"
        var $31=HEAP[$30]; //@line 1146 "_json.c"
        var $32=($31)==10; //@line 1146 "_json.c"
        if ($32) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 1146 "_json.c"
      case 7: // $bb7
        var $33=$str; //@line 1146 "_json.c"
        var $34=$idx_addr; //@line 1146 "_json.c"
        var $35=$33+$34; //@line 1146 "_json.c"
        var $36=HEAP[$35]; //@line 1146 "_json.c"
        var $37=($36)==13; //@line 1146 "_json.c"
        if ($37) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 1146 "_json.c"
      case 8: // $bb8
        var $38=$idx_addr; //@line 1149 "_json.c"
        var $39=$end_idx; //@line 1149 "_json.c"
        var $40=($38) <= ($39); //@line 1149 "_json.c"
        if ($40) { __label__ = 9; break; } else { __label__ = 34; break; } //@line 1149 "_json.c"
      case 9: // $bb9
        var $41=$str; //@line 1149 "_json.c"
        var $42=$idx_addr; //@line 1149 "_json.c"
        var $43=$41+$42; //@line 1149 "_json.c"
        var $44=HEAP[$43]; //@line 1149 "_json.c"
        var $45=($44)!=93; //@line 1149 "_json.c"
        if ($45) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1149 "_json.c"
      case 10: // $bb11
        var $46=$s_addr; //@line 1153 "_json.c"
        var $47=$pystr_addr; //@line 1153 "_json.c"
        var $48=$idx_addr; //@line 1153 "_json.c"
        var $49=_scan_once_str($46, $47, $48, $next_idx); //@line 1153 "_json.c"
        $val=$49; //@line 1153 "_json.c"
        var $50=$val; //@line 1154 "_json.c"
        var $51=($50)==0; //@line 1154 "_json.c"
        if ($51) { __label__ = 41; break; } else { __label__ = 11; break; } //@line 1154 "_json.c"
      case 11: // $bb12
        var $52=$rval; //@line 1157 "_json.c"
        var $53=$val; //@line 1157 "_json.c"
        var $54=_PyList_Append($52, $53); //@line 1157 "_json.c"
        var $55=($54)==-1; //@line 1157 "_json.c"
        if ($55) { __label__ = 38; break; } else { __label__ = 12; break; } //@line 1157 "_json.c"
      case 12: // $bb13
        var $56=$val; //@line 1160 "_json.c"
        var $57=($56)!=0; //@line 1160 "_json.c"
        if ($57) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 1160 "_json.c"
      case 13: // $bb14
        var $58=$val; //@line 1160 "_json.c"
        $_py_tmp=$58; //@line 1160 "_json.c"
        $val=0; //@line 1160 "_json.c"
        var $59=$_py_tmp; //@line 1160 "_json.c"
        var $60=$59; //@line 1160 "_json.c"
        var $61=HEAP[$60]; //@line 1160 "_json.c"
        var $62=($61) - 1; //@line 1160 "_json.c"
        var $63=$_py_tmp; //@line 1160 "_json.c"
        var $64=$63; //@line 1160 "_json.c"
        HEAP[$64]=$62; //@line 1160 "_json.c"
        var $65=$_py_tmp; //@line 1160 "_json.c"
        var $66=$65; //@line 1160 "_json.c"
        var $67=HEAP[$66]; //@line 1160 "_json.c"
        var $68=($67)==0; //@line 1160 "_json.c"
        if ($68) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1160 "_json.c"
      case 14: // $bb15
        var $69=$_py_tmp; //@line 1160 "_json.c"
        var $70=$69+4; //@line 1160 "_json.c"
        var $71=HEAP[$70]; //@line 1160 "_json.c"
        var $72=$71+24; //@line 1160 "_json.c"
        var $73=HEAP[$72]; //@line 1160 "_json.c"
        var $74=$_py_tmp; //@line 1160 "_json.c"
        FUNCTION_TABLE[$73]($74); //@line 1160 "_json.c"
        __label__ = 15; break; //@line 1160 "_json.c"
      case 15: // $bb16
        var $75=HEAP[$next_idx]; //@line 1161 "_json.c"
        $idx_addr=$75; //@line 1161 "_json.c"
        __label__ = 17; break; //@line 1161 "_json.c"
      case 16: // $bb17
        var $76=$idx_addr; //@line 1164 "_json.c"
        var $77=($76) + 1; //@line 1164 "_json.c"
        $idx_addr=$77; //@line 1164 "_json.c"
        __label__ = 17; break; //@line 1164 "_json.c"
      case 17: // $bb18
        var $78=$idx_addr; //@line 1164 "_json.c"
        var $79=$end_idx; //@line 1164 "_json.c"
        var $80=($78) > ($79); //@line 1164 "_json.c"
        if ($80) { __label__ = 22; break; } else { __label__ = 18; break; } //@line 1164 "_json.c"
      case 18: // $bb19
        var $81=$str; //@line 1164 "_json.c"
        var $82=$idx_addr; //@line 1164 "_json.c"
        var $83=$81+$82; //@line 1164 "_json.c"
        var $84=HEAP[$83]; //@line 1164 "_json.c"
        var $85=($84)==32; //@line 1164 "_json.c"
        if ($85) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 1164 "_json.c"
      case 19: // $bb20
        var $86=$str; //@line 1164 "_json.c"
        var $87=$idx_addr; //@line 1164 "_json.c"
        var $88=$86+$87; //@line 1164 "_json.c"
        var $89=HEAP[$88]; //@line 1164 "_json.c"
        var $90=($89)==9; //@line 1164 "_json.c"
        if ($90) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 1164 "_json.c"
      case 20: // $bb21
        var $91=$str; //@line 1164 "_json.c"
        var $92=$idx_addr; //@line 1164 "_json.c"
        var $93=$91+$92; //@line 1164 "_json.c"
        var $94=HEAP[$93]; //@line 1164 "_json.c"
        var $95=($94)==10; //@line 1164 "_json.c"
        if ($95) { __label__ = 16; break; } else { __label__ = 21; break; } //@line 1164 "_json.c"
      case 21: // $bb22
        var $96=$str; //@line 1164 "_json.c"
        var $97=$idx_addr; //@line 1164 "_json.c"
        var $98=$96+$97; //@line 1164 "_json.c"
        var $99=HEAP[$98]; //@line 1164 "_json.c"
        var $100=($99)==13; //@line 1164 "_json.c"
        if ($100) { __label__ = 16; break; } else { __label__ = 22; break; } //@line 1164 "_json.c"
      case 22: // $bb23
        var $101=$idx_addr; //@line 1167 "_json.c"
        var $102=$end_idx; //@line 1167 "_json.c"
        var $103=($101) > ($102); //@line 1167 "_json.c"
        if ($103) { __label__ = 34; break; } else { __label__ = 23; break; } //@line 1167 "_json.c"
      case 23: // $bb24
        var $104=$str; //@line 1168 "_json.c"
        var $105=$idx_addr; //@line 1168 "_json.c"
        var $106=$104+$105; //@line 1168 "_json.c"
        var $107=HEAP[$106]; //@line 1168 "_json.c"
        var $108=($107)==93; //@line 1168 "_json.c"
        if ($108) { __label__ = 34; break; } else { __label__ = 24; break; } //@line 1168 "_json.c"
      case 24: // $bb25
        var $109=$str; //@line 1171 "_json.c"
        var $110=$idx_addr; //@line 1171 "_json.c"
        var $111=$109+$110; //@line 1171 "_json.c"
        var $112=HEAP[$111]; //@line 1171 "_json.c"
        var $113=($112)!=44; //@line 1171 "_json.c"
        if ($113) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1171 "_json.c"
      case 25: // $bb26
        var $114=$pystr_addr; //@line 1172 "_json.c"
        var $115=$idx_addr; //@line 1172 "_json.c"
        _raise_errmsg(__str32, $114, $115); //@line 1172 "_json.c"
        __label__ = 38; break; //@line 1172 "_json.c"
      case 26: // $bb27
        var $116=$idx_addr; //@line 1175 "_json.c"
        var $117=($116) + 1; //@line 1175 "_json.c"
        $idx_addr=$117; //@line 1175 "_json.c"
        __label__ = 28; break; //@line 1175 "_json.c"
      case 27: // $bb28
        var $118=$idx_addr; //@line 1178 "_json.c"
        var $119=($118) + 1; //@line 1178 "_json.c"
        $idx_addr=$119; //@line 1178 "_json.c"
        __label__ = 28; break; //@line 1178 "_json.c"
      case 28: // $bb29
        var $120=$idx_addr; //@line 1178 "_json.c"
        var $121=$end_idx; //@line 1178 "_json.c"
        var $122=($120) > ($121); //@line 1178 "_json.c"
        if ($122) { __label__ = 33; break; } else { __label__ = 29; break; } //@line 1178 "_json.c"
      case 29: // $bb30
        var $123=$str; //@line 1178 "_json.c"
        var $124=$idx_addr; //@line 1178 "_json.c"
        var $125=$123+$124; //@line 1178 "_json.c"
        var $126=HEAP[$125]; //@line 1178 "_json.c"
        var $127=($126)==32; //@line 1178 "_json.c"
        if ($127) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 1178 "_json.c"
      case 30: // $bb31
        var $128=$str; //@line 1178 "_json.c"
        var $129=$idx_addr; //@line 1178 "_json.c"
        var $130=$128+$129; //@line 1178 "_json.c"
        var $131=HEAP[$130]; //@line 1178 "_json.c"
        var $132=($131)==9; //@line 1178 "_json.c"
        if ($132) { __label__ = 27; break; } else { __label__ = 31; break; } //@line 1178 "_json.c"
      case 31: // $bb32
        var $133=$str; //@line 1178 "_json.c"
        var $134=$idx_addr; //@line 1178 "_json.c"
        var $135=$133+$134; //@line 1178 "_json.c"
        var $136=HEAP[$135]; //@line 1178 "_json.c"
        var $137=($136)==10; //@line 1178 "_json.c"
        if ($137) { __label__ = 27; break; } else { __label__ = 32; break; } //@line 1178 "_json.c"
      case 32: // $bb33
        var $138=$str; //@line 1178 "_json.c"
        var $139=$idx_addr; //@line 1178 "_json.c"
        var $140=$138+$139; //@line 1178 "_json.c"
        var $141=HEAP[$140]; //@line 1178 "_json.c"
        var $142=($141)==13; //@line 1178 "_json.c"
        if ($142) { __label__ = 27; break; } else { __label__ = 33; break; } //@line 1178 "_json.c"
      case 33: // $bb34
        var $143=$idx_addr; //@line 1150 "_json.c"
        var $144=$end_idx; //@line 1150 "_json.c"
        var $145=($143) <= ($144); //@line 1150 "_json.c"
        if ($145) { __label__ = 10; break; } else { __label__ = 34; break; } //@line 1150 "_json.c"
      case 34: // $bb35
        var $146=$idx_addr; //@line 1183 "_json.c"
        var $147=$end_idx; //@line 1183 "_json.c"
        var $148=($146) > ($147); //@line 1183 "_json.c"
        if ($148) { __label__ = 36; break; } else { __label__ = 35; break; } //@line 1183 "_json.c"
      case 35: // $bb36
        var $149=$str; //@line 1183 "_json.c"
        var $150=$idx_addr; //@line 1183 "_json.c"
        var $151=$149+$150; //@line 1183 "_json.c"
        var $152=HEAP[$151]; //@line 1183 "_json.c"
        var $153=($152)!=93; //@line 1183 "_json.c"
        if ($153) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1183 "_json.c"
      case 36: // $bb37
        var $154=$pystr_addr; //@line 1184 "_json.c"
        var $155=$end_idx; //@line 1184 "_json.c"
        _raise_errmsg(__str33, $154, $155); //@line 1184 "_json.c"
        __label__ = 38; break; //@line 1184 "_json.c"
      case 37: // $bb38
        var $156=$idx_addr; //@line 1187 "_json.c"
        var $157=($156) + 1; //@line 1187 "_json.c"
        var $158=$next_idx_ptr_addr; //@line 1187 "_json.c"
        HEAP[$158]=$157; //@line 1187 "_json.c"
        var $159=$rval; //@line 1188 "_json.c"
        $0=$159; //@line 1188 "_json.c"
        __label__ = 44; break; //@line 1188 "_json.c"
      case 38: // $bail
        var $_pr=$val;
        var $160=($_pr)!=0; //@line 1190 "_json.c"
        if ($160) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 1190 "_json.c"
      case 39: // $bb39
        var $161=$val; //@line 1190 "_json.c"
        var $162=$161; //@line 1190 "_json.c"
        var $163=HEAP[$162]; //@line 1190 "_json.c"
        var $164=($163) - 1; //@line 1190 "_json.c"
        var $165=$val; //@line 1190 "_json.c"
        var $166=$165; //@line 1190 "_json.c"
        HEAP[$166]=$164; //@line 1190 "_json.c"
        var $167=$val; //@line 1190 "_json.c"
        var $168=$167; //@line 1190 "_json.c"
        var $169=HEAP[$168]; //@line 1190 "_json.c"
        var $170=($169)==0; //@line 1190 "_json.c"
        if ($170) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1190 "_json.c"
      case 40: // $bb40
        var $171=$val; //@line 1190 "_json.c"
        var $172=$171+4; //@line 1190 "_json.c"
        var $173=HEAP[$172]; //@line 1190 "_json.c"
        var $174=$173+24; //@line 1190 "_json.c"
        var $175=HEAP[$174]; //@line 1190 "_json.c"
        var $176=$val; //@line 1190 "_json.c"
        FUNCTION_TABLE[$175]($176); //@line 1190 "_json.c"
        __label__ = 41; break; //@line 1190 "_json.c"
      case 41: // $bb41
        var $177=$rval; //@line 1191 "_json.c"
        var $178=$177; //@line 1191 "_json.c"
        var $179=HEAP[$178]; //@line 1191 "_json.c"
        var $180=($179) - 1; //@line 1191 "_json.c"
        var $181=$rval; //@line 1191 "_json.c"
        var $182=$181; //@line 1191 "_json.c"
        HEAP[$182]=$180; //@line 1191 "_json.c"
        var $183=$rval; //@line 1191 "_json.c"
        var $184=$183; //@line 1191 "_json.c"
        var $185=HEAP[$184]; //@line 1191 "_json.c"
        var $186=($185)==0; //@line 1191 "_json.c"
        if ($186) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1191 "_json.c"
      case 42: // $bb42
        var $187=$rval; //@line 1191 "_json.c"
        var $188=$187+4; //@line 1191 "_json.c"
        var $189=HEAP[$188]; //@line 1191 "_json.c"
        var $190=$189+24; //@line 1191 "_json.c"
        var $191=HEAP[$190]; //@line 1191 "_json.c"
        var $192=$rval; //@line 1191 "_json.c"
        FUNCTION_TABLE[$191]($192); //@line 1191 "_json.c"
        __label__ = 43; break; //@line 1191 "_json.c"
      case 43: // $bb43
        $0=0; //@line 1192 "_json.c"
        __label__ = 44; break; //@line 1192 "_json.c"
      case 44: // $bb44
        var $193=$0; //@line 1143 "_json.c"
        $retval=$193; //@line 1143 "_json.c"
        var $retval45=$retval; //@line 1143 "_json.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 1143 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_array_unicode($s, $pystr, $idx, $next_idx_ptr) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $pystr_addr;
        var $idx_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $0;
        var $str;
        var $end_idx;
        var $val;
        var $rval;
        var $next_idx=__stackBase__;
        var $_py_tmp;
        $s_addr=$s;
        $pystr_addr=$pystr;
        $idx_addr=$idx;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $1=$pystr_addr; //@line 1204 "_json.c"
        var $2=$1; //@line 1204 "_json.c"
        var $3=$2+12; //@line 1204 "_json.c"
        var $4=HEAP[$3]; //@line 1204 "_json.c"
        $str=$4; //@line 1204 "_json.c"
        var $5=$pystr_addr; //@line 1205 "_json.c"
        var $6=$5; //@line 1205 "_json.c"
        var $7=$6+8; //@line 1205 "_json.c"
        var $8=HEAP[$7]; //@line 1205 "_json.c"
        var $9=($8) - 1; //@line 1205 "_json.c"
        $end_idx=$9; //@line 1205 "_json.c"
        $val=0; //@line 1206 "_json.c"
        var $10=_PyList_New(0); //@line 1207 "_json.c"
        $rval=$10; //@line 1207 "_json.c"
        var $11=$rval; //@line 1209 "_json.c"
        var $12=($11)==0; //@line 1209 "_json.c"
        if ($12) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1209 "_json.c"
      case 1: // $bb
        $0=0; //@line 1210 "_json.c"
        __label__ = 44; break; //@line 1210 "_json.c"
      case 2: // $bb2
        var $13=$idx_addr; //@line 1213 "_json.c"
        var $14=($13) + 1; //@line 1213 "_json.c"
        $idx_addr=$14; //@line 1213 "_json.c"
        __label__ = 3; break; //@line 1213 "_json.c"
      case 3: // $bb3
        var $15=$idx_addr; //@line 1213 "_json.c"
        var $16=$end_idx; //@line 1213 "_json.c"
        var $17=($15) > ($16); //@line 1213 "_json.c"
        if ($17) { __label__ = 8; break; } else { __label__ = 4; break; } //@line 1213 "_json.c"
      case 4: // $bb4
        var $18=$str; //@line 1213 "_json.c"
        var $19=$idx_addr; //@line 1213 "_json.c"
        var $20=$18+2*$19; //@line 1213 "_json.c"
        var $21=HEAP[$20]; //@line 1213 "_json.c"
        var $22=($21)==32; //@line 1213 "_json.c"
        if ($22) { __label__ = 2; break; } else { __label__ = 5; break; } //@line 1213 "_json.c"
      case 5: // $bb5
        var $23=$str; //@line 1213 "_json.c"
        var $24=$idx_addr; //@line 1213 "_json.c"
        var $25=$23+2*$24; //@line 1213 "_json.c"
        var $26=HEAP[$25]; //@line 1213 "_json.c"
        var $27=($26)==9; //@line 1213 "_json.c"
        if ($27) { __label__ = 2; break; } else { __label__ = 6; break; } //@line 1213 "_json.c"
      case 6: // $bb6
        var $28=$str; //@line 1213 "_json.c"
        var $29=$idx_addr; //@line 1213 "_json.c"
        var $30=$28+2*$29; //@line 1213 "_json.c"
        var $31=HEAP[$30]; //@line 1213 "_json.c"
        var $32=($31)==10; //@line 1213 "_json.c"
        if ($32) { __label__ = 2; break; } else { __label__ = 7; break; } //@line 1213 "_json.c"
      case 7: // $bb7
        var $33=$str; //@line 1213 "_json.c"
        var $34=$idx_addr; //@line 1213 "_json.c"
        var $35=$33+2*$34; //@line 1213 "_json.c"
        var $36=HEAP[$35]; //@line 1213 "_json.c"
        var $37=($36)==13; //@line 1213 "_json.c"
        if ($37) { __label__ = 2; break; } else { __label__ = 8; break; } //@line 1213 "_json.c"
      case 8: // $bb8
        var $38=$idx_addr; //@line 1216 "_json.c"
        var $39=$end_idx; //@line 1216 "_json.c"
        var $40=($38) <= ($39); //@line 1216 "_json.c"
        if ($40) { __label__ = 9; break; } else { __label__ = 34; break; } //@line 1216 "_json.c"
      case 9: // $bb9
        var $41=$str; //@line 1216 "_json.c"
        var $42=$idx_addr; //@line 1216 "_json.c"
        var $43=$41+2*$42; //@line 1216 "_json.c"
        var $44=HEAP[$43]; //@line 1216 "_json.c"
        var $45=($44)!=93; //@line 1216 "_json.c"
        if ($45) { __label__ = 33; break; } else { __label__ = 34; break; } //@line 1216 "_json.c"
      case 10: // $bb11
        var $46=$s_addr; //@line 1220 "_json.c"
        var $47=$pystr_addr; //@line 1220 "_json.c"
        var $48=$idx_addr; //@line 1220 "_json.c"
        var $49=_scan_once_unicode($46, $47, $48, $next_idx); //@line 1220 "_json.c"
        $val=$49; //@line 1220 "_json.c"
        var $50=$val; //@line 1221 "_json.c"
        var $51=($50)==0; //@line 1221 "_json.c"
        if ($51) { __label__ = 41; break; } else { __label__ = 11; break; } //@line 1221 "_json.c"
      case 11: // $bb12
        var $52=$rval; //@line 1224 "_json.c"
        var $53=$val; //@line 1224 "_json.c"
        var $54=_PyList_Append($52, $53); //@line 1224 "_json.c"
        var $55=($54)==-1; //@line 1224 "_json.c"
        if ($55) { __label__ = 38; break; } else { __label__ = 12; break; } //@line 1224 "_json.c"
      case 12: // $bb13
        var $56=$val; //@line 1227 "_json.c"
        var $57=($56)!=0; //@line 1227 "_json.c"
        if ($57) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 1227 "_json.c"
      case 13: // $bb14
        var $58=$val; //@line 1227 "_json.c"
        $_py_tmp=$58; //@line 1227 "_json.c"
        $val=0; //@line 1227 "_json.c"
        var $59=$_py_tmp; //@line 1227 "_json.c"
        var $60=$59; //@line 1227 "_json.c"
        var $61=HEAP[$60]; //@line 1227 "_json.c"
        var $62=($61) - 1; //@line 1227 "_json.c"
        var $63=$_py_tmp; //@line 1227 "_json.c"
        var $64=$63; //@line 1227 "_json.c"
        HEAP[$64]=$62; //@line 1227 "_json.c"
        var $65=$_py_tmp; //@line 1227 "_json.c"
        var $66=$65; //@line 1227 "_json.c"
        var $67=HEAP[$66]; //@line 1227 "_json.c"
        var $68=($67)==0; //@line 1227 "_json.c"
        if ($68) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1227 "_json.c"
      case 14: // $bb15
        var $69=$_py_tmp; //@line 1227 "_json.c"
        var $70=$69+4; //@line 1227 "_json.c"
        var $71=HEAP[$70]; //@line 1227 "_json.c"
        var $72=$71+24; //@line 1227 "_json.c"
        var $73=HEAP[$72]; //@line 1227 "_json.c"
        var $74=$_py_tmp; //@line 1227 "_json.c"
        FUNCTION_TABLE[$73]($74); //@line 1227 "_json.c"
        __label__ = 15; break; //@line 1227 "_json.c"
      case 15: // $bb16
        var $75=HEAP[$next_idx]; //@line 1228 "_json.c"
        $idx_addr=$75; //@line 1228 "_json.c"
        __label__ = 17; break; //@line 1228 "_json.c"
      case 16: // $bb17
        var $76=$idx_addr; //@line 1231 "_json.c"
        var $77=($76) + 1; //@line 1231 "_json.c"
        $idx_addr=$77; //@line 1231 "_json.c"
        __label__ = 17; break; //@line 1231 "_json.c"
      case 17: // $bb18
        var $78=$idx_addr; //@line 1231 "_json.c"
        var $79=$end_idx; //@line 1231 "_json.c"
        var $80=($78) > ($79); //@line 1231 "_json.c"
        if ($80) { __label__ = 22; break; } else { __label__ = 18; break; } //@line 1231 "_json.c"
      case 18: // $bb19
        var $81=$str; //@line 1231 "_json.c"
        var $82=$idx_addr; //@line 1231 "_json.c"
        var $83=$81+2*$82; //@line 1231 "_json.c"
        var $84=HEAP[$83]; //@line 1231 "_json.c"
        var $85=($84)==32; //@line 1231 "_json.c"
        if ($85) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 1231 "_json.c"
      case 19: // $bb20
        var $86=$str; //@line 1231 "_json.c"
        var $87=$idx_addr; //@line 1231 "_json.c"
        var $88=$86+2*$87; //@line 1231 "_json.c"
        var $89=HEAP[$88]; //@line 1231 "_json.c"
        var $90=($89)==9; //@line 1231 "_json.c"
        if ($90) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 1231 "_json.c"
      case 20: // $bb21
        var $91=$str; //@line 1231 "_json.c"
        var $92=$idx_addr; //@line 1231 "_json.c"
        var $93=$91+2*$92; //@line 1231 "_json.c"
        var $94=HEAP[$93]; //@line 1231 "_json.c"
        var $95=($94)==10; //@line 1231 "_json.c"
        if ($95) { __label__ = 16; break; } else { __label__ = 21; break; } //@line 1231 "_json.c"
      case 21: // $bb22
        var $96=$str; //@line 1231 "_json.c"
        var $97=$idx_addr; //@line 1231 "_json.c"
        var $98=$96+2*$97; //@line 1231 "_json.c"
        var $99=HEAP[$98]; //@line 1231 "_json.c"
        var $100=($99)==13; //@line 1231 "_json.c"
        if ($100) { __label__ = 16; break; } else { __label__ = 22; break; } //@line 1231 "_json.c"
      case 22: // $bb23
        var $101=$idx_addr; //@line 1234 "_json.c"
        var $102=$end_idx; //@line 1234 "_json.c"
        var $103=($101) > ($102); //@line 1234 "_json.c"
        if ($103) { __label__ = 34; break; } else { __label__ = 23; break; } //@line 1234 "_json.c"
      case 23: // $bb24
        var $104=$str; //@line 1235 "_json.c"
        var $105=$idx_addr; //@line 1235 "_json.c"
        var $106=$104+2*$105; //@line 1235 "_json.c"
        var $107=HEAP[$106]; //@line 1235 "_json.c"
        var $108=($107)==93; //@line 1235 "_json.c"
        if ($108) { __label__ = 34; break; } else { __label__ = 24; break; } //@line 1235 "_json.c"
      case 24: // $bb25
        var $109=$str; //@line 1238 "_json.c"
        var $110=$idx_addr; //@line 1238 "_json.c"
        var $111=$109+2*$110; //@line 1238 "_json.c"
        var $112=HEAP[$111]; //@line 1238 "_json.c"
        var $113=($112)!=44; //@line 1238 "_json.c"
        if ($113) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1238 "_json.c"
      case 25: // $bb26
        var $114=$pystr_addr; //@line 1239 "_json.c"
        var $115=$idx_addr; //@line 1239 "_json.c"
        _raise_errmsg(__str32, $114, $115); //@line 1239 "_json.c"
        __label__ = 38; break; //@line 1239 "_json.c"
      case 26: // $bb27
        var $116=$idx_addr; //@line 1242 "_json.c"
        var $117=($116) + 1; //@line 1242 "_json.c"
        $idx_addr=$117; //@line 1242 "_json.c"
        __label__ = 28; break; //@line 1242 "_json.c"
      case 27: // $bb28
        var $118=$idx_addr; //@line 1245 "_json.c"
        var $119=($118) + 1; //@line 1245 "_json.c"
        $idx_addr=$119; //@line 1245 "_json.c"
        __label__ = 28; break; //@line 1245 "_json.c"
      case 28: // $bb29
        var $120=$idx_addr; //@line 1245 "_json.c"
        var $121=$end_idx; //@line 1245 "_json.c"
        var $122=($120) > ($121); //@line 1245 "_json.c"
        if ($122) { __label__ = 33; break; } else { __label__ = 29; break; } //@line 1245 "_json.c"
      case 29: // $bb30
        var $123=$str; //@line 1245 "_json.c"
        var $124=$idx_addr; //@line 1245 "_json.c"
        var $125=$123+2*$124; //@line 1245 "_json.c"
        var $126=HEAP[$125]; //@line 1245 "_json.c"
        var $127=($126)==32; //@line 1245 "_json.c"
        if ($127) { __label__ = 27; break; } else { __label__ = 30; break; } //@line 1245 "_json.c"
      case 30: // $bb31
        var $128=$str; //@line 1245 "_json.c"
        var $129=$idx_addr; //@line 1245 "_json.c"
        var $130=$128+2*$129; //@line 1245 "_json.c"
        var $131=HEAP[$130]; //@line 1245 "_json.c"
        var $132=($131)==9; //@line 1245 "_json.c"
        if ($132) { __label__ = 27; break; } else { __label__ = 31; break; } //@line 1245 "_json.c"
      case 31: // $bb32
        var $133=$str; //@line 1245 "_json.c"
        var $134=$idx_addr; //@line 1245 "_json.c"
        var $135=$133+2*$134; //@line 1245 "_json.c"
        var $136=HEAP[$135]; //@line 1245 "_json.c"
        var $137=($136)==10; //@line 1245 "_json.c"
        if ($137) { __label__ = 27; break; } else { __label__ = 32; break; } //@line 1245 "_json.c"
      case 32: // $bb33
        var $138=$str; //@line 1245 "_json.c"
        var $139=$idx_addr; //@line 1245 "_json.c"
        var $140=$138+2*$139; //@line 1245 "_json.c"
        var $141=HEAP[$140]; //@line 1245 "_json.c"
        var $142=($141)==13; //@line 1245 "_json.c"
        if ($142) { __label__ = 27; break; } else { __label__ = 33; break; } //@line 1245 "_json.c"
      case 33: // $bb34
        var $143=$idx_addr; //@line 1217 "_json.c"
        var $144=$end_idx; //@line 1217 "_json.c"
        var $145=($143) <= ($144); //@line 1217 "_json.c"
        if ($145) { __label__ = 10; break; } else { __label__ = 34; break; } //@line 1217 "_json.c"
      case 34: // $bb35
        var $146=$idx_addr; //@line 1250 "_json.c"
        var $147=$end_idx; //@line 1250 "_json.c"
        var $148=($146) > ($147); //@line 1250 "_json.c"
        if ($148) { __label__ = 36; break; } else { __label__ = 35; break; } //@line 1250 "_json.c"
      case 35: // $bb36
        var $149=$str; //@line 1250 "_json.c"
        var $150=$idx_addr; //@line 1250 "_json.c"
        var $151=$149+2*$150; //@line 1250 "_json.c"
        var $152=HEAP[$151]; //@line 1250 "_json.c"
        var $153=($152)!=93; //@line 1250 "_json.c"
        if ($153) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1250 "_json.c"
      case 36: // $bb37
        var $154=$pystr_addr; //@line 1251 "_json.c"
        var $155=$end_idx; //@line 1251 "_json.c"
        _raise_errmsg(__str33, $154, $155); //@line 1251 "_json.c"
        __label__ = 38; break; //@line 1251 "_json.c"
      case 37: // $bb38
        var $156=$idx_addr; //@line 1254 "_json.c"
        var $157=($156) + 1; //@line 1254 "_json.c"
        var $158=$next_idx_ptr_addr; //@line 1254 "_json.c"
        HEAP[$158]=$157; //@line 1254 "_json.c"
        var $159=$rval; //@line 1255 "_json.c"
        $0=$159; //@line 1255 "_json.c"
        __label__ = 44; break; //@line 1255 "_json.c"
      case 38: // $bail
        var $_pr=$val;
        var $160=($_pr)!=0; //@line 1257 "_json.c"
        if ($160) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 1257 "_json.c"
      case 39: // $bb39
        var $161=$val; //@line 1257 "_json.c"
        var $162=$161; //@line 1257 "_json.c"
        var $163=HEAP[$162]; //@line 1257 "_json.c"
        var $164=($163) - 1; //@line 1257 "_json.c"
        var $165=$val; //@line 1257 "_json.c"
        var $166=$165; //@line 1257 "_json.c"
        HEAP[$166]=$164; //@line 1257 "_json.c"
        var $167=$val; //@line 1257 "_json.c"
        var $168=$167; //@line 1257 "_json.c"
        var $169=HEAP[$168]; //@line 1257 "_json.c"
        var $170=($169)==0; //@line 1257 "_json.c"
        if ($170) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1257 "_json.c"
      case 40: // $bb40
        var $171=$val; //@line 1257 "_json.c"
        var $172=$171+4; //@line 1257 "_json.c"
        var $173=HEAP[$172]; //@line 1257 "_json.c"
        var $174=$173+24; //@line 1257 "_json.c"
        var $175=HEAP[$174]; //@line 1257 "_json.c"
        var $176=$val; //@line 1257 "_json.c"
        FUNCTION_TABLE[$175]($176); //@line 1257 "_json.c"
        __label__ = 41; break; //@line 1257 "_json.c"
      case 41: // $bb41
        var $177=$rval; //@line 1258 "_json.c"
        var $178=$177; //@line 1258 "_json.c"
        var $179=HEAP[$178]; //@line 1258 "_json.c"
        var $180=($179) - 1; //@line 1258 "_json.c"
        var $181=$rval; //@line 1258 "_json.c"
        var $182=$181; //@line 1258 "_json.c"
        HEAP[$182]=$180; //@line 1258 "_json.c"
        var $183=$rval; //@line 1258 "_json.c"
        var $184=$183; //@line 1258 "_json.c"
        var $185=HEAP[$184]; //@line 1258 "_json.c"
        var $186=($185)==0; //@line 1258 "_json.c"
        if ($186) { __label__ = 42; break; } else { __label__ = 43; break; } //@line 1258 "_json.c"
      case 42: // $bb42
        var $187=$rval; //@line 1258 "_json.c"
        var $188=$187+4; //@line 1258 "_json.c"
        var $189=HEAP[$188]; //@line 1258 "_json.c"
        var $190=$189+24; //@line 1258 "_json.c"
        var $191=HEAP[$190]; //@line 1258 "_json.c"
        var $192=$rval; //@line 1258 "_json.c"
        FUNCTION_TABLE[$191]($192); //@line 1258 "_json.c"
        __label__ = 43; break; //@line 1258 "_json.c"
      case 43: // $bb43
        $0=0; //@line 1259 "_json.c"
        __label__ = 44; break; //@line 1259 "_json.c"
      case 44: // $bb44
        var $193=$0; //@line 1210 "_json.c"
        $retval=$193; //@line 1210 "_json.c"
        var $retval45=$retval; //@line 1210 "_json.c"
        STACKTOP = __stackBase__;
        return $retval45; //@line 1210 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __parse_constant($s, $constant, $idx, $next_idx_ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $constant_addr;
        var $idx_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $0;
        var $cstr;
        var $rval;
        $s_addr=$s;
        $constant_addr=$constant;
        $idx_addr=$idx;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $1=$constant_addr; //@line 1276 "_json.c"
        var $2=_PyString_InternFromString($1); //@line 1276 "_json.c"
        $cstr=$2; //@line 1276 "_json.c"
        var $3=$cstr; //@line 1277 "_json.c"
        var $4=($3)==0; //@line 1277 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1277 "_json.c"
      case 1: // $bb
        $0=0; //@line 1278 "_json.c"
        __label__ = 5; break; //@line 1278 "_json.c"
      case 2: // $bb1
        var $5=$s_addr; //@line 1281 "_json.c"
        var $6=$5+32; //@line 1281 "_json.c"
        var $7=HEAP[$6]; //@line 1281 "_json.c"
        var $8=$cstr; //@line 1281 "_json.c"
        var $9=_PyObject_CallFunctionObjArgs($7, allocate([$8,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1281 "_json.c"
        $rval=$9; //@line 1281 "_json.c"
        var $10=$cstr; //@line 1282 "_json.c"
        var $11=$10; //@line 1282 "_json.c"
        var $12=$11+8; //@line 1282 "_json.c"
        var $13=HEAP[$12]; //@line 1282 "_json.c"
        var $14=$idx_addr; //@line 1282 "_json.c"
        var $15=($14) + ($13); //@line 1282 "_json.c"
        $idx_addr=$15; //@line 1282 "_json.c"
        var $16=$cstr; //@line 1283 "_json.c"
        var $17=$16; //@line 1283 "_json.c"
        var $18=HEAP[$17]; //@line 1283 "_json.c"
        var $19=($18) - 1; //@line 1283 "_json.c"
        var $20=$cstr; //@line 1283 "_json.c"
        var $21=$20; //@line 1283 "_json.c"
        HEAP[$21]=$19; //@line 1283 "_json.c"
        var $22=$cstr; //@line 1283 "_json.c"
        var $23=$22; //@line 1283 "_json.c"
        var $24=HEAP[$23]; //@line 1283 "_json.c"
        var $25=($24)==0; //@line 1283 "_json.c"
        if ($25) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1283 "_json.c"
      case 3: // $bb2
        var $26=$cstr; //@line 1283 "_json.c"
        var $27=$26+4; //@line 1283 "_json.c"
        var $28=HEAP[$27]; //@line 1283 "_json.c"
        var $29=$28+24; //@line 1283 "_json.c"
        var $30=HEAP[$29]; //@line 1283 "_json.c"
        var $31=$cstr; //@line 1283 "_json.c"
        FUNCTION_TABLE[$30]($31); //@line 1283 "_json.c"
        __label__ = 4; break; //@line 1283 "_json.c"
      case 4: // $bb3
        var $32=$next_idx_ptr_addr; //@line 1284 "_json.c"
        var $33=$idx_addr; //@line 1284 "_json.c"
        HEAP[$32]=$33; //@line 1284 "_json.c"
        var $34=$rval; //@line 1285 "_json.c"
        $0=$34; //@line 1285 "_json.c"
        __label__ = 5; break; //@line 1285 "_json.c"
      case 5: // $bb4
        var $35=$0; //@line 1278 "_json.c"
        $retval=$35; //@line 1278 "_json.c"
        var $retval5=$retval; //@line 1278 "_json.c"
        ;
        return $retval5; //@line 1278 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __match_number_str($s, $pystr, $start, $next_idx_ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $pystr_addr;
        var $start_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $0;
        var $str;
        var $end_idx;
        var $idx;
        var $is_float;
        var $rval;
        var $numstr;
        var $e_start;
        var $d;
        $s_addr=$s;
        $pystr_addr=$pystr;
        $start_addr=$start;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $1=$pystr_addr; //@line 1299 "_json.c"
        var $2=$1; //@line 1299 "_json.c"
        var $3=$2+20; //@line 1299 "_json.c"
        var $4=$3; //@line 1299 "_json.c"
        $str=$4; //@line 1299 "_json.c"
        var $5=$pystr_addr; //@line 1300 "_json.c"
        var $6=$5; //@line 1300 "_json.c"
        var $7=$6+8; //@line 1300 "_json.c"
        var $8=HEAP[$7]; //@line 1300 "_json.c"
        var $9=($8) - 1; //@line 1300 "_json.c"
        $end_idx=$9; //@line 1300 "_json.c"
        var $10=$start_addr; //@line 1301 "_json.c"
        $idx=$10; //@line 1301 "_json.c"
        $is_float=0; //@line 1302 "_json.c"
        var $11=$str; //@line 1307 "_json.c"
        var $12=$idx; //@line 1307 "_json.c"
        var $13=$11+$12; //@line 1307 "_json.c"
        var $14=HEAP[$13]; //@line 1307 "_json.c"
        var $15=($14)==45; //@line 1307 "_json.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1307 "_json.c"
      case 1: // $bb
        var $16=$idx; //@line 1308 "_json.c"
        var $17=($16) + 1; //@line 1308 "_json.c"
        $idx=$17; //@line 1308 "_json.c"
        var $18=$idx; //@line 1309 "_json.c"
        var $19=$end_idx; //@line 1309 "_json.c"
        var $20=($18) > ($19); //@line 1309 "_json.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1309 "_json.c"
      case 2: // $bb1
        var $21=HEAP[_PyExc_StopIteration]; //@line 1310 "_json.c"
        _PyErr_SetNone($21); //@line 1310 "_json.c"
        $0=0; //@line 1311 "_json.c"
        __label__ = 52; break; //@line 1311 "_json.c"
      case 3: // $bb2
        var $22=$str; //@line 1316 "_json.c"
        var $23=$idx; //@line 1316 "_json.c"
        var $24=$22+$23; //@line 1316 "_json.c"
        var $25=HEAP[$24]; //@line 1316 "_json.c"
        var $26=($25) <= 48; //@line 1316 "_json.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 4; break; } //@line 1316 "_json.c"
      case 4: // $bb3
        var $27=$str; //@line 1316 "_json.c"
        var $28=$idx; //@line 1316 "_json.c"
        var $29=$27+$28; //@line 1316 "_json.c"
        var $30=HEAP[$29]; //@line 1316 "_json.c"
        var $31=($30) > 57; //@line 1316 "_json.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 5; break; } //@line 1316 "_json.c"
      case 5: // $bb4
        var $32=$idx; //@line 1317 "_json.c"
        var $33=($32) + 1; //@line 1317 "_json.c"
        $idx=$33; //@line 1317 "_json.c"
        __label__ = 7; break; //@line 1317 "_json.c"
      case 6: // $bb5
        var $34=$idx; //@line 1318 "_json.c"
        var $35=($34) + 1; //@line 1318 "_json.c"
        $idx=$35; //@line 1318 "_json.c"
        __label__ = 7; break; //@line 1318 "_json.c"
      case 7: // $bb6
        var $36=$idx; //@line 1318 "_json.c"
        var $37=$end_idx; //@line 1318 "_json.c"
        var $38=($36) > ($37); //@line 1318 "_json.c"
        if ($38) { __label__ = 13; break; } else { __label__ = 8; break; } //@line 1318 "_json.c"
      case 8: // $bb7
        var $39=$str; //@line 1318 "_json.c"
        var $40=$idx; //@line 1318 "_json.c"
        var $41=$39+$40; //@line 1318 "_json.c"
        var $42=HEAP[$41]; //@line 1318 "_json.c"
        var $43=($42) <= 47; //@line 1318 "_json.c"
        if ($43) { __label__ = 13; break; } else { __label__ = 9; break; } //@line 1318 "_json.c"
      case 9: // $bb8
        var $44=$str; //@line 1318 "_json.c"
        var $45=$idx; //@line 1318 "_json.c"
        var $46=$44+$45; //@line 1318 "_json.c"
        var $47=HEAP[$46]; //@line 1318 "_json.c"
        var $48=($47) <= 57; //@line 1318 "_json.c"
        if ($48) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 1318 "_json.c"
      case 10: // $bb10
        var $49=$str; //@line 1321 "_json.c"
        var $50=$idx; //@line 1321 "_json.c"
        var $51=$49+$50; //@line 1321 "_json.c"
        var $52=HEAP[$51]; //@line 1321 "_json.c"
        var $53=($52)==48; //@line 1321 "_json.c"
        if ($53) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1321 "_json.c"
      case 11: // $bb11
        var $54=$idx; //@line 1322 "_json.c"
        var $55=($54) + 1; //@line 1322 "_json.c"
        $idx=$55; //@line 1322 "_json.c"
        __label__ = 13; break; //@line 1322 "_json.c"
      case 12: // $bb12
        var $56=HEAP[_PyExc_StopIteration]; //@line 1326 "_json.c"
        _PyErr_SetNone($56); //@line 1326 "_json.c"
        $0=0; //@line 1327 "_json.c"
        __label__ = 52; break; //@line 1327 "_json.c"
      case 13: // $bb13
        var $57=$idx; //@line 1331 "_json.c"
        var $58=$end_idx; //@line 1331 "_json.c"
        var $59=($57) < ($58); //@line 1331 "_json.c"
        if ($59) { __label__ = 14; break; } else { __label__ = 22; break; } //@line 1331 "_json.c"
      case 14: // $bb14
        var $60=$str; //@line 1331 "_json.c"
        var $61=$idx; //@line 1331 "_json.c"
        var $62=$60+$61; //@line 1331 "_json.c"
        var $63=HEAP[$62]; //@line 1331 "_json.c"
        var $64=($63)==46; //@line 1331 "_json.c"
        if ($64) { __label__ = 15; break; } else { __label__ = 22; break; } //@line 1331 "_json.c"
      case 15: // $bb15
        var $65=$idx; //@line 1331 "_json.c"
        var $66=($65) + 1; //@line 1331 "_json.c"
        var $67=$str; //@line 1331 "_json.c"
        var $68=$67+$66; //@line 1331 "_json.c"
        var $69=HEAP[$68]; //@line 1331 "_json.c"
        var $70=($69) > 47; //@line 1331 "_json.c"
        if ($70) { __label__ = 16; break; } else { __label__ = 22; break; } //@line 1331 "_json.c"
      case 16: // $bb16
        var $71=$idx; //@line 1331 "_json.c"
        var $72=($71) + 1; //@line 1331 "_json.c"
        var $73=$str; //@line 1331 "_json.c"
        var $74=$73+$72; //@line 1331 "_json.c"
        var $75=HEAP[$74]; //@line 1331 "_json.c"
        var $76=($75) <= 57; //@line 1331 "_json.c"
        if ($76) { __label__ = 17; break; } else { __label__ = 22; break; } //@line 1331 "_json.c"
      case 17: // $bb17
        $is_float=1; //@line 1332 "_json.c"
        var $77=$idx; //@line 1333 "_json.c"
        var $78=($77) + 2; //@line 1333 "_json.c"
        $idx=$78; //@line 1333 "_json.c"
        __label__ = 19; break; //@line 1333 "_json.c"
      case 18: // $bb18
        var $79=$idx; //@line 1334 "_json.c"
        var $80=($79) + 1; //@line 1334 "_json.c"
        $idx=$80; //@line 1334 "_json.c"
        __label__ = 19; break; //@line 1334 "_json.c"
      case 19: // $bb19
        var $81=$idx; //@line 1334 "_json.c"
        var $82=$end_idx; //@line 1334 "_json.c"
        var $83=($81) > ($82); //@line 1334 "_json.c"
        if ($83) { __label__ = 22; break; } else { __label__ = 20; break; } //@line 1334 "_json.c"
      case 20: // $bb20
        var $84=$str; //@line 1334 "_json.c"
        var $85=$idx; //@line 1334 "_json.c"
        var $86=$84+$85; //@line 1334 "_json.c"
        var $87=HEAP[$86]; //@line 1334 "_json.c"
        var $88=($87) <= 47; //@line 1334 "_json.c"
        if ($88) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1334 "_json.c"
      case 21: // $bb21
        var $89=$str; //@line 1334 "_json.c"
        var $90=$idx; //@line 1334 "_json.c"
        var $91=$89+$90; //@line 1334 "_json.c"
        var $92=HEAP[$91]; //@line 1334 "_json.c"
        var $93=($92) <= 57; //@line 1334 "_json.c"
        if ($93) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 1334 "_json.c"
      case 22: // $bb22
        var $94=$idx; //@line 1338 "_json.c"
        var $95=$end_idx; //@line 1338 "_json.c"
        var $96=($94) < ($95); //@line 1338 "_json.c"
        if ($96) { __label__ = 23; break; } else { __label__ = 37; break; } //@line 1338 "_json.c"
      case 23: // $bb23
        var $97=$str; //@line 1338 "_json.c"
        var $98=$idx; //@line 1338 "_json.c"
        var $99=$97+$98; //@line 1338 "_json.c"
        var $100=HEAP[$99]; //@line 1338 "_json.c"
        var $101=($100)==101; //@line 1338 "_json.c"
        if ($101) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1338 "_json.c"
      case 24: // $bb24
        var $102=$str; //@line 1338 "_json.c"
        var $103=$idx; //@line 1338 "_json.c"
        var $104=$102+$103; //@line 1338 "_json.c"
        var $105=HEAP[$104]; //@line 1338 "_json.c"
        var $106=($105)==69; //@line 1338 "_json.c"
        if ($106) { __label__ = 25; break; } else { __label__ = 37; break; } //@line 1338 "_json.c"
      case 25: // $bb25
        var $107=$idx; //@line 1341 "_json.c"
        $e_start=$107; //@line 1341 "_json.c"
        var $108=$idx; //@line 1342 "_json.c"
        var $109=($108) + 1; //@line 1342 "_json.c"
        $idx=$109; //@line 1342 "_json.c"
        var $110=$idx; //@line 1345 "_json.c"
        var $111=$end_idx; //@line 1345 "_json.c"
        var $112=($110) < ($111); //@line 1345 "_json.c"
        if ($112) { __label__ = 26; break; } else { __label__ = 30; break; } //@line 1345 "_json.c"
      case 26: // $bb26
        var $113=$str; //@line 1345 "_json.c"
        var $114=$idx; //@line 1345 "_json.c"
        var $115=$113+$114; //@line 1345 "_json.c"
        var $116=HEAP[$115]; //@line 1345 "_json.c"
        var $117=($116)==45; //@line 1345 "_json.c"
        if ($117) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 1345 "_json.c"
      case 27: // $bb27
        var $118=$str; //@line 1345 "_json.c"
        var $119=$idx; //@line 1345 "_json.c"
        var $120=$118+$119; //@line 1345 "_json.c"
        var $121=HEAP[$120]; //@line 1345 "_json.c"
        var $122=($121)==43; //@line 1345 "_json.c"
        if ($122) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 1345 "_json.c"
      case 28: // $bb28
        var $123=$idx; //@line 1345 "_json.c"
        var $124=($123) + 1; //@line 1345 "_json.c"
        $idx=$124; //@line 1345 "_json.c"
        __label__ = 30; break; //@line 1345 "_json.c"
      case 29: // $bb30
        var $125=$idx; //@line 1348 "_json.c"
        var $126=($125) + 1; //@line 1348 "_json.c"
        $idx=$126; //@line 1348 "_json.c"
        __label__ = 30; break; //@line 1348 "_json.c"
      case 30: // $bb31
        var $127=$idx; //@line 1348 "_json.c"
        var $128=$end_idx; //@line 1348 "_json.c"
        var $129=($127) > ($128); //@line 1348 "_json.c"
        if ($129) { __label__ = 33; break; } else { __label__ = 31; break; } //@line 1348 "_json.c"
      case 31: // $bb32
        var $130=$str; //@line 1348 "_json.c"
        var $131=$idx; //@line 1348 "_json.c"
        var $132=$130+$131; //@line 1348 "_json.c"
        var $133=HEAP[$132]; //@line 1348 "_json.c"
        var $134=($133) <= 47; //@line 1348 "_json.c"
        if ($134) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 1348 "_json.c"
      case 32: // $bb33
        var $135=$str; //@line 1348 "_json.c"
        var $136=$idx; //@line 1348 "_json.c"
        var $137=$135+$136; //@line 1348 "_json.c"
        var $138=HEAP[$137]; //@line 1348 "_json.c"
        var $139=($138) <= 57; //@line 1348 "_json.c"
        if ($139) { __label__ = 29; break; } else { __label__ = 33; break; } //@line 1348 "_json.c"
      case 33: // $bb34
        var $140=$idx; //@line 1351 "_json.c"
        var $141=($140) - 1; //@line 1351 "_json.c"
        var $142=$str; //@line 1351 "_json.c"
        var $143=$142+$141; //@line 1351 "_json.c"
        var $144=HEAP[$143]; //@line 1351 "_json.c"
        var $145=($144) <= 47; //@line 1351 "_json.c"
        if ($145) { __label__ = 36; break; } else { __label__ = 34; break; } //@line 1351 "_json.c"
      case 34: // $bb35
        var $146=$idx; //@line 1351 "_json.c"
        var $147=($146) - 1; //@line 1351 "_json.c"
        var $148=$str; //@line 1351 "_json.c"
        var $149=$148+$147; //@line 1351 "_json.c"
        var $150=HEAP[$149]; //@line 1351 "_json.c"
        var $151=($150) > 57; //@line 1351 "_json.c"
        if ($151) { __label__ = 36; break; } else { __label__ = 35; break; } //@line 1351 "_json.c"
      case 35: // $bb36
        $is_float=1; //@line 1352 "_json.c"
        __label__ = 37; break; //@line 1352 "_json.c"
      case 36: // $bb37
        var $152=$e_start; //@line 1355 "_json.c"
        $idx=$152; //@line 1355 "_json.c"
        __label__ = 37; break; //@line 1355 "_json.c"
      case 37: // $bb38
        var $153=$idx; //@line 1360 "_json.c"
        var $154=$start_addr; //@line 1360 "_json.c"
        var $155=($153) - ($154); //@line 1360 "_json.c"
        var $156=$str; //@line 1360 "_json.c"
        var $157=$start_addr; //@line 1360 "_json.c"
        var $158=$156+$157; //@line 1360 "_json.c"
        var $159=_PyString_FromStringAndSize($158, $155); //@line 1360 "_json.c"
        $numstr=$159; //@line 1360 "_json.c"
        var $160=($159)==0; //@line 1361 "_json.c"
        if ($160) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1361 "_json.c"
      case 38: // $bb39
        $0=0; //@line 1362 "_json.c"
        __label__ = 52; break; //@line 1362 "_json.c"
      case 39: // $bb40
        var $161=$is_float; //@line 1363 "_json.c"
        var $162=($161)!=0; //@line 1363 "_json.c"
        var $163=$s_addr; //@line 1365 "_json.c"
        if ($162) { __label__ = 40; break; } else { __label__ = 46; break; } //@line 1363 "_json.c"
      case 40: // $bb41
        var $164=$163+24; //@line 1365 "_json.c"
        var $165=HEAP[$164]; //@line 1365 "_json.c"
        var $166=($165)!=(_PyFloat_Type); //@line 1365 "_json.c"
        if ($166) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1365 "_json.c"
      case 41: // $bb42
        var $167=$s_addr; //@line 1366 "_json.c"
        var $168=$167+24; //@line 1366 "_json.c"
        var $169=HEAP[$168]; //@line 1366 "_json.c"
        var $170=$numstr; //@line 1366 "_json.c"
        var $171=_PyObject_CallFunctionObjArgs($169, allocate([$170,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1366 "_json.c"
        $rval=$171; //@line 1366 "_json.c"
        __label__ = 49; break; //@line 1366 "_json.c"
      case 42: // $bb43
        var $172=$numstr; //@line 1370 "_json.c"
        var $173=$172; //@line 1370 "_json.c"
        var $174=$173+20; //@line 1370 "_json.c"
        var $175=$174; //@line 1370 "_json.c"
        var $176=_PyOS_string_to_double($175, 0, 0); //@line 1370 "_json.c"
        $d=$176; //@line 1370 "_json.c"
        var $177=$d; //@line 1371 "_json.c"
        var $178=($177) == -1; //@line 1371 "_json.c"
        if ($178) { __label__ = 43; break; } else { __label__ = 45; break; } //@line 1371 "_json.c"
      case 43: // $bb44
        var $179=_PyErr_Occurred(); //@line 1371 "_json.c"
        var $180=($179)!=0; //@line 1371 "_json.c"
        if ($180) { __label__ = 44; break; } else { __label__ = 45; break; } //@line 1371 "_json.c"
      case 44: // $bb45
        $0=0; //@line 1372 "_json.c"
        __label__ = 52; break; //@line 1372 "_json.c"
      case 45: // $bb46
        var $181=$d; //@line 1373 "_json.c"
        var $182=_PyFloat_FromDouble($181); //@line 1373 "_json.c"
        $rval=$182; //@line 1373 "_json.c"
        __label__ = 49; break; //@line 1373 "_json.c"
      case 46: // $bb48
        var $183=$163+28; //@line 1378 "_json.c"
        var $184=HEAP[$183]; //@line 1378 "_json.c"
        var $185=($184)!=(_PyInt_Type); //@line 1378 "_json.c"
        if ($185) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 1378 "_json.c"
      case 47: // $bb49
        var $186=$s_addr; //@line 1379 "_json.c"
        var $187=$186+28; //@line 1379 "_json.c"
        var $188=HEAP[$187]; //@line 1379 "_json.c"
        var $189=$numstr; //@line 1379 "_json.c"
        var $190=_PyObject_CallFunctionObjArgs($188, allocate([$189,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1379 "_json.c"
        $rval=$190; //@line 1379 "_json.c"
        __label__ = 49; break; //@line 1379 "_json.c"
      case 48: // $bb50
        var $191=$numstr; //@line 1382 "_json.c"
        var $192=$191; //@line 1382 "_json.c"
        var $193=$192+20; //@line 1382 "_json.c"
        var $194=$193; //@line 1382 "_json.c"
        var $195=_PyInt_FromString($194, 0, 10); //@line 1382 "_json.c"
        $rval=$195; //@line 1382 "_json.c"
        __label__ = 49; break; //@line 1382 "_json.c"
      case 49: // $bb51
        var $196=$numstr; //@line 1385 "_json.c"
        var $197=$196; //@line 1385 "_json.c"
        var $198=HEAP[$197]; //@line 1385 "_json.c"
        var $199=($198) - 1; //@line 1385 "_json.c"
        var $200=$numstr; //@line 1385 "_json.c"
        var $201=$200; //@line 1385 "_json.c"
        HEAP[$201]=$199; //@line 1385 "_json.c"
        var $202=$numstr; //@line 1385 "_json.c"
        var $203=$202; //@line 1385 "_json.c"
        var $204=HEAP[$203]; //@line 1385 "_json.c"
        var $205=($204)==0; //@line 1385 "_json.c"
        if ($205) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1385 "_json.c"
      case 50: // $bb52
        var $206=$numstr; //@line 1385 "_json.c"
        var $207=$206+4; //@line 1385 "_json.c"
        var $208=HEAP[$207]; //@line 1385 "_json.c"
        var $209=$208+24; //@line 1385 "_json.c"
        var $210=HEAP[$209]; //@line 1385 "_json.c"
        var $211=$numstr; //@line 1385 "_json.c"
        FUNCTION_TABLE[$210]($211); //@line 1385 "_json.c"
        __label__ = 51; break; //@line 1385 "_json.c"
      case 51: // $bb53
        var $212=$next_idx_ptr_addr; //@line 1386 "_json.c"
        var $213=$idx; //@line 1386 "_json.c"
        HEAP[$212]=$213; //@line 1386 "_json.c"
        var $214=$rval; //@line 1387 "_json.c"
        $0=$214; //@line 1387 "_json.c"
        __label__ = 52; break; //@line 1387 "_json.c"
      case 52: // $bb54
        var $215=$0; //@line 1311 "_json.c"
        $retval=$215; //@line 1311 "_json.c"
        var $retval55=$retval; //@line 1311 "_json.c"
        ;
        return $retval55; //@line 1311 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __match_number_unicode($s, $pystr, $start, $next_idx_ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $pystr_addr;
        var $start_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $0;
        var $str;
        var $end_idx;
        var $idx;
        var $is_float;
        var $rval;
        var $numstr;
        var $e_start;
        $s_addr=$s;
        $pystr_addr=$pystr;
        $start_addr=$start;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $1=$pystr_addr; //@line 1401 "_json.c"
        var $2=$1; //@line 1401 "_json.c"
        var $3=$2+12; //@line 1401 "_json.c"
        var $4=HEAP[$3]; //@line 1401 "_json.c"
        $str=$4; //@line 1401 "_json.c"
        var $5=$pystr_addr; //@line 1402 "_json.c"
        var $6=$5; //@line 1402 "_json.c"
        var $7=$6+8; //@line 1402 "_json.c"
        var $8=HEAP[$7]; //@line 1402 "_json.c"
        var $9=($8) - 1; //@line 1402 "_json.c"
        $end_idx=$9; //@line 1402 "_json.c"
        var $10=$start_addr; //@line 1403 "_json.c"
        $idx=$10; //@line 1403 "_json.c"
        $is_float=0; //@line 1404 "_json.c"
        var $11=$str; //@line 1409 "_json.c"
        var $12=$idx; //@line 1409 "_json.c"
        var $13=$11+2*$12; //@line 1409 "_json.c"
        var $14=HEAP[$13]; //@line 1409 "_json.c"
        var $15=($14)==45; //@line 1409 "_json.c"
        if ($15) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1409 "_json.c"
      case 1: // $bb
        var $16=$idx; //@line 1410 "_json.c"
        var $17=($16) + 1; //@line 1410 "_json.c"
        $idx=$17; //@line 1410 "_json.c"
        var $18=$idx; //@line 1411 "_json.c"
        var $19=$end_idx; //@line 1411 "_json.c"
        var $20=($18) > ($19); //@line 1411 "_json.c"
        if ($20) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1411 "_json.c"
      case 2: // $bb1
        var $21=HEAP[_PyExc_StopIteration]; //@line 1412 "_json.c"
        _PyErr_SetNone($21); //@line 1412 "_json.c"
        $0=0; //@line 1413 "_json.c"
        __label__ = 47; break; //@line 1413 "_json.c"
      case 3: // $bb2
        var $22=$str; //@line 1418 "_json.c"
        var $23=$idx; //@line 1418 "_json.c"
        var $24=$22+2*$23; //@line 1418 "_json.c"
        var $25=HEAP[$24]; //@line 1418 "_json.c"
        var $26=($25) <= 48; //@line 1418 "_json.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 4; break; } //@line 1418 "_json.c"
      case 4: // $bb3
        var $27=$str; //@line 1418 "_json.c"
        var $28=$idx; //@line 1418 "_json.c"
        var $29=$27+2*$28; //@line 1418 "_json.c"
        var $30=HEAP[$29]; //@line 1418 "_json.c"
        var $31=($30) > 57; //@line 1418 "_json.c"
        if ($31) { __label__ = 10; break; } else { __label__ = 5; break; } //@line 1418 "_json.c"
      case 5: // $bb4
        var $32=$idx; //@line 1419 "_json.c"
        var $33=($32) + 1; //@line 1419 "_json.c"
        $idx=$33; //@line 1419 "_json.c"
        __label__ = 7; break; //@line 1419 "_json.c"
      case 6: // $bb5
        var $34=$idx; //@line 1420 "_json.c"
        var $35=($34) + 1; //@line 1420 "_json.c"
        $idx=$35; //@line 1420 "_json.c"
        __label__ = 7; break; //@line 1420 "_json.c"
      case 7: // $bb6
        var $36=$idx; //@line 1420 "_json.c"
        var $37=$end_idx; //@line 1420 "_json.c"
        var $38=($36) > ($37); //@line 1420 "_json.c"
        if ($38) { __label__ = 13; break; } else { __label__ = 8; break; } //@line 1420 "_json.c"
      case 8: // $bb7
        var $39=$str; //@line 1420 "_json.c"
        var $40=$idx; //@line 1420 "_json.c"
        var $41=$39+2*$40; //@line 1420 "_json.c"
        var $42=HEAP[$41]; //@line 1420 "_json.c"
        var $43=($42) <= 47; //@line 1420 "_json.c"
        if ($43) { __label__ = 13; break; } else { __label__ = 9; break; } //@line 1420 "_json.c"
      case 9: // $bb8
        var $44=$str; //@line 1420 "_json.c"
        var $45=$idx; //@line 1420 "_json.c"
        var $46=$44+2*$45; //@line 1420 "_json.c"
        var $47=HEAP[$46]; //@line 1420 "_json.c"
        var $48=($47) <= 57; //@line 1420 "_json.c"
        if ($48) { __label__ = 6; break; } else { __label__ = 13; break; } //@line 1420 "_json.c"
      case 10: // $bb10
        var $49=$str; //@line 1423 "_json.c"
        var $50=$idx; //@line 1423 "_json.c"
        var $51=$49+2*$50; //@line 1423 "_json.c"
        var $52=HEAP[$51]; //@line 1423 "_json.c"
        var $53=($52)==48; //@line 1423 "_json.c"
        if ($53) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 1423 "_json.c"
      case 11: // $bb11
        var $54=$idx; //@line 1424 "_json.c"
        var $55=($54) + 1; //@line 1424 "_json.c"
        $idx=$55; //@line 1424 "_json.c"
        __label__ = 13; break; //@line 1424 "_json.c"
      case 12: // $bb12
        var $56=HEAP[_PyExc_StopIteration]; //@line 1428 "_json.c"
        _PyErr_SetNone($56); //@line 1428 "_json.c"
        $0=0; //@line 1429 "_json.c"
        __label__ = 47; break; //@line 1429 "_json.c"
      case 13: // $bb13
        var $57=$idx; //@line 1433 "_json.c"
        var $58=$end_idx; //@line 1433 "_json.c"
        var $59=($57) < ($58); //@line 1433 "_json.c"
        if ($59) { __label__ = 14; break; } else { __label__ = 22; break; } //@line 1433 "_json.c"
      case 14: // $bb14
        var $60=$str; //@line 1433 "_json.c"
        var $61=$idx; //@line 1433 "_json.c"
        var $62=$60+2*$61; //@line 1433 "_json.c"
        var $63=HEAP[$62]; //@line 1433 "_json.c"
        var $64=($63)==46; //@line 1433 "_json.c"
        if ($64) { __label__ = 15; break; } else { __label__ = 22; break; } //@line 1433 "_json.c"
      case 15: // $bb15
        var $65=$idx; //@line 1433 "_json.c"
        var $66=($65) + 1; //@line 1433 "_json.c"
        var $67=$str; //@line 1433 "_json.c"
        var $68=$67+2*$66; //@line 1433 "_json.c"
        var $69=HEAP[$68]; //@line 1433 "_json.c"
        var $70=($69) > 47; //@line 1433 "_json.c"
        if ($70) { __label__ = 16; break; } else { __label__ = 22; break; } //@line 1433 "_json.c"
      case 16: // $bb16
        var $71=$idx; //@line 1433 "_json.c"
        var $72=($71) + 1; //@line 1433 "_json.c"
        var $73=$str; //@line 1433 "_json.c"
        var $74=$73+2*$72; //@line 1433 "_json.c"
        var $75=HEAP[$74]; //@line 1433 "_json.c"
        var $76=($75) <= 57; //@line 1433 "_json.c"
        if ($76) { __label__ = 17; break; } else { __label__ = 22; break; } //@line 1433 "_json.c"
      case 17: // $bb17
        $is_float=1; //@line 1434 "_json.c"
        var $77=$idx; //@line 1435 "_json.c"
        var $78=($77) + 2; //@line 1435 "_json.c"
        $idx=$78; //@line 1435 "_json.c"
        __label__ = 19; break; //@line 1435 "_json.c"
      case 18: // $bb18
        var $79=$idx; //@line 1436 "_json.c"
        var $80=($79) + 1; //@line 1436 "_json.c"
        $idx=$80; //@line 1436 "_json.c"
        __label__ = 19; break; //@line 1436 "_json.c"
      case 19: // $bb19
        var $81=$idx; //@line 1436 "_json.c"
        var $82=$end_idx; //@line 1436 "_json.c"
        var $83=($81) > ($82); //@line 1436 "_json.c"
        if ($83) { __label__ = 22; break; } else { __label__ = 20; break; } //@line 1436 "_json.c"
      case 20: // $bb20
        var $84=$str; //@line 1436 "_json.c"
        var $85=$idx; //@line 1436 "_json.c"
        var $86=$84+2*$85; //@line 1436 "_json.c"
        var $87=HEAP[$86]; //@line 1436 "_json.c"
        var $88=($87) <= 47; //@line 1436 "_json.c"
        if ($88) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1436 "_json.c"
      case 21: // $bb21
        var $89=$str; //@line 1436 "_json.c"
        var $90=$idx; //@line 1436 "_json.c"
        var $91=$89+2*$90; //@line 1436 "_json.c"
        var $92=HEAP[$91]; //@line 1436 "_json.c"
        var $93=($92) <= 57; //@line 1436 "_json.c"
        if ($93) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 1436 "_json.c"
      case 22: // $bb22
        var $94=$idx; //@line 1440 "_json.c"
        var $95=$end_idx; //@line 1440 "_json.c"
        var $96=($94) < ($95); //@line 1440 "_json.c"
        if ($96) { __label__ = 23; break; } else { __label__ = 37; break; } //@line 1440 "_json.c"
      case 23: // $bb23
        var $97=$str; //@line 1440 "_json.c"
        var $98=$idx; //@line 1440 "_json.c"
        var $99=$97+2*$98; //@line 1440 "_json.c"
        var $100=HEAP[$99]; //@line 1440 "_json.c"
        var $101=($100)==101; //@line 1440 "_json.c"
        if ($101) { __label__ = 25; break; } else { __label__ = 24; break; } //@line 1440 "_json.c"
      case 24: // $bb24
        var $102=$str; //@line 1440 "_json.c"
        var $103=$idx; //@line 1440 "_json.c"
        var $104=$102+2*$103; //@line 1440 "_json.c"
        var $105=HEAP[$104]; //@line 1440 "_json.c"
        var $106=($105)==69; //@line 1440 "_json.c"
        if ($106) { __label__ = 25; break; } else { __label__ = 37; break; } //@line 1440 "_json.c"
      case 25: // $bb25
        var $107=$idx; //@line 1441 "_json.c"
        $e_start=$107; //@line 1441 "_json.c"
        var $108=$idx; //@line 1442 "_json.c"
        var $109=($108) + 1; //@line 1442 "_json.c"
        $idx=$109; //@line 1442 "_json.c"
        var $110=$idx; //@line 1445 "_json.c"
        var $111=$end_idx; //@line 1445 "_json.c"
        var $112=($110) < ($111); //@line 1445 "_json.c"
        if ($112) { __label__ = 26; break; } else { __label__ = 30; break; } //@line 1445 "_json.c"
      case 26: // $bb26
        var $113=$str; //@line 1445 "_json.c"
        var $114=$idx; //@line 1445 "_json.c"
        var $115=$113+2*$114; //@line 1445 "_json.c"
        var $116=HEAP[$115]; //@line 1445 "_json.c"
        var $117=($116)==45; //@line 1445 "_json.c"
        if ($117) { __label__ = 28; break; } else { __label__ = 27; break; } //@line 1445 "_json.c"
      case 27: // $bb27
        var $118=$str; //@line 1445 "_json.c"
        var $119=$idx; //@line 1445 "_json.c"
        var $120=$118+2*$119; //@line 1445 "_json.c"
        var $121=HEAP[$120]; //@line 1445 "_json.c"
        var $122=($121)==43; //@line 1445 "_json.c"
        if ($122) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 1445 "_json.c"
      case 28: // $bb28
        var $123=$idx; //@line 1445 "_json.c"
        var $124=($123) + 1; //@line 1445 "_json.c"
        $idx=$124; //@line 1445 "_json.c"
        __label__ = 30; break; //@line 1445 "_json.c"
      case 29: // $bb30
        var $125=$idx; //@line 1448 "_json.c"
        var $126=($125) + 1; //@line 1448 "_json.c"
        $idx=$126; //@line 1448 "_json.c"
        __label__ = 30; break; //@line 1448 "_json.c"
      case 30: // $bb31
        var $127=$idx; //@line 1448 "_json.c"
        var $128=$end_idx; //@line 1448 "_json.c"
        var $129=($127) > ($128); //@line 1448 "_json.c"
        if ($129) { __label__ = 33; break; } else { __label__ = 31; break; } //@line 1448 "_json.c"
      case 31: // $bb32
        var $130=$str; //@line 1448 "_json.c"
        var $131=$idx; //@line 1448 "_json.c"
        var $132=$130+2*$131; //@line 1448 "_json.c"
        var $133=HEAP[$132]; //@line 1448 "_json.c"
        var $134=($133) <= 47; //@line 1448 "_json.c"
        if ($134) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 1448 "_json.c"
      case 32: // $bb33
        var $135=$str; //@line 1448 "_json.c"
        var $136=$idx; //@line 1448 "_json.c"
        var $137=$135+2*$136; //@line 1448 "_json.c"
        var $138=HEAP[$137]; //@line 1448 "_json.c"
        var $139=($138) <= 57; //@line 1448 "_json.c"
        if ($139) { __label__ = 29; break; } else { __label__ = 33; break; } //@line 1448 "_json.c"
      case 33: // $bb34
        var $140=$idx; //@line 1451 "_json.c"
        var $141=($140) - 1; //@line 1451 "_json.c"
        var $142=$str; //@line 1451 "_json.c"
        var $143=$142+2*$141; //@line 1451 "_json.c"
        var $144=HEAP[$143]; //@line 1451 "_json.c"
        var $145=($144) <= 47; //@line 1451 "_json.c"
        if ($145) { __label__ = 36; break; } else { __label__ = 34; break; } //@line 1451 "_json.c"
      case 34: // $bb35
        var $146=$idx; //@line 1451 "_json.c"
        var $147=($146) - 1; //@line 1451 "_json.c"
        var $148=$str; //@line 1451 "_json.c"
        var $149=$148+2*$147; //@line 1451 "_json.c"
        var $150=HEAP[$149]; //@line 1451 "_json.c"
        var $151=($150) > 57; //@line 1451 "_json.c"
        if ($151) { __label__ = 36; break; } else { __label__ = 35; break; } //@line 1451 "_json.c"
      case 35: // $bb36
        $is_float=1; //@line 1452 "_json.c"
        __label__ = 37; break; //@line 1452 "_json.c"
      case 36: // $bb37
        var $152=$e_start; //@line 1455 "_json.c"
        $idx=$152; //@line 1455 "_json.c"
        __label__ = 37; break; //@line 1455 "_json.c"
      case 37: // $bb38
        var $153=$idx; //@line 1460 "_json.c"
        var $154=$start_addr; //@line 1460 "_json.c"
        var $155=($153) - ($154); //@line 1460 "_json.c"
        var $156=$str; //@line 1460 "_json.c"
        var $157=$start_addr; //@line 1460 "_json.c"
        var $158=$156+2*$157; //@line 1460 "_json.c"
        var $159=_PyUnicodeUCS2_FromUnicode($158, $155); //@line 1460 "_json.c"
        $numstr=$159; //@line 1460 "_json.c"
        var $160=($159)==0; //@line 1461 "_json.c"
        if ($160) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 1461 "_json.c"
      case 38: // $bb39
        $0=0; //@line 1462 "_json.c"
        __label__ = 47; break; //@line 1462 "_json.c"
      case 39: // $bb40
        var $161=$is_float; //@line 1463 "_json.c"
        var $162=($161)!=0; //@line 1463 "_json.c"
        var $163=$s_addr; //@line 1465 "_json.c"
        if ($162) { __label__ = 40; break; } else { __label__ = 43; break; } //@line 1463 "_json.c"
      case 40: // $bb41
        var $164=$163+24; //@line 1465 "_json.c"
        var $165=HEAP[$164]; //@line 1465 "_json.c"
        var $166=($165)!=(_PyFloat_Type); //@line 1465 "_json.c"
        if ($166) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1465 "_json.c"
      case 41: // $bb42
        var $167=$s_addr; //@line 1466 "_json.c"
        var $168=$167+24; //@line 1466 "_json.c"
        var $169=HEAP[$168]; //@line 1466 "_json.c"
        var $170=$numstr; //@line 1466 "_json.c"
        var $171=_PyObject_CallFunctionObjArgs($169, allocate([$170,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1466 "_json.c"
        $rval=$171; //@line 1466 "_json.c"
        __label__ = 44; break; //@line 1466 "_json.c"
      case 42: // $bb43
        var $172=$numstr; //@line 1469 "_json.c"
        var $173=_PyFloat_FromString($172, 0); //@line 1469 "_json.c"
        $rval=$173; //@line 1469 "_json.c"
        __label__ = 44; break; //@line 1469 "_json.c"
      case 43: // $bb45
        var $174=$163+28; //@line 1474 "_json.c"
        var $175=HEAP[$174]; //@line 1474 "_json.c"
        var $176=$numstr; //@line 1474 "_json.c"
        var $177=_PyObject_CallFunctionObjArgs($175, allocate([$176,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1474 "_json.c"
        $rval=$177; //@line 1474 "_json.c"
        __label__ = 44; break; //@line 1474 "_json.c"
      case 44: // $bb46
        var $178=$numstr; //@line 1476 "_json.c"
        var $179=$178; //@line 1476 "_json.c"
        var $180=HEAP[$179]; //@line 1476 "_json.c"
        var $181=($180) - 1; //@line 1476 "_json.c"
        var $182=$numstr; //@line 1476 "_json.c"
        var $183=$182; //@line 1476 "_json.c"
        HEAP[$183]=$181; //@line 1476 "_json.c"
        var $184=$numstr; //@line 1476 "_json.c"
        var $185=$184; //@line 1476 "_json.c"
        var $186=HEAP[$185]; //@line 1476 "_json.c"
        var $187=($186)==0; //@line 1476 "_json.c"
        if ($187) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1476 "_json.c"
      case 45: // $bb47
        var $188=$numstr; //@line 1476 "_json.c"
        var $189=$188+4; //@line 1476 "_json.c"
        var $190=HEAP[$189]; //@line 1476 "_json.c"
        var $191=$190+24; //@line 1476 "_json.c"
        var $192=HEAP[$191]; //@line 1476 "_json.c"
        var $193=$numstr; //@line 1476 "_json.c"
        FUNCTION_TABLE[$192]($193); //@line 1476 "_json.c"
        __label__ = 46; break; //@line 1476 "_json.c"
      case 46: // $bb48
        var $194=$next_idx_ptr_addr; //@line 1477 "_json.c"
        var $195=$idx; //@line 1477 "_json.c"
        HEAP[$194]=$195; //@line 1477 "_json.c"
        var $196=$rval; //@line 1478 "_json.c"
        $0=$196; //@line 1478 "_json.c"
        __label__ = 47; break; //@line 1478 "_json.c"
      case 47: // $bb49
        var $197=$0; //@line 1413 "_json.c"
        $retval=$197; //@line 1413 "_json.c"
        var $retval50=$retval; //@line 1413 "_json.c"
        ;
        return $retval50; //@line 1413 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scan_once_str($s, $pystr, $idx, $next_idx_ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $pystr_addr;
        var $idx_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $0;
        var $res;
        var $str;
        var $length;
        $s_addr=$s;
        $pystr_addr=$pystr;
        $idx_addr=$idx;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $1=$pystr_addr; //@line 1492 "_json.c"
        var $2=$1; //@line 1492 "_json.c"
        var $3=$2+20; //@line 1492 "_json.c"
        var $4=$3; //@line 1492 "_json.c"
        $str=$4; //@line 1492 "_json.c"
        var $5=$pystr_addr; //@line 1493 "_json.c"
        var $6=$5; //@line 1493 "_json.c"
        var $7=$6+8; //@line 1493 "_json.c"
        var $8=HEAP[$7]; //@line 1493 "_json.c"
        $length=$8; //@line 1493 "_json.c"
        var $9=$idx_addr; //@line 1494 "_json.c"
        var $10=$length; //@line 1494 "_json.c"
        var $11=($9) >= ($10); //@line 1494 "_json.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1494 "_json.c"
      case 1: // $bb
        var $12=HEAP[_PyExc_StopIteration]; //@line 1495 "_json.c"
        _PyErr_SetNone($12); //@line 1495 "_json.c"
        $0=0; //@line 1496 "_json.c"
        __label__ = 52; break; //@line 1496 "_json.c"
      case 2: // $bb1
        var $13=$str; //@line 1498 "_json.c"
        var $14=$idx_addr; //@line 1498 "_json.c"
        var $15=$13+$14; //@line 1498 "_json.c"
        var $16=HEAP[$15]; //@line 1498 "_json.c"
        var $17=($16); //@line 1498 "_json.c"
        if ($17 == 34) {
          __label__ = 3; break;
        }
        else if ($17 == 45) {
          __label__ = 41; break;
        }
        else if ($17 == 73) {
          __label__ = 32; break;
        }
        else if ($17 == 78) {
          __label__ = 28; break;
        }
        else if ($17 == 91) {
          __label__ = 8; break;
        }
        else if ($17 == 102) {
          __label__ = 22; break;
        }
        else if ($17 == 110) {
          __label__ = 12; break;
        }
        else if ($17 == 116) {
          __label__ = 17; break;
        }
        else if ($17 == 123) {
          __label__ = 4; break;
        }
        else {
        __label__ = 51; break;
        }
        
      case 3: // $bb2
        var $18=$s_addr; //@line 1501 "_json.c"
        var $19=$18+12; //@line 1501 "_json.c"
        var $20=HEAP[$19]; //@line 1501 "_json.c"
        var $21=_PyObject_IsTrue($20); //@line 1501 "_json.c"
        var $22=$s_addr; //@line 1501 "_json.c"
        var $23=$22+8; //@line 1501 "_json.c"
        var $24=HEAP[$23]; //@line 1501 "_json.c"
        var $25=$24; //@line 1501 "_json.c"
        var $26=$25+20; //@line 1501 "_json.c"
        var $27=$26; //@line 1501 "_json.c"
        var $28=$idx_addr; //@line 1501 "_json.c"
        var $29=($28) + 1; //@line 1501 "_json.c"
        var $30=$pystr_addr; //@line 1501 "_json.c"
        var $31=$next_idx_ptr_addr; //@line 1501 "_json.c"
        var $32=_scanstring_str($30, $29, $27, $21, $31); //@line 1501 "_json.c"
        $0=$32; //@line 1501 "_json.c"
        __label__ = 52; break; //@line 1501 "_json.c"
      case 4: // $bb3
        var $33=HEAP[__PyThreadState_Current]; //@line 1507 "_json.c"
        var $34=$33+12; //@line 1507 "_json.c"
        var $35=HEAP[$34]; //@line 1507 "_json.c"
        var $36=($35) + 1; //@line 1507 "_json.c"
        var $37=$33+12; //@line 1507 "_json.c"
        HEAP[$37]=$36; //@line 1507 "_json.c"
        var $38=$33+12; //@line 1507 "_json.c"
        var $39=HEAP[$38]; //@line 1507 "_json.c"
        var $40=HEAP[__Py_CheckRecursionLimit]; //@line 1507 "_json.c"
        var $41=($39) > ($40); //@line 1507 "_json.c"
        if ($41) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1507 "_json.c"
      case 5: // $bb4
        var $42=__Py_CheckRecursiveCall(__str34); //@line 1507 "_json.c"
        var $43=($42)!=0; //@line 1507 "_json.c"
        if ($43) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1507 "_json.c"
      case 6: // $bb5
        $0=0; //@line 1509 "_json.c"
        __label__ = 52; break; //@line 1509 "_json.c"
      case 7: // $bb6
        var $44=$idx_addr; //@line 1510 "_json.c"
        var $45=($44) + 1; //@line 1510 "_json.c"
        var $46=$s_addr; //@line 1510 "_json.c"
        var $47=$pystr_addr; //@line 1510 "_json.c"
        var $48=$next_idx_ptr_addr; //@line 1510 "_json.c"
        var $49=__parse_object_str($46, $47, $45, $48); //@line 1510 "_json.c"
        $res=$49; //@line 1510 "_json.c"
        var $50=HEAP[__PyThreadState_Current]; //@line 1511 "_json.c"
        var $51=$50+12; //@line 1511 "_json.c"
        var $52=HEAP[$51]; //@line 1511 "_json.c"
        var $53=($52) - 1; //@line 1511 "_json.c"
        var $54=$50+12; //@line 1511 "_json.c"
        HEAP[$54]=$53; //@line 1511 "_json.c"
        var $55=$res; //@line 1512 "_json.c"
        $0=$55; //@line 1512 "_json.c"
        __label__ = 52; break; //@line 1512 "_json.c"
      case 8: // $bb7
        var $56=HEAP[__PyThreadState_Current]; //@line 1515 "_json.c"
        var $57=$56+12; //@line 1515 "_json.c"
        var $58=HEAP[$57]; //@line 1515 "_json.c"
        var $59=($58) + 1; //@line 1515 "_json.c"
        var $60=$56+12; //@line 1515 "_json.c"
        HEAP[$60]=$59; //@line 1515 "_json.c"
        var $61=$56+12; //@line 1515 "_json.c"
        var $62=HEAP[$61]; //@line 1515 "_json.c"
        var $63=HEAP[__Py_CheckRecursionLimit]; //@line 1515 "_json.c"
        var $64=($62) > ($63); //@line 1515 "_json.c"
        if ($64) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 1515 "_json.c"
      case 9: // $bb8
        var $65=__Py_CheckRecursiveCall(__str35); //@line 1515 "_json.c"
        var $66=($65)!=0; //@line 1515 "_json.c"
        if ($66) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1515 "_json.c"
      case 10: // $bb9
        $0=0; //@line 1517 "_json.c"
        __label__ = 52; break; //@line 1517 "_json.c"
      case 11: // $bb10
        var $67=$idx_addr; //@line 1518 "_json.c"
        var $68=($67) + 1; //@line 1518 "_json.c"
        var $69=$s_addr; //@line 1518 "_json.c"
        var $70=$pystr_addr; //@line 1518 "_json.c"
        var $71=$next_idx_ptr_addr; //@line 1518 "_json.c"
        var $72=__parse_array_str($69, $70, $68, $71); //@line 1518 "_json.c"
        $res=$72; //@line 1518 "_json.c"
        var $73=HEAP[__PyThreadState_Current]; //@line 1519 "_json.c"
        var $74=$73+12; //@line 1519 "_json.c"
        var $75=HEAP[$74]; //@line 1519 "_json.c"
        var $76=($75) - 1; //@line 1519 "_json.c"
        var $77=$73+12; //@line 1519 "_json.c"
        HEAP[$77]=$76; //@line 1519 "_json.c"
        var $78=$res; //@line 1520 "_json.c"
        $0=$78; //@line 1520 "_json.c"
        __label__ = 52; break; //@line 1520 "_json.c"
      case 12: // $bb11
        var $79=$idx_addr; //@line 1523 "_json.c"
        var $80=($79) + 3; //@line 1523 "_json.c"
        var $81=$length; //@line 1523 "_json.c"
        var $82=($80) < ($81); //@line 1523 "_json.c"
        if ($82) { __label__ = 13; break; } else { __label__ = 51; break; } //@line 1523 "_json.c"
      case 13: // $bb12
        var $83=$idx_addr; //@line 1523 "_json.c"
        var $84=($83) + 1; //@line 1523 "_json.c"
        var $85=$str; //@line 1523 "_json.c"
        var $86=$85+$84; //@line 1523 "_json.c"
        var $87=HEAP[$86]; //@line 1523 "_json.c"
        var $88=($87)==117; //@line 1523 "_json.c"
        if ($88) { __label__ = 14; break; } else { __label__ = 51; break; } //@line 1523 "_json.c"
      case 14: // $bb13
        var $89=$idx_addr; //@line 1523 "_json.c"
        var $90=($89) + 2; //@line 1523 "_json.c"
        var $91=$str; //@line 1523 "_json.c"
        var $92=$91+$90; //@line 1523 "_json.c"
        var $93=HEAP[$92]; //@line 1523 "_json.c"
        var $94=($93)==108; //@line 1523 "_json.c"
        if ($94) { __label__ = 15; break; } else { __label__ = 51; break; } //@line 1523 "_json.c"
      case 15: // $bb14
        var $95=$idx_addr; //@line 1523 "_json.c"
        var $96=($95) + 3; //@line 1523 "_json.c"
        var $97=$str; //@line 1523 "_json.c"
        var $98=$97+$96; //@line 1523 "_json.c"
        var $99=HEAP[$98]; //@line 1523 "_json.c"
        var $100=($99)==108; //@line 1523 "_json.c"
        if ($100) { __label__ = 16; break; } else { __label__ = 51; break; } //@line 1523 "_json.c"
      case 16: // $bb15
        var $101=HEAP[__Py_NoneStruct]; //@line 1524 "_json.c"
        var $102=($101) + 1; //@line 1524 "_json.c"
        HEAP[__Py_NoneStruct]=$102; //@line 1524 "_json.c"
        var $103=$idx_addr; //@line 1525 "_json.c"
        var $104=($103) + 4; //@line 1525 "_json.c"
        var $105=$next_idx_ptr_addr; //@line 1525 "_json.c"
        HEAP[$105]=$104; //@line 1525 "_json.c"
        $0=__Py_NoneStruct; //@line 1526 "_json.c"
        __label__ = 52; break; //@line 1526 "_json.c"
      case 17: // $bb17
        var $106=$idx_addr; //@line 1531 "_json.c"
        var $107=($106) + 3; //@line 1531 "_json.c"
        var $108=$length; //@line 1531 "_json.c"
        var $109=($107) < ($108); //@line 1531 "_json.c"
        if ($109) { __label__ = 18; break; } else { __label__ = 51; break; } //@line 1531 "_json.c"
      case 18: // $bb18
        var $110=$idx_addr; //@line 1531 "_json.c"
        var $111=($110) + 1; //@line 1531 "_json.c"
        var $112=$str; //@line 1531 "_json.c"
        var $113=$112+$111; //@line 1531 "_json.c"
        var $114=HEAP[$113]; //@line 1531 "_json.c"
        var $115=($114)==114; //@line 1531 "_json.c"
        if ($115) { __label__ = 19; break; } else { __label__ = 51; break; } //@line 1531 "_json.c"
      case 19: // $bb19
        var $116=$idx_addr; //@line 1531 "_json.c"
        var $117=($116) + 2; //@line 1531 "_json.c"
        var $118=$str; //@line 1531 "_json.c"
        var $119=$118+$117; //@line 1531 "_json.c"
        var $120=HEAP[$119]; //@line 1531 "_json.c"
        var $121=($120)==117; //@line 1531 "_json.c"
        if ($121) { __label__ = 20; break; } else { __label__ = 51; break; } //@line 1531 "_json.c"
      case 20: // $bb20
        var $122=$idx_addr; //@line 1531 "_json.c"
        var $123=($122) + 3; //@line 1531 "_json.c"
        var $124=$str; //@line 1531 "_json.c"
        var $125=$124+$123; //@line 1531 "_json.c"
        var $126=HEAP[$125]; //@line 1531 "_json.c"
        var $127=($126)==101; //@line 1531 "_json.c"
        if ($127) { __label__ = 21; break; } else { __label__ = 51; break; } //@line 1531 "_json.c"
      case 21: // $bb21
        var $128=HEAP[__Py_TrueStruct]; //@line 1532 "_json.c"
        var $129=($128) + 1; //@line 1532 "_json.c"
        HEAP[__Py_TrueStruct]=$129; //@line 1532 "_json.c"
        var $130=$idx_addr; //@line 1533 "_json.c"
        var $131=($130) + 4; //@line 1533 "_json.c"
        var $132=$next_idx_ptr_addr; //@line 1533 "_json.c"
        HEAP[$132]=$131; //@line 1533 "_json.c"
        $0=__Py_TrueStruct; //@line 1534 "_json.c"
        __label__ = 52; break; //@line 1534 "_json.c"
      case 22: // $bb23
        var $133=$idx_addr; //@line 1539 "_json.c"
        var $134=($133) + 4; //@line 1539 "_json.c"
        var $135=$length; //@line 1539 "_json.c"
        var $136=($134) < ($135); //@line 1539 "_json.c"
        if ($136) { __label__ = 23; break; } else { __label__ = 51; break; } //@line 1539 "_json.c"
      case 23: // $bb24
        var $137=$idx_addr; //@line 1539 "_json.c"
        var $138=($137) + 1; //@line 1539 "_json.c"
        var $139=$str; //@line 1539 "_json.c"
        var $140=$139+$138; //@line 1539 "_json.c"
        var $141=HEAP[$140]; //@line 1539 "_json.c"
        var $142=($141)==97; //@line 1539 "_json.c"
        if ($142) { __label__ = 24; break; } else { __label__ = 51; break; } //@line 1539 "_json.c"
      case 24: // $bb25
        var $143=$idx_addr; //@line 1539 "_json.c"
        var $144=($143) + 2; //@line 1539 "_json.c"
        var $145=$str; //@line 1539 "_json.c"
        var $146=$145+$144; //@line 1539 "_json.c"
        var $147=HEAP[$146]; //@line 1539 "_json.c"
        var $148=($147)==108; //@line 1539 "_json.c"
        if ($148) { __label__ = 25; break; } else { __label__ = 51; break; } //@line 1539 "_json.c"
      case 25: // $bb26
        var $149=$idx_addr; //@line 1539 "_json.c"
        var $150=($149) + 3; //@line 1539 "_json.c"
        var $151=$str; //@line 1539 "_json.c"
        var $152=$151+$150; //@line 1539 "_json.c"
        var $153=HEAP[$152]; //@line 1539 "_json.c"
        var $154=($153)==115; //@line 1539 "_json.c"
        if ($154) { __label__ = 26; break; } else { __label__ = 51; break; } //@line 1539 "_json.c"
      case 26: // $bb27
        var $155=$idx_addr; //@line 1539 "_json.c"
        var $156=($155) + 4; //@line 1539 "_json.c"
        var $157=$str; //@line 1539 "_json.c"
        var $158=$157+$156; //@line 1539 "_json.c"
        var $159=HEAP[$158]; //@line 1539 "_json.c"
        var $160=($159)==101; //@line 1539 "_json.c"
        if ($160) { __label__ = 27; break; } else { __label__ = 51; break; } //@line 1539 "_json.c"
      case 27: // $bb28
        var $161=HEAP[__Py_ZeroStruct]; //@line 1540 "_json.c"
        var $162=($161) + 1; //@line 1540 "_json.c"
        HEAP[__Py_ZeroStruct]=$162; //@line 1540 "_json.c"
        var $163=$idx_addr; //@line 1541 "_json.c"
        var $164=($163) + 5; //@line 1541 "_json.c"
        var $165=$next_idx_ptr_addr; //@line 1541 "_json.c"
        HEAP[$165]=$164; //@line 1541 "_json.c"
        $0=__Py_ZeroStruct; //@line 1542 "_json.c"
        __label__ = 52; break; //@line 1542 "_json.c"
      case 28: // $bb30
        var $166=$idx_addr; //@line 1547 "_json.c"
        var $167=($166) + 2; //@line 1547 "_json.c"
        var $168=$length; //@line 1547 "_json.c"
        var $169=($167) < ($168); //@line 1547 "_json.c"
        if ($169) { __label__ = 29; break; } else { __label__ = 51; break; } //@line 1547 "_json.c"
      case 29: // $bb31
        var $170=$idx_addr; //@line 1547 "_json.c"
        var $171=($170) + 1; //@line 1547 "_json.c"
        var $172=$str; //@line 1547 "_json.c"
        var $173=$172+$171; //@line 1547 "_json.c"
        var $174=HEAP[$173]; //@line 1547 "_json.c"
        var $175=($174)==97; //@line 1547 "_json.c"
        if ($175) { __label__ = 30; break; } else { __label__ = 51; break; } //@line 1547 "_json.c"
      case 30: // $bb32
        var $176=$idx_addr; //@line 1547 "_json.c"
        var $177=($176) + 2; //@line 1547 "_json.c"
        var $178=$str; //@line 1547 "_json.c"
        var $179=$178+$177; //@line 1547 "_json.c"
        var $180=HEAP[$179]; //@line 1547 "_json.c"
        var $181=($180)==78; //@line 1547 "_json.c"
        if ($181) { __label__ = 31; break; } else { __label__ = 51; break; } //@line 1547 "_json.c"
      case 31: // $bb33
        var $182=$s_addr; //@line 1548 "_json.c"
        var $183=$idx_addr; //@line 1548 "_json.c"
        var $184=$next_idx_ptr_addr; //@line 1548 "_json.c"
        var $185=__parse_constant($182, __str36, $183, $184); //@line 1548 "_json.c"
        $0=$185; //@line 1548 "_json.c"
        __label__ = 52; break; //@line 1548 "_json.c"
      case 32: // $bb35
        var $186=$idx_addr; //@line 1553 "_json.c"
        var $187=($186) + 7; //@line 1553 "_json.c"
        var $188=$length; //@line 1553 "_json.c"
        var $189=($187) < ($188); //@line 1553 "_json.c"
        if ($189) { __label__ = 33; break; } else { __label__ = 51; break; } //@line 1553 "_json.c"
      case 33: // $bb36
        var $190=$idx_addr; //@line 1553 "_json.c"
        var $191=($190) + 1; //@line 1553 "_json.c"
        var $192=$str; //@line 1553 "_json.c"
        var $193=$192+$191; //@line 1553 "_json.c"
        var $194=HEAP[$193]; //@line 1553 "_json.c"
        var $195=($194)==110; //@line 1553 "_json.c"
        if ($195) { __label__ = 34; break; } else { __label__ = 51; break; } //@line 1553 "_json.c"
      case 34: // $bb37
        var $196=$idx_addr; //@line 1553 "_json.c"
        var $197=($196) + 2; //@line 1553 "_json.c"
        var $198=$str; //@line 1553 "_json.c"
        var $199=$198+$197; //@line 1553 "_json.c"
        var $200=HEAP[$199]; //@line 1553 "_json.c"
        var $201=($200)==102; //@line 1553 "_json.c"
        if ($201) { __label__ = 35; break; } else { __label__ = 51; break; } //@line 1553 "_json.c"
      case 35: // $bb38
        var $202=$idx_addr; //@line 1553 "_json.c"
        var $203=($202) + 3; //@line 1553 "_json.c"
        var $204=$str; //@line 1553 "_json.c"
        var $205=$204+$203; //@line 1553 "_json.c"
        var $206=HEAP[$205]; //@line 1553 "_json.c"
        var $207=($206)==105; //@line 1553 "_json.c"
        if ($207) { __label__ = 36; break; } else { __label__ = 51; break; } //@line 1553 "_json.c"
      case 36: // $bb39
        var $208=$idx_addr; //@line 1553 "_json.c"
        var $209=($208) + 4; //@line 1553 "_json.c"
        var $210=$str; //@line 1553 "_json.c"
        var $211=$210+$209; //@line 1553 "_json.c"
        var $212=HEAP[$211]; //@line 1553 "_json.c"
        var $213=($212)==110; //@line 1553 "_json.c"
        if ($213) { __label__ = 37; break; } else { __label__ = 51; break; } //@line 1553 "_json.c"
      case 37: // $bb40
        var $214=$idx_addr; //@line 1553 "_json.c"
        var $215=($214) + 5; //@line 1553 "_json.c"
        var $216=$str; //@line 1553 "_json.c"
        var $217=$216+$215; //@line 1553 "_json.c"
        var $218=HEAP[$217]; //@line 1553 "_json.c"
        var $219=($218)==105; //@line 1553 "_json.c"
        if ($219) { __label__ = 38; break; } else { __label__ = 51; break; } //@line 1553 "_json.c"
      case 38: // $bb41
        var $220=$idx_addr; //@line 1553 "_json.c"
        var $221=($220) + 6; //@line 1553 "_json.c"
        var $222=$str; //@line 1553 "_json.c"
        var $223=$222+$221; //@line 1553 "_json.c"
        var $224=HEAP[$223]; //@line 1553 "_json.c"
        var $225=($224)==116; //@line 1553 "_json.c"
        if ($225) { __label__ = 39; break; } else { __label__ = 51; break; } //@line 1553 "_json.c"
      case 39: // $bb42
        var $226=$idx_addr; //@line 1553 "_json.c"
        var $227=($226) + 7; //@line 1553 "_json.c"
        var $228=$str; //@line 1553 "_json.c"
        var $229=$228+$227; //@line 1553 "_json.c"
        var $230=HEAP[$229]; //@line 1553 "_json.c"
        var $231=($230)==121; //@line 1553 "_json.c"
        if ($231) { __label__ = 40; break; } else { __label__ = 51; break; } //@line 1553 "_json.c"
      case 40: // $bb43
        var $232=$s_addr; //@line 1554 "_json.c"
        var $233=$idx_addr; //@line 1554 "_json.c"
        var $234=$next_idx_ptr_addr; //@line 1554 "_json.c"
        var $235=__parse_constant($232, __str37, $233, $234); //@line 1554 "_json.c"
        $0=$235; //@line 1554 "_json.c"
        __label__ = 52; break; //@line 1554 "_json.c"
      case 41: // $bb45
        var $236=$idx_addr; //@line 1559 "_json.c"
        var $237=($236) + 8; //@line 1559 "_json.c"
        var $238=$length; //@line 1559 "_json.c"
        var $239=($237) < ($238); //@line 1559 "_json.c"
        if ($239) { __label__ = 42; break; } else { __label__ = 51; break; } //@line 1559 "_json.c"
      case 42: // $bb46
        var $240=$idx_addr; //@line 1559 "_json.c"
        var $241=($240) + 1; //@line 1559 "_json.c"
        var $242=$str; //@line 1559 "_json.c"
        var $243=$242+$241; //@line 1559 "_json.c"
        var $244=HEAP[$243]; //@line 1559 "_json.c"
        var $245=($244)==73; //@line 1559 "_json.c"
        if ($245) { __label__ = 43; break; } else { __label__ = 51; break; } //@line 1559 "_json.c"
      case 43: // $bb47
        var $246=$idx_addr; //@line 1559 "_json.c"
        var $247=($246) + 2; //@line 1559 "_json.c"
        var $248=$str; //@line 1559 "_json.c"
        var $249=$248+$247; //@line 1559 "_json.c"
        var $250=HEAP[$249]; //@line 1559 "_json.c"
        var $251=($250)==110; //@line 1559 "_json.c"
        if ($251) { __label__ = 44; break; } else { __label__ = 51; break; } //@line 1559 "_json.c"
      case 44: // $bb48
        var $252=$idx_addr; //@line 1559 "_json.c"
        var $253=($252) + 3; //@line 1559 "_json.c"
        var $254=$str; //@line 1559 "_json.c"
        var $255=$254+$253; //@line 1559 "_json.c"
        var $256=HEAP[$255]; //@line 1559 "_json.c"
        var $257=($256)==102; //@line 1559 "_json.c"
        if ($257) { __label__ = 45; break; } else { __label__ = 51; break; } //@line 1559 "_json.c"
      case 45: // $bb49
        var $258=$idx_addr; //@line 1559 "_json.c"
        var $259=($258) + 4; //@line 1559 "_json.c"
        var $260=$str; //@line 1559 "_json.c"
        var $261=$260+$259; //@line 1559 "_json.c"
        var $262=HEAP[$261]; //@line 1559 "_json.c"
        var $263=($262)==105; //@line 1559 "_json.c"
        if ($263) { __label__ = 46; break; } else { __label__ = 51; break; } //@line 1559 "_json.c"
      case 46: // $bb50
        var $264=$idx_addr; //@line 1559 "_json.c"
        var $265=($264) + 5; //@line 1559 "_json.c"
        var $266=$str; //@line 1559 "_json.c"
        var $267=$266+$265; //@line 1559 "_json.c"
        var $268=HEAP[$267]; //@line 1559 "_json.c"
        var $269=($268)==110; //@line 1559 "_json.c"
        if ($269) { __label__ = 47; break; } else { __label__ = 51; break; } //@line 1559 "_json.c"
      case 47: // $bb51
        var $270=$idx_addr; //@line 1559 "_json.c"
        var $271=($270) + 6; //@line 1559 "_json.c"
        var $272=$str; //@line 1559 "_json.c"
        var $273=$272+$271; //@line 1559 "_json.c"
        var $274=HEAP[$273]; //@line 1559 "_json.c"
        var $275=($274)==105; //@line 1559 "_json.c"
        if ($275) { __label__ = 48; break; } else { __label__ = 51; break; } //@line 1559 "_json.c"
      case 48: // $bb52
        var $276=$idx_addr; //@line 1559 "_json.c"
        var $277=($276) + 7; //@line 1559 "_json.c"
        var $278=$str; //@line 1559 "_json.c"
        var $279=$278+$277; //@line 1559 "_json.c"
        var $280=HEAP[$279]; //@line 1559 "_json.c"
        var $281=($280)==116; //@line 1559 "_json.c"
        if ($281) { __label__ = 49; break; } else { __label__ = 51; break; } //@line 1559 "_json.c"
      case 49: // $bb53
        var $282=$idx_addr; //@line 1559 "_json.c"
        var $283=($282) + 8; //@line 1559 "_json.c"
        var $284=$str; //@line 1559 "_json.c"
        var $285=$284+$283; //@line 1559 "_json.c"
        var $286=HEAP[$285]; //@line 1559 "_json.c"
        var $287=($286)==121; //@line 1559 "_json.c"
        if ($287) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1559 "_json.c"
      case 50: // $bb54
        var $288=$s_addr; //@line 1560 "_json.c"
        var $289=$idx_addr; //@line 1560 "_json.c"
        var $290=$next_idx_ptr_addr; //@line 1560 "_json.c"
        var $291=__parse_constant($288, __str38, $289, $290); //@line 1560 "_json.c"
        $0=$291; //@line 1560 "_json.c"
        __label__ = 52; break; //@line 1560 "_json.c"
      case 51: // $bb55
        var $292=$s_addr; //@line 1565 "_json.c"
        var $293=$pystr_addr; //@line 1565 "_json.c"
        var $294=$idx_addr; //@line 1565 "_json.c"
        var $295=$next_idx_ptr_addr; //@line 1565 "_json.c"
        var $296=__match_number_str($292, $293, $294, $295); //@line 1565 "_json.c"
        $0=$296; //@line 1565 "_json.c"
        __label__ = 52; break; //@line 1565 "_json.c"
      case 52: // $bb56
        var $297=$0; //@line 1496 "_json.c"
        $retval=$297; //@line 1496 "_json.c"
        var $retval57=$retval; //@line 1496 "_json.c"
        ;
        return $retval57; //@line 1496 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scan_once_unicode($s, $pystr, $idx, $next_idx_ptr) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $pystr_addr;
        var $idx_addr;
        var $next_idx_ptr_addr;
        var $retval;
        var $0;
        var $res;
        var $str;
        var $length;
        $s_addr=$s;
        $pystr_addr=$pystr;
        $idx_addr=$idx;
        $next_idx_ptr_addr=$next_idx_ptr;
        var $1=$pystr_addr; //@line 1579 "_json.c"
        var $2=$1; //@line 1579 "_json.c"
        var $3=$2+12; //@line 1579 "_json.c"
        var $4=HEAP[$3]; //@line 1579 "_json.c"
        $str=$4; //@line 1579 "_json.c"
        var $5=$pystr_addr; //@line 1580 "_json.c"
        var $6=$5; //@line 1580 "_json.c"
        var $7=$6+8; //@line 1580 "_json.c"
        var $8=HEAP[$7]; //@line 1580 "_json.c"
        $length=$8; //@line 1580 "_json.c"
        var $9=$idx_addr; //@line 1581 "_json.c"
        var $10=$length; //@line 1581 "_json.c"
        var $11=($9) >= ($10); //@line 1581 "_json.c"
        if ($11) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1581 "_json.c"
      case 1: // $bb
        var $12=HEAP[_PyExc_StopIteration]; //@line 1582 "_json.c"
        _PyErr_SetNone($12); //@line 1582 "_json.c"
        $0=0; //@line 1583 "_json.c"
        __label__ = 52; break; //@line 1583 "_json.c"
      case 2: // $bb1
        var $13=$str; //@line 1585 "_json.c"
        var $14=$idx_addr; //@line 1585 "_json.c"
        var $15=$13+2*$14; //@line 1585 "_json.c"
        var $16=HEAP[$15]; //@line 1585 "_json.c"
        var $17=($16); //@line 1585 "_json.c"
        if ($17 == 34) {
          __label__ = 3; break;
        }
        else if ($17 == 45) {
          __label__ = 41; break;
        }
        else if ($17 == 73) {
          __label__ = 32; break;
        }
        else if ($17 == 78) {
          __label__ = 28; break;
        }
        else if ($17 == 91) {
          __label__ = 8; break;
        }
        else if ($17 == 102) {
          __label__ = 22; break;
        }
        else if ($17 == 110) {
          __label__ = 12; break;
        }
        else if ($17 == 116) {
          __label__ = 17; break;
        }
        else if ($17 == 123) {
          __label__ = 4; break;
        }
        else {
        __label__ = 51; break;
        }
        
      case 3: // $bb2
        var $18=$s_addr; //@line 1588 "_json.c"
        var $19=$18+12; //@line 1588 "_json.c"
        var $20=HEAP[$19]; //@line 1588 "_json.c"
        var $21=_PyObject_IsTrue($20); //@line 1588 "_json.c"
        var $22=$idx_addr; //@line 1588 "_json.c"
        var $23=($22) + 1; //@line 1588 "_json.c"
        var $24=$pystr_addr; //@line 1588 "_json.c"
        var $25=$next_idx_ptr_addr; //@line 1588 "_json.c"
        var $26=_scanstring_unicode($24, $23, $21, $25); //@line 1588 "_json.c"
        $0=$26; //@line 1588 "_json.c"
        __label__ = 52; break; //@line 1588 "_json.c"
      case 4: // $bb3
        var $27=HEAP[__PyThreadState_Current]; //@line 1593 "_json.c"
        var $28=$27+12; //@line 1593 "_json.c"
        var $29=HEAP[$28]; //@line 1593 "_json.c"
        var $30=($29) + 1; //@line 1593 "_json.c"
        var $31=$27+12; //@line 1593 "_json.c"
        HEAP[$31]=$30; //@line 1593 "_json.c"
        var $32=$27+12; //@line 1593 "_json.c"
        var $33=HEAP[$32]; //@line 1593 "_json.c"
        var $34=HEAP[__Py_CheckRecursionLimit]; //@line 1593 "_json.c"
        var $35=($33) > ($34); //@line 1593 "_json.c"
        if ($35) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1593 "_json.c"
      case 5: // $bb4
        var $36=__Py_CheckRecursiveCall(__str39); //@line 1593 "_json.c"
        var $37=($36)!=0; //@line 1593 "_json.c"
        if ($37) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1593 "_json.c"
      case 6: // $bb5
        $0=0; //@line 1595 "_json.c"
        __label__ = 52; break; //@line 1595 "_json.c"
      case 7: // $bb6
        var $38=$idx_addr; //@line 1596 "_json.c"
        var $39=($38) + 1; //@line 1596 "_json.c"
        var $40=$s_addr; //@line 1596 "_json.c"
        var $41=$pystr_addr; //@line 1596 "_json.c"
        var $42=$next_idx_ptr_addr; //@line 1596 "_json.c"
        var $43=__parse_object_unicode($40, $41, $39, $42); //@line 1596 "_json.c"
        $res=$43; //@line 1596 "_json.c"
        var $44=HEAP[__PyThreadState_Current]; //@line 1597 "_json.c"
        var $45=$44+12; //@line 1597 "_json.c"
        var $46=HEAP[$45]; //@line 1597 "_json.c"
        var $47=($46) - 1; //@line 1597 "_json.c"
        var $48=$44+12; //@line 1597 "_json.c"
        HEAP[$48]=$47; //@line 1597 "_json.c"
        var $49=$res; //@line 1598 "_json.c"
        $0=$49; //@line 1598 "_json.c"
        __label__ = 52; break; //@line 1598 "_json.c"
      case 8: // $bb7
        var $50=HEAP[__PyThreadState_Current]; //@line 1601 "_json.c"
        var $51=$50+12; //@line 1601 "_json.c"
        var $52=HEAP[$51]; //@line 1601 "_json.c"
        var $53=($52) + 1; //@line 1601 "_json.c"
        var $54=$50+12; //@line 1601 "_json.c"
        HEAP[$54]=$53; //@line 1601 "_json.c"
        var $55=$50+12; //@line 1601 "_json.c"
        var $56=HEAP[$55]; //@line 1601 "_json.c"
        var $57=HEAP[__Py_CheckRecursionLimit]; //@line 1601 "_json.c"
        var $58=($56) > ($57); //@line 1601 "_json.c"
        if ($58) { __label__ = 9; break; } else { __label__ = 11; break; } //@line 1601 "_json.c"
      case 9: // $bb8
        var $59=__Py_CheckRecursiveCall(__str40); //@line 1601 "_json.c"
        var $60=($59)!=0; //@line 1601 "_json.c"
        if ($60) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1601 "_json.c"
      case 10: // $bb9
        $0=0; //@line 1603 "_json.c"
        __label__ = 52; break; //@line 1603 "_json.c"
      case 11: // $bb10
        var $61=$idx_addr; //@line 1604 "_json.c"
        var $62=($61) + 1; //@line 1604 "_json.c"
        var $63=$s_addr; //@line 1604 "_json.c"
        var $64=$pystr_addr; //@line 1604 "_json.c"
        var $65=$next_idx_ptr_addr; //@line 1604 "_json.c"
        var $66=__parse_array_unicode($63, $64, $62, $65); //@line 1604 "_json.c"
        $res=$66; //@line 1604 "_json.c"
        var $67=HEAP[__PyThreadState_Current]; //@line 1605 "_json.c"
        var $68=$67+12; //@line 1605 "_json.c"
        var $69=HEAP[$68]; //@line 1605 "_json.c"
        var $70=($69) - 1; //@line 1605 "_json.c"
        var $71=$67+12; //@line 1605 "_json.c"
        HEAP[$71]=$70; //@line 1605 "_json.c"
        var $72=$res; //@line 1606 "_json.c"
        $0=$72; //@line 1606 "_json.c"
        __label__ = 52; break; //@line 1606 "_json.c"
      case 12: // $bb11
        var $73=$idx_addr; //@line 1609 "_json.c"
        var $74=($73) + 3; //@line 1609 "_json.c"
        var $75=$length; //@line 1609 "_json.c"
        var $76=($74) < ($75); //@line 1609 "_json.c"
        if ($76) { __label__ = 13; break; } else { __label__ = 51; break; } //@line 1609 "_json.c"
      case 13: // $bb12
        var $77=$idx_addr; //@line 1609 "_json.c"
        var $78=($77) + 1; //@line 1609 "_json.c"
        var $79=$str; //@line 1609 "_json.c"
        var $80=$79+2*$78; //@line 1609 "_json.c"
        var $81=HEAP[$80]; //@line 1609 "_json.c"
        var $82=($81)==117; //@line 1609 "_json.c"
        if ($82) { __label__ = 14; break; } else { __label__ = 51; break; } //@line 1609 "_json.c"
      case 14: // $bb13
        var $83=$idx_addr; //@line 1609 "_json.c"
        var $84=($83) + 2; //@line 1609 "_json.c"
        var $85=$str; //@line 1609 "_json.c"
        var $86=$85+2*$84; //@line 1609 "_json.c"
        var $87=HEAP[$86]; //@line 1609 "_json.c"
        var $88=($87)==108; //@line 1609 "_json.c"
        if ($88) { __label__ = 15; break; } else { __label__ = 51; break; } //@line 1609 "_json.c"
      case 15: // $bb14
        var $89=$idx_addr; //@line 1609 "_json.c"
        var $90=($89) + 3; //@line 1609 "_json.c"
        var $91=$str; //@line 1609 "_json.c"
        var $92=$91+2*$90; //@line 1609 "_json.c"
        var $93=HEAP[$92]; //@line 1609 "_json.c"
        var $94=($93)==108; //@line 1609 "_json.c"
        if ($94) { __label__ = 16; break; } else { __label__ = 51; break; } //@line 1609 "_json.c"
      case 16: // $bb15
        var $95=HEAP[__Py_NoneStruct]; //@line 1610 "_json.c"
        var $96=($95) + 1; //@line 1610 "_json.c"
        HEAP[__Py_NoneStruct]=$96; //@line 1610 "_json.c"
        var $97=$idx_addr; //@line 1611 "_json.c"
        var $98=($97) + 4; //@line 1611 "_json.c"
        var $99=$next_idx_ptr_addr; //@line 1611 "_json.c"
        HEAP[$99]=$98; //@line 1611 "_json.c"
        $0=__Py_NoneStruct; //@line 1612 "_json.c"
        __label__ = 52; break; //@line 1612 "_json.c"
      case 17: // $bb17
        var $100=$idx_addr; //@line 1617 "_json.c"
        var $101=($100) + 3; //@line 1617 "_json.c"
        var $102=$length; //@line 1617 "_json.c"
        var $103=($101) < ($102); //@line 1617 "_json.c"
        if ($103) { __label__ = 18; break; } else { __label__ = 51; break; } //@line 1617 "_json.c"
      case 18: // $bb18
        var $104=$idx_addr; //@line 1617 "_json.c"
        var $105=($104) + 1; //@line 1617 "_json.c"
        var $106=$str; //@line 1617 "_json.c"
        var $107=$106+2*$105; //@line 1617 "_json.c"
        var $108=HEAP[$107]; //@line 1617 "_json.c"
        var $109=($108)==114; //@line 1617 "_json.c"
        if ($109) { __label__ = 19; break; } else { __label__ = 51; break; } //@line 1617 "_json.c"
      case 19: // $bb19
        var $110=$idx_addr; //@line 1617 "_json.c"
        var $111=($110) + 2; //@line 1617 "_json.c"
        var $112=$str; //@line 1617 "_json.c"
        var $113=$112+2*$111; //@line 1617 "_json.c"
        var $114=HEAP[$113]; //@line 1617 "_json.c"
        var $115=($114)==117; //@line 1617 "_json.c"
        if ($115) { __label__ = 20; break; } else { __label__ = 51; break; } //@line 1617 "_json.c"
      case 20: // $bb20
        var $116=$idx_addr; //@line 1617 "_json.c"
        var $117=($116) + 3; //@line 1617 "_json.c"
        var $118=$str; //@line 1617 "_json.c"
        var $119=$118+2*$117; //@line 1617 "_json.c"
        var $120=HEAP[$119]; //@line 1617 "_json.c"
        var $121=($120)==101; //@line 1617 "_json.c"
        if ($121) { __label__ = 21; break; } else { __label__ = 51; break; } //@line 1617 "_json.c"
      case 21: // $bb21
        var $122=HEAP[__Py_TrueStruct]; //@line 1618 "_json.c"
        var $123=($122) + 1; //@line 1618 "_json.c"
        HEAP[__Py_TrueStruct]=$123; //@line 1618 "_json.c"
        var $124=$idx_addr; //@line 1619 "_json.c"
        var $125=($124) + 4; //@line 1619 "_json.c"
        var $126=$next_idx_ptr_addr; //@line 1619 "_json.c"
        HEAP[$126]=$125; //@line 1619 "_json.c"
        $0=__Py_TrueStruct; //@line 1620 "_json.c"
        __label__ = 52; break; //@line 1620 "_json.c"
      case 22: // $bb23
        var $127=$idx_addr; //@line 1625 "_json.c"
        var $128=($127) + 4; //@line 1625 "_json.c"
        var $129=$length; //@line 1625 "_json.c"
        var $130=($128) < ($129); //@line 1625 "_json.c"
        if ($130) { __label__ = 23; break; } else { __label__ = 51; break; } //@line 1625 "_json.c"
      case 23: // $bb24
        var $131=$idx_addr; //@line 1625 "_json.c"
        var $132=($131) + 1; //@line 1625 "_json.c"
        var $133=$str; //@line 1625 "_json.c"
        var $134=$133+2*$132; //@line 1625 "_json.c"
        var $135=HEAP[$134]; //@line 1625 "_json.c"
        var $136=($135)==97; //@line 1625 "_json.c"
        if ($136) { __label__ = 24; break; } else { __label__ = 51; break; } //@line 1625 "_json.c"
      case 24: // $bb25
        var $137=$idx_addr; //@line 1625 "_json.c"
        var $138=($137) + 2; //@line 1625 "_json.c"
        var $139=$str; //@line 1625 "_json.c"
        var $140=$139+2*$138; //@line 1625 "_json.c"
        var $141=HEAP[$140]; //@line 1625 "_json.c"
        var $142=($141)==108; //@line 1625 "_json.c"
        if ($142) { __label__ = 25; break; } else { __label__ = 51; break; } //@line 1625 "_json.c"
      case 25: // $bb26
        var $143=$idx_addr; //@line 1625 "_json.c"
        var $144=($143) + 3; //@line 1625 "_json.c"
        var $145=$str; //@line 1625 "_json.c"
        var $146=$145+2*$144; //@line 1625 "_json.c"
        var $147=HEAP[$146]; //@line 1625 "_json.c"
        var $148=($147)==115; //@line 1625 "_json.c"
        if ($148) { __label__ = 26; break; } else { __label__ = 51; break; } //@line 1625 "_json.c"
      case 26: // $bb27
        var $149=$idx_addr; //@line 1625 "_json.c"
        var $150=($149) + 4; //@line 1625 "_json.c"
        var $151=$str; //@line 1625 "_json.c"
        var $152=$151+2*$150; //@line 1625 "_json.c"
        var $153=HEAP[$152]; //@line 1625 "_json.c"
        var $154=($153)==101; //@line 1625 "_json.c"
        if ($154) { __label__ = 27; break; } else { __label__ = 51; break; } //@line 1625 "_json.c"
      case 27: // $bb28
        var $155=HEAP[__Py_ZeroStruct]; //@line 1626 "_json.c"
        var $156=($155) + 1; //@line 1626 "_json.c"
        HEAP[__Py_ZeroStruct]=$156; //@line 1626 "_json.c"
        var $157=$idx_addr; //@line 1627 "_json.c"
        var $158=($157) + 5; //@line 1627 "_json.c"
        var $159=$next_idx_ptr_addr; //@line 1627 "_json.c"
        HEAP[$159]=$158; //@line 1627 "_json.c"
        $0=__Py_ZeroStruct; //@line 1628 "_json.c"
        __label__ = 52; break; //@line 1628 "_json.c"
      case 28: // $bb30
        var $160=$idx_addr; //@line 1633 "_json.c"
        var $161=($160) + 2; //@line 1633 "_json.c"
        var $162=$length; //@line 1633 "_json.c"
        var $163=($161) < ($162); //@line 1633 "_json.c"
        if ($163) { __label__ = 29; break; } else { __label__ = 51; break; } //@line 1633 "_json.c"
      case 29: // $bb31
        var $164=$idx_addr; //@line 1633 "_json.c"
        var $165=($164) + 1; //@line 1633 "_json.c"
        var $166=$str; //@line 1633 "_json.c"
        var $167=$166+2*$165; //@line 1633 "_json.c"
        var $168=HEAP[$167]; //@line 1633 "_json.c"
        var $169=($168)==97; //@line 1633 "_json.c"
        if ($169) { __label__ = 30; break; } else { __label__ = 51; break; } //@line 1633 "_json.c"
      case 30: // $bb32
        var $170=$idx_addr; //@line 1633 "_json.c"
        var $171=($170) + 2; //@line 1633 "_json.c"
        var $172=$str; //@line 1633 "_json.c"
        var $173=$172+2*$171; //@line 1633 "_json.c"
        var $174=HEAP[$173]; //@line 1633 "_json.c"
        var $175=($174)==78; //@line 1633 "_json.c"
        if ($175) { __label__ = 31; break; } else { __label__ = 51; break; } //@line 1633 "_json.c"
      case 31: // $bb33
        var $176=$s_addr; //@line 1634 "_json.c"
        var $177=$idx_addr; //@line 1634 "_json.c"
        var $178=$next_idx_ptr_addr; //@line 1634 "_json.c"
        var $179=__parse_constant($176, __str36, $177, $178); //@line 1634 "_json.c"
        $0=$179; //@line 1634 "_json.c"
        __label__ = 52; break; //@line 1634 "_json.c"
      case 32: // $bb35
        var $180=$idx_addr; //@line 1639 "_json.c"
        var $181=($180) + 7; //@line 1639 "_json.c"
        var $182=$length; //@line 1639 "_json.c"
        var $183=($181) < ($182); //@line 1639 "_json.c"
        if ($183) { __label__ = 33; break; } else { __label__ = 51; break; } //@line 1639 "_json.c"
      case 33: // $bb36
        var $184=$idx_addr; //@line 1639 "_json.c"
        var $185=($184) + 1; //@line 1639 "_json.c"
        var $186=$str; //@line 1639 "_json.c"
        var $187=$186+2*$185; //@line 1639 "_json.c"
        var $188=HEAP[$187]; //@line 1639 "_json.c"
        var $189=($188)==110; //@line 1639 "_json.c"
        if ($189) { __label__ = 34; break; } else { __label__ = 51; break; } //@line 1639 "_json.c"
      case 34: // $bb37
        var $190=$idx_addr; //@line 1639 "_json.c"
        var $191=($190) + 2; //@line 1639 "_json.c"
        var $192=$str; //@line 1639 "_json.c"
        var $193=$192+2*$191; //@line 1639 "_json.c"
        var $194=HEAP[$193]; //@line 1639 "_json.c"
        var $195=($194)==102; //@line 1639 "_json.c"
        if ($195) { __label__ = 35; break; } else { __label__ = 51; break; } //@line 1639 "_json.c"
      case 35: // $bb38
        var $196=$idx_addr; //@line 1639 "_json.c"
        var $197=($196) + 3; //@line 1639 "_json.c"
        var $198=$str; //@line 1639 "_json.c"
        var $199=$198+2*$197; //@line 1639 "_json.c"
        var $200=HEAP[$199]; //@line 1639 "_json.c"
        var $201=($200)==105; //@line 1639 "_json.c"
        if ($201) { __label__ = 36; break; } else { __label__ = 51; break; } //@line 1639 "_json.c"
      case 36: // $bb39
        var $202=$idx_addr; //@line 1639 "_json.c"
        var $203=($202) + 4; //@line 1639 "_json.c"
        var $204=$str; //@line 1639 "_json.c"
        var $205=$204+2*$203; //@line 1639 "_json.c"
        var $206=HEAP[$205]; //@line 1639 "_json.c"
        var $207=($206)==110; //@line 1639 "_json.c"
        if ($207) { __label__ = 37; break; } else { __label__ = 51; break; } //@line 1639 "_json.c"
      case 37: // $bb40
        var $208=$idx_addr; //@line 1639 "_json.c"
        var $209=($208) + 5; //@line 1639 "_json.c"
        var $210=$str; //@line 1639 "_json.c"
        var $211=$210+2*$209; //@line 1639 "_json.c"
        var $212=HEAP[$211]; //@line 1639 "_json.c"
        var $213=($212)==105; //@line 1639 "_json.c"
        if ($213) { __label__ = 38; break; } else { __label__ = 51; break; } //@line 1639 "_json.c"
      case 38: // $bb41
        var $214=$idx_addr; //@line 1639 "_json.c"
        var $215=($214) + 6; //@line 1639 "_json.c"
        var $216=$str; //@line 1639 "_json.c"
        var $217=$216+2*$215; //@line 1639 "_json.c"
        var $218=HEAP[$217]; //@line 1639 "_json.c"
        var $219=($218)==116; //@line 1639 "_json.c"
        if ($219) { __label__ = 39; break; } else { __label__ = 51; break; } //@line 1639 "_json.c"
      case 39: // $bb42
        var $220=$idx_addr; //@line 1639 "_json.c"
        var $221=($220) + 7; //@line 1639 "_json.c"
        var $222=$str; //@line 1639 "_json.c"
        var $223=$222+2*$221; //@line 1639 "_json.c"
        var $224=HEAP[$223]; //@line 1639 "_json.c"
        var $225=($224)==121; //@line 1639 "_json.c"
        if ($225) { __label__ = 40; break; } else { __label__ = 51; break; } //@line 1639 "_json.c"
      case 40: // $bb43
        var $226=$s_addr; //@line 1640 "_json.c"
        var $227=$idx_addr; //@line 1640 "_json.c"
        var $228=$next_idx_ptr_addr; //@line 1640 "_json.c"
        var $229=__parse_constant($226, __str37, $227, $228); //@line 1640 "_json.c"
        $0=$229; //@line 1640 "_json.c"
        __label__ = 52; break; //@line 1640 "_json.c"
      case 41: // $bb45
        var $230=$idx_addr; //@line 1645 "_json.c"
        var $231=($230) + 8; //@line 1645 "_json.c"
        var $232=$length; //@line 1645 "_json.c"
        var $233=($231) < ($232); //@line 1645 "_json.c"
        if ($233) { __label__ = 42; break; } else { __label__ = 51; break; } //@line 1645 "_json.c"
      case 42: // $bb46
        var $234=$idx_addr; //@line 1645 "_json.c"
        var $235=($234) + 1; //@line 1645 "_json.c"
        var $236=$str; //@line 1645 "_json.c"
        var $237=$236+2*$235; //@line 1645 "_json.c"
        var $238=HEAP[$237]; //@line 1645 "_json.c"
        var $239=($238)==73; //@line 1645 "_json.c"
        if ($239) { __label__ = 43; break; } else { __label__ = 51; break; } //@line 1645 "_json.c"
      case 43: // $bb47
        var $240=$idx_addr; //@line 1645 "_json.c"
        var $241=($240) + 2; //@line 1645 "_json.c"
        var $242=$str; //@line 1645 "_json.c"
        var $243=$242+2*$241; //@line 1645 "_json.c"
        var $244=HEAP[$243]; //@line 1645 "_json.c"
        var $245=($244)==110; //@line 1645 "_json.c"
        if ($245) { __label__ = 44; break; } else { __label__ = 51; break; } //@line 1645 "_json.c"
      case 44: // $bb48
        var $246=$idx_addr; //@line 1645 "_json.c"
        var $247=($246) + 3; //@line 1645 "_json.c"
        var $248=$str; //@line 1645 "_json.c"
        var $249=$248+2*$247; //@line 1645 "_json.c"
        var $250=HEAP[$249]; //@line 1645 "_json.c"
        var $251=($250)==102; //@line 1645 "_json.c"
        if ($251) { __label__ = 45; break; } else { __label__ = 51; break; } //@line 1645 "_json.c"
      case 45: // $bb49
        var $252=$idx_addr; //@line 1645 "_json.c"
        var $253=($252) + 4; //@line 1645 "_json.c"
        var $254=$str; //@line 1645 "_json.c"
        var $255=$254+2*$253; //@line 1645 "_json.c"
        var $256=HEAP[$255]; //@line 1645 "_json.c"
        var $257=($256)==105; //@line 1645 "_json.c"
        if ($257) { __label__ = 46; break; } else { __label__ = 51; break; } //@line 1645 "_json.c"
      case 46: // $bb50
        var $258=$idx_addr; //@line 1645 "_json.c"
        var $259=($258) + 5; //@line 1645 "_json.c"
        var $260=$str; //@line 1645 "_json.c"
        var $261=$260+2*$259; //@line 1645 "_json.c"
        var $262=HEAP[$261]; //@line 1645 "_json.c"
        var $263=($262)==110; //@line 1645 "_json.c"
        if ($263) { __label__ = 47; break; } else { __label__ = 51; break; } //@line 1645 "_json.c"
      case 47: // $bb51
        var $264=$idx_addr; //@line 1645 "_json.c"
        var $265=($264) + 6; //@line 1645 "_json.c"
        var $266=$str; //@line 1645 "_json.c"
        var $267=$266+2*$265; //@line 1645 "_json.c"
        var $268=HEAP[$267]; //@line 1645 "_json.c"
        var $269=($268)==105; //@line 1645 "_json.c"
        if ($269) { __label__ = 48; break; } else { __label__ = 51; break; } //@line 1645 "_json.c"
      case 48: // $bb52
        var $270=$idx_addr; //@line 1645 "_json.c"
        var $271=($270) + 7; //@line 1645 "_json.c"
        var $272=$str; //@line 1645 "_json.c"
        var $273=$272+2*$271; //@line 1645 "_json.c"
        var $274=HEAP[$273]; //@line 1645 "_json.c"
        var $275=($274)==116; //@line 1645 "_json.c"
        if ($275) { __label__ = 49; break; } else { __label__ = 51; break; } //@line 1645 "_json.c"
      case 49: // $bb53
        var $276=$idx_addr; //@line 1645 "_json.c"
        var $277=($276) + 8; //@line 1645 "_json.c"
        var $278=$str; //@line 1645 "_json.c"
        var $279=$278+2*$277; //@line 1645 "_json.c"
        var $280=HEAP[$279]; //@line 1645 "_json.c"
        var $281=($280)==121; //@line 1645 "_json.c"
        if ($281) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1645 "_json.c"
      case 50: // $bb54
        var $282=$s_addr; //@line 1646 "_json.c"
        var $283=$idx_addr; //@line 1646 "_json.c"
        var $284=$next_idx_ptr_addr; //@line 1646 "_json.c"
        var $285=__parse_constant($282, __str38, $283, $284); //@line 1646 "_json.c"
        $0=$285; //@line 1646 "_json.c"
        __label__ = 52; break; //@line 1646 "_json.c"
      case 51: // $bb55
        var $286=$s_addr; //@line 1651 "_json.c"
        var $287=$pystr_addr; //@line 1651 "_json.c"
        var $288=$idx_addr; //@line 1651 "_json.c"
        var $289=$next_idx_ptr_addr; //@line 1651 "_json.c"
        var $290=__match_number_unicode($286, $287, $288, $289); //@line 1651 "_json.c"
        $0=$290; //@line 1651 "_json.c"
        __label__ = 52; break; //@line 1651 "_json.c"
      case 52: // $bb56
        var $291=$0; //@line 1583 "_json.c"
        $retval=$291; //@line 1583 "_json.c"
        var $retval57=$retval; //@line 1583 "_json.c"
        ;
        return $retval57; //@line 1583 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_call($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $pystr=__stackBase__;
        var $rval;
        var $idx=__stackBase__+4;
        var $next_idx=__stackBase__+8;
        var $s;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$next_idx]=-1; //@line 1661 "_json.c"
        var $1=$self_addr; //@line 1664 "_json.c"
        var $2=$1+4; //@line 1664 "_json.c"
        var $3=HEAP[$2]; //@line 1664 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 1664 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1664 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1664 "_json.c"
        var $6=$5+4; //@line 1664 "_json.c"
        var $7=HEAP[$6]; //@line 1664 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 1664 "_json.c"
        var $9=($8)==0; //@line 1664 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1664 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str28, __str29, 1664, ___PRETTY_FUNCTION___10703); //@line 1664 "_json.c"
        throw "Reached an unreachable!" //@line 1664 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1665 "_json.c"
        var $11=$10; //@line 1665 "_json.c"
        $s=$11; //@line 1665 "_json.c"
        var $12=$args_addr; //@line 1666 "_json.c"
        var $13=$kwds_addr; //@line 1666 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, __str41, _kwlist_10701, allocate([$pystr,0,0,0,(FUNCTION_TABLE_OFFSET + 4),0,0,0,$idx,0,0,0], ["%struct.PyObject**",0,0,0,"i32 (%struct.PyObject*, i32*)*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1666 "_json.c"
        var $15=($14)==0; //@line 1666 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1666 "_json.c"
      case 4: // $bb3
        $0=0; //@line 1667 "_json.c"
        __label__ = 11; break; //@line 1667 "_json.c"
      case 5: // $bb4
        var $16=HEAP[$pystr]; //@line 1669 "_json.c"
        var $17=$16+4; //@line 1669 "_json.c"
        var $18=HEAP[$17]; //@line 1669 "_json.c"
        var $19=$18+84; //@line 1669 "_json.c"
        var $20=HEAP[$19]; //@line 1669 "_json.c"
        var $21=($20) & 134217728; //@line 1669 "_json.c"
        var $22=($21)!=0; //@line 1669 "_json.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1669 "_json.c"
      case 6: // $bb5
        var $23=HEAP[$idx]; //@line 1670 "_json.c"
        var $24=HEAP[$pystr]; //@line 1670 "_json.c"
        var $25=$s; //@line 1670 "_json.c"
        var $26=_scan_once_str($25, $24, $23, $next_idx); //@line 1670 "_json.c"
        $rval=$26; //@line 1670 "_json.c"
        __label__ = 10; break; //@line 1670 "_json.c"
      case 7: // $bb6
        var $27=HEAP[$pystr]; //@line 1672 "_json.c"
        var $28=$27+4; //@line 1672 "_json.c"
        var $29=HEAP[$28]; //@line 1672 "_json.c"
        var $30=$29+84; //@line 1672 "_json.c"
        var $31=HEAP[$30]; //@line 1672 "_json.c"
        var $32=($31) & 268435456; //@line 1672 "_json.c"
        var $33=($32)!=0; //@line 1672 "_json.c"
        if ($33) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1672 "_json.c"
      case 8: // $bb7
        var $34=HEAP[$idx]; //@line 1673 "_json.c"
        var $35=HEAP[$pystr]; //@line 1673 "_json.c"
        var $36=$s; //@line 1673 "_json.c"
        var $37=_scan_once_unicode($36, $35, $34, $next_idx); //@line 1673 "_json.c"
        $rval=$37; //@line 1673 "_json.c"
        __label__ = 10; break; //@line 1673 "_json.c"
      case 9: // $bb8
        var $38=HEAP[$pystr]; //@line 1676 "_json.c"
        var $39=$38+4; //@line 1676 "_json.c"
        var $40=HEAP[$39]; //@line 1676 "_json.c"
        var $41=$40+12; //@line 1676 "_json.c"
        var $42=HEAP[$41]; //@line 1676 "_json.c"
        var $43=HEAP[_PyExc_TypeError]; //@line 1676 "_json.c"
        var $44=_PyErr_Format($43, __str27, allocate([$42,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 1676 "_json.c"
        $0=0; //@line 1679 "_json.c"
        __label__ = 11; break; //@line 1679 "_json.c"
      case 10: // $bb9
        var $45=HEAP[$next_idx]; //@line 1681 "_json.c"
        var $46=$rval; //@line 1681 "_json.c"
        var $47=__build_rval_index_tuple($46, $45); //@line 1681 "_json.c"
        $0=$47; //@line 1681 "_json.c"
        __label__ = 11; break; //@line 1681 "_json.c"
      case 11: // $bb10
        var $48=$0; //@line 1667 "_json.c"
        $retval=$48; //@line 1667 "_json.c"
        var $retval11=$retval; //@line 1667 "_json.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1667 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_new($type, $args, $kwds) {
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
        var $s;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 1688 "_json.c"
        var $2=$1+152; //@line 1688 "_json.c"
        var $3=HEAP[$2]; //@line 1688 "_json.c"
        var $4=$type_addr; //@line 1688 "_json.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 1688 "_json.c"
        var $6=$5; //@line 1688 "_json.c"
        $s=$6; //@line 1688 "_json.c"
        var $7=$s; //@line 1689 "_json.c"
        var $8=($7)!=0; //@line 1689 "_json.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1689 "_json.c"
      case 1: // $bb
        var $9=$s; //@line 1690 "_json.c"
        var $10=$9+8; //@line 1690 "_json.c"
        HEAP[$10]=0; //@line 1690 "_json.c"
        var $11=$s; //@line 1691 "_json.c"
        var $12=$11+12; //@line 1691 "_json.c"
        HEAP[$12]=0; //@line 1691 "_json.c"
        var $13=$s; //@line 1692 "_json.c"
        var $14=$13+16; //@line 1692 "_json.c"
        HEAP[$14]=0; //@line 1692 "_json.c"
        var $15=$s; //@line 1693 "_json.c"
        var $16=$15+20; //@line 1693 "_json.c"
        HEAP[$16]=0; //@line 1693 "_json.c"
        var $17=$s; //@line 1694 "_json.c"
        var $18=$17+24; //@line 1694 "_json.c"
        HEAP[$18]=0; //@line 1694 "_json.c"
        var $19=$s; //@line 1695 "_json.c"
        var $20=$19+28; //@line 1695 "_json.c"
        HEAP[$20]=0; //@line 1695 "_json.c"
        var $21=$s; //@line 1696 "_json.c"
        var $22=$21+32; //@line 1696 "_json.c"
        HEAP[$22]=0; //@line 1696 "_json.c"
        __label__ = 2; break; //@line 1696 "_json.c"
      case 2: // $bb1
        var $23=$s; //@line 1698 "_json.c"
        var $24=$23; //@line 1698 "_json.c"
        $0=$24; //@line 1698 "_json.c"
        var $25=$0; //@line 1698 "_json.c"
        $retval=$25; //@line 1698 "_json.c"
        var $retval2=$retval; //@line 1698 "_json.c"
        ;
        return $retval2; //@line 1698 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _scanner_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $ctx=__stackBase__;
        var $s;
        var $tmp;
        var $_py_tmp;
        var $_py_tmp26;
        var $_py_tmp30;
        var $_py_tmp34;
        var $_py_tmp38;
        var $_py_tmp42;
        var $_py_tmp46;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$self_addr; //@line 1709 "_json.c"
        var $2=$1+4; //@line 1709 "_json.c"
        var $3=HEAP[$2]; //@line 1709 "_json.c"
        var $4=($3)!=(_PyScannerType); //@line 1709 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1709 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1709 "_json.c"
        var $6=$5+4; //@line 1709 "_json.c"
        var $7=HEAP[$6]; //@line 1709 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyScannerType); //@line 1709 "_json.c"
        var $9=($8)==0; //@line 1709 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1709 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str28, __str29, 1709, ___PRETTY_FUNCTION___10762); //@line 1709 "_json.c"
        throw "Reached an unreachable!" //@line 1709 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1710 "_json.c"
        var $11=$10; //@line 1710 "_json.c"
        $s=$11; //@line 1710 "_json.c"
        var $12=$args_addr; //@line 1712 "_json.c"
        var $13=$kwds_addr; //@line 1712 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, __str44, _kwlist_10760, allocate([$ctx,0,0,0], ["%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1712 "_json.c"
        var $15=($14)==0; //@line 1712 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1712 "_json.c"
      case 4: // $bb3
        $0=-1; //@line 1713 "_json.c"
        __label__ = 45; break; //@line 1713 "_json.c"
      case 5: // $bb4
        var $16=HEAP[$ctx]; //@line 1716 "_json.c"
        var $17=_PyObject_GetAttrString($16, __str); //@line 1716 "_json.c"
        var $18=$s; //@line 1716 "_json.c"
        var $19=$18+8; //@line 1716 "_json.c"
        HEAP[$19]=$17; //@line 1716 "_json.c"
        var $20=$s; //@line 1717 "_json.c"
        var $21=$20+8; //@line 1717 "_json.c"
        var $22=HEAP[$21]; //@line 1717 "_json.c"
        var $23=($22)==0; //@line 1717 "_json.c"
        if ($23) { __label__ = 23; break; } else { __label__ = 6; break; } //@line 1717 "_json.c"
      case 6: // $bb5
        var $24=$s; //@line 1719 "_json.c"
        var $25=$24+8; //@line 1719 "_json.c"
        var $26=HEAP[$25]; //@line 1719 "_json.c"
        var $27=($26)==(__Py_NoneStruct); //@line 1719 "_json.c"
        if ($27) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 1719 "_json.c"
      case 7: // $bb6
        var $28=HEAP[__Py_NoneStruct]; //@line 1720 "_json.c"
        var $29=($28) - 1; //@line 1720 "_json.c"
        HEAP[__Py_NoneStruct]=$29; //@line 1720 "_json.c"
        var $30=HEAP[__Py_NoneStruct]; //@line 1720 "_json.c"
        var $31=($30)==0; //@line 1720 "_json.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1720 "_json.c"
      case 8: // $bb7
        var $32=HEAP[__Py_NoneStruct+4]; //@line 1720 "_json.c"
        var $33=$32+24; //@line 1720 "_json.c"
        var $34=HEAP[$33]; //@line 1720 "_json.c"
        FUNCTION_TABLE[$34](__Py_NoneStruct); //@line 1720 "_json.c"
        __label__ = 9; break; //@line 1720 "_json.c"
      case 9: // $bb8
        var $35=_PyString_InternFromString(__str26); //@line 1721 "_json.c"
        var $36=$s; //@line 1721 "_json.c"
        var $37=$36+8; //@line 1721 "_json.c"
        HEAP[$37]=$35; //@line 1721 "_json.c"
        __label__ = 14; break; //@line 1721 "_json.c"
      case 10: // $bb9
        var $38=$s; //@line 1723 "_json.c"
        var $39=$38+8; //@line 1723 "_json.c"
        var $40=HEAP[$39]; //@line 1723 "_json.c"
        var $41=$40+4; //@line 1723 "_json.c"
        var $42=HEAP[$41]; //@line 1723 "_json.c"
        var $43=$42+84; //@line 1723 "_json.c"
        var $44=HEAP[$43]; //@line 1723 "_json.c"
        var $45=($44) & 268435456; //@line 1723 "_json.c"
        var $46=($45)!=0; //@line 1723 "_json.c"
        if ($46) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1723 "_json.c"
      case 11: // $bb10
        var $47=$s; //@line 1724 "_json.c"
        var $48=$47+8; //@line 1724 "_json.c"
        var $49=HEAP[$48]; //@line 1724 "_json.c"
        var $50=_PyUnicodeUCS2_AsEncodedString($49, 0, 0); //@line 1724 "_json.c"
        $tmp=$50; //@line 1724 "_json.c"
        var $51=$s; //@line 1725 "_json.c"
        var $52=$51+8; //@line 1725 "_json.c"
        var $53=HEAP[$52]; //@line 1725 "_json.c"
        var $54=$53; //@line 1725 "_json.c"
        var $55=HEAP[$54]; //@line 1725 "_json.c"
        var $56=($55) - 1; //@line 1725 "_json.c"
        var $57=$53; //@line 1725 "_json.c"
        HEAP[$57]=$56; //@line 1725 "_json.c"
        var $58=$53; //@line 1725 "_json.c"
        var $59=HEAP[$58]; //@line 1725 "_json.c"
        var $60=($59)==0; //@line 1725 "_json.c"
        if ($60) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1725 "_json.c"
      case 12: // $bb11
        var $61=$s; //@line 1725 "_json.c"
        var $62=$61+8; //@line 1725 "_json.c"
        var $63=HEAP[$62]; //@line 1725 "_json.c"
        var $64=$63+4; //@line 1725 "_json.c"
        var $65=HEAP[$64]; //@line 1725 "_json.c"
        var $66=$65+24; //@line 1725 "_json.c"
        var $67=HEAP[$66]; //@line 1725 "_json.c"
        var $68=$s; //@line 1725 "_json.c"
        var $69=$68+8; //@line 1725 "_json.c"
        var $70=HEAP[$69]; //@line 1725 "_json.c"
        FUNCTION_TABLE[$67]($70); //@line 1725 "_json.c"
        __label__ = 13; break; //@line 1725 "_json.c"
      case 13: // $bb12
        var $71=$s; //@line 1726 "_json.c"
        var $72=$71+8; //@line 1726 "_json.c"
        var $73=$tmp; //@line 1726 "_json.c"
        HEAP[$72]=$73; //@line 1726 "_json.c"
        __label__ = 14; break; //@line 1726 "_json.c"
      case 14: // $bb13
        var $74=$s; //@line 1728 "_json.c"
        var $75=$74+8; //@line 1728 "_json.c"
        var $76=HEAP[$75]; //@line 1728 "_json.c"
        var $77=($76)==0; //@line 1728 "_json.c"
        if ($77) { __label__ = 23; break; } else { __label__ = 15; break; } //@line 1728 "_json.c"
      case 15: // $bb14
        var $78=$s; //@line 1728 "_json.c"
        var $79=$78+8; //@line 1728 "_json.c"
        var $80=HEAP[$79]; //@line 1728 "_json.c"
        var $81=$80+4; //@line 1728 "_json.c"
        var $82=HEAP[$81]; //@line 1728 "_json.c"
        var $83=$82+84; //@line 1728 "_json.c"
        var $84=HEAP[$83]; //@line 1728 "_json.c"
        var $85=($84) & 134217728; //@line 1728 "_json.c"
        var $86=($85)==0; //@line 1728 "_json.c"
        if ($86) { __label__ = 23; break; } else { __label__ = 16; break; } //@line 1728 "_json.c"
      case 16: // $bb15
        var $87=HEAP[$ctx]; //@line 1732 "_json.c"
        var $88=_PyObject_GetAttrString($87, __str1); //@line 1732 "_json.c"
        var $89=$s; //@line 1732 "_json.c"
        var $90=$89+12; //@line 1732 "_json.c"
        HEAP[$90]=$88; //@line 1732 "_json.c"
        var $91=$s; //@line 1733 "_json.c"
        var $92=$91+12; //@line 1733 "_json.c"
        var $93=HEAP[$92]; //@line 1733 "_json.c"
        var $94=($93)==0; //@line 1733 "_json.c"
        if ($94) { __label__ = 23; break; } else { __label__ = 17; break; } //@line 1733 "_json.c"
      case 17: // $bb16
        var $95=HEAP[$ctx]; //@line 1735 "_json.c"
        var $96=_PyObject_GetAttrString($95, __str2); //@line 1735 "_json.c"
        var $97=$s; //@line 1735 "_json.c"
        var $98=$97+16; //@line 1735 "_json.c"
        HEAP[$98]=$96; //@line 1735 "_json.c"
        var $99=$s; //@line 1736 "_json.c"
        var $100=$99+16; //@line 1736 "_json.c"
        var $101=HEAP[$100]; //@line 1736 "_json.c"
        var $102=($101)==0; //@line 1736 "_json.c"
        if ($102) { __label__ = 23; break; } else { __label__ = 18; break; } //@line 1736 "_json.c"
      case 18: // $bb17
        var $103=HEAP[$ctx]; //@line 1738 "_json.c"
        var $104=_PyObject_GetAttrString($103, __str3); //@line 1738 "_json.c"
        var $105=$s; //@line 1738 "_json.c"
        var $106=$105+20; //@line 1738 "_json.c"
        HEAP[$106]=$104; //@line 1738 "_json.c"
        var $107=$s; //@line 1739 "_json.c"
        var $108=$107+20; //@line 1739 "_json.c"
        var $109=HEAP[$108]; //@line 1739 "_json.c"
        var $110=($109)==0; //@line 1739 "_json.c"
        if ($110) { __label__ = 23; break; } else { __label__ = 19; break; } //@line 1739 "_json.c"
      case 19: // $bb18
        var $111=HEAP[$ctx]; //@line 1741 "_json.c"
        var $112=_PyObject_GetAttrString($111, __str4); //@line 1741 "_json.c"
        var $113=$s; //@line 1741 "_json.c"
        var $114=$113+24; //@line 1741 "_json.c"
        HEAP[$114]=$112; //@line 1741 "_json.c"
        var $115=$s; //@line 1742 "_json.c"
        var $116=$115+24; //@line 1742 "_json.c"
        var $117=HEAP[$116]; //@line 1742 "_json.c"
        var $118=($117)==0; //@line 1742 "_json.c"
        if ($118) { __label__ = 23; break; } else { __label__ = 20; break; } //@line 1742 "_json.c"
      case 20: // $bb19
        var $119=HEAP[$ctx]; //@line 1744 "_json.c"
        var $120=_PyObject_GetAttrString($119, __str5); //@line 1744 "_json.c"
        var $121=$s; //@line 1744 "_json.c"
        var $122=$121+28; //@line 1744 "_json.c"
        HEAP[$122]=$120; //@line 1744 "_json.c"
        var $123=$s; //@line 1745 "_json.c"
        var $124=$123+28; //@line 1745 "_json.c"
        var $125=HEAP[$124]; //@line 1745 "_json.c"
        var $126=($125)==0; //@line 1745 "_json.c"
        if ($126) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 1745 "_json.c"
      case 21: // $bb20
        var $127=HEAP[$ctx]; //@line 1747 "_json.c"
        var $128=_PyObject_GetAttrString($127, __str6); //@line 1747 "_json.c"
        var $129=$s; //@line 1747 "_json.c"
        var $130=$129+32; //@line 1747 "_json.c"
        HEAP[$130]=$128; //@line 1747 "_json.c"
        var $131=$s; //@line 1748 "_json.c"
        var $132=$131+32; //@line 1748 "_json.c"
        var $133=HEAP[$132]; //@line 1748 "_json.c"
        var $134=($133)==0; //@line 1748 "_json.c"
        if ($134) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1748 "_json.c"
      case 22: // $bb21
        $0=0; //@line 1751 "_json.c"
        __label__ = 45; break; //@line 1751 "_json.c"
      case 23: // $bail
        var $135=$s; //@line 1754 "_json.c"
        var $136=$135+8; //@line 1754 "_json.c"
        var $137=HEAP[$136]; //@line 1754 "_json.c"
        var $138=($137)!=0; //@line 1754 "_json.c"
        if ($138) { __label__ = 24; break; } else { __label__ = 26; break; } //@line 1754 "_json.c"
      case 24: // $bb22
        var $139=$s; //@line 1754 "_json.c"
        var $140=$139+8; //@line 1754 "_json.c"
        var $141=HEAP[$140]; //@line 1754 "_json.c"
        $_py_tmp=$141; //@line 1754 "_json.c"
        var $142=$s; //@line 1754 "_json.c"
        var $143=$142+8; //@line 1754 "_json.c"
        HEAP[$143]=0; //@line 1754 "_json.c"
        var $144=$_py_tmp; //@line 1754 "_json.c"
        var $145=$144; //@line 1754 "_json.c"
        var $146=HEAP[$145]; //@line 1754 "_json.c"
        var $147=($146) - 1; //@line 1754 "_json.c"
        var $148=$_py_tmp; //@line 1754 "_json.c"
        var $149=$148; //@line 1754 "_json.c"
        HEAP[$149]=$147; //@line 1754 "_json.c"
        var $150=$_py_tmp; //@line 1754 "_json.c"
        var $151=$150; //@line 1754 "_json.c"
        var $152=HEAP[$151]; //@line 1754 "_json.c"
        var $153=($152)==0; //@line 1754 "_json.c"
        if ($153) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1754 "_json.c"
      case 25: // $bb23
        var $154=$_py_tmp; //@line 1754 "_json.c"
        var $155=$154+4; //@line 1754 "_json.c"
        var $156=HEAP[$155]; //@line 1754 "_json.c"
        var $157=$156+24; //@line 1754 "_json.c"
        var $158=HEAP[$157]; //@line 1754 "_json.c"
        var $159=$_py_tmp; //@line 1754 "_json.c"
        FUNCTION_TABLE[$158]($159); //@line 1754 "_json.c"
        __label__ = 26; break; //@line 1754 "_json.c"
      case 26: // $bb24
        var $160=$s; //@line 1755 "_json.c"
        var $161=$160+12; //@line 1755 "_json.c"
        var $162=HEAP[$161]; //@line 1755 "_json.c"
        var $163=($162)!=0; //@line 1755 "_json.c"
        if ($163) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 1755 "_json.c"
      case 27: // $bb25
        var $164=$s; //@line 1755 "_json.c"
        var $165=$164+12; //@line 1755 "_json.c"
        var $166=HEAP[$165]; //@line 1755 "_json.c"
        $_py_tmp26=$166; //@line 1755 "_json.c"
        var $167=$s; //@line 1755 "_json.c"
        var $168=$167+12; //@line 1755 "_json.c"
        HEAP[$168]=0; //@line 1755 "_json.c"
        var $169=$_py_tmp26; //@line 1755 "_json.c"
        var $170=$169; //@line 1755 "_json.c"
        var $171=HEAP[$170]; //@line 1755 "_json.c"
        var $172=($171) - 1; //@line 1755 "_json.c"
        var $173=$_py_tmp26; //@line 1755 "_json.c"
        var $174=$173; //@line 1755 "_json.c"
        HEAP[$174]=$172; //@line 1755 "_json.c"
        var $175=$_py_tmp26; //@line 1755 "_json.c"
        var $176=$175; //@line 1755 "_json.c"
        var $177=HEAP[$176]; //@line 1755 "_json.c"
        var $178=($177)==0; //@line 1755 "_json.c"
        if ($178) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1755 "_json.c"
      case 28: // $bb27
        var $179=$_py_tmp26; //@line 1755 "_json.c"
        var $180=$179+4; //@line 1755 "_json.c"
        var $181=HEAP[$180]; //@line 1755 "_json.c"
        var $182=$181+24; //@line 1755 "_json.c"
        var $183=HEAP[$182]; //@line 1755 "_json.c"
        var $184=$_py_tmp26; //@line 1755 "_json.c"
        FUNCTION_TABLE[$183]($184); //@line 1755 "_json.c"
        __label__ = 29; break; //@line 1755 "_json.c"
      case 29: // $bb28
        var $185=$s; //@line 1756 "_json.c"
        var $186=$185+16; //@line 1756 "_json.c"
        var $187=HEAP[$186]; //@line 1756 "_json.c"
        var $188=($187)!=0; //@line 1756 "_json.c"
        if ($188) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 1756 "_json.c"
      case 30: // $bb29
        var $189=$s; //@line 1756 "_json.c"
        var $190=$189+16; //@line 1756 "_json.c"
        var $191=HEAP[$190]; //@line 1756 "_json.c"
        $_py_tmp30=$191; //@line 1756 "_json.c"
        var $192=$s; //@line 1756 "_json.c"
        var $193=$192+16; //@line 1756 "_json.c"
        HEAP[$193]=0; //@line 1756 "_json.c"
        var $194=$_py_tmp30; //@line 1756 "_json.c"
        var $195=$194; //@line 1756 "_json.c"
        var $196=HEAP[$195]; //@line 1756 "_json.c"
        var $197=($196) - 1; //@line 1756 "_json.c"
        var $198=$_py_tmp30; //@line 1756 "_json.c"
        var $199=$198; //@line 1756 "_json.c"
        HEAP[$199]=$197; //@line 1756 "_json.c"
        var $200=$_py_tmp30; //@line 1756 "_json.c"
        var $201=$200; //@line 1756 "_json.c"
        var $202=HEAP[$201]; //@line 1756 "_json.c"
        var $203=($202)==0; //@line 1756 "_json.c"
        if ($203) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1756 "_json.c"
      case 31: // $bb31
        var $204=$_py_tmp30; //@line 1756 "_json.c"
        var $205=$204+4; //@line 1756 "_json.c"
        var $206=HEAP[$205]; //@line 1756 "_json.c"
        var $207=$206+24; //@line 1756 "_json.c"
        var $208=HEAP[$207]; //@line 1756 "_json.c"
        var $209=$_py_tmp30; //@line 1756 "_json.c"
        FUNCTION_TABLE[$208]($209); //@line 1756 "_json.c"
        __label__ = 32; break; //@line 1756 "_json.c"
      case 32: // $bb32
        var $210=$s; //@line 1757 "_json.c"
        var $211=$210+20; //@line 1757 "_json.c"
        var $212=HEAP[$211]; //@line 1757 "_json.c"
        var $213=($212)!=0; //@line 1757 "_json.c"
        if ($213) { __label__ = 33; break; } else { __label__ = 35; break; } //@line 1757 "_json.c"
      case 33: // $bb33
        var $214=$s; //@line 1757 "_json.c"
        var $215=$214+20; //@line 1757 "_json.c"
        var $216=HEAP[$215]; //@line 1757 "_json.c"
        $_py_tmp34=$216; //@line 1757 "_json.c"
        var $217=$s; //@line 1757 "_json.c"
        var $218=$217+20; //@line 1757 "_json.c"
        HEAP[$218]=0; //@line 1757 "_json.c"
        var $219=$_py_tmp34; //@line 1757 "_json.c"
        var $220=$219; //@line 1757 "_json.c"
        var $221=HEAP[$220]; //@line 1757 "_json.c"
        var $222=($221) - 1; //@line 1757 "_json.c"
        var $223=$_py_tmp34; //@line 1757 "_json.c"
        var $224=$223; //@line 1757 "_json.c"
        HEAP[$224]=$222; //@line 1757 "_json.c"
        var $225=$_py_tmp34; //@line 1757 "_json.c"
        var $226=$225; //@line 1757 "_json.c"
        var $227=HEAP[$226]; //@line 1757 "_json.c"
        var $228=($227)==0; //@line 1757 "_json.c"
        if ($228) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 1757 "_json.c"
      case 34: // $bb35
        var $229=$_py_tmp34; //@line 1757 "_json.c"
        var $230=$229+4; //@line 1757 "_json.c"
        var $231=HEAP[$230]; //@line 1757 "_json.c"
        var $232=$231+24; //@line 1757 "_json.c"
        var $233=HEAP[$232]; //@line 1757 "_json.c"
        var $234=$_py_tmp34; //@line 1757 "_json.c"
        FUNCTION_TABLE[$233]($234); //@line 1757 "_json.c"
        __label__ = 35; break; //@line 1757 "_json.c"
      case 35: // $bb36
        var $235=$s; //@line 1758 "_json.c"
        var $236=$235+24; //@line 1758 "_json.c"
        var $237=HEAP[$236]; //@line 1758 "_json.c"
        var $238=($237)!=0; //@line 1758 "_json.c"
        if ($238) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 1758 "_json.c"
      case 36: // $bb37
        var $239=$s; //@line 1758 "_json.c"
        var $240=$239+24; //@line 1758 "_json.c"
        var $241=HEAP[$240]; //@line 1758 "_json.c"
        $_py_tmp38=$241; //@line 1758 "_json.c"
        var $242=$s; //@line 1758 "_json.c"
        var $243=$242+24; //@line 1758 "_json.c"
        HEAP[$243]=0; //@line 1758 "_json.c"
        var $244=$_py_tmp38; //@line 1758 "_json.c"
        var $245=$244; //@line 1758 "_json.c"
        var $246=HEAP[$245]; //@line 1758 "_json.c"
        var $247=($246) - 1; //@line 1758 "_json.c"
        var $248=$_py_tmp38; //@line 1758 "_json.c"
        var $249=$248; //@line 1758 "_json.c"
        HEAP[$249]=$247; //@line 1758 "_json.c"
        var $250=$_py_tmp38; //@line 1758 "_json.c"
        var $251=$250; //@line 1758 "_json.c"
        var $252=HEAP[$251]; //@line 1758 "_json.c"
        var $253=($252)==0; //@line 1758 "_json.c"
        if ($253) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1758 "_json.c"
      case 37: // $bb39
        var $254=$_py_tmp38; //@line 1758 "_json.c"
        var $255=$254+4; //@line 1758 "_json.c"
        var $256=HEAP[$255]; //@line 1758 "_json.c"
        var $257=$256+24; //@line 1758 "_json.c"
        var $258=HEAP[$257]; //@line 1758 "_json.c"
        var $259=$_py_tmp38; //@line 1758 "_json.c"
        FUNCTION_TABLE[$258]($259); //@line 1758 "_json.c"
        __label__ = 38; break; //@line 1758 "_json.c"
      case 38: // $bb40
        var $260=$s; //@line 1759 "_json.c"
        var $261=$260+28; //@line 1759 "_json.c"
        var $262=HEAP[$261]; //@line 1759 "_json.c"
        var $263=($262)!=0; //@line 1759 "_json.c"
        if ($263) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 1759 "_json.c"
      case 39: // $bb41
        var $264=$s; //@line 1759 "_json.c"
        var $265=$264+28; //@line 1759 "_json.c"
        var $266=HEAP[$265]; //@line 1759 "_json.c"
        $_py_tmp42=$266; //@line 1759 "_json.c"
        var $267=$s; //@line 1759 "_json.c"
        var $268=$267+28; //@line 1759 "_json.c"
        HEAP[$268]=0; //@line 1759 "_json.c"
        var $269=$_py_tmp42; //@line 1759 "_json.c"
        var $270=$269; //@line 1759 "_json.c"
        var $271=HEAP[$270]; //@line 1759 "_json.c"
        var $272=($271) - 1; //@line 1759 "_json.c"
        var $273=$_py_tmp42; //@line 1759 "_json.c"
        var $274=$273; //@line 1759 "_json.c"
        HEAP[$274]=$272; //@line 1759 "_json.c"
        var $275=$_py_tmp42; //@line 1759 "_json.c"
        var $276=$275; //@line 1759 "_json.c"
        var $277=HEAP[$276]; //@line 1759 "_json.c"
        var $278=($277)==0; //@line 1759 "_json.c"
        if ($278) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1759 "_json.c"
      case 40: // $bb43
        var $279=$_py_tmp42; //@line 1759 "_json.c"
        var $280=$279+4; //@line 1759 "_json.c"
        var $281=HEAP[$280]; //@line 1759 "_json.c"
        var $282=$281+24; //@line 1759 "_json.c"
        var $283=HEAP[$282]; //@line 1759 "_json.c"
        var $284=$_py_tmp42; //@line 1759 "_json.c"
        FUNCTION_TABLE[$283]($284); //@line 1759 "_json.c"
        __label__ = 41; break; //@line 1759 "_json.c"
      case 41: // $bb44
        var $285=$s; //@line 1760 "_json.c"
        var $286=$285+32; //@line 1760 "_json.c"
        var $287=HEAP[$286]; //@line 1760 "_json.c"
        var $288=($287)!=0; //@line 1760 "_json.c"
        if ($288) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 1760 "_json.c"
      case 42: // $bb45
        var $289=$s; //@line 1760 "_json.c"
        var $290=$289+32; //@line 1760 "_json.c"
        var $291=HEAP[$290]; //@line 1760 "_json.c"
        $_py_tmp46=$291; //@line 1760 "_json.c"
        var $292=$s; //@line 1760 "_json.c"
        var $293=$292+32; //@line 1760 "_json.c"
        HEAP[$293]=0; //@line 1760 "_json.c"
        var $294=$_py_tmp46; //@line 1760 "_json.c"
        var $295=$294; //@line 1760 "_json.c"
        var $296=HEAP[$295]; //@line 1760 "_json.c"
        var $297=($296) - 1; //@line 1760 "_json.c"
        var $298=$_py_tmp46; //@line 1760 "_json.c"
        var $299=$298; //@line 1760 "_json.c"
        HEAP[$299]=$297; //@line 1760 "_json.c"
        var $300=$_py_tmp46; //@line 1760 "_json.c"
        var $301=$300; //@line 1760 "_json.c"
        var $302=HEAP[$301]; //@line 1760 "_json.c"
        var $303=($302)==0; //@line 1760 "_json.c"
        if ($303) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1760 "_json.c"
      case 43: // $bb47
        var $304=$_py_tmp46; //@line 1760 "_json.c"
        var $305=$304+4; //@line 1760 "_json.c"
        var $306=HEAP[$305]; //@line 1760 "_json.c"
        var $307=$306+24; //@line 1760 "_json.c"
        var $308=HEAP[$307]; //@line 1760 "_json.c"
        var $309=$_py_tmp46; //@line 1760 "_json.c"
        FUNCTION_TABLE[$308]($309); //@line 1760 "_json.c"
        __label__ = 44; break; //@line 1760 "_json.c"
      case 44: // $bb48
        $0=-1; //@line 1761 "_json.c"
        __label__ = 45; break; //@line 1761 "_json.c"
      case 45: // $bb49
        var $310=$0; //@line 1713 "_json.c"
        $retval=$310; //@line 1713 "_json.c"
        var $retval50=$retval; //@line 1713 "_json.c"
        STACKTOP = __stackBase__;
        return $retval50; //@line 1713 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_new($type, $args, $kwds) {
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
        var $s;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 1814 "_json.c"
        var $2=$1+152; //@line 1814 "_json.c"
        var $3=HEAP[$2]; //@line 1814 "_json.c"
        var $4=$type_addr; //@line 1814 "_json.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 1814 "_json.c"
        var $6=$5; //@line 1814 "_json.c"
        $s=$6; //@line 1814 "_json.c"
        var $7=$s; //@line 1815 "_json.c"
        var $8=($7)!=0; //@line 1815 "_json.c"
        if ($8) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1815 "_json.c"
      case 1: // $bb
        var $9=$s; //@line 1816 "_json.c"
        var $10=$9+8; //@line 1816 "_json.c"
        HEAP[$10]=0; //@line 1816 "_json.c"
        var $11=$s; //@line 1817 "_json.c"
        var $12=$11+12; //@line 1817 "_json.c"
        HEAP[$12]=0; //@line 1817 "_json.c"
        var $13=$s; //@line 1818 "_json.c"
        var $14=$13+16; //@line 1818 "_json.c"
        HEAP[$14]=0; //@line 1818 "_json.c"
        var $15=$s; //@line 1819 "_json.c"
        var $16=$15+20; //@line 1819 "_json.c"
        HEAP[$16]=0; //@line 1819 "_json.c"
        var $17=$s; //@line 1820 "_json.c"
        var $18=$17+24; //@line 1820 "_json.c"
        HEAP[$18]=0; //@line 1820 "_json.c"
        var $19=$s; //@line 1821 "_json.c"
        var $20=$19+28; //@line 1821 "_json.c"
        HEAP[$20]=0; //@line 1821 "_json.c"
        var $21=$s; //@line 1822 "_json.c"
        var $22=$21+32; //@line 1822 "_json.c"
        HEAP[$22]=0; //@line 1822 "_json.c"
        var $23=$s; //@line 1823 "_json.c"
        var $24=$23+36; //@line 1823 "_json.c"
        HEAP[$24]=0; //@line 1823 "_json.c"
        __label__ = 2; break; //@line 1823 "_json.c"
      case 2: // $bb1
        var $25=$s; //@line 1825 "_json.c"
        var $26=$25; //@line 1825 "_json.c"
        $0=$26; //@line 1825 "_json.c"
        var $27=$0; //@line 1825 "_json.c"
        $retval=$27; //@line 1825 "_json.c"
        var $retval2=$retval; //@line 1825 "_json.c"
        ;
        return $retval2; //@line 1825 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_init($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 36; _memset(__stackBase__, 0, 36);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $iftmp_146;
        var $0;
        var $s;
        var $markers=__stackBase__;
        var $defaultfn=__stackBase__+4;
        var $encoder=__stackBase__+8;
        var $indent=__stackBase__+12;
        var $key_separator=__stackBase__+16;
        var $item_separator=__stackBase__+20;
        var $sort_keys=__stackBase__+24;
        var $skipkeys=__stackBase__+28;
        var $allow_nan=__stackBase__+32;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$self_addr; //@line 1838 "_json.c"
        var $2=$1+4; //@line 1838 "_json.c"
        var $3=HEAP[$2]; //@line 1838 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 1838 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1838 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1838 "_json.c"
        var $6=$5+4; //@line 1838 "_json.c"
        var $7=HEAP[$6]; //@line 1838 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 1838 "_json.c"
        var $9=($8)==0; //@line 1838 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1838 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str47, __str29, 1838, ___PRETTY_FUNCTION___10949); //@line 1838 "_json.c"
        throw "Reached an unreachable!" //@line 1838 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1839 "_json.c"
        var $11=$10; //@line 1839 "_json.c"
        $s=$11; //@line 1839 "_json.c"
        var $12=$args_addr; //@line 1841 "_json.c"
        var $13=$kwds_addr; //@line 1841 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, __str48, _kwlist_10938, allocate([$markers,0,0,0,$defaultfn,0,0,0,$encoder,0,0,0,$indent,0,0,0,$key_separator,0,0,0,$item_separator,0,0,0,$sort_keys,0,0,0,$skipkeys,0,0,0,$allow_nan,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1841 "_json.c"
        var $15=($14)==0; //@line 1841 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1841 "_json.c"
      case 4: // $bb3
        $0=-1; //@line 1844 "_json.c"
        __label__ = 10; break; //@line 1844 "_json.c"
      case 5: // $bb4
        var $16=HEAP[$markers]; //@line 1846 "_json.c"
        var $17=$s; //@line 1846 "_json.c"
        var $18=$17+8; //@line 1846 "_json.c"
        HEAP[$18]=$16; //@line 1846 "_json.c"
        var $19=HEAP[$defaultfn]; //@line 1847 "_json.c"
        var $20=$s; //@line 1847 "_json.c"
        var $21=$20+12; //@line 1847 "_json.c"
        HEAP[$21]=$19; //@line 1847 "_json.c"
        var $22=HEAP[$encoder]; //@line 1848 "_json.c"
        var $23=$s; //@line 1848 "_json.c"
        var $24=$23+16; //@line 1848 "_json.c"
        HEAP[$24]=$22; //@line 1848 "_json.c"
        var $25=HEAP[$indent]; //@line 1849 "_json.c"
        var $26=$s; //@line 1849 "_json.c"
        var $27=$26+20; //@line 1849 "_json.c"
        HEAP[$27]=$25; //@line 1849 "_json.c"
        var $28=HEAP[$key_separator]; //@line 1850 "_json.c"
        var $29=$s; //@line 1850 "_json.c"
        var $30=$29+24; //@line 1850 "_json.c"
        HEAP[$30]=$28; //@line 1850 "_json.c"
        var $31=HEAP[$item_separator]; //@line 1851 "_json.c"
        var $32=$s; //@line 1851 "_json.c"
        var $33=$32+28; //@line 1851 "_json.c"
        HEAP[$33]=$31; //@line 1851 "_json.c"
        var $34=HEAP[$sort_keys]; //@line 1852 "_json.c"
        var $35=$s; //@line 1852 "_json.c"
        var $36=$35+32; //@line 1852 "_json.c"
        HEAP[$36]=$34; //@line 1852 "_json.c"
        var $37=HEAP[$skipkeys]; //@line 1853 "_json.c"
        var $38=$s; //@line 1853 "_json.c"
        var $39=$38+36; //@line 1853 "_json.c"
        HEAP[$39]=$37; //@line 1853 "_json.c"
        var $40=$s; //@line 1854 "_json.c"
        var $41=$40+16; //@line 1854 "_json.c"
        var $42=HEAP[$41]; //@line 1854 "_json.c"
        var $43=$42+4; //@line 1854 "_json.c"
        var $44=HEAP[$43]; //@line 1854 "_json.c"
        var $45=($44)!=(_PyCFunction_Type); //@line 1854 "_json.c"
        if ($45) { __label__ = 8; break; } else { __label__ = 6; break; } //@line 1854 "_json.c"
      case 6: // $bb5
        var $46=$s; //@line 1854 "_json.c"
        var $47=$46+16; //@line 1854 "_json.c"
        var $48=HEAP[$47]; //@line 1854 "_json.c"
        var $49=_PyCFunction_GetFunction($48); //@line 1854 "_json.c"
        var $50=($49)!=((FUNCTION_TABLE_OFFSET + 6)); //@line 1854 "_json.c"
        if ($50) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1854 "_json.c"
      case 7: // $bb6
        $iftmp_146=1; //@line 1854 "_json.c"
        __label__ = 9; break; //@line 1854 "_json.c"
      case 8: // $bb7
        $iftmp_146=0; //@line 1854 "_json.c"
        __label__ = 9; break; //@line 1854 "_json.c"
      case 9: // $bb8
        var $51=$s; //@line 1854 "_json.c"
        var $52=$51+40; //@line 1854 "_json.c"
        var $53=$iftmp_146; //@line 1854 "_json.c"
        HEAP[$52]=$53; //@line 1854 "_json.c"
        var $54=HEAP[$allow_nan]; //@line 1855 "_json.c"
        var $55=_PyObject_IsTrue($54); //@line 1855 "_json.c"
        var $56=$s; //@line 1855 "_json.c"
        var $57=$56+44; //@line 1855 "_json.c"
        HEAP[$57]=$55; //@line 1855 "_json.c"
        var $58=$s; //@line 1857 "_json.c"
        var $59=$58+8; //@line 1857 "_json.c"
        var $60=HEAP[$59]; //@line 1857 "_json.c"
        var $61=$60; //@line 1857 "_json.c"
        var $62=HEAP[$61]; //@line 1857 "_json.c"
        var $63=($62) + 1; //@line 1857 "_json.c"
        var $64=$60; //@line 1857 "_json.c"
        HEAP[$64]=$63; //@line 1857 "_json.c"
        var $65=$s; //@line 1858 "_json.c"
        var $66=$65+12; //@line 1858 "_json.c"
        var $67=HEAP[$66]; //@line 1858 "_json.c"
        var $68=$67; //@line 1858 "_json.c"
        var $69=HEAP[$68]; //@line 1858 "_json.c"
        var $70=($69) + 1; //@line 1858 "_json.c"
        var $71=$67; //@line 1858 "_json.c"
        HEAP[$71]=$70; //@line 1858 "_json.c"
        var $72=$s; //@line 1859 "_json.c"
        var $73=$72+16; //@line 1859 "_json.c"
        var $74=HEAP[$73]; //@line 1859 "_json.c"
        var $75=$74; //@line 1859 "_json.c"
        var $76=HEAP[$75]; //@line 1859 "_json.c"
        var $77=($76) + 1; //@line 1859 "_json.c"
        var $78=$74; //@line 1859 "_json.c"
        HEAP[$78]=$77; //@line 1859 "_json.c"
        var $79=$s; //@line 1860 "_json.c"
        var $80=$79+20; //@line 1860 "_json.c"
        var $81=HEAP[$80]; //@line 1860 "_json.c"
        var $82=$81; //@line 1860 "_json.c"
        var $83=HEAP[$82]; //@line 1860 "_json.c"
        var $84=($83) + 1; //@line 1860 "_json.c"
        var $85=$81; //@line 1860 "_json.c"
        HEAP[$85]=$84; //@line 1860 "_json.c"
        var $86=$s; //@line 1861 "_json.c"
        var $87=$86+24; //@line 1861 "_json.c"
        var $88=HEAP[$87]; //@line 1861 "_json.c"
        var $89=$88; //@line 1861 "_json.c"
        var $90=HEAP[$89]; //@line 1861 "_json.c"
        var $91=($90) + 1; //@line 1861 "_json.c"
        var $92=$88; //@line 1861 "_json.c"
        HEAP[$92]=$91; //@line 1861 "_json.c"
        var $93=$s; //@line 1862 "_json.c"
        var $94=$93+28; //@line 1862 "_json.c"
        var $95=HEAP[$94]; //@line 1862 "_json.c"
        var $96=$95; //@line 1862 "_json.c"
        var $97=HEAP[$96]; //@line 1862 "_json.c"
        var $98=($97) + 1; //@line 1862 "_json.c"
        var $99=$95; //@line 1862 "_json.c"
        HEAP[$99]=$98; //@line 1862 "_json.c"
        var $100=$s; //@line 1863 "_json.c"
        var $101=$100+32; //@line 1863 "_json.c"
        var $102=HEAP[$101]; //@line 1863 "_json.c"
        var $103=$102; //@line 1863 "_json.c"
        var $104=HEAP[$103]; //@line 1863 "_json.c"
        var $105=($104) + 1; //@line 1863 "_json.c"
        var $106=$102; //@line 1863 "_json.c"
        HEAP[$106]=$105; //@line 1863 "_json.c"
        var $107=$s; //@line 1864 "_json.c"
        var $108=$107+36; //@line 1864 "_json.c"
        var $109=HEAP[$108]; //@line 1864 "_json.c"
        var $110=$109; //@line 1864 "_json.c"
        var $111=HEAP[$110]; //@line 1864 "_json.c"
        var $112=($111) + 1; //@line 1864 "_json.c"
        var $113=$109; //@line 1864 "_json.c"
        HEAP[$113]=$112; //@line 1864 "_json.c"
        $0=0; //@line 1865 "_json.c"
        __label__ = 10; break; //@line 1865 "_json.c"
      case 10: // $bb9
        var $114=$0; //@line 1844 "_json.c"
        $retval=$114; //@line 1844 "_json.c"
        var $retval10=$retval; //@line 1844 "_json.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 1844 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_call($self, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $obj=__stackBase__;
        var $rval;
        var $indent_level=__stackBase__+4;
        var $s;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$self_addr; //@line 1877 "_json.c"
        var $2=$1+4; //@line 1877 "_json.c"
        var $3=HEAP[$2]; //@line 1877 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 1877 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1877 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 1877 "_json.c"
        var $6=$5+4; //@line 1877 "_json.c"
        var $7=HEAP[$6]; //@line 1877 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 1877 "_json.c"
        var $9=($8)==0; //@line 1877 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1877 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str47, __str29, 1877, ___PRETTY_FUNCTION___11015); //@line 1877 "_json.c"
        throw "Reached an unreachable!" //@line 1877 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 1878 "_json.c"
        var $11=$10; //@line 1878 "_json.c"
        $s=$11; //@line 1878 "_json.c"
        var $12=$args_addr; //@line 1879 "_json.c"
        var $13=$kwds_addr; //@line 1879 "_json.c"
        var $14=_PyArg_ParseTupleAndKeywords($12, $13, __str50, _kwlist_11010, allocate([$obj,0,0,0,(FUNCTION_TABLE_OFFSET + 4),0,0,0,$indent_level,0,0,0], ["%struct.PyObject**",0,0,0,"i32 (%struct.PyObject*, i32*)*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1879 "_json.c"
        var $15=($14)==0; //@line 1879 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1879 "_json.c"
      case 4: // $bb3
        $0=0; //@line 1881 "_json.c"
        __label__ = 12; break; //@line 1881 "_json.c"
      case 5: // $bb4
        var $16=_PyList_New(0); //@line 1882 "_json.c"
        $rval=$16; //@line 1882 "_json.c"
        var $17=$rval; //@line 1883 "_json.c"
        var $18=($17)==0; //@line 1883 "_json.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1883 "_json.c"
      case 6: // $bb5
        $0=0; //@line 1884 "_json.c"
        __label__ = 12; break; //@line 1884 "_json.c"
      case 7: // $bb6
        var $19=HEAP[$indent_level]; //@line 1885 "_json.c"
        var $20=HEAP[$obj]; //@line 1885 "_json.c"
        var $21=$s; //@line 1885 "_json.c"
        var $22=$rval; //@line 1885 "_json.c"
        var $23=_encoder_listencode_obj($21, $22, $20, $19); //@line 1885 "_json.c"
        var $24=($23)!=0; //@line 1885 "_json.c"
        var $25=$rval; //@line 1886 "_json.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 1885 "_json.c"
      case 8: // $bb7
        var $26=$25; //@line 1886 "_json.c"
        var $27=HEAP[$26]; //@line 1886 "_json.c"
        var $28=($27) - 1; //@line 1886 "_json.c"
        var $29=$rval; //@line 1886 "_json.c"
        var $30=$29; //@line 1886 "_json.c"
        HEAP[$30]=$28; //@line 1886 "_json.c"
        var $31=$rval; //@line 1886 "_json.c"
        var $32=$31; //@line 1886 "_json.c"
        var $33=HEAP[$32]; //@line 1886 "_json.c"
        var $34=($33)==0; //@line 1886 "_json.c"
        if ($34) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1886 "_json.c"
      case 9: // $bb8
        var $35=$rval; //@line 1886 "_json.c"
        var $36=$35+4; //@line 1886 "_json.c"
        var $37=HEAP[$36]; //@line 1886 "_json.c"
        var $38=$37+24; //@line 1886 "_json.c"
        var $39=HEAP[$38]; //@line 1886 "_json.c"
        var $40=$rval; //@line 1886 "_json.c"
        FUNCTION_TABLE[$39]($40); //@line 1886 "_json.c"
        __label__ = 10; break; //@line 1886 "_json.c"
      case 10: // $bb9
        $0=0; //@line 1887 "_json.c"
        __label__ = 12; break; //@line 1887 "_json.c"
      case 11: // $bb10
        $0=$25; //@line 1889 "_json.c"
        __label__ = 12; break; //@line 1889 "_json.c"
      case 12: // $bb11
        var $41=$0; //@line 1881 "_json.c"
        $retval=$41; //@line 1881 "_json.c"
        var $retval12=$retval; //@line 1881 "_json.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 1881 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __encoded_const($obj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $obj_addr;
        var $retval;
        var $0;
        $obj_addr=$obj;
        var $1=$obj_addr; //@line 1896 "_json.c"
        var $2=($1)==(__Py_NoneStruct); //@line 1896 "_json.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1896 "_json.c"
      case 1: // $bb
        var $3=HEAP[_s_null_11046]; //@line 1898 "_json.c"
        var $4=($3)==0; //@line 1898 "_json.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1898 "_json.c"
      case 2: // $bb1
        var $5=_PyString_InternFromString(__str53); //@line 1899 "_json.c"
        HEAP[_s_null_11046]=$5; //@line 1899 "_json.c"
        __label__ = 3; break; //@line 1899 "_json.c"
      case 3: // $bb2
        var $6=HEAP[_s_null_11046]; //@line 1901 "_json.c"
        var $7=$6; //@line 1901 "_json.c"
        var $8=HEAP[$7]; //@line 1901 "_json.c"
        var $9=($8) + 1; //@line 1901 "_json.c"
        var $10=$6; //@line 1901 "_json.c"
        HEAP[$10]=$9; //@line 1901 "_json.c"
        var $11=HEAP[_s_null_11046]; //@line 1902 "_json.c"
        $0=$11; //@line 1902 "_json.c"
        __label__ = 13; break; //@line 1902 "_json.c"
      case 4: // $bb3
        var $12=$obj_addr; //@line 1904 "_json.c"
        var $13=($12)==(__Py_TrueStruct); //@line 1904 "_json.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 1904 "_json.c"
      case 5: // $bb4
        var $14=HEAP[_s_true_11047]; //@line 1906 "_json.c"
        var $15=($14)==0; //@line 1906 "_json.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1906 "_json.c"
      case 6: // $bb5
        var $16=_PyString_InternFromString(__str54); //@line 1907 "_json.c"
        HEAP[_s_true_11047]=$16; //@line 1907 "_json.c"
        __label__ = 7; break; //@line 1907 "_json.c"
      case 7: // $bb6
        var $17=HEAP[_s_true_11047]; //@line 1909 "_json.c"
        var $18=$17; //@line 1909 "_json.c"
        var $19=HEAP[$18]; //@line 1909 "_json.c"
        var $20=($19) + 1; //@line 1909 "_json.c"
        var $21=$17; //@line 1909 "_json.c"
        HEAP[$21]=$20; //@line 1909 "_json.c"
        var $22=HEAP[_s_true_11047]; //@line 1910 "_json.c"
        $0=$22; //@line 1910 "_json.c"
        __label__ = 13; break; //@line 1910 "_json.c"
      case 8: // $bb7
        var $23=$obj_addr; //@line 1912 "_json.c"
        var $24=($23)==(__Py_ZeroStruct); //@line 1912 "_json.c"
        if ($24) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 1912 "_json.c"
      case 9: // $bb8
        var $25=HEAP[_s_false_11048]; //@line 1914 "_json.c"
        var $26=($25)==0; //@line 1914 "_json.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1914 "_json.c"
      case 10: // $bb9
        var $27=_PyString_InternFromString(__str55); //@line 1915 "_json.c"
        HEAP[_s_false_11048]=$27; //@line 1915 "_json.c"
        __label__ = 11; break; //@line 1915 "_json.c"
      case 11: // $bb10
        var $28=HEAP[_s_false_11048]; //@line 1917 "_json.c"
        var $29=$28; //@line 1917 "_json.c"
        var $30=HEAP[$29]; //@line 1917 "_json.c"
        var $31=($30) + 1; //@line 1917 "_json.c"
        var $32=$28; //@line 1917 "_json.c"
        HEAP[$32]=$31; //@line 1917 "_json.c"
        var $33=HEAP[_s_false_11048]; //@line 1918 "_json.c"
        $0=$33; //@line 1918 "_json.c"
        __label__ = 13; break; //@line 1918 "_json.c"
      case 12: // $bb11
        var $34=HEAP[_PyExc_ValueError]; //@line 1921 "_json.c"
        _PyErr_SetString($34, __str56); //@line 1921 "_json.c"
        $0=0; //@line 1922 "_json.c"
        __label__ = 13; break; //@line 1922 "_json.c"
      case 13: // $bb12
        var $35=$0; //@line 1902 "_json.c"
        $retval=$35; //@line 1902 "_json.c"
        var $retval13=$retval; //@line 1902 "_json.c"
        ;
        return $retval13; //@line 1902 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_encode_float($s, $obj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $obj_addr;
        var $retval;
        var $0;
        var $i;
        $s_addr=$s;
        $obj_addr=$obj;
        var $1=$obj_addr; //@line 1930 "_json.c"
        var $2=$1; //@line 1930 "_json.c"
        var $3=$2+8; //@line 1930 "_json.c"
        var $4=HEAP[$3]; //@line 1930 "_json.c"
        $i=$4; //@line 1930 "_json.c"
        var $5=$i; //@line 1931 "_json.c"
        var $6=___finite($5); //@line 1931 "_json.c"
        var $7=($6)==0; //@line 1931 "_json.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 8; break; } //@line 1931 "_json.c"
      case 1: // $bb
        var $8=$s_addr; //@line 1932 "_json.c"
        var $9=$8+44; //@line 1932 "_json.c"
        var $10=HEAP[$9]; //@line 1932 "_json.c"
        var $11=($10)==0; //@line 1932 "_json.c"
        if ($11) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1932 "_json.c"
      case 2: // $bb1
        var $12=HEAP[_PyExc_ValueError]; //@line 1933 "_json.c"
        _PyErr_SetString($12, __str57); //@line 1933 "_json.c"
        $0=0; //@line 1934 "_json.c"
        __label__ = 9; break; //@line 1934 "_json.c"
      case 3: // $bb2
        var $13=$i; //@line 1936 "_json.c"
        var $14=($13) > 0; //@line 1936 "_json.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1936 "_json.c"
      case 4: // $bb3
        var $15=_PyString_FromString(__str37); //@line 1937 "_json.c"
        $0=$15; //@line 1937 "_json.c"
        __label__ = 9; break; //@line 1937 "_json.c"
      case 5: // $bb4
        var $16=$i; //@line 1939 "_json.c"
        var $17=($16) < 0; //@line 1939 "_json.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1939 "_json.c"
      case 6: // $bb5
        var $18=_PyString_FromString(__str38); //@line 1940 "_json.c"
        $0=$18; //@line 1940 "_json.c"
        __label__ = 9; break; //@line 1940 "_json.c"
      case 7: // $bb6
        var $19=_PyString_FromString(__str36); //@line 1943 "_json.c"
        $0=$19; //@line 1943 "_json.c"
        __label__ = 9; break; //@line 1943 "_json.c"
      case 8: // $bb7
        var $20=$obj_addr; //@line 1947 "_json.c"
        var $21=_PyObject_Repr($20); //@line 1947 "_json.c"
        $0=$21; //@line 1947 "_json.c"
        __label__ = 9; break; //@line 1947 "_json.c"
      case 9: // $bb8
        var $22=$0; //@line 1934 "_json.c"
        $retval=$22; //@line 1934 "_json.c"
        var $retval9=$retval; //@line 1934 "_json.c"
        ;
        return $retval9; //@line 1934 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_encode_string($s, $obj) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $obj_addr;
        var $retval;
        var $0;
        $s_addr=$s;
        $obj_addr=$obj;
        var $1=$s_addr; //@line 1954 "_json.c"
        var $2=$1+40; //@line 1954 "_json.c"
        var $3=HEAP[$2]; //@line 1954 "_json.c"
        var $4=($3)!=0; //@line 1954 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1954 "_json.c"
      case 1: // $bb
        var $5=$obj_addr; //@line 1955 "_json.c"
        var $6=_py_encode_basestring_ascii(0, $5); //@line 1955 "_json.c"
        $0=$6; //@line 1955 "_json.c"
        __label__ = 3; break; //@line 1955 "_json.c"
      case 2: // $bb1
        var $7=$s_addr; //@line 1957 "_json.c"
        var $8=$7+16; //@line 1957 "_json.c"
        var $9=HEAP[$8]; //@line 1957 "_json.c"
        var $10=$obj_addr; //@line 1957 "_json.c"
        var $11=_PyObject_CallFunctionObjArgs($9, allocate([$10,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 1957 "_json.c"
        $0=$11; //@line 1957 "_json.c"
        __label__ = 3; break; //@line 1957 "_json.c"
      case 3: // $bb2
        var $12=$0; //@line 1955 "_json.c"
        $retval=$12; //@line 1955 "_json.c"
        var $retval3=$retval; //@line 1955 "_json.c"
        ;
        return $retval3; //@line 1955 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __steal_list_append($lst, $stolen) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $lst_addr;
        var $stolen_addr;
        var $retval;
        var $0;
        var $rval;
        $lst_addr=$lst;
        $stolen_addr=$stolen;
        var $1=$lst_addr; //@line 1964 "_json.c"
        var $2=$stolen_addr; //@line 1964 "_json.c"
        var $3=_PyList_Append($1, $2); //@line 1964 "_json.c"
        $rval=$3; //@line 1964 "_json.c"
        var $4=$stolen_addr; //@line 1965 "_json.c"
        var $5=$4; //@line 1965 "_json.c"
        var $6=HEAP[$5]; //@line 1965 "_json.c"
        var $7=($6) - 1; //@line 1965 "_json.c"
        var $8=$stolen_addr; //@line 1965 "_json.c"
        var $9=$8; //@line 1965 "_json.c"
        HEAP[$9]=$7; //@line 1965 "_json.c"
        var $10=$stolen_addr; //@line 1965 "_json.c"
        var $11=$10; //@line 1965 "_json.c"
        var $12=HEAP[$11]; //@line 1965 "_json.c"
        var $13=($12)==0; //@line 1965 "_json.c"
        if ($13) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1965 "_json.c"
      case 1: // $bb
        var $14=$stolen_addr; //@line 1965 "_json.c"
        var $15=$14+4; //@line 1965 "_json.c"
        var $16=HEAP[$15]; //@line 1965 "_json.c"
        var $17=$16+24; //@line 1965 "_json.c"
        var $18=HEAP[$17]; //@line 1965 "_json.c"
        var $19=$stolen_addr; //@line 1965 "_json.c"
        FUNCTION_TABLE[$18]($19); //@line 1965 "_json.c"
        __label__ = 2; break; //@line 1965 "_json.c"
      case 2: // $bb1
        var $20=$rval; //@line 1966 "_json.c"
        $0=$20; //@line 1966 "_json.c"
        var $21=$0; //@line 1966 "_json.c"
        $retval=$21; //@line 1966 "_json.c"
        var $retval2=$retval; //@line 1966 "_json.c"
        ;
        return $retval2; //@line 1966 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_listencode_obj($s, $rval, $obj, $indent_level) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $rval_addr;
        var $obj_addr;
        var $indent_level_addr;
        var $retval;
        var $0;
        var $newobj;
        var $rv;
        var $cstr;
        var $encoded;
        var $encoded13;
        var $encoded19;
        var $ident;
        var $has_key;
        $s_addr=$s;
        $rval_addr=$rval;
        $obj_addr=$obj;
        $indent_level_addr=$indent_level;
        var $1=$obj_addr; //@line 1976 "_json.c"
        var $2=($1)==(__Py_NoneStruct); //@line 1976 "_json.c"
        var $3=$obj_addr; //@line 1976 "_json.c"
        var $4=($3)==(__Py_TrueStruct); //@line 1976 "_json.c"
        var $or_cond=($2) | ($4);
        var $5=$obj_addr; //@line 1976 "_json.c"
        var $6=($5)==(__Py_ZeroStruct); //@line 1976 "_json.c"
        var $or_cond3=($or_cond) | ($6);
        var $7=$obj_addr; //@line 1977 "_json.c"
        if ($or_cond3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 1976 "_json.c"
      case 1: // $bb2
        var $8=__encoded_const($7); //@line 1977 "_json.c"
        $cstr=$8; //@line 1977 "_json.c"
        var $9=$cstr; //@line 1978 "_json.c"
        var $10=($9)==0; //@line 1978 "_json.c"
        if ($10) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1978 "_json.c"
      case 2: // $bb3
        $0=-1; //@line 1979 "_json.c"
        __label__ = 68; break; //@line 1979 "_json.c"
      case 3: // $bb4
        var $11=$rval_addr; //@line 1980 "_json.c"
        var $12=$cstr; //@line 1980 "_json.c"
        var $13=__steal_list_append($11, $12); //@line 1980 "_json.c"
        $0=$13; //@line 1980 "_json.c"
        __label__ = 68; break; //@line 1980 "_json.c"
      case 4: // $bb5
        var $14=$7+4; //@line 1982 "_json.c"
        var $15=HEAP[$14]; //@line 1982 "_json.c"
        var $16=$15+84; //@line 1982 "_json.c"
        var $17=HEAP[$16]; //@line 1982 "_json.c"
        var $18=($17) & 134217728; //@line 1982 "_json.c"
        var $19=($18)!=0; //@line 1982 "_json.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 5; break; } //@line 1982 "_json.c"
      case 5: // $bb6
        var $20=$obj_addr; //@line 1982 "_json.c"
        var $21=$20+4; //@line 1982 "_json.c"
        var $22=HEAP[$21]; //@line 1982 "_json.c"
        var $23=$22+84; //@line 1982 "_json.c"
        var $24=HEAP[$23]; //@line 1982 "_json.c"
        var $25=($24) & 268435456; //@line 1982 "_json.c"
        var $26=($25)!=0; //@line 1982 "_json.c"
        if ($26) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 1982 "_json.c"
      case 6: // $bb7
        var $27=$s_addr; //@line 1984 "_json.c"
        var $28=$obj_addr; //@line 1984 "_json.c"
        var $29=_encoder_encode_string($27, $28); //@line 1984 "_json.c"
        $encoded=$29; //@line 1984 "_json.c"
        var $30=($29)==0; //@line 1985 "_json.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1985 "_json.c"
      case 7: // $bb8
        $0=-1; //@line 1986 "_json.c"
        __label__ = 68; break; //@line 1986 "_json.c"
      case 8: // $bb9
        var $31=$rval_addr; //@line 1987 "_json.c"
        var $32=$encoded; //@line 1987 "_json.c"
        var $33=__steal_list_append($31, $32); //@line 1987 "_json.c"
        $0=$33; //@line 1987 "_json.c"
        __label__ = 68; break; //@line 1987 "_json.c"
      case 9: // $bb10
        var $34=$obj_addr; //@line 1989 "_json.c"
        var $35=$34+4; //@line 1989 "_json.c"
        var $36=HEAP[$35]; //@line 1989 "_json.c"
        var $37=$36+84; //@line 1989 "_json.c"
        var $38=HEAP[$37]; //@line 1989 "_json.c"
        var $39=($38) & 8388608; //@line 1989 "_json.c"
        var $40=($39)!=0; //@line 1989 "_json.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 1989 "_json.c"
      case 10: // $bb11
        var $41=$obj_addr; //@line 1989 "_json.c"
        var $42=$41+4; //@line 1989 "_json.c"
        var $43=HEAP[$42]; //@line 1989 "_json.c"
        var $44=$43+84; //@line 1989 "_json.c"
        var $45=HEAP[$44]; //@line 1989 "_json.c"
        var $46=($45) & 16777216; //@line 1989 "_json.c"
        var $47=($46)!=0; //@line 1989 "_json.c"
        if ($47) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1989 "_json.c"
      case 11: // $bb12
        var $48=$obj_addr; //@line 1990 "_json.c"
        var $49=_PyObject_Str($48); //@line 1990 "_json.c"
        $encoded13=$49; //@line 1990 "_json.c"
        var $50=($49)==0; //@line 1991 "_json.c"
        if ($50) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1991 "_json.c"
      case 12: // $bb14
        $0=-1; //@line 1992 "_json.c"
        __label__ = 68; break; //@line 1992 "_json.c"
      case 13: // $bb15
        var $51=$rval_addr; //@line 1993 "_json.c"
        var $52=$encoded13; //@line 1993 "_json.c"
        var $53=__steal_list_append($51, $52); //@line 1993 "_json.c"
        $0=$53; //@line 1993 "_json.c"
        __label__ = 68; break; //@line 1993 "_json.c"
      case 14: // $bb16
        var $54=$obj_addr; //@line 1995 "_json.c"
        var $55=$54+4; //@line 1995 "_json.c"
        var $56=HEAP[$55]; //@line 1995 "_json.c"
        var $57=($56)==(_PyFloat_Type); //@line 1995 "_json.c"
        if ($57) { __label__ = 16; break; } else { __label__ = 15; break; } //@line 1995 "_json.c"
      case 15: // $bb17
        var $58=$obj_addr; //@line 1995 "_json.c"
        var $59=$58+4; //@line 1995 "_json.c"
        var $60=HEAP[$59]; //@line 1995 "_json.c"
        var $61=_PyType_IsSubtype($60, _PyFloat_Type); //@line 1995 "_json.c"
        var $62=($61)!=0; //@line 1995 "_json.c"
        if ($62) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 1995 "_json.c"
      case 16: // $bb18
        var $63=$s_addr; //@line 1996 "_json.c"
        var $64=$obj_addr; //@line 1996 "_json.c"
        var $65=_encoder_encode_float($63, $64); //@line 1996 "_json.c"
        $encoded19=$65; //@line 1996 "_json.c"
        var $66=($65)==0; //@line 1997 "_json.c"
        if ($66) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1997 "_json.c"
      case 17: // $bb20
        $0=-1; //@line 1998 "_json.c"
        __label__ = 68; break; //@line 1998 "_json.c"
      case 18: // $bb21
        var $67=$rval_addr; //@line 1999 "_json.c"
        var $68=$encoded19; //@line 1999 "_json.c"
        var $69=__steal_list_append($67, $68); //@line 1999 "_json.c"
        $0=$69; //@line 1999 "_json.c"
        __label__ = 68; break; //@line 1999 "_json.c"
      case 19: // $bb22
        var $70=$obj_addr; //@line 2001 "_json.c"
        var $71=$70+4; //@line 2001 "_json.c"
        var $72=HEAP[$71]; //@line 2001 "_json.c"
        var $73=$72+84; //@line 2001 "_json.c"
        var $74=HEAP[$73]; //@line 2001 "_json.c"
        var $75=($74) & 33554432; //@line 2001 "_json.c"
        var $76=($75)!=0; //@line 2001 "_json.c"
        if ($76) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 2001 "_json.c"
      case 20: // $bb23
        var $77=$obj_addr; //@line 2001 "_json.c"
        var $78=$77+4; //@line 2001 "_json.c"
        var $79=HEAP[$78]; //@line 2001 "_json.c"
        var $80=$79+84; //@line 2001 "_json.c"
        var $81=HEAP[$80]; //@line 2001 "_json.c"
        var $82=($81) & 67108864; //@line 2001 "_json.c"
        var $83=($82)!=0; //@line 2001 "_json.c"
        if ($83) { __label__ = 21; break; } else { __label__ = 25; break; } //@line 2001 "_json.c"
      case 21: // $bb24
        var $84=HEAP[__PyThreadState_Current]; //@line 2002 "_json.c"
        var $85=$84+12; //@line 2002 "_json.c"
        var $86=HEAP[$85]; //@line 2002 "_json.c"
        var $87=($86) + 1; //@line 2002 "_json.c"
        var $88=$84+12; //@line 2002 "_json.c"
        HEAP[$88]=$87; //@line 2002 "_json.c"
        var $89=$84+12; //@line 2002 "_json.c"
        var $90=HEAP[$89]; //@line 2002 "_json.c"
        var $91=HEAP[__Py_CheckRecursionLimit]; //@line 2002 "_json.c"
        var $92=($90) > ($91); //@line 2002 "_json.c"
        if ($92) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 2002 "_json.c"
      case 22: // $bb25
        var $93=__Py_CheckRecursiveCall(__str58); //@line 2002 "_json.c"
        var $94=($93)!=0; //@line 2002 "_json.c"
        if ($94) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2002 "_json.c"
      case 23: // $bb26
        $0=-1; //@line 2003 "_json.c"
        __label__ = 68; break; //@line 2003 "_json.c"
      case 24: // $bb27
        var $95=$s_addr; //@line 2004 "_json.c"
        var $96=$rval_addr; //@line 2004 "_json.c"
        var $97=$obj_addr; //@line 2004 "_json.c"
        var $98=$indent_level_addr; //@line 2004 "_json.c"
        var $99=_encoder_listencode_list($95, $96, $97, $98); //@line 2004 "_json.c"
        $rv=$99; //@line 2004 "_json.c"
        var $100=HEAP[__PyThreadState_Current]; //@line 2005 "_json.c"
        var $101=$100+12; //@line 2005 "_json.c"
        var $102=HEAP[$101]; //@line 2005 "_json.c"
        var $103=($102) - 1; //@line 2005 "_json.c"
        var $104=$100+12; //@line 2005 "_json.c"
        HEAP[$104]=$103; //@line 2005 "_json.c"
        var $105=$rv; //@line 2006 "_json.c"
        $0=$105; //@line 2006 "_json.c"
        __label__ = 68; break; //@line 2006 "_json.c"
      case 25: // $bb28
        var $106=$obj_addr; //@line 2008 "_json.c"
        var $107=$106+4; //@line 2008 "_json.c"
        var $108=HEAP[$107]; //@line 2008 "_json.c"
        var $109=$108+84; //@line 2008 "_json.c"
        var $110=HEAP[$109]; //@line 2008 "_json.c"
        var $111=($110) & 536870912; //@line 2008 "_json.c"
        var $112=($111)!=0; //@line 2008 "_json.c"
        if ($112) { __label__ = 26; break; } else { __label__ = 30; break; } //@line 2008 "_json.c"
      case 26: // $bb29
        var $113=HEAP[__PyThreadState_Current]; //@line 2009 "_json.c"
        var $114=$113+12; //@line 2009 "_json.c"
        var $115=HEAP[$114]; //@line 2009 "_json.c"
        var $116=($115) + 1; //@line 2009 "_json.c"
        var $117=$113+12; //@line 2009 "_json.c"
        HEAP[$117]=$116; //@line 2009 "_json.c"
        var $118=$113+12; //@line 2009 "_json.c"
        var $119=HEAP[$118]; //@line 2009 "_json.c"
        var $120=HEAP[__Py_CheckRecursionLimit]; //@line 2009 "_json.c"
        var $121=($119) > ($120); //@line 2009 "_json.c"
        if ($121) { __label__ = 27; break; } else { __label__ = 29; break; } //@line 2009 "_json.c"
      case 27: // $bb30
        var $122=__Py_CheckRecursiveCall(__str58); //@line 2009 "_json.c"
        var $123=($122)!=0; //@line 2009 "_json.c"
        if ($123) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 2009 "_json.c"
      case 28: // $bb31
        $0=-1; //@line 2010 "_json.c"
        __label__ = 68; break; //@line 2010 "_json.c"
      case 29: // $bb32
        var $124=$s_addr; //@line 2011 "_json.c"
        var $125=$rval_addr; //@line 2011 "_json.c"
        var $126=$obj_addr; //@line 2011 "_json.c"
        var $127=$indent_level_addr; //@line 2011 "_json.c"
        var $128=_encoder_listencode_dict($124, $125, $126, $127); //@line 2011 "_json.c"
        $rv=$128; //@line 2011 "_json.c"
        var $129=HEAP[__PyThreadState_Current]; //@line 2012 "_json.c"
        var $130=$129+12; //@line 2012 "_json.c"
        var $131=HEAP[$130]; //@line 2012 "_json.c"
        var $132=($131) - 1; //@line 2012 "_json.c"
        var $133=$129+12; //@line 2012 "_json.c"
        HEAP[$133]=$132; //@line 2012 "_json.c"
        var $134=$rv; //@line 2013 "_json.c"
        $0=$134; //@line 2013 "_json.c"
        __label__ = 68; break; //@line 2013 "_json.c"
      case 30: // $bb33
        $ident=0; //@line 2016 "_json.c"
        var $135=$s_addr; //@line 2017 "_json.c"
        var $136=$135+8; //@line 2017 "_json.c"
        var $137=HEAP[$136]; //@line 2017 "_json.c"
        var $138=($137)!=(__Py_NoneStruct); //@line 2017 "_json.c"
        if ($138) { __label__ = 31; break; } else { __label__ = 43; break; } //@line 2017 "_json.c"
      case 31: // $bb34
        var $139=$obj_addr; //@line 2019 "_json.c"
        var $140=$139; //@line 2019 "_json.c"
        var $141=_PyLong_FromVoidPtr($140); //@line 2019 "_json.c"
        $ident=$141; //@line 2019 "_json.c"
        var $142=$ident; //@line 2020 "_json.c"
        var $143=($142)==0; //@line 2020 "_json.c"
        if ($143) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 2020 "_json.c"
      case 32: // $bb35
        $0=-1; //@line 2021 "_json.c"
        __label__ = 68; break; //@line 2021 "_json.c"
      case 33: // $bb36
        var $144=$s_addr; //@line 2022 "_json.c"
        var $145=$144+8; //@line 2022 "_json.c"
        var $146=HEAP[$145]; //@line 2022 "_json.c"
        var $147=$ident; //@line 2022 "_json.c"
        var $148=_PyDict_Contains($146, $147); //@line 2022 "_json.c"
        $has_key=$148; //@line 2022 "_json.c"
        var $149=$has_key; //@line 2023 "_json.c"
        var $150=($149)!=0; //@line 2023 "_json.c"
        if ($150) { __label__ = 34; break; } else { __label__ = 39; break; } //@line 2023 "_json.c"
      case 34: // $bb37
        var $151=$has_key; //@line 2024 "_json.c"
        var $152=($151)!=-1; //@line 2024 "_json.c"
        if ($152) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 2024 "_json.c"
      case 35: // $bb38
        var $153=HEAP[_PyExc_ValueError]; //@line 2025 "_json.c"
        _PyErr_SetString($153, __str59); //@line 2025 "_json.c"
        __label__ = 36; break; //@line 2025 "_json.c"
      case 36: // $bb39
        var $154=$ident; //@line 2026 "_json.c"
        var $155=$154; //@line 2026 "_json.c"
        var $156=HEAP[$155]; //@line 2026 "_json.c"
        var $157=($156) - 1; //@line 2026 "_json.c"
        var $158=$ident; //@line 2026 "_json.c"
        var $159=$158; //@line 2026 "_json.c"
        HEAP[$159]=$157; //@line 2026 "_json.c"
        var $160=$ident; //@line 2026 "_json.c"
        var $161=$160; //@line 2026 "_json.c"
        var $162=HEAP[$161]; //@line 2026 "_json.c"
        var $163=($162)==0; //@line 2026 "_json.c"
        if ($163) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 2026 "_json.c"
      case 37: // $bb40
        var $164=$ident; //@line 2026 "_json.c"
        var $165=$164+4; //@line 2026 "_json.c"
        var $166=HEAP[$165]; //@line 2026 "_json.c"
        var $167=$166+24; //@line 2026 "_json.c"
        var $168=HEAP[$167]; //@line 2026 "_json.c"
        var $169=$ident; //@line 2026 "_json.c"
        FUNCTION_TABLE[$168]($169); //@line 2026 "_json.c"
        __label__ = 38; break; //@line 2026 "_json.c"
      case 38: // $bb41
        $0=-1; //@line 2027 "_json.c"
        __label__ = 68; break; //@line 2027 "_json.c"
      case 39: // $bb42
        var $170=$s_addr; //@line 2029 "_json.c"
        var $171=$170+8; //@line 2029 "_json.c"
        var $172=HEAP[$171]; //@line 2029 "_json.c"
        var $173=$ident; //@line 2029 "_json.c"
        var $174=$obj_addr; //@line 2029 "_json.c"
        var $175=_PyDict_SetItem($172, $173, $174); //@line 2029 "_json.c"
        var $176=($175)!=0; //@line 2029 "_json.c"
        if ($176) { __label__ = 40; break; } else { __label__ = 43; break; } //@line 2029 "_json.c"
      case 40: // $bb43
        var $177=$ident; //@line 2030 "_json.c"
        var $178=$177; //@line 2030 "_json.c"
        var $179=HEAP[$178]; //@line 2030 "_json.c"
        var $180=($179) - 1; //@line 2030 "_json.c"
        var $181=$ident; //@line 2030 "_json.c"
        var $182=$181; //@line 2030 "_json.c"
        HEAP[$182]=$180; //@line 2030 "_json.c"
        var $183=$ident; //@line 2030 "_json.c"
        var $184=$183; //@line 2030 "_json.c"
        var $185=HEAP[$184]; //@line 2030 "_json.c"
        var $186=($185)==0; //@line 2030 "_json.c"
        if ($186) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 2030 "_json.c"
      case 41: // $bb44
        var $187=$ident; //@line 2030 "_json.c"
        var $188=$187+4; //@line 2030 "_json.c"
        var $189=HEAP[$188]; //@line 2030 "_json.c"
        var $190=$189+24; //@line 2030 "_json.c"
        var $191=HEAP[$190]; //@line 2030 "_json.c"
        var $192=$ident; //@line 2030 "_json.c"
        FUNCTION_TABLE[$191]($192); //@line 2030 "_json.c"
        __label__ = 42; break; //@line 2030 "_json.c"
      case 42: // $bb45
        $0=-1; //@line 2031 "_json.c"
        __label__ = 68; break; //@line 2031 "_json.c"
      case 43: // $bb46
        var $193=$s_addr; //@line 2034 "_json.c"
        var $194=$193+12; //@line 2034 "_json.c"
        var $195=HEAP[$194]; //@line 2034 "_json.c"
        var $196=$obj_addr; //@line 2034 "_json.c"
        var $197=_PyObject_CallFunctionObjArgs($195, allocate([$196,0,0,0,0,0,0,0], ["%struct.PyObject*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 2034 "_json.c"
        $newobj=$197; //@line 2034 "_json.c"
        var $198=($197)==0; //@line 2035 "_json.c"
        if ($198) { __label__ = 44; break; } else { __label__ = 48; break; } //@line 2035 "_json.c"
      case 44: // $bb47
        var $199=$ident; //@line 2036 "_json.c"
        var $200=($199)!=0; //@line 2036 "_json.c"
        if ($200) { __label__ = 45; break; } else { __label__ = 47; break; } //@line 2036 "_json.c"
      case 45: // $bb48
        var $201=$ident; //@line 2036 "_json.c"
        var $202=$201; //@line 2036 "_json.c"
        var $203=HEAP[$202]; //@line 2036 "_json.c"
        var $204=($203) - 1; //@line 2036 "_json.c"
        var $205=$ident; //@line 2036 "_json.c"
        var $206=$205; //@line 2036 "_json.c"
        HEAP[$206]=$204; //@line 2036 "_json.c"
        var $207=$ident; //@line 2036 "_json.c"
        var $208=$207; //@line 2036 "_json.c"
        var $209=HEAP[$208]; //@line 2036 "_json.c"
        var $210=($209)==0; //@line 2036 "_json.c"
        if ($210) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 2036 "_json.c"
      case 46: // $bb49
        var $211=$ident; //@line 2036 "_json.c"
        var $212=$211+4; //@line 2036 "_json.c"
        var $213=HEAP[$212]; //@line 2036 "_json.c"
        var $214=$213+24; //@line 2036 "_json.c"
        var $215=HEAP[$214]; //@line 2036 "_json.c"
        var $216=$ident; //@line 2036 "_json.c"
        FUNCTION_TABLE[$215]($216); //@line 2036 "_json.c"
        __label__ = 47; break; //@line 2036 "_json.c"
      case 47: // $bb50
        $0=-1; //@line 2037 "_json.c"
        __label__ = 68; break; //@line 2037 "_json.c"
      case 48: // $bb51
        var $217=HEAP[__PyThreadState_Current]; //@line 2040 "_json.c"
        var $218=$217+12; //@line 2040 "_json.c"
        var $219=HEAP[$218]; //@line 2040 "_json.c"
        var $220=($219) + 1; //@line 2040 "_json.c"
        var $221=$217+12; //@line 2040 "_json.c"
        HEAP[$221]=$220; //@line 2040 "_json.c"
        var $222=$217+12; //@line 2040 "_json.c"
        var $223=HEAP[$222]; //@line 2040 "_json.c"
        var $224=HEAP[__Py_CheckRecursionLimit]; //@line 2040 "_json.c"
        var $225=($223) > ($224); //@line 2040 "_json.c"
        if ($225) { __label__ = 49; break; } else { __label__ = 51; break; } //@line 2040 "_json.c"
      case 49: // $bb52
        var $226=__Py_CheckRecursiveCall(__str58); //@line 2040 "_json.c"
        var $227=($226)!=0; //@line 2040 "_json.c"
        if ($227) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 2040 "_json.c"
      case 50: // $bb53
        $0=-1; //@line 2041 "_json.c"
        __label__ = 68; break; //@line 2041 "_json.c"
      case 51: // $bb54
        var $228=$s_addr; //@line 2042 "_json.c"
        var $229=$rval_addr; //@line 2042 "_json.c"
        var $230=$newobj; //@line 2042 "_json.c"
        var $231=$indent_level_addr; //@line 2042 "_json.c"
        var $232=_encoder_listencode_obj($228, $229, $230, $231); //@line 2042 "_json.c"
        $rv=$232; //@line 2042 "_json.c"
        var $233=HEAP[__PyThreadState_Current]; //@line 2043 "_json.c"
        var $234=$233+12; //@line 2043 "_json.c"
        var $235=HEAP[$234]; //@line 2043 "_json.c"
        var $236=($235) - 1; //@line 2043 "_json.c"
        var $237=$233+12; //@line 2043 "_json.c"
        HEAP[$237]=$236; //@line 2043 "_json.c"
        var $238=$newobj; //@line 2045 "_json.c"
        var $239=$238; //@line 2045 "_json.c"
        var $240=HEAP[$239]; //@line 2045 "_json.c"
        var $241=($240) - 1; //@line 2045 "_json.c"
        var $242=$newobj; //@line 2045 "_json.c"
        var $243=$242; //@line 2045 "_json.c"
        HEAP[$243]=$241; //@line 2045 "_json.c"
        var $244=$newobj; //@line 2045 "_json.c"
        var $245=$244; //@line 2045 "_json.c"
        var $246=HEAP[$245]; //@line 2045 "_json.c"
        var $247=($246)==0; //@line 2045 "_json.c"
        if ($247) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 2045 "_json.c"
      case 52: // $bb55
        var $248=$newobj; //@line 2045 "_json.c"
        var $249=$248+4; //@line 2045 "_json.c"
        var $250=HEAP[$249]; //@line 2045 "_json.c"
        var $251=$250+24; //@line 2045 "_json.c"
        var $252=HEAP[$251]; //@line 2045 "_json.c"
        var $253=$newobj; //@line 2045 "_json.c"
        FUNCTION_TABLE[$252]($253); //@line 2045 "_json.c"
        __label__ = 53; break; //@line 2045 "_json.c"
      case 53: // $bb56
        var $254=$rv; //@line 2046 "_json.c"
        var $255=($254)!=0; //@line 2046 "_json.c"
        var $256=$ident; //@line 2047 "_json.c"
        var $257=($256)!=0; //@line 2047 "_json.c"
        if ($255) { __label__ = 54; break; } else { __label__ = 58; break; } //@line 2046 "_json.c"
      case 54: // $bb57
        if ($257) { __label__ = 55; break; } else { __label__ = 57; break; } //@line 2047 "_json.c"
      case 55: // $bb58
        var $258=$ident; //@line 2047 "_json.c"
        var $259=$258; //@line 2047 "_json.c"
        var $260=HEAP[$259]; //@line 2047 "_json.c"
        var $261=($260) - 1; //@line 2047 "_json.c"
        var $262=$ident; //@line 2047 "_json.c"
        var $263=$262; //@line 2047 "_json.c"
        HEAP[$263]=$261; //@line 2047 "_json.c"
        var $264=$ident; //@line 2047 "_json.c"
        var $265=$264; //@line 2047 "_json.c"
        var $266=HEAP[$265]; //@line 2047 "_json.c"
        var $267=($266)==0; //@line 2047 "_json.c"
        if ($267) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 2047 "_json.c"
      case 56: // $bb59
        var $268=$ident; //@line 2047 "_json.c"
        var $269=$268+4; //@line 2047 "_json.c"
        var $270=HEAP[$269]; //@line 2047 "_json.c"
        var $271=$270+24; //@line 2047 "_json.c"
        var $272=HEAP[$271]; //@line 2047 "_json.c"
        var $273=$ident; //@line 2047 "_json.c"
        FUNCTION_TABLE[$272]($273); //@line 2047 "_json.c"
        __label__ = 57; break; //@line 2047 "_json.c"
      case 57: // $bb60
        $0=-1; //@line 2048 "_json.c"
        __label__ = 68; break; //@line 2048 "_json.c"
      case 58: // $bb61
        if ($257) { __label__ = 59; break; } else { __label__ = 67; break; } //@line 2050 "_json.c"
      case 59: // $bb62
        var $274=$s_addr; //@line 2051 "_json.c"
        var $275=$274+8; //@line 2051 "_json.c"
        var $276=HEAP[$275]; //@line 2051 "_json.c"
        var $277=$ident; //@line 2051 "_json.c"
        var $278=_PyDict_DelItem($276, $277); //@line 2051 "_json.c"
        var $279=($278)!=0; //@line 2051 "_json.c"
        var $280=$ident; //@line 2052 "_json.c"
        var $281=($280)!=0; //@line 2052 "_json.c"
        if ($279) { __label__ = 60; break; } else { __label__ = 64; break; } //@line 2051 "_json.c"
      case 60: // $bb63
        if ($281) { __label__ = 61; break; } else { __label__ = 63; break; } //@line 2052 "_json.c"
      case 61: // $bb64
        var $282=$ident; //@line 2052 "_json.c"
        var $283=$282; //@line 2052 "_json.c"
        var $284=HEAP[$283]; //@line 2052 "_json.c"
        var $285=($284) - 1; //@line 2052 "_json.c"
        var $286=$ident; //@line 2052 "_json.c"
        var $287=$286; //@line 2052 "_json.c"
        HEAP[$287]=$285; //@line 2052 "_json.c"
        var $288=$ident; //@line 2052 "_json.c"
        var $289=$288; //@line 2052 "_json.c"
        var $290=HEAP[$289]; //@line 2052 "_json.c"
        var $291=($290)==0; //@line 2052 "_json.c"
        if ($291) { __label__ = 62; break; } else { __label__ = 63; break; } //@line 2052 "_json.c"
      case 62: // $bb65
        var $292=$ident; //@line 2052 "_json.c"
        var $293=$292+4; //@line 2052 "_json.c"
        var $294=HEAP[$293]; //@line 2052 "_json.c"
        var $295=$294+24; //@line 2052 "_json.c"
        var $296=HEAP[$295]; //@line 2052 "_json.c"
        var $297=$ident; //@line 2052 "_json.c"
        FUNCTION_TABLE[$296]($297); //@line 2052 "_json.c"
        __label__ = 63; break; //@line 2052 "_json.c"
      case 63: // $bb66
        $0=-1; //@line 2053 "_json.c"
        __label__ = 68; break; //@line 2053 "_json.c"
      case 64: // $bb67
        if ($281) { __label__ = 65; break; } else { __label__ = 67; break; } //@line 2055 "_json.c"
      case 65: // $bb68
        var $298=$ident; //@line 2055 "_json.c"
        var $299=$298; //@line 2055 "_json.c"
        var $300=HEAP[$299]; //@line 2055 "_json.c"
        var $301=($300) - 1; //@line 2055 "_json.c"
        var $302=$ident; //@line 2055 "_json.c"
        var $303=$302; //@line 2055 "_json.c"
        HEAP[$303]=$301; //@line 2055 "_json.c"
        var $304=$ident; //@line 2055 "_json.c"
        var $305=$304; //@line 2055 "_json.c"
        var $306=HEAP[$305]; //@line 2055 "_json.c"
        var $307=($306)==0; //@line 2055 "_json.c"
        if ($307) { __label__ = 66; break; } else { __label__ = 67; break; } //@line 2055 "_json.c"
      case 66: // $bb69
        var $308=$ident; //@line 2055 "_json.c"
        var $309=$308+4; //@line 2055 "_json.c"
        var $310=HEAP[$309]; //@line 2055 "_json.c"
        var $311=$310+24; //@line 2055 "_json.c"
        var $312=HEAP[$311]; //@line 2055 "_json.c"
        var $313=$ident; //@line 2055 "_json.c"
        FUNCTION_TABLE[$312]($313); //@line 2055 "_json.c"
        __label__ = 67; break; //@line 2055 "_json.c"
      case 67: // $bb70
        var $314=$rv; //@line 2057 "_json.c"
        $0=$314; //@line 2057 "_json.c"
        __label__ = 68; break; //@line 2057 "_json.c"
      case 68: // $bb71
        var $315=$0; //@line 1979 "_json.c"
        $retval=$315; //@line 1979 "_json.c"
        var $retval72=$retval; //@line 1979 "_json.c"
        ;
        return $retval72; //@line 1979 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_listencode_dict($s, $rval, $dct, $indent_level) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $rval_addr;
        var $dct_addr;
        var $indent_level_addr;
        var $retval;
        var $0;
        var $kstr;
        var $ident;
        var $key;
        var $value;
        var $it;
        var $skipkeys;
        var $idx;
        var $has_key;
        var $encoded;
        var $_py_tmp;
        var $_py_tmp58;
        var $_py_tmp66;
        var $_py_tmp72;
        $s_addr=$s;
        $rval_addr=$rval;
        $dct_addr=$dct;
        $indent_level_addr=$indent_level;
        $kstr=0; //@line 2068 "_json.c"
        $ident=0; //@line 2069 "_json.c"
        $key=0; //@line 2070 "_json.c"
        $value=0; //@line 2071 "_json.c"
        $it=0; //@line 2072 "_json.c"
        var $1=HEAP[_open_dict_11341]; //@line 2076 "_json.c"
        var $2=($1)==0; //@line 2076 "_json.c"
        var $3=HEAP[_close_dict_11342]; //@line 2076 "_json.c"
        var $4=($3)==0; //@line 2076 "_json.c"
        var $or_cond=($2) | ($4);
        var $5=HEAP[_empty_dict_11343]; //@line 2076 "_json.c"
        var $6=($5)==0; //@line 2076 "_json.c"
        var $or_cond3=($or_cond) | ($6);
        if ($or_cond3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2076 "_json.c"
      case 1: // $bb2
        var $7=_PyString_InternFromString(__str60); //@line 2077 "_json.c"
        HEAP[_open_dict_11341]=$7; //@line 2077 "_json.c"
        var $8=_PyString_InternFromString(__str61); //@line 2078 "_json.c"
        HEAP[_close_dict_11342]=$8; //@line 2078 "_json.c"
        var $9=_PyString_InternFromString(__str62); //@line 2079 "_json.c"
        HEAP[_empty_dict_11343]=$9; //@line 2079 "_json.c"
        var $10=HEAP[_open_dict_11341]; //@line 2080 "_json.c"
        var $11=($10)==0; //@line 2080 "_json.c"
        var $12=HEAP[_close_dict_11342]; //@line 2080 "_json.c"
        var $13=($12)==0; //@line 2080 "_json.c"
        var $or_cond5=($11) | ($13);
        var $14=HEAP[_empty_dict_11343]; //@line 2080 "_json.c"
        var $15=($14)==0; //@line 2080 "_json.c"
        var $or_cond7=($or_cond5) | ($15);
        if ($or_cond7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2080 "_json.c"
      case 2: // $bb5
        $0=-1; //@line 2081 "_json.c"
        __label__ = 79; break; //@line 2081 "_json.c"
      case 3: // $bb6
        var $16=$dct_addr; //@line 2083 "_json.c"
        var $17=$16; //@line 2083 "_json.c"
        var $18=$17+8; //@line 2083 "_json.c"
        var $19=HEAP[$18]; //@line 2083 "_json.c"
        var $20=($19)==0; //@line 2083 "_json.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2083 "_json.c"
      case 4: // $bb7
        var $21=HEAP[_empty_dict_11343]; //@line 2084 "_json.c"
        var $22=$rval_addr; //@line 2084 "_json.c"
        var $23=_PyList_Append($22, $21); //@line 2084 "_json.c"
        $0=$23; //@line 2084 "_json.c"
        __label__ = 79; break; //@line 2084 "_json.c"
      case 5: // $bb8
        var $24=$s_addr; //@line 2086 "_json.c"
        var $25=$24+8; //@line 2086 "_json.c"
        var $26=HEAP[$25]; //@line 2086 "_json.c"
        var $27=($26)!=(__Py_NoneStruct); //@line 2086 "_json.c"
        if ($27) { __label__ = 6; break; } else { __label__ = 11; break; } //@line 2086 "_json.c"
      case 6: // $bb9
        var $28=$dct_addr; //@line 2088 "_json.c"
        var $29=$28; //@line 2088 "_json.c"
        var $30=_PyLong_FromVoidPtr($29); //@line 2088 "_json.c"
        $ident=$30; //@line 2088 "_json.c"
        var $31=$ident; //@line 2089 "_json.c"
        var $32=($31)==0; //@line 2089 "_json.c"
        if ($32) { __label__ = 63; break; } else { __label__ = 7; break; } //@line 2089 "_json.c"
      case 7: // $bb10
        var $33=$s_addr; //@line 2091 "_json.c"
        var $34=$33+8; //@line 2091 "_json.c"
        var $35=HEAP[$34]; //@line 2091 "_json.c"
        var $36=$ident; //@line 2091 "_json.c"
        var $37=_PyDict_Contains($35, $36); //@line 2091 "_json.c"
        $has_key=$37; //@line 2091 "_json.c"
        var $38=$has_key; //@line 2092 "_json.c"
        var $39=($38)!=0; //@line 2092 "_json.c"
        if ($39) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 2092 "_json.c"
      case 8: // $bb11
        var $40=$has_key; //@line 2093 "_json.c"
        var $41=($40)!=-1; //@line 2093 "_json.c"
        if ($41) { __label__ = 9; break; } else { __label__ = 63; break; } //@line 2093 "_json.c"
      case 9: // $bb12
        var $42=HEAP[_PyExc_ValueError]; //@line 2094 "_json.c"
        _PyErr_SetString($42, __str59); //@line 2094 "_json.c"
        __label__ = 63; break; //@line 2094 "_json.c"
      case 10: // $bb14
        var $43=$s_addr; //@line 2097 "_json.c"
        var $44=$43+8; //@line 2097 "_json.c"
        var $45=HEAP[$44]; //@line 2097 "_json.c"
        var $46=$ident; //@line 2097 "_json.c"
        var $47=$dct_addr; //@line 2097 "_json.c"
        var $48=_PyDict_SetItem($45, $46, $47); //@line 2097 "_json.c"
        var $49=($48)!=0; //@line 2097 "_json.c"
        if ($49) { __label__ = 63; break; } else { __label__ = 11; break; } //@line 2097 "_json.c"
      case 11: // $bb15
        var $50=HEAP[_open_dict_11341]; //@line 2102 "_json.c"
        var $51=$rval_addr; //@line 2102 "_json.c"
        var $52=_PyList_Append($51, $50); //@line 2102 "_json.c"
        var $53=($52)!=0; //@line 2102 "_json.c"
        if ($53) { __label__ = 63; break; } else { __label__ = 12; break; } //@line 2102 "_json.c"
      case 12: // $bb16
        var $54=$s_addr; //@line 2105 "_json.c"
        var $55=$54+20; //@line 2105 "_json.c"
        var $56=HEAP[$55]; //@line 2105 "_json.c"
        var $57=($56)!=(__Py_NoneStruct); //@line 2105 "_json.c"
        if ($57) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2105 "_json.c"
      case 13: // $bb17
        var $58=$indent_level_addr; //@line 2107 "_json.c"
        var $59=($58) + 1; //@line 2107 "_json.c"
        $indent_level_addr=$59; //@line 2107 "_json.c"
        __label__ = 14; break; //@line 2107 "_json.c"
      case 14: // $bb18
        var $60=$dct_addr; //@line 2117 "_json.c"
        var $61=_PyObject_GetIter($60); //@line 2117 "_json.c"
        $it=$61; //@line 2117 "_json.c"
        var $62=($61)==0; //@line 2118 "_json.c"
        if ($62) { __label__ = 66; break; } else { __label__ = 15; break; } //@line 2118 "_json.c"
      case 15: // $bb19
        var $63=$s_addr; //@line 2120 "_json.c"
        var $64=$63+36; //@line 2120 "_json.c"
        var $65=HEAP[$64]; //@line 2120 "_json.c"
        var $66=_PyObject_IsTrue($65); //@line 2120 "_json.c"
        $skipkeys=$66; //@line 2120 "_json.c"
        $idx=0; //@line 2121 "_json.c"
        __label__ = 51; break; //@line 2121 "_json.c"
      case 16: // $bb20
        var $67=$key; //@line 2125 "_json.c"
        var $68=$67+4; //@line 2125 "_json.c"
        var $69=HEAP[$68]; //@line 2125 "_json.c"
        var $70=$69+84; //@line 2125 "_json.c"
        var $71=HEAP[$70]; //@line 2125 "_json.c"
        var $72=($71) & 134217728; //@line 2125 "_json.c"
        var $73=($72)!=0; //@line 2125 "_json.c"
        if ($73) { __label__ = 18; break; } else { __label__ = 17; break; } //@line 2125 "_json.c"
      case 17: // $bb21
        var $74=$key; //@line 2125 "_json.c"
        var $75=$74+4; //@line 2125 "_json.c"
        var $76=HEAP[$75]; //@line 2125 "_json.c"
        var $77=$76+84; //@line 2125 "_json.c"
        var $78=HEAP[$77]; //@line 2125 "_json.c"
        var $79=($78) & 268435456; //@line 2125 "_json.c"
        var $80=($79)!=0; //@line 2125 "_json.c"
        if ($80) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 2125 "_json.c"
      case 18: // $bb22
        var $81=$key; //@line 2126 "_json.c"
        var $82=$81; //@line 2126 "_json.c"
        var $83=HEAP[$82]; //@line 2126 "_json.c"
        var $84=($83) + 1; //@line 2126 "_json.c"
        var $85=$key; //@line 2126 "_json.c"
        var $86=$85; //@line 2126 "_json.c"
        HEAP[$86]=$84; //@line 2126 "_json.c"
        var $87=$key; //@line 2127 "_json.c"
        $kstr=$87; //@line 2127 "_json.c"
        __label__ = 31; break; //@line 2127 "_json.c"
      case 19: // $bb23
        var $88=$key; //@line 2129 "_json.c"
        var $89=$88+4; //@line 2129 "_json.c"
        var $90=HEAP[$89]; //@line 2129 "_json.c"
        var $91=($90)==(_PyFloat_Type); //@line 2129 "_json.c"
        if ($91) { __label__ = 21; break; } else { __label__ = 20; break; } //@line 2129 "_json.c"
      case 20: // $bb24
        var $92=$key; //@line 2129 "_json.c"
        var $93=$92+4; //@line 2129 "_json.c"
        var $94=HEAP[$93]; //@line 2129 "_json.c"
        var $95=_PyType_IsSubtype($94, _PyFloat_Type); //@line 2129 "_json.c"
        var $96=($95)!=0; //@line 2129 "_json.c"
        if ($96) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 2129 "_json.c"
      case 21: // $bb25
        var $97=$s_addr; //@line 2130 "_json.c"
        var $98=$key; //@line 2130 "_json.c"
        var $99=_encoder_encode_float($97, $98); //@line 2130 "_json.c"
        $kstr=$99; //@line 2130 "_json.c"
        var $100=($99)==0; //@line 2131 "_json.c"
        if ($100) { __label__ = 63; break; } else { __label__ = 31; break; } //@line 2131 "_json.c"
      case 22: // $bb27
        var $101=$key; //@line 2134 "_json.c"
        var $102=$101+4; //@line 2134 "_json.c"
        var $103=HEAP[$102]; //@line 2134 "_json.c"
        var $104=$103+84; //@line 2134 "_json.c"
        var $105=HEAP[$104]; //@line 2134 "_json.c"
        var $106=($105) & 8388608; //@line 2134 "_json.c"
        var $107=($106)!=0; //@line 2134 "_json.c"
        if ($107) { __label__ = 24; break; } else { __label__ = 23; break; } //@line 2134 "_json.c"
      case 23: // $bb28
        var $108=$key; //@line 2134 "_json.c"
        var $109=$108+4; //@line 2134 "_json.c"
        var $110=HEAP[$109]; //@line 2134 "_json.c"
        var $111=$110+84; //@line 2134 "_json.c"
        var $112=HEAP[$111]; //@line 2134 "_json.c"
        var $113=($112) & 16777216; //@line 2134 "_json.c"
        var $114=($113)!=0; //@line 2134 "_json.c"
        if ($114) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 2134 "_json.c"
      case 24: // $bb29
        var $115=$key; //@line 2135 "_json.c"
        var $116=_PyObject_Str($115); //@line 2135 "_json.c"
        $kstr=$116; //@line 2135 "_json.c"
        var $117=($116)==0; //@line 2136 "_json.c"
        if ($117) { __label__ = 63; break; } else { __label__ = 31; break; } //@line 2136 "_json.c"
      case 25: // $bb31
        var $118=$key; //@line 2139 "_json.c"
        var $119=($118)==(__Py_TrueStruct); //@line 2139 "_json.c"
        var $120=$key; //@line 2139 "_json.c"
        var $121=($120)==(__Py_ZeroStruct); //@line 2139 "_json.c"
        var $or_cond9=($119) | ($121);
        var $122=$key; //@line 2139 "_json.c"
        var $123=($122)==(__Py_NoneStruct); //@line 2139 "_json.c"
        var $or_cond11=($or_cond9) | ($123);
        if ($or_cond11) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2139 "_json.c"
      case 26: // $bb34
        var $124=$key; //@line 2140 "_json.c"
        var $125=__encoded_const($124); //@line 2140 "_json.c"
        $kstr=$125; //@line 2140 "_json.c"
        var $126=$kstr; //@line 2141 "_json.c"
        var $127=($126)==0; //@line 2141 "_json.c"
        if ($127) { __label__ = 63; break; } else { __label__ = 31; break; } //@line 2141 "_json.c"
      case 27: // $bb36
        var $128=$skipkeys; //@line 2144 "_json.c"
        var $129=($128)!=0; //@line 2144 "_json.c"
        if ($129) { __label__ = 28; break; } else { __label__ = 30; break; } //@line 2144 "_json.c"
      case 28: // $bb37
        var $130=$key; //@line 2145 "_json.c"
        var $131=$130; //@line 2145 "_json.c"
        var $132=HEAP[$131]; //@line 2145 "_json.c"
        var $133=($132) - 1; //@line 2145 "_json.c"
        var $134=$key; //@line 2145 "_json.c"
        var $135=$134; //@line 2145 "_json.c"
        HEAP[$135]=$133; //@line 2145 "_json.c"
        var $136=$key; //@line 2145 "_json.c"
        var $137=$136; //@line 2145 "_json.c"
        var $138=HEAP[$137]; //@line 2145 "_json.c"
        var $139=($138)==0; //@line 2145 "_json.c"
        if ($139) { __label__ = 29; break; } else { __label__ = 51; break; } //@line 2145 "_json.c"
      case 29: // $bb38
        var $140=$key; //@line 2145 "_json.c"
        var $141=$140+4; //@line 2145 "_json.c"
        var $142=HEAP[$141]; //@line 2145 "_json.c"
        var $143=$142+24; //@line 2145 "_json.c"
        var $144=HEAP[$143]; //@line 2145 "_json.c"
        var $145=$key; //@line 2145 "_json.c"
        FUNCTION_TABLE[$144]($145); //@line 2145 "_json.c"
        __label__ = 51; break; //@line 2145 "_json.c"
      case 30: // $bb40
        var $146=HEAP[_PyExc_TypeError]; //@line 2150 "_json.c"
        _PyErr_SetString($146, __str63); //@line 2150 "_json.c"
        __label__ = 63; break; //@line 2150 "_json.c"
      case 31: // $bb41
        var $147=$idx; //@line 2154 "_json.c"
        var $148=($147)!=0; //@line 2154 "_json.c"
        if ($148) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 2154 "_json.c"
      case 32: // $bb42
        var $149=$s_addr; //@line 2155 "_json.c"
        var $150=$149+28; //@line 2155 "_json.c"
        var $151=HEAP[$150]; //@line 2155 "_json.c"
        var $152=$rval_addr; //@line 2155 "_json.c"
        var $153=_PyList_Append($152, $151); //@line 2155 "_json.c"
        var $154=($153)!=0; //@line 2155 "_json.c"
        if ($154) { __label__ = 63; break; } else { __label__ = 33; break; } //@line 2155 "_json.c"
      case 33: // $bb43
        var $155=$dct_addr; //@line 2159 "_json.c"
        var $156=$key; //@line 2159 "_json.c"
        var $157=_PyObject_GetItem($155, $156); //@line 2159 "_json.c"
        $value=$157; //@line 2159 "_json.c"
        var $158=($157)==0; //@line 2160 "_json.c"
        if ($158) { __label__ = 63; break; } else { __label__ = 34; break; } //@line 2160 "_json.c"
      case 34: // $bb44
        var $159=$s_addr; //@line 2163 "_json.c"
        var $160=$kstr; //@line 2163 "_json.c"
        var $161=_encoder_encode_string($159, $160); //@line 2163 "_json.c"
        $encoded=$161; //@line 2163 "_json.c"
        var $162=$kstr; //@line 2164 "_json.c"
        var $163=($162)!=0; //@line 2164 "_json.c"
        if ($163) { __lastLabel__ = 34; __label__ = 35; break; } else { __lastLabel__ = 34; __label__ = 38; break; } //@line 2164 "_json.c"
      case 35: // $bb45
        var $164=$kstr; //@line 2164 "_json.c"
        $_py_tmp=$164; //@line 2164 "_json.c"
        $kstr=0; //@line 2164 "_json.c"
        var $165=$_py_tmp; //@line 2164 "_json.c"
        var $166=$165; //@line 2164 "_json.c"
        var $167=HEAP[$166]; //@line 2164 "_json.c"
        var $168=($167) - 1; //@line 2164 "_json.c"
        var $169=$_py_tmp; //@line 2164 "_json.c"
        var $170=$169; //@line 2164 "_json.c"
        HEAP[$170]=$168; //@line 2164 "_json.c"
        var $171=$_py_tmp; //@line 2164 "_json.c"
        var $172=$171; //@line 2164 "_json.c"
        var $173=HEAP[$172]; //@line 2164 "_json.c"
        var $174=($173)==0; //@line 2164 "_json.c"
        if ($174) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 2164 "_json.c"
      case 36: // $bb46
        var $175=$_py_tmp; //@line 2164 "_json.c"
        var $176=$175+4; //@line 2164 "_json.c"
        var $177=HEAP[$176]; //@line 2164 "_json.c"
        var $178=$177+24; //@line 2164 "_json.c"
        var $179=HEAP[$178]; //@line 2164 "_json.c"
        var $180=$_py_tmp; //@line 2164 "_json.c"
        FUNCTION_TABLE[$179]($180); //@line 2164 "_json.c"
        __label__ = 37; break; //@line 2164 "_json.c"
      case 37: // $bb47thread_pre_split
        var $_pr=$encoded;
        __lastLabel__ = 37; __label__ = 38; break;
      case 38: // $bb47
        var $181=__lastLabel__ == 37 ? $_pr : ($161);
        var $182=($181)==0; //@line 2165 "_json.c"
        if ($182) { __label__ = 63; break; } else { __label__ = 39; break; } //@line 2165 "_json.c"
      case 39: // $bb48
        var $183=$rval_addr; //@line 2167 "_json.c"
        var $184=$encoded; //@line 2167 "_json.c"
        var $185=_PyList_Append($183, $184); //@line 2167 "_json.c"
        var $186=($185)!=0; //@line 2167 "_json.c"
        var $187=$encoded; //@line 2168 "_json.c"
        var $188=$187; //@line 2168 "_json.c"
        var $189=HEAP[$188]; //@line 2168 "_json.c"
        var $190=($189) - 1; //@line 2168 "_json.c"
        var $191=$encoded; //@line 2168 "_json.c"
        var $192=$191; //@line 2168 "_json.c"
        HEAP[$192]=$190; //@line 2168 "_json.c"
        var $193=$encoded; //@line 2168 "_json.c"
        var $194=$193; //@line 2168 "_json.c"
        var $195=HEAP[$194]; //@line 2168 "_json.c"
        var $196=($195)==0; //@line 2168 "_json.c"
        if ($186) { __label__ = 40; break; } else { __label__ = 42; break; } //@line 2167 "_json.c"
      case 40: // $bb49
        if ($196) { __label__ = 41; break; } else { __label__ = 63; break; } //@line 2168 "_json.c"
      case 41: // $bb50
        var $197=$encoded; //@line 2168 "_json.c"
        var $198=$197+4; //@line 2168 "_json.c"
        var $199=HEAP[$198]; //@line 2168 "_json.c"
        var $200=$199+24; //@line 2168 "_json.c"
        var $201=HEAP[$200]; //@line 2168 "_json.c"
        var $202=$encoded; //@line 2168 "_json.c"
        FUNCTION_TABLE[$201]($202); //@line 2168 "_json.c"
        __label__ = 63; break; //@line 2168 "_json.c"
      case 42: // $bb52
        if ($196) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 2171 "_json.c"
      case 43: // $bb53
        var $203=$encoded; //@line 2171 "_json.c"
        var $204=$203+4; //@line 2171 "_json.c"
        var $205=HEAP[$204]; //@line 2171 "_json.c"
        var $206=$205+24; //@line 2171 "_json.c"
        var $207=HEAP[$206]; //@line 2171 "_json.c"
        var $208=$encoded; //@line 2171 "_json.c"
        FUNCTION_TABLE[$207]($208); //@line 2171 "_json.c"
        __label__ = 44; break; //@line 2171 "_json.c"
      case 44: // $bb54
        var $209=$s_addr; //@line 2172 "_json.c"
        var $210=$209+24; //@line 2172 "_json.c"
        var $211=HEAP[$210]; //@line 2172 "_json.c"
        var $212=$rval_addr; //@line 2172 "_json.c"
        var $213=_PyList_Append($212, $211); //@line 2172 "_json.c"
        var $214=($213)!=0; //@line 2172 "_json.c"
        if ($214) { __label__ = 63; break; } else { __label__ = 45; break; } //@line 2172 "_json.c"
      case 45: // $bb55
        var $215=$s_addr; //@line 2174 "_json.c"
        var $216=$rval_addr; //@line 2174 "_json.c"
        var $217=$value; //@line 2174 "_json.c"
        var $218=$indent_level_addr; //@line 2174 "_json.c"
        var $219=_encoder_listencode_obj($215, $216, $217, $218); //@line 2174 "_json.c"
        var $220=($219)!=0; //@line 2174 "_json.c"
        if ($220) { __label__ = 63; break; } else { __label__ = 46; break; } //@line 2174 "_json.c"
      case 46: // $bb56
        var $221=$idx; //@line 2176 "_json.c"
        var $222=($221) + 1; //@line 2176 "_json.c"
        $idx=$222; //@line 2176 "_json.c"
        var $223=$value; //@line 2177 "_json.c"
        var $224=($223)!=0; //@line 2177 "_json.c"
        if ($224) { __label__ = 47; break; } else { __label__ = 49; break; } //@line 2177 "_json.c"
      case 47: // $bb57
        var $225=$value; //@line 2177 "_json.c"
        $_py_tmp58=$225; //@line 2177 "_json.c"
        $value=0; //@line 2177 "_json.c"
        var $226=$_py_tmp58; //@line 2177 "_json.c"
        var $227=$226; //@line 2177 "_json.c"
        var $228=HEAP[$227]; //@line 2177 "_json.c"
        var $229=($228) - 1; //@line 2177 "_json.c"
        var $230=$_py_tmp58; //@line 2177 "_json.c"
        var $231=$230; //@line 2177 "_json.c"
        HEAP[$231]=$229; //@line 2177 "_json.c"
        var $232=$_py_tmp58; //@line 2177 "_json.c"
        var $233=$232; //@line 2177 "_json.c"
        var $234=HEAP[$233]; //@line 2177 "_json.c"
        var $235=($234)==0; //@line 2177 "_json.c"
        if ($235) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 2177 "_json.c"
      case 48: // $bb59
        var $236=$_py_tmp58; //@line 2177 "_json.c"
        var $237=$236+4; //@line 2177 "_json.c"
        var $238=HEAP[$237]; //@line 2177 "_json.c"
        var $239=$238+24; //@line 2177 "_json.c"
        var $240=HEAP[$239]; //@line 2177 "_json.c"
        var $241=$_py_tmp58; //@line 2177 "_json.c"
        FUNCTION_TABLE[$240]($241); //@line 2177 "_json.c"
        __label__ = 49; break; //@line 2177 "_json.c"
      case 49: // $bb60
        var $242=$key; //@line 2178 "_json.c"
        var $243=$242; //@line 2178 "_json.c"
        var $244=HEAP[$243]; //@line 2178 "_json.c"
        var $245=($244) - 1; //@line 2178 "_json.c"
        var $246=$key; //@line 2178 "_json.c"
        var $247=$246; //@line 2178 "_json.c"
        HEAP[$247]=$245; //@line 2178 "_json.c"
        var $248=$key; //@line 2178 "_json.c"
        var $249=$248; //@line 2178 "_json.c"
        var $250=HEAP[$249]; //@line 2178 "_json.c"
        var $251=($250)==0; //@line 2178 "_json.c"
        if ($251) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 2178 "_json.c"
      case 50: // $bb61
        var $252=$key; //@line 2178 "_json.c"
        var $253=$252+4; //@line 2178 "_json.c"
        var $254=HEAP[$253]; //@line 2178 "_json.c"
        var $255=$254+24; //@line 2178 "_json.c"
        var $256=HEAP[$255]; //@line 2178 "_json.c"
        var $257=$key; //@line 2178 "_json.c"
        FUNCTION_TABLE[$256]($257); //@line 2178 "_json.c"
        __label__ = 51; break; //@line 2178 "_json.c"
      case 51: // $bb62
        var $258=$it; //@line 2122 "_json.c"
        var $259=_PyIter_Next($258); //@line 2122 "_json.c"
        $key=$259; //@line 2122 "_json.c"
        var $260=($259)!=0; //@line 2122 "_json.c"
        if ($260) { __label__ = 16; break; } else { __label__ = 52; break; } //@line 2122 "_json.c"
      case 52: // $bb63
        var $261=_PyErr_Occurred(); //@line 2180 "_json.c"
        var $262=($261)!=0; //@line 2180 "_json.c"
        if ($262) { __label__ = 63; break; } else { __label__ = 53; break; } //@line 2180 "_json.c"
      case 53: // $bb64
        var $263=$it; //@line 2182 "_json.c"
        var $264=($263)!=0; //@line 2182 "_json.c"
        if ($264) { __label__ = 54; break; } else { __label__ = 56; break; } //@line 2182 "_json.c"
      case 54: // $bb65
        var $265=$it; //@line 2182 "_json.c"
        $_py_tmp66=$265; //@line 2182 "_json.c"
        $it=0; //@line 2182 "_json.c"
        var $266=$_py_tmp66; //@line 2182 "_json.c"
        var $267=$266; //@line 2182 "_json.c"
        var $268=HEAP[$267]; //@line 2182 "_json.c"
        var $269=($268) - 1; //@line 2182 "_json.c"
        var $270=$_py_tmp66; //@line 2182 "_json.c"
        var $271=$270; //@line 2182 "_json.c"
        HEAP[$271]=$269; //@line 2182 "_json.c"
        var $272=$_py_tmp66; //@line 2182 "_json.c"
        var $273=$272; //@line 2182 "_json.c"
        var $274=HEAP[$273]; //@line 2182 "_json.c"
        var $275=($274)==0; //@line 2182 "_json.c"
        if ($275) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 2182 "_json.c"
      case 55: // $bb67
        var $276=$_py_tmp66; //@line 2182 "_json.c"
        var $277=$276+4; //@line 2182 "_json.c"
        var $278=HEAP[$277]; //@line 2182 "_json.c"
        var $279=$278+24; //@line 2182 "_json.c"
        var $280=HEAP[$279]; //@line 2182 "_json.c"
        var $281=$_py_tmp66; //@line 2182 "_json.c"
        FUNCTION_TABLE[$280]($281); //@line 2182 "_json.c"
        __label__ = 56; break; //@line 2182 "_json.c"
      case 56: // $bb68
        var $282=$ident; //@line 2184 "_json.c"
        var $283=($282)!=0; //@line 2184 "_json.c"
        if ($283) { __label__ = 57; break; } else { __label__ = 61; break; } //@line 2184 "_json.c"
      case 57: // $bb69
        var $284=$s_addr; //@line 2185 "_json.c"
        var $285=$284+8; //@line 2185 "_json.c"
        var $286=HEAP[$285]; //@line 2185 "_json.c"
        var $287=$ident; //@line 2185 "_json.c"
        var $288=_PyDict_DelItem($286, $287); //@line 2185 "_json.c"
        var $289=($288)!=0; //@line 2185 "_json.c"
        if ($289) { __label__ = 63; break; } else { __label__ = 58; break; } //@line 2185 "_json.c"
      case 58: // $bb70
        var $290=$ident; //@line 2187 "_json.c"
        var $291=($290)!=0; //@line 2187 "_json.c"
        if ($291) { __label__ = 59; break; } else { __label__ = 61; break; } //@line 2187 "_json.c"
      case 59: // $bb71
        var $292=$ident; //@line 2187 "_json.c"
        $_py_tmp72=$292; //@line 2187 "_json.c"
        $ident=0; //@line 2187 "_json.c"
        var $293=$_py_tmp72; //@line 2187 "_json.c"
        var $294=$293; //@line 2187 "_json.c"
        var $295=HEAP[$294]; //@line 2187 "_json.c"
        var $296=($295) - 1; //@line 2187 "_json.c"
        var $297=$_py_tmp72; //@line 2187 "_json.c"
        var $298=$297; //@line 2187 "_json.c"
        HEAP[$298]=$296; //@line 2187 "_json.c"
        var $299=$_py_tmp72; //@line 2187 "_json.c"
        var $300=$299; //@line 2187 "_json.c"
        var $301=HEAP[$300]; //@line 2187 "_json.c"
        var $302=($301)==0; //@line 2187 "_json.c"
        if ($302) { __label__ = 60; break; } else { __label__ = 61; break; } //@line 2187 "_json.c"
      case 60: // $bb73
        var $303=$_py_tmp72; //@line 2187 "_json.c"
        var $304=$303+4; //@line 2187 "_json.c"
        var $305=HEAP[$304]; //@line 2187 "_json.c"
        var $306=$305+24; //@line 2187 "_json.c"
        var $307=HEAP[$306]; //@line 2187 "_json.c"
        var $308=$_py_tmp72; //@line 2187 "_json.c"
        FUNCTION_TABLE[$307]($308); //@line 2187 "_json.c"
        __label__ = 61; break; //@line 2187 "_json.c"
      case 61: // $bb74
        var $309=HEAP[_close_dict_11342]; //@line 2197 "_json.c"
        var $310=$rval_addr; //@line 2197 "_json.c"
        var $311=_PyList_Append($310, $309); //@line 2197 "_json.c"
        var $312=($311)!=0; //@line 2197 "_json.c"
        if ($312) { __label__ = 63; break; } else { __label__ = 62; break; } //@line 2197 "_json.c"
      case 62: // $bb75
        $0=0; //@line 2199 "_json.c"
        __label__ = 79; break; //@line 2199 "_json.c"
      case 63: // $bail
        var $_pr12=$it;
        var $313=($_pr12)!=0; //@line 2202 "_json.c"
        if ($313) { __label__ = 64; break; } else { __label__ = 66; break; } //@line 2202 "_json.c"
      case 64: // $bb76
        var $314=$it; //@line 2202 "_json.c"
        var $315=$314; //@line 2202 "_json.c"
        var $316=HEAP[$315]; //@line 2202 "_json.c"
        var $317=($316) - 1; //@line 2202 "_json.c"
        var $318=$it; //@line 2202 "_json.c"
        var $319=$318; //@line 2202 "_json.c"
        HEAP[$319]=$317; //@line 2202 "_json.c"
        var $320=$it; //@line 2202 "_json.c"
        var $321=$320; //@line 2202 "_json.c"
        var $322=HEAP[$321]; //@line 2202 "_json.c"
        var $323=($322)==0; //@line 2202 "_json.c"
        if ($323) { __label__ = 65; break; } else { __label__ = 66; break; } //@line 2202 "_json.c"
      case 65: // $bb77
        var $324=$it; //@line 2202 "_json.c"
        var $325=$324+4; //@line 2202 "_json.c"
        var $326=HEAP[$325]; //@line 2202 "_json.c"
        var $327=$326+24; //@line 2202 "_json.c"
        var $328=HEAP[$327]; //@line 2202 "_json.c"
        var $329=$it; //@line 2202 "_json.c"
        FUNCTION_TABLE[$328]($329); //@line 2202 "_json.c"
        __label__ = 66; break; //@line 2202 "_json.c"
      case 66: // $bb78
        var $330=$key; //@line 2203 "_json.c"
        var $331=($330)!=0; //@line 2203 "_json.c"
        if ($331) { __label__ = 67; break; } else { __label__ = 69; break; } //@line 2203 "_json.c"
      case 67: // $bb79
        var $332=$key; //@line 2203 "_json.c"
        var $333=$332; //@line 2203 "_json.c"
        var $334=HEAP[$333]; //@line 2203 "_json.c"
        var $335=($334) - 1; //@line 2203 "_json.c"
        var $336=$key; //@line 2203 "_json.c"
        var $337=$336; //@line 2203 "_json.c"
        HEAP[$337]=$335; //@line 2203 "_json.c"
        var $338=$key; //@line 2203 "_json.c"
        var $339=$338; //@line 2203 "_json.c"
        var $340=HEAP[$339]; //@line 2203 "_json.c"
        var $341=($340)==0; //@line 2203 "_json.c"
        if ($341) { __label__ = 68; break; } else { __label__ = 69; break; } //@line 2203 "_json.c"
      case 68: // $bb80
        var $342=$key; //@line 2203 "_json.c"
        var $343=$342+4; //@line 2203 "_json.c"
        var $344=HEAP[$343]; //@line 2203 "_json.c"
        var $345=$344+24; //@line 2203 "_json.c"
        var $346=HEAP[$345]; //@line 2203 "_json.c"
        var $347=$key; //@line 2203 "_json.c"
        FUNCTION_TABLE[$346]($347); //@line 2203 "_json.c"
        __label__ = 69; break; //@line 2203 "_json.c"
      case 69: // $bb81
        var $348=$value; //@line 2204 "_json.c"
        var $349=($348)!=0; //@line 2204 "_json.c"
        if ($349) { __label__ = 70; break; } else { __label__ = 72; break; } //@line 2204 "_json.c"
      case 70: // $bb82
        var $350=$value; //@line 2204 "_json.c"
        var $351=$350; //@line 2204 "_json.c"
        var $352=HEAP[$351]; //@line 2204 "_json.c"
        var $353=($352) - 1; //@line 2204 "_json.c"
        var $354=$value; //@line 2204 "_json.c"
        var $355=$354; //@line 2204 "_json.c"
        HEAP[$355]=$353; //@line 2204 "_json.c"
        var $356=$value; //@line 2204 "_json.c"
        var $357=$356; //@line 2204 "_json.c"
        var $358=HEAP[$357]; //@line 2204 "_json.c"
        var $359=($358)==0; //@line 2204 "_json.c"
        if ($359) { __label__ = 71; break; } else { __label__ = 72; break; } //@line 2204 "_json.c"
      case 71: // $bb83
        var $360=$value; //@line 2204 "_json.c"
        var $361=$360+4; //@line 2204 "_json.c"
        var $362=HEAP[$361]; //@line 2204 "_json.c"
        var $363=$362+24; //@line 2204 "_json.c"
        var $364=HEAP[$363]; //@line 2204 "_json.c"
        var $365=$value; //@line 2204 "_json.c"
        FUNCTION_TABLE[$364]($365); //@line 2204 "_json.c"
        __label__ = 72; break; //@line 2204 "_json.c"
      case 72: // $bb84
        var $366=$kstr; //@line 2205 "_json.c"
        var $367=($366)!=0; //@line 2205 "_json.c"
        if ($367) { __label__ = 73; break; } else { __label__ = 75; break; } //@line 2205 "_json.c"
      case 73: // $bb85
        var $368=$kstr; //@line 2205 "_json.c"
        var $369=$368; //@line 2205 "_json.c"
        var $370=HEAP[$369]; //@line 2205 "_json.c"
        var $371=($370) - 1; //@line 2205 "_json.c"
        var $372=$kstr; //@line 2205 "_json.c"
        var $373=$372; //@line 2205 "_json.c"
        HEAP[$373]=$371; //@line 2205 "_json.c"
        var $374=$kstr; //@line 2205 "_json.c"
        var $375=$374; //@line 2205 "_json.c"
        var $376=HEAP[$375]; //@line 2205 "_json.c"
        var $377=($376)==0; //@line 2205 "_json.c"
        if ($377) { __label__ = 74; break; } else { __label__ = 75; break; } //@line 2205 "_json.c"
      case 74: // $bb86
        var $378=$kstr; //@line 2205 "_json.c"
        var $379=$378+4; //@line 2205 "_json.c"
        var $380=HEAP[$379]; //@line 2205 "_json.c"
        var $381=$380+24; //@line 2205 "_json.c"
        var $382=HEAP[$381]; //@line 2205 "_json.c"
        var $383=$kstr; //@line 2205 "_json.c"
        FUNCTION_TABLE[$382]($383); //@line 2205 "_json.c"
        __label__ = 75; break; //@line 2205 "_json.c"
      case 75: // $bb87
        var $384=$ident; //@line 2206 "_json.c"
        var $385=($384)!=0; //@line 2206 "_json.c"
        if ($385) { __label__ = 76; break; } else { __label__ = 78; break; } //@line 2206 "_json.c"
      case 76: // $bb88
        var $386=$ident; //@line 2206 "_json.c"
        var $387=$386; //@line 2206 "_json.c"
        var $388=HEAP[$387]; //@line 2206 "_json.c"
        var $389=($388) - 1; //@line 2206 "_json.c"
        var $390=$ident; //@line 2206 "_json.c"
        var $391=$390; //@line 2206 "_json.c"
        HEAP[$391]=$389; //@line 2206 "_json.c"
        var $392=$ident; //@line 2206 "_json.c"
        var $393=$392; //@line 2206 "_json.c"
        var $394=HEAP[$393]; //@line 2206 "_json.c"
        var $395=($394)==0; //@line 2206 "_json.c"
        if ($395) { __label__ = 77; break; } else { __label__ = 78; break; } //@line 2206 "_json.c"
      case 77: // $bb89
        var $396=$ident; //@line 2206 "_json.c"
        var $397=$396+4; //@line 2206 "_json.c"
        var $398=HEAP[$397]; //@line 2206 "_json.c"
        var $399=$398+24; //@line 2206 "_json.c"
        var $400=HEAP[$399]; //@line 2206 "_json.c"
        var $401=$ident; //@line 2206 "_json.c"
        FUNCTION_TABLE[$400]($401); //@line 2206 "_json.c"
        __label__ = 78; break; //@line 2206 "_json.c"
      case 78: // $bb90
        $0=-1; //@line 2207 "_json.c"
        __label__ = 79; break; //@line 2207 "_json.c"
      case 79: // $bb91
        var $402=$0; //@line 2081 "_json.c"
        $retval=$402; //@line 2081 "_json.c"
        var $retval92=$retval; //@line 2081 "_json.c"
        ;
        return $retval92; //@line 2081 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_listencode_list($s, $rval, $seq, $indent_level) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $rval_addr;
        var $seq_addr;
        var $indent_level_addr;
        var $retval;
        var $iftmp_196;
        var $0;
        var $ident;
        var $s_fast;
        var $num_items;
        var $seq_items;
        var $i;
        var $has_key;
        var $obj;
        var $_py_tmp;
        $s_addr=$s;
        $rval_addr=$rval;
        $seq_addr=$seq;
        $indent_level_addr=$indent_level;
        $ident=0; //@line 2218 "_json.c"
        $s_fast=0; //@line 2219 "_json.c"
        var $1=HEAP[_open_array_11600]; //@line 2224 "_json.c"
        var $2=($1)==0; //@line 2224 "_json.c"
        var $3=HEAP[_close_array_11601]; //@line 2224 "_json.c"
        var $4=($3)==0; //@line 2224 "_json.c"
        var $or_cond=($2) | ($4);
        var $5=HEAP[_empty_array_11602]; //@line 2224 "_json.c"
        var $6=($5)==0; //@line 2224 "_json.c"
        var $or_cond3=($or_cond) | ($6);
        if ($or_cond3) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2224 "_json.c"
      case 1: // $bb2
        var $7=_PyString_InternFromString(__str64); //@line 2225 "_json.c"
        HEAP[_open_array_11600]=$7; //@line 2225 "_json.c"
        var $8=_PyString_InternFromString(__str65); //@line 2226 "_json.c"
        HEAP[_close_array_11601]=$8; //@line 2226 "_json.c"
        var $9=_PyString_InternFromString(__str66); //@line 2227 "_json.c"
        HEAP[_empty_array_11602]=$9; //@line 2227 "_json.c"
        var $10=HEAP[_open_array_11600]; //@line 2228 "_json.c"
        var $11=($10)==0; //@line 2228 "_json.c"
        var $12=HEAP[_close_array_11601]; //@line 2228 "_json.c"
        var $13=($12)==0; //@line 2228 "_json.c"
        var $or_cond5=($11) | ($13);
        var $14=HEAP[_empty_array_11602]; //@line 2228 "_json.c"
        var $15=($14)==0; //@line 2228 "_json.c"
        var $or_cond7=($or_cond5) | ($15);
        if ($or_cond7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2228 "_json.c"
      case 2: // $bb5
        $0=-1; //@line 2229 "_json.c"
        __label__ = 42; break; //@line 2229 "_json.c"
      case 3: // $bb6
        $ident=0; //@line 2231 "_json.c"
        var $16=$seq_addr; //@line 2232 "_json.c"
        var $17=_PySequence_Fast($16, __str67); //@line 2232 "_json.c"
        $s_fast=$17; //@line 2232 "_json.c"
        var $18=($17)==0; //@line 2233 "_json.c"
        if ($18) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2233 "_json.c"
      case 4: // $bb7
        $0=-1; //@line 2234 "_json.c"
        __label__ = 42; break; //@line 2234 "_json.c"
      case 5: // $bb8
        var $19=$s_fast; //@line 2235 "_json.c"
        var $20=$19; //@line 2235 "_json.c"
        var $21=$20+8; //@line 2235 "_json.c"
        var $22=HEAP[$21]; //@line 2235 "_json.c"
        $num_items=$22; //@line 2235 "_json.c"
        var $23=$num_items; //@line 2236 "_json.c"
        var $24=($23)==0; //@line 2236 "_json.c"
        if ($24) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 2236 "_json.c"
      case 6: // $bb9
        var $25=$s_fast; //@line 2237 "_json.c"
        var $26=$25; //@line 2237 "_json.c"
        var $27=HEAP[$26]; //@line 2237 "_json.c"
        var $28=($27) - 1; //@line 2237 "_json.c"
        var $29=$s_fast; //@line 2237 "_json.c"
        var $30=$29; //@line 2237 "_json.c"
        HEAP[$30]=$28; //@line 2237 "_json.c"
        var $31=$s_fast; //@line 2237 "_json.c"
        var $32=$31; //@line 2237 "_json.c"
        var $33=HEAP[$32]; //@line 2237 "_json.c"
        var $34=($33)==0; //@line 2237 "_json.c"
        if ($34) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2237 "_json.c"
      case 7: // $bb10
        var $35=$s_fast; //@line 2237 "_json.c"
        var $36=$35+4; //@line 2237 "_json.c"
        var $37=HEAP[$36]; //@line 2237 "_json.c"
        var $38=$37+24; //@line 2237 "_json.c"
        var $39=HEAP[$38]; //@line 2237 "_json.c"
        var $40=$s_fast; //@line 2237 "_json.c"
        FUNCTION_TABLE[$39]($40); //@line 2237 "_json.c"
        __label__ = 8; break; //@line 2237 "_json.c"
      case 8: // $bb11
        var $41=HEAP[_empty_array_11602]; //@line 2238 "_json.c"
        var $42=$rval_addr; //@line 2238 "_json.c"
        var $43=_PyList_Append($42, $41); //@line 2238 "_json.c"
        $0=$43; //@line 2238 "_json.c"
        __label__ = 42; break; //@line 2238 "_json.c"
      case 9: // $bb12
        var $44=$s_addr; //@line 2241 "_json.c"
        var $45=$44+8; //@line 2241 "_json.c"
        var $46=HEAP[$45]; //@line 2241 "_json.c"
        var $47=($46)!=(__Py_NoneStruct); //@line 2241 "_json.c"
        if ($47) { __label__ = 10; break; } else { __label__ = 15; break; } //@line 2241 "_json.c"
      case 10: // $bb13
        var $48=$seq_addr; //@line 2243 "_json.c"
        var $49=$48; //@line 2243 "_json.c"
        var $50=_PyLong_FromVoidPtr($49); //@line 2243 "_json.c"
        $ident=$50; //@line 2243 "_json.c"
        var $51=$ident; //@line 2244 "_json.c"
        var $52=($51)==0; //@line 2244 "_json.c"
        if ($52) { __label__ = 39; break; } else { __label__ = 11; break; } //@line 2244 "_json.c"
      case 11: // $bb14
        var $53=$s_addr; //@line 2246 "_json.c"
        var $54=$53+8; //@line 2246 "_json.c"
        var $55=HEAP[$54]; //@line 2246 "_json.c"
        var $56=$ident; //@line 2246 "_json.c"
        var $57=_PyDict_Contains($55, $56); //@line 2246 "_json.c"
        $has_key=$57; //@line 2246 "_json.c"
        var $58=$has_key; //@line 2247 "_json.c"
        var $59=($58)!=0; //@line 2247 "_json.c"
        if ($59) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2247 "_json.c"
      case 12: // $bb15
        var $60=$has_key; //@line 2248 "_json.c"
        var $61=($60)!=-1; //@line 2248 "_json.c"
        if ($61) { __label__ = 13; break; } else { __label__ = 36; break; } //@line 2248 "_json.c"
      case 13: // $bb16
        var $62=HEAP[_PyExc_ValueError]; //@line 2249 "_json.c"
        _PyErr_SetString($62, __str59); //@line 2249 "_json.c"
        __label__ = 36; break; //@line 2249 "_json.c"
      case 14: // $bb18
        var $63=$s_addr; //@line 2252 "_json.c"
        var $64=$63+8; //@line 2252 "_json.c"
        var $65=HEAP[$64]; //@line 2252 "_json.c"
        var $66=$ident; //@line 2252 "_json.c"
        var $67=$seq_addr; //@line 2252 "_json.c"
        var $68=_PyDict_SetItem($65, $66, $67); //@line 2252 "_json.c"
        var $69=($68)!=0; //@line 2252 "_json.c"
        if ($69) { __label__ = 36; break; } else { __label__ = 15; break; } //@line 2252 "_json.c"
      case 15: // $bb19
        var $70=$s_fast; //@line 2257 "_json.c"
        var $71=$70+4; //@line 2257 "_json.c"
        var $72=HEAP[$71]; //@line 2257 "_json.c"
        var $73=$72+84; //@line 2257 "_json.c"
        var $74=HEAP[$73]; //@line 2257 "_json.c"
        var $75=($74) & 33554432; //@line 2257 "_json.c"
        var $76=($75)!=0; //@line 2257 "_json.c"
        var $77=$s_fast; //@line 2257 "_json.c"
        if ($76) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 2257 "_json.c"
      case 16: // $bb20
        var $78=$77; //@line 2257 "_json.c"
        var $79=$78+12; //@line 2257 "_json.c"
        var $80=HEAP[$79]; //@line 2257 "_json.c"
        $iftmp_196=$80; //@line 2257 "_json.c"
        __label__ = 18; break; //@line 2257 "_json.c"
      case 17: // $bb21
        var $81=$77; //@line 2257 "_json.c"
        var $82=$81+12; //@line 2257 "_json.c"
        var $83=$82; //@line 2257 "_json.c"
        $iftmp_196=$83; //@line 2257 "_json.c"
        __label__ = 18; break; //@line 2257 "_json.c"
      case 18: // $bb22
        var $84=$iftmp_196; //@line 2257 "_json.c"
        $seq_items=$84; //@line 2257 "_json.c"
        var $85=HEAP[_open_array_11600]; //@line 2258 "_json.c"
        var $86=$rval_addr; //@line 2258 "_json.c"
        var $87=_PyList_Append($86, $85); //@line 2258 "_json.c"
        var $88=($87)!=0; //@line 2258 "_json.c"
        if ($88) { __label__ = 36; break; } else { __label__ = 19; break; } //@line 2258 "_json.c"
      case 19: // $bb23
        var $89=$s_addr; //@line 2260 "_json.c"
        var $90=$89+20; //@line 2260 "_json.c"
        var $91=HEAP[$90]; //@line 2260 "_json.c"
        var $92=($91)!=(__Py_NoneStruct); //@line 2260 "_json.c"
        if ($92) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2260 "_json.c"
      case 20: // $bb24
        var $93=$indent_level_addr; //@line 2262 "_json.c"
        var $94=($93) + 1; //@line 2262 "_json.c"
        $indent_level_addr=$94; //@line 2262 "_json.c"
        __label__ = 21; break; //@line 2262 "_json.c"
      case 21: // $bb25
        $i=0; //@line 2269 "_json.c"
        __label__ = 26; break; //@line 2269 "_json.c"
      case 22: // $bb26
        var $95=$seq_items; //@line 2270 "_json.c"
        var $96=$i; //@line 2270 "_json.c"
        var $97=$95+4*$96; //@line 2270 "_json.c"
        var $98=HEAP[$97]; //@line 2270 "_json.c"
        $obj=$98; //@line 2270 "_json.c"
        var $99=$i; //@line 2271 "_json.c"
        var $100=($99)!=0; //@line 2271 "_json.c"
        if ($100) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2271 "_json.c"
      case 23: // $bb27
        var $101=$s_addr; //@line 2272 "_json.c"
        var $102=$101+28; //@line 2272 "_json.c"
        var $103=HEAP[$102]; //@line 2272 "_json.c"
        var $104=$rval_addr; //@line 2272 "_json.c"
        var $105=_PyList_Append($104, $103); //@line 2272 "_json.c"
        var $106=($105)!=0; //@line 2272 "_json.c"
        if ($106) { __label__ = 36; break; } else { __label__ = 24; break; } //@line 2272 "_json.c"
      case 24: // $bb28
        var $107=$s_addr; //@line 2275 "_json.c"
        var $108=$rval_addr; //@line 2275 "_json.c"
        var $109=$obj; //@line 2275 "_json.c"
        var $110=$indent_level_addr; //@line 2275 "_json.c"
        var $111=_encoder_listencode_obj($107, $108, $109, $110); //@line 2275 "_json.c"
        var $112=($111)!=0; //@line 2275 "_json.c"
        if ($112) { __label__ = 36; break; } else { __label__ = 25; break; } //@line 2275 "_json.c"
      case 25: // $bb29
        var $113=$i; //@line 2269 "_json.c"
        var $114=($113) + 1; //@line 2269 "_json.c"
        $i=$114; //@line 2269 "_json.c"
        __label__ = 26; break; //@line 2269 "_json.c"
      case 26: // $bb30
        var $115=$i; //@line 2269 "_json.c"
        var $116=$num_items; //@line 2269 "_json.c"
        var $117=($115) < ($116); //@line 2269 "_json.c"
        if ($117) { __label__ = 22; break; } else { __label__ = 27; break; } //@line 2269 "_json.c"
      case 27: // $bb31
        var $118=$ident; //@line 2278 "_json.c"
        var $119=($118)!=0; //@line 2278 "_json.c"
        if ($119) { __label__ = 28; break; } else { __label__ = 32; break; } //@line 2278 "_json.c"
      case 28: // $bb32
        var $120=$s_addr; //@line 2279 "_json.c"
        var $121=$120+8; //@line 2279 "_json.c"
        var $122=HEAP[$121]; //@line 2279 "_json.c"
        var $123=$ident; //@line 2279 "_json.c"
        var $124=_PyDict_DelItem($122, $123); //@line 2279 "_json.c"
        var $125=($124)!=0; //@line 2279 "_json.c"
        if ($125) { __label__ = 36; break; } else { __label__ = 29; break; } //@line 2279 "_json.c"
      case 29: // $bb33
        var $126=$ident; //@line 2281 "_json.c"
        var $127=($126)!=0; //@line 2281 "_json.c"
        if ($127) { __label__ = 30; break; } else { __label__ = 32; break; } //@line 2281 "_json.c"
      case 30: // $bb34
        var $128=$ident; //@line 2281 "_json.c"
        $_py_tmp=$128; //@line 2281 "_json.c"
        $ident=0; //@line 2281 "_json.c"
        var $129=$_py_tmp; //@line 2281 "_json.c"
        var $130=$129; //@line 2281 "_json.c"
        var $131=HEAP[$130]; //@line 2281 "_json.c"
        var $132=($131) - 1; //@line 2281 "_json.c"
        var $133=$_py_tmp; //@line 2281 "_json.c"
        var $134=$133; //@line 2281 "_json.c"
        HEAP[$134]=$132; //@line 2281 "_json.c"
        var $135=$_py_tmp; //@line 2281 "_json.c"
        var $136=$135; //@line 2281 "_json.c"
        var $137=HEAP[$136]; //@line 2281 "_json.c"
        var $138=($137)==0; //@line 2281 "_json.c"
        if ($138) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 2281 "_json.c"
      case 31: // $bb35
        var $139=$_py_tmp; //@line 2281 "_json.c"
        var $140=$139+4; //@line 2281 "_json.c"
        var $141=HEAP[$140]; //@line 2281 "_json.c"
        var $142=$141+24; //@line 2281 "_json.c"
        var $143=HEAP[$142]; //@line 2281 "_json.c"
        var $144=$_py_tmp; //@line 2281 "_json.c"
        FUNCTION_TABLE[$143]($144); //@line 2281 "_json.c"
        __label__ = 32; break; //@line 2281 "_json.c"
      case 32: // $bb36
        var $145=HEAP[_close_array_11601]; //@line 2291 "_json.c"
        var $146=$rval_addr; //@line 2291 "_json.c"
        var $147=_PyList_Append($146, $145); //@line 2291 "_json.c"
        var $148=($147)!=0; //@line 2291 "_json.c"
        if ($148) { __label__ = 36; break; } else { __label__ = 33; break; } //@line 2291 "_json.c"
      case 33: // $bb37
        var $149=$s_fast; //@line 2293 "_json.c"
        var $150=$149; //@line 2293 "_json.c"
        var $151=HEAP[$150]; //@line 2293 "_json.c"
        var $152=($151) - 1; //@line 2293 "_json.c"
        var $153=$s_fast; //@line 2293 "_json.c"
        var $154=$153; //@line 2293 "_json.c"
        HEAP[$154]=$152; //@line 2293 "_json.c"
        var $155=$s_fast; //@line 2293 "_json.c"
        var $156=$155; //@line 2293 "_json.c"
        var $157=HEAP[$156]; //@line 2293 "_json.c"
        var $158=($157)==0; //@line 2293 "_json.c"
        if ($158) { __label__ = 34; break; } else { __label__ = 35; break; } //@line 2293 "_json.c"
      case 34: // $bb38
        var $159=$s_fast; //@line 2293 "_json.c"
        var $160=$159+4; //@line 2293 "_json.c"
        var $161=HEAP[$160]; //@line 2293 "_json.c"
        var $162=$161+24; //@line 2293 "_json.c"
        var $163=HEAP[$162]; //@line 2293 "_json.c"
        var $164=$s_fast; //@line 2293 "_json.c"
        FUNCTION_TABLE[$163]($164); //@line 2293 "_json.c"
        __label__ = 35; break; //@line 2293 "_json.c"
      case 35: // $bb39
        $0=0; //@line 2294 "_json.c"
        __label__ = 42; break; //@line 2294 "_json.c"
      case 36: // $bail
        var $_pr=$ident;
        var $165=($_pr)!=0; //@line 2297 "_json.c"
        if ($165) { __label__ = 37; break; } else { __label__ = 39; break; } //@line 2297 "_json.c"
      case 37: // $bb40
        var $166=$ident; //@line 2297 "_json.c"
        var $167=$166; //@line 2297 "_json.c"
        var $168=HEAP[$167]; //@line 2297 "_json.c"
        var $169=($168) - 1; //@line 2297 "_json.c"
        var $170=$ident; //@line 2297 "_json.c"
        var $171=$170; //@line 2297 "_json.c"
        HEAP[$171]=$169; //@line 2297 "_json.c"
        var $172=$ident; //@line 2297 "_json.c"
        var $173=$172; //@line 2297 "_json.c"
        var $174=HEAP[$173]; //@line 2297 "_json.c"
        var $175=($174)==0; //@line 2297 "_json.c"
        if ($175) { __label__ = 38; break; } else { __label__ = 39; break; } //@line 2297 "_json.c"
      case 38: // $bb41
        var $176=$ident; //@line 2297 "_json.c"
        var $177=$176+4; //@line 2297 "_json.c"
        var $178=HEAP[$177]; //@line 2297 "_json.c"
        var $179=$178+24; //@line 2297 "_json.c"
        var $180=HEAP[$179]; //@line 2297 "_json.c"
        var $181=$ident; //@line 2297 "_json.c"
        FUNCTION_TABLE[$180]($181); //@line 2297 "_json.c"
        __label__ = 39; break; //@line 2297 "_json.c"
      case 39: // $bb42
        var $182=$s_fast; //@line 2298 "_json.c"
        var $183=$182; //@line 2298 "_json.c"
        var $184=HEAP[$183]; //@line 2298 "_json.c"
        var $185=($184) - 1; //@line 2298 "_json.c"
        var $186=$s_fast; //@line 2298 "_json.c"
        var $187=$186; //@line 2298 "_json.c"
        HEAP[$187]=$185; //@line 2298 "_json.c"
        var $188=$s_fast; //@line 2298 "_json.c"
        var $189=$188; //@line 2298 "_json.c"
        var $190=HEAP[$189]; //@line 2298 "_json.c"
        var $191=($190)==0; //@line 2298 "_json.c"
        if ($191) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 2298 "_json.c"
      case 40: // $bb43
        var $192=$s_fast; //@line 2298 "_json.c"
        var $193=$192+4; //@line 2298 "_json.c"
        var $194=HEAP[$193]; //@line 2298 "_json.c"
        var $195=$194+24; //@line 2298 "_json.c"
        var $196=HEAP[$195]; //@line 2298 "_json.c"
        var $197=$s_fast; //@line 2298 "_json.c"
        FUNCTION_TABLE[$196]($197); //@line 2298 "_json.c"
        __label__ = 41; break; //@line 2298 "_json.c"
      case 41: // $bb44
        $0=-1; //@line 2299 "_json.c"
        __label__ = 42; break; //@line 2299 "_json.c"
      case 42: // $bb45
        var $198=$0; //@line 2229 "_json.c"
        $retval=$198; //@line 2229 "_json.c"
        var $retval46=$retval; //@line 2229 "_json.c"
        ;
        return $retval46; //@line 2229 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_dealloc($self) {
    ;
    var __label__;
  
    var $self_addr;
    $self_addr=$self;
    var $0=$self_addr; //@line 2306 "_json.c"
    var $1=_encoder_clear($0); //@line 2306 "_json.c"
    var $2=$self_addr; //@line 2307 "_json.c"
    var $3=$2+4; //@line 2307 "_json.c"
    var $4=HEAP[$3]; //@line 2307 "_json.c"
    var $5=$4+160; //@line 2307 "_json.c"
    var $6=HEAP[$5]; //@line 2307 "_json.c"
    var $7=$self_addr; //@line 2307 "_json.c"
    var $8=$7; //@line 2307 "_json.c"
    FUNCTION_TABLE[$6]($8); //@line 2307 "_json.c"
    ;
    return; //@line 2308 "_json.c"
  }
  

  function _encoder_traverse($self, $visit, $arg) {
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
        var $s;
        var $vret;
        var $vret7;
        var $vret11;
        var $vret15;
        var $vret19;
        var $vret23;
        var $vret27;
        var $vret31;
        $self_addr=$self;
        $visit_addr=$visit;
        $arg_addr=$arg;
        var $1=$self_addr; //@line 2314 "_json.c"
        var $2=$1+4; //@line 2314 "_json.c"
        var $3=HEAP[$2]; //@line 2314 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 2314 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2314 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 2314 "_json.c"
        var $6=$5+4; //@line 2314 "_json.c"
        var $7=HEAP[$6]; //@line 2314 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 2314 "_json.c"
        var $9=($8)==0; //@line 2314 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2314 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str47, __str29, 2314, ___PRETTY_FUNCTION___11738); //@line 2314 "_json.c"
        throw "Reached an unreachable!" //@line 2314 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 2315 "_json.c"
        var $11=$10; //@line 2315 "_json.c"
        $s=$11; //@line 2315 "_json.c"
        var $12=$s; //@line 2316 "_json.c"
        var $13=$12+8; //@line 2316 "_json.c"
        var $14=HEAP[$13]; //@line 2316 "_json.c"
        var $15=($14)!=0; //@line 2316 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2316 "_json.c"
      case 4: // $bb3
        var $16=$s; //@line 2316 "_json.c"
        var $17=$16+8; //@line 2316 "_json.c"
        var $18=HEAP[$17]; //@line 2316 "_json.c"
        var $19=$visit_addr; //@line 2316 "_json.c"
        var $20=$arg_addr; //@line 2316 "_json.c"
        var $21=FUNCTION_TABLE[$19]($18, $20); //@line 2316 "_json.c"
        $vret=$21; //@line 2316 "_json.c"
        var $22=$vret; //@line 2316 "_json.c"
        var $23=($22)!=0; //@line 2316 "_json.c"
        if ($23) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2316 "_json.c"
      case 5: // $bb4
        var $24=$vret; //@line 2316 "_json.c"
        $0=$24; //@line 2316 "_json.c"
        __label__ = 28; break; //@line 2316 "_json.c"
      case 6: // $bb5
        var $25=$s; //@line 2317 "_json.c"
        var $26=$25+12; //@line 2317 "_json.c"
        var $27=HEAP[$26]; //@line 2317 "_json.c"
        var $28=($27)!=0; //@line 2317 "_json.c"
        if ($28) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2317 "_json.c"
      case 7: // $bb6
        var $29=$s; //@line 2317 "_json.c"
        var $30=$29+12; //@line 2317 "_json.c"
        var $31=HEAP[$30]; //@line 2317 "_json.c"
        var $32=$visit_addr; //@line 2317 "_json.c"
        var $33=$arg_addr; //@line 2317 "_json.c"
        var $34=FUNCTION_TABLE[$32]($31, $33); //@line 2317 "_json.c"
        $vret7=$34; //@line 2317 "_json.c"
        var $35=$vret7; //@line 2317 "_json.c"
        var $36=($35)!=0; //@line 2317 "_json.c"
        if ($36) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2317 "_json.c"
      case 8: // $bb8
        var $37=$vret7; //@line 2317 "_json.c"
        $0=$37; //@line 2317 "_json.c"
        __label__ = 28; break; //@line 2317 "_json.c"
      case 9: // $bb9
        var $38=$s; //@line 2318 "_json.c"
        var $39=$38+16; //@line 2318 "_json.c"
        var $40=HEAP[$39]; //@line 2318 "_json.c"
        var $41=($40)!=0; //@line 2318 "_json.c"
        if ($41) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2318 "_json.c"
      case 10: // $bb10
        var $42=$s; //@line 2318 "_json.c"
        var $43=$42+16; //@line 2318 "_json.c"
        var $44=HEAP[$43]; //@line 2318 "_json.c"
        var $45=$visit_addr; //@line 2318 "_json.c"
        var $46=$arg_addr; //@line 2318 "_json.c"
        var $47=FUNCTION_TABLE[$45]($44, $46); //@line 2318 "_json.c"
        $vret11=$47; //@line 2318 "_json.c"
        var $48=$vret11; //@line 2318 "_json.c"
        var $49=($48)!=0; //@line 2318 "_json.c"
        if ($49) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2318 "_json.c"
      case 11: // $bb12
        var $50=$vret11; //@line 2318 "_json.c"
        $0=$50; //@line 2318 "_json.c"
        __label__ = 28; break; //@line 2318 "_json.c"
      case 12: // $bb13
        var $51=$s; //@line 2319 "_json.c"
        var $52=$51+20; //@line 2319 "_json.c"
        var $53=HEAP[$52]; //@line 2319 "_json.c"
        var $54=($53)!=0; //@line 2319 "_json.c"
        if ($54) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2319 "_json.c"
      case 13: // $bb14
        var $55=$s; //@line 2319 "_json.c"
        var $56=$55+20; //@line 2319 "_json.c"
        var $57=HEAP[$56]; //@line 2319 "_json.c"
        var $58=$visit_addr; //@line 2319 "_json.c"
        var $59=$arg_addr; //@line 2319 "_json.c"
        var $60=FUNCTION_TABLE[$58]($57, $59); //@line 2319 "_json.c"
        $vret15=$60; //@line 2319 "_json.c"
        var $61=$vret15; //@line 2319 "_json.c"
        var $62=($61)!=0; //@line 2319 "_json.c"
        if ($62) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2319 "_json.c"
      case 14: // $bb16
        var $63=$vret15; //@line 2319 "_json.c"
        $0=$63; //@line 2319 "_json.c"
        __label__ = 28; break; //@line 2319 "_json.c"
      case 15: // $bb17
        var $64=$s; //@line 2320 "_json.c"
        var $65=$64+24; //@line 2320 "_json.c"
        var $66=HEAP[$65]; //@line 2320 "_json.c"
        var $67=($66)!=0; //@line 2320 "_json.c"
        if ($67) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 2320 "_json.c"
      case 16: // $bb18
        var $68=$s; //@line 2320 "_json.c"
        var $69=$68+24; //@line 2320 "_json.c"
        var $70=HEAP[$69]; //@line 2320 "_json.c"
        var $71=$visit_addr; //@line 2320 "_json.c"
        var $72=$arg_addr; //@line 2320 "_json.c"
        var $73=FUNCTION_TABLE[$71]($70, $72); //@line 2320 "_json.c"
        $vret19=$73; //@line 2320 "_json.c"
        var $74=$vret19; //@line 2320 "_json.c"
        var $75=($74)!=0; //@line 2320 "_json.c"
        if ($75) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2320 "_json.c"
      case 17: // $bb20
        var $76=$vret19; //@line 2320 "_json.c"
        $0=$76; //@line 2320 "_json.c"
        __label__ = 28; break; //@line 2320 "_json.c"
      case 18: // $bb21
        var $77=$s; //@line 2321 "_json.c"
        var $78=$77+28; //@line 2321 "_json.c"
        var $79=HEAP[$78]; //@line 2321 "_json.c"
        var $80=($79)!=0; //@line 2321 "_json.c"
        if ($80) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 2321 "_json.c"
      case 19: // $bb22
        var $81=$s; //@line 2321 "_json.c"
        var $82=$81+28; //@line 2321 "_json.c"
        var $83=HEAP[$82]; //@line 2321 "_json.c"
        var $84=$visit_addr; //@line 2321 "_json.c"
        var $85=$arg_addr; //@line 2321 "_json.c"
        var $86=FUNCTION_TABLE[$84]($83, $85); //@line 2321 "_json.c"
        $vret23=$86; //@line 2321 "_json.c"
        var $87=$vret23; //@line 2321 "_json.c"
        var $88=($87)!=0; //@line 2321 "_json.c"
        if ($88) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2321 "_json.c"
      case 20: // $bb24
        var $89=$vret23; //@line 2321 "_json.c"
        $0=$89; //@line 2321 "_json.c"
        __label__ = 28; break; //@line 2321 "_json.c"
      case 21: // $bb25
        var $90=$s; //@line 2322 "_json.c"
        var $91=$90+32; //@line 2322 "_json.c"
        var $92=HEAP[$91]; //@line 2322 "_json.c"
        var $93=($92)!=0; //@line 2322 "_json.c"
        if ($93) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 2322 "_json.c"
      case 22: // $bb26
        var $94=$s; //@line 2322 "_json.c"
        var $95=$94+32; //@line 2322 "_json.c"
        var $96=HEAP[$95]; //@line 2322 "_json.c"
        var $97=$visit_addr; //@line 2322 "_json.c"
        var $98=$arg_addr; //@line 2322 "_json.c"
        var $99=FUNCTION_TABLE[$97]($96, $98); //@line 2322 "_json.c"
        $vret27=$99; //@line 2322 "_json.c"
        var $100=$vret27; //@line 2322 "_json.c"
        var $101=($100)!=0; //@line 2322 "_json.c"
        if ($101) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2322 "_json.c"
      case 23: // $bb28
        var $102=$vret27; //@line 2322 "_json.c"
        $0=$102; //@line 2322 "_json.c"
        __label__ = 28; break; //@line 2322 "_json.c"
      case 24: // $bb29
        var $103=$s; //@line 2323 "_json.c"
        var $104=$103+36; //@line 2323 "_json.c"
        var $105=HEAP[$104]; //@line 2323 "_json.c"
        var $106=($105)!=0; //@line 2323 "_json.c"
        if ($106) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 2323 "_json.c"
      case 25: // $bb30
        var $107=$s; //@line 2323 "_json.c"
        var $108=$107+36; //@line 2323 "_json.c"
        var $109=HEAP[$108]; //@line 2323 "_json.c"
        var $110=$visit_addr; //@line 2323 "_json.c"
        var $111=$arg_addr; //@line 2323 "_json.c"
        var $112=FUNCTION_TABLE[$110]($109, $111); //@line 2323 "_json.c"
        $vret31=$112; //@line 2323 "_json.c"
        var $113=$vret31; //@line 2323 "_json.c"
        var $114=($113)!=0; //@line 2323 "_json.c"
        if ($114) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2323 "_json.c"
      case 26: // $bb32
        var $115=$vret31; //@line 2323 "_json.c"
        $0=$115; //@line 2323 "_json.c"
        __label__ = 28; break; //@line 2323 "_json.c"
      case 27: // $bb33
        $0=0; //@line 2324 "_json.c"
        __label__ = 28; break; //@line 2324 "_json.c"
      case 28: // $bb34
        var $116=$0; //@line 2316 "_json.c"
        $retval=$116; //@line 2316 "_json.c"
        var $retval35=$retval; //@line 2316 "_json.c"
        ;
        return $retval35; //@line 2316 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _encoder_clear($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        var $s;
        var $_py_tmp;
        var $_py_tmp7;
        var $_py_tmp11;
        var $_py_tmp15;
        var $_py_tmp19;
        var $_py_tmp23;
        var $_py_tmp27;
        var $_py_tmp31;
        $self_addr=$self;
        var $1=$self_addr; //@line 2332 "_json.c"
        var $2=$1+4; //@line 2332 "_json.c"
        var $3=HEAP[$2]; //@line 2332 "_json.c"
        var $4=($3)!=(_PyEncoderType); //@line 2332 "_json.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2332 "_json.c"
      case 1: // $bb
        var $5=$self_addr; //@line 2332 "_json.c"
        var $6=$5+4; //@line 2332 "_json.c"
        var $7=HEAP[$6]; //@line 2332 "_json.c"
        var $8=_PyType_IsSubtype($7, _PyEncoderType); //@line 2332 "_json.c"
        var $9=($8)==0; //@line 2332 "_json.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2332 "_json.c"
      case 2: // $bb1
        ___assert_fail(__str47, __str29, 2332, ___PRETTY_FUNCTION___11816); //@line 2332 "_json.c"
        throw "Reached an unreachable!" //@line 2332 "_json.c"
      case 3: // $bb2
        var $10=$self_addr; //@line 2333 "_json.c"
        var $11=$10; //@line 2333 "_json.c"
        $s=$11; //@line 2333 "_json.c"
        var $12=$s; //@line 2334 "_json.c"
        var $13=$12+8; //@line 2334 "_json.c"
        var $14=HEAP[$13]; //@line 2334 "_json.c"
        var $15=($14)!=0; //@line 2334 "_json.c"
        if ($15) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 2334 "_json.c"
      case 4: // $bb3
        var $16=$s; //@line 2334 "_json.c"
        var $17=$16+8; //@line 2334 "_json.c"
        var $18=HEAP[$17]; //@line 2334 "_json.c"
        $_py_tmp=$18; //@line 2334 "_json.c"
        var $19=$s; //@line 2334 "_json.c"
        var $20=$19+8; //@line 2334 "_json.c"
        HEAP[$20]=0; //@line 2334 "_json.c"
        var $21=$_py_tmp; //@line 2334 "_json.c"
        var $22=$21; //@line 2334 "_json.c"
        var $23=HEAP[$22]; //@line 2334 "_json.c"
        var $24=($23) - 1; //@line 2334 "_json.c"
        var $25=$_py_tmp; //@line 2334 "_json.c"
        var $26=$25; //@line 2334 "_json.c"
        HEAP[$26]=$24; //@line 2334 "_json.c"
        var $27=$_py_tmp; //@line 2334 "_json.c"
        var $28=$27; //@line 2334 "_json.c"
        var $29=HEAP[$28]; //@line 2334 "_json.c"
        var $30=($29)==0; //@line 2334 "_json.c"
        if ($30) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2334 "_json.c"
      case 5: // $bb4
        var $31=$_py_tmp; //@line 2334 "_json.c"
        var $32=$31+4; //@line 2334 "_json.c"
        var $33=HEAP[$32]; //@line 2334 "_json.c"
        var $34=$33+24; //@line 2334 "_json.c"
        var $35=HEAP[$34]; //@line 2334 "_json.c"
        var $36=$_py_tmp; //@line 2334 "_json.c"
        FUNCTION_TABLE[$35]($36); //@line 2334 "_json.c"
        __label__ = 6; break; //@line 2334 "_json.c"
      case 6: // $bb5
        var $37=$s; //@line 2335 "_json.c"
        var $38=$37+12; //@line 2335 "_json.c"
        var $39=HEAP[$38]; //@line 2335 "_json.c"
        var $40=($39)!=0; //@line 2335 "_json.c"
        if ($40) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 2335 "_json.c"
      case 7: // $bb6
        var $41=$s; //@line 2335 "_json.c"
        var $42=$41+12; //@line 2335 "_json.c"
        var $43=HEAP[$42]; //@line 2335 "_json.c"
        $_py_tmp7=$43; //@line 2335 "_json.c"
        var $44=$s; //@line 2335 "_json.c"
        var $45=$44+12; //@line 2335 "_json.c"
        HEAP[$45]=0; //@line 2335 "_json.c"
        var $46=$_py_tmp7; //@line 2335 "_json.c"
        var $47=$46; //@line 2335 "_json.c"
        var $48=HEAP[$47]; //@line 2335 "_json.c"
        var $49=($48) - 1; //@line 2335 "_json.c"
        var $50=$_py_tmp7; //@line 2335 "_json.c"
        var $51=$50; //@line 2335 "_json.c"
        HEAP[$51]=$49; //@line 2335 "_json.c"
        var $52=$_py_tmp7; //@line 2335 "_json.c"
        var $53=$52; //@line 2335 "_json.c"
        var $54=HEAP[$53]; //@line 2335 "_json.c"
        var $55=($54)==0; //@line 2335 "_json.c"
        if ($55) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2335 "_json.c"
      case 8: // $bb8
        var $56=$_py_tmp7; //@line 2335 "_json.c"
        var $57=$56+4; //@line 2335 "_json.c"
        var $58=HEAP[$57]; //@line 2335 "_json.c"
        var $59=$58+24; //@line 2335 "_json.c"
        var $60=HEAP[$59]; //@line 2335 "_json.c"
        var $61=$_py_tmp7; //@line 2335 "_json.c"
        FUNCTION_TABLE[$60]($61); //@line 2335 "_json.c"
        __label__ = 9; break; //@line 2335 "_json.c"
      case 9: // $bb9
        var $62=$s; //@line 2336 "_json.c"
        var $63=$62+16; //@line 2336 "_json.c"
        var $64=HEAP[$63]; //@line 2336 "_json.c"
        var $65=($64)!=0; //@line 2336 "_json.c"
        if ($65) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 2336 "_json.c"
      case 10: // $bb10
        var $66=$s; //@line 2336 "_json.c"
        var $67=$66+16; //@line 2336 "_json.c"
        var $68=HEAP[$67]; //@line 2336 "_json.c"
        $_py_tmp11=$68; //@line 2336 "_json.c"
        var $69=$s; //@line 2336 "_json.c"
        var $70=$69+16; //@line 2336 "_json.c"
        HEAP[$70]=0; //@line 2336 "_json.c"
        var $71=$_py_tmp11; //@line 2336 "_json.c"
        var $72=$71; //@line 2336 "_json.c"
        var $73=HEAP[$72]; //@line 2336 "_json.c"
        var $74=($73) - 1; //@line 2336 "_json.c"
        var $75=$_py_tmp11; //@line 2336 "_json.c"
        var $76=$75; //@line 2336 "_json.c"
        HEAP[$76]=$74; //@line 2336 "_json.c"
        var $77=$_py_tmp11; //@line 2336 "_json.c"
        var $78=$77; //@line 2336 "_json.c"
        var $79=HEAP[$78]; //@line 2336 "_json.c"
        var $80=($79)==0; //@line 2336 "_json.c"
        if ($80) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2336 "_json.c"
      case 11: // $bb12
        var $81=$_py_tmp11; //@line 2336 "_json.c"
        var $82=$81+4; //@line 2336 "_json.c"
        var $83=HEAP[$82]; //@line 2336 "_json.c"
        var $84=$83+24; //@line 2336 "_json.c"
        var $85=HEAP[$84]; //@line 2336 "_json.c"
        var $86=$_py_tmp11; //@line 2336 "_json.c"
        FUNCTION_TABLE[$85]($86); //@line 2336 "_json.c"
        __label__ = 12; break; //@line 2336 "_json.c"
      case 12: // $bb13
        var $87=$s; //@line 2337 "_json.c"
        var $88=$87+20; //@line 2337 "_json.c"
        var $89=HEAP[$88]; //@line 2337 "_json.c"
        var $90=($89)!=0; //@line 2337 "_json.c"
        if ($90) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 2337 "_json.c"
      case 13: // $bb14
        var $91=$s; //@line 2337 "_json.c"
        var $92=$91+20; //@line 2337 "_json.c"
        var $93=HEAP[$92]; //@line 2337 "_json.c"
        $_py_tmp15=$93; //@line 2337 "_json.c"
        var $94=$s; //@line 2337 "_json.c"
        var $95=$94+20; //@line 2337 "_json.c"
        HEAP[$95]=0; //@line 2337 "_json.c"
        var $96=$_py_tmp15; //@line 2337 "_json.c"
        var $97=$96; //@line 2337 "_json.c"
        var $98=HEAP[$97]; //@line 2337 "_json.c"
        var $99=($98) - 1; //@line 2337 "_json.c"
        var $100=$_py_tmp15; //@line 2337 "_json.c"
        var $101=$100; //@line 2337 "_json.c"
        HEAP[$101]=$99; //@line 2337 "_json.c"
        var $102=$_py_tmp15; //@line 2337 "_json.c"
        var $103=$102; //@line 2337 "_json.c"
        var $104=HEAP[$103]; //@line 2337 "_json.c"
        var $105=($104)==0; //@line 2337 "_json.c"
        if ($105) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 2337 "_json.c"
      case 14: // $bb16
        var $106=$_py_tmp15; //@line 2337 "_json.c"
        var $107=$106+4; //@line 2337 "_json.c"
        var $108=HEAP[$107]; //@line 2337 "_json.c"
        var $109=$108+24; //@line 2337 "_json.c"
        var $110=HEAP[$109]; //@line 2337 "_json.c"
        var $111=$_py_tmp15; //@line 2337 "_json.c"
        FUNCTION_TABLE[$110]($111); //@line 2337 "_json.c"
        __label__ = 15; break; //@line 2337 "_json.c"
      case 15: // $bb17
        var $112=$s; //@line 2338 "_json.c"
        var $113=$112+24; //@line 2338 "_json.c"
        var $114=HEAP[$113]; //@line 2338 "_json.c"
        var $115=($114)!=0; //@line 2338 "_json.c"
        if ($115) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 2338 "_json.c"
      case 16: // $bb18
        var $116=$s; //@line 2338 "_json.c"
        var $117=$116+24; //@line 2338 "_json.c"
        var $118=HEAP[$117]; //@line 2338 "_json.c"
        $_py_tmp19=$118; //@line 2338 "_json.c"
        var $119=$s; //@line 2338 "_json.c"
        var $120=$119+24; //@line 2338 "_json.c"
        HEAP[$120]=0; //@line 2338 "_json.c"
        var $121=$_py_tmp19; //@line 2338 "_json.c"
        var $122=$121; //@line 2338 "_json.c"
        var $123=HEAP[$122]; //@line 2338 "_json.c"
        var $124=($123) - 1; //@line 2338 "_json.c"
        var $125=$_py_tmp19; //@line 2338 "_json.c"
        var $126=$125; //@line 2338 "_json.c"
        HEAP[$126]=$124; //@line 2338 "_json.c"
        var $127=$_py_tmp19; //@line 2338 "_json.c"
        var $128=$127; //@line 2338 "_json.c"
        var $129=HEAP[$128]; //@line 2338 "_json.c"
        var $130=($129)==0; //@line 2338 "_json.c"
        if ($130) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 2338 "_json.c"
      case 17: // $bb20
        var $131=$_py_tmp19; //@line 2338 "_json.c"
        var $132=$131+4; //@line 2338 "_json.c"
        var $133=HEAP[$132]; //@line 2338 "_json.c"
        var $134=$133+24; //@line 2338 "_json.c"
        var $135=HEAP[$134]; //@line 2338 "_json.c"
        var $136=$_py_tmp19; //@line 2338 "_json.c"
        FUNCTION_TABLE[$135]($136); //@line 2338 "_json.c"
        __label__ = 18; break; //@line 2338 "_json.c"
      case 18: // $bb21
        var $137=$s; //@line 2339 "_json.c"
        var $138=$137+28; //@line 2339 "_json.c"
        var $139=HEAP[$138]; //@line 2339 "_json.c"
        var $140=($139)!=0; //@line 2339 "_json.c"
        if ($140) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 2339 "_json.c"
      case 19: // $bb22
        var $141=$s; //@line 2339 "_json.c"
        var $142=$141+28; //@line 2339 "_json.c"
        var $143=HEAP[$142]; //@line 2339 "_json.c"
        $_py_tmp23=$143; //@line 2339 "_json.c"
        var $144=$s; //@line 2339 "_json.c"
        var $145=$144+28; //@line 2339 "_json.c"
        HEAP[$145]=0; //@line 2339 "_json.c"
        var $146=$_py_tmp23; //@line 2339 "_json.c"
        var $147=$146; //@line 2339 "_json.c"
        var $148=HEAP[$147]; //@line 2339 "_json.c"
        var $149=($148) - 1; //@line 2339 "_json.c"
        var $150=$_py_tmp23; //@line 2339 "_json.c"
        var $151=$150; //@line 2339 "_json.c"
        HEAP[$151]=$149; //@line 2339 "_json.c"
        var $152=$_py_tmp23; //@line 2339 "_json.c"
        var $153=$152; //@line 2339 "_json.c"
        var $154=HEAP[$153]; //@line 2339 "_json.c"
        var $155=($154)==0; //@line 2339 "_json.c"
        if ($155) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 2339 "_json.c"
      case 20: // $bb24
        var $156=$_py_tmp23; //@line 2339 "_json.c"
        var $157=$156+4; //@line 2339 "_json.c"
        var $158=HEAP[$157]; //@line 2339 "_json.c"
        var $159=$158+24; //@line 2339 "_json.c"
        var $160=HEAP[$159]; //@line 2339 "_json.c"
        var $161=$_py_tmp23; //@line 2339 "_json.c"
        FUNCTION_TABLE[$160]($161); //@line 2339 "_json.c"
        __label__ = 21; break; //@line 2339 "_json.c"
      case 21: // $bb25
        var $162=$s; //@line 2340 "_json.c"
        var $163=$162+32; //@line 2340 "_json.c"
        var $164=HEAP[$163]; //@line 2340 "_json.c"
        var $165=($164)!=0; //@line 2340 "_json.c"
        if ($165) { __label__ = 22; break; } else { __label__ = 24; break; } //@line 2340 "_json.c"
      case 22: // $bb26
        var $166=$s; //@line 2340 "_json.c"
        var $167=$166+32; //@line 2340 "_json.c"
        var $168=HEAP[$167]; //@line 2340 "_json.c"
        $_py_tmp27=$168; //@line 2340 "_json.c"
        var $169=$s; //@line 2340 "_json.c"
        var $170=$169+32; //@line 2340 "_json.c"
        HEAP[$170]=0; //@line 2340 "_json.c"
        var $171=$_py_tmp27; //@line 2340 "_json.c"
        var $172=$171; //@line 2340 "_json.c"
        var $173=HEAP[$172]; //@line 2340 "_json.c"
        var $174=($173) - 1; //@line 2340 "_json.c"
        var $175=$_py_tmp27; //@line 2340 "_json.c"
        var $176=$175; //@line 2340 "_json.c"
        HEAP[$176]=$174; //@line 2340 "_json.c"
        var $177=$_py_tmp27; //@line 2340 "_json.c"
        var $178=$177; //@line 2340 "_json.c"
        var $179=HEAP[$178]; //@line 2340 "_json.c"
        var $180=($179)==0; //@line 2340 "_json.c"
        if ($180) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 2340 "_json.c"
      case 23: // $bb28
        var $181=$_py_tmp27; //@line 2340 "_json.c"
        var $182=$181+4; //@line 2340 "_json.c"
        var $183=HEAP[$182]; //@line 2340 "_json.c"
        var $184=$183+24; //@line 2340 "_json.c"
        var $185=HEAP[$184]; //@line 2340 "_json.c"
        var $186=$_py_tmp27; //@line 2340 "_json.c"
        FUNCTION_TABLE[$185]($186); //@line 2340 "_json.c"
        __label__ = 24; break; //@line 2340 "_json.c"
      case 24: // $bb29
        var $187=$s; //@line 2341 "_json.c"
        var $188=$187+36; //@line 2341 "_json.c"
        var $189=HEAP[$188]; //@line 2341 "_json.c"
        var $190=($189)!=0; //@line 2341 "_json.c"
        if ($190) { __label__ = 25; break; } else { __label__ = 27; break; } //@line 2341 "_json.c"
      case 25: // $bb30
        var $191=$s; //@line 2341 "_json.c"
        var $192=$191+36; //@line 2341 "_json.c"
        var $193=HEAP[$192]; //@line 2341 "_json.c"
        $_py_tmp31=$193; //@line 2341 "_json.c"
        var $194=$s; //@line 2341 "_json.c"
        var $195=$194+36; //@line 2341 "_json.c"
        HEAP[$195]=0; //@line 2341 "_json.c"
        var $196=$_py_tmp31; //@line 2341 "_json.c"
        var $197=$196; //@line 2341 "_json.c"
        var $198=HEAP[$197]; //@line 2341 "_json.c"
        var $199=($198) - 1; //@line 2341 "_json.c"
        var $200=$_py_tmp31; //@line 2341 "_json.c"
        var $201=$200; //@line 2341 "_json.c"
        HEAP[$201]=$199; //@line 2341 "_json.c"
        var $202=$_py_tmp31; //@line 2341 "_json.c"
        var $203=$202; //@line 2341 "_json.c"
        var $204=HEAP[$203]; //@line 2341 "_json.c"
        var $205=($204)==0; //@line 2341 "_json.c"
        if ($205) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 2341 "_json.c"
      case 26: // $bb32
        var $206=$_py_tmp31; //@line 2341 "_json.c"
        var $207=$206+4; //@line 2341 "_json.c"
        var $208=HEAP[$207]; //@line 2341 "_json.c"
        var $209=$208+24; //@line 2341 "_json.c"
        var $210=HEAP[$209]; //@line 2341 "_json.c"
        var $211=$_py_tmp31; //@line 2341 "_json.c"
        FUNCTION_TABLE[$210]($211); //@line 2341 "_json.c"
        __label__ = 27; break; //@line 2341 "_json.c"
      case 27: // $bb33
        $0=0; //@line 2342 "_json.c"
        var $212=$0; //@line 2342 "_json.c"
        $retval=$212; //@line 2342 "_json.c"
        var $retval34=$retval; //@line 2342 "_json.c"
        ;
        return $retval34; //@line 2342 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_json() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        HEAP[_PyScannerType+156]=(FUNCTION_TABLE_OFFSET + 8); //@line 2410 "_json.c"
        var $0=_PyType_Ready(_PyScannerType); //@line 2411 "_json.c"
        var $1=($0) < 0; //@line 2411 "_json.c"
        if ($1) { __label__ = 3; break; } else { __label__ = 1; break; } //@line 2411 "_json.c"
      case 1: // $bb
        HEAP[_PyEncoderType+156]=(FUNCTION_TABLE_OFFSET + 8); //@line 2413 "_json.c"
        var $2=_PyType_Ready(_PyEncoderType); //@line 2414 "_json.c"
        var $3=($2) < 0; //@line 2414 "_json.c"
        if ($3) { __label__ = 3; break; } else { __label__ = 2; break; } //@line 2414 "_json.c"
      case 2: // $bb1
        var $4=_Py_InitModule4(__str71, _speedups_methods, _module_doc, 0, 1013); //@line 2416 "_json.c"
        $m=$4; //@line 2416 "_json.c"
        var $5=HEAP[_PyScannerType]; //@line 2417 "_json.c"
        var $6=($5) + 1; //@line 2417 "_json.c"
        HEAP[_PyScannerType]=$6; //@line 2417 "_json.c"
        var $7=$m; //@line 2418 "_json.c"
        var $8=_PyModule_AddObject($7, __str72, _PyScannerType); //@line 2418 "_json.c"
        var $9=HEAP[_PyEncoderType]; //@line 2419 "_json.c"
        var $10=($9) + 1; //@line 2419 "_json.c"
        HEAP[_PyEncoderType]=$10; //@line 2419 "_json.c"
        var $11=$m; //@line 2420 "_json.c"
        var $12=_PyModule_AddObject($11, __str73, _PyEncoderType); //@line 2420 "_json.c"
        __label__ = 3; break; //@line 2420 "_json.c"
      case 3: // $return
        ;
        return; //@line 2412 "_json.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_json"] = _init_json;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,__convertPyInt_FromSsize_t,0,__convertPyInt_AsSsize_t,0,_py_encode_basestring_ascii,0,_PyType_GenericNew,0,_scanner_dealloc,0,_scanner_call,0,_scanner_traverse,0,_scanner_clear,0,_scanner_init,0,_scanner_new,0,_encoder_dealloc,0,_encoder_call,0,_encoder_traverse,0,_encoder_clear,0,_encoder_init,0,_encoder_new,0,_py_scanstring,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([101,110,99,111,100,105,110,103,0] /* encoding\00 */, "i8", ALLOC_NORMAL);
__str1=allocate([115,116,114,105,99,116,0] /* strict\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([111,98,106,101,99,116,95,104,111,111,107,0] /* object_hook\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([111,98,106,101,99,116,95,112,97,105,114,115,95,104,111,111,107,0] /* object_pairs_hook\00 */, "i8", ALLOC_NORMAL);
__str4=allocate([112,97,114,115,101,95,102,108,111,97,116,0] /* parse_float\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([112,97,114,115,101,95,105,110,116,0] /* parse_int\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([112,97,114,115,101,95,99,111,110,115,116,97,110,116,0] /* parse_constant\00 */, "i8", ALLOC_NORMAL);
_scanner_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 24, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str7=allocate([109,97,114,107,101,114,115,0] /* markers\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([100,101,102,97,117,108,116,0] /* default\00 */, "i8", ALLOC_NORMAL);
__str9=allocate([101,110,99,111,100,101,114,0] /* encoder\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([105,110,100,101,110,116,0] /* indent\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([107,101,121,95,115,101,112,97,114,97,116,111,114,0] /* key_separator\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([105,116,101,109,95,115,101,112,97,114,97,116,111,114,0] /* item_separator\00 */, "i8", ALLOC_NORMAL);
__str13=allocate([115,111,114,116,95,107,101,121,115,0] /* sort_keys\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([115,107,105,112,107,101,121,115,0] /* skipkeys\00 */, "i8", ALLOC_NORMAL);
_encoder_members=allocate([0, 0, 0, 0, 6, 0, 0, 0, 8, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 24, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 32, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 36, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str15=allocate([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,0] /* 0123456789abcdef\00 */, "i8", ALLOC_NORMAL);
_errmsg_fn_8641=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str16=allocate([106,115,111,110,46,100,101,99,111,100,101,114,0] /* json.decoder\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([101,114,114,109,115,103,0] /* errmsg\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([40,122,79,79,38,41,0] /* (zOO&)\00 */, "i8", ALLOC_NORMAL);
_joinfn_8675=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str19=allocate([106,111,105,110,0] /* join\00 */, "i8", ALLOC_NORMAL);
__str20=allocate([101,110,100,32,105,115,32,111,117,116,32,111,102,32,98,111,117,110,100,115,0] /* end is out of bounds */, "i8", ALLOC_NORMAL);
__str21=allocate([73,110,118,97,108,105,100,32,99,111,110,116,114,111,108,32,99,104,97,114,97,99,116,101,114,32,97,116,0] /* Invalid control char */, "i8", ALLOC_NORMAL);
__str22=allocate([85,110,116,101,114,109,105,110,97,116,101,100,32,115,116,114,105,110,103,32,115,116,97,114,116,105,110,103,32,97,116,0] /* Unterminated string  */, "i8", ALLOC_NORMAL);
__str23=allocate([73,110,118,97,108,105,100,32,92,101,115,99,97,112,101,0] /* Invalid \5Cescape\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([73,110,118,97,108,105,100,32,92,117,88,88,88,88,32,101,115,99,97,112,101,0] /* Invalid \5CuXXXX esc */, "i8", ALLOC_NORMAL);
_pydoc_scanstring=allocate([115,99,97,110,115,116,114,105,110,103,40,98,97,115,101,115,116,114,105,110,103,44,32,101,110,100,44,32,101,110,99,111,100,105,110,103,44,32,115,116,114,105,99,116,61,84,114,117,101,41,32,45,62,32,40,115,116,114,44,32,101,110,100,41,10,10,83,99,97,110,32,116,104,101,32,115,116,114,105,110,103,32,115,32,102,111,114,32,97,32,74,83,79,78,32,115,116,114,105,110,103,46,32,69,110,100,32,105,115,32,116,104,101,32,105,110,100,101,120,32,111,102,32,116,104,101,10,99,104,97,114,97,99,116,101,114,32,105,110,32,115,32,97,102,116,101,114,32,116,104,101,32,113,117,111,116,101,32,116,104,97,116,32,115,116,97,114,116,101,100,32,116,104,101,32,74,83,79,78,32,115,116,114,105,110,103,46,10,85,110,101,115,99,97,112,101,115,32,97,108,108,32,118,97,108,105,100,32,74,83,79,78,32,115,116,114,105,110,103,32,101,115,99,97,112,101,32,115,101,113,117,101,110,99,101,115,32,97,110,100,32,114,97,105,115,101,115,32,86,97,108,117,101,69,114,114,111,114,10,111,110,32,97,116,116,101,109,112,116,32,116,111,32,100,101,99,111,100,101,32,97,110,32,105,110,118,97,108,105,100,32,115,116,114,105,110,103,46,32,73,102,32,115,116,114,105,99,116,32,105,115,32,70,97,108,115,101,32,116,104,101,110,32,108,105,116,101,114,97,108,10,99,111,110,116,114,111,108,32,99,104,97,114,97,99,116,101,114,115,32,97,114,101,32,97,108,108,111,119,101,100,32,105,110,32,116,104,101,32,115,116,114,105,110,103,46,10,10,82,101,116,117,114,110,115,32,97,32,116,117,112,108,101,32,111,102,32,116,104,101,32,100,101,99,111,100,101,100,32,115,116,114,105,110,103,32,97,110,100,32,116,104,101,32,105,110,100,101,120,32,111,102,32,116,104,101,32,99,104,97,114,97,99,116,101,114,32,105,110,32,115,10,97,102,116,101,114,32,116,104,101,32,101,110,100,32,113,117,111,116,101,46,0] /* scanstring(basestrin */, "i8", ALLOC_NORMAL);
__str25=allocate([79,79,38,124,122,105,58,115,99,97,110,115,116,114,105,110,103,0] /* OO&|zi:scanstring\00 */, "i8", ALLOC_NORMAL);
__str26=allocate([117,116,102,45,56,0] /* utf-8\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([102,105,114,115,116,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,44,32,110,111,116,32,37,46,56,48,115,0] /* first argument must  */, "i8", ALLOC_NORMAL);
_pydoc_encode_basestring_ascii=allocate([101,110,99,111,100,101,95,98,97,115,101,115,116,114,105,110,103,95,97,115,99,105,105,40,98,97,115,101,115,116,114,105,110,103,41,32,45,62,32,115,116,114,10,10,82,101,116,117,114,110,32,97,110,32,65,83,67,73,73,45,111,110,108,121,32,74,83,79,78,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,111,102,32,97,32,80,121,116,104,111,110,32,115,116,114,105,110,103,0] /* encode_basestring_as */, "i8", ALLOC_NORMAL);
__str28=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,80,121,83,99,97,110,110,101,114,84,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,80,121,83,99,97,110,110,101,114,84,121,112,101,41,41,41,0] /* ((((PyObject_)(self) */, "i8", ALLOC_NORMAL);
__str29=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,106,115,111,110,46,99,0] /* ../cpython/Modules/_ */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9208=allocate([115,99,97,110,110,101,114,95,116,114,97,118,101,114,115,101,0] /* scanner_traverse\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9278=allocate([115,99,97,110,110,101,114,95,99,108,101,97,114,0] /* scanner_clear\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([69,120,112,101,99,116,105,110,103,32,112,114,111,112,101,114,116,121,32,110,97,109,101,0] /* Expecting property n */, "i8", ALLOC_NORMAL);
__str31=allocate([69,120,112,101,99,116,105,110,103,32,58,32,100,101,108,105,109,105,116,101,114,0] /* Expecting : delimite */, "i8", ALLOC_NORMAL);
__str32=allocate([69,120,112,101,99,116,105,110,103,32,44,32,100,101,108,105,109,105,116,101,114,0] /* Expecting , delimite */, "i8", ALLOC_NORMAL);
__str33=allocate([69,120,112,101,99,116,105,110,103,32,111,98,106,101,99,116,0] /* Expecting object\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,98,121,116,101,32,115,116,114,105,110,103,0] /*  while decoding a JS */, "i8", ALLOC_NORMAL);
__str35=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,97,114,114,97,121,32,102,114,111,109,32,97,32,98,121,116,101,32,115,116,114,105,110,103,0] /*  while decoding a JS */, "i8", ALLOC_NORMAL);
__str36=allocate([78,97,78,0] /* NaN\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([73,110,102,105,110,105,116,121,0] /* Infinity\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([45,73,110,102,105,110,105,116,121,0] /* -Infinity\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,0] /*  while decoding a JS */, "i8", ALLOC_NORMAL);
__str40=allocate([32,119,104,105,108,101,32,100,101,99,111,100,105,110,103,32,97,32,74,83,79,78,32,97,114,114,97,121,32,102,114,111,109,32,97,32,117,110,105,99,111,100,101,32,115,116,114,105,110,103,0] /*  while decoding a JS */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10703=allocate([115,99,97,110,110,101,114,95,99,97,108,108,0] /* scanner_call\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([79,79,38,58,115,99,97,110,95,111,110,99,101,0] /* OO&:scan_once\00 */, "i8", ALLOC_NORMAL);
_kwlist_10701=allocate(12, "i8*", ALLOC_NORMAL);
__str42=allocate([115,116,114,105,110,103,0] /* string\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([105,100,120,0] /* idx\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10762=allocate([115,99,97,110,110,101,114,95,105,110,105,116,0] /* scanner_init\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([79,58,109,97,107,101,95,115,99,97,110,110,101,114,0] /* O:make_scanner\00 */, "i8", ALLOC_NORMAL);
_kwlist_10760=allocate(8, "i8*", ALLOC_NORMAL);
__str45=allocate([99,111,110,116,101,120,116,0] /* context\00 */, "i8", ALLOC_NORMAL);
_scanner_doc=allocate([74,83,79,78,32,115,99,97,110,110,101,114,32,111,98,106,101,99,116,0] /* JSON scanner object\ */, "i8", ALLOC_NORMAL);
__str46=allocate([95,106,115,111,110,46,83,99,97,110,110,101,114,0] /* _json.Scanner\00 */, "i8", ALLOC_NORMAL);
_PyScannerType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str47=allocate([40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,111,98,95,116,121,112,101,41,32,61,61,32,40,38,80,121,69,110,99,111,100,101,114,84,121,112,101,41,32,124,124,32,80,121,84,121,112,101,95,73,115,83,117,98,116,121,112,101,40,40,40,40,80,121,79,98,106,101,99,116,42,41,40,115,101,108,102,41,41,45,62,111,98,95,116,121,112,101,41,44,32,40,38,80,121,69,110,99,111,100,101,114,84,121,112,101,41,41,41,0] /* ((((PyObject_)(self) */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10949=allocate([101,110,99,111,100,101,114,95,105,110,105,116,0] /* encoder_init\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([79,79,79,79,79,79,79,79,79,58,109,97,107,101,95,101,110,99,111,100,101,114,0] /* OOOOOOOOO:make_encod */, "i8", ALLOC_NORMAL);
_kwlist_10938=allocate(40, "i8*", ALLOC_NORMAL);
__str49=allocate([97,108,108,111,119,95,110,97,110,0] /* allow_nan\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___11015=allocate([101,110,99,111,100,101,114,95,99,97,108,108,0] /* encoder_call\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([79,79,38,58,95,105,116,101,114,101,110,99,111,100,101,0] /* OO&:_iterencode\00 */, "i8", ALLOC_NORMAL);
_kwlist_11010=allocate(12, "i8*", ALLOC_NORMAL);
__str51=allocate([111,98,106,0] /* obj\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([95,99,117,114,114,101,110,116,95,105,110,100,101,110,116,95,108,101,118,101,108,0] /* _current_indent_leve */, "i8", ALLOC_NORMAL);
_s_null_11046=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str53=allocate([110,117,108,108,0] /* null\00 */, "i8", ALLOC_NORMAL);
_s_true_11047=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str54=allocate([116,114,117,101,0] /* true\00 */, "i8", ALLOC_NORMAL);
_s_false_11048=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str55=allocate([102,97,108,115,101,0] /* false\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([110,111,116,32,97,32,99,111,110,115,116,0] /* not a const\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([79,117,116,32,111,102,32,114,97,110,103,101,32,102,108,111,97,116,32,118,97,108,117,101,115,32,97,114,101,32,110,111,116,32,74,83,79,78,32,99,111,109,112,108,105,97,110,116,0] /* Out of range float v */, "i8", ALLOC_NORMAL);
__str58=allocate([32,119,104,105,108,101,32,101,110,99,111,100,105,110,103,32,97,32,74,83,79,78,32,111,98,106,101,99,116,0] /*  while encoding a JS */, "i8", ALLOC_NORMAL);
__str59=allocate([67,105,114,99,117,108,97,114,32,114,101,102,101,114,101,110,99,101,32,100,101,116,101,99,116,101,100,0] /* Circular reference d */, "i8", ALLOC_NORMAL);
_open_dict_11341=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_close_dict_11342=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_empty_dict_11343=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str60=allocate([123,0] /* {\00 */, "i8", ALLOC_NORMAL);
__str61=allocate([125,0] /* }\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([123,125,0] /* {}\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([107,101,121,115,32,109,117,115,116,32,98,101,32,97,32,115,116,114,105,110,103,0] /* keys must be a strin */, "i8", ALLOC_NORMAL);
_open_array_11600=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_close_array_11601=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_empty_array_11602=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str64=allocate([91,0] /* [\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([93,0] /* ]\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([91,93,0] /* []\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([95,105,116,101,114,101,110,99,111,100,101,95,108,105,115,116,32,110,101,101,100,115,32,97,32,115,101,113,117,101,110,99,101,0] /* _iterencode_list nee */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___11738=allocate([101,110,99,111,100,101,114,95,116,114,97,118,101,114,115,101,0] /* encoder_traverse\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___11816=allocate([101,110,99,111,100,101,114,95,99,108,101,97,114,0] /* encoder_clear\00 */, "i8", ALLOC_NORMAL);
_encoder_doc=allocate([95,105,116,101,114,101,110,99,111,100,101,40,111,98,106,44,32,95,99,117,114,114,101,110,116,95,105,110,100,101,110,116,95,108,101,118,101,108,41,32,45,62,32,105,116,101,114,97,98,108,101,0] /* _iterencode(obj, _cu */, "i8", ALLOC_NORMAL);
__str68=allocate([95,106,115,111,110,46,69,110,99,111,100,101,114,0] /* _json.Encoder\00 */, "i8", ALLOC_NORMAL);
_PyEncoderType=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 147947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_speedups_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0], ALLOC_NORMAL);
__str69=allocate([101,110,99,111,100,101,95,98,97,115,101,115,116,114,105,110,103,95,97,115,99,105,105,0] /* encode_basestring_as */, "i8", ALLOC_NORMAL);
__str70=allocate([115,99,97,110,115,116,114,105,110,103,0] /* scanstring\00 */, "i8", ALLOC_NORMAL);
_module_doc=allocate([106,115,111,110,32,115,112,101,101,100,117,112,115,10,0] /* json speedups\0A\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([95,106,115,111,110,0] /* _json\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([109,97,107,101,95,115,99,97,110,110,101,114,0] /* make_scanner\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([109,97,107,101,95,101,110,99,111,100,101,114,0] /* make_encoder\00 */, "i8", ALLOC_NORMAL);
HEAP[_scanner_members]=__str;
HEAP[_scanner_members+16]=__str;
HEAP[_scanner_members+20]=__str1;
HEAP[_scanner_members+36]=__str1;
HEAP[_scanner_members+40]=__str2;
HEAP[_scanner_members+56]=__str2;
HEAP[_scanner_members+60]=__str3;
HEAP[_scanner_members+76]=__str3;
HEAP[_scanner_members+80]=__str4;
HEAP[_scanner_members+96]=__str4;
HEAP[_scanner_members+100]=__str5;
HEAP[_scanner_members+116]=__str5;
HEAP[_scanner_members+120]=__str6;
HEAP[_scanner_members+136]=__str6;
HEAP[_encoder_members]=__str7;
HEAP[_encoder_members+16]=__str7;
HEAP[_encoder_members+20]=__str8;
HEAP[_encoder_members+36]=__str8;
HEAP[_encoder_members+40]=__str9;
HEAP[_encoder_members+56]=__str9;
HEAP[_encoder_members+60]=__str10;
HEAP[_encoder_members+76]=__str10;
HEAP[_encoder_members+80]=__str11;
HEAP[_encoder_members+96]=__str11;
HEAP[_encoder_members+100]=__str12;
HEAP[_encoder_members+116]=__str12;
HEAP[_encoder_members+120]=__str13;
HEAP[_encoder_members+136]=__str13;
HEAP[_encoder_members+140]=__str14;
HEAP[_encoder_members+156]=__str14;
HEAP[_kwlist_10701]=__str42;
HEAP[_kwlist_10701+4]=__str43;
HEAP[_kwlist_10760]=__str45;
HEAP[_PyScannerType+12]=__str46;
HEAP[_PyScannerType+24]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_PyScannerType+64]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_PyScannerType+88]=_scanner_doc;
HEAP[_PyScannerType+92]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_PyScannerType+96]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_PyScannerType+120]=_scanner_members;
HEAP[_PyScannerType+148]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_PyScannerType+156]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_kwlist_10938]=__str7;
HEAP[_kwlist_10938+4]=__str8;
HEAP[_kwlist_10938+8]=__str9;
HEAP[_kwlist_10938+12]=__str10;
HEAP[_kwlist_10938+16]=__str11;
HEAP[_kwlist_10938+20]=__str12;
HEAP[_kwlist_10938+24]=__str13;
HEAP[_kwlist_10938+28]=__str14;
HEAP[_kwlist_10938+32]=__str49;
HEAP[_kwlist_11010]=__str51;
HEAP[_kwlist_11010+4]=__str52;
HEAP[_PyEncoderType+12]=__str68;
HEAP[_PyEncoderType+24]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_PyEncoderType+64]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_PyEncoderType+88]=_encoder_doc;
HEAP[_PyEncoderType+92]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_PyEncoderType+96]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_PyEncoderType+120]=_encoder_members;
HEAP[_PyEncoderType+148]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_PyEncoderType+156]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_speedups_methods]=__str69;
HEAP[_speedups_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_speedups_methods+12]=_pydoc_encode_basestring_ascii;
HEAP[_speedups_methods+16]=__str70;
HEAP[_speedups_methods+20]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_speedups_methods+28]=_pydoc_scanstring;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

