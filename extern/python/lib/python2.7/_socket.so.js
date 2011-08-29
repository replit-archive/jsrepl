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



var $0___SIZE = 16; // %0
  
var $1___SIZE = 16; // %1
  
var $2___SIZE = 12; // %2
  
var $3___SIZE = 400; // %3
  
var $4___SIZE = 16; // %4
  
var $5___SIZE = 100; // %5
  
var $6___SIZE = 20; // %6
  
var $7___SIZE = 196; // %7
  
var $8___SIZE = 352; // %8
  
var $9___SIZE = 4; // %9
  
var $struct_FILE___SIZE = 148; // %struct.FILE
  var $struct_FILE___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60,64,68,70,71,72,76,84,88,92,96,100,104,108];
var $struct_PyBufferProcs___SIZE = 24; // %struct.PyBufferProcs
  
var $struct_PyGetSetDef___SIZE = 20; // %struct.PyGetSetDef
  
var $struct_PyIntObject___SIZE = 12; // %struct.PyIntObject
  
var $struct_PyMappingMethods___SIZE = 12; // %struct.PyMappingMethods
  
var $struct_PyMemberDef___SIZE = 20; // %struct.PyMemberDef
  
var $struct_PyMethodDef___SIZE = 16; // %struct.PyMethodDef
  
var $struct_PyNumberMethods___SIZE = 156; // %struct.PyNumberMethods
  
var $struct_PyObject___SIZE = 8; // %struct.PyObject
  
var $struct_PySequenceMethods___SIZE = 40; // %struct.PySequenceMethods
  
var $struct_PySocketModule_APIObject___SIZE = 8; // %struct.PySocketModule_APIObject
  
var $struct_PySocketSockObject___SIZE = 36; // %struct.PySocketSockObject
  
var $struct_PyStringObject___SIZE = 24; // %struct.PyStringObject
  
var $struct_Py_buffer___SIZE = 52; // %struct.Py_buffer
  var $struct_Py_buffer___FLATTENER = [0,4,8,12,16,20,24,28,32,36,40,48];
var $struct__IO_marker___SIZE = 12; // %struct._IO_marker
  
var $struct__typeobject___SIZE = 196; // %struct._typeobject
  
var $struct_addrinfo___SIZE = 32; // %struct.addrinfo
  
var $struct_anon___SIZE = 12; // %struct.anon
  
var $struct_hostent___SIZE = 20; // %struct.hostent
  
var $struct_ifmap___SIZE = 16; // %struct.ifmap
  var $struct_ifmap___FLATTENER = [0,4,8,10,11,12];
var $struct_ifreq___SIZE = 32; // %struct.ifreq
  
var $struct_in6_addr___SIZE = 16; // %struct.in6_addr
  
var $struct_in_addr___SIZE = 4; // %struct.in_addr
  
var $struct_pollfd___SIZE = 8; // %struct.pollfd
  var $struct_pollfd___FLATTENER = [0,4,6];
var $struct_protoent___SIZE = 12; // %struct.protoent
  
var $struct_servent___SIZE = 16; // %struct.servent
  
var $struct_sockaddr___SIZE = 16; // %struct.sockaddr
  
var $struct_sockaddr_in___SIZE = 16; // %struct.sockaddr_in
  var $struct_sockaddr_in___FLATTENER = [0,2,4,8];
var $struct_sockaddr_in6___SIZE = 28; // %struct.sockaddr_in6
  var $struct_sockaddr_in6___FLATTENER = [0,2,4,8,24];
var $struct_sockaddr_ll___SIZE = 20; // %struct.sockaddr_ll
  var $struct_sockaddr_ll___FLATTENER = [0,2,4,8,10,11,12];
var $struct_sockaddr_nl___SIZE = 12; // %struct.sockaddr_nl
  var $struct_sockaddr_nl___FLATTENER = [0,2,4,8];
var $struct_sockaddr_storage___SIZE = 128; // %struct.sockaddr_storage
  
var $struct_sockaddr_tipc___SIZE = 16; // %struct.sockaddr_tipc
  var $struct_sockaddr_tipc___FLATTENER = [0,2,3,4];
var $struct_sockaddr_un___SIZE = 110; // %struct.sockaddr_un
  
var $struct_tipc_name___SIZE = 8; // %struct.tipc_name
  
var $struct_tipc_name_seq___SIZE = 12; // %struct.tipc_name_seq
  
var $union_anon___SIZE = 16; // %union.anon
  
var $union_sock_addr_t___SIZE = 128; // %union.sock_addr_t
  
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
    ;
    var __label__;
  
    var $retval;
    var $0;
    var $1=HEAP[_socket_error]; //@line 543 "socketmodule.c"
    var $2=_PyErr_SetFromErrno($1); //@line 543 "socketmodule.c"
    $0=$2; //@line 543 "socketmodule.c"
    var $3=$0; //@line 543 "socketmodule.c"
    $retval=$3; //@line 543 "socketmodule.c"
    var $retval1=$retval; //@line 543 "socketmodule.c"
    ;
    return $retval1; //@line 543 "socketmodule.c"
  }
  

  function _set_herror($h_error) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $h_error_addr;
        var $v;
        $h_error_addr=$h_error;
        var $0=$h_error_addr; //@line 553 "socketmodule.c"
        var $1=_hstrerror($0); //@line 553 "socketmodule.c"
        var $2=$h_error_addr; //@line 553 "socketmodule.c"
        var $3=_Py_BuildValue(__str1, allocate([$2,0,0,0,$1,0,0,0], ["i32",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 553 "socketmodule.c"
        $v=$3; //@line 553 "socketmodule.c"
        var $4=$v; //@line 557 "socketmodule.c"
        var $5=($4)!=0; //@line 557 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 557 "socketmodule.c"
      case 1: // $bb
        var $6=HEAP[_socket_herror]; //@line 558 "socketmodule.c"
        var $7=$v; //@line 558 "socketmodule.c"
        _PyErr_SetObject($6, $7); //@line 558 "socketmodule.c"
        var $8=$v; //@line 559 "socketmodule.c"
        var $9=$8; //@line 559 "socketmodule.c"
        var $10=HEAP[$9]; //@line 559 "socketmodule.c"
        var $11=($10) - 1; //@line 559 "socketmodule.c"
        var $12=$v; //@line 559 "socketmodule.c"
        var $13=$12; //@line 559 "socketmodule.c"
        HEAP[$13]=$11; //@line 559 "socketmodule.c"
        var $14=$v; //@line 559 "socketmodule.c"
        var $15=$14; //@line 559 "socketmodule.c"
        var $16=HEAP[$15]; //@line 559 "socketmodule.c"
        var $17=($16)==0; //@line 559 "socketmodule.c"
        if ($17) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 559 "socketmodule.c"
      case 2: // $bb1
        var $18=$v; //@line 559 "socketmodule.c"
        var $19=$18+4; //@line 559 "socketmodule.c"
        var $20=HEAP[$19]; //@line 559 "socketmodule.c"
        var $21=$20+24; //@line 559 "socketmodule.c"
        var $22=HEAP[$21]; //@line 559 "socketmodule.c"
        var $23=$v; //@line 559 "socketmodule.c"
        FUNCTION_TABLE[$22]($23); //@line 559 "socketmodule.c"
        __label__ = 3; break; //@line 559 "socketmodule.c"
      case 3: // $bb2
        ;
        return;
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _set_gaierror($error) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $error_addr;
        var $0;
        var $v;
        $error_addr=$error;
        var $1=$error_addr; //@line 573 "socketmodule.c"
        var $2=($1)==-11; //@line 573 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 573 "socketmodule.c"
      case 1: // $bb
        var $3=_set_error(); //@line 574 "socketmodule.c"
        $0=$3; //@line 574 "socketmodule.c"
        __label__ = 6; break; //@line 574 "socketmodule.c"
      case 2: // $bb1
        var $4=$error_addr; //@line 578 "socketmodule.c"
        var $5=_gai_strerror($4); //@line 578 "socketmodule.c"
        var $6=$error_addr; //@line 578 "socketmodule.c"
        var $7=_Py_BuildValue(__str1, allocate([$6,0,0,0,$5,0,0,0], ["i32",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 578 "socketmodule.c"
        $v=$7; //@line 578 "socketmodule.c"
        var $8=$v; //@line 582 "socketmodule.c"
        var $9=($8)!=0; //@line 582 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 582 "socketmodule.c"
      case 3: // $bb2
        var $10=HEAP[_socket_gaierror]; //@line 583 "socketmodule.c"
        var $11=$v; //@line 583 "socketmodule.c"
        _PyErr_SetObject($10, $11); //@line 583 "socketmodule.c"
        var $12=$v; //@line 584 "socketmodule.c"
        var $13=$12; //@line 584 "socketmodule.c"
        var $14=HEAP[$13]; //@line 584 "socketmodule.c"
        var $15=($14) - 1; //@line 584 "socketmodule.c"
        var $16=$v; //@line 584 "socketmodule.c"
        var $17=$16; //@line 584 "socketmodule.c"
        HEAP[$17]=$15; //@line 584 "socketmodule.c"
        var $18=$v; //@line 584 "socketmodule.c"
        var $19=$18; //@line 584 "socketmodule.c"
        var $20=HEAP[$19]; //@line 584 "socketmodule.c"
        var $21=($20)==0; //@line 584 "socketmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 584 "socketmodule.c"
      case 4: // $bb3
        var $22=$v; //@line 584 "socketmodule.c"
        var $23=$22+4; //@line 584 "socketmodule.c"
        var $24=HEAP[$23]; //@line 584 "socketmodule.c"
        var $25=$24+24; //@line 584 "socketmodule.c"
        var $26=HEAP[$25]; //@line 584 "socketmodule.c"
        var $27=$v; //@line 584 "socketmodule.c"
        FUNCTION_TABLE[$26]($27); //@line 584 "socketmodule.c"
        __label__ = 5; break; //@line 584 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 587 "socketmodule.c"
        __label__ = 6; break; //@line 587 "socketmodule.c"
      case 6: // $bb5
        ;
        return;
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_setblocking($s, $block) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $block_addr;
        var $delay_flag;
        $s_addr=$s;
        $block_addr=$block;
        var $0=$s_addr; //@line 640 "socketmodule.c"
        var $1=$0+8; //@line 640 "socketmodule.c"
        var $2=HEAP[$1]; //@line 640 "socketmodule.c"
        var $3=_fcntl($2, 3, allocate(4, "i32", ALLOC_STACK)); //@line 640 "socketmodule.c"
        $delay_flag=$3; //@line 640 "socketmodule.c"
        var $4=$block_addr; //@line 641 "socketmodule.c"
        var $5=($4)!=0; //@line 641 "socketmodule.c"
        var $6=$delay_flag; //@line 642 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 641 "socketmodule.c"
      case 1: // $bb
        var $7=($6) & -2049; //@line 642 "socketmodule.c"
        $delay_flag=$7; //@line 642 "socketmodule.c"
        __label__ = 3; break; //@line 642 "socketmodule.c"
      case 2: // $bb1
        var $8=($6) | 2048; //@line 644 "socketmodule.c"
        $delay_flag=$8; //@line 644 "socketmodule.c"
        __label__ = 3; break; //@line 644 "socketmodule.c"
      case 3: // $bb2
        var $9=$s_addr; //@line 645 "socketmodule.c"
        var $10=$9+8; //@line 645 "socketmodule.c"
        var $11=HEAP[$10]; //@line 645 "socketmodule.c"
        var $12=$delay_flag; //@line 645 "socketmodule.c"
        var $13=_fcntl($11, 4, allocate([$12,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 645 "socketmodule.c"
        ;
        return;
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_select($s, $writing) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $writing_addr;
        var $retval;
        var $iftmp_4;
        var $0;
        var $n;
        var $pollfd=__stackBase__;
        var $timeout;
        $s_addr=$s;
        $writing_addr=$writing;
        var $1=$s_addr; //@line 673 "socketmodule.c"
        var $2=$1+28; //@line 673 "socketmodule.c"
        var $3=HEAP[$2]; //@line 673 "socketmodule.c"
        var $4=($3) <= 0; //@line 673 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 673 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 674 "socketmodule.c"
        __label__ = 12; break; //@line 674 "socketmodule.c"
      case 2: // $bb1
        var $5=$s_addr; //@line 677 "socketmodule.c"
        var $6=$5+8; //@line 677 "socketmodule.c"
        var $7=HEAP[$6]; //@line 677 "socketmodule.c"
        var $8=($7) < 0; //@line 677 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 677 "socketmodule.c"
      case 3: // $bb2
        $0=0; //@line 678 "socketmodule.c"
        __label__ = 12; break; //@line 678 "socketmodule.c"
      case 4: // $bb3
        var $9=$s_addr; //@line 687 "socketmodule.c"
        var $10=$9+8; //@line 687 "socketmodule.c"
        var $11=HEAP[$10]; //@line 687 "socketmodule.c"
        var $12=$pollfd; //@line 687 "socketmodule.c"
        HEAP[$12]=$11; //@line 687 "socketmodule.c"
        var $13=$writing_addr; //@line 688 "socketmodule.c"
        var $14=($13)!=0; //@line 688 "socketmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 688 "socketmodule.c"
      case 5: // $bb4
        $iftmp_4=4; //@line 688 "socketmodule.c"
        __label__ = 7; break; //@line 688 "socketmodule.c"
      case 6: // $bb5
        $iftmp_4=1; //@line 688 "socketmodule.c"
        __label__ = 7; break; //@line 688 "socketmodule.c"
      case 7: // $bb6
        var $15=$pollfd+4; //@line 688 "socketmodule.c"
        var $16=$iftmp_4; //@line 688 "socketmodule.c"
        HEAP[$15]=$16; //@line 688 "socketmodule.c"
        var $17=$s_addr; //@line 691 "socketmodule.c"
        var $18=$17+28; //@line 691 "socketmodule.c"
        var $19=HEAP[$18]; //@line 691 "socketmodule.c"
        var $20=($19) * 1000; //@line 691 "socketmodule.c"
        var $21=($20) + 0.5; //@line 691 "socketmodule.c"
        var $22=((($21))|0); //@line 691 "socketmodule.c"
        $timeout=$22; //@line 691 "socketmodule.c"
        var $23=$timeout; //@line 692 "socketmodule.c"
        var $24=_poll($pollfd, 1, $23); //@line 692 "socketmodule.c"
        $n=$24; //@line 692 "socketmodule.c"
        var $25=($24) < 0; //@line 712 "socketmodule.c"
        if ($25) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 712 "socketmodule.c"
      case 8: // $bb7
        $0=-1; //@line 713 "socketmodule.c"
        __label__ = 12; break; //@line 713 "socketmodule.c"
      case 9: // $bb8
        var $26=$n; //@line 714 "socketmodule.c"
        var $27=($26)==0; //@line 714 "socketmodule.c"
        if ($27) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 714 "socketmodule.c"
      case 10: // $bb9
        $0=1; //@line 715 "socketmodule.c"
        __label__ = 12; break; //@line 715 "socketmodule.c"
      case 11: // $bb10
        $0=0; //@line 716 "socketmodule.c"
        __label__ = 12; break; //@line 716 "socketmodule.c"
      case 12: // $bb11
        var $28=$0; //@line 674 "socketmodule.c"
        $retval=$28; //@line 674 "socketmodule.c"
        var $retval12=$retval; //@line 674 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 674 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _init_sockobject($s, $fd, $family, $type, $proto) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $fd_addr;
        var $family_addr;
        var $type_addr;
        var $proto_addr;
        $s_addr=$s;
        $fd_addr=$fd;
        $family_addr=$family;
        $type_addr=$type;
        $proto_addr=$proto;
        var $0=$s_addr; //@line 730 "socketmodule.c"
        var $1=$0+8; //@line 730 "socketmodule.c"
        var $2=$fd_addr; //@line 730 "socketmodule.c"
        HEAP[$1]=$2; //@line 730 "socketmodule.c"
        var $3=$s_addr; //@line 731 "socketmodule.c"
        var $4=$3+12; //@line 731 "socketmodule.c"
        var $5=$family_addr; //@line 731 "socketmodule.c"
        HEAP[$4]=$5; //@line 731 "socketmodule.c"
        var $6=$s_addr; //@line 732 "socketmodule.c"
        var $7=$6+16; //@line 732 "socketmodule.c"
        var $8=$type_addr; //@line 732 "socketmodule.c"
        HEAP[$7]=$8; //@line 732 "socketmodule.c"
        var $9=$s_addr; //@line 733 "socketmodule.c"
        var $10=$9+20; //@line 733 "socketmodule.c"
        var $11=$proto_addr; //@line 733 "socketmodule.c"
        HEAP[$10]=$11; //@line 733 "socketmodule.c"
        var $12=HEAP[_defaulttimeout]; //@line 734 "socketmodule.c"
        var $13=$s_addr; //@line 734 "socketmodule.c"
        var $14=$13+28; //@line 734 "socketmodule.c"
        HEAP[$14]=$12; //@line 734 "socketmodule.c"
        var $15=$s_addr; //@line 736 "socketmodule.c"
        var $16=$15+24; //@line 736 "socketmodule.c"
        HEAP[$16]=(FUNCTION_TABLE_OFFSET + 2); //@line 736 "socketmodule.c"
        var $17=HEAP[_defaulttimeout]; //@line 738 "socketmodule.c"
        var $18=($17) >= 0; //@line 738 "socketmodule.c"
        if ($18) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 738 "socketmodule.c"
      case 1: // $bb
        var $19=$s_addr; //@line 739 "socketmodule.c"
        _internal_setblocking($19, 0); //@line 739 "socketmodule.c"
        __label__ = 2; break; //@line 739 "socketmodule.c"
      case 2: // $return
        ;
        return; //@line 745 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _new_sockobject($fd, $family, $type, $proto) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $fd_addr;
        var $family_addr;
        var $type_addr;
        var $proto_addr;
        var $retval;
        var $0;
        var $s;
        $fd_addr=$fd;
        $family_addr=$family;
        $type_addr=$type;
        $proto_addr=$proto;
        var $1=_PyType_GenericNew(_sock_type, 0, 0); //@line 757 "socketmodule.c"
        var $2=$1; //@line 757 "socketmodule.c"
        $s=$2; //@line 757 "socketmodule.c"
        var $3=$s; //@line 759 "socketmodule.c"
        var $4=($3)!=0; //@line 759 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 759 "socketmodule.c"
      case 1: // $bb
        var $5=$s; //@line 760 "socketmodule.c"
        var $6=$fd_addr; //@line 760 "socketmodule.c"
        var $7=$family_addr; //@line 760 "socketmodule.c"
        var $8=$type_addr; //@line 760 "socketmodule.c"
        var $9=$proto_addr; //@line 760 "socketmodule.c"
        _init_sockobject($5, $6, $7, $8, $9); //@line 760 "socketmodule.c"
        __label__ = 2; break; //@line 760 "socketmodule.c"
      case 2: // $bb1
        var $10=$s; //@line 761 "socketmodule.c"
        $0=$10; //@line 761 "socketmodule.c"
        var $11=$0; //@line 761 "socketmodule.c"
        $retval=$11; //@line 761 "socketmodule.c"
        var $retval2=$retval; //@line 761 "socketmodule.c"
        ;
        return $retval2; //@line 761 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _setipaddr($name, $addr_ret, $addr_ret_size, $af) {
    var __stackBase__  = STACKTOP; STACKTOP += 53; _memset(__stackBase__, 0, 53);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $name_addr;
        var $addr_ret_addr;
        var $addr_ret_size_addr;
        var $af_addr;
        var $retval;
        var $0;
        var $hints=__stackBase__;
        var $res=__stackBase__+32;
        var $error;
        var $d1=__stackBase__+36;
        var $d2=__stackBase__+40;
        var $d3=__stackBase__+44;
        var $d4=__stackBase__+48;
        var $ch=__stackBase__+52;
        var $siz;
        var $sin;
        var $sin28;
        $name_addr=$name;
        $addr_ret_addr=$addr_ret;
        $addr_ret_size_addr=$addr_ret_size;
        $af_addr=$af;
        var $1=$addr_ret_addr; //@line 786 "socketmodule.c"
        var $2=$1; //@line 786 "socketmodule.c"
        _llvm_memset_p0i8_i32($2, 0, 16, 1, 0); //@line 786 "socketmodule.c"
        var $3=$name_addr; //@line 787 "socketmodule.c"
        var $4=$3; //@line 787 "socketmodule.c"
        var $5=HEAP[$4]; //@line 787 "socketmodule.c"
        var $6=($5)==0; //@line 787 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 12; break; } //@line 787 "socketmodule.c"
      case 1: // $bb
        var $hints1=$hints; //@line 789 "socketmodule.c"
        _llvm_memset_p0i8_i32($hints1, 0, 32, 1, 0); //@line 789 "socketmodule.c"
        var $7=$hints+4; //@line 790 "socketmodule.c"
        var $8=$af_addr; //@line 790 "socketmodule.c"
        HEAP[$7]=$8; //@line 790 "socketmodule.c"
        var $9=$hints+8; //@line 791 "socketmodule.c"
        HEAP[$9]=2; //@line 791 "socketmodule.c"
        var $10=$hints; //@line 792 "socketmodule.c"
        HEAP[$10]=1; //@line 792 "socketmodule.c"
        var $11=_getaddrinfo(0, __str2, $hints, $res); //@line 795 "socketmodule.c"
        $error=$11; //@line 795 "socketmodule.c"
        var $12=$error; //@line 802 "socketmodule.c"
        var $13=($12)!=0; //@line 802 "socketmodule.c"
        if ($13) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 802 "socketmodule.c"
      case 2: // $bb2
        var $14=$error; //@line 803 "socketmodule.c"
        _set_gaierror($14); //@line 803 "socketmodule.c"
        $0=-1; //@line 804 "socketmodule.c"
        __label__ = 30; break; //@line 804 "socketmodule.c"
      case 3: // $bb3
        var $15=HEAP[$res]; //@line 806 "socketmodule.c"
        var $16=$15+4; //@line 806 "socketmodule.c"
        var $17=HEAP[$16]; //@line 806 "socketmodule.c"
        if ($17 == 2) {
          __label__ = 4; break;
        }
        else if ($17 == 10) {
          __label__ = 5; break;
        }
        else {
        __label__ = 6; break;
        }
        
      case 4: // $bb4
        $siz=4; //@line 808 "socketmodule.c"
        __label__ = 7; break; //@line 808 "socketmodule.c"
      case 5: // $bb5
        $siz=16; //@line 812 "socketmodule.c"
        __label__ = 7; break; //@line 812 "socketmodule.c"
      case 6: // $bb6
        var $18=HEAP[$res]; //@line 816 "socketmodule.c"
        _freeaddrinfo($18); //@line 816 "socketmodule.c"
        var $19=HEAP[_socket_error]; //@line 817 "socketmodule.c"
        _PyErr_SetString($19, __str3); //@line 817 "socketmodule.c"
        $0=-1; //@line 819 "socketmodule.c"
        __label__ = 30; break; //@line 819 "socketmodule.c"
      case 7: // $bb7
        var $20=HEAP[$res]; //@line 821 "socketmodule.c"
        var $21=$20+28; //@line 821 "socketmodule.c"
        var $22=HEAP[$21]; //@line 821 "socketmodule.c"
        var $23=($22)!=0; //@line 821 "socketmodule.c"
        var $24=HEAP[$res]; //@line 822 "socketmodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 821 "socketmodule.c"
      case 8: // $bb8
        _freeaddrinfo($24); //@line 822 "socketmodule.c"
        var $25=HEAP[_socket_error]; //@line 823 "socketmodule.c"
        _PyErr_SetString($25, __str4); //@line 823 "socketmodule.c"
        $0=-1; //@line 825 "socketmodule.c"
        __label__ = 30; break; //@line 825 "socketmodule.c"
      case 9: // $bb9
        var $26=$24+16; //@line 827 "socketmodule.c"
        var $27=HEAP[$26]; //@line 827 "socketmodule.c"
        var $28=$addr_ret_size_addr; //@line 827 "socketmodule.c"
        var $29=($27) < ($28); //@line 827 "socketmodule.c"
        if ($29) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 827 "socketmodule.c"
      case 10: // $bb10
        var $30=HEAP[$res]; //@line 828 "socketmodule.c"
        var $31=$30+16; //@line 828 "socketmodule.c"
        var $32=HEAP[$31]; //@line 828 "socketmodule.c"
        $addr_ret_size_addr=$32; //@line 828 "socketmodule.c"
        __label__ = 11; break; //@line 828 "socketmodule.c"
      case 11: // $bb11
        var $33=HEAP[$res]; //@line 829 "socketmodule.c"
        var $34=$33+20; //@line 829 "socketmodule.c"
        var $35=HEAP[$34]; //@line 829 "socketmodule.c"
        var $36=$addr_ret_addr; //@line 829 "socketmodule.c"
        var $37=$addr_ret_size_addr; //@line 829 "socketmodule.c"
        var $38=$36; //@line 829 "socketmodule.c"
        var $39=$35; //@line 829 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($38, $39, $37, 1, 0); //@line 829 "socketmodule.c"
        var $40=HEAP[$res]; //@line 830 "socketmodule.c"
        _freeaddrinfo($40); //@line 830 "socketmodule.c"
        var $41=$siz; //@line 831 "socketmodule.c"
        $0=$41; //@line 831 "socketmodule.c"
        __label__ = 30; break; //@line 831 "socketmodule.c"
      case 12: // $bb12
        var $42=$name_addr; //@line 833 "socketmodule.c"
        var $43=$42; //@line 833 "socketmodule.c"
        var $44=HEAP[$43]; //@line 833 "socketmodule.c"
        var $45=($44)==60; //@line 833 "socketmodule.c"
        if ($45) { __label__ = 13; break; } else { __label__ = 17; break; } //@line 833 "socketmodule.c"
      case 13: // $bb13
        var $46=$name_addr; //@line 833 "socketmodule.c"
        var $47=_strcmp($46, __str5); //@line 833 "socketmodule.c"
        var $48=($47)==0; //@line 833 "socketmodule.c"
        if ($48) { __label__ = 14; break; } else { __label__ = 17; break; } //@line 833 "socketmodule.c"
      case 14: // $bb14
        var $49=$af_addr; //@line 835 "socketmodule.c"
        var $50=($49)!=2; //@line 835 "socketmodule.c"
        var $51=$af_addr; //@line 835 "socketmodule.c"
        var $52=($51)!=0; //@line 835 "socketmodule.c"
        var $or_cond=($50) & ($52);
        if ($or_cond) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 835 "socketmodule.c"
      case 15: // $bb16
        var $53=HEAP[_socket_error]; //@line 836 "socketmodule.c"
        _PyErr_SetString($53, __str6); //@line 836 "socketmodule.c"
        $0=-1; //@line 838 "socketmodule.c"
        __label__ = 30; break; //@line 838 "socketmodule.c"
      case 16: // $bb17
        var $54=$addr_ret_addr; //@line 840 "socketmodule.c"
        var $55=$54; //@line 840 "socketmodule.c"
        $sin=$55; //@line 840 "socketmodule.c"
        var $56=$sin; //@line 841 "socketmodule.c"
        var $57=$56; //@line 841 "socketmodule.c"
        _llvm_memset_p0i8_i32($57, 0, 16, 1, 0); //@line 841 "socketmodule.c"
        var $58=$sin; //@line 842 "socketmodule.c"
        var $59=$58; //@line 842 "socketmodule.c"
        HEAP[$59]=2; //@line 842 "socketmodule.c"
        var $60=$sin; //@line 846 "socketmodule.c"
        var $61=$60+4; //@line 846 "socketmodule.c"
        var $62=$61; //@line 846 "socketmodule.c"
        HEAP[$62]=-1; //@line 846 "socketmodule.c"
        $0=4; //@line 847 "socketmodule.c"
        __label__ = 30; break; //@line 847 "socketmodule.c"
      case 17: // $bb18
        var $63=$name_addr; //@line 849 "socketmodule.c"
        var $64=_sscanf($63, __str7, allocate([$d1,0,0,0,$d2,0,0,0,$d3,0,0,0,$d4,0,0,0,$ch,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 849 "socketmodule.c"
        var $65=($64)==4; //@line 849 "socketmodule.c"
        var $66=HEAP[$d1]; //@line 849 "socketmodule.c"
        var $67=($66) >= 0; //@line 849 "socketmodule.c"
        var $or_cond3=($65) & ($67);
        var $68=HEAP[$d1]; //@line 849 "socketmodule.c"
        var $69=($68) <= 255; //@line 849 "socketmodule.c"
        var $or_cond5=($or_cond3) & ($69);
        if ($or_cond5) { __label__ = 18; break; } else { __label__ = 22; break; } //@line 849 "socketmodule.c"
      case 18: // $bb21
        var $70=HEAP[$d2]; //@line 849 "socketmodule.c"
        var $71=($70) >= 0; //@line 849 "socketmodule.c"
        var $72=HEAP[$d2]; //@line 849 "socketmodule.c"
        var $73=($72) <= 255; //@line 849 "socketmodule.c"
        var $or_cond7=($71) & ($73);
        if ($or_cond7) { __label__ = 19; break; } else { __label__ = 22; break; } //@line 849 "socketmodule.c"
      case 19: // $bb23
        var $74=HEAP[$d3]; //@line 849 "socketmodule.c"
        var $75=($74) >= 0; //@line 849 "socketmodule.c"
        var $76=HEAP[$d3]; //@line 849 "socketmodule.c"
        var $77=($76) <= 255; //@line 849 "socketmodule.c"
        var $or_cond9=($75) & ($77);
        if ($or_cond9) { __label__ = 20; break; } else { __label__ = 22; break; } //@line 849 "socketmodule.c"
      case 20: // $bb25
        var $78=HEAP[$d4]; //@line 849 "socketmodule.c"
        var $79=($78) >= 0; //@line 849 "socketmodule.c"
        var $80=HEAP[$d4]; //@line 849 "socketmodule.c"
        var $81=($80) <= 255; //@line 849 "socketmodule.c"
        var $or_cond11=($79) & ($81);
        if ($or_cond11) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 849 "socketmodule.c"
      case 21: // $bb27
        var $82=$addr_ret_addr; //@line 853 "socketmodule.c"
        var $83=$82; //@line 853 "socketmodule.c"
        $sin28=$83; //@line 853 "socketmodule.c"
        var $84=HEAP[$d1]; //@line 854 "socketmodule.c"
        var $85=($84) << 24; //@line 854 "socketmodule.c"
        var $86=HEAP[$d2]; //@line 854 "socketmodule.c"
        var $87=($86) << 16; //@line 854 "socketmodule.c"
        var $88=HEAP[$d3]; //@line 854 "socketmodule.c"
        var $89=($88) << 8; //@line 854 "socketmodule.c"
        var $90=HEAP[$d4]; //@line 854 "socketmodule.c"
        var $91=($87) | ($85); //@line 854 "socketmodule.c"
        var $92=($91) | ($90); //@line 854 "socketmodule.c"
        var $93=($92) | ($89); //@line 854 "socketmodule.c"
        var $94=_htonl($93); //@line 854 "socketmodule.c"
        var $95=$sin28; //@line 854 "socketmodule.c"
        var $96=$95+4; //@line 854 "socketmodule.c"
        var $97=$96; //@line 854 "socketmodule.c"
        HEAP[$97]=$94; //@line 854 "socketmodule.c"
        var $98=$sin28; //@line 857 "socketmodule.c"
        var $99=$98; //@line 857 "socketmodule.c"
        HEAP[$99]=2; //@line 857 "socketmodule.c"
        $0=4; //@line 861 "socketmodule.c"
        __label__ = 30; break; //@line 861 "socketmodule.c"
      case 22: // $bb29
        var $hints30=$hints; //@line 863 "socketmodule.c"
        _llvm_memset_p0i8_i32($hints30, 0, 32, 1, 0); //@line 863 "socketmodule.c"
        var $100=$hints+4; //@line 864 "socketmodule.c"
        var $101=$af_addr; //@line 864 "socketmodule.c"
        HEAP[$100]=$101; //@line 864 "socketmodule.c"
        var $102=$name_addr; //@line 867 "socketmodule.c"
        var $103=_getaddrinfo($102, 0, $hints, $res); //@line 867 "socketmodule.c"
        $error=$103; //@line 867 "socketmodule.c"
        var $104=($103)!=0; //@line 878 "socketmodule.c"
        if ($104) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 878 "socketmodule.c"
      case 23: // $bb31
        var $105=$error; //@line 879 "socketmodule.c"
        _set_gaierror($105); //@line 879 "socketmodule.c"
        $0=-1; //@line 880 "socketmodule.c"
        __label__ = 30; break; //@line 880 "socketmodule.c"
      case 24: // $bb32
        var $106=HEAP[$res]; //@line 882 "socketmodule.c"
        var $107=$106+16; //@line 882 "socketmodule.c"
        var $108=HEAP[$107]; //@line 882 "socketmodule.c"
        var $109=$addr_ret_size_addr; //@line 882 "socketmodule.c"
        var $110=($108) < ($109); //@line 882 "socketmodule.c"
        if ($110) { __label__ = 25; break; } else { __label__ = 26; break; } //@line 882 "socketmodule.c"
      case 25: // $bb33
        var $111=HEAP[$res]; //@line 883 "socketmodule.c"
        var $112=$111+16; //@line 883 "socketmodule.c"
        var $113=HEAP[$112]; //@line 883 "socketmodule.c"
        $addr_ret_size_addr=$113; //@line 883 "socketmodule.c"
        __label__ = 26; break; //@line 883 "socketmodule.c"
      case 26: // $bb34
        var $114=HEAP[$res]; //@line 884 "socketmodule.c"
        var $115=$114+20; //@line 884 "socketmodule.c"
        var $116=HEAP[$115]; //@line 884 "socketmodule.c"
        var $117=$addr_ret_addr; //@line 884 "socketmodule.c"
        var $118=$addr_ret_size_addr; //@line 884 "socketmodule.c"
        var $119=$117; //@line 884 "socketmodule.c"
        var $120=$116; //@line 884 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($119, $120, $118, 1, 0); //@line 884 "socketmodule.c"
        var $121=HEAP[$res]; //@line 885 "socketmodule.c"
        _freeaddrinfo($121); //@line 885 "socketmodule.c"
        var $122=$addr_ret_addr; //@line 886 "socketmodule.c"
        var $123=$122; //@line 886 "socketmodule.c"
        var $124=HEAP[$123]; //@line 886 "socketmodule.c"
        var $125=($124); //@line 886 "socketmodule.c"
        if ($125 == 2) {
          __label__ = 27; break;
        }
        else if ($125 == 10) {
          __label__ = 28; break;
        }
        else {
        __label__ = 29; break;
        }
        
      case 27: // $bb35
        $0=4; //@line 888 "socketmodule.c"
        __label__ = 30; break; //@line 888 "socketmodule.c"
      case 28: // $bb36
        $0=16; //@line 891 "socketmodule.c"
        __label__ = 30; break; //@line 891 "socketmodule.c"
      case 29: // $bb37
        var $126=HEAP[_socket_error]; //@line 894 "socketmodule.c"
        _PyErr_SetString($126, __str8); //@line 894 "socketmodule.c"
        $0=-1; //@line 895 "socketmodule.c"
        __label__ = 30; break; //@line 895 "socketmodule.c"
      case 30: // $bb38
        var $127=$0; //@line 804 "socketmodule.c"
        $retval=$127; //@line 804 "socketmodule.c"
        var $retval39=$retval; //@line 804 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval39; //@line 804 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _makeipaddr($addr, $addrlen) {
    var __stackBase__  = STACKTOP; STACKTOP += 1025; _memset(__stackBase__, 0, 1025);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $addr_addr;
        var $addrlen_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $error;
        $addr_addr=$addr;
        $addrlen_addr=$addrlen;
        var $1=$addrlen_addr; //@line 910 "socketmodule.c"
        var $2=$addr_addr; //@line 910 "socketmodule.c"
        var $buf1=$buf; //@line 910 "socketmodule.c"
        var $3=_getnameinfo($2, $1, $buf1, 1025, 0, 0, 1); //@line 910 "socketmodule.c"
        $error=$3; //@line 910 "socketmodule.c"
        var $4=$error; //@line 912 "socketmodule.c"
        var $5=($4)!=0; //@line 912 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 912 "socketmodule.c"
      case 1: // $bb
        var $6=$error; //@line 913 "socketmodule.c"
        _set_gaierror($6); //@line 913 "socketmodule.c"
        $0=0; //@line 914 "socketmodule.c"
        __label__ = 3; break; //@line 914 "socketmodule.c"
      case 2: // $bb2
        var $buf3=$buf; //@line 916 "socketmodule.c"
        var $7=_PyString_FromString($buf3); //@line 916 "socketmodule.c"
        $0=$7; //@line 916 "socketmodule.c"
        __label__ = 3; break; //@line 916 "socketmodule.c"
      case 3: // $bb4
        var $8=$0; //@line 914 "socketmodule.c"
        $retval=$8; //@line 914 "socketmodule.c"
        var $retval5=$retval; //@line 914 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 914 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _makesockaddr($sockfd, $addr, $addrlen, $proto) {
    var __stackBase__  = STACKTOP; STACKTOP += 32; _memset(__stackBase__, 0, 32);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
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
        var $ifr=__stackBase__;
        var $a25;
        $sockfd_addr=$sockfd;
        $addr_addr=$addr;
        $addrlen_addr=$addrlen;
        $proto_addr=$proto;
        var $1=$addrlen_addr; //@line 974 "socketmodule.c"
        var $2=($1)==0; //@line 974 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 974 "socketmodule.c"
      case 1: // $bb
        var $3=HEAP[__Py_NoneStruct]; //@line 976 "socketmodule.c"
        var $4=($3) + 1; //@line 976 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$4; //@line 976 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 977 "socketmodule.c"
        __label__ = 27; break; //@line 977 "socketmodule.c"
      case 2: // $bb1
        var $5=$addr_addr; //@line 985 "socketmodule.c"
        var $6=$5; //@line 985 "socketmodule.c"
        var $7=HEAP[$6]; //@line 985 "socketmodule.c"
        var $8=($7); //@line 985 "socketmodule.c"
        if ($8 == 1) {
          __label__ = 7; break;
        }
        else if ($8 == 2) {
          __label__ = 3; break;
        }
        else if ($8 == 10) {
          __label__ = 11; break;
        }
        else if ($8 == 16) {
          __label__ = 10; break;
        }
        else if ($8 == 17) {
          __label__ = 15; break;
        }
        else if ($8 == 30) {
          __label__ = 19; break;
        }
        else {
        __label__ = 26; break;
        }
        
      case 3: // $bb2
        var $9=$addr_addr; //@line 990 "socketmodule.c"
        var $10=_makeipaddr($9, 16); //@line 990 "socketmodule.c"
        $addrobj=$10; //@line 990 "socketmodule.c"
        $ret=0; //@line 991 "socketmodule.c"
        var $11=$addrobj; //@line 992 "socketmodule.c"
        var $12=($11)!=0; //@line 992 "socketmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 6; break; } //@line 992 "socketmodule.c"
      case 4: // $bb3
        var $13=$addr_addr; //@line 993 "socketmodule.c"
        var $14=$13; //@line 993 "socketmodule.c"
        $a=$14; //@line 993 "socketmodule.c"
        var $15=$a; //@line 994 "socketmodule.c"
        var $16=$15+2; //@line 994 "socketmodule.c"
        var $17=HEAP[$16]; //@line 994 "socketmodule.c"
        var $18=($17); //@line 994 "socketmodule.c"
        var $19=((($18)) & 65535); //@line 994 "socketmodule.c"
        var $20=_ntohs($19); //@line 994 "socketmodule.c"
        var $21=($20); //@line 994 "socketmodule.c"
        var $22=$addrobj; //@line 994 "socketmodule.c"
        var $23=_Py_BuildValue(__str9, allocate([$22,0,0,0,$21,0,0,0], ["%struct.PyObject*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 994 "socketmodule.c"
        $ret=$23; //@line 994 "socketmodule.c"
        var $24=$addrobj; //@line 995 "socketmodule.c"
        var $25=$24; //@line 995 "socketmodule.c"
        var $26=HEAP[$25]; //@line 995 "socketmodule.c"
        var $27=($26) - 1; //@line 995 "socketmodule.c"
        var $28=$addrobj; //@line 995 "socketmodule.c"
        var $29=$28; //@line 995 "socketmodule.c"
        HEAP[$29]=$27; //@line 995 "socketmodule.c"
        var $30=$addrobj; //@line 995 "socketmodule.c"
        var $31=$30; //@line 995 "socketmodule.c"
        var $32=HEAP[$31]; //@line 995 "socketmodule.c"
        var $33=($32)==0; //@line 995 "socketmodule.c"
        if ($33) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 995 "socketmodule.c"
      case 5: // $bb4
        var $34=$addrobj; //@line 995 "socketmodule.c"
        var $35=$34+4; //@line 995 "socketmodule.c"
        var $36=HEAP[$35]; //@line 995 "socketmodule.c"
        var $37=$36+24; //@line 995 "socketmodule.c"
        var $38=HEAP[$37]; //@line 995 "socketmodule.c"
        var $39=$addrobj; //@line 995 "socketmodule.c"
        FUNCTION_TABLE[$38]($39); //@line 995 "socketmodule.c"
        __label__ = 6; break; //@line 995 "socketmodule.c"
      case 6: // $bb5
        var $40=$ret; //@line 997 "socketmodule.c"
        $0=$40; //@line 997 "socketmodule.c"
        __label__ = 27; break; //@line 997 "socketmodule.c"
      case 7: // $bb6
        var $41=$addr_addr; //@line 1003 "socketmodule.c"
        var $42=$41; //@line 1003 "socketmodule.c"
        $a7=$42; //@line 1003 "socketmodule.c"
        var $43=$a7; //@line 1005 "socketmodule.c"
        var $44=$43+2; //@line 1005 "socketmodule.c"
        var $45=$44; //@line 1005 "socketmodule.c"
        var $46=HEAP[$45]; //@line 1005 "socketmodule.c"
        var $47=($46)==0; //@line 1005 "socketmodule.c"
        if ($47) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1005 "socketmodule.c"
      case 8: // $bb8
        var $48=$addrlen_addr; //@line 1006 "socketmodule.c"
        var $49=($48) - 2; //@line 1006 "socketmodule.c"
        $addrlen_addr=$49; //@line 1006 "socketmodule.c"
        var $50=$a7; //@line 1007 "socketmodule.c"
        var $51=$50+2; //@line 1007 "socketmodule.c"
        var $52=$51; //@line 1007 "socketmodule.c"
        var $53=$addrlen_addr; //@line 1007 "socketmodule.c"
        var $54=_PyString_FromStringAndSize($52, $53); //@line 1007 "socketmodule.c"
        $0=$54; //@line 1007 "socketmodule.c"
        __label__ = 27; break; //@line 1007 "socketmodule.c"
      case 9: // $bb9
        var $55=$a7; //@line 1014 "socketmodule.c"
        var $56=$55+2; //@line 1014 "socketmodule.c"
        var $57=$56; //@line 1014 "socketmodule.c"
        var $58=_PyString_FromString($57); //@line 1014 "socketmodule.c"
        $0=$58; //@line 1014 "socketmodule.c"
        __label__ = 27; break; //@line 1014 "socketmodule.c"
      case 10: // $bb10
        var $59=$addr_addr; //@line 1022 "socketmodule.c"
        var $60=$59; //@line 1022 "socketmodule.c"
        $a11=$60; //@line 1022 "socketmodule.c"
        var $61=$a11; //@line 1023 "socketmodule.c"
        var $62=$61+8; //@line 1023 "socketmodule.c"
        var $63=HEAP[$62]; //@line 1023 "socketmodule.c"
        var $64=$a11; //@line 1023 "socketmodule.c"
        var $65=$64+4; //@line 1023 "socketmodule.c"
        var $66=HEAP[$65]; //@line 1023 "socketmodule.c"
        var $67=_Py_BuildValue(__str10, allocate([$66,0,0,0,$63,0,0,0], ["i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1023 "socketmodule.c"
        $0=$67; //@line 1023 "socketmodule.c"
        __label__ = 27; break; //@line 1023 "socketmodule.c"
      case 11: // $bb12
        var $68=$addr_addr; //@line 1031 "socketmodule.c"
        var $69=_makeipaddr($68, 28); //@line 1031 "socketmodule.c"
        $addrobj14=$69; //@line 1031 "socketmodule.c"
        $ret15=0; //@line 1032 "socketmodule.c"
        var $70=$addrobj14; //@line 1033 "socketmodule.c"
        var $71=($70)!=0; //@line 1033 "socketmodule.c"
        if ($71) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 1033 "socketmodule.c"
      case 12: // $bb16
        var $72=$addr_addr; //@line 1034 "socketmodule.c"
        var $73=$72; //@line 1034 "socketmodule.c"
        $a13=$73; //@line 1034 "socketmodule.c"
        var $74=$a13; //@line 1035 "socketmodule.c"
        var $75=$74+24; //@line 1035 "socketmodule.c"
        var $76=HEAP[$75]; //@line 1035 "socketmodule.c"
        var $77=$a13; //@line 1035 "socketmodule.c"
        var $78=$77+4; //@line 1035 "socketmodule.c"
        var $79=HEAP[$78]; //@line 1035 "socketmodule.c"
        var $80=$a13; //@line 1035 "socketmodule.c"
        var $81=$80+2; //@line 1035 "socketmodule.c"
        var $82=HEAP[$81]; //@line 1035 "socketmodule.c"
        var $83=($82); //@line 1035 "socketmodule.c"
        var $84=((($83)) & 65535); //@line 1035 "socketmodule.c"
        var $85=_ntohs($84); //@line 1035 "socketmodule.c"
        var $86=($85); //@line 1035 "socketmodule.c"
        var $87=$addrobj14; //@line 1035 "socketmodule.c"
        var $88=_Py_BuildValue(__str11, allocate([$87,0,0,0,$86,0,0,0,$79,0,0,0,$76,0,0,0], ["%struct.PyObject*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1035 "socketmodule.c"
        $ret15=$88; //@line 1035 "socketmodule.c"
        var $89=$addrobj14; //@line 1040 "socketmodule.c"
        var $90=$89; //@line 1040 "socketmodule.c"
        var $91=HEAP[$90]; //@line 1040 "socketmodule.c"
        var $92=($91) - 1; //@line 1040 "socketmodule.c"
        var $93=$addrobj14; //@line 1040 "socketmodule.c"
        var $94=$93; //@line 1040 "socketmodule.c"
        HEAP[$94]=$92; //@line 1040 "socketmodule.c"
        var $95=$addrobj14; //@line 1040 "socketmodule.c"
        var $96=$95; //@line 1040 "socketmodule.c"
        var $97=HEAP[$96]; //@line 1040 "socketmodule.c"
        var $98=($97)==0; //@line 1040 "socketmodule.c"
        if ($98) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 1040 "socketmodule.c"
      case 13: // $bb17
        var $99=$addrobj14; //@line 1040 "socketmodule.c"
        var $100=$99+4; //@line 1040 "socketmodule.c"
        var $101=HEAP[$100]; //@line 1040 "socketmodule.c"
        var $102=$101+24; //@line 1040 "socketmodule.c"
        var $103=HEAP[$102]; //@line 1040 "socketmodule.c"
        var $104=$addrobj14; //@line 1040 "socketmodule.c"
        FUNCTION_TABLE[$103]($104); //@line 1040 "socketmodule.c"
        __label__ = 14; break; //@line 1040 "socketmodule.c"
      case 14: // $bb18
        var $105=$ret15; //@line 1042 "socketmodule.c"
        $0=$105; //@line 1042 "socketmodule.c"
        __label__ = 27; break; //@line 1042 "socketmodule.c"
      case 15: // $bb19
        var $106=$addr_addr; //@line 1108 "socketmodule.c"
        var $107=$106; //@line 1108 "socketmodule.c"
        $a20=$107; //@line 1108 "socketmodule.c"
        $ifname=__str12; //@line 1109 "socketmodule.c"
        var $108=$a20; //@line 1112 "socketmodule.c"
        var $109=$108+4; //@line 1112 "socketmodule.c"
        var $110=HEAP[$109]; //@line 1112 "socketmodule.c"
        var $111=($110)!=0; //@line 1112 "socketmodule.c"
        if ($111) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 1112 "socketmodule.c"
      case 16: // $bb21
        var $112=$a20; //@line 1113 "socketmodule.c"
        var $113=$112+4; //@line 1113 "socketmodule.c"
        var $114=HEAP[$113]; //@line 1113 "socketmodule.c"
        var $115=$ifr+16; //@line 1113 "socketmodule.c"
        var $116=$115; //@line 1113 "socketmodule.c"
        var $117=$116; //@line 1113 "socketmodule.c"
        HEAP[$117]=$114; //@line 1113 "socketmodule.c"
        var $118=$sockfd_addr; //@line 1114 "socketmodule.c"
        var $119=_ioctl($118, 35088, allocate([$ifr,0,0,0], ["%struct.ifreq*",0,0,0], ALLOC_STACK)); //@line 1114 "socketmodule.c"
        var $120=($119)==0; //@line 1114 "socketmodule.c"
        if ($120) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1114 "socketmodule.c"
      case 17: // $bb22
        var $121=$ifr; //@line 1115 "socketmodule.c"
        var $122=$121; //@line 1115 "socketmodule.c"
        var $123=$122; //@line 1115 "socketmodule.c"
        $ifname=$123; //@line 1115 "socketmodule.c"
        __label__ = 18; break; //@line 1115 "socketmodule.c"
      case 18: // $bb23
        var $124=$a20; //@line 1117 "socketmodule.c"
        var $125=$124+11; //@line 1117 "socketmodule.c"
        var $126=HEAP[$125]; //@line 1117 "socketmodule.c"
        var $127=($126); //@line 1117 "socketmodule.c"
        var $128=$a20; //@line 1117 "socketmodule.c"
        var $129=$128+12; //@line 1117 "socketmodule.c"
        var $130=$129; //@line 1117 "socketmodule.c"
        var $131=$a20; //@line 1117 "socketmodule.c"
        var $132=$131+8; //@line 1117 "socketmodule.c"
        var $133=HEAP[$132]; //@line 1117 "socketmodule.c"
        var $134=($133); //@line 1117 "socketmodule.c"
        var $135=$a20; //@line 1117 "socketmodule.c"
        var $136=$135+10; //@line 1117 "socketmodule.c"
        var $137=HEAP[$136]; //@line 1117 "socketmodule.c"
        var $138=($137); //@line 1117 "socketmodule.c"
        var $139=$a20; //@line 1117 "socketmodule.c"
        var $140=$139+2; //@line 1117 "socketmodule.c"
        var $141=HEAP[$140]; //@line 1117 "socketmodule.c"
        var $142=($141); //@line 1117 "socketmodule.c"
        var $143=((($142)) & 65535); //@line 1117 "socketmodule.c"
        var $144=_ntohs($143); //@line 1117 "socketmodule.c"
        var $145=($144); //@line 1117 "socketmodule.c"
        var $146=$ifname; //@line 1117 "socketmodule.c"
        var $147=_Py_BuildValue(__str13, allocate([$146,0,0,0,$145,0,0,0,$138,0,0,0,$134,0,0,0,$130,0,0,0,$127,0,0,0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1117 "socketmodule.c"
        $0=$147; //@line 1117 "socketmodule.c"
        __label__ = 27; break; //@line 1117 "socketmodule.c"
      case 19: // $bb24
        var $148=$addr_addr; //@line 1130 "socketmodule.c"
        var $149=$148; //@line 1130 "socketmodule.c"
        $a25=$149; //@line 1130 "socketmodule.c"
        var $150=$a25; //@line 1131 "socketmodule.c"
        var $151=$150+2; //@line 1131 "socketmodule.c"
        var $152=HEAP[$151]; //@line 1131 "socketmodule.c"
        var $153=($152)==1; //@line 1131 "socketmodule.c"
        var $154=$a25; //@line 1132 "socketmodule.c"
        if ($153) { __label__ = 20; break; } else { __label__ = 21; break; } //@line 1131 "socketmodule.c"
      case 20: // $bb26
        var $155=$154+3; //@line 1132 "socketmodule.c"
        var $156=HEAP[$155]; //@line 1132 "socketmodule.c"
        var $157=($156); //@line 1132 "socketmodule.c"
        var $158=$a25; //@line 1132 "socketmodule.c"
        var $159=$158+4; //@line 1132 "socketmodule.c"
        var $160=$159; //@line 1132 "socketmodule.c"
        var $161=$160+8; //@line 1132 "socketmodule.c"
        var $162=HEAP[$161]; //@line 1132 "socketmodule.c"
        var $163=$a25; //@line 1132 "socketmodule.c"
        var $164=$163+4; //@line 1132 "socketmodule.c"
        var $165=$164; //@line 1132 "socketmodule.c"
        var $166=$165+4; //@line 1132 "socketmodule.c"
        var $167=HEAP[$166]; //@line 1132 "socketmodule.c"
        var $168=$a25; //@line 1132 "socketmodule.c"
        var $169=$168+4; //@line 1132 "socketmodule.c"
        var $170=$169; //@line 1132 "socketmodule.c"
        var $171=$170; //@line 1132 "socketmodule.c"
        var $172=HEAP[$171]; //@line 1132 "socketmodule.c"
        var $173=$a25; //@line 1132 "socketmodule.c"
        var $174=$173+2; //@line 1132 "socketmodule.c"
        var $175=HEAP[$174]; //@line 1132 "socketmodule.c"
        var $176=($175); //@line 1132 "socketmodule.c"
        var $177=_Py_BuildValue(__str14, allocate([$176,0,0,0,$172,0,0,0,$167,0,0,0,$162,0,0,0,$157,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1132 "socketmodule.c"
        $0=$177; //@line 1132 "socketmodule.c"
        __label__ = 27; break; //@line 1132 "socketmodule.c"
      case 21: // $bb27
        var $178=$154+2; //@line 1138 "socketmodule.c"
        var $179=HEAP[$178]; //@line 1138 "socketmodule.c"
        var $180=($179)==2; //@line 1138 "socketmodule.c"
        var $181=$a25; //@line 1139 "socketmodule.c"
        if ($180) { __label__ = 22; break; } else { __label__ = 23; break; } //@line 1138 "socketmodule.c"
      case 22: // $bb28
        var $182=$181+3; //@line 1139 "socketmodule.c"
        var $183=HEAP[$182]; //@line 1139 "socketmodule.c"
        var $184=($183); //@line 1139 "socketmodule.c"
        var $185=$a25; //@line 1139 "socketmodule.c"
        var $186=$185+4; //@line 1139 "socketmodule.c"
        var $187=$186; //@line 1139 "socketmodule.c"
        var $188=$187; //@line 1139 "socketmodule.c"
        var $189=$188; //@line 1139 "socketmodule.c"
        var $190=$189+4; //@line 1139 "socketmodule.c"
        var $191=HEAP[$190]; //@line 1139 "socketmodule.c"
        var $192=$a25; //@line 1139 "socketmodule.c"
        var $193=$192+4; //@line 1139 "socketmodule.c"
        var $194=$193; //@line 1139 "socketmodule.c"
        var $195=$194; //@line 1139 "socketmodule.c"
        var $196=$195; //@line 1139 "socketmodule.c"
        var $197=$196+4; //@line 1139 "socketmodule.c"
        var $198=HEAP[$197]; //@line 1139 "socketmodule.c"
        var $199=$a25; //@line 1139 "socketmodule.c"
        var $200=$199+4; //@line 1139 "socketmodule.c"
        var $201=$200; //@line 1139 "socketmodule.c"
        var $202=$201; //@line 1139 "socketmodule.c"
        var $203=$202; //@line 1139 "socketmodule.c"
        var $204=$203; //@line 1139 "socketmodule.c"
        var $205=HEAP[$204]; //@line 1139 "socketmodule.c"
        var $206=$a25; //@line 1139 "socketmodule.c"
        var $207=$206+2; //@line 1139 "socketmodule.c"
        var $208=HEAP[$207]; //@line 1139 "socketmodule.c"
        var $209=($208); //@line 1139 "socketmodule.c"
        var $210=_Py_BuildValue(__str14, allocate([$209,0,0,0,$205,0,0,0,$198,0,0,0,$191,0,0,0,$184,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1139 "socketmodule.c"
        $0=$210; //@line 1139 "socketmodule.c"
        __label__ = 27; break; //@line 1139 "socketmodule.c"
      case 23: // $bb29
        var $211=$181+2; //@line 1145 "socketmodule.c"
        var $212=HEAP[$211]; //@line 1145 "socketmodule.c"
        var $213=($212)==3; //@line 1145 "socketmodule.c"
        if ($213) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 1145 "socketmodule.c"
      case 24: // $bb30
        var $214=$a25; //@line 1146 "socketmodule.c"
        var $215=$214+3; //@line 1146 "socketmodule.c"
        var $216=HEAP[$215]; //@line 1146 "socketmodule.c"
        var $217=($216); //@line 1146 "socketmodule.c"
        var $218=$a25; //@line 1146 "socketmodule.c"
        var $219=$218+4; //@line 1146 "socketmodule.c"
        var $220=$219; //@line 1146 "socketmodule.c"
        var $221=$220; //@line 1146 "socketmodule.c"
        var $222=$221; //@line 1146 "socketmodule.c"
        var $223=HEAP[$222]; //@line 1146 "socketmodule.c"
        var $224=$a25; //@line 1146 "socketmodule.c"
        var $225=$224+4; //@line 1146 "socketmodule.c"
        var $226=$225; //@line 1146 "socketmodule.c"
        var $227=$226; //@line 1146 "socketmodule.c"
        var $228=$227+4; //@line 1146 "socketmodule.c"
        var $229=HEAP[$228]; //@line 1146 "socketmodule.c"
        var $230=$a25; //@line 1146 "socketmodule.c"
        var $231=$230+2; //@line 1146 "socketmodule.c"
        var $232=HEAP[$231]; //@line 1146 "socketmodule.c"
        var $233=($232); //@line 1146 "socketmodule.c"
        var $234=_Py_BuildValue(__str14, allocate([$233,0,0,0,$229,0,0,0,$223,0,0,0,0,0,0,0,$217,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1146 "socketmodule.c"
        $0=$234; //@line 1146 "socketmodule.c"
        __label__ = 27; break; //@line 1146 "socketmodule.c"
      case 25: // $bb31
        var $235=HEAP[_PyExc_ValueError]; //@line 1153 "socketmodule.c"
        _PyErr_SetString($235, __str15); //@line 1153 "socketmodule.c"
        $0=0; //@line 1155 "socketmodule.c"
        __label__ = 27; break; //@line 1155 "socketmodule.c"
      case 26: // $bb32
        var $236=$addr_addr; //@line 1165 "socketmodule.c"
        var $237=$236+2; //@line 1165 "socketmodule.c"
        var $238=$237; //@line 1165 "socketmodule.c"
        var $239=$addr_addr; //@line 1165 "socketmodule.c"
        var $240=$239; //@line 1165 "socketmodule.c"
        var $241=HEAP[$240]; //@line 1165 "socketmodule.c"
        var $242=($241); //@line 1165 "socketmodule.c"
        var $243=_Py_BuildValue(__str16, allocate([$242,0,0,0,$238,0,0,0,14,0,0,0], ["i32",0,0,0,"i8*",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 1165 "socketmodule.c"
        $0=$243; //@line 1165 "socketmodule.c"
        __label__ = 27; break; //@line 1165 "socketmodule.c"
      case 27: // $bb33
        var $244=$0; //@line 977 "socketmodule.c"
        $retval=$244; //@line 977 "socketmodule.c"
        var $retval34=$retval; //@line 977 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval34; //@line 977 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getsockaddrarg($s, $args, $addr_ret, $len_ret) {
    var __stackBase__  = STACKTOP; STACKTOP += 116; _memset(__stackBase__, 0, 116);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $addr_ret_addr;
        var $len_ret_addr;
        var $retval;
        var $0;
        var $addr;
        var $path=__stackBase__;
        var $len=__stackBase__+4;
        var $addr12;
        var $pid=__stackBase__+8;
        var $groups=__stackBase__+12;
        var $addr18;
        var $host=__stackBase__+16;
        var $port=__stackBase__+20;
        var $result;
        var $addr29;
        var $host30=__stackBase__+24;
        var $port31=__stackBase__+28;
        var $flowinfo=__stackBase__+32;
        var $scope_id=__stackBase__+36;
        var $result32;
        var $addr43;
        var $ifr=__stackBase__+40;
        var $interfaceName=__stackBase__+72;
        var $protoNumber=__stackBase__+76;
        var $hatype=__stackBase__+80;
        var $pkttype=__stackBase__+84;
        var $haddr=__stackBase__+88;
        var $halen=__stackBase__+92;
        var $atype=__stackBase__+96;
        var $v1=__stackBase__+100;
        var $v2=__stackBase__+104;
        var $v3=__stackBase__+108;
        var $scope=__stackBase__+112;
        var $addr58;
        $s_addr=$s;
        $args_addr=$args;
        $addr_ret_addr=$addr_ret;
        $len_ret_addr=$len_ret;
        var $1=$s_addr; //@line 1183 "socketmodule.c"
        var $2=$1+12; //@line 1183 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1183 "socketmodule.c"
        if ($3 == 1) {
          __label__ = 1; break;
        }
        else if ($3 == 2) {
          __label__ = 16; break;
        }
        else if ($3 == 10) {
          __label__ = 25; break;
        }
        else if ($3 == 16) {
          __label__ = 11; break;
        }
        else if ($3 == 17) {
          __label__ = 34; break;
        }
        else if ($3 == 30) {
          __label__ = 47; break;
        }
        else {
        __label__ = 59; break;
        }
        
      case 1: // $bb
        var $4=$args_addr; //@line 1191 "socketmodule.c"
        var $5=_PyArg_Parse($4, __str17, allocate([$path,0,0,0,$len,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1191 "socketmodule.c"
        var $6=($5)==0; //@line 1191 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1191 "socketmodule.c"
      case 2: // $bb1
        $0=0; //@line 1192 "socketmodule.c"
        __label__ = 60; break; //@line 1192 "socketmodule.c"
      case 3: // $bb2
        var $7=$addr_ret_addr; //@line 1194 "socketmodule.c"
        var $8=$7; //@line 1194 "socketmodule.c"
        $addr=$8; //@line 1194 "socketmodule.c"
        var $9=HEAP[$len]; //@line 1196 "socketmodule.c"
        var $10=($9) <= 0; //@line 1196 "socketmodule.c"
        if ($10) { __lastLabel__ = 3; __label__ = 7; break; } else { __lastLabel__ = 3; __label__ = 4; break; } //@line 1196 "socketmodule.c"
      case 4: // $bb3
        var $11=HEAP[$path]; //@line 1196 "socketmodule.c"
        var $12=$11; //@line 1196 "socketmodule.c"
        var $13=HEAP[$12]; //@line 1196 "socketmodule.c"
        var $14=($13)!=0; //@line 1196 "socketmodule.c"
        var $_pr=HEAP[$len];
        if ($14) { __lastLabel__ = 4; __label__ = 7; break; } else { __lastLabel__ = 4; __label__ = 5; break; } //@line 1196 "socketmodule.c"
      case 5: // $bb4
        var $15=($_pr) > 108; //@line 1198 "socketmodule.c"
        if ($15) { __label__ = 6; break; } else { __label__ = 10; break; } //@line 1198 "socketmodule.c"
      case 6: // $bb5
        var $16=HEAP[_socket_error]; //@line 1199 "socketmodule.c"
        _PyErr_SetString($16, __str18); //@line 1199 "socketmodule.c"
        $0=0; //@line 1201 "socketmodule.c"
        __label__ = 60; break; //@line 1201 "socketmodule.c"
      case 7: // $bb7
        var $17=__lastLabel__ == 3 ? $9 : ($_pr);
        var $18=($17) > 107; //@line 1208 "socketmodule.c"
        if ($18) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 1208 "socketmodule.c"
      case 8: // $bb8
        var $19=HEAP[_socket_error]; //@line 1209 "socketmodule.c"
        _PyErr_SetString($19, __str18); //@line 1209 "socketmodule.c"
        $0=0; //@line 1211 "socketmodule.c"
        __label__ = 60; break; //@line 1211 "socketmodule.c"
      case 9: // $bb9
        var $20=HEAP[$len]; //@line 1213 "socketmodule.c"
        var $21=$addr; //@line 1213 "socketmodule.c"
        var $22=$21+2; //@line 1213 "socketmodule.c"
        var $23=$22+$20; //@line 1213 "socketmodule.c"
        HEAP[$23]=0; //@line 1213 "socketmodule.c"
        __label__ = 10; break; //@line 1213 "socketmodule.c"
      case 10: // $bb10
        var $24=$s_addr; //@line 1215 "socketmodule.c"
        var $25=$24+12; //@line 1215 "socketmodule.c"
        var $26=HEAP[$25]; //@line 1215 "socketmodule.c"
        var $27=((($26)) & 65535); //@line 1215 "socketmodule.c"
        var $28=$addr; //@line 1215 "socketmodule.c"
        var $29=$28; //@line 1215 "socketmodule.c"
        HEAP[$29]=$27; //@line 1215 "socketmodule.c"
        var $30=HEAP[$len]; //@line 1216 "socketmodule.c"
        var $31=HEAP[$path]; //@line 1216 "socketmodule.c"
        var $32=$addr; //@line 1216 "socketmodule.c"
        var $33=$32+2; //@line 1216 "socketmodule.c"
        var $34=$33; //@line 1216 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($34, $31, $30, 1, 0); //@line 1216 "socketmodule.c"
        var $35=HEAP[$len]; //@line 1220 "socketmodule.c"
        var $36=($35) + 2; //@line 1220 "socketmodule.c"
        var $37=$len_ret_addr; //@line 1220 "socketmodule.c"
        HEAP[$37]=$36; //@line 1220 "socketmodule.c"
        $0=1; //@line 1222 "socketmodule.c"
        __label__ = 60; break; //@line 1222 "socketmodule.c"
      case 11: // $bb11
        var $38=$addr_ret_addr; //@line 1231 "socketmodule.c"
        var $39=$38; //@line 1231 "socketmodule.c"
        $addr12=$39; //@line 1231 "socketmodule.c"
        var $40=$args_addr; //@line 1232 "socketmodule.c"
        var $41=$40+4; //@line 1232 "socketmodule.c"
        var $42=HEAP[$41]; //@line 1232 "socketmodule.c"
        var $43=$42+84; //@line 1232 "socketmodule.c"
        var $44=HEAP[$43]; //@line 1232 "socketmodule.c"
        var $45=($44) & 67108864; //@line 1232 "socketmodule.c"
        var $46=($45)==0; //@line 1232 "socketmodule.c"
        var $47=$args_addr; //@line 1233 "socketmodule.c"
        if ($46) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1232 "socketmodule.c"
      case 12: // $bb13
        var $48=$47+4; //@line 1233 "socketmodule.c"
        var $49=HEAP[$48]; //@line 1233 "socketmodule.c"
        var $50=$49+12; //@line 1233 "socketmodule.c"
        var $51=HEAP[$50]; //@line 1233 "socketmodule.c"
        var $52=HEAP[_PyExc_TypeError]; //@line 1233 "socketmodule.c"
        var $53=_PyErr_Format($52, __str19, allocate([$51,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 1233 "socketmodule.c"
        $0=0; //@line 1238 "socketmodule.c"
        __label__ = 60; break; //@line 1238 "socketmodule.c"
      case 13: // $bb14
        var $54=_PyArg_ParseTuple($47, __str20, allocate([$pid,0,0,0,$groups,0,0,0], ["i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1240 "socketmodule.c"
        var $55=($54)==0; //@line 1240 "socketmodule.c"
        if ($55) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1240 "socketmodule.c"
      case 14: // $bb15
        $0=0; //@line 1241 "socketmodule.c"
        __label__ = 60; break; //@line 1241 "socketmodule.c"
      case 15: // $bb16
        var $56=$addr12; //@line 1242 "socketmodule.c"
        var $57=$56; //@line 1242 "socketmodule.c"
        HEAP[$57]=16; //@line 1242 "socketmodule.c"
        var $58=HEAP[$pid]; //@line 1243 "socketmodule.c"
        var $59=$addr12; //@line 1243 "socketmodule.c"
        var $60=$59+4; //@line 1243 "socketmodule.c"
        HEAP[$60]=$58; //@line 1243 "socketmodule.c"
        var $61=HEAP[$groups]; //@line 1244 "socketmodule.c"
        var $62=$addr12; //@line 1244 "socketmodule.c"
        var $63=$62+8; //@line 1244 "socketmodule.c"
        HEAP[$63]=$61; //@line 1244 "socketmodule.c"
        var $64=$len_ret_addr; //@line 1245 "socketmodule.c"
        HEAP[$64]=12; //@line 1245 "socketmodule.c"
        $0=1; //@line 1246 "socketmodule.c"
        __label__ = 60; break; //@line 1246 "socketmodule.c"
      case 16: // $bb17
        var $65=$args_addr; //@line 1255 "socketmodule.c"
        var $66=$65+4; //@line 1255 "socketmodule.c"
        var $67=HEAP[$66]; //@line 1255 "socketmodule.c"
        var $68=$67+84; //@line 1255 "socketmodule.c"
        var $69=HEAP[$68]; //@line 1255 "socketmodule.c"
        var $70=($69) & 67108864; //@line 1255 "socketmodule.c"
        var $71=($70)==0; //@line 1255 "socketmodule.c"
        var $72=$args_addr; //@line 1256 "socketmodule.c"
        if ($71) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1255 "socketmodule.c"
      case 17: // $bb19
        var $73=$72+4; //@line 1256 "socketmodule.c"
        var $74=HEAP[$73]; //@line 1256 "socketmodule.c"
        var $75=$74+12; //@line 1256 "socketmodule.c"
        var $76=HEAP[$75]; //@line 1256 "socketmodule.c"
        var $77=HEAP[_PyExc_TypeError]; //@line 1256 "socketmodule.c"
        var $78=_PyErr_Format($77, __str21, allocate([$76,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 1256 "socketmodule.c"
        $0=0; //@line 1261 "socketmodule.c"
        __label__ = 60; break; //@line 1261 "socketmodule.c"
      case 18: // $bb20
        var $79=_PyArg_ParseTuple($72, __str22, allocate([__str23,0,0,0,$host,0,0,0,$port,0,0,0], ["i8*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1263 "socketmodule.c"
        var $80=($79)==0; //@line 1263 "socketmodule.c"
        if ($80) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 1263 "socketmodule.c"
      case 19: // $bb21
        $0=0; //@line 1265 "socketmodule.c"
        __label__ = 60; break; //@line 1265 "socketmodule.c"
      case 20: // $bb22
        var $81=$addr_ret_addr; //@line 1266 "socketmodule.c"
        var $82=$81; //@line 1266 "socketmodule.c"
        $addr18=$82; //@line 1266 "socketmodule.c"
        var $83=$addr18; //@line 1267 "socketmodule.c"
        var $84=$83; //@line 1267 "socketmodule.c"
        var $85=HEAP[$host]; //@line 1267 "socketmodule.c"
        var $86=_setipaddr($85, $84, 16, 2); //@line 1267 "socketmodule.c"
        $result=$86; //@line 1267 "socketmodule.c"
        var $87=HEAP[$host]; //@line 1269 "socketmodule.c"
        _PyMem_Free($87); //@line 1269 "socketmodule.c"
        var $88=$result; //@line 1270 "socketmodule.c"
        var $89=($88) < 0; //@line 1270 "socketmodule.c"
        if ($89) { __label__ = 21; break; } else { __label__ = 22; break; } //@line 1270 "socketmodule.c"
      case 21: // $bb23
        $0=0; //@line 1271 "socketmodule.c"
        __label__ = 60; break; //@line 1271 "socketmodule.c"
      case 22: // $bb24
        var $90=HEAP[$port]; //@line 1272 "socketmodule.c"
        var $91=($90) < 0; //@line 1272 "socketmodule.c"
        var $92=HEAP[$port]; //@line 1272 "socketmodule.c"
        var $93=($92) > 65535; //@line 1272 "socketmodule.c"
        var $or_cond=($91) | ($93);
        if ($or_cond) { __label__ = 23; break; } else { __label__ = 24; break; } //@line 1272 "socketmodule.c"
      case 23: // $bb26
        var $94=HEAP[_PyExc_OverflowError]; //@line 1273 "socketmodule.c"
        _PyErr_SetString($94, __str24); //@line 1273 "socketmodule.c"
        $0=0; //@line 1276 "socketmodule.c"
        __label__ = 60; break; //@line 1276 "socketmodule.c"
      case 24: // $bb27
        var $95=$addr18; //@line 1278 "socketmodule.c"
        var $96=$95; //@line 1278 "socketmodule.c"
        HEAP[$96]=2; //@line 1278 "socketmodule.c"
        var $97=HEAP[$port]; //@line 1279 "socketmodule.c"
        var $98=((($97)) & 65535); //@line 1279 "socketmodule.c"
        var $99=($98); //@line 1279 "socketmodule.c"
        var $100=((($99)) & 65535); //@line 1279 "socketmodule.c"
        var $101=_htons($100); //@line 1279 "socketmodule.c"
        var $102=$addr18; //@line 1279 "socketmodule.c"
        var $103=$102+2; //@line 1279 "socketmodule.c"
        HEAP[$103]=$101; //@line 1279 "socketmodule.c"
        var $104=$len_ret_addr; //@line 1280 "socketmodule.c"
        HEAP[$104]=16; //@line 1280 "socketmodule.c"
        $0=1; //@line 1281 "socketmodule.c"
        __label__ = 60; break; //@line 1281 "socketmodule.c"
      case 25: // $bb28
        HEAP[$scope_id]=0; //@line 1290 "socketmodule.c"
        var $105=HEAP[$scope_id]; //@line 1290 "socketmodule.c"
        HEAP[$flowinfo]=$105; //@line 1290 "socketmodule.c"
        var $106=$args_addr; //@line 1291 "socketmodule.c"
        var $107=$106+4; //@line 1291 "socketmodule.c"
        var $108=HEAP[$107]; //@line 1291 "socketmodule.c"
        var $109=$108+84; //@line 1291 "socketmodule.c"
        var $110=HEAP[$109]; //@line 1291 "socketmodule.c"
        var $111=($110) & 67108864; //@line 1291 "socketmodule.c"
        var $112=($111)==0; //@line 1291 "socketmodule.c"
        var $113=$args_addr; //@line 1292 "socketmodule.c"
        if ($112) { __label__ = 26; break; } else { __label__ = 27; break; } //@line 1291 "socketmodule.c"
      case 26: // $bb33
        var $114=$113+4; //@line 1292 "socketmodule.c"
        var $115=HEAP[$114]; //@line 1292 "socketmodule.c"
        var $116=$115+12; //@line 1292 "socketmodule.c"
        var $117=HEAP[$116]; //@line 1292 "socketmodule.c"
        var $118=HEAP[_PyExc_TypeError]; //@line 1292 "socketmodule.c"
        var $119=_PyErr_Format($118, __str25, allocate([$117,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 1292 "socketmodule.c"
        $0=0; //@line 1297 "socketmodule.c"
        __label__ = 60; break; //@line 1297 "socketmodule.c"
      case 27: // $bb34
        var $120=_PyArg_ParseTuple($113, __str26, allocate([__str23,0,0,0,$host30,0,0,0,$port31,0,0,0,$flowinfo,0,0,0,$scope_id,0,0,0], ["i8*",0,0,0,"i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1299 "socketmodule.c"
        var $121=($120)==0; //@line 1299 "socketmodule.c"
        if ($121) { __label__ = 28; break; } else { __label__ = 29; break; } //@line 1299 "socketmodule.c"
      case 28: // $bb35
        $0=0; //@line 1302 "socketmodule.c"
        __label__ = 60; break; //@line 1302 "socketmodule.c"
      case 29: // $bb36
        var $122=$addr_ret_addr; //@line 1304 "socketmodule.c"
        var $123=$122; //@line 1304 "socketmodule.c"
        $addr29=$123; //@line 1304 "socketmodule.c"
        var $124=$addr29; //@line 1305 "socketmodule.c"
        var $125=$124; //@line 1305 "socketmodule.c"
        var $126=HEAP[$host30]; //@line 1305 "socketmodule.c"
        var $127=_setipaddr($126, $125, 28, 10); //@line 1305 "socketmodule.c"
        $result32=$127; //@line 1305 "socketmodule.c"
        var $128=HEAP[$host30]; //@line 1307 "socketmodule.c"
        _PyMem_Free($128); //@line 1307 "socketmodule.c"
        var $129=$result32; //@line 1308 "socketmodule.c"
        var $130=($129) < 0; //@line 1308 "socketmodule.c"
        if ($130) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 1308 "socketmodule.c"
      case 30: // $bb37
        $0=0; //@line 1309 "socketmodule.c"
        __label__ = 60; break; //@line 1309 "socketmodule.c"
      case 31: // $bb38
        var $131=HEAP[$port31]; //@line 1310 "socketmodule.c"
        var $132=($131) < 0; //@line 1310 "socketmodule.c"
        var $133=HEAP[$port31]; //@line 1310 "socketmodule.c"
        var $134=($133) > 65535; //@line 1310 "socketmodule.c"
        var $or_cond3=($132) | ($134);
        if ($or_cond3) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 1310 "socketmodule.c"
      case 32: // $bb40
        var $135=HEAP[_PyExc_OverflowError]; //@line 1311 "socketmodule.c"
        _PyErr_SetString($135, __str24); //@line 1311 "socketmodule.c"
        $0=0; //@line 1314 "socketmodule.c"
        __label__ = 60; break; //@line 1314 "socketmodule.c"
      case 33: // $bb41
        var $136=$s_addr; //@line 1316 "socketmodule.c"
        var $137=$136+12; //@line 1316 "socketmodule.c"
        var $138=HEAP[$137]; //@line 1316 "socketmodule.c"
        var $139=((($138)) & 65535); //@line 1316 "socketmodule.c"
        var $140=$addr29; //@line 1316 "socketmodule.c"
        var $141=$140; //@line 1316 "socketmodule.c"
        HEAP[$141]=$139; //@line 1316 "socketmodule.c"
        var $142=HEAP[$port31]; //@line 1317 "socketmodule.c"
        var $143=((($142)) & 65535); //@line 1317 "socketmodule.c"
        var $144=($143); //@line 1317 "socketmodule.c"
        var $145=((($144)) & 65535); //@line 1317 "socketmodule.c"
        var $146=_htons($145); //@line 1317 "socketmodule.c"
        var $147=$addr29; //@line 1317 "socketmodule.c"
        var $148=$147+2; //@line 1317 "socketmodule.c"
        HEAP[$148]=$146; //@line 1317 "socketmodule.c"
        var $149=HEAP[$flowinfo]; //@line 1318 "socketmodule.c"
        var $150=$addr29; //@line 1318 "socketmodule.c"
        var $151=$150+4; //@line 1318 "socketmodule.c"
        HEAP[$151]=$149; //@line 1318 "socketmodule.c"
        var $152=HEAP[$scope_id]; //@line 1319 "socketmodule.c"
        var $153=$addr29; //@line 1319 "socketmodule.c"
        var $154=$153+24; //@line 1319 "socketmodule.c"
        HEAP[$154]=$152; //@line 1319 "socketmodule.c"
        var $155=$len_ret_addr; //@line 1320 "socketmodule.c"
        HEAP[$155]=28; //@line 1320 "socketmodule.c"
        $0=1; //@line 1321 "socketmodule.c"
        __label__ = 60; break; //@line 1321 "socketmodule.c"
      case 34: // $bb42
        HEAP[$hatype]=0; //@line 1428 "socketmodule.c"
        HEAP[$pkttype]=0; //@line 1429 "socketmodule.c"
        HEAP[$haddr]=0; //@line 1430 "socketmodule.c"
        HEAP[$halen]=0; //@line 1431 "socketmodule.c"
        var $156=$args_addr; //@line 1433 "socketmodule.c"
        var $157=$156+4; //@line 1433 "socketmodule.c"
        var $158=HEAP[$157]; //@line 1433 "socketmodule.c"
        var $159=$158+84; //@line 1433 "socketmodule.c"
        var $160=HEAP[$159]; //@line 1433 "socketmodule.c"
        var $161=($160) & 67108864; //@line 1433 "socketmodule.c"
        var $162=($161)==0; //@line 1433 "socketmodule.c"
        var $163=$args_addr; //@line 1434 "socketmodule.c"
        if ($162) { __label__ = 35; break; } else { __label__ = 36; break; } //@line 1433 "socketmodule.c"
      case 35: // $bb44
        var $164=$163+4; //@line 1434 "socketmodule.c"
        var $165=HEAP[$164]; //@line 1434 "socketmodule.c"
        var $166=$165+12; //@line 1434 "socketmodule.c"
        var $167=HEAP[$166]; //@line 1434 "socketmodule.c"
        var $168=HEAP[_PyExc_TypeError]; //@line 1434 "socketmodule.c"
        var $169=_PyErr_Format($168, __str27, allocate([$167,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 1434 "socketmodule.c"
        $0=0; //@line 1439 "socketmodule.c"
        __label__ = 60; break; //@line 1439 "socketmodule.c"
      case 36: // $bb45
        var $170=_PyArg_ParseTuple($163, __str28, allocate([$interfaceName,0,0,0,$protoNumber,0,0,0,$pkttype,0,0,0,$hatype,0,0,0,$haddr,0,0,0,$halen,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1441 "socketmodule.c"
        var $171=($170)==0; //@line 1441 "socketmodule.c"
        if ($171) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 1441 "socketmodule.c"
      case 37: // $bb46
        $0=0; //@line 1444 "socketmodule.c"
        __label__ = 60; break; //@line 1444 "socketmodule.c"
      case 38: // $bb47
        var $172=HEAP[$interfaceName]; //@line 1445 "socketmodule.c"
        var $173=$ifr; //@line 1445 "socketmodule.c"
        var $174=$173; //@line 1445 "socketmodule.c"
        var $175=$174; //@line 1445 "socketmodule.c"
        var $176=_strncpy($175, $172, 16); //@line 1445 "socketmodule.c"
        var $177=$ifr; //@line 1446 "socketmodule.c"
        var $178=$177; //@line 1446 "socketmodule.c"
        var $179=$178+15; //@line 1446 "socketmodule.c"
        HEAP[$179]=0; //@line 1446 "socketmodule.c"
        var $180=$s_addr; //@line 1447 "socketmodule.c"
        var $181=$180+8; //@line 1447 "socketmodule.c"
        var $182=HEAP[$181]; //@line 1447 "socketmodule.c"
        var $183=_ioctl($182, 35123, allocate([$ifr,0,0,0], ["%struct.ifreq*",0,0,0], ALLOC_STACK)); //@line 1447 "socketmodule.c"
        var $184=($183) < 0; //@line 1447 "socketmodule.c"
        if ($184) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 1447 "socketmodule.c"
      case 39: // $bb48
        var $185=$s_addr; //@line 1448 "socketmodule.c"
        var $186=$185+24; //@line 1448 "socketmodule.c"
        var $187=HEAP[$186]; //@line 1448 "socketmodule.c"
        var $188=FUNCTION_TABLE[$187](); //@line 1448 "socketmodule.c"
        $0=0; //@line 1449 "socketmodule.c"
        __label__ = 60; break; //@line 1449 "socketmodule.c"
      case 40: // $bb49
        var $189=HEAP[$halen]; //@line 1451 "socketmodule.c"
        var $190=($189) > 8; //@line 1451 "socketmodule.c"
        if ($190) { __label__ = 41; break; } else { __label__ = 42; break; } //@line 1451 "socketmodule.c"
      case 41: // $bb50
        var $191=HEAP[_PyExc_ValueError]; //@line 1452 "socketmodule.c"
        _PyErr_SetString($191, __str29); //@line 1452 "socketmodule.c"
        $0=0; //@line 1454 "socketmodule.c"
        __label__ = 60; break; //@line 1454 "socketmodule.c"
      case 42: // $bb51
        var $192=HEAP[$protoNumber]; //@line 1456 "socketmodule.c"
        var $193=($192) < 0; //@line 1456 "socketmodule.c"
        var $194=HEAP[$protoNumber]; //@line 1456 "socketmodule.c"
        var $195=($194) > 65535; //@line 1456 "socketmodule.c"
        var $or_cond5=($193) | ($195);
        if ($or_cond5) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 1456 "socketmodule.c"
      case 43: // $bb53
        var $196=HEAP[_PyExc_OverflowError]; //@line 1457 "socketmodule.c"
        _PyErr_SetString($196, __str30); //@line 1457 "socketmodule.c"
        $0=0; //@line 1460 "socketmodule.c"
        __label__ = 60; break; //@line 1460 "socketmodule.c"
      case 44: // $bb54
        var $197=$addr_ret_addr; //@line 1462 "socketmodule.c"
        var $198=$197; //@line 1462 "socketmodule.c"
        $addr43=$198; //@line 1462 "socketmodule.c"
        var $199=$addr43; //@line 1463 "socketmodule.c"
        var $200=$199; //@line 1463 "socketmodule.c"
        HEAP[$200]=17; //@line 1463 "socketmodule.c"
        var $201=HEAP[$protoNumber]; //@line 1464 "socketmodule.c"
        var $202=((($201)) & 65535); //@line 1464 "socketmodule.c"
        var $203=($202); //@line 1464 "socketmodule.c"
        var $204=((($203)) & 65535); //@line 1464 "socketmodule.c"
        var $205=_htons($204); //@line 1464 "socketmodule.c"
        var $206=$addr43; //@line 1464 "socketmodule.c"
        var $207=$206+2; //@line 1464 "socketmodule.c"
        HEAP[$207]=$205; //@line 1464 "socketmodule.c"
        var $208=$ifr+16; //@line 1465 "socketmodule.c"
        var $209=$208; //@line 1465 "socketmodule.c"
        var $210=$209; //@line 1465 "socketmodule.c"
        var $211=HEAP[$210]; //@line 1465 "socketmodule.c"
        var $212=$addr43; //@line 1465 "socketmodule.c"
        var $213=$212+4; //@line 1465 "socketmodule.c"
        HEAP[$213]=$211; //@line 1465 "socketmodule.c"
        var $214=HEAP[$pkttype]; //@line 1466 "socketmodule.c"
        var $215=((($214)) & 255); //@line 1466 "socketmodule.c"
        var $216=$addr43; //@line 1466 "socketmodule.c"
        var $217=$216+10; //@line 1466 "socketmodule.c"
        HEAP[$217]=$215; //@line 1466 "socketmodule.c"
        var $218=HEAP[$hatype]; //@line 1467 "socketmodule.c"
        var $219=((($218)) & 65535); //@line 1467 "socketmodule.c"
        var $220=$addr43; //@line 1467 "socketmodule.c"
        var $221=$220+8; //@line 1467 "socketmodule.c"
        HEAP[$221]=$219; //@line 1467 "socketmodule.c"
        var $222=HEAP[$halen]; //@line 1468 "socketmodule.c"
        var $223=($222)!=0; //@line 1468 "socketmodule.c"
        if ($223) { __label__ = 45; break; } else { __label__ = 46; break; } //@line 1468 "socketmodule.c"
      case 45: // $bb55
        var $224=HEAP[$halen]; //@line 1469 "socketmodule.c"
        var $225=HEAP[$haddr]; //@line 1469 "socketmodule.c"
        var $226=$addr43; //@line 1469 "socketmodule.c"
        var $227=$226+12; //@line 1469 "socketmodule.c"
        var $228=$227; //@line 1469 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($228, $225, $224, 1, 0); //@line 1469 "socketmodule.c"
        __label__ = 46; break; //@line 1469 "socketmodule.c"
      case 46: // $bb56
        var $229=HEAP[$halen]; //@line 1471 "socketmodule.c"
        var $230=((($229)) & 255); //@line 1471 "socketmodule.c"
        var $231=$addr43; //@line 1471 "socketmodule.c"
        var $232=$231+11; //@line 1471 "socketmodule.c"
        HEAP[$232]=$230; //@line 1471 "socketmodule.c"
        var $233=$len_ret_addr; //@line 1472 "socketmodule.c"
        HEAP[$233]=20; //@line 1472 "socketmodule.c"
        $0=1; //@line 1473 "socketmodule.c"
        __label__ = 60; break; //@line 1473 "socketmodule.c"
      case 47: // $bb57
        HEAP[$scope]=2; //@line 1481 "socketmodule.c"
        var $234=$args_addr; //@line 1484 "socketmodule.c"
        var $235=$234+4; //@line 1484 "socketmodule.c"
        var $236=HEAP[$235]; //@line 1484 "socketmodule.c"
        var $237=$236+84; //@line 1484 "socketmodule.c"
        var $238=HEAP[$237]; //@line 1484 "socketmodule.c"
        var $239=($238) & 67108864; //@line 1484 "socketmodule.c"
        var $240=($239)==0; //@line 1484 "socketmodule.c"
        var $241=$args_addr; //@line 1485 "socketmodule.c"
        if ($240) { __label__ = 48; break; } else { __label__ = 49; break; } //@line 1484 "socketmodule.c"
      case 48: // $bb59
        var $242=$241+4; //@line 1485 "socketmodule.c"
        var $243=HEAP[$242]; //@line 1485 "socketmodule.c"
        var $244=$243+12; //@line 1485 "socketmodule.c"
        var $245=HEAP[$244]; //@line 1485 "socketmodule.c"
        var $246=HEAP[_PyExc_TypeError]; //@line 1485 "socketmodule.c"
        var $247=_PyErr_Format($246, __str31, allocate([$245,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 1485 "socketmodule.c"
        $0=0; //@line 1490 "socketmodule.c"
        __label__ = 60; break; //@line 1490 "socketmodule.c"
      case 49: // $bb60
        var $248=_PyArg_ParseTuple($241, __str32, allocate([$atype,0,0,0,$v1,0,0,0,$v2,0,0,0,$v3,0,0,0,$scope,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1493 "socketmodule.c"
        var $249=($248)==0; //@line 1493 "socketmodule.c"
        if ($249) { __label__ = 50; break; } else { __label__ = 51; break; } //@line 1493 "socketmodule.c"
      case 50: // $bb61
        $0=0; //@line 1496 "socketmodule.c"
        __label__ = 60; break; //@line 1496 "socketmodule.c"
      case 51: // $bb62
        var $250=$addr_ret_addr; //@line 1498 "socketmodule.c"
        var $251=$250; //@line 1498 "socketmodule.c"
        $addr58=$251; //@line 1498 "socketmodule.c"
        var $252=$addr58; //@line 1499 "socketmodule.c"
        var $253=$252; //@line 1499 "socketmodule.c"
        _llvm_memset_p0i8_i32($253, 0, 16, 1, 0); //@line 1499 "socketmodule.c"
        var $254=$addr58; //@line 1501 "socketmodule.c"
        var $255=$254; //@line 1501 "socketmodule.c"
        HEAP[$255]=30; //@line 1501 "socketmodule.c"
        var $256=HEAP[$scope]; //@line 1502 "socketmodule.c"
        var $257=((($256)) & 255); //@line 1502 "socketmodule.c"
        var $258=$addr58; //@line 1502 "socketmodule.c"
        var $259=$258+3; //@line 1502 "socketmodule.c"
        HEAP[$259]=$257; //@line 1502 "socketmodule.c"
        var $260=HEAP[$atype]; //@line 1503 "socketmodule.c"
        var $261=((($260)) & 255); //@line 1503 "socketmodule.c"
        var $262=$addr58; //@line 1503 "socketmodule.c"
        var $263=$262+2; //@line 1503 "socketmodule.c"
        HEAP[$263]=$261; //@line 1503 "socketmodule.c"
        var $264=HEAP[$atype]; //@line 1505 "socketmodule.c"
        var $265=($264)==1; //@line 1505 "socketmodule.c"
        if ($265) { __label__ = 52; break; } else { __label__ = 53; break; } //@line 1505 "socketmodule.c"
      case 52: // $bb63
        var $266=HEAP[$v1]; //@line 1506 "socketmodule.c"
        var $267=$addr58; //@line 1506 "socketmodule.c"
        var $268=$267+4; //@line 1506 "socketmodule.c"
        var $269=$268; //@line 1506 "socketmodule.c"
        var $270=$269; //@line 1506 "socketmodule.c"
        HEAP[$270]=$266; //@line 1506 "socketmodule.c"
        var $271=HEAP[$v2]; //@line 1507 "socketmodule.c"
        var $272=$addr58; //@line 1507 "socketmodule.c"
        var $273=$272+4; //@line 1507 "socketmodule.c"
        var $274=$273; //@line 1507 "socketmodule.c"
        var $275=$274+4; //@line 1507 "socketmodule.c"
        HEAP[$275]=$271; //@line 1507 "socketmodule.c"
        var $276=HEAP[$v3]; //@line 1508 "socketmodule.c"
        var $277=$addr58; //@line 1508 "socketmodule.c"
        var $278=$277+4; //@line 1508 "socketmodule.c"
        var $279=$278; //@line 1508 "socketmodule.c"
        var $280=$279+8; //@line 1508 "socketmodule.c"
        HEAP[$280]=$276; //@line 1508 "socketmodule.c"
        __label__ = 58; break; //@line 1508 "socketmodule.c"
      case 53: // $bb64
        var $281=HEAP[$atype]; //@line 1509 "socketmodule.c"
        var $282=($281)==2; //@line 1509 "socketmodule.c"
        if ($282) { __label__ = 54; break; } else { __label__ = 55; break; } //@line 1509 "socketmodule.c"
      case 54: // $bb65
        var $283=HEAP[$v1]; //@line 1510 "socketmodule.c"
        var $284=$addr58; //@line 1510 "socketmodule.c"
        var $285=$284+4; //@line 1510 "socketmodule.c"
        var $286=$285; //@line 1510 "socketmodule.c"
        var $287=$286; //@line 1510 "socketmodule.c"
        var $288=$287; //@line 1510 "socketmodule.c"
        var $289=$288; //@line 1510 "socketmodule.c"
        HEAP[$289]=$283; //@line 1510 "socketmodule.c"
        var $290=HEAP[$v2]; //@line 1511 "socketmodule.c"
        var $291=$addr58; //@line 1511 "socketmodule.c"
        var $292=$291+4; //@line 1511 "socketmodule.c"
        var $293=$292; //@line 1511 "socketmodule.c"
        var $294=$293; //@line 1511 "socketmodule.c"
        var $295=$294; //@line 1511 "socketmodule.c"
        var $296=$295+4; //@line 1511 "socketmodule.c"
        HEAP[$296]=$290; //@line 1511 "socketmodule.c"
        __label__ = 58; break; //@line 1511 "socketmodule.c"
      case 55: // $bb66
        var $297=HEAP[$atype]; //@line 1512 "socketmodule.c"
        var $298=($297)==3; //@line 1512 "socketmodule.c"
        if ($298) { __label__ = 56; break; } else { __label__ = 57; break; } //@line 1512 "socketmodule.c"
      case 56: // $bb67
        var $299=HEAP[$v1]; //@line 1513 "socketmodule.c"
        var $300=$addr58; //@line 1513 "socketmodule.c"
        var $301=$300+4; //@line 1513 "socketmodule.c"
        var $302=$301; //@line 1513 "socketmodule.c"
        var $303=$302; //@line 1513 "socketmodule.c"
        var $304=$303+4; //@line 1513 "socketmodule.c"
        HEAP[$304]=$299; //@line 1513 "socketmodule.c"
        var $305=HEAP[$v2]; //@line 1514 "socketmodule.c"
        var $306=$addr58; //@line 1514 "socketmodule.c"
        var $307=$306+4; //@line 1514 "socketmodule.c"
        var $308=$307; //@line 1514 "socketmodule.c"
        var $309=$308; //@line 1514 "socketmodule.c"
        var $310=$309; //@line 1514 "socketmodule.c"
        HEAP[$310]=$305; //@line 1514 "socketmodule.c"
        __label__ = 58; break; //@line 1514 "socketmodule.c"
      case 57: // $bb68
        var $311=HEAP[_PyExc_TypeError]; //@line 1517 "socketmodule.c"
        _PyErr_SetString($311, __str15); //@line 1517 "socketmodule.c"
        $0=0; //@line 1518 "socketmodule.c"
        __label__ = 60; break; //@line 1518 "socketmodule.c"
      case 58: // $bb69
        var $312=$len_ret_addr; //@line 1521 "socketmodule.c"
        HEAP[$312]=16; //@line 1521 "socketmodule.c"
        $0=1; //@line 1523 "socketmodule.c"
        __label__ = 60; break; //@line 1523 "socketmodule.c"
      case 59: // $bb70
        var $313=HEAP[_socket_error]; //@line 1530 "socketmodule.c"
        _PyErr_SetString($313, __str33); //@line 1530 "socketmodule.c"
        $0=0; //@line 1531 "socketmodule.c"
        __label__ = 60; break; //@line 1531 "socketmodule.c"
      case 60: // $bb71
        var $314=$0; //@line 1192 "socketmodule.c"
        $retval=$314; //@line 1192 "socketmodule.c"
        var $retval72=$retval; //@line 1192 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval72; //@line 1192 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _getsockaddrlen($s, $len_ret) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $len_ret_addr;
        var $retval;
        var $0;
        $s_addr=$s;
        $len_ret_addr=$len_ret;
        var $1=$s_addr; //@line 1544 "socketmodule.c"
        var $2=$1+12; //@line 1544 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1544 "socketmodule.c"
        if ($3 == 1) {
          __label__ = 1; break;
        }
        else if ($3 == 2) {
          __label__ = 3; break;
        }
        else if ($3 == 10) {
          __label__ = 4; break;
        }
        else if ($3 == 16) {
          __label__ = 2; break;
        }
        else if ($3 == 17) {
          __label__ = 5; break;
        }
        else if ($3 == 30) {
          __label__ = 6; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 1: // $bb
        var $4=$len_ret_addr; //@line 1549 "socketmodule.c"
        HEAP[$4]=110; //@line 1549 "socketmodule.c"
        $0=1; //@line 1550 "socketmodule.c"
        __label__ = 8; break; //@line 1550 "socketmodule.c"
      case 2: // $bb1
        var $5=$len_ret_addr; //@line 1556 "socketmodule.c"
        HEAP[$5]=12; //@line 1556 "socketmodule.c"
        $0=1; //@line 1557 "socketmodule.c"
        __label__ = 8; break; //@line 1557 "socketmodule.c"
      case 3: // $bb2
        var $6=$len_ret_addr; //@line 1563 "socketmodule.c"
        HEAP[$6]=16; //@line 1563 "socketmodule.c"
        $0=1; //@line 1564 "socketmodule.c"
        __label__ = 8; break; //@line 1564 "socketmodule.c"
      case 4: // $bb3
        var $7=$len_ret_addr; //@line 1570 "socketmodule.c"
        HEAP[$7]=28; //@line 1570 "socketmodule.c"
        $0=1; //@line 1571 "socketmodule.c"
        __label__ = 8; break; //@line 1571 "socketmodule.c"
      case 5: // $bb4
        var $8=$len_ret_addr; //@line 1607 "socketmodule.c"
        HEAP[$8]=20; //@line 1607 "socketmodule.c"
        $0=1; //@line 1608 "socketmodule.c"
        __label__ = 8; break; //@line 1608 "socketmodule.c"
      case 6: // $bb5
        var $9=$len_ret_addr; //@line 1615 "socketmodule.c"
        HEAP[$9]=16; //@line 1615 "socketmodule.c"
        $0=1; //@line 1616 "socketmodule.c"
        __label__ = 8; break; //@line 1616 "socketmodule.c"
      case 7: // $bb6
        var $10=HEAP[_socket_error]; //@line 1623 "socketmodule.c"
        _PyErr_SetString($10, __str34); //@line 1623 "socketmodule.c"
        $0=0; //@line 1624 "socketmodule.c"
        __label__ = 8; break; //@line 1624 "socketmodule.c"
      case 8: // $bb7
        var $11=$0; //@line 1550 "socketmodule.c"
        $retval=$11; //@line 1550 "socketmodule.c"
        var $retval8=$retval; //@line 1550 "socketmodule.c"
        ;
        return $retval8; //@line 1550 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_accept($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $retval;
        var $0=__stackBase__;
        var $1;
        var $addrbuf=__stackBase__+4;
        var $newfd;
        var $addrlen=__stackBase__+132;
        var $sock;
        var $addr;
        var $res;
        var $timeout;
        $s_addr=$s;
        $sock=0; //@line 1638 "socketmodule.c"
        $addr=0; //@line 1639 "socketmodule.c"
        $res=0; //@line 1640 "socketmodule.c"
        var $2=$s_addr; //@line 1643 "socketmodule.c"
        var $3=_getsockaddrlen($2, $addrlen); //@line 1643 "socketmodule.c"
        var $4=($3)==0; //@line 1643 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1643 "socketmodule.c"
      case 1: // $bb
        $1=0; //@line 1644 "socketmodule.c"
        __label__ = 19; break; //@line 1644 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[$addrlen]; //@line 1645 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 1645 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0); //@line 1645 "socketmodule.c"
        $newfd=-1; //@line 1650 "socketmodule.c"
        var $6=$s_addr; //@line 1657 "socketmodule.c"
        var $7=_internal_select($6, 0); //@line 1657 "socketmodule.c"
        $timeout=$7; //@line 1657 "socketmodule.c"
        var $8=$timeout; //@line 1658 "socketmodule.c"
        var $9=($8)==0; //@line 1658 "socketmodule.c"
        if ($9) { __lastLabel__ = 2; __label__ = 3; break; } else { __lastLabel__ = 2; __label__ = 4; break; } //@line 1658 "socketmodule.c"
      case 3: // $bb3
        var $addrbuf4=$addrbuf; //@line 1659 "socketmodule.c"
        var $10=$0; //@line 1659 "socketmodule.c"
        HEAP[$10]=$addrbuf4; //@line 1659 "socketmodule.c"
        var $11=$s_addr; //@line 1659 "socketmodule.c"
        var $12=$11+8; //@line 1659 "socketmodule.c"
        var $13=HEAP[$12]; //@line 1659 "socketmodule.c"
        var $elt=$0; //@line 1659 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 1659 "socketmodule.c"
        var $14=_accept($13, $val, $addrlen); //@line 1659 "socketmodule.c"
        $newfd=$14; //@line 1659 "socketmodule.c"
        var $_pr=$timeout;
        __lastLabel__ = 3; __label__ = 4; break; //@line 1659 "socketmodule.c"
      case 4: // $bb6
        var $15=__lastLabel__ == 3 ? $_pr : ($8);
        var $16=($15)==1; //@line 1662 "socketmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1662 "socketmodule.c"
      case 5: // $bb7
        var $17=HEAP[_socket_timeout]; //@line 1663 "socketmodule.c"
        _PyErr_SetString($17, __str35); //@line 1663 "socketmodule.c"
        $1=0; //@line 1664 "socketmodule.c"
        __label__ = 19; break; //@line 1664 "socketmodule.c"
      case 6: // $bb8
        var $18=$newfd; //@line 1670 "socketmodule.c"
        var $19=($18) < 0; //@line 1670 "socketmodule.c"
        var $20=$s_addr; //@line 1672 "socketmodule.c"
        if ($19) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1670 "socketmodule.c"
      case 7: // $bb9
        var $21=$20+24; //@line 1672 "socketmodule.c"
        var $22=HEAP[$21]; //@line 1672 "socketmodule.c"
        var $23=FUNCTION_TABLE[$22](); //@line 1672 "socketmodule.c"
        $1=$23; //@line 1672 "socketmodule.c"
        __label__ = 19; break; //@line 1672 "socketmodule.c"
      case 8: // $bb10
        var $24=$20+20; //@line 1676 "socketmodule.c"
        var $25=HEAP[$24]; //@line 1676 "socketmodule.c"
        var $26=$s_addr; //@line 1676 "socketmodule.c"
        var $27=$26+16; //@line 1676 "socketmodule.c"
        var $28=HEAP[$27]; //@line 1676 "socketmodule.c"
        var $29=$s_addr; //@line 1676 "socketmodule.c"
        var $30=$29+12; //@line 1676 "socketmodule.c"
        var $31=HEAP[$30]; //@line 1676 "socketmodule.c"
        var $32=$newfd; //@line 1676 "socketmodule.c"
        var $33=_new_sockobject($32, $31, $28, $25); //@line 1676 "socketmodule.c"
        var $34=$33; //@line 1676 "socketmodule.c"
        $sock=$34; //@line 1676 "socketmodule.c"
        var $35=$sock; //@line 1681 "socketmodule.c"
        var $36=($35)==0; //@line 1681 "socketmodule.c"
        if ($36) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1681 "socketmodule.c"
      case 9: // $bb11
        var $37=$newfd; //@line 1682 "socketmodule.c"
        var $38=_close($37); //@line 1682 "socketmodule.c"
        __label__ = 12; break; //@line 1682 "socketmodule.c"
      case 10: // $bb12
        var $39=$s_addr; //@line 1685 "socketmodule.c"
        var $40=$39+20; //@line 1685 "socketmodule.c"
        var $41=HEAP[$40]; //@line 1685 "socketmodule.c"
        var $42=HEAP[$addrlen]; //@line 1685 "socketmodule.c"
        var $addrbuf13=$addrbuf; //@line 1685 "socketmodule.c"
        var $43=$s_addr; //@line 1685 "socketmodule.c"
        var $44=$43+8; //@line 1685 "socketmodule.c"
        var $45=HEAP[$44]; //@line 1685 "socketmodule.c"
        var $46=_makesockaddr($45, $addrbuf13, $42, $41); //@line 1685 "socketmodule.c"
        $addr=$46; //@line 1685 "socketmodule.c"
        var $47=$addr; //@line 1687 "socketmodule.c"
        var $48=($47)==0; //@line 1687 "socketmodule.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 11; break; } //@line 1687 "socketmodule.c"
      case 11: // $bb15
        var $49=$sock; //@line 1690 "socketmodule.c"
        var $50=$addr; //@line 1690 "socketmodule.c"
        var $51=_PyTuple_Pack(2, allocate([$49,0,0,0,$50,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 1690 "socketmodule.c"
        $res=$51; //@line 1690 "socketmodule.c"
        __label__ = 12; break; //@line 1692 "socketmodule.c"
      case 12: // $finally
        var $52=$sock; //@line 1693 "socketmodule.c"
        var $53=($52)!=0; //@line 1693 "socketmodule.c"
        if ($53) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 1693 "socketmodule.c"
      case 13: // $bb16
        var $54=$sock; //@line 1693 "socketmodule.c"
        var $55=$54; //@line 1693 "socketmodule.c"
        var $56=HEAP[$55]; //@line 1693 "socketmodule.c"
        var $57=($56) - 1; //@line 1693 "socketmodule.c"
        var $58=$sock; //@line 1693 "socketmodule.c"
        var $59=$58; //@line 1693 "socketmodule.c"
        HEAP[$59]=$57; //@line 1693 "socketmodule.c"
        var $60=$sock; //@line 1693 "socketmodule.c"
        var $61=$60; //@line 1693 "socketmodule.c"
        var $62=HEAP[$61]; //@line 1693 "socketmodule.c"
        var $63=($62)==0; //@line 1693 "socketmodule.c"
        if ($63) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 1693 "socketmodule.c"
      case 14: // $bb17
        var $64=$sock; //@line 1693 "socketmodule.c"
        var $65=$64+4; //@line 1693 "socketmodule.c"
        var $66=HEAP[$65]; //@line 1693 "socketmodule.c"
        var $67=$66+24; //@line 1693 "socketmodule.c"
        var $68=HEAP[$67]; //@line 1693 "socketmodule.c"
        var $69=$sock; //@line 1693 "socketmodule.c"
        FUNCTION_TABLE[$68]($69); //@line 1693 "socketmodule.c"
        __label__ = 15; break; //@line 1693 "socketmodule.c"
      case 15: // $bb18
        var $70=$addr; //@line 1694 "socketmodule.c"
        var $71=($70)!=0; //@line 1694 "socketmodule.c"
        if ($71) { __label__ = 16; break; } else { __label__ = 18; break; } //@line 1694 "socketmodule.c"
      case 16: // $bb19
        var $72=$addr; //@line 1694 "socketmodule.c"
        var $73=$72; //@line 1694 "socketmodule.c"
        var $74=HEAP[$73]; //@line 1694 "socketmodule.c"
        var $75=($74) - 1; //@line 1694 "socketmodule.c"
        var $76=$addr; //@line 1694 "socketmodule.c"
        var $77=$76; //@line 1694 "socketmodule.c"
        HEAP[$77]=$75; //@line 1694 "socketmodule.c"
        var $78=$addr; //@line 1694 "socketmodule.c"
        var $79=$78; //@line 1694 "socketmodule.c"
        var $80=HEAP[$79]; //@line 1694 "socketmodule.c"
        var $81=($80)==0; //@line 1694 "socketmodule.c"
        if ($81) { __label__ = 17; break; } else { __label__ = 18; break; } //@line 1694 "socketmodule.c"
      case 17: // $bb20
        var $82=$addr; //@line 1694 "socketmodule.c"
        var $83=$82+4; //@line 1694 "socketmodule.c"
        var $84=HEAP[$83]; //@line 1694 "socketmodule.c"
        var $85=$84+24; //@line 1694 "socketmodule.c"
        var $86=HEAP[$85]; //@line 1694 "socketmodule.c"
        var $87=$addr; //@line 1694 "socketmodule.c"
        FUNCTION_TABLE[$86]($87); //@line 1694 "socketmodule.c"
        __label__ = 18; break; //@line 1694 "socketmodule.c"
      case 18: // $bb21
        var $88=$res; //@line 1695 "socketmodule.c"
        $1=$88; //@line 1695 "socketmodule.c"
        __label__ = 19; break; //@line 1695 "socketmodule.c"
      case 19: // $bb22
        var $89=$1; //@line 1644 "socketmodule.c"
        $retval=$89; //@line 1644 "socketmodule.c"
        var $retval23=$retval; //@line 1644 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval23; //@line 1644 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_setblocking($s, $arg) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $arg_addr;
        var $retval;
        var $iftmp_114;
        var $0;
        var $block;
        $s_addr=$s;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1715 "socketmodule.c"
        var $2=_PyInt_AsLong($1); //@line 1715 "socketmodule.c"
        $block=$2; //@line 1715 "socketmodule.c"
        var $3=$block; //@line 1716 "socketmodule.c"
        var $4=($3)==-1; //@line 1716 "socketmodule.c"
        if ($4) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 4; break; } //@line 1716 "socketmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 1716 "socketmodule.c"
        var $6=($5)!=0; //@line 1716 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 1716 "socketmodule.c"
      case 2: // $bb1
        $0=0; //@line 1717 "socketmodule.c"
        __label__ = 8; break; //@line 1717 "socketmodule.c"
      case 3: // $bb2thread_pre_split
        var $_pr=$block;
        __lastLabel__ = 3; __label__ = 4; break;
      case 4: // $bb2
        var $7=__lastLabel__ == 3 ? $_pr : ($3);
        var $8=($7)!=0; //@line 1719 "socketmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1719 "socketmodule.c"
      case 5: // $bb3
        $iftmp_114=-1; //@line 1719 "socketmodule.c"
        __label__ = 7; break; //@line 1719 "socketmodule.c"
      case 6: // $bb4
        $iftmp_114=0; //@line 1719 "socketmodule.c"
        __label__ = 7; break; //@line 1719 "socketmodule.c"
      case 7: // $bb5
        var $9=$s_addr; //@line 1719 "socketmodule.c"
        var $10=$9+28; //@line 1719 "socketmodule.c"
        var $11=$iftmp_114; //@line 1719 "socketmodule.c"
        HEAP[$10]=$11; //@line 1719 "socketmodule.c"
        var $12=$s_addr; //@line 1720 "socketmodule.c"
        var $13=$block; //@line 1720 "socketmodule.c"
        _internal_setblocking($12, $13); //@line 1720 "socketmodule.c"
        var $14=HEAP[__Py_NoneStruct]; //@line 1722 "socketmodule.c"
        var $15=($14) + 1; //@line 1722 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$15; //@line 1722 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 1723 "socketmodule.c"
        __label__ = 8; break; //@line 1723 "socketmodule.c"
      case 8: // $bb6
        var $16=$0; //@line 1717 "socketmodule.c"
        $retval=$16; //@line 1717 "socketmodule.c"
        var $retval7=$retval; //@line 1717 "socketmodule.c"
        ;
        return $retval7; //@line 1717 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_settimeout($s, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $timeout;
        $s_addr=$s;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 1744 "socketmodule.c"
        var $2=($1)==(__Py_NoneStruct); //@line 1744 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1744 "socketmodule.c"
      case 1: // $bb
        $timeout=-1; //@line 1745 "socketmodule.c"
        __label__ = 6; break; //@line 1745 "socketmodule.c"
      case 2: // $bb1
        var $3=$arg_addr; //@line 1747 "socketmodule.c"
        var $4=_PyFloat_AsDouble($3); //@line 1747 "socketmodule.c"
        $timeout=$4; //@line 1747 "socketmodule.c"
        var $5=$timeout; //@line 1748 "socketmodule.c"
        var $6=($5) < 0; //@line 1748 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1748 "socketmodule.c"
      case 3: // $bb2
        var $7=_PyErr_Occurred(); //@line 1749 "socketmodule.c"
        var $8=($7)==0; //@line 1749 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1749 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[_PyExc_ValueError]; //@line 1750 "socketmodule.c"
        _PyErr_SetString($9, __str36); //@line 1750 "socketmodule.c"
        __label__ = 5; break; //@line 1750 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 1752 "socketmodule.c"
        __label__ = 7; break; //@line 1752 "socketmodule.c"
      case 6: // $bb5
        var $10=$s_addr; //@line 1756 "socketmodule.c"
        var $11=$10+28; //@line 1756 "socketmodule.c"
        var $12=$timeout; //@line 1756 "socketmodule.c"
        HEAP[$11]=$12; //@line 1756 "socketmodule.c"
        var $13=$timeout; //@line 1757 "socketmodule.c"
        var $14=($13) < 0; //@line 1757 "socketmodule.c"
        var $15=($14); //@line 1757 "socketmodule.c"
        var $16=$s_addr; //@line 1757 "socketmodule.c"
        _internal_setblocking($16, $15); //@line 1757 "socketmodule.c"
        var $17=HEAP[__Py_NoneStruct]; //@line 1759 "socketmodule.c"
        var $18=($17) + 1; //@line 1759 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$18; //@line 1759 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 1760 "socketmodule.c"
        __label__ = 7; break; //@line 1760 "socketmodule.c"
      case 7: // $bb6
        var $19=$0; //@line 1752 "socketmodule.c"
        $retval=$19; //@line 1752 "socketmodule.c"
        var $retval7=$retval; //@line 1752 "socketmodule.c"
        ;
        return $retval7; //@line 1752 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_gettimeout($s) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $retval;
        var $0;
        $s_addr=$s;
        var $1=$s_addr; //@line 1776 "socketmodule.c"
        var $2=$1+28; //@line 1776 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1776 "socketmodule.c"
        var $4=($3) < 0; //@line 1776 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1776 "socketmodule.c"
      case 1: // $bb
        var $5=HEAP[__Py_NoneStruct]; //@line 1777 "socketmodule.c"
        var $6=($5) + 1; //@line 1777 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$6; //@line 1777 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 1778 "socketmodule.c"
        __label__ = 3; break; //@line 1778 "socketmodule.c"
      case 2: // $bb1
        var $7=$s_addr; //@line 1781 "socketmodule.c"
        var $8=$7+28; //@line 1781 "socketmodule.c"
        var $9=HEAP[$8]; //@line 1781 "socketmodule.c"
        var $10=_PyFloat_FromDouble($9); //@line 1781 "socketmodule.c"
        $0=$10; //@line 1781 "socketmodule.c"
        __label__ = 3; break; //@line 1781 "socketmodule.c"
      case 3: // $bb2
        var $11=$0; //@line 1778 "socketmodule.c"
        $retval=$11; //@line 1778 "socketmodule.c"
        var $retval3=$retval; //@line 1778 "socketmodule.c"
        ;
        return $retval3; //@line 1778 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_setsockopt($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $level=__stackBase__;
        var $optname=__stackBase__+4;
        var $res;
        var $buf=__stackBase__+8;
        var $buflen=__stackBase__+12;
        var $flag=__stackBase__+16;
        $s_addr=$s;
        $args_addr=$args;
        var $1=$args_addr; //@line 1830 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str37, allocate([$level,0,0,0,$optname,0,0,0,$flag,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1830 "socketmodule.c"
        var $3=($2)!=0; //@line 1830 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1830 "socketmodule.c"
      case 1: // $bb
        var $flag1=$flag; //@line 1832 "socketmodule.c"
        HEAP[$buf]=$flag1; //@line 1832 "socketmodule.c"
        HEAP[$buflen]=4; //@line 1833 "socketmodule.c"
        __label__ = 4; break; //@line 1833 "socketmodule.c"
      case 2: // $bb3
        _PyErr_Clear(); //@line 1836 "socketmodule.c"
        var $4=$args_addr; //@line 1837 "socketmodule.c"
        var $5=_PyArg_ParseTuple($4, __str38, allocate([$level,0,0,0,$optname,0,0,0,$buf,0,0,0,$buflen,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1837 "socketmodule.c"
        var $6=($5)==0; //@line 1837 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1837 "socketmodule.c"
      case 3: // $bb4
        $0=0; //@line 1839 "socketmodule.c"
        __label__ = 7; break; //@line 1839 "socketmodule.c"
      case 4: // $bb5
        var $7=HEAP[$buflen]; //@line 1841 "socketmodule.c"
        var $8=HEAP[$buf]; //@line 1841 "socketmodule.c"
        var $9=HEAP[$optname]; //@line 1841 "socketmodule.c"
        var $10=HEAP[$level]; //@line 1841 "socketmodule.c"
        var $11=$s_addr; //@line 1841 "socketmodule.c"
        var $12=$11+8; //@line 1841 "socketmodule.c"
        var $13=HEAP[$12]; //@line 1841 "socketmodule.c"
        var $14=_setsockopt($13, $10, $9, $8, $7); //@line 1841 "socketmodule.c"
        $res=$14; //@line 1841 "socketmodule.c"
        var $15=($14) < 0; //@line 1842 "socketmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 1842 "socketmodule.c"
      case 5: // $bb6
        var $16=$s_addr; //@line 1843 "socketmodule.c"
        var $17=$16+24; //@line 1843 "socketmodule.c"
        var $18=HEAP[$17]; //@line 1843 "socketmodule.c"
        var $19=FUNCTION_TABLE[$18](); //@line 1843 "socketmodule.c"
        $0=$19; //@line 1843 "socketmodule.c"
        __label__ = 7; break; //@line 1843 "socketmodule.c"
      case 6: // $bb7
        var $20=HEAP[__Py_NoneStruct]; //@line 1844 "socketmodule.c"
        var $21=($20) + 1; //@line 1844 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$21; //@line 1844 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 1845 "socketmodule.c"
        __label__ = 7; break; //@line 1845 "socketmodule.c"
      case 7: // $bb8
        var $22=$0; //@line 1839 "socketmodule.c"
        $retval=$22; //@line 1839 "socketmodule.c"
        var $retval9=$retval; //@line 1839 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1839 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_getsockopt($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $level=__stackBase__;
        var $optname=__stackBase__+4;
        var $res;
        var $buf=__stackBase__+8;
        var $buflen=__stackBase__+12;
        var $flag=__stackBase__+16;
        var $flagsize=__stackBase__+20;
        $s_addr=$s;
        $args_addr=$args;
        HEAP[$buflen]=0; //@line 1867 "socketmodule.c"
        var $1=$args_addr; //@line 1875 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str39, allocate([$level,0,0,0,$optname,0,0,0,$buflen,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 1875 "socketmodule.c"
        var $3=($2)==0; //@line 1875 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1875 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 1877 "socketmodule.c"
        __label__ = 15; break; //@line 1877 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$buflen]; //@line 1879 "socketmodule.c"
        var $5=($4)==0; //@line 1879 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 1879 "socketmodule.c"
      case 3: // $bb2
        HEAP[$flag]=0; //@line 1880 "socketmodule.c"
        HEAP[$flagsize]=4; //@line 1881 "socketmodule.c"
        var $6=HEAP[$optname]; //@line 1882 "socketmodule.c"
        var $7=HEAP[$level]; //@line 1882 "socketmodule.c"
        var $8=$s_addr; //@line 1882 "socketmodule.c"
        var $9=$8+8; //@line 1882 "socketmodule.c"
        var $10=HEAP[$9]; //@line 1882 "socketmodule.c"
        var $flag3=$flag; //@line 1882 "socketmodule.c"
        var $11=_getsockopt($10, $7, $6, $flag3, $flagsize); //@line 1882 "socketmodule.c"
        $res=$11; //@line 1882 "socketmodule.c"
        var $12=$res; //@line 1884 "socketmodule.c"
        var $13=($12) < 0; //@line 1884 "socketmodule.c"
        if ($13) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 1884 "socketmodule.c"
      case 4: // $bb4
        var $14=$s_addr; //@line 1885 "socketmodule.c"
        var $15=$14+24; //@line 1885 "socketmodule.c"
        var $16=HEAP[$15]; //@line 1885 "socketmodule.c"
        var $17=FUNCTION_TABLE[$16](); //@line 1885 "socketmodule.c"
        $0=$17; //@line 1885 "socketmodule.c"
        __label__ = 15; break; //@line 1885 "socketmodule.c"
      case 5: // $bb5
        var $18=HEAP[$flag]; //@line 1886 "socketmodule.c"
        var $19=_PyInt_FromLong($18); //@line 1886 "socketmodule.c"
        $0=$19; //@line 1886 "socketmodule.c"
        __label__ = 15; break; //@line 1886 "socketmodule.c"
      case 6: // $bb6
        var $20=HEAP[$buflen]; //@line 1893 "socketmodule.c"
        var $21=($20)==0; //@line 1893 "socketmodule.c"
        var $22=HEAP[$buflen]; //@line 1893 "socketmodule.c"
        var $23=($22) > 1024; //@line 1893 "socketmodule.c"
        var $or_cond=($21) | ($23);
        if ($or_cond) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 1893 "socketmodule.c"
      case 7: // $bb8
        var $24=HEAP[_socket_error]; //@line 1895 "socketmodule.c"
        _PyErr_SetString($24, __str40); //@line 1895 "socketmodule.c"
        $0=0; //@line 1897 "socketmodule.c"
        __label__ = 15; break; //@line 1897 "socketmodule.c"
      case 8: // $bb9
        var $25=HEAP[$buflen]; //@line 1899 "socketmodule.c"
        var $26=_PyString_FromStringAndSize(0, $25); //@line 1899 "socketmodule.c"
        HEAP[$buf]=$26; //@line 1899 "socketmodule.c"
        var $27=HEAP[$buf]; //@line 1900 "socketmodule.c"
        var $28=($27)==0; //@line 1900 "socketmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 1900 "socketmodule.c"
      case 9: // $bb10
        $0=0; //@line 1901 "socketmodule.c"
        __label__ = 15; break; //@line 1901 "socketmodule.c"
      case 10: // $bb11
        var $29=HEAP[$buf]; //@line 1902 "socketmodule.c"
        var $30=$29; //@line 1902 "socketmodule.c"
        var $31=$30+20; //@line 1902 "socketmodule.c"
        var $32=$31; //@line 1902 "socketmodule.c"
        var $33=HEAP[$optname]; //@line 1902 "socketmodule.c"
        var $34=HEAP[$level]; //@line 1902 "socketmodule.c"
        var $35=$s_addr; //@line 1902 "socketmodule.c"
        var $36=$35+8; //@line 1902 "socketmodule.c"
        var $37=HEAP[$36]; //@line 1902 "socketmodule.c"
        var $38=_getsockopt($37, $34, $33, $32, $buflen); //@line 1902 "socketmodule.c"
        $res=$38; //@line 1902 "socketmodule.c"
        var $39=$res; //@line 1904 "socketmodule.c"
        var $40=($39) < 0; //@line 1904 "socketmodule.c"
        if ($40) { __label__ = 11; break; } else { __label__ = 14; break; } //@line 1904 "socketmodule.c"
      case 11: // $bb12
        var $41=HEAP[$buf]; //@line 1905 "socketmodule.c"
        var $42=$41; //@line 1905 "socketmodule.c"
        var $43=HEAP[$42]; //@line 1905 "socketmodule.c"
        var $44=($43) - 1; //@line 1905 "socketmodule.c"
        var $45=$41; //@line 1905 "socketmodule.c"
        HEAP[$45]=$44; //@line 1905 "socketmodule.c"
        var $46=$41; //@line 1905 "socketmodule.c"
        var $47=HEAP[$46]; //@line 1905 "socketmodule.c"
        var $48=($47)==0; //@line 1905 "socketmodule.c"
        if ($48) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 1905 "socketmodule.c"
      case 12: // $bb13
        var $49=HEAP[$buf]; //@line 1905 "socketmodule.c"
        var $50=$49+4; //@line 1905 "socketmodule.c"
        var $51=HEAP[$50]; //@line 1905 "socketmodule.c"
        var $52=$51+24; //@line 1905 "socketmodule.c"
        var $53=HEAP[$52]; //@line 1905 "socketmodule.c"
        var $54=HEAP[$buf]; //@line 1905 "socketmodule.c"
        FUNCTION_TABLE[$53]($54); //@line 1905 "socketmodule.c"
        __label__ = 13; break; //@line 1905 "socketmodule.c"
      case 13: // $bb14
        var $55=$s_addr; //@line 1906 "socketmodule.c"
        var $56=$55+24; //@line 1906 "socketmodule.c"
        var $57=HEAP[$56]; //@line 1906 "socketmodule.c"
        var $58=FUNCTION_TABLE[$57](); //@line 1906 "socketmodule.c"
        $0=$58; //@line 1906 "socketmodule.c"
        __label__ = 15; break; //@line 1906 "socketmodule.c"
      case 14: // $bb15
        var $59=HEAP[$buflen]; //@line 1908 "socketmodule.c"
        var $60=__PyString_Resize($buf, $59); //@line 1908 "socketmodule.c"
        var $61=HEAP[$buf]; //@line 1909 "socketmodule.c"
        $0=$61; //@line 1909 "socketmodule.c"
        __label__ = 15; break; //@line 1909 "socketmodule.c"
      case 15: // $bb16
        var $62=$0; //@line 1877 "socketmodule.c"
        $retval=$62; //@line 1877 "socketmodule.c"
        var $retval17=$retval; //@line 1877 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval17; //@line 1877 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_bind($s, $addro) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $addro_addr;
        var $retval;
        var $0=__stackBase__;
        var $1;
        var $addrbuf=__stackBase__+4;
        var $addrlen=__stackBase__+132;
        var $res;
        $s_addr=$s;
        $addro_addr=$addro;
        var $addrbuf1=$addrbuf; //@line 1930 "socketmodule.c"
        var $2=$s_addr; //@line 1930 "socketmodule.c"
        var $3=$addro_addr; //@line 1930 "socketmodule.c"
        var $4=_getsockaddrarg($2, $3, $addrbuf1, $addrlen); //@line 1930 "socketmodule.c"
        var $5=($4)==0; //@line 1930 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1930 "socketmodule.c"
      case 1: // $bb
        $1=0; //@line 1931 "socketmodule.c"
        __label__ = 5; break; //@line 1931 "socketmodule.c"
      case 2: // $bb3
        var $6=HEAP[$addrlen]; //@line 1933 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 1933 "socketmodule.c"
        var $7=$0; //@line 1933 "socketmodule.c"
        HEAP[$7]=$addrbuf4; //@line 1933 "socketmodule.c"
        var $8=$s_addr; //@line 1933 "socketmodule.c"
        var $9=$8+8; //@line 1933 "socketmodule.c"
        var $10=HEAP[$9]; //@line 1933 "socketmodule.c"
        var $elt=$0; //@line 1933 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 1933 "socketmodule.c"
        var $11=_bind($10, $val, $6); //@line 1933 "socketmodule.c"
        $res=$11; //@line 1933 "socketmodule.c"
        var $12=$res; //@line 1935 "socketmodule.c"
        var $13=($12) < 0; //@line 1935 "socketmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 1935 "socketmodule.c"
      case 3: // $bb6
        var $14=$s_addr; //@line 1936 "socketmodule.c"
        var $15=$14+24; //@line 1936 "socketmodule.c"
        var $16=HEAP[$15]; //@line 1936 "socketmodule.c"
        var $17=FUNCTION_TABLE[$16](); //@line 1936 "socketmodule.c"
        $1=$17; //@line 1936 "socketmodule.c"
        __label__ = 5; break; //@line 1936 "socketmodule.c"
      case 4: // $bb7
        var $18=HEAP[__Py_NoneStruct]; //@line 1937 "socketmodule.c"
        var $19=($18) + 1; //@line 1937 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$19; //@line 1937 "socketmodule.c"
        $1=__Py_NoneStruct; //@line 1938 "socketmodule.c"
        __label__ = 5; break; //@line 1938 "socketmodule.c"
      case 5: // $bb8
        var $20=$1; //@line 1931 "socketmodule.c"
        $retval=$20; //@line 1931 "socketmodule.c"
        var $retval9=$retval; //@line 1931 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 1931 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_close($s) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $retval;
        var $0;
        var $fd;
        $s_addr=$s;
        var $1=$s_addr; //@line 1958 "socketmodule.c"
        var $2=$1+8; //@line 1958 "socketmodule.c"
        var $3=HEAP[$2]; //@line 1958 "socketmodule.c"
        $fd=$3; //@line 1958 "socketmodule.c"
        var $4=$fd; //@line 1958 "socketmodule.c"
        var $5=($4)!=-1; //@line 1958 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 1958 "socketmodule.c"
      case 1: // $bb
        var $6=$s_addr; //@line 1959 "socketmodule.c"
        var $7=$6+8; //@line 1959 "socketmodule.c"
        HEAP[$7]=-1; //@line 1959 "socketmodule.c"
        var $8=$fd; //@line 1961 "socketmodule.c"
        var $9=_close($8); //@line 1961 "socketmodule.c"
        __label__ = 2; break; //@line 1961 "socketmodule.c"
      case 2: // $bb1
        var $10=HEAP[__Py_NoneStruct]; //@line 1964 "socketmodule.c"
        var $11=($10) + 1; //@line 1964 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$11; //@line 1964 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 1965 "socketmodule.c"
        var $12=$0; //@line 1965 "socketmodule.c"
        $retval=$12; //@line 1965 "socketmodule.c"
        var $retval2=$retval; //@line 1965 "socketmodule.c"
        ;
        return $retval2; //@line 1965 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _internal_connect($s, $addr, $addrlen, $timeoutp) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $addr_addr;
        var $addrlen_addr;
        var $timeoutp_addr;
        var $retval;
        var $0;
        var $1=__stackBase__;
        var $res=__stackBase__+4;
        var $timeout;
        var $res_size=__stackBase__+8;
        $s_addr=$s;
        $addr_addr=$addr;
        $addrlen_addr=$addrlen;
        $timeoutp_addr=$timeoutp;
        $timeout=0; //@line 1979 "socketmodule.c"
        var $2=$addrlen_addr; //@line 1980 "socketmodule.c"
        var $3=$1; //@line 1980 "socketmodule.c"
        var $4=$addr_addr; //@line 1980 "socketmodule.c"
        HEAP[$3]=$4; //@line 1980 "socketmodule.c"
        var $5=$s_addr; //@line 1980 "socketmodule.c"
        var $6=$5+8; //@line 1980 "socketmodule.c"
        var $7=HEAP[$6]; //@line 1980 "socketmodule.c"
        var $elt=$1; //@line 1980 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 1980 "socketmodule.c"
        var $8=_connect($7, $val, $2); //@line 1980 "socketmodule.c"
        HEAP[$res]=$8; //@line 1980 "socketmodule.c"
        var $9=$s_addr; //@line 2030 "socketmodule.c"
        var $10=$9+28; //@line 2030 "socketmodule.c"
        var $11=HEAP[$10]; //@line 2030 "socketmodule.c"
        var $12=($11) > 0; //@line 2030 "socketmodule.c"
        if ($12) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 11; break; } //@line 2030 "socketmodule.c"
      case 1: // $bb
        var $13=HEAP[$res]; //@line 2031 "socketmodule.c"
        var $14=($13) < 0; //@line 2031 "socketmodule.c"
        if ($14) { __label__ = 2; break; } else { __label__ = 13; break; } //@line 2031 "socketmodule.c"
      case 2: // $bb1
        var $15=___errno_location(); //@line 2031 "socketmodule.c"
        var $16=HEAP[$15]; //@line 2031 "socketmodule.c"
        var $17=($16)==115; //@line 2031 "socketmodule.c"
        if ($17) { __label__ = 3; break; } else { __label__ = 10; break; } //@line 2031 "socketmodule.c"
      case 3: // $bb2
        var $18=$s_addr; //@line 2032 "socketmodule.c"
        var $19=_internal_select($18, 1); //@line 2032 "socketmodule.c"
        $timeout=$19; //@line 2032 "socketmodule.c"
        var $20=$timeout; //@line 2033 "socketmodule.c"
        var $21=($20)==0; //@line 2033 "socketmodule.c"
        if ($21) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 2033 "socketmodule.c"
      case 4: // $bb3
        HEAP[$res_size]=4; //@line 2037 "socketmodule.c"
        var $22=$s_addr; //@line 2038 "socketmodule.c"
        var $23=$22+8; //@line 2038 "socketmodule.c"
        var $24=HEAP[$23]; //@line 2038 "socketmodule.c"
        var $res4=$res; //@line 2038 "socketmodule.c"
        var $25=_getsockopt($24, 1, 4, $res4, $res_size); //@line 2038 "socketmodule.c"
        var $26=HEAP[$res]; //@line 2040 "socketmodule.c"
        var $27=($26)==106; //@line 2040 "socketmodule.c"
        if ($27) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2040 "socketmodule.c"
      case 5: // $bb5
        HEAP[$res]=0; //@line 2041 "socketmodule.c"
        __label__ = 6; break; //@line 2041 "socketmodule.c"
      case 6: // $bb6
        var $28=___errno_location(); //@line 2042 "socketmodule.c"
        var $29=HEAP[$res]; //@line 2042 "socketmodule.c"
        HEAP[$28]=$29; //@line 2042 "socketmodule.c"
        __label__ = 10; break; //@line 2042 "socketmodule.c"
      case 7: // $bb7
        var $30=$timeout; //@line 2044 "socketmodule.c"
        var $31=($30)==-1; //@line 2044 "socketmodule.c"
        if ($31) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2044 "socketmodule.c"
      case 8: // $bb8
        var $32=___errno_location(); //@line 2045 "socketmodule.c"
        var $33=HEAP[$32]; //@line 2045 "socketmodule.c"
        HEAP[$res]=$33; //@line 2045 "socketmodule.c"
        __lastLabel__ = 8; __label__ = 11; break; //@line 2045 "socketmodule.c"
      case 9: // $bb9
        HEAP[$res]=11; //@line 2048 "socketmodule.c"
        __label__ = 13; break; //@line 2048 "socketmodule.c"
      case 10: // $bb10thread_pre_split
        var $_pr=HEAP[$res];
        __lastLabel__ = 10; __label__ = 11; break;
      case 11: // $bb10
        var $34=__lastLabel__ == 10 ? $_pr : (__lastLabel__ == 8 ? $33 : ($8));
        var $35=($34) < 0; //@line 2052 "socketmodule.c"
        if ($35) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2052 "socketmodule.c"
      case 12: // $bb11
        var $36=___errno_location(); //@line 2053 "socketmodule.c"
        var $37=HEAP[$36]; //@line 2053 "socketmodule.c"
        HEAP[$res]=$37; //@line 2053 "socketmodule.c"
        __label__ = 13; break; //@line 2053 "socketmodule.c"
      case 13: // $bb12
        var $38=$timeoutp_addr; //@line 2056 "socketmodule.c"
        var $39=$timeout; //@line 2056 "socketmodule.c"
        HEAP[$38]=$39; //@line 2056 "socketmodule.c"
        var $40=HEAP[$res]; //@line 2058 "socketmodule.c"
        $0=$40; //@line 2058 "socketmodule.c"
        var $41=$0; //@line 2058 "socketmodule.c"
        $retval=$41; //@line 2058 "socketmodule.c"
        var $retval13=$retval; //@line 2058 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 2058 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_connect($s, $addro) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $addro_addr;
        var $retval;
        var $0;
        var $addrbuf=__stackBase__;
        var $addrlen=__stackBase__+128;
        var $res;
        var $timeout=__stackBase__+132;
        $s_addr=$s;
        $addro_addr=$addro;
        var $addrbuf1=$addrbuf; //@line 2071 "socketmodule.c"
        var $1=$s_addr; //@line 2071 "socketmodule.c"
        var $2=$addro_addr; //@line 2071 "socketmodule.c"
        var $3=_getsockaddrarg($1, $2, $addrbuf1, $addrlen); //@line 2071 "socketmodule.c"
        var $4=($3)==0; //@line 2071 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2071 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2072 "socketmodule.c"
        __label__ = 7; break; //@line 2072 "socketmodule.c"
      case 2: // $bb3
        var $5=HEAP[$addrlen]; //@line 2075 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 2075 "socketmodule.c"
        var $6=$s_addr; //@line 2075 "socketmodule.c"
        var $7=_internal_connect($6, $addrbuf4, $5, $timeout); //@line 2075 "socketmodule.c"
        $res=$7; //@line 2075 "socketmodule.c"
        var $8=HEAP[$timeout]; //@line 2078 "socketmodule.c"
        var $9=($8)==1; //@line 2078 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2078 "socketmodule.c"
      case 3: // $bb6
        var $10=HEAP[_socket_timeout]; //@line 2079 "socketmodule.c"
        _PyErr_SetString($10, __str35); //@line 2079 "socketmodule.c"
        $0=0; //@line 2080 "socketmodule.c"
        __label__ = 7; break; //@line 2080 "socketmodule.c"
      case 4: // $bb7
        var $11=$res; //@line 2082 "socketmodule.c"
        var $12=($11)!=0; //@line 2082 "socketmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2082 "socketmodule.c"
      case 5: // $bb8
        var $13=$s_addr; //@line 2083 "socketmodule.c"
        var $14=$13+24; //@line 2083 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2083 "socketmodule.c"
        var $16=FUNCTION_TABLE[$15](); //@line 2083 "socketmodule.c"
        $0=$16; //@line 2083 "socketmodule.c"
        __label__ = 7; break; //@line 2083 "socketmodule.c"
      case 6: // $bb9
        var $17=HEAP[__Py_NoneStruct]; //@line 2084 "socketmodule.c"
        var $18=($17) + 1; //@line 2084 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$18; //@line 2084 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 2085 "socketmodule.c"
        __label__ = 7; break; //@line 2085 "socketmodule.c"
      case 7: // $bb10
        var $19=$0; //@line 2072 "socketmodule.c"
        $retval=$19; //@line 2072 "socketmodule.c"
        var $retval11=$retval; //@line 2072 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval11; //@line 2072 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_connect_ex($s, $addro) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $addro_addr;
        var $retval;
        var $0;
        var $addrbuf=__stackBase__;
        var $addrlen=__stackBase__+128;
        var $res;
        var $timeout=__stackBase__+132;
        $s_addr=$s;
        $addro_addr=$addro;
        var $addrbuf1=$addrbuf; //@line 2105 "socketmodule.c"
        var $1=$s_addr; //@line 2105 "socketmodule.c"
        var $2=$addro_addr; //@line 2105 "socketmodule.c"
        var $3=_getsockaddrarg($1, $2, $addrbuf1, $addrlen); //@line 2105 "socketmodule.c"
        var $4=($3)==0; //@line 2105 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2105 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2106 "socketmodule.c"
        __label__ = 6; break; //@line 2106 "socketmodule.c"
      case 2: // $bb3
        var $5=HEAP[$addrlen]; //@line 2109 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 2109 "socketmodule.c"
        var $6=$s_addr; //@line 2109 "socketmodule.c"
        var $7=_internal_connect($6, $addrbuf4, $5, $timeout); //@line 2109 "socketmodule.c"
        $res=$7; //@line 2109 "socketmodule.c"
        var $8=$res; //@line 2115 "socketmodule.c"
        var $9=($8)==4; //@line 2115 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 2115 "socketmodule.c"
      case 3: // $bb6
        var $10=_PyErr_CheckSignals(); //@line 2115 "socketmodule.c"
        var $11=($10)!=0; //@line 2115 "socketmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2115 "socketmodule.c"
      case 4: // $bb7
        $0=0; //@line 2116 "socketmodule.c"
        __label__ = 6; break; //@line 2116 "socketmodule.c"
      case 5: // $bb8
        var $12=$res; //@line 2119 "socketmodule.c"
        var $13=_PyInt_FromLong($12); //@line 2119 "socketmodule.c"
        $0=$13; //@line 2119 "socketmodule.c"
        __label__ = 6; break; //@line 2119 "socketmodule.c"
      case 6: // $bb9
        var $14=$0; //@line 2106 "socketmodule.c"
        $retval=$14; //@line 2106 "socketmodule.c"
        var $retval10=$retval; //@line 2106 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2106 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_fileno($s) {
    ;
    var __label__;
  
    var $s_addr;
    var $retval;
    var $0;
    $s_addr=$s;
    var $1=$s_addr; //@line 2135 "socketmodule.c"
    var $2=$1+8; //@line 2135 "socketmodule.c"
    var $3=HEAP[$2]; //@line 2135 "socketmodule.c"
    var $4=_PyInt_FromLong($3); //@line 2135 "socketmodule.c"
    $0=$4; //@line 2135 "socketmodule.c"
    var $5=$0; //@line 2135 "socketmodule.c"
    $retval=$5; //@line 2135 "socketmodule.c"
    var $retval1=$retval; //@line 2135 "socketmodule.c"
    ;
    return $retval1; //@line 2135 "socketmodule.c"
  }
  

  function _sock_dup($s) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $retval;
        var $0;
        var $newfd;
        var $sock;
        $s_addr=$s;
        var $1=$s_addr; //@line 2156 "socketmodule.c"
        var $2=$1+8; //@line 2156 "socketmodule.c"
        var $3=HEAP[$2]; //@line 2156 "socketmodule.c"
        var $4=_dup($3); //@line 2156 "socketmodule.c"
        $newfd=$4; //@line 2156 "socketmodule.c"
        var $5=$newfd; //@line 2157 "socketmodule.c"
        var $6=($5) < 0; //@line 2157 "socketmodule.c"
        var $7=$s_addr; //@line 2158 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2157 "socketmodule.c"
      case 1: // $bb
        var $8=$7+24; //@line 2158 "socketmodule.c"
        var $9=HEAP[$8]; //@line 2158 "socketmodule.c"
        var $10=FUNCTION_TABLE[$9](); //@line 2158 "socketmodule.c"
        $0=$10; //@line 2158 "socketmodule.c"
        __label__ = 5; break; //@line 2158 "socketmodule.c"
      case 2: // $bb1
        var $11=$7+20; //@line 2159 "socketmodule.c"
        var $12=HEAP[$11]; //@line 2159 "socketmodule.c"
        var $13=$s_addr; //@line 2159 "socketmodule.c"
        var $14=$13+16; //@line 2159 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2159 "socketmodule.c"
        var $16=$s_addr; //@line 2159 "socketmodule.c"
        var $17=$16+12; //@line 2159 "socketmodule.c"
        var $18=HEAP[$17]; //@line 2159 "socketmodule.c"
        var $19=$newfd; //@line 2159 "socketmodule.c"
        var $20=_new_sockobject($19, $18, $15, $12); //@line 2159 "socketmodule.c"
        var $21=$20; //@line 2159 "socketmodule.c"
        $sock=$21; //@line 2159 "socketmodule.c"
        var $22=$sock; //@line 2163 "socketmodule.c"
        var $23=($22)==0; //@line 2163 "socketmodule.c"
        if ($23) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2163 "socketmodule.c"
      case 3: // $bb2
        var $24=$newfd; //@line 2164 "socketmodule.c"
        var $25=_close($24); //@line 2164 "socketmodule.c"
        __label__ = 4; break; //@line 2164 "socketmodule.c"
      case 4: // $bb3
        var $26=$sock; //@line 2165 "socketmodule.c"
        $0=$26; //@line 2165 "socketmodule.c"
        __label__ = 5; break; //@line 2165 "socketmodule.c"
      case 5: // $bb4
        var $27=$0; //@line 2158 "socketmodule.c"
        $retval=$27; //@line 2158 "socketmodule.c"
        var $retval5=$retval; //@line 2158 "socketmodule.c"
        ;
        return $retval5; //@line 2158 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_getsockname($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $retval;
        var $0=__stackBase__;
        var $1;
        var $addrbuf=__stackBase__+4;
        var $res;
        var $addrlen=__stackBase__+132;
        $s_addr=$s;
        var $2=$s_addr; //@line 2185 "socketmodule.c"
        var $3=_getsockaddrlen($2, $addrlen); //@line 2185 "socketmodule.c"
        var $4=($3)==0; //@line 2185 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2185 "socketmodule.c"
      case 1: // $bb
        $1=0; //@line 2186 "socketmodule.c"
        __label__ = 5; break; //@line 2186 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[$addrlen]; //@line 2187 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 2187 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0); //@line 2187 "socketmodule.c"
        var $addrbuf3=$addrbuf; //@line 2189 "socketmodule.c"
        var $6=$0; //@line 2189 "socketmodule.c"
        HEAP[$6]=$addrbuf3; //@line 2189 "socketmodule.c"
        var $7=$s_addr; //@line 2189 "socketmodule.c"
        var $8=$7+8; //@line 2189 "socketmodule.c"
        var $9=HEAP[$8]; //@line 2189 "socketmodule.c"
        var $elt=$0; //@line 2189 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2189 "socketmodule.c"
        var $10=_getsockname($9, $val, $addrlen); //@line 2189 "socketmodule.c"
        $res=$10; //@line 2189 "socketmodule.c"
        var $11=$res; //@line 2191 "socketmodule.c"
        var $12=($11) < 0; //@line 2191 "socketmodule.c"
        var $13=$s_addr; //@line 2192 "socketmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2191 "socketmodule.c"
      case 3: // $bb5
        var $14=$13+24; //@line 2192 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2192 "socketmodule.c"
        var $16=FUNCTION_TABLE[$15](); //@line 2192 "socketmodule.c"
        $1=$16; //@line 2192 "socketmodule.c"
        __label__ = 5; break; //@line 2192 "socketmodule.c"
      case 4: // $bb6
        var $17=$13+20; //@line 2193 "socketmodule.c"
        var $18=HEAP[$17]; //@line 2193 "socketmodule.c"
        var $19=HEAP[$addrlen]; //@line 2193 "socketmodule.c"
        var $addrbuf7=$addrbuf; //@line 2193 "socketmodule.c"
        var $20=$s_addr; //@line 2193 "socketmodule.c"
        var $21=$20+8; //@line 2193 "socketmodule.c"
        var $22=HEAP[$21]; //@line 2193 "socketmodule.c"
        var $23=_makesockaddr($22, $addrbuf7, $19, $18); //@line 2193 "socketmodule.c"
        $1=$23; //@line 2193 "socketmodule.c"
        __label__ = 5; break; //@line 2193 "socketmodule.c"
      case 5: // $bb9
        var $24=$1; //@line 2186 "socketmodule.c"
        $retval=$24; //@line 2186 "socketmodule.c"
        var $retval10=$retval; //@line 2186 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2186 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_getpeername($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $retval;
        var $0=__stackBase__;
        var $1;
        var $addrbuf=__stackBase__+4;
        var $res;
        var $addrlen=__stackBase__+132;
        $s_addr=$s;
        var $2=$s_addr; //@line 2214 "socketmodule.c"
        var $3=_getsockaddrlen($2, $addrlen); //@line 2214 "socketmodule.c"
        var $4=($3)==0; //@line 2214 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2214 "socketmodule.c"
      case 1: // $bb
        $1=0; //@line 2215 "socketmodule.c"
        __label__ = 5; break; //@line 2215 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[$addrlen]; //@line 2216 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 2216 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $5, 1, 0); //@line 2216 "socketmodule.c"
        var $addrbuf3=$addrbuf; //@line 2218 "socketmodule.c"
        var $6=$0; //@line 2218 "socketmodule.c"
        HEAP[$6]=$addrbuf3; //@line 2218 "socketmodule.c"
        var $7=$s_addr; //@line 2218 "socketmodule.c"
        var $8=$7+8; //@line 2218 "socketmodule.c"
        var $9=HEAP[$8]; //@line 2218 "socketmodule.c"
        var $elt=$0; //@line 2218 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2218 "socketmodule.c"
        var $10=_getpeername($9, $val, $addrlen); //@line 2218 "socketmodule.c"
        $res=$10; //@line 2218 "socketmodule.c"
        var $11=$res; //@line 2220 "socketmodule.c"
        var $12=($11) < 0; //@line 2220 "socketmodule.c"
        var $13=$s_addr; //@line 2221 "socketmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2220 "socketmodule.c"
      case 3: // $bb5
        var $14=$13+24; //@line 2221 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2221 "socketmodule.c"
        var $16=FUNCTION_TABLE[$15](); //@line 2221 "socketmodule.c"
        $1=$16; //@line 2221 "socketmodule.c"
        __label__ = 5; break; //@line 2221 "socketmodule.c"
      case 4: // $bb6
        var $17=$13+20; //@line 2222 "socketmodule.c"
        var $18=HEAP[$17]; //@line 2222 "socketmodule.c"
        var $19=HEAP[$addrlen]; //@line 2222 "socketmodule.c"
        var $addrbuf7=$addrbuf; //@line 2222 "socketmodule.c"
        var $20=$s_addr; //@line 2222 "socketmodule.c"
        var $21=$20+8; //@line 2222 "socketmodule.c"
        var $22=HEAP[$21]; //@line 2222 "socketmodule.c"
        var $23=_makesockaddr($22, $addrbuf7, $19, $18); //@line 2222 "socketmodule.c"
        $1=$23; //@line 2222 "socketmodule.c"
        __label__ = 5; break; //@line 2222 "socketmodule.c"
      case 5: // $bb9
        var $24=$1; //@line 2215 "socketmodule.c"
        $retval=$24; //@line 2215 "socketmodule.c"
        var $retval10=$retval; //@line 2215 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2215 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_listen($s, $arg) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $backlog;
        var $res;
        $s_addr=$s;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 2243 "socketmodule.c"
        var $2=_PyInt_AsLong($1); //@line 2243 "socketmodule.c"
        $backlog=$2; //@line 2243 "socketmodule.c"
        var $3=$backlog; //@line 2244 "socketmodule.c"
        var $4=($3)==-1; //@line 2244 "socketmodule.c"
        if ($4) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 4; break; } //@line 2244 "socketmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 2244 "socketmodule.c"
        var $6=($5)!=0; //@line 2244 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2244 "socketmodule.c"
      case 2: // $bb1
        $0=0; //@line 2245 "socketmodule.c"
        __label__ = 9; break; //@line 2245 "socketmodule.c"
      case 3: // $bb2thread_pre_split
        var $_pr=$backlog;
        __lastLabel__ = 3; __label__ = 4; break;
      case 4: // $bb2
        var $7=__lastLabel__ == 3 ? $_pr : ($3);
        var $8=($7) < 0; //@line 2249 "socketmodule.c"
        if ($8) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2249 "socketmodule.c"
      case 5: // $bb3
        $backlog=0; //@line 2250 "socketmodule.c"
        __label__ = 6; break; //@line 2250 "socketmodule.c"
      case 6: // $bb4
        var $9=$s_addr; //@line 2251 "socketmodule.c"
        var $10=$9+8; //@line 2251 "socketmodule.c"
        var $11=HEAP[$10]; //@line 2251 "socketmodule.c"
        var $12=$backlog; //@line 2251 "socketmodule.c"
        var $13=_listen($11, $12); //@line 2251 "socketmodule.c"
        $res=$13; //@line 2251 "socketmodule.c"
        var $14=($13) < 0; //@line 2253 "socketmodule.c"
        if ($14) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2253 "socketmodule.c"
      case 7: // $bb5
        var $15=$s_addr; //@line 2254 "socketmodule.c"
        var $16=$15+24; //@line 2254 "socketmodule.c"
        var $17=HEAP[$16]; //@line 2254 "socketmodule.c"
        var $18=FUNCTION_TABLE[$17](); //@line 2254 "socketmodule.c"
        $0=$18; //@line 2254 "socketmodule.c"
        __label__ = 9; break; //@line 2254 "socketmodule.c"
      case 8: // $bb6
        var $19=HEAP[__Py_NoneStruct]; //@line 2255 "socketmodule.c"
        var $20=($19) + 1; //@line 2255 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$20; //@line 2255 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 2256 "socketmodule.c"
        __label__ = 9; break; //@line 2256 "socketmodule.c"
      case 9: // $bb7
        var $21=$0; //@line 2245 "socketmodule.c"
        $retval=$21; //@line 2245 "socketmodule.c"
        var $retval8=$retval; //@line 2245 "socketmodule.c"
        ;
        return $retval8; //@line 2245 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_makefile($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $mode=__stackBase__;
        var $bufsize=__stackBase__+4;
        var $fd;
        var $fp;
        var $f;
        $s_addr=$s;
        $args_addr=$args;
        HEAP[$mode]=__str41; //@line 2280 "socketmodule.c"
        HEAP[$bufsize]=-1; //@line 2281 "socketmodule.c"
        var $1=$args_addr; //@line 2294 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str42, allocate([$mode,0,0,0,$bufsize,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2294 "socketmodule.c"
        var $3=($2)==0; //@line 2294 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2294 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2295 "socketmodule.c"
        __label__ = 10; break; //@line 2295 "socketmodule.c"
      case 2: // $bb1
        var $4=$s_addr; //@line 2310 "socketmodule.c"
        var $5=$4+8; //@line 2310 "socketmodule.c"
        var $6=HEAP[$5]; //@line 2310 "socketmodule.c"
        var $7=_dup($6); //@line 2310 "socketmodule.c"
        $fd=$7; //@line 2310 "socketmodule.c"
        var $8=$fd; //@line 2310 "socketmodule.c"
        var $9=($8) < 0; //@line 2310 "socketmodule.c"
        if ($9) { __label__ = 6; break; } else { __label__ = 3; break; } //@line 2310 "socketmodule.c"
      case 3: // $bb2
        var $10=HEAP[$mode]; //@line 2310 "socketmodule.c"
        var $11=$fd; //@line 2310 "socketmodule.c"
        var $12=_fdopen($11, $10); //@line 2310 "socketmodule.c"
        $fp=$12; //@line 2310 "socketmodule.c"
        var $13=$fp; //@line 2310 "socketmodule.c"
        var $14=($13)==0; //@line 2310 "socketmodule.c"
        if ($14) { __label__ = 4; break; } else { __label__ = 7; break; } //@line 2310 "socketmodule.c"
      case 4: // $bb3
        var $_pr=$fd;
        var $15=($_pr) >= 0; //@line 2313 "socketmodule.c"
        if ($15) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2313 "socketmodule.c"
      case 5: // $bb4
        var $16=$fd; //@line 2314 "socketmodule.c"
        var $17=_close($16); //@line 2314 "socketmodule.c"
        __label__ = 6; break; //@line 2314 "socketmodule.c"
      case 6: // $bb5
        var $18=$s_addr; //@line 2315 "socketmodule.c"
        var $19=$18+24; //@line 2315 "socketmodule.c"
        var $20=HEAP[$19]; //@line 2315 "socketmodule.c"
        var $21=FUNCTION_TABLE[$20](); //@line 2315 "socketmodule.c"
        $0=$21; //@line 2315 "socketmodule.c"
        __label__ = 10; break; //@line 2315 "socketmodule.c"
      case 7: // $bb6
        var $22=HEAP[$mode]; //@line 2317 "socketmodule.c"
        var $23=$fp; //@line 2317 "socketmodule.c"
        var $24=_PyFile_FromFile($23, __str43, $22, (FUNCTION_TABLE_OFFSET + 4)); //@line 2317 "socketmodule.c"
        $f=$24; //@line 2317 "socketmodule.c"
        var $25=$f; //@line 2318 "socketmodule.c"
        var $26=($25)!=0; //@line 2318 "socketmodule.c"
        if ($26) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2318 "socketmodule.c"
      case 8: // $bb7
        var $27=HEAP[$bufsize]; //@line 2319 "socketmodule.c"
        var $28=$f; //@line 2319 "socketmodule.c"
        _PyFile_SetBufSize($28, $27); //@line 2319 "socketmodule.c"
        __label__ = 9; break; //@line 2319 "socketmodule.c"
      case 9: // $bb8
        var $29=$f; //@line 2320 "socketmodule.c"
        $0=$29; //@line 2320 "socketmodule.c"
        __label__ = 10; break; //@line 2320 "socketmodule.c"
      case 10: // $bb9
        var $30=$0; //@line 2295 "socketmodule.c"
        $retval=$30; //@line 2295 "socketmodule.c"
        var $retval10=$retval; //@line 2295 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 2295 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recv_guts($s, $cbuf, $len, $flags) {
    ;
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $cbuf_addr;
        var $len_addr;
        var $flags_addr;
        var $retval;
        var $0;
        var $outlen;
        var $timeout;
        $s_addr=$s;
        $cbuf_addr=$cbuf;
        $len_addr=$len;
        $flags_addr=$flags;
        $outlen=-1; //@line 2342 "socketmodule.c"
        var $1=$s_addr; //@line 2356 "socketmodule.c"
        var $2=_internal_select($1, 0); //@line 2356 "socketmodule.c"
        $timeout=$2; //@line 2356 "socketmodule.c"
        var $3=$timeout; //@line 2357 "socketmodule.c"
        var $4=($3)==0; //@line 2357 "socketmodule.c"
        if ($4) { __lastLabel__ = -1; __label__ = 1; break; } else { __lastLabel__ = -1; __label__ = 2; break; } //@line 2357 "socketmodule.c"
      case 1: // $bb
        var $5=$len_addr; //@line 2358 "socketmodule.c"
        var $6=$s_addr; //@line 2358 "socketmodule.c"
        var $7=$6+8; //@line 2358 "socketmodule.c"
        var $8=HEAP[$7]; //@line 2358 "socketmodule.c"
        var $9=$cbuf_addr; //@line 2358 "socketmodule.c"
        var $10=$flags_addr; //@line 2358 "socketmodule.c"
        var $11=_recv($8, $9, $5, $10); //@line 2358 "socketmodule.c"
        $outlen=$11; //@line 2358 "socketmodule.c"
        var $_pr=$timeout;
        __lastLabel__ = 1; __label__ = 2; break; //@line 2358 "socketmodule.c"
      case 2: // $bb1
        var $12=__lastLabel__ == 1 ? $_pr : ($3);
        var $13=($12)==1; //@line 2361 "socketmodule.c"
        if ($13) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2361 "socketmodule.c"
      case 3: // $bb2
        var $14=HEAP[_socket_timeout]; //@line 2362 "socketmodule.c"
        _PyErr_SetString($14, __str35); //@line 2362 "socketmodule.c"
        $0=-1; //@line 2363 "socketmodule.c"
        __label__ = 7; break; //@line 2363 "socketmodule.c"
      case 4: // $bb3
        var $15=$outlen; //@line 2365 "socketmodule.c"
        var $16=($15) < 0; //@line 2365 "socketmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2365 "socketmodule.c"
      case 5: // $bb4
        var $17=$s_addr; //@line 2368 "socketmodule.c"
        var $18=$17+24; //@line 2368 "socketmodule.c"
        var $19=HEAP[$18]; //@line 2368 "socketmodule.c"
        var $20=FUNCTION_TABLE[$19](); //@line 2368 "socketmodule.c"
        $0=-1; //@line 2369 "socketmodule.c"
        __label__ = 7; break; //@line 2369 "socketmodule.c"
      case 6: // $bb5
        var $21=$outlen; //@line 2411 "socketmodule.c"
        $0=$21; //@line 2411 "socketmodule.c"
        __label__ = 7; break; //@line 2411 "socketmodule.c"
      case 7: // $bb6
        var $22=$0; //@line 2363 "socketmodule.c"
        $retval=$22; //@line 2363 "socketmodule.c"
        var $retval7=$retval; //@line 2363 "socketmodule.c"
        ;
        return $retval7; //@line 2363 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recv($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $recvlen=__stackBase__;
        var $flags=__stackBase__+4;
        var $outlen;
        var $buf=__stackBase__+8;
        $s_addr=$s;
        $args_addr=$args;
        HEAP[$flags]=0; //@line 2420 "socketmodule.c"
        var $1=$args_addr; //@line 2424 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str44, allocate([$recvlen,0,0,0,$flags,0,0,0], ["i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2424 "socketmodule.c"
        var $3=($2)==0; //@line 2424 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2424 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2425 "socketmodule.c"
        __label__ = 14; break; //@line 2425 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$recvlen]; //@line 2427 "socketmodule.c"
        var $5=($4) < 0; //@line 2427 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2427 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 2428 "socketmodule.c"
        _PyErr_SetString($6, __str45); //@line 2428 "socketmodule.c"
        $0=0; //@line 2430 "socketmodule.c"
        __label__ = 14; break; //@line 2430 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$recvlen]; //@line 2434 "socketmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 2434 "socketmodule.c"
        HEAP[$buf]=$8; //@line 2434 "socketmodule.c"
        var $9=HEAP[$buf]; //@line 2435 "socketmodule.c"
        var $10=($9)==0; //@line 2435 "socketmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2435 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 2436 "socketmodule.c"
        __label__ = 14; break; //@line 2436 "socketmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flags]; //@line 2439 "socketmodule.c"
        var $12=HEAP[$recvlen]; //@line 2439 "socketmodule.c"
        var $13=HEAP[$buf]; //@line 2439 "socketmodule.c"
        var $14=$13; //@line 2439 "socketmodule.c"
        var $15=$14+20; //@line 2439 "socketmodule.c"
        var $16=$15; //@line 2439 "socketmodule.c"
        var $17=$s_addr; //@line 2439 "socketmodule.c"
        var $18=_sock_recv_guts($17, $16, $12, $11); //@line 2439 "socketmodule.c"
        $outlen=$18; //@line 2439 "socketmodule.c"
        var $19=$outlen; //@line 2440 "socketmodule.c"
        var $20=($19) < 0; //@line 2440 "socketmodule.c"
        if ($20) { __label__ = 7; break; } else { __label__ = 10; break; } //@line 2440 "socketmodule.c"
      case 7: // $bb6
        var $21=HEAP[$buf]; //@line 2443 "socketmodule.c"
        var $22=$21; //@line 2443 "socketmodule.c"
        var $23=HEAP[$22]; //@line 2443 "socketmodule.c"
        var $24=($23) - 1; //@line 2443 "socketmodule.c"
        var $25=$21; //@line 2443 "socketmodule.c"
        HEAP[$25]=$24; //@line 2443 "socketmodule.c"
        var $26=$21; //@line 2443 "socketmodule.c"
        var $27=HEAP[$26]; //@line 2443 "socketmodule.c"
        var $28=($27)==0; //@line 2443 "socketmodule.c"
        if ($28) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2443 "socketmodule.c"
      case 8: // $bb7
        var $29=HEAP[$buf]; //@line 2443 "socketmodule.c"
        var $30=$29+4; //@line 2443 "socketmodule.c"
        var $31=HEAP[$30]; //@line 2443 "socketmodule.c"
        var $32=$31+24; //@line 2443 "socketmodule.c"
        var $33=HEAP[$32]; //@line 2443 "socketmodule.c"
        var $34=HEAP[$buf]; //@line 2443 "socketmodule.c"
        FUNCTION_TABLE[$33]($34); //@line 2443 "socketmodule.c"
        __label__ = 9; break; //@line 2443 "socketmodule.c"
      case 9: // $bb8
        $0=0; //@line 2444 "socketmodule.c"
        __label__ = 14; break; //@line 2444 "socketmodule.c"
      case 10: // $bb9
        var $35=HEAP[$recvlen]; //@line 2446 "socketmodule.c"
        var $36=$outlen; //@line 2446 "socketmodule.c"
        var $37=($36)!=($35); //@line 2446 "socketmodule.c"
        if ($37) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2446 "socketmodule.c"
      case 11: // $bb10
        var $38=$outlen; //@line 2449 "socketmodule.c"
        var $39=__PyString_Resize($buf, $38); //@line 2449 "socketmodule.c"
        var $40=($39) < 0; //@line 2449 "socketmodule.c"
        if ($40) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2449 "socketmodule.c"
      case 12: // $bb11
        $0=0; //@line 2451 "socketmodule.c"
        __label__ = 14; break; //@line 2451 "socketmodule.c"
      case 13: // $bb12
        var $41=HEAP[$buf]; //@line 2454 "socketmodule.c"
        $0=$41; //@line 2454 "socketmodule.c"
        __label__ = 14; break; //@line 2454 "socketmodule.c"
      case 14: // $bb13
        var $42=$0; //@line 2425 "socketmodule.c"
        $retval=$42; //@line 2425 "socketmodule.c"
        var $retval14=$retval; //@line 2425 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 2425 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recv_into($s, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 60; _memset(__stackBase__, 0, 60);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $recvlen=__stackBase__;
        var $flags=__stackBase__+4;
        var $readlen;
        var $buf=__stackBase__+8;
        var $buflen;
        $s_addr=$s;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$recvlen]=0; //@line 2473 "socketmodule.c"
        HEAP[$flags]=0; //@line 2473 "socketmodule.c"
        var $1=$args_addr; //@line 2479 "socketmodule.c"
        var $2=$kwds_addr; //@line 2479 "socketmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str46, _kwlist_10873, allocate([$buf,0,0,0,$recvlen,0,0,0,$flags,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2479 "socketmodule.c"
        var $4=($3)==0; //@line 2479 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2479 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2481 "socketmodule.c"
        __label__ = 14; break; //@line 2481 "socketmodule.c"
      case 2: // $bb1
        var $5=$buf+8; //@line 2482 "socketmodule.c"
        var $6=HEAP[$5]; //@line 2482 "socketmodule.c"
        $buflen=$6; //@line 2482 "socketmodule.c"
        var $7=$buf; //@line 2483 "socketmodule.c"
        var $8=HEAP[$7]; //@line 2483 "socketmodule.c"
        var $9=($8)==0; //@line 2483 "socketmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2483 "socketmodule.c"
      case 3: // $bb2
        var $10=$buflen; //@line 2483 "socketmodule.c"
        var $11=($10) <= 0; //@line 2483 "socketmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2483 "socketmodule.c"
      case 4: // $bb3
        ___assert_fail(__str50, __str51, 2483, ___PRETTY_FUNCTION___10879); //@line 2483 "socketmodule.c"
        throw "Reached an unreachable!" //@line 2483 "socketmodule.c"
      case 5: // $bb4
        var $12=HEAP[$recvlen]; //@line 2485 "socketmodule.c"
        var $13=($12) < 0; //@line 2485 "socketmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2485 "socketmodule.c"
      case 6: // $bb5
        var $14=HEAP[_PyExc_ValueError]; //@line 2486 "socketmodule.c"
        _PyErr_SetString($14, __str52); //@line 2486 "socketmodule.c"
        __label__ = 13; break; //@line 2486 "socketmodule.c"
      case 7: // $bb6
        var $15=HEAP[$recvlen]; //@line 2490 "socketmodule.c"
        var $16=($15)==0; //@line 2490 "socketmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2490 "socketmodule.c"
      case 8: // $bb7
        var $17=$buflen; //@line 2492 "socketmodule.c"
        HEAP[$recvlen]=$17; //@line 2492 "socketmodule.c"
        __label__ = 9; break; //@line 2492 "socketmodule.c"
      case 9: // $bb8
        var $18=HEAP[$recvlen]; //@line 2496 "socketmodule.c"
        var $19=$buflen; //@line 2496 "socketmodule.c"
        var $20=($19) < ($18); //@line 2496 "socketmodule.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2496 "socketmodule.c"
      case 10: // $bb9
        var $21=HEAP[_PyExc_ValueError]; //@line 2497 "socketmodule.c"
        _PyErr_SetString($21, __str53); //@line 2497 "socketmodule.c"
        __label__ = 13; break; //@line 2497 "socketmodule.c"
      case 11: // $bb10
        var $22=HEAP[$flags]; //@line 2503 "socketmodule.c"
        var $23=HEAP[$recvlen]; //@line 2503 "socketmodule.c"
        var $24=$buf; //@line 2503 "socketmodule.c"
        var $25=HEAP[$24]; //@line 2503 "socketmodule.c"
        var $26=$s_addr; //@line 2503 "socketmodule.c"
        var $27=_sock_recv_guts($26, $25, $23, $22); //@line 2503 "socketmodule.c"
        $readlen=$27; //@line 2503 "socketmodule.c"
        var $28=$readlen; //@line 2504 "socketmodule.c"
        var $29=($28) < 0; //@line 2504 "socketmodule.c"
        if ($29) { __label__ = 13; break; } else { __label__ = 12; break; } //@line 2504 "socketmodule.c"
      case 12: // $bb11
        _PyBuffer_Release($buf); //@line 2509 "socketmodule.c"
        var $30=$readlen; //@line 2512 "socketmodule.c"
        var $31=_PyInt_FromSsize_t($30); //@line 2512 "socketmodule.c"
        $0=$31; //@line 2512 "socketmodule.c"
        __label__ = 14; break; //@line 2512 "socketmodule.c"
      case 13: // $error
        _PyBuffer_Release($buf); //@line 2515 "socketmodule.c"
        $0=0; //@line 2516 "socketmodule.c"
        __label__ = 14; break; //@line 2516 "socketmodule.c"
      case 14: // $bb12
        var $32=$0; //@line 2481 "socketmodule.c"
        $retval=$32; //@line 2481 "socketmodule.c"
        var $retval13=$retval; //@line 2481 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval13; //@line 2481 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recvfrom_guts($s, $cbuf, $len, $flags, $addr) {
    var __stackBase__  = STACKTOP; STACKTOP += 136; _memset(__stackBase__, 0, 136);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $cbuf_addr;
        var $len_addr;
        var $flags_addr;
        var $addr_addr;
        var $retval;
        var $0=__stackBase__;
        var $1;
        var $addrbuf=__stackBase__+4;
        var $timeout;
        var $n;
        var $addrlen=__stackBase__+132;
        $s_addr=$s;
        $cbuf_addr=$cbuf;
        $len_addr=$len;
        $flags_addr=$flags;
        $addr_addr=$addr;
        $n=-1; //@line 2546 "socketmodule.c"
        var $2=$addr_addr; //@line 2549 "socketmodule.c"
        HEAP[$2]=0; //@line 2549 "socketmodule.c"
        var $3=$s_addr; //@line 2551 "socketmodule.c"
        var $4=_getsockaddrlen($3, $addrlen); //@line 2551 "socketmodule.c"
        var $5=($4)==0; //@line 2551 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2551 "socketmodule.c"
      case 1: // $bb
        $1=-1; //@line 2552 "socketmodule.c"
        __label__ = 11; break; //@line 2552 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[$addrlen]; //@line 2560 "socketmodule.c"
        var $addrbuf2=$addrbuf; //@line 2560 "socketmodule.c"
        _llvm_memset_p0i8_i32($addrbuf2, 0, $6, 1, 0); //@line 2560 "socketmodule.c"
        var $7=$s_addr; //@line 2561 "socketmodule.c"
        var $8=_internal_select($7, 0); //@line 2561 "socketmodule.c"
        $timeout=$8; //@line 2561 "socketmodule.c"
        var $9=$timeout; //@line 2562 "socketmodule.c"
        var $10=($9)==0; //@line 2562 "socketmodule.c"
        if ($10) { __lastLabel__ = 2; __label__ = 3; break; } else { __lastLabel__ = 2; __label__ = 4; break; } //@line 2562 "socketmodule.c"
      case 3: // $bb3
        var $11=$0; //@line 2568 "socketmodule.c"
        var $addrbuf4=$addrbuf; //@line 2568 "socketmodule.c"
        HEAP[$11]=$addrbuf4; //@line 2568 "socketmodule.c"
        var $12=$len_addr; //@line 2568 "socketmodule.c"
        var $13=$s_addr; //@line 2568 "socketmodule.c"
        var $14=$13+8; //@line 2568 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2568 "socketmodule.c"
        var $16=$cbuf_addr; //@line 2568 "socketmodule.c"
        var $17=$flags_addr; //@line 2568 "socketmodule.c"
        var $elt=$0; //@line 2568 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2568 "socketmodule.c"
        var $18=_recvfrom($15, $16, $12, $17, $val, $addrlen); //@line 2568 "socketmodule.c"
        $n=$18; //@line 2568 "socketmodule.c"
        var $_pr=$timeout;
        __lastLabel__ = 3; __label__ = 4; break; //@line 2568 "socketmodule.c"
      case 4: // $bb5
        var $19=__lastLabel__ == 3 ? $_pr : ($9);
        var $20=($19)==1; //@line 2578 "socketmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2578 "socketmodule.c"
      case 5: // $bb6
        var $21=HEAP[_socket_timeout]; //@line 2579 "socketmodule.c"
        _PyErr_SetString($21, __str35); //@line 2579 "socketmodule.c"
        $1=-1; //@line 2580 "socketmodule.c"
        __label__ = 11; break; //@line 2580 "socketmodule.c"
      case 6: // $bb7
        var $22=$n; //@line 2582 "socketmodule.c"
        var $23=($22) < 0; //@line 2582 "socketmodule.c"
        var $24=$s_addr; //@line 2583 "socketmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2582 "socketmodule.c"
      case 7: // $bb8
        var $25=$24+24; //@line 2583 "socketmodule.c"
        var $26=HEAP[$25]; //@line 2583 "socketmodule.c"
        var $27=FUNCTION_TABLE[$26](); //@line 2583 "socketmodule.c"
        $1=-1; //@line 2584 "socketmodule.c"
        __label__ = 11; break; //@line 2584 "socketmodule.c"
      case 8: // $bb9
        var $28=$24+20; //@line 2587 "socketmodule.c"
        var $29=HEAP[$28]; //@line 2587 "socketmodule.c"
        var $30=HEAP[$addrlen]; //@line 2587 "socketmodule.c"
        var $addrbuf10=$addrbuf; //@line 2587 "socketmodule.c"
        var $31=$s_addr; //@line 2587 "socketmodule.c"
        var $32=$31+8; //@line 2587 "socketmodule.c"
        var $33=HEAP[$32]; //@line 2587 "socketmodule.c"
        var $34=_makesockaddr($33, $addrbuf10, $30, $29); //@line 2587 "socketmodule.c"
        var $35=$addr_addr; //@line 2587 "socketmodule.c"
        HEAP[$35]=$34; //@line 2587 "socketmodule.c"
        var $36=$addr_addr; //@line 2587 "socketmodule.c"
        var $37=HEAP[$36]; //@line 2587 "socketmodule.c"
        var $38=($37)==0; //@line 2587 "socketmodule.c"
        if ($38) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2587 "socketmodule.c"
      case 9: // $bb12
        $1=-1; //@line 2589 "socketmodule.c"
        __label__ = 11; break; //@line 2589 "socketmodule.c"
      case 10: // $bb13
        var $39=$n; //@line 2591 "socketmodule.c"
        $1=$39; //@line 2591 "socketmodule.c"
        __label__ = 11; break; //@line 2591 "socketmodule.c"
      case 11: // $bb14
        var $40=$1; //@line 2552 "socketmodule.c"
        $retval=$40; //@line 2552 "socketmodule.c"
        var $retval15=$retval; //@line 2552 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 2552 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recvfrom($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $addr=__stackBase__+4;
        var $ret;
        var $recvlen=__stackBase__+8;
        var $flags=__stackBase__+12;
        var $outlen;
        $s_addr=$s;
        $args_addr=$args;
        HEAP[$buf]=0; //@line 2599 "socketmodule.c"
        HEAP[$addr]=0; //@line 2600 "socketmodule.c"
        $ret=0; //@line 2601 "socketmodule.c"
        HEAP[$flags]=0; //@line 2602 "socketmodule.c"
        var $1=$args_addr; //@line 2605 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str54, allocate([$recvlen,0,0,0,$flags,0,0,0], ["i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2605 "socketmodule.c"
        var $3=($2)==0; //@line 2605 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2605 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2606 "socketmodule.c"
        __label__ = 17; break; //@line 2606 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$recvlen]; //@line 2608 "socketmodule.c"
        var $5=($4) < 0; //@line 2608 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2608 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_ValueError]; //@line 2609 "socketmodule.c"
        _PyErr_SetString($6, __str55); //@line 2609 "socketmodule.c"
        $0=0; //@line 2611 "socketmodule.c"
        __label__ = 17; break; //@line 2611 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$recvlen]; //@line 2614 "socketmodule.c"
        var $8=_PyString_FromStringAndSize(0, $7); //@line 2614 "socketmodule.c"
        HEAP[$buf]=$8; //@line 2614 "socketmodule.c"
        var $9=HEAP[$buf]; //@line 2615 "socketmodule.c"
        var $10=($9)==0; //@line 2615 "socketmodule.c"
        if ($10) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2615 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 2616 "socketmodule.c"
        __label__ = 17; break; //@line 2616 "socketmodule.c"
      case 6: // $bb5
        var $11=HEAP[$flags]; //@line 2618 "socketmodule.c"
        var $12=HEAP[$recvlen]; //@line 2618 "socketmodule.c"
        var $13=HEAP[$buf]; //@line 2618 "socketmodule.c"
        var $14=$13; //@line 2618 "socketmodule.c"
        var $15=$14+20; //@line 2618 "socketmodule.c"
        var $16=$15; //@line 2618 "socketmodule.c"
        var $17=$s_addr; //@line 2618 "socketmodule.c"
        var $18=_sock_recvfrom_guts($17, $16, $12, $11, $addr); //@line 2618 "socketmodule.c"
        $outlen=$18; //@line 2618 "socketmodule.c"
        var $19=$outlen; //@line 2620 "socketmodule.c"
        var $20=($19) < 0; //@line 2620 "socketmodule.c"
        if ($20) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 2620 "socketmodule.c"
      case 7: // $bb6
        var $21=HEAP[$recvlen]; //@line 2624 "socketmodule.c"
        var $22=$outlen; //@line 2624 "socketmodule.c"
        var $23=($22)!=($21); //@line 2624 "socketmodule.c"
        if ($23) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2624 "socketmodule.c"
      case 8: // $bb7
        var $24=$outlen; //@line 2627 "socketmodule.c"
        var $25=__PyString_Resize($buf, $24); //@line 2627 "socketmodule.c"
        var $26=($25) < 0; //@line 2627 "socketmodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 2627 "socketmodule.c"
      case 9: // $bb8
        var $27=HEAP[$addr]; //@line 2632 "socketmodule.c"
        var $28=HEAP[$buf]; //@line 2632 "socketmodule.c"
        var $29=_PyTuple_Pack(2, allocate([$28,0,0,0,$27,0,0,0], ["%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 2632 "socketmodule.c"
        $ret=$29; //@line 2632 "socketmodule.c"
        __label__ = 10; break; //@line 2634 "socketmodule.c"
      case 10: // $finally
        var $30=HEAP[$buf]; //@line 2635 "socketmodule.c"
        var $31=($30)!=0; //@line 2635 "socketmodule.c"
        if ($31) { __label__ = 11; break; } else { __label__ = 13; break; } //@line 2635 "socketmodule.c"
      case 11: // $bb9
        var $32=HEAP[$buf]; //@line 2635 "socketmodule.c"
        var $33=$32; //@line 2635 "socketmodule.c"
        var $34=HEAP[$33]; //@line 2635 "socketmodule.c"
        var $35=($34) - 1; //@line 2635 "socketmodule.c"
        var $36=$32; //@line 2635 "socketmodule.c"
        HEAP[$36]=$35; //@line 2635 "socketmodule.c"
        var $37=$32; //@line 2635 "socketmodule.c"
        var $38=HEAP[$37]; //@line 2635 "socketmodule.c"
        var $39=($38)==0; //@line 2635 "socketmodule.c"
        if ($39) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 2635 "socketmodule.c"
      case 12: // $bb10
        var $40=HEAP[$buf]; //@line 2635 "socketmodule.c"
        var $41=$40+4; //@line 2635 "socketmodule.c"
        var $42=HEAP[$41]; //@line 2635 "socketmodule.c"
        var $43=$42+24; //@line 2635 "socketmodule.c"
        var $44=HEAP[$43]; //@line 2635 "socketmodule.c"
        var $45=HEAP[$buf]; //@line 2635 "socketmodule.c"
        FUNCTION_TABLE[$44]($45); //@line 2635 "socketmodule.c"
        __label__ = 13; break; //@line 2635 "socketmodule.c"
      case 13: // $bb11
        var $46=HEAP[$addr]; //@line 2636 "socketmodule.c"
        var $47=($46)!=0; //@line 2636 "socketmodule.c"
        if ($47) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 2636 "socketmodule.c"
      case 14: // $bb12
        var $48=HEAP[$addr]; //@line 2636 "socketmodule.c"
        var $49=$48; //@line 2636 "socketmodule.c"
        var $50=HEAP[$49]; //@line 2636 "socketmodule.c"
        var $51=($50) - 1; //@line 2636 "socketmodule.c"
        var $52=$48; //@line 2636 "socketmodule.c"
        HEAP[$52]=$51; //@line 2636 "socketmodule.c"
        var $53=$48; //@line 2636 "socketmodule.c"
        var $54=HEAP[$53]; //@line 2636 "socketmodule.c"
        var $55=($54)==0; //@line 2636 "socketmodule.c"
        if ($55) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2636 "socketmodule.c"
      case 15: // $bb13
        var $56=HEAP[$addr]; //@line 2636 "socketmodule.c"
        var $57=$56+4; //@line 2636 "socketmodule.c"
        var $58=HEAP[$57]; //@line 2636 "socketmodule.c"
        var $59=$58+24; //@line 2636 "socketmodule.c"
        var $60=HEAP[$59]; //@line 2636 "socketmodule.c"
        var $61=HEAP[$addr]; //@line 2636 "socketmodule.c"
        FUNCTION_TABLE[$60]($61); //@line 2636 "socketmodule.c"
        __label__ = 16; break; //@line 2636 "socketmodule.c"
      case 16: // $bb14
        var $62=$ret; //@line 2637 "socketmodule.c"
        $0=$62; //@line 2637 "socketmodule.c"
        __label__ = 17; break; //@line 2637 "socketmodule.c"
      case 17: // $bb15
        var $63=$0; //@line 2606 "socketmodule.c"
        $retval=$63; //@line 2606 "socketmodule.c"
        var $retval16=$retval; //@line 2606 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2606 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_recvfrom_into($s, $args, $kwds) {
    var __stackBase__  = STACKTOP; STACKTOP += 64; _memset(__stackBase__, 0, 64);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $kwds_addr;
        var $retval;
        var $0;
        var $recvlen=__stackBase__;
        var $flags=__stackBase__+4;
        var $readlen;
        var $buf=__stackBase__+8;
        var $buflen;
        var $addr=__stackBase__+60;
        $s_addr=$s;
        $args_addr=$args;
        $kwds_addr=$kwds;
        HEAP[$recvlen]=0; //@line 2653 "socketmodule.c"
        HEAP[$flags]=0; //@line 2653 "socketmodule.c"
        HEAP[$addr]=0; //@line 2658 "socketmodule.c"
        var $1=$args_addr; //@line 2660 "socketmodule.c"
        var $2=$kwds_addr; //@line 2660 "socketmodule.c"
        var $3=_PyArg_ParseTupleAndKeywords($1, $2, __str56, _kwlist_11020, allocate([$buf,0,0,0,$recvlen,0,0,0,$flags,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2660 "socketmodule.c"
        var $4=($3)==0; //@line 2660 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2660 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2663 "socketmodule.c"
        __label__ = 15; break; //@line 2663 "socketmodule.c"
      case 2: // $bb1
        var $5=$buf+8; //@line 2664 "socketmodule.c"
        var $6=HEAP[$5]; //@line 2664 "socketmodule.c"
        $buflen=$6; //@line 2664 "socketmodule.c"
        var $7=$buf; //@line 2665 "socketmodule.c"
        var $8=HEAP[$7]; //@line 2665 "socketmodule.c"
        var $9=($8)==0; //@line 2665 "socketmodule.c"
        if ($9) { __label__ = 4; break; } else { __label__ = 3; break; } //@line 2665 "socketmodule.c"
      case 3: // $bb2
        var $10=$buflen; //@line 2665 "socketmodule.c"
        var $11=($10) <= 0; //@line 2665 "socketmodule.c"
        if ($11) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2665 "socketmodule.c"
      case 4: // $bb3
        ___assert_fail(__str50, __str51, 2665, ___PRETTY_FUNCTION___11027); //@line 2665 "socketmodule.c"
        throw "Reached an unreachable!" //@line 2665 "socketmodule.c"
      case 5: // $bb4
        var $12=HEAP[$recvlen]; //@line 2667 "socketmodule.c"
        var $13=($12) < 0; //@line 2667 "socketmodule.c"
        if ($13) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2667 "socketmodule.c"
      case 6: // $bb5
        var $14=HEAP[_PyExc_ValueError]; //@line 2668 "socketmodule.c"
        _PyErr_SetString($14, __str57); //@line 2668 "socketmodule.c"
        __label__ = 11; break; //@line 2668 "socketmodule.c"
      case 7: // $bb6
        var $15=HEAP[$recvlen]; //@line 2672 "socketmodule.c"
        var $16=($15)==0; //@line 2672 "socketmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2672 "socketmodule.c"
      case 8: // $bb7
        var $17=$buflen; //@line 2674 "socketmodule.c"
        HEAP[$recvlen]=$17; //@line 2674 "socketmodule.c"
        __label__ = 9; break; //@line 2674 "socketmodule.c"
      case 9: // $bb8
        var $18=HEAP[$flags]; //@line 2677 "socketmodule.c"
        var $19=HEAP[$recvlen]; //@line 2677 "socketmodule.c"
        var $20=$buf; //@line 2677 "socketmodule.c"
        var $21=HEAP[$20]; //@line 2677 "socketmodule.c"
        var $22=$s_addr; //@line 2677 "socketmodule.c"
        var $23=_sock_recvfrom_guts($22, $21, $19, $18, $addr); //@line 2677 "socketmodule.c"
        $readlen=$23; //@line 2677 "socketmodule.c"
        var $24=($23) < 0; //@line 2678 "socketmodule.c"
        if ($24) { __label__ = 11; break; } else { __label__ = 10; break; } //@line 2678 "socketmodule.c"
      case 10: // $bb9
        _PyBuffer_Release($buf); //@line 2683 "socketmodule.c"
        var $25=HEAP[$addr]; //@line 2686 "socketmodule.c"
        var $26=$readlen; //@line 2686 "socketmodule.c"
        var $27=_Py_BuildValue(__str58, allocate([$26,0,0,0,$25,0,0,0], ["i32",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 2686 "socketmodule.c"
        $0=$27; //@line 2686 "socketmodule.c"
        __label__ = 15; break; //@line 2686 "socketmodule.c"
      case 11: // $error
        var $28=HEAP[$addr]; //@line 2689 "socketmodule.c"
        var $29=($28)!=0; //@line 2689 "socketmodule.c"
        if ($29) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2689 "socketmodule.c"
      case 12: // $bb10
        var $30=HEAP[$addr]; //@line 2689 "socketmodule.c"
        var $31=$30; //@line 2689 "socketmodule.c"
        var $32=HEAP[$31]; //@line 2689 "socketmodule.c"
        var $33=($32) - 1; //@line 2689 "socketmodule.c"
        var $34=$30; //@line 2689 "socketmodule.c"
        HEAP[$34]=$33; //@line 2689 "socketmodule.c"
        var $35=$30; //@line 2689 "socketmodule.c"
        var $36=HEAP[$35]; //@line 2689 "socketmodule.c"
        var $37=($36)==0; //@line 2689 "socketmodule.c"
        if ($37) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2689 "socketmodule.c"
      case 13: // $bb11
        var $38=HEAP[$addr]; //@line 2689 "socketmodule.c"
        var $39=$38+4; //@line 2689 "socketmodule.c"
        var $40=HEAP[$39]; //@line 2689 "socketmodule.c"
        var $41=$40+24; //@line 2689 "socketmodule.c"
        var $42=HEAP[$41]; //@line 2689 "socketmodule.c"
        var $43=HEAP[$addr]; //@line 2689 "socketmodule.c"
        FUNCTION_TABLE[$42]($43); //@line 2689 "socketmodule.c"
        __label__ = 14; break; //@line 2689 "socketmodule.c"
      case 14: // $bb12
        _PyBuffer_Release($buf); //@line 2690 "socketmodule.c"
        $0=0; //@line 2691 "socketmodule.c"
        __label__ = 15; break; //@line 2691 "socketmodule.c"
      case 15: // $bb13
        var $44=$0; //@line 2663 "socketmodule.c"
        $retval=$44; //@line 2663 "socketmodule.c"
        var $retval14=$retval; //@line 2663 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval14; //@line 2663 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_send($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $buf;
        var $len;
        var $n;
        var $flags=__stackBase__;
        var $timeout;
        var $pbuf=__stackBase__+4;
        $s_addr=$s;
        $args_addr=$args;
        $n=-1; //@line 2706 "socketmodule.c"
        HEAP[$flags]=0; //@line 2706 "socketmodule.c"
        var $1=$args_addr; //@line 2709 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str59, allocate([$pbuf,0,0,0,$flags,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2709 "socketmodule.c"
        var $3=($2)==0; //@line 2709 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2709 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2710 "socketmodule.c"
        __label__ = 9; break; //@line 2710 "socketmodule.c"
      case 2: // $bb1
        var $4=$pbuf; //@line 2716 "socketmodule.c"
        var $5=HEAP[$4]; //@line 2716 "socketmodule.c"
        $buf=$5; //@line 2716 "socketmodule.c"
        var $6=$pbuf+8; //@line 2717 "socketmodule.c"
        var $7=HEAP[$6]; //@line 2717 "socketmodule.c"
        $len=$7; //@line 2717 "socketmodule.c"
        var $8=$s_addr; //@line 2720 "socketmodule.c"
        var $9=_internal_select($8, 1); //@line 2720 "socketmodule.c"
        $timeout=$9; //@line 2720 "socketmodule.c"
        var $10=$timeout; //@line 2721 "socketmodule.c"
        var $11=($10)==0; //@line 2721 "socketmodule.c"
        if ($11) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 2721 "socketmodule.c"
      case 3: // $bb2
        var $12=HEAP[$flags]; //@line 2725 "socketmodule.c"
        var $13=$len; //@line 2725 "socketmodule.c"
        var $14=$s_addr; //@line 2725 "socketmodule.c"
        var $15=$14+8; //@line 2725 "socketmodule.c"
        var $16=HEAP[$15]; //@line 2725 "socketmodule.c"
        var $17=$buf; //@line 2725 "socketmodule.c"
        var $18=_send($16, $17, $13, $12); //@line 2725 "socketmodule.c"
        $n=$18; //@line 2725 "socketmodule.c"
        __label__ = 4; break; //@line 2725 "socketmodule.c"
      case 4: // $bb3
        _PyBuffer_Release($pbuf); //@line 2729 "socketmodule.c"
        var $19=$timeout; //@line 2731 "socketmodule.c"
        var $20=($19)==1; //@line 2731 "socketmodule.c"
        if ($20) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2731 "socketmodule.c"
      case 5: // $bb4
        var $21=HEAP[_socket_timeout]; //@line 2732 "socketmodule.c"
        _PyErr_SetString($21, __str35); //@line 2732 "socketmodule.c"
        $0=0; //@line 2733 "socketmodule.c"
        __label__ = 9; break; //@line 2733 "socketmodule.c"
      case 6: // $bb5
        var $22=$n; //@line 2735 "socketmodule.c"
        var $23=($22) < 0; //@line 2735 "socketmodule.c"
        if ($23) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2735 "socketmodule.c"
      case 7: // $bb6
        var $24=$s_addr; //@line 2736 "socketmodule.c"
        var $25=$24+24; //@line 2736 "socketmodule.c"
        var $26=HEAP[$25]; //@line 2736 "socketmodule.c"
        var $27=FUNCTION_TABLE[$26](); //@line 2736 "socketmodule.c"
        $0=$27; //@line 2736 "socketmodule.c"
        __label__ = 9; break; //@line 2736 "socketmodule.c"
      case 8: // $bb7
        var $28=$n; //@line 2737 "socketmodule.c"
        var $29=_PyInt_FromLong($28); //@line 2737 "socketmodule.c"
        $0=$29; //@line 2737 "socketmodule.c"
        __label__ = 9; break; //@line 2737 "socketmodule.c"
      case 9: // $bb8
        var $30=$0; //@line 2710 "socketmodule.c"
        $retval=$30; //@line 2710 "socketmodule.c"
        var $retval9=$retval; //@line 2710 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 2710 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_sendall($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 56; _memset(__stackBase__, 0, 56);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $buf;
        var $len;
        var $n;
        var $flags=__stackBase__;
        var $timeout;
        var $saved_errno;
        var $pbuf=__stackBase__+4;
        $s_addr=$s;
        $args_addr=$args;
        $n=-1; //@line 2754 "socketmodule.c"
        HEAP[$flags]=0; //@line 2754 "socketmodule.c"
        var $1=$args_addr; //@line 2757 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str60, allocate([$pbuf,0,0,0,$flags,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 2757 "socketmodule.c"
        var $3=($2)==0; //@line 2757 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 2757 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 2758 "socketmodule.c"
        __label__ = 17; break; //@line 2758 "socketmodule.c"
      case 2: // $bb1
        var $4=$pbuf; //@line 2759 "socketmodule.c"
        var $5=HEAP[$4]; //@line 2759 "socketmodule.c"
        $buf=$5; //@line 2759 "socketmodule.c"
        var $6=$pbuf+8; //@line 2760 "socketmodule.c"
        var $7=HEAP[$6]; //@line 2760 "socketmodule.c"
        $len=$7; //@line 2760 "socketmodule.c"
        __label__ = 3; break; //@line 2760 "socketmodule.c"
      case 3: // $bb2
        var $8=$s_addr; //@line 2769 "socketmodule.c"
        var $9=_internal_select($8, 1); //@line 2769 "socketmodule.c"
        $timeout=$9; //@line 2769 "socketmodule.c"
        $n=-1; //@line 2770 "socketmodule.c"
        var $10=($9)==0; //@line 2771 "socketmodule.c"
        if ($10) { __lastLabel__ = 3; __label__ = 4; break; } else { __lastLabel__ = 3; __label__ = 5; break; } //@line 2771 "socketmodule.c"
      case 4: // $bb3
        var $11=HEAP[$flags]; //@line 2775 "socketmodule.c"
        var $12=$len; //@line 2775 "socketmodule.c"
        var $13=$s_addr; //@line 2775 "socketmodule.c"
        var $14=$13+8; //@line 2775 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2775 "socketmodule.c"
        var $16=$buf; //@line 2775 "socketmodule.c"
        var $17=_send($15, $16, $12, $11); //@line 2775 "socketmodule.c"
        $n=$17; //@line 2775 "socketmodule.c"
        var $_pr=$timeout;
        __lastLabel__ = 4; __label__ = 5; break; //@line 2775 "socketmodule.c"
      case 5: // $bb4
        var $18=__lastLabel__ == 4 ? $_pr : ($9);
        var $19=($18)==1; //@line 2779 "socketmodule.c"
        if ($19) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 2779 "socketmodule.c"
      case 6: // $bb5
        _PyBuffer_Release($pbuf); //@line 2780 "socketmodule.c"
        var $20=HEAP[_socket_timeout]; //@line 2781 "socketmodule.c"
        _PyErr_SetString($20, __str35); //@line 2781 "socketmodule.c"
        $0=0; //@line 2782 "socketmodule.c"
        __label__ = 17; break; //@line 2782 "socketmodule.c"
      case 7: // $bb6
        var $21=___errno_location(); //@line 2785 "socketmodule.c"
        var $22=HEAP[$21]; //@line 2785 "socketmodule.c"
        $saved_errno=$22; //@line 2785 "socketmodule.c"
        var $23=_PyErr_CheckSignals(); //@line 2789 "socketmodule.c"
        var $24=($23)!=0; //@line 2789 "socketmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 2789 "socketmodule.c"
      case 8: // $bb7
        _PyBuffer_Release($pbuf); //@line 2790 "socketmodule.c"
        $0=0; //@line 2791 "socketmodule.c"
        __label__ = 17; break; //@line 2791 "socketmodule.c"
      case 9: // $bb8
        var $25=$n; //@line 2793 "socketmodule.c"
        var $26=($25) < 0; //@line 2793 "socketmodule.c"
        if ($26) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 2793 "socketmodule.c"
      case 10: // $bb9
        var $27=$saved_errno; //@line 2795 "socketmodule.c"
        var $28=($27)==4; //@line 2795 "socketmodule.c"
        if ($28) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 2795 "socketmodule.c"
      case 11: // $bb10
        var $29=$buf; //@line 2800 "socketmodule.c"
        var $30=$n; //@line 2800 "socketmodule.c"
        var $31=$29+$30; //@line 2800 "socketmodule.c"
        $buf=$31; //@line 2800 "socketmodule.c"
        var $32=$len; //@line 2801 "socketmodule.c"
        var $33=$n; //@line 2801 "socketmodule.c"
        var $34=($32) - ($33); //@line 2801 "socketmodule.c"
        $len=$34; //@line 2801 "socketmodule.c"
        __lastLabel__ = 11; __label__ = 13; break; //@line 2801 "socketmodule.c"
      case 12: // $bb11thread_pre_split
        var $_pr1=$len;
        __lastLabel__ = 12; __label__ = 13; break;
      case 13: // $bb11
        var $35=__lastLabel__ == 12 ? $_pr1 : ($34);
        var $36=($35) > 0; //@line 2802 "socketmodule.c"
        if ($36) { __label__ = 3; break; } else { __label__ = 14; break; } //@line 2802 "socketmodule.c"
      case 14: // $bb12
        _PyBuffer_Release($pbuf); //@line 2803 "socketmodule.c"
        var $37=$n; //@line 2805 "socketmodule.c"
        var $38=($37) < 0; //@line 2805 "socketmodule.c"
        if ($38) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 2805 "socketmodule.c"
      case 15: // $bb13
        var $39=$s_addr; //@line 2806 "socketmodule.c"
        var $40=$39+24; //@line 2806 "socketmodule.c"
        var $41=HEAP[$40]; //@line 2806 "socketmodule.c"
        var $42=FUNCTION_TABLE[$41](); //@line 2806 "socketmodule.c"
        $0=$42; //@line 2806 "socketmodule.c"
        __label__ = 17; break; //@line 2806 "socketmodule.c"
      case 16: // $bb14
        var $43=HEAP[__Py_NoneStruct]; //@line 2808 "socketmodule.c"
        var $44=($43) + 1; //@line 2808 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$44; //@line 2808 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 2809 "socketmodule.c"
        __label__ = 17; break; //@line 2809 "socketmodule.c"
      case 17: // $bb15
        var $45=$0; //@line 2758 "socketmodule.c"
        $retval=$45; //@line 2758 "socketmodule.c"
        var $retval16=$retval; //@line 2758 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 2758 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_sendto($s, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 196; _memset(__stackBase__, 0, 196);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $args_addr;
        var $retval;
        var $0=__stackBase__;
        var $1;
        var $pbuf=__stackBase__+4;
        var $addro=__stackBase__+56;
        var $buf;
        var $len;
        var $addrbuf=__stackBase__+60;
        var $addrlen=__stackBase__+188;
        var $n;
        var $flags=__stackBase__+192;
        var $timeout;
        var $arglen;
        $s_addr=$s;
        $args_addr=$args;
        $n=-1; //@line 2831 "socketmodule.c"
        HEAP[$flags]=0; //@line 2834 "socketmodule.c"
        var $2=$args_addr; //@line 2835 "socketmodule.c"
        var $3=_PyTuple_Size($2); //@line 2835 "socketmodule.c"
        $arglen=$3; //@line 2835 "socketmodule.c"
        var $4=$arglen; //@line 2836 "socketmodule.c"
        if ($4 == 2) {
          __label__ = 1; break;
        }
        else if ($4 == 3) {
          __label__ = 2; break;
        }
        else {
        __label__ = 3; break;
        }
        
      case 1: // $bb
        var $5=$args_addr; //@line 2838 "socketmodule.c"
        var $6=_PyArg_ParseTuple($5, __str61, allocate([$pbuf,0,0,0,$addro,0,0,0], ["%struct.Py_buffer*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 2838 "socketmodule.c"
        __label__ = 4; break; //@line 2838 "socketmodule.c"
      case 2: // $bb1
        var $7=$args_addr; //@line 2841 "socketmodule.c"
        var $8=_PyArg_ParseTuple($7, __str62, allocate([$pbuf,0,0,0,$flags,0,0,0,$addro,0,0,0], ["%struct.Py_buffer*",0,0,0,"i32*",0,0,0,"%struct.PyObject**",0,0,0], ALLOC_STACK)); //@line 2841 "socketmodule.c"
        __label__ = 4; break; //@line 2841 "socketmodule.c"
      case 3: // $bb2
        var $9=HEAP[_PyExc_TypeError]; //@line 2844 "socketmodule.c"
        var $10=$arglen; //@line 2844 "socketmodule.c"
        var $11=_PyErr_Format($9, __str63, allocate([$10,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 2844 "socketmodule.c"
        __label__ = 4; break; //@line 2844 "socketmodule.c"
      case 4: // $bb3
        var $12=_PyErr_Occurred(); //@line 2847 "socketmodule.c"
        var $13=($12)!=0; //@line 2847 "socketmodule.c"
        if ($13) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 2847 "socketmodule.c"
      case 5: // $bb4
        $1=0; //@line 2848 "socketmodule.c"
        __label__ = 15; break; //@line 2848 "socketmodule.c"
      case 6: // $bb5
        var $14=$pbuf; //@line 2850 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2850 "socketmodule.c"
        $buf=$15; //@line 2850 "socketmodule.c"
        var $16=$pbuf+8; //@line 2851 "socketmodule.c"
        var $17=HEAP[$16]; //@line 2851 "socketmodule.c"
        $len=$17; //@line 2851 "socketmodule.c"
        var $addrbuf6=$addrbuf; //@line 2858 "socketmodule.c"
        var $18=HEAP[$addro]; //@line 2858 "socketmodule.c"
        var $19=$s_addr; //@line 2858 "socketmodule.c"
        var $20=_getsockaddrarg($19, $18, $addrbuf6, $addrlen); //@line 2858 "socketmodule.c"
        var $21=($20)==0; //@line 2858 "socketmodule.c"
        if ($21) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 2858 "socketmodule.c"
      case 7: // $bb8
        _PyBuffer_Release($pbuf); //@line 2859 "socketmodule.c"
        $1=0; //@line 2860 "socketmodule.c"
        __label__ = 15; break; //@line 2860 "socketmodule.c"
      case 8: // $bb9
        var $22=$s_addr; //@line 2864 "socketmodule.c"
        var $23=_internal_select($22, 1); //@line 2864 "socketmodule.c"
        $timeout=$23; //@line 2864 "socketmodule.c"
        var $24=$timeout; //@line 2865 "socketmodule.c"
        var $25=($24)==0; //@line 2865 "socketmodule.c"
        if ($25) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 2865 "socketmodule.c"
      case 9: // $bb10
        var $26=HEAP[$addrlen]; //@line 2866 "socketmodule.c"
        var $addrbuf11=$addrbuf; //@line 2866 "socketmodule.c"
        var $27=$0; //@line 2866 "socketmodule.c"
        HEAP[$27]=$addrbuf11; //@line 2866 "socketmodule.c"
        var $28=HEAP[$flags]; //@line 2866 "socketmodule.c"
        var $29=$len; //@line 2866 "socketmodule.c"
        var $30=$s_addr; //@line 2866 "socketmodule.c"
        var $31=$30+8; //@line 2866 "socketmodule.c"
        var $32=HEAP[$31]; //@line 2866 "socketmodule.c"
        var $33=$buf; //@line 2866 "socketmodule.c"
        var $elt=$0; //@line 2866 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 2866 "socketmodule.c"
        var $34=_sendto($32, $33, $29, $28, $val, $26); //@line 2866 "socketmodule.c"
        $n=$34; //@line 2866 "socketmodule.c"
        __label__ = 10; break; //@line 2866 "socketmodule.c"
      case 10: // $bb13
        _PyBuffer_Release($pbuf); //@line 2869 "socketmodule.c"
        var $35=$timeout; //@line 2870 "socketmodule.c"
        var $36=($35)==1; //@line 2870 "socketmodule.c"
        if ($36) { __label__ = 11; break; } else { __label__ = 12; break; } //@line 2870 "socketmodule.c"
      case 11: // $bb14
        var $37=HEAP[_socket_timeout]; //@line 2871 "socketmodule.c"
        _PyErr_SetString($37, __str35); //@line 2871 "socketmodule.c"
        $1=0; //@line 2872 "socketmodule.c"
        __label__ = 15; break; //@line 2872 "socketmodule.c"
      case 12: // $bb15
        var $38=$n; //@line 2874 "socketmodule.c"
        var $39=($38) < 0; //@line 2874 "socketmodule.c"
        if ($39) { __label__ = 13; break; } else { __label__ = 14; break; } //@line 2874 "socketmodule.c"
      case 13: // $bb16
        var $40=$s_addr; //@line 2875 "socketmodule.c"
        var $41=$40+24; //@line 2875 "socketmodule.c"
        var $42=HEAP[$41]; //@line 2875 "socketmodule.c"
        var $43=FUNCTION_TABLE[$42](); //@line 2875 "socketmodule.c"
        $1=$43; //@line 2875 "socketmodule.c"
        __label__ = 15; break; //@line 2875 "socketmodule.c"
      case 14: // $bb17
        var $44=$n; //@line 2876 "socketmodule.c"
        var $45=_PyInt_FromLong($44); //@line 2876 "socketmodule.c"
        $1=$45; //@line 2876 "socketmodule.c"
        __label__ = 15; break; //@line 2876 "socketmodule.c"
      case 15: // $bb18
        var $46=$1; //@line 2848 "socketmodule.c"
        $retval=$46; //@line 2848 "socketmodule.c"
        var $retval19=$retval; //@line 2848 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 2848 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_shutdown($s, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $how;
        var $res;
        $s_addr=$s;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 2894 "socketmodule.c"
        var $2=_PyInt_AsLong($1); //@line 2894 "socketmodule.c"
        $how=$2; //@line 2894 "socketmodule.c"
        var $3=$how; //@line 2895 "socketmodule.c"
        var $4=($3)==-1; //@line 2895 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 3; break; } //@line 2895 "socketmodule.c"
      case 1: // $bb
        var $5=_PyErr_Occurred(); //@line 2895 "socketmodule.c"
        var $6=($5)!=0; //@line 2895 "socketmodule.c"
        if ($6) { __label__ = 2; break; } else { __label__ = 3; break; } //@line 2895 "socketmodule.c"
      case 2: // $bb1
        $0=0; //@line 2896 "socketmodule.c"
        __label__ = 6; break; //@line 2896 "socketmodule.c"
      case 3: // $bb2
        var $7=$s_addr; //@line 2898 "socketmodule.c"
        var $8=$7+8; //@line 2898 "socketmodule.c"
        var $9=HEAP[$8]; //@line 2898 "socketmodule.c"
        var $10=$how; //@line 2898 "socketmodule.c"
        var $11=_shutdown($9, $10); //@line 2898 "socketmodule.c"
        $res=$11; //@line 2898 "socketmodule.c"
        var $12=($11) < 0; //@line 2900 "socketmodule.c"
        if ($12) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 2900 "socketmodule.c"
      case 4: // $bb3
        var $13=$s_addr; //@line 2901 "socketmodule.c"
        var $14=$13+24; //@line 2901 "socketmodule.c"
        var $15=HEAP[$14]; //@line 2901 "socketmodule.c"
        var $16=FUNCTION_TABLE[$15](); //@line 2901 "socketmodule.c"
        $0=$16; //@line 2901 "socketmodule.c"
        __label__ = 6; break; //@line 2901 "socketmodule.c"
      case 5: // $bb4
        var $17=HEAP[__Py_NoneStruct]; //@line 2902 "socketmodule.c"
        var $18=($17) + 1; //@line 2902 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$18; //@line 2902 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 2903 "socketmodule.c"
        __label__ = 6; break; //@line 2903 "socketmodule.c"
      case 6: // $bb5
        var $19=$0; //@line 2896 "socketmodule.c"
        $retval=$19; //@line 2896 "socketmodule.c"
        var $retval6=$retval; //@line 2896 "socketmodule.c"
        ;
        return $retval6; //@line 2896 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_dealloc($s) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $s_addr;
        $s_addr=$s;
        var $0=$s_addr; //@line 3040 "socketmodule.c"
        var $1=$0+8; //@line 3040 "socketmodule.c"
        var $2=HEAP[$1]; //@line 3040 "socketmodule.c"
        var $3=($2)!=-1; //@line 3040 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3040 "socketmodule.c"
      case 1: // $bb
        var $4=$s_addr; //@line 3041 "socketmodule.c"
        var $5=$4+8; //@line 3041 "socketmodule.c"
        var $6=HEAP[$5]; //@line 3041 "socketmodule.c"
        var $7=_close($6); //@line 3041 "socketmodule.c"
        __label__ = 2; break; //@line 3041 "socketmodule.c"
      case 2: // $bb1
        var $8=$s_addr; //@line 3042 "socketmodule.c"
        var $9=$8; //@line 3042 "socketmodule.c"
        var $10=$9+4; //@line 3042 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3042 "socketmodule.c"
        var $12=$11+160; //@line 3042 "socketmodule.c"
        var $13=HEAP[$12]; //@line 3042 "socketmodule.c"
        var $14=$s_addr; //@line 3042 "socketmodule.c"
        var $15=$14; //@line 3042 "socketmodule.c"
        FUNCTION_TABLE[$13]($15); //@line 3042 "socketmodule.c"
        ;
        return; //@line 3043 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_repr($s) {
    var __stackBase__  = STACKTOP; STACKTOP += 512; _memset(__stackBase__, 0, 512);
    var __label__;
  
    var $s_addr;
    var $retval;
    var $0;
    var $buf=__stackBase__;
    $s_addr=$s;
    var $1=$s_addr; //@line 3061 "socketmodule.c"
    var $2=$1+20; //@line 3061 "socketmodule.c"
    var $3=HEAP[$2]; //@line 3061 "socketmodule.c"
    var $4=$s_addr; //@line 3061 "socketmodule.c"
    var $5=$4+16; //@line 3061 "socketmodule.c"
    var $6=HEAP[$5]; //@line 3061 "socketmodule.c"
    var $7=$s_addr; //@line 3061 "socketmodule.c"
    var $8=$7+12; //@line 3061 "socketmodule.c"
    var $9=HEAP[$8]; //@line 3061 "socketmodule.c"
    var $10=$s_addr; //@line 3061 "socketmodule.c"
    var $11=$10+8; //@line 3061 "socketmodule.c"
    var $12=HEAP[$11]; //@line 3061 "socketmodule.c"
    var $buf1=$buf; //@line 3061 "socketmodule.c"
    var $13=_PyOS_snprintf($buf1, 512, __str96, allocate([$12,0,0,0,$9,0,0,0,$6,0,0,0,$3,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0], ALLOC_STACK)); //@line 3061 "socketmodule.c"
    var $buf2=$buf; //@line 3067 "socketmodule.c"
    var $14=_PyString_FromString($buf2); //@line 3067 "socketmodule.c"
    $0=$14; //@line 3067 "socketmodule.c"
    var $15=$0; //@line 3067 "socketmodule.c"
    $retval=$15; //@line 3067 "socketmodule.c"
    var $retval3=$retval; //@line 3067 "socketmodule.c"
    STACKTOP = __stackBase__;
    return $retval3; //@line 3067 "socketmodule.c"
  }
  

  function _sock_new($type, $args, $kwds) {
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
        var $new;
        $type_addr=$type;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$type_addr; //@line 3078 "socketmodule.c"
        var $2=$1+152; //@line 3078 "socketmodule.c"
        var $3=HEAP[$2]; //@line 3078 "socketmodule.c"
        var $4=$type_addr; //@line 3078 "socketmodule.c"
        var $5=FUNCTION_TABLE[$3]($4, 0); //@line 3078 "socketmodule.c"
        $new=$5; //@line 3078 "socketmodule.c"
        var $6=$new; //@line 3079 "socketmodule.c"
        var $7=($6)!=0; //@line 3079 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3079 "socketmodule.c"
      case 1: // $bb
        var $8=$new; //@line 3080 "socketmodule.c"
        var $9=$8; //@line 3080 "socketmodule.c"
        var $10=$9+8; //@line 3080 "socketmodule.c"
        HEAP[$10]=-1; //@line 3080 "socketmodule.c"
        var $11=$new; //@line 3081 "socketmodule.c"
        var $12=$11; //@line 3081 "socketmodule.c"
        var $13=$12+28; //@line 3081 "socketmodule.c"
        HEAP[$13]=-1; //@line 3081 "socketmodule.c"
        var $14=$new; //@line 3082 "socketmodule.c"
        var $15=$14; //@line 3082 "socketmodule.c"
        var $16=$15+24; //@line 3082 "socketmodule.c"
        HEAP[$16]=(FUNCTION_TABLE_OFFSET + 2); //@line 3082 "socketmodule.c"
        __label__ = 2; break; //@line 3082 "socketmodule.c"
      case 2: // $bb1
        var $17=$new; //@line 3084 "socketmodule.c"
        $0=$17; //@line 3084 "socketmodule.c"
        var $18=$0; //@line 3084 "socketmodule.c"
        $retval=$18; //@line 3084 "socketmodule.c"
        var $retval2=$retval; //@line 3084 "socketmodule.c"
        ;
        return $retval2; //@line 3084 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _sock_initobj($self, $args, $kwds) {
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
        var $s;
        var $fd;
        var $family=__stackBase__;
        var $type=__stackBase__+4;
        var $proto=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        $kwds_addr=$kwds;
        var $1=$self_addr; //@line 3094 "socketmodule.c"
        var $2=$1; //@line 3094 "socketmodule.c"
        $s=$2; //@line 3094 "socketmodule.c"
        HEAP[$family]=2; //@line 3096 "socketmodule.c"
        HEAP[$type]=1; //@line 3096 "socketmodule.c"
        HEAP[$proto]=0; //@line 3096 "socketmodule.c"
        var $3=$args_addr; //@line 3099 "socketmodule.c"
        var $4=$kwds_addr; //@line 3099 "socketmodule.c"
        var $5=_PyArg_ParseTupleAndKeywords($3, $4, __str97, _keywords_11267, allocate([$family,0,0,0,$type,0,0,0,$proto,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 3099 "socketmodule.c"
        var $6=($5)==0; //@line 3099 "socketmodule.c"
        if ($6) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3099 "socketmodule.c"
      case 1: // $bb
        $0=-1; //@line 3102 "socketmodule.c"
        __label__ = 5; break; //@line 3102 "socketmodule.c"
      case 2: // $bb1
        var $7=HEAP[$proto]; //@line 3105 "socketmodule.c"
        var $8=HEAP[$type]; //@line 3105 "socketmodule.c"
        var $9=HEAP[$family]; //@line 3105 "socketmodule.c"
        var $10=_socket($9, $8, $7); //@line 3105 "socketmodule.c"
        $fd=$10; //@line 3105 "socketmodule.c"
        var $11=$fd; //@line 3111 "socketmodule.c"
        var $12=($11) < 0; //@line 3111 "socketmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3111 "socketmodule.c"
      case 3: // $bb2
        var $13=_set_error(); //@line 3114 "socketmodule.c"
        $0=-1; //@line 3115 "socketmodule.c"
        __label__ = 5; break; //@line 3115 "socketmodule.c"
      case 4: // $bb3
        var $14=HEAP[$proto]; //@line 3117 "socketmodule.c"
        var $15=HEAP[$type]; //@line 3117 "socketmodule.c"
        var $16=HEAP[$family]; //@line 3117 "socketmodule.c"
        var $17=$s; //@line 3117 "socketmodule.c"
        var $18=$fd; //@line 3117 "socketmodule.c"
        _init_sockobject($17, $18, $16, $15, $14); //@line 3117 "socketmodule.c"
        $0=0; //@line 3119 "socketmodule.c"
        __label__ = 5; break; //@line 3119 "socketmodule.c"
      case 5: // $bb4
        var $19=$0; //@line 3102 "socketmodule.c"
        $retval=$19; //@line 3102 "socketmodule.c"
        var $retval5=$retval; //@line 3102 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3102 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostname($self, $unused) {
    var __stackBase__  = STACKTOP; STACKTOP += 1024; _memset(__stackBase__, 0, 1024);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $unused_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $res;
        $self_addr=$self;
        $unused_addr=$unused;
        var $buf1=$buf; //@line 3178 "socketmodule.c"
        var $1=_gethostname($buf1, 1023); //@line 3178 "socketmodule.c"
        $res=$1; //@line 3178 "socketmodule.c"
        var $2=$res; //@line 3180 "socketmodule.c"
        var $3=($2) < 0; //@line 3180 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3180 "socketmodule.c"
      case 1: // $bb
        var $4=_set_error(); //@line 3181 "socketmodule.c"
        $0=$4; //@line 3181 "socketmodule.c"
        __label__ = 3; break; //@line 3181 "socketmodule.c"
      case 2: // $bb2
        var $5=$buf+1023; //@line 3182 "socketmodule.c"
        HEAP[$5]=0; //@line 3182 "socketmodule.c"
        var $buf3=$buf; //@line 3183 "socketmodule.c"
        var $6=_PyString_FromString($buf3); //@line 3183 "socketmodule.c"
        $0=$6; //@line 3183 "socketmodule.c"
        __label__ = 3; break; //@line 3183 "socketmodule.c"
      case 3: // $bb4
        var $7=$0; //@line 3181 "socketmodule.c"
        $retval=$7; //@line 3181 "socketmodule.c"
        var $retval5=$retval; //@line 3181 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3181 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostbyname($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 132; _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name=__stackBase__;
        var $addrbuf=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3201 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str99, allocate([$name,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 3201 "socketmodule.c"
        var $3=($2)==0; //@line 3201 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3201 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3202 "socketmodule.c"
        __label__ = 5; break; //@line 3202 "socketmodule.c"
      case 2: // $bb1
        var $addrbuf2=$addrbuf; //@line 3203 "socketmodule.c"
        var $4=HEAP[$name]; //@line 3203 "socketmodule.c"
        var $5=_setipaddr($4, $addrbuf2, 128, 2); //@line 3203 "socketmodule.c"
        var $6=($5) < 0; //@line 3203 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3203 "socketmodule.c"
      case 3: // $bb4
        $0=0; //@line 3204 "socketmodule.c"
        __label__ = 5; break; //@line 3204 "socketmodule.c"
      case 4: // $bb5
        var $addrbuf6=$addrbuf; //@line 3205 "socketmodule.c"
        var $7=_makeipaddr($addrbuf6, 16); //@line 3205 "socketmodule.c"
        $0=$7; //@line 3205 "socketmodule.c"
        __label__ = 5; break; //@line 3205 "socketmodule.c"
      case 5: // $bb8
        var $8=$0; //@line 3202 "socketmodule.c"
        $retval=$8; //@line 3202 "socketmodule.c"
        var $retval9=$retval; //@line 3202 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval9; //@line 3202 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _gethost_common($h, $addr, $af) {
    var __stackBase__  = STACKTOP; STACKTOP += 44; _memset(__stackBase__, 0, 44);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
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
        var $sin=__stackBase__;
        var $sin6=__stackBase__+16;
        $h_addr=$h;
        $addr_addr=$addr;
        $alen_addr=128;
        $af_addr=$af;
        $rtn_tuple=0; //@line 3220 "socketmodule.c"
        $name_list=0; //@line 3221 "socketmodule.c"
        $addr_list=0; //@line 3222 "socketmodule.c"
        var $1=$h_addr; //@line 3225 "socketmodule.c"
        var $2=($1)==0; //@line 3225 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3225 "socketmodule.c"
      case 1: // $bb
        var $3=___h_errno_location(); //@line 3228 "socketmodule.c"
        var $4=HEAP[$3]; //@line 3228 "socketmodule.c"
        _set_herror($4); //@line 3228 "socketmodule.c"
        $0=0; //@line 3232 "socketmodule.c"
        __label__ = 42; break; //@line 3232 "socketmodule.c"
      case 2: // $bb1
        var $5=$h_addr; //@line 3235 "socketmodule.c"
        var $6=$5+8; //@line 3235 "socketmodule.c"
        var $7=HEAP[$6]; //@line 3235 "socketmodule.c"
        var $8=$af_addr; //@line 3235 "socketmodule.c"
        var $9=($7)!=($8); //@line 3235 "socketmodule.c"
        if ($9) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3235 "socketmodule.c"
      case 3: // $bb2
        var $10=_strerror(97); //@line 3237 "socketmodule.c"
        var $11=HEAP[_socket_error]; //@line 3237 "socketmodule.c"
        _PyErr_SetString($11, $10); //@line 3237 "socketmodule.c"
        $0=0; //@line 3240 "socketmodule.c"
        __label__ = 42; break; //@line 3240 "socketmodule.c"
      case 4: // $bb3
        var $12=$af_addr; //@line 3243 "socketmodule.c"
        if ($12 == 2) {
          __label__ = 5; break;
        }
        else if ($12 == 10) {
          __label__ = 7; break;
        }
        else {
        __label__ = 9; break;
        }
        
      case 5: // $bb4
        var $13=$alen_addr; //@line 3246 "socketmodule.c"
        var $14=($13) <= 15; //@line 3246 "socketmodule.c"
        if ($14) { __label__ = 6; break; } else { __label__ = 9; break; } //@line 3246 "socketmodule.c"
      case 6: // $bb5
        $0=0; //@line 3247 "socketmodule.c"
        __label__ = 42; break; //@line 3247 "socketmodule.c"
      case 7: // $bb7
        var $15=$alen_addr; //@line 3252 "socketmodule.c"
        var $16=($15) <= 27; //@line 3252 "socketmodule.c"
        if ($16) { __label__ = 8; break; } else { __label__ = 9; break; } //@line 3252 "socketmodule.c"
      case 8: // $bb8
        $0=0; //@line 3253 "socketmodule.c"
        __label__ = 42; break; //@line 3253 "socketmodule.c"
      case 9: // $bb9
        var $17=_PyList_New(0); //@line 3259 "socketmodule.c"
        $name_list=$17; //@line 3259 "socketmodule.c"
        var $18=($17)==0; //@line 3259 "socketmodule.c"
        if ($18) { __label__ = 38; break; } else { __label__ = 10; break; } //@line 3259 "socketmodule.c"
      case 10: // $bb10
        var $19=_PyList_New(0); //@line 3262 "socketmodule.c"
        $addr_list=$19; //@line 3262 "socketmodule.c"
        var $20=$addr_list; //@line 3262 "socketmodule.c"
        var $21=($20)==0; //@line 3262 "socketmodule.c"
        if ($21) { __label__ = 35; break; } else { __label__ = 11; break; } //@line 3262 "socketmodule.c"
      case 11: // $bb11
        var $22=$h_addr; //@line 3266 "socketmodule.c"
        var $23=$22+4; //@line 3266 "socketmodule.c"
        var $24=HEAP[$23]; //@line 3266 "socketmodule.c"
        var $25=($24)!=0; //@line 3266 "socketmodule.c"
        if ($25) { __label__ = 12; break; } else { __label__ = 19; break; } //@line 3266 "socketmodule.c"
      case 12: // $bb12
        var $26=$h_addr; //@line 3267 "socketmodule.c"
        var $27=$26+4; //@line 3267 "socketmodule.c"
        var $28=HEAP[$27]; //@line 3267 "socketmodule.c"
        $pch=$28; //@line 3267 "socketmodule.c"
        __label__ = 18; break; //@line 3267 "socketmodule.c"
      case 13: // $bb13
        var $29=$pch; //@line 3269 "socketmodule.c"
        var $30=HEAP[$29]; //@line 3269 "socketmodule.c"
        var $31=_PyString_FromString($30); //@line 3269 "socketmodule.c"
        $tmp=$31; //@line 3269 "socketmodule.c"
        var $32=$tmp; //@line 3270 "socketmodule.c"
        var $33=($32)==0; //@line 3270 "socketmodule.c"
        if ($33) { __label__ = 35; break; } else { __label__ = 14; break; } //@line 3270 "socketmodule.c"
      case 14: // $bb14
        var $34=$name_list; //@line 3273 "socketmodule.c"
        var $35=$tmp; //@line 3273 "socketmodule.c"
        var $36=_PyList_Append($34, $35); //@line 3273 "socketmodule.c"
        $status=$36; //@line 3273 "socketmodule.c"
        var $37=$tmp; //@line 3274 "socketmodule.c"
        var $38=$37; //@line 3274 "socketmodule.c"
        var $39=HEAP[$38]; //@line 3274 "socketmodule.c"
        var $40=($39) - 1; //@line 3274 "socketmodule.c"
        var $41=$tmp; //@line 3274 "socketmodule.c"
        var $42=$41; //@line 3274 "socketmodule.c"
        HEAP[$42]=$40; //@line 3274 "socketmodule.c"
        var $43=$tmp; //@line 3274 "socketmodule.c"
        var $44=$43; //@line 3274 "socketmodule.c"
        var $45=HEAP[$44]; //@line 3274 "socketmodule.c"
        var $46=($45)==0; //@line 3274 "socketmodule.c"
        if ($46) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 3274 "socketmodule.c"
      case 15: // $bb15
        var $47=$tmp; //@line 3274 "socketmodule.c"
        var $48=$47+4; //@line 3274 "socketmodule.c"
        var $49=HEAP[$48]; //@line 3274 "socketmodule.c"
        var $50=$49+24; //@line 3274 "socketmodule.c"
        var $51=HEAP[$50]; //@line 3274 "socketmodule.c"
        var $52=$tmp; //@line 3274 "socketmodule.c"
        FUNCTION_TABLE[$51]($52); //@line 3274 "socketmodule.c"
        __label__ = 16; break; //@line 3274 "socketmodule.c"
      case 16: // $bb16
        var $53=$status; //@line 3276 "socketmodule.c"
        var $54=($53)!=0; //@line 3276 "socketmodule.c"
        if ($54) { __label__ = 35; break; } else { __label__ = 17; break; } //@line 3276 "socketmodule.c"
      case 17: // $bb17
        var $55=$pch; //@line 3267 "socketmodule.c"
        var $56=$55+4; //@line 3267 "socketmodule.c"
        $pch=$56; //@line 3267 "socketmodule.c"
        __label__ = 18; break; //@line 3267 "socketmodule.c"
      case 18: // $bb18
        var $57=$pch; //@line 3267 "socketmodule.c"
        var $58=HEAP[$57]; //@line 3267 "socketmodule.c"
        var $59=($58)!=0; //@line 3267 "socketmodule.c"
        if ($59) { __label__ = 13; break; } else { __label__ = 19; break; } //@line 3267 "socketmodule.c"
      case 19: // $bb19
        var $60=$h_addr; //@line 3281 "socketmodule.c"
        var $61=$60+16; //@line 3281 "socketmodule.c"
        var $62=HEAP[$61]; //@line 3281 "socketmodule.c"
        $pch=$62; //@line 3281 "socketmodule.c"
        var $sin23=$sin; //@line 3289 "socketmodule.c"
        var $63=$sin; //@line 3290 "socketmodule.c"
        var $64=$sin+4; //@line 3294 "socketmodule.c"
        var $65=$64; //@line 3294 "socketmodule.c"
        var $sin24=$sin; //@line 3295 "socketmodule.c"
        var $sin28=$sin; //@line 3298 "socketmodule.c"
        var $sin631=$sin6; //@line 3306 "socketmodule.c"
        var $66=$sin6; //@line 3307 "socketmodule.c"
        var $67=$sin6+8; //@line 3311 "socketmodule.c"
        var $68=$67; //@line 3311 "socketmodule.c"
        var $sin632=$sin6; //@line 3312 "socketmodule.c"
        var $sin636=$sin6; //@line 3316 "socketmodule.c"
        __label__ = 33; break; //@line 3281 "socketmodule.c"
      case 20: // $bb20
        var $69=$af_addr; //@line 3284 "socketmodule.c"
        if ($69 == 2) {
          __label__ = 21; break;
        }
        else if ($69 == 10) {
          __label__ = 24; break;
        }
        else {
        __label__ = 27; break;
        }
        
      case 21: // $bb22
        _llvm_memset_p0i8_i32($sin23, 0, 16, 1, 0); //@line 3289 "socketmodule.c"
        var $70=$af_addr; //@line 3290 "socketmodule.c"
        var $71=((($70)) & 65535); //@line 3290 "socketmodule.c"
        HEAP[$63]=$71; //@line 3290 "socketmodule.c"
        var $72=$pch; //@line 3294 "socketmodule.c"
        var $73=HEAP[$72]; //@line 3294 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($65, $73, 4, 1, 0); //@line 3294 "socketmodule.c"
        var $74=_makeipaddr($sin24, 16); //@line 3295 "socketmodule.c"
        $tmp=$74; //@line 3295 "socketmodule.c"
        var $75=$h_addr; //@line 3297 "socketmodule.c"
        var $76=$75+16; //@line 3297 "socketmodule.c"
        var $77=HEAP[$76]; //@line 3297 "socketmodule.c"
        var $78=$pch; //@line 3297 "socketmodule.c"
        var $79=($77)==($78); //@line 3297 "socketmodule.c"
        if ($79) { __label__ = 22; break; } else { __label__ = 28; break; } //@line 3297 "socketmodule.c"
      case 22: // $bb26
        var $80=$alen_addr; //@line 3297 "socketmodule.c"
        var $81=($80) > 15; //@line 3297 "socketmodule.c"
        if ($81) { __label__ = 23; break; } else { __label__ = 28; break; } //@line 3297 "socketmodule.c"
      case 23: // $bb27
        var $82=$addr_addr; //@line 3298 "socketmodule.c"
        var $83=$82; //@line 3298 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($83, $sin28, 16, 1, 0); //@line 3298 "socketmodule.c"
        __label__ = 28; break; //@line 3298 "socketmodule.c"
      case 24: // $bb30
        _llvm_memset_p0i8_i32($sin631, 0, 28, 1, 0); //@line 3306 "socketmodule.c"
        var $84=$af_addr; //@line 3307 "socketmodule.c"
        var $85=((($84)) & 65535); //@line 3307 "socketmodule.c"
        HEAP[$66]=$85; //@line 3307 "socketmodule.c"
        var $86=$pch; //@line 3311 "socketmodule.c"
        var $87=HEAP[$86]; //@line 3311 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($68, $87, 16, 1, 0); //@line 3311 "socketmodule.c"
        var $88=_makeipaddr($sin632, 28); //@line 3312 "socketmodule.c"
        $tmp=$88; //@line 3312 "socketmodule.c"
        var $89=$h_addr; //@line 3315 "socketmodule.c"
        var $90=$89+16; //@line 3315 "socketmodule.c"
        var $91=HEAP[$90]; //@line 3315 "socketmodule.c"
        var $92=$pch; //@line 3315 "socketmodule.c"
        var $93=($91)==($92); //@line 3315 "socketmodule.c"
        if ($93) { __label__ = 25; break; } else { __label__ = 28; break; } //@line 3315 "socketmodule.c"
      case 25: // $bb34
        var $94=$alen_addr; //@line 3315 "socketmodule.c"
        var $95=($94) > 27; //@line 3315 "socketmodule.c"
        if ($95) { __label__ = 26; break; } else { __label__ = 28; break; } //@line 3315 "socketmodule.c"
      case 26: // $bb35
        var $96=$addr_addr; //@line 3316 "socketmodule.c"
        var $97=$96; //@line 3316 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($97, $sin636, 28, 1, 0); //@line 3316 "socketmodule.c"
        __label__ = 28; break; //@line 3316 "socketmodule.c"
      case 27: // $bb38
        var $98=HEAP[_socket_error]; //@line 3322 "socketmodule.c"
        _PyErr_SetString($98, __str3); //@line 3322 "socketmodule.c"
        $0=0; //@line 3324 "socketmodule.c"
        __label__ = 42; break; //@line 3324 "socketmodule.c"
      case 28: // $bb39
        var $99=$tmp; //@line 3327 "socketmodule.c"
        var $100=($99)==0; //@line 3327 "socketmodule.c"
        if ($100) { __label__ = 35; break; } else { __label__ = 29; break; } //@line 3327 "socketmodule.c"
      case 29: // $bb40
        var $101=$addr_list; //@line 3330 "socketmodule.c"
        var $102=$tmp; //@line 3330 "socketmodule.c"
        var $103=_PyList_Append($101, $102); //@line 3330 "socketmodule.c"
        $status21=$103; //@line 3330 "socketmodule.c"
        var $104=$tmp; //@line 3331 "socketmodule.c"
        var $105=$104; //@line 3331 "socketmodule.c"
        var $106=HEAP[$105]; //@line 3331 "socketmodule.c"
        var $107=($106) - 1; //@line 3331 "socketmodule.c"
        var $108=$tmp; //@line 3331 "socketmodule.c"
        var $109=$108; //@line 3331 "socketmodule.c"
        HEAP[$109]=$107; //@line 3331 "socketmodule.c"
        var $110=$tmp; //@line 3331 "socketmodule.c"
        var $111=$110; //@line 3331 "socketmodule.c"
        var $112=HEAP[$111]; //@line 3331 "socketmodule.c"
        var $113=($112)==0; //@line 3331 "socketmodule.c"
        if ($113) { __label__ = 30; break; } else { __label__ = 31; break; } //@line 3331 "socketmodule.c"
      case 30: // $bb41
        var $114=$tmp; //@line 3331 "socketmodule.c"
        var $115=$114+4; //@line 3331 "socketmodule.c"
        var $116=HEAP[$115]; //@line 3331 "socketmodule.c"
        var $117=$116+24; //@line 3331 "socketmodule.c"
        var $118=HEAP[$117]; //@line 3331 "socketmodule.c"
        var $119=$tmp; //@line 3331 "socketmodule.c"
        FUNCTION_TABLE[$118]($119); //@line 3331 "socketmodule.c"
        __label__ = 31; break; //@line 3331 "socketmodule.c"
      case 31: // $bb42
        var $120=$status21; //@line 3333 "socketmodule.c"
        var $121=($120)!=0; //@line 3333 "socketmodule.c"
        if ($121) { __label__ = 35; break; } else { __label__ = 32; break; } //@line 3333 "socketmodule.c"
      case 32: // $bb43
        var $122=$pch; //@line 3281 "socketmodule.c"
        var $123=$122+4; //@line 3281 "socketmodule.c"
        $pch=$123; //@line 3281 "socketmodule.c"
        __label__ = 33; break; //@line 3281 "socketmodule.c"
      case 33: // $bb44
        var $124=$pch; //@line 3281 "socketmodule.c"
        var $125=HEAP[$124]; //@line 3281 "socketmodule.c"
        var $126=($125)!=0; //@line 3281 "socketmodule.c"
        if ($126) { __label__ = 20; break; } else { __label__ = 34; break; } //@line 3281 "socketmodule.c"
      case 34: // $bb45
        var $127=$h_addr; //@line 3337 "socketmodule.c"
        var $128=$127; //@line 3337 "socketmodule.c"
        var $129=HEAP[$128]; //@line 3337 "socketmodule.c"
        var $130=$name_list; //@line 3337 "socketmodule.c"
        var $131=$addr_list; //@line 3337 "socketmodule.c"
        var $132=_Py_BuildValue(__str100, allocate([$129,0,0,0,$130,0,0,0,$131,0,0,0], ["i8*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 3337 "socketmodule.c"
        $rtn_tuple=$132; //@line 3337 "socketmodule.c"
        __label__ = 35; break; //@line 3339 "socketmodule.c"
      case 35: // $err
        var $_pr=$name_list;
        var $133=($_pr)!=0; //@line 3340 "socketmodule.c"
        if ($133) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 3340 "socketmodule.c"
      case 36: // $bb46
        var $134=$name_list; //@line 3340 "socketmodule.c"
        var $135=$134; //@line 3340 "socketmodule.c"
        var $136=HEAP[$135]; //@line 3340 "socketmodule.c"
        var $137=($136) - 1; //@line 3340 "socketmodule.c"
        var $138=$name_list; //@line 3340 "socketmodule.c"
        var $139=$138; //@line 3340 "socketmodule.c"
        HEAP[$139]=$137; //@line 3340 "socketmodule.c"
        var $140=$name_list; //@line 3340 "socketmodule.c"
        var $141=$140; //@line 3340 "socketmodule.c"
        var $142=HEAP[$141]; //@line 3340 "socketmodule.c"
        var $143=($142)==0; //@line 3340 "socketmodule.c"
        if ($143) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 3340 "socketmodule.c"
      case 37: // $bb47
        var $144=$name_list; //@line 3340 "socketmodule.c"
        var $145=$144+4; //@line 3340 "socketmodule.c"
        var $146=HEAP[$145]; //@line 3340 "socketmodule.c"
        var $147=$146+24; //@line 3340 "socketmodule.c"
        var $148=HEAP[$147]; //@line 3340 "socketmodule.c"
        var $149=$name_list; //@line 3340 "socketmodule.c"
        FUNCTION_TABLE[$148]($149); //@line 3340 "socketmodule.c"
        __label__ = 38; break; //@line 3340 "socketmodule.c"
      case 38: // $bb48
        var $150=$addr_list; //@line 3341 "socketmodule.c"
        var $151=($150)!=0; //@line 3341 "socketmodule.c"
        if ($151) { __label__ = 39; break; } else { __label__ = 41; break; } //@line 3341 "socketmodule.c"
      case 39: // $bb49
        var $152=$addr_list; //@line 3341 "socketmodule.c"
        var $153=$152; //@line 3341 "socketmodule.c"
        var $154=HEAP[$153]; //@line 3341 "socketmodule.c"
        var $155=($154) - 1; //@line 3341 "socketmodule.c"
        var $156=$addr_list; //@line 3341 "socketmodule.c"
        var $157=$156; //@line 3341 "socketmodule.c"
        HEAP[$157]=$155; //@line 3341 "socketmodule.c"
        var $158=$addr_list; //@line 3341 "socketmodule.c"
        var $159=$158; //@line 3341 "socketmodule.c"
        var $160=HEAP[$159]; //@line 3341 "socketmodule.c"
        var $161=($160)==0; //@line 3341 "socketmodule.c"
        if ($161) { __label__ = 40; break; } else { __label__ = 41; break; } //@line 3341 "socketmodule.c"
      case 40: // $bb50
        var $162=$addr_list; //@line 3341 "socketmodule.c"
        var $163=$162+4; //@line 3341 "socketmodule.c"
        var $164=HEAP[$163]; //@line 3341 "socketmodule.c"
        var $165=$164+24; //@line 3341 "socketmodule.c"
        var $166=HEAP[$165]; //@line 3341 "socketmodule.c"
        var $167=$addr_list; //@line 3341 "socketmodule.c"
        FUNCTION_TABLE[$166]($167); //@line 3341 "socketmodule.c"
        __label__ = 41; break; //@line 3341 "socketmodule.c"
      case 41: // $bb51
        var $168=$rtn_tuple; //@line 3342 "socketmodule.c"
        $0=$168; //@line 3342 "socketmodule.c"
        __label__ = 42; break; //@line 3342 "socketmodule.c"
      case 42: // $bb52
        var $169=$0; //@line 3232 "socketmodule.c"
        $retval=$169; //@line 3232 "socketmodule.c"
        var $retval53=$retval; //@line 3232 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval53; //@line 3232 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostbyname_ex($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 132; _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name=__stackBase__;
        var $h;
        var $addr=__stackBase__+4;
        var $sa;
        var $ret;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3375 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str101, allocate([$name,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 3375 "socketmodule.c"
        var $3=($2)==0; //@line 3375 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3375 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3376 "socketmodule.c"
        __label__ = 5; break; //@line 3376 "socketmodule.c"
      case 2: // $bb1
        var $addr2=$addr; //@line 3377 "socketmodule.c"
        var $4=HEAP[$name]; //@line 3377 "socketmodule.c"
        var $5=_setipaddr($4, $addr2, 128, 2); //@line 3377 "socketmodule.c"
        var $6=($5) < 0; //@line 3377 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3377 "socketmodule.c"
      case 3: // $bb4
        $0=0; //@line 3378 "socketmodule.c"
        __label__ = 5; break; //@line 3378 "socketmodule.c"
      case 4: // $bb5
        var $7=HEAP[$name]; //@line 3395 "socketmodule.c"
        var $8=_gethostbyname($7); //@line 3395 "socketmodule.c"
        $h=$8; //@line 3395 "socketmodule.c"
        var $addr6=$addr; //@line 3402 "socketmodule.c"
        $sa=$addr6; //@line 3402 "socketmodule.c"
        var $9=$sa; //@line 3403 "socketmodule.c"
        var $10=$9; //@line 3403 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3403 "socketmodule.c"
        var $12=($11); //@line 3403 "socketmodule.c"
        var $addr7=$addr; //@line 3403 "socketmodule.c"
        var $13=$h; //@line 3403 "socketmodule.c"
        var $14=_gethost_common($13, $addr7, $12); //@line 3403 "socketmodule.c"
        $ret=$14; //@line 3403 "socketmodule.c"
        var $15=$ret; //@line 3408 "socketmodule.c"
        $0=$15; //@line 3408 "socketmodule.c"
        __label__ = 5; break; //@line 3408 "socketmodule.c"
      case 5: // $bb9
        var $16=$0; //@line 3376 "socketmodule.c"
        $retval=$16; //@line 3376 "socketmodule.c"
        var $retval10=$retval; //@line 3376 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval10; //@line 3376 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_gethostbyaddr($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 132; _memset(__stackBase__, 0, 132);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $addr=__stackBase__;
        var $sa;
        var $ip_num=__stackBase__+128;
        var $h;
        var $ret;
        var $ap;
        var $al;
        var $af;
        $self_addr=$self;
        $args_addr=$args;
        var $addr1=$addr; //@line 3429 "socketmodule.c"
        $sa=$addr1; //@line 3429 "socketmodule.c"
        var $1=$args_addr; //@line 3454 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str102, allocate([$ip_num,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 3454 "socketmodule.c"
        var $3=($2)==0; //@line 3454 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3454 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3455 "socketmodule.c"
        __label__ = 9; break; //@line 3455 "socketmodule.c"
      case 2: // $bb2
        $af=0; //@line 3456 "socketmodule.c"
        var $4=HEAP[$ip_num]; //@line 3457 "socketmodule.c"
        var $5=$sa; //@line 3457 "socketmodule.c"
        var $6=$af; //@line 3457 "socketmodule.c"
        var $7=_setipaddr($4, $5, 128, $6); //@line 3457 "socketmodule.c"
        var $8=($7) < 0; //@line 3457 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3457 "socketmodule.c"
      case 3: // $bb3
        $0=0; //@line 3458 "socketmodule.c"
        __label__ = 9; break; //@line 3458 "socketmodule.c"
      case 4: // $bb4
        var $9=$sa; //@line 3459 "socketmodule.c"
        var $10=$9; //@line 3459 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3459 "socketmodule.c"
        var $12=($11); //@line 3459 "socketmodule.c"
        $af=$12; //@line 3459 "socketmodule.c"
        $ap=0; //@line 3460 "socketmodule.c"
        var $13=$af; //@line 3461 "socketmodule.c"
        if ($13 == 2) {
          __label__ = 5; break;
        }
        else if ($13 == 10) {
          __label__ = 6; break;
        }
        else {
        __label__ = 7; break;
        }
        
      case 5: // $bb5
        var $14=$sa; //@line 3463 "socketmodule.c"
        var $15=$14; //@line 3463 "socketmodule.c"
        var $16=$15+4; //@line 3463 "socketmodule.c"
        var $17=$16; //@line 3463 "socketmodule.c"
        $ap=$17; //@line 3463 "socketmodule.c"
        $al=4; //@line 3464 "socketmodule.c"
        __label__ = 8; break; //@line 3464 "socketmodule.c"
      case 6: // $bb6
        var $18=$sa; //@line 3468 "socketmodule.c"
        var $19=$18; //@line 3468 "socketmodule.c"
        var $20=$19+8; //@line 3468 "socketmodule.c"
        var $21=$20; //@line 3468 "socketmodule.c"
        $ap=$21; //@line 3468 "socketmodule.c"
        $al=16; //@line 3469 "socketmodule.c"
        __label__ = 8; break; //@line 3469 "socketmodule.c"
      case 7: // $bb7
        var $22=HEAP[_socket_error]; //@line 3473 "socketmodule.c"
        _PyErr_SetString($22, __str3); //@line 3473 "socketmodule.c"
        $0=0; //@line 3474 "socketmodule.c"
        __label__ = 9; break; //@line 3474 "socketmodule.c"
      case 8: // $bb8
        var $23=$al; //@line 3494 "socketmodule.c"
        var $24=$ap; //@line 3494 "socketmodule.c"
        var $25=$af; //@line 3494 "socketmodule.c"
        var $26=_gethostbyaddr($24, $23, $25); //@line 3494 "socketmodule.c"
        $h=$26; //@line 3494 "socketmodule.c"
        var $addr9=$addr; //@line 3497 "socketmodule.c"
        var $27=$h; //@line 3497 "socketmodule.c"
        var $28=$af; //@line 3497 "socketmodule.c"
        var $29=_gethost_common($27, $addr9, $28); //@line 3497 "socketmodule.c"
        $ret=$29; //@line 3497 "socketmodule.c"
        var $30=$ret; //@line 3501 "socketmodule.c"
        $0=$30; //@line 3501 "socketmodule.c"
        __label__ = 9; break; //@line 3501 "socketmodule.c"
      case 9: // $bb11
        var $31=$0; //@line 3455 "socketmodule.c"
        $retval=$31; //@line 3455 "socketmodule.c"
        var $retval12=$retval; //@line 3455 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval12; //@line 3455 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getservbyname($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name=__stackBase__;
        var $proto=__stackBase__+4;
        var $sp;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$proto]=0; //@line 3519 "socketmodule.c"
        var $1=$args_addr; //@line 3521 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str103, allocate([$name,0,0,0,$proto,0,0,0], ["i8**",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 3521 "socketmodule.c"
        var $3=($2)==0; //@line 3521 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3521 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3522 "socketmodule.c"
        __label__ = 5; break; //@line 3522 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$proto]; //@line 3524 "socketmodule.c"
        var $5=HEAP[$name]; //@line 3524 "socketmodule.c"
        var $6=_getservbyname($5, $4); //@line 3524 "socketmodule.c"
        $sp=$6; //@line 3524 "socketmodule.c"
        var $7=$sp; //@line 3526 "socketmodule.c"
        var $8=($7)==0; //@line 3526 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3526 "socketmodule.c"
      case 3: // $bb2
        var $9=HEAP[_socket_error]; //@line 3527 "socketmodule.c"
        _PyErr_SetString($9, __str104); //@line 3527 "socketmodule.c"
        $0=0; //@line 3528 "socketmodule.c"
        __label__ = 5; break; //@line 3528 "socketmodule.c"
      case 4: // $bb3
        var $10=$sp; //@line 3530 "socketmodule.c"
        var $11=$10+8; //@line 3530 "socketmodule.c"
        var $12=HEAP[$11]; //@line 3530 "socketmodule.c"
        var $13=((($12)) & 65535); //@line 3530 "socketmodule.c"
        var $14=($13); //@line 3530 "socketmodule.c"
        var $15=((($14)) & 65535); //@line 3530 "socketmodule.c"
        var $16=_ntohs($15); //@line 3530 "socketmodule.c"
        var $17=($16); //@line 3530 "socketmodule.c"
        var $18=_PyInt_FromLong($17); //@line 3530 "socketmodule.c"
        $0=$18; //@line 3530 "socketmodule.c"
        __label__ = 5; break; //@line 3530 "socketmodule.c"
      case 5: // $bb4
        var $19=$0; //@line 3522 "socketmodule.c"
        $retval=$19; //@line 3522 "socketmodule.c"
        var $retval5=$retval; //@line 3522 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3522 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getservbyport($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $port=__stackBase__;
        var $proto=__stackBase__+4;
        var $sp;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$proto]=0; //@line 3550 "socketmodule.c"
        var $1=$args_addr; //@line 3552 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str105, allocate([$port,0,0,0,$proto,0,0,0], ["i32*",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 3552 "socketmodule.c"
        var $3=($2)==0; //@line 3552 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3552 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3553 "socketmodule.c"
        __label__ = 7; break; //@line 3553 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$port]; //@line 3554 "socketmodule.c"
        var $5=($4) < 0; //@line 3554 "socketmodule.c"
        var $6=HEAP[$port]; //@line 3554 "socketmodule.c"
        var $7=($6) > 65535; //@line 3554 "socketmodule.c"
        var $or_cond=($5) | ($7);
        if ($or_cond) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3554 "socketmodule.c"
      case 3: // $bb3
        var $8=HEAP[_PyExc_OverflowError]; //@line 3555 "socketmodule.c"
        _PyErr_SetString($8, __str106); //@line 3555 "socketmodule.c"
        $0=0; //@line 3558 "socketmodule.c"
        __label__ = 7; break; //@line 3558 "socketmodule.c"
      case 4: // $bb4
        var $9=HEAP[$proto]; //@line 3561 "socketmodule.c"
        var $10=HEAP[$port]; //@line 3561 "socketmodule.c"
        var $11=((($10)) & 65535); //@line 3561 "socketmodule.c"
        var $12=($11); //@line 3561 "socketmodule.c"
        var $13=((($12)) & 65535); //@line 3561 "socketmodule.c"
        var $14=_htons($13); //@line 3561 "socketmodule.c"
        var $15=($14); //@line 3561 "socketmodule.c"
        var $16=_getservbyport($15, $9); //@line 3561 "socketmodule.c"
        $sp=$16; //@line 3561 "socketmodule.c"
        var $17=$sp; //@line 3563 "socketmodule.c"
        var $18=($17)==0; //@line 3563 "socketmodule.c"
        if ($18) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3563 "socketmodule.c"
      case 5: // $bb5
        var $19=HEAP[_socket_error]; //@line 3564 "socketmodule.c"
        _PyErr_SetString($19, __str107); //@line 3564 "socketmodule.c"
        $0=0; //@line 3565 "socketmodule.c"
        __label__ = 7; break; //@line 3565 "socketmodule.c"
      case 6: // $bb6
        var $20=$sp; //@line 3567 "socketmodule.c"
        var $21=$20; //@line 3567 "socketmodule.c"
        var $22=HEAP[$21]; //@line 3567 "socketmodule.c"
        var $23=_PyString_FromString($22); //@line 3567 "socketmodule.c"
        $0=$23; //@line 3567 "socketmodule.c"
        __label__ = 7; break; //@line 3567 "socketmodule.c"
      case 7: // $bb7
        var $24=$0; //@line 3553 "socketmodule.c"
        $retval=$24; //@line 3553 "socketmodule.c"
        var $retval8=$retval; //@line 3553 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval8; //@line 3553 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getprotobyname($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $name=__stackBase__;
        var $sp;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3592 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str108, allocate([$name,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 3592 "socketmodule.c"
        var $3=($2)==0; //@line 3592 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3592 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3593 "socketmodule.c"
        __label__ = 5; break; //@line 3593 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$name]; //@line 3595 "socketmodule.c"
        var $5=_getprotobyname($4); //@line 3595 "socketmodule.c"
        $sp=$5; //@line 3595 "socketmodule.c"
        var $6=$sp; //@line 3597 "socketmodule.c"
        var $7=($6)==0; //@line 3597 "socketmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3597 "socketmodule.c"
      case 3: // $bb2
        var $8=HEAP[_socket_error]; //@line 3598 "socketmodule.c"
        _PyErr_SetString($8, __str109); //@line 3598 "socketmodule.c"
        $0=0; //@line 3599 "socketmodule.c"
        __label__ = 5; break; //@line 3599 "socketmodule.c"
      case 4: // $bb3
        var $9=$sp; //@line 3601 "socketmodule.c"
        var $10=$9+8; //@line 3601 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3601 "socketmodule.c"
        var $12=_PyInt_FromLong($11); //@line 3601 "socketmodule.c"
        $0=$12; //@line 3601 "socketmodule.c"
        __label__ = 5; break; //@line 3601 "socketmodule.c"
      case 5: // $bb4
        var $13=$0; //@line 3593 "socketmodule.c"
        $retval=$13; //@line 3593 "socketmodule.c"
        var $retval5=$retval; //@line 3593 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3593 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_socketpair($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 20; _memset(__stackBase__, 0, 20);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s0;
        var $s1;
        var $sv=__stackBase__;
        var $family=__stackBase__+8;
        var $type=__stackBase__+12;
        var $proto=__stackBase__+16;
        var $res;
        $self_addr=$self;
        $args_addr=$args;
        $s0=0; //@line 3620 "socketmodule.c"
        $s1=0; //@line 3620 "socketmodule.c"
        HEAP[$type]=1; //@line 3622 "socketmodule.c"
        HEAP[$proto]=0; //@line 3622 "socketmodule.c"
        $res=0; //@line 3623 "socketmodule.c"
        HEAP[$family]=1; //@line 3626 "socketmodule.c"
        var $1=$args_addr; //@line 3630 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str110, allocate([$family,0,0,0,$type,0,0,0,$proto,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 3630 "socketmodule.c"
        var $3=($2)==0; //@line 3630 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3630 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3632 "socketmodule.c"
        __label__ = 20; break; //@line 3632 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$proto]; //@line 3634 "socketmodule.c"
        var $5=HEAP[$type]; //@line 3634 "socketmodule.c"
        var $6=HEAP[$family]; //@line 3634 "socketmodule.c"
        var $sv2=$sv; //@line 3634 "socketmodule.c"
        var $7=_socketpair($6, $5, $4, $sv2); //@line 3634 "socketmodule.c"
        var $8=($7) < 0; //@line 3634 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3634 "socketmodule.c"
      case 3: // $bb3
        var $9=_set_error(); //@line 3635 "socketmodule.c"
        $0=$9; //@line 3635 "socketmodule.c"
        __label__ = 20; break; //@line 3635 "socketmodule.c"
      case 4: // $bb4
        var $10=HEAP[$proto]; //@line 3636 "socketmodule.c"
        var $11=HEAP[$type]; //@line 3636 "socketmodule.c"
        var $12=HEAP[$family]; //@line 3636 "socketmodule.c"
        var $13=$sv; //@line 3636 "socketmodule.c"
        var $14=HEAP[$13]; //@line 3636 "socketmodule.c"
        var $15=_new_sockobject($14, $12, $11, $10); //@line 3636 "socketmodule.c"
        $s0=$15; //@line 3636 "socketmodule.c"
        var $16=$s0; //@line 3637 "socketmodule.c"
        var $17=($16)==0; //@line 3637 "socketmodule.c"
        if ($17) { __label__ = 7; break; } else { __label__ = 5; break; } //@line 3637 "socketmodule.c"
      case 5: // $bb5
        var $18=HEAP[$proto]; //@line 3639 "socketmodule.c"
        var $19=HEAP[$type]; //@line 3639 "socketmodule.c"
        var $20=HEAP[$family]; //@line 3639 "socketmodule.c"
        var $21=$sv+4; //@line 3639 "socketmodule.c"
        var $22=HEAP[$21]; //@line 3639 "socketmodule.c"
        var $23=_new_sockobject($22, $20, $19, $18); //@line 3639 "socketmodule.c"
        $s1=$23; //@line 3639 "socketmodule.c"
        var $24=$s1; //@line 3640 "socketmodule.c"
        var $25=($24)==0; //@line 3640 "socketmodule.c"
        if ($25) { __label__ = 7; break; } else { __label__ = 6; break; } //@line 3640 "socketmodule.c"
      case 6: // $bb6
        var $26=$s0; //@line 3642 "socketmodule.c"
        var $27=$s1; //@line 3642 "socketmodule.c"
        var $28=_PyTuple_Pack(2, allocate([$26,0,0,0,$27,0,0,0], ["%struct.PySocketSockObject*",0,0,0,"%struct.PySocketSockObject*",0,0,0], ALLOC_STACK)); //@line 3642 "socketmodule.c"
        $res=$28; //@line 3642 "socketmodule.c"
        __lastLabel__ = 6; __label__ = 8; break; //@line 3644 "socketmodule.c"
      case 7: // $finallythread_pre_split
        var $_pr=$res;
        __lastLabel__ = 7; __label__ = 8; break;
      case 8: // $finally
        var $29=__lastLabel__ == 7 ? $_pr : ($28);
        var $30=($29)==0; //@line 3645 "socketmodule.c"
        if ($30) { __label__ = 9; break; } else { __label__ = 13; break; } //@line 3645 "socketmodule.c"
      case 9: // $bb7
        var $31=$s0; //@line 3646 "socketmodule.c"
        var $32=($31)==0; //@line 3646 "socketmodule.c"
        if ($32) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 3646 "socketmodule.c"
      case 10: // $bb8
        var $33=$sv; //@line 3647 "socketmodule.c"
        var $34=HEAP[$33]; //@line 3647 "socketmodule.c"
        var $35=_close($34); //@line 3647 "socketmodule.c"
        __label__ = 11; break; //@line 3647 "socketmodule.c"
      case 11: // $bb9
        var $36=$s1; //@line 3648 "socketmodule.c"
        var $37=($36)==0; //@line 3648 "socketmodule.c"
        if ($37) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 3648 "socketmodule.c"
      case 12: // $bb10
        var $38=$sv+4; //@line 3649 "socketmodule.c"
        var $39=HEAP[$38]; //@line 3649 "socketmodule.c"
        var $40=_close($39); //@line 3649 "socketmodule.c"
        __label__ = 13; break; //@line 3649 "socketmodule.c"
      case 13: // $bb11
        var $41=$s0; //@line 3651 "socketmodule.c"
        var $42=($41)!=0; //@line 3651 "socketmodule.c"
        if ($42) { __label__ = 14; break; } else { __label__ = 16; break; } //@line 3651 "socketmodule.c"
      case 14: // $bb12
        var $43=$s0; //@line 3651 "socketmodule.c"
        var $44=$43; //@line 3651 "socketmodule.c"
        var $45=$44; //@line 3651 "socketmodule.c"
        var $46=HEAP[$45]; //@line 3651 "socketmodule.c"
        var $47=($46) - 1; //@line 3651 "socketmodule.c"
        var $48=$44; //@line 3651 "socketmodule.c"
        HEAP[$48]=$47; //@line 3651 "socketmodule.c"
        var $49=$44; //@line 3651 "socketmodule.c"
        var $50=HEAP[$49]; //@line 3651 "socketmodule.c"
        var $51=($50)==0; //@line 3651 "socketmodule.c"
        if ($51) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 3651 "socketmodule.c"
      case 15: // $bb13
        var $52=$s0; //@line 3651 "socketmodule.c"
        var $53=$52; //@line 3651 "socketmodule.c"
        var $54=$53+4; //@line 3651 "socketmodule.c"
        var $55=HEAP[$54]; //@line 3651 "socketmodule.c"
        var $56=$55+24; //@line 3651 "socketmodule.c"
        var $57=HEAP[$56]; //@line 3651 "socketmodule.c"
        var $58=$s0; //@line 3651 "socketmodule.c"
        var $59=$58; //@line 3651 "socketmodule.c"
        FUNCTION_TABLE[$57]($59); //@line 3651 "socketmodule.c"
        __label__ = 16; break; //@line 3651 "socketmodule.c"
      case 16: // $bb14
        var $60=$s1; //@line 3652 "socketmodule.c"
        var $61=($60)!=0; //@line 3652 "socketmodule.c"
        if ($61) { __label__ = 17; break; } else { __label__ = 19; break; } //@line 3652 "socketmodule.c"
      case 17: // $bb15
        var $62=$s1; //@line 3652 "socketmodule.c"
        var $63=$62; //@line 3652 "socketmodule.c"
        var $64=$63; //@line 3652 "socketmodule.c"
        var $65=HEAP[$64]; //@line 3652 "socketmodule.c"
        var $66=($65) - 1; //@line 3652 "socketmodule.c"
        var $67=$63; //@line 3652 "socketmodule.c"
        HEAP[$67]=$66; //@line 3652 "socketmodule.c"
        var $68=$63; //@line 3652 "socketmodule.c"
        var $69=HEAP[$68]; //@line 3652 "socketmodule.c"
        var $70=($69)==0; //@line 3652 "socketmodule.c"
        if ($70) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 3652 "socketmodule.c"
      case 18: // $bb16
        var $71=$s1; //@line 3652 "socketmodule.c"
        var $72=$71; //@line 3652 "socketmodule.c"
        var $73=$72+4; //@line 3652 "socketmodule.c"
        var $74=HEAP[$73]; //@line 3652 "socketmodule.c"
        var $75=$74+24; //@line 3652 "socketmodule.c"
        var $76=HEAP[$75]; //@line 3652 "socketmodule.c"
        var $77=$s1; //@line 3652 "socketmodule.c"
        var $78=$77; //@line 3652 "socketmodule.c"
        FUNCTION_TABLE[$76]($78); //@line 3652 "socketmodule.c"
        __label__ = 19; break; //@line 3652 "socketmodule.c"
      case 19: // $bb17
        var $79=$res; //@line 3653 "socketmodule.c"
        $0=$79; //@line 3653 "socketmodule.c"
        __label__ = 20; break; //@line 3653 "socketmodule.c"
      case 20: // $bb18
        var $80=$0; //@line 3632 "socketmodule.c"
        $retval=$80; //@line 3632 "socketmodule.c"
        var $retval19=$retval; //@line 3632 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval19; //@line 3632 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_fromfd($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 16; _memset(__stackBase__, 0, 16);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $s;
        var $fd=__stackBase__;
        var $family=__stackBase__+4;
        var $type=__stackBase__+8;
        var $proto=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$proto]=0; //@line 3678 "socketmodule.c"
        var $1=$args_addr; //@line 3679 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str111, allocate([$fd,0,0,0,$family,0,0,0,$type,0,0,0,$proto,0,0,0], ["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 3679 "socketmodule.c"
        var $3=($2)==0; //@line 3679 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3679 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3681 "socketmodule.c"
        __label__ = 5; break; //@line 3681 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$fd]; //@line 3683 "socketmodule.c"
        var $5=_dup($4); //@line 3683 "socketmodule.c"
        HEAP[$fd]=$5; //@line 3683 "socketmodule.c"
        var $6=HEAP[$fd]; //@line 3684 "socketmodule.c"
        var $7=($6) < 0; //@line 3684 "socketmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3684 "socketmodule.c"
      case 3: // $bb2
        var $8=_set_error(); //@line 3685 "socketmodule.c"
        $0=$8; //@line 3685 "socketmodule.c"
        __label__ = 5; break; //@line 3685 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[$proto]; //@line 3686 "socketmodule.c"
        var $10=HEAP[$type]; //@line 3686 "socketmodule.c"
        var $11=HEAP[$family]; //@line 3686 "socketmodule.c"
        var $12=HEAP[$fd]; //@line 3686 "socketmodule.c"
        var $13=_new_sockobject($12, $11, $10, $9); //@line 3686 "socketmodule.c"
        $s=$13; //@line 3686 "socketmodule.c"
        var $14=$s; //@line 3687 "socketmodule.c"
        var $15=$14; //@line 3687 "socketmodule.c"
        $0=$15; //@line 3687 "socketmodule.c"
        __label__ = 5; break; //@line 3687 "socketmodule.c"
      case 5: // $bb4
        var $16=$0; //@line 3681 "socketmodule.c"
        $retval=$16; //@line 3681 "socketmodule.c"
        var $retval5=$retval; //@line 3681 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3681 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_ntohs($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x1=__stackBase__;
        var $x2;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3705 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str112, allocate([$x1,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 3705 "socketmodule.c"
        var $3=($2)==0; //@line 3705 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3705 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3706 "socketmodule.c"
        __label__ = 5; break; //@line 3706 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$x1]; //@line 3708 "socketmodule.c"
        var $5=($4) < 0; //@line 3708 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3708 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_OverflowError]; //@line 3709 "socketmodule.c"
        _PyErr_SetString($6, __str113); //@line 3709 "socketmodule.c"
        $0=0; //@line 3711 "socketmodule.c"
        __label__ = 5; break; //@line 3711 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$x1]; //@line 3713 "socketmodule.c"
        var $8=((($7)) & 65535); //@line 3713 "socketmodule.c"
        var $9=($8); //@line 3713 "socketmodule.c"
        var $10=((($9)) & 65535); //@line 3713 "socketmodule.c"
        var $11=_ntohs($10); //@line 3713 "socketmodule.c"
        var $12=($11); //@line 3713 "socketmodule.c"
        $x2=$12; //@line 3713 "socketmodule.c"
        var $13=$x2; //@line 3714 "socketmodule.c"
        var $14=_PyInt_FromLong($13); //@line 3714 "socketmodule.c"
        $0=$14; //@line 3714 "socketmodule.c"
        __label__ = 5; break; //@line 3714 "socketmodule.c"
      case 5: // $bb4
        var $15=$0; //@line 3706 "socketmodule.c"
        $retval=$15; //@line 3706 "socketmodule.c"
        var $retval5=$retval; //@line 3706 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3706 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_ntohl($self, $arg) {
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
        var $x;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 3728 "socketmodule.c"
        var $2=$1+4; //@line 3728 "socketmodule.c"
        var $3=HEAP[$2]; //@line 3728 "socketmodule.c"
        var $4=$3+84; //@line 3728 "socketmodule.c"
        var $5=HEAP[$4]; //@line 3728 "socketmodule.c"
        var $6=($5) & 8388608; //@line 3728 "socketmodule.c"
        var $7=($6)!=0; //@line 3728 "socketmodule.c"
        var $8=$arg_addr; //@line 3729 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 3728 "socketmodule.c"
      case 1: // $bb
        var $9=$8; //@line 3729 "socketmodule.c"
        var $10=$9+8; //@line 3729 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3729 "socketmodule.c"
        $x=$11; //@line 3729 "socketmodule.c"
        var $12=$x; //@line 3730 "socketmodule.c"
        var $13=($12)==-1; //@line 3730 "socketmodule.c"
        if ($13) { __lastLabel__ = 1; __label__ = 2; break; } else { __lastLabel__ = 1; __label__ = 5; break; } //@line 3730 "socketmodule.c"
      case 2: // $bb1
        var $14=_PyErr_Occurred(); //@line 3730 "socketmodule.c"
        var $15=($14)!=0; //@line 3730 "socketmodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3730 "socketmodule.c"
      case 3: // $bb2
        $0=0; //@line 3731 "socketmodule.c"
        __label__ = 16; break; //@line 3731 "socketmodule.c"
      case 4: // $bb3thread_pre_split
        var $_pr=$x;
        __lastLabel__ = 4; __label__ = 5; break;
      case 5: // $bb3
        var $16=__lastLabel__ == 4 ? $_pr : ($12);
        var $17=($16) < 0; //@line 3732 "socketmodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 12; break; } //@line 3732 "socketmodule.c"
      case 6: // $bb4
        var $18=HEAP[_PyExc_OverflowError]; //@line 3733 "socketmodule.c"
        _PyErr_SetString($18, __str113); //@line 3733 "socketmodule.c"
        $0=0; //@line 3735 "socketmodule.c"
        __label__ = 16; break; //@line 3735 "socketmodule.c"
      case 7: // $bb6
        var $19=$8+4; //@line 3738 "socketmodule.c"
        var $20=HEAP[$19]; //@line 3738 "socketmodule.c"
        var $21=$20+84; //@line 3738 "socketmodule.c"
        var $22=HEAP[$21]; //@line 3738 "socketmodule.c"
        var $23=($22) & 16777216; //@line 3738 "socketmodule.c"
        var $24=($23)!=0; //@line 3738 "socketmodule.c"
        var $25=$arg_addr; //@line 3739 "socketmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 3738 "socketmodule.c"
      case 8: // $bb7
        var $26=_PyLong_AsUnsignedLong($25); //@line 3739 "socketmodule.c"
        $x=$26; //@line 3739 "socketmodule.c"
        var $27=$x; //@line 3740 "socketmodule.c"
        var $28=($27)==-1; //@line 3740 "socketmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 15; break; } //@line 3740 "socketmodule.c"
      case 9: // $bb8
        var $29=_PyErr_Occurred(); //@line 3740 "socketmodule.c"
        var $30=($29)!=0; //@line 3740 "socketmodule.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 3740 "socketmodule.c"
      case 10: // $bb9
        $0=0; //@line 3741 "socketmodule.c"
        __label__ = 16; break; //@line 3741 "socketmodule.c"
      case 11: // $bb11
        var $31=$25+4; //@line 3755 "socketmodule.c"
        var $32=HEAP[$31]; //@line 3755 "socketmodule.c"
        var $33=$32+12; //@line 3755 "socketmodule.c"
        var $34=HEAP[$33]; //@line 3755 "socketmodule.c"
        var $35=HEAP[_PyExc_TypeError]; //@line 3755 "socketmodule.c"
        var $36=_PyErr_Format($35, __str114, allocate([$34,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 3755 "socketmodule.c"
        $0=$36; //@line 3755 "socketmodule.c"
        __label__ = 16; break; //@line 3755 "socketmodule.c"
      case 12: // $bb12
        var $_pr1=$x;
        var $37=($_pr1)==-1; //@line 3758 "socketmodule.c"
        if ($37) { __label__ = 13; break; } else { __label__ = 15; break; } //@line 3758 "socketmodule.c"
      case 13: // $bb13
        var $38=_PyErr_Occurred(); //@line 3758 "socketmodule.c"
        var $39=($38)!=0; //@line 3758 "socketmodule.c"
        if ($39) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 3758 "socketmodule.c"
      case 14: // $bb14
        $0=0; //@line 3759 "socketmodule.c"
        __label__ = 16; break; //@line 3759 "socketmodule.c"
      case 15: // $bb15
        var $40=$x; //@line 3760 "socketmodule.c"
        var $41=_ntohl($40); //@line 3760 "socketmodule.c"
        var $42=_PyLong_FromUnsignedLong($41); //@line 3760 "socketmodule.c"
        $0=$42; //@line 3760 "socketmodule.c"
        __label__ = 16; break; //@line 3760 "socketmodule.c"
      case 16: // $bb16
        var $43=$0; //@line 3731 "socketmodule.c"
        $retval=$43; //@line 3731 "socketmodule.c"
        var $retval17=$retval; //@line 3731 "socketmodule.c"
        ;
        return $retval17; //@line 3731 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_htons($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 4; _memset(__stackBase__, 0, 4);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $x1=__stackBase__;
        var $x2;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3774 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str115, allocate([$x1,0,0,0], ["i32*",0,0,0], ALLOC_STACK)); //@line 3774 "socketmodule.c"
        var $3=($2)==0; //@line 3774 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3774 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3775 "socketmodule.c"
        __label__ = 5; break; //@line 3775 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$x1]; //@line 3777 "socketmodule.c"
        var $5=($4) < 0; //@line 3777 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3777 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_PyExc_OverflowError]; //@line 3778 "socketmodule.c"
        _PyErr_SetString($6, __str113); //@line 3778 "socketmodule.c"
        $0=0; //@line 3780 "socketmodule.c"
        __label__ = 5; break; //@line 3780 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$x1]; //@line 3782 "socketmodule.c"
        var $8=((($7)) & 65535); //@line 3782 "socketmodule.c"
        var $9=($8); //@line 3782 "socketmodule.c"
        var $10=((($9)) & 65535); //@line 3782 "socketmodule.c"
        var $11=_htons($10); //@line 3782 "socketmodule.c"
        var $12=($11); //@line 3782 "socketmodule.c"
        $x2=$12; //@line 3782 "socketmodule.c"
        var $13=$x2; //@line 3783 "socketmodule.c"
        var $14=_PyInt_FromLong($13); //@line 3783 "socketmodule.c"
        $0=$14; //@line 3783 "socketmodule.c"
        __label__ = 5; break; //@line 3783 "socketmodule.c"
      case 5: // $bb4
        var $15=$0; //@line 3775 "socketmodule.c"
        $retval=$15; //@line 3775 "socketmodule.c"
        var $retval5=$retval; //@line 3775 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval5; //@line 3775 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_htonl($self, $arg) {
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
        var $x;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 3797 "socketmodule.c"
        var $2=$1+4; //@line 3797 "socketmodule.c"
        var $3=HEAP[$2]; //@line 3797 "socketmodule.c"
        var $4=$3+84; //@line 3797 "socketmodule.c"
        var $5=HEAP[$4]; //@line 3797 "socketmodule.c"
        var $6=($5) & 8388608; //@line 3797 "socketmodule.c"
        var $7=($6)!=0; //@line 3797 "socketmodule.c"
        var $8=$arg_addr; //@line 3798 "socketmodule.c"
        if ($7) { __label__ = 1; break; } else { __label__ = 7; break; } //@line 3797 "socketmodule.c"
      case 1: // $bb
        var $9=$8; //@line 3798 "socketmodule.c"
        var $10=$9+8; //@line 3798 "socketmodule.c"
        var $11=HEAP[$10]; //@line 3798 "socketmodule.c"
        $x=$11; //@line 3798 "socketmodule.c"
        var $12=$x; //@line 3799 "socketmodule.c"
        var $13=($12)==-1; //@line 3799 "socketmodule.c"
        if ($13) { __lastLabel__ = 1; __label__ = 2; break; } else { __lastLabel__ = 1; __label__ = 5; break; } //@line 3799 "socketmodule.c"
      case 2: // $bb1
        var $14=_PyErr_Occurred(); //@line 3799 "socketmodule.c"
        var $15=($14)!=0; //@line 3799 "socketmodule.c"
        if ($15) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3799 "socketmodule.c"
      case 3: // $bb2
        $0=0; //@line 3800 "socketmodule.c"
        __label__ = 13; break; //@line 3800 "socketmodule.c"
      case 4: // $bb3thread_pre_split
        var $_pr=$x;
        __lastLabel__ = 4; __label__ = 5; break;
      case 5: // $bb3
        var $16=__lastLabel__ == 4 ? $_pr : ($12);
        var $17=($16) < 0; //@line 3801 "socketmodule.c"
        if ($17) { __label__ = 6; break; } else { __label__ = 12; break; } //@line 3801 "socketmodule.c"
      case 6: // $bb4
        var $18=HEAP[_PyExc_OverflowError]; //@line 3802 "socketmodule.c"
        _PyErr_SetString($18, __str113); //@line 3802 "socketmodule.c"
        $0=0; //@line 3804 "socketmodule.c"
        __label__ = 13; break; //@line 3804 "socketmodule.c"
      case 7: // $bb6
        var $19=$8+4; //@line 3807 "socketmodule.c"
        var $20=HEAP[$19]; //@line 3807 "socketmodule.c"
        var $21=$20+84; //@line 3807 "socketmodule.c"
        var $22=HEAP[$21]; //@line 3807 "socketmodule.c"
        var $23=($22) & 16777216; //@line 3807 "socketmodule.c"
        var $24=($23)!=0; //@line 3807 "socketmodule.c"
        var $25=$arg_addr; //@line 3808 "socketmodule.c"
        if ($24) { __label__ = 8; break; } else { __label__ = 11; break; } //@line 3807 "socketmodule.c"
      case 8: // $bb7
        var $26=_PyLong_AsUnsignedLong($25); //@line 3808 "socketmodule.c"
        $x=$26; //@line 3808 "socketmodule.c"
        var $27=$x; //@line 3809 "socketmodule.c"
        var $28=($27)==-1; //@line 3809 "socketmodule.c"
        if ($28) { __label__ = 9; break; } else { __label__ = 12; break; } //@line 3809 "socketmodule.c"
      case 9: // $bb8
        var $29=_PyErr_Occurred(); //@line 3809 "socketmodule.c"
        var $30=($29)!=0; //@line 3809 "socketmodule.c"
        if ($30) { __label__ = 10; break; } else { __label__ = 12; break; } //@line 3809 "socketmodule.c"
      case 10: // $bb9
        $0=0; //@line 3810 "socketmodule.c"
        __label__ = 13; break; //@line 3810 "socketmodule.c"
      case 11: // $bb11
        var $31=$25+4; //@line 3824 "socketmodule.c"
        var $32=HEAP[$31]; //@line 3824 "socketmodule.c"
        var $33=$32+12; //@line 3824 "socketmodule.c"
        var $34=HEAP[$33]; //@line 3824 "socketmodule.c"
        var $35=HEAP[_PyExc_TypeError]; //@line 3824 "socketmodule.c"
        var $36=_PyErr_Format($35, __str114, allocate([$34,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 3824 "socketmodule.c"
        $0=$36; //@line 3824 "socketmodule.c"
        __label__ = 13; break; //@line 3824 "socketmodule.c"
      case 12: // $bb12
        var $37=$x; //@line 3827 "socketmodule.c"
        var $38=_htonl($37); //@line 3827 "socketmodule.c"
        var $39=_PyLong_FromUnsignedLong($38); //@line 3827 "socketmodule.c"
        $0=$39; //@line 3827 "socketmodule.c"
        __label__ = 13; break; //@line 3827 "socketmodule.c"
      case 13: // $bb13
        var $40=$0; //@line 3800 "socketmodule.c"
        $retval=$40; //@line 3800 "socketmodule.c"
        var $retval14=$retval; //@line 3800 "socketmodule.c"
        ;
        return $retval14; //@line 3800 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_aton($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 8; _memset(__stackBase__, 0, 8);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $buf=__stackBase__;
        var $ip_addr=__stackBase__+4;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3862 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str116, allocate([$ip_addr,0,0,0], ["i8**",0,0,0], ALLOC_STACK)); //@line 3862 "socketmodule.c"
        var $3=($2)==0; //@line 3862 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3862 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3863 "socketmodule.c"
        __label__ = 5; break; //@line 3863 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$ip_addr]; //@line 3871 "socketmodule.c"
        var $5=_inet_aton($4, $buf); //@line 3871 "socketmodule.c"
        var $6=($5)!=0; //@line 3871 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3871 "socketmodule.c"
      case 3: // $bb2
        var $buf3=$buf; //@line 3872 "socketmodule.c"
        var $7=_PyString_FromStringAndSize($buf3, 4); //@line 3872 "socketmodule.c"
        $0=$7; //@line 3872 "socketmodule.c"
        __label__ = 5; break; //@line 3872 "socketmodule.c"
      case 4: // $bb5
        var $8=HEAP[_socket_error]; //@line 3875 "socketmodule.c"
        _PyErr_SetString($8, __str117); //@line 3875 "socketmodule.c"
        $0=0; //@line 3877 "socketmodule.c"
        __label__ = 5; break; //@line 3877 "socketmodule.c"
      case 5: // $bb6
        var $9=$0; //@line 3863 "socketmodule.c"
        $retval=$9; //@line 3863 "socketmodule.c"
        var $retval7=$retval; //@line 3863 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval7; //@line 3863 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_ntoa($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 12; _memset(__stackBase__, 0, 12);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $packed_str=__stackBase__;
        var $addr_len=__stackBase__+4;
        var $packed_addr=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3923 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str118, allocate([$packed_str,0,0,0,$addr_len,0,0,0], ["i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 3923 "socketmodule.c"
        var $3=($2)==0; //@line 3923 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3923 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3924 "socketmodule.c"
        __label__ = 5; break; //@line 3924 "socketmodule.c"
      case 2: // $bb1
        var $4=HEAP[$addr_len]; //@line 3927 "socketmodule.c"
        var $5=($4)!=4; //@line 3927 "socketmodule.c"
        if ($5) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3927 "socketmodule.c"
      case 3: // $bb2
        var $6=HEAP[_socket_error]; //@line 3928 "socketmodule.c"
        _PyErr_SetString($6, __str119); //@line 3928 "socketmodule.c"
        $0=0; //@line 3930 "socketmodule.c"
        __label__ = 5; break; //@line 3930 "socketmodule.c"
      case 4: // $bb3
        var $7=HEAP[$addr_len]; //@line 3933 "socketmodule.c"
        var $8=HEAP[$packed_str]; //@line 3933 "socketmodule.c"
        var $packed_addr4=$packed_addr; //@line 3933 "socketmodule.c"
        _llvm_memcpy_p0i8_p0i8_i32($packed_addr4, $8, $7, 1, 0); //@line 3933 "socketmodule.c"
        var $elt=$packed_addr; //@line 3935 "socketmodule.c"
        var $val=HEAP[$elt]; //@line 3935 "socketmodule.c"
        var $9=_inet_ntoa($val); //@line 3935 "socketmodule.c"
        var $10=_PyString_FromString($9); //@line 3935 "socketmodule.c"
        $0=$10; //@line 3935 "socketmodule.c"
        __label__ = 5; break; //@line 3935 "socketmodule.c"
      case 5: // $bb5
        var $11=$0; //@line 3924 "socketmodule.c"
        $retval=$11; //@line 3924 "socketmodule.c"
        var $retval6=$retval; //@line 3924 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval6; //@line 3924 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_pton($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 24; _memset(__stackBase__, 0, 24);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $af=__stackBase__;
        var $ip=__stackBase__+4;
        var $retval1;
        var $packed=__stackBase__+8;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$args_addr; //@line 3957 "socketmodule.c"
        var $2=_PyArg_ParseTuple($1, __str120, allocate([$af,0,0,0,$ip,0,0,0], ["i32*",0,0,0,"i8**",0,0,0], ALLOC_STACK)); //@line 3957 "socketmodule.c"
        var $3=($2)==0; //@line 3957 "socketmodule.c"
        if ($3) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 3957 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 3958 "socketmodule.c"
        __label__ = 11; break; //@line 3958 "socketmodule.c"
      case 2: // $bb2
        var $4=HEAP[$ip]; //@line 3969 "socketmodule.c"
        var $5=HEAP[$af]; //@line 3969 "socketmodule.c"
        var $packed3=$packed; //@line 3969 "socketmodule.c"
        var $6=_inet_pton($5, $4, $packed3); //@line 3969 "socketmodule.c"
        $retval1=$6; //@line 3969 "socketmodule.c"
        var $7=$retval1; //@line 3970 "socketmodule.c"
        var $8=($7) < 0; //@line 3970 "socketmodule.c"
        if ($8) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 3970 "socketmodule.c"
      case 3: // $bb4
        var $9=HEAP[_socket_error]; //@line 3971 "socketmodule.c"
        var $10=_PyErr_SetFromErrno($9); //@line 3971 "socketmodule.c"
        $0=0; //@line 3972 "socketmodule.c"
        __label__ = 11; break; //@line 3972 "socketmodule.c"
      case 4: // $bb5
        var $11=$retval1; //@line 3973 "socketmodule.c"
        var $12=($11)==0; //@line 3973 "socketmodule.c"
        if ($12) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 3973 "socketmodule.c"
      case 5: // $bb6
        var $13=HEAP[_socket_error]; //@line 3974 "socketmodule.c"
        _PyErr_SetString($13, __str121); //@line 3974 "socketmodule.c"
        $0=0; //@line 3976 "socketmodule.c"
        __label__ = 11; break; //@line 3976 "socketmodule.c"
      case 6: // $bb7
        var $14=HEAP[$af]; //@line 3977 "socketmodule.c"
        var $15=($14)==2; //@line 3977 "socketmodule.c"
        if ($15) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 3977 "socketmodule.c"
      case 7: // $bb8
        var $packed9=$packed; //@line 3978 "socketmodule.c"
        var $16=_PyString_FromStringAndSize($packed9, 4); //@line 3978 "socketmodule.c"
        $0=$16; //@line 3978 "socketmodule.c"
        __label__ = 11; break; //@line 3978 "socketmodule.c"
      case 8: // $bb10
        var $17=HEAP[$af]; //@line 3981 "socketmodule.c"
        var $18=($17)==10; //@line 3981 "socketmodule.c"
        if ($18) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 3981 "socketmodule.c"
      case 9: // $bb11
        var $packed12=$packed; //@line 3982 "socketmodule.c"
        var $19=_PyString_FromStringAndSize($packed12, 16); //@line 3982 "socketmodule.c"
        $0=$19; //@line 3982 "socketmodule.c"
        __label__ = 11; break; //@line 3982 "socketmodule.c"
      case 10: // $bb13
        var $20=HEAP[_socket_error]; //@line 3986 "socketmodule.c"
        _PyErr_SetString($20, __str8); //@line 3986 "socketmodule.c"
        $0=0; //@line 3987 "socketmodule.c"
        __label__ = 11; break; //@line 3987 "socketmodule.c"
      case 11: // $bb14
        var $21=$0; //@line 3958 "socketmodule.c"
        $retval=$21; //@line 3958 "socketmodule.c"
        var $retval15=$retval; //@line 3958 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval15; //@line 3958 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_inet_ntop($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 59; _memset(__stackBase__, 0, 59);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $af=__stackBase__;
        var $packed=__stackBase__+4;
        var $len=__stackBase__+8;
        var $retval1;
        var $ip=__stackBase__+12;
        $self_addr=$self;
        $args_addr=$args;
        var $1=$ip; //@line 4010 "socketmodule.c"
        _llvm_memset_p0i8_i32($1, 0, 47, 1, 0); //@line 4010 "socketmodule.c"
        var $2=$args_addr; //@line 4012 "socketmodule.c"
        var $3=_PyArg_ParseTuple($2, __str122, allocate([$af,0,0,0,$packed,0,0,0,$len,0,0,0], ["i32*",0,0,0,"i8**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 4012 "socketmodule.c"
        var $4=($3)==0; //@line 4012 "socketmodule.c"
        if ($4) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4012 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 4013 "socketmodule.c"
        __label__ = 12; break; //@line 4013 "socketmodule.c"
      case 2: // $bb2
        var $5=HEAP[$af]; //@line 4016 "socketmodule.c"
        var $6=($5)==2; //@line 4016 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 5; break; } //@line 4016 "socketmodule.c"
      case 3: // $bb3
        var $7=HEAP[$len]; //@line 4017 "socketmodule.c"
        var $8=($7)!=4; //@line 4017 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 9; break; } //@line 4017 "socketmodule.c"
      case 4: // $bb4
        var $9=HEAP[_PyExc_ValueError]; //@line 4018 "socketmodule.c"
        _PyErr_SetString($9, __str123); //@line 4018 "socketmodule.c"
        $0=0; //@line 4020 "socketmodule.c"
        __label__ = 12; break; //@line 4020 "socketmodule.c"
      case 5: // $bb6
        var $10=HEAP[$af]; //@line 4023 "socketmodule.c"
        var $11=($10)==10; //@line 4023 "socketmodule.c"
        if ($11) { __label__ = 6; break; } else { __label__ = 8; break; } //@line 4023 "socketmodule.c"
      case 6: // $bb7
        var $12=HEAP[$len]; //@line 4024 "socketmodule.c"
        var $13=($12)!=16; //@line 4024 "socketmodule.c"
        if ($13) { __label__ = 7; break; } else { __label__ = 9; break; } //@line 4024 "socketmodule.c"
      case 7: // $bb8
        var $14=HEAP[_PyExc_ValueError]; //@line 4025 "socketmodule.c"
        _PyErr_SetString($14, __str123); //@line 4025 "socketmodule.c"
        $0=0; //@line 4027 "socketmodule.c"
        __label__ = 12; break; //@line 4027 "socketmodule.c"
      case 8: // $bb10
        var $15=HEAP[$af]; //@line 4031 "socketmodule.c"
        var $16=HEAP[_PyExc_ValueError]; //@line 4031 "socketmodule.c"
        var $17=_PyErr_Format($16, __str124, allocate([$15,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 4031 "socketmodule.c"
        $0=0; //@line 4033 "socketmodule.c"
        __label__ = 12; break; //@line 4033 "socketmodule.c"
      case 9: // $bb11
        var $18=HEAP[$packed]; //@line 4036 "socketmodule.c"
        var $19=HEAP[$af]; //@line 4036 "socketmodule.c"
        var $ip12=$ip; //@line 4036 "socketmodule.c"
        var $20=_inet_ntop($19, $18, $ip12, 47); //@line 4036 "socketmodule.c"
        $retval1=$20; //@line 4036 "socketmodule.c"
        var $21=($20)==0; //@line 4037 "socketmodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 11; break; } //@line 4037 "socketmodule.c"
      case 10: // $bb13
        var $22=HEAP[_socket_error]; //@line 4038 "socketmodule.c"
        var $23=_PyErr_SetFromErrno($22); //@line 4038 "socketmodule.c"
        $0=0; //@line 4039 "socketmodule.c"
        __label__ = 12; break; //@line 4039 "socketmodule.c"
      case 11: // $bb14
        var $24=$retval1; //@line 4041 "socketmodule.c"
        var $25=_PyString_FromString($24); //@line 4041 "socketmodule.c"
        $0=$25; //@line 4041 "socketmodule.c"
        __label__ = 12; break; //@line 4041 "socketmodule.c"
      case 12: // $bb15
        var $26=$0; //@line 4013 "socketmodule.c"
        $retval=$26; //@line 4013 "socketmodule.c"
        var $retval16=$retval; //@line 4013 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval16; //@line 4013 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getaddrinfo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 90; _memset(__stackBase__, 0, 90);
    var __label__;
    var __lastLabel__ = null;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $iftmp_366;
        var $0;
        var $hints=__stackBase__;
        var $res;
        var $res0=__stackBase__+32;
        var $hobj=__stackBase__+36;
        var $pobj=__stackBase__+40;
        var $pbuf=__stackBase__+44;
        var $hptr;
        var $pptr;
        var $family=__stackBase__+74;
        var $socktype=__stackBase__+78;
        var $protocol=__stackBase__+82;
        var $flags=__stackBase__+86;
        var $error;
        var $all;
        var $single;
        var $idna;
        var $addr;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$res0]=0; //@line 4058 "socketmodule.c"
        HEAP[$hobj]=0; //@line 4059 "socketmodule.c"
        HEAP[$pobj]=0; //@line 4060 "socketmodule.c"
        $all=0; //@line 4065 "socketmodule.c"
        $single=0; //@line 4066 "socketmodule.c"
        $idna=0; //@line 4067 "socketmodule.c"
        HEAP[$flags]=0; //@line 4069 "socketmodule.c"
        var $1=HEAP[$flags]; //@line 4069 "socketmodule.c"
        HEAP[$protocol]=$1; //@line 4069 "socketmodule.c"
        var $2=HEAP[$protocol]; //@line 4069 "socketmodule.c"
        HEAP[$socktype]=$2; //@line 4069 "socketmodule.c"
        HEAP[$family]=0; //@line 4070 "socketmodule.c"
        var $3=$args_addr; //@line 4071 "socketmodule.c"
        var $4=_PyArg_ParseTuple($3, __str125, allocate([$hobj,0,0,0,$pobj,0,0,0,$family,0,0,0,$socktype,0,0,0,$protocol,0,0,0,$flags,0,0,0], ["%struct.PyObject**",0,0,0,"%struct.PyObject**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 4071 "socketmodule.c"
        var $5=($4)==0; //@line 4071 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4071 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 4074 "socketmodule.c"
        __label__ = 53; break; //@line 4074 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[$hobj]; //@line 4076 "socketmodule.c"
        var $7=($6)==(__Py_NoneStruct); //@line 4076 "socketmodule.c"
        if ($7) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4076 "socketmodule.c"
      case 3: // $bb2
        $hptr=0; //@line 4077 "socketmodule.c"
        __label__ = 11; break; //@line 4077 "socketmodule.c"
      case 4: // $bb3
        var $8=HEAP[$hobj]; //@line 4078 "socketmodule.c"
        var $9=$8+4; //@line 4078 "socketmodule.c"
        var $10=HEAP[$9]; //@line 4078 "socketmodule.c"
        var $11=$10+84; //@line 4078 "socketmodule.c"
        var $12=HEAP[$11]; //@line 4078 "socketmodule.c"
        var $13=($12) & 268435456; //@line 4078 "socketmodule.c"
        var $14=($13)!=0; //@line 4078 "socketmodule.c"
        var $15=HEAP[$hobj]; //@line 4079 "socketmodule.c"
        if ($14) { __label__ = 5; break; } else { __label__ = 8; break; } //@line 4078 "socketmodule.c"
      case 5: // $bb4
        var $16=_PyObject_CallMethod($15, __str126, __str127, allocate([__str23,0,0,0], ["i8*",0,0,0], ALLOC_STACK)); //@line 4079 "socketmodule.c"
        $idna=$16; //@line 4079 "socketmodule.c"
        var $17=$idna; //@line 4080 "socketmodule.c"
        var $18=($17)==0; //@line 4080 "socketmodule.c"
        if ($18) { __label__ = 6; break; } else { __label__ = 7; break; } //@line 4080 "socketmodule.c"
      case 6: // $bb5
        $0=0; //@line 4081 "socketmodule.c"
        __label__ = 53; break; //@line 4081 "socketmodule.c"
      case 7: // $bb6
        var $19=$idna; //@line 4082 "socketmodule.c"
        var $20=_PyString_AsString($19); //@line 4082 "socketmodule.c"
        $hptr=$20; //@line 4082 "socketmodule.c"
        __label__ = 11; break; //@line 4082 "socketmodule.c"
      case 8: // $bb7
        var $21=$15+4; //@line 4083 "socketmodule.c"
        var $22=HEAP[$21]; //@line 4083 "socketmodule.c"
        var $23=$22+84; //@line 4083 "socketmodule.c"
        var $24=HEAP[$23]; //@line 4083 "socketmodule.c"
        var $25=($24) & 134217728; //@line 4083 "socketmodule.c"
        var $26=($25)!=0; //@line 4083 "socketmodule.c"
        if ($26) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 4083 "socketmodule.c"
      case 9: // $bb8
        var $27=HEAP[$hobj]; //@line 4084 "socketmodule.c"
        var $28=_PyString_AsString($27); //@line 4084 "socketmodule.c"
        $hptr=$28; //@line 4084 "socketmodule.c"
        __label__ = 11; break; //@line 4084 "socketmodule.c"
      case 10: // $bb9
        var $29=HEAP[_PyExc_TypeError]; //@line 4086 "socketmodule.c"
        _PyErr_SetString($29, __str128); //@line 4086 "socketmodule.c"
        $0=0; //@line 4088 "socketmodule.c"
        __label__ = 53; break; //@line 4088 "socketmodule.c"
      case 11: // $bb10
        var $30=HEAP[$pobj]; //@line 4090 "socketmodule.c"
        var $31=$30+4; //@line 4090 "socketmodule.c"
        var $32=HEAP[$31]; //@line 4090 "socketmodule.c"
        var $33=$32+84; //@line 4090 "socketmodule.c"
        var $34=HEAP[$33]; //@line 4090 "socketmodule.c"
        var $35=($34) & 8388608; //@line 4090 "socketmodule.c"
        var $36=($35)!=0; //@line 4090 "socketmodule.c"
        var $37=HEAP[$pobj]; //@line 4091 "socketmodule.c"
        if ($36) { __label__ = 12; break; } else { __label__ = 13; break; } //@line 4090 "socketmodule.c"
      case 12: // $bb11
        var $38=_PyInt_AsLong($37); //@line 4091 "socketmodule.c"
        var $pbuf12=$pbuf; //@line 4091 "socketmodule.c"
        var $39=_PyOS_snprintf($pbuf12, 30, __str129, allocate([$38,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 4091 "socketmodule.c"
        var $pbuf13=$pbuf; //@line 4092 "socketmodule.c"
        $pptr=$pbuf13; //@line 4092 "socketmodule.c"
        __label__ = 18; break; //@line 4092 "socketmodule.c"
      case 13: // $bb14
        var $40=$37+4; //@line 4093 "socketmodule.c"
        var $41=HEAP[$40]; //@line 4093 "socketmodule.c"
        var $42=$41+84; //@line 4093 "socketmodule.c"
        var $43=HEAP[$42]; //@line 4093 "socketmodule.c"
        var $44=($43) & 134217728; //@line 4093 "socketmodule.c"
        var $45=($44)!=0; //@line 4093 "socketmodule.c"
        var $46=HEAP[$pobj]; //@line 4094 "socketmodule.c"
        if ($45) { __label__ = 14; break; } else { __label__ = 15; break; } //@line 4093 "socketmodule.c"
      case 14: // $bb15
        var $47=_PyString_AsString($46); //@line 4094 "socketmodule.c"
        $pptr=$47; //@line 4094 "socketmodule.c"
        __label__ = 18; break; //@line 4094 "socketmodule.c"
      case 15: // $bb16
        var $48=($46)==(__Py_NoneStruct); //@line 4095 "socketmodule.c"
        if ($48) { __label__ = 16; break; } else { __label__ = 17; break; } //@line 4095 "socketmodule.c"
      case 16: // $bb17
        $pptr=0; //@line 4096 "socketmodule.c"
        __label__ = 18; break; //@line 4096 "socketmodule.c"
      case 17: // $bb18
        var $49=HEAP[_socket_error]; //@line 4098 "socketmodule.c"
        _PyErr_SetString($49, __str130); //@line 4098 "socketmodule.c"
        __label__ = 41; break; //@line 4098 "socketmodule.c"
      case 18: // $bb19
        var $hints20=$hints; //@line 4101 "socketmodule.c"
        _llvm_memset_p0i8_i32($hints20, 0, 32, 1, 0); //@line 4101 "socketmodule.c"
        var $50=HEAP[$family]; //@line 4102 "socketmodule.c"
        var $51=$hints+4; //@line 4102 "socketmodule.c"
        HEAP[$51]=$50; //@line 4102 "socketmodule.c"
        var $52=HEAP[$socktype]; //@line 4103 "socketmodule.c"
        var $53=$hints+8; //@line 4103 "socketmodule.c"
        HEAP[$53]=$52; //@line 4103 "socketmodule.c"
        var $54=HEAP[$protocol]; //@line 4104 "socketmodule.c"
        var $55=$hints+12; //@line 4104 "socketmodule.c"
        HEAP[$55]=$54; //@line 4104 "socketmodule.c"
        var $56=HEAP[$flags]; //@line 4105 "socketmodule.c"
        var $57=$hints; //@line 4105 "socketmodule.c"
        HEAP[$57]=$56; //@line 4105 "socketmodule.c"
        var $58=$hptr; //@line 4108 "socketmodule.c"
        var $59=$pptr; //@line 4108 "socketmodule.c"
        var $60=_getaddrinfo($58, $59, $hints, $res0); //@line 4108 "socketmodule.c"
        $error=$60; //@line 4108 "socketmodule.c"
        var $61=($60)!=0; //@line 4111 "socketmodule.c"
        if ($61) { __label__ = 19; break; } else { __label__ = 20; break; } //@line 4111 "socketmodule.c"
      case 19: // $bb21
        var $62=$error; //@line 4112 "socketmodule.c"
        _set_gaierror($62); //@line 4112 "socketmodule.c"
        __label__ = 41; break; //@line 4112 "socketmodule.c"
      case 20: // $bb22
        var $63=_PyList_New(0); //@line 4116 "socketmodule.c"
        $all=$63; //@line 4116 "socketmodule.c"
        var $64=$all; //@line 4116 "socketmodule.c"
        var $65=($64)==0; //@line 4116 "socketmodule.c"
        if ($65) { __label__ = 41; break; } else { __label__ = 21; break; } //@line 4116 "socketmodule.c"
      case 21: // $bb23
        var $66=HEAP[$res0]; //@line 4118 "socketmodule.c"
        $res=$66; //@line 4118 "socketmodule.c"
        __lastLabel__ = 21; __label__ = 34; break; //@line 4118 "socketmodule.c"
      case 22: // $bb24
        var $67=HEAP[$protocol]; //@line 4120 "socketmodule.c"
        var $68=$res; //@line 4120 "socketmodule.c"
        var $69=$68+16; //@line 4120 "socketmodule.c"
        var $70=HEAP[$69]; //@line 4120 "socketmodule.c"
        var $71=$res; //@line 4120 "socketmodule.c"
        var $72=$71+20; //@line 4120 "socketmodule.c"
        var $73=HEAP[$72]; //@line 4120 "socketmodule.c"
        var $74=_makesockaddr(-1, $73, $70, $67); //@line 4120 "socketmodule.c"
        $addr=$74; //@line 4120 "socketmodule.c"
        var $75=$addr; //@line 4121 "socketmodule.c"
        var $76=($75)==0; //@line 4121 "socketmodule.c"
        if ($76) { __label__ = 41; break; } else { __label__ = 23; break; } //@line 4121 "socketmodule.c"
      case 23: // $bb25
        var $77=$res; //@line 4123 "socketmodule.c"
        var $78=$77+24; //@line 4123 "socketmodule.c"
        var $79=HEAP[$78]; //@line 4123 "socketmodule.c"
        var $80=($79)!=0; //@line 4123 "socketmodule.c"
        if ($80) { __label__ = 24; break; } else { __label__ = 25; break; } //@line 4123 "socketmodule.c"
      case 24: // $bb26
        var $81=$res; //@line 4123 "socketmodule.c"
        var $82=$81+24; //@line 4123 "socketmodule.c"
        var $83=HEAP[$82]; //@line 4123 "socketmodule.c"
        $iftmp_366=$83; //@line 4123 "socketmodule.c"
        __label__ = 26; break; //@line 4123 "socketmodule.c"
      case 25: // $bb27
        $iftmp_366=__str12; //@line 4123 "socketmodule.c"
        __label__ = 26; break; //@line 4123 "socketmodule.c"
      case 26: // $bb28
        var $84=$res; //@line 4123 "socketmodule.c"
        var $85=$84+12; //@line 4123 "socketmodule.c"
        var $86=HEAP[$85]; //@line 4123 "socketmodule.c"
        var $87=$res; //@line 4123 "socketmodule.c"
        var $88=$87+8; //@line 4123 "socketmodule.c"
        var $89=HEAP[$88]; //@line 4123 "socketmodule.c"
        var $90=$res; //@line 4123 "socketmodule.c"
        var $91=$90+4; //@line 4123 "socketmodule.c"
        var $92=HEAP[$91]; //@line 4123 "socketmodule.c"
        var $93=$iftmp_366; //@line 4123 "socketmodule.c"
        var $94=$addr; //@line 4123 "socketmodule.c"
        var $95=_Py_BuildValue(__str131, allocate([$92,0,0,0,$89,0,0,0,$86,0,0,0,$93,0,0,0,$94,0,0,0], ["i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_STACK)); //@line 4123 "socketmodule.c"
        $single=$95; //@line 4123 "socketmodule.c"
        var $96=$addr; //@line 4127 "socketmodule.c"
        var $97=$96; //@line 4127 "socketmodule.c"
        var $98=HEAP[$97]; //@line 4127 "socketmodule.c"
        var $99=($98) - 1; //@line 4127 "socketmodule.c"
        var $100=$addr; //@line 4127 "socketmodule.c"
        var $101=$100; //@line 4127 "socketmodule.c"
        HEAP[$101]=$99; //@line 4127 "socketmodule.c"
        var $102=$addr; //@line 4127 "socketmodule.c"
        var $103=$102; //@line 4127 "socketmodule.c"
        var $104=HEAP[$103]; //@line 4127 "socketmodule.c"
        var $105=($104)==0; //@line 4127 "socketmodule.c"
        if ($105) { __label__ = 27; break; } else { __label__ = 28; break; } //@line 4127 "socketmodule.c"
      case 27: // $bb29
        var $106=$addr; //@line 4127 "socketmodule.c"
        var $107=$106+4; //@line 4127 "socketmodule.c"
        var $108=HEAP[$107]; //@line 4127 "socketmodule.c"
        var $109=$108+24; //@line 4127 "socketmodule.c"
        var $110=HEAP[$109]; //@line 4127 "socketmodule.c"
        var $111=$addr; //@line 4127 "socketmodule.c"
        FUNCTION_TABLE[$110]($111); //@line 4127 "socketmodule.c"
        __label__ = 28; break; //@line 4127 "socketmodule.c"
      case 28: // $bb30
        var $112=$single; //@line 4128 "socketmodule.c"
        var $113=($112)==0; //@line 4128 "socketmodule.c"
        if ($113) { __label__ = 44; break; } else { __label__ = 29; break; } //@line 4128 "socketmodule.c"
      case 29: // $bb31
        var $114=$all; //@line 4131 "socketmodule.c"
        var $115=$single; //@line 4131 "socketmodule.c"
        var $116=_PyList_Append($114, $115); //@line 4131 "socketmodule.c"
        var $117=($116)!=0; //@line 4131 "socketmodule.c"
        if ($117) { __label__ = 41; break; } else { __label__ = 30; break; } //@line 4131 "socketmodule.c"
      case 30: // $bb32
        var $118=$single; //@line 4133 "socketmodule.c"
        var $119=($118)!=0; //@line 4133 "socketmodule.c"
        if ($119) { __label__ = 31; break; } else { __label__ = 33; break; } //@line 4133 "socketmodule.c"
      case 31: // $bb33
        var $120=$single; //@line 4133 "socketmodule.c"
        var $121=$120; //@line 4133 "socketmodule.c"
        var $122=HEAP[$121]; //@line 4133 "socketmodule.c"
        var $123=($122) - 1; //@line 4133 "socketmodule.c"
        var $124=$single; //@line 4133 "socketmodule.c"
        var $125=$124; //@line 4133 "socketmodule.c"
        HEAP[$125]=$123; //@line 4133 "socketmodule.c"
        var $126=$single; //@line 4133 "socketmodule.c"
        var $127=$126; //@line 4133 "socketmodule.c"
        var $128=HEAP[$127]; //@line 4133 "socketmodule.c"
        var $129=($128)==0; //@line 4133 "socketmodule.c"
        if ($129) { __label__ = 32; break; } else { __label__ = 33; break; } //@line 4133 "socketmodule.c"
      case 32: // $bb34
        var $130=$single; //@line 4133 "socketmodule.c"
        var $131=$130+4; //@line 4133 "socketmodule.c"
        var $132=HEAP[$131]; //@line 4133 "socketmodule.c"
        var $133=$132+24; //@line 4133 "socketmodule.c"
        var $134=HEAP[$133]; //@line 4133 "socketmodule.c"
        var $135=$single; //@line 4133 "socketmodule.c"
        FUNCTION_TABLE[$134]($135); //@line 4133 "socketmodule.c"
        __label__ = 33; break; //@line 4133 "socketmodule.c"
      case 33: // $bb35
        var $136=$res; //@line 4118 "socketmodule.c"
        var $137=$136+28; //@line 4118 "socketmodule.c"
        var $138=HEAP[$137]; //@line 4118 "socketmodule.c"
        $res=$138; //@line 4118 "socketmodule.c"
        __lastLabel__ = 33; __label__ = 34; break; //@line 4118 "socketmodule.c"
      case 34: // $bb36
        var $139=__lastLabel__ == 33 ? $138 : ($66);
        var $140=($139)!=0; //@line 4118 "socketmodule.c"
        if ($140) { __label__ = 22; break; } else { __label__ = 35; break; } //@line 4118 "socketmodule.c"
      case 35: // $bb37
        var $141=$idna; //@line 4135 "socketmodule.c"
        var $142=($141)!=0; //@line 4135 "socketmodule.c"
        if ($142) { __label__ = 36; break; } else { __label__ = 38; break; } //@line 4135 "socketmodule.c"
      case 36: // $bb38
        var $143=$idna; //@line 4135 "socketmodule.c"
        var $144=$143; //@line 4135 "socketmodule.c"
        var $145=HEAP[$144]; //@line 4135 "socketmodule.c"
        var $146=($145) - 1; //@line 4135 "socketmodule.c"
        var $147=$idna; //@line 4135 "socketmodule.c"
        var $148=$147; //@line 4135 "socketmodule.c"
        HEAP[$148]=$146; //@line 4135 "socketmodule.c"
        var $149=$idna; //@line 4135 "socketmodule.c"
        var $150=$149; //@line 4135 "socketmodule.c"
        var $151=HEAP[$150]; //@line 4135 "socketmodule.c"
        var $152=($151)==0; //@line 4135 "socketmodule.c"
        if ($152) { __label__ = 37; break; } else { __label__ = 38; break; } //@line 4135 "socketmodule.c"
      case 37: // $bb39
        var $153=$idna; //@line 4135 "socketmodule.c"
        var $154=$153+4; //@line 4135 "socketmodule.c"
        var $155=HEAP[$154]; //@line 4135 "socketmodule.c"
        var $156=$155+24; //@line 4135 "socketmodule.c"
        var $157=HEAP[$156]; //@line 4135 "socketmodule.c"
        var $158=$idna; //@line 4135 "socketmodule.c"
        FUNCTION_TABLE[$157]($158); //@line 4135 "socketmodule.c"
        __label__ = 38; break; //@line 4135 "socketmodule.c"
      case 38: // $bb40
        var $159=HEAP[$res0]; //@line 4136 "socketmodule.c"
        var $160=($159)!=0; //@line 4136 "socketmodule.c"
        if ($160) { __label__ = 39; break; } else { __label__ = 40; break; } //@line 4136 "socketmodule.c"
      case 39: // $bb41
        var $161=HEAP[$res0]; //@line 4137 "socketmodule.c"
        _freeaddrinfo($161); //@line 4137 "socketmodule.c"
        __label__ = 40; break; //@line 4137 "socketmodule.c"
      case 40: // $bb42
        var $162=$all; //@line 4138 "socketmodule.c"
        $0=$162; //@line 4138 "socketmodule.c"
        __label__ = 53; break; //@line 4138 "socketmodule.c"
      case 41: // $err
        var $_pr=$single;
        var $163=($_pr)!=0; //@line 4140 "socketmodule.c"
        if ($163) { __label__ = 42; break; } else { __label__ = 44; break; } //@line 4140 "socketmodule.c"
      case 42: // $bb43
        var $164=$single; //@line 4140 "socketmodule.c"
        var $165=$164; //@line 4140 "socketmodule.c"
        var $166=HEAP[$165]; //@line 4140 "socketmodule.c"
        var $167=($166) - 1; //@line 4140 "socketmodule.c"
        var $168=$single; //@line 4140 "socketmodule.c"
        var $169=$168; //@line 4140 "socketmodule.c"
        HEAP[$169]=$167; //@line 4140 "socketmodule.c"
        var $170=$single; //@line 4140 "socketmodule.c"
        var $171=$170; //@line 4140 "socketmodule.c"
        var $172=HEAP[$171]; //@line 4140 "socketmodule.c"
        var $173=($172)==0; //@line 4140 "socketmodule.c"
        if ($173) { __label__ = 43; break; } else { __label__ = 44; break; } //@line 4140 "socketmodule.c"
      case 43: // $bb44
        var $174=$single; //@line 4140 "socketmodule.c"
        var $175=$174+4; //@line 4140 "socketmodule.c"
        var $176=HEAP[$175]; //@line 4140 "socketmodule.c"
        var $177=$176+24; //@line 4140 "socketmodule.c"
        var $178=HEAP[$177]; //@line 4140 "socketmodule.c"
        var $179=$single; //@line 4140 "socketmodule.c"
        FUNCTION_TABLE[$178]($179); //@line 4140 "socketmodule.c"
        __label__ = 44; break; //@line 4140 "socketmodule.c"
      case 44: // $bb45
        var $180=$all; //@line 4141 "socketmodule.c"
        var $181=($180)!=0; //@line 4141 "socketmodule.c"
        if ($181) { __label__ = 45; break; } else { __label__ = 47; break; } //@line 4141 "socketmodule.c"
      case 45: // $bb46
        var $182=$all; //@line 4141 "socketmodule.c"
        var $183=$182; //@line 4141 "socketmodule.c"
        var $184=HEAP[$183]; //@line 4141 "socketmodule.c"
        var $185=($184) - 1; //@line 4141 "socketmodule.c"
        var $186=$all; //@line 4141 "socketmodule.c"
        var $187=$186; //@line 4141 "socketmodule.c"
        HEAP[$187]=$185; //@line 4141 "socketmodule.c"
        var $188=$all; //@line 4141 "socketmodule.c"
        var $189=$188; //@line 4141 "socketmodule.c"
        var $190=HEAP[$189]; //@line 4141 "socketmodule.c"
        var $191=($190)==0; //@line 4141 "socketmodule.c"
        if ($191) { __label__ = 46; break; } else { __label__ = 47; break; } //@line 4141 "socketmodule.c"
      case 46: // $bb47
        var $192=$all; //@line 4141 "socketmodule.c"
        var $193=$192+4; //@line 4141 "socketmodule.c"
        var $194=HEAP[$193]; //@line 4141 "socketmodule.c"
        var $195=$194+24; //@line 4141 "socketmodule.c"
        var $196=HEAP[$195]; //@line 4141 "socketmodule.c"
        var $197=$all; //@line 4141 "socketmodule.c"
        FUNCTION_TABLE[$196]($197); //@line 4141 "socketmodule.c"
        __label__ = 47; break; //@line 4141 "socketmodule.c"
      case 47: // $bb48
        var $198=$idna; //@line 4142 "socketmodule.c"
        var $199=($198)!=0; //@line 4142 "socketmodule.c"
        if ($199) { __label__ = 48; break; } else { __label__ = 50; break; } //@line 4142 "socketmodule.c"
      case 48: // $bb49
        var $200=$idna; //@line 4142 "socketmodule.c"
        var $201=$200; //@line 4142 "socketmodule.c"
        var $202=HEAP[$201]; //@line 4142 "socketmodule.c"
        var $203=($202) - 1; //@line 4142 "socketmodule.c"
        var $204=$idna; //@line 4142 "socketmodule.c"
        var $205=$204; //@line 4142 "socketmodule.c"
        HEAP[$205]=$203; //@line 4142 "socketmodule.c"
        var $206=$idna; //@line 4142 "socketmodule.c"
        var $207=$206; //@line 4142 "socketmodule.c"
        var $208=HEAP[$207]; //@line 4142 "socketmodule.c"
        var $209=($208)==0; //@line 4142 "socketmodule.c"
        if ($209) { __label__ = 49; break; } else { __label__ = 50; break; } //@line 4142 "socketmodule.c"
      case 49: // $bb50
        var $210=$idna; //@line 4142 "socketmodule.c"
        var $211=$210+4; //@line 4142 "socketmodule.c"
        var $212=HEAP[$211]; //@line 4142 "socketmodule.c"
        var $213=$212+24; //@line 4142 "socketmodule.c"
        var $214=HEAP[$213]; //@line 4142 "socketmodule.c"
        var $215=$idna; //@line 4142 "socketmodule.c"
        FUNCTION_TABLE[$214]($215); //@line 4142 "socketmodule.c"
        __label__ = 50; break; //@line 4142 "socketmodule.c"
      case 50: // $bb51
        var $216=HEAP[$res0]; //@line 4143 "socketmodule.c"
        var $217=($216)!=0; //@line 4143 "socketmodule.c"
        if ($217) { __label__ = 51; break; } else { __label__ = 52; break; } //@line 4143 "socketmodule.c"
      case 51: // $bb52
        var $218=HEAP[$res0]; //@line 4144 "socketmodule.c"
        _freeaddrinfo($218); //@line 4144 "socketmodule.c"
        __label__ = 52; break; //@line 4144 "socketmodule.c"
      case 52: // $bb53
        $0=0; //@line 4145 "socketmodule.c"
        __label__ = 53; break; //@line 4145 "socketmodule.c"
      case 53: // $bb54
        var $219=$0; //@line 4074 "socketmodule.c"
        $retval=$219; //@line 4074 "socketmodule.c"
        var $retval55=$retval; //@line 4074 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval55; //@line 4074 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getnameinfo($self, $args) {
    var __stackBase__  = STACKTOP; STACKTOP += 1117; _memset(__stackBase__, 0, 1117);
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $args_addr;
        var $retval;
        var $0;
        var $sa=__stackBase__;
        var $flags=__stackBase__+4;
        var $hostp=__stackBase__+8;
        var $port=__stackBase__+12;
        var $flowinfo=__stackBase__+16;
        var $scope_id=__stackBase__+20;
        var $hbuf=__stackBase__+24;
        var $pbuf=__stackBase__+1049;
        var $hints=__stackBase__+1081;
        var $res=__stackBase__+1113;
        var $error;
        var $ret;
        var $sin6;
        $self_addr=$self;
        $args_addr=$args;
        HEAP[$sa]=0; //@line 4160 "socketmodule.c"
        HEAP[$res]=0; //@line 4165 "socketmodule.c"
        $ret=0; //@line 4167 "socketmodule.c"
        HEAP[$scope_id]=0; //@line 4169 "socketmodule.c"
        var $1=HEAP[$scope_id]; //@line 4169 "socketmodule.c"
        HEAP[$flowinfo]=$1; //@line 4169 "socketmodule.c"
        var $2=HEAP[$flowinfo]; //@line 4169 "socketmodule.c"
        HEAP[$flags]=$2; //@line 4169 "socketmodule.c"
        var $3=$args_addr; //@line 4170 "socketmodule.c"
        var $4=_PyArg_ParseTuple($3, __str132, allocate([$sa,0,0,0,$flags,0,0,0], ["%struct.PyObject**",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 4170 "socketmodule.c"
        var $5=($4)==0; //@line 4170 "socketmodule.c"
        if ($5) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4170 "socketmodule.c"
      case 1: // $bb
        $0=0; //@line 4171 "socketmodule.c"
        __label__ = 20; break; //@line 4171 "socketmodule.c"
      case 2: // $bb1
        var $6=HEAP[$sa]; //@line 4172 "socketmodule.c"
        var $7=$6+4; //@line 4172 "socketmodule.c"
        var $8=HEAP[$7]; //@line 4172 "socketmodule.c"
        var $9=$8+84; //@line 4172 "socketmodule.c"
        var $10=HEAP[$9]; //@line 4172 "socketmodule.c"
        var $11=($10) & 67108864; //@line 4172 "socketmodule.c"
        var $12=($11)==0; //@line 4172 "socketmodule.c"
        if ($12) { __label__ = 3; break; } else { __label__ = 4; break; } //@line 4172 "socketmodule.c"
      case 3: // $bb2
        var $13=HEAP[_PyExc_TypeError]; //@line 4173 "socketmodule.c"
        _PyErr_SetString($13, __str133); //@line 4173 "socketmodule.c"
        $0=0; //@line 4175 "socketmodule.c"
        __label__ = 20; break; //@line 4175 "socketmodule.c"
      case 4: // $bb3
        var $14=HEAP[$sa]; //@line 4177 "socketmodule.c"
        var $15=_PyArg_ParseTuple($14, __str134, allocate([$hostp,0,0,0,$port,0,0,0,$flowinfo,0,0,0,$scope_id,0,0,0], ["i8**",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0], ALLOC_STACK)); //@line 4177 "socketmodule.c"
        var $16=($15)==0; //@line 4177 "socketmodule.c"
        if ($16) { __label__ = 5; break; } else { __label__ = 6; break; } //@line 4177 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 4179 "socketmodule.c"
        __label__ = 20; break; //@line 4179 "socketmodule.c"
      case 6: // $bb5
        var $17=HEAP[$port]; //@line 4180 "socketmodule.c"
        var $pbuf6=$pbuf; //@line 4180 "socketmodule.c"
        var $18=_PyOS_snprintf($pbuf6, 32, __str135, allocate([$17,0,0,0], ["i32",0,0,0], ALLOC_STACK)); //@line 4180 "socketmodule.c"
        var $19=$hints+8; //@line 4183 "socketmodule.c"
        var $20=$hints;
        _llvm_memset_p0i8_i64($20, 0, 32, 1, 0);
        HEAP[$19]=2; //@line 4183 "socketmodule.c"
        var $21=HEAP[$hostp]; //@line 4186 "socketmodule.c"
        var $pbuf8=$pbuf; //@line 4186 "socketmodule.c"
        var $22=_getaddrinfo($21, $pbuf8, $hints, $res); //@line 4186 "socketmodule.c"
        $error=$22; //@line 4186 "socketmodule.c"
        var $23=$error; //@line 4189 "socketmodule.c"
        var $24=($23)!=0; //@line 4189 "socketmodule.c"
        if ($24) { __label__ = 7; break; } else { __label__ = 8; break; } //@line 4189 "socketmodule.c"
      case 7: // $bb9
        var $25=$error; //@line 4190 "socketmodule.c"
        _set_gaierror($25); //@line 4190 "socketmodule.c"
        __label__ = 17; break; //@line 4190 "socketmodule.c"
      case 8: // $bb10
        var $26=HEAP[$res]; //@line 4193 "socketmodule.c"
        var $27=$26+28; //@line 4193 "socketmodule.c"
        var $28=HEAP[$27]; //@line 4193 "socketmodule.c"
        var $29=($28)!=0; //@line 4193 "socketmodule.c"
        if ($29) { __label__ = 9; break; } else { __label__ = 10; break; } //@line 4193 "socketmodule.c"
      case 9: // $bb11
        var $30=HEAP[_socket_error]; //@line 4194 "socketmodule.c"
        _PyErr_SetString($30, __str136); //@line 4194 "socketmodule.c"
        __label__ = 17; break; //@line 4194 "socketmodule.c"
      case 10: // $bb12
        var $31=HEAP[$res]; //@line 4198 "socketmodule.c"
        var $32=$31+4; //@line 4198 "socketmodule.c"
        var $33=HEAP[$32]; //@line 4198 "socketmodule.c"
        if ($33 == 2) {
          __label__ = 11; break;
        }
        else if ($33 == 10) {
          __label__ = 13; break;
        }
        else {
        __label__ = 14; break;
        }
        
      case 11: // $bb13
        var $34=HEAP[$sa]; //@line 4201 "socketmodule.c"
        var $35=$34; //@line 4201 "socketmodule.c"
        var $36=$35+8; //@line 4201 "socketmodule.c"
        var $37=HEAP[$36]; //@line 4201 "socketmodule.c"
        var $38=($37)!=2; //@line 4201 "socketmodule.c"
        if ($38) { __label__ = 12; break; } else { __label__ = 14; break; } //@line 4201 "socketmodule.c"
      case 12: // $bb14
        var $39=HEAP[_socket_error]; //@line 4202 "socketmodule.c"
        _PyErr_SetString($39, __str137); //@line 4202 "socketmodule.c"
        __label__ = 17; break; //@line 4202 "socketmodule.c"
      case 13: // $bb16
        var $40=HEAP[$res]; //@line 4212 "socketmodule.c"
        var $41=$40+20; //@line 4212 "socketmodule.c"
        var $42=HEAP[$41]; //@line 4212 "socketmodule.c"
        var $43=$42; //@line 4212 "socketmodule.c"
        $sin6=$43; //@line 4212 "socketmodule.c"
        var $44=HEAP[$flowinfo]; //@line 4213 "socketmodule.c"
        var $45=$sin6; //@line 4213 "socketmodule.c"
        var $46=$45+4; //@line 4213 "socketmodule.c"
        HEAP[$46]=$44; //@line 4213 "socketmodule.c"
        var $47=HEAP[$scope_id]; //@line 4214 "socketmodule.c"
        var $48=$sin6; //@line 4214 "socketmodule.c"
        var $49=$48+24; //@line 4214 "socketmodule.c"
        HEAP[$49]=$47; //@line 4214 "socketmodule.c"
        __label__ = 14; break; //@line 4214 "socketmodule.c"
      case 14: // $bb17
        var $50=HEAP[$flags]; //@line 4219 "socketmodule.c"
        var $51=HEAP[$res]; //@line 4219 "socketmodule.c"
        var $52=$51+16; //@line 4219 "socketmodule.c"
        var $53=HEAP[$52]; //@line 4219 "socketmodule.c"
        var $54=HEAP[$res]; //@line 4219 "socketmodule.c"
        var $55=$54+20; //@line 4219 "socketmodule.c"
        var $56=HEAP[$55]; //@line 4219 "socketmodule.c"
        var $hbuf18=$hbuf; //@line 4219 "socketmodule.c"
        var $pbuf19=$pbuf; //@line 4219 "socketmodule.c"
        var $57=_getnameinfo($56, $53, $hbuf18, 1025, $pbuf19, 32, $50); //@line 4219 "socketmodule.c"
        $error=$57; //@line 4219 "socketmodule.c"
        var $58=($57)!=0; //@line 4221 "socketmodule.c"
        if ($58) { __label__ = 15; break; } else { __label__ = 16; break; } //@line 4221 "socketmodule.c"
      case 15: // $bb20
        var $59=$error; //@line 4222 "socketmodule.c"
        _set_gaierror($59); //@line 4222 "socketmodule.c"
        __label__ = 17; break; //@line 4222 "socketmodule.c"
      case 16: // $bb21
        var $hbuf22=$hbuf; //@line 4225 "socketmodule.c"
        var $pbuf23=$pbuf; //@line 4225 "socketmodule.c"
        var $60=_Py_BuildValue(__str138, allocate([$hbuf22,0,0,0,$pbuf23,0,0,0], ["i8*",0,0,0,"i8*",0,0,0], ALLOC_STACK)); //@line 4225 "socketmodule.c"
        $ret=$60; //@line 4225 "socketmodule.c"
        __label__ = 17; break; //@line 4227 "socketmodule.c"
      case 17: // $fail
        var $61=HEAP[$res]; //@line 4228 "socketmodule.c"
        var $62=($61)!=0; //@line 4228 "socketmodule.c"
        if ($62) { __label__ = 18; break; } else { __label__ = 19; break; } //@line 4228 "socketmodule.c"
      case 18: // $bb24
        var $63=HEAP[$res]; //@line 4229 "socketmodule.c"
        _freeaddrinfo($63); //@line 4229 "socketmodule.c"
        __label__ = 19; break; //@line 4229 "socketmodule.c"
      case 19: // $bb25
        var $64=$ret; //@line 4230 "socketmodule.c"
        $0=$64; //@line 4230 "socketmodule.c"
        __label__ = 20; break; //@line 4230 "socketmodule.c"
      case 20: // $bb26
        var $65=$0; //@line 4171 "socketmodule.c"
        $retval=$65; //@line 4171 "socketmodule.c"
        var $retval27=$retval; //@line 4171 "socketmodule.c"
        STACKTOP = __stackBase__;
        return $retval27; //@line 4171 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_getdefaulttimeout($self) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $retval;
        var $0;
        $self_addr=$self;
        var $1=HEAP[_defaulttimeout]; //@line 4244 "socketmodule.c"
        var $2=($1) < 0; //@line 4244 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4244 "socketmodule.c"
      case 1: // $bb
        var $3=HEAP[__Py_NoneStruct]; //@line 4245 "socketmodule.c"
        var $4=($3) + 1; //@line 4245 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$4; //@line 4245 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 4246 "socketmodule.c"
        __label__ = 3; break; //@line 4246 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[_defaulttimeout]; //@line 4249 "socketmodule.c"
        var $6=_PyFloat_FromDouble($5); //@line 4249 "socketmodule.c"
        $0=$6; //@line 4249 "socketmodule.c"
        __label__ = 3; break; //@line 4249 "socketmodule.c"
      case 3: // $bb2
        var $7=$0; //@line 4246 "socketmodule.c"
        $retval=$7; //@line 4246 "socketmodule.c"
        var $retval3=$retval; //@line 4246 "socketmodule.c"
        ;
        return $retval3; //@line 4246 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _socket_setdefaulttimeout($self, $arg) {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $self_addr;
        var $arg_addr;
        var $retval;
        var $0;
        var $timeout;
        $self_addr=$self;
        $arg_addr=$arg;
        var $1=$arg_addr; //@line 4264 "socketmodule.c"
        var $2=($1)==(__Py_NoneStruct); //@line 4264 "socketmodule.c"
        if ($2) { __label__ = 1; break; } else { __label__ = 2; break; } //@line 4264 "socketmodule.c"
      case 1: // $bb
        $timeout=-1; //@line 4265 "socketmodule.c"
        __label__ = 6; break; //@line 4265 "socketmodule.c"
      case 2: // $bb1
        var $3=$arg_addr; //@line 4267 "socketmodule.c"
        var $4=_PyFloat_AsDouble($3); //@line 4267 "socketmodule.c"
        $timeout=$4; //@line 4267 "socketmodule.c"
        var $5=$timeout; //@line 4268 "socketmodule.c"
        var $6=($5) < 0; //@line 4268 "socketmodule.c"
        if ($6) { __label__ = 3; break; } else { __label__ = 6; break; } //@line 4268 "socketmodule.c"
      case 3: // $bb2
        var $7=_PyErr_Occurred(); //@line 4269 "socketmodule.c"
        var $8=($7)==0; //@line 4269 "socketmodule.c"
        if ($8) { __label__ = 4; break; } else { __label__ = 5; break; } //@line 4269 "socketmodule.c"
      case 4: // $bb3
        var $9=HEAP[_PyExc_ValueError]; //@line 4270 "socketmodule.c"
        _PyErr_SetString($9, __str36); //@line 4270 "socketmodule.c"
        __label__ = 5; break; //@line 4270 "socketmodule.c"
      case 5: // $bb4
        $0=0; //@line 4272 "socketmodule.c"
        __label__ = 7; break; //@line 4272 "socketmodule.c"
      case 6: // $bb5
        var $10=$timeout; //@line 4276 "socketmodule.c"
        HEAP[_defaulttimeout]=$10; //@line 4276 "socketmodule.c"
        var $11=HEAP[__Py_NoneStruct]; //@line 4278 "socketmodule.c"
        var $12=($11) + 1; //@line 4278 "socketmodule.c"
        HEAP[__Py_NoneStruct]=$12; //@line 4278 "socketmodule.c"
        $0=__Py_NoneStruct; //@line 4279 "socketmodule.c"
        __label__ = 7; break; //@line 4279 "socketmodule.c"
      case 7: // $bb6
        var $13=$0; //@line 4272 "socketmodule.c"
        $retval=$13; //@line 4272 "socketmodule.c"
        var $retval7=$retval; //@line 4272 "socketmodule.c"
        ;
        return $retval7; //@line 4272 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  

  function _os_init() {
    ;
    var __label__;
  
    var $retval;
    var $0;
    $0=1; //@line 4441 "socketmodule.c"
    var $1=$0; //@line 4441 "socketmodule.c"
    $retval=$1; //@line 4441 "socketmodule.c"
    var $retval1=$retval; //@line 4441 "socketmodule.c"
    ;
    return $retval1; //@line 4441 "socketmodule.c"
  }
  

  function _init_socket() {
    ;
    var __label__;
    __label__ = -1; 
    while(1) switch(__label__) {
      case -1: // $entry
        var $m;
        var $has_ipv6;
        var $0=_os_init(); //@line 4479 "socketmodule.c"
        var $1=($0)==0; //@line 4479 "socketmodule.c"
        if ($1) { __label__ = 10; break; } else { __label__ = 1; break; } //@line 4479 "socketmodule.c"
      case 1: // $bb
        HEAP[_sock_type+4]=_PyType_Type; //@line 4482 "socketmodule.c"
        var $2=_Py_InitModule4(__str160, _socket_methods, _socket_doc, 0, 1013); //@line 4483 "socketmodule.c"
        $m=$2; //@line 4483 "socketmodule.c"
        var $3=$m; //@line 4486 "socketmodule.c"
        var $4=($3)==0; //@line 4486 "socketmodule.c"
        if ($4) { __label__ = 10; break; } else { __label__ = 2; break; } //@line 4486 "socketmodule.c"
      case 2: // $bb1
        var $5=HEAP[_PyExc_IOError]; //@line 4489 "socketmodule.c"
        var $6=_PyErr_NewException(__str161, $5, 0); //@line 4489 "socketmodule.c"
        HEAP[_socket_error]=$6; //@line 4489 "socketmodule.c"
        var $7=HEAP[_socket_error]; //@line 4491 "socketmodule.c"
        var $8=($7)==0; //@line 4491 "socketmodule.c"
        if ($8) { __label__ = 10; break; } else { __label__ = 3; break; } //@line 4491 "socketmodule.c"
      case 3: // $bb2
        var $9=HEAP[_socket_error]; //@line 4493 "socketmodule.c"
        HEAP[_PySocketModuleAPI+4]=$9; //@line 4493 "socketmodule.c"
        var $10=HEAP[_socket_error]; //@line 4494 "socketmodule.c"
        var $11=$10; //@line 4494 "socketmodule.c"
        var $12=HEAP[$11]; //@line 4494 "socketmodule.c"
        var $13=($12) + 1; //@line 4494 "socketmodule.c"
        var $14=$10; //@line 4494 "socketmodule.c"
        HEAP[$14]=$13; //@line 4494 "socketmodule.c"
        var $15=HEAP[_socket_error]; //@line 4495 "socketmodule.c"
        var $16=$m; //@line 4495 "socketmodule.c"
        var $17=_PyModule_AddObject($16, __str162, $15); //@line 4495 "socketmodule.c"
        var $18=HEAP[_socket_error]; //@line 4496 "socketmodule.c"
        var $19=_PyErr_NewException(__str163, $18, 0); //@line 4496 "socketmodule.c"
        HEAP[_socket_herror]=$19; //@line 4496 "socketmodule.c"
        var $20=HEAP[_socket_herror]; //@line 4498 "socketmodule.c"
        var $21=($20)==0; //@line 4498 "socketmodule.c"
        if ($21) { __label__ = 10; break; } else { __label__ = 4; break; } //@line 4498 "socketmodule.c"
      case 4: // $bb3
        var $22=HEAP[_socket_herror]; //@line 4500 "socketmodule.c"
        var $23=$22; //@line 4500 "socketmodule.c"
        var $24=HEAP[$23]; //@line 4500 "socketmodule.c"
        var $25=($24) + 1; //@line 4500 "socketmodule.c"
        var $26=$22; //@line 4500 "socketmodule.c"
        HEAP[$26]=$25; //@line 4500 "socketmodule.c"
        var $27=HEAP[_socket_herror]; //@line 4501 "socketmodule.c"
        var $28=$m; //@line 4501 "socketmodule.c"
        var $29=_PyModule_AddObject($28, __str164, $27); //@line 4501 "socketmodule.c"
        var $30=HEAP[_socket_error]; //@line 4502 "socketmodule.c"
        var $31=_PyErr_NewException(__str165, $30, 0); //@line 4502 "socketmodule.c"
        HEAP[_socket_gaierror]=$31; //@line 4502 "socketmodule.c"
        var $32=HEAP[_socket_gaierror]; //@line 4504 "socketmodule.c"
        var $33=($32)==0; //@line 4504 "socketmodule.c"
        if ($33) { __label__ = 10; break; } else { __label__ = 5; break; } //@line 4504 "socketmodule.c"
      case 5: // $bb4
        var $34=HEAP[_socket_gaierror]; //@line 4506 "socketmodule.c"
        var $35=$34; //@line 4506 "socketmodule.c"
        var $36=HEAP[$35]; //@line 4506 "socketmodule.c"
        var $37=($36) + 1; //@line 4506 "socketmodule.c"
        var $38=$34; //@line 4506 "socketmodule.c"
        HEAP[$38]=$37; //@line 4506 "socketmodule.c"
        var $39=HEAP[_socket_gaierror]; //@line 4507 "socketmodule.c"
        var $40=$m; //@line 4507 "socketmodule.c"
        var $41=_PyModule_AddObject($40, __str166, $39); //@line 4507 "socketmodule.c"
        var $42=HEAP[_socket_error]; //@line 4508 "socketmodule.c"
        var $43=_PyErr_NewException(__str167, $42, 0); //@line 4508 "socketmodule.c"
        HEAP[_socket_timeout]=$43; //@line 4508 "socketmodule.c"
        var $44=HEAP[_socket_timeout]; //@line 4510 "socketmodule.c"
        var $45=($44)==0; //@line 4510 "socketmodule.c"
        if ($45) { __label__ = 10; break; } else { __label__ = 6; break; } //@line 4510 "socketmodule.c"
      case 6: // $bb5
        var $46=HEAP[_socket_timeout]; //@line 4512 "socketmodule.c"
        var $47=$46; //@line 4512 "socketmodule.c"
        var $48=HEAP[$47]; //@line 4512 "socketmodule.c"
        var $49=($48) + 1; //@line 4512 "socketmodule.c"
        var $50=$46; //@line 4512 "socketmodule.c"
        HEAP[$50]=$49; //@line 4512 "socketmodule.c"
        var $51=HEAP[_socket_timeout]; //@line 4513 "socketmodule.c"
        var $52=$m; //@line 4513 "socketmodule.c"
        var $53=_PyModule_AddObject($52, __str94, $51); //@line 4513 "socketmodule.c"
        var $54=HEAP[_sock_type]; //@line 4514 "socketmodule.c"
        var $55=($54) + 1; //@line 4514 "socketmodule.c"
        HEAP[_sock_type]=$55; //@line 4514 "socketmodule.c"
        var $56=$m; //@line 4515 "socketmodule.c"
        var $57=_PyModule_AddObject($56, __str168, _sock_type); //@line 4515 "socketmodule.c"
        var $58=($57)!=0; //@line 4515 "socketmodule.c"
        if ($58) { __label__ = 10; break; } else { __label__ = 7; break; } //@line 4515 "socketmodule.c"
      case 7: // $bb6
        var $59=HEAP[_sock_type]; //@line 4518 "socketmodule.c"
        var $60=($59) + 1; //@line 4518 "socketmodule.c"
        HEAP[_sock_type]=$60; //@line 4518 "socketmodule.c"
        var $61=$m; //@line 4519 "socketmodule.c"
        var $62=_PyModule_AddObject($61, __str169, _sock_type); //@line 4519 "socketmodule.c"
        var $63=($62)!=0; //@line 4519 "socketmodule.c"
        if ($63) { __label__ = 10; break; } else { __label__ = 8; break; } //@line 4519 "socketmodule.c"
      case 8: // $bb7
        $has_ipv6=__Py_TrueStruct; //@line 4524 "socketmodule.c"
        var $64=$has_ipv6; //@line 4528 "socketmodule.c"
        var $65=$64; //@line 4528 "socketmodule.c"
        var $66=HEAP[$65]; //@line 4528 "socketmodule.c"
        var $67=($66) + 1; //@line 4528 "socketmodule.c"
        var $68=$has_ipv6; //@line 4528 "socketmodule.c"
        var $69=$68; //@line 4528 "socketmodule.c"
        HEAP[$69]=$67; //@line 4528 "socketmodule.c"
        var $70=$m; //@line 4529 "socketmodule.c"
        var $71=$has_ipv6; //@line 4529 "socketmodule.c"
        var $72=_PyModule_AddObject($70, __str170, $71); //@line 4529 "socketmodule.c"
        var $73=_PyCapsule_New(_PySocketModuleAPI, __str171, 0); //@line 4532 "socketmodule.c"
        var $74=$m; //@line 4532 "socketmodule.c"
        var $75=_PyModule_AddObject($74, __str172, $73); //@line 4532 "socketmodule.c"
        var $76=($75)!=0; //@line 4532 "socketmodule.c"
        if ($76) { __label__ = 10; break; } else { __label__ = 9; break; } //@line 4532 "socketmodule.c"
      case 9: // $bb8
        var $77=$m; //@line 4539 "socketmodule.c"
        var $78=_PyModule_AddIntConstant($77, __str173, 0); //@line 4539 "socketmodule.c"
        var $79=$m; //@line 4541 "socketmodule.c"
        var $80=_PyModule_AddIntConstant($79, __str174, 2); //@line 4541 "socketmodule.c"
        var $81=$m; //@line 4543 "socketmodule.c"
        var $82=_PyModule_AddIntConstant($81, __str175, 10); //@line 4543 "socketmodule.c"
        var $83=$m; //@line 4546 "socketmodule.c"
        var $84=_PyModule_AddIntConstant($83, __str176, 1); //@line 4546 "socketmodule.c"
        var $85=$m; //@line 4550 "socketmodule.c"
        var $86=_PyModule_AddIntConstant($85, __str177, 3); //@line 4550 "socketmodule.c"
        var $87=$m; //@line 4553 "socketmodule.c"
        var $88=_PyModule_AddIntConstant($87, __str178, 4); //@line 4553 "socketmodule.c"
        var $89=$m; //@line 4557 "socketmodule.c"
        var $90=_PyModule_AddIntConstant($89, __str179, 5); //@line 4557 "socketmodule.c"
        var $91=$m; //@line 4561 "socketmodule.c"
        var $92=_PyModule_AddIntConstant($91, __str180, 6); //@line 4561 "socketmodule.c"
        var $93=$m; //@line 4565 "socketmodule.c"
        var $94=_PyModule_AddIntConstant($93, __str181, 7); //@line 4565 "socketmodule.c"
        var $95=$m; //@line 4569 "socketmodule.c"
        var $96=_PyModule_AddIntConstant($95, __str182, 8); //@line 4569 "socketmodule.c"
        var $97=$m; //@line 4577 "socketmodule.c"
        var $98=_PyModule_AddIntConstant($97, __str183, 9); //@line 4577 "socketmodule.c"
        var $99=$m; //@line 4580 "socketmodule.c"
        var $100=_PyModule_AddIntConstant($99, __str175, 10); //@line 4580 "socketmodule.c"
        var $101=$m; //@line 4584 "socketmodule.c"
        var $102=_PyModule_AddIntConstant($101, __str184, 11); //@line 4584 "socketmodule.c"
        var $103=$m; //@line 4588 "socketmodule.c"
        var $104=_PyModule_AddIntConstant($103, __str185, 12); //@line 4588 "socketmodule.c"
        var $105=$m; //@line 4592 "socketmodule.c"
        var $106=_PyModule_AddIntConstant($105, __str186, 13); //@line 4592 "socketmodule.c"
        var $107=$m; //@line 4596 "socketmodule.c"
        var $108=_PyModule_AddIntConstant($107, __str187, 14); //@line 4596 "socketmodule.c"
        var $109=$m; //@line 4600 "socketmodule.c"
        var $110=_PyModule_AddIntConstant($109, __str188, 15); //@line 4600 "socketmodule.c"
        var $111=$m; //@line 4604 "socketmodule.c"
        var $112=_PyModule_AddIntConstant($111, __str189, 16); //@line 4604 "socketmodule.c"
        var $113=$m; //@line 4605 "socketmodule.c"
        var $114=_PyModule_AddIntConstant($113, __str190, 0); //@line 4605 "socketmodule.c"
        var $115=$m; //@line 4612 "socketmodule.c"
        var $116=_PyModule_AddIntConstant($115, __str191, 2); //@line 4612 "socketmodule.c"
        var $117=$m; //@line 4613 "socketmodule.c"
        var $118=_PyModule_AddIntConstant($117, __str192, 3); //@line 4613 "socketmodule.c"
        var $119=$m; //@line 4618 "socketmodule.c"
        var $120=_PyModule_AddIntConstant($119, __str193, 5); //@line 4618 "socketmodule.c"
        var $121=$m; //@line 4621 "socketmodule.c"
        var $122=_PyModule_AddIntConstant($121, __str194, 6); //@line 4621 "socketmodule.c"
        var $123=$m; //@line 4629 "socketmodule.c"
        var $124=_PyModule_AddIntConstant($123, __str195, 13); //@line 4629 "socketmodule.c"
        var $125=$m; //@line 4631 "socketmodule.c"
        var $126=_PyModule_AddIntConstant($125, __str196, 14); //@line 4631 "socketmodule.c"
        var $127=$m; //@line 4639 "socketmodule.c"
        var $128=_PyModule_AddIntConstant($127, __str197, 16); //@line 4639 "socketmodule.c"
        var $129=$m; //@line 4643 "socketmodule.c"
        var $130=_PyModule_AddIntConstant($129, __str198, 18); //@line 4643 "socketmodule.c"
        var $131=$m; //@line 4647 "socketmodule.c"
        var $132=_PyModule_AddIntConstant($131, __str199, 19); //@line 4647 "socketmodule.c"
        var $133=$m; //@line 4651 "socketmodule.c"
        var $134=_PyModule_AddIntConstant($133, __str200, 20); //@line 4651 "socketmodule.c"
        var $135=$m; //@line 4655 "socketmodule.c"
        var $136=_PyModule_AddIntConstant($135, __str201, 22); //@line 4655 "socketmodule.c"
        var $137=$m; //@line 4659 "socketmodule.c"
        var $138=_PyModule_AddIntConstant($137, __str202, 23); //@line 4659 "socketmodule.c"
        var $139=$m; //@line 4663 "socketmodule.c"
        var $140=_PyModule_AddIntConstant($139, __str203, 24); //@line 4663 "socketmodule.c"
        var $141=$m; //@line 4667 "socketmodule.c"
        var $142=_PyModule_AddIntConstant($141, __str204, 25); //@line 4667 "socketmodule.c"
        var $143=$m; //@line 4671 "socketmodule.c"
        var $144=_PyModule_AddIntConstant($143, __str205, 26); //@line 4671 "socketmodule.c"
        var $145=$m; //@line 4695 "socketmodule.c"
        var $146=_PyModule_AddIntConstant($145, __str206, 17); //@line 4695 "socketmodule.c"
        var $147=$m; //@line 4698 "socketmodule.c"
        var $148=_PyModule_AddIntConstant($147, __str207, 17); //@line 4698 "socketmodule.c"
        var $149=$m; //@line 4701 "socketmodule.c"
        var $150=_PyModule_AddIntConstant($149, __str208, 0); //@line 4701 "socketmodule.c"
        var $151=$m; //@line 4704 "socketmodule.c"
        var $152=_PyModule_AddIntConstant($151, __str209, 1); //@line 4704 "socketmodule.c"
        var $153=$m; //@line 4707 "socketmodule.c"
        var $154=_PyModule_AddIntConstant($153, __str210, 2); //@line 4707 "socketmodule.c"
        var $155=$m; //@line 4710 "socketmodule.c"
        var $156=_PyModule_AddIntConstant($155, __str211, 3); //@line 4710 "socketmodule.c"
        var $157=$m; //@line 4713 "socketmodule.c"
        var $158=_PyModule_AddIntConstant($157, __str212, 4); //@line 4713 "socketmodule.c"
        var $159=$m; //@line 4716 "socketmodule.c"
        var $160=_PyModule_AddIntConstant($159, __str213, 5); //@line 4716 "socketmodule.c"
        var $161=$m; //@line 4719 "socketmodule.c"
        var $162=_PyModule_AddIntConstant($161, __str214, 6); //@line 4719 "socketmodule.c"
        var $163=$m; //@line 4723 "socketmodule.c"
        var $164=_PyModule_AddIntConstant($163, __str215, 30); //@line 4723 "socketmodule.c"
        var $165=$m; //@line 4726 "socketmodule.c"
        var $166=_PyModule_AddIntConstant($165, __str216, 1); //@line 4726 "socketmodule.c"
        var $167=$m; //@line 4727 "socketmodule.c"
        var $168=_PyModule_AddIntConstant($167, __str217, 2); //@line 4727 "socketmodule.c"
        var $169=$m; //@line 4728 "socketmodule.c"
        var $170=_PyModule_AddIntConstant($169, __str218, 3); //@line 4728 "socketmodule.c"
        var $171=$m; //@line 4730 "socketmodule.c"
        var $172=_PyModule_AddIntConstant($171, __str219, 1); //@line 4730 "socketmodule.c"
        var $173=$m; //@line 4731 "socketmodule.c"
        var $174=_PyModule_AddIntConstant($173, __str220, 2); //@line 4731 "socketmodule.c"
        var $175=$m; //@line 4732 "socketmodule.c"
        var $176=_PyModule_AddIntConstant($175, __str221, 3); //@line 4732 "socketmodule.c"
        var $177=$m; //@line 4735 "socketmodule.c"
        var $178=_PyModule_AddIntConstant($177, __str222, 271); //@line 4735 "socketmodule.c"
        var $179=$m; //@line 4736 "socketmodule.c"
        var $180=_PyModule_AddIntConstant($179, __str223, 127); //@line 4736 "socketmodule.c"
        var $181=$m; //@line 4737 "socketmodule.c"
        var $182=_PyModule_AddIntConstant($181, __str224, 128); //@line 4737 "socketmodule.c"
        var $183=$m; //@line 4738 "socketmodule.c"
        var $184=_PyModule_AddIntConstant($183, __str225, 129); //@line 4738 "socketmodule.c"
        var $185=$m; //@line 4740 "socketmodule.c"
        var $186=_PyModule_AddIntConstant($185, __str226, 130); //@line 4740 "socketmodule.c"
        var $187=$m; //@line 4742 "socketmodule.c"
        var $188=_PyModule_AddIntConstant($187, __str227, 0); //@line 4742 "socketmodule.c"
        var $189=$m; //@line 4744 "socketmodule.c"
        var $190=_PyModule_AddIntConstant($189, __str228, 1); //@line 4744 "socketmodule.c"
        var $191=$m; //@line 4746 "socketmodule.c"
        var $192=_PyModule_AddIntConstant($191, __str229, 2); //@line 4746 "socketmodule.c"
        var $193=$m; //@line 4748 "socketmodule.c"
        var $194=_PyModule_AddIntConstant($193, __str230, 3); //@line 4748 "socketmodule.c"
        var $195=$m; //@line 4752 "socketmodule.c"
        var $196=_PyModule_AddIntConstant($195, __str231, 1); //@line 4752 "socketmodule.c"
        var $197=$m; //@line 4753 "socketmodule.c"
        var $198=_PyModule_AddIntConstant($197, __str232, 2); //@line 4753 "socketmodule.c"
        var $199=$m; //@line 4756 "socketmodule.c"
        var $200=_PyModule_AddIntConstant($199, __str233, 4); //@line 4756 "socketmodule.c"
        var $201=$m; //@line 4758 "socketmodule.c"
        var $202=_PyModule_AddIntConstant($201, __str234, -1); //@line 4758 "socketmodule.c"
        var $203=$m; //@line 4759 "socketmodule.c"
        var $204=_PyModule_AddIntConstant($203, __str235, 1); //@line 4759 "socketmodule.c"
        var $205=$m; //@line 4760 "socketmodule.c"
        var $206=_PyModule_AddIntConstant($205, __str236, 2); //@line 4760 "socketmodule.c"
        var $207=$m; //@line 4761 "socketmodule.c"
        var $208=_PyModule_AddIntConstant($207, __str237, 3); //@line 4761 "socketmodule.c"
        var $209=$m; //@line 4762 "socketmodule.c"
        var $210=_PyModule_AddIntConstant($209, __str238, 0); //@line 4762 "socketmodule.c"
        var $211=$m; //@line 4763 "socketmodule.c"
        var $212=_PyModule_AddIntConstant($211, __str239, 1); //@line 4763 "socketmodule.c"
        var $213=$m; //@line 4767 "socketmodule.c"
        var $214=_PyModule_AddIntConstant($213, __str240, 1); //@line 4767 "socketmodule.c"
        var $215=$m; //@line 4768 "socketmodule.c"
        var $216=_PyModule_AddIntConstant($215, __str241, 2); //@line 4768 "socketmodule.c"
        var $217=$m; //@line 4771 "socketmodule.c"
        var $218=_PyModule_AddIntConstant($217, __str242, 3); //@line 4771 "socketmodule.c"
        var $219=$m; //@line 4772 "socketmodule.c"
        var $220=_PyModule_AddIntConstant($219, __str243, 5); //@line 4772 "socketmodule.c"
        var $221=$m; //@line 4774 "socketmodule.c"
        var $222=_PyModule_AddIntConstant($221, __str244, 4); //@line 4774 "socketmodule.c"
        var $223=$m; //@line 4779 "socketmodule.c"
        var $224=_PyModule_AddIntConstant($223, __str245, 1); //@line 4779 "socketmodule.c"
        var $225=$m; //@line 4782 "socketmodule.c"
        var $226=_PyModule_AddIntConstant($225, __str246, 30); //@line 4782 "socketmodule.c"
        var $227=$m; //@line 4785 "socketmodule.c"
        var $228=_PyModule_AddIntConstant($227, __str247, 2); //@line 4785 "socketmodule.c"
        var $229=$m; //@line 4792 "socketmodule.c"
        var $230=_PyModule_AddIntConstant($229, __str248, 9); //@line 4792 "socketmodule.c"
        var $231=$m; //@line 4795 "socketmodule.c"
        var $232=_PyModule_AddIntConstant($231, __str249, 5); //@line 4795 "socketmodule.c"
        var $233=$m; //@line 4798 "socketmodule.c"
        var $234=_PyModule_AddIntConstant($233, __str250, 6); //@line 4798 "socketmodule.c"
        var $235=$m; //@line 4804 "socketmodule.c"
        var $236=_PyModule_AddIntConstant($235, __str251, 13); //@line 4804 "socketmodule.c"
        var $237=$m; //@line 4807 "socketmodule.c"
        var $238=_PyModule_AddIntConstant($237, __str252, 10); //@line 4807 "socketmodule.c"
        var $239=$m; //@line 4813 "socketmodule.c"
        var $240=_PyModule_AddIntConstant($239, __str253, 7); //@line 4813 "socketmodule.c"
        var $241=$m; //@line 4816 "socketmodule.c"
        var $242=_PyModule_AddIntConstant($241, __str254, 8); //@line 4816 "socketmodule.c"
        var $243=$m; //@line 4819 "socketmodule.c"
        var $244=_PyModule_AddIntConstant($243, __str255, 19); //@line 4819 "socketmodule.c"
        var $245=$m; //@line 4822 "socketmodule.c"
        var $246=_PyModule_AddIntConstant($245, __str256, 18); //@line 4822 "socketmodule.c"
        var $247=$m; //@line 4825 "socketmodule.c"
        var $248=_PyModule_AddIntConstant($247, __str257, 21); //@line 4825 "socketmodule.c"
        var $249=$m; //@line 4828 "socketmodule.c"
        var $250=_PyModule_AddIntConstant($249, __str258, 20); //@line 4828 "socketmodule.c"
        var $251=$m; //@line 4831 "socketmodule.c"
        var $252=_PyModule_AddIntConstant($251, __str259, 4); //@line 4831 "socketmodule.c"
        var $253=$m; //@line 4834 "socketmodule.c"
        var $254=_PyModule_AddIntConstant($253, __str260, 3); //@line 4834 "socketmodule.c"
        var $255=$m; //@line 4842 "socketmodule.c"
        var $256=_PyModule_AddIntConstant($255, __str261, 128); //@line 4842 "socketmodule.c"
        var $257=$m; //@line 4849 "socketmodule.c"
        var $258=_PyModule_AddIntConstant($257, __str262, 1); //@line 4849 "socketmodule.c"
        var $259=$m; //@line 4852 "socketmodule.c"
        var $260=_PyModule_AddIntConstant($259, __str263, 2); //@line 4852 "socketmodule.c"
        var $261=$m; //@line 4855 "socketmodule.c"
        var $262=_PyModule_AddIntConstant($261, __str264, 4); //@line 4855 "socketmodule.c"
        var $263=$m; //@line 4858 "socketmodule.c"
        var $264=_PyModule_AddIntConstant($263, __str265, 64); //@line 4858 "socketmodule.c"
        var $265=$m; //@line 4861 "socketmodule.c"
        var $266=_PyModule_AddIntConstant($265, __str266, 128); //@line 4861 "socketmodule.c"
        var $267=$m; //@line 4864 "socketmodule.c"
        var $268=_PyModule_AddIntConstant($267, __str267, 32); //@line 4864 "socketmodule.c"
        var $269=$m; //@line 4867 "socketmodule.c"
        var $270=_PyModule_AddIntConstant($269, __str268, 8); //@line 4867 "socketmodule.c"
        var $271=$m; //@line 4870 "socketmodule.c"
        var $272=_PyModule_AddIntConstant($271, __str269, 256); //@line 4870 "socketmodule.c"
        var $273=$m; //@line 4881 "socketmodule.c"
        var $274=_PyModule_AddIntConstant($273, __str270, 1); //@line 4881 "socketmodule.c"
        var $275=$m; //@line 4884 "socketmodule.c"
        var $276=_PyModule_AddIntConstant($275, __str271, 0); //@line 4884 "socketmodule.c"
        var $277=$m; //@line 4904 "socketmodule.c"
        var $278=_PyModule_AddIntConstant($277, __str272, 6); //@line 4904 "socketmodule.c"
        var $279=$m; //@line 4911 "socketmodule.c"
        var $280=_PyModule_AddIntConstant($279, __str273, 17); //@line 4911 "socketmodule.c"
        var $281=$m; //@line 4914 "socketmodule.c"
        var $282=_PyModule_AddIntConstant($281, __str274, 0); //@line 4914 "socketmodule.c"
        var $283=$m; //@line 4919 "socketmodule.c"
        var $284=_PyModule_AddIntConstant($283, __str275, 0); //@line 4919 "socketmodule.c"
        var $285=$m; //@line 4922 "socketmodule.c"
        var $286=_PyModule_AddIntConstant($285, __str276, 1); //@line 4922 "socketmodule.c"
        var $287=$m; //@line 4927 "socketmodule.c"
        var $288=_PyModule_AddIntConstant($287, __str277, 2); //@line 4927 "socketmodule.c"
        var $289=$m; //@line 4936 "socketmodule.c"
        var $290=_PyModule_AddIntConstant($289, __str278, 41); //@line 4936 "socketmodule.c"
        var $291=$m; //@line 4939 "socketmodule.c"
        var $292=_PyModule_AddIntConstant($291, __str279, 4); //@line 4939 "socketmodule.c"
        var $293=$m; //@line 4942 "socketmodule.c"
        var $294=_PyModule_AddIntConstant($293, __str280, 6); //@line 4942 "socketmodule.c"
        var $295=$m; //@line 4947 "socketmodule.c"
        var $296=_PyModule_AddIntConstant($295, __str281, 8); //@line 4947 "socketmodule.c"
        var $297=$m; //@line 4950 "socketmodule.c"
        var $298=_PyModule_AddIntConstant($297, __str282, 12); //@line 4950 "socketmodule.c"
        var $299=$m; //@line 4953 "socketmodule.c"
        var $300=_PyModule_AddIntConstant($299, __str283, 17); //@line 4953 "socketmodule.c"
        var $301=$m; //@line 4958 "socketmodule.c"
        var $302=_PyModule_AddIntConstant($301, __str284, 22); //@line 4958 "socketmodule.c"
        var $303=$m; //@line 4967 "socketmodule.c"
        var $304=_PyModule_AddIntConstant($303, __str285, 29); //@line 4967 "socketmodule.c"
        var $305=$m; //@line 4970 "socketmodule.c"
        var $306=_PyModule_AddIntConstant($305, __str278, 41); //@line 4970 "socketmodule.c"
        var $307=$m; //@line 4973 "socketmodule.c"
        var $308=_PyModule_AddIntConstant($307, __str286, 43); //@line 4973 "socketmodule.c"
        var $309=$m; //@line 4976 "socketmodule.c"
        var $310=_PyModule_AddIntConstant($309, __str287, 44); //@line 4976 "socketmodule.c"
        var $311=$m; //@line 4979 "socketmodule.c"
        var $312=_PyModule_AddIntConstant($311, __str288, 46); //@line 4979 "socketmodule.c"
        var $313=$m; //@line 4982 "socketmodule.c"
        var $314=_PyModule_AddIntConstant($313, __str289, 47); //@line 4982 "socketmodule.c"
        var $315=$m; //@line 4985 "socketmodule.c"
        var $316=_PyModule_AddIntConstant($315, __str290, 50); //@line 4985 "socketmodule.c"
        var $317=$m; //@line 4988 "socketmodule.c"
        var $318=_PyModule_AddIntConstant($317, __str291, 51); //@line 4988 "socketmodule.c"
        var $319=$m; //@line 4994 "socketmodule.c"
        var $320=_PyModule_AddIntConstant($319, __str292, 58); //@line 4994 "socketmodule.c"
        var $321=$m; //@line 4997 "socketmodule.c"
        var $322=_PyModule_AddIntConstant($321, __str293, 59); //@line 4997 "socketmodule.c"
        var $323=$m; //@line 5000 "socketmodule.c"
        var $324=_PyModule_AddIntConstant($323, __str294, 60); //@line 5000 "socketmodule.c"
        var $325=$m; //@line 5009 "socketmodule.c"
        var $326=_PyModule_AddIntConstant($325, __str295, 103); //@line 5009 "socketmodule.c"
        var $327=$m; //@line 5022 "socketmodule.c"
        var $328=_PyModule_AddIntConstant($327, __str296, 255); //@line 5022 "socketmodule.c"
        var $329=$m; //@line 5032 "socketmodule.c"
        var $330=_PyModule_AddIntConstant($329, __str297, 1024); //@line 5032 "socketmodule.c"
        var $331=$m; //@line 5039 "socketmodule.c"
        var $332=_PyModule_AddIntConstant($331, __str298, 5000); //@line 5039 "socketmodule.c"
        var $333=$m; //@line 5044 "socketmodule.c"
        var $334=_PyModule_AddIntConstant($333, __str299, 0); //@line 5044 "socketmodule.c"
        var $335=$m; //@line 5049 "socketmodule.c"
        var $336=_PyModule_AddIntConstant($335, __str300, -1); //@line 5049 "socketmodule.c"
        var $337=$m; //@line 5054 "socketmodule.c"
        var $338=_PyModule_AddIntConstant($337, __str301, 2130706433); //@line 5054 "socketmodule.c"
        var $339=$m; //@line 5059 "socketmodule.c"
        var $340=_PyModule_AddIntConstant($339, __str302, -536870912); //@line 5059 "socketmodule.c"
        var $341=$m; //@line 5064 "socketmodule.c"
        var $342=_PyModule_AddIntConstant($341, __str303, -536870911); //@line 5064 "socketmodule.c"
        var $343=$m; //@line 5070 "socketmodule.c"
        var $344=_PyModule_AddIntConstant($343, __str304, -536870657); //@line 5070 "socketmodule.c"
        var $345=$m; //@line 5076 "socketmodule.c"
        var $346=_PyModule_AddIntConstant($345, __str305, -1); //@line 5076 "socketmodule.c"
        var $347=$m; //@line 5083 "socketmodule.c"
        var $348=_PyModule_AddIntConstant($347, __str306, 4); //@line 5083 "socketmodule.c"
        var $349=$m; //@line 5086 "socketmodule.c"
        var $350=_PyModule_AddIntConstant($349, __str307, 3); //@line 5086 "socketmodule.c"
        var $351=$m; //@line 5089 "socketmodule.c"
        var $352=_PyModule_AddIntConstant($351, __str308, 1); //@line 5089 "socketmodule.c"
        var $353=$m; //@line 5092 "socketmodule.c"
        var $354=_PyModule_AddIntConstant($353, __str309, 2); //@line 5092 "socketmodule.c"
        var $355=$m; //@line 5095 "socketmodule.c"
        var $356=_PyModule_AddIntConstant($355, __str310, 6); //@line 5095 "socketmodule.c"
        var $357=$m; //@line 5098 "socketmodule.c"
        var $358=_PyModule_AddIntConstant($357, __str311, 7); //@line 5098 "socketmodule.c"
        var $359=$m; //@line 5104 "socketmodule.c"
        var $360=_PyModule_AddIntConstant($359, __str312, 7); //@line 5104 "socketmodule.c"
        var $361=$m; //@line 5107 "socketmodule.c"
        var $362=_PyModule_AddIntConstant($361, __str313, 32); //@line 5107 "socketmodule.c"
        var $363=$m; //@line 5110 "socketmodule.c"
        var $364=_PyModule_AddIntConstant($363, __str314, 33); //@line 5110 "socketmodule.c"
        var $365=$m; //@line 5113 "socketmodule.c"
        var $366=_PyModule_AddIntConstant($365, __str315, 34); //@line 5113 "socketmodule.c"
        var $367=$m; //@line 5116 "socketmodule.c"
        var $368=_PyModule_AddIntConstant($367, __str316, 35); //@line 5116 "socketmodule.c"
        var $369=$m; //@line 5119 "socketmodule.c"
        var $370=_PyModule_AddIntConstant($369, __str317, 36); //@line 5119 "socketmodule.c"
        var $371=$m; //@line 5122 "socketmodule.c"
        var $372=_PyModule_AddIntConstant($371, __str318, 1); //@line 5122 "socketmodule.c"
        var $373=$m; //@line 5126 "socketmodule.c"
        var $374=_PyModule_AddIntConstant($373, __str319, 1); //@line 5126 "socketmodule.c"
        var $375=$m; //@line 5130 "socketmodule.c"
        var $376=_PyModule_AddIntConstant($375, __str320, 20); //@line 5130 "socketmodule.c"
        var $377=$m; //@line 5135 "socketmodule.c"
        var $378=_PyModule_AddIntConstant($377, __str321, 20); //@line 5135 "socketmodule.c"
        var $379=$m; //@line 5138 "socketmodule.c"
        var $380=_PyModule_AddIntConstant($379, __str322, 21); //@line 5138 "socketmodule.c"
        var $381=$m; //@line 5141 "socketmodule.c"
        var $382=_PyModule_AddIntConstant($381, __str323, 18); //@line 5141 "socketmodule.c"
        var $383=$m; //@line 5144 "socketmodule.c"
        var $384=_PyModule_AddIntConstant($383, __str324, 17); //@line 5144 "socketmodule.c"
        var $385=$m; //@line 5147 "socketmodule.c"
        var $386=_PyModule_AddIntConstant($385, __str325, 19); //@line 5147 "socketmodule.c"
        var $387=$m; //@line 5150 "socketmodule.c"
        var $388=_PyModule_AddIntConstant($387, __str326, 16); //@line 5150 "socketmodule.c"
        var $389=$m; //@line 5154 "socketmodule.c"
        var $390=_PyModule_AddIntConstant($389, __str327, 26); //@line 5154 "socketmodule.c"
        var $391=$m; //@line 5158 "socketmodule.c"
        var $392=_PyModule_AddIntConstant($391, __str328, 7); //@line 5158 "socketmodule.c"
        var $393=$m; //@line 5164 "socketmodule.c"
        var $394=_PyModule_AddIntConstant($393, __str329, 59); //@line 5164 "socketmodule.c"
        var $395=$m; //@line 5167 "socketmodule.c"
        var $396=_PyModule_AddIntConstant($395, __str330, 52); //@line 5167 "socketmodule.c"
        var $397=$m; //@line 5170 "socketmodule.c"
        var $398=_PyModule_AddIntConstant($397, __str331, 54); //@line 5170 "socketmodule.c"
        var $399=$m; //@line 5173 "socketmodule.c"
        var $400=_PyModule_AddIntConstant($399, __str332, 9); //@line 5173 "socketmodule.c"
        var $401=$m; //@line 5179 "socketmodule.c"
        var $402=_PyModule_AddIntConstant($401, __str333, 50); //@line 5179 "socketmodule.c"
        var $403=$m; //@line 5182 "socketmodule.c"
        var $404=_PyModule_AddIntConstant($403, __str334, 58); //@line 5182 "socketmodule.c"
        var $405=$m; //@line 5185 "socketmodule.c"
        var $406=_PyModule_AddIntConstant($405, __str335, 51); //@line 5185 "socketmodule.c"
        var $407=$m; //@line 5188 "socketmodule.c"
        var $408=_PyModule_AddIntConstant($407, __str336, 53); //@line 5188 "socketmodule.c"
        var $409=$m; //@line 5191 "socketmodule.c"
        var $410=_PyModule_AddIntConstant($409, __str337, 49); //@line 5191 "socketmodule.c"
        var $411=$m; //@line 5194 "socketmodule.c"
        var $412=_PyModule_AddIntConstant($411, __str338, 56); //@line 5194 "socketmodule.c"
        var $413=$m; //@line 5197 "socketmodule.c"
        var $414=_PyModule_AddIntConstant($413, __str339, 66); //@line 5197 "socketmodule.c"
        var $415=$m; //@line 5200 "socketmodule.c"
        var $416=_PyModule_AddIntConstant($415, __str340, 57); //@line 5200 "socketmodule.c"
        var $417=$m; //@line 5203 "socketmodule.c"
        var $418=_PyModule_AddIntConstant($417, __str341, 55); //@line 5203 "socketmodule.c"
        var $419=$m; //@line 5206 "socketmodule.c"
        var $420=_PyModule_AddIntConstant($419, __str342, 0); //@line 5206 "socketmodule.c"
        var $421=$m; //@line 5212 "socketmodule.c"
        var $422=_PyModule_AddIntConstant($421, __str343, 67); //@line 5212 "socketmodule.c"
        var $423=$m; //@line 5220 "socketmodule.c"
        var $424=_PyModule_AddIntConstant($423, __str344, 1); //@line 5220 "socketmodule.c"
        var $425=$m; //@line 5223 "socketmodule.c"
        var $426=_PyModule_AddIntConstant($425, __str345, 2); //@line 5223 "socketmodule.c"
        var $427=$m; //@line 5226 "socketmodule.c"
        var $428=_PyModule_AddIntConstant($427, __str346, 3); //@line 5226 "socketmodule.c"
        var $429=$m; //@line 5229 "socketmodule.c"
        var $430=_PyModule_AddIntConstant($429, __str347, 4); //@line 5229 "socketmodule.c"
        var $431=$m; //@line 5232 "socketmodule.c"
        var $432=_PyModule_AddIntConstant($431, __str348, 5); //@line 5232 "socketmodule.c"
        var $433=$m; //@line 5235 "socketmodule.c"
        var $434=_PyModule_AddIntConstant($433, __str349, 6); //@line 5235 "socketmodule.c"
        var $435=$m; //@line 5238 "socketmodule.c"
        var $436=_PyModule_AddIntConstant($435, __str350, 7); //@line 5238 "socketmodule.c"
        var $437=$m; //@line 5241 "socketmodule.c"
        var $438=_PyModule_AddIntConstant($437, __str351, 8); //@line 5241 "socketmodule.c"
        var $439=$m; //@line 5244 "socketmodule.c"
        var $440=_PyModule_AddIntConstant($439, __str352, 9); //@line 5244 "socketmodule.c"
        var $441=$m; //@line 5247 "socketmodule.c"
        var $442=_PyModule_AddIntConstant($441, __str353, 10); //@line 5247 "socketmodule.c"
        var $443=$m; //@line 5250 "socketmodule.c"
        var $444=_PyModule_AddIntConstant($443, __str354, 11); //@line 5250 "socketmodule.c"
        var $445=$m; //@line 5253 "socketmodule.c"
        var $446=_PyModule_AddIntConstant($445, __str355, 12); //@line 5253 "socketmodule.c"
        var $447=$m; //@line 5264 "socketmodule.c"
        var $448=_PyModule_AddIntConstant($447, __str356, -9); //@line 5264 "socketmodule.c"
        var $449=$m; //@line 5267 "socketmodule.c"
        var $450=_PyModule_AddIntConstant($449, __str357, -3); //@line 5267 "socketmodule.c"
        var $451=$m; //@line 5270 "socketmodule.c"
        var $452=_PyModule_AddIntConstant($451, __str358, -1); //@line 5270 "socketmodule.c"
        var $453=$m; //@line 5273 "socketmodule.c"
        var $454=_PyModule_AddIntConstant($453, __str359, -4); //@line 5273 "socketmodule.c"
        var $455=$m; //@line 5276 "socketmodule.c"
        var $456=_PyModule_AddIntConstant($455, __str360, -6); //@line 5276 "socketmodule.c"
        var $457=$m; //@line 5279 "socketmodule.c"
        var $458=_PyModule_AddIntConstant($457, __str361, -10); //@line 5279 "socketmodule.c"
        var $459=$m; //@line 5282 "socketmodule.c"
        var $460=_PyModule_AddIntConstant($459, __str362, -5); //@line 5282 "socketmodule.c"
        var $461=$m; //@line 5285 "socketmodule.c"
        var $462=_PyModule_AddIntConstant($461, __str363, -2); //@line 5285 "socketmodule.c"
        var $463=$m; //@line 5288 "socketmodule.c"
        var $464=_PyModule_AddIntConstant($463, __str364, -12); //@line 5288 "socketmodule.c"
        var $465=$m; //@line 5291 "socketmodule.c"
        var $466=_PyModule_AddIntConstant($465, __str365, -8); //@line 5291 "socketmodule.c"
        var $467=$m; //@line 5294 "socketmodule.c"
        var $468=_PyModule_AddIntConstant($467, __str366, -7); //@line 5294 "socketmodule.c"
        var $469=$m; //@line 5297 "socketmodule.c"
        var $470=_PyModule_AddIntConstant($469, __str367, -11); //@line 5297 "socketmodule.c"
        var $471=$m; //@line 5309 "socketmodule.c"
        var $472=_PyModule_AddIntConstant($471, __str368, 1); //@line 5309 "socketmodule.c"
        var $473=$m; //@line 5312 "socketmodule.c"
        var $474=_PyModule_AddIntConstant($473, __str369, 2); //@line 5312 "socketmodule.c"
        var $475=$m; //@line 5315 "socketmodule.c"
        var $476=_PyModule_AddIntConstant($475, __str370, 4); //@line 5315 "socketmodule.c"
        var $477=$m; //@line 5318 "socketmodule.c"
        var $478=_PyModule_AddIntConstant($477, __str371, 1024); //@line 5318 "socketmodule.c"
        var $479=$m; //@line 5324 "socketmodule.c"
        var $480=_PyModule_AddIntConstant($479, __str372, 16); //@line 5324 "socketmodule.c"
        var $481=$m; //@line 5330 "socketmodule.c"
        var $482=_PyModule_AddIntConstant($481, __str373, 32); //@line 5330 "socketmodule.c"
        var $483=$m; //@line 5333 "socketmodule.c"
        var $484=_PyModule_AddIntConstant($483, __str374, 8); //@line 5333 "socketmodule.c"
        var $485=$m; //@line 5339 "socketmodule.c"
        var $486=_PyModule_AddIntConstant($485, __str375, 1025); //@line 5339 "socketmodule.c"
        var $487=$m; //@line 5342 "socketmodule.c"
        var $488=_PyModule_AddIntConstant($487, __str376, 32); //@line 5342 "socketmodule.c"
        var $489=$m; //@line 5345 "socketmodule.c"
        var $490=_PyModule_AddIntConstant($489, __str377, 4); //@line 5345 "socketmodule.c"
        var $491=$m; //@line 5348 "socketmodule.c"
        var $492=_PyModule_AddIntConstant($491, __str378, 1); //@line 5348 "socketmodule.c"
        var $493=$m; //@line 5351 "socketmodule.c"
        var $494=_PyModule_AddIntConstant($493, __str379, 8); //@line 5351 "socketmodule.c"
        var $495=$m; //@line 5354 "socketmodule.c"
        var $496=_PyModule_AddIntConstant($495, __str380, 2); //@line 5354 "socketmodule.c"
        var $497=$m; //@line 5357 "socketmodule.c"
        var $498=_PyModule_AddIntConstant($497, __str381, 16); //@line 5357 "socketmodule.c"
        var $499=$m; //@line 5362 "socketmodule.c"
        var $500=_PyModule_AddIntConstant($499, __str382, 0); //@line 5362 "socketmodule.c"
        var $501=$m; //@line 5369 "socketmodule.c"
        var $502=_PyModule_AddIntConstant($501, __str383, 1); //@line 5369 "socketmodule.c"
        var $503=$m; //@line 5376 "socketmodule.c"
        var $504=_PyModule_AddIntConstant($503, __str384, 2); //@line 5376 "socketmodule.c"
        __label__ = 10; break; //@line 5376 "socketmodule.c"
      case 10: // $return
        ;
        return; //@line 4480 "socketmodule.c"
      default: assert(0, "bad label: " + __label__);
    }
  }
  Module["_init_socket"] = _init_socket;
FUNCTION_TABLE = FUNCTION_TABLE.concat([0,0,_set_error,0,_fclose,0,_sock_accept,0,_sock_bind,0,_sock_close,0,_sock_connect,0,_sock_connect_ex,0,_sock_dup,0,_sock_fileno,0,_sock_getpeername,0,_sock_getsockname,0,_sock_getsockopt,0,_sock_listen,0,_sock_makefile,0,_sock_recv,0,_sock_recv_into,0,_sock_recvfrom,0,_sock_recvfrom_into,0,_sock_send,0,_sock_sendall,0,_sock_sendto,0,_sock_setblocking,0,_sock_settimeout,0,_sock_gettimeout,0,_sock_setsockopt,0,_sock_shutdown,0,_sock_dealloc,0,_sock_repr,0,_PyObject_GenericGetAttr,0,_sock_initobj,0,_PyType_GenericAlloc,0,_sock_new,0,_PyObject_Free,0,_socket_gethostbyname,0,_socket_gethostbyname_ex,0,_socket_gethostbyaddr,0,_socket_gethostname,0,_socket_getservbyname,0,_socket_getservbyport,0,_socket_getprotobyname,0,_socket_fromfd,0,_socket_socketpair,0,_socket_ntohs,0,_socket_ntohl,0,_socket_htons,0,_socket_htonl,0,_socket_inet_aton,0,_socket_inet_ntoa,0,_socket_inet_pton,0,_socket_inet_ntop,0,_socket_getaddrinfo,0,_socket_getnameinfo,0,_socket_getdefaulttimeout,0,_socket_setdefaulttimeout,0]);

// === Auto-generated postamble setup entry stuff ===

function run(args) {
  
_sock_doc=allocate([115,111,99,107,101,116,40,91,102,97,109,105,108,121,91,44,32,116,121,112,101,91,44,32,112,114,111,116,111,93,93,93,41,32,45,62,32,115,111,99,107,101,116,32,111,98,106,101,99,116,10,10,79,112,101,110,32,97,32,115,111,99,107,101,116,32,111,102,32,116,104,101,32,103,105,118,101,110,32,116,121,112,101,46,32,32,84,104,101,32,102,97,109,105,108,121,32,97,114,103,117,109,101,110,116,32,115,112,101,99,105,102,105,101,115,32,116,104,101,10,97,100,100,114,101,115,115,32,102,97,109,105,108,121,59,32,105,116,32,100,101,102,97,117,108,116,115,32,116,111,32,65,70,95,73,78,69,84,46,32,32,84,104,101,32,116,121,112,101,32,97,114,103,117,109,101,110,116,32,115,112,101,99,105,102,105,101,115,10,119,104,101,116,104,101,114,32,116,104,105,115,32,105,115,32,97,32,115,116,114,101,97,109,32,40,83,79,67,75,95,83,84,82,69,65,77,44,32,116,104,105,115,32,105,115,32,116,104,101,32,100,101,102,97,117,108,116,41,10,111,114,32,100,97,116,97,103,114,97,109,32,40,83,79,67,75,95,68,71,82,65,77,41,32,115,111,99,107,101,116,46,32,32,84,104,101,32,112,114,111,116,111,99,111,108,32,97,114,103,117,109,101,110,116,32,100,101,102,97,117,108,116,115,32,116,111,32,48,44,10,115,112,101,99,105,102,121,105,110,103,32,116,104,101,32,100,101,102,97,117,108,116,32,112,114,111,116,111,99,111,108,46,32,32,75,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,115,32,97,114,101,32,97,99,99,101,112,116,101,100,46,10,10,65,32,115,111,99,107,101,116,32,111,98,106,101,99,116,32,114,101,112,114,101,115,101,110,116,115,32,111,110,101,32,101,110,100,112,111,105,110,116,32,111,102,32,97,32,110,101,116,119,111,114,107,32,99,111,110,110,101,99,116,105,111,110,46,10,10,77,101,116,104,111,100,115,32,111,102,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,32,40,107,101,121,119,111,114,100,32,97,114,103,117,109,101,110,116,115,32,110,111,116,32,97,108,108,111,119,101,100,41,58,10,10,97,99,99,101,112,116,40,41,32,45,45,32,97,99,99,101,112,116,32,97,32,99,111,110,110,101,99,116,105,111,110,44,32,114,101,116,117,114,110,105,110,103,32,110,101,119,32,115,111,99,107,101,116,32,97,110,100,32,99,108,105,101,110,116,32,97,100,100,114,101,115,115,10,98,105,110,100,40,97,100,100,114,41,32,45,45,32,98,105,110,100,32,116,104,101,32,115,111,99,107,101,116,32,116,111,32,97,32,108,111,99,97,108,32,97,100,100,114,101,115,115,10,99,108,111,115,101,40,41,32,45,45,32,99,108,111,115,101,32,116,104,101,32,115,111,99,107,101,116,10,99,111,110,110,101,99,116,40,97,100,100,114,41,32,45,45,32,99,111,110,110,101,99,116,32,116,104,101,32,115,111,99,107,101,116,32,116,111,32,97,32,114,101,109,111,116,101,32,97,100,100,114,101,115,115,10,99,111,110,110,101,99,116,95,101,120,40,97,100,100,114,41,32,45,45,32,99,111,110,110,101,99,116,44,32,114,101,116,117,114,110,32,97,110,32,101,114,114,111,114,32,99,111,100,101,32,105,110,115,116,101,97,100,32,111,102,32,97,110,32,101,120,99,101,112,116,105,111,110,10,100,117,112,40,41,32,45,45,32,114,101,116,117,114,110,32,97,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,32,105,100,101,110,116,105,99,97,108,32,116,111,32,116,104,101,32,99,117,114,114,101,110,116,32,111,110,101,32,91,42,93,10,102,105,108,101,110,111,40,41,32,45,45,32,114,101,116,117,114,110,32,117,110,100,101,114,108,121,105,110,103,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,10,103,101,116,112,101,101,114,110,97,109,101,40,41,32,45,45,32,114,101,116,117,114,110,32,114,101,109,111,116,101,32,97,100,100,114,101,115,115,32,91,42,93,10,103,101,116,115,111,99,107,110,97,109,101,40,41,32,45,45,32,114,101,116,117,114,110,32,108,111,99,97,108,32,97,100,100,114,101,115,115,10,103,101,116,115,111,99,107,111,112,116,40,108,101,118,101,108,44,32,111,112,116,110,97,109,101,91,44,32,98,117,102,108,101,110,93,41,32,45,45,32,103,101,116,32,115,111,99,107,101,116,32,111,112,116,105,111,110,115,10,103,101,116,116,105,109,101,111,117,116,40,41,32,45,45,32,114,101,116,117,114,110,32,116,105,109,101,111,117,116,32,111,114,32,78,111,110,101,10,108,105,115,116,101,110,40,110,41,32,45,45,32,115,116,97,114,116,32,108,105,115,116,101,110,105,110,103,32,102,111,114,32,105,110,99,111,109,105,110,103,32,99,111,110,110,101,99,116,105,111,110,115,10,109,97,107,101,102,105,108,101,40,91,109,111,100,101,44,32,91,98,117,102,115,105,122,101,93,93,41,32,45,45,32,114,101,116,117,114,110,32,97,32,102,105,108,101,32,111,98,106,101,99,116,32,102,111,114,32,116,104,101,32,115,111,99,107,101,116,32,91,42,93,10,114,101,99,118,40,98,117,102,108,101,110,91,44,32,102,108,97,103,115,93,41,32,45,45,32,114,101,99,101,105,118,101,32,100,97,116,97,10,114,101,99,118,95,105,110,116,111,40,98,117,102,102,101,114,91,44,32,110,98,121,116,101,115,91,44,32,102,108,97,103,115,93,93,41,32,45,45,32,114,101,99,101,105,118,101,32,100,97,116,97,32,40,105,110,116,111,32,97,32,98,117,102,102,101,114,41,10,114,101,99,118,102,114,111,109,40,98,117,102,108,101,110,91,44,32,102,108,97,103,115,93,41,32,45,45,32,114,101,99,101,105,118,101,32,100,97,116,97,32,97,110,100,32,115,101,110,100,101,114,39,115,32,97,100,100,114,101,115,115,10,114,101,99,118,102,114,111,109,95,105,110,116,111,40,98,117,102,102,101,114,91,44,32,110,98,121,116,101,115,44,32,91,44,32,102,108,97,103,115,93,41,10,32,32,45,45,32,114,101,99,101,105,118,101,32,100,97,116,97,32,97,110,100,32,115,101,110,100,101,114,39,115,32,97,100,100,114,101,115,115,32,40,105,110,116,111,32,97,32,98,117,102,102,101,114,41,10,115,101,110,100,97,108,108,40,100,97,116,97,91,44,32,102,108,97,103,115,93,41,32,45,45,32,115,101,110,100,32,97,108,108,32,100,97,116,97,10,115,101,110,100,40,100,97,116,97,91,44,32,102,108,97,103,115,93,41,32,45,45,32,115,101,110,100,32,100,97,116,97,44,32,109,97,121,32,110,111,116,32,115,101,110,100,32,97,108,108,32,111,102,32,105,116,10,115,101,110,100,116,111,40,100,97,116,97,91,44,32,102,108,97,103,115,93,44,32,97,100,100,114,41,32,45,45,32,115,101,110,100,32,100,97,116,97,32,116,111,32,97,32,103,105,118,101,110,32,97,100,100,114,101,115,115,10,115,101,116,98,108,111,99,107,105,110,103,40,48,32,124,32,49,41,32,45,45,32,115,101,116,32,111,114,32,99,108,101,97,114,32,116,104,101,32,98,108,111,99,107,105,110,103,32,73,47,79,32,102,108,97,103,10,115,101,116,115,111,99,107,111,112,116,40,108,101,118,101,108,44,32,111,112,116,110,97,109,101,44,32,118,97,108,117,101,41,32,45,45,32,115,101,116,32,115,111,99,107,101,116,32,111,112,116,105,111,110,115,10,115,101,116,116,105,109,101,111,117,116,40,78,111,110,101,32,124,32,102,108,111,97,116,41,32,45,45,32,115,101,116,32,111,114,32,99,108,101,97,114,32,116,104,101,32,116,105,109,101,111,117,116,10,115,104,117,116,100,111,119,110,40,104,111,119,41,32,45,45,32,115,104,117,116,32,100,111,119,110,32,116,114,97,102,102,105,99,32,105,110,32,111,110,101,32,111,114,32,98,111,116,104,32,100,105,114,101,99,116,105,111,110,115,10,10,32,91,42,93,32,110,111,116,32,97,118,97,105,108,97,98,108,101,32,111,110,32,97,108,108,32,112,108,97,116,102,111,114,109,115,33,0] /* socket([family[, typ */, "i8", ALLOC_NORMAL);
_socket_error=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str1=allocate([40,105,115,41,0] /* (is)\00 */, "i8", ALLOC_NORMAL);
_socket_herror=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_socket_gaierror=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
_defaulttimeout=allocate([-1], ["double",0,0,0,0,0,0,0,0], ALLOC_NORMAL);
__str2=allocate([48,0] /* 0\00 */, "i8", ALLOC_NORMAL);
__str3=allocate([117,110,115,117,112,112,111,114,116,101,100,32,97,100,100,114,101,115,115,32,102,97,109,105,108,121,0] /* unsupported address  */, "i8", ALLOC_NORMAL);
__str4=allocate([119,105,108,100,99,97,114,100,32,114,101,115,111,108,118,101,100,32,116,111,32,109,117,108,116,105,112,108,101,32,97,100,100,114,101,115,115,0] /* wildcard resolved to */, "i8", ALLOC_NORMAL);
__str5=allocate([60,98,114,111,97,100,99,97,115,116,62,0] /* <broadcast>\00 */, "i8", ALLOC_NORMAL);
__str6=allocate([97,100,100,114,101,115,115,32,102,97,109,105,108,121,32,109,105,115,109,97,116,99,104,101,100,0] /* address family misma */, "i8", ALLOC_NORMAL);
__str7=allocate([37,100,46,37,100,46,37,100,46,37,100,37,99,0] /* %d.%d.%d.%d%c\00 */, "i8", ALLOC_NORMAL);
__str8=allocate([117,110,107,110,111,119,110,32,97,100,100,114,101,115,115,32,102,97,109,105,108,121,0] /* unknown address fami */, "i8", ALLOC_NORMAL);
__str9=allocate([79,105,0] /* Oi\00 */, "i8", ALLOC_NORMAL);
__str10=allocate([73,73,0] /* II\00 */, "i8", ALLOC_NORMAL);
__str11=allocate([79,105,105,105,0] /* Oiii\00 */, "i8", ALLOC_NORMAL);
__str12=allocate(1, "i8", ALLOC_NORMAL);
__str13=allocate([115,104,98,104,115,35,0] /* shbhs#\00 */, "i8", ALLOC_NORMAL);
__str14=allocate([73,73,73,73,73,0] /* IIIII\00 */, "i8", ALLOC_NORMAL);
__str15=allocate([73,110,118,97,108,105,100,32,97,100,100,114,101,115,115,32,116,121,112,101,0] /* Invalid address type */, "i8", ALLOC_NORMAL);
__str16=allocate([105,115,35,0] /* is#\00 */, "i8", ALLOC_NORMAL);
__str17=allocate([116,35,0] /* t#\00 */, "i8", ALLOC_NORMAL);
__str18=allocate([65,70,95,85,78,73,88,32,112,97,116,104,32,116,111,111,32,108,111,110,103,0] /* AF_UNIX path too lon */, "i8", ALLOC_NORMAL);
__str19=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,65,70,95,78,69,84,76,73,78,75,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,116,117,112,108,101,44,32,110,111,116,32,37,46,53,48,48,115,0] /* getsockaddrarg: AF_N */, "i8", ALLOC_NORMAL);
__str20=allocate([73,73,58,103,101,116,115,111,99,107,97,100,100,114,97,114,103,0] /* II:getsockaddrarg\00 */, "i8", ALLOC_NORMAL);
__str21=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,65,70,95,73,78,69,84,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,116,117,112,108,101,44,32,110,111,116,32,37,46,53,48,48,115,0] /* getsockaddrarg: AF_I */, "i8", ALLOC_NORMAL);
__str22=allocate([101,116,105,58,103,101,116,115,111,99,107,97,100,100,114,97,114,103,0] /* eti:getsockaddrarg\0 */, "i8", ALLOC_NORMAL);
__str23=allocate([105,100,110,97,0] /* idna\00 */, "i8", ALLOC_NORMAL);
__str24=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,112,111,114,116,32,109,117,115,116,32,98,101,32,48,45,54,53,53,51,53,46,0] /* getsockaddrarg: port */, "i8", ALLOC_NORMAL);
__str25=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,65,70,95,73,78,69,84,54,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,116,117,112,108,101,44,32,110,111,116,32,37,46,53,48,48,115,0] /* getsockaddrarg: AF_I */, "i8", ALLOC_NORMAL);
__str26=allocate([101,116,105,124,105,105,0] /* eti|ii\00 */, "i8", ALLOC_NORMAL);
__str27=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,65,70,95,80,65,67,75,69,84,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,116,117,112,108,101,44,32,110,111,116,32,37,46,53,48,48,115,0] /* getsockaddrarg: AF_P */, "i8", ALLOC_NORMAL);
__str28=allocate([115,105,124,105,105,115,35,0] /* si|iis#\00 */, "i8", ALLOC_NORMAL);
__str29=allocate([72,97,114,100,119,97,114,101,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,56,32,98,121,116,101,115,32,111,114,32,108,101,115,115,0] /* Hardware address mus */, "i8", ALLOC_NORMAL);
__str30=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,112,114,111,116,111,78,117,109,98,101,114,32,109,117,115,116,32,98,101,32,48,45,54,53,53,51,53,46,0] /* getsockaddrarg: prot */, "i8", ALLOC_NORMAL);
__str31=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,65,70,95,84,73,80,67,32,97,100,100,114,101,115,115,32,109,117,115,116,32,98,101,32,116,117,112,108,101,44,32,110,111,116,32,37,46,53,48,48,115,0] /* getsockaddrarg: AF_T */, "i8", ALLOC_NORMAL);
__str32=allocate([73,73,73,73,124,73,59,73,110,118,97,108,105,100,32,84,73,80,67,32,97,100,100,114,101,115,115,32,102,111,114,109,97,116,0] /* IIII|I;Invalid TIPC  */, "i8", ALLOC_NORMAL);
__str33=allocate([103,101,116,115,111,99,107,97,100,100,114,97,114,103,58,32,98,97,100,32,102,97,109,105,108,121,0] /* getsockaddrarg: bad  */, "i8", ALLOC_NORMAL);
__str34=allocate([103,101,116,115,111,99,107,97,100,100,114,108,101,110,58,32,98,97,100,32,102,97,109,105,108,121,0] /* getsockaddrlen: bad  */, "i8", ALLOC_NORMAL);
_socket_timeout=allocate(1, "%struct.PyObject*", ALLOC_NORMAL);
__str35=allocate([116,105,109,101,100,32,111,117,116,0] /* timed out\00 */, "i8", ALLOC_NORMAL);
_accept_doc=allocate([97,99,99,101,112,116,40,41,32,45,62,32,40,115,111,99,107,101,116,32,111,98,106,101,99,116,44,32,97,100,100,114,101,115,115,32,105,110,102,111,41,10,10,87,97,105,116,32,102,111,114,32,97,110,32,105,110,99,111,109,105,110,103,32,99,111,110,110,101,99,116,105,111,110,46,32,32,82,101,116,117,114,110,32,97,32,110,101,119,32,115,111,99,107,101,116,32,114,101,112,114,101,115,101,110,116,105,110,103,32,116,104,101,10,99,111,110,110,101,99,116,105,111,110,44,32,97,110,100,32,116,104,101,32,97,100,100,114,101,115,115,32,111,102,32,116,104,101,32,99,108,105,101,110,116,46,32,32,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,10,105,110,102,111,32,105,115,32,97,32,112,97,105,114,32,40,104,111,115,116,97,100,100,114,44,32,112,111,114,116,41,46,0] /* accept() -> (socket  */, "i8", ALLOC_NORMAL);
_setblocking_doc=allocate([115,101,116,98,108,111,99,107,105,110,103,40,102,108,97,103,41,10,10,83,101,116,32,116,104,101,32,115,111,99,107,101,116,32,116,111,32,98,108,111,99,107,105,110,103,32,40,102,108,97,103,32,105,115,32,116,114,117,101,41,32,111,114,32,110,111,110,45,98,108,111,99,107,105,110,103,32,40,102,97,108,115,101,41,46,10,115,101,116,98,108,111,99,107,105,110,103,40,84,114,117,101,41,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,115,101,116,116,105,109,101,111,117,116,40,78,111,110,101,41,59,10,115,101,116,98,108,111,99,107,105,110,103,40,70,97,108,115,101,41,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,115,101,116,116,105,109,101,111,117,116,40,48,46,48,41,46,0] /* setblocking(flag)\0A */, "i8", ALLOC_NORMAL);
__str36=allocate([84,105,109,101,111,117,116,32,118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* Timeout value out of */, "i8", ALLOC_NORMAL);
_settimeout_doc=allocate([115,101,116,116,105,109,101,111,117,116,40,116,105,109,101,111,117,116,41,10,10,83,101,116,32,97,32,116,105,109,101,111,117,116,32,111,110,32,115,111,99,107,101,116,32,111,112,101,114,97,116,105,111,110,115,46,32,32,39,116,105,109,101,111,117,116,39,32,99,97,110,32,98,101,32,97,32,102,108,111,97,116,44,10,103,105,118,105,110,103,32,105,110,32,115,101,99,111,110,100,115,44,32,111,114,32,78,111,110,101,46,32,32,83,101,116,116,105,110,103,32,97,32,116,105,109,101,111,117,116,32,111,102,32,78,111,110,101,32,100,105,115,97,98,108,101,115,10,116,104,101,32,116,105,109,101,111,117,116,32,102,101,97,116,117,114,101,32,97,110,100,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,115,101,116,98,108,111,99,107,105,110,103,40,49,41,46,10,83,101,116,116,105,110,103,32,97,32,116,105,109,101,111,117,116,32,111,102,32,122,101,114,111,32,105,115,32,116,104,101,32,115,97,109,101,32,97,115,32,115,101,116,98,108,111,99,107,105,110,103,40,48,41,46,0] /* settimeout(timeout)\ */, "i8", ALLOC_NORMAL);
_gettimeout_doc=allocate([103,101,116,116,105,109,101,111,117,116,40,41,32,45,62,32,116,105,109,101,111,117,116,10,10,82,101,116,117,114,110,115,32,116,104,101,32,116,105,109,101,111,117,116,32,105,110,32,102,108,111,97,116,105,110,103,32,115,101,99,111,110,100,115,32,97,115,115,111,99,105,97,116,101,100,32,119,105,116,104,32,115,111,99,107,101,116,32,10,111,112,101,114,97,116,105,111,110,115,46,32,65,32,116,105,109,101,111,117,116,32,111,102,32,78,111,110,101,32,105,110,100,105,99,97,116,101,115,32,116,104,97,116,32,116,105,109,101,111,117,116,115,32,111,110,32,115,111,99,107,101,116,32,10,111,112,101,114,97,116,105,111,110,115,32,97,114,101,32,100,105,115,97,98,108,101,100,46,0] /* gettimeout() -> time */, "i8", ALLOC_NORMAL);
__str37=allocate([105,105,105,58,115,101,116,115,111,99,107,111,112,116,0] /* iii:setsockopt\00 */, "i8", ALLOC_NORMAL);
__str38=allocate([105,105,115,35,58,115,101,116,115,111,99,107,111,112,116,0] /* iis#:setsockopt\00 */, "i8", ALLOC_NORMAL);
_setsockopt_doc=allocate([115,101,116,115,111,99,107,111,112,116,40,108,101,118,101,108,44,32,111,112,116,105,111,110,44,32,118,97,108,117,101,41,10,10,83,101,116,32,97,32,115,111,99,107,101,116,32,111,112,116,105,111,110,46,32,32,83,101,101,32,116,104,101,32,85,110,105,120,32,109,97,110,117,97,108,32,102,111,114,32,108,101,118,101,108,32,97,110,100,32,111,112,116,105,111,110,46,10,84,104,101,32,118,97,108,117,101,32,97,114,103,117,109,101,110,116,32,99,97,110,32,101,105,116,104,101,114,32,98,101,32,97,110,32,105,110,116,101,103,101,114,32,111,114,32,97,32,115,116,114,105,110,103,46,0] /* setsockopt(level, op */, "i8", ALLOC_NORMAL);
__str39=allocate([105,105,124,105,58,103,101,116,115,111,99,107,111,112,116,0] /* ii|i:getsockopt\00 */, "i8", ALLOC_NORMAL);
__str40=allocate([103,101,116,115,111,99,107,111,112,116,32,98,117,102,108,101,110,32,111,117,116,32,111,102,32,114,97,110,103,101,0] /* getsockopt buflen ou */, "i8", ALLOC_NORMAL);
_getsockopt_doc=allocate([103,101,116,115,111,99,107,111,112,116,40,108,101,118,101,108,44,32,111,112,116,105,111,110,91,44,32,98,117,102,102,101,114,115,105,122,101,93,41,32,45,62,32,118,97,108,117,101,10,10,71,101,116,32,97,32,115,111,99,107,101,116,32,111,112,116,105,111,110,46,32,32,83,101,101,32,116,104,101,32,85,110,105,120,32,109,97,110,117,97,108,32,102,111,114,32,108,101,118,101,108,32,97,110,100,32,111,112,116,105,111,110,46,10,73,102,32,97,32,110,111,110,122,101,114,111,32,98,117,102,102,101,114,115,105,122,101,32,97,114,103,117,109,101,110,116,32,105,115,32,103,105,118,101,110,44,32,116,104,101,32,114,101,116,117,114,110,32,118,97,108,117,101,32,105,115,32,97,10,115,116,114,105,110,103,32,111,102,32,116,104,97,116,32,108,101,110,103,116,104,59,32,111,116,104,101,114,119,105,115,101,32,105,116,32,105,115,32,97,110,32,105,110,116,101,103,101,114,46,0] /* getsockopt(level, op */, "i8", ALLOC_NORMAL);
_bind_doc=allocate([98,105,110,100,40,97,100,100,114,101,115,115,41,10,10,66,105,110,100,32,116,104,101,32,115,111,99,107,101,116,32,116,111,32,97,32,108,111,99,97,108,32,97,100,100,114,101,115,115,46,32,32,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,32,105,115,32,97,10,112,97,105,114,32,40,104,111,115,116,44,32,112,111,114,116,41,59,32,116,104,101,32,104,111,115,116,32,109,117,115,116,32,114,101,102,101,114,32,116,111,32,116,104,101,32,108,111,99,97,108,32,104,111,115,116,46,32,70,111,114,32,114,97,119,32,112,97,99,107,101,116,10,115,111,99,107,101,116,115,32,116,104,101,32,97,100,100,114,101,115,115,32,105,115,32,97,32,116,117,112,108,101,32,40,105,102,110,97,109,101,44,32,112,114,111,116,111,32,91,44,112,107,116,116,121,112,101,32,91,44,104,97,116,121,112,101,93,93,41,0] /* bind(address)\0A\0AB */, "i8", ALLOC_NORMAL);
_close_doc=allocate([99,108,111,115,101,40,41,10,10,67,108,111,115,101,32,116,104,101,32,115,111,99,107,101,116,46,32,32,73,116,32,99,97,110,110,111,116,32,98,101,32,117,115,101,100,32,97,102,116,101,114,32,116,104,105,115,32,99,97,108,108,46,0] /* close()\0A\0AClose t */, "i8", ALLOC_NORMAL);
_connect_doc=allocate([99,111,110,110,101,99,116,40,97,100,100,114,101,115,115,41,10,10,67,111,110,110,101,99,116,32,116,104,101,32,115,111,99,107,101,116,32,116,111,32,97,32,114,101,109,111,116,101,32,97,100,100,114,101,115,115,46,32,32,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,10,105,115,32,97,32,112,97,105,114,32,40,104,111,115,116,44,32,112,111,114,116,41,46,0] /* connect(address)\0A\ */, "i8", ALLOC_NORMAL);
_connect_ex_doc=allocate([99,111,110,110,101,99,116,95,101,120,40,97,100,100,114,101,115,115,41,32,45,62,32,101,114,114,110,111,10,10,84,104,105,115,32,105,115,32,108,105,107,101,32,99,111,110,110,101,99,116,40,97,100,100,114,101,115,115,41,44,32,98,117,116,32,114,101,116,117,114,110,115,32,97,110,32,101,114,114,111,114,32,99,111,100,101,32,40,116,104,101,32,101,114,114,110,111,32,118,97,108,117,101,41,10,105,110,115,116,101,97,100,32,111,102,32,114,97,105,115,105,110,103,32,97,110,32,101,120,99,101,112,116,105,111,110,32,119,104,101,110,32,97,110,32,101,114,114,111,114,32,111,99,99,117,114,115,46,0] /* connect_ex(address)  */, "i8", ALLOC_NORMAL);
_fileno_doc=allocate([102,105,108,101,110,111,40,41,32,45,62,32,105,110,116,101,103,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,105,110,116,101,103,101,114,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,111,102,32,116,104,101,32,115,111,99,107,101,116,46,0] /* fileno() -> integer\ */, "i8", ALLOC_NORMAL);
_dup_doc=allocate([100,117,112,40,41,32,45,62,32,115,111,99,107,101,116,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,32,99,111,110,110,101,99,116,101,100,32,116,111,32,116,104,101,32,115,97,109,101,32,115,121,115,116,101,109,32,114,101,115,111,117,114,99,101,46,0] /* dup() -> socket obje */, "i8", ALLOC_NORMAL);
_getsockname_doc=allocate([103,101,116,115,111,99,107,110,97,109,101,40,41,32,45,62,32,97,100,100,114,101,115,115,32,105,110,102,111,10,10,82,101,116,117,114,110,32,116,104,101,32,97,100,100,114,101,115,115,32,111,102,32,116,104,101,32,108,111,99,97,108,32,101,110,100,112,111,105,110,116,46,32,32,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,10,105,110,102,111,32,105,115,32,97,32,112,97,105,114,32,40,104,111,115,116,97,100,100,114,44,32,112,111,114,116,41,46,0] /* getsockname() -> add */, "i8", ALLOC_NORMAL);
_getpeername_doc=allocate([103,101,116,112,101,101,114,110,97,109,101,40,41,32,45,62,32,97,100,100,114,101,115,115,32,105,110,102,111,10,10,82,101,116,117,114,110,32,116,104,101,32,97,100,100,114,101,115,115,32,111,102,32,116,104,101,32,114,101,109,111,116,101,32,101,110,100,112,111,105,110,116,46,32,32,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,10,105,110,102,111,32,105,115,32,97,32,112,97,105,114,32,40,104,111,115,116,97,100,100,114,44,32,112,111,114,116,41,46,0] /* getpeername() -> add */, "i8", ALLOC_NORMAL);
_listen_doc=allocate([108,105,115,116,101,110,40,98,97,99,107,108,111,103,41,10,10,69,110,97,98,108,101,32,97,32,115,101,114,118,101,114,32,116,111,32,97,99,99,101,112,116,32,99,111,110,110,101,99,116,105,111,110,115,46,32,32,84,104,101,32,98,97,99,107,108,111,103,32,97,114,103,117,109,101,110,116,32,109,117,115,116,32,98,101,32,97,116,10,108,101,97,115,116,32,48,32,40,105,102,32,105,116,32,105,115,32,108,111,119,101,114,44,32,105,116,32,105,115,32,115,101,116,32,116,111,32,48,41,59,32,105,116,32,115,112,101,99,105,102,105,101,115,32,116,104,101,32,110,117,109,98,101,114,32,111,102,10,117,110,97,99,99,101,112,116,101,100,32,99,111,110,110,101,99,116,105,111,110,115,32,116,104,97,116,32,116,104,101,32,115,121,115,116,101,109,32,119,105,108,108,32,97,108,108,111,119,32,98,101,102,111,114,101,32,114,101,102,117,115,105,110,103,32,110,101,119,10,99,111,110,110,101,99,116,105,111,110,115,46,0] /* listen(backlog)\0A\0 */, "i8", ALLOC_NORMAL);
__str41=allocate([114,0] /* r\00 */, "i8", ALLOC_NORMAL);
__str42=allocate([124,115,105,58,109,97,107,101,102,105,108,101,0] /* |si:makefile\00 */, "i8", ALLOC_NORMAL);
__str43=allocate([60,115,111,99,107,101,116,62,0] /* <socket>\00 */, "i8", ALLOC_NORMAL);
_makefile_doc=allocate([109,97,107,101,102,105,108,101,40,91,109,111,100,101,91,44,32,98,117,102,102,101,114,115,105,122,101,93,93,41,32,45,62,32,102,105,108,101,32,111,98,106,101,99,116,10,10,82,101,116,117,114,110,32,97,32,114,101,103,117,108,97,114,32,102,105,108,101,32,111,98,106,101,99,116,32,99,111,114,114,101,115,112,111,110,100,105,110,103,32,116,111,32,116,104,101,32,115,111,99,107,101,116,46,10,84,104,101,32,109,111,100,101,32,97,110,100,32,98,117,102,102,101,114,115,105,122,101,32,97,114,103,117,109,101,110,116,115,32,97,114,101,32,97,115,32,102,111,114,32,116,104,101,32,98,117,105,108,116,45,105,110,32,111,112,101,110,40,41,32,102,117,110,99,116,105,111,110,46,0] /* makefile([mode[, buf */, "i8", ALLOC_NORMAL);
__str44=allocate([105,124,105,58,114,101,99,118,0] /* i|i:recv\00 */, "i8", ALLOC_NORMAL);
__str45=allocate([110,101,103,97,116,105,118,101,32,98,117,102,102,101,114,115,105,122,101,32,105,110,32,114,101,99,118,0] /* negative buffersize  */, "i8", ALLOC_NORMAL);
_recv_doc=allocate([114,101,99,118,40,98,117,102,102,101,114,115,105,122,101,91,44,32,102,108,97,103,115,93,41,32,45,62,32,100,97,116,97,10,10,82,101,99,101,105,118,101,32,117,112,32,116,111,32,98,117,102,102,101,114,115,105,122,101,32,98,121,116,101,115,32,102,114,111,109,32,116,104,101,32,115,111,99,107,101,116,46,32,32,70,111,114,32,116,104,101,32,111,112,116,105,111,110,97,108,32,102,108,97,103,115,10,97,114,103,117,109,101,110,116,44,32,115,101,101,32,116,104,101,32,85,110,105,120,32,109,97,110,117,97,108,46,32,32,87,104,101,110,32,110,111,32,100,97,116,97,32,105,115,32,97,118,97,105,108,97,98,108,101,44,32,98,108,111,99,107,32,117,110,116,105,108,10,97,116,32,108,101,97,115,116,32,111,110,101,32,98,121,116,101,32,105,115,32,97,118,97,105,108,97,98,108,101,32,111,114,32,117,110,116,105,108,32,116,104,101,32,114,101,109,111,116,101,32,101,110,100,32,105,115,32,99,108,111,115,101,100,46,32,32,87,104,101,110,10,116,104,101,32,114,101,109,111,116,101,32,101,110,100,32,105,115,32,99,108,111,115,101,100,32,97,110,100,32,97,108,108,32,100,97,116,97,32,105,115,32,114,101,97,100,44,32,114,101,116,117,114,110,32,116,104,101,32,101,109,112,116,121,32,115,116,114,105,110,103,46,0] /* recv(buffersize[, fl */, "i8", ALLOC_NORMAL);
__str46=allocate([119,42,124,105,105,58,114,101,99,118,95,105,110,116,111,0] /* w_|ii:recv_into\00 */, "i8", ALLOC_NORMAL);
_kwlist_10873=allocate(16, "i8*", ALLOC_NORMAL);
__str47=allocate([98,117,102,102,101,114,0] /* buffer\00 */, "i8", ALLOC_NORMAL);
__str48=allocate([110,98,121,116,101,115,0] /* nbytes\00 */, "i8", ALLOC_NORMAL);
__str49=allocate([102,108,97,103,115,0] /* flags\00 */, "i8", ALLOC_NORMAL);
__str50=allocate([98,117,102,46,98,117,102,32,33,61,32,48,32,38,38,32,98,117,102,108,101,110,32,62,32,48,0] /* buf.buf != 0 && bufl */, "i8", ALLOC_NORMAL);
__str51=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,115,111,99,107,101,116,109,111,100,117,108,101,46,99,0] /* ../cpython/Modules/s */, "i8", ALLOC_NORMAL);
___PRETTY_FUNCTION___10879=allocate([115,111,99,107,95,114,101,99,118,95,105,110,116,111,0] /* sock_recv_into\00 */, "i8", ALLOC_NORMAL);
__str52=allocate([110,101,103,97,116,105,118,101,32,98,117,102,102,101,114,115,105,122,101,32,105,110,32,114,101,99,118,95,105,110,116,111,0] /* negative buffersize  */, "i8", ALLOC_NORMAL);
__str53=allocate([98,117,102,102,101,114,32,116,111,111,32,115,109,97,108,108,32,102,111,114,32,114,101,113,117,101,115,116,101,100,32,98,121,116,101,115,0] /* buffer too small for */, "i8", ALLOC_NORMAL);
_recv_into_doc=allocate([114,101,99,118,95,105,110,116,111,40,98,117,102,102,101,114,44,32,91,110,98,121,116,101,115,91,44,32,102,108,97,103,115,93,93,41,32,45,62,32,110,98,121,116,101,115,95,114,101,97,100,10,10,65,32,118,101,114,115,105,111,110,32,111,102,32,114,101,99,118,40,41,32,116,104,97,116,32,115,116,111,114,101,115,32,105,116,115,32,100,97,116,97,32,105,110,116,111,32,97,32,98,117,102,102,101,114,32,114,97,116,104,101,114,32,116,104,97,110,32,99,114,101,97,116,105,110,103,32,10,97,32,110,101,119,32,115,116,114,105,110,103,46,32,32,82,101,99,101,105,118,101,32,117,112,32,116,111,32,98,117,102,102,101,114,115,105,122,101,32,98,121,116,101,115,32,102,114,111,109,32,116,104,101,32,115,111,99,107,101,116,46,32,32,73,102,32,98,117,102,102,101,114,115,105,122,101,32,10,105,115,32,110,111,116,32,115,112,101,99,105,102,105,101,100,32,40,111,114,32,48,41,44,32,114,101,99,101,105,118,101,32,117,112,32,116,111,32,116,104,101,32,115,105,122,101,32,97,118,97,105,108,97,98,108,101,32,105,110,32,116,104,101,32,103,105,118,101,110,32,98,117,102,102,101,114,46,10,10,83,101,101,32,114,101,99,118,40,41,32,102,111,114,32,100,111,99,117,109,101,110,116,97,116,105,111,110,32,97,98,111,117,116,32,116,104,101,32,102,108,97,103,115,46,0] /* recv_into(buffer, [n */, "i8", ALLOC_NORMAL);
__str54=allocate([105,124,105,58,114,101,99,118,102,114,111,109,0] /* i|i:recvfrom\00 */, "i8", ALLOC_NORMAL);
__str55=allocate([110,101,103,97,116,105,118,101,32,98,117,102,102,101,114,115,105,122,101,32,105,110,32,114,101,99,118,102,114,111,109,0] /* negative buffersize  */, "i8", ALLOC_NORMAL);
_recvfrom_doc=allocate([114,101,99,118,102,114,111,109,40,98,117,102,102,101,114,115,105,122,101,91,44,32,102,108,97,103,115,93,41,32,45,62,32,40,100,97,116,97,44,32,97,100,100,114,101,115,115,32,105,110,102,111,41,10,10,76,105,107,101,32,114,101,99,118,40,98,117,102,102,101,114,115,105,122,101,44,32,102,108,97,103,115,41,32,98,117,116,32,97,108,115,111,32,114,101,116,117,114,110,32,116,104,101,32,115,101,110,100,101,114,39,115,32,97,100,100,114,101,115,115,32,105,110,102,111,46,0] /* recvfrom(buffersize[ */, "i8", ALLOC_NORMAL);
__str56=allocate([119,42,124,105,105,58,114,101,99,118,102,114,111,109,95,105,110,116,111,0] /* w_|ii:recvfrom_into\ */, "i8", ALLOC_NORMAL);
_kwlist_11020=allocate(16, "i8*", ALLOC_NORMAL);
___PRETTY_FUNCTION___11027=allocate([115,111,99,107,95,114,101,99,118,102,114,111,109,95,105,110,116,111,0] /* sock_recvfrom_into\0 */, "i8", ALLOC_NORMAL);
__str57=allocate([110,101,103,97,116,105,118,101,32,98,117,102,102,101,114,115,105,122,101,32,105,110,32,114,101,99,118,102,114,111,109,95,105,110,116,111,0] /* negative buffersize  */, "i8", ALLOC_NORMAL);
__str58=allocate([108,78,0] /* lN\00 */, "i8", ALLOC_NORMAL);
_recvfrom_into_doc=allocate([114,101,99,118,102,114,111,109,95,105,110,116,111,40,98,117,102,102,101,114,91,44,32,110,98,121,116,101,115,91,44,32,102,108,97,103,115,93,93,41,32,45,62,32,40,110,98,121,116,101,115,44,32,97,100,100,114,101,115,115,32,105,110,102,111,41,10,10,76,105,107,101,32,114,101,99,118,95,105,110,116,111,40,98,117,102,102,101,114,91,44,32,110,98,121,116,101,115,91,44,32,102,108,97,103,115,93,93,41,32,98,117,116,32,97,108,115,111,32,114,101,116,117,114,110,32,116,104,101,32,115,101,110,100,101,114,39,115,32,97,100,100,114,101,115,115,32,105,110,102,111,46,0] /* recvfrom_into(buffer */, "i8", ALLOC_NORMAL);
__str59=allocate([115,42,124,105,58,115,101,110,100,0] /* s_|i:send\00 */, "i8", ALLOC_NORMAL);
_send_doc=allocate([115,101,110,100,40,100,97,116,97,91,44,32,102,108,97,103,115,93,41,32,45,62,32,99,111,117,110,116,10,10,83,101,110,100,32,97,32,100,97,116,97,32,115,116,114,105,110,103,32,116,111,32,116,104,101,32,115,111,99,107,101,116,46,32,32,70,111,114,32,116,104,101,32,111,112,116,105,111,110,97,108,32,102,108,97,103,115,10,97,114,103,117,109,101,110,116,44,32,115,101,101,32,116,104,101,32,85,110,105,120,32,109,97,110,117,97,108,46,32,32,82,101,116,117,114,110,32,116,104,101,32,110,117,109,98,101,114,32,111,102,32,98,121,116,101,115,10,115,101,110,116,59,32,116,104,105,115,32,109,97,121,32,98,101,32,108,101,115,115,32,116,104,97,110,32,108,101,110,40,100,97,116,97,41,32,105,102,32,116,104,101,32,110,101,116,119,111,114,107,32,105,115,32,98,117,115,121,46,0] /* send(data[, flags])  */, "i8", ALLOC_NORMAL);
__str60=allocate([115,42,124,105,58,115,101,110,100,97,108,108,0] /* s_|i:sendall\00 */, "i8", ALLOC_NORMAL);
_sendall_doc=allocate([115,101,110,100,97,108,108,40,100,97,116,97,91,44,32,102,108,97,103,115,93,41,10,10,83,101,110,100,32,97,32,100,97,116,97,32,115,116,114,105,110,103,32,116,111,32,116,104,101,32,115,111,99,107,101,116,46,32,32,70,111,114,32,116,104,101,32,111,112,116,105,111,110,97,108,32,102,108,97,103,115,10,97,114,103,117,109,101,110,116,44,32,115,101,101,32,116,104,101,32,85,110,105,120,32,109,97,110,117,97,108,46,32,32,84,104,105,115,32,99,97,108,108,115,32,115,101,110,100,40,41,32,114,101,112,101,97,116,101,100,108,121,10,117,110,116,105,108,32,97,108,108,32,100,97,116,97,32,105,115,32,115,101,110,116,46,32,32,73,102,32,97,110,32,101,114,114,111,114,32,111,99,99,117,114,115,44,32,105,116,39,115,32,105,109,112,111,115,115,105,98,108,101,10,116,111,32,116,101,108,108,32,104,111,119,32,109,117,99,104,32,100,97,116,97,32,104,97,115,32,98,101,101,110,32,115,101,110,116,46,0] /* sendall(data[, flags */, "i8", ALLOC_NORMAL);
__str61=allocate([115,42,79,58,115,101,110,100,116,111,0] /* s_O:sendto\00 */, "i8", ALLOC_NORMAL);
__str62=allocate([115,42,105,79,58,115,101,110,100,116,111,0] /* s_iO:sendto\00 */, "i8", ALLOC_NORMAL);
__str63=allocate([115,101,110,100,116,111,40,41,32,116,97,107,101,115,32,50,32,111,114,32,51,32,97,114,103,117,109,101,110,116,115,32,40,37,100,32,103,105,118,101,110,41,0] /* sendto() takes 2 or  */, "i8", ALLOC_NORMAL);
_sendto_doc=allocate([115,101,110,100,116,111,40,100,97,116,97,91,44,32,102,108,97,103,115,93,44,32,97,100,100,114,101,115,115,41,32,45,62,32,99,111,117,110,116,10,10,76,105,107,101,32,115,101,110,100,40,100,97,116,97,44,32,102,108,97,103,115,41,32,98,117,116,32,97,108,108,111,119,115,32,115,112,101,99,105,102,121,105,110,103,32,116,104,101,32,100,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,46,10,70,111,114,32,73,80,32,115,111,99,107,101,116,115,44,32,116,104,101,32,97,100,100,114,101,115,115,32,105,115,32,97,32,112,97,105,114,32,40,104,111,115,116,97,100,100,114,44,32,112,111,114,116,41,46,0] /* sendto(data[, flags] */, "i8", ALLOC_NORMAL);
_shutdown_doc=allocate([115,104,117,116,100,111,119,110,40,102,108,97,103,41,10,10,83,104,117,116,32,100,111,119,110,32,116,104,101,32,114,101,97,100,105,110,103,32,115,105,100,101,32,111,102,32,116,104,101,32,115,111,99,107,101,116,32,40,102,108,97,103,32,61,61,32,83,72,85,84,95,82,68,41,44,32,116,104,101,32,119,114,105,116,105,110,103,32,115,105,100,101,10,111,102,32,116,104,101,32,115,111,99,107,101,116,32,40,102,108,97,103,32,61,61,32,83,72,85,84,95,87,82,41,44,32,111,114,32,98,111,116,104,32,101,110,100,115,32,40,102,108,97,103,32,61,61,32,83,72,85,84,95,82,68,87,82,41,46,0] /* shutdown(flag)\0A\0A */, "i8", ALLOC_NORMAL);
__str64=allocate([97,99,99,101,112,116,0] /* accept\00 */, "i8", ALLOC_NORMAL);
__str65=allocate([98,105,110,100,0] /* bind\00 */, "i8", ALLOC_NORMAL);
__str66=allocate([99,108,111,115,101,0] /* close\00 */, "i8", ALLOC_NORMAL);
__str67=allocate([99,111,110,110,101,99,116,0] /* connect\00 */, "i8", ALLOC_NORMAL);
__str68=allocate([99,111,110,110,101,99,116,95,101,120,0] /* connect_ex\00 */, "i8", ALLOC_NORMAL);
__str69=allocate([100,117,112,0] /* dup\00 */, "i8", ALLOC_NORMAL);
__str70=allocate([102,105,108,101,110,111,0] /* fileno\00 */, "i8", ALLOC_NORMAL);
__str71=allocate([103,101,116,112,101,101,114,110,97,109,101,0] /* getpeername\00 */, "i8", ALLOC_NORMAL);
__str72=allocate([103,101,116,115,111,99,107,110,97,109,101,0] /* getsockname\00 */, "i8", ALLOC_NORMAL);
__str73=allocate([103,101,116,115,111,99,107,111,112,116,0] /* getsockopt\00 */, "i8", ALLOC_NORMAL);
__str74=allocate([108,105,115,116,101,110,0] /* listen\00 */, "i8", ALLOC_NORMAL);
__str75=allocate([109,97,107,101,102,105,108,101,0] /* makefile\00 */, "i8", ALLOC_NORMAL);
__str76=allocate([114,101,99,118,0] /* recv\00 */, "i8", ALLOC_NORMAL);
__str77=allocate([114,101,99,118,95,105,110,116,111,0] /* recv_into\00 */, "i8", ALLOC_NORMAL);
__str78=allocate([114,101,99,118,102,114,111,109,0] /* recvfrom\00 */, "i8", ALLOC_NORMAL);
__str79=allocate([114,101,99,118,102,114,111,109,95,105,110,116,111,0] /* recvfrom_into\00 */, "i8", ALLOC_NORMAL);
__str80=allocate([115,101,110,100,0] /* send\00 */, "i8", ALLOC_NORMAL);
__str81=allocate([115,101,110,100,97,108,108,0] /* sendall\00 */, "i8", ALLOC_NORMAL);
__str82=allocate([115,101,110,100,116,111,0] /* sendto\00 */, "i8", ALLOC_NORMAL);
__str83=allocate([115,101,116,98,108,111,99,107,105,110,103,0] /* setblocking\00 */, "i8", ALLOC_NORMAL);
__str84=allocate([115,101,116,116,105,109,101,111,117,116,0] /* settimeout\00 */, "i8", ALLOC_NORMAL);
__str85=allocate([103,101,116,116,105,109,101,111,117,116,0] /* gettimeout\00 */, "i8", ALLOC_NORMAL);
__str86=allocate([115,101,116,115,111,99,107,111,112,116,0] /* setsockopt\00 */, "i8", ALLOC_NORMAL);
__str87=allocate([115,104,117,116,100,111,119,110,0] /* shutdown\00 */, "i8", ALLOC_NORMAL);
_sock_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str88=allocate([102,97,109,105,108,121,0] /* family\00 */, "i8", ALLOC_NORMAL);
__str89=allocate([116,104,101,32,115,111,99,107,101,116,32,102,97,109,105,108,121,0] /* the socket family\00 */, "i8", ALLOC_NORMAL);
__str90=allocate([116,121,112,101,0] /* type\00 */, "i8", ALLOC_NORMAL);
__str91=allocate([116,104,101,32,115,111,99,107,101,116,32,116,121,112,101,0] /* the socket type\00 */, "i8", ALLOC_NORMAL);
__str92=allocate([112,114,111,116,111,0] /* proto\00 */, "i8", ALLOC_NORMAL);
__str93=allocate([116,104,101,32,115,111,99,107,101,116,32,112,114,111,116,111,99,111,108,0] /* the socket protocol\ */, "i8", ALLOC_NORMAL);
__str94=allocate([116,105,109,101,111,117,116,0] /* timeout\00 */, "i8", ALLOC_NORMAL);
__str95=allocate([116,104,101,32,115,111,99,107,101,116,32,116,105,109,101,111,117,116,0] /* the socket timeout\0 */, "i8", ALLOC_NORMAL);
_sock_memberlist=allocate([0, 0, 0, 0, 1, 0, 0, 0, 12, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 16, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 20, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 28, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
__str96=allocate([60,115,111,99,107,101,116,32,111,98,106,101,99,116,44,32,102,100,61,37,108,100,44,32,102,97,109,105,108,121,61,37,100,44,32,116,121,112,101,61,37,100,44,32,112,114,111,116,111,99,111,108,61,37,100,62,0] /* <socket object, fd=% */, "i8", ALLOC_NORMAL);
__str97=allocate([124,105,105,105,58,115,111,99,107,101,116,0] /* |iii:socket\00 */, "i8", ALLOC_NORMAL);
_keywords_11267=allocate(16, "i8*", ALLOC_NORMAL);
__str98=allocate([95,115,111,99,107,101,116,46,115,111,99,107,101,116,0] /* _socket.socket\00 */, "i8", ALLOC_NORMAL);
_sock_type=allocate([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_gethostname_doc=allocate([103,101,116,104,111,115,116,110,97,109,101,40,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,99,117,114,114,101,110,116,32,104,111,115,116,32,110,97,109,101,46,0] /* gethostname() -> str */, "i8", ALLOC_NORMAL);
__str99=allocate([115,58,103,101,116,104,111,115,116,98,121,110,97,109,101,0] /* s:gethostbyname\00 */, "i8", ALLOC_NORMAL);
_gethostbyname_doc=allocate([103,101,116,104,111,115,116,98,121,110,97,109,101,40,104,111,115,116,41,32,45,62,32,97,100,100,114,101,115,115,10,10,82,101,116,117,114,110,32,116,104,101,32,73,80,32,97,100,100,114,101,115,115,32,40,97,32,115,116,114,105,110,103,32,111,102,32,116,104,101,32,102,111,114,109,32,39,50,53,53,46,50,53,53,46,50,53,53,46,50,53,53,39,41,32,102,111,114,32,97,32,104,111,115,116,46,0] /* gethostbyname(host)  */, "i8", ALLOC_NORMAL);
__str100=allocate([115,79,79,0] /* sOO\00 */, "i8", ALLOC_NORMAL);
__str101=allocate([115,58,103,101,116,104,111,115,116,98,121,110,97,109,101,95,101,120,0] /* s:gethostbyname_ex\0 */, "i8", ALLOC_NORMAL);
_ghbn_ex_doc=allocate([103,101,116,104,111,115,116,98,121,110,97,109,101,95,101,120,40,104,111,115,116,41,32,45,62,32,40,110,97,109,101,44,32,97,108,105,97,115,108,105,115,116,44,32,97,100,100,114,101,115,115,108,105,115,116,41,10,10,82,101,116,117,114,110,32,116,104,101,32,116,114,117,101,32,104,111,115,116,32,110,97,109,101,44,32,97,32,108,105,115,116,32,111,102,32,97,108,105,97,115,101,115,44,32,97,110,100,32,97,32,108,105,115,116,32,111,102,32,73,80,32,97,100,100,114,101,115,115,101,115,44,10,102,111,114,32,97,32,104,111,115,116,46,32,32,84,104,101,32,104,111,115,116,32,97,114,103,117,109,101,110,116,32,105,115,32,97,32,115,116,114,105,110,103,32,103,105,118,105,110,103,32,97,32,104,111,115,116,32,110,97,109,101,32,111,114,32,73,80,32,110,117,109,98,101,114,46,0] /* gethostbyname_ex(hos */, "i8", ALLOC_NORMAL);
__str102=allocate([115,58,103,101,116,104,111,115,116,98,121,97,100,100,114,0] /* s:gethostbyaddr\00 */, "i8", ALLOC_NORMAL);
_gethostbyaddr_doc=allocate([103,101,116,104,111,115,116,98,121,97,100,100,114,40,104,111,115,116,41,32,45,62,32,40,110,97,109,101,44,32,97,108,105,97,115,108,105,115,116,44,32,97,100,100,114,101,115,115,108,105,115,116,41,10,10,82,101,116,117,114,110,32,116,104,101,32,116,114,117,101,32,104,111,115,116,32,110,97,109,101,44,32,97,32,108,105,115,116,32,111,102,32,97,108,105,97,115,101,115,44,32,97,110,100,32,97,32,108,105,115,116,32,111,102,32,73,80,32,97,100,100,114,101,115,115,101,115,44,10,102,111,114,32,97,32,104,111,115,116,46,32,32,84,104,101,32,104,111,115,116,32,97,114,103,117,109,101,110,116,32,105,115,32,97,32,115,116,114,105,110,103,32,103,105,118,105,110,103,32,97,32,104,111,115,116,32,110,97,109,101,32,111,114,32,73,80,32,110,117,109,98,101,114,46,0] /* gethostbyaddr(host)  */, "i8", ALLOC_NORMAL);
__str103=allocate([115,124,115,58,103,101,116,115,101,114,118,98,121,110,97,109,101,0] /* s|s:getservbyname\00 */, "i8", ALLOC_NORMAL);
__str104=allocate([115,101,114,118,105,99,101,47,112,114,111,116,111,32,110,111,116,32,102,111,117,110,100,0] /* service/proto not fo */, "i8", ALLOC_NORMAL);
_getservbyname_doc=allocate([103,101,116,115,101,114,118,98,121,110,97,109,101,40,115,101,114,118,105,99,101,110,97,109,101,91,44,32,112,114,111,116,111,99,111,108,110,97,109,101,93,41,32,45,62,32,105,110,116,101,103,101,114,10,10,82,101,116,117,114,110,32,97,32,112,111,114,116,32,110,117,109,98,101,114,32,102,114,111,109,32,97,32,115,101,114,118,105,99,101,32,110,97,109,101,32,97,110,100,32,112,114,111,116,111,99,111,108,32,110,97,109,101,46,10,84,104,101,32,111,112,116,105,111,110,97,108,32,112,114,111,116,111,99,111,108,32,110,97,109,101,44,32,105,102,32,103,105,118,101,110,44,32,115,104,111,117,108,100,32,98,101,32,39,116,99,112,39,32,111,114,32,39,117,100,112,39,44,10,111,116,104,101,114,119,105,115,101,32,97,110,121,32,112,114,111,116,111,99,111,108,32,119,105,108,108,32,109,97,116,99,104,46,0] /* getservbyname(servic */, "i8", ALLOC_NORMAL);
__str105=allocate([105,124,115,58,103,101,116,115,101,114,118,98,121,112,111,114,116,0] /* i|s:getservbyport\00 */, "i8", ALLOC_NORMAL);
__str106=allocate([103,101,116,115,101,114,118,98,121,112,111,114,116,58,32,112,111,114,116,32,109,117,115,116,32,98,101,32,48,45,54,53,53,51,53,46,0] /* getservbyport: port  */, "i8", ALLOC_NORMAL);
__str107=allocate([112,111,114,116,47,112,114,111,116,111,32,110,111,116,32,102,111,117,110,100,0] /* port/proto not found */, "i8", ALLOC_NORMAL);
_getservbyport_doc=allocate([103,101,116,115,101,114,118,98,121,112,111,114,116,40,112,111,114,116,91,44,32,112,114,111,116,111,99,111,108,110,97,109,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,82,101,116,117,114,110,32,116,104,101,32,115,101,114,118,105,99,101,32,110,97,109,101,32,102,114,111,109,32,97,32,112,111,114,116,32,110,117,109,98,101,114,32,97,110,100,32,112,114,111,116,111,99,111,108,32,110,97,109,101,46,10,84,104,101,32,111,112,116,105,111,110,97,108,32,112,114,111,116,111,99,111,108,32,110,97,109,101,44,32,105,102,32,103,105,118,101,110,44,32,115,104,111,117,108,100,32,98,101,32,39,116,99,112,39,32,111,114,32,39,117,100,112,39,44,10,111,116,104,101,114,119,105,115,101,32,97,110,121,32,112,114,111,116,111,99,111,108,32,119,105,108,108,32,109,97,116,99,104,46,0] /* getservbyport(port[, */, "i8", ALLOC_NORMAL);
__str108=allocate([115,58,103,101,116,112,114,111,116,111,98,121,110,97,109,101,0] /* s:getprotobyname\00 */, "i8", ALLOC_NORMAL);
__str109=allocate([112,114,111,116,111,99,111,108,32,110,111,116,32,102,111,117,110,100,0] /* protocol not found\0 */, "i8", ALLOC_NORMAL);
_getprotobyname_doc=allocate([103,101,116,112,114,111,116,111,98,121,110,97,109,101,40,110,97,109,101,41,32,45,62,32,105,110,116,101,103,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,112,114,111,116,111,99,111,108,32,110,117,109,98,101,114,32,102,111,114,32,116,104,101,32,110,97,109,101,100,32,112,114,111,116,111,99,111,108,46,32,32,40,82,97,114,101,108,121,32,117,115,101,100,46,41,0] /* getprotobyname(name) */, "i8", ALLOC_NORMAL);
__str110=allocate([124,105,105,105,58,115,111,99,107,101,116,112,97,105,114,0] /* |iii:socketpair\00 */, "i8", ALLOC_NORMAL);
_socketpair_doc=allocate([115,111,99,107,101,116,112,97,105,114,40,91,102,97,109,105,108,121,91,44,32,116,121,112,101,91,44,32,112,114,111,116,111,93,93,93,41,32,45,62,32,40,115,111,99,107,101,116,32,111,98,106,101,99,116,44,32,115,111,99,107,101,116,32,111,98,106,101,99,116,41,10,10,67,114,101,97,116,101,32,97,32,112,97,105,114,32,111,102,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,32,102,114,111,109,32,116,104,101,32,115,111,99,107,101,116,115,32,114,101,116,117,114,110,101,100,32,98,121,32,116,104,101,32,112,108,97,116,102,111,114,109,10,115,111,99,107,101,116,112,97,105,114,40,41,32,102,117,110,99,116,105,111,110,46,10,84,104,101,32,97,114,103,117,109,101,110,116,115,32,97,114,101,32,116,104,101,32,115,97,109,101,32,97,115,32,102,111,114,32,115,111,99,107,101,116,40,41,32,101,120,99,101,112,116,32,116,104,101,32,100,101,102,97,117,108,116,32,102,97,109,105,108,121,32,105,115,10,65,70,95,85,78,73,88,32,105,102,32,100,101,102,105,110,101,100,32,111,110,32,116,104,101,32,112,108,97,116,102,111,114,109,59,32,111,116,104,101,114,119,105,115,101,44,32,116,104,101,32,100,101,102,97,117,108,116,32,105,115,32,65,70,95,73,78,69,84,46,0] /* socketpair([family[, */, "i8", ALLOC_NORMAL);
__str111=allocate([105,105,105,124,105,58,102,114,111,109,102,100,0] /* iii|i:fromfd\00 */, "i8", ALLOC_NORMAL);
_fromfd_doc=allocate([102,114,111,109,102,100,40,102,100,44,32,102,97,109,105,108,121,44,32,116,121,112,101,91,44,32,112,114,111,116,111,93,41,32,45,62,32,115,111,99,107,101,116,32,111,98,106,101,99,116,10,10,67,114,101,97,116,101,32,97,32,115,111,99,107,101,116,32,111,98,106,101,99,116,32,102,114,111,109,32,97,32,100,117,112,108,105,99,97,116,101,32,111,102,32,116,104,101,32,103,105,118,101,110,10,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,46,10,84,104,101,32,114,101,109,97,105,110,105,110,103,32,97,114,103,117,109,101,110,116,115,32,97,114,101,32,116,104,101,32,115,97,109,101,32,97,115,32,102,111,114,32,115,111,99,107,101,116,40,41,46,0] /* fromfd(fd, family, t */, "i8", ALLOC_NORMAL);
__str112=allocate([105,58,110,116,111,104,115,0] /* i:ntohs\00 */, "i8", ALLOC_NORMAL);
__str113=allocate([99,97,110,39,116,32,99,111,110,118,101,114,116,32,110,101,103,97,116,105,118,101,32,110,117,109,98,101,114,32,116,111,32,117,110,115,105,103,110,101,100,32,108,111,110,103,0] /* can't convert negati */, "i8", ALLOC_NORMAL);
_ntohs_doc=allocate([110,116,111,104,115,40,105,110,116,101,103,101,114,41,32,45,62,32,105,110,116,101,103,101,114,10,10,67,111,110,118,101,114,116,32,97,32,49,54,45,98,105,116,32,105,110,116,101,103,101,114,32,102,114,111,109,32,110,101,116,119,111,114,107,32,116,111,32,104,111,115,116,32,98,121,116,101,32,111,114,100,101,114,46,0] /* ntohs(integer) -> in */, "i8", ALLOC_NORMAL);
__str114=allocate([101,120,112,101,99,116,101,100,32,105,110,116,47,108,111,110,103,44,32,37,115,32,102,111,117,110,100,0] /* expected int/long, % */, "i8", ALLOC_NORMAL);
_ntohl_doc=allocate([110,116,111,104,108,40,105,110,116,101,103,101,114,41,32,45,62,32,105,110,116,101,103,101,114,10,10,67,111,110,118,101,114,116,32,97,32,51,50,45,98,105,116,32,105,110,116,101,103,101,114,32,102,114,111,109,32,110,101,116,119,111,114,107,32,116,111,32,104,111,115,116,32,98,121,116,101,32,111,114,100,101,114,46,0] /* ntohl(integer) -> in */, "i8", ALLOC_NORMAL);
__str115=allocate([105,58,104,116,111,110,115,0] /* i:htons\00 */, "i8", ALLOC_NORMAL);
_htons_doc=allocate([104,116,111,110,115,40,105,110,116,101,103,101,114,41,32,45,62,32,105,110,116,101,103,101,114,10,10,67,111,110,118,101,114,116,32,97,32,49,54,45,98,105,116,32,105,110,116,101,103,101,114,32,102,114,111,109,32,104,111,115,116,32,116,111,32,110,101,116,119,111,114,107,32,98,121,116,101,32,111,114,100,101,114,46,0] /* htons(integer) -> in */, "i8", ALLOC_NORMAL);
_htonl_doc=allocate([104,116,111,110,108,40,105,110,116,101,103,101,114,41,32,45,62,32,105,110,116,101,103,101,114,10,10,67,111,110,118,101,114,116,32,97,32,51,50,45,98,105,116,32,105,110,116,101,103,101,114,32,102,114,111,109,32,104,111,115,116,32,116,111,32,110,101,116,119,111,114,107,32,98,121,116,101,32,111,114,100,101,114,46,0] /* htonl(integer) -> in */, "i8", ALLOC_NORMAL);
_inet_aton_doc=allocate([105,110,101,116,95,97,116,111,110,40,115,116,114,105,110,103,41,32,45,62,32,112,97,99,107,101,100,32,51,50,45,98,105,116,32,73,80,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,10,10,67,111,110,118,101,114,116,32,97,110,32,73,80,32,97,100,100,114,101,115,115,32,105,110,32,115,116,114,105,110,103,32,102,111,114,109,97,116,32,40,49,50,51,46,52,53,46,54,55,46,56,57,41,32,116,111,32,116,104,101,32,51,50,45,98,105,116,32,112,97,99,107,101,100,10,98,105,110,97,114,121,32,102,111,114,109,97,116,32,117,115,101,100,32,105,110,32,108,111,119,45,108,101,118,101,108,32,110,101,116,119,111,114,107,32,102,117,110,99,116,105,111,110,115,46,0] /* inet_aton(string) -> */, "i8", ALLOC_NORMAL);
__str116=allocate([115,58,105,110,101,116,95,97,116,111,110,0] /* s:inet_aton\00 */, "i8", ALLOC_NORMAL);
__str117=allocate([105,108,108,101,103,97,108,32,73,80,32,97,100,100,114,101,115,115,32,115,116,114,105,110,103,32,112,97,115,115,101,100,32,116,111,32,105,110,101,116,95,97,116,111,110,0] /* illegal IP address s */, "i8", ALLOC_NORMAL);
_inet_ntoa_doc=allocate([105,110,101,116,95,110,116,111,97,40,112,97,99,107,101,100,95,105,112,41,32,45,62,32,105,112,95,97,100,100,114,101,115,115,95,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,110,32,73,80,32,97,100,100,114,101,115,115,32,102,114,111,109,32,51,50,45,98,105,116,32,112,97,99,107,101,100,32,98,105,110,97,114,121,32,102,111,114,109,97,116,32,116,111,32,115,116,114,105,110,103,32,102,111,114,109,97,116,0] /* inet_ntoa(packed_ip) */, "i8", ALLOC_NORMAL);
__str118=allocate([115,35,58,105,110,101,116,95,110,116,111,97,0] /* s#:inet_ntoa\00 */, "i8", ALLOC_NORMAL);
__str119=allocate([112,97,99,107,101,100,32,73,80,32,119,114,111,110,103,32,108,101,110,103,116,104,32,102,111,114,32,105,110,101,116,95,110,116,111,97,0] /* packed IP wrong leng */, "i8", ALLOC_NORMAL);
_inet_pton_doc=allocate([105,110,101,116,95,112,116,111,110,40,97,102,44,32,105,112,41,32,45,62,32,112,97,99,107,101,100,32,73,80,32,97,100,100,114,101,115,115,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,110,32,73,80,32,97,100,100,114,101,115,115,32,102,114,111,109,32,115,116,114,105,110,103,32,102,111,114,109,97,116,32,116,111,32,97,32,112,97,99,107,101,100,32,115,116,114,105,110,103,32,115,117,105,116,97,98,108,101,10,102,111,114,32,117,115,101,32,119,105,116,104,32,108,111,119,45,108,101,118,101,108,32,110,101,116,119,111,114,107,32,102,117,110,99,116,105,111,110,115,46,0] /* inet_pton(af, ip) -> */, "i8", ALLOC_NORMAL);
__str120=allocate([105,115,58,105,110,101,116,95,112,116,111,110,0] /* is:inet_pton\00 */, "i8", ALLOC_NORMAL);
__str121=allocate([105,108,108,101,103,97,108,32,73,80,32,97,100,100,114,101,115,115,32,115,116,114,105,110,103,32,112,97,115,115,101,100,32,116,111,32,105,110,101,116,95,112,116,111,110,0] /* illegal IP address s */, "i8", ALLOC_NORMAL);
_inet_ntop_doc=allocate([105,110,101,116,95,110,116,111,112,40,97,102,44,32,112,97,99,107,101,100,95,105,112,41,32,45,62,32,115,116,114,105,110,103,32,102,111,114,109,97,116,116,101,100,32,73,80,32,97,100,100,114,101,115,115,10,10,67,111,110,118,101,114,116,32,97,32,112,97,99,107,101,100,32,73,80,32,97,100,100,114,101,115,115,32,111,102,32,116,104,101,32,103,105,118,101,110,32,102,97,109,105,108,121,32,116,111,32,115,116,114,105,110,103,32,102,111,114,109,97,116,46,0] /* inet_ntop(af, packed */, "i8", ALLOC_NORMAL);
__str122=allocate([105,115,35,58,105,110,101,116,95,110,116,111,112,0] /* is#:inet_ntop\00 */, "i8", ALLOC_NORMAL);
__str123=allocate([105,110,118,97,108,105,100,32,108,101,110,103,116,104,32,111,102,32,112,97,99,107,101,100,32,73,80,32,97,100,100,114,101,115,115,32,115,116,114,105,110,103,0] /* invalid length of pa */, "i8", ALLOC_NORMAL);
__str124=allocate([117,110,107,110,111,119,110,32,97,100,100,114,101,115,115,32,102,97,109,105,108,121,32,37,100,0] /* unknown address fami */, "i8", ALLOC_NORMAL);
__str125=allocate([79,79,124,105,105,105,105,58,103,101,116,97,100,100,114,105,110,102,111,0] /* OO|iiii:getaddrinfo\ */, "i8", ALLOC_NORMAL);
__str126=allocate([101,110,99,111,100,101,0] /* encode\00 */, "i8", ALLOC_NORMAL);
__str127=allocate([115,0] /* s\00 */, "i8", ALLOC_NORMAL);
__str128=allocate([103,101,116,97,100,100,114,105,110,102,111,40,41,32,97,114,103,117,109,101,110,116,32,49,32,109,117,115,116,32,98,101,32,115,116,114,105,110,103,32,111,114,32,78,111,110,101,0] /* getaddrinfo() argume */, "i8", ALLOC_NORMAL);
__str129=allocate([37,108,100,0] /* %ld\00 */, "i8", ALLOC_NORMAL);
__str130=allocate([73,110,116,32,111,114,32,83,116,114,105,110,103,32,101,120,112,101,99,116,101,100,0] /* Int or String expect */, "i8", ALLOC_NORMAL);
__str131=allocate([105,105,105,115,79,0] /* iiisO\00 */, "i8", ALLOC_NORMAL);
_getaddrinfo_doc=allocate([103,101,116,97,100,100,114,105,110,102,111,40,104,111,115,116,44,32,112,111,114,116,32,91,44,32,102,97,109,105,108,121,44,32,115,111,99,107,116,121,112,101,44,32,112,114,111,116,111,44,32,102,108,97,103,115,93,41,10,32,32,32,32,45,62,32,108,105,115,116,32,111,102,32,40,102,97,109,105,108,121,44,32,115,111,99,107,116,121,112,101,44,32,112,114,111,116,111,44,32,99,97,110,111,110,110,97,109,101,44,32,115,111,99,107,97,100,100,114,41,10,10,82,101,115,111,108,118,101,32,104,111,115,116,32,97,110,100,32,112,111,114,116,32,105,110,116,111,32,97,100,100,114,105,110,102,111,32,115,116,114,117,99,116,46,0] /* getaddrinfo(host, po */, "i8", ALLOC_NORMAL);
__str132=allocate([79,105,58,103,101,116,110,97,109,101,105,110,102,111,0] /* Oi:getnameinfo\00 */, "i8", ALLOC_NORMAL);
__str133=allocate([103,101,116,110,97,109,101,105,110,102,111,40,41,32,97,114,103,117,109,101,110,116,32,49,32,109,117,115,116,32,98,101,32,97,32,116,117,112,108,101,0] /* getnameinfo() argume */, "i8", ALLOC_NORMAL);
__str134=allocate([115,105,124,105,105,0] /* si|ii\00 */, "i8", ALLOC_NORMAL);
__str135=allocate([37,100,0] /* %d\00 */, "i8", ALLOC_NORMAL);
__str136=allocate([115,111,99,107,97,100,100,114,32,114,101,115,111,108,118,101,100,32,116,111,32,109,117,108,116,105,112,108,101,32,97,100,100,114,101,115,115,101,115,0] /* sockaddr resolved to */, "i8", ALLOC_NORMAL);
__str137=allocate([73,80,118,52,32,115,111,99,107,97,100,100,114,32,109,117,115,116,32,98,101,32,50,32,116,117,112,108,101,0] /* IPv4 sockaddr must b */, "i8", ALLOC_NORMAL);
__str138=allocate([115,115,0] /* ss\00 */, "i8", ALLOC_NORMAL);
_getnameinfo_doc=allocate([103,101,116,110,97,109,101,105,110,102,111,40,115,111,99,107,97,100,100,114,44,32,102,108,97,103,115,41,32,45,45,62,32,40,104,111,115,116,44,32,112,111,114,116,41,10,10,71,101,116,32,104,111,115,116,32,97,110,100,32,112,111,114,116,32,102,111,114,32,97,32,115,111,99,107,97,100,100,114,46,0] /* getnameinfo(sockaddr */, "i8", ALLOC_NORMAL);
_getdefaulttimeout_doc=allocate([103,101,116,100,101,102,97,117,108,116,116,105,109,101,111,117,116,40,41,32,45,62,32,116,105,109,101,111,117,116,10,10,82,101,116,117,114,110,115,32,116,104,101,32,100,101,102,97,117,108,116,32,116,105,109,101,111,117,116,32,105,110,32,102,108,111,97,116,105,110,103,32,115,101,99,111,110,100,115,32,102,111,114,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,46,10,65,32,118,97,108,117,101,32,111,102,32,78,111,110,101,32,105,110,100,105,99,97,116,101,115,32,116,104,97,116,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,32,104,97,118,101,32,110,111,32,116,105,109,101,111,117,116,46,10,87,104,101,110,32,116,104,101,32,115,111,99,107,101,116,32,109,111,100,117,108,101,32,105,115,32,102,105,114,115,116,32,105,109,112,111,114,116,101,100,44,32,116,104,101,32,100,101,102,97,117,108,116,32,105,115,32,78,111,110,101,46,0] /* getdefaulttimeout()  */, "i8", ALLOC_NORMAL);
_setdefaulttimeout_doc=allocate([115,101,116,100,101,102,97,117,108,116,116,105,109,101,111,117,116,40,116,105,109,101,111,117,116,41,10,10,83,101,116,32,116,104,101,32,100,101,102,97,117,108,116,32,116,105,109,101,111,117,116,32,105,110,32,102,108,111,97,116,105,110,103,32,115,101,99,111,110,100,115,32,102,111,114,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,46,10,65,32,118,97,108,117,101,32,111,102,32,78,111,110,101,32,105,110,100,105,99,97,116,101,115,32,116,104,97,116,32,110,101,119,32,115,111,99,107,101,116,32,111,98,106,101,99,116,115,32,104,97,118,101,32,110,111,32,116,105,109,101,111,117,116,46,10,87,104,101,110,32,116,104,101,32,115,111,99,107,101,116,32,109,111,100,117,108,101,32,105,115,32,102,105,114,115,116,32,105,109,112,111,114,116,101,100,44,32,116,104,101,32,100,101,102,97,117,108,116,32,105,115,32,78,111,110,101,46,0] /* setdefaulttimeout(ti */, "i8", ALLOC_NORMAL);
__str139=allocate([103,101,116,104,111,115,116,98,121,110,97,109,101,0] /* gethostbyname\00 */, "i8", ALLOC_NORMAL);
__str140=allocate([103,101,116,104,111,115,116,98,121,110,97,109,101,95,101,120,0] /* gethostbyname_ex\00 */, "i8", ALLOC_NORMAL);
__str141=allocate([103,101,116,104,111,115,116,98,121,97,100,100,114,0] /* gethostbyaddr\00 */, "i8", ALLOC_NORMAL);
__str142=allocate([103,101,116,104,111,115,116,110,97,109,101,0] /* gethostname\00 */, "i8", ALLOC_NORMAL);
__str143=allocate([103,101,116,115,101,114,118,98,121,110,97,109,101,0] /* getservbyname\00 */, "i8", ALLOC_NORMAL);
__str144=allocate([103,101,116,115,101,114,118,98,121,112,111,114,116,0] /* getservbyport\00 */, "i8", ALLOC_NORMAL);
__str145=allocate([103,101,116,112,114,111,116,111,98,121,110,97,109,101,0] /* getprotobyname\00 */, "i8", ALLOC_NORMAL);
__str146=allocate([102,114,111,109,102,100,0] /* fromfd\00 */, "i8", ALLOC_NORMAL);
__str147=allocate([115,111,99,107,101,116,112,97,105,114,0] /* socketpair\00 */, "i8", ALLOC_NORMAL);
__str148=allocate([110,116,111,104,115,0] /* ntohs\00 */, "i8", ALLOC_NORMAL);
__str149=allocate([110,116,111,104,108,0] /* ntohl\00 */, "i8", ALLOC_NORMAL);
__str150=allocate([104,116,111,110,115,0] /* htons\00 */, "i8", ALLOC_NORMAL);
__str151=allocate([104,116,111,110,108,0] /* htonl\00 */, "i8", ALLOC_NORMAL);
__str152=allocate([105,110,101,116,95,97,116,111,110,0] /* inet_aton\00 */, "i8", ALLOC_NORMAL);
__str153=allocate([105,110,101,116,95,110,116,111,97,0] /* inet_ntoa\00 */, "i8", ALLOC_NORMAL);
__str154=allocate([105,110,101,116,95,112,116,111,110,0] /* inet_pton\00 */, "i8", ALLOC_NORMAL);
__str155=allocate([105,110,101,116,95,110,116,111,112,0] /* inet_ntop\00 */, "i8", ALLOC_NORMAL);
__str156=allocate([103,101,116,97,100,100,114,105,110,102,111,0] /* getaddrinfo\00 */, "i8", ALLOC_NORMAL);
__str157=allocate([103,101,116,110,97,109,101,105,110,102,111,0] /* getnameinfo\00 */, "i8", ALLOC_NORMAL);
__str158=allocate([103,101,116,100,101,102,97,117,108,116,116,105,109,101,111,117,116,0] /* getdefaulttimeout\00 */, "i8", ALLOC_NORMAL);
__str159=allocate([115,101,116,100,101,102,97,117,108,116,116,105,109,101,111,117,116,0] /* setdefaulttimeout\00 */, "i8", ALLOC_NORMAL);
_socket_methods=allocate([0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"], ALLOC_NORMAL);
_PySocketModuleAPI=allocate(8, ["%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0], ALLOC_NORMAL);
_socket_doc=allocate([73,109,112,108,101,109,101,110,116,97,116,105,111,110,32,109,111,100,117,108,101,32,102,111,114,32,115,111,99,107,101,116,32,111,112,101,114,97,116,105,111,110,115,46,10,10,83,101,101,32,116,104,101,32,115,111,99,107,101,116,32,109,111,100,117,108,101,32,102,111,114,32,100,111,99,117,109,101,110,116,97,116,105,111,110,46,0] /* Implementation modul */, "i8", ALLOC_NORMAL);
__str160=allocate([95,115,111,99,107,101,116,0] /* _socket\00 */, "i8", ALLOC_NORMAL);
__str161=allocate([115,111,99,107,101,116,46,101,114,114,111,114,0] /* socket.error\00 */, "i8", ALLOC_NORMAL);
__str162=allocate([101,114,114,111,114,0] /* error\00 */, "i8", ALLOC_NORMAL);
__str163=allocate([115,111,99,107,101,116,46,104,101,114,114,111,114,0] /* socket.herror\00 */, "i8", ALLOC_NORMAL);
__str164=allocate([104,101,114,114,111,114,0] /* herror\00 */, "i8", ALLOC_NORMAL);
__str165=allocate([115,111,99,107,101,116,46,103,97,105,101,114,114,111,114,0] /* socket.gaierror\00 */, "i8", ALLOC_NORMAL);
__str166=allocate([103,97,105,101,114,114,111,114,0] /* gaierror\00 */, "i8", ALLOC_NORMAL);
__str167=allocate([115,111,99,107,101,116,46,116,105,109,101,111,117,116,0] /* socket.timeout\00 */, "i8", ALLOC_NORMAL);
__str168=allocate([83,111,99,107,101,116,84,121,112,101,0] /* SocketType\00 */, "i8", ALLOC_NORMAL);
__str169=allocate([115,111,99,107,101,116,0] /* socket\00 */, "i8", ALLOC_NORMAL);
__str170=allocate([104,97,115,95,105,112,118,54,0] /* has_ipv6\00 */, "i8", ALLOC_NORMAL);
__str171=allocate([95,115,111,99,107,101,116,46,67,65,80,73,0] /* _socket.CAPI\00 */, "i8", ALLOC_NORMAL);
__str172=allocate([67,65,80,73,0] /* CAPI\00 */, "i8", ALLOC_NORMAL);
__str173=allocate([65,70,95,85,78,83,80,69,67,0] /* AF_UNSPEC\00 */, "i8", ALLOC_NORMAL);
__str174=allocate([65,70,95,73,78,69,84,0] /* AF_INET\00 */, "i8", ALLOC_NORMAL);
__str175=allocate([65,70,95,73,78,69,84,54,0] /* AF_INET6\00 */, "i8", ALLOC_NORMAL);
__str176=allocate([65,70,95,85,78,73,88,0] /* AF_UNIX\00 */, "i8", ALLOC_NORMAL);
__str177=allocate([65,70,95,65,88,50,53,0] /* AF_AX25\00 */, "i8", ALLOC_NORMAL);
__str178=allocate([65,70,95,73,80,88,0] /* AF_IPX\00 */, "i8", ALLOC_NORMAL);
__str179=allocate([65,70,95,65,80,80,76,69,84,65,76,75,0] /* AF_APPLETALK\00 */, "i8", ALLOC_NORMAL);
__str180=allocate([65,70,95,78,69,84,82,79,77,0] /* AF_NETROM\00 */, "i8", ALLOC_NORMAL);
__str181=allocate([65,70,95,66,82,73,68,71,69,0] /* AF_BRIDGE\00 */, "i8", ALLOC_NORMAL);
__str182=allocate([65,70,95,65,84,77,80,86,67,0] /* AF_ATMPVC\00 */, "i8", ALLOC_NORMAL);
__str183=allocate([65,70,95,88,50,53,0] /* AF_X25\00 */, "i8", ALLOC_NORMAL);
__str184=allocate([65,70,95,82,79,83,69,0] /* AF_ROSE\00 */, "i8", ALLOC_NORMAL);
__str185=allocate([65,70,95,68,69,67,110,101,116,0] /* AF_DECnet\00 */, "i8", ALLOC_NORMAL);
__str186=allocate([65,70,95,78,69,84,66,69,85,73,0] /* AF_NETBEUI\00 */, "i8", ALLOC_NORMAL);
__str187=allocate([65,70,95,83,69,67,85,82,73,84,89,0] /* AF_SECURITY\00 */, "i8", ALLOC_NORMAL);
__str188=allocate([65,70,95,75,69,89,0] /* AF_KEY\00 */, "i8", ALLOC_NORMAL);
__str189=allocate([65,70,95,78,69,84,76,73,78,75,0] /* AF_NETLINK\00 */, "i8", ALLOC_NORMAL);
__str190=allocate([78,69,84,76,73,78,75,95,82,79,85,84,69,0] /* NETLINK_ROUTE\00 */, "i8", ALLOC_NORMAL);
__str191=allocate([78,69,84,76,73,78,75,95,85,83,69,82,83,79,67,75,0] /* NETLINK_USERSOCK\00 */, "i8", ALLOC_NORMAL);
__str192=allocate([78,69,84,76,73,78,75,95,70,73,82,69,87,65,76,76,0] /* NETLINK_FIREWALL\00 */, "i8", ALLOC_NORMAL);
__str193=allocate([78,69,84,76,73,78,75,95,78,70,76,79,71,0] /* NETLINK_NFLOG\00 */, "i8", ALLOC_NORMAL);
__str194=allocate([78,69,84,76,73,78,75,95,88,70,82,77,0] /* NETLINK_XFRM\00 */, "i8", ALLOC_NORMAL);
__str195=allocate([78,69,84,76,73,78,75,95,73,80,54,95,70,87,0] /* NETLINK_IP6_FW\00 */, "i8", ALLOC_NORMAL);
__str196=allocate([78,69,84,76,73,78,75,95,68,78,82,84,77,83,71,0] /* NETLINK_DNRTMSG\00 */, "i8", ALLOC_NORMAL);
__str197=allocate([65,70,95,82,79,85,84,69,0] /* AF_ROUTE\00 */, "i8", ALLOC_NORMAL);
__str198=allocate([65,70,95,65,83,72,0] /* AF_ASH\00 */, "i8", ALLOC_NORMAL);
__str199=allocate([65,70,95,69,67,79,78,69,84,0] /* AF_ECONET\00 */, "i8", ALLOC_NORMAL);
__str200=allocate([65,70,95,65,84,77,83,86,67,0] /* AF_ATMSVC\00 */, "i8", ALLOC_NORMAL);
__str201=allocate([65,70,95,83,78,65,0] /* AF_SNA\00 */, "i8", ALLOC_NORMAL);
__str202=allocate([65,70,95,73,82,68,65,0] /* AF_IRDA\00 */, "i8", ALLOC_NORMAL);
__str203=allocate([65,70,95,80,80,80,79,88,0] /* AF_PPPOX\00 */, "i8", ALLOC_NORMAL);
__str204=allocate([65,70,95,87,65,78,80,73,80,69,0] /* AF_WANPIPE\00 */, "i8", ALLOC_NORMAL);
__str205=allocate([65,70,95,76,76,67,0] /* AF_LLC\00 */, "i8", ALLOC_NORMAL);
__str206=allocate([65,70,95,80,65,67,75,69,84,0] /* AF_PACKET\00 */, "i8", ALLOC_NORMAL);
__str207=allocate([80,70,95,80,65,67,75,69,84,0] /* PF_PACKET\00 */, "i8", ALLOC_NORMAL);
__str208=allocate([80,65,67,75,69,84,95,72,79,83,84,0] /* PACKET_HOST\00 */, "i8", ALLOC_NORMAL);
__str209=allocate([80,65,67,75,69,84,95,66,82,79,65,68,67,65,83,84,0] /* PACKET_BROADCAST\00 */, "i8", ALLOC_NORMAL);
__str210=allocate([80,65,67,75,69,84,95,77,85,76,84,73,67,65,83,84,0] /* PACKET_MULTICAST\00 */, "i8", ALLOC_NORMAL);
__str211=allocate([80,65,67,75,69,84,95,79,84,72,69,82,72,79,83,84,0] /* PACKET_OTHERHOST\00 */, "i8", ALLOC_NORMAL);
__str212=allocate([80,65,67,75,69,84,95,79,85,84,71,79,73,78,71,0] /* PACKET_OUTGOING\00 */, "i8", ALLOC_NORMAL);
__str213=allocate([80,65,67,75,69,84,95,76,79,79,80,66,65,67,75,0] /* PACKET_LOOPBACK\00 */, "i8", ALLOC_NORMAL);
__str214=allocate([80,65,67,75,69,84,95,70,65,83,84,82,79,85,84,69,0] /* PACKET_FASTROUTE\00 */, "i8", ALLOC_NORMAL);
__str215=allocate([65,70,95,84,73,80,67,0] /* AF_TIPC\00 */, "i8", ALLOC_NORMAL);
__str216=allocate([84,73,80,67,95,65,68,68,82,95,78,65,77,69,83,69,81,0] /* TIPC_ADDR_NAMESEQ\00 */, "i8", ALLOC_NORMAL);
__str217=allocate([84,73,80,67,95,65,68,68,82,95,78,65,77,69,0] /* TIPC_ADDR_NAME\00 */, "i8", ALLOC_NORMAL);
__str218=allocate([84,73,80,67,95,65,68,68,82,95,73,68,0] /* TIPC_ADDR_ID\00 */, "i8", ALLOC_NORMAL);
__str219=allocate([84,73,80,67,95,90,79,78,69,95,83,67,79,80,69,0] /* TIPC_ZONE_SCOPE\00 */, "i8", ALLOC_NORMAL);
__str220=allocate([84,73,80,67,95,67,76,85,83,84,69,82,95,83,67,79,80,69,0] /* TIPC_CLUSTER_SCOPE\0 */, "i8", ALLOC_NORMAL);
__str221=allocate([84,73,80,67,95,78,79,68,69,95,83,67,79,80,69,0] /* TIPC_NODE_SCOPE\00 */, "i8", ALLOC_NORMAL);
__str222=allocate([83,79,76,95,84,73,80,67,0] /* SOL_TIPC\00 */, "i8", ALLOC_NORMAL);
__str223=allocate([84,73,80,67,95,73,77,80,79,82,84,65,78,67,69,0] /* TIPC_IMPORTANCE\00 */, "i8", ALLOC_NORMAL);
__str224=allocate([84,73,80,67,95,83,82,67,95,68,82,79,80,80,65,66,76,69,0] /* TIPC_SRC_DROPPABLE\0 */, "i8", ALLOC_NORMAL);
__str225=allocate([84,73,80,67,95,68,69,83,84,95,68,82,79,80,80,65,66,76,69,0] /* TIPC_DEST_DROPPABLE\ */, "i8", ALLOC_NORMAL);
__str226=allocate([84,73,80,67,95,67,79,78,78,95,84,73,77,69,79,85,84,0] /* TIPC_CONN_TIMEOUT\00 */, "i8", ALLOC_NORMAL);
__str227=allocate([84,73,80,67,95,76,79,87,95,73,77,80,79,82,84,65,78,67,69,0] /* TIPC_LOW_IMPORTANCE\ */, "i8", ALLOC_NORMAL);
__str228=allocate([84,73,80,67,95,77,69,68,73,85,77,95,73,77,80,79,82,84,65,78,67,69,0] /* TIPC_MEDIUM_IMPORTAN */, "i8", ALLOC_NORMAL);
__str229=allocate([84,73,80,67,95,72,73,71,72,95,73,77,80,79,82,84,65,78,67,69,0] /* TIPC_HIGH_IMPORTANCE */, "i8", ALLOC_NORMAL);
__str230=allocate([84,73,80,67,95,67,82,73,84,73,67,65,76,95,73,77,80,79,82,84,65,78,67,69,0] /* TIPC_CRITICAL_IMPORT */, "i8", ALLOC_NORMAL);
__str231=allocate([84,73,80,67,95,83,85,66,95,80,79,82,84,83,0] /* TIPC_SUB_PORTS\00 */, "i8", ALLOC_NORMAL);
__str232=allocate([84,73,80,67,95,83,85,66,95,83,69,82,86,73,67,69,0] /* TIPC_SUB_SERVICE\00 */, "i8", ALLOC_NORMAL);
__str233=allocate([84,73,80,67,95,83,85,66,95,67,65,78,67,69,76,0] /* TIPC_SUB_CANCEL\00 */, "i8", ALLOC_NORMAL);
__str234=allocate([84,73,80,67,95,87,65,73,84,95,70,79,82,69,86,69,82,0] /* TIPC_WAIT_FOREVER\00 */, "i8", ALLOC_NORMAL);
__str235=allocate([84,73,80,67,95,80,85,66,76,73,83,72,69,68,0] /* TIPC_PUBLISHED\00 */, "i8", ALLOC_NORMAL);
__str236=allocate([84,73,80,67,95,87,73,84,72,68,82,65,87,78,0] /* TIPC_WITHDRAWN\00 */, "i8", ALLOC_NORMAL);
__str237=allocate([84,73,80,67,95,83,85,66,83,67,82,95,84,73,77,69,79,85,84,0] /* TIPC_SUBSCR_TIMEOUT\ */, "i8", ALLOC_NORMAL);
__str238=allocate([84,73,80,67,95,67,70,71,95,83,82,86,0] /* TIPC_CFG_SRV\00 */, "i8", ALLOC_NORMAL);
__str239=allocate([84,73,80,67,95,84,79,80,95,83,82,86,0] /* TIPC_TOP_SRV\00 */, "i8", ALLOC_NORMAL);
__str240=allocate([83,79,67,75,95,83,84,82,69,65,77,0] /* SOCK_STREAM\00 */, "i8", ALLOC_NORMAL);
__str241=allocate([83,79,67,75,95,68,71,82,65,77,0] /* SOCK_DGRAM\00 */, "i8", ALLOC_NORMAL);
__str242=allocate([83,79,67,75,95,82,65,87,0] /* SOCK_RAW\00 */, "i8", ALLOC_NORMAL);
__str243=allocate([83,79,67,75,95,83,69,81,80,65,67,75,69,84,0] /* SOCK_SEQPACKET\00 */, "i8", ALLOC_NORMAL);
__str244=allocate([83,79,67,75,95,82,68,77,0] /* SOCK_RDM\00 */, "i8", ALLOC_NORMAL);
__str245=allocate([83,79,95,68,69,66,85,71,0] /* SO_DEBUG\00 */, "i8", ALLOC_NORMAL);
__str246=allocate([83,79,95,65,67,67,69,80,84,67,79,78,78,0] /* SO_ACCEPTCONN\00 */, "i8", ALLOC_NORMAL);
__str247=allocate([83,79,95,82,69,85,83,69,65,68,68,82,0] /* SO_REUSEADDR\00 */, "i8", ALLOC_NORMAL);
__str248=allocate([83,79,95,75,69,69,80,65,76,73,86,69,0] /* SO_KEEPALIVE\00 */, "i8", ALLOC_NORMAL);
__str249=allocate([83,79,95,68,79,78,84,82,79,85,84,69,0] /* SO_DONTROUTE\00 */, "i8", ALLOC_NORMAL);
__str250=allocate([83,79,95,66,82,79,65,68,67,65,83,84,0] /* SO_BROADCAST\00 */, "i8", ALLOC_NORMAL);
__str251=allocate([83,79,95,76,73,78,71,69,82,0] /* SO_LINGER\00 */, "i8", ALLOC_NORMAL);
__str252=allocate([83,79,95,79,79,66,73,78,76,73,78,69,0] /* SO_OOBINLINE\00 */, "i8", ALLOC_NORMAL);
__str253=allocate([83,79,95,83,78,68,66,85,70,0] /* SO_SNDBUF\00 */, "i8", ALLOC_NORMAL);
__str254=allocate([83,79,95,82,67,86,66,85,70,0] /* SO_RCVBUF\00 */, "i8", ALLOC_NORMAL);
__str255=allocate([83,79,95,83,78,68,76,79,87,65,84,0] /* SO_SNDLOWAT\00 */, "i8", ALLOC_NORMAL);
__str256=allocate([83,79,95,82,67,86,76,79,87,65,84,0] /* SO_RCVLOWAT\00 */, "i8", ALLOC_NORMAL);
__str257=allocate([83,79,95,83,78,68,84,73,77,69,79,0] /* SO_SNDTIMEO\00 */, "i8", ALLOC_NORMAL);
__str258=allocate([83,79,95,82,67,86,84,73,77,69,79,0] /* SO_RCVTIMEO\00 */, "i8", ALLOC_NORMAL);
__str259=allocate([83,79,95,69,82,82,79,82,0] /* SO_ERROR\00 */, "i8", ALLOC_NORMAL);
__str260=allocate([83,79,95,84,89,80,69,0] /* SO_TYPE\00 */, "i8", ALLOC_NORMAL);
__str261=allocate([83,79,77,65,88,67,79,78,78,0] /* SOMAXCONN\00 */, "i8", ALLOC_NORMAL);
__str262=allocate([77,83,71,95,79,79,66,0] /* MSG_OOB\00 */, "i8", ALLOC_NORMAL);
__str263=allocate([77,83,71,95,80,69,69,75,0] /* MSG_PEEK\00 */, "i8", ALLOC_NORMAL);
__str264=allocate([77,83,71,95,68,79,78,84,82,79,85,84,69,0] /* MSG_DONTROUTE\00 */, "i8", ALLOC_NORMAL);
__str265=allocate([77,83,71,95,68,79,78,84,87,65,73,84,0] /* MSG_DONTWAIT\00 */, "i8", ALLOC_NORMAL);
__str266=allocate([77,83,71,95,69,79,82,0] /* MSG_EOR\00 */, "i8", ALLOC_NORMAL);
__str267=allocate([77,83,71,95,84,82,85,78,67,0] /* MSG_TRUNC\00 */, "i8", ALLOC_NORMAL);
__str268=allocate([77,83,71,95,67,84,82,85,78,67,0] /* MSG_CTRUNC\00 */, "i8", ALLOC_NORMAL);
__str269=allocate([77,83,71,95,87,65,73,84,65,76,76,0] /* MSG_WAITALL\00 */, "i8", ALLOC_NORMAL);
__str270=allocate([83,79,76,95,83,79,67,75,69,84,0] /* SOL_SOCKET\00 */, "i8", ALLOC_NORMAL);
__str271=allocate([83,79,76,95,73,80,0] /* SOL_IP\00 */, "i8", ALLOC_NORMAL);
__str272=allocate([83,79,76,95,84,67,80,0] /* SOL_TCP\00 */, "i8", ALLOC_NORMAL);
__str273=allocate([83,79,76,95,85,68,80,0] /* SOL_UDP\00 */, "i8", ALLOC_NORMAL);
__str274=allocate([73,80,80,82,79,84,79,95,73,80,0] /* IPPROTO_IP\00 */, "i8", ALLOC_NORMAL);
__str275=allocate([73,80,80,82,79,84,79,95,72,79,80,79,80,84,83,0] /* IPPROTO_HOPOPTS\00 */, "i8", ALLOC_NORMAL);
__str276=allocate([73,80,80,82,79,84,79,95,73,67,77,80,0] /* IPPROTO_ICMP\00 */, "i8", ALLOC_NORMAL);
__str277=allocate([73,80,80,82,79,84,79,95,73,71,77,80,0] /* IPPROTO_IGMP\00 */, "i8", ALLOC_NORMAL);
__str278=allocate([73,80,80,82,79,84,79,95,73,80,86,54,0] /* IPPROTO_IPV6\00 */, "i8", ALLOC_NORMAL);
__str279=allocate([73,80,80,82,79,84,79,95,73,80,73,80,0] /* IPPROTO_IPIP\00 */, "i8", ALLOC_NORMAL);
__str280=allocate([73,80,80,82,79,84,79,95,84,67,80,0] /* IPPROTO_TCP\00 */, "i8", ALLOC_NORMAL);
__str281=allocate([73,80,80,82,79,84,79,95,69,71,80,0] /* IPPROTO_EGP\00 */, "i8", ALLOC_NORMAL);
__str282=allocate([73,80,80,82,79,84,79,95,80,85,80,0] /* IPPROTO_PUP\00 */, "i8", ALLOC_NORMAL);
__str283=allocate([73,80,80,82,79,84,79,95,85,68,80,0] /* IPPROTO_UDP\00 */, "i8", ALLOC_NORMAL);
__str284=allocate([73,80,80,82,79,84,79,95,73,68,80,0] /* IPPROTO_IDP\00 */, "i8", ALLOC_NORMAL);
__str285=allocate([73,80,80,82,79,84,79,95,84,80,0] /* IPPROTO_TP\00 */, "i8", ALLOC_NORMAL);
__str286=allocate([73,80,80,82,79,84,79,95,82,79,85,84,73,78,71,0] /* IPPROTO_ROUTING\00 */, "i8", ALLOC_NORMAL);
__str287=allocate([73,80,80,82,79,84,79,95,70,82,65,71,77,69,78,84,0] /* IPPROTO_FRAGMENT\00 */, "i8", ALLOC_NORMAL);
__str288=allocate([73,80,80,82,79,84,79,95,82,83,86,80,0] /* IPPROTO_RSVP\00 */, "i8", ALLOC_NORMAL);
__str289=allocate([73,80,80,82,79,84,79,95,71,82,69,0] /* IPPROTO_GRE\00 */, "i8", ALLOC_NORMAL);
__str290=allocate([73,80,80,82,79,84,79,95,69,83,80,0] /* IPPROTO_ESP\00 */, "i8", ALLOC_NORMAL);
__str291=allocate([73,80,80,82,79,84,79,95,65,72,0] /* IPPROTO_AH\00 */, "i8", ALLOC_NORMAL);
__str292=allocate([73,80,80,82,79,84,79,95,73,67,77,80,86,54,0] /* IPPROTO_ICMPV6\00 */, "i8", ALLOC_NORMAL);
__str293=allocate([73,80,80,82,79,84,79,95,78,79,78,69,0] /* IPPROTO_NONE\00 */, "i8", ALLOC_NORMAL);
__str294=allocate([73,80,80,82,79,84,79,95,68,83,84,79,80,84,83,0] /* IPPROTO_DSTOPTS\00 */, "i8", ALLOC_NORMAL);
__str295=allocate([73,80,80,82,79,84,79,95,80,73,77,0] /* IPPROTO_PIM\00 */, "i8", ALLOC_NORMAL);
__str296=allocate([73,80,80,82,79,84,79,95,82,65,87,0] /* IPPROTO_RAW\00 */, "i8", ALLOC_NORMAL);
__str297=allocate([73,80,80,79,82,84,95,82,69,83,69,82,86,69,68,0] /* IPPORT_RESERVED\00 */, "i8", ALLOC_NORMAL);
__str298=allocate([73,80,80,79,82,84,95,85,83,69,82,82,69,83,69,82,86,69,68,0] /* IPPORT_USERRESERVED\ */, "i8", ALLOC_NORMAL);
__str299=allocate([73,78,65,68,68,82,95,65,78,89,0] /* INADDR_ANY\00 */, "i8", ALLOC_NORMAL);
__str300=allocate([73,78,65,68,68,82,95,66,82,79,65,68,67,65,83,84,0] /* INADDR_BROADCAST\00 */, "i8", ALLOC_NORMAL);
__str301=allocate([73,78,65,68,68,82,95,76,79,79,80,66,65,67,75,0] /* INADDR_LOOPBACK\00 */, "i8", ALLOC_NORMAL);
__str302=allocate([73,78,65,68,68,82,95,85,78,83,80,69,67,95,71,82,79,85,80,0] /* INADDR_UNSPEC_GROUP\ */, "i8", ALLOC_NORMAL);
__str303=allocate([73,78,65,68,68,82,95,65,76,76,72,79,83,84,83,95,71,82,79,85,80,0] /* INADDR_ALLHOSTS_GROU */, "i8", ALLOC_NORMAL);
__str304=allocate([73,78,65,68,68,82,95,77,65,88,95,76,79,67,65,76,95,71,82,79,85,80,0] /* INADDR_MAX_LOCAL_GRO */, "i8", ALLOC_NORMAL);
__str305=allocate([73,78,65,68,68,82,95,78,79,78,69,0] /* INADDR_NONE\00 */, "i8", ALLOC_NORMAL);
__str306=allocate([73,80,95,79,80,84,73,79,78,83,0] /* IP_OPTIONS\00 */, "i8", ALLOC_NORMAL);
__str307=allocate([73,80,95,72,68,82,73,78,67,76,0] /* IP_HDRINCL\00 */, "i8", ALLOC_NORMAL);
__str308=allocate([73,80,95,84,79,83,0] /* IP_TOS\00 */, "i8", ALLOC_NORMAL);
__str309=allocate([73,80,95,84,84,76,0] /* IP_TTL\00 */, "i8", ALLOC_NORMAL);
__str310=allocate([73,80,95,82,69,67,86,79,80,84,83,0] /* IP_RECVOPTS\00 */, "i8", ALLOC_NORMAL);
__str311=allocate([73,80,95,82,69,67,86,82,69,84,79,80,84,83,0] /* IP_RECVRETOPTS\00 */, "i8", ALLOC_NORMAL);
__str312=allocate([73,80,95,82,69,84,79,80,84,83,0] /* IP_RETOPTS\00 */, "i8", ALLOC_NORMAL);
__str313=allocate([73,80,95,77,85,76,84,73,67,65,83,84,95,73,70,0] /* IP_MULTICAST_IF\00 */, "i8", ALLOC_NORMAL);
__str314=allocate([73,80,95,77,85,76,84,73,67,65,83,84,95,84,84,76,0] /* IP_MULTICAST_TTL\00 */, "i8", ALLOC_NORMAL);
__str315=allocate([73,80,95,77,85,76,84,73,67,65,83,84,95,76,79,79,80,0] /* IP_MULTICAST_LOOP\00 */, "i8", ALLOC_NORMAL);
__str316=allocate([73,80,95,65,68,68,95,77,69,77,66,69,82,83,72,73,80,0] /* IP_ADD_MEMBERSHIP\00 */, "i8", ALLOC_NORMAL);
__str317=allocate([73,80,95,68,82,79,80,95,77,69,77,66,69,82,83,72,73,80,0] /* IP_DROP_MEMBERSHIP\0 */, "i8", ALLOC_NORMAL);
__str318=allocate([73,80,95,68,69,70,65,85,76,84,95,77,85,76,84,73,67,65,83,84,95,84,84,76,0] /* IP_DEFAULT_MULTICAST */, "i8", ALLOC_NORMAL);
__str319=allocate([73,80,95,68,69,70,65,85,76,84,95,77,85,76,84,73,67,65,83,84,95,76,79,79,80,0] /* IP_DEFAULT_MULTICAST */, "i8", ALLOC_NORMAL);
__str320=allocate([73,80,95,77,65,88,95,77,69,77,66,69,82,83,72,73,80,83,0] /* IP_MAX_MEMBERSHIPS\0 */, "i8", ALLOC_NORMAL);
__str321=allocate([73,80,86,54,95,74,79,73,78,95,71,82,79,85,80,0] /* IPV6_JOIN_GROUP\00 */, "i8", ALLOC_NORMAL);
__str322=allocate([73,80,86,54,95,76,69,65,86,69,95,71,82,79,85,80,0] /* IPV6_LEAVE_GROUP\00 */, "i8", ALLOC_NORMAL);
__str323=allocate([73,80,86,54,95,77,85,76,84,73,67,65,83,84,95,72,79,80,83,0] /* IPV6_MULTICAST_HOPS\ */, "i8", ALLOC_NORMAL);
__str324=allocate([73,80,86,54,95,77,85,76,84,73,67,65,83,84,95,73,70,0] /* IPV6_MULTICAST_IF\00 */, "i8", ALLOC_NORMAL);
__str325=allocate([73,80,86,54,95,77,85,76,84,73,67,65,83,84,95,76,79,79,80,0] /* IPV6_MULTICAST_LOOP\ */, "i8", ALLOC_NORMAL);
__str326=allocate([73,80,86,54,95,85,78,73,67,65,83,84,95,72,79,80,83,0] /* IPV6_UNICAST_HOPS\00 */, "i8", ALLOC_NORMAL);
__str327=allocate([73,80,86,54,95,86,54,79,78,76,89,0] /* IPV6_V6ONLY\00 */, "i8", ALLOC_NORMAL);
__str328=allocate([73,80,86,54,95,67,72,69,67,75,83,85,77,0] /* IPV6_CHECKSUM\00 */, "i8", ALLOC_NORMAL);
__str329=allocate([73,80,86,54,95,68,83,84,79,80,84,83,0] /* IPV6_DSTOPTS\00 */, "i8", ALLOC_NORMAL);
__str330=allocate([73,80,86,54,95,72,79,80,76,73,77,73,84,0] /* IPV6_HOPLIMIT\00 */, "i8", ALLOC_NORMAL);
__str331=allocate([73,80,86,54,95,72,79,80,79,80,84,83,0] /* IPV6_HOPOPTS\00 */, "i8", ALLOC_NORMAL);
__str332=allocate([73,80,86,54,95,78,69,88,84,72,79,80,0] /* IPV6_NEXTHOP\00 */, "i8", ALLOC_NORMAL);
__str333=allocate([73,80,86,54,95,80,75,84,73,78,70,79,0] /* IPV6_PKTINFO\00 */, "i8", ALLOC_NORMAL);
__str334=allocate([73,80,86,54,95,82,69,67,86,68,83,84,79,80,84,83,0] /* IPV6_RECVDSTOPTS\00 */, "i8", ALLOC_NORMAL);
__str335=allocate([73,80,86,54,95,82,69,67,86,72,79,80,76,73,77,73,84,0] /* IPV6_RECVHOPLIMIT\00 */, "i8", ALLOC_NORMAL);
__str336=allocate([73,80,86,54,95,82,69,67,86,72,79,80,79,80,84,83,0] /* IPV6_RECVHOPOPTS\00 */, "i8", ALLOC_NORMAL);
__str337=allocate([73,80,86,54,95,82,69,67,86,80,75,84,73,78,70,79,0] /* IPV6_RECVPKTINFO\00 */, "i8", ALLOC_NORMAL);
__str338=allocate([73,80,86,54,95,82,69,67,86,82,84,72,68,82,0] /* IPV6_RECVRTHDR\00 */, "i8", ALLOC_NORMAL);
__str339=allocate([73,80,86,54,95,82,69,67,86,84,67,76,65,83,83,0] /* IPV6_RECVTCLASS\00 */, "i8", ALLOC_NORMAL);
__str340=allocate([73,80,86,54,95,82,84,72,68,82,0] /* IPV6_RTHDR\00 */, "i8", ALLOC_NORMAL);
__str341=allocate([73,80,86,54,95,82,84,72,68,82,68,83,84,79,80,84,83,0] /* IPV6_RTHDRDSTOPTS\00 */, "i8", ALLOC_NORMAL);
__str342=allocate([73,80,86,54,95,82,84,72,68,82,95,84,89,80,69,95,48,0] /* IPV6_RTHDR_TYPE_0\00 */, "i8", ALLOC_NORMAL);
__str343=allocate([73,80,86,54,95,84,67,76,65,83,83,0] /* IPV6_TCLASS\00 */, "i8", ALLOC_NORMAL);
__str344=allocate([84,67,80,95,78,79,68,69,76,65,89,0] /* TCP_NODELAY\00 */, "i8", ALLOC_NORMAL);
__str345=allocate([84,67,80,95,77,65,88,83,69,71,0] /* TCP_MAXSEG\00 */, "i8", ALLOC_NORMAL);
__str346=allocate([84,67,80,95,67,79,82,75,0] /* TCP_CORK\00 */, "i8", ALLOC_NORMAL);
__str347=allocate([84,67,80,95,75,69,69,80,73,68,76,69,0] /* TCP_KEEPIDLE\00 */, "i8", ALLOC_NORMAL);
__str348=allocate([84,67,80,95,75,69,69,80,73,78,84,86,76,0] /* TCP_KEEPINTVL\00 */, "i8", ALLOC_NORMAL);
__str349=allocate([84,67,80,95,75,69,69,80,67,78,84,0] /* TCP_KEEPCNT\00 */, "i8", ALLOC_NORMAL);
__str350=allocate([84,67,80,95,83,89,78,67,78,84,0] /* TCP_SYNCNT\00 */, "i8", ALLOC_NORMAL);
__str351=allocate([84,67,80,95,76,73,78,71,69,82,50,0] /* TCP_LINGER2\00 */, "i8", ALLOC_NORMAL);
__str352=allocate([84,67,80,95,68,69,70,69,82,95,65,67,67,69,80,84,0] /* TCP_DEFER_ACCEPT\00 */, "i8", ALLOC_NORMAL);
__str353=allocate([84,67,80,95,87,73,78,68,79,87,95,67,76,65,77,80,0] /* TCP_WINDOW_CLAMP\00 */, "i8", ALLOC_NORMAL);
__str354=allocate([84,67,80,95,73,78,70,79,0] /* TCP_INFO\00 */, "i8", ALLOC_NORMAL);
__str355=allocate([84,67,80,95,81,85,73,67,75,65,67,75,0] /* TCP_QUICKACK\00 */, "i8", ALLOC_NORMAL);
__str356=allocate([69,65,73,95,65,68,68,82,70,65,77,73,76,89,0] /* EAI_ADDRFAMILY\00 */, "i8", ALLOC_NORMAL);
__str357=allocate([69,65,73,95,65,71,65,73,78,0] /* EAI_AGAIN\00 */, "i8", ALLOC_NORMAL);
__str358=allocate([69,65,73,95,66,65,68,70,76,65,71,83,0] /* EAI_BADFLAGS\00 */, "i8", ALLOC_NORMAL);
__str359=allocate([69,65,73,95,70,65,73,76,0] /* EAI_FAIL\00 */, "i8", ALLOC_NORMAL);
__str360=allocate([69,65,73,95,70,65,77,73,76,89,0] /* EAI_FAMILY\00 */, "i8", ALLOC_NORMAL);
__str361=allocate([69,65,73,95,77,69,77,79,82,89,0] /* EAI_MEMORY\00 */, "i8", ALLOC_NORMAL);
__str362=allocate([69,65,73,95,78,79,68,65,84,65,0] /* EAI_NODATA\00 */, "i8", ALLOC_NORMAL);
__str363=allocate([69,65,73,95,78,79,78,65,77,69,0] /* EAI_NONAME\00 */, "i8", ALLOC_NORMAL);
__str364=allocate([69,65,73,95,79,86,69,82,70,76,79,87,0] /* EAI_OVERFLOW\00 */, "i8", ALLOC_NORMAL);
__str365=allocate([69,65,73,95,83,69,82,86,73,67,69,0] /* EAI_SERVICE\00 */, "i8", ALLOC_NORMAL);
__str366=allocate([69,65,73,95,83,79,67,75,84,89,80,69,0] /* EAI_SOCKTYPE\00 */, "i8", ALLOC_NORMAL);
__str367=allocate([69,65,73,95,83,89,83,84,69,77,0] /* EAI_SYSTEM\00 */, "i8", ALLOC_NORMAL);
__str368=allocate([65,73,95,80,65,83,83,73,86,69,0] /* AI_PASSIVE\00 */, "i8", ALLOC_NORMAL);
__str369=allocate([65,73,95,67,65,78,79,78,78,65,77,69,0] /* AI_CANONNAME\00 */, "i8", ALLOC_NORMAL);
__str370=allocate([65,73,95,78,85,77,69,82,73,67,72,79,83,84,0] /* AI_NUMERICHOST\00 */, "i8", ALLOC_NORMAL);
__str371=allocate([65,73,95,78,85,77,69,82,73,67,83,69,82,86,0] /* AI_NUMERICSERV\00 */, "i8", ALLOC_NORMAL);
__str372=allocate([65,73,95,65,76,76,0] /* AI_ALL\00 */, "i8", ALLOC_NORMAL);
__str373=allocate([65,73,95,65,68,68,82,67,79,78,70,73,71,0] /* AI_ADDRCONFIG\00 */, "i8", ALLOC_NORMAL);
__str374=allocate([65,73,95,86,52,77,65,80,80,69,68,0] /* AI_V4MAPPED\00 */, "i8", ALLOC_NORMAL);
__str375=allocate([78,73,95,77,65,88,72,79,83,84,0] /* NI_MAXHOST\00 */, "i8", ALLOC_NORMAL);
__str376=allocate([78,73,95,77,65,88,83,69,82,86,0] /* NI_MAXSERV\00 */, "i8", ALLOC_NORMAL);
__str377=allocate([78,73,95,78,79,70,81,68,78,0] /* NI_NOFQDN\00 */, "i8", ALLOC_NORMAL);
__str378=allocate([78,73,95,78,85,77,69,82,73,67,72,79,83,84,0] /* NI_NUMERICHOST\00 */, "i8", ALLOC_NORMAL);
__str379=allocate([78,73,95,78,65,77,69,82,69,81,68,0] /* NI_NAMEREQD\00 */, "i8", ALLOC_NORMAL);
__str380=allocate([78,73,95,78,85,77,69,82,73,67,83,69,82,86,0] /* NI_NUMERICSERV\00 */, "i8", ALLOC_NORMAL);
__str381=allocate([78,73,95,68,71,82,65,77,0] /* NI_DGRAM\00 */, "i8", ALLOC_NORMAL);
__str382=allocate([83,72,85,84,95,82,68,0] /* SHUT_RD\00 */, "i8", ALLOC_NORMAL);
__str383=allocate([83,72,85,84,95,87,82,0] /* SHUT_WR\00 */, "i8", ALLOC_NORMAL);
__str384=allocate([83,72,85,84,95,82,68,87,82,0] /* SHUT_RDWR\00 */, "i8", ALLOC_NORMAL);
HEAP[_kwlist_10873]=__str47;
HEAP[_kwlist_10873+4]=__str48;
HEAP[_kwlist_10873+8]=__str49;
HEAP[_kwlist_11020]=__str47;
HEAP[_kwlist_11020+4]=__str48;
HEAP[_kwlist_11020+8]=__str49;
HEAP[_sock_methods]=__str64;
HEAP[_sock_methods+4]=(FUNCTION_TABLE_OFFSET + 6);
HEAP[_sock_methods+12]=_accept_doc;
HEAP[_sock_methods+16]=__str65;
HEAP[_sock_methods+20]=(FUNCTION_TABLE_OFFSET + 8);
HEAP[_sock_methods+28]=_bind_doc;
HEAP[_sock_methods+32]=__str66;
HEAP[_sock_methods+36]=(FUNCTION_TABLE_OFFSET + 10);
HEAP[_sock_methods+44]=_close_doc;
HEAP[_sock_methods+48]=__str67;
HEAP[_sock_methods+52]=(FUNCTION_TABLE_OFFSET + 12);
HEAP[_sock_methods+60]=_connect_doc;
HEAP[_sock_methods+64]=__str68;
HEAP[_sock_methods+68]=(FUNCTION_TABLE_OFFSET + 14);
HEAP[_sock_methods+76]=_connect_ex_doc;
HEAP[_sock_methods+80]=__str69;
HEAP[_sock_methods+84]=(FUNCTION_TABLE_OFFSET + 16);
HEAP[_sock_methods+92]=_dup_doc;
HEAP[_sock_methods+96]=__str70;
HEAP[_sock_methods+100]=(FUNCTION_TABLE_OFFSET + 18);
HEAP[_sock_methods+108]=_fileno_doc;
HEAP[_sock_methods+112]=__str71;
HEAP[_sock_methods+116]=(FUNCTION_TABLE_OFFSET + 20);
HEAP[_sock_methods+124]=_getpeername_doc;
HEAP[_sock_methods+128]=__str72;
HEAP[_sock_methods+132]=(FUNCTION_TABLE_OFFSET + 22);
HEAP[_sock_methods+140]=_getsockname_doc;
HEAP[_sock_methods+144]=__str73;
HEAP[_sock_methods+148]=(FUNCTION_TABLE_OFFSET + 24);
HEAP[_sock_methods+156]=_getsockopt_doc;
HEAP[_sock_methods+160]=__str74;
HEAP[_sock_methods+164]=(FUNCTION_TABLE_OFFSET + 26);
HEAP[_sock_methods+172]=_listen_doc;
HEAP[_sock_methods+176]=__str75;
HEAP[_sock_methods+180]=(FUNCTION_TABLE_OFFSET + 28);
HEAP[_sock_methods+188]=_makefile_doc;
HEAP[_sock_methods+192]=__str76;
HEAP[_sock_methods+196]=(FUNCTION_TABLE_OFFSET + 30);
HEAP[_sock_methods+204]=_recv_doc;
HEAP[_sock_methods+208]=__str77;
HEAP[_sock_methods+212]=(FUNCTION_TABLE_OFFSET + 32);
HEAP[_sock_methods+220]=_recv_into_doc;
HEAP[_sock_methods+224]=__str78;
HEAP[_sock_methods+228]=(FUNCTION_TABLE_OFFSET + 34);
HEAP[_sock_methods+236]=_recvfrom_doc;
HEAP[_sock_methods+240]=__str79;
HEAP[_sock_methods+244]=(FUNCTION_TABLE_OFFSET + 36);
HEAP[_sock_methods+252]=_recvfrom_into_doc;
HEAP[_sock_methods+256]=__str80;
HEAP[_sock_methods+260]=(FUNCTION_TABLE_OFFSET + 38);
HEAP[_sock_methods+268]=_send_doc;
HEAP[_sock_methods+272]=__str81;
HEAP[_sock_methods+276]=(FUNCTION_TABLE_OFFSET + 40);
HEAP[_sock_methods+284]=_sendall_doc;
HEAP[_sock_methods+288]=__str82;
HEAP[_sock_methods+292]=(FUNCTION_TABLE_OFFSET + 42);
HEAP[_sock_methods+300]=_sendto_doc;
HEAP[_sock_methods+304]=__str83;
HEAP[_sock_methods+308]=(FUNCTION_TABLE_OFFSET + 44);
HEAP[_sock_methods+316]=_setblocking_doc;
HEAP[_sock_methods+320]=__str84;
HEAP[_sock_methods+324]=(FUNCTION_TABLE_OFFSET + 46);
HEAP[_sock_methods+332]=_settimeout_doc;
HEAP[_sock_methods+336]=__str85;
HEAP[_sock_methods+340]=(FUNCTION_TABLE_OFFSET + 48);
HEAP[_sock_methods+348]=_gettimeout_doc;
HEAP[_sock_methods+352]=__str86;
HEAP[_sock_methods+356]=(FUNCTION_TABLE_OFFSET + 50);
HEAP[_sock_methods+364]=_setsockopt_doc;
HEAP[_sock_methods+368]=__str87;
HEAP[_sock_methods+372]=(FUNCTION_TABLE_OFFSET + 52);
HEAP[_sock_methods+380]=_shutdown_doc;
HEAP[_sock_memberlist]=__str88;
HEAP[_sock_memberlist+16]=__str89;
HEAP[_sock_memberlist+20]=__str90;
HEAP[_sock_memberlist+36]=__str91;
HEAP[_sock_memberlist+40]=__str92;
HEAP[_sock_memberlist+56]=__str93;
HEAP[_sock_memberlist+60]=__str94;
HEAP[_sock_memberlist+76]=__str95;
HEAP[_keywords_11267]=__str88;
HEAP[_keywords_11267+4]=__str90;
HEAP[_keywords_11267+8]=__str92;
HEAP[_sock_type+12]=__str98;
HEAP[_sock_type+24]=(FUNCTION_TABLE_OFFSET + 54);
HEAP[_sock_type+44]=(FUNCTION_TABLE_OFFSET + 56);
HEAP[_sock_type+72]=(FUNCTION_TABLE_OFFSET + 58);
HEAP[_sock_type+88]=_sock_doc;
HEAP[_sock_type+116]=_sock_methods;
HEAP[_sock_type+120]=_sock_memberlist;
HEAP[_sock_type+148]=(FUNCTION_TABLE_OFFSET + 60);
HEAP[_sock_type+152]=(FUNCTION_TABLE_OFFSET + 62);
HEAP[_sock_type+156]=(FUNCTION_TABLE_OFFSET + 64);
HEAP[_sock_type+160]=(FUNCTION_TABLE_OFFSET + 66);
HEAP[_socket_methods]=__str139;
HEAP[_socket_methods+4]=(FUNCTION_TABLE_OFFSET + 68);
HEAP[_socket_methods+12]=_gethostbyname_doc;
HEAP[_socket_methods+16]=__str140;
HEAP[_socket_methods+20]=(FUNCTION_TABLE_OFFSET + 70);
HEAP[_socket_methods+28]=_ghbn_ex_doc;
HEAP[_socket_methods+32]=__str141;
HEAP[_socket_methods+36]=(FUNCTION_TABLE_OFFSET + 72);
HEAP[_socket_methods+44]=_gethostbyaddr_doc;
HEAP[_socket_methods+48]=__str142;
HEAP[_socket_methods+52]=(FUNCTION_TABLE_OFFSET + 74);
HEAP[_socket_methods+60]=_gethostname_doc;
HEAP[_socket_methods+64]=__str143;
HEAP[_socket_methods+68]=(FUNCTION_TABLE_OFFSET + 76);
HEAP[_socket_methods+76]=_getservbyname_doc;
HEAP[_socket_methods+80]=__str144;
HEAP[_socket_methods+84]=(FUNCTION_TABLE_OFFSET + 78);
HEAP[_socket_methods+92]=_getservbyport_doc;
HEAP[_socket_methods+96]=__str145;
HEAP[_socket_methods+100]=(FUNCTION_TABLE_OFFSET + 80);
HEAP[_socket_methods+108]=_getprotobyname_doc;
HEAP[_socket_methods+112]=__str146;
HEAP[_socket_methods+116]=(FUNCTION_TABLE_OFFSET + 82);
HEAP[_socket_methods+124]=_fromfd_doc;
HEAP[_socket_methods+128]=__str147;
HEAP[_socket_methods+132]=(FUNCTION_TABLE_OFFSET + 84);
HEAP[_socket_methods+140]=_socketpair_doc;
HEAP[_socket_methods+144]=__str148;
HEAP[_socket_methods+148]=(FUNCTION_TABLE_OFFSET + 86);
HEAP[_socket_methods+156]=_ntohs_doc;
HEAP[_socket_methods+160]=__str149;
HEAP[_socket_methods+164]=(FUNCTION_TABLE_OFFSET + 88);
HEAP[_socket_methods+172]=_ntohl_doc;
HEAP[_socket_methods+176]=__str150;
HEAP[_socket_methods+180]=(FUNCTION_TABLE_OFFSET + 90);
HEAP[_socket_methods+188]=_htons_doc;
HEAP[_socket_methods+192]=__str151;
HEAP[_socket_methods+196]=(FUNCTION_TABLE_OFFSET + 92);
HEAP[_socket_methods+204]=_htonl_doc;
HEAP[_socket_methods+208]=__str152;
HEAP[_socket_methods+212]=(FUNCTION_TABLE_OFFSET + 94);
HEAP[_socket_methods+220]=_inet_aton_doc;
HEAP[_socket_methods+224]=__str153;
HEAP[_socket_methods+228]=(FUNCTION_TABLE_OFFSET + 96);
HEAP[_socket_methods+236]=_inet_ntoa_doc;
HEAP[_socket_methods+240]=__str154;
HEAP[_socket_methods+244]=(FUNCTION_TABLE_OFFSET + 98);
HEAP[_socket_methods+252]=_inet_pton_doc;
HEAP[_socket_methods+256]=__str155;
HEAP[_socket_methods+260]=(FUNCTION_TABLE_OFFSET + 100);
HEAP[_socket_methods+268]=_inet_ntop_doc;
HEAP[_socket_methods+272]=__str156;
HEAP[_socket_methods+276]=(FUNCTION_TABLE_OFFSET + 102);
HEAP[_socket_methods+284]=_getaddrinfo_doc;
HEAP[_socket_methods+288]=__str157;
HEAP[_socket_methods+292]=(FUNCTION_TABLE_OFFSET + 104);
HEAP[_socket_methods+300]=_getnameinfo_doc;
HEAP[_socket_methods+304]=__str158;
HEAP[_socket_methods+308]=(FUNCTION_TABLE_OFFSET + 106);
HEAP[_socket_methods+316]=_getdefaulttimeout_doc;
HEAP[_socket_methods+320]=__str159;
HEAP[_socket_methods+324]=(FUNCTION_TABLE_OFFSET + 108);
HEAP[_socket_methods+332]=_setdefaulttimeout_doc;
HEAP[_PySocketModuleAPI]=_sock_type;

  __globalConstructor__();
}
Module['run'] = run;

// {{PRE_RUN_ADDITIONS}}

run();

// {{POST_RUN_ADDITIONS}}





  // {{MODULE_ADDITIONS}}

  return Module;
});

