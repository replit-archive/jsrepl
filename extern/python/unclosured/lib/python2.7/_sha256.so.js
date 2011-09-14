"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 80;
  var $1___SIZE = 16;
  var $2___SIZE = 60;
  var $3___SIZE = 20;
  var $4___SIZE = 60;
  var $5___SIZE = 196;
  var $6___SIZE = 48;
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
  var $struct_SHAobject___SIZE = 124;
  var $struct_SHAobject___FLATTENER = [ 0, 4, 8, 40, 44, 48, 112, 116, 120 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _SHA256_copy__doc__;
  var _SHA256_digest__doc__;
  var _SHA256_hexdigest__doc__;
  var _SHA256_update__doc__;
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
  var _SHA_getseters;
  var __str9;
  var __str10;
  var _SHA_members;
  var __str11;
  var _SHA224type;
  var __str12;
  var _SHA256type;
  var _SHA256_new__doc__;
  var __str13;
  var _kwlist_11325;
  var __str14;
  var _SHA224_new__doc__;
  var _kwlist_11361;
  var __str15;
  var __str16;
  var _SHA_functions;
  var __str17;
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
    
    
    var $2 = HEAP[$src_addr + 112];
    
    
    HEAP[$dest_addr + 112] = $2;
    
    
    var $7 = HEAP[$src_addr + 116];
    
    
    HEAP[$dest_addr + 116] = $7;
    
    
    var $12 = HEAP[$src_addr + 120];
    
    
    HEAP[$dest_addr + 120] = $12;
    
    
    var $17 = HEAP[$src_addr + 40];
    
    
    HEAP[$dest_addr + 40] = $17;
    
    
    var $22 = HEAP[$src_addr + 44];
    
    
    HEAP[$dest_addr + 44] = $22;
    
    
    
    
    
    
    
    
    _llvm_memcpy_p0i8_p0i8_i32($dest_addr + 8, $src_addr + 8, 32, 1, 0);
    
    
    
    
    
    
    _llvm_memcpy_p0i8_p0i8_i32($dest_addr + 48, $src_addr + 48, 64, 1, 0);
    return;
  }
  function _sha_transform($sha_info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 288;
    _memset(__stackBase__, 0, 288);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr;
      var $i;
      var $S = __stackBase__;
      var $W = __stackBase__ + 32;
      var $t0;
      var $t1;
      $sha_info_addr = $sha_info;
      
      
      
      
      var $W12 = $W;
      _llvm_memcpy_p0i8_p0i8_i32($W12, $sha_info_addr + 48, 64, 1, 0);
      
      
      var $5 = HEAP[$sha_info_addr + 112];
      var $W3 = $W;
      _longReverse($W3, $5);
      $i = 16;
      __label__ = 1;
      break;
     case 1:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $59 = ((HEAP[$W + ($i - 2) * 4] >>> 0 >>> 19 | HEAP[$W + ($i - 2) * 4] << 13) ^ (HEAP[$W + ($i - 2) * 4] >>> 0 >>> 17 | HEAP[$W + ($i - 2) * 4] << 15) ^ HEAP[$W + ($i - 2) * 4] >>> 0 >>> 10) + HEAP[$W + ($i - 7) * 4] + HEAP[$W + ($i - 16) * 4] + ((HEAP[$W + ($i - 15) * 4] >>> 0 >>> 18 | HEAP[$W + ($i - 15) * 4] << 14) ^ (HEAP[$W + ($i - 15) * 4] >>> 0 >>> 7 | HEAP[$W + ($i - 15) * 4] << 25) ^ HEAP[$W + ($i - 15) * 4] >>> 0 >>> 3);
      
      HEAP[$W + $i * 4] = $59;
      
      var $62 = $i + 1;
      $i = $62;
      
      if ($62 <= 63) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      $i = 0;
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      var $69 = HEAP[$sha_info_addr + 8 + $i * 4];
      
      HEAP[$S + $i * 4] = $69;
      
      var $72 = $i + 1;
      $i = $72;
      
      if ($72 <= 7) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 28] + 1116352408 + ((HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + HEAP[$W] + ((HEAP[$S + 24] ^ HEAP[$S + 20]) & HEAP[$S + 16] ^ HEAP[$S + 24]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 4] & HEAP[$S] | (HEAP[$S + 4] | HEAP[$S]) & HEAP[$S + 8]) + ((HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10));
      
      
      
      var $145 = $t0 + HEAP[$S + 12];
      
      HEAP[$S + 12] = $145;
      
      
      
      
      HEAP[$S + 28] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 24] + 1899447441 + ((HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + HEAP[$W + 4] + ((HEAP[$S + 20] ^ HEAP[$S + 16]) & HEAP[$S + 12] ^ HEAP[$S + 20]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S] & HEAP[$S + 28] | (HEAP[$S] | HEAP[$S + 28]) & HEAP[$S + 4]) + ((HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10));
      
      
      
      var $222 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $222;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $260 = HEAP[$S + 20] + -1245643825;
      
      
      
      $t0 = $260 + ((HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + HEAP[$W + 8] + ((HEAP[$S + 16] ^ HEAP[$S + 12]) & HEAP[$S + 8] ^ HEAP[$S + 16]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 28] & HEAP[$S + 24] | (HEAP[$S + 28] | HEAP[$S + 24]) & HEAP[$S]) + ((HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10));
      
      
      
      var $299 = $t0 + HEAP[$S + 4];
      
      HEAP[$S + 4] = $299;
      
      
      
      
      HEAP[$S + 20] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $337 = HEAP[$S + 16] + -373957723;
      
      
      
      $t0 = $337 + ((HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + HEAP[$W + 12] + ((HEAP[$S + 12] ^ HEAP[$S + 8]) & HEAP[$S + 4] ^ HEAP[$S + 12]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 24] & HEAP[$S + 20] | (HEAP[$S + 24] | HEAP[$S + 20]) & HEAP[$S + 28]) + ((HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10));
      
      
      
      var $376 = $t0 + HEAP[$S];
      
      HEAP[$S] = $376;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 12] + 961987163 + ((HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + HEAP[$W + 16] + ((HEAP[$S + 8] ^ HEAP[$S + 4]) & HEAP[$S] ^ HEAP[$S + 8]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 20] & HEAP[$S + 16] | (HEAP[$S + 20] | HEAP[$S + 16]) & HEAP[$S + 24]) + ((HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10));
      
      
      
      var $453 = $t0 + HEAP[$S + 28];
      
      HEAP[$S + 28] = $453;
      
      
      
      
      HEAP[$S + 12] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 8] + 1508970993 + ((HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + HEAP[$W + 20] + ((HEAP[$S + 4] ^ HEAP[$S]) & HEAP[$S + 28] ^ HEAP[$S + 4]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 16] & HEAP[$S + 12] | (HEAP[$S + 16] | HEAP[$S + 12]) & HEAP[$S + 20]) + ((HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10));
      
      
      
      var $530 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $530;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $568 = HEAP[$S + 4] + -1841331548;
      
      
      
      $t0 = $568 + ((HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + HEAP[$W + 24] + ((HEAP[$S] ^ HEAP[$S + 28]) & HEAP[$S + 24] ^ HEAP[$S]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 12] & HEAP[$S + 8] | (HEAP[$S + 12] | HEAP[$S + 8]) & HEAP[$S + 16]) + ((HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10));
      
      
      
      var $607 = $t0 + HEAP[$S + 20];
      
      HEAP[$S + 20] = $607;
      
      
      
      
      HEAP[$S + 4] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $645 = HEAP[$S] + -1424204075;
      
      
      
      $t0 = $645 + ((HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + HEAP[$W + 28] + ((HEAP[$S + 28] ^ HEAP[$S + 24]) & HEAP[$S + 20] ^ HEAP[$S + 28]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 8] & HEAP[$S + 4] | (HEAP[$S + 8] | HEAP[$S + 4]) & HEAP[$S + 12]) + ((HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10));
      
      
      
      var $684 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $684;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $722 = HEAP[$S + 28] + -670586216;
      
      
      
      $t0 = $722 + ((HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + HEAP[$W + 32] + ((HEAP[$S + 24] ^ HEAP[$S + 20]) & HEAP[$S + 16] ^ HEAP[$S + 24]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 4] & HEAP[$S] | (HEAP[$S + 4] | HEAP[$S]) & HEAP[$S + 8]) + ((HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10));
      
      
      
      var $761 = $t0 + HEAP[$S + 12];
      
      HEAP[$S + 12] = $761;
      
      
      
      
      HEAP[$S + 28] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 24] + 310598401 + ((HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + HEAP[$W + 36] + ((HEAP[$S + 20] ^ HEAP[$S + 16]) & HEAP[$S + 12] ^ HEAP[$S + 20]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S] & HEAP[$S + 28] | (HEAP[$S] | HEAP[$S + 28]) & HEAP[$S + 4]) + ((HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10));
      
      
      
      var $838 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $838;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 20] + 607225278 + ((HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + HEAP[$W + 40] + ((HEAP[$S + 16] ^ HEAP[$S + 12]) & HEAP[$S + 8] ^ HEAP[$S + 16]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 28] & HEAP[$S + 24] | (HEAP[$S + 28] | HEAP[$S + 24]) & HEAP[$S]) + ((HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10));
      
      
      
      var $915 = $t0 + HEAP[$S + 4];
      
      HEAP[$S + 4] = $915;
      
      
      
      
      HEAP[$S + 20] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 16] + 1426881987 + ((HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + HEAP[$W + 44] + ((HEAP[$S + 12] ^ HEAP[$S + 8]) & HEAP[$S + 4] ^ HEAP[$S + 12]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 24] & HEAP[$S + 20] | (HEAP[$S + 24] | HEAP[$S + 20]) & HEAP[$S + 28]) + ((HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10));
      
      
      
      var $992 = $t0 + HEAP[$S];
      
      HEAP[$S] = $992;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 12] + 1925078388 + ((HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + HEAP[$W + 48] + ((HEAP[$S + 8] ^ HEAP[$S + 4]) & HEAP[$S] ^ HEAP[$S + 8]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 20] & HEAP[$S + 16] | (HEAP[$S + 20] | HEAP[$S + 16]) & HEAP[$S + 24]) + ((HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10));
      
      
      
      var $1069 = $t0 + HEAP[$S + 28];
      
      HEAP[$S + 28] = $1069;
      
      
      
      
      HEAP[$S + 12] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1107 = HEAP[$S + 8] + -2132889090;
      
      
      
      $t0 = $1107 + ((HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + HEAP[$W + 52] + ((HEAP[$S + 4] ^ HEAP[$S]) & HEAP[$S + 28] ^ HEAP[$S + 4]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 16] & HEAP[$S + 12] | (HEAP[$S + 16] | HEAP[$S + 12]) & HEAP[$S + 20]) + ((HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10));
      
      
      
      var $1146 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $1146;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1184 = HEAP[$S + 4] + -1680079193;
      
      
      
      $t0 = $1184 + ((HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + HEAP[$W + 56] + ((HEAP[$S] ^ HEAP[$S + 28]) & HEAP[$S + 24] ^ HEAP[$S]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 12] & HEAP[$S + 8] | (HEAP[$S + 12] | HEAP[$S + 8]) & HEAP[$S + 16]) + ((HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10));
      
      
      
      var $1223 = $t0 + HEAP[$S + 20];
      
      HEAP[$S + 20] = $1223;
      
      
      
      
      HEAP[$S + 4] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1261 = HEAP[$S] + -1046744716;
      
      
      
      $t0 = $1261 + ((HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + HEAP[$W + 60] + ((HEAP[$S + 28] ^ HEAP[$S + 24]) & HEAP[$S + 20] ^ HEAP[$S + 28]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 8] & HEAP[$S + 4] | (HEAP[$S + 8] | HEAP[$S + 4]) & HEAP[$S + 12]) + ((HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10));
      
      
      
      var $1300 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $1300;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1338 = HEAP[$S + 28] + -459576895;
      
      
      
      $t0 = $1338 + ((HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + HEAP[$W + 64] + ((HEAP[$S + 24] ^ HEAP[$S + 20]) & HEAP[$S + 16] ^ HEAP[$S + 24]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 4] & HEAP[$S] | (HEAP[$S + 4] | HEAP[$S]) & HEAP[$S + 8]) + ((HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10));
      
      
      
      var $1377 = $t0 + HEAP[$S + 12];
      
      HEAP[$S + 12] = $1377;
      
      
      
      
      HEAP[$S + 28] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1415 = HEAP[$S + 24] + -272742522;
      
      
      
      $t0 = $1415 + ((HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + HEAP[$W + 68] + ((HEAP[$S + 20] ^ HEAP[$S + 16]) & HEAP[$S + 12] ^ HEAP[$S + 20]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S] & HEAP[$S + 28] | (HEAP[$S] | HEAP[$S + 28]) & HEAP[$S + 4]) + ((HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10));
      
      
      
      var $1454 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $1454;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 20] + 264347078 + ((HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + HEAP[$W + 72] + ((HEAP[$S + 16] ^ HEAP[$S + 12]) & HEAP[$S + 8] ^ HEAP[$S + 16]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 28] & HEAP[$S + 24] | (HEAP[$S + 28] | HEAP[$S + 24]) & HEAP[$S]) + ((HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10));
      
      
      
      var $1531 = $t0 + HEAP[$S + 4];
      
      HEAP[$S + 4] = $1531;
      
      
      
      
      HEAP[$S + 20] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 16] + 604807628 + ((HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + HEAP[$W + 76] + ((HEAP[$S + 12] ^ HEAP[$S + 8]) & HEAP[$S + 4] ^ HEAP[$S + 12]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 24] & HEAP[$S + 20] | (HEAP[$S + 24] | HEAP[$S + 20]) & HEAP[$S + 28]) + ((HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10));
      
      
      
      var $1608 = $t0 + HEAP[$S];
      
      HEAP[$S] = $1608;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 12] + 770255983 + ((HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + HEAP[$W + 80] + ((HEAP[$S + 8] ^ HEAP[$S + 4]) & HEAP[$S] ^ HEAP[$S + 8]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 20] & HEAP[$S + 16] | (HEAP[$S + 20] | HEAP[$S + 16]) & HEAP[$S + 24]) + ((HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10));
      
      
      
      var $1685 = $t0 + HEAP[$S + 28];
      
      HEAP[$S + 28] = $1685;
      
      
      
      
      HEAP[$S + 12] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 8] + 1249150122 + ((HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + HEAP[$W + 84] + ((HEAP[$S + 4] ^ HEAP[$S]) & HEAP[$S + 28] ^ HEAP[$S + 4]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 16] & HEAP[$S + 12] | (HEAP[$S + 16] | HEAP[$S + 12]) & HEAP[$S + 20]) + ((HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10));
      
      
      
      var $1762 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $1762;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 4] + 1555081692 + ((HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + HEAP[$W + 88] + ((HEAP[$S] ^ HEAP[$S + 28]) & HEAP[$S + 24] ^ HEAP[$S]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 12] & HEAP[$S + 8] | (HEAP[$S + 12] | HEAP[$S + 8]) & HEAP[$S + 16]) + ((HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10));
      
      
      
      var $1839 = $t0 + HEAP[$S + 20];
      
      HEAP[$S + 20] = $1839;
      
      
      
      
      HEAP[$S + 4] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S] + 1996064986 + ((HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + HEAP[$W + 92] + ((HEAP[$S + 28] ^ HEAP[$S + 24]) & HEAP[$S + 20] ^ HEAP[$S + 28]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 8] & HEAP[$S + 4] | (HEAP[$S + 8] | HEAP[$S + 4]) & HEAP[$S + 12]) + ((HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10));
      
      
      
      var $1916 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $1916;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $1954 = HEAP[$S + 28] + -1740746414;
      
      
      
      $t0 = $1954 + ((HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + HEAP[$W + 96] + ((HEAP[$S + 24] ^ HEAP[$S + 20]) & HEAP[$S + 16] ^ HEAP[$S + 24]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 4] & HEAP[$S] | (HEAP[$S + 4] | HEAP[$S]) & HEAP[$S + 8]) + ((HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10));
      
      
      
      var $1993 = $t0 + HEAP[$S + 12];
      
      HEAP[$S + 12] = $1993;
      
      
      
      
      HEAP[$S + 28] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2031 = HEAP[$S + 24] + -1473132947;
      
      
      
      $t0 = $2031 + ((HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + HEAP[$W + 100] + ((HEAP[$S + 20] ^ HEAP[$S + 16]) & HEAP[$S + 12] ^ HEAP[$S + 20]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S] & HEAP[$S + 28] | (HEAP[$S] | HEAP[$S + 28]) & HEAP[$S + 4]) + ((HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10));
      
      
      
      var $2070 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $2070;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2108 = HEAP[$S + 20] + -1341970488;
      
      
      
      $t0 = $2108 + ((HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + HEAP[$W + 104] + ((HEAP[$S + 16] ^ HEAP[$S + 12]) & HEAP[$S + 8] ^ HEAP[$S + 16]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 28] & HEAP[$S + 24] | (HEAP[$S + 28] | HEAP[$S + 24]) & HEAP[$S]) + ((HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10));
      
      
      
      var $2147 = $t0 + HEAP[$S + 4];
      
      HEAP[$S + 4] = $2147;
      
      
      
      
      HEAP[$S + 20] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2185 = HEAP[$S + 16] + -1084653625;
      
      
      
      $t0 = $2185 + ((HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + HEAP[$W + 108] + ((HEAP[$S + 12] ^ HEAP[$S + 8]) & HEAP[$S + 4] ^ HEAP[$S + 12]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 24] & HEAP[$S + 20] | (HEAP[$S + 24] | HEAP[$S + 20]) & HEAP[$S + 28]) + ((HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10));
      
      
      
      var $2224 = $t0 + HEAP[$S];
      
      HEAP[$S] = $2224;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2262 = HEAP[$S + 12] + -958395405;
      
      
      
      $t0 = $2262 + ((HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + HEAP[$W + 112] + ((HEAP[$S + 8] ^ HEAP[$S + 4]) & HEAP[$S] ^ HEAP[$S + 8]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 20] & HEAP[$S + 16] | (HEAP[$S + 20] | HEAP[$S + 16]) & HEAP[$S + 24]) + ((HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10));
      
      
      
      var $2301 = $t0 + HEAP[$S + 28];
      
      HEAP[$S + 28] = $2301;
      
      
      
      
      HEAP[$S + 12] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $2339 = HEAP[$S + 8] + -710438585;
      
      
      
      $t0 = $2339 + ((HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + HEAP[$W + 116] + ((HEAP[$S + 4] ^ HEAP[$S]) & HEAP[$S + 28] ^ HEAP[$S + 4]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 16] & HEAP[$S + 12] | (HEAP[$S + 16] | HEAP[$S + 12]) & HEAP[$S + 20]) + ((HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10));
      
      
      
      var $2378 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $2378;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 4] + 113926993 + ((HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + HEAP[$W + 120] + ((HEAP[$S] ^ HEAP[$S + 28]) & HEAP[$S + 24] ^ HEAP[$S]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 12] & HEAP[$S + 8] | (HEAP[$S + 12] | HEAP[$S + 8]) & HEAP[$S + 16]) + ((HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10));
      
      
      
      var $2455 = $t0 + HEAP[$S + 20];
      
      HEAP[$S + 20] = $2455;
      
      
      
      
      HEAP[$S + 4] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S] + 338241895 + ((HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + HEAP[$W + 124] + ((HEAP[$S + 28] ^ HEAP[$S + 24]) & HEAP[$S + 20] ^ HEAP[$S + 28]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 8] & HEAP[$S + 4] | (HEAP[$S + 8] | HEAP[$S + 4]) & HEAP[$S + 12]) + ((HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10));
      
      
      
      var $2532 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $2532;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 28] + 666307205 + ((HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + HEAP[$W + 128] + ((HEAP[$S + 24] ^ HEAP[$S + 20]) & HEAP[$S + 16] ^ HEAP[$S + 24]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 4] & HEAP[$S] | (HEAP[$S + 4] | HEAP[$S]) & HEAP[$S + 8]) + ((HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10));
      
      
      
      var $2609 = $t0 + HEAP[$S + 12];
      
      HEAP[$S + 12] = $2609;
      
      
      
      
      HEAP[$S + 28] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 24] + 773529912 + ((HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + HEAP[$W + 132] + ((HEAP[$S + 20] ^ HEAP[$S + 16]) & HEAP[$S + 12] ^ HEAP[$S + 20]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S] & HEAP[$S + 28] | (HEAP[$S] | HEAP[$S + 28]) & HEAP[$S + 4]) + ((HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10));
      
      
      
      var $2686 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $2686;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 20] + 1294757372 + ((HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + HEAP[$W + 136] + ((HEAP[$S + 16] ^ HEAP[$S + 12]) & HEAP[$S + 8] ^ HEAP[$S + 16]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 28] & HEAP[$S + 24] | (HEAP[$S + 28] | HEAP[$S + 24]) & HEAP[$S]) + ((HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10));
      
      
      
      var $2763 = $t0 + HEAP[$S + 4];
      
      HEAP[$S + 4] = $2763;
      
      
      
      
      HEAP[$S + 20] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 16] + 1396182291 + ((HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + HEAP[$W + 140] + ((HEAP[$S + 12] ^ HEAP[$S + 8]) & HEAP[$S + 4] ^ HEAP[$S + 12]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 24] & HEAP[$S + 20] | (HEAP[$S + 24] | HEAP[$S + 20]) & HEAP[$S + 28]) + ((HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10));
      
      
      
      var $2840 = $t0 + HEAP[$S];
      
      HEAP[$S] = $2840;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 12] + 1695183700 + ((HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + HEAP[$W + 144] + ((HEAP[$S + 8] ^ HEAP[$S + 4]) & HEAP[$S] ^ HEAP[$S + 8]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 20] & HEAP[$S + 16] | (HEAP[$S + 20] | HEAP[$S + 16]) & HEAP[$S + 24]) + ((HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10));
      
      
      
      var $2917 = $t0 + HEAP[$S + 28];
      
      HEAP[$S + 28] = $2917;
      
      
      
      
      HEAP[$S + 12] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 8] + 1986661051 + ((HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + HEAP[$W + 148] + ((HEAP[$S + 4] ^ HEAP[$S]) & HEAP[$S + 28] ^ HEAP[$S + 4]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 16] & HEAP[$S + 12] | (HEAP[$S + 16] | HEAP[$S + 12]) & HEAP[$S + 20]) + ((HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10));
      
      
      
      var $2994 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $2994;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3032 = HEAP[$S + 4] + -2117940946;
      
      
      
      $t0 = $3032 + ((HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + HEAP[$W + 152] + ((HEAP[$S] ^ HEAP[$S + 28]) & HEAP[$S + 24] ^ HEAP[$S]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 12] & HEAP[$S + 8] | (HEAP[$S + 12] | HEAP[$S + 8]) & HEAP[$S + 16]) + ((HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10));
      
      
      
      var $3071 = $t0 + HEAP[$S + 20];
      
      HEAP[$S + 20] = $3071;
      
      
      
      
      HEAP[$S + 4] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3109 = HEAP[$S] + -1838011259;
      
      
      
      $t0 = $3109 + ((HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + HEAP[$W + 156] + ((HEAP[$S + 28] ^ HEAP[$S + 24]) & HEAP[$S + 20] ^ HEAP[$S + 28]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 8] & HEAP[$S + 4] | (HEAP[$S + 8] | HEAP[$S + 4]) & HEAP[$S + 12]) + ((HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10));
      
      
      
      var $3148 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $3148;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3186 = HEAP[$S + 28] + -1564481375;
      
      
      
      $t0 = $3186 + ((HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + HEAP[$W + 160] + ((HEAP[$S + 24] ^ HEAP[$S + 20]) & HEAP[$S + 16] ^ HEAP[$S + 24]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 4] & HEAP[$S] | (HEAP[$S + 4] | HEAP[$S]) & HEAP[$S + 8]) + ((HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10));
      
      
      
      var $3225 = $t0 + HEAP[$S + 12];
      
      HEAP[$S + 12] = $3225;
      
      
      
      
      HEAP[$S + 28] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3263 = HEAP[$S + 24] + -1474664885;
      
      
      
      $t0 = $3263 + ((HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + HEAP[$W + 164] + ((HEAP[$S + 20] ^ HEAP[$S + 16]) & HEAP[$S + 12] ^ HEAP[$S + 20]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S] & HEAP[$S + 28] | (HEAP[$S] | HEAP[$S + 28]) & HEAP[$S + 4]) + ((HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10));
      
      
      
      var $3302 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $3302;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3340 = HEAP[$S + 20] + -1035236496;
      
      
      
      $t0 = $3340 + ((HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + HEAP[$W + 168] + ((HEAP[$S + 16] ^ HEAP[$S + 12]) & HEAP[$S + 8] ^ HEAP[$S + 16]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 28] & HEAP[$S + 24] | (HEAP[$S + 28] | HEAP[$S + 24]) & HEAP[$S]) + ((HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10));
      
      
      
      var $3379 = $t0 + HEAP[$S + 4];
      
      HEAP[$S + 4] = $3379;
      
      
      
      
      HEAP[$S + 20] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3417 = HEAP[$S + 16] + -949202525;
      
      
      
      $t0 = $3417 + ((HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + HEAP[$W + 172] + ((HEAP[$S + 12] ^ HEAP[$S + 8]) & HEAP[$S + 4] ^ HEAP[$S + 12]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 24] & HEAP[$S + 20] | (HEAP[$S + 24] | HEAP[$S + 20]) & HEAP[$S + 28]) + ((HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10));
      
      
      
      var $3456 = $t0 + HEAP[$S];
      
      HEAP[$S] = $3456;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3494 = HEAP[$S + 12] + -778901479;
      
      
      
      $t0 = $3494 + ((HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + HEAP[$W + 176] + ((HEAP[$S + 8] ^ HEAP[$S + 4]) & HEAP[$S] ^ HEAP[$S + 8]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 20] & HEAP[$S + 16] | (HEAP[$S + 20] | HEAP[$S + 16]) & HEAP[$S + 24]) + ((HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10));
      
      
      
      var $3533 = $t0 + HEAP[$S + 28];
      
      HEAP[$S + 28] = $3533;
      
      
      
      
      HEAP[$S + 12] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3571 = HEAP[$S + 8] + -694614492;
      
      
      
      $t0 = $3571 + ((HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + HEAP[$W + 180] + ((HEAP[$S + 4] ^ HEAP[$S]) & HEAP[$S + 28] ^ HEAP[$S + 4]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 16] & HEAP[$S + 12] | (HEAP[$S + 16] | HEAP[$S + 12]) & HEAP[$S + 20]) + ((HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10));
      
      
      
      var $3610 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $3610;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $3648 = HEAP[$S + 4] + -200395387;
      
      
      
      $t0 = $3648 + ((HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + HEAP[$W + 184] + ((HEAP[$S] ^ HEAP[$S + 28]) & HEAP[$S + 24] ^ HEAP[$S]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 12] & HEAP[$S + 8] | (HEAP[$S + 12] | HEAP[$S + 8]) & HEAP[$S + 16]) + ((HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10));
      
      
      
      var $3687 = $t0 + HEAP[$S + 20];
      
      HEAP[$S + 20] = $3687;
      
      
      
      
      HEAP[$S + 4] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S] + 275423344 + ((HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + HEAP[$W + 188] + ((HEAP[$S + 28] ^ HEAP[$S + 24]) & HEAP[$S + 20] ^ HEAP[$S + 28]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 8] & HEAP[$S + 4] | (HEAP[$S + 8] | HEAP[$S + 4]) & HEAP[$S + 12]) + ((HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10));
      
      
      
      var $3764 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $3764;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 28] + 430227734 + ((HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + HEAP[$W + 192] + ((HEAP[$S + 24] ^ HEAP[$S + 20]) & HEAP[$S + 16] ^ HEAP[$S + 24]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 4] & HEAP[$S] | (HEAP[$S + 4] | HEAP[$S]) & HEAP[$S + 8]) + ((HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10));
      
      
      
      var $3841 = $t0 + HEAP[$S + 12];
      
      HEAP[$S + 12] = $3841;
      
      
      
      
      HEAP[$S + 28] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 24] + 506948616 + ((HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + HEAP[$W + 196] + ((HEAP[$S + 20] ^ HEAP[$S + 16]) & HEAP[$S + 12] ^ HEAP[$S + 20]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S] & HEAP[$S + 28] | (HEAP[$S] | HEAP[$S + 28]) & HEAP[$S + 4]) + ((HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10));
      
      
      
      var $3918 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $3918;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 20] + 659060556 + ((HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + HEAP[$W + 200] + ((HEAP[$S + 16] ^ HEAP[$S + 12]) & HEAP[$S + 8] ^ HEAP[$S + 16]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 28] & HEAP[$S + 24] | (HEAP[$S + 28] | HEAP[$S + 24]) & HEAP[$S]) + ((HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10));
      
      
      
      var $3995 = $t0 + HEAP[$S + 4];
      
      HEAP[$S + 4] = $3995;
      
      
      
      
      HEAP[$S + 20] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 16] + 883997877 + ((HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + HEAP[$W + 204] + ((HEAP[$S + 12] ^ HEAP[$S + 8]) & HEAP[$S + 4] ^ HEAP[$S + 12]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 24] & HEAP[$S + 20] | (HEAP[$S + 24] | HEAP[$S + 20]) & HEAP[$S + 28]) + ((HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10));
      
      
      
      var $4072 = $t0 + HEAP[$S];
      
      HEAP[$S] = $4072;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 12] + 958139571 + ((HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + HEAP[$W + 208] + ((HEAP[$S + 8] ^ HEAP[$S + 4]) & HEAP[$S] ^ HEAP[$S + 8]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 20] & HEAP[$S + 16] | (HEAP[$S + 20] | HEAP[$S + 16]) & HEAP[$S + 24]) + ((HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10));
      
      
      
      var $4149 = $t0 + HEAP[$S + 28];
      
      HEAP[$S + 28] = $4149;
      
      
      
      
      HEAP[$S + 12] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 8] + 1322822218 + ((HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + HEAP[$W + 212] + ((HEAP[$S + 4] ^ HEAP[$S]) & HEAP[$S + 28] ^ HEAP[$S + 4]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 16] & HEAP[$S + 12] | (HEAP[$S + 16] | HEAP[$S + 12]) & HEAP[$S + 20]) + ((HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10));
      
      
      
      var $4226 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $4226;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 4] + 1537002063 + ((HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + HEAP[$W + 216] + ((HEAP[$S] ^ HEAP[$S + 28]) & HEAP[$S + 24] ^ HEAP[$S]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 12] & HEAP[$S + 8] | (HEAP[$S + 12] | HEAP[$S + 8]) & HEAP[$S + 16]) + ((HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10));
      
      
      
      var $4303 = $t0 + HEAP[$S + 20];
      
      HEAP[$S + 20] = $4303;
      
      
      
      
      HEAP[$S + 4] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S] + 1747873779 + ((HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + HEAP[$W + 220] + ((HEAP[$S + 28] ^ HEAP[$S + 24]) & HEAP[$S + 20] ^ HEAP[$S + 28]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 8] & HEAP[$S + 4] | (HEAP[$S + 8] | HEAP[$S + 4]) & HEAP[$S + 12]) + ((HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10));
      
      
      
      var $4380 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $4380;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 28] + 1955562222 + ((HEAP[$S + 16] >>> 0 >>> 11 | HEAP[$S + 16] << 21) ^ (HEAP[$S + 16] >>> 0 >>> 6 | HEAP[$S + 16] << 26) ^ (HEAP[$S + 16] >>> 0 >>> 25 | HEAP[$S + 16] << 7)) + HEAP[$W + 224] + ((HEAP[$S + 24] ^ HEAP[$S + 20]) & HEAP[$S + 16] ^ HEAP[$S + 24]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 4] & HEAP[$S] | (HEAP[$S + 4] | HEAP[$S]) & HEAP[$S + 8]) + ((HEAP[$S] >>> 0 >>> 13 | HEAP[$S] << 19) ^ (HEAP[$S] >>> 0 >>> 2 | HEAP[$S] << 30) ^ (HEAP[$S] >>> 0 >>> 22 | HEAP[$S] << 10));
      
      
      
      var $4457 = $t0 + HEAP[$S + 12];
      
      HEAP[$S + 12] = $4457;
      
      
      
      
      HEAP[$S + 28] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t0 = HEAP[$S + 24] + 2024104815 + ((HEAP[$S + 12] >>> 0 >>> 11 | HEAP[$S + 12] << 21) ^ (HEAP[$S + 12] >>> 0 >>> 6 | HEAP[$S + 12] << 26) ^ (HEAP[$S + 12] >>> 0 >>> 25 | HEAP[$S + 12] << 7)) + HEAP[$W + 228] + ((HEAP[$S + 20] ^ HEAP[$S + 16]) & HEAP[$S + 12] ^ HEAP[$S + 20]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S] & HEAP[$S + 28] | (HEAP[$S] | HEAP[$S + 28]) & HEAP[$S + 4]) + ((HEAP[$S + 28] >>> 0 >>> 13 | HEAP[$S + 28] << 19) ^ (HEAP[$S + 28] >>> 0 >>> 2 | HEAP[$S + 28] << 30) ^ (HEAP[$S + 28] >>> 0 >>> 22 | HEAP[$S + 28] << 10));
      
      
      
      var $4534 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $4534;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4572 = HEAP[$S + 20] + -2067236844;
      
      
      
      $t0 = $4572 + ((HEAP[$S + 8] >>> 0 >>> 11 | HEAP[$S + 8] << 21) ^ (HEAP[$S + 8] >>> 0 >>> 6 | HEAP[$S + 8] << 26) ^ (HEAP[$S + 8] >>> 0 >>> 25 | HEAP[$S + 8] << 7)) + HEAP[$W + 232] + ((HEAP[$S + 16] ^ HEAP[$S + 12]) & HEAP[$S + 8] ^ HEAP[$S + 16]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 28] & HEAP[$S + 24] | (HEAP[$S + 28] | HEAP[$S + 24]) & HEAP[$S]) + ((HEAP[$S + 24] >>> 0 >>> 13 | HEAP[$S + 24] << 19) ^ (HEAP[$S + 24] >>> 0 >>> 2 | HEAP[$S + 24] << 30) ^ (HEAP[$S + 24] >>> 0 >>> 22 | HEAP[$S + 24] << 10));
      
      
      
      var $4611 = $t0 + HEAP[$S + 4];
      
      HEAP[$S + 4] = $4611;
      
      
      
      
      HEAP[$S + 20] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4649 = HEAP[$S + 16] + -1933114872;
      
      
      
      $t0 = $4649 + ((HEAP[$S + 4] >>> 0 >>> 11 | HEAP[$S + 4] << 21) ^ (HEAP[$S + 4] >>> 0 >>> 6 | HEAP[$S + 4] << 26) ^ (HEAP[$S + 4] >>> 0 >>> 25 | HEAP[$S + 4] << 7)) + HEAP[$W + 236] + ((HEAP[$S + 12] ^ HEAP[$S + 8]) & HEAP[$S + 4] ^ HEAP[$S + 12]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 24] & HEAP[$S + 20] | (HEAP[$S + 24] | HEAP[$S + 20]) & HEAP[$S + 28]) + ((HEAP[$S + 20] >>> 0 >>> 13 | HEAP[$S + 20] << 19) ^ (HEAP[$S + 20] >>> 0 >>> 2 | HEAP[$S + 20] << 30) ^ (HEAP[$S + 20] >>> 0 >>> 22 | HEAP[$S + 20] << 10));
      
      
      
      var $4688 = $t0 + HEAP[$S];
      
      HEAP[$S] = $4688;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4726 = HEAP[$S + 12] + -1866530822;
      
      
      
      $t0 = $4726 + ((HEAP[$S] >>> 0 >>> 11 | HEAP[$S] << 21) ^ (HEAP[$S] >>> 0 >>> 6 | HEAP[$S] << 26) ^ (HEAP[$S] >>> 0 >>> 25 | HEAP[$S] << 7)) + HEAP[$W + 240] + ((HEAP[$S + 8] ^ HEAP[$S + 4]) & HEAP[$S] ^ HEAP[$S + 8]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 20] & HEAP[$S + 16] | (HEAP[$S + 20] | HEAP[$S + 16]) & HEAP[$S + 24]) + ((HEAP[$S + 16] >>> 0 >>> 13 | HEAP[$S + 16] << 19) ^ (HEAP[$S + 16] >>> 0 >>> 2 | HEAP[$S + 16] << 30) ^ (HEAP[$S + 16] >>> 0 >>> 22 | HEAP[$S + 16] << 10));
      
      
      
      var $4765 = $t0 + HEAP[$S + 28];
      
      HEAP[$S + 28] = $4765;
      
      
      
      
      HEAP[$S + 12] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4803 = HEAP[$S + 8] + -1538233109;
      
      
      
      $t0 = $4803 + ((HEAP[$S + 28] >>> 0 >>> 11 | HEAP[$S + 28] << 21) ^ (HEAP[$S + 28] >>> 0 >>> 6 | HEAP[$S + 28] << 26) ^ (HEAP[$S + 28] >>> 0 >>> 25 | HEAP[$S + 28] << 7)) + HEAP[$W + 244] + ((HEAP[$S + 4] ^ HEAP[$S]) & HEAP[$S + 28] ^ HEAP[$S + 4]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 16] & HEAP[$S + 12] | (HEAP[$S + 16] | HEAP[$S + 12]) & HEAP[$S + 20]) + ((HEAP[$S + 12] >>> 0 >>> 13 | HEAP[$S + 12] << 19) ^ (HEAP[$S + 12] >>> 0 >>> 2 | HEAP[$S + 12] << 30) ^ (HEAP[$S + 12] >>> 0 >>> 22 | HEAP[$S + 12] << 10));
      
      
      
      var $4842 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $4842;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4880 = HEAP[$S + 4] + -1090935817;
      
      
      
      $t0 = $4880 + ((HEAP[$S + 24] >>> 0 >>> 11 | HEAP[$S + 24] << 21) ^ (HEAP[$S + 24] >>> 0 >>> 6 | HEAP[$S + 24] << 26) ^ (HEAP[$S + 24] >>> 0 >>> 25 | HEAP[$S + 24] << 7)) + HEAP[$W + 248] + ((HEAP[$S] ^ HEAP[$S + 28]) & HEAP[$S + 24] ^ HEAP[$S]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 12] & HEAP[$S + 8] | (HEAP[$S + 12] | HEAP[$S + 8]) & HEAP[$S + 16]) + ((HEAP[$S + 8] >>> 0 >>> 13 | HEAP[$S + 8] << 19) ^ (HEAP[$S + 8] >>> 0 >>> 2 | HEAP[$S + 8] << 30) ^ (HEAP[$S + 8] >>> 0 >>> 22 | HEAP[$S + 8] << 10));
      
      
      
      var $4919 = $t0 + HEAP[$S + 20];
      
      HEAP[$S + 20] = $4919;
      
      
      
      
      HEAP[$S + 4] = $t1 + $t0;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $4957 = HEAP[$S] + -965641998;
      
      
      
      $t0 = $4957 + ((HEAP[$S + 20] >>> 0 >>> 11 | HEAP[$S + 20] << 21) ^ (HEAP[$S + 20] >>> 0 >>> 6 | HEAP[$S + 20] << 26) ^ (HEAP[$S + 20] >>> 0 >>> 25 | HEAP[$S + 20] << 7)) + HEAP[$W + 252] + ((HEAP[$S + 28] ^ HEAP[$S + 24]) & HEAP[$S + 20] ^ HEAP[$S + 28]);
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $t1 = (HEAP[$S + 8] & HEAP[$S + 4] | (HEAP[$S + 8] | HEAP[$S + 4]) & HEAP[$S + 12]) + ((HEAP[$S + 4] >>> 0 >>> 13 | HEAP[$S + 4] << 19) ^ (HEAP[$S + 4] >>> 0 >>> 2 | HEAP[$S + 4] << 30) ^ (HEAP[$S + 4] >>> 0 >>> 22 | HEAP[$S + 4] << 10));
      
      
      
      var $4996 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $4996;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      $i = 0;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      var $5011 = HEAP[$S + $i * 4] + HEAP[$sha_info_addr + 8 + $i * 4];
      
      
      
      HEAP[$sha_info_addr + 8 + $i * 4] = $5011;
      
      var $5016 = $i + 1;
      $i = $5016;
      
      if ($5016 <= 7) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
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
      
      
      HEAP[$sha_info_addr + 112] = 0;
      
      
      
      if (HEAP[$i] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$sha_info_addr + 112] = 1;
      __label__ = 2;
      break;
     case 2:
      
      
      
      HEAP[$sha_info_addr + 8] = 1779033703;
      
      
      
      HEAP[$sha_info_addr + 8 + 4] = -1150833019;
      
      
      
      HEAP[$sha_info_addr + 8 + 8] = 1013904242;
      
      
      
      HEAP[$sha_info_addr + 8 + 12] = -1521486534;
      
      
      
      HEAP[$sha_info_addr + 8 + 16] = 1359893119;
      
      
      
      HEAP[$sha_info_addr + 8 + 20] = -1694144372;
      
      
      
      HEAP[$sha_info_addr + 8 + 24] = 528734635;
      
      
      
      HEAP[$sha_info_addr + 8 + 28] = 1541459225;
      
      
      HEAP[$sha_info_addr + 40] = 0;
      
      
      HEAP[$sha_info_addr + 44] = 0;
      
      
      HEAP[$sha_info_addr + 116] = 0;
      
      
      HEAP[$sha_info_addr + 120] = 32;
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha224_init($sha_info) {
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
      
      
      HEAP[$sha_info_addr + 112] = 0;
      
      
      
      if (HEAP[$i] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$sha_info_addr + 112] = 1;
      __label__ = 2;
      break;
     case 2:
      
      
      
      HEAP[$sha_info_addr + 8] = -1056596264;
      
      
      
      HEAP[$sha_info_addr + 8 + 4] = 914150663;
      
      
      
      HEAP[$sha_info_addr + 8 + 8] = 812702999;
      
      
      
      HEAP[$sha_info_addr + 8 + 12] = -150054599;
      
      
      
      HEAP[$sha_info_addr + 8 + 16] = -4191439;
      
      
      
      HEAP[$sha_info_addr + 8 + 20] = 1750603025;
      
      
      
      HEAP[$sha_info_addr + 8 + 24] = 1694076839;
      
      
      
      HEAP[$sha_info_addr + 8 + 28] = -1090891868;
      
      
      HEAP[$sha_info_addr + 40] = 0;
      
      
      HEAP[$sha_info_addr + 44] = 0;
      
      
      HEAP[$sha_info_addr + 116] = 0;
      
      
      HEAP[$sha_info_addr + 120] = 28;
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha_update($sha_info, $buffer, $count) {
    var __label__;
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
      
      
      
      
      
      
      $clo = $count_addr * 8 + HEAP[$sha_info_addr + 40];
      
      
      
      
      
      if (HEAP[$sha_info_addr + 40] > $clo) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $14 = HEAP[$sha_info_addr + 44] + 1;
      
      
      HEAP[$sha_info_addr + 44] = $14;
      __label__ = 2;
      break;
     case 2:
      
      
      
      HEAP[$sha_info_addr + 40] = $clo;
      
      
      
      
      
      var $25 = ($count_addr >>> 29) + HEAP[$sha_info_addr + 44];
      
      
      HEAP[$sha_info_addr + 44] = $25;
      
      
      
      
      if (HEAP[$sha_info_addr + 116] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      
      $i = 64 - HEAP[$sha_info_addr + 116];
      
      
      
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
      
      
      
      
      
      
      
      var $47 = $sha_info_addr + 48 + HEAP[$sha_info_addr + 116];
      
      _llvm_memcpy_p0i8_p0i8_i32($47, $buffer_addr, $i, 1, 0);
      
      
      var $51 = $count_addr - $i;
      $count_addr = $51;
      
      
      var $54 = $buffer_addr + $i;
      $buffer_addr = $54;
      
      
      
      
      var $59 = $i + HEAP[$sha_info_addr + 116];
      
      
      HEAP[$sha_info_addr + 116] = $59;
      
      
      
      
      if (HEAP[$sha_info_addr + 116] == 64) {
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
      
      
      if ($count_addr > 63) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($sha_info_addr + 48, $buffer_addr, 64, 1, 0);
      
      var $74 = $buffer_addr + 64;
      $buffer_addr = $74;
      
      var $76 = $count_addr - 64;
      $count_addr = $76;
      
      _sha_transform($sha_info_addr);
      
      
      if ($count_addr > 63) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($sha_info_addr + 48, $buffer_addr, $count_addr, 1, 0);
      
      
      
      HEAP[$sha_info_addr + 116] = $count_addr;
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
      
      
      
      $lo_bit_count = HEAP[$sha_info_addr + 40];
      
      
      
      $hi_bit_count = HEAP[$sha_info_addr + 44];
      
      
      
      $count = $lo_bit_count >>> 3 & 63;
      
      
      
      
      
      HEAP[$sha_info_addr + 48 + $count] = -128;
      
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
      
      
      
      
      
      
      _llvm_memset_p0i8_i32($sha_info_addr + 48 + $count, 0, 64 - $18, 1, 0);
      
      _sha_transform($sha_info_addr);
      
      
      
      _llvm_memset_p0i8_i32($sha_info_addr + 48, 0, 56, 1, 0);
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      
      _llvm_memset_p0i8_i32($sha_info_addr + 48 + $count, 0, 56 - $18, 1, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      
      
      
      
      HEAP[$sha_info_addr + 48 + 56] = $hi_bit_count >>> 24 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 48 + 57] = $hi_bit_count >>> 16 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 48 + 58] = $hi_bit_count >>> 8 & 255;
      
      
      
      
      
      HEAP[$sha_info_addr + 48 + 59] = $hi_bit_count & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 48 + 60] = $lo_bit_count >>> 24 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 48 + 61] = $lo_bit_count >>> 16 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 48 + 62] = $lo_bit_count >>> 8 & 255;
      
      
      
      
      
      HEAP[$sha_info_addr + 48 + 63] = $lo_bit_count & 255;
      
      _sha_transform($sha_info_addr);
      
      
      
      
      
      var $87 = HEAP[$sha_info_addr + 8] >>> 0 >>> 24 & 255;
      
      
      HEAP[$digest_addr] = $87;
      
      
      
      
      
      var $95 = HEAP[$sha_info_addr + 8] >>> 0 >>> 16 & 255;
      
      
      HEAP[$digest_addr + 1] = $95;
      
      
      
      
      
      var $103 = HEAP[$sha_info_addr + 8] >>> 0 >>> 8 & 255;
      
      
      HEAP[$digest_addr + 2] = $103;
      
      
      
      
      var $110 = HEAP[$sha_info_addr + 8] & 255;
      
      
      HEAP[$digest_addr + 3] = $110;
      
      
      
      
      
      var $118 = HEAP[$sha_info_addr + 8 + 4] >>> 24 & 255;
      
      
      HEAP[$digest_addr + 4] = $118;
      
      
      
      
      
      var $126 = HEAP[$sha_info_addr + 8 + 4] >>> 16 & 255;
      
      
      HEAP[$digest_addr + 5] = $126;
      
      
      
      
      
      var $134 = HEAP[$sha_info_addr + 8 + 4] >>> 8 & 255;
      
      
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
      
      
      
      
      
      var $242 = HEAP[$sha_info_addr + 8 + 20] >>> 0 >>> 24 & 255;
      
      
      HEAP[$digest_addr + 20] = $242;
      
      
      
      
      
      var $250 = HEAP[$sha_info_addr + 8 + 20] >>> 0 >>> 16 & 255;
      
      
      HEAP[$digest_addr + 21] = $250;
      
      
      
      
      
      var $258 = HEAP[$sha_info_addr + 8 + 20] >>> 0 >>> 8 & 255;
      
      
      HEAP[$digest_addr + 22] = $258;
      
      
      
      
      var $265 = HEAP[$sha_info_addr + 8 + 20] & 255;
      
      
      HEAP[$digest_addr + 23] = $265;
      
      
      
      
      
      var $273 = HEAP[$sha_info_addr + 8 + 24] >>> 0 >>> 24 & 255;
      
      
      HEAP[$digest_addr + 24] = $273;
      
      
      
      
      
      var $281 = HEAP[$sha_info_addr + 8 + 24] >>> 0 >>> 16 & 255;
      
      
      HEAP[$digest_addr + 25] = $281;
      
      
      
      
      
      var $289 = HEAP[$sha_info_addr + 8 + 24] >>> 0 >>> 8 & 255;
      
      
      HEAP[$digest_addr + 26] = $289;
      
      
      
      
      var $296 = HEAP[$sha_info_addr + 8 + 24] & 255;
      
      
      HEAP[$digest_addr + 27] = $296;
      
      
      
      
      
      var $304 = HEAP[$sha_info_addr + 8 + 28] >>> 24 & 255;
      
      
      HEAP[$digest_addr + 28] = $304;
      
      
      
      
      
      var $312 = HEAP[$sha_info_addr + 8 + 28] >>> 16 & 255;
      
      
      HEAP[$digest_addr + 29] = $312;
      
      
      
      
      
      var $320 = HEAP[$sha_info_addr + 8 + 28] >>> 8 & 255;
      
      
      HEAP[$digest_addr + 30] = $320;
      
      
      
      
      var $327 = HEAP[$sha_info_addr + 8 + 28] & 255;
      
      
      HEAP[$digest_addr + 31] = $327;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _newSHA224object() {
    
    var $retval;
    var $0;
    var $1 = __PyObject_New(_SHA224type);
    
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _newSHA256object() {
    
    var $retval;
    var $0;
    var $1 = __PyObject_New(_SHA256type);
    
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
  function _SHA256_copy($self, $unused) {
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
      
      
      
      
      
      if (HEAP[$self_addr + 4] == _SHA256type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _newSHA256object();
      $newobj = $6;
      
      
      if ($newobj == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 6;
      break;
     case 3:
      var $9 = _newSHA224object();
      $newobj = $9;
      
      
      if ($newobj == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 0;
      __label__ = 6;
      break;
     case 5:
      
      
      _SHAcopy($self_addr, $newobj);
      
      
      $0 = $newobj;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _SHA256_digest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 156;
    _memset(__stackBase__, 0, 156);
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    var $digest = __stackBase__;
    var $temp = __stackBase__ + 32;
    $self_addr = $self;
    $unused_addr = $unused;
    
    _SHAcopy($self_addr, $temp);
    var $digest1 = $digest;
    _sha_final($digest1, $temp);
    
    
    var $4 = HEAP[$self_addr + 120];
    var $digest2 = $digest;
    var $5 = _PyString_FromStringAndSize($digest2, $4);
    $0 = $5;
    
    $retval = $0;
    var $retval4 = $retval;
    STACKTOP = __stackBase__;
    return $retval4;
  }
  function _SHA256_hexdigest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 156;
    _memset(__stackBase__, 0, 156);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $iftmp_20;
      var $iftmp_16;
      var $0;
      var $digest = __stackBase__;
      var $temp = __stackBase__ + 32;
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
      
      
      
      var $5 = HEAP[$self_addr + 120] * 2;
      var $6 = _PyString_FromStringAndSize(0, $5);
      $retval1 = $6;
      
      
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
      
      var $10 = _PyString_AsString($retval1);
      $hex_digest = $10;
      
      
      if ($hex_digest == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      
      
      
      var $16 = HEAP[$retval1] - 1;
      
      
      HEAP[$retval1] = $16;
      
      
      
      
      if (HEAP[$retval1] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $27 = HEAP[HEAP[$retval1 + 4] + 24];
      
      FUNCTION_TABLE[$27]($retval1);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 15;
      break;
     case 6:
      $j = 0;
      
      $i = $j;
      
      
      
      
      
      if (HEAP[$self_addr + 120] > $i) {
        __label__ = 7;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 7:
      
      
      
      
      
      $c = HEAP[$digest + $i] >>> 4 & 15;
      
      var $41 = $c;
      if ((HEAP[$digest + $i] >>> 4 & 15) > 9) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      $iftmp_16 = $41 + 87;
      __label__ = 10;
      break;
     case 9:
      
      $iftmp_16 = $41 + 48;
      __label__ = 10;
      break;
     case 10:
      
      $c = $iftmp_16;
      
      
      
      
      HEAP[$hex_digest + $j] = $c;
      
      var $50 = $j + 1;
      $j = $50;
      
      
      
      
      $c = HEAP[$digest + $i] & 15;
      
      var $56 = $c;
      if ((HEAP[$digest + $i] & 15) > 9) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      $iftmp_20 = $56 + 87;
      __label__ = 13;
      break;
     case 12:
      
      $iftmp_20 = $56 + 48;
      __label__ = 13;
      break;
     case 13:
      
      $c = $iftmp_20;
      
      
      
      
      HEAP[$hex_digest + $j] = $c;
      
      var $65 = $j + 1;
      $j = $65;
      
      var $67 = $i + 1;
      $i = $67;
      
      
      
      
      
      if (HEAP[$self_addr + 120] > $i) {
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
  function _SHA256_update($self, $args) {
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
      var $buf = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str, allocate([ $buf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      var $5 = HEAP[$buf + 8];
      
      var $7 = HEAP[$buf];
      
      _sha_update($self_addr, $7, $5);
      _PyBuffer_Release($buf);
      
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
  function _SHA256_get_block_size($self, $closure) {
    
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
  function _SHA256_get_name($self, $closure) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $closure_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      $closure_addr = $closure;
      
      
      
      
      
      if (HEAP[$self_addr + 120] == 32) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $6 = _PyString_FromStringAndSize(__str5, 6);
      $0 = $6;
      __label__ = 3;
      break;
     case 2:
      var $7 = _PyString_FromStringAndSize(__str6, 6);
      $0 = $7;
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
  function _SHA256_new($self, $args, $kwdict) {
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
      var $buf = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      $kwdict_addr = $kwdict;
      var $buf1 = $buf;
      _llvm_memset_p0i8_i32($buf1, 0, 52, 4, 0);
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwdict_addr, __str13, _kwlist_11325, allocate([ $buf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = _newSHA256object();
      $new = $5;
      
      
      if ($new == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($buf);
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
      _PyBuffer_Release($buf);
      $0 = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      if (HEAP[$buf + 8] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $32 = HEAP[$buf + 8];
      
      var $34 = HEAP[$buf];
      
      _sha_update($new, $34, $32);
      __label__ = 10;
      break;
     case 10:
      _PyBuffer_Release($buf);
      
      
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
  function _SHA224_new($self, $args, $kwdict) {
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
      var $buf = __stackBase__;
      $self_addr = $self;
      $args_addr = $args;
      $kwdict_addr = $kwdict;
      var $buf1 = $buf;
      _llvm_memset_p0i8_i32($buf1, 0, 52, 4, 0);
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwdict_addr, __str13, _kwlist_11361, allocate([ $buf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = _newSHA224object();
      $new = $5;
      
      
      if ($new == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      _PyBuffer_Release($buf);
      $0 = 0;
      __label__ = 11;
      break;
     case 4:
      
      _sha224_init($new);
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
      _PyBuffer_Release($buf);
      $0 = 0;
      __label__ = 11;
      break;
     case 8:
      
      
      
      if (HEAP[$buf + 8] > 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $32 = HEAP[$buf + 8];
      
      var $34 = HEAP[$buf];
      
      _sha_update($new, $34, $32);
      __label__ = 10;
      break;
     case 10:
      _PyBuffer_Release($buf);
      
      
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
  function _init_sha256() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      HEAP[_SHA224type + 4] = _PyType_Type;
      var $0 = _PyType_Ready(_SHA224type);
      
      if ($0 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      HEAP[_SHA256type + 4] = _PyType_Type;
      var $2 = _PyType_Ready(_SHA256type);
      
      if ($2 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $4 = _Py_InitModule4(__str17, _SHA_functions, 0, 0, 1013);
      $m = $4;
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_sha256"] = _init_sha256;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _SHA256_copy, 0, _SHA256_digest, 0, _SHA256_hexdigest, 0, _SHA256_update, 0, _SHA256_get_block_size, 0, _SHA256_get_name, 0, _SHA_dealloc, 0, _SHA256_new, 0, _SHA224_new, 0 ]);
  function run(args) {
    _SHA256_copy__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA256_digest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA256_hexdigest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 100, 105, 103, 105, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA256_update__doc__ = allocate([ 85, 112, 100, 97, 116, 101, 32, 116, 104, 105, 115, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 115, 116, 97, 116, 101, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 42, 58, 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 104, 101, 120, 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str5 = allocate([ 83, 72, 65, 50, 53, 54, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 83, 72, 65, 50, 50, 52, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 98, 108, 111, 99, 107, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_getseters = allocate(60, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str9 = allocate([ 100, 105, 103, 101, 115, 116, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 100, 105, 103, 101, 115, 116, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_members = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 120, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str11 = allocate([ 95, 115, 104, 97, 50, 53, 54, 46, 115, 104, 97, 50, 50, 52, 0 ], "i8", ALLOC_NORMAL);
    _SHA224type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str12 = allocate([ 95, 115, 104, 97, 50, 53, 54, 46, 115, 104, 97, 50, 53, 54, 0 ], "i8", ALLOC_NORMAL);
    _SHA256type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _SHA256_new__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 83, 72, 65, 45, 50, 53, 54, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 59, 32, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 119, 105, 116, 104, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 124, 115, 42, 58, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_11325 = allocate(8, "i8*", ALLOC_NORMAL);
    __str14 = allocate([ 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _SHA224_new__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 83, 72, 65, 45, 50, 50, 52, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 59, 32, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 119, 105, 116, 104, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_11361 = allocate(8, "i8*", ALLOC_NORMAL);
    __str15 = allocate([ 115, 104, 97, 50, 53, 54, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 104, 97, 50, 50, 52, 0 ], "i8", ALLOC_NORMAL);
    _SHA_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str17 = allocate([ 95, 115, 104, 97, 50, 53, 54, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_SHA_methods] = __str1;
    HEAP[_SHA_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_SHA_methods + 12] = _SHA256_copy__doc__;
    HEAP[_SHA_methods + 16] = __str2;
    HEAP[_SHA_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_SHA_methods + 28] = _SHA256_digest__doc__;
    HEAP[_SHA_methods + 32] = __str3;
    HEAP[_SHA_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_SHA_methods + 44] = _SHA256_hexdigest__doc__;
    HEAP[_SHA_methods + 48] = __str4;
    HEAP[_SHA_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_SHA_methods + 60] = _SHA256_update__doc__;
    HEAP[_SHA_getseters] = __str7;
    HEAP[_SHA_getseters + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_SHA_getseters + 20] = __str8;
    HEAP[_SHA_getseters + 24] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_SHA_members] = __str9;
    HEAP[_SHA_members + 20] = __str10;
    HEAP[_SHA224type + 12] = __str11;
    HEAP[_SHA224type + 24] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_SHA224type + 116] = _SHA_methods;
    HEAP[_SHA224type + 120] = _SHA_members;
    HEAP[_SHA224type + 124] = _SHA_getseters;
    HEAP[_SHA256type + 12] = __str12;
    HEAP[_SHA256type + 24] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_SHA256type + 116] = _SHA_methods;
    HEAP[_SHA256type + 120] = _SHA_members;
    HEAP[_SHA256type + 124] = _SHA_getseters;
    HEAP[_kwlist_11325] = __str14;
    HEAP[_kwlist_11361] = __str14;
    HEAP[_SHA_functions] = __str15;
    HEAP[_SHA_functions + 4] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_SHA_functions + 12] = _SHA256_new__doc__;
    HEAP[_SHA_functions + 16] = __str16;
    HEAP[_SHA_functions + 20] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_SHA_functions + 28] = _SHA224_new__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
