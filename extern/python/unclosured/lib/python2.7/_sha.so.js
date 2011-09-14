"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 80;
  var $1___SIZE = 16;
  var $2___SIZE = 100;
  var $3___SIZE = 20;
  var $4___SIZE = 196;
  var $5___SIZE = 32;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_SHAobject___SIZE = 108;
  var $struct_SHAobject___FLATTENER = [ 0, 4, 8, 28, 32, 36, 100, 104 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _SHA_copy__doc__;
  var _SHA_digest__doc__;
  var _SHA_hexdigest__doc__;
  var _SHA_update__doc__;
  var __str;
  var __str1;
  var __str2;
  var __str3;
  var __str4;
  var _SHA_methods;
  var __str5;
  var __str6;
  var __str7;
  var __str8;
  var __str9;
  var _SHA_getseters;
  var __str10;
  var _SHAtype;
  var _SHA_new__doc__;
  var __str11;
  var _kwlist_9310;
  var __str12;
  var __str13;
  var _SHA_functions;
  var __str14;
  var __str15;
  function _longReverse($buffer, $Endianness) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $buffer_addr;
      var $byteCount_addr;
      var $Endianness_addr;
      var $value;
      $buffer_addr = $buffer;
      $byteCount_addr = 64;
      $Endianness_addr = $Endianness;
      
      
      if ($Endianness_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $3 = Math.floor($byteCount_addr / 4);
      $byteCount_addr = $3;
      
      var $5 = $byteCount_addr - 1;
      $byteCount_addr = $5;
      var $6 = $5 != -1;
      if ($6) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      $value = HEAP[$buffer_addr];
      
      var $10 = $value & -16711936;
      
      
      
      
      var $15 = ($value & 16711935) << 8 | $10 >>> 0 >>> 8;
      $value = $15;
      
      
      
      
      
      HEAP[$buffer_addr] = $value >>> 0 >>> 16 | $value << 16;
      
      var $22 = $buffer_addr + 4;
      $buffer_addr = $22;
      
      var $24 = $byteCount_addr - 1;
      $byteCount_addr = $24;
      var $25 = $24 != -1;
      if ($25) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _SHAcopy($src, $dest) {
    
    var $src_addr;
    var $dest_addr;
    $src_addr = $src;
    $dest_addr = $dest;
    
    
    var $2 = HEAP[$src_addr + 100];
    
    
    HEAP[$dest_addr + 100] = $2;
    
    
    var $7 = HEAP[$src_addr + 104];
    
    
    HEAP[$dest_addr + 104] = $7;
    
    
    var $12 = HEAP[$src_addr + 28];
    
    
    HEAP[$dest_addr + 28] = $12;
    
    
    var $17 = HEAP[$src_addr + 32];
    
    
    HEAP[$dest_addr + 32] = $17;
    
    
    
    
    
    
    
    
    _llvm_memcpy_p0i8_p0i8_i32($dest_addr + 8, $src_addr + 8, 20, 1, 0);
    
    
    
    
    
    
    _llvm_memcpy_p0i8_p0i8_i32($dest_addr + 36, $src_addr + 36, 64, 1, 0);
    return;
  }
  function _sha_transform($sha_info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 320;
    _memset(__stackBase__, 0, 320);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr;
      var $i;
      var $T;
      var $A;
      var $B;
      var $C;
      var $D;
      var $E;
      var $W = __stackBase__;
      var $WP;
      $sha_info_addr = $sha_info;
      
      
      
      
      var $W12 = $W;
      _llvm_memcpy_p0i8_p0i8_i32($W12, $sha_info_addr + 36, 64, 1, 0);
      
      
      var $5 = HEAP[$sha_info_addr + 100];
      var $W3 = $W;
      _longReverse($W3, $5);
      $i = 16;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $25 = HEAP[$W + ($i - 8) * 4] ^ HEAP[$W + ($i - 3) * 4] ^ HEAP[$W + ($i - 14) * 4] ^ HEAP[$W + ($i - 16) * 4];
      
      HEAP[$W + $i * 4] = $25;
      
      
      
      
      
      
      var $33 = HEAP[$W + $i * 4] >>> 0 >>> 31 | HEAP[$W + $i * 4] << 1;
      
      HEAP[$W + $i * 4] = $33;
      
      var $36 = $i + 1;
      $i = $36;
      
      if ($36 <= 79) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      
      
      
      $A = HEAP[$sha_info_addr + 8];
      
      
      
      
      $B = HEAP[$sha_info_addr + 8 + 4];
      
      
      
      
      $C = HEAP[$sha_info_addr + 8 + 8];
      
      
      
      
      $D = HEAP[$sha_info_addr + 8 + 12];
      
      
      
      
      $E = HEAP[$sha_info_addr + 8 + 16];
      
      $WP = $W;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $T = ($A >>> 0 >>> 27 | $A << 5) + 1518500249 + $E + (($D ^ $C) & $B ^ $D) + HEAP[$WP];
      
      var $77 = $WP + 4;
      $WP = $77;
      
      
      
      var $81 = $B >>> 0 >>> 2 | $B << 30;
      $B = $81;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $E = ($T >>> 0 >>> 27 | $T << 5) + 1518500249 + $D + (($C ^ $B) & $A ^ $C) + HEAP[$WP];
      
      var $101 = $WP + 4;
      $WP = $101;
      
      
      
      var $105 = $A >>> 0 >>> 2 | $A << 30;
      $A = $105;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $D = ($E >>> 0 >>> 27 | $E << 5) + 1518500249 + $C + (($B ^ $A) & $T ^ $B) + HEAP[$WP];
      
      var $125 = $WP + 4;
      $WP = $125;
      
      
      
      var $129 = $T >>> 0 >>> 2 | $T << 30;
      $T = $129;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $C = ($D >>> 0 >>> 27 | $D << 5) + 1518500249 + $B + (($A ^ $T) & $E ^ $A) + HEAP[$WP];
      
      var $149 = $WP + 4;
      $WP = $149;
      
      
      
      var $153 = $E >>> 0 >>> 2 | $E << 30;
      $E = $153;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $B = ($C >>> 0 >>> 27 | $C << 5) + 1518500249 + $A + (($T ^ $E) & $D ^ $T) + HEAP[$WP];
      
      var $173 = $WP + 4;
      $WP = $173;
      
      
      
      var $177 = $D >>> 0 >>> 2 | $D << 30;
      $D = $177;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $A = ($B >>> 0 >>> 27 | $B << 5) + 1518500249 + $T + (($E ^ $D) & $C ^ $E) + HEAP[$WP];
      
      var $197 = $WP + 4;
      $WP = $197;
      
      
      
      var $201 = $C >>> 0 >>> 2 | $C << 30;
      $C = $201;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $T = ($A >>> 0 >>> 27 | $A << 5) + 1518500249 + $E + (($D ^ $C) & $B ^ $D) + HEAP[$WP];
      
      var $221 = $WP + 4;
      $WP = $221;
      
      
      
      var $225 = $B >>> 0 >>> 2 | $B << 30;
      $B = $225;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $E = ($T >>> 0 >>> 27 | $T << 5) + 1518500249 + $D + (($C ^ $B) & $A ^ $C) + HEAP[$WP];
      
      var $245 = $WP + 4;
      $WP = $245;
      
      
      
      var $249 = $A >>> 0 >>> 2 | $A << 30;
      $A = $249;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $D = ($E >>> 0 >>> 27 | $E << 5) + 1518500249 + $C + (($B ^ $A) & $T ^ $B) + HEAP[$WP];
      
      var $269 = $WP + 4;
      $WP = $269;
      
      
      
      var $273 = $T >>> 0 >>> 2 | $T << 30;
      $T = $273;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $C = ($D >>> 0 >>> 27 | $D << 5) + 1518500249 + $B + (($A ^ $T) & $E ^ $A) + HEAP[$WP];
      
      var $293 = $WP + 4;
      $WP = $293;
      
      
      
      var $297 = $E >>> 0 >>> 2 | $E << 30;
      $E = $297;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $B = ($C >>> 0 >>> 27 | $C << 5) + 1518500249 + $A + (($T ^ $E) & $D ^ $T) + HEAP[$WP];
      
      var $317 = $WP + 4;
      $WP = $317;
      
      
      
      var $321 = $D >>> 0 >>> 2 | $D << 30;
      $D = $321;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $A = ($B >>> 0 >>> 27 | $B << 5) + 1518500249 + $T + (($E ^ $D) & $C ^ $E) + HEAP[$WP];
      
      var $341 = $WP + 4;
      $WP = $341;
      
      
      
      var $345 = $C >>> 0 >>> 2 | $C << 30;
      $C = $345;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $T = ($A >>> 0 >>> 27 | $A << 5) + 1518500249 + $E + (($D ^ $C) & $B ^ $D) + HEAP[$WP];
      
      var $365 = $WP + 4;
      $WP = $365;
      
      
      
      var $369 = $B >>> 0 >>> 2 | $B << 30;
      $B = $369;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $E = ($T >>> 0 >>> 27 | $T << 5) + 1518500249 + $D + (($C ^ $B) & $A ^ $C) + HEAP[$WP];
      
      var $389 = $WP + 4;
      $WP = $389;
      
      
      
      var $393 = $A >>> 0 >>> 2 | $A << 30;
      $A = $393;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $D = ($E >>> 0 >>> 27 | $E << 5) + 1518500249 + $C + (($B ^ $A) & $T ^ $B) + HEAP[$WP];
      
      var $413 = $WP + 4;
      $WP = $413;
      
      
      
      var $417 = $T >>> 0 >>> 2 | $T << 30;
      $T = $417;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $C = ($D >>> 0 >>> 27 | $D << 5) + 1518500249 + $B + (($A ^ $T) & $E ^ $A) + HEAP[$WP];
      
      var $437 = $WP + 4;
      $WP = $437;
      
      
      
      var $441 = $E >>> 0 >>> 2 | $E << 30;
      $E = $441;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $B = ($C >>> 0 >>> 27 | $C << 5) + 1518500249 + $A + (($T ^ $E) & $D ^ $T) + HEAP[$WP];
      
      var $461 = $WP + 4;
      $WP = $461;
      
      
      
      var $465 = $D >>> 0 >>> 2 | $D << 30;
      $D = $465;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $A = ($B >>> 0 >>> 27 | $B << 5) + 1518500249 + $T + (($E ^ $D) & $C ^ $E) + HEAP[$WP];
      
      var $485 = $WP + 4;
      $WP = $485;
      
      
      
      var $489 = $C >>> 0 >>> 2 | $C << 30;
      $C = $489;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $T = ($A >>> 0 >>> 27 | $A << 5) + 1518500249 + $E + (($D ^ $C) & $B ^ $D) + HEAP[$WP];
      
      var $509 = $WP + 4;
      $WP = $509;
      
      
      
      var $513 = $B >>> 0 >>> 2 | $B << 30;
      $B = $513;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $E = ($T >>> 0 >>> 27 | $T << 5) + 1518500249 + $D + (($C ^ $B) & $A ^ $C) + HEAP[$WP];
      
      var $533 = $WP + 4;
      $WP = $533;
      
      
      
      var $537 = $A >>> 0 >>> 2 | $A << 30;
      $A = $537;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $D = ($E >>> 0 >>> 27 | $E << 5) + 1859775393 + $C + ($A ^ $T ^ $B) + HEAP[$WP];
      
      var $555 = $WP + 4;
      $WP = $555;
      
      
      
      var $559 = $T >>> 0 >>> 2 | $T << 30;
      $T = $559;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $C = ($D >>> 0 >>> 27 | $D << 5) + 1859775393 + $B + ($T ^ $E ^ $A) + HEAP[$WP];
      
      var $577 = $WP + 4;
      $WP = $577;
      
      
      
      var $581 = $E >>> 0 >>> 2 | $E << 30;
      $E = $581;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $B = ($C >>> 0 >>> 27 | $C << 5) + 1859775393 + $A + ($E ^ $D ^ $T) + HEAP[$WP];
      
      var $599 = $WP + 4;
      $WP = $599;
      
      
      
      var $603 = $D >>> 0 >>> 2 | $D << 30;
      $D = $603;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $A = ($B >>> 0 >>> 27 | $B << 5) + 1859775393 + $T + ($D ^ $C ^ $E) + HEAP[$WP];
      
      var $621 = $WP + 4;
      $WP = $621;
      
      
      
      var $625 = $C >>> 0 >>> 2 | $C << 30;
      $C = $625;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $T = ($A >>> 0 >>> 27 | $A << 5) + 1859775393 + $E + ($C ^ $B ^ $D) + HEAP[$WP];
      
      var $643 = $WP + 4;
      $WP = $643;
      
      
      
      var $647 = $B >>> 0 >>> 2 | $B << 30;
      $B = $647;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $E = ($T >>> 0 >>> 27 | $T << 5) + 1859775393 + $D + ($B ^ $A ^ $C) + HEAP[$WP];
      
      var $665 = $WP + 4;
      $WP = $665;
      
      
      
      var $669 = $A >>> 0 >>> 2 | $A << 30;
      $A = $669;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $D = ($E >>> 0 >>> 27 | $E << 5) + 1859775393 + $C + ($A ^ $T ^ $B) + HEAP[$WP];
      
      var $687 = $WP + 4;
      $WP = $687;
      
      
      
      var $691 = $T >>> 0 >>> 2 | $T << 30;
      $T = $691;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $C = ($D >>> 0 >>> 27 | $D << 5) + 1859775393 + $B + ($T ^ $E ^ $A) + HEAP[$WP];
      
      var $709 = $WP + 4;
      $WP = $709;
      
      
      
      var $713 = $E >>> 0 >>> 2 | $E << 30;
      $E = $713;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $B = ($C >>> 0 >>> 27 | $C << 5) + 1859775393 + $A + ($E ^ $D ^ $T) + HEAP[$WP];
      
      var $731 = $WP + 4;
      $WP = $731;
      
      
      
      var $735 = $D >>> 0 >>> 2 | $D << 30;
      $D = $735;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $A = ($B >>> 0 >>> 27 | $B << 5) + 1859775393 + $T + ($D ^ $C ^ $E) + HEAP[$WP];
      
      var $753 = $WP + 4;
      $WP = $753;
      
      
      
      var $757 = $C >>> 0 >>> 2 | $C << 30;
      $C = $757;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $T = ($A >>> 0 >>> 27 | $A << 5) + 1859775393 + $E + ($C ^ $B ^ $D) + HEAP[$WP];
      
      var $775 = $WP + 4;
      $WP = $775;
      
      
      
      var $779 = $B >>> 0 >>> 2 | $B << 30;
      $B = $779;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $E = ($T >>> 0 >>> 27 | $T << 5) + 1859775393 + $D + ($B ^ $A ^ $C) + HEAP[$WP];
      
      var $797 = $WP + 4;
      $WP = $797;
      
      
      
      var $801 = $A >>> 0 >>> 2 | $A << 30;
      $A = $801;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $D = ($E >>> 0 >>> 27 | $E << 5) + 1859775393 + $C + ($A ^ $T ^ $B) + HEAP[$WP];
      
      var $819 = $WP + 4;
      $WP = $819;
      
      
      
      var $823 = $T >>> 0 >>> 2 | $T << 30;
      $T = $823;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $C = ($D >>> 0 >>> 27 | $D << 5) + 1859775393 + $B + ($T ^ $E ^ $A) + HEAP[$WP];
      
      var $841 = $WP + 4;
      $WP = $841;
      
      
      
      var $845 = $E >>> 0 >>> 2 | $E << 30;
      $E = $845;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $B = ($C >>> 0 >>> 27 | $C << 5) + 1859775393 + $A + ($E ^ $D ^ $T) + HEAP[$WP];
      
      var $863 = $WP + 4;
      $WP = $863;
      
      
      
      var $867 = $D >>> 0 >>> 2 | $D << 30;
      $D = $867;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $A = ($B >>> 0 >>> 27 | $B << 5) + 1859775393 + $T + ($D ^ $C ^ $E) + HEAP[$WP];
      
      var $885 = $WP + 4;
      $WP = $885;
      
      
      
      var $889 = $C >>> 0 >>> 2 | $C << 30;
      $C = $889;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $T = ($A >>> 0 >>> 27 | $A << 5) + 1859775393 + $E + ($C ^ $B ^ $D) + HEAP[$WP];
      
      var $907 = $WP + 4;
      $WP = $907;
      
      
      
      var $911 = $B >>> 0 >>> 2 | $B << 30;
      $B = $911;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $E = ($T >>> 0 >>> 27 | $T << 5) + 1859775393 + $D + ($B ^ $A ^ $C) + HEAP[$WP];
      
      var $929 = $WP + 4;
      $WP = $929;
      
      
      
      var $933 = $A >>> 0 >>> 2 | $A << 30;
      $A = $933;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $D = ($E >>> 0 >>> 27 | $E << 5) + 1859775393 + $C + ($A ^ $T ^ $B) + HEAP[$WP];
      
      var $951 = $WP + 4;
      $WP = $951;
      
      
      
      var $955 = $T >>> 0 >>> 2 | $T << 30;
      $T = $955;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $C = ($D >>> 0 >>> 27 | $D << 5) + 1859775393 + $B + ($T ^ $E ^ $A) + HEAP[$WP];
      
      var $973 = $WP + 4;
      $WP = $973;
      
      
      
      var $977 = $E >>> 0 >>> 2 | $E << 30;
      $E = $977;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $994 = ($C >>> 0 >>> 27 | $C << 5) + -1894007588;
      
      
      
      $B = $994 + $A + (($E | $D) & $T | $E & $D) + HEAP[$WP];
      
      var $999 = $WP + 4;
      $WP = $999;
      
      
      
      var $1003 = $D >>> 0 >>> 2 | $D << 30;
      $D = $1003;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1020 = ($B >>> 0 >>> 27 | $B << 5) + -1894007588;
      
      
      
      $A = $1020 + $T + (($D | $C) & $E | $D & $C) + HEAP[$WP];
      
      var $1025 = $WP + 4;
      $WP = $1025;
      
      
      
      var $1029 = $C >>> 0 >>> 2 | $C << 30;
      $C = $1029;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1046 = ($A >>> 0 >>> 27 | $A << 5) + -1894007588;
      
      
      
      $T = $1046 + $E + (($C | $B) & $D | $C & $B) + HEAP[$WP];
      
      var $1051 = $WP + 4;
      $WP = $1051;
      
      
      
      var $1055 = $B >>> 0 >>> 2 | $B << 30;
      $B = $1055;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1072 = ($T >>> 0 >>> 27 | $T << 5) + -1894007588;
      
      
      
      $E = $1072 + $D + (($B | $A) & $C | $B & $A) + HEAP[$WP];
      
      var $1077 = $WP + 4;
      $WP = $1077;
      
      
      
      var $1081 = $A >>> 0 >>> 2 | $A << 30;
      $A = $1081;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1098 = ($E >>> 0 >>> 27 | $E << 5) + -1894007588;
      
      
      
      $D = $1098 + $C + (($A | $T) & $B | $A & $T) + HEAP[$WP];
      
      var $1103 = $WP + 4;
      $WP = $1103;
      
      
      
      var $1107 = $T >>> 0 >>> 2 | $T << 30;
      $T = $1107;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1124 = ($D >>> 0 >>> 27 | $D << 5) + -1894007588;
      
      
      
      $C = $1124 + $B + (($T | $E) & $A | $T & $E) + HEAP[$WP];
      
      var $1129 = $WP + 4;
      $WP = $1129;
      
      
      
      var $1133 = $E >>> 0 >>> 2 | $E << 30;
      $E = $1133;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1150 = ($C >>> 0 >>> 27 | $C << 5) + -1894007588;
      
      
      
      $B = $1150 + $A + (($E | $D) & $T | $E & $D) + HEAP[$WP];
      
      var $1155 = $WP + 4;
      $WP = $1155;
      
      
      
      var $1159 = $D >>> 0 >>> 2 | $D << 30;
      $D = $1159;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1176 = ($B >>> 0 >>> 27 | $B << 5) + -1894007588;
      
      
      
      $A = $1176 + $T + (($D | $C) & $E | $D & $C) + HEAP[$WP];
      
      var $1181 = $WP + 4;
      $WP = $1181;
      
      
      
      var $1185 = $C >>> 0 >>> 2 | $C << 30;
      $C = $1185;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1202 = ($A >>> 0 >>> 27 | $A << 5) + -1894007588;
      
      
      
      $T = $1202 + $E + (($C | $B) & $D | $C & $B) + HEAP[$WP];
      
      var $1207 = $WP + 4;
      $WP = $1207;
      
      
      
      var $1211 = $B >>> 0 >>> 2 | $B << 30;
      $B = $1211;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1228 = ($T >>> 0 >>> 27 | $T << 5) + -1894007588;
      
      
      
      $E = $1228 + $D + (($B | $A) & $C | $B & $A) + HEAP[$WP];
      
      var $1233 = $WP + 4;
      $WP = $1233;
      
      
      
      var $1237 = $A >>> 0 >>> 2 | $A << 30;
      $A = $1237;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1254 = ($E >>> 0 >>> 27 | $E << 5) + -1894007588;
      
      
      
      $D = $1254 + $C + (($A | $T) & $B | $A & $T) + HEAP[$WP];
      
      var $1259 = $WP + 4;
      $WP = $1259;
      
      
      
      var $1263 = $T >>> 0 >>> 2 | $T << 30;
      $T = $1263;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1280 = ($D >>> 0 >>> 27 | $D << 5) + -1894007588;
      
      
      
      $C = $1280 + $B + (($T | $E) & $A | $T & $E) + HEAP[$WP];
      
      var $1285 = $WP + 4;
      $WP = $1285;
      
      
      
      var $1289 = $E >>> 0 >>> 2 | $E << 30;
      $E = $1289;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1306 = ($C >>> 0 >>> 27 | $C << 5) + -1894007588;
      
      
      
      $B = $1306 + $A + (($E | $D) & $T | $E & $D) + HEAP[$WP];
      
      var $1311 = $WP + 4;
      $WP = $1311;
      
      
      
      var $1315 = $D >>> 0 >>> 2 | $D << 30;
      $D = $1315;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1332 = ($B >>> 0 >>> 27 | $B << 5) + -1894007588;
      
      
      
      $A = $1332 + $T + (($D | $C) & $E | $D & $C) + HEAP[$WP];
      
      var $1337 = $WP + 4;
      $WP = $1337;
      
      
      
      var $1341 = $C >>> 0 >>> 2 | $C << 30;
      $C = $1341;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1358 = ($A >>> 0 >>> 27 | $A << 5) + -1894007588;
      
      
      
      $T = $1358 + $E + (($C | $B) & $D | $C & $B) + HEAP[$WP];
      
      var $1363 = $WP + 4;
      $WP = $1363;
      
      
      
      var $1367 = $B >>> 0 >>> 2 | $B << 30;
      $B = $1367;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1384 = ($T >>> 0 >>> 27 | $T << 5) + -1894007588;
      
      
      
      $E = $1384 + $D + (($B | $A) & $C | $B & $A) + HEAP[$WP];
      
      var $1389 = $WP + 4;
      $WP = $1389;
      
      
      
      var $1393 = $A >>> 0 >>> 2 | $A << 30;
      $A = $1393;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1410 = ($E >>> 0 >>> 27 | $E << 5) + -1894007588;
      
      
      
      $D = $1410 + $C + (($A | $T) & $B | $A & $T) + HEAP[$WP];
      
      var $1415 = $WP + 4;
      $WP = $1415;
      
      
      
      var $1419 = $T >>> 0 >>> 2 | $T << 30;
      $T = $1419;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1436 = ($D >>> 0 >>> 27 | $D << 5) + -1894007588;
      
      
      
      $C = $1436 + $B + (($T | $E) & $A | $T & $E) + HEAP[$WP];
      
      var $1441 = $WP + 4;
      $WP = $1441;
      
      
      
      var $1445 = $E >>> 0 >>> 2 | $E << 30;
      $E = $1445;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1462 = ($C >>> 0 >>> 27 | $C << 5) + -1894007588;
      
      
      
      $B = $1462 + $A + (($E | $D) & $T | $E & $D) + HEAP[$WP];
      
      var $1467 = $WP + 4;
      $WP = $1467;
      
      
      
      var $1471 = $D >>> 0 >>> 2 | $D << 30;
      $D = $1471;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1488 = ($B >>> 0 >>> 27 | $B << 5) + -1894007588;
      
      
      
      $A = $1488 + $T + (($D | $C) & $E | $D & $C) + HEAP[$WP];
      
      var $1493 = $WP + 4;
      $WP = $1493;
      
      
      
      var $1497 = $C >>> 0 >>> 2 | $C << 30;
      $C = $1497;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1510 = ($A >>> 0 >>> 27 | $A << 5) + -899497514;
      
      
      
      $T = $1510 + $E + ($C ^ $B ^ $D) + HEAP[$WP];
      
      var $1515 = $WP + 4;
      $WP = $1515;
      
      
      
      var $1519 = $B >>> 0 >>> 2 | $B << 30;
      $B = $1519;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1532 = ($T >>> 0 >>> 27 | $T << 5) + -899497514;
      
      
      
      $E = $1532 + $D + ($B ^ $A ^ $C) + HEAP[$WP];
      
      var $1537 = $WP + 4;
      $WP = $1537;
      
      
      
      var $1541 = $A >>> 0 >>> 2 | $A << 30;
      $A = $1541;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1554 = ($E >>> 0 >>> 27 | $E << 5) + -899497514;
      
      
      
      $D = $1554 + $C + ($A ^ $T ^ $B) + HEAP[$WP];
      
      var $1559 = $WP + 4;
      $WP = $1559;
      
      
      
      var $1563 = $T >>> 0 >>> 2 | $T << 30;
      $T = $1563;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1576 = ($D >>> 0 >>> 27 | $D << 5) + -899497514;
      
      
      
      $C = $1576 + $B + ($T ^ $E ^ $A) + HEAP[$WP];
      
      var $1581 = $WP + 4;
      $WP = $1581;
      
      
      
      var $1585 = $E >>> 0 >>> 2 | $E << 30;
      $E = $1585;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1598 = ($C >>> 0 >>> 27 | $C << 5) + -899497514;
      
      
      
      $B = $1598 + $A + ($E ^ $D ^ $T) + HEAP[$WP];
      
      var $1603 = $WP + 4;
      $WP = $1603;
      
      
      
      var $1607 = $D >>> 0 >>> 2 | $D << 30;
      $D = $1607;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1620 = ($B >>> 0 >>> 27 | $B << 5) + -899497514;
      
      
      
      $A = $1620 + $T + ($D ^ $C ^ $E) + HEAP[$WP];
      
      var $1625 = $WP + 4;
      $WP = $1625;
      
      
      
      var $1629 = $C >>> 0 >>> 2 | $C << 30;
      $C = $1629;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1642 = ($A >>> 0 >>> 27 | $A << 5) + -899497514;
      
      
      
      $T = $1642 + $E + ($C ^ $B ^ $D) + HEAP[$WP];
      
      var $1647 = $WP + 4;
      $WP = $1647;
      
      
      
      var $1651 = $B >>> 0 >>> 2 | $B << 30;
      $B = $1651;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1664 = ($T >>> 0 >>> 27 | $T << 5) + -899497514;
      
      
      
      $E = $1664 + $D + ($B ^ $A ^ $C) + HEAP[$WP];
      
      var $1669 = $WP + 4;
      $WP = $1669;
      
      
      
      var $1673 = $A >>> 0 >>> 2 | $A << 30;
      $A = $1673;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1686 = ($E >>> 0 >>> 27 | $E << 5) + -899497514;
      
      
      
      $D = $1686 + $C + ($A ^ $T ^ $B) + HEAP[$WP];
      
      var $1691 = $WP + 4;
      $WP = $1691;
      
      
      
      var $1695 = $T >>> 0 >>> 2 | $T << 30;
      $T = $1695;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1708 = ($D >>> 0 >>> 27 | $D << 5) + -899497514;
      
      
      
      $C = $1708 + $B + ($T ^ $E ^ $A) + HEAP[$WP];
      
      var $1713 = $WP + 4;
      $WP = $1713;
      
      
      
      var $1717 = $E >>> 0 >>> 2 | $E << 30;
      $E = $1717;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1730 = ($C >>> 0 >>> 27 | $C << 5) + -899497514;
      
      
      
      $B = $1730 + $A + ($E ^ $D ^ $T) + HEAP[$WP];
      
      var $1735 = $WP + 4;
      $WP = $1735;
      
      
      
      var $1739 = $D >>> 0 >>> 2 | $D << 30;
      $D = $1739;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1752 = ($B >>> 0 >>> 27 | $B << 5) + -899497514;
      
      
      
      $A = $1752 + $T + ($D ^ $C ^ $E) + HEAP[$WP];
      
      var $1757 = $WP + 4;
      $WP = $1757;
      
      
      
      var $1761 = $C >>> 0 >>> 2 | $C << 30;
      $C = $1761;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1774 = ($A >>> 0 >>> 27 | $A << 5) + -899497514;
      
      
      
      $T = $1774 + $E + ($C ^ $B ^ $D) + HEAP[$WP];
      
      var $1779 = $WP + 4;
      $WP = $1779;
      
      
      
      var $1783 = $B >>> 0 >>> 2 | $B << 30;
      $B = $1783;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1796 = ($T >>> 0 >>> 27 | $T << 5) + -899497514;
      
      
      
      $E = $1796 + $D + ($B ^ $A ^ $C) + HEAP[$WP];
      
      var $1801 = $WP + 4;
      $WP = $1801;
      
      
      
      var $1805 = $A >>> 0 >>> 2 | $A << 30;
      $A = $1805;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1818 = ($E >>> 0 >>> 27 | $E << 5) + -899497514;
      
      
      
      $D = $1818 + $C + ($A ^ $T ^ $B) + HEAP[$WP];
      
      var $1823 = $WP + 4;
      $WP = $1823;
      
      
      
      var $1827 = $T >>> 0 >>> 2 | $T << 30;
      $T = $1827;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1840 = ($D >>> 0 >>> 27 | $D << 5) + -899497514;
      
      
      
      $C = $1840 + $B + ($T ^ $E ^ $A) + HEAP[$WP];
      
      var $1845 = $WP + 4;
      $WP = $1845;
      
      
      
      var $1849 = $E >>> 0 >>> 2 | $E << 30;
      $E = $1849;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1862 = ($C >>> 0 >>> 27 | $C << 5) + -899497514;
      
      
      
      $B = $1862 + $A + ($E ^ $D ^ $T) + HEAP[$WP];
      
      var $1867 = $WP + 4;
      $WP = $1867;
      
      
      
      var $1871 = $D >>> 0 >>> 2 | $D << 30;
      $D = $1871;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1884 = ($B >>> 0 >>> 27 | $B << 5) + -899497514;
      
      
      
      $A = $1884 + $T + ($D ^ $C ^ $E) + HEAP[$WP];
      
      var $1889 = $WP + 4;
      $WP = $1889;
      
      
      
      var $1893 = $C >>> 0 >>> 2 | $C << 30;
      $C = $1893;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1906 = ($A >>> 0 >>> 27 | $A << 5) + -899497514;
      
      
      
      $T = $1906 + $E + ($C ^ $B ^ $D) + HEAP[$WP];
      
      var $1911 = $WP + 4;
      $WP = $1911;
      
      
      
      var $1915 = $B >>> 0 >>> 2 | $B << 30;
      $B = $1915;
      
      
      
      
      
      
      
      
      
      
      
      
      var $1928 = ($T >>> 0 >>> 27 | $T << 5) + -899497514;
      
      
      
      $E = $1928 + $D + ($B ^ $A ^ $C) + HEAP[$WP];
      
      var $1933 = $WP + 4;
      $WP = $1933;
      
      
      
      var $1937 = $A >>> 0 >>> 2 | $A << 30;
      $A = $1937;
      
      
      
      
      
      var $1943 = $E + HEAP[$sha_info_addr + 8];
      
      
      
      HEAP[$sha_info_addr + 8] = $1943;
      
      
      
      
      
      var $1952 = $T + HEAP[$sha_info_addr + 8 + 4];
      
      
      
      HEAP[$sha_info_addr + 8 + 4] = $1952;
      
      
      
      
      
      var $1961 = $A + HEAP[$sha_info_addr + 8 + 8];
      
      
      
      HEAP[$sha_info_addr + 8 + 8] = $1961;
      
      
      
      
      
      var $1970 = $B + HEAP[$sha_info_addr + 8 + 12];
      
      
      
      HEAP[$sha_info_addr + 8 + 12] = $1970;
      
      
      
      
      
      var $1979 = $C + HEAP[$sha_info_addr + 8 + 16];
      
      
      
      HEAP[$sha_info_addr + 8 + 16] = $1979;
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha_init($sha_info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr;
      var $i = __stackBase__;
      $sha_info_addr = $sha_info;
      HEAP[$i] = 1;
      
      
      HEAP[$sha_info_addr + 100] = 0;
      
      
      
      if (HEAP[$i] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$sha_info_addr + 100] = 1;
      __label__ = 2;
      break;
     case 2:
      
      
      
      HEAP[$sha_info_addr + 8] = 1732584193;
      
      
      
      HEAP[$sha_info_addr + 8 + 4] = -271733879;
      
      
      
      HEAP[$sha_info_addr + 8 + 8] = -1732584194;
      
      
      
      HEAP[$sha_info_addr + 8 + 12] = 271733878;
      
      
      
      HEAP[$sha_info_addr + 8 + 16] = -1009589776;
      
      
      HEAP[$sha_info_addr + 28] = 0;
      
      
      HEAP[$sha_info_addr + 32] = 0;
      
      
      HEAP[$sha_info_addr + 104] = 0;
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha_update($sha_info, $buffer, $count) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr;
      var $buffer_addr;
      var $count_addr;
      var $i;
      var $clo;
      $sha_info_addr = $sha_info;
      $buffer_addr = $buffer;
      $count_addr = $count;
      
      
      
      
      
      
      $clo = $count_addr * 8 + HEAP[$sha_info_addr + 28];
      
      
      
      
      
      if (HEAP[$sha_info_addr + 28] > $clo) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $14 = HEAP[$sha_info_addr + 32] + 1;
      
      
      HEAP[$sha_info_addr + 32] = $14;
      __label__ = 2;
      break;
     case 2:
      
      
      
      HEAP[$sha_info_addr + 28] = $clo;
      
      
      
      
      
      var $25 = ($count_addr >>> 29) + HEAP[$sha_info_addr + 32];
      
      
      HEAP[$sha_info_addr + 32] = $25;
      
      
      
      
      if (HEAP[$sha_info_addr + 104] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      
      $i = 64 - HEAP[$sha_info_addr + 104];
      
      
      
      if ($i > $count_addr) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      $i = $count_addr;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      
      var $46 = $sha_info_addr + 36 + HEAP[$sha_info_addr + 104];
      
      
      _llvm_memcpy_p0i8_p0i8_i32($46, $buffer_addr, $i, 1, 0);
      
      
      var $51 = $count_addr - $i;
      $count_addr = $51;
      
      
      var $54 = $buffer_addr + $i;
      $buffer_addr = $54;
      
      
      
      
      var $59 = $i + HEAP[$sha_info_addr + 104];
      
      
      HEAP[$sha_info_addr + 104] = $59;
      
      
      
      
      if (HEAP[$sha_info_addr + 104] == 64) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      _sha_transform($sha_info_addr);
      __label__ = 7;
      break;
     case 7:
      
      
      
      
      var $71 = $sha_info_addr + 36;
      var $72 = $buffer_addr;
      if ($count_addr > 63) {
        __lastLabel__ = 7;
        __label__ = 8;
        break;
      } else {
        __lastLabel__ = 7;
        __label__ = 9;
        break;
      }
     case 8:
      var $73 = __lastLabel__ == 8 ? $85 : $72;
      var $74 = __lastLabel__ == 8 ? $84 : $71;
      _llvm_memcpy_p0i8_p0i8_i32($74, $73, 64, 1, 0);
      
      var $76 = $buffer_addr + 64;
      $buffer_addr = $76;
      
      var $78 = $count_addr - 64;
      $count_addr = $78;
      
      _sha_transform($sha_info_addr);
      
      
      
      
      var $84 = $sha_info_addr + 36;
      var $85 = $buffer_addr;
      if ($count_addr > 63) {
        __lastLabel__ = 8;
        __label__ = 8;
        break;
      } else {
        __lastLabel__ = 8;
        __label__ = 9;
        break;
      }
     case 9:
      var $_lcssa1 = __lastLabel__ == 7 ? $72 : $85;
      var $_lcssa = __lastLabel__ == 7 ? $71 : $84;
      
      _llvm_memcpy_p0i8_p0i8_i32($_lcssa, $_lcssa1, $count_addr, 1, 0);
      
      
      
      HEAP[$sha_info_addr + 104] = $count_addr;
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha_final($digest, $sha_info) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $digest_addr;
      var $sha_info_addr;
      var $count;
      var $lo_bit_count;
      var $hi_bit_count;
      $digest_addr = $digest;
      $sha_info_addr = $sha_info;
      
      
      
      $lo_bit_count = HEAP[$sha_info_addr + 28];
      
      
      
      $hi_bit_count = HEAP[$sha_info_addr + 32];
      
      
      
      $count = $lo_bit_count >>> 3 & 63;
      
      
      
      
      
      HEAP[$sha_info_addr + 36 + $count] = -128;
      
      var $15 = $count + 1;
      $count = $15;
      
      
      var $18 = $count;
      if ($count > 56) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      _llvm_memset_p0i8_i32($sha_info_addr + 36 + $count, 0, 64 - $18, 1, 0);
      
      _sha_transform($sha_info_addr);
      
      
      
      _llvm_memset_p0i8_i32($sha_info_addr + 36, 0, 56, 1, 0);
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      
      _llvm_memset_p0i8_i32($sha_info_addr + 36 + $count, 0, 56 - $18, 1, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      HEAP[$sha_info_addr + 36 + 56] = $hi_bit_count >>> 24 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 36 + 57] = $hi_bit_count >>> 16 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 36 + 58] = $hi_bit_count >>> 8 & 255;
      
      
      
      
      
      HEAP[$sha_info_addr + 36 + 59] = $hi_bit_count & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 36 + 60] = $lo_bit_count >>> 24 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 36 + 61] = $lo_bit_count >>> 16 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 36 + 62] = $lo_bit_count >>> 8 & 255;
      
      
      
      
      
      HEAP[$sha_info_addr + 36 + 63] = $lo_bit_count & 255;
      
      _sha_transform($sha_info_addr);
      
      
      
      
      
      var $87 = HEAP[$sha_info_addr + 8] >>> 0 >>> 24 & 255;
      
      
      HEAP[$digest_addr] = $87;
      
      
      
      
      
      var $95 = HEAP[$sha_info_addr + 8] >>> 0 >>> 16 & 255;
      
      
      HEAP[$digest_addr + 1] = $95;
      
      
      
      
      
      var $103 = HEAP[$sha_info_addr + 8] >>> 0 >>> 8 & 255;
      
      
      HEAP[$digest_addr + 2] = $103;
      
      
      
      
      var $110 = HEAP[$sha_info_addr + 8] & 255;
      
      
      HEAP[$digest_addr + 3] = $110;
      
      
      
      
      
      var $118 = HEAP[$sha_info_addr + 8 + 4] >>> 0 >>> 24 & 255;
      
      
      HEAP[$digest_addr + 4] = $118;
      
      
      
      
      
      var $126 = HEAP[$sha_info_addr + 8 + 4] >>> 0 >>> 16 & 255;
      
      
      HEAP[$digest_addr + 5] = $126;
      
      
      
      
      
      var $134 = HEAP[$sha_info_addr + 8 + 4] >>> 0 >>> 8 & 255;
      
      
      HEAP[$digest_addr + 6] = $134;
      
      
      
      
      var $141 = HEAP[$sha_info_addr + 8 + 4] & 255;
      
      
      HEAP[$digest_addr + 7] = $141;
      
      
      
      
      
      var $149 = HEAP[$sha_info_addr + 8 + 8] >>> 0 >>> 24 & 255;
      
      
      HEAP[$digest_addr + 8] = $149;
      
      
      
      
      
      var $157 = HEAP[$sha_info_addr + 8 + 8] >>> 0 >>> 16 & 255;
      
      
      HEAP[$digest_addr + 9] = $157;
      
      
      
      
      
      var $165 = HEAP[$sha_info_addr + 8 + 8] >>> 0 >>> 8 & 255;
      
      
      HEAP[$digest_addr + 10] = $165;
      
      
      
      
      var $172 = HEAP[$sha_info_addr + 8 + 8] & 255;
      
      
      HEAP[$digest_addr + 11] = $172;
      
      
      
      
      
      var $180 = HEAP[$sha_info_addr + 8 + 12] >>> 0 >>> 24 & 255;
      
      
      HEAP[$digest_addr + 12] = $180;
      
      
      
      
      
      var $188 = HEAP[$sha_info_addr + 8 + 12] >>> 0 >>> 16 & 255;
      
      
      HEAP[$digest_addr + 13] = $188;
      
      
      
      
      
      var $196 = HEAP[$sha_info_addr + 8 + 12] >>> 0 >>> 8 & 255;
      
      
      HEAP[$digest_addr + 14] = $196;
      
      
      
      
      var $203 = HEAP[$sha_info_addr + 8 + 12] & 255;
      
      
      HEAP[$digest_addr + 15] = $203;
      
      
      
      
      
      var $211 = HEAP[$sha_info_addr + 8 + 16] >>> 0 >>> 24 & 255;
      
      
      HEAP[$digest_addr + 16] = $211;
      
      
      
      
      
      var $219 = HEAP[$sha_info_addr + 8 + 16] >>> 0 >>> 16 & 255;
      
      
      HEAP[$digest_addr + 17] = $219;
      
      
      
      
      
      var $227 = HEAP[$sha_info_addr + 8 + 16] >>> 0 >>> 8 & 255;
      
      
      HEAP[$digest_addr + 18] = $227;
      
      
      
      
      var $234 = HEAP[$sha_info_addr + 8 + 16] & 255;
      
      
      HEAP[$digest_addr + 19] = $234;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _newSHAobject() {
    
    var $retval;
    var $0;
    var $1 = __PyObject_New(_SHAtype);
    
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _SHA_dealloc($ptr) {
    
    var $ptr_addr;
    $ptr_addr = $ptr;
    
    
    _PyObject_Free($ptr_addr);
    return;
  }
  function _SHA_copy($self, $unused) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $newobj;
      $self_addr = $self;
      $unused_addr = $unused;
      var $1 = _newSHAobject();
      $newobj = $1;
      
      
      if ($newobj == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      
      _SHAcopy($self_addr, $newobj);
      
      
      $0 = $newobj;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _SHA_digest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 128;
    _memset(__stackBase__, 0, 128);
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    var $digest = __stackBase__;
    var $temp = __stackBase__ + 20;
    $self_addr = $self;
    $unused_addr = $unused;
    
    _SHAcopy($self_addr, $temp);
    var $digest1 = $digest;
    _sha_final($digest1, $temp);
    var $digest2 = $digest;
    var $2 = _PyString_FromStringAndSize($digest2, 20);
    $0 = $2;
    
    $retval = $0;
    var $retval4 = $retval;
    STACKTOP = __stackBase__;
    return $retval4;
  }
  function _SHA_hexdigest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 128;
    _memset(__stackBase__, 0, 128);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $iftmp_12;
      var $iftmp_8;
      var $0;
      var $digest = __stackBase__;
      var $temp = __stackBase__ + 20;
      var $retval1;
      var $hex_digest;
      var $i;
      var $j;
      var $c;
      $self_addr = $self;
      $unused_addr = $unused;
      
      _SHAcopy($self_addr, $temp);
      var $digest2 = $digest;
      _sha_final($digest2, $temp);
      var $2 = _PyString_FromStringAndSize(0, 40);
      $retval1 = $2;
      
      
      if ($retval1 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 15;
      break;
     case 2:
      
      var $6 = _PyString_AsString($retval1);
      $hex_digest = $6;
      
      
      if ($hex_digest == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $12 = HEAP[$retval1] - 1;
      
      
      HEAP[$retval1] = $12;
      
      
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $23 = HEAP[HEAP[$retval1 + 4] + 24];
      
      FUNCTION_TABLE[$23]($retval1);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 15;
      break;
     case 6:
      $j = 0;
      
      $i = $j;
      
      if ($j <= 19) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 7:
      
      
      
      
      
      $c = HEAP[$digest + $i] >>> 4 & 15;
      
      var $33 = $c;
      if ((HEAP[$digest + $i] >>> 4 & 15) > 9) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $iftmp_8 = $33 + 87;
      __label__ = 10;
      break;
     case 9:
      
      $iftmp_8 = $33 + 48;
      __label__ = 10;
      break;
     case 10:
      
      $c = $iftmp_8;
      
      
      
      
      HEAP[$hex_digest + $j] = $c;
      
      var $42 = $j + 1;
      $j = $42;
      
      
      
      
      $c = HEAP[$digest + $i] & 15;
      
      var $48 = $c;
      if ((HEAP[$digest + $i] & 15) > 9) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      $iftmp_12 = $48 + 87;
      __label__ = 13;
      break;
     case 12:
      
      $iftmp_12 = $48 + 48;
      __label__ = 13;
      break;
     case 13:
      
      $c = $iftmp_12;
      
      
      
      
      HEAP[$hex_digest + $j] = $c;
      
      var $57 = $j + 1;
      $j = $57;
      
      var $59 = $i + 1;
      $i = $59;
      
      if ($59 <= 19) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      $0 = $retval1;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval18 = $retval;
      STACKTOP = __stackBase__;
      return $retval18;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _SHA_update($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $view = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str, allocate([ $view, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      
      var $5 = HEAP[$view + 8];
      
      var $7 = HEAP[$view];
      
      _sha_update($self_addr, $7, $5);
      _PyBuffer_Release($view);
      
      var $10 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $10;
      $0 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval3 = $retval;
      STACKTOP = __stackBase__;
      return $retval3;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _SHA_get_block_size($self, $closure) {
    
    var $self_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $closure_addr = $closure;
    var $1 = _PyInt_FromLong(64);
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _SHA_get_digest_size($self, $closure) {
    
    var $self_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $closure_addr = $closure;
    var $1 = _PyInt_FromLong(20);
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _SHA_get_name($self, $closure) {
    
    var $self_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $closure_addr = $closure;
    var $1 = _PyString_FromStringAndSize(__str5, 4);
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _SHA_new($self, $args, $kwdict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 52;
    _memset(__stackBase__, 0, 52);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwdict_addr;
      var $retval;
      var $0;
      var $new;
      var $view = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      $kwdict_addr = $kwdict;
      var $view1 = $view;
      _llvm_memset_p0i8_i32($view1, 0, 52, 4, 0);
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwdict_addr, __str11, _kwlist_9310, allocate([ $view, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 11;
      break;
     case 2:
      var $5 = _newSHAobject();
      $new = $5;
      
      
      if ($new == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($view);
      $0 = 0;
      __label__ = 11;
      break;
     case 4:
      
      _sha_init($new);
      var $9 = _PyErr_Occurred();
      
      if ($9 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      
      
      
      
      var $15 = HEAP[$new] - 1;
      
      HEAP[$new] = $15;
      
      
      
      if (HEAP[$new] == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      
      
      
      
      var $25 = HEAP[HEAP[$new + 4] + 24];
      
      
      FUNCTION_TABLE[$25]($new);
      __label__ = 7;
      break;
     case 7:
      _PyBuffer_Release($view);
      $0 = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      if (HEAP[$view + 8] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $32 = HEAP[$view + 8];
      
      var $34 = HEAP[$view];
      
      _sha_update($new, $34, $32);
      __label__ = 10;
      break;
     case 10:
      _PyBuffer_Release($view);
      
      
      $0 = $new;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _init_sha() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      HEAP[_SHAtype + 4] = _PyType_Type;
      var $0 = _PyType_Ready(_SHAtype);
      
      if ($0 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      var $2 = _Py_InitModule4(__str14, _SHA_functions, 0, 0, 1013);
      $m = $2;
      
      
      if ($m == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      
      var $6 = _PyModule_AddIntConstant($m, __str15, 1);
      
      var $8 = _PyModule_AddIntConstant($m, __str9, 20);
      
      var $10 = _PyModule_AddIntConstant($m, __str6, 20);
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_sha"] = _init_sha;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _SHA_copy, 0, _SHA_digest, 0, _SHA_hexdigest, 0, _SHA_update, 0, _SHA_get_digest_size, 0, _SHA_get_block_size, 0, _SHA_get_name, 0, _SHA_dealloc, 0, _SHA_new, 0 ]);
  function run(args) {
    _SHA_copy__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 104, 97, 115, 104, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA_digest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA_hexdigest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 100, 105, 103, 105, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA_update__doc__ = allocate([ 85, 112, 100, 97, 116, 101, 32, 116, 104, 105, 115, 32, 104, 97, 115, 104, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 115, 116, 97, 116, 101, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 42, 58, 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 104, 101, 120, 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str5 = allocate([ 83, 72, 65, 49, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 100, 105, 103, 101, 115, 116, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 98, 108, 111, 99, 107, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 100, 105, 103, 101, 115, 116, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_getseters = allocate(100, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str10 = allocate([ 95, 115, 104, 97, 46, 115, 104, 97, 0 ], "i8", ALLOC_NORMAL);
    _SHAtype = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _SHA_new__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 83, 72, 65, 32, 104, 97, 115, 104, 105, 110, 103, 32, 111, 98, 106, 101, 99, 116, 46, 32, 32, 65, 110, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 115, 116, 114, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 10, 109, 97, 121, 32, 98, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 59, 32, 105, 102, 32, 112, 114, 101, 115, 101, 110, 116, 44, 32, 116, 104, 105, 115, 32, 115, 116, 114, 105, 110, 103, 32, 119, 105, 108, 108, 32, 98, 101, 32, 97, 117, 116, 111, 109, 97, 116, 105, 99, 97, 108, 108, 121, 10, 104, 97, 115, 104, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 124, 115, 42, 58, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9310 = allocate(8, "i8*", ALLOC_NORMAL);
    __str12 = allocate([ 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    _SHA_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str14 = allocate([ 95, 115, 104, 97, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 98, 108, 111, 99, 107, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_SHA_methods] = __str1;
    HEAP[_SHA_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_SHA_methods + 12] = _SHA_copy__doc__;
    HEAP[_SHA_methods + 16] = __str2;
    HEAP[_SHA_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_SHA_methods + 28] = _SHA_digest__doc__;
    HEAP[_SHA_methods + 32] = __str3;
    HEAP[_SHA_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_SHA_methods + 44] = _SHA_hexdigest__doc__;
    HEAP[_SHA_methods + 48] = __str4;
    HEAP[_SHA_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_SHA_methods + 60] = _SHA_update__doc__;
    HEAP[_SHA_getseters] = __str6;
    HEAP[_SHA_getseters + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_SHA_getseters + 20] = __str7;
    HEAP[_SHA_getseters + 24] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_SHA_getseters + 40] = __str8;
    HEAP[_SHA_getseters + 44] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_SHA_getseters + 60] = __str9;
    HEAP[_SHA_getseters + 64] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_SHAtype + 12] = __str10;
    HEAP[_SHAtype + 24] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_SHAtype + 116] = _SHA_methods;
    HEAP[_SHAtype + 124] = _SHA_getseters;
    HEAP[_kwlist_9310] = __str12;
    HEAP[_SHA_functions] = __str13;
    HEAP[_SHA_functions + 4] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_SHA_functions + 12] = _SHA_new__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
