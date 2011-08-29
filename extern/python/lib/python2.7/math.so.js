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



var $0___SIZE = 656; // %0
  
var $1___SIZE = 16; // %1
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyFloatObject___SIZE = 16; // %struct.PyFloatObject
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyLongObject___SIZE = 0; // %struct.PyLongObject
  var $struct_PyLongObject___FLATTENER = [];
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
var __str1;
var ___PRETTY_FUNCTION___8323;
var __str2;
var __str3;
var _lanczos_num_coeffs;
var _lanczos_den_coeffs;
var _gamma_integral;
var __str4;
var ___PRETTY_FUNCTION___8369;
var __str5;
var ___PRETTY_FUNCTION___8706;

var __str6;

var __str7;
var _math_acos_doc;
var _math_acosh_doc;
var _math_asin_doc;
var _math_asinh_doc;
var _math_atan_doc;
var __str8;
var _math_atan2_doc;
var _math_atanh_doc;
var _math_ceil_doc;
var __str9;
var _math_copysign_doc;
var _math_cos_doc;
var _math_cosh_doc;
var _math_erf_doc;
var _math_erfc_doc;
var _math_exp_doc;
var _math_expm1_doc;
var _math_fabs_doc;
var _math_floor_doc;
var _math_gamma_doc;
var _math_lgamma_doc;
var _math_log1p_doc;
var _math_sin_doc;
var _math_sinh_doc;
var _math_sqrt_doc;
var _math_tan_doc;
var _math_tanh_doc;

var __str10;
var __str11;
var ___PRETTY_FUNCTION___9121;
var __str12;
var __str13;
var __str14;
var __str15;
var _math_fsum_doc;

var __str16;
var __str17;
var _math_factorial_doc;
var __str18;
var _math_trunc_doc;
var __str19;
var _math_frexp_doc;
var __str20;

