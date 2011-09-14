"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 80;
  var $1___SIZE = 16;
  var $struct_AUTH___SIZE = 40;
  var $struct_AUTH___FLATTENER = [ 0, 12, 24, 32, 36 ];
  var $struct_CLIENT___SIZE = 12;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyInterpreterState___SIZE = 40;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 0;
  var $struct_PyMemberDef___FLATTENER = [];
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PyThreadState___SIZE = 84;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct_XDR___SIZE = 24;
  var $struct__IO_marker___SIZE = 12;
  var $struct__frame___SIZE = 0;
  var $struct__frame___FLATTENER = [];
  var $struct__typeobject___SIZE = 196;
  var $struct_anon___SIZE = 8;
  var $struct_auth_ops___SIZE = 20;
  var $struct_clnt_ops___SIZE = 24;
  var $struct_nis_map___SIZE = 12;
  var $struct_nismaplist___SIZE = 8;
  var $struct_nisresp_maplist___SIZE = 8;
  var $struct_opaque_auth___SIZE = 12;
  var $struct_rpc_err___SIZE = 12;
  var $struct_xdr_ops___SIZE = 40;
  var $struct_ypall_callback___SIZE = 8;
  var $struct_ypcallback_data___SIZE = 12;
  var $union_anon___SIZE = 8;
  var _get_default_domain__doc__;
  var _match__doc__;
  var _cat__doc__;
  var _maps__doc__;
  var _NisError;
  var _aliases;
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
  var __str15;
  var __str16;
  var _kwlist_9940;
  var __str17;
  var __str18;
  var __str19;
  var __str20;
  var _kwlist_9988;
  var _res_10110;
  var __str21;
  var __str22;
  var __str23;
  var _kwlist_10170;
  var __str24;
  var __str25;
  var __str26;
  var __str27;
  var _nis_methods;
  var _nis__doc__;
  var __str28;
  var __str29;
  var __str30;
  function _nis_error($err) {
    
    var $err_addr;
    var $retval;
    var $0;
    $err_addr = $err;
    
    var $2 = _yperr_string($err_addr);
    var $3 = HEAP[_NisError];
    _PyErr_SetString($3, $2);
    $0 = 0;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _nis_mapname($map, $pfix) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $map_addr;
      var $pfix_addr;
      var $retval;
      var $0;
      var $i;
      $map_addr = $map;
      $pfix_addr = $pfix;
      
      HEAP[$pfix_addr] = 0;
      $i = 0;
      __label__ = 6;
      break;
     case 1:
      
      
      
      var $5 = HEAP[_aliases + $i * 12];
      
      var $7 = _strcmp($5, $map_addr);
      
      
      var $10 = _aliases + $i * 12;
      if ($7 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      var $12 = HEAP[$10 + 8];
      
      HEAP[$pfix_addr] = $12;
      
      
      
      
      $0 = HEAP[_aliases + $i * 12 + 4];
      __label__ = 8;
      break;
     case 3:
      
      var $19 = HEAP[$10 + 4];
      
      var $21 = _strcmp($19, $map_addr);
      
      var $23 = $i;
      if ($21 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $26 = HEAP[_aliases + $23 * 12 + 8];
      
      HEAP[$pfix_addr] = $26;
      
      
      
      
      $0 = HEAP[_aliases + $i * 12 + 4];
      __label__ = 8;
      break;
     case 5:
      var $32 = $23 + 1;
      $i = $32;
      __label__ = 6;
      break;
     case 6:
      
      
      
      
      
      if (HEAP[_aliases + $i * 12] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      $0 = $map_addr;
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
  function _nis_foreach($instatus, $inkey, $inkeylen, $inval, $invallen, $indata) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $instatus_addr;
      var $inkey_addr;
      var $inkeylen_addr;
      var $inval_addr;
      var $invallen_addr;
      var $indata_addr;
      var $retval;
      var $0;
      var $key;
      var $val;
      var $err;
      $instatus_addr = $instatus;
      $inkey_addr = $inkey;
      $inkeylen_addr = $inkeylen;
      $inval_addr = $inval;
      $invallen_addr = $invallen;
      $indata_addr = $indata;
      
      
      if ($instatus_addr == 1) {
        __label__ = 1;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 1:
      
      
      var $5 = HEAP[$indata_addr + 8];
      _PyEval_RestoreThread($5);
      
      
      
      
      if (HEAP[$indata_addr + 4] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 2:
      
      
      if ($inkeylen_addr > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      
      
      
      
      if (HEAP[$inkey_addr + ($inkeylen_addr - 1)] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $19 = $inkeylen_addr - 1;
      $inkeylen_addr = $19;
      __label__ = 5;
      break;
     case 5:
      
      
      if ($invallen_addr > 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      
      
      
      
      if (HEAP[$inval_addr + ($invallen_addr - 1)] == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $29 = $invallen_addr - 1;
      $invallen_addr = $29;
      __label__ = 8;
      break;
     case 8:
      
      
      var $32 = _PyString_FromStringAndSize($inkey_addr, $inkeylen_addr);
      $key = $32;
      
      
      var $35 = _PyString_FromStringAndSize($inval_addr, $invallen_addr);
      $val = $35;
      
      
      if ($key == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      if ($val == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 10:
      _PyErr_Clear();
      
      
      if ($key != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      
      
      var $45 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $45;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $56 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$56]($key);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($val != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      var $63 = HEAP[$val] - 1;
      
      
      HEAP[$val] = $63;
      
      
      
      
      if (HEAP[$val] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $74 = HEAP[HEAP[$val + 4] + 24];
      
      FUNCTION_TABLE[$74]($val);
      __label__ = 16;
      break;
     case 16:
      var $76 = _PyEval_SaveThread();
      
      
      HEAP[$indata_addr + 8] = $76;
      $0 = 1;
      __label__ = 27;
      break;
     case 17:
      
      
      var $81 = HEAP[$indata_addr];
      
      
      var $84 = _PyDict_SetItem($81, $key, $val);
      $err = $84;
      
      
      
      var $88 = HEAP[$key] - 1;
      
      
      HEAP[$key] = $88;
      
      
      
      
      if (HEAP[$key] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      var $99 = HEAP[HEAP[$key + 4] + 24];
      
      FUNCTION_TABLE[$99]($key);
      __label__ = 19;
      break;
     case 19:
      
      
      
      var $104 = HEAP[$val] - 1;
      
      
      HEAP[$val] = $104;
      
      
      
      
      if (HEAP[$val] == 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      
      
      var $115 = HEAP[HEAP[$val + 4] + 24];
      
      FUNCTION_TABLE[$115]($val);
      __label__ = 21;
      break;
     case 21:
      
      
      if ($err != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      _PyErr_Clear();
      __label__ = 23;
      break;
     case 23:
      var $119 = _PyEval_SaveThread();
      
      
      HEAP[$indata_addr + 8] = $119;
      
      
      if ($err != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      $0 = 1;
      __label__ = 27;
      break;
     case 25:
      $0 = 0;
      __label__ = 27;
      break;
     case 26:
      $0 = 1;
      __label__ = 27;
      break;
     case 27:
      
      $retval = $0;
      var $retval27 = $retval;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nis_get_default_domain($self) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      var $domain = __stackBase__;
      var $err;
      var $res;
      $self_addr = $self;
      var $1 = _yp_get_default_domain($domain);
      $err = $1;
      
      
      if ($err != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $5 = _nis_error($err);
      $0 = $5;
      __label__ = 3;
      break;
     case 2:
      var $6 = HEAP[$domain];
      var $7 = _strlen($6);
      var $8 = HEAP[$domain];
      var $9 = _PyString_FromStringAndSize($8, $7);
      $res = $9;
      
      $0 = $res;
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
  function _nis_match($self, $args, $kwdict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    _memset(__stackBase__, 0, 28);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwdict_addr;
      var $retval;
      var $0;
      var $match = __stackBase__;
      var $domain = __stackBase__ + 4;
      var $keylen = __stackBase__ + 8;
      var $len = __stackBase__ + 12;
      var $key = __stackBase__ + 16;
      var $map = __stackBase__ + 20;
      var $err;
      var $res;
      var $fix = __stackBase__ + 24;
      $self_addr = $self;
      $args_addr = $args;
      $kwdict_addr = $kwdict;
      HEAP[$domain] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwdict_addr, __str16, _kwlist_9940, allocate([ $key, 0, 0, 0, $keylen, 0, 0, 0, $map, 0, 0, 0, $domain, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 12;
      break;
     case 2:
      
      
      if (HEAP[$domain] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $7 = _yp_get_default_domain($domain);
      $err = $7;
      
      
      if ($err != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $11 = _nis_error($err);
      $0 = $11;
      __label__ = 12;
      break;
     case 5:
      var $12 = HEAP[$map];
      var $13 = _nis_mapname($12, $fix);
      HEAP[$map] = $13;
      
      
      if (HEAP[$fix] != 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      
      var $17 = HEAP[$keylen] + 1;
      HEAP[$keylen] = $17;
      __label__ = 7;
      break;
     case 7:
      var $18 = HEAP[$keylen];
      var $19 = HEAP[$key];
      var $20 = HEAP[$map];
      var $21 = HEAP[$domain];
      var $22 = _yp_match($21, $20, $19, $18, $match, $len);
      $err = $22;
      
      
      if (HEAP[$fix] != 0) {
        __lastLabel__ = 7;
        __label__ = 8;
        break;
      } else {
        __lastLabel__ = 7;
        __label__ = 9;
        break;
      }
     case 8:
      
      var $26 = HEAP[$len] - 1;
      HEAP[$len] = $26;
      var $_pr = $err;
      __lastLabel__ = 8;
      __label__ = 9;
      break;
     case 9:
      var $27 = __lastLabel__ == 8 ? $_pr : $22;
      
      if ($27 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $30 = _nis_error($err);
      $0 = $30;
      __label__ = 12;
      break;
     case 11:
      var $31 = HEAP[$len];
      var $32 = HEAP[$match];
      var $33 = _PyString_FromStringAndSize($32, $31);
      $res = $33;
      var $34 = HEAP[$match];
      _free($34);
      
      $0 = $res;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nis_cat($self, $args, $kwdict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 28;
    _memset(__stackBase__, 0, 28);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwdict_addr;
      var $retval;
      var $0;
      var $domain = __stackBase__;
      var $map = __stackBase__ + 4;
      var $cb = __stackBase__ + 8;
      var $data = __stackBase__ + 16;
      var $dict;
      var $err;
      $self_addr = $self;
      $args_addr = $args;
      $kwdict_addr = $kwdict;
      HEAP[$domain] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwdict_addr, __str20, _kwlist_9988, allocate([ $map, 0, 0, 0, $domain, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 12;
      break;
     case 2:
      
      
      if (HEAP[$domain] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $7 = _yp_get_default_domain($domain);
      $err = $7;
      
      
      if ($err != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $11 = _nis_error($err);
      $0 = $11;
      __label__ = 12;
      break;
     case 5:
      var $12 = _PyDict_New();
      $dict = $12;
      
      if ($12 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 12;
      break;
     case 7:
      
      HEAP[$cb] = FUNCTION_TABLE_OFFSET + 2;
      
      
      HEAP[$data] = $dict;
      var $17 = HEAP[$map];
      var $18 = $data + 4;
      var $19 = _nis_mapname($17, $18);
      HEAP[$map] = $19;
      
      
      HEAP[$cb + 4] = $data;
      var $21 = _PyEval_SaveThread();
      
      HEAP[$data + 8] = $21;
      var $23 = HEAP[$map];
      var $24 = HEAP[$domain];
      var $25 = _yp_all($24, $23, $cb);
      $err = $25;
      
      var $27 = HEAP[$data + 8];
      _PyEval_RestoreThread($27);
      
      
      var $30 = $dict;
      if ($err != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      
      
      var $33 = HEAP[$30] - 1;
      
      
      HEAP[$dict] = $33;
      
      
      
      
      if (HEAP[$dict] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      
      
      
      var $44 = HEAP[HEAP[$dict + 4] + 24];
      
      FUNCTION_TABLE[$44]($dict);
      __label__ = 10;
      break;
     case 10:
      
      var $47 = _nis_error($err);
      $0 = $47;
      __label__ = 12;
      break;
     case 11:
      $0 = $30;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nis_xdr_domainname($xdrs, $objp) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xdrs_addr;
      var $objp_addr;
      var $retval;
      var $0;
      $xdrs_addr = $xdrs;
      $objp_addr = $objp;
      
      
      var $3 = _xdr_string($xdrs_addr, $objp_addr, 64);
      
      if ($3 == 0) {
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
      $0 = 1;
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
  function _nis_xdr_mapname($xdrs, $objp) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xdrs_addr;
      var $objp_addr;
      var $retval;
      var $0;
      $xdrs_addr = $xdrs;
      $objp_addr = $objp;
      
      
      var $3 = _xdr_string($xdrs_addr, $objp_addr, 64);
      
      if ($3 == 0) {
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
      $0 = 1;
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
  function _nis_xdr_ypmaplist($xdrs, $objp) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xdrs_addr;
      var $objp_addr;
      var $retval;
      var $0;
      $xdrs_addr = $xdrs;
      $objp_addr = $objp;
      
      
      
      var $4 = _nis_xdr_mapname($xdrs_addr, $objp_addr);
      
      if ($4 == 0) {
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
      
      
      
      
      var $10 = _xdr_pointer($xdrs_addr, $objp_addr + 4, 8, FUNCTION_TABLE_OFFSET + 4);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      $0 = 1;
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
  function _nis_xdr_ypstat($xdrs, $objp) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xdrs_addr;
      var $objp_addr;
      var $retval;
      var $0;
      $xdrs_addr = $xdrs;
      $objp_addr = $objp;
      
      
      var $3 = _xdr_enum($xdrs_addr, $objp_addr);
      
      if ($3 == 0) {
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
      $0 = 1;
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
  function _nis_xdr_ypresp_maplist($xdrs, $objp) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $xdrs_addr;
      var $objp_addr;
      var $retval;
      var $0;
      $xdrs_addr = $xdrs;
      $objp_addr = $objp;
      
      
      
      var $4 = _nis_xdr_ypstat($xdrs_addr, $objp_addr);
      
      if ($4 == 0) {
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
      
      
      
      
      var $10 = _xdr_pointer($xdrs_addr, $objp_addr + 4, 8, FUNCTION_TABLE_OFFSET + 4);
      
      if ($10 == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      $0 = 1;
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
  function _nisproc_maplist_2($argp, $clnt) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $argp_addr;
      var $clnt_addr;
      var $retval;
      var $0;
      $argp_addr = $argp;
      $clnt_addr = $clnt;
      _llvm_memset_p0i8_i32(_res_10110, 0, 8, 1, 0);
      
      
      
      
      var $5 = HEAP[HEAP[$clnt_addr + 4]];
      
      
      
      var $9 = FUNCTION_TABLE[$5]($clnt_addr, 11, FUNCTION_TABLE_OFFSET + 6, $argp_addr, FUNCTION_TABLE_OFFSET + 8, _res_10110, 25, 0);
      
      if ($9 != 0) {
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
      $0 = _res_10110;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval4 = $retval;
      return $retval4;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _nis_maplist($dom) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $dom_addr = __stackBase__;
      var $retval;
      var $0;
      var $list;
      var $cl;
      var $server = __stackBase__ + 4;
      var $mapi;
      HEAP[$dom_addr] = $dom;
      HEAP[$server] = 0;
      $mapi = 0;
      __lastLabel__ = -1;
      __label__ = 2;
      break;
     case 1:
      
      
      
      var $4 = HEAP[_aliases + $mapi * 12 + 4];
      var $5 = HEAP[$dom_addr];
      var $6 = _yp_master($5, $4, $server);
      
      var $8 = $mapi + 1;
      $mapi = $8;
      var $_pr = HEAP[$server];
      __lastLabel__ = 1;
      __label__ = 2;
      break;
     case 2:
      var $9 = __lastLabel__ == 1 ? $_pr : 0;
      
      if ($9 != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      
      
      
      if (HEAP[_aliases + $mapi * 12 + 4] != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      if (HEAP[$server] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $18 = HEAP[_NisError];
      _PyErr_SetString($18, __str21);
      $0 = 0;
      __label__ = 12;
      break;
     case 6:
      var $19 = HEAP[$server];
      var $20 = _clnt_create($19, 100004, 2, __str22);
      $cl = $20;
      
      
      if ($cl == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $23 = HEAP[$server];
      var $24 = _clnt_spcreateerror($23);
      var $25 = HEAP[_NisError];
      _PyErr_SetString($25, $24);
      __label__ = 11;
      break;
     case 8:
      
      var $27 = _nisproc_maplist_2($dom_addr, $cl);
      $list = $27;
      
      
      
      
      var $32 = HEAP[HEAP[$cl + 4] + 16];
      
      FUNCTION_TABLE[$32]($cl);
      
      
      if ($list == 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      
      
      
      if (HEAP[$list] != 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $40 = HEAP[$server];
      _free($40);
      
      
      
      $0 = HEAP[$list + 4];
      __label__ = 12;
      break;
     case 11:
      var $44 = HEAP[$server];
      _free($44);
      $0 = 0;
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
  function _nis_maps($self, $args, $kwdict) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwdict_addr;
      var $retval;
      var $0;
      var $domain = __stackBase__;
      var $maps;
      var $list;
      var $err;
      var $str;
      $self_addr = $self;
      $args_addr = $args;
      $kwdict_addr = $kwdict;
      HEAP[$domain] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwdict_addr, __str23, _kwlist_10170, allocate([ $domain, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$domain] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $7 = _yp_get_default_domain($domain);
      $err = $7;
      
      
      if ($err != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      var $11 = _nis_error($err);
      $0 = 0;
      __label__ = 20;
      break;
     case 5:
      var $12 = HEAP[$domain];
      var $13 = _nis_maplist($12);
      $maps = $13;
      
      if ($13 == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 20;
      break;
     case 7:
      var $15 = _PyList_New(0);
      $list = $15;
      
      
      if ($list == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 20;
      break;
     case 9:
      var $18 = $maps;
      __lastLabel__ = 9;
      __label__ = 18;
      break;
     case 10:
      
      
      var $21 = HEAP[$maps];
      var $22 = _PyString_FromString($21);
      $str = $22;
      
      
      if ($str == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $27 = _PyList_Append($list, $str);
      
      if ($27 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 12:
      
      
      
      var $32 = HEAP[$list] - 1;
      
      
      HEAP[$list] = $32;
      
      
      
      
      if (HEAP[$list] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $43 = HEAP[HEAP[$list + 4] + 24];
      
      FUNCTION_TABLE[$43]($list);
      __label__ = 14;
      break;
     case 14:
      $list = 0;
      __label__ = 19;
      break;
     case 15:
      
      
      
      var $48 = HEAP[$str] - 1;
      
      
      HEAP[$str] = $48;
      
      
      
      
      if (HEAP[$str] == 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      
      
      
      
      var $59 = HEAP[HEAP[$str + 4] + 24];
      
      FUNCTION_TABLE[$59]($str);
      __label__ = 17;
      break;
     case 17:
      
      
      var $63 = HEAP[$maps + 4];
      $maps = $63;
      __lastLabel__ = 17;
      __label__ = 18;
      break;
     case 18:
      var $64 = __lastLabel__ == 17 ? $63 : $18;
      
      if ($64 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      $0 = $list;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval20 = $retval;
      STACKTOP = __stackBase__;
      return $retval20;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _initnis() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $d;
      var $0 = _Py_InitModule4(__str28, _nis_methods, _nis__doc__, 0, 1013);
      $m = $0;
      
      
      if ($m == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      
      var $4 = _PyModule_GetDict($m);
      $d = $4;
      var $5 = _PyErr_NewException(__str29, 0, 0);
      HEAP[_NisError] = $5;
      
      
      if (HEAP[_NisError] != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      var $8 = HEAP[_NisError];
      
      var $10 = _PyDict_SetItemString($d, __str30, $8);
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_initnis"] = _initnis;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _nis_foreach, 0, _nis_xdr_ypmaplist, 0, _nis_xdr_domainname, 0, _nis_xdr_ypresp_maplist, 0, _nis_match, 0, _nis_cat, 0, _nis_maps, 0, _nis_get_default_domain, 0 ]);
  function run(args) {
    _get_default_domain__doc__ = allocate([ 103, 101, 116, 95, 100, 101, 102, 97, 117, 108, 116, 95, 100, 111, 109, 97, 105, 110, 40, 41, 32, 45, 62, 32, 115, 116, 114, 10, 67, 111, 114, 114, 101, 115, 112, 111, 110, 100, 115, 32, 116, 111, 32, 116, 104, 101, 32, 67, 32, 108, 105, 98, 114, 97, 114, 121, 32, 121, 112, 95, 103, 101, 116, 95, 100, 101, 102, 97, 117, 108, 116, 95, 100, 111, 109, 97, 105, 110, 40, 41, 32, 99, 97, 108, 108, 44, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 10, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 78, 73, 83, 32, 100, 111, 109, 97, 105, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _match__doc__ = allocate([ 109, 97, 116, 99, 104, 40, 107, 101, 121, 44, 32, 109, 97, 112, 44, 32, 100, 111, 109, 97, 105, 110, 32, 61, 32, 100, 101, 102, 97, 117, 108, 116, 100, 111, 109, 97, 105, 110, 41, 10, 67, 111, 114, 114, 101, 115, 112, 111, 110, 100, 115, 32, 116, 111, 32, 116, 104, 101, 32, 67, 32, 108, 105, 98, 114, 97, 114, 121, 32, 121, 112, 95, 109, 97, 116, 99, 104, 40, 41, 32, 99, 97, 108, 108, 44, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 116, 104, 101, 32, 118, 97, 108, 117, 101, 32, 111, 102, 10, 107, 101, 121, 32, 105, 110, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 109, 97, 112, 46, 32, 79, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 100, 111, 109, 97, 105, 110, 32, 99, 97, 110, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 98, 117, 116, 32, 105, 116, 10, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 100, 101, 102, 97, 117, 108, 116, 32, 100, 111, 109, 97, 105, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _cat__doc__ = allocate([ 99, 97, 116, 40, 109, 97, 112, 44, 32, 100, 111, 109, 97, 105, 110, 32, 61, 32, 100, 101, 102, 97, 117, 108, 116, 100, 111, 109, 97, 105, 110, 41, 10, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 101, 110, 116, 105, 114, 101, 32, 109, 97, 112, 32, 97, 115, 32, 97, 32, 100, 105, 99, 116, 105, 111, 110, 97, 114, 121, 46, 32, 79, 112, 116, 105, 111, 110, 97, 108, 108, 121, 32, 100, 111, 109, 97, 105, 110, 32, 99, 97, 110, 32, 98, 101, 10, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 98, 117, 116, 32, 105, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 100, 101, 102, 97, 117, 108, 116, 32, 100, 111, 109, 97, 105, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _maps__doc__ = allocate([ 109, 97, 112, 115, 40, 100, 111, 109, 97, 105, 110, 32, 61, 32, 100, 101, 102, 97, 117, 108, 116, 100, 111, 109, 97, 105, 110, 41, 10, 82, 101, 116, 117, 114, 110, 115, 32, 97, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 97, 108, 108, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 78, 73, 83, 32, 109, 97, 112, 115, 32, 119, 105, 116, 104, 105, 110, 32, 97, 32, 100, 111, 109, 97, 105, 110, 46, 32, 73, 102, 32, 100, 111, 109, 97, 105, 110, 10, 105, 115, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 105, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 100, 101, 102, 97, 117, 108, 116, 32, 100, 111, 109, 97, 105, 110, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    _NisError = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _aliases = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_NORMAL);
    __str = allocate([ 112, 97, 115, 115, 119, 100, 0 ], "i8", ALLOC_NORMAL);
    __str1 = allocate([ 112, 97, 115, 115, 119, 100, 46, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str2 = allocate([ 103, 114, 111, 117, 112, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 103, 114, 111, 117, 112, 46, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 110, 101, 116, 119, 111, 114, 107, 115, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 110, 101, 116, 119, 111, 114, 107, 115, 46, 98, 121, 97, 100, 100, 114, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 104, 111, 115, 116, 115, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 104, 111, 115, 116, 115, 46, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 112, 114, 111, 116, 111, 99, 111, 108, 115, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 112, 114, 111, 116, 111, 99, 111, 108, 115, 46, 98, 121, 110, 117, 109, 98, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 115, 101, 114, 118, 105, 99, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 115, 101, 114, 118, 105, 99, 101, 115, 46, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate([ 97, 108, 105, 97, 115, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str13 = allocate([ 109, 97, 105, 108, 46, 97, 108, 105, 97, 115, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 101, 116, 104, 101, 114, 115, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 101, 116, 104, 101, 114, 115, 46, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 116, 35, 115, 124, 115, 58, 109, 97, 116, 99, 104, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9940 = allocate(16, "i8*", ALLOC_NORMAL);
    __str17 = allocate([ 107, 101, 121, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 100, 111, 109, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 115, 124, 115, 58, 99, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_9988 = allocate(12, "i8*", ALLOC_NORMAL);
    _res_10110 = allocate(8, [ "i32", 0, 0, 0, "%struct.nismaplist*", 0, 0, 0 ], ALLOC_NORMAL);
    __str21 = allocate([ 78, 111, 32, 78, 73, 83, 32, 109, 97, 115, 116, 101, 114, 32, 102, 111, 117, 110, 100, 32, 102, 111, 114, 32, 97, 110, 121, 32, 109, 97, 112, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 116, 99, 112, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 124, 115, 58, 109, 97, 112, 115, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10170 = allocate(8, "i8*", ALLOC_NORMAL);
    __str24 = allocate([ 109, 97, 116, 99, 104, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 99, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 109, 97, 112, 115, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 103, 101, 116, 95, 100, 101, 102, 97, 117, 108, 116, 95, 100, 111, 109, 97, 105, 110, 0 ], "i8", ALLOC_NORMAL);
    _nis_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _nis__doc__ = allocate([ 84, 104, 105, 115, 32, 109, 111, 100, 117, 108, 101, 32, 99, 111, 110, 116, 97, 105, 110, 115, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 32, 102, 111, 114, 32, 97, 99, 99, 101, 115, 115, 105, 110, 103, 32, 78, 73, 83, 32, 109, 97, 112, 115, 46, 10, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 110, 105, 115, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 110, 105, 115, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_aliases] = __str;
    HEAP[_aliases + 4] = __str1;
    HEAP[_aliases + 12] = __str2;
    HEAP[_aliases + 16] = __str3;
    HEAP[_aliases + 24] = __str4;
    HEAP[_aliases + 28] = __str5;
    HEAP[_aliases + 36] = __str6;
    HEAP[_aliases + 40] = __str7;
    HEAP[_aliases + 48] = __str8;
    HEAP[_aliases + 52] = __str9;
    HEAP[_aliases + 60] = __str10;
    HEAP[_aliases + 64] = __str11;
    HEAP[_aliases + 72] = __str12;
    HEAP[_aliases + 76] = __str13;
    HEAP[_aliases + 84] = __str14;
    HEAP[_aliases + 88] = __str15;
    HEAP[_kwlist_9940] = __str17;
    HEAP[_kwlist_9940 + 4] = __str18;
    HEAP[_kwlist_9940 + 8] = __str19;
    HEAP[_kwlist_9988] = __str18;
    HEAP[_kwlist_9988 + 4] = __str19;
    HEAP[_kwlist_10170] = __str19;
    HEAP[_nis_methods] = __str24;
    HEAP[_nis_methods + 4] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_nis_methods + 12] = _match__doc__;
    HEAP[_nis_methods + 16] = __str25;
    HEAP[_nis_methods + 20] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_nis_methods + 28] = _cat__doc__;
    HEAP[_nis_methods + 32] = __str26;
    HEAP[_nis_methods + 36] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_nis_methods + 44] = _maps__doc__;
    HEAP[_nis_methods + 48] = __str27;
    HEAP[_nis_methods + 52] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_nis_methods + 60] = _get_default_domain__doc__;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
