"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 656;
  var $1___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyFloatObject___SIZE = 16;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyLongObject___SIZE = 0;
  var $struct_PyLongObject___FLATTENER = [];
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
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
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $y;
      var $r;
      var $n;
      $x_addr = $x;
      
      var $2 = ___finite($x_addr);
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str, __str1, 79, ___PRETTY_FUNCTION___8323);
      throw "Reached an unreachable!";
     case 2:
      
      var $5 = _fabs($x_addr);
      var $6 = _fmod($5, 2);
      $y = $6;
      
      
      var $9 = _round($y * 2);
      
      $n = $9 | 0;
      
      
      
      
      
      if ($n < 0 | $n > 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      ___assert_fail(__str2, __str1, 82, ___PRETTY_FUNCTION___8323);
      throw "Reached an unreachable!";
     case 4:
      var $15 = $n;
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else if ($15 == 1) {
        __label__ = 6;
        break;
      } else if ($15 == 2) {
        __label__ = 7;
        break;
      } else if ($15 == 3) {
        __label__ = 8;
        break;
      } else if ($15 == 4) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 5:
      
      
      var $18 = _sin(3.141592653589793 * $y);
      $r = $18;
      __label__ = 11;
      break;
     case 6:
      
      
      
      var $22 = _cos(($y - .5) * 3.141592653589793);
      $r = $22;
      __label__ = 11;
      break;
     case 7:
      
      
      
      var $26 = _sin((1 - $y) * 3.141592653589793);
      $r = $26;
      __label__ = 11;
      break;
     case 8:
      
      
      
      var $30 = _cos(($y - 1.5) * 3.141592653589793);
      
      $r = 0 - $30;
      __label__ = 11;
      break;
     case 9:
      
      
      
      var $35 = _sin(($y - 2) * 3.141592653589793);
      $r = $35;
      __label__ = 11;
      break;
     case 10:
      ___assert_fail(__str3, __str1, 102, ___PRETTY_FUNCTION___8323);
      throw "Reached an unreachable!";
     case 11:
      
      var $37 = _copysign(1, $x_addr);
      
      
      $0 = $37 * $r;
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _lanczos_sum($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $num;
      var $den;
      var $i;
      $x_addr = $x;
      $num = 0;
      $den = 0;
      
      
      if ($x_addr <= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str4, __str1, 206, ___PRETTY_FUNCTION___8369);
      throw "Reached an unreachable!";
     case 2:
      
      
      if ($x_addr < 5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      $i = 13;
      
      var $6 = $i - 1;
      $i = $6;
      
      if ($6 >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      
      
      
      
      var $14 = $num * $x_addr + HEAP[_lanczos_num_coeffs + $i * 8];
      $num = $14;
      
      
      
      
      
      
      var $21 = $den * $x_addr + HEAP[_lanczos_den_coeffs + $i * 8];
      $den = $21;
      
      var $23 = $i - 1;
      $i = $23;
      
      if ($23 >= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      $i = 0;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      
      var $31 = $num / $x_addr + HEAP[_lanczos_num_coeffs + $i * 8];
      $num = $31;
      
      
      
      
      
      
      var $38 = $den / $x_addr + HEAP[_lanczos_den_coeffs + $i * 8];
      $den = $38;
      
      var $40 = $i + 1;
      $i = $40;
      
      if ($40 <= 12) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      $0 = $num / $den;
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _m_tgamma($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      $x_addr = $x;
      
      var $2 = ___finite($x_addr);
      
      var $4 = $x_addr;
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $5 = ___isnan($4);
      
      
      
      
      if ($5 != 0 | $x_addr > 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $x_addr;
      __label__ = 32;
      break;
     case 3:
      var $10 = ___errno_location();
      HEAP[$10] = 33;
      $0 = NaN;
      __label__ = 32;
      break;
     case 4:
      
      if ($4 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $12 = ___errno_location();
      HEAP[$12] = 33;
      
      
      $0 = 1 / $x_addr;
      __label__ = 32;
      break;
     case 6:
      
      var $16 = _floor($x_addr);
      
      
      if ($16 == $x_addr) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      
      if ($x_addr < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $21 = ___errno_location();
      HEAP[$21] = 33;
      $0 = NaN;
      __label__ = 32;
      break;
     case 9:
      
      
      if ($x_addr <= 23) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      $0 = HEAP[_gamma_integral + (($x_addr | 0) - 1) * 8];
      __label__ = 32;
      break;
     case 11:
      
      var $30 = _fabs($x_addr);
      $absx = $30;
      
      if ($30 < 1e-20) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      $r = 1 / $x_addr;
      
      var $35 = ___isinf($r);
      
      if ($35 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $37 = ___errno_location();
      HEAP[$37] = 34;
      __label__ = 14;
      break;
     case 14:
      
      $0 = $r;
      __label__ = 32;
      break;
     case 15:
      
      
      if ($absx > 200) {
        __label__ = 16;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 16:
      
      
      if ($x_addr < 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      var $44 = _sinpi($x_addr);
      
      $0 = 0 / $44;
      __label__ = 32;
      break;
     case 18:
      var $46 = ___errno_location();
      HEAP[$46] = 34;
      $0 = Infinity;
      __label__ = 32;
      break;
     case 19:
      
      
      $y = $absx + 5.52468004077673;
      
      
      var $51 = $y;
      if ($absx > 5.52468004077673) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      $q = $51 - $absx;
      
      
      $z = $q - 5.52468004077673;
      __label__ = 22;
      break;
     case 21:
      
      $q22 = $51 - 5.52468004077673;
      
      
      
      $z = $q22 - $absx;
      __label__ = 22;
      break;
     case 22:
      
      
      
      var $63 = $z * 6.02468004077673 / $y;
      $z = $63;
      
      
      var $66 = $absx;
      if ($x_addr < 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 23:
      var $67 = _sinpi($66);
      var $68 = -3.141592653589793 / $67;
      
      var $70 = $68 / $absx;
      
      var $72 = _llvm_exp_f64($y);
      var $73 = $70 * $72;
      
      var $75 = _lanczos_sum($absx);
      
      $r = $73 / $75;
      
      
      
      
      var $81 = $r - $z * $r;
      $r = $81;
      
      
      var $84 = $absx;
      if ($absx < 140) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      var $87 = _llvm_pow_f64($y, $84 - .5);
      
      var $89 = $r / $87;
      $r = $89;
      __label__ = 29;
      break;
     case 25:
      
      
      
      var $93 = _llvm_pow_f64($y, $84 / 2 - .25);
      $sqrtpow = $93;
      
      
      var $96 = $r / $sqrtpow;
      $r = $96;
      
      
      var $99 = $r / $sqrtpow;
      $r = $99;
      __label__ = 29;
      break;
     case 26:
      var $100 = _lanczos_sum($66);
      
      var $102 = _llvm_exp_f64($y);
      
      $r = $100 / $102;
      
      
      
      
      var $108 = $z * $r + $r;
      $r = $108;
      
      
      var $111 = $absx;
      if ($absx < 140) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      var $114 = _llvm_pow_f64($y, $111 - .5);
      
      var $116 = $114 * $r;
      $r = $116;
      __label__ = 29;
      break;
     case 28:
      
      
      
      var $120 = _llvm_pow_f64($y, $111 / 2 - .25);
      $sqrtpow = $120;
      
      
      var $123 = $r * $sqrtpow;
      $r = $123;
      
      
      var $126 = $r * $sqrtpow;
      $r = $126;
      __label__ = 29;
      break;
     case 29:
      
      var $128 = ___isinf($r);
      
      if ($128 != 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      var $130 = ___errno_location();
      HEAP[$130] = 34;
      __label__ = 31;
      break;
     case 31:
      
      $0 = $r;
      __label__ = 32;
      break;
     case 32:
      
      $retval = $0;
      var $retval35 = $retval;
      return $retval35;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _m_lgamma($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $r;
      var $absx;
      $x_addr = $x;
      
      var $2 = ___finite($x_addr);
      
      var $4 = $x_addr;
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      var $5 = ___isnan($4);
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $x_addr;
      __label__ = 16;
      break;
     case 3:
      $0 = Infinity;
      __label__ = 16;
      break;
     case 4:
      var $8 = _floor($4);
      
      
      
      
      
      var $13 = $x_addr;
      if ($8 == $x_addr & $x_addr <= 2) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      if ($13 <= 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $15 = ___errno_location();
      HEAP[$15] = 33;
      $0 = Infinity;
      __label__ = 16;
      break;
     case 7:
      $0 = 0;
      __label__ = 16;
      break;
     case 8:
      var $16 = _fabs($13);
      $absx = $16;
      
      
      if ($absx < 1e-20) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $20 = _llvm_log_f64($absx);
      
      $0 = 0 - $20;
      __label__ = 16;
      break;
     case 10:
      
      
      if ($x_addr > 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      var $25 = _lanczos_sum($x_addr);
      var $26 = _llvm_log_f64($25);
      var $27 = $26 - 6.02468004077673;
      
      var $29 = $x_addr - .5;
      
      
      
      var $33 = _llvm_log_f64($x_addr + 6.02468004077673 - .5);
      
      
      
      $r = $27 + $29 * ($33 - 1);
      __label__ = 13;
      break;
     case 12:
      var $37 = _llvm_log_f64(3.141592653589793);
      
      var $39 = _sinpi($absx);
      var $40 = _fabs($39);
      var $41 = _llvm_log_f64($40);
      var $42 = $37 - $41;
      
      var $44 = _llvm_log_f64($absx);
      var $45 = $42 - $44;
      
      var $47 = _lanczos_sum($absx);
      var $48 = _llvm_log_f64($47);
      var $49 = $48 - 6.02468004077673;
      
      var $51 = $absx - .5;
      
      
      
      var $55 = _llvm_log_f64($absx + 6.02468004077673 - .5);
      
      
      
      
      $r = $45 - ($49 + $51 * ($55 - 1));
      __label__ = 13;
      break;
     case 13:
      
      var $61 = ___isinf($r);
      
      if ($61 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $63 = ___errno_location();
      HEAP[$63] = 34;
      __label__ = 15;
      break;
     case 15:
      
      $0 = $r;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval17 = $retval;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _m_erf_series($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $x2;
      var $acc;
      var $fk;
      var $result;
      var $i;
      var $saved_errno;
      $x_addr = $x;
      
      
      
      $x2 = $x_addr * $x_addr;
      $acc = 0;
      $fk = 25.5;
      $i = 0;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      var $9 = $x2 * $acc / $fk + 2;
      $acc = $9;
      
      var $11 = $fk - 1;
      $fk = $11;
      
      var $13 = $i + 1;
      $i = $13;
      
      if ($13 <= 24) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $15 = ___errno_location();
      
      $saved_errno = HEAP[$15];
      
      
      var $19 = $acc * $x_addr;
      
      
      var $22 = _llvm_exp_f64(0 - $x2);
      
      
      $result = $19 * $22 / 1.772453850905516;
      var $25 = ___errno_location();
      
      HEAP[$25] = $saved_errno;
      
      $0 = $result;
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _m_erfc_contfrac($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      $x_addr = $x;
      
      
      if ($x_addr >= 30) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 5;
      break;
     case 2:
      
      
      
      $x2 = $x_addr * $x_addr;
      $a = 0;
      $da = .5;
      $p = 1;
      $p_last = 0;
      
      
      
      $q = $da + $x2;
      $q_last = 1;
      $i = 0;
      __label__ = 3;
      break;
     case 3:
      
      
      var $11 = $a + $da;
      $a = $11;
      
      var $13 = $da + 2;
      $da = $13;
      
      
      
      $b = $da + $x2;
      
      $temp = $p;
      
      
      
      
      
      
      var $24 = $b * $p - $a * $p_last;
      $p = $24;
      
      $p_last = $temp;
      
      $temp = $q;
      
      
      
      
      
      
      var $33 = $b * $q - $a * $q_last;
      $q = $33;
      
      $q_last = $temp;
      
      var $36 = $i + 1;
      $i = $36;
      
      if ($36 <= 49) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      var $38 = ___errno_location();
      
      $saved_errno = HEAP[$38];
      
      
      
      
      var $44 = $p / $q * $x_addr;
      
      
      var $47 = _llvm_exp_f64(0 - $x2);
      
      
      $result = $44 * $47 / 1.772453850905516;
      var $50 = ___errno_location();
      
      HEAP[$50] = $saved_errno;
      
      $0 = $result;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _m_erf($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $iftmp_22;
      var $0;
      var $absx;
      var $cf;
      $x_addr = $x;
      
      var $2 = ___isnan($x_addr);
      
      var $4 = $x_addr;
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = $4;
      __label__ = 8;
      break;
     case 2:
      var $5 = _fabs($4);
      $absx = $5;
      
      
      if ($absx < 1.5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $9 = _m_erf_series($x_addr);
      $0 = $9;
      __label__ = 8;
      break;
     case 4:
      
      var $11 = _m_erfc_contfrac($absx);
      $cf = $11;
      
      
      var $14 = $cf;
      if ($x_addr > 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $iftmp_22 = 1 - $14;
      __label__ = 7;
      break;
     case 6:
      
      $iftmp_22 = $14 - 1;
      __label__ = 7;
      break;
     case 7:
      
      $0 = $iftmp_22;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _m_erfc($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $iftmp_23;
      var $0;
      var $absx;
      var $cf;
      $x_addr = $x;
      
      var $2 = ___isnan($x_addr);
      
      var $4 = $x_addr;
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = $4;
      __label__ = 8;
      break;
     case 2:
      var $5 = _fabs($4);
      $absx = $5;
      
      
      if ($absx < 1.5) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $9 = _m_erf_series($x_addr);
      
      $0 = 1 - $9;
      __label__ = 8;
      break;
     case 4:
      
      var $12 = _m_erfc_contfrac($absx);
      $cf = $12;
      
      
      var $15 = $cf;
      if ($x_addr <= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $iftmp_23 = 2 - $15;
      __label__ = 7;
      break;
     case 6:
      $iftmp_23 = $15;
      __label__ = 7;
      break;
     case 7:
      
      $0 = $iftmp_23;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _m_atan2($y, $x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $y_addr;
      var $x_addr;
      var $retval;
      var $0;
      $y_addr = $y;
      $x_addr = $x;
      
      var $2 = ___isnan($x_addr);
      
      if ($2 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $5 = ___isnan($y_addr);
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = NaN;
      __label__ = 15;
      break;
     case 3:
      
      var $8 = ___isinf($y_addr);
      var $9 = $8 != 0;
      
      var $11 = ___isinf($x_addr);
      var $12 = $11 != 0;
      if ($9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      if ($12) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      var $14 = _copysign(1, $x_addr);
      
      var $16 = $y_addr;
      if ($14 == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $17 = _copysign(.7853981633974483, $16);
      $0 = $17;
      __label__ = 15;
      break;
     case 7:
      var $18 = _copysign(2.356194490192345, $16);
      $0 = $18;
      __label__ = 15;
      break;
     case 8:
      
      var $20 = _copysign(1.5707963267948966, $y_addr);
      $0 = $20;
      __label__ = 15;
      break;
     case 9:
      if ($12) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if ($y_addr == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      var $24 = _copysign(1, $x_addr);
      
      var $26 = $y_addr;
      if ($24 == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $27 = _copysign(0, $26);
      $0 = $27;
      __label__ = 15;
      break;
     case 13:
      var $28 = _copysign(3.141592653589793, $26);
      $0 = $28;
      __label__ = 15;
      break;
     case 14:
      
      
      var $31 = _atan2($y_addr, $x_addr);
      $0 = $31;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval15 = $retval;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _m_log($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      $x_addr = $x;
      
      var $2 = ___finite($x_addr);
      
      var $4 = $x_addr;
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      if ($4 > 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $7 = _llvm_log_f64($x_addr);
      $0 = $7;
      __label__ = 11;
      break;
     case 3:
      var $8 = ___errno_location();
      HEAP[$8] = 33;
      
      
      if ($x_addr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -Infinity;
      __label__ = 11;
      break;
     case 5:
      $0 = NaN;
      __label__ = 11;
      break;
     case 6:
      var $11 = ___isnan($4);
      
      var $13 = $x_addr;
      if ($11 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = $13;
      __label__ = 11;
      break;
     case 8:
      
      if ($13 > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      $0 = $x_addr;
      __label__ = 11;
      break;
     case 10:
      var $16 = ___errno_location();
      HEAP[$16] = 33;
      $0 = NaN;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _m_log10($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      $x_addr = $x;
      
      var $2 = ___finite($x_addr);
      
      var $4 = $x_addr;
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 1:
      
      if ($4 > 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $7 = _llvm_log10_f64($x_addr);
      $0 = $7;
      __label__ = 11;
      break;
     case 3:
      var $8 = ___errno_location();
      HEAP[$8] = 33;
      
      
      if ($x_addr == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = -Infinity;
      __label__ = 11;
      break;
     case 5:
      $0 = NaN;
      __label__ = 11;
      break;
     case 6:
      var $11 = ___isnan($4);
      
      var $13 = $x_addr;
      if ($11 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = $13;
      __label__ = 11;
      break;
     case 8:
      
      if ($13 > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      $0 = $x_addr;
      __label__ = 11;
      break;
     case 10:
      var $16 = ___errno_location();
      HEAP[$16] = 33;
      $0 = NaN;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _is_error($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $result;
      $x_addr = $x;
      $result = 1;
      var $1 = ___errno_location();
      
      
      if (HEAP[$1] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      ___assert_fail(__str5, __str1, 620, ___PRETTY_FUNCTION___8706);
      throw "Reached an unreachable!";
     case 2:
      var $4 = ___errno_location();
      
      
      if (HEAP[$4] == 33) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($7, __str6);
      __label__ = 9;
      break;
     case 4:
      var $8 = ___errno_location();
      
      
      if (HEAP[$8] == 34) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      var $12 = _fabs($x_addr);
      
      if ($12 < 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $result = 0;
      __label__ = 9;
      break;
     case 7:
      var $14 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($14, __str7);
      __label__ = 9;
      break;
     case 8:
      var $15 = HEAP[_PyExc_ValueError];
      var $16 = _PyErr_SetFromErrno($15);
      __label__ = 9;
      break;
     case 9:
      
      $0 = $result;
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_1($arg, $func, $can_overflow) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $arg_addr;
      var $func_addr;
      var $can_overflow_addr;
      var $retval;
      var $iftmp_27;
      var $0;
      var $x;
      var $r;
      $arg_addr = $arg;
      $func_addr = $func;
      $can_overflow_addr = $can_overflow;
      
      var $2 = _PyFloat_AsDouble($arg_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 18;
      break;
     case 3:
      var $7 = ___errno_location();
      HEAP[$7] = 0;
      var $8 = $func_addr;
      
      var $10 = FUNCTION_TABLE[$8]($x);
      $r = $10;
      
      var $12 = ___isnan($r);
      
      if ($12 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      var $15 = ___isnan($x);
      var $16 = $15 == 0;
      var $17 = ___errno_location();
      if ($16) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$17] = 33;
      __label__ = 14;
      break;
     case 6:
      HEAP[$17] = 0;
      __label__ = 14;
      break;
     case 7:
      
      var $19 = ___isinf($r);
      
      if ($19 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 8:
      
      var $22 = ___finite($x);
      var $23 = $22 != 0;
      var $24 = ___errno_location();
      if ($23) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      if ($can_overflow_addr != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $iftmp_27 = 34;
      __label__ = 12;
      break;
     case 11:
      $iftmp_27 = 33;
      __label__ = 12;
      break;
     case 12:
      
      HEAP[$24] = $iftmp_27;
      __label__ = 14;
      break;
     case 13:
      HEAP[$24] = 0;
      __label__ = 14;
      break;
     case 14:
      var $28 = ___errno_location();
      
      
      if (HEAP[$28] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      var $32 = _is_error($r);
      
      if ($32 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      $0 = 0;
      __label__ = 18;
      break;
     case 17:
      
      var $35 = _PyFloat_FromDouble($r);
      $0 = $35;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval19 = $retval;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_1a($arg, $func) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $arg_addr;
      var $func_addr;
      var $retval;
      var $0;
      var $x;
      var $r;
      $arg_addr = $arg;
      $func_addr = $func;
      
      var $2 = _PyFloat_AsDouble($arg_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 7;
      break;
     case 3:
      var $7 = ___errno_location();
      HEAP[$7] = 0;
      var $8 = $func_addr;
      
      var $10 = FUNCTION_TABLE[$8]($x);
      $r = $10;
      var $11 = ___errno_location();
      
      
      if (HEAP[$11] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      var $15 = _is_error($r);
      
      if ($15 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      var $18 = _PyFloat_FromDouble($r);
      $0 = $18;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_2($args, $func, $funcname) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr;
      var $func_addr;
      var $funcname_addr;
      var $retval;
      var $0;
      var $ox = __stackBase__;
      var $oy = __stackBase__ + 4;
      var $x;
      var $y;
      var $r;
      $args_addr = $args;
      $func_addr = $func;
      $funcname_addr = $funcname;
      
      
      var $3 = _PyArg_UnpackTuple($args_addr, $funcname_addr, 2, 2, allocate([ $ox, 0, 0, 0, $oy, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 20;
      break;
     case 2:
      var $5 = HEAP[$ox];
      var $6 = _PyFloat_AsDouble($5);
      $x = $6;
      var $7 = HEAP[$oy];
      var $8 = _PyFloat_AsDouble($7);
      $y = $8;
      
      var $10 = $x == -1;
      if ($10) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $12 = $y == -1;
      if ($12) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $13 = _PyErr_Occurred();
      
      if ($13 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 20;
      break;
     case 6:
      var $15 = ___errno_location();
      HEAP[$15] = 0;
      var $16 = $func_addr;
      
      
      var $19 = FUNCTION_TABLE[$16]($x, $y);
      $r = $19;
      
      var $21 = ___isnan($r);
      
      if ($21 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 7:
      
      var $24 = ___isnan($x);
      
      if ($24 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      var $27 = ___isnan($y);
      
      if ($27 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $29 = ___errno_location();
      HEAP[$29] = 33;
      __label__ = 16;
      break;
     case 10:
      var $30 = ___errno_location();
      HEAP[$30] = 0;
      __label__ = 16;
      break;
     case 11:
      
      var $32 = ___isinf($r);
      
      if ($32 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 12:
      
      var $35 = ___finite($x);
      
      if ($35 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      var $38 = ___finite($y);
      
      if ($38 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      var $40 = ___errno_location();
      HEAP[$40] = 34;
      __label__ = 16;
      break;
     case 15:
      var $41 = ___errno_location();
      HEAP[$41] = 0;
      __label__ = 16;
      break;
     case 16:
      var $42 = ___errno_location();
      
      
      if (HEAP[$42] == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      var $46 = _is_error($r);
      
      if ($46 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      $0 = 0;
      __label__ = 20;
      break;
     case 19:
      
      var $49 = _PyFloat_FromDouble($r);
      $0 = $49;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval21 = $retval;
      STACKTOP = __stackBase__;
      return $retval21;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_acos($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 2, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_acosh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 4, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_asin($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 6, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_asinh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 8, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_atan($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 10, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_atan2($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_2($args_addr, FUNCTION_TABLE_OFFSET + 12, __str8);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_atanh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 14, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_ceil($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 16, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_copysign($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_2($args_addr, FUNCTION_TABLE_OFFSET + 18, __str9);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_cos($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 20, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_cosh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 22, 1);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_erf($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1a($args_addr, FUNCTION_TABLE_OFFSET + 24);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_erfc($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1a($args_addr, FUNCTION_TABLE_OFFSET + 26);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_exp($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 28, 1);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_expm1($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 30, 1);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_fabs($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 32, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_floor($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 34, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_gamma($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1a($args_addr, FUNCTION_TABLE_OFFSET + 36);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_lgamma($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1a($args_addr, FUNCTION_TABLE_OFFSET + 38);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_log1p($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 40, 1);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_sin($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 42, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_sinh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 44, 1);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_sqrt($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 46, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_tan($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 48, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_tanh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 50, 0);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function __fsum_realloc($p_ptr, $n, $ps, $m_ptr) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $p_ptr_addr;
      var $n_addr;
      var $ps_addr;
      var $m_ptr_addr;
      var $retval;
      var $0;
      var $v;
      var $m;
      var $p;
      $p_ptr_addr = $p_ptr;
      $n_addr = $n;
      $ps_addr = $ps;
      $m_ptr_addr = $m_ptr;
      $v = 0;
      
      
      $m = HEAP[$m_ptr_addr];
      
      
      var $5 = $m + $m;
      $m = $5;
      
      
      
      
      
      
      if ($n_addr < $m & $m <= 268435454) {
        __label__ = 1;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 1:
      
      
      $p = HEAP[$p_ptr_addr];
      
      
      
      
      var $17 = $m * 8;
      if ($p == $ps_addr) {
        __label__ = 2;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 2:
      var $18 = _PyMem_Malloc($17);
      $v = $18;
      
      
      if ($v != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($v, $ps_addr, $n_addr * 8, 1, 0);
      __label__ = 5;
      break;
     case 4:
      
      
      var $28 = _PyMem_Realloc($p, $17);
      $v = $28;
      __lastLabel__ = 4;
      __label__ = 6;
      break;
     case 5:
      var $_pr = $v;
      __lastLabel__ = 5;
      __label__ = 6;
      break;
     case 6:
      var $29 = __lastLabel__ == 5 ? $_pr : $28;
      
      if ($29 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $31 = HEAP[_PyExc_MemoryError];
      _PyErr_SetString($31, __str10);
      $0 = 1;
      __label__ = 9;
      break;
     case 8:
      
      
      
      HEAP[$p_ptr_addr] = $v;
      
      
      HEAP[$m_ptr_addr] = $m;
      $0 = 0;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_fsum($self, $seq) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 264;
    _memset(__stackBase__, 0, 264);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      var $m = __stackBase__;
      var $x;
      var $y;
      var $t;
      var $ps = __stackBase__ + 4;
      var $p = __stackBase__ + 260;
      var $xsave;
      var $special_sum;
      var $inf_sum;
      var $hi;
      var $yr;
      var $lo;
      $self_addr = $self;
      $seq_addr = $seq;
      $sum = 0;
      $n = 0;
      HEAP[$m] = 32;
      
      HEAP[$p] = $ps;
      $special_sum = 0;
      $inf_sum = 0;
      
      var $2 = _PyObject_GetIter($seq_addr);
      $iter = $2;
      
      
      if ($iter == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 57;
      break;
     case 2:
      var $_pr = $n;
      var $ps33 = $ps;
      var $ps7 = $ps;
      __lastLabel__ = 2;
      __label__ = 3;
      break;
     case 3:
      var $5 = __lastLabel__ == 2 ? $_pr : __lastLabel__ == 24 ? $85 : __lastLabel__ == 30 ? 0 : $115;
      
      if ($5 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if ($n > HEAP[$m]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      ___assert_fail(__str11, __str1, 978, ___PRETTY_FUNCTION___9121);
      throw "Reached an unreachable!";
     case 6:
      var $10 = HEAP[$m];
      
      if ($10 != 32) {
        __lastLabel__ = 6;
        __label__ = 9;
        break;
      } else {
        __lastLabel__ = 6;
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if ($ps7 != HEAP[$p]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      var $_pr1 = HEAP[$m];
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $14 = __lastLabel__ == 8 ? $_pr1 : $10;
      
      if ($14 <= 32) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if (HEAP[$p] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      ___assert_fail(__str12, __str1, 980, ___PRETTY_FUNCTION___9121);
      throw "Reached an unreachable!";
     case 12:
      
      var $19 = _PyIter_Next($iter);
      $item = $19;
      
      if ($19 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      var $21 = _PyErr_Occurred();
      
      if ($21 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      if ($special_sum != 0) {
        __label__ = 34;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 15:
      
      var $26 = _PyFloat_AsDouble($item);
      $x = $26;
      
      
      
      var $30 = HEAP[$item] - 1;
      
      
      HEAP[$item] = $30;
      
      
      
      
      if (HEAP[$item] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $41 = HEAP[HEAP[$item + 4] + 24];
      
      FUNCTION_TABLE[$41]($item);
      __label__ = 17;
      break;
     case 17:
      var $43 = _PyErr_Occurred();
      
      if ($43 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      $xsave = $x;
      $j = 0;
      
      $i = $j;
      
      
      
      if ($j < $n) {
        __label__ = 19;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 19:
      
      
      
      
      $y = HEAP[HEAP[$p] + 8 * $j];
      
      var $55 = _fabs($x);
      
      var $57 = _fabs($y);
      
      if ($55 < $57) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      $t = $x;
      
      $x = $y;
      
      $y = $t;
      __label__ = 21;
      break;
     case 21:
      
      
      
      $hi = $x + $y;
      
      
      
      $yr = $hi - $x;
      
      
      
      $lo = $y - $yr;
      
      
      if ($lo != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      
      var $76 = HEAP[$p] + 8 * $i;
      HEAP[$76] = $lo;
      
      var $78 = $i + 1;
      $i = $78;
      __label__ = 23;
      break;
     case 23:
      
      $x = $hi;
      
      var $81 = $j + 1;
      $j = $81;
      
      
      
      if ($j < $n) {
        __label__ = 19;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 24:
      var $85 = $i;
      $n = $85;
      
      
      if ($x != 0) {
        __lastLabel__ = 24;
        __label__ = 25;
        break;
      } else {
        __lastLabel__ = 24;
        __label__ = 3;
        break;
      }
     case 25:
      
      var $89 = ___finite($x);
      
      if ($89 == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 26:
      
      var $92 = ___finite($xsave);
      
      if ($92 != 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      var $94 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($94, __str13);
      __label__ = 52;
      break;
     case 28:
      
      var $96 = ___isinf($xsave);
      
      if ($96 != 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      var $100 = $inf_sum + $xsave;
      $inf_sum = $100;
      __label__ = 30;
      break;
     case 30:
      
      
      var $103 = $special_sum + $xsave;
      $special_sum = $103;
      $n = 0;
      __lastLabel__ = 30;
      __label__ = 3;
      break;
     case 31:
      
      
      
      if ($n < HEAP[$m]) {
        __label__ = 33;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      var $108 = __fsum_realloc($p, $n, $ps33, $m);
      
      if ($108 != 0) {
        __label__ = 52;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 33:
      
      
      var $112 = HEAP[$p] + 8 * $n;
      
      HEAP[$112] = $x;
      
      var $115 = $n + 1;
      $n = $115;
      __lastLabel__ = 33;
      __label__ = 3;
      break;
     case 34:
      
      var $117 = ___isnan($inf_sum);
      
      if ($117 != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      var $119 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($119, __str14);
      __label__ = 52;
      break;
     case 36:
      
      var $121 = _PyFloat_FromDouble($special_sum);
      $sum = $121;
      __label__ = 52;
      break;
     case 37:
      $hi = 0;
      
      
      if ($n > 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 38:
      var $124 = HEAP[$p];
      
      var $126 = $n - 1;
      $n = $126;
      var $127 = $n;
      
      
      $hi = HEAP[$124 + 8 * $127];
      __lastLabel__ = 38;
      __label__ = 43;
      break;
     case 39:
      
      $x = $hi;
      var $131 = HEAP[$p];
      
      var $133 = $n - 1;
      $n = $133;
      
      
      
      $y = HEAP[$131 + 8 * $n];
      
      var $138 = _fabs($y);
      
      var $140 = _fabs($x);
      
      if ($138 >= $140) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      ___assert_fail(__str15, __str1, 1049, ___PRETTY_FUNCTION___9121);
      throw "Reached an unreachable!";
     case 41:
      
      
      
      $hi = $x + $y;
      
      
      
      $yr = $hi - $x;
      
      
      
      $lo = $y - $yr;
      
      
      if ($lo != 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      var $_pr2 = $n;
      __lastLabel__ = 42;
      __label__ = 43;
      break;
     case 43:
      var $153 = __lastLabel__ == 42 ? $_pr2 : $127;
      
      if ($153 > 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 44:
      
      
      if ($n > 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 45:
      
      
      if ($lo >= 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 46:
      
      
      
      
      
      
      if (HEAP[HEAP[$p] + 8 * ($n - 1)] < 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 47:
      
      
      if ($lo <= 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 48:
      
      
      
      
      
      
      if (HEAP[HEAP[$p] + 8 * ($n - 1)] > 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 49:
      
      
      $y = $lo * 2;
      
      
      
      $x = $hi + $y;
      
      
      
      $yr = $x - $hi;
      
      
      
      if ($y == $yr) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      
      $hi = $x;
      __label__ = 51;
      break;
     case 51:
      
      var $186 = _PyFloat_FromDouble($hi);
      $sum = $186;
      __label__ = 52;
      break;
     case 52:
      
      
      
      var $190 = HEAP[$iter] - 1;
      
      
      HEAP[$iter] = $190;
      
      
      
      
      if (HEAP[$iter] == 0) {
        __label__ = 53;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 53:
      
      
      
      
      var $201 = HEAP[HEAP[$iter + 4] + 24];
      
      FUNCTION_TABLE[$201]($iter);
      __label__ = 54;
      break;
     case 54:
      
      
      
      if ($ps != HEAP[$p]) {
        __label__ = 55;
        break;
      } else {
        __label__ = 56;
        break;
      }
     case 55:
      
      var $206 = HEAP[$p];
      _PyMem_Free($206);
      __label__ = 56;
      break;
     case 56:
      
      $0 = $sum;
      __label__ = 57;
      break;
     case 57:
      
      $retval = $0;
      var $retval60 = $retval;
      STACKTOP = __stackBase__;
      return $retval60;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_factorial($self, $arg) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
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
      $self_addr = $self;
      $arg_addr = $arg;
      
      
      
      
      if (HEAP[$arg_addr + 4] == _PyFloat_Type) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      
      var $7 = HEAP[$arg_addr + 4];
      var $8 = _PyType_IsSubtype($7, _PyFloat_Type);
      
      if ($8 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 2:
      
      
      
      
      $dx = HEAP[$arg_addr + 8];
      
      var $15 = ___finite($dx);
      
      if ($15 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $18 = _floor($dx);
      
      
      if ($18 != $dx) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str16);
      $0 = 0;
      __label__ = 31;
      break;
     case 5:
      
      var $23 = _PyLong_FromDouble($dx);
      $lx = $23;
      
      
      if ($lx == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 31;
      break;
     case 7:
      
      var $27 = _PyLong_AsLong($lx);
      $x = $27;
      
      
      
      var $31 = HEAP[$lx] - 1;
      
      
      HEAP[$lx] = $31;
      
      
      
      
      if (HEAP[$lx] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      
      
      var $42 = HEAP[HEAP[$lx + 4] + 24];
      
      FUNCTION_TABLE[$42]($lx);
      __label__ = 10;
      break;
     case 9:
      
      var $45 = _PyInt_AsLong($arg_addr);
      $x = $45;
      __lastLabel__ = 9;
      __label__ = 11;
      break;
     case 10:
      var $_pr = $x;
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $46 = __lastLabel__ == 10 ? $_pr : $45;
      var $47 = $46 == -1;
      if ($47) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $48 = _PyErr_Occurred();
      
      if ($48 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 31;
      break;
     case 14:
      
      
      if ($x < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $52 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($52, __str17);
      $0 = 0;
      __label__ = 31;
      break;
     case 16:
      var $53 = _PyInt_FromLong(1);
      $result = $53;
      
      
      if ($result == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      $0 = 0;
      __label__ = 31;
      break;
     case 18:
      $i = 1;
      __label__ = 26;
      break;
     case 19:
      
      var $57 = _PyInt_FromLong($i);
      $iobj = $57;
      
      
      if ($iobj == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      var $62 = _PyNumber_Multiply($result, $iobj);
      $newresult = $62;
      
      
      
      var $66 = HEAP[$iobj] - 1;
      
      
      HEAP[$iobj] = $66;
      
      
      
      
      if (HEAP[$iobj] == 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      
      
      var $77 = HEAP[HEAP[$iobj + 4] + 24];
      
      FUNCTION_TABLE[$77]($iobj);
      __label__ = 22;
      break;
     case 22:
      
      
      if ($newresult == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      var $84 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $84;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      
      var $95 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$95]($result);
      __label__ = 25;
      break;
     case 25:
      
      $result = $newresult;
      
      var $99 = $i + 1;
      $i = $99;
      __label__ = 26;
      break;
     case 26:
      
      
      
      if ($i <= $x) {
        __label__ = 19;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 27:
      
      $0 = $result;
      __label__ = 31;
      break;
     case 28:
      
      
      
      var $107 = HEAP[$result] - 1;
      
      
      HEAP[$result] = $107;
      
      
      
      
      if (HEAP[$result] == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      
      
      
      
      var $118 = HEAP[HEAP[$result + 4] + 24];
      
      FUNCTION_TABLE[$118]($result);
      __label__ = 30;
      break;
     case 30:
      $0 = 0;
      __label__ = 31;
      break;
     case 31:
      
      $retval = $0;
      var $retval30 = $retval;
      return $retval30;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_trunc($self, $number) {
    
    var $self_addr;
    var $number_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $number_addr = $number;
    
    var $2 = _PyObject_CallMethod($number_addr, __str18, 0, allocate(1, "i32", ALLOC_STACK));
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_frexp($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $i = __stackBase__;
      var $x;
      $self_addr = $self;
      $arg_addr = $arg;
      
      var $2 = _PyFloat_AsDouble($arg_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 8;
      break;
     case 3:
      
      var $8 = ___isnan($x);
      
      if ($8 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $11 = ___isinf($x);
      
      
      
      
      if ($11 != 0 | $x == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$i] = 0;
      __label__ = 7;
      break;
     case 6:
      
      var $16 = _frexp($x, $i);
      $x = $16;
      __label__ = 7;
      break;
     case 7:
      var $17 = HEAP[$i];
      
      var $19 = _Py_BuildValue(__str19, allocate([ $x, 0, 0, 0, 0, 0, 0, 0, $17, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $19;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_ldexp($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $iftmp_79;
      var $0;
      var $x = __stackBase__;
      var $r;
      var $oexp = __stackBase__ + 8;
      var $exp;
      var $overflow = __stackBase__ + 12;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str20, allocate([ $x, 0, 0, 0, $oexp, 0, 0, 0 ], [ "double*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 22;
      break;
     case 2:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$oexp] + 4] + 84] & 16777216) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$oexp] + 4] + 84] & 8388608) != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 4:
      var $18 = HEAP[$oexp];
      var $19 = _PyLong_AsLongAndOverflow($18, $overflow);
      $exp = $19;
      var $20 = $19 == -1;
      if ($20) {
        __label__ = 5;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      var $21 = _PyErr_Occurred();
      
      if ($21 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 22;
      break;
     case 7:
      
      
      if (HEAP[$overflow] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 8:
      
      
      if (HEAP[$overflow] < 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $iftmp_79 = -2147483648;
      __label__ = 11;
      break;
     case 10:
      $iftmp_79 = 2147483647;
      __label__ = 11;
      break;
     case 11:
      
      $exp = $iftmp_79;
      __label__ = 12;
      break;
     case 12:
      
      
      if (HEAP[$x] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $30 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($30, __str21);
      $0 = 0;
      __label__ = 22;
      break;
     case 14:
      var $31 = HEAP[$x];
      var $32 = ___finite($31);
      
      if ($32 == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      $r = HEAP[$x];
      var $35 = ___errno_location();
      HEAP[$35] = 0;
      __label__ = 18;
      break;
     case 16:
      var $36 = ___errno_location();
      HEAP[$36] = 0;
      var $37 = HEAP[$x];
      
      var $39 = _ldexp($37, $exp);
      $r = $39;
      
      var $41 = ___isinf($r);
      
      if ($41 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $43 = ___errno_location();
      HEAP[$43] = 34;
      __label__ = 18;
      break;
     case 18:
      var $44 = ___errno_location();
      
      
      if (HEAP[$44] != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 19:
      
      var $48 = _is_error($r);
      
      if ($48 != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      $0 = 0;
      __label__ = 22;
      break;
     case 21:
      
      var $51 = _PyFloat_FromDouble($r);
      $0 = $51;
      __label__ = 22;
      break;
     case 22:
      
      $retval = $0;
      var $retval22 = $retval;
      STACKTOP = __stackBase__;
      return $retval22;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_modf($self, $arg) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $y = __stackBase__;
      var $x;
      $self_addr = $self;
      $arg_addr = $arg;
      
      var $2 = _PyFloat_AsDouble($arg_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 9;
      break;
     case 3:
      
      var $8 = ___finite($x);
      
      if ($8 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 4:
      
      var $11 = ___isinf($x);
      
      var $13 = $x;
      if ($11 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $14 = _copysign(0, $13);
      
      var $16 = _Py_BuildValue(__str22, allocate([ $14, 0, 0, 0, 0, 0, 0, 0, $x, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      $0 = $16;
      __label__ = 9;
      break;
     case 6:
      var $17 = ___isnan($13);
      
      if ($17 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $21 = _Py_BuildValue(__str22, allocate([ $x, 0, 0, 0, 0, 0, 0, 0, $x, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      $0 = $21;
      __label__ = 9;
      break;
     case 8:
      var $22 = ___errno_location();
      HEAP[$22] = 0;
      
      var $24 = _modf($x, $y);
      $x = $24;
      var $25 = HEAP[$y];
      
      var $27 = _Py_BuildValue(__str22, allocate([ $x, 0, 0, 0, 0, 0, 0, 0, $25, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      $0 = $27;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _loghelper($arg, $func, $funcname) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $arg_addr;
      var $func_addr;
      var $funcname_addr;
      var $retval;
      var $0;
      var $x;
      var $e = __stackBase__;
      $arg_addr = $arg;
      $func_addr = $func;
      $funcname_addr = $funcname;
      
      
      
      
      
      
      
      var $8 = $arg_addr;
      if ((HEAP[HEAP[$arg_addr + 4] + 84] & 16777216) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 1:
      
      var $10 = __PyLong_Frexp($8, $e);
      $x = $10;
      var $11 = $x;
      var $12 = $11 == -1;
      if ($12) {
        __lastLabel__ = 1;
        __label__ = 2;
        break;
      } else {
        __lastLabel__ = 1;
        __label__ = 5;
        break;
      }
     case 2:
      var $13 = _PyErr_Occurred();
      
      if ($13 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 12;
      break;
     case 4:
      var $_pr = $x;
      __lastLabel__ = 4;
      __label__ = 5;
      break;
     case 5:
      var $15 = __lastLabel__ == 4 ? $_pr : $11;
      
      if ($15 <= 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $17 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($17, __str6);
      $0 = 0;
      __label__ = 12;
      break;
     case 7:
      
      
      if (HEAP[$e] == 1) {
        __label__ = 8;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 8:
      
      
      if ($x == .5) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $22 = _PyFloat_FromDouble(0);
      $0 = $22;
      __label__ = 12;
      break;
     case 10:
      var $23 = $func_addr;
      
      var $25 = FUNCTION_TABLE[$23]($x);
      var $26 = $func_addr;
      var $27 = FUNCTION_TABLE[$26](2);
      
      
      
      var $31 = $25 + $27 * HEAP[$e];
      $x = $31;
      
      var $33 = _PyFloat_FromDouble($x);
      $0 = $33;
      __label__ = 12;
      break;
     case 11:
      
      var $35 = _math_1($8, $func_addr, 0);
      $0 = $35;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval11 = $retval;
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_log($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $arg = __stackBase__;
      var $base = __stackBase__ + 4;
      var $num;
      var $den;
      var $ans;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$base] = 0;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str23, 1, 2, allocate([ $arg, 0, 0, 0, $base, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 14;
      break;
     case 2:
      var $4 = HEAP[$arg];
      var $5 = _loghelper($4, FUNCTION_TABLE_OFFSET + 52, __str23);
      $num = $5;
      
      
      if ($num == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if (HEAP[$base] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $num;
      __label__ = 14;
      break;
     case 5:
      var $11 = HEAP[$base];
      var $12 = _loghelper($11, FUNCTION_TABLE_OFFSET + 52, __str23);
      $den = $12;
      
      
      var $15 = $num;
      if ($den == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      
      
      var $18 = HEAP[$15] - 1;
      
      
      HEAP[$num] = $18;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      
      
      var $29 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$29]($num);
      __label__ = 8;
      break;
     case 8:
      $0 = 0;
      __label__ = 14;
      break;
     case 9:
      
      var $32 = _PyNumber_Divide($15, $den);
      $ans = $32;
      
      
      
      var $36 = HEAP[$num] - 1;
      
      
      HEAP[$num] = $36;
      
      
      
      
      if (HEAP[$num] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      var $47 = HEAP[HEAP[$num + 4] + 24];
      
      FUNCTION_TABLE[$47]($num);
      __label__ = 11;
      break;
     case 11:
      
      
      
      var $52 = HEAP[$den] - 1;
      
      
      HEAP[$den] = $52;
      
      
      
      
      if (HEAP[$den] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $63 = HEAP[HEAP[$den + 4] + 24];
      
      FUNCTION_TABLE[$63]($den);
      __label__ = 13;
      break;
     case 13:
      
      $0 = $ans;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_log10($self, $arg) {
    
    var $self_addr;
    var $arg_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $arg_addr = $arg;
    
    var $2 = _loghelper($arg_addr, FUNCTION_TABLE_OFFSET + 54, __str24);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _math_fmod($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $ox = __stackBase__;
      var $oy = __stackBase__ + 4;
      var $r;
      var $x;
      var $y;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str25, 2, 2, allocate([ $ox, 0, 0, 0, $oy, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 18;
      break;
     case 2:
      var $4 = HEAP[$ox];
      var $5 = _PyFloat_AsDouble($4);
      $x = $5;
      var $6 = HEAP[$oy];
      var $7 = _PyFloat_AsDouble($6);
      $y = $7;
      
      var $9 = $x == -1;
      if ($9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $11 = $y == -1;
      if ($11) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 18;
      break;
     case 6:
      
      var $15 = ___isinf($y);
      
      if ($15 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      
      var $18 = ___finite($x);
      
      if ($18 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $21 = _PyFloat_FromDouble($x);
      $0 = $21;
      __label__ = 18;
      break;
     case 9:
      var $22 = ___errno_location();
      HEAP[$22] = 0;
      
      
      var $25 = _fmod($x, $y);
      $r = $25;
      
      var $27 = ___isnan($r);
      
      if ($27 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 10:
      
      var $30 = ___isnan($x);
      
      if ($30 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $33 = ___isnan($y);
      
      if ($33 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $35 = ___errno_location();
      HEAP[$35] = 33;
      __label__ = 14;
      break;
     case 13:
      var $36 = ___errno_location();
      HEAP[$36] = 0;
      __label__ = 14;
      break;
     case 14:
      var $37 = ___errno_location();
      
      
      if (HEAP[$37] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      var $41 = _is_error($r);
      
      if ($41 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      $0 = 0;
      __label__ = 18;
      break;
     case 17:
      
      var $44 = _PyFloat_FromDouble($r);
      $0 = $44;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval18 = $retval;
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_hypot($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $ox = __stackBase__;
      var $oy = __stackBase__ + 4;
      var $r;
      var $x;
      var $y;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str26, 2, 2, allocate([ $ox, 0, 0, 0, $oy, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 24;
      break;
     case 2:
      var $4 = HEAP[$ox];
      var $5 = _PyFloat_AsDouble($4);
      $x = $5;
      var $6 = HEAP[$oy];
      var $7 = _PyFloat_AsDouble($6);
      $y = $7;
      
      var $9 = $x == -1;
      if ($9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $11 = $y == -1;
      if ($11) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 24;
      break;
     case 6:
      
      var $15 = ___isinf($x);
      
      if ($15 != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $18 = _fabs($x);
      var $19 = _PyFloat_FromDouble($18);
      $0 = $19;
      __label__ = 24;
      break;
     case 8:
      
      var $21 = ___isinf($y);
      
      if ($21 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $24 = _fabs($y);
      var $25 = _PyFloat_FromDouble($24);
      $0 = $25;
      __label__ = 24;
      break;
     case 10:
      var $26 = ___errno_location();
      HEAP[$26] = 0;
      
      
      var $29 = _hypot($x, $y);
      $r = $29;
      
      var $31 = ___isnan($r);
      
      if ($31 != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 11:
      
      var $34 = ___isnan($x);
      
      if ($34 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $37 = ___isnan($y);
      
      if ($37 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $39 = ___errno_location();
      HEAP[$39] = 33;
      __label__ = 20;
      break;
     case 14:
      var $40 = ___errno_location();
      HEAP[$40] = 0;
      __label__ = 20;
      break;
     case 15:
      
      var $42 = ___isinf($r);
      
      if ($42 != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 16:
      
      var $45 = ___finite($x);
      
      if ($45 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      var $48 = ___finite($y);
      
      if ($48 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      var $50 = ___errno_location();
      HEAP[$50] = 34;
      __label__ = 20;
      break;
     case 19:
      var $51 = ___errno_location();
      HEAP[$51] = 0;
      __label__ = 20;
      break;
     case 20:
      var $52 = ___errno_location();
      
      
      if (HEAP[$52] == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      var $56 = _is_error($r);
      
      if ($56 == 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 22:
      $0 = 0;
      __label__ = 24;
      break;
     case 23:
      
      var $59 = _PyFloat_FromDouble($r);
      $0 = $59;
      __label__ = 24;
      break;
     case 24:
      
      $retval = $0;
      var $retval25 = $retval;
      STACKTOP = __stackBase__;
      return $retval25;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_pow($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $iftmp_105;
      var $iftmp_104;
      var $iftmp_103;
      var $iftmp_102;
      var $iftmp_101;
      var $0;
      var $ox = __stackBase__;
      var $oy = __stackBase__ + 4;
      var $r;
      var $x;
      var $y;
      var $odd_y;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_UnpackTuple($args_addr, __str27, 2, 2, allocate([ $ox, 0, 0, 0, $oy, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 56;
      break;
     case 2:
      var $4 = HEAP[$ox];
      var $5 = _PyFloat_AsDouble($4);
      $x = $5;
      var $6 = HEAP[$oy];
      var $7 = _PyFloat_AsDouble($6);
      $y = $7;
      
      var $9 = $x == -1;
      if ($9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $11 = $y == -1;
      if ($11) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      var $12 = _PyErr_Occurred();
      
      if ($12 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 56;
      break;
     case 6:
      $r = 0;
      
      var $15 = ___finite($x);
      
      if ($15 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $18 = ___finite($y);
      
      if ($18 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 45;
        break;
      }
     case 8:
      var $20 = ___errno_location();
      HEAP[$20] = 0;
      
      var $22 = ___isnan($x);
      
      var $24 = $y;
      if ($22 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      if ($24 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      $iftmp_101 = $x;
      __label__ = 12;
      break;
     case 11:
      $iftmp_101 = 1;
      __label__ = 12;
      break;
     case 12:
      
      $r = $iftmp_101;
      __label__ = 52;
      break;
     case 13:
      var $28 = ___isnan($24);
      
      var $30 = $x;
      if ($28 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 14:
      
      if ($30 != 1) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      $iftmp_102 = $y;
      __label__ = 17;
      break;
     case 16:
      $iftmp_102 = 1;
      __label__ = 17;
      break;
     case 17:
      
      $r = $iftmp_102;
      __label__ = 52;
      break;
     case 18:
      var $34 = ___isinf($30);
      
      var $36 = $y;
      if ($34 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 19:
      var $37 = ___finite($36);
      
      if ($37 == 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $40 = _fabs($y);
      var $41 = _fmod($40, 2);
      
      if ($41 != 1) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      $iftmp_103 = 1;
      __label__ = 23;
      break;
     case 22:
      $iftmp_103 = 0;
      __label__ = 23;
      break;
     case 23:
      
      $odd_y = $iftmp_103;
      
      
      if ($y > 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 24:
      
      
      var $48 = $x;
      if ($odd_y == 0) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      var $49 = _fabs($48);
      $iftmp_104 = $49;
      __label__ = 27;
      break;
     case 26:
      $iftmp_104 = $48;
      __label__ = 27;
      break;
     case 27:
      
      $r = $iftmp_104;
      __label__ = 52;
      break;
     case 28:
      
      
      if ($y == 0) {
        __label__ = 29;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 29:
      $r = 1;
      __label__ = 52;
      break;
     case 30:
      
      
      if ($odd_y != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 31:
      
      var $56 = _copysign(0, $x);
      $iftmp_105 = $56;
      __label__ = 33;
      break;
     case 32:
      $iftmp_105 = 0;
      __label__ = 33;
      break;
     case 33:
      
      $r = $iftmp_105;
      __label__ = 52;
      break;
     case 34:
      var $58 = ___isinf($36);
      
      if ($58 != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 35:
      
      var $61 = _fabs($x);
      
      if ($61 == 1) {
        __label__ = 36;
        break;
      } else {
        __label__ = 37;
        break;
      }
     case 36:
      $r = 1;
      __label__ = 52;
      break;
     case 37:
      var $63 = $y;
      
      if ($63 <= 0) {
        __lastLabel__ = 37;
        __label__ = 40;
        break;
      } else {
        __lastLabel__ = 37;
        __label__ = 38;
        break;
      }
     case 38:
      
      var $66 = _fabs($x);
      
      var $_pr = $y;
      if ($66 <= 1) {
        __lastLabel__ = 38;
        __label__ = 40;
        break;
      } else {
        __lastLabel__ = 38;
        __label__ = 39;
        break;
      }
     case 39:
      $r = $_pr;
      __label__ = 52;
      break;
     case 40:
      var $68 = __lastLabel__ == 37 ? $63 : $_pr;
      
      if ($68 >= 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 41:
      
      var $71 = _fabs($x);
      
      if ($71 >= 1) {
        __label__ = 44;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 42:
      
      
      $r = 0 - $y;
      
      
      if ($x == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 43:
      var $77 = ___errno_location();
      HEAP[$77] = 33;
      __label__ = 52;
      break;
     case 44:
      $r = 0;
      __label__ = 52;
      break;
     case 45:
      var $78 = ___errno_location();
      HEAP[$78] = 0;
      
      
      var $81 = _llvm_pow_f64($x, $y);
      $r = $81;
      
      var $83 = ___finite($r);
      
      if ($83 == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 46:
      
      var $86 = ___isnan($r);
      
      if ($86 != 0) {
        __label__ = 47;
        break;
      } else {
        __label__ = 48;
        break;
      }
     case 47:
      var $88 = ___errno_location();
      HEAP[$88] = 33;
      __label__ = 52;
      break;
     case 48:
      
      var $90 = ___isinf($r);
      
      if ($90 != 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 49:
      
      var $93 = $x == 0;
      var $94 = ___errno_location();
      if ($93) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      HEAP[$94] = 33;
      __label__ = 52;
      break;
     case 51:
      HEAP[$94] = 34;
      __label__ = 52;
      break;
     case 52:
      var $95 = ___errno_location();
      
      
      if (HEAP[$95] == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 53:
      
      var $99 = _is_error($r);
      
      if ($99 == 0) {
        __label__ = 55;
        break;
      } else {
        __label__ = 54;
        break;
      }
     case 54:
      $0 = 0;
      __label__ = 56;
      break;
     case 55:
      
      var $102 = _PyFloat_FromDouble($r);
      $0 = $102;
      __label__ = 56;
      break;
     case 56:
      
      $retval = $0;
      var $retval59 = $retval;
      STACKTOP = __stackBase__;
      return $retval59;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_degrees($self, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $x;
      $self_addr = $self;
      $arg_addr = $arg;
      
      var $2 = _PyFloat_AsDouble($arg_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      var $9 = _PyFloat_FromDouble($x * 57.29577951308232);
      $0 = $9;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_radians($self, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $x;
      $self_addr = $self;
      $arg_addr = $arg;
      
      var $2 = _PyFloat_AsDouble($arg_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      
      var $9 = _PyFloat_FromDouble($x * .017453292519943295);
      $0 = $9;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_isnan($self, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $x;
      $self_addr = $self;
      $arg_addr = $arg;
      
      var $2 = _PyFloat_AsDouble($arg_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      var $8 = ___isnan($x);
      var $9 = _PyBool_FromLong($8);
      $0 = $9;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_isinf($self, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $x;
      $self_addr = $self;
      $arg_addr = $arg;
      
      var $2 = _PyFloat_AsDouble($arg_addr);
      $x = $2;
      
      var $4 = $x == -1;
      if ($4) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $5 = _PyErr_Occurred();
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 4;
      break;
     case 3:
      
      var $8 = ___isinf($x);
      var $9 = _PyBool_FromLong($8);
      $0 = $9;
      __label__ = 4;
      break;
     case 4:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initmath() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $0 = _Py_InitModule4(__str61, _math_methods, _module_doc, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $3 = _PyFloat_FromDouble(3.141592653589793);
      
      var $5 = _PyModule_AddObject($m, __str62, $3);
      var $6 = _PyFloat_FromDouble(2.718281828459045);
      
      var $8 = _PyModule_AddObject($m, __str63, $6);
      __label__ = 2;
      break;
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initmath"] = _initmath;
  function __Py_acosh($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $t;
      var $t12;
      $x_addr = $x;
      
      var $2 = ___isnan($x_addr);
      
      var $4 = $x_addr;
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $4 * 2;
      __label__ = 13;
      break;
     case 2:
      
      if ($4 < 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $7 = ___errno_location();
      HEAP[$7] = 33;
      $0 = NaN;
      __label__ = 13;
      break;
     case 4:
      
      
      var $10 = $x_addr;
      if ($x_addr >= 268435456) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $11 = ___isinf($10);
      
      var $13 = $x_addr;
      if ($11 != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      $0 = $13 * 2;
      __label__ = 13;
      break;
     case 7:
      var $15 = _llvm_log_f64($13);
      
      $0 = $15 + .6931471805599453;
      __label__ = 13;
      break;
     case 8:
      
      if ($10 == 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 13;
      break;
     case 10:
      
      
      var $20 = $x_addr;
      if ($x_addr > 2) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      $t = $20 * $x_addr;
      
      var $24 = $x_addr * 2;
      
      
      var $27 = _sqrt($t - 1);
      
      
      var $30 = -1 / ($27 + $x_addr);
      var $31 = $24 + $30;
      var $32 = _llvm_log_f64($31);
      $0 = $32;
      __label__ = 13;
      break;
     case 12:
      
      $t12 = $20 - 1;
      
      
      
      
      
      
      var $40 = _sqrt($t12 * 2 + $t12 * $t12);
      
      var $42 = $40 + $t12;
      var $43 = _log1p($42);
      $0 = $43;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval14 = $retval;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __Py_asinh($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $w;
      var $absx;
      var $t;
      $x_addr = $x;
      
      var $2 = _fabs($x_addr);
      $absx = $2;
      
      var $4 = ___isnan($x_addr);
      
      if ($4 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = ___isinf($x_addr);
      
      if ($7 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      $0 = $x_addr * 2;
      __label__ = 11;
      break;
     case 3:
      
      
      if ($absx < 3.725290298461914e-9) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $0 = $x_addr;
      __label__ = 11;
      break;
     case 5:
      
      
      var $16 = $absx;
      if ($absx > 268435456) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $17 = _llvm_log_f64($16);
      
      $w = $17 + .6931471805599453;
      __label__ = 10;
      break;
     case 7:
      
      if ($16 > 2) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $21 = $absx * 2;
      
      
      
      
      var $26 = _sqrt($x_addr * $x_addr + 1);
      
      
      
      var $30 = $21 + 1 / ($26 + $absx);
      var $31 = _llvm_log_f64($30);
      $w = $31;
      __label__ = 10;
      break;
     case 9:
      
      
      
      $t = $x_addr * $x_addr;
      
      
      var $37 = _sqrt($t + 1);
      
      
      
      
      var $42 = $t / ($37 + 1) + $absx;
      var $43 = _log1p($42);
      $w = $43;
      __label__ = 10;
      break;
     case 10:
      
      
      var $46 = _copysign($w, $x_addr);
      $0 = $46;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval11 = $retval;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __Py_atanh($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $absx;
      var $t;
      $x_addr = $x;
      
      var $2 = ___isnan($x_addr);
      
      var $4 = $x_addr;
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      $0 = $4 * 2;
      __label__ = 10;
      break;
     case 2:
      var $6 = _fabs($4);
      $absx = $6;
      
      
      if ($absx >= 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = ___errno_location();
      HEAP[$9] = 33;
      $0 = NaN;
      __label__ = 10;
      break;
     case 4:
      
      
      if ($absx < 3.725290298461914e-9) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      $0 = $x_addr;
      __label__ = 10;
      break;
     case 6:
      
      
      
      var $16 = $absx * 2;
      if ($absx < .5) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $t = $16;
      
      
      
      
      
      
      
      
      var $25 = _log1p($t * $absx / (1 - $absx) + $t);
      var $26 = $25 * .5;
      $t = $26;
      __label__ = 9;
      break;
     case 8:
      
      
      
      var $30 = _log1p($16 / (1 - $absx));
      
      $t = $30 * .5;
      __label__ = 9;
      break;
     case 9:
      
      
      var $34 = _copysign($t, $x_addr);
      $0 = $34;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval10 = $retval;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __Py_expm1($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $u;
      $x_addr = $x;
      
      var $2 = _fabs($x_addr);
      var $3 = $2 < .7;
      
      var $5 = _llvm_exp_f64($x_addr);
      if ($3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 1:
      $u = $5;
      
      
      if ($u == 1) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      $0 = $x_addr;
      __label__ = 5;
      break;
     case 3:
      
      
      
      var $12 = ($u - 1) * $x_addr;
      
      var $14 = _llvm_log_f64($u);
      
      $0 = $12 / $14;
      __label__ = 5;
      break;
     case 4:
      
      $0 = $5 - 1;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function __Py_log1p($x) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $x_addr;
      var $retval;
      var $0;
      var $y;
      $x_addr = $x;
      
      var $2 = _fabs($x_addr);
      
      var $4 = $x_addr;
      if ($2 < 1.1102230246251565e-16) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = $4;
      __label__ = 5;
      break;
     case 2:
      var $5 = $4 < -.5;
      
      
      
      
      var $9 = $x_addr + 1;
      if ($5 | $x_addr > 1) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      $y = $9;
      
      var $11 = _llvm_log_f64($y);
      
      
      
      
      
      
      
      $0 = $11 - ($y - 1 - $x_addr) / $y;
      __label__ = 5;
      break;
     case 4:
      var $19 = _llvm_log_f64($9);
      $0 = $19;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _acos, 0, _acosh, 0, _asin, 0, _asinh, 0, _atan, 0, _m_atan2, 0, _atanh, 0, _ceil, 0, _copysign, 0, _cos, 0, _cosh, 0, _m_erf, 0, _m_erfc, 0, _exp, 0, _expm1, 0, _fabs, 0, _floor, 0, _m_tgamma, 0, _m_lgamma, 0, _log1p, 0, _sin, 0, _sinh, 0, _sqrt, 0, _tan, 0, _tanh, 0, _m_log, 0, _m_log10, 0, _math_acos, 0, _math_acosh, 0, _math_asin, 0, _math_asinh, 0, _math_atan, 0, _math_atan2, 0, _math_atanh, 0, _math_ceil, 0, _math_copysign, 0, _math_cos, 0, _math_cosh, 0, _math_degrees, 0, _math_erf, 0, _math_erfc, 0, _math_exp, 0, _math_expm1, 0, _math_fabs, 0, _math_factorial, 0, _math_floor, 0, _math_fmod, 0, _math_frexp, 0, _math_fsum, 0, _math_gamma, 0, _math_hypot, 0, _math_isinf, 0, _math_isnan, 0, _math_ldexp, 0, _math_lgamma, 0, _math_log, 0, _math_log1p, 0, _math_log10, 0, _math_modf, 0, _math_pow, 0, _math_radians, 0, _math_sin, 0, _math_sinh, 0, _math_sqrt, 0, _math_tan, 0, _math_tanh, 0, _math_trunc, 0 ]);
  function run(args) {
    __str = allocate([ 40, 115, 105, 122, 101, 111, 102, 32, 40, 120, 41, 32, 61, 61, 32, 115, 105, 122, 101, 111, 102, 32, 40, 102, 108, 111, 97, 116, 41, 32, 63, 32, 95, 95, 102, 105, 110, 105, 116, 101, 102, 32, 40, 120, 41, 32, 58, 32, 115, 105, 122, 101, 111, 102, 32, 40, 120, 41, 32, 61, 61, 32, 115, 105, 122, 101, 111, 102, 32, 40, 100, 111, 117, 98, 108, 101, 41, 32, 63, 32, 95, 95, 102, 105, 110, 105, 116, 101, 32, 40, 120, 41, 32, 58, 32, 95, 95, 102, 105, 110, 105, 116, 101, 108, 32, 40, 120, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 109, 97, 116, 104, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8323 = allocate([ 115, 105, 110, 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 48, 32, 60, 61, 32, 110, 32, 38, 38, 32, 110, 32, 60, 61, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 48, 0 ], "i8", ALLOC_NORMAL);
    _lanczos_num_coeffs = allocate([ 23531376880.41076, 0, 0, 0, 0, 0, 0, 0, 42919803642.6491, 0, 0, 0, 0, 0, 0, 0, 35711959237.35567, 0, 0, 0, 0, 0, 0, 0, 17921034426.03721, 0, 0, 0, 0, 0, 0, 0, 6039542586.352028, 0, 0, 0, 0, 0, 0, 0, 1439720407.3117216, 0, 0, 0, 0, 0, 0, 0, 248874557.86205417, 0, 0, 0, 0, 0, 0, 0, 31426415.585400194, 0, 0, 0, 0, 0, 0, 0, 2876370.6289353725, 0, 0, 0, 0, 0, 0, 0, 186056.26539522348, 0, 0, 0, 0, 0, 0, 0, 8071.672002365816, 0, 0, 0, 0, 0, 0, 0, 210.82427775157936, 0, 0, 0, 0, 0, 0, 0, 2.5066282746310002, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _lanczos_den_coeffs = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 39916800, 0, 0, 0, 0, 0, 0, 0, 120543840, 0, 0, 0, 0, 0, 0, 0, 150917976, 0, 0, 0, 0, 0, 0, 0, 105258076, 0, 0, 0, 0, 0, 0, 0, 45995730, 0, 0, 0, 0, 0, 0, 0, 13339535, 0, 0, 0, 0, 0, 0, 0, 2637558, 0, 0, 0, 0, 0, 0, 0, 357423, 0, 0, 0, 0, 0, 0, 0, 32670, 0, 0, 0, 0, 0, 0, 0, 1925, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    _gamma_integral = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, 0, 0, 0, 720, 0, 0, 0, 0, 0, 0, 0, 5040, 0, 0, 0, 0, 0, 0, 0, 40320, 0, 0, 0, 0, 0, 0, 0, 362880, 0, 0, 0, 0, 0, 0, 0, 3628800, 0, 0, 0, 0, 0, 0, 0, 39916800, 0, 0, 0, 0, 0, 0, 0, 479001600, 0, 0, 0, 0, 0, 0, 0, 6227020800, 0, 0, 0, 0, 0, 0, 0, 87178291200, 0, 0, 0, 0, 0, 0, 0, 1307674368e3, 0, 0, 0, 0, 0, 0, 0, 20922789888e3, 0, 0, 0, 0, 0, 0, 0, 355687428096e3, 0, 0, 0, 0, 0, 0, 0, 6402373705728e3, 0, 0, 0, 0, 0, 0, 0, 0x1b02b9306890000, 0, 0, 0, 0, 0, 0, 0, 243290200817664e4, 0, 0, 0, 0, 0, 0, 0, 5109094217170944e4, 0, 0, 0, 0, 0, 0, 0, 0x3ceea4c2b3e0d80000, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str4 = allocate([ 120, 32, 62, 32, 48, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8369 = allocate([ 108, 97, 110, 99, 122, 111, 115, 95, 115, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 40, 42, 95, 95, 101, 114, 114, 110, 111, 95, 108, 111, 99, 97, 116, 105, 111, 110, 32, 40, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___8706 = allocate([ 105, 115, 95, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 109, 97, 116, 104, 32, 100, 111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 109, 97, 116, 104, 32, 114, 97, 110, 103, 101, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    _math_acos_doc = allocate([ 97, 99, 111, 115, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 99, 111, 115, 105, 110, 101, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_acosh_doc = allocate([ 97, 99, 111, 115, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 32, 99, 111, 115, 105, 110, 101, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_asin_doc = allocate([ 97, 115, 105, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 115, 105, 110, 101, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_asinh_doc = allocate([ 97, 115, 105, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 32, 115, 105, 110, 101, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_atan_doc = allocate([ 97, 116, 97, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 97, 116, 97, 110, 50, 0 ], "i8", ALLOC_NORMAL);
    _math_atan2_doc = allocate([ 97, 116, 97, 110, 50, 40, 121, 44, 32, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 121, 47, 120, 46, 10, 85, 110, 108, 105, 107, 101, 32, 97, 116, 97, 110, 40, 121, 47, 120, 41, 44, 32, 116, 104, 101, 32, 115, 105, 103, 110, 115, 32, 111, 102, 32, 98, 111, 116, 104, 32, 120, 32, 97, 110, 100, 32, 121, 32, 97, 114, 101, 32, 99, 111, 110, 115, 105, 100, 101, 114, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_atanh_doc = allocate([ 97, 116, 97, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_ceil_doc = allocate([ 99, 101, 105, 108, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 101, 105, 108, 105, 110, 103, 32, 111, 102, 32, 120, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 46, 10, 84, 104, 105, 115, 32, 105, 115, 32, 116, 104, 101, 32, 115, 109, 97, 108, 108, 101, 115, 116, 32, 105, 110, 116, 101, 103, 114, 97, 108, 32, 118, 97, 108, 117, 101, 32, 62, 61, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 99, 111, 112, 121, 115, 105, 103, 110, 0 ], "i8", ALLOC_NORMAL);
    _math_copysign_doc = allocate([ 99, 111, 112, 121, 115, 105, 103, 110, 40, 120, 44, 32, 121, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 120, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 115, 105, 103, 110, 32, 111, 102, 32, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_cos_doc = allocate([ 99, 111, 115, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_cosh_doc = allocate([ 99, 111, 115, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_erf_doc = allocate([ 101, 114, 102, 40, 120, 41, 10, 10, 69, 114, 114, 111, 114, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 116, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_erfc_doc = allocate([ 101, 114, 102, 99, 40, 120, 41, 10, 10, 67, 111, 109, 112, 108, 101, 109, 101, 110, 116, 97, 114, 121, 32, 101, 114, 114, 111, 114, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 116, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_exp_doc = allocate([ 101, 120, 112, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 101, 32, 114, 97, 105, 115, 101, 100, 32, 116, 111, 32, 116, 104, 101, 32, 112, 111, 119, 101, 114, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_expm1_doc = allocate([ 101, 120, 112, 109, 49, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 101, 120, 112, 40, 120, 41, 45, 49, 46, 10, 84, 104, 105, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 118, 111, 105, 100, 115, 32, 116, 104, 101, 32, 108, 111, 115, 115, 32, 111, 102, 32, 112, 114, 101, 99, 105, 115, 105, 111, 110, 32, 105, 110, 118, 111, 108, 118, 101, 100, 32, 105, 110, 32, 116, 104, 101, 32, 100, 105, 114, 101, 99, 116, 32, 101, 118, 97, 108, 117, 97, 116, 105, 111, 110, 32, 111, 102, 32, 101, 120, 112, 40, 120, 41, 45, 49, 32, 102, 111, 114, 32, 115, 109, 97, 108, 108, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_fabs_doc = allocate([ 102, 97, 98, 115, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 98, 115, 111, 108, 117, 116, 101, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 116, 104, 101, 32, 102, 108, 111, 97, 116, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_floor_doc = allocate([ 102, 108, 111, 111, 114, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 102, 108, 111, 111, 114, 32, 111, 102, 32, 120, 32, 97, 115, 32, 97, 32, 102, 108, 111, 97, 116, 46, 10, 84, 104, 105, 115, 32, 105, 115, 32, 116, 104, 101, 32, 108, 97, 114, 103, 101, 115, 116, 32, 105, 110, 116, 101, 103, 114, 97, 108, 32, 118, 97, 108, 117, 101, 32, 60, 61, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_gamma_doc = allocate([ 103, 97, 109, 109, 97, 40, 120, 41, 10, 10, 71, 97, 109, 109, 97, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 116, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_lgamma_doc = allocate([ 108, 103, 97, 109, 109, 97, 40, 120, 41, 10, 10, 78, 97, 116, 117, 114, 97, 108, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 97, 98, 115, 111, 108, 117, 116, 101, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 71, 97, 109, 109, 97, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 116, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_log1p_doc = allocate([ 108, 111, 103, 49, 112, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 110, 97, 116, 117, 114, 97, 108, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 49, 43, 120, 32, 40, 98, 97, 115, 101, 32, 101, 41, 46, 10, 84, 104, 101, 32, 114, 101, 115, 117, 108, 116, 32, 105, 115, 32, 99, 111, 109, 112, 117, 116, 101, 100, 32, 105, 110, 32, 97, 32, 119, 97, 121, 32, 119, 104, 105, 99, 104, 32, 105, 115, 32, 97, 99, 99, 117, 114, 97, 116, 101, 32, 102, 111, 114, 32, 120, 32, 110, 101, 97, 114, 32, 122, 101, 114, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_sin_doc = allocate([ 115, 105, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_sinh_doc = allocate([ 115, 105, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_sqrt_doc = allocate([ 115, 113, 114, 116, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 113, 117, 97, 114, 101, 32, 114, 111, 111, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_tan_doc = allocate([ 116, 97, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 32, 40, 109, 101, 97, 115, 117, 114, 101, 100, 32, 105, 110, 32, 114, 97, 100, 105, 97, 110, 115, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_tanh_doc = allocate([ 116, 97, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 109, 97, 116, 104, 46, 102, 115, 117, 109, 32, 112, 97, 114, 116, 105, 97, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 48, 32, 60, 61, 32, 110, 32, 38, 38, 32, 110, 32, 60, 61, 32, 109, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___9121 = allocate([ 109, 97, 116, 104, 95, 102, 115, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 40, 109, 32, 61, 61, 32, 51, 50, 32, 38, 38, 32, 112, 32, 61, 61, 32, 112, 115, 41, 32, 124, 124, 32, 40, 109, 32, 62, 32, 51, 50, 32, 38, 38, 32, 112, 32, 33, 61, 32, 40, 40, 118, 111, 105, 100, 32, 42, 41, 48, 41, 41, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 105, 110, 116, 101, 114, 109, 101, 100, 105, 97, 116, 101, 32, 111, 118, 101, 114, 102, 108, 111, 119, 32, 105, 110, 32, 102, 115, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 45, 105, 110, 102, 32, 43, 32, 105, 110, 102, 32, 105, 110, 32, 102, 115, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 102, 97, 98, 115, 40, 121, 41, 32, 60, 32, 102, 97, 98, 115, 40, 120, 41, 0 ], "i8", ALLOC_NORMAL);
    _math_fsum_doc = allocate([ 102, 115, 117, 109, 40, 105, 116, 101, 114, 97, 98, 108, 101, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 110, 32, 97, 99, 99, 117, 114, 97, 116, 101, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 115, 117, 109, 32, 111, 102, 32, 118, 97, 108, 117, 101, 115, 32, 105, 110, 32, 116, 104, 101, 32, 105, 116, 101, 114, 97, 98, 108, 101, 46, 10, 65, 115, 115, 117, 109, 101, 115, 32, 73, 69, 69, 69, 45, 55, 53, 52, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 112, 111, 105, 110, 116, 32, 97, 114, 105, 116, 104, 109, 101, 116, 105, 99, 46, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 102, 97, 99, 116, 111, 114, 105, 97, 108, 40, 41, 32, 111, 110, 108, 121, 32, 97, 99, 99, 101, 112, 116, 115, 32, 105, 110, 116, 101, 103, 114, 97, 108, 32, 118, 97, 108, 117, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 102, 97, 99, 116, 111, 114, 105, 97, 108, 40, 41, 32, 110, 111, 116, 32, 100, 101, 102, 105, 110, 101, 100, 32, 102, 111, 114, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 118, 97, 108, 117, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _math_factorial_doc = allocate([ 102, 97, 99, 116, 111, 114, 105, 97, 108, 40, 120, 41, 32, 45, 62, 32, 73, 110, 116, 101, 103, 114, 97, 108, 10, 10, 70, 105, 110, 100, 32, 120, 33, 46, 32, 82, 97, 105, 115, 101, 32, 97, 32, 86, 97, 108, 117, 101, 69, 114, 114, 111, 114, 32, 105, 102, 32, 120, 32, 105, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 111, 114, 32, 110, 111, 110, 45, 105, 110, 116, 101, 103, 114, 97, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 95, 95, 116, 114, 117, 110, 99, 95, 95, 0 ], "i8", ALLOC_NORMAL);
    _math_trunc_doc = allocate([ 116, 114, 117, 110, 99, 40, 120, 58, 82, 101, 97, 108, 41, 32, 45, 62, 32, 73, 110, 116, 101, 103, 114, 97, 108, 10, 10, 84, 114, 117, 110, 99, 97, 116, 101, 115, 32, 120, 32, 116, 111, 32, 116, 104, 101, 32, 110, 101, 97, 114, 101, 115, 116, 32, 73, 110, 116, 101, 103, 114, 97, 108, 32, 116, 111, 119, 97, 114, 100, 32, 48, 46, 32, 85, 115, 101, 115, 32, 116, 104, 101, 32, 95, 95, 116, 114, 117, 110, 99, 95, 95, 32, 109, 97, 103, 105, 99, 32, 109, 101, 116, 104, 111, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 40, 100, 105, 41, 0 ], "i8", ALLOC_NORMAL);
    _math_frexp_doc = allocate([ 102, 114, 101, 120, 112, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 109, 97, 110, 116, 105, 115, 115, 97, 32, 97, 110, 100, 32, 101, 120, 112, 111, 110, 101, 110, 116, 32, 111, 102, 32, 120, 44, 32, 97, 115, 32, 112, 97, 105, 114, 32, 40, 109, 44, 32, 101, 41, 46, 10, 109, 32, 105, 115, 32, 97, 32, 102, 108, 111, 97, 116, 32, 97, 110, 100, 32, 101, 32, 105, 115, 32, 97, 110, 32, 105, 110, 116, 44, 32, 115, 117, 99, 104, 32, 116, 104, 97, 116, 32, 120, 32, 61, 32, 109, 32, 42, 32, 50, 46, 42, 42, 101, 46, 10, 73, 102, 32, 120, 32, 105, 115, 32, 48, 44, 32, 109, 32, 97, 110, 100, 32, 101, 32, 97, 114, 101, 32, 98, 111, 116, 104, 32, 48, 46, 32, 32, 69, 108, 115, 101, 32, 48, 46, 53, 32, 60, 61, 32, 97, 98, 115, 40, 109, 41, 32, 60, 32, 49, 46, 48, 46, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 100, 79, 58, 108, 100, 101, 120, 112, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 69, 120, 112, 101, 99, 116, 101, 100, 32, 97, 110, 32, 105, 110, 116, 32, 111, 114, 32, 108, 111, 110, 103, 32, 97, 115, 32, 115, 101, 99, 111, 110, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 116, 111, 32, 108, 100, 101, 120, 112, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_ldexp_doc = allocate([ 108, 100, 101, 120, 112, 40, 120, 44, 32, 105, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 120, 32, 42, 32, 40, 50, 42, 42, 105, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 40, 100, 100, 41, 0 ], "i8", ALLOC_NORMAL);
    _math_modf_doc = allocate([ 109, 111, 100, 102, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 102, 114, 97, 99, 116, 105, 111, 110, 97, 108, 32, 97, 110, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 112, 97, 114, 116, 115, 32, 111, 102, 32, 120, 46, 32, 32, 66, 111, 116, 104, 32, 114, 101, 115, 117, 108, 116, 115, 32, 99, 97, 114, 114, 121, 32, 116, 104, 101, 32, 115, 105, 103, 110, 10, 111, 102, 32, 120, 32, 97, 110, 100, 32, 97, 114, 101, 32, 102, 108, 111, 97, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 108, 111, 103, 0 ], "i8", ALLOC_NORMAL);
    _math_log_doc = allocate([ 108, 111, 103, 40, 120, 91, 44, 32, 98, 97, 115, 101, 93, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 120, 32, 116, 111, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 98, 97, 115, 101, 46, 10, 73, 102, 32, 116, 104, 101, 32, 98, 97, 115, 101, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 110, 97, 116, 117, 114, 97, 108, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 40, 98, 97, 115, 101, 32, 101, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 108, 111, 103, 49, 48, 0 ], "i8", ALLOC_NORMAL);
    _math_log10_doc = allocate([ 108, 111, 103, 49, 48, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 98, 97, 115, 101, 32, 49, 48, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 102, 109, 111, 100, 0 ], "i8", ALLOC_NORMAL);
    _math_fmod_doc = allocate([ 102, 109, 111, 100, 40, 120, 44, 32, 121, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 102, 109, 111, 100, 40, 120, 44, 32, 121, 41, 44, 32, 97, 99, 99, 111, 114, 100, 105, 110, 103, 32, 116, 111, 32, 112, 108, 97, 116, 102, 111, 114, 109, 32, 67, 46, 32, 32, 120, 32, 37, 32, 121, 32, 109, 97, 121, 32, 100, 105, 102, 102, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 104, 121, 112, 111, 116, 0 ], "i8", ALLOC_NORMAL);
    _math_hypot_doc = allocate([ 104, 121, 112, 111, 116, 40, 120, 44, 32, 121, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 69, 117, 99, 108, 105, 100, 101, 97, 110, 32, 100, 105, 115, 116, 97, 110, 99, 101, 44, 32, 115, 113, 114, 116, 40, 120, 42, 120, 32, 43, 32, 121, 42, 121, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 112, 111, 119, 0 ], "i8", ALLOC_NORMAL);
    _math_pow_doc = allocate([ 112, 111, 119, 40, 120, 44, 32, 121, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 120, 42, 42, 121, 32, 40, 120, 32, 116, 111, 32, 116, 104, 101, 32, 112, 111, 119, 101, 114, 32, 111, 102, 32, 121, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_degrees_doc = allocate([ 100, 101, 103, 114, 101, 101, 115, 40, 120, 41, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 110, 103, 108, 101, 32, 120, 32, 102, 114, 111, 109, 32, 114, 97, 100, 105, 97, 110, 115, 32, 116, 111, 32, 100, 101, 103, 114, 101, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_radians_doc = allocate([ 114, 97, 100, 105, 97, 110, 115, 40, 120, 41, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 110, 103, 108, 101, 32, 120, 32, 102, 114, 111, 109, 32, 100, 101, 103, 114, 101, 101, 115, 32, 116, 111, 32, 114, 97, 100, 105, 97, 110, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_isnan_doc = allocate([ 105, 115, 110, 97, 110, 40, 120, 41, 32, 45, 62, 32, 98, 111, 111, 108, 10, 10, 67, 104, 101, 99, 107, 32, 105, 102, 32, 102, 108, 111, 97, 116, 32, 120, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 40, 78, 97, 78, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _math_isinf_doc = allocate([ 105, 115, 105, 110, 102, 40, 120, 41, 32, 45, 62, 32, 98, 111, 111, 108, 10, 10, 67, 104, 101, 99, 107, 32, 105, 102, 32, 102, 108, 111, 97, 116, 32, 120, 32, 105, 115, 32, 105, 110, 102, 105, 110, 105, 116, 101, 32, 40, 112, 111, 115, 105, 116, 105, 118, 101, 32, 111, 114, 32, 110, 101, 103, 97, 116, 105, 118, 101, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 97, 99, 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 97, 99, 111, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 97, 115, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 97, 115, 105, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 97, 116, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 97, 116, 97, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 99, 101, 105, 108, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 99, 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 99, 111, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 100, 101, 103, 114, 101, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 101, 114, 102, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 101, 114, 102, 99, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 101, 120, 112, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 101, 120, 112, 109, 49, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 102, 97, 98, 115, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 102, 97, 99, 116, 111, 114, 105, 97, 108, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 102, 108, 111, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 102, 114, 101, 120, 112, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 102, 115, 117, 109, 0 ], "i8", ALLOC_NORMAL);
    __str47 = allocate([ 103, 97, 109, 109, 97, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 105, 115, 105, 110, 102, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 105, 115, 110, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 108, 100, 101, 120, 112, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 108, 103, 97, 109, 109, 97, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 108, 111, 103, 49, 112, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 109, 111, 100, 102, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 114, 97, 100, 105, 97, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 115, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 115, 105, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 115, 113, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 116, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 116, 97, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 116, 114, 117, 110, 99, 0 ], "i8", ALLOC_NORMAL);
    _math_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 105, 115, 32, 97, 108, 119, 97, 121, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 46, 32, 32, 73, 116, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 10, 109, 97, 116, 104, 101, 109, 97, 116, 105, 99, 97, 108, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 100, 101, 102, 105, 110, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 67, 32, 115, 116, 97, 110, 100, 97, 114, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 109, 97, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_math_methods] = __str28;
    HEAP[_math_methods + 4] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_math_methods + 12] = _math_acos_doc;
    HEAP[_math_methods + 16] = __str29;
    HEAP[_math_methods + 20] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_math_methods + 28] = _math_acosh_doc;
    HEAP[_math_methods + 32] = __str30;
    HEAP[_math_methods + 36] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_math_methods + 44] = _math_asin_doc;
    HEAP[_math_methods + 48] = __str31;
    HEAP[_math_methods + 52] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_math_methods + 60] = _math_asinh_doc;
    HEAP[_math_methods + 64] = __str32;
    HEAP[_math_methods + 68] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_math_methods + 76] = _math_atan_doc;
    HEAP[_math_methods + 80] = __str8;
    HEAP[_math_methods + 84] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_math_methods + 92] = _math_atan2_doc;
    HEAP[_math_methods + 96] = __str33;
    HEAP[_math_methods + 100] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_math_methods + 108] = _math_atanh_doc;
    HEAP[_math_methods + 112] = __str34;
    HEAP[_math_methods + 116] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_math_methods + 124] = _math_ceil_doc;
    HEAP[_math_methods + 128] = __str9;
    HEAP[_math_methods + 132] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_math_methods + 140] = _math_copysign_doc;
    HEAP[_math_methods + 144] = __str35;
    HEAP[_math_methods + 148] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_math_methods + 156] = _math_cos_doc;
    HEAP[_math_methods + 160] = __str36;
    HEAP[_math_methods + 164] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_math_methods + 172] = _math_cosh_doc;
    HEAP[_math_methods + 176] = __str37;
    HEAP[_math_methods + 180] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_math_methods + 188] = _math_degrees_doc;
    HEAP[_math_methods + 192] = __str38;
    HEAP[_math_methods + 196] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_math_methods + 204] = _math_erf_doc;
    HEAP[_math_methods + 208] = __str39;
    HEAP[_math_methods + 212] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_math_methods + 220] = _math_erfc_doc;
    HEAP[_math_methods + 224] = __str40;
    HEAP[_math_methods + 228] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_math_methods + 236] = _math_exp_doc;
    HEAP[_math_methods + 240] = __str41;
    HEAP[_math_methods + 244] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_math_methods + 252] = _math_expm1_doc;
    HEAP[_math_methods + 256] = __str42;
    HEAP[_math_methods + 260] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_math_methods + 268] = _math_fabs_doc;
    HEAP[_math_methods + 272] = __str43;
    HEAP[_math_methods + 276] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_math_methods + 284] = _math_factorial_doc;
    HEAP[_math_methods + 288] = __str44;
    HEAP[_math_methods + 292] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_math_methods + 300] = _math_floor_doc;
    HEAP[_math_methods + 304] = __str25;
    HEAP[_math_methods + 308] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_math_methods + 316] = _math_fmod_doc;
    HEAP[_math_methods + 320] = __str45;
    HEAP[_math_methods + 324] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_math_methods + 332] = _math_frexp_doc;
    HEAP[_math_methods + 336] = __str46;
    HEAP[_math_methods + 340] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_math_methods + 348] = _math_fsum_doc;
    HEAP[_math_methods + 352] = __str47;
    HEAP[_math_methods + 356] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_math_methods + 364] = _math_gamma_doc;
    HEAP[_math_methods + 368] = __str26;
    HEAP[_math_methods + 372] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_math_methods + 380] = _math_hypot_doc;
    HEAP[_math_methods + 384] = __str48;
    HEAP[_math_methods + 388] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_math_methods + 396] = _math_isinf_doc;
    HEAP[_math_methods + 400] = __str49;
    HEAP[_math_methods + 404] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_math_methods + 412] = _math_isnan_doc;
    HEAP[_math_methods + 416] = __str50;
    HEAP[_math_methods + 420] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_math_methods + 428] = _math_ldexp_doc;
    HEAP[_math_methods + 432] = __str51;
    HEAP[_math_methods + 436] = FUNCTION_TABLE_OFFSET + 110;
    HEAP[_math_methods + 444] = _math_lgamma_doc;
    HEAP[_math_methods + 448] = __str23;
    HEAP[_math_methods + 452] = FUNCTION_TABLE_OFFSET + 112;
    HEAP[_math_methods + 460] = _math_log_doc;
    HEAP[_math_methods + 464] = __str52;
    HEAP[_math_methods + 468] = FUNCTION_TABLE_OFFSET + 114;
    HEAP[_math_methods + 476] = _math_log1p_doc;
    HEAP[_math_methods + 480] = __str24;
    HEAP[_math_methods + 484] = FUNCTION_TABLE_OFFSET + 116;
    HEAP[_math_methods + 492] = _math_log10_doc;
    HEAP[_math_methods + 496] = __str53;
    HEAP[_math_methods + 500] = FUNCTION_TABLE_OFFSET + 118;
    HEAP[_math_methods + 508] = _math_modf_doc;
    HEAP[_math_methods + 512] = __str27;
    HEAP[_math_methods + 516] = FUNCTION_TABLE_OFFSET + 120;
    HEAP[_math_methods + 524] = _math_pow_doc;
    HEAP[_math_methods + 528] = __str54;
    HEAP[_math_methods + 532] = FUNCTION_TABLE_OFFSET + 122;
    HEAP[_math_methods + 540] = _math_radians_doc;
    HEAP[_math_methods + 544] = __str55;
    HEAP[_math_methods + 548] = FUNCTION_TABLE_OFFSET + 124;
    HEAP[_math_methods + 556] = _math_sin_doc;
    HEAP[_math_methods + 560] = __str56;
    HEAP[_math_methods + 564] = FUNCTION_TABLE_OFFSET + 126;
    HEAP[_math_methods + 572] = _math_sinh_doc;
    HEAP[_math_methods + 576] = __str57;
    HEAP[_math_methods + 580] = FUNCTION_TABLE_OFFSET + 128;
    HEAP[_math_methods + 588] = _math_sqrt_doc;
    HEAP[_math_methods + 592] = __str58;
    HEAP[_math_methods + 596] = FUNCTION_TABLE_OFFSET + 130;
    HEAP[_math_methods + 604] = _math_tan_doc;
    HEAP[_math_methods + 608] = __str59;
    HEAP[_math_methods + 612] = FUNCTION_TABLE_OFFSET + 132;
    HEAP[_math_methods + 620] = _math_tanh_doc;
    HEAP[_math_methods + 624] = __str60;
    HEAP[_math_methods + 628] = FUNCTION_TABLE_OFFSET + 134;
    HEAP[_math_methods + 636] = _math_trunc_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
