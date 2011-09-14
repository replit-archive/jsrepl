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
  var $struct_SHAobject___SIZE = 220;
  var $struct_SHAobject___FLATTENER = [ 0, 4, 8, 72, 76, 80, 208, 212, 216 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var _SHA512_copy__doc__;
  var _SHA512_digest__doc__;
  var _SHA512_hexdigest__doc__;
  var _SHA512_update__doc__;
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
  var _SHA384type;
  var __str12;
  var _SHA512type;
  var _SHA512_new__doc__;
  var __str13;
  var _kwlist_12080;
  var __str14;
  var _SHA384_new__doc__;
  var _kwlist_12116;
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
      $byteCount_addr = 128;
      $Endianness_addr = $Endianness;
      
      
      if ($Endianness_addr == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $3 = Math.floor($byteCount_addr / 8);
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
      
      var $10 = $buffer_addr;
      
      var $12 = unSign($value, 64, 1) / Math.pow(2, 56);
      
      
      HEAP[$10] = $12 & 255;
      
      var $16 = $buffer_addr;
      
      var $18 = unSign($value, 64, 1) / Math.pow(2, 48);
      
      
      HEAP[$16 + 1] = $18 & 255;
      
      var $22 = $buffer_addr;
      
      var $24 = unSign($value, 64, 1) / Math.pow(2, 40);
      
      
      HEAP[$22 + 2] = $24 & 255;
      
      var $28 = $buffer_addr;
      
      var $30 = unSign($value, 64, 1) / Math.pow(2, 32);
      
      
      HEAP[$28 + 3] = $30 & 255;
      
      var $34 = $buffer_addr;
      
      var $36 = unSign($value, 64, 1) / Math.pow(2, 24);
      
      
      HEAP[$34 + 4] = $36 & 255;
      
      var $40 = $buffer_addr;
      
      var $42 = unSign($value, 64, 1) / Math.pow(2, 16);
      
      
      HEAP[$40 + 5] = $42 & 255;
      
      var $46 = $buffer_addr;
      
      var $48 = unSign($value, 64, 1) / Math.pow(2, 8);
      
      
      HEAP[$46 + 6] = $48 & 255;
      
      
      
      
      
      HEAP[$buffer_addr + 7] = $value & 255;
      
      var $57 = $buffer_addr + 8;
      $buffer_addr = $57;
      
      var $59 = $byteCount_addr - 1;
      $byteCount_addr = $59;
      var $60 = $59 != -1;
      if ($60) {
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
    
    
    var $2 = HEAP[$src_addr + 208];
    
    
    HEAP[$dest_addr + 208] = $2;
    
    
    var $7 = HEAP[$src_addr + 212];
    
    
    HEAP[$dest_addr + 212] = $7;
    
    
    var $12 = HEAP[$src_addr + 216];
    
    
    HEAP[$dest_addr + 216] = $12;
    
    
    var $17 = HEAP[$src_addr + 72];
    
    
    HEAP[$dest_addr + 72] = $17;
    
    
    var $22 = HEAP[$src_addr + 76];
    
    
    HEAP[$dest_addr + 76] = $22;
    
    
    
    
    
    
    
    
    _llvm_memcpy_p0i8_p0i8_i32($dest_addr + 8, $src_addr + 8, 64, 1, 0);
    
    
    
    
    
    
    _llvm_memcpy_p0i8_p0i8_i32($dest_addr + 80, $src_addr + 80, 128, 1, 0);
    return;
  }
  function _sha512_transform($sha_info) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 704;
    _memset(__stackBase__, 0, 704);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sha_info_addr;
      var $i;
      var $S = __stackBase__;
      var $W = __stackBase__ + 64;
      var $t0;
      var $t1;
      $sha_info_addr = $sha_info;
      
      
      
      
      var $W12 = $W;
      _llvm_memcpy_p0i8_p0i8_i32($W12, $sha_info_addr + 80, 128, 1, 0);
      
      
      var $5 = HEAP[$sha_info_addr + 208];
      var $W3 = $W;
      _longReverse($W3, $5);
      $i = 16;
      __label__ = 1;
      break;
     case 1:
      var $6 = $i;
      
      
      
      var $10 = HEAP[$W + ($i - 2) * 8];
      var $11 = $10 / Math.pow(2, 19);
      var $12 = $10 * Math.pow(2, 45);
      var $13 = Runtime.or64($11, $12);
      
      
      
      var $17 = HEAP[$W + ($i - 2) * 8];
      var $18 = $17 / Math.pow(2, 61);
      var $19 = $17 * Math.pow(2, 3);
      var $20 = Runtime.or64($18, $19);
      
      
      
      
      var $25 = HEAP[$W + ($i - 2) * 8] / Math.pow(2, 6);
      var $26 = Runtime.xor64($20, $13);
      var $27 = Runtime.xor64($26, $25);
      
      
      
      var $31 = HEAP[$W + ($i - 7) * 8];
      
      
      
      var $35 = HEAP[$W + ($i - 15) * 8];
      var $36 = $35 / Math.pow(2, 1);
      var $37 = $35 * Math.pow(2, 63);
      var $38 = Runtime.or64($36, $37);
      
      
      
      var $42 = HEAP[$W + ($i - 15) * 8];
      var $43 = $42 / Math.pow(2, 8);
      var $44 = $42 * Math.pow(2, 56);
      var $45 = Runtime.or64($43, $44);
      
      
      
      
      var $50 = HEAP[$W + ($i - 15) * 8] / Math.pow(2, 7);
      var $51 = Runtime.xor64($45, $38);
      var $52 = Runtime.xor64($51, $50);
      
      
      
      
      
      
      var $59 = $27 + $31 + HEAP[$W + ($i - 16) * 8] + $52;
      
      HEAP[$W + $6 * 8] = $59;
      
      var $62 = $i + 1;
      $i = $62;
      
      if ($62 <= 79) {
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
      
      
      
      
      
      var $69 = HEAP[$sha_info_addr + 8 + $i * 8];
      
      HEAP[$S + $i * 8] = $69;
      
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
      
      var $75 = HEAP[$S + 56];
      
      var $77 = HEAP[$S + 32];
      var $78 = unSign($77, 64, 1) / Math.pow(2, 14);
      var $79 = $77 * Math.pow(2, 50);
      var $80 = Runtime.or64($78, $79);
      
      var $82 = HEAP[$S + 32];
      var $83 = unSign($82, 64, 1) / Math.pow(2, 18);
      var $84 = $82 * Math.pow(2, 46);
      var $85 = Runtime.or64($83, $84);
      
      var $87 = HEAP[$S + 32];
      var $88 = unSign($87, 64, 1) / Math.pow(2, 41);
      var $89 = $87 * Math.pow(2, 23);
      var $90 = Runtime.or64($88, $89);
      var $91 = Runtime.xor64($85, $80);
      var $92 = Runtime.xor64($91, $90);
      
      var $94 = HEAP[$S + 48];
      
      var $96 = HEAP[$S + 32];
      
      var $98 = HEAP[$S + 40];
      
      var $100 = HEAP[$S + 48];
      var $101 = Runtime.xor64($100, $98);
      var $102 = Runtime.and64($101, $96);
      var $103 = Runtime.xor64($102, $94);
      
      
      
      
      
      
      $t0 = $75 + 0x428a2f98d728b000 + $92 + HEAP[$W] + $103;
      
      var $111 = HEAP[$S];
      var $112 = unSign($111, 64, 1) / Math.pow(2, 28);
      var $113 = $111 * Math.pow(2, 36);
      var $114 = Runtime.or64($112, $113);
      
      var $116 = HEAP[$S];
      var $117 = unSign($116, 64, 1) / Math.pow(2, 34);
      var $118 = $116 * Math.pow(2, 30);
      var $119 = Runtime.or64($117, $118);
      
      var $121 = HEAP[$S];
      var $122 = unSign($121, 64, 1) / Math.pow(2, 39);
      var $123 = $121 * Math.pow(2, 25);
      var $124 = Runtime.or64($122, $123);
      var $125 = Runtime.xor64($119, $114);
      var $126 = Runtime.xor64($125, $124);
      
      var $128 = HEAP[$S];
      
      var $130 = HEAP[$S + 8];
      var $131 = Runtime.or64($130, $128);
      
      var $133 = HEAP[$S + 16];
      var $134 = Runtime.and64($131, $133);
      
      var $136 = HEAP[$S];
      
      var $138 = HEAP[$S + 8];
      var $139 = Runtime.and64($138, $136);
      var $140 = Runtime.or64($139, $134);
      
      $t1 = $140 + $126;
      
      
      
      var $145 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $145;
      
      
      
      
      HEAP[$S + 56] = $t1 + $t0;
      
      var $152 = HEAP[$S + 48];
      
      var $154 = HEAP[$S + 24];
      var $155 = unSign($154, 64, 1) / Math.pow(2, 14);
      var $156 = $154 * Math.pow(2, 50);
      var $157 = Runtime.or64($155, $156);
      
      var $159 = HEAP[$S + 24];
      var $160 = unSign($159, 64, 1) / Math.pow(2, 18);
      var $161 = $159 * Math.pow(2, 46);
      var $162 = Runtime.or64($160, $161);
      
      var $164 = HEAP[$S + 24];
      var $165 = unSign($164, 64, 1) / Math.pow(2, 41);
      var $166 = $164 * Math.pow(2, 23);
      var $167 = Runtime.or64($165, $166);
      var $168 = Runtime.xor64($162, $157);
      var $169 = Runtime.xor64($168, $167);
      
      var $171 = HEAP[$S + 40];
      
      var $173 = HEAP[$S + 24];
      
      var $175 = HEAP[$S + 32];
      
      var $177 = HEAP[$S + 40];
      var $178 = Runtime.xor64($177, $175);
      var $179 = Runtime.and64($178, $173);
      var $180 = Runtime.xor64($179, $171);
      
      
      
      
      
      
      $t0 = $152 + 0x7137449123ef6400 + $169 + HEAP[$W + 8] + $180;
      
      var $188 = HEAP[$S + 56];
      var $189 = unSign($188, 64, 1) / Math.pow(2, 28);
      var $190 = $188 * Math.pow(2, 36);
      var $191 = Runtime.or64($189, $190);
      
      var $193 = HEAP[$S + 56];
      var $194 = unSign($193, 64, 1) / Math.pow(2, 34);
      var $195 = $193 * Math.pow(2, 30);
      var $196 = Runtime.or64($194, $195);
      
      var $198 = HEAP[$S + 56];
      var $199 = unSign($198, 64, 1) / Math.pow(2, 39);
      var $200 = $198 * Math.pow(2, 25);
      var $201 = Runtime.or64($199, $200);
      var $202 = Runtime.xor64($196, $191);
      var $203 = Runtime.xor64($202, $201);
      
      var $205 = HEAP[$S + 56];
      
      var $207 = HEAP[$S];
      var $208 = Runtime.or64($207, $205);
      
      var $210 = HEAP[$S + 8];
      var $211 = Runtime.and64($208, $210);
      
      var $213 = HEAP[$S + 56];
      
      var $215 = HEAP[$S];
      var $216 = Runtime.and64($215, $213);
      var $217 = Runtime.or64($216, $211);
      
      $t1 = $217 + $203;
      
      
      
      var $222 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $222;
      
      
      
      
      HEAP[$S + 48] = $t1 + $t0;
      
      var $229 = HEAP[$S + 40];
      
      var $231 = HEAP[$S + 16];
      var $232 = unSign($231, 64, 1) / Math.pow(2, 14);
      var $233 = $231 * Math.pow(2, 50);
      var $234 = Runtime.or64($232, $233);
      
      var $236 = HEAP[$S + 16];
      var $237 = unSign($236, 64, 1) / Math.pow(2, 18);
      var $238 = $236 * Math.pow(2, 46);
      var $239 = Runtime.or64($237, $238);
      
      var $241 = HEAP[$S + 16];
      var $242 = unSign($241, 64, 1) / Math.pow(2, 41);
      var $243 = $241 * Math.pow(2, 23);
      var $244 = Runtime.or64($242, $243);
      var $245 = Runtime.xor64($239, $234);
      var $246 = Runtime.xor64($245, $244);
      
      var $248 = HEAP[$S + 32];
      
      var $250 = HEAP[$S + 16];
      
      var $252 = HEAP[$S + 24];
      
      var $254 = HEAP[$S + 32];
      var $255 = Runtime.xor64($254, $252);
      var $256 = Runtime.and64($255, $250);
      var $257 = Runtime.xor64($256, $248);
      
      
      var $260 = $229 + -0x4a3f043013b2c400;
      
      
      
      $t0 = $260 + $246 + HEAP[$W + 16] + $257;
      
      var $265 = HEAP[$S + 48];
      var $266 = unSign($265, 64, 1) / Math.pow(2, 28);
      var $267 = $265 * Math.pow(2, 36);
      var $268 = Runtime.or64($266, $267);
      
      var $270 = HEAP[$S + 48];
      var $271 = unSign($270, 64, 1) / Math.pow(2, 34);
      var $272 = $270 * Math.pow(2, 30);
      var $273 = Runtime.or64($271, $272);
      
      var $275 = HEAP[$S + 48];
      var $276 = unSign($275, 64, 1) / Math.pow(2, 39);
      var $277 = $275 * Math.pow(2, 25);
      var $278 = Runtime.or64($276, $277);
      var $279 = Runtime.xor64($273, $268);
      var $280 = Runtime.xor64($279, $278);
      
      var $282 = HEAP[$S + 48];
      
      var $284 = HEAP[$S + 56];
      var $285 = Runtime.or64($284, $282);
      
      var $287 = HEAP[$S];
      var $288 = Runtime.and64($285, $287);
      
      var $290 = HEAP[$S + 48];
      
      var $292 = HEAP[$S + 56];
      var $293 = Runtime.and64($292, $290);
      var $294 = Runtime.or64($293, $288);
      
      $t1 = $294 + $280;
      
      
      
      var $299 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $299;
      
      
      
      
      HEAP[$S + 40] = $t1 + $t0;
      
      var $306 = HEAP[$S + 32];
      
      var $308 = HEAP[$S + 8];
      var $309 = unSign($308, 64, 1) / Math.pow(2, 14);
      var $310 = $308 * Math.pow(2, 50);
      var $311 = Runtime.or64($309, $310);
      
      var $313 = HEAP[$S + 8];
      var $314 = unSign($313, 64, 1) / Math.pow(2, 18);
      var $315 = $313 * Math.pow(2, 46);
      var $316 = Runtime.or64($314, $315);
      
      var $318 = HEAP[$S + 8];
      var $319 = unSign($318, 64, 1) / Math.pow(2, 41);
      var $320 = $318 * Math.pow(2, 23);
      var $321 = Runtime.or64($319, $320);
      var $322 = Runtime.xor64($316, $311);
      var $323 = Runtime.xor64($322, $321);
      
      var $325 = HEAP[$S + 24];
      
      var $327 = HEAP[$S + 8];
      
      var $329 = HEAP[$S + 16];
      
      var $331 = HEAP[$S + 24];
      var $332 = Runtime.xor64($331, $329);
      var $333 = Runtime.and64($332, $327);
      var $334 = Runtime.xor64($333, $325);
      
      
      var $337 = $306 + -0x164a245a7e762400;
      
      
      
      $t0 = $337 + $323 + HEAP[$W + 24] + $334;
      
      var $342 = HEAP[$S + 40];
      var $343 = unSign($342, 64, 1) / Math.pow(2, 28);
      var $344 = $342 * Math.pow(2, 36);
      var $345 = Runtime.or64($343, $344);
      
      var $347 = HEAP[$S + 40];
      var $348 = unSign($347, 64, 1) / Math.pow(2, 34);
      var $349 = $347 * Math.pow(2, 30);
      var $350 = Runtime.or64($348, $349);
      
      var $352 = HEAP[$S + 40];
      var $353 = unSign($352, 64, 1) / Math.pow(2, 39);
      var $354 = $352 * Math.pow(2, 25);
      var $355 = Runtime.or64($353, $354);
      var $356 = Runtime.xor64($350, $345);
      var $357 = Runtime.xor64($356, $355);
      
      var $359 = HEAP[$S + 40];
      
      var $361 = HEAP[$S + 48];
      var $362 = Runtime.or64($361, $359);
      
      var $364 = HEAP[$S + 56];
      var $365 = Runtime.and64($362, $364);
      
      var $367 = HEAP[$S + 40];
      
      var $369 = HEAP[$S + 48];
      var $370 = Runtime.and64($369, $367);
      var $371 = Runtime.or64($370, $365);
      
      $t1 = $371 + $357;
      
      
      
      var $376 = $t0 + HEAP[$S];
      
      HEAP[$S] = $376;
      
      
      
      
      HEAP[$S + 32] = $t1 + $t0;
      
      var $383 = HEAP[$S + 24];
      
      var $385 = HEAP[$S];
      var $386 = unSign($385, 64, 1) / Math.pow(2, 14);
      var $387 = $385 * Math.pow(2, 50);
      var $388 = Runtime.or64($386, $387);
      
      var $390 = HEAP[$S];
      var $391 = unSign($390, 64, 1) / Math.pow(2, 18);
      var $392 = $390 * Math.pow(2, 46);
      var $393 = Runtime.or64($391, $392);
      
      var $395 = HEAP[$S];
      var $396 = unSign($395, 64, 1) / Math.pow(2, 41);
      var $397 = $395 * Math.pow(2, 23);
      var $398 = Runtime.or64($396, $397);
      var $399 = Runtime.xor64($393, $388);
      var $400 = Runtime.xor64($399, $398);
      
      var $402 = HEAP[$S + 16];
      
      var $404 = HEAP[$S];
      
      var $406 = HEAP[$S + 8];
      
      var $408 = HEAP[$S + 16];
      var $409 = Runtime.xor64($408, $406);
      var $410 = Runtime.and64($409, $404);
      var $411 = Runtime.xor64($410, $402);
      
      
      
      
      
      
      $t0 = $383 + 413170340833845e4 + $400 + HEAP[$W + 32] + $411;
      
      var $419 = HEAP[$S + 32];
      var $420 = unSign($419, 64, 1) / Math.pow(2, 28);
      var $421 = $419 * Math.pow(2, 36);
      var $422 = Runtime.or64($420, $421);
      
      var $424 = HEAP[$S + 32];
      var $425 = unSign($424, 64, 1) / Math.pow(2, 34);
      var $426 = $424 * Math.pow(2, 30);
      var $427 = Runtime.or64($425, $426);
      
      var $429 = HEAP[$S + 32];
      var $430 = unSign($429, 64, 1) / Math.pow(2, 39);
      var $431 = $429 * Math.pow(2, 25);
      var $432 = Runtime.or64($430, $431);
      var $433 = Runtime.xor64($427, $422);
      var $434 = Runtime.xor64($433, $432);
      
      var $436 = HEAP[$S + 32];
      
      var $438 = HEAP[$S + 40];
      var $439 = Runtime.or64($438, $436);
      
      var $441 = HEAP[$S + 48];
      var $442 = Runtime.and64($439, $441);
      
      var $444 = HEAP[$S + 32];
      
      var $446 = HEAP[$S + 40];
      var $447 = Runtime.and64($446, $444);
      var $448 = Runtime.or64($447, $442);
      
      $t1 = $448 + $434;
      
      
      
      var $453 = $t0 + HEAP[$S + 56];
      
      HEAP[$S + 56] = $453;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      var $460 = HEAP[$S + 16];
      
      var $462 = HEAP[$S + 56];
      var $463 = unSign($462, 64, 1) / Math.pow(2, 14);
      var $464 = $462 * Math.pow(2, 50);
      var $465 = Runtime.or64($463, $464);
      
      var $467 = HEAP[$S + 56];
      var $468 = unSign($467, 64, 1) / Math.pow(2, 18);
      var $469 = $467 * Math.pow(2, 46);
      var $470 = Runtime.or64($468, $469);
      
      var $472 = HEAP[$S + 56];
      var $473 = unSign($472, 64, 1) / Math.pow(2, 41);
      var $474 = $472 * Math.pow(2, 23);
      var $475 = Runtime.or64($473, $474);
      var $476 = Runtime.xor64($470, $465);
      var $477 = Runtime.xor64($476, $475);
      
      var $479 = HEAP[$S + 8];
      
      var $481 = HEAP[$S + 56];
      
      var $483 = HEAP[$S];
      
      var $485 = HEAP[$S + 8];
      var $486 = Runtime.xor64($485, $483);
      var $487 = Runtime.and64($486, $481);
      var $488 = Runtime.xor64($487, $479);
      
      
      
      
      
      
      $t0 = $460 + 0x59f111f1b605d000 + $477 + HEAP[$W + 40] + $488;
      
      var $496 = HEAP[$S + 24];
      var $497 = unSign($496, 64, 1) / Math.pow(2, 28);
      var $498 = $496 * Math.pow(2, 36);
      var $499 = Runtime.or64($497, $498);
      
      var $501 = HEAP[$S + 24];
      var $502 = unSign($501, 64, 1) / Math.pow(2, 34);
      var $503 = $501 * Math.pow(2, 30);
      var $504 = Runtime.or64($502, $503);
      
      var $506 = HEAP[$S + 24];
      var $507 = unSign($506, 64, 1) / Math.pow(2, 39);
      var $508 = $506 * Math.pow(2, 25);
      var $509 = Runtime.or64($507, $508);
      var $510 = Runtime.xor64($504, $499);
      var $511 = Runtime.xor64($510, $509);
      
      var $513 = HEAP[$S + 24];
      
      var $515 = HEAP[$S + 32];
      var $516 = Runtime.or64($515, $513);
      
      var $518 = HEAP[$S + 40];
      var $519 = Runtime.and64($516, $518);
      
      var $521 = HEAP[$S + 24];
      
      var $523 = HEAP[$S + 32];
      var $524 = Runtime.and64($523, $521);
      var $525 = Runtime.or64($524, $519);
      
      $t1 = $525 + $511;
      
      
      
      var $530 = $t0 + HEAP[$S + 48];
      
      HEAP[$S + 48] = $530;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      var $537 = HEAP[$S + 8];
      
      var $539 = HEAP[$S + 48];
      var $540 = unSign($539, 64, 1) / Math.pow(2, 14);
      var $541 = $539 * Math.pow(2, 50);
      var $542 = Runtime.or64($540, $541);
      
      var $544 = HEAP[$S + 48];
      var $545 = unSign($544, 64, 1) / Math.pow(2, 18);
      var $546 = $544 * Math.pow(2, 46);
      var $547 = Runtime.or64($545, $546);
      
      var $549 = HEAP[$S + 48];
      var $550 = unSign($549, 64, 1) / Math.pow(2, 41);
      var $551 = $549 * Math.pow(2, 23);
      var $552 = Runtime.or64($550, $551);
      var $553 = Runtime.xor64($547, $542);
      var $554 = Runtime.xor64($553, $552);
      
      var $556 = HEAP[$S];
      
      var $558 = HEAP[$S + 48];
      
      var $560 = HEAP[$S + 56];
      
      var $562 = HEAP[$S];
      var $563 = Runtime.xor64($562, $560);
      var $564 = Runtime.and64($563, $558);
      var $565 = Runtime.xor64($564, $556);
      
      
      var $568 = $537 + -0x6dc07d5b50e6b000;
      
      
      
      $t0 = $568 + $554 + HEAP[$W + 48] + $565;
      
      var $573 = HEAP[$S + 16];
      var $574 = unSign($573, 64, 1) / Math.pow(2, 28);
      var $575 = $573 * Math.pow(2, 36);
      var $576 = Runtime.or64($574, $575);
      
      var $578 = HEAP[$S + 16];
      var $579 = unSign($578, 64, 1) / Math.pow(2, 34);
      var $580 = $578 * Math.pow(2, 30);
      var $581 = Runtime.or64($579, $580);
      
      var $583 = HEAP[$S + 16];
      var $584 = unSign($583, 64, 1) / Math.pow(2, 39);
      var $585 = $583 * Math.pow(2, 25);
      var $586 = Runtime.or64($584, $585);
      var $587 = Runtime.xor64($581, $576);
      var $588 = Runtime.xor64($587, $586);
      
      var $590 = HEAP[$S + 16];
      
      var $592 = HEAP[$S + 24];
      var $593 = Runtime.or64($592, $590);
      
      var $595 = HEAP[$S + 32];
      var $596 = Runtime.and64($593, $595);
      
      var $598 = HEAP[$S + 16];
      
      var $600 = HEAP[$S + 24];
      var $601 = Runtime.and64($600, $598);
      var $602 = Runtime.or64($601, $596);
      
      $t1 = $602 + $588;
      
      
      
      var $607 = $t0 + HEAP[$S + 40];
      
      HEAP[$S + 40] = $607;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      var $614 = HEAP[$S];
      
      var $616 = HEAP[$S + 40];
      var $617 = unSign($616, 64, 1) / Math.pow(2, 14);
      var $618 = $616 * Math.pow(2, 50);
      var $619 = Runtime.or64($617, $618);
      
      var $621 = HEAP[$S + 40];
      var $622 = unSign($621, 64, 1) / Math.pow(2, 18);
      var $623 = $621 * Math.pow(2, 46);
      var $624 = Runtime.or64($622, $623);
      
      var $626 = HEAP[$S + 40];
      var $627 = unSign($626, 64, 1) / Math.pow(2, 41);
      var $628 = $626 * Math.pow(2, 23);
      var $629 = Runtime.or64($627, $628);
      var $630 = Runtime.xor64($624, $619);
      var $631 = Runtime.xor64($630, $629);
      
      var $633 = HEAP[$S + 56];
      
      var $635 = HEAP[$S + 40];
      
      var $637 = HEAP[$S + 48];
      
      var $639 = HEAP[$S + 56];
      var $640 = Runtime.xor64($639, $637);
      var $641 = Runtime.and64($640, $635);
      var $642 = Runtime.xor64($641, $633);
      
      
      var $645 = $614 + -0x54e3a12a25928000;
      
      
      
      $t0 = $645 + $631 + HEAP[$W + 56] + $642;
      
      var $650 = HEAP[$S + 8];
      var $651 = unSign($650, 64, 1) / Math.pow(2, 28);
      var $652 = $650 * Math.pow(2, 36);
      var $653 = Runtime.or64($651, $652);
      
      var $655 = HEAP[$S + 8];
      var $656 = unSign($655, 64, 1) / Math.pow(2, 34);
      var $657 = $655 * Math.pow(2, 30);
      var $658 = Runtime.or64($656, $657);
      
      var $660 = HEAP[$S + 8];
      var $661 = unSign($660, 64, 1) / Math.pow(2, 39);
      var $662 = $660 * Math.pow(2, 25);
      var $663 = Runtime.or64($661, $662);
      var $664 = Runtime.xor64($658, $653);
      var $665 = Runtime.xor64($664, $663);
      
      var $667 = HEAP[$S + 8];
      
      var $669 = HEAP[$S + 16];
      var $670 = Runtime.or64($669, $667);
      
      var $672 = HEAP[$S + 24];
      var $673 = Runtime.and64($670, $672);
      
      var $675 = HEAP[$S + 8];
      
      var $677 = HEAP[$S + 16];
      var $678 = Runtime.and64($677, $675);
      var $679 = Runtime.or64($678, $673);
      
      $t1 = $679 + $665;
      
      
      
      var $684 = $t0 + HEAP[$S + 32];
      
      HEAP[$S + 32] = $684;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      var $691 = HEAP[$S + 56];
      
      var $693 = HEAP[$S + 32];
      var $694 = unSign($693, 64, 1) / Math.pow(2, 14);
      var $695 = $693 * Math.pow(2, 50);
      var $696 = Runtime.or64($694, $695);
      
      var $698 = HEAP[$S + 32];
      var $699 = unSign($698, 64, 1) / Math.pow(2, 18);
      var $700 = $698 * Math.pow(2, 46);
      var $701 = Runtime.or64($699, $700);
      
      var $703 = HEAP[$S + 32];
      var $704 = unSign($703, 64, 1) / Math.pow(2, 41);
      var $705 = $703 * Math.pow(2, 23);
      var $706 = Runtime.or64($704, $705);
      var $707 = Runtime.xor64($701, $696);
      var $708 = Runtime.xor64($707, $706);
      
      var $710 = HEAP[$S + 48];
      
      var $712 = HEAP[$S + 32];
      
      var $714 = HEAP[$S + 40];
      
      var $716 = HEAP[$S + 48];
      var $717 = Runtime.xor64($716, $714);
      var $718 = Runtime.and64($717, $712);
      var $719 = Runtime.xor64($718, $710);
      
      
      var $722 = $691 + -0x27f855675cfcfe00;
      
      
      
      $t0 = $722 + $708 + HEAP[$W + 64] + $719;
      
      var $727 = HEAP[$S];
      var $728 = unSign($727, 64, 1) / Math.pow(2, 28);
      var $729 = $727 * Math.pow(2, 36);
      var $730 = Runtime.or64($728, $729);
      
      var $732 = HEAP[$S];
      var $733 = unSign($732, 64, 1) / Math.pow(2, 34);
      var $734 = $732 * Math.pow(2, 30);
      var $735 = Runtime.or64($733, $734);
      
      var $737 = HEAP[$S];
      var $738 = unSign($737, 64, 1) / Math.pow(2, 39);
      var $739 = $737 * Math.pow(2, 25);
      var $740 = Runtime.or64($738, $739);
      var $741 = Runtime.xor64($735, $730);
      var $742 = Runtime.xor64($741, $740);
      
      var $744 = HEAP[$S];
      
      var $746 = HEAP[$S + 8];
      var $747 = Runtime.or64($746, $744);
      
      var $749 = HEAP[$S + 16];
      var $750 = Runtime.and64($747, $749);
      
      var $752 = HEAP[$S];
      
      var $754 = HEAP[$S + 8];
      var $755 = Runtime.and64($754, $752);
      var $756 = Runtime.or64($755, $750);
      
      $t1 = $756 + $742;
      
      
      
      var $761 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $761;
      
      
      
      
      HEAP[$S + 56] = $t1 + $t0;
      
      var $768 = HEAP[$S + 48];
      
      var $770 = HEAP[$S + 24];
      var $771 = unSign($770, 64, 1) / Math.pow(2, 14);
      var $772 = $770 * Math.pow(2, 50);
      var $773 = Runtime.or64($771, $772);
      
      var $775 = HEAP[$S + 24];
      var $776 = unSign($775, 64, 1) / Math.pow(2, 18);
      var $777 = $775 * Math.pow(2, 46);
      var $778 = Runtime.or64($776, $777);
      
      var $780 = HEAP[$S + 24];
      var $781 = unSign($780, 64, 1) / Math.pow(2, 41);
      var $782 = $780 * Math.pow(2, 23);
      var $783 = Runtime.or64($781, $782);
      var $784 = Runtime.xor64($778, $773);
      var $785 = Runtime.xor64($784, $783);
      
      var $787 = HEAP[$S + 40];
      
      var $789 = HEAP[$S + 24];
      
      var $791 = HEAP[$S + 32];
      
      var $793 = HEAP[$S + 40];
      var $794 = Runtime.xor64($793, $791);
      var $795 = Runtime.and64($794, $789);
      var $796 = Runtime.xor64($795, $787);
      
      
      
      
      
      
      $t0 = $768 + 0x12835b0145707000 + $785 + HEAP[$W + 72] + $796;
      
      var $804 = HEAP[$S + 56];
      var $805 = unSign($804, 64, 1) / Math.pow(2, 28);
      var $806 = $804 * Math.pow(2, 36);
      var $807 = Runtime.or64($805, $806);
      
      var $809 = HEAP[$S + 56];
      var $810 = unSign($809, 64, 1) / Math.pow(2, 34);
      var $811 = $809 * Math.pow(2, 30);
      var $812 = Runtime.or64($810, $811);
      
      var $814 = HEAP[$S + 56];
      var $815 = unSign($814, 64, 1) / Math.pow(2, 39);
      var $816 = $814 * Math.pow(2, 25);
      var $817 = Runtime.or64($815, $816);
      var $818 = Runtime.xor64($812, $807);
      var $819 = Runtime.xor64($818, $817);
      
      var $821 = HEAP[$S + 56];
      
      var $823 = HEAP[$S];
      var $824 = Runtime.or64($823, $821);
      
      var $826 = HEAP[$S + 8];
      var $827 = Runtime.and64($824, $826);
      
      var $829 = HEAP[$S + 56];
      
      var $831 = HEAP[$S];
      var $832 = Runtime.and64($831, $829);
      var $833 = Runtime.or64($832, $827);
      
      $t1 = $833 + $819;
      
      
      
      var $838 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $838;
      
      
      
      
      HEAP[$S + 48] = $t1 + $t0;
      
      var $845 = HEAP[$S + 40];
      
      var $847 = HEAP[$S + 16];
      var $848 = unSign($847, 64, 1) / Math.pow(2, 14);
      var $849 = $847 * Math.pow(2, 50);
      var $850 = Runtime.or64($848, $849);
      
      var $852 = HEAP[$S + 16];
      var $853 = unSign($852, 64, 1) / Math.pow(2, 18);
      var $854 = $852 * Math.pow(2, 46);
      var $855 = Runtime.or64($853, $854);
      
      var $857 = HEAP[$S + 16];
      var $858 = unSign($857, 64, 1) / Math.pow(2, 41);
      var $859 = $857 * Math.pow(2, 23);
      var $860 = Runtime.or64($858, $859);
      var $861 = Runtime.xor64($855, $850);
      var $862 = Runtime.xor64($861, $860);
      
      var $864 = HEAP[$S + 32];
      
      var $866 = HEAP[$S + 16];
      
      var $868 = HEAP[$S + 24];
      
      var $870 = HEAP[$S + 32];
      var $871 = Runtime.xor64($870, $868);
      var $872 = Runtime.and64($871, $866);
      var $873 = Runtime.xor64($872, $864);
      
      
      
      
      
      
      $t0 = $845 + 0x243185be4ee4b200 + $862 + HEAP[$W + 80] + $873;
      
      var $881 = HEAP[$S + 48];
      var $882 = unSign($881, 64, 1) / Math.pow(2, 28);
      var $883 = $881 * Math.pow(2, 36);
      var $884 = Runtime.or64($882, $883);
      
      var $886 = HEAP[$S + 48];
      var $887 = unSign($886, 64, 1) / Math.pow(2, 34);
      var $888 = $886 * Math.pow(2, 30);
      var $889 = Runtime.or64($887, $888);
      
      var $891 = HEAP[$S + 48];
      var $892 = unSign($891, 64, 1) / Math.pow(2, 39);
      var $893 = $891 * Math.pow(2, 25);
      var $894 = Runtime.or64($892, $893);
      var $895 = Runtime.xor64($889, $884);
      var $896 = Runtime.xor64($895, $894);
      
      var $898 = HEAP[$S + 48];
      
      var $900 = HEAP[$S + 56];
      var $901 = Runtime.or64($900, $898);
      
      var $903 = HEAP[$S];
      var $904 = Runtime.and64($901, $903);
      
      var $906 = HEAP[$S + 48];
      
      var $908 = HEAP[$S + 56];
      var $909 = Runtime.and64($908, $906);
      var $910 = Runtime.or64($909, $904);
      
      $t1 = $910 + $896;
      
      
      
      var $915 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $915;
      
      
      
      
      HEAP[$S + 40] = $t1 + $t0;
      
      var $922 = HEAP[$S + 32];
      
      var $924 = HEAP[$S + 8];
      var $925 = unSign($924, 64, 1) / Math.pow(2, 14);
      var $926 = $924 * Math.pow(2, 50);
      var $927 = Runtime.or64($925, $926);
      
      var $929 = HEAP[$S + 8];
      var $930 = unSign($929, 64, 1) / Math.pow(2, 18);
      var $931 = $929 * Math.pow(2, 46);
      var $932 = Runtime.or64($930, $931);
      
      var $934 = HEAP[$S + 8];
      var $935 = unSign($934, 64, 1) / Math.pow(2, 41);
      var $936 = $934 * Math.pow(2, 23);
      var $937 = Runtime.or64($935, $936);
      var $938 = Runtime.xor64($932, $927);
      var $939 = Runtime.xor64($938, $937);
      
      var $941 = HEAP[$S + 24];
      
      var $943 = HEAP[$S + 8];
      
      var $945 = HEAP[$S + 16];
      
      var $947 = HEAP[$S + 24];
      var $948 = Runtime.xor64($947, $945);
      var $949 = Runtime.and64($948, $943);
      var $950 = Runtime.xor64($949, $941);
      
      
      
      
      
      
      $t0 = $922 + 0x550c7dc3d5ffb400 + $939 + HEAP[$W + 88] + $950;
      
      var $958 = HEAP[$S + 40];
      var $959 = unSign($958, 64, 1) / Math.pow(2, 28);
      var $960 = $958 * Math.pow(2, 36);
      var $961 = Runtime.or64($959, $960);
      
      var $963 = HEAP[$S + 40];
      var $964 = unSign($963, 64, 1) / Math.pow(2, 34);
      var $965 = $963 * Math.pow(2, 30);
      var $966 = Runtime.or64($964, $965);
      
      var $968 = HEAP[$S + 40];
      var $969 = unSign($968, 64, 1) / Math.pow(2, 39);
      var $970 = $968 * Math.pow(2, 25);
      var $971 = Runtime.or64($969, $970);
      var $972 = Runtime.xor64($966, $961);
      var $973 = Runtime.xor64($972, $971);
      
      var $975 = HEAP[$S + 40];
      
      var $977 = HEAP[$S + 48];
      var $978 = Runtime.or64($977, $975);
      
      var $980 = HEAP[$S + 56];
      var $981 = Runtime.and64($978, $980);
      
      var $983 = HEAP[$S + 40];
      
      var $985 = HEAP[$S + 48];
      var $986 = Runtime.and64($985, $983);
      var $987 = Runtime.or64($986, $981);
      
      $t1 = $987 + $973;
      
      
      
      var $992 = $t0 + HEAP[$S];
      
      HEAP[$S] = $992;
      
      
      
      
      HEAP[$S + 32] = $t1 + $t0;
      
      var $999 = HEAP[$S + 24];
      
      var $1001 = HEAP[$S];
      var $1002 = unSign($1001, 64, 1) / Math.pow(2, 14);
      var $1003 = $1001 * Math.pow(2, 50);
      var $1004 = Runtime.or64($1002, $1003);
      
      var $1006 = HEAP[$S];
      var $1007 = unSign($1006, 64, 1) / Math.pow(2, 18);
      var $1008 = $1006 * Math.pow(2, 46);
      var $1009 = Runtime.or64($1007, $1008);
      
      var $1011 = HEAP[$S];
      var $1012 = unSign($1011, 64, 1) / Math.pow(2, 41);
      var $1013 = $1011 * Math.pow(2, 23);
      var $1014 = Runtime.or64($1012, $1013);
      var $1015 = Runtime.xor64($1009, $1004);
      var $1016 = Runtime.xor64($1015, $1014);
      
      var $1018 = HEAP[$S + 16];
      
      var $1020 = HEAP[$S];
      
      var $1022 = HEAP[$S + 8];
      
      var $1024 = HEAP[$S + 16];
      var $1025 = Runtime.xor64($1024, $1022);
      var $1026 = Runtime.and64($1025, $1020);
      var $1027 = Runtime.xor64($1026, $1018);
      
      
      
      
      
      
      $t0 = $999 + 0x72be5d74f27b8800 + $1016 + HEAP[$W + 96] + $1027;
      
      var $1035 = HEAP[$S + 32];
      var $1036 = unSign($1035, 64, 1) / Math.pow(2, 28);
      var $1037 = $1035 * Math.pow(2, 36);
      var $1038 = Runtime.or64($1036, $1037);
      
      var $1040 = HEAP[$S + 32];
      var $1041 = unSign($1040, 64, 1) / Math.pow(2, 34);
      var $1042 = $1040 * Math.pow(2, 30);
      var $1043 = Runtime.or64($1041, $1042);
      
      var $1045 = HEAP[$S + 32];
      var $1046 = unSign($1045, 64, 1) / Math.pow(2, 39);
      var $1047 = $1045 * Math.pow(2, 25);
      var $1048 = Runtime.or64($1046, $1047);
      var $1049 = Runtime.xor64($1043, $1038);
      var $1050 = Runtime.xor64($1049, $1048);
      
      var $1052 = HEAP[$S + 32];
      
      var $1054 = HEAP[$S + 40];
      var $1055 = Runtime.or64($1054, $1052);
      
      var $1057 = HEAP[$S + 48];
      var $1058 = Runtime.and64($1055, $1057);
      
      var $1060 = HEAP[$S + 32];
      
      var $1062 = HEAP[$S + 40];
      var $1063 = Runtime.and64($1062, $1060);
      var $1064 = Runtime.or64($1063, $1058);
      
      $t1 = $1064 + $1050;
      
      
      
      var $1069 = $t0 + HEAP[$S + 56];
      
      HEAP[$S + 56] = $1069;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      var $1076 = HEAP[$S + 16];
      
      var $1078 = HEAP[$S + 56];
      var $1079 = unSign($1078, 64, 1) / Math.pow(2, 14);
      var $1080 = $1078 * Math.pow(2, 50);
      var $1081 = Runtime.or64($1079, $1080);
      
      var $1083 = HEAP[$S + 56];
      var $1084 = unSign($1083, 64, 1) / Math.pow(2, 18);
      var $1085 = $1083 * Math.pow(2, 46);
      var $1086 = Runtime.or64($1084, $1085);
      
      var $1088 = HEAP[$S + 56];
      var $1089 = unSign($1088, 64, 1) / Math.pow(2, 41);
      var $1090 = $1088 * Math.pow(2, 23);
      var $1091 = Runtime.or64($1089, $1090);
      var $1092 = Runtime.xor64($1086, $1081);
      var $1093 = Runtime.xor64($1092, $1091);
      
      var $1095 = HEAP[$S + 8];
      
      var $1097 = HEAP[$S + 56];
      
      var $1099 = HEAP[$S];
      
      var $1101 = HEAP[$S + 8];
      var $1102 = Runtime.xor64($1101, $1099);
      var $1103 = Runtime.and64($1102, $1097);
      var $1104 = Runtime.xor64($1103, $1095);
      
      
      var $1107 = $1076 + -0x7f214e01c4e96800;
      
      
      
      $t0 = $1107 + $1093 + HEAP[$W + 104] + $1104;
      
      var $1112 = HEAP[$S + 24];
      var $1113 = unSign($1112, 64, 1) / Math.pow(2, 28);
      var $1114 = $1112 * Math.pow(2, 36);
      var $1115 = Runtime.or64($1113, $1114);
      
      var $1117 = HEAP[$S + 24];
      var $1118 = unSign($1117, 64, 1) / Math.pow(2, 34);
      var $1119 = $1117 * Math.pow(2, 30);
      var $1120 = Runtime.or64($1118, $1119);
      
      var $1122 = HEAP[$S + 24];
      var $1123 = unSign($1122, 64, 1) / Math.pow(2, 39);
      var $1124 = $1122 * Math.pow(2, 25);
      var $1125 = Runtime.or64($1123, $1124);
      var $1126 = Runtime.xor64($1120, $1115);
      var $1127 = Runtime.xor64($1126, $1125);
      
      var $1129 = HEAP[$S + 24];
      
      var $1131 = HEAP[$S + 32];
      var $1132 = Runtime.or64($1131, $1129);
      
      var $1134 = HEAP[$S + 40];
      var $1135 = Runtime.and64($1132, $1134);
      
      var $1137 = HEAP[$S + 24];
      
      var $1139 = HEAP[$S + 32];
      var $1140 = Runtime.and64($1139, $1137);
      var $1141 = Runtime.or64($1140, $1135);
      
      $t1 = $1141 + $1127;
      
      
      
      var $1146 = $t0 + HEAP[$S + 48];
      
      HEAP[$S + 48] = $1146;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      var $1153 = HEAP[$S + 8];
      
      var $1155 = HEAP[$S + 48];
      var $1156 = unSign($1155, 64, 1) / Math.pow(2, 14);
      var $1157 = $1155 * Math.pow(2, 50);
      var $1158 = Runtime.or64($1156, $1157);
      
      var $1160 = HEAP[$S + 48];
      var $1161 = unSign($1160, 64, 1) / Math.pow(2, 18);
      var $1162 = $1160 * Math.pow(2, 46);
      var $1163 = Runtime.or64($1161, $1162);
      
      var $1165 = HEAP[$S + 48];
      var $1166 = unSign($1165, 64, 1) / Math.pow(2, 41);
      var $1167 = $1165 * Math.pow(2, 23);
      var $1168 = Runtime.or64($1166, $1167);
      var $1169 = Runtime.xor64($1163, $1158);
      var $1170 = Runtime.xor64($1169, $1168);
      
      var $1172 = HEAP[$S];
      
      var $1174 = HEAP[$S + 48];
      
      var $1176 = HEAP[$S + 56];
      
      var $1178 = HEAP[$S];
      var $1179 = Runtime.xor64($1178, $1176);
      var $1180 = Runtime.and64($1179, $1174);
      var $1181 = Runtime.xor64($1180, $1172);
      
      
      var $1184 = $1153 + -0x6423f958da38ec00;
      
      
      
      $t0 = $1184 + $1170 + HEAP[$W + 112] + $1181;
      
      var $1189 = HEAP[$S + 16];
      var $1190 = unSign($1189, 64, 1) / Math.pow(2, 28);
      var $1191 = $1189 * Math.pow(2, 36);
      var $1192 = Runtime.or64($1190, $1191);
      
      var $1194 = HEAP[$S + 16];
      var $1195 = unSign($1194, 64, 1) / Math.pow(2, 34);
      var $1196 = $1194 * Math.pow(2, 30);
      var $1197 = Runtime.or64($1195, $1196);
      
      var $1199 = HEAP[$S + 16];
      var $1200 = unSign($1199, 64, 1) / Math.pow(2, 39);
      var $1201 = $1199 * Math.pow(2, 25);
      var $1202 = Runtime.or64($1200, $1201);
      var $1203 = Runtime.xor64($1197, $1192);
      var $1204 = Runtime.xor64($1203, $1202);
      
      var $1206 = HEAP[$S + 16];
      
      var $1208 = HEAP[$S + 24];
      var $1209 = Runtime.or64($1208, $1206);
      
      var $1211 = HEAP[$S + 32];
      var $1212 = Runtime.and64($1209, $1211);
      
      var $1214 = HEAP[$S + 16];
      
      var $1216 = HEAP[$S + 24];
      var $1217 = Runtime.and64($1216, $1214);
      var $1218 = Runtime.or64($1217, $1212);
      
      $t1 = $1218 + $1204;
      
      
      
      var $1223 = $t0 + HEAP[$S + 40];
      
      HEAP[$S + 40] = $1223;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      var $1230 = HEAP[$S];
      
      var $1232 = HEAP[$S + 40];
      var $1233 = unSign($1232, 64, 1) / Math.pow(2, 14);
      var $1234 = $1232 * Math.pow(2, 50);
      var $1235 = Runtime.or64($1233, $1234);
      
      var $1237 = HEAP[$S + 40];
      var $1238 = unSign($1237, 64, 1) / Math.pow(2, 18);
      var $1239 = $1237 * Math.pow(2, 46);
      var $1240 = Runtime.or64($1238, $1239);
      
      var $1242 = HEAP[$S + 40];
      var $1243 = unSign($1242, 64, 1) / Math.pow(2, 41);
      var $1244 = $1242 * Math.pow(2, 23);
      var $1245 = Runtime.or64($1243, $1244);
      var $1246 = Runtime.xor64($1240, $1235);
      var $1247 = Runtime.xor64($1246, $1245);
      
      var $1249 = HEAP[$S + 56];
      
      var $1251 = HEAP[$S + 40];
      
      var $1253 = HEAP[$S + 48];
      
      var $1255 = HEAP[$S + 56];
      var $1256 = Runtime.xor64($1255, $1253);
      var $1257 = Runtime.and64($1256, $1251);
      var $1258 = Runtime.xor64($1257, $1249);
      
      
      var $1261 = $1230 + -0x3e640e8b3096da00;
      
      
      
      $t0 = $1261 + $1247 + HEAP[$W + 120] + $1258;
      
      var $1266 = HEAP[$S + 8];
      var $1267 = unSign($1266, 64, 1) / Math.pow(2, 28);
      var $1268 = $1266 * Math.pow(2, 36);
      var $1269 = Runtime.or64($1267, $1268);
      
      var $1271 = HEAP[$S + 8];
      var $1272 = unSign($1271, 64, 1) / Math.pow(2, 34);
      var $1273 = $1271 * Math.pow(2, 30);
      var $1274 = Runtime.or64($1272, $1273);
      
      var $1276 = HEAP[$S + 8];
      var $1277 = unSign($1276, 64, 1) / Math.pow(2, 39);
      var $1278 = $1276 * Math.pow(2, 25);
      var $1279 = Runtime.or64($1277, $1278);
      var $1280 = Runtime.xor64($1274, $1269);
      var $1281 = Runtime.xor64($1280, $1279);
      
      var $1283 = HEAP[$S + 8];
      
      var $1285 = HEAP[$S + 16];
      var $1286 = Runtime.or64($1285, $1283);
      
      var $1288 = HEAP[$S + 24];
      var $1289 = Runtime.and64($1286, $1288);
      
      var $1291 = HEAP[$S + 8];
      
      var $1293 = HEAP[$S + 16];
      var $1294 = Runtime.and64($1293, $1291);
      var $1295 = Runtime.or64($1294, $1289);
      
      $t1 = $1295 + $1281;
      
      
      
      var $1300 = $t0 + HEAP[$S + 32];
      
      HEAP[$S + 32] = $1300;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      var $1307 = HEAP[$S + 56];
      
      var $1309 = HEAP[$S + 32];
      var $1310 = unSign($1309, 64, 1) / Math.pow(2, 14);
      var $1311 = $1309 * Math.pow(2, 50);
      var $1312 = Runtime.or64($1310, $1311);
      
      var $1314 = HEAP[$S + 32];
      var $1315 = unSign($1314, 64, 1) / Math.pow(2, 18);
      var $1316 = $1314 * Math.pow(2, 46);
      var $1317 = Runtime.or64($1315, $1316);
      
      var $1319 = HEAP[$S + 32];
      var $1320 = unSign($1319, 64, 1) / Math.pow(2, 41);
      var $1321 = $1319 * Math.pow(2, 23);
      var $1322 = Runtime.or64($1320, $1321);
      var $1323 = Runtime.xor64($1317, $1312);
      var $1324 = Runtime.xor64($1323, $1322);
      
      var $1326 = HEAP[$S + 48];
      
      var $1328 = HEAP[$S + 32];
      
      var $1330 = HEAP[$S + 40];
      
      var $1332 = HEAP[$S + 48];
      var $1333 = Runtime.xor64($1332, $1330);
      var $1334 = Runtime.and64($1333, $1328);
      var $1335 = Runtime.xor64($1334, $1326);
      
      
      var $1338 = $1307 + -0x1b64963e610eb500;
      
      
      
      $t0 = $1338 + $1324 + HEAP[$W + 128] + $1335;
      
      var $1343 = HEAP[$S];
      var $1344 = unSign($1343, 64, 1) / Math.pow(2, 28);
      var $1345 = $1343 * Math.pow(2, 36);
      var $1346 = Runtime.or64($1344, $1345);
      
      var $1348 = HEAP[$S];
      var $1349 = unSign($1348, 64, 1) / Math.pow(2, 34);
      var $1350 = $1348 * Math.pow(2, 30);
      var $1351 = Runtime.or64($1349, $1350);
      
      var $1353 = HEAP[$S];
      var $1354 = unSign($1353, 64, 1) / Math.pow(2, 39);
      var $1355 = $1353 * Math.pow(2, 25);
      var $1356 = Runtime.or64($1354, $1355);
      var $1357 = Runtime.xor64($1351, $1346);
      var $1358 = Runtime.xor64($1357, $1356);
      
      var $1360 = HEAP[$S];
      
      var $1362 = HEAP[$S + 8];
      var $1363 = Runtime.or64($1362, $1360);
      
      var $1365 = HEAP[$S + 16];
      var $1366 = Runtime.and64($1363, $1365);
      
      var $1368 = HEAP[$S];
      
      var $1370 = HEAP[$S + 8];
      var $1371 = Runtime.and64($1370, $1368);
      var $1372 = Runtime.or64($1371, $1366);
      
      $t1 = $1372 + $1358;
      
      
      
      var $1377 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $1377;
      
      
      
      
      HEAP[$S + 56] = $t1 + $t0;
      
      var $1384 = HEAP[$S + 48];
      
      var $1386 = HEAP[$S + 24];
      var $1387 = unSign($1386, 64, 1) / Math.pow(2, 14);
      var $1388 = $1386 * Math.pow(2, 50);
      var $1389 = Runtime.or64($1387, $1388);
      
      var $1391 = HEAP[$S + 24];
      var $1392 = unSign($1391, 64, 1) / Math.pow(2, 18);
      var $1393 = $1391 * Math.pow(2, 46);
      var $1394 = Runtime.or64($1392, $1393);
      
      var $1396 = HEAP[$S + 24];
      var $1397 = unSign($1396, 64, 1) / Math.pow(2, 41);
      var $1398 = $1396 * Math.pow(2, 23);
      var $1399 = Runtime.or64($1397, $1398);
      var $1400 = Runtime.xor64($1394, $1389);
      var $1401 = Runtime.xor64($1400, $1399);
      
      var $1403 = HEAP[$S + 40];
      
      var $1405 = HEAP[$S + 24];
      
      var $1407 = HEAP[$S + 32];
      
      var $1409 = HEAP[$S + 40];
      var $1410 = Runtime.xor64($1409, $1407);
      var $1411 = Runtime.and64($1410, $1405);
      var $1412 = Runtime.xor64($1411, $1403);
      
      
      var $1415 = $1384 + -0x1041b879c7b0da00;
      
      
      
      $t0 = $1415 + $1401 + HEAP[$W + 136] + $1412;
      
      var $1420 = HEAP[$S + 56];
      var $1421 = unSign($1420, 64, 1) / Math.pow(2, 28);
      var $1422 = $1420 * Math.pow(2, 36);
      var $1423 = Runtime.or64($1421, $1422);
      
      var $1425 = HEAP[$S + 56];
      var $1426 = unSign($1425, 64, 1) / Math.pow(2, 34);
      var $1427 = $1425 * Math.pow(2, 30);
      var $1428 = Runtime.or64($1426, $1427);
      
      var $1430 = HEAP[$S + 56];
      var $1431 = unSign($1430, 64, 1) / Math.pow(2, 39);
      var $1432 = $1430 * Math.pow(2, 25);
      var $1433 = Runtime.or64($1431, $1432);
      var $1434 = Runtime.xor64($1428, $1423);
      var $1435 = Runtime.xor64($1434, $1433);
      
      var $1437 = HEAP[$S + 56];
      
      var $1439 = HEAP[$S];
      var $1440 = Runtime.or64($1439, $1437);
      
      var $1442 = HEAP[$S + 8];
      var $1443 = Runtime.and64($1440, $1442);
      
      var $1445 = HEAP[$S + 56];
      
      var $1447 = HEAP[$S];
      var $1448 = Runtime.and64($1447, $1445);
      var $1449 = Runtime.or64($1448, $1443);
      
      $t1 = $1449 + $1435;
      
      
      
      var $1454 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $1454;
      
      
      
      
      HEAP[$S + 48] = $t1 + $t0;
      
      var $1461 = HEAP[$S + 40];
      
      var $1463 = HEAP[$S + 16];
      var $1464 = unSign($1463, 64, 1) / Math.pow(2, 14);
      var $1465 = $1463 * Math.pow(2, 50);
      var $1466 = Runtime.or64($1464, $1465);
      
      var $1468 = HEAP[$S + 16];
      var $1469 = unSign($1468, 64, 1) / Math.pow(2, 18);
      var $1470 = $1468 * Math.pow(2, 46);
      var $1471 = Runtime.or64($1469, $1470);
      
      var $1473 = HEAP[$S + 16];
      var $1474 = unSign($1473, 64, 1) / Math.pow(2, 41);
      var $1475 = $1473 * Math.pow(2, 23);
      var $1476 = Runtime.or64($1474, $1475);
      var $1477 = Runtime.xor64($1471, $1466);
      var $1478 = Runtime.xor64($1477, $1476);
      
      var $1480 = HEAP[$S + 32];
      
      var $1482 = HEAP[$S + 16];
      
      var $1484 = HEAP[$S + 24];
      
      var $1486 = HEAP[$S + 32];
      var $1487 = Runtime.xor64($1486, $1484);
      var $1488 = Runtime.and64($1487, $1482);
      var $1489 = Runtime.xor64($1488, $1480);
      
      
      
      
      
      
      $t0 = $1461 + 0xfc19dc68b8cd580 + $1478 + HEAP[$W + 144] + $1489;
      
      var $1497 = HEAP[$S + 48];
      var $1498 = unSign($1497, 64, 1) / Math.pow(2, 28);
      var $1499 = $1497 * Math.pow(2, 36);
      var $1500 = Runtime.or64($1498, $1499);
      
      var $1502 = HEAP[$S + 48];
      var $1503 = unSign($1502, 64, 1) / Math.pow(2, 34);
      var $1504 = $1502 * Math.pow(2, 30);
      var $1505 = Runtime.or64($1503, $1504);
      
      var $1507 = HEAP[$S + 48];
      var $1508 = unSign($1507, 64, 1) / Math.pow(2, 39);
      var $1509 = $1507 * Math.pow(2, 25);
      var $1510 = Runtime.or64($1508, $1509);
      var $1511 = Runtime.xor64($1505, $1500);
      var $1512 = Runtime.xor64($1511, $1510);
      
      var $1514 = HEAP[$S + 48];
      
      var $1516 = HEAP[$S + 56];
      var $1517 = Runtime.or64($1516, $1514);
      
      var $1519 = HEAP[$S];
      var $1520 = Runtime.and64($1517, $1519);
      
      var $1522 = HEAP[$S + 48];
      
      var $1524 = HEAP[$S + 56];
      var $1525 = Runtime.and64($1524, $1522);
      var $1526 = Runtime.or64($1525, $1520);
      
      $t1 = $1526 + $1512;
      
      
      
      var $1531 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $1531;
      
      
      
      
      HEAP[$S + 40] = $t1 + $t0;
      
      var $1538 = HEAP[$S + 32];
      
      var $1540 = HEAP[$S + 8];
      var $1541 = unSign($1540, 64, 1) / Math.pow(2, 14);
      var $1542 = $1540 * Math.pow(2, 50);
      var $1543 = Runtime.or64($1541, $1542);
      
      var $1545 = HEAP[$S + 8];
      var $1546 = unSign($1545, 64, 1) / Math.pow(2, 18);
      var $1547 = $1545 * Math.pow(2, 46);
      var $1548 = Runtime.or64($1546, $1547);
      
      var $1550 = HEAP[$S + 8];
      var $1551 = unSign($1550, 64, 1) / Math.pow(2, 41);
      var $1552 = $1550 * Math.pow(2, 23);
      var $1553 = Runtime.or64($1551, $1552);
      var $1554 = Runtime.xor64($1548, $1543);
      var $1555 = Runtime.xor64($1554, $1553);
      
      var $1557 = HEAP[$S + 24];
      
      var $1559 = HEAP[$S + 8];
      
      var $1561 = HEAP[$S + 16];
      
      var $1563 = HEAP[$S + 24];
      var $1564 = Runtime.xor64($1563, $1561);
      var $1565 = Runtime.and64($1564, $1559);
      var $1566 = Runtime.xor64($1565, $1557);
      
      
      
      
      
      
      $t0 = $1538 + 0x240ca1cc77ac9c00 + $1555 + HEAP[$W + 152] + $1566;
      
      var $1574 = HEAP[$S + 40];
      var $1575 = unSign($1574, 64, 1) / Math.pow(2, 28);
      var $1576 = $1574 * Math.pow(2, 36);
      var $1577 = Runtime.or64($1575, $1576);
      
      var $1579 = HEAP[$S + 40];
      var $1580 = unSign($1579, 64, 1) / Math.pow(2, 34);
      var $1581 = $1579 * Math.pow(2, 30);
      var $1582 = Runtime.or64($1580, $1581);
      
      var $1584 = HEAP[$S + 40];
      var $1585 = unSign($1584, 64, 1) / Math.pow(2, 39);
      var $1586 = $1584 * Math.pow(2, 25);
      var $1587 = Runtime.or64($1585, $1586);
      var $1588 = Runtime.xor64($1582, $1577);
      var $1589 = Runtime.xor64($1588, $1587);
      
      var $1591 = HEAP[$S + 40];
      
      var $1593 = HEAP[$S + 48];
      var $1594 = Runtime.or64($1593, $1591);
      
      var $1596 = HEAP[$S + 56];
      var $1597 = Runtime.and64($1594, $1596);
      
      var $1599 = HEAP[$S + 40];
      
      var $1601 = HEAP[$S + 48];
      var $1602 = Runtime.and64($1601, $1599);
      var $1603 = Runtime.or64($1602, $1597);
      
      $t1 = $1603 + $1589;
      
      
      
      var $1608 = $t0 + HEAP[$S];
      
      HEAP[$S] = $1608;
      
      
      
      
      HEAP[$S + 32] = $t1 + $t0;
      
      var $1615 = HEAP[$S + 24];
      
      var $1617 = HEAP[$S];
      var $1618 = unSign($1617, 64, 1) / Math.pow(2, 14);
      var $1619 = $1617 * Math.pow(2, 50);
      var $1620 = Runtime.or64($1618, $1619);
      
      var $1622 = HEAP[$S];
      var $1623 = unSign($1622, 64, 1) / Math.pow(2, 18);
      var $1624 = $1622 * Math.pow(2, 46);
      var $1625 = Runtime.or64($1623, $1624);
      
      var $1627 = HEAP[$S];
      var $1628 = unSign($1627, 64, 1) / Math.pow(2, 41);
      var $1629 = $1627 * Math.pow(2, 23);
      var $1630 = Runtime.or64($1628, $1629);
      var $1631 = Runtime.xor64($1625, $1620);
      var $1632 = Runtime.xor64($1631, $1630);
      
      var $1634 = HEAP[$S + 16];
      
      var $1636 = HEAP[$S];
      
      var $1638 = HEAP[$S + 8];
      
      var $1640 = HEAP[$S + 16];
      var $1641 = Runtime.xor64($1640, $1638);
      var $1642 = Runtime.and64($1641, $1636);
      var $1643 = Runtime.xor64($1642, $1634);
      
      
      
      
      
      
      $t0 = $1615 + 0x2de92c6f592b0200 + $1632 + HEAP[$W + 160] + $1643;
      
      var $1651 = HEAP[$S + 32];
      var $1652 = unSign($1651, 64, 1) / Math.pow(2, 28);
      var $1653 = $1651 * Math.pow(2, 36);
      var $1654 = Runtime.or64($1652, $1653);
      
      var $1656 = HEAP[$S + 32];
      var $1657 = unSign($1656, 64, 1) / Math.pow(2, 34);
      var $1658 = $1656 * Math.pow(2, 30);
      var $1659 = Runtime.or64($1657, $1658);
      
      var $1661 = HEAP[$S + 32];
      var $1662 = unSign($1661, 64, 1) / Math.pow(2, 39);
      var $1663 = $1661 * Math.pow(2, 25);
      var $1664 = Runtime.or64($1662, $1663);
      var $1665 = Runtime.xor64($1659, $1654);
      var $1666 = Runtime.xor64($1665, $1664);
      
      var $1668 = HEAP[$S + 32];
      
      var $1670 = HEAP[$S + 40];
      var $1671 = Runtime.or64($1670, $1668);
      
      var $1673 = HEAP[$S + 48];
      var $1674 = Runtime.and64($1671, $1673);
      
      var $1676 = HEAP[$S + 32];
      
      var $1678 = HEAP[$S + 40];
      var $1679 = Runtime.and64($1678, $1676);
      var $1680 = Runtime.or64($1679, $1674);
      
      $t1 = $1680 + $1666;
      
      
      
      var $1685 = $t0 + HEAP[$S + 56];
      
      HEAP[$S + 56] = $1685;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      var $1692 = HEAP[$S + 16];
      
      var $1694 = HEAP[$S + 56];
      var $1695 = unSign($1694, 64, 1) / Math.pow(2, 14);
      var $1696 = $1694 * Math.pow(2, 50);
      var $1697 = Runtime.or64($1695, $1696);
      
      var $1699 = HEAP[$S + 56];
      var $1700 = unSign($1699, 64, 1) / Math.pow(2, 18);
      var $1701 = $1699 * Math.pow(2, 46);
      var $1702 = Runtime.or64($1700, $1701);
      
      var $1704 = HEAP[$S + 56];
      var $1705 = unSign($1704, 64, 1) / Math.pow(2, 41);
      var $1706 = $1704 * Math.pow(2, 23);
      var $1707 = Runtime.or64($1705, $1706);
      var $1708 = Runtime.xor64($1702, $1697);
      var $1709 = Runtime.xor64($1708, $1707);
      
      var $1711 = HEAP[$S + 8];
      
      var $1713 = HEAP[$S + 56];
      
      var $1715 = HEAP[$S];
      
      var $1717 = HEAP[$S + 8];
      var $1718 = Runtime.xor64($1717, $1715);
      var $1719 = Runtime.and64($1718, $1713);
      var $1720 = Runtime.xor64($1719, $1711);
      
      
      
      
      
      
      $t0 = $1692 + 0x4a7484aa6ea6e400 + $1709 + HEAP[$W + 168] + $1720;
      
      var $1728 = HEAP[$S + 24];
      var $1729 = unSign($1728, 64, 1) / Math.pow(2, 28);
      var $1730 = $1728 * Math.pow(2, 36);
      var $1731 = Runtime.or64($1729, $1730);
      
      var $1733 = HEAP[$S + 24];
      var $1734 = unSign($1733, 64, 1) / Math.pow(2, 34);
      var $1735 = $1733 * Math.pow(2, 30);
      var $1736 = Runtime.or64($1734, $1735);
      
      var $1738 = HEAP[$S + 24];
      var $1739 = unSign($1738, 64, 1) / Math.pow(2, 39);
      var $1740 = $1738 * Math.pow(2, 25);
      var $1741 = Runtime.or64($1739, $1740);
      var $1742 = Runtime.xor64($1736, $1731);
      var $1743 = Runtime.xor64($1742, $1741);
      
      var $1745 = HEAP[$S + 24];
      
      var $1747 = HEAP[$S + 32];
      var $1748 = Runtime.or64($1747, $1745);
      
      var $1750 = HEAP[$S + 40];
      var $1751 = Runtime.and64($1748, $1750);
      
      var $1753 = HEAP[$S + 24];
      
      var $1755 = HEAP[$S + 32];
      var $1756 = Runtime.and64($1755, $1753);
      var $1757 = Runtime.or64($1756, $1751);
      
      $t1 = $1757 + $1743;
      
      
      
      var $1762 = $t0 + HEAP[$S + 48];
      
      HEAP[$S + 48] = $1762;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      var $1769 = HEAP[$S + 8];
      
      var $1771 = HEAP[$S + 48];
      var $1772 = unSign($1771, 64, 1) / Math.pow(2, 14);
      var $1773 = $1771 * Math.pow(2, 50);
      var $1774 = Runtime.or64($1772, $1773);
      
      var $1776 = HEAP[$S + 48];
      var $1777 = unSign($1776, 64, 1) / Math.pow(2, 18);
      var $1778 = $1776 * Math.pow(2, 46);
      var $1779 = Runtime.or64($1777, $1778);
      
      var $1781 = HEAP[$S + 48];
      var $1782 = unSign($1781, 64, 1) / Math.pow(2, 41);
      var $1783 = $1781 * Math.pow(2, 23);
      var $1784 = Runtime.or64($1782, $1783);
      var $1785 = Runtime.xor64($1779, $1774);
      var $1786 = Runtime.xor64($1785, $1784);
      
      var $1788 = HEAP[$S];
      
      var $1790 = HEAP[$S + 48];
      
      var $1792 = HEAP[$S + 56];
      
      var $1794 = HEAP[$S];
      var $1795 = Runtime.xor64($1794, $1792);
      var $1796 = Runtime.and64($1795, $1790);
      var $1797 = Runtime.xor64($1796, $1788);
      
      
      
      
      
      
      $t0 = $1769 + 0x5cb0a9dcbd41fc00 + $1786 + HEAP[$W + 176] + $1797;
      
      var $1805 = HEAP[$S + 16];
      var $1806 = unSign($1805, 64, 1) / Math.pow(2, 28);
      var $1807 = $1805 * Math.pow(2, 36);
      var $1808 = Runtime.or64($1806, $1807);
      
      var $1810 = HEAP[$S + 16];
      var $1811 = unSign($1810, 64, 1) / Math.pow(2, 34);
      var $1812 = $1810 * Math.pow(2, 30);
      var $1813 = Runtime.or64($1811, $1812);
      
      var $1815 = HEAP[$S + 16];
      var $1816 = unSign($1815, 64, 1) / Math.pow(2, 39);
      var $1817 = $1815 * Math.pow(2, 25);
      var $1818 = Runtime.or64($1816, $1817);
      var $1819 = Runtime.xor64($1813, $1808);
      var $1820 = Runtime.xor64($1819, $1818);
      
      var $1822 = HEAP[$S + 16];
      
      var $1824 = HEAP[$S + 24];
      var $1825 = Runtime.or64($1824, $1822);
      
      var $1827 = HEAP[$S + 32];
      var $1828 = Runtime.and64($1825, $1827);
      
      var $1830 = HEAP[$S + 16];
      
      var $1832 = HEAP[$S + 24];
      var $1833 = Runtime.and64($1832, $1830);
      var $1834 = Runtime.or64($1833, $1828);
      
      $t1 = $1834 + $1820;
      
      
      
      var $1839 = $t0 + HEAP[$S + 40];
      
      HEAP[$S + 40] = $1839;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      var $1846 = HEAP[$S];
      
      var $1848 = HEAP[$S + 40];
      var $1849 = unSign($1848, 64, 1) / Math.pow(2, 14);
      var $1850 = $1848 * Math.pow(2, 50);
      var $1851 = Runtime.or64($1849, $1850);
      
      var $1853 = HEAP[$S + 40];
      var $1854 = unSign($1853, 64, 1) / Math.pow(2, 18);
      var $1855 = $1853 * Math.pow(2, 46);
      var $1856 = Runtime.or64($1854, $1855);
      
      var $1858 = HEAP[$S + 40];
      var $1859 = unSign($1858, 64, 1) / Math.pow(2, 41);
      var $1860 = $1858 * Math.pow(2, 23);
      var $1861 = Runtime.or64($1859, $1860);
      var $1862 = Runtime.xor64($1856, $1851);
      var $1863 = Runtime.xor64($1862, $1861);
      
      var $1865 = HEAP[$S + 56];
      
      var $1867 = HEAP[$S + 40];
      
      var $1869 = HEAP[$S + 48];
      
      var $1871 = HEAP[$S + 56];
      var $1872 = Runtime.xor64($1871, $1869);
      var $1873 = Runtime.and64($1872, $1867);
      var $1874 = Runtime.xor64($1873, $1865);
      
      
      
      
      
      
      $t0 = $1846 + 0x76f988da83115400 + $1863 + HEAP[$W + 184] + $1874;
      
      var $1882 = HEAP[$S + 8];
      var $1883 = unSign($1882, 64, 1) / Math.pow(2, 28);
      var $1884 = $1882 * Math.pow(2, 36);
      var $1885 = Runtime.or64($1883, $1884);
      
      var $1887 = HEAP[$S + 8];
      var $1888 = unSign($1887, 64, 1) / Math.pow(2, 34);
      var $1889 = $1887 * Math.pow(2, 30);
      var $1890 = Runtime.or64($1888, $1889);
      
      var $1892 = HEAP[$S + 8];
      var $1893 = unSign($1892, 64, 1) / Math.pow(2, 39);
      var $1894 = $1892 * Math.pow(2, 25);
      var $1895 = Runtime.or64($1893, $1894);
      var $1896 = Runtime.xor64($1890, $1885);
      var $1897 = Runtime.xor64($1896, $1895);
      
      var $1899 = HEAP[$S + 8];
      
      var $1901 = HEAP[$S + 16];
      var $1902 = Runtime.or64($1901, $1899);
      
      var $1904 = HEAP[$S + 24];
      var $1905 = Runtime.and64($1902, $1904);
      
      var $1907 = HEAP[$S + 8];
      
      var $1909 = HEAP[$S + 16];
      var $1910 = Runtime.and64($1909, $1907);
      var $1911 = Runtime.or64($1910, $1905);
      
      $t1 = $1911 + $1897;
      
      
      
      var $1916 = $t0 + HEAP[$S + 32];
      
      HEAP[$S + 32] = $1916;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      var $1923 = HEAP[$S + 56];
      
      var $1925 = HEAP[$S + 32];
      var $1926 = unSign($1925, 64, 1) / Math.pow(2, 14);
      var $1927 = $1925 * Math.pow(2, 50);
      var $1928 = Runtime.or64($1926, $1927);
      
      var $1930 = HEAP[$S + 32];
      var $1931 = unSign($1930, 64, 1) / Math.pow(2, 18);
      var $1932 = $1930 * Math.pow(2, 46);
      var $1933 = Runtime.or64($1931, $1932);
      
      var $1935 = HEAP[$S + 32];
      var $1936 = unSign($1935, 64, 1) / Math.pow(2, 41);
      var $1937 = $1935 * Math.pow(2, 23);
      var $1938 = Runtime.or64($1936, $1937);
      var $1939 = Runtime.xor64($1933, $1928);
      var $1940 = Runtime.xor64($1939, $1938);
      
      var $1942 = HEAP[$S + 48];
      
      var $1944 = HEAP[$S + 32];
      
      var $1946 = HEAP[$S + 40];
      
      var $1948 = HEAP[$S + 48];
      var $1949 = Runtime.xor64($1948, $1946);
      var $1950 = Runtime.and64($1949, $1944);
      var $1951 = Runtime.xor64($1950, $1942);
      
      
      var $1954 = $1923 + -0x67c1aead11992000;
      
      
      
      $t0 = $1954 + $1940 + HEAP[$W + 192] + $1951;
      
      var $1959 = HEAP[$S];
      var $1960 = unSign($1959, 64, 1) / Math.pow(2, 28);
      var $1961 = $1959 * Math.pow(2, 36);
      var $1962 = Runtime.or64($1960, $1961);
      
      var $1964 = HEAP[$S];
      var $1965 = unSign($1964, 64, 1) / Math.pow(2, 34);
      var $1966 = $1964 * Math.pow(2, 30);
      var $1967 = Runtime.or64($1965, $1966);
      
      var $1969 = HEAP[$S];
      var $1970 = unSign($1969, 64, 1) / Math.pow(2, 39);
      var $1971 = $1969 * Math.pow(2, 25);
      var $1972 = Runtime.or64($1970, $1971);
      var $1973 = Runtime.xor64($1967, $1962);
      var $1974 = Runtime.xor64($1973, $1972);
      
      var $1976 = HEAP[$S];
      
      var $1978 = HEAP[$S + 8];
      var $1979 = Runtime.or64($1978, $1976);
      
      var $1981 = HEAP[$S + 16];
      var $1982 = Runtime.and64($1979, $1981);
      
      var $1984 = HEAP[$S];
      
      var $1986 = HEAP[$S + 8];
      var $1987 = Runtime.and64($1986, $1984);
      var $1988 = Runtime.or64($1987, $1982);
      
      $t1 = $1988 + $1974;
      
      
      
      var $1993 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $1993;
      
      
      
      
      HEAP[$S + 56] = $t1 + $t0;
      
      var $2000 = HEAP[$S + 48];
      
      var $2002 = HEAP[$S + 24];
      var $2003 = unSign($2002, 64, 1) / Math.pow(2, 14);
      var $2004 = $2002 * Math.pow(2, 50);
      var $2005 = Runtime.or64($2003, $2004);
      
      var $2007 = HEAP[$S + 24];
      var $2008 = unSign($2007, 64, 1) / Math.pow(2, 18);
      var $2009 = $2007 * Math.pow(2, 46);
      var $2010 = Runtime.or64($2008, $2009);
      
      var $2012 = HEAP[$S + 24];
      var $2013 = unSign($2012, 64, 1) / Math.pow(2, 41);
      var $2014 = $2012 * Math.pow(2, 23);
      var $2015 = Runtime.or64($2013, $2014);
      var $2016 = Runtime.xor64($2010, $2005);
      var $2017 = Runtime.xor64($2016, $2015);
      
      var $2019 = HEAP[$S + 40];
      
      var $2021 = HEAP[$S + 24];
      
      var $2023 = HEAP[$S + 32];
      
      var $2025 = HEAP[$S + 40];
      var $2026 = Runtime.xor64($2025, $2023);
      var $2027 = Runtime.and64($2026, $2021);
      var $2028 = Runtime.xor64($2027, $2019);
      
      
      var $2031 = $2000 + -0x57ce3992d24bcc00;
      
      
      
      $t0 = $2031 + $2017 + HEAP[$W + 200] + $2028;
      
      var $2036 = HEAP[$S + 56];
      var $2037 = unSign($2036, 64, 1) / Math.pow(2, 28);
      var $2038 = $2036 * Math.pow(2, 36);
      var $2039 = Runtime.or64($2037, $2038);
      
      var $2041 = HEAP[$S + 56];
      var $2042 = unSign($2041, 64, 1) / Math.pow(2, 34);
      var $2043 = $2041 * Math.pow(2, 30);
      var $2044 = Runtime.or64($2042, $2043);
      
      var $2046 = HEAP[$S + 56];
      var $2047 = unSign($2046, 64, 1) / Math.pow(2, 39);
      var $2048 = $2046 * Math.pow(2, 25);
      var $2049 = Runtime.or64($2047, $2048);
      var $2050 = Runtime.xor64($2044, $2039);
      var $2051 = Runtime.xor64($2050, $2049);
      
      var $2053 = HEAP[$S + 56];
      
      var $2055 = HEAP[$S];
      var $2056 = Runtime.or64($2055, $2053);
      
      var $2058 = HEAP[$S + 8];
      var $2059 = Runtime.and64($2056, $2058);
      
      var $2061 = HEAP[$S + 56];
      
      var $2063 = HEAP[$S];
      var $2064 = Runtime.and64($2063, $2061);
      var $2065 = Runtime.or64($2064, $2059);
      
      $t1 = $2065 + $2051;
      
      
      
      var $2070 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $2070;
      
      
      
      
      HEAP[$S + 48] = $t1 + $t0;
      
      var $2077 = HEAP[$S + 40];
      
      var $2079 = HEAP[$S + 16];
      var $2080 = unSign($2079, 64, 1) / Math.pow(2, 14);
      var $2081 = $2079 * Math.pow(2, 50);
      var $2082 = Runtime.or64($2080, $2081);
      
      var $2084 = HEAP[$S + 16];
      var $2085 = unSign($2084, 64, 1) / Math.pow(2, 18);
      var $2086 = $2084 * Math.pow(2, 46);
      var $2087 = Runtime.or64($2085, $2086);
      
      var $2089 = HEAP[$S + 16];
      var $2090 = unSign($2089, 64, 1) / Math.pow(2, 41);
      var $2091 = $2089 * Math.pow(2, 23);
      var $2092 = Runtime.or64($2090, $2091);
      var $2093 = Runtime.xor64($2087, $2082);
      var $2094 = Runtime.xor64($2093, $2092);
      
      var $2096 = HEAP[$S + 32];
      
      var $2098 = HEAP[$S + 16];
      
      var $2100 = HEAP[$S + 24];
      
      var $2102 = HEAP[$S + 32];
      var $2103 = Runtime.xor64($2102, $2100);
      var $2104 = Runtime.and64($2103, $2098);
      var $2105 = Runtime.xor64($2104, $2096);
      
      
      var $2108 = $2077 + -0x4ffcd8376704e000;
      
      
      
      $t0 = $2108 + $2094 + HEAP[$W + 208] + $2105;
      
      var $2113 = HEAP[$S + 48];
      var $2114 = unSign($2113, 64, 1) / Math.pow(2, 28);
      var $2115 = $2113 * Math.pow(2, 36);
      var $2116 = Runtime.or64($2114, $2115);
      
      var $2118 = HEAP[$S + 48];
      var $2119 = unSign($2118, 64, 1) / Math.pow(2, 34);
      var $2120 = $2118 * Math.pow(2, 30);
      var $2121 = Runtime.or64($2119, $2120);
      
      var $2123 = HEAP[$S + 48];
      var $2124 = unSign($2123, 64, 1) / Math.pow(2, 39);
      var $2125 = $2123 * Math.pow(2, 25);
      var $2126 = Runtime.or64($2124, $2125);
      var $2127 = Runtime.xor64($2121, $2116);
      var $2128 = Runtime.xor64($2127, $2126);
      
      var $2130 = HEAP[$S + 48];
      
      var $2132 = HEAP[$S + 56];
      var $2133 = Runtime.or64($2132, $2130);
      
      var $2135 = HEAP[$S];
      var $2136 = Runtime.and64($2133, $2135);
      
      var $2138 = HEAP[$S + 48];
      
      var $2140 = HEAP[$S + 56];
      var $2141 = Runtime.and64($2140, $2138);
      var $2142 = Runtime.or64($2141, $2136);
      
      $t1 = $2142 + $2128;
      
      
      
      var $2147 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $2147;
      
      
      
      
      HEAP[$S + 40] = $t1 + $t0;
      
      var $2154 = HEAP[$S + 32];
      
      var $2156 = HEAP[$S + 8];
      var $2157 = unSign($2156, 64, 1) / Math.pow(2, 14);
      var $2158 = $2156 * Math.pow(2, 50);
      var $2159 = Runtime.or64($2157, $2158);
      
      var $2161 = HEAP[$S + 8];
      var $2162 = unSign($2161, 64, 1) / Math.pow(2, 18);
      var $2163 = $2161 * Math.pow(2, 46);
      var $2164 = Runtime.or64($2162, $2163);
      
      var $2166 = HEAP[$S + 8];
      var $2167 = unSign($2166, 64, 1) / Math.pow(2, 41);
      var $2168 = $2166 * Math.pow(2, 23);
      var $2169 = Runtime.or64($2167, $2168);
      var $2170 = Runtime.xor64($2164, $2159);
      var $2171 = Runtime.xor64($2170, $2169);
      
      var $2173 = HEAP[$S + 24];
      
      var $2175 = HEAP[$S + 8];
      
      var $2177 = HEAP[$S + 16];
      
      var $2179 = HEAP[$S + 24];
      var $2180 = Runtime.xor64($2179, $2177);
      var $2181 = Runtime.and64($2180, $2175);
      var $2182 = Runtime.xor64($2181, $2173);
      
      
      var $2185 = $2154 + -465855184365951e4;
      
      
      
      $t0 = $2185 + $2171 + HEAP[$W + 216] + $2182;
      
      var $2190 = HEAP[$S + 40];
      var $2191 = unSign($2190, 64, 1) / Math.pow(2, 28);
      var $2192 = $2190 * Math.pow(2, 36);
      var $2193 = Runtime.or64($2191, $2192);
      
      var $2195 = HEAP[$S + 40];
      var $2196 = unSign($2195, 64, 1) / Math.pow(2, 34);
      var $2197 = $2195 * Math.pow(2, 30);
      var $2198 = Runtime.or64($2196, $2197);
      
      var $2200 = HEAP[$S + 40];
      var $2201 = unSign($2200, 64, 1) / Math.pow(2, 39);
      var $2202 = $2200 * Math.pow(2, 25);
      var $2203 = Runtime.or64($2201, $2202);
      var $2204 = Runtime.xor64($2198, $2193);
      var $2205 = Runtime.xor64($2204, $2203);
      
      var $2207 = HEAP[$S + 40];
      
      var $2209 = HEAP[$S + 48];
      var $2210 = Runtime.or64($2209, $2207);
      
      var $2212 = HEAP[$S + 56];
      var $2213 = Runtime.and64($2210, $2212);
      
      var $2215 = HEAP[$S + 40];
      
      var $2217 = HEAP[$S + 48];
      var $2218 = Runtime.and64($2217, $2215);
      var $2219 = Runtime.or64($2218, $2213);
      
      $t1 = $2219 + $2205;
      
      
      
      var $2224 = $t0 + HEAP[$S];
      
      HEAP[$S] = $2224;
      
      
      
      
      HEAP[$S + 32] = $t1 + $t0;
      
      var $2231 = HEAP[$S + 24];
      
      var $2233 = HEAP[$S];
      var $2234 = unSign($2233, 64, 1) / Math.pow(2, 14);
      var $2235 = $2233 * Math.pow(2, 50);
      var $2236 = Runtime.or64($2234, $2235);
      
      var $2238 = HEAP[$S];
      var $2239 = unSign($2238, 64, 1) / Math.pow(2, 18);
      var $2240 = $2238 * Math.pow(2, 46);
      var $2241 = Runtime.or64($2239, $2240);
      
      var $2243 = HEAP[$S];
      var $2244 = unSign($2243, 64, 1) / Math.pow(2, 41);
      var $2245 = $2243 * Math.pow(2, 23);
      var $2246 = Runtime.or64($2244, $2245);
      var $2247 = Runtime.xor64($2241, $2236);
      var $2248 = Runtime.xor64($2247, $2246);
      
      var $2250 = HEAP[$S + 16];
      
      var $2252 = HEAP[$S];
      
      var $2254 = HEAP[$S + 8];
      
      var $2256 = HEAP[$S + 16];
      var $2257 = Runtime.xor64($2256, $2254);
      var $2258 = Runtime.and64($2257, $2252);
      var $2259 = Runtime.xor64($2258, $2250);
      
      
      var $2262 = $2231 + -0x391ff40cc2577000;
      
      
      
      $t0 = $2262 + $2248 + HEAP[$W + 224] + $2259;
      
      var $2267 = HEAP[$S + 32];
      var $2268 = unSign($2267, 64, 1) / Math.pow(2, 28);
      var $2269 = $2267 * Math.pow(2, 36);
      var $2270 = Runtime.or64($2268, $2269);
      
      var $2272 = HEAP[$S + 32];
      var $2273 = unSign($2272, 64, 1) / Math.pow(2, 34);
      var $2274 = $2272 * Math.pow(2, 30);
      var $2275 = Runtime.or64($2273, $2274);
      
      var $2277 = HEAP[$S + 32];
      var $2278 = unSign($2277, 64, 1) / Math.pow(2, 39);
      var $2279 = $2277 * Math.pow(2, 25);
      var $2280 = Runtime.or64($2278, $2279);
      var $2281 = Runtime.xor64($2275, $2270);
      var $2282 = Runtime.xor64($2281, $2280);
      
      var $2284 = HEAP[$S + 32];
      
      var $2286 = HEAP[$S + 40];
      var $2287 = Runtime.or64($2286, $2284);
      
      var $2289 = HEAP[$S + 48];
      var $2290 = Runtime.and64($2287, $2289);
      
      var $2292 = HEAP[$S + 32];
      
      var $2294 = HEAP[$S + 40];
      var $2295 = Runtime.and64($2294, $2292);
      var $2296 = Runtime.or64($2295, $2290);
      
      $t1 = $2296 + $2282;
      
      
      
      var $2301 = $t0 + HEAP[$S + 56];
      
      HEAP[$S + 56] = $2301;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      var $2308 = HEAP[$S + 16];
      
      var $2310 = HEAP[$S + 56];
      var $2311 = unSign($2310, 64, 1) / Math.pow(2, 14);
      var $2312 = $2310 * Math.pow(2, 50);
      var $2313 = Runtime.or64($2311, $2312);
      
      var $2315 = HEAP[$S + 56];
      var $2316 = unSign($2315, 64, 1) / Math.pow(2, 18);
      var $2317 = $2315 * Math.pow(2, 46);
      var $2318 = Runtime.or64($2316, $2317);
      
      var $2320 = HEAP[$S + 56];
      var $2321 = unSign($2320, 64, 1) / Math.pow(2, 41);
      var $2322 = $2320 * Math.pow(2, 23);
      var $2323 = Runtime.or64($2321, $2322);
      var $2324 = Runtime.xor64($2318, $2313);
      var $2325 = Runtime.xor64($2324, $2323);
      
      var $2327 = HEAP[$S + 8];
      
      var $2329 = HEAP[$S + 56];
      
      var $2331 = HEAP[$S];
      
      var $2333 = HEAP[$S + 8];
      var $2334 = Runtime.xor64($2333, $2331);
      var $2335 = Runtime.and64($2334, $2329);
      var $2336 = Runtime.xor64($2335, $2327);
      
      
      var $2339 = $2308 + -0x2a586eb86cf55800;
      
      
      
      $t0 = $2339 + $2325 + HEAP[$W + 232] + $2336;
      
      var $2344 = HEAP[$S + 24];
      var $2345 = unSign($2344, 64, 1) / Math.pow(2, 28);
      var $2346 = $2344 * Math.pow(2, 36);
      var $2347 = Runtime.or64($2345, $2346);
      
      var $2349 = HEAP[$S + 24];
      var $2350 = unSign($2349, 64, 1) / Math.pow(2, 34);
      var $2351 = $2349 * Math.pow(2, 30);
      var $2352 = Runtime.or64($2350, $2351);
      
      var $2354 = HEAP[$S + 24];
      var $2355 = unSign($2354, 64, 1) / Math.pow(2, 39);
      var $2356 = $2354 * Math.pow(2, 25);
      var $2357 = Runtime.or64($2355, $2356);
      var $2358 = Runtime.xor64($2352, $2347);
      var $2359 = Runtime.xor64($2358, $2357);
      
      var $2361 = HEAP[$S + 24];
      
      var $2363 = HEAP[$S + 32];
      var $2364 = Runtime.or64($2363, $2361);
      
      var $2366 = HEAP[$S + 40];
      var $2367 = Runtime.and64($2364, $2366);
      
      var $2369 = HEAP[$S + 24];
      
      var $2371 = HEAP[$S + 32];
      var $2372 = Runtime.and64($2371, $2369);
      var $2373 = Runtime.or64($2372, $2367);
      
      $t1 = $2373 + $2359;
      
      
      
      var $2378 = $t0 + HEAP[$S + 48];
      
      HEAP[$S + 48] = $2378;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      var $2385 = HEAP[$S + 8];
      
      var $2387 = HEAP[$S + 48];
      var $2388 = unSign($2387, 64, 1) / Math.pow(2, 14);
      var $2389 = $2387 * Math.pow(2, 50);
      var $2390 = Runtime.or64($2388, $2389);
      
      var $2392 = HEAP[$S + 48];
      var $2393 = unSign($2392, 64, 1) / Math.pow(2, 18);
      var $2394 = $2392 * Math.pow(2, 46);
      var $2395 = Runtime.or64($2393, $2394);
      
      var $2397 = HEAP[$S + 48];
      var $2398 = unSign($2397, 64, 1) / Math.pow(2, 41);
      var $2399 = $2397 * Math.pow(2, 23);
      var $2400 = Runtime.or64($2398, $2399);
      var $2401 = Runtime.xor64($2395, $2390);
      var $2402 = Runtime.xor64($2401, $2400);
      
      var $2404 = HEAP[$S];
      
      var $2406 = HEAP[$S + 48];
      
      var $2408 = HEAP[$S + 56];
      
      var $2410 = HEAP[$S];
      var $2411 = Runtime.xor64($2410, $2408);
      var $2412 = Runtime.and64($2411, $2406);
      var $2413 = Runtime.xor64($2412, $2404);
      
      
      
      
      
      
      $t0 = $2385 + 0x6ca6351e0038280 + $2402 + HEAP[$W + 240] + $2413;
      
      var $2421 = HEAP[$S + 16];
      var $2422 = unSign($2421, 64, 1) / Math.pow(2, 28);
      var $2423 = $2421 * Math.pow(2, 36);
      var $2424 = Runtime.or64($2422, $2423);
      
      var $2426 = HEAP[$S + 16];
      var $2427 = unSign($2426, 64, 1) / Math.pow(2, 34);
      var $2428 = $2426 * Math.pow(2, 30);
      var $2429 = Runtime.or64($2427, $2428);
      
      var $2431 = HEAP[$S + 16];
      var $2432 = unSign($2431, 64, 1) / Math.pow(2, 39);
      var $2433 = $2431 * Math.pow(2, 25);
      var $2434 = Runtime.or64($2432, $2433);
      var $2435 = Runtime.xor64($2429, $2424);
      var $2436 = Runtime.xor64($2435, $2434);
      
      var $2438 = HEAP[$S + 16];
      
      var $2440 = HEAP[$S + 24];
      var $2441 = Runtime.or64($2440, $2438);
      
      var $2443 = HEAP[$S + 32];
      var $2444 = Runtime.and64($2441, $2443);
      
      var $2446 = HEAP[$S + 16];
      
      var $2448 = HEAP[$S + 24];
      var $2449 = Runtime.and64($2448, $2446);
      var $2450 = Runtime.or64($2449, $2444);
      
      $t1 = $2450 + $2436;
      
      
      
      var $2455 = $t0 + HEAP[$S + 40];
      
      HEAP[$S + 40] = $2455;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      var $2462 = HEAP[$S];
      
      var $2464 = HEAP[$S + 40];
      var $2465 = unSign($2464, 64, 1) / Math.pow(2, 14);
      var $2466 = $2464 * Math.pow(2, 50);
      var $2467 = Runtime.or64($2465, $2466);
      
      var $2469 = HEAP[$S + 40];
      var $2470 = unSign($2469, 64, 1) / Math.pow(2, 18);
      var $2471 = $2469 * Math.pow(2, 46);
      var $2472 = Runtime.or64($2470, $2471);
      
      var $2474 = HEAP[$S + 40];
      var $2475 = unSign($2474, 64, 1) / Math.pow(2, 41);
      var $2476 = $2474 * Math.pow(2, 23);
      var $2477 = Runtime.or64($2475, $2476);
      var $2478 = Runtime.xor64($2472, $2467);
      var $2479 = Runtime.xor64($2478, $2477);
      
      var $2481 = HEAP[$S + 56];
      
      var $2483 = HEAP[$S + 40];
      
      var $2485 = HEAP[$S + 48];
      
      var $2487 = HEAP[$S + 56];
      var $2488 = Runtime.xor64($2487, $2485);
      var $2489 = Runtime.and64($2488, $2483);
      var $2490 = Runtime.xor64($2489, $2481);
      
      
      
      
      
      
      $t0 = $2462 + 0x142929670a0e6e00 + $2479 + HEAP[$W + 248] + $2490;
      
      var $2498 = HEAP[$S + 8];
      var $2499 = unSign($2498, 64, 1) / Math.pow(2, 28);
      var $2500 = $2498 * Math.pow(2, 36);
      var $2501 = Runtime.or64($2499, $2500);
      
      var $2503 = HEAP[$S + 8];
      var $2504 = unSign($2503, 64, 1) / Math.pow(2, 34);
      var $2505 = $2503 * Math.pow(2, 30);
      var $2506 = Runtime.or64($2504, $2505);
      
      var $2508 = HEAP[$S + 8];
      var $2509 = unSign($2508, 64, 1) / Math.pow(2, 39);
      var $2510 = $2508 * Math.pow(2, 25);
      var $2511 = Runtime.or64($2509, $2510);
      var $2512 = Runtime.xor64($2506, $2501);
      var $2513 = Runtime.xor64($2512, $2511);
      
      var $2515 = HEAP[$S + 8];
      
      var $2517 = HEAP[$S + 16];
      var $2518 = Runtime.or64($2517, $2515);
      
      var $2520 = HEAP[$S + 24];
      var $2521 = Runtime.and64($2518, $2520);
      
      var $2523 = HEAP[$S + 8];
      
      var $2525 = HEAP[$S + 16];
      var $2526 = Runtime.and64($2525, $2523);
      var $2527 = Runtime.or64($2526, $2521);
      
      $t1 = $2527 + $2513;
      
      
      
      var $2532 = $t0 + HEAP[$S + 32];
      
      HEAP[$S + 32] = $2532;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      var $2539 = HEAP[$S + 56];
      
      var $2541 = HEAP[$S + 32];
      var $2542 = unSign($2541, 64, 1) / Math.pow(2, 14);
      var $2543 = $2541 * Math.pow(2, 50);
      var $2544 = Runtime.or64($2542, $2543);
      
      var $2546 = HEAP[$S + 32];
      var $2547 = unSign($2546, 64, 1) / Math.pow(2, 18);
      var $2548 = $2546 * Math.pow(2, 46);
      var $2549 = Runtime.or64($2547, $2548);
      
      var $2551 = HEAP[$S + 32];
      var $2552 = unSign($2551, 64, 1) / Math.pow(2, 41);
      var $2553 = $2551 * Math.pow(2, 23);
      var $2554 = Runtime.or64($2552, $2553);
      var $2555 = Runtime.xor64($2549, $2544);
      var $2556 = Runtime.xor64($2555, $2554);
      
      var $2558 = HEAP[$S + 48];
      
      var $2560 = HEAP[$S + 32];
      
      var $2562 = HEAP[$S + 40];
      
      var $2564 = HEAP[$S + 48];
      var $2565 = Runtime.xor64($2564, $2562);
      var $2566 = Runtime.and64($2565, $2560);
      var $2567 = Runtime.xor64($2566, $2558);
      
      
      
      
      
      
      $t0 = $2539 + 0x27b70a8546d23000 + $2556 + HEAP[$W + 256] + $2567;
      
      var $2575 = HEAP[$S];
      var $2576 = unSign($2575, 64, 1) / Math.pow(2, 28);
      var $2577 = $2575 * Math.pow(2, 36);
      var $2578 = Runtime.or64($2576, $2577);
      
      var $2580 = HEAP[$S];
      var $2581 = unSign($2580, 64, 1) / Math.pow(2, 34);
      var $2582 = $2580 * Math.pow(2, 30);
      var $2583 = Runtime.or64($2581, $2582);
      
      var $2585 = HEAP[$S];
      var $2586 = unSign($2585, 64, 1) / Math.pow(2, 39);
      var $2587 = $2585 * Math.pow(2, 25);
      var $2588 = Runtime.or64($2586, $2587);
      var $2589 = Runtime.xor64($2583, $2578);
      var $2590 = Runtime.xor64($2589, $2588);
      
      var $2592 = HEAP[$S];
      
      var $2594 = HEAP[$S + 8];
      var $2595 = Runtime.or64($2594, $2592);
      
      var $2597 = HEAP[$S + 16];
      var $2598 = Runtime.and64($2595, $2597);
      
      var $2600 = HEAP[$S];
      
      var $2602 = HEAP[$S + 8];
      var $2603 = Runtime.and64($2602, $2600);
      var $2604 = Runtime.or64($2603, $2598);
      
      $t1 = $2604 + $2590;
      
      
      
      var $2609 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $2609;
      
      
      
      
      HEAP[$S + 56] = $t1 + $t0;
      
      var $2616 = HEAP[$S + 48];
      
      var $2618 = HEAP[$S + 24];
      var $2619 = unSign($2618, 64, 1) / Math.pow(2, 14);
      var $2620 = $2618 * Math.pow(2, 50);
      var $2621 = Runtime.or64($2619, $2620);
      
      var $2623 = HEAP[$S + 24];
      var $2624 = unSign($2623, 64, 1) / Math.pow(2, 18);
      var $2625 = $2623 * Math.pow(2, 46);
      var $2626 = Runtime.or64($2624, $2625);
      
      var $2628 = HEAP[$S + 24];
      var $2629 = unSign($2628, 64, 1) / Math.pow(2, 41);
      var $2630 = $2628 * Math.pow(2, 23);
      var $2631 = Runtime.or64($2629, $2630);
      var $2632 = Runtime.xor64($2626, $2621);
      var $2633 = Runtime.xor64($2632, $2631);
      
      var $2635 = HEAP[$S + 40];
      
      var $2637 = HEAP[$S + 24];
      
      var $2639 = HEAP[$S + 32];
      
      var $2641 = HEAP[$S + 40];
      var $2642 = Runtime.xor64($2641, $2639);
      var $2643 = Runtime.and64($2642, $2637);
      var $2644 = Runtime.xor64($2643, $2635);
      
      
      
      
      
      
      $t0 = $2616 + 0x2e1b21385c26ca00 + $2633 + HEAP[$W + 264] + $2644;
      
      var $2652 = HEAP[$S + 56];
      var $2653 = unSign($2652, 64, 1) / Math.pow(2, 28);
      var $2654 = $2652 * Math.pow(2, 36);
      var $2655 = Runtime.or64($2653, $2654);
      
      var $2657 = HEAP[$S + 56];
      var $2658 = unSign($2657, 64, 1) / Math.pow(2, 34);
      var $2659 = $2657 * Math.pow(2, 30);
      var $2660 = Runtime.or64($2658, $2659);
      
      var $2662 = HEAP[$S + 56];
      var $2663 = unSign($2662, 64, 1) / Math.pow(2, 39);
      var $2664 = $2662 * Math.pow(2, 25);
      var $2665 = Runtime.or64($2663, $2664);
      var $2666 = Runtime.xor64($2660, $2655);
      var $2667 = Runtime.xor64($2666, $2665);
      
      var $2669 = HEAP[$S + 56];
      
      var $2671 = HEAP[$S];
      var $2672 = Runtime.or64($2671, $2669);
      
      var $2674 = HEAP[$S + 8];
      var $2675 = Runtime.and64($2672, $2674);
      
      var $2677 = HEAP[$S + 56];
      
      var $2679 = HEAP[$S];
      var $2680 = Runtime.and64($2679, $2677);
      var $2681 = Runtime.or64($2680, $2675);
      
      $t1 = $2681 + $2667;
      
      
      
      var $2686 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $2686;
      
      
      
      
      HEAP[$S + 48] = $t1 + $t0;
      
      var $2693 = HEAP[$S + 40];
      
      var $2695 = HEAP[$S + 16];
      var $2696 = unSign($2695, 64, 1) / Math.pow(2, 14);
      var $2697 = $2695 * Math.pow(2, 50);
      var $2698 = Runtime.or64($2696, $2697);
      
      var $2700 = HEAP[$S + 16];
      var $2701 = unSign($2700, 64, 1) / Math.pow(2, 18);
      var $2702 = $2700 * Math.pow(2, 46);
      var $2703 = Runtime.or64($2701, $2702);
      
      var $2705 = HEAP[$S + 16];
      var $2706 = unSign($2705, 64, 1) / Math.pow(2, 41);
      var $2707 = $2705 * Math.pow(2, 23);
      var $2708 = Runtime.or64($2706, $2707);
      var $2709 = Runtime.xor64($2703, $2698);
      var $2710 = Runtime.xor64($2709, $2708);
      
      var $2712 = HEAP[$S + 32];
      
      var $2714 = HEAP[$S + 16];
      
      var $2716 = HEAP[$S + 24];
      
      var $2718 = HEAP[$S + 32];
      var $2719 = Runtime.xor64($2718, $2716);
      var $2720 = Runtime.and64($2719, $2714);
      var $2721 = Runtime.xor64($2720, $2712);
      
      
      
      
      
      
      $t0 = $2693 + 0x4d2c6dfc5ac42c00 + $2710 + HEAP[$W + 272] + $2721;
      
      var $2729 = HEAP[$S + 48];
      var $2730 = unSign($2729, 64, 1) / Math.pow(2, 28);
      var $2731 = $2729 * Math.pow(2, 36);
      var $2732 = Runtime.or64($2730, $2731);
      
      var $2734 = HEAP[$S + 48];
      var $2735 = unSign($2734, 64, 1) / Math.pow(2, 34);
      var $2736 = $2734 * Math.pow(2, 30);
      var $2737 = Runtime.or64($2735, $2736);
      
      var $2739 = HEAP[$S + 48];
      var $2740 = unSign($2739, 64, 1) / Math.pow(2, 39);
      var $2741 = $2739 * Math.pow(2, 25);
      var $2742 = Runtime.or64($2740, $2741);
      var $2743 = Runtime.xor64($2737, $2732);
      var $2744 = Runtime.xor64($2743, $2742);
      
      var $2746 = HEAP[$S + 48];
      
      var $2748 = HEAP[$S + 56];
      var $2749 = Runtime.or64($2748, $2746);
      
      var $2751 = HEAP[$S];
      var $2752 = Runtime.and64($2749, $2751);
      
      var $2754 = HEAP[$S + 48];
      
      var $2756 = HEAP[$S + 56];
      var $2757 = Runtime.and64($2756, $2754);
      var $2758 = Runtime.or64($2757, $2752);
      
      $t1 = $2758 + $2744;
      
      
      
      var $2763 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $2763;
      
      
      
      
      HEAP[$S + 40] = $t1 + $t0;
      
      var $2770 = HEAP[$S + 32];
      
      var $2772 = HEAP[$S + 8];
      var $2773 = unSign($2772, 64, 1) / Math.pow(2, 14);
      var $2774 = $2772 * Math.pow(2, 50);
      var $2775 = Runtime.or64($2773, $2774);
      
      var $2777 = HEAP[$S + 8];
      var $2778 = unSign($2777, 64, 1) / Math.pow(2, 18);
      var $2779 = $2777 * Math.pow(2, 46);
      var $2780 = Runtime.or64($2778, $2779);
      
      var $2782 = HEAP[$S + 8];
      var $2783 = unSign($2782, 64, 1) / Math.pow(2, 41);
      var $2784 = $2782 * Math.pow(2, 23);
      var $2785 = Runtime.or64($2783, $2784);
      var $2786 = Runtime.xor64($2780, $2775);
      var $2787 = Runtime.xor64($2786, $2785);
      
      var $2789 = HEAP[$S + 24];
      
      var $2791 = HEAP[$S + 8];
      
      var $2793 = HEAP[$S + 16];
      
      var $2795 = HEAP[$S + 24];
      var $2796 = Runtime.xor64($2795, $2793);
      var $2797 = Runtime.and64($2796, $2791);
      var $2798 = Runtime.xor64($2797, $2789);
      
      
      
      
      
      
      $t0 = $2770 + 0x53380d139d95b400 + $2787 + HEAP[$W + 280] + $2798;
      
      var $2806 = HEAP[$S + 40];
      var $2807 = unSign($2806, 64, 1) / Math.pow(2, 28);
      var $2808 = $2806 * Math.pow(2, 36);
      var $2809 = Runtime.or64($2807, $2808);
      
      var $2811 = HEAP[$S + 40];
      var $2812 = unSign($2811, 64, 1) / Math.pow(2, 34);
      var $2813 = $2811 * Math.pow(2, 30);
      var $2814 = Runtime.or64($2812, $2813);
      
      var $2816 = HEAP[$S + 40];
      var $2817 = unSign($2816, 64, 1) / Math.pow(2, 39);
      var $2818 = $2816 * Math.pow(2, 25);
      var $2819 = Runtime.or64($2817, $2818);
      var $2820 = Runtime.xor64($2814, $2809);
      var $2821 = Runtime.xor64($2820, $2819);
      
      var $2823 = HEAP[$S + 40];
      
      var $2825 = HEAP[$S + 48];
      var $2826 = Runtime.or64($2825, $2823);
      
      var $2828 = HEAP[$S + 56];
      var $2829 = Runtime.and64($2826, $2828);
      
      var $2831 = HEAP[$S + 40];
      
      var $2833 = HEAP[$S + 48];
      var $2834 = Runtime.and64($2833, $2831);
      var $2835 = Runtime.or64($2834, $2829);
      
      $t1 = $2835 + $2821;
      
      
      
      var $2840 = $t0 + HEAP[$S];
      
      HEAP[$S] = $2840;
      
      
      
      
      HEAP[$S + 32] = $t1 + $t0;
      
      var $2847 = HEAP[$S + 24];
      
      var $2849 = HEAP[$S];
      var $2850 = unSign($2849, 64, 1) / Math.pow(2, 14);
      var $2851 = $2849 * Math.pow(2, 50);
      var $2852 = Runtime.or64($2850, $2851);
      
      var $2854 = HEAP[$S];
      var $2855 = unSign($2854, 64, 1) / Math.pow(2, 18);
      var $2856 = $2854 * Math.pow(2, 46);
      var $2857 = Runtime.or64($2855, $2856);
      
      var $2859 = HEAP[$S];
      var $2860 = unSign($2859, 64, 1) / Math.pow(2, 41);
      var $2861 = $2859 * Math.pow(2, 23);
      var $2862 = Runtime.or64($2860, $2861);
      var $2863 = Runtime.xor64($2857, $2852);
      var $2864 = Runtime.xor64($2863, $2862);
      
      var $2866 = HEAP[$S + 16];
      
      var $2868 = HEAP[$S];
      
      var $2870 = HEAP[$S + 8];
      
      var $2872 = HEAP[$S + 16];
      var $2873 = Runtime.xor64($2872, $2870);
      var $2874 = Runtime.and64($2873, $2868);
      var $2875 = Runtime.xor64($2874, $2866);
      
      
      
      
      
      
      $t0 = $2847 + 0x650a73548baf6400 + $2864 + HEAP[$W + 288] + $2875;
      
      var $2883 = HEAP[$S + 32];
      var $2884 = unSign($2883, 64, 1) / Math.pow(2, 28);
      var $2885 = $2883 * Math.pow(2, 36);
      var $2886 = Runtime.or64($2884, $2885);
      
      var $2888 = HEAP[$S + 32];
      var $2889 = unSign($2888, 64, 1) / Math.pow(2, 34);
      var $2890 = $2888 * Math.pow(2, 30);
      var $2891 = Runtime.or64($2889, $2890);
      
      var $2893 = HEAP[$S + 32];
      var $2894 = unSign($2893, 64, 1) / Math.pow(2, 39);
      var $2895 = $2893 * Math.pow(2, 25);
      var $2896 = Runtime.or64($2894, $2895);
      var $2897 = Runtime.xor64($2891, $2886);
      var $2898 = Runtime.xor64($2897, $2896);
      
      var $2900 = HEAP[$S + 32];
      
      var $2902 = HEAP[$S + 40];
      var $2903 = Runtime.or64($2902, $2900);
      
      var $2905 = HEAP[$S + 48];
      var $2906 = Runtime.and64($2903, $2905);
      
      var $2908 = HEAP[$S + 32];
      
      var $2910 = HEAP[$S + 40];
      var $2911 = Runtime.and64($2910, $2908);
      var $2912 = Runtime.or64($2911, $2906);
      
      $t1 = $2912 + $2898;
      
      
      
      var $2917 = $t0 + HEAP[$S + 56];
      
      HEAP[$S + 56] = $2917;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      var $2924 = HEAP[$S + 16];
      
      var $2926 = HEAP[$S + 56];
      var $2927 = unSign($2926, 64, 1) / Math.pow(2, 14);
      var $2928 = $2926 * Math.pow(2, 50);
      var $2929 = Runtime.or64($2927, $2928);
      
      var $2931 = HEAP[$S + 56];
      var $2932 = unSign($2931, 64, 1) / Math.pow(2, 18);
      var $2933 = $2931 * Math.pow(2, 46);
      var $2934 = Runtime.or64($2932, $2933);
      
      var $2936 = HEAP[$S + 56];
      var $2937 = unSign($2936, 64, 1) / Math.pow(2, 41);
      var $2938 = $2936 * Math.pow(2, 23);
      var $2939 = Runtime.or64($2937, $2938);
      var $2940 = Runtime.xor64($2934, $2929);
      var $2941 = Runtime.xor64($2940, $2939);
      
      var $2943 = HEAP[$S + 8];
      
      var $2945 = HEAP[$S + 56];
      
      var $2947 = HEAP[$S];
      
      var $2949 = HEAP[$S + 8];
      var $2950 = Runtime.xor64($2949, $2947);
      var $2951 = Runtime.and64($2950, $2945);
      var $2952 = Runtime.xor64($2951, $2943);
      
      
      
      
      
      
      $t0 = $2924 + 0x766a0abb3c77b400 + $2941 + HEAP[$W + 296] + $2952;
      
      var $2960 = HEAP[$S + 24];
      var $2961 = unSign($2960, 64, 1) / Math.pow(2, 28);
      var $2962 = $2960 * Math.pow(2, 36);
      var $2963 = Runtime.or64($2961, $2962);
      
      var $2965 = HEAP[$S + 24];
      var $2966 = unSign($2965, 64, 1) / Math.pow(2, 34);
      var $2967 = $2965 * Math.pow(2, 30);
      var $2968 = Runtime.or64($2966, $2967);
      
      var $2970 = HEAP[$S + 24];
      var $2971 = unSign($2970, 64, 1) / Math.pow(2, 39);
      var $2972 = $2970 * Math.pow(2, 25);
      var $2973 = Runtime.or64($2971, $2972);
      var $2974 = Runtime.xor64($2968, $2963);
      var $2975 = Runtime.xor64($2974, $2973);
      
      var $2977 = HEAP[$S + 24];
      
      var $2979 = HEAP[$S + 32];
      var $2980 = Runtime.or64($2979, $2977);
      
      var $2982 = HEAP[$S + 40];
      var $2983 = Runtime.and64($2980, $2982);
      
      var $2985 = HEAP[$S + 24];
      
      var $2987 = HEAP[$S + 32];
      var $2988 = Runtime.and64($2987, $2985);
      var $2989 = Runtime.or64($2988, $2983);
      
      $t1 = $2989 + $2975;
      
      
      
      var $2994 = $t0 + HEAP[$S + 48];
      
      HEAP[$S + 48] = $2994;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      var $3001 = HEAP[$S + 8];
      
      var $3003 = HEAP[$S + 48];
      var $3004 = unSign($3003, 64, 1) / Math.pow(2, 14);
      var $3005 = $3003 * Math.pow(2, 50);
      var $3006 = Runtime.or64($3004, $3005);
      
      var $3008 = HEAP[$S + 48];
      var $3009 = unSign($3008, 64, 1) / Math.pow(2, 18);
      var $3010 = $3008 * Math.pow(2, 46);
      var $3011 = Runtime.or64($3009, $3010);
      
      var $3013 = HEAP[$S + 48];
      var $3014 = unSign($3013, 64, 1) / Math.pow(2, 41);
      var $3015 = $3013 * Math.pow(2, 23);
      var $3016 = Runtime.or64($3014, $3015);
      var $3017 = Runtime.xor64($3011, $3006);
      var $3018 = Runtime.xor64($3017, $3016);
      
      var $3020 = HEAP[$S];
      
      var $3022 = HEAP[$S + 48];
      
      var $3024 = HEAP[$S + 56];
      
      var $3026 = HEAP[$S];
      var $3027 = Runtime.xor64($3026, $3024);
      var $3028 = Runtime.and64($3027, $3022);
      var $3029 = Runtime.xor64($3028, $3020);
      
      
      var $3032 = $3001 + -0x7e3d36d1b8125000;
      
      
      
      $t0 = $3032 + $3018 + HEAP[$W + 304] + $3029;
      
      var $3037 = HEAP[$S + 16];
      var $3038 = unSign($3037, 64, 1) / Math.pow(2, 28);
      var $3039 = $3037 * Math.pow(2, 36);
      var $3040 = Runtime.or64($3038, $3039);
      
      var $3042 = HEAP[$S + 16];
      var $3043 = unSign($3042, 64, 1) / Math.pow(2, 34);
      var $3044 = $3042 * Math.pow(2, 30);
      var $3045 = Runtime.or64($3043, $3044);
      
      var $3047 = HEAP[$S + 16];
      var $3048 = unSign($3047, 64, 1) / Math.pow(2, 39);
      var $3049 = $3047 * Math.pow(2, 25);
      var $3050 = Runtime.or64($3048, $3049);
      var $3051 = Runtime.xor64($3045, $3040);
      var $3052 = Runtime.xor64($3051, $3050);
      
      var $3054 = HEAP[$S + 16];
      
      var $3056 = HEAP[$S + 24];
      var $3057 = Runtime.or64($3056, $3054);
      
      var $3059 = HEAP[$S + 32];
      var $3060 = Runtime.and64($3057, $3059);
      
      var $3062 = HEAP[$S + 16];
      
      var $3064 = HEAP[$S + 24];
      var $3065 = Runtime.and64($3064, $3062);
      var $3066 = Runtime.or64($3065, $3060);
      
      $t1 = $3066 + $3052;
      
      
      
      var $3071 = $t0 + HEAP[$S + 40];
      
      HEAP[$S + 40] = $3071;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      var $3078 = HEAP[$S];
      
      var $3080 = HEAP[$S + 40];
      var $3081 = unSign($3080, 64, 1) / Math.pow(2, 14);
      var $3082 = $3080 * Math.pow(2, 50);
      var $3083 = Runtime.or64($3081, $3082);
      
      var $3085 = HEAP[$S + 40];
      var $3086 = unSign($3085, 64, 1) / Math.pow(2, 18);
      var $3087 = $3085 * Math.pow(2, 46);
      var $3088 = Runtime.or64($3086, $3087);
      
      var $3090 = HEAP[$S + 40];
      var $3091 = unSign($3090, 64, 1) / Math.pow(2, 41);
      var $3092 = $3090 * Math.pow(2, 23);
      var $3093 = Runtime.or64($3091, $3092);
      var $3094 = Runtime.xor64($3088, $3083);
      var $3095 = Runtime.xor64($3094, $3093);
      
      var $3097 = HEAP[$S + 56];
      
      var $3099 = HEAP[$S + 40];
      
      var $3101 = HEAP[$S + 48];
      
      var $3103 = HEAP[$S + 56];
      var $3104 = Runtime.xor64($3103, $3101);
      var $3105 = Runtime.and64($3104, $3099);
      var $3106 = Runtime.xor64($3105, $3097);
      
      
      var $3109 = $3078 + -0x6d8dd37aeb7dcc00;
      
      
      
      $t0 = $3109 + $3095 + HEAP[$W + 312] + $3106;
      
      var $3114 = HEAP[$S + 8];
      var $3115 = unSign($3114, 64, 1) / Math.pow(2, 28);
      var $3116 = $3114 * Math.pow(2, 36);
      var $3117 = Runtime.or64($3115, $3116);
      
      var $3119 = HEAP[$S + 8];
      var $3120 = unSign($3119, 64, 1) / Math.pow(2, 34);
      var $3121 = $3119 * Math.pow(2, 30);
      var $3122 = Runtime.or64($3120, $3121);
      
      var $3124 = HEAP[$S + 8];
      var $3125 = unSign($3124, 64, 1) / Math.pow(2, 39);
      var $3126 = $3124 * Math.pow(2, 25);
      var $3127 = Runtime.or64($3125, $3126);
      var $3128 = Runtime.xor64($3122, $3117);
      var $3129 = Runtime.xor64($3128, $3127);
      
      var $3131 = HEAP[$S + 8];
      
      var $3133 = HEAP[$S + 16];
      var $3134 = Runtime.or64($3133, $3131);
      
      var $3136 = HEAP[$S + 24];
      var $3137 = Runtime.and64($3134, $3136);
      
      var $3139 = HEAP[$S + 8];
      
      var $3141 = HEAP[$S + 16];
      var $3142 = Runtime.and64($3141, $3139);
      var $3143 = Runtime.or64($3142, $3137);
      
      $t1 = $3143 + $3129;
      
      
      
      var $3148 = $t0 + HEAP[$S + 32];
      
      HEAP[$S + 32] = $3148;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      var $3155 = HEAP[$S + 56];
      
      var $3157 = HEAP[$S + 32];
      var $3158 = unSign($3157, 64, 1) / Math.pow(2, 14);
      var $3159 = $3157 * Math.pow(2, 50);
      var $3160 = Runtime.or64($3158, $3159);
      
      var $3162 = HEAP[$S + 32];
      var $3163 = unSign($3162, 64, 1) / Math.pow(2, 18);
      var $3164 = $3162 * Math.pow(2, 46);
      var $3165 = Runtime.or64($3163, $3164);
      
      var $3167 = HEAP[$S + 32];
      var $3168 = unSign($3167, 64, 1) / Math.pow(2, 41);
      var $3169 = $3167 * Math.pow(2, 23);
      var $3170 = Runtime.or64($3168, $3169);
      var $3171 = Runtime.xor64($3165, $3160);
      var $3172 = Runtime.xor64($3171, $3170);
      
      var $3174 = HEAP[$S + 48];
      
      var $3176 = HEAP[$S + 32];
      
      var $3178 = HEAP[$S + 40];
      
      var $3180 = HEAP[$S + 48];
      var $3181 = Runtime.xor64($3180, $3178);
      var $3182 = Runtime.and64($3181, $3176);
      var $3183 = Runtime.xor64($3182, $3174);
      
      
      var $3186 = $3155 + -0x5d40175eb30efc00;
      
      
      
      $t0 = $3186 + $3172 + HEAP[$W + 320] + $3183;
      
      var $3191 = HEAP[$S];
      var $3192 = unSign($3191, 64, 1) / Math.pow(2, 28);
      var $3193 = $3191 * Math.pow(2, 36);
      var $3194 = Runtime.or64($3192, $3193);
      
      var $3196 = HEAP[$S];
      var $3197 = unSign($3196, 64, 1) / Math.pow(2, 34);
      var $3198 = $3196 * Math.pow(2, 30);
      var $3199 = Runtime.or64($3197, $3198);
      
      var $3201 = HEAP[$S];
      var $3202 = unSign($3201, 64, 1) / Math.pow(2, 39);
      var $3203 = $3201 * Math.pow(2, 25);
      var $3204 = Runtime.or64($3202, $3203);
      var $3205 = Runtime.xor64($3199, $3194);
      var $3206 = Runtime.xor64($3205, $3204);
      
      var $3208 = HEAP[$S];
      
      var $3210 = HEAP[$S + 8];
      var $3211 = Runtime.or64($3210, $3208);
      
      var $3213 = HEAP[$S + 16];
      var $3214 = Runtime.and64($3211, $3213);
      
      var $3216 = HEAP[$S];
      
      var $3218 = HEAP[$S + 8];
      var $3219 = Runtime.and64($3218, $3216);
      var $3220 = Runtime.or64($3219, $3214);
      
      $t1 = $3220 + $3206;
      
      
      
      var $3225 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $3225;
      
      
      
      
      HEAP[$S + 56] = $t1 + $t0;
      
      var $3232 = HEAP[$S + 48];
      
      var $3234 = HEAP[$S + 24];
      var $3235 = unSign($3234, 64, 1) / Math.pow(2, 14);
      var $3236 = $3234 * Math.pow(2, 50);
      var $3237 = Runtime.or64($3235, $3236);
      
      var $3239 = HEAP[$S + 24];
      var $3240 = unSign($3239, 64, 1) / Math.pow(2, 18);
      var $3241 = $3239 * Math.pow(2, 46);
      var $3242 = Runtime.or64($3240, $3241);
      
      var $3244 = HEAP[$S + 24];
      var $3245 = unSign($3244, 64, 1) / Math.pow(2, 41);
      var $3246 = $3244 * Math.pow(2, 23);
      var $3247 = Runtime.or64($3245, $3246);
      var $3248 = Runtime.xor64($3242, $3237);
      var $3249 = Runtime.xor64($3248, $3247);
      
      var $3251 = HEAP[$S + 40];
      
      var $3253 = HEAP[$S + 24];
      
      var $3255 = HEAP[$S + 32];
      
      var $3257 = HEAP[$S + 40];
      var $3258 = Runtime.xor64($3257, $3255);
      var $3259 = Runtime.and64($3258, $3253);
      var $3260 = Runtime.xor64($3259, $3251);
      
      
      var $3263 = $3232 + -0x57e599b443bdd000;
      
      
      
      $t0 = $3263 + $3249 + HEAP[$W + 328] + $3260;
      
      var $3268 = HEAP[$S + 56];
      var $3269 = unSign($3268, 64, 1) / Math.pow(2, 28);
      var $3270 = $3268 * Math.pow(2, 36);
      var $3271 = Runtime.or64($3269, $3270);
      
      var $3273 = HEAP[$S + 56];
      var $3274 = unSign($3273, 64, 1) / Math.pow(2, 34);
      var $3275 = $3273 * Math.pow(2, 30);
      var $3276 = Runtime.or64($3274, $3275);
      
      var $3278 = HEAP[$S + 56];
      var $3279 = unSign($3278, 64, 1) / Math.pow(2, 39);
      var $3280 = $3278 * Math.pow(2, 25);
      var $3281 = Runtime.or64($3279, $3280);
      var $3282 = Runtime.xor64($3276, $3271);
      var $3283 = Runtime.xor64($3282, $3281);
      
      var $3285 = HEAP[$S + 56];
      
      var $3287 = HEAP[$S];
      var $3288 = Runtime.or64($3287, $3285);
      
      var $3290 = HEAP[$S + 8];
      var $3291 = Runtime.and64($3288, $3290);
      
      var $3293 = HEAP[$S + 56];
      
      var $3295 = HEAP[$S];
      var $3296 = Runtime.and64($3295, $3293);
      var $3297 = Runtime.or64($3296, $3291);
      
      $t1 = $3297 + $3283;
      
      
      
      var $3302 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $3302;
      
      
      
      
      HEAP[$S + 48] = $t1 + $t0;
      
      var $3309 = HEAP[$S + 40];
      
      var $3311 = HEAP[$S + 16];
      var $3312 = unSign($3311, 64, 1) / Math.pow(2, 14);
      var $3313 = $3311 * Math.pow(2, 50);
      var $3314 = Runtime.or64($3312, $3313);
      
      var $3316 = HEAP[$S + 16];
      var $3317 = unSign($3316, 64, 1) / Math.pow(2, 18);
      var $3318 = $3316 * Math.pow(2, 46);
      var $3319 = Runtime.or64($3317, $3318);
      
      var $3321 = HEAP[$S + 16];
      var $3322 = unSign($3321, 64, 1) / Math.pow(2, 41);
      var $3323 = $3321 * Math.pow(2, 23);
      var $3324 = Runtime.or64($3322, $3323);
      var $3325 = Runtime.xor64($3319, $3314);
      var $3326 = Runtime.xor64($3325, $3324);
      
      var $3328 = HEAP[$S + 32];
      
      var $3330 = HEAP[$S + 16];
      
      var $3332 = HEAP[$S + 24];
      
      var $3334 = HEAP[$S + 32];
      var $3335 = Runtime.xor64($3334, $3332);
      var $3336 = Runtime.and64($3335, $3330);
      var $3337 = Runtime.xor64($3336, $3328);
      
      
      var $3340 = $3309 + -0x3db4748f2f076800;
      
      
      
      $t0 = $3340 + $3326 + HEAP[$W + 336] + $3337;
      
      var $3345 = HEAP[$S + 48];
      var $3346 = unSign($3345, 64, 1) / Math.pow(2, 28);
      var $3347 = $3345 * Math.pow(2, 36);
      var $3348 = Runtime.or64($3346, $3347);
      
      var $3350 = HEAP[$S + 48];
      var $3351 = unSign($3350, 64, 1) / Math.pow(2, 34);
      var $3352 = $3350 * Math.pow(2, 30);
      var $3353 = Runtime.or64($3351, $3352);
      
      var $3355 = HEAP[$S + 48];
      var $3356 = unSign($3355, 64, 1) / Math.pow(2, 39);
      var $3357 = $3355 * Math.pow(2, 25);
      var $3358 = Runtime.or64($3356, $3357);
      var $3359 = Runtime.xor64($3353, $3348);
      var $3360 = Runtime.xor64($3359, $3358);
      
      var $3362 = HEAP[$S + 48];
      
      var $3364 = HEAP[$S + 56];
      var $3365 = Runtime.or64($3364, $3362);
      
      var $3367 = HEAP[$S];
      var $3368 = Runtime.and64($3365, $3367);
      
      var $3370 = HEAP[$S + 48];
      
      var $3372 = HEAP[$S + 56];
      var $3373 = Runtime.and64($3372, $3370);
      var $3374 = Runtime.or64($3373, $3368);
      
      $t1 = $3374 + $3360;
      
      
      
      var $3379 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $3379;
      
      
      
      
      HEAP[$S + 40] = $t1 + $t0;
      
      var $3386 = HEAP[$S + 32];
      
      var $3388 = HEAP[$S + 8];
      var $3389 = unSign($3388, 64, 1) / Math.pow(2, 14);
      var $3390 = $3388 * Math.pow(2, 50);
      var $3391 = Runtime.or64($3389, $3390);
      
      var $3393 = HEAP[$S + 8];
      var $3394 = unSign($3393, 64, 1) / Math.pow(2, 18);
      var $3395 = $3393 * Math.pow(2, 46);
      var $3396 = Runtime.or64($3394, $3395);
      
      var $3398 = HEAP[$S + 8];
      var $3399 = unSign($3398, 64, 1) / Math.pow(2, 41);
      var $3400 = $3398 * Math.pow(2, 23);
      var $3401 = Runtime.or64($3399, $3400);
      var $3402 = Runtime.xor64($3396, $3391);
      var $3403 = Runtime.xor64($3402, $3401);
      
      var $3405 = HEAP[$S + 24];
      
      var $3407 = HEAP[$S + 8];
      
      var $3409 = HEAP[$S + 16];
      
      var $3411 = HEAP[$S + 24];
      var $3412 = Runtime.xor64($3411, $3409);
      var $3413 = Runtime.and64($3412, $3407);
      var $3414 = Runtime.xor64($3413, $3405);
      
      
      var $3417 = $3386 + -0x3893ae5cf9ab4200;
      
      
      
      $t0 = $3417 + $3403 + HEAP[$W + 344] + $3414;
      
      var $3422 = HEAP[$S + 40];
      var $3423 = unSign($3422, 64, 1) / Math.pow(2, 28);
      var $3424 = $3422 * Math.pow(2, 36);
      var $3425 = Runtime.or64($3423, $3424);
      
      var $3427 = HEAP[$S + 40];
      var $3428 = unSign($3427, 64, 1) / Math.pow(2, 34);
      var $3429 = $3427 * Math.pow(2, 30);
      var $3430 = Runtime.or64($3428, $3429);
      
      var $3432 = HEAP[$S + 40];
      var $3433 = unSign($3432, 64, 1) / Math.pow(2, 39);
      var $3434 = $3432 * Math.pow(2, 25);
      var $3435 = Runtime.or64($3433, $3434);
      var $3436 = Runtime.xor64($3430, $3425);
      var $3437 = Runtime.xor64($3436, $3435);
      
      var $3439 = HEAP[$S + 40];
      
      var $3441 = HEAP[$S + 48];
      var $3442 = Runtime.or64($3441, $3439);
      
      var $3444 = HEAP[$S + 56];
      var $3445 = Runtime.and64($3442, $3444);
      
      var $3447 = HEAP[$S + 40];
      
      var $3449 = HEAP[$S + 48];
      var $3450 = Runtime.and64($3449, $3447);
      var $3451 = Runtime.or64($3450, $3445);
      
      $t1 = $3451 + $3437;
      
      
      
      var $3456 = $t0 + HEAP[$S];
      
      HEAP[$S] = $3456;
      
      
      
      
      HEAP[$S + 32] = $t1 + $t0;
      
      var $3463 = HEAP[$S + 24];
      
      var $3465 = HEAP[$S];
      var $3466 = unSign($3465, 64, 1) / Math.pow(2, 14);
      var $3467 = $3465 * Math.pow(2, 50);
      var $3468 = Runtime.or64($3466, $3467);
      
      var $3470 = HEAP[$S];
      var $3471 = unSign($3470, 64, 1) / Math.pow(2, 18);
      var $3472 = $3470 * Math.pow(2, 46);
      var $3473 = Runtime.or64($3471, $3472);
      
      var $3475 = HEAP[$S];
      var $3476 = unSign($3475, 64, 1) / Math.pow(2, 41);
      var $3477 = $3475 * Math.pow(2, 23);
      var $3478 = Runtime.or64($3476, $3477);
      var $3479 = Runtime.xor64($3473, $3468);
      var $3480 = Runtime.xor64($3479, $3478);
      
      var $3482 = HEAP[$S + 16];
      
      var $3484 = HEAP[$S];
      
      var $3486 = HEAP[$S + 8];
      
      var $3488 = HEAP[$S + 16];
      var $3489 = Runtime.xor64($3488, $3486);
      var $3490 = Runtime.and64($3489, $3484);
      var $3491 = Runtime.xor64($3490, $3482);
      
      
      var $3494 = $3463 + -0x2e6d17e62910ae00;
      
      
      
      $t0 = $3494 + $3480 + HEAP[$W + 352] + $3491;
      
      var $3499 = HEAP[$S + 32];
      var $3500 = unSign($3499, 64, 1) / Math.pow(2, 28);
      var $3501 = $3499 * Math.pow(2, 36);
      var $3502 = Runtime.or64($3500, $3501);
      
      var $3504 = HEAP[$S + 32];
      var $3505 = unSign($3504, 64, 1) / Math.pow(2, 34);
      var $3506 = $3504 * Math.pow(2, 30);
      var $3507 = Runtime.or64($3505, $3506);
      
      var $3509 = HEAP[$S + 32];
      var $3510 = unSign($3509, 64, 1) / Math.pow(2, 39);
      var $3511 = $3509 * Math.pow(2, 25);
      var $3512 = Runtime.or64($3510, $3511);
      var $3513 = Runtime.xor64($3507, $3502);
      var $3514 = Runtime.xor64($3513, $3512);
      
      var $3516 = HEAP[$S + 32];
      
      var $3518 = HEAP[$S + 40];
      var $3519 = Runtime.or64($3518, $3516);
      
      var $3521 = HEAP[$S + 48];
      var $3522 = Runtime.and64($3519, $3521);
      
      var $3524 = HEAP[$S + 32];
      
      var $3526 = HEAP[$S + 40];
      var $3527 = Runtime.and64($3526, $3524);
      var $3528 = Runtime.or64($3527, $3522);
      
      $t1 = $3528 + $3514;
      
      
      
      var $3533 = $t0 + HEAP[$S + 56];
      
      HEAP[$S + 56] = $3533;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      var $3540 = HEAP[$S + 16];
      
      var $3542 = HEAP[$S + 56];
      var $3543 = unSign($3542, 64, 1) / Math.pow(2, 14);
      var $3544 = $3542 * Math.pow(2, 50);
      var $3545 = Runtime.or64($3543, $3544);
      
      var $3547 = HEAP[$S + 56];
      var $3548 = unSign($3547, 64, 1) / Math.pow(2, 18);
      var $3549 = $3547 * Math.pow(2, 46);
      var $3550 = Runtime.or64($3548, $3549);
      
      var $3552 = HEAP[$S + 56];
      var $3553 = unSign($3552, 64, 1) / Math.pow(2, 41);
      var $3554 = $3552 * Math.pow(2, 23);
      var $3555 = Runtime.or64($3553, $3554);
      var $3556 = Runtime.xor64($3550, $3545);
      var $3557 = Runtime.xor64($3556, $3555);
      
      var $3559 = HEAP[$S + 8];
      
      var $3561 = HEAP[$S + 56];
      
      var $3563 = HEAP[$S];
      
      var $3565 = HEAP[$S + 8];
      var $3566 = Runtime.xor64($3565, $3563);
      var $3567 = Runtime.and64($3566, $3561);
      var $3568 = Runtime.xor64($3567, $3559);
      
      
      var $3571 = $3540 + -0x2966f9dbaa9a5600;
      
      
      
      $t0 = $3571 + $3557 + HEAP[$W + 360] + $3568;
      
      var $3576 = HEAP[$S + 24];
      var $3577 = unSign($3576, 64, 1) / Math.pow(2, 28);
      var $3578 = $3576 * Math.pow(2, 36);
      var $3579 = Runtime.or64($3577, $3578);
      
      var $3581 = HEAP[$S + 24];
      var $3582 = unSign($3581, 64, 1) / Math.pow(2, 34);
      var $3583 = $3581 * Math.pow(2, 30);
      var $3584 = Runtime.or64($3582, $3583);
      
      var $3586 = HEAP[$S + 24];
      var $3587 = unSign($3586, 64, 1) / Math.pow(2, 39);
      var $3588 = $3586 * Math.pow(2, 25);
      var $3589 = Runtime.or64($3587, $3588);
      var $3590 = Runtime.xor64($3584, $3579);
      var $3591 = Runtime.xor64($3590, $3589);
      
      var $3593 = HEAP[$S + 24];
      
      var $3595 = HEAP[$S + 32];
      var $3596 = Runtime.or64($3595, $3593);
      
      var $3598 = HEAP[$S + 40];
      var $3599 = Runtime.and64($3596, $3598);
      
      var $3601 = HEAP[$S + 24];
      
      var $3603 = HEAP[$S + 32];
      var $3604 = Runtime.and64($3603, $3601);
      var $3605 = Runtime.or64($3604, $3599);
      
      $t1 = $3605 + $3591;
      
      
      
      var $3610 = $t0 + HEAP[$S + 48];
      
      HEAP[$S + 48] = $3610;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      var $3617 = HEAP[$S + 8];
      
      var $3619 = HEAP[$S + 48];
      var $3620 = unSign($3619, 64, 1) / Math.pow(2, 14);
      var $3621 = $3619 * Math.pow(2, 50);
      var $3622 = Runtime.or64($3620, $3621);
      
      var $3624 = HEAP[$S + 48];
      var $3625 = unSign($3624, 64, 1) / Math.pow(2, 18);
      var $3626 = $3624 * Math.pow(2, 46);
      var $3627 = Runtime.or64($3625, $3626);
      
      var $3629 = HEAP[$S + 48];
      var $3630 = unSign($3629, 64, 1) / Math.pow(2, 41);
      var $3631 = $3629 * Math.pow(2, 23);
      var $3632 = Runtime.or64($3630, $3631);
      var $3633 = Runtime.xor64($3627, $3622);
      var $3634 = Runtime.xor64($3633, $3632);
      
      var $3636 = HEAP[$S];
      
      var $3638 = HEAP[$S + 48];
      
      var $3640 = HEAP[$S + 56];
      
      var $3642 = HEAP[$S];
      var $3643 = Runtime.xor64($3642, $3640);
      var $3644 = Runtime.and64($3643, $3638);
      var $3645 = Runtime.xor64($3644, $3636);
      
      
      var $3648 = $3617 + -0xbf1ca7aa88ee000;
      
      
      
      $t0 = $3648 + $3634 + HEAP[$W + 368] + $3645;
      
      var $3653 = HEAP[$S + 16];
      var $3654 = unSign($3653, 64, 1) / Math.pow(2, 28);
      var $3655 = $3653 * Math.pow(2, 36);
      var $3656 = Runtime.or64($3654, $3655);
      
      var $3658 = HEAP[$S + 16];
      var $3659 = unSign($3658, 64, 1) / Math.pow(2, 34);
      var $3660 = $3658 * Math.pow(2, 30);
      var $3661 = Runtime.or64($3659, $3660);
      
      var $3663 = HEAP[$S + 16];
      var $3664 = unSign($3663, 64, 1) / Math.pow(2, 39);
      var $3665 = $3663 * Math.pow(2, 25);
      var $3666 = Runtime.or64($3664, $3665);
      var $3667 = Runtime.xor64($3661, $3656);
      var $3668 = Runtime.xor64($3667, $3666);
      
      var $3670 = HEAP[$S + 16];
      
      var $3672 = HEAP[$S + 24];
      var $3673 = Runtime.or64($3672, $3670);
      
      var $3675 = HEAP[$S + 32];
      var $3676 = Runtime.and64($3673, $3675);
      
      var $3678 = HEAP[$S + 16];
      
      var $3680 = HEAP[$S + 24];
      var $3681 = Runtime.and64($3680, $3678);
      var $3682 = Runtime.or64($3681, $3676);
      
      $t1 = $3682 + $3668;
      
      
      
      var $3687 = $t0 + HEAP[$S + 40];
      
      HEAP[$S + 40] = $3687;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      var $3694 = HEAP[$S];
      
      var $3696 = HEAP[$S + 40];
      var $3697 = unSign($3696, 64, 1) / Math.pow(2, 14);
      var $3698 = $3696 * Math.pow(2, 50);
      var $3699 = Runtime.or64($3697, $3698);
      
      var $3701 = HEAP[$S + 40];
      var $3702 = unSign($3701, 64, 1) / Math.pow(2, 18);
      var $3703 = $3701 * Math.pow(2, 46);
      var $3704 = Runtime.or64($3702, $3703);
      
      var $3706 = HEAP[$S + 40];
      var $3707 = unSign($3706, 64, 1) / Math.pow(2, 41);
      var $3708 = $3706 * Math.pow(2, 23);
      var $3709 = Runtime.or64($3707, $3708);
      var $3710 = Runtime.xor64($3704, $3699);
      var $3711 = Runtime.xor64($3710, $3709);
      
      var $3713 = HEAP[$S + 56];
      
      var $3715 = HEAP[$S + 40];
      
      var $3717 = HEAP[$S + 48];
      
      var $3719 = HEAP[$S + 56];
      var $3720 = Runtime.xor64($3719, $3717);
      var $3721 = Runtime.and64($3720, $3715);
      var $3722 = Runtime.xor64($3721, $3713);
      
      
      
      
      
      
      $t0 = $3694 + 0x106aa07032bbd200 + $3711 + HEAP[$W + 376] + $3722;
      
      var $3730 = HEAP[$S + 8];
      var $3731 = unSign($3730, 64, 1) / Math.pow(2, 28);
      var $3732 = $3730 * Math.pow(2, 36);
      var $3733 = Runtime.or64($3731, $3732);
      
      var $3735 = HEAP[$S + 8];
      var $3736 = unSign($3735, 64, 1) / Math.pow(2, 34);
      var $3737 = $3735 * Math.pow(2, 30);
      var $3738 = Runtime.or64($3736, $3737);
      
      var $3740 = HEAP[$S + 8];
      var $3741 = unSign($3740, 64, 1) / Math.pow(2, 39);
      var $3742 = $3740 * Math.pow(2, 25);
      var $3743 = Runtime.or64($3741, $3742);
      var $3744 = Runtime.xor64($3738, $3733);
      var $3745 = Runtime.xor64($3744, $3743);
      
      var $3747 = HEAP[$S + 8];
      
      var $3749 = HEAP[$S + 16];
      var $3750 = Runtime.or64($3749, $3747);
      
      var $3752 = HEAP[$S + 24];
      var $3753 = Runtime.and64($3750, $3752);
      
      var $3755 = HEAP[$S + 8];
      
      var $3757 = HEAP[$S + 16];
      var $3758 = Runtime.and64($3757, $3755);
      var $3759 = Runtime.or64($3758, $3753);
      
      $t1 = $3759 + $3745;
      
      
      
      var $3764 = $t0 + HEAP[$S + 32];
      
      HEAP[$S + 32] = $3764;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      var $3771 = HEAP[$S + 56];
      
      var $3773 = HEAP[$S + 32];
      var $3774 = unSign($3773, 64, 1) / Math.pow(2, 14);
      var $3775 = $3773 * Math.pow(2, 50);
      var $3776 = Runtime.or64($3774, $3775);
      
      var $3778 = HEAP[$S + 32];
      var $3779 = unSign($3778, 64, 1) / Math.pow(2, 18);
      var $3780 = $3778 * Math.pow(2, 46);
      var $3781 = Runtime.or64($3779, $3780);
      
      var $3783 = HEAP[$S + 32];
      var $3784 = unSign($3783, 64, 1) / Math.pow(2, 41);
      var $3785 = $3783 * Math.pow(2, 23);
      var $3786 = Runtime.or64($3784, $3785);
      var $3787 = Runtime.xor64($3781, $3776);
      var $3788 = Runtime.xor64($3787, $3786);
      
      var $3790 = HEAP[$S + 48];
      
      var $3792 = HEAP[$S + 32];
      
      var $3794 = HEAP[$S + 40];
      
      var $3796 = HEAP[$S + 48];
      var $3797 = Runtime.xor64($3796, $3794);
      var $3798 = Runtime.and64($3797, $3792);
      var $3799 = Runtime.xor64($3798, $3790);
      
      
      
      
      
      
      $t0 = $3771 + 0x19a4c116b8d2d100 + $3788 + HEAP[$W + 384] + $3799;
      
      var $3807 = HEAP[$S];
      var $3808 = unSign($3807, 64, 1) / Math.pow(2, 28);
      var $3809 = $3807 * Math.pow(2, 36);
      var $3810 = Runtime.or64($3808, $3809);
      
      var $3812 = HEAP[$S];
      var $3813 = unSign($3812, 64, 1) / Math.pow(2, 34);
      var $3814 = $3812 * Math.pow(2, 30);
      var $3815 = Runtime.or64($3813, $3814);
      
      var $3817 = HEAP[$S];
      var $3818 = unSign($3817, 64, 1) / Math.pow(2, 39);
      var $3819 = $3817 * Math.pow(2, 25);
      var $3820 = Runtime.or64($3818, $3819);
      var $3821 = Runtime.xor64($3815, $3810);
      var $3822 = Runtime.xor64($3821, $3820);
      
      var $3824 = HEAP[$S];
      
      var $3826 = HEAP[$S + 8];
      var $3827 = Runtime.or64($3826, $3824);
      
      var $3829 = HEAP[$S + 16];
      var $3830 = Runtime.and64($3827, $3829);
      
      var $3832 = HEAP[$S];
      
      var $3834 = HEAP[$S + 8];
      var $3835 = Runtime.and64($3834, $3832);
      var $3836 = Runtime.or64($3835, $3830);
      
      $t1 = $3836 + $3822;
      
      
      
      var $3841 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $3841;
      
      
      
      
      HEAP[$S + 56] = $t1 + $t0;
      
      var $3848 = HEAP[$S + 48];
      
      var $3850 = HEAP[$S + 24];
      var $3851 = unSign($3850, 64, 1) / Math.pow(2, 14);
      var $3852 = $3850 * Math.pow(2, 50);
      var $3853 = Runtime.or64($3851, $3852);
      
      var $3855 = HEAP[$S + 24];
      var $3856 = unSign($3855, 64, 1) / Math.pow(2, 18);
      var $3857 = $3855 * Math.pow(2, 46);
      var $3858 = Runtime.or64($3856, $3857);
      
      var $3860 = HEAP[$S + 24];
      var $3861 = unSign($3860, 64, 1) / Math.pow(2, 41);
      var $3862 = $3860 * Math.pow(2, 23);
      var $3863 = Runtime.or64($3861, $3862);
      var $3864 = Runtime.xor64($3858, $3853);
      var $3865 = Runtime.xor64($3864, $3863);
      
      var $3867 = HEAP[$S + 40];
      
      var $3869 = HEAP[$S + 24];
      
      var $3871 = HEAP[$S + 32];
      
      var $3873 = HEAP[$S + 40];
      var $3874 = Runtime.xor64($3873, $3871);
      var $3875 = Runtime.and64($3874, $3869);
      var $3876 = Runtime.xor64($3875, $3867);
      
      
      
      
      
      
      $t0 = $3848 + 0x1e376c085141ab00 + $3865 + HEAP[$W + 392] + $3876;
      
      var $3884 = HEAP[$S + 56];
      var $3885 = unSign($3884, 64, 1) / Math.pow(2, 28);
      var $3886 = $3884 * Math.pow(2, 36);
      var $3887 = Runtime.or64($3885, $3886);
      
      var $3889 = HEAP[$S + 56];
      var $3890 = unSign($3889, 64, 1) / Math.pow(2, 34);
      var $3891 = $3889 * Math.pow(2, 30);
      var $3892 = Runtime.or64($3890, $3891);
      
      var $3894 = HEAP[$S + 56];
      var $3895 = unSign($3894, 64, 1) / Math.pow(2, 39);
      var $3896 = $3894 * Math.pow(2, 25);
      var $3897 = Runtime.or64($3895, $3896);
      var $3898 = Runtime.xor64($3892, $3887);
      var $3899 = Runtime.xor64($3898, $3897);
      
      var $3901 = HEAP[$S + 56];
      
      var $3903 = HEAP[$S];
      var $3904 = Runtime.or64($3903, $3901);
      
      var $3906 = HEAP[$S + 8];
      var $3907 = Runtime.and64($3904, $3906);
      
      var $3909 = HEAP[$S + 56];
      
      var $3911 = HEAP[$S];
      var $3912 = Runtime.and64($3911, $3909);
      var $3913 = Runtime.or64($3912, $3907);
      
      $t1 = $3913 + $3899;
      
      
      
      var $3918 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $3918;
      
      
      
      
      HEAP[$S + 48] = $t1 + $t0;
      
      var $3925 = HEAP[$S + 40];
      
      var $3927 = HEAP[$S + 16];
      var $3928 = unSign($3927, 64, 1) / Math.pow(2, 14);
      var $3929 = $3927 * Math.pow(2, 50);
      var $3930 = Runtime.or64($3928, $3929);
      
      var $3932 = HEAP[$S + 16];
      var $3933 = unSign($3932, 64, 1) / Math.pow(2, 18);
      var $3934 = $3932 * Math.pow(2, 46);
      var $3935 = Runtime.or64($3933, $3934);
      
      var $3937 = HEAP[$S + 16];
      var $3938 = unSign($3937, 64, 1) / Math.pow(2, 41);
      var $3939 = $3937 * Math.pow(2, 23);
      var $3940 = Runtime.or64($3938, $3939);
      var $3941 = Runtime.xor64($3935, $3930);
      var $3942 = Runtime.xor64($3941, $3940);
      
      var $3944 = HEAP[$S + 32];
      
      var $3946 = HEAP[$S + 16];
      
      var $3948 = HEAP[$S + 24];
      
      var $3950 = HEAP[$S + 32];
      var $3951 = Runtime.xor64($3950, $3948);
      var $3952 = Runtime.and64($3951, $3946);
      var $3953 = Runtime.xor64($3952, $3944);
      
      
      
      
      
      
      $t0 = $3925 + 0x2748774cdf8eec00 + $3942 + HEAP[$W + 400] + $3953;
      
      var $3961 = HEAP[$S + 48];
      var $3962 = unSign($3961, 64, 1) / Math.pow(2, 28);
      var $3963 = $3961 * Math.pow(2, 36);
      var $3964 = Runtime.or64($3962, $3963);
      
      var $3966 = HEAP[$S + 48];
      var $3967 = unSign($3966, 64, 1) / Math.pow(2, 34);
      var $3968 = $3966 * Math.pow(2, 30);
      var $3969 = Runtime.or64($3967, $3968);
      
      var $3971 = HEAP[$S + 48];
      var $3972 = unSign($3971, 64, 1) / Math.pow(2, 39);
      var $3973 = $3971 * Math.pow(2, 25);
      var $3974 = Runtime.or64($3972, $3973);
      var $3975 = Runtime.xor64($3969, $3964);
      var $3976 = Runtime.xor64($3975, $3974);
      
      var $3978 = HEAP[$S + 48];
      
      var $3980 = HEAP[$S + 56];
      var $3981 = Runtime.or64($3980, $3978);
      
      var $3983 = HEAP[$S];
      var $3984 = Runtime.and64($3981, $3983);
      
      var $3986 = HEAP[$S + 48];
      
      var $3988 = HEAP[$S + 56];
      var $3989 = Runtime.and64($3988, $3986);
      var $3990 = Runtime.or64($3989, $3984);
      
      $t1 = $3990 + $3976;
      
      
      
      var $3995 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $3995;
      
      
      
      
      HEAP[$S + 40] = $t1 + $t0;
      
      var $4002 = HEAP[$S + 32];
      
      var $4004 = HEAP[$S + 8];
      var $4005 = unSign($4004, 64, 1) / Math.pow(2, 14);
      var $4006 = $4004 * Math.pow(2, 50);
      var $4007 = Runtime.or64($4005, $4006);
      
      var $4009 = HEAP[$S + 8];
      var $4010 = unSign($4009, 64, 1) / Math.pow(2, 18);
      var $4011 = $4009 * Math.pow(2, 46);
      var $4012 = Runtime.or64($4010, $4011);
      
      var $4014 = HEAP[$S + 8];
      var $4015 = unSign($4014, 64, 1) / Math.pow(2, 41);
      var $4016 = $4014 * Math.pow(2, 23);
      var $4017 = Runtime.or64($4015, $4016);
      var $4018 = Runtime.xor64($4012, $4007);
      var $4019 = Runtime.xor64($4018, $4017);
      
      var $4021 = HEAP[$S + 24];
      
      var $4023 = HEAP[$S + 8];
      
      var $4025 = HEAP[$S + 16];
      
      var $4027 = HEAP[$S + 24];
      var $4028 = Runtime.xor64($4027, $4025);
      var $4029 = Runtime.and64($4028, $4023);
      var $4030 = Runtime.xor64($4029, $4021);
      
      
      
      
      
      
      $t0 = $4002 + 0x34b0bcb5e19b4800 + $4019 + HEAP[$W + 408] + $4030;
      
      var $4038 = HEAP[$S + 40];
      var $4039 = unSign($4038, 64, 1) / Math.pow(2, 28);
      var $4040 = $4038 * Math.pow(2, 36);
      var $4041 = Runtime.or64($4039, $4040);
      
      var $4043 = HEAP[$S + 40];
      var $4044 = unSign($4043, 64, 1) / Math.pow(2, 34);
      var $4045 = $4043 * Math.pow(2, 30);
      var $4046 = Runtime.or64($4044, $4045);
      
      var $4048 = HEAP[$S + 40];
      var $4049 = unSign($4048, 64, 1) / Math.pow(2, 39);
      var $4050 = $4048 * Math.pow(2, 25);
      var $4051 = Runtime.or64($4049, $4050);
      var $4052 = Runtime.xor64($4046, $4041);
      var $4053 = Runtime.xor64($4052, $4051);
      
      var $4055 = HEAP[$S + 40];
      
      var $4057 = HEAP[$S + 48];
      var $4058 = Runtime.or64($4057, $4055);
      
      var $4060 = HEAP[$S + 56];
      var $4061 = Runtime.and64($4058, $4060);
      
      var $4063 = HEAP[$S + 40];
      
      var $4065 = HEAP[$S + 48];
      var $4066 = Runtime.and64($4065, $4063);
      var $4067 = Runtime.or64($4066, $4061);
      
      $t1 = $4067 + $4053;
      
      
      
      var $4072 = $t0 + HEAP[$S];
      
      HEAP[$S] = $4072;
      
      
      
      
      HEAP[$S + 32] = $t1 + $t0;
      
      var $4079 = HEAP[$S + 24];
      
      var $4081 = HEAP[$S];
      var $4082 = unSign($4081, 64, 1) / Math.pow(2, 14);
      var $4083 = $4081 * Math.pow(2, 50);
      var $4084 = Runtime.or64($4082, $4083);
      
      var $4086 = HEAP[$S];
      var $4087 = unSign($4086, 64, 1) / Math.pow(2, 18);
      var $4088 = $4086 * Math.pow(2, 46);
      var $4089 = Runtime.or64($4087, $4088);
      
      var $4091 = HEAP[$S];
      var $4092 = unSign($4091, 64, 1) / Math.pow(2, 41);
      var $4093 = $4091 * Math.pow(2, 23);
      var $4094 = Runtime.or64($4092, $4093);
      var $4095 = Runtime.xor64($4089, $4084);
      var $4096 = Runtime.xor64($4095, $4094);
      
      var $4098 = HEAP[$S + 16];
      
      var $4100 = HEAP[$S];
      
      var $4102 = HEAP[$S + 8];
      
      var $4104 = HEAP[$S + 16];
      var $4105 = Runtime.xor64($4104, $4102);
      var $4106 = Runtime.and64($4105, $4100);
      var $4107 = Runtime.xor64($4106, $4098);
      
      
      
      
      
      
      $t0 = $4079 + 0x391c0cb3c5c95a00 + $4096 + HEAP[$W + 416] + $4107;
      
      var $4115 = HEAP[$S + 32];
      var $4116 = unSign($4115, 64, 1) / Math.pow(2, 28);
      var $4117 = $4115 * Math.pow(2, 36);
      var $4118 = Runtime.or64($4116, $4117);
      
      var $4120 = HEAP[$S + 32];
      var $4121 = unSign($4120, 64, 1) / Math.pow(2, 34);
      var $4122 = $4120 * Math.pow(2, 30);
      var $4123 = Runtime.or64($4121, $4122);
      
      var $4125 = HEAP[$S + 32];
      var $4126 = unSign($4125, 64, 1) / Math.pow(2, 39);
      var $4127 = $4125 * Math.pow(2, 25);
      var $4128 = Runtime.or64($4126, $4127);
      var $4129 = Runtime.xor64($4123, $4118);
      var $4130 = Runtime.xor64($4129, $4128);
      
      var $4132 = HEAP[$S + 32];
      
      var $4134 = HEAP[$S + 40];
      var $4135 = Runtime.or64($4134, $4132);
      
      var $4137 = HEAP[$S + 48];
      var $4138 = Runtime.and64($4135, $4137);
      
      var $4140 = HEAP[$S + 32];
      
      var $4142 = HEAP[$S + 40];
      var $4143 = Runtime.and64($4142, $4140);
      var $4144 = Runtime.or64($4143, $4138);
      
      $t1 = $4144 + $4130;
      
      
      
      var $4149 = $t0 + HEAP[$S + 56];
      
      HEAP[$S + 56] = $4149;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      var $4156 = HEAP[$S + 16];
      
      var $4158 = HEAP[$S + 56];
      var $4159 = unSign($4158, 64, 1) / Math.pow(2, 14);
      var $4160 = $4158 * Math.pow(2, 50);
      var $4161 = Runtime.or64($4159, $4160);
      
      var $4163 = HEAP[$S + 56];
      var $4164 = unSign($4163, 64, 1) / Math.pow(2, 18);
      var $4165 = $4163 * Math.pow(2, 46);
      var $4166 = Runtime.or64($4164, $4165);
      
      var $4168 = HEAP[$S + 56];
      var $4169 = unSign($4168, 64, 1) / Math.pow(2, 41);
      var $4170 = $4168 * Math.pow(2, 23);
      var $4171 = Runtime.or64($4169, $4170);
      var $4172 = Runtime.xor64($4166, $4161);
      var $4173 = Runtime.xor64($4172, $4171);
      
      var $4175 = HEAP[$S + 8];
      
      var $4177 = HEAP[$S + 56];
      
      var $4179 = HEAP[$S];
      
      var $4181 = HEAP[$S + 8];
      var $4182 = Runtime.xor64($4181, $4179);
      var $4183 = Runtime.and64($4182, $4177);
      var $4184 = Runtime.xor64($4183, $4175);
      
      
      
      
      
      
      $t0 = $4156 + 0x4ed8aa4ae3418c00 + $4173 + HEAP[$W + 424] + $4184;
      
      var $4192 = HEAP[$S + 24];
      var $4193 = unSign($4192, 64, 1) / Math.pow(2, 28);
      var $4194 = $4192 * Math.pow(2, 36);
      var $4195 = Runtime.or64($4193, $4194);
      
      var $4197 = HEAP[$S + 24];
      var $4198 = unSign($4197, 64, 1) / Math.pow(2, 34);
      var $4199 = $4197 * Math.pow(2, 30);
      var $4200 = Runtime.or64($4198, $4199);
      
      var $4202 = HEAP[$S + 24];
      var $4203 = unSign($4202, 64, 1) / Math.pow(2, 39);
      var $4204 = $4202 * Math.pow(2, 25);
      var $4205 = Runtime.or64($4203, $4204);
      var $4206 = Runtime.xor64($4200, $4195);
      var $4207 = Runtime.xor64($4206, $4205);
      
      var $4209 = HEAP[$S + 24];
      
      var $4211 = HEAP[$S + 32];
      var $4212 = Runtime.or64($4211, $4209);
      
      var $4214 = HEAP[$S + 40];
      var $4215 = Runtime.and64($4212, $4214);
      
      var $4217 = HEAP[$S + 24];
      
      var $4219 = HEAP[$S + 32];
      var $4220 = Runtime.and64($4219, $4217);
      var $4221 = Runtime.or64($4220, $4215);
      
      $t1 = $4221 + $4207;
      
      
      
      var $4226 = $t0 + HEAP[$S + 48];
      
      HEAP[$S + 48] = $4226;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      var $4233 = HEAP[$S + 8];
      
      var $4235 = HEAP[$S + 48];
      var $4236 = unSign($4235, 64, 1) / Math.pow(2, 14);
      var $4237 = $4235 * Math.pow(2, 50);
      var $4238 = Runtime.or64($4236, $4237);
      
      var $4240 = HEAP[$S + 48];
      var $4241 = unSign($4240, 64, 1) / Math.pow(2, 18);
      var $4242 = $4240 * Math.pow(2, 46);
      var $4243 = Runtime.or64($4241, $4242);
      
      var $4245 = HEAP[$S + 48];
      var $4246 = unSign($4245, 64, 1) / Math.pow(2, 41);
      var $4247 = $4245 * Math.pow(2, 23);
      var $4248 = Runtime.or64($4246, $4247);
      var $4249 = Runtime.xor64($4243, $4238);
      var $4250 = Runtime.xor64($4249, $4248);
      
      var $4252 = HEAP[$S];
      
      var $4254 = HEAP[$S + 48];
      
      var $4256 = HEAP[$S + 56];
      
      var $4258 = HEAP[$S];
      var $4259 = Runtime.xor64($4258, $4256);
      var $4260 = Runtime.and64($4259, $4254);
      var $4261 = Runtime.xor64($4260, $4252);
      
      
      
      
      
      
      $t0 = $4233 + 0x5b9cca4f7763e400 + $4250 + HEAP[$W + 432] + $4261;
      
      var $4269 = HEAP[$S + 16];
      var $4270 = unSign($4269, 64, 1) / Math.pow(2, 28);
      var $4271 = $4269 * Math.pow(2, 36);
      var $4272 = Runtime.or64($4270, $4271);
      
      var $4274 = HEAP[$S + 16];
      var $4275 = unSign($4274, 64, 1) / Math.pow(2, 34);
      var $4276 = $4274 * Math.pow(2, 30);
      var $4277 = Runtime.or64($4275, $4276);
      
      var $4279 = HEAP[$S + 16];
      var $4280 = unSign($4279, 64, 1) / Math.pow(2, 39);
      var $4281 = $4279 * Math.pow(2, 25);
      var $4282 = Runtime.or64($4280, $4281);
      var $4283 = Runtime.xor64($4277, $4272);
      var $4284 = Runtime.xor64($4283, $4282);
      
      var $4286 = HEAP[$S + 16];
      
      var $4288 = HEAP[$S + 24];
      var $4289 = Runtime.or64($4288, $4286);
      
      var $4291 = HEAP[$S + 32];
      var $4292 = Runtime.and64($4289, $4291);
      
      var $4294 = HEAP[$S + 16];
      
      var $4296 = HEAP[$S + 24];
      var $4297 = Runtime.and64($4296, $4294);
      var $4298 = Runtime.or64($4297, $4292);
      
      $t1 = $4298 + $4284;
      
      
      
      var $4303 = $t0 + HEAP[$S + 40];
      
      HEAP[$S + 40] = $4303;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      var $4310 = HEAP[$S];
      
      var $4312 = HEAP[$S + 40];
      var $4313 = unSign($4312, 64, 1) / Math.pow(2, 14);
      var $4314 = $4312 * Math.pow(2, 50);
      var $4315 = Runtime.or64($4313, $4314);
      
      var $4317 = HEAP[$S + 40];
      var $4318 = unSign($4317, 64, 1) / Math.pow(2, 18);
      var $4319 = $4317 * Math.pow(2, 46);
      var $4320 = Runtime.or64($4318, $4319);
      
      var $4322 = HEAP[$S + 40];
      var $4323 = unSign($4322, 64, 1) / Math.pow(2, 41);
      var $4324 = $4322 * Math.pow(2, 23);
      var $4325 = Runtime.or64($4323, $4324);
      var $4326 = Runtime.xor64($4320, $4315);
      var $4327 = Runtime.xor64($4326, $4325);
      
      var $4329 = HEAP[$S + 56];
      
      var $4331 = HEAP[$S + 40];
      
      var $4333 = HEAP[$S + 48];
      
      var $4335 = HEAP[$S + 56];
      var $4336 = Runtime.xor64($4335, $4333);
      var $4337 = Runtime.and64($4336, $4331);
      var $4338 = Runtime.xor64($4337, $4329);
      
      
      
      
      
      
      $t0 = $4310 + 0x682e6ff3d6b2b800 + $4327 + HEAP[$W + 440] + $4338;
      
      var $4346 = HEAP[$S + 8];
      var $4347 = unSign($4346, 64, 1) / Math.pow(2, 28);
      var $4348 = $4346 * Math.pow(2, 36);
      var $4349 = Runtime.or64($4347, $4348);
      
      var $4351 = HEAP[$S + 8];
      var $4352 = unSign($4351, 64, 1) / Math.pow(2, 34);
      var $4353 = $4351 * Math.pow(2, 30);
      var $4354 = Runtime.or64($4352, $4353);
      
      var $4356 = HEAP[$S + 8];
      var $4357 = unSign($4356, 64, 1) / Math.pow(2, 39);
      var $4358 = $4356 * Math.pow(2, 25);
      var $4359 = Runtime.or64($4357, $4358);
      var $4360 = Runtime.xor64($4354, $4349);
      var $4361 = Runtime.xor64($4360, $4359);
      
      var $4363 = HEAP[$S + 8];
      
      var $4365 = HEAP[$S + 16];
      var $4366 = Runtime.or64($4365, $4363);
      
      var $4368 = HEAP[$S + 24];
      var $4369 = Runtime.and64($4366, $4368);
      
      var $4371 = HEAP[$S + 8];
      
      var $4373 = HEAP[$S + 16];
      var $4374 = Runtime.and64($4373, $4371);
      var $4375 = Runtime.or64($4374, $4369);
      
      $t1 = $4375 + $4361;
      
      
      
      var $4380 = $t0 + HEAP[$S + 32];
      
      HEAP[$S + 32] = $4380;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      var $4387 = HEAP[$S + 56];
      
      var $4389 = HEAP[$S + 32];
      var $4390 = unSign($4389, 64, 1) / Math.pow(2, 14);
      var $4391 = $4389 * Math.pow(2, 50);
      var $4392 = Runtime.or64($4390, $4391);
      
      var $4394 = HEAP[$S + 32];
      var $4395 = unSign($4394, 64, 1) / Math.pow(2, 18);
      var $4396 = $4394 * Math.pow(2, 46);
      var $4397 = Runtime.or64($4395, $4396);
      
      var $4399 = HEAP[$S + 32];
      var $4400 = unSign($4399, 64, 1) / Math.pow(2, 41);
      var $4401 = $4399 * Math.pow(2, 23);
      var $4402 = Runtime.or64($4400, $4401);
      var $4403 = Runtime.xor64($4397, $4392);
      var $4404 = Runtime.xor64($4403, $4402);
      
      var $4406 = HEAP[$S + 48];
      
      var $4408 = HEAP[$S + 32];
      
      var $4410 = HEAP[$S + 40];
      
      var $4412 = HEAP[$S + 48];
      var $4413 = Runtime.xor64($4412, $4410);
      var $4414 = Runtime.and64($4413, $4408);
      var $4415 = Runtime.xor64($4414, $4406);
      
      
      
      
      
      
      $t0 = $4387 + 0x748f82ee5defb400 + $4404 + HEAP[$W + 448] + $4415;
      
      var $4423 = HEAP[$S];
      var $4424 = unSign($4423, 64, 1) / Math.pow(2, 28);
      var $4425 = $4423 * Math.pow(2, 36);
      var $4426 = Runtime.or64($4424, $4425);
      
      var $4428 = HEAP[$S];
      var $4429 = unSign($4428, 64, 1) / Math.pow(2, 34);
      var $4430 = $4428 * Math.pow(2, 30);
      var $4431 = Runtime.or64($4429, $4430);
      
      var $4433 = HEAP[$S];
      var $4434 = unSign($4433, 64, 1) / Math.pow(2, 39);
      var $4435 = $4433 * Math.pow(2, 25);
      var $4436 = Runtime.or64($4434, $4435);
      var $4437 = Runtime.xor64($4431, $4426);
      var $4438 = Runtime.xor64($4437, $4436);
      
      var $4440 = HEAP[$S];
      
      var $4442 = HEAP[$S + 8];
      var $4443 = Runtime.or64($4442, $4440);
      
      var $4445 = HEAP[$S + 16];
      var $4446 = Runtime.and64($4443, $4445);
      
      var $4448 = HEAP[$S];
      
      var $4450 = HEAP[$S + 8];
      var $4451 = Runtime.and64($4450, $4448);
      var $4452 = Runtime.or64($4451, $4446);
      
      $t1 = $4452 + $4438;
      
      
      
      var $4457 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $4457;
      
      
      
      
      HEAP[$S + 56] = $t1 + $t0;
      
      var $4464 = HEAP[$S + 48];
      
      var $4466 = HEAP[$S + 24];
      var $4467 = unSign($4466, 64, 1) / Math.pow(2, 14);
      var $4468 = $4466 * Math.pow(2, 50);
      var $4469 = Runtime.or64($4467, $4468);
      
      var $4471 = HEAP[$S + 24];
      var $4472 = unSign($4471, 64, 1) / Math.pow(2, 18);
      var $4473 = $4471 * Math.pow(2, 46);
      var $4474 = Runtime.or64($4472, $4473);
      
      var $4476 = HEAP[$S + 24];
      var $4477 = unSign($4476, 64, 1) / Math.pow(2, 41);
      var $4478 = $4476 * Math.pow(2, 23);
      var $4479 = Runtime.or64($4477, $4478);
      var $4480 = Runtime.xor64($4474, $4469);
      var $4481 = Runtime.xor64($4480, $4479);
      
      var $4483 = HEAP[$S + 40];
      
      var $4485 = HEAP[$S + 24];
      
      var $4487 = HEAP[$S + 32];
      
      var $4489 = HEAP[$S + 40];
      var $4490 = Runtime.xor64($4489, $4487);
      var $4491 = Runtime.and64($4490, $4485);
      var $4492 = Runtime.xor64($4491, $4483);
      
      
      
      
      
      
      $t0 = $4464 + 0x78a5636f43173000 + $4481 + HEAP[$W + 456] + $4492;
      
      var $4500 = HEAP[$S + 56];
      var $4501 = unSign($4500, 64, 1) / Math.pow(2, 28);
      var $4502 = $4500 * Math.pow(2, 36);
      var $4503 = Runtime.or64($4501, $4502);
      
      var $4505 = HEAP[$S + 56];
      var $4506 = unSign($4505, 64, 1) / Math.pow(2, 34);
      var $4507 = $4505 * Math.pow(2, 30);
      var $4508 = Runtime.or64($4506, $4507);
      
      var $4510 = HEAP[$S + 56];
      var $4511 = unSign($4510, 64, 1) / Math.pow(2, 39);
      var $4512 = $4510 * Math.pow(2, 25);
      var $4513 = Runtime.or64($4511, $4512);
      var $4514 = Runtime.xor64($4508, $4503);
      var $4515 = Runtime.xor64($4514, $4513);
      
      var $4517 = HEAP[$S + 56];
      
      var $4519 = HEAP[$S];
      var $4520 = Runtime.or64($4519, $4517);
      
      var $4522 = HEAP[$S + 8];
      var $4523 = Runtime.and64($4520, $4522);
      
      var $4525 = HEAP[$S + 56];
      
      var $4527 = HEAP[$S];
      var $4528 = Runtime.and64($4527, $4525);
      var $4529 = Runtime.or64($4528, $4523);
      
      $t1 = $4529 + $4515;
      
      
      
      var $4534 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $4534;
      
      
      
      
      HEAP[$S + 48] = $t1 + $t0;
      
      var $4541 = HEAP[$S + 40];
      
      var $4543 = HEAP[$S + 16];
      var $4544 = unSign($4543, 64, 1) / Math.pow(2, 14);
      var $4545 = $4543 * Math.pow(2, 50);
      var $4546 = Runtime.or64($4544, $4545);
      
      var $4548 = HEAP[$S + 16];
      var $4549 = unSign($4548, 64, 1) / Math.pow(2, 18);
      var $4550 = $4548 * Math.pow(2, 46);
      var $4551 = Runtime.or64($4549, $4550);
      
      var $4553 = HEAP[$S + 16];
      var $4554 = unSign($4553, 64, 1) / Math.pow(2, 41);
      var $4555 = $4553 * Math.pow(2, 23);
      var $4556 = Runtime.or64($4554, $4555);
      var $4557 = Runtime.xor64($4551, $4546);
      var $4558 = Runtime.xor64($4557, $4556);
      
      var $4560 = HEAP[$S + 32];
      
      var $4562 = HEAP[$S + 16];
      
      var $4564 = HEAP[$S + 24];
      
      var $4566 = HEAP[$S + 32];
      var $4567 = Runtime.xor64($4566, $4564);
      var $4568 = Runtime.and64($4567, $4562);
      var $4569 = Runtime.xor64($4568, $4560);
      
      
      var $4572 = $4541 + -0x7b3787eb5e0f5400;
      
      
      
      $t0 = $4572 + $4558 + HEAP[$W + 464] + $4569;
      
      var $4577 = HEAP[$S + 48];
      var $4578 = unSign($4577, 64, 1) / Math.pow(2, 28);
      var $4579 = $4577 * Math.pow(2, 36);
      var $4580 = Runtime.or64($4578, $4579);
      
      var $4582 = HEAP[$S + 48];
      var $4583 = unSign($4582, 64, 1) / Math.pow(2, 34);
      var $4584 = $4582 * Math.pow(2, 30);
      var $4585 = Runtime.or64($4583, $4584);
      
      var $4587 = HEAP[$S + 48];
      var $4588 = unSign($4587, 64, 1) / Math.pow(2, 39);
      var $4589 = $4587 * Math.pow(2, 25);
      var $4590 = Runtime.or64($4588, $4589);
      var $4591 = Runtime.xor64($4585, $4580);
      var $4592 = Runtime.xor64($4591, $4590);
      
      var $4594 = HEAP[$S + 48];
      
      var $4596 = HEAP[$S + 56];
      var $4597 = Runtime.or64($4596, $4594);
      
      var $4599 = HEAP[$S];
      var $4600 = Runtime.and64($4597, $4599);
      
      var $4602 = HEAP[$S + 48];
      
      var $4604 = HEAP[$S + 56];
      var $4605 = Runtime.and64($4604, $4602);
      var $4606 = Runtime.or64($4605, $4600);
      
      $t1 = $4606 + $4592;
      
      
      
      var $4611 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $4611;
      
      
      
      
      HEAP[$S + 40] = $t1 + $t0;
      
      var $4618 = HEAP[$S + 32];
      
      var $4620 = HEAP[$S + 8];
      var $4621 = unSign($4620, 64, 1) / Math.pow(2, 14);
      var $4622 = $4620 * Math.pow(2, 50);
      var $4623 = Runtime.or64($4621, $4622);
      
      var $4625 = HEAP[$S + 8];
      var $4626 = unSign($4625, 64, 1) / Math.pow(2, 18);
      var $4627 = $4625 * Math.pow(2, 46);
      var $4628 = Runtime.or64($4626, $4627);
      
      var $4630 = HEAP[$S + 8];
      var $4631 = unSign($4630, 64, 1) / Math.pow(2, 41);
      var $4632 = $4630 * Math.pow(2, 23);
      var $4633 = Runtime.or64($4631, $4632);
      var $4634 = Runtime.xor64($4628, $4623);
      var $4635 = Runtime.xor64($4634, $4633);
      
      var $4637 = HEAP[$S + 24];
      
      var $4639 = HEAP[$S + 8];
      
      var $4641 = HEAP[$S + 16];
      
      var $4643 = HEAP[$S + 24];
      var $4644 = Runtime.xor64($4643, $4641);
      var $4645 = Runtime.and64($4644, $4639);
      var $4646 = Runtime.xor64($4645, $4637);
      
      
      var $4649 = $4618 + -0x7338fdf7e59bc800;
      
      
      
      $t0 = $4649 + $4635 + HEAP[$W + 472] + $4646;
      
      var $4654 = HEAP[$S + 40];
      var $4655 = unSign($4654, 64, 1) / Math.pow(2, 28);
      var $4656 = $4654 * Math.pow(2, 36);
      var $4657 = Runtime.or64($4655, $4656);
      
      var $4659 = HEAP[$S + 40];
      var $4660 = unSign($4659, 64, 1) / Math.pow(2, 34);
      var $4661 = $4659 * Math.pow(2, 30);
      var $4662 = Runtime.or64($4660, $4661);
      
      var $4664 = HEAP[$S + 40];
      var $4665 = unSign($4664, 64, 1) / Math.pow(2, 39);
      var $4666 = $4664 * Math.pow(2, 25);
      var $4667 = Runtime.or64($4665, $4666);
      var $4668 = Runtime.xor64($4662, $4657);
      var $4669 = Runtime.xor64($4668, $4667);
      
      var $4671 = HEAP[$S + 40];
      
      var $4673 = HEAP[$S + 48];
      var $4674 = Runtime.or64($4673, $4671);
      
      var $4676 = HEAP[$S + 56];
      var $4677 = Runtime.and64($4674, $4676);
      
      var $4679 = HEAP[$S + 40];
      
      var $4681 = HEAP[$S + 48];
      var $4682 = Runtime.and64($4681, $4679);
      var $4683 = Runtime.or64($4682, $4677);
      
      $t1 = $4683 + $4669;
      
      
      
      var $4688 = $t0 + HEAP[$S];
      
      HEAP[$S] = $4688;
      
      
      
      
      HEAP[$S + 32] = $t1 + $t0;
      
      var $4695 = HEAP[$S + 24];
      
      var $4697 = HEAP[$S];
      var $4698 = unSign($4697, 64, 1) / Math.pow(2, 14);
      var $4699 = $4697 * Math.pow(2, 50);
      var $4700 = Runtime.or64($4698, $4699);
      
      var $4702 = HEAP[$S];
      var $4703 = unSign($4702, 64, 1) / Math.pow(2, 18);
      var $4704 = $4702 * Math.pow(2, 46);
      var $4705 = Runtime.or64($4703, $4704);
      
      var $4707 = HEAP[$S];
      var $4708 = unSign($4707, 64, 1) / Math.pow(2, 41);
      var $4709 = $4707 * Math.pow(2, 23);
      var $4710 = Runtime.or64($4708, $4709);
      var $4711 = Runtime.xor64($4705, $4700);
      var $4712 = Runtime.xor64($4711, $4710);
      
      var $4714 = HEAP[$S + 16];
      
      var $4716 = HEAP[$S];
      
      var $4718 = HEAP[$S + 8];
      
      var $4720 = HEAP[$S + 16];
      var $4721 = Runtime.xor64($4720, $4718);
      var $4722 = Runtime.and64($4721, $4716);
      var $4723 = Runtime.xor64($4722, $4714);
      
      
      var $4726 = $4695 + -0x6f410005dc9ce000;
      
      
      
      $t0 = $4726 + $4712 + HEAP[$W + 480] + $4723;
      
      var $4731 = HEAP[$S + 32];
      var $4732 = unSign($4731, 64, 1) / Math.pow(2, 28);
      var $4733 = $4731 * Math.pow(2, 36);
      var $4734 = Runtime.or64($4732, $4733);
      
      var $4736 = HEAP[$S + 32];
      var $4737 = unSign($4736, 64, 1) / Math.pow(2, 34);
      var $4738 = $4736 * Math.pow(2, 30);
      var $4739 = Runtime.or64($4737, $4738);
      
      var $4741 = HEAP[$S + 32];
      var $4742 = unSign($4741, 64, 1) / Math.pow(2, 39);
      var $4743 = $4741 * Math.pow(2, 25);
      var $4744 = Runtime.or64($4742, $4743);
      var $4745 = Runtime.xor64($4739, $4734);
      var $4746 = Runtime.xor64($4745, $4744);
      
      var $4748 = HEAP[$S + 32];
      
      var $4750 = HEAP[$S + 40];
      var $4751 = Runtime.or64($4750, $4748);
      
      var $4753 = HEAP[$S + 48];
      var $4754 = Runtime.and64($4751, $4753);
      
      var $4756 = HEAP[$S + 32];
      
      var $4758 = HEAP[$S + 40];
      var $4759 = Runtime.and64($4758, $4756);
      var $4760 = Runtime.or64($4759, $4754);
      
      $t1 = $4760 + $4746;
      
      
      
      var $4765 = $t0 + HEAP[$S + 56];
      
      HEAP[$S + 56] = $4765;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      var $4772 = HEAP[$S + 16];
      
      var $4774 = HEAP[$S + 56];
      var $4775 = unSign($4774, 64, 1) / Math.pow(2, 14);
      var $4776 = $4774 * Math.pow(2, 50);
      var $4777 = Runtime.or64($4775, $4776);
      
      var $4779 = HEAP[$S + 56];
      var $4780 = unSign($4779, 64, 1) / Math.pow(2, 18);
      var $4781 = $4779 * Math.pow(2, 46);
      var $4782 = Runtime.or64($4780, $4781);
      
      var $4784 = HEAP[$S + 56];
      var $4785 = unSign($4784, 64, 1) / Math.pow(2, 41);
      var $4786 = $4784 * Math.pow(2, 23);
      var $4787 = Runtime.or64($4785, $4786);
      var $4788 = Runtime.xor64($4782, $4777);
      var $4789 = Runtime.xor64($4788, $4787);
      
      var $4791 = HEAP[$S + 8];
      
      var $4793 = HEAP[$S + 56];
      
      var $4795 = HEAP[$S];
      
      var $4797 = HEAP[$S + 8];
      var $4798 = Runtime.xor64($4797, $4795);
      var $4799 = Runtime.and64($4798, $4793);
      var $4800 = Runtime.xor64($4799, $4791);
      
      
      var $4803 = $4772 + -0x5baf9314217d4400;
      
      
      
      $t0 = $4803 + $4789 + HEAP[$W + 488] + $4800;
      
      var $4808 = HEAP[$S + 24];
      var $4809 = unSign($4808, 64, 1) / Math.pow(2, 28);
      var $4810 = $4808 * Math.pow(2, 36);
      var $4811 = Runtime.or64($4809, $4810);
      
      var $4813 = HEAP[$S + 24];
      var $4814 = unSign($4813, 64, 1) / Math.pow(2, 34);
      var $4815 = $4813 * Math.pow(2, 30);
      var $4816 = Runtime.or64($4814, $4815);
      
      var $4818 = HEAP[$S + 24];
      var $4819 = unSign($4818, 64, 1) / Math.pow(2, 39);
      var $4820 = $4818 * Math.pow(2, 25);
      var $4821 = Runtime.or64($4819, $4820);
      var $4822 = Runtime.xor64($4816, $4811);
      var $4823 = Runtime.xor64($4822, $4821);
      
      var $4825 = HEAP[$S + 24];
      
      var $4827 = HEAP[$S + 32];
      var $4828 = Runtime.or64($4827, $4825);
      
      var $4830 = HEAP[$S + 40];
      var $4831 = Runtime.and64($4828, $4830);
      
      var $4833 = HEAP[$S + 24];
      
      var $4835 = HEAP[$S + 32];
      var $4836 = Runtime.and64($4835, $4833);
      var $4837 = Runtime.or64($4836, $4831);
      
      $t1 = $4837 + $4823;
      
      
      
      var $4842 = $t0 + HEAP[$S + 48];
      
      HEAP[$S + 48] = $4842;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      var $4849 = HEAP[$S + 8];
      
      var $4851 = HEAP[$S + 48];
      var $4852 = unSign($4851, 64, 1) / Math.pow(2, 14);
      var $4853 = $4851 * Math.pow(2, 50);
      var $4854 = Runtime.or64($4852, $4853);
      
      var $4856 = HEAP[$S + 48];
      var $4857 = unSign($4856, 64, 1) / Math.pow(2, 18);
      var $4858 = $4856 * Math.pow(2, 46);
      var $4859 = Runtime.or64($4857, $4858);
      
      var $4861 = HEAP[$S + 48];
      var $4862 = unSign($4861, 64, 1) / Math.pow(2, 41);
      var $4863 = $4861 * Math.pow(2, 23);
      var $4864 = Runtime.or64($4862, $4863);
      var $4865 = Runtime.xor64($4859, $4854);
      var $4866 = Runtime.xor64($4865, $4864);
      
      var $4868 = HEAP[$S];
      
      var $4870 = HEAP[$S + 48];
      
      var $4872 = HEAP[$S + 56];
      
      var $4874 = HEAP[$S];
      var $4875 = Runtime.xor64($4874, $4872);
      var $4876 = Runtime.and64($4875, $4870);
      var $4877 = Runtime.xor64($4876, $4868);
      
      
      var $4880 = $4849 + -468553365305069e4;
      
      
      
      $t0 = $4880 + $4866 + HEAP[$W + 496] + $4877;
      
      var $4885 = HEAP[$S + 16];
      var $4886 = unSign($4885, 64, 1) / Math.pow(2, 28);
      var $4887 = $4885 * Math.pow(2, 36);
      var $4888 = Runtime.or64($4886, $4887);
      
      var $4890 = HEAP[$S + 16];
      var $4891 = unSign($4890, 64, 1) / Math.pow(2, 34);
      var $4892 = $4890 * Math.pow(2, 30);
      var $4893 = Runtime.or64($4891, $4892);
      
      var $4895 = HEAP[$S + 16];
      var $4896 = unSign($4895, 64, 1) / Math.pow(2, 39);
      var $4897 = $4895 * Math.pow(2, 25);
      var $4898 = Runtime.or64($4896, $4897);
      var $4899 = Runtime.xor64($4893, $4888);
      var $4900 = Runtime.xor64($4899, $4898);
      
      var $4902 = HEAP[$S + 16];
      
      var $4904 = HEAP[$S + 24];
      var $4905 = Runtime.or64($4904, $4902);
      
      var $4907 = HEAP[$S + 32];
      var $4908 = Runtime.and64($4905, $4907);
      
      var $4910 = HEAP[$S + 16];
      
      var $4912 = HEAP[$S + 24];
      var $4913 = Runtime.and64($4912, $4910);
      var $4914 = Runtime.or64($4913, $4908);
      
      $t1 = $4914 + $4900;
      
      
      
      var $4919 = $t0 + HEAP[$S + 40];
      
      HEAP[$S + 40] = $4919;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      var $4926 = HEAP[$S];
      
      var $4928 = HEAP[$S + 40];
      var $4929 = unSign($4928, 64, 1) / Math.pow(2, 14);
      var $4930 = $4928 * Math.pow(2, 50);
      var $4931 = Runtime.or64($4929, $4930);
      
      var $4933 = HEAP[$S + 40];
      var $4934 = unSign($4933, 64, 1) / Math.pow(2, 18);
      var $4935 = $4933 * Math.pow(2, 46);
      var $4936 = Runtime.or64($4934, $4935);
      
      var $4938 = HEAP[$S + 40];
      var $4939 = unSign($4938, 64, 1) / Math.pow(2, 41);
      var $4940 = $4938 * Math.pow(2, 23);
      var $4941 = Runtime.or64($4939, $4940);
      var $4942 = Runtime.xor64($4936, $4931);
      var $4943 = Runtime.xor64($4942, $4941);
      
      var $4945 = HEAP[$S + 56];
      
      var $4947 = HEAP[$S + 40];
      
      var $4949 = HEAP[$S + 48];
      
      var $4951 = HEAP[$S + 56];
      var $4952 = Runtime.xor64($4951, $4949);
      var $4953 = Runtime.and64($4952, $4947);
      var $4954 = Runtime.xor64($4953, $4945);
      
      
      var $4957 = $4926 + -0x398e870d1c8dac00;
      
      
      
      $t0 = $4957 + $4943 + HEAP[$W + 504] + $4954;
      
      var $4962 = HEAP[$S + 8];
      var $4963 = unSign($4962, 64, 1) / Math.pow(2, 28);
      var $4964 = $4962 * Math.pow(2, 36);
      var $4965 = Runtime.or64($4963, $4964);
      
      var $4967 = HEAP[$S + 8];
      var $4968 = unSign($4967, 64, 1) / Math.pow(2, 34);
      var $4969 = $4967 * Math.pow(2, 30);
      var $4970 = Runtime.or64($4968, $4969);
      
      var $4972 = HEAP[$S + 8];
      var $4973 = unSign($4972, 64, 1) / Math.pow(2, 39);
      var $4974 = $4972 * Math.pow(2, 25);
      var $4975 = Runtime.or64($4973, $4974);
      var $4976 = Runtime.xor64($4970, $4965);
      var $4977 = Runtime.xor64($4976, $4975);
      
      var $4979 = HEAP[$S + 8];
      
      var $4981 = HEAP[$S + 16];
      var $4982 = Runtime.or64($4981, $4979);
      
      var $4984 = HEAP[$S + 24];
      var $4985 = Runtime.and64($4982, $4984);
      
      var $4987 = HEAP[$S + 8];
      
      var $4989 = HEAP[$S + 16];
      var $4990 = Runtime.and64($4989, $4987);
      var $4991 = Runtime.or64($4990, $4985);
      
      $t1 = $4991 + $4977;
      
      
      
      var $4996 = $t0 + HEAP[$S + 32];
      
      HEAP[$S + 32] = $4996;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      var $5003 = HEAP[$S + 56];
      
      var $5005 = HEAP[$S + 32];
      var $5006 = unSign($5005, 64, 1) / Math.pow(2, 14);
      var $5007 = $5005 * Math.pow(2, 50);
      var $5008 = Runtime.or64($5006, $5007);
      
      var $5010 = HEAP[$S + 32];
      var $5011 = unSign($5010, 64, 1) / Math.pow(2, 18);
      var $5012 = $5010 * Math.pow(2, 46);
      var $5013 = Runtime.or64($5011, $5012);
      
      var $5015 = HEAP[$S + 32];
      var $5016 = unSign($5015, 64, 1) / Math.pow(2, 41);
      var $5017 = $5015 * Math.pow(2, 23);
      var $5018 = Runtime.or64($5016, $5017);
      var $5019 = Runtime.xor64($5013, $5008);
      var $5020 = Runtime.xor64($5019, $5018);
      
      var $5022 = HEAP[$S + 48];
      
      var $5024 = HEAP[$S + 32];
      
      var $5026 = HEAP[$S + 40];
      
      var $5028 = HEAP[$S + 48];
      var $5029 = Runtime.xor64($5028, $5026);
      var $5030 = Runtime.and64($5029, $5024);
      var $5031 = Runtime.xor64($5030, $5022);
      
      
      var $5034 = $5003 + -0x35d8c13115d99e00;
      
      
      
      $t0 = $5034 + $5020 + HEAP[$W + 512] + $5031;
      
      var $5039 = HEAP[$S];
      var $5040 = unSign($5039, 64, 1) / Math.pow(2, 28);
      var $5041 = $5039 * Math.pow(2, 36);
      var $5042 = Runtime.or64($5040, $5041);
      
      var $5044 = HEAP[$S];
      var $5045 = unSign($5044, 64, 1) / Math.pow(2, 34);
      var $5046 = $5044 * Math.pow(2, 30);
      var $5047 = Runtime.or64($5045, $5046);
      
      var $5049 = HEAP[$S];
      var $5050 = unSign($5049, 64, 1) / Math.pow(2, 39);
      var $5051 = $5049 * Math.pow(2, 25);
      var $5052 = Runtime.or64($5050, $5051);
      var $5053 = Runtime.xor64($5047, $5042);
      var $5054 = Runtime.xor64($5053, $5052);
      
      var $5056 = HEAP[$S];
      
      var $5058 = HEAP[$S + 8];
      var $5059 = Runtime.or64($5058, $5056);
      
      var $5061 = HEAP[$S + 16];
      var $5062 = Runtime.and64($5059, $5061);
      
      var $5064 = HEAP[$S];
      
      var $5066 = HEAP[$S + 8];
      var $5067 = Runtime.and64($5066, $5064);
      var $5068 = Runtime.or64($5067, $5062);
      
      $t1 = $5068 + $5054;
      
      
      
      var $5073 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $5073;
      
      
      
      
      HEAP[$S + 56] = $t1 + $t0;
      
      var $5080 = HEAP[$S + 48];
      
      var $5082 = HEAP[$S + 24];
      var $5083 = unSign($5082, 64, 1) / Math.pow(2, 14);
      var $5084 = $5082 * Math.pow(2, 50);
      var $5085 = Runtime.or64($5083, $5084);
      
      var $5087 = HEAP[$S + 24];
      var $5088 = unSign($5087, 64, 1) / Math.pow(2, 18);
      var $5089 = $5087 * Math.pow(2, 46);
      var $5090 = Runtime.or64($5088, $5089);
      
      var $5092 = HEAP[$S + 24];
      var $5093 = unSign($5092, 64, 1) / Math.pow(2, 41);
      var $5094 = $5092 * Math.pow(2, 23);
      var $5095 = Runtime.or64($5093, $5094);
      var $5096 = Runtime.xor64($5090, $5085);
      var $5097 = Runtime.xor64($5096, $5095);
      
      var $5099 = HEAP[$S + 40];
      
      var $5101 = HEAP[$S + 24];
      
      var $5103 = HEAP[$S + 32];
      
      var $5105 = HEAP[$S + 40];
      var $5106 = Runtime.xor64($5105, $5103);
      var $5107 = Runtime.and64($5106, $5101);
      var $5108 = Runtime.xor64($5107, $5099);
      
      
      var $5111 = $5080 + -0x2e794738de3f3e00;
      
      
      
      $t0 = $5111 + $5097 + HEAP[$W + 520] + $5108;
      
      var $5116 = HEAP[$S + 56];
      var $5117 = unSign($5116, 64, 1) / Math.pow(2, 28);
      var $5118 = $5116 * Math.pow(2, 36);
      var $5119 = Runtime.or64($5117, $5118);
      
      var $5121 = HEAP[$S + 56];
      var $5122 = unSign($5121, 64, 1) / Math.pow(2, 34);
      var $5123 = $5121 * Math.pow(2, 30);
      var $5124 = Runtime.or64($5122, $5123);
      
      var $5126 = HEAP[$S + 56];
      var $5127 = unSign($5126, 64, 1) / Math.pow(2, 39);
      var $5128 = $5126 * Math.pow(2, 25);
      var $5129 = Runtime.or64($5127, $5128);
      var $5130 = Runtime.xor64($5124, $5119);
      var $5131 = Runtime.xor64($5130, $5129);
      
      var $5133 = HEAP[$S + 56];
      
      var $5135 = HEAP[$S];
      var $5136 = Runtime.or64($5135, $5133);
      
      var $5138 = HEAP[$S + 8];
      var $5139 = Runtime.and64($5136, $5138);
      
      var $5141 = HEAP[$S + 56];
      
      var $5143 = HEAP[$S];
      var $5144 = Runtime.and64($5143, $5141);
      var $5145 = Runtime.or64($5144, $5139);
      
      $t1 = $5145 + $5131;
      
      
      
      var $5150 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $5150;
      
      
      
      
      HEAP[$S + 48] = $t1 + $t0;
      
      var $5157 = HEAP[$S + 40];
      
      var $5159 = HEAP[$S + 16];
      var $5160 = unSign($5159, 64, 1) / Math.pow(2, 14);
      var $5161 = $5159 * Math.pow(2, 50);
      var $5162 = Runtime.or64($5160, $5161);
      
      var $5164 = HEAP[$S + 16];
      var $5165 = unSign($5164, 64, 1) / Math.pow(2, 18);
      var $5166 = $5164 * Math.pow(2, 46);
      var $5167 = Runtime.or64($5165, $5166);
      
      var $5169 = HEAP[$S + 16];
      var $5170 = unSign($5169, 64, 1) / Math.pow(2, 41);
      var $5171 = $5169 * Math.pow(2, 23);
      var $5172 = Runtime.or64($5170, $5171);
      var $5173 = Runtime.xor64($5167, $5162);
      var $5174 = Runtime.xor64($5173, $5172);
      
      var $5176 = HEAP[$S + 32];
      
      var $5178 = HEAP[$S + 16];
      
      var $5180 = HEAP[$S + 24];
      
      var $5182 = HEAP[$S + 32];
      var $5183 = Runtime.xor64($5182, $5180);
      var $5184 = Runtime.and64($5183, $5178);
      var $5185 = Runtime.xor64($5184, $5176);
      
      
      var $5188 = $5157 + -0x15258229321f1500;
      
      
      
      $t0 = $5188 + $5174 + HEAP[$W + 528] + $5185;
      
      var $5193 = HEAP[$S + 48];
      var $5194 = unSign($5193, 64, 1) / Math.pow(2, 28);
      var $5195 = $5193 * Math.pow(2, 36);
      var $5196 = Runtime.or64($5194, $5195);
      
      var $5198 = HEAP[$S + 48];
      var $5199 = unSign($5198, 64, 1) / Math.pow(2, 34);
      var $5200 = $5198 * Math.pow(2, 30);
      var $5201 = Runtime.or64($5199, $5200);
      
      var $5203 = HEAP[$S + 48];
      var $5204 = unSign($5203, 64, 1) / Math.pow(2, 39);
      var $5205 = $5203 * Math.pow(2, 25);
      var $5206 = Runtime.or64($5204, $5205);
      var $5207 = Runtime.xor64($5201, $5196);
      var $5208 = Runtime.xor64($5207, $5206);
      
      var $5210 = HEAP[$S + 48];
      
      var $5212 = HEAP[$S + 56];
      var $5213 = Runtime.or64($5212, $5210);
      
      var $5215 = HEAP[$S];
      var $5216 = Runtime.and64($5213, $5215);
      
      var $5218 = HEAP[$S + 48];
      
      var $5220 = HEAP[$S + 56];
      var $5221 = Runtime.and64($5220, $5218);
      var $5222 = Runtime.or64($5221, $5216);
      
      $t1 = $5222 + $5208;
      
      
      
      var $5227 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $5227;
      
      
      
      
      HEAP[$S + 40] = $t1 + $t0;
      
      var $5234 = HEAP[$S + 32];
      
      var $5236 = HEAP[$S + 8];
      var $5237 = unSign($5236, 64, 1) / Math.pow(2, 14);
      var $5238 = $5236 * Math.pow(2, 50);
      var $5239 = Runtime.or64($5237, $5238);
      
      var $5241 = HEAP[$S + 8];
      var $5242 = unSign($5241, 64, 1) / Math.pow(2, 18);
      var $5243 = $5241 * Math.pow(2, 46);
      var $5244 = Runtime.or64($5242, $5243);
      
      var $5246 = HEAP[$S + 8];
      var $5247 = unSign($5246, 64, 1) / Math.pow(2, 41);
      var $5248 = $5246 * Math.pow(2, 23);
      var $5249 = Runtime.or64($5247, $5248);
      var $5250 = Runtime.xor64($5244, $5239);
      var $5251 = Runtime.xor64($5250, $5249);
      
      var $5253 = HEAP[$S + 24];
      
      var $5255 = HEAP[$S + 8];
      
      var $5257 = HEAP[$S + 16];
      
      var $5259 = HEAP[$S + 24];
      var $5260 = Runtime.xor64($5259, $5257);
      var $5261 = Runtime.and64($5260, $5255);
      var $5262 = Runtime.xor64($5261, $5253);
      
      
      var $5265 = $5234 + -0xa82b08011912e80;
      
      
      
      $t0 = $5265 + $5251 + HEAP[$W + 536] + $5262;
      
      var $5270 = HEAP[$S + 40];
      var $5271 = unSign($5270, 64, 1) / Math.pow(2, 28);
      var $5272 = $5270 * Math.pow(2, 36);
      var $5273 = Runtime.or64($5271, $5272);
      
      var $5275 = HEAP[$S + 40];
      var $5276 = unSign($5275, 64, 1) / Math.pow(2, 34);
      var $5277 = $5275 * Math.pow(2, 30);
      var $5278 = Runtime.or64($5276, $5277);
      
      var $5280 = HEAP[$S + 40];
      var $5281 = unSign($5280, 64, 1) / Math.pow(2, 39);
      var $5282 = $5280 * Math.pow(2, 25);
      var $5283 = Runtime.or64($5281, $5282);
      var $5284 = Runtime.xor64($5278, $5273);
      var $5285 = Runtime.xor64($5284, $5283);
      
      var $5287 = HEAP[$S + 40];
      
      var $5289 = HEAP[$S + 48];
      var $5290 = Runtime.or64($5289, $5287);
      
      var $5292 = HEAP[$S + 56];
      var $5293 = Runtime.and64($5290, $5292);
      
      var $5295 = HEAP[$S + 40];
      
      var $5297 = HEAP[$S + 48];
      var $5298 = Runtime.and64($5297, $5295);
      var $5299 = Runtime.or64($5298, $5293);
      
      $t1 = $5299 + $5285;
      
      
      
      var $5304 = $t0 + HEAP[$S];
      
      HEAP[$S] = $5304;
      
      
      
      
      HEAP[$S + 32] = $t1 + $t0;
      
      var $5311 = HEAP[$S + 24];
      
      var $5313 = HEAP[$S];
      var $5314 = unSign($5313, 64, 1) / Math.pow(2, 14);
      var $5315 = $5313 * Math.pow(2, 50);
      var $5316 = Runtime.or64($5314, $5315);
      
      var $5318 = HEAP[$S];
      var $5319 = unSign($5318, 64, 1) / Math.pow(2, 18);
      var $5320 = $5318 * Math.pow(2, 46);
      var $5321 = Runtime.or64($5319, $5320);
      
      var $5323 = HEAP[$S];
      var $5324 = unSign($5323, 64, 1) / Math.pow(2, 41);
      var $5325 = $5323 * Math.pow(2, 23);
      var $5326 = Runtime.or64($5324, $5325);
      var $5327 = Runtime.xor64($5321, $5316);
      var $5328 = Runtime.xor64($5327, $5326);
      
      var $5330 = HEAP[$S + 16];
      
      var $5332 = HEAP[$S];
      
      var $5334 = HEAP[$S + 8];
      
      var $5336 = HEAP[$S + 16];
      var $5337 = Runtime.xor64($5336, $5334);
      var $5338 = Runtime.and64($5337, $5332);
      var $5339 = Runtime.xor64($5338, $5330);
      
      
      
      
      
      
      $t0 = $5311 + 0x6f067aa72176fc0 + $5328 + HEAP[$W + 544] + $5339;
      
      var $5347 = HEAP[$S + 32];
      var $5348 = unSign($5347, 64, 1) / Math.pow(2, 28);
      var $5349 = $5347 * Math.pow(2, 36);
      var $5350 = Runtime.or64($5348, $5349);
      
      var $5352 = HEAP[$S + 32];
      var $5353 = unSign($5352, 64, 1) / Math.pow(2, 34);
      var $5354 = $5352 * Math.pow(2, 30);
      var $5355 = Runtime.or64($5353, $5354);
      
      var $5357 = HEAP[$S + 32];
      var $5358 = unSign($5357, 64, 1) / Math.pow(2, 39);
      var $5359 = $5357 * Math.pow(2, 25);
      var $5360 = Runtime.or64($5358, $5359);
      var $5361 = Runtime.xor64($5355, $5350);
      var $5362 = Runtime.xor64($5361, $5360);
      
      var $5364 = HEAP[$S + 32];
      
      var $5366 = HEAP[$S + 40];
      var $5367 = Runtime.or64($5366, $5364);
      
      var $5369 = HEAP[$S + 48];
      var $5370 = Runtime.and64($5367, $5369);
      
      var $5372 = HEAP[$S + 32];
      
      var $5374 = HEAP[$S + 40];
      var $5375 = Runtime.and64($5374, $5372);
      var $5376 = Runtime.or64($5375, $5370);
      
      $t1 = $5376 + $5362;
      
      
      
      var $5381 = $t0 + HEAP[$S + 56];
      
      HEAP[$S + 56] = $5381;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      var $5388 = HEAP[$S + 16];
      
      var $5390 = HEAP[$S + 56];
      var $5391 = unSign($5390, 64, 1) / Math.pow(2, 14);
      var $5392 = $5390 * Math.pow(2, 50);
      var $5393 = Runtime.or64($5391, $5392);
      
      var $5395 = HEAP[$S + 56];
      var $5396 = unSign($5395, 64, 1) / Math.pow(2, 18);
      var $5397 = $5395 * Math.pow(2, 46);
      var $5398 = Runtime.or64($5396, $5397);
      
      var $5400 = HEAP[$S + 56];
      var $5401 = unSign($5400, 64, 1) / Math.pow(2, 41);
      var $5402 = $5400 * Math.pow(2, 23);
      var $5403 = Runtime.or64($5401, $5402);
      var $5404 = Runtime.xor64($5398, $5393);
      var $5405 = Runtime.xor64($5404, $5403);
      
      var $5407 = HEAP[$S + 8];
      
      var $5409 = HEAP[$S + 56];
      
      var $5411 = HEAP[$S];
      
      var $5413 = HEAP[$S + 8];
      var $5414 = Runtime.xor64($5413, $5411);
      var $5415 = Runtime.and64($5414, $5409);
      var $5416 = Runtime.xor64($5415, $5407);
      
      
      
      
      
      
      $t0 = $5388 + 0xa637dc5a2c89880 + $5405 + HEAP[$W + 552] + $5416;
      
      var $5424 = HEAP[$S + 24];
      var $5425 = unSign($5424, 64, 1) / Math.pow(2, 28);
      var $5426 = $5424 * Math.pow(2, 36);
      var $5427 = Runtime.or64($5425, $5426);
      
      var $5429 = HEAP[$S + 24];
      var $5430 = unSign($5429, 64, 1) / Math.pow(2, 34);
      var $5431 = $5429 * Math.pow(2, 30);
      var $5432 = Runtime.or64($5430, $5431);
      
      var $5434 = HEAP[$S + 24];
      var $5435 = unSign($5434, 64, 1) / Math.pow(2, 39);
      var $5436 = $5434 * Math.pow(2, 25);
      var $5437 = Runtime.or64($5435, $5436);
      var $5438 = Runtime.xor64($5432, $5427);
      var $5439 = Runtime.xor64($5438, $5437);
      
      var $5441 = HEAP[$S + 24];
      
      var $5443 = HEAP[$S + 32];
      var $5444 = Runtime.or64($5443, $5441);
      
      var $5446 = HEAP[$S + 40];
      var $5447 = Runtime.and64($5444, $5446);
      
      var $5449 = HEAP[$S + 24];
      
      var $5451 = HEAP[$S + 32];
      var $5452 = Runtime.and64($5451, $5449);
      var $5453 = Runtime.or64($5452, $5447);
      
      $t1 = $5453 + $5439;
      
      
      
      var $5458 = $t0 + HEAP[$S + 48];
      
      HEAP[$S + 48] = $5458;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      var $5465 = HEAP[$S + 8];
      
      var $5467 = HEAP[$S + 48];
      var $5468 = unSign($5467, 64, 1) / Math.pow(2, 14);
      var $5469 = $5467 * Math.pow(2, 50);
      var $5470 = Runtime.or64($5468, $5469);
      
      var $5472 = HEAP[$S + 48];
      var $5473 = unSign($5472, 64, 1) / Math.pow(2, 18);
      var $5474 = $5472 * Math.pow(2, 46);
      var $5475 = Runtime.or64($5473, $5474);
      
      var $5477 = HEAP[$S + 48];
      var $5478 = unSign($5477, 64, 1) / Math.pow(2, 41);
      var $5479 = $5477 * Math.pow(2, 23);
      var $5480 = Runtime.or64($5478, $5479);
      var $5481 = Runtime.xor64($5475, $5470);
      var $5482 = Runtime.xor64($5481, $5480);
      
      var $5484 = HEAP[$S];
      
      var $5486 = HEAP[$S + 48];
      
      var $5488 = HEAP[$S + 56];
      
      var $5490 = HEAP[$S];
      var $5491 = Runtime.xor64($5490, $5488);
      var $5492 = Runtime.and64($5491, $5486);
      var $5493 = Runtime.xor64($5492, $5484);
      
      
      
      
      
      
      $t0 = $5465 + 0x113f9804bef90e00 + $5482 + HEAP[$W + 560] + $5493;
      
      var $5501 = HEAP[$S + 16];
      var $5502 = unSign($5501, 64, 1) / Math.pow(2, 28);
      var $5503 = $5501 * Math.pow(2, 36);
      var $5504 = Runtime.or64($5502, $5503);
      
      var $5506 = HEAP[$S + 16];
      var $5507 = unSign($5506, 64, 1) / Math.pow(2, 34);
      var $5508 = $5506 * Math.pow(2, 30);
      var $5509 = Runtime.or64($5507, $5508);
      
      var $5511 = HEAP[$S + 16];
      var $5512 = unSign($5511, 64, 1) / Math.pow(2, 39);
      var $5513 = $5511 * Math.pow(2, 25);
      var $5514 = Runtime.or64($5512, $5513);
      var $5515 = Runtime.xor64($5509, $5504);
      var $5516 = Runtime.xor64($5515, $5514);
      
      var $5518 = HEAP[$S + 16];
      
      var $5520 = HEAP[$S + 24];
      var $5521 = Runtime.or64($5520, $5518);
      
      var $5523 = HEAP[$S + 32];
      var $5524 = Runtime.and64($5521, $5523);
      
      var $5526 = HEAP[$S + 16];
      
      var $5528 = HEAP[$S + 24];
      var $5529 = Runtime.and64($5528, $5526);
      var $5530 = Runtime.or64($5529, $5524);
      
      $t1 = $5530 + $5516;
      
      
      
      var $5535 = $t0 + HEAP[$S + 40];
      
      HEAP[$S + 40] = $5535;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      var $5542 = HEAP[$S];
      
      var $5544 = HEAP[$S + 40];
      var $5545 = unSign($5544, 64, 1) / Math.pow(2, 14);
      var $5546 = $5544 * Math.pow(2, 50);
      var $5547 = Runtime.or64($5545, $5546);
      
      var $5549 = HEAP[$S + 40];
      var $5550 = unSign($5549, 64, 1) / Math.pow(2, 18);
      var $5551 = $5549 * Math.pow(2, 46);
      var $5552 = Runtime.or64($5550, $5551);
      
      var $5554 = HEAP[$S + 40];
      var $5555 = unSign($5554, 64, 1) / Math.pow(2, 41);
      var $5556 = $5554 * Math.pow(2, 23);
      var $5557 = Runtime.or64($5555, $5556);
      var $5558 = Runtime.xor64($5552, $5547);
      var $5559 = Runtime.xor64($5558, $5557);
      
      var $5561 = HEAP[$S + 56];
      
      var $5563 = HEAP[$S + 40];
      
      var $5565 = HEAP[$S + 48];
      
      var $5567 = HEAP[$S + 56];
      var $5568 = Runtime.xor64($5567, $5565);
      var $5569 = Runtime.and64($5568, $5563);
      var $5570 = Runtime.xor64($5569, $5561);
      
      
      
      
      
      
      $t0 = $5542 + 0x1b710b35131c4700 + $5559 + HEAP[$W + 568] + $5570;
      
      var $5578 = HEAP[$S + 8];
      var $5579 = unSign($5578, 64, 1) / Math.pow(2, 28);
      var $5580 = $5578 * Math.pow(2, 36);
      var $5581 = Runtime.or64($5579, $5580);
      
      var $5583 = HEAP[$S + 8];
      var $5584 = unSign($5583, 64, 1) / Math.pow(2, 34);
      var $5585 = $5583 * Math.pow(2, 30);
      var $5586 = Runtime.or64($5584, $5585);
      
      var $5588 = HEAP[$S + 8];
      var $5589 = unSign($5588, 64, 1) / Math.pow(2, 39);
      var $5590 = $5588 * Math.pow(2, 25);
      var $5591 = Runtime.or64($5589, $5590);
      var $5592 = Runtime.xor64($5586, $5581);
      var $5593 = Runtime.xor64($5592, $5591);
      
      var $5595 = HEAP[$S + 8];
      
      var $5597 = HEAP[$S + 16];
      var $5598 = Runtime.or64($5597, $5595);
      
      var $5600 = HEAP[$S + 24];
      var $5601 = Runtime.and64($5598, $5600);
      
      var $5603 = HEAP[$S + 8];
      
      var $5605 = HEAP[$S + 16];
      var $5606 = Runtime.and64($5605, $5603);
      var $5607 = Runtime.or64($5606, $5601);
      
      $t1 = $5607 + $5593;
      
      
      
      var $5612 = $t0 + HEAP[$S + 32];
      
      HEAP[$S + 32] = $5612;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      
      var $5619 = HEAP[$S + 56];
      
      var $5621 = HEAP[$S + 32];
      var $5622 = unSign($5621, 64, 1) / Math.pow(2, 14);
      var $5623 = $5621 * Math.pow(2, 50);
      var $5624 = Runtime.or64($5622, $5623);
      
      var $5626 = HEAP[$S + 32];
      var $5627 = unSign($5626, 64, 1) / Math.pow(2, 18);
      var $5628 = $5626 * Math.pow(2, 46);
      var $5629 = Runtime.or64($5627, $5628);
      
      var $5631 = HEAP[$S + 32];
      var $5632 = unSign($5631, 64, 1) / Math.pow(2, 41);
      var $5633 = $5631 * Math.pow(2, 23);
      var $5634 = Runtime.or64($5632, $5633);
      var $5635 = Runtime.xor64($5629, $5624);
      var $5636 = Runtime.xor64($5635, $5634);
      
      var $5638 = HEAP[$S + 48];
      
      var $5640 = HEAP[$S + 32];
      
      var $5642 = HEAP[$S + 40];
      
      var $5644 = HEAP[$S + 48];
      var $5645 = Runtime.xor64($5644, $5642);
      var $5646 = Runtime.and64($5645, $5640);
      var $5647 = Runtime.xor64($5646, $5638);
      
      
      
      
      
      
      $t0 = $5619 + 0x28db77f523047e00 + $5636 + HEAP[$W + 576] + $5647;
      
      var $5655 = HEAP[$S];
      var $5656 = unSign($5655, 64, 1) / Math.pow(2, 28);
      var $5657 = $5655 * Math.pow(2, 36);
      var $5658 = Runtime.or64($5656, $5657);
      
      var $5660 = HEAP[$S];
      var $5661 = unSign($5660, 64, 1) / Math.pow(2, 34);
      var $5662 = $5660 * Math.pow(2, 30);
      var $5663 = Runtime.or64($5661, $5662);
      
      var $5665 = HEAP[$S];
      var $5666 = unSign($5665, 64, 1) / Math.pow(2, 39);
      var $5667 = $5665 * Math.pow(2, 25);
      var $5668 = Runtime.or64($5666, $5667);
      var $5669 = Runtime.xor64($5663, $5658);
      var $5670 = Runtime.xor64($5669, $5668);
      
      var $5672 = HEAP[$S];
      
      var $5674 = HEAP[$S + 8];
      var $5675 = Runtime.or64($5674, $5672);
      
      var $5677 = HEAP[$S + 16];
      var $5678 = Runtime.and64($5675, $5677);
      
      var $5680 = HEAP[$S];
      
      var $5682 = HEAP[$S + 8];
      var $5683 = Runtime.and64($5682, $5680);
      var $5684 = Runtime.or64($5683, $5678);
      
      $t1 = $5684 + $5670;
      
      
      
      var $5689 = $t0 + HEAP[$S + 24];
      
      HEAP[$S + 24] = $5689;
      
      
      
      
      HEAP[$S + 56] = $t1 + $t0;
      
      var $5696 = HEAP[$S + 48];
      
      var $5698 = HEAP[$S + 24];
      var $5699 = unSign($5698, 64, 1) / Math.pow(2, 14);
      var $5700 = $5698 * Math.pow(2, 50);
      var $5701 = Runtime.or64($5699, $5700);
      
      var $5703 = HEAP[$S + 24];
      var $5704 = unSign($5703, 64, 1) / Math.pow(2, 18);
      var $5705 = $5703 * Math.pow(2, 46);
      var $5706 = Runtime.or64($5704, $5705);
      
      var $5708 = HEAP[$S + 24];
      var $5709 = unSign($5708, 64, 1) / Math.pow(2, 41);
      var $5710 = $5708 * Math.pow(2, 23);
      var $5711 = Runtime.or64($5709, $5710);
      var $5712 = Runtime.xor64($5706, $5701);
      var $5713 = Runtime.xor64($5712, $5711);
      
      var $5715 = HEAP[$S + 40];
      
      var $5717 = HEAP[$S + 24];
      
      var $5719 = HEAP[$S + 32];
      
      var $5721 = HEAP[$S + 40];
      var $5722 = Runtime.xor64($5721, $5719);
      var $5723 = Runtime.and64($5722, $5717);
      var $5724 = Runtime.xor64($5723, $5715);
      
      
      
      
      
      
      $t0 = $5696 + 0x32caab7b40c72400 + $5713 + HEAP[$W + 584] + $5724;
      
      var $5732 = HEAP[$S + 56];
      var $5733 = unSign($5732, 64, 1) / Math.pow(2, 28);
      var $5734 = $5732 * Math.pow(2, 36);
      var $5735 = Runtime.or64($5733, $5734);
      
      var $5737 = HEAP[$S + 56];
      var $5738 = unSign($5737, 64, 1) / Math.pow(2, 34);
      var $5739 = $5737 * Math.pow(2, 30);
      var $5740 = Runtime.or64($5738, $5739);
      
      var $5742 = HEAP[$S + 56];
      var $5743 = unSign($5742, 64, 1) / Math.pow(2, 39);
      var $5744 = $5742 * Math.pow(2, 25);
      var $5745 = Runtime.or64($5743, $5744);
      var $5746 = Runtime.xor64($5740, $5735);
      var $5747 = Runtime.xor64($5746, $5745);
      
      var $5749 = HEAP[$S + 56];
      
      var $5751 = HEAP[$S];
      var $5752 = Runtime.or64($5751, $5749);
      
      var $5754 = HEAP[$S + 8];
      var $5755 = Runtime.and64($5752, $5754);
      
      var $5757 = HEAP[$S + 56];
      
      var $5759 = HEAP[$S];
      var $5760 = Runtime.and64($5759, $5757);
      var $5761 = Runtime.or64($5760, $5755);
      
      $t1 = $5761 + $5747;
      
      
      
      var $5766 = $t0 + HEAP[$S + 16];
      
      HEAP[$S + 16] = $5766;
      
      
      
      
      HEAP[$S + 48] = $t1 + $t0;
      
      var $5773 = HEAP[$S + 40];
      
      var $5775 = HEAP[$S + 16];
      var $5776 = unSign($5775, 64, 1) / Math.pow(2, 14);
      var $5777 = $5775 * Math.pow(2, 50);
      var $5778 = Runtime.or64($5776, $5777);
      
      var $5780 = HEAP[$S + 16];
      var $5781 = unSign($5780, 64, 1) / Math.pow(2, 18);
      var $5782 = $5780 * Math.pow(2, 46);
      var $5783 = Runtime.or64($5781, $5782);
      
      var $5785 = HEAP[$S + 16];
      var $5786 = unSign($5785, 64, 1) / Math.pow(2, 41);
      var $5787 = $5785 * Math.pow(2, 23);
      var $5788 = Runtime.or64($5786, $5787);
      var $5789 = Runtime.xor64($5783, $5778);
      var $5790 = Runtime.xor64($5789, $5788);
      
      var $5792 = HEAP[$S + 32];
      
      var $5794 = HEAP[$S + 16];
      
      var $5796 = HEAP[$S + 24];
      
      var $5798 = HEAP[$S + 32];
      var $5799 = Runtime.xor64($5798, $5796);
      var $5800 = Runtime.and64($5799, $5794);
      var $5801 = Runtime.xor64($5800, $5792);
      
      
      
      
      
      
      $t0 = $5773 + 0x3c9ebe0a15c9be00 + $5790 + HEAP[$W + 592] + $5801;
      
      var $5809 = HEAP[$S + 48];
      var $5810 = unSign($5809, 64, 1) / Math.pow(2, 28);
      var $5811 = $5809 * Math.pow(2, 36);
      var $5812 = Runtime.or64($5810, $5811);
      
      var $5814 = HEAP[$S + 48];
      var $5815 = unSign($5814, 64, 1) / Math.pow(2, 34);
      var $5816 = $5814 * Math.pow(2, 30);
      var $5817 = Runtime.or64($5815, $5816);
      
      var $5819 = HEAP[$S + 48];
      var $5820 = unSign($5819, 64, 1) / Math.pow(2, 39);
      var $5821 = $5819 * Math.pow(2, 25);
      var $5822 = Runtime.or64($5820, $5821);
      var $5823 = Runtime.xor64($5817, $5812);
      var $5824 = Runtime.xor64($5823, $5822);
      
      var $5826 = HEAP[$S + 48];
      
      var $5828 = HEAP[$S + 56];
      var $5829 = Runtime.or64($5828, $5826);
      
      var $5831 = HEAP[$S];
      var $5832 = Runtime.and64($5829, $5831);
      
      var $5834 = HEAP[$S + 48];
      
      var $5836 = HEAP[$S + 56];
      var $5837 = Runtime.and64($5836, $5834);
      var $5838 = Runtime.or64($5837, $5832);
      
      $t1 = $5838 + $5824;
      
      
      
      var $5843 = $t0 + HEAP[$S + 8];
      
      HEAP[$S + 8] = $5843;
      
      
      
      
      HEAP[$S + 40] = $t1 + $t0;
      
      var $5850 = HEAP[$S + 32];
      
      var $5852 = HEAP[$S + 8];
      var $5853 = unSign($5852, 64, 1) / Math.pow(2, 14);
      var $5854 = $5852 * Math.pow(2, 50);
      var $5855 = Runtime.or64($5853, $5854);
      
      var $5857 = HEAP[$S + 8];
      var $5858 = unSign($5857, 64, 1) / Math.pow(2, 18);
      var $5859 = $5857 * Math.pow(2, 46);
      var $5860 = Runtime.or64($5858, $5859);
      
      var $5862 = HEAP[$S + 8];
      var $5863 = unSign($5862, 64, 1) / Math.pow(2, 41);
      var $5864 = $5862 * Math.pow(2, 23);
      var $5865 = Runtime.or64($5863, $5864);
      var $5866 = Runtime.xor64($5860, $5855);
      var $5867 = Runtime.xor64($5866, $5865);
      
      var $5869 = HEAP[$S + 24];
      
      var $5871 = HEAP[$S + 8];
      
      var $5873 = HEAP[$S + 16];
      
      var $5875 = HEAP[$S + 24];
      var $5876 = Runtime.xor64($5875, $5873);
      var $5877 = Runtime.and64($5876, $5871);
      var $5878 = Runtime.xor64($5877, $5869);
      
      
      
      
      
      
      $t0 = $5850 + 0x431d67c49c100c00 + $5867 + HEAP[$W + 600] + $5878;
      
      var $5886 = HEAP[$S + 40];
      var $5887 = unSign($5886, 64, 1) / Math.pow(2, 28);
      var $5888 = $5886 * Math.pow(2, 36);
      var $5889 = Runtime.or64($5887, $5888);
      
      var $5891 = HEAP[$S + 40];
      var $5892 = unSign($5891, 64, 1) / Math.pow(2, 34);
      var $5893 = $5891 * Math.pow(2, 30);
      var $5894 = Runtime.or64($5892, $5893);
      
      var $5896 = HEAP[$S + 40];
      var $5897 = unSign($5896, 64, 1) / Math.pow(2, 39);
      var $5898 = $5896 * Math.pow(2, 25);
      var $5899 = Runtime.or64($5897, $5898);
      var $5900 = Runtime.xor64($5894, $5889);
      var $5901 = Runtime.xor64($5900, $5899);
      
      var $5903 = HEAP[$S + 40];
      
      var $5905 = HEAP[$S + 48];
      var $5906 = Runtime.or64($5905, $5903);
      
      var $5908 = HEAP[$S + 56];
      var $5909 = Runtime.and64($5906, $5908);
      
      var $5911 = HEAP[$S + 40];
      
      var $5913 = HEAP[$S + 48];
      var $5914 = Runtime.and64($5913, $5911);
      var $5915 = Runtime.or64($5914, $5909);
      
      $t1 = $5915 + $5901;
      
      
      
      var $5920 = $t0 + HEAP[$S];
      
      HEAP[$S] = $5920;
      
      
      
      
      HEAP[$S + 32] = $t1 + $t0;
      
      var $5927 = HEAP[$S + 24];
      
      var $5929 = HEAP[$S];
      var $5930 = unSign($5929, 64, 1) / Math.pow(2, 14);
      var $5931 = $5929 * Math.pow(2, 50);
      var $5932 = Runtime.or64($5930, $5931);
      
      var $5934 = HEAP[$S];
      var $5935 = unSign($5934, 64, 1) / Math.pow(2, 18);
      var $5936 = $5934 * Math.pow(2, 46);
      var $5937 = Runtime.or64($5935, $5936);
      
      var $5939 = HEAP[$S];
      var $5940 = unSign($5939, 64, 1) / Math.pow(2, 41);
      var $5941 = $5939 * Math.pow(2, 23);
      var $5942 = Runtime.or64($5940, $5941);
      var $5943 = Runtime.xor64($5937, $5932);
      var $5944 = Runtime.xor64($5943, $5942);
      
      var $5946 = HEAP[$S + 16];
      
      var $5948 = HEAP[$S];
      
      var $5950 = HEAP[$S + 8];
      
      var $5952 = HEAP[$S + 16];
      var $5953 = Runtime.xor64($5952, $5950);
      var $5954 = Runtime.and64($5953, $5948);
      var $5955 = Runtime.xor64($5954, $5946);
      
      
      
      
      
      
      $t0 = $5927 + 0x4cc5d4becb3e4400 + $5944 + HEAP[$W + 608] + $5955;
      
      var $5963 = HEAP[$S + 32];
      var $5964 = unSign($5963, 64, 1) / Math.pow(2, 28);
      var $5965 = $5963 * Math.pow(2, 36);
      var $5966 = Runtime.or64($5964, $5965);
      
      var $5968 = HEAP[$S + 32];
      var $5969 = unSign($5968, 64, 1) / Math.pow(2, 34);
      var $5970 = $5968 * Math.pow(2, 30);
      var $5971 = Runtime.or64($5969, $5970);
      
      var $5973 = HEAP[$S + 32];
      var $5974 = unSign($5973, 64, 1) / Math.pow(2, 39);
      var $5975 = $5973 * Math.pow(2, 25);
      var $5976 = Runtime.or64($5974, $5975);
      var $5977 = Runtime.xor64($5971, $5966);
      var $5978 = Runtime.xor64($5977, $5976);
      
      var $5980 = HEAP[$S + 32];
      
      var $5982 = HEAP[$S + 40];
      var $5983 = Runtime.or64($5982, $5980);
      
      var $5985 = HEAP[$S + 48];
      var $5986 = Runtime.and64($5983, $5985);
      
      var $5988 = HEAP[$S + 32];
      
      var $5990 = HEAP[$S + 40];
      var $5991 = Runtime.and64($5990, $5988);
      var $5992 = Runtime.or64($5991, $5986);
      
      $t1 = $5992 + $5978;
      
      
      
      var $5997 = $t0 + HEAP[$S + 56];
      
      HEAP[$S + 56] = $5997;
      
      
      
      
      HEAP[$S + 24] = $t1 + $t0;
      
      var $6004 = HEAP[$S + 16];
      
      var $6006 = HEAP[$S + 56];
      var $6007 = unSign($6006, 64, 1) / Math.pow(2, 14);
      var $6008 = $6006 * Math.pow(2, 50);
      var $6009 = Runtime.or64($6007, $6008);
      
      var $6011 = HEAP[$S + 56];
      var $6012 = unSign($6011, 64, 1) / Math.pow(2, 18);
      var $6013 = $6011 * Math.pow(2, 46);
      var $6014 = Runtime.or64($6012, $6013);
      
      var $6016 = HEAP[$S + 56];
      var $6017 = unSign($6016, 64, 1) / Math.pow(2, 41);
      var $6018 = $6016 * Math.pow(2, 23);
      var $6019 = Runtime.or64($6017, $6018);
      var $6020 = Runtime.xor64($6014, $6009);
      var $6021 = Runtime.xor64($6020, $6019);
      
      var $6023 = HEAP[$S + 8];
      
      var $6025 = HEAP[$S + 56];
      
      var $6027 = HEAP[$S];
      
      var $6029 = HEAP[$S + 8];
      var $6030 = Runtime.xor64($6029, $6027);
      var $6031 = Runtime.and64($6030, $6025);
      var $6032 = Runtime.xor64($6031, $6023);
      
      
      
      
      
      
      $t0 = $6004 + 0x597f299cfc658000 + $6021 + HEAP[$W + 616] + $6032;
      
      var $6040 = HEAP[$S + 24];
      var $6041 = unSign($6040, 64, 1) / Math.pow(2, 28);
      var $6042 = $6040 * Math.pow(2, 36);
      var $6043 = Runtime.or64($6041, $6042);
      
      var $6045 = HEAP[$S + 24];
      var $6046 = unSign($6045, 64, 1) / Math.pow(2, 34);
      var $6047 = $6045 * Math.pow(2, 30);
      var $6048 = Runtime.or64($6046, $6047);
      
      var $6050 = HEAP[$S + 24];
      var $6051 = unSign($6050, 64, 1) / Math.pow(2, 39);
      var $6052 = $6050 * Math.pow(2, 25);
      var $6053 = Runtime.or64($6051, $6052);
      var $6054 = Runtime.xor64($6048, $6043);
      var $6055 = Runtime.xor64($6054, $6053);
      
      var $6057 = HEAP[$S + 24];
      
      var $6059 = HEAP[$S + 32];
      var $6060 = Runtime.or64($6059, $6057);
      
      var $6062 = HEAP[$S + 40];
      var $6063 = Runtime.and64($6060, $6062);
      
      var $6065 = HEAP[$S + 24];
      
      var $6067 = HEAP[$S + 32];
      var $6068 = Runtime.and64($6067, $6065);
      var $6069 = Runtime.or64($6068, $6063);
      
      $t1 = $6069 + $6055;
      
      
      
      var $6074 = $t0 + HEAP[$S + 48];
      
      HEAP[$S + 48] = $6074;
      
      
      
      
      HEAP[$S + 16] = $t1 + $t0;
      
      var $6081 = HEAP[$S + 8];
      
      var $6083 = HEAP[$S + 48];
      var $6084 = unSign($6083, 64, 1) / Math.pow(2, 14);
      var $6085 = $6083 * Math.pow(2, 50);
      var $6086 = Runtime.or64($6084, $6085);
      
      var $6088 = HEAP[$S + 48];
      var $6089 = unSign($6088, 64, 1) / Math.pow(2, 18);
      var $6090 = $6088 * Math.pow(2, 46);
      var $6091 = Runtime.or64($6089, $6090);
      
      var $6093 = HEAP[$S + 48];
      var $6094 = unSign($6093, 64, 1) / Math.pow(2, 41);
      var $6095 = $6093 * Math.pow(2, 23);
      var $6096 = Runtime.or64($6094, $6095);
      var $6097 = Runtime.xor64($6091, $6086);
      var $6098 = Runtime.xor64($6097, $6096);
      
      var $6100 = HEAP[$S];
      
      var $6102 = HEAP[$S + 48];
      
      var $6104 = HEAP[$S + 56];
      
      var $6106 = HEAP[$S];
      var $6107 = Runtime.xor64($6106, $6104);
      var $6108 = Runtime.and64($6107, $6102);
      var $6109 = Runtime.xor64($6108, $6100);
      
      
      
      
      
      
      $t0 = $6081 + 0x5fcb6fab3ad6fc00 + $6098 + HEAP[$W + 624] + $6109;
      
      var $6117 = HEAP[$S + 16];
      var $6118 = unSign($6117, 64, 1) / Math.pow(2, 28);
      var $6119 = $6117 * Math.pow(2, 36);
      var $6120 = Runtime.or64($6118, $6119);
      
      var $6122 = HEAP[$S + 16];
      var $6123 = unSign($6122, 64, 1) / Math.pow(2, 34);
      var $6124 = $6122 * Math.pow(2, 30);
      var $6125 = Runtime.or64($6123, $6124);
      
      var $6127 = HEAP[$S + 16];
      var $6128 = unSign($6127, 64, 1) / Math.pow(2, 39);
      var $6129 = $6127 * Math.pow(2, 25);
      var $6130 = Runtime.or64($6128, $6129);
      var $6131 = Runtime.xor64($6125, $6120);
      var $6132 = Runtime.xor64($6131, $6130);
      
      var $6134 = HEAP[$S + 16];
      
      var $6136 = HEAP[$S + 24];
      var $6137 = Runtime.or64($6136, $6134);
      
      var $6139 = HEAP[$S + 32];
      var $6140 = Runtime.and64($6137, $6139);
      
      var $6142 = HEAP[$S + 16];
      
      var $6144 = HEAP[$S + 24];
      var $6145 = Runtime.and64($6144, $6142);
      var $6146 = Runtime.or64($6145, $6140);
      
      $t1 = $6146 + $6132;
      
      
      
      var $6151 = $t0 + HEAP[$S + 40];
      
      HEAP[$S + 40] = $6151;
      
      
      
      
      HEAP[$S + 8] = $t1 + $t0;
      
      var $6158 = HEAP[$S];
      
      var $6160 = HEAP[$S + 40];
      var $6161 = unSign($6160, 64, 1) / Math.pow(2, 14);
      var $6162 = $6160 * Math.pow(2, 50);
      var $6163 = Runtime.or64($6161, $6162);
      
      var $6165 = HEAP[$S + 40];
      var $6166 = unSign($6165, 64, 1) / Math.pow(2, 18);
      var $6167 = $6165 * Math.pow(2, 46);
      var $6168 = Runtime.or64($6166, $6167);
      
      var $6170 = HEAP[$S + 40];
      var $6171 = unSign($6170, 64, 1) / Math.pow(2, 41);
      var $6172 = $6170 * Math.pow(2, 23);
      var $6173 = Runtime.or64($6171, $6172);
      var $6174 = Runtime.xor64($6168, $6163);
      var $6175 = Runtime.xor64($6174, $6173);
      
      var $6177 = HEAP[$S + 56];
      
      var $6179 = HEAP[$S + 40];
      
      var $6181 = HEAP[$S + 48];
      
      var $6183 = HEAP[$S + 56];
      var $6184 = Runtime.xor64($6183, $6181);
      var $6185 = Runtime.and64($6184, $6179);
      var $6186 = Runtime.xor64($6185, $6177);
      
      
      
      
      
      
      $t0 = $6158 + 0x6c44198c4a475800 + $6175 + HEAP[$W + 632] + $6186;
      
      var $6194 = HEAP[$S + 8];
      var $6195 = unSign($6194, 64, 1) / Math.pow(2, 28);
      var $6196 = $6194 * Math.pow(2, 36);
      var $6197 = Runtime.or64($6195, $6196);
      
      var $6199 = HEAP[$S + 8];
      var $6200 = unSign($6199, 64, 1) / Math.pow(2, 34);
      var $6201 = $6199 * Math.pow(2, 30);
      var $6202 = Runtime.or64($6200, $6201);
      
      var $6204 = HEAP[$S + 8];
      var $6205 = unSign($6204, 64, 1) / Math.pow(2, 39);
      var $6206 = $6204 * Math.pow(2, 25);
      var $6207 = Runtime.or64($6205, $6206);
      var $6208 = Runtime.xor64($6202, $6197);
      var $6209 = Runtime.xor64($6208, $6207);
      
      var $6211 = HEAP[$S + 8];
      
      var $6213 = HEAP[$S + 16];
      var $6214 = Runtime.or64($6213, $6211);
      
      var $6216 = HEAP[$S + 24];
      var $6217 = Runtime.and64($6214, $6216);
      
      var $6219 = HEAP[$S + 8];
      
      var $6221 = HEAP[$S + 16];
      var $6222 = Runtime.and64($6221, $6219);
      var $6223 = Runtime.or64($6222, $6217);
      
      $t1 = $6223 + $6209;
      
      
      
      var $6228 = $t0 + HEAP[$S + 32];
      
      HEAP[$S + 32] = $6228;
      
      
      
      
      HEAP[$S] = $t1 + $t0;
      $i = 0;
      __label__ = 5;
      break;
     case 5:
      
      
      
      
      
      
      
      
      
      var $6243 = HEAP[$S + $i * 8] + HEAP[$sha_info_addr + 8 + $i * 8];
      
      
      
      HEAP[$sha_info_addr + 8 + $i * 8] = $6243;
      
      var $6248 = $i + 1;
      $i = $6248;
      
      if ($6248 <= 7) {
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
  function _sha512_init($sha_info) {
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
      
      
      HEAP[$sha_info_addr + 208] = 0;
      
      
      
      if (HEAP[$i] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$sha_info_addr + 208] = 1;
      __label__ = 2;
      break;
     case 2:
      
      
      
      HEAP[$sha_info_addr + 8] = 0x6a09e667f3bcc800;
      
      
      
      HEAP[$sha_info_addr + 8 + 8] = -0x4498517a7b355800;
      
      
      
      HEAP[$sha_info_addr + 8 + 16] = 0x3c6ef372fe94f800;
      
      
      
      HEAP[$sha_info_addr + 8 + 24] = -0x5ab00ac5a0e2c800;
      
      
      
      HEAP[$sha_info_addr + 8 + 32] = 0x510e527fade68400;
      
      
      
      HEAP[$sha_info_addr + 8 + 40] = -0x64fa9773d4c19400;
      
      
      
      HEAP[$sha_info_addr + 8 + 48] = 0x1f83d9abfb41bd00;
      
      
      
      HEAP[$sha_info_addr + 8 + 56] = 0x5be0cd19137e2000;
      
      
      HEAP[$sha_info_addr + 72] = 0;
      
      
      HEAP[$sha_info_addr + 76] = 0;
      
      
      HEAP[$sha_info_addr + 212] = 0;
      
      
      HEAP[$sha_info_addr + 216] = 64;
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha384_init($sha_info) {
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
      
      
      HEAP[$sha_info_addr + 208] = 0;
      
      
      
      if (HEAP[$i] == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$sha_info_addr + 208] = 1;
      __label__ = 2;
      break;
     case 2:
      
      
      
      HEAP[$sha_info_addr + 8] = -0x344462a23efa6200;
      
      
      
      HEAP[$sha_info_addr + 8 + 8] = 0x629a292a367cd400;
      
      
      
      HEAP[$sha_info_addr + 8 + 16] = -0x6ea6fea5cf8f2400;
      
      
      
      HEAP[$sha_info_addr + 8 + 24] = 0x152fecd8f70e5900;
      
      
      
      HEAP[$sha_info_addr + 8 + 32] = 0x67332667ffc00c00;
      
      
      
      HEAP[$sha_info_addr + 8 + 40] = -0x714bb57897a7ec00;
      
      
      
      HEAP[$sha_info_addr + 8 + 48] = -0x24f3d1f29b067000;
      
      
      
      HEAP[$sha_info_addr + 8 + 56] = 0x47b5481dbefa5000;
      
      
      HEAP[$sha_info_addr + 72] = 0;
      
      
      HEAP[$sha_info_addr + 76] = 0;
      
      
      HEAP[$sha_info_addr + 212] = 0;
      
      
      HEAP[$sha_info_addr + 216] = 48;
      STACKTOP = __stackBase__;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha512_update($sha_info, $buffer, $count) {
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
      
      
      
      
      
      
      $clo = $count_addr * 8 + HEAP[$sha_info_addr + 72];
      
      
      
      
      
      if (HEAP[$sha_info_addr + 72] > $clo) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $14 = HEAP[$sha_info_addr + 76] + 1;
      
      
      HEAP[$sha_info_addr + 76] = $14;
      __label__ = 2;
      break;
     case 2:
      
      
      
      HEAP[$sha_info_addr + 72] = $clo;
      
      
      
      
      
      var $25 = ($count_addr >>> 29) + HEAP[$sha_info_addr + 76];
      
      
      HEAP[$sha_info_addr + 76] = $25;
      
      
      
      
      if (HEAP[$sha_info_addr + 212] != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 3:
      
      
      
      
      $i = 128 - HEAP[$sha_info_addr + 212];
      
      
      
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
      
      
      
      
      
      
      
      var $47 = $sha_info_addr + 80 + HEAP[$sha_info_addr + 212];
      
      _llvm_memcpy_p0i8_p0i8_i32($47, $buffer_addr, $i, 1, 0);
      
      
      var $51 = $count_addr - $i;
      $count_addr = $51;
      
      
      var $54 = $buffer_addr + $i;
      $buffer_addr = $54;
      
      
      
      
      var $59 = $i + HEAP[$sha_info_addr + 212];
      
      
      HEAP[$sha_info_addr + 212] = $59;
      
      
      
      
      if (HEAP[$sha_info_addr + 212] == 128) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      
      _sha512_transform($sha_info_addr);
      __label__ = 7;
      break;
     case 7:
      
      
      if ($count_addr > 127) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($sha_info_addr + 80, $buffer_addr, 128, 1, 0);
      
      var $74 = $buffer_addr + 128;
      $buffer_addr = $74;
      
      var $76 = $count_addr - 128;
      $count_addr = $76;
      
      _sha512_transform($sha_info_addr);
      
      
      if ($count_addr > 127) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($sha_info_addr + 80, $buffer_addr, $count_addr, 1, 0);
      
      
      
      HEAP[$sha_info_addr + 212] = $count_addr;
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sha512_final($digest, $sha_info) {
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
      
      
      
      $lo_bit_count = HEAP[$sha_info_addr + 72];
      
      
      
      $hi_bit_count = HEAP[$sha_info_addr + 76];
      
      
      
      $count = $lo_bit_count >>> 3 & 127;
      
      
      
      
      
      HEAP[$sha_info_addr + 80 + $count] = -128;
      
      var $15 = $count + 1;
      $count = $15;
      
      
      var $18 = $count;
      if ($count > 112) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      
      _llvm_memset_p0i8_i32($sha_info_addr + 80 + $count, 0, 128 - $18, 1, 0);
      
      _sha512_transform($sha_info_addr);
      
      
      
      _llvm_memset_p0i8_i32($sha_info_addr + 80, 0, 112, 1, 0);
      __label__ = 3;
      break;
     case 2:
      
      
      
      
      
      
      _llvm_memset_p0i8_i32($sha_info_addr + 80 + $count, 0, 112 - $18, 1, 0);
      __label__ = 3;
      break;
     case 3:
      
      
      
      HEAP[$sha_info_addr + 80 + 112] = 0;
      
      
      
      HEAP[$sha_info_addr + 80 + 113] = 0;
      
      
      
      HEAP[$sha_info_addr + 80 + 114] = 0;
      
      
      
      HEAP[$sha_info_addr + 80 + 115] = 0;
      
      
      
      HEAP[$sha_info_addr + 80 + 116] = 0;
      
      
      
      HEAP[$sha_info_addr + 80 + 117] = 0;
      
      
      
      HEAP[$sha_info_addr + 80 + 118] = 0;
      
      
      
      HEAP[$sha_info_addr + 80 + 119] = 0;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 80 + 120] = $hi_bit_count >>> 24 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 80 + 121] = $hi_bit_count >>> 16 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 80 + 122] = $hi_bit_count >>> 8 & 255;
      
      
      
      
      
      HEAP[$sha_info_addr + 80 + 123] = $hi_bit_count & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 80 + 124] = $lo_bit_count >>> 24 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 80 + 125] = $lo_bit_count >>> 16 & 255;
      
      
      
      
      
      
      HEAP[$sha_info_addr + 80 + 126] = $lo_bit_count >>> 8 & 255;
      
      
      
      
      
      HEAP[$sha_info_addr + 80 + 127] = $lo_bit_count & 255;
      
      _sha512_transform($sha_info_addr);
      
      
      
      
      var $110 = HEAP[$sha_info_addr + 8] / Math.pow(2, 56);
      var $111 = $110 & 255;
      
      
      HEAP[$digest_addr] = $111;
      
      
      
      
      var $118 = HEAP[$sha_info_addr + 8] / Math.pow(2, 48);
      var $119 = $118 & 255;
      
      
      HEAP[$digest_addr + 1] = $119;
      
      
      
      
      var $126 = HEAP[$sha_info_addr + 8] / Math.pow(2, 40);
      var $127 = $126 & 255;
      
      
      HEAP[$digest_addr + 2] = $127;
      
      
      
      
      var $134 = HEAP[$sha_info_addr + 8] / Math.pow(2, 32);
      var $135 = $134 & 255;
      
      
      HEAP[$digest_addr + 3] = $135;
      
      
      
      
      var $142 = HEAP[$sha_info_addr + 8] / Math.pow(2, 24);
      var $143 = $142 & 255;
      
      
      HEAP[$digest_addr + 4] = $143;
      
      
      
      
      var $150 = HEAP[$sha_info_addr + 8] / Math.pow(2, 16);
      var $151 = $150 & 255;
      
      
      HEAP[$digest_addr + 5] = $151;
      
      
      
      
      var $158 = HEAP[$sha_info_addr + 8] / Math.pow(2, 8);
      var $159 = $158 & 255;
      
      
      HEAP[$digest_addr + 6] = $159;
      
      
      
      
      var $166 = HEAP[$sha_info_addr + 8] & 255;
      
      
      HEAP[$digest_addr + 7] = $166;
      
      
      
      var $172 = HEAP[$sha_info_addr + 8 + 8];
      var $173 = unSign($172, 64, 1) / Math.pow(2, 56);
      var $174 = $173 & 255;
      
      
      HEAP[$digest_addr + 8] = $174;
      
      
      
      var $180 = HEAP[$sha_info_addr + 8 + 8];
      var $181 = unSign($180, 64, 1) / Math.pow(2, 48);
      var $182 = $181 & 255;
      
      
      HEAP[$digest_addr + 9] = $182;
      
      
      
      var $188 = HEAP[$sha_info_addr + 8 + 8];
      var $189 = unSign($188, 64, 1) / Math.pow(2, 40);
      var $190 = $189 & 255;
      
      
      HEAP[$digest_addr + 10] = $190;
      
      
      
      var $196 = HEAP[$sha_info_addr + 8 + 8];
      var $197 = unSign($196, 64, 1) / Math.pow(2, 32);
      var $198 = $197 & 255;
      
      
      HEAP[$digest_addr + 11] = $198;
      
      
      
      var $204 = HEAP[$sha_info_addr + 8 + 8];
      var $205 = unSign($204, 64, 1) / Math.pow(2, 24);
      var $206 = $205 & 255;
      
      
      HEAP[$digest_addr + 12] = $206;
      
      
      
      var $212 = HEAP[$sha_info_addr + 8 + 8];
      var $213 = unSign($212, 64, 1) / Math.pow(2, 16);
      var $214 = $213 & 255;
      
      
      HEAP[$digest_addr + 13] = $214;
      
      
      
      var $220 = HEAP[$sha_info_addr + 8 + 8];
      var $221 = unSign($220, 64, 1) / Math.pow(2, 8);
      var $222 = $221 & 255;
      
      
      HEAP[$digest_addr + 14] = $222;
      
      
      
      
      var $229 = HEAP[$sha_info_addr + 8 + 8] & 255;
      
      
      HEAP[$digest_addr + 15] = $229;
      
      
      
      var $235 = HEAP[$sha_info_addr + 8 + 16];
      var $236 = unSign($235, 64, 1) / Math.pow(2, 56);
      var $237 = $236 & 255;
      
      
      HEAP[$digest_addr + 16] = $237;
      
      
      
      var $243 = HEAP[$sha_info_addr + 8 + 16];
      var $244 = unSign($243, 64, 1) / Math.pow(2, 48);
      var $245 = $244 & 255;
      
      
      HEAP[$digest_addr + 17] = $245;
      
      
      
      var $251 = HEAP[$sha_info_addr + 8 + 16];
      var $252 = unSign($251, 64, 1) / Math.pow(2, 40);
      var $253 = $252 & 255;
      
      
      HEAP[$digest_addr + 18] = $253;
      
      
      
      var $259 = HEAP[$sha_info_addr + 8 + 16];
      var $260 = unSign($259, 64, 1) / Math.pow(2, 32);
      var $261 = $260 & 255;
      
      
      HEAP[$digest_addr + 19] = $261;
      
      
      
      var $267 = HEAP[$sha_info_addr + 8 + 16];
      var $268 = unSign($267, 64, 1) / Math.pow(2, 24);
      var $269 = $268 & 255;
      
      
      HEAP[$digest_addr + 20] = $269;
      
      
      
      var $275 = HEAP[$sha_info_addr + 8 + 16];
      var $276 = unSign($275, 64, 1) / Math.pow(2, 16);
      var $277 = $276 & 255;
      
      
      HEAP[$digest_addr + 21] = $277;
      
      
      
      var $283 = HEAP[$sha_info_addr + 8 + 16];
      var $284 = unSign($283, 64, 1) / Math.pow(2, 8);
      var $285 = $284 & 255;
      
      
      HEAP[$digest_addr + 22] = $285;
      
      
      
      
      var $292 = HEAP[$sha_info_addr + 8 + 16] & 255;
      
      
      HEAP[$digest_addr + 23] = $292;
      
      
      
      
      var $299 = HEAP[$sha_info_addr + 8 + 24] / Math.pow(2, 56);
      var $300 = $299 & 255;
      
      
      HEAP[$digest_addr + 24] = $300;
      
      
      
      
      var $307 = HEAP[$sha_info_addr + 8 + 24] / Math.pow(2, 48);
      var $308 = $307 & 255;
      
      
      HEAP[$digest_addr + 25] = $308;
      
      
      
      
      var $315 = HEAP[$sha_info_addr + 8 + 24] / Math.pow(2, 40);
      var $316 = $315 & 255;
      
      
      HEAP[$digest_addr + 26] = $316;
      
      
      
      
      var $323 = HEAP[$sha_info_addr + 8 + 24] / Math.pow(2, 32);
      var $324 = $323 & 255;
      
      
      HEAP[$digest_addr + 27] = $324;
      
      
      
      
      var $331 = HEAP[$sha_info_addr + 8 + 24] / Math.pow(2, 24);
      var $332 = $331 & 255;
      
      
      HEAP[$digest_addr + 28] = $332;
      
      
      
      
      var $339 = HEAP[$sha_info_addr + 8 + 24] / Math.pow(2, 16);
      var $340 = $339 & 255;
      
      
      HEAP[$digest_addr + 29] = $340;
      
      
      
      
      var $347 = HEAP[$sha_info_addr + 8 + 24] / Math.pow(2, 8);
      var $348 = $347 & 255;
      
      
      HEAP[$digest_addr + 30] = $348;
      
      
      
      
      var $355 = HEAP[$sha_info_addr + 8 + 24] & 255;
      
      
      HEAP[$digest_addr + 31] = $355;
      
      
      
      
      var $362 = HEAP[$sha_info_addr + 8 + 32] / Math.pow(2, 56);
      var $363 = $362 & 255;
      
      
      HEAP[$digest_addr + 32] = $363;
      
      
      
      
      var $370 = HEAP[$sha_info_addr + 8 + 32] / Math.pow(2, 48);
      var $371 = $370 & 255;
      
      
      HEAP[$digest_addr + 33] = $371;
      
      
      
      
      var $378 = HEAP[$sha_info_addr + 8 + 32] / Math.pow(2, 40);
      var $379 = $378 & 255;
      
      
      HEAP[$digest_addr + 34] = $379;
      
      
      
      
      var $386 = HEAP[$sha_info_addr + 8 + 32] / Math.pow(2, 32);
      var $387 = $386 & 255;
      
      
      HEAP[$digest_addr + 35] = $387;
      
      
      
      
      var $394 = HEAP[$sha_info_addr + 8 + 32] / Math.pow(2, 24);
      var $395 = $394 & 255;
      
      
      HEAP[$digest_addr + 36] = $395;
      
      
      
      
      var $402 = HEAP[$sha_info_addr + 8 + 32] / Math.pow(2, 16);
      var $403 = $402 & 255;
      
      
      HEAP[$digest_addr + 37] = $403;
      
      
      
      
      var $410 = HEAP[$sha_info_addr + 8 + 32] / Math.pow(2, 8);
      var $411 = $410 & 255;
      
      
      HEAP[$digest_addr + 38] = $411;
      
      
      
      
      var $418 = HEAP[$sha_info_addr + 8 + 32] & 255;
      
      
      HEAP[$digest_addr + 39] = $418;
      
      
      
      var $424 = HEAP[$sha_info_addr + 8 + 40];
      var $425 = unSign($424, 64, 1) / Math.pow(2, 56);
      var $426 = $425 & 255;
      
      
      HEAP[$digest_addr + 40] = $426;
      
      
      
      var $432 = HEAP[$sha_info_addr + 8 + 40];
      var $433 = unSign($432, 64, 1) / Math.pow(2, 48);
      var $434 = $433 & 255;
      
      
      HEAP[$digest_addr + 41] = $434;
      
      
      
      var $440 = HEAP[$sha_info_addr + 8 + 40];
      var $441 = unSign($440, 64, 1) / Math.pow(2, 40);
      var $442 = $441 & 255;
      
      
      HEAP[$digest_addr + 42] = $442;
      
      
      
      var $448 = HEAP[$sha_info_addr + 8 + 40];
      var $449 = unSign($448, 64, 1) / Math.pow(2, 32);
      var $450 = $449 & 255;
      
      
      HEAP[$digest_addr + 43] = $450;
      
      
      
      var $456 = HEAP[$sha_info_addr + 8 + 40];
      var $457 = unSign($456, 64, 1) / Math.pow(2, 24);
      var $458 = $457 & 255;
      
      
      HEAP[$digest_addr + 44] = $458;
      
      
      
      var $464 = HEAP[$sha_info_addr + 8 + 40];
      var $465 = unSign($464, 64, 1) / Math.pow(2, 16);
      var $466 = $465 & 255;
      
      
      HEAP[$digest_addr + 45] = $466;
      
      
      
      var $472 = HEAP[$sha_info_addr + 8 + 40];
      var $473 = unSign($472, 64, 1) / Math.pow(2, 8);
      var $474 = $473 & 255;
      
      
      HEAP[$digest_addr + 46] = $474;
      
      
      
      
      var $481 = HEAP[$sha_info_addr + 8 + 40] & 255;
      
      
      HEAP[$digest_addr + 47] = $481;
      
      
      
      var $487 = HEAP[$sha_info_addr + 8 + 48];
      var $488 = unSign($487, 64, 1) / Math.pow(2, 56);
      var $489 = $488 & 255;
      
      
      HEAP[$digest_addr + 48] = $489;
      
      
      
      var $495 = HEAP[$sha_info_addr + 8 + 48];
      var $496 = unSign($495, 64, 1) / Math.pow(2, 48);
      var $497 = $496 & 255;
      
      
      HEAP[$digest_addr + 49] = $497;
      
      
      
      var $503 = HEAP[$sha_info_addr + 8 + 48];
      var $504 = unSign($503, 64, 1) / Math.pow(2, 40);
      var $505 = $504 & 255;
      
      
      HEAP[$digest_addr + 50] = $505;
      
      
      
      var $511 = HEAP[$sha_info_addr + 8 + 48];
      var $512 = unSign($511, 64, 1) / Math.pow(2, 32);
      var $513 = $512 & 255;
      
      
      HEAP[$digest_addr + 51] = $513;
      
      
      
      var $519 = HEAP[$sha_info_addr + 8 + 48];
      var $520 = unSign($519, 64, 1) / Math.pow(2, 24);
      var $521 = $520 & 255;
      
      
      HEAP[$digest_addr + 52] = $521;
      
      
      
      var $527 = HEAP[$sha_info_addr + 8 + 48];
      var $528 = unSign($527, 64, 1) / Math.pow(2, 16);
      var $529 = $528 & 255;
      
      
      HEAP[$digest_addr + 53] = $529;
      
      
      
      var $535 = HEAP[$sha_info_addr + 8 + 48];
      var $536 = unSign($535, 64, 1) / Math.pow(2, 8);
      var $537 = $536 & 255;
      
      
      HEAP[$digest_addr + 54] = $537;
      
      
      
      
      var $544 = HEAP[$sha_info_addr + 8 + 48] & 255;
      
      
      HEAP[$digest_addr + 55] = $544;
      
      
      
      
      var $551 = HEAP[$sha_info_addr + 8 + 56] / Math.pow(2, 56);
      var $552 = $551 & 255;
      
      
      HEAP[$digest_addr + 56] = $552;
      
      
      
      
      var $559 = HEAP[$sha_info_addr + 8 + 56] / Math.pow(2, 48);
      var $560 = $559 & 255;
      
      
      HEAP[$digest_addr + 57] = $560;
      
      
      
      
      var $567 = HEAP[$sha_info_addr + 8 + 56] / Math.pow(2, 40);
      var $568 = $567 & 255;
      
      
      HEAP[$digest_addr + 58] = $568;
      
      
      
      
      var $575 = HEAP[$sha_info_addr + 8 + 56] / Math.pow(2, 32);
      var $576 = $575 & 255;
      
      
      HEAP[$digest_addr + 59] = $576;
      
      
      
      
      var $583 = HEAP[$sha_info_addr + 8 + 56] / Math.pow(2, 24);
      var $584 = $583 & 255;
      
      
      HEAP[$digest_addr + 60] = $584;
      
      
      
      
      var $591 = HEAP[$sha_info_addr + 8 + 56] / Math.pow(2, 16);
      var $592 = $591 & 255;
      
      
      HEAP[$digest_addr + 61] = $592;
      
      
      
      
      var $599 = HEAP[$sha_info_addr + 8 + 56] / Math.pow(2, 8);
      var $600 = $599 & 255;
      
      
      HEAP[$digest_addr + 62] = $600;
      
      
      
      
      var $607 = HEAP[$sha_info_addr + 8 + 56] & 255;
      
      
      HEAP[$digest_addr + 63] = $607;
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _newSHA384object() {
    
    var $retval;
    var $0;
    var $1 = __PyObject_New(_SHA384type);
    
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _newSHA512object() {
    
    var $retval;
    var $0;
    var $1 = __PyObject_New(_SHA512type);
    
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _SHA512_dealloc($ptr) {
    
    var $ptr_addr;
    $ptr_addr = $ptr;
    
    
    _PyObject_Free($ptr_addr);
    return;
  }
  function _SHA512_copy($self, $unused) {
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
      
      
      
      
      
      if (HEAP[$self_addr + 4] == _SHA512type) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = _newSHA512object();
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
      var $9 = _newSHA384object();
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
  function _SHA512_digest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 284;
    _memset(__stackBase__, 0, 284);
    
    var $self_addr;
    var $unused_addr;
    var $retval;
    var $0;
    var $digest = __stackBase__;
    var $temp = __stackBase__ + 64;
    $self_addr = $self;
    $unused_addr = $unused;
    
    _SHAcopy($self_addr, $temp);
    var $digest1 = $digest;
    _sha512_final($digest1, $temp);
    
    
    var $4 = HEAP[$self_addr + 216];
    var $digest2 = $digest;
    var $5 = _PyString_FromStringAndSize($digest2, $4);
    $0 = $5;
    
    $retval = $0;
    var $retval4 = $retval;
    STACKTOP = __stackBase__;
    return $retval4;
  }
  function _SHA512_hexdigest($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 284;
    _memset(__stackBase__, 0, 284);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $iftmp_28;
      var $iftmp_24;
      var $0;
      var $digest = __stackBase__;
      var $temp = __stackBase__ + 64;
      var $retval1;
      var $hex_digest;
      var $i;
      var $j;
      var $c;
      $self_addr = $self;
      $unused_addr = $unused;
      
      _SHAcopy($self_addr, $temp);
      var $digest2 = $digest;
      _sha512_final($digest2, $temp);
      
      
      
      var $5 = HEAP[$self_addr + 216] * 2;
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
      
      
      
      
      
      if (HEAP[$self_addr + 216] > $i) {
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
      
      $iftmp_24 = $41 + 87;
      __label__ = 10;
      break;
     case 9:
      
      $iftmp_24 = $41 + 48;
      __label__ = 10;
      break;
     case 10:
      
      $c = $iftmp_24;
      
      
      
      
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
      
      $iftmp_28 = $56 + 87;
      __label__ = 13;
      break;
     case 12:
      
      $iftmp_28 = $56 + 48;
      __label__ = 13;
      break;
     case 13:
      
      $c = $iftmp_28;
      
      
      
      
      HEAP[$hex_digest + $j] = $c;
      
      var $65 = $j + 1;
      $j = $65;
      
      var $67 = $i + 1;
      $i = $67;
      
      
      
      
      
      if (HEAP[$self_addr + 216] > $i) {
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
  function _SHA512_update($self, $args) {
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
      
      _sha512_update($self_addr, $7, $5);
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
  function _SHA512_get_block_size($self, $closure) {
    
    var $self_addr;
    var $closure_addr;
    var $retval;
    var $0;
    $self_addr = $self;
    $closure_addr = $closure;
    var $1 = _PyInt_FromLong(128);
    $0 = $1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _SHA512_get_name($self, $closure) {
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
      
      
      
      
      
      if (HEAP[$self_addr + 216] == 64) {
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
  function _SHA512_new($self, $args, $kwdict) {
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
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwdict_addr, __str13, _kwlist_12080, allocate([ $buf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = _newSHA512object();
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
      
      _sha512_init($new);
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
      
      _sha512_update($new, $34, $32);
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
  function _SHA384_new($self, $args, $kwdict) {
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
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwdict_addr, __str13, _kwlist_12116, allocate([ $buf, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $5 = _newSHA384object();
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
      
      _sha384_init($new);
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
      
      _sha512_update($new, $34, $32);
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
  function _init_sha512() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      HEAP[_SHA384type + 4] = _PyType_Type;
      var $0 = _PyType_Ready(_SHA384type);
      
      if ($0 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      HEAP[_SHA512type + 4] = _PyType_Type;
      var $2 = _PyType_Ready(_SHA512type);
      
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
  Module["_init_sha512"] = _init_sha512;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _SHA512_copy, 0, _SHA512_digest, 0, _SHA512_hexdigest, 0, _SHA512_update, 0, _SHA512_get_block_size, 0, _SHA512_get_name, 0, _SHA512_dealloc, 0, _SHA512_new, 0, _SHA384_new, 0 ]);
  function run(args) {
    _SHA512_copy__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 99, 111, 112, 121, 32, 111, 102, 32, 116, 104, 101, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA512_digest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 98, 105, 110, 97, 114, 121, 32, 100, 97, 116, 97, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA512_hexdigest__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 100, 105, 103, 101, 115, 116, 32, 118, 97, 108, 117, 101, 32, 97, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 104, 101, 120, 97, 100, 101, 99, 105, 109, 97, 108, 32, 100, 105, 103, 105, 116, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _SHA512_update__doc__ = allocate([ 85, 112, 100, 97, 116, 101, 32, 116, 104, 105, 115, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 39, 115, 32, 115, 116, 97, 116, 101, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str = allocate([ 115, 42, 58, 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 99, 111, 112, 121, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 104, 101, 120, 100, 105, 103, 101, 115, 116, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 117, 112, 100, 97, 116, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str5 = allocate([ 83, 72, 65, 53, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 83, 72, 65, 51, 56, 52, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 98, 108, 111, 99, 107, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_getseters = allocate(60, [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, i8*)*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str9 = allocate([ 100, 105, 103, 101, 115, 116, 95, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 100, 105, 103, 101, 115, 116, 115, 105, 122, 101, 0 ], "i8", ALLOC_NORMAL);
    _SHA_members = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 216, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 216, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str11 = allocate([ 95, 115, 104, 97, 53, 49, 50, 46, 115, 104, 97, 51, 56, 52, 0 ], "i8", ALLOC_NORMAL);
    _SHA384type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str12 = allocate([ 95, 115, 104, 97, 53, 49, 50, 46, 115, 104, 97, 53, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    _SHA512type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 131563, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _SHA512_new__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 83, 72, 65, 45, 53, 49, 50, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 59, 32, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 119, 105, 116, 104, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 124, 115, 42, 58, 110, 101, 119, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_12080 = allocate(8, "i8*", ALLOC_NORMAL);
    __str14 = allocate([ 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _SHA384_new__doc__ = allocate([ 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 83, 72, 65, 45, 51, 56, 52, 32, 104, 97, 115, 104, 32, 111, 98, 106, 101, 99, 116, 59, 32, 111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 32, 119, 105, 116, 104, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_12116 = allocate(8, "i8*", ALLOC_NORMAL);
    __str15 = allocate([ 115, 104, 97, 53, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 104, 97, 51, 56, 52, 0 ], "i8", ALLOC_NORMAL);
    _SHA_functions = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str17 = allocate([ 95, 115, 104, 97, 53, 49, 50, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_SHA_methods] = __str1;
    HEAP[_SHA_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_SHA_methods + 12] = _SHA512_copy__doc__;
    HEAP[_SHA_methods + 16] = __str2;
    HEAP[_SHA_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_SHA_methods + 28] = _SHA512_digest__doc__;
    HEAP[_SHA_methods + 32] = __str3;
    HEAP[_SHA_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_SHA_methods + 44] = _SHA512_hexdigest__doc__;
    HEAP[_SHA_methods + 48] = __str4;
    HEAP[_SHA_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_SHA_methods + 60] = _SHA512_update__doc__;
    HEAP[_SHA_getseters] = __str7;
    HEAP[_SHA_getseters + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_SHA_getseters + 20] = __str8;
    HEAP[_SHA_getseters + 24] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_SHA_members] = __str9;
    HEAP[_SHA_members + 20] = __str10;
    HEAP[_SHA384type + 12] = __str11;
    HEAP[_SHA384type + 24] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_SHA384type + 116] = _SHA_methods;
    HEAP[_SHA384type + 120] = _SHA_members;
    HEAP[_SHA384type + 124] = _SHA_getseters;
    HEAP[_SHA512type + 12] = __str12;
    HEAP[_SHA512type + 24] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_SHA512type + 116] = _SHA_methods;
    HEAP[_SHA512type + 120] = _SHA_members;
    HEAP[_SHA512type + 124] = _SHA_getseters;
    HEAP[_kwlist_12080] = __str14;
    HEAP[_kwlist_12116] = __str14;
    HEAP[_SHA_functions] = __str15;
    HEAP[_SHA_functions + 4] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_SHA_functions + 12] = _SHA512_new__doc__;
    HEAP[_SHA_functions + 16] = __str16;
    HEAP[_SHA_functions + 20] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_SHA_functions + 28] = _SHA384_new__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
