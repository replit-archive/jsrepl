"use strict";
(function(FUNCTION_TABLE_OFFSET) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  var __globalConstructor__ = function globalConstructor() {};
  Runtime.QUANTUM_SIZE = 4;
  var $0___SIZE = 16;
  var $1___SIZE = 16;
  var $2___SIZE = 12;
  var $3___SIZE = 400;
  var $4___SIZE = 16;
  var $5___SIZE = 100;
  var $6___SIZE = 20;
  var $7___SIZE = 196;
  var $8___SIZE = 352;
  var $9___SIZE = 4;
  var $struct_FILE___SIZE = 148;
  var $struct_FILE___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 70, 71, 72, 76, 84, 88, 92, 96, 100, 104, 108 ];
  var $struct_PyBufferProcs___SIZE = 24;
  var $struct_PyGetSetDef___SIZE = 20;
  var $struct_PyIntObject___SIZE = 12;
  var $struct_PyMappingMethods___SIZE = 12;
  var $struct_PyMemberDef___SIZE = 20;
  var $struct_PyMethodDef___SIZE = 16;
  var $struct_PyNumberMethods___SIZE = 156;
  var $struct_PyObject___SIZE = 8;
  var $struct_PySequenceMethods___SIZE = 40;
  var $struct_PySocketModule_APIObject___SIZE = 8;
  var $struct_PySocketSockObject___SIZE = 36;
  var $struct_PyStringObject___SIZE = 24;
  var $struct_Py_buffer___SIZE = 52;
  var $struct_Py_buffer___FLATTENER = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48 ];
  var $struct__IO_marker___SIZE = 12;
  var $struct__typeobject___SIZE = 196;
  var $struct_addrinfo___SIZE = 32;
  var $struct_anon___SIZE = 12;
  var $struct_hostent___SIZE = 20;
  var $struct_ifmap___SIZE = 16;
  var $struct_ifmap___FLATTENER = [ 0, 4, 8, 10, 11, 12 ];
  var $struct_ifreq___SIZE = 32;
  var $struct_in6_addr___SIZE = 16;
  var $struct_in_addr___SIZE = 4;
  var $struct_pollfd___SIZE = 8;
  var $struct_pollfd___FLATTENER = [ 0, 4, 6 ];
  var $struct_protoent___SIZE = 12;
  var $struct_servent___SIZE = 16;
  var $struct_sockaddr___SIZE = 16;
  var $struct_sockaddr_in___SIZE = 16;
  var $struct_sockaddr_in___FLATTENER = [ 0, 2, 4, 8 ];
  var $struct_sockaddr_in6___SIZE = 28;
  var $struct_sockaddr_in6___FLATTENER = [ 0, 2, 4, 8, 24 ];
  var $struct_sockaddr_ll___SIZE = 20;
  var $struct_sockaddr_ll___FLATTENER = [ 0, 2, 4, 8, 10, 11, 12 ];
  var $struct_sockaddr_nl___SIZE = 12;
  var $struct_sockaddr_nl___FLATTENER = [ 0, 2, 4, 8 ];
  var $struct_sockaddr_storage___SIZE = 128;
  var $struct_sockaddr_tipc___SIZE = 16;
  var $struct_sockaddr_tipc___FLATTENER = [ 0, 2, 3, 4 ];
  var $struct_sockaddr_un___SIZE = 110;
  var $struct_tipc_name___SIZE = 8;
  var $struct_tipc_name_seq___SIZE = 12;
  var $union_anon___SIZE = 16;
  var $union_sock_addr_t___SIZE = 128;
  var _sock_doc;
  var _socket_error;
  var __str1;
  var _socket_herror;
  var _socket_gaierror;
  var _defaulttimeout;
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
  var __str33;
  var __str34;
  var _socket_timeout;
  var __str35;
  var _accept_doc;
  var _setblocking_doc;
  var __str36;
  var _settimeout_doc;
  var _gettimeout_doc;
  var __str37;
  var __str38;
  var _setsockopt_doc;
  var __str39;
  var __str40;
  var _getsockopt_doc;
  var _bind_doc;
  var _close_doc;
  var _connect_doc;
  var _connect_ex_doc;
  var _fileno_doc;
  var _dup_doc;
  var _getsockname_doc;
  var _getpeername_doc;
  var _listen_doc;
  var __str41;
  var __str42;
  var __str43;
  var _makefile_doc;
  var __str44;
  var __str45;
  var _recv_doc;
  var __str46;
  var _kwlist_10873;
  var __str47;
  var __str48;
  var __str49;
  var __str50;
  var __str51;
  var ___PRETTY_FUNCTION___10879;
  var __str52;
  var __str53;
  var _recv_into_doc;
  var __str54;
  var __str55;
  var _recvfrom_doc;
  var __str56;
  var _kwlist_11020;
  var ___PRETTY_FUNCTION___11027;
  var __str57;
  var __str58;
  var _recvfrom_into_doc;
  var __str59;
  var _send_doc;
  var __str60;
  var _sendall_doc;
  var __str61;
  var __str62;
  var __str63;
  var _sendto_doc;
  var _shutdown_doc;
  var __str64;
  var __str65;
  var __str66;
  var __str67;
  var __str68;
  var __str69;
  var __str70;
  var __str71;
  var __str72;
  var __str73;
  var __str74;
  var __str75;
  var __str76;
  var __str77;
  var __str78;
  var __str79;
  var __str80;
  var __str81;
  var __str82;
  var __str83;
  var __str84;
  var __str85;
  var __str86;
  var __str87;
  var _sock_methods;
  var __str88;
  var __str89;
  var __str90;
  var __str91;
  var __str92;
  var __str93;
  var __str94;
  var __str95;
  var _sock_memberlist;
  var __str96;
  var __str97;
  var _keywords_11267;
  var __str98;
  var _sock_type;
  var _gethostname_doc;
  var __str99;
  var _gethostbyname_doc;
  var __str100;
  var __str101;
  var _ghbn_ex_doc;
  var __str102;
  var _gethostbyaddr_doc;
  var __str103;
  var __str104;
  var _getservbyname_doc;
  var __str105;
  var __str106;
  var __str107;
  var _getservbyport_doc;
  var __str108;
  var __str109;
  var _getprotobyname_doc;
  var __str110;
  var _socketpair_doc;
  var __str111;
  var _fromfd_doc;
  var __str112;
  var __str113;
  var _ntohs_doc;
  var __str114;
  var _ntohl_doc;
  var __str115;
  var _htons_doc;
  var _htonl_doc;
  var _inet_aton_doc;
  var __str116;
  var __str117;
  var _inet_ntoa_doc;
  var __str118;
  var __str119;
  var _inet_pton_doc;
  var __str120;
  var __str121;
  var _inet_ntop_doc;
  var __str122;
  var __str123;
  var __str124;
  var __str125;
  var __str126;
  var __str127;
  var __str128;
  var __str129;
  var __str130;
  var __str131;
  var _getaddrinfo_doc;
  var __str132;
  var __str133;
  var __str134;
  var __str135;
  var __str136;
  var __str137;
  var __str138;
  var _getnameinfo_doc;
  var _getdefaulttimeout_doc;
  var _setdefaulttimeout_doc;
  var __str139;
  var __str140;
  var __str141;
  var __str142;
  var __str143;
  var __str144;
  var __str145;
  var __str146;
  var __str147;
  var __str148;
  var __str149;
  var __str150;
  var __str151;
  var __str152;
  var __str153;
  var __str154;
  var __str155;
  var __str156;
  var __str157;
  var __str158;
  var __str159;
  var _socket_methods;
  var _PySocketModuleAPI;
  var _socket_doc;
  var __str160;
  var __str161;
  var __str162;
  var __str163;
  var __str164;
  var __str165;
  var __str166;
  var __str167;
  var __str168;
  var __str169;
  var __str170;
  var __str171;
  var __str172;
  var __str173;
  var __str174;
  var __str175;
  var __str176;
  var __str177;
  var __str178;
  var __str179;
  var __str180;
  var __str181;
  var __str182;
  var __str183;
  var __str184;
  var __str185;
  var __str186;
  var __str187;
  var __str188;
  var __str189;
  var __str190;
  var __str191;
  var __str192;
  var __str193;
  var __str194;
  var __str195;
  var __str196;
  var __str197;
  var __str198;
  var __str199;
  var __str200;
  var __str201;
  var __str202;
  var __str203;
  var __str204;
  var __str205;
  var __str206;
  var __str207;
  var __str208;
  var __str209;
  var __str210;
  var __str211;
  var __str212;
  var __str213;
  var __str214;
  var __str215;
  var __str216;
  var __str217;
  var __str218;
  var __str219;
  var __str220;
  var __str221;
  var __str222;
  var __str223;
  var __str224;
  var __str225;
  var __str226;
  var __str227;
  var __str228;
  var __str229;
  var __str230;
  var __str231;
  var __str232;
  var __str233;
  var __str234;
  var __str235;
  var __str236;
  var __str237;
  var __str238;
  var __str239;
  var __str240;
  var __str241;
  var __str242;
  var __str243;
  var __str244;
  var __str245;
  var __str246;
  var __str247;
  var __str248;
  var __str249;
  var __str250;
  var __str251;
  var __str252;
  var __str253;
  var __str254;
  var __str255;
  var __str256;
  var __str257;
  var __str258;
  var __str259;
  var __str260;
  var __str261;
  var __str262;
  var __str263;
  var __str264;
  var __str265;
  var __str266;
  var __str267;
  var __str268;
  var __str269;
  var __str270;
  var __str271;
  var __str272;
  var __str273;
  var __str274;
  var __str275;
  var __str276;
  var __str277;
  var __str278;
  var __str279;
  var __str280;
  var __str281;
  var __str282;
  var __str283;
  var __str284;
  var __str285;
  var __str286;
  var __str287;
  var __str288;
  var __str289;
  var __str290;
  var __str291;
  var __str292;
  var __str293;
  var __str294;
  var __str295;
  var __str296;
  var __str297;
  var __str298;
  var __str299;
  var __str300;
  var __str301;
  var __str302;
  var __str303;
  var __str304;
  var __str305;
  var __str306;
  var __str307;
  var __str308;
  var __str309;
  var __str310;
  var __str311;
  var __str312;
  var __str313;
  var __str314;
  var __str315;
  var __str316;
  var __str317;
  var __str318;
  var __str319;
  var __str320;
  var __str321;
  var __str322;
  var __str323;
  var __str324;
  var __str325;
  var __str326;
  var __str327;
  var __str328;
  var __str329;
  var __str330;
  var __str331;
  var __str332;
  var __str333;
  var __str334;
  var __str335;
  var __str336;
  var __str337;
  var __str338;
  var __str339;
  var __str340;
  var __str341;
  var __str342;
  var __str343;
  var __str344;
  var __str345;
  var __str346;
  var __str347;
  var __str348;
  var __str349;
  var __str350;
  var __str351;
  var __str352;
  var __str353;
  var __str354;
  var __str355;
  var __str356;
  var __str357;
  var __str358;
  var __str359;
  var __str360;
  var __str361;
  var __str362;
  var __str363;
  var __str364;
  var __str365;
  var __str366;
  var __str367;
  var __str368;
  var __str369;
  var __str370;
  var __str371;
  var __str372;
  var __str373;
  var __str374;
  var __str375;
  var __str376;
  var __str377;
  var __str378;
  var __str379;
  var __str380;
  var __str381;
  var __str382;
  var __str383;
  var __str384;
  function _set_error() {
    
    var $retval;
    var $0;
    var $1 = HEAP[_socket_error];
    var $2 = _PyErr_SetFromErrno($1);
    $0 = $2;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _set_herror($h_error) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $h_error_addr;
      var $v;
      $h_error_addr = $h_error;
      
      var $1 = _hstrerror($h_error_addr);
      
      var $3 = _Py_BuildValue(__str1, allocate([ $h_error_addr, 0, 0, 0, $1, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $v = $3;
      
      
      if ($v != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      var $6 = HEAP[_socket_herror];
      
      _PyErr_SetObject($6, $v);
      
      
      
      var $11 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $11;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      
      
      
      var $22 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$22]($v);
      __label__ = 3;
      break;
     case 3:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _set_gaierror($error) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $error_addr;
      var $0;
      var $v;
      $error_addr = $error;
      
      var $2 = $error_addr == -11;
      if ($2) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = _set_error();
      $0 = $3;
      __label__ = 6;
      break;
     case 2:
      
      var $5 = _gai_strerror($error_addr);
      
      var $7 = _Py_BuildValue(__str1, allocate([ $error_addr, 0, 0, 0, $5, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $v = $7;
      
      
      if ($v != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $10 = HEAP[_socket_gaierror];
      
      _PyErr_SetObject($10, $v);
      
      
      
      var $15 = HEAP[$v] - 1;
      
      
      HEAP[$v] = $15;
      
      
      
      
      if (HEAP[$v] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      
      
      var $26 = HEAP[HEAP[$v + 4] + 24];
      
      FUNCTION_TABLE[$26]($v);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 6;
      break;
     case 6:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _internal_setblocking($s, $block) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $block_addr;
      var $delay_flag;
      $s_addr = $s;
      $block_addr = $block;
      
      
      var $2 = HEAP[$s_addr + 8];
      var $3 = _fcntl($2, 3, allocate(4, "i32", ALLOC_STACK));
      $delay_flag = $3;
      
      
      var $6 = $delay_flag;
      if ($block_addr != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $7 = $6 & -2049;
      $delay_flag = $7;
      __label__ = 3;
      break;
     case 2:
      var $8 = $6 | 2048;
      $delay_flag = $8;
      __label__ = 3;
      break;
     case 3:
      
      
      var $11 = HEAP[$s_addr + 8];
      
      var $13 = _fcntl($11, 4, allocate([ $delay_flag, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _internal_select($s, $writing) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $writing_addr;
      var $retval;
      var $iftmp_4;
      var $0;
      var $n;
      var $pollfd = __stackBase__;
      var $timeout;
      $s_addr = $s;
      $writing_addr = $writing;
      
      
      
      
      if (HEAP[$s_addr + 28] <= 0) {
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
      
      
      
      
      if (HEAP[$s_addr + 8] < 0) {
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
      
      
      var $11 = HEAP[$s_addr + 8];
      
      HEAP[$pollfd] = $11;
      
      
      if ($writing_addr != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $iftmp_4 = 4;
      __label__ = 7;
      break;
     case 6:
      $iftmp_4 = 1;
      __label__ = 7;
      break;
     case 7:
      
      
      HEAP[$pollfd + 4] = $iftmp_4;
      
      
      
      
      
      
      $timeout = HEAP[$s_addr + 28] * 1e3 + .5 | 0;
      
      var $24 = _poll($pollfd, 1, $timeout);
      $n = $24;
      
      if ($24 < 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = -1;
      __label__ = 12;
      break;
     case 9:
      
      
      if ($n == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      $0 = 1;
      __label__ = 12;
      break;
     case 11:
      $0 = 0;
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
  function _init_sockobject($s, $fd, $family, $type, $proto) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $fd_addr;
      var $family_addr;
      var $type_addr;
      var $proto_addr;
      $s_addr = $s;
      $fd_addr = $fd;
      $family_addr = $family;
      $type_addr = $type;
      $proto_addr = $proto;
      
      
      
      HEAP[$s_addr + 8] = $fd_addr;
      
      
      
      HEAP[$s_addr + 12] = $family_addr;
      
      
      
      HEAP[$s_addr + 16] = $type_addr;
      
      
      
      HEAP[$s_addr + 20] = $proto_addr;
      var $12 = HEAP[_defaulttimeout];
      
      
      HEAP[$s_addr + 28] = $12;
      
      
      HEAP[$s_addr + 24] = FUNCTION_TABLE_OFFSET + 2;
      
      
      if (HEAP[_defaulttimeout] >= 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      _internal_setblocking($s_addr, 0);
      __label__ = 2;
      break;
     case 2:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _new_sockobject($fd, $family, $type, $proto) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $fd_addr;
      var $family_addr;
      var $type_addr;
      var $proto_addr;
      var $retval;
      var $0;
      var $s;
      $fd_addr = $fd;
      $family_addr = $family;
      $type_addr = $type;
      $proto_addr = $proto;
      var $1 = _PyType_GenericNew(_sock_type, 0, 0);
      
      $s = $1;
      
      
      if ($s != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      
      
      _init_sockobject($s, $fd_addr, $family_addr, $type_addr, $proto_addr);
      __label__ = 2;
      break;
     case 2:
      
      $0 = $s;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _setipaddr($name, $addr_ret, $addr_ret_size, $af) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 53;
    _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $name_addr;
      var $addr_ret_addr;
      var $addr_ret_size_addr;
      var $af_addr;
      var $retval;
      var $0;
      var $hints = __stackBase__;
      var $res = __stackBase__ + 32;
      var $error;
      var $d1 = __stackBase__ + 36;
      var $d2 = __stackBase__ + 40;
      var $d3 = __stackBase__ + 44;
      var $d4 = __stackBase__ + 48;
      var $ch = __stackBase__ + 52;
      var $siz;
      var $sin;
      var $sin28;
      $name_addr = $name;
      $addr_ret_addr = $addr_ret;
      $addr_ret_size_addr = $addr_ret_size;
      $af_addr = $af;
      
      
      _llvm_memset_p0i8_i32($addr_ret_addr, 0, 16, 1, 0);
      
      
      
      
      if (HEAP[$name_addr] == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 1:
      var $hints1 = $hints;
      _llvm_memset_p0i8_i32($hints1, 0, 32, 1, 0);
      
      
      HEAP[$hints + 4] = $af_addr;
      
      HEAP[$hints + 8] = 2;
      
      HEAP[$hints] = 1;
      var $11 = _getaddrinfo(0, __str2, $hints, $res);
      $error = $11;
      
      
      if ($error != 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      
      _set_gaierror($error);
      $0 = -1;
      __label__ = 30;
      break;
     case 3:
      
      
      var $17 = HEAP[HEAP[$res] + 4];
      if ($17 == 2) {
        __label__ = 4;
        break;
      } else if ($17 == 10) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      $siz = 4;
      __label__ = 7;
      break;
     case 5:
      $siz = 16;
      __label__ = 7;
      break;
     case 6:
      var $18 = HEAP[$res];
      _freeaddrinfo($18);
      var $19 = HEAP[_socket_error];
      _PyErr_SetString($19, __str3);
      $0 = -1;
      __label__ = 30;
      break;
     case 7:
      
      
      
      
      var $24 = HEAP[$res];
      if (HEAP[HEAP[$res] + 28] != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      _freeaddrinfo($24);
      var $25 = HEAP[_socket_error];
      _PyErr_SetString($25, __str4);
      $0 = -1;
      __label__ = 30;
      break;
     case 9:
      
      
      
      
      if (HEAP[$24 + 16] < $addr_ret_size_addr) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      
      $addr_ret_size_addr = HEAP[HEAP[$res] + 16];
      __label__ = 11;
      break;
     case 11:
      
      
      
      
      
      
      var $39 = HEAP[HEAP[$res] + 20];
      _llvm_memcpy_p0i8_p0i8_i32($addr_ret_addr, $39, $addr_ret_size_addr, 1, 0);
      var $40 = HEAP[$res];
      _freeaddrinfo($40);
      
      $0 = $siz;
      __label__ = 30;
      break;
     case 12:
      
      
      
      
      if (HEAP[$name_addr] == 60) {
        __label__ = 13;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 13:
      
      var $47 = _strcmp($name_addr, __str5);
      
      if ($47 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 14:
      
      
      
      
      
      if ($af_addr != 2 & $af_addr != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      var $53 = HEAP[_socket_error];
      _PyErr_SetString($53, __str6);
      $0 = -1;
      __label__ = 30;
      break;
     case 16:
      
      
      $sin = $addr_ret_addr;
      
      
      _llvm_memset_p0i8_i32($sin, 0, 16, 1, 0);
      
      
      HEAP[$sin] = 2;
      
      
      
      HEAP[$sin + 4] = -1;
      $0 = 4;
      __label__ = 30;
      break;
     case 17:
      
      var $64 = _sscanf($name_addr, __str7, allocate([ $d1, 0, 0, 0, $d2, 0, 0, 0, $d3, 0, 0, 0, $d4, 0, 0, 0, $ch, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      
      
      
      
      
      
      
      if ($64 == 4 & HEAP[$d1] >= 0 & HEAP[$d1] <= 255) {
        __label__ = 18;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 18:
      
      
      
      
      
      if (HEAP[$d2] >= 0 & HEAP[$d2] <= 255) {
        __label__ = 19;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 19:
      
      
      
      
      
      if (HEAP[$d3] >= 0 & HEAP[$d3] <= 255) {
        __label__ = 20;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 20:
      
      
      
      
      
      if (HEAP[$d4] >= 0 & HEAP[$d4] <= 255) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      
      
      $sin28 = $addr_ret_addr;
      
      
      
      
      
      
      
      
      
      var $93 = HEAP[$d2] << 16 | HEAP[$d1] << 24 | HEAP[$d4] | HEAP[$d3] << 8;
      var $94 = _htonl($93);
      
      
      
      HEAP[$sin28 + 4] = $94;
      
      
      HEAP[$sin28] = 2;
      $0 = 4;
      __label__ = 30;
      break;
     case 22:
      var $hints30 = $hints;
      _llvm_memset_p0i8_i32($hints30, 0, 32, 1, 0);
      
      
      HEAP[$hints + 4] = $af_addr;
      
      var $103 = _getaddrinfo($name_addr, 0, $hints, $res);
      $error = $103;
      
      if ($103 != 0) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      
      _set_gaierror($error);
      $0 = -1;
      __label__ = 30;
      break;
     case 24:
      
      
      
      
      
      if (HEAP[HEAP[$res] + 16] < $addr_ret_size_addr) {
        __label__ = 25;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 25:
      
      
      
      $addr_ret_size_addr = HEAP[HEAP[$res] + 16];
      __label__ = 26;
      break;
     case 26:
      
      
      
      
      
      
      var $120 = HEAP[HEAP[$res] + 20];
      _llvm_memcpy_p0i8_p0i8_i32($addr_ret_addr, $120, $addr_ret_size_addr, 1, 0);
      var $121 = HEAP[$res];
      _freeaddrinfo($121);
      
      
      
      var $125 = HEAP[$addr_ret_addr];
      if ($125 == 2) {
        __label__ = 27;
        break;
      } else if ($125 == 10) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 27:
      $0 = 4;
      __label__ = 30;
      break;
     case 28:
      $0 = 16;
      __label__ = 30;
      break;
     case 29:
      var $126 = HEAP[_socket_error];
      _PyErr_SetString($126, __str8);
      $0 = -1;
      __label__ = 30;
      break;
     case 30:
      
      $retval = $0;
      var $retval39 = $retval;
      STACKTOP = __stackBase__;
      return $retval39;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _makeipaddr($addr, $addrlen) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1025;
    _memset(__stackBase__, 0, 1025);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $addr_addr;
      var $addrlen_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      var $error;
      $addr_addr = $addr;
      $addrlen_addr = $addrlen;
      
      
      var $buf1 = $buf;
      var $3 = _getnameinfo($addr_addr, $addrlen_addr, $buf1, 1025, 0, 0, 1);
      $error = $3;
      
      
      if ($error != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      _set_gaierror($error);
      $0 = 0;
      __label__ = 3;
      break;
     case 2:
      var $buf3 = $buf;
      var $7 = _PyString_FromString($buf3);
      $0 = $7;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _makesockaddr($sockfd, $addr, $addrlen, $proto) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 32;
    _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $sockfd_addr;
      var $addr_addr;
      var $addrlen_addr;
      var $proto_addr;
      var $retval;
      var $0;
      var $a;
      var $addrobj;
      var $ret;
      var $a7;
      var $a11;
      var $a13;
      var $addrobj14;
      var $ret15;
      var $a20;
      var $ifname;
      var $ifr = __stackBase__;
      var $a25;
      $sockfd_addr = $sockfd;
      $addr_addr = $addr;
      $addrlen_addr = $addrlen;
      $proto_addr = $proto;
      
      
      if ($addrlen_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      $0 = __Py_NoneStruct;
      __label__ = 27;
      break;
     case 2:
      
      
      
      var $8 = HEAP[$addr_addr];
      if ($8 == 1) {
        __label__ = 7;
        break;
      } else if ($8 == 2) {
        __label__ = 3;
        break;
      } else if ($8 == 10) {
        __label__ = 11;
        break;
      } else if ($8 == 16) {
        __label__ = 10;
        break;
      } else if ($8 == 17) {
        __label__ = 15;
        break;
      } else if ($8 == 30) {
        __label__ = 19;
        break;
      } else {
        __label__ = 26;
        break;
      }
     case 3:
      
      var $10 = _makeipaddr($addr_addr, 16);
      $addrobj = $10;
      $ret = 0;
      
      
      if ($addrobj != 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 4:
      
      
      $a = $addr_addr;
      
      
      
      
      var $19 = HEAP[$a + 2] & 65535;
      var $20 = _ntohs($19);
      var $21 = $20;
      
      var $23 = _Py_BuildValue(__str9, allocate([ $addrobj, 0, 0, 0, $21, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $ret = $23;
      
      
      
      var $27 = HEAP[$addrobj] - 1;
      
      
      HEAP[$addrobj] = $27;
      
      
      
      
      if (HEAP[$addrobj] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      
      
      var $38 = HEAP[HEAP[$addrobj + 4] + 24];
      
      FUNCTION_TABLE[$38]($addrobj);
      __label__ = 6;
      break;
     case 6:
      
      $0 = $ret;
      __label__ = 27;
      break;
     case 7:
      
      
      $a7 = $addr_addr;
      
      
      
      
      
      if (HEAP[$a7 + 2] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $49 = $addrlen_addr - 2;
      $addrlen_addr = $49;
      
      
      
      
      var $54 = _PyString_FromStringAndSize($a7 + 2, $addrlen_addr);
      $0 = $54;
      __label__ = 27;
      break;
     case 9:
      
      
      
      var $58 = _PyString_FromString($a7 + 2);
      $0 = $58;
      __label__ = 27;
      break;
     case 10:
      
      
      $a11 = $addr_addr;
      
      
      var $63 = HEAP[$a11 + 8];
      
      
      var $66 = HEAP[$a11 + 4];
      var $67 = _Py_BuildValue(__str10, allocate([ $66, 0, 0, 0, $63, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $67;
      __label__ = 27;
      break;
     case 11:
      
      var $69 = _makeipaddr($addr_addr, 28);
      $addrobj14 = $69;
      $ret15 = 0;
      
      
      if ($addrobj14 != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      
      
      $a13 = $addr_addr;
      
      
      var $76 = HEAP[$a13 + 24];
      
      
      var $79 = HEAP[$a13 + 4];
      
      
      
      
      var $84 = HEAP[$a13 + 2] & 65535;
      var $85 = _ntohs($84);
      var $86 = $85;
      
      var $88 = _Py_BuildValue(__str11, allocate([ $addrobj14, 0, 0, 0, $86, 0, 0, 0, $79, 0, 0, 0, $76, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $ret15 = $88;
      
      
      
      var $92 = HEAP[$addrobj14] - 1;
      
      
      HEAP[$addrobj14] = $92;
      
      
      
      
      if (HEAP[$addrobj14] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $103 = HEAP[HEAP[$addrobj14 + 4] + 24];
      
      FUNCTION_TABLE[$103]($addrobj14);
      __label__ = 14;
      break;
     case 14:
      
      $0 = $ret15;
      __label__ = 27;
      break;
     case 15:
      
      
      $a20 = $addr_addr;
      $ifname = __str12;
      
      
      
      
      if (HEAP[$a20 + 4] != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      var $114 = HEAP[$a20 + 4];
      
      
      
      HEAP[$ifr + 16] = $114;
      
      var $119 = _ioctl($sockfd_addr, 35088, allocate([ $ifr, 0, 0, 0 ], [ "%struct.ifreq*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($119 == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      $ifname = $ifr;
      __label__ = 18;
      break;
     case 18:
      
      
      
      var $127 = HEAP[$a20 + 11];
      
      
      var $130 = $a20 + 12;
      
      
      
      var $134 = HEAP[$a20 + 8];
      
      
      
      var $138 = HEAP[$a20 + 10];
      
      
      
      
      var $143 = HEAP[$a20 + 2] & 65535;
      var $144 = _ntohs($143);
      var $145 = $144;
      
      var $147 = _Py_BuildValue(__str13, allocate([ $ifname, 0, 0, 0, $145, 0, 0, 0, $138, 0, 0, 0, $134, 0, 0, 0, $130, 0, 0, 0, $127, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $147;
      __label__ = 27;
      break;
     case 19:
      
      
      $a25 = $addr_addr;
      
      
      
      
      var $154 = $a25;
      if (HEAP[$a25 + 2] == 1) {
        __label__ = 20;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 20:
      
      
      var $157 = HEAP[$154 + 3];
      
      
      
      
      var $162 = HEAP[$a25 + 4 + 8];
      
      
      
      
      var $167 = HEAP[$a25 + 4 + 4];
      
      
      
      
      var $172 = HEAP[$a25 + 4];
      
      
      
      var $176 = HEAP[$a25 + 2];
      var $177 = _Py_BuildValue(__str14, allocate([ $176, 0, 0, 0, $172, 0, 0, 0, $167, 0, 0, 0, $162, 0, 0, 0, $157, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $177;
      __label__ = 27;
      break;
     case 21:
      
      
      
      var $181 = $a25;
      if (HEAP[$154 + 2] == 2) {
        __label__ = 22;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 22:
      
      
      var $184 = HEAP[$181 + 3];
      
      
      
      
      
      
      var $191 = HEAP[$a25 + 4 + 4];
      
      
      
      
      
      
      var $198 = HEAP[$a25 + 4 + 4];
      
      
      
      
      
      
      var $205 = HEAP[$a25 + 4];
      
      
      
      var $209 = HEAP[$a25 + 2];
      var $210 = _Py_BuildValue(__str14, allocate([ $209, 0, 0, 0, $205, 0, 0, 0, $198, 0, 0, 0, $191, 0, 0, 0, $184, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $210;
      __label__ = 27;
      break;
     case 23:
      
      
      
      if (HEAP[$181 + 2] == 3) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      var $217 = HEAP[$a25 + 3];
      
      
      
      
      
      var $223 = HEAP[$a25 + 4];
      
      
      
      
      
      var $229 = HEAP[$a25 + 4 + 4];
      
      
      
      var $233 = HEAP[$a25 + 2];
      var $234 = _Py_BuildValue(__str14, allocate([ $233, 0, 0, 0, $229, 0, 0, 0, $223, 0, 0, 0, 0, 0, 0, 0, $217, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $234;
      __label__ = 27;
      break;
     case 25:
      var $235 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($235, __str15);
      $0 = 0;
      __label__ = 27;
      break;
     case 26:
      
      
      
      
      
      
      var $242 = HEAP[$addr_addr];
      var $243 = _Py_BuildValue(__str16, allocate([ $242, 0, 0, 0, $addr_addr + 2, 0, 0, 0, 14, 0, 0, 0 ], [ "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = $243;
      __label__ = 27;
      break;
     case 27:
      
      $retval = $0;
      var $retval34 = $retval;
      STACKTOP = __stackBase__;
      return $retval34;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getsockaddrarg($s, $args, $addr_ret, $len_ret) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 116;
    _memset(__stackBase__, 0, 116);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $addr_ret_addr;
      var $len_ret_addr;
      var $retval;
      var $0;
      var $addr;
      var $path = __stackBase__;
      var $len = __stackBase__ + 4;
      var $addr12;
      var $pid = __stackBase__ + 8;
      var $groups = __stackBase__ + 12;
      var $addr18;
      var $host = __stackBase__ + 16;
      var $port = __stackBase__ + 20;
      var $result;
      var $addr29;
      var $host30 = __stackBase__ + 24;
      var $port31 = __stackBase__ + 28;
      var $flowinfo = __stackBase__ + 32;
      var $scope_id = __stackBase__ + 36;
      var $result32;
      var $addr43;
      var $ifr = __stackBase__ + 40;
      var $interfaceName = __stackBase__ + 72;
      var $protoNumber = __stackBase__ + 76;
      var $hatype = __stackBase__ + 80;
      var $pkttype = __stackBase__ + 84;
      var $haddr = __stackBase__ + 88;
      var $halen = __stackBase__ + 92;
      var $atype = __stackBase__ + 96;
      var $v1 = __stackBase__ + 100;
      var $v2 = __stackBase__ + 104;
      var $v3 = __stackBase__ + 108;
      var $scope = __stackBase__ + 112;
      var $addr58;
      $s_addr = $s;
      $args_addr = $args;
      $addr_ret_addr = $addr_ret;
      $len_ret_addr = $len_ret;
      
      
      var $3 = HEAP[$s_addr + 12];
      if ($3 == 1) {
        __label__ = 1;
        break;
      } else if ($3 == 2) {
        __label__ = 16;
        break;
      } else if ($3 == 10) {
        __label__ = 25;
        break;
      } else if ($3 == 16) {
        __label__ = 11;
        break;
      } else if ($3 == 17) {
        __label__ = 34;
        break;
      } else if ($3 == 30) {
        __label__ = 47;
        break;
      } else {
        __label__ = 59;
        break;
      }
     case 1:
      
      var $5 = _PyArg_Parse($args_addr, __str17, allocate([ $path, 0, 0, 0, $len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 2:
      $0 = 0;
      __label__ = 60;
      break;
     case 3:
      
      
      $addr = $addr_ret_addr;
      var $9 = HEAP[$len];
      
      if ($9 <= 0) {
        __lastLabel__ = 3;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      
      var $_pr = HEAP[$len];
      if (HEAP[HEAP[$path]] != 0) {
        __lastLabel__ = 4;
        __label__ = 7;
        break;
      } else {
        __lastLabel__ = 4;
        __label__ = 5;
        break;
      }
     case 5:
      
      if ($_pr > 108) {
        __label__ = 6;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 6:
      var $16 = HEAP[_socket_error];
      _PyErr_SetString($16, __str18);
      $0 = 0;
      __label__ = 60;
      break;
     case 7:
      var $17 = __lastLabel__ == 3 ? $9 : $_pr;
      
      if ($17 > 107) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $19 = HEAP[_socket_error];
      _PyErr_SetString($19, __str18);
      $0 = 0;
      __label__ = 60;
      break;
     case 9:
      
      
      
      var $23 = $addr + 2 + HEAP[$len];
      HEAP[$23] = 0;
      __label__ = 10;
      break;
     case 10:
      
      
      
      var $27 = HEAP[$s_addr + 12] & 65535;
      
      
      HEAP[$addr] = $27;
      var $30 = HEAP[$len];
      var $31 = HEAP[$path];
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($addr + 2, $31, $30, 1, 0);
      
      var $36 = HEAP[$len] + 2;
      
      HEAP[$len_ret_addr] = $36;
      $0 = 1;
      __label__ = 60;
      break;
     case 11:
      
      
      $addr12 = $addr_ret_addr;
      
      
      
      
      
      
      
      var $47 = $args_addr;
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 67108864) == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      var $51 = HEAP[HEAP[$47 + 4] + 12];
      var $52 = HEAP[_PyExc_TypeError];
      var $53 = _PyErr_Format($52, __str19, allocate([ $51, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 60;
      break;
     case 13:
      var $54 = _PyArg_ParseTuple($47, __str20, allocate([ $pid, 0, 0, 0, $groups, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($54 == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 60;
      break;
     case 15:
      
      
      HEAP[$addr12] = 16;
      var $58 = HEAP[$pid];
      
      
      HEAP[$addr12 + 4] = $58;
      var $61 = HEAP[$groups];
      
      
      HEAP[$addr12 + 8] = $61;
      
      HEAP[$len_ret_addr] = 12;
      $0 = 1;
      __label__ = 60;
      break;
     case 16:
      
      
      
      
      
      
      
      var $72 = $args_addr;
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 67108864) == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      var $76 = HEAP[HEAP[$72 + 4] + 12];
      var $77 = HEAP[_PyExc_TypeError];
      var $78 = _PyErr_Format($77, __str21, allocate([ $76, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 60;
      break;
     case 18:
      var $79 = _PyArg_ParseTuple($72, __str22, allocate([ __str23, 0, 0, 0, $host, 0, 0, 0, $port, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($79 == 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      $0 = 0;
      __label__ = 60;
      break;
     case 20:
      
      
      $addr18 = $addr_ret_addr;
      
      
      var $85 = HEAP[$host];
      var $86 = _setipaddr($85, $addr18, 16, 2);
      $result = $86;
      var $87 = HEAP[$host];
      _PyMem_Free($87);
      
      
      if ($result < 0) {
        __label__ = 21;
        break;
      } else {
        __label__ = 22;
        break;
      }
     case 21:
      $0 = 0;
      __label__ = 60;
      break;
     case 22:
      
      
      
      
      
      if (HEAP[$port] < 0 | HEAP[$port] > 65535) {
        __label__ = 23;
        break;
      } else {
        __label__ = 24;
        break;
      }
     case 23:
      var $94 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($94, __str24);
      $0 = 0;
      __label__ = 60;
      break;
     case 24:
      
      
      HEAP[$addr18] = 2;
      
      
      
      var $100 = HEAP[$port] & 65535 & 65535;
      var $101 = _htons($100);
      
      
      HEAP[$addr18 + 2] = $101;
      
      HEAP[$len_ret_addr] = 16;
      $0 = 1;
      __label__ = 60;
      break;
     case 25:
      HEAP[$scope_id] = 0;
      var $105 = HEAP[$scope_id];
      HEAP[$flowinfo] = $105;
      
      
      
      
      
      
      
      var $113 = $args_addr;
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 67108864) == 0) {
        __label__ = 26;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 26:
      
      
      
      var $117 = HEAP[HEAP[$113 + 4] + 12];
      var $118 = HEAP[_PyExc_TypeError];
      var $119 = _PyErr_Format($118, __str25, allocate([ $117, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 60;
      break;
     case 27:
      var $120 = _PyArg_ParseTuple($113, __str26, allocate([ __str23, 0, 0, 0, $host30, 0, 0, 0, $port31, 0, 0, 0, $flowinfo, 0, 0, 0, $scope_id, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($120 == 0) {
        __label__ = 28;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 28:
      $0 = 0;
      __label__ = 60;
      break;
     case 29:
      
      
      $addr29 = $addr_ret_addr;
      
      
      var $126 = HEAP[$host30];
      var $127 = _setipaddr($126, $addr29, 28, 10);
      $result32 = $127;
      var $128 = HEAP[$host30];
      _PyMem_Free($128);
      
      
      if ($result32 < 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      $0 = 0;
      __label__ = 60;
      break;
     case 31:
      
      
      
      
      
      if (HEAP[$port31] < 0 | HEAP[$port31] > 65535) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      var $135 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($135, __str24);
      $0 = 0;
      __label__ = 60;
      break;
     case 33:
      
      
      
      var $139 = HEAP[$s_addr + 12] & 65535;
      
      
      HEAP[$addr29] = $139;
      
      
      
      var $145 = HEAP[$port31] & 65535 & 65535;
      var $146 = _htons($145);
      
      
      HEAP[$addr29 + 2] = $146;
      var $149 = HEAP[$flowinfo];
      
      
      HEAP[$addr29 + 4] = $149;
      var $152 = HEAP[$scope_id];
      
      
      HEAP[$addr29 + 24] = $152;
      
      HEAP[$len_ret_addr] = 28;
      $0 = 1;
      __label__ = 60;
      break;
     case 34:
      HEAP[$hatype] = 0;
      HEAP[$pkttype] = 0;
      HEAP[$haddr] = 0;
      HEAP[$halen] = 0;
      
      
      
      
      
      
      
      var $163 = $args_addr;
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 67108864) == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 36;
        break;
      }
     case 35:
      
      
      
      var $167 = HEAP[HEAP[$163 + 4] + 12];
      var $168 = HEAP[_PyExc_TypeError];
      var $169 = _PyErr_Format($168, __str27, allocate([ $167, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 60;
      break;
     case 36:
      var $170 = _PyArg_ParseTuple($163, __str28, allocate([ $interfaceName, 0, 0, 0, $protoNumber, 0, 0, 0, $pkttype, 0, 0, 0, $hatype, 0, 0, 0, $haddr, 0, 0, 0, $halen, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($170 == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      $0 = 0;
      __label__ = 60;
      break;
     case 38:
      var $172 = HEAP[$interfaceName];
      
      
      var $175 = $ifr;
      var $176 = _strncpy($175, $172, 16);
      
      
      
      HEAP[$ifr + 15] = 0;
      
      
      var $182 = HEAP[$s_addr + 8];
      var $183 = _ioctl($182, 35123, allocate([ $ifr, 0, 0, 0 ], [ "%struct.ifreq*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($183 < 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      
      
      var $187 = HEAP[$s_addr + 24];
      var $188 = FUNCTION_TABLE[$187]();
      $0 = 0;
      __label__ = 60;
      break;
     case 40:
      
      
      if (HEAP[$halen] > 8) {
        __label__ = 41;
        break;
      } else {
        __label__ = 42;
        break;
      }
     case 41:
      var $191 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($191, __str29);
      $0 = 0;
      __label__ = 60;
      break;
     case 42:
      
      
      
      
      
      if (HEAP[$protoNumber] < 0 | HEAP[$protoNumber] > 65535) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      var $196 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($196, __str30);
      $0 = 0;
      __label__ = 60;
      break;
     case 44:
      
      
      $addr43 = $addr_ret_addr;
      
      
      HEAP[$addr43] = 17;
      
      
      
      var $204 = HEAP[$protoNumber] & 65535 & 65535;
      var $205 = _htons($204);
      
      
      HEAP[$addr43 + 2] = $205;
      
      
      
      var $211 = HEAP[$ifr + 16];
      
      
      HEAP[$addr43 + 4] = $211;
      
      var $215 = HEAP[$pkttype] & 255;
      
      
      HEAP[$addr43 + 10] = $215;
      
      var $219 = HEAP[$hatype] & 65535;
      
      
      HEAP[$addr43 + 8] = $219;
      
      
      if (HEAP[$halen] != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 46;
        break;
      }
     case 45:
      var $224 = HEAP[$halen];
      var $225 = HEAP[$haddr];
      
      
      
      _llvm_memcpy_p0i8_p0i8_i32($addr43 + 12, $225, $224, 1, 0);
      __label__ = 46;
      break;
     case 46:
      
      var $230 = HEAP[$halen] & 255;
      
      
      HEAP[$addr43 + 11] = $230;
      
      HEAP[$len_ret_addr] = 20;
      $0 = 1;
      __label__ = 60;
      break;
     case 47:
      HEAP[$scope] = 2;
      
      
      
      
      
      
      
      var $241 = $args_addr;
      if ((HEAP[HEAP[$args_addr + 4] + 84] & 67108864) == 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 49;
        break;
      }
     case 48:
      
      
      
      var $245 = HEAP[HEAP[$241 + 4] + 12];
      var $246 = HEAP[_PyExc_TypeError];
      var $247 = _PyErr_Format($246, __str31, allocate([ $245, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 60;
      break;
     case 49:
      var $248 = _PyArg_ParseTuple($241, __str32, allocate([ $atype, 0, 0, 0, $v1, 0, 0, 0, $v2, 0, 0, 0, $v3, 0, 0, 0, $scope, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($248 == 0) {
        __label__ = 50;
        break;
      } else {
        __label__ = 51;
        break;
      }
     case 50:
      $0 = 0;
      __label__ = 60;
      break;
     case 51:
      
      
      $addr58 = $addr_ret_addr;
      
      
      _llvm_memset_p0i8_i32($addr58, 0, 16, 1, 0);
      
      
      HEAP[$addr58] = 30;
      
      var $257 = HEAP[$scope] & 255;
      
      
      HEAP[$addr58 + 3] = $257;
      
      var $261 = HEAP[$atype] & 255;
      
      
      HEAP[$addr58 + 2] = $261;
      
      
      if (HEAP[$atype] == 1) {
        __label__ = 52;
        break;
      } else {
        __label__ = 53;
        break;
      }
     case 52:
      var $266 = HEAP[$v1];
      
      
      
      
      HEAP[$addr58 + 4] = $266;
      var $271 = HEAP[$v2];
      
      
      
      
      HEAP[$addr58 + 4 + 4] = $271;
      var $276 = HEAP[$v3];
      
      
      
      
      HEAP[$addr58 + 4 + 8] = $276;
      __label__ = 58;
      break;
     case 53:
      
      
      if (HEAP[$atype] == 2) {
        __label__ = 54;
        break;
      } else {
        __label__ = 55;
        break;
      }
     case 54:
      var $283 = HEAP[$v1];
      
      
      
      
      
      
      HEAP[$addr58 + 4] = $283;
      var $290 = HEAP[$v2];
      
      
      
      
      
      
      HEAP[$addr58 + 4 + 4] = $290;
      __label__ = 58;
      break;
     case 55:
      
      
      if (HEAP[$atype] == 3) {
        __label__ = 56;
        break;
      } else {
        __label__ = 57;
        break;
      }
     case 56:
      var $299 = HEAP[$v1];
      
      
      
      
      
      HEAP[$addr58 + 4 + 4] = $299;
      var $305 = HEAP[$v2];
      
      
      
      
      
      HEAP[$addr58 + 4] = $305;
      __label__ = 58;
      break;
     case 57:
      var $311 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($311, __str15);
      $0 = 0;
      __label__ = 60;
      break;
     case 58:
      
      HEAP[$len_ret_addr] = 16;
      $0 = 1;
      __label__ = 60;
      break;
     case 59:
      var $313 = HEAP[_socket_error];
      _PyErr_SetString($313, __str33);
      $0 = 0;
      __label__ = 60;
      break;
     case 60:
      
      $retval = $0;
      var $retval72 = $retval;
      STACKTOP = __stackBase__;
      return $retval72;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _getsockaddrlen($s, $len_ret) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $len_ret_addr;
      var $retval;
      var $0;
      $s_addr = $s;
      $len_ret_addr = $len_ret;
      
      
      var $3 = HEAP[$s_addr + 12];
      if ($3 == 1) {
        __label__ = 1;
        break;
      } else if ($3 == 2) {
        __label__ = 3;
        break;
      } else if ($3 == 10) {
        __label__ = 4;
        break;
      } else if ($3 == 16) {
        __label__ = 2;
        break;
      } else if ($3 == 17) {
        __label__ = 5;
        break;
      } else if ($3 == 30) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      HEAP[$len_ret_addr] = 110;
      $0 = 1;
      __label__ = 8;
      break;
     case 2:
      
      HEAP[$len_ret_addr] = 12;
      $0 = 1;
      __label__ = 8;
      break;
     case 3:
      
      HEAP[$len_ret_addr] = 16;
      $0 = 1;
      __label__ = 8;
      break;
     case 4:
      
      HEAP[$len_ret_addr] = 28;
      $0 = 1;
      __label__ = 8;
      break;
     case 5:
      
      HEAP[$len_ret_addr] = 20;
      $0 = 1;
      __label__ = 8;
      break;
     case 6:
      
      HEAP[$len_ret_addr] = 16;
      $0 = 1;
      __label__ = 8;
      break;
     case 7:
      var $10 = HEAP[_socket_error];
      _PyErr_SetString($10, __str34);
      $0 = 0;
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
  function _sock_accept($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 136;
    _memset(__stackBase__, 0, 136);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $retval;
      var $0 = __stackBase__;
      var $1;
      var $addrbuf = __stackBase__ + 4;
      var $newfd;
      var $addrlen = __stackBase__ + 132;
      var $sock;
      var $addr;
      var $res;
      var $timeout;
      $s_addr = $s;
      $sock = 0;
      $addr = 0;
      $res = 0;
      
      var $3 = _getsockaddrlen($s_addr, $addrlen);
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $1 = 0;
      __label__ = 19;
      break;
     case 2:
      var $5 = HEAP[$addrlen];
      var $addrbuf2 = $addrbuf;
      _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0);
      $newfd = -1;
      
      var $7 = _internal_select($s_addr, 0);
      $timeout = $7;
      var $8 = $timeout;
      
      if ($8 == 0) {
        __lastLabel__ = 2;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = 2;
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$0] = $addrbuf;
      
      
      var $13 = HEAP[$s_addr + 8];
      
      var $val = HEAP[$0];
      var $14 = _accept($13, $val, $addrlen);
      $newfd = $14;
      var $_pr = $timeout;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $15 = __lastLabel__ == 3 ? $_pr : $8;
      
      if ($15 == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $17 = HEAP[_socket_timeout];
      _PyErr_SetString($17, __str35);
      $1 = 0;
      __label__ = 19;
      break;
     case 6:
      
      
      var $20 = $s_addr;
      if ($newfd < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $22 = HEAP[$20 + 24];
      var $23 = FUNCTION_TABLE[$22]();
      $1 = $23;
      __label__ = 19;
      break;
     case 8:
      
      var $25 = HEAP[$20 + 20];
      
      
      var $28 = HEAP[$s_addr + 16];
      
      
      var $31 = HEAP[$s_addr + 12];
      
      var $33 = _new_sockobject($newfd, $31, $28, $25);
      
      $sock = $33;
      
      
      if ($sock == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      
      var $38 = _close($newfd);
      __label__ = 12;
      break;
     case 10:
      
      
      var $41 = HEAP[$s_addr + 20];
      var $42 = HEAP[$addrlen];
      var $addrbuf13 = $addrbuf;
      
      
      var $45 = HEAP[$s_addr + 8];
      var $46 = _makesockaddr($45, $addrbuf13, $42, $41);
      $addr = $46;
      
      
      if ($addr == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      var $51 = _PyTuple_Pack(2, allocate([ $sock, 0, 0, 0, $addr, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $res = $51;
      __label__ = 12;
      break;
     case 12:
      
      
      if ($sock != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      
      
      
      var $57 = HEAP[$sock] - 1;
      
      
      HEAP[$sock] = $57;
      
      
      
      
      if (HEAP[$sock] == 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      
      
      
      
      var $68 = HEAP[HEAP[$sock + 4] + 24];
      
      FUNCTION_TABLE[$68]($sock);
      __label__ = 15;
      break;
     case 15:
      
      
      if ($addr != 0) {
        __label__ = 16;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 16:
      
      
      
      var $75 = HEAP[$addr] - 1;
      
      
      HEAP[$addr] = $75;
      
      
      
      
      if (HEAP[$addr] == 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 18;
        break;
      }
     case 17:
      
      
      
      
      var $86 = HEAP[HEAP[$addr + 4] + 24];
      
      FUNCTION_TABLE[$86]($addr);
      __label__ = 18;
      break;
     case 18:
      
      $1 = $res;
      __label__ = 19;
      break;
     case 19:
      
      $retval = $1;
      var $retval23 = $retval;
      STACKTOP = __stackBase__;
      return $retval23;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_setblocking($s, $arg) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $arg_addr;
      var $retval;
      var $iftmp_114;
      var $0;
      var $block;
      $s_addr = $s;
      $arg_addr = $arg;
      
      var $2 = _PyInt_AsLong($arg_addr);
      $block = $2;
      var $3 = $block;
      var $4 = $3 == -1;
      if ($4) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 4;
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
      var $_pr = $block;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $7 = __lastLabel__ == 3 ? $_pr : $3;
      
      if ($7 != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $iftmp_114 = -1;
      __label__ = 7;
      break;
     case 6:
      $iftmp_114 = 0;
      __label__ = 7;
      break;
     case 7:
      
      
      
      HEAP[$s_addr + 28] = $iftmp_114;
      
      
      _internal_setblocking($s_addr, $block);
      
      var $15 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $15;
      $0 = __Py_NoneStruct;
      __label__ = 8;
      break;
     case 8:
      
      $retval = $0;
      var $retval7 = $retval;
      return $retval7;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_settimeout($s, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $timeout;
      $s_addr = $s;
      $arg_addr = $arg;
      
      
      if ($arg_addr == __Py_NoneStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $timeout = -1;
      __label__ = 6;
      break;
     case 2:
      
      var $4 = _PyFloat_AsDouble($arg_addr);
      $timeout = $4;
      
      
      if ($timeout < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $7 = _PyErr_Occurred();
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str36);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      
      
      HEAP[$s_addr + 28] = $timeout;
      
      
      
      
      _internal_setblocking($s_addr, $timeout < 0);
      
      var $18 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $18;
      $0 = __Py_NoneStruct;
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
  function _sock_gettimeout($s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $retval;
      var $0;
      $s_addr = $s;
      
      
      
      
      if (HEAP[$s_addr + 28] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $6 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $6;
      $0 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      
      
      var $9 = HEAP[$s_addr + 28];
      var $10 = _PyFloat_FromDouble($9);
      $0 = $10;
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
  function _sock_setsockopt($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $level = __stackBase__;
      var $optname = __stackBase__ + 4;
      var $res;
      var $buf = __stackBase__ + 8;
      var $buflen = __stackBase__ + 12;
      var $flag = __stackBase__ + 16;
      $s_addr = $s;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str37, allocate([ $level, 0, 0, 0, $optname, 0, 0, 0, $flag, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      HEAP[$buf] = $flag;
      HEAP[$buflen] = 4;
      __label__ = 4;
      break;
     case 2:
      _PyErr_Clear();
      
      var $5 = _PyArg_ParseTuple($args_addr, __str38, allocate([ $level, 0, 0, 0, $optname, 0, 0, 0, $buf, 0, 0, 0, $buflen, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
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
      var $7 = HEAP[$buflen];
      var $8 = HEAP[$buf];
      var $9 = HEAP[$optname];
      var $10 = HEAP[$level];
      
      
      var $13 = HEAP[$s_addr + 8];
      var $14 = _setsockopt($13, $10, $9, $8, $7);
      $res = $14;
      
      if ($14 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $18 = HEAP[$s_addr + 24];
      var $19 = FUNCTION_TABLE[$18]();
      $0 = $19;
      __label__ = 7;
      break;
     case 6:
      
      var $21 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $21;
      $0 = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_getsockopt($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 24;
    _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $level = __stackBase__;
      var $optname = __stackBase__ + 4;
      var $res;
      var $buf = __stackBase__ + 8;
      var $buflen = __stackBase__ + 12;
      var $flag = __stackBase__ + 16;
      var $flagsize = __stackBase__ + 20;
      $s_addr = $s;
      $args_addr = $args;
      HEAP[$buflen] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str39, allocate([ $level, 0, 0, 0, $optname, 0, 0, 0, $buflen, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$buflen] == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      HEAP[$flag] = 0;
      HEAP[$flagsize] = 4;
      var $6 = HEAP[$optname];
      var $7 = HEAP[$level];
      
      
      var $10 = HEAP[$s_addr + 8];
      var $flag3 = $flag;
      var $11 = _getsockopt($10, $7, $6, $flag3, $flagsize);
      $res = $11;
      
      
      if ($res < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $16 = HEAP[$s_addr + 24];
      var $17 = FUNCTION_TABLE[$16]();
      $0 = $17;
      __label__ = 15;
      break;
     case 5:
      var $18 = HEAP[$flag];
      var $19 = _PyInt_FromLong($18);
      $0 = $19;
      __label__ = 15;
      break;
     case 6:
      
      
      
      
      
      if (HEAP[$buflen] == 0 | HEAP[$buflen] > 1024) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $24 = HEAP[_socket_error];
      _PyErr_SetString($24, __str40);
      $0 = 0;
      __label__ = 15;
      break;
     case 8:
      var $25 = HEAP[$buflen];
      var $26 = _PyString_FromStringAndSize(0, $25);
      HEAP[$buf] = $26;
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $0 = 0;
      __label__ = 15;
      break;
     case 10:
      
      
      
      var $32 = HEAP[$buf] + 20;
      var $33 = HEAP[$optname];
      var $34 = HEAP[$level];
      
      
      var $37 = HEAP[$s_addr + 8];
      var $38 = _getsockopt($37, $34, $33, $32, $buflen);
      $res = $38;
      
      
      if ($res < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      var $41 = HEAP[$buf];
      
      
      var $44 = HEAP[$41] - 1;
      var $45 = $41;
      HEAP[$45] = $44;
      
      
      
      if (HEAP[$41] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $53 = HEAP[HEAP[HEAP[$buf] + 4] + 24];
      var $54 = HEAP[$buf];
      FUNCTION_TABLE[$53]($54);
      __label__ = 13;
      break;
     case 13:
      
      
      var $57 = HEAP[$s_addr + 24];
      var $58 = FUNCTION_TABLE[$57]();
      $0 = $58;
      __label__ = 15;
      break;
     case 14:
      var $59 = HEAP[$buflen];
      var $60 = __PyString_Resize($buf, $59);
      
      $0 = HEAP[$buf];
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval17 = $retval;
      STACKTOP = __stackBase__;
      return $retval17;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_bind($s, $addro) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 136;
    _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $addro_addr;
      var $retval;
      var $0 = __stackBase__;
      var $1;
      var $addrbuf = __stackBase__ + 4;
      var $addrlen = __stackBase__ + 132;
      var $res;
      $s_addr = $s;
      $addro_addr = $addro;
      var $addrbuf1 = $addrbuf;
      
      
      var $4 = _getsockaddrarg($s_addr, $addro_addr, $addrbuf1, $addrlen);
      
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $1 = 0;
      __label__ = 5;
      break;
     case 2:
      var $6 = HEAP[$addrlen];
      
      
      HEAP[$0] = $addrbuf;
      
      
      var $10 = HEAP[$s_addr + 8];
      
      var $val = HEAP[$0];
      var $11 = _bind($10, $val, $6);
      $res = $11;
      
      
      if ($res < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      
      var $16 = HEAP[$s_addr + 24];
      var $17 = FUNCTION_TABLE[$16]();
      $1 = $17;
      __label__ = 5;
      break;
     case 4:
      
      var $19 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $19;
      $1 = __Py_NoneStruct;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $1;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_close($s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $retval;
      var $0;
      var $fd;
      $s_addr = $s;
      
      
      
      $fd = HEAP[$s_addr + 8];
      
      var $5 = $fd != -1;
      if ($5) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      HEAP[$s_addr + 8] = -1;
      
      var $9 = _close($fd);
      __label__ = 2;
      break;
     case 2:
      
      var $11 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $11;
      $0 = __Py_NoneStruct;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _internal_connect($s, $addr, $addrlen, $timeoutp) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $addr_addr;
      var $addrlen_addr;
      var $timeoutp_addr;
      var $retval;
      var $0;
      var $1 = __stackBase__;
      var $res = __stackBase__ + 4;
      var $timeout;
      var $res_size = __stackBase__ + 8;
      $s_addr = $s;
      $addr_addr = $addr;
      $addrlen_addr = $addrlen;
      $timeoutp_addr = $timeoutp;
      $timeout = 0;
      
      
      
      HEAP[$1] = $addr_addr;
      
      
      var $7 = HEAP[$s_addr + 8];
      
      var $val = HEAP[$1];
      var $8 = _connect($7, $val, $addrlen_addr);
      HEAP[$res] = $8;
      
      
      
      
      if (HEAP[$s_addr + 28] > 0) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 11;
        break;
      }
     case 1:
      
      
      if (HEAP[$res] < 0) {
        __label__ = 2;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 2:
      var $15 = ___errno_location();
      
      
      if (HEAP[$15] == 115) {
        __label__ = 3;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 3:
      
      var $19 = _internal_select($s_addr, 1);
      $timeout = $19;
      
      
      if ($timeout == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      HEAP[$res_size] = 4;
      
      
      var $24 = HEAP[$s_addr + 8];
      var $res4 = $res;
      var $25 = _getsockopt($24, 1, 4, $res4, $res_size);
      
      
      if (HEAP[$res] == 106) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      HEAP[$res] = 0;
      __label__ = 6;
      break;
     case 6:
      var $28 = ___errno_location();
      var $29 = HEAP[$res];
      HEAP[$28] = $29;
      __label__ = 10;
      break;
     case 7:
      
      var $31 = $timeout == -1;
      if ($31) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $32 = ___errno_location();
      var $33 = HEAP[$32];
      HEAP[$res] = $33;
      __lastLabel__ = 8;
      __label__ = 11;
      break;
     case 9:
      HEAP[$res] = 11;
      __label__ = 13;
      break;
     case 10:
      var $_pr = HEAP[$res];
      __lastLabel__ = 10;
      __label__ = 11;
      break;
     case 11:
      var $34 = __lastLabel__ == 10 ? $_pr : __lastLabel__ == 8 ? $33 : $8;
      
      if ($34 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $36 = ___errno_location();
      var $37 = HEAP[$36];
      HEAP[$res] = $37;
      __label__ = 13;
      break;
     case 13:
      
      
      HEAP[$timeoutp_addr] = $timeout;
      
      $0 = HEAP[$res];
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_connect($s, $addro) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 136;
    _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $addro_addr;
      var $retval;
      var $0;
      var $addrbuf = __stackBase__;
      var $addrlen = __stackBase__ + 128;
      var $res;
      var $timeout = __stackBase__ + 132;
      $s_addr = $s;
      $addro_addr = $addro;
      var $addrbuf1 = $addrbuf;
      
      
      var $3 = _getsockaddrarg($s_addr, $addro_addr, $addrbuf1, $addrlen);
      
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
      var $5 = HEAP[$addrlen];
      var $addrbuf4 = $addrbuf;
      
      var $7 = _internal_connect($s_addr, $addrbuf4, $5, $timeout);
      $res = $7;
      
      
      if (HEAP[$timeout] == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = HEAP[_socket_timeout];
      _PyErr_SetString($10, __str35);
      $0 = 0;
      __label__ = 7;
      break;
     case 4:
      
      
      if ($res != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $15 = HEAP[$s_addr + 24];
      var $16 = FUNCTION_TABLE[$15]();
      $0 = $16;
      __label__ = 7;
      break;
     case 6:
      
      var $18 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $18;
      $0 = __Py_NoneStruct;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval11 = $retval;
      STACKTOP = __stackBase__;
      return $retval11;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_connect_ex($s, $addro) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 136;
    _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $addro_addr;
      var $retval;
      var $0;
      var $addrbuf = __stackBase__;
      var $addrlen = __stackBase__ + 128;
      var $res;
      var $timeout = __stackBase__ + 132;
      $s_addr = $s;
      $addro_addr = $addro;
      var $addrbuf1 = $addrbuf;
      
      
      var $3 = _getsockaddrarg($s_addr, $addro_addr, $addrbuf1, $addrlen);
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 6;
      break;
     case 2:
      var $5 = HEAP[$addrlen];
      var $addrbuf4 = $addrbuf;
      
      var $7 = _internal_connect($s_addr, $addrbuf4, $5, $timeout);
      $res = $7;
      
      
      if ($res == 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      var $10 = _PyErr_CheckSignals();
      
      if ($10 != 0) {
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
      
      var $13 = _PyInt_FromLong($res);
      $0 = $13;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_fileno($s) {
    
    var $s_addr;
    var $retval;
    var $0;
    $s_addr = $s;
    
    
    var $3 = HEAP[$s_addr + 8];
    var $4 = _PyInt_FromLong($3);
    $0 = $4;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _sock_dup($s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $retval;
      var $0;
      var $newfd;
      var $sock;
      $s_addr = $s;
      
      
      var $3 = HEAP[$s_addr + 8];
      var $4 = _dup($3);
      $newfd = $4;
      
      
      var $7 = $s_addr;
      if ($newfd < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $9 = HEAP[$7 + 24];
      var $10 = FUNCTION_TABLE[$9]();
      $0 = $10;
      __label__ = 5;
      break;
     case 2:
      
      var $12 = HEAP[$7 + 20];
      
      
      var $15 = HEAP[$s_addr + 16];
      
      
      var $18 = HEAP[$s_addr + 12];
      
      var $20 = _new_sockobject($newfd, $18, $15, $12);
      
      $sock = $20;
      
      
      if ($sock == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $25 = _close($newfd);
      __label__ = 4;
      break;
     case 4:
      
      $0 = $sock;
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
  function _sock_getsockname($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 136;
    _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $retval;
      var $0 = __stackBase__;
      var $1;
      var $addrbuf = __stackBase__ + 4;
      var $res;
      var $addrlen = __stackBase__ + 132;
      $s_addr = $s;
      
      var $3 = _getsockaddrlen($s_addr, $addrlen);
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $1 = 0;
      __label__ = 5;
      break;
     case 2:
      var $5 = HEAP[$addrlen];
      var $addrbuf2 = $addrbuf;
      _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0);
      
      
      HEAP[$0] = $addrbuf;
      
      
      var $9 = HEAP[$s_addr + 8];
      
      var $val = HEAP[$0];
      var $10 = _getsockname($9, $val, $addrlen);
      $res = $10;
      
      
      var $13 = $s_addr;
      if ($res < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $15 = HEAP[$13 + 24];
      var $16 = FUNCTION_TABLE[$15]();
      $1 = $16;
      __label__ = 5;
      break;
     case 4:
      
      var $18 = HEAP[$13 + 20];
      var $19 = HEAP[$addrlen];
      var $addrbuf7 = $addrbuf;
      
      
      var $22 = HEAP[$s_addr + 8];
      var $23 = _makesockaddr($22, $addrbuf7, $19, $18);
      $1 = $23;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $1;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_getpeername($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 136;
    _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $retval;
      var $0 = __stackBase__;
      var $1;
      var $addrbuf = __stackBase__ + 4;
      var $res;
      var $addrlen = __stackBase__ + 132;
      $s_addr = $s;
      
      var $3 = _getsockaddrlen($s_addr, $addrlen);
      
      if ($3 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $1 = 0;
      __label__ = 5;
      break;
     case 2:
      var $5 = HEAP[$addrlen];
      var $addrbuf2 = $addrbuf;
      _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0);
      
      
      HEAP[$0] = $addrbuf;
      
      
      var $9 = HEAP[$s_addr + 8];
      
      var $val = HEAP[$0];
      var $10 = _getpeername($9, $val, $addrlen);
      $res = $10;
      
      
      var $13 = $s_addr;
      if ($res < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      
      var $15 = HEAP[$13 + 24];
      var $16 = FUNCTION_TABLE[$15]();
      $1 = $16;
      __label__ = 5;
      break;
     case 4:
      
      var $18 = HEAP[$13 + 20];
      var $19 = HEAP[$addrlen];
      var $addrbuf7 = $addrbuf;
      
      
      var $22 = HEAP[$s_addr + 8];
      var $23 = _makesockaddr($22, $addrbuf7, $19, $18);
      $1 = $23;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $1;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_listen($s, $arg) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $backlog;
      var $res;
      $s_addr = $s;
      $arg_addr = $arg;
      
      var $2 = _PyInt_AsLong($arg_addr);
      $backlog = $2;
      var $3 = $backlog;
      var $4 = $3 == -1;
      if ($4) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 4;
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
      var $_pr = $backlog;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $7 = __lastLabel__ == 3 ? $_pr : $3;
      
      if ($7 < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $backlog = 0;
      __label__ = 6;
      break;
     case 6:
      
      
      var $11 = HEAP[$s_addr + 8];
      
      var $13 = _listen($11, $backlog);
      $res = $13;
      
      if ($13 < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $17 = HEAP[$s_addr + 24];
      var $18 = FUNCTION_TABLE[$17]();
      $0 = $18;
      __label__ = 9;
      break;
     case 8:
      
      var $20 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $20;
      $0 = __Py_NoneStruct;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval8 = $retval;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_makefile($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 8;
    _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $mode = __stackBase__;
      var $bufsize = __stackBase__ + 4;
      var $fd;
      var $fp;
      var $f;
      $s_addr = $s;
      $args_addr = $args;
      HEAP[$mode] = __str41;
      HEAP[$bufsize] = -1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str42, allocate([ $mode, 0, 0, 0, $bufsize, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 10;
      break;
     case 2:
      
      
      var $6 = HEAP[$s_addr + 8];
      var $7 = _dup($6);
      $fd = $7;
      
      
      if ($fd < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $10 = HEAP[$mode];
      
      var $12 = _fdopen($fd, $10);
      $fp = $12;
      
      
      if ($fp == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 4:
      
      
      if ($fd >= 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      var $17 = _close($fd);
      __label__ = 6;
      break;
     case 6:
      
      
      var $20 = HEAP[$s_addr + 24];
      var $21 = FUNCTION_TABLE[$20]();
      $0 = $21;
      __label__ = 10;
      break;
     case 7:
      var $22 = HEAP[$mode];
      
      var $24 = _PyFile_FromFile($fp, __str43, $22, FUNCTION_TABLE_OFFSET + 4);
      $f = $24;
      
      
      if ($f != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      var $27 = HEAP[$bufsize];
      
      _PyFile_SetBufSize($f, $27);
      __label__ = 9;
      break;
     case 9:
      
      $0 = $f;
      __label__ = 10;
      break;
     case 10:
      
      $retval = $0;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_recv_guts($s, $cbuf, $len, $flags) {
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $cbuf_addr;
      var $len_addr;
      var $flags_addr;
      var $retval;
      var $0;
      var $outlen;
      var $timeout;
      $s_addr = $s;
      $cbuf_addr = $cbuf;
      $len_addr = $len;
      $flags_addr = $flags;
      $outlen = -1;
      
      var $2 = _internal_select($s_addr, 0);
      $timeout = $2;
      var $3 = $timeout;
      
      if ($3 == 0) {
        __lastLabel__ = -1;
        __label__ = 1;
        break;
      } else {
        __lastLabel__ = -1;
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      var $8 = HEAP[$s_addr + 8];
      
      
      var $11 = _recv($8, $cbuf_addr, $len_addr, $flags_addr);
      $outlen = $11;
      var $_pr = $timeout;
      __lastLabel__ = 1;
      __label__ = 2;
      break;
     case 2:
      var $12 = __lastLabel__ == 1 ? $_pr : $3;
      
      if ($12 == 1) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $14 = HEAP[_socket_timeout];
      _PyErr_SetString($14, __str35);
      $0 = -1;
      __label__ = 7;
      break;
     case 4:
      
      
      if ($outlen < 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      
      
      var $19 = HEAP[$s_addr + 24];
      var $20 = FUNCTION_TABLE[$19]();
      $0 = -1;
      __label__ = 7;
      break;
     case 6:
      
      $0 = $outlen;
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
  function _sock_recv($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $recvlen = __stackBase__;
      var $flags = __stackBase__ + 4;
      var $outlen;
      var $buf = __stackBase__ + 8;
      $s_addr = $s;
      $args_addr = $args;
      HEAP[$flags] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str44, allocate([ $recvlen, 0, 0, 0, $flags, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$recvlen] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str45);
      $0 = 0;
      __label__ = 14;
      break;
     case 4:
      var $7 = HEAP[$recvlen];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$buf] = $8;
      
      
      if (HEAP[$buf] == 0) {
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
      var $11 = HEAP[$flags];
      var $12 = HEAP[$recvlen];
      
      
      
      var $16 = HEAP[$buf] + 20;
      
      var $18 = _sock_recv_guts($s_addr, $16, $12, $11);
      $outlen = $18;
      
      
      if ($outlen < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 7:
      var $21 = HEAP[$buf];
      
      
      var $24 = HEAP[$21] - 1;
      var $25 = $21;
      HEAP[$25] = $24;
      
      
      
      if (HEAP[$21] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      
      
      
      var $33 = HEAP[HEAP[HEAP[$buf] + 4] + 24];
      var $34 = HEAP[$buf];
      FUNCTION_TABLE[$33]($34);
      __label__ = 9;
      break;
     case 9:
      $0 = 0;
      __label__ = 14;
      break;
     case 10:
      
      
      
      if ($outlen != HEAP[$recvlen]) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      
      var $39 = __PyString_Resize($buf, $outlen);
      
      if ($39 < 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      $0 = 0;
      __label__ = 14;
      break;
     case 13:
      
      $0 = HEAP[$buf];
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
  function _sock_recv_into($s, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 60;
    _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $recvlen = __stackBase__;
      var $flags = __stackBase__ + 4;
      var $readlen;
      var $buf = __stackBase__ + 8;
      var $buflen;
      $s_addr = $s;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$recvlen] = 0;
      HEAP[$flags] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str46, _kwlist_10873, allocate([ $buf, 0, 0, 0, $recvlen, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      $buflen = HEAP[$buf + 8];
      
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if ($buflen <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str50, __str51, 2483, ___PRETTY_FUNCTION___10879);
      throw "Reached an unreachable!";
     case 5:
      
      
      if (HEAP[$recvlen] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $14 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($14, __str52);
      __label__ = 13;
      break;
     case 7:
      
      
      if (HEAP[$recvlen] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      HEAP[$recvlen] = $buflen;
      __label__ = 9;
      break;
     case 9:
      
      
      
      if ($buflen < HEAP[$recvlen]) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $21 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($21, __str53);
      __label__ = 13;
      break;
     case 11:
      var $22 = HEAP[$flags];
      var $23 = HEAP[$recvlen];
      
      var $25 = HEAP[$buf];
      
      var $27 = _sock_recv_guts($s_addr, $25, $23, $22);
      $readlen = $27;
      
      
      if ($readlen < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 12:
      _PyBuffer_Release($buf);
      
      var $31 = _PyInt_FromSsize_t($readlen);
      $0 = $31;
      __label__ = 14;
      break;
     case 13:
      _PyBuffer_Release($buf);
      $0 = 0;
      __label__ = 14;
      break;
     case 14:
      
      $retval = $0;
      var $retval13 = $retval;
      STACKTOP = __stackBase__;
      return $retval13;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_recvfrom_guts($s, $cbuf, $len, $flags, $addr) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 136;
    _memset(__stackBase__, 0, 136);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $cbuf_addr;
      var $len_addr;
      var $flags_addr;
      var $addr_addr;
      var $retval;
      var $0 = __stackBase__;
      var $1;
      var $addrbuf = __stackBase__ + 4;
      var $timeout;
      var $n;
      var $addrlen = __stackBase__ + 132;
      $s_addr = $s;
      $cbuf_addr = $cbuf;
      $len_addr = $len;
      $flags_addr = $flags;
      $addr_addr = $addr;
      $n = -1;
      
      HEAP[$addr_addr] = 0;
      
      var $4 = _getsockaddrlen($s_addr, $addrlen);
      
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $1 = -1;
      __label__ = 11;
      break;
     case 2:
      var $6 = HEAP[$addrlen];
      var $addrbuf2 = $addrbuf;
      _llvm_memset_p0i8_i32($addrbuf2, 0, $6, 1, 0);
      
      var $8 = _internal_select($s_addr, 0);
      $timeout = $8;
      var $9 = $timeout;
      
      if ($9 == 0) {
        __lastLabel__ = 2;
        __label__ = 3;
        break;
      } else {
        __lastLabel__ = 2;
        __label__ = 4;
        break;
      }
     case 3:
      
      
      HEAP[$0] = $addrbuf;
      
      
      
      var $15 = HEAP[$s_addr + 8];
      
      
      
      var $val = HEAP[$0];
      var $18 = _recvfrom($15, $cbuf_addr, $len_addr, $flags_addr, $val, $addrlen);
      $n = $18;
      var $_pr = $timeout;
      __lastLabel__ = 3;
      __label__ = 4;
      break;
     case 4:
      var $19 = __lastLabel__ == 3 ? $_pr : $9;
      
      if ($19 == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $21 = HEAP[_socket_timeout];
      _PyErr_SetString($21, __str35);
      $1 = -1;
      __label__ = 11;
      break;
     case 6:
      
      
      var $24 = $s_addr;
      if ($n < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      var $26 = HEAP[$24 + 24];
      var $27 = FUNCTION_TABLE[$26]();
      $1 = -1;
      __label__ = 11;
      break;
     case 8:
      
      var $29 = HEAP[$24 + 20];
      var $30 = HEAP[$addrlen];
      var $addrbuf10 = $addrbuf;
      
      
      var $33 = HEAP[$s_addr + 8];
      var $34 = _makesockaddr($33, $addrbuf10, $30, $29);
      
      HEAP[$addr_addr] = $34;
      
      
      
      if (HEAP[$addr_addr] == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      $1 = -1;
      __label__ = 11;
      break;
     case 10:
      
      $1 = $n;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $1;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_recvfrom($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 16;
    _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      var $addr = __stackBase__ + 4;
      var $ret;
      var $recvlen = __stackBase__ + 8;
      var $flags = __stackBase__ + 12;
      var $outlen;
      $s_addr = $s;
      $args_addr = $args;
      HEAP[$buf] = 0;
      HEAP[$addr] = 0;
      $ret = 0;
      HEAP[$flags] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str54, allocate([ $recvlen, 0, 0, 0, $flags, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 17;
      break;
     case 2:
      
      
      if (HEAP[$recvlen] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($6, __str55);
      $0 = 0;
      __label__ = 17;
      break;
     case 4:
      var $7 = HEAP[$recvlen];
      var $8 = _PyString_FromStringAndSize(0, $7);
      HEAP[$buf] = $8;
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      $0 = 0;
      __label__ = 17;
      break;
     case 6:
      var $11 = HEAP[$flags];
      var $12 = HEAP[$recvlen];
      
      
      
      var $16 = HEAP[$buf] + 20;
      
      var $18 = _sock_recvfrom_guts($s_addr, $16, $12, $11, $addr);
      $outlen = $18;
      
      
      if ($outlen < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      
      
      if ($outlen != HEAP[$recvlen]) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      var $25 = __PyString_Resize($buf, $outlen);
      
      if ($25 < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      var $27 = HEAP[$addr];
      var $28 = HEAP[$buf];
      var $29 = _PyTuple_Pack(2, allocate([ $28, 0, 0, 0, $27, 0, 0, 0 ], [ "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $ret = $29;
      __label__ = 10;
      break;
     case 10:
      
      
      if (HEAP[$buf] != 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 11:
      var $32 = HEAP[$buf];
      
      
      var $35 = HEAP[$32] - 1;
      var $36 = $32;
      HEAP[$36] = $35;
      
      
      
      if (HEAP[$32] == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      
      
      
      var $44 = HEAP[HEAP[HEAP[$buf] + 4] + 24];
      var $45 = HEAP[$buf];
      FUNCTION_TABLE[$44]($45);
      __label__ = 13;
      break;
     case 13:
      
      
      if (HEAP[$addr] != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      var $48 = HEAP[$addr];
      
      
      var $51 = HEAP[$48] - 1;
      var $52 = $48;
      HEAP[$52] = $51;
      
      
      
      if (HEAP[$48] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $60 = HEAP[HEAP[HEAP[$addr] + 4] + 24];
      var $61 = HEAP[$addr];
      FUNCTION_TABLE[$60]($61);
      __label__ = 16;
      break;
     case 16:
      
      $0 = $ret;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval16 = $retval;
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_recvfrom_into($s, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 64;
    _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $recvlen = __stackBase__;
      var $flags = __stackBase__ + 4;
      var $readlen;
      var $buf = __stackBase__ + 8;
      var $buflen;
      var $addr = __stackBase__ + 60;
      $s_addr = $s;
      $args_addr = $args;
      $kwds_addr = $kwds;
      HEAP[$recvlen] = 0;
      HEAP[$flags] = 0;
      HEAP[$addr] = 0;
      
      
      var $3 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str56, _kwlist_11020, allocate([ $buf, 0, 0, 0, $recvlen, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($3 == 0) {
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
      
      
      $buflen = HEAP[$buf + 8];
      
      
      
      if (HEAP[$buf] == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      
      
      if ($buflen <= 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      ___assert_fail(__str50, __str51, 2665, ___PRETTY_FUNCTION___11027);
      throw "Reached an unreachable!";
     case 5:
      
      
      if (HEAP[$recvlen] < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      var $14 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($14, __str57);
      __label__ = 11;
      break;
     case 7:
      
      
      if (HEAP[$recvlen] == 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      
      HEAP[$recvlen] = $buflen;
      __label__ = 9;
      break;
     case 9:
      var $18 = HEAP[$flags];
      var $19 = HEAP[$recvlen];
      
      var $21 = HEAP[$buf];
      
      var $23 = _sock_recvfrom_guts($s_addr, $21, $19, $18, $addr);
      $readlen = $23;
      
      if ($23 < 0) {
        __label__ = 11;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      _PyBuffer_Release($buf);
      var $25 = HEAP[$addr];
      
      var $27 = _Py_BuildValue(__str58, allocate([ $readlen, 0, 0, 0, $25, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $27;
      __label__ = 15;
      break;
     case 11:
      
      
      if (HEAP[$addr] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $30 = HEAP[$addr];
      
      
      var $33 = HEAP[$30] - 1;
      var $34 = $30;
      HEAP[$34] = $33;
      
      
      
      if (HEAP[$30] == 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      
      
      var $42 = HEAP[HEAP[HEAP[$addr] + 4] + 24];
      var $43 = HEAP[$addr];
      FUNCTION_TABLE[$42]($43);
      __label__ = 14;
      break;
     case 14:
      _PyBuffer_Release($buf);
      $0 = 0;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $0;
      var $retval14 = $retval;
      STACKTOP = __stackBase__;
      return $retval14;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_send($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $buf;
      var $len;
      var $n;
      var $flags = __stackBase__;
      var $timeout;
      var $pbuf = __stackBase__ + 4;
      $s_addr = $s;
      $args_addr = $args;
      $n = -1;
      HEAP[$flags] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str59, allocate([ $pbuf, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 9;
      break;
     case 2:
      
      
      $buf = HEAP[$pbuf];
      
      
      $len = HEAP[$pbuf + 8];
      
      var $9 = _internal_select($s_addr, 1);
      $timeout = $9;
      
      
      if ($timeout == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $12 = HEAP[$flags];
      
      
      
      var $16 = HEAP[$s_addr + 8];
      
      var $18 = _send($16, $buf, $len, $12);
      $n = $18;
      __label__ = 4;
      break;
     case 4:
      _PyBuffer_Release($pbuf);
      
      
      if ($timeout == 1) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $21 = HEAP[_socket_timeout];
      _PyErr_SetString($21, __str35);
      $0 = 0;
      __label__ = 9;
      break;
     case 6:
      
      
      if ($n < 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      
      var $26 = HEAP[$s_addr + 24];
      var $27 = FUNCTION_TABLE[$26]();
      $0 = $27;
      __label__ = 9;
      break;
     case 8:
      
      var $29 = _PyInt_FromLong($n);
      $0 = $29;
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
  function _sock_sendall($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 56;
    _memset(__stackBase__, 0, 56);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $buf;
      var $len;
      var $n;
      var $flags = __stackBase__;
      var $timeout;
      var $saved_errno;
      var $pbuf = __stackBase__ + 4;
      $s_addr = $s;
      $args_addr = $args;
      $n = -1;
      HEAP[$flags] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str60, allocate([ $pbuf, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 17;
      break;
     case 2:
      
      
      $buf = HEAP[$pbuf];
      
      
      $len = HEAP[$pbuf + 8];
      __label__ = 3;
      break;
     case 3:
      
      var $9 = _internal_select($s_addr, 1);
      $timeout = $9;
      $n = -1;
      
      if ($9 == 0) {
        __lastLabel__ = 3;
        __label__ = 4;
        break;
      } else {
        __lastLabel__ = 3;
        __label__ = 5;
        break;
      }
     case 4:
      var $11 = HEAP[$flags];
      
      
      
      var $15 = HEAP[$s_addr + 8];
      
      var $17 = _send($15, $buf, $len, $11);
      $n = $17;
      var $_pr = $timeout;
      __lastLabel__ = 4;
      __label__ = 5;
      break;
     case 5:
      var $18 = __lastLabel__ == 4 ? $_pr : $9;
      
      if ($18 == 1) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      _PyBuffer_Release($pbuf);
      var $20 = HEAP[_socket_timeout];
      _PyErr_SetString($20, __str35);
      $0 = 0;
      __label__ = 17;
      break;
     case 7:
      var $21 = ___errno_location();
      
      $saved_errno = HEAP[$21];
      var $23 = _PyErr_CheckSignals();
      
      if ($23 != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      _PyBuffer_Release($pbuf);
      $0 = 0;
      __label__ = 17;
      break;
     case 9:
      
      
      if ($n < 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      
      if ($saved_errno == 4) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      var $31 = $buf + $n;
      $buf = $31;
      
      
      var $34 = $len - $n;
      $len = $34;
      __lastLabel__ = 11;
      __label__ = 13;
      break;
     case 12:
      var $_pr1 = $len;
      __lastLabel__ = 12;
      __label__ = 13;
      break;
     case 13:
      var $35 = __lastLabel__ == 12 ? $_pr1 : $34;
      
      if ($35 > 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      _PyBuffer_Release($pbuf);
      
      
      if ($n < 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      var $41 = HEAP[$s_addr + 24];
      var $42 = FUNCTION_TABLE[$41]();
      $0 = $42;
      __label__ = 17;
      break;
     case 16:
      
      var $44 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $44;
      $0 = __Py_NoneStruct;
      __label__ = 17;
      break;
     case 17:
      
      $retval = $0;
      var $retval16 = $retval;
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_sendto($s, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 196;
    _memset(__stackBase__, 0, 196);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $args_addr;
      var $retval;
      var $0 = __stackBase__;
      var $1;
      var $pbuf = __stackBase__ + 4;
      var $addro = __stackBase__ + 56;
      var $buf;
      var $len;
      var $addrbuf = __stackBase__ + 60;
      var $addrlen = __stackBase__ + 188;
      var $n;
      var $flags = __stackBase__ + 192;
      var $timeout;
      var $arglen;
      $s_addr = $s;
      $args_addr = $args;
      $n = -1;
      HEAP[$flags] = 0;
      
      var $3 = _PyTuple_Size($args_addr);
      $arglen = $3;
      var $4 = $arglen;
      if ($4 == 2) {
        __label__ = 1;
        break;
      } else if ($4 == 3) {
        __label__ = 2;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 1:
      
      var $6 = _PyArg_ParseTuple($args_addr, __str61, allocate([ $pbuf, 0, 0, 0, $addro, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 4;
      break;
     case 2:
      
      var $8 = _PyArg_ParseTuple($args_addr, __str62, allocate([ $pbuf, 0, 0, 0, $flags, 0, 0, 0, $addro, 0, 0, 0 ], [ "%struct.Py_buffer*", 0, 0, 0, "i32*", 0, 0, 0, "%struct.PyObject**", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 4;
      break;
     case 3:
      var $9 = HEAP[_PyExc_TypeError];
      
      var $11 = _PyErr_Format($9, __str63, allocate([ $arglen, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      __label__ = 4;
      break;
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
      $1 = 0;
      __label__ = 15;
      break;
     case 6:
      
      
      $buf = HEAP[$pbuf];
      
      
      $len = HEAP[$pbuf + 8];
      var $addrbuf6 = $addrbuf;
      var $18 = HEAP[$addro];
      
      var $20 = _getsockaddrarg($s_addr, $18, $addrbuf6, $addrlen);
      
      if ($20 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      _PyBuffer_Release($pbuf);
      $1 = 0;
      __label__ = 15;
      break;
     case 8:
      
      var $23 = _internal_select($s_addr, 1);
      $timeout = $23;
      
      
      if ($timeout == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $26 = HEAP[$addrlen];
      
      
      HEAP[$0] = $addrbuf;
      var $28 = HEAP[$flags];
      
      
      
      var $32 = HEAP[$s_addr + 8];
      
      
      var $val = HEAP[$0];
      var $34 = _sendto($32, $buf, $len, $28, $val, $26);
      $n = $34;
      __label__ = 10;
      break;
     case 10:
      _PyBuffer_Release($pbuf);
      
      
      if ($timeout == 1) {
        __label__ = 11;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 11:
      var $37 = HEAP[_socket_timeout];
      _PyErr_SetString($37, __str35);
      $1 = 0;
      __label__ = 15;
      break;
     case 12:
      
      
      if ($n < 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 13:
      
      
      var $42 = HEAP[$s_addr + 24];
      var $43 = FUNCTION_TABLE[$42]();
      $1 = $43;
      __label__ = 15;
      break;
     case 14:
      
      var $45 = _PyInt_FromLong($n);
      $1 = $45;
      __label__ = 15;
      break;
     case 15:
      
      $retval = $1;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_shutdown($s, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $how;
      var $res;
      $s_addr = $s;
      $arg_addr = $arg;
      
      var $2 = _PyInt_AsLong($arg_addr);
      $how = $2;
      
      var $4 = $how == -1;
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
      __label__ = 6;
      break;
     case 3:
      
      
      var $9 = HEAP[$s_addr + 8];
      
      var $11 = _shutdown($9, $how);
      $res = $11;
      
      if ($11 < 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      
      
      var $15 = HEAP[$s_addr + 24];
      var $16 = FUNCTION_TABLE[$15]();
      $0 = $16;
      __label__ = 6;
      break;
     case 5:
      
      var $18 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $18;
      $0 = __Py_NoneStruct;
      __label__ = 6;
      break;
     case 6:
      
      $retval = $0;
      var $retval6 = $retval;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_dealloc($s) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $s_addr;
      $s_addr = $s;
      
      
      
      var $3 = HEAP[$s_addr + 8] != -1;
      if ($3) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      var $6 = HEAP[$s_addr + 8];
      var $7 = _close($6);
      __label__ = 2;
      break;
     case 2:
      
      
      
      
      
      var $13 = HEAP[HEAP[$s_addr + 4] + 160];
      
      
      FUNCTION_TABLE[$13]($s_addr);
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_repr($s) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 512;
    _memset(__stackBase__, 0, 512);
    
    var $s_addr;
    var $retval;
    var $0;
    var $buf = __stackBase__;
    $s_addr = $s;
    
    
    var $3 = HEAP[$s_addr + 20];
    
    
    var $6 = HEAP[$s_addr + 16];
    
    
    var $9 = HEAP[$s_addr + 12];
    
    
    var $12 = HEAP[$s_addr + 8];
    var $buf1 = $buf;
    var $13 = _PyOS_snprintf($buf1, 512, __str96, allocate([ $12, 0, 0, 0, $9, 0, 0, 0, $6, 0, 0, 0, $3, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0 ], ALLOC_STACK));
    var $buf2 = $buf;
    var $14 = _PyString_FromString($buf2);
    $0 = $14;
    
    $retval = $0;
    var $retval3 = $retval;
    STACKTOP = __stackBase__;
    return $retval3;
  }
  function _sock_new($type, $args, $kwds) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $type_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $new;
      $type_addr = $type;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      var $3 = HEAP[$type_addr + 152];
      
      var $5 = FUNCTION_TABLE[$3]($type_addr, 0);
      $new = $5;
      
      
      if ($new != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      
      
      HEAP[$new + 8] = -1;
      
      
      
      HEAP[$new + 28] = -1;
      
      
      
      HEAP[$new + 24] = FUNCTION_TABLE_OFFSET + 2;
      __label__ = 2;
      break;
     case 2:
      
      $0 = $new;
      
      $retval = $0;
      var $retval2 = $retval;
      return $retval2;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _sock_initobj($self, $args, $kwds) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $kwds_addr;
      var $retval;
      var $0;
      var $s;
      var $fd;
      var $family = __stackBase__;
      var $type = __stackBase__ + 4;
      var $proto = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      $kwds_addr = $kwds;
      
      
      $s = $self_addr;
      HEAP[$family] = 2;
      HEAP[$type] = 1;
      HEAP[$proto] = 0;
      
      
      var $5 = _PyArg_ParseTupleAndKeywords($args_addr, $kwds_addr, __str97, _keywords_11267, allocate([ $family, 0, 0, 0, $type, 0, 0, 0, $proto, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($5 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = -1;
      __label__ = 5;
      break;
     case 2:
      var $7 = HEAP[$proto];
      var $8 = HEAP[$type];
      var $9 = HEAP[$family];
      var $10 = _socket($9, $8, $7);
      $fd = $10;
      
      
      if ($fd < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $13 = _set_error();
      $0 = -1;
      __label__ = 5;
      break;
     case 4:
      var $14 = HEAP[$proto];
      var $15 = HEAP[$type];
      var $16 = HEAP[$family];
      
      
      _init_sockobject($s, $fd, $16, $15, $14);
      $0 = 0;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_gethostname($self, $unused) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1024;
    _memset(__stackBase__, 0, 1024);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $unused_addr;
      var $retval;
      var $0;
      var $buf = __stackBase__;
      var $res;
      $self_addr = $self;
      $unused_addr = $unused;
      var $buf1 = $buf;
      var $1 = _gethostname($buf1, 1023);
      $res = $1;
      
      
      if ($res < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $4 = _set_error();
      $0 = $4;
      __label__ = 3;
      break;
     case 2:
      
      HEAP[$buf + 1023] = 0;
      var $buf3 = $buf;
      var $6 = _PyString_FromString($buf3);
      $0 = $6;
      __label__ = 3;
      break;
     case 3:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_gethostbyname($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 132;
    _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $name = __stackBase__;
      var $addrbuf = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str99, allocate([ $name, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $addrbuf2 = $addrbuf;
      var $4 = HEAP[$name];
      var $5 = _setipaddr($4, $addrbuf2, 128, 2);
      
      if ($5 < 0) {
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
      var $addrbuf6 = $addrbuf;
      var $7 = _makeipaddr($addrbuf6, 16);
      $0 = $7;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval9 = $retval;
      STACKTOP = __stackBase__;
      return $retval9;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _gethost_common($h, $addr, $af) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 44;
    _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $h_addr;
      var $addr_addr;
      var $alen_addr;
      var $af_addr;
      var $retval;
      var $0;
      var $pch;
      var $rtn_tuple;
      var $name_list;
      var $addr_list;
      var $tmp;
      var $status;
      var $status21;
      var $sin = __stackBase__;
      var $sin6 = __stackBase__ + 16;
      $h_addr = $h;
      $addr_addr = $addr;
      $alen_addr = 128;
      $af_addr = $af;
      $rtn_tuple = 0;
      $name_list = 0;
      $addr_list = 0;
      
      
      if ($h_addr == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      var $3 = ___h_errno_location();
      var $4 = HEAP[$3];
      _set_herror($4);
      $0 = 0;
      __label__ = 42;
      break;
     case 2:
      
      
      
      
      
      if (HEAP[$h_addr + 8] != $af_addr) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $10 = _strerror(97);
      var $11 = HEAP[_socket_error];
      _PyErr_SetString($11, $10);
      $0 = 0;
      __label__ = 42;
      break;
     case 4:
      var $12 = $af_addr;
      if ($12 == 2) {
        __label__ = 5;
        break;
      } else if ($12 == 10) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 5:
      
      
      if ($alen_addr <= 15) {
        __label__ = 6;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 42;
      break;
     case 7:
      
      
      if ($alen_addr <= 27) {
        __label__ = 8;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 8:
      $0 = 0;
      __label__ = 42;
      break;
     case 9:
      var $17 = _PyList_New(0);
      $name_list = $17;
      
      if ($17 == 0) {
        __label__ = 38;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 10:
      var $19 = _PyList_New(0);
      $addr_list = $19;
      
      
      if ($addr_list == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 11:
      
      
      
      
      if (HEAP[$h_addr + 4] != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 12:
      
      
      
      $pch = HEAP[$h_addr + 4];
      __label__ = 18;
      break;
     case 13:
      
      var $30 = HEAP[$pch];
      var $31 = _PyString_FromString($30);
      $tmp = $31;
      
      
      if ($tmp == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 14:
      
      
      var $36 = _PyList_Append($name_list, $tmp);
      $status = $36;
      
      
      
      var $40 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $40;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      var $51 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$51]($tmp);
      __label__ = 16;
      break;
     case 16:
      
      
      if ($status != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 17:
      
      var $56 = $pch + 4;
      $pch = $56;
      __label__ = 18;
      break;
     case 18:
      
      
      
      if (HEAP[$pch] != 0) {
        __label__ = 13;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 19:
      
      
      
      $pch = HEAP[$h_addr + 16];
      var $sin23 = $sin;
      var $63 = $sin;
      
      var $65 = $sin + 4;
      var $sin24 = $sin;
      var $sin28 = $sin;
      var $sin631 = $sin6;
      var $66 = $sin6;
      
      var $68 = $sin6 + 8;
      var $sin632 = $sin6;
      var $sin636 = $sin6;
      __label__ = 33;
      break;
     case 20:
      var $69 = $af_addr;
      if ($69 == 2) {
        __label__ = 21;
        break;
      } else if ($69 == 10) {
        __label__ = 24;
        break;
      } else {
        __label__ = 27;
        break;
      }
     case 21:
      _llvm_memset_p0i8_i32($sin23, 0, 16, 1, 0);
      
      
      HEAP[$63] = $af_addr & 65535;
      
      var $73 = HEAP[$pch];
      _llvm_memcpy_p0i8_p0i8_i32($65, $73, 4, 1, 0);
      var $74 = _makeipaddr($sin24, 16);
      $tmp = $74;
      
      
      
      
      
      if (HEAP[$h_addr + 16] == $pch) {
        __label__ = 22;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 22:
      
      
      if ($alen_addr > 15) {
        __label__ = 23;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 23:
      
      
      _llvm_memcpy_p0i8_p0i8_i32($addr_addr, $sin28, 16, 1, 0);
      __label__ = 28;
      break;
     case 24:
      _llvm_memset_p0i8_i32($sin631, 0, 28, 1, 0);
      
      
      HEAP[$66] = $af_addr & 65535;
      
      var $87 = HEAP[$pch];
      _llvm_memcpy_p0i8_p0i8_i32($68, $87, 16, 1, 0);
      var $88 = _makeipaddr($sin632, 28);
      $tmp = $88;
      
      
      
      
      
      if (HEAP[$h_addr + 16] == $pch) {
        __label__ = 25;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 25:
      
      
      if ($alen_addr > 27) {
        __label__ = 26;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 26:
      
      
      _llvm_memcpy_p0i8_p0i8_i32($addr_addr, $sin636, 28, 1, 0);
      __label__ = 28;
      break;
     case 27:
      var $98 = HEAP[_socket_error];
      _PyErr_SetString($98, __str3);
      $0 = 0;
      __label__ = 42;
      break;
     case 28:
      
      
      if ($tmp == 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      var $103 = _PyList_Append($addr_list, $tmp);
      $status21 = $103;
      
      
      
      var $107 = HEAP[$tmp] - 1;
      
      
      HEAP[$tmp] = $107;
      
      
      
      
      if (HEAP[$tmp] == 0) {
        __label__ = 30;
        break;
      } else {
        __label__ = 31;
        break;
      }
     case 30:
      
      
      
      
      var $118 = HEAP[HEAP[$tmp + 4] + 24];
      
      FUNCTION_TABLE[$118]($tmp);
      __label__ = 31;
      break;
     case 31:
      
      
      if ($status21 != 0) {
        __label__ = 35;
        break;
      } else {
        __label__ = 32;
        break;
      }
     case 32:
      
      var $123 = $pch + 4;
      $pch = $123;
      __label__ = 33;
      break;
     case 33:
      
      
      
      if (HEAP[$pch] != 0) {
        __label__ = 20;
        break;
      } else {
        __label__ = 34;
        break;
      }
     case 34:
      
      
      var $129 = HEAP[$h_addr];
      
      
      var $132 = _Py_BuildValue(__str100, allocate([ $129, 0, 0, 0, $name_list, 0, 0, 0, $addr_list, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $rtn_tuple = $132;
      __label__ = 35;
      break;
     case 35:
      
      
      if ($name_list != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      var $137 = HEAP[$name_list] - 1;
      
      
      HEAP[$name_list] = $137;
      
      
      
      
      if (HEAP[$name_list] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $148 = HEAP[HEAP[$name_list + 4] + 24];
      
      FUNCTION_TABLE[$148]($name_list);
      __label__ = 38;
      break;
     case 38:
      
      
      if ($addr_list != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 39:
      
      
      
      var $155 = HEAP[$addr_list] - 1;
      
      
      HEAP[$addr_list] = $155;
      
      
      
      
      if (HEAP[$addr_list] == 0) {
        __label__ = 40;
        break;
      } else {
        __label__ = 41;
        break;
      }
     case 40:
      
      
      
      
      var $166 = HEAP[HEAP[$addr_list + 4] + 24];
      
      FUNCTION_TABLE[$166]($addr_list);
      __label__ = 41;
      break;
     case 41:
      
      $0 = $rtn_tuple;
      __label__ = 42;
      break;
     case 42:
      
      $retval = $0;
      var $retval53 = $retval;
      STACKTOP = __stackBase__;
      return $retval53;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_gethostbyname_ex($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 132;
    _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $name = __stackBase__;
      var $h;
      var $addr = __stackBase__ + 4;
      var $sa;
      var $ret;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str101, allocate([ $name, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $addr2 = $addr;
      var $4 = HEAP[$name];
      var $5 = _setipaddr($4, $addr2, 128, 2);
      
      if ($5 < 0) {
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
      var $7 = HEAP[$name];
      var $8 = _gethostbyname($7);
      $h = $8;
      
      $sa = $addr;
      
      
      
      var $12 = HEAP[$sa];
      var $addr7 = $addr;
      
      var $14 = _gethost_common($h, $addr7, $12);
      $ret = $14;
      
      $0 = $ret;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval10 = $retval;
      STACKTOP = __stackBase__;
      return $retval10;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_gethostbyaddr($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 132;
    _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $addr = __stackBase__;
      var $sa;
      var $ip_num = __stackBase__ + 128;
      var $h;
      var $ret;
      var $ap;
      var $al;
      var $af;
      $self_addr = $self;
      $args_addr = $args;
      
      $sa = $addr;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str102, allocate([ $ip_num, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 9;
      break;
     case 2:
      $af = 0;
      var $4 = HEAP[$ip_num];
      
      
      var $7 = _setipaddr($4, $sa, 128, $af);
      
      if ($7 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $0 = 0;
      __label__ = 9;
      break;
     case 4:
      
      
      
      
      $af = HEAP[$sa];
      $ap = 0;
      var $13 = $af;
      if ($13 == 2) {
        __label__ = 5;
        break;
      } else if ($13 == 10) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 5:
      
      
      
      
      $ap = $sa + 4;
      $al = 4;
      __label__ = 8;
      break;
     case 6:
      
      
      
      
      $ap = $sa + 8;
      $al = 16;
      __label__ = 8;
      break;
     case 7:
      var $22 = HEAP[_socket_error];
      _PyErr_SetString($22, __str3);
      $0 = 0;
      __label__ = 9;
      break;
     case 8:
      
      
      
      var $26 = _gethostbyaddr($ap, $al, $af);
      $h = $26;
      var $addr9 = $addr;
      
      
      var $29 = _gethost_common($h, $addr9, $af);
      $ret = $29;
      
      $0 = $ret;
      __label__ = 9;
      break;
     case 9:
      
      $retval = $0;
      var $retval12 = $retval;
      STACKTOP = __stackBase__;
      return $retval12;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_getservbyname($self, $args) {
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
      var $name = __stackBase__;
      var $proto = __stackBase__ + 4;
      var $sp;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$proto] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str103, allocate([ $name, 0, 0, 0, $proto, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$proto];
      var $5 = HEAP[$name];
      var $6 = _getservbyname($5, $4);
      $sp = $6;
      
      
      if ($sp == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[_socket_error];
      _PyErr_SetString($9, __str104);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      
      
      var $15 = HEAP[$sp + 8] & 65535 & 65535;
      var $16 = _ntohs($15);
      var $17 = $16;
      var $18 = _PyInt_FromLong($17);
      $0 = $18;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_getservbyport($self, $args) {
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
      var $port = __stackBase__;
      var $proto = __stackBase__ + 4;
      var $sp;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$proto] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str105, allocate([ $port, 0, 0, 0, $proto, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      
      
      
      if (HEAP[$port] < 0 | HEAP[$port] > 65535) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($8, __str106);
      $0 = 0;
      __label__ = 7;
      break;
     case 4:
      var $9 = HEAP[$proto];
      
      
      
      var $13 = HEAP[$port] & 65535 & 65535;
      var $14 = _htons($13);
      var $15 = $14;
      var $16 = _getservbyport($15, $9);
      $sp = $16;
      
      
      if ($sp == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $19 = HEAP[_socket_error];
      _PyErr_SetString($19, __str107);
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      
      var $22 = HEAP[$sp];
      var $23 = _PyString_FromString($22);
      $0 = $23;
      __label__ = 7;
      break;
     case 7:
      
      $retval = $0;
      var $retval8 = $retval;
      STACKTOP = __stackBase__;
      return $retval8;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_getprotobyname($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $name = __stackBase__;
      var $sp;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str108, allocate([ $name, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$name];
      var $5 = _getprotobyname($4);
      $sp = $5;
      
      
      if ($sp == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = HEAP[_socket_error];
      _PyErr_SetString($8, __str109);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      var $11 = HEAP[$sp + 8];
      var $12 = _PyInt_FromLong($11);
      $0 = $12;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_socketpair($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 20;
    _memset(__stackBase__, 0, 20);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $s0;
      var $s1;
      var $sv = __stackBase__;
      var $family = __stackBase__ + 8;
      var $type = __stackBase__ + 12;
      var $proto = __stackBase__ + 16;
      var $res;
      $self_addr = $self;
      $args_addr = $args;
      $s0 = 0;
      $s1 = 0;
      HEAP[$type] = 1;
      HEAP[$proto] = 0;
      $res = 0;
      HEAP[$family] = 1;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str110, allocate([ $family, 0, 0, 0, $type, 0, 0, 0, $proto, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$proto];
      var $5 = HEAP[$type];
      var $6 = HEAP[$family];
      var $sv2 = $sv;
      var $7 = _socketpair($6, $5, $4, $sv2);
      
      if ($7 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = _set_error();
      $0 = $9;
      __label__ = 20;
      break;
     case 4:
      var $10 = HEAP[$proto];
      var $11 = HEAP[$type];
      var $12 = HEAP[$family];
      
      var $14 = HEAP[$sv];
      var $15 = _new_sockobject($14, $12, $11, $10);
      $s0 = $15;
      
      
      if ($s0 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      var $18 = HEAP[$proto];
      var $19 = HEAP[$type];
      var $20 = HEAP[$family];
      
      var $22 = HEAP[$sv + 4];
      var $23 = _new_sockobject($22, $20, $19, $18);
      $s1 = $23;
      
      
      if ($s1 == 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      var $28 = _PyTuple_Pack(2, allocate([ $s0, 0, 0, 0, $s1, 0, 0, 0 ], [ "%struct.PySocketSockObject*", 0, 0, 0, "%struct.PySocketSockObject*", 0, 0, 0 ], ALLOC_STACK));
      $res = $28;
      __lastLabel__ = 6;
      __label__ = 8;
      break;
     case 7:
      var $_pr = $res;
      __lastLabel__ = 7;
      __label__ = 8;
      break;
     case 8:
      var $29 = __lastLabel__ == 7 ? $_pr : $28;
      
      if ($29 == 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 9:
      
      
      if ($s0 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      
      var $34 = HEAP[$sv];
      var $35 = _close($34);
      __label__ = 11;
      break;
     case 11:
      
      
      if ($s1 == 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      
      var $39 = HEAP[$sv + 4];
      var $40 = _close($39);
      __label__ = 13;
      break;
     case 13:
      
      
      if ($s0 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 14:
      
      
      
      
      var $47 = HEAP[$s0] - 1;
      
      HEAP[$s0] = $47;
      
      
      
      if (HEAP[$s0] == 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      
      
      
      
      var $57 = HEAP[HEAP[$s0 + 4] + 24];
      
      
      FUNCTION_TABLE[$57]($s0);
      __label__ = 16;
      break;
     case 16:
      
      
      if ($s1 != 0) {
        __label__ = 17;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 17:
      
      
      
      
      var $66 = HEAP[$s1] - 1;
      
      HEAP[$s1] = $66;
      
      
      
      if (HEAP[$s1] == 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      
      
      
      
      
      var $76 = HEAP[HEAP[$s1 + 4] + 24];
      
      
      FUNCTION_TABLE[$76]($s1);
      __label__ = 19;
      break;
     case 19:
      
      $0 = $res;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval19 = $retval;
      STACKTOP = __stackBase__;
      return $retval19;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_fromfd($self, $args) {
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
      var $s;
      var $fd = __stackBase__;
      var $family = __stackBase__ + 4;
      var $type = __stackBase__ + 8;
      var $proto = __stackBase__ + 12;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$proto] = 0;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str111, allocate([ $fd, 0, 0, 0, $family, 0, 0, 0, $type, 0, 0, 0, $proto, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$fd];
      var $5 = _dup($4);
      HEAP[$fd] = $5;
      
      
      if (HEAP[$fd] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $8 = _set_error();
      $0 = $8;
      __label__ = 5;
      break;
     case 4:
      var $9 = HEAP[$proto];
      var $10 = HEAP[$type];
      var $11 = HEAP[$family];
      var $12 = HEAP[$fd];
      var $13 = _new_sockobject($12, $11, $10, $9);
      $s = $13;
      
      
      $0 = $s;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_ntohs($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $x1 = __stackBase__;
      var $x2;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str112, allocate([ $x1, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$x1] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($6, __str113);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      var $10 = HEAP[$x1] & 65535 & 65535;
      var $11 = _ntohs($10);
      
      $x2 = $11;
      
      var $14 = _PyInt_FromLong($x2);
      $0 = $14;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_ntohl($self, $arg) {
    var __label__;
    var __lastLabel__ = null;
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
      
      
      
      
      
      
      
      var $8 = $arg_addr;
      if ((HEAP[HEAP[$arg_addr + 4] + 84] & 8388608) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      $x = HEAP[$8 + 8];
      var $12 = $x;
      var $13 = $12 == -1;
      if ($13) {
        __lastLabel__ = 1;
        __label__ = 2;
        break;
      } else {
        __lastLabel__ = 1;
        __label__ = 5;
        break;
      }
     case 2:
      var $14 = _PyErr_Occurred();
      
      if ($14 != 0) {
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
      var $_pr = $x;
      __lastLabel__ = 4;
      __label__ = 5;
      break;
     case 5:
      var $16 = __lastLabel__ == 4 ? $_pr : $12;
      
      if ($16 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 6:
      var $18 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($18, __str113);
      $0 = 0;
      __label__ = 16;
      break;
     case 7:
      
      
      
      
      
      
      var $25 = $arg_addr;
      if ((HEAP[HEAP[$8 + 4] + 84] & 16777216) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $26 = _PyLong_AsUnsignedLong($25);
      $x = $26;
      
      var $28 = $x == -1;
      if ($28) {
        __label__ = 9;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 9:
      var $29 = _PyErr_Occurred();
      
      if ($29 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      $0 = 0;
      __label__ = 16;
      break;
     case 11:
      
      
      
      var $34 = HEAP[HEAP[$25 + 4] + 12];
      var $35 = HEAP[_PyExc_TypeError];
      var $36 = _PyErr_Format($35, __str114, allocate([ $34, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $36;
      __label__ = 16;
      break;
     case 12:
      
      var $37 = $x == -1;
      if ($37) {
        __label__ = 13;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 13:
      var $38 = _PyErr_Occurred();
      
      if ($38 != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      $0 = 0;
      __label__ = 16;
      break;
     case 15:
      
      var $41 = _ntohl($x);
      var $42 = _PyLong_FromUnsignedLong($41);
      $0 = $42;
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
  function _socket_htons($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 4;
    _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $x1 = __stackBase__;
      var $x2;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str115, allocate([ $x1, 0, 0, 0 ], [ "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$x1] < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($6, __str113);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      
      
      
      var $10 = HEAP[$x1] & 65535 & 65535;
      var $11 = _htons($10);
      
      $x2 = $11;
      
      var $14 = _PyInt_FromLong($x2);
      $0 = $14;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval5 = $retval;
      STACKTOP = __stackBase__;
      return $retval5;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_htonl($self, $arg) {
    var __label__;
    var __lastLabel__ = null;
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
      
      
      
      
      
      
      
      var $8 = $arg_addr;
      if ((HEAP[HEAP[$arg_addr + 4] + 84] & 8388608) != 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 1:
      
      
      
      $x = HEAP[$8 + 8];
      var $12 = $x;
      var $13 = $12 == -1;
      if ($13) {
        __lastLabel__ = 1;
        __label__ = 2;
        break;
      } else {
        __lastLabel__ = 1;
        __label__ = 5;
        break;
      }
     case 2:
      var $14 = _PyErr_Occurred();
      
      if ($14 != 0) {
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
      var $_pr = $x;
      __lastLabel__ = 4;
      __label__ = 5;
      break;
     case 5:
      var $16 = __lastLabel__ == 4 ? $_pr : $12;
      
      if ($16 < 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 6:
      var $18 = HEAP[_PyExc_OverflowError];
      _PyErr_SetString($18, __str113);
      $0 = 0;
      __label__ = 13;
      break;
     case 7:
      
      
      
      
      
      
      var $25 = $arg_addr;
      if ((HEAP[HEAP[$8 + 4] + 84] & 16777216) != 0) {
        __label__ = 8;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 8:
      var $26 = _PyLong_AsUnsignedLong($25);
      $x = $26;
      
      var $28 = $x == -1;
      if ($28) {
        __label__ = 9;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 9:
      var $29 = _PyErr_Occurred();
      
      if ($29 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 12;
        break;
      }
     case 10:
      $0 = 0;
      __label__ = 13;
      break;
     case 11:
      
      
      
      var $34 = HEAP[HEAP[$25 + 4] + 12];
      var $35 = HEAP[_PyExc_TypeError];
      var $36 = _PyErr_Format($35, __str114, allocate([ $34, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $0 = $36;
      __label__ = 13;
      break;
     case 12:
      
      var $38 = _htonl($x);
      var $39 = _PyLong_FromUnsignedLong($38);
      $0 = $39;
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
  function _socket_inet_aton($self, $args) {
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
      var $buf = __stackBase__;
      var $ip_addr = __stackBase__ + 4;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str116, allocate([ $ip_addr, 0, 0, 0 ], [ "i8**", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $4 = HEAP[$ip_addr];
      var $5 = _inet_aton($4, $buf);
      
      if ($5 != 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $buf3 = $buf;
      var $7 = _PyString_FromStringAndSize($buf3, 4);
      $0 = $7;
      __label__ = 5;
      break;
     case 4:
      var $8 = HEAP[_socket_error];
      _PyErr_SetString($8, __str117);
      $0 = 0;
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
  function _socket_inet_ntoa($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 12;
    _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $packed_str = __stackBase__;
      var $addr_len = __stackBase__ + 4;
      var $packed_addr = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str118, allocate([ $packed_str, 0, 0, 0, $addr_len, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$addr_len] != 4) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $6 = HEAP[_socket_error];
      _PyErr_SetString($6, __str119);
      $0 = 0;
      __label__ = 5;
      break;
     case 4:
      var $7 = HEAP[$addr_len];
      var $8 = HEAP[$packed_str];
      var $packed_addr4 = $packed_addr;
      _llvm_memcpy_p0i8_p0i8_i32($packed_addr4, $8, $7, 1, 0);
      
      var $val = HEAP[$packed_addr];
      var $9 = _inet_ntoa($val);
      var $10 = _PyString_FromString($9);
      $0 = $10;
      __label__ = 5;
      break;
     case 5:
      
      $retval = $0;
      var $retval6 = $retval;
      STACKTOP = __stackBase__;
      return $retval6;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_inet_pton($self, $args) {
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
      var $af = __stackBase__;
      var $ip = __stackBase__ + 4;
      var $retval1;
      var $packed = __stackBase__ + 8;
      $self_addr = $self;
      $args_addr = $args;
      
      var $2 = _PyArg_ParseTuple($args_addr, __str120, allocate([ $af, 0, 0, 0, $ip, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i8**", 0, 0, 0 ], ALLOC_STACK));
      
      if ($2 == 0) {
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
      var $4 = HEAP[$ip];
      var $5 = HEAP[$af];
      var $packed3 = $packed;
      var $6 = _inet_pton($5, $4, $packed3);
      $retval1 = $6;
      
      
      if ($retval1 < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $9 = HEAP[_socket_error];
      var $10 = _PyErr_SetFromErrno($9);
      $0 = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      if ($retval1 == 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 5:
      var $13 = HEAP[_socket_error];
      _PyErr_SetString($13, __str121);
      $0 = 0;
      __label__ = 11;
      break;
     case 6:
      
      
      if (HEAP[$af] == 2) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      var $packed9 = $packed;
      var $16 = _PyString_FromStringAndSize($packed9, 4);
      $0 = $16;
      __label__ = 11;
      break;
     case 8:
      
      
      if (HEAP[$af] == 10) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $packed12 = $packed;
      var $19 = _PyString_FromStringAndSize($packed12, 16);
      $0 = $19;
      __label__ = 11;
      break;
     case 10:
      var $20 = HEAP[_socket_error];
      _PyErr_SetString($20, __str8);
      $0 = 0;
      __label__ = 11;
      break;
     case 11:
      
      $retval = $0;
      var $retval15 = $retval;
      STACKTOP = __stackBase__;
      return $retval15;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_inet_ntop($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 59;
    _memset(__stackBase__, 0, 59);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $af = __stackBase__;
      var $packed = __stackBase__ + 4;
      var $len = __stackBase__ + 8;
      var $retval1;
      var $ip = __stackBase__ + 12;
      $self_addr = $self;
      $args_addr = $args;
      var $1 = $ip;
      _llvm_memset_p0i8_i32($1, 0, 47, 1, 0);
      
      var $3 = _PyArg_ParseTuple($args_addr, __str122, allocate([ $af, 0, 0, 0, $packed, 0, 0, 0, $len, 0, 0, 0 ], [ "i32*", 0, 0, 0, "i8**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      
      
      if (HEAP[$af] == 2) {
        __label__ = 3;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 3:
      
      
      if (HEAP[$len] != 4) {
        __label__ = 4;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 4:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str123);
      $0 = 0;
      __label__ = 12;
      break;
     case 5:
      
      
      if (HEAP[$af] == 10) {
        __label__ = 6;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 6:
      
      
      if (HEAP[$len] != 16) {
        __label__ = 7;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 7:
      var $14 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($14, __str123);
      $0 = 0;
      __label__ = 12;
      break;
     case 8:
      var $15 = HEAP[$af];
      var $16 = HEAP[_PyExc_ValueError];
      var $17 = _PyErr_Format($16, __str124, allocate([ $15, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      $0 = 0;
      __label__ = 12;
      break;
     case 9:
      var $18 = HEAP[$packed];
      var $19 = HEAP[$af];
      var $ip12 = $ip;
      var $20 = _inet_ntop($19, $18, $ip12, 47);
      $retval1 = $20;
      
      if ($20 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 11;
        break;
      }
     case 10:
      var $22 = HEAP[_socket_error];
      var $23 = _PyErr_SetFromErrno($22);
      $0 = 0;
      __label__ = 12;
      break;
     case 11:
      
      var $25 = _PyString_FromString($retval1);
      $0 = $25;
      __label__ = 12;
      break;
     case 12:
      
      $retval = $0;
      var $retval16 = $retval;
      STACKTOP = __stackBase__;
      return $retval16;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_getaddrinfo($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 90;
    _memset(__stackBase__, 0, 90);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $iftmp_366;
      var $0;
      var $hints = __stackBase__;
      var $res;
      var $res0 = __stackBase__ + 32;
      var $hobj = __stackBase__ + 36;
      var $pobj = __stackBase__ + 40;
      var $pbuf = __stackBase__ + 44;
      var $hptr;
      var $pptr;
      var $family = __stackBase__ + 74;
      var $socktype = __stackBase__ + 78;
      var $protocol = __stackBase__ + 82;
      var $flags = __stackBase__ + 86;
      var $error;
      var $all;
      var $single;
      var $idna;
      var $addr;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$res0] = 0;
      HEAP[$hobj] = 0;
      HEAP[$pobj] = 0;
      $all = 0;
      $single = 0;
      $idna = 0;
      HEAP[$flags] = 0;
      var $1 = HEAP[$flags];
      HEAP[$protocol] = $1;
      var $2 = HEAP[$protocol];
      HEAP[$socktype] = $2;
      HEAP[$family] = 0;
      
      var $4 = _PyArg_ParseTuple($args_addr, __str125, allocate([ $hobj, 0, 0, 0, $pobj, 0, 0, 0, $family, 0, 0, 0, $socktype, 0, 0, 0, $protocol, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 == 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $0 = 0;
      __label__ = 53;
      break;
     case 2:
      
      
      if (HEAP[$hobj] == __Py_NoneStruct) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      $hptr = 0;
      __label__ = 11;
      break;
     case 4:
      
      
      
      
      
      
      
      var $15 = HEAP[$hobj];
      if ((HEAP[HEAP[HEAP[$hobj] + 4] + 84] & 268435456) != 0) {
        __label__ = 5;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 5:
      var $16 = _PyObject_CallMethod($15, __str126, __str127, allocate([ __str23, 0, 0, 0 ], [ "i8*", 0, 0, 0 ], ALLOC_STACK));
      $idna = $16;
      
      
      if ($idna == 0) {
        __label__ = 6;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 6:
      $0 = 0;
      __label__ = 53;
      break;
     case 7:
      
      var $20 = _PyString_AsString($idna);
      $hptr = $20;
      __label__ = 11;
      break;
     case 8:
      
      
      
      
      
      
      if ((HEAP[HEAP[$15 + 4] + 84] & 134217728) != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $27 = HEAP[$hobj];
      var $28 = _PyString_AsString($27);
      $hptr = $28;
      __label__ = 11;
      break;
     case 10:
      var $29 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($29, __str128);
      $0 = 0;
      __label__ = 53;
      break;
     case 11:
      
      
      
      
      
      
      
      var $37 = HEAP[$pobj];
      if ((HEAP[HEAP[HEAP[$pobj] + 4] + 84] & 8388608) != 0) {
        __label__ = 12;
        break;
      } else {
        __label__ = 13;
        break;
      }
     case 12:
      var $38 = _PyInt_AsLong($37);
      var $pbuf12 = $pbuf;
      var $39 = _PyOS_snprintf($pbuf12, 30, __str129, allocate([ $38, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      
      $pptr = $pbuf;
      __label__ = 18;
      break;
     case 13:
      
      
      
      
      
      
      var $46 = HEAP[$pobj];
      if ((HEAP[HEAP[$37 + 4] + 84] & 134217728) != 0) {
        __label__ = 14;
        break;
      } else {
        __label__ = 15;
        break;
      }
     case 14:
      var $47 = _PyString_AsString($46);
      $pptr = $47;
      __label__ = 18;
      break;
     case 15:
      
      if ($46 == __Py_NoneStruct) {
        __label__ = 16;
        break;
      } else {
        __label__ = 17;
        break;
      }
     case 16:
      $pptr = 0;
      __label__ = 18;
      break;
     case 17:
      var $49 = HEAP[_socket_error];
      _PyErr_SetString($49, __str130);
      __label__ = 41;
      break;
     case 18:
      var $hints20 = $hints;
      _llvm_memset_p0i8_i32($hints20, 0, 32, 1, 0);
      var $50 = HEAP[$family];
      
      HEAP[$hints + 4] = $50;
      var $52 = HEAP[$socktype];
      
      HEAP[$hints + 8] = $52;
      var $54 = HEAP[$protocol];
      
      HEAP[$hints + 12] = $54;
      var $56 = HEAP[$flags];
      
      HEAP[$hints] = $56;
      
      
      var $60 = _getaddrinfo($hptr, $pptr, $hints, $res0);
      $error = $60;
      
      if ($60 != 0) {
        __label__ = 19;
        break;
      } else {
        __label__ = 20;
        break;
      }
     case 19:
      
      _set_gaierror($error);
      __label__ = 41;
      break;
     case 20:
      var $63 = _PyList_New(0);
      $all = $63;
      
      
      if ($all == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 21;
        break;
      }
     case 21:
      var $66 = HEAP[$res0];
      $res = $66;
      __lastLabel__ = 21;
      __label__ = 34;
      break;
     case 22:
      var $67 = HEAP[$protocol];
      
      
      var $70 = HEAP[$res + 16];
      
      
      var $73 = HEAP[$res + 20];
      var $74 = _makesockaddr(-1, $73, $70, $67);
      $addr = $74;
      
      
      if ($addr == 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 23;
        break;
      }
     case 23:
      
      
      
      
      if (HEAP[$res + 24] != 0) {
        __label__ = 24;
        break;
      } else {
        __label__ = 25;
        break;
      }
     case 24:
      
      
      
      $iftmp_366 = HEAP[$res + 24];
      __label__ = 26;
      break;
     case 25:
      $iftmp_366 = __str12;
      __label__ = 26;
      break;
     case 26:
      
      
      var $86 = HEAP[$res + 12];
      
      
      var $89 = HEAP[$res + 8];
      
      
      var $92 = HEAP[$res + 4];
      
      
      var $95 = _Py_BuildValue(__str131, allocate([ $92, 0, 0, 0, $89, 0, 0, 0, $86, 0, 0, 0, $iftmp_366, 0, 0, 0, $addr, 0, 0, 0 ], [ "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_STACK));
      $single = $95;
      
      
      
      var $99 = HEAP[$addr] - 1;
      
      
      HEAP[$addr] = $99;
      
      
      
      
      if (HEAP[$addr] == 0) {
        __label__ = 27;
        break;
      } else {
        __label__ = 28;
        break;
      }
     case 27:
      
      
      
      
      var $110 = HEAP[HEAP[$addr + 4] + 24];
      
      FUNCTION_TABLE[$110]($addr);
      __label__ = 28;
      break;
     case 28:
      
      
      if ($single == 0) {
        __label__ = 44;
        break;
      } else {
        __label__ = 29;
        break;
      }
     case 29:
      
      
      var $116 = _PyList_Append($all, $single);
      
      if ($116 != 0) {
        __label__ = 41;
        break;
      } else {
        __label__ = 30;
        break;
      }
     case 30:
      
      
      if ($single != 0) {
        __label__ = 31;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 31:
      
      
      
      var $123 = HEAP[$single] - 1;
      
      
      HEAP[$single] = $123;
      
      
      
      
      if (HEAP[$single] == 0) {
        __label__ = 32;
        break;
      } else {
        __label__ = 33;
        break;
      }
     case 32:
      
      
      
      
      var $134 = HEAP[HEAP[$single + 4] + 24];
      
      FUNCTION_TABLE[$134]($single);
      __label__ = 33;
      break;
     case 33:
      
      
      var $138 = HEAP[$res + 28];
      $res = $138;
      __lastLabel__ = 33;
      __label__ = 34;
      break;
     case 34:
      var $139 = __lastLabel__ == 33 ? $138 : $66;
      
      if ($139 != 0) {
        __label__ = 22;
        break;
      } else {
        __label__ = 35;
        break;
      }
     case 35:
      
      
      if ($idna != 0) {
        __label__ = 36;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 36:
      
      
      
      var $146 = HEAP[$idna] - 1;
      
      
      HEAP[$idna] = $146;
      
      
      
      
      if (HEAP[$idna] == 0) {
        __label__ = 37;
        break;
      } else {
        __label__ = 38;
        break;
      }
     case 37:
      
      
      
      
      var $157 = HEAP[HEAP[$idna + 4] + 24];
      
      FUNCTION_TABLE[$157]($idna);
      __label__ = 38;
      break;
     case 38:
      
      
      if (HEAP[$res0] != 0) {
        __label__ = 39;
        break;
      } else {
        __label__ = 40;
        break;
      }
     case 39:
      var $161 = HEAP[$res0];
      _freeaddrinfo($161);
      __label__ = 40;
      break;
     case 40:
      
      $0 = $all;
      __label__ = 53;
      break;
     case 41:
      
      
      if ($single != 0) {
        __label__ = 42;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 42:
      
      
      
      var $167 = HEAP[$single] - 1;
      
      
      HEAP[$single] = $167;
      
      
      
      
      if (HEAP[$single] == 0) {
        __label__ = 43;
        break;
      } else {
        __label__ = 44;
        break;
      }
     case 43:
      
      
      
      
      var $178 = HEAP[HEAP[$single + 4] + 24];
      
      FUNCTION_TABLE[$178]($single);
      __label__ = 44;
      break;
     case 44:
      
      
      if ($all != 0) {
        __label__ = 45;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 45:
      
      
      
      var $185 = HEAP[$all] - 1;
      
      
      HEAP[$all] = $185;
      
      
      
      
      if (HEAP[$all] == 0) {
        __label__ = 46;
        break;
      } else {
        __label__ = 47;
        break;
      }
     case 46:
      
      
      
      
      var $196 = HEAP[HEAP[$all + 4] + 24];
      
      FUNCTION_TABLE[$196]($all);
      __label__ = 47;
      break;
     case 47:
      
      
      if ($idna != 0) {
        __label__ = 48;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 48:
      
      
      
      var $203 = HEAP[$idna] - 1;
      
      
      HEAP[$idna] = $203;
      
      
      
      
      if (HEAP[$idna] == 0) {
        __label__ = 49;
        break;
      } else {
        __label__ = 50;
        break;
      }
     case 49:
      
      
      
      
      var $214 = HEAP[HEAP[$idna + 4] + 24];
      
      FUNCTION_TABLE[$214]($idna);
      __label__ = 50;
      break;
     case 50:
      
      
      if (HEAP[$res0] != 0) {
        __label__ = 51;
        break;
      } else {
        __label__ = 52;
        break;
      }
     case 51:
      var $218 = HEAP[$res0];
      _freeaddrinfo($218);
      __label__ = 52;
      break;
     case 52:
      $0 = 0;
      __label__ = 53;
      break;
     case 53:
      
      $retval = $0;
      var $retval55 = $retval;
      STACKTOP = __stackBase__;
      return $retval55;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_getnameinfo($self, $args) {
    var __stackBase__ = STACKTOP;
    STACKTOP += 1117;
    _memset(__stackBase__, 0, 1117);
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $args_addr;
      var $retval;
      var $0;
      var $sa = __stackBase__;
      var $flags = __stackBase__ + 4;
      var $hostp = __stackBase__ + 8;
      var $port = __stackBase__ + 12;
      var $flowinfo = __stackBase__ + 16;
      var $scope_id = __stackBase__ + 20;
      var $hbuf = __stackBase__ + 24;
      var $pbuf = __stackBase__ + 1049;
      var $hints = __stackBase__ + 1081;
      var $res = __stackBase__ + 1113;
      var $error;
      var $ret;
      var $sin6;
      $self_addr = $self;
      $args_addr = $args;
      HEAP[$sa] = 0;
      HEAP[$res] = 0;
      $ret = 0;
      HEAP[$scope_id] = 0;
      var $1 = HEAP[$scope_id];
      HEAP[$flowinfo] = $1;
      var $2 = HEAP[$flowinfo];
      HEAP[$flags] = $2;
      
      var $4 = _PyArg_ParseTuple($args_addr, __str132, allocate([ $sa, 0, 0, 0, $flags, 0, 0, 0 ], [ "%struct.PyObject**", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
      if ($4 == 0) {
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
      
      
      
      
      
      
      
      if ((HEAP[HEAP[HEAP[$sa] + 4] + 84] & 67108864) == 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 3:
      var $13 = HEAP[_PyExc_TypeError];
      _PyErr_SetString($13, __str133);
      $0 = 0;
      __label__ = 20;
      break;
     case 4:
      var $14 = HEAP[$sa];
      var $15 = _PyArg_ParseTuple($14, __str134, allocate([ $hostp, 0, 0, 0, $port, 0, 0, 0, $flowinfo, 0, 0, 0, $scope_id, 0, 0, 0 ], [ "i8**", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0, "i32*", 0, 0, 0 ], ALLOC_STACK));
      
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
      var $17 = HEAP[$port];
      var $pbuf6 = $pbuf;
      var $18 = _PyOS_snprintf($pbuf6, 32, __str135, allocate([ $17, 0, 0, 0 ], [ "i32", 0, 0, 0 ], ALLOC_STACK));
      var $19 = $hints + 8;
      var $20 = $hints;
      _llvm_memset_p0i8_i64($20, 0, 32, 1, 0);
      HEAP[$19] = 2;
      var $21 = HEAP[$hostp];
      var $pbuf8 = $pbuf;
      var $22 = _getaddrinfo($21, $pbuf8, $hints, $res);
      $error = $22;
      
      
      if ($error != 0) {
        __label__ = 7;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 7:
      
      _set_gaierror($error);
      __label__ = 17;
      break;
     case 8:
      
      
      
      
      if (HEAP[HEAP[$res] + 28] != 0) {
        __label__ = 9;
        break;
      } else {
        __label__ = 10;
        break;
      }
     case 9:
      var $30 = HEAP[_socket_error];
      _PyErr_SetString($30, __str136);
      __label__ = 17;
      break;
     case 10:
      
      
      var $33 = HEAP[HEAP[$res] + 4];
      if ($33 == 2) {
        __label__ = 11;
        break;
      } else if ($33 == 10) {
        __label__ = 13;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 11:
      
      
      
      
      
      if (HEAP[HEAP[$sa] + 8] != 2) {
        __label__ = 12;
        break;
      } else {
        __label__ = 14;
        break;
      }
     case 12:
      var $39 = HEAP[_socket_error];
      _PyErr_SetString($39, __str137);
      __label__ = 17;
      break;
     case 13:
      
      
      
      
      $sin6 = HEAP[HEAP[$res] + 20];
      var $44 = HEAP[$flowinfo];
      
      
      HEAP[$sin6 + 4] = $44;
      var $47 = HEAP[$scope_id];
      
      
      HEAP[$sin6 + 24] = $47;
      __label__ = 14;
      break;
     case 14:
      var $50 = HEAP[$flags];
      
      
      var $53 = HEAP[HEAP[$res] + 16];
      
      
      var $56 = HEAP[HEAP[$res] + 20];
      var $hbuf18 = $hbuf;
      var $pbuf19 = $pbuf;
      var $57 = _getnameinfo($56, $53, $hbuf18, 1025, $pbuf19, 32, $50);
      $error = $57;
      
      if ($57 != 0) {
        __label__ = 15;
        break;
      } else {
        __label__ = 16;
        break;
      }
     case 15:
      
      _set_gaierror($error);
      __label__ = 17;
      break;
     case 16:
      var $hbuf22 = $hbuf;
      var $pbuf23 = $pbuf;
      var $60 = _Py_BuildValue(__str138, allocate([ $hbuf22, 0, 0, 0, $pbuf23, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i8*", 0, 0, 0 ], ALLOC_STACK));
      $ret = $60;
      __label__ = 17;
      break;
     case 17:
      
      
      if (HEAP[$res] != 0) {
        __label__ = 18;
        break;
      } else {
        __label__ = 19;
        break;
      }
     case 18:
      var $63 = HEAP[$res];
      _freeaddrinfo($63);
      __label__ = 19;
      break;
     case 19:
      
      $0 = $ret;
      __label__ = 20;
      break;
     case 20:
      
      $retval = $0;
      var $retval27 = $retval;
      STACKTOP = __stackBase__;
      return $retval27;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  function _socket_getdefaulttimeout($self) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $retval;
      var $0;
      $self_addr = $self;
      
      
      if (HEAP[_defaulttimeout] < 0) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      
      var $4 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $4;
      $0 = __Py_NoneStruct;
      __label__ = 3;
      break;
     case 2:
      var $5 = HEAP[_defaulttimeout];
      var $6 = _PyFloat_FromDouble($5);
      $0 = $6;
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
  function _socket_setdefaulttimeout($self, $arg) {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $self_addr;
      var $arg_addr;
      var $retval;
      var $0;
      var $timeout;
      $self_addr = $self;
      $arg_addr = $arg;
      
      
      if ($arg_addr == __Py_NoneStruct) {
        __label__ = 1;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 1:
      $timeout = -1;
      __label__ = 6;
      break;
     case 2:
      
      var $4 = _PyFloat_AsDouble($arg_addr);
      $timeout = $4;
      
      
      if ($timeout < 0) {
        __label__ = 3;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 3:
      var $7 = _PyErr_Occurred();
      
      if ($7 == 0) {
        __label__ = 4;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 4:
      var $9 = HEAP[_PyExc_ValueError];
      _PyErr_SetString($9, __str36);
      __label__ = 5;
      break;
     case 5:
      $0 = 0;
      __label__ = 7;
      break;
     case 6:
      
      HEAP[_defaulttimeout] = $timeout;
      
      var $12 = HEAP[__Py_NoneStruct] + 1;
      HEAP[__Py_NoneStruct] = $12;
      $0 = __Py_NoneStruct;
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
  function _os_init() {
    
    var $retval;
    var $0;
    $0 = 1;
    
    $retval = $0;
    var $retval1 = $retval;
    return $retval1;
  }
  function _init_socket() {
    var __label__;
    __label__ = -1;
    while (1) switch (__label__) {
     case -1:
      var $m;
      var $has_ipv6;
      var $0 = _os_init();
      
      if ($0 == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 1;
        break;
      }
     case 1:
      HEAP[_sock_type + 4] = _PyType_Type;
      var $2 = _Py_InitModule4(__str160, _socket_methods, _socket_doc, 0, 1013);
      $m = $2;
      
      
      if ($m == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 2;
        break;
      }
     case 2:
      var $5 = HEAP[_PyExc_IOError];
      var $6 = _PyErr_NewException(__str161, $5, 0);
      HEAP[_socket_error] = $6;
      
      
      if (HEAP[_socket_error] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 3;
        break;
      }
     case 3:
      var $9 = HEAP[_socket_error];
      HEAP[_PySocketModuleAPI + 4] = $9;
      
      
      
      var $13 = HEAP[HEAP[_socket_error]] + 1;
      var $14 = HEAP[_socket_error];
      HEAP[$14] = $13;
      var $15 = HEAP[_socket_error];
      
      var $17 = _PyModule_AddObject($m, __str162, $15);
      var $18 = HEAP[_socket_error];
      var $19 = _PyErr_NewException(__str163, $18, 0);
      HEAP[_socket_herror] = $19;
      
      
      if (HEAP[_socket_herror] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 4;
        break;
      }
     case 4:
      
      
      
      var $25 = HEAP[HEAP[_socket_herror]] + 1;
      var $26 = HEAP[_socket_herror];
      HEAP[$26] = $25;
      var $27 = HEAP[_socket_herror];
      
      var $29 = _PyModule_AddObject($m, __str164, $27);
      var $30 = HEAP[_socket_error];
      var $31 = _PyErr_NewException(__str165, $30, 0);
      HEAP[_socket_gaierror] = $31;
      
      
      if (HEAP[_socket_gaierror] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 5;
        break;
      }
     case 5:
      
      
      
      var $37 = HEAP[HEAP[_socket_gaierror]] + 1;
      var $38 = HEAP[_socket_gaierror];
      HEAP[$38] = $37;
      var $39 = HEAP[_socket_gaierror];
      
      var $41 = _PyModule_AddObject($m, __str166, $39);
      var $42 = HEAP[_socket_error];
      var $43 = _PyErr_NewException(__str167, $42, 0);
      HEAP[_socket_timeout] = $43;
      
      
      if (HEAP[_socket_timeout] == 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 6;
        break;
      }
     case 6:
      
      
      
      var $49 = HEAP[HEAP[_socket_timeout]] + 1;
      var $50 = HEAP[_socket_timeout];
      HEAP[$50] = $49;
      var $51 = HEAP[_socket_timeout];
      
      var $53 = _PyModule_AddObject($m, __str94, $51);
      
      var $55 = HEAP[_sock_type] + 1;
      HEAP[_sock_type] = $55;
      
      var $57 = _PyModule_AddObject($m, __str168, _sock_type);
      
      if ($57 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 7;
        break;
      }
     case 7:
      
      var $60 = HEAP[_sock_type] + 1;
      HEAP[_sock_type] = $60;
      
      var $62 = _PyModule_AddObject($m, __str169, _sock_type);
      
      if ($62 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 8;
        break;
      }
     case 8:
      $has_ipv6 = __Py_TrueStruct;
      
      
      
      var $67 = HEAP[$has_ipv6] + 1;
      
      
      HEAP[$has_ipv6] = $67;
      
      
      var $72 = _PyModule_AddObject($m, __str170, $has_ipv6);
      var $73 = _PyCapsule_New(_PySocketModuleAPI, __str171, 0);
      
      var $75 = _PyModule_AddObject($m, __str172, $73);
      
      if ($75 != 0) {
        __label__ = 10;
        break;
      } else {
        __label__ = 9;
        break;
      }
     case 9:
      
      var $78 = _PyModule_AddIntConstant($m, __str173, 0);
      
      var $80 = _PyModule_AddIntConstant($m, __str174, 2);
      
      var $82 = _PyModule_AddIntConstant($m, __str175, 10);
      
      var $84 = _PyModule_AddIntConstant($m, __str176, 1);
      
      var $86 = _PyModule_AddIntConstant($m, __str177, 3);
      
      var $88 = _PyModule_AddIntConstant($m, __str178, 4);
      
      var $90 = _PyModule_AddIntConstant($m, __str179, 5);
      
      var $92 = _PyModule_AddIntConstant($m, __str180, 6);
      
      var $94 = _PyModule_AddIntConstant($m, __str181, 7);
      
      var $96 = _PyModule_AddIntConstant($m, __str182, 8);
      
      var $98 = _PyModule_AddIntConstant($m, __str183, 9);
      
      var $100 = _PyModule_AddIntConstant($m, __str175, 10);
      
      var $102 = _PyModule_AddIntConstant($m, __str184, 11);
      
      var $104 = _PyModule_AddIntConstant($m, __str185, 12);
      
      var $106 = _PyModule_AddIntConstant($m, __str186, 13);
      
      var $108 = _PyModule_AddIntConstant($m, __str187, 14);
      
      var $110 = _PyModule_AddIntConstant($m, __str188, 15);
      
      var $112 = _PyModule_AddIntConstant($m, __str189, 16);
      
      var $114 = _PyModule_AddIntConstant($m, __str190, 0);
      
      var $116 = _PyModule_AddIntConstant($m, __str191, 2);
      
      var $118 = _PyModule_AddIntConstant($m, __str192, 3);
      
      var $120 = _PyModule_AddIntConstant($m, __str193, 5);
      
      var $122 = _PyModule_AddIntConstant($m, __str194, 6);
      
      var $124 = _PyModule_AddIntConstant($m, __str195, 13);
      
      var $126 = _PyModule_AddIntConstant($m, __str196, 14);
      
      var $128 = _PyModule_AddIntConstant($m, __str197, 16);
      
      var $130 = _PyModule_AddIntConstant($m, __str198, 18);
      
      var $132 = _PyModule_AddIntConstant($m, __str199, 19);
      
      var $134 = _PyModule_AddIntConstant($m, __str200, 20);
      
      var $136 = _PyModule_AddIntConstant($m, __str201, 22);
      
      var $138 = _PyModule_AddIntConstant($m, __str202, 23);
      
      var $140 = _PyModule_AddIntConstant($m, __str203, 24);
      
      var $142 = _PyModule_AddIntConstant($m, __str204, 25);
      
      var $144 = _PyModule_AddIntConstant($m, __str205, 26);
      
      var $146 = _PyModule_AddIntConstant($m, __str206, 17);
      
      var $148 = _PyModule_AddIntConstant($m, __str207, 17);
      
      var $150 = _PyModule_AddIntConstant($m, __str208, 0);
      
      var $152 = _PyModule_AddIntConstant($m, __str209, 1);
      
      var $154 = _PyModule_AddIntConstant($m, __str210, 2);
      
      var $156 = _PyModule_AddIntConstant($m, __str211, 3);
      
      var $158 = _PyModule_AddIntConstant($m, __str212, 4);
      
      var $160 = _PyModule_AddIntConstant($m, __str213, 5);
      
      var $162 = _PyModule_AddIntConstant($m, __str214, 6);
      
      var $164 = _PyModule_AddIntConstant($m, __str215, 30);
      
      var $166 = _PyModule_AddIntConstant($m, __str216, 1);
      
      var $168 = _PyModule_AddIntConstant($m, __str217, 2);
      
      var $170 = _PyModule_AddIntConstant($m, __str218, 3);
      
      var $172 = _PyModule_AddIntConstant($m, __str219, 1);
      
      var $174 = _PyModule_AddIntConstant($m, __str220, 2);
      
      var $176 = _PyModule_AddIntConstant($m, __str221, 3);
      
      var $178 = _PyModule_AddIntConstant($m, __str222, 271);
      
      var $180 = _PyModule_AddIntConstant($m, __str223, 127);
      
      var $182 = _PyModule_AddIntConstant($m, __str224, 128);
      
      var $184 = _PyModule_AddIntConstant($m, __str225, 129);
      
      var $186 = _PyModule_AddIntConstant($m, __str226, 130);
      
      var $188 = _PyModule_AddIntConstant($m, __str227, 0);
      
      var $190 = _PyModule_AddIntConstant($m, __str228, 1);
      
      var $192 = _PyModule_AddIntConstant($m, __str229, 2);
      
      var $194 = _PyModule_AddIntConstant($m, __str230, 3);
      
      var $196 = _PyModule_AddIntConstant($m, __str231, 1);
      
      var $198 = _PyModule_AddIntConstant($m, __str232, 2);
      
      var $200 = _PyModule_AddIntConstant($m, __str233, 4);
      
      var $202 = _PyModule_AddIntConstant($m, __str234, -1);
      
      var $204 = _PyModule_AddIntConstant($m, __str235, 1);
      
      var $206 = _PyModule_AddIntConstant($m, __str236, 2);
      
      var $208 = _PyModule_AddIntConstant($m, __str237, 3);
      
      var $210 = _PyModule_AddIntConstant($m, __str238, 0);
      
      var $212 = _PyModule_AddIntConstant($m, __str239, 1);
      
      var $214 = _PyModule_AddIntConstant($m, __str240, 1);
      
      var $216 = _PyModule_AddIntConstant($m, __str241, 2);
      
      var $218 = _PyModule_AddIntConstant($m, __str242, 3);
      
      var $220 = _PyModule_AddIntConstant($m, __str243, 5);
      
      var $222 = _PyModule_AddIntConstant($m, __str244, 4);
      
      var $224 = _PyModule_AddIntConstant($m, __str245, 1);
      
      var $226 = _PyModule_AddIntConstant($m, __str246, 30);
      
      var $228 = _PyModule_AddIntConstant($m, __str247, 2);
      
      var $230 = _PyModule_AddIntConstant($m, __str248, 9);
      
      var $232 = _PyModule_AddIntConstant($m, __str249, 5);
      
      var $234 = _PyModule_AddIntConstant($m, __str250, 6);
      
      var $236 = _PyModule_AddIntConstant($m, __str251, 13);
      
      var $238 = _PyModule_AddIntConstant($m, __str252, 10);
      
      var $240 = _PyModule_AddIntConstant($m, __str253, 7);
      
      var $242 = _PyModule_AddIntConstant($m, __str254, 8);
      
      var $244 = _PyModule_AddIntConstant($m, __str255, 19);
      
      var $246 = _PyModule_AddIntConstant($m, __str256, 18);
      
      var $248 = _PyModule_AddIntConstant($m, __str257, 21);
      
      var $250 = _PyModule_AddIntConstant($m, __str258, 20);
      
      var $252 = _PyModule_AddIntConstant($m, __str259, 4);
      
      var $254 = _PyModule_AddIntConstant($m, __str260, 3);
      
      var $256 = _PyModule_AddIntConstant($m, __str261, 128);
      
      var $258 = _PyModule_AddIntConstant($m, __str262, 1);
      
      var $260 = _PyModule_AddIntConstant($m, __str263, 2);
      
      var $262 = _PyModule_AddIntConstant($m, __str264, 4);
      
      var $264 = _PyModule_AddIntConstant($m, __str265, 64);
      
      var $266 = _PyModule_AddIntConstant($m, __str266, 128);
      
      var $268 = _PyModule_AddIntConstant($m, __str267, 32);
      
      var $270 = _PyModule_AddIntConstant($m, __str268, 8);
      
      var $272 = _PyModule_AddIntConstant($m, __str269, 256);
      
      var $274 = _PyModule_AddIntConstant($m, __str270, 1);
      
      var $276 = _PyModule_AddIntConstant($m, __str271, 0);
      
      var $278 = _PyModule_AddIntConstant($m, __str272, 6);
      
      var $280 = _PyModule_AddIntConstant($m, __str273, 17);
      
      var $282 = _PyModule_AddIntConstant($m, __str274, 0);
      
      var $284 = _PyModule_AddIntConstant($m, __str275, 0);
      
      var $286 = _PyModule_AddIntConstant($m, __str276, 1);
      
      var $288 = _PyModule_AddIntConstant($m, __str277, 2);
      
      var $290 = _PyModule_AddIntConstant($m, __str278, 41);
      
      var $292 = _PyModule_AddIntConstant($m, __str279, 4);
      
      var $294 = _PyModule_AddIntConstant($m, __str280, 6);
      
      var $296 = _PyModule_AddIntConstant($m, __str281, 8);
      
      var $298 = _PyModule_AddIntConstant($m, __str282, 12);
      
      var $300 = _PyModule_AddIntConstant($m, __str283, 17);
      
      var $302 = _PyModule_AddIntConstant($m, __str284, 22);
      
      var $304 = _PyModule_AddIntConstant($m, __str285, 29);
      
      var $306 = _PyModule_AddIntConstant($m, __str278, 41);
      
      var $308 = _PyModule_AddIntConstant($m, __str286, 43);
      
      var $310 = _PyModule_AddIntConstant($m, __str287, 44);
      
      var $312 = _PyModule_AddIntConstant($m, __str288, 46);
      
      var $314 = _PyModule_AddIntConstant($m, __str289, 47);
      
      var $316 = _PyModule_AddIntConstant($m, __str290, 50);
      
      var $318 = _PyModule_AddIntConstant($m, __str291, 51);
      
      var $320 = _PyModule_AddIntConstant($m, __str292, 58);
      
      var $322 = _PyModule_AddIntConstant($m, __str293, 59);
      
      var $324 = _PyModule_AddIntConstant($m, __str294, 60);
      
      var $326 = _PyModule_AddIntConstant($m, __str295, 103);
      
      var $328 = _PyModule_AddIntConstant($m, __str296, 255);
      
      var $330 = _PyModule_AddIntConstant($m, __str297, 1024);
      
      var $332 = _PyModule_AddIntConstant($m, __str298, 5e3);
      
      var $334 = _PyModule_AddIntConstant($m, __str299, 0);
      
      var $336 = _PyModule_AddIntConstant($m, __str300, -1);
      
      var $338 = _PyModule_AddIntConstant($m, __str301, 2130706433);
      
      var $340 = _PyModule_AddIntConstant($m, __str302, -536870912);
      
      var $342 = _PyModule_AddIntConstant($m, __str303, -536870911);
      
      var $344 = _PyModule_AddIntConstant($m, __str304, -536870657);
      
      var $346 = _PyModule_AddIntConstant($m, __str305, -1);
      
      var $348 = _PyModule_AddIntConstant($m, __str306, 4);
      
      var $350 = _PyModule_AddIntConstant($m, __str307, 3);
      
      var $352 = _PyModule_AddIntConstant($m, __str308, 1);
      
      var $354 = _PyModule_AddIntConstant($m, __str309, 2);
      
      var $356 = _PyModule_AddIntConstant($m, __str310, 6);
      
      var $358 = _PyModule_AddIntConstant($m, __str311, 7);
      
      var $360 = _PyModule_AddIntConstant($m, __str312, 7);
      
      var $362 = _PyModule_AddIntConstant($m, __str313, 32);
      
      var $364 = _PyModule_AddIntConstant($m, __str314, 33);
      
      var $366 = _PyModule_AddIntConstant($m, __str315, 34);
      
      var $368 = _PyModule_AddIntConstant($m, __str316, 35);
      
      var $370 = _PyModule_AddIntConstant($m, __str317, 36);
      
      var $372 = _PyModule_AddIntConstant($m, __str318, 1);
      
      var $374 = _PyModule_AddIntConstant($m, __str319, 1);
      
      var $376 = _PyModule_AddIntConstant($m, __str320, 20);
      
      var $378 = _PyModule_AddIntConstant($m, __str321, 20);
      
      var $380 = _PyModule_AddIntConstant($m, __str322, 21);
      
      var $382 = _PyModule_AddIntConstant($m, __str323, 18);
      
      var $384 = _PyModule_AddIntConstant($m, __str324, 17);
      
      var $386 = _PyModule_AddIntConstant($m, __str325, 19);
      
      var $388 = _PyModule_AddIntConstant($m, __str326, 16);
      
      var $390 = _PyModule_AddIntConstant($m, __str327, 26);
      
      var $392 = _PyModule_AddIntConstant($m, __str328, 7);
      
      var $394 = _PyModule_AddIntConstant($m, __str329, 59);
      
      var $396 = _PyModule_AddIntConstant($m, __str330, 52);
      
      var $398 = _PyModule_AddIntConstant($m, __str331, 54);
      
      var $400 = _PyModule_AddIntConstant($m, __str332, 9);
      
      var $402 = _PyModule_AddIntConstant($m, __str333, 50);
      
      var $404 = _PyModule_AddIntConstant($m, __str334, 58);
      
      var $406 = _PyModule_AddIntConstant($m, __str335, 51);
      
      var $408 = _PyModule_AddIntConstant($m, __str336, 53);
      
      var $410 = _PyModule_AddIntConstant($m, __str337, 49);
      
      var $412 = _PyModule_AddIntConstant($m, __str338, 56);
      
      var $414 = _PyModule_AddIntConstant($m, __str339, 66);
      
      var $416 = _PyModule_AddIntConstant($m, __str340, 57);
      
      var $418 = _PyModule_AddIntConstant($m, __str341, 55);
      
      var $420 = _PyModule_AddIntConstant($m, __str342, 0);
      
      var $422 = _PyModule_AddIntConstant($m, __str343, 67);
      
      var $424 = _PyModule_AddIntConstant($m, __str344, 1);
      
      var $426 = _PyModule_AddIntConstant($m, __str345, 2);
      
      var $428 = _PyModule_AddIntConstant($m, __str346, 3);
      
      var $430 = _PyModule_AddIntConstant($m, __str347, 4);
      
      var $432 = _PyModule_AddIntConstant($m, __str348, 5);
      
      var $434 = _PyModule_AddIntConstant($m, __str349, 6);
      
      var $436 = _PyModule_AddIntConstant($m, __str350, 7);
      
      var $438 = _PyModule_AddIntConstant($m, __str351, 8);
      
      var $440 = _PyModule_AddIntConstant($m, __str352, 9);
      
      var $442 = _PyModule_AddIntConstant($m, __str353, 10);
      
      var $444 = _PyModule_AddIntConstant($m, __str354, 11);
      
      var $446 = _PyModule_AddIntConstant($m, __str355, 12);
      
      var $448 = _PyModule_AddIntConstant($m, __str356, -9);
      
      var $450 = _PyModule_AddIntConstant($m, __str357, -3);
      
      var $452 = _PyModule_AddIntConstant($m, __str358, -1);
      
      var $454 = _PyModule_AddIntConstant($m, __str359, -4);
      
      var $456 = _PyModule_AddIntConstant($m, __str360, -6);
      
      var $458 = _PyModule_AddIntConstant($m, __str361, -10);
      
      var $460 = _PyModule_AddIntConstant($m, __str362, -5);
      
      var $462 = _PyModule_AddIntConstant($m, __str363, -2);
      
      var $464 = _PyModule_AddIntConstant($m, __str364, -12);
      
      var $466 = _PyModule_AddIntConstant($m, __str365, -8);
      
      var $468 = _PyModule_AddIntConstant($m, __str366, -7);
      
      var $470 = _PyModule_AddIntConstant($m, __str367, -11);
      
      var $472 = _PyModule_AddIntConstant($m, __str368, 1);
      
      var $474 = _PyModule_AddIntConstant($m, __str369, 2);
      
      var $476 = _PyModule_AddIntConstant($m, __str370, 4);
      
      var $478 = _PyModule_AddIntConstant($m, __str371, 1024);
      
      var $480 = _PyModule_AddIntConstant($m, __str372, 16);
      
      var $482 = _PyModule_AddIntConstant($m, __str373, 32);
      
      var $484 = _PyModule_AddIntConstant($m, __str374, 8);
      
      var $486 = _PyModule_AddIntConstant($m, __str375, 1025);
      
      var $488 = _PyModule_AddIntConstant($m, __str376, 32);
      
      var $490 = _PyModule_AddIntConstant($m, __str377, 4);
      
      var $492 = _PyModule_AddIntConstant($m, __str378, 1);
      
      var $494 = _PyModule_AddIntConstant($m, __str379, 8);
      
      var $496 = _PyModule_AddIntConstant($m, __str380, 2);
      
      var $498 = _PyModule_AddIntConstant($m, __str381, 16);
      
      var $500 = _PyModule_AddIntConstant($m, __str382, 0);
      
      var $502 = _PyModule_AddIntConstant($m, __str383, 1);
      
      var $504 = _PyModule_AddIntConstant($m, __str384, 2);
      __label__ = 10;
      break;
     case 10:
      return;
     default:
      assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_socket"] = _init_socket;
  FUNCTION_TABLE = FUNCTION_TABLE.concat([ 0, 0, _set_error, 0, _fclose, 0, _sock_accept, 0, _sock_bind, 0, _sock_close, 0, _sock_connect, 0, _sock_connect_ex, 0, _sock_dup, 0, _sock_fileno, 0, _sock_getpeername, 0, _sock_getsockname, 0, _sock_getsockopt, 0, _sock_listen, 0, _sock_makefile, 0, _sock_recv, 0, _sock_recv_into, 0, _sock_recvfrom, 0, _sock_recvfrom_into, 0, _sock_send, 0, _sock_sendall, 0, _sock_sendto, 0, _sock_setblocking, 0, _sock_settimeout, 0, _sock_gettimeout, 0, _sock_setsockopt, 0, _sock_shutdown, 0, _sock_dealloc, 0, _sock_repr, 0, _PyObject_GenericGetAttr, 0, _sock_initobj, 0, _PyType_GenericAlloc, 0, _sock_new, 0, _PyObject_Free, 0, _socket_gethostbyname, 0, _socket_gethostbyname_ex, 0, _socket_gethostbyaddr, 0, _socket_gethostname, 0, _socket_getservbyname, 0, _socket_getservbyport, 0, _socket_getprotobyname, 0, _socket_fromfd, 0, _socket_socketpair, 0, _socket_ntohs, 0, _socket_ntohl, 0, _socket_htons, 0, _socket_htonl, 0, _socket_inet_aton, 0, _socket_inet_ntoa, 0, _socket_inet_pton, 0, _socket_inet_ntop, 0, _socket_getaddrinfo, 0, _socket_getnameinfo, 0, _socket_getdefaulttimeout, 0, _socket_setdefaulttimeout, 0 ]);
  function run(args) {
    _sock_doc = allocate([ 115, 111, 99, 107, 101, 116, 40, 91, 102, 97, 109, 105, 108, 121, 91, 44, 32, 116, 121, 112, 101, 91, 44, 32, 112, 114, 111, 116, 111, 93, 93, 93, 41, 32, 45, 62, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 79, 112, 101, 110, 32, 97, 32, 115, 111, 99, 107, 101, 116, 32, 111, 102, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 116, 121, 112, 101, 46, 32, 32, 84, 104, 101, 32, 102, 97, 109, 105, 108, 121, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 116, 104, 101, 10, 97, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 59, 32, 105, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 65, 70, 95, 73, 78, 69, 84, 46, 32, 32, 84, 104, 101, 32, 116, 121, 112, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 10, 119, 104, 101, 116, 104, 101, 114, 32, 116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 115, 116, 114, 101, 97, 109, 32, 40, 83, 79, 67, 75, 95, 83, 84, 82, 69, 65, 77, 44, 32, 116, 104, 105, 115, 32, 105, 115, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 41, 10, 111, 114, 32, 100, 97, 116, 97, 103, 114, 97, 109, 32, 40, 83, 79, 67, 75, 95, 68, 71, 82, 65, 77, 41, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 84, 104, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 100, 101, 102, 97, 117, 108, 116, 115, 32, 116, 111, 32, 48, 44, 10, 115, 112, 101, 99, 105, 102, 121, 105, 110, 103, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 112, 114, 111, 116, 111, 99, 111, 108, 46, 32, 32, 75, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 97, 99, 99, 101, 112, 116, 101, 100, 46, 10, 10, 65, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 115, 32, 111, 110, 101, 32, 101, 110, 100, 112, 111, 105, 110, 116, 32, 111, 102, 32, 97, 32, 110, 101, 116, 119, 111, 114, 107, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 46, 10, 10, 77, 101, 116, 104, 111, 100, 115, 32, 111, 102, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 32, 40, 107, 101, 121, 119, 111, 114, 100, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 110, 111, 116, 32, 97, 108, 108, 111, 119, 101, 100, 41, 58, 10, 10, 97, 99, 99, 101, 112, 116, 40, 41, 32, 45, 45, 32, 97, 99, 99, 101, 112, 116, 32, 97, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 44, 32, 114, 101, 116, 117, 114, 110, 105, 110, 103, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 97, 110, 100, 32, 99, 108, 105, 101, 110, 116, 32, 97, 100, 100, 114, 101, 115, 115, 10, 98, 105, 110, 100, 40, 97, 100, 100, 114, 41, 32, 45, 45, 32, 98, 105, 110, 100, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 111, 32, 97, 32, 108, 111, 99, 97, 108, 32, 97, 100, 100, 114, 101, 115, 115, 10, 99, 108, 111, 115, 101, 40, 41, 32, 45, 45, 32, 99, 108, 111, 115, 101, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 10, 99, 111, 110, 110, 101, 99, 116, 40, 97, 100, 100, 114, 41, 32, 45, 45, 32, 99, 111, 110, 110, 101, 99, 116, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 111, 32, 97, 32, 114, 101, 109, 111, 116, 101, 32, 97, 100, 100, 114, 101, 115, 115, 10, 99, 111, 110, 110, 101, 99, 116, 95, 101, 120, 40, 97, 100, 100, 114, 41, 32, 45, 45, 32, 99, 111, 110, 110, 101, 99, 116, 44, 32, 114, 101, 116, 117, 114, 110, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 99, 111, 100, 101, 32, 105, 110, 115, 116, 101, 97, 100, 32, 111, 102, 32, 97, 110, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 10, 100, 117, 112, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 32, 105, 100, 101, 110, 116, 105, 99, 97, 108, 32, 116, 111, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 111, 110, 101, 32, 91, 42, 93, 10, 102, 105, 108, 101, 110, 111, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 117, 110, 100, 101, 114, 108, 121, 105, 110, 103, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 10, 103, 101, 116, 112, 101, 101, 114, 110, 97, 109, 101, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 109, 111, 116, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 91, 42, 93, 10, 103, 101, 116, 115, 111, 99, 107, 110, 97, 109, 101, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 108, 111, 99, 97, 108, 32, 97, 100, 100, 114, 101, 115, 115, 10, 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 40, 108, 101, 118, 101, 108, 44, 32, 111, 112, 116, 110, 97, 109, 101, 91, 44, 32, 98, 117, 102, 108, 101, 110, 93, 41, 32, 45, 45, 32, 103, 101, 116, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 116, 105, 111, 110, 115, 10, 103, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 116, 105, 109, 101, 111, 117, 116, 32, 111, 114, 32, 78, 111, 110, 101, 10, 108, 105, 115, 116, 101, 110, 40, 110, 41, 32, 45, 45, 32, 115, 116, 97, 114, 116, 32, 108, 105, 115, 116, 101, 110, 105, 110, 103, 32, 102, 111, 114, 32, 105, 110, 99, 111, 109, 105, 110, 103, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 115, 10, 109, 97, 107, 101, 102, 105, 108, 101, 40, 91, 109, 111, 100, 101, 44, 32, 91, 98, 117, 102, 115, 105, 122, 101, 93, 93, 41, 32, 45, 45, 32, 114, 101, 116, 117, 114, 110, 32, 97, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 102, 111, 114, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 91, 42, 93, 10, 114, 101, 99, 118, 40, 98, 117, 102, 108, 101, 110, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 45, 32, 114, 101, 99, 101, 105, 118, 101, 32, 100, 97, 116, 97, 10, 114, 101, 99, 118, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 91, 44, 32, 110, 98, 121, 116, 101, 115, 91, 44, 32, 102, 108, 97, 103, 115, 93, 93, 41, 32, 45, 45, 32, 114, 101, 99, 101, 105, 118, 101, 32, 100, 97, 116, 97, 32, 40, 105, 110, 116, 111, 32, 97, 32, 98, 117, 102, 102, 101, 114, 41, 10, 114, 101, 99, 118, 102, 114, 111, 109, 40, 98, 117, 102, 108, 101, 110, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 45, 32, 114, 101, 99, 101, 105, 118, 101, 32, 100, 97, 116, 97, 32, 97, 110, 100, 32, 115, 101, 110, 100, 101, 114, 39, 115, 32, 97, 100, 100, 114, 101, 115, 115, 10, 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 91, 44, 32, 110, 98, 121, 116, 101, 115, 44, 32, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 10, 32, 32, 45, 45, 32, 114, 101, 99, 101, 105, 118, 101, 32, 100, 97, 116, 97, 32, 97, 110, 100, 32, 115, 101, 110, 100, 101, 114, 39, 115, 32, 97, 100, 100, 114, 101, 115, 115, 32, 40, 105, 110, 116, 111, 32, 97, 32, 98, 117, 102, 102, 101, 114, 41, 10, 115, 101, 110, 100, 97, 108, 108, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 45, 32, 115, 101, 110, 100, 32, 97, 108, 108, 32, 100, 97, 116, 97, 10, 115, 101, 110, 100, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 45, 32, 115, 101, 110, 100, 32, 100, 97, 116, 97, 44, 32, 109, 97, 121, 32, 110, 111, 116, 32, 115, 101, 110, 100, 32, 97, 108, 108, 32, 111, 102, 32, 105, 116, 10, 115, 101, 110, 100, 116, 111, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 44, 32, 97, 100, 100, 114, 41, 32, 45, 45, 32, 115, 101, 110, 100, 32, 100, 97, 116, 97, 32, 116, 111, 32, 97, 32, 103, 105, 118, 101, 110, 32, 97, 100, 100, 114, 101, 115, 115, 10, 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 48, 32, 124, 32, 49, 41, 32, 45, 45, 32, 115, 101, 116, 32, 111, 114, 32, 99, 108, 101, 97, 114, 32, 116, 104, 101, 32, 98, 108, 111, 99, 107, 105, 110, 103, 32, 73, 47, 79, 32, 102, 108, 97, 103, 10, 115, 101, 116, 115, 111, 99, 107, 111, 112, 116, 40, 108, 101, 118, 101, 108, 44, 32, 111, 112, 116, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 45, 45, 32, 115, 101, 116, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 116, 105, 111, 110, 115, 10, 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 78, 111, 110, 101, 32, 124, 32, 102, 108, 111, 97, 116, 41, 32, 45, 45, 32, 115, 101, 116, 32, 111, 114, 32, 99, 108, 101, 97, 114, 32, 116, 104, 101, 32, 116, 105, 109, 101, 111, 117, 116, 10, 115, 104, 117, 116, 100, 111, 119, 110, 40, 104, 111, 119, 41, 32, 45, 45, 32, 115, 104, 117, 116, 32, 100, 111, 119, 110, 32, 116, 114, 97, 102, 102, 105, 99, 32, 105, 110, 32, 111, 110, 101, 32, 111, 114, 32, 98, 111, 116, 104, 32, 100, 105, 114, 101, 99, 116, 105, 111, 110, 115, 10, 10, 32, 91, 42, 93, 32, 110, 111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 111, 110, 32, 97, 108, 108, 32, 112, 108, 97, 116, 102, 111, 114, 109, 115, 33, 0 ], "i8", ALLOC_NORMAL);
    _socket_error = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str1 = allocate([ 40, 105, 115, 41, 0 ], "i8", ALLOC_NORMAL);
    _socket_herror = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _socket_gaierror = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    _defaulttimeout = allocate([ -1 ], [ "double", 0, 0, 0, 0, 0, 0, 0, 0 ], ALLOC_NORMAL);
    __str2 = allocate([ 48, 0 ], "i8", ALLOC_NORMAL);
    __str3 = allocate([ 117, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str4 = allocate([ 119, 105, 108, 100, 99, 97, 114, 100, 32, 114, 101, 115, 111, 108, 118, 101, 100, 32, 116, 111, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 97, 100, 100, 114, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str5 = allocate([ 60, 98, 114, 111, 97, 100, 99, 97, 115, 116, 62, 0 ], "i8", ALLOC_NORMAL);
    __str6 = allocate([ 97, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32, 109, 105, 115, 109, 97, 116, 99, 104, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str7 = allocate([ 37, 100, 46, 37, 100, 46, 37, 100, 46, 37, 100, 37, 99, 0 ], "i8", ALLOC_NORMAL);
    __str8 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str9 = allocate([ 79, 105, 0 ], "i8", ALLOC_NORMAL);
    __str10 = allocate([ 73, 73, 0 ], "i8", ALLOC_NORMAL);
    __str11 = allocate([ 79, 105, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str12 = allocate(1, "i8", ALLOC_NORMAL);
    __str13 = allocate([ 115, 104, 98, 104, 115, 35, 0 ], "i8", ALLOC_NORMAL);
    __str14 = allocate([ 73, 73, 73, 73, 73, 0 ], "i8", ALLOC_NORMAL);
    __str15 = allocate([ 73, 110, 118, 97, 108, 105, 100, 32, 97, 100, 100, 114, 101, 115, 115, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str16 = allocate([ 105, 115, 35, 0 ], "i8", ALLOC_NORMAL);
    __str17 = allocate([ 116, 35, 0 ], "i8", ALLOC_NORMAL);
    __str18 = allocate([ 65, 70, 95, 85, 78, 73, 88, 32, 112, 97, 116, 104, 32, 116, 111, 111, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str19 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 65, 70, 95, 78, 69, 84, 76, 73, 78, 75, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 116, 117, 112, 108, 101, 44, 32, 110, 111, 116, 32, 37, 46, 53, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str20 = allocate([ 73, 73, 58, 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 0 ], "i8", ALLOC_NORMAL);
    __str21 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 65, 70, 95, 73, 78, 69, 84, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 116, 117, 112, 108, 101, 44, 32, 110, 111, 116, 32, 37, 46, 53, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str22 = allocate([ 101, 116, 105, 58, 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 0 ], "i8", ALLOC_NORMAL);
    __str23 = allocate([ 105, 100, 110, 97, 0 ], "i8", ALLOC_NORMAL);
    __str24 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 112, 111, 114, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 48, 45, 54, 53, 53, 51, 53, 46, 0 ], "i8", ALLOC_NORMAL);
    __str25 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 65, 70, 95, 73, 78, 69, 84, 54, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 116, 117, 112, 108, 101, 44, 32, 110, 111, 116, 32, 37, 46, 53, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str26 = allocate([ 101, 116, 105, 124, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str27 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 65, 70, 95, 80, 65, 67, 75, 69, 84, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 116, 117, 112, 108, 101, 44, 32, 110, 111, 116, 32, 37, 46, 53, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str28 = allocate([ 115, 105, 124, 105, 105, 115, 35, 0 ], "i8", ALLOC_NORMAL);
    __str29 = allocate([ 72, 97, 114, 100, 119, 97, 114, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 56, 32, 98, 121, 116, 101, 115, 32, 111, 114, 32, 108, 101, 115, 115, 0 ], "i8", ALLOC_NORMAL);
    __str30 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 112, 114, 111, 116, 111, 78, 117, 109, 98, 101, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 48, 45, 54, 53, 53, 51, 53, 46, 0 ], "i8", ALLOC_NORMAL);
    __str31 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 65, 70, 95, 84, 73, 80, 67, 32, 97, 100, 100, 114, 101, 115, 115, 32, 109, 117, 115, 116, 32, 98, 101, 32, 116, 117, 112, 108, 101, 44, 32, 110, 111, 116, 32, 37, 46, 53, 48, 48, 115, 0 ], "i8", ALLOC_NORMAL);
    __str32 = allocate([ 73, 73, 73, 73, 124, 73, 59, 73, 110, 118, 97, 108, 105, 100, 32, 84, 73, 80, 67, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str33 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 97, 114, 103, 58, 32, 98, 97, 100, 32, 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str34 = allocate([ 103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 108, 101, 110, 58, 32, 98, 97, 100, 32, 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    _socket_timeout = allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
    __str35 = allocate([ 116, 105, 109, 101, 100, 32, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    _accept_doc = allocate([ 97, 99, 99, 101, 112, 116, 40, 41, 32, 45, 62, 32, 40, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 44, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 41, 10, 10, 87, 97, 105, 116, 32, 102, 111, 114, 32, 97, 110, 32, 105, 110, 99, 111, 109, 105, 110, 103, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 46, 32, 32, 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 105, 110, 103, 32, 116, 104, 101, 10, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 44, 32, 97, 110, 100, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 111, 102, 32, 116, 104, 101, 32, 99, 108, 105, 101, 110, 116, 46, 32, 32, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 10, 105, 110, 102, 111, 32, 105, 115, 32, 97, 32, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 97, 100, 100, 114, 44, 32, 112, 111, 114, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _setblocking_doc = allocate([ 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 102, 108, 97, 103, 41, 10, 10, 83, 101, 116, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 111, 32, 98, 108, 111, 99, 107, 105, 110, 103, 32, 40, 102, 108, 97, 103, 32, 105, 115, 32, 116, 114, 117, 101, 41, 32, 111, 114, 32, 110, 111, 110, 45, 98, 108, 111, 99, 107, 105, 110, 103, 32, 40, 102, 97, 108, 115, 101, 41, 46, 10, 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 84, 114, 117, 101, 41, 32, 105, 115, 32, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 78, 111, 110, 101, 41, 59, 10, 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 70, 97, 108, 115, 101, 41, 32, 105, 115, 32, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 48, 46, 48, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str36 = allocate([ 84, 105, 109, 101, 111, 117, 116, 32, 118, 97, 108, 117, 101, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _settimeout_doc = allocate([ 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 116, 105, 109, 101, 111, 117, 116, 41, 10, 10, 83, 101, 116, 32, 97, 32, 116, 105, 109, 101, 111, 117, 116, 32, 111, 110, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 46, 32, 32, 39, 116, 105, 109, 101, 111, 117, 116, 39, 32, 99, 97, 110, 32, 98, 101, 32, 97, 32, 102, 108, 111, 97, 116, 44, 10, 103, 105, 118, 105, 110, 103, 32, 105, 110, 32, 115, 101, 99, 111, 110, 100, 115, 44, 32, 111, 114, 32, 78, 111, 110, 101, 46, 32, 32, 83, 101, 116, 116, 105, 110, 103, 32, 97, 32, 116, 105, 109, 101, 111, 117, 116, 32, 111, 102, 32, 78, 111, 110, 101, 32, 100, 105, 115, 97, 98, 108, 101, 115, 10, 116, 104, 101, 32, 116, 105, 109, 101, 111, 117, 116, 32, 102, 101, 97, 116, 117, 114, 101, 32, 97, 110, 100, 32, 105, 115, 32, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 32, 116, 111, 32, 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 49, 41, 46, 10, 83, 101, 116, 116, 105, 110, 103, 32, 97, 32, 116, 105, 109, 101, 111, 117, 116, 32, 111, 102, 32, 122, 101, 114, 111, 32, 105, 115, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 40, 48, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _gettimeout_doc = allocate([ 103, 101, 116, 116, 105, 109, 101, 111, 117, 116, 40, 41, 32, 45, 62, 32, 116, 105, 109, 101, 111, 117, 116, 10, 10, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 116, 105, 109, 101, 111, 117, 116, 32, 105, 110, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 115, 101, 99, 111, 110, 100, 115, 32, 97, 115, 115, 111, 99, 105, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 115, 111, 99, 107, 101, 116, 32, 10, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 46, 32, 65, 32, 116, 105, 109, 101, 111, 117, 116, 32, 111, 102, 32, 78, 111, 110, 101, 32, 105, 110, 100, 105, 99, 97, 116, 101, 115, 32, 116, 104, 97, 116, 32, 116, 105, 109, 101, 111, 117, 116, 115, 32, 111, 110, 32, 115, 111, 99, 107, 101, 116, 32, 10, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 32, 97, 114, 101, 32, 100, 105, 115, 97, 98, 108, 101, 100, 46, 0 ], "i8", ALLOC_NORMAL);
    __str37 = allocate([ 105, 105, 105, 58, 115, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str38 = allocate([ 105, 105, 115, 35, 58, 115, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    _setsockopt_doc = allocate([ 115, 101, 116, 115, 111, 99, 107, 111, 112, 116, 40, 108, 101, 118, 101, 108, 44, 32, 111, 112, 116, 105, 111, 110, 44, 32, 118, 97, 108, 117, 101, 41, 10, 10, 83, 101, 116, 32, 97, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 116, 105, 111, 110, 46, 32, 32, 83, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 109, 97, 110, 117, 97, 108, 32, 102, 111, 114, 32, 108, 101, 118, 101, 108, 32, 97, 110, 100, 32, 111, 112, 116, 105, 111, 110, 46, 10, 84, 104, 101, 32, 118, 97, 108, 117, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 99, 97, 110, 32, 101, 105, 116, 104, 101, 114, 32, 98, 101, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 32, 111, 114, 32, 97, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str39 = allocate([ 105, 105, 124, 105, 58, 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str40 = allocate([ 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 32, 98, 117, 102, 108, 101, 110, 32, 111, 117, 116, 32, 111, 102, 32, 114, 97, 110, 103, 101, 0 ], "i8", ALLOC_NORMAL);
    _getsockopt_doc = allocate([ 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 40, 108, 101, 118, 101, 108, 44, 32, 111, 112, 116, 105, 111, 110, 91, 44, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 93, 41, 32, 45, 62, 32, 118, 97, 108, 117, 101, 10, 10, 71, 101, 116, 32, 97, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 116, 105, 111, 110, 46, 32, 32, 83, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 109, 97, 110, 117, 97, 108, 32, 102, 111, 114, 32, 108, 101, 118, 101, 108, 32, 97, 110, 100, 32, 111, 112, 116, 105, 111, 110, 46, 10, 73, 102, 32, 97, 32, 110, 111, 110, 122, 101, 114, 111, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 103, 105, 118, 101, 110, 44, 32, 116, 104, 101, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 105, 115, 32, 97, 10, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 116, 104, 97, 116, 32, 108, 101, 110, 103, 116, 104, 59, 32, 111, 116, 104, 101, 114, 119, 105, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 110, 32, 105, 110, 116, 101, 103, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _bind_doc = allocate([ 98, 105, 110, 100, 40, 97, 100, 100, 114, 101, 115, 115, 41, 10, 10, 66, 105, 110, 100, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 111, 32, 97, 32, 108, 111, 99, 97, 108, 32, 97, 100, 100, 114, 101, 115, 115, 46, 32, 32, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 115, 32, 97, 10, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 44, 32, 112, 111, 114, 116, 41, 59, 32, 116, 104, 101, 32, 104, 111, 115, 116, 32, 109, 117, 115, 116, 32, 114, 101, 102, 101, 114, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 104, 111, 115, 116, 46, 32, 70, 111, 114, 32, 114, 97, 119, 32, 112, 97, 99, 107, 101, 116, 10, 115, 111, 99, 107, 101, 116, 115, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 115, 32, 97, 32, 116, 117, 112, 108, 101, 32, 40, 105, 102, 110, 97, 109, 101, 44, 32, 112, 114, 111, 116, 111, 32, 91, 44, 112, 107, 116, 116, 121, 112, 101, 32, 91, 44, 104, 97, 116, 121, 112, 101, 93, 93, 41, 0 ], "i8", ALLOC_NORMAL);
    _close_doc = allocate([ 99, 108, 111, 115, 101, 40, 41, 10, 10, 67, 108, 111, 115, 101, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 73, 116, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 117, 115, 101, 100, 32, 97, 102, 116, 101, 114, 32, 116, 104, 105, 115, 32, 99, 97, 108, 108, 46, 0 ], "i8", ALLOC_NORMAL);
    _connect_doc = allocate([ 99, 111, 110, 110, 101, 99, 116, 40, 97, 100, 100, 114, 101, 115, 115, 41, 10, 10, 67, 111, 110, 110, 101, 99, 116, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 111, 32, 97, 32, 114, 101, 109, 111, 116, 101, 32, 97, 100, 100, 114, 101, 115, 115, 46, 32, 32, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 10, 105, 115, 32, 97, 32, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 44, 32, 112, 111, 114, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _connect_ex_doc = allocate([ 99, 111, 110, 110, 101, 99, 116, 95, 101, 120, 40, 97, 100, 100, 114, 101, 115, 115, 41, 32, 45, 62, 32, 101, 114, 114, 110, 111, 10, 10, 84, 104, 105, 115, 32, 105, 115, 32, 108, 105, 107, 101, 32, 99, 111, 110, 110, 101, 99, 116, 40, 97, 100, 100, 114, 101, 115, 115, 41, 44, 32, 98, 117, 116, 32, 114, 101, 116, 117, 114, 110, 115, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 99, 111, 100, 101, 32, 40, 116, 104, 101, 32, 101, 114, 114, 110, 111, 32, 118, 97, 108, 117, 101, 41, 10, 105, 110, 115, 116, 101, 97, 100, 32, 111, 102, 32, 114, 97, 105, 115, 105, 110, 103, 32, 97, 110, 32, 101, 120, 99, 101, 112, 116, 105, 111, 110, 32, 119, 104, 101, 110, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 111, 99, 99, 117, 114, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    _fileno_doc = allocate([ 102, 105, 108, 101, 110, 111, 40, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 32, 111, 102, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    _dup_doc = allocate([ 100, 117, 112, 40, 41, 32, 45, 62, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 32, 99, 111, 110, 110, 101, 99, 116, 101, 100, 32, 116, 111, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 115, 121, 115, 116, 101, 109, 32, 114, 101, 115, 111, 117, 114, 99, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _getsockname_doc = allocate([ 103, 101, 116, 115, 111, 99, 107, 110, 97, 109, 101, 40, 41, 32, 45, 62, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 111, 102, 32, 116, 104, 101, 32, 108, 111, 99, 97, 108, 32, 101, 110, 100, 112, 111, 105, 110, 116, 46, 32, 32, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 10, 105, 110, 102, 111, 32, 105, 115, 32, 97, 32, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 97, 100, 100, 114, 44, 32, 112, 111, 114, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _getpeername_doc = allocate([ 103, 101, 116, 112, 101, 101, 114, 110, 97, 109, 101, 40, 41, 32, 45, 62, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 111, 102, 32, 116, 104, 101, 32, 114, 101, 109, 111, 116, 101, 32, 101, 110, 100, 112, 111, 105, 110, 116, 46, 32, 32, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 10, 105, 110, 102, 111, 32, 105, 115, 32, 97, 32, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 97, 100, 100, 114, 44, 32, 112, 111, 114, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _listen_doc = allocate([ 108, 105, 115, 116, 101, 110, 40, 98, 97, 99, 107, 108, 111, 103, 41, 10, 10, 69, 110, 97, 98, 108, 101, 32, 97, 32, 115, 101, 114, 118, 101, 114, 32, 116, 111, 32, 97, 99, 99, 101, 112, 116, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 115, 46, 32, 32, 84, 104, 101, 32, 98, 97, 99, 107, 108, 111, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 116, 10, 108, 101, 97, 115, 116, 32, 48, 32, 40, 105, 102, 32, 105, 116, 32, 105, 115, 32, 108, 111, 119, 101, 114, 44, 32, 105, 116, 32, 105, 115, 32, 115, 101, 116, 32, 116, 111, 32, 48, 41, 59, 32, 105, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 115, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 10, 117, 110, 97, 99, 99, 101, 112, 116, 101, 100, 32, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 115, 32, 116, 104, 97, 116, 32, 116, 104, 101, 32, 115, 121, 115, 116, 101, 109, 32, 119, 105, 108, 108, 32, 97, 108, 108, 111, 119, 32, 98, 101, 102, 111, 114, 101, 32, 114, 101, 102, 117, 115, 105, 110, 103, 32, 110, 101, 119, 10, 99, 111, 110, 110, 101, 99, 116, 105, 111, 110, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str41 = allocate([ 114, 0 ], "i8", ALLOC_NORMAL);
    __str42 = allocate([ 124, 115, 105, 58, 109, 97, 107, 101, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str43 = allocate([ 60, 115, 111, 99, 107, 101, 116, 62, 0 ], "i8", ALLOC_NORMAL);
    _makefile_doc = allocate([ 109, 97, 107, 101, 102, 105, 108, 101, 40, 91, 109, 111, 100, 101, 91, 44, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 93, 93, 41, 32, 45, 62, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 114, 101, 103, 117, 108, 97, 114, 32, 102, 105, 108, 101, 32, 111, 98, 106, 101, 99, 116, 32, 99, 111, 114, 114, 101, 115, 112, 111, 110, 100, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 10, 84, 104, 101, 32, 109, 111, 100, 101, 32, 97, 110, 100, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 97, 115, 32, 102, 111, 114, 32, 116, 104, 101, 32, 98, 117, 105, 108, 116, 45, 105, 110, 32, 111, 112, 101, 110, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str44 = allocate([ 105, 124, 105, 58, 114, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    __str45 = allocate([ 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 105, 110, 32, 114, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    _recv_doc = allocate([ 114, 101, 99, 118, 40, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 62, 32, 100, 97, 116, 97, 10, 10, 82, 101, 99, 101, 105, 118, 101, 32, 117, 112, 32, 116, 111, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 98, 121, 116, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 70, 111, 114, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 102, 108, 97, 103, 115, 10, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 115, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 109, 97, 110, 117, 97, 108, 46, 32, 32, 87, 104, 101, 110, 32, 110, 111, 32, 100, 97, 116, 97, 32, 105, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 44, 32, 98, 108, 111, 99, 107, 32, 117, 110, 116, 105, 108, 10, 97, 116, 32, 108, 101, 97, 115, 116, 32, 111, 110, 101, 32, 98, 121, 116, 101, 32, 105, 115, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 111, 114, 32, 117, 110, 116, 105, 108, 32, 116, 104, 101, 32, 114, 101, 109, 111, 116, 101, 32, 101, 110, 100, 32, 105, 115, 32, 99, 108, 111, 115, 101, 100, 46, 32, 32, 87, 104, 101, 110, 10, 116, 104, 101, 32, 114, 101, 109, 111, 116, 101, 32, 101, 110, 100, 32, 105, 115, 32, 99, 108, 111, 115, 101, 100, 32, 97, 110, 100, 32, 97, 108, 108, 32, 100, 97, 116, 97, 32, 105, 115, 32, 114, 101, 97, 100, 44, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 101, 109, 112, 116, 121, 32, 115, 116, 114, 105, 110, 103, 46, 0 ], "i8", ALLOC_NORMAL);
    __str46 = allocate([ 119, 42, 124, 105, 105, 58, 114, 101, 99, 118, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_10873 = allocate(16, "i8*", ALLOC_NORMAL);
    __str47 = allocate([ 98, 117, 102, 102, 101, 114, 0 ], "i8", ALLOC_NORMAL);
    __str48 = allocate([ 110, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str49 = allocate([ 102, 108, 97, 103, 115, 0 ], "i8", ALLOC_NORMAL);
    __str50 = allocate([ 98, 117, 102, 46, 98, 117, 102, 32, 33, 61, 32, 48, 32, 38, 38, 32, 98, 117, 102, 108, 101, 110, 32, 62, 32, 48, 0 ], "i8", ALLOC_NORMAL);
    __str51 = allocate([ 46, 46, 47, 99, 112, 121, 116, 104, 111, 110, 47, 77, 111, 100, 117, 108, 101, 115, 47, 115, 111, 99, 107, 101, 116, 109, 111, 100, 117, 108, 101, 46, 99, 0 ], "i8", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___10879 = allocate([ 115, 111, 99, 107, 95, 114, 101, 99, 118, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str52 = allocate([ 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 105, 110, 32, 114, 101, 99, 118, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str53 = allocate([ 98, 117, 102, 102, 101, 114, 32, 116, 111, 111, 32, 115, 109, 97, 108, 108, 32, 102, 111, 114, 32, 114, 101, 113, 117, 101, 115, 116, 101, 100, 32, 98, 121, 116, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    _recv_into_doc = allocate([ 114, 101, 99, 118, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 44, 32, 91, 110, 98, 121, 116, 101, 115, 91, 44, 32, 102, 108, 97, 103, 115, 93, 93, 41, 32, 45, 62, 32, 110, 98, 121, 116, 101, 115, 95, 114, 101, 97, 100, 10, 10, 65, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32, 114, 101, 99, 118, 40, 41, 32, 116, 104, 97, 116, 32, 115, 116, 111, 114, 101, 115, 32, 105, 116, 115, 32, 100, 97, 116, 97, 32, 105, 110, 116, 111, 32, 97, 32, 98, 117, 102, 102, 101, 114, 32, 114, 97, 116, 104, 101, 114, 32, 116, 104, 97, 110, 32, 99, 114, 101, 97, 116, 105, 110, 103, 32, 10, 97, 32, 110, 101, 119, 32, 115, 116, 114, 105, 110, 103, 46, 32, 32, 82, 101, 99, 101, 105, 118, 101, 32, 117, 112, 32, 116, 111, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 98, 121, 116, 101, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 73, 102, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 10, 105, 115, 32, 110, 111, 116, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 32, 40, 111, 114, 32, 48, 41, 44, 32, 114, 101, 99, 101, 105, 118, 101, 32, 117, 112, 32, 116, 111, 32, 116, 104, 101, 32, 115, 105, 122, 101, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 32, 105, 110, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 98, 117, 102, 102, 101, 114, 46, 10, 10, 83, 101, 101, 32, 114, 101, 99, 118, 40, 41, 32, 102, 111, 114, 32, 100, 111, 99, 117, 109, 101, 110, 116, 97, 116, 105, 111, 110, 32, 97, 98, 111, 117, 116, 32, 116, 104, 101, 32, 102, 108, 97, 103, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str54 = allocate([ 105, 124, 105, 58, 114, 101, 99, 118, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str55 = allocate([ 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 105, 110, 32, 114, 101, 99, 118, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    _recvfrom_doc = allocate([ 114, 101, 99, 118, 102, 114, 111, 109, 40, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 62, 32, 40, 100, 97, 116, 97, 44, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 41, 10, 10, 76, 105, 107, 101, 32, 114, 101, 99, 118, 40, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 44, 32, 102, 108, 97, 103, 115, 41, 32, 98, 117, 116, 32, 97, 108, 115, 111, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 101, 110, 100, 101, 114, 39, 115, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    __str56 = allocate([ 119, 42, 124, 105, 105, 58, 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    _kwlist_11020 = allocate(16, "i8*", ALLOC_NORMAL);
    ___PRETTY_FUNCTION___11027 = allocate([ 115, 111, 99, 107, 95, 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str57 = allocate([ 110, 101, 103, 97, 116, 105, 118, 101, 32, 98, 117, 102, 102, 101, 114, 115, 105, 122, 101, 32, 105, 110, 32, 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str58 = allocate([ 108, 78, 0 ], "i8", ALLOC_NORMAL);
    _recvfrom_into_doc = allocate([ 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 91, 44, 32, 110, 98, 121, 116, 101, 115, 91, 44, 32, 102, 108, 97, 103, 115, 93, 93, 41, 32, 45, 62, 32, 40, 110, 98, 121, 116, 101, 115, 44, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 41, 10, 10, 76, 105, 107, 101, 32, 114, 101, 99, 118, 95, 105, 110, 116, 111, 40, 98, 117, 102, 102, 101, 114, 91, 44, 32, 110, 98, 121, 116, 101, 115, 91, 44, 32, 102, 108, 97, 103, 115, 93, 93, 41, 32, 98, 117, 116, 32, 97, 108, 115, 111, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 101, 110, 100, 101, 114, 39, 115, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 102, 111, 46, 0 ], "i8", ALLOC_NORMAL);
    __str59 = allocate([ 115, 42, 124, 105, 58, 115, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _send_doc = allocate([ 115, 101, 110, 100, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 32, 45, 62, 32, 99, 111, 117, 110, 116, 10, 10, 83, 101, 110, 100, 32, 97, 32, 100, 97, 116, 97, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 70, 111, 114, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 102, 108, 97, 103, 115, 10, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 115, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 109, 97, 110, 117, 97, 108, 46, 32, 32, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 98, 121, 116, 101, 115, 10, 115, 101, 110, 116, 59, 32, 116, 104, 105, 115, 32, 109, 97, 121, 32, 98, 101, 32, 108, 101, 115, 115, 32, 116, 104, 97, 110, 32, 108, 101, 110, 40, 100, 97, 116, 97, 41, 32, 105, 102, 32, 116, 104, 101, 32, 110, 101, 116, 119, 111, 114, 107, 32, 105, 115, 32, 98, 117, 115, 121, 46, 0 ], "i8", ALLOC_NORMAL);
    __str60 = allocate([ 115, 42, 124, 105, 58, 115, 101, 110, 100, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    _sendall_doc = allocate([ 115, 101, 110, 100, 97, 108, 108, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 41, 10, 10, 83, 101, 110, 100, 32, 97, 32, 100, 97, 116, 97, 32, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 46, 32, 32, 70, 111, 114, 32, 116, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 102, 108, 97, 103, 115, 10, 97, 114, 103, 117, 109, 101, 110, 116, 44, 32, 115, 101, 101, 32, 116, 104, 101, 32, 85, 110, 105, 120, 32, 109, 97, 110, 117, 97, 108, 46, 32, 32, 84, 104, 105, 115, 32, 99, 97, 108, 108, 115, 32, 115, 101, 110, 100, 40, 41, 32, 114, 101, 112, 101, 97, 116, 101, 100, 108, 121, 10, 117, 110, 116, 105, 108, 32, 97, 108, 108, 32, 100, 97, 116, 97, 32, 105, 115, 32, 115, 101, 110, 116, 46, 32, 32, 73, 102, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 111, 99, 99, 117, 114, 115, 44, 32, 105, 116, 39, 115, 32, 105, 109, 112, 111, 115, 115, 105, 98, 108, 101, 10, 116, 111, 32, 116, 101, 108, 108, 32, 104, 111, 119, 32, 109, 117, 99, 104, 32, 100, 97, 116, 97, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 115, 101, 110, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str61 = allocate([ 115, 42, 79, 58, 115, 101, 110, 100, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str62 = allocate([ 115, 42, 105, 79, 58, 115, 101, 110, 100, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str63 = allocate([ 115, 101, 110, 100, 116, 111, 40, 41, 32, 116, 97, 107, 101, 115, 32, 50, 32, 111, 114, 32, 51, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 37, 100, 32, 103, 105, 118, 101, 110, 41, 0 ], "i8", ALLOC_NORMAL);
    _sendto_doc = allocate([ 115, 101, 110, 100, 116, 111, 40, 100, 97, 116, 97, 91, 44, 32, 102, 108, 97, 103, 115, 93, 44, 32, 97, 100, 100, 114, 101, 115, 115, 41, 32, 45, 62, 32, 99, 111, 117, 110, 116, 10, 10, 76, 105, 107, 101, 32, 115, 101, 110, 100, 40, 100, 97, 116, 97, 44, 32, 102, 108, 97, 103, 115, 41, 32, 98, 117, 116, 32, 97, 108, 108, 111, 119, 115, 32, 115, 112, 101, 99, 105, 102, 121, 105, 110, 103, 32, 116, 104, 101, 32, 100, 101, 115, 116, 105, 110, 97, 116, 105, 111, 110, 32, 97, 100, 100, 114, 101, 115, 115, 46, 10, 70, 111, 114, 32, 73, 80, 32, 115, 111, 99, 107, 101, 116, 115, 44, 32, 116, 104, 101, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 115, 32, 97, 32, 112, 97, 105, 114, 32, 40, 104, 111, 115, 116, 97, 100, 100, 114, 44, 32, 112, 111, 114, 116, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    _shutdown_doc = allocate([ 115, 104, 117, 116, 100, 111, 119, 110, 40, 102, 108, 97, 103, 41, 10, 10, 83, 104, 117, 116, 32, 100, 111, 119, 110, 32, 116, 104, 101, 32, 114, 101, 97, 100, 105, 110, 103, 32, 115, 105, 100, 101, 32, 111, 102, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 40, 102, 108, 97, 103, 32, 61, 61, 32, 83, 72, 85, 84, 95, 82, 68, 41, 44, 32, 116, 104, 101, 32, 119, 114, 105, 116, 105, 110, 103, 32, 115, 105, 100, 101, 10, 111, 102, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 40, 102, 108, 97, 103, 32, 61, 61, 32, 83, 72, 85, 84, 95, 87, 82, 41, 44, 32, 111, 114, 32, 98, 111, 116, 104, 32, 101, 110, 100, 115, 32, 40, 102, 108, 97, 103, 32, 61, 61, 32, 83, 72, 85, 84, 95, 82, 68, 87, 82, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str64 = allocate([ 97, 99, 99, 101, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str65 = allocate([ 98, 105, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str66 = allocate([ 99, 108, 111, 115, 101, 0 ], "i8", ALLOC_NORMAL);
    __str67 = allocate([ 99, 111, 110, 110, 101, 99, 116, 0 ], "i8", ALLOC_NORMAL);
    __str68 = allocate([ 99, 111, 110, 110, 101, 99, 116, 95, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str69 = allocate([ 100, 117, 112, 0 ], "i8", ALLOC_NORMAL);
    __str70 = allocate([ 102, 105, 108, 101, 110, 111, 0 ], "i8", ALLOC_NORMAL);
    __str71 = allocate([ 103, 101, 116, 112, 101, 101, 114, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str72 = allocate([ 103, 101, 116, 115, 111, 99, 107, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str73 = allocate([ 103, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str74 = allocate([ 108, 105, 115, 116, 101, 110, 0 ], "i8", ALLOC_NORMAL);
    __str75 = allocate([ 109, 97, 107, 101, 102, 105, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str76 = allocate([ 114, 101, 99, 118, 0 ], "i8", ALLOC_NORMAL);
    __str77 = allocate([ 114, 101, 99, 118, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str78 = allocate([ 114, 101, 99, 118, 102, 114, 111, 109, 0 ], "i8", ALLOC_NORMAL);
    __str79 = allocate([ 114, 101, 99, 118, 102, 114, 111, 109, 95, 105, 110, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str80 = allocate([ 115, 101, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    __str81 = allocate([ 115, 101, 110, 100, 97, 108, 108, 0 ], "i8", ALLOC_NORMAL);
    __str82 = allocate([ 115, 101, 110, 100, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str83 = allocate([ 115, 101, 116, 98, 108, 111, 99, 107, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str84 = allocate([ 115, 101, 116, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str85 = allocate([ 103, 101, 116, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str86 = allocate([ 115, 101, 116, 115, 111, 99, 107, 111, 112, 116, 0 ], "i8", ALLOC_NORMAL);
    __str87 = allocate([ 115, 104, 117, 116, 100, 111, 119, 110, 0 ], "i8", ALLOC_NORMAL);
    _sock_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str88 = allocate([ 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str89 = allocate([ 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 102, 97, 109, 105, 108, 121, 0 ], "i8", ALLOC_NORMAL);
    __str90 = allocate([ 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str91 = allocate([ 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str92 = allocate([ 112, 114, 111, 116, 111, 0 ], "i8", ALLOC_NORMAL);
    __str93 = allocate([ 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 112, 114, 111, 116, 111, 99, 111, 108, 0 ], "i8", ALLOC_NORMAL);
    __str94 = allocate([ 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str95 = allocate([ 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    _sock_memberlist = allocate([ 0, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    __str96 = allocate([ 60, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 44, 32, 102, 100, 61, 37, 108, 100, 44, 32, 102, 97, 109, 105, 108, 121, 61, 37, 100, 44, 32, 116, 121, 112, 101, 61, 37, 100, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 61, 37, 100, 62, 0 ], "i8", ALLOC_NORMAL);
    __str97 = allocate([ 124, 105, 105, 105, 58, 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _keywords_11267 = allocate(16, "i8*", ALLOC_NORMAL);
    __str98 = allocate([ 95, 115, 111, 99, 107, 101, 116, 46, 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    _sock_type = allocate([ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i32", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32", 0, 0, 0, "i32", 0, 0, 0, "void (%struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.FILE*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*, i8*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyNumberMethods*", 0, 0, 0, "%struct.PySequenceMethods*", 0, 0, 0, "%struct.PyMappingMethods*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyBufferProcs*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*", 0, 0, 0, "i32 (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*", 0, 0, 0, "i32", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*)*", 0, 0, 0, "%struct.PyMethodDef*", 0, 0, 0, "%struct.PyMemberDef*", 0, 0, 0, "%struct.PyGetSetDef*", 0, 0, 0, "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, i32)*", 0, 0, 0, "%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "void (i8*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _gethostname_doc = allocate([ 103, 101, 116, 104, 111, 115, 116, 110, 97, 109, 101, 40, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 104, 111, 115, 116, 32, 110, 97, 109, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str99 = allocate([ 115, 58, 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    _gethostbyname_doc = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 40, 104, 111, 115, 116, 41, 32, 45, 62, 32, 97, 100, 100, 114, 101, 115, 115, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 40, 97, 32, 115, 116, 114, 105, 110, 103, 32, 111, 102, 32, 116, 104, 101, 32, 102, 111, 114, 109, 32, 39, 50, 53, 53, 46, 50, 53, 53, 46, 50, 53, 53, 46, 50, 53, 53, 39, 41, 32, 102, 111, 114, 32, 97, 32, 104, 111, 115, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str100 = allocate([ 115, 79, 79, 0 ], "i8", ALLOC_NORMAL);
    __str101 = allocate([ 115, 58, 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 95, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    _ghbn_ex_doc = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 95, 101, 120, 40, 104, 111, 115, 116, 41, 32, 45, 62, 32, 40, 110, 97, 109, 101, 44, 32, 97, 108, 105, 97, 115, 108, 105, 115, 116, 44, 32, 97, 100, 100, 114, 101, 115, 115, 108, 105, 115, 116, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 116, 114, 117, 101, 32, 104, 111, 115, 116, 32, 110, 97, 109, 101, 44, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 97, 108, 105, 97, 115, 101, 115, 44, 32, 97, 110, 100, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 101, 115, 44, 10, 102, 111, 114, 32, 97, 32, 104, 111, 115, 116, 46, 32, 32, 84, 104, 101, 32, 104, 111, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 103, 105, 118, 105, 110, 103, 32, 97, 32, 104, 111, 115, 116, 32, 110, 97, 109, 101, 32, 111, 114, 32, 73, 80, 32, 110, 117, 109, 98, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str102 = allocate([ 115, 58, 103, 101, 116, 104, 111, 115, 116, 98, 121, 97, 100, 100, 114, 0 ], "i8", ALLOC_NORMAL);
    _gethostbyaddr_doc = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 97, 100, 100, 114, 40, 104, 111, 115, 116, 41, 32, 45, 62, 32, 40, 110, 97, 109, 101, 44, 32, 97, 108, 105, 97, 115, 108, 105, 115, 116, 44, 32, 97, 100, 100, 114, 101, 115, 115, 108, 105, 115, 116, 41, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 116, 114, 117, 101, 32, 104, 111, 115, 116, 32, 110, 97, 109, 101, 44, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 97, 108, 105, 97, 115, 101, 115, 44, 32, 97, 110, 100, 32, 97, 32, 108, 105, 115, 116, 32, 111, 102, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 101, 115, 44, 10, 102, 111, 114, 32, 97, 32, 104, 111, 115, 116, 46, 32, 32, 84, 104, 101, 32, 104, 111, 115, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 105, 115, 32, 97, 32, 115, 116, 114, 105, 110, 103, 32, 103, 105, 118, 105, 110, 103, 32, 97, 32, 104, 111, 115, 116, 32, 110, 97, 109, 101, 32, 111, 114, 32, 73, 80, 32, 110, 117, 109, 98, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str103 = allocate([ 115, 124, 115, 58, 103, 101, 116, 115, 101, 114, 118, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str104 = allocate([ 115, 101, 114, 118, 105, 99, 101, 47, 112, 114, 111, 116, 111, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _getservbyname_doc = allocate([ 103, 101, 116, 115, 101, 114, 118, 98, 121, 110, 97, 109, 101, 40, 115, 101, 114, 118, 105, 99, 101, 110, 97, 109, 101, 91, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 110, 97, 109, 101, 93, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 97, 32, 112, 111, 114, 116, 32, 110, 117, 109, 98, 101, 114, 32, 102, 114, 111, 109, 32, 97, 32, 115, 101, 114, 118, 105, 99, 101, 32, 110, 97, 109, 101, 32, 97, 110, 100, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 97, 109, 101, 46, 10, 84, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 97, 109, 101, 44, 32, 105, 102, 32, 103, 105, 118, 101, 110, 44, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 39, 116, 99, 112, 39, 32, 111, 114, 32, 39, 117, 100, 112, 39, 44, 10, 111, 116, 104, 101, 114, 119, 105, 115, 101, 32, 97, 110, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 119, 105, 108, 108, 32, 109, 97, 116, 99, 104, 46, 0 ], "i8", ALLOC_NORMAL);
    __str105 = allocate([ 105, 124, 115, 58, 103, 101, 116, 115, 101, 114, 118, 98, 121, 112, 111, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str106 = allocate([ 103, 101, 116, 115, 101, 114, 118, 98, 121, 112, 111, 114, 116, 58, 32, 112, 111, 114, 116, 32, 109, 117, 115, 116, 32, 98, 101, 32, 48, 45, 54, 53, 53, 51, 53, 46, 0 ], "i8", ALLOC_NORMAL);
    __str107 = allocate([ 112, 111, 114, 116, 47, 112, 114, 111, 116, 111, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _getservbyport_doc = allocate([ 103, 101, 116, 115, 101, 114, 118, 98, 121, 112, 111, 114, 116, 40, 112, 111, 114, 116, 91, 44, 32, 112, 114, 111, 116, 111, 99, 111, 108, 110, 97, 109, 101, 93, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 115, 101, 114, 118, 105, 99, 101, 32, 110, 97, 109, 101, 32, 102, 114, 111, 109, 32, 97, 32, 112, 111, 114, 116, 32, 110, 117, 109, 98, 101, 114, 32, 97, 110, 100, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 97, 109, 101, 46, 10, 84, 104, 101, 32, 111, 112, 116, 105, 111, 110, 97, 108, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 97, 109, 101, 44, 32, 105, 102, 32, 103, 105, 118, 101, 110, 44, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 39, 116, 99, 112, 39, 32, 111, 114, 32, 39, 117, 100, 112, 39, 44, 10, 111, 116, 104, 101, 114, 119, 105, 115, 101, 32, 97, 110, 121, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 119, 105, 108, 108, 32, 109, 97, 116, 99, 104, 46, 0 ], "i8", ALLOC_NORMAL);
    __str108 = allocate([ 115, 58, 103, 101, 116, 112, 114, 111, 116, 111, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str109 = allocate([ 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _getprotobyname_doc = allocate([ 103, 101, 116, 112, 114, 111, 116, 111, 98, 121, 110, 97, 109, 101, 40, 110, 97, 109, 101, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 82, 101, 116, 117, 114, 110, 32, 116, 104, 101, 32, 112, 114, 111, 116, 111, 99, 111, 108, 32, 110, 117, 109, 98, 101, 114, 32, 102, 111, 114, 32, 116, 104, 101, 32, 110, 97, 109, 101, 100, 32, 112, 114, 111, 116, 111, 99, 111, 108, 46, 32, 32, 40, 82, 97, 114, 101, 108, 121, 32, 117, 115, 101, 100, 46, 41, 0 ], "i8", ALLOC_NORMAL);
    __str110 = allocate([ 124, 105, 105, 105, 58, 115, 111, 99, 107, 101, 116, 112, 97, 105, 114, 0 ], "i8", ALLOC_NORMAL);
    _socketpair_doc = allocate([ 115, 111, 99, 107, 101, 116, 112, 97, 105, 114, 40, 91, 102, 97, 109, 105, 108, 121, 91, 44, 32, 116, 121, 112, 101, 91, 44, 32, 112, 114, 111, 116, 111, 93, 93, 93, 41, 32, 45, 62, 32, 40, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 44, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 41, 10, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 112, 97, 105, 114, 32, 111, 102, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 115, 32, 114, 101, 116, 117, 114, 110, 101, 100, 32, 98, 121, 32, 116, 104, 101, 32, 112, 108, 97, 116, 102, 111, 114, 109, 10, 115, 111, 99, 107, 101, 116, 112, 97, 105, 114, 40, 41, 32, 102, 117, 110, 99, 116, 105, 111, 110, 46, 10, 84, 104, 101, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 40, 41, 32, 101, 120, 99, 101, 112, 116, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 102, 97, 109, 105, 108, 121, 32, 105, 115, 10, 65, 70, 95, 85, 78, 73, 88, 32, 105, 102, 32, 100, 101, 102, 105, 110, 101, 100, 32, 111, 110, 32, 116, 104, 101, 32, 112, 108, 97, 116, 102, 111, 114, 109, 59, 32, 111, 116, 104, 101, 114, 119, 105, 115, 101, 44, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 105, 115, 32, 65, 70, 95, 73, 78, 69, 84, 46, 0 ], "i8", ALLOC_NORMAL);
    __str111 = allocate([ 105, 105, 105, 124, 105, 58, 102, 114, 111, 109, 102, 100, 0 ], "i8", ALLOC_NORMAL);
    _fromfd_doc = allocate([ 102, 114, 111, 109, 102, 100, 40, 102, 100, 44, 32, 102, 97, 109, 105, 108, 121, 44, 32, 116, 121, 112, 101, 91, 44, 32, 112, 114, 111, 116, 111, 93, 41, 32, 45, 62, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 10, 10, 67, 114, 101, 97, 116, 101, 32, 97, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 32, 102, 114, 111, 109, 32, 97, 32, 100, 117, 112, 108, 105, 99, 97, 116, 101, 32, 111, 102, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 10, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 46, 10, 84, 104, 101, 32, 114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 97, 114, 101, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 97, 115, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 40, 41, 46, 0 ], "i8", ALLOC_NORMAL);
    __str112 = allocate([ 105, 58, 110, 116, 111, 104, 115, 0 ], "i8", ALLOC_NORMAL);
    __str113 = allocate([ 99, 97, 110, 39, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 110, 101, 103, 97, 116, 105, 118, 101, 32, 110, 117, 109, 98, 101, 114, 32, 116, 111, 32, 117, 110, 115, 105, 103, 110, 101, 100, 32, 108, 111, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    _ntohs_doc = allocate([ 110, 116, 111, 104, 115, 40, 105, 110, 116, 101, 103, 101, 114, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 49, 54, 45, 98, 105, 116, 32, 105, 110, 116, 101, 103, 101, 114, 32, 102, 114, 111, 109, 32, 110, 101, 116, 119, 111, 114, 107, 32, 116, 111, 32, 104, 111, 115, 116, 32, 98, 121, 116, 101, 32, 111, 114, 100, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str114 = allocate([ 101, 120, 112, 101, 99, 116, 101, 100, 32, 105, 110, 116, 47, 108, 111, 110, 103, 44, 32, 37, 115, 32, 102, 111, 117, 110, 100, 0 ], "i8", ALLOC_NORMAL);
    _ntohl_doc = allocate([ 110, 116, 111, 104, 108, 40, 105, 110, 116, 101, 103, 101, 114, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 51, 50, 45, 98, 105, 116, 32, 105, 110, 116, 101, 103, 101, 114, 32, 102, 114, 111, 109, 32, 110, 101, 116, 119, 111, 114, 107, 32, 116, 111, 32, 104, 111, 115, 116, 32, 98, 121, 116, 101, 32, 111, 114, 100, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    __str115 = allocate([ 105, 58, 104, 116, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    _htons_doc = allocate([ 104, 116, 111, 110, 115, 40, 105, 110, 116, 101, 103, 101, 114, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 49, 54, 45, 98, 105, 116, 32, 105, 110, 116, 101, 103, 101, 114, 32, 102, 114, 111, 109, 32, 104, 111, 115, 116, 32, 116, 111, 32, 110, 101, 116, 119, 111, 114, 107, 32, 98, 121, 116, 101, 32, 111, 114, 100, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _htonl_doc = allocate([ 104, 116, 111, 110, 108, 40, 105, 110, 116, 101, 103, 101, 114, 41, 32, 45, 62, 32, 105, 110, 116, 101, 103, 101, 114, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 51, 50, 45, 98, 105, 116, 32, 105, 110, 116, 101, 103, 101, 114, 32, 102, 114, 111, 109, 32, 104, 111, 115, 116, 32, 116, 111, 32, 110, 101, 116, 119, 111, 114, 107, 32, 98, 121, 116, 101, 32, 111, 114, 100, 101, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _inet_aton_doc = allocate([ 105, 110, 101, 116, 95, 97, 116, 111, 110, 40, 115, 116, 114, 105, 110, 103, 41, 32, 45, 62, 32, 112, 97, 99, 107, 101, 100, 32, 51, 50, 45, 98, 105, 116, 32, 73, 80, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 110, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 105, 110, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 32, 40, 49, 50, 51, 46, 52, 53, 46, 54, 55, 46, 56, 57, 41, 32, 116, 111, 32, 116, 104, 101, 32, 51, 50, 45, 98, 105, 116, 32, 112, 97, 99, 107, 101, 100, 10, 98, 105, 110, 97, 114, 121, 32, 102, 111, 114, 109, 97, 116, 32, 117, 115, 101, 100, 32, 105, 110, 32, 108, 111, 119, 45, 108, 101, 118, 101, 108, 32, 110, 101, 116, 119, 111, 114, 107, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str116 = allocate([ 115, 58, 105, 110, 101, 116, 95, 97, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str117 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 115, 116, 114, 105, 110, 103, 32, 112, 97, 115, 115, 101, 100, 32, 116, 111, 32, 105, 110, 101, 116, 95, 97, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _inet_ntoa_doc = allocate([ 105, 110, 101, 116, 95, 110, 116, 111, 97, 40, 112, 97, 99, 107, 101, 100, 95, 105, 112, 41, 32, 45, 62, 32, 105, 112, 95, 97, 100, 100, 114, 101, 115, 115, 95, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 110, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 114, 111, 109, 32, 51, 50, 45, 98, 105, 116, 32, 112, 97, 99, 107, 101, 100, 32, 98, 105, 110, 97, 114, 121, 32, 102, 111, 114, 109, 97, 116, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 0 ], "i8", ALLOC_NORMAL);
    __str118 = allocate([ 115, 35, 58, 105, 110, 101, 116, 95, 110, 116, 111, 97, 0 ], "i8", ALLOC_NORMAL);
    __str119 = allocate([ 112, 97, 99, 107, 101, 100, 32, 73, 80, 32, 119, 114, 111, 110, 103, 32, 108, 101, 110, 103, 116, 104, 32, 102, 111, 114, 32, 105, 110, 101, 116, 95, 110, 116, 111, 97, 0 ], "i8", ALLOC_NORMAL);
    _inet_pton_doc = allocate([ 105, 110, 101, 116, 95, 112, 116, 111, 110, 40, 97, 102, 44, 32, 105, 112, 41, 32, 45, 62, 32, 112, 97, 99, 107, 101, 100, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 115, 116, 114, 105, 110, 103, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 110, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 114, 111, 109, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 32, 116, 111, 32, 97, 32, 112, 97, 99, 107, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 115, 117, 105, 116, 97, 98, 108, 101, 10, 102, 111, 114, 32, 117, 115, 101, 32, 119, 105, 116, 104, 32, 108, 111, 119, 45, 108, 101, 118, 101, 108, 32, 110, 101, 116, 119, 111, 114, 107, 32, 102, 117, 110, 99, 116, 105, 111, 110, 115, 46, 0 ], "i8", ALLOC_NORMAL);
    __str120 = allocate([ 105, 115, 58, 105, 110, 101, 116, 95, 112, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str121 = allocate([ 105, 108, 108, 101, 103, 97, 108, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 115, 116, 114, 105, 110, 103, 32, 112, 97, 115, 115, 101, 100, 32, 116, 111, 32, 105, 110, 101, 116, 95, 112, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    _inet_ntop_doc = allocate([ 105, 110, 101, 116, 95, 110, 116, 111, 112, 40, 97, 102, 44, 32, 112, 97, 99, 107, 101, 100, 95, 105, 112, 41, 32, 45, 62, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 116, 101, 100, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 10, 10, 67, 111, 110, 118, 101, 114, 116, 32, 97, 32, 112, 97, 99, 107, 101, 100, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 111, 102, 32, 116, 104, 101, 32, 103, 105, 118, 101, 110, 32, 102, 97, 109, 105, 108, 121, 32, 116, 111, 32, 115, 116, 114, 105, 110, 103, 32, 102, 111, 114, 109, 97, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str122 = allocate([ 105, 115, 35, 58, 105, 110, 101, 116, 95, 110, 116, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str123 = allocate([ 105, 110, 118, 97, 108, 105, 100, 32, 108, 101, 110, 103, 116, 104, 32, 111, 102, 32, 112, 97, 99, 107, 101, 100, 32, 73, 80, 32, 97, 100, 100, 114, 101, 115, 115, 32, 115, 116, 114, 105, 110, 103, 0 ], "i8", ALLOC_NORMAL);
    __str124 = allocate([ 117, 110, 107, 110, 111, 119, 110, 32, 97, 100, 100, 114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32, 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str125 = allocate([ 79, 79, 124, 105, 105, 105, 105, 58, 103, 101, 116, 97, 100, 100, 114, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str126 = allocate([ 101, 110, 99, 111, 100, 101, 0 ], "i8", ALLOC_NORMAL);
    __str127 = allocate([ 115, 0 ], "i8", ALLOC_NORMAL);
    __str128 = allocate([ 103, 101, 116, 97, 100, 100, 114, 105, 110, 102, 111, 40, 41, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 49, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 116, 114, 105, 110, 103, 32, 111, 114, 32, 78, 111, 110, 101, 0 ], "i8", ALLOC_NORMAL);
    __str129 = allocate([ 37, 108, 100, 0 ], "i8", ALLOC_NORMAL);
    __str130 = allocate([ 73, 110, 116, 32, 111, 114, 32, 83, 116, 114, 105, 110, 103, 32, 101, 120, 112, 101, 99, 116, 101, 100, 0 ], "i8", ALLOC_NORMAL);
    __str131 = allocate([ 105, 105, 105, 115, 79, 0 ], "i8", ALLOC_NORMAL);
    _getaddrinfo_doc = allocate([ 103, 101, 116, 97, 100, 100, 114, 105, 110, 102, 111, 40, 104, 111, 115, 116, 44, 32, 112, 111, 114, 116, 32, 91, 44, 32, 102, 97, 109, 105, 108, 121, 44, 32, 115, 111, 99, 107, 116, 121, 112, 101, 44, 32, 112, 114, 111, 116, 111, 44, 32, 102, 108, 97, 103, 115, 93, 41, 10, 32, 32, 32, 32, 45, 62, 32, 108, 105, 115, 116, 32, 111, 102, 32, 40, 102, 97, 109, 105, 108, 121, 44, 32, 115, 111, 99, 107, 116, 121, 112, 101, 44, 32, 112, 114, 111, 116, 111, 44, 32, 99, 97, 110, 111, 110, 110, 97, 109, 101, 44, 32, 115, 111, 99, 107, 97, 100, 100, 114, 41, 10, 10, 82, 101, 115, 111, 108, 118, 101, 32, 104, 111, 115, 116, 32, 97, 110, 100, 32, 112, 111, 114, 116, 32, 105, 110, 116, 111, 32, 97, 100, 100, 114, 105, 110, 102, 111, 32, 115, 116, 114, 117, 99, 116, 46, 0 ], "i8", ALLOC_NORMAL);
    __str132 = allocate([ 79, 105, 58, 103, 101, 116, 110, 97, 109, 101, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str133 = allocate([ 103, 101, 116, 110, 97, 109, 101, 105, 110, 102, 111, 40, 41, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 49, 32, 109, 117, 115, 116, 32, 98, 101, 32, 97, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str134 = allocate([ 115, 105, 124, 105, 105, 0 ], "i8", ALLOC_NORMAL);
    __str135 = allocate([ 37, 100, 0 ], "i8", ALLOC_NORMAL);
    __str136 = allocate([ 115, 111, 99, 107, 97, 100, 100, 114, 32, 114, 101, 115, 111, 108, 118, 101, 100, 32, 116, 111, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 97, 100, 100, 114, 101, 115, 115, 101, 115, 0 ], "i8", ALLOC_NORMAL);
    __str137 = allocate([ 73, 80, 118, 52, 32, 115, 111, 99, 107, 97, 100, 100, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 50, 32, 116, 117, 112, 108, 101, 0 ], "i8", ALLOC_NORMAL);
    __str138 = allocate([ 115, 115, 0 ], "i8", ALLOC_NORMAL);
    _getnameinfo_doc = allocate([ 103, 101, 116, 110, 97, 109, 101, 105, 110, 102, 111, 40, 115, 111, 99, 107, 97, 100, 100, 114, 44, 32, 102, 108, 97, 103, 115, 41, 32, 45, 45, 62, 32, 40, 104, 111, 115, 116, 44, 32, 112, 111, 114, 116, 41, 10, 10, 71, 101, 116, 32, 104, 111, 115, 116, 32, 97, 110, 100, 32, 112, 111, 114, 116, 32, 102, 111, 114, 32, 97, 32, 115, 111, 99, 107, 97, 100, 100, 114, 46, 0 ], "i8", ALLOC_NORMAL);
    _getdefaulttimeout_doc = allocate([ 103, 101, 116, 100, 101, 102, 97, 117, 108, 116, 116, 105, 109, 101, 111, 117, 116, 40, 41, 32, 45, 62, 32, 116, 105, 109, 101, 111, 117, 116, 10, 10, 82, 101, 116, 117, 114, 110, 115, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 105, 109, 101, 111, 117, 116, 32, 105, 110, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 115, 101, 99, 111, 110, 100, 115, 32, 102, 111, 114, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 46, 10, 65, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 78, 111, 110, 101, 32, 105, 110, 100, 105, 99, 97, 116, 101, 115, 32, 116, 104, 97, 116, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 32, 104, 97, 118, 101, 32, 110, 111, 32, 116, 105, 109, 101, 111, 117, 116, 46, 10, 87, 104, 101, 110, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 109, 111, 100, 117, 108, 101, 32, 105, 115, 32, 102, 105, 114, 115, 116, 32, 105, 109, 112, 111, 114, 116, 101, 100, 44, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 105, 115, 32, 78, 111, 110, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    _setdefaulttimeout_doc = allocate([ 115, 101, 116, 100, 101, 102, 97, 117, 108, 116, 116, 105, 109, 101, 111, 117, 116, 40, 116, 105, 109, 101, 111, 117, 116, 41, 10, 10, 83, 101, 116, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 105, 109, 101, 111, 117, 116, 32, 105, 110, 32, 102, 108, 111, 97, 116, 105, 110, 103, 32, 115, 101, 99, 111, 110, 100, 115, 32, 102, 111, 114, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 46, 10, 65, 32, 118, 97, 108, 117, 101, 32, 111, 102, 32, 78, 111, 110, 101, 32, 105, 110, 100, 105, 99, 97, 116, 101, 115, 32, 116, 104, 97, 116, 32, 110, 101, 119, 32, 115, 111, 99, 107, 101, 116, 32, 111, 98, 106, 101, 99, 116, 115, 32, 104, 97, 118, 101, 32, 110, 111, 32, 116, 105, 109, 101, 111, 117, 116, 46, 10, 87, 104, 101, 110, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 109, 111, 100, 117, 108, 101, 32, 105, 115, 32, 102, 105, 114, 115, 116, 32, 105, 109, 112, 111, 114, 116, 101, 100, 44, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 105, 115, 32, 78, 111, 110, 101, 46, 0 ], "i8", ALLOC_NORMAL);
    __str139 = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str140 = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 110, 97, 109, 101, 95, 101, 120, 0 ], "i8", ALLOC_NORMAL);
    __str141 = allocate([ 103, 101, 116, 104, 111, 115, 116, 98, 121, 97, 100, 100, 114, 0 ], "i8", ALLOC_NORMAL);
    __str142 = allocate([ 103, 101, 116, 104, 111, 115, 116, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str143 = allocate([ 103, 101, 116, 115, 101, 114, 118, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str144 = allocate([ 103, 101, 116, 115, 101, 114, 118, 98, 121, 112, 111, 114, 116, 0 ], "i8", ALLOC_NORMAL);
    __str145 = allocate([ 103, 101, 116, 112, 114, 111, 116, 111, 98, 121, 110, 97, 109, 101, 0 ], "i8", ALLOC_NORMAL);
    __str146 = allocate([ 102, 114, 111, 109, 102, 100, 0 ], "i8", ALLOC_NORMAL);
    __str147 = allocate([ 115, 111, 99, 107, 101, 116, 112, 97, 105, 114, 0 ], "i8", ALLOC_NORMAL);
    __str148 = allocate([ 110, 116, 111, 104, 115, 0 ], "i8", ALLOC_NORMAL);
    __str149 = allocate([ 110, 116, 111, 104, 108, 0 ], "i8", ALLOC_NORMAL);
    __str150 = allocate([ 104, 116, 111, 110, 115, 0 ], "i8", ALLOC_NORMAL);
    __str151 = allocate([ 104, 116, 111, 110, 108, 0 ], "i8", ALLOC_NORMAL);
    __str152 = allocate([ 105, 110, 101, 116, 95, 97, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str153 = allocate([ 105, 110, 101, 116, 95, 110, 116, 111, 97, 0 ], "i8", ALLOC_NORMAL);
    __str154 = allocate([ 105, 110, 101, 116, 95, 112, 116, 111, 110, 0 ], "i8", ALLOC_NORMAL);
    __str155 = allocate([ 105, 110, 101, 116, 95, 110, 116, 111, 112, 0 ], "i8", ALLOC_NORMAL);
    __str156 = allocate([ 103, 101, 116, 97, 100, 100, 114, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str157 = allocate([ 103, 101, 116, 110, 97, 109, 101, 105, 110, 102, 111, 0 ], "i8", ALLOC_NORMAL);
    __str158 = allocate([ 103, 101, 116, 100, 101, 102, 97, 117, 108, 116, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str159 = allocate([ 115, 101, 116, 100, 101, 102, 97, 117, 108, 116, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    _socket_methods = allocate([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], [ "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i32", 0, 0, 0, "i8*", 0, 0, 0, "i8*", 0, 0, 0, "%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*", 0, 0, 0, "i8", "i8", "i8", "i8", "i8", "i8", "i8", "i8" ], ALLOC_NORMAL);
    _PySocketModuleAPI = allocate(8, [ "%struct._typeobject*", 0, 0, 0, "%struct.PyObject*", 0, 0, 0 ], ALLOC_NORMAL);
    _socket_doc = allocate([ 73, 109, 112, 108, 101, 109, 101, 110, 116, 97, 116, 105, 111, 110, 32, 109, 111, 100, 117, 108, 101, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116, 32, 111, 112, 101, 114, 97, 116, 105, 111, 110, 115, 46, 10, 10, 83, 101, 101, 32, 116, 104, 101, 32, 115, 111, 99, 107, 101, 116, 32, 109, 111, 100, 117, 108, 101, 32, 102, 111, 114, 32, 100, 111, 99, 117, 109, 101, 110, 116, 97, 116, 105, 111, 110, 46, 0 ], "i8", ALLOC_NORMAL);
    __str160 = allocate([ 95, 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str161 = allocate([ 115, 111, 99, 107, 101, 116, 46, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str162 = allocate([ 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str163 = allocate([ 115, 111, 99, 107, 101, 116, 46, 104, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str164 = allocate([ 104, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str165 = allocate([ 115, 111, 99, 107, 101, 116, 46, 103, 97, 105, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str166 = allocate([ 103, 97, 105, 101, 114, 114, 111, 114, 0 ], "i8", ALLOC_NORMAL);
    __str167 = allocate([ 115, 111, 99, 107, 101, 116, 46, 116, 105, 109, 101, 111, 117, 116, 0 ], "i8", ALLOC_NORMAL);
    __str168 = allocate([ 83, 111, 99, 107, 101, 116, 84, 121, 112, 101, 0 ], "i8", ALLOC_NORMAL);
    __str169 = allocate([ 115, 111, 99, 107, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str170 = allocate([ 104, 97, 115, 95, 105, 112, 118, 54, 0 ], "i8", ALLOC_NORMAL);
    __str171 = allocate([ 95, 115, 111, 99, 107, 101, 116, 46, 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str172 = allocate([ 67, 65, 80, 73, 0 ], "i8", ALLOC_NORMAL);
    __str173 = allocate([ 65, 70, 95, 85, 78, 83, 80, 69, 67, 0 ], "i8", ALLOC_NORMAL);
    __str174 = allocate([ 65, 70, 95, 73, 78, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str175 = allocate([ 65, 70, 95, 73, 78, 69, 84, 54, 0 ], "i8", ALLOC_NORMAL);
    __str176 = allocate([ 65, 70, 95, 85, 78, 73, 88, 0 ], "i8", ALLOC_NORMAL);
    __str177 = allocate([ 65, 70, 95, 65, 88, 50, 53, 0 ], "i8", ALLOC_NORMAL);
    __str178 = allocate([ 65, 70, 95, 73, 80, 88, 0 ], "i8", ALLOC_NORMAL);
    __str179 = allocate([ 65, 70, 95, 65, 80, 80, 76, 69, 84, 65, 76, 75, 0 ], "i8", ALLOC_NORMAL);
    __str180 = allocate([ 65, 70, 95, 78, 69, 84, 82, 79, 77, 0 ], "i8", ALLOC_NORMAL);
    __str181 = allocate([ 65, 70, 95, 66, 82, 73, 68, 71, 69, 0 ], "i8", ALLOC_NORMAL);
    __str182 = allocate([ 65, 70, 95, 65, 84, 77, 80, 86, 67, 0 ], "i8", ALLOC_NORMAL);
    __str183 = allocate([ 65, 70, 95, 88, 50, 53, 0 ], "i8", ALLOC_NORMAL);
    __str184 = allocate([ 65, 70, 95, 82, 79, 83, 69, 0 ], "i8", ALLOC_NORMAL);
    __str185 = allocate([ 65, 70, 95, 68, 69, 67, 110, 101, 116, 0 ], "i8", ALLOC_NORMAL);
    __str186 = allocate([ 65, 70, 95, 78, 69, 84, 66, 69, 85, 73, 0 ], "i8", ALLOC_NORMAL);
    __str187 = allocate([ 65, 70, 95, 83, 69, 67, 85, 82, 73, 84, 89, 0 ], "i8", ALLOC_NORMAL);
    __str188 = allocate([ 65, 70, 95, 75, 69, 89, 0 ], "i8", ALLOC_NORMAL);
    __str189 = allocate([ 65, 70, 95, 78, 69, 84, 76, 73, 78, 75, 0 ], "i8", ALLOC_NORMAL);
    __str190 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 82, 79, 85, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str191 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 85, 83, 69, 82, 83, 79, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str192 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 70, 73, 82, 69, 87, 65, 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str193 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 78, 70, 76, 79, 71, 0 ], "i8", ALLOC_NORMAL);
    __str194 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 88, 70, 82, 77, 0 ], "i8", ALLOC_NORMAL);
    __str195 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 73, 80, 54, 95, 70, 87, 0 ], "i8", ALLOC_NORMAL);
    __str196 = allocate([ 78, 69, 84, 76, 73, 78, 75, 95, 68, 78, 82, 84, 77, 83, 71, 0 ], "i8", ALLOC_NORMAL);
    __str197 = allocate([ 65, 70, 95, 82, 79, 85, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str198 = allocate([ 65, 70, 95, 65, 83, 72, 0 ], "i8", ALLOC_NORMAL);
    __str199 = allocate([ 65, 70, 95, 69, 67, 79, 78, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str200 = allocate([ 65, 70, 95, 65, 84, 77, 83, 86, 67, 0 ], "i8", ALLOC_NORMAL);
    __str201 = allocate([ 65, 70, 95, 83, 78, 65, 0 ], "i8", ALLOC_NORMAL);
    __str202 = allocate([ 65, 70, 95, 73, 82, 68, 65, 0 ], "i8", ALLOC_NORMAL);
    __str203 = allocate([ 65, 70, 95, 80, 80, 80, 79, 88, 0 ], "i8", ALLOC_NORMAL);
    __str204 = allocate([ 65, 70, 95, 87, 65, 78, 80, 73, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str205 = allocate([ 65, 70, 95, 76, 76, 67, 0 ], "i8", ALLOC_NORMAL);
    __str206 = allocate([ 65, 70, 95, 80, 65, 67, 75, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str207 = allocate([ 80, 70, 95, 80, 65, 67, 75, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str208 = allocate([ 80, 65, 67, 75, 69, 84, 95, 72, 79, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str209 = allocate([ 80, 65, 67, 75, 69, 84, 95, 66, 82, 79, 65, 68, 67, 65, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str210 = allocate([ 80, 65, 67, 75, 69, 84, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str211 = allocate([ 80, 65, 67, 75, 69, 84, 95, 79, 84, 72, 69, 82, 72, 79, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str212 = allocate([ 80, 65, 67, 75, 69, 84, 95, 79, 85, 84, 71, 79, 73, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str213 = allocate([ 80, 65, 67, 75, 69, 84, 95, 76, 79, 79, 80, 66, 65, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str214 = allocate([ 80, 65, 67, 75, 69, 84, 95, 70, 65, 83, 84, 82, 79, 85, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str215 = allocate([ 65, 70, 95, 84, 73, 80, 67, 0 ], "i8", ALLOC_NORMAL);
    __str216 = allocate([ 84, 73, 80, 67, 95, 65, 68, 68, 82, 95, 78, 65, 77, 69, 83, 69, 81, 0 ], "i8", ALLOC_NORMAL);
    __str217 = allocate([ 84, 73, 80, 67, 95, 65, 68, 68, 82, 95, 78, 65, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str218 = allocate([ 84, 73, 80, 67, 95, 65, 68, 68, 82, 95, 73, 68, 0 ], "i8", ALLOC_NORMAL);
    __str219 = allocate([ 84, 73, 80, 67, 95, 90, 79, 78, 69, 95, 83, 67, 79, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str220 = allocate([ 84, 73, 80, 67, 95, 67, 76, 85, 83, 84, 69, 82, 95, 83, 67, 79, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str221 = allocate([ 84, 73, 80, 67, 95, 78, 79, 68, 69, 95, 83, 67, 79, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str222 = allocate([ 83, 79, 76, 95, 84, 73, 80, 67, 0 ], "i8", ALLOC_NORMAL);
    __str223 = allocate([ 84, 73, 80, 67, 95, 73, 77, 80, 79, 82, 84, 65, 78, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str224 = allocate([ 84, 73, 80, 67, 95, 83, 82, 67, 95, 68, 82, 79, 80, 80, 65, 66, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str225 = allocate([ 84, 73, 80, 67, 95, 68, 69, 83, 84, 95, 68, 82, 79, 80, 80, 65, 66, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str226 = allocate([ 84, 73, 80, 67, 95, 67, 79, 78, 78, 95, 84, 73, 77, 69, 79, 85, 84, 0 ], "i8", ALLOC_NORMAL);
    __str227 = allocate([ 84, 73, 80, 67, 95, 76, 79, 87, 95, 73, 77, 80, 79, 82, 84, 65, 78, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str228 = allocate([ 84, 73, 80, 67, 95, 77, 69, 68, 73, 85, 77, 95, 73, 77, 80, 79, 82, 84, 65, 78, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str229 = allocate([ 84, 73, 80, 67, 95, 72, 73, 71, 72, 95, 73, 77, 80, 79, 82, 84, 65, 78, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str230 = allocate([ 84, 73, 80, 67, 95, 67, 82, 73, 84, 73, 67, 65, 76, 95, 73, 77, 80, 79, 82, 84, 65, 78, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str231 = allocate([ 84, 73, 80, 67, 95, 83, 85, 66, 95, 80, 79, 82, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str232 = allocate([ 84, 73, 80, 67, 95, 83, 85, 66, 95, 83, 69, 82, 86, 73, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str233 = allocate([ 84, 73, 80, 67, 95, 83, 85, 66, 95, 67, 65, 78, 67, 69, 76, 0 ], "i8", ALLOC_NORMAL);
    __str234 = allocate([ 84, 73, 80, 67, 95, 87, 65, 73, 84, 95, 70, 79, 82, 69, 86, 69, 82, 0 ], "i8", ALLOC_NORMAL);
    __str235 = allocate([ 84, 73, 80, 67, 95, 80, 85, 66, 76, 73, 83, 72, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str236 = allocate([ 84, 73, 80, 67, 95, 87, 73, 84, 72, 68, 82, 65, 87, 78, 0 ], "i8", ALLOC_NORMAL);
    __str237 = allocate([ 84, 73, 80, 67, 95, 83, 85, 66, 83, 67, 82, 95, 84, 73, 77, 69, 79, 85, 84, 0 ], "i8", ALLOC_NORMAL);
    __str238 = allocate([ 84, 73, 80, 67, 95, 67, 70, 71, 95, 83, 82, 86, 0 ], "i8", ALLOC_NORMAL);
    __str239 = allocate([ 84, 73, 80, 67, 95, 84, 79, 80, 95, 83, 82, 86, 0 ], "i8", ALLOC_NORMAL);
    __str240 = allocate([ 83, 79, 67, 75, 95, 83, 84, 82, 69, 65, 77, 0 ], "i8", ALLOC_NORMAL);
    __str241 = allocate([ 83, 79, 67, 75, 95, 68, 71, 82, 65, 77, 0 ], "i8", ALLOC_NORMAL);
    __str242 = allocate([ 83, 79, 67, 75, 95, 82, 65, 87, 0 ], "i8", ALLOC_NORMAL);
    __str243 = allocate([ 83, 79, 67, 75, 95, 83, 69, 81, 80, 65, 67, 75, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str244 = allocate([ 83, 79, 67, 75, 95, 82, 68, 77, 0 ], "i8", ALLOC_NORMAL);
    __str245 = allocate([ 83, 79, 95, 68, 69, 66, 85, 71, 0 ], "i8", ALLOC_NORMAL);
    __str246 = allocate([ 83, 79, 95, 65, 67, 67, 69, 80, 84, 67, 79, 78, 78, 0 ], "i8", ALLOC_NORMAL);
    __str247 = allocate([ 83, 79, 95, 82, 69, 85, 83, 69, 65, 68, 68, 82, 0 ], "i8", ALLOC_NORMAL);
    __str248 = allocate([ 83, 79, 95, 75, 69, 69, 80, 65, 76, 73, 86, 69, 0 ], "i8", ALLOC_NORMAL);
    __str249 = allocate([ 83, 79, 95, 68, 79, 78, 84, 82, 79, 85, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str250 = allocate([ 83, 79, 95, 66, 82, 79, 65, 68, 67, 65, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str251 = allocate([ 83, 79, 95, 76, 73, 78, 71, 69, 82, 0 ], "i8", ALLOC_NORMAL);
    __str252 = allocate([ 83, 79, 95, 79, 79, 66, 73, 78, 76, 73, 78, 69, 0 ], "i8", ALLOC_NORMAL);
    __str253 = allocate([ 83, 79, 95, 83, 78, 68, 66, 85, 70, 0 ], "i8", ALLOC_NORMAL);
    __str254 = allocate([ 83, 79, 95, 82, 67, 86, 66, 85, 70, 0 ], "i8", ALLOC_NORMAL);
    __str255 = allocate([ 83, 79, 95, 83, 78, 68, 76, 79, 87, 65, 84, 0 ], "i8", ALLOC_NORMAL);
    __str256 = allocate([ 83, 79, 95, 82, 67, 86, 76, 79, 87, 65, 84, 0 ], "i8", ALLOC_NORMAL);
    __str257 = allocate([ 83, 79, 95, 83, 78, 68, 84, 73, 77, 69, 79, 0 ], "i8", ALLOC_NORMAL);
    __str258 = allocate([ 83, 79, 95, 82, 67, 86, 84, 73, 77, 69, 79, 0 ], "i8", ALLOC_NORMAL);
    __str259 = allocate([ 83, 79, 95, 69, 82, 82, 79, 82, 0 ], "i8", ALLOC_NORMAL);
    __str260 = allocate([ 83, 79, 95, 84, 89, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str261 = allocate([ 83, 79, 77, 65, 88, 67, 79, 78, 78, 0 ], "i8", ALLOC_NORMAL);
    __str262 = allocate([ 77, 83, 71, 95, 79, 79, 66, 0 ], "i8", ALLOC_NORMAL);
    __str263 = allocate([ 77, 83, 71, 95, 80, 69, 69, 75, 0 ], "i8", ALLOC_NORMAL);
    __str264 = allocate([ 77, 83, 71, 95, 68, 79, 78, 84, 82, 79, 85, 84, 69, 0 ], "i8", ALLOC_NORMAL);
    __str265 = allocate([ 77, 83, 71, 95, 68, 79, 78, 84, 87, 65, 73, 84, 0 ], "i8", ALLOC_NORMAL);
    __str266 = allocate([ 77, 83, 71, 95, 69, 79, 82, 0 ], "i8", ALLOC_NORMAL);
    __str267 = allocate([ 77, 83, 71, 95, 84, 82, 85, 78, 67, 0 ], "i8", ALLOC_NORMAL);
    __str268 = allocate([ 77, 83, 71, 95, 67, 84, 82, 85, 78, 67, 0 ], "i8", ALLOC_NORMAL);
    __str269 = allocate([ 77, 83, 71, 95, 87, 65, 73, 84, 65, 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str270 = allocate([ 83, 79, 76, 95, 83, 79, 67, 75, 69, 84, 0 ], "i8", ALLOC_NORMAL);
    __str271 = allocate([ 83, 79, 76, 95, 73, 80, 0 ], "i8", ALLOC_NORMAL);
    __str272 = allocate([ 83, 79, 76, 95, 84, 67, 80, 0 ], "i8", ALLOC_NORMAL);
    __str273 = allocate([ 83, 79, 76, 95, 85, 68, 80, 0 ], "i8", ALLOC_NORMAL);
    __str274 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 80, 0 ], "i8", ALLOC_NORMAL);
    __str275 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 72, 79, 80, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str276 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 67, 77, 80, 0 ], "i8", ALLOC_NORMAL);
    __str277 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 71, 77, 80, 0 ], "i8", ALLOC_NORMAL);
    __str278 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 80, 86, 54, 0 ], "i8", ALLOC_NORMAL);
    __str279 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 80, 73, 80, 0 ], "i8", ALLOC_NORMAL);
    __str280 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 84, 67, 80, 0 ], "i8", ALLOC_NORMAL);
    __str281 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 69, 71, 80, 0 ], "i8", ALLOC_NORMAL);
    __str282 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 80, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str283 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 85, 68, 80, 0 ], "i8", ALLOC_NORMAL);
    __str284 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 68, 80, 0 ], "i8", ALLOC_NORMAL);
    __str285 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 84, 80, 0 ], "i8", ALLOC_NORMAL);
    __str286 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 82, 79, 85, 84, 73, 78, 71, 0 ], "i8", ALLOC_NORMAL);
    __str287 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 70, 82, 65, 71, 77, 69, 78, 84, 0 ], "i8", ALLOC_NORMAL);
    __str288 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 82, 83, 86, 80, 0 ], "i8", ALLOC_NORMAL);
    __str289 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 71, 82, 69, 0 ], "i8", ALLOC_NORMAL);
    __str290 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 69, 83, 80, 0 ], "i8", ALLOC_NORMAL);
    __str291 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 65, 72, 0 ], "i8", ALLOC_NORMAL);
    __str292 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 73, 67, 77, 80, 86, 54, 0 ], "i8", ALLOC_NORMAL);
    __str293 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 78, 79, 78, 69, 0 ], "i8", ALLOC_NORMAL);
    __str294 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 68, 83, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str295 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 80, 73, 77, 0 ], "i8", ALLOC_NORMAL);
    __str296 = allocate([ 73, 80, 80, 82, 79, 84, 79, 95, 82, 65, 87, 0 ], "i8", ALLOC_NORMAL);
    __str297 = allocate([ 73, 80, 80, 79, 82, 84, 95, 82, 69, 83, 69, 82, 86, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str298 = allocate([ 73, 80, 80, 79, 82, 84, 95, 85, 83, 69, 82, 82, 69, 83, 69, 82, 86, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str299 = allocate([ 73, 78, 65, 68, 68, 82, 95, 65, 78, 89, 0 ], "i8", ALLOC_NORMAL);
    __str300 = allocate([ 73, 78, 65, 68, 68, 82, 95, 66, 82, 79, 65, 68, 67, 65, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str301 = allocate([ 73, 78, 65, 68, 68, 82, 95, 76, 79, 79, 80, 66, 65, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str302 = allocate([ 73, 78, 65, 68, 68, 82, 95, 85, 78, 83, 80, 69, 67, 95, 71, 82, 79, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str303 = allocate([ 73, 78, 65, 68, 68, 82, 95, 65, 76, 76, 72, 79, 83, 84, 83, 95, 71, 82, 79, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str304 = allocate([ 73, 78, 65, 68, 68, 82, 95, 77, 65, 88, 95, 76, 79, 67, 65, 76, 95, 71, 82, 79, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str305 = allocate([ 73, 78, 65, 68, 68, 82, 95, 78, 79, 78, 69, 0 ], "i8", ALLOC_NORMAL);
    __str306 = allocate([ 73, 80, 95, 79, 80, 84, 73, 79, 78, 83, 0 ], "i8", ALLOC_NORMAL);
    __str307 = allocate([ 73, 80, 95, 72, 68, 82, 73, 78, 67, 76, 0 ], "i8", ALLOC_NORMAL);
    __str308 = allocate([ 73, 80, 95, 84, 79, 83, 0 ], "i8", ALLOC_NORMAL);
    __str309 = allocate([ 73, 80, 95, 84, 84, 76, 0 ], "i8", ALLOC_NORMAL);
    __str310 = allocate([ 73, 80, 95, 82, 69, 67, 86, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str311 = allocate([ 73, 80, 95, 82, 69, 67, 86, 82, 69, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str312 = allocate([ 73, 80, 95, 82, 69, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str313 = allocate([ 73, 80, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 73, 70, 0 ], "i8", ALLOC_NORMAL);
    __str314 = allocate([ 73, 80, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 84, 84, 76, 0 ], "i8", ALLOC_NORMAL);
    __str315 = allocate([ 73, 80, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 76, 79, 79, 80, 0 ], "i8", ALLOC_NORMAL);
    __str316 = allocate([ 73, 80, 95, 65, 68, 68, 95, 77, 69, 77, 66, 69, 82, 83, 72, 73, 80, 0 ], "i8", ALLOC_NORMAL);
    __str317 = allocate([ 73, 80, 95, 68, 82, 79, 80, 95, 77, 69, 77, 66, 69, 82, 83, 72, 73, 80, 0 ], "i8", ALLOC_NORMAL);
    __str318 = allocate([ 73, 80, 95, 68, 69, 70, 65, 85, 76, 84, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 84, 84, 76, 0 ], "i8", ALLOC_NORMAL);
    __str319 = allocate([ 73, 80, 95, 68, 69, 70, 65, 85, 76, 84, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 76, 79, 79, 80, 0 ], "i8", ALLOC_NORMAL);
    __str320 = allocate([ 73, 80, 95, 77, 65, 88, 95, 77, 69, 77, 66, 69, 82, 83, 72, 73, 80, 83, 0 ], "i8", ALLOC_NORMAL);
    __str321 = allocate([ 73, 80, 86, 54, 95, 74, 79, 73, 78, 95, 71, 82, 79, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str322 = allocate([ 73, 80, 86, 54, 95, 76, 69, 65, 86, 69, 95, 71, 82, 79, 85, 80, 0 ], "i8", ALLOC_NORMAL);
    __str323 = allocate([ 73, 80, 86, 54, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 72, 79, 80, 83, 0 ], "i8", ALLOC_NORMAL);
    __str324 = allocate([ 73, 80, 86, 54, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 73, 70, 0 ], "i8", ALLOC_NORMAL);
    __str325 = allocate([ 73, 80, 86, 54, 95, 77, 85, 76, 84, 73, 67, 65, 83, 84, 95, 76, 79, 79, 80, 0 ], "i8", ALLOC_NORMAL);
    __str326 = allocate([ 73, 80, 86, 54, 95, 85, 78, 73, 67, 65, 83, 84, 95, 72, 79, 80, 83, 0 ], "i8", ALLOC_NORMAL);
    __str327 = allocate([ 73, 80, 86, 54, 95, 86, 54, 79, 78, 76, 89, 0 ], "i8", ALLOC_NORMAL);
    __str328 = allocate([ 73, 80, 86, 54, 95, 67, 72, 69, 67, 75, 83, 85, 77, 0 ], "i8", ALLOC_NORMAL);
    __str329 = allocate([ 73, 80, 86, 54, 95, 68, 83, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str330 = allocate([ 73, 80, 86, 54, 95, 72, 79, 80, 76, 73, 77, 73, 84, 0 ], "i8", ALLOC_NORMAL);
    __str331 = allocate([ 73, 80, 86, 54, 95, 72, 79, 80, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str332 = allocate([ 73, 80, 86, 54, 95, 78, 69, 88, 84, 72, 79, 80, 0 ], "i8", ALLOC_NORMAL);
    __str333 = allocate([ 73, 80, 86, 54, 95, 80, 75, 84, 73, 78, 70, 79, 0 ], "i8", ALLOC_NORMAL);
    __str334 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 68, 83, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str335 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 72, 79, 80, 76, 73, 77, 73, 84, 0 ], "i8", ALLOC_NORMAL);
    __str336 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 72, 79, 80, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str337 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 80, 75, 84, 73, 78, 70, 79, 0 ], "i8", ALLOC_NORMAL);
    __str338 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 82, 84, 72, 68, 82, 0 ], "i8", ALLOC_NORMAL);
    __str339 = allocate([ 73, 80, 86, 54, 95, 82, 69, 67, 86, 84, 67, 76, 65, 83, 83, 0 ], "i8", ALLOC_NORMAL);
    __str340 = allocate([ 73, 80, 86, 54, 95, 82, 84, 72, 68, 82, 0 ], "i8", ALLOC_NORMAL);
    __str341 = allocate([ 73, 80, 86, 54, 95, 82, 84, 72, 68, 82, 68, 83, 84, 79, 80, 84, 83, 0 ], "i8", ALLOC_NORMAL);
    __str342 = allocate([ 73, 80, 86, 54, 95, 82, 84, 72, 68, 82, 95, 84, 89, 80, 69, 95, 48, 0 ], "i8", ALLOC_NORMAL);
    __str343 = allocate([ 73, 80, 86, 54, 95, 84, 67, 76, 65, 83, 83, 0 ], "i8", ALLOC_NORMAL);
    __str344 = allocate([ 84, 67, 80, 95, 78, 79, 68, 69, 76, 65, 89, 0 ], "i8", ALLOC_NORMAL);
    __str345 = allocate([ 84, 67, 80, 95, 77, 65, 88, 83, 69, 71, 0 ], "i8", ALLOC_NORMAL);
    __str346 = allocate([ 84, 67, 80, 95, 67, 79, 82, 75, 0 ], "i8", ALLOC_NORMAL);
    __str347 = allocate([ 84, 67, 80, 95, 75, 69, 69, 80, 73, 68, 76, 69, 0 ], "i8", ALLOC_NORMAL);
    __str348 = allocate([ 84, 67, 80, 95, 75, 69, 69, 80, 73, 78, 84, 86, 76, 0 ], "i8", ALLOC_NORMAL);
    __str349 = allocate([ 84, 67, 80, 95, 75, 69, 69, 80, 67, 78, 84, 0 ], "i8", ALLOC_NORMAL);
    __str350 = allocate([ 84, 67, 80, 95, 83, 89, 78, 67, 78, 84, 0 ], "i8", ALLOC_NORMAL);
    __str351 = allocate([ 84, 67, 80, 95, 76, 73, 78, 71, 69, 82, 50, 0 ], "i8", ALLOC_NORMAL);
    __str352 = allocate([ 84, 67, 80, 95, 68, 69, 70, 69, 82, 95, 65, 67, 67, 69, 80, 84, 0 ], "i8", ALLOC_NORMAL);
    __str353 = allocate([ 84, 67, 80, 95, 87, 73, 78, 68, 79, 87, 95, 67, 76, 65, 77, 80, 0 ], "i8", ALLOC_NORMAL);
    __str354 = allocate([ 84, 67, 80, 95, 73, 78, 70, 79, 0 ], "i8", ALLOC_NORMAL);
    __str355 = allocate([ 84, 67, 80, 95, 81, 85, 73, 67, 75, 65, 67, 75, 0 ], "i8", ALLOC_NORMAL);
    __str356 = allocate([ 69, 65, 73, 95, 65, 68, 68, 82, 70, 65, 77, 73, 76, 89, 0 ], "i8", ALLOC_NORMAL);
    __str357 = allocate([ 69, 65, 73, 95, 65, 71, 65, 73, 78, 0 ], "i8", ALLOC_NORMAL);
    __str358 = allocate([ 69, 65, 73, 95, 66, 65, 68, 70, 76, 65, 71, 83, 0 ], "i8", ALLOC_NORMAL);
    __str359 = allocate([ 69, 65, 73, 95, 70, 65, 73, 76, 0 ], "i8", ALLOC_NORMAL);
    __str360 = allocate([ 69, 65, 73, 95, 70, 65, 77, 73, 76, 89, 0 ], "i8", ALLOC_NORMAL);
    __str361 = allocate([ 69, 65, 73, 95, 77, 69, 77, 79, 82, 89, 0 ], "i8", ALLOC_NORMAL);
    __str362 = allocate([ 69, 65, 73, 95, 78, 79, 68, 65, 84, 65, 0 ], "i8", ALLOC_NORMAL);
    __str363 = allocate([ 69, 65, 73, 95, 78, 79, 78, 65, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str364 = allocate([ 69, 65, 73, 95, 79, 86, 69, 82, 70, 76, 79, 87, 0 ], "i8", ALLOC_NORMAL);
    __str365 = allocate([ 69, 65, 73, 95, 83, 69, 82, 86, 73, 67, 69, 0 ], "i8", ALLOC_NORMAL);
    __str366 = allocate([ 69, 65, 73, 95, 83, 79, 67, 75, 84, 89, 80, 69, 0 ], "i8", ALLOC_NORMAL);
    __str367 = allocate([ 69, 65, 73, 95, 83, 89, 83, 84, 69, 77, 0 ], "i8", ALLOC_NORMAL);
    __str368 = allocate([ 65, 73, 95, 80, 65, 83, 83, 73, 86, 69, 0 ], "i8", ALLOC_NORMAL);
    __str369 = allocate([ 65, 73, 95, 67, 65, 78, 79, 78, 78, 65, 77, 69, 0 ], "i8", ALLOC_NORMAL);
    __str370 = allocate([ 65, 73, 95, 78, 85, 77, 69, 82, 73, 67, 72, 79, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str371 = allocate([ 65, 73, 95, 78, 85, 77, 69, 82, 73, 67, 83, 69, 82, 86, 0 ], "i8", ALLOC_NORMAL);
    __str372 = allocate([ 65, 73, 95, 65, 76, 76, 0 ], "i8", ALLOC_NORMAL);
    __str373 = allocate([ 65, 73, 95, 65, 68, 68, 82, 67, 79, 78, 70, 73, 71, 0 ], "i8", ALLOC_NORMAL);
    __str374 = allocate([ 65, 73, 95, 86, 52, 77, 65, 80, 80, 69, 68, 0 ], "i8", ALLOC_NORMAL);
    __str375 = allocate([ 78, 73, 95, 77, 65, 88, 72, 79, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str376 = allocate([ 78, 73, 95, 77, 65, 88, 83, 69, 82, 86, 0 ], "i8", ALLOC_NORMAL);
    __str377 = allocate([ 78, 73, 95, 78, 79, 70, 81, 68, 78, 0 ], "i8", ALLOC_NORMAL);
    __str378 = allocate([ 78, 73, 95, 78, 85, 77, 69, 82, 73, 67, 72, 79, 83, 84, 0 ], "i8", ALLOC_NORMAL);
    __str379 = allocate([ 78, 73, 95, 78, 65, 77, 69, 82, 69, 81, 68, 0 ], "i8", ALLOC_NORMAL);
    __str380 = allocate([ 78, 73, 95, 78, 85, 77, 69, 82, 73, 67, 83, 69, 82, 86, 0 ], "i8", ALLOC_NORMAL);
    __str381 = allocate([ 78, 73, 95, 68, 71, 82, 65, 77, 0 ], "i8", ALLOC_NORMAL);
    __str382 = allocate([ 83, 72, 85, 84, 95, 82, 68, 0 ], "i8", ALLOC_NORMAL);
    __str383 = allocate([ 83, 72, 85, 84, 95, 87, 82, 0 ], "i8", ALLOC_NORMAL);
    __str384 = allocate([ 83, 72, 85, 84, 95, 82, 68, 87, 82, 0 ], "i8", ALLOC_NORMAL);
    HEAP[_kwlist_10873] = __str47;
    HEAP[_kwlist_10873 + 4] = __str48;
    HEAP[_kwlist_10873 + 8] = __str49;
    HEAP[_kwlist_11020] = __str47;
    HEAP[_kwlist_11020 + 4] = __str48;
    HEAP[_kwlist_11020 + 8] = __str49;
    HEAP[_sock_methods] = __str64;
    HEAP[_sock_methods + 4] = FUNCTION_TABLE_OFFSET + 6;
    HEAP[_sock_methods + 12] = _accept_doc;
    HEAP[_sock_methods + 16] = __str65;
    HEAP[_sock_methods + 20] = FUNCTION_TABLE_OFFSET + 8;
    HEAP[_sock_methods + 28] = _bind_doc;
    HEAP[_sock_methods + 32] = __str66;
    HEAP[_sock_methods + 36] = FUNCTION_TABLE_OFFSET + 10;
    HEAP[_sock_methods + 44] = _close_doc;
    HEAP[_sock_methods + 48] = __str67;
    HEAP[_sock_methods + 52] = FUNCTION_TABLE_OFFSET + 12;
    HEAP[_sock_methods + 60] = _connect_doc;
    HEAP[_sock_methods + 64] = __str68;
    HEAP[_sock_methods + 68] = FUNCTION_TABLE_OFFSET + 14;
    HEAP[_sock_methods + 76] = _connect_ex_doc;
    HEAP[_sock_methods + 80] = __str69;
    HEAP[_sock_methods + 84] = FUNCTION_TABLE_OFFSET + 16;
    HEAP[_sock_methods + 92] = _dup_doc;
    HEAP[_sock_methods + 96] = __str70;
    HEAP[_sock_methods + 100] = FUNCTION_TABLE_OFFSET + 18;
    HEAP[_sock_methods + 108] = _fileno_doc;
    HEAP[_sock_methods + 112] = __str71;
    HEAP[_sock_methods + 116] = FUNCTION_TABLE_OFFSET + 20;
    HEAP[_sock_methods + 124] = _getpeername_doc;
    HEAP[_sock_methods + 128] = __str72;
    HEAP[_sock_methods + 132] = FUNCTION_TABLE_OFFSET + 22;
    HEAP[_sock_methods + 140] = _getsockname_doc;
    HEAP[_sock_methods + 144] = __str73;
    HEAP[_sock_methods + 148] = FUNCTION_TABLE_OFFSET + 24;
    HEAP[_sock_methods + 156] = _getsockopt_doc;
    HEAP[_sock_methods + 160] = __str74;
    HEAP[_sock_methods + 164] = FUNCTION_TABLE_OFFSET + 26;
    HEAP[_sock_methods + 172] = _listen_doc;
    HEAP[_sock_methods + 176] = __str75;
    HEAP[_sock_methods + 180] = FUNCTION_TABLE_OFFSET + 28;
    HEAP[_sock_methods + 188] = _makefile_doc;
    HEAP[_sock_methods + 192] = __str76;
    HEAP[_sock_methods + 196] = FUNCTION_TABLE_OFFSET + 30;
    HEAP[_sock_methods + 204] = _recv_doc;
    HEAP[_sock_methods + 208] = __str77;
    HEAP[_sock_methods + 212] = FUNCTION_TABLE_OFFSET + 32;
    HEAP[_sock_methods + 220] = _recv_into_doc;
    HEAP[_sock_methods + 224] = __str78;
    HEAP[_sock_methods + 228] = FUNCTION_TABLE_OFFSET + 34;
    HEAP[_sock_methods + 236] = _recvfrom_doc;
    HEAP[_sock_methods + 240] = __str79;
    HEAP[_sock_methods + 244] = FUNCTION_TABLE_OFFSET + 36;
    HEAP[_sock_methods + 252] = _recvfrom_into_doc;
    HEAP[_sock_methods + 256] = __str80;
    HEAP[_sock_methods + 260] = FUNCTION_TABLE_OFFSET + 38;
    HEAP[_sock_methods + 268] = _send_doc;
    HEAP[_sock_methods + 272] = __str81;
    HEAP[_sock_methods + 276] = FUNCTION_TABLE_OFFSET + 40;
    HEAP[_sock_methods + 284] = _sendall_doc;
    HEAP[_sock_methods + 288] = __str82;
    HEAP[_sock_methods + 292] = FUNCTION_TABLE_OFFSET + 42;
    HEAP[_sock_methods + 300] = _sendto_doc;
    HEAP[_sock_methods + 304] = __str83;
    HEAP[_sock_methods + 308] = FUNCTION_TABLE_OFFSET + 44;
    HEAP[_sock_methods + 316] = _setblocking_doc;
    HEAP[_sock_methods + 320] = __str84;
    HEAP[_sock_methods + 324] = FUNCTION_TABLE_OFFSET + 46;
    HEAP[_sock_methods + 332] = _settimeout_doc;
    HEAP[_sock_methods + 336] = __str85;
    HEAP[_sock_methods + 340] = FUNCTION_TABLE_OFFSET + 48;
    HEAP[_sock_methods + 348] = _gettimeout_doc;
    HEAP[_sock_methods + 352] = __str86;
    HEAP[_sock_methods + 356] = FUNCTION_TABLE_OFFSET + 50;
    HEAP[_sock_methods + 364] = _setsockopt_doc;
    HEAP[_sock_methods + 368] = __str87;
    HEAP[_sock_methods + 372] = FUNCTION_TABLE_OFFSET + 52;
    HEAP[_sock_methods + 380] = _shutdown_doc;
    HEAP[_sock_memberlist] = __str88;
    HEAP[_sock_memberlist + 16] = __str89;
    HEAP[_sock_memberlist + 20] = __str90;
    HEAP[_sock_memberlist + 36] = __str91;
    HEAP[_sock_memberlist + 40] = __str92;
    HEAP[_sock_memberlist + 56] = __str93;
    HEAP[_sock_memberlist + 60] = __str94;
    HEAP[_sock_memberlist + 76] = __str95;
    HEAP[_keywords_11267] = __str88;
    HEAP[_keywords_11267 + 4] = __str90;
    HEAP[_keywords_11267 + 8] = __str92;
    HEAP[_sock_type + 12] = __str98;
    HEAP[_sock_type + 24] = FUNCTION_TABLE_OFFSET + 54;
    HEAP[_sock_type + 44] = FUNCTION_TABLE_OFFSET + 56;
    HEAP[_sock_type + 72] = FUNCTION_TABLE_OFFSET + 58;
    HEAP[_sock_type + 88] = _sock_doc;
    HEAP[_sock_type + 116] = _sock_methods;
    HEAP[_sock_type + 120] = _sock_memberlist;
    HEAP[_sock_type + 148] = FUNCTION_TABLE_OFFSET + 60;
    HEAP[_sock_type + 152] = FUNCTION_TABLE_OFFSET + 62;
    HEAP[_sock_type + 156] = FUNCTION_TABLE_OFFSET + 64;
    HEAP[_sock_type + 160] = FUNCTION_TABLE_OFFSET + 66;
    HEAP[_socket_methods] = __str139;
    HEAP[_socket_methods + 4] = FUNCTION_TABLE_OFFSET + 68;
    HEAP[_socket_methods + 12] = _gethostbyname_doc;
    HEAP[_socket_methods + 16] = __str140;
    HEAP[_socket_methods + 20] = FUNCTION_TABLE_OFFSET + 70;
    HEAP[_socket_methods + 28] = _ghbn_ex_doc;
    HEAP[_socket_methods + 32] = __str141;
    HEAP[_socket_methods + 36] = FUNCTION_TABLE_OFFSET + 72;
    HEAP[_socket_methods + 44] = _gethostbyaddr_doc;
    HEAP[_socket_methods + 48] = __str142;
    HEAP[_socket_methods + 52] = FUNCTION_TABLE_OFFSET + 74;
    HEAP[_socket_methods + 60] = _gethostname_doc;
    HEAP[_socket_methods + 64] = __str143;
    HEAP[_socket_methods + 68] = FUNCTION_TABLE_OFFSET + 76;
    HEAP[_socket_methods + 76] = _getservbyname_doc;
    HEAP[_socket_methods + 80] = __str144;
    HEAP[_socket_methods + 84] = FUNCTION_TABLE_OFFSET + 78;
    HEAP[_socket_methods + 92] = _getservbyport_doc;
    HEAP[_socket_methods + 96] = __str145;
    HEAP[_socket_methods + 100] = FUNCTION_TABLE_OFFSET + 80;
    HEAP[_socket_methods + 108] = _getprotobyname_doc;
    HEAP[_socket_methods + 112] = __str146;
    HEAP[_socket_methods + 116] = FUNCTION_TABLE_OFFSET + 82;
    HEAP[_socket_methods + 124] = _fromfd_doc;
    HEAP[_socket_methods + 128] = __str147;
    HEAP[_socket_methods + 132] = FUNCTION_TABLE_OFFSET + 84;
    HEAP[_socket_methods + 140] = _socketpair_doc;
    HEAP[_socket_methods + 144] = __str148;
    HEAP[_socket_methods + 148] = FUNCTION_TABLE_OFFSET + 86;
    HEAP[_socket_methods + 156] = _ntohs_doc;
    HEAP[_socket_methods + 160] = __str149;
    HEAP[_socket_methods + 164] = FUNCTION_TABLE_OFFSET + 88;
    HEAP[_socket_methods + 172] = _ntohl_doc;
    HEAP[_socket_methods + 176] = __str150;
    HEAP[_socket_methods + 180] = FUNCTION_TABLE_OFFSET + 90;
    HEAP[_socket_methods + 188] = _htons_doc;
    HEAP[_socket_methods + 192] = __str151;
    HEAP[_socket_methods + 196] = FUNCTION_TABLE_OFFSET + 92;
    HEAP[_socket_methods + 204] = _htonl_doc;
    HEAP[_socket_methods + 208] = __str152;
    HEAP[_socket_methods + 212] = FUNCTION_TABLE_OFFSET + 94;
    HEAP[_socket_methods + 220] = _inet_aton_doc;
    HEAP[_socket_methods + 224] = __str153;
    HEAP[_socket_methods + 228] = FUNCTION_TABLE_OFFSET + 96;
    HEAP[_socket_methods + 236] = _inet_ntoa_doc;
    HEAP[_socket_methods + 240] = __str154;
    HEAP[_socket_methods + 244] = FUNCTION_TABLE_OFFSET + 98;
    HEAP[_socket_methods + 252] = _inet_pton_doc;
    HEAP[_socket_methods + 256] = __str155;
    HEAP[_socket_methods + 260] = FUNCTION_TABLE_OFFSET + 100;
    HEAP[_socket_methods + 268] = _inet_ntop_doc;
    HEAP[_socket_methods + 272] = __str156;
    HEAP[_socket_methods + 276] = FUNCTION_TABLE_OFFSET + 102;
    HEAP[_socket_methods + 284] = _getaddrinfo_doc;
    HEAP[_socket_methods + 288] = __str157;
    HEAP[_socket_methods + 292] = FUNCTION_TABLE_OFFSET + 104;
    HEAP[_socket_methods + 300] = _getnameinfo_doc;
    HEAP[_socket_methods + 304] = __str158;
    HEAP[_socket_methods + 308] = FUNCTION_TABLE_OFFSET + 106;
    HEAP[_socket_methods + 316] = _getdefaulttimeout_doc;
    HEAP[_socket_methods + 320] = __str159;
    HEAP[_socket_methods + 324] = FUNCTION_TABLE_OFFSET + 108;
    HEAP[_socket_methods + 332] = _setdefaulttimeout_doc;
    HEAP[_PySocketModuleAPI] = _sock_type;
    __globalConstructor__();
  }
  Module["run"] = run;
  run();
  return Module;
});
