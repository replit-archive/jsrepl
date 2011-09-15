"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 352;
  var $1___SIZE = 16;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyVarObject___SIZE = 12;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_Py_complex___SIZE = 16;
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _acos_special_values;
  var _c_acos_doc;
  var _acosh_special_values;
  var _c_acosh_doc;
  var _c_asin_doc;
  var _asinh_special_values;
  var _c_asinh_doc;
  var _c_atan_doc;
  var _atanh_special_values;
  var _c_atanh_doc;
  var _c_cos_doc;
  var _cosh_special_values;
  var _c_cosh_doc;
  var _exp_special_values;
  var _c_exp_doc;
  var _log_special_values;
  var _c_log10_doc;
  var _c_sin_doc;
  var _sinh_special_values;
  var _c_sinh_doc;
  var _sqrt_special_values;
  var _c_sqrt_doc;
  var _c_tan_doc;
  var _tanh_special_values;
  var _c_tanh_doc;
  var __str;
  var _cmath_log_doc;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var _cmath_phase_doc;
  var __str5;
  var __str6;
  var _cmath_polar_doc;
  var __str7;
  var _rect_special_values;
  var _cmath_rect_doc;
  var __str8;
  var _cmath_isnan_doc;
  var _cmath_isinf_doc;
  var _module_doc;
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
  var _cmath_methods;
  var __str30;
  var __str31;
  var __str32;
  function _special_type($d) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $d_addr;
      var $retval;
      var $0;
      $d_addr = $d;
      
      var $2 = ___finite($d_addr);
      
      var $4 = $d_addr;
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 1:
      var $5 = $4 != 0;
      
      var $7 = _copysign(1, $d_addr);
      var $8 = $7 == 1;
      if ($5) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      if ($8) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 4;
      __label__ = 13;
      break;
     case 4:
      $0 = 1;
      __label__ = 13;
      break;
     case 5:
      if ($8) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 3;
      __label__ = 13;
      break;
     case 7:
      $0 = 2;
      __label__ = 13;
      break;
     case 8:
      var $9 = ___isnan($4);
      
      if ($9 != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 6;
      __label__ = 13;
      break;
     case 10:
      
      var $12 = _copysign(1, $d_addr);
      
      if ($12 == 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      $0 = 5;
      __label__ = 13;
      break;
     case 12:
      $0 = 0;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval13 = $retval;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_acos($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $s1 = __stackBase__ + 16;
      var $s2 = __stackBase__ + 32;
      var $r = __stackBase__ + 48;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = ___errno_location();
      HEAP[$10] = 0;
      
      var $12 = HEAP[$z_addr];
      var $13 = _special_type($12);
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = _special_type($15);
      
      var $18 = _acos_special_values + $13 * 112 + $16 * 16;
      
      
      var $21 = HEAP[$18];
      HEAP[$agg_result] = $21;
      
      
      var $24 = HEAP[$18 + 8];
      HEAP[$agg_result + 8] = $24;
      __label__ = 10;
      break;
     case 3:
      
      var $26 = HEAP[$z_addr];
      var $27 = _fabs($26);
      
      if ($27 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _fabs($30);
      
      if ($31 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      var $34 = HEAP[$z_addr];
      
      var $36 = HEAP[$z_addr + 8];
      var $37 = _fabs($36);
      var $38 = _atan2($37, $34);
      
      HEAP[$r] = $38;
      
      
      
      
      var $44 = HEAP[$z_addr + 8];
      if (HEAP[$z_addr] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $47 = HEAP[$z_addr + 8] / 2;
      
      
      var $50 = HEAP[$z_addr] / 2;
      var $51 = _hypot($50, $47);
      var $52 = _llvm_log_f64($51);
      var $53 = $52 + 1.3862943611198906;
      var $54 = _copysign($53, $44);
      var $55 = 0 - $54;
      
      HEAP[$r + 8] = $55;
      __label__ = 9;
      break;
     case 7:
      var $57 = 0 - $44;
      
      
      var $60 = HEAP[$z_addr + 8] / 2;
      
      
      var $63 = HEAP[$z_addr] / 2;
      var $64 = _hypot($63, $60);
      var $65 = _llvm_log_f64($64);
      var $66 = $65 + 1.3862943611198906;
      var $67 = _copysign($66, $57);
      
      HEAP[$r + 8] = $67;
      __label__ = 9;
      break;
     case 8:
      
      
      var $71 = 1 - HEAP[$z_addr];
      
      HEAP[$s1] = $71;
      
      
      var $75 = 0 - HEAP[$z_addr + 8];
      
      HEAP[$s1 + 8] = $75;
      
      var $val = HEAP[$s1];
      
      var $val10 = HEAP[$s1 + 8];
      _c_sqrt($s1, $val, $val10);
      
      
      var $79 = HEAP[$z_addr] + 1;
      
      HEAP[$s2] = $79;
      
      var $82 = HEAP[$z_addr + 8];
      
      HEAP[$s2 + 8] = $82;
      
      var $val12 = HEAP[$s2];
      
      var $val14 = HEAP[$s2 + 8];
      _c_sqrt($s2, $val12, $val14);
      
      var $85 = HEAP[$s2];
      
      var $87 = HEAP[$s1];
      var $88 = _atan2($87, $85);
      var $89 = $88 * 2;
      
      HEAP[$r] = $89;
      
      
      
      
      
      
      
      
      
      
      var $101 = HEAP[$s2] * HEAP[$s1 + 8] - HEAP[$s2 + 8] * HEAP[$s1];
      var $102 = _asinh($101);
      
      HEAP[$r + 8] = $102;
      __label__ = 9;
      break;
     case 9:
      var $104 = ___errno_location();
      HEAP[$104] = 0;
      
      
      var $107 = HEAP[$r];
      HEAP[$agg_result] = $107;
      
      
      var $110 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $110;
      __label__ = 10;
      break;
     case 10:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_acosh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $s1 = __stackBase__ + 16;
      var $s2 = __stackBase__ + 32;
      var $r = __stackBase__ + 48;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = ___errno_location();
      HEAP[$10] = 0;
      
      var $12 = HEAP[$z_addr];
      var $13 = _special_type($12);
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = _special_type($15);
      
      var $18 = _acosh_special_values + $13 * 112 + $16 * 16;
      
      
      var $21 = HEAP[$18];
      HEAP[$agg_result] = $21;
      
      
      var $24 = HEAP[$18 + 8];
      HEAP[$agg_result + 8] = $24;
      __label__ = 8;
      break;
     case 3:
      
      var $26 = HEAP[$z_addr];
      var $27 = _fabs($26);
      
      if ($27 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _fabs($30);
      
      if ($31 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $35 = HEAP[$z_addr + 8] / 2;
      
      
      var $38 = HEAP[$z_addr] / 2;
      var $39 = _hypot($38, $35);
      var $40 = _llvm_log_f64($39);
      var $41 = $40 + 1.3862943611198906;
      
      HEAP[$r] = $41;
      
      var $44 = HEAP[$z_addr];
      
      var $46 = HEAP[$z_addr + 8];
      var $47 = _atan2($46, $44);
      
      HEAP[$r + 8] = $47;
      __label__ = 7;
      break;
     case 6:
      
      
      var $51 = HEAP[$z_addr] - 1;
      
      HEAP[$s1] = $51;
      
      var $54 = HEAP[$z_addr + 8];
      
      HEAP[$s1 + 8] = $54;
      
      var $val = HEAP[$s1];
      
      var $val7 = HEAP[$s1 + 8];
      _c_sqrt($s1, $val, $val7);
      
      
      var $58 = HEAP[$z_addr] + 1;
      
      HEAP[$s2] = $58;
      
      var $61 = HEAP[$z_addr + 8];
      
      HEAP[$s2 + 8] = $61;
      
      var $val9 = HEAP[$s2];
      
      var $val11 = HEAP[$s2 + 8];
      _c_sqrt($s2, $val9, $val11);
      
      
      
      
      
      
      
      
      
      
      var $73 = HEAP[$s1] * HEAP[$s2] + HEAP[$s1 + 8] * HEAP[$s2 + 8];
      var $74 = _asinh($73);
      
      HEAP[$r] = $74;
      
      var $77 = HEAP[$s2];
      
      var $79 = HEAP[$s1 + 8];
      var $80 = _atan2($79, $77);
      var $81 = $80 * 2;
      
      HEAP[$r + 8] = $81;
      __label__ = 7;
      break;
     case 7:
      var $83 = ___errno_location();
      HEAP[$83] = 0;
      
      
      var $86 = HEAP[$r];
      HEAP[$agg_result] = $86;
      
      
      var $89 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $89;
      __label__ = 8;
      break;
     case 8:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_asin($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    _memset(__stackBase__, 0, 48);
    
    var $z_addr = __stackBase__;
    var $s = __stackBase__ + 16;
    var $r = __stackBase__ + 32;
    
    HEAP[$z_addr] = $z_0;
    
    HEAP[$z_addr + 8] = $z_1;
    
    
    var $4 = 0 - HEAP[$z_addr + 8];
    
    HEAP[$s] = $4;
    
    var $7 = HEAP[$z_addr];
    
    HEAP[$s + 8] = $7;
    
    var $val = HEAP[$s];
    
    var $val2 = HEAP[$s + 8];
    _c_asinh($s, $val, $val2);
    
    var $10 = HEAP[$s + 8];
    
    HEAP[$r] = $10;
    
    
    var $14 = 0 - HEAP[$s];
    
    HEAP[$r + 8] = $14;
    
    
    var $18 = HEAP[$r];
    HEAP[$agg_result] = $18;
    
    
    var $21 = HEAP[$r + 8];
    HEAP[$agg_result + 8] = $21;
    STACKTOP = __stackBase__;
    return;
  }
  function _c_asinh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $s1 = __stackBase__ + 16;
      var $s2 = __stackBase__ + 32;
      var $r = __stackBase__ + 48;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = ___errno_location();
      HEAP[$10] = 0;
      
      var $12 = HEAP[$z_addr];
      var $13 = _special_type($12);
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = _special_type($15);
      
      var $18 = _asinh_special_values + $13 * 112 + $16 * 16;
      
      
      var $21 = HEAP[$18];
      HEAP[$agg_result] = $21;
      
      
      var $24 = HEAP[$18 + 8];
      HEAP[$agg_result + 8] = $24;
      __label__ = 11;
      break;
     case 3:
      
      var $26 = HEAP[$z_addr];
      var $27 = _fabs($26);
      
      if ($27 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _fabs($30);
      
      if ($31 > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      
      
      var $37 = HEAP[$z_addr];
      if (HEAP[$z_addr + 8] >= 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      var $40 = HEAP[$z_addr + 8] / 2;
      
      
      var $43 = HEAP[$z_addr] / 2;
      var $44 = _hypot($43, $40);
      var $45 = _llvm_log_f64($44);
      var $46 = $45 + 1.3862943611198906;
      var $47 = _copysign($46, $37);
      
      HEAP[$r] = $47;
      __label__ = 8;
      break;
     case 7:
      var $49 = 0 - $37;
      
      
      var $52 = HEAP[$z_addr + 8] / 2;
      
      
      var $55 = HEAP[$z_addr] / 2;
      var $56 = _hypot($55, $52);
      var $57 = _llvm_log_f64($56);
      var $58 = $57 + 1.3862943611198906;
      var $59 = _copysign($58, $49);
      var $60 = 0 - $59;
      
      HEAP[$r] = $60;
      __label__ = 8;
      break;
     case 8:
      
      var $63 = HEAP[$z_addr];
      var $64 = _fabs($63);
      
      var $66 = HEAP[$z_addr + 8];
      var $67 = _atan2($66, $64);
      
      HEAP[$r + 8] = $67;
      __label__ = 10;
      break;
     case 9:
      
      
      var $71 = HEAP[$z_addr + 8] + 1;
      
      HEAP[$s1] = $71;
      
      
      var $75 = 0 - HEAP[$z_addr];
      
      HEAP[$s1 + 8] = $75;
      
      var $val = HEAP[$s1];
      
      var $val10 = HEAP[$s1 + 8];
      _c_sqrt($s1, $val, $val10);
      
      
      var $79 = 1 - HEAP[$z_addr + 8];
      
      HEAP[$s2] = $79;
      
      var $82 = HEAP[$z_addr];
      
      HEAP[$s2 + 8] = $82;
      
      var $val12 = HEAP[$s2];
      
      var $val14 = HEAP[$s2 + 8];
      _c_sqrt($s2, $val12, $val14);
      
      
      
      
      
      
      
      
      
      
      var $94 = HEAP[$s1] * HEAP[$s2 + 8] - HEAP[$s2] * HEAP[$s1 + 8];
      var $95 = _asinh($94);
      
      HEAP[$r] = $95;
      
      
      
      
      
      
      
      
      
      
      var $107 = HEAP[$s1] * HEAP[$s2] - HEAP[$s1 + 8] * HEAP[$s2 + 8];
      
      var $109 = HEAP[$z_addr + 8];
      var $110 = _atan2($109, $107);
      
      HEAP[$r + 8] = $110;
      __label__ = 10;
      break;
     case 10:
      var $112 = ___errno_location();
      HEAP[$112] = 0;
      
      
      var $115 = HEAP[$r];
      HEAP[$agg_result] = $115;
      
      
      var $118 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $118;
      __label__ = 11;
      break;
     case 11:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_atan($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    _memset(__stackBase__, 0, 48);
    
    var $z_addr = __stackBase__;
    var $s = __stackBase__ + 16;
    var $r = __stackBase__ + 32;
    
    HEAP[$z_addr] = $z_0;
    
    HEAP[$z_addr + 8] = $z_1;
    
    
    var $4 = 0 - HEAP[$z_addr + 8];
    
    HEAP[$s] = $4;
    
    var $7 = HEAP[$z_addr];
    
    HEAP[$s + 8] = $7;
    
    var $val = HEAP[$s];
    
    var $val2 = HEAP[$s + 8];
    _c_atanh($s, $val, $val2);
    
    var $10 = HEAP[$s + 8];
    
    HEAP[$r] = $10;
    
    
    var $14 = 0 - HEAP[$s];
    
    HEAP[$r + 8] = $14;
    
    
    var $18 = HEAP[$r];
    HEAP[$agg_result] = $18;
    
    
    var $21 = HEAP[$r + 8];
    HEAP[$agg_result + 8] = $21;
    STACKTOP = __stackBase__;
    return;
  }
  function _c_atan2($z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $retval;
      var $0;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $4 = HEAP[$z_addr];
      var $5 = ___isnan($4);
      
      if ($5 != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $8 = HEAP[$z_addr + 8];
      var $9 = ___isnan($8);
      
      if ($9 != 0) {
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
      
      var $12 = HEAP[$z_addr + 8];
      var $13 = ___isinf($12);
      var $14 = $13 != 0;
      
      var $16 = HEAP[$z_addr];
      var $17 = ___isinf($16);
      var $18 = $17 != 0;
      if ($14) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      if ($18) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      var $20 = HEAP[$z_addr];
      var $21 = _copysign(1, $20);
      
      
      var $24 = HEAP[$z_addr + 8];
      if ($21 == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $25 = _copysign(.7853981633974483, $24);
      $0 = $25;
      __label__ = 15;
      break;
     case 7:
      var $26 = _copysign(2.356194490192345, $24);
      $0 = $26;
      __label__ = 15;
      break;
     case 8:
      
      var $28 = HEAP[$z_addr + 8];
      var $29 = _copysign(1.5707963267948966, $28);
      $0 = $29;
      __label__ = 15;
      break;
     case 9:
      if ($18) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      var $34 = HEAP[$z_addr];
      var $35 = _copysign(1, $34);
      
      
      var $38 = HEAP[$z_addr + 8];
      if ($35 == 1) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $39 = _copysign(0, $38);
      $0 = $39;
      __label__ = 15;
      break;
     case 13:
      var $40 = _copysign(3.141592653589793, $38);
      $0 = $40;
      __label__ = 15;
      break;
     case 14:
      
      var $42 = HEAP[$z_addr];
      
      var $44 = HEAP[$z_addr + 8];
      var $45 = _atan2($44, $42);
      $0 = $45;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_atanh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $0 = __stackBase__ + 16;
      var $1 = __stackBase__ + 32;
      var $r = __stackBase__ + 48;
      var $ay;
      var $h;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $5 = HEAP[$z_addr];
      var $6 = ___finite($5);
      
      if ($6 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $9 = HEAP[$z_addr + 8];
      var $10 = ___finite($9);
      
      if ($10 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $12 = ___errno_location();
      HEAP[$12] = 0;
      
      var $14 = HEAP[$z_addr];
      var $15 = _special_type($14);
      
      var $17 = HEAP[$z_addr + 8];
      var $18 = _special_type($17);
      
      var $20 = _atanh_special_values + $15 * 112 + $18 * 16;
      
      
      var $23 = HEAP[$20];
      HEAP[$agg_result] = $23;
      
      
      var $26 = HEAP[$20 + 8];
      HEAP[$agg_result + 8] = $26;
      __label__ = 15;
      break;
     case 3:
      
      
      
      if (HEAP[$z_addr] < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $val = HEAP[$z_addr];
      
      var $val5 = HEAP[$z_addr + 8];
      __Py_c_neg($1, $val, $val5);
      
      var $val7 = HEAP[$1];
      
      var $val9 = HEAP[$1 + 8];
      _c_atanh($0, $val7, $val9);
      
      var $val11 = HEAP[$0];
      
      var $val13 = HEAP[$0 + 8];
      __Py_c_neg($agg_result, $val11, $val13);
      __label__ = 15;
      break;
     case 5:
      
      var $31 = HEAP[$z_addr + 8];
      var $32 = _fabs($31);
      $ay = $32;
      
      
      
      if (HEAP[$z_addr] > 6.703903964971298e+153) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      if ($ay > 6.703903964971298e+153) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $40 = HEAP[$z_addr + 8] / 2;
      
      
      var $43 = HEAP[$z_addr] / 2;
      var $44 = _hypot($43, $40);
      $h = $44;
      
      
      
      
      
      
      var $51 = HEAP[$z_addr] / 4 / $h / $h;
      
      HEAP[$r] = $51;
      
      
      var $55 = 0 - HEAP[$z_addr + 8];
      var $56 = _copysign(1.5707963267948966, $55);
      var $57 = 0 - $56;
      
      HEAP[$r + 8] = $57;
      var $59 = ___errno_location();
      HEAP[$59] = 0;
      __label__ = 14;
      break;
     case 8:
      
      
      
      if (HEAP[$z_addr] != 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if ($ay >= 1.4916681462400413e-154) {
        __label__ = 13;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if ($ay == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      HEAP[$r] = Infinity;
      
      var $69 = HEAP[$z_addr + 8];
      
      HEAP[$r + 8] = $69;
      var $71 = ___errno_location();
      HEAP[$71] = 33;
      __label__ = 14;
      break;
     case 12:
      
      var $73 = _sqrt($ay);
      
      var $75 = _hypot($ay, 2);
      var $76 = _sqrt($75);
      var $77 = $73 / $76;
      var $78 = _llvm_log_f64($77);
      
      
      HEAP[$r] = 0 - $78;
      
      var $82 = HEAP[$z_addr + 8];
      
      
      var $85 = _atan2(2, 0 - $ay);
      var $86 = $85 / 2;
      var $87 = _copysign($86, $82);
      
      HEAP[$r + 8] = $87;
      var $89 = ___errno_location();
      HEAP[$89] = 0;
      __label__ = 14;
      break;
     case 13:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $104 = HEAP[$z_addr] * 4 / ((1 - HEAP[$z_addr]) * (1 - HEAP[$z_addr]) + $ay * $ay);
      var $105 = _log1p($104);
      var $106 = $105 / 4;
      
      HEAP[$r] = $106;
      
      
      
      
      
      
      
      
      
      
      var $118 = (1 - HEAP[$z_addr]) * (HEAP[$z_addr] + 1) - $ay * $ay;
      
      
      var $121 = HEAP[$z_addr + 8] * -2;
      var $122 = _atan2($121, $118);
      var $123 = $122 / -2;
      
      HEAP[$r + 8] = $123;
      var $125 = ___errno_location();
      HEAP[$125] = 0;
      __label__ = 14;
      break;
     case 14:
      
      
      var $128 = HEAP[$r];
      HEAP[$agg_result] = $128;
      
      
      var $131 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $131;
      __label__ = 15;
      break;
     case 15:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_cos($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    
    var $z_addr = __stackBase__;
    var $r = __stackBase__ + 16;
    
    HEAP[$z_addr] = $z_0;
    
    HEAP[$z_addr + 8] = $z_1;
    
    
    var $4 = 0 - HEAP[$z_addr + 8];
    
    HEAP[$r] = $4;
    
    var $7 = HEAP[$z_addr];
    
    HEAP[$r + 8] = $7;
    
    var $val = HEAP[$r];
    
    var $val2 = HEAP[$r + 8];
    _c_cosh($r, $val, $val2);
    
    
    var $11 = HEAP[$r];
    HEAP[$agg_result] = $11;
    
    
    var $14 = HEAP[$r + 8];
    HEAP[$agg_result + 8] = $14;
    STACKTOP = __stackBase__;
    return;
  }
  function _c_cosh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $x_minus_one;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 2:
      
      var $11 = HEAP[$z_addr];
      var $12 = ___isinf($11);
      
      if ($12 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = ___finite($15);
      
      if ($16 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $23 = HEAP[$z_addr] > 0;
      
      var $25 = HEAP[$z_addr + 8];
      var $26 = _cos($25);
      var $27 = _copysign(Infinity, $26);
      
      HEAP[$r] = $27;
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _sin($30);
      var $32 = _copysign(Infinity, $31);
      if ($23) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      HEAP[$r + 8] = $32;
      __label__ = 9;
      break;
     case 7:
      var $34 = 0 - $32;
      
      HEAP[$r + 8] = $34;
      __label__ = 9;
      break;
     case 8:
      
      var $37 = HEAP[$z_addr];
      var $38 = _special_type($37);
      
      var $40 = HEAP[$z_addr + 8];
      var $41 = _special_type($40);
      
      var $43 = _cosh_special_values + $38 * 112 + $41 * 16;
      
      
      var $46 = HEAP[$43];
      HEAP[$r] = $46;
      
      
      var $49 = HEAP[$43 + 8];
      HEAP[$r + 8] = $49;
      __label__ = 9;
      break;
     case 9:
      
      var $51 = HEAP[$z_addr + 8];
      var $52 = ___isinf($51);
      
      if ($52 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $55 = HEAP[$z_addr];
      var $56 = ___isnan($55);
      
      if ($56 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $58 = ___errno_location();
      HEAP[$58] = 33;
      __label__ = 13;
      break;
     case 12:
      var $59 = ___errno_location();
      HEAP[$59] = 0;
      __label__ = 13;
      break;
     case 13:
      
      
      var $62 = HEAP[$r];
      HEAP[$agg_result] = $62;
      
      
      var $65 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $65;
      __label__ = 22;
      break;
     case 14:
      
      var $67 = HEAP[$z_addr];
      var $68 = _fabs($67);
      var $69 = _llvm_log_f64(4.4942328371557893e+307);
      
      if ($68 > $69) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      var $72 = HEAP[$z_addr];
      
      var $74 = HEAP[$z_addr];
      var $75 = _copysign(1, $74);
      
      $x_minus_one = $72 - $75;
      
      var $78 = HEAP[$z_addr + 8];
      var $79 = _cos($78);
      
      var $81 = _cosh($x_minus_one);
      
      var $83 = $79 * $81 * 2.718281828459045;
      
      HEAP[$r] = $83;
      
      var $86 = HEAP[$z_addr + 8];
      var $87 = _sin($86);
      
      var $89 = _sinh($x_minus_one);
      
      var $91 = $87 * $89 * 2.718281828459045;
      
      HEAP[$r + 8] = $91;
      __label__ = 17;
      break;
     case 16:
      
      var $94 = HEAP[$z_addr + 8];
      var $95 = _cos($94);
      
      var $97 = HEAP[$z_addr];
      var $98 = _cosh($97);
      var $99 = $95 * $98;
      
      HEAP[$r] = $99;
      
      var $102 = HEAP[$z_addr + 8];
      var $103 = _sin($102);
      
      var $105 = HEAP[$z_addr];
      var $106 = _sinh($105);
      var $107 = $103 * $106;
      
      HEAP[$r + 8] = $107;
      __label__ = 17;
      break;
     case 17:
      
      var $110 = HEAP[$r];
      var $111 = ___isinf($110);
      
      if ($111 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      var $114 = HEAP[$r + 8];
      var $115 = ___isinf($114);
      
      if ($115 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $117 = ___errno_location();
      HEAP[$117] = 34;
      __label__ = 21;
      break;
     case 20:
      var $118 = ___errno_location();
      HEAP[$118] = 0;
      __label__ = 21;
      break;
     case 21:
      
      
      var $121 = HEAP[$r];
      HEAP[$agg_result] = $121;
      
      
      var $124 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $124;
      __label__ = 22;
      break;
     case 22:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_exp($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $l;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 2:
      
      var $11 = HEAP[$z_addr];
      var $12 = ___isinf($11);
      
      if ($12 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = ___finite($15);
      
      if ($16 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $23 = HEAP[$z_addr] > 0;
      
      var $25 = HEAP[$z_addr + 8];
      var $26 = _cos($25);
      if ($23) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $27 = _copysign(Infinity, $26);
      
      HEAP[$r] = $27;
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _sin($30);
      var $32 = _copysign(Infinity, $31);
      
      HEAP[$r + 8] = $32;
      __label__ = 9;
      break;
     case 7:
      var $34 = _copysign(0, $26);
      
      HEAP[$r] = $34;
      
      var $37 = HEAP[$z_addr + 8];
      var $38 = _sin($37);
      var $39 = _copysign(0, $38);
      
      HEAP[$r + 8] = $39;
      __label__ = 9;
      break;
     case 8:
      
      var $42 = HEAP[$z_addr];
      var $43 = _special_type($42);
      
      var $45 = HEAP[$z_addr + 8];
      var $46 = _special_type($45);
      
      var $48 = _exp_special_values + $43 * 112 + $46 * 16;
      
      
      var $51 = HEAP[$48];
      HEAP[$r] = $51;
      
      
      var $54 = HEAP[$48 + 8];
      HEAP[$r + 8] = $54;
      __label__ = 9;
      break;
     case 9:
      
      var $56 = HEAP[$z_addr + 8];
      var $57 = ___isinf($56);
      
      if ($57 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $60 = HEAP[$z_addr];
      var $61 = ___finite($60);
      
      if ($61 != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      var $64 = HEAP[$z_addr];
      var $65 = ___isinf($64);
      
      if ($65 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      
      if (HEAP[$z_addr] > 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      var $70 = ___errno_location();
      HEAP[$70] = 33;
      __label__ = 15;
      break;
     case 14:
      var $71 = ___errno_location();
      HEAP[$71] = 0;
      __label__ = 15;
      break;
     case 15:
      
      
      var $74 = HEAP[$r];
      HEAP[$agg_result] = $74;
      
      
      var $77 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $77;
      __label__ = 24;
      break;
     case 16:
      
      var $79 = HEAP[$z_addr];
      var $80 = _llvm_log_f64(4.4942328371557893e+307);
      
      
      var $83 = HEAP[$z_addr];
      if ($79 > $80) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $84 = $83 - 1;
      var $85 = _llvm_exp_f64($84);
      $l = $85;
      
      var $87 = HEAP[$z_addr + 8];
      var $88 = _cos($87);
      
      
      var $91 = $88 * $l * 2.718281828459045;
      
      HEAP[$r] = $91;
      
      var $94 = HEAP[$z_addr + 8];
      var $95 = _sin($94);
      
      
      var $98 = $95 * $l * 2.718281828459045;
      
      HEAP[$r + 8] = $98;
      __label__ = 19;
      break;
     case 18:
      var $100 = _llvm_exp_f64($83);
      $l = $100;
      
      var $102 = HEAP[$z_addr + 8];
      var $103 = _cos($102);
      
      var $105 = $103 * $l;
      
      HEAP[$r] = $105;
      
      var $108 = HEAP[$z_addr + 8];
      var $109 = _sin($108);
      
      var $111 = $109 * $l;
      
      HEAP[$r + 8] = $111;
      __label__ = 19;
      break;
     case 19:
      
      var $114 = HEAP[$r];
      var $115 = ___isinf($114);
      
      if ($115 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      var $118 = HEAP[$r + 8];
      var $119 = ___isinf($118);
      
      if ($119 != 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      var $121 = ___errno_location();
      HEAP[$121] = 34;
      __label__ = 23;
      break;
     case 22:
      var $122 = ___errno_location();
      HEAP[$122] = 0;
      __label__ = 23;
      break;
     case 23:
      
      
      var $125 = HEAP[$r];
      HEAP[$agg_result] = $125;
      
      
      var $128 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $128;
      __label__ = 24;
      break;
     case 24:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_log($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $iftmp_1;
      var $iftmp_0;
      var $r = __stackBase__ + 16;
      var $ax;
      var $ay;
      var $am;
      var $an;
      var $h;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = ___errno_location();
      HEAP[$10] = 0;
      
      var $12 = HEAP[$z_addr];
      var $13 = _special_type($12);
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = _special_type($15);
      
      var $18 = _log_special_values + $13 * 112 + $16 * 16;
      
      
      var $21 = HEAP[$18];
      HEAP[$agg_result] = $21;
      
      
      var $24 = HEAP[$18 + 8];
      HEAP[$agg_result + 8] = $24;
      __label__ = 22;
      break;
     case 3:
      
      var $26 = HEAP[$z_addr];
      var $27 = _fabs($26);
      $ax = $27;
      
      var $29 = HEAP[$z_addr + 8];
      var $30 = _fabs($29);
      $ay = $30;
      
      
      if ($ax > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if ($ay > 4.4942328371557893e+307) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $39 = _hypot($ax / 2, $ay / 2);
      var $40 = _llvm_log_f64($39);
      
      
      HEAP[$r] = $40 + .6931471805599453;
      __label__ = 21;
      break;
     case 6:
      
      
      if ($ax >= 2.2250738585072014e-308) {
        __label__ = 12;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if ($ay >= 2.2250738585072014e-308) {
        __label__ = 12;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if ($ax > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if ($ay > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $52 = _ldexp($ay, 53);
      
      var $54 = _ldexp($ax, 53);
      var $55 = _hypot($54, $52);
      var $56 = _llvm_log_f64($55);
      
      
      HEAP[$r] = $56 - 36.7368005696771;
      __label__ = 21;
      break;
     case 11:
      
      HEAP[$r] = -Infinity;
      
      var $61 = HEAP[$z_addr];
      
      var $63 = HEAP[$z_addr + 8];
      var $64 = _atan2($63, $61);
      
      HEAP[$r + 8] = $64;
      var $66 = ___errno_location();
      HEAP[$66] = 33;
      
      
      var $69 = HEAP[$r];
      HEAP[$agg_result] = $69;
      
      
      var $72 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $72;
      __label__ = 22;
      break;
     case 12:
      
      
      var $75 = _hypot($ax, $ay);
      $h = $75;
      
      
      
      
      
      if ($h < .71 | $h > 1.73) {
        __label__ = 20;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      
      
      if ($ax > $ay) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      $iftmp_0 = $ax;
      __label__ = 16;
      break;
     case 15:
      
      $iftmp_0 = $ay;
      __label__ = 16;
      break;
     case 16:
      
      $am = $iftmp_0;
      
      
      
      if ($ax > $ay) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      $iftmp_1 = $ay;
      __label__ = 19;
      break;
     case 18:
      
      $iftmp_1 = $ax;
      __label__ = 19;
      break;
     case 19:
      
      $an = $iftmp_1;
      
      
      
      
      
      
      
      
      
      var $101 = _log1p(($am - 1) * ($am + 1) + $an * $an);
      
      
      HEAP[$r] = $101 / 2;
      __label__ = 21;
      break;
     case 20:
      
      var $105 = _llvm_log_f64($h);
      
      HEAP[$r] = $105;
      __label__ = 21;
      break;
     case 21:
      
      var $108 = HEAP[$z_addr];
      
      var $110 = HEAP[$z_addr + 8];
      var $111 = _atan2($110, $108);
      
      HEAP[$r + 8] = $111;
      var $113 = ___errno_location();
      HEAP[$113] = 0;
      
      
      var $116 = HEAP[$r];
      HEAP[$agg_result] = $116;
      
      
      var $119 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $119;
      __label__ = 22;
      break;
     case 22:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_log10($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    
    var $z_addr = __stackBase__;
    var $r = __stackBase__ + 16;
    var $errno_save;
    
    HEAP[$z_addr] = $z_0;
    
    HEAP[$z_addr + 8] = $z_1;
    
    var $val = HEAP[$z_addr];
    
    var $val2 = HEAP[$z_addr + 8];
    _c_log($r, $val, $val2);
    var $2 = ___errno_location();
    
    $errno_save = HEAP[$2];
    
    
    var $6 = HEAP[$r] / 2.302585092994046;
    
    HEAP[$r] = $6;
    
    
    var $10 = HEAP[$r + 8] / 2.302585092994046;
    
    HEAP[$r + 8] = $10;
    var $12 = ___errno_location();
    
    HEAP[$12] = $errno_save;
    
    
    var $16 = HEAP[$r];
    HEAP[$agg_result] = $16;
    
    
    var $19 = HEAP[$r + 8];
    HEAP[$agg_result + 8] = $19;
    STACKTOP = __stackBase__;
    return;
  }
  function _c_sin($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    _memset(__stackBase__, 0, 48);
    
    var $z_addr = __stackBase__;
    var $s = __stackBase__ + 16;
    var $r = __stackBase__ + 32;
    
    HEAP[$z_addr] = $z_0;
    
    HEAP[$z_addr + 8] = $z_1;
    
    
    var $4 = 0 - HEAP[$z_addr + 8];
    
    HEAP[$s] = $4;
    
    var $7 = HEAP[$z_addr];
    
    HEAP[$s + 8] = $7;
    
    var $val = HEAP[$s];
    
    var $val2 = HEAP[$s + 8];
    _c_sinh($s, $val, $val2);
    
    var $10 = HEAP[$s + 8];
    
    HEAP[$r] = $10;
    
    
    var $14 = 0 - HEAP[$s];
    
    HEAP[$r + 8] = $14;
    
    
    var $18 = HEAP[$r];
    HEAP[$agg_result] = $18;
    
    
    var $21 = HEAP[$r + 8];
    HEAP[$agg_result + 8] = $21;
    STACKTOP = __stackBase__;
    return;
  }
  function _c_sinh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $x_minus_one;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 2:
      
      var $11 = HEAP[$z_addr];
      var $12 = ___isinf($11);
      
      if ($12 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = ___finite($15);
      
      if ($16 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      var $23 = HEAP[$z_addr] > 0;
      
      var $25 = HEAP[$z_addr + 8];
      var $26 = _cos($25);
      var $27 = _copysign(Infinity, $26);
      if ($23) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      HEAP[$r] = $27;
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _sin($30);
      var $32 = _copysign(Infinity, $31);
      
      HEAP[$r + 8] = $32;
      __label__ = 9;
      break;
     case 7:
      var $34 = 0 - $27;
      
      HEAP[$r] = $34;
      
      var $37 = HEAP[$z_addr + 8];
      var $38 = _sin($37);
      var $39 = _copysign(Infinity, $38);
      
      HEAP[$r + 8] = $39;
      __label__ = 9;
      break;
     case 8:
      
      var $42 = HEAP[$z_addr];
      var $43 = _special_type($42);
      
      var $45 = HEAP[$z_addr + 8];
      var $46 = _special_type($45);
      
      var $48 = _sinh_special_values + $43 * 112 + $46 * 16;
      
      
      var $51 = HEAP[$48];
      HEAP[$r] = $51;
      
      
      var $54 = HEAP[$48 + 8];
      HEAP[$r + 8] = $54;
      __label__ = 9;
      break;
     case 9:
      
      var $56 = HEAP[$z_addr + 8];
      var $57 = ___isinf($56);
      
      if ($57 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $60 = HEAP[$z_addr];
      var $61 = ___isnan($60);
      
      if ($61 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $63 = ___errno_location();
      HEAP[$63] = 33;
      __label__ = 13;
      break;
     case 12:
      var $64 = ___errno_location();
      HEAP[$64] = 0;
      __label__ = 13;
      break;
     case 13:
      
      
      var $67 = HEAP[$r];
      HEAP[$agg_result] = $67;
      
      
      var $70 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $70;
      __label__ = 22;
      break;
     case 14:
      
      var $72 = HEAP[$z_addr];
      var $73 = _fabs($72);
      var $74 = _llvm_log_f64(4.4942328371557893e+307);
      
      if ($73 > $74) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      var $77 = HEAP[$z_addr];
      
      var $79 = HEAP[$z_addr];
      var $80 = _copysign(1, $79);
      
      $x_minus_one = $77 - $80;
      
      var $83 = HEAP[$z_addr + 8];
      var $84 = _cos($83);
      
      var $86 = _sinh($x_minus_one);
      
      var $88 = $84 * $86 * 2.718281828459045;
      
      HEAP[$r] = $88;
      
      var $91 = HEAP[$z_addr + 8];
      var $92 = _sin($91);
      
      var $94 = _cosh($x_minus_one);
      
      var $96 = $92 * $94 * 2.718281828459045;
      
      HEAP[$r + 8] = $96;
      __label__ = 17;
      break;
     case 16:
      
      var $99 = HEAP[$z_addr + 8];
      var $100 = _cos($99);
      
      var $102 = HEAP[$z_addr];
      var $103 = _sinh($102);
      var $104 = $100 * $103;
      
      HEAP[$r] = $104;
      
      var $107 = HEAP[$z_addr + 8];
      var $108 = _sin($107);
      
      var $110 = HEAP[$z_addr];
      var $111 = _cosh($110);
      var $112 = $108 * $111;
      
      HEAP[$r + 8] = $112;
      __label__ = 17;
      break;
     case 17:
      
      var $115 = HEAP[$r];
      var $116 = ___isinf($115);
      
      if ($116 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      var $119 = HEAP[$r + 8];
      var $120 = ___isinf($119);
      
      if ($120 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      var $122 = ___errno_location();
      HEAP[$122] = 34;
      __label__ = 21;
      break;
     case 20:
      var $123 = ___errno_location();
      HEAP[$123] = 0;
      __label__ = 21;
      break;
     case 21:
      
      
      var $126 = HEAP[$r];
      HEAP[$agg_result] = $126;
      
      
      var $129 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $129;
      __label__ = 22;
      break;
     case 22:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_sqrt($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $s;
      var $d;
      var $ax;
      var $ay;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $10 = ___errno_location();
      HEAP[$10] = 0;
      
      var $12 = HEAP[$z_addr];
      var $13 = _special_type($12);
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = _special_type($15);
      
      var $18 = _sqrt_special_values + $13 * 112 + $16 * 16;
      
      
      var $21 = HEAP[$18];
      HEAP[$agg_result] = $21;
      
      
      var $24 = HEAP[$18 + 8];
      HEAP[$agg_result + 8] = $24;
      __label__ = 16;
      break;
     case 3:
      
      
      
      if (HEAP[$z_addr] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      HEAP[$r] = 0;
      
      var $33 = HEAP[$z_addr + 8];
      
      HEAP[$r + 8] = $33;
      
      
      var $37 = HEAP[$r];
      HEAP[$agg_result] = $37;
      
      
      var $40 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $40;
      __label__ = 16;
      break;
     case 6:
      
      var $42 = HEAP[$z_addr];
      var $43 = _fabs($42);
      $ax = $43;
      
      var $45 = HEAP[$z_addr + 8];
      var $46 = _fabs($45);
      $ay = $46;
      
      if ($43 >= 2.2250738585072014e-308) {
        __label__ = 11;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      if ($ay >= 2.2250738585072014e-308) {
        __label__ = 11;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      
      
      if ($ax > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if ($ay > 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $55 = _ldexp($ax, 53);
      $ax = $55;
      
      var $57 = _ldexp($ay, 53);
      
      var $59 = _hypot($ax, $57);
      
      var $61 = $59 + $ax;
      var $62 = _sqrt($61);
      var $63 = _ldexp($62, -27);
      $s = $63;
      __label__ = 12;
      break;
     case 11:
      
      var $65 = $ax / 8;
      $ax = $65;
      
      
      
      var $69 = _hypot($ax, $ay / 8);
      
      var $71 = $69 + $ax;
      var $72 = _sqrt($71);
      
      $s = $72 * 2;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      $d = $ay / ($s * 2);
      
      
      
      var $81 = $r;
      if (HEAP[$z_addr] >= 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      HEAP[$81] = $s;
      
      var $84 = HEAP[$z_addr + 8];
      
      var $86 = _copysign($d, $84);
      
      HEAP[$r + 8] = $86;
      __label__ = 15;
      break;
     case 14:
      
      HEAP[$81] = $d;
      
      var $90 = HEAP[$z_addr + 8];
      
      var $92 = _copysign($s, $90);
      
      HEAP[$r + 8] = $92;
      __label__ = 15;
      break;
     case 15:
      var $94 = ___errno_location();
      HEAP[$94] = 0;
      
      
      var $97 = HEAP[$r];
      HEAP[$agg_result] = $97;
      
      
      var $100 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $100;
      __label__ = 16;
      break;
     case 16:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _c_tan($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 48;
    _memset(__stackBase__, 0, 48);
    
    var $z_addr = __stackBase__;
    var $s = __stackBase__ + 16;
    var $r = __stackBase__ + 32;
    
    HEAP[$z_addr] = $z_0;
    
    HEAP[$z_addr + 8] = $z_1;
    
    
    var $4 = 0 - HEAP[$z_addr + 8];
    
    HEAP[$s] = $4;
    
    var $7 = HEAP[$z_addr];
    
    HEAP[$s + 8] = $7;
    
    var $val = HEAP[$s];
    
    var $val2 = HEAP[$s + 8];
    _c_tanh($s, $val, $val2);
    
    var $10 = HEAP[$s + 8];
    
    HEAP[$r] = $10;
    
    
    var $14 = 0 - HEAP[$s];
    
    HEAP[$r + 8] = $14;
    
    
    var $18 = HEAP[$r];
    HEAP[$agg_result] = $18;
    
    
    var $21 = HEAP[$r + 8];
    HEAP[$agg_result + 8] = $21;
    STACKTOP = __stackBase__;
    return;
  }
  function _c_tanh($agg_result, $z_0, $z_1) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $z_addr = __stackBase__;
      var $r = __stackBase__ + 16;
      var $tx;
      var $ty;
      var $cx;
      var $txty;
      var $denom;
      
      HEAP[$z_addr] = $z_0;
      
      HEAP[$z_addr + 8] = $z_1;
      
      var $3 = HEAP[$z_addr];
      var $4 = ___finite($3);
      
      if ($4 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $7 = HEAP[$z_addr + 8];
      var $8 = ___finite($7);
      
      if ($8 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 2:
      
      var $11 = HEAP[$z_addr];
      var $12 = ___isinf($11);
      
      if ($12 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $15 = HEAP[$z_addr + 8];
      var $16 = ___finite($15);
      
      if ($16 == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      if (HEAP[$z_addr + 8] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $24 = $r;
      if (HEAP[$z_addr] > 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      HEAP[$24] = 1;
      
      var $26 = HEAP[$z_addr + 8];
      var $27 = _sin($26);
      var $28 = $27 * 2;
      
      var $30 = HEAP[$z_addr + 8];
      var $31 = _cos($30);
      var $32 = $28 * $31;
      var $33 = _copysign(0, $32);
      
      HEAP[$r + 8] = $33;
      __label__ = 9;
      break;
     case 7:
      HEAP[$24] = -1;
      
      var $36 = HEAP[$z_addr + 8];
      var $37 = _sin($36);
      var $38 = $37 * 2;
      
      var $40 = HEAP[$z_addr + 8];
      var $41 = _cos($40);
      var $42 = $38 * $41;
      var $43 = _copysign(0, $42);
      
      HEAP[$r + 8] = $43;
      __label__ = 9;
      break;
     case 8:
      
      var $46 = HEAP[$z_addr];
      var $47 = _special_type($46);
      
      var $49 = HEAP[$z_addr + 8];
      var $50 = _special_type($49);
      
      var $52 = _tanh_special_values + $47 * 112 + $50 * 16;
      
      
      var $55 = HEAP[$52];
      HEAP[$r] = $55;
      
      
      var $58 = HEAP[$52 + 8];
      HEAP[$r + 8] = $58;
      __label__ = 9;
      break;
     case 9:
      
      var $60 = HEAP[$z_addr + 8];
      var $61 = ___isinf($60);
      
      if ($61 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      var $64 = HEAP[$z_addr];
      var $65 = ___finite($64);
      
      if ($65 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $67 = ___errno_location();
      HEAP[$67] = 33;
      __label__ = 13;
      break;
     case 12:
      var $68 = ___errno_location();
      HEAP[$68] = 0;
      __label__ = 13;
      break;
     case 13:
      
      
      var $71 = HEAP[$r];
      HEAP[$agg_result] = $71;
      
      
      var $74 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $74;
      __label__ = 18;
      break;
     case 14:
      
      var $76 = HEAP[$z_addr];
      var $77 = _fabs($76);
      var $78 = _llvm_log_f64(4.4942328371557893e+307);
      
      
      var $81 = HEAP[$z_addr];
      if ($77 > $78) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $82 = _copysign(1, $81);
      
      HEAP[$r] = $82;
      
      var $85 = HEAP[$z_addr + 8];
      var $86 = _sin($85);
      var $87 = $86 * 4;
      
      var $89 = HEAP[$z_addr + 8];
      var $90 = _cos($89);
      var $91 = $87 * $90;
      
      var $93 = HEAP[$z_addr];
      var $94 = _fabs($93);
      var $95 = $94 * -2;
      var $96 = _llvm_exp_f64($95);
      var $97 = $91 * $96;
      
      HEAP[$r + 8] = $97;
      __label__ = 17;
      break;
     case 16:
      var $99 = _tanh($81);
      $tx = $99;
      
      var $101 = HEAP[$z_addr + 8];
      var $102 = _tan($101);
      $ty = $102;
      
      var $104 = HEAP[$z_addr];
      var $105 = _cosh($104);
      
      $cx = 1 / $105;
      
      
      
      $txty = $tx * $ty;
      
      
      
      
      $denom = $txty * $txty + 1;
      
      
      
      
      
      
      
      
      
      HEAP[$r] = ($ty * $ty + 1) * $tx / $denom;
      
      
      
      
      
      
      
      
      HEAP[$r + 8] = $ty / $denom * $cx * $cx;
      __label__ = 17;
      break;
     case 17:
      var $131 = ___errno_location();
      HEAP[$131] = 0;
      
      
      var $134 = HEAP[$r];
      HEAP[$agg_result] = $134;
      
      
      var $137 = HEAP[$r + 8];
      HEAP[$agg_result + 8] = $137;
      __label__ = 18;
      break;
     case 18:
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmath_log($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 80;
    _memset(__stackBase__, 0, 80);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $y = __stackBase__ + 16;
      var $memtmp = __stackBase__ + 32;
      var $memtmp5 = __stackBase__ + 48;
      var $memtmp10 = __stackBase__ + 64;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str, allocate([ $x, 0, 0, 0, $y, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0, "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      var $4 = ___errno_location();
      HEAP[$4] = 0;
      
      var $val = HEAP[$x];
      
      var $val3 = HEAP[$x + 8];
      _c_log($memtmp, $val, $val3);
      
      
      var $7 = HEAP[$memtmp];
      HEAP[$x] = $7;
      
      
      var $10 = HEAP[$memtmp + 8];
      HEAP[$x + 8] = $10;
      
      
      
      
      
      if (HEAP[$args_addr + 8] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $val7 = HEAP[$y];
      
      var $val9 = HEAP[$y + 8];
      _c_log($memtmp5, $val7, $val9);
      
      
      var $18 = HEAP[$memtmp5];
      HEAP[$y] = $18;
      
      
      var $21 = HEAP[$memtmp5 + 8];
      HEAP[$y + 8] = $21;
      
      var $val12 = HEAP[$x];
      
      var $val14 = HEAP[$x + 8];
      
      var $val16 = HEAP[$y];
      
      var $val18 = HEAP[$y + 8];
      __Py_c_quot($memtmp10, $val12, $val14, $val16, $val18);
      
      
      var $24 = HEAP[$memtmp10];
      HEAP[$x] = $24;
      
      
      var $27 = HEAP[$memtmp10 + 8];
      HEAP[$x + 8] = $27;
      __label__ = 4;
      break;
     case 4:
      var $28 = ___errno_location();
      
      
      if (HEAP[$28] != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $31 = _math_error();
      $0 = $31;
      __label__ = 7;
      break;
     case 6:
      
      var $val23 = HEAP[$x];
      
      var $val25 = HEAP[$x + 8];
      var $32 = _PyComplex_FromCComplex($val23, $val25);
      $0 = $32;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval27 = $retval;
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_error() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $1 = ___errno_location();
      
      
      if (HEAP[$1] == 33) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($4, __str1);
      __label__ = 5;
      break;
     case 2:
      var $5 = ___errno_location();
      
      
      if (HEAP[$5] == 34) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($8, __str2);
      __label__ = 5;
      break;
     case 4:
      var $9 = HEAP[_PyExc_ValueError];
      var $10 = _PyErr_SetFromErrno($9);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      
      $retval = $0;
      var $retval5 = $retval;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _math_1($args, $func) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $args_addr;
      var $func_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $r = __stackBase__ + 16;
      $args_addr = $args;
      $func_addr = $func;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str3, allocate([ $x, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      var $4 = ___errno_location();
      HEAP[$4] = 0;
      var $5 = $func_addr;
      
      var $val = HEAP[$x];
      
      var $val3 = HEAP[$x + 8];
      FUNCTION_TABLE[$5]($r, $val, $val3);
      var $6 = ___errno_location();
      
      
      if (HEAP[$6] == 33) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str1);
      $0 = 0;
      __label__ = 7;
      break;
     case 4:
      var $10 = ___errno_location();
      
      
      if (HEAP[$10] == 34) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($13, __str2);
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      var $val9 = HEAP[$r];
      
      var $val11 = HEAP[$r + 8];
      var $14 = _PyComplex_FromCComplex($val9, $val11);
      $0 = $14;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmath_acos($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 2);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_acosh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 4);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_asin($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 6);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_asinh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 8);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_atan($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 10);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_atanh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 12);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_cos($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 14);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_cosh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 16);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_exp($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 18);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_log10($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 20);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_sin($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 22);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_sinh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 24);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_sqrt($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 26);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_tan($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 28);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_tanh($self, $args) {
    
    var $self_addr;
    var $args_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $args_addr = $args;
    
    var $2 = _math_1($args_addr, FUNCTION_TABLE_OFFSET + 30);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _cmath_phase($self, $args) {
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
      var $0;
      var $z = __stackBase__;
      var $phi;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str4, allocate([ $z, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = ___errno_location();
      HEAP[$4] = 0;
      
      var $val = HEAP[$z];
      
      var $val3 = HEAP[$z + 8];
      var $5 = _c_atan2($val, $val3);
      $phi = $5;
      var $6 = ___errno_location();
      
      
      if (HEAP[$6] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = _math_error();
      $0 = $9;
      __label__ = 5;
      break;
     case 4:
      
      var $11 = _PyFloat_FromDouble($phi);
      $0 = $11;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval7 = $retval;
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmath_polar($self, $args) {
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
      var $0;
      var $z = __stackBase__;
      var $r;
      var $phi;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str5, allocate([ $z, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      var $val = HEAP[$z];
      
      var $val3 = HEAP[$z + 8];
      var $4 = _c_atan2($val, $val3);
      $phi = $4;
      
      var $val5 = HEAP[$z];
      
      var $val7 = HEAP[$z + 8];
      var $5 = __Py_c_abs($val5, $val7);
      $r = $5;
      var $6 = ___errno_location();
      
      
      if (HEAP[$6] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = _math_error();
      $0 = $9;
      __label__ = 5;
      break;
     case 4:
      
      
      var $12 = _Py_BuildValue(__str6, allocate([ $r, 0, 0, 0, 0, 0, 0, 0, $phi, 0, 0, 0, 0, 0, 0, 0 ], [ "double", 0, 0, 0, 0, 0, 0, 0, "double", 0, 0, 0, 0, 0, 0, 0 ], ALLOC_STACK));
      $0 = $12;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval11 = $retval;
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmath_rect($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $z = __stackBase__;
      var $r = __stackBase__ + 16;
      var $phi = __stackBase__ + 24;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str7, allocate([ $r, 0, 0, 0, $phi, 0, 0, 0 ], [ "double*", 0, 0, 0, "double*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 19;
      break;
     case 2:
      var $4 = ___errno_location();
      HEAP[$4] = 0;
      var $5 = HEAP[$r];
      var $6 = ___finite($5);
      
      if ($6 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $8 = HEAP[$phi];
      var $9 = ___finite($8);
      
      if ($9 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 4:
      var $11 = HEAP[$r];
      var $12 = ___isinf($11);
      
      if ($12 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $14 = HEAP[$phi];
      var $15 = ___finite($14);
      
      
      
      
      if ($15 == 0 | HEAP[$phi] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      var $20 = HEAP[$r] > 0;
      var $21 = HEAP[$phi];
      var $22 = _cos($21);
      var $23 = _copysign(Infinity, $22);
      if ($20) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      HEAP[$z] = $23;
      var $25 = HEAP[$phi];
      var $26 = _sin($25);
      var $27 = _copysign(Infinity, $26);
      
      HEAP[$z + 8] = $27;
      __label__ = 10;
      break;
     case 8:
      var $29 = 0 - $23;
      
      HEAP[$z] = $29;
      var $31 = HEAP[$phi];
      var $32 = _sin($31);
      var $33 = _copysign(Infinity, $32);
      var $34 = 0 - $33;
      
      HEAP[$z + 8] = $34;
      __label__ = 10;
      break;
     case 9:
      var $36 = HEAP[$r];
      var $37 = _special_type($36);
      var $38 = HEAP[$phi];
      var $39 = _special_type($38);
      
      var $41 = _rect_special_values + $37 * 112 + $39 * 16;
      
      
      var $44 = HEAP[$41];
      HEAP[$z] = $44;
      
      
      var $47 = HEAP[$41 + 8];
      HEAP[$z + 8] = $47;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$r] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      var $50 = HEAP[$r];
      var $51 = ___isnan($50);
      
      if ($51 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      var $53 = HEAP[$phi];
      var $54 = ___isinf($53);
      
      if ($54 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      var $56 = ___errno_location();
      HEAP[$56] = 33;
      __label__ = 16;
      break;
     case 14:
      var $57 = ___errno_location();
      HEAP[$57] = 0;
      __label__ = 16;
      break;
     case 15:
      var $58 = HEAP[$phi];
      var $59 = _cos($58);
      
      var $61 = $59 * HEAP[$r];
      
      HEAP[$z] = $61;
      var $63 = HEAP[$phi];
      var $64 = _sin($63);
      
      var $66 = $64 * HEAP[$r];
      
      HEAP[$z + 8] = $66;
      var $68 = ___errno_location();
      HEAP[$68] = 0;
      __label__ = 16;
      break;
     case 16:
      var $69 = ___errno_location();
      
      
      if (HEAP[$69] != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      var $72 = _math_error();
      $0 = $72;
      __label__ = 19;
      break;
     case 18:
      
      var $val = HEAP[$z];
      
      var $val22 = HEAP[$z + 8];
      var $73 = _PyComplex_FromCComplex($val, $val22);
      $0 = $73;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $0;
      var $retval24 = $retval;
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmath_isnan($self, $args) {
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
      var $iftmp_27;
      var $0;
      var $z = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str8, allocate([ $z, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      
      var $5 = HEAP[$z];
      var $6 = ___isnan($5);
      
      if ($6 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $9 = HEAP[$z + 8];
      var $10 = ___isnan($9);
      
      if ($10 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $iftmp_27 = 1;
      __label__ = 6;
      break;
     case 5:
      $iftmp_27 = 0;
      __label__ = 6;
      break;
     case 6:
      
      var $13 = _PyBool_FromLong($iftmp_27);
      $0 = $13;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _cmath_isinf($self, $args) {
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
      var $iftmp_28;
      var $0;
      var $z = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str8, allocate([ $z, 0, 0, 0 ], [ "%struct.Py_complex*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 7;
      break;
     case 2:
      
      var $5 = HEAP[$z];
      var $6 = ___isinf($5);
      
      if ($6 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $9 = HEAP[$z + 8];
      var $10 = ___isinf($9);
      
      if ($10 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $iftmp_28 = 1;
      __label__ = 6;
      break;
     case 5:
      $iftmp_28 = 0;
      __label__ = 6;
      break;
     case 6:
      
      var $13 = _PyBool_FromLong($iftmp_28);
      $0 = $13;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval7 = $retval;
      STACKTOP = __stackBase__;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initcmath() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $p;
      var $p1;
      var $p2;
      var $p3;
      var $p4;
      var $p5;
      var $p6;
      var $p7;
      var $p8;
      var $p9;
      var $p10;
      var $0 = _Py_InitModule4(__str30, _cmath_methods, _module_doc, 0, 1013);
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
      
      var $5 = _PyModule_AddObject($m, __str31, $3);
      var $6 = _PyFloat_FromDouble(2.718281828459045);
      
      var $8 = _PyModule_AddObject($m, __str32, $6);
      $p = _acos_special_values;
      
      
      HEAP[$p] = 2.356194490192345;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $14 = $p + 16;
      $p = $14;
      
      
      HEAP[$p] = 3.141592653589793;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $20 = $p + 16;
      $p = $20;
      
      
      HEAP[$p] = 3.141592653589793;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $26 = $p + 16;
      $p = $26;
      
      
      HEAP[$p] = 3.141592653589793;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $32 = $p + 16;
      $p = $32;
      
      
      HEAP[$p] = 3.141592653589793;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $38 = $p + 16;
      $p = $38;
      
      
      HEAP[$p] = 2.356194490192345;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $44 = $p + 16;
      $p = $44;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $50 = $p + 16;
      $p = $50;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $56 = $p + 16;
      $p = $56;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $62 = $p + 16;
      $p = $62;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $68 = $p + 16;
      $p = $68;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $74 = $p + 16;
      $p = $74;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $80 = $p + 16;
      $p = $80;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $86 = $p + 16;
      $p = $86;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = NaN;
      
      var $92 = $p + 16;
      $p = $92;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $98 = $p + 16;
      $p = $98;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $104 = $p + 16;
      $p = $104;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = 0;
      
      var $110 = $p + 16;
      $p = $110;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = 0;
      
      var $116 = $p + 16;
      $p = $116;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $122 = $p + 16;
      $p = $122;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $128 = $p + 16;
      $p = $128;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = NaN;
      
      var $134 = $p + 16;
      $p = $134;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $140 = $p + 16;
      $p = $140;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $146 = $p + 16;
      $p = $146;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = 0;
      
      var $152 = $p + 16;
      $p = $152;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = 0;
      
      var $158 = $p + 16;
      $p = $158;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $164 = $p + 16;
      $p = $164;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $170 = $p + 16;
      $p = $170;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = NaN;
      
      var $176 = $p + 16;
      $p = $176;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $182 = $p + 16;
      $p = $182;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $188 = $p + 16;
      $p = $188;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $194 = $p + 16;
      $p = $194;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $200 = $p + 16;
      $p = $200;
      
      
      HEAP[$p] = -9.542631940771103e+33;
      
      
      HEAP[$p + 8] = -9.542631940771103e+33;
      
      var $206 = $p + 16;
      $p = $206;
      
      
      HEAP[$p] = 1.5707963267948966;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $212 = $p + 16;
      $p = $212;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = NaN;
      
      var $218 = $p + 16;
      $p = $218;
      
      
      HEAP[$p] = .7853981633974483;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $224 = $p + 16;
      $p = $224;
      
      
      HEAP[$p] = 0;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $230 = $p + 16;
      $p = $230;
      
      
      HEAP[$p] = 0;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $236 = $p + 16;
      $p = $236;
      
      
      HEAP[$p] = 0;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $242 = $p + 16;
      $p = $242;
      
      
      HEAP[$p] = 0;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $248 = $p + 16;
      $p = $248;
      
      
      HEAP[$p] = .7853981633974483;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $254 = $p + 16;
      $p = $254;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $260 = $p + 16;
      $p = $260;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = Infinity;
      
      var $266 = $p + 16;
      $p = $266;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = NaN;
      
      var $272 = $p + 16;
      $p = $272;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = NaN;
      
      var $278 = $p + 16;
      $p = $278;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = NaN;
      
      var $284 = $p + 16;
      $p = $284;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = NaN;
      
      var $290 = $p + 16;
      $p = $290;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = -Infinity;
      
      var $296 = $p + 16;
      $p = $296;
      
      
      HEAP[$p] = NaN;
      
      
      HEAP[$p + 8] = NaN;
      
      var $302 = $p + 16;
      $p = $302;
      $p1 = _acosh_special_values;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = -2.356194490192345;
      
      var $308 = $p1 + 16;
      $p1 = $308;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = -3.141592653589793;
      
      var $314 = $p1 + 16;
      $p1 = $314;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = -3.141592653589793;
      
      var $320 = $p1 + 16;
      $p1 = $320;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 3.141592653589793;
      
      var $326 = $p1 + 16;
      $p1 = $326;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 3.141592653589793;
      
      var $332 = $p1 + 16;
      $p1 = $332;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 2.356194490192345;
      
      var $338 = $p1 + 16;
      $p1 = $338;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $344 = $p1 + 16;
      $p1 = $344;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = -1.5707963267948966;
      
      var $350 = $p1 + 16;
      $p1 = $350;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $356 = $p1 + 16;
      $p1 = $356;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $362 = $p1 + 16;
      $p1 = $362;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $368 = $p1 + 16;
      $p1 = $368;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $374 = $p1 + 16;
      $p1 = $374;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 1.5707963267948966;
      
      var $380 = $p1 + 16;
      $p1 = $380;
      
      
      HEAP[$p1] = NaN;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $386 = $p1 + 16;
      $p1 = $386;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = -1.5707963267948966;
      
      var $392 = $p1 + 16;
      $p1 = $392;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $398 = $p1 + 16;
      $p1 = $398;
      
      
      HEAP[$p1] = 0;
      
      
      HEAP[$p1 + 8] = -1.5707963267948966;
      
      var $404 = $p1 + 16;
      $p1 = $404;
      
      
      HEAP[$p1] = 0;
      
      
      HEAP[$p1 + 8] = 1.5707963267948966;
      
      var $410 = $p1 + 16;
      $p1 = $410;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $416 = $p1 + 16;
      $p1 = $416;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 1.5707963267948966;
      
      var $422 = $p1 + 16;
      $p1 = $422;
      
      
      HEAP[$p1] = NaN;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $428 = $p1 + 16;
      $p1 = $428;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = -1.5707963267948966;
      
      var $434 = $p1 + 16;
      $p1 = $434;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $440 = $p1 + 16;
      $p1 = $440;
      
      
      HEAP[$p1] = 0;
      
      
      HEAP[$p1 + 8] = -1.5707963267948966;
      
      var $446 = $p1 + 16;
      $p1 = $446;
      
      
      HEAP[$p1] = 0;
      
      
      HEAP[$p1 + 8] = 1.5707963267948966;
      
      var $452 = $p1 + 16;
      $p1 = $452;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $458 = $p1 + 16;
      $p1 = $458;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 1.5707963267948966;
      
      var $464 = $p1 + 16;
      $p1 = $464;
      
      
      HEAP[$p1] = NaN;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $470 = $p1 + 16;
      $p1 = $470;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = -1.5707963267948966;
      
      var $476 = $p1 + 16;
      $p1 = $476;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $482 = $p1 + 16;
      $p1 = $482;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $488 = $p1 + 16;
      $p1 = $488;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $494 = $p1 + 16;
      $p1 = $494;
      
      
      HEAP[$p1] = -9.542631940771103e+33;
      
      
      HEAP[$p1 + 8] = -9.542631940771103e+33;
      
      var $500 = $p1 + 16;
      $p1 = $500;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 1.5707963267948966;
      
      var $506 = $p1 + 16;
      $p1 = $506;
      
      
      HEAP[$p1] = NaN;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $512 = $p1 + 16;
      $p1 = $512;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = -.7853981633974483;
      
      var $518 = $p1 + 16;
      $p1 = $518;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 0;
      
      var $524 = $p1 + 16;
      $p1 = $524;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 0;
      
      var $530 = $p1 + 16;
      $p1 = $530;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 0;
      
      var $536 = $p1 + 16;
      $p1 = $536;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = 0;
      
      var $542 = $p1 + 16;
      $p1 = $542;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = .7853981633974483;
      
      var $548 = $p1 + 16;
      $p1 = $548;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $554 = $p1 + 16;
      $p1 = $554;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $560 = $p1 + 16;
      $p1 = $560;
      
      
      HEAP[$p1] = NaN;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $566 = $p1 + 16;
      $p1 = $566;
      
      
      HEAP[$p1] = NaN;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $572 = $p1 + 16;
      $p1 = $572;
      
      
      HEAP[$p1] = NaN;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $578 = $p1 + 16;
      $p1 = $578;
      
      
      HEAP[$p1] = NaN;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $584 = $p1 + 16;
      $p1 = $584;
      
      
      HEAP[$p1] = Infinity;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $590 = $p1 + 16;
      $p1 = $590;
      
      
      HEAP[$p1] = NaN;
      
      
      HEAP[$p1 + 8] = NaN;
      
      var $596 = $p1 + 16;
      $p1 = $596;
      $p2 = _asinh_special_values;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = -.7853981633974483;
      
      var $602 = $p2 + 16;
      $p2 = $602;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $608 = $p2 + 16;
      $p2 = $608;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $614 = $p2 + 16;
      $p2 = $614;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $620 = $p2 + 16;
      $p2 = $620;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $626 = $p2 + 16;
      $p2 = $626;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = .7853981633974483;
      
      var $632 = $p2 + 16;
      $p2 = $632;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $638 = $p2 + 16;
      $p2 = $638;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = -1.5707963267948966;
      
      var $644 = $p2 + 16;
      $p2 = $644;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $650 = $p2 + 16;
      $p2 = $650;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $656 = $p2 + 16;
      $p2 = $656;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $662 = $p2 + 16;
      $p2 = $662;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $668 = $p2 + 16;
      $p2 = $668;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = 1.5707963267948966;
      
      var $674 = $p2 + 16;
      $p2 = $674;
      
      
      HEAP[$p2] = NaN;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $680 = $p2 + 16;
      $p2 = $680;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = -1.5707963267948966;
      
      var $686 = $p2 + 16;
      $p2 = $686;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $692 = $p2 + 16;
      $p2 = $692;
      
      
      HEAP[$p2] = 0;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $698 = $p2 + 16;
      $p2 = $698;
      
      
      HEAP[$p2] = 0;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $704 = $p2 + 16;
      $p2 = $704;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $710 = $p2 + 16;
      $p2 = $710;
      
      
      HEAP[$p2] = -Infinity;
      
      
      HEAP[$p2 + 8] = 1.5707963267948966;
      
      var $716 = $p2 + 16;
      $p2 = $716;
      
      
      HEAP[$p2] = NaN;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $722 = $p2 + 16;
      $p2 = $722;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = -1.5707963267948966;
      
      var $728 = $p2 + 16;
      $p2 = $728;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $734 = $p2 + 16;
      $p2 = $734;
      
      
      HEAP[$p2] = 0;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $740 = $p2 + 16;
      $p2 = $740;
      
      
      HEAP[$p2] = 0;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $746 = $p2 + 16;
      $p2 = $746;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $752 = $p2 + 16;
      $p2 = $752;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = 1.5707963267948966;
      
      var $758 = $p2 + 16;
      $p2 = $758;
      
      
      HEAP[$p2] = NaN;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $764 = $p2 + 16;
      $p2 = $764;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = -1.5707963267948966;
      
      var $770 = $p2 + 16;
      $p2 = $770;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $776 = $p2 + 16;
      $p2 = $776;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $782 = $p2 + 16;
      $p2 = $782;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $788 = $p2 + 16;
      $p2 = $788;
      
      
      HEAP[$p2] = -9.542631940771103e+33;
      
      
      HEAP[$p2 + 8] = -9.542631940771103e+33;
      
      var $794 = $p2 + 16;
      $p2 = $794;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = 1.5707963267948966;
      
      var $800 = $p2 + 16;
      $p2 = $800;
      
      
      HEAP[$p2] = NaN;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $806 = $p2 + 16;
      $p2 = $806;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = -.7853981633974483;
      
      var $812 = $p2 + 16;
      $p2 = $812;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $818 = $p2 + 16;
      $p2 = $818;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $824 = $p2 + 16;
      $p2 = $824;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $830 = $p2 + 16;
      $p2 = $830;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $836 = $p2 + 16;
      $p2 = $836;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = .7853981633974483;
      
      var $842 = $p2 + 16;
      $p2 = $842;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $848 = $p2 + 16;
      $p2 = $848;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $854 = $p2 + 16;
      $p2 = $854;
      
      
      HEAP[$p2] = NaN;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $860 = $p2 + 16;
      $p2 = $860;
      
      
      HEAP[$p2] = NaN;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $866 = $p2 + 16;
      $p2 = $866;
      
      
      HEAP[$p2] = NaN;
      
      
      HEAP[$p2 + 8] = 0;
      
      var $872 = $p2 + 16;
      $p2 = $872;
      
      
      HEAP[$p2] = NaN;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $878 = $p2 + 16;
      $p2 = $878;
      
      
      HEAP[$p2] = Infinity;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $884 = $p2 + 16;
      $p2 = $884;
      
      
      HEAP[$p2] = NaN;
      
      
      HEAP[$p2 + 8] = NaN;
      
      var $890 = $p2 + 16;
      $p2 = $890;
      $p3 = _atanh_special_values;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $896 = $p3 + 16;
      $p3 = $896;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $902 = $p3 + 16;
      $p3 = $902;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $908 = $p3 + 16;
      $p3 = $908;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $914 = $p3 + 16;
      $p3 = $914;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $920 = $p3 + 16;
      $p3 = $920;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $926 = $p3 + 16;
      $p3 = $926;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $932 = $p3 + 16;
      $p3 = $932;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $938 = $p3 + 16;
      $p3 = $938;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $944 = $p3 + 16;
      $p3 = $944;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $950 = $p3 + 16;
      $p3 = $950;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $956 = $p3 + 16;
      $p3 = $956;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $962 = $p3 + 16;
      $p3 = $962;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $968 = $p3 + 16;
      $p3 = $968;
      
      
      HEAP[$p3] = NaN;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $974 = $p3 + 16;
      $p3 = $974;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $980 = $p3 + 16;
      $p3 = $980;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $986 = $p3 + 16;
      $p3 = $986;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 0;
      
      var $992 = $p3 + 16;
      $p3 = $992;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 0;
      
      var $998 = $p3 + 16;
      $p3 = $998;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $1004 = $p3 + 16;
      $p3 = $1004;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $1010 = $p3 + 16;
      $p3 = $1010;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $1016 = $p3 + 16;
      $p3 = $1016;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $1022 = $p3 + 16;
      $p3 = $1022;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $1028 = $p3 + 16;
      $p3 = $1028;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 0;
      
      var $1034 = $p3 + 16;
      $p3 = $1034;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 0;
      
      var $1040 = $p3 + 16;
      $p3 = $1040;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $1046 = $p3 + 16;
      $p3 = $1046;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $1052 = $p3 + 16;
      $p3 = $1052;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $1058 = $p3 + 16;
      $p3 = $1058;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $1064 = $p3 + 16;
      $p3 = $1064;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $1070 = $p3 + 16;
      $p3 = $1070;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $1076 = $p3 + 16;
      $p3 = $1076;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $1082 = $p3 + 16;
      $p3 = $1082;
      
      
      HEAP[$p3] = -9.542631940771103e+33;
      
      
      HEAP[$p3 + 8] = -9.542631940771103e+33;
      
      var $1088 = $p3 + 16;
      $p3 = $1088;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $1094 = $p3 + 16;
      $p3 = $1094;
      
      
      HEAP[$p3] = NaN;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $1100 = $p3 + 16;
      $p3 = $1100;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $1106 = $p3 + 16;
      $p3 = $1106;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $1112 = $p3 + 16;
      $p3 = $1112;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $1118 = $p3 + 16;
      $p3 = $1118;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $1124 = $p3 + 16;
      $p3 = $1124;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $1130 = $p3 + 16;
      $p3 = $1130;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $1136 = $p3 + 16;
      $p3 = $1136;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $1142 = $p3 + 16;
      $p3 = $1142;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = -1.5707963267948966;
      
      var $1148 = $p3 + 16;
      $p3 = $1148;
      
      
      HEAP[$p3] = NaN;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $1154 = $p3 + 16;
      $p3 = $1154;
      
      
      HEAP[$p3] = NaN;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $1160 = $p3 + 16;
      $p3 = $1160;
      
      
      HEAP[$p3] = NaN;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $1166 = $p3 + 16;
      $p3 = $1166;
      
      
      HEAP[$p3] = NaN;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $1172 = $p3 + 16;
      $p3 = $1172;
      
      
      HEAP[$p3] = 0;
      
      
      HEAP[$p3 + 8] = 1.5707963267948966;
      
      var $1178 = $p3 + 16;
      $p3 = $1178;
      
      
      HEAP[$p3] = NaN;
      
      
      HEAP[$p3 + 8] = NaN;
      
      var $1184 = $p3 + 16;
      $p3 = $1184;
      $p4 = _cosh_special_values;
      
      
      HEAP[$p4] = Infinity;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1190 = $p4 + 16;
      $p4 = $1190;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1196 = $p4 + 16;
      $p4 = $1196;
      
      
      HEAP[$p4] = Infinity;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1202 = $p4 + 16;
      $p4 = $1202;
      
      
      HEAP[$p4] = Infinity;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1208 = $p4 + 16;
      $p4 = $1208;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1214 = $p4 + 16;
      $p4 = $1214;
      
      
      HEAP[$p4] = Infinity;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1220 = $p4 + 16;
      $p4 = $1220;
      
      
      HEAP[$p4] = Infinity;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1226 = $p4 + 16;
      $p4 = $1226;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1232 = $p4 + 16;
      $p4 = $1232;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1238 = $p4 + 16;
      $p4 = $1238;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1244 = $p4 + 16;
      $p4 = $1244;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1250 = $p4 + 16;
      $p4 = $1250;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1256 = $p4 + 16;
      $p4 = $1256;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1262 = $p4 + 16;
      $p4 = $1262;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1268 = $p4 + 16;
      $p4 = $1268;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1274 = $p4 + 16;
      $p4 = $1274;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1280 = $p4 + 16;
      $p4 = $1280;
      
      
      HEAP[$p4] = 1;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1286 = $p4 + 16;
      $p4 = $1286;
      
      
      HEAP[$p4] = 1;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1292 = $p4 + 16;
      $p4 = $1292;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1298 = $p4 + 16;
      $p4 = $1298;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1304 = $p4 + 16;
      $p4 = $1304;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1310 = $p4 + 16;
      $p4 = $1310;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1316 = $p4 + 16;
      $p4 = $1316;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1322 = $p4 + 16;
      $p4 = $1322;
      
      
      HEAP[$p4] = 1;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1328 = $p4 + 16;
      $p4 = $1328;
      
      
      HEAP[$p4] = 1;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1334 = $p4 + 16;
      $p4 = $1334;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1340 = $p4 + 16;
      $p4 = $1340;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1346 = $p4 + 16;
      $p4 = $1346;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1352 = $p4 + 16;
      $p4 = $1352;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1358 = $p4 + 16;
      $p4 = $1358;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1364 = $p4 + 16;
      $p4 = $1364;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1370 = $p4 + 16;
      $p4 = $1370;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1376 = $p4 + 16;
      $p4 = $1376;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1382 = $p4 + 16;
      $p4 = $1382;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1388 = $p4 + 16;
      $p4 = $1388;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1394 = $p4 + 16;
      $p4 = $1394;
      
      
      HEAP[$p4] = Infinity;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1400 = $p4 + 16;
      $p4 = $1400;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1406 = $p4 + 16;
      $p4 = $1406;
      
      
      HEAP[$p4] = Infinity;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1412 = $p4 + 16;
      $p4 = $1412;
      
      
      HEAP[$p4] = Infinity;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1418 = $p4 + 16;
      $p4 = $1418;
      
      
      HEAP[$p4] = -9.542631940771103e+33;
      
      
      HEAP[$p4 + 8] = -9.542631940771103e+33;
      
      var $1424 = $p4 + 16;
      $p4 = $1424;
      
      
      HEAP[$p4] = Infinity;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1430 = $p4 + 16;
      $p4 = $1430;
      
      
      HEAP[$p4] = Infinity;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1436 = $p4 + 16;
      $p4 = $1436;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1442 = $p4 + 16;
      $p4 = $1442;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1448 = $p4 + 16;
      $p4 = $1448;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1454 = $p4 + 16;
      $p4 = $1454;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = 0;
      
      var $1460 = $p4 + 16;
      $p4 = $1460;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1466 = $p4 + 16;
      $p4 = $1466;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1472 = $p4 + 16;
      $p4 = $1472;
      
      
      HEAP[$p4] = NaN;
      
      
      HEAP[$p4 + 8] = NaN;
      
      var $1478 = $p4 + 16;
      $p4 = $1478;
      $p5 = _exp_special_values;
      
      
      HEAP[$p5] = 0;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1484 = $p5 + 16;
      $p5 = $1484;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1490 = $p5 + 16;
      $p5 = $1490;
      
      
      HEAP[$p5] = 0;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1496 = $p5 + 16;
      $p5 = $1496;
      
      
      HEAP[$p5] = 0;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1502 = $p5 + 16;
      $p5 = $1502;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1508 = $p5 + 16;
      $p5 = $1508;
      
      
      HEAP[$p5] = 0;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1514 = $p5 + 16;
      $p5 = $1514;
      
      
      HEAP[$p5] = 0;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1520 = $p5 + 16;
      $p5 = $1520;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1526 = $p5 + 16;
      $p5 = $1526;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1532 = $p5 + 16;
      $p5 = $1532;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1538 = $p5 + 16;
      $p5 = $1538;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1544 = $p5 + 16;
      $p5 = $1544;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1550 = $p5 + 16;
      $p5 = $1550;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1556 = $p5 + 16;
      $p5 = $1556;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1562 = $p5 + 16;
      $p5 = $1562;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1568 = $p5 + 16;
      $p5 = $1568;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1574 = $p5 + 16;
      $p5 = $1574;
      
      
      HEAP[$p5] = 1;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1580 = $p5 + 16;
      $p5 = $1580;
      
      
      HEAP[$p5] = 1;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1586 = $p5 + 16;
      $p5 = $1586;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1592 = $p5 + 16;
      $p5 = $1592;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1598 = $p5 + 16;
      $p5 = $1598;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1604 = $p5 + 16;
      $p5 = $1604;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1610 = $p5 + 16;
      $p5 = $1610;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1616 = $p5 + 16;
      $p5 = $1616;
      
      
      HEAP[$p5] = 1;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1622 = $p5 + 16;
      $p5 = $1622;
      
      
      HEAP[$p5] = 1;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1628 = $p5 + 16;
      $p5 = $1628;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1634 = $p5 + 16;
      $p5 = $1634;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1640 = $p5 + 16;
      $p5 = $1640;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1646 = $p5 + 16;
      $p5 = $1646;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1652 = $p5 + 16;
      $p5 = $1652;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1658 = $p5 + 16;
      $p5 = $1658;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1664 = $p5 + 16;
      $p5 = $1664;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1670 = $p5 + 16;
      $p5 = $1670;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1676 = $p5 + 16;
      $p5 = $1676;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1682 = $p5 + 16;
      $p5 = $1682;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1688 = $p5 + 16;
      $p5 = $1688;
      
      
      HEAP[$p5] = Infinity;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1694 = $p5 + 16;
      $p5 = $1694;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1700 = $p5 + 16;
      $p5 = $1700;
      
      
      HEAP[$p5] = Infinity;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1706 = $p5 + 16;
      $p5 = $1706;
      
      
      HEAP[$p5] = Infinity;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1712 = $p5 + 16;
      $p5 = $1712;
      
      
      HEAP[$p5] = -9.542631940771103e+33;
      
      
      HEAP[$p5 + 8] = -9.542631940771103e+33;
      
      var $1718 = $p5 + 16;
      $p5 = $1718;
      
      
      HEAP[$p5] = Infinity;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1724 = $p5 + 16;
      $p5 = $1724;
      
      
      HEAP[$p5] = Infinity;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1730 = $p5 + 16;
      $p5 = $1730;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1736 = $p5 + 16;
      $p5 = $1736;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1742 = $p5 + 16;
      $p5 = $1742;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1748 = $p5 + 16;
      $p5 = $1748;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = 0;
      
      var $1754 = $p5 + 16;
      $p5 = $1754;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1760 = $p5 + 16;
      $p5 = $1760;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1766 = $p5 + 16;
      $p5 = $1766;
      
      
      HEAP[$p5] = NaN;
      
      
      HEAP[$p5 + 8] = NaN;
      
      var $1772 = $p5 + 16;
      $p5 = $1772;
      $p6 = _log_special_values;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = -2.356194490192345;
      
      var $1778 = $p6 + 16;
      $p6 = $1778;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = -3.141592653589793;
      
      var $1784 = $p6 + 16;
      $p6 = $1784;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = -3.141592653589793;
      
      var $1790 = $p6 + 16;
      $p6 = $1790;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 3.141592653589793;
      
      var $1796 = $p6 + 16;
      $p6 = $1796;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 3.141592653589793;
      
      var $1802 = $p6 + 16;
      $p6 = $1802;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 2.356194490192345;
      
      var $1808 = $p6 + 16;
      $p6 = $1808;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $1814 = $p6 + 16;
      $p6 = $1814;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = -1.5707963267948966;
      
      var $1820 = $p6 + 16;
      $p6 = $1820;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1826 = $p6 + 16;
      $p6 = $1826;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1832 = $p6 + 16;
      $p6 = $1832;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1838 = $p6 + 16;
      $p6 = $1838;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1844 = $p6 + 16;
      $p6 = $1844;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 1.5707963267948966;
      
      var $1850 = $p6 + 16;
      $p6 = $1850;
      
      
      HEAP[$p6] = NaN;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $1856 = $p6 + 16;
      $p6 = $1856;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = -1.5707963267948966;
      
      var $1862 = $p6 + 16;
      $p6 = $1862;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1868 = $p6 + 16;
      $p6 = $1868;
      
      
      HEAP[$p6] = -Infinity;
      
      
      HEAP[$p6 + 8] = -3.141592653589793;
      
      var $1874 = $p6 + 16;
      $p6 = $1874;
      
      
      HEAP[$p6] = -Infinity;
      
      
      HEAP[$p6 + 8] = 3.141592653589793;
      
      var $1880 = $p6 + 16;
      $p6 = $1880;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1886 = $p6 + 16;
      $p6 = $1886;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 1.5707963267948966;
      
      var $1892 = $p6 + 16;
      $p6 = $1892;
      
      
      HEAP[$p6] = NaN;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $1898 = $p6 + 16;
      $p6 = $1898;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = -1.5707963267948966;
      
      var $1904 = $p6 + 16;
      $p6 = $1904;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1910 = $p6 + 16;
      $p6 = $1910;
      
      
      HEAP[$p6] = -Infinity;
      
      
      HEAP[$p6 + 8] = 0;
      
      var $1916 = $p6 + 16;
      $p6 = $1916;
      
      
      HEAP[$p6] = -Infinity;
      
      
      HEAP[$p6 + 8] = 0;
      
      var $1922 = $p6 + 16;
      $p6 = $1922;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1928 = $p6 + 16;
      $p6 = $1928;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 1.5707963267948966;
      
      var $1934 = $p6 + 16;
      $p6 = $1934;
      
      
      HEAP[$p6] = NaN;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $1940 = $p6 + 16;
      $p6 = $1940;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = -1.5707963267948966;
      
      var $1946 = $p6 + 16;
      $p6 = $1946;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1952 = $p6 + 16;
      $p6 = $1952;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1958 = $p6 + 16;
      $p6 = $1958;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1964 = $p6 + 16;
      $p6 = $1964;
      
      
      HEAP[$p6] = -9.542631940771103e+33;
      
      
      HEAP[$p6 + 8] = -9.542631940771103e+33;
      
      var $1970 = $p6 + 16;
      $p6 = $1970;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 1.5707963267948966;
      
      var $1976 = $p6 + 16;
      $p6 = $1976;
      
      
      HEAP[$p6] = NaN;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $1982 = $p6 + 16;
      $p6 = $1982;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = -.7853981633974483;
      
      var $1988 = $p6 + 16;
      $p6 = $1988;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 0;
      
      var $1994 = $p6 + 16;
      $p6 = $1994;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 0;
      
      var $2000 = $p6 + 16;
      $p6 = $2000;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 0;
      
      var $2006 = $p6 + 16;
      $p6 = $2006;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = 0;
      
      var $2012 = $p6 + 16;
      $p6 = $2012;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = .7853981633974483;
      
      var $2018 = $p6 + 16;
      $p6 = $2018;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $2024 = $p6 + 16;
      $p6 = $2024;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $2030 = $p6 + 16;
      $p6 = $2030;
      
      
      HEAP[$p6] = NaN;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $2036 = $p6 + 16;
      $p6 = $2036;
      
      
      HEAP[$p6] = NaN;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $2042 = $p6 + 16;
      $p6 = $2042;
      
      
      HEAP[$p6] = NaN;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $2048 = $p6 + 16;
      $p6 = $2048;
      
      
      HEAP[$p6] = NaN;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $2054 = $p6 + 16;
      $p6 = $2054;
      
      
      HEAP[$p6] = Infinity;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $2060 = $p6 + 16;
      $p6 = $2060;
      
      
      HEAP[$p6] = NaN;
      
      
      HEAP[$p6 + 8] = NaN;
      
      var $2066 = $p6 + 16;
      $p6 = $2066;
      $p7 = _sinh_special_values;
      
      
      HEAP[$p7] = Infinity;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2072 = $p7 + 16;
      $p7 = $2072;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2078 = $p7 + 16;
      $p7 = $2078;
      
      
      HEAP[$p7] = -Infinity;
      
      
      HEAP[$p7 + 8] = 0;
      
      var $2084 = $p7 + 16;
      $p7 = $2084;
      
      
      HEAP[$p7] = -Infinity;
      
      
      HEAP[$p7 + 8] = 0;
      
      var $2090 = $p7 + 16;
      $p7 = $2090;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2096 = $p7 + 16;
      $p7 = $2096;
      
      
      HEAP[$p7] = Infinity;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2102 = $p7 + 16;
      $p7 = $2102;
      
      
      HEAP[$p7] = Infinity;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2108 = $p7 + 16;
      $p7 = $2108;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2114 = $p7 + 16;
      $p7 = $2114;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2120 = $p7 + 16;
      $p7 = $2120;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2126 = $p7 + 16;
      $p7 = $2126;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2132 = $p7 + 16;
      $p7 = $2132;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2138 = $p7 + 16;
      $p7 = $2138;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2144 = $p7 + 16;
      $p7 = $2144;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2150 = $p7 + 16;
      $p7 = $2150;
      
      
      HEAP[$p7] = 0;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2156 = $p7 + 16;
      $p7 = $2156;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2162 = $p7 + 16;
      $p7 = $2162;
      
      
      HEAP[$p7] = 0;
      
      
      HEAP[$p7 + 8] = 0;
      
      var $2168 = $p7 + 16;
      $p7 = $2168;
      
      
      HEAP[$p7] = 0;
      
      
      HEAP[$p7 + 8] = 0;
      
      var $2174 = $p7 + 16;
      $p7 = $2174;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2180 = $p7 + 16;
      $p7 = $2180;
      
      
      HEAP[$p7] = 0;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2186 = $p7 + 16;
      $p7 = $2186;
      
      
      HEAP[$p7] = 0;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2192 = $p7 + 16;
      $p7 = $2192;
      
      
      HEAP[$p7] = 0;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2198 = $p7 + 16;
      $p7 = $2198;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2204 = $p7 + 16;
      $p7 = $2204;
      
      
      HEAP[$p7] = 0;
      
      
      HEAP[$p7 + 8] = 0;
      
      var $2210 = $p7 + 16;
      $p7 = $2210;
      
      
      HEAP[$p7] = 0;
      
      
      HEAP[$p7 + 8] = 0;
      
      var $2216 = $p7 + 16;
      $p7 = $2216;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2222 = $p7 + 16;
      $p7 = $2222;
      
      
      HEAP[$p7] = 0;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2228 = $p7 + 16;
      $p7 = $2228;
      
      
      HEAP[$p7] = 0;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2234 = $p7 + 16;
      $p7 = $2234;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2240 = $p7 + 16;
      $p7 = $2240;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2246 = $p7 + 16;
      $p7 = $2246;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2252 = $p7 + 16;
      $p7 = $2252;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2258 = $p7 + 16;
      $p7 = $2258;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2264 = $p7 + 16;
      $p7 = $2264;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2270 = $p7 + 16;
      $p7 = $2270;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2276 = $p7 + 16;
      $p7 = $2276;
      
      
      HEAP[$p7] = Infinity;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2282 = $p7 + 16;
      $p7 = $2282;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2288 = $p7 + 16;
      $p7 = $2288;
      
      
      HEAP[$p7] = Infinity;
      
      
      HEAP[$p7 + 8] = 0;
      
      var $2294 = $p7 + 16;
      $p7 = $2294;
      
      
      HEAP[$p7] = Infinity;
      
      
      HEAP[$p7 + 8] = 0;
      
      var $2300 = $p7 + 16;
      $p7 = $2300;
      
      
      HEAP[$p7] = -9.542631940771103e+33;
      
      
      HEAP[$p7 + 8] = -9.542631940771103e+33;
      
      var $2306 = $p7 + 16;
      $p7 = $2306;
      
      
      HEAP[$p7] = Infinity;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2312 = $p7 + 16;
      $p7 = $2312;
      
      
      HEAP[$p7] = Infinity;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2318 = $p7 + 16;
      $p7 = $2318;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2324 = $p7 + 16;
      $p7 = $2324;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2330 = $p7 + 16;
      $p7 = $2330;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = 0;
      
      var $2336 = $p7 + 16;
      $p7 = $2336;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = 0;
      
      var $2342 = $p7 + 16;
      $p7 = $2342;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2348 = $p7 + 16;
      $p7 = $2348;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2354 = $p7 + 16;
      $p7 = $2354;
      
      
      HEAP[$p7] = NaN;
      
      
      HEAP[$p7 + 8] = NaN;
      
      var $2360 = $p7 + 16;
      $p7 = $2360;
      $p8 = _sqrt_special_values;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = -Infinity;
      
      var $2366 = $p8 + 16;
      $p8 = $2366;
      
      
      HEAP[$p8] = 0;
      
      
      HEAP[$p8 + 8] = -Infinity;
      
      var $2372 = $p8 + 16;
      $p8 = $2372;
      
      
      HEAP[$p8] = 0;
      
      
      HEAP[$p8 + 8] = -Infinity;
      
      var $2378 = $p8 + 16;
      $p8 = $2378;
      
      
      HEAP[$p8] = 0;
      
      
      HEAP[$p8 + 8] = Infinity;
      
      var $2384 = $p8 + 16;
      $p8 = $2384;
      
      
      HEAP[$p8] = 0;
      
      
      HEAP[$p8 + 8] = Infinity;
      
      var $2390 = $p8 + 16;
      $p8 = $2390;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = Infinity;
      
      var $2396 = $p8 + 16;
      $p8 = $2396;
      
      
      HEAP[$p8] = NaN;
      
      
      HEAP[$p8 + 8] = Infinity;
      
      var $2402 = $p8 + 16;
      $p8 = $2402;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = -Infinity;
      
      var $2408 = $p8 + 16;
      $p8 = $2408;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2414 = $p8 + 16;
      $p8 = $2414;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2420 = $p8 + 16;
      $p8 = $2420;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2426 = $p8 + 16;
      $p8 = $2426;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2432 = $p8 + 16;
      $p8 = $2432;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = Infinity;
      
      var $2438 = $p8 + 16;
      $p8 = $2438;
      
      
      HEAP[$p8] = NaN;
      
      
      HEAP[$p8 + 8] = NaN;
      
      var $2444 = $p8 + 16;
      $p8 = $2444;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = -Infinity;
      
      var $2450 = $p8 + 16;
      $p8 = $2450;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2456 = $p8 + 16;
      $p8 = $2456;
      
      
      HEAP[$p8] = 0;
      
      
      HEAP[$p8 + 8] = 0;
      
      var $2462 = $p8 + 16;
      $p8 = $2462;
      
      
      HEAP[$p8] = 0;
      
      
      HEAP[$p8 + 8] = 0;
      
      var $2468 = $p8 + 16;
      $p8 = $2468;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2474 = $p8 + 16;
      $p8 = $2474;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = Infinity;
      
      var $2480 = $p8 + 16;
      $p8 = $2480;
      
      
      HEAP[$p8] = NaN;
      
      
      HEAP[$p8 + 8] = NaN;
      
      var $2486 = $p8 + 16;
      $p8 = $2486;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = -Infinity;
      
      var $2492 = $p8 + 16;
      $p8 = $2492;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2498 = $p8 + 16;
      $p8 = $2498;
      
      
      HEAP[$p8] = 0;
      
      
      HEAP[$p8 + 8] = 0;
      
      var $2504 = $p8 + 16;
      $p8 = $2504;
      
      
      HEAP[$p8] = 0;
      
      
      HEAP[$p8 + 8] = 0;
      
      var $2510 = $p8 + 16;
      $p8 = $2510;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2516 = $p8 + 16;
      $p8 = $2516;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = Infinity;
      
      var $2522 = $p8 + 16;
      $p8 = $2522;
      
      
      HEAP[$p8] = NaN;
      
      
      HEAP[$p8 + 8] = NaN;
      
      var $2528 = $p8 + 16;
      $p8 = $2528;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = -Infinity;
      
      var $2534 = $p8 + 16;
      $p8 = $2534;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2540 = $p8 + 16;
      $p8 = $2540;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2546 = $p8 + 16;
      $p8 = $2546;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2552 = $p8 + 16;
      $p8 = $2552;
      
      
      HEAP[$p8] = -9.542631940771103e+33;
      
      
      HEAP[$p8 + 8] = -9.542631940771103e+33;
      
      var $2558 = $p8 + 16;
      $p8 = $2558;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = Infinity;
      
      var $2564 = $p8 + 16;
      $p8 = $2564;
      
      
      HEAP[$p8] = NaN;
      
      
      HEAP[$p8 + 8] = NaN;
      
      var $2570 = $p8 + 16;
      $p8 = $2570;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = -Infinity;
      
      var $2576 = $p8 + 16;
      $p8 = $2576;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = 0;
      
      var $2582 = $p8 + 16;
      $p8 = $2582;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = 0;
      
      var $2588 = $p8 + 16;
      $p8 = $2588;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = 0;
      
      var $2594 = $p8 + 16;
      $p8 = $2594;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = 0;
      
      var $2600 = $p8 + 16;
      $p8 = $2600;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = Infinity;
      
      var $2606 = $p8 + 16;
      $p8 = $2606;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = NaN;
      
      var $2612 = $p8 + 16;
      $p8 = $2612;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = -Infinity;
      
      var $2618 = $p8 + 16;
      $p8 = $2618;
      
      
      HEAP[$p8] = NaN;
      
      
      HEAP[$p8 + 8] = NaN;
      
      var $2624 = $p8 + 16;
      $p8 = $2624;
      
      
      HEAP[$p8] = NaN;
      
      
      HEAP[$p8 + 8] = NaN;
      
      var $2630 = $p8 + 16;
      $p8 = $2630;
      
      
      HEAP[$p8] = NaN;
      
      
      HEAP[$p8 + 8] = NaN;
      
      var $2636 = $p8 + 16;
      $p8 = $2636;
      
      
      HEAP[$p8] = NaN;
      
      
      HEAP[$p8 + 8] = NaN;
      
      var $2642 = $p8 + 16;
      $p8 = $2642;
      
      
      HEAP[$p8] = Infinity;
      
      
      HEAP[$p8 + 8] = Infinity;
      
      var $2648 = $p8 + 16;
      $p8 = $2648;
      
      
      HEAP[$p8] = NaN;
      
      
      HEAP[$p8 + 8] = NaN;
      
      var $2654 = $p8 + 16;
      $p8 = $2654;
      $p9 = _tanh_special_values;
      
      
      HEAP[$p9] = -1;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2660 = $p9 + 16;
      $p9 = $2660;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2666 = $p9 + 16;
      $p9 = $2666;
      
      
      HEAP[$p9] = -1;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2672 = $p9 + 16;
      $p9 = $2672;
      
      
      HEAP[$p9] = -1;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2678 = $p9 + 16;
      $p9 = $2678;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2684 = $p9 + 16;
      $p9 = $2684;
      
      
      HEAP[$p9] = -1;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2690 = $p9 + 16;
      $p9 = $2690;
      
      
      HEAP[$p9] = -1;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2696 = $p9 + 16;
      $p9 = $2696;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2702 = $p9 + 16;
      $p9 = $2702;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2708 = $p9 + 16;
      $p9 = $2708;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2714 = $p9 + 16;
      $p9 = $2714;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2720 = $p9 + 16;
      $p9 = $2720;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2726 = $p9 + 16;
      $p9 = $2726;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2732 = $p9 + 16;
      $p9 = $2732;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2738 = $p9 + 16;
      $p9 = $2738;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2744 = $p9 + 16;
      $p9 = $2744;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2750 = $p9 + 16;
      $p9 = $2750;
      
      
      HEAP[$p9] = 0;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2756 = $p9 + 16;
      $p9 = $2756;
      
      
      HEAP[$p9] = 0;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2762 = $p9 + 16;
      $p9 = $2762;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2768 = $p9 + 16;
      $p9 = $2768;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2774 = $p9 + 16;
      $p9 = $2774;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2780 = $p9 + 16;
      $p9 = $2780;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2786 = $p9 + 16;
      $p9 = $2786;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2792 = $p9 + 16;
      $p9 = $2792;
      
      
      HEAP[$p9] = 0;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2798 = $p9 + 16;
      $p9 = $2798;
      
      
      HEAP[$p9] = 0;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2804 = $p9 + 16;
      $p9 = $2804;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2810 = $p9 + 16;
      $p9 = $2810;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2816 = $p9 + 16;
      $p9 = $2816;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2822 = $p9 + 16;
      $p9 = $2822;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2828 = $p9 + 16;
      $p9 = $2828;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2834 = $p9 + 16;
      $p9 = $2834;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2840 = $p9 + 16;
      $p9 = $2840;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2846 = $p9 + 16;
      $p9 = $2846;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2852 = $p9 + 16;
      $p9 = $2852;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2858 = $p9 + 16;
      $p9 = $2858;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2864 = $p9 + 16;
      $p9 = $2864;
      
      
      HEAP[$p9] = 1;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2870 = $p9 + 16;
      $p9 = $2870;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2876 = $p9 + 16;
      $p9 = $2876;
      
      
      HEAP[$p9] = 1;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2882 = $p9 + 16;
      $p9 = $2882;
      
      
      HEAP[$p9] = 1;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2888 = $p9 + 16;
      $p9 = $2888;
      
      
      HEAP[$p9] = -9.542631940771103e+33;
      
      
      HEAP[$p9 + 8] = -9.542631940771103e+33;
      
      var $2894 = $p9 + 16;
      $p9 = $2894;
      
      
      HEAP[$p9] = 1;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2900 = $p9 + 16;
      $p9 = $2900;
      
      
      HEAP[$p9] = 1;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2906 = $p9 + 16;
      $p9 = $2906;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2912 = $p9 + 16;
      $p9 = $2912;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2918 = $p9 + 16;
      $p9 = $2918;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2924 = $p9 + 16;
      $p9 = $2924;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = 0;
      
      var $2930 = $p9 + 16;
      $p9 = $2930;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2936 = $p9 + 16;
      $p9 = $2936;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2942 = $p9 + 16;
      $p9 = $2942;
      
      
      HEAP[$p9] = NaN;
      
      
      HEAP[$p9 + 8] = NaN;
      
      var $2948 = $p9 + 16;
      $p9 = $2948;
      $p10 = _rect_special_values;
      
      
      HEAP[$p10] = Infinity;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $2954 = $p10 + 16;
      $p10 = $2954;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $2960 = $p10 + 16;
      $p10 = $2960;
      
      
      HEAP[$p10] = -Infinity;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $2966 = $p10 + 16;
      $p10 = $2966;
      
      
      HEAP[$p10] = -Infinity;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $2972 = $p10 + 16;
      $p10 = $2972;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $2978 = $p10 + 16;
      $p10 = $2978;
      
      
      HEAP[$p10] = Infinity;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $2984 = $p10 + 16;
      $p10 = $2984;
      
      
      HEAP[$p10] = Infinity;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $2990 = $p10 + 16;
      $p10 = $2990;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $2996 = $p10 + 16;
      $p10 = $2996;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3002 = $p10 + 16;
      $p10 = $3002;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3008 = $p10 + 16;
      $p10 = $3008;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3014 = $p10 + 16;
      $p10 = $3014;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3020 = $p10 + 16;
      $p10 = $3020;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3026 = $p10 + 16;
      $p10 = $3026;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3032 = $p10 + 16;
      $p10 = $3032;
      
      
      HEAP[$p10] = 0;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3038 = $p10 + 16;
      $p10 = $3038;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3044 = $p10 + 16;
      $p10 = $3044;
      
      
      HEAP[$p10] = 0;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3050 = $p10 + 16;
      $p10 = $3050;
      
      
      HEAP[$p10] = 0;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3056 = $p10 + 16;
      $p10 = $3056;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3062 = $p10 + 16;
      $p10 = $3062;
      
      
      HEAP[$p10] = 0;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3068 = $p10 + 16;
      $p10 = $3068;
      
      
      HEAP[$p10] = 0;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3074 = $p10 + 16;
      $p10 = $3074;
      
      
      HEAP[$p10] = 0;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3080 = $p10 + 16;
      $p10 = $3080;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3086 = $p10 + 16;
      $p10 = $3086;
      
      
      HEAP[$p10] = 0;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3092 = $p10 + 16;
      $p10 = $3092;
      
      
      HEAP[$p10] = 0;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3098 = $p10 + 16;
      $p10 = $3098;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3104 = $p10 + 16;
      $p10 = $3104;
      
      
      HEAP[$p10] = 0;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3110 = $p10 + 16;
      $p10 = $3110;
      
      
      HEAP[$p10] = 0;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3116 = $p10 + 16;
      $p10 = $3116;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3122 = $p10 + 16;
      $p10 = $3122;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3128 = $p10 + 16;
      $p10 = $3128;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3134 = $p10 + 16;
      $p10 = $3134;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3140 = $p10 + 16;
      $p10 = $3140;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3146 = $p10 + 16;
      $p10 = $3146;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3152 = $p10 + 16;
      $p10 = $3152;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3158 = $p10 + 16;
      $p10 = $3158;
      
      
      HEAP[$p10] = Infinity;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3164 = $p10 + 16;
      $p10 = $3164;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3170 = $p10 + 16;
      $p10 = $3170;
      
      
      HEAP[$p10] = Infinity;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3176 = $p10 + 16;
      $p10 = $3176;
      
      
      HEAP[$p10] = Infinity;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3182 = $p10 + 16;
      $p10 = $3182;
      
      
      HEAP[$p10] = -9.542631940771103e+33;
      
      
      HEAP[$p10 + 8] = -9.542631940771103e+33;
      
      var $3188 = $p10 + 16;
      $p10 = $3188;
      
      
      HEAP[$p10] = Infinity;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3194 = $p10 + 16;
      $p10 = $3194;
      
      
      HEAP[$p10] = Infinity;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3200 = $p10 + 16;
      $p10 = $3200;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3206 = $p10 + 16;
      $p10 = $3206;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3212 = $p10 + 16;
      $p10 = $3212;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3218 = $p10 + 16;
      $p10 = $3218;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = 0;
      
      var $3224 = $p10 + 16;
      $p10 = $3224;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3230 = $p10 + 16;
      $p10 = $3230;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3236 = $p10 + 16;
      $p10 = $3236;
      
      
      HEAP[$p10] = NaN;
      
      
      HEAP[$p10 + 8] = NaN;
      
      var $3242 = $p10 + 16;
      $p10 = $3242;
      __label__ = 2;
      break;
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initcmath"] = _initcmath;
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
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _c_acos, 0, _c_acosh, 0, _c_asin, 0, _c_asinh, 0, _c_atan, 0, _c_atanh, 0, _c_cos, 0, _c_cosh, 0, _c_exp, 0, _c_log10, 0, _c_sin, 0, _c_sinh, 0, _c_sqrt, 0, _c_tan, 0, _c_tanh, 0, _cmath_acos, 0, _cmath_acosh, 0, _cmath_asin, 0, _cmath_asinh, 0, _cmath_atan, 0, _cmath_atanh, 0, _cmath_cos, 0, _cmath_cosh, 0, _cmath_exp, 0, _cmath_isinf, 0, _cmath_isnan, 0, _cmath_log, 0, _cmath_log10, 0, _cmath_phase, 0, _cmath_polar, 0, _cmath_rect, 0, _cmath_sin, 0, _cmath_sinh, 0, _cmath_sqrt, 0, _cmath_tan, 0, _cmath_tanh, 0 ]);
  function run(args) {
    _acos_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_acos_doc = allocate([ 97, 99, 111, 115, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _acosh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_acosh_doc = allocate([ 97, 99, 111, 115, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _c_asin_doc = allocate([ 97, 115, 105, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _asinh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_asinh_doc = allocate([ 97, 115, 105, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _c_atan_doc = allocate([ 97, 116, 97, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 114, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _atanh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_atanh_doc = allocate([ 97, 116, 97, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 97, 114, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _c_cos_doc = allocate([ 99, 111, 115, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _cosh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_cosh_doc = allocate([ 99, 111, 115, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 99, 111, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _exp_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_exp_doc = allocate([ 101, 120, 112, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 101, 120, 112, 111, 110, 101, 110, 116, 105, 97, 108, 32, 118, 97, 108, 117, 101, 32, 101, 42, 42, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _log_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_log10_doc = allocate([ 108, 111, 103, 49, 48, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 98, 97, 115, 101, 45, 49, 48, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _c_sin_doc = allocate([ 115, 105, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _sinh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_sinh_doc = allocate([ 115, 105, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 115, 105, 110, 101, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _sqrt_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_sqrt_doc = allocate([ 115, 113, 114, 116, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 113, 117, 97, 114, 101, 32, 114, 111, 111, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _c_tan_doc = allocate([ 116, 97, 110, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    _tanh_special_values = allocate(784, "double", ALLOC_NORMAL);
    _c_tanh_doc = allocate([ 116, 97, 110, 104, 40, 120, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 104, 121, 112, 101, 114, 98, 111, 108, 105, 99, 32, 116, 97, 110, 103, 101, 110, 116, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 68, 124, 68, 0 ], "i8", ALLOC_NORMAL);
    _cmath_log_doc = allocate([ 108, 111, 103, 40, 120, 91, 44, 32, 98, 97, 115, 101, 93, 41, 32, 45, 62, 32, 116, 104, 101, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 111, 102, 32, 120, 32, 116, 111, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 98, 97, 115, 101, 46, 10, 73, 102, 32, 116, 104, 101, 32, 98, 97, 115, 101, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 44, 32, 114, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 110, 97, 116, 117, 114, 97, 108, 32, 108, 111, 103, 97, 114, 105, 116, 104, 109, 32, 40, 98, 97, 115, 101, 32, 101, 41, 32, 111, 102, 32, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 109, 97, 116, 104, 32, 100, 111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 109, 97, 116, 104, 32, 114, 97, 110, 103, 101, 32, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 68, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 68, 58, 112, 104, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    _cmath_phase_doc = allocate([ 112, 104, 97, 115, 101, 40, 122, 41, 32, 45, 62, 32, 102, 108, 111, 97, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 97, 108, 115, 111, 32, 107, 110, 111, 119, 110, 32, 97, 115, 32, 116, 104, 101, 32, 112, 104, 97, 115, 101, 32, 97, 110, 103, 108, 101, 44, 32, 111, 102, 32, 97, 32, 99, 111, 109, 112, 108, 101, 120, 46, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 68, 58, 112, 111, 108, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 100, 100, 0 ], "i8", ALLOC_NORMAL);
    _cmath_polar_doc = allocate([ 112, 111, 108, 97, 114, 40, 122, 41, 32, 45, 62, 32, 114, 58, 32, 102, 108, 111, 97, 116, 44, 32, 112, 104, 105, 58, 32, 102, 108, 111, 97, 116, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 99, 111, 109, 112, 108, 101, 120, 32, 102, 114, 111, 109, 32, 114, 101, 99, 116, 97, 110, 103, 117, 108, 97, 114, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 115, 32, 116, 111, 32, 112, 111, 108, 97, 114, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 115, 46, 32, 114, 32, 105, 115, 10, 116, 104, 101, 32, 100, 105, 115, 116, 97, 110, 99, 101, 32, 102, 114, 111, 109, 32, 48, 32, 97, 110, 100, 32, 112, 104, 105, 32, 116, 104, 101, 32, 112, 104, 97, 115, 101, 32, 97, 110, 103, 108, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 100, 100, 58, 114, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    _rect_special_values = allocate(784, "double", ALLOC_NORMAL);
    _cmath_rect_doc = allocate([ 114, 101, 99, 116, 40, 114, 44, 32, 112, 104, 105, 41, 32, 45, 62, 32, 122, 58, 32, 99, 111, 109, 112, 108, 101, 120, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 102, 114, 111, 109, 32, 112, 111, 108, 97, 114, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 115, 32, 116, 111, 32, 114, 101, 99, 116, 97, 110, 103, 117, 108, 97, 114, 32, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 68, 58, 105, 115, 110, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    _cmath_isnan_doc = allocate([ 105, 115, 110, 97, 110, 40, 122, 41, 32, 45, 62, 32, 98, 111, 111, 108, 10, 67, 104, 101, 99, 107, 115, 32, 105, 102, 32, 116, 104, 101, 32, 114, 101, 97, 108, 32, 111, 114, 32, 105, 109, 97, 103, 105, 110, 97, 114, 121, 32, 112, 97, 114, 116, 32, 111, 102, 32, 122, 32, 110, 111, 116, 32, 97, 32, 110, 117, 109, 98, 101, 114, 32, 40, 78, 97, 78, 41, 0 ], "i8", ALLOC_NORMAL);
    _cmath_isinf_doc = allocate([ 105, 115, 105, 110, 102, 40, 122, 41, 32, 45, 62, 32, 98, 111, 111, 108, 10, 67, 104, 101, 99, 107, 115, 32, 105, 102, 32, 116, 104, 101, 32, 114, 101, 97, 108, 32, 111, 114, 32, 105, 109, 97, 103, 105, 110, 97, 114, 121, 32, 112, 97, 114, 116, 32, 111, 102, 32, 122, 32, 105, 115, 32, 105, 110, 102, 105, 110, 105, 116, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _module_doc = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 105, 115, 32, 97, 108, 119, 97, 121, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 46, 32, 73, 116, 32, 112, 114, 111, 118, 105, 100, 101, 115, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 109, 97, 116, 104, 101, 109, 97, 116, 105, 99, 97, 108, 10, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 102, 111, 114, 32, 99, 111, 109, 112, 108, 101, 120, 32, 110, 117, 109, 98, 101, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 97, 99, 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 97, 99, 111, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 97, 115, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 97, 115, 105, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 97, 116, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 97, 116, 97, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 99, 111, 115, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 99, 111, 115, 104, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 101, 120, 112, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 105, 115, 105, 110, 102, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 105, 115, 110, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 108, 111, 103, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 108, 111, 103, 49, 48, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 112, 104, 97, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 112, 111, 108, 97, 114, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 114, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 115, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 115, 105, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 115, 113, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 116, 97, 110, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 116, 97, 110, 104, 0 ], "i8", ALLOC_NORMAL);
    _cmath_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str30 = allocate([ 99, 109, 97, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 112, 105, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_cmath_methods] = __str9;
    HEAP[_cmath_methods + 4] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_cmath_methods + 12] = _c_acos_doc;
    HEAP[_cmath_methods + 16] = __str10;
    HEAP[_cmath_methods + 20] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_cmath_methods + 28] = _c_acosh_doc;
    HEAP[_cmath_methods + 32] = __str11;
    HEAP[_cmath_methods + 36] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_cmath_methods + 44] = _c_asin_doc;
    HEAP[_cmath_methods + 48] = __str12;
    HEAP[_cmath_methods + 52] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_cmath_methods + 60] = _c_asinh_doc;
    HEAP[_cmath_methods + 64] = __str13;
    HEAP[_cmath_methods + 68] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_cmath_methods + 76] = _c_atan_doc;
    HEAP[_cmath_methods + 80] = __str14;
    HEAP[_cmath_methods + 84] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_cmath_methods + 92] = _c_atanh_doc;
    HEAP[_cmath_methods + 96] = __str15;
    HEAP[_cmath_methods + 100] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_cmath_methods + 108] = _c_cos_doc;
    HEAP[_cmath_methods + 112] = __str16;
    HEAP[_cmath_methods + 116] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_cmath_methods + 124] = _c_cosh_doc;
    HEAP[_cmath_methods + 128] = __str17;
    HEAP[_cmath_methods + 132] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_cmath_methods + 140] = _c_exp_doc;
    HEAP[_cmath_methods + 144] = __str18;
    HEAP[_cmath_methods + 148] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_cmath_methods + 156] = _cmath_isinf_doc;
    HEAP[_cmath_methods + 160] = __str19;
    HEAP[_cmath_methods + 164] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_cmath_methods + 172] = _cmath_isnan_doc;
    HEAP[_cmath_methods + 176] = __str20;
    HEAP[_cmath_methods + 180] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_cmath_methods + 188] = _cmath_log_doc;
    HEAP[_cmath_methods + 192] = __str21;
    HEAP[_cmath_methods + 196] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_cmath_methods + 204] = _c_log10_doc;
    HEAP[_cmath_methods + 208] = __str22;
    HEAP[_cmath_methods + 212] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_cmath_methods + 220] = _cmath_phase_doc;
    HEAP[_cmath_methods + 224] = __str23;
    HEAP[_cmath_methods + 228] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_cmath_methods + 236] = _cmath_polar_doc;
    HEAP[_cmath_methods + 240] = __str24;
    HEAP[_cmath_methods + 244] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_cmath_methods + 252] = _cmath_rect_doc;
    HEAP[_cmath_methods + 256] = __str25;
    HEAP[_cmath_methods + 260] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_cmath_methods + 268] = _c_sin_doc;
    HEAP[_cmath_methods + 272] = __str26;
    HEAP[_cmath_methods + 276] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_cmath_methods + 284] = _c_sinh_doc;
    HEAP[_cmath_methods + 288] = __str27;
    HEAP[_cmath_methods + 292] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_cmath_methods + 300] = _c_sqrt_doc;
    HEAP[_cmath_methods + 304] = __str28;
    HEAP[_cmath_methods + 308] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_cmath_methods + 316] = _c_tan_doc;
    HEAP[_cmath_methods + 320] = __str29;
    HEAP[_cmath_methods + 324] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_cmath_methods + 332] = _c_tanh_doc;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
