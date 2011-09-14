"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 256;
  var $1___SIZE = 16;
  var $2___SIZE = 16;
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
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var __str;
  var _ImageopError;
  var __str1;
  var __str2;
  var __str3;
  var _ImageopDict;
  var _bcos_8350;
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
  var __str30;
  var __str31;
  var __str32;
  var _imageop_methods;
  var __str33;
  var __str34;
  var __str35;
  var __str36;
  function _check_coordonnate($value, $name) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $value_addr;
      var $name_addr;
      var $retval;
      var $0;
      $value_addr = $value;
      $name_addr = $name;
      
      
      if ($value_addr > 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 1;
      __label__ = 3;
      break;
     case 2:
      var $3 = HEAP[_PyExc_ValueError];
      
      var $5 = _PyErr_Format($3, __str, allocate([ $name_addr, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
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
  function _check_multiply_size($product, $x, $xname, $y, $yname, $size) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $product_addr;
      var $x_addr;
      var $xname_addr;
      var $y_addr;
      var $yname_addr;
      var $size_addr;
      var $retval;
      var $0;
      $product_addr = $product;
      $x_addr = $x;
      $xname_addr = $xname;
      $y_addr = $y;
      $yname_addr = $yname;
      $size_addr = $size;
      
      
      var $3 = _check_coordonnate($x_addr, $xname_addr);
      
      if ($3 == 0) {
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
      
      
      var $7 = _check_coordonnate($y_addr, $yname_addr);
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 7;
      break;
     case 4:
      
      
      
      
      
      
      
      if ((($product_addr / $y_addr | 0) / $x_addr | 0) == $size_addr) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 1;
      __label__ = 7;
      break;
     case 6:
      var $16 = HEAP[_ImageopError];
      _PyErr_SetString($16, __str1);
      $0 = 0;
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
  function _check_multiply($product, $x, $y) {
    
    var $product_addr;
    var $x_addr;
    var $y_addr;
    var $retval;
    var $0;
    $product_addr = $product;
    $x_addr = $x;
    $y_addr = $y;
    
    
    
    var $4 = _check_multiply_size($product_addr, $x_addr, __str2, $y_addr, __str3, 1);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _imageop_backward_compatible() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $retval;
      var $0;
      var $bco;
      var $rc;
      
      
      if (HEAP[_ImageopDict] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 1;
      __label__ = 12;
      break;
     case 2:
      
      
      if (HEAP[_bcos_8350] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $5 = _PyString_FromString(__str4);
      HEAP[_bcos_8350] = $5;
      
      
      if (HEAP[_bcos_8350] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      $0 = 1;
      __label__ = 12;
      break;
     case 5:
      var $8 = HEAP[_bcos_8350];
      var $9 = HEAP[_ImageopDict];
      var $10 = _PyDict_GetItem($9, $8);
      $bco = $10;
      
      if ($10 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 1;
      __label__ = 12;
      break;
     case 7:
      
      
      
      
      
      
      
      if ((HEAP[HEAP[$bco + 4] + 84] & 8388608) == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 1;
      __label__ = 12;
      break;
     case 9:
      
      var $20 = _PyInt_AsLong($bco);
      $rc = $20;
      var $21 = _PyErr_Occurred();
      
      if ($21 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      _PyErr_Clear();
      $rc = 1;
      __label__ = 11;
      break;
     case 11:
      
      
      
      $0 = $rc != 0;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval12 = $retval;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_crop($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 36;
    _memset(__stackBase__, 0, 36);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $iftmp_18;
      var $iftmp_15;
      var $0;
      var $cp = __stackBase__;
      var $ncp;
      var $nsp;
      var $nlp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $x = __stackBase__ + 12;
      var $y = __stackBase__ + 16;
      var $newx1 = __stackBase__ + 20;
      var $newx2 = __stackBase__ + 24;
      var $newy1 = __stackBase__ + 28;
      var $newy2 = __stackBase__ + 32;
      var $nlen;
      var $ix;
      var $iy;
      var $xstep;
      var $ystep;
      var $rv;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str5, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0, $newx1, 0, 0, 0, $newy1, 0, 0, 0, $newx2, 0, 0, 0, $newy2, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 33;
      break;
     case 2:
      
      
      
      
      
      
      
      
      if (HEAP[$size] != 1 & HEAP[$size] != 2 & HEAP[$size] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_ImageopError];
      _PyErr_SetString($10, __str6);
      $0 = 0;
      __label__ = 33;
      break;
     case 4:
      var $11 = HEAP[$size];
      var $12 = HEAP[$y];
      var $13 = HEAP[$x];
      var $14 = HEAP[$len];
      var $15 = _check_multiply_size($14, $13, __str2, $12, __str3, $11);
      
      if ($15 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 33;
      break;
     case 6:
      
      
      
      if (HEAP[$newx1] < HEAP[$newx2]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $iftmp_15 = 1;
      __label__ = 9;
      break;
     case 8:
      $iftmp_15 = -1;
      __label__ = 9;
      break;
     case 9:
      
      $xstep = $iftmp_15;
      
      
      
      if (HEAP[$newy1] < HEAP[$newy2]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $iftmp_18 = 1;
      __label__ = 12;
      break;
     case 11:
      $iftmp_18 = -1;
      __label__ = 12;
      break;
     case 12:
      
      $ystep = $iftmp_18;
      
      
      
      
      
      var $abs = HEAP[$newx2] - HEAP[$newx1] >= 0 ? HEAP[$newx2] - HEAP[$newx1] : 0 - (HEAP[$newx2] - HEAP[$newx1]);
      
      
      
      
      
      
      var $abs17 = HEAP[$newy2] - HEAP[$newy1] >= 0 ? HEAP[$newy2] - HEAP[$newy1] : 0 - (HEAP[$newy2] - HEAP[$newy1]);
      
      
      
      
      $nlen = ($abs + 1) * HEAP[$size] * ($abs17 + 1);
      var $36 = HEAP[$size];
      
      
      
      
      
      var $abs21 = HEAP[$newy2] - HEAP[$newy1] >= 0 ? HEAP[$newy2] - HEAP[$newy1] : 0 - (HEAP[$newy2] - HEAP[$newy1]);
      var $40 = $abs21 + 1;
      
      
      
      
      
      var $abs25 = HEAP[$newx2] - HEAP[$newx1] >= 0 ? HEAP[$newx2] - HEAP[$newx1] : 0 - (HEAP[$newx2] - HEAP[$newx1]);
      var $44 = $abs25 + 1;
      
      var $46 = _check_multiply_size($nlen, $44, __str7, $40, __str8, $36);
      
      if ($46 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $0 = 0;
      __label__ = 33;
      break;
     case 14:
      
      var $49 = _PyString_FromStringAndSize(0, $nlen);
      $rv = $49;
      
      
      if ($rv == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      $0 = 0;
      __label__ = 33;
      break;
     case 16:
      
      var $53 = _PyString_AsString($rv);
      $ncp = $53;
      
      
      $nsp = $ncp;
      
      
      $nlp = $ncp;
      
      
      var $60 = $ystep + HEAP[$newy2];
      HEAP[$newy2] = $60;
      
      
      var $63 = $xstep + HEAP[$newx2];
      HEAP[$newx2] = $63;
      
      $iy = HEAP[$newy1];
      
      
      
      if ($iy != HEAP[$newy2]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 17:
      
      $ix = HEAP[$newx1];
      
      
      
      var $72 = $iy;
      if ($ix != HEAP[$newx2]) {
        __lastLabel__ = 17;
        __label__ = 18;
        break;
      } else {
        __lastLabel__ = 17;
        __label__ = 31;
        break;
      }
     case 18:
      var $73 = __lastLabel__ == 30 ? $132 : $72;
      
      if ($73 < 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      if ($iy >= HEAP[$y]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 20:
      
      
      if ($ix < 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      
      
      
      if ($ix >= HEAP[$x]) {
        __label__ = 22;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 22:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      HEAP[$ncp] = 0;
      
      var $87 = $ncp + 1;
      $ncp = $87;
      __label__ = 30;
      break;
     case 24:
      
      HEAP[$nlp] = 0;
      
      var $90 = $nlp + 4;
      $nlp = $90;
      __label__ = 30;
      break;
     case 25:
      
      
      if (HEAP[$size] == 1) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      
      
      
      
      var $100 = HEAP[HEAP[$cp] + $iy * HEAP[$x] + $ix];
      
      HEAP[$ncp] = $100;
      
      var $103 = $ncp + 1;
      $ncp = $103;
      __label__ = 30;
      break;
     case 27:
      
      
      var $106 = HEAP[$cp];
      
      
      
      
      var $111 = $iy * HEAP[$x] + $ix;
      if (HEAP[$size] == 2) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      
      
      
      var $115 = HEAP[$106 + $111 * 2];
      
      HEAP[$nsp] = $115;
      
      var $118 = $nsp + 2;
      $nsp = $118;
      __label__ = 30;
      break;
     case 29:
      
      
      
      var $122 = HEAP[$106 + $111 * 4];
      
      HEAP[$nlp] = $122;
      
      var $125 = $nlp + 4;
      $nlp = $125;
      __label__ = 30;
      break;
     case 30:
      
      
      var $128 = $xstep + $ix;
      $ix = $128;
      
      
      
      var $132 = $iy;
      if ($ix != HEAP[$newx2]) {
        __lastLabel__ = 30;
        __label__ = 18;
        break;
      } else {
        __lastLabel__ = 30;
        __label__ = 31;
        break;
      }
     case 31:
      var $_lcssa = __lastLabel__ == 17 ? $72 : $132;
      
      var $134 = $ystep + $_lcssa;
      $iy = $134;
      
      
      
      if ($iy != HEAP[$newy2]) {
        __label__ = 17;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      $0 = $rv;
      __label__ = 33;
      break;
     case 33:
      
      $retval = $0;
      var $retval51 = $retval;
      STACKTOP = __stackBase__;
      return $retval51;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_scale($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $cp = __stackBase__;
      var $ncp;
      var $nsp;
      var $nlp;
      var $len = __stackBase__ + 4;
      var $size = __stackBase__ + 8;
      var $x = __stackBase__ + 12;
      var $y = __stackBase__ + 16;
      var $newx = __stackBase__ + 20;
      var $newy = __stackBase__ + 24;
      var $nlen;
      var $ix;
      var $iy;
      var $oix;
      var $oiy;
      var $rv;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str9, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $size, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0, $newx, 0, 0, 0, $newy, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      
      
      
      
      
      
      
      
      if (HEAP[$size] != 1 & HEAP[$size] != 2 & HEAP[$size] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_ImageopError];
      _PyErr_SetString($10, __str6);
      $0 = 0;
      __label__ = 20;
      break;
     case 4:
      var $11 = HEAP[$size];
      var $12 = HEAP[$y];
      var $13 = HEAP[$x];
      var $14 = HEAP[$len];
      var $15 = _check_multiply_size($14, $13, __str2, $12, __str3, $11);
      
      if ($15 == 0) {
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
      
      
      
      
      
      $nlen = HEAP[$newy] * HEAP[$newx] * HEAP[$size];
      var $22 = HEAP[$size];
      var $23 = HEAP[$newy];
      var $24 = HEAP[$newx];
      
      var $26 = _check_multiply_size($nlen, $24, __str10, $23, __str11, $22);
      
      if ($26 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 20;
      break;
     case 8:
      
      var $29 = _PyString_FromStringAndSize(0, $nlen);
      $rv = $29;
      
      
      if ($rv == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 20;
      break;
     case 10:
      
      var $33 = _PyString_AsString($rv);
      $ncp = $33;
      
      
      $nsp = $ncp;
      
      
      $nlp = $ncp;
      $iy = 0;
      
      
      
      if ($iy < HEAP[$newy]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 11:
      $ix = 0;
      
      
      
      if ($ix < HEAP[$newx]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 12:
      
      
      
      
      
      $oix = $ix * HEAP[$x] / HEAP[$newx] | 0;
      
      
      
      
      
      $oiy = $iy * HEAP[$y] / HEAP[$newy] | 0;
      
      
      if (HEAP[$size] == 1) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      
      
      
      var $63 = HEAP[HEAP[$cp] + $oiy * HEAP[$x] + $oix];
      
      HEAP[$ncp] = $63;
      
      var $66 = $ncp + 1;
      $ncp = $66;
      __label__ = 17;
      break;
     case 14:
      
      
      var $69 = HEAP[$cp];
      
      
      
      
      var $74 = $oiy * HEAP[$x] + $oix;
      if (HEAP[$size] == 2) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      var $78 = HEAP[$69 + $74 * 2];
      
      HEAP[$nsp] = $78;
      
      var $81 = $nsp + 2;
      $nsp = $81;
      __label__ = 17;
      break;
     case 16:
      
      
      
      var $85 = HEAP[$69 + $74 * 4];
      
      HEAP[$nlp] = $85;
      
      var $88 = $nlp + 4;
      $nlp = $88;
      __label__ = 17;
      break;
     case 17:
      
      var $90 = $ix + 1;
      $ix = $90;
      
      
      
      if ($ix < HEAP[$newx]) {
        __label__ = 12;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 18:
      
      var $95 = $iy + 1;
      $iy = $95;
      
      
      
      if ($iy < HEAP[$newy]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      $0 = $rv;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval24 = $retval;
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_tovideo($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $maxx = __stackBase__;
      var $maxy = __stackBase__ + 4;
      var $x;
      var $y;
      var $len = __stackBase__ + 8;
      var $i;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $width = __stackBase__ + 16;
      var $rv;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str12, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $width, 0, 0, 0, $maxx, 0, 0, 0, $maxy, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      if (HEAP[$width] != 1 & HEAP[$width] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_ImageopError];
      _PyErr_SetString($8, __str13);
      $0 = 0;
      __label__ = 18;
      break;
     case 4:
      var $9 = HEAP[$width];
      var $10 = HEAP[$maxy];
      var $11 = HEAP[$maxx];
      var $12 = HEAP[$len];
      var $13 = _check_multiply_size($12, $11, __str14, $10, __str15, $9);
      
      if ($13 == 0) {
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
      var $15 = HEAP[$len];
      var $16 = _PyString_FromStringAndSize(0, $15);
      $rv = $16;
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 18;
      break;
     case 8:
      
      var $20 = _PyString_AsString($rv);
      $ncp = $20;
      
      
      var $23 = HEAP[$maxx];
      if (HEAP[$width] == 1) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      var $24 = HEAP[$cp];
      
      _llvm_memcpy_p0i8_p0i8_i32($ncp, $24, $23, 1, 0);
      
      
      var $28 = $ncp + HEAP[$maxx];
      $ncp = $28;
      $y = 1;
      
      
      
      if ($y < HEAP[$maxy]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 10:
      $x = 0;
      
      
      
      if ($x < HEAP[$maxx]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      
      
      
      $i = $y * HEAP[$maxx] + $x;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $54 = HEAP[HEAP[$cp] + ($i - HEAP[$maxx])] + HEAP[HEAP[$cp] + $i] >> 1 & 255;
      
      HEAP[$ncp] = $54;
      
      var $57 = $ncp + 1;
      $ncp = $57;
      
      var $59 = $x + 1;
      $x = $59;
      
      
      
      if ($x < HEAP[$maxx]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      var $64 = $y + 1;
      $y = $64;
      
      
      
      if ($y < HEAP[$maxy]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      var $68 = $23 * 4;
      var $69 = HEAP[$cp];
      
      _llvm_memcpy_p0i8_p0i8_i32($ncp, $69, $68, 1, 0);
      
      
      
      var $74 = $ncp + HEAP[$maxx] * 4;
      $ncp = $74;
      $y = 1;
      
      
      
      if ($y < HEAP[$maxy]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      $x = 0;
      
      
      
      if ($x < HEAP[$maxx]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      
      
      $i = ($y * HEAP[$maxx] + $x) * 4 + 1;
      
      HEAP[$ncp] = 0;
      
      var $90 = $ncp + 1;
      $ncp = $90;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $106 = HEAP[HEAP[$cp] + ($i - HEAP[$maxx] * 4)] + HEAP[HEAP[$cp] + $i] >> 1 & 255;
      
      HEAP[$ncp] = $106;
      
      var $109 = $ncp + 1;
      $ncp = $109;
      
      var $111 = $i + 1;
      $i = $111;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $127 = HEAP[HEAP[$cp] + ($i - HEAP[$maxx] * 4)] + HEAP[HEAP[$cp] + $i] >> 1 & 255;
      
      HEAP[$ncp] = $127;
      
      var $130 = $ncp + 1;
      $ncp = $130;
      
      var $132 = $i + 1;
      $i = $132;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      var $148 = HEAP[HEAP[$cp] + ($i - HEAP[$maxx] * 4)] + HEAP[HEAP[$cp] + $i] >> 1 & 255;
      
      HEAP[$ncp] = $148;
      
      var $151 = $ncp + 1;
      $ncp = $151;
      
      var $153 = $x + 1;
      $x = $153;
      
      
      
      if ($x < HEAP[$maxx]) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 16:
      
      var $158 = $y + 1;
      $y = $158;
      
      
      
      if ($y < HEAP[$maxy]) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      $0 = $rv;
      __label__ = 18;
      break;
     case 18:
      
      $retval = $0;
      var $retval24 = $retval;
      STACKTOP = __stackBase__;
      return $retval24;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_grey2mono($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $tres = __stackBase__;
      var $x = __stackBase__ + 4;
      var $y = __stackBase__ + 8;
      var $len = __stackBase__ + 12;
      var $cp = __stackBase__ + 16;
      var $ncp;
      var $ovalue;
      var $rv;
      var $i;
      var $bit;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str12, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0, $tres, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$y];
      var $5 = HEAP[$x];
      var $6 = HEAP[$len];
      var $7 = _check_multiply($6, $5, $4);
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 15;
      break;
     case 4:
      
      
      var $11 = (HEAP[$len] + 7) / 8 | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      $rv = $12;
      
      
      if ($rv == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 15;
      break;
     case 6:
      
      var $16 = _PyString_AsString($rv);
      $ncp = $16;
      $bit = 128;
      $ovalue = 0;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      if (HEAP[HEAP[$cp] + $i] > HEAP[$tres]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      var $30 = $bit & 255 | $ovalue;
      $ovalue = $30;
      __label__ = 9;
      break;
     case 9:
      
      var $32 = $bit >> 1;
      $bit = $32;
      
      if ($32 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      HEAP[$ncp] = $ovalue;
      
      var $37 = $ncp + 1;
      $ncp = $37;
      $bit = 128;
      $ovalue = 0;
      __label__ = 11;
      break;
     case 11:
      
      var $39 = $i + 1;
      $i = $39;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if ($bit != 128) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$ncp] = $ovalue;
      
      var $48 = $ncp + 1;
      $ncp = $48;
      __label__ = 14;
      break;
     case 14:
      
      $0 = $rv;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval16 = $retval;
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_grey2grey4($self, $args) {
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
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $ovalue;
      var $rv;
      var $i;
      var $pos;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 13;
      break;
     case 2:
      var $4 = HEAP[$y];
      var $5 = HEAP[$x];
      var $6 = HEAP[$len];
      var $7 = _check_multiply($6, $5, $4);
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      var $11 = (HEAP[$len] + 1) / 2 | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      $rv = $12;
      
      
      if ($rv == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 13;
      break;
     case 6:
      
      var $16 = _PyString_AsString($rv);
      $ncp = $16;
      $pos = 0;
      $ovalue = 0;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      var $30 = (HEAP[HEAP[$cp] + $i] & 240) >> $pos & 255 | $ovalue;
      $ovalue = $30;
      
      var $32 = $pos + 4;
      $pos = $32;
      
      if ($32 == 8) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$ncp] = $ovalue;
      
      var $37 = $ncp + 1;
      $ncp = $37;
      $ovalue = 0;
      $pos = 0;
      __label__ = 9;
      break;
     case 9:
      
      var $39 = $i + 1;
      $i = $39;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if ($pos != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      HEAP[$ncp] = $ovalue;
      
      var $48 = $ncp + 1;
      $ncp = $48;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $rv;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_grey2grey2($self, $args) {
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
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $ovalue;
      var $rv;
      var $i;
      var $pos;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 13;
      break;
     case 2:
      var $4 = HEAP[$y];
      var $5 = HEAP[$x];
      var $6 = HEAP[$len];
      var $7 = _check_multiply($6, $5, $4);
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      var $11 = (HEAP[$len] + 3) / 4 | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      $rv = $12;
      
      
      if ($rv == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 13;
      break;
     case 6:
      
      var $16 = _PyString_AsString($rv);
      $ncp = $16;
      $pos = 0;
      $ovalue = 0;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      
      
      
      
      
      
      
      var $30 = (HEAP[HEAP[$cp] + $i] & 192) >> $pos & 255 | $ovalue;
      $ovalue = $30;
      
      var $32 = $pos + 2;
      $pos = $32;
      
      if ($32 == 8) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$ncp] = $ovalue;
      
      var $37 = $ncp + 1;
      $ncp = $37;
      $ovalue = 0;
      $pos = 0;
      __label__ = 9;
      break;
     case 9:
      
      var $39 = $i + 1;
      $i = $39;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if ($pos != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      HEAP[$ncp] = $ovalue;
      
      var $48 = $ncp + 1;
      $ncp = $48;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $rv;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_dither2mono($self, $args) {
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
      var $sum;
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $ovalue;
      var $rv;
      var $i;
      var $bit;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$y];
      var $5 = HEAP[$x];
      var $6 = HEAP[$len];
      var $7 = _check_multiply($6, $5, $4);
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 15;
      break;
     case 4:
      
      
      var $11 = (HEAP[$len] + 7) / 8 | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      $rv = $12;
      
      
      if ($rv == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 15;
      break;
     case 6:
      
      var $16 = _PyString_AsString($rv);
      $ncp = $16;
      $bit = 128;
      $ovalue = 0;
      $sum = 0;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $26 = HEAP[HEAP[$cp] + $i] + $sum;
      $sum = $26;
      
      if ($26 > 255) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $29 = $sum - 256;
      $sum = $29;
      
      
      
      var $33 = $bit & 255 | $ovalue;
      $ovalue = $33;
      __label__ = 9;
      break;
     case 9:
      
      var $35 = $bit >> 1;
      $bit = $35;
      
      if ($35 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      HEAP[$ncp] = $ovalue;
      
      var $40 = $ncp + 1;
      $ncp = $40;
      $bit = 128;
      $ovalue = 0;
      __label__ = 11;
      break;
     case 11:
      
      var $42 = $i + 1;
      $i = $42;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      
      
      if ($bit != 128) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      HEAP[$ncp] = $ovalue;
      
      var $51 = $ncp + 1;
      $ncp = $51;
      __label__ = 14;
      break;
     case 14:
      
      $0 = $rv;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval16 = $retval;
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_dither2grey2($self, $args) {
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
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $ovalue;
      var $rv;
      var $i;
      var $pos;
      var $sum;
      var $nvalue;
      $self_addr = $self;
      $args_addr = $args;
      $sum = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 13;
      break;
     case 2:
      var $4 = HEAP[$y];
      var $5 = HEAP[$x];
      var $6 = HEAP[$len];
      var $7 = _check_multiply($6, $5, $4);
      
      if ($7 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 13;
      break;
     case 4:
      
      
      var $11 = (HEAP[$len] + 3) / 4 | 0;
      var $12 = _PyString_FromStringAndSize(0, $11);
      $rv = $12;
      
      
      if ($rv == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 13;
      break;
     case 6:
      
      var $16 = _PyString_AsString($rv);
      $ncp = $16;
      $pos = 1;
      $ovalue = 0;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      
      
      
      
      
      
      var $26 = HEAP[HEAP[$cp] + $i] + $sum;
      $sum = $26;
      
      
      $nvalue = $sum & 384;
      
      
      var $31 = $sum - $nvalue;
      $sum = $31;
      
      
      
      
      
      var $37 = $nvalue >> $pos & 255 | $ovalue;
      $ovalue = $37;
      
      var $39 = $pos + 2;
      $pos = $39;
      
      if ($39 == 9) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      HEAP[$ncp] = $ovalue;
      
      var $44 = $ncp + 1;
      $ncp = $44;
      $ovalue = 0;
      $pos = 1;
      __label__ = 9;
      break;
     case 9:
      
      var $46 = $i + 1;
      $i = $46;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      
      
      if ($pos != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      
      
      HEAP[$ncp] = $ovalue;
      
      var $55 = $ncp + 1;
      $ncp = $55;
      __label__ = 12;
      break;
     case 12:
      
      $0 = $rv;
      __label__ = 13;
      break;
     case 13:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_mono2grey($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $v0 = __stackBase__;
      var $v1 = __stackBase__ + 4;
      var $x = __stackBase__ + 8;
      var $y = __stackBase__ + 12;
      var $len = __stackBase__ + 16;
      var $nlen;
      var $cp = __stackBase__ + 20;
      var $ncp;
      var $rv;
      var $i;
      var $bit;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str17, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0, $v0, 0, 0, 0, $v1, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 16;
      break;
     case 2:
      
      
      
      $nlen = HEAP[$y] * HEAP[$x];
      var $7 = HEAP[$y];
      var $8 = HEAP[$x];
      
      var $10 = _check_multiply($nlen, $8, $7);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 16;
      break;
     case 4:
      
      
      
      
      
      if ((($nlen + 7) / 8 | 0) != HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_ImageopError];
      _PyErr_SetString($17, __str1);
      $0 = 0;
      __label__ = 16;
      break;
     case 6:
      
      var $19 = _PyString_FromStringAndSize(0, $nlen);
      $rv = $19;
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 16;
      break;
     case 8:
      
      var $23 = _PyString_AsString($rv);
      $ncp = $23;
      $bit = 128;
      $i = 0;
      
      
      
      if ($i < $nlen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      
      
      
      
      
      
      if ((HEAP[HEAP[$cp]] & $bit) != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $34 = HEAP[$v1] & 255;
      
      HEAP[$ncp] = $34;
      
      var $37 = $ncp + 1;
      $ncp = $37;
      __label__ = 12;
      break;
     case 11:
      
      var $39 = HEAP[$v0] & 255;
      
      HEAP[$ncp] = $39;
      
      var $42 = $ncp + 1;
      $ncp = $42;
      __label__ = 12;
      break;
     case 12:
      
      var $44 = $bit >> 1;
      $bit = $44;
      
      if ($44 == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $bit = 128;
      
      var $47 = HEAP[$cp] + 1;
      HEAP[$cp] = $47;
      __label__ = 14;
      break;
     case 14:
      
      var $49 = $i + 1;
      $i = $49;
      
      
      
      if ($i < $nlen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      $0 = $rv;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_grey22grey($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $nlen;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $rv;
      var $i;
      var $pos;
      var $value;
      var $nvalue;
      $self_addr = $self;
      $args_addr = $args;
      $value = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      $nlen = HEAP[$y] * HEAP[$x];
      var $7 = HEAP[$y];
      var $8 = HEAP[$x];
      
      var $10 = _check_multiply($nlen, $8, $7);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      
      
      
      if ((($nlen + 3) / 4 | 0) != HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_ImageopError];
      _PyErr_SetString($17, __str1);
      $0 = 0;
      __label__ = 14;
      break;
     case 6:
      
      var $19 = _PyString_FromStringAndSize(0, $nlen);
      $rv = $19;
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 14;
      break;
     case 8:
      
      var $23 = _PyString_AsString($rv);
      $ncp = $23;
      $pos = 0;
      $i = 0;
      
      
      
      if ($i < $nlen) {
        __lastLabel__ = 8;
        __label__ = 10;
        break;
      } else {
        __lastLabel__ = 8;
        __label__ = 13;
        break;
      }
     case 9:
      var $_pr = $pos;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $27 = __lastLabel__ == 9 ? $_pr : 0;
      
      if ($27 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $29 = HEAP[$cp];
      
      
      $value = HEAP[$29];
      var $32 = $29 + 1;
      HEAP[$cp] = $32;
      $pos = 8;
      __label__ = 12;
      break;
     case 12:
      
      var $34 = $pos - 2;
      $pos = $34;
      
      
      
      
      $nvalue = $value >> $pos & 3;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      HEAP[$ncp] = $nvalue << 2 & 255 | $nvalue & 255 | $nvalue << 4 & 255 | $nvalue << 6 & 255;
      
      var $55 = $ncp + 1;
      $ncp = $55;
      
      var $57 = $i + 1;
      $i = $57;
      
      
      
      if ($i < $nlen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $rv;
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
  function _imageop_grey42grey($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $nlen;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $rv;
      var $i;
      var $pos;
      var $value;
      var $nvalue;
      $self_addr = $self;
      $args_addr = $args;
      $value = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      $nlen = HEAP[$y] * HEAP[$x];
      var $7 = HEAP[$y];
      var $8 = HEAP[$x];
      
      var $10 = _check_multiply($nlen, $8, $7);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      
      
      
      if ((($nlen + 1) / 2 | 0) != HEAP[$len]) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_ImageopError];
      _PyErr_SetString($17, __str1);
      $0 = 0;
      __label__ = 14;
      break;
     case 6:
      
      var $19 = _PyString_FromStringAndSize(0, $nlen);
      $rv = $19;
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 14;
      break;
     case 8:
      
      var $23 = _PyString_AsString($rv);
      $ncp = $23;
      $pos = 0;
      $i = 0;
      
      
      
      if ($i < $nlen) {
        __lastLabel__ = 8;
        __label__ = 10;
        break;
      } else {
        __lastLabel__ = 8;
        __label__ = 13;
        break;
      }
     case 9:
      var $_pr = $pos;
      __lastLabel__ = 9;
      __label__ = 10;
      break;
     case 10:
      var $27 = __lastLabel__ == 9 ? $_pr : 0;
      
      if ($27 == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $29 = HEAP[$cp];
      
      
      $value = HEAP[$29];
      var $32 = $29 + 1;
      HEAP[$cp] = $32;
      $pos = 8;
      __label__ = 12;
      break;
     case 12:
      
      var $34 = $pos - 4;
      $pos = $34;
      
      
      
      
      $nvalue = $value >> $pos & 15;
      
      
      
      
      
      
      
      HEAP[$ncp] = $nvalue << 4 & 255 | $nvalue & 255;
      
      var $47 = $ncp + 1;
      $ncp = $47;
      
      var $49 = $i + 1;
      $i = $49;
      
      
      
      if ($i < $nlen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $rv;
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
  function _imageop_rgb2rgb8($self, $args) {
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
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $nlen;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $rv;
      var $i;
      var $r;
      var $g;
      var $b;
      var $backward_compatible;
      var $value;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = _imageop_backward_compatible();
      $backward_compatible = $1;
      
      var $3 = _PyArg_ParseTuple($args_addr, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$y];
      var $6 = HEAP[$x];
      var $7 = HEAP[$len];
      var $8 = _check_multiply_size($7, $6, __str2, $5, __str3, 4);
      
      if ($8 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      
      $nlen = HEAP[$y] * HEAP[$x];
      var $13 = HEAP[$y];
      var $14 = HEAP[$x];
      
      var $16 = _check_multiply($nlen, $14, $13);
      
      if ($16 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 14;
      break;
     case 6:
      
      var $19 = _PyString_FromStringAndSize(0, $nlen);
      $rv = $19;
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 14;
      break;
     case 8:
      
      var $23 = _PyString_AsString($rv);
      $ncp = $23;
      $i = 0;
      
      
      
      if ($i < $nlen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      var $29 = HEAP[$cp];
      if ($backward_compatible != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      $value = HEAP[$29];
      
      var $33 = HEAP[$cp] + 4;
      HEAP[$cp] = $33;
      
      
      
      
      
      
      
      $r = ($value & 255) / 255 * 7 + .5 | 0;
      
      
      
      
      
      
      
      
      $g = ($value >>> 8 & 255) / 255 * 7 + .5 | 0;
      
      
      
      
      
      
      
      
      $b = ($value >>> 16 & 255) / 255 * 3 + .5 | 0;
      __label__ = 12;
      break;
     case 11:
      var $57 = $29 + 1;
      HEAP[$cp] = $57;
      var $58 = HEAP[$cp];
      
      
      
      
      
      
      
      $b = HEAP[$58] / 255 * 3 + .5 | 0;
      var $66 = $58 + 1;
      HEAP[$cp] = $66;
      var $67 = HEAP[$cp];
      
      
      
      
      
      
      
      $g = HEAP[$67] / 255 * 7 + .5 | 0;
      var $75 = $67 + 1;
      HEAP[$cp] = $75;
      var $76 = HEAP[$cp];
      
      
      
      
      
      
      
      $r = HEAP[$76] / 255 * 7 + .5 | 0;
      var $84 = $76 + 1;
      HEAP[$cp] = $84;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      HEAP[$ncp] = $g & 255 | $r << 5 & 255 | $b << 3 & 255;
      
      var $97 = $ncp + 1;
      $ncp = $97;
      
      var $99 = $i + 1;
      $i = $99;
      
      
      
      if ($i < $nlen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $rv;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_rgb82rgb($self, $args) {
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
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $nlen;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $rv;
      var $i;
      var $r;
      var $g;
      var $b;
      var $value;
      var $backward_compatible;
      var $nvalue;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = _imageop_backward_compatible();
      $backward_compatible = $1;
      
      var $3 = _PyArg_ParseTuple($args_addr, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$y];
      var $6 = HEAP[$x];
      var $7 = HEAP[$len];
      var $8 = _check_multiply($7, $6, $5);
      
      if ($8 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      
      
      $nlen = HEAP[$x] * 4 * HEAP[$y];
      var $14 = HEAP[$y];
      var $15 = HEAP[$x];
      
      var $17 = _check_multiply_size($nlen, $15, __str2, $14, __str3, 4);
      
      if ($17 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 14;
      break;
     case 6:
      
      var $20 = _PyString_FromStringAndSize(0, $nlen);
      $rv = $20;
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 14;
      break;
     case 8:
      
      var $24 = _PyString_AsString($rv);
      $ncp = $24;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      var $28 = HEAP[$cp];
      
      $value = HEAP[$28];
      var $30 = $28 + 1;
      HEAP[$cp] = $30;
      
      
      
      
      $r = $value >>> 5 & 7;
      
      
      
      $g = $value & 7;
      
      
      
      
      $b = $value >>> 3 & 3;
      
      
      
      
      
      
      
      var $49 = $r << 3 | $r << 5 | $r >> 1;
      $r = $49;
      
      
      
      
      
      
      
      var $57 = $g << 3 | $g << 5 | $g >> 1;
      $g = $57;
      
      
      
      
      
      
      
      
      
      var $67 = $b << 4 | $b << 6 | $b | $b << 2;
      $b = $67;
      
      
      if ($backward_compatible != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      $nvalue = $g << 8 | $r | $b << 16;
      
      
      
      HEAP[$ncp] = $nvalue;
      
      var $81 = $ncp + 4;
      $ncp = $81;
      __label__ = 12;
      break;
     case 11:
      
      HEAP[$ncp] = 0;
      
      var $84 = $ncp + 1;
      $ncp = $84;
      
      
      
      HEAP[$ncp] = $b & 255;
      
      var $89 = $ncp + 1;
      $ncp = $89;
      
      
      
      HEAP[$ncp] = $g & 255;
      
      var $94 = $ncp + 1;
      $ncp = $94;
      
      
      
      HEAP[$ncp] = $r & 255;
      
      var $99 = $ncp + 1;
      $ncp = $99;
      __label__ = 12;
      break;
     case 12:
      
      var $101 = $i + 1;
      $i = $101;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $rv;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_rgb2grey($self, $args) {
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
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $nlen;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $rv;
      var $i;
      var $r;
      var $g;
      var $b;
      var $nvalue;
      var $backward_compatible;
      var $value;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = _imageop_backward_compatible();
      $backward_compatible = $1;
      
      var $3 = _PyArg_ParseTuple($args_addr, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 16;
      break;
     case 2:
      var $5 = HEAP[$y];
      var $6 = HEAP[$x];
      var $7 = HEAP[$len];
      var $8 = _check_multiply_size($7, $6, __str2, $5, __str3, 4);
      
      if ($8 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 16;
      break;
     case 4:
      
      
      
      $nlen = HEAP[$y] * HEAP[$x];
      var $13 = HEAP[$y];
      var $14 = HEAP[$x];
      
      var $16 = _check_multiply($nlen, $14, $13);
      
      if ($16 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 16;
      break;
     case 6:
      
      var $19 = _PyString_FromStringAndSize(0, $nlen);
      $rv = $19;
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 16;
      break;
     case 8:
      
      var $23 = _PyString_AsString($rv);
      $ncp = $23;
      $i = 0;
      
      
      
      if ($i < $nlen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      
      
      var $29 = HEAP[$cp];
      if ($backward_compatible != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      $value = HEAP[$29];
      
      var $33 = HEAP[$cp] + 4;
      HEAP[$cp] = $33;
      
      
      
      
      
      
      
      $r = ($value & 255) / 255 * 7 + .5 | 0;
      
      
      
      
      
      
      
      
      $g = ($value >>> 8 & 255) / 255 * 7 + .5 | 0;
      
      
      
      
      
      
      
      
      $b = ($value >>> 16 & 255) / 255 * 3 + .5 | 0;
      __label__ = 12;
      break;
     case 11:
      var $57 = $29 + 1;
      HEAP[$cp] = $57;
      var $58 = HEAP[$cp];
      
      
      $b = HEAP[$58];
      var $61 = $58 + 1;
      HEAP[$cp] = $61;
      var $62 = HEAP[$cp];
      
      
      $g = HEAP[$62];
      var $65 = $62 + 1;
      HEAP[$cp] = $65;
      var $66 = HEAP[$cp];
      
      
      $r = HEAP[$66];
      var $69 = $66 + 1;
      HEAP[$cp] = $69;
      __label__ = 12;
      break;
     case 12:
      
      
      
      
      
      
      
      
      
      
      
      
      $nvalue = $r * .3 + $g * .59 + $b * .11 | 0;
      
      if (($r * .3 + $g * .59 + $b * .11 | 0) > 255) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      $nvalue = 255;
      __label__ = 14;
      break;
     case 14:
      
      
      
      HEAP[$ncp] = $nvalue & 255;
      
      var $87 = $ncp + 1;
      $ncp = $87;
      
      var $89 = $i + 1;
      $i = $89;
      
      
      
      if ($i < $nlen) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 15:
      
      $0 = $rv;
      __label__ = 16;
      break;
     case 16:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _imageop_grey2rgb($self, $args) {
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
      var $x = __stackBase__;
      var $y = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $nlen;
      var $cp = __stackBase__ + 12;
      var $ncp;
      var $rv;
      var $i;
      var $value;
      var $backward_compatible;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = _imageop_backward_compatible();
      $backward_compatible = $1;
      
      var $3 = _PyArg_ParseTuple($args_addr, __str16, allocate([ $cp, 0, 0, 0, $len, 0, 0, 0, $x, 0, 0, 0, $y, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      var $5 = HEAP[$y];
      var $6 = HEAP[$x];
      var $7 = HEAP[$len];
      var $8 = _check_multiply($7, $6, $5);
      
      if ($8 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 14;
      break;
     case 4:
      
      
      
      
      $nlen = HEAP[$x] * 4 * HEAP[$y];
      var $14 = HEAP[$y];
      var $15 = HEAP[$x];
      
      var $17 = _check_multiply_size($nlen, $15, __str2, $14, __str3, 4);
      
      if ($17 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 14;
      break;
     case 6:
      
      var $20 = _PyString_FromStringAndSize(0, $nlen);
      $rv = $20;
      
      
      if ($rv == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      $0 = 0;
      __label__ = 14;
      break;
     case 8:
      
      var $24 = _PyString_AsString($rv);
      $ncp = $24;
      $i = 0;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      var $28 = HEAP[$cp];
      
      $value = HEAP[$28];
      var $30 = $28 + 1;
      HEAP[$cp] = $30;
      
      
      var $33 = $ncp;
      if ($backward_compatible != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      
      
      
      
      
      
      
      
      HEAP[$33] = $value << 8 | $value | $value << 16;
      
      var $46 = $ncp + 4;
      $ncp = $46;
      __label__ = 12;
      break;
     case 11:
      HEAP[$33] = 0;
      
      var $48 = $ncp + 1;
      $ncp = $48;
      
      
      HEAP[$ncp] = $value;
      
      var $52 = $ncp + 1;
      $ncp = $52;
      
      
      HEAP[$ncp] = $value;
      
      var $56 = $ncp + 1;
      $ncp = $56;
      
      
      HEAP[$ncp] = $value;
      
      var $60 = $ncp + 1;
      $ncp = $60;
      __label__ = 12;
      break;
     case 12:
      
      var $62 = $i + 1;
      $i = $62;
      
      
      
      if ($i < HEAP[$len]) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 13:
      
      $0 = $rv;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initimageop() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      
      
      if (HEAP[_Py_Py3kWarningFlag] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $2 = HEAP[_PyExc_DeprecationWarning];
      var $3 = _PyErr_WarnEx($2, __str33, 2);
      
      if ($3 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = _Py_InitModule4(__str34, _imageop_methods, 0, 0, 1013);
      $m = $5;
      
      if ($5 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      var $8 = _PyModule_GetDict($m);
      HEAP[_ImageopDict] = $8;
      var $9 = _PyErr_NewException(__str35, 0, 0);
      HEAP[_ImageopError] = $9;
      
      
      if (HEAP[_ImageopError] != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $12 = HEAP[_ImageopError];
      var $13 = HEAP[_ImageopDict];
      var $14 = _PyDict_SetItemString($13, __str36, $12);
      __label__ = 5;
      break;
     case 5:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initimageop"] = _initimageop;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _imageop_crop, 0, _imageop_scale, 0, _imageop_grey2mono, 0, _imageop_grey2grey2, 0, _imageop_grey2grey4, 0, _imageop_dither2mono, 0, _imageop_dither2grey2, 0, _imageop_mono2grey, 0, _imageop_grey22grey, 0, _imageop_grey42grey, 0, _imageop_tovideo, 0, _imageop_rgb2rgb8, 0, _imageop_rgb82rgb, 0, _imageop_rgb2grey, 0, _imageop_grey2rgb, 0 ]);
  function run(args) {
    __str = allocate([ 37, 115, 32, 118, 97, 108, 117, 101, 32, 105, 115, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 111, 114, 32, 110, 117, 108, 0 ], "i8", ALLOC_NORMAL);
    _ImageopError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str1 = allocate([ 83, 116, 114, 105, 110, 103, 32, 104, 97, 115, 32, 105, 110, 99, 111, 114, 114, 101, 99, 116, 32, 108, 101, 110, 103, 116, 104, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 120, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 121, 0 ], "i8", ALLOC_NORMAL);
    _ImageopDict = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _bcos_8350 = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str4 = allocate([ 98, 97, 99, 107, 119, 97, 114, 100, 95, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 115, 35, 105, 105, 105, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 83, 105, 122, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 49, 44, 32, 50, 32, 111, 114, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 97, 98, 115, 40, 110, 101, 119, 120, 50, 45, 110, 101, 119, 120, 49, 41, 43, 49, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 97, 98, 115, 40, 110, 101, 119, 121, 50, 45, 110, 101, 119, 121, 49, 41, 43, 49, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 115, 35, 105, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 110, 101, 119, 120, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 110, 101, 119, 121, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 115, 35, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 83, 105, 122, 101, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 49, 32, 111, 114, 32, 52, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 109, 97, 120, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 109, 97, 120, 121, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 115, 35, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 115, 35, 105, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 99, 114, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 115, 99, 97, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 103, 114, 101, 121, 50, 109, 111, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 103, 114, 101, 121, 50, 103, 114, 101, 121, 50, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 103, 114, 101, 121, 50, 103, 114, 101, 121, 52, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 100, 105, 116, 104, 101, 114, 50, 109, 111, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 100, 105, 116, 104, 101, 114, 50, 103, 114, 101, 121, 50, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 109, 111, 110, 111, 50, 103, 114, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 103, 114, 101, 121, 50, 50, 103, 114, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 103, 114, 101, 121, 52, 50, 103, 114, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 116, 111, 118, 105, 100, 101, 111, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 114, 103, 98, 50, 114, 103, 98, 56, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 114, 103, 98, 56, 50, 114, 103, 98, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 114, 103, 98, 50, 103, 114, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 103, 114, 101, 121, 50, 114, 103, 98, 0 ], "i8", ALLOC_NORMAL);
    _imageop_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8", "i8", "i8", "i8", "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str33 = allocate([ 116, 104, 101, 32, 105, 109, 97, 103, 101, 111, 112, 32, 109, 111, 100, 117, 108, 101, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 114, 101, 109, 111, 118, 101, 100, 32, 105, 110, 32, 80, 121, 116, 104, 111, 110, 32, 51, 46, 48, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 105, 109, 97, 103, 101, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str35 = allocate([ 105, 109, 97, 103, 101, 111, 112, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_imageop_methods] = __str18;
    HEAP[_imageop_methods + 4] = FUNCTION_TABLE_OFFSET + 2;
    HEAP[_imageop_methods + 16] = __str19;
    HEAP[_imageop_methods + 20] = FUNCTION_TABLE_OFFSET + 4;
    HEAP[_imageop_methods + 32] = __str20;
    HEAP[_imageop_methods + 36] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_imageop_methods + 48] = __str21;
    HEAP[_imageop_methods + 52] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_imageop_methods + 64] = __str22;
    HEAP[_imageop_methods + 68] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_imageop_methods + 80] = __str23;
    HEAP[_imageop_methods + 84] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_imageop_methods + 96] = __str24;
    HEAP[_imageop_methods + 100] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_imageop_methods + 112] = __str25;
    HEAP[_imageop_methods + 116] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_imageop_methods + 128] = __str26;
    HEAP[_imageop_methods + 132] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_imageop_methods + 144] = __str27;
    HEAP[_imageop_methods + 148] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_imageop_methods + 160] = __str28;
    HEAP[_imageop_methods + 164] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_imageop_methods + 176] = __str29;
    HEAP[_imageop_methods + 180] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_imageop_methods + 192] = __str30;
    HEAP[_imageop_methods + 196] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_imageop_methods + 208] = __str31;
    HEAP[_imageop_methods + 212] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_imageop_methods + 224] = __str32;
    HEAP[_imageop_methods + 228] = FUNCTION_TABLE_OFFSET + 30;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