var __str21;
var _math_ldexp_doc;
var __str22;
var _math_modf_doc;
var __str23;
var _math_log_doc;
var __str24;
var _math_log10_doc;
var __str25;
var _math_fmod_doc;
var __str26;
var _math_hypot_doc;
var __str27;
var _math_pow_doc;
var _math_degrees_doc;
var _math_radians_doc;
var _math_isnan_doc;
var _math_isinf_doc;
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
var _math_methods;
var _module_doc;
var __str61;
var __str62;
var __str63;




































































  function _sinpi($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $y;
        var $r;
        var $n;
        $x_addr=$x;
        var $1=$x_addr; //@line 79 "mathmodule.c"
        var $2=___finite($1); //@line 79 "mathmodule.c"
        var $3=($2)==0; //@line 79 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 79 "mathmodule.c"
      case 1: // $bb
        ___assert_fail(__str, __str1, 79, ___PRETTY_FUNCTION___8323); //@line 79 "mathmodule.c"
        throw "Reached an unreachable!" //@line 79 "mathmodule.c"
      case 2: // $bb1
        var $4=$x_addr; //@line 80 "mathmodule.c"
        var $5=_fabs($4); //@line 80 "mathmodule.c"
        var $6=_fmod($5, 2); //@line 80 "mathmodule.c"
        $y=$6; //@line 80 "mathmodule.c"
        var $7=$y; //@line 81 "mathmodule.c"
        var $8=($7) * 2; //@line 81 "mathmodule.c"
        var $9=_round($8); //@line 81 "mathmodule.c"
        var $10=((($9))|0); //@line 81 "mathmodule.c"
        $n=$10; //@line 81 "mathmodule.c"
        var $11=$n; //@line 82 "mathmodule.c"
        var $12=($11) < 0; //@line 82 "mathmodule.c"
        var $13=$n; //@line 82 "mathmodule.c"
        var $14=($13) > 4; //@line 82 "mathmodule.c"
        var $or_cond=($12) | ($14);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 82 "mathmodule.c"
      case 3: // $bb3
        ___assert_fail(__str2, __str1, 82, ___PRETTY_FUNCTION___8323); //@line 82 "mathmodule.c"
        throw "Reached an unreachable!" //@line 82 "mathmodule.c"
      case 4: // $bb4
        var $15=$n; //@line 83 "mathmodule.c"
        if ($15 == 0) {
          __label__ = 5; break;
        }
        else if ($15 == 1) {
          __label__ = 6; break;
        }
        else if ($15 == 2) {
          __label__ = 7; break;
        }
        else if ($15 == 3) {
          __label__ = 8; break;
        }
        else if ($15 == 4) {
          __label__ = 9; break;
        }
        else {
        __label__ = 10; break;
        }
        
      case 5: // $bb5
        var $16=$y; //@line 85 "mathmodule.c"
        var $17=3.141592653589793 * ($16); //@line 85 "mathmodule.c"
        var $18=_sin($17); //@line 85 "mathmodule.c"
        $r=$18; //@line 85 "mathmodule.c"
        __label__ = 11; break; //@line 85 "mathmodule.c"
      case 6: // $bb6
        var $19=$y; //@line 88 "mathmodule.c"
        var $20=($19) - 0.5; //@line 88 "mathmodule.c"
        var $21=($20) * 3.141592653589793; //@line 88 "mathmodule.c"
        var $22=_cos($21); //@line 88 "mathmodule.c"
        $r=$22; //@line 88 "mathmodule.c"
        __label__ = 11; break; //@line 88 "mathmodule.c"
      case 7: // $bb7
        var $23=$y; //@line 93 "mathmodule.c"
        var $24=1 - ($23); //@line 93 "mathmodule.c"
        var $25=($24) * 3.141592653589793; //@line 93 "mathmodule.c"
        var $26=_sin($25); //@line 93 "mathmodule.c"
        $r=$26; //@line 93 "mathmodule.c"
        __label__ = 11; break; //@line 93 "mathmodule.c"
      case 8: // $bb8
        var $27=$y; //@line 96 "mathmodule.c"
        var $28=($27) - 1.5; //@line 96 "mathmodule.c"
        var $29=($28) * 3.141592653589793; //@line 96 "mathmodule.c"
        var $30=_cos($29); //@line 96 "mathmodule.c"
        var $31=0 - ($30); //@line 96 "mathmodule.c"
        $r=$31; //@line 96 "mathmodule.c"
        __label__ = 11; break; //@line 96 "mathmodule.c"
      case 9: // $bb9
        var $32=$y; //@line 99 "mathmodule.c"
        var $33=($32) - 2; //@line 99 "mathmodule.c"
        var $34=($33) * 3.141592653589793; //@line 99 "mathmodule.c"
        var $35=_sin($34); //@line 99 "mathmodule.c"
        $r=$35; //@line 99 "mathmodule.c"
        __label__ = 11; break; //@line 99 "mathmodule.c"
      case 10: // $bb10
        ___assert_fail(__str3, __str1, 102, ___PRETTY_FUNCTION___8323); //@line 102 "mathmodule.c"
        throw "Reached an unreachable!" //@line 102 "mathmodule.c"
      case 11: // $bb11
        var $36=$x_addr; //@line 105 "mathmodule.c"
        var $37=_copysign(1, $36); //@line 105 "mathmodule.c"
        var $38=$r; //@line 105 "mathmodule.c"
        var $39=($37) * ($38); //@line 105 "mathmodule.c"
        $0=$39; //@line 105 "mathmodule.c"
        var $40=$0; //@line 105 "mathmodule.c"
        $retval=$40; //@line 105 "mathmodule.c"
        var $retval12=$retval; //@line 105 "mathmodule.c"
        ;
        return $retval12; //@line 105 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _lanczos_sum($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $num;
        var $den;
        var $i;
        $x_addr=$x;
        $num=0; //@line 204 "mathmodule.c"
        $den=0; //@line 204 "mathmodule.c"
        var $1=$x_addr; //@line 206 "mathmodule.c"
        var $2=($1) <= 0; //@line 206 "mathmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 206 "mathmodule.c"
      case 1: // $bb
        ___assert_fail(__str4, __str1, 206, ___PRETTY_FUNCTION___8369); //@line 206 "mathmodule.c"
        throw "Reached an unreachable!" //@line 206 "mathmodule.c"
      case 2: // $bb1
        var $3=$x_addr; //@line 215 "mathmodule.c"
        var $4=($3) < 5; //@line 215 "mathmodule.c"
        if ($4) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 215 "mathmodule.c"
      case 3: // $bb2
        $i=13; //@line 216 "mathmodule.c"
        var $5=$i; //@line 216 "mathmodule.c"
        var $6=($5) - 1; //@line 216 "mathmodule.c"
        $i=$6; //@line 216 "mathmodule.c"
        var $7=($6) >= 0; //@line 216 "mathmodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 216 "mathmodule.c"
      case 4: // $bb3
        var $8=$num; //@line 217 "mathmodule.c"
        var $9=$x_addr; //@line 217 "mathmodule.c"
        var $10=($8) * ($9); //@line 217 "mathmodule.c"
        var $11=$i; //@line 217 "mathmodule.c"
        var $12=_lanczos_num_coeffs+$11*8; //@line 217 "mathmodule.c"
        var $13=HEAP[$12]; //@line 217 "mathmodule.c"
        var $14=($10) + ($13); //@line 217 "mathmodule.c"
        $num=$14; //@line 217 "mathmodule.c"
        var $15=$den; //@line 218 "mathmodule.c"
        var $16=$x_addr; //@line 218 "mathmodule.c"
        var $17=($15) * ($16); //@line 218 "mathmodule.c"
        var $18=$i; //@line 218 "mathmodule.c"
        var $19=_lanczos_den_coeffs+$18*8; //@line 218 "mathmodule.c"
        var $20=HEAP[$19]; //@line 218 "mathmodule.c"
        var $21=($17) + ($20); //@line 218 "mathmodule.c"
        $den=$21; //@line 218 "mathmodule.c"
        var $22=$i; //@line 216 "mathmodule.c"
        var $23=($22) - 1; //@line 216 "mathmodule.c"
        $i=$23; //@line 216 "mathmodule.c"
        var $24=($23) >= 0; //@line 216 "mathmodule.c"
        if ($24) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 216 "mathmodule.c"
      case 5: // $bb6
        $i=0; //@line 222 "mathmodule.c"
        __label__ = 6; break;
      case 6: // $bb7
        var $25=$num; //@line 223 "mathmodule.c"
        var $26=$x_addr; //@line 223 "mathmodule.c"
        var $27=($25) / ($26); //@line 223 "mathmodule.c"
        var $28=$i; //@line 223 "mathmodule.c"
        var $29=_lanczos_num_coeffs+$28*8; //@line 223 "mathmodule.c"
        var $30=HEAP[$29]; //@line 223 "mathmodule.c"
        var $31=($27) + ($30); //@line 223 "mathmodule.c"
        $num=$31; //@line 223 "mathmodule.c"
        var $32=$den; //@line 224 "mathmodule.c"
        var $33=$x_addr; //@line 224 "mathmodule.c"
        var $34=($32) / ($33); //@line 224 "mathmodule.c"
        var $35=$i; //@line 224 "mathmodule.c"
        var $36=_lanczos_den_coeffs+$35*8; //@line 224 "mathmodule.c"
        var $37=HEAP[$36]; //@line 224 "mathmodule.c"
        var $38=($34) + ($37); //@line 224 "mathmodule.c"
        $den=$38; //@line 224 "mathmodule.c"
        var $39=$i; //@line 222 "mathmodule.c"
        var $40=($39) + 1; //@line 222 "mathmodule.c"
        $i=$40; //@line 222 "mathmodule.c"
        var $41=($40) <= 12; //@line 222 "mathmodule.c"
        if ($41) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 222 "mathmodule.c"
      case 7: // $bb9
        var $42=$num; //@line 227 "mathmodule.c"
        var $43=$den; //@line 227 "mathmodule.c"
        var $44=($42) / ($43); //@line 227 "mathmodule.c"
        $0=$44; //@line 227 "mathmodule.c"
        var $45=$0; //@line 227 "mathmodule.c"
        $retval=$45; //@line 227 "mathmodule.c"
        var $retval10=$retval; //@line 227 "mathmodule.c"
        ;
        return $retval10; //@line 227 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_tgamma($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $absx;
        var $r;
        var $y;
        var $z;
        var $sqrtpow;
        var $q;
        var $q22;
        $x_addr=$x;
        var $1=$x_addr; //@line 236 "mathmodule.c"
        var $2=___finite($1); //@line 236 "mathmodule.c"
        var $3=($2)==0; //@line 236 "mathmodule.c"
        var $4=$x_addr; //@line 237 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 236 "mathmodule.c"
      case 1: // $bb
        var $5=___isnan($4); //@line 237 "mathmodule.c"
        var $6=($5)!=0; //@line 237 "mathmodule.c"
        var $7=$x_addr; //@line 237 "mathmodule.c"
        var $8=($7) > 0; //@line 237 "mathmodule.c"
        var $or_cond=($6) | ($8);
        if ($or_cond) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 237 "mathmodule.c"
      case 2: // $bb2
        var $9=$x_addr; //@line 238 "mathmodule.c"
        $0=$9; //@line 238 "mathmodule.c"
        __label__ = 32; break; //@line 238 "mathmodule.c"
      case 3: // $bb3
        var $10=___errno_location(); //@line 240 "mathmodule.c"
        HEAP[$10]=33; //@line 240 "mathmodule.c"
        $0=NaN; //@line 241 "mathmodule.c"
        __label__ = 32; break; //@line 241 "mathmodule.c"
      case 4: // $bb4
        var $11=($4) == 0; //@line 244 "mathmodule.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 244 "mathmodule.c"
      case 5: // $bb5
        var $12=___errno_location(); //@line 245 "mathmodule.c"
        HEAP[$12]=33; //@line 245 "mathmodule.c"
        var $13=$x_addr; //@line 246 "mathmodule.c"
        var $14=1 / ($13); //@line 246 "mathmodule.c"
        $0=$14; //@line 246 "mathmodule.c"
        __label__ = 32; break; //@line 246 "mathmodule.c"
      case 6: // $bb6
        var $15=$x_addr; //@line 250 "mathmodule.c"
        var $16=_floor($15); //@line 250 "mathmodule.c"
        var $17=$x_addr; //@line 250 "mathmodule.c"
        var $18=($16) == ($17); //@line 250 "mathmodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 250 "mathmodule.c"
      case 7: // $bb7
        var $19=$x_addr; //@line 251 "mathmodule.c"
        var $20=($19) < 0; //@line 251 "mathmodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 251 "mathmodule.c"
      case 8: // $bb8
        var $21=___errno_location(); //@line 252 "mathmodule.c"
        HEAP[$21]=33; //@line 252 "mathmodule.c"
        $0=NaN; //@line 253 "mathmodule.c"
        __label__ = 32; break; //@line 253 "mathmodule.c"
      case 9: // $bb9
        var $22=$x_addr; //@line 255 "mathmodule.c"
        var $23=($22) <= 23; //@line 255 "mathmodule.c"
        if ($23) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 255 "mathmodule.c"
      case 10: // $bb10
        var $24=$x_addr; //@line 256 "mathmodule.c"
        var $25=((($24))|0); //@line 256 "mathmodule.c"
        var $26=($25) - 1; //@line 256 "mathmodule.c"
        var $27=_gamma_integral+$26*8; //@line 256 "mathmodule.c"
        var $28=HEAP[$27]; //@line 256 "mathmodule.c"
        $0=$28; //@line 256 "mathmodule.c"
        __label__ = 32; break; //@line 256 "mathmodule.c"
      case 11: // $bb11
        var $29=$x_addr; //@line 258 "mathmodule.c"
        var $30=_fabs($29); //@line 258 "mathmodule.c"
        $absx=$30; //@line 258 "mathmodule.c"
        var $31=($30) < 1e-20; //@line 261 "mathmodule.c"
        if ($31) { __label__ = 12; break; } else { __label__ = 15; break; } //@line 261 "mathmodule.c"
      case 12: // $bb12
        var $32=$x_addr; //@line 262 "mathmodule.c"
        var $33=1 / ($32); //@line 262 "mathmodule.c"
        $r=$33; //@line 262 "mathmodule.c"
        var $34=$r; //@line 263 "mathmodule.c"
        var $35=___isinf($34); //@line 263 "mathmodule.c"
        var $36=($35)!=0; //@line 263 "mathmodule.c"
        if ($36) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 263 "mathmodule.c"
      case 13: // $bb13
        var $37=___errno_location(); //@line 264 "mathmodule.c"
        HEAP[$37]=34; //@line 264 "mathmodule.c"
        __label__ = 14; break; //@line 264 "mathmodule.c"
      case 14: // $bb14
        var $38=$r; //@line 265 "mathmodule.c"
        $0=$38; //@line 265 "mathmodule.c"
        __label__ = 32; break; //@line 265 "mathmodule.c"
      case 15: // $bb15
        var $39=$absx; //@line 271 "mathmodule.c"
        var $40=($39) > 200; //@line 271 "mathmodule.c"
        if ($40) { __label__ = 16; break; } else { __label__ = 19; break; } //@line 271 "mathmodule.c"
      case 16: // $bb16
        var $41=$x_addr; //@line 272 "mathmodule.c"
        var $42=($41) < 0; //@line 272 "mathmodule.c"
        if ($42) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 272 "mathmodule.c"
      case 17: // $bb17
        var $43=$x_addr; //@line 273 "mathmodule.c"
        var $44=_sinpi($43); //@line 273 "mathmodule.c"
        var $45=0 / ($44); //@line 273 "mathmodule.c"
        $0=$45; //@line 273 "mathmodule.c"
        __label__ = 32; break; //@line 273 "mathmodule.c"
      case 18: // $bb18
        var $46=___errno_location(); //@line 276 "mathmodule.c"
        HEAP[$46]=34; //@line 276 "mathmodule.c"
        $0=Infinity; //@line 277 "mathmodule.c"
        __label__ = 32; break; //@line 277 "mathmodule.c"
      case 19: // $bb19
        var $47=$absx; //@line 281 "mathmodule.c"
        var $48=($47) + 5.52468004077673; //@line 281 "mathmodule.c"
        $y=$48; //@line 281 "mathmodule.c"
        var $49=$absx; //@line 283 "mathmodule.c"
        var $50=($49) > 5.52468004077673; //@line 283 "mathmodule.c"
        var $51=$y; //@line 288 "mathmodule.c"
        if ($50) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 283 "mathmodule.c"
      case 20: // $bb20
        var $52=$absx; //@line 288 "mathmodule.c"
        var $53=($51) - ($52); //@line 288 "mathmodule.c"
        $q=$53; //@line 288 "mathmodule.c"
        var $54=$q; //@line 289 "mathmodule.c"
        var $55=($54) - 5.52468004077673; //@line 289 "mathmodule.c"
        $z=$55; //@line 289 "mathmodule.c"
        __label__ = 22; break; //@line 289 "mathmodule.c"
      case 21: // $bb21
        var $56=($51) - 5.52468004077673; //@line 292 "mathmodule.c"
        $q22=$56; //@line 292 "mathmodule.c"
        var $57=$q22; //@line 293 "mathmodule.c"
        var $58=$absx; //@line 293 "mathmodule.c"
        var $59=($57) - ($58); //@line 293 "mathmodule.c"
        $z=$59; //@line 293 "mathmodule.c"
        __label__ = 22; break; //@line 293 "mathmodule.c"
      case 22: // $bb23
        var $60=$z; //@line 295 "mathmodule.c"
        var $61=($60) * 6.02468004077673; //@line 295 "mathmodule.c"
        var $62=$y; //@line 295 "mathmodule.c"
        var $63=($61) / ($62); //@line 295 "mathmodule.c"
        $z=$63; //@line 295 "mathmodule.c"
        var $64=$x_addr; //@line 296 "mathmodule.c"
        var $65=($64) < 0; //@line 296 "mathmodule.c"
        var $66=$absx; //@line 297 "mathmodule.c"
        if ($65) { __label__ = 23; break; } else { __label__ = 26; break; } //@line 296 "mathmodule.c"
      case 23: // $bb24
        var $67=_sinpi($66); //@line 297 "mathmodule.c"
        var $68=-3.141592653589793 / ($67); //@line 297 "mathmodule.c"
        var $69=$absx; //@line 297 "mathmodule.c"
        var $70=($68) / ($69); //@line 297 "mathmodule.c"
        var $71=$y; //@line 297 "mathmodule.c"
        var $72=_llvm_exp_f64($71); //@line 297 "mathmodule.c"
        var $73=($70) * ($72); //@line 297 "mathmodule.c"
        var $74=$absx; //@line 297 "mathmodule.c"
        var $75=_lanczos_sum($74); //@line 297 "mathmodule.c"
        var $76=($73) / ($75); //@line 297 "mathmodule.c"
        $r=$76; //@line 297 "mathmodule.c"
        var $77=$z; //@line 298 "mathmodule.c"
        var $78=$r; //@line 298 "mathmodule.c"
        var $79=($77) * ($78); //@line 298 "mathmodule.c"
        var $80=$r; //@line 298 "mathmodule.c"
        var $81=($80) - ($79); //@line 298 "mathmodule.c"
        $r=$81; //@line 298 "mathmodule.c"
        var $82=$absx; //@line 299 "mathmodule.c"
        var $83=($82) < 140; //@line 299 "mathmodule.c"
        var $84=$absx; //@line 300 "mathmodule.c"
        if ($83) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 299 "mathmodule.c"
      case 24: // $bb25
        var $85=($84) - 0.5; //@line 300 "mathmodule.c"
        var $86=$y; //@line 300 "mathmodule.c"
        var $87=_llvm_pow_f64($86, $85); //@line 300 "mathmodule.c"
        var $88=$r; //@line 300 "mathmodule.c"
        var $89=($88) / ($87); //@line 300 "mathmodule.c"
        $r=$89; //@line 300 "mathmodule.c"
        __label__ = 29; break; //@line 300 "mathmodule.c"
      case 25: // $bb26
        var $90=($84) / 2; //@line 303 "mathmodule.c"
        var $91=($90) - 0.25; //@line 303 "mathmodule.c"
        var $92=$y; //@line 303 "mathmodule.c"
        var $93=_llvm_pow_f64($92, $91); //@line 303 "mathmodule.c"
        $sqrtpow=$93; //@line 303 "mathmodule.c"
        var $94=$r; //@line 304 "mathmodule.c"
        var $95=$sqrtpow; //@line 304 "mathmodule.c"
        var $96=($94) / ($95); //@line 304 "mathmodule.c"
        $r=$96; //@line 304 "mathmodule.c"
        var $97=$r; //@line 305 "mathmodule.c"
        var $98=$sqrtpow; //@line 305 "mathmodule.c"
        var $99=($97) / ($98); //@line 305 "mathmodule.c"
        $r=$99; //@line 305 "mathmodule.c"
        __label__ = 29; break; //@line 305 "mathmodule.c"
      case 26: // $bb28
        var $100=_lanczos_sum($66); //@line 309 "mathmodule.c"
        var $101=$y; //@line 309 "mathmodule.c"
        var $102=_llvm_exp_f64($101); //@line 309 "mathmodule.c"
        var $103=($100) / ($102); //@line 309 "mathmodule.c"
        $r=$103; //@line 309 "mathmodule.c"
        var $104=$z; //@line 310 "mathmodule.c"
        var $105=$r; //@line 310 "mathmodule.c"
        var $106=($104) * ($105); //@line 310 "mathmodule.c"
        var $107=$r; //@line 310 "mathmodule.c"
        var $108=($106) + ($107); //@line 310 "mathmodule.c"
        $r=$108; //@line 310 "mathmodule.c"
        var $109=$absx; //@line 311 "mathmodule.c"
        var $110=($109) < 140; //@line 311 "mathmodule.c"
        var $111=$absx; //@line 312 "mathmodule.c"
        if ($110) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 311 "mathmodule.c"
      case 27: // $bb29
        var $112=($111) - 0.5; //@line 312 "mathmodule.c"
        var $113=$y; //@line 312 "mathmodule.c"
        var $114=_llvm_pow_f64($113, $112); //@line 312 "mathmodule.c"
        var $115=$r; //@line 312 "mathmodule.c"
        var $116=($114) * ($115); //@line 312 "mathmodule.c"
        $r=$116; //@line 312 "mathmodule.c"
        __label__ = 29; break; //@line 312 "mathmodule.c"
      case 28: // $bb30
        var $117=($111) / 2; //@line 315 "mathmodule.c"
        var $118=($117) - 0.25; //@line 315 "mathmodule.c"
        var $119=$y; //@line 315 "mathmodule.c"
        var $120=_llvm_pow_f64($119, $118); //@line 315 "mathmodule.c"
        $sqrtpow=$120; //@line 315 "mathmodule.c"
        var $121=$r; //@line 316 "mathmodule.c"
        var $122=$sqrtpow; //@line 316 "mathmodule.c"
        var $123=($121) * ($122); //@line 316 "mathmodule.c"
        $r=$123; //@line 316 "mathmodule.c"
        var $124=$r; //@line 317 "mathmodule.c"
        var $125=$sqrtpow; //@line 317 "mathmodule.c"
        var $126=($124) * ($125); //@line 317 "mathmodule.c"
        $r=$126; //@line 317 "mathmodule.c"
        __label__ = 29; break; //@line 317 "mathmodule.c"
      case 29: // $bb31
        var $127=$r; //@line 320 "mathmodule.c"
        var $128=___isinf($127); //@line 320 "mathmodule.c"
        var $129=($128)!=0; //@line 320 "mathmodule.c"
        if ($129) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 320 "mathmodule.c"
      case 30: // $bb32
        var $130=___errno_location(); //@line 321 "mathmodule.c"
        HEAP[$130]=34; //@line 321 "mathmodule.c"
        __label__ = 31; break; //@line 321 "mathmodule.c"
      case 31: // $bb33
        var $131=$r; //@line 322 "mathmodule.c"
        $0=$131; //@line 322 "mathmodule.c"
        __label__ = 32; break; //@line 322 "mathmodule.c"
      case 32: // $bb34
        var $132=$0; //@line 238 "mathmodule.c"
        $retval=$132; //@line 238 "mathmodule.c"
        var $retval35=$retval; //@line 238 "mathmodule.c"
        ;
        return $retval35; //@line 238 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_lgamma($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $r;
        var $absx;
        $x_addr=$x;
        var $1=$x_addr; //@line 336 "mathmodule.c"
        var $2=___finite($1); //@line 336 "mathmodule.c"
        var $3=($2)==0; //@line 336 "mathmodule.c"
        var $4=$x_addr; //@line 337 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 336 "mathmodule.c"
      case 1: // $bb
        var $5=___isnan($4); //@line 337 "mathmodule.c"
        var $6=($5)!=0; //@line 337 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 337 "mathmodule.c"
      case 2: // $bb1
        var $7=$x_addr; //@line 338 "mathmodule.c"
        $0=$7; //@line 338 "mathmodule.c"
        __label__ = 16; break; //@line 338 "mathmodule.c"
      case 3: // $bb2
        $0=Infinity; //@line 340 "mathmodule.c"
        __label__ = 16; break; //@line 340 "mathmodule.c"
      case 4: // $bb3
        var $8=_floor($4); //@line 344 "mathmodule.c"
        var $9=$x_addr; //@line 344 "mathmodule.c"
        var $10=($8) == ($9); //@line 344 "mathmodule.c"
        var $11=$x_addr; //@line 344 "mathmodule.c"
        var $12=($11) <= 2; //@line 344 "mathmodule.c"
        var $or_cond=($10) & ($12);
        var $13=$x_addr; //@line 345 "mathmodule.c"
        if ($or_cond) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 344 "mathmodule.c"
      case 5: // $bb5
        var $14=($13) <= 0; //@line 345 "mathmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 345 "mathmodule.c"
      case 6: // $bb6
        var $15=___errno_location(); //@line 346 "mathmodule.c"
        HEAP[$15]=33; //@line 346 "mathmodule.c"
        $0=Infinity; //@line 347 "mathmodule.c"
        __label__ = 16; break; //@line 347 "mathmodule.c"
      case 7: // $bb7
        $0=0; //@line 350 "mathmodule.c"
        __label__ = 16; break; //@line 350 "mathmodule.c"
      case 8: // $bb8
        var $16=_fabs($13); //@line 354 "mathmodule.c"
        $absx=$16; //@line 354 "mathmodule.c"
        var $17=$absx; //@line 356 "mathmodule.c"
        var $18=($17) < 1e-20; //@line 356 "mathmodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 356 "mathmodule.c"
      case 9: // $bb9
        var $19=$absx; //@line 357 "mathmodule.c"
        var $20=_llvm_log_f64($19); //@line 357 "mathmodule.c"
        var $21=0 - ($20); //@line 357 "mathmodule.c"
        $0=$21; //@line 357 "mathmodule.c"
        __label__ = 16; break; //@line 357 "mathmodule.c"
      case 10: // $bb10
        var $22=$x_addr; //@line 360 "mathmodule.c"
        var $23=($22) > 0; //@line 360 "mathmodule.c"
        if ($23) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 360 "mathmodule.c"
      case 11: // $bb11
        var $24=$x_addr; //@line 365 "mathmodule.c"
        var $25=_lanczos_sum($24); //@line 365 "mathmodule.c"
        var $26=_llvm_log_f64($25); //@line 365 "mathmodule.c"
        var $27=($26) - 6.02468004077673; //@line 365 "mathmodule.c"
        var $28=$x_addr; //@line 365 "mathmodule.c"
        var $29=($28) - 0.5; //@line 365 "mathmodule.c"
        var $30=$x_addr; //@line 365 "mathmodule.c"
        var $31=($30) + 6.02468004077673; //@line 365 "mathmodule.c"
        var $32=($31) - 0.5; //@line 365 "mathmodule.c"
        var $33=_llvm_log_f64($32); //@line 365 "mathmodule.c"
        var $34=($33) - 1; //@line 365 "mathmodule.c"
        var $35=($29) * ($34); //@line 365 "mathmodule.c"
        var $36=($27) + ($35); //@line 365 "mathmodule.c"
        $r=$36; //@line 365 "mathmodule.c"
        __label__ = 13; break; //@line 365 "mathmodule.c"
      case 12: // $bb12
        var $37=_llvm_log_f64(3.141592653589793); //@line 369 "mathmodule.c"
        var $38=$absx; //@line 369 "mathmodule.c"
        var $39=_sinpi($38); //@line 369 "mathmodule.c"
        var $40=_fabs($39); //@line 369 "mathmodule.c"
        var $41=_llvm_log_f64($40); //@line 369 "mathmodule.c"
        var $42=($37) - ($41); //@line 369 "mathmodule.c"
        var $43=$absx; //@line 369 "mathmodule.c"
        var $44=_llvm_log_f64($43); //@line 369 "mathmodule.c"
        var $45=($42) - ($44); //@line 369 "mathmodule.c"
        var $46=$absx; //@line 369 "mathmodule.c"
        var $47=_lanczos_sum($46); //@line 369 "mathmodule.c"
        var $48=_llvm_log_f64($47); //@line 369 "mathmodule.c"
        var $49=($48) - 6.02468004077673; //@line 369 "mathmodule.c"
        var $50=$absx; //@line 369 "mathmodule.c"
        var $51=($50) - 0.5; //@line 369 "mathmodule.c"
        var $52=$absx; //@line 369 "mathmodule.c"
        var $53=($52) + 6.02468004077673; //@line 369 "mathmodule.c"
        var $54=($53) - 0.5; //@line 369 "mathmodule.c"
        var $55=_llvm_log_f64($54); //@line 369 "mathmodule.c"
        var $56=($55) - 1; //@line 369 "mathmodule.c"
        var $57=($51) * ($56); //@line 369 "mathmodule.c"
        var $58=($49) + ($57); //@line 369 "mathmodule.c"
        var $59=($45) - ($58); //@line 369 "mathmodule.c"
        $r=$59; //@line 369 "mathmodule.c"
        __label__ = 13; break; //@line 369 "mathmodule.c"
      case 13: // $bb13
        var $60=$r; //@line 373 "mathmodule.c"
        var $61=___isinf($60); //@line 373 "mathmodule.c"
        var $62=($61)!=0; //@line 373 "mathmodule.c"
        if ($62) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 373 "mathmodule.c"
      case 14: // $bb14
        var $63=___errno_location(); //@line 374 "mathmodule.c"
        HEAP[$63]=34; //@line 374 "mathmodule.c"
        __label__ = 15; break; //@line 374 "mathmodule.c"
      case 15: // $bb15
        var $64=$r; //@line 375 "mathmodule.c"
        $0=$64; //@line 375 "mathmodule.c"
        __label__ = 16; break; //@line 375 "mathmodule.c"
      case 16: // $bb16
        var $65=$0; //@line 338 "mathmodule.c"
        $retval=$65; //@line 338 "mathmodule.c"
        var $retval17=$retval; //@line 338 "mathmodule.c"
        ;
        return $retval17; //@line 338 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_erf_series($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $x2;
        var $acc;
        var $fk;
        var $result;
        var $i;
        var $saved_errno;
        $x_addr=$x;
        var $1=$x_addr; //@line 434 "mathmodule.c"
        var $2=$x_addr; //@line 434 "mathmodule.c"
        var $3=($1) * ($2); //@line 434 "mathmodule.c"
        $x2=$3; //@line 434 "mathmodule.c"
        $acc=0; //@line 435 "mathmodule.c"
        $fk=25.5; //@line 436 "mathmodule.c"
        $i=0; //@line 437 "mathmodule.c"
        __label__ = 1; break;
      case 1: // $bb
        var $4=$x2; //@line 438 "mathmodule.c"
        var $5=$acc; //@line 438 "mathmodule.c"
        var $6=($4) * ($5); //@line 438 "mathmodule.c"
        var $7=$fk; //@line 438 "mathmodule.c"
        var $8=($6) / ($7); //@line 438 "mathmodule.c"
        var $9=($8) + 2; //@line 438 "mathmodule.c"
        $acc=$9; //@line 438 "mathmodule.c"
        var $10=$fk; //@line 439 "mathmodule.c"
        var $11=($10) - 1; //@line 439 "mathmodule.c"
        $fk=$11; //@line 439 "mathmodule.c"
        var $12=$i; //@line 437 "mathmodule.c"
        var $13=($12) + 1; //@line 437 "mathmodule.c"
        $i=$13; //@line 437 "mathmodule.c"
        var $14=($13) <= 24; //@line 437 "mathmodule.c"
        if ($14) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 437 "mathmodule.c"
      case 2: // $bb2
        var $15=___errno_location(); //@line 443 "mathmodule.c"
        var $16=HEAP[$15]; //@line 443 "mathmodule.c"
        $saved_errno=$16; //@line 443 "mathmodule.c"
        var $17=$acc; //@line 444 "mathmodule.c"
        var $18=$x_addr; //@line 444 "mathmodule.c"
        var $19=($17) * ($18); //@line 444 "mathmodule.c"
        var $20=$x2; //@line 444 "mathmodule.c"
        var $21=0 - ($20); //@line 444 "mathmodule.c"
        var $22=_llvm_exp_f64($21); //@line 444 "mathmodule.c"
        var $23=($19) * ($22); //@line 444 "mathmodule.c"
        var $24=($23) / 1.772453850905516; //@line 444 "mathmodule.c"
        $result=$24; //@line 444 "mathmodule.c"
        var $25=___errno_location(); //@line 445 "mathmodule.c"
        var $26=$saved_errno; //@line 445 "mathmodule.c"
        HEAP[$25]=$26; //@line 445 "mathmodule.c"
        var $27=$result; //@line 446 "mathmodule.c"
        $0=$27; //@line 446 "mathmodule.c"
        var $28=$0; //@line 446 "mathmodule.c"
        $retval=$28; //@line 446 "mathmodule.c"
        var $retval3=$retval; //@line 446 "mathmodule.c"
        ;
        return $retval3; //@line 446 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_erfc_contfrac($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $x2;
        var $a;
        var $da;
        var $p;
        var $p_last;
        var $q;
        var $q_last;
        var $b;
        var $result;
        var $i;
        var $saved_errno;
        var $temp;
        $x_addr=$x;
        var $1=$x_addr; //@line 464 "mathmodule.c"
        var $2=($1) >= 30; //@line 464 "mathmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 464 "mathmodule.c"
      case 1: // $bb
        $0=0; //@line 465 "mathmodule.c"
        __label__ = 5; break; //@line 465 "mathmodule.c"
      case 2: // $bb1
        var $3=$x_addr; //@line 467 "mathmodule.c"
        var $4=$x_addr; //@line 467 "mathmodule.c"
        var $5=($3) * ($4); //@line 467 "mathmodule.c"
        $x2=$5; //@line 467 "mathmodule.c"
        $a=0; //@line 468 "mathmodule.c"
        $da=0.5; //@line 469 "mathmodule.c"
        $p=1; //@line 470 "mathmodule.c"
        $p_last=0; //@line 470 "mathmodule.c"
        var $6=$da; //@line 471 "mathmodule.c"
        var $7=$x2; //@line 471 "mathmodule.c"
        var $8=($6) + ($7); //@line 471 "mathmodule.c"
        $q=$8; //@line 471 "mathmodule.c"
        $q_last=1; //@line 471 "mathmodule.c"
        $i=0; //@line 472 "mathmodule.c"
        __label__ = 3; break;
      case 3: // $bb2
        var $9=$a; //@line 474 "mathmodule.c"
        var $10=$da; //@line 474 "mathmodule.c"
        var $11=($9) + ($10); //@line 474 "mathmodule.c"
        $a=$11; //@line 474 "mathmodule.c"
        var $12=$da; //@line 475 "mathmodule.c"
        var $13=($12) + 2; //@line 475 "mathmodule.c"
        $da=$13; //@line 475 "mathmodule.c"
        var $14=$da; //@line 476 "mathmodule.c"
        var $15=$x2; //@line 476 "mathmodule.c"
        var $16=($14) + ($15); //@line 476 "mathmodule.c"
        $b=$16; //@line 476 "mathmodule.c"
        var $17=$p; //@line 477 "mathmodule.c"
        $temp=$17; //@line 477 "mathmodule.c"
        var $18=$b; //@line 477 "mathmodule.c"
        var $19=$p; //@line 477 "mathmodule.c"
        var $20=($18) * ($19); //@line 477 "mathmodule.c"
        var $21=$a; //@line 477 "mathmodule.c"
        var $22=$p_last; //@line 477 "mathmodule.c"
        var $23=($21) * ($22); //@line 477 "mathmodule.c"
        var $24=($20) - ($23); //@line 477 "mathmodule.c"
        $p=$24; //@line 477 "mathmodule.c"
        var $25=$temp; //@line 477 "mathmodule.c"
        $p_last=$25; //@line 477 "mathmodule.c"
        var $26=$q; //@line 478 "mathmodule.c"
        $temp=$26; //@line 478 "mathmodule.c"
        var $27=$b; //@line 478 "mathmodule.c"
        var $28=$q; //@line 478 "mathmodule.c"
        var $29=($27) * ($28); //@line 478 "mathmodule.c"
        var $30=$a; //@line 478 "mathmodule.c"
        var $31=$q_last; //@line 478 "mathmodule.c"
        var $32=($30) * ($31); //@line 478 "mathmodule.c"
        var $33=($29) - ($32); //@line 478 "mathmodule.c"
        $q=$33; //@line 478 "mathmodule.c"
        var $34=$temp; //@line 478 "mathmodule.c"
        $q_last=$34; //@line 478 "mathmodule.c"
        var $35=$i; //@line 472 "mathmodule.c"
        var $36=($35) + 1; //@line 472 "mathmodule.c"
        $i=$36; //@line 472 "mathmodule.c"
        var $37=($36) <= 49; //@line 472 "mathmodule.c"
        if ($37) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 472 "mathmodule.c"
      case 4: // $bb4
        var $38=___errno_location(); //@line 482 "mathmodule.c"
        var $39=HEAP[$38]; //@line 482 "mathmodule.c"
        $saved_errno=$39; //@line 482 "mathmodule.c"
        var $40=$p; //@line 483 "mathmodule.c"
        var $41=$q; //@line 483 "mathmodule.c"
        var $42=($40) / ($41); //@line 483 "mathmodule.c"
        var $43=$x_addr; //@line 483 "mathmodule.c"
        var $44=($42) * ($43); //@line 483 "mathmodule.c"
        var $45=$x2; //@line 483 "mathmodule.c"
        var $46=0 - ($45); //@line 483 "mathmodule.c"
        var $47=_llvm_exp_f64($46); //@line 483 "mathmodule.c"
        var $48=($44) * ($47); //@line 483 "mathmodule.c"
        var $49=($48) / 1.772453850905516; //@line 483 "mathmodule.c"
        $result=$49; //@line 483 "mathmodule.c"
        var $50=___errno_location(); //@line 484 "mathmodule.c"
        var $51=$saved_errno; //@line 484 "mathmodule.c"
        HEAP[$50]=$51; //@line 484 "mathmodule.c"
        var $52=$result; //@line 485 "mathmodule.c"
        $0=$52; //@line 485 "mathmodule.c"
        __label__ = 5; break; //@line 485 "mathmodule.c"
      case 5: // $bb5
        var $53=$0; //@line 465 "mathmodule.c"
        $retval=$53; //@line 465 "mathmodule.c"
        var $retval6=$retval; //@line 465 "mathmodule.c"
        ;
        return $retval6; //@line 465 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_erf($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $iftmp_22;
        var $0;
        var $absx;
        var $cf;
        $x_addr=$x;
        var $1=$x_addr; //@line 495 "mathmodule.c"
        var $2=___isnan($1); //@line 495 "mathmodule.c"
        var $3=($2)!=0; //@line 495 "mathmodule.c"
        var $4=$x_addr; //@line 496 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 495 "mathmodule.c"
      case 1: // $bb
        $0=$4; //@line 496 "mathmodule.c"
        __label__ = 8; break; //@line 496 "mathmodule.c"
      case 2: // $bb1
        var $5=_fabs($4); //@line 497 "mathmodule.c"
        $absx=$5; //@line 497 "mathmodule.c"
        var $6=$absx; //@line 498 "mathmodule.c"
        var $7=($6) < 1.5; //@line 498 "mathmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 498 "mathmodule.c"
      case 3: // $bb2
        var $8=$x_addr; //@line 499 "mathmodule.c"
        var $9=_m_erf_series($8); //@line 499 "mathmodule.c"
        $0=$9; //@line 499 "mathmodule.c"
        __label__ = 8; break; //@line 499 "mathmodule.c"
      case 4: // $bb3
        var $10=$absx; //@line 501 "mathmodule.c"
        var $11=_m_erfc_contfrac($10); //@line 501 "mathmodule.c"
        $cf=$11; //@line 501 "mathmodule.c"
        var $12=$x_addr; //@line 502 "mathmodule.c"
        var $13=($12) > 0; //@line 502 "mathmodule.c"
        var $14=$cf; //@line 502 "mathmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 502 "mathmodule.c"
      case 5: // $bb4
        var $15=1 - ($14); //@line 502 "mathmodule.c"
        $iftmp_22=$15; //@line 502 "mathmodule.c"
        __label__ = 7; break; //@line 502 "mathmodule.c"
      case 6: // $bb5
        var $16=($14) - 1; //@line 502 "mathmodule.c"
        $iftmp_22=$16; //@line 502 "mathmodule.c"
        __label__ = 7; break; //@line 502 "mathmodule.c"
      case 7: // $bb6
        var $17=$iftmp_22; //@line 502 "mathmodule.c"
        $0=$17; //@line 502 "mathmodule.c"
        __label__ = 8; break; //@line 502 "mathmodule.c"
      case 8: // $bb7
        var $18=$0; //@line 496 "mathmodule.c"
        $retval=$18; //@line 496 "mathmodule.c"
        var $retval8=$retval; //@line 496 "mathmodule.c"
        ;
        return $retval8; //@line 496 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_erfc($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $iftmp_23;
        var $0;
        var $absx;
        var $cf;
        $x_addr=$x;
        var $1=$x_addr; //@line 513 "mathmodule.c"
        var $2=___isnan($1); //@line 513 "mathmodule.c"
        var $3=($2)!=0; //@line 513 "mathmodule.c"
        var $4=$x_addr; //@line 514 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 513 "mathmodule.c"
      case 1: // $bb
        $0=$4; //@line 514 "mathmodule.c"
        __label__ = 8; break; //@line 514 "mathmodule.c"
      case 2: // $bb1
        var $5=_fabs($4); //@line 515 "mathmodule.c"
        $absx=$5; //@line 515 "mathmodule.c"
        var $6=$absx; //@line 516 "mathmodule.c"
        var $7=($6) < 1.5; //@line 516 "mathmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 516 "mathmodule.c"
      case 3: // $bb2
        var $8=$x_addr; //@line 517 "mathmodule.c"
        var $9=_m_erf_series($8); //@line 517 "mathmodule.c"
        var $10=1 - ($9); //@line 517 "mathmodule.c"
        $0=$10; //@line 517 "mathmodule.c"
        __label__ = 8; break; //@line 517 "mathmodule.c"
      case 4: // $bb3
        var $11=$absx; //@line 519 "mathmodule.c"
        var $12=_m_erfc_contfrac($11); //@line 519 "mathmodule.c"
        $cf=$12; //@line 519 "mathmodule.c"
        var $13=$x_addr; //@line 520 "mathmodule.c"
        var $14=($13) <= 0; //@line 520 "mathmodule.c"
        var $15=$cf; //@line 520 "mathmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 520 "mathmodule.c"
      case 5: // $bb4
        var $16=2 - ($15); //@line 520 "mathmodule.c"
        $iftmp_23=$16; //@line 520 "mathmodule.c"
        __label__ = 7; break; //@line 520 "mathmodule.c"
      case 6: // $bb5
        $iftmp_23=$15; //@line 520 "mathmodule.c"
        __label__ = 7; break; //@line 520 "mathmodule.c"
      case 7: // $bb6
        var $17=$iftmp_23; //@line 520 "mathmodule.c"
        $0=$17; //@line 520 "mathmodule.c"
        __label__ = 8; break; //@line 520 "mathmodule.c"
      case 8: // $bb7
        var $18=$0; //@line 514 "mathmodule.c"
        $retval=$18; //@line 514 "mathmodule.c"
        var $retval8=$retval; //@line 514 "mathmodule.c"
        ;
        return $retval8; //@line 514 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_atan2($y, $x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $y_addr;
        var $x_addr;
        var $retval;
        var $0;
        $y_addr=$y;
        $x_addr=$x;
        var $1=$x_addr; //@line 535 "mathmodule.c"
        var $2=___isnan($1); //@line 535 "mathmodule.c"
        var $3=($2)!=0; //@line 535 "mathmodule.c"
        if ($3) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 535 "mathmodule.c"
      case 1: // $bb
        var $4=$y_addr; //@line 535 "mathmodule.c"
        var $5=___isnan($4); //@line 535 "mathmodule.c"
        var $6=($5)!=0; //@line 535 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 535 "mathmodule.c"
      case 2: // $bb1
        $0=NaN; //@line 536 "mathmodule.c"
        __label__ = 15; break; //@line 536 "mathmodule.c"
      case 3: // $bb2
        var $7=$y_addr; //@line 537 "mathmodule.c"
        var $8=___isinf($7); //@line 537 "mathmodule.c"
        var $9=($8)!=0; //@line 537 "mathmodule.c"
        var $10=$x_addr; //@line 538 "mathmodule.c"
        var $11=___isinf($10); //@line 538 "mathmodule.c"
        var $12=($11)!=0; //@line 538 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 537 "mathmodule.c"
      case 4: // $bb3
        if ($12) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 538 "mathmodule.c"
      case 5: // $bb4
        var $13=$x_addr; //@line 539 "mathmodule.c"
        var $14=_copysign(1, $13); //@line 539 "mathmodule.c"
        var $15=($14) == 1; //@line 539 "mathmodule.c"
        var $16=$y_addr; //@line 541 "mathmodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 539 "mathmodule.c"
      case 6: // $bb5
        var $17=_copysign(0.7853981633974483, $16); //@line 541 "mathmodule.c"
        $0=$17; //@line 541 "mathmodule.c"
        __label__ = 15; break; //@line 541 "mathmodule.c"
      case 7: // $bb6
        var $18=_copysign(2.356194490192345, $16); //@line 544 "mathmodule.c"
        $0=$18; //@line 544 "mathmodule.c"
        __label__ = 15; break; //@line 544 "mathmodule.c"
      case 8: // $bb7
        var $19=$y_addr; //@line 547 "mathmodule.c"
        var $20=_copysign(1.5707963267948966, $19); //@line 547 "mathmodule.c"
        $0=$20; //@line 547 "mathmodule.c"
        __label__ = 15; break; //@line 547 "mathmodule.c"
      case 9: // $bb8
        if ($12) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 549 "mathmodule.c"
      case 10: // $bb9
        var $21=$y_addr; //@line 549 "mathmodule.c"
        var $22=($21) == 0; //@line 549 "mathmodule.c"
        if ($22) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 549 "mathmodule.c"
      case 11: // $bb10
        var $23=$x_addr; //@line 550 "mathmodule.c"
        var $24=_copysign(1, $23); //@line 550 "mathmodule.c"
        var $25=($24) == 1; //@line 550 "mathmodule.c"
        var $26=$y_addr; //@line 552 "mathmodule.c"
        if ($25) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 550 "mathmodule.c"
      case 12: // $bb11
        var $27=_copysign(0, $26); //@line 552 "mathmodule.c"
        $0=$27; //@line 552 "mathmodule.c"
        __label__ = 15; break; //@line 552 "mathmodule.c"
      case 13: // $bb12
        var $28=_copysign(3.141592653589793, $26); //@line 555 "mathmodule.c"
        $0=$28; //@line 555 "mathmodule.c"
        __label__ = 15; break; //@line 555 "mathmodule.c"
      case 14: // $bb13
        var $29=$y_addr; //@line 557 "mathmodule.c"
        var $30=$x_addr; //@line 557 "mathmodule.c"
        var $31=_atan2($29, $30); //@line 557 "mathmodule.c"
        $0=$31; //@line 557 "mathmodule.c"
        __label__ = 15; break; //@line 557 "mathmodule.c"
      case 15: // $bb14
        var $32=$0; //@line 536 "mathmodule.c"
        $retval=$32; //@line 536 "mathmodule.c"
        var $retval15=$retval; //@line 536 "mathmodule.c"
        ;
        return $retval15; //@line 536 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_log($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        $x_addr=$x;
        var $1=$x_addr; //@line 570 "mathmodule.c"
        var $2=___finite($1); //@line 570 "mathmodule.c"
        var $3=($2)!=0; //@line 570 "mathmodule.c"
        var $4=$x_addr; //@line 571 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 570 "mathmodule.c"
      case 1: // $bb
        var $5=($4) > 0; //@line 571 "mathmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 571 "mathmodule.c"
      case 2: // $bb1
        var $6=$x_addr; //@line 572 "mathmodule.c"
        var $7=_llvm_log_f64($6); //@line 572 "mathmodule.c"
        $0=$7; //@line 572 "mathmodule.c"
        __label__ = 11; break; //@line 572 "mathmodule.c"
      case 3: // $bb2
        var $8=___errno_location(); //@line 573 "mathmodule.c"
        HEAP[$8]=33; //@line 573 "mathmodule.c"
        var $9=$x_addr; //@line 574 "mathmodule.c"
        var $10=($9) == 0; //@line 574 "mathmodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 574 "mathmodule.c"
      case 4: // $bb3
        $0=-Infinity; //@line 575 "mathmodule.c"
        __label__ = 11; break; //@line 575 "mathmodule.c"
      case 5: // $bb4
        $0=NaN; //@line 577 "mathmodule.c"
        __label__ = 11; break; //@line 577 "mathmodule.c"
      case 6: // $bb5
        var $11=___isnan($4); //@line 579 "mathmodule.c"
        var $12=($11)!=0; //@line 579 "mathmodule.c"
        var $13=$x_addr; //@line 580 "mathmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 579 "mathmodule.c"
      case 7: // $bb6
        $0=$13; //@line 580 "mathmodule.c"
        __label__ = 11; break; //@line 580 "mathmodule.c"
      case 8: // $bb7
        var $14=($13) > 0; //@line 581 "mathmodule.c"
        if ($14) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 581 "mathmodule.c"
      case 9: // $bb8
        var $15=$x_addr; //@line 582 "mathmodule.c"
        $0=$15; //@line 582 "mathmodule.c"
        __label__ = 11; break; //@line 582 "mathmodule.c"
      case 10: // $bb9
        var $16=___errno_location(); //@line 584 "mathmodule.c"
        HEAP[$16]=33; //@line 584 "mathmodule.c"
        $0=NaN; //@line 585 "mathmodule.c"
        __label__ = 11; break; //@line 585 "mathmodule.c"
      case 11: // $bb10
        var $17=$0; //@line 572 "mathmodule.c"
        $retval=$17; //@line 572 "mathmodule.c"
        var $retval11=$retval; //@line 572 "mathmodule.c"
        ;
        return $retval11; //@line 572 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _m_log10($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        $x_addr=$x;
        var $1=$x_addr; //@line 592 "mathmodule.c"
        var $2=___finite($1); //@line 592 "mathmodule.c"
        var $3=($2)!=0; //@line 592 "mathmodule.c"
        var $4=$x_addr; //@line 593 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 6; break; } //@line 592 "mathmodule.c"
      case 1: // $bb
        var $5=($4) > 0; //@line 593 "mathmodule.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 593 "mathmodule.c"
      case 2: // $bb1
        var $6=$x_addr; //@line 594 "mathmodule.c"
        var $7=_llvm_log10_f64($6); //@line 594 "mathmodule.c"
        $0=$7; //@line 594 "mathmodule.c"
        __label__ = 11; break; //@line 594 "mathmodule.c"
      case 3: // $bb2
        var $8=___errno_location(); //@line 595 "mathmodule.c"
        HEAP[$8]=33; //@line 595 "mathmodule.c"
        var $9=$x_addr; //@line 596 "mathmodule.c"
        var $10=($9) == 0; //@line 596 "mathmodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 596 "mathmodule.c"
      case 4: // $bb3
        $0=-Infinity; //@line 597 "mathmodule.c"
        __label__ = 11; break; //@line 597 "mathmodule.c"
      case 5: // $bb4
        $0=NaN; //@line 599 "mathmodule.c"
        __label__ = 11; break; //@line 599 "mathmodule.c"
      case 6: // $bb5
        var $11=___isnan($4); //@line 601 "mathmodule.c"
        var $12=($11)!=0; //@line 601 "mathmodule.c"
        var $13=$x_addr; //@line 602 "mathmodule.c"
        if ($12) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 601 "mathmodule.c"
      case 7: // $bb6
        $0=$13; //@line 602 "mathmodule.c"
        __label__ = 11; break; //@line 602 "mathmodule.c"
      case 8: // $bb7
        var $14=($13) > 0; //@line 603 "mathmodule.c"
        if ($14) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 603 "mathmodule.c"
      case 9: // $bb8
        var $15=$x_addr; //@line 604 "mathmodule.c"
        $0=$15; //@line 604 "mathmodule.c"
        __label__ = 11; break; //@line 604 "mathmodule.c"
      case 10: // $bb9
        var $16=___errno_location(); //@line 606 "mathmodule.c"
        HEAP[$16]=33; //@line 606 "mathmodule.c"
        $0=NaN; //@line 607 "mathmodule.c"
        __label__ = 11; break; //@line 607 "mathmodule.c"
      case 11: // $bb10
        var $17=$0; //@line 594 "mathmodule.c"
        $retval=$17; //@line 594 "mathmodule.c"
        var $retval11=$retval; //@line 594 "mathmodule.c"
        ;
        return $retval11; //@line 594 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _is_error($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $result;
        $x_addr=$x;
        $result=1; //@line 619 "mathmodule.c"
        var $1=___errno_location(); //@line 620 "mathmodule.c"
        var $2=HEAP[$1]; //@line 620 "mathmodule.c"
        var $3=($2)==0; //@line 620 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 620 "mathmodule.c"
      case 1: // $bb
        ___assert_fail(__str5, __str1, 620, ___PRETTY_FUNCTION___8706); //@line 620 "mathmodule.c"
        throw "Reached an unreachable!" //@line 620 "mathmodule.c"
      case 2: // $bb1
        var $4=___errno_location(); //@line 621 "mathmodule.c"
        var $5=HEAP[$4]; //@line 621 "mathmodule.c"
        var $6=($5)==33; //@line 621 "mathmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 621 "mathmodule.c"
      case 3: // $bb2
        var $7=HEAP[_PyExc_ValueError]; //@line 622 "mathmodule.c"
        _PyErr_SetString($7, __str6); //@line 622 "mathmodule.c"
        __label__ = 9; break; //@line 622 "mathmodule.c"
      case 4: // $bb3
        var $8=___errno_location(); //@line 624 "mathmodule.c"
        var $9=HEAP[$8]; //@line 624 "mathmodule.c"
        var $10=($9)==34; //@line 624 "mathmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 624 "mathmodule.c"
      case 5: // $bb4
        var $11=$x_addr; //@line 640 "mathmodule.c"
        var $12=_fabs($11); //@line 640 "mathmodule.c"
        var $13=($12) < 1; //@line 640 "mathmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 640 "mathmodule.c"
      case 6: // $bb5
        $result=0; //@line 641 "mathmodule.c"
        __label__ = 9; break; //@line 641 "mathmodule.c"
      case 7: // $bb6
        var $14=HEAP[_PyExc_OverflowError]; //@line 643 "mathmodule.c"
        _PyErr_SetString($14, __str7); //@line 643 "mathmodule.c"
        __label__ = 9; break; //@line 643 "mathmodule.c"
      case 8: // $bb8
        var $15=HEAP[_PyExc_ValueError]; //@line 648 "mathmodule.c"
        var $16=_PyErr_SetFromErrno($15); //@line 648 "mathmodule.c"
        __label__ = 9; break; //@line 648 "mathmodule.c"
      case 9: // $bb9
        var $17=$result; //@line 649 "mathmodule.c"
        $0=$17; //@line 649 "mathmodule.c"
        var $18=$0; //@line 649 "mathmodule.c"
        $retval=$18; //@line 649 "mathmodule.c"
        var $retval10=$retval; //@line 649 "mathmodule.c"
        ;
        return $retval10; //@line 649 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_1($arg, $func, $can_overflow) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $arg_addr;
        var $func_addr;
        var $can_overflow_addr;
        var $retval;
        var $iftmp_27;
        var $0;
        var $x;
        var $r;
        $arg_addr=$arg;
        $func_addr=$func;
        $can_overflow_addr=$can_overflow;
        var $1=$arg_addr; //@line 686 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 686 "mathmodule.c"
        $x=$2; //@line 686 "mathmodule.c"
        var $3=$x; //@line 687 "mathmodule.c"
        var $4=($3) == -1; //@line 687 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 687 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 687 "mathmodule.c"
        var $6=($5)!=0; //@line 687 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 687 "mathmodule.c"
      case 2: // $bb1
        $0=0; //@line 688 "mathmodule.c"
        __label__ = 18; break; //@line 688 "mathmodule.c"
      case 3: // $bb2
        var $7=___errno_location(); //@line 689 "mathmodule.c"
        HEAP[$7]=0; //@line 689 "mathmodule.c"
        var $8=$func_addr; //@line 691 "mathmodule.c"
        var $9=$x; //@line 691 "mathmodule.c"
        var $10=FUNCTION_TABLE[$8]($9); //@line 691 "mathmodule.c"
        $r=$10; //@line 691 "mathmodule.c"
        var $11=$r; //@line 693 "mathmodule.c"
        var $12=___isnan($11); //@line 693 "mathmodule.c"
        var $13=($12)!=0; //@line 693 "mathmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 693 "mathmodule.c"
      case 4: // $bb3
        var $14=$x; //@line 694 "mathmodule.c"
        var $15=___isnan($14); //@line 694 "mathmodule.c"
        var $16=($15)==0; //@line 694 "mathmodule.c"
        var $17=___errno_location(); //@line 695 "mathmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 694 "mathmodule.c"
      case 5: // $bb4
        HEAP[$17]=33; //@line 695 "mathmodule.c"
        __label__ = 14; break; //@line 695 "mathmodule.c"
      case 6: // $bb5
        HEAP[$17]=0; //@line 697 "mathmodule.c"
        __label__ = 14; break; //@line 697 "mathmodule.c"
      case 7: // $bb7
        var $18=$r; //@line 699 "mathmodule.c"
        var $19=___isinf($18); //@line 699 "mathmodule.c"
        var $20=($19)!=0; //@line 699 "mathmodule.c"
        if ($20) { __label__ = 8; break; } else { __label__ = 14; break; } //@line 699 "mathmodule.c"
      case 8: // $bb8
        var $21=$x; //@line 700 "mathmodule.c"
        var $22=___finite($21); //@line 700 "mathmodule.c"
        var $23=($22)!=0; //@line 700 "mathmodule.c"
        var $24=___errno_location(); //@line 701 "mathmodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 700 "mathmodule.c"
      case 9: // $bb9
        var $25=$can_overflow_addr; //@line 701 "mathmodule.c"
        var $26=($25)!=0; //@line 701 "mathmodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 701 "mathmodule.c"
      case 10: // $bb10
        $iftmp_27=34; //@line 701 "mathmodule.c"
        __label__ = 12; break; //@line 701 "mathmodule.c"
      case 11: // $bb11
        $iftmp_27=33; //@line 701 "mathmodule.c"
        __label__ = 12; break; //@line 701 "mathmodule.c"
      case 12: // $bb12
        var $27=$iftmp_27; //@line 701 "mathmodule.c"
        HEAP[$24]=$27; //@line 701 "mathmodule.c"
        __label__ = 14; break; //@line 701 "mathmodule.c"
      case 13: // $bb13
        HEAP[$24]=0; //@line 703 "mathmodule.c"
        __label__ = 14; break; //@line 703 "mathmodule.c"
      case 14: // $bb14
        var $28=___errno_location(); //@line 705 "mathmodule.c"
        var $29=HEAP[$28]; //@line 705 "mathmodule.c"
        var $30=($29)==0; //@line 705 "mathmodule.c"
        if ($30) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 705 "mathmodule.c"
      case 15: // $bb15
        var $31=$r; //@line 705 "mathmodule.c"
        var $32=_is_error($31); //@line 705 "mathmodule.c"
        var $33=($32)==0; //@line 705 "mathmodule.c"
        if ($33) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 705 "mathmodule.c"
      case 16: // $bb16
        $0=0; //@line 706 "mathmodule.c"
        __label__ = 18; break; //@line 706 "mathmodule.c"
      case 17: // $bb17
        var $34=$r; //@line 708 "mathmodule.c"
        var $35=_PyFloat_FromDouble($34); //@line 708 "mathmodule.c"
        $0=$35; //@line 708 "mathmodule.c"
        __label__ = 18; break; //@line 708 "mathmodule.c"
      case 18: // $bb18
        var $36=$0; //@line 688 "mathmodule.c"
        $retval=$36; //@line 688 "mathmodule.c"
        var $retval19=$retval; //@line 688 "mathmodule.c"
        ;
        return $retval19; //@line 688 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_1a($arg, $func) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $arg_addr;
        var $func_addr;
        var $retval;
        var $0;
        var $x;
        var $r;
        $arg_addr=$arg;
        $func_addr=$func;
        var $1=$arg_addr; //@line 719 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 719 "mathmodule.c"
        $x=$2; //@line 719 "mathmodule.c"
        var $3=$x; //@line 720 "mathmodule.c"
        var $4=($3) == -1; //@line 720 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 720 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 720 "mathmodule.c"
        var $6=($5)!=0; //@line 720 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 720 "mathmodule.c"
      case 2: // $bb1
        $0=0; //@line 721 "mathmodule.c"
        __label__ = 7; break; //@line 721 "mathmodule.c"
      case 3: // $bb2
        var $7=___errno_location(); //@line 722 "mathmodule.c"
        HEAP[$7]=0; //@line 722 "mathmodule.c"
        var $8=$func_addr; //@line 724 "mathmodule.c"
        var $9=$x; //@line 724 "mathmodule.c"
        var $10=FUNCTION_TABLE[$8]($9); //@line 724 "mathmodule.c"
        $r=$10; //@line 724 "mathmodule.c"
        var $11=___errno_location(); //@line 726 "mathmodule.c"
        var $12=HEAP[$11]; //@line 726 "mathmodule.c"
        var $13=($12)!=0; //@line 726 "mathmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 726 "mathmodule.c"
      case 4: // $bb3
        var $14=$r; //@line 726 "mathmodule.c"
        var $15=_is_error($14); //@line 726 "mathmodule.c"
        var $16=($15)!=0; //@line 726 "mathmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 726 "mathmodule.c"
      case 5: // $bb4
        $0=0; //@line 727 "mathmodule.c"
        __label__ = 7; break; //@line 727 "mathmodule.c"
      case 6: // $bb5
        var $17=$r; //@line 728 "mathmodule.c"
        var $18=_PyFloat_FromDouble($17); //@line 728 "mathmodule.c"
        $0=$18; //@line 728 "mathmodule.c"
        __label__ = 7; break; //@line 728 "mathmodule.c"
      case 7: // $bb6
        var $19=$0; //@line 721 "mathmodule.c"
        $retval=$19; //@line 721 "mathmodule.c"
        var $retval7=$retval; //@line 721 "mathmodule.c"
        ;
        return $retval7; //@line 721 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_2($args, $func, $funcname) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $args_addr;
        var $func_addr;
        var $funcname_addr;
        var $retval;
        var $0;
        var $ox=__stackBase__;
        var $oy=__stackBase__+4;
        var $x;
        var $y;
        var $r;
        $args_addr=$args;
        $func_addr=$func;
        $funcname_addr=$funcname;
        var $1=$args_addr; //@line 763 "mathmodule.c"
        var $2=$funcname_addr; //@line 763 "mathmodule.c"
        var $3=_PyArg_UnpackTuple($1, $2, 2, 2, allocate([$ox,0,0,0,$oy,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 763 "mathmodule.c"
        var $4=($3)==0; //@line 763 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 763 "mathmodule.c"
      case 1: // $bb
        $0=0; //@line 764 "mathmodule.c"
        __label__ = 20; break; //@line 764 "mathmodule.c"
      case 2: // $bb1
        var $5=HEAP[$ox]; //@line 765 "mathmodule.c"
        var $6=_PyFloat_AsDouble($5); //@line 765 "mathmodule.c"
        $x=$6; //@line 765 "mathmodule.c"
        var $7=HEAP[$oy]; //@line 766 "mathmodule.c"
        var $8=_PyFloat_AsDouble($7); //@line 766 "mathmodule.c"
        $y=$8; //@line 766 "mathmodule.c"
        var $9=$x; //@line 767 "mathmodule.c"
        var $10=($9) == -1; //@line 767 "mathmodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 767 "mathmodule.c"
      case 3: // $bb2
        var $11=$y; //@line 767 "mathmodule.c"
        var $12=($11) == -1; //@line 767 "mathmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 767 "mathmodule.c"
      case 4: // $bb3
        var $13=_PyErr_Occurred(); //@line 767 "mathmodule.c"
        var $14=($13)!=0; //@line 767 "mathmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 767 "mathmodule.c"
      case 5: // $bb4
        $0=0; //@line 768 "mathmodule.c"
        __label__ = 20; break; //@line 768 "mathmodule.c"
      case 6: // $bb5
        var $15=___errno_location(); //@line 769 "mathmodule.c"
        HEAP[$15]=0; //@line 769 "mathmodule.c"
        var $16=$func_addr; //@line 771 "mathmodule.c"
        var $17=$x; //@line 771 "mathmodule.c"
        var $18=$y; //@line 771 "mathmodule.c"
        var $19=FUNCTION_TABLE[$16]($17, $18); //@line 771 "mathmodule.c"
        $r=$19; //@line 771 "mathmodule.c"
        var $20=$r; //@line 773 "mathmodule.c"
        var $21=___isnan($20); //@line 773 "mathmodule.c"
        var $22=($21)!=0; //@line 773 "mathmodule.c"
        if ($22) { __label__ = 7; break; } else { __label__ = 11; break; } //@line 773 "mathmodule.c"
      case 7: // $bb6
        var $23=$x; //@line 774 "mathmodule.c"
        var $24=___isnan($23); //@line 774 "mathmodule.c"
        var $25=($24)!=0; //@line 774 "mathmodule.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 774 "mathmodule.c"
      case 8: // $bb7
        var $26=$y; //@line 774 "mathmodule.c"
        var $27=___isnan($26); //@line 774 "mathmodule.c"
        var $28=($27)!=0; //@line 774 "mathmodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 774 "mathmodule.c"
      case 9: // $bb8
        var $29=___errno_location(); //@line 775 "mathmodule.c"
        HEAP[$29]=33; //@line 775 "mathmodule.c"
        __label__ = 16; break; //@line 775 "mathmodule.c"
      case 10: // $bb9
        var $30=___errno_location(); //@line 777 "mathmodule.c"
        HEAP[$30]=0; //@line 777 "mathmodule.c"
        __label__ = 16; break; //@line 777 "mathmodule.c"
      case 11: // $bb11
        var $31=$r; //@line 779 "mathmodule.c"
        var $32=___isinf($31); //@line 779 "mathmodule.c"
        var $33=($32)!=0; //@line 779 "mathmodule.c"
        if ($33) { __label__ = 12; break; } else { __label__ = 16; break; } //@line 779 "mathmodule.c"
      case 12: // $bb12
        var $34=$x; //@line 780 "mathmodule.c"
        var $35=___finite($34); //@line 780 "mathmodule.c"
        var $36=($35)==0; //@line 780 "mathmodule.c"
        if ($36) { __label__ = 15; break; } else { __label__ = 13; break; } //@line 780 "mathmodule.c"
      case 13: // $bb13
        var $37=$y; //@line 780 "mathmodule.c"
        var $38=___finite($37); //@line 780 "mathmodule.c"
        var $39=($38)==0; //@line 780 "mathmodule.c"
        if ($39) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 780 "mathmodule.c"
      case 14: // $bb14
        var $40=___errno_location(); //@line 781 "mathmodule.c"
        HEAP[$40]=34; //@line 781 "mathmodule.c"
        __label__ = 16; break; //@line 781 "mathmodule.c"
      case 15: // $bb15
        var $41=___errno_location(); //@line 783 "mathmodule.c"
        HEAP[$41]=0; //@line 783 "mathmodule.c"
        __label__ = 16; break; //@line 783 "mathmodule.c"
      case 16: // $bb16
        var $42=___errno_location(); //@line 785 "mathmodule.c"
        var $43=HEAP[$42]; //@line 785 "mathmodule.c"
        var $44=($43)==0; //@line 785 "mathmodule.c"
        if ($44) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 785 "mathmodule.c"
      case 17: // $bb17
        var $45=$r; //@line 785 "mathmodule.c"
        var $46=_is_error($45); //@line 785 "mathmodule.c"
        var $47=($46)==0; //@line 785 "mathmodule.c"
        if ($47) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 785 "mathmodule.c"
      case 18: // $bb18
        $0=0; //@line 786 "mathmodule.c"
        __label__ = 20; break; //@line 786 "mathmodule.c"
      case 19: // $bb19
        var $48=$r; //@line 788 "mathmodule.c"
        var $49=_PyFloat_FromDouble($48); //@line 788 "mathmodule.c"
        $0=$49; //@line 788 "mathmodule.c"
        __label__ = 20; break; //@line 788 "mathmodule.c"
      case 20: // $bb20
        var $50=$0; //@line 764 "mathmodule.c"
        $retval=$50; //@line 764 "mathmodule.c"
        var $retval21=$retval; //@line 764 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval21; //@line 764 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_acos($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 809 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 2), 0); //@line 809 "mathmodule.c"
    $0=$2; //@line 809 "mathmodule.c"
    var $3=$0; //@line 809 "mathmodule.c"
    $retval=$3; //@line 809 "mathmodule.c"
    var $retval1=$retval; //@line 809 "mathmodule.c"
    ;
    return $retval1; //@line 809 "mathmodule.c"
  }
  

  function _math_acosh($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 811 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 4), 0); //@line 811 "mathmodule.c"
    $0=$2; //@line 811 "mathmodule.c"
    var $3=$0; //@line 811 "mathmodule.c"
    $retval=$3; //@line 811 "mathmodule.c"
    var $retval1=$retval; //@line 811 "mathmodule.c"
    ;
    return $retval1; //@line 811 "mathmodule.c"
  }
  

  function _math_asin($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 813 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 6), 0); //@line 813 "mathmodule.c"
    $0=$2; //@line 813 "mathmodule.c"
    var $3=$0; //@line 813 "mathmodule.c"
    $retval=$3; //@line 813 "mathmodule.c"
    var $retval1=$retval; //@line 813 "mathmodule.c"
    ;
    return $retval1; //@line 813 "mathmodule.c"
  }
  

  function _math_asinh($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 815 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 8), 0); //@line 815 "mathmodule.c"
    $0=$2; //@line 815 "mathmodule.c"
    var $3=$0; //@line 815 "mathmodule.c"
    $retval=$3; //@line 815 "mathmodule.c"
    var $retval1=$retval; //@line 815 "mathmodule.c"
    ;
    return $retval1; //@line 815 "mathmodule.c"
  }
  

  function _math_atan($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 817 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 10), 0); //@line 817 "mathmodule.c"
    $0=$2; //@line 817 "mathmodule.c"
    var $3=$0; //@line 817 "mathmodule.c"
    $retval=$3; //@line 817 "mathmodule.c"
    var $retval1=$retval; //@line 817 "mathmodule.c"
    ;
    return $retval1; //@line 817 "mathmodule.c"
  }
  

  function _math_atan2($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 819 "mathmodule.c"
    var $2=_math_2($1, (FUNCTION_TABLE_OFFSET + 12), __str8); //@line 819 "mathmodule.c"
    $0=$2; //@line 819 "mathmodule.c"
    var $3=$0; //@line 819 "mathmodule.c"
    $retval=$3; //@line 819 "mathmodule.c"
    var $retval1=$retval; //@line 819 "mathmodule.c"
    ;
    return $retval1; //@line 819 "mathmodule.c"
  }
  

  function _math_atanh($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 822 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 14), 0); //@line 822 "mathmodule.c"
    $0=$2; //@line 822 "mathmodule.c"
    var $3=$0; //@line 822 "mathmodule.c"
    $retval=$3; //@line 822 "mathmodule.c"
    var $retval1=$retval; //@line 822 "mathmodule.c"
    ;
    return $retval1; //@line 822 "mathmodule.c"
  }
  

  function _math_ceil($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 824 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 16), 0); //@line 824 "mathmodule.c"
    $0=$2; //@line 824 "mathmodule.c"
    var $3=$0; //@line 824 "mathmodule.c"
    $retval=$3; //@line 824 "mathmodule.c"
    var $retval1=$retval; //@line 824 "mathmodule.c"
    ;
    return $retval1; //@line 824 "mathmodule.c"
  }
  

  function _math_copysign($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 827 "mathmodule.c"
    var $2=_math_2($1, (FUNCTION_TABLE_OFFSET + 18), __str9); //@line 827 "mathmodule.c"
    $0=$2; //@line 827 "mathmodule.c"
    var $3=$0; //@line 827 "mathmodule.c"
    $retval=$3; //@line 827 "mathmodule.c"
    var $retval1=$retval; //@line 827 "mathmodule.c"
    ;
    return $retval1; //@line 827 "mathmodule.c"
  }
  

  function _math_cos($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 829 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 20), 0); //@line 829 "mathmodule.c"
    $0=$2; //@line 829 "mathmodule.c"
    var $3=$0; //@line 829 "mathmodule.c"
    $retval=$3; //@line 829 "mathmodule.c"
    var $retval1=$retval; //@line 829 "mathmodule.c"
    ;
    return $retval1; //@line 829 "mathmodule.c"
  }
  

  function _math_cosh($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 831 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 22), 1); //@line 831 "mathmodule.c"
    $0=$2; //@line 831 "mathmodule.c"
    var $3=$0; //@line 831 "mathmodule.c"
    $retval=$3; //@line 831 "mathmodule.c"
    var $retval1=$retval; //@line 831 "mathmodule.c"
    ;
    return $retval1; //@line 831 "mathmodule.c"
  }
  

  function _math_erf($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 833 "mathmodule.c"
    var $2=_math_1a($1, (FUNCTION_TABLE_OFFSET + 24)); //@line 833 "mathmodule.c"
    $0=$2; //@line 833 "mathmodule.c"
    var $3=$0; //@line 833 "mathmodule.c"
    $retval=$3; //@line 833 "mathmodule.c"
    var $retval1=$retval; //@line 833 "mathmodule.c"
    ;
    return $retval1; //@line 833 "mathmodule.c"
  }
  

  function _math_erfc($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 835 "mathmodule.c"
    var $2=_math_1a($1, (FUNCTION_TABLE_OFFSET + 26)); //@line 835 "mathmodule.c"
    $0=$2; //@line 835 "mathmodule.c"
    var $3=$0; //@line 835 "mathmodule.c"
    $retval=$3; //@line 835 "mathmodule.c"
    var $retval1=$retval; //@line 835 "mathmodule.c"
    ;
    return $retval1; //@line 835 "mathmodule.c"
  }
  

  function _math_exp($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 837 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 28), 1); //@line 837 "mathmodule.c"
    $0=$2; //@line 837 "mathmodule.c"
    var $3=$0; //@line 837 "mathmodule.c"
    $retval=$3; //@line 837 "mathmodule.c"
    var $retval1=$retval; //@line 837 "mathmodule.c"
    ;
    return $retval1; //@line 837 "mathmodule.c"
  }
  

  function _math_expm1($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 839 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 30), 1); //@line 839 "mathmodule.c"
    $0=$2; //@line 839 "mathmodule.c"
    var $3=$0; //@line 839 "mathmodule.c"
    $retval=$3; //@line 839 "mathmodule.c"
    var $retval1=$retval; //@line 839 "mathmodule.c"
    ;
    return $retval1; //@line 839 "mathmodule.c"
  }
  

  function _math_fabs($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 843 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 32), 0); //@line 843 "mathmodule.c"
    $0=$2; //@line 843 "mathmodule.c"
    var $3=$0; //@line 843 "mathmodule.c"
    $retval=$3; //@line 843 "mathmodule.c"
    var $retval1=$retval; //@line 843 "mathmodule.c"
    ;
    return $retval1; //@line 843 "mathmodule.c"
  }
  

  function _math_floor($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 845 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 34), 0); //@line 845 "mathmodule.c"
    $0=$2; //@line 845 "mathmodule.c"
    var $3=$0; //@line 845 "mathmodule.c"
    $retval=$3; //@line 845 "mathmodule.c"
    var $retval1=$retval; //@line 845 "mathmodule.c"
    ;
    return $retval1; //@line 845 "mathmodule.c"
  }
  

  function _math_gamma($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 848 "mathmodule.c"
    var $2=_math_1a($1, (FUNCTION_TABLE_OFFSET + 36)); //@line 848 "mathmodule.c"
    $0=$2; //@line 848 "mathmodule.c"
    var $3=$0; //@line 848 "mathmodule.c"
    $retval=$3; //@line 848 "mathmodule.c"
    var $retval1=$retval; //@line 848 "mathmodule.c"
    ;
    return $retval1; //@line 848 "mathmodule.c"
  }
  

  function _math_lgamma($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 850 "mathmodule.c"
    var $2=_math_1a($1, (FUNCTION_TABLE_OFFSET + 38)); //@line 850 "mathmodule.c"
    $0=$2; //@line 850 "mathmodule.c"
    var $3=$0; //@line 850 "mathmodule.c"
    $retval=$3; //@line 850 "mathmodule.c"
    var $retval1=$retval; //@line 850 "mathmodule.c"
    ;
    return $retval1; //@line 850 "mathmodule.c"
  }
  

  function _math_log1p($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 852 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 40), 1); //@line 852 "mathmodule.c"
    $0=$2; //@line 852 "mathmodule.c"
    var $3=$0; //@line 852 "mathmodule.c"
    $retval=$3; //@line 852 "mathmodule.c"
    var $retval1=$retval; //@line 852 "mathmodule.c"
    ;
    return $retval1; //@line 852 "mathmodule.c"
  }
  

  function _math_sin($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 855 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 42), 0); //@line 855 "mathmodule.c"
    $0=$2; //@line 855 "mathmodule.c"
    var $3=$0; //@line 855 "mathmodule.c"
    $retval=$3; //@line 855 "mathmodule.c"
    var $retval1=$retval; //@line 855 "mathmodule.c"
    ;
    return $retval1; //@line 855 "mathmodule.c"
  }
  

  function _math_sinh($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 857 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 44), 1); //@line 857 "mathmodule.c"
    $0=$2; //@line 857 "mathmodule.c"
    var $3=$0; //@line 857 "mathmodule.c"
    $retval=$3; //@line 857 "mathmodule.c"
    var $retval1=$retval; //@line 857 "mathmodule.c"
    ;
    return $retval1; //@line 857 "mathmodule.c"
  }
  

  function _math_sqrt($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 859 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 46), 0); //@line 859 "mathmodule.c"
    $0=$2; //@line 859 "mathmodule.c"
    var $3=$0; //@line 859 "mathmodule.c"
    $retval=$3; //@line 859 "mathmodule.c"
    var $retval1=$retval; //@line 859 "mathmodule.c"
    ;
    return $retval1; //@line 859 "mathmodule.c"
  }
  

  function _math_tan($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 861 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 48), 0); //@line 861 "mathmodule.c"
    $0=$2; //@line 861 "mathmodule.c"
    var $3=$0; //@line 861 "mathmodule.c"
    $retval=$3; //@line 861 "mathmodule.c"
    var $retval1=$retval; //@line 861 "mathmodule.c"
    ;
    return $retval1; //@line 861 "mathmodule.c"
  }
  

  function _math_tanh($self, $args) {
    ;
    var __label__;
  
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $args_addr=$args;
    var $1=$args_addr; //@line 863 "mathmodule.c"
    var $2=_math_1($1, (FUNCTION_TABLE_OFFSET + 50), 0); //@line 863 "mathmodule.c"
    $0=$2; //@line 863 "mathmodule.c"
    var $3=$0; //@line 863 "mathmodule.c"
    $retval=$3; //@line 863 "mathmodule.c"
    var $retval1=$retval; //@line 863 "mathmodule.c"
    ;
    return $retval1; //@line 863 "mathmodule.c"
  }
  

  function __fsum_realloc($p_ptr, $n, $ps, $m_ptr) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $p_ptr_addr;
        var $n_addr;
        var $ps_addr;
        var $m_ptr_addr;
        var $retval;
        var $0;
        var $v;
        var $m;
        var $p;
        $p_ptr_addr=$p_ptr;
        $n_addr=$n;
        $ps_addr=$ps;
        $m_ptr_addr=$m_ptr;
        $v=0; //@line 909 "mathmodule.c"
        var $1=$m_ptr_addr; //@line 910 "mathmodule.c"
        var $2=HEAP[$1]; //@line 910 "mathmodule.c"
        $m=$2; //@line 910 "mathmodule.c"
        var $3=$m; //@line 912 "mathmodule.c"
        var $4=$m; //@line 912 "mathmodule.c"
        var $5=($4) + ($3); //@line 912 "mathmodule.c"
        $m=$5; //@line 912 "mathmodule.c"
        var $6=$n_addr; //@line 913 "mathmodule.c"
        var $7=$m; //@line 913 "mathmodule.c"
        var $8=($6) < ($7); //@line 913 "mathmodule.c"
        var $9=$m; //@line 913 "mathmodule.c"
        var $10=($9) <= 268435454; //@line 913 "mathmodule.c"
        var $or_cond=($8) & ($10);
        if ($or_cond) { __label__ = 1; break; } else { __label__ = 5; break; } //@line 913 "mathmodule.c"
      case 1: // $bb1
        var $11=$p_ptr_addr; //@line 914 "mathmodule.c"
        var $12=HEAP[$11]; //@line 914 "mathmodule.c"
        $p=$12; //@line 914 "mathmodule.c"
        var $13=$p; //@line 915 "mathmodule.c"
        var $14=$ps_addr; //@line 915 "mathmodule.c"
        var $15=($13)==($14); //@line 915 "mathmodule.c"
        var $16=$m; //@line 916 "mathmodule.c"
        var $17=($16) * 8; //@line 916 "mathmodule.c"
        if ($15) { __label__ = 2; break; } else { __label__ = 4; break; } //@line 915 "mathmodule.c"
      case 2: // $bb2
        var $18=_PyMem_Malloc($17); //@line 916 "mathmodule.c"
        $v=$18; //@line 916 "mathmodule.c"
        var $19=$v; //@line 917 "mathmodule.c"
        var $20=($19)!=0; //@line 917 "mathmodule.c"
        if ($20) { __label__ = 3; break; } else { __label__ = 7; break; } //@line 917 "mathmodule.c"
      case 3: // $bb3
        var $21=$n_addr; //@line 918 "mathmodule.c"
        var $22=($21) * 8; //@line 918 "mathmodule.c"
        var $23=$v; //@line 918 "mathmodule.c"
        var $24=$ps_addr; //@line 918 "mathmodule.c"
        var $25=$24; //@line 918 "mathmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($23, $25, $22, 1, 0); //@line 918 "mathmodule.c"
        __label__ = 5; break; //@line 918 "mathmodule.c"
      case 4: // $bb5
        var $26=$p; //@line 921 "mathmodule.c"
        var $27=$26; //@line 921 "mathmodule.c"
        var $28=_PyMem_Realloc($27, $17); //@line 921 "mathmodule.c"
        $v=$28; //@line 921 "mathmodule.c"
        __lastLabel__ = 4; __label__ = 6; break; //@line 921 "mathmodule.c"
      case 5: // $bb6thread_pre_split
        var $_pr=$v;
        __lastLabel__ = 5; __label__ = 6; break;
      case 6: // $bb6
        var $29=__lastLabel__ == 5 ? $_pr : ($28);
        var $30=($29)==0; //@line 923 "mathmodule.c"
        if ($30) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 923 "mathmodule.c"
      case 7: // $bb7
        var $31=HEAP[_PyExc_MemoryError]; //@line 924 "mathmodule.c"
        _PyErr_SetString($31, __str10); //@line 924 "mathmodule.c"
        $0=1; //@line 925 "mathmodule.c"
        __label__ = 9; break; //@line 925 "mathmodule.c"
      case 8: // $bb8
        var $32=$v; //@line 927 "mathmodule.c"
        var $33=$32; //@line 927 "mathmodule.c"
        var $34=$p_ptr_addr; //@line 927 "mathmodule.c"
        HEAP[$34]=$33; //@line 927 "mathmodule.c"
        var $35=$m_ptr_addr; //@line 928 "mathmodule.c"
        var $36=$m; //@line 928 "mathmodule.c"
        HEAP[$35]=$36; //@line 928 "mathmodule.c"
        $0=0; //@line 929 "mathmodule.c"
        __label__ = 9; break; //@line 929 "mathmodule.c"
      case 9: // $bb9
        var $37=$0; //@line 925 "mathmodule.c"
        $retval=$37; //@line 925 "mathmodule.c"
        var $retval10=$retval; //@line 925 "mathmodule.c"
        ;
        return $retval10; //@line 925 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_fsum($self, $seq) {
    var __stackBase__  = STACKTOP; STACKTOP += 264; _memset(__stackBase__, 0, 264);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $seq_addr;
        var $retval;
        var $0;
        var $item;
        var $iter;
        var $sum;
        var $i;
        var $j;
        var $n;
        var $m=__stackBase__;
        var $x;
        var $y;
        var $t;
        var $ps=__stackBase__+4;
        var $p=__stackBase__+260;
        var $xsave;
        var $special_sum;
        var $inf_sum;
        var $hi;
        var $yr;
        var $lo;
        $self_addr=$self;
        $seq_addr=$seq;
        $sum=0; //@line 965 "mathmodule.c"
        $n=0; //@line 966 "mathmodule.c"
        HEAP[$m]=32; //@line 966 "mathmodule.c"
        var $ps1=$ps; //@line 967 "mathmodule.c"
        HEAP[$p]=$ps1; //@line 967 "mathmodule.c"
        $special_sum=0; //@line 968 "mathmodule.c"
        $inf_sum=0; //@line 968 "mathmodule.c"
        var $1=$seq_addr; //@line 971 "mathmodule.c"
        var $2=_PyObject_GetIter($1); //@line 971 "mathmodule.c"
        $iter=$2; //@line 971 "mathmodule.c"
        var $3=$iter; //@line 972 "mathmodule.c"
        var $4=($3)==0; //@line 972 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 972 "mathmodule.c"
      case 1: // $bb
        $0=0; //@line 973 "mathmodule.c"
        __label__ = 57; break; //@line 973 "mathmodule.c"
      case 2: // $bb2thread_pre_split
        var $_pr=$n;
        var $ps33=$ps; //@line 1025 "mathmodule.c"
        var $ps7=$ps; //@line 979 "mathmodule.c"
        __lastLabel__ = 2; __label__ = 3; break;
      case 3: // $bb2
        var $5=__lastLabel__ == 2 ? $_pr : (__lastLabel__ == 24 ? $85 : (__lastLabel__ == 30 ? 0 : ($115)));
        var $6=($5) < 0; //@line 978 "mathmodule.c"
        if ($6) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 978 "mathmodule.c"
      case 4: // $bb3
        var $7=HEAP[$m]; //@line 978 "mathmodule.c"
        var $8=$n; //@line 978 "mathmodule.c"
        var $9=($8) > ($7); //@line 978 "mathmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 978 "mathmodule.c"
      case 5: // $bb4
        ___assert_fail(__str11, __str1, 978, ___PRETTY_FUNCTION___9121); //@line 978 "mathmodule.c"
        throw "Reached an unreachable!" //@line 978 "mathmodule.c"
      case 6: // $bb5
        var $10=HEAP[$m]; //@line 979 "mathmodule.c"
        var $11=($10)!=32; //@line 979 "mathmodule.c"
        if ($11) { __lastLabel__ = 6; __label__ = 9; break; } else { __lastLabel__ = 6; __label__ = 7; break; } //@line 979 "mathmodule.c"
      case 7: // $bb6
        var $12=HEAP[$p]; //@line 979 "mathmodule.c"
        var $13=($ps7)!=($12); //@line 979 "mathmodule.c"
        if ($13) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 979 "mathmodule.c"
      case 8: // $bb8thread_pre_split
        var $_pr1=HEAP[$m];
        __lastLabel__ = 8; __label__ = 9; break;
      case 9: // $bb8
        var $14=__lastLabel__ == 8 ? $_pr1 : ($10);
        var $15=($14) <= 32; //@line 979 "mathmodule.c"
        if ($15) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 979 "mathmodule.c"
      case 10: // $bb9
        var $16=HEAP[$p]; //@line 979 "mathmodule.c"
        var $17=($16)==0; //@line 979 "mathmodule.c"
        if ($17) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 979 "mathmodule.c"
      case 11: // $bb10
        ___assert_fail(__str12, __str1, 980, ___PRETTY_FUNCTION___9121); //@line 979 "mathmodule.c"
        throw "Reached an unreachable!" //@line 979 "mathmodule.c"
      case 12: // $bb11
        var $18=$iter; //@line 982 "mathmodule.c"
        var $19=_PyIter_Next($18); //@line 982 "mathmodule.c"
        $item=$19; //@line 982 "mathmodule.c"
        var $20=($19)==0; //@line 983 "mathmodule.c"
        if ($20) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 983 "mathmodule.c"
      case 13: // $bb12
        var $21=_PyErr_Occurred(); //@line 984 "mathmodule.c"
        var $22=($21)!=0; //@line 984 "mathmodule.c"
        if ($22) { __label__ = 52; break; } else { __label__ = 14; break; } //@line 984 "mathmodule.c"
      case 14: // $bb13
        var $23=$special_sum; //@line 1032 "mathmodule.c"
        var $24=($23) != 0; //@line 1032 "mathmodule.c"
        if ($24) { __label__ = 34; break; } else { __label__ = 37; break; } //@line 1032 "mathmodule.c"
      case 15: // $bb14
        var $25=$item; //@line 988 "mathmodule.c"
        var $26=_PyFloat_AsDouble($25); //@line 988 "mathmodule.c"
        $x=$26; //@line 988 "mathmodule.c"
        var $27=$item; //@line 989 "mathmodule.c"
        var $28=$27; //@line 989 "mathmodule.c"
        var $29=HEAP[$28]; //@line 989 "mathmodule.c"
        var $30=($29) - 1; //@line 989 "mathmodule.c"
        var $31=$item; //@line 989 "mathmodule.c"
        var $32=$31; //@line 989 "mathmodule.c"
        HEAP[$32]=$30; //@line 989 "mathmodule.c"
        var $33=$item; //@line 989 "mathmodule.c"
        var $34=$33; //@line 989 "mathmodule.c"
        var $35=HEAP[$34]; //@line 989 "mathmodule.c"
        var $36=($35)==0; //@line 989 "mathmodule.c"
        if ($36) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 989 "mathmodule.c"
      case 16: // $bb15
        var $37=$item; //@line 989 "mathmodule.c"
        var $38=$37+4; //@line 989 "mathmodule.c"
        var $39=HEAP[$38]; //@line 989 "mathmodule.c"
        var $40=$39+24; //@line 989 "mathmodule.c"
        var $41=HEAP[$40]; //@line 989 "mathmodule.c"
        var $42=$item; //@line 989 "mathmodule.c"
        FUNCTION_TABLE[$41]($42); //@line 989 "mathmodule.c"
        __label__ = 17; break; //@line 989 "mathmodule.c"
      case 17: // $bb16
        var $43=_PyErr_Occurred(); //@line 990 "mathmodule.c"
        var $44=($43)!=0; //@line 990 "mathmodule.c"
        if ($44) { __label__ = 52; break; } else { __label__ = 18; break; } //@line 990 "mathmodule.c"
      case 18: // $bb17
        var $45=$x; //@line 993 "mathmodule.c"
        $xsave=$45; //@line 993 "mathmodule.c"
        $j=0; //@line 994 "mathmodule.c"
        var $46=$j; //@line 994 "mathmodule.c"
        $i=$46; //@line 994 "mathmodule.c"
        var $47=$j; //@line 994 "mathmodule.c"
        var $48=$n; //@line 994 "mathmodule.c"
        var $49=($47) < ($48); //@line 994 "mathmodule.c"
        if ($49) { __label__ = 19; break; } else { __label__ = 24; break; } //@line 994 "mathmodule.c"
      case 19: // $bb18
        var $50=HEAP[$p]; //@line 995 "mathmodule.c"
        var $51=$j; //@line 995 "mathmodule.c"
        var $52=$50+8*$51; //@line 995 "mathmodule.c"
        var $53=HEAP[$52]; //@line 995 "mathmodule.c"
        $y=$53; //@line 995 "mathmodule.c"
        var $54=$x; //@line 996 "mathmodule.c"
        var $55=_fabs($54); //@line 996 "mathmodule.c"
        var $56=$y; //@line 996 "mathmodule.c"
        var $57=_fabs($56); //@line 996 "mathmodule.c"
        var $58=($55) < ($57); //@line 996 "mathmodule.c"
        if ($58) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 996 "mathmodule.c"
      case 20: // $bb19
        var $59=$x; //@line 997 "mathmodule.c"
        $t=$59; //@line 997 "mathmodule.c"
        var $60=$y; //@line 997 "mathmodule.c"
        $x=$60; //@line 997 "mathmodule.c"
        var $61=$t; //@line 997 "mathmodule.c"
        $y=$61; //@line 997 "mathmodule.c"
        __label__ = 21; break; //@line 997 "mathmodule.c"
      case 21: // $bb20
        var $62=$x; //@line 999 "mathmodule.c"
        var $63=$y; //@line 999 "mathmodule.c"
        var $64=($62) + ($63); //@line 999 "mathmodule.c"
        $hi=$64; //@line 999 "mathmodule.c"
        var $65=$hi; //@line 1000 "mathmodule.c"
        var $66=$x; //@line 1000 "mathmodule.c"
        var $67=($65) - ($66); //@line 1000 "mathmodule.c"
        $yr=$67; //@line 1000 "mathmodule.c"
        var $68=$yr; //@line 1001 "mathmodule.c"
        var $69=$y; //@line 1001 "mathmodule.c"
        var $70=($69) - ($68); //@line 1001 "mathmodule.c"
        $lo=$70; //@line 1001 "mathmodule.c"
        var $71=$lo; //@line 1002 "mathmodule.c"
        var $72=($71) != 0; //@line 1002 "mathmodule.c"
        if ($72) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1002 "mathmodule.c"
      case 22: // $bb21
        var $73=HEAP[$p]; //@line 1003 "mathmodule.c"
        var $74=$lo; //@line 1003 "mathmodule.c"
        var $75=$i; //@line 1003 "mathmodule.c"
        var $76=$73+8*$75; //@line 1003 "mathmodule.c"
        HEAP[$76]=$74; //@line 1003 "mathmodule.c"
        var $77=$i; //@line 1003 "mathmodule.c"
        var $78=($77) + 1; //@line 1003 "mathmodule.c"
        $i=$78; //@line 1003 "mathmodule.c"
        __label__ = 23; break; //@line 1003 "mathmodule.c"
      case 23: // $bb22
        var $79=$hi; //@line 1004 "mathmodule.c"
        $x=$79; //@line 1004 "mathmodule.c"
        var $80=$j; //@line 994 "mathmodule.c"
        var $81=($80) + 1; //@line 994 "mathmodule.c"
        $j=$81; //@line 994 "mathmodule.c"
        var $82=$j; //@line 994 "mathmodule.c"
        var $83=$n; //@line 994 "mathmodule.c"
        var $84=($82) < ($83); //@line 994 "mathmodule.c"
        if ($84) { __label__ = 19; break; } else { __label__ = 24; break; } //@line 994 "mathmodule.c"
      case 24: // $bb24
        var $85=$i; //@line 1007 "mathmodule.c"
        $n=$85; //@line 1007 "mathmodule.c"
        var $86=$x; //@line 1008 "mathmodule.c"
        var $87=($86) != 0; //@line 1008 "mathmodule.c"
        if ($87) { __lastLabel__ = 24; __label__ = 25; break; } else { __lastLabel__ = 24; __label__ = 3; break; } //@line 1008 "mathmodule.c"
      case 25: // $bb25
        var $88=$x; //@line 1009 "mathmodule.c"
        var $89=___finite($88); //@line 1009 "mathmodule.c"
        var $90=($89)==0; //@line 1009 "mathmodule.c"
        if ($90) { __label__ = 26; break; } else { __label__ = 31; break; } //@line 1009 "mathmodule.c"
      case 26: // $bb26
        var $91=$xsave; //@line 1014 "mathmodule.c"
        var $92=___finite($91); //@line 1014 "mathmodule.c"
        var $93=($92)!=0; //@line 1014 "mathmodule.c"
        if ($93) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 1014 "mathmodule.c"
      case 27: // $bb27
        var $94=HEAP[_PyExc_OverflowError]; //@line 1015 "mathmodule.c"
        _PyErr_SetString($94, __str13); //@line 1015 "mathmodule.c"
        __label__ = 52; break; //@line 1015 "mathmodule.c"
      case 28: // $bb28
        var $95=$xsave; //@line 1019 "mathmodule.c"
        var $96=___isinf($95); //@line 1019 "mathmodule.c"
        var $97=($96)!=0; //@line 1019 "mathmodule.c"
        if ($97) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1019 "mathmodule.c"
      case 29: // $bb29
        var $98=$inf_sum; //@line 1020 "mathmodule.c"
        var $99=$xsave; //@line 1020 "mathmodule.c"
        var $100=($98) + ($99); //@line 1020 "mathmodule.c"
        $inf_sum=$100; //@line 1020 "mathmodule.c"
        __label__ = 30; break; //@line 1020 "mathmodule.c"
      case 30: // $bb30
        var $101=$special_sum; //@line 1021 "mathmodule.c"
        var $102=$xsave; //@line 1021 "mathmodule.c"
        var $103=($101) + ($102); //@line 1021 "mathmodule.c"
        $special_sum=$103; //@line 1021 "mathmodule.c"
        $n=0; //@line 1023 "mathmodule.c"
        __lastLabel__ = 30; __label__ = 3; break; //@line 1023 "mathmodule.c"
      case 31: // $bb31
        var $104=HEAP[$m]; //@line 1025 "mathmodule.c"
        var $105=$n; //@line 1025 "mathmodule.c"
        var $106=($105) < ($104); //@line 1025 "mathmodule.c"
        if ($106) { __label__ = 33; break; } else { __label__ = 32; break; } //@line 1025 "mathmodule.c"
      case 32: // $bb32
        var $107=$n; //@line 1025 "mathmodule.c"
        var $108=__fsum_realloc($p, $107, $ps33, $m); //@line 1025 "mathmodule.c"
        var $109=($108)!=0; //@line 1025 "mathmodule.c"
        if ($109) { __label__ = 52; break; } else { __label__ = 33; break; } //@line 1025 "mathmodule.c"
      case 33: // $bb34
        var $110=HEAP[$p]; //@line 1028 "mathmodule.c"
        var $111=$n; //@line 1028 "mathmodule.c"
        var $112=$110+8*$111; //@line 1028 "mathmodule.c"
        var $113=$x; //@line 1028 "mathmodule.c"
        HEAP[$112]=$113; //@line 1028 "mathmodule.c"
        var $114=$n; //@line 1028 "mathmodule.c"
        var $115=($114) + 1; //@line 1028 "mathmodule.c"
        $n=$115; //@line 1028 "mathmodule.c"
        __lastLabel__ = 33; __label__ = 3; break; //@line 1028 "mathmodule.c"
      case 34: // $bb36
        var $116=$inf_sum; //@line 1033 "mathmodule.c"
        var $117=___isnan($116); //@line 1033 "mathmodule.c"
        var $118=($117)!=0; //@line 1033 "mathmodule.c"
        if ($118) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1033 "mathmodule.c"
      case 35: // $bb37
        var $119=HEAP[_PyExc_ValueError]; //@line 1034 "mathmodule.c"
        _PyErr_SetString($119, __str14); //@line 1034 "mathmodule.c"
        __label__ = 52; break; //@line 1034 "mathmodule.c"
      case 36: // $bb38
        var $120=$special_sum; //@line 1037 "mathmodule.c"
        var $121=_PyFloat_FromDouble($120); //@line 1037 "mathmodule.c"
        $sum=$121; //@line 1037 "mathmodule.c"
        __label__ = 52; break; //@line 1037 "mathmodule.c"
      case 37: // $bb40
        $hi=0; //@line 1041 "mathmodule.c"
        var $122=$n; //@line 1042 "mathmodule.c"
        var $123=($122) > 0; //@line 1042 "mathmodule.c"
        if ($123) { __label__ = 38; break; } else { __label__ = 51; break; } //@line 1042 "mathmodule.c"
      case 38: // $bb41
        var $124=HEAP[$p]; //@line 1043 "mathmodule.c"
        var $125=$n; //@line 1043 "mathmodule.c"
        var $126=($125) - 1; //@line 1043 "mathmodule.c"
        $n=$126; //@line 1043 "mathmodule.c"
        var $127=$n; //@line 1043 "mathmodule.c"
        var $128=$124+8*$127; //@line 1043 "mathmodule.c"
        var $129=HEAP[$128]; //@line 1043 "mathmodule.c"
        $hi=$129; //@line 1043 "mathmodule.c"
        __lastLabel__ = 38; __label__ = 43; break; //@line 1043 "mathmodule.c"
      case 39: // $bb42
        var $130=$hi; //@line 1047 "mathmodule.c"
        $x=$130; //@line 1047 "mathmodule.c"
        var $131=HEAP[$p]; //@line 1048 "mathmodule.c"
        var $132=$n; //@line 1048 "mathmodule.c"
        var $133=($132) - 1; //@line 1048 "mathmodule.c"
        $n=$133; //@line 1048 "mathmodule.c"
        var $134=$n; //@line 1048 "mathmodule.c"
        var $135=$131+8*$134; //@line 1048 "mathmodule.c"
        var $136=HEAP[$135]; //@line 1048 "mathmodule.c"
        $y=$136; //@line 1048 "mathmodule.c"
        var $137=$y; //@line 1049 "mathmodule.c"
        var $138=_fabs($137); //@line 1049 "mathmodule.c"
        var $139=$x; //@line 1049 "mathmodule.c"
        var $140=_fabs($139); //@line 1049 "mathmodule.c"
        var $141=($138) >= ($140); //@line 1049 "mathmodule.c"
        if ($141) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 1049 "mathmodule.c"
      case 40: // $bb43
        ___assert_fail(__str15, __str1, 1049, ___PRETTY_FUNCTION___9121); //@line 1049 "mathmodule.c"
        throw "Reached an unreachable!" //@line 1049 "mathmodule.c"
      case 41: // $bb44
        var $142=$x; //@line 1050 "mathmodule.c"
        var $143=$y; //@line 1050 "mathmodule.c"
        var $144=($142) + ($143); //@line 1050 "mathmodule.c"
        $hi=$144; //@line 1050 "mathmodule.c"
        var $145=$hi; //@line 1051 "mathmodule.c"
        var $146=$x; //@line 1051 "mathmodule.c"
        var $147=($145) - ($146); //@line 1051 "mathmodule.c"
        $yr=$147; //@line 1051 "mathmodule.c"
        var $148=$yr; //@line 1052 "mathmodule.c"
        var $149=$y; //@line 1052 "mathmodule.c"
        var $150=($149) - ($148); //@line 1052 "mathmodule.c"
        $lo=$150; //@line 1052 "mathmodule.c"
        var $151=$lo; //@line 1053 "mathmodule.c"
        var $152=($151) != 0; //@line 1053 "mathmodule.c"
        if ($152) { __label__ = 44; break; } else { __label__ = 42; break; } //@line 1053 "mathmodule.c"
      case 42: // $bb45thread_pre_split
        var $_pr2=$n;
        __lastLabel__ = 42; __label__ = 43; break;
      case 43: // $bb45
        var $153=__lastLabel__ == 42 ? $_pr2 : ($127);
        var $154=($153) > 0; //@line 1046 "mathmodule.c"
        if ($154) { __label__ = 39; break; } else { __label__ = 44; break; } //@line 1046 "mathmodule.c"
      case 44: // $bb46
        var $155=$n; //@line 1061 "mathmodule.c"
        var $156=($155) > 0; //@line 1061 "mathmodule.c"
        if ($156) { __label__ = 45; break; } else { __label__ = 51; break; } //@line 1061 "mathmodule.c"
      case 45: // $bb47
        var $157=$lo; //@line 1061 "mathmodule.c"
        var $158=($157) >= 0; //@line 1061 "mathmodule.c"
        if ($158) { __label__ = 47; break; } else { __label__ = 46; break; } //@line 1061 "mathmodule.c"
      case 46: // $bb48
        var $159=HEAP[$p]; //@line 1061 "mathmodule.c"
        var $160=$n; //@line 1061 "mathmodule.c"
        var $161=($160) - 1; //@line 1061 "mathmodule.c"
        var $162=$159+8*$161; //@line 1061 "mathmodule.c"
        var $163=HEAP[$162]; //@line 1061 "mathmodule.c"
        var $164=($163) < 0; //@line 1061 "mathmodule.c"
        if ($164) { __label__ = 49; break; } else { __label__ = 47; break; } //@line 1061 "mathmodule.c"
      case 47: // $bb49
        var $165=$lo; //@line 1061 "mathmodule.c"
        var $166=($165) <= 0; //@line 1061 "mathmodule.c"
        if ($166) { __label__ = 51; break; } else { __label__ = 48; break; } //@line 1061 "mathmodule.c"
      case 48: // $bb50
        var $167=HEAP[$p]; //@line 1061 "mathmodule.c"
        var $168=$n; //@line 1061 "mathmodule.c"
        var $169=($168) - 1; //@line 1061 "mathmodule.c"
        var $170=$167+8*$169; //@line 1061 "mathmodule.c"
        var $171=HEAP[$170]; //@line 1061 "mathmodule.c"
        var $172=($171) > 0; //@line 1061 "mathmodule.c"
        if ($172) { __label__ = 49; break; } else { __label__ = 51; break; } //@line 1061 "mathmodule.c"
      case 49: // $bb51
        var $173=$lo; //@line 1063 "mathmodule.c"
        var $174=($173) * 2; //@line 1063 "mathmodule.c"
        $y=$174; //@line 1063 "mathmodule.c"
        var $175=$hi; //@line 1064 "mathmodule.c"
        var $176=$y; //@line 1064 "mathmodule.c"
        var $177=($175) + ($176); //@line 1064 "mathmodule.c"
        $x=$177; //@line 1064 "mathmodule.c"
        var $178=$hi; //@line 1065 "mathmodule.c"
        var $179=$x; //@line 1065 "mathmodule.c"
        var $180=($179) - ($178); //@line 1065 "mathmodule.c"
        $yr=$180; //@line 1065 "mathmodule.c"
        var $181=$yr; //@line 1066 "mathmodule.c"
        var $182=$y; //@line 1066 "mathmodule.c"
        var $183=($182) == ($181); //@line 1066 "mathmodule.c"
        if ($183) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1066 "mathmodule.c"
      case 50: // $bb52
        var $184=$x; //@line 1067 "mathmodule.c"
        $hi=$184; //@line 1067 "mathmodule.c"
        __label__ = 51; break; //@line 1067 "mathmodule.c"
      case 51: // $bb53
        var $185=$hi; //@line 1070 "mathmodule.c"
        var $186=_PyFloat_FromDouble($185); //@line 1070 "mathmodule.c"
        $sum=$186; //@line 1070 "mathmodule.c"
        __label__ = 52; break; //@line 1072 "mathmodule.c"
      case 52: // $_fsum_error
        var $187=$iter; //@line 1074 "mathmodule.c"
        var $188=$187; //@line 1074 "mathmodule.c"
        var $189=HEAP[$188]; //@line 1074 "mathmodule.c"
        var $190=($189) - 1; //@line 1074 "mathmodule.c"
        var $191=$iter; //@line 1074 "mathmodule.c"
        var $192=$191; //@line 1074 "mathmodule.c"
        HEAP[$192]=$190; //@line 1074 "mathmodule.c"
        var $193=$iter; //@line 1074 "mathmodule.c"
        var $194=$193; //@line 1074 "mathmodule.c"
        var $195=HEAP[$194]; //@line 1074 "mathmodule.c"
        var $196=($195)==0; //@line 1074 "mathmodule.c"
        if ($196) { __label__ = 53; break; } else { __label__ = 54; break; } //@line 1074 "mathmodule.c"
      case 53: // $bb54
        var $197=$iter; //@line 1074 "mathmodule.c"
        var $198=$197+4; //@line 1074 "mathmodule.c"
        var $199=HEAP[$198]; //@line 1074 "mathmodule.c"
        var $200=$199+24; //@line 1074 "mathmodule.c"
        var $201=HEAP[$200]; //@line 1074 "mathmodule.c"
        var $202=$iter; //@line 1074 "mathmodule.c"
        FUNCTION_TABLE[$201]($202); //@line 1074 "mathmodule.c"
        __label__ = 54; break; //@line 1074 "mathmodule.c"
      case 54: // $bb55
        var $203=HEAP[$p]; //@line 1075 "mathmodule.c"
        var $ps56=$ps; //@line 1075 "mathmodule.c"
        var $204=($ps56)!=($203); //@line 1075 "mathmodule.c"
        if ($204) { __label__ = 55; break; } else { __label__ = 56; break; } //@line 1075 "mathmodule.c"
      case 55: // $bb57
        var $205=HEAP[$p]; //@line 1076 "mathmodule.c"
        var $206=$205; //@line 1076 "mathmodule.c"
        _PyMem_Free($206); //@line 1076 "mathmodule.c"
        __label__ = 56; break; //@line 1076 "mathmodule.c"
      case 56: // $bb58
        var $207=$sum; //@line 1077 "mathmodule.c"
        $0=$207; //@line 1077 "mathmodule.c"
        __label__ = 57; break; //@line 1077 "mathmodule.c"
      case 57: // $bb59
        var $208=$0; //@line 973 "mathmodule.c"
        $retval=$208; //@line 973 "mathmodule.c"
        var $retval60=$retval; //@line 973 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval60; //@line 973 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_factorial($self, $arg) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $i;
        var $x;
        var $result;
        var $iobj;
        var $newresult;
        var $lx;
        var $dx;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1093 "mathmodule.c"
        var $2=$1+4; //@line 1093 "mathmodule.c"
        var $3=HEAP[$2]; //@line 1093 "mathmodule.c"
        var $4=($3)==(_PyFloat_Type); //@line 1093 "mathmodule.c"
        if ($4) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1093 "mathmodule.c"
      case 1: // $bb
        var $5=$arg_addr; //@line 1093 "mathmodule.c"
        var $6=$5+4; //@line 1093 "mathmodule.c"
        var $7=HEAP[$6]; //@line 1093 "mathmodule.c"
        var $8=_PyType_IsSubtype($7, _PyFloat_Type); //@line 1093 "mathmodule.c"
        var $9=($8)!=0; //@line 1093 "mathmodule.c"
        if ($9) { __label__ = 2; break; } else { __label__ = 9; break; } //@line 1093 "mathmodule.c"
      case 2: // $bb1
        var $10=$arg_addr; //@line 1095 "mathmodule.c"
        var $11=$10; //@line 1095 "mathmodule.c"
        var $12=$11+8; //@line 1095 "mathmodule.c"
        var $13=HEAP[$12]; //@line 1095 "mathmodule.c"
        $dx=$13; //@line 1095 "mathmodule.c"
        var $14=$dx; //@line 1096 "mathmodule.c"
        var $15=___finite($14); //@line 1096 "mathmodule.c"
        var $16=($15)==0; //@line 1096 "mathmodule.c"
        if ($16) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1096 "mathmodule.c"
      case 3: // $bb2
        var $17=$dx; //@line 1096 "mathmodule.c"
        var $18=_floor($17); //@line 1096 "mathmodule.c"
        var $19=$dx; //@line 1096 "mathmodule.c"
        var $20=($18) != ($19); //@line 1096 "mathmodule.c"
        if ($20) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1096 "mathmodule.c"
      case 4: // $bb3
        var $21=HEAP[_PyExc_ValueError]; //@line 1097 "mathmodule.c"
        _PyErr_SetString($21, __str16); //@line 1097 "mathmodule.c"
        $0=0; //@line 1099 "mathmodule.c"
        __label__ = 31; break; //@line 1099 "mathmodule.c"
      case 5: // $bb4
        var $22=$dx; //@line 1101 "mathmodule.c"
        var $23=_PyLong_FromDouble($22); //@line 1101 "mathmodule.c"
        $lx=$23; //@line 1101 "mathmodule.c"
        var $24=$lx; //@line 1102 "mathmodule.c"
        var $25=($24)==0; //@line 1102 "mathmodule.c"
        if ($25) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1102 "mathmodule.c"
      case 6: // $bb5
        $0=0; //@line 1103 "mathmodule.c"
        __label__ = 31; break; //@line 1103 "mathmodule.c"
      case 7: // $bb6
        var $26=$lx; //@line 1104 "mathmodule.c"
        var $27=_PyLong_AsLong($26); //@line 1104 "mathmodule.c"
        $x=$27; //@line 1104 "mathmodule.c"
        var $28=$lx; //@line 1105 "mathmodule.c"
        var $29=$28; //@line 1105 "mathmodule.c"
        var $30=HEAP[$29]; //@line 1105 "mathmodule.c"
        var $31=($30) - 1; //@line 1105 "mathmodule.c"
        var $32=$lx; //@line 1105 "mathmodule.c"
        var $33=$32; //@line 1105 "mathmodule.c"
        HEAP[$33]=$31; //@line 1105 "mathmodule.c"
        var $34=$lx; //@line 1105 "mathmodule.c"
        var $35=$34; //@line 1105 "mathmodule.c"
        var $36=HEAP[$35]; //@line 1105 "mathmodule.c"
        var $37=($36)==0; //@line 1105 "mathmodule.c"
        if ($37) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1105 "mathmodule.c"
      case 8: // $bb7
        var $38=$lx; //@line 1105 "mathmodule.c"
        var $39=$38+4; //@line 1105 "mathmodule.c"
        var $40=HEAP[$39]; //@line 1105 "mathmodule.c"
        var $41=$40+24; //@line 1105 "mathmodule.c"
        var $42=HEAP[$41]; //@line 1105 "mathmodule.c"
        var $43=$lx; //@line 1105 "mathmodule.c"
        FUNCTION_TABLE[$42]($43); //@line 1105 "mathmodule.c"
        __label__ = 10; break; //@line 1105 "mathmodule.c"
      case 9: // $bb9
        var $44=$arg_addr; //@line 1108 "mathmodule.c"
        var $45=_PyInt_AsLong($44); //@line 1108 "mathmodule.c"
        $x=$45; //@line 1108 "mathmodule.c"
        __lastLabel__ = 9; __label__ = 11; break; //@line 1108 "mathmodule.c"
      case 10: // $bb10thread_pre_split
        var $_pr=$x;
        __lastLabel__ = 10; __label__ = 11; break;
      case 11: // $bb10
        var $46=__lastLabel__ == 10 ? $_pr : ($45);
        var $47=($46)==-1; //@line 1110 "mathmodule.c"
        if ($47) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1110 "mathmodule.c"
      case 12: // $bb11
        var $48=_PyErr_Occurred(); //@line 1110 "mathmodule.c"
        var $49=($48)!=0; //@line 1110 "mathmodule.c"
        if ($49) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1110 "mathmodule.c"
      case 13: // $bb12
        $0=0; //@line 1111 "mathmodule.c"
        __label__ = 31; break; //@line 1111 "mathmodule.c"
      case 14: // $bb13
        var $50=$x; //@line 1112 "mathmodule.c"
        var $51=($50) < 0; //@line 1112 "mathmodule.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1112 "mathmodule.c"
      case 15: // $bb14
        var $52=HEAP[_PyExc_ValueError]; //@line 1113 "mathmodule.c"
        _PyErr_SetString($52, __str17); //@line 1113 "mathmodule.c"
        $0=0; //@line 1115 "mathmodule.c"
        __label__ = 31; break; //@line 1115 "mathmodule.c"
      case 16: // $bb15
        var $53=_PyInt_FromLong(1); //@line 1118 "mathmodule.c"
        $result=$53; //@line 1118 "mathmodule.c"
        var $54=$result; //@line 1119 "mathmodule.c"
        var $55=($54)==0; //@line 1119 "mathmodule.c"
        if ($55) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1119 "mathmodule.c"
      case 17: // $bb16
        $0=0; //@line 1120 "mathmodule.c"
        __label__ = 31; break; //@line 1120 "mathmodule.c"
      case 18: // $bb17
        $i=1; //@line 1121 "mathmodule.c"
        __label__ = 26; break; //@line 1121 "mathmodule.c"
      case 19: // $bb18
        var $56=$i; //@line 1122 "mathmodule.c"
        var $57=_PyInt_FromLong($56); //@line 1122 "mathmodule.c"
        $iobj=$57; //@line 1122 "mathmodule.c"
        var $58=$iobj; //@line 1123 "mathmodule.c"
        var $59=($58)==0; //@line 1123 "mathmodule.c"
        if ($59) { __label__ = 28; break; } else { __label__ = 20; break; } //@line 1123 "mathmodule.c"
      case 20: // $bb19
        var $60=$result; //@line 1125 "mathmodule.c"
        var $61=$iobj; //@line 1125 "mathmodule.c"
        var $62=_PyNumber_Multiply($60, $61); //@line 1125 "mathmodule.c"
        $newresult=$62; //@line 1125 "mathmodule.c"
        var $63=$iobj; //@line 1126 "mathmodule.c"
        var $64=$63; //@line 1126 "mathmodule.c"
        var $65=HEAP[$64]; //@line 1126 "mathmodule.c"
        var $66=($65) - 1; //@line 1126 "mathmodule.c"
        var $67=$iobj; //@line 1126 "mathmodule.c"
        var $68=$67; //@line 1126 "mathmodule.c"
        HEAP[$68]=$66; //@line 1126 "mathmodule.c"
        var $69=$iobj; //@line 1126 "mathmodule.c"
        var $70=$69; //@line 1126 "mathmodule.c"
        var $71=HEAP[$70]; //@line 1126 "mathmodule.c"
        var $72=($71)==0; //@line 1126 "mathmodule.c"
        if ($72) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1126 "mathmodule.c"
      case 21: // $bb20
        var $73=$iobj; //@line 1126 "mathmodule.c"
        var $74=$73+4; //@line 1126 "mathmodule.c"
        var $75=HEAP[$74]; //@line 1126 "mathmodule.c"
        var $76=$75+24; //@line 1126 "mathmodule.c"
        var $77=HEAP[$76]; //@line 1126 "mathmodule.c"
        var $78=$iobj; //@line 1126 "mathmodule.c"
        FUNCTION_TABLE[$77]($78); //@line 1126 "mathmodule.c"
        __label__ = 22; break; //@line 1126 "mathmodule.c"
      case 22: // $bb21
        var $79=$newresult; //@line 1127 "mathmodule.c"
        var $80=($79)==0; //@line 1127 "mathmodule.c"
        if ($80) { __label__ = 28; break; } else { __label__ = 23; break; } //@line 1127 "mathmodule.c"
      case 23: // $bb22
        var $81=$result; //@line 1129 "mathmodule.c"
        var $82=$81; //@line 1129 "mathmodule.c"
        var $83=HEAP[$82]; //@line 1129 "mathmodule.c"
        var $84=($83) - 1; //@line 1129 "mathmodule.c"
        var $85=$result; //@line 1129 "mathmodule.c"
        var $86=$85; //@line 1129 "mathmodule.c"
        HEAP[$86]=$84; //@line 1129 "mathmodule.c"
        var $87=$result; //@line 1129 "mathmodule.c"
        var $88=$87; //@line 1129 "mathmodule.c"
        var $89=HEAP[$88]; //@line 1129 "mathmodule.c"
        var $90=($89)==0; //@line 1129 "mathmodule.c"
        if ($90) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1129 "mathmodule.c"
      case 24: // $bb23
        var $91=$result; //@line 1129 "mathmodule.c"
        var $92=$91+4; //@line 1129 "mathmodule.c"
        var $93=HEAP[$92]; //@line 1129 "mathmodule.c"
        var $94=$93+24; //@line 1129 "mathmodule.c"
        var $95=HEAP[$94]; //@line 1129 "mathmodule.c"
        var $96=$result; //@line 1129 "mathmodule.c"
        FUNCTION_TABLE[$95]($96); //@line 1129 "mathmodule.c"
        __label__ = 25; break; //@line 1129 "mathmodule.c"
      case 25: // $bb24
        var $97=$newresult; //@line 1130 "mathmodule.c"
        $result=$97; //@line 1130 "mathmodule.c"
        var $98=$i; //@line 1121 "mathmodule.c"
        var $99=($98) + 1; //@line 1121 "mathmodule.c"
        $i=$99; //@line 1121 "mathmodule.c"
        __label__ = 26; break; //@line 1121 "mathmodule.c"
      case 26: // $bb25
        var $100=$i; //@line 1121 "mathmodule.c"
        var $101=$x; //@line 1121 "mathmodule.c"
        var $102=($100) <= ($101); //@line 1121 "mathmodule.c"
        if ($102) { __label__ = 19; break; } else { __label__ = 27; break; } //@line 1121 "mathmodule.c"
      case 27: // $bb26
        var $103=$result; //@line 1132 "mathmodule.c"
        $0=$103; //@line 1132 "mathmodule.c"
        __label__ = 31; break; //@line 1132 "mathmodule.c"
      case 28: // $error
        var $104=$result; //@line 1135 "mathmodule.c"
        var $105=$104; //@line 1135 "mathmodule.c"
        var $106=HEAP[$105]; //@line 1135 "mathmodule.c"
        var $107=($106) - 1; //@line 1135 "mathmodule.c"
        var $108=$result; //@line 1135 "mathmodule.c"
        var $109=$108; //@line 1135 "mathmodule.c"
        HEAP[$109]=$107; //@line 1135 "mathmodule.c"
        var $110=$result; //@line 1135 "mathmodule.c"
        var $111=$110; //@line 1135 "mathmodule.c"
        var $112=HEAP[$111]; //@line 1135 "mathmodule.c"
        var $113=($112)==0; //@line 1135 "mathmodule.c"
        if ($113) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1135 "mathmodule.c"
      case 29: // $bb27
        var $114=$result; //@line 1135 "mathmodule.c"
        var $115=$114+4; //@line 1135 "mathmodule.c"
        var $116=HEAP[$115]; //@line 1135 "mathmodule.c"
        var $117=$116+24; //@line 1135 "mathmodule.c"
        var $118=HEAP[$117]; //@line 1135 "mathmodule.c"
        var $119=$result; //@line 1135 "mathmodule.c"
        FUNCTION_TABLE[$118]($119); //@line 1135 "mathmodule.c"
        __label__ = 30; break; //@line 1135 "mathmodule.c"
      case 30: // $bb28
        $0=0; //@line 1136 "mathmodule.c"
        __label__ = 31; break; //@line 1136 "mathmodule.c"
      case 31: // $bb29
        var $120=$0; //@line 1099 "mathmodule.c"
        $retval=$120; //@line 1099 "mathmodule.c"
        var $retval30=$retval; //@line 1099 "mathmodule.c"
        ;
        return $retval30; //@line 1099 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_trunc($self, $number) {
    ;
    var __label__;
  
    var $self_addr;
    var $number_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $number_addr=$number;
    var $1=$number_addr; //@line 1147 "mathmodule.c"
    var $2=_PyObject_CallMethod($1, __str18, 0, allocate(1, "i32", ALLOC_STACK)); //@line 1147 "mathmodule.c"
    $0=$2; //@line 1147 "mathmodule.c"
    var $3=$0; //@line 1147 "mathmodule.c"
    $retval=$3; //@line 1147 "mathmodule.c"
    var $retval1=$retval; //@line 1147 "mathmodule.c"
    ;
    return $retval1; //@line 1147 "mathmodule.c"
  }
  

  function _math_frexp($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $i=__stackBase__;
        var $x;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1159 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1159 "mathmodule.c"
        $x=$2; //@line 1159 "mathmodule.c"
        var $3=$x; //@line 1160 "mathmodule.c"
        var $4=($3) == -1; //@line 1160 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1160 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1160 "mathmodule.c"
        var $6=($5)!=0; //@line 1160 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1160 "mathmodule.c"
      case 2: // $bb1
        $0=0; //@line 1161 "mathmodule.c"
        __label__ = 8; break; //@line 1161 "mathmodule.c"
      case 3: // $bb2
        var $7=$x; //@line 1164 "mathmodule.c"
        var $8=___isnan($7); //@line 1164 "mathmodule.c"
        var $9=($8)!=0; //@line 1164 "mathmodule.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 4; break; } //@line 1164 "mathmodule.c"
      case 4: // $bb3
        var $10=$x; //@line 1164 "mathmodule.c"
        var $11=___isinf($10); //@line 1164 "mathmodule.c"
        var $12=($11)!=0; //@line 1164 "mathmodule.c"
        var $13=$x; //@line 1164 "mathmodule.c"
        var $14=($13) == 0; //@line 1164 "mathmodule.c"
        var $or_cond=($12) | ($14);
        if ($or_cond) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1164 "mathmodule.c"
      case 5: // $bb5
        HEAP[$i]=0; //@line 1165 "mathmodule.c"
        __label__ = 7; break; //@line 1165 "mathmodule.c"
      case 6: // $bb6
        var $15=$x; //@line 1169 "mathmodule.c"
        var $16=_frexp($15, $i); //@line 1169 "mathmodule.c"
        $x=$16; //@line 1169 "mathmodule.c"
        __label__ = 7; break; //@line 1169 "mathmodule.c"
      case 7: // $bb7
        var $17=HEAP[$i]; //@line 1172 "mathmodule.c"
        var $18=$x; //@line 1172 "mathmodule.c"
        var $19=_Py_BuildValue(__str19, allocate([$18,0,0,0,0,0,0,0,$17,0,0,0], ["double",0,0,0,0,0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1172 "mathmodule.c"
        $0=$19; //@line 1172 "mathmodule.c"
        __label__ = 8; break; //@line 1172 "mathmodule.c"
      case 8: // $bb8
        var $20=$0; //@line 1161 "mathmodule.c"
        $retval=$20; //@line 1161 "mathmodule.c"
        var $retval9=$retval; //@line 1161 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1161 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_ldexp($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_79;
        var $0;
        var $x=__stackBase__;
        var $r;
        var $oexp=__stackBase__+8;
        var $exp;
        var $overflow=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1189 "mathmodule.c"
        var $2=_PyArg_ParseTuple($1, __str20, allocate([$x,0,0,0,$oexp,0,0,0], ["double*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1189 "mathmodule.c"
        var $3=($2)==0; //@line 1189 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1189 "mathmodule.c"
      case 1: // $bb
        $0=0; //@line 1190 "mathmodule.c"
        __label__ = 22; break; //@line 1190 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$oexp]; //@line 1192 "mathmodule.c"
        var $5=$4+4; //@line 1192 "mathmodule.c"
        var $6=HEAP[$5]; //@line 1192 "mathmodule.c"
        var $7=$6+84; //@line 1192 "mathmodule.c"
        var $8=HEAP[$7]; //@line 1192 "mathmodule.c"
        var $9=($8) & 16777216; //@line 1192 "mathmodule.c"
        var $10=($9)!=0; //@line 1192 "mathmodule.c"
        if ($10) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1192 "mathmodule.c"
      case 3: // $bb2
        var $11=HEAP[$oexp]; //@line 1192 "mathmodule.c"
        var $12=$11+4; //@line 1192 "mathmodule.c"
        var $13=HEAP[$12]; //@line 1192 "mathmodule.c"
        var $14=$13+84; //@line 1192 "mathmodule.c"
        var $15=HEAP[$14]; //@line 1192 "mathmodule.c"
        var $16=($15) & 8388608; //@line 1192 "mathmodule.c"
        var $17=($16)!=0; //@line 1192 "mathmodule.c"
        if ($17) { __label__ = 4; break; } else { __label__ = 13; break; } //@line 1192 "mathmodule.c"
      case 4: // $bb3
        var $18=HEAP[$oexp]; //@line 1195 "mathmodule.c"
        var $19=_PyLong_AsLongAndOverflow($18, $overflow); //@line 1195 "mathmodule.c"
        $exp=$19; //@line 1195 "mathmodule.c"
        var $20=($19)==-1; //@line 1196 "mathmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 7; break; } //@line 1196 "mathmodule.c"
      case 5: // $bb4
        var $21=_PyErr_Occurred(); //@line 1196 "mathmodule.c"
        var $22=($21)!=0; //@line 1196 "mathmodule.c"
        if ($22) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1196 "mathmodule.c"
      case 6: // $bb5
        $0=0; //@line 1197 "mathmodule.c"
        __label__ = 22; break; //@line 1197 "mathmodule.c"
      case 7: // $bb6
        var $23=HEAP[$overflow]; //@line 1198 "mathmodule.c"
        var $24=($23)!=0; //@line 1198 "mathmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 12; break; } //@line 1198 "mathmodule.c"
      case 8: // $bb7
        var $25=HEAP[$overflow]; //@line 1199 "mathmodule.c"
        var $26=($25) < 0; //@line 1199 "mathmodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1199 "mathmodule.c"
      case 9: // $bb8
        $iftmp_79=-2147483648; //@line 1199 "mathmodule.c"
        __label__ = 11; break; //@line 1199 "mathmodule.c"
      case 10: // $bb9
        $iftmp_79=2147483647; //@line 1199 "mathmodule.c"
        __label__ = 11; break; //@line 1199 "mathmodule.c"
      case 11: // $bb10
        var $27=$iftmp_79; //@line 1199 "mathmodule.c"
        $exp=$27; //@line 1199 "mathmodule.c"
        __label__ = 12; break; //@line 1199 "mathmodule.c"
      case 12: // $bb11
        var $28=HEAP[$x]; //@line 1208 "mathmodule.c"
        var $29=($28) == 0; //@line 1208 "mathmodule.c"
        if ($29) { __label__ = 15; break; } else { __label__ = 14; break; } //@line 1208 "mathmodule.c"
      case 13: // $bb12
        var $30=HEAP[_PyExc_TypeError]; //@line 1202 "mathmodule.c"
        _PyErr_SetString($30, __str21); //@line 1202 "mathmodule.c"
        $0=0; //@line 1205 "mathmodule.c"
        __label__ = 22; break; //@line 1205 "mathmodule.c"
      case 14: // $bb13
        var $31=HEAP[$x]; //@line 1208 "mathmodule.c"
        var $32=___finite($31); //@line 1208 "mathmodule.c"
        var $33=($32)==0; //@line 1208 "mathmodule.c"
        if ($33) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1208 "mathmodule.c"
      case 15: // $bb14
        var $34=HEAP[$x]; //@line 1210 "mathmodule.c"
        $r=$34; //@line 1210 "mathmodule.c"
        var $35=___errno_location(); //@line 1211 "mathmodule.c"
        HEAP[$35]=0; //@line 1211 "mathmodule.c"
        __label__ = 18; break; //@line 1211 "mathmodule.c"
      case 16: // $bb15
        var $36=___errno_location(); //@line 1221 "mathmodule.c"
        HEAP[$36]=0; //@line 1221 "mathmodule.c"
        var $37=HEAP[$x]; //@line 1223 "mathmodule.c"
        var $38=$exp; //@line 1223 "mathmodule.c"
        var $39=_ldexp($37, $38); //@line 1223 "mathmodule.c"
        $r=$39; //@line 1223 "mathmodule.c"
        var $40=$r; //@line 1225 "mathmodule.c"
        var $41=___isinf($40); //@line 1225 "mathmodule.c"
        var $42=($41)!=0; //@line 1225 "mathmodule.c"
        if ($42) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1225 "mathmodule.c"
      case 17: // $bb16
        var $43=___errno_location(); //@line 1226 "mathmodule.c"
        HEAP[$43]=34; //@line 1226 "mathmodule.c"
        __label__ = 18; break; //@line 1226 "mathmodule.c"
      case 18: // $bb17
        var $44=___errno_location(); //@line 1229 "mathmodule.c"
        var $45=HEAP[$44]; //@line 1229 "mathmodule.c"
        var $46=($45)!=0; //@line 1229 "mathmodule.c"
        if ($46) { __label__ = 19; break; } else { __label__ = 21; break; } //@line 1229 "mathmodule.c"
      case 19: // $bb18
        var $47=$r; //@line 1229 "mathmodule.c"
        var $48=_is_error($47); //@line 1229 "mathmodule.c"
        var $49=($48)!=0; //@line 1229 "mathmodule.c"
        if ($49) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1229 "mathmodule.c"
      case 20: // $bb19
        $0=0; //@line 1230 "mathmodule.c"
        __label__ = 22; break; //@line 1230 "mathmodule.c"
      case 21: // $bb20
        var $50=$r; //@line 1231 "mathmodule.c"
        var $51=_PyFloat_FromDouble($50); //@line 1231 "mathmodule.c"
        $0=$51; //@line 1231 "mathmodule.c"
        __label__ = 22; break; //@line 1231 "mathmodule.c"
      case 22: // $bb21
        var $52=$0; //@line 1190 "mathmodule.c"
        $retval=$52; //@line 1190 "mathmodule.c"
        var $retval22=$retval; //@line 1190 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval22; //@line 1190 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_modf($self, $arg) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $y=__stackBase__;
        var $x;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1241 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1241 "mathmodule.c"
        $x=$2; //@line 1241 "mathmodule.c"
        var $3=$x; //@line 1242 "mathmodule.c"
        var $4=($3) == -1; //@line 1242 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1242 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1242 "mathmodule.c"
        var $6=($5)!=0; //@line 1242 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1242 "mathmodule.c"
      case 2: // $bb1
        $0=0; //@line 1243 "mathmodule.c"
        __label__ = 9; break; //@line 1243 "mathmodule.c"
      case 3: // $bb2
        var $7=$x; //@line 1246 "mathmodule.c"
        var $8=___finite($7); //@line 1246 "mathmodule.c"
        var $9=($8)==0; //@line 1246 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 8; break; } //@line 1246 "mathmodule.c"
      case 4: // $bb3
        var $10=$x; //@line 1247 "mathmodule.c"
        var $11=___isinf($10); //@line 1247 "mathmodule.c"
        var $12=($11)!=0; //@line 1247 "mathmodule.c"
        var $13=$x; //@line 1248 "mathmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1247 "mathmodule.c"
      case 5: // $bb4
        var $14=_copysign(0, $13); //@line 1248 "mathmodule.c"
        var $15=$x; //@line 1248 "mathmodule.c"
        var $16=_Py_BuildValue(__str22, allocate([$14,0,0,0,0,0,0,0,$15,0,0,0,0,0,0,0], ["double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0], ALLOC_STACK)); //@line 1248 "mathmodule.c"
        $0=$16; //@line 1248 "mathmodule.c"
        __label__ = 9; break; //@line 1248 "mathmodule.c"
      case 6: // $bb5
        var $17=___isnan($13); //@line 1249 "mathmodule.c"
        var $18=($17)!=0; //@line 1249 "mathmodule.c"
        if ($18) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1249 "mathmodule.c"
      case 7: // $bb6
        var $19=$x; //@line 1250 "mathmodule.c"
        var $20=$x; //@line 1250 "mathmodule.c"
        var $21=_Py_BuildValue(__str22, allocate([$19,0,0,0,0,0,0,0,$20,0,0,0,0,0,0,0], ["double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0], ALLOC_STACK)); //@line 1250 "mathmodule.c"
        $0=$21; //@line 1250 "mathmodule.c"
        __label__ = 9; break; //@line 1250 "mathmodule.c"
      case 8: // $bb7
        var $22=___errno_location(); //@line 1253 "mathmodule.c"
        HEAP[$22]=0; //@line 1253 "mathmodule.c"
        var $23=$x; //@line 1255 "mathmodule.c"
        var $24=_modf($23, $y); //@line 1255 "mathmodule.c"
        $x=$24; //@line 1255 "mathmodule.c"
        var $25=HEAP[$y]; //@line 1257 "mathmodule.c"
        var $26=$x; //@line 1257 "mathmodule.c"
        var $27=_Py_BuildValue(__str22, allocate([$26,0,0,0,0,0,0,0,$25,0,0,0,0,0,0,0], ["double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0], ALLOC_STACK)); //@line 1257 "mathmodule.c"
        $0=$27; //@line 1257 "mathmodule.c"
        __label__ = 9; break; //@line 1257 "mathmodule.c"
      case 9: // $bb8
        var $28=$0; //@line 1243 "mathmodule.c"
        $retval=$28; //@line 1243 "mathmodule.c"
        var $retval9=$retval; //@line 1243 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1243 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _loghelper($arg, $func, $funcname) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $arg_addr;
        var $func_addr;
        var $funcname_addr;
        var $retval;
        var $0;
        var $x;
        var $e=__stackBase__;
        $arg_addr=$arg;
        $func_addr=$func;
        $funcname_addr=$funcname;
        var $1=$arg_addr; //@line 1279 "mathmodule.c"
        var $2=$1+4; //@line 1279 "mathmodule.c"
        var $3=HEAP[$2]; //@line 1279 "mathmodule.c"
        var $4=$3+84; //@line 1279 "mathmodule.c"
        var $5=HEAP[$4]; //@line 1279 "mathmodule.c"
        var $6=($5) & 16777216; //@line 1279 "mathmodule.c"
        var $7=($6)!=0; //@line 1279 "mathmodule.c"
        var $8=$arg_addr; //@line 1282 "mathmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 11; break; } //@line 1279 "mathmodule.c"
      case 1: // $bb
        var $9=$8; //@line 1282 "mathmodule.c"
        var $10=__PyLong_Frexp($9, $e); //@line 1282 "mathmodule.c"
        $x=$10; //@line 1282 "mathmodule.c"
        var $11=$x; //@line 1283 "mathmodule.c"
        var $12=($11) == -1; //@line 1283 "mathmodule.c"
        if ($12) { __lastLabel__ = 1; __label__ = 2; break; } else { __lastLabel__ = 1; __label__ = 5; break; } //@line 1283 "mathmodule.c"
      case 2: // $bb1
        var $13=_PyErr_Occurred(); //@line 1283 "mathmodule.c"
        var $14=($13)!=0; //@line 1283 "mathmodule.c"
        if ($14) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1283 "mathmodule.c"
      case 3: // $bb2
        $0=0; //@line 1284 "mathmodule.c"
        __label__ = 12; break; //@line 1284 "mathmodule.c"
      case 4: // $bb3thread_pre_split
        var $_pr=$x;
        __lastLabel__ = 4; __label__ = 5; break;
      case 5: // $bb3
        var $15=__lastLabel__ == 4 ? $_pr : ($11);
        var $16=($15) <= 0; //@line 1285 "mathmodule.c"
        if ($16) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 1285 "mathmodule.c"
      case 6: // $bb4
        var $17=HEAP[_PyExc_ValueError]; //@line 1286 "mathmodule.c"
        _PyErr_SetString($17, __str6); //@line 1286 "mathmodule.c"
        $0=0; //@line 1288 "mathmodule.c"
        __label__ = 12; break; //@line 1288 "mathmodule.c"
      case 7: // $bb5
        var $18=HEAP[$e]; //@line 1292 "mathmodule.c"
        var $19=($18)==1; //@line 1292 "mathmodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 10; break; } //@line 1292 "mathmodule.c"
      case 8: // $bb6
        var $20=$x; //@line 1292 "mathmodule.c"
        var $21=($20) == 0.5; //@line 1292 "mathmodule.c"
        if ($21) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1292 "mathmodule.c"
      case 9: // $bb7
        var $22=_PyFloat_FromDouble(0); //@line 1293 "mathmodule.c"
        $0=$22; //@line 1293 "mathmodule.c"
        __label__ = 12; break; //@line 1293 "mathmodule.c"
      case 10: // $bb8
        var $23=$func_addr; //@line 1295 "mathmodule.c"
        var $24=$x; //@line 1295 "mathmodule.c"
        var $25=FUNCTION_TABLE[$23]($24); //@line 1295 "mathmodule.c"
        var $26=$func_addr; //@line 1295 "mathmodule.c"
        var $27=FUNCTION_TABLE[$26](2); //@line 1295 "mathmodule.c"
        var $28=HEAP[$e]; //@line 1295 "mathmodule.c"
        var $29=($28); //@line 1295 "mathmodule.c"
        var $30=($27) * ($29); //@line 1295 "mathmodule.c"
        var $31=($25) + ($30); //@line 1295 "mathmodule.c"
        $x=$31; //@line 1295 "mathmodule.c"
        var $32=$x; //@line 1296 "mathmodule.c"
        var $33=_PyFloat_FromDouble($32); //@line 1296 "mathmodule.c"
        $0=$33; //@line 1296 "mathmodule.c"
        __label__ = 12; break; //@line 1296 "mathmodule.c"
      case 11: // $bb9
        var $34=$func_addr; //@line 1300 "mathmodule.c"
        var $35=_math_1($8, $34, 0); //@line 1300 "mathmodule.c"
        $0=$35; //@line 1300 "mathmodule.c"
        __label__ = 12; break; //@line 1300 "mathmodule.c"
      case 12: // $bb10
        var $36=$0; //@line 1284 "mathmodule.c"
        $retval=$36; //@line 1284 "mathmodule.c"
        var $retval11=$retval; //@line 1284 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 1284 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_log($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $arg=__stackBase__;
        var $base=__stackBase__+4;
        var $num;
        var $den;
        var $ans;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$base]=0; //@line 1307 "mathmodule.c"
        var $1=$args_addr; //@line 1311 "mathmodule.c"
        var $2=_PyArg_UnpackTuple($1, __str23, 1, 2, allocate([$arg,0,0,0,$base,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1311 "mathmodule.c"
        var $3=($2)==0; //@line 1311 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1311 "mathmodule.c"
      case 1: // $bb
        $0=0; //@line 1312 "mathmodule.c"
        __label__ = 14; break; //@line 1312 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$arg]; //@line 1314 "mathmodule.c"
        var $5=_loghelper($4, (FUNCTION_TABLE_OFFSET + 52), __str23); //@line 1314 "mathmodule.c"
        $num=$5; //@line 1314 "mathmodule.c"
        var $6=$num; //@line 1315 "mathmodule.c"
        var $7=($6)==0; //@line 1315 "mathmodule.c"
        if ($7) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1315 "mathmodule.c"
      case 3: // $bb2
        var $8=HEAP[$base]; //@line 1315 "mathmodule.c"
        var $9=($8)==0; //@line 1315 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1315 "mathmodule.c"
      case 4: // $bb3
        var $10=$num; //@line 1316 "mathmodule.c"
        $0=$10; //@line 1316 "mathmodule.c"
        __label__ = 14; break; //@line 1316 "mathmodule.c"
      case 5: // $bb4
        var $11=HEAP[$base]; //@line 1318 "mathmodule.c"
        var $12=_loghelper($11, (FUNCTION_TABLE_OFFSET + 52), __str23); //@line 1318 "mathmodule.c"
        $den=$12; //@line 1318 "mathmodule.c"
        var $13=$den; //@line 1319 "mathmodule.c"
        var $14=($13)==0; //@line 1319 "mathmodule.c"
        var $15=$num; //@line 1320 "mathmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 1319 "mathmodule.c"
      case 6: // $bb5
        var $16=$15; //@line 1320 "mathmodule.c"
        var $17=HEAP[$16]; //@line 1320 "mathmodule.c"
        var $18=($17) - 1; //@line 1320 "mathmodule.c"
        var $19=$num; //@line 1320 "mathmodule.c"
        var $20=$19; //@line 1320 "mathmodule.c"
        HEAP[$20]=$18; //@line 1320 "mathmodule.c"
        var $21=$num; //@line 1320 "mathmodule.c"
        var $22=$21; //@line 1320 "mathmodule.c"
        var $23=HEAP[$22]; //@line 1320 "mathmodule.c"
        var $24=($23)==0; //@line 1320 "mathmodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1320 "mathmodule.c"
      case 7: // $bb6
        var $25=$num; //@line 1320 "mathmodule.c"
        var $26=$25+4; //@line 1320 "mathmodule.c"
        var $27=HEAP[$26]; //@line 1320 "mathmodule.c"
        var $28=$27+24; //@line 1320 "mathmodule.c"
        var $29=HEAP[$28]; //@line 1320 "mathmodule.c"
        var $30=$num; //@line 1320 "mathmodule.c"
        FUNCTION_TABLE[$29]($30); //@line 1320 "mathmodule.c"
        __label__ = 8; break; //@line 1320 "mathmodule.c"
      case 8: // $bb7
        $0=0; //@line 1321 "mathmodule.c"
        __label__ = 14; break; //@line 1321 "mathmodule.c"
      case 9: // $bb8
        var $31=$den; //@line 1324 "mathmodule.c"
        var $32=_PyNumber_Divide($15, $31); //@line 1324 "mathmodule.c"
        $ans=$32; //@line 1324 "mathmodule.c"
        var $33=$num; //@line 1325 "mathmodule.c"
        var $34=$33; //@line 1325 "mathmodule.c"
        var $35=HEAP[$34]; //@line 1325 "mathmodule.c"
        var $36=($35) - 1; //@line 1325 "mathmodule.c"
        var $37=$num; //@line 1325 "mathmodule.c"
        var $38=$37; //@line 1325 "mathmodule.c"
        HEAP[$38]=$36; //@line 1325 "mathmodule.c"
        var $39=$num; //@line 1325 "mathmodule.c"
        var $40=$39; //@line 1325 "mathmodule.c"
        var $41=HEAP[$40]; //@line 1325 "mathmodule.c"
        var $42=($41)==0; //@line 1325 "mathmodule.c"
        if ($42) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1325 "mathmodule.c"
      case 10: // $bb9
        var $43=$num; //@line 1325 "mathmodule.c"
        var $44=$43+4; //@line 1325 "mathmodule.c"
        var $45=HEAP[$44]; //@line 1325 "mathmodule.c"
        var $46=$45+24; //@line 1325 "mathmodule.c"
        var $47=HEAP[$46]; //@line 1325 "mathmodule.c"
        var $48=$num; //@line 1325 "mathmodule.c"
        FUNCTION_TABLE[$47]($48); //@line 1325 "mathmodule.c"
        __label__ = 11; break; //@line 1325 "mathmodule.c"
      case 11: // $bb10
        var $49=$den; //@line 1326 "mathmodule.c"
        var $50=$49; //@line 1326 "mathmodule.c"
        var $51=HEAP[$50]; //@line 1326 "mathmodule.c"
        var $52=($51) - 1; //@line 1326 "mathmodule.c"
        var $53=$den; //@line 1326 "mathmodule.c"
        var $54=$53; //@line 1326 "mathmodule.c"
        HEAP[$54]=$52; //@line 1326 "mathmodule.c"
        var $55=$den; //@line 1326 "mathmodule.c"
        var $56=$55; //@line 1326 "mathmodule.c"
        var $57=HEAP[$56]; //@line 1326 "mathmodule.c"
        var $58=($57)==0; //@line 1326 "mathmodule.c"
        if ($58) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1326 "mathmodule.c"
      case 12: // $bb11
        var $59=$den; //@line 1326 "mathmodule.c"
        var $60=$59+4; //@line 1326 "mathmodule.c"
        var $61=HEAP[$60]; //@line 1326 "mathmodule.c"
        var $62=$61+24; //@line 1326 "mathmodule.c"
        var $63=HEAP[$62]; //@line 1326 "mathmodule.c"
        var $64=$den; //@line 1326 "mathmodule.c"
        FUNCTION_TABLE[$63]($64); //@line 1326 "mathmodule.c"
        __label__ = 13; break; //@line 1326 "mathmodule.c"
      case 13: // $bb12
        var $65=$ans; //@line 1327 "mathmodule.c"
        $0=$65; //@line 1327 "mathmodule.c"
        __label__ = 14; break; //@line 1327 "mathmodule.c"
      case 14: // $bb13
        var $66=$0; //@line 1312 "mathmodule.c"
        $retval=$66; //@line 1312 "mathmodule.c"
        var $retval14=$retval; //@line 1312 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 1312 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_log10($self, $arg) {
    ;
    var __label__;
  
    var $self_addr;
    var $arg_addr;
    var $retval;
    var $0;
    $self_addr=$self;
    $arg_addr=$arg;
    var $1=$arg_addr; //@line 1338 "mathmodule.c"
    var $2=_loghelper($1, (FUNCTION_TABLE_OFFSET + 54), __str24); //@line 1338 "mathmodule.c"
    $0=$2; //@line 1338 "mathmodule.c"
    var $3=$0; //@line 1338 "mathmodule.c"
    $retval=$3; //@line 1338 "mathmodule.c"
    var $retval1=$retval; //@line 1338 "mathmodule.c"
    ;
    return $retval1; //@line 1338 "mathmodule.c"
  }
  

  function _math_fmod($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $ox=__stackBase__;
        var $oy=__stackBase__+4;
        var $r;
        var $x;
        var $y;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1349 "mathmodule.c"
        var $2=_PyArg_UnpackTuple($1, __str25, 2, 2, allocate([$ox,0,0,0,$oy,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1349 "mathmodule.c"
        var $3=($2)==0; //@line 1349 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1349 "mathmodule.c"
      case 1: // $bb
        $0=0; //@line 1350 "mathmodule.c"
        __label__ = 18; break; //@line 1350 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$ox]; //@line 1351 "mathmodule.c"
        var $5=_PyFloat_AsDouble($4); //@line 1351 "mathmodule.c"
        $x=$5; //@line 1351 "mathmodule.c"
        var $6=HEAP[$oy]; //@line 1352 "mathmodule.c"
        var $7=_PyFloat_AsDouble($6); //@line 1352 "mathmodule.c"
        $y=$7; //@line 1352 "mathmodule.c"
        var $8=$x; //@line 1353 "mathmodule.c"
        var $9=($8) == -1; //@line 1353 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1353 "mathmodule.c"
      case 3: // $bb2
        var $10=$y; //@line 1353 "mathmodule.c"
        var $11=($10) == -1; //@line 1353 "mathmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1353 "mathmodule.c"
      case 4: // $bb3
        var $12=_PyErr_Occurred(); //@line 1353 "mathmodule.c"
        var $13=($12)!=0; //@line 1353 "mathmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1353 "mathmodule.c"
      case 5: // $bb4
        $0=0; //@line 1354 "mathmodule.c"
        __label__ = 18; break; //@line 1354 "mathmodule.c"
      case 6: // $bb5
        var $14=$y; //@line 1356 "mathmodule.c"
        var $15=___isinf($14); //@line 1356 "mathmodule.c"
        var $16=($15)!=0; //@line 1356 "mathmodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 1356 "mathmodule.c"
      case 7: // $bb6
        var $17=$x; //@line 1356 "mathmodule.c"
        var $18=___finite($17); //@line 1356 "mathmodule.c"
        var $19=($18)!=0; //@line 1356 "mathmodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1356 "mathmodule.c"
      case 8: // $bb7
        var $20=$x; //@line 1357 "mathmodule.c"
        var $21=_PyFloat_FromDouble($20); //@line 1357 "mathmodule.c"
        $0=$21; //@line 1357 "mathmodule.c"
        __label__ = 18; break; //@line 1357 "mathmodule.c"
      case 9: // $bb8
        var $22=___errno_location(); //@line 1358 "mathmodule.c"
        HEAP[$22]=0; //@line 1358 "mathmodule.c"
        var $23=$x; //@line 1360 "mathmodule.c"
        var $24=$y; //@line 1360 "mathmodule.c"
        var $25=_fmod($23, $24); //@line 1360 "mathmodule.c"
        $r=$25; //@line 1360 "mathmodule.c"
        var $26=$r; //@line 1362 "mathmodule.c"
        var $27=___isnan($26); //@line 1362 "mathmodule.c"
        var $28=($27)!=0; //@line 1362 "mathmodule.c"
        if ($28) { __label__ = 10; break; } else { __label__ = 14; break; } //@line 1362 "mathmodule.c"
      case 10: // $bb9
        var $29=$x; //@line 1363 "mathmodule.c"
        var $30=___isnan($29); //@line 1363 "mathmodule.c"
        var $31=($30)!=0; //@line 1363 "mathmodule.c"
        if ($31) { __label__ = 13; break; } else { __label__ = 11; break; } //@line 1363 "mathmodule.c"
      case 11: // $bb10
        var $32=$y; //@line 1363 "mathmodule.c"
        var $33=___isnan($32); //@line 1363 "mathmodule.c"
        var $34=($33)!=0; //@line 1363 "mathmodule.c"
        if ($34) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 1363 "mathmodule.c"
      case 12: // $bb11
        var $35=___errno_location(); //@line 1364 "mathmodule.c"
        HEAP[$35]=33; //@line 1364 "mathmodule.c"
        __label__ = 14; break; //@line 1364 "mathmodule.c"
      case 13: // $bb12
        var $36=___errno_location(); //@line 1366 "mathmodule.c"
        HEAP[$36]=0; //@line 1366 "mathmodule.c"
        __label__ = 14; break; //@line 1366 "mathmodule.c"
      case 14: // $bb13
        var $37=___errno_location(); //@line 1368 "mathmodule.c"
        var $38=HEAP[$37]; //@line 1368 "mathmodule.c"
        var $39=($38)==0; //@line 1368 "mathmodule.c"
        if ($39) { __label__ = 17; break; } else { __label__ = 15; break; } //@line 1368 "mathmodule.c"
      case 15: // $bb14
        var $40=$r; //@line 1368 "mathmodule.c"
        var $41=_is_error($40); //@line 1368 "mathmodule.c"
        var $42=($41)==0; //@line 1368 "mathmodule.c"
        if ($42) { __label__ = 17; break; } else { __label__ = 16; break; } //@line 1368 "mathmodule.c"
      case 16: // $bb15
        $0=0; //@line 1369 "mathmodule.c"
        __label__ = 18; break; //@line 1369 "mathmodule.c"
      case 17: // $bb16
        var $43=$r; //@line 1371 "mathmodule.c"
        var $44=_PyFloat_FromDouble($43); //@line 1371 "mathmodule.c"
        $0=$44; //@line 1371 "mathmodule.c"
        __label__ = 18; break; //@line 1371 "mathmodule.c"
      case 18: // $bb17
        var $45=$0; //@line 1350 "mathmodule.c"
        $retval=$45; //@line 1350 "mathmodule.c"
        var $retval18=$retval; //@line 1350 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval18; //@line 1350 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_hypot($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $ox=__stackBase__;
        var $oy=__stackBase__+4;
        var $r;
        var $x;
        var $y;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1383 "mathmodule.c"
        var $2=_PyArg_UnpackTuple($1, __str26, 2, 2, allocate([$ox,0,0,0,$oy,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1383 "mathmodule.c"
        var $3=($2)==0; //@line 1383 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1383 "mathmodule.c"
      case 1: // $bb
        $0=0; //@line 1384 "mathmodule.c"
        __label__ = 24; break; //@line 1384 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$ox]; //@line 1385 "mathmodule.c"
        var $5=_PyFloat_AsDouble($4); //@line 1385 "mathmodule.c"
        $x=$5; //@line 1385 "mathmodule.c"
        var $6=HEAP[$oy]; //@line 1386 "mathmodule.c"
        var $7=_PyFloat_AsDouble($6); //@line 1386 "mathmodule.c"
        $y=$7; //@line 1386 "mathmodule.c"
        var $8=$x; //@line 1387 "mathmodule.c"
        var $9=($8) == -1; //@line 1387 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1387 "mathmodule.c"
      case 3: // $bb2
        var $10=$y; //@line 1387 "mathmodule.c"
        var $11=($10) == -1; //@line 1387 "mathmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1387 "mathmodule.c"
      case 4: // $bb3
        var $12=_PyErr_Occurred(); //@line 1387 "mathmodule.c"
        var $13=($12)!=0; //@line 1387 "mathmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1387 "mathmodule.c"
      case 5: // $bb4
        $0=0; //@line 1388 "mathmodule.c"
        __label__ = 24; break; //@line 1388 "mathmodule.c"
      case 6: // $bb5
        var $14=$x; //@line 1390 "mathmodule.c"
        var $15=___isinf($14); //@line 1390 "mathmodule.c"
        var $16=($15)!=0; //@line 1390 "mathmodule.c"
        if ($16) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1390 "mathmodule.c"
      case 7: // $bb6
        var $17=$x; //@line 1391 "mathmodule.c"
        var $18=_fabs($17); //@line 1391 "mathmodule.c"
        var $19=_PyFloat_FromDouble($18); //@line 1391 "mathmodule.c"
        $0=$19; //@line 1391 "mathmodule.c"
        __label__ = 24; break; //@line 1391 "mathmodule.c"
      case 8: // $bb7
        var $20=$y; //@line 1392 "mathmodule.c"
        var $21=___isinf($20); //@line 1392 "mathmodule.c"
        var $22=($21)!=0; //@line 1392 "mathmodule.c"
        if ($22) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1392 "mathmodule.c"
      case 9: // $bb8
        var $23=$y; //@line 1393 "mathmodule.c"
        var $24=_fabs($23); //@line 1393 "mathmodule.c"
        var $25=_PyFloat_FromDouble($24); //@line 1393 "mathmodule.c"
        $0=$25; //@line 1393 "mathmodule.c"
        __label__ = 24; break; //@line 1393 "mathmodule.c"
      case 10: // $bb9
        var $26=___errno_location(); //@line 1394 "mathmodule.c"
        HEAP[$26]=0; //@line 1394 "mathmodule.c"
        var $27=$x; //@line 1396 "mathmodule.c"
        var $28=$y; //@line 1396 "mathmodule.c"
        var $29=_hypot($27, $28); //@line 1396 "mathmodule.c"
        $r=$29; //@line 1396 "mathmodule.c"
        var $30=$r; //@line 1398 "mathmodule.c"
        var $31=___isnan($30); //@line 1398 "mathmodule.c"
        var $32=($31)!=0; //@line 1398 "mathmodule.c"
        if ($32) { __label__ = 11; break; } else { __label__ = 15; break; } //@line 1398 "mathmodule.c"
      case 11: // $bb10
        var $33=$x; //@line 1399 "mathmodule.c"
        var $34=___isnan($33); //@line 1399 "mathmodule.c"
        var $35=($34)!=0; //@line 1399 "mathmodule.c"
        if ($35) { __label__ = 14; break; } else { __label__ = 12; break; } //@line 1399 "mathmodule.c"
      case 12: // $bb11
        var $36=$y; //@line 1399 "mathmodule.c"
        var $37=___isnan($36); //@line 1399 "mathmodule.c"
        var $38=($37)!=0; //@line 1399 "mathmodule.c"
        if ($38) { __label__ = 14; break; } else { __label__ = 13; break; } //@line 1399 "mathmodule.c"
      case 13: // $bb12
        var $39=___errno_location(); //@line 1400 "mathmodule.c"
        HEAP[$39]=33; //@line 1400 "mathmodule.c"
        __label__ = 20; break; //@line 1400 "mathmodule.c"
      case 14: // $bb13
        var $40=___errno_location(); //@line 1402 "mathmodule.c"
        HEAP[$40]=0; //@line 1402 "mathmodule.c"
        __label__ = 20; break; //@line 1402 "mathmodule.c"
      case 15: // $bb15
        var $41=$r; //@line 1404 "mathmodule.c"
        var $42=___isinf($41); //@line 1404 "mathmodule.c"
        var $43=($42)!=0; //@line 1404 "mathmodule.c"
        if ($43) { __label__ = 16; break; } else { __label__ = 20; break; } //@line 1404 "mathmodule.c"
      case 16: // $bb16
        var $44=$x; //@line 1405 "mathmodule.c"
        var $45=___finite($44); //@line 1405 "mathmodule.c"
        var $46=($45)==0; //@line 1405 "mathmodule.c"
        if ($46) { __label__ = 19; break; } else { __label__ = 17; break; } //@line 1405 "mathmodule.c"
      case 17: // $bb17
        var $47=$y; //@line 1405 "mathmodule.c"
        var $48=___finite($47); //@line 1405 "mathmodule.c"
        var $49=($48)==0; //@line 1405 "mathmodule.c"
        if ($49) { __label__ = 19; break; } else { __label__ = 18; break; } //@line 1405 "mathmodule.c"
      case 18: // $bb18
        var $50=___errno_location(); //@line 1406 "mathmodule.c"
        HEAP[$50]=34; //@line 1406 "mathmodule.c"
        __label__ = 20; break; //@line 1406 "mathmodule.c"
      case 19: // $bb19
        var $51=___errno_location(); //@line 1408 "mathmodule.c"
        HEAP[$51]=0; //@line 1408 "mathmodule.c"
        __label__ = 20; break; //@line 1408 "mathmodule.c"
      case 20: // $bb20
        var $52=___errno_location(); //@line 1410 "mathmodule.c"
        var $53=HEAP[$52]; //@line 1410 "mathmodule.c"
        var $54=($53)==0; //@line 1410 "mathmodule.c"
        if ($54) { __label__ = 23; break; } else { __label__ = 21; break; } //@line 1410 "mathmodule.c"
      case 21: // $bb21
        var $55=$r; //@line 1410 "mathmodule.c"
        var $56=_is_error($55); //@line 1410 "mathmodule.c"
        var $57=($56)==0; //@line 1410 "mathmodule.c"
        if ($57) { __label__ = 23; break; } else { __label__ = 22; break; } //@line 1410 "mathmodule.c"
      case 22: // $bb22
        $0=0; //@line 1411 "mathmodule.c"
        __label__ = 24; break; //@line 1411 "mathmodule.c"
      case 23: // $bb23
        var $58=$r; //@line 1413 "mathmodule.c"
        var $59=_PyFloat_FromDouble($58); //@line 1413 "mathmodule.c"
        $0=$59; //@line 1413 "mathmodule.c"
        __label__ = 24; break; //@line 1413 "mathmodule.c"
      case 24: // $bb24
        var $60=$0; //@line 1384 "mathmodule.c"
        $retval=$60; //@line 1384 "mathmodule.c"
        var $retval25=$retval; //@line 1384 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval25; //@line 1384 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_pow($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_105;
        var $iftmp_104;
        var $iftmp_103;
        var $iftmp_102;
        var $iftmp_101;
        var $0;
        var $ox=__stackBase__;
        var $oy=__stackBase__+4;
        var $r;
        var $x;
        var $y;
        var $odd_y;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 1432 "mathmodule.c"
        var $2=_PyArg_UnpackTuple($1, __str27, 2, 2, allocate([$ox,0,0,0,$oy,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 1432 "mathmodule.c"
        var $3=($2)==0; //@line 1432 "mathmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1432 "mathmodule.c"
      case 1: // $bb
        $0=0; //@line 1433 "mathmodule.c"
        __label__ = 56; break; //@line 1433 "mathmodule.c"
      case 2: // $bb1
        var $4=HEAP[$ox]; //@line 1434 "mathmodule.c"
        var $5=_PyFloat_AsDouble($4); //@line 1434 "mathmodule.c"
        $x=$5; //@line 1434 "mathmodule.c"
        var $6=HEAP[$oy]; //@line 1435 "mathmodule.c"
        var $7=_PyFloat_AsDouble($6); //@line 1435 "mathmodule.c"
        $y=$7; //@line 1435 "mathmodule.c"
        var $8=$x; //@line 1436 "mathmodule.c"
        var $9=($8) == -1; //@line 1436 "mathmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 1436 "mathmodule.c"
      case 3: // $bb2
        var $10=$y; //@line 1436 "mathmodule.c"
        var $11=($10) == -1; //@line 1436 "mathmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 1436 "mathmodule.c"
      case 4: // $bb3
        var $12=_PyErr_Occurred(); //@line 1436 "mathmodule.c"
        var $13=($12)!=0; //@line 1436 "mathmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1436 "mathmodule.c"
      case 5: // $bb4
        $0=0; //@line 1437 "mathmodule.c"
        __label__ = 56; break; //@line 1437 "mathmodule.c"
      case 6: // $bb5
        $r=0; //@line 1441 "mathmodule.c"
        var $14=$x; //@line 1442 "mathmodule.c"
        var $15=___finite($14); //@line 1442 "mathmodule.c"
        var $16=($15)==0; //@line 1442 "mathmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 7; break; } //@line 1442 "mathmodule.c"
      case 7: // $bb6
        var $17=$y; //@line 1442 "mathmodule.c"
        var $18=___finite($17); //@line 1442 "mathmodule.c"
        var $19=($18)==0; //@line 1442 "mathmodule.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 45; break; } //@line 1442 "mathmodule.c"
      case 8: // $bb7
        var $20=___errno_location(); //@line 1443 "mathmodule.c"
        HEAP[$20]=0; //@line 1443 "mathmodule.c"
        var $21=$x; //@line 1444 "mathmodule.c"
        var $22=___isnan($21); //@line 1444 "mathmodule.c"
        var $23=($22)!=0; //@line 1444 "mathmodule.c"
        var $24=$y; //@line 1445 "mathmodule.c"
        if ($23) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 1444 "mathmodule.c"
      case 9: // $bb8
        var $25=($24) != 0; //@line 1445 "mathmodule.c"
        if ($25) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 1445 "mathmodule.c"
      case 10: // $bb9
        var $26=$x; //@line 1445 "mathmodule.c"
        $iftmp_101=$26; //@line 1445 "mathmodule.c"
        __label__ = 12; break; //@line 1445 "mathmodule.c"
      case 11: // $bb10
        $iftmp_101=1; //@line 1445 "mathmodule.c"
        __label__ = 12; break; //@line 1445 "mathmodule.c"
      case 12: // $bb11
        var $27=$iftmp_101; //@line 1445 "mathmodule.c"
        $r=$27; //@line 1445 "mathmodule.c"
        __label__ = 52; break; //@line 1445 "mathmodule.c"
      case 13: // $bb12
        var $28=___isnan($24); //@line 1446 "mathmodule.c"
        var $29=($28)!=0; //@line 1446 "mathmodule.c"
        var $30=$x; //@line 1447 "mathmodule.c"
        if ($29) { __label__ = 14; break; } else { __label__ = 18; break; } //@line 1446 "mathmodule.c"
      case 14: // $bb13
        var $31=($30) != 1; //@line 1447 "mathmodule.c"
        if ($31) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 1447 "mathmodule.c"
      case 15: // $bb14
        var $32=$y; //@line 1447 "mathmodule.c"
        $iftmp_102=$32; //@line 1447 "mathmodule.c"
        __label__ = 17; break; //@line 1447 "mathmodule.c"
      case 16: // $bb15
        $iftmp_102=1; //@line 1447 "mathmodule.c"
        __label__ = 17; break; //@line 1447 "mathmodule.c"
      case 17: // $bb16
        var $33=$iftmp_102; //@line 1447 "mathmodule.c"
        $r=$33; //@line 1447 "mathmodule.c"
        __label__ = 52; break; //@line 1447 "mathmodule.c"
      case 18: // $bb17
        var $34=___isinf($30); //@line 1448 "mathmodule.c"
        var $35=($34)!=0; //@line 1448 "mathmodule.c"
        var $36=$y; //@line 1449 "mathmodule.c"
        if ($35) { __label__ = 19; break; } else { __label__ = 34; break; } //@line 1448 "mathmodule.c"
      case 19: // $bb18
        var $37=___finite($36); //@line 1449 "mathmodule.c"
        var $38=($37)==0; //@line 1449 "mathmodule.c"
        if ($38) { __label__ = 22; break; } else { __label__ = 20; break; } //@line 1449 "mathmodule.c"
      case 20: // $bb19
        var $39=$y; //@line 1449 "mathmodule.c"
        var $40=_fabs($39); //@line 1449 "mathmodule.c"
        var $41=_fmod($40, 2); //@line 1449 "mathmodule.c"
        var $42=($41) != 1; //@line 1449 "mathmodule.c"
        if ($42) { __label__ = 22; break; } else { __label__ = 21; break; } //@line 1449 "mathmodule.c"
      case 21: // $bb20
        $iftmp_103=1; //@line 1449 "mathmodule.c"
        __label__ = 23; break; //@line 1449 "mathmodule.c"
      case 22: // $bb21
        $iftmp_103=0; //@line 1449 "mathmodule.c"
        __label__ = 23; break; //@line 1449 "mathmodule.c"
      case 23: // $bb22
        var $43=$iftmp_103; //@line 1449 "mathmodule.c"
        $odd_y=$43; //@line 1449 "mathmodule.c"
        var $44=$y; //@line 1450 "mathmodule.c"
        var $45=($44) > 0; //@line 1450 "mathmodule.c"
        if ($45) { __label__ = 24; break; } else { __label__ = 28; break; } //@line 1450 "mathmodule.c"
      case 24: // $bb23
        var $46=$odd_y; //@line 1451 "mathmodule.c"
        var $47=($46)==0; //@line 1451 "mathmodule.c"
        var $48=$x; //@line 1451 "mathmodule.c"
        if ($47) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 1451 "mathmodule.c"
      case 25: // $bb24
        var $49=_fabs($48); //@line 1451 "mathmodule.c"
        $iftmp_104=$49; //@line 1451 "mathmodule.c"
        __label__ = 27; break; //@line 1451 "mathmodule.c"
      case 26: // $bb25
        $iftmp_104=$48; //@line 1451 "mathmodule.c"
        __label__ = 27; break; //@line 1451 "mathmodule.c"
      case 27: // $bb26
        var $50=$iftmp_104; //@line 1451 "mathmodule.c"
        $r=$50; //@line 1451 "mathmodule.c"
        __label__ = 52; break; //@line 1451 "mathmodule.c"
      case 28: // $bb27
        var $51=$y; //@line 1452 "mathmodule.c"
        var $52=($51) == 0; //@line 1452 "mathmodule.c"
        if ($52) { __label__ = 29; break; } else { __label__ = 30; break; } //@line 1452 "mathmodule.c"
      case 29: // $bb28
        $r=1; //@line 1453 "mathmodule.c"
        __label__ = 52; break; //@line 1453 "mathmodule.c"
      case 30: // $bb29
        var $53=$odd_y; //@line 1455 "mathmodule.c"
        var $54=($53)!=0; //@line 1455 "mathmodule.c"
        if ($54) { __label__ = 31; break; } else { __label__ = 32; break; } //@line 1455 "mathmodule.c"
      case 31: // $bb30
        var $55=$x; //@line 1455 "mathmodule.c"
        var $56=_copysign(0, $55); //@line 1455 "mathmodule.c"
        $iftmp_105=$56; //@line 1455 "mathmodule.c"
        __label__ = 33; break; //@line 1455 "mathmodule.c"
      case 32: // $bb31
        $iftmp_105=0; //@line 1455 "mathmodule.c"
        __label__ = 33; break; //@line 1455 "mathmodule.c"
      case 33: // $bb32
        var $57=$iftmp_105; //@line 1455 "mathmodule.c"
        $r=$57; //@line 1455 "mathmodule.c"
        __label__ = 52; break; //@line 1455 "mathmodule.c"
      case 34: // $bb34
        var $58=___isinf($36); //@line 1457 "mathmodule.c"
        var $59=($58)!=0; //@line 1457 "mathmodule.c"
        if ($59) { __label__ = 35; break; } else { __label__ = 52; break; } //@line 1457 "mathmodule.c"
      case 35: // $bb35
        var $60=$x; //@line 1458 "mathmodule.c"
        var $61=_fabs($60); //@line 1458 "mathmodule.c"
        var $62=($61) == 1; //@line 1458 "mathmodule.c"
        if ($62) { __label__ = 36; break; } else { __label__ = 37; break; } //@line 1458 "mathmodule.c"
      case 36: // $bb36
        $r=1; //@line 1459 "mathmodule.c"
        __label__ = 52; break; //@line 1459 "mathmodule.c"
      case 37: // $bb37
        var $63=$y; //@line 1460 "mathmodule.c"
        var $64=($63) <= 0; //@line 1460 "mathmodule.c"
        if ($64) { __lastLabel__ = 37; __label__ = 40; break; } else { __lastLabel__ = 37; __label__ = 38; break; } //@line 1460 "mathmodule.c"
      case 38: // $bb38
        var $65=$x; //@line 1460 "mathmodule.c"
        var $66=_fabs($65); //@line 1460 "mathmodule.c"
        var $67=($66) <= 1; //@line 1460 "mathmodule.c"
        var $_pr=$y;
        if ($67) { __lastLabel__ = 38; __label__ = 40; break; } else { __lastLabel__ = 38; __label__ = 39; break; } //@line 1460 "mathmodule.c"
      case 39: // $bb39
        $r=$_pr; //@line 1461 "mathmodule.c"
        __label__ = 52; break; //@line 1461 "mathmodule.c"
      case 40: // $bb40
        var $68=__lastLabel__ == 37 ? $63 : ($_pr);
        var $69=($68) >= 0; //@line 1462 "mathmodule.c"
        if ($69) { __label__ = 44; break; } else { __label__ = 41; break; } //@line 1462 "mathmodule.c"
      case 41: // $bb41
        var $70=$x; //@line 1462 "mathmodule.c"
        var $71=_fabs($70); //@line 1462 "mathmodule.c"
        var $72=($71) >= 1; //@line 1462 "mathmodule.c"
        if ($72) { __label__ = 44; break; } else { __label__ = 42; break; } //@line 1462 "mathmodule.c"
      case 42: // $bb42
        var $73=$y; //@line 1463 "mathmodule.c"
        var $74=0 - ($73); //@line 1463 "mathmodule.c"
        $r=$74; //@line 1463 "mathmodule.c"
        var $75=$x; //@line 1464 "mathmodule.c"
        var $76=($75) == 0; //@line 1464 "mathmodule.c"
        if ($76) { __label__ = 43; break; } else { __label__ = 52; break; } //@line 1464 "mathmodule.c"
      case 43: // $bb43
        var $77=___errno_location(); //@line 1465 "mathmodule.c"
        HEAP[$77]=33; //@line 1465 "mathmodule.c"
        __label__ = 52; break; //@line 1465 "mathmodule.c"
      case 44: // $bb45
        $r=0; //@line 1468 "mathmodule.c"
        __label__ = 52; break; //@line 1468 "mathmodule.c"
      case 45: // $bb47
        var $78=___errno_location(); //@line 1473 "mathmodule.c"
        HEAP[$78]=0; //@line 1473 "mathmodule.c"
        var $79=$x; //@line 1475 "mathmodule.c"
        var $80=$y; //@line 1475 "mathmodule.c"
        var $81=_llvm_pow_f64($79, $80); //@line 1475 "mathmodule.c"
        $r=$81; //@line 1475 "mathmodule.c"
        var $82=$r; //@line 1479 "mathmodule.c"
        var $83=___finite($82); //@line 1479 "mathmodule.c"
        var $84=($83)==0; //@line 1479 "mathmodule.c"
        if ($84) { __label__ = 46; break; } else { __label__ = 52; break; } //@line 1479 "mathmodule.c"
      case 46: // $bb48
        var $85=$r; //@line 1480 "mathmodule.c"
        var $86=___isnan($85); //@line 1480 "mathmodule.c"
        var $87=($86)!=0; //@line 1480 "mathmodule.c"
        if ($87) { __label__ = 47; break; } else { __label__ = 48; break; } //@line 1480 "mathmodule.c"
      case 47: // $bb49
        var $88=___errno_location(); //@line 1481 "mathmodule.c"
        HEAP[$88]=33; //@line 1481 "mathmodule.c"
        __label__ = 52; break; //@line 1481 "mathmodule.c"
      case 48: // $bb50
        var $89=$r; //@line 1488 "mathmodule.c"
        var $90=___isinf($89); //@line 1488 "mathmodule.c"
        var $91=($90)!=0; //@line 1488 "mathmodule.c"
        if ($91) { __label__ = 49; break; } else { __label__ = 52; break; } //@line 1488 "mathmodule.c"
      case 49: // $bb51
        var $92=$x; //@line 1489 "mathmodule.c"
        var $93=($92) == 0; //@line 1489 "mathmodule.c"
        var $94=___errno_location(); //@line 1490 "mathmodule.c"
        if ($93) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1489 "mathmodule.c"
      case 50: // $bb52
        HEAP[$94]=33; //@line 1490 "mathmodule.c"
        __label__ = 52; break; //@line 1490 "mathmodule.c"
      case 51: // $bb53
        HEAP[$94]=34; //@line 1492 "mathmodule.c"
        __label__ = 52; break; //@line 1492 "mathmodule.c"
      case 52: // $bb54
        var $95=___errno_location(); //@line 1497 "mathmodule.c"
        var $96=HEAP[$95]; //@line 1497 "mathmodule.c"
        var $97=($96)==0; //@line 1497 "mathmodule.c"
        if ($97) { __label__ = 55; break; } else { __label__ = 53; break; } //@line 1497 "mathmodule.c"
      case 53: // $bb55
        var $98=$r; //@line 1497 "mathmodule.c"
        var $99=_is_error($98); //@line 1497 "mathmodule.c"
        var $100=($99)==0; //@line 1497 "mathmodule.c"
        if ($100) { __label__ = 55; break; } else { __label__ = 54; break; } //@line 1497 "mathmodule.c"
      case 54: // $bb56
        $0=0; //@line 1498 "mathmodule.c"
        __label__ = 56; break; //@line 1498 "mathmodule.c"
      case 55: // $bb57
        var $101=$r; //@line 1500 "mathmodule.c"
        var $102=_PyFloat_FromDouble($101); //@line 1500 "mathmodule.c"
        $0=$102; //@line 1500 "mathmodule.c"
        __label__ = 56; break; //@line 1500 "mathmodule.c"
      case 56: // $bb58
        var $103=$0; //@line 1433 "mathmodule.c"
        $retval=$103; //@line 1433 "mathmodule.c"
        var $retval59=$retval; //@line 1433 "mathmodule.c"
        STACKTOP = __stackBase__;
        return $retval59; //@line 1433 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_degrees($self, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $x;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1512 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1512 "mathmodule.c"
        $x=$2; //@line 1512 "mathmodule.c"
        var $3=$x; //@line 1513 "mathmodule.c"
        var $4=($3) == -1; //@line 1513 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1513 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1513 "mathmodule.c"
        var $6=($5)!=0; //@line 1513 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1513 "mathmodule.c"
      case 2: // $bb1
        $0=0; //@line 1514 "mathmodule.c"
        __label__ = 4; break; //@line 1514 "mathmodule.c"
      case 3: // $bb2
        var $7=$x; //@line 1515 "mathmodule.c"
        var $8=($7) * 57.29577951308232; //@line 1515 "mathmodule.c"
        var $9=_PyFloat_FromDouble($8); //@line 1515 "mathmodule.c"
        $0=$9; //@line 1515 "mathmodule.c"
        __label__ = 4; break; //@line 1515 "mathmodule.c"
      case 4: // $bb3
        var $10=$0; //@line 1514 "mathmodule.c"
        $retval=$10; //@line 1514 "mathmodule.c"
        var $retval4=$retval; //@line 1514 "mathmodule.c"
        ;
        return $retval4; //@line 1514 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_radians($self, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $x;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1525 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1525 "mathmodule.c"
        $x=$2; //@line 1525 "mathmodule.c"
        var $3=$x; //@line 1526 "mathmodule.c"
        var $4=($3) == -1; //@line 1526 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1526 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1526 "mathmodule.c"
        var $6=($5)!=0; //@line 1526 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1526 "mathmodule.c"
      case 2: // $bb1
        $0=0; //@line 1527 "mathmodule.c"
        __label__ = 4; break; //@line 1527 "mathmodule.c"
      case 3: // $bb2
        var $7=$x; //@line 1528 "mathmodule.c"
        var $8=($7) * 0.017453292519943295; //@line 1528 "mathmodule.c"
        var $9=_PyFloat_FromDouble($8); //@line 1528 "mathmodule.c"
        $0=$9; //@line 1528 "mathmodule.c"
        __label__ = 4; break; //@line 1528 "mathmodule.c"
      case 4: // $bb3
        var $10=$0; //@line 1527 "mathmodule.c"
        $retval=$10; //@line 1527 "mathmodule.c"
        var $retval4=$retval; //@line 1527 "mathmodule.c"
        ;
        return $retval4; //@line 1527 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_isnan($self, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $x;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1538 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1538 "mathmodule.c"
        $x=$2; //@line 1538 "mathmodule.c"
        var $3=$x; //@line 1539 "mathmodule.c"
        var $4=($3) == -1; //@line 1539 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1539 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1539 "mathmodule.c"
        var $6=($5)!=0; //@line 1539 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1539 "mathmodule.c"
      case 2: // $bb1
        $0=0; //@line 1540 "mathmodule.c"
        __label__ = 4; break; //@line 1540 "mathmodule.c"
      case 3: // $bb2
        var $7=$x; //@line 1541 "mathmodule.c"
        var $8=___isnan($7); //@line 1541 "mathmodule.c"
        var $9=_PyBool_FromLong($8); //@line 1541 "mathmodule.c"
        $0=$9; //@line 1541 "mathmodule.c"
        __label__ = 4; break; //@line 1541 "mathmodule.c"
      case 4: // $bb3
        var $10=$0; //@line 1540 "mathmodule.c"
        $retval=$10; //@line 1540 "mathmodule.c"
        var $retval4=$retval; //@line 1540 "mathmodule.c"
        ;
        return $retval4; //@line 1540 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _math_isinf($self, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $x;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1551 "mathmodule.c"
        var $2=_PyFloat_AsDouble($1); //@line 1551 "mathmodule.c"
        $x=$2; //@line 1551 "mathmodule.c"
        var $3=$x; //@line 1552 "mathmodule.c"
        var $4=($3) == -1; //@line 1552 "mathmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 1552 "mathmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1552 "mathmodule.c"
        var $6=($5)!=0; //@line 1552 "mathmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1552 "mathmodule.c"
      case 2: // $bb1
        $0=0; //@line 1553 "mathmodule.c"
        __label__ = 4; break; //@line 1553 "mathmodule.c"
      case 3: // $bb2
        var $7=$x; //@line 1554 "mathmodule.c"
        var $8=___isinf($7); //@line 1554 "mathmodule.c"
        var $9=_PyBool_FromLong($8); //@line 1554 "mathmodule.c"
        $0=$9; //@line 1554 "mathmodule.c"
        __label__ = 4; break; //@line 1554 "mathmodule.c"
      case 4: // $bb3
        var $10=$0; //@line 1553 "mathmodule.c"
        $retval=$10; //@line 1553 "mathmodule.c"
        var $retval4=$retval; //@line 1553 "mathmodule.c"
        ;
        return $retval4; //@line 1553 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _initmath() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $0=_Py_InitModule4(__str61, _math_methods, _module_doc, 0, 1013); //@line 1615 "mathmodule.c"
        $m=$0; //@line 1615 "mathmodule.c"
        var $1=$m; //@line 1616 "mathmodule.c"
        var $2=($1)==0; //@line 1616 "mathmodule.c"
        if ($2) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 1616 "mathmodule.c"
      case 1: // $bb
        var $3=_PyFloat_FromDouble(3.141592653589793); //@line 1619 "mathmodule.c"
        var $4=$m; //@line 1619 "mathmodule.c"
        var $5=_PyModule_AddObject($4, __str62, $3); //@line 1619 "mathmodule.c"
        var $6=_PyFloat_FromDouble(2.718281828459045); //@line 1620 "mathmodule.c"
        var $7=$m; //@line 1620 "mathmodule.c"
        var $8=_PyModule_AddObject($7, __str63, $6); //@line 1620 "mathmodule.c"
        __label__ = 2; break; //@line 1622 "mathmodule.c"
      case 2: // $return
        ;
        return; //@line 1623 "mathmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_initmath"] = _initmath;

  function __Py_acosh($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $t;
        var $t12;
        $x_addr=$x;
        var $1=$x_addr; //@line 44 "_math.c"
        var $2=___isnan($1); //@line 44 "_math.c"
        var $3=($2)!=0; //@line 44 "_math.c"
        var $4=$x_addr; //@line 45 "_math.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 44 "_math.c"
      case 1: // $bb
        var $5=($4) * 2; //@line 45 "_math.c"
        $0=$5; //@line 45 "_math.c"
        __label__ = 13; break; //@line 45 "_math.c"
      case 2: // $bb1
        var $6=($4) < 1; //@line 47 "_math.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 47 "_math.c"
      case 3: // $bb2
        var $7=___errno_location(); //@line 48 "_math.c"
        HEAP[$7]=33; //@line 48 "_math.c"
        $0=NaN; //@line 50 "_math.c"
        __label__ = 13; break; //@line 50 "_math.c"
      case 4: // $bb3
        var $8=$x_addr; //@line 55 "_math.c"
        var $9=($8) >= 268435456; //@line 55 "_math.c"
        var $10=$x_addr; //@line 56 "_math.c"
        if ($9) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 55 "_math.c"
      case 5: // $bb4
        var $11=___isinf($10); //@line 56 "_math.c"
        var $12=($11)!=0; //@line 56 "_math.c"
        var $13=$x_addr; //@line 57 "_math.c"
        if ($12) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 56 "_math.c"
      case 6: // $bb5
        var $14=($13) * 2; //@line 57 "_math.c"
        $0=$14; //@line 57 "_math.c"
        __label__ = 13; break; //@line 57 "_math.c"
      case 7: // $bb6
        var $15=_llvm_log_f64($13); //@line 60 "_math.c"
        var $16=($15) + 0.6931471805599453; //@line 60 "_math.c"
        $0=$16; //@line 60 "_math.c"
        __label__ = 13; break; //@line 60 "_math.c"
      case 8: // $bb7
        var $17=($10) == 1; //@line 63 "_math.c"
        if ($17) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 63 "_math.c"
      case 9: // $bb8
        $0=0; //@line 64 "_math.c"
        __label__ = 13; break; //@line 64 "_math.c"
      case 10: // $bb9
        var $18=$x_addr; //@line 66 "_math.c"
        var $19=($18) > 2; //@line 66 "_math.c"
        var $20=$x_addr; //@line 67 "_math.c"
        if ($19) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 66 "_math.c"
      case 11: // $bb10
        var $21=$x_addr; //@line 67 "_math.c"
        var $22=($20) * ($21); //@line 67 "_math.c"
        $t=$22; //@line 67 "_math.c"
        var $23=$x_addr; //@line 68 "_math.c"
        var $24=($23) * 2; //@line 68 "_math.c"
        var $25=$t; //@line 68 "_math.c"
        var $26=($25) - 1; //@line 68 "_math.c"
        var $27=_sqrt($26); //@line 68 "_math.c"
        var $28=$x_addr; //@line 68 "_math.c"
        var $29=($27) + ($28); //@line 68 "_math.c"
        var $30=-1 / ($29); //@line 68 "_math.c"
        var $31=($24) + ($30); //@line 68 "_math.c"
        var $32=_llvm_log_f64($31); //@line 68 "_math.c"
        $0=$32; //@line 68 "_math.c"
        __label__ = 13; break; //@line 68 "_math.c"
      case 12: // $bb11
        var $33=($20) - 1; //@line 71 "_math.c"
        $t12=$33; //@line 71 "_math.c"
        var $34=$t12; //@line 72 "_math.c"
        var $35=($34) * 2; //@line 72 "_math.c"
        var $36=$t12; //@line 72 "_math.c"
        var $37=$t12; //@line 72 "_math.c"
        var $38=($36) * ($37); //@line 72 "_math.c"
        var $39=($35) + ($38); //@line 72 "_math.c"
        var $40=_sqrt($39); //@line 72 "_math.c"
        var $41=$t12; //@line 72 "_math.c"
        var $42=($40) + ($41); //@line 72 "_math.c"
        var $43=_log1p($42); //@line 72 "_math.c"
        $0=$43; //@line 72 "_math.c"
        __label__ = 13; break; //@line 72 "_math.c"
      case 13: // $bb13
        var $44=$0; //@line 45 "_math.c"
        $retval=$44; //@line 45 "_math.c"
        var $retval14=$retval; //@line 45 "_math.c"
        ;
        return $retval14; //@line 45 "_math.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __Py_asinh($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $w;
        var $absx;
        var $t;
        $x_addr=$x;
        var $1=$x_addr; //@line 92 "_math.c"
        var $2=_fabs($1); //@line 92 "_math.c"
        $absx=$2; //@line 92 "_math.c"
        var $3=$x_addr; //@line 94 "_math.c"
        var $4=___isnan($3); //@line 94 "_math.c"
        var $5=($4)!=0; //@line 94 "_math.c"
        if ($5) { __label__ = 2; break; } else { __label__ = 1; break; } //@line 94 "_math.c"
      case 1: // $bb
        var $6=$x_addr; //@line 94 "_math.c"
        var $7=___isinf($6); //@line 94 "_math.c"
        var $8=($7)!=0; //@line 94 "_math.c"
        if ($8) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 94 "_math.c"
      case 2: // $bb1
        var $9=$x_addr; //@line 95 "_math.c"
        var $10=($9) * 2; //@line 95 "_math.c"
        $0=$10; //@line 95 "_math.c"
        __label__ = 11; break; //@line 95 "_math.c"
      case 3: // $bb2
        var $11=$absx; //@line 97 "_math.c"
        var $12=($11) < 3.725290298461914e-9; //@line 97 "_math.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 97 "_math.c"
      case 4: // $bb3
        var $13=$x_addr; //@line 98 "_math.c"
        $0=$13; //@line 98 "_math.c"
        __label__ = 11; break; //@line 98 "_math.c"
      case 5: // $bb4
        var $14=$absx; //@line 100 "_math.c"
        var $15=($14) > 268435456; //@line 100 "_math.c"
        var $16=$absx; //@line 101 "_math.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 100 "_math.c"
      case 6: // $bb5
        var $17=_llvm_log_f64($16); //@line 101 "_math.c"
        var $18=($17) + 0.6931471805599453; //@line 101 "_math.c"
        $w=$18; //@line 101 "_math.c"
        __label__ = 10; break; //@line 101 "_math.c"
      case 7: // $bb6
        var $19=($16) > 2; //@line 103 "_math.c"
        if ($19) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 103 "_math.c"
      case 8: // $bb7
        var $20=$absx; //@line 104 "_math.c"
        var $21=($20) * 2; //@line 104 "_math.c"
        var $22=$x_addr; //@line 104 "_math.c"
        var $23=$x_addr; //@line 104 "_math.c"
        var $24=($22) * ($23); //@line 104 "_math.c"
        var $25=($24) + 1; //@line 104 "_math.c"
        var $26=_sqrt($25); //@line 104 "_math.c"
        var $27=$absx; //@line 104 "_math.c"
        var $28=($26) + ($27); //@line 104 "_math.c"
        var $29=1 / ($28); //@line 104 "_math.c"
        var $30=($21) + ($29); //@line 104 "_math.c"
        var $31=_llvm_log_f64($30); //@line 104 "_math.c"
        $w=$31; //@line 104 "_math.c"
        __label__ = 10; break; //@line 104 "_math.c"
      case 9: // $bb8
        var $32=$x_addr; //@line 107 "_math.c"
        var $33=$x_addr; //@line 107 "_math.c"
        var $34=($32) * ($33); //@line 107 "_math.c"
        $t=$34; //@line 107 "_math.c"
        var $35=$t; //@line 108 "_math.c"
        var $36=($35) + 1; //@line 108 "_math.c"
        var $37=_sqrt($36); //@line 108 "_math.c"
        var $38=($37) + 1; //@line 108 "_math.c"
        var $39=$t; //@line 108 "_math.c"
        var $40=($39) / ($38); //@line 108 "_math.c"
        var $41=$absx; //@line 108 "_math.c"
        var $42=($40) + ($41); //@line 108 "_math.c"
        var $43=_log1p($42); //@line 108 "_math.c"
        $w=$43; //@line 108 "_math.c"
        __label__ = 10; break; //@line 108 "_math.c"
      case 10: // $bb9
        var $44=$w; //@line 110 "_math.c"
        var $45=$x_addr; //@line 110 "_math.c"
        var $46=_copysign($44, $45); //@line 110 "_math.c"
        $0=$46; //@line 110 "_math.c"
        __label__ = 11; break; //@line 110 "_math.c"
      case 11: // $bb10
        var $47=$0; //@line 95 "_math.c"
        $retval=$47; //@line 95 "_math.c"
        var $retval11=$retval; //@line 95 "_math.c"
        ;
        return $retval11; //@line 95 "_math.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __Py_atanh($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $absx;
        var $t;
        $x_addr=$x;
        var $1=$x_addr; //@line 137 "_math.c"
        var $2=___isnan($1); //@line 137 "_math.c"
        var $3=($2)!=0; //@line 137 "_math.c"
        var $4=$x_addr; //@line 138 "_math.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 137 "_math.c"
      case 1: // $bb
        var $5=($4) * 2; //@line 138 "_math.c"
        $0=$5; //@line 138 "_math.c"
        __label__ = 10; break; //@line 138 "_math.c"
      case 2: // $bb1
        var $6=_fabs($4); //@line 140 "_math.c"
        $absx=$6; //@line 140 "_math.c"
        var $7=$absx; //@line 141 "_math.c"
        var $8=($7) >= 1; //@line 141 "_math.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 141 "_math.c"
      case 3: // $bb2
        var $9=___errno_location(); //@line 142 "_math.c"
        HEAP[$9]=33; //@line 142 "_math.c"
        $0=NaN; //@line 144 "_math.c"
        __label__ = 10; break; //@line 144 "_math.c"
      case 4: // $bb3
        var $10=$absx; //@line 149 "_math.c"
        var $11=($10) < 3.725290298461914e-9; //@line 149 "_math.c"
        if ($11) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 149 "_math.c"
      case 5: // $bb4
        var $12=$x_addr; //@line 150 "_math.c"
        $0=$12; //@line 150 "_math.c"
        __label__ = 10; break; //@line 150 "_math.c"
      case 6: // $bb5
        var $13=$absx; //@line 152 "_math.c"
        var $14=($13) < 0.5; //@line 152 "_math.c"
        var $15=$absx; //@line 153 "_math.c"
        var $16=($15) * 2; //@line 153 "_math.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 152 "_math.c"
      case 7: // $bb6
        $t=$16; //@line 153 "_math.c"
        var $17=$t; //@line 154 "_math.c"
        var $18=$absx; //@line 154 "_math.c"
        var $19=($17) * ($18); //@line 154 "_math.c"
        var $20=$absx; //@line 154 "_math.c"
        var $21=1 - ($20); //@line 154 "_math.c"
        var $22=($19) / ($21); //@line 154 "_math.c"
        var $23=$t; //@line 154 "_math.c"
        var $24=($22) + ($23); //@line 154 "_math.c"
        var $25=_log1p($24); //@line 154 "_math.c"
        var $26=($25) * 0.5; //@line 154 "_math.c"
        $t=$26; //@line 154 "_math.c"
        __label__ = 9; break; //@line 154 "_math.c"
      case 8: // $bb7
        var $27=$absx; //@line 157 "_math.c"
        var $28=1 - ($27); //@line 157 "_math.c"
        var $29=($16) / ($28); //@line 157 "_math.c"
        var $30=_log1p($29); //@line 157 "_math.c"
        var $31=($30) * 0.5; //@line 157 "_math.c"
        $t=$31; //@line 157 "_math.c"
        __label__ = 9; break; //@line 157 "_math.c"
      case 9: // $bb8
        var $32=$t; //@line 159 "_math.c"
        var $33=$x_addr; //@line 159 "_math.c"
        var $34=_copysign($32, $33); //@line 159 "_math.c"
        $0=$34; //@line 159 "_math.c"
        __label__ = 10; break; //@line 159 "_math.c"
      case 10: // $bb9
        var $35=$0; //@line 138 "_math.c"
        $retval=$35; //@line 138 "_math.c"
        var $retval10=$retval; //@line 138 "_math.c"
        ;
        return $retval10; //@line 138 "_math.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __Py_expm1($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $u;
        $x_addr=$x;
        var $1=$x_addr; //@line 176 "_math.c"
        var $2=_fabs($1); //@line 176 "_math.c"
        var $3=($2) < 0.7; //@line 176 "_math.c"
        var $4=$x_addr; //@line 178 "_math.c"
        var $5=_llvm_exp_f64($4); //@line 178 "_math.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 4; break; } //@line 176 "_math.c"
      case 1: // $bb
        $u=$5; //@line 178 "_math.c"
        var $6=$u; //@line 179 "_math.c"
        var $7=($6) == 1; //@line 179 "_math.c"
        if ($7) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 179 "_math.c"
      case 2: // $bb1
        var $8=$x_addr; //@line 180 "_math.c"
        $0=$8; //@line 180 "_math.c"
        __label__ = 5; break; //@line 180 "_math.c"
      case 3: // $bb2
        var $9=$u; //@line 182 "_math.c"
        var $10=($9) - 1; //@line 182 "_math.c"
        var $11=$x_addr; //@line 182 "_math.c"
        var $12=($10) * ($11); //@line 182 "_math.c"
        var $13=$u; //@line 182 "_math.c"
        var $14=_llvm_log_f64($13); //@line 182 "_math.c"
        var $15=($12) / ($14); //@line 182 "_math.c"
        $0=$15; //@line 182 "_math.c"
        __label__ = 5; break; //@line 182 "_math.c"
      case 4: // $bb3
        var $16=($5) - 1; //@line 185 "_math.c"
        $0=$16; //@line 185 "_math.c"
        __label__ = 5; break; //@line 185 "_math.c"
      case 5: // $bb4
        var $17=$0; //@line 180 "_math.c"
        $retval=$17; //@line 180 "_math.c"
        var $retval5=$retval; //@line 180 "_math.c"
        ;
        return $retval5; //@line 180 "_math.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function __Py_log1p($x) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $x_addr;
        var $retval;
        var $0;
        var $y;
        $x_addr=$x;
        var $1=$x_addr; //@line 216 "_math.c"
        var $2=_fabs($1); //@line 216 "_math.c"
        var $3=($2) < 1.1102230246251565e-16; //@line 216 "_math.c"
        var $4=$x_addr; //@line 217 "_math.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 216 "_math.c"
      case 1: // $bb
        $0=$4; //@line 217 "_math.c"
        __label__ = 5; break; //@line 217 "_math.c"
      case 2: // $bb1
        var $5=($4) < -0.5; //@line 219 "_math.c"
        var $6=$x_addr; //@line 219 "_math.c"
        var $7=($6) > 1; //@line 219 "_math.c"
        var $or_cond=($5) | ($7);
        var $8=$x_addr; //@line 230 "_math.c"
        var $9=($8) + 1; //@line 230 "_math.c"
        if ($or_cond) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 219 "_math.c"
      case 3: // $bb3
        $y=$9; //@line 225 "_math.c"
        var $10=$y; //@line 226 "_math.c"
        var $11=_llvm_log_f64($10); //@line 226 "_math.c"
        var $12=$y; //@line 226 "_math.c"
        var $13=($12) - 1; //@line 226 "_math.c"
        var $14=$x_addr; //@line 226 "_math.c"
        var $15=($13) - ($14); //@line 226 "_math.c"
        var $16=$y; //@line 226 "_math.c"
        var $17=($15) / ($16); //@line 226 "_math.c"
        var $18=($11) - ($17); //@line 226 "_math.c"
        $0=$18; //@line 226 "_math.c"
        __label__ = 5; break; //@line 226 "_math.c"
      case 4: // $bb4
        var $19=_llvm_log_f64($9); //@line 230 "_math.c"
        $0=$19; //@line 230 "_math.c"
        __label__ = 5; break; //@line 230 "_math.c"
      case 5: // $bb5
        var $20=$0; //@line 217 "_math.c"
        $retval=$20; //@line 217 "_math.c"
        var $retval6=$retval; //@line 217 "_math.c"
        ;
        return $retval6; //@line 217 "_math.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_acos,0,_acosh,0,_asin,0,_asinh,0,_atan,0,_m_atan2,0,_atanh,0,_ceil,0,_copysign,0,_cos,0,_cosh,0,_m_erf,0,_m_erfc,0,_exp,0,_expm1,0,_fabs,0,_floor,0,_m_tgamma,0,_m_lgamma,0,_log1p,0,_sin,0,_sinh,0,_sqrt,0,_tan,0,_tanh,0,_m_log,0,_m_log10,0,_math_acos,0,_math_acosh,0,_math_asin,0,_math_asinh,0,_math_atan,0,_math_atan2,0,_math_atanh,0,_math_ceil,0,_math_copysign,0,_math_cos,0,_math_cosh,0,_math_degrees,0,_math_erf,0,_math_erfc,0,_math_exp,0,_math_expm1,0,_math_fabs,0,_math_factorial,0,_math_floor,0,_math_fmod,0,_math_frexp,0,_math_fsum,0,_math_gamma,0,_math_hypot,0,_math_isinf,0,_math_isnan,0,_math_ldexp,0,_math_lgamma,0,_math_log,0,_math_log1p,0,_math_log10,0,_math_modf,0,_math_pow,0,_math_radians,0,_math_sin,0,_math_sinh,0,_math_sqrt,0,_math_tan,0,_math_tanh,0,_math_trunc,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
__str=allocate([40,115,105,122,101,111,102,32,40,120,41,32,61,61,32,115,105,122,101,111,102,32,40,102,108,111,97,116,41,32,63,32,95,95,102,105,110,105,116,101,102,32,40,120,41,32,58,32,115,105,122,101,111,102,32,40,120,41,32,61,61,32,115,105,122,101,111,102,32,40,100,111,117,98,108,101,41,32,63,32,95,95,102,105,110,105,116,101,32,40,120,41,32,58,32,95,95,102,105,110,105,116,101,108,32,40,120,41,41,0] /* (sizeof (x) == sizeo */, "i8", ALLOC_NORMAL);
__str1=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,109,97,116,104,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/m */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8323=allocate([115,105,110,112,105,0] /* sinpi\00 */, "i8", ALLOC_NORMAL);
__str2=allocate([48,32,60,61,32,110,32,38,38,32,110,32,60,61,32,52,0] /* 0 <= n && n <= 4\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([48,0] /* 0\00 */, "i8", ALLOC_NORMAL);
_lanczos_num_coeffs=allocate([23531376880.41076, 0, 0, 0, 0, 0, 0, 0, 42919803642.6491, 0, 0, 0, 0, 0, 0, 0, 35711959237.35567, 0, 0, 0, 0, 0, 0, 0, 17921034426.03721, 0, 0, 0, 0, 0, 0, 0, 6039542586.352028, 0, 0, 0, 0, 0, 0, 0, 1439720407.3117216, 0, 0, 0, 0, 0, 0, 0, 248874557.86205417, 0, 0, 0, 0, 0, 0, 0, 31426415.585400194, 0, 0, 0, 0, 0, 0, 0, 2876370.6289353725, 0, 0, 0, 0, 0, 0, 0, 186056.26539522348, 0, 0, 0, 0, 0, 0, 0, 8071.672002365816, 0, 0, 0, 0, 0, 0, 0, 210.82427775157936, 0, 0, 0, 0, 0, 0, 0, 2.5066282746310002, 0, 0, 0, 0, 0, 0, 0], ["double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0], ALLOC_NORMAL);
_lanczos_den_coeffs=allocate([0, 0, 0, 0, 0, 0, 0, 0, 39916800, 0, 0, 0, 0, 0, 0, 0, 120543840, 0, 0, 0, 0, 0, 0, 0, 150917976, 0, 0, 0, 0, 0, 0, 0, 105258076, 0, 0, 0, 0, 0, 0, 0, 45995730, 0, 0, 0, 0, 0, 0, 0, 13339535, 0, 0, 0, 0, 0, 0, 0, 2637558, 0, 0, 0, 0, 0, 0, 0, 357423, 0, 0, 0, 0, 0, 0, 0, 32670, 0, 0, 0, 0, 0, 0, 0, 1925, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], ["double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0], ALLOC_NORMAL);
_gamma_integral=allocate([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 720, 0, 0, 0, 0, 0, 0, 0, 5040, 0, 0, 0, 0, 0, 0, 0, 40320, 0, 0, 0, 0, 0, 0, 0, 362880, 0, 0, 0, 0, 0, 0, 0, 3628800, 0, 0, 0, 0, 0, 0, 0, 39916800, 0, 0, 0, 0, 0, 0, 0, 479001600, 0, 0, 0, 0, 0, 0, 0, 6227020800, 0, 0, 0, 0, 0, 0, 0, 87178291200, 0, 0, 0, 0, 0, 0, 0, 1307674368000, 0, 0, 0, 0, 0, 0, 0, 20922789888000, 0, 0, 0, 0, 0, 0, 0, 355687428096000, 0, 0, 0, 0, 0, 0, 0, 6402373705728000, 0, 0, 0, 0, 0, 0, 0, 121645100408832000, 0, 0, 0, 0, 0, 0, 0, 2432902008176640000, 0, 0, 0, 0, 0, 0, 0, 51090942171709440000, 0, 0, 0, 0, 0, 0, 0, 1.1240007277776077e+21, 0, 0, 0, 0, 0, 0, 0], ["double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0,"double",0,0,0,0,0,0,0], ALLOC_NORMAL);
__str4=allocate([120,32,62,32,48,46,48,0] /* x > 0.0\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8369=allocate([108,97,110,99,122,111,115,95,115,117,109,0] /* lanczos_sum\00 */, "i8", ALLOC_NORMAL);
__str5=allocate([40,42,95,95,101,114,114,110,111,95,108,111,99,97,116,105,111,110,32,40,41,41,0] /* (___errno_location ( */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___8706=allocate([105,115,95,101,114,114,111,114,0] /* is_error\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([109,97,116,104,32,100,111,109,97,105,110,32,101,114,114,111,114,0] /* math domain error\00 */, "i8", ALLOC_NORMAL);
__str7=allocate([109,97,116,104,32,114,97,110,103,101,32,101,114,114,111,114,0] /* math range error\00 */, "i8", ALLOC_NORMAL);
_math_acos_doc=allocate([97,99,111,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,99,111,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* acos(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_acosh_doc=allocate([97,99,111,115,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,99,111,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* acosh(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_asin_doc=allocate([97,115,105,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* asin(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_asinh_doc=allocate([97,115,105,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,115,105,110,101,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* asinh(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_atan_doc=allocate([97,116,97,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* atan(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
__str8=allocate([97,116,97,110,50,0] /* atan2\00 */, "i8", ALLOC_NORMAL);
_math_atan2_doc=allocate([97,116,97,110,50,40,121,44,32,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,121,47,120,46,10,85,110,108,105,107,101,32,97,116,97,110,40,121,47,120,41,44,32,116,104,101,32,115,105,103,110,115,32,111,102,32,98,111,116,104,32,120,32,97,110,100,32,121,32,97,114,101,32,99,111,110,115,105,100,101,114,101,100,46,0] /* atan2(y, x)\0A\0ARet */, "i8", ALLOC_NORMAL);
_math_atanh_doc=allocate([97,116,97,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,97,114,99,32,116,97,110,103,101,110,116,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,32,111,102,32,120,46,0] /* atanh(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_ceil_doc=allocate([99,101,105,108,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,99,101,105,108,105,110,103,32,111,102,32,120,32,97,115,32,97,32,102,108,111,97,116,46,10,84,104,105,115,32,105,115,32,116,104,101,32,115,109,97,108,108,101,115,116,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,32,62,61,32,120,46,0] /* ceil(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
__str9=allocate([99,111,112,121,115,105,103,110,0] /* copysign\00 */, "i8", ALLOC_NORMAL);
_math_copysign_doc=allocate([99,111,112,121,115,105,103,110,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,120,32,119,105,116,104,32,116,104,101,32,115,105,103,110,32,111,102,32,121,46,0] /* copysign(x, y)\0A\0A */, "i8", ALLOC_NORMAL);
_math_cos_doc=allocate([99,111,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,99,111,115,105,110,101,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0] /* cos(x)\0A\0AReturn t */, "i8", ALLOC_NORMAL);
_math_cosh_doc=allocate([99,111,115,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,99,111,115,105,110,101,32,111,102,32,120,46,0] /* cosh(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_erf_doc=allocate([101,114,102,40,120,41,10,10,69,114,114,111,114,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0] /* erf(x)\0A\0AError fu */, "i8", ALLOC_NORMAL);
_math_erfc_doc=allocate([101,114,102,99,40,120,41,10,10,67,111,109,112,108,101,109,101,110,116,97,114,121,32,101,114,114,111,114,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0] /* erfc(x)\0A\0AComplem */, "i8", ALLOC_NORMAL);
_math_exp_doc=allocate([101,120,112,40,120,41,10,10,82,101,116,117,114,110,32,101,32,114,97,105,115,101,100,32,116,111,32,116,104,101,32,112,111,119,101,114,32,111,102,32,120,46,0] /* exp(x)\0A\0AReturn e */, "i8", ALLOC_NORMAL);
_math_expm1_doc=allocate([101,120,112,109,49,40,120,41,10,10,82,101,116,117,114,110,32,101,120,112,40,120,41,45,49,46,10,84,104,105,115,32,102,117,110,99,116,105,111,110,32,97,118,111,105,100,115,32,116,104,101,32,108,111,115,115,32,111,102,32,112,114,101,99,105,115,105,111,110,32,105,110,118,111,108,118,101,100,32,105,110,32,116,104,101,32,100,105,114,101,99,116,32,101,118,97,108,117,97,116,105,111,110,32,111,102,32,101,120,112,40,120,41,45,49,32,102,111,114,32,115,109,97,108,108,32,120,46,0] /* expm1(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_fabs_doc=allocate([102,97,98,115,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,97,98,115,111,108,117,116,101,32,118,97,108,117,101,32,111,102,32,116,104,101,32,102,108,111,97,116,32,120,46,0] /* fabs(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_floor_doc=allocate([102,108,111,111,114,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,102,108,111,111,114,32,111,102,32,120,32,97,115,32,97,32,102,108,111,97,116,46,10,84,104,105,115,32,105,115,32,116,104,101,32,108,97,114,103,101,115,116,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,32,60,61,32,120,46,0] /* floor(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_gamma_doc=allocate([103,97,109,109,97,40,120,41,10,10,71,97,109,109,97,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0] /* gamma(x)\0A\0AGamma  */, "i8", ALLOC_NORMAL);
_math_lgamma_doc=allocate([108,103,97,109,109,97,40,120,41,10,10,78,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,111,102,32,97,98,115,111,108,117,116,101,32,118,97,108,117,101,32,111,102,32,71,97,109,109,97,32,102,117,110,99,116,105,111,110,32,97,116,32,120,46,0] /* lgamma(x)\0A\0ANatur */, "i8", ALLOC_NORMAL);
_math_log1p_doc=allocate([108,111,103,49,112,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,110,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,111,102,32,49,43,120,32,40,98,97,115,101,32,101,41,46,10,84,104,101,32,114,101,115,117,108,116,32,105,115,32,99,111,109,112,117,116,101,100,32,105,110,32,97,32,119,97,121,32,119,104,105,99,104,32,105,115,32,97,99,99,117,114,97,116,101,32,102,111,114,32,120,32,110,101,97,114,32,122,101,114,111,46,0] /* log1p(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
_math_sin_doc=allocate([115,105,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,115,105,110,101,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0] /* sin(x)\0A\0AReturn t */, "i8", ALLOC_NORMAL);
_math_sinh_doc=allocate([115,105,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,115,105,110,101,32,111,102,32,120,46,0] /* sinh(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_sqrt_doc=allocate([115,113,114,116,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,115,113,117,97,114,101,32,114,111,111,116,32,111,102,32,120,46,0] /* sqrt(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
_math_tan_doc=allocate([116,97,110,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,116,97,110,103,101,110,116,32,111,102,32,120,32,40,109,101,97,115,117,114,101,100,32,105,110,32,114,97,100,105,97,110,115,41,46,0] /* tan(x)\0A\0AReturn t */, "i8", ALLOC_NORMAL);
_math_tanh_doc=allocate([116,97,110,104,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,104,121,112,101,114,98,111,108,105,99,32,116,97,110,103,101,110,116,32,111,102,32,120,46,0] /* tanh(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
__str10=allocate([109,97,116,104,46,102,115,117,109,32,112,97,114,116,105,97,108,115,0] /* math.fsum partials\0 */, "i8", ALLOC_NORMAL);
__str11=allocate([48,32,60,61,32,110,32,38,38,32,110,32,60,61,32,109,0] /* 0 <= n && n <= m\00 */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___9121=allocate([109,97,116,104,95,102,115,117,109,0] /* math_fsum\00 */, "i8", ALLOC_NORMAL);
__str12=allocate([40,109,32,61,61,32,51,50,32,38,38,32,112,32,61,61,32,112,115,41,32,124,124,32,40,109,32,62,32,51,50,32,38,38,32,112,32,33,61,32,40,40,118,111,105,100,32,42,41,48,41,41,0] /* (m == 32 && p == ps) */, "i8", ALLOC_NORMAL);
__str13=allocate([105,110,116,101,114,109,101,100,105,97,116,101,32,111,118,101,114,102,108,111,119,32,105,110,32,102,115,117,109,0] /* intermediate overflo */, "i8", ALLOC_NORMAL);
__str14=allocate([45,105,110,102,32,43,32,105,110,102,32,105,110,32,102,115,117,109,0] /* -inf + inf in fsum\0 */, "i8", ALLOC_NORMAL);
__str15=allocate([102,97,98,115,40,121,41,32,60,32,102,97,98,115,40,120,41,0] /* fabs(y) < fabs(x)\00 */, "i8", ALLOC_NORMAL);
_math_fsum_doc=allocate([102,115,117,109,40,105,116,101,114,97,98,108,101,41,10,10,82,101,116,117,114,110,32,97,110,32,97,99,99,117,114,97,116,101,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,115,117,109,32,111,102,32,118,97,108,117,101,115,32,105,110,32,116,104,101,32,105,116,101,114,97,98,108,101,46,10,65,115,115,117,109,101,115,32,73,69,69,69,45,55,53,52,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,97,114,105,116,104,109,101,116,105,99,46,0] /* fsum(iterable)\0A\0A */, "i8", ALLOC_NORMAL);
__str16=allocate([102,97,99,116,111,114,105,97,108,40,41,32,111,110,108,121,32,97,99,99,101,112,116,115,32,105,110,116,101,103,114,97,108,32,118,97,108,117,101,115,0] /* factorial() only acc */, "i8", ALLOC_NORMAL);
__str17=allocate([102,97,99,116,111,114,105,97,108,40,41,32,110,111,116,32,100,101,102,105,110,101,100,32,102,111,114,32,110,101,103,97,116,105,118,101,32,118,97,108,117,101,115,0] /* factorial() not defi */, "i8", ALLOC_NORMAL);
_math_factorial_doc=allocate([102,97,99,116,111,114,105,97,108,40,120,41,32,45,62,32,73,110,116,101,103,114,97,108,10,10,70,105,110,100,32,120,33,46,32,82,97,105,115,101,32,97,32,86,97,108,117,101,69,114,114,111,114,32,105,102,32,120,32,105,115,32,110,101,103,97,116,105,118,101,32,111,114,32,110,111,110,45,105,110,116,101,103,114,97,108,46,0] /* factorial(x) -> Inte */, "i8", ALLOC_NORMAL);
__str18=allocate([95,95,116,114,117,110,99,95,95,0] /* __trunc__\00 */, "i8", ALLOC_NORMAL);
_math_trunc_doc=allocate([116,114,117,110,99,40,120,58,82,101,97,108,41,32,45,62,32,73,110,116,101,103,114,97,108,10,10,84,114,117,110,99,97,116,101,115,32,120,32,116,111,32,116,104,101,32,110,101,97,114,101,115,116,32,73,110,116,101,103,114,97,108,32,116,111,119,97,114,100,32,48,46,32,85,115,101,115,32,116,104,101,32,95,95,116,114,117,110,99,95,95,32,109,97,103,105,99,32,109,101,116,104,111,100,46,0] /* trunc(x:Real) -> Int */, "i8", ALLOC_NORMAL);
__str19=allocate([40,100,105,41,0] /* (di)\00 */, "i8", ALLOC_NORMAL);
_math_frexp_doc=allocate([102,114,101,120,112,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,109,97,110,116,105,115,115,97,32,97,110,100,32,101,120,112,111,110,101,110,116,32,111,102,32,120,44,32,97,115,32,112,97,105,114,32,40,109,44,32,101,41,46,10,109,32,105,115,32,97,32,102,108,111,97,116,32,97,110,100,32,101,32,105,115,32,97,110,32,105,110,116,44,32,115,117,99,104,32,116,104,97,116,32,120,32,61,32,109,32,42,32,50,46,42,42,101,46,10,73,102,32,120,32,105,115,32,48,44,32,109,32,97,110,100,32,101,32,97,114,101,32,98,111,116,104,32,48,46,32,32,69,108,115,101,32,48,46,53,32,60,61,32,97,98,115,40,109,41,32,60,32,49,46,48,46,0] /* frexp(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
__str20=allocate([100,79,58,108,100,101,120,112,0] /* dO:ldexp\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([69,120,112,101,99,116,101,100,32,97,110,32,105,110,116,32,111,114,32,108,111,110,103,32,97,115,32,115,101,99,111,110,100,32,97,114,103,117,109,101,110,116,32,116,111,32,108,100,101,120,112,46,0] /* Expected an int or l */, "i8", ALLOC_NORMAL);
_math_ldexp_doc=allocate([108,100,101,120,112,40,120,44,32,105,41,10,10,82,101,116,117,114,110,32,120,32,42,32,40,50,42,42,105,41,46,0] /* ldexp(x, i)\0A\0ARet */, "i8", ALLOC_NORMAL);
__str22=allocate([40,100,100,41,0] /* (dd)\00 */, "i8", ALLOC_NORMAL);
_math_modf_doc=allocate([109,111,100,102,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,102,114,97,99,116,105,111,110,97,108,32,97,110,100,32,105,110,116,101,103,101,114,32,112,97,114,116,115,32,111,102,32,120,46,32,32,66,111,116,104,32,114,101,115,117,108,116,115,32,99,97,114,114,121,32,116,104,101,32,115,105,103,110,10,111,102,32,120,32,97,110,100,32,97,114,101,32,102,108,111,97,116,115,46,0] /* modf(x)\0A\0AReturn  */, "i8", ALLOC_NORMAL);
__str23=allocate([108,111,103,0] /* log\00 */, "i8", ALLOC_NORMAL);
_math_log_doc=allocate([108,111,103,40,120,91,44,32,98,97,115,101,93,41,10,10,82,101,116,117,114,110,32,116,104,101,32,108,111,103,97,114,105,116,104,109,32,111,102,32,120,32,116,111,32,116,104,101,32,103,105,118,101,110,32,98,97,115,101,46,10,73,102,32,116,104,101,32,98,97,115,101,32,110,111,116,32,115,112,101,99,105,102,105,101,100,44,32,114,101,116,117,114,110,115,32,116,104,101,32,110,97,116,117,114,97,108,32,108,111,103,97,114,105,116,104,109,32,40,98,97,115,101,32,101,41,32,111,102,32,120,46,0] /* log(x[, base])\0A\0A */, "i8", ALLOC_NORMAL);
__str24=allocate([108,111,103,49,48,0] /* log10\00 */, "i8", ALLOC_NORMAL);
_math_log10_doc=allocate([108,111,103,49,48,40,120,41,10,10,82,101,116,117,114,110,32,116,104,101,32,98,97,115,101,32,49,48,32,108,111,103,97,114,105,116,104,109,32,111,102,32,120,46,0] /* log10(x)\0A\0AReturn */, "i8", ALLOC_NORMAL);
__str25=allocate([102,109,111,100,0] /* fmod\00 */, "i8", ALLOC_NORMAL);
_math_fmod_doc=allocate([102,109,111,100,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,102,109,111,100,40,120,44,32,121,41,44,32,97,99,99,111,114,100,105,110,103,32,116,111,32,112,108,97,116,102,111,114,109,32,67,46,32,32,120,32,37,32,121,32,109,97,121,32,100,105,102,102,101,114,46,0] /* fmod(x, y)\0A\0ARetu */, "i8", ALLOC_NORMAL);
__str26=allocate([104,121,112,111,116,0] /* hypot\00 */, "i8", ALLOC_NORMAL);
_math_hypot_doc=allocate([104,121,112,111,116,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,116,104,101,32,69,117,99,108,105,100,101,97,110,32,100,105,115,116,97,110,99,101,44,32,115,113,114,116,40,120,42,120,32,43,32,121,42,121,41,46,0] /* hypot(x, y)\0A\0ARet */, "i8", ALLOC_NORMAL);
__str27=allocate([112,111,119,0] /* pow\00 */, "i8", ALLOC_NORMAL);
_math_pow_doc=allocate([112,111,119,40,120,44,32,121,41,10,10,82,101,116,117,114,110,32,120,42,42,121,32,40,120,32,116,111,32,116,104,101,32,112,111,119,101,114,32,111,102,32,121,41,46,0] /* pow(x, y)\0A\0ARetur */, "i8", ALLOC_NORMAL);
_math_degrees_doc=allocate([100,101,103,114,101,101,115,40,120,41,10,10,67,111,110,118,101,114,116,32,97,110,103,108,101,32,120,32,102,114,111,109,32,114,97,100,105,97,110,115,32,116,111,32,100,101,103,114,101,101,115,46,0] /* degrees(x)\0A\0AConv */, "i8", ALLOC_NORMAL);
_math_radians_doc=allocate([114,97,100,105,97,110,115,40,120,41,10,10,67,111,110,118,101,114,116,32,97,110,103,108,101,32,120,32,102,114,111,109,32,100,101,103,114,101,101,115,32,116,111,32,114,97,100,105,97,110,115,46,0] /* radians(x)\0A\0AConv */, "i8", ALLOC_NORMAL);
_math_isnan_doc=allocate([105,115,110,97,110,40,120,41,32,45,62,32,98,111,111,108,10,10,67,104,101,99,107,32,105,102,32,102,108,111,97,116,32,120,32,105,115,32,110,111,116,32,97,32,110,117,109,98,101,114,32,40,78,97,78,41,46,0] /* isnan(x) -> bool\0A\ */, "i8", ALLOC_NORMAL);
_math_isinf_doc=allocate([105,115,105,110,102,40,120,41,32,45,62,32,98,111,111,108,10,10,67,104,101,99,107,32,105,102,32,102,108,111,97,116,32,120,32,105,115,32,105,110,102,105,110,105,116,101,32,40,112,111,115,105,116,105,118,101,32,111,114,32,110,101,103,97,116,105,118,101,41,46,0] /* isinf(x) -> bool\0A\ */, "i8", ALLOC_NORMAL);
__str28=allocate([97,99,111,115,0] /* acos\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([97,99,111,115,104,0] /* acosh\00 */, "i8", ALLOC_NORMAL);
__str30=allocate([97,115,105,110,0] /* asin\00 */, "i8", ALLOC_NORMAL);
__str31=allocate([97,115,105,110,104,0] /* asinh\00 */, "i8", ALLOC_NORMAL);
__str32=allocate([97,116,97,110,0] /* atan\00 */, "i8", ALLOC_NORMAL);
__str33=allocate([97,116,97,110,104,0] /* atanh\00 */, "i8", ALLOC_NORMAL);
__str34=allocate([99,101,105,108,0] /* ceil\00 */, "i8", ALLOC_NORMAL);
__str35=allocate([99,111,115,0] /* cos\00 */, "i8", ALLOC_NORMAL);
__str36=allocate([99,111,115,104,0] /* cosh\00 */, "i8", ALLOC_NORMAL);
__str37=allocate([100,101,103,114,101,101,115,0] /* degrees\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([101,114,102,0] /* erf\00 */, "i8", ALLOC_NORMAL);
__str39=allocate([101,114,102,99,0] /* erfc\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([101,120,112,0] /* exp\00 */, "i8", ALLOC_NORMAL);
__str41=allocate([101,120,112,109,49,0] /* expm1\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([102,97,98,115,0] /* fabs\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([102,97,99,116,111,114,105,97,108,0] /* factorial\00 */, "i8", ALLOC_NORMAL);
__str44=allocate([102,108,111,111,114,0] /* floor\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([102,114,101,120,112,0] /* frexp\00 */, "i8", ALLOC_NORMAL);
__str46=allocate([102,115,117,109,0] /* fsum\00 */, "i8", ALLOC_NORMAL);
__str47=allocate([103,97,109,109,97,0] /* gamma\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([105,115,105,110,102,0] /* isinf\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([105,115,110,97,110,0] /* isnan\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([108,100,101,120,112,0] /* ldexp\00 */, "i8", ALLOC_NORMAL);
__str51=allocate([108,103,97,109,109,97,0] /* lgamma\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([108,111,103,49,112,0] /* log1p\00 */, "i8", ALLOC_NORMAL);
__str53=allocate([109,111,100,102,0] /* modf\00 */, "i8", ALLOC_NORMAL);
__str54=allocate([114,97,100,105,97,110,115,0] /* radians\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([115,105,110,0] /* sin\00 */, "i8", ALLOC_NORMAL);
__str56=allocate([115,105,110,104,0] /* sinh\00 */, "i8", ALLOC_NORMAL);
__str57=allocate([115,113,114,116,0] /* sqrt\00 */, "i8", ALLOC_NORMAL);
__str58=allocate([116,97,110,0] /* tan\00 */, "i8", ALLOC_NORMAL);
__str59=allocate([116,97,110,104,0] /* tanh\00 */, "i8", ALLOC_NORMAL);
__str60=allocate([116,114,117,110,99,0] /* trunc\00 */, "i8", ALLOC_NORMAL);
_math_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_module_doc=allocate([84,104,105,115,32,109,111,100,117,108,101,32,105,115,32,97,108,119,97,121,115,32,97,118,97,105,108,97,98,108,101,46,32,32,73,116,32,112,114,111,118,105,100,101,115,32,97,99,99,101,115,115,32,116,111,32,116,104,101,10,109,97,116,104,101,109,97,116,105,99,97,108,32,102,117,110,99,116,105,111,110,115,32,100,101,102,105,110,101,100,32,98,121,32,116,104,101,32,67,32,115,116,97,110,100,97,114,100,46,0] /* This module is alway */, "i8", ALLOC_NORMAL);
__str61=allocate([109,97,116,104,0] /* math\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([112,105,0] /* pi\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([101,0] /* e\00 */, "i8", ALLOC_NORMAL);
HEAP[_math_methods]=__str28;
HEAP[_math_methods+4]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_math_methods+12]=_math_acos_doc;
HEAP[_math_methods+16]=__str29;
HEAP[_math_methods+20]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_math_methods+28]=_math_acosh_doc;
HEAP[_math_methods+32]=__str30;
HEAP[_math_methods+36]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_math_methods+44]=_math_asin_doc;
HEAP[_math_methods+48]=__str31;
HEAP[_math_methods+52]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_math_methods+60]=_math_asinh_doc;
HEAP[_math_methods+64]=__str32;
HEAP[_math_methods+68]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_math_methods+76]=_math_atan_doc;
HEAP[_math_methods+80]=__str8;
HEAP[_math_methods+84]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_math_methods+92]=_math_atan2_doc;
HEAP[_math_methods+96]=__str33;
HEAP[_math_methods+100]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_math_methods+108]=_math_atanh_doc;
HEAP[_math_methods+112]=__str34;
HEAP[_math_methods+116]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_math_methods+124]=_math_ceil_doc;
HEAP[_math_methods+128]=__str9;
HEAP[_math_methods+132]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_math_methods+140]=_math_copysign_doc;
HEAP[_math_methods+144]=__str35;
HEAP[_math_methods+148]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_math_methods+156]=_math_cos_doc;
HEAP[_math_methods+160]=__str36;
HEAP[_math_methods+164]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_math_methods+172]=_math_cosh_doc;
HEAP[_math_methods+176]=__str37;
HEAP[_math_methods+180]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_math_methods+188]=_math_degrees_doc;
HEAP[_math_methods+192]=__str38;
HEAP[_math_methods+196]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_math_methods+204]=_math_erf_doc;
HEAP[_math_methods+208]=__str39;
HEAP[_math_methods+212]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_math_methods+220]=_math_erfc_doc;
HEAP[_math_methods+224]=__str40;
HEAP[_math_methods+228]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_math_methods+236]=_math_exp_doc;
HEAP[_math_methods+240]=__str41;
HEAP[_math_methods+244]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_math_methods+252]=_math_expm1_doc;
HEAP[_math_methods+256]=__str42;
HEAP[_math_methods+260]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_math_methods+268]=_math_fabs_doc;
HEAP[_math_methods+272]=__str43;
HEAP[_math_methods+276]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_math_methods+284]=_math_factorial_doc;
HEAP[_math_methods+288]=__str44;
HEAP[_math_methods+292]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_math_methods+300]=_math_floor_doc;
HEAP[_math_methods+304]=__str25;
HEAP[_math_methods+308]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_math_methods+316]=_math_fmod_doc;
HEAP[_math_methods+320]=__str45;
HEAP[_math_methods+324]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_math_methods+332]=_math_frexp_doc;
HEAP[_math_methods+336]=__str46;
HEAP[_math_methods+340]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_math_methods+348]=_math_fsum_doc;
HEAP[_math_methods+352]=__str47;
HEAP[_math_methods+356]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_math_methods+364]=_math_gamma_doc;
HEAP[_math_methods+368]=__str26;
HEAP[_math_methods+372]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_math_methods+380]=_math_hypot_doc;
HEAP[_math_methods+384]=__str48;
HEAP[_math_methods+388]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_math_methods+396]=_math_isinf_doc;
HEAP[_math_methods+400]=__str49;
HEAP[_math_methods+404]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_math_methods+412]=_math_isnan_doc;
HEAP[_math_methods+416]=__str50;
HEAP[_math_methods+420]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_math_methods+428]=_math_ldexp_doc;
HEAP[_math_methods+432]=__str51;
HEAP[_math_methods+436]=(FUNCTION_TABLE_OFFSET + 110);
HEAP[_math_methods+444]=_math_lgamma_doc;
HEAP[_math_methods+448]=__str23;
HEAP[_math_methods+452]=(FUNCTION_TABLE_OFFSET + 112);
HEAP[_math_methods+460]=_math_log_doc;
HEAP[_math_methods+464]=__str52;
HEAP[_math_methods+468]=(FUNCTION_TABLE_OFFSET + 114);
HEAP[_math_methods+476]=_math_log1p_doc;
HEAP[_math_methods+480]=__str24;
HEAP[_math_methods+484]=(FUNCTION_TABLE_OFFSET + 116);
HEAP[_math_methods+492]=_math_log10_doc;
HEAP[_math_methods+496]=__str53;
HEAP[_math_methods+500]=(FUNCTION_TABLE_OFFSET + 118);
HEAP[_math_methods+508]=_math_modf_doc;
HEAP[_math_methods+512]=__str27;
HEAP[_math_methods+516]=(FUNCTION_TABLE_OFFSET + 120);
HEAP[_math_methods+524]=_math_pow_doc;
HEAP[_math_methods+528]=__str54;
HEAP[_math_methods+532]=(FUNCTION_TABLE_OFFSET + 122);
HEAP[_math_methods+540]=_math_radians_doc;
HEAP[_math_methods+544]=__str55;
HEAP[_math_methods+548]=(FUNCTION_TABLE_OFFSET + 124);
HEAP[_math_methods+556]=_math_sin_doc;
HEAP[_math_methods+560]=__str56;
HEAP[_math_methods+564]=(FUNCTION_TABLE_OFFSET + 126);
HEAP[_math_methods+572]=_math_sinh_doc;
HEAP[_math_methods+576]=__str57;
HEAP[_math_methods+580]=(FUNCTION_TABLE_OFFSET + 128);
HEAP[_math_methods+588]=_math_sqrt_doc;
HEAP[_math_methods+592]=__str58;
HEAP[_math_methods+596]=(FUNCTION_TABLE_OFFSET + 130);
HEAP[_math_methods+604]=_math_tan_doc;
HEAP[_math_methods+608]=__str59;
HEAP[_math_methods+612]=(FUNCTION_TABLE_OFFSET + 132);
HEAP[_math_methods+620]=_math_tanh_doc;
HEAP[_math_methods+624]=__str60;
HEAP[_math_methods+628]=(FUNCTION_TABLE_OFFSET + 134);
HEAP[_math_methods+636]=_math_trunc_doc;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

